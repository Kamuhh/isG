// app.part11-de-30.js
           Or(t, "change", kr(e, r), null, !0);
              })(t, i, r);
            else if ("input" === o || "textarea" === o)
              !(function (t, e, n) {
                const i = t.attrsMap.type,
                  { lazy: r, number: o, trim: a } = n || {},
                  s = !r && "range" !== i,
                  l = r ? "change" : "range" === i ? "__r" : "input";
                let c = "$event.target.value";
                a && (c = "$event.target.value.trim()"), o && (c = `_n(${c})`);
                let d = kr(e, c);
                s && (d = "if($event.target.composing)return;" + d),
                  gr(t, "value", `(${e})`),
                  Or(t, l, d, null, !0),
                  (a || o) && Or(t, "blur", "$forceUpdate()");
              })(t, i, r);
            else if (!H.isReservedTag(o)) return Cr(t, i, r), !1;
            return !0;
          },
          text: function (t, e) {
            e.value && gr(t, "textContent", `_s(${e.value})`, e);
          },
          html: function (t, e) {
            e.value && gr(t, "innerHTML", `_s(${e.value})`, e);
          },
        },
        isPreTag: (t) => "pre" === t,
        isUnaryTag: da,
        mustUseProp: zi,
        canBeLeftOpenTag: ua,
        isReservedTag: Ni,
        getTagNamespace: Bi,
        staticKeys: (function (t) {
          return t.reduce((t, e) => t.concat(e.staticKeys || []), []).join(",");
        })(cs),
      };
      let us, ps;
      const hs = A(function (t) {
          return v(
            "type,tag,attrsList,attrsMap,plain,parent,children,attrs,start,end,rawAttrsMap" +
              (t ? "," + t : "")
          );
        }),
        fs = /^([\w$_]+|\([^)]*?\))\s*=>|^function(?:\s+[\w$]+)?\s*\(/,
        bs = /\([^)]*?\);*$/,
        ms =
          /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['[^']*?']|\["[^"]*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*$/,
        gs = {
          esc: 27,
          tab: 9,
          enter: 13,
          space: 32,
          up: 38,
          left: 37,
          right: 39,
          down: 40,
          delete: [8, 46],
        },
        vs = {
          esc: ["Esc", "Escape"],
          tab: "Tab",
          enter: "Enter",
          space: [" ", "Spacebar"],
          up: ["Up", "ArrowUp"],
          left: ["Left", "ArrowLeft"],
          right: ["Right", "ArrowRight"],
          down: ["Down", "ArrowDown"],
          delete: ["Backspace", "Delete", "Del"],
        },
        _s = (t) => `if(${t})return null;`,
        ys = {
          stop: "$event.stopPropagation();",
          prevent: "$event.preventDefault();",
          self: _s("$event.target !== $event.currentTarget"),
          ctrl: _s("!$event.ctrlKey"),
          shift: _s("!$event.shiftKey"),
          alt: _s("!$event.altKey"),
          meta: _s("!$event.metaKey"),
          left: _s("'button' in $event && $event.button !== 0"),
          middle: _s("'button' in $event && $event.button !== 1"),
          right: _s("'button' in $event && $event.button !== 2"),
        };
      function Ms(t, e) {
        const n = e ? "nativeOn:" : "on:";
        let i = "",
          r = "";
        for (const e in t) {
          const n = Os(t[e]);
          t[e] && t[e].dynamic ? (r += `${e},${n},`) : (i += `"${e}":${n},`);
        }
        return (
          (i = `{${i.slice(0, -1)}}`),
          r ? n + `_d(${i},[${r.slice(0, -1)}])` : n + i
        );
      }
      function Os(t) {
        if (!t) return "function(){}";
        if (Array.isArray(t)) return `[${t.map((t) => Os(t)).join(",")}]`;
        const e = ms.test(t.value),
          n = fs.test(t.value),
          i = ms.test(t.value.replace(bs, ""));
        if (t.modifiers) {
          let r = "",
            o = "";
          const a = [];
          for (const e in t.modifiers)
            if (ys[e]) (o += ys[e]), gs[e] && a.push(e);
            else if ("exact" === e) {
              const e = t.modifiers;
              o += _s(
                ["ctrl", "shift", "alt", "meta"]
                  .filter((t) => !e[t])
                  .map((t) => `$event.${t}Key`)
                  .join("||")
              );
            } else a.push(e);
          return (
            a.length &&
              (r += (function (t) {
                return `if(!$event.type.indexOf('key')&&${t
                  .map(ws)
                  .join("&&")})return null;`;
              })(a)),
            o && (r += o),
            `function($event){${r}${
              e
                ? `return ${t.value}.apply(null, arguments)`
                : n
                ? `return (${t.value}).apply(null, arguments)`
                : i
                ? "return " + t.value
                : t.value
            }}`
          );
        }
        return e || n
          ? t.value
          : `function($event){${i ? "return " + t.value : t.value}}`;
      }
      function ws(t) {
        const e = parseInt(t, 10);
        if (e) return "$event.keyCode!==" + e;
        const n = gs[t],
          i = vs[t];
        return `_k($event.keyCode,${JSON.stringify(t)},${JSON.stringify(
          n
        )},$event.key,${JSON.stringify(i)})`;
      }
      var As = {
        on: function (t, e) {
          t.wrapListeners = (t) => `_g(${t},${e.value})`;
        },
        bind: function (t, e) {
          t.wrapData = (n) =>
            `_b(${n},'${t.tag}',${e.value},${
              e.modifiers && e.modifiers.prop ? "true" : "false"
            }${e.modifiers && e.modifiers.sync ? ",true" : ""})`;
        },
        cloak: E,
      };
      class xs {
        constructor(t) {
          (this.options = t),
            (this.warn = t.warn || br),
            (this.transforms = mr(t.modules, "transformCode")),
            (this.dataGenFns = mr(t.modules, "genData")),
            (this.directives = L(L({}, As), t.directives));
          const e = t.isReservedTag || j;
          (this.maybeComponent = (t) => !!t.component || !e(t.tag)),
            (this.onceId = 0),
            (this.staticRenderFns = []),
            (this.pre = !1);
        }
      }
      function zs(t, e) {
        const n = new xs(e);
        return {
          render: `with(this){return ${
            t ? ("script" === t.tag ? "null" : Cs(t, n)) : '_c("div")'
          }}`,
          staticRenderFns: n.staticRenderFns,
        };
      }
      function Cs(t, e) {
        if (
          (t.parent && (t.pre = t.pre || t.parent.pre),
          t.staticRoot && !t.staticProcessed)
        )
          return ks(t, e);
        if (t.once && !t.onceProcessed) return Ss(t, e);
        if (t.for && !t.forProcessed) return Ds(t, e);
        if (t.if && !t.ifProcessed) return Ts(t, e);
        if ("template" !== t.tag || t.slotTarget || e.pre) {
          if ("slot" === t.tag)
            return (function (t, e) {
              const n = t.slotName || '"default"',
                i = js(t, e);
              let r = `_t(${n}${i ? `,function(){return ${i}}` : ""}`;
              const o =
                  t.attrs || t.dynamicAttrs
                    ? Is(
                        (t.attrs || [])
                          .concat(t.dynamicAttrs || [])
                          .map((t) => ({
                            name: z(t.name),
                            value: t.value,
                            dynamic: t.dynamic,
                          }))
                      )
                    : null,
                a = t.attrsMap["v-bind"];
              return (
                (!o && !a) || i || (r += ",null"),
                o && (r += "," + o),
                a && (r += `${o ? "" : ",null"},${a}`),
                r + ")"
              );
            })(t, e);
          {
            let n;
            if (t.component)
              n = (function (t, e, n) {
                const i = e.inlineTemplate ? null : js(e, n, !0);
                return `_c(${t},${Ls(e, n)}${i ? "," + i : ""})`;
              })(t.component, t, e);
            else {
              let i;
              const r = e.maybeComponent(t);
              let o;
              (!t.plain || (t.pre && r)) && (i = Ls(t, e));
              const a = e.options.bindings;
              r &&
                a &&
                !1 !== a.__isScriptSetup &&
                (o = (function (t, e) {
                  const n = z(e),
                    i = C(n),
                    r = (r) =>
                      t[e] === r ? e : t[n] === r ? n : t[i] === r ? i : void 0;
                  return (
                    r("setup-const") ||
                    r("setup-reactive-const") ||
                    r("setup-let") ||
                    r("setup-ref") ||
                    r("setup-maybe-ref") ||
                    void 0
                  );
                })(a, t.tag)),
                o || (o = `'${t.tag}'`);
              const s = t.inlineTemplate ? null : js(t, e, !0);
              n = `_c(${o}${i ? "," + i : ""}${s ? "," + s : ""})`;
            }
            for (let i = 0; i < e.transforms.length; i++)
              n = e.transforms[i](t, n);
            return n;
          }
        }
        return js(t, e) || "void 0";
      }
      function ks(t, e) {
        t.staticProcessed = !0;
        const n = e.pre;
        return (
          t.pre && (e.pre = t.pre),
          e.staticRenderFns.push(`with(this){return ${Cs(t, e)}}`),
          (e.pre = n),
          `_m(${e.staticRenderFns.length - 1}${t.staticInFor ? ",true" : ""})`
        );
      }
      function Ss(t, e) {
        if (((t.onceProcessed = !0), t.if && !t.ifProcessed)) return Ts(t, e);
        if (t.staticInFor) {
          let n = "",
            i = t.parent;
          for (; i; ) {
            if (i.for) {
              n = i.key;
              break;
            }
            i = i.parent;
          }
          return n ? `_o(${Cs(t, e)},${e.onceId++},${n})` : Cs(t, e);
        }
        return ks(t, e);
      }
      function Ts(t, e, n, i) {
        return (
          (t.ifProcessed = !0),
          (function t(e, n, i, r) {
            if (!e.length) return r || "_e()";
            const o = e.shift();
            return o.exp
              ? `(${o.exp})?${a(o.block)}:${t(e, n, i, r)}`
              : "" + a(o.block);
            function a(t) {
              return i ? i(t, n) : t.once ? Ss(t, n) : Cs(t, n);
            }
          })(t.ifConditions.slice(), e, n, i)
        );
      }
      function Ds(t, e, n, i) {
        const r = t.for,
          o = t.alias,
          a = t.iterator1 ? "," + t.iterator1 : "",
          s = t.iterator2 ? "," + t.iterator2 : "";
        return (
          (t.forProcessed = !0),
          `${i || "_l"}((${r}),function(${o}${a}${s}){return ${(n || Cs)(
            t,
            e
          )}})`
        );
      }
      function Ls(t, e) {
        let n = "{";
        const i = (function (t, e) {
          const n = t.directives;
          if (!n) return;
          let i,
            r,
            o,
            a,
            s = "directives:[",
            l = !1;
          for (i = 0, r = n.length; i < r; i++) {
            (o = n[i]), (a = !0);
            const r = e.directives[o.name];
            r && (a = !!r(t, o, e.warn)),
              a &&
                ((l = !0),
                (s += `{name:"${o.name}",rawName:"${o.rawName}"${
                  o.value
                    ? `,value:(${o.value}),expression:${JSON.stringify(
                        o.value
                      )}`
                    : ""
                }${
                  o.arg ? ",arg:" + (o.isDynamicArg ? o.arg : `"${o.arg}"`) : ""
                }${
                  o.modifiers ? ",modifiers:" + JSON.stringify(o.modifiers) : ""
                }},`));
          }
          return l ? s.slice(0, -1) + "]" : void 0;
        })(t, e);
        i && (n += i + ","),
          t.key && (n += `key:${t.key},`),
          t.ref && (n += `ref:${t.ref},`),
          t.refInFor && (n += "refInFor:true,"),
          t.pre && (n += "pre:true,"),
          t.component && (n += `tag:"${t.tag}",`);
        for (let i = 0; i < e.dataGenFns.length; i++) n += e.dataGenFns[i](t);
        if (
          (t.attrs && (n += `attrs:${Is(t.attrs)},`),
          t.props && (n += `domProps:${Is(t.props)},`),
          t.events && (n += Ms(t.events, !1) + ","),
          t.nativeEvents && (n += Ms(t.nativeEvents, !0) + ","),
          t.slotTarget && !t.slotScope && (n += `slot:${t.slotTarget},`),
          t.scopedSlots &&
            (n +=
              (function (t, e, n) {
                let i =
                    t.for ||
                    Object.keys(e).some((t) => {
                      const n = e[t];
                      return n.slotTargetDynamic || n.if || n.for || qs(n);
                    }),
                  r = !!t.if;
                if (!i) {
                  let e = t.parent;
                  for (; e; ) {
                    if ((e.slotScope && e.slotScope !== Ha) || e.for) {
                      i = !0;
                      break;
                    }
                    e.if && (r = !0), (e = e.parent);
                  }
                }
                const o = Object.keys(e)
                  .map((t) => Es(e[t], n))
                  .join(",");
                return `scopedSlots:_u([${o}]${i ? ",null,true" : ""}${
                  !i && r
                    ? ",null,false," +
                      (function (t) {
                        let e = 5381,
                          n = t.length;
                        for (; n; ) e = (33 * e) ^ t.charCodeAt(--n);
                        return e >>> 0;
                      })(o)
                    : ""
                })`;
              })(t, t.scopedSlots, e) + ","),
          t.model &&
            (n += `model:{value:${t.model.value},callback:${t.model.callback},expression:${t.model.expression}},`),
          t.inlineTemplate)
        ) {
          const i = (function (t, e) {
            const n = t.children[0];
            if (n && 1 === n.type) {
              const t = zs(n, e.options);
              return `inlineTemplate:{render:function(){${
                t.render
              }},staticRenderFns:[${t.staticRenderFns
                .map((t) => `function(){${t}}`)
                .join(",")}]}`;
            }
          })(t, e);
          i && (n += i + ",");
        }
        return (
          (n = n.replace(/,$/, "") + "}"),
          t.dynamicAttrs && (n = `_b(${n},"${t.tag}",${Is(t.dynamicAttrs)})`),
          t.wrapData && (n = t.wrapData(n)),
          t.wrapListeners && (n = t.wrapListeners(n)),
          n
        );
      }
      function qs(t) {
        return 1 === t.type && ("slot" === t.tag || t.children.some(qs));
      }
      function Es(t, e) {
        const n = t.attrsMap["slot-scope"];
        if (t.if && !t.ifProcessed && !n) return Ts(t, e, Es, "null");
        if (t.for && !t.forProcessed) return Ds(t, e, Es);
        const i = t.slotScope === Ha ? "" : String(t.slotScope),
          r = `function(${i}){return ${
            "template" === t.tag
              ? t.if && n
                ? `(${t.if})?${js(t, e) || "undefined"}:undefined`
                : js(t, e) || "undefined"
              : Cs(t, e)
          }}`,
          o = i ? "" : ",proxy:true";
        return `{key:${t.slotTarget || '"default"'},fn:${r}${o}}`;
      }
      function js(t, e, n, i, r) {
        const o = t.children;
        if (o.length) {
          const t = o[0];
          if (
            1 === o.length &&
            t.for &&
            "template" !== t.tag &&
            "slot" !== t.tag
          ) {
            const r = n ? (e.maybeComponent(t) ? ",1" : ",0") : "";
            return `${(i || Cs)(t, e)}${r}`;
          }
          const a = n
              ? (function (t, e) {
                  let n = 0;
                  for (let i = 0; i < t.length; i++) {
                    const r = t[i];
                    if (1 === r.type) {
                      if (
                        Ps(r) ||
                        (r.ifConditions &&
                          r.ifConditions.some((t) => Ps(t.block)))
                      ) {
                        n = 2;
                        break;
                      }
                      (e(r) ||
                        (r.ifConditions &&
                          r.ifConditions.some((t) => e(t.block)))) &&
                        (n = 1);
                    }
                  }
                  return n;
                })(o, e.maybeComponent)
              : 0,
            s = r || Rs;
          return `[${o.map((t) => s(t, e)).join(",")}]${a ? "," + a : ""}`;
        }
      }
      function Ps(t) {
        return void 0 !== t.for || "template" === t.tag || "slot" === t.tag;
      }
      function Rs(t, e) {
        return 1 === t.type
          ? Cs(t, e)
          : 3 === t.type && t.isComment
          ? (function (t) {
              return `_e(${JSON.stringify(t.text)})`;
            })(t)
          : (function (t) {
              return `_v(${
                2 === t.type ? t.expression : Ws(JSON.stringify(t.text))
              })`;
            })(t);
      }
      function Is(t) {
        let e = "",
          n = "";
        for (let i = 0; i < t.length; i++) {
          const r = t[i],
            o = Ws(r.value);
          r.dynamic ? (n += `${r.name},${o},`) : (e += `"${r.name}":${o},`);
        }
        return (
          (e = `{${e.slice(0, -1)}}`), n ? `_d(${e},[${n.slice(0, -1)}])` : e
        );
      }
      function Ws(t) {
        return t.replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
      }
      function Ns(t, e) {
        try {
          return new Function(t);
        } catch (n) {
          return e.push({ err: n, code: t }), E;
        }
      }
      function Bs(t) {
        const e = Object.create(null);
        return function (n, i, r) {
          (i = L({}, i)).warn, delete i.warn;
          const o = i.delimiters ? String(i.delimiters) + n : n;
          if (e[o]) return e[o];
          const a = t(n, i),
            s = {},
            l = [];
          return (
            (s.render = Ns(a.render, l)),
            (s.staticRenderFns = a.staticRenderFns.map((t) => Ns(t, l))),
            (e[o] = s)
          );
        };
      }
      new RegExp(
        "\\b" +
          "do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,super,throw,while,yield,delete,export,import,return,switch,default,extends,finally,continue,debugger,function,arguments"
            .split(",")
            .join("\\b|\\b") +
          "\\b"
      ),
        new RegExp(
          "\\b" +
            "delete,typeof,void".split(",").join("\\s*\\([^\\)]*\\)|\\b") +
            "\\s*\\([^\\)]*\\)"
        );
      const Fs =
        (($s = function (t, e) {
          const n = (function (t, e) {
            (Ya = e.warn || br),
              (Ka = e.isPreTag || j),
              (Za = e.mustUseProp || j),
              (Ja = e.getTagNamespace || j),
              e.isReservedTag,
              (Xa = mr(e.modules, "transformNode")),
              (Va = mr(e.modules, "preTransformNode")),
              (Ga = mr(e.modules, "postTransformNode")),
              (Ua = e.delimiters);
            const n = [],
              i = !1 !== e.preserveWhitespace,
              r = e.whitespace;
            let o,
              a,
              s = !1,
              l = !1;
            function c(t) {
              if (
                (d(t),
                s || t.processed || (t = ts(t, e)),
                n.length ||
                  t === o ||
                  (o.if &&
                    (t.elseif || t.else) &&
                    ns(o, { exp: t.elseif, block: t })),
                a && !t.forbidden)
              )
                if (t.elseif || t.else)
                  !(function (t, e) {
                    const n = (function (t) {
                      let e = t.length;
                      for (; e--; ) {
                        if (1 === t[e].type) return t[e];
                        t.pop();
                      }
                    })(e.children);
                    n && n.if && ns(n, { exp: t.elseif, block: t });
                  })(t, a);
                else {
                  if (t.slotScope) {
                    const e = t.slotTarget || '"default"';
                    (a.scopedSlots || (a.scopedSlots = {}))[e] = t;
                  }
                  a.children.push(t), (t.parent = a);
                }
              (t.children = t.children.filter((t) => !t.slotScope)),
                d(t),
                t.pre && (s = !1),
                Ka(t.tag) && (l = !1);
              for (let n = 0; n < Ga.length; n++) Ga[n](t, e);
            }
            function d(t) {
              if (!l) {
                let e;
                for (
                  ;
                  (e = t.children[t.children.length - 1]) &&
                  3 === e.type &&
                  " " === e.text;

                )
                  t.children.pop();
              }
            }
            return (
              (function (t, e) {
                const n = [],
                  i = e.expectHTML,
                  r = e.isUnaryTag || j,
                  o = e.canBeLeftOpenTag || j;
                let a,
                  s,
                  l = 0;
                for (; t; ) {
                  if (((a = t), s && wa(s))) {
                    let n = 0;
                    const i = s.toLowerCase(),
                      r =
                        Aa[i] ||
                        (Aa[i] = new RegExp(
                          "([\\s\\S]*?)(</" + i + "[^>]*>)",
                          "i"
                        )),
                      o = t.replace(r, function (t, r, o) {
                        return (
                          (n = o.length),
                          wa(i) ||
                            "noscript" === i ||
                            (r = r
                              .replace(/<!\--([\s\S]*?)-->/g, "$1")
                              .replace(/<!\[CDATA\[([\s\S]*?)]]>/g, "$1")),
                          Sa(i, r) && (r = r.slice(1)),
                          e.chars && e.chars(r),
                          ""
                        );
                      });
                    (l += t.length - o.length), (t = o), p(i, l - n, l);
                  } else {
                    let n,
                      i,
                      r,
                      o = t.indexOf("<");
                    if (0 === o) {
                      if (Ma.test(t)) {
                        const n = t.indexOf("--\x3e");
                        if (n >= 0) {
                          e.shouldKeepComment &&
                            e.comment &&
                            e.comment(t.substring(4, n), l, l + n + 3),
                            c(n + 3);
                          continue;
                        }
                      }
                      if (Oa.test(t)) {
                        const e = t.indexOf("]>");
                        if (e >= 0) {
                          c(e + 2);
                          continue;
                        }
                      }
                      const n = t.match(ya);
                      if (n) {
                        c(n[0].length);
                        continue;
                      }
                      const i = t.match(_a);
                      if (i) {
                        const t = l;
                        c(i[0].length), p(i[1], t, l);
                        continue;
                      }
                      const r = d();
                      if (r) {
                        u(r), Sa(r.tagName, t) && c(1);
                        continue;
                      }
                    }
                    if (o >= 0) {
                      for (
                        i = t.slice(o);
                        !(
                          _a.test(i) ||
                          ga.test(i) ||
                          Ma.test(i) ||
                          Oa.test(i) ||
                          ((r = i.indexOf("<", 1)), r < 0)
                        );

                      )
                        (o += r), (i = t.slice(o));
                      n = t.substring(0, o);
                    }
                    o < 0 && (n = t),
                      n && c(n.length),
                      e.chars && n && e.chars(n, l - n.length, l);
                  }
                  if (t === a) {
                    e.chars && e.chars(t);
                    break;
                  }
                }
                function c(e) {
                  (l += e), (t = t.substring(e));
                }
                function d() {
                  const e = t.match(ga);
                  if (e) {
                    const n = { tagName: e[1], attrs: [], start: l };
                    let i, r;
                    for (
                      c(e[0].length);
                      !(i = t.match(va)) && (r = t.match(fa) || t.match(ha));

                    )
                      (r.start = l),
                        c(r[0].length),
                        (r.end = l),
                        n.attrs.push(r);
                    if (i)
                      return (
                        (n.unarySlash = i[1]), c(i[0].length), (n.end = l), n
                      );
                  }
                }
                function u(t) {
                  const a = t.tagName,
                    l = t.unarySlash;
                  i && ("p" === s && pa(a) && p(s), o(a) && s === a && p(a));
                  const c = r(a) || !!l,
                    d = t.attrs.length,
                    u = new Array(d);
                  for (let n = 0; n < d; n++) {
                    const i = t.attrs[n],
                      r = i[3] || i[4] || i[5] || "",
                      o =
                        "a" === a && "href" === i[1]
                          ? e.shouldDecodeNewlinesForHref
                          : e.shouldDecodeNewlines;
                    u[n] = { name: i[1], value: Ta(r, o) };
                  }
                  c ||
                    (n.push({
                      tag: a,
                      lowerCasedTag: a.toLowerCase(),
                      attrs: u,
                      start: t.start,
                      end: t.end,
                    }),
                    (s = a)),
                    e.start && e.start(a, u, c, t.start, t.end);
                }
                function p(t, i, r) {
                  let o, a;
                  if ((null == i && (i = l), null == r && (r = l), t))
                    for (
                      a = t.toLowerCase(), o = n.length - 1;
                      o >= 0 && n[o].lowerCasedTag !== a;
                      o--
                    );
                  else o = 0;
                  if (o >= 0) {
                    for (let t = n.length - 1; t >= o; t--)
                      e.end && e.end(n[t].tag, i, r);
                    (n.length = o), (s = o && n[o - 1].tag);
                  } else
                    "br" === a
                      ? e.start && e.start(t, [], !0, i, r)
                      : "p" === a &&
                        (e.start && e.start(t, [], !1, i, r),
                        e.end && e.end(t, i, r));
                }
                p();
              })(t, {
                warn: Ya,
                expectHTML: e.expectHTML,
                isUnaryTag: e.isUnaryTag,
                canBeLeftOpenTag: e.canBeLeftOpenTag,
                shouldDecodeNewlines: e.shouldDecodeNewlines,
                shouldDecodeNewlinesForHref: e.shouldDecodeNewlinesForHref,
                shouldKeepComment: e.comments,
                outputSourceRange: e.outputSourceRange,
                start(t, i, r, d, u) {
                  const p = (a && a.ns) || Ja(t);
                  J &&
                    "svg" === p &&
                    (i = (function (t) {
                      const e = [];
                      for (let n = 0; n < t.length; n++) {
                        const i = t[n];
                        as.test(i.name) ||
                          ((i.name = i.name.replace(ss, "")), e.push(i));
                      }
                      return e;
                    })(i));
                  let h = Qa(t, i, a);
                  var f;
                  p && (h.ns = p),
                    ("style" !== (f = h).tag &&
                      ("script" !== f.tag ||
                        (f.attrsMap.type &&
                          "text/javascript" !== f.attrsMap.type))) ||
                      at() ||
                      (h.forbidden = !0);
                  for (let t = 0; t < Va.length; t++) h = Va[t](h, e) || h;
                  s ||
                    ((function (t) {
                      null != Ar(t, "v-pre") && (t.pre = !0);
                    })(h),
                    h.pre && (s = !0)),
                    Ka(h.tag) && (l = !0),
                    s
                      ? (function (t) {
                          const e = t.attrsList,
                            n = e.length;
                          if (n) {
                            const i = (t.attrs = new Array(n));
                            for (let t = 0; t < n; t++)
                              (i[t] = {
                                name: e[t].name,
                                value: JSON.stringify(e[t].value),
                              }),
                                null != e[t].start &&
                                  ((i[t].start = e[t].start),
                                  (i[t].end = e[t].end));
                          } else t.pre || (t.plain = !0);
                        })(h)
                      : h.processed ||
                        (es(h),
                        (function (t) {
                          const e = Ar(t, "v-if");
                          if (e) (t.if = e), ns(t, { exp: e, block: t });
                          else {
                            null != Ar(t, "v-else") && (t.else = !0);
                            const e = Ar(t, "v-else-if");
                            e && (t.elseif = e);
                          }
                        })(h),
                        (function (t) {
                          null != Ar(t, "v-once") && (t.once = !0);
                        })(h)),
                    o || (o = h),
                    r ? c(h) : ((a = h), n.push(h));
                },
                end(t, e, i) {
                  const r = n[n.length - 1];
                  (n.length -= 1), (a = n[n.length - 1]), c(r);
                },
                chars(t, e, n) {
                  if (!a) return;
                  if (J && "textarea" === a.tag && a.attrsMap.placeholder === t)
                    return;
                  const o = a.children;
                  var c;
                  if (
                    (t =
                      l || t.trim()
                        ? "script" === (c = a).tag || "style" === c.tag
                          ? t
                          : $a(t)
                        : o.length
                        ? r
                          ? "condense" === r && Ba.test(t)
                            ? ""
                            : " "
                          : i
                          ? " "
                          : ""
                        : "")
                  ) {
                    let e, n;
                    l || "condense" !== r || (t = t.replace(Fa, " ")),
                      !s &&
                      " " !== t &&
                      (e = (function (t, e) {
                        const n = e ? aa(e) : ra;
                        if (!n.test(t)) return;
                        const i = [],
                          r = [];
                        let o,
                          a,
                          s,
                          l = (n.lastIndex = 0);
                        for (; (o = n.exec(t)); ) {
                          (a = o.index),
                            a > l &&
                              (r.push((s = t.slice(l, a))),
                              i.push(JSON.stringify(s)));
                          const e = hr(o[1].trim());
                          i.push(`_s(${e})`),
                            r.push({ "@binding": e }),
                            (l = a + o[0].length);
                        }
                        return (
                          l < t.length &&
                            (r.push((s = t.slice(l))),
                            i.push(JSON.stringify(s))),
                          { expression: i.join("+"), tokens: r }
                        );
                      })(t, Ua))
                        ? (n = {
                            type: 2,
                            expression: e.expression,
                            tokens: e.tokens,
                            text: t,
                          })
                        : (" " === t &&
                            o.length &&
                            " " === o[o.length - 1].text) ||
                          (n = { type: 3, text: t }),
                      n && o.push(n);
                  }
                },
                comment(t, e, n) {
                  if (a) {
                    const e = { type: 3, text: t, isComment: !0 };
                    a.children.push(e);
                  }
                },
              }),
              o
            );
          })(t.trim(), e);
          !1 !== e.optimize &&
            (function (t, e) {
              t &&
                ((us = hs(e.staticKeys || "")),
                (ps = e.isReservedTag || j),
                (function t(e) {
                  if (
                    ((e.static = (function (t) {
                      return (
                        2 !== t.type &&
                        (3 === t.type ||
                          !(
                            !t.pre &&
                            (t.hasBindings ||
                              t.if ||
                              t.for ||
                              _(t.tag) ||
                              !ps(t.tag) ||
                              (function (t) {
                                for (; t.parent; ) {
                                  if ("template" !== (t = t.parent).tag)
                                    return !1;
                                  if (t.for) return !0;
                                }
                                return !1;
                              })(t) ||
                              !Object.keys(t).every(us))
                          ))
                      );
                    })(e)),
                    1 === e.type)
                  ) {
                    if (
                      !ps(e.tag) &&
                      "slot" !== e.tag &&
                      null == e.attrsMap["inline-template"]
                    )
                      return;
                    for (let n = 0, i = e.children.length; n < i; n++) {
                      const i = e.children[n];
                      t(i), i.static || (e.static = !1);
                    }
                    if (e.ifConditions)
                      for (let n = 1, i = e.ifConditions.length; n < i; n++) {
                        const i = e.ifConditions[n].block;
                        t(i), i.static || (e.static = !1);
                      }
                  }
                })(t),
                (function t(e, n) {
                  if (1 === e.type) {
                    if (
                      ((e.static || e.once) && (e.staticInFor = n),
                      e.static &&
                        e.children.length &&
                        (1 !== e.children.length || 3 !== e.children[0].type))
                    )
                      return void (e.staticRoot = !0);
                    if (((e.staticRoot = !1), e.children))
                      for (let i = 0, r = e.children.length; i < r; i++)
                        t(e.children[i], n || !!e.for);
                    if (e.ifConditions)
                      for (let i = 1, r = e.ifConditions.length; i < r; i++)
                        t(e.ifConditions[i].block, n);
                  }
                })(t, !1));
            })(n, e);
          const i = zs(n, e);
          return {
            ast: n,
            render: i.render,
            staticRenderFns: i.staticRenderFns,
          };
        }),
        function (t) {
          function e(e, n) {
            const i = Object.create(t),
              r = [],
              o = [];
            if (n) {
              n.modules && (i.modules = (t.modules || []).concat(n.modules)),
                n.directives &&
                  (i.directives = L(
                    Object.create(t.directives || null),
                    n.directives
                  ));
              for (const t in n)
                "modules" !== t && "directives" !== t && (i[t] = n[t]);
            }
            i.warn = (t, e, n) => {
              (n ? o : r).push(t);
            };
            const a = $s(e.trim(), i);
            return (a.errors = r), (a.tips = o), a;
          }
          return { compile: e, compileToFunctions: Bs(e) };
        });
      var $s;
      const { compile: Hs, compileToFunctions: Ys } = Fs(ds);
      let Us;
      function Xs(t) {
        return (
          (Us = Us || document.createElement("div")),
          (Us.innerHTML = t ? '<a href="\n"/>' : '<div a="\n"/>'),
          Us.innerHTML.indexOf("&#10;") > 0
        );
      }
      const Vs = !!K && Xs(!1),
        Gs = !!K && Xs(!0),
        Ks = A((t) => {
          const e = Hi(t);
          return e && e.innerHTML;
        }),
        Zs = gi.prototype.$mount;
      (gi.prototype.$mount = function (t, e) {
        if (
          (t = t && Hi(t)) === document.body ||
          t === document.documentElement
        )
          return this;
        const n = this.$options;
        if (!n.render) {
          let e = n.template;
          if (e)
            if ("string" == typeof e) "#" === e.charAt(0) && (e = Ks(e));
            else {
              if (!e.nodeType) return this;
              e = e.innerHTML;
            }
          else
            t &&
              (e = (function (t) {
                if (t.outerHTML) return t.outerHTML;
                {
                  const e = document.createElement("div");
                  return e.appendChild(t.cloneNode(!0)), e.innerHTML;
                }
              })(t));
          if (e) {
            const { render: t, staticRenderFns: i } = Ys(
              e,
              {
                outputSourceRange: !1,
                shouldDecodeNewlines: Vs,
                shouldDecodeNewlinesForHref: Gs,
                delimiters: n.delimiters,
                comments: n.comments,
              },
              this
            );
            (n.render = t), (n.staticRenderFns = i);
          }
        }
        return Zs.call(this, t, e);
      }),
        (gi.compile = Ys),
        L(gi, En),
        (gi.effect = function (t, e) {
          const n = new In(ut, t, E, { sync: !0 });
          e &&
            (n.update = () => {
              e(() => n.run());
            });
        }),
        (t.exports = gi);
    }).call(this, n(56), n(516).setImmediate);
  },
  function (t, e, n) {
    (function (t) {
      var i =
          (void 0 !== t && t) || ("undefined" != typeof self && self) || window,
        r = Function.prototype.apply;
      function o(t, e) {
        (this._id = t), (this._clearFn = e);
      }
      (e.setTimeout = function () {
        return new o(r.call(setTimeout, i, arguments), clearTimeout);
      }),
        (e.setInterval = function () {
          return new o(r.call(setInterval, i, arguments), clearInterval);
        }),
        (e.clearTimeout = e.clearInterval =
          function (t) {
            t && t.close();
          }),
        (o.prototype.unref = o.prototype.ref = function () {}),
        (o.prototype.close = function () {
          this._clearFn.call(i, this._id);
        }),
        (e.enroll = function (t, e) {
          clearTimeout(t._idleTimeoutId), (t._idleTimeout = e);
        }),
        (e.unenroll = function (t) {
          clearTimeout(t._idleTimeoutId), (t._idleTimeout = -1);
        }),
        (e._unrefActive = e.active =
          function (t) {
            clearTimeout(t._idleTimeoutId);
            var e = t._idleTimeout;
            e >= 0 &&
              (t._idleTimeoutId = setTimeout(function () {
                t._onTimeout && t._onTimeout();
              }, e));
          }),
        n(517),
        (e.setImmediate =
          ("undefined" != typeof self && self.setImmediate) ||
          (void 0 !== t && t.setImmediate) ||
          (this && this.setImmediate)),
        (e.clearImmediate =
          ("undefined" != typeof self && self.clearImmediate) ||
          (void 0 !== t && t.clearImmediate) ||
          (this && this.clearImmediate));
    }).call(this, n(56));
  },
  function (t, e, n) {
    (function (t, e) {
      !(function (t, n) {
        "use strict";
        if (!t.setImmediate) {
          var i,
            r,
            o,
            a,
            s,
            l = 1,
            c = {},
            d = !1,
            u = t.document,
            p = Object.getPrototypeOf && Object.getPrototypeOf(t);
          (p = p && p.setTimeout ? p : t),
            "[object process]" === {}.toString.call(t.process)
              ? (i = function (t) {
                  e.nextTick(function () {
                    f(t);
                  });
                })
              : (function () {
                  if (t.postMessage && !t.importScripts) {
                    var e = !0,
                      n = t.onmessage;
                    return (
                      (t.onmessage = function () {
                        e = !1;
                      }),
                      t.postMessage("", "*"),
                      (t.onmessage = n),
                      e
                    );
                  }
                })()
              ? ((a = "setImmediate$" + Math.random() + "$"),
                (s = function (e) {
                  e.source === t &&
                    "string" == typeof e.data &&
                    0 === e.data.indexOf(a) &&
                    f(+e.data.slice(a.length));
                }),
                t.addEventListener
                  ? t.addEventListener("message", s, !1)
                  : t.attachEvent("onmessage", s),
                (i = function (e) {
                  t.postMessage(a + e, "*");
                }))
              : t.MessageChannel
              ? (((o = new MessageChannel()).port1.onmessage = function (t) {
                  f(t.data);
                }),
                (i = function (t) {
                  o.port2.postMessage(t);
                }))
              : u && "onreadystatechange" in u.createElement("script")
              ? ((r = u.documentElement),
                (i = function (t) {
                  var e = u.createElement("script");
                  (e.onreadystatechange = function () {
                    f(t),
                      (e.onreadystatechange = null),
                      r.removeChild(e),
                      (e = null);
                  }),
                    r.appendChild(e);
                }))
              : (i = function (t) {
                  setTimeout(f, 0, t);
                }),
            (p.setImmediate = function (t) {
              "function" != typeof t && (t = new Function("" + t));
              for (
                var e = new Array(arguments.length - 1), n = 0;
                n < e.length;
                n++
              )
                e[n] = arguments[n + 1];
              var r = { callback: t, args: e };
              return (c[l] = r), i(l), l++;
            }),
            (p.clearImmediate = h);
        }
        function h(t) {
          delete c[t];
        }
        function f(t) {
          if (d) setTimeout(f, 0, t);
          else {
            var e = c[t];
            if (e) {
              d = !0;
              try {
                !(function (t) {
                  var e = t.callback,
                    n = t.args;
                  switch (n.length) {
                    case 0:
                      e();
                      break;
                    case 1:
                      e(n[0]);
                      break;
                    case 2:
                      e(n[0], n[1]);
                      break;
                    case 3:
                      e(n[0], n[1], n[2]);
                      break;
                    default:
                      e.apply(void 0, n);
                  }
                })(e);
              } finally {
                h(t), (d = !1);
              }
            }
          }
        }
      })("undefined" == typeof self ? (void 0 === t ? this : t) : self);
    }).call(this, n(56), n(76));
  },
  function (t, e, n) {
    var i = n(345);
    (t.exports = n(31)(!1)).push([
      t.i,
      '.bg-primary-after[data-v-e59be3b4]:after,.bg-primary-before[data-v-e59be3b4]:before,.bg-primary[data-v-e59be3b4]{background-color:#1e90ff}.bg-primary-after-transparency[data-v-e59be3b4]:after,.bg-primary-before-transparency[data-v-e59be3b4]:before,.bg-primary-transparency[data-v-e59be3b4]{background-color:rgba(30,144,255,.5)}.bg-secondary-after[data-v-e59be3b4]:after,.bg-secondary-before[data-v-e59be3b4]:before,.bg-secondary[data-v-e59be3b4]{background-color:#747474}.bg-secondary-after-transparency[data-v-e59be3b4]:after,.bg-secondary-before-transparency[data-v-e59be3b4]:before,.bg-secondary-transparency[data-v-e59be3b4]{background-color:hsla(0,0%,45.5%,.5)}.bg-third-after[data-v-e59be3b4]:after,.bg-third-before[data-v-e59be3b4]:before,.bg-third[data-v-e59be3b4]{background-color:#ccc}.bg-third-after-transparency[data-v-e59be3b4]:after,.bg-third-before-transparency[data-v-e59be3b4]:before,.bg-third-transparency[data-v-e59be3b4]{background-color:hsla(0,0%,80%,.5)}.bg-success-after[data-v-e59be3b4]:after,.bg-success-before[data-v-e59be3b4]:before,.bg-success[data-v-e59be3b4]{background-color:#9acd32}.bg-success-after-transparency[data-v-e59be3b4]:after,.bg-success-before-transparency[data-v-e59be3b4]:before,.bg-success-transparency[data-v-e59be3b4]{background-color:rgba(154,205,50,.5)}.bg-danger-after[data-v-e59be3b4]:after,.bg-danger-before[data-v-e59be3b4]:before,.bg-danger[data-v-e59be3b4]{background-color:#ff4500}.bg-danger-after-transparency[data-v-e59be3b4]:after,.bg-danger-before-transparency[data-v-e59be3b4]:before,.bg-danger-transparency[data-v-e59be3b4]{background-color:rgba(255,69,0,.5)}.bg-grey-after[data-v-e59be3b4]:after,.bg-grey-before[data-v-e59be3b4]:before,.bg-grey[data-v-e59be3b4]{background-color:#999}.bg-grey-after-transparency[data-v-e59be3b4]:after,.bg-grey-before-transparency[data-v-e59be3b4]:before,.bg-grey-transparency[data-v-e59be3b4]{background-color:hsla(0,0%,60%,.5)}.bg-info-after[data-v-e59be3b4]:after,.bg-info-before[data-v-e59be3b4]:before,.bg-info[data-v-e59be3b4]{background-color:#17a2b8}.bg-info-after-transparency[data-v-e59be3b4]:after,.bg-info-before-transparency[data-v-e59be3b4]:before,.bg-info-transparency[data-v-e59be3b4]{background-color:rgba(23,162,184,.5)}.bg-warning-after[data-v-e59be3b4]:after,.bg-warning-before[data-v-e59be3b4]:before,.bg-warning[data-v-e59be3b4]{background-color:#ffa300}.bg-warning-after-transparency[data-v-e59be3b4]:after,.bg-warning-before-transparency[data-v-e59be3b4]:before,.bg-warning-transparency[data-v-e59be3b4]{background-color:rgba(255,163,0,.5)}.bg-light-after[data-v-e59be3b4]:after,.bg-light-before[data-v-e59be3b4]:before,.bg-light[data-v-e59be3b4]{background-color:#f5f5f5}.bg-light-after-transparency[data-v-e59be3b4]:after,.bg-light-before-transparency[data-v-e59be3b4]:before,.bg-light-transparency[data-v-e59be3b4]{background-color:hsla(0,0%,96.1%,.5)}.bg-dark-after[data-v-e59be3b4]:after,.bg-dark-before[data-v-e59be3b4]:before,.bg-dark[data-v-e59be3b4]{background-color:#24292e}.bg-dark-after-transparency[data-v-e59be3b4]:after,.bg-dark-before-transparency[data-v-e59be3b4]:before,.bg-dark-transparency[data-v-e59be3b4]{background-color:rgba(36,41,46,.5)}.bg-default-after[data-v-e59be3b4]:after,.bg-default-before[data-v-e59be3b4]:before,.bg-default[data-v-e59be3b4]{background-color:#ccc}.bg-default-after-transparency[data-v-e59be3b4]:after,.bg-default-before-transparency[data-v-e59be3b4]:before,.bg-default-transparency[data-v-e59be3b4]{background-color:hsla(0,0%,80%,.5)}.bg-white-after[data-v-e59be3b4]:after,.bg-white-before[data-v-e59be3b4]:before,.bg-white[data-v-e59be3b4]{background-color:#fff}.bg-white-after-transparency[data-v-e59be3b4]:after,.bg-white-before-transparency[data-v-e59be3b4]:before,.bg-white-transparency[data-v-e59be3b4]{background-color:hsla(0,0%,100%,.5)}.bg-black-after[data-v-e59be3b4]:after,.bg-black-before[data-v-e59be3b4]:before,.bg-black[data-v-e59be3b4]{background-color:#000}.bg-black-after-transparency[data-v-e59be3b4]:after,.bg-black-before-transparency[data-v-e59be3b4]:before,.bg-black-transparency[data-v-e59be3b4]{background-color:rgba(0,0,0,.5)}.fill-primary path[data-v-e59be3b4]{fill:#1e90ff}.fill-secondary path[data-v-e59be3b4]{fill:#747474}.fill-third path[data-v-e59be3b4]{fill:#ccc}.fill-success path[data-v-e59be3b4]{fill:#9acd32}.fill-danger path[data-v-e59be3b4]{fill:#ff4500}.fill-grey path[data-v-e59be3b4]{fill:#999}.fill-info path[data-v-e59be3b4]{fill:#17a2b8}.fill-warning path[data-v-e59be3b4]{fill:#ffa300}.fill-light path[data-v-e59be3b4]{fill:#f5f5f5}.fill-dark path[data-v-e59be3b4]{fill:#24292e}.fill-default path[data-v-e59be3b4]{fill:#ccc}.fill-white path[data-v-e59be3b4]{fill:#fff}.fill-black path[data-v-e59be3b4]{fill:#000}.label[data-v-e59be3b4]{border-radius:2px;padding:2px 4px;color:#fff;font-size:.714em}.label-primary[data-v-e59be3b4],.label[data-v-e59be3b4]{background-color:#1e90ff}.label-primary-outline[data-v-e59be3b4]{background-color:transparent;border:1px solid #1e90ff;color:#1e90ff}.label-secondary[data-v-e59be3b4]{background-color:#747474}.label-secondary-outline[data-v-e59be3b4]{background-color:transparent;border:1px solid #747474;color:#747474}.label-third[data-v-e59be3b4]{background-color:#ccc}.label-third-outline[data-v-e59be3b4]{background-color:transparent;border:1px solid #ccc;color:#ccc}.label-success[data-v-e59be3b4]{background-color:#9acd32}.label-success-outline[data-v-e59be3b4]{background-color:transparent;border:1px solid #9acd32;color:#9acd32}.label-danger[data-v-e59be3b4]{background-color:#ff4500}.label-danger-outline[data-v-e59be3b4]{background-color:transparent;border:1px solid #ff4500;color:#ff4500}.label-grey[data-v-e59be3b4]{background-color:#999}.label-grey-outline[data-v-e59be3b4]{background-color:transparent;border:1px solid #999;color:#999}.label-info[data-v-e59be3b4]{background-color:#17a2b8}.label-info-outline[data-v-e59be3b4]{background-color:transparent;border:1px solid #17a2b8;color:#17a2b8}.label-warning[data-v-e59be3b4]{background-color:#ffa300}.label-warning-outline[data-v-e59be3b4]{background-color:transparent;border:1px solid #ffa300;color:#ffa300}.label-light[data-v-e59be3b4]{background-color:#f5f5f5}.label-light-outline[data-v-e59be3b4]{background-color:transparent;border:1px solid #f5f5f5;color:#f5f5f5}.label-dark[data-v-e59be3b4]{background-color:#24292e}.label-dark-outline[data-v-e59be3b4]{background-color:transparent;border:1px solid #24292e;color:#24292e}.label-default[data-v-e59be3b4]{background-color:#ccc}.label-default-outline[data-v-e59be3b4]{background-color:transparent;border:1px solid #ccc;color:#ccc}.label-white[data-v-e59be3b4]{background-color:#fff}.label-white-outline[data-v-e59be3b4]{background-color:transparent;border:1px solid #fff;color:#fff}.label-black[data-v-e59be3b4]{background-color:#000}.label-black-outline[data-v-e59be3b4]{background-color:transparent;border:1px solid #000;color:#000}.dot[data-v-e59be3b4]{width:6px;height:6px;border-radius:6px}.dot-primary[data-v-e59be3b4],.dot[data-v-e59be3b4]{background-color:#1e90ff}.dot-primary-outline[data-v-e59be3b4]{background-color:transparent;border:1px solid #1e90ff;color:#1e90ff}.dot-secondary[data-v-e59be3b4]{background-color:#747474}.dot-secondary-outline[data-v-e59be3b4]{background-color:transparent;border:1px solid #747474;color:#747474}.dot-third[data-v-e59be3b4]{background-color:#ccc}.dot-third-outline[data-v-e59be3b4]{background-color:transparent;border:1px solid #ccc;color:#ccc}.dot-success[data-v-e59be3b4]{background-color:#9acd32}.dot-success-outline[data-v-e59be3b4]{background-color:transparent;border:1px solid #9acd32;color:#9acd32}.dot-danger[data-v-e59be3b4]{background-color:#ff4500}.dot-danger-outline[data-v-e59be3b4]{background-color:transparent;border:1px solid #ff4500;color:#ff4500}.dot-grey[data-v-e59be3b4]{background-color:#999}.dot-grey-outline[data-v-e59be3b4]{background-color:transparent;border:1px solid #999;color:#999}.dot-info[data-v-e59be3b4]{background-color:#17a2b8}.dot-info-outline[data-v-e59be3b4]{background-color:transparent;border:1px solid #17a2b8;color:#17a2b8}.dot-warning[data-v-e59be3b4]{background-color:#ffa300}.dot-warning-outline[data-v-e59be3b4]{background-color:transparent;border:1px solid #ffa300;color:#ffa300}.dot-light[data-v-e59be3b4]{background-color:#f5f5f5}.dot-light-outline[data-v-e59be3b4]{background-color:transparent;border:1px solid #f5f5f5;color:#f5f5f5}.dot-dark[data-v-e59be3b4]{background-color:#24292e}.dot-dark-outline[data-v-e59be3b4]{background-color:transparent;border:1px solid #24292e;color:#24292e}.dot-default[data-v-e59be3b4]{background-color:#ccc}.dot-default-outline[data-v-e59be3b4]{background-color:transparent;border:1px solid #ccc;color:#ccc}.dot-white[data-v-e59be3b4]{background-color:#fff}.dot-white-outline[data-v-e59be3b4]{background-color:transparent;border:1px solid #fff;color:#fff}.dot-black[data-v-e59be3b4]{background-color:#000}.dot-black-outline[data-v-e59be3b4]{background-color:transparent;border:1px solid #000;color:#000}a[data-v-e59be3b4]{color:#1e90ff;text-decoration:none}a[data-v-e59be3b4]:focus,a[data-v-e59be3b4]:hover{text-decoration:underline}.btn[data-v-e59be3b4]{border:1px solid transparent;outline:none;cursor:pointer;-webkit-transition:all .25s cubic-bezier(.645,.045,.355,1);transition:all .25s cubic-bezier(.645,.045,.355,1);background-color:#1e90ff;color:#fff;display:inline-block;border-radius:8px;line-height:1;-webkit-box-sizing:border-box;box-sizing:border-box;padding:12px 20px;font-size:1em;font-weight:inherit;margin:0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:auto;overflow:visible;-webkit-font-smoothing:inherit;text-decoration:none;-moz-osx-font-smoothing:inherit}.btn[data-v-e59be3b4]:focus,.btn[data-v-e59be3b4]:hover{background-color:#0077ea}.btn.active[data-v-e59be3b4]{background-color:#1e90ff}.btn.active[data-v-e59be3b4],.btn[data-v-e59be3b4]:focus{-webkit-box-shadow:0 0 0 .143rem rgba(30,144,255,.5);box-shadow:0 0 0 .143rem rgba(30,144,255,.5)}.btn.active[data-v-e59be3b4],.btn[data-v-e59be3b4]:focus,.btn[data-v-e59be3b4]:hover{text-decoration:none}.btn--rounded[data-v-e59be3b4]{border-radius:50px}.btn--block[data-v-e59be3b4]{width:100%}.btn--lg[data-v-e59be3b4]{padding:16px 22px;font-size:1.143em}.btn--md[data-v-e59be3b4]{padding:10px 20px;font-size:1em}.btn--sm[data-v-e59be3b4]{padding:9px 15px;font-size:.857em}.btn--mini[data-v-e59be3b4]{padding:7px 15px;font-size:.857em}.btn--fab[data-v-e59be3b4]{border-radius:50%;padding:0;height:40px;width:40px}.btn--fab.btn--lg[data-v-e59be3b4]{height:50px;width:50px}.btn--fab.btn--md[data-v-e59be3b4]{height:36px;width:36px}.btn--fab.btn--sm[data-v-e59be3b4]{height:32px;width:32px}.btn--fab.btn--mini[data-v-e59be3b4]{height:28px;width:28px}.btn--light[data-v-e59be3b4],.btn--white[data-v-e59be3b4]{color:#747474}.btn--primary[data-v-e59be3b4]{background-color:#1e90ff}.btn--primary[data-v-e59be3b4]:focus,.btn--primary[data-v-e59be3b4]:hover{background-color:#0077ea}.btn--primary.active[data-v-e59be3b4]{background-color:#1e90ff}.btn--primary.active[data-v-e59be3b4],.btn--primary[data-v-e59be3b4]:focus{-webkit-box-shadow:0 0 0 .143rem rgba(30,144,255,.5);box-shadow:0 0 0 .143rem rgba(30,144,255,.5)}.btn--primary--outline[data-v-e59be3b4]{background-color:rgba(30,144,255,.05);border:1px solid #1e90ff;color:#1e90ff}.btn--primary--outline.active[data-v-e59be3b4],.btn--primary--outline[data-v-e59be3b4]:focus,.btn--primary--outline[data-v-e59be3b4]:hover{background-color:#1e90ff;color:#fff}.btn--primary--outline.active[data-v-e59be3b4],.btn--primary--outline[data-v-e59be3b4]:focus{-webkit-box-shadow:0 0 0 .143rem rgba(30,144,255,.5);box-shadow:0 0 0 .143rem rgba(30,144,255,.5)}.btn--secondary[data-v-e59be3b4]{background-color:#747474}.btn--secondary[data-v-e59be3b4]:focus,.btn--secondary[data-v-e59be3b4]:hover{background-color:#5b5b5b}.btn--secondary.active[data-v-e59be3b4]{background-color:#747474}.btn--secondary.active[data-v-e59be3b4],.btn--secondary[data-v-e59be3b4]:focus{-webkit-box-shadow:0 0 0 .143rem hsla(0,0%,45.5%,.5);box-shadow:0 0 0 .143rem hsla(0,0%,45.5%,.5)}.btn--secondary--outline[data-v-e59be3b4]{background-color:hsla(0,0%,45.5%,.05);border:1px solid #747474;color:#747474}.btn--secondary--outline.active[data-v-e59be3b4],.btn--secondary--outline[data-v-e59be3b4]:focus,.btn--secondary--outline[data-v-e59be3b4]:hover{background-color:#747474;color:#fff}.btn--secondary--outline.active[data-v-e59be3b4],.btn--secondary--outline[data-v-e59be3b4]:focus{-webkit-box-shadow:0 0 0 .143rem hsla(0,0%,45.5%,.5);box-shadow:0 0 0 .143rem hsla(0,0%,45.5%,.5)}.btn--third[data-v-e59be3b4]{background-color:#ccc}.btn--third[data-v-e59be3b4]:focus,.btn--third[data-v-e59be3b4]:hover{background-color:#b3b3b3}.btn--third.active[data-v-e59be3b4]{background-color:#ccc}.btn--third.active[data-v-e59be3b4],.btn--third[data-v-e59be3b4]:focus{-webkit-box-shadow:0 0 0 .143rem hsla(0,0%,80%,.5);box-shadow:0 0 0 .143rem hsla(0,0%,80%,.5)}.btn--third--outline[data-v-e59be3b4]{background-color:hsla(0,0%,80%,.05);border:1px solid #ccc;color:#ccc}.btn--third--outline.active[data-v-e59be3b4],.btn--third--outline[data-v-e59be3b4]:focus,.btn--third--outline[data-v-e59be3b4]:hover{background-color:#ccc;color:#fff}.btn--third--outline.active[data-v-e59be3b4],.btn--third--outline[data-v-e59be3b4]:focus{-webkit-box-shadow:0 0 0 .143rem hsla(0,0%,80%,.5);box-shadow:0 0 0 .143rem hsla(0,0%,80%,.5)}.btn--success[data-v-e59be3b4]{background-color:#9acd32}.btn--success[data-v-e59be3b4]:focus,.btn--success[data-v-e59be3b4]:hover{background-color:#7ba428}.btn--success.active[data-v-e59be3b4]{background-color:#9acd32}.btn--success.active[data-v-e59be3b4],.btn--success[data-v-e59be3b4]:focus{-webkit-box-shadow:0 0 0 .143rem rgba(154,205,50,.5);box-shadow:0 0 0 .143rem rgba(154,205,50,.5)}.btn--success--outline[data-v-e59be3b4]{background-color:rgba(154,205,50,.05);border:1px solid #9acd32;color:#9acd32}.btn--success--outline.active[data-v-e59be3b4],.btn--success--outline[data-v-e59be3b4]:focus,.btn--success--outline[data-v-e59be3b4]:hover{background-color:#9acd32;color:#fff}.btn--success--outline.active[data-v-e59be3b4],.btn--success--outline[data-v-e59be3b4]:focus{-webkit-box-shadow:0 0 0 .143rem rgba(154,205,50,.5);box-shadow:0 0 0 .143rem rgba(154,205,50,.5)}.btn--danger[data-v-e59be3b4]{background-color:#ff4500}.btn--danger[data-v-e59be3b4]:focus,.btn--danger[data-v-e59be3b4]:hover{background-color:#cc3700}.btn--danger.active[data-v-e59be3b4]{background-color:#ff4500}.btn--danger.active[data-v-e59be3b4],.btn--danger[data-v-e59be3b4]:focus{-webkit-box-shadow:0 0 0 .143rem rgba(255,69,0,.5);box-shadow:0 0 0 .143rem rgba(255,69,0,.5)}.btn--danger--outline[data-v-e59be3b4]{background-color:rgba(255,69,0,.05);border:1px solid #ff4500;color:#ff4500}.btn--danger--outline.active[data-v-e59be3b4],.btn--danger--outline[data-v-e59be3b4]:focus,.btn--danger--outline[data-v-e59be3b4]:hover{background-color:#ff4500;color:#fff}.btn--danger--outline.active[data-v-e59be3b4],.btn--danger--outline[data-v-e59be3b4]:focus{-webkit-box-shadow:0 0 0 .143rem rgba(255,69,0,.5);box-shadow:0 0 0 .143rem rgba(255,69,0,.5)}.btn--grey[data-v-e59be3b4]{background-color:#999}.btn--grey[data-v-e59be3b4]:focus,.btn--grey[data-v-e59be3b4]:hover{background-color:grey}.btn--grey.active[data-v-e59be3b4]{background-color:#999}.btn--grey.active[data-v-e59be3b4],.btn--grey[data-v-e59be3b4]:focus{-webkit-box-shadow:0 0 0 .143rem hsla(0,0%,60%,.5);box-shadow:0 0 0 .143rem hsla(0,0%,60%,.5)}.btn--grey--outline[data-v-e59be3b4]{background-color:hsla(0,0%,60%,.05);border:1px solid #999;color:#999}.btn--grey--outline.active[data-v-e59be3b4],.btn--grey--outline[data-v-e59be3b4]:focus,.btn--grey--outline[data-v-e59be3b4]:hover{background-color:#999;color:#fff}.btn--grey--outline.active[data-v-e59be3b4],.btn--grey--outline[data-v-e59be3b4]:focus{-webkit-box-shadow:0 0 0 .143rem hsla(0,0%,60%,.5);box-shadow:0 0 0 .143rem hsla(0,0%,60%,.5)}.btn--info[data-v-e59be3b4]{background-color:#17a2b8}.btn--info[data-v-e59be3b4]:focus,.btn--info[data-v-e59be3b4]:hover{background-color:#117a8b}.btn--info.active[data-v-e59be3b4]{background-color:#17a2b8}.btn--info.active[data-v-e59be3b4],.btn--info[data-v-e59be3b4]:focus{-webkit-box-shadow:0 0 0 .143rem rgba(23,162,184,.5);box-shadow:0 0 0 .143rem rgba(23,162,184,.5)}.btn--info--outline[data-v-e59be3b4]{background-color:rgba(23,162,184,.05);border:1px solid #17a2b8;color:#17a2b8}.btn--info--outline.active[data-v-e59be3b4],.btn--info--outline[data-v-e59be3b4]:focus,.btn--info--outline[data-v-e59be3b4]:hover{background-color:#17a2b8;color:#fff}.btn--info--outline.active[data-v-e59be3b4],.btn--info--outline[data-v-e59be3b4]:focus{-webkit-box-shadow:0 0 0 .143rem rgba(23,162,184,.5);box-shadow:0 0 0 .143rem rgba(23,162,184,.5)}.btn--warning[data-v-e59be3b4]{background-color:#ffa300}.btn--warning[data-v-e59be3b4]:focus,.btn--warning[data-v-e59be3b4]:hover{background-color:#cc8200}.btn--warning.active[data-v-e59be3b4]{background-color:#ffa300}.btn--warning.active[data-v-e59be3b4],.btn--warning[data-v-e59be3b4]:focus{-webkit-box-shadow:0 0 0 .143rem rgba(255,163,0,.5);box-shadow:0 0 0 .143rem rgba(255,163,0,.5)}.btn--warning--outline[data-v-e59be3b4]{background-color:rgba(255,163,0,.05);border:1px solid #ffa300;color:#ffa300}.btn--warning--outline.active[data-v-e59be3b4],.btn--warning--outline[data-v-e59be3b4]:focus,.btn--warning--outline[data-v-e59be3b4]:hover{background-color:#ffa300;color:#fff}.btn--warning--outline.active[data-v-e59be3b4],.btn--warning--outline[data-v-e59be3b4]:focus{-webkit-box-shadow:0 0 0 .143rem rgba(255,163,0,.5);box-shadow:0 0 0 .143rem rgba(255,163,0,.5)}.btn--light[data-v-e59be3b4]{background-color:#f5f5f5}.btn--light[data-v-e59be3b4]:focus,.btn--light[data-v-e59be3b4]:hover{background-color:#dcdcdc}.btn--light.active[data-v-e59be3b4]{background-color:#f5f5f5}.btn--light.active[data-v-e59be3b4],.btn--light[data-v-e59be3b4]:focus{-webkit-box-shadow:0 0 0 .143rem hsla(0,0%,96.1%,.5);box-shadow:0 0 0 .143rem hsla(0,0%,96.1%,.5)}.btn--light--outline[data-v-e59be3b4]{background-color:hsla(0,0%,96.1%,.05);border:1px solid #f5f5f5;color:#f5f5f5}.btn--light--outline.active[data-v-e59be3b4],.btn--light--outline[data-v-e59be3b4]:focus,.btn--light--outline[data-v-e59be3b4]:hover{background-color:#f5f5f5;color:#fff}.btn--light--outline.active[data-v-e59be3b4],.btn--light--outline[data-v-e59be3b4]:focus{-webkit-box-shadow:0 0 0 .143rem hsla(0,0%,96.1%,.5);box-shadow:0 0 0 .143rem hsla(0,0%,96.1%,.5)}.btn--dark[data-v-e59be3b4]{background-color:#24292e}.btn--dark[data-v-e59be3b4]:focus,.btn--dark[data-v-e59be3b4]:hover{background-color:#0e1011}.btn--dark.active[data-v-e59be3b4]{background-color:#24292e}.btn--dark.active[data-v-e59be3b4],.btn--dark[data-v-e59be3b4]:focus{-webkit-box-shadow:0 0 0 .143rem rgba(36,41,46,.5);box-shadow:0 0 0 .143rem rgba(36,41,46,.5)}.btn--dark--outline[data-v-e59be3b4]{background-color:rgba(36,41,46,.05);border:1px solid #24292e;color:#24292e}.btn--dark--outline.active[data-v-e59be3b4],.btn--dark--outline[data-v-e59be3b4]:focus,.btn--dark--outline[data-v-e59be3b4]:hover{background-color:#24292e;color:#fff}.btn--dark--outline.active[data-v-e59be3b4],.btn--dark--outline[data-v-e59be3b4]:focus{-webkit-box-shadow:0 0 0 .143rem rgba(36,41,46,.5);box-shadow:0 0 0 .143rem rgba(36,41,46,.5)}.btn--default[data-v-e59be3b4]{background-color:#ccc}.btn--default[data-v-e59be3b4]:focus,.btn--default[data-v-e59be3b4]:hover{background-color:#b3b3b3}.btn--default.active[data-v-e59be3b4]{background-color:#ccc}.btn--default.active[data-v-e59be3b4],.btn--default[data-v-e59be3b4]:focus{-webkit-box-shadow:0 0 0 .143rem hsla(0,0%,80%,.5);box-shadow:0 0 0 .143rem hsla(0,0%,80%,.5)}.btn--default--outline[data-v-e59be3b4]{background-color:hsla(0,0%,80%,.05);border:1px solid #ccc;color:#ccc}.btn--default--outline.active[data-v-e59be3b4],.btn--default--outline[data-v-e59be3b4]:focus,.btn--default--outline[data-v-e59be3b4]:hover{background-color:#ccc;color:#fff}.btn--default--outline.active[data-v-e59be3b4],.btn--default--outline[data-v-e59be3b4]:focus{-webkit-box-shadow:0 0 0 .143rem hsla(0,0%,80%,.5);box-shadow:0 0 0 .143rem hsla(0,0%,80%,.5)}.btn--white[data-v-e59be3b4]{background-color:#fff}.btn--white[data-v-e59be3b4]:focus,.btn--white[data-v-e59be3b4]:hover{background-color:#e6e6e6}.btn--white.active[data-v-e59be3b4]{background-color:#fff}.btn--white.active[data-v-e59be3b4],.btn--white[data-v-e59be3b4]:focus{-webkit-box-shadow:0 0 0 .143rem hsla(0,0%,100%,.5);box-shadow:0 0 0 .143rem hsla(0,0%,100%,.5)}.btn--white--outline[data-v-e59be3b4]{background-color:hsla(0,0%,100%,.05);border:1px solid #fff;color:#fff}.btn--white--outline.active[data-v-e59be3b4],.btn--white--outline[data-v-e59be3b4]:focus,.btn--white--outline[data-v-e59be3b4]:hover{background-color:#fff;color:#fff}.btn--white--outline.active[data-v-e59be3b4],.btn--white--outline[data-v-e59be3b4]:focus{-webkit-box-shadow:0 0 0 .143rem hsla(0,0%,100%,.5);box-shadow:0 0 0 .143rem hsla(0,0%,100%,.5)}.btn--black.active[data-v-e59be3b4],.btn--black[data-v-e59be3b4],.btn--black[data-v-e59be3b4]:focus,.btn--black[data-v-e59be3b4]:hover{background-color:#000}.btn--black.active[data-v-e59be3b4],.btn--black[data-v-e59be3b4]:focus{-webkit-box-shadow:0 0 0 .143rem rgba(0,0,0,.5);box-shadow:0 0 0 .143rem rgba(0,0,0,.5)}.btn--black--outline[data-v-e59be3b4]{background-color:rgba(0,0,0,.05);border:1px solid #000;color:#000}.btn--black--outline.active[data-v-e59be3b4],.btn--black--outline[data-v-e59be3b4]:focus,.btn--black--outline[data-v-e59be3b4]:hover{background-color:#000;color:#fff}.btn--black--outline.active[data-v-e59be3b4],.btn--black--outline[data-v-e59be3b4]:focus{-webkit-box-shadow:0 0 0 .143rem rgba(0,0,0,.5);box-shadow:0 0 0 .143rem rgba(0,0,0,.5)}.btn--default--outline[data-v-e59be3b4]{color:#747474}.btn--disabled[data-v-e59be3b4]:disabled{-webkit-box-shadow:none;box-shadow:none;background-color:#ccc;border:1px solid #ccc;color:#fff;cursor:not-allowed}.badge[data-v-e59be3b4]{background:#999;height:22px;line-height:22px;border-radius:22px;padding:0 5px;font-size:.857em;color:#888;font-weight:500}.badge-primary[data-v-e59be3b4]{background-color:#1e90ff;color:#fff}.badge-secondary[data-v-e59be3b4]{background-color:#747474;color:#fff}.badge-third[data-v-e59be3b4]{background-color:#ccc;color:#fff}.badge-success[data-v-e59be3b4]{background-color:#9acd32;color:#fff}.badge-danger[data-v-e59be3b4]{background-color:#ff4500;color:#fff}.badge-grey[data-v-e59be3b4]{background-color:#999;color:#fff}.badge-info[data-v-e59be3b4]{background-color:#17a2b8;color:#fff}.badge-warning[data-v-e59be3b4]{background-color:#ffa300;color:#fff}.badge-light[data-v-e59be3b4]{background-color:#f5f5f5;color:#fff}.badge-dark[data-v-e59be3b4]{background-color:#24292e;color:#fff}.badge-default[data-v-e59be3b4]{background-color:#ccc;color:#fff}.badge-white[data-v-e59be3b4]{background-color:#fff;color:#fff}.badge-black[data-v-e59be3b4]{background-color:#000;color:#fff}table.md[data-v-e59be3b4]{border-spacing:0;border-radius:8px;border-collapse:collapse;width:100%;table-layout:fixed;overflow-wrap:break-word;overflow:hidden;word-break:break-all;margin-top:0;margin-bottom:16px;font-size:1em;-webkit-box-shadow:0 0 8px rgba(0,0,0,.2);box-shadow:0 0 8px rgba(0,0,0,.2)}table.md tr[data-v-e59be3b4]{background-color:#fff;width:100%}table.md tr td[data-v-e59be3b4],table.md tr th[data-v-e59be3b4]{padding:6px 13px;text-align:left}table.md tr[data-v-e59be3b4]:nth-child(2n){background-color:#f2f2f2}.is-dark table.md[data-v-e59be3b4]{color:#f2f2f2}.is-dark table.md tr[data-v-e59be3b4]{background-color:#21222e}.is-dark table.md tr[data-v-e59be3b4]:nth-child(2n){background-color:#2e2f40}.is-dark table.md tr td.text-muted[data-v-e59be3b4]{color:hsla(0,0%,100%,.3)}.slide-enter-active[data-v-e59be3b4],.slide-leave-active[data-v-e59be3b4]{opacity:1;z-index:998;-webkit-transition:all .3s;transition:all .3s;-webkit-transform:translateY(0);transform:translateY(0)}.slide-enter[data-v-e59be3b4],.slide-leave-to[data-v-e59be3b4]{opacity:0;z-index:998;-webkit-transform:translateY(-20px);transform:translateY(-20px)}.tags-enter-active[data-v-e59be3b4],.tags-leave-active[data-v-e59be3b4]{opacity:1;-webkit-transition:all .3s;transition:all .3s;position:absolute;-webkit-transform:translateY(0);transform:translateY(0)}.tags-enter[data-v-e59be3b4],.tags-leave-to[data-v-e59be3b4]{opacity:0;-webkit-transform:translateX(-100%);transform:translateX(-100%)}.slideinvert-enter-active[data-v-e59be3b4],.slideinvert-leave-active[data-v-e59be3b4]{opacity:1;z-index:998;-webkit-transition:all .3s;transition:all .3s;-webkit-transform:translateY(0);transform:translateY(0)}.slideinvert-enter[data-v-e59be3b4],.slideinvert-leave-to[data-v-e59be3b4]{opacity:0;z-index:998;-webkit-transform:translateY(40px);transform:translateY(40px)}.slidenext-enter-active[data-v-e59be3b4],.slidenext-leave-active[data-v-e59be3b4],.slideprev-enter-active[data-v-e59be3b4],.slideprev-leave-active[data-v-e59be3b4]{position:absolute;-webkit-transition:all .3s;transition:all .3s}.slidenext-enter[data-v-e59be3b4],.slideprev-leave-to[data-v-e59be3b4]{-webkit-transform:translateX(100%);transform:translateX(100%)}.slidenext-leave-to[data-v-e59be3b4],.slideprev-enter[data-v-e59be3b4]{-webkit-transform:translateX(-100%);transform:translateX(-100%)}.slidevnext-enter-active[data-v-e59be3b4],.slidevnext-leave-active[data-v-e59be3b4],.slidevprev-enter-active[data-v-e59be3b4],.slidevprev-leave-active[data-v-e59be3b4]{position:absolute;-webkit-transition:all .3s;transition:all .3s}.slidevnext-enter[data-v-e59be3b4],.slidevprev-leave-to[data-v-e59be3b4]{-webkit-transform:translateY(100%);transform:translateY(100%);opacity:0}.slidevnext-leave-to[data-v-e59be3b4],.slidevprev-enter[data-v-e59be3b4]{-webkit-transform:translateY(-100%);transform:translateY(-100%);opacity:0}@media screen and (max-width:415px){.slide-enter-active[data-v-e59be3b4],.slide-leave-active[data-v-e59be3b4],.slideinvert-enter-active[data-v-e59be3b4],.slideinvert-leave-active[data-v-e59be3b4]{-webkit-transition:all 0s;transition:all 0s}}.spinner-anim[data-v-e59be3b4]{-webkit-animation:spin-data-v-e59be3b4 .6s linear infinite;animation:spin-data-v-e59be3b4 .6s linear infinite}@-webkit-keyframes spin-data-v-e59be3b4{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes spin-data-v-e59be3b4{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.dialog-fade-enter-active .dialog-animation[data-v-e59be3b4]{-webkit-animation:dialog-fade-in-data-v-e59be3b4 .4s;animation:dialog-fade-in-data-v-e59be3b4 .4s}.dialog-fade-leave-active .dialog-animation[data-v-e59be3b4]{-webkit-animation:dialog-fade-out-data-v-e59be3b4 .4s;animation:dialog-fade-out-data-v-e59be3b4 .4s}@-webkit-keyframes dialog-fade-in-data-v-e59be3b4{0%{-webkit-transform:translate3d(0,-30px,0);transform:translate3d(0,-30px,0);opacity:0}to{-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1}}@keyframes dialog-fade-in-data-v-e59be3b4{0%{-webkit-transform:translate3d(0,-30px,0);transform:translate3d(0,-30px,0);opacity:0}to{-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1}}@-webkit-keyframes dialog-fade-out-data-v-e59be3b4{0%{-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1}to{-webkit-transform:translate3d(0,-30px,0);transform:translate3d(0,-30px,0);opacity:0}}@keyframes dialog-fade-out-data-v-e59be3b4{0%{-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1}to{-webkit-transform:translate3d(0,-30px,0);transform:translate3d(0,-30px,0);opacity:0}}.expand-enter-active[data-v-e59be3b4],.expand-leave-active[data-v-e59be3b4]{-webkit-transition:.3s ease-in-out;transition:.3s ease-in-out;-webkit-transition-property:opacity,height;transition-property:opacity,height;overflow:hidden}.expand-enter[data-v-e59be3b4],.expand-leave-to[data-v-e59be3b4]{height:0;opacity:0}.scale-enter-active[data-v-e59be3b4],.scale-leave-active[data-v-e59be3b4]{opacity:1;z-index:1;-webkit-transition:all .3s cubic-bezier(.4,.52,.26,.9);transition:all .3s cubic-bezier(.4,.52,.26,.9)}.scale-enter[data-v-e59be3b4],.scale-leave-to[data-v-e59be3b4]{opacity:.4;z-index:1;-webkit-transform:scale(0);transform:scale(0)}@-webkit-keyframes loading-data-v-e59be3b4{0%{left:-200px;width:30%}50%{width:30%}70%{width:70%}80%{left:50%}95%{left:120%}to{left:100%}}.flip-list-move[data-v-e59be3b4]{-webkit-transition:-webkit-transform .6s;transition:-webkit-transform .6s;transition:transform .6s;transition:transform .6s,-webkit-transform .6s}.over-hid[data-v-e59be3b4]{overflow:hidden}.pos-r[data-v-e59be3b4]{position:relative}.pos-a[data-v-e59be3b4]{position:absolute}.flex[data-v-e59be3b4]{display:-webkit-box;display:-ms-flexbox;display:flex}.flex.fluid[data-v-e59be3b4]{width:100%}.flex.direction-column[data-v-e59be3b4]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.flex.direction-column-reverse[data-v-e59be3b4]{-webkit-box-orient:vertical;-webkit-box-direction:reverse;-ms-flex-direction:column-reverse;flex-direction:column-reverse}.flex.direction-row[data-v-e59be3b4]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.flex.direction-row-reverse[data-v-e59be3b4]{-webkit-box-orient:horizontal;-webkit-box-direction:reverse;-ms-flex-direction:row-reverse;flex-direction:row-reverse}.flex.align-center[data-v-e59be3b4]{-webkit-box-align:center;-ms-flex-align:center;align-items:center}.flex.align-start[data-v-e59be3b4]{-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start}.flex.align-end[data-v-e59be3b4]{-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end}.flex.justify-start[data-v-e59be3b4]{-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}.flex.justify-end[data-v-e59be3b4]{-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}.flex.justify-center[data-v-e59be3b4]{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.flex.space-between[data-v-e59be3b4]{-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.flex.space-around[data-v-e59be3b4]{-ms-flex-pack:distribute;justify-content:space-around}.flex.flex-center[data-v-e59be3b4]{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.flex.flex--wrap[data-v-e59be3b4]{-ms-flex-wrap:wrap;flex-wrap:wrap}.flex.flex--grow[data-v-e59be3b4]{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1}.flex-fill[data-v-e59be3b4]{-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto}.flex-fixed[data-v-e59be3b4]{-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto}.flex-1[data-v-e59be3b4]{-webkit-box-flex:1;-ms-flex:1;flex:1}.flex-100[data-v-e59be3b4]{-webkit-box-flex:0;-ms-flex:0 1 100%;flex:0 1 100%}.flex-75[data-v-e59be3b4]{-webkit-box-flex:0;-ms-flex:0 1 75%;flex:0 1 75%}.flex-50[data-v-e59be3b4]{-webkit-box-flex:0;-ms-flex:0 1 50%;flex:0 1 50%}.flex-33[data-v-e59be3b4]{-webkit-box-flex:0;-ms-flex:0 1 33.33%;flex:0 1 33.33%}.flex-25[data-v-e59be3b4]{-webkit-box-flex:0;-ms-flex:0 1 25%;flex:0 1 25%}.flex-20[data-v-e59be3b4]{-webkit-box-flex:0;-ms-flex:0 1 20%;flex:0 1 20%}.flex-16[data-v-e59be3b4]{-webkit-box-flex:0;-ms-flex:0 1 16.66%;flex:0 1 16.66%}.text-muted-white[data-v-e59be3b4]{color:hsla(0,0%,100%,.54)}.text-muted[data-v-e59be3b4]{color:rgba(0,0,0,.54)}.is-dark .text-muted[data-v-e59be3b4]{color:hsla(0,0%,100%,.54)}.text-strong[data-v-e59be3b4]{font-weight:500}.text-center[data-v-e59be3b4]{text-align:center}.text-left[data-v-e59be3b4]{text-align:left}.text-right[data-v-e59be3b4]{text-align:right}.text-primary[data-v-e59be3b4]{color:#1e90ff}.text-secondary[data-v-e59be3b4]{color:#747474}.text-third[data-v-e59be3b4]{color:#ccc}.text-success[data-v-e59be3b4]{color:#9acd32}.text-danger[data-v-e59be3b4]{color:#ff4500}.text-grey[data-v-e59be3b4]{color:#999}.text-info[data-v-e59be3b4]{color:#17a2b8}.text-warning[data-v-e59be3b4]{color:#ffa300}.text-light[data-v-e59be3b4]{color:#f5f5f5}.text-dark[data-v-e59be3b4]{color:#24292e}.text-default[data-v-e59be3b4]{color:#ccc}.text-white[data-v-e59be3b4]{color:#fff}.text-black[data-v-e59be3b4]{color:#000}.dots-text[data-v-e59be3b4]{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.dots-text-3[data-v-e59be3b4]{overflow:hidden;position:relative;line-height:1.3em;max-height:3.9em;text-align:justify;margin-right:-1em;padding-right:1em}.dots-text-3[data-v-e59be3b4]:before{content:"...";position:absolute;right:3px;bottom:2px}.dots-text-3[data-v-e59be3b4]:after{content:"";position:absolute;right:0;width:1em;height:1em;margin-top:.2em;background:#fff}.dots-text-2[data-v-e59be3b4]{overflow:hidden;position:relative;line-height:1.3em;max-height:2.6em;text-align:justify;margin-right:-1em;padding-right:1em}.dots-text-2[data-v-e59be3b4]:before{content:"...";position:absolute;right:3px;bottom:2px}.dots-text-2[data-v-e59be3b4]:after{content:"";position:absolute;right:0;width:1em;height:1em;margin-top:.2em;background:#fff}.container[data-v-e59be3b4]{width:100%;padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto}@media(max-width:768px){.container[data-v-e59be3b4]{max-width:100%}}@media(min-width:768px){.container[data-v-e59be3b4]{max-width:768px}}@media(min-width:1024px){.container[data-v-e59be3b4]{max-width:1024px}}@media(min-width:1440px){.container[data-v-e59be3b4]{max-width:1440px}}@media(min-width:2560px){.container[data-v-e59be3b4]{max-width:2560px}}.pr-0[data-v-e59be3b4]{padding-right:0}.pt-0[data-v-e59be3b4]{padding-top:0}.pb-0[data-v-e59be3b4]{padding-bottom:0}.pl-0[data-v-e59be3b4]{padding-left:0}.px-0[data-v-e59be3b4]{padding-left:0;padding-right:0}.py-0[data-v-e59be3b4]{padding-top:0;padding-bottom:0}.p-0[data-v-e59be3b4]{padding:0}.pr-1[data-v-e59be3b4]{padding-right:.25rem}.pt-1[data-v-e59be3b4]{padding-top:.25rem}.pb-1[data-v-e59be3b4]{padding-bottom:.25rem}.pl-1[data-v-e59be3b4]{padding-left:.25rem}.px-1[data-v-e59be3b4]{padding-left:.25rem;padding-right:.25rem}.py-1[data-v-e59be3b4]{padding-top:.25rem;padding-bottom:.25rem}.p-1[data-v-e59be3b4]{padding:.25rem}.pr-2[data-v-e59be3b4]{padding-right:.5rem}.pt-2[data-v-e59be3b4]{padding-top:.5rem}.pb-2[data-v-e59be3b4]{padding-bottom:.5rem}.pl-2[data-v-e59be3b4]{padding-left:.5rem}.px-2[data-v-e59be3b4]{padding-left:.5rem;padding-right:.5rem}.py-2[data-v-e59be3b4]{padding-top:.5rem;padding-bottom:.5rem}.p-2[data-v-e59be3b4]{padding:.5rem}.pr-3[data-v-e59be3b4]{padding-right:1rem}.pt-3[data-v-e59be3b4]{padding-top:1rem}.pb-3[data-v-e59be3b4]{padding-bottom:1rem}.pl-3[data-v-e59be3b4]{padding-left:1rem}.px-3[data-v-e59be3b4]{padding-left:1rem;padding-right:1rem}.py-3[data-v-e59be3b4]{padding-top:1rem;padding-bottom:1rem}.p-3[data-v-e59be3b4]{padding:1rem}.pr-4[data-v-e59be3b4]{padding-right:1.5rem}.pt-4[data-v-e59be3b4]{padding-top:1.5rem}.pb-4[data-v-e59be3b4]{padding-bottom:1.5rem}.pl-4[data-v-e59be3b4]{padding-left:1.5rem}.px-4[data-v-e59be3b4]{padding-left:1.5rem;padding-right:1.5rem}.py-4[data-v-e59be3b4]{padding-top:1.5rem;padding-bottom:1.5rem}.p-4[data-v-e59be3b4]{padding:1.5rem}.pr-5[data-v-e59be3b4]{padding-right:3rem}.pt-5[data-v-e59be3b4]{padding-top:3rem}.pb-5[data-v-e59be3b4]{padding-bottom:3rem}.pl-5[data-v-e59be3b4]{padding-left:3rem}.px-5[data-v-e59be3b4]{padding-left:3rem;padding-right:3rem}.py-5[data-v-e59be3b4]{padding-top:3rem;padding-bottom:3rem}.p-5[data-v-e59be3b4]{padding:3rem}.mr-0[data-v-e59be3b4]{margin-right:0}.mt-0[data-v-e59be3b4]{margin-top:0}.mb-0[data-v-e59be3b4]{margin-bottom:0}.ml-0[data-v-e59be3b4]{margin-left:0}.mx-0[data-v-e59be3b4]{margin-left:0;margin-right:0}.my-0[data-v-e59be3b4]{margin-top:0;margin-bottom:0}.m-0[data-v-e59be3b4]{margin:0}.mr-1[data-v-e59be3b4]{margin-right:.25rem}.mt-1[data-v-e59be3b4]{margin-top:.25rem}.mb-1[data-v-e59be3b4]{margin-bottom:.25rem}.ml-1[data-v-e59be3b4]{margin-left:.25rem}.mx-1[data-v-e59be3b4]{margin-left:.25rem;margin-right:.25rem}.my-1[data-v-e59be3b4]{margin-top:.25rem;margin-bottom:.25rem}.m-1[data-v-e59be3b4]{margin:.25rem}.mr-2[data-v-e59be3b4]{margin-right:.5rem}.mt-2[data-v-e59be3b4]{margin-top:.5rem}.mb-2[data-v-e59be3b4]{margin-bottom:.5rem}.ml-2[data-v-e59be3b4]{margin-left:.5rem}.mx-2[data-v-e59be3b4]{margin-left:.5rem;margin-right:.5rem}.my-2[data-v-e59be3b4]{margin-top:.5rem;margin-bottom:.5rem}.m-2[data-v-e59be3b4]{margin:.5rem}.mr-3[data-v-e59be3b4]{margin-right:1rem}.mt-3[data-v-e59be3b4]{margin-top:1rem}.mb-3[data-v-e59be3b4]{margin-bottom:1rem}.ml-3[data-v-e59be3b4]{margin-left:1rem}.mx-3[data-v-e59be3b4]{margin-left:1rem;margin-right:1rem}.my-3[data-v-e59be3b4]{margin-top:1rem;margin-bottom:1rem}.m-3[data-v-e59be3b4]{margin:1rem}.mr-4[data-v-e59be3b4]{margin-right:1.5rem}.mt-4[data-v-e59be3b4]{margin-top:1.5rem}.mb-4[data-v-e59be3b4]{margin-bottom:1.5rem}.ml-4[data-v-e59be3b4]{margin-left:1.5rem}.mx-4[data-v-e59be3b4]{margin-left:1.5rem;margin-right:1.5rem}.my-4[data-v-e59be3b4]{margin-top:1.5rem;margin-bottom:1.5rem}.m-4[data-v-e59be3b4]{margin:1.5rem}.mr-5[data-v-e59be3b4]{margin-right:3rem}.mt-5[data-v-e59be3b4]{margin-top:3rem}.mb-5[data-v-e59be3b4]{margin-bottom:3rem}.ml-5[data-v-e59be3b4]{margin-left:3rem}.mx-5[data-v-e59be3b4]{margin-left:3rem;margin-right:3rem}.my-5[data-v-e59be3b4]{margin-top:3rem;margin-bottom:3rem}.m-5[data-v-e59be3b4]{margin:3rem}.h-100[data-v-e59be3b4]{height:100%}.mh-100[data-v-e59be3b4]{max-height:100%}.w-100[data-v-e59be3b4]{width:100%}.mw-100[data-v-e59be3b4]{max-width:100%}.m-h-0[data-v-e59be3b4]{min-height:0}.m-h-100[data-v-e59be3b4]{min-height:100%}.m-w-0[data-v-e59be3b4]{min-width:0}.m-w-100[data-v-e59be3b4]{min-width:100%}.br-0[data-v-e59be3b4]{border-radius:0}.brt-0[data-v-e59be3b4]{border-top-left-radius:0;border-top-right-radius:0}.brb-0[data-v-e59be3b4]{border-bottom-right-radius:0;border-bottom-left-radius:0}.br-2[data-v-e59be3b4]{border-radius:2px}.brt-2[data-v-e59be3b4]{border-top-left-radius:2px;border-top-right-radius:2px}.brb-2[data-v-e59be3b4]{border-bottom-right-radius:2px;border-bottom-left-radius:2px}.br-4[data-v-e59be3b4]{border-radius:4px}.brt-4[data-v-e59be3b4]{border-top-left-radius:4px;border-top-right-radius:4px}.brb-4[data-v-e59be3b4]{border-bottom-right-radius:4px;border-bottom-left-radius:4px}.br-8[data-v-e59be3b4]{border-radius:8px}.brt-8[data-v-e59be3b4]{border-top-left-radius:8px;border-top-right-radius:8px}.brb-8[data-v-e59be3b4]{border-bottom-right-radius:8px;border-bottom-left-radius:8px}.fs-12[data-v-e59be3b4]{font-size:12px}.fs-14[data-v-e59be3b4]{font-size:14px}.fs-16[data-v-e59be3b4]{font-size:16px}.fs-18[data-v-e59be3b4]{font-size:18px}.fs-20[data-v-e59be3b4]{font-size:20px}.fs-22[data-v-e59be3b4]{font-size:22px}.fs-26[data-v-e59be3b4]{font-size:26px}.fw-300[data-v-e59be3b4]{font-weight:300}.fw-400[data-v-e59be3b4]{font-weight:400}.fw-500[data-v-e59be3b4]{font-weight:500}@media only screen and (max-width:2560px){.hidden-4k[data-v-e59be3b4]{display:none}}@media only screen and (max-width:1440px){.hidden-laptop[data-v-e59be3b4]{display:none}}@media only screen and (max-width:1024px){.hidden-laptop-s[data-v-e59be3b4]{display:none}}@media only screen and (max-width:768px){.hidden-tablet[data-v-e59be3b4]{display:none}}@media only screen and (max-width:425px){.hidden-mobile[data-v-e59be3b4]{display:none}}@media only screen and (max-width:375px){.hidden-mobile-m[data-v-e59be3b4]{display:none}}@media only screen and (max-width:320px){.hidden-mobile-s[data-v-e59be3b4]{display:none}}.show-4k[data-v-e59be3b4]{display:none}@media only screen and (max-width:2560px){.show-4k[data-v-e59be3b4]{display:inherit}}.show-laptop[data-v-e59be3b4]{display:none}@media only screen and (max-width:1440px){.show-laptop[data-v-e59be3b4]{display:inherit}}.show-laptop-s[data-v-e59be3b4]{display:none}@media only screen and (max-width:1024px){.show-laptop-s[data-v-e59be3b4]{display:inherit}}.show-tablet[data-v-e59be3b4]{display:none}@media only screen and (max-width:768px){.show-tablet[data-v-e59be3b4]{display:inherit}}.show-mobile[data-v-e59be3b4]{display:none}@media only screen and (max-width:425px){.show-mobile[data-v-e59be3b4]{display:inherit}}.show-mobile-m[data-v-e59be3b4]{display:none}@media only screen and (max-width:375px){.show-mobile-m[data-v-e59be3b4]{display:inherit}}.show-mobile-s[data-v-e59be3b4]{display:none}@media only screen and (max-width:320px){.show-mobile-s[data-v-e59be3b4]{display:inherit}}[data-v-e59be3b4],[data-v-e59be3b4]:after,[data-v-e59be3b4]:before{-webkit-box-sizing:border-box;box-sizing:border-box}blockquote[data-v-e59be3b4],body[data-v-e59be3b4],dd[data-v-e59be3b4],dl[data-v-e59be3b4],figure[data-v-e59be3b4],h1[data-v-e59be3b4],h2[data-v-e59be3b4],h3[data-v-e59be3b4],h4[data-v-e59be3b4],h5[data-v-e59be3b4],h6[data-v-e59be3b4],hr[data-v-e59be3b4],ol[data-v-e59be3b4],p[data-v-e59be3b4],pre[data-v-e59be3b4],ul[data-v-e59be3b4]{margin:0;padding:0}#app[data-v-e59be3b4],body[data-v-e59be3b4],button[data-v-e59be3b4],html[data-v-e59be3b4],input[data-v-e59be3b4]{font:400 14px -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;line-height:1.5;-webkit-font-kerning:normal;font-kerning:normal}.input-tel[data-v-e59be3b4]{position:relative;font-family:Roboto,-apple-system,BlinkMacSystemFont,Segoe UI,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;height:40px;min-height:40px}.input-tel__label[data-v-e59be3b4]{position:absolute;top:4px;cursor:pointer;left:13px;-webkit-transform:translateY(25%);transform:translateY(25%);opacity:0;-webkit-transition:all .25s cubic-bezier(.645,.045,.355,1);transition:all .25s cubic-bezier(.645,.045,.355,1);font-size:11px;color:#747474}.input-tel__input[data-v-e59be3b4]{cursor:pointer;background-color:#fff;-webkit-transition-duration:.3s;transition-duration:.3s;position:relative;width:100%;padding:0 12px;font-weight:400;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none;border:1px solid #ccc;font-size:14px;z-index:0;margin-left:-1px;height:40px;min-height:40px}.input-tel__input[data-v-e59be3b4]:hover{border-color:#1e90ff}.input-tel__input[data-v-e59be3b4]:not(.no-country-selector){border-top-left-radius:0!important;border-bottom-left-radius:0!important}.input-tel__input[data-v-e59be3b4]::-webkit-input-placeholder{color:#747474}.input-tel__input[data-v-e59be3b4]::-moz-placeholder{color:#747474}.input-tel__input[data-v-e59be3b4]:-ms-input-placeholder{color:#747474}.input-tel__input[data-v-e59be3b4]::-ms-input-placeholder{color:#747474}.input-tel__input[data-v-e59be3b4]::placeholder{color:#747474}.input-tel__input__input[data-v-e59be3b4]:-webkit-autofill,.input-tel__input__input[data-v-e59be3b4]:-webkit-autofill:active,.input-tel__input__input[data-v-e59be3b4]:-webkit-autofill:focus,.input-tel__input__input[data-v-e59be3b4]:-webkit-autofill:hover{-webkit-box-shadow:0 0 0 1000px #fff inset!important;box-shadow:inset 0 0 0 1000px #fff!important;-webkit-text-fill-color:#747474!important}.input-tel__clear[data-v-e59be3b4]{position:absolute;top:0;bottom:0;right:8px;margin:auto 0;width:24px;height:24px;-webkit-appearance:none;-moz-appearance:none;appearance:none;border:none;background:transparent;color:#747474;border-radius:24px;cursor:pointer;font-size:12px}.input-tel__clear[data-v-e59be3b4]:focus{outline:none}.input-tel__clear>span[data-v-e59be3b4]:not(.input-tel__clear__effect){position:relative;top:1px}.input-tel__clear__effect[data-v-e59be3b4]{position:absolute;top:0;left:0;right:0;bottom:0;width:24px;height:24px;background-color:#747474;border-radius:24px;-webkit-transform:scale(0);transform:scale(0);-webkit-transition:-webkit-transform .2s;transition:-webkit-transform .2s;transition:transform .2s;transition:transform .2s,-webkit-transform .2s}.input-tel__clear[data-v-e59be3b4]:hover{color:#fff}.input-tel__clear:hover .input-tel__clear__effect[data-v-e59be3b4]{-webkit-transform:scale(1);transform:scale(1);opacity:.6}.input-tel.is-dark .input-tel__input[data-v-e59be3b4]::-webkit-input-placeholder{color:hsla(0,0%,100%,.7)}.input-tel.is-dark .input-tel__input[data-v-e59be3b4]::-moz-placeholder{color:hsla(0,0%,100%,.7)}.input-tel.is-dark .input-tel__input[data-v-e59be3b4]:-ms-input-placeholder{color:hsla(0,0%,100%,.7)}.input-tel.is-dark .input-tel__input[data-v-e59be3b4]::-ms-input-placeholder{color:hsla(0,0%,100%,.7)}.input-tel.is-dark .input-tel__input[data-v-e59be3b4]::placeholder{color:hsla(0,0%,100%,.7)}.input-tel.is-dark .input-tel__input__input[data-v-e59be3b4]:-webkit-autofill,.input-tel.is-dark .input-tel__input__input[data-v-e59be3b4]:-webkit-autofill:active,.input-tel.is-dark .input-tel__input__input[data-v-e59be3b4]:-webkit-autofill:focus,.input-tel.is-dark .input-tel__input__input[data-v-e59be3b4]:-webkit-autofill:hover{-webkit-box-shadow:0 0 0 1000px #21222e inset!important;box-shadow:inset 0 0 0 1000px #21222e!important;-webkit-text-fill-color:hsla(0,0%,100%,.7)!important}.input-tel.is-dark .input-tel__clear[data-v-e59be3b4]{color:hsla(0,0%,100%,.7)}.input-tel.is-dark .input-tel__clear__effect[data-v-e59be3b4]{background-color:hsla(0,0%,100%,.3)}.input-tel.is-dark .input-tel__clear[data-v-e59be3b4]:hover{color:#fff}.input-tel.is-focused[data-v-e59be3b4]{z-index:1}.input-tel.is-focused .input-tel__input[data-v-e59be3b4]{border-color:#1e90ff;-webkit-box-shadow:0 0 0 .125rem rgba(30,144,255,.7);box-shadow:0 0 0 .125rem rgba(30,144,255,.7)}.input-tel.is-focused .input-tel__label[data-v-e59be3b4]{color:#1e90ff}.input-tel.is-focused.has-error .input-tel__input[data-v-e59be3b4]{-webkit-box-shadow:0 0 0 .125rem rgba(255,69,0,.7);box-shadow:0 0 0 .125rem rgba(255,69,0,.7)}.input-tel.is-focused.is-valid .input-tel__input[data-v-e59be3b4]{border-color:#9acd32;-webkit-box-shadow:0 0 0 .125rem rgba(154,205,50,.7);box-shadow:0 0 0 .125rem rgba(154,205,50,.7)}.input-tel.has-value .input-tel__label[data-v-e59be3b4]{opacity:1;-webkit-transform:translateY(0);transform:translateY(0);font-size:11px}.input-tel.has-value .input-tel__input[data-v-e59be3b4]{padding-top:14px}.input-tel.has-hint .input-tel__label[data-v-e59be3b4],.input-tel.has-value .input-tel__label[data-v-e59be3b4]{opacity:1;-webkit-transform:translateY(0);transform:translateY(0);font-size:11px}.input-tel.has-hint .input-tel__input[data-v-e59be3b4],.input-tel.has-value .input-tel__input[data-v-e59be3b4]{padding-top:14px}.input-tel.is-valid .input-tel__input[data-v-e59be3b4],.input-tel.is-valid .input-tel__input[data-v-e59be3b4]:hover{border-color:#9acd32}.input-tel.is-valid .input-tel__label[data-v-e59be3b4]{color:#9acd32}.input-tel.has-error:not(.is-valid) .input-tel__input[data-v-e59be3b4]{border-color:#ff4500}.input-tel.has-error:not(.is-valid) .input-tel__label[data-v-e59be3b4]{color:#ff4500}.input-tel.is-disabled[data-v-e59be3b4]{cursor:not-allowed}.input-tel.is-disabled .input-tel__input[data-v-e59be3b4]{border-color:#ccc;background-color:#f2f2f2;color:#ccc}.input-tel.is-disabled .input-tel__input[data-v-e59be3b4]::-webkit-input-placeholder{color:#ccc}.input-tel.is-disabled .input-tel__input[data-v-e59be3b4]::-moz-placeholder{color:#ccc}.input-tel.is-disabled .input-tel__input[data-v-e59be3b4]:-ms-input-placeholder{color:#ccc}.input-tel.is-disabled .input-tel__input[data-v-e59be3b4]::-ms-input-placeholder{color:#ccc}.input-tel.is-disabled .input-tel__input[data-v-e59be3b4]::placeholder{color:#ccc}.input-tel.is-disabled .input-tel__input[data-v-e59be3b4],.input-tel.is-disabled .input-tel__label[data-v-e59be3b4],.input-tel.is-disabled .input-tel__toggle__arrow[data-v-e59be3b4]{cursor:not-allowed;color:#ccc}.input-tel.sm[data-v-e59be3b4]{height:36px;min-height:36px}.input-tel.sm .input-tel__input[data-v-e59be3b4]{font-size:12px;height:36px;min-height:36px}.input-tel.sm .input-tel__label[data-v-e59be3b4]{font-size:10px}.input-tel.sm.has-value .input-tel__input[data-v-e59be3b4]{padding-top:12px}.input-tel.lg[data-v-e59be3b4]{height:48px;min-height:48px}.input-tel.lg .input-tel__input[data-v-e59be3b4]{font-size:14px;height:48px;min-height:48px}.input-tel.lg .input-tel__label[data-v-e59be3b4]{font-size:14px}.input-tel.lg.has-value .input-tel__input[data-v-e59be3b4]{padding-top:16px}.input-tel__loader[data-v-e59be3b4]{bottom:0;height:2px;left:0;width:calc(100% - 8px);position:absolute;overflow:hidden;border-radius:8px}.input-tel__loader__progress-bar[data-v-e59be3b4]{background-color:#1e90ff;display:block;position:absolute;content:"";left:-200px;width:200px;height:2px;-webkit-animation:loading-data-v-e59be3b4 2s linear infinite;animation:loading-data-v-e59be3b4 2s linear infinite}@keyframes loading-data-v-e59be3b4{0%{left:-200px;width:30%}50%{width:30%}70%{width:70%}80%{left:50%}95%{left:120%}to{left:100%}}.iti-flag.be{width:18px}.iti-flag.ch{width:15px}.iti-flag.mc{width:19px}.iti-flag.ne{width:18px}.iti-flag.np{width:13px}.iti-flag.va{width:15px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2),only screen and (min-resolution:2dppx),only screen and (min-resolution:192dpi){.iti-flag{background-size:5630px 15px}}.iti-flag.ac{height:10px;background-position:0 0}.iti-flag.ad{height:14px;background-position:-22px 0}.iti-flag.ae{height:10px;background-position:-44px 0}.iti-flag.af{height:14px;background-position:-66px 0}.iti-flag.ag{height:14px;background-position:-88px 0}.iti-flag.ai{height:10px;background-position:-110px 0}.iti-flag.al{height:15px;background-position:-132px 0}.iti-flag.am{height:10px;background-position:-154px 0}.iti-flag.ao{height:14px;background-position:-176px 0}.iti-flag.aq{height:14px;background-position:-198px 0}.iti-flag.ar{height:13px;background-position:-220px 0}.iti-flag.as{height:10px;background-position:-242px 0}.iti-flag.at{height:14px;background-position:-264px 0}.iti-flag.au{height:10px;background-position:-286px 0}.iti-flag.aw{height:14px;background-position:-308px 0}.iti-flag.ax{height:13px;background-position:-330px 0}.iti-flag.az{height:10px;background-position:-352px 0}.iti-flag.ba{height:10px;background-position:-374px 0}.iti-flag.bb{height:14px;background-position:-396px 0}.iti-flag.bd{height:12px;background-position:-418px 0}.iti-flag.be{height:15px;background-position:-440px 0}.iti-flag.bf{height:14px;background-position:-460px 0}.iti-flag.bg{height:12px;background-position:-482px 0}.iti-flag.bh{height:12px;background-position:-504px 0}.iti-flag.bi{height:12px;background-position:-526px 0}.iti-flag.bj{height:14px;background-position:-548px 0}.iti-flag.bl{height:14px;background-position:-570px 0}.iti-flag.bm{height:10px;background-position:-592px 0}.iti-flag.bn{height:10px;background-position:-614px 0}.iti-flag.bo{height:14px;background-position:-636px 0}.iti-flag.bq{height:14px;background-position:-658px 0}.iti-flag.br{height:14px;background-position:-680px 0}.iti-flag.bs{height:10px;background-position:-702px 0}.iti-flag.bt{height:14px;background-position:-724px 0}.iti-flag.bv{height:15px;background-position:-746px 0}.iti-flag.bw{height:14px;background-position:-768px 0}.iti-flag.by{height:10px;background-position:-790px 0}.iti-flag.bz{height:14px;background-position:-812px 0}.iti-flag.ca{height:10px;background-position:-834px 0}.iti-flag.cc{height:10px;background-position:-856px 0}.iti-flag.cd{height:15px;background-position:-878px 0}.iti-flag.cf{height:14px;background-position:-900px 0}.iti-flag.cg{height:14px;background-position:-922px 0}.iti-flag.ch{height:15px;background-position:-944px 0}.iti-flag.ci{height:14px;background-position:-961px 0}.iti-flag.ck{height:10px;background-position:-983px 0}.iti-flag.cl{height:14px;background-position:-1005px 0}.iti-flag.cm{height:14px;background-position:-1027px 0}.iti-flag.cn{height:14px;background-position:-1049px 0}.iti-flag.co{height:14px;background-position:-1071px 0}.iti-flag.cp{height:14px;background-position:-1093px 0}.iti-flag.cr{height:12px;background-position:-1115px 0}.iti-flag.cu{height:10px;background-position:-1137px 0}.iti-flag.cv{height:12px;background-position:-1159px 0}.iti-flag.cw{height:14px;background-position:-1181px 0}.iti-flag.cx{height:10px;background-position:-1203px 0}.iti-flag.cy{height:14px;background-position:-1225px 0}.iti-flag.cz{height:14px;background-position:-1247px 0}.iti-flag.de{height:12px;background-position:-1269px 0}.iti-flag.dg{height:10px;background-position:-1291px 0}.iti-flag.dj{height:14px;background-position:-1313px 0}.iti-flag.dk{height:15px;background-position:-1335px 0}.iti-flag.dm{height:10px;background-position:-1357px 0}.iti-flag.do{height:13px;background-position:-1379px 0}.iti-flag.dz{height:14px;background-position:-1401px 0}.iti-flag.ea{height:14px;background-position:-1423px 0}.iti-flag.ec{height:14px;background-position:-1445px 0}.iti-flag.ee{height:13px;background-position:-1467px 0}.iti-flag.eg{height:14px;background-position:-1489px 0}.iti-flag.eh{height:10px;background-position:-1511px 0}.iti-flag.er{height:10px;background-position:-1533px 0}.iti-flag.es{height:14px;background-position:-1555px 0}.iti-flag.et{height:10px;background-position:-1577px 0}.iti-flag.eu{height:14px;background-position:-1599px 0}.iti-flag.fi{height:12px;background-position:-1621px 0}.iti-flag.fj{height:10px;background-position:-1643px 0}.iti-flag.fk{height:10px;background-position:-1665px 0}.iti-flag.fm{height:11px;background-position:-1687px 0}.iti-flag.fo{height:15px;background-position:-1709px 0}.iti-flag.fr{height:14px;background-position:-1731px 0}.iti-flag.ga{height:15px;background-position:-1753px 0}.iti-flag.gb{height:10px;background-position:-1775px 0}.iti-flag.gd{height:12px;background-position:-1797px 0}.iti-flag.ge{height:14px;background-position:-1819px 0}.iti-flag.gf{height:14px;background-position:-1841px 0}.iti-flag.gg{height:14px;background-position:-1863px 0}.iti-flag.gh{height:14px;background-position:-1885px 0}.iti-flag.gi{height:10px;background-position:-1907px 0}.iti-flag.gl{height:14px;background-position:-1929px 0}.iti-flag.gm{height:14px;background-position:-1951px 0}.iti-flag.gn{height:14px;background-position:-1973px 0}.iti-flag.gp{height:14px;background-position:-1995px 0}.iti-flag.gq{height:14px;background-position:-2017px 0}.iti-flag.gr{height:14px;background-position:-2039px 0}.iti-flag.gs{height:10px;background-position:-2061px 0}.iti-flag.gt{height:13px;background-position:-2083px 0}.iti-flag.gu{height:11px;background-position:-2105px 0}.iti-flag.gw{height:10px;background-position:-2127px 0}.iti-flag.gy{height:12px;background-position:-2149px 0}.iti-flag.hk{height:14px;background-position:-2171px 0}.iti-flag.hm{height:10px;background-position:-2193px 0}.iti-flag.hn{height:10px;background-position:-2215px 0}.iti-flag.hr{height:10px;background-position:-2237px 0}.iti-flag.ht{height:12px;background-position:-2259px 0}.iti-flag.hu{height:10px;background-position:-2281px 0}.iti-flag.ic{height:14px;background-position:-2303px 0}.iti-flag.id{height:14px;background-position:-2325px 0}.iti-flag.ie{height:10px;background-position:-2347px 0}.iti-flag.il{height:15px;background-position:-2369px 0}.iti-flag.im{height:10px;background-position:-2391px 0}.iti-flag.in{height:14px;background-position:-2413px 0}.iti-flag.io{height:10px;background-position:-2435px 0}.iti-flag.iq{height:14px;background-position:-2457px 0}.iti-flag.ir{height:12px;background-position:-2479px 0}.iti-flag.is{height:15px;background-position:-2501px 0}.iti-flag.it{height:14px;background-position:-2523px 0}.iti-flag.je{height:12px;background-position:-2545px 0}.iti-flag.jm{height:10px;background-position:-2567px 0}.iti-flag.jo{height:10px;background-position:-2589px 0}.iti-flag.jp{height:14px;background-position:-2611px 0}.iti-flag.ke{height:14px;background-position:-2633px 0}.iti-flag.kg{height:12px;background-position:-2655px 0}.iti-flag.kh{height:13px;background-position:-2677px 0}.iti-flag.ki{height:10px;background-position:-2699px 0}.iti-flag.km{height:12px;background-position:-2721px 0}.iti-flag.kn{height:14px;background-position:-2743px 0}.iti-flag.kp{height:10px;background-position:-2765px 0}.iti-flag.kr{height:14px;background-position:-2787px 0}.iti-flag.kw{height:10px;background-position:-2809px 0}.iti-flag.ky{height:10px;background-position:-2831px 0}.iti-flag.kz{height:10px;background-position:-2853px 0}.iti-flag.la{height:14px;background-position:-2875px 0}.iti-flag.lb{height:14px;background-position:-2897px 0}.iti-flag.lc{height:10px;background-position:-2919px 0}.iti-flag.li{height:12px;background-position:-2941px 0}.iti-flag.lk{height:10px;background-position:-2963px 0}.iti-flag.lr{height:11px;background-position:-2985px 0}.iti-flag.ls{height:14px;background-position:-3007px 0}.iti-flag.lt{height:12px;background-position:-3029px 0}.iti-flag.lu{height:12px;background-position:-3051px 0}.iti-flag.lv{height:10px;background-position:-3073px 0}.iti-flag.ly{height:10px;background-position:-3095px 0}.iti-flag.ma{height:14px;background-position:-3117px 0}.iti-flag.mc{height:15px;background-position:-3139px 0}.iti-flag.md{height:10px;background-position:-3160px 0}.iti-flag.me{height:10px;background-position:-3182px 0}.iti-flag.mf{height:14px;background-position:-3204px 0}.iti-flag.mg{height:14px;background-position:-3226px 0}.iti-flag.mh{height:11px;background-position:-3248px 0}.iti-flag.mk{height:10px;background-position:-3270px 0}.iti-flag.ml{height:14px;background-position:-3292px 0}.iti-flag.mm{height:14px;background-position:-3314px 0}.iti-flag.mn{height:10px;background-position:-3336px 0}.iti-flag.mo{height:14px;background-position:-3358px 0}.iti-flag.mp{height:10px;background-position:-3380px 0}.iti-flag.mq{height:14px;background-position:-3402px 0}.iti-flag.mr{height:14px;background-position:-3424px 0}.iti-flag.ms{height:10px;background-position:-3446px 0}.iti-flag.mt{height:14px;background-position:-3468px 0}.iti-flag.mu{height:14px;background-position:-3490px 0}.iti-flag.mv{height:14px;background-position:-3512px 0}.iti-flag.mw{height:14px;background-position:-3534px 0}.iti-flag.mx{height:12px;background-position:-3556px 0}.iti-flag.my{height:10px;background-position:-3578px 0}.iti-flag.mz{height:14px;background-position:-3600px 0}.iti-flag.na{height:14px;background-position:-3622px 0}.iti-flag.nc{height:10px;background-position:-3644px 0}.iti-flag.ne{height:15px;background-position:-3666px 0}.iti-flag.nf{height:10px;background-position:-3686px 0}.iti-flag.ng{height:10px;background-position:-3708px 0}.iti-flag.ni{height:12px;background-position:-3730px 0}.iti-flag.nl{height:14px;background-position:-3752px 0}.iti-flag.no{height:15px;background-position:-3774px 0}.iti-flag.np{height:15px;background-position:-3796px 0}.iti-flag.nr{height:10px;background-position:-3811px 0}.iti-flag.nu{height:10px;background-position:-3833px 0}.iti-flag.nz{height:10px;background-position:-3855px 0}.iti-flag.om{height:10px;background-position:-3877px 0}.iti-flag.pa{height:14px;background-position:-3899px 0}.iti-flag.pe{height:14px;background-position:-3921px 0}.iti-flag.pf{height:14px;background-position:-3943px 0}.iti-flag.pg{height:15px;background-position:-3965px 0}.iti-flag.ph{height:10px;background-position:-3987px 0}.iti-flag.pk{height:14px;background-position:-4009px 0}.iti-flag.pl{height:13px;background-position:-4031px 0}.iti-flag.pm{height:14px;background-position:-4053px 0}.iti-flag.pn{height:10px;background-position:-4075px 0}.iti-flag.pr{height:14px;background-position:-4097px 0}.iti-flag.ps{height:10px;background-position:-4119px 0}.iti-flag.pt{height:14px;background-position:-4141px 0}.iti-flag.pw{height:13px;background-position:-4163px 0}.iti-flag.py{height:11px;background-position:-4185px 0}.iti-flag.qa{height:8px;background-position:-4207px 0}.iti-flag.re{height:14px;background-position:-4229px 0}.iti-flag.ro{height:14px;background-position:-4251px 0}.iti-flag.rs{height:14px;background-position:-4273px 0}.iti-flag.ru{height:14px;background-position:-4295px 0}.iti-flag.rw{height:14px;background-position:-4317px 0}.iti-flag.sa{height:14px;background-position:-4339px 0}.iti-flag.sb{height:10px;background-position:-4361px 0}.iti-flag.sc{height:10px;background-position:-4383px 0}.iti-flag.sd{height:10px;background-position:-4405px 0}.iti-flag.se{height:13px;background-position:-4427px 0}.iti-flag.sg{height:14px;background-position:-4449px 0}.iti-flag.sh{height:10px;background-position:-4471px 0}.iti-flag.si{height:10px;background-position:-4493px 0}.iti-flag.sj{height:15px;background-position:-4515px 0}.iti-flag.sk{height:14px;background-position:-4537px 0}.iti-flag.sl{height:14px;background-position:-4559px 0}.iti-flag.sm{height:15px;background-position:-4581px 0}.iti-flag.sn{height:14px;background-position:-4603px 0}.iti-flag.so{height:14px;background-position:-4625px 0}.iti-flag.sr{height:14px;background-position:-4647px 0}.iti-flag.ss{height:10px;background-position:-4669px 0}.iti-flag.st{height:10px;background-position:-4691px 0}.iti-flag.sv{height:12px;background-position:-4713px 0}.iti-flag.sx{height:14px;background-position:-4735px 0}.iti-flag.sy{height:14px;background-position:-4757px 0}.iti-flag.sz{height:14px;background-position:-4779px 0}.iti-flag.ta{height:10px;background-position:-4801px 0}.iti-flag.tc{height:10px;background-position:-4823px 0}.iti-flag.td{height:14px;background-position:-4845px 0}.iti-flag.tf{height:14px;background-position:-4867px 0}.iti-flag.tg{height:13px;background-position:-4889px 0}.iti-flag.th{height:14px;background-position:-4911px 0}.iti-flag.tj{height:10px;background-position:-4933px 0}.iti-flag.tk{height:10px;background-position:-4955px 0}.iti-flag.tl{height:10px;background-position:-4977px 0}.iti-flag.tm{height:14px;background-position:-4999px 0}.iti-flag.tn{height:14px;background-position:-5021px 0}.iti-flag.to{height:10px;background-position:-5043px 0}.iti-flag.tr{height:14px;background-position:-5065px 0}.iti-flag.tt{height:12px;background-position:-5087px 0}.iti-flag.tv{height:10px;background-position:-5109px 0}.iti-flag.tw{height:14px;background-position:-5131px 0}.iti-flag.tz{height:14px;background-position:-5153px 0}.iti-flag.ua{height:14px;background-position:-5175px 0}.iti-flag.ug{height:14px;background-position:-5197px 0}.iti-flag.um{height:11px;background-position:-5219px 0}.iti-flag.us{height:11px;background-position:-5241px 0}.iti-flag.uy{height:14px;background-position:-5263px 0}.iti-flag.uz{height:10px;background-position:-5285px 0}.iti-flag.va{height:15px;background-position:-5307px 0}.iti-flag.vc{height:14px;background-position:-5324px 0}.iti-flag.ve{height:14px;background-position:-5346px 0}.iti-flag.vg{height:10px;background-position:-5368px 0}.iti-flag.vi{height:14px;background-position:-5390px 0}.iti-flag.vn{height:14px;background-position:-5412px 0}.iti-flag.vu{height:12px;background-position:-5434px 0}.iti-flag.wf{height:14px;background-position:-5456px 0}.iti-flag.ws{height:10px;background-position:-5478px 0}.iti-flag.xk{height:15px;background-position:-5500px 0}.iti-flag.ye{height:14px;background-position:-5522px 0}.iti-flag.yt{height:14px;background-position:-5544px 0}.iti-flag.za{height:14px;background-position:-5566px 0}.iti-flag.zm{height:14px;background-position:-5588px 0}.iti-flag.zw{height:10px;background-position:-5610px 0}.iti-flag{width:20px;height:15px;background-image:url(' +
        i(n(183)) +
        ");background-repeat:no-repeat;background-color:#dbdbdb;background-position:20px 0}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2),only screen and (min-resolution:2dppx),only screen and (min-resolution:192dpi){.iti-flag{background-image:url(" +
        i(n(183)) +
        ')}}.iti-flag.np{background-color:transparent}.bg-primary-after[data-v-46e105de]:after,.bg-primary-before[data-v-46e105de]:before,.bg-primary[data-v-46e105de]{background-color:#1e90ff}.bg-primary-after-transparency[data-v-46e105de]:after,.bg-primary-before-transparency[data-v-46e105de]:before,.bg-primary-transparency[data-v-46e105de]{background-color:rgba(30,144,255,.5)}.bg-secondary-after[data-v-46e105de]:after,.bg-secondary-before[data-v-46e105de]:before,.bg-secondary[data-v-46e105de]{background-color:#747474}.bg-secondary-after-transparency[data-v-46e105de]:after,.bg-secondary-before-transparency[data-v-46e105de]:before,.bg-secondary-transparency[data-v-46e105de]{background-color:hsla(0,0%,45.5%,.5)}.bg-third-after[data-v-46e105de]:after,.bg-third-before[data-v-46e105de]:before,.bg-third[data-v-46e105de]{background-color:#ccc}.bg-third-after-transparency[data-v-46e105de]:after,.bg-third-before-transparency[data-v-46e105de]:before,.bg-third-transparency[data-v-46e105de]{background-color:hsla(0,0%,80%,.5)}.bg-success-after[data-v-46e105de]:after,.bg-success-before[data-v-46e105de]:before,.bg-success[data-v-46e105de]{background-color:#9acd32}.bg-success-after-transparency[data-v-46e105de]:after,.bg-success-before-transparency[data-v-46e105de]:before,.bg-success-transparency[data-v-46e105de]{background-color:rgba(154,205,50,.5)}.bg-danger-after[data-v-46e105de]:after,.bg-danger-before[data-v-46e105de]:before,.bg-danger[data-v-46e105de]{background-color:#ff4500}.bg-danger-after-transparency[data-v-46e105de]:after,.bg-danger-before-transparency[data-v-46e105de]:before,.bg-danger-transparency[data-v-46e105de]{background-color:rgba(255,69,0,.5)}.bg-grey-after[data-v-46e105de]:after,.bg-grey-before[data-v-46e105de]:before,.bg-grey[data-v-46e105de]{background-color:#999}.bg-grey-after-transparency[data-v-46e105de]:after,.bg-grey-before-transparency[data-v-46e105de]:before,.bg-grey-transparency[data-v-46e105de]{background-color:hsla(0,0%,60%,.5)}.bg-info-after[data-v-46e105de]:after,.bg-info-before[data-v-46e105de]:before,.bg-info[data-v-46e105de]{background-color:#17a2b8}.bg-info-after-transparency[data-v-46e105de]:after,.bg-info-before-transparency[data-v-46e105de]:before,.bg-info-transparency[data-v-46e105de]{background-color:rgba(23,162,184,.5)}.bg-warning-after[data-v-46e105de]:after,.bg-warning-before[data-v-46e105de]:before,.bg-warning[data-v-46e105de]{background-color:#ffa300}.bg-warning-after-transparency[data-v-46e105de]:after,.bg-warning-before-transparency[data-v-46e105de]:before,.bg-warning-transparency[data-v-46e105de]{background-color:rgba(255,163,0,.5)}.bg-light-after[data-v-46e105de]:after,.bg-light-before[data-v-46e105de]:before,.bg-light[data-v-46e105de]{background-color:#f5f5f5}.bg-light-after-transparency[data-v-46e105de]:after,.bg-light-before-transparency[data-v-46e105de]:before,.bg-light-transparency[data-v-46e105de]{background-color:hsla(0,0%,96.1%,.5)}.bg-dark-after[data-v-46e105de]:after,.bg-dark-before[data-v-46e105de]:before,.bg-dark[data-v-46e105de]{background-color:#24292e}.bg-dark-after-transparency[data-v-46e105de]:after,.bg-dark-before-transparency[data-v-46e105de]:before,.bg-dark-transparency[data-v-46e105de]{background-color:rgba(36,41,46,.5)}.bg-default-after[data-v-46e105de]:after,.bg-default-before[data-v-46e105de]:before,.bg-default[data-v-46e105de]{background-color:#ccc}.bg-default-after-transparency[data-v-46e105de]:after,.bg-default-before-transparency[data-v-46e105de]:before,.bg-default-transparency[data-v-46e105de]{background-color:hsla(0,0%,80%,.5)}.bg-white-after[data-v-46e105de]:after,.bg-white-before[data-v-46e105de]:before,.bg-white[data-v-46e105de]{background-color:#fff}.bg-white-after-transparency[data-v-46e105de]:after,.bg-white-before-transparency[data-v-46e105de]:before,.bg-white-transparency[data-v-46e105de]{background-color:hsla(0,0%,100%,.5)}.bg-black-after[data-v-46e105de]:after,.bg-black-before[data-v-46e105de]:before,.bg-black[data-v-46e105de]{background-color:#000}.bg-black-after-transparency[data-v-46e105de]:after,.bg-black-before-transparency[data-v-46e105de]:before,.bg-black-transparency[data-v-46e105de]{background-color:rgba(0,0,0,.5)}.fill-primary path[data-v-46e105de]{fill:#1e90ff}.fill-secondary path[data-v-46e105de]{fill:#747474}.fill-third path[data-v-46e105de]{fill:#ccc}.fill-success path[data-v-46e105de]{fill:#9acd32}.fill-danger path[data-v-46e105de]{fill:#ff4500}.fill-grey path[data-v-46e105de]{fill:#999}.fill-info path[data-v-46e105de]{fill:#17a2b8}.fill-warning path[data-v-46e105de]{fill:#ffa300}.fill-light path[data-v-46e105de]{fill:#f5f5f5}.fill-dark path[data-v-46e105de]{fill:#24292e}.fill-default path[data-v-46e105de]{fill:#ccc}.fill-white path[data-v-46e105de]{fill:#fff}.fill-black path[data-v-46e105de]{fill:#000}.label[data-v-46e105de]{border-radius:2px;padding:2px 4px;color:#fff;font-size:.714em}.label-primary[data-v-46e105de],.label[data-v-46e105de]{background-color:#1e90ff}.label-primary-outline[data-v-46e105de]{background-color:transparent;border:1px solid #1e90ff;color:#1e90ff}.label-secondary[data-v-46e105de]{background-color:#747474}.label-secondary-outline[data-v-46e105de]{background-color:transparent;border:1px solid #747474;color:#747474}.label-third[data-v-46e105de]{background-color:#ccc}.label-third-outline[data-v-46e105de]{background-color:transparent;border:1px solid #ccc;color:#ccc}.label-success[data-v-46e105de]{background-color:#9acd32}.label-success-outline[data-v-46e105de]{background-color:transparent;border:1px solid #9acd32;color:#9acd32}.label-danger[data-v-46e105de]{background-color:#ff4500}.label-danger-outline[data-v-46e105de]{background-color:transparent;border:1px solid #ff4500;color:#ff4500}.label-grey[data-v-46e105de]{background-color:#999}.label-grey-outline[data-v-46e105de]{background-color:transparent;border:1px solid #999;color:#999}.label-info[data-v-46e105de]{background-color:#17a2b8}.label-info-outline[data-v-46e105de]{background-color:transparent;border:1px solid #17a2b8;color:#17a2b8}.label-warning[data-v-46e105de]{background-color:#ffa300}.label-warning-outline[data-v-46e105de]{background-color:transparent;border:1px solid #ffa300;color:#ffa300}.label-light[data-v-46e105de]{background-color:#f5f5f5}.label-light-outline[data-v-46e105de]{background-color:transparent;border:1px solid #f5f5f5;color:#f5f5f5}.label-dark[data-v-46e105de]{background-color:#24292e}.label-dark-outline[data-v-46e105de]{background-color:transparent;border:1px solid #24292e;color:#24292e}.label-default[data-v-46e105de]{background-color:#ccc}.label-default-outline[data-v-46e105de]{background-color:transparent;border:1px solid #ccc;color:#ccc}.label-white[data-v-46e105de]{background-color:#fff}.label-white-outline[data-v-46e105de]{background-color:transparent;border:1px solid #fff;color:#fff}.label-black[data-v-46e105de]{background-color:#000}.label-black-outline[data-v-46e105de]{background-color:transparent;border:1px solid #000;color:#000}.dot[data-v-46e105de]{width:6px;height:6px;border-radius:6px}.dot-primary[data-v-46e105de],.dot[data-v-46e105de]{background-color:#1e90ff}.dot-primary-outline[data-v-46e105de]{background-color:transparent;border:1px solid #1e90ff;color:#1e90ff}.dot-secondary[data-v-46e105de]{background-color:#747474}.dot-secondary-outline[data-v-46e105de]{background-color:transparent;border:1px solid #747474;color:#747474}.dot-third[data-v-46e105de]{background-color:#ccc}.dot-third-outline[data-v-46e105de]{background-color:transparent;border:1px solid #ccc;color:#ccc}.dot-success[data-v-46e105de]{background-color:#9acd32}.dot-success-outline[data-v-46e105de]{background-color:transparent;border:1px solid #9acd32;color:#9acd32}.dot-danger[data-v-46e105de]{background-color:#ff4500}.dot-danger-outline[data-v-46e105de]{background-color:transparent;border:1px solid #ff4500;color:#ff4500}.dot-grey[data-v-46e105de]{background-color:#999}.dot-grey-outline[data-v-46e105de]{background-color:transparent;border:1px solid #999;color:#999}.dot-info[data-v-46e105de]{background-color:#17a2b8}.dot-info-outline[data-v-46e105de]{background-color:transparent;border:1px solid #17a2b8;color:#17a2b8}.dot-warning[data-v-46e105de]{background-color:#ffa300}.dot-warning-outline[data-v-46e105de]{background-color:transparent;border:1px solid #ffa300;color:#ffa300}.dot-light[data-v-46e105de]{background-color:#f5f5f5}.dot-light-outline[data-v-46e105de]{background-color:transparent;border:1px solid #f5f5f5;color:#f5f5f5}.dot-dark[data-v-46e105de]{background-color:#24292e}.dot-dark-outline[data-v-46e105de]{background-color:transparent;border:1px solid #24292e;color:#24292e}.dot-default[data-v-46e105de]{background-color:#ccc}.dot-default-outline[data-v-46e105de]{background-color:transparent;border:1px solid #ccc;color:#ccc}.dot-white[data-v-46e105de]{background-color:#fff}.dot-white-outline[data-v-46e105de]{background-color:transparent;border:1px solid #fff;color:#fff}.dot-black[data-v-46e105de]{background-color:#000}.dot-black-outline[data-v-46e105de]{background-color:transparent;border:1px solid #000;color:#000}a[data-v-46e105de]{color:#1e90ff;text-decoration:none}a[data-v-46e105de]:focus,a[data-v-46e105de]:hover{text-decoration:underline}.btn[data-v-46e105de]{border:1px solid transparent;outline:none;cursor:pointer;-webkit-transition:all .25s cubic-bezier(.645,.045,.355,1);transition:all .25s cubic-bezier(.645,.045,.355,1);background-color:#1e90ff;color:#fff;display:inline-block;border-radius:8px;line-height:1;-webkit-box-sizing:border-box;box-sizing:border-box;padding:12px 20px;font-size:1em;font-weight:inherit;margin:0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:auto;overflow:visible;-webkit-font-smoothing:inherit;text-decoration:none;-moz-osx-font-smoothing:inherit}.btn[data-v-46e105de]:focus,.btn[data-v-46e105de]:hover{background-color:#0077ea}.btn.active[data-v-46e105de]{background-color:#1e90ff}.btn.active[data-v-46e105de],.btn[data-v-46e105de]:focus{-webkit-box-shadow:0 0 0 .143rem rgba(30,144,255,.5);box-shadow:0 0 0 .143rem rgba(30,144,255,.5)}.btn.active[data-v-46e105de],.btn[data-v-46e105de]:focus,.btn[data-v-46e105de]:hover{text-decoration:none}.btn--rounded[data-v-46e105de]{border-radius:50px}.btn--block[data-v-46e105de]{width:100%}.btn--lg[data-v-46e105de]{padding:16px 22px;font-size:1.143em}.btn--md[data-v-46e105de]{padding:10px 20px;font-size:1em}.btn--sm[data-v-46e105de]{padding:9px 15px;font-size:.857em}.btn--mini[data-v-46e105de]{padding:7px 15px;font-size:.857em}.btn--fab[data-v-46e105de]{border-radius:50%;padding:0;height:40px;width:40px}.btn--fab.btn--lg[data-v-46e105de]{height:50px;width:50px}.btn--fab.btn--md[data-v-46e105de]{height:36px;width:36px}.btn--fab.btn--sm[data-v-46e105de]{height:32px;width:32px}.btn--fab.btn--mini[data-v-46e105de]{height:28px;width:28px}.btn--light[data-v-46e105de],.btn--white[data-v-46e105de]{color:#747474}.btn--primary[data-v-46e105de]{background-color:#1e90ff}.btn--primary[data-v-46e105de]:focus,.btn--primary[data-v-46e105de]:hover{background-color:#0077ea}.btn--primary.active[data-v-46e105de]{background-color:#1e90ff}.btn--primary.active[data-v-46e105de],.btn--primary[data-v-46e105de]:focus{-webkit-box-shadow:0 0 0 .143rem rgba(30,144,255,.5);box-shadow:0 0 0 .143rem rgba(30,144,255,.5)}.btn--primary--outline[data-v-46e105de]{background-color:rgba(30,144,255,.05);border:1px solid #1e90ff;color:#1e90ff}.btn--primary--outline.active[data-v-46e105de],.btn--primary--outline[data-v-46e105de]:focus,.btn--primary--outline[data-v-46e105de]:hover{background-color:#1e90ff;color:#fff}.btn--primary--outline.active[data-v-46e105de],.btn--primary--outline[data-v-46e105de]:focus{-webkit-box-shadow:0 0 0 .143rem rgba(30,144,255,.5);box-shadow:0 0 0 .143rem rgba(30,144,255,.5)}.btn--secondary[data-v-46e105de]{background-color:#747474}.btn--secondary[data-v-46e105de]:focus,.btn--secondary[data-v-46e105de]:hover{background-color:#5b5b5b}.btn--secondary.active[data-v-46e105de]{background-color:#747474}.btn--secondary.active[data-v-46e105de],.btn--secondary[data-v-46e105de]:focus{-webkit-box-shadow:0 0 0 .143rem hsla(0,0%,45.5%,.5);box-shadow:0 0 0 .143rem hsla(0,0%,45.5%,.5)}.btn--secondary--outline[data-v-46e105de]{background-color:hsla(0,0%,45.5%,.05);border:1px solid #747474;color:#747474}.btn--secondary--outline.active[data-v-46e105de],.btn--secondary--outline[data-v-46e105de]:focus,.btn--secondary--outline[data-v-46e105de]:hover{background-color:#747474;color:#fff}.btn--secondary--outline.active[data-v-46e105de],.btn--secondary--outline[data-v-46e105de]:focus{-webkit-box-shadow:0 0 0 .143rem hsla(0,0%,45.5%,.5);box-shadow:0 0 0 .143rem hsla(0,0%,45.5%,.5)}.btn--third[data-v-46e105de]{background-color:#ccc}.btn--third[data-v-46e105de]:focus,.btn--third[data-v-46e105de]:hover{background-color:#b3b3b3}.btn--third.active[data-v-46e105de]{background-color:#ccc}.btn--third.active[data-v-46e105de],.btn--third[data-v-46e105de]:focus{-webkit-box-shadow:0 0 0 .143rem hsla(0,0%,80%,.5);box-shadow:0 0 0 .143rem hsla(0,0%,80%,.5)}.btn--third--outline[data-v-46e105de]{background-color:hsla(0,0%,80%,.05);border:1px solid #ccc;color:#ccc}.btn--third--outline.active[data-v-46e105de],.btn--third--outline[data-v-46e105de]:focus,.btn--third--outline[data-v-46e105de]:hover{background-color:#ccc;color:#fff}.btn--third--outline.active[data-v-46e105de],.btn--third--outline[data-v-46e105de]:focus{-webkit-box-shadow:0 0 0 .143rem hsla(0,0%,80%,.5);box-shadow:0 0 0 .143rem hsla(0,0%,80%,.5)}.btn--success[data-v-46e105de]{background-color:#9acd32}.btn--success[data-v-46e105de]:focus,.btn--success[data-v-46e105de]:hover{background-color:#7ba428}.btn--success.active[data-v-46e105de]{background-color:#9acd32}.btn--success.active[data-v-46e105de],.btn--success[data-v-46e105de]:focus{-webkit-box-shadow:0 0 0 .143rem rgba(154,205,50,.5);box-shadow:0 0 0 .143rem rgba(154,205,50,.5)}.btn--success--outline[data-v-46e105de]{background-color:rgba(154,205,50,.05);border:1px solid #9acd32;color:#9acd32}.btn--success--outline.active[data-v-46e105de],.btn--success--outline[data-v-46e105de]:focus,.btn--success--outline[data-v-46e105de]:hover{background-color:#9acd32;color:#fff}.btn--success--outline.active[data-v-46e105de],.btn--success--outline[data-v-46e105de]:focus{-webkit-box-shadow:0 0 0 .143rem rgba(154,205,50,.5);box-shadow:0 0 0 .143rem rgba(154,205,50,.5)}.btn--danger[data-v-46e105de]{background-color:#ff4500}.btn--danger[data-v-46e105de]:focus,.btn--danger[data-v-46e105de]:hover{background-color:#cc3700}.btn--danger.active[data-v-46e105de]{background-color:#ff4500}.btn--danger.active[data-v-46e105de],.btn--danger[data-v-46e105de]:focus{-webkit-box-shadow:0 0 0 .143rem rgba(255,69,0,.5);box-shadow:0 0 0 .143rem rgba(255,69,0,.5)}.btn--danger--outline[data-v-46e105de]{background-color:rgba(255,69,0,.05);border:1px solid #ff4500;color:#ff4500}.btn--danger--outline.active[data-v-46e105de],.btn--danger--outline[data-v-46e105de]:focus,.btn--danger--outline[data-v-46e105de]:hover{background-color:#ff4500;color:#fff}.btn--danger--outline.active[data-v-46e105de],.btn--danger--outline[data-v-46e105de]:focus{-webkit-box-shadow:0 0 0 .143rem rgba(255,69,0,.5);box-shadow:0 0 0 .143rem rgba(255,69,0,.5)}.btn--grey[data-v-46e105de]{background-color:#999}.btn--grey[data-v-46e105de]:focus,.btn--grey[data-v-46e105de]:hover{background-color:grey}.btn--grey.active[data-v-46e105de]{background-color:#999}.btn--grey.active[data-v-46e105de],.btn--grey[data-v-46e105de]:focus{-webkit-box-shadow:0 0 0 .143rem hsla(0,0%,60%,.5);box-shadow:0 0 0 .143rem hsla(0,0%,60%,.5)}.btn--grey--outline[data-v-46e105de]{background-color:hsla(0,0%,60%,.05);border:1px solid #999;color:#999}.btn--grey--outline.active[data-v-46e105de],.btn--grey--outline[data-v-46e105de]:focus,.btn--grey--outline[data-v-46e105de]:hover{background-color:#999;color:#fff}.btn--grey--outline.active[data-v-46e105de],.btn--grey--outline[data-v-46e105de]:focus{-webkit-box-shadow:0 0 0 .143rem hsla(0,0%,60%,.5);box-shadow:0 0 0 .143rem hsla(0,0%,60%,.5)}.btn--info[data-v-46e105de]{background-color:#17a2b8}.btn--info[data-v-46e105de]:focus,.btn--info[data-v-46e105de]:hover{background-color:#117a8b}.btn--info.active[data-v-46e105de]{background-color:#17a2b8}.btn--info.active[data-v-46e105de],.btn--info[data-v-46e105de]:focus{-webkit-box-shadow:0 0 0 .143rem rgba(23,162,184,.5);box-shadow:0 0 0 .143rem rgba(23,162,184,.5)}.btn--info--outline[data-v-46e105de]{background-color:rgba(23,162,184,.05);border:1px solid #17a2b8;color:#17a2b8}.btn--info--outline.active[data-v-46e105de],.btn--info--outline[data-v-46e105de]:focus,.btn--info--outline[data-v-46e105de]:hover{background-color:#17a2b8;color:#fff}.btn--info--outline.active[data-v-46e105de],.btn--info--outline[data-v-46e105de]:focus{-webkit-box-shadow:0 0 0 .143rem rgba(23,162,184,.5);box-shadow:0 0 0 .143rem rgba(23,162,184,.5)}.btn--warning[data-v-46e105de]{background-color:#ffa300}.btn--warning[data-v-46e105de]:focus,.btn--warning[data-v-46e105de]:hover{background-color:#cc8200}.btn--warning.active[data-v-46e105de]{background-color:#ffa300}.btn--warning.active[data-v-46e105de],.btn--warning[data-v-46e105de]:focus{-webkit-box-shadow:0 0 0 .143rem rgba(255,163,0,.5);box-shadow:0 0 0 .143rem rgba(255,163,0,.5)}.btn--warning--outline[data-v-46e105de]{background-color:rgba(255,163,0,.05);border:1px solid #ffa300;color:#ffa300}.btn--warning--outline.active[data-v-46e105de],.btn--warning--outline[data-v-46e105de]:focus,.btn--warning--outline[data-v-46e105de]:hover{background-color:#ffa300;color:#fff}.btn--warning--outline.active[data-v-46e105de],.btn--warning--outline[data-v-46e105de]:focus{-webkit-box-shadow:0 0 0 .143rem rgba(255,163,0,.5);box-shadow:0 0 0 .143rem rgba(255,163,0,.5)}.btn--light[data-v-46e105de]{background-color:#f5f5f5}.btn--light[data-v-46e105de]:focus,.btn--light[data-v-46e105de]:hover{background-color:#dcdcdc}.btn--light.active[data-v-46e105de]{background-color:#f5f5f5}.btn--light.active[data-v-46e105de],.btn--light[data-v-46e105de]:focus{-webkit-box-shadow:0 0 0 .143rem hsla(0,0%,96.1%,.5);box-shadow:0 0 0 .143rem hsla(0,0%,96.1%,.5)}.btn--light--outline[data-v-46e105de]{background-color:hsla(0,0%,96.1%,.05);border:1px solid #f5f5f5;color:#f5f5f5}.btn--light--outline.active[data-v-46e105de],.btn--light--outline[data-v-46e105de]:focus,.btn--light--outline[data-v-46e105de]:hover{background-color:#f5f5f5;color:#fff}.btn--light--outline.active[data-v-46e105de],.btn--light--outline[data-v-46e105de]:focus{-webkit-box-shadow:0 0 0 .143rem hsla(0,0%,96.1%,.5);box-shadow:0 0 0 .143rem hsla(0,0%,96.1%,.5)}.btn--dark[data-v-46e105de]{background-color:#24292e}.btn--dark[data-v-46e105de]:focus,.btn--dark[data-v-46e105de]:hover{background-color:#0e1011}.btn--dark.active[data-v-46e105de]{background-color:#24292e}.btn--dark.active[data-v-46e105de],.btn--dark[data-v-46e105de]:focus{-webkit-box-shadow:0 0 0 .143rem rgba(36,41,46,.5);box-shadow:0 0 0 .143rem rgba(36,41,46,.5)}.btn--dark--outline[data-v-46e105de]{background-color:rgba(36,41,46,.05);border:1px solid #24292e;color:#24292e}.btn--dark--outline.active[data-v-46e105de],.btn--dark--outline[data-v-46e105de]:focus,.btn--dark--outline[data-v-46e105de]:hover{background-color:#24292e;color:#fff}.btn--dark--outline.active[data-v-46e105de],.btn--dark--outline[data-v-46e105de]:focus{-webkit-box-shadow:0 0 0 .143rem rgba(36,41,46,.5);box-shadow:0 0 0 .143rem rgba(36,41,46,.5)}.btn--default[data-v-46e105de]{background-color:#ccc}.btn--default[data-v-46e105de]:focus,.btn--default[data-v-46e105de]:hover{background-color:#b3b3b3}.btn--default.active[data-v-46e105de]{background-color:#ccc}.btn--default.active[data-v-46e105de],.btn--default[data-v-46e105de]:focus{-webkit-box-shadow:0 0 0 .143rem hsla(0,0%,80%,.5);box-shadow:0 0 0 .143rem hsla(0,0%,80%,.5)}.btn--default--outline[data-v-46e105de]{background-color:hsla(0,0%,80%,.05);border:1px solid #ccc;color:#ccc}.btn--default--outline.active[data-v-46e105de],.btn--default--outline[data-v-46e105de]:focus,.btn--default--outline[data-v-46e105de]:hover{background-color:#ccc;color:#fff}.btn--default--outline.active[data-v-46e105de],.btn--default--outline[data-v-46e105de]:focus{-webkit-box-shadow:0 0 0 .143rem hsla(0,0%,80%,.5);box-shadow:0 0 0 .143rem hsla(0,0%,80%,.5)}.btn--white[data-v-46e105de]{background-color:#fff}.btn--white[data-v-46e105de]:focus,.btn--white[data-v-46e105de]:hover{background-color:#e6e6e6}.btn--white.active[data-v-46e105de]{background-color:#fff}.btn--white.active[data-v-46e105de],.btn--white[data-v-46e105de]:focus{-webkit-box-shadow:0 0 0 .143rem hsla(0,0%,100%,.5);box-shadow:0 0 0 .143rem hsla(0,0%,100%,.5)}.btn--white--outline[data-v-46e105de]{background-color:hsla(0,0%,100%,.05);border:1px solid #fff;color:#fff}.btn--white--outline.active[data-v-46e105de],.btn--white--outline[data-v-46e105de]:focus,.btn--white--outline[data-v-46e105de]:hover{background-color:#fff;color:#fff}.btn--white--outline.active[data-v-46e105de],.btn--white--outline[data-v-46e105de]:focus{-webkit-box-shadow:0 0 0 .143rem hsla(0,0%,100%,.5);box-shadow:0 0 0 .143rem hsla(0,0%,100%,.5)}.btn--black.active[data-v-46e105de],.btn--black[data-v-46e105de],.btn--black[data-v-46e105de]:focus,.btn--black[data-v-46e105de]:hover{background-color:#000}.btn--black.active[data-v-46e105de],.btn--black[data-v-46e105de]:focus{-webkit-box-shadow:0 0 0 .143rem rgba(0,0,0,.5);box-shadow:0 0 0 .143rem rgba(0,0,0,.5)}.btn--black--outline[data-v-46e105de]{background-color:rgba(0,0,0,.05);border:1px solid #000;color:#000}.btn--black--outline.active[data-v-46e105de],.btn--black--outline[data-v-46e105de]:focus,.btn--black--outline[data-v-46e105de]:hover{background-color:#000;color:#fff}.btn--black--outline.active[data-v-46e105de],.btn--black--outline[data-v-46e105de]:focus{-webkit-box-shadow:0 0 0 .143rem rgba(0,0,0,.5);box-shadow:0 0 0 .143rem rgba(0,0,0,.5)}.btn--default--outline[data-v-46e105de]{color:#747474}.btn--disabled[data-v-46e105de]:disabled{-webkit-box-shadow:none;box-shadow:none;background-color:#ccc;border:1px solid #ccc;color:#fff;cursor:not-allowed}.badge[data-v-46e105de]{background:#999;height:22px;line-height:22px;border-radius:22px;padding:0 5px;font-size:.857em;color:#888;font-weight:500}.badge-primary[data-v-46e105de]{background-color:#1e90ff;color:#fff}.badge-secondary[data-v-46e105de]{background-color:#747474;color:#fff}.badge-third[data-v-46e105de]{background-color:#ccc;color:#fff}.badge-success[data-v-46e105de]{background-color:#9acd32;color:#fff}.badge-danger[data-v-46e105de]{background-color:#ff4500;color:#fff}.badge-grey[data-v-46e105de]{background-color:#999;color:#fff}.badge-info[data-v-46e105de]{background-color:#17a2b8;color:#fff}.badge-warning[data-v-46e105de]{background-color:#ffa300;color:#fff}.badge-light[data-v-46e105de]{background-color:#f5f5f5;color:#fff}.badge-dark[data-v-46e105de]{background-color:#24292e;color:#fff}.badge-default[data-v-46e105de]{background-color:#ccc;color:#fff}.badge-white[data-v-46e105de]{background-color:#fff;color:#fff}.badge-black[data-v-46e105de]{background-color:#000;color:#fff}table.md[data-v-46e105de]{border-spacing:0;border-radius:8px;border-collapse:collapse;width:100%;table-layout:fixed;overflow-wrap:break-word;overflow:hidden;word-break:break-all;margin-top:0;margin-bottom:16px;font-size:1em;-webkit-box-shadow:0 0 8px rgba(0,0,0,.2);box-shadow:0 0 8px rgba(0,0,0,.2)}table.md tr[data-v-46e105de]{background-color:#fff;width:100%}table.md tr td[data-v-46e105de],table.md tr th[data-v-46e105de]{padding:6px 13px;text-align:left}table.md tr[data-v-46e105de]:nth-child(2n){background-color:#f2f2f2}.is-dark table.md[data-v-46e105de]{color:#f2f2f2}.is-dark table.md tr[data-v-46e105de]{background-color:#21222e}.is-dark table.md tr[data-v-46e105de]:nth-child(2n){background-color:#2e2f40}.is-dark table.md tr td.text-muted[data-v-46e105de]{color:hsla(0,0%,100%,.3)}.slide-enter-active[data-v-46e105de],.slide-leave-active[data-v-46e105de]{opacity:1;z-index:998;-webkit-transition:all .3s;transition:all .3s;-webkit-transform:translateY(0);transform:translateY(0)}.slide-enter[data-v-46e105de],.slide-leave-to[data-v-46e105de]{opacity:0;z-index:998;-webkit-transform:translateY(-20px);transform:translateY(-20px)}.tags-enter-active[data-v-46e105de],.tags-leave-active[data-v-46e105de]{opacity:1;-webkit-transition:all .3s;transition:all .3s;position:absolute;-webkit-transform:translateY(0);transform:translateY(0)}.tags-enter[data-v-46e105de],.tags-leave-to[data-v-46e105de]{opacity:0;-webkit-transform:translateX(-100%);transform:translateX(-100%)}.slideinvert-enter-active[data-v-46e105de],.slideinvert-leave-active[data-v-46e105de]{opacity:1;z-index:998;-webkit-transition:all .3s;transition:all .3s;-webkit-transform:translateY(0);transform:translateY(0)}.slideinvert-enter[data-v-46e105de],.slideinvert-leave-to[data-v-46e105de]{opacity:0;z-index:998;-webkit-transform:translateY(40px);transform:translateY(40px)}.slidenext-enter-active[data-v-46e105de],.slidenext-leave-active[data-v-46e105de],.slideprev-enter-active[data-v-46e105de],.slideprev-leave-active[data-v-46e105de]{position:absolute;-webkit-transition:all .3s;transition:all .3s}.slidenext-enter[data-v-46e105de],.slideprev-leave-to[data-v-46e105de]{-webkit-transform:translateX(100%);transform:translateX(100%)}.slidenext-leave-to[data-v-46e105de],.slideprev-enter[data-v-46e105de]{-webkit-transform:translateX(-100%);transform:translateX(-100%)}.slidevnext-enter-active[data-v-46e105de],.slidevnext-leave-active[data-v-46e105de],.slidevprev-enter-active[data-v-46e105de],.slidevprev-leave-active[data-v-46e105de]{position:absolute;-webkit-transition:all .3s;transition:all .3s}.slidevnext-enter[data-v-46e105de],.slidevprev-leave-to[data-v-46e105de]{-webkit-transform:translateY(100%);transform:translateY(100%);opacity:0}.slidevnext-leave-to[data-v-46e105de],.slidevprev-enter[data-v-46e105de]{-webkit-transform:translateY(-100%);transform:translateY(-100%);opacity:0}@media screen and (max-width:415px){.slide-enter-active[data-v-46e105de],.slide-leave-active[data-v-46e105de],.slideinvert-enter-active[data-v-46e105de],.slideinvert-leave-active[data-v-46e105de]{-webkit-transition:all 0s;transition:all 0s}}.spinner-anim[data-v-46e105de]{-webkit-animation:spin-data-v-46e105de .6s linear infinite;animation:spin-data-v-46e105de .6s linear infinite}@-webkit-keyframes spin-data-v-46e105de{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes spin-data-v-46e105de{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.dialog-fade-enter-active .dialog-animation[data-v-46e105de]{-webkit-animation:dialog-fade-in-data-v-46e105de .4s;animation:dialog-fade-in-data-v-46e105de .4s}.dialog-fade-leave-active .dialog-animation[data-v-46e105de]{-webkit-animation:dialog-fade-out-data-v-46e105de .4s;animation:dialog-fade-out-data-v-46e105de .4s}@-webkit-keyframes dialog-fade-in-data-v-46e105de{0%{-webkit-transform:translate3d(0,-30px,0);transform:translate3d(0,-30px,0);opacity:0}to{-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1}}@keyframes dialog-fade-in-data-v-46e105de{0%{-webkit-transform:translate3d(0,-30px,0);transform:translate3d(0,-30px,0);opacity:0}to{-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1}}@-webkit-keyframes dialog-fade-out-data-v-46e105de{0%{-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1}to{-webkit-transform:translate3d(0,-30px,0);transform:translate3d(0,-30px,0);opacity:0}}@keyframes dialog-fade-out-data-v-46e105de{0%{-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1}to{-webkit-transform:translate3d(0,-30px,0);transform:translate3d(0,-30px,0);opacity:0}}.expand-enter-active[data-v-46e105de],.expand-leave-active[data-v-46e105de]{-webkit-transition:.3s ease-in-out;transition:.3s ease-in-out;-webkit-transition-property:opacity,height;transition-property:opacity,height;overflow:hidden}.expand-enter[data-v-46e105de],.expand-leave-to[data-v-46e105de]{height:0;opacity:0}.scale-enter-active[data-v-46e105de],.scale-leave-active[data-v-46e105de]{opacity:1;z-index:1;-webkit-transition:all .3s cubic-bezier(.4,.52,.26,.9);transition:all .3s cubic-bezier(.4,.52,.26,.9)}.scale-enter[data-v-46e105de],.scale-leave-to[data-v-46e105de]{opacity:.4;z-index:1;-webkit-transform:scale(0);transform:scale(0)}@-webkit-keyframes loading-data-v-46e105de{0%{left:-200px;width:30%}50%{width:30%}70%{width:70%}80%{left:50%}95%{left:120%}to{left:100%}}@keyframes loading-data-v-46e105de{0%{left:-200px;width:30%}50%{width:30%}70%{width:70%}80%{left:50%}95%{left:120%}to{left:100%}}.flip-list-move[data-v-46e105de]{-webkit-transition:-webkit-transform .6s;transition:-webkit-transform .6s;transition:transform .6s;transition:transform .6s,-webkit-transform .6s}.over-hid[data-v-46e105de]{overflow:hidden}.pos-r[data-v-46e105de]{position:relative}.pos-a[data-v-46e105de]{position:absolute}.flex[data-v-46e105de]{display:-webkit-box;display:-ms-flexbox;display:flex}.flex.fluid[data-v-46e105de]{width:100%}.flex.direction-column[data-v-46e105de]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.flex.direction-column-reverse[data-v-46e105de]{-webkit-box-orient:vertical;-webkit-box-direction:reverse;-ms-flex-direction:column-reverse;flex-direction:column-reverse}.flex.direction-row[data-v-46e105de]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.flex.direction-row-reverse[data-v-46e105de]{-webkit-box-orient:horizontal;-webkit-box-direction:reverse;-ms-flex-direction:row-reverse;flex-direction:row-reverse}.flex.align-center[data-v-46e105de]{-webkit-box-align:center;-ms-flex-align:center;align-items:center}.flex.align-start[data-v-46e105de]{-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start}.flex.align-end[data-v-46e105de]{-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end}.flex.justify-start[data-v-46e105de]{-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}.flex.justify-end[data-v-46e105de]{-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}.flex.justify-center[data-v-46e105de]{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.flex.space-between[data-v-46e105de]{-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.flex.space-around[data-v-46e105de]{-ms-flex-pack:distribute;justify-content:space-around}.flex.flex-center[data-v-46e105de]{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.flex.flex--wrap[data-v-46e105de]{-ms-flex-wrap:wrap;flex-wrap:wrap}.flex.flex--grow[data-v-46e105de]{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1}.flex-fill[data-v-46e105de]{-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto}.flex-fixed[data-v-46e105de]{-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto}.flex-1[data-v-46e105de]{-webkit-box-flex:1;-ms-flex:1;flex:1}.flex-100[data-v-46e105de]{-webkit-box-flex:0;-ms-flex:0 1 100%;flex:0 1 100%}.flex-75[data-v-46e105de]{-webkit-box-flex:0;-ms-flex:0 1 75%;flex:0 1 75%}.flex-50[data-v-46e105de]{-webkit-box-flex:0;-ms-flex:0 1 50%;flex:0 1 50%}.flex-33[data-v-46e105de]{-webkit-box-flex:0;-ms-flex:0 1 33.33%;flex:0 1 33.33%}.flex-25[data-v-46e105de]{-webkit-box-flex:0;-ms-flex:0 1 25%;flex:0 1 25%}.flex-20[data-v-46e105de]{-webkit-box-flex:0;-ms-flex:0 1 20%;flex:0 1 20%}.flex-16[data-v-46e105de]{-webkit-box-flex:0;-ms-flex:0 1 16.66%;flex:0 1 16.66%}.text-muted-white[data-v-46e105de]{color:hsla(0,0%,100%,.54)}.text-muted[data-v-46e105de]{color:rgba(0,0,0,.54)}.is-dark .text-muted[data-v-46e105de]{color:hsla(0,0%,100%,.54)}.text-strong[data-v-46e105de]{font-weight:500}.text-center[data-v-46e105de]{text-align:center}.text-left[data-v-46e105de]{text-align:left}.text-right[data-v-46e105de]{text-align:right}.text-primary[data-v-46e105de]{color:#1e90ff}.text-secondary[data-v-46e105de]{color:#747474}.text-third[data-v-46e105de]{color:#ccc}.text-success[data-v-46e105de]{color:#9acd32}.text-danger[data-v-46e105de]{color:#ff4500}.text-grey[data-v-46e105de]{color:#999}.text-info[data-v-46e105de]{color:#17a2b8}.text-warning[data-v-46e105de]{color:#ffa300}.text-light[data-v-46e105de]{color:#f5f5f5}.text-dark[data-v-46e105de]{color:#24292e}.text-default[data-v-46e105de]{color:#ccc}.text-white[data-v-46e105de]{color:#fff}.text-black[data-v-46e105de]{color:#000}.dots-text[data-v-46e105de]{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.dots-text-3[data-v-46e105de]{overflow:hidden;position:relative;line-height:1.3em;max-height:3.9em;text-align:justify;margin-right:-1em;padding-right:1em}.dots-text-3[data-v-46e105de]:before{content:"...";position:absolute;right:3px;bottom:2px}.dots-text-3[data-v-46e105de]:after{content:"";position:absolute;right:0;width:1em;height:1em;margin-top:.2em;background:#fff}.dots-text-2[data-v-46e105de]{overflow:hidden;position:relative;line-height:1.3em;max-height:2.6em;text-align:justify;margin-right:-1em;padding-right:1em}.dots-text-2[data-v-46e105de]:before{content:"...";position:absolute;right:3px;bottom:2px}.dots-text-2[data-v-46e105de]:after{content:"";position:absolute;right:0;width:1em;height:1em;margin-top:.2em;background:#fff}.container[data-v-46e105de]{width:100%;padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto}@media(max-width:768px){.container[data-v-46e105de]{max-width:100%}}@media(min-width:768px){.container[data-v-46e105de]{max-width:768px}}@media(min-width:1024px){.container[data-v-46e105de]{max-width:1024px}}@media(min-width:1440px){.container[data-v-46e105de]{max-width:1440px}}@media(min-width:2560px){.container[data-v-46e105de]{max-width:2560px}}.pr-0[data-v-46e105de]{padding-right:0}.pt-0[data-v-46e105de]{padding-top:0}.pb-0[data-v-46e105de]{padding-bottom:0}.pl-0[data-v-46e105de]{padding-left:0}.px-0[data-v-46e105de]{padding-left:0;padding-right:0}.py-0[data-v-46e105de]{padding-top:0;padding-bottom:0}.p-0[data-v-46e105de]{padding:0}.pr-1[data-v-46e105de]{padding-right:.25rem}.pt-1[data-v-46e105de]{padding-top:.25rem}.pb-1[data-v-46e105de]{padding-bottom:.25rem}.pl-1[data-v-46e105de]{padding-left:.25rem}.px-1[data-v-46e105de]{padding-left:.25rem;padding-right:.25rem}.py-1[data-v-46e105de]{padding-top:.25rem;padding-bottom:.25rem}.p-1[data-v-46e105de]{padding:.25rem}.pr-2[data-v-46e105de]{padding-right:.5rem}.pt-2[data-v-46e105de]{padding-top:.5rem}.pb-2[data-v-46e105de]{padding-bottom:.5rem}.pl-2[data-v-46e105de]{padding-left:.5rem}.px-2[data-v-46e105de]{padding-left:.5rem;padding-right:.5rem}.py-2[data-v-46e105de]{padding-top:.5rem;padding-bottom:.5rem}.p-2[data-v-46e105de]{padding:.5rem}.pr-3[data-v-46e105de]{padding-right:1rem}.pt-3[data-v-46e105de]{padding-top:1rem}.pb-3[data-v-46e105de]{padding-bottom:1rem}.pl-3[data-v-46e105de]{padding-left:1rem}.px-3[data-v-46e105de]{padding-left:1rem;padding-right:1rem}.py-3[data-v-46e105de]{padding-top:1rem;padding-bottom:1rem}.p-3[data-v-46e105de]{padding:1rem}.pr-4[data-v-46e105de]{padding-right:1.5rem}.pt-4[data-v-46e105de]{padding-top:1.5rem}.pb-4[data-v-46e105de]{padding-bottom:1.5rem}.pl-4[data-v-46e105de]{padding-left:1.5rem}.px-4[data-v-46e105de]{padding-left:1.5rem;padding-right:1.5rem}.py-4[data-v-46e105de]{padding-top:1.5rem;padding-bottom:1.5rem}.p-4[data-v-46e105de]{padding:1.5rem}.pr-5[data-v-46e105de]{padding-right:3rem}.pt-5[data-v-46e105de]{padding-top:3rem}.pb-5[data-v-46e105de]{padding-bottom:3rem}.pl-5[data-v-46e105de]{padding-left:3rem}.px-5[data-v-46e105de]{padding-left:3rem;padding-right:3rem}.py-5[data-v-46e105de]{padding-top:3rem;padding-bottom:3rem}.p-5[data-v-46e105de]{padding:3rem}.mr-0[data-v-46e105de]{margin-right:0}.mt-0[data-v-46e105de]{margin-top:0}.mb-0[data-v-46e105de]{margin-bottom:0}.ml-0[data-v-46e105de]{margin-left:0}.mx-0[data-v-46e105de]{margin-left:0;margin-right:0}.my-0[data-v-46e105de]{margin-top:0;margin-bottom:0}.m-0[data-v-46e105de]{margin:0}.mr-1[data-v-46e105de]{margin-right:.25rem}.mt-1[data-v-46e105de]{margin-top:.25rem}.mb-1[data-v-46e105de]{margin-bottom:.25rem}.ml-1[data-v-46e105de]{margin-left:.25rem}.mx-1[data-v-46e105de]{margin-left:.25rem;margin-right:.25rem}.my-1[data-v-46e105de]{margin-top:.25rem;margin-bottom:.25rem}.m-1[data-v-46e105de]{margin:.25rem}.mr-2[data-v-46e105de]{margin-right:.5rem}.mt-2[data-v-46e105de]{margin-top:.5rem}.mb-2[data-v-46e105de]{margin-bottom:.5rem}.ml-2[data-v-46e105de]{margin-left:.5rem}.mx-2[data-v-46e105de]{margin-left:.5rem;margin-right:.5rem}.my-2[data-v-46e105de]{margin-top:.5rem;margin-bottom:.5rem}.m-2[data-v-46e105de]{margin:.5rem}.mr-3[data-v-46e105de]{margin-right:1rem}.mt-3[data-v-46e105de]{margin-top:1rem}.mb-3[data-v-46e105de]{margin-bottom:1rem}.ml-3[data-v-46e105de]{margin-left:1rem}.mx-3[data-v-46e105de]{margin-left:1rem;margin-right:1rem}.my-3[data-v-46e105de]{margin-top:1rem;margin-bottom:1rem}.m-3[data-v-46e105de]{margin:1rem}.mr-4[data-v-46e105de]{margin-right:1.5rem}.mt-4[data-v-46e105de]{margin-top:1.5rem}.mb-4[data-v-46e105de]{margin-bottom:1.5rem}.ml-4[data-v-46e105de]{margin-left:1.5rem}.mx-4[data-v-46e105de]{margin-left:1.5rem;margin-right:1.5rem}.my-4[data-v-46e105de]{margin-top:1.5rem;margin-bottom:1.5rem}.m-4[data-v-46e105de]{margin:1.5rem}.mr-5[data-v-46e105de]{margin-right:3rem}.mt-5[data-v-46e105de]{margin-top:3rem}.mb-5[data-v-46e105de]{margin-bottom:3rem}.ml-5[data-v-46e105de]{margin-left:3rem}.mx-5[data-v-46e105de]{margin-left:3rem;margin-right:3rem}.my-5[data-v-46e105de]{margin-top:3rem;margin-bottom:3rem}.m-5[data-v-46e105de]{margin:3rem}.h-100[data-v-46e105de]{height:100%}.mh-100[data-v-46e105de]{max-height:100%}.w-100[data-v-46e105de]{width:100%}.mw-100[data-v-46e105de]{max-width:100%}.m-h-0[data-v-46e105de]{min-height:0}.m-h-100[data-v-46e105de]{min-height:100%}.m-w-0[data-v-46e105de]{min-width:0}.m-w-100[data-v-46e105de]{min-width:100%}.br-0[data-v-46e105de]{border-radius:0}.brt-0[data-v-46e105de]{border-top-left-radius:0;border-top-right-radius:0}.brb-0[data-v-46e105de]{border-bottom-right-radius:0;border-bottom-left-radius:0}.br-2[data-v-46e105de]{border-radius:2px}.brt-2[data-v-46e105de]{border-top-left-radius:2px;border-top-right-radius:2px}.brb-2[data-v-46e105de]{border-bottom-right-radius:2px;border-bottom-left-radius:2px}.br-4[data-v-46e105de]{border-radius:4px}.brt-4[data-v-46e105de]{border-top-left-radius:4px;border-top-right-radius:4px}.brb-4[data-v-46e105de]{border-bottom-right-radius:4px;border-bottom-left-radius:4px}.br-8[data-v-46e105de]{border-radius:8px}.brt-8[data-v-46e105de]{border-top-left-radius:8px;border-top-right-radius:8px}.brb-8[data-v-46e105de]{border-bottom-right-radius:8px;border-bottom-left-radius:8px}.fs-12[data-v-46e105de]{font-size:12px}.fs-14[data-v-46e105de]{font-size:14px}.fs-16[data-v-46e105de]{font-size:16px}.fs-18[data-v-46e105de]{font-size:18px}.fs-20[data-v-46e105de]{font-size:20px}.fs-22[data-v-46e105de]{font-size:22px}.fs-26[data-v-46e105de]{font-size:26px}.fw-300[data-v-46e105de]{font-weight:300}.fw-400[data-v-46e105de]{font-weight:400}.fw-500[data-v-46e105de]{font-weight:500}@media only screen and (max-width:2560px){.hidden-4k[data-v-46e105de]{display:none}}@media only screen and (max-width:1440px){.hidden-laptop[data-v-46e105de]{display:none}}@media only screen and (max-width:1024px){.hidden-laptop-s[data-v-46e105de]{display:none}}@media only screen and (max-width:768px){.hidden-tablet[data-v-46e105de]{display:none}}@media only screen and (max-width:425px){.hidden-mobile[data-v-46e105de]{display:none}}@media only screen and (max-width:375px){.hidden-mobile-m[data-v-46e105de]{display:none}}@media only screen and (max-width:320px){.hidden-mobile-s[data-v-46e105de]{display:none}}.show-4k[data-v-46e105de]{display:none}@media only screen and (max-width:2560px){.show-4k[data-v-46e105de]{display:inherit}}.show-laptop[data-v-46e105de]{display:none}@media only screen and (max-width:1440px){.show-laptop[data-v-46e105de]{display:inherit}}.show-laptop-s[data-v-46e105de]{display:none}@media only screen and (max-width:1024px){.show-laptop-s[data-v-46e105de]{display:inherit}}.show-tablet[data-v-46e105de]{display:none}@media only screen and (max-width:768px){.show-tablet[data-v-46e105de]{display:inherit}}.show-mobile[data-v-46e105de]{display:none}@media only screen and (max-width:425px){.show-mobile[data-v-46e105de]{display:inherit}}.show-mobile-m[data-v-46e105de]{display:none}@media only screen and (max-width:375px){.show-mobile-m[data-v-46e105de]{display:inherit}}.show-mobile-s[data-v-46e105de]{display:none}@media only screen and (max-width:320px){.show-mobile-s[data-v-46e105de]{display:inherit}}[data-v-46e105de],[data-v-46e105de]:after,[data-v-46e105de]:before{-webkit-box-sizing:border-box;box-sizing:border-box}blockquote[data-v-46e105de],body[data-v-46e105de],dd[data-v-46e105de],dl[data-v-46e105de],figure[data-v-46e105de],h1[data-v-46e105de],h2[data-v-46e105de],h3[data-v-46e105de],h4[data-v-46e105de],h5[data-v-46e105de],h6[data-v-46e105de],hr[data-v-46e105de],ol[data-v-46e105de],p[data-v-46e105de],pre[data-v-46e105de],ul[data-v-46e105de]{margin:0;padding:0}#app[data-v-46e105de],body[data-v-46e105de],button[data-v-46e105de],html[data-v-46e105de],input[data-v-46e105de]{font:400 14px -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;line-height:1.5;-webkit-font-kerning:normal;font-kerning:normal}.country-selector[data-v-46e105de]{font-family:Roboto,-apple-system,BlinkMacSystemFont,Segoe UI,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;position:relative;height:40px;min-height:40px;z-index:0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.country-selector[data-v-46e105de]:hover{z-index:1}.country-selector__label[data-v-46e105de]{position:absolute;top:3px;cursor:pointer;left:11px;-webkit-transform:translateY(25%);transform:translateY(25%);opacity:0;-webkit-transition:all .25s cubic-bezier(.645,.045,.355,1);transition:all .25s cubic-bezier(.645,.045,.355,1);font-size:11px;color:#747474}.country-selector__input[data-v-46e105de]{cursor:pointer;background-color:#fff;position:relative;width:100%;height:40px;min-height:40px;padding-right:22px;font-weight:400;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none;border:1px solid #ccc;font-size:13px;z-index:0;padding-left:8px;color:#000}.country-selector__toggle[data-v-46e105de]{position:absolute;right:5px;top:calc(50% - 10px);-webkit-transition:all .25s cubic-bezier(.645,.045,.355,1);transition:all .25s cubic-bezier(.645,.045,.355,1);text-align:center;display:inline-block;cursor:pointer;height:24px}.country-selector__toggle__arrow[data-v-46e105de]{color:#747474}.country-selector__toggle__arrow path.arrow[data-v-46e105de]{fill:#747474}.country-selector__country-flag[data-v-46e105de]{margin:auto 0;position:absolute;top:21px;left:11px;z-index:1;cursor:pointer}.country-selector__country-flag img[data-v-46e105de]{position:absolute}.country-selector__list[data-v-46e105de]{max-width:100%;top:100%;width:100%;min-width:230px;position:absolute;background-color:#fff;overflow:hidden;-webkit-box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);z-index:9;list-style:none;overflow-y:auto;overflow-x:hidden;padding:0;margin:0}.country-selector__list.has-calling-code[data-v-46e105de]{min-width:270px}.country-selector__list__item[data-v-46e105de]{padding:0 10px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;font-size:12px;cursor:pointer;background-color:transparent;width:100%;border:0;outline:none}.country-selector__list__item__flag-container[data-v-46e105de]{margin-right:10px}.country-selector__list__item__calling-code[data-v-46e105de]{width:45px;color:#747474}.country-selector__list__item.hover[data-v-46e105de],.country-selector__list__item.keyboard-selected[data-v-46e105de]{background-color:#f2f2f2}.country-selector__list__item.selected[data-v-46e105de]{color:#fff;font-weight:600}.country-selector__list__item.selected .country-selector__list__item__calling-code[data-v-46e105de]{color:#fff}.country-selector.is-dark .country-selector__input[data-v-46e105de]{cursor:pointer;color:hsla(0,0%,100%,.7)}.country-selector.is-dark .country-selector__input[data-v-46e105de]::-webkit-input-placeholder{color:hsla(0,0%,100%,.7)}.country-selector.is-dark .country-selector__input[data-v-46e105de]::-moz-placeholder{color:hsla(0,0%,100%,.7)}.country-selector.is-dark .country-selector__input[data-v-46e105de]:-ms-input-placeholder{color:hsla(0,0%,100%,.7)}.country-selector.is-dark .country-selector__input[data-v-46e105de]::-ms-input-placeholder{color:hsla(0,0%,100%,.7)}.country-selector.is-dark .country-selector__input[data-v-46e105de]::placeholder{color:hsla(0,0%,100%,.7)}.country-selector.is-dark .country-selector__toggle__arrow[data-v-46e105de]{color:hsla(0,0%,100%,.7)}.country-selector.is-dark .country-selector__toggle__arrow path.arrow[data-v-46e105de]{fill:hsla(0,0%,100%,.7)}.country-selector.is-dark .country-selector__list__item[data-v-46e105de]{color:#f2f2f2}.country-selector.is-dark .country-selector__list__item.keyboard-selected[data-v-46e105de],.country-selector.is-dark .country-selector__list__item[data-v-46e105de]:hover{background-color:#43455e}.country-selector.is-dark .country-selector__list__calling-code[data-v-46e105de]{color:hsla(0,0%,100%,.3)}.country-selector.is-dark .country-selector__input[data-v-46e105de],.country-selector.is-dark .country-selector__list[data-v-46e105de]{color:hsla(0,0%,100%,.7)}.country-selector.has-list-open[data-v-46e105de]{z-index:1}.country-selector.has-list-open .country-selector__toggle[data-v-46e105de]{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.country-selector.is-focused[data-v-46e105de]{z-index:1}.country-selector.has-error .country-selector__input[data-v-46e105de]{border-color:#ff4500}.country-selector.has-error .country-selector__label[data-v-46e105de]{color:#ff4500}.country-selector.has-value .country-selector__input[data-v-46e105de]{padding-left:40px}.country-selector.has-hint .country-selector__label[data-v-46e105de],.country-selector.has-value .country-selector__label[data-v-46e105de]{opacity:1;-webkit-transform:translateY(0);transform:translateY(0);font-size:11px}.country-selector.has-hint .country-selector__input[data-v-46e105de],.country-selector.has-value .country-selector__input[data-v-46e105de]{padding-top:14px}.country-selector.is-disabled .country-selector[data-v-46e105de]{cursor:not-allowed}.country-selector.is-disabled .country-selector__input[data-v-46e105de]{border-color:#ccc;background-color:#f2f2f2;color:#ccc}.country-selector.is-disabled .country-selector__input[data-v-46e105de]::-webkit-input-placeholder{color:#ccc}.country-selector.is-disabled .country-selector__input[data-v-46e105de]::-moz-placeholder{color:#ccc}.country-selector.is-disabled .country-selector__input[data-v-46e105de]:-ms-input-placeholder{color:#ccc}.country-selector.is-disabled .country-selector__input[data-v-46e105de]::-ms-input-placeholder{color:#ccc}.country-selector.is-disabled .country-selector__input[data-v-46e105de]::placeholder{color:#ccc}.country-selector.is-disabled .country-selector__country-flag>div[data-v-46e105de],.country-selector.is-disabled .country-selector__country-flag[data-v-46e105de],.country-selector.is-disabled .country-selector__input[data-v-46e105de],.country-selector.is-disabled .country-selector__label[data-v-46e105de],.country-selector.is-disabled .country-selector__toggle__arrow[data-v-46e105de]{cursor:not-allowed;color:#ccc}.country-selector.no-flags .country-selector__input[data-v-46e105de]{padding-left:10px}.country-selector.sm[data-v-46e105de]{height:36px;min-height:36px}.country-selector.sm .country-selector__input[data-v-46e105de]{height:36px;min-height:36px;font-size:12px}.country-selector.sm .country-selector__label[data-v-46e105de]{font-size:10px}.country-selector.sm .country-selector__country-flag[data-v-46e105de]{top:16px}.country-selector.sm .country-selector__country-flag img[data-v-46e105de]{zoom:.3;color:red;-moz-transform:scale(.3);-moz-transform-origin:0 0}.country-selector.sm.has-value .country-selector__input[data-v-46e105de]{padding-top:12px}.country-selector.lg[data-v-46e105de]{height:48px;min-height:48px}.country-selector.lg .country-selector__input[data-v-46e105de]{height:48px;min-height:48px;font-size:14px}.country-selector.lg .country-selector__label[data-v-46e105de]{font-size:14px}.country-selector.lg .country-selector__country-flag[data-v-46e105de]{top:25px}.country-selector.lg .country-selector__country-flag img[data-v-46e105de]{zoom:.45;-moz-transform:scale(.45);-moz-transform-origin:0 0}.country-selector.lg.has-value .country-selector__input[data-v-46e105de]{padding-top:18px}.country-selector .slide-enter-active[data-v-46e105de],.country-selector .slide-leave-active[data-v-46e105de]{opacity:1;z-index:998;-webkit-transition:all .3s;transition:all .3s;-webkit-transform:translateY(0);transform:translateY(0)}.country-selector .slide-enter[data-v-46e105de],.country-selector .slide-leave-to[data-v-46e105de]{opacity:0;z-index:998;-webkit-transform:translateY(-20px);transform:translateY(-20px)}.bg-primary-after[data-v-19351537]:after,.bg-primary-before[data-v-19351537]:before,.bg-primary[data-v-19351537]{background-color:#1e90ff}.bg-primary-after-transparency[data-v-19351537]:after,.bg-primary-before-transparency[data-v-19351537]:before,.bg-primary-transparency[data-v-19351537]{background-color:rgba(30,144,255,.5)}.bg-secondary-after[data-v-19351537]:after,.bg-secondary-before[data-v-19351537]:before,.bg-secondary[data-v-19351537]{background-color:#747474}.bg-secondary-after-transparency[data-v-19351537]:after,.bg-secondary-before-transparency[data-v-19351537]:before,.bg-secondary-transparency[data-v-19351537]{background-color:hsla(0,0%,45.5%,.5)}.bg-third-after[data-v-19351537]:after,.bg-third-before[data-v-19351537]:before,.bg-third[data-v-19351537]{background-color:#ccc}.bg-third-after-transparency[data-v-19351537]:after,.bg-third-before-transparency[data-v-19351537]:before,.bg-third-transparency[data-v-19351537]{background-color:hsla(0,0%,80%,.5)}.bg-success-after[data-v-19351537]:after,.bg-success-before[data-v-19351537]:before,.bg-success[data-v-19351537]{background-color:#9acd32}.bg-success-after-transparency[data-v-19351537]:after,.bg-success-before-transparency[data-v-19351537]:before,.bg-success-transparency[data-v-19351537]{background-color:rgba(154,205,50,.5)}.bg-danger-after[data-v-19351537]:after,.bg-danger-before[data-v-19351537]:before,.bg-danger[data-v-19351537]{background-color:#ff4500}.bg-danger-after-transparency[data-v-19351537]:after,.bg-danger-before-transparency[data-v-19351537]:before,.bg-danger-transparency[data-v-19351537]{background-color:rgba(255,69,0,.5)}.bg-grey-after[data-v-19351537]:after,.bg-grey-before[data-v-19351537]:before,.bg-grey[data-v-19351537]{background-color:#999}.bg-grey-after-transparency[data-v-19351537]:after,.bg-grey-before-transparency[data-v-19351537]:before,.bg-grey-transparency[data-v-19351537]{background-color:hsla(0,0%,60%,.5)}.bg-info-after[data-v-19351537]:after,.bg-info-before[data-v-19351537]:before,.bg-info[data-v-19351537]{background-color:#17a2b8}.bg-info-after-transparency[data-v-19351537]:after,.bg-info-before-transparency[data-v-19351537]:before,.bg-info-transparency[data-v-19351537]{background-color:rgba(23,162,184,.5)}.bg-warning-after[data-v-19351537]:after,.bg-warning-before[data-v-19351537]:before,.bg-warning[data-v-19351537]{background-color:#ffa300}.bg-warning-after-transparency[data-v-19351537]:after,.bg-warning-before-transparency[data-v-19351537]:before,.bg-warning-transparency[data-v-19351537]{background-color:rgba(255,163,0,.5)}.bg-light-after[data-v-19351537]:after,.bg-light-before[data-v-19351537]:before,.bg-light[data-v-19351537]{background-color:#f5f5f5}.bg-light-after-transparency[data-v-19351537]:after,.bg-light-before-transparency[data-v-19351537]:before,.bg-light-transparency[data-v-19351537]{background-color:hsla(0,0%,96.1%,.5)}.bg-dark-after[data-v-19351537]:after,.bg-dark-before[data-v-19351537]:before,.bg-dark[data-v-19351537]{background-color:#24292e}.bg-dark-after-transparency[data-v-19351537]:after,.bg-dark-before-transparency[data-v-19351537]:before,.bg-dark-transparency[data-v-19351537]{background-color:rgba(36,41,46,.5)}.bg-default-after[data-v-19351537]:after,.bg-default-before[data-v-19351537]:before,.bg-default[data-v-19351537]{background-color:#ccc}.bg-default-after-transparency[data-v-19351537]:after,.bg-default-before-transparency[data-v-19351537]:before,.bg-default-transparency[data-v-19351537]{background-color:hsla(0,0%,80%,.5)}.bg-white-after[data-v-19351537]:after,.bg-white-before[data-v-19351537]:before,.bg-white[data-v-19351537]{background-color:#fff}.bg-white-after-transparency[data-v-19351537]:after,.bg-white-before-transparency[data-v-19351537]:before,.bg-white-transparency[data-v-19351537]{background-color:hsla(0,0%,100%,.5)}.bg-black-after[data-v-19351537]:after,.bg-black-before[data-v-19351537]:before,.bg-black[data-v-19351537]{background-color:#000}.bg-black-after-transparency[data-v-19351537]:after,.bg-black-before-transparency[data-v-19351537]:before,.bg-black-transparency[data-v-19351537]{background-color:rgba(0,0,0,.5)}.fill-primary path[data-v-19351537]{fill:#1e90ff}.fill-secondary path[data-v-19351537]{fill:#747474}.fill-third path[data-v-19351537]{fill:#ccc}.fill-success path[data-v-19351537]{fill:#9acd32}.fill-danger path[data-v-19351537]{fill:#ff4500}.fill-grey path[data-v-19351537]{fill:#999}.fill-info path[data-v-19351537]{fill:#17a2b8}.fill-warning path[data-v-19351537]{fill:#ffa300}.fill-light path[data-v-19351537]{fill:#f5f5f5}.fill-dark path[data-v-19351537]{fill:#24292e}.fill-default path[data-v-19351537]{fill:#ccc}.fill-white path[data-v-19351537]{fill:#fff}.fill-black path[data-v-19351537]{fill:#000}.label[data-v-19351537]{border-radius:2px;padding:2px 4px;color:#fff;font-size:.714em}.label-primary[data-v-19351537],.label[data-v-19351537]{background-color:#1e90ff}.label-primary-outline[data-v-19351537]{background-color:transparent;border:1px solid #1e90ff;color:#1e90ff}.label-secondary[data-v-19351537]{background-color:#747474}.label-secondary-outline[data-v-19351537]{background-color:transparent;border:1px solid #747474;color:#747474}.label-third[data-v-19351537]{background-color:#ccc}.label-third-outline[data-v-19351537]{background-color:transparent;border:1px solid #ccc;color:#ccc}.label-success[data-v-19351537]{background-color:#9acd32}.label-success-outline[data-v-19351537]{background-color:transparent;border:1px solid #9acd32;color:#9acd32}.label-danger[data-v-19351537]{background-color:#ff4500}.label-danger-outline[data-v-19351537]{background-color:transparent;border:1px solid #ff4500;color:#ff4500}.label-grey[data-v-19351537]{background-color:#999}.label-grey-outline[data-v-19351537]{background-color:transparent;border:1px solid #999;color:#999}.label-info[data-v-19351537]{background-color:#17a2b8}.label-info-outline[data-v-19351537]{background-color:transparent;border:1px solid #17a2b8;color:#17a2b8}.label-warning[data-v-19351537]{background-color:#ffa300}.label-warning-outline[data-v-19351537]{background-color:transparent;border:1px solid #ffa300;color:#ffa300}.label-light[data-v-19351537]{background-color:#f5f5f5}.label-light-outline[data-v-19351537]{background-color:transparent;border:1px solid #f5f5f5;color:#f5f5f5}.label-dark[data-v-19351537]{background-color:#24292e}.label-dark-outline[data-v-19351537]{background-color:transparent;border:1px solid #24292e;color:#24292e}.label-default[data-v-19351537]{background-color:#ccc}.label-default-outline[data-v-19351537]{background-color:transparent;border:1px solid #ccc;color:#ccc}.label-white[data-v-19351537]{background-color:#fff}.label-white-outline[data-v-19351537]{background-color:transparent;border:1px solid #fff;color:#fff}.label-black[data-v-19351537]{background-color:#000}.label-black-outline[data-v-19351537]{background-color:transparent;border:1px solid #000;color:#000}.dot[data-v-19351537]{width:6px;height:6px;border-radius:6px}.dot-primary[data-v-19351537],.dot[data-v-19351537]{background-color:#1e90ff}.dot-primary-outline[data-v-19351537]{background-color:transparent;border:1px solid #1e90ff;color:#1e90ff}.dot-secondary[data-v-19351537]{background-color:#747474}.dot-secondary-outline[data-v-19351537]{background-color:transparent;border:1px solid #747474;color:#747474}.dot-third[data-v-19351537]{background-color:#ccc}.dot-third-outline[data-v-19351537]{background-color:transparent;border:1px solid #ccc;color:#ccc}.dot-success[data-v-19351537]{background-color:#9acd32}.dot-success-outline[data-v-19351537]{background-color:transparent;border:1px solid #9acd32;color:#9acd32}.dot-danger[data-v-19351537]{background-color:#ff4500}.dot-danger-outline[data-v-19351537]{background-color:transparent;border:1px solid #ff4500;color:#ff4500}.dot-grey[data-v-19351537]{background-color:#999}.dot-grey-outline[data-v-19351537]{background-color:transparent;border:1px solid #999;color:#999}.dot-info[data-v-19351537]{background-color:#17a2b8}.dot-info-outline[data-v-19351537]{background-color:transparent;border:1px solid #17a2b8;color:#17a2b8}.dot-warning[data-v-19351537]{background-color:#ffa300}.dot-warning-outline[data-v-19351537]{background-color:transparent;border:1px solid #ffa300;color:#ffa300}.dot-light[data-v-19351537]{background-color:#f5f5f5}.dot-light-outline[data-v-19351537]{background-color:transparent;border:1px solid #f5f5f5;color:#f5f5f5}.dot-dark[data-v-19351537]{background-color:#24292e}.dot-dark-outline[data-v-19351537]{background-color:transparent;border:1px solid #24292e;color:#24292e}.dot-default[data-v-19351537]{background-color:#ccc}.dot-default-outline[data-v-19351537]{background-color:transparent;border:1px solid #ccc;color:#ccc}.dot-white[data-v-19351537]{background-color:#fff}.dot-white-outline[data-v-19351537]{background-color:transparent;border:1px solid #fff;color:#fff}.dot-black[data-v-19351537]{background-color:#000}.dot-black-outline[data-v-19351537]{background-color:transparent;border:1px solid #000;color:#000}a[data-v-19351537]{color:#1e90ff;text-decoration:none}a[data-v-19351537]:focus,a[data-v-19351537]:hover{text-decoration:underline}.btn[data-v-19351537]{border:1px solid transparent;outline:none;cursor:pointer;-webkit-transition:all .25s cubic-bezier(.645,.045,.355,1);transition:all .25s cubic-bezier(.645,.045,.355,1);background-color:#1e90ff;color:#fff;display:inline-block;border-radius:8px;line-height:1;-webkit-box-sizing:border-box;box-sizing:border-box;padding:12px 20px;font-size:1em;font-weight:inherit;margin:0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:auto;overflow:visible;-webkit-font-smoothing:inherit;text-decoration:none;-moz-osx-font-smoothing:inherit}.btn[data-v-19351537]:focus,.btn[data-v-19351537]:hover{background-color:#0077ea}.btn.active[data-v-19351537]{background-color:#1e90ff}.btn.active[data-v-19351537],.btn[data-v-19351537]:focus{-webkit-box-shadow:0 0 0 .143rem rgba(30,144,255,.5);box-shadow:0 0 0 .143rem rgba(30,144,255,.5)}.btn.active[data-v-19351537],.btn[data-v-19351537]:focus,.btn[data-v-19351537]:hover{text-decoration:none}.btn--rounded[data-v-19351537]{border-radius:50px}.btn--block[data-v-19351537]{width:100%}.btn--lg[data-v-19351537]{padding:16px 22px;font-size:1.143em}.btn--md[data-v-19351537]{padding:10px 20px;font-size:1em}.btn--sm[data-v-19351537]{padding:9px 15px;font-size:.857em}.btn--mini[data-v-19351537]{padding:7px 15px;font-size:.857em}.btn--fab[data-v-19351537]{border-radius:50%;padding:0;height:40px;width:40px}.btn--fab.btn--lg[data-v-19351537]{height:50px;width:50px}.btn--fab.btn--md[data-v-19351537]{height:36px;width:36px}.btn--fab.btn--sm[data-v-19351537]{height:32px;width:32px}.btn--fab.btn--mini[data-v-19351537]{height:28px;width:28px}.btn--light[data-v-19351537],.btn--white[data-v-19351537]{color:#747474}.btn--primary[data-v-19351537]{background-color:#1e90ff}.btn--primary[data-v-19351537]:focus,.btn--primary[data-v-19351537]:hover{background-color:#0077ea}.btn--primary.active[data-v-19351537]{background-color:#1e90ff}.btn--primary.active[data-v-19351537],.btn--primary[data-v-19351537]:focus{-webkit-box-shadow:0 0 0 .143rem rgba(30,144,255,.5);box-shadow:0 0 0 .143rem rgba(30,144,255,.5)}.btn--primary--outline[data-v-19351537]{background-color:rgba(30,144,255,.05);border:1px solid #1e90ff;color:#1e90ff}.btn--primary--outline.active[data-v-19351537],.btn--primary--outline[data-v-19351537]:focus,.btn--primary--outline[data-v-19351537]:hover{background-color:#1e90ff;color:#fff}.btn--primary--outline.active[data-v-19351537],.btn--primary--outline[data-v-19351537]:focus{-webkit-box-shadow:0 0 0 .143rem rgba(30,144,255,.5);box-shadow:0 0 0 .143rem rgba(30,144,255,.5)}.btn--secondary[data-v-19351537]{background-color:#747474}.btn--secondary[data-v-19351537]:focus,.btn--secondary[data-v-19351537]:hover{background-color:#5b5b5b}.btn--secondary.active[data-v-19351537]{background-color:#747474}.btn--secondary.active[data-v-19351537],.btn--secondary[data-v-19351537]:focus{-webkit-box-shadow:0 0 0 .143rem hsla(0,0%,45.5%,.5);box-shadow:0 0 0 .143rem hsla(0,0%,45.5%,.5)}.btn--secondary--outline[data-v-19351537]{background-color:hsla(0,0%,45.5%,.05);border:1px solid #747474;color:#747474}.btn--secondary--outline.active[data-v-19351537],.btn--secondary--outline[data-v-19351537]:focus,.btn--secondary--outline[data-v-19351537]:hover{background-color:#747474;color:#fff}.btn--secondary--outline.active[data-v-19351537],.btn--secondary--outline[data-v-19351537]:focus{-webkit-box-shadow:0 0 0 .143rem hsla(0,0%,45.5%,.5);box-shadow:0 0 0 .143rem hsla(0,0%,45.5%,.5)}.btn--third[data-v-19351537]{background-color:#ccc}.btn--third[data-v-19351537]:focus,.btn--third[data-v-19351537]:hover{background-color:#b3b3b3}.btn--third.active[data-v-19351537]{background-color:#ccc}.btn--third.active[data-v-19351537],.btn--third[data-v-19351537]:focus{-webkit-box-shadow:0 0 0 .143rem hsla(0,0%,80%,.5);box-shadow:0 0 0 .143rem hsla(0,0%,80%,.5)}.btn--third--outline[data-v-19351537]{background-color:hsla(0,0%,80%,.05);border:1px solid #ccc;color:#ccc}.btn--third--outline.active[data-v-19351537],.btn--third--outline[data-v-19351537]:focus,.btn--third--outline[data-v-19351537]:hover{background-color:#ccc;color:#fff}.btn--third--outline.active[data-v-19351537],.btn--third--outline[data-v-19351537]:focus{-webkit-box-shadow:0 0 0 .143rem hsla(0,0%,80%,.5);box-shadow:0 0 0 .143rem hsla(0,0%,80%,.5)}.btn--success[data-v-19351537]{background-color:#9acd32}.btn--success[data-v-19351537]:focus,.btn--success[data-v-19351537]:hover{background-color:#7ba428}.btn--success.active[data-v-19351537]{background-color:#9acd32}.btn--success.active[data-v-19351537],.btn--success[data-v-19351537]:focus{-webkit-box-shadow:0 0 0 .143rem rgba(154,205,50,.5);box-shadow:0 0 0 .143rem rgba(154,205,50,.5)}.btn--success--outline[data-v-19351537]{background-color:rgba(154,205,50,.05);border:1px solid #9acd32;color:#9acd32}.btn--success--outline.active[data-v-19351537],.btn--success--outline[data-v-19351537]:focus,.btn--success--outline[data-v-19351537]:hover{background-color:#9acd32;color:#fff}.btn--success--outline.active[data-v-19351537],.btn--success--outline[data-v-19351537]:focus{-webkit-box-shadow:0 0 0 .143rem rgba(154,205,50,.5);box-shadow:0 0 0 .143rem rgba(154,205,50,.5)}.btn--danger[data-v-19351537]{background-color:#ff4500}.btn--danger[data-v-19351537]:focus,.btn--danger[data-v-19351537]:hover{background-color:#cc3700}.btn--danger.active[data-v-19351537]{background-color:#ff4500}.btn--danger.active[data-v-19351537],.btn--danger[data-v-19351537]:focus{-webkit-box-shadow:0 0 0 .143rem rgba(255,69,0,.5);box-shadow:0 0 0 .143rem rgba(255,69,0,.5)}.btn--danger--outline[data-v-19351537]{background-color:rgba(255,69,0,.05);border:1px solid #ff4500;color:#ff4500}.btn--danger--outline.active[data-v-19351537],.btn--danger--outline[data-v-19351537]:focus,.btn--danger--outline[data-v-19351537]:hover{background-color:#ff4500;color:#fff}.btn--danger--outline.active[data-v-19351537],.btn--danger--outline[data-v-19351537]:focus{-webkit-box-shadow:0 0 0 .143rem rgba(255,69,0,.5);box-shadow:0 0 0 .143rem rgba(255,69,0,.5)}.btn--grey[data-v-19351537]{background-color:#999}.btn--grey[data-v-19351537]:focus,.btn--grey[data-v-19351537]:hover{background-color:grey}.btn--grey.active[data-v-19351537]{background-color:#999}.btn--grey.active[data-v-19351537],.btn--grey[data-v-19351537]:focus{-webkit-box-shadow:0 0 0 .143rem hsla(0,0%,60%,.5);box-shadow:0 0 0 .143rem hsla(0,0%,60%,.5)}.btn--grey--outline[data-v-19351537]{background-color:hsla(0,0%,60%,.05);border:1px solid #999;color:#999}.btn--grey--outline.active[data-v-19351537],.btn--grey--outline[data-v-19351537]:focus,.btn--grey--outline[data-v-19351537]:hover{background-color:#999;color:#fff}.btn--grey--outline.active[data-v-19351537],.btn--grey--outline[data-v-19351537]:focus{-webkit-box-shadow:0 0 0 .143rem hsla(0,0%,60%,.5);box-shadow:0 0 0 .143rem hsla(0,0%,60%,.5)}.btn--info[data-v-19351537]{background-color:#17a2b8}.btn--info[data-v-19351537]:focus,.btn--info[data-v-19351537]:hover{background-color:#117a8b}.btn--info.active[data-v-19351537]{background-color:#17a2b8}.btn--info.active[data-v-19351537],.btn--info[data-v-19351537]:focus{-webkit-box-shadow:0 0 0 .143rem rgba(23,162,184,.5);box-shadow:0 0 0 .143rem rgba(23,162,184,.5)}.btn--info--outline[data-v-19351537]{background-color:rgba(23,162,184,.05);border:1px solid #17a2b8;color:#17a2b8}.btn--info--outline.active[data-v-19351537],.btn--info--outline[data-v-19351537]:focus,.btn--info--outline[data-v-19351537]:hover{background-color:#17a2b8;color:#fff}.btn--info--outline.active[data-v-19351537],.btn--info--outline[data-v-19351537]:focus{-webkit-box-shadow:0 0 0 .143rem rgba(23,162,184,.5);box-shadow:0 0 0 .143rem rgba(23,162,184,.5)}.btn--warning[data-v-19351537]{background-color:#ffa300}.btn--warning[data-v-19351537]:focus,.btn--warning[data-v-19351537]:hover{background-color:#cc8200}.btn--warning.active[data-v-19351537]{background-color:#ffa300}.btn--warning.active[data-v-19351537],.btn--warning[data-v-19351537]:focus{-webkit-box-shadow:0 0 0 .143rem rgba(255,163,0,.5);box-shadow:0 0 0 .143rem rgba(255,163,0,.5)}.btn--warning--outline[data-v-19351537]{background-color:rgba(255,163,0,.05);border:1px solid #ffa300;color:#ffa300}.btn--warning--outline.active[data-v-19351537],.btn--warning--outline[data-v-19351537]:focus,.btn--warning--outline[data-v-19351537]:hover{background-color:#ffa300;color:#fff}.btn--warning--outline.active[data-v-19351537],.btn--warning--outline[data-v-19351537]:focus{-webkit-box-shadow:0 0 0 .143rem rgba(255,163,0,.5);box-shadow:0 0 0 .143rem rgba(255,163,0,.5)}.btn--light[data-v-19351537]{background-color:#f5f5f5}.btn--light[data-v-19351537]:focus,.btn--light[data-v-19351537]:hover{background-color:#dcdcdc}.btn--light.active[data-v-19351537]{background-color:#f5f5f5}.btn--light.active[data-v-19351537],.btn--light[data-v-19351537]:focus{-webkit-box-shadow:0 0 0 .143rem hsla(0,0%,96.1%,.5);box-shadow:0 0 0 .143rem hsla(0,0%,96.1%,.5)}.btn--light--outline[data-v-19351537]{background-color:hsla(0,0%,96.1%,.05);border:1px solid #f5f5f5;color:#f5f5f5}.btn--light--outline.active[data-v-19351537],.btn--light--outline[data-v-19351537]:focus,.btn--light--outline[data-v-19351537]:hover{background-color:#f5f5f5;color:#fff}.btn--light--outline.active[data-v-19351537],.btn--light--outline[data-v-19351537]:focus{-webkit-box-shadow:0 0 0 .143rem hsla(0,0%,96.1%,.5);box-shadow:0 0 0 .143rem hsla(0,0%,96.1%,.5)}.btn--dark[data-v-19351537]{background-color:#24292e}.btn--dark[data-v-19351537]:focus,.btn--dark[data-v-19351537]:hover{background-color:#0e1011}.btn--dark.active[data-v-19351537]{background-color:#24292e}.btn--dark.active[data-v-19351537],.btn--dark[data-v-19351537]:focus{-webkit-box-shadow:0 0 0 .143rem rgba(36,41,46,.5);box-shadow:0 0 0 .143rem rgba(36,41,46,.5)}.btn--dark--outline[data-v-19351537]{background-color:rgba(36,41,46,.05);border:1px solid #24292e;color:#24292e}.btn--dark--outline.active[data-v-19351537],.btn--dark--outline[data-v-19351537]:focus,.btn--dark--outline[data-v-19351537]:hover{background-color:#24292e;color:#fff}.btn--dark--outline.active[data-v-19351537],.btn--dark--outline[data-v-19351537]:focus{-webkit-box-shadow:0 0 0 .143rem rgba(36,41,46,.5);box-shadow:0 0 0 .143rem rgba(36,41,46,.5)}.btn--default[data-v-19351537]{background-color:#ccc}.btn--default[data-v-19351537]:focus,.btn--default[data-v-19351537]:hover{background-color:#b3b3b3}.btn--default.active[data-v-19351537]{background-color:#ccc}.btn--default.active[data-v-19351537],.btn--default[data-v-19351537]:focus{-webkit-box-shadow:0 0 0 .143rem hsla(0,0%,80%,.5);box-shadow:0 0 0 .143rem hsla(0,0%,80%,.5)}.btn--default--outline[data-v-19351537]{background-color:hsla(0,0%,80%,.05);border:1px solid #ccc;color:#ccc}.btn--default--outline.active[data-v-19351537],.btn--default--outline[data-v-19351537]:focus,.btn--default--outline[data-v-19351537]:hover{background-color:#ccc;color:#fff}.btn--default--outline.active[data-v-19351537],.btn--default--outline[data-v-19351537]:focus{-webkit-box-shadow:0 0 0 .143rem hsla(0,0%,80%,.5);box-shadow:0 0 0 .143rem hsla(0,0%,80%,.5)}.btn--white[data-v-19351537]{background-color:#fff}.btn--white[data-v-19351537]:focus,.btn--white[data-v-19351537]:hover{background-color:#e6e6e6}.btn--white.active[data-v-19351537]{background-color:#fff}.btn--white.active[data-v-19351537],.btn--white[data-v-19351537]:focus{-webkit-box-shadow:0 0 0 .143rem hsla(0,0%,100%,.5);box-shadow:0 0 0 .143rem hsla(0,0%,100%,.5)}.btn--white--outline[data-v-19351537]{background-color:hsla(0,0%,100%,.05);border:1px solid #fff;color:#fff}.btn--white--outline.active[data-v-19351537],.btn--white--outline[data-v-19351537]:focus,.btn--white--outline[data-v-19351537]:hover{background-color:#fff;color:#fff}.btn--white--outline.active[data-v-19351537],.btn--white--outline[data-v-19351537]:focus{-webkit-box-shadow:0 0 0 .143rem hsla(0,0%,100%,.5);box-shadow:0 0 0 .143rem hsla(0,0%,100%,.5)}.btn--black.active[data-v-19351537],.btn--black[data-v-19351537],.btn--black[data-v-19351537]:focus,.btn--black[data-v-19351537]:hover{background-color:#000}.btn--black.active[data-v-19351537],.btn--black[data-v-19351537]:focus{-webkit-box-shadow:0 0 0 .143rem rgba(0,0,0,.5);box-shadow:0 0 0 .143rem rgba(0,0,0,.5)}.btn--black--outline[data-v-19351537]{background-color:rgba(0,0,0,.05);border:1px solid #000;color:#000}.btn--black--outline.active[data-v-19351537],.btn--black--outline[data-v-19351537]:focus,.btn--black--outline[data-v-19351537]:hover{background-color:#000;color:#fff}.btn--black--outline.active[data-v-19351537],.btn--black--outline[data-v-19351537]:focus{-webkit-box-shadow:0 0 0 .143rem rgba(0,0,0,.5);box-shadow:0 0 0 .143rem rgba(0,0,0,.5)}.btn--default--outline[data-v-19351537]{color:#747474}.btn--disabled[data-v-19351537]:disabled{-webkit-box-shadow:none;box-shadow:none;background-color:#ccc;border:1px solid #ccc;color:#fff;cursor:not-allowed}.badge[data-v-19351537]{background:#999;height:22px;line-height:22px;border-radius:22px;padding:0 5px;font-size:.857em;color:#888;font-weight:500}.badge-primary[data-v-19351537]{background-color:#1e90ff;color:#fff}.badge-secondary[data-v-19351537]{background-color:#747474;color:#fff}.badge-third[data-v-19351537]{background-color:#ccc;color:#fff}.badge-success[data-v-19351537]{background-color:#9acd32;color:#fff}.badge-danger[data-v-19351537]{background-color:#ff4500;color:#fff}.badge-grey[data-v-19351537]{background-color:#999;color:#fff}.badge-info[data-v-19351537]{background-color:#17a2b8;color:#fff}.badge-warning[data-v-19351537]{background-color:#ffa300;color:#fff}.badge-light[data-v-19351537]{background-color:#f5f5f5;color:#fff}.badge-dark[data-v-19351537]{background-color:#24292e;color:#fff}.badge-default[data-v-19351537]{background-color:#ccc;color:#fff}.badge-white[data-v-19351537]{background-color:#fff;color:#fff}.badge-black[data-v-19351537]{background-color:#000;color:#fff}table.md[data-v-19351537]{border-spacing:0;border-radius:8px;border-collapse:collapse;width:100%;table-layout:fixed;overflow-wrap:break-word;overflow:hidden;word-break:break-all;margin-top:0;margin-bottom:16px;font-size:1em;-webkit-box-shadow:0 0 8px rgba(0,0,0,.2);box-shadow:0 0 8px rgba(0,0,0,.2)}table.md tr[data-v-19351537]{background-color:#fff;width:100%}table.md tr td[data-v-19351537],table.md tr th[data-v-19351537]{padding:6px 13px;text-align:left}table.md tr[data-v-19351537]:nth-child(2n){background-color:#f2f2f2}.is-dark table.md[data-v-19351537]{color:#f2f2f2}.is-dark table.md tr[data-v-19351537]{background-color:#21222e}.is-dark table.md tr[data-v-19351537]:nth-child(2n){background-color:#2e2f40}.is-dark table.md tr td.text-muted[data-v-19351537]{color:hsla(0,0%,100%,.3)}.slide-enter-active[data-v-19351537],.slide-leave-active[data-v-19351537]{opacity:1;z-index:998;-webkit-transition:all .3s;transition:all .3s;-webkit-transform:translateY(0);transform:translateY(0)}.slide-enter[data-v-19351537],.slide-leave-to[data-v-19351537]{opacity:0;z-index:998;-webkit-transform:translateY(-20px);transform:translateY(-20px)}.tags-enter-active[data-v-19351537],.tags-leave-active[data-v-19351537]{opacity:1;-webkit-transition:all .3s;transition:all .3s;position:absolute;-webkit-transform:translateY(0);transform:translateY(0)}.tags-enter[data-v-19351537],.tags-leave-to[data-v-19351537]{opacity:0;-webkit-transform:translateX(-100%);transform:translateX(-100%)}.slideinvert-enter-active[data-v-19351537],.slideinvert-leave-active[data-v-19351537]{opacity:1;z-index:998;-webkit-transition:all .3s;transition:all .3s;-webkit-transform:translateY(0);transform:translateY(0)}.slideinvert-enter[data-v-19351537],.slideinvert-leave-to[data-v-19351537]{opacity:0;z-index:998;-webkit-transform:translateY(40px);transform:translateY(40px)}.slidenext-enter-active[data-v-19351537],.slidenext-leave-active[data-v-19351537],.slideprev-enter-active[data-v-19351537],.slideprev-leave-active[data-v-19351537]{position:absolute;-webkit-transition:all .3s;transition:all .3s}.slidenext-enter[data-v-19351537],.slideprev-leave-to[data-v-19351537]{-webkit-transform:translateX(100%);transform:translateX(100%)}.slidenext-leave-to[data-v-19351537],.slideprev-enter[data-v-19351537]{-webkit-transform:translateX(-100%);transform:translateX(-100%)}.slidevnext-enter-active[data-v-19351537],.slidevnext-leave-active[data-v-19351537],.slidevprev-enter-active[data-v-19351537],.slidevprev-leave-active[data-v-19351537]{position:absolute;-webkit-transition:all .3s;transition:all .3s}.slidevnext-enter[data-v-19351537],.slidevprev-leave-to[data-v-19351537]{-webkit-transform:translateY(100%);transform:translateY(100%);opacity:0}.slidevnext-leave-to[data-v-19351537],.slidevprev-enter[data-v-19351537]{-webkit-transform:translateY(-100%);transform:translateY(-100%);opacity:0}@media screen and (max-width:415px){.slide-enter-active[data-v-19351537],.slide-leave-active[data-v-19351537],.slideinvert-enter-active[data-v-19351537],.slideinvert-leave-active[data-v-19351537]{-webkit-transition:all 0s;transition:all 0s}}.spinner-anim[data-v-19351537]{-webkit-animation:spin-data-v-19351537 .6s linear infinite;animation:spin-data-v-19351537 .6s linear infinite}@-webkit-keyframes spin-data-v-19351537{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes spin-data-v-19351537{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.dialog-fade-enter-active .dialog-animation[data-v-19351537]{-webkit-animation:dialog-fade-in-data-v-19351537 .4s;animation:dialog-fade-in-data-v-19351537 .4s}.dialog-fade-leave-active .dialog-animation[data-v-19351537]{-webkit-animation:dialog-fade-out-data-v-19351537 .4s;animation:dialog-fade-out-data-v-19351537 .4s}@-webkit-keyframes dialog-fade-in-data-v-19351537{0%{-webkit-transform:translate3d(0,-30px,0);transform:translate3d(0,-30px,0);opacity:0}to{-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1}}@keyframes dialog-fade-in-data-v-19351537{0%{-webkit-transform:translate3d(0,-30px,0);transform:translate3d(0,-30px,0);opacity:0}to{-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1}}@-webkit-keyframes dialog-fade-out-data-v-19351537{0%{-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1}to{-webkit-transform:translate3d(0,-30px,0);transform:translate3d(0,-30px,0);opacity:0}}@keyframes dialog-fade-out-data-v-19351537{0%{-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1}to{-webkit-transform:translate3d(0,-30px,0);transform:translate3d(0,-30px,0);opacity:0}}.expand-enter-active[data-v-19351537],.expand-leave-active[data-v-19351537]{-webkit-transition:.3s ease-in-out;transition:.3s ease-in-out;-webkit-transition-property:opacity,height;transition-property:opacity,height;overflow:hidden}.expand-enter[data-v-19351537],.expand-leave-to[data-v-19351537]{height:0;opacity:0}.scale-enter-active[data-v-19351537],.scale-leave-active[data-v-19351537]{opacity:1;z-index:1;-webkit-transition:all .3s cubic-bezier(.4,.52,.26,.9);transition:all .3s cubic-bezier(.4,.52,.26,.9)}.scale-enter[data-v-19351537],.scale-leave-to[data-v-19351537]{opacity:.4;z-index:1;-webkit-transform:scale(0);transform:scale(0)}@-webkit-keyframes loading-data-v-19351537{0%{left:-200px;width:30%}50%{width:30%}70%{width:70%}80%{left:50%}95%{left:120%}to{left:100%}}@keyframes loading-data-v-19351537{0%{left:-200px;width:30%}50%{width:30%}70%{width:70%}80%{left:50%}95%{left:120%}to{left:100%}}.flip-list-move[data-v-19351537]{-webkit-transition:-webkit-transform .6s;transition:-webkit-transform .6s;transition:transform .6s;transition:transform .6s,-webkit-transform .6s}.over-hid[data-v-19351537]{overflow:hidden}.pos-r[data-v-19351537]{position:relative}.pos-a[data-v-19351537]{position:absolute}.flex[data-v-19351537]{display:-webkit-box;display:-ms-flexbox;display:flex}.flex.fluid[data-v-19351537]{width:100%}.flex.direction-column[data-v-19351537]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.flex.direction-column-reverse[data-v-19351537]{-webkit-box-orient:vertical;-webkit-box-direction:reverse;-ms-flex-direction:column-reverse;flex-direction:column-reverse}.flex.direction-row[data-v-19351537]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.flex.direction-row-reverse[data-v-19351537]{-webkit-box-orient:horizontal;-webkit-box-direction:reverse;-ms-flex-direction:row-reverse;flex-direction:row-reverse}.flex.align-center[data-v-19351537]{-webkit-box-align:center;-ms-flex-align:center;align-items:center}.flex.align-start[data-v-19351537]{-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start}.flex.align-end[data-v-19351537]{-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end}.flex.justify-start[data-v-19351537]{-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}.flex.justify-end[data-v-19351537]{-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}.flex.justify-center[data-v-19351537]{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.flex.space-between[data-v-19351537]{-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.flex.space-around[data-v-19351537]{-ms-flex-pack:distribute;justify-content:space-around}.flex.flex-center[data-v-19351537]{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.flex.flex--wrap[data-v-19351537]{-ms-flex-wrap:wrap;flex-wrap:wrap}.flex.flex--grow[data-v-19351537]{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1}.flex-fill[data-v-19351537]{-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto}.flex-fixed[data-v-19351537]{-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto}.flex-1[data-v-19351537]{-webkit-box-flex:1;-ms-flex:1;flex:1}.flex-100[data-v-19351537]{-webkit-box-flex:0;-ms-flex:0 1 100%;flex:0 1 100%}.flex-75[data-v-19351537]{-webkit-box-flex:0;-ms-flex:0 1 75%;flex:0 1 75%}.flex-50[data-v-19351537]{-webkit-box-flex:0;-ms-flex:0 1 50%;flex:0 1 50%}.flex-33[data-v-19351537]{-webkit-box-flex:0;-ms-flex:0 1 33.33%;flex:0 1 33.33%}.flex-25[data-v-19351537]{-webkit-box-flex:0;-ms-flex:0 1 25%;flex:0 1 25%}.flex-20[data-v-19351537]{-webkit-box-flex:0;-ms-flex:0 1 20%;flex:0 1 20%}.flex-16[data-v-19351537]{-webkit-box-flex:0;-ms-flex:0 1 16.66%;flex:0 1 16.66%}.text-muted-white[data-v-19351537]{color:hsla(0,0%,100%,.54)}.text-muted[data-v-19351537]{color:rgba(0,0,0,.54)}.is-dark .text-muted[data-v-19351537]{color:hsla(0,0%,100%,.54)}.text-strong[data-v-19351537]{font-weight:500}.text-center[data-v-19351537]{text-align:center}.text-left[data-v-19351537]{text-align:left}.text-right[data-v-19351537]{text-align:right}.text-primary[data-v-19351537]{color:#1e90ff}.text-secondary[data-v-19351537]{color:#747474}.text-third[data-v-19351537]{color:#ccc}.text-success[data-v-19351537]{color:#9acd32}.text-danger[data-v-19351537]{color:#ff4500}.text-grey[data-v-19351537]{color:#999}.text-info[data-v-19351537]{color:#17a2b8}.text-warning[data-v-19351537]{color:#ffa300}.text-light[data-v-19351537]{color:#f5f5f5}.text-dark[data-v-19351537]{color:#24292e}.text-default[data-v-19351537]{color:#ccc}.text-white[data-v-19351537]{color:#fff}.text-black[data-v-19351537]{color:#000}.dots-text[data-v-19351537]{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.dots-text-3[data-v-19351537]{overflow:hidden;position:relative;line-height:1.3em;max-height:3.9em;text-align:justify;margin-right:-1em;padding-right:1em}.dots-text-3[data-v-19351537]:before{content:"...";position:absolute;right:3px;bottom:2px}.dots-text-3[data-v-19351537]:after{content:"";position:absolute;right:0;width:1em;height:1em;margin-top:.2em;background:#fff}.dots-text-2[data-v-19351537]{overflow:hidden;position:relative;line-height:1.3em;max-height:2.6em;text-align:justify;margin-right:-1em;padding-right:1em}.dots-text-2[data-v-19351537]:before{content:"...";position:absolute;right:3px;bottom:2px}.dots-text-2[data-v-19351537]:after{content:"";position:absolute;right:0;width:1em;height:1em;margin-top:.2em;background:#fff}.container[data-v-19351537]{width:100%;padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto}@media(max-width:768px){.container[data-v-19351537]{max-width:100%}}@media(min-width:768px){.container[data-v-19351537]{max-width:768px}}@media(min-width:1024px){.container[data-v-19351537]{max-width:1024px}}@media(min-width:1440px){.container[data-v-19351537]{max-width:1440px}}@media(min-width:2560px){.container[data-v-19351537]{max-width:2560px}}.pr-0[data-v-19351537]{padding-right:0}.pt-0[data-v-19351537]{padding-top:0}.pb-0[data-v-19351537]{padding-bottom:0}.pl-0[data-v-19351537]{padding-left:0}.px-0[data-v-19351537]{padding-left:0;padding-right:0}.py-0[data-v-19351537]{padding-top:0;padding-bottom:0}.p-0[data-v-19351537]{padding:0}.pr-1[data-v-19351537]{padding-right:.25rem}.pt-1[data-v-19351537]{padding-top:.25rem}.pb-1[data-v-19351537]{padding-bottom:.25rem}.pl-1[data-v-19351537]{padding-left:.25rem}.px-1[data-v-19351537]{padding-left:.25rem;padding-right:.25rem}.py-1[data-v-19351537]{padding-top:.25rem;padding-bottom:.25rem}.p-1[data-v-19351537]{padding:.25rem}.pr-2[data-v-19351537]{padding-right:.5rem}.pt-2[data-v-19351537]{padding-top:.5rem}.pb-2[data-v-19351537]{padding-bottom:.5rem}.pl-2[data-v-19351537]{padding-left:.5rem}.px-2[data-v-19351537]{padding-left:.5rem;padding-right:.5rem}.py-2[data-v-19351537]{padding-top:.5rem;padding-bottom:.5rem}.p-2[data-v-19351537]{padding:.5rem}.pr-3[data-v-19351537]{padding-right:1rem}.pt-3[data-v-19351537]{padding-top:1rem}.pb-3[data-v-19351537]{padding-bottom:1rem}.pl-3[data-v-19351537]{padding-left:1rem}.px-3[data-v-19351537]{padding-left:1rem;padding-right:1rem}.py-3[data-v-19351537]{padding-top:1rem;padding-bottom:1rem}.p-3[data-v-19351537]{padding:1rem}.pr-4[data-v-19351537]{padding-right:1.5rem}.pt-4[data-v-19351537]{padding-top:1.5rem}.pb-4[data-v-19351537]{padding-bottom:1.5rem}.pl-4[data-v-19351537]{padding-left:1.5rem}.px-4[data-v-19351537]{padding-left:1.5rem;padding-right:1.5rem}.py-4[data-v-19351537]{padding-top:1.5rem;padding-bottom:1.5rem}.p-4[data-v-19351537]{padding:1.5rem}.pr-5[data-v-19351537]{padding-right:3rem}.pt-5[data-v-19351537]{padding-top:3rem}.pb-5[data-v-19351537]{padding-bottom:3rem}.pl-5[data-v-19351537]{padding-left:3rem}.px-5[data-v-19351537]{padding-left:3rem;padding-right:3rem}.py-5[data-v-19351537]{padding-top:3rem;padding-bottom:3rem}.p-5[data-v-19351537]{padding:3rem}.mr-0[data-v-19351537]{margin-right:0}.mt-0[data-v-19351537]{margin-top:0}.mb-0[data-v-19351537]{margin-bottom:0}.ml-0[data-v-19351537]{margin-left:0}.mx-0[data-v-19351537]{margin-left:0;margin-right:0}.my-0[data-v-19351537]{margin-top:0;margin-bottom:0}.m-0[data-v-19351537]{margin:0}.mr-1[data-v-19351537]{margin-right:.25rem}.mt-1[data-v-19351537]{margin-top:.25rem}.mb-1[data-v-19351537]{margin-bottom:.25rem}.ml-1[data-v-19351537]{margin-left:.25rem}.mx-1[data-v-19351537]{margin-left:.25rem;margin-right:.25rem}.my-1[data-v-19351537]{margin-top:.25rem;margin-bottom:.25rem}.m-1[data-v-19351537]{margin:.25rem}.mr-2[data-v-19351537]{margin-right:.5rem}.mt-2[data-v-19351537]{margin-top:.5rem}.mb-2[data-v-19351537]{margin-bottom:.5rem}.ml-2[data-v-19351537]{margin-left:.5rem}.mx-2[data-v-19351537]{margin-left:.5rem;margin-right:.5rem}.my-2[data-v-19351537]{margin-top:.5rem;margin-bottom:.5rem}.m-2[data-v-19351537]{margin:.5rem}.mr-3[data-v-19351537]{margin-right:1rem}.mt-3[data-v-19351537]{margin-top:1rem}.mb-3[data-v-19351537]{margin-bottom:1rem}.ml-3[data-v-19351537]{margin-left:1rem}.mx-3[data-v-19351537]{margin-left:1rem;margin-right:1rem}.my-3[data-v-19351537]{margin-top:1rem;margin-bottom:1rem}.m-3[data-v-19351537]{margin:1rem}.mr-4[data-v-19351537]{margin-right:1.5rem}.mt-4[data-v-19351537]{margin-top:1.5rem}.mb-4[data-v-19351537]{margin-bottom:1.5rem}.ml-4[data-v-19351537]{margin-left:1.5rem}.mx-4[data-v-19351537]{margin-left:1.5rem;margin-right:1.5rem}.my-4[data-v-19351537]{margin-top:1.5rem;margin-bottom:1.5rem}.m-4[data-v-19351537]{margin:1.5rem}.mr-5[data-v-19351537]{margin-right:3rem}.mt-5[data-v-19351537]{margin-top:3rem}.mb-5[data-v-19351537]{margin-bottom:3rem}.ml-5[data-v-19351537]{margin-left:3rem}.mx-5[data-v-19351537]{margin-left:3rem;margin-right:3rem}.my-5[data-v-19351537]{margin-top:3rem;margin-bottom:3rem}.m-5[data-v-19351537]{margin:3rem}.h-100[data-v-19351537]{height:100%}.mh-100[data-v-19351537]{max-height:100%}.w-100[data-v-19351537]{width:100%}.mw-100[data-v-19351537]{max-width:100%}.m-h-0[data-v-19351537]{min-height:0}.m-h-100[data-v-19351537]{min-height:100%}.m-w-0[data-v-19351537]{min-width:0}.m-w-100[data-v-19351537]{min-width:100%}.br-0[data-v-19351537]{border-radius:0}.brt-0[data-v-19351537]{border-top-left-radius:0;border-top-right-radius:0}.brb-0[data-v-19351537]{border-bottom-right-radius:0;border-bottom-left-radius:0}.br-2[data-v-19351537]{border-radius:2px}.brt-2[data-v-19351537]{border-top-left-radius:2px;border-top-right-radius:2px}.brb-2[data-v-19351537]{border-bottom-right-radius:2px;border-bottom-left-radius:2px}.br-4[data-v-19351537]{border-radius:4px}.brt-4[data-v-19351537]{border-top-left-radius:4px;border-top-right-radius:4px}.brb-4[data-v-19351537]{border-bottom-right-radius:4px;border-bottom-left-radius:4px}.br-8[data-v-19351537]{border-radius:8px}.brt-8[data-v-19351537]{border-top-left-radius:8px;border-top-right-radius:8px}.brb-8[data-v-19351537]{border-bottom-right-radius:8px;border-bottom-left-radius:8px}.fs-12[data-v-19351537]{font-size:12px}.fs-14[data-v-19351537]{font-size:14px}.fs-16[data-v-19351537]{font-size:16px}.fs-18[data-v-19351537]{font-size:18px}.fs-20[data-v-19351537]{font-size:20px}.fs-22[data-v-19351537]{font-size:22px}.fs-26[data-v-19351537]{font-size:26px}.fw-300[data-v-19351537]{font-weight:300}.fw-400[data-v-19351537]{font-weight:400}.fw-500[data-v-19351537]{font-weight:500}@media only screen and (max-width:2560px){.hidden-4k[data-v-19351537]{display:none}}@media only screen and (max-width:1440px){.hidden-laptop[data-v-19351537]{display:none}}@media only screen and (max-width:1024px){.hidden-laptop-s[data-v-19351537]{display:none}}@media only screen and (max-width:768px){.hidden-tablet[data-v-19351537]{display:none}}@media only screen and (max-width:425px){.hidden-mobile[data-v-19351537]{display:none}}@media only screen and (max-width:375px){.hidden-mobile-m[data-v-19351537]{display:none}}@media only screen and (max-width:320px){.hidden-mobile-s[data-v-19351537]{display:none}}.show-4k[data-v-19351537]{display:none}@media only screen and (max-width:2560px){.show-4k[data-v-19351537]{display:inherit}}.show-laptop[data-v-19351537]{display:none}@media only screen and (max-width:1440px){.show-laptop[data-v-19351537]{display:inherit}}.show-laptop-s[data-v-19351537]{display:none}@media only screen and (max-width:1024px){.show-laptop-s[data-v-19351537]{display:inherit}}.show-tablet[data-v-19351537]{display:none}@media only screen and (max-width:768px){.show-tablet[data-v-19351537]{display:inherit}}.show-mobile[data-v-19351537]{display:none}@media only screen and (max-width:425px){.show-mobile[data-v-19351537]{display:inherit}}.show-mobile-m[data-v-19351537]{display:none}@media only screen and (max-width:375px){.show-mobile-m[data-v-19351537]{display:inherit}}.show-mobile-s[data-v-19351537]{display:none}@media only screen and (max-width:320px){.show-mobile-s[data-v-19351537]{display:inherit}}[data-v-19351537],[data-v-19351537]:after,[data-v-19351537]:before{-webkit-box-sizing:border-box;box-sizing:border-box}blockquote[data-v-19351537],body[data-v-19351537],dd[data-v-19351537],dl[data-v-19351537],figure[data-v-19351537],h1[data-v-19351537],h2[data-v-19351537],h3[data-v-19351537],h4[data-v-19351537],h5[data-v-19351537],h6[data-v-19351537],hr[data-v-19351537],ol[data-v-19351537],p[data-v-19351537],pre[data-v-19351537],ul[data-v-19351537]{margin:0;padding:0}#app[data-v-19351537],body[data-v-19351537],button[data-v-19351537],html[data-v-19351537],input[data-v-19351537]{font:400 14px -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;line-height:1.5;-webkit-font-kerning:normal;font-kerning:normal}.vue-phone-number-input .select-country-container[data-v-19351537]{-webkit-box-flex:0;-ms-flex:0 0 120px;flex:0 0 120px;width:120px;min-width:120px;max-width:120px}.vue-phone-number-input.sm .select-country-container[data-v-19351537]{-webkit-box-flex:0;-ms-flex:0 0 110px;flex:0 0 110px;width:110px;min-width:110px;max-width:110px}.vue-phone-number-input.lg .select-country-container[data-v-19351537]{-webkit-box-flex:0;-ms-flex:0 0 130px;flex:0 0 130px;width:130px;min-width:130px;max-width:130px}',
      "",
    ]);
  },
  function (t, e, n) {
    (t.exports = n(31)(!1)).push([
      t.i,
      ".vld-overlay,.vld-shown{overflow:hidden}.vld-overlay{bottom:0;left:0;position:absolute;right:0;top:0;align-items:center;display:none;justify-content:center;z-index:9999}.vld-overlay.is-active{display:flex}.vld-overlay.is-full-page{z-index:9999;position:fixed}.vld-overlay .vld-background{bottom:0;left:0;position:absolute;right:0;top:0;background:#fff;opacity:.5}.vld-overlay .vld-icon,.vld-parent{position:relative}",
      "",
    ]);
  },
  function (t, e, n) {
    "use strict";
    var i = n(57),
      r = n(184),
      o = n(521),
      a = n(190);
    function s(t) {
      var e = new o(t),
        n = r(o.prototype.request, e);
      return i.extend(n, o.prototype, e), i.extend(n, e), n;
    }
    var l = s(n(187));
    (l.Axios = o),
      (l.create = function (t) {
        return s(a(l.defaults, t));
      }),
      (l.Cancel = n(191)),
      (l.CancelToken = n(534)),
      (l.isCancel = n(186)),
      (l.all = function (t) {
        return Promise.all(t);
      }),
      (l.spread = n(535)),
      (t.exports = l),
      (t.exports.default = l);
  },
  function (t, e, n) {
    "use strict";
    var i = n(57),
      r = n(185),
      o = n(522),
      a = n(523),
      s = n(190);
    function l(t) {
      (this.defaults = t),
        (this.interceptors = { request: new o(), response: new o() });
    }
    (l.prototype.request = function (t) {
      "string" == typeof t
        ? ((t = arguments[1] || {}).url = arguments[0])
        : (t = t || {}),
        (t = s(this.defaults, t)).method
          ? (t.method = t.method.toLowerCase())
          : this.defaults.method
          ? (t.method = this.defaults.method.toLowerCase())
          : (t.method = "get");
      var e = [a, void 0],
        n = Promise.resolve(t);
      for (
        this.interceptors.request.forEach(function (t) {
          e.unshift(t.fulfilled, t.rejected);
        }),
          this.interceptors.response.forEach(function (t) {
            e.push(t.fulfilled, t.rejected);
          });
        e.length;

      )
        n = n.then(e.shift(), e.shift());
      return n;
    }),
      (l.prototype.getUri = function (t) {
        return (
          (t = s(this.defaults, t)),
          r(t.url, t.params, t.paramsSerializer).replace(/^\?/, "")
        );
      }),
      i.forEach(["delete", "get", "head", "options"], function (t) {
        l.prototype[t] = function (e, n) {
          return this.request(i.merge(n || {}, { method: t, url: e }));
        };
      }),
      i.forEach(["post", "put", "patch"], function (t) {
        l.prototype[t] = function (e, n, r) {
          return this.request(i.merge(r || {}, { method: t, url: e, data: n }));
        };
      }),
      (t.exports = l);
  },
  function (t, e, n) {
    "use strict";
    var i = n(57);
    function r() {
      this.handlers = [];
    }
    (r.prototype.use = function (t, e) {
      return (
        this.handlers.push({ fulfilled: t, rejected: e }),
        this.handlers.length - 1
      );
    }),
      (r.prototype.eject = function (t) {
        this.handlers[t] && (this.handlers[t] = null);
      }),
      (r.prototype.forEach = function (t) {
        i.forEach(this.handlers, function (e) {
          null !== e && t(e);
        });
      }),
      (t.exports = r);
  },
  function (t, e, n) {
    "use strict";
    var i = n(57),
      r = n(524),
      o = n(186),
      a = n(187);
    function s(t) {
      t.cancelToken && t.cancelToken.throwIfRequested();
    }
    t.exports = function (t) {
      return (
        s(t),
        (t.headers = t.headers || {}),
        (t.data = r(t.data, t.headers, t.transformRequest)),
        (t.headers = i.merge(
          t.headers.common || {},
          t.headers[t.method] || {},
          t.headers
        )),
        i.forEach(
          ["delete", "get", "head", "post", "put", "patch", "common"],
          function (e) {
            delete t.headers[e];
          }
        ),
        (t.adapter || a.adapter)(t).then(
          function (e) {
            return (
              s(t), (e.data = r(e.data, e.headers, t.transformResponse)), e
            );
          },
          function (e) {
            return (
              o(e) ||
                (s(t),
                e &&
                  e.response &&
                  (e.response.data = r(
                    e.response.data,
                    e.response.headers,
                    t.transformResponse
                  ))),
              Promise.reject(e)
            );
          }
        )
      );
    };
  },
  function (t, e, n) {
    "use strict";
    var i = n(57);
    t.exports = function (t, e, n) {
      return (
        i.forEach(n, function (n) {
          t = n(t, e);
        }),
        t
      );
    };
  },
  function (t, e, n) {
    "use strict";
    var i = n(57);
    t.exports = function (t, e) {
      i.forEach(t, function (n, i) {
        i !== e &&
          i.toUpperCase() === e.toUpperCase() &&
          ((t[e] = n), delete t[i]);
      });
    };
  },
  function (t, e, n) {
    "use strict";
    var i = n(189);
    t.exports = function (t, e, n) {
      var r = n.config.validateStatus;
      !r || r(n.status)
        ? t(n)
        : e(
            i(
              "Request failed with status code " + n.status,
              n.config,
              null,
              n.request,
              n
            )
          );
    };
  },
  function (t, e, n) {
    "use strict";
    t.exports = function (t, e, n, i, r) {
      return (
        (t.config = e),
        n && (t.code = n),
        (t.request = i),
        (t.response = r),
        (t.isAxiosError = !0),
        (t.toJSON = function () {
          return {
            message: this.message,
            name: this.name,
            description: this.description,
            number: this.number,
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            config: this.config,
            code: this.code,
          };
        }),
        t
      );
    };
  },
  function (t, e, n) {
    "use strict";
    var i = n(529),
      r = n(530);
    t.exports = function (t, e) {
      return t && !i(e) ? r(t, e) : e;
    };
  },
  function (t, e, n) {
    "use strict";
    t.exports = function (t) {
      return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t);
    };
  },
  function (t, e, n) {
    "use strict";
    t.exports = function (t, e) {
      return e ? t.replace(/\/+$/, "") + "/" + e.replace(/^\/+/, "") : t;
    };
  },
  function (t, e, n) {
    "use strict";
    var i = n(57),
      r = [
        "age",
        "authorization",
        "content-length",
        "content-type",
        "etag",
        "expires",
        "from",
        "host",
        "if-modified-since",
        "if-unmodified-since",
        "last-modified",
        "location",
        "max-forwards",
        "proxy-authorization",
        "referer",
        "retry-after",
        "user-agent",
      ];
    t.exports = function (t) {
      var e,
        n,
        o,
        a = {};
      return t
        ? (i.forEach(t.split("\n"), function (t) {
            if (
              ((o = t.indexOf(":")),
              (e = i.trim(t.substr(0, o)).toLowerCase()),
              (n = i.trim(t.substr(o + 1))),
              e)
            ) {
              if (a[e] && r.indexOf(e) >= 0) return;
              a[e] =
                "set-cookie" === e
                  ? (a[e] ? a[e] : []).concat([n])
                  : a[e]
                  ? a[e] + ", " + n
                  : n;
            }
          }),
          a)
        : a;
    };
  },
  function (t, e, n) {
    "use strict";
    var i = n(57);
    t.exports = i.isStandardBrowserEnv()
      ? (function () {
          var t,
            e = /(msie|trident)/i.test(navigator.userAgent),
            n = document.createElement("a");
          function r(t) {
            var i = t;
            return (
              e && (n.setAttribute("href", i), (i = n.href)),
              n.setAttribute("href", i),
              {
                href: n.href,
                protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
                host: n.host,
                search: n.search ? n.search.replace(/^\?/, "") : "",
                hash: n.hash ? n.hash.replace(/^#/, "") : "",
                hostname: n.hostname,
                port: n.port,
                pathname:
                  "/" === n.pathname.charAt(0) ? n.pathname : "/" + n.pathname,
              }
            );
          }
          return (
            (t = r(window.location.href)),
            function (e) {
              var n = i.isString(e) ? r(e) : e;
              return n.protocol === t.protocol && n.host === t.host;
            }
          );
        })()
      : function () {
          return !0;
        };
  },
  function (t, e, n) {
    "use strict";
    var i = n(57);
    t.exports = i.isStandardBrowserEnv()
      ? {
          write: function (t, e, n, r, o, a) {
            var s = [];
            s.push(t + "=" + encodeURIComponent(e)),
              i.isNumber(n) && s.push("expires=" + new Date(n).toGMTString()),
              i.isString(r) && s.push("path=" + r),
              i.isString(o) && s.push("domain=" + o),
              !0 === a && s.push("secure"),
              (document.cookie = s.join("; "));
          },
          read: function (t) {
            var e = document.cookie.match(
              new RegExp("(^|;\\s*)(" + t + ")=([^;]*)")
            );
            return e ? decodeURIComponent(e[3]) : null;
          },
          remove: function (t) {
            this.write(t, "", Date.now() - 864e5);
          },
        }
      : {
          write: function () {},
          read: function () {
            return null;
          },
          remove: function () {},
        };
  },
  function (t, e, n) {
    "use strict";
    var i = n(191);
    function r(t) {
      if ("function" != typeof t)
        throw new TypeError("executor must be a function.");
      var e;
      this.promise = new Promise(function (t) {
        e = t;
      });
      var n = this;
      t(function (t) {
        n.reason || ((n.reason = new i(t)), e(n.reason));
      });
    }
    (r.prototype.throwIfRequested = function () {
      if (this.reason) throw this.reason;
    }),
      (r.source = function () {
        var t;
        return {
          token: new r(function (e) {
            t = e;
          }),
          cancel: t,
        };
      }),
      (t.exports = r);
  },
  function (t, e, n) {
    "use strict";
    t.exports = function (t) {
      return function (e) {
        return t.apply(null, e);
      };
    };
  },
  function (t, e, n) {
    var i = {
      "./af": 193,
      "./af.js": 193,
      "./ar": 194,
      "./ar-dz": 195,
      "./ar-dz.js": 195,
      "./ar-kw": 196,
      "./ar-kw.js": 196,
      "./ar-ly": 197,
      "./ar-ly.js": 197,
      "./ar-ma": 198,
      "./ar-ma.js": 198,
      "./ar-ps": 199,
      "./ar-ps.js": 199,
      "./ar-sa": 200,
      "./ar-sa.js": 200,
      "./ar-tn": 201,
      "./ar-tn.js": 201,
      "./ar.js": 194,
      "./az": 202,
      "./az.js": 202,
      "./be": 203,
      "./be.js": 203,
      "./bg": 204,
      "./bg.js": 204,
      "./bm": 205,
      "./bm.js": 205,
      "./bn": 206,
      "./bn-bd": 207,
      "./bn-bd.js": 207,
      "./bn.js": 206,
      "./bo": 208,
      "./bo.js": 208,
      "./br": 209,
      "./br.js": 209,
      "./bs": 210,
      "./bs.js": 210,
      "./ca": 211,
      "./ca.js": 211,
      "./cs": 212,
      "./cs.js": 212,
      "./cv": 213,
      "./cv.js": 213,
      "./cy": 214,
      "./cy.js": 214,
      "./da": 215,
      "./da.js": 215,
      "./de": 216,
      "./de-at": 217,
      "./de-at.js": 217,
      "./de-ch": 218,
      "./de-ch.js": 218,
      "./de.js": 216,
      "./dv": 219,
      "./dv.js": 219,
      "./el": 220,
      "./el.js": 220,
      "./en-au": 221,
      "./en-au.js": 221,
      "./en-ca": 222,
      "./en-ca.js": 222,
      "./en-gb": 223,
      "./en-gb.js": 223,
      "./en-ie": 224,
      "./en-ie.js": 224,
      "./en-il": 225,
      "./en-il.js": 225,
      "./en-in": 226,
      "./en-in.js": 226,
      "./en-nz": 227,
      "./en-nz.js": 227,
      "./en-sg": 228,
      "./en-sg.js": 228,
      "./eo": 229,
      "./eo.js": 229,
      "./es": 230,
      "./es-do": 231,
      "./es-do.js": 231,
      "./es-mx": 232,
      "./es-mx.js": 232,
      "./es-us": 233,
      "./es-us.js": 233,
      "./es.js": 230,
      "./et": 234,
      "./et.js": 234,
      "./eu": 235,
      "./eu.js": 235,
      "./fa": 236,
      "./fa.js": 236,
      "./fi": 237,
      "./fi.js": 237,
      "./fil": 238,
      "./fil.js": 238,
      "./fo": 239,
      "./fo.js": 239,
      "./fr": 240,
      "./fr-ca": 241,
      "./fr-ca.js": 241,
      "./fr-ch": 242,
      "./fr-ch.js": 242,
      "./fr.js": 240,
      "./fy": 243,
      "./fy.js": 243,
      "./ga": 244,
      "./ga.js": 244,
      "./gd": 245,
      "./gd.js": 245,
      "./gl": 246,
      "./gl.js": 246,
      "./gom-deva": 247,
      "./gom-deva.js": 247,
      "./gom-latn": 248,
      "./gom-latn.js": 248,
      "./gu": 249,
      "./gu.js": 249,
      "./he": 250,
      "./he.js": 250,
      "./hi": 251,
      "./hi.js": 251,
      "./hr": 252,
      "./hr.js": 252,
      "./hu": 253,
      "./hu.js": 253,
      "./hy-am": 254,
      "./hy-am.js": 254,
      "./id": 255,
      "./id.js": 255,
      "./is": 256,
      "./is.js": 256,
      "./it": 257,
      "./it-ch": 258,
      "./it-ch.js": 258,
      "./it.js": 257,
      "./ja": 259,
      "./ja.js": 259,
      "./jv": 260,
      "./jv.js": 260,
      "./ka": 261,
      "./ka.js": 261,
      "./kk": 262,
      "./kk.js": 262,
      "./km": 263,
      "./km.js": 263,
      "./kn": 264,
      "./kn.js": 264,
      "./ko": 265,
      "./ko.js": 265,
      "./ku": 266,
      "./ku-kmr": 267,
      "./ku-kmr.js": 267,
      "./ku.js": 266,
      "./ky": 268,
      "./ky.js": 268,
      "./lb": 269,
      "./lb.js": 269,
      "./lo": 270,
      "./lo.js": 270,
      "./lt": 271,
      "./lt.js": 271,
      "./lv": 272,
      "./lv.js": 272,
      "./me": 273,
      "./me.js": 273,
      "./mi": 274,
      "./mi.js": 274,
      "./mk": 275,
      "./mk.js": 275,
      "./ml": 276,
      "./ml.js": 276,
      "./mn": 277,
      "./mn.js": 277,
      "./mr": 278,
      "./mr.js": 278,
      "./ms": 279,
      "./ms-my": 280,
      "./ms-my.js": 280,
      "./ms.js": 279,
      "./mt": 281,
      "./mt.js": 281,
      "./my": 282,
      "./my.js": 282,
      "./nb": 283,
      "./nb.js": 283,
      "./ne": 284,
      "./ne.js": 284,
      "./nl": 285,
      "./nl-be": 286,
      "./nl-be.js": 286,
      "./nl.js": 285,
      "./nn": 287,
      "./nn.js": 287,
      "./oc-lnc": 288,
      "./oc-lnc.js": 288,
      "./pa-in": 289,
      "./pa-in.js": 289,
      "./pl": 290,
      "./pl.js": 290,
      "./pt": 291,
      "./pt-br": 292,
      "./pt-br.js": 292,
      "./pt.js": 291,
      "./ro": 293,
      "./ro.js": 293,
      "./ru": 294,
      "./ru.js": 294,
      "./sd": 295,
      "./sd.js": 295,
      "./se": 296,
      "./se.js": 296,
      "./si": 297,
      "./si.js": 297,
      "./sk": 298,
      "./sk.js": 298,
      "./sl": 299,
      "./sl.js": 299,
      "./sq": 300,
      "./sq.js": 300,
      "./sr": 301,
      "./sr-cyrl": 302,
      "./sr-cyrl.js": 302,
      "./sr.js": 301,
      "./ss": 303,
      "./ss.js": 303,
      "./sv": 304,
      "./sv.js": 304,
      "./sw": 305,
      "./sw.js": 305,
      "./ta": 306,
      "./ta.js": 306,
      "./te": 307,
      "./te.js": 307,
      "./tet": 308,
      "./tet.js": 308,
      "./tg": 309,
      "./tg.js": 309,
      "./th": 310,
      "./th.js": 310,
      "./tk": 311,
      "./tk.js": 311,
      "./tl-ph": 312,
      "./tl-ph.js": 312,
      "./tlh": 313,
      "./tlh.js": 313,
      "./tr": 314,
      "./tr.js": 314,
      "./tzl": 315,
      "./tzl.js": 315,
      "./tzm": 316,
      "./tzm-latn": 317,
      "./tzm-latn.js": 317,
      "./tzm.js": 316,
      "./ug-cn": 318,
      "./ug-cn.js": 318,
      "./uk": 319,
      "./uk.js": 319,
      "./ur": 320,
      "./ur.js": 320,
      "./uz": 321,
      "./uz-latn": 322,
      "./uz-latn.js": 322,
      "./uz.js": 321,
      "./vi": 323,
      "./vi.js": 323,
      "./x-pseudo": 324,
      "./x-pseudo.js": 324,
      "./yo": 325,
      "./yo.js": 325,
      "./zh-cn": 326,
      "./zh-cn.js": 326,
      "./zh-hk": 327,
      "./zh-hk.js": 327,
      "./zh-mo": 328,
      "./zh-mo.js": 328,
      "./zh-tw": 329,
      "./zh-tw.js": 329,
    };
    function r(t) {
      var e = o(t);
      return n(e);
    }
    function o(t) {
      if (!n.o(i, t)) {
        var e = new Error("Cannot find module '" + t + "'");
        throw ((e.code = "MODULE_NOT_FOUND"), e);
      }
      return i[t];
    }
    (r.keys = function () {
      return Object.keys(i);
    }),
      (r.resolve = o),
      (t.exports = r),
      (r.id = 536);
  },
  function (t, e, n) {
    (window._ = n(331)), window._.noConflict();
    try {
      (window.moment = n(16)),
        (window.Snackbar = n(538)),
        (window.Tipped = n(539)),
        n(540);
    } catch (t) {}
    (window.axios = n(347)),
      (window.axios.defaults.headers.common["Content-Type"] =
        "application/json;charset=UTF-8"),
      (window.axios.defaults.headers.common.Accept = "application/json"),
      void 0 !== window.wpApiSettings &&
        void 0 !== window.wpApiSettings.nonce &&
        (window.axios.defaults.headers.common["X-WP-Nonce"] =
          window.wpApiSettings.nonce),
      (window.pluginBASEURL = ""),
      (window.pluginPREFIX = ""),
      (window.pluginMediaPath = ""),
      void 0 !== document.getElementsByTagName("meta").pluginBASEURL &&
        (window.pluginBASEURL =
          document.getElementsByTagName("meta").pluginBASEURL.content),
      void 0 !== document.getElementsByTagName("meta").pluginPREFIX &&
        (window.pluginPREFIX =
          document.getElementsByTagName("meta").pluginPREFIX.content),
      void 0 !== document.getElementsByTagName("meta").pluginMediaPath &&
        (window.pluginMediaPath =
          document.getElementsByTagName("meta").pluginMediaPath.content);
  },
  function (t, e, n) {
    var i;
    !(function (n, r) {
      "use strict";
      void 0 ===
        (i = function () {
          return (n.Snackbar = (function () {
            var t = { current: null },
              e = {
                text: "Default Text",
                textColor: "#FFFFFF",
                width: "auto",
                showAction: !0,
                actionText: "Dismiss",
                actionTextAria: "Dismiss, Description for Screen Readers",
                alertScreenReader: !1,
                actionTextColor: "#4CAF50",
                showSecondButton: !1,
                secondButtonText: "",
                secondButtonAria: "Description for Screen Readers",
                secondButtonTextColor: "#4CAF50",
                backgroundColor: "#323232",
                pos: "bottom-left",
                duration: 5e3,
                customClass: "",
                onActionClick: function (t) {
                  t.style.opacity = 0;
                },
                onSecondButtonClick: function (t) {},
                onClose: function (t) {},
              };
            (t.show = function (i) {
              var r = n(!0, e, i);
              t.current &&
                ((t.current.style.opacity = 0),
                setTimeout(
                  function () {
                    var t = this.parentElement;
                    t && t.removeChild(this);
                  }.bind(t.current),
                  500
                )),
                (t.snackbar = document.createElement("div")),
                (t.snackbar.className = "snackbar-container " + r.customClass),
                (t.snackbar.style.width = r.width);
              var o = document.createElement("p");
              if (
                ((o.style.margin = 0),
                (o.style.padding = 0),
                (o.style.color = r.textColor),
                (o.style.fontSize = "14px"),
                (o.style.fontWeight = 300),
                (o.style.lineHeight = "1em"),
                (o.innerHTML = r.text),
                t.snackbar.appendChild(o),
                (t.snackbar.style.background = r.backgroundColor),
                r.showSecondButton)
              ) {
                var a = document.createElement("button");
                (a.className = "action"),
                  (a.innerHTML = r.secondButtonText),
                  a.setAttribute("aria-label", r.secondButtonAria),
                  (a.style.color = r.secondButtonTextColor),
                  a.addEventListener("click", function () {
                    r.onSecondButtonClick(t.snackbar);
                  }),
                  t.snackbar.appendChild(a);
              }
              if (r.showAction) {
                var s = document.createElement("button");
                (s.className = "action"),
                  (s.innerHTML = r.actionText),
                  s.setAttribute("aria-label", r.actionTextAria),
                  (s.style.color = r.actionTextColor),
                  s.addEventListener("click", function () {
                    r.onActionClick(t.snackbar);
                  }),
                  t.snackbar.appendChild(s);
              }
              r.duration &&
                setTimeout(
                  function () {
                    t.current === this &&
                      ((t.current.style.opacity = 0),
                      (t.current.style.top = "-100px"),
                      (t.current.style.bottom = "-100px"));
                  }.bind(t.snackbar),
                  r.duration
                ),
                r.alertScreenReader && t.snackbar.setAttribute("role", "alert"),
                t.snackbar.addEventListener(
                  "transitionend",
                  function (e, n) {
                    "opacity" === e.propertyName &&
                      "0" === this.style.opacity &&
                      ("function" == typeof r.onClose && r.onClose(this),
                      this.parentElement.removeChild(this),
                      t.current === this && (t.current = null));
                  }.bind(t.snackbar)
                ),
                (t.current = t.snackbar),
                document.body.appendChild(t.snackbar),
                getComputedStyle(t.snackbar).bottom,
                getComputedStyle(t.snackbar).top,
                (t.snackbar.style.opacity = 1),
                (t.snackbar.className =
                  "snackbar-container " +
                  r.customClass +
                  " snackbar-pos " +
                  r.pos);
            }),
              (t.close = function () {
                t.current && (t.current.style.opacity = 0);
              });
            var n = function () {
              var t = {},
                e = !1,
                i = 0,
                r = arguments.length;
              "[object Boolean]" ===
                Object.prototype.toString.call(arguments[0]) &&
                ((e = arguments[0]), i++);
              for (
                var o = function (i) {
                  for (var r in i)
                    Object.prototype.hasOwnProperty.call(i, r) &&
                      (e &&
                      "[object Object]" === Object.prototype.toString.call(i[r])
                        ? (t[r] = n(!0, t[r], i[r]))
                        : (t[r] = i[r]));
                };
                i < r;
                i++
              ) {
                var a = arguments[i];
                o(a);
              }
              return t;
            };
            return t;
          })());
        }.apply(e, [])) || (t.exports = i);
    })(this);
  },
  function (module, exports, __webpack_require__) {
    (function (jQuery) {
      var __WEBPACK_AMD_DEFINE_FACTORY__,
        __WEBPACK_AMD_DEFINE_ARRAY__,
        __WEBPACK_AMD_DEFINE_RESULT__,
        factory;
      (factory = function ($) {
        var Tipped = {};
        $.extend(Tipped, { version: "4.8.1" }),
          (Tipped.Skins = {
            base: {
              afterUpdate: !1,
              ajax: {},
              cache: !0,
              container: !1,
              containment: { selector: "viewport", padding: 5 },
              close: !1,
              detach: !0,
              fadeIn: 200,
              fadeOut: 200,
              showDelay: 75,
              hideDelay: 25,
              hideAfter: !1,
              hideOn: { element: "mouseleave" },
              hideOthers: !1,
              position: "top",
              inline: !1,
              offset: { x: 0, y: 0 },
              onHide: !1,
              onShow: !1,
              padding: !0,
              radius: !0,
              shadow: !0,
              showOn: { element: "mousemove" },
              size: "medium",
              spinner: !0,
              stem: !0,
              target: "element",
              voila: !0,
            },
            reset: {
              ajax: !1,
              hideOn: { element: "mouseleave", tooltip: "mouseleave" },
              showOn: { element: "mouseenter", tooltip: "mouseenter" },
            },
          }),
          $.each(
            "dark light gray red green blue lightyellow lightblue lightpink".split(
              " "
            ),
            function (t, e) {
              Tipped.Skins[e] = {};
            }
          );
        var Browser = (function (t) {
            function e(e) {
              var n = new RegExp(e + "([\\d.]+)").exec(t);
              return !n || parseFloat(n[1]);
            }
            return {
              IE:
                !(!window.attachEvent || -1 !== t.indexOf("Opera")) &&
                e("MSIE "),
              Opera:
                t.indexOf("Opera") > -1 &&
                ((!!window.opera &&
                  opera.version &&
                  parseFloat(opera.version())) ||
                  7.55),
              WebKit: t.indexOf("AppleWebKit/") > -1 && e("AppleWebKit/"),
              Gecko:
                t.indexOf("Gecko") > -1 &&
                -1 === t.indexOf("KHTML") &&
                e("rv:"),
              MobileSafari: !!t.match(/Apple.*Mobile.*Safari/),
              Chrome: t.indexOf("Chrome") > -1 && e("Chrome/"),
              ChromeMobile: t.indexOf("CrMo") > -1 && e("CrMo/"),
              Android: t.indexOf("Android") > -1 && e("Android "),
              IEMobile: t.indexOf("IEMobile") > -1 && e("IEMobile/"),
            };
          })(navigator.userAgent),
          Support = (function () {
            var t = document.createElement("div"),
              e = "Webkit Moz O ms Khtml".split(" ");
            function n(n, i) {
              var r = n.charAt(0).toUpperCase() + n.substr(1);
              return (function (e, n) {
                for (var i in e)
                  if (void 0 !== t.style[e[i]]) return "prefix" !== n || e[i];
                return !1;
              })((n + " " + e.join(r + " ") + r).split(" "), i);
            }
            return {
              css: {
                animation: n("animation"),
                transform: n("transform"),
                prefixed: function (t) {
                  return n(t, "prefix");
                },
              },
              shadow: n("boxShadow") && n("pointerEvents"),
              touch: (function () {
                try {
                  return !!(
                    "ontouchstart" in window ||
                    (window.DocumentTouch && document instanceof DocumentTouch)
                  );
                } catch (t) {
                  return !1;
                }
              })(),
            };
          })(),
          _slice = Array.prototype.slice,
          _ = {
            wrap: function (t, e) {
              var n = t;
              return function () {
                var t = [n.bind(this)].concat(_slice.call(arguments));
                return e.apply(this, t);
              };
            },
            isElement: function (t) {
              return t && 1 === t.nodeType;
            },
            isText: function (t) {
              return t && 3 === t.nodeType;
            },
            isDocumentFragment: function (t) {
              return t && 11 === t.nodeType;
            },
            delay: function (t, e) {
              var n = _slice.call(arguments, 2);
              return setTimeout(function () {
                return t.apply(t, n);
              }, e);
            },
            defer: function (t) {
              return _.delay.apply(
                this,
                [t, 1].concat(_slice.call(arguments, 1))
              );
            },
            pointer: function (t) {
              return { x: t.pageX, y: t.pageY };
            },
            element: {
              isAttached: function (t) {
                var e = (function (t) {
                  for (var e = t; e && e.parentNode; ) e = e.parentNode;
                  return e;
                })(t);
                return !(!e || !e.body);
              },
            },
          };
        function degrees(t) {
          return (180 * t) / Math.PI;
        }
        function radian(t) {
          return (t * Math.PI) / 180;
        }
        function sec(t) {
          return 1 / Math.cos(t);
        }
        function sfcc(t) {
          return String.fromCharCode.apply(
            String,
            t.replace(" ", "").split(",")
          );
        }
        function deepExtend(t, e) {
          for (var n in e)
            e[n] && e[n].constructor && e[n].constructor === Object
              ? ((t[n] = $.extend({}, t[n]) || {}), deepExtend(t[n], e[n]))
              : (t[n] = e[n]);
          return t;
        }
        var getUID =
            ((count = 0),
            function (t) {
              for (
                t = t || "_tipped-uid-", count++;
                document.getElementById(t + count);

              )
                count++;
              return t + count;
            }),
          count,
          Position = {
            positions: [
              "topleft",
              "topmiddle",
              "topright",
              "righttop",
              "rightmiddle",
              "rightbottom",
              "bottomright",
              "bottommiddle",
              "bottomleft",
              "leftbottom",
              "leftmiddle",
              "lefttop",
            ],
            regex: {
              toOrientation:
                /^(top|left|bottom|right)(top|left|bottom|right|middle|center)$/,
              horizontal: /^(top|bottom)/,
              isCenter: /(middle|center)/,
              side: /^(top|bottom|left|right)/,
            },
            toDimension:
              ((translate = {
                top: "height",
                left: "width",
                bottom: "height",
                right: "width",
              }),
              function (t) {
                return translate[t];
              }),
            isCenter: function (t) {
              return !!t.toLowerCase().match(this.regex.isCenter);
            },
            isCorner: function (t) {
              return !this.isCenter(t);
            },
            getOrientation: function (t) {
              return t.toLowerCase().match(this.regex.horizontal)
                ? "horizontal"
                : "vertical";
            },
            getSide: function (t) {
              var e = null,
                n = t.toLowerCase().match(this.regex.side);
              return n && n[1] && (e = n[1]), e;
            },
            split: function (t) {
              return t.toLowerCase().match(this.regex.toOrientation);
            },
            _flip: {
              top: "bottom",
              bottom: "top",
              left: "right",
              right: "left",
            },
            flip: function (t, e) {
              var n = this.split(t);
              return e
                ? this.inverseCornerPlane(this.flip(this.inverseCornerPlane(t)))
                : this._flip[n[1]] + n[2];
            },
            inverseCornerPlane: function (t) {
              if (Position.isCorner(t)) {
                var e = this.split(t);
                return e[2] + e[1];
              }
              return t;
            },
            adjustOffsetBasedOnPosition: function (t, e, n) {
              var i = $.extend({}, t),
                r = { horizontal: "x", vertical: "y" },
                o = Position.getOrientation(e);
              if (o === Position.getOrientation(n))
                Position.getSide(e) !== Position.getSide(n) &&
                  (i[{ x: "y", y: "x" }[r[o]]] *= -1);
              else {
                var a = i.x;
                (i.x = i.y), (i.y = a);
                var s = {
                  top: { right: "x" },
                  bottom: { left: "x" },
                  left: { bottom: "y" },
                  right: { top: "y" },
                }[Position.getSide(e)][Position.getSide(n)];
                s && (i[s] *= -1), (i[r[Position.getOrientation(n)]] = 0);
              }
              return i;
            },
            getBoxFromPoints: function (t, e, n, i) {
              var r = Math.min(t, n),
                o = Math.max(t, n),
                a = Math.min(e, i),
                s = Math.max(e, i);
              return {
                left: r,
                top: a,
                width: Math.max(o - r, 0),
                height: Math.max(s - a, 0),
              };
            },
            isPointWithinBox: function (t, e, n, i, r, o) {
              var a = this.getBoxFromPoints(n, i, r, o);
              return (
                t >= a.left &&
                t <= a.left + a.width &&
                e >= a.top &&
                e <= a.top + a.height
              );
            },
            isPointWithinBoxLayout: function (t, e, n) {
              return this.isPointWithinBox(
                t,
                e,
                n.position.left,
                n.position.top,
                n.position.left + n.dimensions.width,
                n.position.top + n.dimensions.height
              );
            },
            getDistance: function (t, e, n, i) {
              return Math.sqrt(
                Math.pow(Math.abs(n - t), 2) + Math.pow(Math.abs(i - e), 2)
              );
            },
            intersectsLine:
              ((ccw = function (t, e, n, i, r, o) {
                var a = (o - e) * (n - t) - (i - e) * (r - t);
                return a > 0 || !(a < 0);
              }),
              function (t, e, n, i, r, o, a, s, l) {
                return l
                  ? ((f =
                      ((u = a - r) * (e - o) - (p = s - o) * (t - r)) /
                      (-u * (d = i - e) + (c = n - t) * p)),
                    (h = (-d * (t - r) + c * (e - o)) / (-u * d + c * p)) >=
                      0 &&
                      h <= 1 &&
                      f >= 0 &&
                      f <= 1 && { x: t + f * c, y: e + f * d })
                  : ccw(t, e, r, o, a, s) != ccw(n, i, r, o, a, s) &&
                      ccw(t, e, n, i, r, o) != ccw(t, e, n, i, a, s);
                var c, d, u, p, h, f;
              }),
          },
          ccw,
          translate,
          Bounds = {
            viewport: function () {
              return Browser.MobileSafari || (Browser.Android && Browser.Gecko)
                ? { width: window.innerWidth, height: window.innerHeight }
                : { height: $(window).height(), width: $(window).width() };
            },
          },
          Mouse = {
            _buffer: { pageX: 0, pageY: 0 },
            _dimensions: { width: 30, height: 30 },
            _shift: { x: 2, y: 10 },
            getPosition: function (t) {
              var e = this.getActualPosition(t);
              return {
                left:
                  e.left -
                  Math.round(0.5 * this._dimensions.width) +
                  this._shift.x,
                top:
                  e.top -
                  Math.round(0.5 * this._dimensions.height) +
                  this._shift.y,
              };
            },
            getActualPosition: function (t) {
              var e = t && "number" == typeof t.pageX ? t : this._buffer;
              return { left: e.pageX, top: e.pageY };
            },
            getDimensions: function () {
              return this._dimensions;
            },
          },
          Color = (function () {
            var t = {
              _default: "#000000",
              aqua: "#00ffff",
              black: "#000000",
              blue: "#0000ff",
              fuchsia: "#ff00ff",
              gray: "#808080",
              green: "#008000",
              lime: "#00ff00",
              maroon: "#800000",
              navy: "#000080",
              olive: "#808000",
              purple: "#800080",
              red: "#ff0000",
              silver: "#c0c0c0",
              teal: "#008080",
              white: "#ffffff",
              yellow: "#ffff00",
            };
            function e(t) {
              return ("0" + parseInt(t).toString(16)).slice(-2);
            }
            function n(t) {
              return (
                "#" +
                e(
                  (t = t.match(
                    /^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+))?\)$/
                  ))[1]
                ) +
                e(t[2]) +
                e(t[3])
              );
            }
            return {
              toRGB: function (e) {
                if (/^rgba?\(/.test(e)) return n(e);
                t[e] && (e = t[e]);
                var i = e.replace("#", "");
                return /^(?:[0-9a-fA-F]{3}){1,2}$/.test(i)
                  ? (3 == i.length &&
                      (i =
                        i.charAt(0) +
                        i.charAt(0) +
                        i.charAt(1) +
                        i.charAt(1) +
                        i.charAt(2) +
                        i.charAt(2)),
                    "#" + i)
                  : t._default;
              },
            };
          })();
        function Spin() {
          return this.initialize.apply(this, _slice.call(arguments));
        }
        function Visible() {
          return this.initialize.apply(this, _slice.call(arguments));
        }
        (Spin.supported = Support.css.transform && Support.css.animation),
          $.extend(Spin.prototype, {
            initialize: function () {
              (this.options = $.extend({}, arguments[0] || {})),
                this.build(),
                this.start();
            },
            build: function () {
              var t = 2 * (this.options.length + this.options.radius),
                e = { height: t, width: t };
              (this.element = $("<div>").addClass("tpd-spin").css(e)),
                this.element.append(
                  (this._rotate = $("<div>").addClass("tpd-spin-rotate"))
                ),
                this.element.css({
                  "margin-left": -0.5 * e.width,
                  "margin-top": -0.5 * e.height,
                });
              for (var n = this.options.lines, i = 0; i < n; i++) {
                var r, o;
                this._rotate.append(
                  (r = $("<div>")
                    .addClass("tpd-spin-frame")
                    .append((o = $("<div>").addClass("tpd-spin-line"))))
                ),
                  o.css({
                    "background-color": this.options.color,
                    width: this.options.width,
                    height: this.options.length,
                    "margin-left": -0.5 * this.options.width,
                    "border-radius": Math.round(0.5 * this.options.width),
                  }),
                  r.css({ opacity: ((1 / n) * (i + 1)).toFixed(2) });
                var a = {};
                (a[Support.css.prefixed("transform")] =
                  "rotate(" + (360 / n) * (i + 1) + "deg)"),
                  r.css(a);
              }
            },
            start: function () {
              var t = {};
              (t[Support.css.prefixed("animation")] =
                "tpd-spin 1s infinite steps(" + this.options.lines + ")"),
                this._rotate.css(t);
            },
            stop: function () {
              var t = {};
              (t[Support.css.prefixed("animation")] = "none"),
                this._rotate.css(t),
                this.element.detach();
            },
          }),
          $.extend(Visible.prototype, {
            initialize: function (t) {
              return (
                (t = Array.isArray(t) ? t : [t]),
                (this.elements = t),
                (this._restore = []),
                $.each(
                  t,
                  function (t, e) {
                    var n = $(e).is(":visible");
                    n || $(e).show(),
                      this._restore.push({ element: e, visible: n });
                  }.bind(this)
                ),
                this
              );
            },
            restore: function () {
              $.each(this._restore, function (t, e) {
                e.visible || $(e.element).show();
              }),
                (this._restore = null);
            },
          });
        var AjaxCache =
            ((cache = []),
            {
              get: function (t) {
                for (var e = null, n = 0; n < cache.length; n++)
                  cache[n] &&
                    cache[n].url === t.url &&
                    (cache[n].type || "GET").toUpperCase() ===
                      (t.type || "GET").toUpperCase() &&
                    $.param(cache[n].data || {}) === $.param(t.data || {}) &&
                    (e = cache[n]);
                return e;
              },
              set: function (t, e, n) {
                var i = this.get(t);
                i || ((i = $.extend({ callbacks: {} }, t)), cache.push(i)),
                  (i.callbacks[e] = n);
              },
              remove: function (t) {
                for (var e = 0; e < cache.length; e++)
                  cache[e] && cache[e].url === t && delete cache[e];
              },
              clear: function () {
                cache = [];
              },
            }),
          cache,
          Voila = (function (t) {
            function e(n, i, r) {
              if (!(this instanceof e)) return new e(n, i, r);
              var o = typeof arguments[1],
                a = "object" === o ? arguments[1] : {},
                s =
                  "function" === o
                    ? arguments[1]
                    : "function" == typeof arguments[2] && arguments[2];
              return (
                (this.options = t.extend({ method: "onload" }, a)),
                (this.deferred = new jQuery.Deferred()),
                s && this.always(s),
                (this._processed = 0),
                (this.images = []),
                this._add(n),
                this
              );
            }
            t.extend(e.prototype, {
              _add: function (e) {
                var i =
                  "string" == typeof e
                    ? t(e)
                    : e instanceof jQuery || e.length > 0
                    ? e
                    : [e];
                t.each(
                  i,
                  function (e, i) {
                    var r = t(),
                      o = t(i);
                    (r = o.is("img") ? r.add(o) : r.add(o.find("img"))).each(
                      function (t, e) {
                        this.images.push(
                          new n(
                            e,
                            function (t) {
                              this._progress(t);
                            }.bind(this),
                            function (t) {
                              this._progress(t);
                            }.bind(this),
                            this.options
                          )
                        );
                      }.bind(this)
                    );
                  }.bind(this)
                ),
                  this.images.length < 1 &&
                    setTimeout(
                      function () {
                        this._resolve();
                      }.bind(this)
                    );
              },
              abort: function () {
                (this._progress =
                  this._notify =
                  this._reject =
                  this._resolve =
                    function () {}),
                  t.each(this.images, function (t, e) {
                    e.abort();
                  }),
                  (this.images = []);
              },
              _progress: function (t) {
                this._processed++,
                  t.isLoaded || (this._broken = !0),
                  this._notify(t),
                  this._processed === this.images.length &&
                    this[this._broken ? "_reject" : "_resolve"]();
              },
              _notify: function (t) {
                this.deferred.notify(this, t);
              },
              _reject: function () {
                this.deferred.reject(this);
              },
              _resolve: function () {
                this.deferred.resolve(this);
              },
              always: function (t) {
                return this.deferred.always(t), this;
              },
              done: function (t) {
                return this.deferred.done(t), this;
              },
              fail: function (t) {
                return this.deferred.fail(t), this;
              },
              progress: function (t) {
                return this.deferred.progress(t), this;
              },
            });
            var n = (function (t) {
              var e = function () {
                return this.initialize.apply(
                  this,
                  Array.prototype.slice.call(arguments)
                );
              };
              t.extend(e.prototype, {
                initialize: function () {
                  (this.options = t.extend(
                    {
                      test: function () {},
                      success: function () {},
                      timeout: function () {},
                      callAt: !1,
                      intervals: [
                        [0, 0],
                        [1e3, 10],
                        [2e3, 50],
                        [4e3, 100],
                        [2e4, 500],
                      ],
                    },
                    arguments[0] || {}
                  )),
                    (this._test = this.options.test),
                    (this._success = this.options.success),
                    (this._timeout = this.options.timeout),
                    (this._ipos = 0),
                    (this._time = 0),
                    (this._delay = this.options.intervals[this._ipos][1]),
                    (this._callTimeouts = []),
                    this.poll(),
                    this._createCallsAt();
                },
                poll: function () {
                  this._polling = setTimeout(
                    function () {
                      if (this._test()) this.success();
                      else {
                        if (
                          ((this._time += this._delay),
                          this._time >= this.options.intervals[this._ipos][0])
                        ) {
                          if (!this.options.intervals[this._ipos + 1])
                            return void (
                              "function" == typeof this._timeout &&
                              this._timeout()
                            );
                          this._ipos++,
                            (this._delay =
                              this.options.intervals[this._ipos][1]);
                        }
                        this.poll();
                      }
                    }.bind(this),
                    this._delay
                  );
                },
                success: function () {
                  this.abort(), this._success();
                },
                _createCallsAt: function () {
                  this.options.callAt &&
                    t.each(
                      this.options.callAt,
                      function (t, e) {
                        var n = e[0],
                          i = e[1],
                          r = setTimeout(
                            function () {
                              i();
                            }.bind(this),
                            n
                          );
                        this._callTimeouts.push(r);
                      }.bind(this)
                    );
                },
                _stopCallTimeouts: function () {
                  t.each(this._callTimeouts, function (t, e) {
                    clearTimeout(e);
                  }),
                    (this._callTimeouts = []);
                },
                abort: function () {
                  this._stopCallTimeouts(),
                    this._polling &&
                      (clearTimeout(this._polling), (this._polling = null));
                },
              });
              var n = function () {
                return this.initialize.apply(
                  this,
                  Array.prototype.slice.call(arguments)
                );
              };
              return (
                t.extend(n.prototype, {
                  supports: { naturalWidth: "naturalWidth" in new Image() },
                  initialize: function (e, n, i) {
                    (this.img = t(e)[0]),
                      (this.successCallback = n),
                      (this.errorCallback = i),
                      (this.isLoaded = !1),
                      (this.options = t.extend(
                        { method: "onload", pollFallbackAfter: 1e3 },
                        arguments[3] || {}
                      )),
                      "onload" != this.options.method &&
                      this.supports.naturalWidth
                        ? this.poll()
                        : this.load();
                  },
                  poll: function () {
                    this._poll = new e({
                      test: function () {
                        return this.img.naturalWidth > 0;
                      }.bind(this),
                      success: function () {
                        this.success();
                      }.bind(this),
                      timeout: function () {
                        this.error();
                      }.bind(this),
                      callAt: [
                        [
                          this.options.pollFallbackAfter,
                          function () {
                            this.load();
                          }.bind(this),
                        ],
                      ],
                    });
                  },
                  load: function () {
                    this._loading = setTimeout(
                      function () {
                        var t = new Image();
                        (this._onloadImage = t),
                          (t.onload = function () {
                            (t.onload = function () {}),
                              this.supports.naturalWidth ||
                                ((this.img.naturalWidth = t.width),
                                (this.img.naturalHeight = t.height),
                                (t.naturalWidth = t.width),
                                (t.naturalHeight = t.height)),
                              this.success();
                          }.bind(this)),
                          (t.onerror = this.error.bind(this)),
                          (t.src = this.img.src);
                      }.bind(this)
                    );
                  },
                  success: function () {
                    this._calledSuccess ||
                      ((this._calledSuccess = !0),
                      this.abort(),
                      this.waitForRender(
                        function () {
                          (this.isLoaded = !0), this.successCallback(this);
                        }.bind(this)
                      ));
                  },
                  error: function () {
                    this._calledError ||
                      ((this._calledError = !0),
                      this.abort(),
                      (this._errorRenderTimeout = setTimeout(
                        function () {
                          this.errorCallback && this.errorCallback(this);
                        }.bind(this)
                      )));
                  },
                  abort: function () {
                    this.stopLoading(),
                      this.stopPolling(),
                      this.stopWaitingForRender();
                  },
                  stopPolling: function () {
                    this._poll && (this._poll.abort(), (this._poll = null));
                  },
                  stopLoading: function () {
                    this._loading &&
                      (clearTimeout(this._loading), (this._loading = null)),
                      this._onloadImage &&
                        ((this._onloadImage.onload = function () {}),
                        (this._onloadImage.onerror = function () {}));
                  },
                  waitForRender: function (t) {
                    this._renderTimeout = setTimeout(t);
                  },
                  stopWaitingForRender: function () {
                    this._renderTimeout &&
                      (clearTimeout(this._renderTimeout),
                      (this._renderTimeout = null)),
                      this._errorRenderTimeout &&
                        (clearTimeout(this._errorRenderTimeout),
                        (this._errorRenderTimeout = null));
                  },
                }),
                n
              );
            })(jQuery);
            return e;
          })(jQuery);
        Tipped.Behaviors = {
          hide: {
            showOn: { element: "mouseenter", tooltip: !1 },
            hideOn: { element: "mouseleave", tooltip: "mouseenter" },
          },
          mouse: {
            showOn: { element: "mouseenter", tooltip: !1 },
            hideOn: { element: "mouseleave", tooltip: "mouseenter" },
            target: "mouse",
            showDelay: 100,
            fadeIn: 0,
            hideDelay: 0,
            fadeOut: 0,
          },
          sticky: {
            showOn: { element: "mouseenter", tooltip: "mouseenter" },
            hideOn: { element: "mouseleave", tooltip: "mouseleave" },
            showDelay: 150,
            target: "mouse",
            fixed: !0,
          },
        };
        var Options = {
          create: (function () {
            var t, e;
            function n(i) {
              return (
                (t = Tipped.Skins.base),
                (e = deepExtend($.extend({}, t), Tipped.Skins.reset)),
                (n = o),
                o(i)
              );
            }
            function i(t) {
              return (
                t.match(/^(top|left|bottom|right)$/) && (t += "middle"),
                t.replace("center", "middle").replace(" ", ""),
                t
              );
            }
            function r(t) {
              var e;
              return t.behavior && (e = Tipped.Behaviors[t.behavior])
                ? deepExtend($.extend({}, e), t)
                : t;
            }
            function o(n) {
              var o = n.skin ? n.skin : Tooltips.options.defaultSkin,
                a = $.extend({}, Tipped.Skins[o] || {});
              a.skin || (a.skin = Tooltips.options.defaultSkin || "dark");
              var s,
                l = deepExtend($.extend({}, e), r(a)),
                c = deepExtend($.extend({}, l), r(n));
              if (c.ajax) {
                e.ajax;
                var d = t.ajax;
                "boolean" == typeof c.ajax && (c.ajax = {}),
                  (c.ajax = deepExtend($.extend({}, d), c.ajax));
              }
              var u = (u =
                (c.position && c.position.target) ||
                ("string" == typeof c.position && c.position) ||
                (e.position && e.position.target) ||
                ("string" == typeof e.position && e.position) ||
                (t.position && t.position.target) ||
                t.position);
              u = i(u);
              var p,
                h =
                  (c.position && c.position.tooltip) ||
                  (e.position && e.position.tooltip) ||
                  (t.position && t.position.tooltip) ||
                  Tooltips.Position.getInversedPosition(u);
              if (
                ((h = i(h)),
                c.position
                  ? "string" == typeof c.position
                    ? ((c.position = i(c.position)),
                      (s = {
                        target: c.position,
                        tooltip: Tooltips.Position.getTooltipPositionFromTarget(
                          c.position
                        ),
                      }))
                    : ((s = { tooltip: h, target: u }),
                      c.position.tooltip && (s.tooltip = i(c.position.tooltip)),
                      c.position.target && (s.target = i(c.position.target)))
                  : (s = { tooltip: h, target: u }),
                Position.isCorner(s.target) &&
                  Position.getOrientation(s.target) !==
                    Position.getOrientation(s.tooltip) &&
                  (s.target = Position.inverseCornerPlane(s.target)),
                "mouse" === c.target)
              ) {
                var f = Position.getOrientation(s.target);
                s.target =
                  "horizontal" === f
                    ? s.target.replace(/(left|right)/, "middle")
                    : s.target.replace(/(top|bottom)/, "middle");
              }
              if (
                ((c.position = s),
                "mouse" === c.target
                  ? ((p = $.extend({}, t.offset)),
                    $.extend(p, Tipped.Skins.reset.offset || {}),
                    n.skin &&
                      $.extend(
                        p,
                        (
                          Tipped.Skins[n.skin] ||
                          Tipped.Skins[Tooltips.options.defaultSkin] ||
                          {}
                        ).offset || {}
                      ),
                    (p = Position.adjustOffsetBasedOnPosition(
                      t.offset,
                      t.position,
                      s.target,
                      !0
                    )),
                    n.offset && (p = $.extend(p, n.offset || {})))
                  : (p = { x: c.offset.x, y: c.offset.y }),
                (c.offset = p),
                c.hideOn &&
                  "click-outside" === c.hideOn &&
                  ((c.hideOnClickOutside = !0),
                  (c.hideOn = !1),
                  (c.fadeOut = 0)),
                c.showOn)
              ) {
                var b = c.showOn;
                "string" == typeof b && (b = { element: b }), (c.showOn = b);
              }
              if (c.hideOn) {
                var m = c.hideOn;
                "string" == typeof m && (m = { element: m }), (c.hideOn = m);
              }
              return (
                c.inline && "string" != typeof c.inline && (c.inline = !1),
                Browser.IE &&
                  Browser.IE < 9 &&
                  $.extend(c, { fadeIn: 0, fadeOut: 0, hideDelay: 0 }),
                c.spinner &&
                  (Spin.supported
                    ? "boolean" == typeof c.spinner &&
                      (c.spinner = e.spinner || t.spinner || {})
                    : (c.spinner = !1)),
                c.container || (c.container = document.body),
                c.containment &&
                  "string" == typeof c.containment &&
                  (c.containment = {
                    selector: c.containment,
                    padding:
                      (e.containment && e.containment.padding) ||
                      (t.padding && t.containment.padding),
                  }),
                c.shadow && (c.shadow = Support.shadow),
                c
              );
            }
            return n;
          })(),
        };
        function Skin() {
          this.initialize.apply(this, _slice.call(arguments));
        }
        function Stem() {
          this.initialize.apply(this, _slice.call(arguments));
        }
        $.extend(Skin.prototype, {
          initialize: function (t) {
            (this.tooltip = t), (this.element = t._skin);
            var e,
              n,
              i,
              r,
              o = this.tooltip.options;
            this.tooltip._tooltip[(o.shadow ? "remove" : "add") + "Class"](
              "tpd-no-shadow"
            )
              [(o.radius ? "remove" : "add") + "Class"]("tpd-no-radius")
              [(o.stem ? "remove" : "add") + "Class"]("tpd-no-stem");
            var a = Support.css.prefixed("borderTopLeftRadius");
            this.element
              .append(
                (e = $("<div>")
                  .addClass("tpd-frames")
                  .append(
                    $("<div>")
                      .addClass("tpd-frame")
                      .append(
                        $("<div>")
                          .addClass("tpd-backgrounds")
                          .append(
                            (n = $("<div>")
                              .addClass("tpd-background")
                              .append(
                                (i = $("<div>").addClass(
                                  "tpd-background-content"
                                ))
                              ))
                          )
                      )
                  ))
              )
              .append((r = $("<div>").addClass("tpd-spinner"))),
              n.css({ width: 999, height: 999, zoom: 1 }),
              (this._css = {
                border: parseFloat(n.css("border-top-width")),
                radius: parseFloat(a ? n.css(a) : 0),
                padding: parseFloat(t._content.css("padding-top")),
                borderColor: n.css("border-top-color"),
                backgroundColor: i.css("background-color"),
                backgroundOpacity: i.css("opacity"),
                spinner: {
                  dimensions: {
                    width: r.innerWidth(),
                    height: r.innerHeight(),
                  },
                },
              }),
              r.remove(),
              e.remove(),
              (this._side =
                Position.getSide(t.options.position.tooltip) || "top"),
              (this._vars = {});
          },
          destroy: function () {
            this.frames &&
              ($.each(
                "top right bottom left".split(" "),
                function (t, e) {
                  this["stem_" + e] && this["stem_" + e].destroy();
                }.bind(this)
              ),
              this.frames.remove(),
              (this.frames = null));
          },
          build: function () {
            this.frames ||
              (this.element.append(
                (this.frames = $("<div>").addClass("tpd-frames"))
              ),
              $.each(
                "top right bottom left".split(" "),
                function (t, e) {
                  this.insertFrame(e);
                }.bind(this)
              ),
              this._spinner ||
                this.tooltip._tooltip.append(
                  (this._spinner = $("<div>")
                    .addClass("tpd-spinner")
                    .hide()
                    .append($("<div>").addClass("tpd-spinner-spin")))
                ));
          },
          _frame: (function () {
            var t,
              e = $("<div>")
                .addClass("tpd-frame")
                .append(
                  (t = $("<div>")
                    .addClass("tpd-backgrounds")
                    .append($("<div>").addClass("tpd-background-shadow")))
                )
                .append(
                  $("<div>")
                    .addClass("tpd-shift-stem")
                    .append(
                      $("<div>").addClass(
                        "tpd-shift-stem-side tpd-shift-stem-side-before"
                      )
                    )
                    .append($("<div>").addClass("tpd-stem"))
                    .append(
                      $("<div>").addClass(
                        "tpd-shift-stem-side tpd-shift-stem-side-after"
                      )
                    )
                );
            return (
              $.each(
                "top right bottom left".split(" "),
                function (e, n) {
                  t.append(
                    $("<div>")
                      .addClass("tpd-background-box tpd-background-box-" + n)
                      .append(
                        $("<div>")
                          .addClass("tpd-background-box-shift")
                          .append(
                            $("<div>")
                              .addClass("tpd-background-box-shift-further")
                              .append(
                                $("<div>")
                                  .addClass("tpd-background")
                                  .append(
                                    $("<div>").addClass("tpd-background-title")
                                  )
                                  .append(
                                    $("<div>").addClass(
                                      "tpd-background-content"
                                    )
                                  )
                              )
                              .append(
                                $("<div>").addClass(
                                  "tpd-background tpd-background-loading"
                                )
                              )
                              .append(
                                $("<div>")
                                  .addClass("tpd-background-border-hack")
                                  .hide()
                              )
                          )
                      )
                  );
                }.bind(this)
              ),
              e
            );
          })(),
          _getFrame: function (t) {
            var e = this._frame.clone();
            e.addClass("tpd-frame-" + t),
              e
                .find(".tpd-background-shadow")
                .css({ "border-radius": this._css.radius }),
              this.tooltip.options.stem &&
                e.find(".tpd-stem").attr("data-stem-position", t);
            var n = Math.max(this._css.radius - this._css.border, 0);
            e
              .find(".tpd-background-title")
              .css({
                "border-top-left-radius": n,
                "border-top-right-radius": n,
              }),
              e
                .find(".tpd-background-content")
                .css({
                  "border-bottom-left-radius": n,
                  "border-bottom-right-radius": n,
                }),
              e.find(".tpd-background-loading").css({ "border-radius": n });
            var i = { backgroundColor: this._css.borderColor };
            return (
              (i[
                "horizontal" === Position.getOrientation(t) ? "height" : "width"
              ] = this._css.border + "px"),
              (i[
                { top: "bottom", bottom: "top", left: "right", right: "left" }[
                  t
                ]
              ] = 0),
              e.find(".tpd-shift-stem-side").css(i),
              e
            );
          },
          insertFrame: function (t) {
            var e = (this["frame_" + t] = this._getFrame(t));
            if ((this.frames.append(e), this.tooltip.options.stem)) {
              var n = e.find(".tpd-stem");
              this["stem_" + t] = new Stem(n, this, {});
            }
          },
          startLoading: function () {
            this.tooltip.supportsLoading &&
              (this.build(),
              this._spinner ||
                this.tooltip.is("resize-to-content") ||
                this.setDimensions(this._css.spinner.dimensions),
              this._spinner && this._spinner.show());
          },
          stopLoading: function () {
            this.tooltip.supportsLoading &&
              this._spinner &&
              (this.build(), this._spinner.hide());
          },
          updateBackground: function () {
            var t = this._vars.frames[this._side],
              e = $.extend({}, t.background.dimensions);
            if (this.tooltip.title && !this.tooltip.is("loading")) {
              this.element
                .find(".tpd-background-title, .tpd-background-content")
                .show(),
                this.element
                  .find(".tpd-background")
                  .css({ "background-color": "transparent" });
              var n = $.extend({}, e),
                i = Math.max(this._css.radius - this._css.border, 0),
                r = {
                  "border-top-left-radius": i,
                  "border-top-right-radius": i,
                  "border-bottom-left-radius": i,
                  "border-bottom-right-radius": i,
                },
                o = new Visible(this.tooltip._tooltip),
                a = this.tooltip._titleWrapper.innerHeight();
              (n.height -= a),
                this.element
                  .find(".tpd-background-title")
                  .css({ height: a, width: e.width }),
                (r["border-top-left-radius"] = 0),
                (r["border-top-right-radius"] = 0),
                o.restore(),
                this.element.find(".tpd-background-content").css(n).css(r),
                this.element
                  .find(".tpd-background-loading")
                  .css({ "background-color": this._css.backgroundColor });
            } else
              this.element
                .find(".tpd-background-title, .tpd-background-content")
                .hide(),
                this.element
                  .find(".tpd-background")
                  .css({ "background-color": this._css.backgroundColor });
            this._css.border &&
              (this.element
                .find(".tpd-background")
                .css({ "border-color": "transparent" }),
              this.element
                .find(".tpd-background-border-hack")
                .css({
                  width: e.width,
                  height: e.height,
                  "border-radius": this._css.radius,
                  "border-width": this._css.border,
                  "border-color": this._css.borderColor,
                })
                .show());
          },
          paint: function () {
            if (
              !this._paintedDimensions ||
              this._paintedDimensions.width !== this._dimensions.width ||
              this._paintedDimensions.height !== this._dimensions.height ||
              this._paintedStemPosition !== this._stemPosition
            ) {
              (this._paintedDimensions = this._dimensions),
                (this._paintedStemPosition = this._stemPosition),
                this.element
                  .removeClass(
                    "tpd-visible-frame-top tpd-visible-frame-bottom tpd-visible-frame-left tpd-visible-frame-right"
                  )
                  .addClass("tpd-visible-frame-" + this._side);
              var t = this._vars.frames[this._side],
                e = $.extend({}, t.background.dimensions);
              this.element.find(".tpd-background").css(e),
                this.element
                  .find(".tpd-background-shadow")
                  .css({
                    width: e.width + 2 * this._css.border,
                    height: e.height + 2 * this._css.border,
                  }),
                this.updateBackground(),
                this.element
                  .find(
                    ".tpd-background-box-shift, .tpd-background-box-shift-further"
                  )
                  .removeAttr("style"),
                this.element
                  .add(this.frames)
                  .add(this.tooltip._tooltip)
                  .css(t.dimensions);
              var n = this._side,
                i = this._vars.frames[n],
                r = this.element.find(".tpd-frame-" + this._side),
                o = this._vars.frames[n].dimensions;
              r.css(o),
                r
                  .find(".tpd-backgrounds")
                  .css(
                    $.extend({}, i.background.position, {
                      width: o.width - i.background.position.left,
                      height: o.height - i.background.position.top,
                    })
                  );
              var a = Position.getOrientation(n);
              if (this.tooltip.options.stem)
                if (
                  (r
                    .find(".tpd-shift-stem")
                    .css($.extend({}, i.shift.dimensions, i.shift.position)),
                  "vertical" === a)
                ) {
                  (l = r.find(
                    ".tpd-background-box-top, .tpd-background-box-bottom"
                  )).css({ height: this._vars.cut, width: this._css.border }),
                    r
                      .find(".tpd-background-box-bottom")
                      .css({ top: i.dimensions.height - this._vars.cut })
                      .find(".tpd-background-box-shift")
                      .css({
                        "margin-top": -1 * i.dimensions.height + this._vars.cut,
                      });
                  var s =
                    "right" === n
                      ? i.dimensions.width - i.stemPx - this._css.border
                      : 0;
                  l
                    .css({ left: s })
                    .find(".tpd-background-box-shift")
                    .css({ "margin-left": -1 * s }),
                    r
                      .find(
                        ".tpd-background-box-" +
                          ("left" == n ? "left" : "right")
                      )
                      .hide(),
                    "right" === n
                      ? r
                          .find(".tpd-background-box-left")
                          .css({
                            width:
                              i.dimensions.width - i.stemPx - this._css.border,
                          })
                      : r
                          .find(".tpd-background-box-right")
                          .css({ "margin-left": this._css.border })
                          .find(".tpd-background-box-shift")
                          .css({ "margin-left": -1 * this._css.border }),
                    (c = r.find(".tpd-background-box-" + this._side)).css({
                      height: i.dimensions.height - 2 * this._vars.cut,
                      "margin-top": this._vars.cut,
                    }),
                    c
                      .find(".tpd-background-box-shift")
                      .css({ "margin-top": -1 * this._vars.cut });
                } else {
                  var l, c;
                  (l = r.find(
                    ".tpd-background-box-left, .tpd-background-box-right"
                  )).css({ width: this._vars.cut, height: this._css.border }),
                    r
                      .find(".tpd-background-box-right")
                      .css({ left: i.dimensions.width - this._vars.cut })
                      .find(".tpd-background-box-shift")
                      .css({
                        "margin-left": -1 * i.dimensions.width + this._vars.cut,
                      }),
                    (s =
                      "bottom" === n
                        ? i.dimensions.height - i.stemPx - this._css.border
                        : 0),
                    l
                      .css({ top: s })
                      .find(".tpd-background-box-shift")
                      .css({ "margin-top": -1 * s }),
                    r
                      .find(
                        ".tpd-background-box-" +
                          ("top" === n ? "top" : "bottom")
                      )
                      .hide(),
                    "bottom" === n
                      ? r
                          .find(".tpd-background-box-top")
                          .css({
                            height:
                              i.dimensions.height - i.stemPx - this._css.border,
                          })
                      : r
                          .find(".tpd-background-box-bottom")
                          .css({ "margin-top": this._css.border })
                          .find(".tpd-background-box-shift")
                          .css({ "margin-top": -1 * this._css.border }),
                    (c = r.find(".tpd-background-box-" + this._side)).css({
                      width: i.dimensions.width - 2 * this._vars.cut,
                      "margin-left": this._vars.cut,
                    }),
                    c
                      .find(".tpd-background-box-shift")
                      .css({ "margin-left": -1 * this._vars.cut });
                }
              var d = t.background,
                u = d.position,
                p = d.dimensions;
              this._spinner.css({
                top:
                  u.top +
                  this._css.border +
                  (0.5 * p.height - 0.5 * this._css.spinner.dimensions.height),
                left:
                  u.left +
                  this._css.border +
                  (0.5 * p.width - 0.5 * this._css.spinner.dimensions.width),
              });
            }
          },
          getVars: function () {
            this._css.padding, this._css.radius;
            var t = this._css.border,
              e = this._vars.maxStemHeight || 0,
              n = $.extend({}, this._dimensions || {}),
              i = { frames: {}, dimensions: n, maxStemHeight: e };
            i.cut = Math.max(this._css.border, this._css.radius) || 0;
            var r = { width: 0, height: 0 },
              o = 0,
              a = 0;
            return (
              this.tooltip.options.stem &&
                ((r = this.stem_top.getMath().dimensions.outside),
                (o = this.stem_top._css.offset),
                (a = Math.max(r.height - this._css.border, 0))),
              (i.stemDimensions = r),
              (i.stemOffset = o),
              $.each(
                "top right bottom left".split(" "),
                function (e, o) {
                  var s = "vertical" === Position.getOrientation(o),
                    l = { width: n.width + 2 * t, height: n.height + 2 * t },
                    c = l[s ? "height" : "width"] - 2 * i.cut,
                    d = {
                      dimensions: l,
                      stemPx: a,
                      position: { top: 0, left: 0 },
                      background: {
                        dimensions: $.extend({}, n),
                        position: { top: 0, left: 0 },
                      },
                    };
                  switch (
                    ((i.frames[o] = d),
                    (d.dimensions[s ? "width" : "height"] += a),
                    ("top" !== o && "left" !== o) ||
                      (d.background.position[o] += a),
                    $.extend(d, {
                      shift: {
                        position: { top: 0, left: 0 },
                        dimensions: {
                          width: s ? r.height : c,
                          height: s ? c : r.height,
                        },
                      },
                    }),
                    o)
                  ) {
                    case "top":
                    case "bottom":
                      (d.shift.position.left += i.cut),
                        "bottom" === o &&
                          (d.shift.position.top += l.height - t - a);
                      break;
                    case "left":
                    case "right":
                      (d.shift.position.top += i.cut),
                        "right" === o &&
                          (d.shift.position.left += l.width - t - a);
                  }
                }.bind(this)
              ),
              (i.connections = {}),
              $.each(
                Position.positions,
                function (t, e) {
                  i.connections[e] = this.getConnectionLayout(e, i);
                }.bind(this)
              ),
              i
            );
          },
          setDimensions: function (t) {
            this.build();
            var e = this._dimensions;
            (e && e.width === t.width && e.height === t.height) ||
              ((this._dimensions = t), (this._vars = this.getVars()));
          },
          setSide: function (t) {
            (this._side = t), (this._vars = this.getVars());
          },
          getConnectionLayout: function (t, e) {
            var n = Position.getSide(t),
              i = Position.getOrientation(t),
              r = (e.dimensions, e.cut),
              o = this["stem_" + n],
              a = e.stemOffset,
              s = this.tooltip.options.stem
                ? o.getMath().dimensions.outside.width
                : 0,
              l = r + a + 0.5 * s,
              c = { stem: {} },
              d = { left: 0, right: 0, up: 0, down: 0 },
              u = { top: 0, left: 0 },
              p = { top: 0, left: 0 },
              h = e.frames[n];
            if (((l = 0), "horizontal" == i)) {
              var f = h.dimensions.width;
              this.tooltip.options.stem &&
                ((f = h.shift.dimensions.width) - s < 2 * a &&
                  (a = Math.floor(0.5 * (f - s)) || 0),
                (l = r + a + 0.5 * s));
              var b = f - 2 * a,
                m = a;
              switch ((v = Position.split(t))[2]) {
                case "left":
                  (d.right = b - s), (u.left = l);
                  break;
                case "middle":
                  (m += Math.round(0.5 * b - 0.5 * s)),
                    (d.left = m - a),
                    (d.right = m - a),
                    (u.left = p.left = Math.round(0.5 * h.dimensions.width));
                  break;
                case "right":
                  (m += b - s),
                    (d.left = b - s),
                    (u.left = h.dimensions.width - l),
                    (p.left = h.dimensions.width);
              }
              "bottom" === v[1] &&
                ((u.top += h.dimensions.height),
                (p.top += h.dimensions.height)),
                $.extend(c.stem, {
                  position: { left: m },
                  before: { width: m },
                  after: { left: m + s, width: f - m - s + 1 },
                });
            } else {
              var g = h.dimensions.height;
              this.tooltip.options.stem &&
                ((g = h.shift.dimensions.height) - s < 2 * a &&
                  (a = Math.floor(0.5 * (g - s)) || 0),
                (l = r + a + 0.5 * s));
              var v,
                _ = g - 2 * a,
                y = a;
              switch ((v = Position.split(t))[2]) {
                case "top":
                  (d.down = _ - s), (u.top = l);
                  break;
                case "middle":
                  (y += Math.round(0.5 * _ - 0.5 * s)),
                    (d.up = y - a),
                    (d.down = y - a),
                    (u.top = p.top = Math.round(0.5 * h.dimensions.height));
                  break;
                case "bottom":
                  (y += _ - s),
                    (d.up = _ - s),
                    (u.top = h.dimensions.height - l),
                    (p.top = h.dimensions.height);
              }
              "right" === v[1] &&
                ((u.left += h.dimensions.width),
                (p.left += h.dimensions.width)),
                $.extend(c.stem, {
                  position: { top: y },
                  before: { height: y },
                  after: { top: y + s, height: g - y - s + 1 },
                });
            }
            return (c.move = d), (c.stem.connection = u), (c.connection = p), c;
          },
          setStemPosition: function (t, e) {
            if (this._stemPosition !== t) {
              this._stemPosition = t;
              var n = Position.getSide(t);
              this.setSide(n);
            }
            this.tooltip.options.stem && this.setStemShift(t, e);
          },
          setStemShift: function (t, e) {
            var n = this._shift,
              i = this._dimensions;
            if (
              !n ||
              n.stemPosition !== t ||
              n.shift.x !== e.x ||
              n.shift.y !== e.y ||
              !i ||
              n.dimensions.width !== i.width ||
              n.dimensions.height !== i.height
            ) {
              this._shift = { stemPosition: t, shift: e, dimensions: i };
              var r = Position.getSide(t),
                o = { horizontal: "x", vertical: "y" }[
                  Position.getOrientation(t)
                ],
                a = {
                  x: { left: "left", width: "width" },
                  y: { left: "top", width: "height" },
                }[o],
                s = this["stem_" + r],
                l = deepExtend({}, this._vars.connections[t].stem);
              e &&
                0 !== e[o] &&
                ((l.before[a.width] += e[o]),
                (l.position[a.left] += e[o]),
                (l.after[a.left] += e[o]),
                (l.after[a.width] -= e[o])),
                s.element.css(l.position),
                s.element.siblings(".tpd-shift-stem-side-before").css(l.before),
                s.element.siblings(".tpd-shift-stem-side-after").css(l.after);
            }
          },
        }),
          $.extend(Stem.prototype, {
            initialize: function (t, e) {
              (this.element = $(t)),
                this.element[0] &&
                  ((this.skin = e),
                  this.element.removeClass("tpd-stem-reset"),
                  (this._css = $.extend({}, e._css, {
                    width: this.element.innerWidth(),
                    height: this.element.innerHeight(),
                    offset: parseFloat(this.element.css("margin-left")),
                    spacing: parseFloat(this.element.css("margin-top")),
                  })),
                  this.element.addClass("tpd-stem-reset"),
                  (this.options = $.extend({}, arguments[2] || {})),
                  (this._position =
                    this.element.attr("data-stem-position") || "top"),
                  (this._m = 100),
                  this.build());
            },
            destroy: function () {
              this.element.html("");
            },
            build: function () {
              this.destroy();
              var t = this._css.backgroundColor,
                e =
                  t.indexOf("rgba") > -1 &&
                  parseFloat(t.replace(/^.*,(.+)\)/, "$1")),
                n = e && e < 1;
              (this._useTransform = n && Support.css.transform),
                this._css.border || (this._useTransform = !1),
                this[
                  (this._useTransform ? "build" : "buildNo") + "Transform"
                ]();
            },
            buildTransform: function () {
              this.element.append(
                (this.spacer = $("<div>")
                  .addClass("tpd-stem-spacer")
                  .append(
                    (this.downscale = $("<div>")
                      .addClass("tpd-stem-downscale")
                      .append(
                        (this.transform = $("<div>")
                          .addClass("tpd-stem-transform")
                          .append(
                            (this.first = $("<div>")
                              .addClass("tpd-stem-side")
                              .append(
                                (this.border =
                                  $("<div>").addClass("tpd-stem-border"))
                              )
                              .append(
                                $("<div>").addClass("tpd-stem-border-corner")
                              )
                              .append($("<div>").addClass("tpd-stem-triangle")))
                          ))
                      ))
                  ))
              ),
                this.transform.append(
                  (this.last = this.first
                    .clone()
                    .addClass("tpd-stem-side-inversed"))
                ),
                (this.sides = this.first.add(this.last));
              var t = this.getMath(),
                e = t.dimensions,
                n = this._m,
                i = Position.getSide(this._position);
              if (
                (this.element
                  .find(".tpd-stem-spacer")
                  .css({
                    width: u ? e.inside.height : e.inside.width,
                    height: u ? e.inside.width : e.inside.height,
                  }),
                "top" === i || "left" === i)
              ) {
                var r = {};
                "top" === i
                  ? ((r.bottom = 0), (r.top = "auto"))
                  : "left" === i && ((r.right = 0), (r.left = "auto")),
                  this.element.find(".tpd-stem-spacer").css(r);
              }
              this.transform.css({
                width: e.inside.width * n,
                height: e.inside.height * n,
              });
              var o = Support.css.prefixed("transform"),
                a = {
                  "background-color": "transparent",
                  "border-bottom-color": this._css.backgroundColor,
                  "border-left-width": 0.5 * e.inside.width * n,
                  "border-bottom-width": e.inside.height * n,
                };
              (a[o] = "translate(" + t.border * n + "px, 0)"),
                this.element.find(".tpd-stem-triangle").css(a);
              var s = this._css.borderColor;
              (alpha =
                s.indexOf("rgba") > -1 &&
                parseFloat(s.replace(/^.*,(.+)\)/, "$1"))),
                alpha && alpha < 1
                  ? (s = (s.substring(0, s.lastIndexOf(",")) + ")").replace(
                      "rgba",
                      "rgb"
                    ))
                  : (alpha = 1);
              var l = {
                "background-color": "transparent",
                "border-right-width": t.border * n,
                width: t.border * n,
                "margin-left": -2 * t.border * n,
                "border-color": s,
                opacity: alpha,
              };
              (l[o] =
                "skew(" +
                t.skew +
                "deg) translate(" +
                t.border * n +
                "px, " +
                -1 * this._css.border * n +
                "px)"),
                this.element.find(".tpd-stem-border").css(l),
                (s = this._css.borderColor),
                (alpha =
                  s.indexOf("rgba") > -1 &&
                  parseFloat(s.replace(/^.*,(.+)\)/, "$1"))),
                alpha && alpha < 1
                  ? (s = (s.substring(0, s.lastIndexOf(",")) + ")").replace(
                      "rgba",
                      "rgb"
                    ))
                  : (alpha = 1);
              var c = {
                width: t.border * n,
                "border-right-width": t.border * n,
                "border-right-color": s,
                background: s,
                opacity: alpha,
                "margin-left": -2 * t.border * n,
              };
              if (
                ((c[o] =
                  "skew(" +
                  t.skew +
                  "deg) translate(" +
                  t.border * n +
                  "px, " +
                  (e.inside.height - this._css.border) * n +
                  "px)"),
                this.element.find(".tpd-stem-border-corner").css(c),
                this.setPosition(this._position),
                n > 1)
              ) {
                var d = {};
                (d[o] = "scale(" + 1 / n + "," + 1 / n + ")"),
                  this.downscale.css(d);
              }
              var u = /^(left|right)$/.test(this._position);
              this._css.border ||
                this.element
                  .find(".tpd-stem-border, .tpd-stem-border-corner")
                  .hide(),
                this.element.css({
                  width: u ? e.outside.height : e.outside.width,
                  height: u ? e.outside.width : e.outside.height,
                });
            },
            buildNoTransform: function () {
              this.element.append(
                (this.spacer = $("<div>")
                  .addClass("tpd-stem-spacer")
                  .append(
                    $("<div>")
                      .addClass("tpd-stem-notransform")
                      .append(
                        $("<div>")
                          .addClass("tpd-stem-border")
                          .append($("<div>").addClass("tpd-stem-border-corner"))
                          .append(
                            $("<div>")
                              .addClass("tpd-stem-border-center-offset")
                              .append(
                                $("<div>")
                                  .addClass(
                                    "tpd-stem-border-center-offset-inverse"
                                  )
                                  .append(
                                    $("<div>").addClass(
                                      "tpd-stem-border-center"
                                    )
                                  )
                              )
                          )
                      )
                      .append($("<div>").addClass("tpd-stem-triangle"))
                  ))
              );
              var t = this.getMath(),
                e = t.dimensions,
                n = /^(left|right)$/.test(this._position),
                i = /^(bottom)$/.test(this._position),
                r = /^(right)$/.test(this._position),
                o = Position.getSide(this._position);
              if (
                (this.element.css({
                  width: n ? e.outside.height : e.outside.width,
                  height: n ? e.outside.width : e.outside.height,
                }),
                this.element
                  .find(".tpd-stem-notransform")
                  .add(this.element.find(".tpd-stem-spacer"))
                  .css({
                    width: n ? e.inside.height : e.inside.width,
                    height: n ? e.inside.width : e.inside.height,
                  }),
                "top" === o || "left" === o)
              ) {
                var a = {};
                "top" === o
                  ? ((a.bottom = 0), (a.top = "auto"))
                  : "left" === o && ((a.right = 0), (a.left = "auto")),
                  this.element.find(".tpd-stem-spacer").css(a);
              }
              this.element
                .find(".tpd-stem-border")
                .css({ width: "100%", background: "transparent" });
              var s = { opacity: 1 };
              (s[n ? "height" : "width"] = "100%"),
                (s[n ? "width" : "height"] = this._css.border),
                (s[i ? "top" : "bottom"] = 0),
                $.extend(s, r ? { left: 0 } : { right: 0 }),
                this.element.find(".tpd-stem-border-corner").css(s);
              var l = {
                  width: 0,
                  "background-color": "transparent",
                  opacity: 1,
                },
                c = 0.5 * e.inside.width + "px solid transparent",
                d = { "background-color": "transparent" };
              if ((e.inside.width, t.border, n))
                (u = {
                  left: "auto",
                  top: "50%",
                  "margin-top": -0.5 * e.inside.width,
                  "border-top": c,
                  "border-bottom": c,
                }),
                  $.extend(l, u),
                  (l[r ? "right" : "left"] = 0),
                  (l[r ? "border-left" : "border-right"] =
                    e.inside.height + "px solid " + this._css.borderColor),
                  $.extend(d, u),
                  (d[r ? "border-left" : "border-right"] =
                    e.inside.height + "px solid " + this._css.backgroundColor),
                  (d[r ? "right" : "left"] = t.top),
                  (d[r ? "left" : "right"] = "auto"),
                  this.element
                    .find(".tpd-stem-border-center-offset")
                    .css({
                      "margin-left": -1 * this._css.border * (r ? -1 : 1),
                    })
                    .find(".tpd-stem-border-center-offset-inverse")
                    .css({ "margin-left": this._css.border * (r ? -1 : 1) });
              else {
                var u = {
                  "margin-left": -0.5 * e.inside.width,
                  "border-left": c,
                  "border-right": c,
                };
                $.extend(l, u),
                  (l[i ? "border-top" : "border-bottom"] =
                    e.inside.height + "px solid " + this._css.borderColor),
                  $.extend(d, u),
                  (d[i ? "border-top" : "border-bottom"] =
                    e.inside.height + "px solid " + this._css.backgroundColor),
                  (d[i ? "bottom" : "top"] = t.top),
                  (d[i ? "top" : "bottom"] = "auto"),
                  this.element
                    .find(".tpd-stem-border-center-offset")
                    .css({ "margin-top": -1 * this._css.border * (i ? -1 : 1) })
                    .find(".tpd-stem-border-center-offset-inverse")
                    .css({ "margin-top": this._css.border * (i ? -1 : 1) });
              }
              this.element.find(".tpd-stem-border-center").css(l),
                this.element
                  .find(".tpd-stem-border-corner")
                  .css({ "background-color": this._css.borderColor }),
                this.element.find(".tpd-stem-triangle").css(d),
                this._css.border ||
                  this.element.find(".tpd-stem-border").hide();
            },
            setPosition: function (t) {
              (this._position = t),
                this.transform.attr(
                  "class",
                  "tpd-stem-transform tpd-stem-transform-" + t
                );
            },
            getMath: function () {
              var t = this._css.height,
                e = this._css.width,
                n = this._css.border;
              this._useTransform &&
                Math.floor(e) % 2 &&
                (e = Math.max(Math.floor(e) - 1, 0));
              var i = degrees(Math.atan((0.5 * e) / t)),
                r = 90 - i,
                o = {
                  width: e + (n / Math.cos(((90 - r) * Math.PI) / 180)) * 2,
                  height: t + n / Math.cos(((90 - i) * Math.PI) / 180),
                };
              Math.max(n, this._css.radius),
                (t = o.height),
                (e = 0.5 * o.width);
              var a = 90 - degrees(Math.atan(t / e)),
                s = n / Math.cos((a * Math.PI) / 180),
                l = (180 * Math.atan(t / e)) / Math.PI,
                c = -1 * (90 - l),
                d = 90 - l,
                u = n * Math.tan((d * Math.PI) / 180),
                p = n / Math.cos(((90 - d) * Math.PI) / 180),
                h = $.extend({}, o),
                f = $.extend({}, o);
              (f.height += this._css.spacing), (f.height = Math.ceil(f.height));
              var b = !0;
              return (
                2 * n >= o.width && (b = !1),
                {
                  enabled: b,
                  outside: f,
                  dimensions: { inside: h, outside: f },
                  top: p,
                  border: s,
                  skew: c,
                  corner: u,
                }
              );
            },
          });
        var Tooltips = {
          tooltips: {},
          options: { defaultSkin: "dark", startingZIndex: 999999 },
          _emptyClickHandler: function () {},
          init: function () {
            this.reset(),
              (this._resizeHandler = this.onWindowResize.bind(this)),
              $(window).bind("resize orientationchange", this._resizeHandler),
              Browser.MobileSafari &&
                $("body").bind("click", this._emptyClickHandler);
          },
          reset: function () {
            Tooltips.removeAll(),
              Delegations.removeAll(),
              this._resizeHandler &&
                $(window).unbind(
                  "resize orientationchange",
                  this._resizeHandler
                ),
              Browser.MobileSafari &&
                $("body").unbind("click", this._emptyClickHandler);
          },
          onWindowResize: function () {
            this._resizeTimer &&
              (window.clearTimeout(this._resizeTimer),
              (this._resizeTimer = null)),
              (this._resizeTimer = _.delay(
                function () {
                  var t = this.getVisible();
                  $.each(t, function (t, e) {
                    e.clearUpdatedTo(), e.position();
                  });
                }.bind(this),
                15
              ));
          },
          _getTooltips: function (t, e) {
            var n,
              i = [],
              r = [];
            if (
              (_.isElement(t)
                ? (n = $(t).data("tipped-uids")) && (i = i.concat(n))
                : $(t).each(function (t, e) {
                    (n = $(e).data("tipped-uids")) && (i = i.concat(n));
                  }),
              !i[0] && !e)
            ) {
              var o = this.getTooltipByTooltipElement(
                $(t).closest(".tpd-tooltip")[0]
              );
              o &&
                o.element &&
                (n = $(o.element).data("tipped-uids") || []) &&
                (i = i.concat(n));
            }
            return (
              i.length > 0 &&
                $.each(
                  i,
                  function (t, e) {
                    var n;
                    (n = this.tooltips[e]) && r.push(n);
                  }.bind(this)
                ),
              r
            );
          },
          findElement: function (t) {
            var e = [];
            return (
              _.isElement(t) && (e = this._getTooltips(t)), e[0] && e[0].element
            );
          },
          get: function (t) {
            var e = $.extend({ api: !1 }, arguments[1] || {}),
              n = [];
            return (
              _.isElement(t)
                ? (n = this._getTooltips(t))
                : t instanceof $
                ? t.each(
                    function (t, e) {
                      var i = this._getTooltips(e, !0);
                      i.length > 0 && (n = n.concat(i));
                    }.bind(this)
                  )
                : "string" == typeof t &&
                  $.each(this.tooltips, function (e, i) {
                    i.element && $(i.element).is(t) && n.push(i);
                  }),
              e.api &&
                $.each(n, function (t, e) {
                  e.is("api", !0);
                }),
              n
            );
          },
          getTooltipByTooltipElement: function (t) {
            if (!t) return null;
            var e = null;
            return (
              $.each(this.tooltips, function (n, i) {
                i.is("build") && i._tooltip[0] === t && (e = i);
              }),
              e
            );
          },
          getBySelector: function (t) {
            var e = [];
            return (
              $.each(this.tooltips, function (n, i) {
                i.element && $(i.element).is(t) && e.push(i);
              }),
              e
            );
          },
          getNests: function () {
            var t = [];
            return (
              $.each(this.tooltips, function (e, n) {
                n.is("nest") && t.push(n);
              }),
              t
            );
          },
          show: function (t) {
            $(this.get(t)).each(function (t, e) {
              e.show(!1, !0);
            });
          },
          hide: function (t) {
            $(this.get(t)).each(function (t, e) {
              e.hide();
            });
          },
          toggle: function (t) {
            $(this.get(t)).each(function (t, e) {
              e.toggle();
            });
          },
          hideAll: function (t) {
            $.each(this.getVisible(), function (e, n) {
              (t && t === n) || n.hide();
            });
          },
          refresh: function (t) {
            var e;
            (e = t
              ? $.grep(this.get(t), function (t) {
                  return t.is("visible");
                })
              : this.getVisible()),
              $.each(e, function (t, e) {
                e.refresh();
              });
          },
          getVisible: function () {
            var t = [];
            return (
              $.each(this.tooltips, function (e, n) {
                n.visible() && t.push(n);
              }),
              t
            );
          },
          isVisibleByElement: function (t) {
            var e = !1;
            return (
              _.isElement(t) &&
                $.each(this.getVisible() || [], function (n, i) {
                  if (i.element === t) return (e = !0), !1;
                }),
              e
            );
          },
          getHighestTooltip: function () {
            var t,
              e = 0;
            return (
              $.each(this.tooltips, function (n, i) {
                i.zIndex > e && ((e = i.zIndex), (t = i));
              }),
              t
            );
          },
          resetZ: function () {
            this.getVisible().length <= 1 &&
              $.each(this.tooltips, function (t, e) {
                e.is("build") &&
                  !e.options.zIndex &&
                  e._tooltip.css({
                    zIndex: (e.zIndex = +Tooltips.options.startingZIndex),
                  });
              });
          },
          clearAjaxCache: function () {
            $.each(
              this.tooltips,
              function (t, e) {
                e.options.ajax &&
                  (e._cache &&
                    e._cache.xhr &&
                    (e._cache.xhr.abort(), (e._cache.xhr = null)),
                  e.is("updated", !1),
                  e.is("updating", !1),
                  e.is("sanitized", !1));
              }.bind(this)
            ),
              AjaxCache.clear();
          },
          add: function (t) {
            this.tooltips[t.uid] = t;
          },
          remove: function (t) {
            var e = this._getTooltips(t);
            this.removeTooltips(e);
          },
          removeTooltips: function (t) {
            t &&
              $.each(
                t,
                function (t, e) {
                  var n = e.uid;
                  delete this.tooltips[n], e.remove();
                }.bind(this)
              );
          },
          removeDetached: function () {
            var t = this.getNests(),
              e = [];
            t.length > 0 &&
              $.each(t, function (t, n) {
                n.is("detached") && (e.push(n), n.attach());
              }),
              $.each(
                this.tooltips,
                function (t, e) {
                  e.element &&
                    !_.element.isAttached(e.element) &&
                    this.remove(e.element);
                }.bind(this)
              ),
              $.each(e, function (t, e) {
                e.detach();
              });
          },
          removeAll: function () {
            $.each(
              this.tooltips,
              function (t, e) {
                e.element && this.remove(e.element);
              }.bind(this)
            ),
              (this.tooltips = {});
          },
          setDefaultSkin: function (t) {
            this.options.defaultSkin = t || "dark";
          },
          setStartingZIndex: function (t) {
            this.options.startingZIndex = t || 0;
          },
        };
        function Tooltip() {
          this.initialize.apply(this, _slice.call(arguments));
        }
        (Tooltips.Position = {
          inversedPosition: {
            left: "right",
            right: "left",
            top: "bottom",
            bottom: "top",
            middle: "middle",
            center: "center",
          },
          getInversedPosition: function (t) {
            var e = Position.split(t),
              n = e[1],
              i = e[2],
              r = Position.getOrientation(t),
              o = $.extend(
                { horizontal: !0, vertical: !0 },
                arguments[1] || {}
              );
            return (
              "horizontal" === r
                ? (o.vertical && (n = this.inversedPosition[n]),
                  o.horizontal && (i = this.inversedPosition[i]))
                : (o.vertical && (i = this.inversedPosition[i]),
                  o.horizontal && (n = this.inversedPosition[n])),
              n + i
            );
          },
          getTooltipPositionFromTarget: function (t) {
            var e = Position.split(t);
            return this.getInversedPosition(e[1] + this.inversedPosition[e[2]]);
          },
        }),
          $.extend(Tooltip.prototype, {
            supportsLoading: Support.css.transform && Support.css.animation,
            initialize: function (element, content) {
              if (((this.element = element), this.element)) {
                var options;
                "object" != typeof content ||
                _.isElement(content) ||
                _.isText(content) ||
                _.isDocumentFragment(content) ||
                content instanceof $
                  ? (options = arguments[2] || {})
                  : ((options = content), (content = null));
                var dataOptions = $(element).data("tipped-options");
                dataOptions &&
                  (options = deepExtend(
                    $.extend({}, options),
                    eval("({" + dataOptions + "})")
                  )),
                  (this.options = Options.create(options)),
                  (this._cache = {
                    dimensions: { width: 0, height: 0 },
                    events: [],
                    timers: {},
                    layouts: {},
                    is: {},
                    fnCallFn: "",
                    updatedTo: {},
                  }),
                  (this.queues = { showhide: $({}) });
                var title =
                  $(element).attr("title") ||
                  $(element).data("tipped-restore-title");
                if (!content) {
                  var dt = $(element).attr("data-tipped");
                  if (
                    (dt ? (content = dt) : title && (content = title), content)
                  ) {
                    var SCRIPT_REGEX =
                      /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;
                    content = content.replace(SCRIPT_REGEX, "");
                  }
                }
                if (
                  !(!content || (content instanceof $ && !content[0])) ||
                  (this.options.ajax && this.options.ajax.url) ||
                  this.options.inline
                ) {
                  title &&
                    ($(element).data("tipped-restore-title", title),
                    $(element)[0].setAttribute("title", "")),
                    (this.content = content),
                    (this.title = $(this.element).data("tipped-title")),
                    void 0 !== this.options.title &&
                      (this.title = this.options.title),
                    (this.zIndex =
                      this.options.zIndex || +Tooltips.options.startingZIndex);
                  var uids = $(element).data("tipped-uids");
                  uids || (uids = []);
                  var uid = getUID();
                  (this.uid = uid),
                    uids.push(uid),
                    $(element).data("tipped-uids", uids);
                  var parentTooltipElement = $(this.element).closest(
                      ".tpd-tooltip"
                    )[0],
                    parentTooltip;
                  parentTooltipElement &&
                    (parentTooltip =
                      Tooltips.getTooltipByTooltipElement(
                        parentTooltipElement
                      )) &&
                    parentTooltip.is("nest", !0);
                  var target = this.options.target;
                  (this.target =
                    "mouse" === target
                      ? this.element
                      : "element" !== target && target
                      ? _.isElement(target)
                        ? target
                        : target instanceof $ && target[0]
                        ? target[0]
                        : this.element
                      : this.element),
                    this.options.inline &&
                      (this.content = $("#" + this.options.inline)[0]),
                    this.options.ajax && (this.__content = this.content),
                    "function" == typeof this.content &&
                      (this._fn = this.content),
                    this.preBuild(),
                    Tooltips.add(this);
                } else this._aborted = !0;
              }
            },
            remove: function () {
              this.unbind(),
                this.clearTimers(),
                this.restoreElementToMarker(),
                this.stopLoading(),
                this.abort(),
                this.is("build") &&
                  this._tooltip &&
                  (this._tooltip.remove(), (this._tooltip = null));
              var t = $(this.element).data("tipped-uids") || [],
                e = $.inArray(this.uid, t);
              if (
                (e > -1 &&
                  (t.splice(e, 1), $(this.element).data("tipped-uids", t)),
                t.length < 1)
              ) {
                var n,
                  i = "tipped-restore-title";
                (n = $(this.element).data(i)) &&
                  ("" != !$(this.element)[0].getAttribute("title") &&
                    $(this.element).attr("title", n),
                  $(this.element).removeData(i)),
                  $(this.element).removeData("tipped-uids");
              }
              var r = ($(this.element).attr("class") || "")
                .replace(/(tpd-delegation-uid-)\d+/g, "")
                .replace(/^\s\s*/, "")
                .replace(/\s\s*$/, "");
              $(this.element).attr("class", r);
            },
            detach: function () {
              this.options.detach &&
                !this.is("detached") &&
                (this._tooltip && this._tooltip.detach(),
                this.is("detached", !0));
            },
            attach: function () {
              if (this.is("detached")) {
                var t;
                if ("string" == typeof this.options.container) {
                  var e = this.target;
                  "mouse" === e && (e = this.element),
                    (t = $($(e).closest(this.options.container).first()));
                } else t = $(this.options.container);
                t[0] || (t = $(document.body)),
                  t.append(this._tooltip),
                  this.is("detached", !1);
              }
            },
            preBuild: function () {
              this.is("detached", !0);
              var t = {
                left: "-10000px",
                top: "-10000px",
                opacity: 0,
                zIndex: this.zIndex,
              };
              (this._tooltip = $("<div>")
                .addClass("tpd-tooltip")
                .addClass("tpd-skin-" + this.options.skin)
                .addClass("tpd-size-" + this.options.size)
                .css(t)
                .hide()),
                this.createPreBuildObservers();
            },
            build: function () {
              this.is("build") ||
                (this.attach(),
                this._tooltip
                  .append((this._skin = $("<div>").addClass("tpd-skin")))
                  .append(
                    (this._contentWrapper = $("<div>")
                      .addClass("tpd-content-wrapper")
                      .append(
                        (this._contentSpacer = $("<div>")
                          .addClass("tpd-content-spacer")
                          .append(
                            (this._titleWrapper = $("<div>")
                              .addClass("tpd-title-wrapper")
                              .append(
                                (this._titleSpacer = $("<div>")
                                  .addClass("tpd-title-spacer")
                                  .append(
                                    (this._titleRelative = $("<div>")
                                      .addClass("tpd-title-relative")
                                      .append(
                                        (this._titleRelativePadder = $("<div>")
                                          .addClass("tpd-title-relative-padder")
                                          .append(
                                            (this._title =
                                              $("<div>").addClass("tpd-title"))
                                          ))
                                      ))
                                  ))
                              )
                              .append(
                                (this._close = $("<div>")
                                  .addClass("tpd-close")
                                  .append(
                                    $("<div>")
                                      .addClass("tpd-close-icon")
                                      .html("&times;")
                                  ))
                              ))
                          )
                          .append(
                            (this._contentRelative = $("<div>")
                              .addClass("tpd-content-relative")
                              .append(
                                (this._contentRelativePadder = $("<div>")
                                  .addClass("tpd-content-relative-padder")
                                  .append(
                                    (this._content =
                                      $("<div>").addClass("tpd-content"))
                                  ))
                              )
                              .append(
                                (this._inner_close = $("<div>")
                                  .addClass("tpd-close")
                                  .append(
                                    $("<div>")
                                      .addClass("tpd-close-icon")
                                      .html("&times;")
                                  ))
                              ))
                          ))
                      ))
                  ),
                (this.skin = new Skin(this)),
                this._contentSpacer.css({
                  "border-radius": Math.max(
                    this.skin._css.radius - this.skin._css.border,
                    0
                  ),
                }),
                this.createPostBuildObservers(),
                this.is("build", !0));
            },
            createPostBuildObservers: function () {
              this._tooltip.delegate(
                ".tpd-close, .close-tooltip",
                "click",
                function (t) {
                  t.stopPropagation(),
                    t.preventDefault(),
                    this.is("api", !1),
                    this.hide(!0);
                }.bind(this)
              );
            },
            createPreBuildObservers: function () {
              this.bind(this.element, "mouseenter", this.setActive),
                this.bind(
                  this._tooltip,
                  Support.touch && Browser.MobileSafari
                    ? "touchstart"
                    : "mouseenter",
                  this.setActive
                ),
                this.bind(this.element, "mouseleave", function (t) {
                  this.setIdle(t);
                }),
                this.bind(this._tooltip, "mouseleave", function (t) {
                  this.setIdle(t);
                }),
                this.options.showOn &&
                  ($.each(
                    this.options.showOn,
                    function (t, e) {
                      var n,
                        i = !1;
                      switch (t) {
                        case "element":
                          (n = this.element),
                            this.options.hideOn &&
                              this.options.showOn &&
                              "click" === this.options.hideOn.element &&
                              "click" === this.options.showOn.element &&
                              ((i = !0), this.is("toggleable", i));
                          break;
                        case "tooltip":
                          n = this._tooltip;
                          break;
                        case "target":
                          n = this.target;
                      }
                      if (n && e) {
                        var r = e;
                        this.bind(
                          n,
                          r,
                          "click" === e && i
                            ? function () {
                                this.is("api", !1), this.toggle();
                              }
                            : function () {
                                this.is("api", !1), this.showDelayed();
                              }
                        );
                      }
                    }.bind(this)
                  ),
                  Support.touch &&
                    Browser.MobileSafari &&
                    this.bind(this._tooltip, "touchend", function () {
                      this._tooltipTouchEndTime = new Date().getTime();
                    })),
                this.options.hideOn &&
                  $.each(
                    this.options.hideOn,
                    function (t, e) {
                      var n;
                      switch (t) {
                        case "element":
                          if (this.is("toggleable") && "click" === e) return;
                          n = this.element;
                          break;
                        case "tooltip":
                          n = this._tooltip;
                          break;
                        case "target":
                          n = this.target;
                      }
                      if (n && e) {
                        var i = e;
                        Support.touch &&
                        Browser.MobileSafari &&
                        /^(target|element)/.test(t) &&
                        /mouse(leave|out)/.test(i)
                          ? this.bind(n, i, function (t) {
                              (this._tooltipTouchEndTime &&
                                /^mouse(leave|out)$/.test(t.type) &&
                                new Date().getTime() -
                                  this._tooltipTouchEndTime <
                                  450) ||
                                (this.is("api", !1), this.hideDelayed());
                            })
                          : this.bind(n, i, function () {
                              this.is("api", !1), this.hideDelayed();
                            });
                      }
                    }.bind(this)
                  ),
                this.options.hideOnClickOutside &&
                  ($(this.element).addClass("tpd-hideOnClickOutside"),
                  this.bind(
                    document.documentElement,
                    "click touchend",
                    function (t) {
                      if (this.visible()) {
                        var e = $(t.target).closest(
                          ".tpd-tooltip, .tpd-hideOnClickOutside"
                        )[0];
                        (!e ||
                          (e &&
                            e !== this._tooltip[0] &&
                            e !== this.element)) &&
                          this.hide();
                      }
                    }.bind(this)
                  )),
                "mouse" === this.options.target &&
                  this.bind(
                    this.element,
                    "mouseenter mousemove",
                    function (t) {
                      this._cache.event = t;
                    }.bind(this)
                  );
              var t = !1;
              this.options.showOn &&
                "mouse" === this.options.target &&
                !this.options.fixed &&
                (t = !0),
                t &&
                  this.bind(this.element, "mousemove", function () {
                    this.is("build") && (this.is("api", !1), this.position());
                  });
            },
          }),
          $.extend(Tooltip.prototype, {
            stop: function () {
              this._tooltip &&
                (this.queues.showhide.queue([]), this._tooltip.stop(1, 0));
            },
            showDelayed: function (t) {
              this.is("disabled") ||
                (this.clearTimer("hide"),
                this.is("visible") ||
                  this.getTimer("show") ||
                  this.setTimer(
                    "show",
                    function () {
                      this.clearTimer("show"), this.show();
                    }.bind(this),
                    this.options.showDelay || 1
                  ));
            },
            show: function () {
              if (
                (this.clearTimer("hide"),
                !this.visible() &&
                  !this.is("disabled") &&
                  $(this.target).is(":visible"))
              ) {
                this.is("visible", !0), this.attach(), this.stop();
                var t = this.queues.showhide;
                this.is("updated") ||
                  this.is("updating") ||
                  t.queue(
                    function (t) {
                      (this._onResizeDimensions = { width: 0, height: 0 }),
                        this.update(
                          function (e) {
                            if (e)
                              return this.is("visible", !1), void this.detach();
                            t();
                          }.bind(this)
                        );
                    }.bind(this)
                  ),
                  t.queue(
                    function (t) {
                      this.is("sanitized")
                        ? (this.stopLoading(),
                          this._contentWrapper.css({ visibility: "visible" }),
                          this.is("resize-to-content", !0),
                          t())
                        : (this._contentWrapper.css({ visibility: "hidden" }),
                          this.startLoading(),
                          this.sanitize(
                            function () {
                              this.stopLoading(),
                                this._contentWrapper.css({
                                  visibility: "visible",
                                }),
                                this.is("resize-to-content", !0),
                                t();
                            }.bind(this)
                          ));
                    }.bind(this)
                  ),
                  t.queue(
                    function (t) {
                      this.position(), this.raise(), t();
                    }.bind(this)
                  ),
                  t.queue(
                    function (t) {
                      if (
                        this.is("updated") &&
                        "function" == typeof this.options.onShow
                      ) {
                        var e = new Visible(this._tooltip);
                        this.options.onShow(this._content[0], this.element),
                          e.restore(),
                          t();
                      } else t();
                    }.bind(this)
                  ),
                  t.queue(
                    function (t) {
                      this._show(this.options.fadeIn, function () {
                        t();
                      });
                    }.bind(this)
                  );
              }
            },
            _show: function (t, e) {
              (t = ("number" == typeof t ? t : this.options.fadeIn) || 0),
                (e = e || ("function" == typeof arguments[0] && arguments[0])),
                this.options.hideOthers && Tooltips.hideAll(this),
                this._tooltip.fadeTo(
                  t,
                  1,
                  function () {
                    e && e();
                  }.bind(this)
                );
            },
            hideDelayed: function () {
              this.clearTimer("show"),
                this.getTimer("hide") ||
                  !this.visible() ||
                  this.is("disabled") ||
                  this.setTimer(
                    "hide",
                    function () {
                      this.clearTimer("hide"), this.hide();
                    }.bind(this),
                    this.options.hideDelay || 1
                  );
            },
            hide: function (t, e) {
              if (
                (this.clearTimer("show"),
                this.visible() && !this.is("disabled"))
              ) {
                this.is("visible", !1), this.stop();
                var n = this.queues.showhide;
                n.queue(
                  function (t) {
                    this.abort(), t();
                  }.bind(this)
                ),
                  n.queue(
                    function (e) {
                      this._hide(t, e);
                    }.bind(this)
                  ),
                  n.queue(function (t) {
                    Tooltips.resetZ(), t();
                  }),
                  n.queue(
                    function (t) {
                      this.clearUpdatedTo(), t();
                    }.bind(this)
                  ),
                  "function" == typeof this.options.afterHide &&
                    this.is("updated") &&
                    n.queue(
                      function (t) {
                        this.options.afterHide(this._content[0], this.element),
                          t();
                      }.bind(this)
                    ),
                  this.options.cache ||
                    (!this.options.ajax && !this._fn) ||
                    n.queue(
                      function (t) {
                        this.is("updated", !1),
                          this.is("updating", !1),
                          this.is("sanitized", !1),
                          t();
                      }.bind(this)
                    ),
                  "function" == typeof e &&
                    n.queue(function (t) {
                      e(), t();
                    }),
                  n.queue(
                    function (t) {
                      this.detach(), t();
                    }.bind(this)
                  );
              }
            },
            _hide: function (t, e) {
              (e = e || ("function" == typeof arguments[0] && arguments[0])),
                this.attach(),
                this._tooltip.fadeTo(
                  t ? 0 : this.options.fadeOut,
                  0,
                  function () {
                    this.stopLoading(),
                      this.is("resize-to-content", !1),
                      this._tooltip.hide(),
                      e && e();
                  }.bind(this)
                );
            },
            toggle: function () {
              this.is("disabled") || this[this.visible() ? "hide" : "show"]();
            },
            raise: function () {
              if (this.is("build") && !this.options.zIndex) {
                var t = Tooltips.getHighestTooltip();
                t &&
                  t !== this &&
                  this.zIndex <= t.zIndex &&
                  ((this.zIndex = t.zIndex + 1),
                  this._tooltip.css({ "z-index": this.zIndex }),
                  this._tooltipShadow &&
                    (this._tooltipShadow.css({ "z-index": this.zIndex }),
                    (this.zIndex = t.zIndex + 2),
                    this._tooltip.css({ "z-index": this.zIndex })));
              }
            },
          }),
          $.extend(Tooltip.prototype, {
            createElementMarker: function () {
              !this.elementMarker &&
                this.content &&
                _.element.isAttached(this.content) &&
                ($(this.content).data(
                  "tpd-restore-inline-display",
                  $(this.content).css("display")
                ),
                (this.elementMarker = $("<div>").hide()),
                $(this.content).before($(this.elementMarker).hide()));
            },
            restoreElementToMarker: function () {
              var t;
              this.elementMarker &&
                this.content &&
                ((t = $(this.content).data("tpd-restore-inline-display")) &&
                  $(this.content).css({ display: t }),
                $(this.elementMarker).before(this.content).remove());
            },
            startLoading: function () {
              this.is("loading") ||
                (this.build(),
                this.is("loading", !0),
                this.options.spinner &&
                  (this._tooltip.addClass("tpd-is-loading"),
                  this.skin.startLoading(),
                  this.is("resize-to-content") ||
                    (this.position(), this.raise(), this._show())));
            },
            stopLoading: function () {
              this.build(),
                this.is("loading", !1),
                this.options.spinner &&
                  (this._tooltip.removeClass("tpd-is-loading"),
                  this.skin.stopLoading());
            },
            abort: function () {
              this.abortAjax(),
                this.abortSanitize(),
                this.is("refreshed-before-sanitized", !1);
            },
            abortSanitize: function () {
              this._cache.voila &&
                (this._cache.voila.abort(), (this._cache.voila = null));
            },
            abortAjax: function () {
              this._cache.xhr &&
                (this._cache.xhr.abort(),
                (this._cache.xhr = null),
                this.is("updated", !1),
                this.is("updating", !1));
            },
            update: function (t) {
              if (!this.is("updating")) {
                this.is("updating", !0), this.build();
                var e = this.options.inline
                  ? "inline"
                  : this.options.ajax
                  ? "ajax"
                  : _.isElement(this.content) ||
                    _.isText(this.content) ||
                    _.isDocumentFragment(this.content)
                  ? "element"
                  : this._fn
                  ? "function"
                  : "html";
                switch (
                  (this._contentWrapper.css({ visibility: "hidden" }), e)
                ) {
                  case "html":
                  case "element":
                  case "inline":
                    if (this.is("updated")) return void (t && t());
                    this._update(this.content, t);
                    break;
                  case "function":
                    if (this.is("updated")) return void (t && t());
                    var n = this._fn(this.element);
                    if (!n) return this.is("updating", !1), void (t && t(!0));
                    this._update(n, t);
                    break;
                  case "ajax":
                    var i = this.options.ajax || {},
                      r = i.url || this.__content,
                      o = i.data || {},
                      a = ((e = i.type || "GET"), i.dataType),
                      s = { url: r, data: o };
                    e && $.extend(s, { type: e }),
                      a && $.extend(s, { dataType: a });
                    var l,
                      c = $.extend({}, s, i);
                    if (
                      (c.method && delete (c = $.extend({}, c)).method,
                      $.each(
                        "complete error success".split(" "),
                        function (e, n) {
                          c[n] ||
                            (c[n] =
                              "success" === n
                                ? function (t, e, n) {
                                    return n.responseText;
                                  }
                                : function () {}),
                            (c[n] = _.wrap(
                              c[n],
                              function (e) {
                                var i = _slice.call(arguments, 1),
                                  r = "object" == typeof i[0] ? i[0] : i[2];
                                if (!r.statusText || "abort" !== r.statusText) {
                                  this.options.cache &&
                                    AjaxCache.set(
                                      {
                                        url: c.url,
                                        type: c.type,
                                        data: c.data,
                                      },
                                      n,
                                      i
                                    ),
                                    (this._cache.xhr = null);
                                  var o = e.apply(this, i);
                                  o && this._update(o, t);
                                }
                              }.bind(this)
                            ));
                        }.bind(this)
                      ),
                      this.options.cache &&
                        (l = AjaxCache.get(c)) &&
                        l.callbacks.success)
                    )
                      return void $.each(
                        l.callbacks,
                        function (t, e) {
                          "function" == typeof c[t] && c[t].apply(this, e);
                        }.bind(this)
                      );
                    this.startLoading(), (this._cache.xhr = $.ajax(c));
                }
              }
            },
            _update: function (t, e) {
              var n = { title: this.options.title, close: this.options.close };
              "string" == typeof t ||
              _.isElement(t) ||
              _.isText(t) ||
              _.isDocumentFragment(t) ||
              t instanceof $
                ? (n.content = t)
                : $.extend(n, t),
                (t = n.content);
              var i = n.title,
                r = n.close;
              (this.content = t),
                (this.title = i),
                (this.close = r),
                this.createElementMarker(),
                (_.isElement(t) || t instanceof $) && $(t).show(),
                this._content.html(this.content),
                this._title.html(i && "string" == typeof i ? i : ""),
                this._titleWrapper[i ? "show" : "hide"](),
                this._close[
                  (this.title || this.options.title) && r ? "show" : "hide"
                ]();
              var o = r && !(this.options.title || this.title),
                a = r && !(this.options.title || this.title) && "overlap" !== r,
                s = r && (this.options.title || this.title) && "overlap" !== r;
              this._inner_close[o ? "show" : "hide"](),
                this._tooltip[(a ? "add" : "remove") + "Class"](
                  "tpd-has-inner-close"
                ),
                this._tooltip[(s ? "add" : "remove") + "Class"](
                  "tpd-has-title-close"
                ),
                this._content[
                  (this.options.padding ? "remove" : "add") + "Class"
                ]("tpd-content-no-padding"),
                this.finishUpdate(e);
            },
            sanitize: function (t) {
              if (!this.options.voila || this._content.find("img").length < 1)
                return this.is("sanitized", !0), void (t && t());
              this._cache.voila = Voila(
                this._content,
                { method: "onload" },
                function (e) {
                  this._markImagesAsSanitized(e.images),
                    this.is("refreshed-before-sanitized")
                      ? (this.is("refreshed-before-sanitized", !1),
                        this.sanitize(t))
                      : (this.is("sanitized", !0), t && t());
                }.bind(this)
              );
            },
            _markImagesAsSanitized: function (t) {
              $.each(t, function (t, e) {
                var n = e.img;
                $(n).data("completed-src", e.img.src);
              });
            },
            _hasAllImagesSanitized: function () {
              var t = !0;
              return (
                this._content.find("img").each(function (e, n) {
                  var i = $(n).data("completed-src");
                  if (!i || n.src !== i) return (t = !1), !1;
                }),
                t
              );
            },
            refresh: function () {
              this.visible() &&
                (this.is("sanitized")
                  ? (this.is("refreshing", !0),
                    this.clearTimer("refresh-spinner"),
                    !this.options.voila ||
                    this._content.find("img").length < 1 ||
                    this._hasAllImagesSanitized()
                      ? (this.is("should-update-dimensions", !0),
                        this.position(),
                        this.is("refreshing", !1))
                      : (this.is("sanitized", !1),
                        this._contentWrapper.css({ visibility: "hidden" }),
                        this.startLoading(),
                        this.sanitize(
                          function () {
                            this._contentWrapper.css({ visibility: "visible" }),
                              this.stopLoading(),
                              this.is("should-update-dimensions", !0),
                              this.position(),
                              this.is("refreshing", !1);
                          }.bind(this)
                        )))
                  : this.is("refreshed-before-sanitized", !0));
            },
            finishUpdate: function (t) {
              if (
                (this.is("updated", !0),
                this.is("updating", !1),
                "function" == typeof this.options.afterUpdate)
              ) {
                var e = this._contentWrapper.css("visibility");
                e && this._contentWrapper.css({ visibility: "visible" }),
                  this.options.afterUpdate(this._content[0], this.element),
                  e && this._contentWrapper.css({ visibility: "hidden" });
              }
              t && t();
            },
          }),
          $.extend(Tooltip.prototype, {
            clearUpdatedTo: function () {
              this._cache.updatedTo = {};
            },
            updateDimensionsToContent: function (t, e) {
              this.skin.build();
              var n = this.is("loading"),
                i = this._cache.updatedTo;
              if (
                (this._maxWidthPass ||
                  this.is("api") ||
                  this.is("should-update-dimensions") ||
                  i.stemPosition !== e ||
                  i.loading !== n) &&
                (!n || !this.is("resize-to-content"))
              ) {
                (this._cache.updatedTo = {
                  type: this.is("resize-to-content") ? "content" : "spinner",
                  loading: this.is("loading"),
                  stemPosition: e,
                }),
                  this.is("should-update-dimensions") &&
                    this.is("should-update-dimensions", !1),
                  (t = t || this.options.position.target),
                  (e = e || this.options.position.tooltip);
                var r = Position.getSide(e),
                  o = Position.getOrientation(e),
                  a = this.skin._css.border;
                this._tooltip.addClass("tpd-tooltip-measuring");
                var s = this._tooltip.attr("style");
                this._tooltip.removeAttr("style");
                var l = { top: a, right: a, bottom: a, left: a },
                  c = 0;
                if ("vertical" === Position.getOrientation(e)) {
                  this.options.stem &&
                    (l[r] =
                      this.skin[
                        "stem_" + r
                      ].getMath().dimensions.outside.height);
                  var d = this.getMouseRoom();
                  d[Position._flip[r]] && (l[r] += d[Position._flip[r]]);
                  var u = this.getContainmentLayout(e),
                    p = this.getPaddingLine(t),
                    h = !1;
                  Position.isPointWithinBoxLayout(p.x1, p.y1, u) ||
                  Position.isPointWithinBoxLayout(p.x2, p.y2, u)
                    ? (h = !0)
                    : $.each(
                        "top right bottom left".split(" "),
                        function (t, e) {
                          var n = this.getSideLine(u, e);
                          if (
                            Position.intersectsLine(
                              p.x1,
                              p.y1,
                              p.x2,
                              p.y2,
                              n.x1,
                              n.y1,
                              n.x2,
                              n.y2
                            )
                          )
                            return (h = !0), !1;
                        }.bind(this)
                      ),
                    h &&
                      ((c =
                        "left" === r
                          ? p.x1 - u.position.left
                          : u.position.left + u.dimensions.width - p.x1),
                      (l[r] += c));
                }
                if (this.options.offset && "vertical" === o) {
                  var f = Position.adjustOffsetBasedOnPosition(
                    this.options.offset,
                    this.options.position.target,
                    t
                  );
                  0 !== f.x && (l.right += Math.abs(f.x));
                }
                this.options.containment &&
                  (c = this.options.containment.padding) &&
                  ($.each(l, function (t, e) {
                    l[t] += c;
                  }),
                  "vertical" === o
                    ? (l["left" === r ? "left" : "right"] -= c)
                    : (l["top" === r ? "top" : "bottom"] -= c));
                var b = Bounds.viewport(),
                  m = { width: 0, height: 0 };
                this.close &&
                  "overlap" !== this.close &&
                  !this.title &&
                  ((m = this._innerCloseDimensions || {
                    width: this._inner_close.outerWidth(!0),
                    height: this._inner_close.outerHeight(!0),
                  }),
                  (this._innerCloseDimensions = m)),
                  this._contentRelativePadder.css({ "padding-right": m.width }),
                  this._contentSpacer.css({
                    width: b.width - l.left - l.right,
                  });
                var g = {
                    width: this._content.innerWidth() + m.width,
                    height: Math.max(
                      this._content.innerHeight(),
                      m.height || 0
                    ),
                  },
                  v = { width: 0, height: 0 };
                if (this.title) {
                  var _ = { width: 0, height: 0 };
                  this._titleWrapper
                    .add(this._titleSpacer)
                    .css({ width: "auto", height: "auto" }),
                    this.close &&
                      "overlap" !== this.close &&
                      ((_ = {
                        width: this._close.outerWidth(!0),
                        height: this._close.outerHeight(!0),
                      }),
                      this._close.hide()),
                    this._maxWidthPass &&
                      g.width > this.options.maxWidth &&
                      this._titleRelative.css({ width: g.width }),
                    this._titleRelativePadder.css({ "padding-right": _.width });
                  var y = parseFloat(
                    this._titleWrapper.css("border-bottom-width")
                  );
                  (v = {
                    width: this.title ? this._titleWrapper.innerWidth() : 0,
                    height: Math.max(
                      this.title ? this._titleWrapper.innerHeight() + y : 0,
                      _.height + y
                    ),
                  }).width >
                    b.width - l.left - l.right &&
                    ((v.width = b.width - l.left - l.right),
                    this._titleSpacer.css({ width: v.width }),
                    (v.height = Math.max(
                      this.title ? this._titleWrapper.innerHeight() + y : 0,
                      _.height + y
                    ))),
                    (g.width = Math.max(v.width, g.width)),
                    (g.height += v.height),
                    this._titleWrapper.css({
                      height: Math.max(
                        this.title ? this._titleWrapper.innerHeight() : 0,
                        _.height
                      ),
                    }),
                    this.close && this._close.show();
                }
                if (this.options.stem) {
                  var M = "vertical" === o ? "height" : "width",
                    O =
                      this.skin["stem_" + r].getMath().outside.width +
                      2 * this.skin._css.radius;
                  g[M] < O && (g[M] = O);
                }
                if (
                  (this._contentSpacer.css({ width: g.width }),
                  g.height !==
                    Math.max(this._content.innerHeight(), m.height) +
                      (this.title ? this._titleRelative.outerHeight() : 0) &&
                    g.width++,
                  this.is("resize-to-content") ||
                    (g = this.skin._css.spinner.dimensions),
                  this.setDimensions(g),
                  (l = { top: a, right: a, bottom: a, left: a }),
                  this.options.stem)
                ) {
                  var w = Position.getSide(e);
                  l[w] = this.skin.stem_top.getMath().dimensions.outside.height;
                }
                this._contentSpacer.css({
                  "margin-top": l.top,
                  "margin-left": +l.left,
                  width: g.width,
                }),
                  (this.title || this.close) &&
                    this._titleWrapper.css({
                      height: this._titleWrapper.innerHeight(),
                      width: g.width,
                    }),
                  this._tooltip.removeClass("tpd-tooltip-measuring"),
                  this._tooltip.attr("style", s);
                var A = this._contentRelative.add(this._titleRelative);
                this.options.maxWidth &&
                  g.width > this.options.maxWidth &&
                  !this._maxWidthPass &&
                  this.is("resize-to-content") &&
                  (A.css({ width: this.options.maxWidth }),
                  (this._maxWidthPass = !0),
                  this.updateDimensionsToContent(t, e),
                  (this._maxWidthPass = !1),
                  A.css({ width: "auto" }));
              }
            },
            setDimensions: function (t) {
              this.skin.setDimensions(t);
            },
            getContainmentSpace: function (t, e) {
              var n = this.getContainmentLayout(t, e),
                i = this.getTargetLayout(),
                r = i.position,
                o = i.dimensions,
                a = n.position,
                s = n.dimensions,
                l = {
                  top: Math.max(r.top - a.top, 0),
                  bottom: Math.max(a.top + s.height - (r.top + o.height), 0),
                  left: Math.max(r.left - a.left, 0),
                  right: Math.max(a.left + s.width - (r.left + o.width), 0),
                };
              return (
                r.top > a.top + s.height &&
                  (l.top -= r.top - (a.top + s.height)),
                r.top + o.height < a.top &&
                  (l.bottom -= a.top - (r.top + o.height)),
                r.left > a.left + s.width &&
                  a.left + s.width >= r.left &&
                  (l.left -= r.left - (a.left + s.width)),
                r.left + o.width < a.left &&
                  (l.right -= a.left - (r.left + o.width)),
                (this._cache.layouts.containmentSpace = l),
                l
              );
            },
            position: function (t) {
              if (this.visible()) {
                this.is("positioning", !0),
                  (this._cache.layouts = {}),
                  this._cache.dimensions;
                var e = this.options.position.target,
                  n = this.options.position.tooltip,
                  i = n,
                  r = e;
                this.updateDimensionsToContent(r, i);
                var o = deepExtend(this.getPositionBasedOnTarget(r, i)),
                  a = [];
                if (this.options.containment) {
                  var s = !1,
                    l = {};
                  if (
                    ($.each(
                      "top right bottom left".split(" "),
                      function (t, e) {
                        (l[e] = this.isSideWithinContainment(e, i, !0)) &&
                          (s = !0);
                      }.bind(this)
                    ),
                    s || (o.contained = !0),
                    o.contained)
                  )
                    this.setPosition(o);
                  else if (
                    (a.unshift({
                      position: o,
                      targetPosition: r,
                      stemPosition: i,
                    }),
                    (r = Position.flip(e)),
                    (i = Position.flip(n)),
                    l[Position.getSide(r)]
                      ? (this.updateDimensionsToContent(r, i),
                        (o = this.getPositionBasedOnTarget(r, i)))
                      : (o.contained = !1),
                    o.contained)
                  )
                    this.setPosition(o, i);
                  else {
                    a.unshift({
                      position: o,
                      targetPosition: r,
                      stemPosition: i,
                    });
                    var c = e,
                      d = this.getContainmentSpace(i, !0),
                      u =
                        "horizontal" === Position.getOrientation(c)
                          ? ["left", "right"]
                          : ["top", "bottom"],
                      p =
                        (d[u[0]] === d[u[1]]
                          ? "horizontal" === Position.getOrientation(c)
                            ? "left"
                            : "top"
                          : u[d[u[0]] > d[u[1]] ? 0 : 1]) +
                        Position.split(c)[1],
                      h = Position.flip(p);
                    if (
                      ((r = p),
                      (i = h),
                      l[Position.getSide(r)]
                        ? (this.updateDimensionsToContent(r, i),
                          (o = this.getPositionBasedOnTarget(r, i)))
                        : (o.contained = !1),
                      o.contained)
                    )
                      this.setPosition(o, i);
                    else {
                      var f;
                      a.unshift({
                        position: o,
                        targetPosition: r,
                        stemPosition: i,
                      });
                      var b = [];
                      if (
                        ($.each(a, function (t, e) {
                          if (e.position.top >= 0 && e.position.left >= 0)
                            f = e;
                          else {
                            var n =
                                e.position.top >= 0
                                  ? 1
                                  : Math.abs(e.position.top),
                              i =
                                e.position.left >= 0
                                  ? 1
                                  : Math.abs(e.position.left);
                            b.push({ result: e, negativity: n * i });
                          }
                        }),
                        !f)
                      ) {
                        var m = b[b.length - 1];
                        $.each(b, function (t, e) {
                          e.negativity < m.negativity && (m = e);
                        }),
                          (f = m.result);
                      }
                      this.updateDimensionsToContent(
                        f.targetPosition,
                        f.stemPosition,
                        !0
                      ),
                        this.setPosition(f.position, f.stemPosition);
                    }
                  }
                } else this.setPosition(o);
                (this._cache.dimensions = this.skin._vars.dimensions),
                  this.skin.paint(),
                  this.is("positioning", !1);
              }
            },
            getPositionBasedOnTarget: function (t, e) {
              e = e || this.options.position.tooltip;
              var n,
                i = this.getTargetDimensions(),
                r = { left: 0, top: 0 },
                o = { left: 0, top: 0 },
                a = (Position.getSide(t), this.skin._vars),
                s = a.frames[Position.getSide(e)],
                l = Position.getOrientation(t),
                c = Position.split(t);
              if ("horizontal" === l) {
                switch (((n = Math.floor(0.5 * i.width)), c[2])) {
                  case "left":
                    o.left = n;
                    break;
                  case "middle":
                    (r.left = i.width - n), (o.left = r.left);
                    break;
                  case "right":
                    (r.left = i.width), (o.left = i.width - n);
                }
                "bottom" === c[1] && ((r.top = i.height), (o.top = i.height));
              } else {
                switch (((n = Math.floor(0.5 * i.height)), c[2])) {
                  case "top":
                    o.top = n;
                    break;
                  case "middle":
                    (r.top = i.height - n), (o.top = r.top);
                    break;
                  case "bottom":
                    (o.top = i.height - n), (r.top = i.height);
                }
                "right" === c[1] && ((r.left = i.width), (o.left = i.width));
              }
              var d = this.getTargetPosition(),
                u = $.extend({}, i, {
                  top: d.top,
                  left: d.left,
                  connection: r,
                  max: o,
                }),
                p = {
                  width: s.dimensions.width,
                  height: s.dimensions.height,
                  top: 0,
                  left: 0,
                  connection: a.connections[e].connection,
                  stem: a.connections[e].stem,
                };
              if (
                ((p.top = u.top + u.connection.top),
                (p.left = u.left + u.connection.left),
                (p.top -= p.connection.top),
                (p.left -= p.connection.left),
                this.options.stem)
              ) {
                var h = a.stemDimensions.width,
                  f = {
                    stem: {
                      top: p.top + p.stem.connection.top,
                      left: p.left + p.stem.connection.left,
                    },
                    connection: {
                      top: u.top + u.connection.top,
                      left: u.left + u.connection.left,
                    },
                    max: { top: u.top + u.max.top, left: u.left + u.max.left },
                  };
                if (
                  !Position.isPointWithinBox(
                    f.stem.left,
                    f.stem.top,
                    f.connection.left,
                    f.connection.top,
                    f.max.left,
                    f.max.top
                  )
                ) {
                  f = {
                    stem: {
                      top: p.top + p.stem.connection.top,
                      left: p.left + p.stem.connection.left,
                    },
                    connection: {
                      top: u.top + u.connection.top,
                      left: u.left + u.connection.left,
                    },
                    max: { top: u.top + u.max.top, left: u.left + u.max.left },
                  };
                  var b = {
                      connection: Position.getDistance(
                        f.stem.left,
                        f.stem.top,
                        f.connection.left,
                        f.connection.top
                      ),
                      max: Position.getDistance(
                        f.stem.left,
                        f.stem.top,
                        f.max.left,
                        f.max.top
                      ),
                    },
                    m = Math.min(b.connection, b.max),
                    g = f[b.connection <= b.max ? "connection" : "max"],
                    v =
                      "horizontal" === Position.getOrientation(e)
                        ? "left"
                        : "top";
                  if (
                    h <=
                    Position.getDistance(
                      f.connection.left,
                      f.connection.top,
                      f.max.left,
                      f.max.top
                    )
                  ) {
                    var _ = { top: 0, left: 0 },
                      y = g[v] < f.stem[v] ? -1 : 1;
                    (_[v] = m * y),
                      (_[v] += Math.floor(0.5 * h) * y),
                      (p.left += _.left),
                      (p.top += _.top);
                  } else {
                    $.extend(f, {
                      center: {
                        top: Math.round(u.top + 0.5 * i.height),
                        left: Math.round(u.left + 0.5 * i.left),
                      },
                    });
                    var M = {
                        connection: Position.getDistance(
                          f.center.left,
                          f.center.top,
                          f.connection.left,
                          f.connection.top
                        ),
                        max: Position.getDistance(
                          f.center.left,
                          f.center.top,
                          f.max.left,
                          f.max.top
                        ),
                      },
                      O =
                        ((m = b[M.connection <= M.max ? "connection" : "max"]),
                        { top: 0, left: 0 });
                    (y = g[v] < f.stem[v] ? -1 : 1),
                      (O[v] = m * y),
                      (p.left += O.left),
                      (p.top += O.top);
                  }
                }
              }
              if (this.options.offset) {
                var w = $.extend({}, this.options.offset);
                (w = Position.adjustOffsetBasedOnPosition(
                  w,
                  this.options.position.target,
                  t
                )),
                  (p.top += w.y),
                  (p.left += w.x);
              }
              var A = this.getContainment({ top: p.top, left: p.left }, e),
                x = A.horizontal && A.vertical,
                z = { x: 0, y: 0 },
                C = Position.getOrientation(e);
              if (!A[C]) {
                var k = "horizontal" === C,
                  S = k ? ["left", "right"] : ["up", "down"],
                  T = k ? "x" : "y",
                  D = k ? "left" : "top",
                  L = A.correction[T],
                  q = this.getContainmentLayout(e),
                  E = q.position[k ? "left" : "top"];
                if (0 !== L) {
                  var j = a.connections[e].move,
                    P = j[S[-1 * L < 0 ? 0 : 1]],
                    R = L < 0 ? -1 : 1;
                  if (P >= L * R && p[D] + L >= E)
                    (p[D] += L), (z[T] = -1 * L), (x = !0);
                  else if (
                    Position.getOrientation(t) === Position.getOrientation(e)
                  ) {
                    if (((p[D] += P * R), (z[T] = P * R * -1), p[D] < E)) {
                      var I = E - p[D],
                        W = j[S[0]] + j[S[1]];
                      (I = Math.min(I, W)), (p[D] += I);
                      var N = z[T] - I;
                      N >= a.connections[e].move[S[0]] &&
                        N <= a.connections[e].move[S[1]] &&
                        (z[T] -= I);
                    }
                    var B = (A = this.getContainment(
                        { top: p.top, left: p.left },
                        e
                      )).correction[T],
                      F = deepExtend({}, p);
                    this.options.offset &&
                      ((F.left -= this.options.offset.x),
                      (F.top -= this.options.offset.y)),
                      ((f = {
                        stem: {
                          top: F.top + p.stem.connection.top,
                          left: F.left + p.stem.connection.left,
                        },
                      }).stem[D] += z[T]);
                    var H = this.getTargetLayout(),
                      Y = ((h = a.stemDimensions.width), Math.floor(0.5 * h)),
                      U = E + q.dimensions[k ? "width" : "height"];
                    if ("x" === T) {
                      var X = H.position.left + Y;
                      B > 0 && (X += H.dimensions.width - 2 * Y),
                        ((B < 0 && f.stem.left + B >= X && F.left + B >= E) ||
                          (B > 0 && f.stem.left + B <= X && F.left + B <= U)) &&
                          (F.left += B);
                    } else {
                      var V = H.position.top + Y;
                      B > 0 && (V += H.dimensions.height - 2 * Y),
                        ((B < 0 && f.stem.top + B >= V && F.top + B >= E) ||
                          (B > 0 && f.stem.top + B <= V && F.top + B <= U)) &&
                          (F.top += B);
                    }
                    (p = F),
                      this.options.offset &&
                        ((p.left += this.options.offset.x),
                        (p.top += this.options.offset.y));
                  }
                }
                x =
                  (A = this.getContainment({ top: p.top, left: p.left }, e))
                    .horizontal && A.vertical;
              }
              return { top: p.top, left: p.left, contained: x, shift: z };
            },
            setPosition: function (t, e) {
              var n = this._position;
              if (!n || n.top !== t.top || n.left !== t.left) {
                var i;
                if (this.options.container !== document.body) {
                  if ("string" == typeof this.options.container) {
                    var r = this.target;
                    "mouse" === r && (r = this.element),
                      (i = $($(r).closest(this.options.container).first()));
                  } else i = $(i);
                  if (i[0]) {
                    var o = $(i).offset(),
                      a = { top: Math.round(o.top), left: Math.round(o.left) },
                      s = {
                        top: Math.round($(i).scrollTop()),
                        left: Math.round($(i).scrollLeft()),
                      };
                    (t.top -= a.top),
                      (t.top += s.top),
                      (t.left -= a.left),
                      (t.left += s.left);
                  }
                }
                (this._position = t),
                  this._tooltip.css({ top: t.top, left: t.left });
              }
              this.skin.setStemPosition(
                e || this.options.position.tooltip,
                t.shift || { x: 0, y: 0 }
              );
            },
            getSideLine: function (t, e) {
              var n = t.position.left,
                i = t.position.top,
                r = t.position.left,
                o = t.position.top;
              switch (e) {
                case "top":
                  r += t.dimensions.width;
                  break;
                case "bottom":
                  (i += t.dimensions.height),
                    (r += t.dimensions.width),
                    (o += t.dimensions.height);
                  break;
                case "left":
                  o += t.dimensions.height;
                  break;
                case "right":
                  (n += t.dimensions.width),
                    (r += t.dimensions.width),
                    (o += t.dimensions.height);
              }
              return { x1: n, y1: i, x2: r, y2: o };
            },
            isSideWithinContainment: function (t, e, n) {
              var i = this.getContainmentLayout(e, n),
                r = this.getTargetLayout(),
                o = this.getSideLine(r, t);
              if (
                Position.isPointWithinBoxLayout(o.x1, o.y1, i) ||
                Position.isPointWithinBoxLayout(o.x2, o.y2, i)
              )
                return !0;
              var a = !1;
              return (
                $.each(
                  "top right bottom left".split(" "),
                  function (t, e) {
                    var n = this.getSideLine(i, e);
                    if (
                      Position.intersectsLine(
                        o.x1,
                        o.y1,
                        o.x2,
                        o.y2,
                        n.x1,
                        n.y1,
                        n.x2,
                        n.y2
                      )
                    )
                      return (a = !0), !1;
                  }.bind(this)
                ),
                a
              );
            },
            getContainment: function (t, e) {
              var n = {
                horizontal: !0,
                vertical: !0,
                correction: { y: 0, x: 0 },
              };
              if (this.options.containment) {
                var i = this.getContainmentLayout(e),
                  r = this.skin._vars.frames[Position.getSide(e)].dimensions;
                this.options.containment &&
                  ((t.left < i.position.left ||
                    t.left + r.width > i.position.left + i.dimensions.width) &&
                    ((n.horizontal = !1),
                    t.left < i.position.left
                      ? (n.correction.x = i.position.left - t.left)
                      : (n.correction.x =
                          i.position.left +
                          i.dimensions.width -
                          (t.left + r.width))),
                  (t.top < i.position.top ||
                    t.top + r.height > i.position.top + i.dimensions.height) &&
                    ((n.vertical = !1),
                    t.top < i.position.top
                      ? (n.correction.y = i.position.top - t.top)
                      : (n.correction.y =
                          i.position.top +
                          i.dimensions.height -
                          (t.top + r.height))));
              }
              return n;
            },
            getContainmentLayout: function (t, e) {
              var n = {
                  top: $(window).scrollTop(),
                  left: $(window).scrollLeft(),
                },
                i = this.target;
              "mouse" === i && (i = this.element);
              var r,
                o = $(i).closest(this.options.containment.selector).first()[0];
              r =
                o && "viewport" !== this.options.containment.selector
                  ? {
                      dimensions: {
                        width: $(o).innerWidth(),
                        height: $(o).innerHeight(),
                      },
                      position: $(o).offset(),
                    }
                  : { dimensions: Bounds.viewport(), position: n };
              var a = this.options.containment.padding;
              if (a && !e) {
                var s = Math.max(r.dimensions.height, r.dimensions.width);
                2 * a > s && (a = Math.max(Math.floor(0.5 * s), 0)),
                  a &&
                    ((r.dimensions.width -= 2 * a),
                    (r.dimensions.height -= 2 * a),
                    (r.position.top += a),
                    (r.position.left += a),
                    "vertical" === Position.getOrientation(t)
                      ? ((r.dimensions.width += a),
                        "left" === Position.getSide(t) &&
                          (r.position.left -= a))
                      : ((r.dimensions.height += a),
                        "top" === Position.getSide(t) &&
                          (r.position.top -= a)));
              }
              return (this._cache.layouts.containmentLayout = r), r;
            },
            getMouseRoom: function () {
              var t = { top: 0, left: 0, right: 0, bottom: 0 };
              if ("mouse" === this.options.target && !this.is("api")) {
                var e = Mouse.getActualPosition(this._cache.event),
                  n = $(this.element).offset(),
                  i = {
                    width: $(this.element).innerWidth(),
                    height: $(this.element).innerHeight(),
                  };
                t = {
                  top: Math.max(0, e.top - n.top),
                  bottom: Math.max(0, n.top + i.height - e.top),
                  left: Math.max(0, e.left - n.left),
                  right: Math.max(0, n.left + i.width - e.left),
                };
              }
              return t;
            },
            getTargetPosition: function () {
              var t, e;
              return (
                "mouse" === this.options.target
                  ? this.is("api")
                    ? ((e = $(this.element).offset()),
                      (t = {
                        top: Math.round(e.top),
                        left: Math.round(e.left),
                      }))
                    : (t = Mouse.getPosition(this._cache.event))
                  : ((e = $(this.target).offset()),
                    (t = { top: Math.round(e.top), left: Math.round(e.left) })),
                (this._cache.layouts.targetPosition = t),
                t
              );
            },
            getTargetDimensions: function () {
              return this._cache.layouts.targetDimensions
                ? this._cache.layouts.targetDimensions
                : ((t =
                    "mouse" === this.options.target
                      ? Mouse.getDimensions()
                      : {
                          width: $(this.target).innerWidth(),
                          height: $(this.target).innerHeight(),
                        }),
                  (this._cache.layouts.targetDimensions = t),
                  t);
              var t;
            },
            getTargetLayout: function () {
              if (this._cache.layouts.targetLayout)
                return this._cache.layouts.targetLayout;
              var t = {
                position: this.getTargetPosition(),
                dimensions: this.getTargetDimensions(),
              };
              return (this._cache.layouts.targetLayout = t), t;
            },
            getPaddingLine: function (t) {
              var e = this.getTargetLayout(),
                n = "left";
              if ("vertical" === Position.getOrientation(t))
                return this.getSideLine(e, Position.getSide(t));
              if (Position.isCorner(t)) {
                var i = Position.inverseCornerPlane(t);
                return (n = Position.getSide(i)), this.getSideLine(e, n);
              }
              var r = this.getSideLine(e, n),
                o = Math.round(0.5 * e.dimensions.width);
              return (r.x1 += o), (r.x2 += o), r;
            },
          }),
          $.extend(Tooltip.prototype, {
            setActive: function () {
              this.is("active", !0),
                this.visible() && this.raise(),
                this.options.hideAfter && this.clearTimer("idle");
            },
            setIdle: function () {
              this.is("active", !1),
                this.options.hideAfter &&
                  this.setTimer(
                    "idle",
                    function () {
                      this.clearTimer("idle"), this.is("active") || this.hide();
                    }.bind(this),
                    this.options.hideAfter
                  );
            },
          }),
          $.extend(Tooltip.prototype, {
            bind: function (t, e, n, i) {
              var r = n.bind(i || this);
              this._cache.events.push({ element: t, eventName: e, handler: r }),
                $(t).on(e, r);
            },
            unbind: function () {
              $.each(this._cache.events, function (t, e) {
                $(e.element).off(e.eventName, e.handler);
              }),
                (this._cache.events = []);
            },
          }),
          $.extend(Tooltip.prototype, {
            disable: function () {
              this.is("disabled") || this.is("disabled", !0);
            },
            enable: function () {
              this.is("disabled") && this.is("disabled", !1);
            },
          }),
          $.extend(Tooltip.prototype, {
            is: function (t, e) {
              return (
                "boolean" == typeof e && (this._cache.is[t] = e),
                this._cache.is[t]
              );
            },
            visible: function () {
              return this.is("visible");
            },
          }),
          $.extend(Tooltip.prototype, {
            setTimer: function (t, e, n) {
              this._cache.timers[t] = _.delay(e, n);
            },
            getTimer: function (t) {
              return this._cache.timers[t];
            },
            clearTimer: function (t) {
              this._cache.timers[t] &&
                (clearTimeout(this._cache.timers[t]),
                delete this._cache.timers[t]);
            },
            clearTimers: function () {
              $.each(this._cache.timers, function (t, e) {
                clearTimeout(e);
              }),
                (this._cache.timers = {});
            },
          }),
          $.extend(Tipped, {
            init: function () {
              Tooltips.init();
            },
            create: function (t, e) {
              var n = $.extend({}, arguments[2] || {}),
                i = [];
              return (
                _.isElement(t)
                  ? i.push(new Tooltip(t, e, n))
                  : $(t).each(function (t, r) {
                      i.push(new Tooltip(r, e, n));
                    }),
                new Collection(i)
              );
            },
            get: function (t) {
              return new Collection(Tooltips.get(t));
            },
            findElement: function (t) {
              return Tooltips.findElement(t);
            },
            hideAll: function () {
              return Tooltips.hideAll(), this;
            },
            setDefaultSkin: function (t) {
              return Tooltips.setDefaultSkin(t), this;
            },
            visible: function (t) {
              if (_.isElement(t)) return Tooltips.isVisibleByElement(t);
              if (void 0 !== t) {
                var e = $(t),
                  n = 0;
                return (
                  $.each(e, function (t, e) {
                    Tooltips.isVisibleByElement(e) && n++;
                  }),
                  n
                );
              }
              return Tooltips.getVisible().length;
            },
            clearAjaxCache: function () {
              return Tooltips.clearAjaxCache(), this;
            },
            refresh: function (t, e, n) {
              return Tooltips.refresh(t, e, n), this;
            },
            setStartingZIndex: function (t) {
              return Tooltips.setStartingZIndex(t), this;
            },
            remove: function (t) {
              return Tooltips.remove(t), this;
            },
          }),
          $.each("show hide toggle disable enable".split(" "), function (t, e) {
            Tipped[e] = function (t) {
              return this.get(t)[e](), this;
            };
          }),
          $.extend(Tipped, {
            delegate: function () {
              Delegations.add.apply(Delegations, _slice.call(arguments));
            },
            undelegate: function () {
              Delegations.remove.apply(Delegations, _slice.call(arguments));
            },
          });
        var Delegations = {
          _uid: 0,
          _delegations: {},
          add: function (t, e, n) {
            "object" != typeof e || _.isElement(e)
              ? (n = arguments[2] || {})
              : ((n = e), (e = null));
            var i = ++this._uid,
              r = Options.create($.extend({}, n));
            this._delegations[i] = {
              uid: i,
              selector: t,
              content: e,
              options: r,
            };
            var o = function (t) {
              $(this).addClass("tpd-delegation-uid-" + i);
              var r = new Tooltip(this, e, n);
              (r._cache.event = t), r.setActive(), r.showDelayed();
            };
            (this._delegations[i].removeTitleHandler =
              this.removeTitle.bind(this)),
              $(document).on(
                "mouseenter",
                t + ":not(.tpd-delegation-uid-" + i + ")",
                this._delegations[i].removeTitleHandler
              ),
              (this._delegations[i].handler = o),
              $(document).on(
                r.showOn.element,
                t + ":not(.tpd-delegation-uid-" + i + ")",
                o
              );
          },
          removeTitle: function (t) {
            var e = t.currentTarget,
              n = $(e).attr("title");
            n &&
              ($(e).data("tipped-restore-title", n),
              $(e)[0].setAttribute("title", ""));
          },
          remove: function (t) {
            $.each(
              this._delegations,
              function (e, n) {
                n.selector === t &&
                  ($(document)
                    .off(
                      "mouseenter",
                      t + ":not(.tpd-delegation-uid-" + e + ")",
                      n.removeTitleHandler
                    )
                    .off(
                      n.options.showOn.element,
                      t + ":not(.tpd-delegation-uid-" + e + ")",
                      n.handler
                    ),
                  delete this._delegations[e]);
              }.bind(this)
            );
          },
          removeAll: function () {
            $.each(
              this._delegations,
              function (t, e) {
                $(document)
                  .off(
                    "mouseenter",
                    e.selector + ":not(.tpd-delegation-uid-" + t + ")",
                    e.removeTitleHandler
                  )
                  .off(
                    e.options.showOn.element,
                    e.selector + ":not(.tpd-delegation-uid-" + t + ")",
                    e.handler
                  ),
                  delete this._delegations[t];
              }.bind(this)
            );
          },
        };
        function Collection() {
          this.initialize.apply(this, _slice.call(arguments));
        }
        return (
          $.extend(Collection.prototype, {
            initialize: function (t) {
              return (this.tooltips = t), this;
            },
            items: function () {
              return (
                $.each(this.tooltips, function (t, e) {
                  e.is("api", !0);
                }),
                this.tooltips
              );
            },
            refresh: function () {
              return (
                $.each(this._tooltips, function (t, e) {
                  e.is("visible") && e.refresh();
                }),
                this
              );
            },
            remove: function () {
              return (
                Tooltips.removeTooltips(this.tooltips),
                (this.tooltips = []),
                this
              );
            },
          }),
          $.each("show hide toggle disable enable".split(" "), function (t, e) {
            Collection.prototype[e] = function () {
              return (
                $.each(this.tooltips, function (t, n) {
                  n.is("api", !0), n[e]();
                }),
                this
              );
            };
          }),
          Tipped.init(),
          Tipped
        );
      }),
        (__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(30)]),
        void 0 ===
          (__WEBPACK_AMD_DEFINE_RESULT__ =
            "function" == typeof (__WEBPACK_AMD_DEFINE_FACTORY__ = factory)
              ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(
                  exports,
                  __WEBPACK_AMD_DEFINE_ARRAY__
                )
              : __WEBPACK_AMD_DEFINE_FACTORY__) ||
          (module.exports = __WEBPACK_AMD_DEFINE_RESULT__);
    }).call(this, __webpack_require__(30));
  },
  function (t, e, n) {
    var i, r, o;
    (r = [n(30)]),
      void 0 ===
        (o =
          "function" ==
          typeof (i = function (t) {
            var e = window;
            (t.fn.confirm = function (n, i) {
              return (
                void 0 === n && (n = {}),
                "string" == typeof n && (n = { content: n, title: i || !1 }),
                t(this).each(function () {
                  var i = t(this);
                  i.attr("jc-attached") ||
                    (i.on("click", function (r) {
                      r.preventDefault();
                      var o = t.extend({}, n);
                      if (
                        (i.attr("data-title") &&
                          (o.title = i.attr("data-title")),
                        i.attr("data-content") &&
                          (o.content = i.attr("data-content")),
                        void 0 === o.buttons && (o.buttons = {}),
                        (o.$target = i),
                        i.attr("href") && 0 === Object.keys(o.buttons).length)
                      ) {
                        var a = t.extend(
                            !0,
                            {},
                            e.jconfirm.pluginDefaults.defaultButtons,
                            (e.jconfirm.defaults || {}).defaultButtons || {}
                          ),
                          s = Object.keys(a)[0];
                        (o.buttons = a),
                          (o.buttons[s].action = function () {
                            location.href = i.attr("href");
                          });
                      }
                      (o.closeIcon = !1), t.confirm(o);
                    }),
                    i.attr("jc-attached", !0));
                }),
                t(this)
              );
            }),
              (t.confirm = function (n, i) {
                void 0 === n && (n = {}),
                  "string" == typeof n && (n = { content: n, title: i || !1 });
                var r = !(!1 === n.buttons);
                if (
                  ("object" != typeof n.buttons && (n.buttons = {}),
                  0 === Object.keys(n.buttons).length && r)
                ) {
                  var o = t.extend(
                    !0,
                    {},
                    e.jconfirm.pluginDefaults.defaultButtons,
                    (e.jconfirm.defaults || {}).defaultButtons || {}
                  );
                  n.buttons = o;
                }
                return e.jconfirm(n);
              }),
              (t.alert = function (n, i) {
                void 0 === n && (n = {}),
                  "string" == typeof n && (n = { content: n, title: i || !1 });
                var r = !(!1 === n.buttons);
                if (
                  ("object" != typeof n.buttons && (n.buttons = {}),
                  0 === Object.keys(n.buttons).length && r)
                ) {
                  var o = t.extend(
                      !0,
                      {},
                      e.jconfirm.pluginDefaults.defaultButtons,
                      (e.jconfirm.defaults || {}).defaultButtons || {}
                    ),
                    a = Object.keys(o)[0];
                  n.buttons[a] = o[a];
                }
                return e.jconfirm(n);
              }),
              (t.dialog = function (t, n) {
                return (
                  void 0 === t && (t = {}),
                  "string" == typeof t &&
                    (t = {
                      content: t,
                      title: n || !1,
                      closeIcon: function () {},
                    }),
                  (t.buttons = {}),
                  void 0 === t.closeIcon && (t.closeIcon = function () {}),
                  (t.confirmKeys = [13]),
                  e.jconfirm(t)
                );
              }),
              (e.jconfirm = function (n) {
                void 0 === n && (n = {});
                var i = t.extend(!0, {}, e.jconfirm.pluginDefaults);
                e.jconfirm.defaults &&
                  (i = t.extend(!0, i, e.jconfirm.defaults)),
                  (i = t.extend(!0, {}, i, n));
                var r = new e.Jconfirm(i);
                return e.jconfirm.instances.push(r), r;
              }),
              (e.Jconfirm = function (e) {
                t.extend(this, e), this._init();
              }),
              (e.Jconfirm.prototype = {
                _init: function () {
                  var n = this;
                  e.jconfirm.instances.length ||
                    (e.jconfirm.lastFocused = t("body").find(":focus")),
                    (this._id = Math.round(99999 * Math.random())),
                    (this.contentParsed = t(document.createElement("div"))),
                    this.lazyOpen ||
                      setTimeout(function () {
                        n.open();
                      }, 0);
                },
                _buildHTML: function () {
                  var e = this;
                  this._parseAnimation(this.animation, "o"),
                    this._parseAnimation(this.closeAnimation, "c"),
                    this._parseBgDismissAnimation(
                      this.backgroundDismissAnimation
                    ),
                    this._parseColumnClass(this.columnClass),
                    this._parseTheme(this.theme),
                    this._parseType(this.type);
                  var n = t(this.template);
                  n
                    .find(".jconfirm-box")
                    .addClass(this.animationParsed)
                    .addClass(this.backgroundDismissAnimationParsed)
                    .addClass(this.typeParsed),
                    this.typeAnimated &&
                      n
                        .find(".jconfirm-box")
                        .addClass("jconfirm-type-animated"),
                    this.useBootstrap
                      ? (n
                          .find(".jc-bs3-row")
                          .addClass(this.bootstrapClasses.row),
                        n
                          .find(".jc-bs3-row")
                          .addClass(
                            "justify-content-md-center justify-content-sm-center justify-content-xs-center justify-content-lg-center"
                          ),
                        n
                          .find(".jconfirm-box-container")
                          .addClass(this.columnClassParsed),
                        this.containerFluid
                          ? n
                              .find(".jc-bs3-container")
                              .addClass(this.bootstrapClasses.containerFluid)
                          : n
                              .find(".jc-bs3-container")
                              .addClass(this.bootstrapClasses.container))
                      : n.find(".jconfirm-box").css("width", this.boxWidth),
                    this.titleClass &&
                      n.find(".jconfirm-title-c").addClass(this.titleClass),
                    n.addClass(this.themeParsed);
                  var i = "jconfirm-box" + this._id;
                  n
                    .find(".jconfirm-box")
                    .attr("aria-labelledby", i)
                    .attr("tabindex", -1),
                    n.find(".jconfirm-content").attr("id", i),
                    null !== this.bgOpacity &&
                      n.find(".jconfirm-bg").css("opacity", this.bgOpacity),
                    this.rtl && n.addClass("jconfirm-rtl"),
                    (this.$el = n.appendTo(this.container)),
                    (this.$jconfirmBoxContainer = this.$el.find(
                      ".jconfirm-box-container"
                    )),
                    (this.$jconfirmBox = this.$body =
                      this.$el.find(".jconfirm-box")),
                    (this.$jconfirmBg = this.$el.find(".jconfirm-bg")),
                    (this.$title = this.$el.find(".jconfirm-title")),
                    (this.$titleContainer = this.$el.find(".jconfirm-title-c")),
                    (this.$content = this.$el.find("div.jconfirm-content")),
                    (this.$contentPane = this.$el.find(
                      ".jconfirm-content-pane"
                    )),
                    (this.$icon = this.$el.find(".jconfirm-icon-c")),
                    (this.$closeIcon = this.$el.find(".jconfirm-closeIcon")),
                    (this.$holder = this.$el.find(".jconfirm-holder")),
                    (this.$btnc = this.$el.find(".jconfirm-buttons")),
                    (this.$scrollPane = this.$el.find(".jconfirm-scrollpane")),
                    e.setStartingPoint(),
                    (this._contentReady = t.Deferred()),
                    (this._modalReady = t.Deferred()),
                    this.$holder.css({
                      "padding-top": this.offsetTop,
                      "padding-bottom": this.offsetBottom,
                    }),
                    this.setTitle(),
                    this.setIcon(),
                    this._setButtons(),
                    this._parseContent(),
                    this.initDraggable(),
                    this.isAjax && this.showLoading(!1),
                    t
                      .when(this._contentReady, this._modalReady)
                      .then(function () {
                        e.isAjaxLoading
                          ? setTimeout(function () {
                              (e.isAjaxLoading = !1),
                                e.setContent(),
                                e.setTitle(),
                                e.setIcon(),
                                setTimeout(function () {
                                  e.hideLoading(!1),
                                    e._updateContentMaxHeight();
                                }, 100),
                                "function" == typeof e.onContentReady &&
                                  e.onContentReady();
                            }, 50)
                          : (e._updateContentMaxHeight(),
                            e.setTitle(),
                            e.setIcon(),
                            "function" == typeof e.onContentReady &&
                              e.onContentReady()),
                          e.autoClose && e._startCountDown();
                      })
                      .then(function () {
                        e._watchContent();
                      }),
                    "none" === this.animation &&
                      ((this.animationSpeed = 1), (this.animationBounce = 1)),
                    this.$body.css(
                      this._getCSS(this.animationSpeed, this.animationBounce)
                    ),
                    this.$contentPane.css(this._getCSS(this.animationSpeed, 1)),
                    this.$jconfirmBg.css(this._getCSS(this.animationSpeed, 1)),
                    this.$jconfirmBoxContainer.css(
                      this._getCSS(this.animationSpeed, 1)
                    );
                },
                _typePrefix: "jconfirm-type-",
                typeParsed: "",
                _parseType: function (t) {
                  this.typeParsed = this._typePrefix + t;
                },
                setType: function (t) {
                  var e = this.typeParsed;
                  this._parseType(t),
                    this.$jconfirmBox.removeClass(e).addClass(this.typeParsed);
                },
                themeParsed: "",
                _themePrefix: "jconfirm-",
                setTheme: function (t) {
                  var e = this.theme;
                  (this.theme = t || this.theme),
                    this._parseTheme(this.theme),
                    e && this.$el.removeClass(e),
                    this.$el.addClass(this.themeParsed),
                    (this.theme = t);
                },
                _parseTheme: function (e) {
                  var n = this;
                  (e = e.split(",")),
                    t.each(e, function (i, r) {
                      -1 === r.indexOf(n._themePrefix) &&
                        (e[i] = n._themePrefix + t.trim(r));
                    }),
                    (this.themeParsed = e.join(" ").toLowerCase());
                },
                backgroundDismissAnimationParsed: "",
                _bgDismissPrefix: "jconfirm-hilight-",
                _parseBgDismissAnimation: function (e) {
                  var n = e.split(","),
                    i = this;
                  t.each(n, function (e, r) {
                    -1 === r.indexOf(i._bgDismissPrefix) &&
                      (n[e] = i._bgDismissPrefix + t.trim(r));
                  }),
                    (this.backgroundDismissAnimationParsed = n
                      .join(" ")
                      .toLowerCase());
                },
                animationParsed: "",
                closeAnimationParsed: "",
                _animationPrefix: "jconfirm-animation-",
                setAnimation: function (t) {
                  (this.animation = t || this.animation),
                    this._parseAnimation(this.animation, "o");
                },
                _parseAnimation: function (e, n) {
                  n = n || "o";
                  var i = e.split(","),
                    r = this;
                  t.each(i, function (e, n) {
                    -1 === n.indexOf(r._animationPrefix) &&
                      (i[e] = r._animationPrefix + t.trim(n));
                  });
                  var o = i.join(" ").toLowerCase();
                  return (
                    "o" === n
                      ? (this.animationParsed = o)
                      : (this.closeAnimationParsed = o),
                    o
                  );
                },
                setCloseAnimation: function (t) {
                  (this.closeAnimation = t || this.closeAnimation),
                    this._parseAnimation(this.closeAnimation, "c");
                },
                setAnimationSpeed: function (t) {
                  this.animationSpeed = t || this.animationSpeed;
                },
                columnClassParsed: "",
                setColumnClass: function (t) {
                  this.useBootstrap &&
                    ((this.columnClass = t || this.columnClass),
                    this._parseColumnClass(this.columnClass),
                    this.$jconfirmBoxContainer.addClass(
                      this.columnClassParsed
                    ));
                },
                _updateContentMaxHeight: function () {
                  var e =
                    t(window).height() -
                    (this.$jconfirmBox.outerHeight() -
                      this.$contentPane.outerHeight()) -
                    (this.offsetTop + this.offsetBottom);
                  this.$contentPane.css({ "max-height": e + "px" });
                },
                setBoxWidth: function (t) {
                  this.useBootstrap ||
                    ((this.boxWidth = t), this.$jconfirmBox.css("width", t));
                },
                _parseColumnClass: function (t) {
                  var e;
                  switch ((t = t.toLowerCase())) {
                    case "xl":
                    case "xlarge":
                      e = "col-md-12";
                      break;
                    case "l":
                    case "large":
                      e = "col-md-8 col-md-offset-2";
                      break;
                    case "m":
                    case "medium":
                      e = "col-md-6 col-md-offset-3";
                      break;
                    case "s":
                    case "small":
                      e = "col-md-4 col-md-offset-4";
                      break;
                    case "xs":
                    case "xsmall":
                      e = "col-md-2 col-md-offset-5";
                      break;
                    default:
                      e = t;
                  }
                  this.columnClassParsed = e;
                },
                initDraggable: function () {
                  var e = this,
                    n = this.$titleContainer;
                  this.resetDrag(),
                    this.draggable &&
                      (n.on("mousedown", function (t) {
                        n.addClass("jconfirm-hand"),
                          (e.mouseX = t.clientX),
                          (e.mouseY = t.clientY),
                          (e.isDrag = !0);
                      }),
                      t(window).on("mousemove." + this._id, function (t) {
                        e.isDrag &&
                          ((e.movingX = t.clientX - e.mouseX + e.initialX),
                          (e.movingY = t.clientY - e.mouseY + e.initialY),
                          e.setDrag());
                      }),
                      t(window).on("mouseup." + this._id, function () {
                        n.removeClass("jconfirm-hand"),
                          e.isDrag &&
                            ((e.isDrag = !1),
                            (e.initialX = e.movingX),
                            (e.initialY = e.movingY));
                      }));
                },
                resetDrag: function () {
                  (this.isDrag = !1),
                    (this.initialX = 0),
                    (this.initialY = 0),
                    (this.movingX = 0),
                    (this.movingY = 0),
                    (this.mouseX = 0),
                    (this.mouseY = 0),
                    this.$jconfirmBoxContainer.css(
                      "transform",
                      "translate(0px, 0px)"
                    );
                },
                setDrag: function () {
                  if (this.draggable) {
                    this.alignMiddle = !1;
                    var e = this.$jconfirmBox.outerWidth(),
                      n = this.$jconfirmBox.outerHeight(),
                      i = t(window).width(),
                      r = t(window).height();
                    if (this.movingX % 1 == 0 || this.movingY % 1 == 0) {
                      if (this.dragWindowBorder) {
                        var o = i / 2 - e / 2,
                          a = r / 2 - n / 2;
                        (a -= this.dragWindowGap),
                          (o -= this.dragWindowGap) + this.movingX < 0
                            ? (this.movingX = -o)
                            : o - this.movingX < 0 && (this.movingX = o),
                          a + this.movingY < 0
                            ? (this.movingY = -a)
                            : a - this.movingY < 0 && (this.movingY = a);
                      }
                      this.$jconfirmBoxContainer.css(
                        "transform",
                        "translate(" +
                          this.movingX +
                          "px, " +
                          this.movingY +
                          "px)"
                      );
                    }
                  }
                },
                _scrollTop: function () {
                  if ("undefined" != typeof pageYOffset) return pageYOffset;
                  var t = document.body,
                    e = document.documentElement;
                  return (e = e.clientHeight ? e : t).scrollTop;
                },
                _watchContent: function () {
                  var e = this;
                  this._timer && clearInterval(this._timer);
                  var n = 0;
                  this._timer = setInterval(function () {
                    if (e.smoothContent) {
                      var i = e.$content.outerHeight() || 0;
                      i !== n && (n = i);
                      var r = t(window).height();
                      e.offsetTop +
                        e.offsetBottom +
                        e.$jconfirmBox.height() -
                        e.$contentPane.height() +
                        e.$content.height() <
                      r
                        ? e.$contentPane.addClass("no-scroll")
                        : e.$contentPane.removeClass("no-scroll");
                    }
                  }, this.watchInterval);
                },
                _overflowClass: "jconfirm-overflow",
                _hilightAnimating: !1,
                highlight: function () {
                  this.hiLightModal();
                },
                hiLightModal: function () {
                  var t = this;
                  if (!this._hilightAnimating) {
                    t.$body.addClass("hilight");
                    var e = parseFloat(t.$body.css("animation-duration")) || 2;
                    (this._hilightAnimating = !0),
                      setTimeout(function () {
                        (t._hilightAnimating = !1),
                          t.$body.removeClass("hilight");
                      }, 1e3 * e);
                  }
                },
                _bindEvents: function () {
                  var e = this;
                  (this.boxClicked = !1),
                    this.$scrollPane.click(function (t) {
                      if (!e.boxClicked) {
                        var n,
                          i = !1,
                          r = !1;
                        if (
                          ("string" ==
                            typeof (n =
                              "function" == typeof e.backgroundDismiss
                                ? e.backgroundDismiss()
                                : e.backgroundDismiss) &&
                          void 0 !== e.buttons[n]
                            ? ((i = n), (r = !1))
                            : (r = void 0 === n || 1 == !!n),
                          i)
                        ) {
                          var o = e.buttons[i].action.apply(e);
                          r = void 0 === o || !!o;
                        }
                        r ? e.close() : e.hiLightModal();
                      }
                      e.boxClicked = !1;
                    }),
                    this.$jconfirmBox.click(function (t) {
                      e.boxClicked = !0;
                    });
                  var n = !1;
                  t(window).on("jcKeyDown." + e._id, function (t) {
                    n || (n = !0);
                  }),
                    t(window).on("keyup." + e._id, function (t) {
                      n && (e.reactOnKey(t), (n = !1));
                    }),
                    t(window).on("resize." + this._id, function () {
                      e._updateContentMaxHeight(),
                        setTimeout(function () {
                          e.resetDrag();
                        }, 100);
                    });
                },
                _cubic_bezier: "0.36, 0.55, 0.19",
                _getCSS: function (t, e) {
                  return {
                    "-webkit-transition-duration": t / 1e3 + "s",
                    "transition-duration": t / 1e3 + "s",
                    "-webkit-transition-timing-function":
                      "cubic-bezier(" + this._cubic_bezier + ", " + e + ")",
                    "transition-timing-function":
                      "cubic-bezier(" + this._cubic_bezier + ", " + e + ")",
                  };
                },
                _setButtons: function () {
                  var e = this,
                    n = 0;
                  if (
                    ("object" != typeof this.buttons && (this.buttons = {}),
                    t.each(this.buttons, function (i, r) {
                      (n += 1),
                        "function" == typeof r &&
                          (e.buttons[i] = r = { action: r }),
                        (e.buttons[i].text = r.text || i),
                        (e.buttons[i].btnClass = r.btnClass || "btn-default"),
                        (e.buttons[i].action = r.action || function () {}),
                        (e.buttons[i].keys = r.keys || []),
                        (e.buttons[i].isHidden = r.isHidden || !1),
                        (e.buttons[i].isDisabled = r.isDisabled || !1),
                        t.each(e.buttons[i].keys, function (t, n) {
                          e.buttons[i].keys[t] = n.toLowerCase();
                        });
                      var o = t('<button type="button" class="btn"></button>')
                        .html(e.buttons[i].text)
                        .addClass(e.buttons[i].btnClass)
                        .prop("disabled", e.buttons[i].isDisabled)
                        .css("display", e.buttons[i].isHidden ? "none" : "")
                        .click(function (t) {
                          t.preventDefault();
                          var n = e.buttons[i].action.apply(e, [e.buttons[i]]);
                          e.onAction.apply(e, [i, e.buttons[i]]),
                            e._stopCountDown(),
                            (void 0 === n || n) && e.close();
                        });
                      (e.buttons[i].el = o),
                        (e.buttons[i].setText = function (t) {
                          o.html(t);
                        }),
                        (e.buttons[i].addClass = function (t) {
                          o.addClass(t);
                        }),
                        (e.buttons[i].removeClass = function (t) {
                          o.removeClass(t);
                        }),
                        (e.buttons[i].disable = function () {
                          (e.buttons[i].isDisabled = !0),
                            o.prop("disabled", !0);
                        }),
                        (e.buttons[i].enable = function () {
                          (e.buttons[i].isDisabled = !1),
                            o.prop("disabled", !1);
                        }),
                        (e.buttons[i].show = function () {
                          (e.buttons[i].isHidden = !1), o.css("display", "");
                        }),
                        (e.buttons[i].hide = function () {
                          (e.buttons[i].isHidden = !0),
                            o.css("display", "none");
                        }),
                        (e["$_" + i] = e["$$" + i] = o),
                        e.$btnc.append(o);
                    }),
                    0 === n && this.$btnc.hide(),
                    null === this.closeIcon && 0 === n && (this.closeIcon = !0),
                    this.closeIcon)
                  ) {
                    if (this.closeIconClass) {
                      var i = '<i class="' + this.closeIconClass + '"></i>';
                      this.$closeIcon.html(i);
                    }
                    this.$closeIcon.click(function (t) {
                      t.preventDefault();
                      var n,
                        i = !1,
                        r = !1;
                      if (
                        ("string" ==
                          typeof (n =
                            "function" == typeof e.closeIcon
                              ? e.closeIcon()
                              : e.closeIcon) && void 0 !== e.buttons[n]
                          ? ((i = n), (r = !1))
                          : (r = void 0 === n || 1 == !!n),
                        i)
                      ) {
                        var o = e.buttons[i].action.apply(e);
                        r = void 0 === o || !!o;
                      }
                      r && e.close();
                    }),
                      this.$closeIcon.show();
                  } else this.$closeIcon.hide();
                },
                setTitle: function (t, e) {
                  if (((e = e || !1), void 0 !== t))
                    if ("string" == typeof t) this.title = t;
                    else if ("function" == typeof t) {
                      t.promise;
                      var n = t();
                      this.title = "string" == typeof n && n;
                    } else this.title = !1;
                  (this.isAjaxLoading && !e) ||
                    (this.$title.html(this.title || ""),
                    this.updateTitleContainer());
                },
                setIcon: function (t, e) {
                  if (((e = e || !1), void 0 !== t))
                    if ("string" == typeof t) this.icon = t;
                    else if ("function" == typeof t) {
                      var n = t();
                      this.icon = "string" == typeof n && n;
                    } else this.icon = !1;
                  (this.isAjaxLoading && !e) ||
                    (this.$icon.html(
                      this.icon ? '<i class="' + this.icon + '"></i>' : ""
                    ),
                    this.updateTitleContainer());
                },
                updateTitleContainer: function () {
                  this.title || this.icon
                    ? this.$titleContainer.show()
                    : this.$titleContainer.hide();
                },
                setContentPrepend: function (t, e) {
                  t && this.contentParsed.prepend(t);
                },
                setContentAppend: function (t) {
                  t && this.contentParsed.append(t);
                },
                setContent: function (t, e) {
                  e = !!e;
                  var n = this;
                  t && this.contentParsed.html("").append(t),
                    (this.isAjaxLoading && !e) ||
                      (this.$content.html(""),
                      this.$content.append(this.contentParsed),
                      setTimeout(function () {
                        n.$body.find("input[autofocus]:visible:first").focus();
                      }, 100));
                },
                loadingSpinner: !1,
                showLoading: function (t) {
                  (this.loadingSpinner = !0),
                    this.$jconfirmBox.addClass("loading"),
                    t && this.$btnc.find("button").prop("disabled", !0);
                },
                hideLoading: function (t) {
                  (this.loadingSpinner = !1),
                    this.$jconfirmBox.removeClass("loading"),
                    t && this.$btnc.find("button").prop("disabled", !1);
                },
                ajaxResponse: !1,
                contentParsed: "",
                isAjax: !1,
                isAjaxLoading: !1,
                _parseContent: function () {
                  var e = this,
                    n = "&nbsp;";
                  if ("function" == typeof this.content) {
                    var i = this.content.apply(this);
                    "string" == typeof i
                      ? (this.content = i)
                      : "object" == typeof i && "function" == typeof i.always
                      ? ((this.isAjax = !0),
                        (this.isAjaxLoading = !0),
                        i.always(function (t, n, i) {
                          (e.ajaxResponse = { data: t, status: n, xhr: i }),
                            e._contentReady.resolve(t, n, i),
                            "function" == typeof e.contentLoaded &&
                              e.contentLoaded(t, n, i);
                        }),
                        (this.content = n))
                      : (this.content = n);
                  }
                  if (
                    "string" == typeof this.content &&
                    "url:" === this.content.substr(0, 4).toLowerCase()
                  ) {
                    (this.isAjax = !0), (this.isAjaxLoading = !0);
                    var r = this.content.substring(4, this.content.length);
                    t.get(r)
                      .done(function (t) {
                        e.contentParsed.html(t);
                      })
                      .always(function (t, n, i) {
                        (e.ajaxResponse = { data: t, status: n, xhr: i }),
                          e._contentReady.resolve(t, n, i),
                          "function" == typeof e.contentLoaded &&
                            e.contentLoaded(t, n, i);
                      });
                  }
                  this.content || (this.content = n),
                    this.isAjax ||
                      (this.contentParsed.html(this.content),
                      this.setContent(),
                      e._contentReady.resolve());
                },
                _stopCountDown: function () {
                  clearInterval(this.autoCloseInterval),
                    this.$cd && this.$cd.remove();
                },
                _startCountDown: function () {
                  var e = this,
                    n = this.autoClose.split("|");
                  if (2 !== n.length) return !1;
                  var i = n[0],
                    r = parseInt(n[1]);
                  if (void 0 === this.buttons[i]) return !1;
                  var o = Math.ceil(r / 1e3);
                  (this.$cd = t(
                    '<span class="countdown"> (' + o + ")</span>"
                  ).appendTo(this["$_" + i])),
                    (this.autoCloseInterval = setInterval(function () {
                      e.$cd.html(" (" + (o -= 1) + ") "),
                        o <= 0 &&
                          (e["$$" + i].trigger("click"), e._stopCountDown());
                    }, 1e3));
                },
                _getKey: function (t) {
                  switch (t) {
                    case 192:
                      return "tilde";
                    case 13:
                      return "enter";
                    case 16:
                      return "shift";
                    case 9:
                      return "tab";
                    case 20:
                      return "capslock";
                    case 17:
                      return "ctrl";
                    case 91:
                      return "win";
                    case 18:
                      return "alt";
                    case 27:
                      return "esc";
                    case 32:
                      return "space";
                  }
                  var e = String.fromCharCode(t);
                  return !!/^[A-z0-9]+$/.test(e) && e.toLowerCase();
                },
                reactOnKey: function (e) {
                  var n = this,
                    i = t(".jconfirm");
                  if (i.eq(i.length - 1)[0] !== this.$el[0]) return !1;
                  var r = e.which;
                  if (
                    this.$content.find(":input").is(":focus") &&
                    /13|32/.test(r)
                  )
                    return !1;
                  var o,
                    a = this._getKey(r);
                  "esc" === a &&
                    this.escapeKey &&
                    (!0 === this.escapeKey
                      ? this.$scrollPane.trigger("click")
                      : ("string" != typeof this.escapeKey &&
                          "function" != typeof this.escapeKey) ||
                        ((o =
                          "function" == typeof this.escapeKey
                            ? this.escapeKey()
                            : this.escapeKey) &&
                          (void 0 === this.buttons[o] ||
                            this["$_" + o].trigger("click")))),
                    t.each(this.buttons, function (t, e) {
                      -1 !== e.keys.indexOf(a) && n["$_" + t].trigger("click");
                    });
                },
                setDialogCenter: function () {},
                _unwatchContent: function () {
                  clearInterval(this._timer);
                },
                close: function (n) {
                  var i = this;
                  return (
                    "function" == typeof this.onClose && this.onClose(n),
                    this._unwatchContent(),
                    t(window).unbind("resize." + this._id),
                    t(window).unbind("keyup." + this._id),
                    t(window).unbind("jcKeyDown." + this._id),
                    this.draggable &&
                      (t(window).unbind("mousemove." + this._id),
                      t(window).unbind("mouseup." + this._id),
                      this.$titleContainer.unbind("mousedown")),
                    i.$el.removeClass(i.loadedClass),
                    t("body").removeClass("jconfirm-no-scroll-" + i._id),
                    i.$jconfirmBoxContainer.removeClass(
                      "jconfirm-no-transition"
                    ),
                    setTimeout(function () {
                      i.$body.addClass(i.closeAnimationParsed),
                        i.$jconfirmBg.addClass("jconfirm-bg-h");
                      var n =
                        "none" === i.closeAnimation ? 1 : i.animationSpeed;
                      setTimeout(function () {
                        i.$el.remove(), e.jconfirm.instances;
                        for (
                          var n = e.jconfirm.instances.length - 1;
                          n >= 0;
                          n--
                        )
                          e.jconfirm.instances[n]._id === i._id &&
                            e.jconfirm.instances.splice(n, 1);
                        if (
                          !e.jconfirm.instances.length &&
                          i.scrollToPreviousElement &&
                          e.jconfirm.lastFocused &&
                          e.jconfirm.lastFocused.length &&
                          t.contains(document, e.jconfirm.lastFocused[0])
                        ) {
                          var r = e.jconfirm.lastFocused;
                          if (i.scrollToPreviousElementAnimate) {
                            var o = t(window).scrollTop(),
                              a = e.jconfirm.lastFocused.offset().top,
                              s = t(window).height();
                            if (a > o && a < o + s) r.focus();
                            else {
                              var l = a - Math.round(s / 3);
                              t("html, body").animate(
                                { scrollTop: l },
                                i.animationSpeed,
                                "swing",
                                function () {
                                  r.focus();
                                }
                              );
                            }
                          } else r.focus();
                          e.jconfirm.lastFocused = !1;
                        }
                        "function" == typeof i.onDestroy && i.onDestroy();
                      }, 0.4 * n);
                    }, 50),
                    !0
                  );
                },
                open: function () {
                  return (
                    !this.isOpen() &&
                    (this._buildHTML(), this._bindEvents(), this._open(), !0)
                  );
                },
                setStartingPoint: function () {
                  var n = !1;
                  if (!0 !== this.animateFromElement && this.animateFromElement)
                    (n = this.animateFromElement),
                      (e.jconfirm.lastClicked = !1);
                  else {
                    if (
                      !e.jconfirm.lastClicked ||
                      !0 !== this.animateFromElement
                    )
                      return !1;
                    (n = e.jconfirm.lastClicked), (e.jconfirm.lastClicked = !1);
                  }
                  if (!n) return !1;
                  var i = n.offset(),
                    r = n.outerHeight() / 2,
                    o = n.outerWidth() / 2;
                  (r -= this.$jconfirmBox.outerHeight() / 2),
                    (o -= this.$jconfirmBox.outerWidth() / 2);
                  var a = i.top + r;
                  a -= this._scrollTop();
                  var s = i.left + o,
                    l = t(window).height() / 2,
                    c = t(window).width() / 2;
                  if (
                    ((a -= l - this.$jconfirmBox.outerHeight() / 2),
                    (s -= c - this.$jconfirmBox.outerWidth() / 2),
                    Math.abs(a) > l || Math.abs(s) > c)
                  )
                    return !1;
                  this.$jconfirmBoxContainer.css(
                    "transform",
                    "translate(" + s + "px, " + a + "px)"
                  );
                },
                _open: function () {
                  var t = this;
                  "function" == typeof t.onOpenBefore && t.onOpenBefore(),
                    this.$body.removeClass(this.animationParsed),
                    this.$jconfirmBg.removeClass("jconfirm-bg-h"),
                    this.$body.focus(),
                    t.$jconfirmBoxContainer.css(
                      "transform",
                      "translate(0px, 0px)"
                    ),
                    setTimeout(function () {
                      t.$body.css(t._getCSS(t.animationSpeed, 1)),
                        t.$body.css({
                          "transition-property":
                            t.$body.css("transition-property") + ", margin",
                        }),
                        t.$jconfirmBoxContainer.addClass(
                          "jconfirm-no-transition"
                        ),
                        t._modalReady.resolve(),
                        "function" == typeof t.onOpen && t.onOpen(),
                        t.$el.addClass(t.loadedClass);
                    }, this.animationSpeed);
                },
                loadedClass: "jconfirm-open",
                isClosed: function () {
                  return !this.$el || 0 === this.$el.parent().length;
                },
                isOpen: function () {
                  return !this.isClosed();
                },
                toggle: function () {
                  this.isOpen() ? this.close() : this.open();
                },
              }),
              (e.jconfirm.instances = []),
              (e.jconfirm.lastFocused = !1),
              (e.jconfirm.pluginDefaults = {
                template:
                  '<div class="jconfirm"><div class="jconfirm-bg jconfirm-bg-h"></div><div class="jconfirm-scrollpane"><div class="jconfirm-row"><div class="jconfirm-cell"><div class="jconfirm-holder"><div class="jc-bs3-container"><div class="jc-bs3-row"><div class="jconfirm-box-container jconfirm-animated"><div class="jconfirm-box" role="dialog" aria-labelledby="labelled" tabindex="-1"><div class="jconfirm-closeIcon">&times;</div><div class="jconfirm-title-c"><span class="jconfirm-icon-c"></span><span class="jconfirm-title"></span></div><div class="jconfirm-content-pane"><div class="jconfirm-content"></div></div><div class="jconfirm-buttons"></div><div class="jconfirm-clear"></div></div></div></div></div></div></div></div></div></div>',
                title: "Hello",
                titleClass: "",
                type: "default",
                typeAnimated: !0,
                draggable: !0,
                dragWindowGap: 15,
                dragWindowBorder: !0,
                animateFromElement: !0,
                alignMiddle: !0,
                smoothContent: !0,
                content: "Are you sure to continue?",
                buttons: {},
                defaultButtons: {
                  ok: { action: function () {} },
                  close: { action: function () {} },
                },
                contentLoaded: function () {},
                icon: "",
                lazyOpen: !1,
                bgOpacity: null,
                theme: "light",
                animation: "scale",
                closeAnimation: "scale",
                animationSpeed: 400,
                animationBounce: 1,
                escapeKey: !0,
                rtl: !1,
                container: "body",
                containerFluid: !1,
                backgroundDismiss: !1,
                backgroundDismissAnimation: "shake",
                autoClose: !1,
                closeIcon: null,
                closeIconClass: !1,
                watchInterval: 100,
                columnClass:
                  "col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3 col-xs-10 col-xs-offset-1",
                boxWidth: "50%",
                scrollToPreviousElement: !0,
                scrollToPreviousElementAnimate: !0,
                useBootstrap: !0,
                offsetTop: 40,
                offsetBottom: 40,
                bootstrapClasses: {
                  container: "container",
                  containerFluid: "container-fluid",
                  row: "row",
                },
                onContentReady: function () {},
                onOpenBefore: function () {},
                onOpen: function () {},
                onClose: function () {},
                onDestroy: function () {},
                onAction: function () {},
              });
            var n = !1;
            t(window).on("keydown", function (e) {
              if (!n) {
                var i = !1;
                t(e.target).closest(".jconfirm-box").length && (i = !0),
                  i && t(window).trigger("jcKeyDown"),
                  (n = !0);
              }
            }),
              t(window).on("keyup", function () {
                n = !1;
              }),
              (e.jconfirm.lastClicked = !1),
              t(document).on(
                "mousedown",
                "button, a, [jc-source]",
                function () {
                  e.jconfirm.lastClicked = t(this);
                }
              );
          })
            ? i.apply(e, r)
            : i) || (t.exports = o);
  },
  function (t, e, n) {
    "use strict";
    function i(t) {
      return null == t;
    }
    function r(t) {
      return null != t;
    }
    function o(t, e) {
      return e.tag === t.tag && e.key === t.key;
    }
    function a(t) {
      var e = t.tag;
      t.vm = new e({ data: t.args });
    }
    function s(t, e, n) {
      var i,
        o,
        a = {};
      for (i = e; i <= n; ++i) r((o = t[i].key)) && (a[o] = i);
      return a;
    }
    function l(t, e, n) {
      for (; e <= n; ++e) a(t[e]);
    }
    function c(t, e, n) {
      for (; e <= n; ++e) {
        var i = t[e];
        r(i) && (i.vm.$destroy(), (i.vm = null));
      }
    }
    function d(t, e) {
      t !== e &&
        ((e.vm = t.vm),
        (function (t) {
          for (var e = Object.keys(t.args), n = 0; n < e.length; n++)
            e.forEach(function (e) {
              t.vm[e] = t.args[e];
            });
        })(e));
    }
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.h = function (t, e, n) {
        return { tag: t, key: e, args: n };
      }),
      (e.patchChildren = function (t, e) {
        r(t) && r(e)
          ? t !== e &&
            (function (t, e) {
              for (
                var n,
                  u,
                  p,
                  h = 0,
                  f = 0,
                  b = t.length - 1,
                  m = t[0],
                  g = t[b],
                  v = e.length - 1,
                  _ = e[0],
                  y = e[v];
                h <= b && f <= v;

              )
                i(m)
                  ? (m = t[++h])
                  : i(g)
                  ? (g = t[--b])
                  : o(m, _)
                  ? (d(m, _), (m = t[++h]), (_ = e[++f]))
                  : o(g, y)
                  ? (d(g, y), (g = t[--b]), (y = e[--v]))
                  : o(m, y)
                  ? (d(m, y), (m = t[++h]), (y = e[--v]))
                  : o(g, _)
                  ? (d(g, _), (g = t[--b]), (_ = e[++f]))
                  : (i(n) && (n = s(t, h, b)),
                    i((u = r(_.key) ? n[_.key] : null))
                      ? (a(_), (_ = e[++f]))
                      : o((p = t[u]), _)
                      ? (d(p, _), (t[u] = void 0), (_ = e[++f]))
                      : (a(_), (_ = e[++f])));
              h > b ? l(e, f, v) : f > v && c(t, h, b);
            })(t, e)
          : r(e)
          ? l(e, 0, e.length - 1)
          : r(t) && c(t, 0, t.length - 1);
      });
  },
  function (t, e, n) {
    "use strict";
    n.r(e),
      function (t) {
        n.d(e, "AcroForm", function () {
          return kt;
        }),
          n.d(e, "AcroFormAppearance", function () {
            return At;
          }),
          n.d(e, "AcroFormButton", function () {
            return gt;
          }),
          n.d(e, "AcroFormCheckBox", function () {
            return Mt;
          }),
          n.d(e, "AcroFormChoiceField", function () {
            return ht;
          }),
          n.d(e, "AcroFormComboBox", function () {
            return bt;
          }),
          n.d(e, "AcroFormEditBox", function () {
            return mt;
          }),
          n.d(e, "AcroFormListBox", function () {
            return ft;
          }),
          n.d(e, "AcroFormPasswordField", function () {
            return wt;
          }),
          n.d(e, "AcroFormPushButton", function () {
            return vt;
          }),
          n.d(e, "AcroFormRadioButton", function () {
            return _t;
          }),
          n.d(e, "AcroFormTextField", function () {
            return Ot;
          }),
          n.d(e, "GState", function () {
            return j;
          }),
          n.d(e, "ShadingPattern", function () {
            return R;
          }),
          n.d(e, "TilingPattern", function () {
            return I;
          }),
          n.d(e, "jsPDF", function () {
            return W;
          });
        var i = n(49),
          r = n.n(i),
          o = n(344),
          a = (function () {
            return "undefined" != typeof window
              ? window
              : void 0 !== t
              ? t
              : "undefined" != typeof self
              ? self
              : this;
          })();
        function s() {
          a.console &&
            "function" == typeof a.console.log &&
            a.console.log.apply(a.console, arguments);
        }
        var l = {
          log: s,
          warn: function (t) {
            a.console &&
              ("function" == typeof a.console.warn
                ? a.console.warn.apply(a.console, arguments)
                : s.call(null, arguments));
          },
          error: function (t) {
            a.console &&
              ("function" == typeof a.console.error
                ? a.console.error.apply(a.console, arguments)
                : s(t));
          },
        };
        function c(t, e, n) {
          var i = new XMLHttpRequest();
          i.open("GET", t),
            (i.responseType = "blob"),
            (i.onload = function () {
              f(i.response, e, n);
            }),
            (i.onerror = function () {
              l.error("could not download file");
            }),
            i.send();
        }
        function d(t) {
          var e = new XMLHttpRequest();
          e.open("HEAD", t, !1);
          try {
            e.send();
          } catch (t) {}
          return e.status >= 200 && e.status <= 299;
        }
        function u(t) {
          try {
            t.dispatchEvent(new MouseEvent("click"));
          } catch (n) {
            var e = document.createEvent("MouseEvents");
            e.initMouseEvent(
              "click",
              !0,
              !0,
              window,
              0,
              0,
              0,
              80,
              20,
              !1,
              !1,
              !1,
              !1,
              0,
              null
            ),
              t.dispatchEvent(e);
          }
        }
        var p,
          h,
          f =
            a.saveAs ||
            ("object" !==
              ("undefined" == typeof window ? "undefined" : r()(window)) ||
            window !== a
              ? function () {}
              : "undefined" != typeof HTMLAnchorElement &&
                "download" in HTMLAnchorElement.prototype
              ? function (t, e, n) {
                  var i = a.URL || a.webkitURL,
                    r = document.createElement("a");
                  (e = e || t.name || "download"),
                    (r.download = e),
                    (r.rel = "noopener"),
                    "string" == typeof t
                      ? ((r.href = t),
                        r.origin !== location.origin
                          ? d(r.href)
                            ? c(t, e, n)
                            : u(r, (r.target = "_blank"))
                          : u(r))
                      : ((r.href = i.createObjectURL(t)),
                        setTimeout(function () {
                          i.revokeObjectURL(r.href);
                        }, 4e4),
                        setTimeout(function () {
                          u(r);
                        }, 0));
                }
              : "msSaveOrOpenBlob" in navigator
              ? function (t, e, n) {
                  if (((e = e || t.name || "download"), "string" == typeof t))
                    if (d(t)) c(t, e, n);
                    else {
                      var i = document.createElement("a");
                      (i.href = t),
                        (i.target = "_blank"),
                        setTimeout(function () {
                          u(i);
                        });
                    }
                  else
                    navigator.msSaveOrOpenBlob(
                      (function (t, e) {
                        return (
                          void 0 === e
                            ? (e = { autoBom: !1 })
                            : "object" !== r()(e) &&
                              (l.warn(
                                "Deprecated: Expected third argument to be a object"
                              ),
                              (e = { autoBom: !e })),
                          e.autoBom &&
                          /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(
                            t.type
                          )
                            ? new Blob([String.fromCharCode(65279), t], {
                                type: t.type,
                              })
                            : t
                        );
                      })(t, n),
                      e
                    );
                }
              : function (t, e, n, i) {
                  if (
                    ((i = i || open("", "_blank")) &&
                      (i.document.title = i.document.body.innerText =
                        "downloading..."),
                    "string" == typeof t)
                  )
                    return c(t, e, n);
                  var o = "application/octet-stream" === t.type,
                    s = /constructor/i.test(a.HTMLElement) || a.safari,
                    l = /CriOS\/[\d]+/.test(navigator.userAgent);
                  if (
                    (l || (o && s)) &&
                    "object" ===
                      ("undefined" == typeof FileReader
                        ? "undefined"
                        : r()(FileReader))
                  ) {
                    var d = new FileReader();
                    (d.onloadend = function () {
                      var t = d.result;
                      (t = l
                        ? t
                        : t.replace(/^data:[^;]*;/, "data:attachment/file;")),
                        i ? (i.location.href = t) : (location = t),
                        (i = null);
                    }),
                      d.readAsDataURL(t);
                  } else {
                    var u = a.URL || a.webkitURL,
                      p = u.createObjectURL(t);
                    i ? (i.location = p) : (location.href = p),
                      (i = null),
                      setTimeout(function () {
                        u.revokeObjectURL(p);
                      }, 4e4);
                  }
                });
        function b(t) {
          var e;
          (t = t || ""),
            (this.ok = !1),
            "#" == t.charAt(0) && (t = t.substr(1, 6)),
            (t =
              {
                aliceblue: "f0f8ff",
                antiquewhite: "faebd7",
                aqua: "00ffff",
                aquamarine: "7fffd4",
                azure: "f0ffff",
                beige: "f5f5dc",
                bisque: "ffe4c4",
                black: "000000",
                blanchedalmond: "ffebcd",
                blue: "0000ff",
                blueviolet: "8a2be2",
                brown: "a52a2a",
                burlywood: "deb887",
                cadetblue: "5f9ea0",
                chartreuse: "7fff00",
                chocolate: "d2691e",
                coral: "ff7f50",
                cornflowerblue: "6495ed",
                cornsilk: "fff8dc",
                crimson: "dc143c",
                cyan: "00ffff",
                darkblue: "00008b",
                darkcyan: "008b8b",
                darkgoldenrod: "b8860b",
                darkgray: "a9a9a9",
                darkgreen: "006400",
                darkkhaki: "bdb76b",
                darkmagenta: "8b008b",
                darkolivegreen: "556b2f",
                darkorange: "ff8c00",
                darkorchid: "9932cc",
                darkred: "8b0000",
                darksalmon: "e9967a",
                darkseagreen: "8fbc8f",
                darkslateblue: "483d8b",
                darkslategray: "2f4f4f",
                darkturquoise: "00ced1",
                darkviolet: "9400d3",
                deeppink: "ff1493",
                deepskyblue: "00bfff",
                dimgray: "696969",
                dodgerblue: "1e90ff",
                feldspar: "d19275",
                firebrick: "b22222",
                floralwhite: "fffaf0",
                forestgreen: "228b22",
                fuchsia: "ff00ff",
                gainsboro: "dcdcdc",
                ghostwhite: "f8f8ff",
                gold: "ffd700",
                goldenrod: "daa520",
                gray: "808080",
                green: "008000",
                greenyellow: "adff2f",
                honeydew: "f0fff0",
                hotpink: "ff69b4",
                indianred: "cd5c5c",
                indigo: "4b0082",
                ivory: "fffff0",
                khaki: "f0e68c",
                lavender: "e6e6fa",
                lavenderblush: "fff0f5",
                lawngreen: "7cfc00",
                lemonchiffon: "fffacd",
                lightblue: "add8e6",
                lightcoral: "f08080",
                lightcyan: "e0ffff",
                lightgoldenrodyellow: "fafad2",
                lightgrey: "d3d3d3",
                lightgreen: "90ee90",
                lightpink: "ffb6c1",
                lightsalmon: "ffa07a",
                lightseagreen: "20b2aa",
                lightskyblue: "87cefa",
                lightslateblue: "8470ff",
                lightslategray: "778899",
                lightsteelblue: "b0c4de",
                lightyellow: "ffffe0",
                lime: "00ff00",
                limegreen: "32cd32",
                linen: "faf0e6",
                magenta: "ff00ff",
                maroon: "800000",
                mediumaquamarine: "66cdaa",
                mediumblue: "0000cd",
                mediumorchid: "ba55d3",
                mediumpurple: "9370d8",
                mediumseagreen: "3cb371",
                mediumslateblue: "7b68ee",
                mediumspringgreen: "00fa9a",
                mediumturquoise: "48d1cc",
                mediumvioletred: "c71585",
                midnightblue: "191970",
                mintcream: "f5fffa",
                mistyrose: "ffe4e1",
                moccasin: "ffe4b5",
                navajowhite: "ffdead",
                navy: "000080",
                oldlace: "fdf5e6",
                olive: "808000",
                olivedrab: "6b8e23",
                orange: "ffa500",
                orangered: "ff4500",
                orchid: "da70d6",
                palegoldenrod: "eee8aa",
                palegreen: "98fb98",
                paleturquoise: "afeeee",
                palevioletred: "d87093",
                papayawhip: "ffefd5",
                peachpuff: "ffdab9",
                peru: "cd853f",
                pink: "ffc0cb",
                plum: "dda0dd",
                powderblue: "b0e0e6",
                purple: "800080",
                red: "ff0000",
                rosybrown: "bc8f8f",
                royalblue: "4169e1",
                saddlebrown: "8b4513",
                salmon: "fa8072",
                sandybrown: "f4a460",
                seagreen: "2e8b57",
                seashell: "fff5ee",
                sienna: "a0522d",
                silver: "c0c0c0",
                skyblue: "87ceeb",
                slateblue: "6a5acd",
                slategray: "708090",
                snow: "fffafa",
                springgreen: "00ff7f",
                steelblue: "4682b4",
                tan: "d2b48c",
                teal: "008080",
                thistle: "d8bfd8",
                tomato: "ff6347",
                turquoise: "40e0d0",
                violet: "ee82ee",
                violetred: "d02090",
                wheat: "f5deb3",
                white: "ffffff",
                whitesmoke: "f5f5f5",
                yellow: "ffff00",
                yellowgreen: "9acd32",
              }[(t = (t = t.replace(/ /g, "")).toLowerCase())] || t);
          for (
            var n = [
                {
                  re: /^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/,
                  example: ["rgb(123, 234, 45)", "rgb(255,234,245)"],
                  process: function (t) {
                    return [parseInt(t[1]), parseInt(t[2]), parseInt(t[3])];
                  },
                },
                {
                  re: /^(\w{2})(\w{2})(\w{2})$/,
                  example: ["#00ff00", "336699"],
                  process: function (t) {
                    return [
                      parseInt(t[1], 16),
                      parseInt(t[2], 16),
                      parseInt(t[3], 16),
                    ];
                  },
                },
                {
                  re: /^(\w{1})(\w{1})(\w{1})$/,
                  example: ["#fb0", "f0f"],
                  process: function (t) {
                    return [
                      parseInt(t[1] + t[1], 16),
                      parseInt(t[2] + t[2], 16),
                      parseInt(t[3] + t[3], 16),
                    ];
                  },
                },
              ],
              i = 0;
            i < n.length;
            i++
          ) {
            var r = n[i].re,
              o = n[i].process,
              a = r.exec(t);
            a &&
              ((e = o(a)),
              (this.r = e[0]),
              (this.g = e[1]),
              (this.b = e[2]),
              (this.ok = !0));
          }
          (this.r =
            this.r < 0 || isNaN(this.r) ? 0 : this.r > 255 ? 255 : this.r),
            (this.g =
              this.g < 0 || isNaN(this.g) ? 0 : this.g > 255 ? 255 : this.g),
            (this.b =
              this.b < 0 || isNaN(this.b) ? 0 : this.b > 255 ? 255 : this.b),
            (this.toRGB = function () {
              return "rgb(" + this.r + ", " + this.g + ", " + this.b + ")";
            }),
            (this.toHex = function () {
              var t = this.r.toString(16),
                e = this.g.toString(16),
                n = this.b.toString(16);
              return (
                1 == t.length && (t = "0" + t),
                1 == e.length && (e = "0" + e),
                1 == n.length && (n = "0" + n),
                "#" + t + e + n
              );
            });
        }
        function m(t, e) {
          var n = t[0],
            i = t[1],
            r = t[2],
            o = t[3];
          (n = v(n, i, r, o, e[0], 7, -680876936)),
            (o = v(o, n, i, r, e[1], 12, -389564586)),
            (r = v(r, o, n, i, e[2], 17, 606105819)),
            (i = v(i, r, o, n, e[3], 22, -1044525330)),
            (n = v(n, i, r, o, e[4], 7, -176418897)),
            (o = v(o, n, i, r, e[5], 12, 1200080426)),
            (r = v(r, o, n, i, e[6], 17, -1473231341)),
            (i = v(i, r, o, n, e[7], 22, -45705983)),
            (n = v(n, i, r, o, e[8], 7, 1770035416)),
            (o = v(o, n, i, r, e[9], 12, -1958414417)),
            (r = v(r, o, n, i, e[10], 17, -42063)),
            (i = v(i, r, o, n, e[11], 22, -1990404162)),
            (n = v(n, i, r, o, e[12], 7, 1804603682)),
            (o = v(o, n, i, r, e[13], 12, -40341101)),
            (r = v(r, o, n, i, e[14], 17, -1502002290)),
            (n = _(
              n,
              (i = v(i, r, o, n, e[15], 22, 1236535329)),
              r,
              o,
              e[1],
              5,
              -165796510
            )),
            (o = _(o, n, i, r, e[6], 9, -1069501632)),
            (r = _(r, o, n, i, e[11], 14, 643717713)),
            (i = _(i, r, o, n, e[0], 20, -373897302)),
            (n = _(n, i, r, o, e[5], 5, -701558691)),
            (o = _(o, n, i, r, e[10], 9, 38016083)),
            (r = _(r, o, n, i, e[15], 14, -660478335)),
            (i = _(i, r, o, n, e[4], 20, -405537848)),
            (n = _(n, i, r, o, e[9], 5, 568446438)),
            (o = _(o, n, i, r, e[14], 9, -1019803690)),
            (r = _(r, o, n, i, e[3], 14, -187363961)),
            (i = _(i, r, o, n, e[8], 20, 1163531501)),
            (n = _(n, i, r, o, e[13], 5, -1444681467)),
            (o = _(o, n, i, r, e[2], 9, -51403784)),
            (r = _(r, o, n, i, e[7], 14, 1735328473)),
            (n = y(
              n,
              (i = _(i, r, o, n, e[12], 20, -1926607734)),
              r,
              o,
              e[5],
              4,
              -378558
            )),
            (o = y(o, n, i, r, e[8], 11, -2022574463)),
            (r = y(r, o, n, i, e[11], 16, 1839030562)),
            (i = y(i, r, o, n, e[14], 23, -35309556)),
            (n = y(n, i, r, o, e[1], 4, -1530992060)),
            (o = y(o, n, i, r, e[4], 11, 1272893353)),
            (r = y(r, o, n, i, e[7], 16, -155497632)),
            (i = y(i, r, o, n, e[10], 23, -1094730640)),
            (n = y(n, i, r, o, e[13], 4, 681279174)),
            (o = y(o, n, i, r, e[0], 11, -358537222)),
            (r = y(r, o, n, i, e[3], 16, -722521979)),
            (i = y(i, r, o, n, e[6], 23, 76029189)),
            (n = y(n, i, r, o, e[9], 4, -640364487)),
            (o = y(o, n, i, r, e[12], 11, -421815835)),
            (r = y(r, o, n, i, e[15], 16, 530742520)),
            (n = M(
              n,
              (i = y(i, r, o, n, e[2], 23, -995338651)),
              r,
              o,
              e[0],
              6,
              -198630844
            )),
            (o = M(o, n, i, r, e[7], 10, 1126891415)),
            (r = M(r, o, n, i, e[14], 15, -1416354905)),
            (i = M(i, r, o, n, e[5], 21, -57434055)),
            (n = M(n, i, r, o, e[12], 6, 1700485571)),
            (o = M(o, n, i, r, e[3], 10, -1894986606)),
            (r = M(r, o, n, i, e[10], 15, -1051523)),
            (i = M(i, r, o, n, e[1], 21, -2054922799)),
            (n = M(n, i, r, o, e[8], 6, 1873313359)),
            (o = M(o, n, i, r, e[15], 10, -30611744)),
            (r = M(r, o, n, i, e[6], 15, -1560198380)),
            (i = M(i, r, o, n, e[13], 21, 1309151649)),
            (n = M(n, i, r, o, e[4], 6, -145523070)),
            (o = M(o, n, i, r, e[11], 10, -1120210379)),
            (r = M(r, o, n, i, e[2], 15, 718787259)),
            (i = M(i, r, o, n, e[9], 21, -343485551)),
            (t[0] = S(n, t[0])),
            (t[1] = S(i, t[1])),
            (t[2] = S(r, t[2])),
            (t[3] = S(o, t[3]));
        }
        function g(t, e, n, i, r, o) {
          return (e = S(S(e, t), S(i, o))), S((e << r) | (e >>> (32 - r)), n);
        }
        function v(t, e, n, i, r, o, a) {
          return g((e & n) | (~e & i), t, e, r, o, a);
        }
        function _(t, e, n, i, r, o, a) {
          return g((e & i) | (n & ~i), t, e, r, o, a);
        }
        function y(t, e, n, i, r, o, a) {
          return g(e ^ n ^ i, t, e, r, o, a);
        }
        function M(t, e, n, i, r, o, a) {
          return g(n ^ (e | ~i), t, e, r, o, a);
        }
        function O(t) {
          var e,
            n = t.length,
            i = [1732584193, -271733879, -1732584194, 271733878];
          for (e = 64; e <= t.length; e += 64) m(i, w(t.substring(e - 64, e)));
          t = t.substring(e - 64);
          var r = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
          for (e = 0; e < t.length; e++)
            r[e >> 2] |= t.charCodeAt(e) << (e % 4 << 3);
          if (((r[e >> 2] |= 128 << (e % 4 << 3)), e > 55))
            for (m(i, r), e = 0; e < 16; e++) r[e] = 0;
          return (r[14] = 8 * n), m(i, r), i;
        }
        function w(t) {
          var e,
            n = [];
          for (e = 0; e < 64; e += 4)
            n[e >> 2] =
              t.charCodeAt(e) +
              (t.charCodeAt(e + 1) << 8) +
              (t.charCodeAt(e + 2) << 16) +
              (t.charCodeAt(e + 3) << 24);
          return n;
        }
        (p = a.atob.bind(a)), (h = a.btoa.bind(a));
        var A = "0123456789abcdef".split("");
        function x(t) {
          for (var e = "", n = 0; n < 4; n++)
            e += A[(t >> (8 * n + 4)) & 15] + A[(t >> (8 * n)) & 15];
          return e;
        }
        function z(t) {
          return String.fromCharCode(
            (255 & t) >> 0,
            (65280 & t) >> 8,
            (16711680 & t) >> 16,
            (4278190080 & t) >> 24
          );
        }
        function C(t) {
          return O(t).map(z).join("");
        }
        var k =
          "5d41402abc4b2a76b9719d911017c592" !=
          (function (t) {
            for (var e = 0; e < t.length; e++) t[e] = x(t[e]);
            return t.join("");
          })(O("hello"));
        function S(t, e) {
          if (k) {
            var n = (65535 & t) + (65535 & e);
            return (((t >> 16) + (e >> 16) + (n >> 16)) << 16) | (65535 & n);
          }
          return (t + e) & 4294967295;
        }
        function T(t, e) {
          var n, i, r, o;
          if (t !== n) {
            for (
              var a =
                  ((r = t),
                  (o = 1 + ((256 / t.length) >> 0)),
                  new Array(o + 1).join(r)),
                s = [],
                l = 0;
              l < 256;
              l++
            )
              s[l] = l;
            var c = 0;
            for (l = 0; l < 256; l++) {
              var d = s[l];
              (c = (c + d + a.charCodeAt(l)) % 256), (s[l] = s[c]), (s[c] = d);
            }
            (n = t), (i = s);
          } else s = i;
          var u = e.length,
            p = 0,
            h = 0,
            f = "";
          for (l = 0; l < u; l++)
            (h = (h + (d = s[(p = (p + 1) % 256)])) % 256),
              (s[p] = s[h]),
              (s[h] = d),
              (a = s[(s[p] + s[h]) % 256]),
              (f += String.fromCharCode(e.charCodeAt(l) ^ a));
          return f;
        }
        var D = { print: 4, modify: 8, copy: 16, "annot-forms": 32 };
        function L(t, e, n, i) {
          (this.v = 1), (this.r = 2);
          var r = 192;
          t.forEach(function (t) {
            if (void 0 !== D.perm) throw new Error("Invalid permission: " + t);
            r += D[t];
          }),
            (this.padding = "(¿N^NuAd\0NVÿú\b..\0¶Ðh>/\f©þdSiz");
          var o = (e + this.padding).substr(0, 32),
            a = (n + this.padding).substr(0, 32);
          (this.O = this.processOwnerPassword(o, a)),
            (this.P = -(1 + (255 ^ r))),
            (this.encryptionKey = C(
              o + this.O + this.lsbFirstWord(this.P) + this.hexToBytes(i)
            ).substr(0, 5)),
            (this.U = T(this.encryptionKey, this.padding));
        }
        function q(t) {
          if (/[^\u0000-\u00ff]/.test(t))
            throw new Error(
              "Invalid PDF Name Object: " +
                t +
                ", Only accept ASCII characters."
            );
          for (var e = "", n = t.length, i = 0; i < n; i++) {
            var r = t.charCodeAt(i);
            e +=
              r < 33 ||
              35 === r ||
              37 === r ||
              40 === r ||
              41 === r ||
              47 === r ||
              60 === r ||
              62 === r ||
              91 === r ||
              93 === r ||
              123 === r ||
              125 === r ||
              r > 126
                ? "#" + ("0" + r.toString(16)).slice(-2)
                : t[i];
          }
          return e;
        }
        function E(t) {
          if ("object" !== r()(t))
            throw new Error(
              "Invalid Context passed to initialize PubSub (jsPDF-module)"
            );
          var e = {};
          (this.subscribe = function (t, n, i) {
            if (
              ((i = i || !1),
              "string" != typeof t ||
                "function" != typeof n ||
                "boolean" != typeof i)
            )
              throw new Error(
                "Invalid arguments passed to PubSub.subscribe (jsPDF-module)"
              );
            e.hasOwnProperty(t) || (e[t] = {});
            var r = Math.random().toString(35);
            return (e[t][r] = [n, !!i]), r;
          }),
            (this.unsubscribe = function (t) {
              for (var n in e)
                if (e[n][t])
                  return (
                    delete e[n][t],
                    0 === Object.keys(e[n]).length && delete e[n],
                    !0
                  );
              return !1;
            }),
            (this.publish = function (n) {
              if (e.hasOwnProperty(n)) {
                var i = Array.prototype.slice.call(arguments, 1),
                  r = [];
                for (var o in e[n]) {
                  var s = e[n][o];
                  try {
                    s[0].apply(t, i);
                  } catch (n) {
                    a.console && l.error("jsPDF PubSub Error", n.message, n);
                  }
                  s[1] && r.push(o);
                }
                r.length && r.forEach(this.unsubscribe);
              }
            }),
            (this.getTopics = function () {
              return e;
            });
        }
        function j(t) {
          if (!(this instanceof j)) return new j(t);
          var e = "opacity,stroke-opacity".split(",");
          for (var n in t)
            t.hasOwnProperty(n) && e.indexOf(n) >= 0 && (this[n] = t[n]);
          (this.id = ""), (this.objectNumber = -1);
        }
        function P(t, e) {
          (this.gState = t),
            (this.matrix = e),
            (this.id = ""),
            (this.objectNumber = -1);
        }
        function R(t, e, n, i, r) {
          if (!(this instanceof R)) return new R(t, e, n, i, r);
          (this.type = "axial" === t ? 2 : 3),
            (this.coords = e),
            (this.colors = n),
            P.call(this, i, r);
        }
        function I(t, e, n, i, r) {
          if (!(this instanceof I)) return new I(t, e, n, i, r);
          (this.boundingBox = t),
            (this.xStep = e),
            (this.yStep = n),
            (this.stream = ""),
            (this.cloneIndex = 0),
            P.call(this, i, r);
        }
        function W(t) {
          var e,
            n = "string" == typeof arguments[0] ? arguments[0] : "p",
            i = arguments[1],
            o = arguments[2],
            s = arguments[3],
            c = [],
            d = 1,
            u = 16,
            p = "S",
            m = null;
          "object" === r()((t = t || {})) &&
            ((n = t.orientation),
            (i = t.unit || i),
            (o = t.format || o),
            (s = t.compress || t.compressPdf || s),
            null !== (m = t.encryption || null) &&
              ((m.userPassword = m.userPassword || ""),
              (m.ownerPassword = m.ownerPassword || ""),
              (m.userPermissions = m.userPermissions || [])),
            (d = "number" == typeof t.userUnit ? Math.abs(t.userUnit) : 1),
            void 0 !== t.precision && (e = t.precision),
            void 0 !== t.floatPrecision && (u = t.floatPrecision),
            (p = t.defaultPathOperation || "S")),
            (c = t.filters || (!0 === s ? ["FlateEncode"] : c)),
            (i = i || "mm"),
            (n = ("" + (n || "P")).toLowerCase());
          var g = t.putOnlyUsedFonts || !1,
            v = {},
            _ = { internal: {}, __private__: {} };
          _.__private__.PubSub = E;
          var y = "1.3",
            M = (_.__private__.getPdfVersion = function () {
              return y;
            });
          _.__private__.setPdfVersion = function (t) {
            y = t;
          };
          var O = {
            a0: [2383.94, 3370.39],
            a1: [1683.78, 2383.94],
            a2: [1190.55, 1683.78],
            a3: [841.89, 1190.55],
            a4: [595.28, 841.89],
            a5: [419.53, 595.28],
            a6: [297.64, 419.53],
            a7: [209.76, 297.64],
            a8: [147.4, 209.76],
            a9: [104.88, 147.4],
            a10: [73.7, 104.88],
            b0: [2834.65, 4008.19],
            b1: [2004.09, 2834.65],
            b2: [1417.32, 2004.09],
            b3: [1000.63, 1417.32],
            b4: [708.66, 1000.63],
            b5: [498.9, 708.66],
            b6: [354.33, 498.9],
            b7: [249.45, 354.33],
            b8: [175.75, 249.45],
            b9: [124.72, 175.75],
            b10: [87.87, 124.72],
            c0: [2599.37, 3676.54],
            c1: [1836.85, 2599.37],
            c2: [1298.27, 1836.85],
            c3: [918.43, 1298.27],
            c4: [649.13, 918.43],
            c5: [459.21, 649.13],
            c6: [323.15, 459.21],
            c7: [229.61, 323.15],
            c8: [161.57, 229.61],
            c9: [113.39, 161.57],
            c10: [79.37, 113.39],
            dl: [311.81, 623.62],
            letter: [612, 792],
            "government-letter": [576, 756],
            legal: [612, 1008],
            "junior-legal": [576, 360],
            ledger: [1224, 792],
            tabloid: [792, 1224],
            "credit-card": [153, 243],
          };
          _.__private__.getPageFormats = function () {
            return O;
          };
          var w = (_.__private__.getPageFormat = function (t) {
            return O[t];
          });
          o = o || "a4";
          var A = { COMPAT: "compat", ADVANCED: "advanced" },
            x = A.COMPAT;
          function z() {
            this.saveGraphicsState(),
              ut(new Yt(zt, 0, 0, -zt, 0, Nn() * zt).toString() + " cm"),
              this.setFontSize(this.getFontSize() / zt),
              (p = "n"),
              (x = A.ADVANCED);
          }
          function C() {
            this.restoreGraphicsState(), (p = "S"), (x = A.COMPAT);
          }
          var k = (_.__private__.combineFontStyleAndFontWeight = function (
            t,
            e
          ) {
            if (
              ("bold" == t && "normal" == e) ||
              ("bold" == t && 400 == e) ||
              ("normal" == t && "italic" == e) ||
              ("bold" == t && "italic" == e)
            )
              throw new Error(
                "Invalid Combination of fontweight and fontstyle"
              );
            return (
              e &&
                (t =
                  400 == e || "normal" === e
                    ? "italic" === t
                      ? "italic"
                      : "normal"
                    : (700 != e && "bold" !== e) || "normal" !== t
                    ? (700 == e ? "bold" : e) + "" + t
                    : "bold"),
              t
            );
          });
          (_.advancedAPI = function (t) {
            var e = x === A.COMPAT;
            return (
              e && z.call(this),
              "function" != typeof t || (t(this), e && C.call(this)),
              this
            );
          }),
            (_.compatAPI = function (t) {
              var e = x === A.ADVANCED;
              return (
                e && C.call(this),
                "function" != typeof t || (t(this), e && z.call(this)),
                this
              );
            }),
            (_.isAdvancedAPI = function () {
              return x === A.ADVANCED;
            });
          var S,
            T = function (t) {
              if (x !== A.ADVANCED)
                throw new Error(
                  t +
                    " is only available in 'advanced' API mode. You need to call advancedAPI() first."
                );
            },
            D =
              (_.roundToPrecision =
              _.__private__.roundToPrecision =
                function (t, n) {
                  var i = e || n;
                  if (isNaN(t) || isNaN(i))
                    throw new Error(
                      "Invalid argument passed to jsPDF.roundToPrecision"
                    );
                  return t.toFixed(i).replace(/0+$/, "");
                });
          S =
            _.hpf =
            _.__private__.hpf =
              "number" == typeof u
                ? function (t) {
                    if (isNaN(t))
                      throw new Error("Invalid argument passed to jsPDF.hpf");
                    return D(t, u);
                  }
                : "smart" === u
                ? function (t) {
                    if (isNaN(t))
                      throw new Error("Invalid argument passed to jsPDF.hpf");
                    return D(t, t > -1 && t < 1 ? 16 : 5);
                  }
                : function (t) {
                    if (isNaN(t))
                      throw new Error("Invalid argument passed to jsPDF.hpf");
                    return D(t, 16);
                  };
          var P =
              (_.f2 =
              _.__private__.f2 =
                function (t) {
                  if (isNaN(t))
                    throw new Error("Invalid argument passed to jsPDF.f2");
                  return D(t, 2);
                }),
            N = (_.__private__.f3 = function (t) {
              if (isNaN(t))
                throw new Error("Invalid argument passed to jsPDF.f3");
              return D(t, 3);
            }),
            B =
              (_.scale =
              _.__private__.scale =
                function (t) {
                  if (isNaN(t))
                    throw new Error("Invalid argument passed to jsPDF.scale");
                  return x === A.COMPAT
                    ? t * zt
                    : x === A.ADVANCED
                    ? t
                    : void 0;
                }),
            F = function (t) {
              return x === A.COMPAT ? Nn() - t : x === A.ADVANCED ? t : void 0;
            },
            $ = function (t) {
              return B(F(t));
            };
          _.__private__.setPrecision = _.setPrecision = function (t) {
            "number" == typeof parseInt(t, 10) && (e = parseInt(t, 10));
          };
          var H,
            Y = "00000000000000000000000000000000",
            U = (_.__private__.getFileId = function () {
              return Y;
            }),
            X = (_.__private__.setFileId = function (t) {
              return (
                (Y =
                  void 0 !== t && /^[a-fA-F0-9]{32}$/.test(t)
                    ? t.toUpperCase()
                    : Y.split("")
                        .map(function () {
                          return "ABCDEF0123456789".charAt(
                            Math.floor(16 * Math.random())
                          );
                        })
                        .join("")),
                null !== m &&
                  (Xe = new L(
                    m.userPermissions,
                    m.userPassword,
                    m.ownerPassword,
                    Y
                  )),
                Y
              );
            });
          (_.setFileId = function (t) {
            return X(t), this;
          }),
            (_.getFileId = function () {
              return U();
            });
          var V = (_.__private__.convertDateToPDFDate = function (t) {
              var e = t.getTimezoneOffset(),
                n = e < 0 ? "+" : "-",
                i = Math.floor(Math.abs(e / 60)),
                r = Math.abs(e % 60),
                o = [n, Q(i), "'", Q(r), "'"].join("");
              return [
                "D:",
                t.getFullYear(),
                Q(t.getMonth() + 1),
                Q(t.getDate()),
                Q(t.getHours()),
                Q(t.getMinutes()),
                Q(t.getSeconds()),
                o,
              ].join("");
            }),
            G = (_.__private__.convertPDFDateToDate = function (t) {
              var e = parseInt(t.substr(2, 4), 10),
                n = parseInt(t.substr(6, 2), 10) - 1,
                i = parseInt(t.substr(8, 2), 10),
                r = parseInt(t.substr(10, 2), 10),
                o = parseInt(t.substr(12, 2), 10),
                a = parseInt(t.substr(14, 2), 10);
              return new Date(e, n, i, r, o, a, 0);
            }),
            K = (_.__private__.setCreationDate = function (t) {
              var e;
              if ((void 0 === t && (t = new Date()), t instanceof Date))
                e = V(t);
              else {
                if (
                  !/^D:(20[0-2][0-9]|203[0-7]|19[7-9][0-9])(0[0-9]|1[0-2])([0-2][0-9]|3[0-1])(0[0-9]|1[0-9]|2[0-3])(0[0-9]|[1-5][0-9])(0[0-9]|[1-5][0-9])(\+0[0-9]|\+1[0-4]|-0[0-9]|-1[0-1])'(0[0-9]|[1-5][0-9])'?$/.test(
                    t
                  )
                )
                  throw new Error(
                    "Invalid argument passed to jsPDF.setCreationDate"
                  );
                e = t;
              }
              return (H = e);
            }),
            Z = (_.__private__.getCreationDate = function (t) {
              var e = H;
              return "jsDate" === t && (e = G(H)), e;
            });
          (_.setCreationDate = function (t) {
            return K(t), this;
          }),
            (_.getCreationDate = function (t) {
              return Z(t);
            });
          var J,
            Q = (_.__private__.padd2 = function (t) {
              return ("0" + parseInt(t)).slice(-2);
            }),
            tt = (_.__private__.padd2Hex = function (t) {
              return ("00" + (t = t.toString())).substr(t.length);
            }),
            et = 0,
            nt = [],
            it = [],
            rt = 0,
            ot = [],
            at = [],
            st = !1,
            lt = it,
            ct = function () {
              (et = 0),
                (rt = 0),
                (it = []),
                (nt = []),
                (ot = []),
                (Qt = Kt()),
                (te = Kt());
            };
          _.__private__.setCustomOutputDestination = function (t) {
            (st = !0), (lt = t);
          };
          var dt = function (t) {
            st || (lt = t);
          };
          _.__private__.resetCustomOutputDestination = function () {
            (st = !1), (lt = it);
          };
          var ut = (_.__private__.out = function (t) {
              return (t = t.toString()), (rt += t.length + 1), lt.push(t), lt;
            }),
            pt = (_.__private__.write = function (t) {
              return ut(
                1 === arguments.length
                  ? t.toString()
                  : Array.prototype.join.call(arguments, " ")
              );
            }),
            ht = (_.__private__.getArrayBuffer = function (t) {
              for (
                var e = t.length, n = new ArrayBuffer(e), i = new Uint8Array(n);
                e--;

              )
                i[e] = t.charCodeAt(e);
              return n;
            }),
            ft = [
              ["Helvetica", "helvetica", "normal", "WinAnsiEncoding"],
              ["Helvetica-Bold", "helvetica", "bold", "WinAnsiEncoding"],
              ["Helvetica-Oblique", "helvetica", "italic", "WinAnsiEncoding"],
              [
                "Helvetica-BoldOblique",
                "helvetica",
                "bolditalic",
                "WinAnsiEncoding",
              ],
              ["Courier", "courier", "normal", "WinAnsiEncoding"],
              ["Courier-Bold", "courier", "bold", "WinAnsiEncoding"],
              ["Courier-Oblique", "courier", "italic", "WinAnsiEncoding"],
              [
                "Courier-BoldOblique",
                "courier",
                "bolditalic",
                "WinAnsiEncoding",
              ],
              ["Times-Roman", "times", "normal", "WinAnsiEncoding"],
              ["Times-Bold", "times", "bold", "WinAnsiEncoding"],
              ["Times-Italic", "times", "italic", "WinAnsiEncoding"],
              ["Times-BoldItalic", "times", "bolditalic", "WinAnsiEncoding"],
              ["ZapfDingbats", "zapfdingbats", "normal", null],
              ["Symbol", "symbol", "normal", null],
            ];
          _.__private__.getStandardFonts = function () {
            return ft;
          };
          var bt = t.fontSize || 16;
          _.__private__.setFontSize = _.setFontSize = function (t) {
            return (bt = x === A.ADVANCED ? t / zt : t), this;
          };
          var mt,
            gt =
              (_.__private__.getFontSize =
              _.getFontSize =
                function () {
                  return x === A.COMPAT ? bt : bt * zt;
                }),
            vt = t.R2L || !1;
          (_.__private__.setR2L = _.setR2L =
            function (t) {
              return (vt = t), this;
            }),
            (_.__private__.getR2L = _.getR2L =
              function () {
                return vt;
              });
          var _t,
            yt = (_.__private__.setZoomMode = function (t) {
              if (/^(?:\d+\.\d*|\d*\.\d+|\d+)%$/.test(t)) mt = t;
              else if (isNaN(t)) {
                if (
                  -1 ===
                  [
                    void 0,
                    null,
                    "fullwidth",
                    "fullheight",
                    "fullpage",
                    "original",
                  ].indexOf(t)
                )
                  throw new Error(
                    'zoom must be Integer (e.g. 2), a percentage Value (e.g. 300%) or fullwidth, fullheight, fullpage, original. "' +
                      t +
                      '" is not recognized.'
                  );
                mt = t;
              } else mt = parseInt(t, 10);
            });
          _.__private__.getZoomMode = function () {
            return mt;
          };
          var Mt,
            Ot = (_.__private__.setPageMode = function (t) {
              if (
                -1 ==
                [
                  void 0,
                  null,
                  "UseNone",
                  "UseOutlines",
                  "UseThumbs",
                  "FullScreen",
                ].indexOf(t)
              )
                throw new Error(
                  'Page mode must be one of UseNone, UseOutlines, UseThumbs, or FullScreen. "' +
                    t +
                    '" is not recognized.'
                );
              _t = t;
            });
          _.__private__.getPageMode = function () {
            return _t;
          };
          var wt = (_.__private__.setLayoutMode = function (t) {
            if (
              -1 ==
              [
                void 0,
                null,
                "continuous",
                "single",
                "twoleft",
                "tworight",
                "two",
              ].indexOf(t)
            )
              throw new Error(
                'Layout mode must be one of continuous, single, twoleft, tworight. "' +
                  t +
                  '" is not recognized.'
              );
            Mt = t;
          });
          (_.__private__.getLayoutMode = function () {
            return Mt;
          }),
            (_.__private__.setDisplayMode = _.setDisplayMode =
              function (t, e, n) {
                return yt(t), wt(e), Ot(n), this;
              });
          var At = {
            title: "",
            subject: "",
            author: "",
            keywords: "",
            creator: "",
          };
          (_.__private__.getDocumentProperty = function (t) {
            if (-1 === Object.keys(At).indexOf(t))
              throw new Error(
                "Invalid argument passed to jsPDF.getDocumentProperty"
              );
            return At[t];
          }),
            (_.__private__.getDocumentProperties = function () {
              return At;
            }),
            (_.__private__.setDocumentProperties =
              _.setProperties =
              _.setDocumentProperties =
                function (t) {
                  for (var e in At)
                    At.hasOwnProperty(e) && t[e] && (At[e] = t[e]);
                  return this;
                }),
            (_.__private__.setDocumentProperty = function (t, e) {
              if (-1 === Object.keys(At).indexOf(t))
                throw new Error(
                  "Invalid arguments passed to jsPDF.setDocumentProperty"
                );
              return (At[t] = e);
            });
          var xt,
            zt,
            Ct,
            kt,
            St,
            Tt = {},
            Dt = {},
            Lt = [],
            qt = {},
            Et = {},
            jt = {},
            Pt = {},
            Rt = null,
            It = 0,
            Wt = [],
            Nt = new E(_),
            Bt = t.hotfixes || [],
            Ft = {},
            $t = {},
            Ht = [],
            Yt = function t(e, n, i, r, o, a) {
              if (!(this instanceof t)) return new t(e, n, i, r, o, a);
              isNaN(e) && (e = 1),
                isNaN(n) && (n = 0),
                isNaN(i) && (i = 0),
                isNaN(r) && (r = 1),
                isNaN(o) && (o = 0),
                isNaN(a) && (a = 0),
                (this._matrix = [e, n, i, r, o, a]);
            };
          Object.defineProperty(Yt.prototype, "sx", {
            get: function () {
              return this._matrix[0];
            },
            set: function (t) {
              this._matrix[0] = t;
            },
          }),
            Object.defineProperty(Yt.prototype, "shy", {
              get: function () {
                return this._matrix[1];
              },
              set: function (t) {
                this._matrix[1] = t;
              },
            }),
            Object.defineProperty(Yt.prototype, "shx", {
              get: function () {
                return this._matrix[2];
              },
              set: function (t) {
                this._matrix[2] = t;
              },
            }),
            Object.defineProperty(Yt.prototype, "sy", {
              get: function () {
                return this._matrix[3];
              },
              set: function (t) {
                this._matrix[3] = t;
              },
            }),
            Object.defineProperty(Yt.prototype, "tx", {
              get: function () {
                return this._matrix[4];
              },
              set: function (t) {
                this._matrix[4] = t;
              },
            }),
            Object.defineProperty(Yt.prototype, "ty", {
              get: function () {
                return this._matrix[5];
              },
              set: function (t) {
                this._matrix[5] = t;
              },
            }),
            Object.defineProperty(Yt.prototype, "a", {
              get: function () {
                return this._matrix[0];
              },
              set: function (t) {
                this._matrix[0] = t;
              },
            }),
            Object.defineProperty(Yt.prototype, "b", {
              get: function () {
                return this._matrix[1];
              },
              set: function (t) {
                this._matrix[1] = t;
              },
            }),
            Object.defineProperty(Yt.prototype, "c", {
              get: function () {
                return this._matrix[2];
              },
              set: function (t) {
                this._matrix[2] = t;
              },
            }),
            Object.defineProperty(Yt.prototype, "d", {
              get: function () {
                return this._matrix[3];
              },
              set: function (t) {
                this._matrix[3] = t;
              },
            }),
            Object.defineProperty(Yt.prototype, "e", {
              get: function () {
                return this._matrix[4];
              },
              set: function (t) {
                this._matrix[4] = t;
              },
            }),
            Object.defineProperty(Yt.prototype, "f", {
              get: function () {
                return this._matrix[5];
              },
              set: function (t) {
                this._matrix[5] = t;
              },
            }),
            Object.defineProperty(Yt.prototype, "rotation", {
              get: function () {
                return Math.atan2(this.shx, this.sx);
              },
            }),
            Object.defineProperty(Yt.prototype, "scaleX", {
              get: function () {
                return this.decompose().scale.sx;
              },
            }),
            Object.defineProperty(Yt.prototype, "scaleY", {
              get: function () {
                return this.decompose().scale.sy;
              },
            }),
            Object.defineProperty(Yt.prototype, "isIdentity", {
              get: function () {
                return (
                  1 === this.sx &&
                  0 === this.shy &&
                  0 === this.shx &&
                  1 === this.sy &&
                  0 === this.tx &&
                  0 === this.ty
                );
              },
            }),
            (Yt.prototype.join = function (t) {
              return [this.sx, this.shy, this.shx, this.sy, this.tx, this.ty]
                .map(S)
                .join(t);
            }),
            (Yt.prototype.multiply = function (t) {
              var e = t.sx * this.sx + t.shy * this.shx,
                n = t.sx * this.shy + t.shy * this.sy,
                i = t.shx * this.sx + t.sy * this.shx,
                r = t.shx * this.shy + t.sy * this.sy,
                o = t.tx * this.sx + t.ty * this.shx + this.tx,
                a = t.tx * this.shy + t.ty * this.sy + this.ty;
              return new Yt(e, n, i, r, o, a);
            }),
            (Yt.prototype.decompose = function () {
              var t = this.sx,
                e = this.shy,
                n = this.shx,
                i = this.sy,
                r = this.tx,
                o = this.ty,
                a = Math.sqrt(t * t + e * e),
                s = (t /= a) * n + (e /= a) * i;
              (n -= t * s), (i -= e * s);
              var l = Math.sqrt(n * n + i * i);
              return (
                (s /= l),
                t * (i /= l) < e * (n /= l) &&
                  ((t = -t), (e = -e), (s = -s), (a = -a)),
                {
                  scale: new Yt(a, 0, 0, l, 0, 0),
                  translate: new Yt(1, 0, 0, 1, r, o),
                  rotate: new Yt(t, e, -e, t, 0, 0),
                  skew: new Yt(1, 0, s, 1, 0, 0),
                }
              );
            }),
            (Yt.prototype.toString = function (t) {
              return this.join(" ");
            }),
            (Yt.prototype.inversed = function () {
              var t = this.sx,
                e = this.shy,
                n = this.shx,
                i = this.sy,
                r = this.tx,
                o = this.ty,
                a = 1 / (t * i - e * n),
                s = i * a,
                l = -e * a,
                c = -n * a,
                d = t * a;
              return new Yt(s, l, c, d, -s * r - c * o, -l * r - d * o);
            }),
            (Yt.prototype.applyToPoint = function (t) {
              var e = t.x * this.sx + t.y * this.shx + this.tx,
                n = t.x * this.shy + t.y * this.sy + this.ty;
              return new Ln(e, n);
            }),
            (Yt.prototype.applyToRectangle = function (t) {
              var e = this.applyToPoint(t),
                n = this.applyToPoint(new Ln(t.x + t.w, t.y + t.h));
              return new qn(e.x, e.y, n.x - e.x, n.y - e.y);
            }),
            (Yt.prototype.clone = function () {
              var t = this.sx,
                e = this.shy,
                n = this.shx,
                i = this.sy,
                r = this.tx,
                o = this.ty;
              return new Yt(t, e, n, i, r, o);
            }),
            (_.Matrix = Yt);
          var Ut = (_.matrixMult = function (t, e) {
              return e.multiply(t);
            }),
            Xt = new Yt(1, 0, 0, 1, 0, 0);
          _.unitMatrix = _.identityMatrix = Xt;
          var Vt = function (t, e) {
            if (!Et[t]) {
              var n =
                (e instanceof R ? "Sh" : "P") +
                (Object.keys(qt).length + 1).toString(10);
              (e.id = n), (Et[t] = n), (qt[n] = e), Nt.publish("addPattern", e);
            }
          };
          (_.ShadingPattern = R),
            (_.TilingPattern = I),
            (_.addShadingPattern = function (t, e) {
              return T("addShadingPattern()"), Vt(t, e), this;
            }),
            (_.beginTilingPattern = function (t) {
              T("beginTilingPattern()"),
                jn(
                  t.boundingBox[0],
                  t.boundingBox[1],
                  t.boundingBox[2] - t.boundingBox[0],
                  t.boundingBox[3] - t.boundingBox[1],
                  t.matrix
                );
            }),
            (_.endTilingPattern = function (t, e) {
              T("endTilingPattern()"),
                (e.stream = at[J].join("\n")),
                Vt(t, e),
                Nt.publish("endTilingPattern", e),
                Ht.pop().restore();
            });
          var Gt = (_.__private__.newObject = function () {
              var t = Kt();
              return Zt(t, !0), t;
            }),
            Kt = (_.__private__.newObjectDeferred = function () {
              return (
                et++,
                (nt[et] = function () {
                  return rt;
                }),
                et
              );
            }),
            Zt = function (t, e) {
              return (
                (e = "boolean" == typeof e && e),
                (nt[t] = rt),
                e && ut(t + " 0 obj"),
                t
              );
            },
            Jt = (_.__private__.newAdditionalObject = function () {
              var t = { objId: Kt(), content: "" };
              return ot.push(t), t;
            }),
            Qt = Kt(),
            te = Kt(),
            ee = (_.__private__.decodeColorString = function (t) {
              var e = t.split(" ");
              if (2 !== e.length || ("g" !== e[1] && "G" !== e[1]))
                5 !== e.length ||
                  ("k" !== e[4] && "K" !== e[4]) ||
                  (e = [
                    (1 - e[0]) * (1 - e[3]),
                    (1 - e[1]) * (1 - e[3]),
                    (1 - e[2]) * (1 - e[3]),
                    "r",
                  ]);
              else {
                var n = parseFloat(e[0]);
                e = [n, n, n, "r"];
              }
              for (var i = "#", r = 0; r < 3; r++)
                i += (
                  "0" + Math.floor(255 * parseFloat(e[r])).toString(16)
                ).slice(-2);
              return i;
            }),
            ne = (_.__private__.encodeColorString = function (t) {
              var e;
              "string" == typeof t && (t = { ch1: t });
              var n = t.ch1,
                i = t.ch2,
                o = t.ch3,
                a = t.ch4,
                s =
                  "draw" === t.pdfColorType
                    ? ["G", "RG", "K"]
                    : ["g", "rg", "k"];
              if ("string" == typeof n && "#" !== n.charAt(0)) {
                var l = new b(n);
                if (l.ok) n = l.toHex();
                else if (!/^\d*\.?\d*$/.test(n))
                  throw new Error(
                    'Invalid color "' +
                      n +
                      '" passed to jsPDF.encodeColorString.'
                  );
              }
              if (
                ("string" == typeof n &&
                  /^#[0-9A-Fa-f]{3}$/.test(n) &&
                  (n = "#" + n[1] + n[1] + n[2] + n[2] + n[3] + n[3]),
                "string" == typeof n && /^#[0-9A-Fa-f]{6}$/.test(n))
              ) {
                var c = parseInt(n.substr(1), 16);
                (n = (c >> 16) & 255), (i = (c >> 8) & 255), (o = 255 & c);
              }
              if (void 0 === i || (void 0 === a && n === i && i === o))
                if ("string" == typeof n) e = n + " " + s[0];
                else
                  switch (t.precision) {
                    case 2:
                      e = P(n / 255) + " " + s[0];
                      break;
                    case 3:
                    default:
                      e = N(n / 255) + " " + s[0];
                  }
              else if (void 0 === a || "object" === r()(a)) {
                if (a && !isNaN(a.a) && 0 === a.a)
                  return ["1.", "1.", "1.", s[1]].join(" ");
                if ("string" == typeof n) e = [n, i, o, s[1]].join(" ");
                else
                  switch (t.precision) {
                    case 2:
                      e = [P(n / 255), P(i / 255), P(o / 255), s[1]].join(" ");
                      break;
                    default:
                    case 3:
                      e = [N(n / 255), N(i / 255), N(o / 255), s[1]].join(" ");
                  }
              } else if ("string" == typeof n) e = [n, i, o, a, s[2]].join(" ");
              else
                switch (t.precision) {
                  case 2:
                    e = [P(n), P(i), P(o), P(a), s[2]].join(" ");
                    break;
                  case 3:
                  default:
                    e = [N(n), N(i), N(o), N(a), s[2]].join(" ");
                }
              return e;
            }),
            ie = (_.__private__.getFilters = function () {
              return c;
            }),
            re = (_.__private__.putStream = function (t) {
              var e = (t = t || {}).data || "",
                n = t.filters || ie(),
                i = t.alreadyAppliedFilters || [],
                r = t.addLength1 || !1,
                o = e.length,
                a = t.objectId,
                s = function (t) {
                  return t;
                };
              if (null !== m && void 0 === a)
                throw new Error(
                  "ObjectId must be passed to putStream for file encryption"
                );
              null !== m && (s = Xe.encryptor(a, 0));
              var l = {};
              !0 === n && (n = ["FlateEncode"]);
              var c = t.additionalKeyValues || [],
                d =
                  (l =
                    void 0 !== W.API.processDataByFilters
                      ? W.API.processDataByFilters(e, n)
                      : { data: e, reverseChain: [] }).reverseChain +
                  (Array.isArray(i) ? i.join(" ") : i.toString());
              if (
                (0 !== l.data.length &&
                  (c.push({ key: "Length", value: l.data.length }),
                  !0 === r && c.push({ key: "Length1", value: o })),
                0 != d.length)
              )
                if (d.split("/").length - 1 == 1)
                  c.push({ key: "Filter", value: d });
                else {
                  c.push({ key: "Filter", value: "[" + d + "]" });
                  for (var u = 0; u < c.length; u += 1)
                    if ("DecodeParms" === c[u].key) {
                      for (
                        var p = [], h = 0;
                        h < l.reverseChain.split("/").length - 1;
                        h += 1
                      )
                        p.push("null");
                      p.push(c[u].value),
                        (c[u].value = "[" + p.join(" ") + "]");
                    }
                }
              ut("<<");
              for (var f = 0; f < c.length; f++)
                ut("/" + c[f].key + " " + c[f].value);
              ut(">>"),
                0 !== l.data.length &&
                  (ut("stream"), ut(s(l.data)), ut("endstream"));
            }),
            oe = (_.__private__.putPage = function (t) {
              var e = t.number,
                n = t.data,
                i = t.objId,
                r = t.contentsObjId;
              Zt(i, !0),
                ut("<</Type /Page"),
                ut("/Parent " + t.rootDictionaryObjId + " 0 R"),
                ut("/Resources " + t.resourceDictionaryObjId + " 0 R"),
                ut(
                  "/MediaBox [" +
                    parseFloat(S(t.mediaBox.bottomLeftX)) +
                    " " +
                    parseFloat(S(t.mediaBox.bottomLeftY)) +
                    " " +
                    S(t.mediaBox.topRightX) +
                    " " +
                    S(t.mediaBox.topRightY) +
                    "]"
                ),
                null !== t.cropBox &&
                  ut(
                    "/CropBox [" +
                      S(t.cropBox.bottomLeftX) +
                      " " +
                      S(t.cropBox.bottomLeftY) +
                      " " +
                      S(t.cropBox.topRightX) +
                      " " +
                      S(t.cropBox.topRightY) +
                      "]"
                  ),
                null !== t.bleedBox &&
                  ut(
                    "/BleedBox [" +
                      S(t.bleedBox.bottomLeftX) +
                      " " +
                      S(t.bleedBox.bottomLeftY) +
                      " " +
                      S(t.bleedBox.topRightX) +
                      " " +
                      S(t.bleedBox.topRightY) +
                      "]"
                  ),
                null !== t.trimBox &&
                  ut(
                    "/TrimBox [" +
                      S(t.trimBox.bottomLeftX) +
                      " " +
                      S(t.trimBox.bottomLeftY) +
                      " " +
                      S(t.trimBox.topRightX) +
                      " " +
                      S(t.trimBox.topRightY) +
                      "]"
                  ),
                null !== t.artBox &&
                  ut(
                    "/ArtBox [" +
                      S(t.artBox.bottomLeftX) +
                      " " +
                      S(t.artBox.bottomLeftY) +
                      " " +
                      S(t.artBox.topRightX) +
                      " " +
                      S(t.artBox.topRightY) +
                      "]"
                  ),
                "number" == typeof t.userUnit &&
                  1 !== t.userUnit &&
                  ut("/UserUnit " + t.userUnit),
                Nt.publish("putPage", {
                  objId: i,
                  pageContext: Wt[e],
                  pageNumber: e,
                  page: n,
                }),
                ut("/Contents " + r + " 0 R"),
                ut(">>"),
                ut("endobj");
              var o = n.join("\n");
              return (
                x === A.ADVANCED && (o += "\nQ"),
                Zt(r, !0),
                re({ data: o, filters: ie(), objectId: r }),
                ut("endobj"),
                i
              );
            }),
            ae = (_.__private__.putPages = function () {
              var t,
                e,
                n = [];
              for (t = 1; t <= It; t++)
                (Wt[t].objId = Kt()), (Wt[t].contentsObjId = Kt());
              for (t = 1; t <= It; t++)
                n.push(
                  oe({
                    number: t,
                    data: at[t],
                    objId: Wt[t].objId,
                    contentsObjId: Wt[t].contentsObjId,
                    mediaBox: Wt[t].mediaBox,
                    cropBox: Wt[t].cropBox,
                    bleedBox: Wt[t].bleedBox,
                    trimBox: Wt[t].trimBox,
                    artBox: Wt[t].artBox,
                    userUnit: Wt[t].userUnit,
                    rootDictionaryObjId: Qt,
                    resourceDictionaryObjId: te,
                  })
                );
              Zt(Qt, !0), ut("<</Type /Pages");
              var i = "/Kids [";
              for (e = 0; e < It; e++) i += n[e] + " 0 R ";
              ut(i + "]"),
                ut("/Count " + It),
                ut(">>"),
                ut("endobj"),
                Nt.publish("postPutPages");
            }),
            se = function (t) {
              Nt.publish("putFont", {
                font: t,
                out: ut,
                newObject: Gt,
                putStream: re,
              }),
                !0 !== t.isAlreadyPutted &&
                  ((t.objectNumber = Gt()),
                  ut("<<"),
                  ut("/Type /Font"),
                  ut("/BaseFont /" + q(t.postScriptName)),
                  ut("/Subtype /Type1"),
                  "string" == typeof t.encoding &&
                    ut("/Encoding /" + t.encoding),
                  ut("/FirstChar 32"),
                  ut("/LastChar 255"),
                  ut(">>"),
                  ut("endobj"));
            },
            le = function () {
              for (var t in Tt)
                Tt.hasOwnProperty(t) &&
                  (!1 === g || (!0 === g && v.hasOwnProperty(t))) &&
                  se(Tt[t]);
            },
            ce = function (t) {
              t.objectNumber = Gt();
              var e = [];
              e.push({ key: "Type", value: "/XObject" }),
                e.push({ key: "Subtype", value: "/Form" }),
                e.push({
                  key: "BBox",
                  value:
                    "[" +
                    [S(t.x), S(t.y), S(t.x + t.width), S(t.y + t.height)].join(
                      " "
                    ) +
                    "]",
                }),
                e.push({
                  key: "Matrix",
                  value: "[" + t.matrix.toString() + "]",
                });
              var n = t.pages[1].join("\n");
              re({ data: n, additionalKeyValues: e, objectId: t.objectNumber }),
                ut("endobj");
            },
            de = function () {
              for (var t in Ft) Ft.hasOwnProperty(t) && ce(Ft[t]);
            },
            ue = function (t, e) {
              var n,
                i = [],
                r = 1 / (e - 1);
              for (n = 0; n < 1; n += r) i.push(n);
              if ((i.push(1), 0 != t[0].offset)) {
                var o = { offset: 0, color: t[0].color };
                t.unshift(o);
              }
              if (1 != t[t.length - 1].offset) {
                var a = { offset: 1, color: t[t.length - 1].color };
                t.push(a);
              }
              for (var s = "", l = 0, c = 0; c < i.length; c++) {
                for (n = i[c]; n > t[l + 1].offset; ) l++;
                var d = t[l].offset,
                  u = (n - d) / (t[l + 1].offset - d),
                  p = t[l].color,
                  h = t[l + 1].color;
                s +=
                  tt(Math.round((1 - u) * p[0] + u * h[0]).toString(16)) +
                  tt(Math.round((1 - u) * p[1] + u * h[1]).toString(16)) +
                  tt(Math.round((1 - u) * p[2] + u * h[2]).toString(16));
              }
              return s.trim();
            },
            pe = function (t, e) {
              e || (e = 21);
              var n = Gt(),
                i = ue(t.colors, e),
                r = [];
              r.push({ key: "FunctionType", value: "0" }),
                r.push({ key: "Domain", value: "[0.0 1.0]" }),
                r.push({ key: "Size", value: "[" + e + "]" }),
                r.push({ key: "BitsPerSample", value: "8" }),
                r.push({ key: "Range", value: "[0.0 1.0 0.0 1.0 0.0 1.0]" }),
                r.push({ key: "Decode", value: "[0.0 1.0 0.0 1.0 0.0 1.0]" }),
                re({
                  data: i,
                  additionalKeyValues: r,
                  alreadyAppliedFilters: ["/ASCIIHexDecode"],
                  objectId: n,
                }),
                ut("endobj"),
                (t.objectNumber = Gt()),
                ut("<< /ShadingType " + t.type),
                ut("/ColorSpace /DeviceRGB");
              var o =
                "/Coords [" +
                S(parseFloat(t.coords[0])) +
                " " +
                S(parseFloat(t.coords[1])) +
                " ";
              2 === t.type
                ? (o +=
                    S(parseFloat(t.coords[2])) +
                    " " +
                    S(parseFloat(t.coords[3])))
                : (o +=
                    S(parseFloat(t.coords[2])) +
                    " " +
                    S(parseFloat(t.coords[3])) +
                    " " +
                    S(parseFloat(t.coords[4])) +
                    " " +
                    S(parseFloat(t.coords[5]))),
                ut((o += "]")),
                t.matrix && ut("/Matrix [" + t.matrix.toString() + "]"),
                ut("/Function " + n + " 0 R"),
                ut("/Extend [true true]"),
                ut(">>"),
                ut("endobj");
            },
            he = function (t, e) {
              var n = Kt(),
                i = Gt();
              e.push({ resourcesOid: n, objectOid: i }), (t.objectNumber = i);
              var r = [];
              r.push({ key: "Type", value: "/Pattern" }),
                r.push({ key: "PatternType", value: "1" }),
                r.push({ key: "PaintType", value: "1" }),
                r.push({ key: "TilingType", value: "1" }),
                r.push({
                  key: "BBox",
                  value: "[" + t.boundingBox.map(S).join(" ") + "]",
                }),
                r.push({ key: "XStep", value: S(t.xStep) }),
                r.push({ key: "YStep", value: S(t.yStep) }),
                r.push({ key: "Resources", value: n + " 0 R" }),
                t.matrix &&
                  r.push({
                    key: "Matrix",
                    value: "[" + t.matrix.toString() + "]",
                  }),
                re({
                  data: t.stream,
                  additionalKeyValues: r,
                  objectId: t.objectNumber,
                }),
                ut("endobj");
            },
            fe = function (t) {
              var e;
              for (e in qt)
                qt.hasOwnProperty(e) &&
                  (qt[e] instanceof R
                    ? pe(qt[e])
                    : qt[e] instanceof I && he(qt[e], t));
            },
            be = function (t) {
              for (var e in ((t.objectNumber = Gt()), ut("<<"), t))
                switch (e) {
                  case "opacity":
                    ut("/ca " + P(t[e]));
                    break;
                  case "stroke-opacity":
                    ut("/CA " + P(t[e]));
                }
              ut(">>"), ut("endobj");
            },
            me = function () {
              var t;
              for (t in jt) jt.hasOwnProperty(t) && be(jt[t]);
            },
            ge = function () {
              for (var t in (ut("/XObject <<"), Ft))
                Ft.hasOwnProperty(t) &&
                  Ft[t].objectNumber >= 0 &&
                  ut("/" + t + " " + Ft[t].objectNumber + " 0 R");
              Nt.publish("putXobjectDict"), ut(">>");
            },
            ve = function () {
              (Xe.oid = Gt()),
                ut("<<"),
                ut("/Filter /Standard"),
                ut("/V " + Xe.v),
                ut("/R " + Xe.r),
                ut("/U <" + Xe.toHexString(Xe.U) + ">"),
                ut("/O <" + Xe.toHexString(Xe.O) + ">"),
                ut("/P " + Xe.P),
                ut(">>"),
                ut("endobj");
            },
            _e = function () {
              for (var t in (ut("/Font <<"), Tt))
                Tt.hasOwnProperty(t) &&
                  (!1 === g || (!0 === g && v.hasOwnProperty(t))) &&
                  ut("/" + t + " " + Tt[t].objectNumber + " 0 R");
              ut(">>");
            },
            ye = function () {
              if (Object.keys(qt).length > 0) {
                for (var t in (ut("/Shading <<"), qt))
                  qt.hasOwnProperty(t) &&
                    qt[t] instanceof R &&
                    qt[t].objectNumber >= 0 &&
                    ut("/" + t + " " + qt[t].objectNumber + " 0 R");
                Nt.publish("putShadingPatternDict"), ut(">>");
              }
            },
            Me = function (t) {
              if (Object.keys(qt).length > 0) {
                for (var e in (ut("/Pattern <<"), qt))
                  qt.hasOwnProperty(e) &&
                    qt[e] instanceof _.TilingPattern &&
                    qt[e].objectNumber >= 0 &&
                    qt[e].objectNumber < t &&
                    ut("/" + e + " " + qt[e].objectNumber + " 0 R");
                Nt.publish("putTilingPatternDict"), ut(">>");
              }
            },
            Oe = function () {
              if (Object.keys(jt).length > 0) {
                var t;
                for (t in (ut("/ExtGState <<"), jt))
                  jt.hasOwnProperty(t) &&
                    jt[t].objectNumber >= 0 &&
                    ut("/" + t + " " + jt[t].objectNumber + " 0 R");
                Nt.publish("putGStateDict"), ut(">>");
              }
            },
            we = function (t) {
              Zt(t.resourcesOid, !0),
                ut("<<"),
                ut("/ProcSet [/PDF /Text /ImageB /ImageC /ImageI]"),
                _e(),
                ye(),
                Me(t.objectOid),
                Oe(),
                ge(),
                ut(">>"),
                ut("endobj");
            },
            Ae = function () {
              var t = [];
              le(),
                me(),
                de(),
                fe(t),
                Nt.publish("putResources"),
                t.forEach(we),
                we({ resourcesOid: te, objectOid: Number.MAX_SAFE_INTEGER }),
                Nt.publish("postPutResources");
            },
            xe = function () {
              Nt.publish("putAdditionalObjects");
              for (var t = 0; t < ot.length; t++) {
                var e = ot[t];
                Zt(e.objId, !0), ut(e.content), ut("endobj");
              }
              Nt.publish("postPutAdditionalObjects");
            },
            ze = function (t) {
              (Dt[t.fontName] = Dt[t.fontName] || {}),
                (Dt[t.fontName][t.fontStyle] = t.id);
            },
            Ce = function (t, e, n, i, r) {
              var o = {
                id: "F" + (Object.keys(Tt).length + 1).toString(10),
                postScriptName: t,
                fontName: e,
                fontStyle: n,
                encoding: i,
                isStandardFont: r || !1,
                metadata: {},
              };
              return (
                Nt.publish("addFont", { font: o, instance: this }),
                (Tt[o.id] = o),
                ze(o),
                o.id
              );
            },
            ke = function (t) {
              for (var e = 0, n = ft.length; e < n; e++) {
                var i = Ce.call(this, t[e][0], t[e][1], t[e][2], ft[e][3], !0);
                !1 === g && (v[i] = !0);
                var r = t[e][0].split("-");
                ze({ id: i, fontName: r[0], fontStyle: r[1] || "" });
              }
              Nt.publish("addFonts", { fonts: Tt, dictionary: Dt });
            },
            Se = function (t) {
              return (
                (t.foo = function () {
                  try {
                    return t.apply(this, arguments);
                  } catch (t) {
                    var e = t.stack || "";
                    ~e.indexOf(" at ") && (e = e.split(" at ")[1]);
                    var n =
                      "Error in function " +
                      e.split("\n")[0].split("<")[0] +
                      ": " +
                      t.message;
                    if (!a.console) throw new Error(n);
                    a.console.error(n, t), a.alert && alert(n);
                  }
                }),
                (t.foo.bar = t),
                t.foo
              );
            },
            Te = function (t, e) {
              var n, i, r, o, a, s, l, c, d;
              if (
                ((r = (e = e || {}).sourceEncoding || "Unicode"),
                (a = e.outputEncoding),
                (e.autoencode || a) &&
                  Tt[xt].metadata &&
                  Tt[xt].metadata[r] &&
                  Tt[xt].metadata[r].encoding &&
                  ((o = Tt[xt].metadata[r].encoding),
                  !a && Tt[xt].encoding && (a = Tt[xt].encoding),
                  !a && o.codePages && (a = o.codePages[0]),
                  "string" == typeof a && (a = o[a]),
                  a))
              ) {
                for (l = !1, s = [], n = 0, i = t.length; n < i; n++)
                  (c = a[t.charCodeAt(n)])
                    ? s.push(String.fromCharCode(c))
                    : s.push(t[n]),
                    s[n].charCodeAt(0) >> 8 && (l = !0);
                t = s.join("");
              }
              for (n = t.length; void 0 === l && 0 !== n; )
                t.charCodeAt(n - 1) >> 8 && (l = !0), n--;
              if (!l) return t;
              for (
                s = e.noBOM ? [] : [254, 255], n = 0, i = t.length;
                n < i;
                n++
              ) {
                if ((d = (c = t.charCodeAt(n)) >> 8) >> 8)
                  throw new Error(
                    "Character at position " +
                      n +
                      " of string '" +
                      t +
                      "' exceeds 16bits. Cannot be encoded into UCS-2 BE"
                  );
                s.push(d), s.push(c - (d << 8));
              }
              return String.fromCharCode.apply(void 0, s);
            },
            De =
              (_.__private__.pdfEscape =
              _.pdfEscape =
                function (t, e) {
                  return Te(t, e)
                    .replace(/\\/g, "\\\\")
                    .replace(/\(/g, "\\(")
                    .replace(/\)/g, "\\)");
                }),
            Le = (_.__private__.beginPage = function (t) {
              (at[++It] = []),
                (Wt[It] = {
                  objId: 0,
                  contentsObjId: 0,
                  userUnit: Number(d),
                  artBox: null,
                  bleedBox: null,
                  cropBox: null,
                  trimBox: null,
                  mediaBox: {
                    bottomLeftX: 0,
                    bottomLeftY: 0,
                    topRightX: Number(t[0]),
                    topRightY: Number(t[1]),
                  },
                }),
                je(It),
                dt(at[J]);
            }),
            qe = function (t, e) {
              var i, r, a;
              switch (
                ((n = e || n),
                "string" == typeof t &&
                  ((i = w(t.toLowerCase())),
                  Array.isArray(i) && ((r = i[0]), (a = i[1]))),
                Array.isArray(t) && ((r = t[0] * zt), (a = t[1] * zt)),
                isNaN(r) && ((r = o[0]), (a = o[1])),
                (r > 14400 || a > 14400) &&
                  (l.warn(
                    "A page in a PDF can not be wider or taller than 14400 userUnit. jsPDF limits the width/height to 14400"
                  ),
                  (r = Math.min(14400, r)),
                  (a = Math.min(14400, a))),
                (o = [r, a]),
                n.substr(0, 1))
              ) {
                case "l":
                  a > r && (o = [a, r]);
                  break;
                case "p":
                  r > a && (o = [a, r]);
              }
              Le(o),
                bn(hn),
                ut(wn),
                0 !== Sn && ut(Sn + " J"),
                0 !== Tn && ut(Tn + " j"),
                Nt.publish("addPage", { pageNumber: It });
            },
            Ee = function (t) {
              t > 0 &&
                t <= It &&
                (at.splice(t, 1),
                Wt.splice(t, 1),
                It--,
                J > It && (J = It),
                this.setPage(J));
            },
            je = function (t) {
              t > 0 && t <= It && (J = t);
            },
            Pe =
              (_.__private__.getNumberOfPages =
              _.getNumberOfPages =
                function () {
                  return at.length - 1;
                }),
            Re = function (t, e, n) {
              var i,
                r = void 0;
              return (
                (n = n || {}),
                (t = void 0 !== t ? t : Tt[xt].fontName),
                (e = void 0 !== e ? e : Tt[xt].fontStyle),
                (i = t.toLowerCase()),
                void 0 !== Dt[i] && void 0 !== Dt[i][e]
                  ? (r = Dt[i][e])
                  : void 0 !== Dt[t] && void 0 !== Dt[t][e]
                  ? (r = Dt[t][e])
                  : !1 === n.disableWarning &&
                    l.warn(
                      "Unable to look up font label for font '" +
                        t +
                        "', '" +
                        e +
                        "'. Refer to getFontList() for available fonts."
                    ),
                r ||
                  n.noFallback ||
                  (null == (r = Dt.times[e]) && (r = Dt.times.normal)),
                r
              );
            },
            Ie = (_.__private__.putInfo = function () {
              var t = Gt(),
                e = function (t) {
                  return t;
                };
              for (var n in (null !== m && (e = Xe.encryptor(t, 0)),
              ut("<<"),
              ut("/Producer (" + De(e("jsPDF " + W.version)) + ")"),
              At))
                At.hasOwnProperty(n) &&
                  At[n] &&
                  ut(
                    "/" +
                      n.substr(0, 1).toUpperCase() +
                      n.substr(1) +
                      " (" +
                      De(e(At[n])) +
                      ")"
                  );
              ut("/CreationDate (" + De(e(H)) + ")"), ut(">>"), ut("endobj");
            }),
            We = (_.__private__.putCatalog = function (t) {
              var e = (t = t || {}).rootDictionaryObjId || Qt;
              switch (
                (Gt(),
                ut("<<"),
                ut("/Type /Catalog"),
                ut("/Pages " + e + " 0 R"),
                mt || (mt = "fullwidth"),
                mt)
              ) {
                case "fullwidth":
                  ut("/OpenAction [3 0 R /FitH null]");
                  break;
                case "fullheight":
                  ut("/OpenAction [3 0 R /FitV null]");
                  break;
                case "fullpage":
                  ut("/OpenAction [3 0 R /Fit]");
                  break;
                case "original":
                  ut("/OpenAction [3 0 R /XYZ null null 1]");
                  break;
                default:
                  var n = "" + mt;
                  "%" === n.substr(n.length - 1) && (mt = parseInt(mt) / 100),
                    "number" == typeof mt &&
                      ut("/OpenAction [3 0 R /XYZ null null " + P(mt) + "]");
              }
              switch ((Mt || (Mt = "continuous"), Mt)) {
                case "continuous":
                  ut("/PageLayout /OneColumn");
                  break;
                case "single":
                  ut("/PageLayout /SinglePage");
                  break;
                case "two":
                case "twoleft":
                  ut("/PageLayout /TwoColumnLeft");
                  break;
                case "tworight":
                  ut("/PageLayout /TwoColumnRight");
              }
              _t && ut("/PageMode /" + _t),
                Nt.publish("putCatalog"),
                ut(">>"),
                ut("endobj");
            }),
            Ne = (_.__private__.putTrailer = function () {
              ut("trailer"),
                ut("<<"),
                ut("/Size " + (et + 1)),
                ut("/Root " + et + " 0 R"),
                ut("/Info " + (et - 1) + " 0 R"),
                null !== m && ut("/Encrypt " + Xe.oid + " 0 R"),
                ut("/ID [ <" + Y + "> <" + Y + "> ]"),
                ut(">>");
            }),
            Be = (_.__private__.putHeader = function () {
              ut("%PDF-" + y), ut("%ºß¬à");
            }),
            Fe = (_.__private__.putXRef = function () {
              var t = "0000000000";
              ut("xref"), ut("0 " + (et + 1)), ut("0000000000 65535 f ");
              for (var e = 1; e <= et; e++)
                "function" == typeof nt[e]
                  ? ut((t + nt[e]()).slice(-10) + " 00000 n ")
                  : void 0 !== nt[e]
                  ? ut((t + nt[e]).slice(-10) + " 00000 n ")
                  : ut("0000000000 00000 n ");
            }),
            $e = (_.__private__.buildDocument = function () {
              ct(),
                dt(it),
                Nt.publish("buildDocument"),
                Be(),
                ae(),
                xe(),
                Ae(),
                null !== m && ve(),
                Ie(),
                We();
              var t = rt;
              return (
                Fe(),
                Ne(),
                ut("startxref"),
                ut("" + t),
                ut("%%EOF"),
                dt(at[J]),
                it.join("\n")
              );
            }),
            He = (_.__private__.getBlob = function (t) {
              return new Blob([ht(t)], { type: "application/pdf" });
            }),
            Ye =
              (_.output =
              _.__private__.output =
                Se(function (t, e) {
                  switch (
                    ("string" == typeof (e = e || {})
                      ? (e = { filename: e })
                      : (e.filename = e.filename || "generated.pdf"),
                    t)
                  ) {
                    case void 0:
                      return $e();
                    case "save":
                      _.save(e.filename);
                      break;
                    case "arraybuffer":
                      return ht($e());
                    case "blob":
                      return He($e());
                    case "bloburi":
                    case "bloburl":
                      if (
                        void 0 !== a.URL &&
                        "function" == typeof a.URL.createObjectURL
                      )
                        return (
                          (a.URL && a.URL.createObjectURL(He($e()))) || void 0
                        );
                      l.warn(
                        "bloburl is not supported by your system, because URL.createObjectURL is not supported by your browser."
                      );
                      break;
                    case "datauristring":
                    case "dataurlstring":
                      var n = "",
                        i = $e();
                      try {
                        n = h(i);
                      } catch (t) {
                        n = h(unescape(encodeURIComponent(i)));
                      }
                      return (
                        "data:application/pdf;filename=" +
                        e.filename +
                        ";base64," +
                        n
                      );
                    case "pdfobjectnewwindow":
                      if (
                        "[object Window]" === Object.prototype.toString.call(a)
                      ) {
                        var r =
                            "https://cdnjs.cloudflare.com/ajax/libs/pdfobject/2.1.1/pdfobject.min.js",
                          o =
                            ' integrity="sha512-4ze/a9/4jqu+tX9dfOqJYSvyYd5M6qum/3HpCLr+/Jqf0whc37VUbkpNGHR7/8pSnCFw47T1fmIpwBV7UySh3g==" crossorigin="anonymous"';
                        e.pdfObjectUrl && ((r = e.pdfObjectUrl), (o = ""));
                        var s =
                            '<html><style>html, body { padding: 0; margin: 0; } iframe { width: 100%; height: 100%; border: 0;}  </style><body><script src="' +
                            r +
                            '"' +
                            o +
                            '></script><script >PDFObject.embed("' +
                            this.output("dataurlstring") +
                            '", ' +
                            JSON.stringify(e) +
                            ");</script></body></html>",
                          c = a.open();
                        return null !== c && c.document.write(s), c;
                      }
                      throw new Error(
                        "The option pdfobjectnewwindow just works in a browser-environment."
                      );
                    case "pdfjsnewwindow":
                      if (
                        "[object Window]" === Object.prototype.toString.call(a)
                      ) {
                        var d =
                            '<html><style>html, body { padding: 0; margin: 0; } iframe { width: 100%; height: 100%; border: 0;}  </style><body><iframe id="pdfViewer" src="' +
                            (e.pdfJsUrl || "examples/PDF.js/web/viewer.html") +
                            "?file=&downloadName=" +
                            e.filename +
                            '" width="500px" height="400px" /></body></html>',
                          u = a.open();
                        if (null !== u) {
                          u.document.write(d);
                          var p = this;
                          u.document.documentElement.querySelector(
                            "#pdfViewer"
                          ).onload = function () {
                            (u.document.title = e.filename),
                              u.document.documentElement
                                .querySelector("#pdfViewer")
                                .contentWindow.PDFViewerApplication.open(
                                  p.output("bloburl")
                                );
                          };
                        }
                        return u;
                      }
                      throw new Error(
                        "The option pdfjsnewwindow just works in a browser-environment."
                      );
                    case "dataurlnewwindow":
                      if (
                        "[object Window]" !== Object.prototype.toString.call(a)
                      )
                        throw new Error(
                          "The option dataurlnewwindow just works in a browser-environment."
                        );
                      var f =
                          '<html><style>html, body { padding: 0; margin: 0; } iframe { width: 100%; height: 100%; border: 0;}  </style><body><iframe src="' +
                          this.output("datauristring", e) +
                          '"></iframe></body></html>',
                        b = a.open();
                      if (
                        (null !== b &&
                          (b.document.write(f),
                          (b.document.title = e.filename)),
                        b || "undefined" == typeof safari)
                      )
                        return b;
                      break;
                    case "datauri":
                    case "dataurl":
                      return (a.document.location.href = this.output(
                        "datauristring",
                        e
                      ));
                    default:
                      return null;
                  }
                })),
            Ue = function (t) {
              return !0 === Array.isArray(Bt) && Bt.indexOf(t) > -1;
            };
          switch (i) {
            case "pt":
              zt = 1;
              break;
            case "mm":
              zt = 72 / 25.4;
              break;
            case "cm":
              zt = 72 / 2.54;
              break;
            case "in":
              zt = 72;
              break;
            case "px":
              zt = 1 == Ue("px_scaling") ? 0.75 : 96 / 72;
              break;
            case "pc":
            case "em":
              zt = 12;
              break;
            case "ex":
              zt = 6;
              break;
            default:
              if ("number" != typeof i) throw new Error("Invalid unit: " + i);
              zt = i;
          }
          var Xe = null;
          K(), X();
          var Ve = function (t) {
              return null !== m
                ? Xe.encryptor(t, 0)
                : function (t) {
                    return t;
                  };
            },
            Ge =
              (_.__private__.getPageInfo =
              _.getPageInfo =
                function (t) {
                  if (isNaN(t) || t % 1 != 0)
                    throw new Error(
                      "Invalid argument passed to jsPDF.getPageInfo"
                    );
                  return {
                    objId: Wt[t].objId,
                    pageNumber: t,
                    pageContext: Wt[t],
                  };
                }),
            Ke = (_.__private__.getPageInfoByObjId = function (t) {
              if (isNaN(t) || t % 1 != 0)
                throw new Error(
                  "Invalid argument passed to jsPDF.getPageInfoByObjId"
                );
              for (var e in Wt) if (Wt[e].objId === t) break;
              return Ge(e);
            }),
            Ze =
              (_.__private__.getCurrentPageInfo =
              _.getCurrentPageInfo =
                function () {
                  return {
                    objId: Wt[J].objId,
                    pageNumber: J,
                    pageContext: Wt[J],
                  };
                });
          (_.addPage = function () {
            return qe.apply(this, arguments), this;
          }),
            (_.setPage = function () {
              return je.apply(this, arguments), dt.call(this, at[J]), this;
            }),
            (_.insertPage = function (t) {
              return this.addPage(), this.movePage(J, t), this;
            }),
            (_.movePage = function (t, e) {
              var n, i;
              if (t > e) {
                (n = at[t]), (i = Wt[t]);
                for (var r = t; r > e; r--)
                  (at[r] = at[r - 1]), (Wt[r] = Wt[r - 1]);
                (at[e] = n), (Wt[e] = i), this.setPage(e);
              } else if (t < e) {
                (n = at[t]), (i = Wt[t]);
                for (var o = t; o < e; o++)
                  (at[o] = at[o + 1]), (Wt[o] = Wt[o + 1]);
                (at[e] = n), (Wt[e] = i), this.setPage(e);
              }
              return this;
            }),
            (_.deletePage = function () {
              return Ee.apply(this, arguments), this;
            }),
            (_.__private__.text = _.text =
              function (t, e, n, i, o) {
                var a,
                  s,
                  l,
                  c,
                  d,
                  u,
                  p,
                  h,
                  f,
                  b = (i = i || {}).scope || this;
                if (
                  "number" == typeof t &&
                  "number" == typeof e &&
                  ("string" == typeof n || Array.isArray(n))
                ) {
                  var m = n;
                  (n = e), (e = t), (t = m);
                }
                if (
                  (arguments[3] instanceof Yt == 0
                    ? ((l = arguments[4]),
                      (c = arguments[5]),
                      ("object" === r()((p = arguments[3])) && null !== p) ||
                        ("string" == typeof l && ((c = l), (l = null)),
                        "string" == typeof p && ((c = p), (p = null)),
                        "number" == typeof p && ((l = p), (p = null)),
                        (i = { flags: p, angle: l, align: c })))
                    : (T(
                        "The transform parameter of text() with a Matrix value"
                      ),
                      (f = o)),
                  isNaN(e) || isNaN(n) || null == t)
                )
                  throw new Error("Invalid arguments passed to jsPDF.text");
                if (0 === t.length) return b;
                var g = "",
                  _ = !1,
                  y =
                    "number" == typeof i.lineHeightFactor
                      ? i.lineHeightFactor
                      : pn,
                  M = b.internal.scaleFactor;
                function O(t) {
                  return (
                    (t = t.split("\t").join(Array(i.TabLen || 9).join(" "))),
                    De(t, p)
                  );
                }
                function w(t) {
                  for (var e, n = t.concat(), i = [], r = n.length; r--; )
                    "string" == typeof (e = n.shift())
                      ? i.push(e)
                      : Array.isArray(t) &&
                        (1 === e.length || (void 0 === e[1] && void 0 === e[2]))
                      ? i.push(e[0])
                      : i.push([e[0], e[1], e[2]]);
                  return i;
                }
                function z(t, e) {
                  var n;
                  if ("string" == typeof t) n = e(t)[0];
                  else if (Array.isArray(t)) {
                    for (var i, r, o = t.concat(), a = [], s = o.length; s--; )
                      "string" == typeof (i = o.shift())
                        ? a.push(e(i)[0])
                        : Array.isArray(i) &&
                          "string" == typeof i[0] &&
                          ((r = e(i[0], i[1], i[2])),
                          a.push([r[0], r[1], r[2]]));
                    n = a;
                  }
                  return n;
                }
                var C = !1,
                  k = !0;
                if ("string" == typeof t) C = !0;
                else if (Array.isArray(t)) {
                  var D = t.concat();
                  s = [];
                  for (var L, q = D.length; q--; )
                    ("string" != typeof (L = D.shift()) ||
                      (Array.isArray(L) && "string" != typeof L[0])) &&
                      (k = !1);
                  C = k;
                }
                if (!1 === C)
                  throw new Error(
                    'Type of text must be string or Array. "' +
                      t +
                      '" is not recognized.'
                  );
                "string" == typeof t &&
                  (t = t.match(/[\r?\n]/) ? t.split(/\r\n|\r|\n/g) : [t]);
                var E = bt / b.internal.scaleFactor,
                  j = E * (y - 1);
                switch (i.baseline) {
                  case "bottom":
                    n -= j;
                    break;
                  case "top":
                    n += E - j;
                    break;
                  case "hanging":
                    n += E - 2 * j;
                    break;
                  case "middle":
                    n += E / 2 - j;
                }
                if (
                  ((u = i.maxWidth || 0) > 0 &&
                    ("string" == typeof t
                      ? (t = b.splitTextToSize(t, u))
                      : "[object Array]" ===
                          Object.prototype.toString.call(t) &&
                        (t = t.reduce(function (t, e) {
                          return t.concat(b.splitTextToSize(e, u));
                        }, []))),
                  (a = {
                    text: t,
                    x: e,
                    y: n,
                    options: i,
                    mutex: {
                      pdfEscape: De,
                      activeFontKey: xt,
                      fonts: Tt,
                      activeFontSize: bt,
                    },
                  }),
                  Nt.publish("preProcessText", a),
                  (t = a.text),
                  (l = (i = a.options).angle),
                  f instanceof Yt == 0 && l && "number" == typeof l)
                ) {
                  (l *= Math.PI / 180),
                    0 === i.rotationDirection && (l = -l),
                    x === A.ADVANCED && (l = -l);
                  var P = Math.cos(l),
                    R = Math.sin(l);
                  f = new Yt(P, R, -R, P, 0, 0);
                } else l && l instanceof Yt && (f = l);
                x !== A.ADVANCED || f || (f = Xt),
                  void 0 !== (d = i.charSpace || Cn) &&
                    ((g += S(B(d)) + " Tc\n"),
                    this.setCharSpace(this.getCharSpace() || 0)),
                  void 0 !== (h = i.horizontalScale) &&
                    (g += S(100 * h) + " Tz\n"),
                  i.lang;
                var I = -1,
                  W = void 0 !== i.renderingMode ? i.renderingMode : i.stroke,
                  N = b.internal.getCurrentPageInfo().pageContext;
                switch (W) {
                  case 0:
                  case !1:
                  case "fill":
                    I = 0;
                    break;
                  case 1:
                  case !0:
                  case "stroke":
                    I = 1;
                    break;
                  case 2:
                  case "fillThenStroke":
                    I = 2;
                    break;
                  case 3:
                  case "invisible":
                    I = 3;
                    break;
                  case 4:
                  case "fillAndAddForClipping":
                    I = 4;
                    break;
                  case 5:
                  case "strokeAndAddPathForClipping":
                    I = 5;
                    break;
                  case 6:
                  case "fillThenStrokeAndAddToPathForClipping":
                    I = 6;
                    break;
                  case 7:
                  case "addToPathForClipping":
                    I = 7;
                }
                var F =
                  void 0 !== N.usedRenderingMode ? N.usedRenderingMode : -1;
                -1 !== I ? (g += I + " Tr\n") : -1 !== F && (g += "0 Tr\n"),
                  -1 !== I && (N.usedRenderingMode = I),
                  (c = i.align || "left");
                var $,
                  H = bt * y,
                  Y = b.internal.pageSize.getWidth(),
                  U = Tt[xt];
                (d = i.charSpace || Cn),
                  (u = i.maxWidth || 0),
                  (p = Object.assign({ autoencode: !0, noBOM: !0 }, i.flags));
                var X = [],
                  V = function (t) {
                    return (
                      (b.getStringUnitWidth(t, {
                        font: U,
                        charSpace: d,
                        fontSize: bt,
                        doKerning: !1,
                      }) *
                        bt) /
                      M
                    );
                  };
                if ("[object Array]" === Object.prototype.toString.call(t)) {
                  var G;
                  (s = w(t)), "left" !== c && ($ = s.map(V));
                  var K,
                    Z = 0;
                  if ("right" === c) {
                    (e -= $[0]), (t = []), (q = s.length);
                    for (var J = 0; J < q; J++)
                      0 === J
                        ? ((K = _n(e)), (G = yn(n)))
                        : ((K = B(Z - $[J])), (G = -H)),
                        t.push([s[J], K, G]),
                        (Z = $[J]);
                  } else if ("center" === c) {
                    (e -= $[0] / 2), (t = []), (q = s.length);
                    for (var Q = 0; Q < q; Q++)
                      0 === Q
                        ? ((K = _n(e)), (G = yn(n)))
                        : ((K = B((Z - $[Q]) / 2)), (G = -H)),
                        t.push([s[Q], K, G]),
                        (Z = $[Q]);
                  } else if ("left" === c) {
                    (t = []), (q = s.length);
                    for (var tt = 0; tt < q; tt++) t.push(s[tt]);
                  } else if ("justify" === c && "Identity-H" === U.encoding) {
                    (t = []), (q = s.length), (u = 0 !== u ? u : Y);
                    for (var et = 0, nt = 0; nt < q; nt++)
                      if (
                        ((G = 0 === nt ? yn(n) : -H),
                        (K = 0 === nt ? _n(e) : et),
                        nt < q - 1)
                      ) {
                        var it = B((u - $[nt]) / (s[nt].split(" ").length - 1)),
                          rt = s[nt].split(" ");
                        t.push([rt[0] + " ", K, G]), (et = 0);
                        for (var ot = 1; ot < rt.length; ot++) {
                          var at =
                            (V(rt[ot - 1] + " " + rt[ot]) - V(rt[ot])) * M + it;
                          ot == rt.length - 1
                            ? t.push([rt[ot], at, 0])
                            : t.push([rt[ot] + " ", at, 0]),
                            (et -= at);
                        }
                      } else t.push([s[nt], K, G]);
                    t.push(["", et, 0]);
                  } else {
                    if ("justify" !== c)
                      throw new Error(
                        'Unrecognized alignment option, use "left", "center", "right" or "justify".'
                      );
                    for (
                      t = [], q = s.length, u = 0 !== u ? u : Y, nt = 0;
                      nt < q;
                      nt++
                    )
                      (G = 0 === nt ? yn(n) : -H),
                        (K = 0 === nt ? _n(e) : 0),
                        nt < q - 1
                          ? X.push(
                              S(B((u - $[nt]) / (s[nt].split(" ").length - 1)))
                            )
                          : X.push(0),
                        t.push([s[nt], K, G]);
                  }
                }
                var st = "boolean" == typeof i.R2L ? i.R2L : vt;
                !0 === st &&
                  (t = z(t, function (t, e, n) {
                    return [t.split("").reverse().join(""), e, n];
                  })),
                  (a = {
                    text: t,
                    x: e,
                    y: n,
                    options: i,
                    mutex: {
                      pdfEscape: De,
                      activeFontKey: xt,
                      fonts: Tt,
                      activeFontSize: bt,
                    },
                  }),
                  Nt.publish("postProcessText", a),
                  (t = a.text),
                  (_ = a.mutex.isHex || !1);
                var lt = Tt[xt].encoding;
                ("WinAnsiEncoding" !== lt && "StandardEncoding" !== lt) ||
                  (t = z(t, function (t, e, n) {
                    return [O(t), e, n];
                  })),
                  (s = w(t)),
                  (t = []);
                for (
                  var ct,
                    dt,
                    pt,
                    ht = 0,
                    ft = 1,
                    mt = Array.isArray(s[0]) ? ft : ht,
                    gt = "",
                    _t = function (t, e, n) {
                      var r = "";
                      return (
                        n instanceof Yt
                          ? ((n =
                              "number" == typeof i.angle
                                ? Ut(n, new Yt(1, 0, 0, 1, t, e))
                                : Ut(new Yt(1, 0, 0, 1, t, e), n)),
                            x === A.ADVANCED &&
                              (n = Ut(new Yt(1, 0, 0, -1, 0, 0), n)),
                            (r = n.join(" ") + " Tm\n"))
                          : (r = S(t) + " " + S(e) + " Td\n"),
                        r
                      );
                    },
                    yt = 0;
                  yt < s.length;
                  yt++
                ) {
                  switch (((gt = ""), mt)) {
                    case ft:
                      (pt = (_ ? "<" : "(") + s[yt][0] + (_ ? ">" : ")")),
                        (ct = parseFloat(s[yt][1])),
                        (dt = parseFloat(s[yt][2]));
                      break;
                    case ht:
                      (pt = (_ ? "<" : "(") + s[yt] + (_ ? ">" : ")")),
                        (ct = _n(e)),
                        (dt = yn(n));
                  }
                  void 0 !== X && void 0 !== X[yt] && (gt = X[yt] + " Tw\n"),
                    0 === yt
                      ? t.push(gt + _t(ct, dt, f) + pt)
                      : mt === ht
                      ? t.push(gt + pt)
                      : mt === ft && t.push(gt + _t(ct, dt, f) + pt);
                }
                (t = mt === ht ? t.join(" Tj\nT* ") : t.join(" Tj\n")),
                  (t += " Tj\n");
                var Mt = "BT\n/";
                return (
                  (Mt += xt + " " + bt + " Tf\n"),
                  (Mt += S(bt * y) + " TL\n"),
                  (Mt += xn + "\n"),
                  (Mt += g),
                  (Mt += t),
                  ut((Mt += "ET")),
                  (v[xt] = !0),
                  b
                );
              });
          var Je =
            (_.__private__.clip =
            _.clip =
              function (t) {
                return ut("evenodd" === t ? "W*" : "W"), this;
              });
          (_.clipEvenOdd = function () {
            return Je("evenodd");
          }),
            (_.__private__.discardPath = _.discardPath =
              function () {
                return ut("n"), this;
              });
          var Qe = (_.__private__.isValidStyle = function (t) {
            var e = !1;
            return (
              -1 !==
                [
                  void 0,
                  null,
                  "S",
                  "D",
                  "F",
                  "DF",
                  "FD",
                  "f",
                  "f*",
                  "B",
                  "B*",
                  "n",
                ].indexOf(t) && (e = !0),
              e
            );
          });
          _.__private__.setDefaultPathOperation = _.setDefaultPathOperation =
            function (t) {
              return Qe(t) && (p = t), this;
            };
          var tn =
              (_.__private__.getStyle =
              _.getStyle =
                function (t) {
                  var e = p;
                  switch (t) {
                    case "D":
                    case "S":
                      e = "S";
                      break;
                    case "F":
                      e = "f";
                      break;
                    case "FD":
                    case "DF":
                      e = "B";
                      break;
                    case "f":
                    case "f*":
                    case "B":
                    case "B*":
                      e = t;
                  }
                  return e;
                }),
            en = (_.close = function () {
              return ut("h"), this;
            });
          (_.stroke = function () {
            return ut("S"), this;
          }),
            (_.fill = function (t) {
              return nn("f", t), this;
            }),
            (_.fillEvenOdd = function (t) {
              return nn("f*", t), this;
            }),
            (_.fillStroke = function (t) {
              return nn("B", t), this;
            }),
            (_.fillStrokeEvenOdd = function (t) {
              return nn("B*", t), this;
            });
          var nn = function (t, e) {
              "object" === r()(e) ? an(e, t) : ut(t);
            },
            rn = function (t) {
              null === t ||
                (x === A.ADVANCED && void 0 === t) ||
                ((t = tn(t)), ut(t));
            };
          function on(t, e, n, i, r) {
            var o = new I(
              e || this.boundingBox,
              n || this.xStep,
              i || this.yStep,
              this.gState,
              r || this.matrix
            );
            o.stream = this.stream;
            var a = t + "$$" + this.cloneIndex++ + "$$";
            return Vt(a, o), o;
          }
          var an = function (t, e) {
              var n = Et[t.key],
                i = qt[n];
              if (i instanceof R)
                ut("q"),
                  ut(sn(e)),
                  i.gState && _.setGState(i.gState),
                  ut(t.matrix.toString() + " cm"),
                  ut("/" + n + " sh"),
                  ut("Q");
              else if (i instanceof I) {
                var r = new Yt(1, 0, 0, -1, 0, Nn());
                t.matrix &&
                  ((r = r.multiply(t.matrix || Xt)),
                  (n = on.call(
                    i,
                    t.key,
                    t.boundingBox,
                    t.xStep,
                    t.yStep,
                    r
                  ).id)),
                  ut("q"),
                  ut("/Pattern cs"),
                  ut("/" + n + " scn"),
                  i.gState && _.setGState(i.gState),
                  ut(e),
                  ut("Q");
              }
            },
            sn = function (t) {
              switch (t) {
                case "f":
                case "F":
                  return "W n";
                case "f*":
                  return "W* n";
                case "B":
                  return "W S";
                case "B*":
                  return "W* S";
                case "S":
                  return "W S";
                case "n":
                  return "W n";
              }
            },
            ln = (_.moveTo = function (t, e) {
              return ut(S(B(t)) + " " + S($(e)) + " m"), this;
            }),
            cn = (_.lineTo = function (t, e) {
              return ut(S(B(t)) + " " + S($(e)) + " l"), this;
            }),
            dn = (_.curveTo = function (t, e, n, i, r, o) {
              return (
                ut(
                  [
                    S(B(t)),
                    S($(e)),
                    S(B(n)),
                    S($(i)),
                    S(B(r)),
                    S($(o)),
                    "c",
                  ].join(" ")
                ),
                this
              );
            });
          (_.__private__.line = _.line =
            function (t, e, n, i, r) {
              if (isNaN(t) || isNaN(e) || isNaN(n) || isNaN(i) || !Qe(r))
                throw new Error("Invalid arguments passed to jsPDF.line");
              return x === A.COMPAT
                ? this.lines([[n - t, i - e]], t, e, [1, 1], r || "S")
                : this.lines([[n - t, i - e]], t, e, [1, 1]).stroke();
            }),
            (_.__private__.lines = _.lines =
              function (t, e, n, i, r, o) {
                var a, s, l, c, d, u, p, h, f, b, m, g;
                if (
                  ("number" == typeof t && ((g = n), (n = e), (e = t), (t = g)),
                  (i = i || [1, 1]),
                  (o = o || !1),
                  isNaN(e) ||
                    isNaN(n) ||
                    !Array.isArray(t) ||
                    !Array.isArray(i) ||
                    !Qe(r) ||
                    "boolean" != typeof o)
                )
                  throw new Error("Invalid arguments passed to jsPDF.lines");
                for (
                  ln(e, n),
                    a = i[0],
                    s = i[1],
                    c = t.length,
                    b = e,
                    m = n,
                    l = 0;
                  l < c;
                  l++
                )
                  2 === (d = t[l]).length
                    ? ((b = d[0] * a + b), (m = d[1] * s + m), cn(b, m))
                    : ((u = d[0] * a + b),
                      (p = d[1] * s + m),
                      (h = d[2] * a + b),
                      (f = d[3] * s + m),
                      (b = d[4] * a + b),
                      (m = d[5] * s + m),
                      dn(u, p, h, f, b, m));
                return o && en(), rn(r), this;
              }),
            (_.path = function (t) {
              for (var e = 0; e < t.length; e++) {
                var n = t[e],
                  i = n.c;
                switch (n.op) {
                  case "m":
                    ln(i[0], i[1]);
                    break;
                  case "l":
                    cn(i[0], i[1]);
                    break;
                  case "c":
                    dn.apply(this, i);
                    break;
                  case "h":
                    en();
                }
              }
              return this;
            }),
            (_.__private__.rect = _.rect =
              function (t, e, n, i, r) {
                if (isNaN(t) || isNaN(e) || isNaN(n) || isNaN(i) || !Qe(r))
                  throw new Error("Invalid arguments passed to jsPDF.rect");
                return (
                  x === A.COMPAT && (i = -i),
                  ut([S(B(t)), S($(e)), S(B(n)), S(B(i)), "re"].join(" ")),
                  rn(r),
                  this
                );
              }),
            (_.__private__.triangle = _.triangle =
              function (t, e, n, i, r, o, a) {
                if (
                  isNaN(t) ||
                  isNaN(e) ||
                  isNaN(n) ||
                  isNaN(i) ||
                  isNaN(r) ||
                  isNaN(o) ||
                  !Qe(a)
                )
                  throw new Error("Invalid arguments passed to jsPDF.triangle");
                return (
                  this.lines(
                    [
                      [n - t, i - e],
                      [r - n, o - i],
                      [t - r, e - o],
                    ],
                    t,
                    e,
                    [1, 1],
                    a,
                    !0
                  ),
                  this
                );
              }),
            (_.__private__.roundedRect = _.roundedRect =
              function (t, e, n, i, r, o, a) {
                if (
                  isNaN(t) ||
                  isNaN(e) ||
                  isNaN(n) ||
                  isNaN(i) ||
                  isNaN(r) ||
                  isNaN(o) ||
                  !Qe(a)
                )
                  throw new Error(
                    "Invalid arguments passed to jsPDF.roundedRect"
                  );
                var s = (4 / 3) * (Math.SQRT2 - 1);
                return (
                  (r = Math.min(r, 0.5 * n)),
                  (o = Math.min(o, 0.5 * i)),
                  this.lines(
                    [
                      [n - 2 * r, 0],
                      [r * s, 0, r, o - o * s, r, o],
                      [0, i - 2 * o],
                      [0, o * s, -r * s, o, -r, o],
                      [2 * r - n, 0],
                      [-r * s, 0, -r, -o * s, -r, -o],
                      [0, 2 * o - i],
                      [0, -o * s, r * s, -o, r, -o],
                    ],
                    t + r,
                    e,
                    [1, 1],
                    a,
                    !0
                  ),
                  this
                );
              }),
            (_.__private__.ellipse = _.ellipse =
              function (t, e, n, i, r) {
                if (isNaN(t) || isNaN(e) || isNaN(n) || isNaN(i) || !Qe(r))
                  throw new Error("Invalid arguments passed to jsPDF.ellipse");
                var o = (4 / 3) * (Math.SQRT2 - 1) * n,
                  a = (4 / 3) * (Math.SQRT2 - 1) * i;
                return (
                  ln(t + n, e),
                  dn(t + n, e - a, t + o, e - i, t, e - i),
                  dn(t - o, e - i, t - n, e - a, t - n, e),
                  dn(t - n, e + a, t - o, e + i, t, e + i),
                  dn(t + o, e + i, t + n, e + a, t + n, e),
                  rn(r),
                  this
                );
              }),
            (_.__private__.circle = _.circle =
              function (t, e, n, i) {
                if (isNaN(t) || isNaN(e) || isNaN(n) || !Qe(i))
                  throw new Error("Invalid arguments passed to jsPDF.circle");
                return this.ellipse(t, e, n, n, i);
              }),
            (_.setFont = function (t, e, n) {
              return (
                n && (e = k(e, n)),
                (xt = Re(t, e, { disableWarning: !1 })),
                this
              );
            });
          var un =
            (_.__private__.getFont =
            _.getFont =
              function () {
                return Tt[Re.apply(_, arguments)];
              });
          (_.__private__.getFontList = _.getFontList =
            function () {
              var t,
                e,
                n = {};
              for (t in Dt)
                if (Dt.hasOwnProperty(t))
                  for (e in ((n[t] = []), Dt[t]))
                    Dt[t].hasOwnProperty(e) && n[t].push(e);
              return n;
            }),
            (_.addFont = function (t, e, n, i, r) {
              var o = [
                "StandardEncoding",
                "MacRomanEncoding",
                "Identity-H",
                "WinAnsiEncoding",
              ];
              return (
                arguments[3] && -1 !== o.indexOf(arguments[3])
                  ? (r = arguments[3])
                  : arguments[3] &&
                    -1 == o.indexOf(arguments[3]) &&
                    (n = k(n, i)),
                (r = r || "Identity-H"),
                Ce.call(this, t, e, n, r)
              );
            });
          var pn,
            hn = t.lineWidth || 0.200025,
            fn =
              (_.__private__.getLineWidth =
              _.getLineWidth =
                function () {
                  return hn;
                }),
            bn =
              (_.__private__.setLineWidth =
              _.setLineWidth =
                function (t) {
                  return (hn = t), ut(S(B(t)) + " w"), this;
                });
          _.__private__.setLineDash =
            W.API.setLineDash =
            W.API.setLineDashPattern =
              function (t, e) {
                if (
                  ((t = t || []), (e = e || 0), isNaN(e) || !Array.isArray(t))
                )
                  throw new Error(
                    "Invalid arguments passed to jsPDF.setLineDash"
                  );
                return (
                  (t = t
                    .map(function (t) {
                      return S(B(t));
                    })
                    .join(" ")),
                  (e = S(B(e))),
                  ut("[" + t + "] " + e + " d"),
                  this
                );
              };
          var mn =
            (_.__private__.getLineHeight =
            _.getLineHeight =
              function () {
                return bt * pn;
              });
          _.__private__.getLineHeight = _.getLineHeight = function () {
            return bt * pn;
          };
          var gn =
              (_.__private__.setLineHeightFactor =
              _.setLineHeightFactor =
                function (t) {
                  return "number" == typeof (t = t || 1.15) && (pn = t), this;
                }),
            vn =
              (_.__private__.getLineHeightFactor =
              _.getLineHeightFactor =
                function () {
                  return pn;
                });
          gn(t.lineHeight);
          var _n = (_.__private__.getHorizontalCoordinate = function (t) {
              return B(t);
            }),
            yn = (_.__private__.getVerticalCoordinate = function (t) {
              return x === A.ADVANCED
                ? t
                : Wt[J].mediaBox.topRightY - Wt[J].mediaBox.bottomLeftY - B(t);
            }),
            Mn =
              (_.__private__.getHorizontalCoordinateString =
              _.getHorizontalCoordinateString =
                function (t) {
                  return S(_n(t));
                }),
            On =
              (_.__private__.getVerticalCoordinateString =
              _.getVerticalCoordinateString =
                function (t) {
                  return S(yn(t));
                }),
            wn = t.strokeColor || "0 G";
          (_.__private__.getStrokeColor = _.getDrawColor =
            function () {
              return ee(wn);
            }),
            (_.__private__.setStrokeColor = _.setDrawColor =
              function (t, e, n, i) {
                return (
                  (wn = ne({
                    ch1: t,
                    ch2: e,
                    ch3: n,
                    ch4: i,
                    pdfColorType: "draw",
                    precision: 2,
                  })),
                  ut(wn),
                  this
                );
              });
          var An = t.fillColor || "0 g";
          (_.__private__.getFillColor = _.getFillColor =
            function () {
              return ee(An);
            }),
            (_.__private__.setFillColor = _.setFillColor =
              function (t, e, n, i) {
                return (
                  (An = ne({
                    ch1: t,
                    ch2: e,
                    ch3: n,
                    ch4: i,
                    pdfColorType: "fill",
                    precision: 2,
                  })),
                  ut(An),
                  this
                );
              });
          var xn = t.textColor || "0 g",
            zn =
              (_.__private__.getTextColor =
              _.getTextColor =
                function () {
                  return ee(xn);
                });
          _.__private__.setTextColor = _.setTextColor = function (t, e, n, i) {
            return (
              (xn = ne({
                ch1: t,
                ch2: e,
                ch3: n,
                ch4: i,
                pdfColorType: "text",
                precision: 3,
              })),
              this
            );
          };
          var Cn = t.charSpace,
            kn =
              (_.__private__.getCharSpace =
              _.getCharSpace =
                function () {
                  return parseFloat(Cn || 0);
                });
          _.__private__.setCharSpace = _.setCharSpace = function (t) {
            if (isNaN(t))
              throw new Error("Invalid argument passed to jsPDF.setCharSpace");
            return (Cn = t), this;
          };
          var Sn = 0;
          (_.CapJoinStyles = {
            0: 0,
            butt: 0,
            but: 0,
            miter: 0,
            1: 1,
            round: 1,
            rounded: 1,
            circle: 1,
            2: 2,
            projecting: 2,
            project: 2,
            square: 2,
            bevel: 2,
          }),
            (_.__private__.setLineCap = _.setLineCap =
              function (t) {
                var e = _.CapJoinStyles[t];
                if (void 0 === e)
                  throw new Error(
                    "Line cap style of '" +
                      t +
                      "' is not recognized. See or extend .CapJoinStyles property for valid styles"
                  );
                return (Sn = e), ut(e + " J"), this;
              });
          var Tn = 0;
          (_.__private__.setLineJoin = _.setLineJoin =
            function (t) {
              var e = _.CapJoinStyles[t];
              if (void 0 === e)
                throw new Error(
                  "Line join style of '" +
                    t +
                    "' is not recognized. See or extend .CapJoinStyles property for valid styles"
                );
              return (Tn = e), ut(e + " j"), this;
            }),
            (_.__private__.setLineMiterLimit =
              _.__private__.setMiterLimit =
              _.setLineMiterLimit =
              _.setMiterLimit =
                function (t) {
                  if (((t = t || 0), isNaN(t)))
                    throw new Error(
                      "Invalid argument passed to jsPDF.setLineMiterLimit"
                    );
                  return ut(S(B(t)) + " M"), this;
                }),
            (_.GState = j),
            (_.setGState = function (t) {
              (t = "string" == typeof t ? jt[Pt[t]] : Dn(null, t)).equals(Rt) ||
                (ut("/" + t.id + " gs"), (Rt = t));
            });
          var Dn = function (t, e) {
            if (!t || !Pt[t]) {
              var n = !1;
              for (var i in jt)
                if (jt.hasOwnProperty(i) && jt[i].equals(e)) {
                  n = !0;
                  break;
                }
              if (n) e = jt[i];
              else {
                var r = "GS" + (Object.keys(jt).length + 1).toString(10);
                (jt[r] = e), (e.id = r);
              }
              return t && (Pt[t] = e.id), Nt.publish("addGState", e), e;
            }
          };
          (_.addGState = function (t, e) {
            return Dn(t, e), this;
          }),
            (_.saveGraphicsState = function () {
              return ut("q"), Lt.push({ key: xt, size: bt, color: xn }), this;
            }),
            (_.restoreGraphicsState = function () {
              ut("Q");
              var t = Lt.pop();
              return (
                (xt = t.key), (bt = t.size), (xn = t.color), (Rt = null), this
              );
            }),
            (_.setCurrentTransformationMatrix = function (t) {
              return ut(t.toString() + " cm"), this;
            }),
            (_.comment = function (t) {
              return ut("#" + t), this;
            });
          var Ln = function (t, e) {
              var n = t || 0;
              Object.defineProperty(this, "x", {
                enumerable: !0,
                get: function () {
                  return n;
                },
                set: function (t) {
                  isNaN(t) || (n = parseFloat(t));
                },
              });
              var i = e || 0;
              Object.defineProperty(this, "y", {
                enumerable: !0,
                get: function () {
                  return i;
                },
                set: function (t) {
                  isNaN(t) || (i = parseFloat(t));
                },
              });
              var r = "pt";
              return (
                Object.defineProperty(this, "type", {
                  enumerable: !0,
                  get: function () {
                    return r;
                  },
                  set: function (t) {
                    r = t.toString();
                  },
                }),
                this
              );
            },
            qn = function (t, e, n, i) {
              Ln.call(this, t, e), (this.type = "rect");
              var r = n || 0;
              Object.defineProperty(this, "w", {
                enumerable: !0,
                get: function () {
                  return r;
                },
                set: function (t) {
                  isNaN(t) || (r = parseFloat(t));
                },
              });
              var o = i || 0;
              return (
                Object.defineProperty(this, "h", {
                  enumerable: !0,
                  get: function () {
                    return o;
                  },
                  set: function (t) {
                    isNaN(t) || (o = parseFloat(t));
                  },
                }),
                this
              );
            },
            En = function () {
              (this.page = It),
                (this.currentPage = J),
                (this.pages = at.slice(0)),
                (this.pagesContext = Wt.slice(0)),
                (this.x = Ct),
                (this.y = kt),
                (this.matrix = St),
                (this.width = In(J)),
                (this.height = Nn(J)),
                (this.outputDestination = lt),
                (this.id = ""),
                (this.objectNumber = -1);
            };
          En.prototype.restore = function () {
            (It = this.page),
              (J = this.currentPage),
              (Wt = this.pagesContext),
              (at = this.pages),
              (Ct = this.x),
              (kt = this.y),
              (St = this.matrix),
              Wn(J, this.width),
              Bn(J, this.height),
              (lt = this.outputDestination);
          };
          var jn = function (t, e, n, i, r) {
              Ht.push(new En()),
                (It = J = 0),
                (at = []),
                (Ct = t),
                (kt = e),
                (St = r),
                Le([n, i]);
            },
            Pn = function (t) {
              if ($t[t]) Ht.pop().restore();
              else {
                var e = new En(),
                  n = "Xo" + (Object.keys(Ft).length + 1).toString(10);
                (e.id = n),
                  ($t[t] = n),
                  (Ft[n] = e),
                  Nt.publish("addFormObject", e),
                  Ht.pop().restore();
              }
            };
          for (var Rn in ((_.beginFormObject = function (t, e, n, i, r) {
            return jn(t, e, n, i, r), this;
          }),
          (_.endFormObject = function (t) {
            return Pn(t), this;
          }),
          (_.doFormObject = function (t, e) {
            var n = Ft[$t[t]];
            return (
              ut("q"),
              ut(e.toString() + " cm"),
              ut("/" + n.id + " Do"),
              ut("Q"),
              this
            );
          }),
          (_.getFormObject = function (t) {
            var e = Ft[$t[t]];
            return {
              x: e.x,
              y: e.y,
              width: e.width,
              height: e.height,
              matrix: e.matrix,
            };
          }),
          (_.save = function (t, e) {
            return (
              (t = t || "generated.pdf"),
              ((e = e || {}).returnPromise = e.returnPromise || !1),
              !1 === e.returnPromise
                ? (f(He($e()), t),
                  "function" == typeof f.unload &&
                    a.setTimeout &&
                    setTimeout(f.unload, 911),
                  this)
                : new Promise(function (e, n) {
                    try {
                      var i = f(He($e()), t);
                      "function" == typeof f.unload &&
                        a.setTimeout &&
                        setTimeout(f.unload, 911),
                        e(i);
                    } catch (t) {
                      n(t.message);
                    }
                  })
            );
          }),
          W.API))
            W.API.hasOwnProperty(Rn) &&
              ("events" === Rn && W.API.events.length
                ? (function (t, e) {
                    var n, i, r;
                    for (r = e.length - 1; -1 !== r; r--)
                      (n = e[r][0]),
                        (i = e[r][1]),
                        t.subscribe.apply(
                          t,
                          [n].concat("function" == typeof i ? [i] : i)
                        );
                  })(Nt, W.API.events)
                : (_[Rn] = W.API[Rn]));
          var In = (_.getPageWidth = function (t) {
              return (
                (Wt[(t = t || J)].mediaBox.topRightX -
                  Wt[t].mediaBox.bottomLeftX) /
                zt
              );
            }),
            Wn = (_.setPageWidth = function (t, e) {
              Wt[t].mediaBox.topRightX = e * zt + Wt[t].mediaBox.bottomLeftX;
            }),
            Nn = (_.getPageHeight = function (t) {
              return (
                (Wt[(t = t || J)].mediaBox.topRightY -
                  Wt[t].mediaBox.bottomLeftY) /
                zt
              );
            }),
            Bn = (_.setPageHeight = function (t, e) {
              Wt[t].mediaBox.topRightY = e * zt + Wt[t].mediaBox.bottomLeftY;
            });
          return (
            (_.internal = {
              pdfEscape: De,
              getStyle: tn,
              getFont: un,
              getFontSize: gt,
              getCharSpace: kn,
              getTextColor: zn,
              getLineHeight: mn,
              getLineHeightFactor: vn,
              getLineWidth: fn,
              write: pt,
              getHorizontalCoordinate: _n,
              getVerticalCoordinate: yn,
              getCoordinateString: Mn,
              getVerticalCoordinateString: On,
              collections: {},
              newObject: Gt,
              newAdditionalObject: Jt,
              newObjectDeferred: Kt,
              newObjectDeferredBegin: Zt,
              getFilters: ie,
              putStream: re,
              events: Nt,
              scaleFactor: zt,
              pageSize: {
                getWidth: function () {
                  return In(J);
                },
                setWidth: function (t) {
                  Wn(J, t);
                },
                getHeight: function () {
                  return Nn(J);
                },
                setHeight: function (t) {
                  Bn(J, t);
                },
              },
              encryptionOptions: m,
              encryption: Xe,
              getEncryptor: Ve,
              output: Ye,
              getNumberOfPages: Pe,
              pages: at,
              out: ut,
              f2: P,
              f3: N,
              getPageInfo: Ge,
              getPageInfoByObjId: Ke,
              getCurrentPageInfo: Ze,
              getPDFVersion: M,
              Point: Ln,
              Rectangle: qn,
              Matrix: Yt,
              hasHotfix: Ue,
            }),
            Object.defineProperty(_.internal.pageSize, "width", {
              get: function () {
                return In(J);
              },
              set: function (t) {
                Wn(J, t);
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(_.internal.pageSize, "height", {
              get: function () {
                return Nn(J);
              },
              set: function (t) {
                Bn(J, t);
              },
              enumerable: !0,
              configurable: !0,
            }),
            ke.call(_, ft),
            (xt = "F1"),
            qe(o, n),
            Nt.publish("initialized"),
            _
          );
        }
        (L.prototype.lsbFirstWord = function (t) {
          return String.fromCharCode(
            (t >> 0) & 255,
            (t >> 8) & 255,
            (t >> 16) & 255,
            (t >> 24) & 255
          );
        }),
          (L.prototype.toHexString = function (t) {
            return t
              .split("")
              .map(function (t) {
                return ("0" + (255 & t.charCodeAt(0)).toString(16)).slice(-2);
              })
              .join("");
          }),
          (L.prototype.hexToBytes = function (t) {
            for (var e = [], n = 0; n < t.length; n += 2)
              e.push(String.fromCharCode(parseInt(t.substr(n, 2), 16)));
            return e.join("");
          }),
          (L.prototype.processOwnerPassword = function (t, e) {
            return T(C(e).substr(0, 5), t);
          }),
          (L.prototype.encryptor = function (t, e) {
            var n = C(
              this.encryptionKey +
                String.fromCharCode(
                  255 & t,
                  (t >> 8) & 255,
                  (t >> 16) & 255,
                  255 & e,
                  (e >> 8) & 255
                )
            ).substr(0, 10);
            return function (t) {
              return T(n, t);
            };
          }),
          (j.prototype.equals = function (t) {
            var e,
              n = "id,objectNumber,equals";
            if (!t || r()(t) !== r()(this)) return !1;
            var i = 0;
            for (e in this)
              if (!(n.indexOf(e) >= 0)) {
                if (this.hasOwnProperty(e) && !t.hasOwnProperty(e)) return !1;
                if (this[e] !== t[e]) return !1;
                i++;
              }
            for (e in t) t.hasOwnProperty(e) && n.indexOf(e) < 0 && i--;
            return 0 === i;
          }),
          (W.API = { events: [] }),
          (W.version = "2.5.2");
        var N = W.API,
          B = 1,
          F = function (t) {
            return t
              .replace(/\\/g, "\\\\")
              .replace(/\(/g, "\\(")
              .replace(/\)/g, "\\)");
          },
          $ = function (t) {
            return t
              .replace(/\\\\/g, "\\")
              .replace(/\\\(/g, "(")
              .replace(/\\\)/g, ")");
          },
          H = function (t) {
            return t.toFixed(2);
          },
          Y = function (t) {
            return t.toFixed(5);
          };
        N.__acroform__ = {};
        var U = function (t, e) {
            (t.prototype = Object.create(e.prototype)),
              (t.prototype.constructor = t);
          },
          X = function (t) {
            return t * B;
          },
          V = function (t) {
            var e = new dt(),
              n = At.internal.getHeight(t) || 0,
              i = At.internal.getWidth(t) || 0;
            return (e.BBox = [0, 0, Number(H(i)), Number(H(n))]), e;
          },
          G = (N.__acroform__.setBit = function (t, e) {
            if (((t = t || 0), (e = e || 0), isNaN(t) || isNaN(e)))
              throw new Error(
                "Invalid arguments passed to jsPDF.API.__acroform__.setBit"
              );
            return t | (1 << e);
          }),
          K = (N.__acroform__.clearBit = function (t, e) {
            if (((t = t || 0), (e = e || 0), isNaN(t) || isNaN(e)))
              throw new Error(
                "Invalid arguments passed to jsPDF.API.__acroform__.clearBit"
              );
            return t & ~(1 << e);
          }),
          Z = (N.__acroform__.getBit = function (t, e) {
            if (isNaN(t) || isNaN(e))
              throw new Error(
                "Invalid arguments passed to jsPDF.API.__acroform__.getBit"
              );
            return 0 == (t & (1 << e)) ? 0 : 1;
          }),
          J = (N.__acroform__.getBitForPdf = function (t, e) {
            if (isNaN(t) || isNaN(e))
              throw new Error(
                "Invalid arguments passed to jsPDF.API.__acroform__.getBitForPdf"
              );
            return Z(t, e - 1);
          }),
          Q = (N.__acroform__.setBitForPdf = function (t, e) {
            if (isNaN(t) || isNaN(e))
              throw new Error(
                "Invalid arguments passed to jsPDF.API.__acroform__.setBitForPdf"
              );
            return G(t, e - 1);
          }),
          tt = (N.__acroform__.clearBitForPdf = function (t, e) {
            if (isNaN(t) || isNaN(e))
              throw new Error(
                "Invalid arguments passed to jsPDF.API.__acroform__.clearBitForPdf"
              );
            return K(t, e - 1);
          }),
          et = (N.__acroform__.calculateCoordinates = function (t, e) {
            var n = e.internal.getHorizontalCoordinate,
              i = e.internal.getVerticalCoordinate,
              r = t[0],
              o = t[1],
              a = t[2],
              s = t[3],
              l = {};
            return (
              (l.lowerLeft_X = n(r) || 0),
              (l.lowerLeft_Y = i(o + s) || 0),
              (l.upperRight_X = n(r + a) || 0),
              (l.upperRight_Y = i(o) || 0),
              [
                Number(H(l.lowerLeft_X)),
                Number(H(l.lowerLeft_Y)),
                Number(H(l.upperRight_X)),
                Number(H(l.upperRight_Y)),
              ]
            );
          }),
          nt = function (t) {
            if (t.appearanceStreamContent) return t.appearanceStreamContent;
            if (t.V || t.DV) {
              var e = [],
                n = t._V || t.DV,
                i = it(t, n),
                r = t.scope.internal.getFont(t.fontName, t.fontStyle).id;
              e.push("/Tx BMC"),
                e.push("q"),
                e.push("BT"),
                e.push(t.scope.__private__.encodeColorString(t.color)),
                e.push("/" + r + " " + H(i.fontSize) + " Tf"),
                e.push("1 0 0 1 0 0 Tm"),
                e.push(i.text),
                e.push("ET"),
                e.push("Q"),
                e.push("EMC");
              var o = V(t);
              return (o.scope = t.scope), (o.stream = e.join("\n")), o;
            }
          },
          it = function (t, e) {
            var n = 0 === t.fontSize ? t.maxFontSize : t.fontSize,
              i = { text: "", fontSize: "" },
              r = (e =
                ")" ==
                (e = "(" == e.substr(0, 1) ? e.substr(1) : e).substr(
                  e.length - 1
                )
                  ? e.substr(0, e.length - 1)
                  : e).split(" ");
            r = t.multiline
              ? r.map(function (t) {
                  return t.split("\n");
                })
              : r.map(function (t) {
                  return [t];
                });
            var o = n,
              a = At.internal.getHeight(t) || 0;
            a = a < 0 ? -a : a;
            var s = At.internal.getWidth(t) || 0;
            s = s < 0 ? -s : s;
            var l = function (e, n, i) {
              if (e + 1 < r.length) {
                var o = n + " " + r[e + 1][0];
                return rt(o, t, i).width <= s - 4;
              }
              return !1;
            };
            o++;
            t: for (; o > 0; ) {
              (e = ""), o--;
              var c,
                d,
                u = rt("3", t, o).height,
                p = t.multiline ? a - o : (a - u) / 2,
                h = (p += 2),
                f = 0,
                b = 0,
                m = 0;
              if (o <= 0) {
                (e = "(...) Tj\n"),
                  (e +=
                    "% Width of Text: " +
                    rt(e, t, (o = 12)).width +
                    ", FieldWidth:" +
                    s +
                    "\n");
                break;
              }
              for (var g = "", v = 0, _ = 0; _ < r.length; _++)
                if (r.hasOwnProperty(_)) {
                  var y = !1;
                  if (1 !== r[_].length && m !== r[_].length - 1) {
                    if ((u + 2) * (v + 2) + 2 > a) continue t;
                    (g += r[_][m]), (y = !0), (b = _), _--;
                  } else {
                    g =
                      " " == (g += r[_][m] + " ").substr(g.length - 1)
                        ? g.substr(0, g.length - 1)
                        : g;
                    var M = parseInt(_),
                      O = l(M, g, o),
                      w = _ >= r.length - 1;
                    if (O && !w) {
                      (g += " "), (m = 0);
                      continue;
                    }
                    if (O || w) {
                      if (w) b = M;
                      else if (t.multiline && (u + 2) * (v + 2) + 2 > a)
                        continue t;
                    } else {
                      if (!t.multiline) continue t;
                      if ((u + 2) * (v + 2) + 2 > a) continue t;
                      b = M;
                    }
                  }
                  for (var A = "", x = f; x <= b; x++) {
                    var z = r[x];
                    if (t.multiline) {
                      if (x === b) {
                        (A += z[m] + " "), (m = (m + 1) % z.length);
                        continue;
                      }
                      if (x === f) {
                        A += z[z.length - 1] + " ";
                        continue;
                      }
                    }
                    A += z[0] + " ";
                  }
                  switch (
                    ((A =
                      " " == A.substr(A.length - 1)
                        ? A.substr(0, A.length - 1)
                        : A),
                    (d = rt(A, t, o).width),
                    t.textAlign)
                  ) {
                    case "right":
                      c = s - d - 2;
                      break;
                    case "center":
                      c = (s - d) / 2;
                      break;
                    case "left":
                    default:
                      c = 2;
                  }
                  (e += H(c) + " " + H(h) + " Td\n"),
                    (e += "(" + F(A) + ") Tj\n"),
                    (e += -H(c) + " 0 Td\n"),
                    (h = -(o + 2)),
                    (d = 0),
                    (f = y ? b : b + 1),
                    v++,
                    (g = "");
                }
              break;
            }
            return (i.text = e), (i.fontSize = o), i;
          },
          rt = function (t, e, n) {
            var i = e.scope.internal.getFont(e.fontName, e.fontStyle),
              r =
                e.scope.getStringUnitWidth(t, {
                  font: i,
                  fontSize: parseFloat(n),
                  charSpace: 0,
                }) * parseFloat(n);
            return {
              height:
                e.scope.getStringUnitWidth("3", {
                  font: i,
                  fontSize: parseFloat(n),
                  charSpace: 0,
                }) *
                parseFloat(n) *
                1.5,
              width: r,
            };
          },
          ot = {
            fields: [],
            xForms: [],
            acroFormDictionaryRoot: null,
            printedOut: !1,
            internal: null,
            isInitialized: !1,
          },
          at = function (t, e) {
            var n = { type: "reference", object: t };
            void 0 ===
              e.internal
                .getPageInfo(t.page)
                .pageContext.annotations.find(function (t) {
                  return t.type === n.type && t.object === n.object;
                }) &&
              e.internal.getPageInfo(t.page).pageContext.annotations.push(n);
          },
          st = (N.__acroform__.arrayToPdfArray = function (t, e, n) {
            var i = function (t) {
              return t;
            };
            if (Array.isArray(t)) {
              for (var o = "[", a = 0; a < t.length; a++)
                switch ((0 !== a && (o += " "), r()(t[a]))) {
                  case "boolean":
                  case "number":
                  case "object":
                    o += t[a].toString();
                    break;
                  case "string":
                    "/" !== t[a].substr(0, 1)
                      ? (void 0 !== e && n && (i = n.internal.getEncryptor(e)),
                        (o += "(" + F(i(t[a].toString())) + ")"))
                      : (o += t[a].toString());
                }
              return o + "]";
            }
            throw new Error(
              "Invalid argument passed to jsPDF.__acroform__.arrayToPdfArray"
            );
          }),
          lt = function (t, e, n) {
            var i = function (t) {
              return t;
            };
            return (
              void 0 !== e && n && (i = n.internal.getEncryptor(e)),
              (t = t || "").toString(),
              "(" + F(i(t)) + ")"
            );
          },
          ct = function () {
            (this._objId = void 0),
              (this._scope = void 0),
              Object.defineProperty(this, "objId", {
                get: function () {
                  if (void 0 === this._objId) {
                    if (void 0 === this.scope) return;
                    this._objId = this.scope.internal.newObjectDeferred();
                  }
                  return this._objId;
                },
                set: function (t) {
                  this._objId = t;
                },
              }),
              Object.defineProperty(this, "scope", {
                value: this._scope,
                writable: !0,
              });
          };
        (ct.prototype.toString = function () {
          return this.objId + " 0 R";
        }),
          (ct.prototype.putStream = function () {
            var t = this.getKeyValueListForStream();
            this.scope.internal.putStream({
              data: this.stream,
              additionalKeyValues: t,
              objectId: this.objId,
            }),
              this.scope.internal.out("endobj");
          }),
          (ct.prototype.getKeyValueListForStream = function () {
            var t = [],
              e = Object.getOwnPropertyNames(this).filter(function (t) {
                return (
                  "content" != t &&
                  "appearanceStreamContent" != t &&
                  "scope" != t &&
                  "objId" != t &&
                  "_" != t.substring(0, 1)
                );
              });
            for (var n in e)
              if (
                !1 === Object.getOwnPropertyDescriptor(this, e[n]).configurable
              ) {
                var i = e[n],
                  r = this[i];
                r &&
                  (Array.isArray(r)
                    ? t.push({ key: i, value: st(r, this.objId, this.scope) })
                    : r instanceof ct
                    ? ((r.scope = this.scope),
                      t.push({ key: i, value: r.objId + " 0 R" }))
                    : "function" != typeof r && t.push({ key: i, value: r }));
              }
            return t;
          });
        var dt = function () {
          ct.call(this),
            Object.defineProperty(this, "Type", {
              value: "/XObject",
              configurable: !1,
              writable: !0,
            }),
            Object.defineProperty(this, "Subtype", {
              value: "/Form",
              configurable: !1,
              writable: !0,
            }),
            Object.defineProperty(this, "FormType", {
              value: 1,
              configurable: !1,
              writable: !0,
            });
          var t,
            e = [];
          Object.defineProperty(this, "BBox", {
            configurable: !1,
            get: function () {
              return e;
            },
            set: function (t) {
              e = t;
            },
          }),
            Object.defineProperty(this, "Resources", {
              value: "2 0 R",
              configurable: !1,
              writable: !0,
            }),
            Object.defineProperty(this, "stream", {
              enumerable: !1,
              configurable: !0,
              set: function (e) {
                t = e.trim();
              },
              get: function () {
                return t || null;
              },
            });
        };
        U(dt, ct);
        var ut = function () {
          ct.call(this);
          var t,
            e = [];
          Object.defineProperty(this, "Kids", {
            enumerable: !1,
            configurable: !0,
            get: function () {
              return e.length > 0 ? e : void 0;
            },
          }),
            Object.defineProperty(this, "Fields", {
              enumerable: !1,
              configurable: !1,
              get: function () {
                return e;
              },
            }),
            Object.defineProperty(this, "DA", {
              enumerable: !1,
              configurable: !1,
              get: function () {
                if (t) {
                  var e = function (t) {
                    return t;
                  };
                  return (
                    this.scope &&
                      (e = this.scope.internal.getEncryptor(this.objId)),
                    "(" + F(e(t)) + ")"
                  );
                }
              },
              set: function (e) {
                t = e;
              },
            });
        };
        U(ut, ct);
        var pt = function t() {
          ct.call(this);
          var e = 4;
          Object.defineProperty(this, "F", {
            enumerable: !1,
            configurable: !1,
            get: function () {
              return e;
            },
            set: function (t) {
              if (isNaN(t))
                throw new Error(
                  'Invalid value "' + t + '" for attribute F supplied.'
                );
              e = t;
            },
          }),
            Object.defineProperty(this, "showWhenPrinted", {
              enumerable: !0,
              configurable: !0,
              get: function () {
                return Boolean(J(e, 3));
              },
              set: function (t) {
                !0 === Boolean(t) ? (this.F = Q(e, 3)) : (this.F = tt(e, 3));
              },
            });
          var n = 0;
          Object.defineProperty(this, "Ff", {
            enumerable: !1,
            configurable: !1,
            get: function () {
              return n;
            },
            set: function (t) {
              if (isNaN(t))
                throw new Error(
                  'Invalid value "' + t + '" for attribute Ff supplied.'
                );
              n = t;
            },
          });
          var i = [];
          Object.defineProperty(this, "Rect", {
            enumerable: !1,
            configurable: !1,
            get: function () {
              if (0 !== i.length) return i;
            },
            set: function (t) {
              i = void 0 !== t ? t : [];
            },
          }),
            Object.defineProperty(this, "x", {
              enumerable: !0,
              configurable: !0,
              get: function () {
                return !i || isNaN(i[0]) ? 0 : i[0];
              },
              set: function (t) {
                i[0] = t;
              },
            }),
            Object.defineProperty(this, "y", {
              enumerable: !0,
              configurable: !0,
              get: function () {
                return !i || isNaN(i[1]) ? 0 : i[1];
              },
              set: function (t) {
                i[1] = t;
              },
            }),
            Object.defineProperty(this, "width", {
              enumerable: !0,
              configurable: !0,
              get: function () {
                return !i || isNaN(i[2]) ? 0 : i[2];
              },
              set: function (t) {
                i[2] = t;
              },
            }),
            Object.defineProperty(this, "height", {
              enumerable: !0,
              configurable: !0,
              get: function () {
                return !i || isNaN(i[3]) ? 0 : i[3];
              },
              set: function (t) {
                i[3] = t;
              },
            });
          var r = "";
          Object.defineProperty(this, "FT", {
            enumerable: !0,
            configurable: !1,
            get: function () {
              return r;
            },
            set: function (t) {
              switch (t) {
                case "/Btn":
                case "/Tx":
                case "/Ch":
                case "/Sig":
                  r = t;
                  break;
                default:
                  throw new Error(
                    'Invalid value "' + t + '" for attribute FT supplied.'
                  );
              }
            },
          });
          var o = null;
          Object.defineProperty(this, "T", {
            enumerable: !0,
            configurable: !1,
            get: function () {
              if (!o || o.length < 1) {
                if (this instanceof yt) return;
                o = "FieldObject" + t.FieldNum++;
              }
              var e = function (t) {
                return t;
              };
              return (
                this.scope &&
                  (e = this.scope.internal.getEncryptor(this.objId)),
                "(" + F(e(o)) + ")"
              );
            },
            set: function (t) {
              o = t.toString();
            },
          }),
            Object.defineProperty(this, "fieldName", {
              configurable: !0,
              enumerable: !0,
              get: function () {
                return o;
              },
              set: function (t) {
                o = t;
              },
            });
          var a = "helvetica";
          Object.defineProperty(this, "fontName", {
            enumerable: !0,
            configurable: !0,
            get: function () {
              return a;
            },
            set: function (t) {
              a = t;
            },
          });
          var s = "normal";
          Object.defineProperty(this, "fontStyle", {
            enumerable: !0,
            configurable: !0,
            get: function () {
              return s;
            },
            set: function (t) {
              s = t;
            },
          });
          var l = 0;
          Object.defineProperty(this, "fontSize", {
            enumerable: !0,
            configurable: !0,
            get: function () {
              return l;
            },
            set: function (t) {
              l = t;
            },
          });
          var c = void 0;
          Object.defineProperty(this, "maxFontSize", {
            enumerable: !0,
            configurable: !0,
            get: function () {
              return void 0 === c ? 50 / B : c;
            },
            set: function (t) {
              c = t;
            },
          });
          var d = "black";
          Object.defineProperty(this, "color", {
            enumerable: !0,
            configurable: !0,
            get: function () {
              return d;
            },
            set: function (t) {
              d = t;
            },
          });
          var u = "/F1 0 Tf 0 g";
          Object.defineProperty(this, "DA", {
            enumerable: !0,
            configurable: !1,
            get: function () {
              if (!(!u || this instanceof yt || this instanceof Ot))
                return lt(u, this.objId, this.scope);
            },
            set: function (t) {
              (t = t.toString()), (u = t);
            },
          });
          var p = null;
          Object.defineProperty(this, "DV", {
            enumerable: !1,
            configurable: !1,
            get: function () {
              if (p)
                return this instanceof gt == 0
                  ? lt(p, this.objId, this.scope)
                  : p;
            },
            set: function (t) {
              (t = t.toString()),
                (p =
                  this instanceof gt == 0
                    ? "(" === t.substr(0, 1)
                      ? $(t.substr(1, t.length - 2))
                      : $(t)
                    : t);
            },
          }),
            Object.defineProperty(this, "defaultValue", {
              enumerable: !0,
              configurable: !0,
              get: function () {
                return this instanceof gt == 1
                  ? $(p.substr(1, p.length - 1))
                  : p;
              },
              set: function (t) {
                (t = t.toString()), (p = this instanceof gt == 1 ? "/" + t : t);
              },
            });
          var h = null;
          Object.defineProperty(this, "_V", {
            enumerable: !1,
            configurable: !1,
            get: function () {
              if (h) return h;
            },
            set: function (t) {
              this.V = t;
            },
          }),
            Object.defineProperty(this, "V", {
              enumerable: !1,
              configurable: !1,
              get: function () {
                if (h)
                  return this instanceof gt == 0
                    ? lt(h, this.objId, this.scope)
                    : h;
              },
              set: function (t) {
                (t = t.toString()),
                  (h =
                    this instanceof gt == 0
                      ? "(" === t.substr(0, 1)
                        ? $(t.substr(1, t.length - 2))
                        : $(t)
                      : t);
              },
            }),
            Object.defineProperty(this, "value", {
              enumerable: !0,
              configurable: !0,
              get: function () {
                return this instanceof gt == 1
                  ? $(h.substr(1, h.length - 1))
                  : h;
              },
              set: function (t) {
                (t = t.toString()), (h = this instanceof gt == 1 ? "/" + t : t);
              },
            }),
            Object.defineProperty(this, "hasAnnotation", {
              enumerable: !0,
              configurable: !0,
              get: function () {
                return this.Rect;
              },
            }),
            Object.defineProperty(this, "Type", {
              enumerable: !0,
              configurable: !1,
              get: function () {
                return this.hasAnnotation ? "/Annot" : null;
              },
            }),
            Object.defineProperty(this, "Subtype", {
              enumerable: !0,
              configurable: !1,
              get: function () {
                return this.hasAnnotation ? "/Widget" : null;
              },
            });
          var f,
            b = !1;
          Object.defineProperty(this, "hasAppearanceStream", {
            enumerable: !0,
            configurable: !0,
            get: function () {
              return b;
            },
            set: function (t) {
              (t = Boolean(t)), (b = t);
            },
          }),
            Object.defineProperty(this, "page", {
              enumerable: !0,
              configurable: !0,
              get: function () {
                if (f) return f;
              },
              set: function (t) {
                f = t;
              },
            }),
            Object.defineProperty(this, "readOnly", {
              enumerable: !0,
              configurable: !0,
              get: function () {
                return Boolean(J(this.Ff, 1));
              },
              set: function (t) {
                !0 === Boolean(t)
                  ? (this.Ff = Q(this.Ff, 1))
                  : (this.Ff = tt(this.Ff, 1));
              },
            }),
            Object.defineProperty(this, "required", {
              enumerable: !0,
              configurable: !0,
              get: function () {
                return Boolean(J(this.Ff, 2));
              },
              set: function (t) {
                !0 === Boolean(t)
                  ? (this.Ff = Q(this.Ff, 2))
                  : (this.Ff = tt(this.Ff, 2));
              },
            }),
            Object.defineProperty(this, "noExport", {
              enumerable: !0,
              configurable: !0,
              get: function () {
                return Boolean(J(this.Ff, 3));
              },
              set: function (t) {
                !0 === Boolean(t)
                  ? (this.Ff = Q(this.Ff, 3))
                  : (this.Ff = tt(this.Ff, 3));
              },
            });
          var m = null;
          Object.defineProperty(this, "Q", {
            enumerable: !0,
            configurable: !1,
            get: function () {
              if (null !== m) return m;
            },
            set: function (t) {
              if (-1 === [0, 1, 2].indexOf(t))
                throw new Error(
                  'Invalid value "' + t + '" for attribute Q supplied.'
                );
              m = t;
            },
          }),
            Object.defineProperty(this, "textAlign", {
              get: function () {
                var t;
                switch (m) {
                  case 0:
                  default:
                    t = "left";
                    break;
                  case 1:
                    t = "center";
                    break;
                  case 2:
                    t = "right";
                }
                return t;
              },
              configurable: !0,
              enumerable: !0,
              set: function (t) {
                switch (t) {
                  case "right":
                  case 2:
                    m = 2;
                    break;
                  case "center":
                  case 1:
                    m = 1;
                    break;
                  case "left":
                  case 0:
                  default:
                    m = 0;
                }
              },
            });
        };
        U(pt, ct);
        var ht = function () {
          pt.call(this),
            (this.FT = "/Ch"),
            (this.V = "()"),
            (this.fontName = "zapfdingbats");
          var t = 0;
          Object.defineProperty(this, "TI", {
            enumerable: !0,
            configurable: !1,
            get: function () {
              return t;
            },
            set: function (e) {
              t = e;
            },
          }),
            Object.defineProperty(this, "topIndex", {
              enumerable: !0,
              configurable: !0,
              get: function () {
                return t;
              },
              set: function (e) {
                t = e;
              },
            });
          var e = [];
          Object.defineProperty(this, "Opt", {
            enumerable: !0,
            configurable: !1,
            get: function () {
              return st(e, this.objId, this.scope);
            },
            set: function (t) {
              var n, i;
              (i = []),
                "string" == typeof (n = t) &&
                  (i = (function (t, e, n) {
                    n || (n = 1);
                    for (var i, r = []; (i = e.exec(t)); ) r.push(i[n]);
                    return r;
                  })(n, /\((.*?)\)/g)),
                (e = i);
            },
          }),
            (this.getOptions = function () {
              return e;
            }),
            (this.setOptions = function (t) {
              (e = t), this.sort && e.sort();
            }),
            (this.addOption = function (t) {
              (t = (t = t || "").toString()), e.push(t), this.sort && e.sort();
            }),
            (this.removeOption = function (t, n) {
              for (
                n = n || !1, t = (t = t || "").toString();
                -1 !== e.indexOf(t) && (e.splice(e.indexOf(t), 1), !1 !== n);

              );
            }),
            Object.defineProperty(this, "combo", {
              enumerable: !0,
              configurable: !0,
              get: function () {
                return Boolean(J(this.Ff, 18));
              },
              set: function (t) {
                !0 === Boolean(t)
                  ? (this.Ff = Q(this.Ff, 18))
                  : (this.Ff = tt(this.Ff, 18));
              },
            }),
            Object.defineProperty(this, "edit", {
              enumerable: !0,
              configurable: !0,
              get: function () {
                return Boolean(J(this.Ff, 19));
              },
              set: function (t) {
                !0 === this.combo &&
                  (!0 === Boolean(t)
                    ? (this.Ff = Q(this.Ff, 19))
                    : (this.Ff = tt(this.Ff, 19)));
              },
            }),
            Object.defineProperty(this, "sort", {
              enumerable: !0,
              configurable: !0,
              get: function () {
                return Boolean(J(this.Ff, 20));
              },
              set: function (t) {
                !0 === Boolean(t)
                  ? ((this.Ff = Q(this.Ff, 20)), e.sort())
                  : (this.Ff = tt(this.Ff, 20));
              },
            }),
            Object.defineProperty(this, "multiSelect", {
              enumerable: !0,
              configurable: !0,
              get: function () {
                return Boolean(J(this.Ff, 22));
              },
              set: function (t) {
                !0 === Boolean(t)
                  ? (this.Ff = Q(this.Ff, 22))
                  : (this.Ff = tt(this.Ff, 22));
              },
            }),
            Object.defineProperty(this, "doNotSpellCheck", {
              enumerable: !0,
              configurable: !0,
              get: function () {
                return Boolean(J(this.Ff, 23));
              },
              set: function (t) {
                !0 === Boolean(t)
                  ? (this.Ff = Q(this.Ff, 23))
                  : (this.Ff = tt(this.Ff, 23));
              },
            }),
            Object.defineProperty(this, "commitOnSelChange", {
              enumerable: !0,
              configurable: !0,
              get: function () {
                return Boolean(J(this.Ff, 27));
              },
              set: function (t) {
                !0 === Boolean(t)
                  ? (this.Ff = Q(this.Ff, 27))
                  : (this.Ff = tt(this.Ff, 27));
              },
            }),
            (this.hasAppearanceStream = !1);
        };
        U(ht, pt);
        var ft = function () {
          ht.call(this), (this.fontName = "helvetica"), (this.combo = !1);
        };
        U(ft, ht);
        var bt = function () {
          ft.call(this), (this.combo = !0);
        };
        U(bt, ft);
        var mt = function () {
          bt.call(this), (this.edit = !0);
        };
        U(mt, bt);
        var gt = function () {
          pt.call(this),
            (this.FT = "/Btn"),
            Object.defineProperty(this, "noToggleToOff", {
              enumerable: !0,
              configurable: !0,
              get: function () {
                return Boolean(J(this.Ff, 15));
              },
              set: function (t) {
                !0 === Boolean(t)
                  ? (this.Ff = Q(this.Ff, 15))
                  : (this.Ff = tt(this.Ff, 15));
              },
            }),
            Object.defineProperty(this, "radio", {
              enumerable: !0,
              configurable: !0,
              get: function () {
                return Boolean(J(this.Ff, 16));
              },
              set: function (t) {
                !0 === Boolean(t)
                  ? (this.Ff = Q(this.Ff, 16))
                  : (this.Ff = tt(this.Ff, 16));
              },
            }),
            Object.defineProperty(this, "pushButton", {
              enumerable: !0,
              configurable: !0,
              get: function () {
                return Boolean(J(this.Ff, 17));
              },
              set: function (t) {
                !0 === Boolean(t)
                  ? (this.Ff = Q(this.Ff, 17))
                  : (this.Ff = tt(this.Ff, 17));
              },
            }),
            Object.defineProperty(this, "radioIsUnison", {
              enumerable: !0,
              configurable: !0,
              get: function () {
                return Boolean(J(this.Ff, 26));
              },
              set: function (t) {
                !0 === Boolean(t)
                  ? (this.Ff = Q(this.Ff, 26))
                  : (this.Ff = tt(this.Ff, 26));
              },
            });
          var t,
            e = {};
          Object.defineProperty(this, "MK", {
            enumerable: !1,
            configurable: !1,
            get: function () {
              var t = function (t) {
                return t;
              };
              if (
                (this.scope &&
                  (t = this.scope.internal.getEncryptor(this.objId)),
                0 !== Object.keys(e).length)
              ) {
                var n,
                  i = [];
                for (n in (i.push("<<"), e))
                  i.push("/" + n + " (" + F(t(e[n])) + ")");
                return i.push(">>"), i.join("\n");
              }
            },
            set: function (t) {
              "object" === r()(t) && (e = t);
            },
          }),
            Object.defineProperty(this, "caption", {
              enumerable: !0,
              configurable: !0,
              get: function () {
                return e.CA || "";
              },
              set: function (t) {
                "string" == typeof t && (e.CA = t);
              },
            }),
            Object.defineProperty(this, "AS", {
              enumerable: !1,
              configurable: !1,
              get: function () {
                return t;
              },
              set: function (e) {
                t = e;
              },
            }),
            Object.defineProperty(this, "appearanceState", {
              enumerable: !0,
              configurable: !0,
              get: function () {
                return t.substr(1, t.length - 1);
              },
              set: function (e) {
                t = "/" + e;
              },
            });
        };
        U(gt, pt);
        var vt = function () {
          gt.call(this), (this.pushButton = !0);
        };
        U(vt, gt);
        var _t = function () {
          gt.call(this), (this.radio = !0), (this.pushButton = !1);
          var t = [];
          Object.defineProperty(this, "Kids", {
            enumerable: !0,
            configurable: !1,
            get: function () {
              return t;
            },
            set: function (e) {
              t = void 0 !== e ? e : [];
            },
          });
        };
        U(_t, gt);
        var yt = function () {
          var t, e;
          pt.call(this),
            Object.defineProperty(this, "Parent", {
              enumerable: !1,
              configurable: !1,
              get: function () {
                return t;
              },
              set: function (e) {
                t = e;
              },
            }),
            Object.defineProperty(this, "optionName", {
              enumerable: !1,
              configurable: !0,
              get: function () {
                return e;
              },
              set: function (t) {
                e = t;
              },
            });
          var n,
            i = {};
          Object.defineProperty(this, "MK", {
            enumerable: !1,
            configurable: !1,
            get: function () {
              var t = function (t) {
                return t;
              };
              this.scope && (t = this.scope.internal.getEncryptor(this.objId));
              var e,
                n = [];
              for (e in (n.push("<<"), i))
                n.push("/" + e + " (" + F(t(i[e])) + ")");
              return n.push(">>"), n.join("\n");
            },
            set: function (t) {
              "object" === r()(t) && (i = t);
            },
          }),
            Object.defineProperty(this, "caption", {
              enumerable: !0,
              configurable: !0,
              get: function () {
                return i.CA || "";
              },
              set: function (t) {
                "string" == typeof t && (i.CA = t);
              },
            }),
            Object.defineProperty(this, "AS", {
              enumerable: !1,
              configurable: !1,
              get: function () {
                return n;
              },
              set: function (t) {
                n = t;
              },
            }),
            Object.defineProperty(this, "appearanceState", {
              enumerable: !0,
              configurable: !0,
              get: function () {
                return n.substr(1, n.length - 1);
              },
              set: function (t) {
                n = "/" + t;
              },
            }),
            (this.caption = "l"),
            (this.appearanceState = "Off"),
            (this._AppearanceType = At.RadioButton.Circle),
            (this.appearanceStreamContent =
              this._AppearanceType.createAppearanceStream(this.optionName));
        };
        U(yt, pt),
          (_t.prototype.setAppearance = function (t) {
            if (!("createAppearanceStream" in t) || !("getCA" in t))
              throw new Error(
                "Couldn't assign Appearance to RadioButton. Appearance was Invalid!"
              );
            for (var e in this.Kids)
              if (this.Kids.hasOwnProperty(e)) {
                var n = this.Kids[e];
                (n.appearanceStreamContent = t.createAppearanceStream(
                  n.optionName
                )),
                  (n.caption = t.getCA());
              }
          }),
          (_t.prototype.createOption = function (t) {
            var e = new yt();
            return (
              (e.Parent = this),
              (e.optionName = t),
              this.Kids.push(e),
              xt.call(this.scope, e),
              e
            );
          });
        var Mt = function () {
          gt.call(this),
            (this.fontName = "zapfdingbats"),
            (this.caption = "3"),
            (this.appearanceState = "On"),
            (this.value = "On"),
            (this.textAlign = "center"),
            (this.appearanceStreamContent =
              At.CheckBox.createAppearanceStream());
        };
        U(Mt, gt);
        var Ot = function () {
          pt.call(this),
            (this.FT = "/Tx"),
            Object.defineProperty(this, "multiline", {
              enumerable: !0,
              configurable: !0,
              get: function () {
                return Boolean(J(this.Ff, 13));
              },
              set: function (t) {
                !0 === Boolean(t)
                  ? (this.Ff = Q(this.Ff, 13))
                  : (this.Ff = tt(this.Ff, 13));
              },
            }),
            Object.defineProperty(this, "fileSelect", {
              enumerable: !0,
              configurable: !0,
              get: function () {
                return Boolean(J(this.Ff, 21));
              },
              set: function (t) {
                !0 === Boolean(t)
                  ? (this.Ff = Q(this.Ff, 21))
                  : (this.Ff = tt(this.Ff, 21));
              },
            }),
            Object.defineProperty(this, "doNotSpellCheck", {
              enumerable: !0,
              configurable: !0,
              get: function () {
                return Boolean(J(this.Ff, 23));
              },
              set: function (t) {
                !0 === Boolean(t)
                  ? (this.Ff = Q(this.Ff, 23))
                  : (this.Ff = tt(this.Ff, 23));
              },
            }),
            Object.defineProperty(this, "doNotScroll", {
              enumerable: !0,
              configurable: !0,
              get: function () {
                return Boolean(J(this.Ff, 24));
              },
              set: function (t) {
                !0 === Boolean(t)
                  ? (this.Ff = Q(this.Ff, 24))
                  : (this.Ff = tt(this.Ff, 24));
              },
            }),
            Object.defineProperty(this, "comb", {
              enumerable: !0,
              configurable: !0,
              get: function () {
                return Boolean(J(this.Ff, 25));
              },
              set: function (t) {
                !0 === Boolean(t)
                  ? (this.Ff = Q(this.Ff, 25))
                  : (this.Ff = tt(this.Ff, 25));
              },
            }),
            Object.defineProperty(this, "richText", {
              enumerable: !0,
              configurable: !0,
              get: function () {
                return Boolean(J(this.Ff, 26));
              },
              set: function (t) {
                !0 === Boolean(t)
                  ? (this.Ff = Q(this.Ff, 26))
                  : (this.Ff = tt(this.Ff, 26));
              },
            });
          var t = null;
          Object.defineProperty(this, "MaxLen", {
            enumerable: !0,
            configurable: !1,
            get: function () {
              return t;
            },
            set: function (e) {
              t = e;
            },
          }),
            Object.defineProperty(this, "maxLength", {
              enumerable: !0,
              configurable: !0,
              get: function () {
                return t;
              },
              set: function (e) {
                Number.isInteger(e) && (t = e);
              },
            }),
            Object.defineProperty(this, "hasAppearanceStream", {
              enumerable: !0,
              configurable: !0,
              get: function () {
                return this.V || this.DV;
              },
            });
        };
        U(Ot, pt);
        var wt = function () {
          Ot.call(this),
            Object.defineProperty(this, "password", {
              enumerable: !0,
              configurable: !0,
              get: function () {
                return Boolean(J(this.Ff, 14));
              },
              set: function (t) {
                !0 === Boolean(t)
                  ? (this.Ff = Q(this.Ff, 14))
                  : (this.Ff = tt(this.Ff, 14));
              },
            }),
            (this.password = !0);
        };
        U(wt, Ot);
        var At = {
          CheckBox: {
            createAppearanceStream: function () {
              return {
                N: { On: At.CheckBox.YesNormal },
                D: {
                  On: At.CheckBox.YesPushDown,
                  Off: At.CheckBox.OffPushDown,
                },
              };
            },
            YesPushDown: function (t) {
              var e = V(t);
              e.scope = t.scope;
              var n = [],
                i = t.scope.internal.getFont(t.fontName, t.fontStyle).id,
                r = t.scope.__private__.encodeColorString(t.color),
                o = it(t, t.caption);
              return (
                n.push("0.749023 g"),
                n.push(
                  "0 0 " +
                    H(At.internal.getWidth(t)) +
                    " " +
                    H(At.internal.getHeight(t)) +
                    " re"
                ),
                n.push("f"),
                n.push("BMC"),
                n.push("q"),
                n.push("0 0 1 rg"),
                n.push("/" + i + " " + H(o.fontSize) + " Tf " + r),
                n.push("BT"),
                n.push(o.text),
                n.push("ET"),
                n.push("Q"),
                n.push("EMC"),
                (e.stream = n.join("\n")),
                e
              );
            },
            YesNormal: function (t) {
              var e = V(t);
              e.scope = t.scope;
              var n = t.scope.internal.getFont(t.fontName, t.fontStyle).id,
                i = t.scope.__private__.encodeColorString(t.color),
                r = [],
                o = At.internal.getHeight(t),
                a = At.internal.getWidth(t),
                s = it(t, t.caption);
              return (
                r.push("1 g"),
                r.push("0 0 " + H(a) + " " + H(o) + " re"),
                r.push("f"),
                r.push("q"),
                r.push("0 0 1 rg"),
                r.push("0 0 " + H(a - 1) + " " + H(o - 1) + " re"),
                r.push("W"),
                r.push("n"),
                r.push("0 g"),
                r.push("BT"),
                r.push("/" + n + " " + H(s.fontSize) + " Tf " + i),
                r.push(s.text),
                r.push("ET"),
                r.push("Q"),
                (e.stream = r.join("\n")),
                e
              );
            },
            OffPushDown: function (t) {
              var e = V(t);
              e.scope = t.scope;
              var n = [];
              return (
                n.push("0.749023 g"),
                n.push(
                  "0 0 " +
                    H(At.internal.getWidth(t)) +
                    " " +
                    H(At.internal.getHeight(t)) +
                    " re"
                ),
                n.push("f"),
                (e.stream = n.join("\n")),
                e
              );
            },
          },
          RadioButton: {
            Circle: {
              createAppearanceStream: function (t) {
                var e = {
                  D: { Off: At.RadioButton.Circle.OffPushDown },
                  N: {},
                };
                return (
                  (e.N[t] = At.RadioButton.Circle.YesNormal),
                  (e.D[t] = At.RadioButton.Circle.YesPushDown),
                  e
                );
              },
              getCA: function () {
                return "l";
              },
              YesNormal: function (t) {
                var e = V(t);
                e.scope = t.scope;
                var n = [],
                  i =
                    At.internal.getWidth(t) <= At.internal.getHeight(t)
                      ? At.internal.getWidth(t) / 4
                      : At.internal.getHeight(t) / 4;
                i = Number((0.9 * i).toFixed(5));
                var r = At.internal.Bezier_C,
                  o = Number((i * r).toFixed(5));
                return (
                  n.push("q"),
                  n.push(
                    "1 0 0 1 " +
                      Y(At.internal.getWidth(t) / 2) +
                      " " +
                      Y(At.internal.getHeight(t) / 2) +
                      " cm"
                  ),
                  n.push(i + " 0 m"),
                  n.push(i + " " + o + " " + o + " " + i + " 0 " + i + " c"),
                  n.push(
                    "-" + o + " " + i + " -" + i + " " + o + " -" + i + " 0 c"
                  ),
                  n.push(
                    "-" + i + " -" + o + " -" + o + " -" + i + " 0 -" + i + " c"
                  ),
                  n.push(o + " -" + i + " " + i + " -" + o + " " + i + " 0 c"),
                  n.push("f"),
                  n.push("Q"),
                  (e.stream = n.join("\n")),
                  e
                );
              },
              YesPushDown: function (t) {
                var e = V(t);
                e.scope = t.scope;
                var n = [],
                  i =
                    At.internal.getWidth(t) <= At.internal.getHeight(t)
                      ? At.internal.getWidth(t) / 4
                      : At.internal.getHeight(t) / 4;
                i = Number((0.9 * i).toFixed(5));
                var r = Number((2 * i).toFixed(5)),
                  o = Number((r * At.internal.Bezier_C).toFixed(5)),
                  a = Number((i * At.internal.Bezier_C).toFixed(5));
                return (
                  n.push("0.749023 g"),
                  n.push("q"),
                  n.push(
                    "1 0 0 1 " +
                      Y(At.internal.getWidth(t) / 2) +
                      " " +
                      Y(At.internal.getHeight(t) / 2) +
                      " cm"
                  ),
                  n.push(r + " 0 m"),
                  n.push(r + " " + o + " " + o + " " + r + " 0 " + r + " c"),
                  n.push(
                    "-" + o + " " + r + " -" + r + " " + o + " -" + r + " 0 c"
                  ),
                  n.push(
                    "-" + r + " -" + o + " -" + o + " -" + r + " 0 -" + r + " c"
                  ),
                  n.push(o + " -" + r + " " + r + " -" + o + " " + r + " 0 c"),
                  n.push("f"),
                  n.push("Q"),
                  n.push("0 g"),
                  n.push("q"),
                  n.push(
                    "1 0 0 1 " +
                      Y(At.internal.getWidth(t) / 2) +
                      " " +
                      Y(At.internal.getHeight(t) / 2) +
                      " cm"
                  ),
                  n.push(i + " 0 m"),
                  n.push(i + " " + a + " " + a + " " + i + " 0 " + i + " c"),
                  n.push(
                    "-" + a + " " + i + " -" + i + " " + a + " -" + i + " 0 c"
                  ),
                  n.push(
                    "-" + i + " -" + a + " -" + a + " -" + i + " 0 -" + i + " c"
                  ),
                  n.push(a + " -" + i + " " + i + " -" + a + " " + i + " 0 c"),
                  n.push("f"),
                  n.push("Q"),
                  (e.stream = n.join("\n")),
                  e
                );
              },
              OffPushDown: function (t) {
                var e = V(t);
                e.scope = t.scope;
                var n = [],
                  i =
                    At.internal.getWidth(t) <= At.internal.getHeight(t)
                      ? At.internal.getWidth(t) / 4
                      : At.internal.getHeight(t) / 4;
                i = Number((0.9 * i).toFixed(5));
                var r = Number((2 * i).toFixed(5)),
                  o = Number((r * At.internal.Bezier_C).toFixed(5));
                return (
                  n.push("0.749023 g"),
                  n.push("q"),
                  n.push(
                    "1 0 0 1 " +
                      Y(At.internal.getWidth(t) / 2) +
                      " " +
                      Y(At.internal.getHeight(t) / 2) +
                      " cm"
                  ),
                  n.push(r + " 0 m"),
                  n.push(r + " " + o + " " + o + " " + r + " 0 " + r + " c"),
                  n.push(
                    "-" + o + " " + r + " -" + r + " " + o + " -" + r + " 0 c"
                  ),
                  n.push(
                    "-" + r + " -" + o + " -" + o + " -" + r + " 0 -" + r + " c"
                  ),
                  n.push(o + " -" + r + " " + r + " -" + o + " " + r + " 0 c"),
                  n.push("f"),
                  n.push("Q"),
                  (e.stream = n.join("\n")),
                  e
                );
              },
            },
            Cross: {
              createAppearanceStream: function (t) {
                var e = { D: { Off: At.RadioButton.Cross.OffPushDown }, N: {} };
                return (
                  (e.N[t] = At.RadioButton.Cross.YesNormal),
                  (e.D[t] = At.RadioButton.Cross.YesPushDown),
                  e
                );
              },
              getCA: function () {
                return "8";
              },
              YesNormal: function (t) {
                var e = V(t);
                e.scope = t.scope;
                var n = [],
                  i = At.internal.calculateCross(t);
                return (
                  n.push("q"),
                  n.push(
                    "1 1 " +
                      H(At.internal.getWidth(t) - 2) +
                      " " +
                      H(At.internal.getHeight(t) - 2) +
                      " re"
                  ),
                  n.push("W"),
                  n.push("n"),
                  n.push(H(i.x1.x) + " " + H(i.x1.y) + " m"),
                  n.push(H(i.x2.x) + " " + H(i.x2.y) + " l"),
                  n.push(H(i.x4.x) + " " + H(i.x4.y) + " m"),
                  n.push(H(i.x3.x) + " " + H(i.x3.y) + " l"),
                  n.push("s"),
                  n.push("Q"),
                  (e.stream = n.join("\n")),
                  e
                );
              },
              YesPushDown: function (t) {
                var e = V(t);
                e.scope = t.scope;
                var n = At.internal.calculateCross(t),
                  i = [];
                return (
                  i.push("0.749023 g"),
                  i.push(
                    "0 0 " +
                      H(At.internal.getWidth(t)) +
                      " " +
                      H(At.internal.getHeight(t)) +
                      " re"
                  ),
                  i.push("f"),
                  i.push("q"),
                  i.push(
                    "1 1 " +
                      H(At.internal.getWidth(t) - 2) +
                      " " +
                      H(At.internal.getHeight(t) - 2) +
                      " re"
                  ),
                  i.push("W"),
                  i.push("n"),
                  i.push(H(n.x1.x) + " " + H(n.x1.y) + " m"),
                  i.push(H(n.x2.x) + " " + H(n.x2.y) + " l"),
                  i.push(H(n.x4.x) + " " + H(n.x4.y) + " m"),
                  i.push(H(n.x3.x) + " " + H(n.x3.y) + " l"),
                  i.push("s"),
                  i.push("Q"),
                  (e.stream = i.join("\n")),
                  e
                );
              },
              OffPushDown: function (t) {
                var e = V(t);
                e.scope = t.scope;
                var n = [];
                return (
                  n.push("0.749023 g"),
                  n.push(
                    "0 0 " +
                      H(At.internal.getWidth(t)) +
                      " " +
                      H(At.internal.getHeight(t)) +
                      " re"
                  ),
                  n.push("f"),
                  (e.stream = n.join("\n")),
                  e
                );
              },
            },
          },
          createDefaultAppearanceStream: function (t) {
            var e = t.scope.internal.getFont(t.fontName, t.fontStyle).id,
              n = t.scope.__private__.encodeColorString(t.color);
            return "/" + e + " " + t.fontSize + " Tf " + n;
          },
        };
        (At.internal = {
          Bezier_C: 0.551915024494,
          calculateCross: function (t) {
            var e = At.internal.getWidth(t),
              n = At.internal.getHeight(t),
              i = Math.min(e, n);
            return {
              x1: { x: (e - i) / 2, y: (n - i) / 2 + i },
              x2: { x: (e - i) / 2 + i, y: (n - i) / 2 },
              x3: { x: (e - i) / 2, y: (n - i) / 2 },
              x4: { x: (e - i) / 2 + i, y: (n - i) / 2 + i },
            };
          },
        }),
          (At.internal.getWidth = function (t) {
            var e = 0;
            return "object" === r()(t) && (e = X(t.Rect[2])), e;
          }),
          (At.internal.getHeight = function (t) {
            var e = 0;
            return "object" === r()(t) && (e = X(t.Rect[3])), e;
          });
        var xt = (N.addField = function (t) {
          if (
            ((function (t, e) {
              if (
                ((e.scope = t),
                void 0 !== t.internal &&
                  (void 0 === t.internal.acroformPlugin ||
                    !1 === t.internal.acroformPlugin.isInitialized))
              ) {
                if (
                  ((pt.FieldNum = 0),
                  (t.internal.acroformPlugin = JSON.parse(JSON.stringify(ot))),
                  t.internal.acroformPlugin.acroFormDictionaryRoot)
                )
                  throw new Error(
                    "Exception while creating AcroformDictionary"
                  );
                (B = t.internal.scaleFactor),
                  (t.internal.acroformPlugin.acroFormDictionaryRoot = new ut()),
                  (t.internal.acroformPlugin.acroFormDictionaryRoot.scope = t),
                  (t.internal.acroformPlugin.acroFormDictionaryRoot._eventID =
                    t.internal.events.subscribe(
                      "postPutResources",
                      function () {
                        var e;
                        (e = t).internal.events.unsubscribe(
                          e.internal.acroformPlugin.acroFormDictionaryRoot
                            ._eventID
                        ),
                          delete e.internal.acroformPlugin
                            .acroFormDictionaryRoot._eventID,
                          (e.internal.acroformPlugin.printedOut = !0);
                      }
                    )),
                  t.internal.events.subscribe("buildDocument", function () {
                    !(function (t) {
                      t.internal.acroformPlugin.acroFormDictionaryRoot.objId =
                        void 0;
                      var e =
                        t.internal.acroformPlugin.acroFormDictionaryRoot.Fields;
                      for (var n in e)
                        if (e.hasOwnProperty(n)) {
                          var i = e[n];
                          (i.objId = void 0), i.hasAnnotation && at(i, t);
                        }
                    })(t);
                  }),
                  t.internal.events.subscribe("putCatalog", function () {
                    !(function (t) {
                      if (
                        void 0 ===
                        t.internal.acroformPlugin.acroFormDictionaryRoot
                      )
                        throw new Error("putCatalogCallback: Root missing.");
                      t.internal.write(
                        "/AcroForm " +
                          t.internal.acroformPlugin.acroFormDictionaryRoot
                            .objId +
                          " 0 R"
                      );
                    })(t);
                  }),
                  t.internal.events.subscribe("postPutPages", function (e) {
                    !(function (t, e) {
                      var n = !t;
                      for (var i in (t ||
                        (e.internal.newObjectDeferredBegin(
                          e.internal.acroformPlugin.acroFormDictionaryRoot
                            .objId,
                          !0
                        ),
                        e.internal.acroformPlugin.acroFormDictionaryRoot.putStream()),
                      (t =
                        t ||
                        e.internal.acroformPlugin.acroFormDictionaryRoot.Kids)))
                        if (t.hasOwnProperty(i)) {
                          var o = t[i],
                            a = [],
                            s = o.Rect;
                          if (
                            (o.Rect && (o.Rect = et(o.Rect, e)),
                            e.internal.newObjectDeferredBegin(o.objId, !0),
                            (o.DA = At.createDefaultAppearanceStream(o)),
                            "object" === r()(o) &&
                              "function" == typeof o.getKeyValueListForStream &&
                              (a = o.getKeyValueListForStream()),
                            (o.Rect = s),
                            o.hasAppearanceStream && !o.appearanceStreamContent)
                          ) {
                            var l = nt(o);
                            a.push({ key: "AP", value: "<</N " + l + ">>" }),
                              e.internal.acroformPlugin.xForms.push(l);
                          }
                          if (o.appearanceStreamContent) {
                            var c = "";
                            for (var d in o.appearanceStreamContent)
                              if (o.appearanceStreamContent.hasOwnProperty(d)) {
                                var u = o.appearanceStreamContent[d];
                                if (
                                  ((c += "/" + d + " "),
                                  (c += "<<"),
                                  Object.keys(u).length >= 1 ||
                                    Array.isArray(u))
                                ) {
                                  for (var i in u)
                                    if (u.hasOwnProperty(i)) {
                                      var p = u[i];
                                      "function" == typeof p &&
                                        (p = p.call(e, o)),
                                        (c += "/" + i + " " + p + " "),
                                        e.internal.acroformPlugin.xForms.indexOf(
                                          p
                                        ) >= 0 ||
                                          e.internal.acroformPlugin.xForms.push(
                                            p
                                          );
                                    }
                                } else
                                  "function" == typeof (p = u) &&
                                    (p = p.call(e, o)),
                                    (c += "/" + i + " " + p),
                                    e.internal.acroformPlugin.xForms.indexOf(
                                      p
                                    ) >= 0 ||
                                      e.internal.acroformPlugin.xForms.push(p);
                                c += ">>";
                              }
                            a.push({ key: "AP", value: "<<\n" + c + ">>" });
                          }
                          e.internal.putStream({
                            additionalKeyValues: a,
                            objectId: o.objId,
                          }),
                            e.internal.out("endobj");
                        }
                      n &&
                        (function (t, e) {
                          for (var n in t)
                            if (t.hasOwnProperty(n)) {
                              var i = n,
                                o = t[n];
                              e.internal.newObjectDeferredBegin(o.objId, !0),
                                "object" === r()(o) &&
                                  "function" == typeof o.putStream &&
                                  o.putStream(),
                                delete t[i];
                            }
                        })(e.internal.acroformPlugin.xForms, e);
                    })(e, t);
                  }),
                  (t.internal.acroformPlugin.isInitialized = !0);
              }
            })(this, t),
            !(t instanceof pt))
          )
            throw new Error("Invalid argument passed to jsPDF.addField.");
          var e;
          return (
            (e = t).scope.internal.acroformPlugin.printedOut &&
              ((e.scope.internal.acroformPlugin.printedOut = !1),
              (e.scope.internal.acroformPlugin.acroFormDictionaryRoot = null)),
            e.scope.internal.acroformPlugin.acroFormDictionaryRoot.Fields.push(
              e
            ),
            (t.page = t.scope.internal.getCurrentPageInfo().pageNumber),
            this
          );
        });
        (N.AcroFormChoiceField = ht),
          (N.AcroFormListBox = ft),
          (N.AcroFormComboBox = bt),
          (N.AcroFormEditBox = mt),
          (N.AcroFormButton = gt),
          (N.AcroFormPushButton = vt),
          (N.AcroFormRadioButton = _t),
          (N.AcroFormCheckBox = Mt),
          (N.AcroFormTextField = Ot),
          (N.AcroFormPasswordField = wt),
          (N.AcroFormAppearance = At),
          (N.AcroForm = {
            ChoiceField: ht,
            ListBox: ft,
            ComboBox: bt,
            EditBox: mt,
            Button: gt,
            PushButton: vt,
            RadioButton: _t,
            CheckBox: Mt,
            TextField: Ot,
            PasswordField: wt,
            Appearance: At,
          }),
          (W.AcroForm = {
            ChoiceField: ht,
            ListBox: ft,
            ComboBox: bt,
            EditBox: mt,
            Button: gt,
            PushButton: vt,
            RadioButton: _t,
            CheckBox: Mt,
            TextField: Ot,
            PasswordField: wt,
            Appearance: At,
          });
        var zt,
          Ct,
          kt = W.AcroForm;
        function St(t) {
          return t.reduce(function (t, e, n) {
            return (t[e] = n), t;
          }, {});
        }
        !(function (t) {
          t.__addimage__ = {};
          var e = "UNKNOWN",
            n = {
              PNG: [[137, 80, 78, 71]],
              TIFF: [
                [77, 77, 0, 42],
                [73, 73, 42, 0],
              ],
              JPEG: [
                [255, 216, 255, 224, void 0, void 0, 74, 70, 73, 70, 0],
                [255, 216, 255, 225, void 0, void 0, 69, 120, 105, 102, 0, 0],
                [255, 216, 255, 219],
                [255, 216, 255, 238],
              ],
              JPEG2000: [[0, 0, 0, 12, 106, 80, 32, 32]],
              GIF87a: [[71, 73, 70, 56, 55, 97]],
              GIF89a: [[71, 73, 70, 56, 57, 97]],
              WEBP: [
                [
                  82,
                  73,
                  70,
                  70,
                  void 0,
                  void 0,
                  void 0,
                  void 0,
                  87,
                  69,
                  66,
                  80,
                ],
              ],
              BMP: [
                [66, 77],
                [66, 65],
                [67, 73],
                [67, 80],
                [73, 67],
                [80, 84],
              ],
            },
            i = (t.__addimage__.getImageFileTypeByImageData = function (t, i) {
              var r,
                o,
                a,
                s,
                l,
                c = e;
              if (
                "RGBA" === (i = i || e) ||
                (void 0 !== t.data &&
                  t.data instanceof Uint8ClampedArray &&
                  "height" in t &&
                  "width" in t)
              )
                return "RGBA";
              if (A(t))
                for (l in n)
                  for (a = n[l], r = 0; r < a.length; r += 1) {
                    for (s = !0, o = 0; o < a[r].length; o += 1)
                      if (void 0 !== a[r][o] && a[r][o] !== t[o]) {
                        s = !1;
                        break;
                      }
                    if (!0 === s) {
                      c = l;
                      break;
                    }
                  }
              else
                for (l in n)
                  for (a = n[l], r = 0; r < a.length; r += 1) {
                    for (s = !0, o = 0; o < a[r].length; o += 1)
                      if (void 0 !== a[r][o] && a[r][o] !== t.charCodeAt(o)) {
                        s = !1;
                        break;
                      }
                    if (!0 === s) {
                      c = l;
                      break;
                    }
                  }
              return c === e && i !== e && (c = i), c;
            }),
            o = function t(e) {
              for (
                var n = this.internal.write,
                  i = this.internal.putStream,
                  r = (0, this.internal.getFilters)();
                -1 !== r.indexOf("FlateEncode");

              )
                r.splice(r.indexOf("FlateEncode"), 1);
              e.objectId = this.internal.newObject();
              var o = [];
              if (
                (o.push({ key: "Type", value: "/XObject" }),
                o.push({ key: "Subtype", value: "/Image" }),
                o.push({ key: "Width", value: e.width }),
                o.push({ key: "Height", value: e.height }),
                e.colorSpace === v.INDEXED
                  ? o.push({
                      key: "ColorSpace",
                      value:
                        "[/Indexed /DeviceRGB " +
                        (e.palette.length / 3 - 1) +
                        " " +
                        ("sMask" in e && void 0 !== e.sMask
                          ? e.objectId + 2
                          : e.objectId + 1) +
                        " 0 R]",
                    })
                  : (o.push({ key: "ColorSpace", value: "/" + e.colorSpace }),
                    e.colorSpace === v.DEVICE_CMYK &&
                      o.push({ key: "Decode", value: "[1 0 1 0 1 0 1 0]" })),
                o.push({ key: "BitsPerComponent", value: e.bitsPerComponent }),
                "decodeParameters" in e &&
                  void 0 !== e.decodeParameters &&
                  o.push({
                    key: "DecodeParms",
                    value: "<<" + e.decodeParameters + ">>",
                  }),
                "transparency" in e && Array.isArray(e.transparency))
              ) {
                for (var a = "", s = 0, l = e.transparency.length; s < l; s++)
                  a += e.transparency[s] + " " + e.transparency[s] + " ";
                o.push({ key: "Mask", value: "[" + a + "]" });
              }
              void 0 !== e.sMask &&
                o.push({ key: "SMask", value: e.objectId + 1 + " 0 R" });
              var c = void 0 !== e.filter ? ["/" + e.filter] : void 0;
              if (
                (i({
                  data: e.data,
                  additionalKeyValues: o,
                  alreadyAppliedFilters: c,
                  objectId: e.objectId,
                }),
                n("endobj"),
                "sMask" in e && void 0 !== e.sMask)
              ) {
                var d =
                    "/Predictor " +
                    e.predictor +
                    " /Colors 1 /BitsPerComponent " +
                    e.bitsPerComponent +
                    " /Columns " +
                    e.width,
                  u = {
                    width: e.width,
                    height: e.height,
                    colorSpace: "DeviceGray",
                    bitsPerComponent: e.bitsPerComponent,
                    decodeParameters: d,
                    data: e.sMask,
                  };
                "filter" in e && (u.filter = e.filter), t.call(this, u);
              }
              if (e.colorSpace === v.INDEXED) {
                var p = this.internal.newObject();
                i({ data: z(new Uint8Array(e.palette)), objectId: p }),
                  n("endobj");
              }
            },
            a = function () {
              var t = this.internal.collections.addImage_images;
              for (var e in t) o.call(this, t[e]);
            },
            s = function () {
              var t,
                e = this.internal.collections.addImage_images,
                n = this.internal.write;
              for (var i in e) n("/I" + (t = e[i]).index, t.objectId, "0", "R");
            },
            l = function () {
              this.internal.collections.addImage_images ||
                ((this.internal.collections.addImage_images = {}),
                this.internal.events.subscribe("putResources", a),
                this.internal.events.subscribe("putXobjectDict", s));
            },
            c = function () {
              var t = this.internal.collections.addImage_images;
              return l.call(this), t;
            },
            d = function () {
              return Object.keys(this.internal.collections.addImage_images)
                .length;
            },
            u = function (e) {
              return "function" == typeof t["process" + e.toUpperCase()];
            },
            h = function (t) {
              return "object" === r()(t) && 1 === t.nodeType;
            },
            f = function (e, n) {
              if ("IMG" === e.nodeName && e.hasAttribute("src")) {
                var i = "" + e.getAttribute("src");
                if (0 === i.indexOf("data:image/"))
                  return p(unescape(i).split("base64,").pop());
                var r = t.loadFile(i, !0);
                if (void 0 !== r) return r;
              }
              if ("CANVAS" === e.nodeName) {
                if (0 === e.width || 0 === e.height)
                  throw new Error(
                    "Given canvas must have data. Canvas width: " +
                      e.width +
                      ", height: " +
                      e.height
                  );
                var o;
                switch (n) {
                  case "PNG":
                    o = "image/png";
                    break;
                  case "WEBP":
                    o = "image/webp";
                    break;
                  case "JPEG":
                  case "JPG":
                  default:
                    o = "image/jpeg";
                }
                return p(e.toDataURL(o, 1).split("base64,").pop());
              }
            },
            b = function (t) {
              var e = this.internal.collections.addImage_images;
              if (e) for (var n in e) if (t === e[n].alias) return e[n];
            },
            m = function (t, e, n) {
              return (
                t || e || ((t = -96), (e = -96)),
                t < 0 &&
                  (t = (-1 * n.width * 72) / t / this.internal.scaleFactor),
                e < 0 &&
                  (e = (-1 * n.height * 72) / e / this.internal.scaleFactor),
                0 === t && (t = (e * n.width) / n.height),
                0 === e && (e = (t * n.height) / n.width),
                [t, e]
              );
            },
            g = function (t, e, n, i, r, o) {
              var a = m.call(this, n, i, r),
                s = this.internal.getCoordinateString,
                l = this.internal.getVerticalCoordinateString,
                d = c.call(this);
              if (((n = a[0]), (i = a[1]), (d[r.index] = r), o)) {
                o *= Math.PI / 180;
                var u = Math.cos(o),
                  p = Math.sin(o),
                  h = function (t) {
                    return t.toFixed(4);
                  },
                  f = [h(u), h(p), h(-1 * p), h(u), 0, 0, "cm"];
              }
              this.internal.write("q"),
                o
                  ? (this.internal.write(
                      [1, "0", "0", 1, s(t), l(e + i), "cm"].join(" ")
                    ),
                    this.internal.write(f.join(" ")),
                    this.internal.write(
                      [s(n), "0", "0", s(i), "0", "0", "cm"].join(" ")
                    ))
                  : this.internal.write(
                      [s(n), "0", "0", s(i), s(t), l(e + i), "cm"].join(" ")
                    ),
                this.isAdvancedAPI() &&
                  this.internal.write([1, 0, 0, -1, 0, 0, "cm"].join(" ")),
                this.internal.write("/I" + r.index + " Do"),
                this.internal.write("Q");
            },
            v = (t.color_spaces = {
              DEVICE_RGB: "DeviceRGB",
              DEVICE_GRAY: "DeviceGray",
              DEVICE_CMYK: "DeviceCMYK",
              CAL_GREY: "CalGray",
              CAL_RGB: "CalRGB",
              LAB: "Lab",
              ICC_BASED: "ICCBased",
              INDEXED: "Indexed",
              PATTERN: "Pattern",
              SEPARATION: "Separation",
              DEVICE_N: "DeviceN",
            });
          t.decode = {
            DCT_DECODE: "DCTDecode",
            FLATE_DECODE: "FlateDecode",
            LZW_DECODE: "LZWDecode",
            JPX_DECODE: "JPXDecode",
            JBIG2_DECODE: "JBIG2Decode",
            ASCII85_DECODE: "ASCII85Decode",
            ASCII_HEX_DECODE: "ASCIIHexDecode",
            RUN_LENGTH_DECODE: "RunLengthDecode",
            CCITT_FAX_DECODE: "CCITTFaxDecode",
          };
          var _ = (t.image_compression = {
              NONE: "NONE",
              FAST: "FAST",
              MEDIUM: "MEDIUM",
              SLOW: "SLOW",
            }),
            y = (t.__addimage__.sHashCode = function (t) {
              var e,
                n,
                i = 0;
              if ("string" == typeof t)
                for (n = t.length, e = 0; e < n; e++)
                  (i = (i << 5) - i + t.charCodeAt(e)), (i |= 0);
              else if (A(t))
                for (n = t.byteLength / 2, e = 0; e < n; e++)
                  (i = (i << 5) - i + t[e]), (i |= 0);
              return i;
            }),
            M = (t.__addimage__.validateStringAsBase64 = function (t) {
              (t = t || "").toString().trim();
              var e = !0;
              return (
                0 === t.length && (e = !1),
                t.length % 4 != 0 && (e = !1),
                !1 === /^[A-Za-z0-9+/]+$/.test(t.substr(0, t.length - 2)) &&
                  (e = !1),
                !1 ===
                  /^[A-Za-z0-9/][A-Za-z0-9+/]|[A-Za-z0-9+/]=|==$/.test(
                    t.substr(-2)
                  ) && (e = !1),
                e
              );
            }),
            O = (t.__addimage__.extractImageFromDataUrl = function (t) {
              var e = (t = t || "").split("base64,"),
                n = null;
              if (2 === e.length) {
                var i =
                  /^data:(\w*\/\w*);*(charset=(?!charset=)[\w=-]*)*;*$/.exec(
                    e[0]
                  );
                Array.isArray(i) &&
                  (n = { mimeType: i[1], charset: i[2], data: e[1] });
              }
              return n;
            }),
            w = (t.__addimage__.supportsArrayBuffer = function () {
              return (
                "undefined" != typeof ArrayBuffer &&
                "undefined" != typeof Uint8Array
              );
            });
          t.__addimage__.isArrayBuffer = function (t) {
            return w() && t instanceof ArrayBuffer;
          };
          var A = (t.__addimage__.isArrayBufferView = function (t) {
              return (
                w() &&
                "undefined" != typeof Uint32Array &&
                (t instanceof Int8Array ||
                  t instanceof Uint8Array ||
                  ("undefined" != typeof Uint8ClampedArray &&
                    t instanceof Uint8ClampedArray) ||
                  t instanceof Int16Array ||
                  t instanceof Uint16Array ||
                  t instanceof Int32Array ||
                  t instanceof Uint32Array ||
                  t instanceof Float32Array ||
                  t instanceof Float64Array)
              );
            }),
            x = (t.__addimage__.binaryStringToUint8Array = function (t) {
              for (var e = t.length, n = new Uint8Array(e), i = 0; i < e; i++)
                n[i] = t.charCodeAt(i);
              return n;
            }),
            z = (t.__addimage__.arrayBufferToBinaryString = function (t) {
              for (
                var e = "", n = A(t) ? t : new Uint8Array(t), i = 0;
                i < n.length;
                i += 8192
              )
                e += String.fromCharCode.apply(null, n.subarray(i, i + 8192));
              return e;
            });
          t.addImage = function () {
            var t, n, i, o, a, s, c, d, u;
            if (
              ("number" == typeof arguments[1]
                ? ((n = e),
                  (i = arguments[1]),
                  (o = arguments[2]),
                  (a = arguments[3]),
                  (s = arguments[4]),
                  (c = arguments[5]),
                  (d = arguments[6]),
                  (u = arguments[7]))
                : ((n = arguments[1]),
                  (i = arguments[2]),
                  (o = arguments[3]),
                  (a = arguments[4]),
                  (s = arguments[5]),
                  (c = arguments[6]),
                  (d = arguments[7]),
                  (u = arguments[8])),
              "object" === r()((t = arguments[0])) && !h(t) && "imageData" in t)
            ) {
              var p = t;
              (t = p.imageData),
                (n = p.format || n || e),
                (i = p.x || i || 0),
                (o = p.y || o || 0),
                (a = p.w || p.width || a),
                (s = p.h || p.height || s),
                (c = p.alias || c),
                (d = p.compression || d),
                (u = p.rotation || p.angle || u);
            }
            var f = this.internal.getFilters();
            if (
              (void 0 === d && -1 !== f.indexOf("FlateEncode") && (d = "SLOW"),
              isNaN(i) || isNaN(o))
            )
              throw new Error("Invalid coordinates passed to jsPDF.addImage");
            l.call(this);
            var b = C.call(this, t, n, c, d);
            return g.call(this, i, o, a, s, b, u), this;
          };
          var C = function (n, r, o, a) {
              var s, l, c;
              if ("string" == typeof n && i(n) === e) {
                n = unescape(n);
                var p = k(n, !1);
                ("" !== p || void 0 !== (p = t.loadFile(n, !0))) && (n = p);
              }
              if ((h(n) && (n = f(n, r)), (r = i(n, r)), !u(r)))
                throw new Error(
                  "addImage does not support files of type '" +
                    r +
                    "', please ensure that a plugin for '" +
                    r +
                    "' support is added."
                );
              if (
                ((null == (c = o) || 0 === c.length) &&
                  (o = (function (t) {
                    return "string" == typeof t || A(t)
                      ? y(t)
                      : A(t.data)
                      ? y(t.data)
                      : null;
                  })(n)),
                (s = b.call(this, o)) ||
                  (w() &&
                    (n instanceof Uint8Array ||
                      "RGBA" === r ||
                      ((l = n), (n = x(n)))),
                  (s = this["process" + r.toUpperCase()](
                    n,
                    d.call(this),
                    o,
                    (function (e) {
                      return (
                        e && "string" == typeof e && (e = e.toUpperCase()),
                        e in t.image_compression ? e : _.NONE
                      );
                    })(a),
                    l
                  ))),
                !s)
              )
                throw new Error(
                  "An unknown error occurred whilst processing the image."
                );
              return s;
            },
            k = (t.__addimage__.convertBase64ToBinaryString = function (t, e) {
              var n;
              e = "boolean" != typeof e || e;
              var i,
                r = "";
              if ("string" == typeof t) {
                i = null !== (n = O(t)) ? n.data : t;
                try {
                  r = p(i);
                } catch (t) {
                  if (e)
                    throw M(i)
                      ? new Error(
                          "atob-Error in jsPDF.convertBase64ToBinaryString " +
                            t.message
                        )
                      : new Error(
                          "Supplied Data is not a valid base64-String jsPDF.convertBase64ToBinaryString "
                        );
                }
              }
              return r;
            });
          t.getImageProperties = function (n) {
            var r,
              o,
              a = "";
            if (
              (h(n) && (n = f(n)),
              "string" == typeof n &&
                i(n) === e &&
                ("" === (a = k(n, !1)) && (a = t.loadFile(n) || ""), (n = a)),
              (o = i(n)),
              !u(o))
            )
              throw new Error(
                "addImage does not support files of type '" +
                  o +
                  "', please ensure that a plugin for '" +
                  o +
                  "' support is added."
              );
            if (
              (!w() || n instanceof Uint8Array || (n = x(n)),
              !(r = this["process" + o.toUpperCase()](n)))
            )
              throw new Error(
                "An unknown error occurred whilst processing the image"
              );
            return (r.fileType = o), r;
          };
        })(W.API),
          (zt = W.API),
          (Ct = function (t) {
            if (void 0 !== t && "" != t) return !0;
          }),
          W.API.events.push([
            "addPage",
            function (t) {
              this.internal.getPageInfo(t.pageNumber).pageContext.annotations =
                [];
            },
          ]),
          zt.events.push([
            "putPage",
            function (t) {
              for (
                var e,
                  n,
                  i,
                  r = this.internal.getCoordinateString,
                  o = this.internal.getVerticalCoordinateString,
                  a = this.internal.getPageInfoByObjId(t.objId),
                  s = t.pageContext.annotations,
                  l = !1,
                  c = 0;
                c < s.length && !l;
                c++
              )
                switch ((e = s[c]).type) {
                  case "link":
                    (Ct(e.options.url) || Ct(e.options.pageNumber)) && (l = !0);
                    break;
                  case "reference":
                  case "text":
                  case "freetext":
                    l = !0;
                }
              if (0 != l) {
                this.internal.write("/Annots [");
                for (var d = 0; d < s.length; d++) {
                  e = s[d];
                  var u = this.internal.pdfEscape,
                    p = this.internal.getEncryptor(t.objId);
                  switch (e.type) {
                    case "reference":
                      this.internal.write(" " + e.object.objId + " 0 R ");
                      break;
                    case "text":
                      var h = this.internal.newAdditionalObject(),
                        f = this.internal.newAdditionalObject(),
                        b = this.internal.getEncryptor(h.objId),
                        m = e.title || "Note";
                      (i =
                        "<</Type /Annot /Subtype /Text " +
                        (n =
                          "/Rect [" +
                          r(e.bounds.x) +
                          " " +
                          o(e.bounds.y + e.bounds.h) +
                          " " +
                          r(e.bounds.x + e.bounds.w) +
                          " " +
                          o(e.bounds.y) +
                          "] ") +
                        "/Contents (" +
                        u(b(e.contents)) +
                        ")"),
                        (i += " /Popup " + f.objId + " 0 R"),
                        (i += " /P " + a.objId + " 0 R"),
                        (i += " /T (" + u(b(m)) + ") >>"),
                        (h.content = i);
                      var g = h.objId + " 0 R";
                      (i =
                        "<</Type /Annot /Subtype /Popup " +
                        (n =
                          "/Rect [" +
                          r(e.bounds.x + 30) +
                          " " +
                          o(e.bounds.y + e.bounds.h) +
                          " " +
                          r(e.bounds.x + e.bounds.w + 30) +
                          " " +
                          o(e.bounds.y) +
                          "] ") +
                        " /Parent " +
                        g),
                        e.open && (i += " /Open true"),
                        (i += " >>"),
                        (f.content = i),
                        this.internal.write(h.objId, "0 R", f.objId, "0 R");
                      break;
                    case "freetext":
                      n =
                        "/Rect [" +
                        r(e.bounds.x) +
                        " " +
                        o(e.bounds.y) +
                        " " +
                        r(e.bounds.x + e.bounds.w) +
                        " " +
                        o(e.bounds.y + e.bounds.h) +
                        "] ";
                      var v = e.color || "#000000";
                      (i =
                        "<</Type /Annot /Subtype /FreeText " +
                        n +
                        "/Contents (" +
                        u(p(e.contents)) +
                        ")"),
                        (i +=
                          " /DS(font: Helvetica,sans-serif 12.0pt; text-align:left; color:#" +
                          v +
                          ")"),
                        (i += " /Border [0 0 0]"),
                        (i += " >>"),
                        this.internal.write(i);
                      break;
                    case "link":
                      if (e.options.name) {
                        var _ = this.annotations._nameMap[e.options.name];
                        (e.options.pageNumber = _.page), (e.options.top = _.y);
                      } else e.options.top || (e.options.top = 0);
                      if (
                        ((n =
                          "/Rect [" +
                          e.finalBounds.x +
                          " " +
                          e.finalBounds.y +
                          " " +
                          e.finalBounds.w +
                          " " +
                          e.finalBounds.h +
                          "] "),
                        (i = ""),
                        e.options.url)
                      )
                        i =
                          "<</Type /Annot /Subtype /Link " +
                          n +
                          "/Border [0 0 0] /A <</S /URI /URI (" +
                          u(p(e.options.url)) +
                          ") >>";
                      else if (e.options.pageNumber)
                        switch (
                          ((i =
                            "<</Type /Annot /Subtype /Link " +
                            n +
                            "/Border [0 0 0] /Dest [" +
                            this.internal.getPageInfo(e.options.pageNumber)
                              .objId +
                            " 0 R"),
                          (e.options.magFactor = e.options.magFactor || "XYZ"),
                          e.options.magFactor)
                        ) {
                          case "Fit":
                            i += " /Fit]";
                            break;
                          case "FitH":
                            i += " /FitH " + e.options.top + "]";
                            break;
                          case "FitV":
                            (e.options.left = e.options.left || 0),
                              (i += " /FitV " + e.options.left + "]");
                            break;
                          case "XYZ":
                          default:
                            var y = o(e.options.top);
                            (e.options.left = e.options.left || 0),
                              void 0 === e.options.zoom && (e.options.zoom = 0),
                              (i +=
                                " /XYZ " +
                                e.options.left +
                                " " +
                                y +
                                " " +
                                e.options.zoom +
                                "]");
                        }
                      "" != i && ((i += " >>"), this.internal.write(i));
                  }
                }
                this.internal.write("]");
              }
            },
          ]),
          (zt.createAnnotation = function (t) {
            var e = this.internal.getCurrentPageInfo();
            switch (t.type) {
              case "link":
                this.link(t.bounds.x, t.bounds.y, t.bounds.w, t.bounds.h, t);
                break;
              case "text":
              case "freetext":
                e.pageContext.annotations.push(t);
            }
          }),
          (zt.link = function (t, e, n, i, r) {
            var o = this.internal.getCurrentPageInfo(),
              a = this.internal.getCoordinateString,
              s = this.internal.getVerticalCoordinateString;
            o.pageContext.annotations.push({
              finalBounds: { x: a(t), y: s(e), w: a(t + n), h: s(e + i) },
              options: r,
              type: "link",
            });
          }),
          (zt.textWithLink = function (t, e, n, i) {
            var r,
              o,
              a = this.getTextWidth(t),
              s = this.internal.getLineHeight() / this.internal.scaleFactor;
            if (void 0 !== i.maxWidth) {
              o = i.maxWidth;
              var l = this.splitTextToSize(t, o).length;
              r = Math.ceil(s * l);
            } else (o = a), (r = s);
            return (
              this.text(t, e, n, i),
              (n += 0.2 * s),
              "center" === i.align && (e -= a / 2),
              "right" === i.align && (e -= a),
              this.link(e, n - s, o, r, i),
              a
            );
          }),
          (zt.getTextWidth = function (t) {
            var e = this.internal.getFontSize();
            return (this.getStringUnitWidth(t) * e) / this.internal.scaleFactor;
          }),
          (function (t) {
            var e = {
                1569: [65152],
                1570: [65153, 65154],
                1571: [65155, 65156],
                1572: [65157, 65158],
                1573: [65159, 65160],
                1574: [65161, 65162, 65163, 65164],
                1575: [65165, 65166],
                1576: [65167, 65168, 65169, 65170],
                1577: [65171, 65172],
                1578: [65173, 65174, 65175, 65176],
                1579: [65177, 65178, 65179, 65180],
                1580: [65181, 65182, 65183, 65184],
                1581: [65185, 65186, 65187, 65188],
                1582: [65189, 65190, 65191, 65192],
                1583: [65193, 65194],
                1584: [65195, 65196],
                1585: [65197, 65198],
                1586: [65199, 65200],
                1587: [65201, 65202, 65203, 65204],
                1588: [65205, 65206, 65207, 65208],
                1589: [65209, 65210, 65211, 65212],
                1590: [65213, 65214, 65215, 65216],
                1591: [65217, 65218, 65219, 65220],
                1592: [65221, 65222, 65223, 65224],
                1593: [65225, 65226, 65227, 65228],
                1594: [65229, 65230, 65231, 65232],
                1601: [65233, 65234, 65235, 65236],
                1602: [65237, 65238, 65239, 65240],
                1603: [65241, 65242, 65243, 65244],
                1604: [65245, 65246, 65247, 65248],
                1605: [65249, 65250, 65251, 65252],
                1606: [65253, 65254, 65255, 65256],
                1607: [65257, 65258, 65259, 65260],
                1608: [65261, 65262],
                1609: [65263, 65264, 64488, 64489],
                1610: [65265, 65266, 65267, 65268],
                1649: [64336, 64337],
                1655: [64477],
                1657: [64358, 64359, 64360, 64361],
                1658: [64350, 64351, 64352, 64353],
                1659: [64338, 64339, 64340, 64341],
                1662: [64342, 64343, 64344, 64345],
                1663: [64354, 64355, 64356, 64357],
                1664: [64346, 64347, 64348, 64349],
                1667: [64374, 64375, 64376, 64377],
                1668: [64370, 64371, 64372, 64373],
                1670: [64378, 64379, 64380, 64381],
                1671: [64382, 64383, 64384, 64385],
                1672: [64392, 64393],
                1676: [64388, 64389],
                1677: [64386, 64387],
                1678: [64390, 64391],
                1681: [64396, 64397],
                1688: [64394, 64395],
                1700: [64362, 64363, 64364, 64365],
                1702: [64366, 64367, 64368, 64369],
                1705: [64398, 64399, 64400, 64401],
                1709: [64467, 64468, 64469, 64470],
                1711: [64402, 64403, 64404, 64405],
                1713: [64410, 64411, 64412, 64413],
                1715: [64406, 64407, 64408, 64409],
                1722: [64414, 64415],
                1723: [64416, 64417, 64418, 64419],
                1726: [64426, 64427, 64428, 64429],
                1728: [64420, 64421],
                1729: [64422, 64423, 64424, 64425],
                1733: [64480, 64481],
                1734: [64473, 64474],
                1735: [64471, 64472],
                1736: [64475, 64476],
                1737: [64482, 64483],
                1739: [64478, 64479],
                1740: [64508, 64509, 64510, 64511],
                1744: [64484, 64485, 64486, 64487],
                1746: [64430, 64431],
                1747: [64432, 64433],
              },
              n = {
                65247: {
                  65154: 65269,
                  65156: 65271,
                  65160: 65273,
                  65166: 65275,
                },
                65248: {
                  65154: 65270,
                  65156: 65272,
                  65160: 65274,
                  65166: 65276,
                },
                65165: { 65247: { 65248: { 65258: 65010 } } },
                1617: {
                  1612: 64606,
                  1613: 64607,
                  1614: 64608,
                  1615: 64609,
                  1616: 64610,
                },
              },
              i = {
                1612: 64606,
                1613: 64607,
                1614: 64608,
                1615: 64609,
                1616: 64610,
              },
              r = [1570, 1571, 1573, 1575];
            t.__arabicParser__ = {};
            var o = (t.__arabicParser__.isInArabicSubstitutionA = function (t) {
                return void 0 !== e[t.charCodeAt(0)];
              }),
              a = (t.__arabicParser__.isArabicLetter = function (t) {
                return (
                  "string" == typeof t &&
                  /^[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF]+$/.test(
                    t
                  )
                );
              }),
              s = (t.__arabicParser__.isArabicEndLetter = function (t) {
                return a(t) && o(t) && e[t.charCodeAt(0)].length <= 2;
              }),
              l = (t.__arabicParser__.isArabicAlfLetter = function (t) {
                return a(t) && r.indexOf(t.charCodeAt(0)) >= 0;
              });
            t.__arabicParser__.arabicLetterHasIsolatedForm = function (t) {
              return a(t) && o(t) && e[t.charCodeAt(0)].length >= 1;
            };
            var c = (t.__arabicParser__.arabicLetterHasFinalForm = function (
              t
            ) {
              return a(t) && o(t) && e[t.charCodeAt(0)].length >= 2;
            });
            t.__arabicParser__.arabicLetterHasInitialForm = function (t) {
              return a(t) && o(t) && e[t.charCodeAt(0)].length >= 3;
            };
            var d = (t.__arabicParser__.arabicLetterHasMedialForm = function (
                t
              ) {
                return a(t) && o(t) && 4 == e[t.charCodeAt(0)].length;
              }),
              u = (t.__arabicParser__.resolveLigatures = function (t) {
                var e = 0,
                  i = n,
                  r = "",
                  o = 0;
                for (e = 0; e < t.length; e += 1)
                  void 0 !== i[t.charCodeAt(e)]
                    ? (o++,
                      "number" == typeof (i = i[t.charCodeAt(e)]) &&
                        ((r += String.fromCharCode(i)), (i = n), (o = 0)),
                      e === t.length - 1 &&
                        ((i = n),
                        (r += t.charAt(e - (o - 1))),
                        (e -= o - 1),
                        (o = 0)))
                    : ((i = n), (r += t.charAt(e - o)), (e -= o), (o = 0));
                return r;
              });
            t.__arabicParser__.isArabicDiacritic = function (t) {
              return void 0 !== t && void 0 !== i[t.charCodeAt(0)];
            };
            var p = (t.__arabicParser__.getCorrectForm = function (t, e, n) {
                return a(t)
                  ? !1 === o(t)
                    ? -1
                    : !c(t) ||
                      (!a(e) && !a(n)) ||
                      (!a(n) && s(e)) ||
                      (s(t) && !a(e)) ||
                      (s(t) && l(e)) ||
                      (s(t) && s(e))
                    ? 0
                    : d(t) && a(e) && !s(e) && a(n) && c(n)
                    ? 3
                    : s(t) || !a(n)
                    ? 1
                    : 2
                  : -1;
              }),
              h = function (t) {
                var n = 0,
                  i = 0,
                  r = 0,
                  o = "",
                  s = "",
                  l = "",
                  c = (t = t || "").split("\\s+"),
                  d = [];
                for (n = 0; n < c.length; n += 1) {
                  for (d.push(""), i = 0; i < c[n].length; i += 1)
                    (o = c[n][i]),
                      (s = c[n][i - 1]),
                      (l = c[n][i + 1]),
                      a(o)
                        ? ((r = p(o, s, l)),
                          (d[n] +=
                            -1 !== r
                              ? String.fromCharCode(e[o.charCodeAt(0)][r])
                              : o))
                        : (d[n] += o);
                  d[n] = u(d[n]);
                }
                return d.join(" ");
              },
              f =
                (t.__arabicParser__.processArabic =
                t.processArabic =
                  function () {
                    var t,
                      e =
                        "string" == typeof arguments[0]
                          ? arguments[0]
                          : arguments[0].text,
                      n = [];
                    if (Array.isArray(e)) {
                      var i = 0;
                      for (n = [], i = 0; i < e.length; i += 1)
                        Array.isArray(e[i])
                          ? n.push([h(e[i][0]), e[i][1], e[i][2]])
                          : n.push([h(e[i])]);
                      t = n;
                    } else t = h(e);
                    return "string" == typeof arguments[0]
                      ? t
                      : ((arguments[0].text = t), arguments[0]);
                  });
            t.events.push(["preProcessText", f]);
          })(W.API),
          (W.API.autoPrint = function (t) {
            var e;
            switch (
              (((t = t || {}).variant = t.variant || "non-conform"), t.variant)
            ) {
              case "javascript":
                this.addJS("print({});");
                break;
              case "non-conform":
              default:
                this.internal.events.subscribe("postPutResources", function () {
                  (e = this.internal.newObject()),
                    this.internal.out("<<"),
                    this.internal.out("/S /Named"),
                    this.internal.out("/Type /Action"),
                    this.internal.out("/N /Print"),
                    this.internal.out(">>"),
                    this.internal.out("endobj");
                }),
                  this.internal.events.subscribe("putCatalog", function () {
                    this.internal.out("/OpenAction " + e + " 0 R");
                  });
            }
            return this;
          }),
          (function (t) {
            var e = function () {
              var t = void 0;
              Object.defineProperty(this, "pdf", {
                get: function () {
                  return t;
                },
                set: function (e) {
                  t = e;
                },
              });
              var e = 150;
              Object.defineProperty(this, "width", {
                get: function () {
                  return e;
                },
                set: function (t) {
                  (e =
                    isNaN(t) || !1 === Number.isInteger(t) || t < 0 ? 150 : t),
                    this.getContext("2d").pageWrapXEnabled &&
                      (this.getContext("2d").pageWrapX = e + 1);
                },
              });
              var n = 300;
              Object.defineProperty(this, "height", {
                get: function () {
                  return n;
                },
                set: function (t) {
                  (n =
                    isNaN(t) || !1 === Number.isInteger(t) || t < 0 ? 300 : t),
                    this.getContext("2d").pageWrapYEnabled &&
                      (this.getContext("2d").pageWrapY = n + 1);
                },
              });
              var i = [];
              Object.defineProperty(this, "childNodes", {
                get: function () {
                  return i;
                },
                set: function (t) {
                  i = t;
                },
              });
              var r = {};
              Object.defineProperty(this, "style", {
                get: function () {
                  return r;
                },
                set: function (t) {
                  r = t;
                },
              }),
                Object.defineProperty(this, "parentNode", {});
            };
            (e.prototype.getContext = function (t, e) {
              var n;
              if ("2d" !== (t = t || "2d")) return null;
              for (n in e)
                this.pdf.context2d.hasOwnProperty(n) &&
                  (this.pdf.context2d[n] = e[n]);
              return (this.pdf.context2d._canvas = this), this.pdf.context2d;
            }),
              (e.prototype.toDataURL = function () {
                throw new Error("toDataURL is not implemented.");
              }),
              t.events.push([
                "initialized",
                function () {
                  (this.canvas = new e()), (this.canvas.pdf = this);
                },
              ]);
          })(W.API),
          (function (t) {
            var e = { left: 0, top: 0, bottom: 0, right: 0 },
              n = !1,
              i = function () {
                void 0 === this.internal.__cell__ &&
                  ((this.internal.__cell__ = {}),
                  (this.internal.__cell__.padding = 3),
                  (this.internal.__cell__.headerFunction = void 0),
                  (this.internal.__cell__.margins = Object.assign({}, e)),
                  (this.internal.__cell__.margins.width = this.getPageWidth()),
                  o.call(this));
              },
              o = function () {
                (this.internal.__cell__.lastCell = new a()),
                  (this.internal.__cell__.pages = 1);
              },
              a = function () {
                var t = arguments[0];
                Object.defineProperty(this, "x", {
                  enumerable: !0,
                  get: function () {
                    return t;
                  },
                  set: function (e) {
                    t = e;
                  },
                });
                var e = arguments[1];
                Object.defineProperty(this, "y", {
                  enumerable: !0,
                  get: function () {
                    return e;
                  },
                  set: function (t) {
                    e = t;
                  },
                });
                var n = arguments[2];
                Object.defineProperty(this, "width", {
                  enumerable: !0,
                  get: function () {
                    return n;
                  },
                  set: function (t) {
                    n = t;
                  },
                });
                var i = arguments[3];
                Object.defineProperty(this, "height", {
                  enumerable: !0,
                  get: function () {
                    return i;
                  },
                  set: function (t) {
                    i = t;
                  },
                });
                var r = arguments[4];
                Object.defineProperty(this, "text", {
                  enumerable: !0,
                  get: function () {
                    return r;
                  },
                  set: function (t) {
                    r = t;
                  },
                });
                var o = arguments[5];
                Object.defineProperty(this, "lineNumber", {
                  enumerable: !0,
                  get: function () {
                    return o;
                  },
                  set: function (t) {
                    o = t;
                  },
                });
                var a = arguments[6];
                return (
                  Object.defineProperty(this, "align", {
                    enumerable: !0,
                    get: function () {
                      return a;
                    },
                    set: function (t) {
                      a = t;
                    },
                  }),
                  this
                );
              };
            (a.prototype.clone = function () {
              return new a(
                this.x,
                this.y,
                this.width,
                this.height,
                this.text,
                this.lineNumber,
                this.align
              );
            }),
              (a.prototype.toArray = function () {
                return [
                  this.x,
                  this.y,
                  this.width,
                  this.height,
                  this.text,
                  this.lineNumber,
                  this.align,
                ];
              }),
              (t.setHeaderFunction = function (t) {
                return (
                  i.call(this),
                  (this.internal.__cell__.headerFunction =
                    "function" == typeof t ? t : void 0),
                  this
                );
              }),
              (t.getTextDimensions = function (t, e) {
                i.call(this);
                var n = (e = e || {}).fontSize || this.getFontSize(),
                  r = e.font || this.getFont(),
                  o = e.scaleFactor || this.internal.scaleFactor,
                  a = 0,
                  s = 0,
                  l = 0,
                  c = this;
                if (!Array.isArray(t) && "string" != typeof t) {
                  if ("number" != typeof t)
                    throw new Error(
                      "getTextDimensions expects text-parameter to be of type String or type Number or an Array of Strings."
                    );
                  t = String(t);
                }
                var d = e.maxWidth;
                d > 0
                  ? "string" == typeof t
                    ? (t = this.splitTextToSize(t, d))
                    : "[object Array]" === Object.prototype.toString.call(t) &&
                      (t = t.reduce(function (t, e) {
                        return t.concat(c.splitTextToSize(e, d));
                      }, []))
                  : (t = Array.isArray(t) ? t : [t]);
                for (var u = 0; u < t.length; u++)
                  a < (l = this.getStringUnitWidth(t[u], { font: r }) * n) &&
                    (a = l);
                return (
                  0 !== a && (s = t.length),
                  {
                    w: (a /= o),
                    h: Math.max(
                      (s * n * this.getLineHeightFactor() -
                        n * (this.getLineHeightFactor() - 1)) /
                        o,
                      0
                    ),
                  }
                );
              }),
              (t.cellAddPage = function () {
                i.call(this), this.addPage();
                var t = this.internal.__cell__.margins || e;
                return (
                  (this.internal.__cell__.lastCell = new a(
                    t.left,
                    t.top,
                    void 0,
                    void 0
                  )),
                  (this.internal.__cell__.pages += 1),
                  this
                );
              });
            var s = (t.cell = function () {
              var t;
              (t =
                arguments[0] instanceof a
                  ? arguments[0]
                  : new a(
                      arguments[0],
                      arguments[1],
                      arguments[2],
                      arguments[3],
                      arguments[4],
                      arguments[5]
                    )),
                i.call(this);
              var r = this.internal.__cell__.lastCell,
                o = this.internal.__cell__.padding,
                s = this.internal.__cell__.margins || e,
                l = this.internal.__cell__.tableHeaderRow,
                c = this.internal.__cell__.printHeaders;
              return (
                void 0 !== r.lineNumber &&
                  (r.lineNumber === t.lineNumber
                    ? ((t.x = (r.x || 0) + (r.width || 0)), (t.y = r.y || 0))
                    : r.y + r.height + t.height + s.bottom >
                      this.getPageHeight()
                    ? (this.cellAddPage(),
                      (t.y = s.top),
                      c &&
                        l &&
                        (this.printHeaderRow(t.lineNumber, !0),
                        (t.y += l[0].height)))
                    : (t.y = r.y + r.height || t.y)),
                void 0 !== t.text[0] &&
                  (this.rect(
                    t.x,
                    t.y,
                    t.width,
                    t.height,
                    !0 === n ? "FD" : void 0
                  ),
                  "right" === t.align
                    ? this.text(t.text, t.x + t.width - o, t.y + o, {
                        align: "right",
                        baseline: "top",
                      })
                    : "center" === t.align
                    ? this.text(t.text, t.x + t.width / 2, t.y + o, {
                        align: "center",
                        baseline: "top",
                        maxWidth: t.width - o - o,
                      })
                    : this.text(t.text, t.x + o, t.y + o, {
                        align: "left",
                        baseline: "top",
                        maxWidth: t.width - o - o,
                      })),
                (this.internal.__cell__.lastCell = t),
                this
              );
            });
            t.table = function (t, n, c, d, u) {
              if ((i.call(this), !c)) throw new Error("No data for PDF table.");
              var p,
                h,
                f,
                b,
                m = [],
                g = [],
                v = [],
                _ = {},
                y = {},
                M = [],
                O = [],
                w = (u = u || {}).autoSize || !1,
                A = !1 !== u.printHeaders,
                x =
                  u.css && void 0 !== u.css["font-size"]
                    ? 16 * u.css["font-size"]
                    : u.fontSize || 12,
                z =
                  u.margins || Object.assign({ width: this.getPageWidth() }, e),
                C = "number" == typeof u.padding ? u.padding : 3,
                k = u.headerBackgroundColor || "#c8c8c8",
                S = u.headerTextColor || "#000";
              if (
                (o.call(this),
                (this.internal.__cell__.printHeaders = A),
                (this.internal.__cell__.margins = z),
                (this.internal.__cell__.table_font_size = x),
                (this.internal.__cell__.padding = C),
                (this.internal.__cell__.headerBackgroundColor = k),
                (this.internal.__cell__.headerTextColor = S),
                this.setFontSize(x),
                null == d)
              )
                (g = m = Object.keys(c[0])),
                  (v = m.map(function () {
                    return "left";
                  }));
              else if (Array.isArray(d) && "object" === r()(d[0]))
                for (
                  m = d.map(function (t) {
                    return t.name;
                  }),
                    g = d.map(function (t) {
                      return t.prompt || t.name || "";
                    }),
                    v = d.map(function (t) {
                      return t.align || "left";
                    }),
                    p = 0;
                  p < d.length;
                  p += 1
                )
                  y[d[p].name] = d[p].width * (19.049976 / 25.4);
              else
                Array.isArray(d) &&
                  "string" == typeof d[0] &&
                  ((g = m = d),
                  (v = m.map(function () {
                    return "left";
                  })));
              if (w || (Array.isArray(d) && "string" == typeof d[0]))
                for (p = 0; p < m.length; p += 1) {
                  for (
                    _[(b = m[p])] = c.map(function (t) {
                      return t[b];
                    }),
                      this.setFont(void 0, "bold"),
                      M.push(
                        this.getTextDimensions(g[p], {
                          fontSize: this.internal.__cell__.table_font_size,
                          scaleFactor: this.internal.scaleFactor,
                        }).w
                      ),
                      h = _[b],
                      this.setFont(void 0, "normal"),
                      f = 0;
                    f < h.length;
                    f += 1
                  )
                    M.push(
                      this.getTextDimensions(h[f], {
                        fontSize: this.internal.__cell__.table_font_size,
                        scaleFactor: this.internal.scaleFactor,
                      }).w
                    );
                  (y[b] = Math.max.apply(null, M) + C + C), (M = []);
                }
              if (A) {
                var T = {};
                for (p = 0; p < m.length; p += 1)
                  (T[m[p]] = {}), (T[m[p]].text = g[p]), (T[m[p]].align = v[p]);
                var D = l.call(this, T, y);
                (O = m.map(function (e) {
                  return new a(t, n, y[e], D, T[e].text, void 0, T[e].align);
                })),
                  this.setTableHeaderRow(O),
                  this.printHeaderRow(1, !1);
              }
              var L = d.reduce(function (t, e) {
                return (t[e.name] = e.align), t;
              }, {});
              for (p = 0; p < c.length; p += 1) {
                "rowStart" in u &&
                  u.rowStart instanceof Function &&
                  u.rowStart({ row: p, data: c[p] }, this);
                var q = l.call(this, c[p], y);
                for (f = 0; f < m.length; f += 1) {
                  var E = c[p][m[f]];
                  "cellStart" in u &&
                    u.cellStart instanceof Function &&
                    u.cellStart({ row: p, col: f, data: E }, this),
                    s.call(this, new a(t, n, y[m[f]], q, E, p + 2, L[m[f]]));
                }
              }
              return (
                (this.internal.__cell__.table_x = t),
                (this.internal.__cell__.table_y = n),
                this
              );
            };
            var l = function (t, e) {
              var n = this.internal.__cell__.padding,
                i = this.internal.__cell__.table_font_size,
                r = this.internal.scaleFactor;
              return Object.keys(t)
                .map(function (i) {
                  var r = t[i];
                  return this.splitTextToSize(
                    r.hasOwnProperty("text") ? r.text : r,
                    e[i] - n - n
                  );
                }, this)
                .map(function (t) {
                  return (
                    (this.getLineHeightFactor() * t.length * i) / r + n + n
                  );
                }, this)
                .reduce(function (t, e) {
                  return Math.max(t, e);
                }, 0);
            };
            (t.setTableHeaderRow = function (t) {
              i.call(this), (this.internal.__cell__.tableHeaderRow = t);
            }),
              (t.printHeaderRow = function (t, e) {
                if ((i.call(this), !this.internal.__cell__.tableHeaderRow))
                  throw new Error("Property tableHeaderRow does not exist.");
                var r;
                if (
                  ((n = !0),
                  "function" == typeof this.internal.__cell__.headerFunction)
                ) {
                  var o = this.internal.__cell__.headerFunction(
                    this,
                    this.internal.__cell__.pages
                  );
                  this.internal.__cell__.lastCell = new a(
                    o[0],
                    o[1],
                    o[2],
                    o[3],
                    void 0,
                    -1
                  );
                }
                this.setFont(void 0, "bold");
                for (
                  var l = [], c = 0;
                  c < this.internal.__cell__.tableHeaderRow.length;
                  c += 1
                ) {
                  (r = this.internal.__cell__.tableHeaderRow[c].clone()),
                    e &&
                      ((r.y = this.internal.__cell__.margins.top || 0),
                      l.push(r)),
                    (r.lineNumber = t);
                  var d = this.getTextColor();
                  this.setTextColor(this.internal.__cell__.headerTextColor),
                    this.setFillColor(
                      this.internal.__cell__.headerBackgroundColor
                    ),
                    s.call(this, r),
                    this.setTextColor(d);
                }
                l.length > 0 && this.setTableHeaderRow(l),
                  this.setFont(void 0, "normal"),
                  (n = !1);
              });
          })(W.API);
        var Tt = {
            italic: ["italic", "oblique", "normal"],
            oblique: ["oblique", "italic", "normal"],
            normal: ["normal", "oblique", "italic"],
          },
          Dt = [
            "ultra-condensed",
            "extra-condensed",
            "condensed",
            "semi-condensed",
            "normal",
            "semi-expanded",
            "expanded",
            "extra-expanded",
            "ultra-expanded",
          ],
          Lt = St(Dt),
          qt = [100, 200, 300, 400, 500, 600, 700, 800, 900],
          Et = St(qt);
        function jt(t) {
          var e = t.family.replace(/"|'/g, "").toLowerCase(),
            n = (function (t) {
              return Tt[(t = t || "normal")] ? t : "normal";
            })(t.style),
            i = (function (t) {
              if (!t) return 400;
              if ("number" == typeof t)
                return t >= 100 && t <= 900 && t % 100 == 0 ? t : 400;
              if (/^\d00$/.test(t)) return parseInt(t);
              switch (t) {
                case "bold":
                  return 700;
                case "normal":
                default:
                  return 400;
              }
            })(t.weight),
            r = (function (t) {
              return "number" == typeof Lt[(t = t || "normal")] ? t : "normal";
            })(t.stretch);
          return {
            family: e,
            style: n,
            weight: i,
            stretch: r,
            src: t.src || [],
            ref: t.ref || { name: e, style: [r, n, i].join(" ") },
          };
        }
        function Pt(t, e, n, i) {
          var r;
          for (r = n; r >= 0 && r < e.length; r += i)
            if (t[e[r]]) return t[e[r]];
          for (r = n; r >= 0 && r < e.length; r -= i)
            if (t[e[r]]) return t[e[r]];
        }
        var Rt = {
            "sans-serif": "helvetica",
            fixed: "courier",
            monospace: "courier",
            terminal: "courier",
            cursive: "times",
            fantasy: "times",
            serif: "times",
          },
          It = {
            caption: "times",
            icon: "times",
            menu: "times",
            "message-box": "times",
            "small-caption": "times",
            "status-bar": "times",
          };
        function Wt(t) {
          return [t.stretch, t.style, t.weight, t.family].join(" ");
        }
        function Nt(t) {
          return t.trimLeft();
        }
        function Bt(t, e) {
          for (var n = 0; n < t.length; ) {
            if (t.charAt(n) === e)
              return [t.substring(0, n), t.substring(n + 1)];
            n += 1;
          }
          return null;
        }
        function Ft(t) {
          var e = t.match(/^(-[a-z_]|[a-z_])[a-z0-9_-]*/i);
          return null === e ? null : [e[0], t.substring(e[0].length)];
        }
        var $t,
          Ht,
          Yt,
          Ut = ["times"];
        !(function (t) {
          var e,
            n,
            i,
            o,
            a,
            s,
            c,
            d,
            u,
            p = function (t) {
              return (
                (t = t || {}),
                (this.isStrokeTransparent = t.isStrokeTransparent || !1),
                (this.strokeOpacity = t.strokeOpacity || 1),
                (this.strokeStyle = t.strokeStyle || "#000000"),
                (this.fillStyle = t.fillStyle || "#000000"),
                (this.isFillTransparent = t.isFillTransparent || !1),
                (this.fillOpacity = t.fillOpacity || 1),
                (this.font = t.font || "10px sans-serif"),
                (this.textBaseline = t.textBaseline || "alphabetic"),
                (this.textAlign = t.textAlign || "left"),
                (this.lineWidth = t.lineWidth || 1),
                (this.lineJoin = t.lineJoin || "miter"),
                (this.lineCap = t.lineCap || "butt"),
                (this.path = t.path || []),
                (this.transform =
                  void 0 !== t.transform ? t.transform.clone() : new d()),
                (this.globalCompositeOperation =
                  t.globalCompositeOperation || "normal"),
                (this.globalAlpha = t.globalAlpha || 1),
                (this.clip_path = t.clip_path || []),
                (this.currentPoint = t.currentPoint || new s()),
                (this.miterLimit = t.miterLimit || 10),
                (this.lastPoint = t.lastPoint || new s()),
                (this.lineDashOffset = t.lineDashOffset || 0),
                (this.lineDash = t.lineDash || []),
                (this.margin = t.margin || [0, 0, 0, 0]),
                (this.prevPageLastElemOffset = t.prevPageLastElemOffset || 0),
                (this.ignoreClearRect =
                  "boolean" != typeof t.ignoreClearRect || t.ignoreClearRect),
                this
              );
            };
          t.events.push([
            "initialized",
            function () {
              (this.context2d = new h(this)),
                (e = this.internal.f2),
                (n = this.internal.getCoordinateString),
                (i = this.internal.getVerticalCoordinateString),
                (o = this.internal.getHorizontalCoordinate),
                (a = this.internal.getVerticalCoordinate),
                (s = this.internal.Point),
                (c = this.internal.Rectangle),
                (d = this.internal.Matrix),
                (u = new p());
            },
          ]);
          var h = function (t) {
            Object.defineProperty(this, "canvas", {
              get: function () {
                return { parentNode: !1, style: !1 };
              },
            });
            var e = t;
            Object.defineProperty(this, "pdf", {
              get: function () {
                return e;
              },
            });
            var n = !1;
            Object.defineProperty(this, "pageWrapXEnabled", {
              get: function () {
                return n;
              },
              set: function (t) {
                n = Boolean(t);
              },
            });
            var i = !1;
            Object.defineProperty(this, "pageWrapYEnabled", {
              get: function () {
                return i;
              },
              set: function (t) {
                i = Boolean(t);
              },
            });
            var r = 0;
            Object.defineProperty(this, "posX", {
              get: function () {
                return r;
              },
              set: function (t) {
                isNaN(t) || (r = t);
              },
            });
            var o = 0;
            Object.defineProperty(this, "posY", {
              get: function () {
                return o;
              },
              set: function (t) {
                isNaN(t) || (o = t);
              },
            }),
              Object.defineProperty(this, "margin", {
                get: function () {
                  return u.margin;
                },
                set: function (t) {
                  var e;
                  "number" == typeof t
                    ? (e = [t, t, t, t])
                    : (((e = new Array(4))[0] = t[0]),
                      (e[1] = t.length >= 2 ? t[1] : e[0]),
                      (e[2] = t.length >= 3 ? t[2] : e[0]),
                      (e[3] = t.length >= 4 ? t[3] : e[1])),
                    (u.margin = e);
                },
              });
            var a = !1;
            Object.defineProperty(this, "autoPaging", {
              get: function () {
                return a;
              },
              set: function (t) {
                a = t;
              },
            });
            var s = 0;
            Object.defineProperty(this, "lastBreak", {
              get: function () {
                return s;
              },
              set: function (t) {
                s = t;
              },
            });
            var l = [];
            Object.defineProperty(this, "pageBreaks", {
              get: function () {
                return l;
              },
              set: function (t) {
                l = t;
              },
            }),
              Object.defineProperty(this, "ctx", {
                get: function () {
                  return u;
                },
                set: function (t) {
                  t instanceof p && (u = t);
                },
              }),
              Object.defineProperty(this, "path", {
                get: function () {
                  return u.path;
                },
                set: function (t) {
                  u.path = t;
                },
              });
            var c = [];
            Object.defineProperty(this, "ctxStack", {
              get: function () {
                return c;
              },
              set: function (t) {
                c = t;
              },
            }),
              Object.defineProperty(this, "fillStyle", {
                get: function () {
                  return this.ctx.fillStyle;
                },
                set: function (t) {
                  var e;
                  (e = f(t)),
                    (this.ctx.fillStyle = e.style),
                    (this.ctx.isFillTransparent = 0 === e.a),
                    (this.ctx.fillOpacity = e.a),
                    this.pdf.setFillColor(e.r, e.g, e.b, { a: e.a }),
                    this.pdf.setTextColor(e.r, e.g, e.b, { a: e.a });
                },
              }),
              Object.defineProperty(this, "strokeStyle", {
                get: function () {
                  return this.ctx.strokeStyle;
                },
                set: function (t) {
                  var e = f(t);
                  (this.ctx.strokeStyle = e.style),
                    (this.ctx.isStrokeTransparent = 0 === e.a),
                    (this.ctx.strokeOpacity = e.a),
                    0 === e.a
                      ? this.pdf.setDrawColor(255, 255, 255)
                      : (e.a, this.pdf.setDrawColor(e.r, e.g, e.b));
                },
              }),
              Object.defineProperty(this, "lineCap", {
                get: function () {
                  return this.ctx.lineCap;
                },
                set: function (t) {
                  -1 !== ["butt", "round", "square"].indexOf(t) &&
                    ((this.ctx.lineCap = t), this.pdf.setLineCap(t));
                },
              }),
              Object.defineProperty(this, "lineWidth", {
                get: function () {
                  return this.ctx.lineWidth;
                },
                set: function (t) {
                  isNaN(t) ||
                    ((this.ctx.lineWidth = t), this.pdf.setLineWidth(t));
                },
              }),
              Object.defineProperty(this, "lineJoin", {
                get: function () {
                  return this.ctx.lineJoin;
                },
                set: function (t) {
                  -1 !== ["bevel", "round", "miter"].indexOf(t) &&
                    ((this.ctx.lineJoin = t), this.pdf.setLineJoin(t));
                },
              }),
              Object.defineProperty(this, "miterLimit", {
                get: function () {
                  return this.ctx.miterLimit;
                },
                set: function (t) {
                  isNaN(t) ||
                    ((this.ctx.miterLimit = t), this.pdf.setMiterLimit(t));
                },
              }),
              Object.defineProperty(this, "textBaseline", {
                get: function () {
                  return this.ctx.textBaseline;
                },
                set: function (t) {
                  this.ctx.textBaseline = t;
                },
              }),
              Object.defineProperty(this, "textAlign", {
                get: function () {
                  return this.ctx.textAlign;
                },
                set: function (t) {
                  -1 !==
                    ["right", "end", "center", "left", "start"].indexOf(t) &&
                    (this.ctx.textAlign = t);
                },
              });
            var d = null;
            function h(t, e) {
              if (null === d) {
                var n = (function (t) {
                  var e = [];
                  return (
                    Object.keys(t).forEach(function (n) {
                      t[n].forEach(function (t) {
                        var i = null;
                        switch (t) {
                          case "bold":
                            i = { family: n, weight: "bold" };
                            break;
                          case "italic":
                            i = { family: n, style: "italic" };
                            break;
                          case "bolditalic":
                            i = { family: n, weight: "bold", style: "italic" };
                            break;
                          case "":
                          case "normal":
                            i = { family: n };
                        }
                        null !== i &&
                          ((i.ref = { name: n, style: t }), e.push(i));
                      });
                    }),
                    e
                  );
                })(t.getFontList());
                d = (function (t) {
                  for (var e = {}, n = 0; n < t.length; ++n) {
                    var i = jt(t[n]),
                      r = i.family,
                      o = i.stretch,
                      a = i.style,
                      s = i.weight;
                    (e[r] = e[r] || {}),
                      (e[r][o] = e[r][o] || {}),
                      (e[r][o][a] = e[r][o][a] || {}),
                      (e[r][o][a][s] = i);
                  }
                  return e;
                })(n.concat(e));
              }
              return d;
            }
            var b = null;
            Object.defineProperty(this, "fontFaces", {
              get: function () {
                return b;
              },
              set: function (t) {
                (d = null), (b = t);
              },
            }),
              Object.defineProperty(this, "font", {
                get: function () {
                  return this.ctx.font;
                },
                set: function (t) {
                  var e;
                  if (
                    ((this.ctx.font = t),
                    null !==
                      (e =
                        /^\s*(?=(?:(?:[-a-z]+\s*){0,2}(italic|oblique))?)(?=(?:(?:[-a-z]+\s*){0,2}(small-caps))?)(?=(?:(?:[-a-z]+\s*){0,2}(bold(?:er)?|lighter|[1-9]00))?)(?:(?:normal|\1|\2|\3)\s*){0,3}((?:xx?-)?(?:small|large)|medium|smaller|larger|[.\d]+(?:\%|in|[cem]m|ex|p[ctx]))(?:\s*\/\s*(normal|[.\d]+(?:\%|in|[cem]m|ex|p[ctx])))?\s*([-_,\"\'\sa-z]+?)\s*$/i.exec(
                          t
                        )))
                  ) {
                    var n = e[1],
                      i = (e[2], e[3]),
                      r = e[4],
                      o = (e[5], e[6]),
                      a = /^([.\d]+)((?:%|in|[cem]m|ex|p[ctx]))$/i.exec(r)[2];
                    (r =
                      "px" === a
                        ? Math.floor(
                            parseFloat(r) * this.pdf.internal.scaleFactor
                          )
                        : "em" === a
                        ? Math.floor(parseFloat(r) * this.pdf.getFontSize())
                        : Math.floor(
                            parseFloat(r) * this.pdf.internal.scaleFactor
                          )),
                      this.pdf.setFontSize(r);
                    var s = (function (t) {
                      var e,
                        n,
                        i = [],
                        r = t.trim();
                      if ("" === r) return Ut;
                      if (r in It) return [It[r]];
                      for (; "" !== r; ) {
                        switch (((n = null), (e = (r = Nt(r)).charAt(0)))) {
                          case '"':
                          case "'":
                            n = Bt(r.substring(1), e);
                            break;
                          default:
                            n = Ft(r);
                        }
                        if (null === n) return Ut;
                        if (
                          (i.push(n[0]),
                          "" !== (r = Nt(n[1])) && "," !== r.charAt(0))
                        )
                          return Ut;
                        r = r.replace(/^,/, "");
                      }
                      return i;
                    })(o);
                    if (this.fontFaces) {
                      var l = (function (t, e, n) {
                        for (
                          var i = (n = n || {}).defaultFontFamily || "times",
                            r = Object.assign(
                              {},
                              Rt,
                              n.genericFontFamilies || {}
                            ),
                            o = null,
                            a = null,
                            s = 0;
                          s < e.length;
                          ++s
                        )
                          if (
                            (r[(o = jt(e[s])).family] &&
                              (o.family = r[o.family]),
                            t.hasOwnProperty(o.family))
                          ) {
                            a = t[o.family];
                            break;
                          }
                        if (!(a = a || t[i]))
                          throw new Error(
                            "Could not find a font-family for the rule '" +
                              Wt(o) +
                              "' and default family '" +
                              i +
                              "'."
                          );
                        if (
                          ((a = (function (t, e) {
                            if (e[t]) return e[t];
                            var n = Lt[t],
                              i = n <= Lt.normal ? -1 : 1,
                              r = Pt(e, Dt, n, i);
                            if (!r)
                              throw new Error(
                                "Could not find a matching font-stretch value for " +
                                  t
                              );
                            return r;
                          })(o.stretch, a)),
                          (a = (function (t, e) {
                            if (e[t]) return e[t];
                            for (var n = Tt[t], i = 0; i < n.length; ++i)
                              if (e[n[i]]) return e[n[i]];
                            throw new Error(
                              "Could not find a matching font-style for " + t
                            );
                          })(o.style, a)),
                          !(a = (function (t, e) {
                            if (e[t]) return e[t];
                            if (400 === t && e[500]) return e[500];
                            if (500 === t && e[400]) return e[400];
                            var n = Et[t],
                              i = Pt(e, qt, n, t < 400 ? -1 : 1);
                            if (!i)
                              throw new Error(
                                "Could not find a matching font-weight for value " +
                                  t
                              );
                            return i;
                          })(o.weight, a)))
                        )
                          throw new Error(
                            "Failed to resolve a font for the rule '" +
                              Wt(o) +
                              "'."
                          );
                        return a;
                      })(
                        h(this.pdf, this.fontFaces),
                        s.map(function (t) {
                          return {
                            family: t,
                            stretch: "normal",
                            weight: i,
                            style: n,
                          };
                        })
                      );
                      this.pdf.setFont(l.ref.name, l.ref.style);
                    } else {
                      var c = "";
                      ("bold" === i ||
                        parseInt(i, 10) >= 700 ||
                        "bold" === n) &&
                        (c = "bold"),
                        "italic" === n && (c += "italic"),
                        0 === c.length && (c = "normal");
                      for (
                        var d = "",
                          u = {
                            arial: "Helvetica",
                            Arial: "Helvetica",
                            verdana: "Helvetica",
                            Verdana: "Helvetica",
                            helvetica: "Helvetica",
                            Helvetica: "Helvetica",
                            "sans-serif": "Helvetica",
                            fixed: "Courier",
                            monospace: "Courier",
                            terminal: "Courier",
                            cursive: "Times",
                            fantasy: "Times",
                            serif: "Times",
                          },
                          p = 0;
                        p < s.length;
                        p++
                      ) {
                        if (
                          void 0 !==
                          this.pdf.internal.getFont(s[p], c, {
                            noFallback: !0,
                            disableWarning: !0,
                          })
                        ) {
                          d = s[p];
                          break;
                        }
                        if (
                          "bolditalic" === c &&
                          void 0 !==
                            this.pdf.internal.getFont(s[p], "bold", {
                              noFallback: !0,
                              disableWarning: !0,
                            })
                        )
                          (d = s[p]), (c = "bold");
                        else if (
                          void 0 !==
                          this.pdf.internal.getFont(s[p], "normal", {
                            noFallback: !0,
                            disableWarning: !0,
     