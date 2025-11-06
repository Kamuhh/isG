/* global ISResumenCfg, ajaxurl, jQuery */
(function($){
  function onEncounterRoute(){
    return /#\/patient-encounter\/dashboard\//.test(location.hash);
  }
  function extractEncounterId(){
    var m = location.hash && location.hash.match(/#\/patient-encounter\/dashboard\/(\d+)/);
    var id = m && m[1] ? parseInt(m[1],10) : (window.activeEncounterId||null);
    return id;
  }
  function openSummaryModal(encounterId){
    if(!encounterId){
      if (onEncounterRoute()) { alert(ISResumenCfg.i18n.noId); }
      return;
    }
    const params = {
      action: 'kc_get_encounter_summary_html',
      nonce: ISResumenCfg.nonce,
      encounter_id: String(encounterId)
    };
    $.get(ISResumenCfg.ajax_url, params).done(function(res){
      if(res && res.status && res.data){
        $('#kc-summary-content').html(res.data);
        var $m = $('#kcSummaryModal');
        if ($m.modal){ $m.modal('show'); }
        else {
          $m.addClass('isr-open');
          if (!$('.isr-backdrop').length){ $('<div class="isr-backdrop"></div>').appendTo(document.body); }
        }
      }else{
        alert(res && res.message ? res.message : ISResumenCfg.i18n.loadErr);
      }
    }).fail(function(){
      alert(ISResumenCfg.i18n.loadErr);
    });
  }

  function sendSummaryEmail(encounterId){
    if(!encounterId){ alert(ISResumenCfg.i18n.noId); return; }
    const params = {
      action: 'kc_send_encounter_summary',
      nonce: ISResumenCfg.nonce,
      encounter_id: String(encounterId)
    };
    $.get(ISResumenCfg.ajax_url, params).done(function(res){
      alert(res && res.message ? res.message : (res.status ? ISResumenCfg.i18n.sendOK : ISResumenCfg.i18n.sendKO));
    }).fail(function(){
      alert(ISResumenCfg.i18n.sendKO);
    });
  }

  function viewPdfFromHtml(){
    var html = document.getElementById('kc-summary-content').innerHTML || '';
    var w = window.open('', '_blank');
    w.document.open();
    w.document.write('<!doctype html><html><head><meta charset="utf-8"><title>'+ISResumenCfg.i18n.title+'</title></head><body>'+html+'</body></html>');
    w.document.close();
    setTimeout(function(){ w.focus(); w.print(); }, 300);
  }

  // Expose API
  window.ISResumenAtencion = {
    open: openSummaryModal,
    email: sendSummaryEmail,
    pdf: viewPdfFromHtml
  };

  // Wire modal footer buttons
  $(document).on('click', '#kc-summary-email', function(){
    var id = window.activeEncounterId || $(this).data('encounter-id');
    sendSummaryEmail(id);
  });
  $(document).on('click', '#kc-summary-pdf', function(){
    viewPdfFromHtml();
  });
  $(document).on('click', '#kcSummaryModal [data-dismiss="modal"]', function(){
    var $m = $('#kcSummaryModal');
    if ($m.modal){ $m.modal('hide'); }
    else { $m.removeClass('isr-open'); $('.isr-backdrop').remove(); }
  });

  // Generic trigger: any button with data-action="open-summary" (solo en la ruta de consulta)
  $(document).on('click', '[data-action="open-summary"]', function(e){
    if (!onEncounterRoute()) return;
    e.preventDefault(); e.stopPropagation();
    var id = $(this).data('encounter-id') || extractEncounterId();
    openSummaryModal(id);
    return false;
  });

  // Auto-detect and hijack existing "Resumen de atención" button rendered por la SPA
  function hijackSummaryButtons(root){
    if (!onEncounterRoute()) return;
    // 1) Selector exacto por id conocido
    var $byId = $(root).find('#kc-encounter-print');
    $byId.each(function(){
      var orig = this, $orig = $(this);
      if ($orig.data('isResumenReplaced')) return;
      $orig.data('isResumenReplaced', true);
      try{
        var repl = document.createElement('button');
        repl.setAttribute('type','button');
        repl.className = orig.className; // conservar estilos
        repl.innerHTML = orig.innerHTML; // icono + texto
        repl.id = 'kc-encounter-summary'; // id propio para evitar delegados del sistema
        repl.addEventListener('click', function(ev){
          ev.preventDefault(); ev.stopImmediatePropagation(); ev.stopPropagation();
          openSummaryModal(extractEncounterId());
          return false;
        }, true);
        // Reemplazar el nodo administrado por la SPA
        var parent = orig.parentNode;
        if (parent) {
          parent.replaceChild(repl, orig);
        }
      }catch(_){ /* noop */ }
    });

    // 2) Fallback por texto visible
    var $candidates = $(root).find('a,button').filter(function(){
      var t = $(this).text().trim().toLowerCase();
      return t === 'resumen de atención' || t === 'resumen de atencion';
    });
    $candidates.each(function(){
      var btn = this, $btn = $(btn);
      if ($btn.data('isResumenWired')) return;
      $btn.data('isResumenWired', true);
      try{
        // Reemplazar el botón por un clon sin handlers
        var clone = btn.cloneNode(true);
        clone.removeAttribute('href');
        clone.setAttribute('type','button');
        clone.addEventListener('click', function(ev){
          ev.preventDefault(); ev.stopImmediatePropagation(); ev.stopPropagation();
          openSummaryModal(extractEncounterId());
          return false;
        }, false);
        btn.parentNode.insertBefore(clone, btn);
        btn.classList.add('isr-hidden');
      }catch(_){
        // Fallback: capturar y bloquear
        btn.addEventListener('click', function(ev){
          ev.preventDefault(); ev.stopImmediatePropagation();
          openSummaryModal(extractEncounterId());
          return false;
        }, true);
      }
    });
  }

  // Initial scan and observe mutations for SPA rerenders
  $(function(){
    // Solo activar en la vista de consulta
    if (onEncounterRoute()) hijackSummaryButtons(document);
    var mo = new MutationObserver(function(muts){
      if (!onEncounterRoute()) return;
      muts.forEach(function(m){ if (m.addedNodes && m.addedNodes.length){ hijackSummaryButtons(m.target || document); }});
      hijackSummaryButtons(document);
    });
    try{ mo.observe(document.body, {childList:true, subtree:true}); }catch(e){}
    window.addEventListener('hashchange', function(){ if (onEncounterRoute()) hijackSummaryButtons(document); }, false);

    // Refuerzo: intentos periódicos los primeros segundos por si la SPA tarda
    var tries = 0, tm = setInterval(function(){
      if (!onEncounterRoute()) return;
      hijackSummaryButtons(document);
      tries++;
      if (tries > 10) clearInterval(tm);
    }, 800);

    // Global capture: intercept clicks on any control whose label coincide
    function matchesResumen(el){
      // Solo elementos clicables y solo en la ruta válida
      if (!onEncounterRoute()) return false;
      if (!el || !(el.tagName === 'A' || el.tagName === 'BUTTON' || el.getAttribute('role') === 'button')) return false;
      try{
        var txt = (el.innerText || el.textContent || '').trim();
        var t = txt.normalize('NFD').replace(/\p{Diacritic}/gu,'').toLowerCase();
        if (t === 'resumen de atencion' || t.indexOf('resumen de atencion') !== -1) return true;
        var title = (el.getAttribute && (el.getAttribute('title')||el.getAttribute('aria-label'))) || '';
        title = title.toLowerCase();
        if (title.indexOf('resumen de atención') !== -1 || title.indexOf('resumen de atencion') !== -1) return true;
      }catch(_){}
      return false;
    }
    function getPath(e){
      if (e.composedPath) return e.composedPath();
      var p=[], n=e.target; while(n){ p.push(n); n=n.parentNode; } return p;
    }
    window.addEventListener('click', function(ev){
      if (!onEncounterRoute()) return;
      var path = getPath(ev);
      for (var i=0;i<path.length;i++){
        if (matchesResumen(path[i])){
          ev.preventDefault(); ev.stopImmediatePropagation(); ev.stopPropagation();
          openSummaryModal(extractEncounterId());
          return false;
        }
      }
    }, true);

    window.addEventListener('keydown', function(ev){
      if (!onEncounterRoute()) return;
      if (ev.key !== 'Enter' && ev.key !== ' ') return;
      var el = document.activeElement;
      if (el && matchesResumen(el)){
        ev.preventDefault(); ev.stopImmediatePropagation(); ev.stopPropagation();
        openSummaryModal(extractEncounterId());
        return false;
      }
    }, true);

    // Intercept requests to printing route and redirect to our modal
    (function(){
      // fetch
      if (!onEncounterRoute()) return; // no interceptar fuera de la vista
      var ofetch = window.fetch;
      if (ofetch){
        window.fetch = function(resource, init){
          try{
            var url = (resource && resource.url) ? resource.url : (typeof resource === 'string' ? resource : '');
            if (url && url.indexOf('action=ajax_get') !== -1 && url.indexOf('route_name=get_encounter_print') !== -1){
              openSummaryModal(extractEncounterId());
              return Promise.resolve(new Response(JSON.stringify({status:false, intercepted:true}), {status:200, headers:{'Content-Type':'application/json'}}));
            }
          }catch(_){ }
          return ofetch.apply(this, arguments);
        };
      }
      // XHR
      var OXHR = window.XMLHttpRequest;
      if (OXHR){
        var proto = OXHR.prototype;
        var oOpen = proto.open, oSend = proto.send;
        proto.open = function(method, url){
          this.__isResumen_block = false;
          try{
            if (typeof url === 'string' && url.indexOf('action=ajax_get') !== -1 && url.indexOf('route_name=get_encounter_print') !== -1){
              this.__isResumen_block = true;
              this.__isResumen_url = url;
            }
          }catch(_){ }
          return oOpen.apply(this, arguments);
        };
        proto.send = function(body){
          if (this.__isResumen_block){
            try{ openSummaryModal(extractEncounterId()); }catch(_){ }
            // short-circuit: do nothing (no request)
            return;
          }
          return oSend.apply(this, arguments);
        };
      }
      // jQuery
      if ($ && $.ajax){
        var oAjax = $.ajax;
        $.ajax = function(opt){
          try{
            var url = (typeof opt === 'string') ? opt : (opt && opt.url ? opt.url : '');
            if (url && url.indexOf('action=ajax_get') !== -1 && url.indexOf('route_name=get_encounter_print') !== -1){
              openSummaryModal(extractEncounterId());
              var d = $.Deferred();
              d.resolve({status:false, intercepted:true});
              return d.promise();
            }
          }catch(_){ }
          return oAjax.apply(this, arguments);
        };
      }
    })();
  });
})(jQuery);
