// app.part1-de-30.js
/*! For license information please see app.min.js.LICENSE.txt */
!(function (t) {
  function e(e) {
    for (var n, r, o = e[0], a = e[1], s = 0, c = []; s < o.length; s++)
      (r = o[s]),
        Object.prototype.hasOwnProperty.call(i, r) && i[r] && c.push(i[r][0]),
        (i[r] = 0);
    for (n in a) Object.prototype.hasOwnProperty.call(a, n) && (t[n] = a[n]);
    for (l && l(e); c.length; ) c.shift()();
  }
  var n = {},
    i = { 0: 0 };
  function r(e) {
    if (n[e]) return n[e].exports;
    var i = (n[e] = { i: e, l: !1, exports: {} });
    return t[e].call(i.exports, i, i.exports, r), (i.l = !0), i.exports;
  }
  (r.e = function (t) {
    var e = [],
      n = i[t];
    if (0 !== n)
      if (n) e.push(n[2]);
      else {
        var o = new Promise(function (e, r) {
          n = i[t] = [e, r];
        });
        e.push((n[2] = o));
        var a,
          s = document.createElement("script");
        (s.charset = "utf-8"),
          (s.timeout = 120),
          r.nc && s.setAttribute("nonce", r.nc),
          (s.src = (function (t) {
            return r.p + "" + ({}[t] || t) + ".js";
          })(t));
        var l = new Error();
        a = function (e) {
          (s.onerror = s.onload = null), clearTimeout(c);
          var n = i[t];
          if (0 !== n) {
            if (n) {
              var r = e && ("load" === e.type ? "missing" : e.type),
                o = e && e.target && e.target.src;
              (l.message =
                "Loading chunk " + t + " failed.\n(" + r + ": " + o + ")"),
                (l.name = "ChunkLoadError"),
                (l.type = r),
                (l.request = o),
                n[1](l);
            }
            i[t] = void 0;
          }
        };
        var c = setTimeout(function () {
          a({ type: "timeout", target: s });
        }, 12e4);
        (s.onerror = s.onload = a), document.head.appendChild(s);
      }
    return Promise.all(e);
  }),
    (r.m = t),
    (r.c = n),
    (r.d = function (t, e, n) {
      r.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n });
    }),
    (r.r = function (t) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (r.t = function (t, e) {
      if ((1 & e && (t = r(t)), 8 & e)) return t;
      if (4 & e && "object" == typeof t && t && t.__esModule) return t;
      var n = Object.create(null);
      if (
        (r.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var i in t)
          r.d(
            n,
            i,
            function (e) {
              return t[e];
            }.bind(null, i)
          );
      return n;
    }),
    (r.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t.default;
            }
          : function () {
              return t;
            };
      return r.d(e, "a", e), e;
    }),
    (r.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (r.p = "/"),
    (r.oe = function (t) {
      throw t;
    });
  var o = (window.webpackJsonp = window.webpackJsonp || []),
    a = o.push.bind(o);
  (o.push = e), (o = o.slice());
  for (var s = 0; s < o.length; s++) e(o[s]);
  var l = a;
  r((r.s = 632));
})([
  function (t, e, n) {
    "use strict";
    n.d(e, "f", function () {
      return h;
    }),
      n.d(e, "h", function () {
        return f;
      }),
      n.d(e, "g", function () {
        return b;
      }),
      n.d(e, "c", function () {
        return m;
      }),
      n.d(e, "a", function () {
        return g;
      }),
      n.d(e, "e", function () {
        return v;
      }),
      n.d(e, "d", function () {
        return y;
      }),
      n.d(e, "b", function () {
        return O;
      });
    var i = n(1),
      r = n(45),
      o = n(35),
      a = n(22),
      s = n(5),
      l = n(7),
      c = n(18);
    function d(t, e) {
      var n = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(t);
        e &&
          (i = i.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          n.push.apply(n, i);
      }
      return n;
    }
    function u(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? d(Object(n), !0).forEach(function (e) {
              p(t, e, n[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
          : d(Object(n)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(n, e)
              );
            });
      }
      return t;
    }
    function p(t, e, n) {
      return (
        e in t
          ? Object.defineProperty(t, e, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (t[e] = n),
        t
      );
    }
    var h = function (t, e) {
        return t + Object(c.j)(e);
      },
      f = function (t, e) {
        return Object(c.d)(e.replace(t, ""));
      },
      b = function (t, e) {
        return e + (t ? Object(c.j)(t) : "");
      },
      m = function () {
        var t =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : i.a,
          e =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : void 0,
          n =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : void 0,
          r =
            arguments.length > 3 && void 0 !== arguments[3]
              ? arguments[3]
              : void 0,
          o = !0 === n;
        return (
          (r = o ? r : n),
          u(
            u(
              u({}, t ? { type: t } : {}),
              o
                ? { required: o }
                : Object(s.o)(e)
                ? {}
                : {
                    default: Object(s.j)(e)
                      ? function () {
                          return e;
                        }
                      : e,
                  }
            ),
            Object(s.o)(r) ? {} : { validator: r }
          )
        );
      },
      g = function (t) {
        var e =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a.a;
        if (Object(s.a)(t)) return t.map(e);
        var n = {};
        for (var i in t)
          Object(l.g)(t, i) &&
            (n[e(i)] = Object(s.j)(t[i]) ? Object(l.b)(t[i]) : t[i]);
        return n;
      },
      v = function (t, e) {
        var n =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : a.a;
        return (Object(s.a)(t) ? t.slice() : Object(l.h)(t)).reduce(function (
          t,
          i
        ) {
          return (t[n(i)] = e[i]), t;
        },
        {});
      },
      _ = function (t, e, n) {
        return u(
          u({}, Object(r.a)(t)),
          {},
          {
            default: function () {
              var i = Object(o.c)(n, e, t.default);
              return Object(s.f)(i) ? i() : i;
            },
          }
        );
      },
      y = function (t, e) {
        return Object(l.h)(t).reduce(function (n, i) {
          return u(u({}, n), {}, p({}, i, _(t[i], i, e)));
        }, {});
      },
      M = _({}, "", "").default.name,
      O = function (t) {
        return Object(s.f)(t) && t.name && t.name !== M;
      };
  },
  function (t, e, n) {
    "use strict";
    n.d(e, "a", function () {
      return i;
    }),
      n.d(e, "b", function () {
        return r;
      }),
      n.d(e, "g", function () {
        return o;
      }),
      n.d(e, "l", function () {
        return s;
      }),
      n.d(e, "n", function () {
        return l;
      }),
      n.d(e, "q", function () {
        return c;
      }),
      n.d(e, "t", function () {
        return d;
      }),
      n.d(e, "u", function () {
        return u;
      }),
      n.d(e, "c", function () {
        return p;
      }),
      n.d(e, "d", function () {
        return h;
      }),
      n.d(e, "e", function () {
        return f;
      }),
      n.d(e, "f", function () {
        return b;
      }),
      n.d(e, "h", function () {
        return m;
      }),
      n.d(e, "i", function () {
        return g;
      }),
      n.d(e, "j", function () {
        return v;
      }),
      n.d(e, "k", function () {
        return _;
      }),
      n.d(e, "m", function () {
        return y;
      }),
      n.d(e, "p", function () {
        return M;
      }),
      n.d(e, "o", function () {
        return O;
      }),
      n.d(e, "r", function () {
        return w;
      }),
      n.d(e, "s", function () {
        return A;
      });
    var i = void 0,
      r = Array,
      o = Boolean,
      a = Date,
      s = Function,
      l = Number,
      c = Object,
      d = RegExp,
      u = String,
      p = [r, s],
      h = [r, c],
      f = [r, c, u],
      b = [r, u],
      m = [o, l],
      g = [o, l, u],
      v = [o, u],
      _ = [a, u],
      y = [s, u],
      M = [l, u],
      O = [l, c, u],
      w = [c, s],
      A = [c, u];
  },
  function (t, e, n) {
    "use strict";
    n.d(e, "a", function () {
      return i;
    }),
      n.d(e, "b", function () {
        return r;
      }),
      n.d(e, "c", function () {
        return o;
      }),
      n.d(e, "d", function () {
        return a;
      }),
      n.d(e, "e", function () {
        return s;
      }),
      n.d(e, "f", function () {
        return l;
      }),
      n.d(e, "g", function () {
        return c;
      }),
      n.d(e, "h", function () {
        return d;
      }),
      n.d(e, "i", function () {
        return u;
      }),
      n.d(e, "j", function () {
        return p;
      }),
      n.d(e, "k", function () {
        return h;
      }),
      n.d(e, "l", function () {
        return f;
      }),
      n.d(e, "m", function () {
        return b;
      }),
      n.d(e, "n", function () {
        return m;
      }),
      n.d(e, "o", function () {
        return g;
      }),
      n.d(e, "p", function () {
        return v;
      }),
      n.d(e, "q", function () {
        return _;
      }),
      n.d(e, "r", function () {
        return y;
      }),
      n.d(e, "s", function () {
        return M;
      }),
      n.d(e, "t", function () {
        return O;
      }),
      n.d(e, "u", function () {
        return w;
      }),
      n.d(e, "v", function () {
        return A;
      }),
      n.d(e, "w", function () {
        return x;
      }),
      n.d(e, "x", function () {
        return z;
      }),
      n.d(e, "y", function () {
        return C;
      }),
      n.d(e, "z", function () {
        return k;
      }),
      n.d(e, "A", function () {
        return S;
      }),
      n.d(e, "C", function () {
        return T;
      }),
      n.d(e, "D", function () {
        return D;
      }),
      n.d(e, "E", function () {
        return L;
      }),
      n.d(e, "F", function () {
        return q;
      }),
      n.d(e, "G", function () {
        return E;
      }),
      n.d(e, "H", function () {
        return j;
      }),
      n.d(e, "I", function () {
        return P;
      }),
      n.d(e, "J", function () {
        return R;
      }),
      n.d(e, "K", function () {
        return I;
      }),
      n.d(e, "L", function () {
        return W;
      }),
      n.d(e, "M", function () {
        return N;
      }),
      n.d(e, "O", function () {
        return B;
      }),
      n.d(e, "P", function () {
        return F;
      }),
      n.d(e, "Q", function () {
        return $;
      }),
      n.d(e, "R", function () {
        return H;
      }),
      n.d(e, "S", function () {
        return Y;
      }),
      n.d(e, "T", function () {
        return U;
      }),
      n.d(e, "U", function () {
        return X;
      }),
      n.d(e, "V", function () {
        return V;
      }),
      n.d(e, "W", function () {
        return G;
      }),
      n.d(e, "X", function () {
        return K;
      }),
      n.d(e, "Y", function () {
        return Z;
      }),
      n.d(e, "ab", function () {
        return J;
      }),
      n.d(e, "bb", function () {
        return Q;
      }),
      n.d(e, "cb", function () {
        return tt;
      }),
      n.d(e, "db", function () {
        return et;
      }),
      n.d(e, "eb", function () {
        return nt;
      }),
      n.d(e, "fb", function () {
        return it;
      }),
      n.d(e, "gb", function () {
        return rt;
      }),
      n.d(e, "hb", function () {
        return ot;
      }),
      n.d(e, "ib", function () {
        return at;
      }),
      n.d(e, "jb", function () {
        return st;
      }),
      n.d(e, "kb", function () {
        return lt;
      }),
      n.d(e, "lb", function () {
        return ct;
      }),
      n.d(e, "mb", function () {
        return dt;
      }),
      n.d(e, "nb", function () {
        return ut;
      }),
      n.d(e, "ob", function () {
        return pt;
      }),
      n.d(e, "pb", function () {
        return ht;
      }),
      n.d(e, "qb", function () {
        return ft;
      }),
      n.d(e, "rb", function () {
        return bt;
      }),
      n.d(e, "sb", function () {
        return mt;
      }),
      n.d(e, "tb", function () {
        return gt;
      }),
      n.d(e, "ub", function () {
        return vt;
      }),
      n.d(e, "vb", function () {
        return _t;
      }),
      n.d(e, "wb", function () {
        return yt;
      }),
      n.d(e, "xb", function () {
        return Mt;
      }),
      n.d(e, "yb", function () {
        return Ot;
      }),
      n.d(e, "zb", function () {
        return wt;
      }),
      n.d(e, "Ab", function () {
        return At;
      }),
      n.d(e, "Bb", function () {
        return xt;
      }),
      n.d(e, "Cb", function () {
        return zt;
      }),
      n.d(e, "Db", function () {
        return Ct;
      }),
      n.d(e, "Eb", function () {
        return kt;
      }),
      n.d(e, "Fb", function () {
        return St;
      }),
      n.d(e, "Gb", function () {
        return Tt;
      }),
      n.d(e, "Hb", function () {
        return Dt;
      }),
      n.d(e, "Ib", function () {
        return Lt;
      }),
      n.d(e, "Jb", function () {
        return qt;
      }),
      n.d(e, "Kb", function () {
        return Et;
      }),
      n.d(e, "Lb", function () {
        return jt;
      }),
      n.d(e, "Mb", function () {
        return Pt;
      }),
      n.d(e, "Nb", function () {
        return Rt;
      }),
      n.d(e, "Ob", function () {
        return It;
      }),
      n.d(e, "Pb", function () {
        return Wt;
      }),
      n.d(e, "Tb", function () {
        return Nt;
      }),
      n.d(e, "Ub", function () {
        return Bt;
      }),
      n.d(e, "Vb", function () {
        return Ft;
      }),
      n.d(e, "Wb", function () {
        return $t;
      }),
      n.d(e, "Xb", function () {
        return Ht;
      }),
      n.d(e, "Yb", function () {
        return Yt;
      }),
      n.d(e, "Zb", function () {
        return Ut;
      }),
      n.d(e, "ac", function () {
        return Xt;
      }),
      n.d(e, "bc", function () {
        return Vt;
      }),
      n.d(e, "cc", function () {
        return Gt;
      }),
      n.d(e, "dc", function () {
        return Kt;
      }),
      n.d(e, "ec", function () {
        return Zt;
      }),
      n.d(e, "fc", function () {
        return Jt;
      }),
      n.d(e, "gc", function () {
        return Qt;
      }),
      n.d(e, "hc", function () {
        return te;
      }),
      n.d(e, "ic", function () {
        return ee;
      }),
      n.d(e, "kc", function () {
        return ne;
      }),
      n.d(e, "lc", function () {
        return ie;
      }),
      n.d(e, "mc", function () {
        return re;
      }),
      n.d(e, "nc", function () {
        return oe;
      }),
      n.d(e, "oc", function () {
        return ae;
      }),
      n.d(e, "pc", function () {
        return se;
      }),
      n.d(e, "qc", function () {
        return le;
      }),
      n.d(e, "sc", function () {
        return ce;
      }),
      n.d(e, "vc", function () {
        return de;
      }),
      n.d(e, "B", function () {
        return ue;
      }),
      n.d(e, "N", function () {
        return pe;
      }),
      n.d(e, "Z", function () {
        return he;
      }),
      n.d(e, "Qb", function () {
        return fe;
      }),
      n.d(e, "Rb", function () {
        return be;
      }),
      n.d(e, "Sb", function () {
        return me;
      }),
      n.d(e, "jc", function () {
        return ge;
      }),
      n.d(e, "rc", function () {
        return ve;
      }),
      n.d(e, "tc", function () {
        return _e;
      }),
      n.d(e, "uc", function () {
        return ye;
      }),
      n.d(e, "wc", function () {
        return Me;
      }),
      n.d(e, "xc", function () {
        return Oe;
      }),
      n.d(e, "yc", function () {
        return we;
      });
    var i = "BAlert",
      r = "BAspect",
      o = "BAvatar",
      a = "BAvatarGroup",
      s = "BBadge",
      l = "BBreadcrumb",
      c = "BBreadcrumbItem",
      d = "BBreadcrumbLink",
      u = "BButton",
      p = "BButtonClose",
      h = "BButtonGroup",
      f = "BButtonToolbar",
      b = "BCalendar",
      m = "BCard",
      g = "BCardBody",
      v = "BCardFooter",
      _ = "BCardGroup",
      y = "BCardHeader",
      M = "BCardImg",
      O = "BCardImgLazy",
      w = "BCardSubTitle",
      A = "BCardText",
      x = "BCardTitle",
      z = "BCarousel",
      C = "BCarouselSlide",
      k = "BCol",
      S = "BCollapse",
      T = "BContainer",
      D = "BDropdown",
      L = "BDropdownDivider",
      q = "BDropdownForm",
      E = "BDropdownGroup",
      j = "BDropdownHeader",
      P = "BDropdownItem",
      R = "BDropdownItemButton",
      I = "BDropdownText",
      W = "BEmbed",
      N = "BForm",
      B = "BFormCheckbox",
      F = "BFormCheckboxGroup",
      $ = "BFormDatalist",
      H = "BFormDatepicker",
      Y = "BFormFile",
      U = "BFormGroup",
      X = "BFormInput",
      V = "BFormInvalidFeedback",
      G = "BFormRadio",
      K = "BFormRadioGroup",
      Z = "BFormRating",
      J = "BFormRow",
      Q = "BFormSelect",
      tt = "BFormSelectOption",
      et = "BFormSelectOptionGroup",
      nt = "BFormSpinbutton",
      it = "BFormTag",
      rt = "BFormTags",
      ot = "BFormText",
      at = "BFormTextarea",
      st = "BFormTimepicker",
      lt = "BFormValidFeedback",
      ct = "BIcon",
      dt = "BIconBase",
      ut = "BImg",
      pt = "BImgLazy",
      ht = "BInputGroup",
      ft = "BInputGroupAddon",
      bt = "BInputGroupAppend",
      mt = "BInputGroupPrepend",
      gt = "BInputGroupText",
      vt = "BJumbotron",
      _t = "BLink",
      yt = "BListGroup",
      Mt = "BListGroupItem",
      Ot = "BMedia",
      wt = "BMediaAside",
      At = "BMediaBody",
      xt = "BModal",
      zt = "BMsgBox",
      Ct = "BNav",
      kt = "BNavbar",
      St = "BNavbarBrand",
      Tt = "BNavbarNav",
      Dt = "BNavbarToggle",
      Lt = "BNavForm",
      qt = "BNavItem",
      Et = "BNavItemDropdown",
      jt = "BNavText",
      Pt = "BOverlay",
      Rt = "BPagination",
      It = "BPaginationNav",
      Wt = "BPopover",
      Nt = "BProgress",
      Bt = "BProgressBar",
      Ft = "BRow",
      $t = "BSidebar",
      Ht = "BSkeleton",
      Yt = "BSkeletonIcon",
      Ut = "BSkeletonImg",
      Xt = "BSkeletonTable",
      Vt = "BSkeletonWrapper",
      Gt = "BSpinner",
      Kt = "BTab",
      Zt = "BTable",
      Jt = "BTableCell",
      Qt = "BTableLite",
      te = "BTableSimple",
      ee = "BTabs",
      ne = "BTbody",
      ie = "BTfoot",
      re = "BTh",
      oe = "BThead",
      ae = "BTime",
      se = "BToast",
      le = "BToaster",
      ce = "BTooltip",
      de = "BTr",
      ue = "BVCollapse",
      pe = "BVFormBtnLabelControl",
      he = "BVFormRatingStar",
      fe = "BVPopover",
      be = "BVPopoverTemplate",
      me = "BVPopper",
      ge = "BVTabButton",
      ve = "BVToastPop",
      _e = "BVTooltip",
      ye = "BVTooltipTemplate",
      Me = "BVTransition",
      Oe = "BVTransporter",
      we = "BVTransporterTarget";
  },
  function (t, e, n) {
    "use strict";
    n.d(e, "D", function () {
      return h;
    }),
      n.d(e, "a", function () {
        return f;
      }),
      n.d(e, "B", function () {
        return b;
      }),
      n.d(e, "s", function () {
        return m;
      }),
      n.d(e, "g", function () {
        return g;
      }),
      n.d(e, "t", function () {
        return v;
      }),
      n.d(e, "q", function () {
        return _;
      }),
      n.d(e, "u", function () {
        return y;
      }),
      n.d(e, "r", function () {
        return M;
      }),
      n.d(e, "y", function () {
        return O;
      }),
      n.d(e, "F", function () {
        return w;
      }),
      n.d(e, "E", function () {
        return A;
      }),
      n.d(e, "v", function () {
        return x;
      }),
      n.d(e, "e", function () {
        return z;
      }),
      n.d(e, "f", function () {
        return C;
      }),
      n.d(e, "j", function () {
        return k;
      }),
      n.d(e, "b", function () {
        return S;
      }),
      n.d(e, "A", function () {
        return T;
      }),
      n.d(e, "p", function () {
        return D;
      }),
      n.d(e, "G", function () {
        return L;
      }),
      n.d(e, "z", function () {
        return q;
      }),
      n.d(e, "h", function () {
        return E;
      }),
      n.d(e, "o", function () {
        return j;
      }),
      n.d(e, "H", function () {
        return P;
      }),
      n.d(e, "C", function () {
        return R;
      }),
      n.d(e, "m", function () {
        return I;
      }),
      n.d(e, "i", function () {
        return W;
      }),
      n.d(e, "k", function () {
        return N;
      }),
      n.d(e, "l", function () {
        return B;
      }),
      n.d(e, "w", function () {
        return F;
      }),
      n.d(e, "x", function () {
        return $;
      }),
      n.d(e, "n", function () {
        return H;
      }),
      n.d(e, "d", function () {
        return Y;
      }),
      n.d(e, "c", function () {
        return U;
      });
    var i = n(20),
      r = n(42),
      o = n(14),
      a = n(5),
      s = n(13),
      l = n(18),
      c = r.a.prototype,
      d = [
        "button",
        "[href]:not(.disabled)",
        "input",
        "select",
        "textarea",
        "[tabindex]",
        "[contenteditable]",
      ]
        .map(function (t) {
          return "".concat(t, ":not(:disabled):not([disabled])");
        })
        .join(", "),
      u = c.matches || c.msMatchesSelector || c.webkitMatchesSelector,
      p =
        c.closest ||
        function (t) {
          var e = this;
          do {
            if (x(e, t)) return e;
            e = e.parentElement || e.parentNode;
          } while (!Object(a.g)(e) && e.nodeType === Node.ELEMENT_NODE);
          return null;
        },
      h = (
        i.k.requestAnimationFrame ||
        i.k.webkitRequestAnimationFrame ||
        i.k.mozRequestAnimationFrame ||
        i.k.msRequestAnimationFrame ||
        i.k.oRequestAnimationFrame ||
        function (t) {
          return setTimeout(t, 16);
        }
      ).bind(i.k),
      f =
        i.k.MutationObserver ||
        i.k.WebKitMutationObserver ||
        i.k.MozMutationObserver ||
        null,
      b = function (t) {
        return t && t.parentNode && t.parentNode.removeChild(t);
      },
      m = function (t) {
        return !(!t || t.nodeType !== Node.ELEMENT_NODE);
      },
      g = function () {
        var t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
          e = i.a.activeElement;
        return e &&
          !t.some(function (t) {
            return t === e;
          })
          ? e
          : null;
      },
      v = function (t, e) {
        return Object(l.g)(t).toLowerCase() === Object(l.g)(e).toLowerCase();
      },
      _ = function (t) {
        return m(t) && t === g();
      },
      y = function (t) {
        if (!m(t) || !t.parentNode || !C(i.a.body, t)) return !1;
        if ("none" === I(t, "display")) return !1;
        var e = W(t);
        return !!(e && e.height > 0 && e.width > 0);
      },
      M = function (t) {
        return !m(t) || t.disabled || j(t, "disabled") || D(t, "disabled");
      },
      O = function (t) {
        return m(t) && t.offsetHeight;
      },
      w = function (t, e) {
        return Object(o.f)((m(e) ? e : i.a).querySelectorAll(t));
      },
      A = function (t, e) {
        return (m(e) ? e : i.a).querySelector(t) || null;
      },
      x = function (t, e) {
        return !!m(t) && u.call(t, e);
      },
      z = function (t, e) {
        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (!m(e)) return null;
        var i = p.call(e, t);
        return n ? i : i === e ? null : i;
      },
      C = function (t, e) {
        return !(!t || !Object(a.f)(t.contains)) && t.contains(e);
      },
      k = function (t) {
        return i.a.getElementById(/^#/.test(t) ? t.slice(1) : t) || null;
      },
      S = function (t, e) {
        e && m(t) && t.classList && t.classList.add(e);
      },
      T = function (t, e) {
        e && m(t) && t.classList && t.classList.remove(e);
      },
      D = function (t, e) {
        return !!(e && m(t) && t.classList) && t.classList.contains(e);
      },
      L = function (t, e, n) {
        e && m(t) && t.setAttribute(e, n);
      },
      q = function (t, e) {
        e && m(t) && t.removeAttribute(e);
      },
      E = function (t, e) {
        return e && m(t) ? t.getAttribute(e) : null;
      },
      j = function (t, e) {
        return e && m(t) ? t.hasAttribute(e) : null;
      },
      P = function (t, e, n) {
        e && m(t) && (t.style[e] = n);
      },
      R = function (t, e) {
        e && m(t) && (t.style[e] = "");
      },
      I = function (t, e) {
        return (e && m(t) && t.style[e]) || null;
      },
      W = function (t) {
        return m(t) ? t.getBoundingClientRect() : null;
      },
      N = function (t) {
        var e = i.k.getComputedStyle;
        return e && m(t) ? e(t) : {};
      },
      B = function () {
        return i.k.getSelection ? i.k.getSelection() : null;
      },
      F = function (t) {
        var e = { top: 0, left: 0 };
        if (!m(t) || 0 === t.getClientRects().length) return e;
        var n = W(t);
        if (n) {
          var i = t.ownerDocument.defaultView;
          (e.top = n.top + i.pageYOffset), (e.left = n.left + i.pageXOffset);
        }
        return e;
      },
      $ = function (t) {
        var e = { top: 0, left: 0 };
        if (!m(t)) return e;
        var n = { top: 0, left: 0 },
          i = N(t);
        if ("fixed" === i.position) e = W(t) || e;
        else {
          e = F(t);
          for (
            var r = t.ownerDocument, o = t.offsetParent || r.documentElement;
            o &&
            (o === r.body || o === r.documentElement) &&
            "static" === N(o).position;

          )
            o = o.parentNode;
          if (o && o !== t && o.nodeType === Node.ELEMENT_NODE) {
            n = F(o);
            var a = N(o);
            (n.top += Object(s.b)(a.borderTopWidth, 0)),
              (n.left += Object(s.b)(a.borderLeftWidth, 0));
          }
        }
        return {
          top: e.top - n.top - Object(s.b)(i.marginTop, 0),
          left: e.left - n.left - Object(s.b)(i.marginLeft, 0),
        };
      },
      H = function () {
        var t =
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : document;
        return w(d, t)
          .filter(y)
          .filter(function (t) {
            return t.tabIndex > -1 && !t.disabled;
          });
      },
      Y = function (t) {
        var e =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        try {
          t.focus(e);
        } catch (t) {}
        return _(t);
      },
      U = function (t) {
        try {
          t.blur();
        } catch (t) {}
        return !_(t);
      };
  },
  function (t, e, n) {
    "use strict";
    n.d(e, "b", function () {
      return p;
    }),
      n.d(e, "a", function () {
        return d;
      }),
      n.d(e, "d", function () {
        return u;
      }),
      n.d(e, "e", function () {
        return _;
      }),
      n.d(e, "c", function () {
        return f;
      });
    var i = n(34),
      r = n.n(i);
    function o(t, e) {
      var n = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(t);
        e &&
          (i = i.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          n.push.apply(n, i);
      }
      return n;
    }
    function a(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? o(Object(n), !0).forEach(function (e) {
              s(t, e, n[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
          : o(Object(n)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(n, e)
              );
            });
      }
      return t;
    }
    function s(t, e, n) {
      return (
        e in t
          ? Object.defineProperty(t, e, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (t[e] = n),
        t
      );
    }
    function l(t, e) {
      if (null == t) return {};
      var n,
        i,
        r = (function (t, e) {
          if (null == t) return {};
          var n,
            i,
            r = {},
            o = Object.keys(t);
          for (i = 0; i < o.length; i++)
            (n = o[i]), e.indexOf(n) >= 0 || (r[n] = t[n]);
          return r;
        })(t, e);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(t);
        for (i = 0; i < o.length; i++)
          (n = o[i]),
            e.indexOf(n) >= 0 ||
              (Object.prototype.propertyIsEnumerable.call(t, n) &&
                (r[n] = t[n]));
      }
      return r;
    }
    function c(t) {
      return (c =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            })(t);
    }
    n(92);
    var d = "_uid",
      u = r.a.version.startsWith("3"),
      p = u ? "ref_for" : "refInFor",
      h = [
        "class",
        "staticClass",
        "style",
        "attrs",
        "props",
        "domProps",
        "on",
        "nativeOn",
        "directives",
        "scopedSlots",
        "slot",
        "key",
        "ref",
        "refInFor",
      ],
      f = r.a.extend.bind(r.a);
    if (u) {
      var b = r.a.extend,
        m = ["router-link", "transition", "transition-group"],
        g = r.a.vModelDynamic.created,
        v = r.a.vModelDynamic.beforeUpdate;
      (r.a.vModelDynamic.created = function (t, e, n) {
        g.call(this, t, e, n), t._assign || (t._assign = function () {});
      }),
        (r.a.vModelDynamic.beforeUpdate = function (t, e, n) {
          v.call(this, t, e, n), t._assign || (t._assign = function () {});
        }),
        (f = function (t) {
          if ("object" === c(t) && t.render && !t.__alreadyPatched) {
            var e = t.render;
            (t.__alreadyPatched = !0),
              (t.render = function (n) {
                var i = function (t, e, i) {
                  var r =
                      void 0 === i
                        ? []
                        : [Array.isArray(i) ? i.filter(Boolean) : i],
                    o = "string" == typeof t && !m.includes(t);
                  if (!e || "object" !== c(e) || Array.isArray(e))
                    return n.apply(void 0, [t, e].concat(r));
                  var s = e.attrs,
                    d = e.props,
                    u = a(
                      a({}, l(e, ["attrs", "props"])),
                      {},
                      { attrs: s, props: o ? {} : d }
                    );
                  return (
                    "router-link" !== t ||
                      u.slots ||
                      u.scopedSlots ||
                      (u.scopedSlots = { $hasNormal: function () {} }),
                    n.apply(void 0, [t, u].concat(r))
                  );
                };
                if (t.functional) {
                  var r,
                    o,
                    s = arguments[1],
                    d = a({}, s);
                  (d.data = {
                    attrs: a({}, s.data.attrs || {}),
                    props: a({}, s.data.props || {}),
                  }),
                    Object.keys(s.data || {}).forEach(function (t) {
                      h.includes(t)
                        ? (d.data[t] = s.data[t])
                        : t in s.props
                        ? (d.data.props[t] = s.data[t])
                        : t.startsWith("on") || (d.data.attrs[t] = s.data[t]);
                    });
                  var u = ["_ctx"],
                    p =
                      (null === (r = s.children) ||
                      void 0 === r ||
                      null === (o = r.default) ||
                      void 0 === o
                        ? void 0
                        : o.call(r)) || s.children;
                  return (
                    p &&
                    0 ===
                      Object.keys(d.children).filter(function (t) {
                        return !u.includes(t);
                      }).length
                      ? delete d.children
                      : (d.children = p),
                    (d.data.on = s.listeners),
                    e.call(this, i, d)
                  );
                }
                return e.call(this, i);
              });
          }
          return b.call(this, t);
        }.bind(r.a));
    }
    var _ = r.a.nextTick;
  },
  function (t, e, n) {
    "use strict";
    n.d(e, "o", function () {
      return s;
    }),
      n.d(e, "g", function () {
        return l;
      }),
      n.d(e, "p", function () {
        return c;
      }),
      n.d(e, "f", function () {
        return d;
      }),
      n.d(e, "b", function () {
        return u;
      }),
      n.d(e, "n", function () {
        return p;
      }),
      n.d(e, "h", function () {
        return h;
      }),
      n.d(e, "i", function () {
        return f;
      }),
      n.d(e, "a", function () {
        return b;
      }),
      n.d(e, "j", function () {
        return m;
      }),
      n.d(e, "k", function () {
        return g;
      }),
      n.d(e, "c", function () {
        return v;
      }),
      n.d(e, "d", function () {
        return _;
      }),
      n.d(e, "e", function () {
        return y;
      }),
      n.d(e, "m", function () {
        return M;
      }),
      n.d(e, "l", function () {
        return O;
      });
    var i = n(25),
      r = n(42);
    function o(t) {
      return (o =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            })(t);
    }
    var a = function (t) {
        return o(t);
      },
      s = function (t) {
        return void 0 === t;
      },
      l = function (t) {
        return null === t;
      },
      c = function (t) {
        return s(t) || l(t);
      },
      d = function (t) {
        return "function" === a(t);
      },
      u = function (t) {
        return "boolean" === a(t);
      },
      p = function (t) {
        return "string" === a(t);
      },
      h = function (t) {
        return "number" === a(t);
      },
      f = function (t) {
        return i.s.test(String(t));
      },
      b = function (t) {
        return Array.isArray(t);
      },
      m = function (t) {
        return null !== t && "object" === o(t);
      },
      g = function (t) {
        return "[object Object]" === Object.prototype.toString.call(t);
      },
      v = function (t) {
        return t instanceof Date;
      },
      _ = function (t) {
        return t instanceof Event;
      },
      y = function (t) {
        return t instanceof r.b;
      },
      M = function (t) {
        return (
          "RegExp" ===
          (function (t) {
            return Object.prototype.toString.call(t).slice(8, -1);
          })(t)
        );
      },
      O = function (t) {
        return !c(t) && d(t.then) && d(t.catch);
      };
  },
  function (t, e, n) {
    "use strict";
    n.d(e, "a", function () {
      return r;
    }),
      n.d(e, "b", function () {
        return o;
      }),
      n.d(e, "c", function () {
        return a;
      }),
      n.d(e, "d", function () {
        return s;
      }),
      n.d(e, "e", function () {
        return l;
      }),
      n.d(e, "f", function () {
        return c;
      }),
      n.d(e, "g", function () {
        return d;
      }),
      n.d(e, "h", function () {
        return u;
      }),
      n.d(e, "i", function () {
        return p;
      }),
      n.d(e, "j", function () {
        return h;
      }),
      n.d(e, "k", function () {
        return f;
      }),
      n.d(e, "l", function () {
        return b;
      }),
      n.d(e, "m", function () {
        return m;
      }),
      n.d(e, "n", function () {
        return g;
      }),
      n.d(e, "o", function () {
        return v;
      }),
      n.d(e, "p", function () {
        return _;
      }),
      n.d(e, "q", function () {
        return y;
      }),
      n.d(e, "r", function () {
        return M;
      }),
      n.d(e, "s", function () {
        return O;
      }),
      n.d(e, "t", function () {
        return w;
      }),
      n.d(e, "u", function () {
        return A;
      }),
      n.d(e, "v", function () {
        return x;
      }),
      n.d(e, "w", function () {
        return z;
      }),
      n.d(e, "x", function () {
        return C;
      }),
      n.d(e, "y", function () {
        return k;
      }),
      n.d(e, "z", function () {
        return S;
      }),
      n.d(e, "A", function () {
        return T;
      }),
      n.d(e, "B", function () {
        return D;
      }),
      n.d(e, "C", function () {
        return L;
      }),
      n.d(e, "D", function () {
        return q;
      }),
      n.d(e, "E", function () {
        return E;
      }),
      n.d(e, "F", function () {
        return j;
      }),
      n.d(e, "G", function () {
        return P;
      }),
      n.d(e, "H", function () {
        return R;
      }),
      n.d(e, "I", function () {
        return I;
      }),
      n.d(e, "J", function () {
        return W;
      }),
      n.d(e, "K", function () {
        return N;
      }),
      n.d(e, "L", function () {
        return B;
      }),
      n.d(e, "M", function () {
        return F;
      }),
      n.d(e, "N", function () {
        return $;
      }),
      n.d(e, "O", function () {
        return H;
      }),
      n.d(e, "P", function () {
        return Y;
      }),
      n.d(e, "Q", function () {
        return U;
      }),
      n.d(e, "R", function () {
        return X;
      }),
      n.d(e, "S", function () {
        return V;
      }),
      n.d(e, "T", function () {
        return G;
      }),
      n.d(e, "U", function () {
        return K;
      }),
      n.d(e, "V", function () {
        return Z;
      }),
      n.d(e, "W", function () {
        return J;
      }),
      n.d(e, "X", function () {
        return Q;
      }),
      n.d(e, "Y", function () {
        return tt;
      }),
      n.d(e, "Z", function () {
        return et;
      }),
      n.d(e, "ab", function () {
        return nt;
      }),
      n.d(e, "bb", function () {
        return it;
      }),
      n.d(e, "cb", function () {
        return rt;
      }),
      n.d(e, "fb", function () {
        return ot;
      }),
      n.d(e, "gb", function () {
        return at;
      }),
      n.d(e, "hb", function () {
        return st;
      }),
      n.d(e, "ib", function () {
        return lt;
      }),
      n.d(e, "jb", function () {
        return ct;
      }),
      n.d(e, "eb", function () {
        return dt;
      }),
      n.d(e, "db", function () {
        return ut;
      });
    var i = n(4),
      r = "activate-tab",
      o = "blur",
      a = "cancel",
      s = "change",
      l = "changed",
      c = "click",
      d = "close",
      u = "context",
      p = "context-changed",
      h = "destroyed",
      f = "disable",
      b = "disabled",
      m = "dismissed",
      g = "dismiss-count-down",
      v = "enable",
      _ = "enabled",
      y = "filtered",
      M = "first",
      O = "focus",
      w = "focusin",
      A = "focusout",
      x = "head-clicked",
      z = "hidden",
      C = "hide",
      k = "img-error",
      S = "input",
      T = "last",
      D = "mouseenter",
      L = "mouseleave",
      q = "next",
      E = "ok",
      j = "open",
      P = "page-click",
      R = "paused",
      I = "prev",
      W = "refresh",
      N = "refreshed",
      B = "remove",
      F = "row-clicked",
      $ = "row-contextmenu",
      H = "row-dblclicked",
      Y = "row-hovered",
      U = "row-middle-clicked",
      X = "row-selected",
      V = "row-unhovered",
      G = "selected",
      K = "show",
      Z = "shown",
      J = "sliding-end",
      Q = "sliding-start",
      tt = "sort-changed",
      et = "tag-state",
      nt = "toggle",
      it = "unpaused",
      rt = "update",
      ot = i.d ? "vnodeBeforeUnmount" : "hook:beforeDestroy",
      at = i.d ? "vNodeUnmounted" : "hook:destroyed",
      st = "update:",
      lt = "bv",
      ct = "::",
      dt = { passive: !0 },
      ut = { passive: !0, capture: !1 };
  },
  function (t, e, n) {
    "use strict";
    n.d(e, "a", function () {
      return s;
    }),
      n.d(e, "c", function () {
        return l;
      }),
      n.d(e, "d", function () {
        return c;
      }),
      n.d(e, "e", function () {
        return d;
      }),
      n.d(e, "f", function () {
        return u;
      }),
      n.d(e, "h", function () {
        return p;
      }),
      n.d(e, "g", function () {
        return h;
      }),
      n.d(e, "n", function () {
        return f;
      }),
      n.d(e, "b", function () {
        return b;
      }),
      n.d(e, "k", function () {
        return m;
      }),
      n.d(e, "j", function () {
        return g;
      }),
      n.d(e, "i", function () {
        return v;
      }),
      n.d(e, "m", function () {
        return _;
      }),
      n.d(e, "l", function () {
        return y;
      });
    var i = n(5);
    function r(t, e) {
      var n = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(t);
        e &&
          (i = i.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          n.push.apply(n, i);
      }
      return n;
    }
    function o(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? r(Object(n), !0).forEach(function (e) {
              a(t, e, n[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
          : r(Object(n)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(n, e)
              );
            });
      }
      return t;
    }
    function a(t, e, n) {
      return (
        e in t
          ? Object.defineProperty(t, e, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (t[e] = n),
        t
      );
    }
    var s = function () {
        return Object.assign.apply(Object, arguments);
      },
      l = function (t, e) {
        return Object.create(t, e);
      },
      c = function (t, e) {
        return Object.defineProperties(t, e);
      },
      d = function (t, e, n) {
        return Object.defineProperty(t, e, n);
      },
      u = function (t) {
        return Object.getOwnPropertyNames(t);
      },
      p = function (t) {
        return Object.keys(t);
      },
      h = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      },
      f = function (t) {
        return Object.prototype.toString.call(t);
      },
      b = function (t) {
        return o({}, t);
      },
      m = function (t, e) {
        return p(t)
          .filter(function (t) {
            return -1 !== e.indexOf(t);
          })
          .reduce(function (e, n) {
            return o(o({}, e), {}, a({}, n, t[n]));
          }, {});
      },
      g = function (t, e) {
        return p(t)
          .filter(function (t) {
            return -1 === e.indexOf(t);
          })
          .reduce(function (e, n) {
            return o(o({}, e), {}, a({}, n, t[n]));
          }, {});
      },
      v = function t(e, n) {
        return (
          Object(i.j)(e) &&
            Object(i.j)(n) &&
            p(n).forEach(function (r) {
              Object(i.j)(n[r])
                ? ((e[r] && Object(i.j)(e[r])) || (e[r] = n[r]), t(e[r], n[r]))
                : s(e, a({}, r, n[r]));
            }),
          e
        );
      },
      _ = function (t) {
        return p(t)
          .sort()
          .reduce(function (e, n) {
            return o(o({}, e), {}, a({}, n, t[n]));
          }, {});
      },
      y = function () {
        return { enumerable: !0, configurable: !1, writable: !1 };
      };
  },
  function (t, e, n) {
    "use strict";
    n.d(e, "b", function () {
      return i;
    }),
      n.d(e, "a", function () {
        return r;
      }),
      window.location.origin;
    var i = function (t) {
        var e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        n &&
          ((window.ajaxurl = window.ajaxData.ajaxurl),
          (window.request_data = window.ajaxData));
        var i = ajaxurl;
        return (
          void 0 === e.action && (i = ajaxurl + "?action=ajax_post"),
          void 0 !== t &&
            (void 0 !== e.append
              ? (e.append("route_name", t),
                e.append("_ajax_nonce", request_data.nonce))
              : ((e.route_name = t), (e._ajax_nonce = request_data.nonce)),
            new Promise(function (t, n, r) {
              axios
                .post(i, e, r)
                .then(function (e) {
                  void 0 !== e.data.status_code &&
                    403 === e.data.status_code &&
                    (displayErrorMessage(e.data.message),
                    vm.$router.push({ name: "403" })),
                    t(e);
                })
                .catch(function (t) {
                  n(t);
                });
            }))
        );
      },
      r = function (t) {
        var e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        n &&
          ((window.ajaxurl = window.ajaxData.ajaxurl),
          (window.request_data = window.ajaxData)),
          (e._ajax_nonce = window.request_data.get_nonce);
        var i = ajaxurl;
        return (
          void 0 === e.action && (i = ajaxurl + "?action=ajax_get"),
          void 0 !== t &&
            ((i = i + "&route_name=" + t),
            new Promise(function (t, n) {
              axios
                .get(i, { params: e })
                .then(function (e) {
                  void 0 !== e.data.status_code &&
                    403 === e.data.status_code &&
                    (displayErrorMessage(e.data.message),
                    vm.$router.push({ name: "403" })),
                    t(e);
                })
                .catch(function (t) {
                  n(t);
                });
            }))
        );
      };
  },
  function (t, e, n) {
    "use strict";
    function i(t) {
      return (i =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            })(t);
    }
    Object.defineProperty(e, "__esModule", { value: !0 }),
      Object.defineProperty(e, "alpha", {
        enumerable: !0,
        get: function () {
          return r.default;
        },
      }),
      Object.defineProperty(e, "alphaNum", {
        enumerable: !0,
        get: function () {
          return o.default;
        },
      }),
      Object.defineProperty(e, "and", {
        enumerable: !0,
        get: function () {
          return _.default;
        },
      }),
      Object.defineProperty(e, "between", {
        enumerable: !0,
        get: function () {
          return s.default;
        },
      }),
      Object.defineProperty(e, "decimal", {
        enumerable: !0,
        get: function () {
          return A.default;
        },
      }),
      Object.defineProperty(e, "email", {
        enumerable: !0,
        get: function () {
          return l.default;
        },
      }),
      (e.helpers = void 0),
      Object.defineProperty(e, "integer", {
        enumerable: !0,
        get: function () {
          return w.default;
        },
      }),
      Object.defineProperty(e, "ipAddress", {
        enumerable: !0,
        get: function () {
          return c.default;
        },
      }),
      Object.defineProperty(e, "macAddress", {
        enumerable: !0,
        get: function () {
          return d.default;
        },
      }),
      Object.defineProperty(e, "maxLength", {
        enumerable: !0,
        get: function () {
          return u.default;
        },
      }),
      Object.defineProperty(e, "maxValue", {
        enumerable: !0,
        get: function () {
          return O.default;
        },
      }),
      Object.defineProperty(e, "minLength", {
        enumerable: !0,
        get: function () {
          return p.default;
        },
      }),
      Object.defineProperty(e, "minValue", {
        enumerable: !0,
        get: function () {
          return M.default;
        },
      }),
      Object.defineProperty(e, "not", {
        enumerable: !0,
        get: function () {
          return y.default;
        },
      }),
      Object.defineProperty(e, "numeric", {
        enumerable: !0,
        get: function () {
          return a.default;
        },
      }),
      Object.defineProperty(e, "or", {
        enumerable: !0,
        get: function () {
          return v.default;
        },
      }),
      Object.defineProperty(e, "required", {
        enumerable: !0,
        get: function () {
          return h.default;
        },
      }),
      Object.defineProperty(e, "requiredIf", {
        enumerable: !0,
        get: function () {
          return f.default;
        },
      }),
      Object.defineProperty(e, "requiredUnless", {
        enumerable: !0,
        get: function () {
          return b.default;
        },
      }),
      Object.defineProperty(e, "sameAs", {
        enumerable: !0,
        get: function () {
          return m.default;
        },
      }),
      Object.defineProperty(e, "url", {
        enumerable: !0,
        get: function () {
          return g.default;
        },
      });
    var r = C(n(490)),
      o = C(n(493)),
      a = C(n(494)),
      s = C(n(495)),
      l = C(n(496)),
      c = C(n(497)),
      d = C(n(498)),
      u = C(n(499)),
      p = C(n(500)),
      h = C(n(501)),
      f = C(n(502)),
      b = C(n(503)),
      m = C(n(504)),
      g = C(n(505)),
      v = C(n(506)),
      _ = C(n(507)),
      y = C(n(508)),
      M = C(n(509)),
      O = C(n(510)),
      w = C(n(511)),
      A = C(n(512)),
      x = (function (t, e) {
        if (t && t.__esModule) return t;
        if (null === t || ("object" !== i(t) && "function" != typeof t))
          return { default: t };
        var n = z(void 0);
        if (n && n.has(t)) return n.get(t);
        var r = {},
          o = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var a in t)
          if ("default" !== a && Object.prototype.hasOwnProperty.call(t, a)) {
            var s = o ? Object.getOwnPropertyDescriptor(t, a) : null;
            s && (s.get || s.set)
              ? Object.defineProperty(r, a, s)
              : (r[a] = t[a]);
          }
        return (r.default = t), n && n.set(t, r), r;
      })(n(39));
    function z(t) {
      if ("function" != typeof WeakMap) return null;
      var e = new WeakMap(),
        n = new WeakMap();
      return (z = function (t) {
        return t ? n : e;
      })(t);
    }
    function C(t) {
      return t && t.__esModule ? t : { default: t };
    }
    e.helpers = x;
  },
  function (t, e, n) {
    "use strict";
    n.d(e, "a", function () {
      return er;
    }),
      n.d(e, "b", function () {
        return Un;
      }),
      n.d(e, "c", function () {
        return Xn;
      }),
      n.d(e, "d", function () {
        return Si;
      }),
      n.d(e, "e", function () {
        return vr;
      }),
      n.d(e, "f", function () {
        return _r;
      }),
      n.d(e, "g", function () {
        return yr;
      }),
      n.d(e, "h", function () {
        return pr;
      }),
      n.d(e, "i", function () {
        return Nn;
      }),
      n.d(e, "j", function () {
        return jn;
      }),
      n.d(e, "k", function () {
        return We;
      }),
      n.d(e, "l", function () {
        return cr;
      }),
      n.d(e, "m", function () {
        return ur;
      }),
      n.d(e, "n", function () {
        return Gi;
      }),
      n.d(e, "o", function () {
        return In;
      }),
      n.d(e, "p", function () {
        return Fn;
      }),
      n.d(e, "q", function () {
        return Wn;
      }),
      n.d(e, "r", function () {
        return Mr;
      }),
      n.d(e, "s", function () {
        return Tn;
      }),
      n.d(e, "t", function () {
        return lr;
      }),
      n.d(e, "u", function () {
        return Bn;
      }),
      n.d(e, "v", function () {
        return U;
      }),
      n.d(e, "w", function () {
        return X;
      }),
      n.d(e, "x", function () {
        return Y;
      }),
      n.d(e, "y", function () {
        return Dt;
      }),
      n.d(e, "z", function () {
        return St;
      }),
      n.d(e, "A", function () {
        return c;
      }),
      n.d(e, "B", function () {
        return Ze;
      }),
      n.d(e, "C", function () {
        return O;
      }),
      n.d(e, "D", function () {
        return w;
      }),
      n.d(e, "E", function () {
        return bt;
      }),
      n.d(e, "F", function () {
        return gt;
      }),
      n.d(e, "G", function () {
        return mt;
      }),
      n.d(e, "H", function () {
        return Ln;
      }),
      n.d(e, "I", function () {
        return vn;
      }),
      n.d(e, "J", function () {
        return qt;
      }),
      n.d(e, "K", function () {
        return It;
      }),
      n.d(e, "L", function () {
        return yt;
      }),
      n.d(e, "M", function () {
        return W;
      }),
      n.d(e, "N", function () {
        return q;
      }),
      n.d(e, "O", function () {
        return Ve;
      }),
      n.d(e, "P", function () {
        return Ke;
      }),
      n.d(e, "Q", function () {
        return Ge;
      }),
      n.d(e, "R", function () {
        return mr;
      }),
      n.d(e, "S", function () {
        return P;
      }),
      n.d(e, "T", function () {
        return E;
      }),
      n.d(e, "U", function () {
        return j;
      }),
      n.d(e, "V", function () {
        return Yt;
      }),
      n.d(e, "W", function () {
        return oi;
      }),
      n.d(e, "X", function () {
        return C;
      }),
      n.d(e, "Y", function () {
        return lt;
      }),
      n.d(e, "Z", function () {
        return o;
      }),
      n.d(e, "ab", function () {
        return ce;
      }),
      n.d(e, "bb", function () {
        return xn;
      }),
      n.d(e, "cb", function () {
        return Ee;
      }),
      n.d(e, "db", function () {
        return Gn;
      }),
      n.d(e, "eb", function () {
        return pn;
      }),
      n.d(e, "fb", function () {
        return Ft;
      }),
      n.d(e, "gb", function () {
        return Ut;
      }),
      n.d(e, "hb", function () {
        return S;
      }),
      n.d(e, "ib", function () {
        return V;
      }),
      n.d(e, "jb", function () {
        return K;
      }),
      n.d(e, "kb", function () {
        return Ot;
      }),
      n.d(e, "lb", function () {
        return At;
      }),
      n.d(e, "mb", function () {
        return m;
      }),
      n.d(e, "nb", function () {
        return g;
      }),
      n.d(e, "ob", function () {
        return wt;
      }),
      n.d(e, "pb", function () {
        return oe;
      }),
      n.d(e, "qb", function () {
        return Qt;
      }),
      n.d(e, "rb", function () {
        return _;
      }),
      n.d(e, "sb", function () {
        return v;
      }),
      n.d(e, "tb", function () {
        return jt;
      }),
      n.d(e, "ub", function () {
        return y;
      }),
      n.d(e, "vb", function () {
        return I;
      }),
      n.d(e, "wb", function () {
        return qn;
      }),
      n.d(e, "xb", function () {
        return $e;
      }),
      n.d(e, "yb", function () {
        return k;
      }),
      n.d(e, "zb", function () {
        return se;
      }),
      n.d(e, "Ab", function () {
        return ai;
      }),
      n.d(e, "Bb", function () {
        return _t;
      }),
      n.d(e, "Cb", function () {
        return un;
      }),
      n.d(e, "Db", function () {
        return a;
      }),
      n.d(e, "Eb", function () {
        return u;
      }),
      n.d(e, "Fb", function () {
        return Zi;
      }),
      n.d(e, "Gb", function () {
        return Ki;
      }),
      n.d(e, "Hb", function () {
        return be;
      }),
      n.d(e, "Ib", function () {
        return x;
      }),
      n.d(e, "Jb", function () {
        return ye;
      }),
      n.d(e, "Kb", function () {
        return Ri;
      }),
      n.d(e, "Lb", function () {
        return Wt;
      }),
      n.d(e, "Mb", function () {
        return rn;
      }),
      n.d(e, "Nb", function () {
        return ie;
      }),
      n.d(e, "Ob", function () {
        return an;
      }),
      n.d(e, "Pb", function () {
        return pt;
      }),
      n.d(e, "Qb", function () {
        return rt;
      }),
      n.d(e, "Rb", function () {
        return B;
      }),
      n.d(e, "Sb", function () {
        return te;
      }),
      n.d(e, "Tb", function () {
        return zt;
      }),
      n.d(e, "Ub", function () {
        return Me;
      }),
      n.d(e, "Vb", function () {
        return Oe;
      }),
      n.d(e, "Wb", function () {
        return kn;
      }),
      n.d(e, "Xb", function () {
        return de;
      }),
      n.d(e, "Yb", function () {
        return ht;
      }),
      n.d(e, "Zb", function () {
        return Rt;
      }),
      n.d(e, "ac", function () {
        return Cn;
      }),
      n.d(e, "bc", function () {
        return br;
      }),
      n.d(e, "cc", function () {
        return An;
      }),
      n.d(e, "dc", function () {
        return Lt;
      }),
      n.d(e, "ec", function () {
        return A;
      }),
      n.d(e, "fc", function () {
        return d;
      }),
      n.d(e, "gc", function () {
        return Tt;
      }),
      n.d(e, "hc", function () {
        return N;
      }),
      n.d(e, "ic", function () {
        return kt;
      }),
      n.d(e, "jc", function () {
        return mn;
      }),
      n.d(e, "kc", function () {
        return _e;
      }),
      n.d(e, "lc", function () {
        return ve;
      }),
      n.d(e, "mc", function () {
        return me;
      }),
      n.d(e, "nc", function () {
        return ge;
      }),
      n.d(e, "oc", function () {
        return $t;
      }),
      n.d(e, "pc", function () {
        return h;
      }),
      n.d(e, "qc", function () {
        return gr;
      }),
      n.d(e, "rc", function () {
        return Qn;
      }),
      n.d(e, "sc", function () {
        return Z;
      }),
      n.d(e, "tc", function () {
        return Ct;
      }),
      n.d(e, "uc", function () {
        return z;
      }),
      n.d(e, "vc", function () {
        return Mt;
      }),
      n.d(e, "wc", function () {
        return xt;
      }),
      n.d(e, "xc", function () {
        return En;
      }),
      n.d(e, "yc", function () {
        return $;
      }),
      n.d(e, "zc", function () {
        return vt;
      });
    var i = { className: !0, colSpan: !0, rowSpan: !0 },
      r = { "<tr": "tbody", "<td": "tr" };
    function o(t, e, n) {
      var r = document.createElement(t);
      if (e)
        for (var o in e)
          "style" === o
            ? O(r, e[o])
            : i[o]
            ? (r[o] = e[o])
            : r.setAttribute(o, e[o]);
      return "string" == typeof n ? (r.innerHTML = n) : null != n && c(r, n), r;
    }
    function a(t) {
      t = t.trim();
      var e = document.createElement(l(t));
      return (e.innerHTML = t), e.firstChild;
    }
    function s(t) {
      return Array.prototype.slice.call(
        (function (t) {
          t = t.trim();
          var e = document.createElement(l(t));
          return (e.innerHTML = t), e.childNodes;
        })(t)
      );
    }
    function l(t) {
      return r[t.substr(0, 3)] || "div";
    }
    function c(t, e) {
      for (var n = p(e), i = 0; i < n.length; i++) t.appendChild(n[i]);
    }
    function d(t, e) {
      for (var n = p(e), i = t.firstChild || null, r = 0; r < n.length; r++)
        t.insertBefore(n[r], i);
    }
    function u(t, e) {
      for (var n = p(e), i = t.nextSibling || null, r = 0; r < n.length; r++)
        t.parentNode.insertBefore(n[r], i);
    }
    function p(t) {
      return "string" == typeof t
        ? s(t)
        : t instanceof Node
        ? [t]
        : Array.prototype.slice.call(t);
    }
    function h(t) {
      t.parentNode && t.parentNode.removeChild(t);
    }
    var f =
        Element.prototype.matches ||
        Element.prototype.matchesSelector ||
        Element.prototype.msMatchesSelector,
      b =
        Element.prototype.closest ||
        function (t) {
          var e = this;
          if (!document.documentElement.contains(e)) return null;
          do {
            if (g(e, t)) return e;
            e = e.parentElement || e.parentNode;
          } while (null !== e && 1 === e.nodeType);
          return null;
        };
    function m(t, e) {
      return b.call(t, e);
    }
    function g(t, e) {
      return f.call(t, e);
    }
    function v(t, e) {
      for (
        var n = t instanceof HTMLElement ? [t] : t, i = [], r = 0;
        r < n.length;
        r++
      )
        for (var o = n[r].querySelectorAll(e), a = 0; a < o.length; a++)
          i.push(o[a]);
      return i;
    }
    function _(t, e) {
      for (
        var n = t instanceof HTMLElement ? [t] : t, i = [], r = 0;
        r < n.length;
        r++
      )
        for (var o = n[r].children, a = 0; a < o.length; a++) {
          var s = o[a];
          (e && !g(s, e)) || i.push(s);
        }
      return i;
    }
    function y(t, e, n) {
      n ? t.classList.add(e) : t.classList.remove(e);
    }
    var M = /(top|left|right|bottom|width|height)$/i;
    function O(t, e) {
      for (var n in e) w(t, n, e[n]);
    }
    function w(t, e, n) {
      null == n
        ? (t.style[e] = "")
        : "number" == typeof n && M.test(e)
        ? (t.style[e] = n + "px")
        : (t.style[e] = n);
    }
    function A(t, e) {
      return (
        t.left >= e.left &&
        t.left < e.right &&
        t.top >= e.top &&
        t.top < e.bottom
      );
    }
    function x(t, e) {
      var n = {
        left: Math.max(t.left, e.left),
        right: Math.min(t.right, e.right),
        top: Math.max(t.top, e.top),
        bottom: Math.min(t.bottom, e.bottom),
      };
      return n.left < n.right && n.top < n.bottom && n;
    }
    function z(t, e, n) {
      return {
        left: t.left + e,
        right: t.right + e,
        top: t.top + n,
        bottom: t.bottom + n,
      };
    }
    function C(t, e) {
      return {
        left: Math.min(Math.max(t.left, e.left), e.right),
        top: Math.min(Math.max(t.top, e.top), e.bottom),
      };
    }
    function k(t) {
      return { left: (t.left + t.right) / 2, top: (t.top + t.bottom) / 2 };
    }
    function S(t, e) {
      return { left: t.left - e.left, top: t.top - e.top };
    }
    var T = null;
    function D() {
      return (
        null === T &&
          (T = (function () {
            var t = o(
              "div",
              {
                style: {
                  position: "absolute",
                  top: -1e3,
                  left: 0,
                  border: 0,
                  padding: 0,
                  overflow: "scroll",
                  direction: "rtl",
                },
              },
              "<div></div>"
            );
            document.body.appendChild(t);
            var e =
              t.firstChild.getBoundingClientRect().left >
              t.getBoundingClientRect().left;
            return h(t), e;
          })()),
        T
      );
    }
    function L(t) {
      return (t = Math.max(0, t)), (t = Math.round(t));
    }
    function q(t, e) {
      void 0 === e && (e = !1);
      var n = window.getComputedStyle(t),
        i = parseInt(n.borderLeftWidth, 10) || 0,
        r = parseInt(n.borderRightWidth, 10) || 0,
        o = parseInt(n.borderTopWidth, 10) || 0,
        a = parseInt(n.borderBottomWidth, 10) || 0,
        s = L(t.offsetWidth - t.clientWidth - i - r),
        l = {
          borderLeft: i,
          borderRight: r,
          borderTop: o,
          borderBottom: a,
          scrollbarBottom: L(t.offsetHeight - t.clientHeight - o - a),
          scrollbarLeft: 0,
          scrollbarRight: 0,
        };
      return (
        D() && "rtl" === n.direction
          ? (l.scrollbarLeft = s)
          : (l.scrollbarRight = s),
        e &&
          ((l.paddingLeft = parseInt(n.paddingLeft, 10) || 0),
          (l.paddingRight = parseInt(n.paddingRight, 10) || 0),
          (l.paddingTop = parseInt(n.paddingTop, 10) || 0),
          (l.paddingBottom = parseInt(n.paddingBottom, 10) || 0)),
        l
      );
    }
    function E(t, e) {
      void 0 === e && (e = !1);
      var n = j(t),
        i = q(t, e),
        r = {
          left: n.left + i.borderLeft + i.scrollbarLeft,
          right: n.right - i.borderRight - i.scrollbarRight,
          top: n.top + i.borderTop,
          bottom: n.bottom - i.borderBottom - i.scrollbarBottom,
        };
      return (
        e &&
          ((r.left += i.paddingLeft),
          (r.right -= i.paddingRight),
          (r.top += i.paddingTop),
          (r.bottom -= i.paddingBottom)),
        r
      );
    }
    function j(t) {
      var e = t.getBoundingClientRect();
      return {
        left: e.left + window.pageXOffset,
        top: e.top + window.pageYOffset,
        right: e.right + window.pageXOffset,
        bottom: e.bottom + window.pageYOffset,
      };
    }
    function P(t) {
      return t.getBoundingClientRect().height + R(t);
    }
    function R(t) {
      var e = window.getComputedStyle(t);
      return parseInt(e.marginTop, 10) + parseInt(e.marginBottom, 10);
    }
    function I(t) {
      for (var e = []; t instanceof HTMLElement; ) {
        var n = window.getComputedStyle(t);
        if ("fixed" === n.position) break;
        /(auto|scroll)/.test(n.overflow + n.overflowY + n.overflowX) &&
          e.push(t),
          (t = t.parentNode);
      }
      return e;
    }
    function W(t) {
      return I(t)
        .map(function (t) {
          return E(t);
        })
        .concat({
          left: window.pageXOffset,
          right: window.pageXOffset + document.documentElement.clientWidth,
          top: window.pageYOffset,
          bottom: window.pageYOffset + document.documentElement.clientHeight,
        })
        .reduce(function (t, e) {
          return x(t, e) || e;
        });
    }
    function N(t) {
      t.preventDefault();
    }
    function B(t, e, n, i) {
      function r(t) {
        var e = m(t.target, n);
        e && i.call(e, t, e);
      }
      return (
        t.addEventListener(e, r),
        function () {
          t.removeEventListener(e, r);
        }
      );
    }
    var F = [
      "webkitTransitionEnd",
      "otransitionend",
      "oTransitionEnd",
      "msTransitionEnd",
      "transitionend",
    ];
    function $(t, e) {
      var n = function (i) {
        e(i),
          F.forEach(function (e) {
            t.removeEventListener(e, n);
          });
      };
      F.forEach(function (e) {
        t.addEventListener(e, n);
      });
    }
    var H = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
    function Y(t, e) {
      var n = nt(t);
      return (n[2] += 7 * e), it(n);
    }
    function U(t, e) {
      var n = nt(t);
      return (n[2] += e), it(n);
    }
    function X(t, e) {
      var n = nt(t);
      return (n[6] += e), it(n);
    }
    function V(t, e) {
      return G(t, e) / 7;
    }
    function G(t, e) {
      return (e.valueOf() - t.valueOf()) / 864e5;
    }
    function K(t, e) {
      return ot(t) === ot(e) ? Math.round(G(t, e)) : null;
    }
    function Z(t) {
      return it([t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate()]);
    }
    function J(t, e, n, i) {
      var r = it([e, 0, 1 + Q(e, n, i)]),
        o = Z(t),
        a = Math.round(G(r, o));
      return Math.floor(a / 7) + 1;
    }
    function Q(t, e, n) {
      var i = 7 + e - n;
      return (-(7 + it([t, 0, i]).getUTCDay() - e) % 7) + i - 1;
    }
    function tt(t) {
      return [
        t.getFullYear(),
        t.getMonth(),
        t.getDate(),
        t.getHours(),
        t.getMinutes(),
        t.getSeconds(),
        t.getMilliseconds(),
      ];
    }
    function et(t) {
      return new Date(
        t[0],
        t[1] || 0,
        null == t[2] ? 1 : t[2],
        t[3] || 0,
        t[4] || 0,
        t[5] || 0
      );
    }
    function nt(t) {
      return [
        t.getUTCFullYear(),
        t.getUTCMonth(),
        t.getUTCDate(),
        t.getUTCHours(),
        t.getUTCMinutes(),
        t.getUTCSeconds(),
        t.getUTCMilliseconds(),
      ];
    }
    function it(t) {
      return (
        1 === t.length && (t = t.concat([0])), new Date(Date.UTC.apply(Date, t))
      );
    }
    function rt(t) {
      return !isNaN(t.valueOf());
    }
    function ot(t) {
      return (
        1e3 * t.getUTCHours() * 60 * 60 +
        1e3 * t.getUTCMinutes() * 60 +
        1e3 * t.getUTCSeconds() +
        t.getUTCMilliseconds()
      );
    }
    var at = ["years", "months", "days", "milliseconds"],
      st = /^(-?)(?:(\d+)\.)?(\d+):(\d\d)(?::(\d\d)(?:\.(\d\d\d))?)?/;
    function lt(t, e) {
      var n;
      return "string" == typeof t
        ? (function (t) {
            var e = st.exec(t);
            if (e) {
              var n = e[1] ? -1 : 1;
              return {
                years: 0,
                months: 0,
                days: n * (e[2] ? parseInt(e[2], 10) : 0),
                milliseconds:
                  n *
                  (60 * (e[3] ? parseInt(e[3], 10) : 0) * 60 * 1e3 +
                    60 * (e[4] ? parseInt(e[4], 10) : 0) * 1e3 +
                    1e3 * (e[5] ? parseInt(e[5], 10) : 0) +
                    (e[6] ? parseInt(e[6], 10) : 0)),
              };
            }
            return null;
          })(t)
        : "object" == typeof t && t
        ? ct(t)
        : "number" == typeof t
        ? ct((((n = {})[e || "milliseconds"] = t), n))
        : null;
    }
    function ct(t) {
      return {
        years: t.years || t.year || 0,
        months: t.months || t.month || 0,
        days: (t.days || t.day || 0) + 7 * dt(t),
        milliseconds:
          60 * (t.hours || t.hour || 0) * 60 * 1e3 +
          60 * (t.minutes || t.minute || 0) * 1e3 +
          1e3 * (t.seconds || t.second || 0) +
          (t.milliseconds || t.millisecond || t.ms || 0),
      };
    }
    function dt(t) {
      return t.weeks || t.week || 0;
    }
    function ut(t, e) {
      return (
        t.years === e.years &&
        t.months === e.months &&
        t.days === e.days &&
        t.milliseconds === e.milliseconds
      );
    }
    function pt(t) {
      return (
        0 === t.years && 0 === t.months && 1 === t.days && 0 === t.milliseconds
      );
    }
    function ht(t, e) {
      return {
        years: t.years * e,
        months: t.months * e,
        days: t.days * e,
        milliseconds: t.milliseconds * e,
      };
    }
    function ft(t) {
      return gt(t) / 864e5;
    }
    function bt(t) {
      return gt(t) / 6e4;
    }
    function mt(t) {
      return gt(t) / 1e3;
    }
    function gt(t) {
      return (
        31536e6 * t.years + 2592e6 * t.months + 864e5 * t.days + t.milliseconds
      );
    }
    function vt(t, e) {
      for (var n = null, i = 0; i < at.length; i++) {
        var r = at[i];
        if (e[r]) {
          var o = t[r] / e[r];
          if (!Wt(o) || (null !== n && n !== o)) return null;
          n = o;
        } else if (t[r]) return null;
      }
      return n;
    }
    function _t(t, e) {
      var n = t.milliseconds;
      if (n) {
        if (n % 1e3 != 0) return { unit: "millisecond", value: n };
        if (n % 6e4 != 0) return { unit: "second", value: n / 1e3 };
        if (n % 36e5 != 0) return { unit: "minute", value: n / 6e4 };
        if (n) return { unit: "hour", value: n / 36e5 };
      }
      return t.days
        ? e || t.days % 7 != 0
          ? { unit: "day", value: t.days }
          : { unit: "week", value: t.days / 7 }
        : t.months
        ? { unit: "month", value: t.months }
        : t.years
        ? { unit: "year", value: t.years }
        : { unit: "millisecond", value: 0 };
    }
    function yt(t, e) {
      e.left && O(t, { borderLeftWidth: 1, marginLeft: e.left - 1 }),
        e.right && O(t, { borderRightWidth: 1, marginRight: e.right - 1 });
    }
    function Mt(t) {
      O(t, {
        marginLeft: "",
        marginRight: "",
        borderLeftWidth: "",
        borderRightWidth: "",
      });
    }
    function Ot() {
      document.body.classList.add("fc-not-allowed");
    }
    function wt() {
      document.body.classList.remove("fc-not-allowed");
    }
    function At(t, e, n) {
      var i = Math.floor(e / t.length),
        r = Math.floor(e - i * (t.length - 1)),
        o = [],
        a = [],
        s = [],
        l = 0;
      xt(t),
        t.forEach(function (e, n) {
          var c = n === t.length - 1 ? r : i,
            d = e.getBoundingClientRect().height,
            u = d + R(e);
          u < c ? (o.push(e), a.push(u), s.push(d)) : (l += u);
        }),
        n &&
          ((e -= l),
          (i = Math.floor(e / o.length)),
          (r = Math.floor(e - i * (o.length - 1)))),
        o.forEach(function (t, e) {
          var n = e === o.length - 1 ? r : i,
            l = a[e],
            c = n - (l - s[e]);
          l < n && (t.style.height = c + "px");
        });
    }
    function xt(t) {
      t.forEach(function (t) {
        t.style.height = "";
      });
    }
    function zt(t) {
      var e = 0;
      return (
        t.forEach(function (t) {
          var n = t.firstChild;
          if (n instanceof HTMLElement) {
            var i = n.getBoundingClientRect().width;
            i > e && (e = i);
          }
        }),
        e++,
        t.forEach(function (t) {
          t.style.width = e + "px";
        }),
        e
      );
    }
    function Ct(t, e) {
      var n = { position: "relative", left: -1 };
      O(t, n), O(e, n);
      var i =
          t.getBoundingClientRect().height - e.getBoundingClientRect().height,
        r = { position: "", left: "" };
      return O(t, r), O(e, r), i;
    }
    function kt(t) {
      t.classList.add("fc-unselectable"), t.addEventListener("selectstart", N);
    }
    function St(t) {
      t.classList.remove("fc-unselectable"),
        t.removeEventListener("selectstart", N);
    }
    function Tt(t) {
      t.addEventListener("contextmenu", N);
    }
    function Dt(t) {
      t.removeEventListener("contextmenu", N);
    }
    function Lt(t) {
      var e,
        n,
        i = [],
        r = [];
      for (
        "string" == typeof t
          ? (r = t.split(/\s*,\s*/))
          : "function" == typeof t
          ? (r = [t])
          : Array.isArray(t) && (r = t),
          e = 0;
        e < r.length;
        e++
      )
        "string" == typeof (n = r[e])
          ? i.push(
              "-" === n.charAt(0)
                ? { field: n.substring(1), order: -1 }
                : { field: n, order: 1 }
            )
          : "function" == typeof n && i.push({ func: n });
      return i;
    }
    function qt(t, e, n) {
      var i, r;
      for (i = 0; i < n.length; i++) if ((r = Et(t, e, n[i]))) return r;
      return 0;
    }
    function Et(t, e, n) {
      return n.func
        ? n.func(t, e)
        : jt(t[n.field], e[n.field]) * (n.order || 1);
    }
    function jt(t, e) {
      return t || e
        ? null == e
          ? -1
          : null == t
          ? 1
          : "string" == typeof t || "string" == typeof e
          ? String(t).localeCompare(String(e))
          : t - e
        : 0;
    }
    function Pt(t) {
      return t.charAt(0).toUpperCase() + t.slice(1);
    }
    function Rt(t, e) {
      var n = String(t);
      return "000".substr(0, e - n.length) + n;
    }
    function It(t, e) {
      return t - e;
    }
    function Wt(t) {
      return t % 1 == 0;
    }
    function Nt(t, e, n) {
      if (("function" == typeof t && (t = [t]), t)) {
        var i = void 0,
          r = void 0;
        for (i = 0; i < t.length; i++) r = t[i].apply(e, n) || r;
        return r;
      }
    }
    function Bt() {
      for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
      for (var n = 0; n < t.length; n++) if (void 0 !== t[n]) return t[n];
    }
    function Ft(t, e) {
      var n,
        i,
        r,
        o,
        a,
        s = function () {
          var l = new Date().valueOf() - o;
          l < e
            ? (n = setTimeout(s, e - l))
            : ((n = null), (a = t.apply(r, i)), (r = i = null));
        };
      return function () {
        return (
          (r = this),
          (i = arguments),
          (o = new Date().valueOf()),
          n || (n = setTimeout(s, e)),
          a
        );
      };
    }
    function $t(t, e, n, i) {
      void 0 === n && (n = {});
      var r = {};
      for (var o in e) {
        var a = e[o];
        void 0 !== t[o]
          ? (r[o] =
              a === Function
                ? "function" == typeof t[o]
                  ? t[o]
                  : null
                : a
                ? a(t[o])
                : t[o])
          : void 0 !== n[o]
          ? (r[o] = n[o])
          : a === String
          ? (r[o] = "")
          : a && a !== Number && a !== Boolean && a !== Function
          ? (r[o] = a(null))
          : (r[o] = null);
      }
      if (i) for (var o in t) void 0 === e[o] && (i[o] = t[o]);
      return r;
    }
    function Ht(t) {
      var e = Math.floor(G(t.start, t.end)) || 1,
        n = Z(t.start);
      return { start: n, end: U(n, e) };
    }
    function Yt(t, e) {
      void 0 === e && (e = lt(0));
      var n = null,
        i = null;
      if (t.end) {
        i = Z(t.end);
        var r = t.end.valueOf() - i.valueOf();
        r && r >= gt(e) && (i = U(i, 1));
      }
      return (
        t.start && ((n = Z(t.start)), i && i <= n && (i = U(n, 1))),
        { start: n, end: i }
      );
    }
    function Ut(t, e, n, i) {
      return "year" === i
        ? lt(n.diffWholeYears(t, e), "year")
        : "month" === i
        ? lt(n.diffWholeMonths(t, e), "month")
        : ((o = e),
          (a = Z((r = t))),
          (s = Z(o)),
          {
            years: 0,
            months: 0,
            days: Math.round(G(a, s)),
            milliseconds:
              o.valueOf() - s.valueOf() - (r.valueOf() - a.valueOf()),
          });
      var r, o, a, s;
    }
    var Xt = function (t, e) {
      return (Xt =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (t, e) {
            t.__proto__ = e;
          }) ||
        function (t, e) {
          for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
        })(t, e);
    };
    function Vt(t, e) {
      function n() {
        this.constructor = t;
      }
      Xt(t, e),
        (t.prototype =
          null === e
            ? Object.create(e)
            : ((n.prototype = e.prototype), new n()));
    }
    var Gt = function () {
      return (Gt =
        Object.assign ||
        function (t) {
          for (var e, n = 1, i = arguments.length; n < i; n++)
            for (var r in (e = arguments[n]))
              Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
          return t;
        }).apply(this, arguments);
    };
    function Kt(t, e, n, i, r) {
      var o = r[t.recurringDef.typeId].expand(
        t.recurringDef.typeData,
        { start: i.subtract(n.start, e), end: n.end },
        i
      );
      return t.allDay && (o = o.map(Z)), o;
    }
    var Zt = Object.prototype.hasOwnProperty;
    function Jt(t, e) {
      var n,
        i,
        r,
        o,
        a,
        s,
        l = {};
      if (e)
        for (n = 0; n < e.length; n++) {
          for (i = e[n], r = [], o = t.length - 1; o >= 0; o--)
            if ("object" == typeof (a = t[o][i]) && a) r.unshift(a);
            else if (void 0 !== a) {
              l[i] = a;
              break;
            }
          r.length && (l[i] = Jt(r));
        }
      for (n = t.length - 1; n >= 0; n--)
        for (i in (s = t[n])) i in l || (l[i] = s[i]);
      return l;
    }
    function Qt(t, e) {
      var n = {};
      for (var i in t) e(t[i], i) && (n[i] = t[i]);
      return n;
    }
    function te(t, e) {
      var n = {};
      for (var i in t) n[i] = e(t[i], i);
      return n;
    }
    function ee(t) {
      for (var e = {}, n = 0, i = t; n < i.length; n++) e[i[n]] = !0;
      return e;
    }
    function ne(t) {
      var e = [];
      for (var n in t) e.push(t[n]);
      return e;
    }
    function ie(t, e) {
      for (var n in t) if (Zt.call(t, n) && !(n in e)) return !1;
      for (var n in e) if (Zt.call(e, n) && t[n] !== e[n]) return !1;
      return !0;
    }
    function re(t, e, n, i) {
      for (
        var r = { defs: {}, instances: {} }, o = 0, a = t;
        o < a.length;
        o++
      ) {
        var s = wn(a[o], e, n, i);
        s && oe(s, r);
      }
      return r;
    }
    function oe(t, e) {
      return (
        void 0 === e && (e = { defs: {}, instances: {} }),
        (e.defs[t.def.defId] = t.def),
        t.instance && (e.instances[t.instance.instanceId] = t.instance),
        e
      );
    }
    function ae(t, e, n) {
      var i = n.dateEnv,
        r = t.defs,
        o = t.instances;
      for (var a in ((o = Qt(o, function (t) {
        return !r[t.defId].recurringDef;
      })),
      r)) {
        var s = r[a];
        if (s.recurringDef) {
          var l = s.recurringDef.duration;
          l ||
            (l = s.allDay
              ? n.defaultAllDayEventDuration
              : n.defaultTimedEventDuration);
          for (
            var c = 0,
              d = Kt(s, l, e, n.dateEnv, n.pluginSystem.hooks.recurringTypes);
            c < d.length;
            c++
          ) {
            var u = d[c],
              p = xn(a, { start: u, end: i.add(u, l) });
            o[p.instanceId] = p;
          }
        }
      }
      return { defs: r, instances: o };
    }
    function se(t, e) {
      var n = t.instances[e];
      if (n) {
        var i = t.defs[n.defId],
          r = ue(t, function (t) {
            return (
              (e = i), (n = t), Boolean(e.groupId && e.groupId === n.groupId)
            );
            var e, n;
          });
        return (r.defs[i.defId] = i), (r.instances[n.instanceId] = n), r;
      }
      return { defs: {}, instances: {} };
    }
    function le(t, e) {
      var n;
      if (e) {
        n = [];
        for (var i = 0, r = t; i < r.length; i++) {
          var o = r[i],
            a = e(o);
          a ? n.push(a) : null == a && n.push(o);
        }
      } else n = t;
      return n;
    }
    function ce() {
      return { defs: {}, instances: {} };
    }
    function de(t, e) {
      return {
        defs: Gt({}, t.defs, e.defs),
        instances: Gt({}, t.instances, e.instances),
      };
    }
    function ue(t, e) {
      var n = Qt(t.defs, e),
        i = Qt(t.instances, function (t) {
          return n[t.defId];
        });
      return { defs: n, instances: i };
    }
    function pe(t, e) {
      var n = null,
        i = null;
      return (
        t.start && (n = e.createMarker(t.start)),
        t.end && (i = e.createMarker(t.end)),
        n || i ? (n && i && i < n ? null : { start: n, end: i }) : null
      );
    }
    function he(t, e) {
      var n,
        i,
        r = [],
        o = e.start;
      for (t.sort(fe), n = 0; n < t.length; n++)
        (i = t[n]).start > o && r.push({ start: o, end: i.start }),
          i.end > o && (o = i.end);
      return o < e.end && r.push({ start: o, end: e.end }), r;
    }
    function fe(t, e) {
      return t.start.valueOf() - e.start.valueOf();
    }
    function be(t, e) {
      var n = t.start,
        i = t.end,
        r = null;
      return (
        null !== e.start &&
          (n =
            null === n
              ? e.start
              : new Date(Math.max(n.valueOf(), e.start.valueOf()))),
        null != e.end &&
          (i =
            null === i
              ? e.end
              : new Date(Math.min(i.valueOf(), e.end.valueOf()))),
        (null === n || null === i || n < i) && (r = { start: n, end: i }),
        r
      );
    }
    function me(t, e) {
      return (
        (null === t.start ? null : t.start.valueOf()) ===
          (null === e.start ? null : e.start.valueOf()) &&
        (null === t.end ? null : t.end.valueOf()) ===
          (null === e.end ? null : e.end.valueOf())
      );
    }
    function ge(t, e) {
      return (
        (null === t.end || null === e.start || t.end > e.start) &&
        (null === t.start || null === e.end || t.start < e.end)
      );
    }
    function ve(t, e) {
      return (
        (null === t.start || (null !== e.start && e.start >= t.start)) &&
        (null === t.end || (null !== e.end && e.end <= t.end))
      );
    }
    function _e(t, e) {
      return (
        (null === t.start || e >= t.start) && (null === t.end || e < t.end)
      );
    }
    function ye(t, e) {
      var n,
        i = t.length;
      if (i !== e.length) return !1;
      for (n = 0; n < i; n++) if (t[n] !== e[n]) return !1;
      return !0;
    }
    function Me(t) {
      var e, n;
      return function () {
        return (
          (e && ye(e, arguments)) ||
            ((e = arguments), (n = t.apply(this, arguments))),
          n
        );
      };
    }
    function Oe(t, e) {
      var n = null;
      return function () {
        var i = t.apply(this, arguments);
        return (null === n || (n !== i && !e(n, i))) && (n = i), n;
      };
    }
    var we = {
        week: 3,
        separator: 0,
        omitZeroMinute: 0,
        meridiem: 0,
        omitCommas: 0,
      },
      Ae = {
        timeZoneName: 7,
        era: 6,
        year: 5,
        month: 4,
        day: 2,
        weekday: 2,
        hour: 1,
        minute: 1,
        second: 1,
      },
      xe = /\s*([ap])\.?m\.?/i,
      ze = /,/g,
      Ce = /\s+/g,
      ke = /\u200e/g,
      Se = /UTC|GMT/,
      Te = (function () {
        function t(t) {
          var e = {},
            n = {},
            i = 0;
          for (var r in t)
            r in we
              ? ((n[r] = t[r]), (i = Math.max(we[r], i)))
              : ((e[r] = t[r]), r in Ae && (i = Math.max(Ae[r], i)));
          (this.standardDateProps = e),
            (this.extendedSettings = n),
            (this.severity = i),
            (this.buildFormattingFunc = Me(De));
        }
        return (
          (t.prototype.format = function (t, e) {
            return this.buildFormattingFunc(
              this.standardDateProps,
              this.extendedSettings,
              e
            )(t);
          }),
          (t.prototype.formatRange = function (t, e, n) {
            var i = this.standardDateProps,
              r = this.extendedSettings,
              o = (function (t, e, n) {
                return n.getMarkerYear(t) !== n.getMarkerYear(e)
                  ? 5
                  : n.getMarkerMonth(t) !== n.getMarkerMonth(e)
                  ? 4
                  : n.getMarkerDay(t) !== n.getMarkerDay(e)
                  ? 2
                  : ot(t) !== ot(e)
                  ? 1
                  : 0;
              })(t.marker, e.marker, n.calendarSystem);
            if (!o) return this.format(t, n);
            var a = o;
            !(a > 1) ||
              ("numeric" !== i.year && "2-digit" !== i.year) ||
              ("numeric" !== i.month && "2-digit" !== i.month) ||
              ("numeric" !== i.day && "2-digit" !== i.day) ||
              (a = 1);
            var s = this.format(t, n),
              l = this.format(e, n);
            if (s === l) return s;
            var c = De(
                (function (t, e) {
                  var n = {};
                  for (var i in t) (!(i in Ae) || Ae[i] <= e) && (n[i] = t[i]);
                  return n;
                })(i, a),
                r,
                n
              ),
              d = c(t),
              u = c(e),
              p = (function (t, e, n, i) {
                for (var r = 0; r < t.length; ) {
                  var o = t.indexOf(e, r);
                  if (-1 === o) break;
                  var a = t.substr(0, o);
                  r = o + e.length;
                  for (var s = t.substr(r), l = 0; l < n.length; ) {
                    var c = n.indexOf(i, l);
                    if (-1 === c) break;
                    var d = n.substr(0, c);
                    l = c + i.length;
                    var u = n.substr(l);
                    if (a === d && s === u) return { before: a, after: s };
                  }
                }
                return null;
              })(s, d, l, u),
              h = r.separator || "";
            return p ? p.before + d + h + u + p.after : s + h + l;
          }),
          (t.prototype.getLargestUnit = function () {
            switch (this.severity) {
              case 7:
              case 6:
              case 5:
                return "year";
              case 4:
                return "month";
              case 3:
                return "week";
              default:
                return "day";
            }
          }),
          t
        );
      })();
    function De(t, e, n) {
      var i = Object.keys(t).length;
      return 1 === i && "short" === t.timeZoneName
        ? function (t) {
            return je(t.timeZoneOffset);
          }
        : 0 === i && e.week
        ? function (t) {
            return (function (t, e, n, i) {
              var r = [];
              return (
                "narrow" === i ? r.push(e) : "short" === i && r.push(e, " "),
                r.push(n.simpleNumberFormat.format(t)),
                n.options.isRtl && r.reverse(),
                r.join("")
              );
            })(n.computeWeekNumber(t.marker), n.weekLabel, n.locale, e.week);
          }
        : (function (t, e, n) {
            (t = Gt({}, t)),
              (e = Gt({}, e)),
              (function (t, e) {
                t.timeZoneName &&
                  (t.hour || (t.hour = "2-digit"),
                  t.minute || (t.minute = "2-digit")),
                  "long" === t.timeZoneName && (t.timeZoneName = "short"),
                  e.omitZeroMinute &&
                    (t.second || t.millisecond) &&
                    delete e.omitZeroMinute;
              })(t, e),
              (t.timeZone = "UTC");
            var i,
              r = new Intl.DateTimeFormat(n.locale.codes, t);
            if (e.omitZeroMinute) {
              var o = Gt({}, t);
              delete o.minute, (i = new Intl.DateTimeFormat(n.locale.codes, o));
            }
            return function (o) {
              var a = o.marker;
              return (function (t, e, n, i, r) {
                return (
                  (t = t.replace(ke, "")),
                  "short" === n.timeZoneName &&
                    (t = (function (t, e) {
                      var n = !1;
                      return (
                        (t = t.replace(Se, function () {
                          return (n = !0), e;
                        })),
                        n || (t += " " + e),
                        t
                      );
                    })(
                      t,
                      "UTC" === r.timeZone || null == e.timeZoneOffset
                        ? "UTC"
                        : je(e.timeZoneOffset)
                    )),
                  i.omitCommas && (t = t.replace(ze, "").trim()),
                  i.omitZeroMinute && (t = t.replace(":00", "")),
                  !1 === i.meridiem
                    ? (t = t.replace(xe, "").trim())
                    : "narrow" === i.meridiem
                    ? (t = t.replace(xe, function (t, e) {
                        return e.toLocaleLowerCase();
                      }))
                    : "short" === i.meridiem
                    ? (t = t.replace(xe, function (t, e) {
                        return e.toLocaleLowerCase() + "m";
                      }))
                    : "lowercase" === i.meridiem &&
                      (t = t.replace(xe, function (t) {
                        return t.toLocaleLowerCase();
                      })),
                  (t = (t = t.replace(Ce, " ")).trim())
                );
              })((i && !a.getUTCMinutes() ? i : r).format(a), o, t, e, n);
            };
          })(t, e, n);
    }
    var Le = (function () {
        function t(t, e) {
          (this.cmdStr = t), (this.separator = e);
        }
        return (
          (t.prototype.format = function (t, e) {
            return e.cmdFormatter(this.cmdStr, Pe(t, null, e, this.separator));
          }),
          (t.prototype.formatRange = function (t, e, n) {
            return n.cmdFormatter(this.cmdStr, Pe(t, e, n, this.separator));
          }),
          t
        );
      })(),
      qe = (function () {
        function t(t) {
          this.func = t;
        }
        return (
          (t.prototype.format = function (t, e) {
            return this.func(Pe(t, null, e));
          }),
          (t.prototype.formatRange = function (t, e, n) {
            return this.func(Pe(t, e, n));
          }),
          t
        );
      })();
    function Ee(t, e) {
      return "object" == typeof t && t
        ? ("string" == typeof e && (t = Gt({ separator: e }, t)), new Te(t))
        : "string" == typeof t
        ? new Le(t, e)
        : "function" == typeof t
        ? new qe(t)
        : void 0;
    }
    function je(t, e) {
      void 0 === e && (e = !1);
      var n = t < 0 ? "-" : "+",
        i = Math.abs(t),
        r = Math.floor(i / 60),
        o = Math.round(i % 60);
      return e
        ? n + Rt(r, 2) + ":" + Rt(o, 2)
        : "GMT" + n + r + (o ? ":" + Rt(o, 2) : "");
    }
    function Pe(t, e, n, i) {
      var r = Re(t, n.calendarSystem);
      return {
        date: r,
        start: r,
        end: e ? Re(e, n.calendarSystem) : null,
        timeZone: n.timeZone,
        localeCodes: n.locale.codes,
        separator: i,
      };
    }
    function Re(t, e) {
      var n = e.markerToArray(t.marker);
      return {
        marker: t.marker,
        timeZoneOffset: t.timeZoneOffset,
        array: n,
        year: n[0],
        month: n[1],
        day: n[2],
        hour: n[3],
        minute: n[4],
        second: n[5],
        millisecond: n[6],
      };
    }
    var Ie = (function () {
        function t(t, e) {
          (this.calendar = t), (this.internalEventSource = e);
        }
        return (
          (t.prototype.remove = function () {
            this.calendar.dispatch({
              type: "REMOVE_EVENT_SOURCE",
              sourceId: this.internalEventSource.sourceId,
            });
          }),
          (t.prototype.refetch = function () {
            this.calendar.dispatch({
              type: "FETCH_EVENT_SOURCES",
              sourceIds: [this.internalEventSource.sourceId],
            });
          }),
          Object.defineProperty(t.prototype, "id", {
            get: function () {
              return this.internalEventSource.publicId;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "url", {
            get: function () {
              return this.internalEventSource.meta.url;
            },
            enumerable: !0,
            configurable: !0,
          }),
          t
        );
      })(),
      We = (function () {
        function t(t, e, n) {
          (this._calendar = t), (this._def = e), (this._instance = n || null);
        }
        return (
          (t.prototype.setProp = function (t, e) {
            var n, i;
            if (t in Mn);
            else if (t in yn)
              "function" == typeof yn[t] && (e = yn[t](e)),
                this.mutate({ standardProps: ((n = {}), (n[t] = e), n) });
            else if (t in fn) {
              var r = void 0;
              "function" == typeof fn[t] && (e = fn[t](e)),
                "color" === t
                  ? (r = { backgroundColor: e, borderColor: e })
                  : "editable" === t
                  ? (r = { startEditable: e, durationEditable: e })
                  : (((i = {})[t] = e), (r = i)),
                this.mutate({ standardProps: { ui: r } });
            }
          }),
          (t.prototype.setExtendedProp = function (t, e) {
            var n;
            this.mutate({ extendedProps: ((n = {}), (n[t] = e), n) });
          }),
          (t.prototype.setStart = function (t, e) {
            void 0 === e && (e = {});
            var n = this._calendar.dateEnv,
              i = n.createMarker(t);
            if (i && this._instance) {
              var r = Ut(this._instance.range.start, i, n, e.granularity);
              e.maintainDuration
                ? this.mutate({ datesDelta: r })
                : this.mutate({ startDelta: r });
            }
          }),
          (t.prototype.setEnd = function (t, e) {
            void 0 === e && (e = {});
            var n,
              i = this._calendar.dateEnv;
            if ((null == t || (n = i.createMarker(t))) && this._instance)
              if (n) {
                var r = Ut(this._instance.range.end, n, i, e.granularity);
                this.mutate({ endDelta: r });
              } else this.mutate({ standardProps: { hasEnd: !1 } });
          }),
          (t.prototype.setDates = function (t, e, n) {
            void 0 === n && (n = {});
            var i,
              r = this._calendar.dateEnv,
              o = { allDay: n.allDay },
              a = r.createMarker(t);
            if (a && (null == e || (i = r.createMarker(e))) && this._instance) {
              var s = this._instance.range;
              !0 === n.allDay && (s = Ht(s));
              var l = Ut(s.start, a, r, n.granularity);
              if (i) {
                var c = Ut(s.end, i, r, n.granularity);
                ut(l, c)
                  ? this.mutate({ datesDelta: l, standardProps: o })
                  : this.mutate({
                      startDelta: l,
                      endDelta: c,
                      standardProps: o,
                    });
              } else
                (o.hasEnd = !1),
                  this.mutate({ datesDelta: l, standardProps: o });
            }
          }),
          (t.prototype.moveStart = function (t) {
            var e = lt(t);
            e && this.mutate({ startDelta: e });
          }),
          (t.prototype.moveEnd = function (t) {
            var e = lt(t);
            e && this.mutate({ endDelta: e });
          }),
          (t.prototype.moveDates = function (t) {
            var e = lt(t);
            e && this.mutate({ datesDelta: e });
          }),
          (t.prototype.setAllDay = function (t, e) {
            void 0 === e && (e = {});
            var n = { allDay: t },
              i = e.maintainDuration;
            null == i && (i = this._calendar.opt("allDayMaintainDuration")),
              this._def.allDay !== t && (n.hasEnd = i),
              this.mutate({ standardProps: n });
          }),
          (t.prototype.formatRange = function (t) {
            var e = this._calendar.dateEnv,
              n = this._instance,
              i = Ee(t, this._calendar.opt("defaultRangeSeparator"));
            return this._def.hasEnd
              ? e.formatRange(n.range.start, n.range.end, i, {
                  forcedStartTzo: n.forcedStartTzo,
                  forcedEndTzo: n.forcedEndTzo,
                })
              : e.format(n.range.start, i, { forcedTzo: n.forcedStartTzo });
          }),
          (t.prototype.mutate = function (t) {
            var e = this._def,
              n = this._instance;
            if (n) {
              this._calendar.dispatch({
                type: "MUTATE_EVENTS",
                instanceId: n.instanceId,
                mutation: t,
                fromApi: !0,
              });
              var i = this._calendar.state.eventStore;
              (this._def = i.defs[e.defId]),
                (this._instance = i.instances[n.instanceId]);
            }
          }),
          (t.prototype.remove = function () {
            this._calendar.dispatch({
              type: "REMOVE_EVENT_DEF",
              defId: this._def.defId,
            });
          }),
          Object.defineProperty(t.prototype, "source", {
            get: function () {
              var t = this._def.sourceId;
              return t
                ? new Ie(this._calendar, this._calendar.state.eventSources[t])
                : null;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "start", {
            get: function () {
              return this._instance
                ? this._calendar.dateEnv.toDate(this._instance.range.start)
                : null;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "end", {
            get: function () {
              return this._instance && this._def.hasEnd
                ? this._calendar.dateEnv.toDate(this._instance.range.end)
                : null;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "id", {
            get: function () {
              return this._def.publicId;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "groupId", {
            get: function () {
              return this._def.groupId;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "allDay", {
            get: function () {
              return this._def.allDay;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "title", {
            get: function () {
              return this._def.title;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "url", {
            get: function () {
              return this._def.url;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "rendering", {
            get: function () {
              return this._def.rendering;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "startEditable", {
            get: function () {
              return this._def.ui.startEditable;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "durationEditable", {
            get: function () {
              return this._def.ui.durationEditable;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "constraint", {
            get: function () {
              return this._def.ui.constraints[0] || null;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "overlap", {
            get: function () {
              return this._def.ui.overlap;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "allow", {
            get: function () {
              return this._def.ui.allows[0] || null;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "backgroundColor", {
            get: function () {
              return this._def.ui.backgroundColor;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "borderColor", {
            get: function () {
              return this._def.ui.borderColor;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "textColor", {
            get: function () {
              return this._def.ui.textColor;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "classNames", {
            get: function () {
              return this._def.ui.classNames;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "extendedProps", {
            get: function () {
              return this._def.extendedProps;
            },
            enumerable: !0,
            configurable: !0,
          }),
          t
        );
      })();
    function Ne(t, e, n, i) {
      var r = {},
        o = {},
        a = {},
        s = [],
        l = [],
        c = He(t.defs, e);
      for (var d in t.defs)
        "inverse-background" === (y = t.defs[d]).rendering &&
          (y.groupId
            ? ((r[y.groupId] = []), a[y.groupId] || (a[y.groupId] = y))
            : (o[d] = []));
      for (var u in t.instances) {
        var p = t.instances[u],
          h = c[(y = t.defs[p.defId]).defId],
          f = p.range,
          b = !y.allDay && i ? Yt(f, i) : f,
          m = be(b, n);
        m &&
          ("inverse-background" === y.rendering
            ? y.groupId
              ? r[y.groupId].push(m)
              : o[p.defId].push(m)
            : ("background" === y.rendering ? s : l).push({
                def: y,
                ui: h,
                instance: p,
                range: m,
                isStart: b.start && b.start.valueOf() === m.start.valueOf(),
                isEnd: b.end && b.end.valueOf() === m.end.valueOf(),
              }));
      }
      for (var g in r)
        for (var v = 0, _ = he(r[g], n); v < _.length; v++) {
          var y,
            M = _[v];
          (h = c[(y = a[g]).defId]),
            s.push({
              def: y,
              ui: h,
              instance: null,
              range: M,
              isStart: !1,
              isEnd: !1,
            });
        }
      for (var d in o)
        for (var O = 0, w = he(o[d], n); O < w.length; O++)
          (M = w[O]),
            s.push({
              def: t.defs[d],
              ui: c[d],
              instance: null,
              range: M,
              isStart: !1,
              isEnd: !1,
            });
      return { bg: s, fg: l };
    }
    function Be(t, e, n) {
      var i = t.calendar,
        r = t.view;
      i.hasPublicHandlers("eventRender") &&
        (e = e.filter(function (t) {
          var e = i.publiclyTrigger("eventRender", [
            {
              event: new We(i, t.eventRange.def, t.eventRange.instance),
              isMirror: n,
              isStart: t.isStart,
              isEnd: t.isEnd,
              el: t.el,
              view: r,
            },
          ]);
          return !1 !== e && (e && !0 !== e && (t.el = e), !0);
        }));
      for (var o = 0, a = e; o < a.length; o++) {
        var s = a[o];
        Fe(s.el, s);
      }
      return e;
    }
    function Fe(t, e) {
      t.fcSeg = e;
    }
    function $e(t) {
      return t.fcSeg || null;
    }
    function He(t, e) {
      return te(t, function (t) {
        return Ye(t, e);
      });
    }
    function Ye(t, e) {
      var n = [];
      return (
        e[""] && n.push(e[""]),
        e[t.defId] && n.push(e[t.defId]),
        n.push(t.ui),
        vn(n)
      );
    }
    function Ue(t, e, n) {
      var i = t.calendar,
        r = t.view;
      if (i.hasPublicHandlers("eventPositioned"))
        for (var o = 0, a = e; o < a.length; o++) {
          var s = a[o];
          i.publiclyTriggerAfterSizing("eventPositioned", [
            {
              event: new We(i, s.eventRange.def, s.eventRange.instance),
              isMirror: n,
              isStart: s.isStart,
              isEnd: s.isEnd,
              el: s.el,
              view: r,
            },
          ]);
        }
      i.state.eventSourceLoadingLevel ||
        (i.afterSizingTriggers._eventsPositioned = [null]);
    }
    function Xe(t, e, n) {
      for (var i = t.calendar, r = t.view, o = 0, a = e; o < a.length; o++) {
        var s = a[o];
        i.trigger("eventElRemove", s.el);
      }
      if (i.hasPublicHandlers("eventDestroy"))
        for (var l = 0, c = e; l < c.length; l++)
          (s = c[l]),
            i.publiclyTrigger("eventDestroy", [
              {
                event: new We(i, s.eventRange.def, s.eventRange.instance),
                isMirror: n,
                el: s.el,
                view: r,
              },
            ]);
    }
    function Ve(t, e, n) {
      for (
        var i = t.calendar,
          r = t.view,
          o = i.pluginSystem.hooks.isDraggableTransformers,
          a = n.startEditable,
          s = 0,
          l = o;
        s < l.length;
        s++
      )
        a = (0, l[s])(a, e, n, r);
      return a;
    }
    function Ge(t, e, n) {
      return n.durationEditable && t.options.eventResizableFromStart;
    }
    function Ke(t, e, n) {
      return n.durationEditable;
    }
    function Ze(t, e, n, i) {
      var r = He(t.defs, e),
        o = { defs: {}, instances: {} };
      for (var a in t.defs) {
        var s = t.defs[a];
        o.defs[a] = Je(
          s,
          r[a],
          n,
          i.pluginSystem.hooks.eventDefMutationAppliers,
          i
        );
      }
      for (var l in t.instances) {
        var c = t.instances[l];
        (s = o.defs[c.defId]), (o.instances[l] = Qe(c, s, r[c.defId], n, i));
      }
      return o;
    }
    function Je(t, e, n, i, r) {
      var o = n.standardProps || {};
      null == o.hasEnd &&
        e.durationEditable &&
        (n.startDelta || n.endDelta) &&
        (o.hasEnd = !0);
      var a = Gt({}, t, o, { ui: Gt({}, t.ui, o.ui) });
      n.extendedProps &&
        (a.extendedProps = Gt({}, a.extendedProps, n.extendedProps));
      for (var s = 0, l = i; s < l.length; s++) (0, l[s])(a, n, r);
      return !a.hasEnd && r.opt("forceEventDuration") && (a.hasEnd = !0), a;
    }
    function Qe(t, e, n, i, r) {
      var o = r.dateEnv,
        a = i.standardProps && !0 === i.standardProps.allDay,
        s = i.standardProps && !1 === i.standardProps.hasEnd,
        l = Gt({}, t);
      return (
        a && (l.range = Ht(l.range)),
        i.datesDelta &&
          n.startEditable &&
          (l.range = {
            start: o.add(l.range.start, i.datesDelta),
            end: o.add(l.range.end, i.datesDelta),
          }),
        i.startDelta &&
          n.durationEditable &&
          (l.range = {
            start: o.add(l.range.start, i.startDelta),
            end: l.range.end,
          }),
        i.endDelta &&
          n.durationEditable &&
          (l.range = {
            start: l.range.start,
            end: o.add(l.range.end, i.endDelta),
          }),
        s &&
          (l.range = {
            start: l.range.start,
            end: r.getDefaultEventEnd(e.allDay, l.range.start),
          }),
        e.allDay &&
          (l.range = { start: Z(l.range.start), end: Z(l.range.end) }),
        l.range.end < l.range.start &&
          (l.range.end = r.getDefaultEventEnd(e.allDay, l.range.start)),
        l
      );
    }
    function tn(t, e, n, i, r) {
      switch (e.type) {
        case "RECEIVE_EVENTS":
          return (function (t, e, n, i, r, o) {
            if (e && n === e.latestFetchId) {
              var a = re(
                (function (t, e, n) {
                  var i = n.opt("eventDataTransform"),
                    r = e ? e.eventDataTransform : null;
                  return r && (t = le(t, r)), i && (t = le(t, i)), t;
                })(r, e, o),
                e.sourceId,
                o
              );
              return i && (a = ae(a, i, o)), de(en(t, e.sourceId), a);
            }
            return t;
          })(t, n[e.sourceId], e.fetchId, e.fetchRange, e.rawEvents, r);
        case "ADD_EVENTS":
          return (function (t, e, n, i) {
            return n && (e = ae(e, n, i)), de(t, e);
          })(t, e.eventStore, i ? i.activeRange : null, r);
        case "MERGE_EVENTS":
          return de(t, e.eventStore);
        case "PREV":
        case "NEXT":
        case "SET_DATE":
        case "SET_VIEW_TYPE":
          return i ? ae(t, i.activeRange, r) : t;
        case "CHANGE_TIMEZONE":
          return (function (t, e, n) {
            var i = t.defs,
              r = te(t.instances, function (t) {
                var r = i[t.defId];
                return r.allDay || r.recurringDef
                  ? t
                  : Gt({}, t, {
                      range: {
                        start: n.createMarker(
                          e.toDate(t.range.start, t.forcedStartTzo)
                        ),
                        end: n.createMarker(
                          e.toDate(t.range.end, t.forcedEndTzo)
                        ),
                      },
                      forcedStartTzo: n.canComputeOffset
                        ? null
                        : t.forcedStartTzo,
                      forcedEndTzo: n.canComputeOffset ? null : t.forcedEndTzo,
                    });
              });
            return { defs: i, instances: r };
          })(t, e.oldDateEnv, r.dateEnv);
        case "MUTATE_EVENTS":
          return (function (t, e, n, i, r) {
            var o = se(t, e);
            return de(
              t,
              (o = Ze(
                o,
                i
                  ? {
                      "": {
                        startEditable: !0,
                        durationEditable: !0,
                        constraints: [],
                        overlap: null,
                        allows: [],
                        backgroundColor: "",
                        borderColor: "",
                        textColor: "",
                        classNames: [],
                      },
                    }
                  : r.eventUiBases,
                n,
                r
              ))
            );
          })(t, e.instanceId, e.mutation, e.fromApi, r);
        case "REMOVE_EVENT_INSTANCES":
          return nn(t, e.instances);
        case "REMOVE_EVENT_DEF":
          return ue(t, function (t) {
            return t.defId !== e.defId;
          });
        case "REMOVE_EVENT_SOURCE":
          return en(t, e.sourceId);
        case "REMOVE_ALL_EVENT_SOURCES":
          return ue(t, function (t) {
            return !t.sourceId;
          });
        case "REMOVE_ALL_EVENTS":
          return { defs: {}, instances: {} };
        case "RESET_EVENTS":
          return { defs: t.defs, instances: t.instances };
        default:
          return t;
      }
    }
    function en(t, e) {
      return ue(t, function (t) {
        return t.sourceId !== e;
      });
    }
    function nn(t, e) {
      return {
        defs: t.defs,
        instances: Qt(t.instances, function (t) {
          return !e[t.instanceId];
        }),
      };
    }
    function rn(t, e) {
      return on({ eventDrag: t }, e);
    }
    function on(t, e) {
      var n = e.view,
        i = Gt(
          {
            businessHours: n
              ? n.props.businessHours
              : { defs: {}, instances: {} },
            dateSelection: "",
            eventStore: e.state.eventStore,
            eventUiBases: e.eventUiBases,
            eventSelection: "",
            eventDrag: null,
            eventResize: null,
          },
          t
        );
      return (e.pluginSystem.hooks.isPropsValid || an)(i, e);
    }
    function an(t, e, n, i) {
      return (
        void 0 === n && (n = {}),
        !(
          (t.eventDrag &&
            !(function (t, e, n, i) {
              var r = t.eventDrag,
                o = r.mutatedEvents,
                a = o.defs,
                s = o.instances,
                l = He(
                  a,
                  r.isEvent ? t.eventUiBases : { "": e.selectionConfig }
                );
              i && (l = te(l, i));
              var c = nn(t.eventStore, r.affectedEvents.instances),
                d = c.defs,
                u = c.instances,
                p = He(d, t.eventUiBases);
              for (var h in s) {
                var f = s[h],
                  b = f.range,
                  m = l[f.defId],
                  g = a[f.defId];
                if (!sn(m.constraints, b, c, t.businessHours, e)) return !1;
                var v = e.opt("eventOverlap");
                for (var _ in ("function" != typeof v && (v = null), u)) {
                  var y = u[_];
                  if (ge(b, y.range)) {
                    if (!1 === p[y.defId].overlap && r.isEvent) return !1;
                    if (!1 === m.overlap) return !1;
                    if (v && !v(new We(e, d[y.defId], y), new We(e, g, f)))
                      return !1;
                  }
                }
                for (
                  var M = e.state.eventStore, O = 0, w = m.allows;
                  O < w.length;
                  O++
                ) {
                  var A,
                    x = w[O],
                    z = Gt({}, n, { range: f.range, allDay: g.allDay }),
                    C = M.defs[g.defId],
                    k = M.instances[h];
                  if (
                    ((A = C ? new We(e, C, k) : new We(e, g)),
                    !x(e.buildDateSpanApi(z), A))
                  )
                    return !1;
                }
              }
              return !0;
            })(t, e, n, i)) ||
          (t.dateSelection &&
            !(function (t, e, n, i) {
              var r = t.eventStore,
                o = r.defs,
                a = r.instances,
                s = t.dateSelection,
                l = s.range,
                c = e.selectionConfig;
              if (
                (i && (c = i(c)), !sn(c.constraints, l, r, t.businessHours, e))
              )
                return !1;
              var d = e.opt("selectOverlap");
              for (var u in ("function" != typeof d && (d = null), a)) {
                var p = a[u];
                if (ge(l, p.range)) {
                  if (!1 === c.overlap) return !1;
                  if (d && !d(new We(e, o[p.defId], p))) return !1;
                }
              }
              for (var h = 0, f = c.allows; h < f.length; h++) {
                var b = f[h],
                  m = Gt({}, n, s);
                if (!b(e.buildDateSpanApi(m), null)) return !1;
              }
              return !0;
            })(t, e, n, i))
        )
      );
    }
    function sn(t, e, n, i, r) {
      for (var o = 0, a = t; o < a.length; o++)
        if (!dn(ln(a[o], e, n, i, r), e)) return !1;
      return !0;
    }
    function ln(t, e, n, i, r) {
      return "businessHours" === t
        ? cn(ae(i, e, r))
        : "string" == typeof t
        ? cn(
            ue(n, function (e) {
              return e.groupId === t;
            })
          )
        : "object" == typeof t && t
        ? cn(ae(t, e, r))
        : [];
    }
    function cn(t) {
      var e = t.instances,
        n = [];
      for (var i in e) n.push(e[i].range);
      return n;
    }
    function dn(t, e) {
      for (var n = 0, i = t; n < i.length; n++) if (ve(i[n], e)) return !0;
      return !1;
    }
    function un(t) {
      return (t + "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/'/g, "&#039;")
        .replace(/"/g, "&quot;")
        .replace(/\n/g, "<br />");
    }
    function pn(t) {
      var e = [];
      for (var n in t) {
        var i = t[n];
        null != i && "" !== i && e.push(n + ":" + i);
      }
      return e.join(";");
    }
    function hn(t) {
      return Array.isArray(t) ? t : "string" == typeof t ? t.split(/\s+/) : [];
    }
    var fn = {
      editable: Boolean,
      startEditable: Boolean,
      durationEditable: Boolean,
      constraint: null,
      overlap: null,
      allow: null,
      className: hn,
      classNames: hn,
      color: String,
      backgroundColor: String,
      borderColor: String,
      textColor: String,
    };
    function bn(t, e, n) {
      var i = $t(t, fn, {}, n),
        r = (function (t, e) {
          return Array.isArray(t)
            ? re(t, "", e, !0)
            : "object" == typeof t && t
            ? re([t], "", e, !0)
            : null != t
            ? String(t)
            : null;
        })(i.constraint, e);
      return {
        startEditable: null != i.startEditable ? i.startEditable : i.editable,
        durationEditable:
          null != i.durationEditable ? i.durationEditable : i.editable,
        constraints: null != r ? [r] : [],
        overlap: i.overlap,
        allows: null != i.allow ? [i.allow] : [],
        backgroundColor: i.backgroundColor || i.color,
        borderColor: i.borderColor || i.color,
        textColor: i.textColor,
        classNames: i.classNames.concat(i.className),
      };
    }
    function mn(t, e, n, i) {
      var r = {},
        o = {};
      for (var a in fn) {
        var s = t + Pt(a);
        (r[a] = e[s]), (o[s] = !0);
      }
      if (("event" === t && (r.editable = e.editable), i))
        for (var a in e) o[a] || (i[a] = e[a]);
      return bn(r, n);
    }
    var gn = {
      startEditable: null,
      durationEditable: null,
      constraints: [],
      overlap: null,
      allows: [],
      backgroundColor: "",
      borderColor: "",
      textColor: "",
      classNames: [],
    };
    function vn(t) {
      return t.reduce(_n, gn);
    }
    function _n(t, e) {
      return {
        startEditable:
          null != e.startEditable ? e.startEditable : t.startEditable,
        durationEditable:
          null != e.durationEditable ? e.durationEditable : t.durationEditable,
        constraints: t.constraints.concat(e.constraints),
        overlap: "boolean" == typeof e.overlap ? e.overlap : t.overlap,
        allows: t.allows.concat(e.allows),
        backgroundColor: e.backgroundColor || t.backgroundColor,
        borderColor: e.borderColor || t.borderColor,
        textColor: e.textColor || t.textColor,
        classNames: t.classNames.concat(e.classNames),
      };
    }
    var yn = {
        id: String,
        groupId: String,
        title: String,
        url: String,
        rendering: String,
        extendedProps: null,
      },
      Mn = { start: null, date: null, end: null, allDay: null },
      On = 0;
    function wn(t, e, n, i) {
      var r = (function (t, e) {
          var n = null;
          return (
            t && (n = e.state.eventSources[t].allDayDefault),
            null == n && (n = e.opt("allDayDefault")),
            n
          );
        })(e, n),
        o = {},
        a = (function (t, e, n, i, r) {
          for (var o = 0; o < i.length; o++) {
            var a = {},
              s = i[o].parse(t, a, n);
            if (s) {
              var l = a.allDay;
              return (
                delete a.allDay,
                null == l &&
                  null == (l = e) &&
                  null == (l = s.allDayGuess) &&
                  (l = !1),
                Gt(r, a),
                {
                  allDay: l,
                  duration: s.duration,
                  typeData: s.typeData,
                  typeId: o,
                }
              );
            }
          }
          return null;
        })(t, r, n.dateEnv, n.pluginSystem.hooks.recurringTypes, o);
      if (a)
        return (
          ((s = An(o, e, a.allDay, Boolean(a.duration), n)).recurringDef = {
            typeId: a.typeId,
            typeData: a.typeData,
            duration: a.duration,
          }),
          { def: s, instance: null }
        );
      var s,
        l = {},
        c = (function (t, e, n, i, r) {
          var o,
            a,
            s = (function (t, e) {
              var n = $t(t, Mn, {}, e);
              return (
                (n.start = null !== n.start ? n.start : n.date),
                delete n.date,
                n
              );
            })(t, i),
            l = s.allDay,
            c = null,
            d = !1,
            u = null;
          if ((o = n.dateEnv.createMarkerMeta(s.start))) c = o.marker;
          else if (!r) return null;
          return (
            null != s.end && (a = n.dateEnv.createMarkerMeta(s.end)),
            null == l &&
              (l =
                null != e
                  ? e
                  : (!o || o.isTimeUnspecified) && (!a || a.isTimeUnspecified)),
            l && c && (c = Z(c)),
            a && ((u = a.marker), l && (u = Z(u)), c && u <= c && (u = null)),
            u
              ? (d = !0)
              : r ||
                ((d = n.opt("forceEventDuration") || !1),
                (u = n.dateEnv.add(
                  c,
                  l ? n.defaultAllDayEventDuration : n.defaultTimedEventDuration
                ))),
            {
              allDay: l,
              hasEnd: d,
              range: { start: c, end: u },
              forcedStartTzo: o ? o.forcedTzo : null,
              forcedEndTzo: a ? a.forcedTzo : null,
            }
          );
        })(t, r, n, l, i);
      return c
        ? {
            def: (s = An(l, e, c.allDay, c.hasEnd, n)),
            instance: xn(s.defId, c.range, c.forcedStartTzo, c.forcedEndTzo),
          }
        : null;
    }
    function An(t, e, n, i, r) {
      var o = {},
        a = (function (t, e, n) {
          var i = {},
            r = $t(t, yn, {}, i),
            o = bn(i, e, n);
          return (r.publicId = r.id), delete r.id, (r.ui = o), r;
        })(t, r, o);
      (a.defId = String(On++)),
        (a.sourceId = e),
        (a.allDay = n),
        (a.hasEnd = i);
      for (
        var s = 0, l = r.pluginSystem.hooks.eventDefParsers;
        s < l.length;
        s++
      ) {
        var c = {};
        (0, l[s])(a, o, c), (o = c);
      }
      return (
        (a.extendedProps = Gt(o, a.extendedProps || {})),
        Object.freeze(a.ui.classNames),
        Object.freeze(a.extendedProps),
        a
      );
    }
    function xn(t, e, n, i) {
      return {
        instanceId: String(On++),
        defId: t,
        range: e,
        forcedStartTzo: null == n ? null : n,
        forcedEndTzo: null == i ? null : i,
      };
    }
    var zn = {
      startTime: "09:00",
      endTime: "17:00",
      daysOfWeek: [1, 2, 3, 4, 5],
      rendering: "inverse-background",
      classNames: "fc-nonbusiness",
      groupId: "_businessHours",
    };
    function Cn(t, e) {
      return re(
        (function (t) {
          return (
            !0 === t
              ? [{}]
              : Array.isArray(t)
              ? t.filter(function (t) {
                  return t.daysOfWeek;
                })
              : "object" == typeof t && t
              ? [t]
              : []
          ).map(function (t) {
            return Gt({}, zn, t);
          });
        })(t),
        "",
        e
      );
    }
    function kn(t, e, n) {
      void 0 === n && (n = []);
      var i,
        r,
        o = [];
      function a() {
        if (r) {
          for (var t = 0, n = o; t < n.length; t++) n[t].unrender();
          e && e.apply(i, r), (r = null);
        }
      }
      function s() {
        (r && ye(r, arguments)) ||
          (a(), (i = this), (r = arguments), t.apply(this, arguments));
      }
      (s.dependents = o), (s.unrender = a);
      for (var l = 0, c = n; l < c.length; l++) c[l].dependents.push(s);
      return s;
    }
    var Sn = { defs: {}, instances: {} },
      Tn = (function () {
        function t() {
          (this.getKeysForEventDefs = Me(this._getKeysForEventDefs)),
            (this.splitDateSelection = Me(this._splitDateSpan)),
            (this.splitEventStore = Me(this._splitEventStore)),
            (this.splitIndividualUi = Me(this._splitIndividualUi)),
            (this.splitEventDrag = Me(this._splitInteraction)),
            (this.splitEventResize = Me(this._splitInteraction)),
            (this.eventUiBuilders = {});
        }
        return (
          (t.prototype.splitProps = function (t) {
            var e = this,
              n = this.getKeyInfo(t),
              i = this.getKeysForEventDefs(t.eventStore),
              r = this.splitDateSelection(t.dateSelection),
              o = this.splitIndividualUi(t.eventUiBases, i),
              a = this.splitEventStore(t.eventStore, i),
              s = this.splitEventDrag(t.eventDrag),
              l = this.splitEventResize(t.eventResize),
              c = {};
            for (var d in ((this.eventUiBuilders = te(n, function (t, n) {
              return e.eventUiBuilders[n] || Me(Dn);
            })),
            n)) {
              var u = n[d],
                p = a[d] || Sn,
                h = this.eventUiBuilders[d];
              c[d] = {
                businessHours: u.businessHours || t.businessHours,
                dateSelection: r[d] || null,
                eventStore: p,
                eventUiBases: h(t.eventUiBases[""], u.ui, o[d]),
                eventSelection: p.instances[t.eventSelection]
                  ? t.eventSelection
                  : "",
                eventDrag: s[d] || null,
                eventResize: l[d] || null,
              };
            }
            return c;
          }),
          (t.prototype._splitDateSpan = function (t) {
            var e = {};
            if (t)
              for (var n = 0, i = this.getKeysForDateSpan(t); n < i.length; n++)
                e[i[n]] = t;
            return e;
          }),
          (t.prototype._getKeysForEventDefs = function (t) {
            var e = this;
            return te(t.defs, function (t) {
              return e.getKeysForEventDef(t);
            });
          }),
          (t.prototype._splitEventStore = function (t, e) {
            var n = t.defs,
              i = t.instances,
              r = {};
            for (var o in n)
              for (var a = 0, s = e[o]; a < s.length; a++)
                r[(p = s[a])] || (r[p] = { defs: {}, instances: {} }),
                  (r[p].defs[o] = n[o]);
            for (var l in i)
              for (var c = i[l], d = 0, u = e[c.defId]; d < u.length; d++) {
                var p;
                r[(p = u[d])] && (r[p].instances[l] = c);
              }
            return r;
          }),
          (t.prototype._splitIndividualUi = function (t, e) {
            var n = {};
            for (var i in t)
              if (i)
                for (var r = 0, o = e[i]; r < o.length; r++) {
                  var a = o[r];
                  n[a] || (n[a] = {}), (n[a][i] = t[i]);
                }
            return n;
          }),
          (t.prototype._splitInteraction = function (t) {
            var e = {};
            if (t) {
              var n = this._splitEventStore(
                  t.affectedEvents,
                  this._getKeysForEventDefs(t.affectedEvents)
                ),
                i = this._getKeysForEventDefs(t.mutatedEvents),
                r = this._splitEventStore(t.mutatedEvents, i),
                o = function (i) {
                  e[i] ||
                    (e[i] = {
                      affectedEvents: n[i] || Sn,
                      mutatedEvents: r[i] || Sn,
                      isEvent: t.isEvent,
                      origSeg: t.origSeg,
                    });
                };
              for (var a in n) o(a);
              for (var a in r) o(a);
            }
            return e;
          }),
          t
        );
      })();
    function Dn(t, e, n) {
      var i = [];
      t && i.push(t), e && i.push(e);
      var r = { "": vn(i) };
      return n && Gt(r, n), r;
    }
    function Ln(t, e, n, i, r) {
      var o, a, s, l;
      return (
        n instanceof Date
          ? (o = n)
          : ((o = n.date), (a = n.type), (s = n.forceOff)),
        (l = { date: e.formatIso(o, { omitTime: !0 }), type: a || "day" }),
        "string" == typeof i && ((r = i), (i = null)),
        (i = i
          ? " " +
            (function (t) {
              var e = [];
              for (var n in t) {
                var i = t[n];
                null != i && e.push(n + '="' + un(i) + '"');
              }
              return e.join(" ");
            })(i)
          : ""),
        (r = r || ""),
        !s && t.navLinks
          ? "<a" +
            i +
            ' data-goto="' +
            un(JSON.stringify(l)) +
            '">' +
            r +
            "</a>"
          : "<span" + i + ">" + r + "</span>"
      );
    }
    function qn(t, e, n, i) {
      var r,
        o,
        a = n.calendar,
        s = n.options,
        l = n.theme,
        c = n.dateEnv,
        d = [];
      return (
        _e(e.activeRange, t)
          ? (d.push("fc-" + H[t.getUTCDay()]),
            s.monthMode &&
              c.getMonth(t) !== c.getMonth(e.currentRange.start) &&
              d.push("fc-other-month"),
            (o = U((r = Z(a.getNow())), 1)),
            t < r
              ? d.push("fc-past")
              : t >= o
              ? d.push("fc-future")
              : (d.push("fc-today"), !0 !== i && d.push(l.getClass("today"))))
          : d.push("fc-disabled-day"),
        d
      );
    }
    function En(t, e, n) {
      var i = !1,
        r = function () {
          i || ((i = !0), e.apply(this, arguments));
        },
        o = function () {
          i || ((i = !0), n && n.apply(this, arguments));
        },
        a = t(r, o);
      a && "function" == typeof a.then && a.then(r, o);
    }
    var jn = (function (t) {
      function e() {
        return (null !== t && t.apply(this, arguments)) || this;
      }
      return (
        Vt(e, t),
        (e.prototype.on = function (t, e) {
          return Pn(this._handlers || (this._handlers = {}), t, e), this;
        }),
        (e.prototype.one = function (t, e) {
          return Pn(this._oneHandlers || (this._oneHandlers = {}), t, e), this;
        }),
        (e.prototype.off = function (t, e) {
          return (
            this._handlers && Rn(this._handlers, t, e),
            this._oneHandlers && Rn(this._oneHandlers, t, e),
            this
          );
        }),
        (e.prototype.trigger = function (t) {
          for (var e = [], n = 1; n < arguments.length; n++)
            e[n - 1] = arguments[n];
          return this.triggerWith(t, this, e), this;
        }),
        (e.prototype.triggerWith = function (t, e, n) {
          return (
            this._handlers && Nt(this._handlers[t], e, n),
            this._oneHandlers &&
              (Nt(this._oneHandlers[t], e, n), delete this._oneHandlers[t]),
            this
          );
        }),
        (e.prototype.hasHandlers = function (t) {
          return (
            (this._handlers && this._handlers[t] && this._handlers[t].length) ||
            (this._oneHandlers &&
              this._oneHandlers[t] &&
              this._oneHandlers[t].length)
          );
        }),
        e
      );
    })(
      (function () {
        function t() {}
        return (
          (t.mixInto = function (t) {
            this.mixIntoObj(t.prototype);
          }),
          (t.mixIntoObj = function (t) {
            var e = this;
            Object.getOwnPropertyNames(this.prototype).forEach(function (n) {
              t[n] || (t[n] = e.prototype[n]);
            });
          }),
          (t.mixOver = function (t) {
            var e = this;
            Object.getOwnPropertyNames(this.prototype).forEach(function (n) {
              t.prototype[n] = e.prototype[n];
            });
          }),
          t
        );
      })()
    );
    function Pn(t, e, n) {
      (t[e] || (t[e] = [])).push(n);
    }
    function Rn(t, e, n) {
      n
        ? t[e] &&
          (t[e] = t[e].filter(function (t) {
            return t !== n;
          }))
        : delete t[e];
    }
    var In = (function () {
        function t(t, e, n, i) {
          (this.originEl = t),
            (this.els = e),
            (this.isHorizontal = n),
            (this.isVertical = i);
        }
        return (
          (t.prototype.build = function () {
            var t = this.originEl,
              e = (this.originClientRect = t.getBoundingClientRect());
            this.isHorizontal && this.buildElHorizontals(e.left),
              this.isVertical && this.buildElVerticals(e.top);
          }),
          (t.prototype.buildElHorizontals = function (t) {
            for (var e = [], n = [], i = 0, r = this.els; i < r.length; i++) {
              var o = r[i].getBoundingClientRect();
              e.push(o.left - t), n.push(o.right - t);
            }
            (this.lefts = e), (this.rights = n);
          }),
          (t.prototype.buildElVerticals = function (t) {
            for (var e = [], n = [], i = 0, r = this.els; i < r.length; i++) {
              var o = r[i].getBoundingClientRect();
              e.push(o.top - t), n.push(o.bottom - t);
            }
            (this.tops = e), (this.bottoms = n);
          }),
          (t.prototype.leftToIndex = function (t) {
            var e,
              n = this.lefts,
              i = this.rights,
              r = n.length;
            for (e = 0; e < r; e++) if (t >= n[e] && t < i[e]) return e;
          }),
          (t.prototype.topToIndex = function (t) {
            var e,
              n = this.tops,
              i = this.bottoms,
              r = n.length;
            for (e = 0; e < r; e++) if (t >= n[e] && t < i[e]) return e;
          }),
          (t.prototype.getWidth = function (t) {
            return this.rights[t] - this.lefts[t];
          }),
          (t.prototype.getHeight = function (t) {
            return this.bottoms[t] - this.tops[t];
          }),
          t
        );
      })(),
      Wn = (function () {
        function t() {}
        return (
          (t.prototype.getMaxScrollTop = function () {
            return this.getScrollHeight() - this.getClientHeight();
          }),
          (t.prototype.getMaxScrollLeft = function () {
            return this.getScrollWidth() - this.getClientWidth();
          }),
          (t.prototype.canScrollVertically = function () {
            return this.getMaxScrollTop() > 0;
          }),
          (t.prototype.canScrollHorizontally = function () {
            return this.getMaxScrollLeft() > 0;
          }),
          (t.prototype.canScrollUp = function () {
            return this.getScrollTop() > 0;
          }),
          (t.prototype.canScrollDown = function () {
            return this.getScrollTop() < this.getMaxScrollTop();
          }),
          (t.prototype.canScrollLeft = function () {
            return this.getScrollLeft() > 0;
          }),
          (t.prototype.canScrollRight = function () {
            return this.getScrollLeft() < this.getMaxScrollLeft();
          }),
          t
        );
      })(),
      Nn = (function (t) {
        function e(e) {
          var n = t.call(this) || this;
          return (n.el = e), n;
        }
        return (
          Vt(e, t),
          (e.prototype.getScrollTop = function () {
            return this.el.scrollTop;
          }),
          (e.prototype.getScrollLeft = function () {
            return this.el.scrollLeft;
          }),
          (e.prototype.setScrollTop = function (t) {
            this.el.scrollTop = t;
          }),
          (e.prototype.setScrollLeft = function (t) {
            this.el.scrollLeft = t;
          }),
          (e.prototype.getScrollWidth = function () {
            return this.el.scrollWidth;
          }),
          (e.prototype.getScrollHeight = function () {
            return this.el.scrollHeight;
          }),
          (e.prototype.getClientHeight = function () {
            return this.el.clientHeight;
          }),
          (e.prototype.getClientWidth = function () {
            return this.el.clientWidth;
          }),
          e
        );
      })(Wn),
      Bn = (function (t) {
        function e() {
          return (null !== t && t.apply(this, arguments)) || this;
        }
        return (
          Vt(e, t),
          (e.prototype.getScrollTop = function () {
            return window.pageYOffset;
          }),
          (e.prototype.getScrollLeft = function () {
            return window.pageXOffset;
          }),
          (e.prototype.setScrollTop = function (t) {
            window.scroll(window.pageXOffset, t);
          }),
          (e.prototype.setScrollLeft = function (t) {
            window.scroll(t, window.pageYOffset);
          }),
          (e.prototype.getScrollWidth = function () {
            return document.documentElement.scrollWidth;
          }),
          (e.prototype.getScrollHeight = function () {
            return document.documentElement.scrollHeight;
          }),
          (e.prototype.getClientHeight = function () {
            return document.documentElement.clientHeight;
          }),
          (e.prototype.getClientWidth = function () {
            return document.documentElement.clientWidth;
          }),
          e
        );
      })(Wn),
      Fn = (function (t) {
        function e(e, n) {
          var i = t.call(this, o("div", { className: "fc-scroller" })) || this;
          return (i.overflowX = e), (i.overflowY = n), i.applyOverflow(), i;
        }
        return (
          Vt(e, t),
          (e.prototype.clear = function () {
            this.setHeight("auto"), this.applyOverflow();
          }),
          (e.prototype.destroy = function () {
            h(this.el);
          }),
          (e.prototype.applyOverflow = function () {
            O(this.el, {
              overflowX: this.overflowX,
              overflowY: this.overflowY,
            });
          }),
          (e.prototype.lockOverflow = function (t) {
            var e = this.overflowX,
              n = this.overflowY;
            (t = t || this.getScrollbarWidths()),
              "auto" === e &&
                (e =
                  t.bottom || this.canScrollHorizontally()
                    ? "scroll"
                    : "hidden"),
              "auto" === n &&
                (n =
                  t.left || t.right || this.canScrollVertically()
                    ? "scroll"
                    : "hidden"),
              O(this.el, { overflowX: e, overflowY: n });
          }),
          (e.prototype.setHeight = function (t) {
            w(this.el, "height", t);
          }),
          (e.prototype.getScrollbarWidths = function () {
            var t = q(this.el);
            return {
              left: t.scrollbarLeft,
              right: t.scrollbarRight,
              bottom: t.scrollbarBottom,
            };
          }),
          e
        );
      })(Nn),
      $n = (function () {
        function t(t) {
          (this.calendarOptions = t), this.processIconOverride();
        }
        return (
          (t.prototype.processIconOverride = function () {
            this.iconOverrideOption &&
              this.setIconOverride(
                this.calendarOptions[this.iconOverrideOption]
              );
          }),
          (t.prototype.setIconOverride = function (t) {
            var e, n;
            if ("object" == typeof t && t) {
              for (n in ((e = Gt({}, this.iconClasses)), t))
                e[n] = this.applyIconOverridePrefix(t[n]);
              this.iconClasses = e;
            } else !1 === t && (this.iconClasses = {});
          }),
          (t.prototype.applyIconOverridePrefix = function (t) {
            var e = this.iconOverridePrefix;
            return e && 0 !== t.indexOf(e) && (t = e + t), t;
          }),
          (t.prototype.getClass = function (t) {
            return this.classes[t] || "";
          }),
          (t.prototype.getIconClass = function (t) {
            var e = this.iconClasses[t];
            return e ? this.baseIconClass + " " + e : "";
          }),
          (t.prototype.getCustomButtonIconClass = function (t) {
            var e;
            return this.iconOverrideCustomButtonOption &&
              (e = t[this.iconOverrideCustomButtonOption])
              ? this.baseIconClass + " " + this.applyIconOverridePrefix(e)
              : "";
          }),
          t
        );
      })();
    ($n.prototype.classes = {}),
      ($n.prototype.iconClasses = {}),
      ($n.prototype.baseIconClass = ""),
      ($n.prototype.iconOverridePrefix = "");
    var Hn = 0,
      Yn = (function () {
        function t(t, e, n, i, r) {
          (this.calendar = t),
            (this.theme = e),
            (this.dateEnv = n),
            (this.options = i),
            (this.view = r),
            (this.isRtl = "rtl" === i.dir),
            (this.eventOrderSpecs = Lt(i.eventOrder)),
            (this.nextDayThreshold = lt(i.nextDayThreshold));
        }
        return (
          (t.prototype.extend = function (e, n) {
            return new t(
              this.calendar,
              this.theme,
              this.dateEnv,
              e || this.options,
              n || this.view
            );
          }),
          t
        );
      })(),
      Un = (function () {
        function t() {
          (this.everRendered = !1), (this.uid = String(Hn++));
        }
        return (
          (t.addEqualityFuncs = function (t) {
            this.prototype.equalityFuncs = Gt(
              {},
              this.prototype.equalityFuncs,
              t
            );
          }),
          (t.prototype.receiveProps = function (t, e) {
            this.receiveContext(e);
            var n = (function (t, e, n) {
                var i = {},
                  r = !1;
                for (var o in e)
                  o in t && (t[o] === e[o] || (n[o] && n[o](t[o], e[o])))
                    ? (i[o] = t[o])
                    : ((i[o] = e[o]), (r = !0));
                for (var o in t)
                  if (!(o in e)) {
                    r = !0;
                    break;
                  }
                return { anyChanges: r, comboProps: i };
              })(this.props || {}, t, this.equalityFuncs),
              i = n.anyChanges,
              r = n.comboProps;
            (this.props = r),
              i &&
                (this.everRendered && this.beforeUpdate(),
                this.render(r, e),
                this.everRendered && this.afterUpdate()),
              (this.everRendered = !0);
          }),
          (t.prototype.receiveContext = function (t) {
            var e = this.context;
            (this.context = t), e || this.firstContext(t);
          }),
          (t.prototype.render = function (t, e) {}),
          (t.prototype.firstContext = function (t) {}),
          (t.prototype.beforeUpdate = function () {}),
          (t.prototype.afterUpdate = function () {}),
          (t.prototype.destroy = function () {}),
          t
        );
      })();
    Un.prototype.equalityFuncs = {};
    var Xn = (function (t) {
      function e(e) {
        var n = t.call(this) || this;
        return (n.el = e), n;
      }
      return (
        Vt(e, t),
        (e.prototype.destroy = function () {
          t.prototype.destroy.call(this), h(this.el);
        }),
        (e.prototype.buildPositionCaches = function () {}),
        (e.prototype.queryHit = function (t, e, n, i) {
          return null;
        }),
        (e.prototype.isInteractionValid = function (t) {
          var e = this.context.calendar,
            n = this.props.dateProfile,
            i = t.mutatedEvents.instances;
          if (n) for (var r in i) if (!ve(n.validRange, i[r].range)) return !1;
          return rn(t, e);
        }),
        (e.prototype.isDateSelectionValid = function (t) {
          var e = this.context.calendar,
            n = this.props.dateProfile;
          return (
            !(n && !ve(n.validRange, t.range)) &&
            (function (t, e) {
              return on({ dateSelection: t }, e);
            })(t, e)
          );
        }),
        (e.prototype.isValidSegDownEl = function (t) {
          return (
            !this.props.eventDrag &&
            !this.props.eventResize &&
            !m(t, ".fc-mirror") &&
            (this.isPopover() || !this.isInPopover(t))
          );
        }),
        (e.prototype.isValidDateDownEl = function (t) {
          var e = m(t, this.fgSegSelector);
          return (
            (!e || e.classList.contains("fc-mirror")) &&
            !m(t, ".fc-more") &&
            !m(t, "a[data-goto]") &&
            !this.isInPopover(t)
          );
        }),
        (e.prototype.isPopover = function () {
          return this.el.classList.contains("fc-popover");
        }),
        (e.prototype.isInPopover = function (t) {
          return Boolean(m(t, ".fc-popover"));
        }),
        e
      );
    })(Un);
    (Xn.prototype.fgSegSelector = ".fc-event-container > *"),
      (Xn.prototype.bgSegSelector = ".fc-bgevent:not(.fc-nonbusiness)");
    var Vn = 0;
    function Gn(t) {
      return {
        id: String(Vn++),
        deps: t.deps || [],
        reducers: t.reducers || [],
        eventDefParsers: t.eventDefParsers || [],
        isDraggableTransformers: t.isDraggableTransformers || [],
        eventDragMutationMassagers: t.eventDragMutationMassagers || [],
        eventDefMutationAppliers: t.eventDefMutationAppliers || [],
        dateSelectionTransformers: t.dateSelectionTransformers || [],
        datePointTransforms: t.datePointTransforms || [],
        dateSpanTransforms: t.dateSpanTransforms || [],
        views: t.views || {},
        viewPropsTransformers: t.viewPropsTransformers || [],
        isPropsValid: t.isPropsValid || null,
        externalDefTransforms: t.externalDefTransforms || [],
        eventResizeJoinTransforms: t.eventResizeJoinTransforms || [],
        viewContainerModifiers: t.viewContainerModifiers || [],
        eventDropTransformers: t.eventDropTransformers || [],
        componentInteractions: t.componentInteractions || [],
        calendarInteractions: t.calendarInteractions || [],
        themeClasses: t.themeClasses || {},
        eventSourceDefs: t.eventSourceDefs || [],
        cmdFormatter: t.cmdFormatter,
        recurringTypes: t.recurringTypes || [],
        namedTimeZonedImpl: t.namedTimeZonedImpl,
        defaultView: t.defaultView || "",
        elementDraggingImpl: t.elementDraggingImpl,
        optionChangeHandlers: t.optionChangeHandlers || {},
      };
    }
    var Kn = (function () {
        function t() {
          (this.hooks = {
            reducers: [],
            eventDefParsers: [],
            isDraggableTransformers: [],
            eventDragMutationMassagers: [],
            eventDefMutationAppliers: [],
            dateSelectionTransformers: [],
            datePointTransforms: [],
            dateSpanTransforms: [],
            views: {},
            viewPropsTransformers: [],
            isPropsValid: null,
            externalDefTransforms: [],
            eventResizeJoinTransforms: [],
            viewContainerModifiers: [],
            eventDropTransformers: [],
            componentInteractions: [],
            calendarInteractions: [],
            themeClasses: {},
            eventSourceDefs: [],
            cmdFormatter: null,
            recurringTypes: [],
            namedTimeZonedImpl: null,
            defaultView: "",
            elementDraggingImpl: null,
            optionChangeHandlers: {},
          }),
            (this.addedHash = {});
        }
        return (
          (t.prototype.add = function (t) {
            if (!this.addedHash[t.id]) {
              this.addedHash[t.id] = !0;
              for (var e = 0, n = t.deps; e < n.length; e++) {
                var i = n[e];
                this.add(i);
              }
              this.hooks =
                ((o = t),
                {
                  reducers: (r = this.hooks).reducers.concat(o.reducers),
                  eventDefParsers: r.eventDefParsers.concat(o.eventDefParsers),
                  isDraggableTransformers: r.isDraggableTransformers.concat(
                    o.isDraggableTransformers
                  ),
                  eventDragMutationMassagers:
                    r.eventDragMutationMassagers.concat(
                      o.eventDragMutationMassagers
                    ),
                  eventDefMutationAppliers: r.eventDefMutationAppliers.concat(
                    o.eventDefMutationAppliers
                  ),
                  dateSelectionTransformers: r.dateSelectionTransformers.concat(
                    o.dateSelectionTransformers
                  ),
                  datePointTransforms: r.datePointTransforms.concat(
                    o.datePointTransforms
                  ),
                  dateSpanTransforms: r.dateSpanTransforms.concat(
                    o.dateSpanTransforms
                  ),
                  views: Gt({}, r.views, o.views),
                  viewPropsTransformers: r.viewPropsTransformers.concat(
                    o.viewPropsTransformers
                  ),
                  isPropsValid: o.isPropsValid || r.isPropsValid,
                  externalDefTransforms: r.externalDefTransforms.concat(
                    o.externalDefTransforms
                  ),
                  eventResizeJoinTransforms: r.eventResizeJoinTransforms.concat(
                    o.eventResizeJoinTransforms
                  ),
                  viewContainerModifiers: r.viewContainerModifiers.concat(
                    o.viewContainerModifiers
                  ),
                  eventDropTransformers: r.eventDropTransformers.concat(
                    o.eventDropTransformers
                  ),
                  calendarInteractions: r.calendarInteractions.concat(
                    o.calendarInteractions
                  ),
                  componentInteractions: r.componentInteractions.concat(
                    o.componentInteractions
                  ),
                  themeClasses: Gt({}, r.themeClasses, o.themeClasses),
                  eventSourceDefs: r.eventSourceDefs.concat(o.eventSourceDefs),
                  cmdFormatter: o.cmdFormatter || r.cmdFormatter,
                  recurringTypes: r.recurringTypes.concat(o.recurringTypes),
                  namedTimeZonedImpl:
                    o.namedTimeZonedImpl || r.namedTimeZonedImpl,
                  defaultView: r.defaultView || o.defaultView,
                  elementDraggingImpl:
                    r.elementDraggingImpl || o.elementDraggingImpl,
                  optionChangeHandlers: Gt(
                    {},
                    r.optionChangeHandlers,
                    o.optionChangeHandlers
                  ),
                });
            }
            var r, o;
          }),
          t
        );
      })(),
      Zn = Gn({
        eventSourceDefs: [
          {
            ignoreRange: !0,
            parseMeta: function (t) {
              return Array.isArray(t)
                ? t
                : Array.isArray(t.events)
                ? t.events
                : null;
            },
            fetch: function (t, e) {
              e({ rawEvents: t.eventSource.meta });
            },
          },
        ],
      }),
      Jn = Gn({
        eventSourceDefs: [
          {
            parseMeta: function (t) {
              return "function" == typeof t
                ? t
                : "function" == typeof t.events
                ? t.events
                : null;
            },
            fetch: function (t, e, n) {
              var i = t.calendar.dateEnv;
              En(
                t.eventSource.meta.bind(null, {
                  start: i.toDate(t.range.start),
                  end: i.toDate(t.range.end),
                  startStr: i.formatIso(t.range.start),
                  endStr: i.formatIso(t.range.end),
                  timeZone: i.timeZone,
                }),
                function (t) {
                  e({ rawEvents: t });
                },
                n
              );
            },
          },
        ],
      });
    function Qn(t, e, n, i, r) {
      var o = null;
      "GET" === (t = t.toUpperCase())
        ? (e = (function (t, e) {
            return t + (-1 === t.indexOf("?") ? "?" : "&") + ti(e);
          })(e, n))
        : (o = ti(n));
      var a = new XMLHttpRequest();
      a.open(t, e, !0),
        "GET" !== t &&
          a.setRequestHeader(
            "Content-Type",
            "application/x-www-form-urlencoded"
          ),
        (a.onload = function () {
          if (a.status >= 200 && a.status < 400)
            try {
              var t = JSON.parse(a.responseText);
              i(t, a);
            } catch (t) {
              r("Failure parsing JSON", a);
            }
          else r("Request failed", a);
        }),
        (a.onerror = function () {
          r("Request failed", a);
        }),
        a.send(o);
    }
    function ti(t) {
      var e = [];
      for (var n in t)
        e.push(encodeURIComponent(n) + "=" + encodeURIComponent(t[n]));
      return e.join("&");
    }
    var ei = Gn({
        eventSourceDefs: [
          {
            parseMeta: function (t) {
              if ("string" == typeof t) t = { url: t };
              else if (!t || "object" != typeof t || !t.url) return null;
              return {
                url: t.url,
                method: (t.method || "GET").toUpperCase(),
                extraParams: t.extraParams,
                startParam: t.startParam,
                endParam: t.endParam,
                timeZoneParam: t.timeZoneParam,
              };
            },
            fetch: function (t, e, n) {
              var i = t.eventSource.meta,
                r = (function (t, e, n) {
                  var i,
                    r,
                    o,
                    a,
                    s = n.dateEnv,
                    l = {};
                  return (
                    null == (i = t.startParam) && (i = n.opt("startParam")),
                    null == (r = t.endParam) && (r = n.opt("endParam")),
                    null == (o = t.timeZoneParam) &&
                      (o = n.opt("timeZoneParam")),
                    (a =
                      "function" == typeof t.extraParams
                        ? t.extraParams()
                        : t.extraParams || {}),
                    Gt(l, a),
                    (l[i] = s.formatIso(e.start)),
                    (l[r] = s.formatIso(e.end)),
                    "local" !== s.timeZone && (l[o] = s.timeZone),
                    l
                  );
                })(i, t.range, t.calendar);
              Qn(
                i.method,
                i.url,
                r,
                function (t, n) {
                  e({ rawEvents: t, xhr: n });
                },
                function (t, e) {
                  n({ message: t, xhr: e });
                }
              );
            },
          },
        ],
      }),
      ni = Gn({
        recurringTypes: [
          {
            parse: function (t, e, n) {
              var i,
                r,
                o = n.createMarker.bind(n),
                a = $t(
                  t,
                  {
                    daysOfWeek: null,
                    startTime: lt,
                    endTime: lt,
                    startRecur: o,
                    endRecur: o,
                  },
                  {},
                  e
                ),
                s = !1;
              for (var l in a)
                if (null != a[l]) {
                  s = !0;
                  break;
                }
              if (s) {
                var c = null;
                return (
                  "duration" in e && ((c = lt(e.duration)), delete e.duration),
                  !c &&
                    a.startTime &&
                    a.endTime &&
                    ((i = a.endTime),
                    (r = a.startTime),
                    (c = {
                      years: i.years - r.years,
                      months: i.months - r.months,
                      days: i.days - r.days,
                      milliseconds: i.milliseconds - r.milliseconds,
                    })),
                  {
                    allDayGuess: Boolean(!a.startTime && !a.endTime),
                    duration: c,
                    typeData: a,
                  }
                );
              }
              return null;
            },
            expand: function (t, e, n) {
              var i = be(e, { start: t.startRecur, end: t.endRecur });
              return i
                ? (function (t, e, n, i) {
                    for (
                      var r = t ? ee(t) : null,
                        o = Z(n.start),
                        a = n.end,
                        s = [];
                      o < a;

                    ) {
                      var l = void 0;
                      (r && !r[o.getUTCDay()]) ||
                        ((l = e ? i.add(o, e) : o), s.push(l)),
                        (o = U(o, 1));
                    }
                    return s;
                  })(t.daysOfWeek, t.startTime, i, n)
                : [];
            },
          },
        ],
      }),
      ii = Gn({
        optionChangeHandlers: {
          events: function (t, e, n) {
            ri([t], e, n);
          },
          eventSources: ri,
          plugins: function (t, e) {
            e.addPluginInputs(t);
          },
        },
      });
    function ri(t, e, n) {
      for (
        var i = ne(e.state.eventSources), r = [], o = 0, a = t;
        o < a.length;
        o++
      ) {
        for (var s = a[o], l = !1, c = 0; c < i.length; c++)
          if (n(i[c]._raw, s)) {
            i.splice(c, 1), (l = !0);
            break;
          }
        l || r.push(s);
      }
      for (var d = 0, u = i; d < u.length; d++) {
        var p = u[d];
        e.dispatch({ type: "REMOVE_EVENT_SOURCE", sourceId: p.sourceId });
      }
      for (var h = 0, f = r; h < f.length; h++) {
        var b = f[h];
        e.addEventSource(b);
      }
    }
    var oi = {},
      ai = {
        defaultRangeSeparator: " - ",
        titleRangeSeparator: " – ",
        defaultTimedEventDuration: "01:00:00",
        defaultAllDayEventDuration: { day: 1 },
        forceEventDuration: !1,
        nextDayThreshold: "00:00:00",
        columnHeader: !0,
        defaultView: "",
        aspectRatio: 1.35,
        header: { left: "title", center: "", right: "today prev,next" },
        weekends: !0,
        weekNumbers: !1,
        weekNumberCalculation: "local",
        editable: !1,
        scrollTime: "06:00:00",
        minTime: "00:00:00",
        maxTime: "24:00:00",
        showNonCurrentDates: !0,
        lazyFetching: !0,
        startParam: "start",
        endParam: "end",
        timeZoneParam: "timeZone",
        timeZone: "local",
        locales: [],
        locale: "",
        timeGridEventMinHeight: 0,
        themeSystem: "standard",
        dragRevertDuration: 500,
        dragScroll: !0,
        allDayMaintainDuration: !1,
        unselectAuto: !0,
        dropAccept: "*",
        eventOrder: "start,-duration,allDay,title",
        eventLimit: !1,
        eventLimitClick: "popover",
        dayPopoverFormat: { month: "long", day: "numeric", year: "numeric" },
        handleWindowResize: !0,
        windowResizeDelay: 100,
        longPressDelay: 1e3,
        eventDragMinDistance: 5,
      },
      si = {
        header: { left: "next,prev today", center: "", right: "title" },
        buttonIcons: {
          prev: "fc-icon-chevron-right",
          next: "fc-icon-chevron-left",
          prevYear: "fc-icon-chevrons-right",
          nextYear: "fc-icon-chevrons-left",
        },
      },
      li = ["header", "footer", "buttonText", "buttonIcons"],
      ci = [Zn, Jn, ei, ni, ii],
      di = {
        code: "en",
        week: { dow: 0, doy: 4 },
        dir: "ltr",
        buttonText: {
          prev: "prev",
          next: "next",
          prevYear: "prev year",
          nextYear: "next year",
          year: "year",
          today: "today",
          month: "month",
          week: "week",
          day: "day",
          list: "list",
        },
        weekLabel: "W",
        allDayText: "all-day",
        eventLimitText: "more",
        noEventsMessage: "No events to display",
      };
    function ui(t) {
      for (
        var e = t.length > 0 ? t[0].code : "en",
          n = window.FullCalendarLocalesAll || [],
          i = window.FullCalendarLocales || {},
          r = n.concat(ne(i), t),
          o = { en: di },
          a = 0,
          s = r;
        a < s.length;
        a++
      ) {
        var l = s[a];
        o[l.code] = l;
      }
      return { map: o, defaultCode: e };
    }
    function pi(t, e) {
      return "object" != typeof t || Array.isArray(t)
        ? (function (t, e) {
            var n = [].concat(t || []),
              i =
                (function (t, e) {
                  for (var n = 0; n < t.length; n++)
                    for (
                      var i = t[n].toLocaleLowerCase().split("-"), r = i.length;
                      r > 0;
                      r--
                    ) {
                      var o = i.slice(0, r).join("-");
                      if (e[o]) return e[o];
                    }
                  return null;
                })(n, e) || di;
            return hi(t, n, i);
          })(t, e)
        : hi(t.code, [t.code], t);
    }
    function hi(t, e, n) {
      var i = Jt([di, n], ["buttonText"]);
      delete i.code;
      var r = i.week;
      return (
        delete i.week,
        {
          codeArg: t,
          codes: e,
          week: r,
          simpleNumberFormat: new Intl.NumberFormat(t),
          options: i,
        }
      );
    }
    var fi,
      bi = (function () {
        function t(t) {
          (this.overrides = Gt({}, t)),
            (this.dynamicOverrides = {}),
            this.compute();
        }
        return (
          (t.prototype.mutate = function (t, e, n) {
            if (Object.keys(t).length || e.length) {
              var i = n ? this.dynamicOverrides : this.overrides;
              Gt(i, t);
              for (var r = 0, o = e; r < o.length; r++) delete i[o[r]];
              this.compute();
            }
          }),
          (t.prototype.compute = function () {
            var t = Bt(
                this.dynamicOverrides.locales,
                this.overrides.locales,
                ai.locales
              ),
              e = Bt(
                this.dynamicOverrides.locale,
                this.overrides.locale,
                ai.locale
              ),
              n = ui(t),
              i = pi(e || n.defaultCode, n.map).options,
              r =
                "rtl" ===
                Bt(this.dynamicOverrides.dir, this.overrides.dir, i.dir)
                  ? si
                  : {};
            (this.dirDefaults = r),
              (this.localeDefaults = i),
              (this.computed = Jt(
                [ai, r, i, this.overrides, this.dynamicOverrides],
                li
              ));
          }),
          t
        );
      })(),
      mi = {},
      gi = (function () {
        function t() {}
        return (
          (t.prototype.getMarkerYear = function (t) {
            return t.getUTCFullYear();
          }),
          (t.prototype.getMarkerMonth = function (t) {
            return t.getUTCMonth();
          }),
          (t.prototype.getMarkerDay = function (t) {
            return t.getUTCDate();
          }),
          (t.prototype.arrayToMarker = function (t) {
            return it(t);
          }),
          (t.prototype.markerToArray = function (t) {
            return nt(t);
          }),
          t
        );
      })();
    (fi = gi), (mi.gregory = fi);
    var vi =
        /^\s*(\d{4})(-(\d{2})(-(\d{2})([T ](\d{2}):(\d{2})(:(\d{2})(\.(\d+))?)?(Z|(([-+])(\d{2})(:?(\d{2}))?))?)?)?)?$/,
      _i = (function () {
        function t(t) {
          var e = (this.timeZone = t.timeZone),
            n = "local" !== e && "UTC" !== e;
          t.namedTimeZoneImpl &&
            n &&
            (this.namedTimeZoneImpl = new t.namedTimeZoneImpl(e)),
            (this.canComputeOffset = Boolean(!n || this.namedTimeZoneImpl)),
            (this.calendarSystem = (function (t) {
              return new mi[t]();
            })(t.calendarSystem)),
            (this.locale = t.locale),
            (this.weekDow = t.locale.week.dow),
            (this.weekDoy = t.locale.week.doy),
            "ISO" === t.weekNumberCalculation &&
              ((this.weekDow = 1), (this.weekDoy = 4)),
            "number" == typeof t.firstDay && (this.weekDow = t.firstDay),
            "function" == typeof t.weekNumberCalculation &&
              (this.weekNumberFunc = t.weekNumberCalculation),
            (this.weekLabel =
              null != t.weekLabel ? t.weekLabel : t.locale.options.weekLabel),
            (this.cmdFormatter = t.cmdFormatter);
        }
        return (
          (t.prototype.createMarker = function (t) {
            var e = this.createMarkerMeta(t);
            return null === e ? null : e.marker;
          }),
          (t.prototype.createNowMarker = function () {
            return this.canComputeOffset
              ? this.timestampToMarker(new Date().valueOf())
              : it(tt(new Date()));
          }),
          (t.prototype.createMarkerMeta = function (t) {
            if ("string" == typeof t) return this.parse(t);
            var e = null;
            return (
              "number" == typeof t
                ? (e = this.timestampToMarker(t))
                : t instanceof Date
                ? ((t = t.valueOf()),
                  isNaN(t) || (e = this.timestampToMarker(t)))
                : Array.isArray(t) && (e = it(t)),
              null !== e && rt(e)
                ? { marker: e, isTimeUnspecified: !1, forcedTzo: null }
                : null
            );
          }),
          (t.prototype.parse = function (t) {
            var e = (function (t) {
              var e = vi.exec(t);
              if (e) {
                var n = new Date(
                  Date.UTC(
                    Number(e[1]),
                    e[3] ? Number(e[3]) - 1 : 0,
                    Number(e[5] || 1),
                    Number(e[7] || 0),
                    Number(e[8] || 0),
                    Number(e[10] || 0),
                    e[12] ? 1e3 * Number("0." + e[12]) : 0
                  )
                );
                if (rt(n)) {
                  var i = null;
                  return (
                    e[13] &&
                      (i =
                        ("-" === e[15] ? -1 : 1) *
                        (60 * Number(e[16] || 0) + Number(e[18] || 0))),
                    { marker: n, isTimeUnspecified: !e[6], timeZoneOffset: i }
                  );
                }
              }
              return null;
            })(t);
            if (null === e) return null;
            var n = e.marker,
              i = null;
            return (
              null !== e.timeZoneOffset &&
                (this.canComputeOffset
                  ? (n = this.timestampToMarker(
                      n.valueOf() - 60 * e.timeZoneOffset * 1e3
                    ))
                  : (i = e.timeZoneOffset)),
              {
                marker: n,
                isTimeUnspecified: e.isTimeUnspecified,
                forcedTzo: i,
              }
            );
          }),
          (t.prototype.getYear = function (t) {
            return this.calendarSystem.getMarkerYear(t);
          }),
          (t.prototype.getMonth = function (t) {
            return this.calendarSystem.getMarkerMonth(t);
          }),
          (t.prototype.add = function (t, e) {
            var n = this.calendarSystem.markerToArray(t);
            return (
              (n[0] += e.years),
              (n[1] += e.months),
              (n[2] += e.days),
              (n[6] += e.milliseconds),
              this.calendarSystem.arrayToMarker(n)
            );
          }),
          (t.prototype.subtract = function (t, e) {
            var n = this.calendarSystem.markerToArray(t);
            return (
              (n[0] -= e.years),
              (n[1] -= e.months),
              (n[2] -= e.days),
              (n[6] -= e.milliseconds),
              this.calendarSystem.arrayToMarker(n)
            );
          }),
          (t.prototype.addYears = function (t, e) {
            var n = this.calendarSystem.markerToArray(t);
            return (n[0] += e), this.calendarSystem.arrayToMarker(n);
          }),
          (t.prototype.addMonths = function (t, e) {
            var n = this.calendarSystem.markerToArray(t);
            return (n[1] += e), this.calendarSystem.arrayToMarker(n);
          }),
          (t.prototype.diffWholeYears = function (t, e) {
            var n = this.calendarSystem;
            return ot(t) === ot(e) &&
              n.getMarkerDay(t) === n.getMarkerDay(e) &&
              n.getMarkerMonth(t) === n.getMarkerMonth(e)
              ? n.getMarkerYear(e) - n.getMarkerYear(t)
              : null;
          }),
          (t.prototype.diffWholeMonths = function (t, e) {
            var n = this.calendarSystem;
            return ot(t) === ot(e) && n.getMarkerDay(t) === n.getMarkerDay(e)
              ? n.getMarkerMonth(e) -
                  n.getMarkerMonth(t) +
                  12 * (n.getMarkerYear(e) - n.getMarkerYear(t))
              : null;
          }),
          (t.prototype.greatestWholeUnit = function (t, e) {
            var n = this.diffWholeYears(t, e);
            return null !== n
              ? { unit: "year", value: n }
              : null !== (n = this.diffWholeMonths(t, e))
              ? { unit: "month", value: n }
              : null !==
                (n = (function (t, e) {
                  var n = K(t, e);
                  return null !== n && n % 7 == 0 ? n / 7 : null;
                })(t, e))
              ? { unit: "week", value: n }
              : null !== (n = K(t, e))
              ? { unit: "day", value: n }
              : Wt(
                  (n = (function (t, e) {
                    return (e.valueOf() - t.valueOf()) / 36e5;
                  })(t, e))
                )
              ? { unit: "hour", value: n }
              : Wt(
                  (n = (function (t, e) {
                    return (e.valueOf() - t.valueOf()) / 6e4;
                  })(t, e))
                )
              ? { unit: "minute", value: n }
              : Wt(
                  (n = (function (t, e) {
                    return (e.valueOf() - t.valueOf()) / 1e3;
                  })(t, e))
                )
              ? { unit: "second", value: n }
              : { unit: "millisecond", value: e.valueOf() - t.valueOf() };
          }),
          (t.prototype.countDurationsBetween = function (t, e, n) {
            var i;
            return n.years && null !== (i = this.diffWholeYears(t, e))
              ? i / (ft(n) / 365)
              : n.months && null !== (i = this.diffWholeMonths(t, e))
              ? i /
                (function (t) {
                  return ft(t) / 30;
                })(n)
              : n.days && null !== (i = K(t, e))
              ? i / ft(n)
              : (e.valueOf() - t.valueOf()) / gt(n);
          }),
          (t.prototype.startOf = function (t, e) {
            return "year" === e
              ? this.startOfYear(t)
              : "month" === e
              ? this.startOfMonth(t)
              : "week" === e
              ? this.startOfWeek(t)
              : "day" === e
              ? Z(t)
              : "hour" === e
              ? (function (t) {
                  return it([
                    t.getUTCFullYear(),
                    t.getUTCMonth(),
                    t.getUTCDate(),
                    t.getUTCHours(),
                  ]);
                })(t)
              : "minute" === e
              ? (function (t) {
                  return it([
                    t.getUTCFullYear(),
                    t.getUTCMonth(),
                    t.getUTCDate(),
                    t.getUTCHours(),
                    t.getUTCMinutes(),
                  ]);
                })(t)
              : "second" === e
              ? (function (t) {
                  return it([
                    t.getUTCFullYear(),
                    t.getUTCMonth(),
                    t.getUTCDate(),
                    t.getUTCHours(),
                    t.getUTCMinutes(),
                    t.getUTCSeconds(),
                  ]);
                })(t)
              : void 0;
          }),
          (t.prototype.startOfYear = function (t) {
            return this.calendarSystem.arrayToMarker([
              this.calendarSystem.getMarkerYear(t),
            ]);
          }),
          (t.prototype.startOfMonth = function (t) {
            return this.calendarSystem.arrayToMarker([
              this.calendarSystem.getMarkerYear(t),
              this.calendarSystem.getMarkerMonth(t),
            ]);
          }),
          (t.prototype.startOfWeek = function (t) {
            return this.calendarSystem.arrayToMarker([
              this.calendarSystem.getMarkerYear(t),
              this.calendarSystem.getMarkerMonth(t),
              t.getUTCDate() - ((t.getUTCDay() - this.weekDow + 7) % 7),
            ]);
          }),
          (t.prototype.computeWeekNumber = function (t) {
            return this.weekNumberFunc
              ? this.weekNumberFunc(this.toDate(t))
              : (function (t, e, n) {
                  var i = t.getUTCFullYear(),
                    r = J(t, i, e, n);
                  if (r < 1) return J(t, i - 1, e, n);
                  var o = J(t, i + 1, e, n);
                  return o >= 1 ? Math.min(r, o) : r;
                })(t, this.weekDow, this.weekDoy);
          }),
          (t.prototype.format = function (t, e, n) {
            return (
              void 0 === n && (n = {}),
              e.format(
                {
                  marker: t,
                  timeZoneOffset:
                    null != n.forcedTzo ? n.forcedTzo : this.offsetForMarker(t),
                },
                this
              )
            );
          }),
          (t.prototype.formatRange = function (t, e, n, i) {
            return (
              void 0 === i && (i = {}),
              i.isEndExclusive && (e = X(e, -1)),
              n.formatRange(
                {
                  marker: t,
                  timeZoneOffset:
                    null != i.forcedStartTzo
                      ? i.forcedStartTzo
                      : this.offsetForMarker(t),
                },
                {
                  marker: e,
                  timeZoneOffset:
                    null != i.forcedEndTzo
                      ? i.forcedEndTzo
                      : this.offsetForMarker(e),
                },
                this
              )
            );
          }),
          (t.prototype.formatIso = function (t, e) {
            void 0 === e && (e = {});
            var n = null;
            return (
              e.omitTimeZoneOffset ||
                (n =
                  null != e.forcedTzo ? e.forcedTzo : this.offsetForMarker(t)),
              (function (t, e, n) {
                void 0 === n && (n = !1);
                var i = t.toISOString();
                return (
                  (i = i.replace(".000", "")),
                  n && (i = i.replace("T00:00:00Z", "")),
                  i.length > 10 &&
                    (null == e
                      ? (i = i.replace("Z", ""))
                      : 0 !== e && (i = i.replace("Z", je(e, !0)))),
                  i
                );
              })(t, n, e.omitTime)
            );
          }),
          (t.prototype.timestampToMarker = function (t) {
            return "local" === this.timeZone
              ? it(tt(new Date(t)))
              : "UTC" !== this.timeZone && this.namedTimeZoneImpl
              ? it(this.namedTimeZoneImpl.timestampToArray(t))
              : new Date(t);
          }),
          (t.prototype.offsetForMarker = function (t) {
            return "local" === this.timeZone
              ? -et(nt(t)).getTimezoneOffset()
              : "UTC" === this.timeZone
              ? 0
              : this.namedTimeZoneImpl
              ? this.namedTimeZoneImpl.offsetForArray(nt(t))
              : null;
          }),
          (t.prototype.toDate = function (t, e) {
            return "local" === this.timeZone
              ? et(nt(t))
              : "UTC" === this.timeZone
              ? new Date(t.valueOf())
              : this.namedTimeZoneImpl
              ? new Date(
                  t.valueOf() -
                    1e3 * this.namedTimeZoneImpl.offsetForArray(nt(t)) * 60
                )
              : new Date(t.valueOf() - (e || 0));
          }),
          t
        );
      })(),
      yi = {
        id: String,
        allDayDefault: Boolean,
        eventDataTransform: Function,
        success: Function,
        failure: Function,
      },
      Mi = 0;
    function Oi(t, e) {
      return !e.pluginSystem.hooks.eventSourceDefs[t.sourceDefId].ignoreRange;
    }
    function wi(t, e) {
      for (
        var n = e.pluginSystem.hooks.eventSourceDefs, i = n.length - 1;
        i >= 0;
        i--
      ) {
        var r = n[i].parseMeta(t);
        if (r) {
          var o = Ai("object" == typeof t ? t : {}, r, i, e);
          return (o._raw = t), o;
        }
      }
      return null;
    }
    function Ai(t, e, n, i) {
      var r = {},
        o = $t(t, yi, {}, r),
        a = {},
        s = bn(r, i, a);
      return (
        (o.isFetching = !1),
        (o.latestFetchId = ""),
        (o.fetchRange = null),
        (o.publicId = String(t.id || "")),
        (o.sourceId = String(Mi++)),
        (o.sourceDefId = n),
        (o.meta = e),
        (o.ui = s),
        (o.extendedProps = a),
        o
      );
    }
    var xi = 0;
    function zi(t, e, n) {
      return Ci(
        t,
        Qt(t, function (t) {
          return (function (t, e, n) {
            return Oi(t, n)
              ? !n.opt("lazyFetching") ||
                  !t.fetchRange ||
                  t.isFetching ||
                  e.start < t.fetchRange.start ||
                  e.end > t.fetchRange.end
              : !t.latestFetchId;
          })(t, e, n);
        }),
        e,
        n
      );
    }
    function Ci(t, e, n, i) {
      var r = {};
      for (var o in t) {
        var a = t[o];
        e[o] ? (r[o] = ki(a, n, i)) : (r[o] = a);
      }
      return r;
    }
    function ki(t, e, n) {
      var i = n.pluginSystem.hooks.eventSourceDefs[t.sourceDefId],
        r = String(xi++);
      return (
        i.fetch(
          { eventSource: t, calendar: n, range: e },
          function (i) {
            var o,
              a,
              s = i.rawEvents,
              l = n.opt("eventSourceSuccess");
            t.success && (a = t.success(s, i.xhr)),
              l && (o = l(s, i.xhr)),
              (s = a || o || s),
              n.dispatch({
                type: "RECEIVE_EVENTS",
                sourceId: t.sourceId,
                fetchId: r,
                fetchRange: e,
                rawEvents: s,
              });
          },
          function (i) {
            var o = n.opt("eventSourceFailure");
            t.failure && t.failure(i),
              o && o(i),
              n.dispatch({
                type: "RECEIVE_EVENT_ERROR",
                sourceId: t.sourceId,
                fetchId: r,
                fetchRange: e,
                error: i,
              });
          }
        ),
        Gt({}, t, { isFetching: !0, latestFetchId: r })
      );
    }
    var Si = (function () {
      function t(t, e) {
        (this.viewSpec = t),
          (this.options = t.options),
          (this.dateEnv = e.dateEnv),
          (this.calendar = e),
          this.initHiddenDays();
      }
      return (
        (t.prototype.buildPrev = function (t, e) {
          var n = this.dateEnv,
            i = n.subtract(n.startOf(e, t.currentRangeUnit), t.dateIncrement);
          return this.build(i, -1);
        }),
        (t.prototype.buildNext = function (t, e) {
          var n = this.dateEnv,
            i = n.add(n.startOf(e, t.currentRangeUnit), t.dateIncrement);
          return this.build(i, 1);
        }),
        (t.prototype.build = function (t, e, n) {
          var i, r, o, a, s, l, c, d, u, p;
          return (
            void 0 === n && (n = !1),
            (i = this.buildValidRange()),
            (i = this.trimHiddenDays(i)),
            n &&
              ((u = t),
              (t =
                null != (p = i).start && u < p.start
                  ? p.start
                  : null != p.end && u >= p.end
                  ? new Date(p.end.valueOf() - 1)
                  : u)),
            (a = this.buildCurrentRangeInfo(t, e)),
            (s = /^(year|month|week|day)$/.test(a.unit)),
            (l = this.buildRenderRange(
              this.trimHiddenDays(a.range),
              a.unit,
              s
            )),
            (c = l = this.trimHiddenDays(l)),
            this.options.showNonCurrentDates || (c = be(c, a.range)),
            (r = lt(this.options.minTime)),
            (o = lt(this.options.maxTime)),
            (c = be((c = this.adjustActiveRange(c, r, o)), i)),
            (d = ge(a.range, i)),
            {
              validRange: i,
              currentRange: a.range,
              currentRangeUnit: a.unit,
              isRangeAllDay: s,
              activeRange: c,
              renderRange: l,
              minTime: r,
              maxTime: o,
              isValid: d,
              dateIncrement: this.buildDateIncrement(a.duration),
            }
          );
        }),
        (t.prototype.buildValidRange = function () {
          return (
            this.getRangeOption("validRange", this.calendar.getNow()) || {
              start: null,
              end: null,
            }
          );
        }),
        (t.prototype.buildCurrentRangeInfo = function (t, e) {
          var n,
            i = this.viewSpec,
            r = this.dateEnv,
            o = null,
            a = null,
            s = null;
          return (
            i.duration
              ? ((o = i.duration),
                (a = i.durationUnit),
                (s = this.buildRangeFromDuration(t, e, o, a)))
              : (n = this.options.dayCount)
              ? ((a = "day"), (s = this.buildRangeFromDayCount(t, e, n)))
              : (s = this.buildCustomVisibleRange(t))
              ? (a = r.greatestWholeUnit(s.start, s.end).unit)
              : ((a = _t((o = this.getFallbackDuration())).unit),
                (s = this.buildRangeFromDuration(t, e, o, a))),
            { duration: o, unit: a, range: s }
          );
        }),
        (t.prototype.getFallbackDuration = function () {
          return lt({ day: 1 });
        }),
        (t.prototype.adjustActiveRange = function (t, e, n) {
          var i = this.dateEnv,
            r = t.start,
            o = t.end;
          return (
            this.viewSpec.class.prototype.usesMinMaxTime &&
              (ft(e) < 0 && ((r = Z(r)), (r = i.add(r, e))),
              ft(n) > 1 && ((o = U((o = Z(o)), -1)), (o = i.add(o, n)))),
            { start: r, end: o }
          );
        }),
        (t.prototype.buildRangeFromDuration = function (t, e, n, i) {
          var r,
            o,
            a,
            s,
            l,
            c = this.dateEnv,
            d = this.options.dateAlignment;
          function u() {
            (a = c.startOf(t, d)),
              (s = c.add(a, n)),
              (l = { start: a, end: s });
          }
          return (
            d ||
              ((r = this.options.dateIncrement)
                ? ((o = lt(r)), (d = gt(o) < gt(n) ? _t(o, !dt(r)).unit : i))
                : (d = i)),
            ft(n) <= 1 &&
              this.isHiddenDay(a) &&
              (a = Z((a = this.skipHiddenDays(a, e)))),
            u(),
            this.trimHiddenDays(l) || ((t = this.skipHiddenDays(t, e)), u()),
            l
          );
        }),
        (t.prototype.buildRangeFromDayCount = function (t, e, n) {
          var i,
            r = this.dateEnv,
            o = this.options.dateAlignment,
            a = 0,
            s = t;
          o && (s = r.startOf(s, o)),
            (s = Z(s)),
            (i = s = this.skipHiddenDays(s, e));
          do {
            (i = U(i, 1)), this.isHiddenDay(i) || a++;
          } while (a < n);
          return { start: s, end: i };
        }),
        (t.prototype.buildCustomVisibleRange = function (t) {
          var e = this.dateEnv,
            n = this.getRangeOption("visibleRange", e.toDate(t));
          return !n || (null != n.start && null != n.end) ? n : null;
        }),
        (t.prototype.buildRenderRange = function (t, e, n) {
          return t;
        }),
        (t.prototype.buildDateIncrement = function (t) {
          var e,
            n = this.options.dateIncrement;
          return n
            ? lt(n)
            : (e = this.options.dateAlignment)
            ? lt(1, e)
            : t || lt({ days: 1 });
        }),
        (t.prototype.getRangeOption = function (t) {
          for (var e = [], n = 1; n < arguments.length; n++)
            e[n - 1] = arguments[n];
          var i = this.options[t];
          return (
            "function" == typeof i && (i = i.apply(null, e)),
            i && (i = pe(i, this.dateEnv)),
            i && (i = Yt(i)),
            i
          );
        }),
        (t.prototype.initHiddenDays = function () {
          var t,
            e = this.options.hiddenDays || [],
            n = [],
            i = 0;
          for (!1 === this.options.weekends && e.push(0, 6), t = 0; t < 7; t++)
            (n[t] = -1 !== e.indexOf(t)) || i++;
          if (!i) throw new Error("invalid hiddenDays");
          this.isHiddenDayHash = n;
        }),
        (t.prototype.trimHiddenDays = function (t) {
          var e = t.start,
            n = t.end;
          return (
            e && (e = this.skipHiddenDays(e)),
            n && (n = this.skipHiddenDays(n, -1, !0)),
            null == e || null == n || e < n ? { start: e, end: n } : null
          );
        }),
        (t.prototype.isHiddenDay = function (t) {
          return (
            t instanceof Date && (t = t.getUTCDay()), this.isHiddenDayHash[t]
          );
        }),
        (t.prototype.skipHiddenDays = function (t, e, n) {
          for (
            void 0 === e && (e = 1), void 0 === n && (n = !1);
            this.isHiddenDayHash[(t.getUTCDay() + (n ? e : 0) + 7) % 7];

          )
            t = U(t, e);
          return t;
        }),
        t
      );
    })();
    function Ti(t, e, n) {
      switch (e.type) {
        case "PREV":
        case "NEXT":
          return _e(n.currentRange, t) ? t : n.currentRange.start;
        case "SET_DATE":
        case "SET_VIEW_TYPE":
          var i = e.dateMarker || t;
          return n.activeRange && !_e(n.activeRange, i)
            ? n.currentRange.start
            : i;
        default:
          return t;
      }
    }
    function Di(t, e, n) {
      switch (e.type) {
        case "SELECT_DATES":
          return e.selection;
        case "UNSELECT_DATES":
          return null;
        default:
          return t;
      }
    }
    function Li(t, e) {
      switch (e.type) {
        case "SELECT_EVENT":
          return e.eventInstanceId;
        case "UNSELECT_EVENT":
          return "";
        default:
          return t;
      }
    }
    function qi(t, e, n, i) {
      switch (e.type) {
        case "SET_EVENT_DRAG":
          var r = e.state;
          return {
            affectedEvents: r.affectedEvents,
            mutatedEvents: r.mutatedEvents,
            isEvent: r.isEvent,
            origSeg: r.origSeg,
          };
        case "UNSET_EVENT_DRAG":
          return null;
        default:
          return t;
      }
    }
    function Ei(t, e, n, i) {
      switch (e.type) {
        case "SET_EVENT_RESIZE":
          var r = e.state;
          return {
            affectedEvents: r.affectedEvents,
            mutatedEvents: r.mutatedEvents,
            isEvent: r.isEvent,
            origSeg: r.origSeg,
          };
        case "UNSET_EVENT_RESIZE":
          return null;
        default:
          return t;
      }
    }
    function ji(t) {
      var e = 0;
      for (var n in t) t[n].isFetching && e++;
      return e;
    }
    var Pi = { start: null, end: null, allDay: Boolean };
    function Ri(t, e) {
      return (
        me(t.range, e.range) &&
        t.allDay === e.allDay &&
        (function (t, e) {
          for (var n in e)
            if ("range" !== n && "allDay" !== n && t[n] !== e[n]) return !1;
          for (var n in t) if (!(n in e)) return !1;
          return !0;
        })(t, e)
      );
    }
    function Ii(t, e, n) {
      var i = An({ editable: !1 }, "", t.allDay, !0, n);
      return {
        def: i,
        ui: Ye(i, e),
        instance: xn(i.defId, t.range),
        range: t.range,
        isStart: !0,
        isEnd: !0,
      };
    }
    function Wi(t, e, n, i) {
      if (e[t]) return e[t];
      var r = (function (t, e, n, i) {
        var r = n[t],
          o = i[t],
          a = function (t) {
            return r && null !== r[t] ? r[t] : o && null !== o[t] ? o[t] : null;
          },
          s = a("class"),
          l = a("superType");
        !l && s && (l = Ni(s, i) || Ni(s, n));
        var c = null;
        if (l) {
          if (l === t)
            throw new Error(
              "Can't have a custom view type that references itself"
            );
          c = Wi(l, e, n, i);
        }
        return (
          !s && c && (s = c.class),
          s
            ? {
                type: t,
                class: s,
                defaults: Gt({}, c ? c.defaults : {}, r ? r.options : {}),
                overrides: Gt({}, c ? c.overrides : {}, o ? o.options : {}),
              }
            : null
        );
      })(t, e, n, i);
      return r && (e[t] = r), r;
    }
    function Ni(t, e) {
      var n = Object.getPrototypeOf(t.prototype);
      for (var i in e) {
        var r = e[i];
        if (r.class && r.class.prototype === n) return i;
      }
      return "";
    }
    function Bi(t) {
      return te(t, $i);
    }
    var Fi = { type: String, class: null };
    function $i(t) {
      "function" == typeof t && (t = { class: t });
      var e = {},
        n = $t(t, Fi, {}, e);
      return { superType: n.type, class: n.class, options: e };
    }
    var Hi = (function (t) {
        function e(e) {
          var n = t.call(this) || this;
          return (
            (n._renderLayout = kn(n.renderLayout, n.unrenderLayout)),
            (n._updateTitle = kn(n.updateTitle, null, [n._renderLayout])),
            (n._updateActiveButton = kn(n.updateActiveButton, null, [
              n._renderLayout,
            ])),
            (n._updateToday = kn(n.updateToday, null, [n._renderLayout])),
            (n._updatePrev = kn(n.updatePrev, null, [n._renderLayout])),
            (n._updateNext = kn(n.updateNext, null, [n._renderLayout])),
            (n.el = o("div", { className: "fc-toolbar " + e })),
            n
          );
        }
        return (
          Vt(e, t),
          (e.prototype.destroy = function () {
            t.prototype.destroy.call(this),
              this._renderLayout.unrender(),
              h(this.el);
          }),
          (e.prototype.render = function (t) {
            this._renderLayout(t.layout),
              this._updateTitle(t.title),
              this._updateActiveButton(t.activeButton),
              this._updateToday(t.isTodayEnabled),
              this._updatePrev(t.isPrevEnabled),
              this._updateNext(t.isNextEnabled);
          }),
          (e.prototype.renderLayout = function (t) {
            var e = this.el;
            (this.viewsWithButtons = []),
              c(e, this.renderSection("left", t.left)),
              c(e, this.renderSection("center", t.center)),
              c(e, this.renderSection("right", t.right));
          }),
          (e.prototype.unrenderLayout = function () {
            this.el.innerHTML = "";
          }),
          (e.prototype.renderSection = function (t, e) {
            var n = this,
              i = this.context,
              r = i.theme,
              s = i.calendar,
              l = s.optionsManager,
              d = s.viewSpecs,
              u = o("div", { className: "fc-" + t }),
              p = l.computed.customButtons || {},
              h = l.overrides.buttonText || {},
              f = l.computed.buttonText || {};
            return (
              e &&
                e.split(" ").forEach(function (t, e) {
                  var i,
                    o = [],
                    l = !0;
                  if (
                    (t.split(",").forEach(function (t, e) {
                      var i, c, u, b, m, g, v, _, y;
                      "title" === t
                        ? (o.push(a("<h2>&nbsp;</h2>")), (l = !1))
                        : ((i = p[t])
                            ? ((u = function (t) {
                                i.click && i.click.call(_, t);
                              }),
                              (b = r.getCustomButtonIconClass(i)) ||
                                (b = r.getIconClass(t)) ||
                                (m = i.text))
                            : (c = d[t])
                            ? (n.viewsWithButtons.push(t),
                              (u = function () {
                                s.changeView(t);
                              }),
                              (m = c.buttonTextOverride) ||
                                (b = r.getIconClass(t)) ||
                                (m = c.buttonTextDefault))
                            : s[t] &&
                              ((u = function () {
                                s[t]();
                              }),
                              (m = h[t]) ||
                                (b = r.getIconClass(t)) ||
                                (m = f[t])),
                          u &&
                            ((v = [
                              "fc-" + t + "-button",
                              r.getClass("button"),
                            ]),
                            m
                              ? ((g = un(m)), (y = ""))
                              : b &&
                                ((g = "<span class='" + b + "'></span>"),
                                (y = ' aria-label="' + t + '"')),
                            (_ = a(
                              '<button type="button" class="' +
                                v.join(" ") +
                                '"' +
                                y +
                                ">" +
                                g +
                                "</button>"
                            )).addEventListener("click", u),
                            o.push(_)));
                    }),
                    o.length > 1)
                  ) {
                    i = document.createElement("div");
                    var b = r.getClass("buttonGroup");
                    l && b && i.classList.add(b), c(i, o), u.appendChild(i);
                  } else c(u, o);
                }),
              u
            );
          }),
          (e.prototype.updateToday = function (t) {
            this.toggleButtonEnabled("today", t);
          }),
          (e.prototype.updatePrev = function (t) {
            this.toggleButtonEnabled("prev", t);
          }),
          (e.prototype.updateNext = function (t) {
            this.toggleButtonEnabled("next", t);
          }),
          (e.prototype.updateTitle = function (t) {
            v(this.el, "h2").forEach(function (e) {
              e.innerText = t;
            });
          }),
          (e.prototype.updateActiveButton = function (t) {
            var e = this.context.theme.getClass("buttonActive");
            v(this.el, "button").forEach(function (n) {
              t && n.classList.contains("fc-" + t + "-button")
                ? n.classList.add(e)
                : n.classList.remove(e);
            });
          }),
          (e.prototype.toggleButtonEnabled = function (t, e) {
            v(this.el, ".fc-" + t + "-button").forEach(function (t) {
              t.disabled = !e;
            });
          }),
          e
        );
      })(Un),
      Yi = (function (t) {
        function e(e) {
          var n = t.call(this) || this;
          return (
            (n.elClassNames = []),
            (n.renderSkeleton = kn(n._renderSkeleton, n._unrenderSkeleton)),
            (n.renderToolbars = kn(n._renderToolbars, n._unrenderToolbars, [
              n.renderSkeleton,
            ])),
            (n.buildComponentContext = Me(Xi)),
            (n.buildViewPropTransformers = Me(Vi)),
            (n.el = e),
            (n.computeTitle = Me(Ui)),
            (n.parseBusinessHours = Me(function (t) {
              return Cn(t, n.context.calendar);
            })),
            n
          );
        }
        return (
          Vt(e, t),
          (e.prototype.render = function (t, e) {
            this.freezeHeight();
            var n = this.computeTitle(t.dateProfile, t.viewSpec.options);
            this.renderSkeleton(e),
              this.renderToolbars(t.viewSpec, t.dateProfile, t.currentDate, n),
              this.renderView(t, n),
              this.updateSize(),
              this.thawHeight();
          }),
          (e.prototype.destroy = function () {
            this.header && this.header.destroy(),
              this.footer && this.footer.destroy(),
              this.renderSkeleton.unrender(),
              t.prototype.destroy.call(this);
          }),
          (e.prototype._renderSkeleton = function (t) {
            this.updateElClassNames(t),
              d(
                this.el,
                (this.contentEl = o("div", { className: "fc-view-container" }))
              );
            for (
              var e = t.calendar,
                n = 0,
                i = e.pluginSystem.hooks.viewContainerModifiers;
              n < i.length;
              n++
            )
              (0, i[n])(this.contentEl, e);
          }),
          (e.prototype._unrenderSkeleton = function () {
            this.view &&
              ((this.savedScroll = this.view.queryScroll()),
              this.view.destroy(),
              (this.view = null)),
              h(this.contentEl),
              this.removeElClassNames();
          }),
          (e.prototype.removeElClassNames = function () {
            for (
              var t = this.el.classList, e = 0, n = this.elClassNames;
              e < n.length;
              e++
            ) {
              var i = n[e];
              t.remove(i);
            }
            this.elClassNames = [];
          }),
          (e.prototype.updateElClassNames = function (t) {
            this.removeElClassNames();
            var e = t.theme,
              n = t.options;
            this.elClassNames = ["fc", "fc-" + n.dir, e.getClass("widget")];
            for (
              var i = this.el.classList, r = 0, o = this.elClassNames;
              r < o.length;
              r++
            ) {
              var a = o[r];
              i.add(a);
            }
          }),
          (e.prototype._renderToolbars = function (t, e, n, i) {
            var r = this.context,
              o = this.header,
              a = this.footer,
              s = r.options,
              l = r.calendar,
              u = s.header,
              p = s.footer,
              h = this.props.dateProfileGenerator,
              f = l.getNow(),
              b = h.build(f),
              m = h.buildPrev(e, n),
              g = h.buildNext(e, n),
              v = {
                title: i,
                activeButton: t.type,
                isTodayEnabled: b.isValid && !_e(e.currentRange, f),
                isPrevEnabled: m.isValid,
                isNextEnabled: g.isValid,
              };
            u
              ? (o ||
                  ((o = this.header = new Hi("fc-header-toolbar")),
                  d(this.el, o.el)),
                o.receiveProps(Gt({ layout: u }, v), r))
              : o && (o.destroy(), (o = this.header = null)),
              p
                ? (a ||
                    ((a = this.footer = new Hi("fc-footer-toolbar")),
                    c(this.el, a.el)),
                  a.receiveProps(Gt({ layout: p }, v), r))
                : a && (a.destroy(), (a = this.footer = null));
          }),
          (e.prototype._unrenderToolbars = function () {
            this.header && (this.header.destroy(), (this.header = null)),
              this.footer && (this.footer.destroy(), (this.footer = null));
          }),
          (e.prototype.renderView = function (t, e) {
            var n = this.view,
              i = this.context,
              r = i.calendar,
              o = i.options,
              a = t.viewSpec,
              s = t.dateProfileGenerator;
            (n && n.viewSpec === a) ||
              (n && n.destroy(),
              (n = this.view = new a.class(a, this.contentEl)),
              this.savedScroll &&
                (n.addScroll(this.savedScroll, !0), (this.savedScroll = null))),
              (n.title = e);
            for (
              var l = {
                  dateProfileGenerator: s,
                  dateProfile: t.dateProfile,
                  businessHours: this.parseBusinessHours(
                    a.options.businessHours
                  ),
                  eventStore: t.eventStore,
                  eventUiBases: t.eventUiBases,
                  dateSelection: t.dateSelection,
                  eventSelection: t.eventSelection,
                  eventDrag: t.eventDrag,
                  eventResize: t.eventResize,
                },
                c = 0,
                d = this.buildViewPropTransformers(
                  r.pluginSystem.hooks.viewPropsTransformers
                );
              c < d.length;
              c++
            ) {
              var u = d[c];
              Gt(l, u.transform(l, a, t, o));
            }
            n.receiveProps(l, this.buildComponentContext(this.context, a, n));
          }),
          (e.prototype.updateSize = function (t) {
            void 0 === t && (t = !1);
            var e = this.view;
            e &&
              ((t || null == this.isHeightAuto) && this.computeHeightVars(),
              e.updateSize(t, this.viewHeight, this.isHeightAuto),
              e.updateNowIndicator(),
              e.popScroll(t));
          }),
          (e.prototype.computeHeightVars = function () {
            var t = this.context.calendar,
              e = t.opt("height"),
              n = t.opt("contentHeight");
            if (
              ((this.isHeightAuto = "auto" === e || "auto" === n),
              "number" == typeof n)
            )
              this.viewHeight = n;
            else if ("function" == typeof n) this.viewHeight = n();
            else if ("number" == typeof e)
              this.viewHeight = e - this.queryToolbarsHeight();
            else if ("function" == typeof e)
              this.viewHeight = e() - this.queryToolbarsHeight();
            else if ("parent" === e) {
              var i = this.el.parentNode;
              this.viewHeight =
                i.getBoundingClientRect().height - this.queryToolbarsHeight();
            } else
              this.viewHeight = Math.round(
                this.contentEl.getBoundingClientRect().width /
                  Math.max(t.opt("aspectRatio"), 0.5)
              );
          }),
          (e.prototype.queryToolbarsHeight = function () {
            var t = 0;
            return (
              this.header && (t += P(this.header.el)),
              this.footer && (t += P(this.footer.el)),
              t
            );
          }),
          (e.prototype.freezeHeight = function () {
            O(this.el, {
              height: this.el.getBoundingClientRect().height,
              overflow: "hidden",
            });
          }),
          (e.prototype.thawHeight = function () {
            O(this.el, { height: "", overflow: "" });
          }),
          e
        );
      })(Un);
    function Ui(t, e) {
      var n;
      return (
        (n = /^(year|month)$/.test(t.currentRangeUnit)
          ? t.currentRange
          : t.activeRange),
        this.context.dateEnv.formatRange(
          n.start,
          n.end,
          Ee(
            e.titleFormat ||
              (function (t) {
                var e = t.currentRangeUnit;
                if ("year" === e) return { year: "numeric" };
                if ("month" === e) return { year: "numeric", month: "long" };
                var n = K(t.currentRange.start, t.currentRange.end);
                return null !== n && n > 1
                  ? { year: "numeric", month: "short", day: "numeric" }
                  : { year: "numeric", month: "long", day: "numeric" };
              })(t),
            e.titleRangeSeparator
          ),
          { isEndExclusive: t.isRangeAllDay }
        )
      );
    }
    function Xi(t, e, n) {
      return t.extend(e.options, n);
    }
    function Vi(t) {
      return t.map(function (t) {
        return new t();
      });
    }
    var Gi = (function () {
      function t(t) {
        this.component = t.component;
      }
      return (t.prototype.destroy = function () {}), t;
    })();
    function Ki(t) {
      var e;
      return ((e = {})[t.component.uid] = t), e;
    }
    var Zi = {},
      Ji = (function (t) {
        function e(e) {
          var n = t.call(this, e) || this;
          n.handleSegClick = function (t, e) {
            var i = n.component,
              r = i.context,
              o = r.calendar,
              a = r.view,
              s = $e(e);
            if (s && i.isValidSegDownEl(t.target)) {
              var l = m(t.target, ".fc-has-url"),
                c = l ? l.querySelector("a[href]").href : "";
              o.publiclyTrigger("eventClick", [
                {
                  el: e,
                  event: new We(
                    i.context.calendar,
                    s.eventRange.def,
                    s.eventRange.instance
                  ),
                  jsEvent: t,
                  view: a,
                },
              ]),
                c && !t.defaultPrevented && (window.location.href = c);
            }
          };
          var i = e.component;
          return (
            (n.destroy = B(
              i.el,
              "click",
              i.fgSegSelector + "," + i.bgSegSelector,
              n.handleSegClick
            )),
            n
          );
        }
        return Vt(e, t), e;
      })(Gi),
      Qi = (function (t) {
        function e(e) {
          var n = t.call(this, e) || this;
          (n.handleEventElRemove = function (t) {
            t === n.currentSegEl && n.handleSegLeave(null, n.currentSegEl);
          }),
            (n.handleSegEnter = function (t, e) {
              $e(e) &&
                (e.classList.add("fc-allow-mouse-resize"),
                (n.currentSegEl = e),
                n.triggerEvent("eventMouseEnter", t, e));
            }),
            (n.handleSegLeave = function (t, e) {
              n.currentSegEl &&
                (e.classList.remove("fc-allow-mouse-resize"),
                (n.currentSegEl = null),
                n.triggerEvent("eventMouseLeave", t, e));
            });
          var i,
            r,
            o,
            a,
            s,
            l = e.component;
          return (
            (n.removeHoverListeners =
              ((i = l.el),
              (r = l.fgSegSelector + "," + l.bgSegSelector),
              (o = n.handleSegEnter),
              (a = n.handleSegLeave),
              B(i, "mouseover", r, function (t, e) {
                if (e !== s) {
                  (s = e), o(t, e);
                  var n = function (t) {
                    (s = null), a(t, e), e.removeEventListener("mouseleave", n);
                  };
                  e.addEventListener("mouseleave", n);
                }
              }))),
            l.context.calendar.on("eventElRemove", n.handleEventElRemove),
            n
          );
        }
        return (
          Vt(e, t),
          (e.prototype.destroy = function () {
            this.removeHoverListeners(),
              this.component.context.calendar.off(
                "eventElRemove",
                this.handleEventElRemove
              );
          }),
          (e.prototype.triggerEvent = function (t, e, n) {
            var i = this.component,
              r = i.context,
              o = r.calendar,
              a = r.view,
              s = $e(n);
            (e && !i.isValidSegDownEl(e.target)) ||
              o.publiclyTrigger(t, [
                {
                  el: n,
                  event: new We(o, s.eventRange.def, s.eventRange.instance),
                  jsEvent: e,
                  view: a,
                },
              ]);
          }),
          e
        );
      })(Gi),
      tr = (function (t) {
        function e() {
          return (null !== t && t.apply(this, arguments)) || this;
        }
        return Vt(e, t), e;
      })($n);
    (tr.prototype.classes = {
      widget: "fc-unthemed",
      widgetHeader: "fc-widget-header",
      widgetContent: "fc-widget-content",
      buttonGroup: "fc-button-group",
      button: "fc-button fc-button-primary",
      buttonActive: "fc-button-active",
      popoverHeader: "fc-widget-header",
      popoverContent: "fc-widget-content",
      headerRow: "fc-widget-header",
      dayRow: "fc-widget-content",
      listView: "fc-widget-content",
    }),
      (tr.prototype.baseIconClass = "fc-icon"),
      (tr.prototype.iconClasses = {
        close: "fc-icon-x",
        prev: "fc-icon-chevron-left",
        next: "fc-icon-chevron-right",
        prevYear: "fc-icon-chevrons-left",
        nextYear: "fc-icon-chevrons-right",
      }),
      (tr.prototype.iconOverrideOption = "buttonIcons"),
      (tr.prototype.iconOverrideCustomButtonOption = "icon"),
      (tr.prototype.iconOverridePrefix = "fc-icon-");
    var er = (function () {
      function t(t, e) {
        var n = this;
        (this.buildComponentContext = Me(nr)),
          (this.parseRawLocales = Me(ui)),
          (this.buildLocale = Me(pi)),
          (this.buildDateEnv = Me(ir)),
          (this.buildTheme = Me(rr)),
          (this.buildEventUiSingleBase = Me(this._buildEventUiSingleBase)),
          (this.buildSelectionConfig = Me(this._buildSelectionConfig)),
          (this.buildEventUiBySource = Oe(ar, ie)),
          (this.buildEventUiBases = Me(sr)),
          (this.interactionsStore = {}),
          (this.actionQueue = []),
          (this.isReducing = !1),
          (this.needsRerender = !1),
          (this.isRendering = !1),
          (this.renderingPauseDepth = 0),
          (this.buildDelayedRerender = Me(or)),
          (this.afterSizingTriggers = {}),
          (this.isViewUpdated = !1),
          (this.isDatesUpdated = !1),
          (this.isEventsUpdated = !1),
          (this.el = t),
          (this.optionsManager = new bi(e || {})),
          (this.pluginSystem = new Kn()),
          this.addPluginInputs(this.optionsManager.computed.plugins || []),
          this.handleOptions(this.optionsManager.computed),
          this.publiclyTrigger("_init"),
          this.hydrate(),
          (this.calendarInteractions =
            this.pluginSystem.hooks.calendarInteractions.map(function (t) {
              return new t(n);
            }));
      }
      return (
        (t.prototype.addPluginInputs = function (t) {
          for (
            var e = (function (t) {
                for (var e = [], n = 0, i = t; n < i.length; n++) {
                  var r = i[n];
                  if ("string" == typeof r) {
                    var o = "FullCalendar" + Pt(r);
                    window[o] && e.push(window[o].default);
                  } else e.push(r);
                }
                return ci.concat(e);
              })(t),
              n = 0,
              i = e;
            n < i.length;
            n++
          ) {
            var r = i[n];
            this.pluginSystem.add(r);
          }
        }),
        Object.defineProperty(t.prototype, "view", {
          get: function () {
            return this.component ? this.component.view : null;
          },
          enumerable: !0,
          configurable: !0,
        }),
        (t.prototype.render = function () {
          this.component
            ? this.requestRerender()
            : ((this.component = new Yi(this.el)),
              (this.renderableEventStore = { defs: {}, instances: {} }),
              this.bindHandlers(),
              this.executeRender());
        }),
        (t.prototype.destroy = function () {
          if (this.component) {
            this.unbindHandlers(),
              this.component.destroy(),
              (this.component = null);
            for (var t = 0, e = this.calendarInteractions; t < e.length; t++)
              e[t].destroy();
            this.publiclyTrigger("_destroyed");
          }
        }),
        (t.prototype.bindHandlers = function () {
          var t = this;
          (this.removeNavLinkListener = B(
            this.el,
            "click",
            "a[data-goto]",
            function (e, n) {
              var i = n.getAttribute("data-goto");
              i = i ? JSON.parse(i) : {};
              var r = t.dateEnv,
                o = r.createMarker(i.date),
                a = i.type,
                s = t.viewOpt("navLink" + Pt(a) + "Click");
              "function" == typeof s
                ? s(r.toDate(o), e)
                : ("string" == typeof s && (a = s), t.zoomTo(o, a));
            }
          )),
            this.opt("handleWindowResize") &&
              window.addEventListener(
                "resize",
                (this.windowResizeProxy = Ft(
                  this.windowResize.bind(this),
                  this.opt("windowResizeDelay")
                ))
              );
        }),
        (t.prototype.unbindHandlers = function () {
          this.removeNavLinkListener(),
            this.windowResizeProxy &&
              (window.removeEventListener("resize", this.windowResizeProxy),
              (this.windowResizeProxy = null));
        }),
        (t.prototype.hydrate = function () {
          var t = this;
          this.state = this.buildInitialState();
          var e = this.opt("eventSources") || [],
            n = this.opt("events"),
            i = [];
          n && e.unshift(n);
          for (var r = 0, o = e; r < o.length; r++) {
            var a = wi(o[r], this);
            a && i.push(a);
          }
          this.batchRendering(function () {
            t.dispatch({ type: "INIT" }),
              t.dispatch({ type: "ADD_EVENT_SOURCES", sources: i }),
              t.dispatch({
                type: "SET_VIEW_TYPE",
                viewType:
                  t.opt("defaultView") || t.pluginSystem.hooks.defaultView,
              });
          });
        }),
        (t.prototype.buildInitialState = function () {
          return {
            viewType: null,
            loadingLevel: 0,
            eventSourceLoadingLevel: 0,
            currentDate: this.getInitialDate(),
            dateProfile: null,
            eventSources: {},
            eventStore: { defs: {}, instances: {} },
            dateSelection: null,
            eventSelection: "",
            eventDrag: null,
            eventResize: null,
          };
        }),
        (t.prototype.dispatch = function (t) {
          if ((this.actionQueue.push(t), !this.isReducing)) {
            this.isReducing = !0;
            for (var e = this.state; this.actionQueue.length; )
              this.state = this.reduce(
                this.state,
                this.actionQueue.shift(),
                this
              );
            var n = this.state;
            (this.isReducing = !1),
              !e.loadingLevel && n.loadingLevel
                ? this.publiclyTrigger("loading", [!0])
                : e.loadingLevel &&
                  !n.loadingLevel &&
                  this.publiclyTrigger("loading", [!1]);
            var i = this.component && this.component.view;
            e.eventStore !== n.eventStore &&
              e.eventStore &&
              (this.isEventsUpdated = !0),
              e.dateProfile !== n.dateProfile &&
                (e.dateProfile &&
                  i &&
                  this.publiclyTrigger("datesDestroy", [{ view: i, el: i.el }]),
                (this.isDatesUpdated = !0)),
              e.viewType !== n.viewType &&
                (e.viewType &&
                  i &&
                  this.publiclyTrigger("viewSkeletonDestroy", [
                    { view: i, el: i.el },
                  ]),
                (this.isViewUpdated = !0)),
              this.requestRerender();
          }
        }),
        (t.prototype.reduce = function (t, e, n) {
          return (function (t, e, n) {
            for (
              var i = (function (t, e) {
                  switch (e.type) {
                    case "SET_VIEW_TYPE":
                      return e.viewType;
                    default:
                      return t;
                  }
                })(t.viewType, e),
                r = (function (t, e, n, i, r) {
                  var o, a, s;
                  switch (e.type) {
                    case "PREV":
                      o = r.dateProfileGenerators[i].buildPrev(t, n);
                      break;
                    case "NEXT":
                      o = r.dateProfileGenerators[i].buildNext(t, n);
                      break;
                    case "SET_DATE":
                      (t.activeRange && _e(t.currentRange, e.dateMarker)) ||
                        (o = r.dateProfileGenerators[i].build(
                          e.dateMarker,
                          void 0,
                          !0
                        ));
                      break;
                    case "SET_VIEW_TYPE":
                      var l = r.dateProfileGenerators[i];
                      if (!l)
                        throw new Error(
                          i
                            ? 'The FullCalendar view "' +
                              i +
                              '" does not exist. Make sure your plugins are loaded correctly.'
                            : "No available FullCalendar view plugins."
                        );
                      o = l.build(e.dateMarker || n, void 0, !0);
                  }
                  return !o ||
                    !o.isValid ||
                    (t &&
                      ((s = o),
                      me((a = t).validRange, s.validRange) &&
                        me(a.activeRange, s.activeRange) &&
                        me(a.renderRange, s.renderRange) &&
                        ut(a.minTime, s.minTime) &&
                        ut(a.maxTime, s.maxTime)))
                    ? t
                    : o;
                })(t.dateProfile, e, t.currentDate, i, n),
                o = (function (t, e, n, i) {
                  switch (e.type) {
                    case "ADD_EVENT_SOURCES":
                      return (function (t, e, n, i) {
                        for (var r = {}, o = 0, a = e; o < a.length; o++) {
                          var s = a[o];
                          r[s.sourceId] = s;
                        }
                        return n && (r = zi(r, n, i)), Gt({}, t, r);
                      })(t, e.sources, n ? n.activeRange : null, i);
                    case "REMOVE_EVENT_SOURCE":
                      return (
                        (r = t),
                        (o = e.sourceId),
                        Qt(r, function (t) {
                          return t.sourceId !== o;
                        })
                      );
                    case "PREV":
                    case "NEXT":
                    case "SET_DATE":
                    case "SET_VIEW_TYPE":
                      return n ? zi(t, n.activeRange, i) : t;
                    case "FETCH_EVENT_SOURCES":
                    case "CHANGE_TIMEZONE":
                      return Ci(
                        t,
                        e.sourceIds
                          ? ee(e.sourceIds)
                          : (function (t, e) {
                              return Qt(t, function (t) {
                                return Oi(t, e);
                              });
                            })(t, i),
                        n ? n.activeRange : null,
                        i
                      );
                    case "RECEIVE_EVENTS":
                    case "RECEIVE_EVENT_ERROR":
                      return (function (t, e, n, i) {
                        var r,
                          o = t[e];
                        return o && n === o.latestFetchId
                          ? Gt(
                              {},
                              t,
                              (((r = {})[e] = Gt({}, o, {
                                isFetching: !1,
                                fetchRange: i,
                              })),
                              r)
                            )
                          : t;
                      })(t, e.sourceId, e.fetchId, e.fetchRange);
                    case "REMOVE_ALL_EVENT_SOURCES":
                      return {};
                    default:
                      return t;
                  }
                  var r, o;
                })(t.eventSources, e, r, n),
                a = Gt({}, t, {
                  viewType: i,
                  dateProfile: r,
                  currentDate: Ti(t.currentDate, e, r),
                  eventSources: o,
                  eventStore: tn(t.eventStore, e, o, r, n),
                  dateSelection: Di(t.dateSelection, e),
                  eventSelection: Li(t.eventSelection, e),
                  eventDrag: qi(t.eventDrag, e),
                  eventResize: Ei(t.eventResize, e),
                  eventSourceLoadingLevel: ji(o),
                  loadingLevel: ji(o),
                }),
                s = 0,
                l = n.pluginSystem.hooks.reducers;
              s < l.length;
              s++
            )
              a = (0, l[s])(a, e, n);
            return a;
          })(t, e, n);
        }),
        (t.prototype.requestRerender = function () {
          (this.needsRerender = !0), this.delayedRerender();
        }),
        (t.prototype.tryRerender = function () {
          this.component &&
            this.needsRerender &&
            !this.renderingPauseDepth &&
            !this.isRendering &&
            this.executeRender();
        }),
        (t.prototype.batchRendering = function (t) {
          this.renderingPauseDepth++,
            t(),
            this.renderingPauseDepth--,
            this.needsRerender && this.requestRerender();
        }),
        (t.prototype.executeRender = function () {
          (this.needsRerender = !1),
            (this.isRendering = !0),
            this.renderComponent(),
            (this.isRendering = !1),
            this.needsRerender && this.delayedRerender();
        }),
        (t.prototype.renderComponent = function () {
          var t = this.state,
            e = this.component,
            n = t.viewType,
            i = this.viewSpecs[n];
          if (!i) throw new Error('View type "' + n + '" is not valid');
          var r = (this.renderableEventStore =
              t.eventSourceLoadingLevel &&
              !this.opt("progressiveEventRendering")
                ? this.renderableEventStore
                : t.eventStore),
            o = this.buildEventUiSingleBase(i.options),
            a = this.buildEventUiBySource(t.eventSources),
            s = (this.eventUiBases = this.buildEventUiBases(r.defs, o, a));
          e.receiveProps(
            Gt({}, t, {
              viewSpec: i,
              dateProfileGenerator: this.dateProfileGenerators[n],
              dateProfile: t.dateProfile,
              eventStore: r,
              eventUiBases: s,
              dateSelection: t.dateSelection,
              eventSelection: t.eventSelection,
              eventDrag: t.eventDrag,
              eventResize: t.eventResize,
            }),
            this.buildComponentContext(
              this.theme,
              this.dateEnv,
              this.optionsManager.computed
            )
          ),
            this.isViewUpdated &&
              ((this.isViewUpdated = !1),
              this.publiclyTrigger("viewSkeletonRender", [
                { view: e.view, el: e.view.el },
              ])),
            this.isDatesUpdated &&
              ((this.isDatesUpdated = !1),
              this.publiclyTrigger("datesRender", [
                { view: e.view, el: e.view.el },
              ])),
            this.isEventsUpdated && (this.isEventsUpdated = !1),
            this.releaseAfterSizingTriggers();
        }),
        (t.prototype.setOption = function (t, e) {
          var n;
          this.mutateOptions((((n = {})[t] = e), n), [], !0);
        }),
        (t.prototype.getOption = function (t) {
          return this.optionsManager.computed[t];
        }),
        (t.prototype.opt = function (t) {
          return this.optionsManager.computed[t];
        }),
        (t.prototype.viewOpt = function (t) {
          return this.viewOpts()[t];
        }),
        (t.prototype.viewOpts = function () {
          return this.viewSpecs[this.state.viewType].options;
        }),
        (t.prototype.mutateOptions = function (t, e, n, i) {
          var r = this,
            o = this.pluginSystem.hooks.optionChangeHandlers,
            a = {},
            s = {},
            l = this.dateEnv,
            c = !1,
            d = !1,
            u = Boolean(e.length);
          for (var p in t) o[p] ? (s[p] = t[p]) : (a[p] = t[p]);
          for (var h in a)
            /^(height|contentHeight|aspectRatio)$/.test(h)
              ? (d = !0)
              : /^(defaultDate|defaultView)$/.test(h) ||
                ((u = !0), "timeZone" === h && (c = !0));
          this.optionsManager.mutate(a, e, n),
            u && this.handleOptions(this.optionsManager.computed),
            this.batchRendering(function () {
              if (
                (u
                  ? (c &&
                      r.dispatch({ type: "CHANGE_TIMEZONE", oldDateEnv: l }),
                    r.dispatch({
                      type: "SET_VIEW_TYPE",
                      viewType: r.state.viewType,
                    }))
                  : d && r.updateSize(),
                i)
              )
                for (var t in s) o[t](s[t], r, i);
            });
        }),
        (t.prototype.handleOptions = function (t) {
          var e = this,
            n = this.pluginSystem.hooks;
          (this.defaultAllDayEventDuration = lt(t.defaultAllDayEventDuration)),
            (this.defaultTimedEventDuration = lt(t.defaultTimedEventDuration)),
            (this.delayedRerender = this.buildDelayedRerender(t.rerenderDelay)),
            (this.theme = this.buildTheme(t));
          var i = this.parseRawLocales(t.locales);
          this.availableRawLocales = i.map;
          var r = this.buildLocale(t.locale || i.defaultCode, i.map);
          (this.dateEnv = this.buildDateEnv(
            r,
            t.timeZone,
            n.namedTimeZonedImpl,
            t.firstDay,
            t.weekNumberCalculation,
            t.weekLabel,
            n.cmdFormatter
          )),
            (this.selectionConfig = this.buildSelectionConfig(t)),
            (this.viewSpecs = (function (t, e) {
              var n = Bi(t),
                i = Bi(e.overrides.views);
              return te(
                (function (t, e) {
                  var n,
                    i = {};
                  for (n in t) Wi(n, i, t, e);
                  for (n in e) Wi(n, i, t, e);
                  return i;
                })(n, i),
                function (t) {
                  return (function (t, e, n) {
                    var i =
                        t.overrides.duration ||
                        t.defaults.duration ||
                        n.dynamicOverrides.duration ||
                        n.overrides.duration,
                      r = null,
                      o = "",
                      a = "",
                      s = {};
                    if (i && (r = lt(i))) {
                      var l = _t(r, !dt(i));
                      (o = l.unit),
                        1 === l.value &&
                          ((a = o), (s = e[o] ? e[o].options : {}));
                    }
                    var c = function (e) {
                      var n = e.buttonText || {},
                        i = t.defaults.buttonTextKey;
                      return null != i && null != n[i]
                        ? n[i]
                        : null != n[t.type]
                        ? n[t.type]
                        : null != n[a]
                        ? n[a]
                        : void 0;
                    };
                    return {
                      type: t.type,
                      class: t.class,
                      duration: r,
                      durationUnit: o,
                      singleUnit: a,
                      options: Gt(
                        {},
                        ai,
                        t.defaults,
                        n.dirDefaults,
                        n.localeDefaults,
                        n.overrides,
                        s,
                        t.overrides,
                        n.dynamicOverrides
                      ),
                      buttonTextOverride:
                        c(n.dynamicOverrides) ||
                        c(n.overrides) ||
                        t.overrides.buttonText,
                      buttonTextDefault:
                        c(n.localeDefaults) ||
                        c(n.dirDefaults) ||
                        t.defaults.buttonText ||
                        c(ai) ||
                        t.type,
                    };
                  })(t, i, e);
                }
              );
            })(n.views, this.optionsManager)),
            (this.dateProfileGenerators = te(this.viewSpecs, function (t) {
              return new t.class.prototype.dateProfileGeneratorClass(t, e);
            }));
        }),
        (t.prototype.getAvailableLocaleCodes = function () {
          return Object.keys(this.availableRawLocales);
        }),
        (t.prototype._buildSelectionConfig = function (t) {
          return mn("select", t, this);
        }),
        (t.prototype._buildEventUiSingleBase = function (t) {
          return (
            t.editable && (t = Gt({}, t, { eventEditable: !0 })),
            mn("event", t, this)
          );
        }),
        (t.prototype.hasPublicHandlers = function (t) {
          return this.hasHandlers(t) || this.opt(t);
        }),
        (t.prototype.publiclyTrigger = function (t, e) {
          var n = this.opt(t);
          if ((this.triggerWith(t, this, e), n)) return n.apply(this, e);
        }),
        (t.prototype.publiclyTriggerAfterSizing = function (t, e) {
          var n = this.afterSizingTriggers;
          (n[t] || (n[t] = [])).push(e);
        }),
        (t.prototype.releaseAfterSizingTriggers = function () {
          var t = this.afterSizingTriggers;
          for (var e in t)
            for (var n = 0, i = t[e]; n < i.length; n++) {
              var r = i[n];
              this.publiclyTrigger(e, r);
            }
          this.afterSizingTriggers = {};
        }),
        (t.prototype.isValidViewType = function (t) {
          return Boolean(this.viewSpecs[t]);
        }),
        (t.prototype.changeView = function (t, e) {
          var n = null;
          e &&
            (e.start && e.end
              ? (this.optionsManager.mutate({ visibleRange: e }, []),
                this.handleOptions(this.optionsManager.computed))
              : (n = this.dateEnv.createMarker(e))),
            this.unselect(),
            this.dispatch({
              type: "SET_VIEW_TYPE",
              viewType: t,
              dateMarker: n,
            });
        }),
        (t.prototype.zoomTo = function (t, e) {
          var n;
          (e = e || "day"),
            (n = this.viewSpecs[e] || this.getUnitViewSpec(e)),
            this.unselect(),
            n
              ? this.dispatch({
                  type: "SET_VIEW_TYPE",
                  viewType: n.type,
                  dateMarker: t,
                })
              : this.dispatch({ type: "SET_DATE", dateMarker: t });
        }),
        (t.prototype.getUnitViewSpec = function (t) {
          var e,
            n,
            i = this.component,
            r = [];
          for (var o in (i.header && r.push.apply(r, i.header.viewsWithButtons),
          i.footer && r.push.apply(r, i.footer.viewsWithButtons),
          this.viewSpecs))
            r.push(o);
          for (e = 0; e < r.length; e++)
            if ((n = this.viewSpecs[r[e]]) && n.singleUnit === t) return n;
        }),
        (t.prototype.getInitialDate = function () {
          var t = this.opt("defaultDate");
          return null != t ? this.dateEnv.createMarker(t) : this.getNow();
        }),
        (t.prototype.prev = function () {
          this.unselect(), this.dispatch({ type: "PREV" });
        }),
        (t.prototype.next = function () {
          this.unselect(), this.dispatch({ type: "NEXT" });
        }),
        (t.prototype.prevYear = function () {
          this.unselect(),
            this.dispatch({
              type: "SET_DATE",
              dateMarker: this.dateEnv.addYears(this.state.currentDate, -1),
            });
        }),
        (t.prototype.nextYear = function () {
          this.unselect(),
            this.dispatch({
              type: "SET_DATE",
              dateMarker: this.dateEnv.addYears(this.state.currentDate, 1),
            });
        }),
        (t.prototype.today = function () {
          this.unselect(),
            this.dispatch({ type: "SET_DATE", dateMarker: this.getNow() });
        }),
        (t.prototype.gotoDate = function (t) {
          this.unselect(),
            this.dispatch({
              type: "SET_DATE",
              dateMarker: this.dateEnv.createMarker(t),
            });
        }),
        (t.prototype.incrementDate = function (t) {
          var e = lt(t);
          e &&
            (this.unselect(),
            this.dispatch({
              type: "SET_DATE",
              dateMarker: this.dateEnv.add(this.state.currentDate, e),
            }));
        }),
        (t.prototype.getDate = function () {
          return this.dateEnv.toDate(this.state.currentDate);
        }),
        (t.prototype.formatDate = function (t, e) {
          var n = this.dateEnv;
          return n.format(n.createMarker(t), Ee(e));
        }),
        (t.prototype.formatRange = function (t, e, n) {
          var i = this.dateEnv;
          return i.formatRange(
            i.createMarker(t),
            i.createMarker(e),
            Ee(n, this.opt("defaultRangeSeparator")),
            n
          );
        }),
        (t.prototype.formatIso = function (t, e) {
          var n = this.dateEnv;
          return n.formatIso(n.createMarker(t), { omitTime: e });
        }),
        (t.prototype.windowResize = function (t) {
          !this.isHandlingWindowResize &&
            this.component &&
            t.target === window &&
            ((this.isHandlingWindowResize = !0),
            this.updateSize(),
            this.publiclyTrigger("windowResize", [this.view]),
            (this.isHandlingWindowResize = !1));
        }),
        (t.prototype.updateSize = function () {
          this.component && this.component.updateSize(!0);
        }),
        (t.prototype.registerInteractiveComponent = function (t, e) {
          var n = (function (t, e) {
              return {
                component: t,
                el: e.el,
                useEventCenter: null == e.useEventCenter || e.useEventCenter,
              };
            })(t, e),
            i = [Ji, Qi]
              .concat(this.pluginSystem.hooks.componentInteractions)
              .map(function (t) {
                return new t(n);
              });
          (this.interactionsStore[t.uid] = i), (Zi[t.uid] = n);
        }),
        (t.prototype.unregisterInteractiveComponent = function (t) {
          for (var e = 0, n = this.interactionsStore[t.uid]; e < n.length; e++)
            n[e].destroy();
          delete this.interactionsStore[t.uid], delete Zi[t.uid];
        }),
        (t.prototype.select = function (t, e) {
          var n = (function (t, e, n) {
            var i = (function (t, e) {
                var n = {},
                  i = $t(t, Pi, {}, n),
                  r = i.start ? e.createMarkerMeta(i.start) : null,
                  o = i.end ? e.createMarkerMeta(i.end) : null,
                  a = i.allDay;
                return (
                  null == a &&
                    (a =
                      r && r.isTimeUnspecified && (!o || o.isTimeUnspecified)),
                  (n.range = {
                    start: r ? r.marker : null,
                    end: o ? o.marker : null,
                  }),
                  (n.allDay = a),
                  n
                );
              })(t, e),
              r = i.range;
            if (!r.start) return null;
            if (!r.end) {
              if (null == n) return null;
              r.end = e.add(r.start, n);
            }
            return i;
          })(
            null == e
              ? null != t.start
                ? t
                : { start: t, end: null }
              : { start: t, end: e },
            this.dateEnv,
            lt({ days: 1 })
          );
          n &&
            (this.dispatch({ type: "SELECT_DATES", selection: n }),
            this.triggerDateSelect(n));
        }),
        (t.prototype.unselect = function (t) {
          this.state.dateSelection &&
            (this.dispatch({ type: "UNSELECT_DATES" }),
            this.triggerDateUnselect(t));
        }),
        (t.prototype.triggerDateSelect = function (t, e) {
          var n = Gt({}, this.buildDateSpanApi(t), {
            jsEvent: e ? e.origEvent : null,
            view: this.view,
          });
          this.publiclyTrigger("select", [n]);
        }),
        (t.prototype.triggerDateUnselect = function (t) {
          this.publiclyTrigger("unselect", [
            { jsEvent: t ? t.origEvent : null, view: this.view },
          ]);
        }),
        (t.prototype.triggerDateClick = function (t, e, n, i) {
          var r = Gt({}, this.buildDatePointApi(t), {
            dayEl: e,
            jsEvent: i,
            view: n,
          });
          this.publiclyTrigger("dateClick", [r]);
        }),
        (t.prototype.buildDatePointApi = function (t) {
          for (
            var e,
              n,
              i = {},
              r = 0,
              o = this.pluginSystem.hooks.datePointTransforms;
            r < o.length;
            r++
          ) {
            var a = o[r];
            Gt(i, a(t, this));
          }
          return (
            Gt(
              i,
              ((e = t),
              {
                date: (n = this.dateEnv).toDate(e.range.start),
                dateStr: n.formatIso(e.range.start, { omitTime: e.allDay }),
                allDay: e.allDay,
              })
            ),
            i
          );
        }),
        (t.prototype.buildDateSpanApi = function (t) {
          for (
            var e,
              n,
              i = {},
              r = 0,
              o = this.pluginSystem.hooks.dateSpanTransforms;
            r < o.length;
            r++
          ) {
            var a = o[r];
            Gt(i, a(t, this));
          }
          return (
            Gt(
              i,
              ((e = t),
              {
                start: (n = this.dateEnv).toDate(e.range.start),
                end: n.toDate(e.range.end),
                startStr: n.formatIso(e.range.start, { omitTime: e.allDay }),
                endStr: n.formatIso(e.range.end, { omitTime: e.allDay }),
                allDay: e.allDay,
              })
            ),
            i
          );
        }),
        (t.prototype.getNow = function () {
          var t = this.opt("now");
          return (
            "function" == typeof t && (t = t()),
            null == t
              ? this.dateEnv.createNowMarker()
              : this.dateEnv.createMarker(t)
          );
        }),
        (t.prototype.getDefaultEventEnd = function (t, e) {
          var n = e;
          return (
            t
              ? ((n = Z(n)),
                (n = this.dateEnv.add(n, this.defaultAllDayEventDuration)))
              : (n = this.dateEnv.add(n, this.defaultTimedEventDuration)),
            n
          );
        }),
        (t.prototype.addEvent = function (t, e) {
          if (t instanceof We) {
            var n = t._def,
              i = t._instance;
            return (
              this.state.eventStore.defs[n.defId] ||
                this.dispatch({
                  type: "ADD_EVENTS",
                  eventStore: oe({ def: n, instance: i }),
                }),
              t
            );
          }
          var r;
          if (e instanceof Ie) r = e.internalEventSource.sourceId;
          else if (null != e) {
            var o = this.getEventSourceById(e);
            if (!o) return null;
            r = o.internalEventSource.sourceId;
          }
          var a = wn(t, r, this);
          return a
            ? (this.dispatch({ type: "ADD_EVENTS", eventStore: oe(a) }),
              new We(this, a.def, a.def.recurringDef ? null : a.instance))
            : null;
        }),
        (t.prototype.getEventById = function (t) {
          var e = this.state.eventStore,
            n = e.defs,
            i = e.instances;
          for (var r in ((t = String(t)), n)) {
            var o = n[r];
            if (o.publicId === t) {
              if (o.recurringDef) return new We(this, o, null);
              for (var a in i) {
                var s = i[a];
                if (s.defId === o.defId) return new We(this, o, s);
              }
            }
          }
          return null;
        }),
        (t.prototype.getEvents = function () {
          var t = this.state.eventStore,
            e = t.defs,
            n = t.instances,
            i = [];
          for (var r in n) {
            var o = n[r],
              a = e[o.defId];
            i.push(new We(this, a, o));
          }
          return i;
        }),
        (t.prototype.removeAllEvents = function () {
          this.dispatch({ type: "REMOVE_ALL_EVENTS" });
        }),
        (t.prototype.rerenderEvents = function () {
          this.dispatch({ type: "RESET_EVENTS" });
        }),
        (t.prototype.getEventSources = function () {
          var t = this.state.eventSources,
            e = [];
          for (var n in t) e.push(new Ie(this, t[n]));
          return e;
        }),
        (t.prototype.getEventSourceById = function (t) {
          var e = this.state.eventSources;
          for (var n in ((t = String(t)), e))
            if (e[n].publicId === t) return new Ie(this, e[n]);
          return null;
        }),
        (t.prototype.addEventSource = function (t) {
          if (t instanceof Ie)
            return (
              this.state.eventSources[t.internalEventSource.sourceId] ||
                this.dispatch({
                  type: "ADD_EVENT_SOURCES",
                  sources: [t.internalEventSource],
                }),
              t
            );
          var e = wi(t, this);
          return e
            ? (this.dispatch({ type: "ADD_EVENT_SOURCES", sources: [e] }),
              new Ie(this, e))
            : null;
        }),
        (t.prototype.removeAllEventSources = function () {
          this.dispatch({ type: "REMOVE_ALL_EVENT_SOURCES" });
        }),
        (t.prototype.refetchEvents = function () {
          this.dispatch({ type: "FETCH_EVENT_SOURCES" });
        }),
        (t.prototype.scrollToTime = function (t) {
          var e = lt(t);
          e && this.component.view.scrollToDuration(e);
        }),
        t
      );
    })();
    function nr(t, e, n) {
      return new Yn(this, t, e, n, null);
    }
    function ir(t, e, n, i, r, o, a) {
      return new _i({
        calendarSystem: "gregory",
        timeZone: e,
        namedTimeZoneImpl: n,
        locale: t,
        weekNumberCalculation: r,
        firstDay: i,
        weekLabel: o,
        cmdFormatter: a,
      });
    }
    function rr(t) {
      return new (this.pluginSystem.hooks.themeClasses[t.themeSystem] || tr)(t);
    }
    function or(t) {
      var e = this.tryRerender.bind(this);
      return null != t && (e = Ft(e, t)), e;
    }
    function ar(t) {
      return te(t, function (t) {
        return t.ui;
      });
    }
    function sr(t, e, n) {
      var i = { "": e };
      for (var r in t) {
        var o = t[r];
        o.sourceId && n[o.sourceId] && (i[r] = n[o.sourceId]);
      }
      return i;
    }
    jn.mixInto(er);
    var lr = (function (t) {
      function e(e, n) {
        var i =
          t.call(
            this,
            o("div", { className: "fc-view fc-" + e.type + "-view" })
          ) || this;
        return (
          (i.renderDatesMem = kn(i.renderDatesWrap, i.unrenderDatesWrap)),
          (i.renderBusinessHoursMem = kn(
            i.renderBusinessHours,
            i.unrenderBusinessHours,
            [i.renderDatesMem]
          )),
          (i.renderDateSelectionMem = kn(
            i.renderDateSelectionWrap,
            i.unrenderDateSelectionWrap,
            [i.renderDatesMem]
          )),
          (i.renderEventsMem = kn(i.renderEvents, i.unrenderEvents, [
            i.renderDatesMem,
          ])),
          (i.renderEventSelectionMem = kn(
            i.renderEventSelectionWrap,
            i.unrenderEventSelectionWrap,
            [i.renderEventsMem]
          )),
          (i.renderEventDragMem = kn(
            i.renderEventDragWrap,
            i.unrenderEventDragWrap,
            [i.renderDatesMem]
          )),
          (i.renderEventResizeMem = kn(
            i.renderEventResizeWrap,
            i.unrenderEventResizeWrap,
            [i.renderDatesMem]
          )),
          (i.viewSpec = e),
          (i.type = e.type),
          n.appendChild(i.el),
          i.initialize(),
          i
        );
      }
      return (
        Vt(e, t),
        (e.prototype.initialize = function () {}),
        Object.defineProperty(e.prototype, "activeStart", {
          get: function () {
            return this.context.dateEnv.toDate(
              this.props.dateProfile.activeRange.start
            );
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "activeEnd", {
          get: function () {
            return this.context.dateEnv.toDate(
              this.props.dateProfile.activeRange.end
            );
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "currentStart", {
          get: function () {
            return this.context.dateEnv.toDate(
              this.props.dateProfile.currentRange.start
            );
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "currentEnd", {
          get: function () {
            return this.context.dateEnv.toDate(
              this.props.dateProfile.currentRange.end
            );
          },
          enumerable: !0,
          configurable: !0,
        }),
        (e.prototype.render = function (t, e) {
          this.renderDatesMem(t.dateProfile),
            this.renderBusinessHoursMem(t.businessHours),
            this.renderDateSelectionMem(t.dateSelection),
            this.renderEventsMem(t.eventStore),
            this.renderEventSelectionMem(t.eventSelection),
            this.renderEventDragMem(t.eventDrag),
            this.renderEventResizeMem(t.eventResize);
        }),
        (e.prototype.beforeUpdate = function () {
          this.addScroll(this.queryScroll());
        }),
        (e.prototype.destroy = function () {
          t.prototype.destroy.call(this), this.renderDatesMem.unrender();
        }),
        (e.prototype.updateSize = function (t, e, n) {
          var i = this.context.calendar;
          t && this.addScroll(this.queryScroll()),
            (t || i.isViewUpdated || i.isDatesUpdated || i.isEventsUpdated) &&
              this.updateBaseSize(t, e, n);
        }),
        (e.prototype.updateBaseSize = function (t, e, n) {}),
        (e.prototype.renderDatesWrap = function (t) {
          this.renderDates(t),
            this.addScroll({ duration: lt(this.context.options.scrollTime) });
        }),
        (e.prototype.unrenderDatesWrap = function () {
          this.stopNowIndicator(), this.unrenderDates();
        }),
        (e.prototype.renderDates = function (t) {}),
        (e.prototype.unrenderDates = function () {}),
        (e.prototype.renderBusinessHours = function (t) {}),
        (e.prototype.unrenderBusinessHours = function () {}),
        (e.prototype.renderDateSelectionWrap = function (t) {
          t && this.renderDateSelection(t);
        }),
        (e.prototype.unrenderDateSelectionWrap = function (t) {
          t && this.unrenderDateSelection(t);
        }),
        (e.prototype.renderDateSelection = function (t) {}),
        (e.prototype.unrenderDateSelection = function (t) {}),
        (e.prototype.renderEvents = function (t) {}),
        (e.prototype.unrenderEvents = function () {}),
        (e.prototype.sliceEvents = function (t, e) {
          var n = this.props;
          return Ne(
            t,
            n.eventUiBases,
            n.dateProfile.activeRange,
            e ? this.context.nextDayThreshold : null
          ).fg;
        }),
        (e.prototype.renderEventSelectionWrap = function (t) {
          t && this.renderEventSelection(t);
        }),
        (e.prototype.unrenderEventSelectionWrap = function (t) {
          t && this.unrenderEventSelection(t);
        }),
        (e.prototype.renderEventSelection = function (t) {}),
        (e.prototype.unrenderEventSelection = function (t) {}),
        (e.prototype.renderEventDragWrap = function (t) {
          t && this.renderEventDrag(t);
        }),
        (e.prototype.unrenderEventDragWrap = function (t) {
          t && this.unrenderEventDrag(t);
        }),
        (e.prototype.renderEventDrag = function (t) {}),
        (e.prototype.unrenderEventDrag = function (t) {}),
        (e.prototype.renderEventResizeWrap = function (t) {
          t && this.renderEventResize(t);
        }),
        (e.prototype.unrenderEventResizeWrap = function (t) {
          t && this.unrenderEventResize(t);
        }),
        (e.prototype.renderEventResize = function (t) {}),
        (e.prototype.unrenderEventResize = function (t) {}),
        (e.prototype.startNowIndicator = function (t, e) {
          var n,
            i,
            r,
            o = this,
            a = this.context,
            s = a.calendar,
            l = a.dateEnv;
          a.options.nowIndicator &&
            !this.initialNowDate &&
            (n = this.getNowIndicatorUnit(t, e)) &&
            ((i = this.updateNowIndicator.bind(this)),
            (this.initialNowDate = s.getNow()),
            (this.initialNowQueriedMs = new Date().valueOf()),
            (r =
              l.add(l.startOf(this.initialNowDate, n), lt(1, n)).valueOf() -
              this.initialNowDate.valueOf()),
            (this.nowIndicatorTimeoutID = setTimeout(function () {
              (o.nowIndicatorTimeoutID = null),
                i(),
                (r = "second" === n ? 1e3 : 6e4),
                (o.nowIndicatorIntervalID = setInterval(i, r));
            }, r)));
        }),
        (e.prototype.updateNowIndicator = function () {
          this.props.dateProfile &&
            this.initialNowDate &&
            (this.unrenderNowIndicator(),
            this.renderNowIndicator(
              X(
                this.initialNowDate,
                new Date().valueOf() - this.initialNowQueriedMs
              )
            ),
            (this.isNowIndicatorRendered = !0));
        }),
        (e.prototype.stopNowIndicator = function () {
          this.nowIndicatorTimeoutID &&
            (clearTimeout(this.nowIndicatorTimeoutID),
            (this.nowIndicatorTimeoutID = null)),
            this.nowIndicatorIntervalID &&
              (clearInterval(this.nowIndicatorIntervalID),
              (this.nowIndicatorIntervalID = null)),
            this.isNowIndicatorRendered &&
              (this.unrenderNowIndicator(), (this.isNowIndicatorRendered = !1));
        }),
        (e.prototype.getNowIndicatorUnit = function (t, e) {}),
        (e.prototype.renderNowIndicator = function (t) {}),
        (e.prototype.unrenderNowIndicator = function () {}),
        (e.prototype.addScroll = function (t, e) {
          e && (t.isForced = e),
            Gt(this.queuedScroll || (this.queuedScroll = {}), t);
        }),
        (e.prototype.popScroll = function (t) {
          this.applyQueuedScroll(t), (this.queuedScroll = null);
        }),
        (e.prototype.applyQueuedScroll = function (t) {
          this.queuedScroll && this.applyScroll(this.queuedScroll, t);
        }),
        (e.prototype.queryScroll = function () {
          var t = {};
          return this.props.dateProfile && Gt(t, this.queryDateScroll()), t;
        }),
        (e.prototype.applyScroll = function (t, e) {
          var n = t.duration,
            i = t.isForced;
          null == n ||
            i ||
            (delete t.duration,
            this.props.dateProfile && Gt(t, this.computeDateScroll(n))),
            this.props.dateProfile && this.applyDateScroll(t);
        }),
        (e.prototype.computeDateScroll = function (t) {
          return {};
        }),
        (e.prototype.queryDateScroll = function () {
          return {};
        }),
        (e.prototype.applyDateScroll = function (t) {}),
        (e.prototype.scrollToDuration = function (t) {
          this.applyScroll({ duration: t }, !1);
        }),
        e
      );
    })(Xn);
    jn.mixInto(lr),
      (lr.prototype.usesMinMaxTime = !1),
      (lr.prototype.dateProfileGeneratorClass = Si);
    var cr = (function () {
      function t() {
        (this.segs = []), (this.isSizeDirty = !1);
      }
      return (
        (t.prototype.renderSegs = function (t, e, n) {
          (this.context = t),
            this.rangeUpdated(),
            (e = this.renderSegEls(e, n)),
            (this.segs = e),
            this.attachSegs(e, n),
            (this.isSizeDirty = !0),
            Ue(this.context, this.segs, Boolean(n));
        }),
        (t.prototype.unrender = function (t, e, n) {
          Xe(this.context, this.segs, Boolean(n)),
            this.detachSegs(this.segs),
            (this.segs = []);
        }),
        (t.prototype.rangeUpdated = function () {
          var t,
            e,
            n = this.context.options;
          (this.eventTimeFormat = Ee(
            n.eventTimeFormat || this.computeEventTimeFormat(),
            n.defaultRangeSeparator
          )),
            null == (t = n.displayEventTime) &&
              (t = this.computeDisplayEventTime()),
            null == (e = n.displayEventEnd) &&
              (e = this.computeDisplayEventEnd()),
            (this.displayEventTime = t),
            (this.displayEventEnd = e);
        }),
        (t.prototype.renderSegEls = function (t, e) {
          var n,
            i = "";
          if (t.length) {
            for (n = 0; n < t.length; n++) i += this.renderSegHtml(t[n], e);
            s(i).forEach(function (e, n) {
              var i = t[n];
              e && (i.el = e);
            }),
              (t = Be(this.context, t, Boolean(e)));
          }
          return t;
        }),
        (t.prototype.getSegClasses = function (t, e, n, i) {
          var r = [
            "fc-event",
            t.isStart ? "fc-start" : "fc-not-start",
            t.isEnd ? "fc-end" : "fc-not-end",
          ].concat(t.eventRange.ui.classNames);
          return (
            e && r.push("fc-draggable"),
            n && r.push("fc-resizable"),
            i &&
              (r.push("fc-mirror"),
              i.isDragging && r.push("fc-dragging"),
              i.isResizing && r.push("fc-resizing")),
            r
          );
        }),
        (t.prototype.getTimeText = function (t, e, n) {
          var i = t.def,
            r = t.instance;
          return this._getTimeText(
            r.range.start,
            i.hasEnd ? r.range.end : null,
            i.allDay,
            e,
            n,
            r.forcedStartTzo,
            r.forcedEndTzo
          );
        }),
        (t.prototype._getTimeText = function (t, e, n, i, r, o, a) {
          var s = this.context.dateEnv;
          return (
            null == i && (i = this.eventTimeFormat),
            null == r && (r = this.displayEventEnd),
            this.displayEventTime && !n
              ? r && e
                ? s.formatRange(t, e, i, { forcedStartTzo: o, forcedEndTzo: a })
                : s.format(t, i, { forcedTzo: o })
              : ""
          );
        }),
        (t.prototype.computeEventTimeFormat = function () {
          return { hour: "numeric", minute: "2-digit", omitZeroMinute: !0 };
        }),
        (t.prototype.computeDisplayEventTime = function () {
          return !0;
        }),
        (t.prototype.computeDisplayEventEnd = function () {
          return !0;
        }),
        (t.prototype.getSkinCss = function (t) {
          return {
            "background-color": t.backgroundColor,
            "border-color": t.borderColor,
            color: t.textColor,
          };
        }),
        (t.prototype.sortEventSegs = function (t) {
          var e = this.context.eventOrderSpecs,
            n = t.map(dr);
          return (
            n.sort(function (t, n) {
              return qt(t, n, e);
            }),
            n.map(function (t) {
              return t._seg;
            })
          );
        }),
        (t.prototype.computeSizes = function (t) {
          (t || this.isSizeDirty) && this.computeSegSizes(this.segs);
        }),
        (t.prototype.assignSizes = function (t) {
          (t || this.isSizeDirty) &&
            (this.assignSegSizes(this.segs), (this.isSizeDirty = !1));
        }),
        (t.prototype.computeSegSizes = function (t) {}),
        (t.prototype.assignSegSizes = function (t) {}),
        (t.prototype.hideByHash = function (t) {
          if (t)
            for (var e = 0, n = this.segs; e < n.length; e++) {
              var i = n[e];
              t[i.eventRange.instance.instanceId] &&
                (i.el.style.visibility = "hidden");
            }
        }),
        (t.prototype.showByHash = function (t) {
          if (t)
            for (var e = 0, n = this.segs; e < n.length; e++) {
              var i = n[e];
              t[i.eventRange.instance.instanceId] &&
                (i.el.style.visibility = "");
            }
        }),
        (t.prototype.selectByInstanceId = function (t) {
          if (t)
            for (var e = 0, n = this.segs; e < n.length; e++) {
              var i = n[e],
                r = i.eventRange.instance;
              r &&
                r.instanceId === t &&
                i.el &&
                i.el.classList.add("fc-selected");
            }
        }),
        (t.prototype.unselectByInstanceId = function (t) {
          if (t)
            for (var e = 0, n = this.segs; e < n.length; e++) {
              var i = n[e];
              i.el && i.el.classList.remove("fc-selected");
            }
        }),
        t
      );
    })();
    function dr(t) {
      var e = t.eventRange.def,
        n = t.eventRange.instance.range,
        i = n.start ? n.start.valueOf() : 0,
        r = n.end ? n.end.valueOf() : 0;
      return Gt({}, e.extendedProps, e, {
        id: e.publicId,
        start: i,
        end: r,
        duration: r - i,
        allDay: Number(e.allDay),
        _seg: t,
      });
    }
    var ur = (function () {
        function t() {
          (this.fillSegTag = "div"),
            (this.dirtySizeFlags = {}),
            (this.containerElsByType = {}),
            (this.segsByType = {});
        }
        return (
          (t.prototype.getSegsByType = function (t) {
            return this.segsByType[t] || [];
          }),
          (t.prototype.renderSegs = function (t, e, n) {
            var i;
            this.context = e;
            var r = this.renderSegEls(t, n),
              o = this.attachSegs(t, r);
            o &&
              (i =
                this.containerElsByType[t] ||
                (this.containerElsByType[t] = [])).push.apply(i, o),
              (this.segsByType[t] = r),
              "bgEvent" === t && Ue(e, r, !1),
              (this.dirtySizeFlags[t] = !0);
          }),
          (t.prototype.unrender = function (t, e) {
            var n = this.segsByType[t];
            n && ("bgEvent" === t && Xe(e, n, !1), this.detachSegs(t, n));
          }),
          (t.prototype.renderSegEls = function (t, e) {
            var n,
              i = this,
              r = "";
            if (e.length) {
              for (n = 0; n < e.length; n++) r += this.renderSegHtml(t, e[n]);
              s(r).forEach(function (t, n) {
                var i = e[n];
                t && (i.el = t);
              }),
                "bgEvent" === t && (e = Be(this.context, e, !1)),
                (e = e.filter(function (t) {
                  return g(t.el, i.fillSegTag);
                }));
            }
            return e;
          }),
          (t.prototype.renderSegHtml = function (t, e) {
            var n = null,
              i = [];
            return (
              "highlight" !== t &&
                "businessHours" !== t &&
                (n = { "background-color": e.eventRange.ui.backgroundColor }),
              "highlight" !== t && (i = i.concat(e.eventRange.ui.classNames)),
              "businessHours" === t
                ? i.push("fc-bgevent")
                : i.push("fc-" + t.toLowerCase()),
              "<" +
                this.fillSegTag +
                (i.length ? ' class="' + i.join(" ") + '"' : "") +
                (n ? ' style="' + pn(n) + '"' : "") +
                "></" +
                this.fillSegTag +
                ">"
            );
          }),
          (t.prototype.detachSegs = function (t, e) {
            var n = this.containerElsByType[t];
            n && (n.forEach(h), delete this.containerElsByType[t]);
          }),
          (t.prototype.computeSizes = function (t) {
            for (var e in this.segsByType)
              (t || this.dirtySizeFlags[e]) &&
                this.computeSegSizes(this.segsByType[e]);
          }),
          (t.prototype.assignSizes = function (t) {
            for (var e in this.segsByType)
              (t || this.dirtySizeFlags[e]) &&
                this.assignSegSizes(this.segsByType[e]);
            this.dirtySizeFlags = {};
          }),
          (t.prototype.computeSegSizes = function (t) {}),
          (t.prototype.assignSegSizes = function (t) {}),
          t
        );
      })(),
      pr = (function () {
        function t(t) {
          this.emitter = new jn();
        }
        return (
          (t.prototype.destroy = function () {}),
          (t.prototype.setMirrorIsVisible = function (t) {}),
          (t.prototype.setMirrorNeedsRevert = function (t) {}),
          (t.prototype.setAutoScrollEnabled = function (t) {}),
          t
        );
      })(),
      hr = { startTime: lt, duration: lt, create: Boolean, sourceId: String },
      fr = { create: !0 };
    function br(t) {
      var e = {},
        n = $t(t, hr, fr, e);
      return (n.leftoverProps = e), n;
    }
    function mr(t, e) {
      return !t || e > 10
        ? { weekday: "short" }
        : e > 1
        ? { weekday: "short", month: "numeric", day: "numeric", omitCommas: !0 }
        : { weekday: "long" };
    }
    function gr(t, e, n, i, r, o, a, s) {
      var l,
        c = o.dateEnv,
        d = o.theme,
        u = o.options,
        p = _e(e.activeRange, t),
        h = ["fc-day-header", d.getClass("widgetHeader")];
      return (
        (l =
          "function" == typeof u.columnHeaderHtml
            ? u.columnHeaderHtml(c.toDate(t))
            : "function" == typeof u.columnHeaderText
            ? un(u.columnHeaderText(c.toDate(t)))
            : un(c.format(t, r))),
        n ? (h = h.concat(qn(t, e, o, !0))) : h.push("fc-" + H[t.getUTCDay()]),
        '<th class="' +
          h.join(" ") +
          '"' +
          (p && n
            ? ' data-date="' + c.formatIso(t, { omitTime: !0 }) + '"'
            : "") +
          (a > 1 ? ' colspan="' + a + '"' : "") +
          (s ? " " + s : "") +
          ">" +
          (p ? Ln(u, c, { date: t, forceOff: !n || 1 === i }, l) : l) +
          "</th>"
      );
    }
    var vr = (function (t) {
        function e(e) {
          var n = t.call(this) || this;
          return (
            (n.renderSkeleton = kn(n._renderSkeleton, n._unrenderSkeleton)),
            (n.parentEl = e),
            n
          );
        }
        return (
          Vt(e, t),
          (e.prototype.render = function (t, e) {
            var n = t.dates,
              i = t.datesRepDistinctDays,
              r = [];
            this.renderSkeleton(e),
              t.renderIntroHtml && r.push(t.renderIntroHtml());
            for (
              var o = Ee(e.options.columnHeaderFormat || mr(i, n.length)),
                a = 0,
                s = n;
              a < s.length;
              a++
            ) {
              var l = s[a];
              r.push(gr(l, t.dateProfile, i, n.length, o, e));
            }
            e.isRtl && r.reverse(),
              (this.thead.innerHTML = "<tr>" + r.join("") + "</tr>");
          }),
          (e.prototype.destroy = function () {
            t.prototype.destroy.call(this), this.renderSkeleton.unrender();
          }),
          (e.prototype._renderSkeleton = function (t) {
            var e = t.theme,
              n = this.parentEl;
            (n.innerHTML = ""),
              n.appendChild(
                (this.el = a(
                  '<div class="fc-row ' +
                    e.getClass("headerRow") +
                    '"><table class="' +
                    e.getClass("tableGrid") +
                    '"><thead></thead></table></div>'
                ))
              ),
              (this.thead = this.el.querySelector("thead"));
          }),
          (e.prototype._unrenderSkeleton = function () {
            h(this.el);
          }),
          e
        );
      })(Un),
      _r = (function () {
        function t(t, e) {
          for (var n = t.start, i = t.end, r = [], o = [], a = -1; n < i; )
            e.isHiddenDay(n) ? r.push(a + 0.5) : (a++, r.push(a), o.push(n)),
              (n = U(n, 1));
          (this.dates = o), (this.indices = r), (this.cnt = o.length);
        }
        return (
          (t.prototype.sliceRange = function (t) {
            var e = this.getDateDayIndex(t.start),
              n = this.getDateDayIndex(U(t.end, -1)),
              i = Math.max(0, e),
              r = Math.min(this.cnt - 1, n);
            return (i = Math.ceil(i)) <= (r = Math.floor(r))
              ? {
                  firstIndex: i,
                  lastIndex: r,
                  isStart: e === i,
                  isEnd: n === r,
                }
              : null;
          }),
          (t.prototype.getDateDayIndex = function (t) {
            var e = this.indices,
              n = Math.floor(G(this.dates[0], t));
            return n < 0
              ? e[0] - 1
              : n >= e.length
              ? e[e.length - 1] + 1
              : e[n];
          }),
          t
        );
      })(),
      yr = (function () {
        function t(t, e) {
          var n,
            i,
            r,
            o = t.dates;
          if (e) {
            for (
              i = o[0].getUTCDay(), n = 1;
              n < o.length && o[n].getUTCDay() !== i;
              n++
            );
            r = Math.ceil(o.length / n);
          } else (r = 1), (n = o.length);
          (this.rowCnt = r),
            (this.colCnt = n),
            (this.daySeries = t),
            (this.cells = this.buildCells()),
            (this.headerDates = this.buildHeaderDates());
        }
        return (
          (t.prototype.buildCells = function () {
            for (var t = [], e = 0; e < this.rowCnt; e++) {
              for (var n = [], i = 0; i < this.colCnt; i++)
                n.push(this.buildCell(e, i));
              t.push(n);
            }
            return t;
          }),
          (t.prototype.buildCell = function (t, e) {
            return { date: this.daySeries.dates[t * this.colCnt + e] };
          }),
          (t.prototype.buildHeaderDates = function () {
            for (var t = [], e = 0; e < this.colCnt; e++)
              t.push(this.cells[0][e].date);
            return t;
          }),
          (t.prototype.sliceRange = function (t) {
            var e = this.colCnt,
              n = this.daySeries.sliceRange(t),
              i = [];
            if (n)
              for (var r = n.firstIndex, o = n.lastIndex, a = r; a <= o; ) {
                var s = Math.floor(a / e),
                  l = Math.min((s + 1) * e, o + 1);
                i.push({
                  row: s,
                  firstCol: a % e,
                  lastCol: (l - 1) % e,
                  isStart: n.isStart && a === r,
                  isEnd: n.isEnd && l - 1 === o,
                }),
                  (a = l);
              }
            return i;
          }),
          t
        );
      })(),
      Mr = (function () {
        function t() {
          (this.sliceBusinessHours = Me(this._sliceBusinessHours)),
            (this.sliceDateSelection = Me(this._sliceDateSpan)),
            (this.sliceEventStore = Me(this._sliceEventStore)),
            (this.sliceEventDrag = Me(this._sliceInteraction)),
            (this.sliceEventResize = Me(this._sliceInteraction));
        }
        return (
          (t.prototype.sliceProps = function (t, e, n, i, r) {
            for (var o = [], a = 5; a < arguments.length; a++)
              o[a - 5] = arguments[a];
            var s = t.eventUiBases,
              l = this.sliceEventStore.apply(
                this,
                [t.eventStore, s, e, n, r].concat(o)
              );
            return {
              dateSelectionSegs: this.sliceDateSelection.apply(
                this,
                [t.dateSelection, s, r].concat(o)
              ),
              businessHourSegs: this.sliceBusinessHours.apply(
                this,
                [t.businessHours, e, n, i, r].concat(o)
              ),
              fgEventSegs: l.fg,
              bgEventSegs: l.bg,
              eventDrag: this.sliceEventDrag.apply(
                this,
                [t.eventDrag, s, e, n, r].concat(o)
              ),
              eventResize: this.sliceEventResize.apply(
                this,
                [t.eventResize, s, e, n, r].concat(o)
              ),
              eventSelection: t.eventSelection,
            };
          }),
          (t.prototype.sliceNowDate = function (t, e) {
            for (var n = [], i = 2; i < arguments.length; i++)
              n[i - 2] = arguments[i];
            return this._sliceDateSpan.apply(
              this,
              [{ range: { start: t, end: X(t, 1) }, allDay: !1 }, {}, e].concat(
                n
              )
            );
          }),
          (t.prototype._sliceBusinessHours = function (t, e, n, i, r) {
            for (var o = [], a = 5; a < arguments.length; a++)
              o[a - 5] = arguments[a];
            return t
              ? this._sliceEventStore.apply(
                  this,
                  [ae(t, Or(e, Boolean(n)), i), {}, e, n, r].concat(o)
                ).bg
              : [];
          }),
          (t.prototype._sliceEventStore = function (t, e, n, i, r) {
            for (var o = [], a = 5; a < arguments.length; a++)
              o[a - 5] = arguments[a];
            if (t) {
              var s = Ne(t, e, Or(n, Boolean(i)), i);
              return {
                bg: this.sliceEventRanges(s.bg, r, o),
                fg: this.sliceEventRanges(s.fg, r, o),
              };
            }
            return { bg: [], fg: [] };
          }),
          (t.prototype._sliceInteraction = function (t, e, n, i, r) {
            for (var o = [], a = 5; a < arguments.length; a++)
              o[a - 5] = arguments[a];
            if (!t) return null;
            var s = Ne(t.mutatedEvents, e, Or(n, Boolean(i)), i);
            return {
              segs: this.sliceEventRanges(s.fg, r, o),
              affectedInstances: t.affectedEvents.instances,
              isEvent: t.isEvent,
              sourceSeg: t.origSeg,
            };
          }),
          (t.prototype._sliceDateSpan = function (t, e, n) {
            for (var i = [], r = 3; r < arguments.length; r++)
              i[r - 3] = arguments[r];
            if (!t) return [];
            for (
              var o = Ii(t, e, n.context.calendar),
                a = this.sliceRange.apply(this, [t.range].concat(i)),
                s = 0,
                l = a;
              s < l.length;
              s++
            ) {
              var c = l[s];
              (c.component = n), (c.eventRange = o);
            }
            return a;
          }),
          (t.prototype.sliceEventRanges = function (t, e, n) {
            for (var i = [], r = 0, o = t; r < o.length; r++) {
              var a = o[r];
              i.push.apply(i, this.sliceEventRange(a, e, n));
            }
            return i;
          }),
          (t.prototype.sliceEventRange = function (t, e, n) {
            for (
              var i = this.sliceRange.apply(this, [t.range].concat(n)),
                r = 0,
                o = i;
              r < o.length;
              r++
            ) {
              var a = o[r];
              (a.component = e),
                (a.eventRange = t),
                (a.isStart = t.isStart && a.isStart),
                (a.isEnd = t.isEnd && a.isEnd);
            }
            return i;
          }),
          t
        );
      })();
    function Or(t, e) {
      var n = t.activeRange;
      return e
        ? n
        : {
            start: X(n.start, t.minTime.milliseconds),
            end: X(n.end, t.maxTime.milliseconds - 864e5),
          };
    }
  },
  function (t, e, n) {
    "use strict";
    n.d(e, "b", function () {
      return c;
    }),
      n.d(e, "a", function () {
        return d;
      }),
      n.d(e, "c", function () {
        return u;
      }),
      n.d(e, "f", function () {
        return p;
      }),
      n.d(e, "e", function () {
        return f;
      }),
      n.d(e, "d", function () {
        return b;
      });
    var i = n(20),
      r = n(6),
      o = n(25),
      a = n(5),
      s = n(18),
      l = function (t) {
        return i.d
          ? Object(a.j)(t)
            ? t
            : { capture: !!t || !1 }
          : !!(Object(a.j)(t) ? t.capture : t);
      },
      c = function (t, e, n, i) {
        t && t.addEventListener && t.addEventListener(e, n, l(i));
      },
      d = function (t, e, n, i) {
        t && t.removeEventListener && t.removeEventListener(e, n, l(i));
      },
      u = function (t) {
        for (
          var e = t ? c : d,
            n = arguments.length,
            i = new Array(n > 1 ? n - 1 : 0),
            r = 1;
          r < n;
          r++
        )
          i[r - 1] = arguments[r];
        e.apply(void 0, i);
      },
      p = function (t) {
        var e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n = e.preventDefault,
          i = void 0 === n || n,
          r = e.propagation,
          o = void 0 === r || r,
          a = e.immediatePropagation,
          s = void 0 !== a && a;
        i && t.preventDefault(),
          o && t.stopPropagation(),
          s && t.stopImmediatePropagation();
      },
      h = function (t) {
        return Object(s.b)(t.replace(o.d, ""));
      },
      f = function (t, e) {
        return [r.ib, h(t), e].join(r.jb);
      },
      b = function (t, e) {
        return [r.ib, e, h(t)].join(r.jb);
      };
  },
  function (t, e, n) {
    "use strict";
    n.d(e, "a", function () {
      return i;
    }),
      n.d(e, "b", function () {
        return r;
      }),
      n.d(e, "c", function () {
        return o;
      }),
      n.d(e, "d", function () {
        return a;
      }),
      n.d(e, "e", function () {
        return s;
      }),
      n.d(e, "f", function () {
        return l;
      }),
      n.d(e, "g", function () {
        return c;
      }),
      n.d(e, "h", function () {
        return d;
      }),
      n.d(e, "i", function () {
        return u;
      }),
      n.d(e, "j", function () {
        return p;
      }),
      n.d(e, "k", function () {
        return h;
      }),
      n.d(e, "l", function () {
        return f;
      }),
      n.d(e, "m", function () {
        return b;
      }),
      n.d(e, "n", function () {
        return m;
      }),
      n.d(e, "o", function () {
        return g;
      }),
      n.d(e, "p", function () {
        return v;
      }),
      n.d(e, "q", function () {
        return _;
      }),
      n.d(e, "r", function () {
        return y;
      }),
      n.d(e, "s", function () {
        return M;
      }),
      n.d(e, "t", function () {
        return O;
      }),
      n.d(e, "u", function () {
        return w;
      }),
      n.d(e, "v", function () {
        return A;
      }),
      n.d(e, "w", function () {
        return x;
      }),
      n.d(e, "x", function () {
        return z;
      }),
      n.d(e, "y", function () {
        return C;
      }),
      n.d(e, "z", function () {
        return k;
      }),
      n.d(e, "A", function () {
        return S;
      }),
      n.d(e, "B", function () {
        return T;
      }),
      n.d(e, "C", function () {
        return D;
      }),
      n.d(e, "D", function () {
        return L;
      }),
      n.d(e, "E", function () {
        return q;
      }),
      n.d(e, "F", function () {
        return E;
      }),
      n.d(e, "G", function () {
        return j;
      }),
      n.d(e, "H", function () {
        return P;
      }),
      n.d(e, "I", function () {
        return R;
      }),
      n.d(e, "J", function () {
        return I;
      }),
      n.d(e, "K", function () {
        return W;
      }),
      n.d(e, "L", function () {
        return N;
      }),
      n.d(e, "M", function () {
        return B;
      }),
      n.d(e, "N", function () {
        return F;
      }),
      n.d(e, "O", function () {
        return $;
      }),
      n.d(e, "P", function () {
        return H;
      }),
      n.d(e, "Q", function () {
        return Y;
      }),
      n.d(e, "R", function () {
        return U;
      }),
      n.d(e, "S", function () {
        return X;
      }),
      n.d(e, "T", function () {
        return V;
      }),
      n.d(e, "U", function () {
        return G;
      }),
      n.d(e, "V", function () {
        return K;
      }),
      n.d(e, "W", function () {
        return Z;
      }),
      n.d(e, "X", function () {
        return J;
      }),
      n.d(e, "Y", function () {
        return Q;
      }),
      n.d(e, "Z", function () {
        return tt;
      }),
      n.d(e, "ab", function () {
        return et;
      }),
      n.d(e, "bb", function () {
        return nt;
      }),
      n.d(e, "cb", function () {
        return it;
      }),
      n.d(e, "db", function () {
        return rt;
      }),
      n.d(e, "eb", function () {
        return ot;
      }),
      n.d(e, "fb", function () {
        return at;
      }),
      n.d(e, "gb", function () {
        return st;
      }),
      n.d(e, "hb", function () {
        return lt;
      }),
      n.d(e, "ib", function () {
        return ct;
      }),
      n.d(e, "jb", function () {
        return dt;
      }),
      n.d(e, "kb", function () {
        return ut;
      }),
      n.d(e, "lb", function () {
        return pt;
      });
    var i = "add-button-text",
      r = "append",
      o = "aside",
      a = "badge",
      s = "bottom-row",
      l = "button-content",
      c = "custom-foot",
      d = "decrement",
      u = "default",
      p = "description",
      h = "dismiss",
      f = "drop-placeholder",
      b = "ellipsis-text",
      m = "empty",
      g = "emptyfiltered",
      v = "file-name",
      _ = "first",
      y = "first-text",
      M = "footer",
      O = "header",
      w = "header-close",
      A = "icon-clear",
      x = "icon-empty",
      z = "icon-full",
      C = "icon-half",
      k = "img",
      S = "increment",
      T = "invalid-feedback",
      D = "label",
      L = "last-text",
      q = "lead",
      E = "loading",
      j = "modal-backdrop",
      P = "modal-cancel",
      R = "modal-footer",
      I = "modal-header",
      W = "modal-header-close",
      N = "modal-ok",
      B = "modal-title",
      F = "nav-next-decade",
      $ = "nav-next-month",
      H = "nav-next-year",
      Y = "nav-prev-decade",
      U = "nav-prev-month",
      X = "nav-prev-year",
      V = "nav-this-month",
      G = "next-text",
      K = "overlay",
      Z = "page",
      J = "placeholder",
      Q = "prepend",
      tt = "prev-text",
      et = "row-details",
      nt = "table-busy",
      it = "table-caption",
      rt = "table-colgroup",
      ot = "tabs-end",
      at = "tabs-start",
      st = "text",
      lt = "thead-top",
      ct = "title",
      dt = "toast-title",
      ut = "top-row",
      pt = "valid-feedback";
  },
  function (t, e, n) {
    "use strict";
    n.d(e, "c", function () {
      return i;
    }),
      n.d(e, "b", function () {
        return r;
      }),
      n.d(e, "a", function () {
        return o;
      });
    var i = function (t) {
        var e =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : NaN,
          n = parseInt(t, 10);
        return isNaN(n) ? e : n;
      },
      r = function (t) {
        var e =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : NaN,
          n = parseFloat(t);
        return isNaN(n) ? e : n;
      },
      o = function (t, e) {
        return r(t).toFixed(i(e, 0));
      };
  },
  function (t, e, n) {
    "use strict";
    n.d(e, "f", function () {
      return r;
    }),
      n.d(e, "a", function () {
        return o;
      }),
      n.d(e, "b", function () {
        return a;
      }),
      n.d(e, "c", function () {
        return s;
      }),
      n.d(e, "d", function () {
        return l;
      }),
      n.d(e, "e", function () {
        return c;
      });
    var i = n(5),
      r = function () {
        return Array.from.apply(Array, arguments);
      },
      o = function (t, e) {
        return -1 !== t.indexOf(e);
      },
      a = function () {
        for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
          e[n] = arguments[n];
        return Array.prototype.concat.apply([], e);
      },
      s = function (t, e) {
        var n = Object(i.f)(e)
          ? e
          : function () {
              return e;
            };
        return Array.apply(null, { length: t }).map(n);
      },
      l = function (t) {
        return t.reduce(function (t, e) {
          return a(t, e);
        }, []);
      },
      c = function t(e) {
        return e.reduce(function (e, n) {
          return a(e, Array.isArray(n) ? t(n) : n);
        }, []);
      };
  },
  function (t, e, n) {
    "use strict";
    function i(t, e, n, i, r, o, a, s) {
      var l,
        c = "function" == typeof t ? t.options : t;
      if (
        (e && ((c.render = e), (c.staticRenderFns = n), (c._compiled = !0)),
        i && (c.functional = !0),
        o && (c._scopeId = "data-v-" + o),
        a
          ? ((l = function (t) {
              (t =
                t ||
                (this.$vnode && this.$vnode.ssrContext) ||
                (this.parent &&
                  this.parent.$vnode &&
                  this.parent.$vnode.ssrContext)) ||
                "undefined" == typeof __VUE_SSR_CONTEXT__ ||
                (t = __VUE_SSR_CONTEXT__),
                r && r.call(this, t),
                t && t._registeredComponents && t._registeredComponents.add(a);
            }),
            (c._ssrRegister = l))
          : r &&
            (l = s
              ? function () {
                  r.call(
                    this,
                    (c.functional ? this.parent : this).$root.$options
                      .shadowRoot
                  );
                }
              : r),
        l)
      )
        if (c.functional) {
          c._injectStyles = l;
          var d = c.render;
          c.render = function (t, e) {
            return l.call(e), d(t, e);
          };
        } else {
          var u = c.beforeCreate;
          c.beforeCreate = u ? [].concat(u, l) : [l];
        }
      return { exports: t, options: c };
    }
    n.d(e, "a", function () {
      return i;
    });
  },
  function (t, e, n) {
    (function (t) {
      t.exports = (function () {
        "use strict";
        var e, i;
        function r() {
          return e.apply(null, arguments);
        }
        function o(t) {
          return (
            t instanceof Array ||
            "[object Array]" === Object.prototype.toString.call(t)
          );
        }
        function a(t) {
          return (
            null != t && "[object Object]" === Object.prototype.toString.call(t)
          );
        }
        function s(t, e) {
          return Object.prototype.hasOwnProperty.call(t, e);
        }
        function l(t) {
          if (Object.getOwnPropertyNames)
            return 0 === Object.getOwnPropertyNames(t).length;
          var e;
          for (e in t) if (s(t, e)) return !1;
          return !0;
        }
        function c(t) {
          return void 0 === t;
        }
        function d(t) {
          return (
            "number" == typeof t ||
            "[object Number]" === Object.prototype.toString.call(t)
          );
        }
        function u(t) {
          return (
            t instanceof Date ||
            "[object Date]" === Object.prototype.toString.call(t)
          );
        }
        function p(t, e) {
          var n,
            i = [],
            r = t.length;
          for (n = 0; n < r; ++n) i.push(e(t[n], n));
          return i;
        }
        function h(t, e) {
          for (var n in e) s(e, n) && (t[n] = e[n]);
          return (
            s(e, "toString") && (t.toString = e.toString),
            s(e, "valueOf") && (t.valueOf = e.valueOf),
            t
          );
        }
        function f(t, e, n, i) {
          return xe(t, e, n, i, !0).utc();
        }
        function b(t) {
          return (
            null == t._pf &&
              (t._pf = {
                empty: !1,
                unusedTokens: [],
                unusedInput: [],
                overflow: -2,
                charsLeftOver: 0,
                nullInput: !1,
                invalidEra: null,
                invalidMonth: null,
                invalidFormat: !1,
                userInvalidated: !1,
                iso: !1,
                parsedDateParts: [],
                era: null,
                meridiem: null,
                rfc2822: !1,
                weekdayMismatch: !1,
              }),
            t._pf
          );
        }
        function m(t) {
          var e = null,
            n = !1,
            r = t._d && !isNaN(t._d.getTime());
          return (
            r &&
              ((e = b(t)),
              (n = i.call(e.parsedDateParts, function (t) {
                return null != t;
              })),
              (r =
                e.overflow < 0 &&
                !e.empty &&
                !e.invalidEra &&
                !e.invalidMonth &&
                !e.invalidWeekday &&
                !e.weekdayMismatch &&
                !e.nullInput &&
                !e.invalidFormat &&
                !e.userInvalidated &&
                (!e.meridiem || (e.meridiem && n))),
              t._strict &&
                (r =
                  r &&
                  0 === e.charsLeftOver &&
                  0 === e.unusedTokens.length &&
                  void 0 === e.bigHour)),
            null != Object.isFrozen && Object.isFrozen(t)
              ? r
              : ((t._isValid = r), t._isValid)
          );
        }
        function g(t) {
          var e = f(NaN);
          return null != t ? h(b(e), t) : (b(e).userInvalidated = !0), e;
        }
        i = Array.prototype.some
          ? Array.prototype.some
          : function (t) {
              var e,
                n = Object(this),
                i = n.length >>> 0;
              for (e = 0; e < i; e++)
                if (e in n && t.call(this, n[e], e, n)) return !0;
              return !1;
            };
        var v = (r.momentProperties = []),
          _ = !1;
        function y(t, e) {
          var n,
            i,
            r,
            o = v.length;
          if (
            (c(e._isAMomentObject) || (t._isAMomentObject = e._isAMomentObject),
            c(e._i) || (t._i = e._i),
            c(e._f) || (t._f = e._f),
            c(e._l) || (t._l = e._l),
            c(e._strict) || (t._strict = e._strict),
            c(e._tzm) || (t._tzm = e._tzm),
            c(e._isUTC) || (t._isUTC = e._isUTC),
            c(e._offset) || (t._offset = e._offset),
            c(e._pf) || (t._pf = b(e)),
            c(e._locale) || (t._locale = e._locale),
            o > 0)
          )
            for (n = 0; n < o; n++) c((r = e[(i = v[n])])) || (t[i] = r);
          return t;
        }
        function M(t) {
          y(this, t),
            (this._d = new Date(null != t._d ? t._d.getTime() : NaN)),
            this.isValid() || (this._d = new Date(NaN)),
            !1 === _ && ((_ = !0), r.updateOffset(this), (_ = !1));
        }
        function O(t) {
          return t instanceof M || (null != t && null != t._isAMomentObject);
        }
        function w(t) {
          !1 === r.suppressDeprecationWarnings &&
            "undefined" != typeof console &&
            console.warn;
        }
        function A(t, e) {
          var n = !0;
          return h(function () {
            if (
              (null != r.deprecationHandler && r.deprecationHandler(null, t), n)
            ) {
              var i,
                o,
                a,
                l = [],
                c = arguments.length;
              for (o = 0; o < c; o++) {
                if (((i = ""), "object" == typeof arguments[o])) {
                  for (a in ((i += "\n[" + o + "] "), arguments[0]))
                    s(arguments[0], a) &&
                      (i += a + ": " + arguments[0][a] + ", ");
                  i = i.slice(0, -2);
                } else i = arguments[o];
                l.push(i);
              }
              w((Array.prototype.slice.call(l).join(""), new Error().stack)),
                (n = !1);
            }
            return e.apply(this, arguments);
          }, e);
        }
        var x,
          z = {};
        function C(t, e) {
          null != r.deprecationHandler && r.deprecationHandler(t, e),
            z[t] || (w(), (z[t] = !0));
        }
        function k(t) {
          return (
            ("undefined" != typeof Function && t instanceof Function) ||
            "[object Function]" === Object.prototype.toString.call(t)
          );
        }
        function S(t, e) {
          var n,
            i = h({}, t);
          for (n in e)
            s(e, n) &&
              (a(t[n]) && a(e[n])
                ? ((i[n] = {}), h(i[n], t[n]), h(i[n], e[n]))
                : null != e[n]
                ? (i[n] = e[n])
                : delete i[n]);
          for (n in t) s(t, n) && !s(e, n) && a(t[n]) && (i[n] = h({}, i[n]));
          return i;
        }
        function T(t) {
          null != t && this.set(t);
        }
        function D(t, e, n) {
          var i = "" + Math.abs(t),
            r = e - i.length;
          return (
            (t >= 0 ? (n ? "+" : "") : "-") +
            Math.pow(10, Math.max(0, r)).toString().substr(1) +
            i
          );
        }
        (r.suppressDeprecationWarnings = !1),
          (r.deprecationHandler = null),
          (x = Object.keys
            ? Object.keys
            : function (t) {
                var e,
                  n = [];
                for (e in t) s(t, e) && n.push(e);
                return n;
              });
        var L =
            /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
          q = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
          E = {},
          j = {};
        function P(t, e, n, i) {
          var r = i;
          "string" == typeof i &&
            (r = function () {
              return this[i]();
            }),
            t && (j[t] = r),
            e &&
              (j[e[0]] = function () {
                return D(r.apply(this, arguments), e[1], e[2]);
              }),
            n &&
              (j[n] = function () {
                return this.localeData().ordinal(r.apply(this, arguments), t);
              });
        }
        function R(t, e) {
          return t.isValid()
            ? ((e = I(e, t.localeData())),
              (E[e] =
                E[e] ||
                (function (t) {
                  var e,
                    n,
                    i,
                    r = t.match(L);
                  for (e = 0, n = r.length; e < n; e++)
                    j[r[e]]
                      ? (r[e] = j[r[e]])
                      : (r[e] = (i = r[e]).match(/\[[\s\S]/)
                          ? i.replace(/^\[|\]$/g, "")
                          : i.replace(/\\/g, ""));
                  return function (e) {
                    var i,
                      o = "";
                    for (i = 0; i < n; i++)
                      o += k(r[i]) ? r[i].call(e, t) : r[i];
                    return o;
                  };
                })(e)),
              E[e](t))
            : t.localeData().invalidDate();
        }
        function I(t, e) {
          var n = 5;
          function i(t) {
            return e.longDateFormat(t) || t;
          }
          for (q.lastIndex = 0; n >= 0 && q.test(t); )
            (t = t.replace(q, i)), (q.lastIndex = 0), (n -= 1);
          return t;
        }
        var W = {
          D: "date",
          dates: "date",
          date: "date",
          d: "day",
          days: "day",
          day: "day",
          e: "weekday",
          weekdays: "weekday",
          weekday: "weekday",
          E: "isoWeekday",
          isoweekdays: "isoWeekday",
          isoweekday: "isoWeekday",
          DDD: "dayOfYear",
          dayofyears: "dayOfYear",
          dayofyear: "dayOfYear",
          h: "hour",
          hours: "hour",
          hour: "hour",
          ms: "millisecond",
          milliseconds: "millisecond",
          millisecond: "millisecond",
          m: "minute",
          minutes: "minute",
          minute: "minute",
          M: "month",
          months: "month",
          month: "month",
          Q: "quarter",
          quarters: "quarter",
          quarter: "quarter",
          s: "second",
          seconds: "second",
          second: "second",
          gg: "weekYear",
          weekyears: "weekYear",
          weekyear: "weekYear",
          GG: "isoWeekYear",
          isoweekyears: "isoWeekYear",
          isoweekyear: "isoWeekYear",
          w: "week",
          weeks: "week",
          week: "week",
          W: "isoWeek",
          isoweeks: "isoWeek",
          isoweek: "isoWeek",
          y: "year",
          years: "year",
          year: "year",
        };
        function N(t) {
          return "string" == typeof t ? W[t] || W[t.toLowerCase()] : void 0;
        }
        function B(t) {
          var e,
            n,
            i = {};
          for (n in t) s(t, n) && (e = N(n)) && (i[e] = t[n]);
          return i;
        }
        var F,
          $ = {
            date: 9,
            day: 11,
            weekday: 11,
            isoWeekday: 11,
            dayOfYear: 4,
            hour: 13,
            millisecond: 16,
            minute: 14,
            month: 8,
            quarter: 7,
            second: 15,
            weekYear: 1,
            isoWeekYear: 1,
            week: 5,
            isoWeek: 5,
            year: 1,
          },
          H = /\d/,
          Y = /\d\d/,
          U = /\d{3}/,
          X = /\d{4}/,
          V = /[+-]?\d{6}/,
          G = /\d\d?/,
          K = /\d\d\d\d?/,
          Z = /\d\d\d\d\d\d?/,
          J = /\d{1,3}/,
          Q = /\d{1,4}/,
          tt = /[+-]?\d{1,6}/,
          et = /\d+/,
          nt = /[+-]?\d+/,
          it = /Z|[+-]\d\d:?\d\d/gi,
          rt = /Z|[+-]\d\d(?::?\d\d)?/gi,
          ot =
            /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
          at = /^[1-9]\d?/,
          st = /^([1-9]\d|\d)/;
        function lt(t, e, n) {
          F[t] = k(e)
            ? e
            : function (t, i) {
                return t && n ? n : e;
              };
        }
        function ct(t, e) {
          return s(F, t)
            ? F[t](e._strict, e._locale)
            : new RegExp(
                dt(
                  t
                    .replace("\\", "")
                    .replace(
                      /\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
                      function (t, e, n, i, r) {
                        return e || n || i || r;
                      }
                    )
                )
              );
        }
        function dt(t) {
          return t.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
        }
        function ut(t) {
          return t < 0 ? Math.ceil(t) || 0 : Math.floor(t);
        }
        function pt(t) {
          var e = +t,
            n = 0;
          return 0 !== e && isFinite(e) && (n = ut(e)), n;
        }
        F = {};
        var ht = {};
        function ft(t, e) {
          var n,
            i,
            r = e;
          for (
            "string" == typeof t && (t = [t]),
              d(e) &&
                (r = function (t, n) {
                  n[e] = pt(t);
                }),
              i = t.length,
              n = 0;
            n < i;
            n++
          )
            ht[t[n]] = r;
        }
        function bt(t, e) {
          ft(t, function (t, n, i, r) {
            (i._w = i._w || {}), e(t, i._w, i, r);
          });
        }
        function mt(t, e, n) {
          null != e && s(ht, t) && ht[t](e, n._a, n, t);
        }
        function gt(t) {
          return (t % 4 == 0 && t % 100 != 0) || t % 400 == 0;
        }
        function vt(t) {
          return gt(t) ? 366 : 365;
        }
        P("Y", 0, 0, function () {
          var t = this.year();
          return t <= 9999 ? D(t, 4) : "+" + t;
        }),
          P(0, ["YY", 2], 0, function () {
            return this.year() % 100;
          }),
          P(0, ["YYYY", 4], 0, "year"),
          P(0, ["YYYYY", 5], 0, "year"),
          P(0, ["YYYYYY", 6, !0], 0, "year"),
          lt("Y", nt),
          lt("YY", G, Y),
          lt("YYYY", Q, X),
          lt("YYYYY", tt, V),
          lt("YYYYYY", tt, V),
          ft(["YYYYY", "YYYYYY"], 0),
          ft("YYYY", function (t, e) {
            e[0] = 2 === t.length ? r.parseTwoDigitYear(t) : pt(t);
          }),
          ft("YY", function (t, e) {
            e[0] = r.parseTwoDigitYear(t);
          }),
          ft("Y", function (t, e) {
            e[0] = parseInt(t, 10);
          }),
          (r.parseTwoDigitYear = function (t) {
            return pt(t) + (pt(t) > 68 ? 1900 : 2e3);
          });
        var _t,
          yt = Mt("FullYear", !0);
        function Mt(t, e) {
          return function (n) {
            return null != n
              ? (wt(this, t, n), r.updateOffset(this, e), this)
              : Ot(this, t);
          };
        }
        function Ot(t, e) {
          if (!t.isValid()) return NaN;
          var n = t._d,
            i = t._isUTC;
          switch (e) {
            case "Milliseconds":
              return i ? n.getUTCMilliseconds() : n.getMilliseconds();
            case "Seconds":
              return i ? n.getUTCSeconds() : n.getSeconds();
            case "Minutes":
              return i ? n.getUTCMinutes() : n.getMinutes();
            case "Hours":
              return i ? n.getUTCHours() : n.getHours();
            case "Date":
              return i ? n.getUTCDate() : n.getDate();
            case "Day":
              return i ? n.getUTCDay() : n.getDay();
            case "Month":
              return i ? n.getUTCMonth() : n.getMonth();
            case "FullYear":
              return i ? n.getUTCFullYear() : n.getFullYear();
            default:
              return NaN;
          }
        }
        function wt(t, e, n) {
          var i, r, o, a, s;
          if (t.isValid() && !isNaN(n)) {
            switch (((i = t._d), (r = t._isUTC), e)) {
              case "Milliseconds":
                return void (r
                  ? i.setUTCMilliseconds(n)
                  : i.setMilliseconds(n));
              case "Seconds":
                return void (r ? i.setUTCSeconds(n) : i.setSeconds(n));
              case "Minutes":
                return void (r ? i.setUTCMinutes(n) : i.setMinutes(n));
              case "Hours":
                return void (r ? i.setUTCHours(n) : i.setHours(n));
              case "Date":
                return void (r ? i.setUTCDate(n) : i.setDate(n));
              case "FullYear":
                break;
              default:
                return;
            }
            (o = n),
              (a = t.month()),
              (s = 29 !== (s = t.date()) || 1 !== a || gt(o) ? s : 28),
              r ? i.setUTCFullYear(o, a, s) : i.setFullYear(o, a, s);
          }
        }
        function At(t, e) {
          if (isNaN(t) || isNaN(e)) return NaN;
          var n = ((e % 12) + 12) % 12;
          return (
            (t += (e - n) / 12),
            1 === n ? (gt(t) ? 29 : 28) : 31 - ((n % 7) % 2)
          );
        }
        (_t = Array.prototype.indexOf
          ? Array.prototype.indexOf
          : function (t) {
              var e;
              for (e = 0; e < this.length; ++e) if (this[e] === t) return e;
              return -1;
            }),
          P("M", ["MM", 2], "Mo", function () {
            return this.month() + 1;
          }),
          P("MMM", 0, 0, function (t) {
            return this.localeData().monthsShort(this, t);
          }),
          P("MMMM", 0, 0, function (t) {
            return this.localeData().months(this, t);
          }),
          lt("M", G, at),
          lt("MM", G, Y),
          lt("MMM", function (t, e) {
            return e.monthsShortRegex(t);
          }),
          lt("MMMM", function (t, e) {
            return e.monthsRegex(t);
          }),
          ft(["M", "MM"], function (t, e) {
            e[1] = pt(t) - 1;
          }),
          ft(["MMM", "MMMM"], function (t, e, n, i) {
            var r = n._locale.monthsParse(t, i, n._strict);
            null != r ? (e[1] = r) : (b(n).invalidMonth = t);
          });
        var xt =
            "January_February_March_April_May_June_July_August_September_October_November_December".split(
              "_"
            ),
          zt = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
          Ct = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
          kt = ot,
          St = ot;
        function Tt(t, e, n) {
          var i,
            r,
            o,
            a = t.toLocaleLowerCase();
          if (!this._monthsParse)
            for (
              this._monthsParse = [],
                this._longMonthsParse = [],
                this._shortMonthsParse = [],
                i = 0;
              i < 12;
              ++i
            )
              (o = f([2e3, i])),
                (this._shortMonthsParse[i] = this.monthsShort(
                  o,
                  ""
                ).toLocaleLowerCase()),
                (this._longMonthsParse[i] = this.months(
                  o,
                  ""
                ).toLocaleLowerCase());
          return n
            ? "MMM" === e
              ? -1 !== (r = _t.call(this._shortMonthsParse, a))
                ? r
                : null
              : -1 !== (r = _t.call(this._longMonthsParse, a))
              ? r
              : null
            : "MMM" === e
            ? -1 !== (r = _t.call(this._shortMonthsParse, a)) ||
              -1 !== (r = _t.call(this._longMonthsParse, a))
              ? r
              : null
            : -1 !== (r = _t.call(this._longMonthsParse, a)) ||
              -1 !== (r = _t.call(this._shortMonthsParse, a))
            ? r
            : null;
        }
        function Dt(t, e) {
          if (!t.isValid()) return t;
          if ("string" == typeof e)
            if (/^\d+$/.test(e)) e = pt(e);
            else if (!d((e = t.localeData().monthsParse(e)))) return t;
          var n = e,
            i = t.date();
          return (
            (i = i < 29 ? i : Math.min(i, At(t.year(), n))),
            t._isUTC ? t._d.setUTCMonth(n, i) : t._d.setMonth(n, i),
            t
          );
        }
        function Lt(t) {
          return null != t
            ? (Dt(this, t), r.updateOffset(this, !0), this)
            : Ot(this, "Month");
        }
        function qt() {
          function t(t, e) {
            return e.length - t.length;
          }
          var e,
            n,
            i,
            r,
            o = [],
            a = [],
            s = [];
          for (e = 0; e < 12; e++)
            (n = f([2e3, e])),
              (i = dt(this.monthsShort(n, ""))),
              (r = dt(this.months(n, ""))),
              o.push(i),
              a.push(r),
              s.push(r),
              s.push(i);
          o.sort(t),
            a.sort(t),
            s.sort(t),
            (this._monthsRegex = new RegExp("^(" + s.join("|") + ")", "i")),
            (this._monthsShortRegex = this._monthsRegex),
            (this._monthsStrictRegex = new RegExp(
              "^(" + a.join("|") + ")",
              "i"
            )),
            (this._monthsShortStrictRegex = new RegExp(
              "^(" + o.join("|") + ")",
              "i"
            ));
        }
        function Et(t, e, n, i, r, o, a) {
          var s;
          return (
            t < 100 && t >= 0
              ? ((s = new Date(t + 400, e, n, i, r, o, a)),
                isFinite(s.getFullYear()) && s.setFullYear(t))
              : (s = new Date(t, e, n, i, r, o, a)),
            s
          );
        }
        function jt(t) {
          var e, n;
          return (
            t < 100 && t >= 0
              ? (((n = Array.prototype.slice.call(arguments))[0] = t + 400),
                (e = new Date(Date.UTC.apply(null, n))),
                isFinite(e.getUTCFullYear()) && e.setUTCFullYear(t))
              : (e = new Date(Date.UTC.apply(null, arguments))),
            e
          );
        }
        function Pt(t, e, n) {
          var i = 7 + e - n;
          return (-(7 + jt(t, 0, i).getUTCDay() - e) % 7) + i - 1;
        }
        function Rt(t, e, n, i, r) {
          var o,
            a,
            s = 1 + 7 * (e - 1) + ((7 + n - i) % 7) + Pt(t, i, r);
          return (
            s <= 0
              ? (a = vt((o = t - 1)) + s)
              : s > vt(t)
              ? ((o = t + 1), (a = s - vt(t)))
              : ((o = t), (a = s)),
            { year: o, dayOfYear: a }
          );
        }
        function It(t, e, n) {
          var i,
            r,
            o = Pt(t.year(), e, n),
            a = Math.floor((t.dayOfYear() - o - 1) / 7) + 1;
          return (
            a < 1
              ? (i = a + Wt((r = t.year() - 1), e, n))
              : a > Wt(t.year(), e, n)
              ? ((i = a - Wt(t.year(), e, n)), (r = t.year() + 1))
              : ((r = t.year()), (i = a)),
            { week: i, year: r }
          );
        }
        function Wt(t, e, n) {
          var i = Pt(t, e, n),
            r = Pt(t + 1, e, n);
          return (vt(t) - i + r) / 7;
        }
        function Nt(t, e) {
          return t.slice(e, 7).concat(t.slice(0, e));
        }
        P("w", ["ww", 2], "wo", "week"),
          P("W", ["WW", 2], "Wo", "isoWeek"),
          lt("w", G, at),
          lt("ww", G, Y),
          lt("W", G, at),
          lt("WW", G, Y),
          bt(["w", "ww", "W", "WW"], function (t, e, n, i) {
            e[i.substr(0, 1)] = pt(t);
          }),
          P("d", 0, "do", "day"),
          P("dd", 0, 0, function (t) {
            return this.localeData().weekdaysMin(this, t);
          }),
          P("ddd", 0, 0, function (t) {
            return this.localeData().weekdaysShort(this, t);
          }),
          P("dddd", 0, 0, function (t) {
            return this.localeData().weekdays(this, t);
          }),
          P("e", 0, 0, "weekday"),
          P("E", 0, 0, "isoWeekday"),
          lt("d", G),
          lt("e", G),
          lt("E", G),
          lt("dd", function (t, e) {
            return e.weekdaysMinRegex(t);
          }),
          lt("ddd", function (t, e) {
            return e.weekdaysShortRegex(t);
          }),
          lt("dddd", function (t, e) {
            return e.weekdaysRegex(t);
          }),
          bt(["dd", "ddd", "dddd"], function (t, e, n, i) {
            var r = n._locale.weekdaysParse(t, i, n._strict);
            null != r ? (e.d = r) : (b(n).invalidWeekday = t);
          }),
          bt(["d", "e", "E"], function (t, e, n, i) {
            e[i] = pt(t);
          });
        var Bt =
            "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split(
              "_"
            ),
          Ft = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
          $t = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
          Ht = ot,
          Yt = ot,
          Ut = ot;
        function Xt(t, e, n) {
          var i,
            r,
            o,
            a = t.toLocaleLowerCase();
          if (!this._weekdaysParse)
            for (
              this._weekdaysParse = [],
                this._shortWeekdaysParse = [],
                this._minWeekdaysParse = [],
                i = 0;
              i < 7;
              ++i
            )
              (o = f([2e3, 1]).day(i)),
                (this._minWeekdaysParse[i] = this.weekdaysMin(
                  o,
                  ""
                ).toLocaleLowerCase()),
                (this._shortWeekdaysParse[i] = this.weekdaysShort(
                  o,
                  ""
                ).toLocaleLowerCase()),
                (this._weekdaysParse[i] = this.weekdays(
                  o,
                  ""
                ).toLocaleLowerCase());
          return n
            ? "dddd" === e
              ? -1 !== (r = _t.call(this._weekdaysParse, a))
                ? r
                : null
              : "ddd" === e
              ? -1 !== (r = _t.call(this._shortWeekdaysParse, a))
                ? r
                : null
              : -1 !== (r = _t.call(this._minWeekdaysParse, a))
              ? r
              : null
            : "dddd" === e
            ? -1 !== (r = _t.call(this._weekdaysParse, a)) ||
              -1 !== (r = _t.call(this._shortWeekdaysParse, a)) ||
              -1 !== (r = _t.call(this._minWeekdaysParse, a))
              ? r
              : null
            : "ddd" === e
            ? -1 !== (r = _t.call(this._shortWeekdaysParse, a)) ||
              -1 !== (r = _t.call(this._weekdaysParse, a)) ||
              -1 !== (r = _t.call(this._minWeekdaysParse, a))
              ? r
              : null
            : -1 !== (r = _t.call(this._minWeekdaysParse, a)) ||
              -1 !== (r = _t.call(this._weekdaysParse, a)) ||
              -1 !== (r = _t.call(this._shortWeekdaysParse, a))
            ? r
            : null;
        }
        function Vt() {
          function t(t, e) {
            return e.length - t.length;
          }
          var e,
            n,
            i,
            r,
            o,
            a = [],
            s = [],
            l = [],
            c = [];
          for (e = 0; e < 7; e++)
            (n = f([2e3, 1]).day(e)),
              (i = dt(this.weekdaysMin(n, ""))),
              (r = dt(this.weekdaysShort(n, ""))),
              (o = dt(this.weekdays(n, ""))),
              a.push(i),
              s.push(r),
              l.push(o),
              c.push(i),
              c.push(r),
              c.push(o);
          a.sort(t),
            s.sort(t),
            l.sort(t),
            c.sort(t),
            (this._weekdaysRegex = new RegExp("^(" + c.join("|") + ")", "i")),
            (this._weekdaysShortRegex = this._weekdaysRegex),
            (this._weekdaysMinRegex = this._weekdaysRegex),
            (this._weekdaysStrictRegex = new RegExp(
              "^(" + l.join("|") + ")",
              "i"
            )),
            (this._weekdaysShortStrictRegex = new RegExp(
              "^(" + s.join("|") + ")",
              "i"
            )),
            (this._weekdaysMinStrictRegex = new RegExp(
              "^(" + a.join("|") + ")",
              "i"
            ));
        }
        function Gt() {
          return this.hours() % 12 || 12;
        }
        function Kt(t, e) {
          P(t, 0, 0, function () {
            return this.localeData().meridiem(this.hours(), this.minutes(), e);
          });
        }
        function Zt(t, e) {
          return e._meridiemParse;
        }
        P("H", ["HH", 2], 0, "hour"),
          P("h", ["hh", 2], 0, Gt),
          P("k", ["kk", 2], 0, function () {
            return this.hours() || 24;
          }),
          P("hmm", 0, 0, function () {
            return "" + Gt.apply(this) + D(this.minutes(), 2);
          }),
          P("hmmss", 0, 0, function () {
            return (
              "" + Gt.apply(this) + D(this.minutes(), 2) + D(this.seconds(), 2)
            );
          }),
          P("Hmm", 0, 0, function () {
            return "" + this.hours() + D(this.minutes(), 2);
          }),
          P("Hmmss", 0, 0, function () {
            return (
              "" + this.hours() + D(this.minutes(), 2) + D(this.seconds(), 2)
            );
          }),
          Kt("a", !0),
          Kt("A", !1),
          lt("a", Zt),
          lt("A", Zt),
          lt("H", G, st),
          lt("h", G, at),
          lt("k", G, at),
          lt("HH", G, Y),
          lt("hh", G, Y),
          lt("kk", G, Y),
          lt("hmm", K),
          lt("hmmss", Z),
          lt("Hmm", K),
          lt("Hmmss", Z),
          ft(["H", "HH"], 3),
          ft(["k", "kk"], function (t, e, n) {
            var i = pt(t);
            e[3] = 24 === i ? 0 : i;
          }),
          ft(["a", "A"], function (t, e, n) {
            (n._isPm = n._locale.isPM(t)), (n._meridiem = t);
          }),
          ft(["h", "hh"], function (t, e, n) {
            (e[3] = pt(t)), (b(n).bigHour = !0);
          }),
          ft("hmm", function (t, e, n) {
            var i = t.length - 2;
            (e[3] = pt(t.substr(0, i))),
              (e[4] = pt(t.substr(i))),
              (b(n).bigHour = !0);
          }),
          ft("hmmss", function (t, e, n) {
            var i = t.length - 4,
              r = t.length - 2;
            (e[3] = pt(t.substr(0, i))),
              (e[4] = pt(t.substr(i, 2))),
              (e[5] = pt(t.substr(r))),
              (b(n).bigHour = !0);
          }),
          ft("Hmm", function (t, e, n) {
            var i = t.length - 2;
            (e[3] = pt(t.substr(0, i))), (e[4] = pt(t.substr(i)));
          }),
          ft("Hmmss", function (t, e, n) {
            var i = t.length - 4,
              r = t.length - 2;
            (e[3] = pt(t.substr(0, i))),
              (e[4] = pt(t.substr(i, 2))),
              (e[5] = pt(t.substr(r)));
          });
        var Jt,
          Qt = Mt("Hours", !0),
          te = {
            calendar: {
              sameDay: "[Today at] LT",
              nextDay: "[Tomorrow at] LT",
              nextWeek: "dddd [at] LT",
              lastDay: "[Yesterday at] LT",
              lastWeek: "[Last] dddd [at] LT",
              sameElse: "L",
            },
            longDateFormat: {
              LTS: "h:mm:ss A",
              LT: "h:mm A",
              L: "MM/DD/YYYY",
              LL: "MMMM D, YYYY",
              LLL: "MMMM D, YYYY h:mm A",
              LLLL: "dddd, MMMM D, YYYY h:mm A",
            },
            invalidDate: "Invalid date",
            ordinal: "%d",
            dayOfMonthOrdinalParse: /\d{1,2}/,
            relativeTime: {
              future: "in %s",
              past: "%s ago",
              s: "a few seconds",
              ss: "%d seconds",
              m: "a minute",
              mm: "%d minutes",
              h: "an hour",
              hh: "%d hours",
              d: "a day",
              dd: "%d days",
              w: "a week",
              ww: "%d weeks",
              M: "a month",
              MM: "%d months",
              y: "a year",
              yy: "%d years",
            },
            months: xt,
            monthsShort: zt,
            week: { dow: 0, doy: 6 },
            weekdays: Bt,
            weekdaysMin: $t,
            weekdaysShort: Ft,
            meridiemParse: /[ap]\.?m?\.?/i,
          },
          ee = {},
          ne = {};
        function ie(t, e) {
          var n,
            i = Math.min(t.length, e.length);
          for (n = 0; n < i; n += 1) if (t[n] !== e[n]) return n;
          return i;
        }
        function re(t) {
          return t ? t.toLowerCase().replace("_", "-") : t;
        }
        function oe(e) {
          var i = null;
          if (
            void 0 === ee[e] &&
            void 0 !== t &&
            t &&
            t.exports &&
            (function (t) {
              return !(!t || !t.match("^[^/\\\\]*$"));
            })(e)
          )
            try {
              (i = Jt._abbr), n(536)("./" + e), ae(i);
            } catch (t) {
              ee[e] = null;
            }
          return ee[e];
        }
        function ae(t, e) {
          var n;
          return (
            t &&
              ((n = c(e) ? le(t) : se(t, e))
                ? (Jt = n)
                : "undefined" != typeof console && console.warn),
            Jt._abbr
          );
        }
        function se(t, e) {
          if (null !== e) {
            var n,
              i = te;
            if (((e.abbr = t), null != ee[t]))
              C(
                "defineLocaleOverride",
                "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."
              ),
                (i = ee[t]._config);
            else if (null != e.parentLocale)
              if (null != ee[e.parentLocale]) i = ee[e.parentLocale]._config;
              else {
                if (null == (n = oe(e.parentLocale)))
                  return (
                    ne[e.parentLocale] || (ne[e.parentLocale] = []),
                    ne[e.parentLocale].push({ name: t, config: e }),
                    null
                  );
                i = n._config;
              }
            return (
              (ee[t] = new T(S(i, e))),
              ne[t] &&
                ne[t].forEach(function (t) {
                  se(t.name, t.config);
                }),
              ae(t),
              ee[t]
            );
          }
          return delete ee[t], null;
        }
        function le(t) {
          var e;
          if ((t && t._locale && t._locale._abbr && (t = t._locale._abbr), !t))
            return Jt;
          if (!o(t)) {
            if ((e = oe(t))) return e;
            t = [t];
          }
          return (function (t) {
            for (var e, n, i, r, o = 0; o < t.length; ) {
              for (
                e = (r = re(t[o]).split("-")).length,
                  n = (n = re(t[o + 1])) ? n.split("-") : null;
                e > 0;

              ) {
                if ((i = oe(r.slice(0, e).join("-")))) return i;
                if (n && n.length >= e && ie(r, n) >= e - 1) break;
                e--;
              }
              o++;
            }
            return Jt;
          })(t);
        }
        function ce(t) {
          var e,
            n = t._a;
          return (
            n &&
              -2 === b(t).overflow &&
              ((e =
                n[1] < 0 || n[1] > 11
                  ? 1
                  : n[2] < 1 || n[2] > At(n[0], n[1])
                  ? 2
                  : n[3] < 0 ||
                    n[3] > 24 ||
                    (24 === n[3] && (0 !== n[4] || 0 !== n[5] || 0 !== n[6]))
                  ? 3
                  : n[4] < 0 || n[4] > 59
                  ? 4
                  : n[5] < 0 || n[5] > 59
                  ? 5
                  : n[6] < 0 || n[6] > 999
                  ? 6
                  : -1),
              b(t)._overflowDayOfYear && (e < 0 || e > 2) && (e = 2),
              b(t)._overflowWeeks && -1 === e && (e = 7),
              b(t)._overflowWeekday && -1 === e && (e = 8),
              (b(t).overflow = e)),
            t
          );
        }
        var de =
            /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
          ue =
            /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
          pe = /Z|[+-]\d\d(?::?\d\d)?/,
          he = [
            ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
            ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
            ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
            ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
            ["YYYY-DDD", /\d{4}-\d{3}/],
            ["YYYY-MM", /\d{4}-\d\d/, !1],
            ["YYYYYYMMDD", /[+-]\d{10}/],
            ["YYYYMMDD", /\d{8}/],
            ["GGGG[W]WWE", /\d{4}W\d{3}/],
            ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
            ["YYYYDDD", /\d{7}/],
            ["YYYYMM", /\d{6}/, !1],
            ["YYYY", /\d{4}/, !1],
          ],
          fe = [
            ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
            ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
            ["HH:mm:ss", /\d\d:\d\d:\d\d/],
            ["HH:mm", /\d\d:\d\d/],
            ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
            ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
            ["HHmmss", /\d\d\d\d\d\d/],
            ["HHmm", /\d\d\d\d/],
            ["HH", /\d\d/],
          ],
          be = /^\/?Date\((-?\d+)/i,
          me =
            /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,
          ge = {
            UT: 0,
            GMT: 0,
            EDT: -240,
            EST: -300,
            CDT: -300,
            CST: -360,
            MDT: -360,
            MST: -420,
            PDT: -420,
            PST: -480,
          };
        function ve(t) {
          var e,
            n,
            i,
            r,
            o,
            a,
            s = t._i,
            l = de.exec(s) || ue.exec(s),
            c = he.length,
            d = fe.length;
          if (l) {
            for (b(t).iso = !0, e = 0, n = c; e < n; e++)
              if (he[e][1].exec(l[1])) {
                (r = he[e][0]), (i = !1 !== he[e][2]);
                break;
              }
            if (null == r) return void (t._isValid = !1);
            if (l[3]) {
              for (e = 0, n = d; e < n; e++)
                if (fe[e][1].exec(l[3])) {
                  o = (l[2] || " ") + fe[e][0];
                  break;
                }
              if (null == o) return void (t._isValid = !1);
            }
            if (!i && null != o) return void (t._isValid = !1);
            if (l[4]) {
              if (!pe.exec(l[4])) return void (t._isValid = !1);
              a = "Z";
            }
            (t._f = r + (o || "") + (a || "")), we(t);
          } else t._isValid = !1;
        }
        function _e(t) {
          var e = parseInt(t, 10);
          return e <= 49 ? 2e3 + e : e <= 999 ? 1900 + e : e;
        }
        function ye(t) {
          var e,
            n,
            i,
            r,
            o,
            a,
            s,
            l,
            c = me.exec(
              t._i
                .replace(/\([^()]*\)|[\n\t]/g, " ")
                .replace(/(\s\s+)/g, " ")
                .replace(/^\s\s*/, "")
                .replace(/\s\s*$/, "")
            );
          if (c) {
            if (
              ((n = c[4]),
              (i = c[3]),
              (r = c[2]),
              (o = c[5]),
              (a = c[6]),
              (s = c[7]),
              (l = [
                _e(n),
                zt.indexOf(i),
                parseInt(r, 10),
                parseInt(o, 10),
                parseInt(a, 10),
              ]),
              s && l.push(parseInt(s, 10)),
              (e = l),
              !(function (t, e, n) {
                return (
                  !t ||
                  Ft.indexOf(t) === new Date(e[0], e[1], e[2]).getDay() ||
                  ((b(n).weekdayMismatch = !0), (n._isValid = !1), !1)
                );
              })(c[1], e, t))
            )
              return;
            (t._a = e),
              (t._tzm = (function (t, e, n) {
                if (t) return ge[t];
                if (e) return 0;
                var i = parseInt(n, 10),
                  r = i % 100;
                return ((i - r) / 100) * 60 + r;
              })(c[8], c[9], c[10])),
              (t._d = jt.apply(null, t._a)),
              t._d.setUTCMinutes(t._d.getUTCMinutes() - t._tzm),
              (b(t).rfc2822 = !0);
          } else t._isValid = !1;
        }
        function Me(t, e, n) {
          return null != t ? t : null != e ? e : n;
        }
        function Oe(t) {
          var e,
            n,
            i,
            o,
            a,
            s = [];
          if (!t._d) {
            for (
              i = (function (t) {
                var e = new Date(r.now());
                return t._useUTC
                  ? [e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate()]
                  : [e.getFullYear(), e.getMonth(), e.getDate()];
              })(t),
                t._w &&
                  null == t._a[2] &&
                  null == t._a[1] &&
                  (function (t) {
                    var e, n, i, r, o, a, s, l, c;
                    null != (e = t._w).GG || null != e.W || null != e.E
                      ? ((o = 1),
                        (a = 4),
                        (n = Me(e.GG, t._a[0], It(ze(), 1, 4).year)),
                        (i = Me(e.W, 1)),
                        ((r = Me(e.E, 1)) < 1 || r > 7) && (l = !0))
                      : ((o = t._locale._week.dow),
                        (a = t._locale._week.doy),
                        (c = It(ze(), o, a)),
                        (n = Me(e.gg, t._a[0], c.year)),
                        (i = Me(e.w, c.week)),
                        null != e.d
                          ? ((r = e.d) < 0 || r > 6) && (l = !0)
                          : null != e.e
                          ? ((r = e.e + o), (e.e < 0 || e.e > 6) && (l = !0))
                          : (r = o)),
                      i < 1 || i > Wt(n, o, a)
                        ? (b(t)._overflowWeeks = !0)
                        : null != l
                        ? (b(t)._overflowWeekday = !0)
                        : ((s = Rt(n, i, r, o, a)),
                          (t._a[0] = s.year),
                          (t._dayOfYear = s.dayOfYear));
                  })(t),
                null != t._dayOfYear &&
                  ((a = Me(t._a[0], i[0])),
                  (t._dayOfYear > vt(a) || 0 === t._dayOfYear) &&
                    (b(t)._overflowDayOfYear = !0),
                  (n = jt(a, 0, t._dayOfYear)),
                  (t._a[1] = n.getUTCMonth()),
                  (t._a[2] = n.getUTCDate())),
                e = 0;
              e < 3 && null == t._a[e];
              ++e
            )
              t._a[e] = s[e] = i[e];
            for (; e < 7; e++)
              t._a[e] = s[e] = null == t._a[e] ? (2 === e ? 1 : 0) : t._a[e];
            24 === t._a[3] &&
              0 === t._a[4] &&
              0 === t._a[5] &&
              0 === t._a[6] &&
              ((t._nextDay = !0), (t._a[3] = 0)),
              (t._d = (t._useUTC ? jt : Et).apply(null, s)),
              (o = t._useUTC ? t._d.getUTCDay() : t._d.getDay()),
              null != t._tzm &&
                t._d.setUTCMinutes(t._d.getUTCMinutes() - t._tzm),
              t._nextDay && (t._a[3] = 24),
              t._w &&
                void 0 !== t._w.d &&
                t._w.d !== o &&
                (b(t).weekdayMismatch = !0);
          }
        }
        function we(t) {
          if (t._f !== r.ISO_8601)
            if (t._f !== r.RFC_2822) {
              (t._a = []), (b(t).empty = !0);
              var e,
                n,
                i,
                o,
                a,
                s,
                l,
                c = "" + t._i,
                d = c.length,
                u = 0;
              for (
                l = (i = I(t._f, t._locale).match(L) || []).length, e = 0;
                e < l;
                e++
              )
                (o = i[e]),
                  (n = (c.match(ct(o, t)) || [])[0]) &&
                    ((a = c.substr(0, c.indexOf(n))).length > 0 &&
                      b(t).unusedInput.push(a),
                    (c = c.slice(c.indexOf(n) + n.length)),
                    (u += n.length)),
                  j[o]
                    ? (n ? (b(t).empty = !1) : b(t).unusedTokens.push(o),
                      mt(o, n, t))
                    : t._strict && !n && b(t).unusedTokens.push(o);
              (b(t).charsLeftOver = d - u),
                c.length > 0 && b(t).unusedInput.push(c),
                t._a[3] <= 12 &&
                  !0 === b(t).bigHour &&
                  t._a[3] > 0 &&
                  (b(t).bigHour = void 0),
                (b(t).parsedDateParts = t._a.slice(0)),
                (b(t).meridiem = t._meridiem),
                (t._a[3] = (function (t, e, n) {
                  var i;
                  return null == n
                    ? e
                    : null != t.meridiemHour
                    ? t.meridiemHour(e, n)
                    : null != t.isPM
                    ? ((i = t.isPM(n)) && e < 12 && (e += 12),
                      i || 12 !== e || (e = 0),
                      e)
                    : e;
                })(t._locale, t._a[3], t._meridiem)),
                null !== (s = b(t).era) &&
                  (t._a[0] = t._locale.erasConvertYear(s, t._a[0])),
                Oe(t),
                ce(t);
            } else ye(t);
          else ve(t);
        }
        function Ae(t) {
          var e = t._i,
            n = t._f;
          return (
            (t._locale = t._locale || le(t._l)),
            null === e || (void 0 === n && "" === e)
              ? g({ nullInput: !0 })
              : ("string" == typeof e && (t._i = e = t._locale.preparse(e)),
                O(e)
                  ? new M(ce(e))
                  : (u(e)
                      ? (t._d = e)
                      : o(n)
                      ? (function (t) {
                          var e,
                            n,
                            i,
                            r,
                            o,
                            a,
                            s = !1,
                            l = t._f.length;
                          if (0 === l)
                            return (
                              (b(t).invalidFormat = !0),
                              void (t._d = new Date(NaN))
                            );
                          for (r = 0; r < l; r++)
                            (o = 0),
                              (a = !1),
                              (e = y({}, t)),
                              null != t._useUTC && (e._useUTC = t._useUTC),
                              (e._f = t._f[r]),
                              we(e),
                              m(e) && (a = !0),
                              (o += b(e).charsLeftOver),
                              (o += 10 * b(e).unusedTokens.length),
                              (b(e).score = o),
                              s
                                ? o < i && ((i = o), (n = e))
                                : (null == i || o < i || a) &&
                                  ((i = o), (n = e), a && (s = !0));
                          h(t, n || e);
                        })(t)
                      : n
                      ? we(t)
                      : (function (t) {
                          var e = t._i;
                          c(e)
                            ? (t._d = new Date(r.now()))
                            : u(e)
                            ? (t._d = new Date(e.valueOf()))
                            : "string" == typeof e
                            ? (function (t) {
                                var e = be.exec(t._i);
                                null === e
                                  ? (ve(t),
                                    !1 === t._isValid &&
                                      (delete t._isValid,
                                      ye(t),
                                      !1 === t._isValid &&
                                        (delete t._isValid,
                                        t._strict
                                          ? (t._isValid = !1)
                                          : r.createFromInputFallback(t))))
                                  : (t._d = new Date(+e[1]));
                              })(t)
                            : o(e)
                            ? ((t._a = p(e.slice(0), function (t) {
                                return parseInt(t, 10);
                              })),
                              Oe(t))
                            : a(e)
                            ? (function (t) {
                                if (!t._d) {
                                  var e = B(t._i),
                                    n = void 0 === e.day ? e.date : e.day;
                                  (t._a = p(
                                    [
                                      e.year,
                                      e.month,
                                      n,
                                      e.hour,
                                      e.minute,
                                      e.second,
                                      e.millisecond,
                                    ],
                                    function (t) {
                                      return t && parseInt(t, 10);
                                    }
                                  )),
                                    Oe(t);
                                }
                              })(t)
                            : d(e)
                            ? (t._d = new Date(e))
                            : r.createFromInputFallback(t);
                        })(t),
                    m(t) || (t._d = null),
                    t))
          );
        }
        function xe(t, e, n, i, r) {
          var s,
            c = {};
          return (
            (!0 !== e && !1 !== e) || ((i = e), (e = void 0)),
            (!0 !== n && !1 !== n) || ((i = n), (n = void 0)),
            ((a(t) && l(t)) || (o(t) && 0 === t.length)) && (t = void 0),
            (c._isAMomentObject = !0),
            (c._useUTC = c._isUTC = r),
            (c._l = n),
            (c._i = t),
            (c._f = e),
            (c._strict = i),
            (s = new M(ce(Ae(c))))._nextDay &&
              (s.add(1, "d"), (s._nextDay = void 0)),
            s
          );
        }
        function ze(t, e, n, i) {
          return xe(t, e, n, i, !1);
        }
        (r.createFromInputFallback = A(
          "value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",
          function (t) {
            t._d = new Date(t._i + (t._useUTC ? " UTC" : ""));
          }
        )),
          (r.ISO_8601 = function () {}),
          (r.RFC_2822 = function () {});
        var Ce = A(
            "moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
            function () {
              var t = ze.apply(null, arguments);
              return this.isValid() && t.isValid()
                ? t < this
                  ? this
                  : t
                : g();
            }
          ),
          ke = A(
            "moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
            function () {
              var t = ze.apply(null, arguments);
              return this.isValid() && t.isValid()
                ? t > this
                  ? this
                  : t
                : g();
            }
          );
        function Se(t, e) {
          var n, i;
          if ((1 === e.length && o(e[0]) && (e = e[0]), !e.length)) return ze();
          for (n = e[0], i = 1; i < e.length; ++i)
            (e[i].isValid() && !e[i][t](n)) || (n = e[i]);
          return n;
        }
        var Te = [
          "year",
          "quarter",
          "month",
          "week",
          "day",
          "hour",
          "minute",
          "second",
          "millisecond",
        ];
        function De(t) {
          var e = B(t),
            n = e.year || 0,
            i = e.quarter || 0,
            r = e.month || 0,
            o = e.week || e.isoWeek || 0,
            a = e.day || 0,
            l = e.hour || 0,
            c = e.minute || 0,
            d = e.second || 0,
            u = e.millisecond || 0;
          (this._isValid = (function (t) {
            var e,
              n,
              i = !1,
              r = Te.length;
            for (e in t)
              if (
                s(t, e) &&
                (-1 === _t.call(Te, e) || (null != t[e] && isNaN(t[e])))
              )
                return !1;
            for (n = 0; n < r; ++n)
              if (t[Te[n]]) {
                if (i) return !1;
                parseFloat(t[Te[n]]) !== pt(t[Te[n]]) && (i = !0);
              }
            return !0;
          })(e)),
            (this._milliseconds = +u + 1e3 * d + 6e4 * c + 1e3 * l * 60 * 60),
            (this._days = +a + 7 * o),
            (this._months = +r + 3 * i + 12 * n),
            (this._data = {}),
            (this._locale = le()),
            this._bubble();
        }
        function Le(t) {
          return t instanceof De;
        }
        function qe(t) {
          return t < 0 ? -1 * Math.round(-1 * t) : Math.round(t);
        }
        function Ee(t, e) {
          P(t, 0, 0, function () {
            var t = this.utcOffset(),
              n = "+";
            return (
              t < 0 && ((t = -t), (n = "-")),
              n + D(~~(t / 60), 2) + e + D(~~t % 60, 2)
            );
          });
        }
        Ee("Z", ":"),
          Ee("ZZ", ""),
          lt("Z", rt),
          lt("ZZ", rt),
          ft(["Z", "ZZ"], function (t, e, n) {
            (n._useUTC = !0), (n._tzm = Pe(rt, t));
          });
        var je = /([\+\-]|\d\d)/gi;
        function Pe(t, e) {
          var n,
            i,
            r = (e || "").match(t);
          return null === r
            ? null
            : 0 ===
              (i =
                60 *
                  (n = ((r[r.length - 1] || []) + "").match(je) || [
                    "-",
                    0,
                    0,
                  ])[1] +
                pt(n[2]))
            ? 0
            : "+" === n[0]
            ? i
            : -i;
        }
        function Re(t, e) {
          var n, i;
          return e._isUTC
            ? ((n = e.clone()),
              (i =
                (O(t) || u(t) ? t.valueOf() : ze(t).valueOf()) - n.valueOf()),
              n._d.setTime(n._d.valueOf() + i),
              r.updateOffset(n, !1),
              n)
            : ze(t).local();
        }
        function Ie(t) {
          return -Math.round(t._d.getTimezoneOffset());
        }
        function We() {
          return !!this.isValid() && this._isUTC && 0 === this._offset;
        }
        r.updateOffset = function () {};
        var Ne = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,
          Be =
            /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
        function Fe(t, e) {
          var n,
            i,
            r,
            o,
            a,
            l,
            c = t,
            u = null;
          return (
            Le(t)
              ? (c = { ms: t._milliseconds, d: t._days, M: t._months })
              : d(t) || !isNaN(+t)
              ? ((c = {}), e ? (c[e] = +t) : (c.milliseconds = +t))
              : (u = Ne.exec(t))
              ? ((n = "-" === u[1] ? -1 : 1),
                (c = {
                  y: 0,
                  d: pt(u[2]) * n,
                  h: pt(u[3]) * n,
                  m: pt(u[4]) * n,
                  s: pt(u[5]) * n,
                  ms: pt(qe(1e3 * u[6])) * n,
                }))
              : (u = Be.exec(t))
              ? ((n = "-" === u[1] ? -1 : 1),
                (c = {
                  y: $e(u[2], n),
                  M: $e(u[3], n),
                  w: $e(u[4], n),
                  d: $e(u[5], n),
                  h: $e(u[6], n),
                  m: $e(u[7], n),
                  s: $e(u[8], n),
                }))
              : null == c
              ? (c = {})
              : "object" == typeof c &&
                ("from" in c || "to" in c) &&
                ((o = ze(c.from)),
                (a = ze(c.to)),
                (r =
                  o.isValid() && a.isValid()
                    ? ((a = Re(a, o)),
                      o.isBefore(a)
                        ? (l = He(o, a))
                        : (((l = He(a, o)).milliseconds = -l.milliseconds),
                          (l.months = -l.months)),
                      l)
                    : { milliseconds: 0, months: 0 }),
                ((c = {}).ms = r.milliseconds),
                (c.M = r.months)),
            (i = new De(c)),
            Le(t) && s(t, "_locale") && (i._locale = t._locale),
            Le(t) && s(t, "_isValid") && (i._isValid = t._isValid),
            i
          );
        }
        function $e(t, e) {
          var n = t && parseFloat(t.replace(",", "."));
          return (isNaN(n) ? 0 : n) * e;
        }
        function He(t, e) {
          var n = {};
          return (
            (n.months = e.month() - t.month() + 12 * (e.year() - t.year())),
            t.clone().add(n.months, "M").isAfter(e) && --n.months,
            (n.milliseconds = +e - +t.clone().add(n.months, "M")),
            n
          );
        }
        function Ye(t, e) {
          return function (n, i) {
            var r;
            return (
              null === i ||
                isNaN(+i) ||
                (C(
                  e,
                  "moment()." +
                    e +
                    "(period, number) is deprecated. Please use moment()." +
                    e +
                    "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."
                ),
                (r = n),
                (n = i),
                (i = r)),
              Ue(this, Fe(n, i), t),
              this
            );
          };
        }
        function Ue(t, e, n, i) {
          var o = e._milliseconds,
            a = qe(e._days),
            s = qe(e._months);
          t.isValid() &&
            ((i = null == i || i),
            s && Dt(t, Ot(t, "Month") + s * n),
            a && wt(t, "Date", Ot(t, "Date") + a * n),
            o && t._d.setTime(t._d.valueOf() + o * n),
            i && r.updateOffset(t, a || s));
        }
        (Fe.fn = De.prototype),
          (Fe.invalid = function () {
            return Fe(NaN);
          });
        var Xe = Ye(1, "add"),
          Ve = Ye(-1, "subtract");
        function Ge(t) {
          return "string" == typeof t || t instanceof String;
        }
        function Ke(t) {
          return (
            O(t) ||
            u(t) ||
            Ge(t) ||
            d(t) ||
            (function (t) {
              var e = o(t),
                n = !1;
              return (
                e &&
                  (n =
                    0 ===
                    t.filter(function (e) {
                      return !d(e) && Ge(t);
                    }).length),
                e && n
              );
            })(t) ||
            (function (t) {
              var e,
                n = a(t) && !l(t),
                i = !1,
                r = [
                  "years",
                  "year",
                  "y",
                  "months",
                  "month",
                  "M",
                  "days",
                  "day",
                  "d",
                  "dates",
                  "date",
                  "D",
                  "hours",
                  "hour",
                  "h",
                  "minutes",
                  "minute",
                  "m",
                  "seconds",
                  "second",
                  "s",
                  "milliseconds",
                  "millisecond",
                  "ms",
                ],
                o = r.length;
              for (e = 0; e < o; e += 1) i = i || s(t, r[e]);
              return n && i;
            })(t) ||
            null == t
          );
        }
        function Ze(t) {
          var e,
            n = a(t) && !l(t),
            i = !1,
            r = [
              "sameDay",
              "nextDay",
              "lastDay",
              "nextWeek",
              "lastWeek",
              "sameElse",
            ];
          for (e = 0; e < r.length; e += 1) i = i || s(t, r[e]);
          return n && i;
        }
        function Je(t, e) {
          if (t.date() < e.date()) return -Je(e, t);
          var n = 12 * (e.year() - t.year()) + (e.month() - t.month()),
            i = t.clone().add(n, "months");
          return (
            -(
              n +
              (e - i < 0
                ? (e - i) / (i - t.clone().add(n - 1, "months"))
                : (e - i) / (t.clone().add(n + 1, "months") - i))
            ) || 0
          );
        }
        function Qe(t) {
          var e;
          return void 0 === t
            ? this._locale._abbr
            : (null != (e = le(t)) && (this._locale = e), this);
        }
        (r.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ"),
          (r.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]");
        var tn = A(
          "moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
          function (t) {
            return void 0 === t ? this.localeData() : this.locale(t);
          }
        );
        function en() {
          return this._locale;
        }
        function nn(t, e) {
          return ((t % e) + e) % e;
        }
        function rn(t, e, n) {
          return t < 100 && t >= 0
            ? new Date(t + 400, e, n) - 126227808e5
            : new Date(t, e, n).valueOf();
        }
        function on(t, e, n) {
          return t < 100 && t >= 0
            ? Date.UTC(t + 400, e, n) - 126227808e5
            : Date.UTC(t, e, n);
        }
        function an(t, e) {
          return e.erasAbbrRegex(t);
        }
        function sn() {
          var t,
            e,
            n,
            i,
            r,
            o = [],
            a = [],
            s = [],
            l = [],
            c = this.eras();
          for (t = 0, e = c.length; t < e; ++t)
            (n = dt(c[t].name)),
              (i = dt(c[t].abbr)),
              (r = dt(c[t].narrow)),
              a.push(n),
              o.push(i),
              s.push(r),
              l.push(n),
              l.push(i),
              l.push(r);
          (this._erasRegex = new RegExp("^(" + l.join("|") + ")", "i")),
            (this._erasNameRegex = new RegExp("^(" + a.join("|") + ")", "i")),
            (this._erasAbbrRegex = new RegExp("^(" + o.join("|") + ")", "i")),
            (this._erasNarrowRegex = new RegExp("^(" + s.join("|") + ")", "i"));
        }
        function ln(t, e) {
          P(0, [t, t.length], 0, e);
        }
        function cn(t, e, n, i, r) {
          var o;
          return null == t
            ? It(this, i, r).year
            : (e > (o = Wt(t, i, r)) && (e = o), dn.call(this, t, e, n, i, r));
        }
        function dn(t, e, n, i, r) {
          var o = Rt(t, e, n, i, r),
            a = jt(o.year, 0, o.dayOfYear);
          return (
            this.year(a.getUTCFullYear()),
            this.month(a.getUTCMonth()),
            this.date(a.getUTCDate()),
            this
          );
        }
        P("N", 0, 0, "eraAbbr"),
          P("NN", 0, 0, "eraAbbr"),
          P("NNN", 0, 0, "eraAbbr"),
          P("NNNN", 0, 0, "eraName"),
          P("NNNNN", 0, 0, "eraNarrow"),
          P("y", ["y", 1], "yo", "eraYear"),
          P("y", ["yy", 2], 0, "eraYear"),
          P("y", ["yyy", 3], 0, "eraYear"),
          P("y", ["yyyy", 4], 0, "eraYear"),
          lt("N", an),
          lt("NN", an),
          lt("NNN", an),
          lt("NNNN", function (t, e) {
            return e.erasNameRegex(t);
          }),
          lt("NNNNN", function (t, e) {
            return e.erasNarrowRegex(t);
          }),
          ft(["N", "NN", "NNN", "NNNN", "NNNNN"], function (t, e, n, i) {
            var r = n._locale.erasParse(t, i, n._strict);
            r ? (b(n).era = r) : (b(n).invalidEra = t);
          }),
          lt("y", et),
          lt("yy", et),
          lt("yyy", et),
          lt("yyyy", et),
          lt("yo", function (t, e) {
            return e._eraYearOrdinalRegex || et;
          }),
          ft(["y", "yy", "yyy", "yyyy"], 0),
          ft(["yo"], function (t, e, n, i) {
            var r;
            n._locale._eraYearOrdinalRegex &&
              (r = t.match(n._locale._eraYearOrdinalRegex)),
              n._locale.eraYearOrdinalParse
                ? (e[0] = n._locale.eraYearOrdinalParse(t, r))
                : (e[0] = parseInt(t, 10));
          }),
          P(0, ["gg", 2], 0, function () {
            return this.weekYear() % 100;
          }),
          P(0, ["GG", 2], 0, function () {
            return this.isoWeekYear() % 100;
          }),
          ln("gggg", "weekYear"),
          ln("ggggg", "weekYear"),
          ln("GGGG", "isoWeekYear"),
          ln("GGGGG", "isoWeekYear"),
          lt("G", nt),
          lt("g", nt),
          lt("GG", G, Y),
          lt("gg", G, Y),
          lt("GGGG", Q, X),
          lt("gggg", Q, X),
          lt("GGGGG", tt, V),
          lt("ggggg", tt, V),
          bt(["gggg", "ggggg", "GGGG", "GGGGG"], function (t, e, n, i) {
            e[i.substr(0, 2)] = pt(t);
          }),
          bt(["gg", "GG"], function (t, e, n, i) {
            e[i] = r.parseTwoDigitYear(t);
          }),
          P("Q", 0, "Qo", "quarter"),
          lt("Q", H),
          ft("Q", function (t, e) {
            e[1] = 3 * (pt(t) - 1);
          }),
          P("D", ["DD", 2], "Do", "date"),
          lt("D", G, at),
          lt("DD", G, Y),
          lt("Do", function (t, e) {
            return t
              ? e._dayOfMonthOrdinalParse || e._ordinalParse
              : e._dayOfMonthOrdinalParseLenient;
          }),
          ft(["D", "DD"], 2),
          ft("Do", function (t, e) {
            e[2] = pt(t.match(G)[0]);
          });
        var un = Mt("Date", !0);
        P("DDD", ["DDDD", 3], "DDDo", "dayOfYear"),
          lt("DDD", J),
          lt("DDDD", U),
          ft(["DDD", "DDDD"], function (t, e, n) {
            n._dayOfYear = pt(t);
          }),
          P("m", ["mm", 2], 0, "minute"),
          lt("m", G, st),
          lt("mm", G, Y),
          ft(["m", "mm"], 4);
        var pn = Mt("Minutes", !1);
        P("s", ["ss", 2], 0, "second"),
          lt("s", G, st),
          lt("ss", G, Y),
          ft(["s", "ss"], 5);
        var hn,
          fn,
          bn = Mt("Seconds", !1);
        for (
          P("S", 0, 0, function () {
            return ~~(this.millisecond() / 100);
          }),
            P(0, ["SS", 2], 0, function () {
              return ~~(this.millisecond() / 10);
            }),
            P(0, ["SSS", 3], 0, "millisecond"),
            P(0, ["SSSS", 4], 0, function () {
              return 10 * this.millisecond();
            }),
            P(0, ["SSSSS", 5], 0, function () {
              return 100 * this.millisecond();
            }),
            P(0, ["SSSSSS", 6], 0, function () {
              return 1e3 * this.millisecond();
            }),
            P(0, ["SSSSSSS", 7], 0, function () {
              return 1e4 * this.millisecond();
            }),
            P(0, ["SSSSSSSS", 8], 0, function () {
              return 1e5 * this.millisecond();
            }),
            P(0, ["SSSSSSSSS", 9], 0, function () {
              return 1e6 * this.millisecond();
            }),
            lt("S", J, H),
            lt("SS", J, Y),
            lt("SSS", J, U),
            hn = "SSSS";
          hn.length <= 9;
          hn += "S"
        )
          lt(hn, et);
        function mn(t, e) {
          e[6] = pt(1e3 * ("0." + t));
        }
        for (hn = "S"; hn.length <= 9; hn += "S") ft(hn, mn);
        (fn = Mt("Milliseconds", !1)),
          P("z", 0, 0, "zoneAbbr"),
          P("zz", 0, 0, "zoneName");
        var gn = M.prototype;
        function vn(t) {
          return t;
        }
        (gn.add = Xe),
          (gn.calendar = function (t, e) {
            1 === arguments.length &&
              (arguments[0]
                ? Ke(arguments[0])
                  ? ((t = arguments[0]), (e = void 0))
                  : Ze(arguments[0]) && ((e = arguments[0]), (t = void 0))
                : ((t = void 0), (e = void 0)));
            var n = t || ze(),
              i = Re(n, this).startOf("day"),
              o = r.calendarFormat(this, i) || "sameElse",
              a = e && (k(e[o]) ? e[o].call(this, n) : e[o]);
            return this.format(a || this.localeData().calendar(o, this, ze(n)));
          }),
          (gn.clone = function () {
            return new M(this);
          }),
          (gn.diff = function (t, e, n) {
            var i, r, o;
            if (!this.isValid()) return NaN;
            if (!(i = Re(t, this)).isValid()) return NaN;
            switch (
              ((r = 6e4 * (i.utcOffset() - this.utcOffset())), (e = N(e)))
            ) {
              case "year":
                o = Je(this, i) / 12;
                break;
              case "month":
                o = Je(this, i);
                break;
              case "quarter":
                o = Je(this, i) / 3;
                break;
              case "second":
                o = (this - i) / 1e3;
                break;
              case "minute":
                o = (this - i) / 6e4;
                break;
              case "hour":
                o = (this - i) / 36e5;
                break;
              case "day":
                o = (this - i - r) / 864e5;
                break;
              case "week":
                o = (this - i - r) / 6048e5;
                break;
              default:
                o = this - i;
            }
            return n ? o : ut(o);
          }),
          (gn.endOf = function (t) {
            var e, n;
            if (void 0 === (t = N(t)) || "millisecond" === t || !this.isValid())
              return this;
            switch (((n = this._isUTC ? on : rn), t)) {
              case "year":
                e = n(this.year() + 1, 0, 1) - 1;
                break;
              case "quarter":
                e =
                  n(this.year(), this.month() - (this.month() % 3) + 3, 1) - 1;
                break;
              case "month":
                e = n(this.year(), this.month() + 1, 1) - 1;
                break;
              case "week":
                e =
                  n(
                    this.year(),
                    this.month(),
                    this.date() - this.weekday() + 7
                  ) - 1;
                break;
              case "isoWeek":
                e =
                  n(
                    this.year(),
                    this.month(),
                    this.date() - (this.isoWeekday() - 1) + 7
                  ) - 1;
                break;
              case "day":
              case "date":
                e = n(this.year(), this.month(), this.date() + 1) - 1;
                break;
              case "hour":
                (e = this._d.valueOf()),
                  (e +=
                    36e5 -
                    nn(e + (this._isUTC ? 0 : 6e4 * this.utcOffset()), 36e5) -
                    1);
                break;
              case "minute":
                (e = this._d.valueOf()), (e += 6e4 - nn(e, 6e4) - 1);
                break;
              case "second":
                (e = this._d.valueOf()), (e += 1e3 - nn(e, 1e3) - 1);
            }
            return this._d.setTime(e), r.updateOffset(this, !0), this;
          }),
          (gn.format = function (t) {
            t || (t = this.isUtc() ? r.defaultFormatUtc : r.defaultFormat);
            var e = R(this, t);
            return this.localeData().postformat(e);
          }),
          (gn.from = function (t, e) {
            return this.isValid() && ((O(t) && t.isValid()) || ze(t).isValid())
              ? Fe({ to: this, from: t }).locale(this.locale()).humanize(!e)
              : this.localeData().invalidDate();
          }),
          (gn.fromNow = function (t) {
            return this.from(ze(), t);
          }),
          (gn.to = function (t, e) {
            return this.isValid() && ((O(t) && t.isValid()) || ze(t).isValid())
              ? Fe({ from: this, to: t }).locale(this.locale()).humanize(!e)
              : this.localeData().invalidDate();
          }),
          (gn.toNow = function (t) {
            return this.to(ze(), t);
          }),
          (gn.get = function (t) {
            return k(this[(t = N(t))]) ? this[t]() : this;
          }),
          (gn.invalidAt = function () {
            return b(this).overflow;
          }),
          (gn.isAfter = function (t, e) {
            var n = O(t) ? t : ze(t);
            return (
              !(!this.isValid() || !n.isValid()) &&
              ("millisecond" === (e = N(e) || "millisecond")
                ? this.valueOf() > n.valueOf()
                : n.valueOf() < this.clone().startOf(e).valueOf())
            );
          }),
          (gn.isBefore = function (t, e) {
            var n = O(t) ? t : ze(t);
            return (
              !(!this.isValid() || !n.isValid()) &&
              ("millisecond" === (e = N(e) || "millisecond")
                ? this.valueOf() < n.valueOf()
                : this.clone().endOf(e).valueOf() < n.valueOf())
            );
          }),
          (gn.isBetween = function (t, e, n, i) {
            var r = O(t) ? t : ze(t),
              o = O(e) ? e : ze(e);
            return (
              !!(this.isValid() && r.isValid() && o.isValid()) &&
              ("(" === (i = i || "()")[0]
                ? this.isAfter(r, n)
                : !this.isBefore(r, n)) &&
              (")" === i[1] ? this.isBefore(o, n) : !this.isAfter(o, n))
            );
          }),
          (gn.isSame = function (t, e) {
            var n,
              i = O(t) ? t : ze(t);
            return (
              !(!this.isValid() || !i.isValid()) &&
              ("millisecond" === (e = N(e) || "millisecond")
                ? this.valueOf() === i.valueOf()
                : ((n = i.valueOf()),
                  this.clone().startOf(e).valueOf() <= n &&
                    n <= this.clone().endOf(e).valueOf()))
            );
          }),
          (gn.isSameOrAfter = function (t, e) {
            return this.isSame(t, e) || this.isAfter(t, e);
          }),
          (gn.isSameOrBefore = function (t, e) {
            return this.isSame(t, e) || this.isBefore(t, e);
          }),
          (gn.isValid = function () {
            return m(this);
          }),
          (gn.lang = tn),
          (gn.locale = Qe),
          (gn.localeData = en),
          (gn.max = ke),
          (gn.min = Ce),
          (gn.parsingFlags = function () {
            return h({}, b(this));
          }),
          (gn.set = function (t, e) {
            if ("object" == typeof t) {
              var n,
                i = (function (t) {
                  var e,
                    n = [];
                  for (e in t) s(t, e) && n.push({ unit: e, priority: $[e] });
                  return (
                    n.sort(function (t, e) {
                      return t.priority - e.priority;
                    }),
                    n
                  );
                })((t = B(t))),
                r = i.length;
              for (n = 0; n < r; n++) this[i[n].unit](t[i[n].unit]);
            } else if (k(this[(t = N(t))])) return this[t](e);
            return this;
          }),
          (gn.startOf = function (t) {
            var e, n;
            if (void 0 === (t = N(t)) || "millisecond" === t || !this.isValid())
              return this;
            switch (((n = this._isUTC ? on : rn), t)) {
              case "year":
                e = n(this.year(), 0, 1);
                break;
              case "quarter":
                e = n(this.year(), this.month() - (this.month() % 3), 1);
                break;
              case "month":
                e = n(this.year(), this.month(), 1);
                break;
              case "week":
                e = n(this.year(), this.month(), this.date() - this.weekday());
                break;
              case "isoWeek":
                e = n(
                  this.year(),
                  this.month(),
                  this.date() - (this.isoWeekday() - 1)
                );
                break;
              case "day":
              case "date":
                e = n(this.year(), this.month(), this.date());
                break;
              case "hour":
                (e = this._d.valueOf()),
                  (e -= nn(
                    e + (this._isUTC ? 0 : 6e4 * this.utcOffset()),
                    36e5
                  ));
                break;
              case "minute":
                (e = this._d.valueOf()), (e -= nn(e, 6e4));
                break;
              case "second":
                (e = this._d.valueOf()), (e -= nn(e, 1e3));
            }
            return this._d.setTime(e), r.updateOffset(this, !0), this;
          }),
          (gn.subtract = Ve),
          (gn.toArray = function () {
            var t = this;
            return [
              t.year(),
              t.month(),
              t.date(),
              t.hour(),
              t.minute(),
              t.second(),
              t.millisecond(),
            ];
          }),
          (gn.toObject = function () {
            var t = this;
            return {
              years: t.year(),
              months: t.month(),
              date: t.date(),
              hours: t.hours(),
              minutes: t.minutes(),
              seconds: t.seconds(),
              milliseconds: t.milliseconds(),
            };
          }),
          (gn.toDate = function () {
            return new Date(this.valueOf());
          }),
          (gn.toISOString = function (t) {
            if (!this.isValid()) return null;
            var e = !0 !== t,
              n = e ? this.clone().utc() : this;
            return n.year() < 0 || n.year() > 9999
              ? R(
                  n,
                  e
                    ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]"
                    : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"
                )
              : k(Date.prototype.toISOString)
              ? e
                ? this.toDate().toISOString()
                : new Date(this.valueOf() + 60 * this.utcOffset() * 1e3)
                    .toISOString()
                    .replace("Z", R(n, "Z"))
              : R(
                  n,
                  e
                    ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]"
                    : "YYYY-MM-DD[T]HH:mm:ss.SSSZ"
                );
          }),
          (gn.inspect = function () {
            if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
            var t,
              e,
              n,
              i = "moment",
              r = "";
            return (
              this.isLocal() ||
                ((i =
                  0 === this.utcOffset() ? "moment.utc" : "moment.parseZone"),
                (r = "Z")),
              (t = "[" + i + '("]'),
              (e = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY"),
              (n = r + '[")]'),
              this.format(t + e + "-MM-DD[T]HH:mm:ss.SSS" + n)
            );
          }),
          "undefined" != typeof Symbol &&
            null != Symbol.for &&
            (gn[Symbol.for("nodejs.util.inspect.custom")] = function () {
              return "Moment<" + this.format() + ">";
            }),
          (gn.toJSON = function () {
            return this.isValid() ? this.toISOString() : null;
          }),
          (gn.toString = function () {
            return this.clone()
              .locale("en")
              .format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
          }),
          (gn.unix = function () {
            return Math.floor(this.valueOf() / 1e3);
          }),
          (gn.valueOf = function () {
            return this._d.valueOf() - 6e4 * (this._offset || 0);
          }),
          (gn.creationData = function () {
            return {
              input: this._i,
              format: this._f,
              locale: this._locale,
              isUTC: this._isUTC,
              strict: this._strict,
            };
          }),
          (gn.eraName = function () {
            var t,
              e,
              n,
              i = this.localeData().eras();
            for (t = 0, e = i.length; t < e; ++t) {
              if (
                ((n = this.clone().startOf("day").valueOf()),
                i[t].since <= n && n <= i[t].until)
              )
                return i[t].name;
              if (i[t].until <= n && n <= i[t].since) return i[t].name;
            }
            return "";
          }),
          (gn.eraNarrow = function () {
            var t,
              e,
              n,
              i = this.localeData().eras();
            for (t = 0, e = i.length; t < e; ++t) {
              if (
                ((n = this.clone().startOf("day").valueOf()),
                i[t].since <= n && n <= i[t].until)
              )
                return i[t].narrow;
              if (i[t].until <= n && n <= i[t].since) return i[t].narrow;
            }
            return "";
          }),
          (gn.eraAbbr = function () {
            var t,
              e,
              n,
              i = this.localeData().eras();
            for (t = 0, e = i.length; t < e; ++t) {
              if (
                ((n = this.clone().startOf("day").valueOf()),
                i[t].since <= n && n <= i[t].until)
              )
                return i[t].abbr;
              if (i[t].until <= n && n <= i[t].since) return i[t].abbr;
            }
            return "";
          }),
          (gn.eraYear = function () {
            var t,
              e,
              n,
              i,
              o = this.localeData().eras();
            for (t = 0, e = o.length; t < e; ++t)
              if (
                ((n = o[t].since <= o[t].until ? 1 : -1),
                (i = this.clone().startOf("day").valueOf()),
                (o[t].since <= i && i <= o[t].until) ||
                  (o[t].until <= i && i <= o[t].since))
              )
                return (this.year() - r(o[t].since).year()) * n + o[t].offset;
            return this.year();
          }),
          (gn.year = yt),
          (gn.isLeapYear = function () {
            return gt(this.year());
          }),
          (gn.weekYear = function (t) {
            return cn.call(
              this,
              t,
              this.week(),
              this.weekday() + this.localeData()._week.dow,
              this.localeData()._week.dow,
              this.localeData()._week.doy
            );
          }),
          (gn.isoWeekYear = function (t) {
            return cn.call(this, t, this.isoWeek(), this.isoWeekday(), 1, 4);
          }),
          (gn.quarter = gn.quarters =
            function (t) {
              return null == t
                ? Math.ceil((this.month() + 1) / 3)
                : this.month(3 * (t - 1) + (this.month() % 3));
            }),
          (gn.month = Lt),
          (gn.daysInMonth = function () {
            return At(this.year(), this.month());
          }),
          (gn.week = gn.weeks =
            function (t) {
              var e = this.localeData().week(this);
              return null == t ? e : this.add(7 * (t - e), "d");
            }),
          (gn.isoWeek = gn.isoWeeks =
            function (t) {
              var e = It(this, 1, 4).week;
              return null == t ? e : this.add(7 * (t - e), "d");
            }),
          (gn.weeksInYear = function () {
            var t = this.localeData()._week;
            return Wt(this.year(), t.dow, t.doy);
          }),
          (gn.weeksInWeekYear = function () {
            var t = this.localeData()._week;
            return Wt(this.weekYear(), t.dow, t.doy);
          }),
          (gn.isoWeeksInYear = function () {
            return Wt(this.year(), 1, 4);
          }),
          (gn.isoWeeksInISOWeekYear = function () {
            return Wt(this.isoWeekYear(), 1, 4);
          }),
          (gn.date = un),
          (gn.day = gn.days =
            function (t) {
              if (!this.isValid()) return null != t ? this : NaN;
              var e = Ot(this, "Day");
              return null != t
                ? ((t = (function (t, e) {
                    return "string" != typeof t
                      ? t
                      : isNaN(t)
                      ? "number" == typeof (t = e.weekdaysParse(t))
                        ? t
                        : null
                      : parseInt(t, 10);
                  })(t, this.localeData())),
                  this.add(t - e, "d"))
                : e;
            }),
          (gn.weekday = function (t) {
            if (!this.isValid()) return null != t ? this : NaN;
            var e = (this.day() + 7 - this.localeData()._week.dow) % 7;
            return null == t ? e : this.add(t - e, "d");
          }),
          (gn.isoWeekday = function (t) {
            if (!this.isValid()) return null != t ? this : NaN;
            if (null != t) {
              var e = (function (t, e) {
                return "string" == typeof t
                  ? e.weekdaysParse(t) % 7 || 7
                  : isNaN(t)
                  ? null
                  : t;
              })(t, this.localeData());
              return this.day(this.day() % 7 ? e : e - 7);
            }
            return this.day() || 7;
          }),
          (gn.dayOfYear = function (t) {
            var e =
              Math.round(
                (this.clone().startOf("day") - this.clone().startOf("year")) /
                  864e5
              ) + 1;
            return null == t ? e : this.add(t - e, "d");
          }),
          (gn.hour = gn.hours = Qt),
          (gn.minute = gn.minutes = pn),
          (gn.second = gn.seconds = bn),
          (gn.millisecond = gn.milliseconds = fn),
          (gn.utcOffset = function (t, e, n) {
            var i,
              o = this._offset || 0;
            if (!this.isValid()) return null != t ? this : NaN;
            if (null != t) {
              if ("string" == typeof t) {
                if (null === (t = Pe(rt, t))) return this;
              } else Math.abs(t) < 16 && !n && (t *= 60);
              return (
                !this._isUTC && e && (i = Ie(this)),
                (this._offset = t),
                (this._isUTC = !0),
                null != i && this.add(i, "m"),
                o !== t &&
                  (!e || this._changeInProgress
                    ? Ue(this, Fe(t - o, "m"), 1, !1)
                    : this._changeInProgress ||
                      ((this._changeInProgress = !0),
                      r.updateOffset(this, !0),
                      (this._changeInProgress = null))),
                this
              );
            }
            return this._isUTC ? o : Ie(this);
          }),
          (gn.utc = function (t) {
            return this.utcOffset(0, t);
          }),
          (gn.local = function (t) {
            return (
              this._isUTC &&
                (this.utcOffset(0, t),
                (this._isUTC = !1),
                t && this.subtract(Ie(this), "m")),
              this
            );
          }),
          (gn.parseZone = function () {
            if (null != this._tzm) this.utcOffset(this._tzm, !1, !0);
            else if ("string" == typeof this._i) {
              var t = Pe(it, this._i);
              null != t ? this.utcOffset(t) : this.utcOffset(0, !0);
            }
            return this;
          }),
          (gn.hasAlignedHourOffset = function (t) {
            return (
              !!this.isValid() &&
              ((t = t ? ze(t).utcOffset() : 0),
              (this.utcOffset() - t) % 60 == 0)
            );
          }),
          (gn.isDST = function () {
            return (
              this.utcOffset() > this.clone().month(0).utcOffset() ||
              this.utcOffset() > this.clone().month(5).utcOffset()
            );
          }),
          (gn.isLocal = function () {
            return !!this.isValid() && !this._isUTC;
          }),
          (gn.isUtcOffset = function () {
            return !!this.isValid() && this._isUTC;
          }),
          (gn.isUtc = We),
          (gn.isUTC = We),
          (gn.zoneAbbr = function () {
            return this._isUTC ? "UTC" : "";
          }),
          (gn.zoneName = function () {
            return this._isUTC ? "Coordinated Universal Time" : "";
          }),
          (gn.dates = A("dates accessor is deprecated. Use date instead.", un)),
          (gn.months = A(
            "months accessor is deprecated. Use month instead",
            Lt
          )),
          (gn.years = A("years accessor is deprecated. Use year instead", yt)),
          (gn.zone = A(
            "moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",
            function (t, e) {
              return null != t
                ? ("string" != typeof t && (t = -t), this.utcOffset(t, e), this)
                : -this.utcOffset();
            }
          )),
          (gn.isDSTShifted = A(
            "isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
            function () {
              if (!c(this._isDSTShifted)) return this._isDSTShifted;
              var t,
                e = {};
              return (
                y(e, this),
                (e = Ae(e))._a
                  ? ((t = e._isUTC ? f(e._a) : ze(e._a)),
                    (this._isDSTShifted =
                      this.isValid() &&
                      (function (t, e, n) {
                        var i,
                          r = Math.min(t.length, e.length),
                          o = Math.abs(t.length - e.length),
                          a = 0;
                        for (i = 0; i < r; i++) pt(t[i]) !== pt(e[i]) && a++;
                        return a + o;
                      })(e._a, t.toArray()) > 0))
                  : (this._isDSTShifted = !1),
                this._isDSTShifted
              );
            }
          ));
        var _n = T.prototype;
        function yn(t, e, n, i) {
          var r = le(),
            o = f().set(i, e);
          return r[n](o, t);
        }
        function Mn(t, e, n) {
          if ((d(t) && ((e = t), (t = void 0)), (t = t || ""), null != e))
            return yn(t, e, n, "month");
          var i,
            r = [];
          for (i = 0; i < 12; i++) r[i] = yn(t, i, n, "month");
          return r;
        }
        function On(t, e, n, i) {
          "boolean" == typeof t
            ? (d(e) && ((n = e), (e = void 0)), (e = e || ""))
            : ((n = e = t),
              (t = !1),
              d(e) && ((n = e), (e = void 0)),
              (e = e || ""));
          var r,
            o = le(),
            a = t ? o._week.dow : 0,
            s = [];
          if (null != n) return yn(e, (n + a) % 7, i, "day");
          for (r = 0; r < 7; r++) s[r] = yn(e, (r + a) % 7, i, "day");
          return s;
        }
        (_n.calendar = function (t, e, n) {
          var i = this._calendar[t] || this._calendar.sameElse;
          return k(i) ? i.call(e, n) : i;
        }),
          (_n.longDateFormat = function (t) {
            var e = this._longDateFormat[t],
              n = this._longDateFormat[t.toUpperCase()];
            return e || !n
              ? e
              : ((this._longDateFormat[t] = n
                  .match(L)
                  .map(function (t) {
                    return "MMMM" === t ||
                      "MM" === t ||
                      "DD" === t ||
                      "dddd" === t
                      ? t.slice(1)
                      : t;
                  })
                  .join("")),
                this._longDateFormat[t]);
          }),
          (_n.invalidDate = function () {
            return this._invalidDate;
          }),
          (_n.ordinal = function (t) {
            return this._ordinal.replace("%d", t);
          }),
          (_n.preparse = vn),
          (_n.postformat = vn),
          (_n.relativeTime = function (t, e, n, i) {
            var r = this._relativeTime[n];
            return k(r) ? r(t, e, n, i) : r.replace(/%d/i, t);
          }),
          (_n.pastFuture = function (t, e) {
            var n = this._relativeTime[t > 0 ? "future" : "past"];
            return k(n) ? n(e) : n.replace(/%s/i, e);
          }),
          (_n.set = function (t) {
            var e, n;
            for (n in t)
              s(t, n) && (k((e = t[n])) ? (this[n] = e) : (this["_" + n] = e));
            (this._config = t),
              (this._dayOfMonthOrdinalParseLenient = new RegExp(
                (this._dayOfMonthOrdinalParse.source ||
                  this._ordinalParse.source) +
                  "|" +
                  /\d{1,2}/.source
              ));
          }),
          (_n.eras = function (t, e) {
            var n,
              i,
              o,
              a = this._eras || le("en")._eras;
            for (n = 0, i = a.length; n < i; ++n) {
              switch (typeof a[n].since) {
                case "string":
                  (o = r(a[n].since).startOf("day")),
                    (a[n].since = o.valueOf());
              }
              switch (typeof a[n].until) {
                case "undefined":
                  a[n].until = 1 / 0;
                  break;
                case "string":
                  (o = r(a[n].until).startOf("day").valueOf()),
                    (a[n].until = o.valueOf());
              }
            }
            return a;
          }),
          (_n.erasParse = function (t, e, n) {
            var i,
              r,
              o,
              a,
              s,
              l = this.eras();
            for (t = t.toUpperCase(), i = 0, r = l.length; i < r; ++i)
              if (
                ((o = l[i].name.toUpperCase()),
                (a = l[i].abbr.toUpperCase()),
                (s = l[i].narrow.toUpperCase()),
                n)
              )
                switch (e) {
                  case "N":
                  case "NN":
                  case "NNN":
                    if (a === t) return l[i];
                    break;
                  case "NNNN":
                    if (o === t) return l[i];
                    break;
                  case "NNNNN":
                    if (s === t) return l[i];
                }
              else if ([o, a, s].indexOf(t) >= 0) return l[i];
          }),
          (_n.erasConvertYear = function (t, e) {
            var n = t.since <= t.until ? 1 : -1;
            return void 0 === e
              ? r(t.since).year()
              : r(t.since).year() + (e - t.offset) * n;
          }),
          (_n.erasAbbrRegex = function (t) {
            return (
              s(this, "_erasAbbrRegex") || sn.call(this),
              t ? this._erasAbbrRegex : this._erasRegex
            );
          }),
          (_n.erasNameRegex = function (t) {
            return (
              s(this, "_erasNameRegex") || sn.call(this),
              t ? this._erasNameRegex : this._erasRegex
            );
          }),
          (_n.erasNarrowRegex = function (t) {
            return (
              s(this, "_erasNarrowRegex") || sn.call(this),
              t ? this._erasNarrowRegex : this._erasRegex
            );
          }),
          (_n.months = function (t, e) {
            return t
              ? o(this._months)
                ? this._months[t.month()]
                : this._months[
                    (this._months.isFormat || Ct).test(e)
                      ? "format"
                      : "standalone"
                  ][t.month()]
              : o(this._months)
              ? this._months
              : this._months.standalone;
          }),
          (_n.monthsShort = function (t, e) {
            return t
              ? o(this._monthsShort)
                ? this._monthsShort[t.month()]
                : this._monthsShort[Ct.test(e) ? "format" : "standalone"][
                    t.month()
                  ]
              : o(this._monthsShort)
              ? this._monthsShort
              : this._monthsShort.standalone;
          }),
          (_n.monthsParse = function (t, e, n) {
            var i, r, o;
            if (this._monthsParseExact) return Tt.call(this, t, e, n);
            for (
              this._monthsParse ||
                ((this._monthsParse = []),
                (this._longMonthsParse = []),
                (this._shortMonthsParse = [])),
                i = 0;
              i < 12;
              i++
            ) {
              if (
                ((r = f([2e3, i])),
                n &&
                  !this._longMonthsParse[i] &&
                  ((this._longMonthsParse[i] = new RegExp(
                    "^" + this.months(r, "").replace(".", "") + "$",
                    "i"
                  )),
                  (this._shortMonthsParse[i] = new RegExp(
                    "^" + this.monthsShort(r, "").replace(".", "") + "$",
                    "i"
                  ))),
                n ||
                  this._monthsParse[i] ||
                  ((o =
                    "^" + this.months(r, "") + "|^" + this.monthsShort(r, "")),
                  (this._monthsParse[i] = new RegExp(o.replace(".", ""), "i"))),
                n && "MMMM" === e && this._longMonthsParse[i].test(t))
              )
                return i;
              if (n && "MMM" === e && this._shortMonthsParse[i].test(t))
                return i;
              if (!n && this._monthsParse[i].test(t)) return i;
            }
          }),
          (_n.monthsRegex = function (t) {
            return this._monthsParseExact
              ? (s(this, "_monthsRegex") || qt.call(this),
                t ? this._monthsStrictRegex : this._monthsRegex)
              : (s(this, "_monthsRegex") || (this._monthsRegex = St),
                this._monthsStrictRegex && t
                  ? this._monthsStrictRegex
                  : this._monthsRegex);
          }),
          (_n.monthsShortRegex = function (t) {
            return this._monthsParseExact
              ? (s(this, "_monthsRegex") || qt.call(this),
                t ? this._monthsShortStrictRegex : this._monthsShortRegex)
              : (s(this, "_monthsShortRegex") || (this._monthsShortRegex = kt),
                this._monthsShortStrictRegex && t
                  ? this._monthsShortStrictRegex
                  : this._monthsShortRegex);
          }),
          (_n.week = function (t) {
            return It(t, this._week.dow, this._week.doy).week;
          }),
          (_n.firstDayOfYear = function () {
            return this._week.doy;
          }),
          (_n.firstDayOfWeek = function () {
            return this._week.dow;
          }),
          (_n.weekdays = function (t, e) {
            var n = o(this._weekdays)
              ? this._weekdays
              : this._weekdays[
                  t && !0 !== t && this._weekdays.isFormat.test(e)
                    ? "format"
                    : "standalone"
                ];
            return !0 === t ? Nt(n, this._week.dow) : t ? n[t.day()] : n;
          }),
          (_n.weekdaysMin = function (t) {
            return !0 === t
              ? Nt(this._weekdaysMin, this._week.dow)
              : t
              ? this._weekdaysMin[t.day()]
              : this._weekdaysMin;
          }),
          (_n.weekdaysShort = function (t) {
            return !0 === t
              ? Nt(this._weekdaysShort, this._week.dow)
              : t
              ? this._weekdaysShort[t.day()]
              : this._weekdaysShort;
          }),
          (_n.weekdaysParse = function (t, e, n) {
            var i, r, o;
            if (this._weekdaysParseExact) return Xt.call(this, t, e, n);
            for (
              this._weekdaysParse ||
                ((this._weekdaysParse = []),
                (this._minWeekdaysParse = []),
                (this._shortWeekdaysParse = []),
                (this._fullWeekdaysParse = [])),
                i = 0;
              i < 7;
              i++
            ) {
              if (
                ((r = f([2e3, 1]).day(i)),
                n &&
                  !this._fullWeekdaysParse[i] &&
                  ((this._fullWeekdaysParse[i] = new RegExp(
                    "^" + this.weekdays(r, "").replace(".", "\\.?") + "$",
                    "i"
                  )),
                  (this._shortWeekdaysParse[i] = new RegExp(
                    "^" + this.weekdaysShort(r, "").replace(".", "\\.?") + "$",
                    "i"
                  )),
                  (this._minWeekdaysParse[i] = new RegExp(
                    "^" + this.weekdaysMin(r, "").replace(".", "\\.?") + "$",
                    "i"
                  ))),
                this._weekdaysParse[i] ||
                  ((o =
                    "^" +
                    this.weekdays(r, "") +
                    "|^" +
                    this.weekdaysShort(r, "") +
                    "|^" +
                    this.weekdaysMin(r, "")),
                  (this._weekdaysParse[i] = new RegExp(
                    o.replace(".", ""),
                    "i"
                  ))),
                n && "dddd" === e && this._fullWeekdaysParse[i].test(t))
              )
                return i;
              if (n && "ddd" === e && this._shortWeekdaysParse[i].test(t))
                return i;
              if (n && "dd" === e && this._minWeekdaysParse[i].test(t))
                return i;
              if (!n && this._weekdaysParse[i].test(t)) return i;
            }
          }),
          (_n.weekdaysRegex = function (t) {
            return this._weekdaysParseExact
              ? (s(this, "_weekdaysRegex") || Vt.call(this),
                t ? this._weekdaysStrictRegex : this._weekdaysRegex)
              : (s(this, "_weekdaysRegex") || (this._weekdaysRegex = Ht),
                this._weekdaysStrictRegex && t
                  ? this._weekdaysStrictRegex
                  : this._weekdaysRegex);
          }),
          (_n.weekdaysShortRegex = function (t) {
            return this._weekdaysParseExact
              ? (s(this, "_weekdaysRegex") || Vt.call(this),
                t ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
              : (s(this, "_weekdaysShortRegex") ||
                  (this._weekdaysShortRegex = Yt),
                this._weekdaysShortStrictRegex && t
                  ? this._weekdaysShortStrictRegex
                  : this._weekdaysShortRegex);
          }),
          (_n.weekdaysMinRegex = function (t) {
            return this._weekdaysParseExact
              ? (s(this, "_weekdaysRegex") || Vt.call(this),
                t ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
              : (s(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Ut),
                this._weekdaysMinStrictRegex && t
                  ? this._weekdaysMinStrictRegex
                  : this._weekdaysMinRegex);
          }),
          (_n.isPM = function (t) {
            return "p" === (t + "").toLowerCase().charAt(0);
          }),
          (_n.meridiem = function (t, e, n) {
            return t > 11 ? (n ? "pm" : "PM") : n ? "am" : "AM";
          }),
          ae("en", {
            eras: [
              {
                since: "0001-01-01",
                until: 1 / 0,
                offset: 1,
                name: "Anno Domini",
                narrow: "AD",
                abbr: "AD",
              },
              {
                since: "0000-12-31",
                until: -1 / 0,
                offset: 1,
                name: "Before Christ",
                narrow: "BC",
                abbr: "BC",
              },
            ],
            dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
            ordinal: function (t) {
              var e = t % 10;
              return (
                t +
                (1 === pt((t % 100) / 10)
                  ? "th"
                  : 1 === e
                  ? "st"
                  : 2 === e
                  ? "nd"
                  : 3 === e
                  ? "rd"
                  : "th")
              );
            },
          }),
          (r.lang = A(
            "moment.lang is deprecated. Use moment.locale instead.",
            ae
          )),
          (r.langData = A(
            "moment.langData is deprecated. Use moment.localeData instead.",
            le
          ));
        var wn = Math.abs;
        function An(t, e, n, i) {
          var r = Fe(e, n);
          return (
            (t._milliseconds += i * r._milliseconds),
            (t._days += i * r._days),
            (t._months += i * r._months),
            t._bubble()
          );
        }
        function xn(t) {
          return t < 0 ? Math.floor(t) : Math.ceil(t);
        }
        function zn(t) {
          return (4800 * t) / 146097;
        }
        function Cn(t) {
          return (146097 * t) / 4800;
        }
        function kn(t) {
          return function () {
            return this.as(t);
          };
        }
        var Sn = kn("ms"),
          Tn = kn("s"),
          Dn = kn("m"),
          Ln = kn("h"),
          qn = kn("d"),
          En = kn("w"),
          jn = kn("M"),
          Pn = kn("Q"),
          Rn = kn("y"),
          In = Sn;
        function Wn(t) {
          return function () {
            return this.isValid() ? this._data[t] : NaN;
          };
        }
        var Nn = Wn("milliseconds"),
          Bn = Wn("seconds"),
          Fn = Wn("minutes"),
          $n = Wn("hours"),
          Hn = Wn("days"),
          Yn = Wn("months"),
          Un = Wn("years"),
          Xn = Math.round,
          Vn = { ss: 44, s: 45, m: 45, h: 22, d: 26, w: null, M: 11 };
        function Gn(t, e, n, i, r) {
          return r.relativeTime(e || 1, !!n, t, i);
        }
        var Kn = Math.abs;
        function Zn(t) {
          return (t > 0) - (t < 0) || +t;
        }
        function Jn() {
          if (!this.isValid()) return this.localeData().invalidDate();
          var t,
            e,
            n,
            i,
            r,
            o,
            a,
            s,
            l = Kn(this._milliseconds) / 1e3,
            c = Kn(this._days),
            d = Kn(this._months),
            u = this.asSeconds();
          return u
            ? ((t = ut(l / 60)),
              (e = ut(t / 60)),
              (l %= 60),
              (t %= 60),
              (n = ut(d / 12)),
              (d %= 12),
              (i = l ? l.toFixed(3).replace(/\.?0+$/, "") : ""),
              (r = u < 0 ? "-" : ""),
              (o = Zn(this._months) !== Zn(u) ? "-" : ""),
              (a = Zn(this._days) !== Zn(u) ? "-" : ""),
              (s = Zn(this._milliseconds) !== Zn(u) ? "-" : ""),
              r +
                "P" +
                (n ? o + n + "Y" : "") +
                (d ? o + d + "M" : "") +
                (c ? a + c + "D" : "") +
                (e || t || l ? "T" : "") +
                (e ? s + e + "H" : "") +
                (t ? s + t + "M" : "") +
                (l ? s + i + "S" : ""))
            : "P0D";
        }
        var Qn = De.prototype;
        return (
          (Qn.isValid = function () {
            return this._isValid;
          }),
          (Qn.abs = function () {
            var t = this._data;
            return (
              (this._milliseconds = wn(this._milliseconds)),
              (this._days = wn(this._days)),
              (this._months = wn(this._months)),
              (t.milliseconds = wn(t.milliseconds)),
              (t.seconds = wn(t.seconds)),
              (t.minutes = wn(t.minutes)),
              (t.hours = wn(t.hours)),
              (t.months = wn(t.months)),
              (t.years = wn(t.years)),
              this
            );
          }),
          (Qn.add = function (t, e) {
            return An(this, t, e, 1);
          }),
          (Qn.subtract = function (t, e) {
            return An(this, t, e, -1);
          }),
          (Qn.as = function (t) {
            if (!this.isValid()) return NaN;
            var e,
              n,
              i = this._milliseconds;
            if ("month" === (t = N(t)) || "quarter" === t || "year" === t)
              switch (
                ((e = this._days + i / 864e5), (n = this._months + zn(e)), t)
              ) {
                case "month":
                  return n;
                case "quarter":
                  return n / 3;
                case "year":
                  return n / 12;
              }
            else
              switch (((e = this._days + Math.round(Cn(this._months))), t)) {
                case "week":
                  return e / 7 + i / 6048e5;
                case "day":
                  return e + i / 864e5;
                case "hour":
                  return 24 * e + i / 36e5;
                case "minute":
                  return 1440 * e + i / 6e4;
                case "second":
                  return 86400 * e + i / 1e3;
                case "millisecond":
                  return Math.floor(864e5 * e) + i;
                default:
                  throw new Error("Unknown unit " + t);
              }
          }),
          (Qn.asMilliseconds = Sn),
          (Qn.asSeconds = Tn),
          (Qn.asMinutes = Dn),
          (Qn.asHours = Ln),
          (Qn.asDays = qn),
          (Qn.asWeeks = En),
          (Qn.asMonths = jn),
          (Qn.asQuarters = Pn),
          (Qn.asYears = Rn),
          (Qn.valueOf = In),
          (Qn._bubble = function () {
            var t,
              e,
              n,
              i,
              r,
              o = this._milliseconds,
              a = this._days,
              s = this._months,
              l = this._data;
            return (
              (o >= 0 && a >= 0 && s >= 0) ||
                (o <= 0 && a <= 0 && s <= 0) ||
                ((o += 864e5 * xn(Cn(s) + a)), (a = 0), (s = 0)),
              (l.milliseconds = o % 1e3),
              (t = ut(o / 1e3)),
              (l.seconds = t % 60),
              (e = ut(t / 60)),
              (l.minutes = e % 60),
              (n = ut(e / 60)),
              (l.hours = n % 24),
              (a += ut(n / 24)),
              (s += r = ut(zn(a))),
              (a -= xn(Cn(r))),
              (i = ut(s / 12)),
              (s %= 12),
              (l.days = a),
              (l.months = s),
              (l.years = i),
              this
            );
          }),
          (Qn.clone = function () {
            return Fe(this);
          }),
          (Qn.get = function (t) {
            return (t = N(t)), this.isValid() ? this[t + "s"]() : NaN;
          }),
          (Qn.milliseconds = Nn),
          (Qn.seconds = Bn),
          (Qn.minutes = Fn),
          (Qn.hours = $n),
          (Qn.days = Hn),
          (Qn.weeks = function () {
            return ut(this.days() / 7);
          }),
          (Qn.months = Yn),
          (Qn.years = Un),
          (Qn.humanize = function (t, e) {
            if (!this.isValid()) return this.localeData().invalidDate();
            var n,
              i,
              r = !1,
              o = Vn;
            return (
              "object" == typeof t && ((e = t), (t = !1)),
              "boolean" == typeof t && (r = t),
              "object" == typeof e &&
                ((o = Object.assign({}, Vn, e)),
                null != e.s && null == e.ss && (o.ss = e.s - 1)),
              (i = (function (t, e, n, i) {
                var r = Fe(t).abs(),
                  o = Xn(r.as("s")),
                  a = Xn(r.as("m")),
                  s = Xn(r.as("h")),
                  l = Xn(r.as("d")),
                  c = Xn(r.as("M")),
                  d = Xn(r.as("w")),
                  u = Xn(r.as("y")),
                  p =
                    (o <= n.ss && ["s", o]) ||
                    (o < n.s && ["ss", o]) ||
                    (a <= 1 && ["m"]) ||
                    (a < n.m && ["mm", a]) ||
                    (s <= 1 && ["h"]) ||
                    (s < n.h && ["hh", s]) ||
                    (l <= 1 && ["d"]) ||
                    (l < n.d && ["dd", l]);
                return (
                  null != n.w &&
                    (p = p || (d <= 1 && ["w"]) || (d < n.w && ["ww", d])),
                  ((p = p ||
                    (c <= 1 && ["M"]) ||
                    (c < n.M && ["MM", c]) ||
                    (u <= 1 && ["y"]) || ["yy", u])[2] = e),
                  (p[3] = +t > 0),
                  (p[4] = i),
                  Gn.apply(null, p)
                );
              })(this, !r, o, (n = this.localeData()))),
              r && (i = n.pastFuture(+this, i)),
              n.postformat(i)
            );
          }),
          (Qn.toISOString = Jn),
          (Qn.toString = Jn),
          (Qn.toJSON = Jn),
          (Qn.locale = Qe),
          (Qn.localeData = en),
          (Qn.toIsoString = A(
            "toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",
            Jn
          )),
          (Qn.lang = tn),
          P("X", 0, 0, "unix"),
          P("x", 0, 0, "valueOf"),
          lt("x", nt),
          lt("X", /[+-]?\d+(\.\d{1,3})?/),
          ft("X", function (t, e, n) {
            n._d = new Date(1e3 * parseFloat(t));
          }),
          ft("x", function (t, e, n) {
            n._d = new Date(pt(t));
          }),
          (r.version = "2.30.1"),
          (e = ze),
          (r.fn = gn),
          (r.min = function () {
            var t = [].slice.call(arguments, 0);
            return Se("isBefore", t);
          }),
          (r.max = function () {
            var t = [].slice.call(arguments, 0);
            return Se("isAfter", t);
          }),
          (r.now = function () {
            return Date.now ? Date.now() : +new Date();
          }),
          (r.utc = f),
          (r.unix = function (t) {
            return ze(1e3 * t);
          }),
          (r.months = function (t, e) {
            return Mn(t, e, "months");
          }),
          (r.isDate = u),
          (r.locale = ae),
          (r.invalid = g),
          (r.duration = Fe),
          (r.isMoment = O),
          (r.weekdays = function (t, e, n) {
            return On(t, e, n, "weekdays");
          }),
          (r.parseZone = function () {
            return ze.apply(null, arguments).parseZone();
          }),
          (r.localeData = le),
          (r.isDuration = Le),
          (r.monthsShort = function (t, e) {
            return Mn(t, e, "monthsShort");
          }),
          (r.weekdaysMin = function (t, e, n) {
            return On(t, e, n, "weekdaysMin");
          }),
          (r.defineLocale = se),
          (r.updateLocale = function (t, e) {
            if (null != e) {
              var n,
                i,
                r = te;
              null != ee[t] && null != ee[t].parentLocale
                ? ee[t].set(S(ee[t]._config, e))
                : (null != (i = oe(t)) && (r = i._config),
                  (e = S(r, e)),
                  null == i && (e.abbr = t),
                  ((n = new T(e)).parentLocale = ee[t]),
                  (ee[t] = n)),
                ae(t);
            } else
              null != ee[t] &&
                (null != ee[t].parentLocale
                  ? ((ee[t] = ee[t].parentLocale), t === ae() && ae(t))
                  : null != ee[t] && delete ee[t]);
            return ee[t];
          }),
          (r.locales = function () {
            return x(ee);
          }),
          (r.weekdaysShort = function (t, e, n) {
            return On(t, e, n, "weekdaysShort");
          }),
          (r.normalizeUnits = N),
          (r.relativeTimeRounding = function (t) {
            return void 0 === t ? Xn : "function" == typeof t && ((Xn = t), !0);
          }),
          (r.relativeTimeThreshold = function (t, e) {
            return (
              void 0 !== Vn[t] &&
              (void 0 === e
                ? Vn[t]
                : ((Vn[t] = e), "s" === t && (Vn.ss = e - 1), !0))
            );
          }),
          (r.calendarFormat = function (t, e) {
            var n = t.diff(e, "days", !0);
            return n < -6
              ? "sameElse"
              : n < -1
              ? "lastWeek"
              : n < 0
              ? "lastDay"
              : n < 1
              ? "sameDay"
              : n < 2
              ? "nextDay"
              : n < 7
              ? "nextWeek"
              : "sameElse";
          }),
          (r.prototype = gn),
          (r.HTML5_FMT = {
            DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
            DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
            DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
            DATE: "YYYY-MM-DD",
            TIME: "HH:mm",
            TIME_SECONDS: "HH:mm:ss",
            TIME_MS: "HH:mm:ss.SSS",
            WEEK: "GGGG-[W]WW",
            MONTH: "YYYY-MM",
          }),
          r
        );
      })();
    }).call(this, n(139)(t));
  },
  function (t, e, n) {
    "use strict";
    n.d(e, "a", function () {
      return i;
    }),
      n.d(e, "b", function () {
        return r;
      }),
      n.d(e, "c", function () {
        return o;
      }),
      n.d(e, "d", function () {
        return a;
      }),
      n.d(e, "e", function () {
        return s;
      }),
      n.d(e, "f", function () {
        return l;
      }),
      n.d(e, "g", function () {
        return c;
      }),
      n.d(e, "h", function () {
        return d;
      }),
      n.d(e, "i", function () {
        return u;
      }),
      n.d(e, "j", function () {
        return p;
      }),
      n.d(e, "k", function () {
        return h;
      }),
      n.d(e, "l", function () {
        return f;
      }),
      n.d(e, "m", function () {
        return b;
      });
    var i = 8,
      r = 46,
      o = 40,
      a = 35,
      s = 13,
      l = 27,
      c = 36,
      d = 37,
      u = 34,
      p = 33,
      h = 39,
      f = 32,
      b = 38;
  },
  function (t, e, n) {
    "use strict";
    n.d(e, "b", function () {
      return o;
    }),
      n.d(e, "e", function () {
        return a;
      }),
      n.d(e, "f", function () {
        return s;
      }),
      n.d(e, "d", function () {
        return l;
      }),
      n.d(e, "j", function () {
        return c;
      }),
      n.d(e, "a", function () {
        return d;
      }),
      n.d(e, "g", function () {
        return u;
      }),
      n.d(e, "i", function () {
        return p;
      }),
      n.d(e, "h", function () {
        return h;
      }),
      n.d(e, "c", function () {
        return f;
      });
    var i = n(25),
      r = n(5),
      o = function (t) {
        return t.replace(i.p, "-$1").toLowerCase();
      },
      a = function (t) {
        return (
          (t = o(t).replace(i.F, function (t, e) {
            return e ? e.toUpperCase() : "";
          }))
            .charAt(0)
            .toUpperCase() + t.slice(1)
        );
      },
      s = function (t) {
        return t
          .replace(i.E, " ")
          .replace(i.r, function (t, e, n) {
            return e + " " + n;
          })
          .replace(i.z, function (t, e, n) {
            return e + n.toUpperCase();
          });
      },
      l = function (t) {
        return (
          (t = Object(r.n)(t) ? t.trim() : String(t)).charAt(0).toLowerCase() +
          t.slice(1)
        );
      },
      c = function (t) {
        return (
          (t = Object(r.n)(t) ? t.trim() : String(t)).charAt(0).toUpperCase() +
          t.slice(1)
        );
      },
      d = function (t) {
        return t.replace(i.v, "\\$&");
      },
      u = function (t) {
        var e =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
        return Object(r.p)(t)
          ? ""
          : Object(r.a)(t) ||
            (Object(r.k)(t) && t.toString === Object.prototype.toString)
          ? JSON.stringify(t, null, e)
          : String(t);
      },
      p = function (t) {
        return u(t).replace(i.C, "");
      },
      h = function (t) {
        return u(t).trim();
      },
      f = function (t) {
        return u(t).toLowerCase();
      };
  },
  function (t, e, n) {
    "use strict";
    n.d(e, "a", function () {
      return s;
    });
    var i = n(4),
      r = n(12),
      o = n(32),
      a = n(14),
      s = Object(i.c)({
        methods: {
          hasNormalizedSlot: function () {
            var t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : r.i,
              e =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : this.$scopedSlots,
              n =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : this.$slots;
            return Object(o.a)(t, e, n);
          },
          normalizeSlot: function () {
            var t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : r.i,
              e =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              n =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : this.$scopedSlots,
              i =
                arguments.length > 3 && void 0 !== arguments[3]
                  ? arguments[3]
                  : this.$slots,
              s = Object(o.b)(t, e, n, i);
            return s ? Object(a.b)(s) : s;
          },
        },
      });
  },
  function (t, e, n) {
    "use strict";
    n.d(e, "h", function () {
      return i;
    }),
      n.d(e, "f", function () {
        return a;
      }),
      n.d(e, "c", function () {
        return s;
      }),
      n.d(e, "i", function () {
        return l;
      }),
      n.d(e, "k", function () {
        return c;
      }),
      n.d(e, "a", function () {
        return d;
      }),
      n.d(e, "j", function () {
        return h;
      }),
      n.d(e, "d", function () {
        return f;
      }),
      n.d(e, "g", function () {
        return b;
      }),
      n.d(e, "e", function () {
        return m;
      }),
      n.d(e, "b", function () {
        return g;
      });
    var i = "undefined" != typeof window,
      r = "undefined" != typeof document,
      o = "undefined" != typeof navigator,
      a = "undefined" != typeof Promise,
      s =
        "undefined" != typeof MutationObserver ||
        "undefined" != typeof WebKitMutationObserver ||
        "undefined" != typeof MozMutationObserver,
      l = i && r && o,
      c = i ? window : {},
      d = r ? document : {},
      u = o ? navigator : {},
      p = (u.userAgent || "").toLowerCase(),
      h = p.indexOf("jsdom") > 0,
      f =
        (/msie|trident/.test(p),
        (function () {
          var t = !1;
          if (l)
            try {
              var e = {
                get passive() {
                  t = !0;
                },
              };
              c.addEventListener("test", e, e),
                c.removeEventListener("test", e, e);
            } catch (e) {
              t = !1;
            }
          return t;
        })()),
      b = l && ("ontouchstart" in d.documentElement || u.maxTouchPoints > 0),
      m = l && Boolean(c.PointerEvent || c.MSPointerEvent),
      g =
        l &&
        "IntersectionObserver" in c &&
        "IntersectionObserverEntry" in c &&
        "intersectionRatio" in c.IntersectionObserverEntry.prototype;
  },
  function (t, e, n) {
    "use strict";
    n.d(e, "b", function () {
      return a;
    }),
      n.d(e, "a", function () {
        return s;
      });
    var i = n(4),
      r = n(1),
      o = n(0),
      a = { id: Object(o.c)(r.u) },
      s = Object(i.c)({
        props: a,
        data: function () {
          return { localId_: null };
        },
        computed: {
          safeId: function () {
            var t = this.id || this.localId_;
            return function (e) {
              return t
                ? (e = String(e || "").replace(/\s+/g, "_"))
                  ? t + "_" + e
                  : t
                : null;
            };
          },
        },
        mounted: function () {
          var t = this;
          this.$nextTick(function () {
            t.localId_ = "__BVID__".concat(t[i.a]);
          });
        },
      });
  },
  function (t, e, n) {
    "use strict";
    n.d(e, "a", function () {
      return i;
    });
    var i = function (t) {
      return t;
    };
  },
  function (t, e, n) {
    "use strict";
    n.d(e, "e", function () {
      return i;
    }),
      n.d(e, "d", function () {
        return r;
      }),
      n.d(e, "a", function () {
        return o;
      }),
      n.d(e, "b", function () {
        return a;
      }),
      n.d(e, "c", function () {
        return s;
      }),
      n.d(e, "f", function () {
        return l;
      }),
      n.d(e, "g", function () {
        return c;
      });
    var i = Math.min,
      r = Math.max,
      o = Math.abs,
      a = Math.ceil,
      s = Math.floor,
      l = Math.pow,
      c = Math.round;
  },
  function (t, e, n) {
    "use strict";
    (function (t) {
      function i(t) {
        return (i =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      n.d(e, "n", function () {
        return r;
      }),
        n.d(e, "h", function () {
          return o;
        }),
        n.d(e, "a", function () {
          return a;
        }),
        n.d(e, "g", function () {
          return s;
        }),
        n.d(e, "e", function () {
          return l;
        }),
        n.d(e, "j", function () {
          return c;
        }),
        n.d(e, "i", function () {
          return d;
        }),
        n.d(e, "c", function () {
          return u;
        }),
        n.d(e, "f", function () {
          return p;
        }),
        n.d(e, "d", function () {
          return h;
        }),
        n.d(e, "o", function () {
          return f;
        }),
        n.d(e, "l", function () {
          return b;
        }),
        n.d(e, "p", function () {
          return m;
        }),
        n.d(e, "k", function () {
          return g;
        }),
        n.d(e, "b", function () {
          return v;
        }),
        n.d(e, "m", function () {
          return y;
        });
      var r = function (t) {
          return (
            0 == document.querySelectorAll("#".concat(t, " :invalid")).length
          );
        },
        o = function (t) {
          return window.moment(t.HH + ":" + t.mm, "HH:mm");
        },
        a = function (t) {
          return (
            void 0 === t || "" === t || null === t || !!t.match(/^[A-Za-z ]+$/g)
          );
        },
        s = function (t, e) {
          return (
            "range" !== e.price_type ||
            (0 === parseInt(e.minPrice) && 0 === parseInt(t)) ||
            parseInt(e.minPrice) < parseInt(t)
          );
        },
        l = function (t, e) {
          return parseFloat(e.total_amount) >= parseFloat(t);
        },
        c = function (t) {
          return "" === t || null === t || !!t.match(/^[A-Za-z0-9-() ]+$/g);
        },
        d = function (t) {
          return (
            "" === t ||
            null == t ||
            ("number" == typeof t && (t = t.toString()),
            !!t.match(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\.\/0-9]*$/g))
          );
        },
        u = function (t) {
          return (
            "" === t ||
            null === t ||
            !!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/.test(
              t
            )
          );
        },
        p = function (t) {
          return function (e, n) {
            if ("" === e.HH && "" === e.mm) return !0;
            var i = window.moment(e.HH + ":" + e.mm, "HH:mm"),
              r = window.moment(n[t].HH + ":" + n[t].mm, "HH:mm");
            return i.isAfter(r);
          };
        },
        h = function (t) {
          return function (e, n) {
            if ("" === e.HH && "" === e.mm) return !0;
            var i = window.moment(e.HH + ":" + e.mm, "HH:mm"),
              r = window.moment(n[t].HH + ":" + n[t].mm, "HH:mm");
            return i.isBefore(r);
          };
        },
        f = function (t, e, n) {
          var i = t[e],
            r = t[n];
          if (
            !i ||
            !r ||
            "" === i.HH ||
            "" === r.HH ||
            "" === i.mm ||
            "" === r.mm
          )
            return "invalid";
          var o,
            a,
            s = window.moment(i.HH + ":" + i.mm, "HH:mm"),
            l = window.moment(r.HH + ":" + r.mm, "HH:mm");
          return l.isSameOrBefore(s)
            ? null === (o = window.__kivicarelang) ||
              void 0 === o ||
              null === (o = o.doctor_session) ||
              void 0 === o
              ? void 0
              : o.start_time_smaller_then_first_session_end_time
            : s.isSameOrAfter(l)
            ? null === (a = window.__kivicarelang) ||
              void 0 === a ||
              null === (a = a.doctor_session) ||
              void 0 === a
              ? void 0
              : a.end_time_greater_then_session_start_time
            : "";
        },
        b = function (t) {
          var e,
            n = t.s_one_start_time,
            i = t.s_one_end_time,
            r = t.s_two_start_time,
            o = t.s_two_end_time,
            a = !(
              (n && "" !== n.HH && "" !== n.mm) ||
              (i && "" !== i.HH && "" !== i.mm)
            ),
            s = !(
              (r && "" !== r.HH && "" !== r.mm) ||
              (o && "" !== o.HH && "" !== o.mm)
            );
          return (
            !a ||
            !s ||
            (displayErrorMessage(
              null === (e = window.__kivicarelang) ||
                void 0 === e ||
                null === (e = e.doctor_session) ||
                void 0 === e
                ? void 0
                : e.atleast_one_session_required
            ),
            !1)
          );
        },
        m = function (t, e) {
          var n = !1,
            i = !1,
            r = !1;
          if ("" !== t.s_one_start_time.HH && "" !== t.s_one_end_time.HH) {
            var a = o(t.s_one_start_time),
              s = o(t.s_one_end_time),
              l = o(e.s_one_start_time),
              c = o(e.s_one_end_time);
            if (a.isBefore(l) && s.isBefore(l)) i = !0;
            else if (a.isAfter(l) && a.isAfter(c))
              if ("" === e.s_two_start_time.HH && "" === e.s_two_end_time.HH)
                i = !0;
              else {
                var d = o(e.s_two_start_time),
                  u = o(e.s_two_end_time);
                ((a.isAfter(d) && a.isAfter(u)) ||
                  (a.isBefore(d) && a.isBefore(u))) &&
                  (i = !0);
              }
          }
          if (i)
            if (
              ("" === t.s_two_start_time.HH && "" === t.s_two_end_time.HH) ||
              ("" === e.s_two_start_time.HH && "" === e.s_two_end_time.HH)
            )
              r = !0;
            else {
              var p = o(t.s_two_start_time),
                h = o(t.s_two_end_time),
                f = o(e.s_one_start_time),
                b = o(e.s_one_end_time);
              if (p.isBefore(f) && h.isBefore(f)) r = !0;
              else if (p.isAfter(f) && p.isAfter(b)) {
                var m = o(e.s_two_start_time),
                  g = o(e.s_two_end_time);
                ((p.isAfter(m) && p.isAfter(g)) ||
                  (p.isBefore(m) && p.isBefore(g))) &&
                  (r = !0);
              }
            }
          return i && r && (n = !0), n;
        },
        g = function (t, e) {
          e = e || 36;
          for (var n, i = ""; i.length < t; )
            i += (n = Math.random().toString(e).slice(2)).slice(
              0,
              Math.min(n.length, t - i.length)
            );
          return i.toUpperCase();
        },
        v = function (t) {
          var e =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : "Text";
          navigator.clipboard && window.isSecureContext
            ? navigator.clipboard.writeText(t).then(
                function () {
                  var t;
                  displayMessage(
                    ""
                      .concat(e, " ")
                      .concat(
                        null === (t = window.__kivicarelang) ||
                          void 0 === t ||
                          null === (t = t.common) ||
                          void 0 === t
                          ? void 0
                          : t.copied
                      ),
                    3e3
                  );
                },
                function (t) {
                  var n;
                  displayErrorMessage(
                    ""
                      .concat(
                        null === (n = window.__kivicarelang) ||
                          void 0 === n ||
                          null === (n = n.common) ||
                          void 0 === n
                          ? void 0
                          : n.failed_to_copy,
                        " "
                      )
                      .concat(e),
                    3e3
                  );
                }
              )
            : _(t, e);
        },
        _ = function (t, e) {
          var n = document.createElement("textarea");
          (n.value = t),
            (n.style.top = "0"),
            (n.style.left = "0"),
            (n.style.position = "fixed"),
            document.body.appendChild(n),
            n.focus(),
            n.select();
          try {
            var i;
            document.execCommand("copy"),
              displayMessage(
                ""
                  .concat(e, " ")
                  .concat(
                    null === (i = window.__kivicarelang) ||
                      void 0 === i ||
                      null === (i = i.common) ||
                      void 0 === i
                      ? void 0
                      : i.copied
                  ),
                3e3
              );
          } catch (t) {
            var r;
            displayErrorMessage(
              ""
                .concat(
                  null === (r = window.__kivicarelang) ||
                    void 0 === r ||
                    null === (r = r.common) ||
                    void 0 === r
                    ? void 0
                    : r.failed_to_copy,
                  " "
                )
                .concat(e),
              3e3
            );
          }
          document.body.removeChild(n);
        },
        y = function (t, e) {
          if ("object" !== i(t) || !Array.isArray(t)) return !0;
          var n = !0;
          return (
            "object" === i(t) &&
              t.forEach(function (t) {
                if (
                  "checkbox" == t.type &&
                  "1" == t.isRequired &&
                  "1" == t.status &&
                  0 === e["custom_field_" + t.id].length
                )
                  return (n = t.label);
              }),
            n
          );
        };
    }).call(this, n(30));
  },
  function (t, e, n) {
    "use strict";
    n.d(e, "a", function () {
      return i;
    }),
      n.d(e, "d", function () {
        return r;
      }),
      n.d(e, "h", function () {
        return o;
      }),
      n.d(e, "k", function () {
        return a;
      }),
      n.d(e, "l", function () {
        return s;
      }),
      n.d(e, "m", function () {
        return l;
      }),
      n.d(e, "o", function () {
        return c;
      }),
      n.d(e, "p", function () {
        return d;
      }),
      n.d(e, "r", function () {
        return u;
      }),
      n.d(e, "s", function () {
        return p;
      }),
      n.d(e, "t", function () {
        return h;
      }),
      n.d(e, "v", function () {
        return f;
      }),
      n.d(e, "w", function () {
        return b;
      }),
      n.d(e, "x", function () {
        return m;
      }),
      n.d(e, "y", function () {
        return g;
      }),
      n.d(e, "z", function () {
        return v;
      }),
      n.d(e, "C", function () {
        return _;
      }),
      n.d(e, "D", function () {
        return y;
      }),
      n.d(e, "E", function () {
        return M;
      }),
      n.d(e, "F", function () {
        return O;
      }),
      n.d(e, "f", function () {
        return w;
      }),
      n.d(e, "g", function () {
        return A;
      }),
      n.d(e, "B", function () {
        return x;
      }),
      n.d(e, "n", function () {
        return z;
      }),
      n.d(e, "i", function () {
        return C;
      }),
      n.d(e, "j", function () {
        return k;
      }),
      n.d(e, "u", function () {
        return S;
      }),
      n.d(e, "b", function () {
        return T;
      }),
      n.d(e, "c", function () {
        return D;
      }),
      n.d(e, "e", function () {
        return L;
      }),
      n.d(e, "q", function () {
        return q;
      }),
      n.d(e, "A", function () {
        return E;
      });
    var i = /\[(\d+)]/g,
      r = /^(BV?)/,
      o = /^\d+$/,
      a = /^\..+/,
      s = /^#/,
      l = /^#[A-Za-z]+[\w\-:.]*$/,
      c = /(<([^>]+)>)/gi,
      d = /\B([A-Z])/g,
      u = /([a-z])([A-Z])/g,
      p = /^[0-9]*\.?[0-9]+$/,
      h = /\+/g,
      f = /[-/\\^$*+?.()|[\]{}]/g,
      b = /[\s\uFEFF\xA0]+/g,
      m = /\s+/,
      g = /\/\*$/,
      v = /(\s|^)(\w)/g,
      _ = /^\s+/,
      y = /\s+$/,
      M = /_/g,
      O = /-(\w)/g,
      w = /^\d+-\d\d?-\d\d?(?:\s|T|$)/,
      A = /-|\s|T/,
      x = /^([0-1]?[0-9]|2[0-3]):[0-5]?[0-9](:[0-5]?[0-9])?$/,
      z = /^.*(#[^#]+)$/,
      C = /%2C/g,
      k = /[!'()*]/g,
      S = /^(\?|#|&)/,
      T = /^\d+(\.\d*)?[/:]\d+(\.\d*)?$/,
      D = /[/:]/,
      L = /^col-/,
      q = /^BIcon/,
      E = /-u-.+/;
  },
  function (t, e, n) {
    "use strict";
    n.d(e, "a", function () {
      return a;
    });
    var i = n(7),
      r = n(5),
      o = function (t, e) {
        if (t.length !== e.length) return !1;
        for (var n = !0, i = 0; n && i < t.length; i++) n = a(t[i], e[i]);
        return n;
      },
      a = function t(e, n) {
        if (e === n) return !0;
        var a = Object(r.c)(e),
          s = Object(r.c)(n);
        if (a || s) return !(!a || !s) && e.getTime() === n.getTime();
        if (((a = Object(r.a)(e)), (s = Object(r.a)(n)), a || s))
          return !(!a || !s) && o(e, n);
        if (((a = Object(r.j)(e)), (s = Object(r.j)(n)), a || s)) {
          if (!a || !s) return !1;
          if (Object(i.h)(e).length !== Object(i.h)(n).length) return !1;
          for (var l in e) {
            var c = Object(i.g)(e, l),
              d = Object(i.g)(n, l);
            if ((c && !d) || (!c && d) || !t(e[l], n[l])) return !1;
          }
        }
        return String(e) === String(n);
      };
  },
  function (t, e, n) {
    "use strict";
    n.d(e, "a", function () {
      return l;
    });
    var i = n(4),
      r = n(6),
      o = n(1),
      a = n(0);
    function s(t, e, n) {
      return (
        e in t
          ? Object.defineProperty(t, e, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (t[e] = n),
        t
      );
    }
    var l = function (t) {
      var e =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = e.type,
        l = void 0 === n ? o.a : n,
        c = e.defaultValue,
        d = void 0 === c ? void 0 : c,
        u = e.validator,
        p = void 0 === u ? void 0 : u,
        h = e.event,
        f = void 0 === h ? r.z : h,
        b = s({}, t, Object(a.c)(l, d, p)),
        m = Object(i.c)({ model: { prop: t, event: f }, props: b });
      return { mixin: m, props: b, prop: t, event: f };
    };
  },
  function (t, e, n) {
    "use strict";
    n.d(e, "a", function () {
      return c;
    });
    var i = n(111),
      r = n(4);
    function o(t, e) {
      var n = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(t);
        e &&
          (i = i.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          n.push.apply(n, i);
      }
      return n;
    }
    function a(t, e, n) {
      return (
        e in t
          ? Object.defineProperty(t, e, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (t[e] = n),
        t
      );
    }
    var s = Object(i.a)("$attrs", "bvAttrs"),
      l = Object(r.c)({
        computed: {
          bvAttrs: function () {
            var t = (function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2
                  ? o(Object(n), !0).forEach(function (e) {
                      a(t, e, n[e]);
                    })
                  : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(
                      t,
                      Object.getOwnPropertyDescriptors(n)
                    )
                  : o(Object(n)).forEach(function (e) {
                      Object.defineProperty(
                        t,
                        e,
                        Object.getOwnPropertyDescriptor(n, e)
                      );
                    });
              }
              return t;
            })({}, this.$attrs);
            return (
              Object.keys(t).forEach(function (e) {
                void 0 === t[e] && delete t[e];
              }),
              t
            );
          },
        },
      }),
      c = r.d ? l : s;
  },
  function (t, e, n) {
    "use strict";
    n.d(e, "a", function () {
      return h;
    }),
      n.d(e, "b", function () {
        return f;
      }),
      n.d(e, "c", function () {
        return b;
      }),
      n.d(e, "d", function () {
        return m;
      }),
      n.d(e, "e", function () {
        return g;
      }),
      n.d(e, "f", function () {
        return v;
      }),
      n.d(e, "g", function () {
        return _;
      }),
      n.d(e, "h", function () {
        return y;
      }),
      n.d(e, "i", function () {
        return M;
      }),
      n.d(e, "j", function () {
        return O;
      }),
      n.d(e, "k", function () {
        return w;
      }),
      n.d(e, "l", function () {
        return A;
      }),
      n.d(e, "m", function () {
        return x;
      }),
      n.d(e, "n", function () {
        return z;
      }),
      n.d(e, "o", function () {
        return C;
      }),
      n.d(e, "p", function () {
        return k;
      }),
      n.d(e, "q", function () {
        return S;
      }),
      n.d(e, "r", function () {
        return T;
      });
    var i = n(4),
      r = n(92),
      o = n(7),
      a = n(18),
      s = n(93);
    function l(t, e) {
      var n = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(t);
        e &&
          (i = i.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          n.push.apply(n, i);
      }
      return n;
    }
    function c(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? l(Object(n), !0).forEach(function (e) {
              d(t, e, n[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
          : l(Object(n)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(n, e)
              );
            });
      }
      return t;
    }
    function d(t, e, n) {
      return (
        e in t
          ? Object.defineProperty(t, e, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (t[e] = n),
        t
      );
    }
    var u = Object(o.j)(s.b, ["content"]),
      p = function (t, e) {
        var n = Object(a.b)(t),
          o = "BIcon".concat(Object(a.e)(t)),
          l = "bi-".concat(n),
          d = n.replace(/-/g, " "),
          p = Object(a.h)(e || "");
        return Object(i.c)({
          name: o,
          functional: !0,
          props: u,
          render: function (t, e) {
            var n = e.data,
              i = e.props;
            return t(
              s.a,
              Object(r.a)(
                { props: { title: d }, attrs: { "aria-label": d } },
                n,
                { staticClass: l, props: c(c({}, i), {}, { content: p }) }
              )
            );
          },
        });
      },
      h = p("Blank", ""),
      f = p(
        "Calendar",
        '<path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>'
      ),
      b = p(
        "CalendarFill",
        '<path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5h16V4H0V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5z"/>'
      ),
      m = p(
        "ChevronBarLeft",
        '<path fill-rule="evenodd" d="M11.854 3.646a.5.5 0 0 1 0 .708L8.207 8l3.647 3.646a.5.5 0 0 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 0 1 .708 0zM4.5 1a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 1 0v-13a.5.5 0 0 0-.5-.5z"/>'
      ),
      g = p(
        "ChevronDoubleLeft",
        '<path fill-rule="evenodd" d="M8.354 1.646a.5.5 0 0 1 0 .708L2.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/><path fill-rule="evenodd" d="M12.354 1.646a.5.5 0 0 1 0 .708L6.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>'
      ),
      v = p(
        "ChevronDown",
        '<path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>'
      ),
      _ = p(
        "ChevronLeft",
        '<path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>'
      ),
      y = p(
        "ChevronUp",
        '<path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/>'
      ),
      M = p("CircleFill", '<circle cx="8" cy="8" r="8"/>'),
      O = p(
        "Clock",
        '<path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/><path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>'
      ),
      w = p(
        "ClockFill",
        '<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>'
      ),
      A = p(
        "Dash",
        '<path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>'
      ),
      x = p(
        "PersonFill",
        '<path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>'
      ),
      z = p(
        "Plus",
        '<path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>'
      ),
      C = p(
        "Star",
        '<path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>'
      ),
      k = p(
        "StarFill",
        '<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>'
      ),
      S = p(
        "StarHalf",
        '<path d="M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z"/>'
      ),
      T = p(
        "X",
        '<path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>'
      );
  },
  function (t, e, n) {
    var i;
    !(function (e, n) {
      "use strict";
      "object" == typeof t.exports
        ? (t.exports = e.document
            ? n(e, !0)
            : function (t) {
                if (!t.document)
                  throw new Error("jQuery requires a window with a document");
                return n(t);
              })
        : n(e);
    })("undefined" != typeof window ? window : this, function (n, r) {
      "use strict";
      var o = [],
        a = Object.getPrototypeOf,
        s = o.slice,
        l = o.flat
          ? function (t) {
              return o.flat.call(t);
            }
          : function (t) {
              return o.concat.apply([], t);
            },
        c = o.push,
        d = o.indexOf,
        u = {},
        p = u.toString,
        h = u.hasOwnProperty,
        f = h.toString,
        b = f.call(Object),
        m = {},
        g = function (t) {
          return (
            "function" == typeof t &&
            "number" != typeof t.nodeType &&
            "function" != typeof t.item
          );
        },
        v = function (t) {
          return null != t && t === t.window;
        },
        _ = n.document,
        y = { type: !0, src: !0, nonce: !0, noModule: !0 };
      function M(t, e, n) {
        var i,
          r,
          o = (n = n || _).createElement("script");
        if (((o.text = t), e))
          for (i in y)
            (r = e[i] || (e.getAttribute && e.getAttribute(i))) &&
              o.setAttribute(i, r);
        n.head.appendChild(o).parentNode.removeChild(o);
      }
      function O(t) {
        return null == t
          ? t + ""
          : "object" == typeof t || "function" == typeof t
          ? u[p.call(t)] || "object"
          : typeof t;
      }
      var w = /HTML$/i,
        A = function (t, e) {
          return new A.fn.init(t, e);
        };
      function x(t) {
        var e = !!t && "length" in t && t.length,
          n = O(t);
        return (
          !g(t) &&
          !v(t) &&
          ("array" === n ||
            0 === e ||
            ("number" == typeof e && e > 0 && e - 1 in t))
        );
      }
      function z(t, e) {
        return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase();
      }
      (A.fn = A.prototype =
        {
          jquery: "3.7.1",
          constructor: A,
          length: 0,
          toArray: function () {
            return s.call(this);
          },
          get: function (t) {
            return null == t
              ? s.call(this)
              : t < 0
              ? this[t + this.length]
              : this[t];
          },
          pushStack: function (t) {
            var e = A.merge(this.constructor(), t);
            return (e.prevObject = this), e;
          },
          each: function (t) {
            return A.each(this, t);
          },
          map: function (t) {
            return this.pushStack(
              A.map(this, function (e, n) {
                return t.call(e, n, e);
              })
            );
          },
          slice: function () {
            return this.pushStack(s.apply(this, arguments));
          },
          first: function () {
            return this.eq(0);
          },
          last: function () {
            return this.eq(-1);
          },
          even: function () {
            return this.pushStack(
              A.grep(this, function (t, e) {
                return (e + 1) % 2;
              })
            );
          },
          odd: function () {
            return this.pushStack(
              A.grep(this, function (t, e) {
                return e % 2;
              })
            );
          },
          eq: function (t) {
            var e = this.length,
              n = +t + (t < 0 ? e : 0);
            return this.pushStack(n >= 0 && n < e ? [this[n]] : []);
          },
          end: function () {
            return this.prevObject || this.constructor();
          },
          push: c,
          sort: o.sort,
          splice: o.splice,
        }),
        (A.extend = A.fn.extend =
          function () {
            var t,
              e,
              n,
              i,
              r,
              o,
              a = arguments[0] || {},
              s = 1,
              l = arguments.length,
              c = !1;
            for (
              "boolean" == typeof a && ((c = a), (a = arguments[s] || {}), s++),
                "object" == typeof a || g(a) || (a = {}),
                s === l && ((a = this), s--);
              s < l;
              s++
            )
              if (null != (t = arguments[s]))
                for (e in t)
                  (i = t[e]),
                    "__proto__" !== e &&
                      a !== i &&
                      (c && i && (A.isPlainObject(i) || (r = Array.isArray(i)))
                        ? ((n = a[e]),
                          (o =
                            r && !Array.isArray(n)
                              ? []
                              : r || A.isPlainObject(n)
                              ? n
                              : {}),
                          (r = !1),
                          (a[e] = A.extend(c, o, i)))
                        : void 0 !== i && (a[e] = i));
            return a;
          }),
        A.extend({
          expando: "jQuery" + ("3.7.1" + Math.random()).replace(/\D/g, ""),
          isReady: !0,
          error: function (t) {
            throw new Error(t);
          },
          noop: function () {},
          isPlainObject: function (t) {
            var e, n;
            return !(
              !t ||
              "[object Object]" !== p.call(t) ||
              ((e = a(t)) &&
                ("function" !=
                  typeof (n = h.call(e, "constructor") && e.constructor) ||
                  f.call(n) !== b))
            );
          },
          isEmptyObject: function (t) {
            var e;
            for (e in t) return !1;
            return !0;
          },
          globalEval: function (t, e, n) {
            M(t, { nonce: e && e.nonce }, n);
          },
          each: function (t, e) {
            var n,
              i = 0;
            if (x(t))
              for (n = t.length; i < n && !1 !== e.call(t[i], i, t[i]); i++);
            else for (i in t) if (!1 === e.call(t[i], i, t[i])) break;
            return t;
          },
          text: function (t) {
            var e,
              n = "",
              i = 0,
              r = t.nodeType;
            if (!r) for (; (e = t[i++]); ) n += A.text(e);
            return 1 === r || 11 === r
              ? t.textContent
              : 9 === r
              ? t.documentElement.textContent
              : 3 === r || 4 === r
              ? t.nodeValue
              : n;
          },
          makeArray: function (t, e) {
            var n = e || [];
            return (
              null != t &&
                (x(Object(t))
                  ? A.merge(n, "string" == typeof t ? [t] : t)
                  : c.call(n, t)),
              n
            );
          },
          inArray: function (t, e, n) {
            return null == e ? -1 : d.call(e, t, n);
          },
          isXMLDoc: function (t) {
            var e = t && t.namespaceURI,
              n = t && (t.ownerDocument || t).documentElement;
            return !w.test(e || (n && n.nodeName) || "HTML");
          },
          merge: function (t, e) {
            for (var n = +e.length, i = 0, r = t.length; i < n; i++)
              t[r++] = e[i];
            return (t.length = r), t;
          },
          grep: function (t, e, n) {
            for (var i = [], r = 0, o = t.length, a = !n; r < o; r++)
              !e(t[r], r) !== a && i.push(t[r]);
            return i;
          },
          map: function (t, e, n) {
            var i,
              r,
              o = 0,
              a = [];
            if (x(t))
              for (i = t.length; o < i; o++)
                null != (r = e(t[o], o, n)) && a.push(r);
            else for (o in t) null != (r = e(t[o], o, n)) && a.push(r);
            return l(a);
          },
          guid: 1,
          support: m,
        }),
        "function" == typeof Symbol &&
          (A.fn[Symbol.iterator] = o[Symbol.iterator]),
        A.each(
          "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
            " "
          ),
          function (t, e) {
            u["[object " + e + "]"] = e.toLowerCase();
          }
        );
      var C = o.pop,
        k = o.sort,
        S = o.splice,
        T = "[\\x20\\t\\r\\n\\f]",
        D = new RegExp("^" + T + "+|((?:^|[^\\\\])(?:\\\\.)*)" + T + "+$", "g");
      A.contains = function (t, e) {
        var n = e && e.parentNode;
        return (
          t === n ||
          !(
            !n ||
            1 !== n.nodeType ||
            !(t.contains
              ? t.contains(n)
              : t.compareDocumentPosition && 16 & t.compareDocumentPosition(n))
          )
        );
      };
      var L = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;
      function q(t, e) {
        return e
          ? "\0" === t
            ? "�"
            : t.slice(0, -1) +
              "\\" +
              t.charCodeAt(t.length - 1).toString(16) +
              " "
          : "\\" + t;
      }
      A.escapeSelector = function (t) {
        return (t + "").replace(L, q);
      };
      var E = _,
        j = c;
      !(function () {
        var t,
          e,
          i,
          r,
          a,
          l,
          c,
          u,
          p,
          f,
          b = j,
          g = A.expando,
          v = 0,
          _ = 0,
          y = tt(),
          M = tt(),
          O = tt(),
          w = tt(),
          x = function (t, e) {
            return t === e && (a = !0), 0;
          },
          L =
            "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
          q =
            "(?:\\\\[\\da-fA-F]{1,6}" +
            T +
            "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
          P =
            "\\[" +
            T +
            "*(" +
            q +
            ")(?:" +
            T +
            "*([*^$|!~]?=)" +
            T +
            "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
            q +
            "))|)" +
            T +
            "*\\]",
          R =
            ":(" +
            q +
            ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
            P +
            ")*)|.*)\\)|)",
          I = new RegExp(T + "+", "g"),
          W = new RegExp("^" + T + "*," + T + "*"),
          N = new RegExp("^" + T + "*([>+~]|" + T + ")" + T + "*"),
          B = new RegExp(T + "|>"),
          F = new RegExp(R),
          $ = new RegExp("^" + q + "$"),
          H = {
            ID: new RegExp("^#(" + q + ")"),
            CLASS: new RegExp("^\\.(" + q + ")"),
            TAG: new RegExp("^(" + q + "|[*])"),
            ATTR: new RegExp("^" + P),
            PSEUDO: new RegExp("^" + R),
            CHILD: new RegExp(
              "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
                T +
                "*(even|odd|(([+-]|)(\\d*)n|)" +
                T +
                "*(?:([+-]|)" +
                T +
                "*(\\d+)|))" +
                T +
                "*\\)|)",
              "i"
            ),
            bool: new RegExp("^(?:" + L + ")$", "i"),
            needsContext: new RegExp(
              "^" +
                T +
                "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
                T +
                "*((?:-\\d)?\\d*)" +
                T +
                "*\\)|)(?=[^-]|$)",
              "i"
            ),
          },
          Y = /^(?:input|select|textarea|button)$/i,
          U = /^h\d$/i,
          X = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
          V = /[+~]/,
          G = new RegExp(
            "\\\\[\\da-fA-F]{1,6}" + T + "?|\\\\([^\\r\\n\\f])",
            "g"
          ),
          K = function (t, e) {
            var n = "0x" + t.slice(1) - 65536;
            return (
              e ||
              (n < 0
                ? String.fromCharCode(n + 65536)
                : String.fromCharCode((n >> 10) | 55296, (1023 & n) | 56320))
            );
          },
          Z = function () {
            lt();
          },
          J = pt(
            function (t) {
              return !0 === t.disabled && z(t, "fieldset");
            },
            { dir: "parentNode", next: "legend" }
          );
        try {
          b.apply((o = s.call(E.childNodes)), E.childNodes),
            o[E.childNodes.length].nodeType;
        } catch (t) {
          b = {
            apply: function (t, e) {
              j.apply(t, s.call(e));
            },
            call: function (t) {
              j.apply(t, s.call(arguments, 1));
            },
          };
        }
        function Q(t, e, n, i) {
          var r,
            o,
            a,
            s,
            c,
            d,
            h,
            f = e && e.ownerDocument,
            v = e ? e.nodeType : 9;
          if (
            ((n = n || []),
            "string" != typeof t || !t || (1 !== v && 9 !== v && 11 !== v))
          )
            return n;
          if (!i && (lt(e), (e = e || l), u)) {
            if (11 !== v && (c = X.exec(t)))
              if ((r = c[1])) {
                if (9 === v) {
                  if (!(a = e.getElementById(r))) return n;
                  if (a.id === r) return b.call(n, a), n;
                } else if (
                  f &&
                  (a = f.getElementById(r)) &&
                  Q.contains(e, a) &&
                  a.id === r
                )
                  return b.call(n, a), n;
              } else {
                if (c[2]) return b.apply(n, e.getElementsByTagName(t)), n;
                if ((r = c[3]) && e.getElementsByClassName)
                  return b.apply(n, e.getElementsByClassName(r)), n;
              }
            if (!(w[t + " "] || (p && p.test(t)))) {
              if (((h = t), (f = e), 1 === v && (B.test(t) || N.test(t)))) {
                for (
                  ((f = (V.test(t) && st(e.parentNode)) || e) == e &&
                    m.scope) ||
                    ((s = e.getAttribute("id"))
                      ? (s = A.escapeSelector(s))
                      : e.setAttribute("id", (s = g))),
                    o = (d = dt(t)).length;
                  o--;

                )
                  d[o] = (s ? "#" + s : ":scope") + " " + ut(d[o]);
                h = d.join(",");
              }
              try {
                return b.apply(n, f.querySelectorAll(h)), n;
              } catch (e) {
                w(t, !0);
              } finally {
                s === g && e.removeAttribute("id");
              }
            }
          }
          return vt(t.replace(D, "$1"), e, n, i);
        }
        function tt() {
          var t = [];
          return function n(i, r) {
            return (
              t.push(i + " ") > e.cacheLength && delete n[t.shift()],
              (n[i + " "] = r)
            );
          };
        }
        function et(t) {
          return (t[g] = !0), t;
        }
        function nt(t) {
          var e = l.createElement("fieldset");
          try {
            return !!t(e);
          } catch (t) {
            return !1;
          } finally {
            e.parentNode && e.parentNode.removeChild(e), (e = null);
          }
        }
        function it(t) {
          return function (e) {
            return z(e, "input") && e.type === t;
          };
        }
        function rt(t) {
          return function (e) {
            return (z(e, "input") || z(e, "button")) && e.type === t;
          };
        }
        function ot(t) {
          return function (e) {
            return "form" in e
              ? e.parentNode && !1 === e.disabled
                ? "label" in e
                  ? "label" in e.parentNode
                    ? e.parentNode.disabled === t
                    : e.disabled === t
                  : e.isDisabled === t || (e.isDisabled !== !t && J(e) === t)
                : e.disabled === t
              : "label" in e && e.disabled === t;
          };
        }
        function at(t) {
          return et(function (e) {
            return (
              (e = +e),
              et(function (n, i) {
                for (var r, o = t([], n.length, e), a = o.length; a--; )
                  n[(r = o[a])] && (n[r] = !(i[r] = n[r]));
              })
            );
          });
        }
        function st(t) {
          return t && void 0 !== t.getElementsByTagName && t;
        }
        function lt(t) {
          var n,
            i = t ? t.ownerDocument || t : E;
          return i != l && 9 === i.nodeType && i.documentElement
            ? ((c = (l = i).documentElement),
              (u = !A.isXMLDoc(l)),
              (f = c.matches || c.webkitMatchesSelector || c.msMatchesSelector),
              c.msMatchesSelector &&
                E != l &&
                (n = l.defaultView) &&
                n.top !== n &&
                n.addEventListener("unload", Z),
              (m.getById = nt(function (t) {
                return (
                  (c.appendChild(t).id = A.expando),
                  !l.getElementsByName || !l.getElementsByName(A.expando).length
                );
              })),
              (m.disconnectedMatch = nt(function (t) {
                return f.call(t, "*");
              })),
              (m.scope = nt(function () {
                return l.querySelectorAll(":scope");
              })),
              (m.cssHas = nt(function () {
                try {
                  return l.querySelector(":has(*,:jqfake)"), !1;
                } catch (t) {
                  return !0;
                }
              })),
              m.getById
                ? ((e.filter.ID = function (t) {
                    var e = t.replace(G, K);
                    return function (t) {
                      return t.getAttribute("id") === e;
                    };
                  }),
                  (e.find.ID = function (t, e) {
                    if (void 0 !== e.getElementById && u) {
                      var n = e.getElementById(t);
                      return n ? [n] : [];
                    }
                  }))
                : ((e.filter.ID = function (t) {
                    var e = t.replace(G, K);
                    return function (t) {
                      var n =
                        void 0 !== t.getAttributeNode &&
                        t.getAttributeNode("id");
                      return n && n.value === e;
                    };
                  }),
                  (e.find.ID = function (t, e) {
                    if (void 0 !== e.getElementById && u) {
                      var n,
                        i,
                        r,
                        o = e.getElementById(t);
                      if (o) {
                        if ((n = o.getAttributeNode("id")) && n.value === t)
                          return [o];
                        for (r = e.getElementsByName(t), i = 0; (o = r[i++]); )
                          if ((n = o.getAttributeNode("id")) && n.value === t)
                            return [o];
                      }
                      return [];
                    }
                  })),
              (e.find.TAG = function (t, e) {
                return void 0 !== e.getElementsByTagName
                  ? e.getElementsByTagName(t)
                  : e.querySelectorAll(t);
              }),
              (e.find.CLASS = function (t, e) {
                if (void 0 !== e.getElementsByClassName && u)
                  return e.getElementsByClassName(t);
              }),
              (p = []),
              nt(function (t) {
                var e;
                (c.appendChild(t).innerHTML =
                  "<a id='" +
                  g +
                  "' href='' disabled='disabled'></a><select id='" +
                  g +
                  "-\r\\' disabled='disabled'><option selected=''></option></select>"),
                  t.querySelectorAll("[selected]").length ||
                    p.push("\\[" + T + "*(?:value|" + L + ")"),
                  t.querySelectorAll("[id~=" + g + "-]").length || p.push("~="),
                  t.querySelectorAll("a#" + g + "+*").length ||
                    p.push(".#.+[+~]"),
                  t.querySelectorAll(":checked").length || p.push(":checked"),
                  (e = l.createElement("input")).setAttribute("type", "hidden"),
                  t.appendChild(e).setAttribute("name", "D"),
                  (c.appendChild(t).disabled = !0),
                  2 !== t.querySelectorAll(":disabled").length &&
                    p.push(":enabled", ":disabled"),
                  (e = l.createElement("input")).setAttribute("name", ""),
                  t.appendChild(e),
                  t.querySelectorAll("[name='']").length ||
                    p.push("\\[" + T + "*name" + T + "*=" + T + "*(?:''|\"\")");
              }),
              m.cssHas || p.push(":has"),
              (p = p.length && new RegExp(p.join("|"))),
              (x = function (t, e) {
                if (t === e) return (a = !0), 0;
                var n = !t.compareDocumentPosition - !e.compareDocumentPosition;
                return (
                  n ||
                  (1 &
                    (n =
                      (t.ownerDocument || t) == (e.ownerDocument || e)
                        ? t.compareDocumentPosition(e)
                        : 1) ||
                  (!m.sortDetached && e.compareDocumentPosition(t) === n)
                    ? t === l || (t.ownerDocument == E && Q.contains(E, t))
                      ? -1
                      : e === l || (e.ownerDocument == E && Q.contains(E, e))
                      ? 1
                      : r
                      ? d.call(r, t) - d.call(r, e)
                      : 0
                    : 4 & n
                    ? -1
                    : 1)
                );
              }),
              l)
            : l;
        }
        for (t in ((Q.matches = function (t, e) {
          return Q(t, null, null, e);
        }),
        (Q.matchesSelector = function (t, e) {
          if ((lt(t), u && !w[e + " "] && (!p || !p.test(e))))
            try {
              var n = f.call(t, e);
              if (
                n ||
                m.disconnectedMatch ||
                (t.document && 11 !== t.document.nodeType)
              )
                return n;
            } catch (t) {
              w(e, !0);
            }
          return Q(e, l, null, [t]).length > 0;
        }),
        (Q.contains = function (t, e) {
          return (t.ownerDocument || t) != l && lt(t), A.contains(t, e);
        }),
        (Q.attr = function (t, n) {
          (t.ownerDocument || t) != l && lt(t);
          var i = e.attrHandle[n.toLowerCase()],
            r =
              i && h.call(e.attrHandle, n.toLowerCase()) ? i(t, n, !u) : void 0;
          return void 0 !== r ? r : t.getAttribute(n);
        }),
        (Q.error = function (t) {
          throw new Error("Syntax error, unrecognized expression: " + t);
        }),
        (A.uniqueSort = function (t) {
          var e,
            n = [],
            i = 0,
            o = 0;
          if (
            ((a = !m.sortStable),
            (r = !m.sortStable && s.call(t, 0)),
            k.call(t, x),
            a)
          ) {
            for (; (e = t[o++]); ) e === t[o] && (i = n.push(o));
            for (; i--; ) S.call(t, n[i], 1);
          }
          return (r = null), t;
        }),
        (A.fn.uniqueSort = function () {
          return this.pushStack(A.uniqueSort(s.apply(this)));
        }),
        ((e = A.expr =
          {
            cacheLength: 50,
            createPseudo: et,
            match: H,
            attrHandle: {},
            find: {},
            relative: {
              ">": { dir: "parentNode", first: !0 },
              " ": { dir: "parentNode" },
              "+": { dir: "previousSibling", first: !0 },
              "~": { dir: "previousSibling" },
            },
            preFilter: {
              ATTR: function (t) {
                return (
                  (t[1] = t[1].replace(G, K)),
                  (t[3] = (t[3] || t[4] || t[5] || "").replace(G, K)),
                  "~=" === t[2] && (t[3] = " " + t[3] + " "),
                  t.slice(0, 4)
                );
              },
              CHILD: function (t) {
                return (
                  (t[1] = t[1].toLowerCase()),
                  "nth" === t[1].slice(0, 3)
                    ? (t[3] || Q.error(t[0]),
                      (t[4] = +(t[4]
                        ? t[5] + (t[6] || 1)
                        : 2 * ("even" === t[3] || "odd" === t[3]))),
                      (t[5] = +(t[7] + t[8] || "odd" === t[3])))
                    : t[3] && Q.error(t[0]),
                  t
                );
              },
              PSEUDO: function (t) {
                var e,
                  n = !t[6] && t[2];
                return H.CHILD.test(t[0])
                  ? null
                  : (t[3]
                      ? (t[2] = t[4] || t[5] || "")
                      : n &&
                        F.test(n) &&
                        (e = dt(n, !0)) &&
                        (e = n.indexOf(")", n.length - e) - n.length) &&
                        ((t[0] = t[0].slice(0, e)), (t[2] = n.slice(0, e))),
                    t.slice(0, 3));
              },
            },
            filter: {
              TAG: function (t) {
                var e = t.replace(G, K).toLowerCase();
                return "*" === t
                  ? function () {
                      return !0;
                    }
                  : function (t) {
                      return z(t, e);
                    };
              },
              CLASS: function (t) {
                var e = y[t + " "];
                return (
                  e ||
                  ((e = new RegExp("(^|" + T + ")" + t + "(" + T + "|$)")) &&
                    y(t, function (t) {
                      return e.test(
                        ("string" == typeof t.className && t.className) ||
                          (void 0 !== t.getAttribute &&
                            t.getAttribute("class")) ||
                          ""
                      );
                    }))
                );
              },
              ATTR: function (t, e, n) {
                return function (i) {
                  var r = Q.attr(i, t);
                  return null == r
                    ? "!=" === e
                    : !e ||
                        ((r += ""),
                        "=" === e
                          ? r === n
                          : "!=" === e
                          ? r !== n
                          : "^=" === e
                          ? n && 0 === r.indexOf(n)
                          : "*=" === e
                          ? n && r.indexOf(n) > -1
                          : "$=" === e
                          ? n && r.slice(-n.length) === n
                          : "~=" === e
                          ? (" " + r.replace(I, " ") + " ").indexOf(n) > -1
                          : "|=" === e &&
                            (r === n || r.slice(0, n.length + 1) === n + "-"));
                };
              },
              CHILD: function (t, e, n, i, r) {
                var o = "nth" !== t.slice(0, 3),
                  a = "last" !== t.slice(-4),
                  s = "of-type" === e;
                return 1 === i && 0 === r
                  ? function (t) {
                      return !!t.parentNode;
                    }
                  : function (e, n, l) {
                      var c,
                        d,
                        u,
                        p,
                        h,
                        f = o !== a ? "nextSibling" : "previousSibling",
                        b = e.parentNode,
                        m = s && e.nodeName.toLowerCase(),
                        _ = !l && !s,
                        y = !1;
                      if (b) {
                        if (o) {
                          for (; f; ) {
                            for (u = e; (u = u[f]); )
                              if (s ? z(u, m) : 1 === u.nodeType) return !1;
                            h = f = "only" === t && !h && "nextSibling";
                          }
                          return !0;
                        }
                        if (((h = [a ? b.firstChild : b.lastChild]), a && _)) {
                          for (
                            y =
                              (p =
                                (c = (d = b[g] || (b[g] = {}))[t] || [])[0] ===
                                  v && c[1]) && c[2],
                              u = p && b.childNodes[p];
                            (u = (++p && u && u[f]) || (y = p = 0) || h.pop());

                          )
                            if (1 === u.nodeType && ++y && u === e) {
                              d[t] = [v, p, y];
                              break;
                            }
                        } else if (
                          (_ &&
                            (y = p =
                              (c = (d = e[g] || (e[g] = {}))[t] || [])[0] ===
                                v && c[1]),
                          !1 === y)
                        )
                          for (
                            ;
                            (u =
                              (++p && u && u[f]) || (y = p = 0) || h.pop()) &&
                            (!(s ? z(u, m) : 1 === u.nodeType) ||
                              !++y ||
                              (_ && ((d = u[g] || (u[g] = {}))[t] = [v, y]),
                              u !== e));

                          );
                        return (y -= r) === i || (y % i == 0 && y / i >= 0);
                      }
                    };
              },
              PSEUDO: function (t, n) {
                var i,
                  r =
                    e.pseudos[t] ||
                    e.setFilters[t.toLowerCase()] ||
                    Q.error("unsupported pseudo: " + t);
                return r[g]
                  ? r(n)
                  : r.length > 1
                  ? ((i = [t, t, "", n]),
                    e.setFilters.hasOwnProperty(t.toLowerCase())
                      ? et(function (t, e) {
                          for (var i, o = r(t, n), a = o.length; a--; )
                            t[(i = d.call(t, o[a]))] = !(e[i] = o[a]);
                        })
                      : function (t) {
                          return r(t, 0, i);
                        })
                  : r;
              },
            },
            pseudos: {
              not: et(function (t) {
                var e = [],
                  n = [],
                  i = gt(t.replace(D, "$1"));
                return i[g]
                  ? et(function (t, e, n, r) {
                      for (var o, a = i(t, null, r, []), s = t.length; s--; )
                        (o = a[s]) && (t[s] = !(e[s] = o));
                    })
                  : function (t, r, o) {
                      return (
                        (e[0] = t), i(e, null, o, n), (e[0] = null), !n.pop()
                      );
                    };
              }),
              has: et(function (t) {
                return function (e) {
                  return Q(t, e).length > 0;
                };
              }),
              contains: et(function (t) {
                return (
                  (t = t.replace(G, K)),
                  function (e) {
                    return (e.textContent || A.text(e)).indexOf(t) > -1;
                  }
                );
              }),
              lang: et(function (t) {
                return (
                  $.test(t || "") || Q.error("unsupported lang: " + t),
                  (t = t.replace(G, K).toLowerCase()),
                  function (e) {
                    var n;
                    do {
                      if (
                        (n = u
                          ? e.lang
                          : e.getAttribute("xml:lang") ||
                            e.getAttribute("lang"))
                      )
                        return (
                          (n = n.toLowerCase()) === t ||
                          0 === n.indexOf(t + "-")
                        );
                    } while ((e = e.parentNode) && 1 === e.nodeType);
                    return !1;
                  }
                );
              }),
              target: function (t) {
                var e = n.location && n.location.hash;
                return e && e.slice(1) === t.id;
              },
              root: function (t) {
                return t === c;
              },
              focus: function (t) {
                return (
                  t ===
                    (function () {
                      try {
                        return l.activeElement;
                      } catch (t) {}
                    })() &&
                  l.hasFocus() &&
                  !!(t.type || t.href || ~t.tabIndex)
                );
              },
              enabled: ot(!1),
              disabled: ot(!0),
              checked: function (t) {
                return (
                  (z(t, "input") && !!t.checked) ||
                  (z(t, "option") && !!t.selected)
                );
              },
              selected: function (t) {
                return (
                  t.parentNode && t.parentNode.selectedIndex, !0 === t.selected
                );
              },
              empty: function (t) {
                for (t = t.firstChild; t; t = t.nextSibling)
                  if (t.nodeType < 6) return !1;
                return !0;
              },
              parent: function (t) {
                return !e.pseudos.empty(t);
              },
              header: function (t) {
                return U.test(t.nodeName);
              },
              input: function (t) {
                return Y.test(t.nodeName);
              },
              button: function (t) {
                return (z(t, "input") && "button" === t.type) || z(t, "button");
              },
              text: function (t) {
                var e;
                return (
                  z(t, "input") &&
                  "text" === t.type &&
                  (null == (e = t.getAttribute("type")) ||
                    "text" === e.toLowerCase())
                );
              },
              first: at(function () {
                return [0];
              }),
              last: at(function (t, e) {
                return [e - 1];
              }),
              eq: at(function (t, e, n) {
                return [n < 0 ? n + e : n];
              }),
              even: at(function (t, e) {
                for (var n = 0; n < e; n += 2) t.push(n);
                return t;
              }),
              odd: at(function (t, e) {
                for (var n = 1; n < e; n += 2) t.push(n);
                return t;
              }),
              lt: at(function (t, e, n) {
                var i;
                for (i = n < 0 ? n + e : n > e ? e : n; --i >= 0; ) t.push(i);
                return t;
              }),
              gt: at(function (t, e, n) {
                for (var i = n < 0 ? n + e : n; ++i < e; ) t.push(i);
                return t;
              }),
            },
          }).pseudos.nth = e.pseudos.eq),
        { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
          e.pseudos[t] = it(t);
        for (t in { submit: !0, reset: !0 }) e.pseudos[t] = rt(t);
        function ct() {}
        function dt(t, n) {
          var i,
            r,
            o,
            a,
            s,
            l,
            c,
            d = M[t + " "];
          if (d) return n ? 0 : d.slice(0);
          for (s = t, l = [], c = e.preFilter; s; ) {
            for (a in ((i && !(r = W.exec(s))) ||
              (r && (s = s.slice(r[0].length) || s), l.push((o = []))),
            (i = !1),
            (r = N.exec(s)) &&
              ((i = r.shift()),
              o.push({ value: i, type: r[0].replace(D, " ") }),
              (s = s.slice(i.length))),
            e.filter))
              !(r = H[a].exec(s)) ||
                (c[a] && !(r = c[a](r))) ||
                ((i = r.shift()),
                o.push({ value: i, type: a, matches: r }),
                (s = s.slice(i.length)));
            if (!i) break;
          }
          return n ? s.length : s ? Q.error(t) : M(t, l).slice(0);
        }
        function ut(t) {
          for (var e = 0, n = t.length, i = ""; e < n; e++) i += t[e].value;
          return i;
        }
        function pt(t, e, n) {
          var i = e.dir,
            r = e.next,
            o = r || i,
            a = n && "parentNode" === o,
            s = _++;
          return e.first
            ? function (e, n, r) {
                for (; (e = e[i]); )
                  if (1 === e.nodeType || a) return t(e, n, r);
                return !1;
              }
            : function (e, n, l) {
                var c,
                  d,
                  u = [v, s];
                if (l) {
                  for (; (e = e[i]); )
                    if ((1 === e.nodeType || a) && t(e, n, l)) return !0;
                } else
                  for (; (e = e[i]); )
                    if (1 === e.nodeType || a)
                      if (((d = e[g] || (e[g] = {})), r && z(e, r)))
                        e = e[i] || e;
                      else {
                        if ((c = d[o]) && c[0] === v && c[1] === s)
                          return (u[2] = c[2]);
                        if (((d[o] = u), (u[2] = t(e, n, l)))) return !0;
                      }
                return !1;
              };
        }
        function ht(t) {
          return t.length > 1
            ? function (e, n, i) {
                for (var r = t.length; r--; ) if (!t[r](e, n, i)) return !1;
                return !0;
              }
            : t[0];
        }
        function ft(t, e, n, i, r) {
          for (var o, a = [], s = 0, l = t.length, c = null != e; s < l; s++)
            (o = t[s]) && ((n && !n(o, i, r)) || (a.push(o), c && e.push(s)));
          return a;
        }
        function bt(t, e, n, i, r, o) {
          return (
            i && !i[g] && (i = bt(i)),
            r && !r[g] && (r = bt(r, o)),
            et(function (o, a, s, l) {
              var c,
                u,
                p,
                h,
                f = [],
                m = [],
                g = a.length,
                v =
                  o ||
                  (function (t, e, n) {
                    for (var i = 0, r = e.length; i < r; i++) Q(t, e[i], n);
                    return n;
                  })(e || "*", s.nodeType ? [s] : s, []),
                _ = !t || (!o && e) ? v : ft(v, f, t, s, l);
              if (
                (n ? n(_, (h = r || (o ? t : g || i) ? [] : a), s, l) : (h = _),
                i)
              )
                for (c = ft(h, m), i(c, [], s, l), u = c.length; u--; )
                  (p = c[u]) && (h[m[u]] = !(_[m[u]] = p));
              if (o) {
                if (r || t) {
                  if (r) {
                    for (c = [], u = h.length; u--; )
                      (p = h[u]) && c.push((_[u] = p));
                    r(null, (h = []), c, l);
                  }
                  for (u = h.length; u--; )
                    (p = h[u]) &&
                      (c = r ? d.call(o, p) : f[u]) > -1 &&
                      (o[c] = !(a[c] = p));
                }
              } else (h = ft(h === a ? h.splice(g, h.length) : h)), r ? r(null, a, h, l) : b.apply(a, h);
            })
          );
        }
        function mt(t) {
          for (
            var n,
              r,
              o,
              a = t.length,
              s = e.relative[t[0].type],
              l = s || e.relative[" "],
              c = s ? 1 : 0,
              u = pt(
                function (t) {
                  return t === n;
                },
                l,
                !0
              ),
              p = pt(
                function (t) {
                  return d.call(n, t) > -1;
                },
                l,
                !0
              ),
              h = [
                function (t, e, r) {
                  var o =
                    (!s && (r || e != i)) ||
                    ((n = e).nodeType ? u(t, e, r) : p(t, e, r));
                  return (n = null), o;
                },
              ];
            c < a;
            c++
          )
            if ((r = e.relative[t[c].type])) h = [pt(ht(h), r)];
            else {
              if ((r = e.filter[t[c].type].apply(null, t[c].matches))[g]) {
                for (o = ++c; o < a && !e.relative[t[o].type]; o++);
                return bt(
                  c > 1 && ht(h),
                  c > 1 &&
                    ut(
                      t
                        .slice(0, c - 1)
                        .concat({ value: " " === t[c - 2].type ? "*" : "" })
                    ).replace(D, "$1"),
                  r,
                  c < o && mt(t.slice(c, o)),
                  o < a && mt((t = t.slice(o))),
                  o < a && ut(t)
                );
              }
              h.push(r);
            }
          return ht(h);
        }
        function gt(t, n) {
          var r,
            o = [],
            a = [],
            s = O[t + " "];
          if (!s) {
            for (n || (n = dt(t)), r = n.length; r--; )
              (s = mt(n[r]))[g] ? o.push(s) : a.push(s);
            (s = O(
              t,
              (function (t, n) {
                var r = n.length > 0,
                  o = t.length > 0,
                  a = function (a, s, c, d, p) {
                    var h,
                      f,
                      m,
                      g = 0,
                      _ = "0",
                      y = a && [],
                      M = [],
                      O = i,
                      w = a || (o && e.find.TAG("*", p)),
                      x = (v += null == O ? 1 : Math.random() || 0.1),
                      z = w.length;
                    for (
                      p && (i = s == l || s || p);
                      _ !== z && null != (h = w[_]);
                      _++
                    ) {
                      if (o && h) {
                        for (
                          f = 0, s || h.ownerDocument == l || (lt(h), (c = !u));
                          (m = t[f++]);

                        )
                          if (m(h, s || l, c)) {
                            b.call(d, h);
                            break;
                          }
                        p && (v = x);
                      }
                      r && ((h = !m && h) && g--, a && y.push(h));
                    }
                    if (((g += _), r && _ !== g)) {
                      for (f = 0; (m = n[f++]); ) m(y, M, s, c);
                      if (a) {
                        if (g > 0)
                          for (; _--; ) y[_] || M[_] || (M[_] = C.call(d));
                        M = ft(M);
                      }
                      b.apply(d, M),
                        p &&
                          !a &&
                          M.length > 0 &&
                          g + n.length > 1 &&
                          A.uniqueSort(d);
                    }
                    return p && ((v = x), (i = O)), y;
                  };
                return r ? et(a) : a;
              })(a, o)
            )).selector = t;
          }
          return s;
        }
        function vt(t, n, i, r) {
          var o,
            a,
            s,
            l,
            c,
            d = "function" == typeof t && t,
            p = !r && dt((t = d.selector || t));
          if (((i = i || []), 1 === p.length)) {
            if (
              (a = p[0] = p[0].slice(0)).length > 2 &&
              "ID" === (s = a[0]).type &&
              9 === n.nodeType &&
              u &&
              e.relative[a[1].type]
            ) {
              if (!(n = (e.find.ID(s.matches[0].replace(G, K), n) || [])[0]))
                return i;
              d && (n = n.parentNode), (t = t.slice(a.shift().value.length));
            }
            for (
              o = H.needsContext.test(t) ? 0 : a.length;
              o-- && ((s = a[o]), !e.relative[(l = s.type)]);

            )
              if (
                (c = e.find[l]) &&
                (r = c(
                  s.matches[0].replace(G, K),
                  (V.test(a[0].type) && st(n.parentNode)) || n
                ))
              ) {
                if ((a.splice(o, 1), !(t = r.length && ut(a))))
                  return b.apply(i, r), i;
                break;
              }
          }
          return (
            (d || gt(t, p))(
              r,
              n,
              !u,
              i,
              !n || (V.test(t) && st(n.parentNode)) || n
            ),
            i
          );
        }
        (ct.prototype = e.filters = e.pseudos),
          (e.setFilters = new ct()),
          (m.sortStable = g.split("").sort(x).join("") === g),
          lt(),
          (m.sortDetached = nt(function (t) {
            return 1 & t.compareDocumentPosition(l.createElement("fieldset"));
          })),
          (A.find = Q),
          (A.expr[":"] = A.expr.pseudos),
          (A.unique = A.uniqueSort),
          (Q.compile = gt),
          (Q.select = vt),
          (Q.setDocument = lt),
          (Q.tokenize = dt),
          (Q.escape = A.escapeSelector),
          (Q.getText = A.text),
          (Q.isXML = A.isXMLDoc),
          (Q.selectors = A.expr),
          (Q.support = A.support),
          (Q.uniqueSort = A.uniqueSort);
      })();
      var P = function (t, e, n) {
          for (var i = [], r = void 0 !== n; (t = t[e]) && 9 !== t.nodeType; )
            if (1 === t.nodeType) {
              if (r && A(t).is(n)) break;
              i.push(t);
            }
          return i;
        },
        R = function (t, e) {
          for (var n = []; t; t = t.nextSibling)
            1 === t.nodeType && t !== e && n.push(t);
          return n;
        },
        I = A.expr.match.needsContext,
        W = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
      function N(t, e, n) {
        return g(e)
          ? A.grep(t, function (t, i) {
              return !!e.call(t, i, t) !== n;
            })
          : e.nodeType
          ? A.grep(t, function (t) {
              return (t === e) !== n;
            })
          : "string" != typeof e
          ? A.grep(t, function (t) {
              return d.call(e, t) > -1 !== n;
            })
          : A.filter(e, t, n);
      }
      (A.filter = function (t, e, n) {
        var i = e[0];
        return (
          n && (t = ":not(" + t + ")"),
          1 === e.length && 1 === i.nodeType
            ? A.find.matchesSelector(i, t)
              ? [i]
              : []
            : A.find.matches(
                t,
                A.grep(e, function (t) {
                  return 1 === t.nodeType;
                })
              )
        );
      }),
        A.fn.extend({
          find: function (t) {
            var e,
              n,
              i = this.length,
              r = this;
            if ("string" != typeof t)
              return this.pushStack(
                A(t).filter(function () {
                  for (e = 0; e < i; e++) if (A.contains(r[e], this)) return !0;
                })
              );
            for (n = this.pushStack([]), e = 0; e < i; e++) A.find(t, r[e], n);
            return i > 1 ? A.uniqueSort(n) : n;
          },
          filter: function (t) {
            return this.pushStack(N(this, t || [], !1));
          },
          not: function (t) {
            return this.pushStack(N(this, t || [], !0));
          },
          is: function (t) {
            return !!N(
              this,
              "string" == typeof t && I.test(t) ? A(t) : t || [],
              !1
            ).length;
          },
        });
      var B,
        F = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
      ((A.fn.init = function (t, e, n) {
        var i, r;
        if (!t) return this;
        if (((n = n || B), "string" == typeof t)) {
          if (
            !(i =
              "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3
                ? [null, t, null]
                : F.exec(t)) ||
            (!i[1] && e)
          )
            return !e || e.jquery
              ? (e || n).find(t)
              : this.constructor(e).find(t);
          if (i[1]) {
            if (
              ((e = e instanceof A ? e[0] : e),
              A.merge(
                this,
                A.parseHTML(
                  i[1],
                  e && e.nodeType ? e.ownerDocument || e : _,
                  !0
                )
              ),
              W.test(i[1]) && A.isPlainObject(e))
            )
              for (i in e) g(this[i]) ? this[i](e[i]) : this.attr(i, e[i]);
            return this;
          }
          return (
            (r = _.getElementById(i[2])) && ((this[0] = r), (this.length = 1)),
            this
          );
        }
        return t.nodeType
          ? ((this[0] = t), (this.length = 1), this)
          : g(t)
          ? void 0 !== n.ready
            ? n.ready(t)
            : t(A)
          : A.makeArray(t, this);
      }).prototype = A.fn),
        (B = A(_));
      var $ = /^(?:parents|prev(?:Until|All))/,
        H = { children: !0, contents: !0, next: !0, prev: !0 };
      function Y(t, e) {
        for (; (t = t[e]) && 1 !== t.nodeType; );
        return t;
      }
      A.fn.extend({
        has: function (t) {
          var e = A(t, this),
            n = e.length;
          return this.filter(function () {
            for (var t = 0; t < n; t++) if (A.contains(this, e[t])) return !0;
          });
        },
        closest: function (t, e) {
          var n,
            i = 0,
            r = this.length,
            o = [],
            a = "string" != typeof t && A(t);
          if (!I.test(t))
            for (; i < r; i++)
              for (n = this[i]; n && n !== e; n = n.parentNode)
                if (
                  n.nodeType < 11 &&
                  (a
                    ? a.index(n) > -1
                    : 1 === n.nodeType && A.find.matchesSelector(n, t))
                ) {
                  o.push(n);
                  break;
                }
          return this.pushStack(o.length > 1 ? A.uniqueSort(o) : o);
        },
        index: function (t) {
          return t
            ? "string" == typeof t
              ? d.call(A(t), this[0])
              : d.call(this, t.jquery ? t[0] : t)
            : this[0] && this[0].parentNode
            ? this.first().prevAll().length
            : -1;
        },
        add: function (t, e) {
          return this.pushStack(A.uniqueSort(A.merge(this.get(), A(t, e))));
        },
        addBack: function (t) {
          return this.add(
            null == t ? this.prevObject : this.prevObject.filter(t)
          );
        },
      }),
        A.each(
          {
            parent: function (t) {
              var e = t.parentNode;
              return e && 11 !== e.nodeType ? e : null;
            },
            parents: function (t) {
              return P(t, "parentNode");
            },
            parentsUntil: function (t, e, n) {
              return P(t, "parentNode", n);
            },
            next: function (t) {
              return Y(t, "nextSibling");
            },
            prev: function (t) {
              return Y(t, "previousSibling");
            },
            nextAll: function (t) {
              return P(t, "nextSibling");
            },
            prevAll: function (t) {
              return P(t, "previousSibling");
            },
            nextUntil: function (t, e, n) {
              return P(t, "nextSibling", n);
            },
            prevUntil: function (t, e, n) {
              return P(t, "previousSibling", n);
            },
            siblings: function (t) {
              return R((t.parentNode || {}).firstChild, t);
            },
            children: function (t) {
              return R(t.firstChild);
            },
            contents: function (t) {
              return null != t.contentDocument && a(t.contentDocument)
                ? t.contentDocument
                : (z(t, "template") && (t = t.content || t),
                  A.merge([], t.childNodes));
            },
          },
          function (t, e) {
            A.fn[t] = function (n, i) {
              var r = A.map(this, e, n);
              return (
                "Until" !== t.slice(-5) && (i = n),
                i && "string" == typeof i && (r = A.filter(i, r)),
                this.length > 1 &&
                  (H[t] || A.uniqueSort(r), $.test(t) && r.reverse()),
                this.pushStack(r)
              );
            };
          }
        );
      var U = /[^\x20\t\r\n\f]+/g;
      function X(t) {
        return t;
      }
      function V(t) {
        throw t;
      }
      function G(t, e, n, i) {
        var r;
        try {
          t && g((r = t.promise))
            ? r.call(t).done(e).fail(n)
            : t && g((r = t.then))
            ? r.call(t, e, n)
            : e.apply(void 0, [t].slice(i));
        } catch (t) {
          n.apply(void 0, [t]);
        }
      }
      (A.Callbacks = function (t) {
        t =
          "string" == typeof t
            ? (function (t) {
                var e = {};
                return (
                  A.each(t.match(U) || [], function (t, n) {
                    e[n] = !0;
                  }),
                  e
                );
              })(t)
            : A.extend({}, t);
        var e,
          n,
          i,
          r,
          o = [],
          a = [],
          s = -1,
          l = function () {
            for (r = r || t.once, i = e = !0; a.length; s = -1)
              for (n = a.shift(); ++s < o.length; )
                !1 === o[s].apply(n[0], n[1]) &&
                  t.stopOnFalse &&
                  ((s = o.length), (n = !1));
            t.memory || (n = !1), (e = !1), r && (o = n ? [] : "");
          },
          c = {
            add: function () {
              return (
                o &&
                  (n && !e && ((s = o.length - 1), a.push(n)),
                  (function e(n) {
                    A.each(n, function (n, i) {
                      g(i)
                        ? (t.unique && c.has(i)) || o.push(i)
                        : i && i.length && "string" !== O(i) && e(i);
                    });
                  })(arguments),
                  n && !e && l()),
                this
              );
            },
            remove: function () {
              return (
                A.each(arguments, function (t, e) {
                  for (var n; (n = A.inArray(e, o, n)) > -1; )
                    o.splice(n, 1), n <= s && s--;
                }),
                this
              );
            },
            has: function (t) {
              return t ? A.inArray(t, o) > -1 : o.length > 0;
            },
            empty: function () {
              return o && (o = []), this;
            },
            disable: function () {
              return (r = a = []), (o = n = ""), this;
            },
            disabled: function () {
              return !o;
            },
            lock: function () {
              return (r = a = []), n || e || (o = n = ""), this;
            },
            locked: function () {
              return !!r;
            },
            fireWith: function (t, n) {
              return (
                r ||
                  ((n = [t, (n = n || []).slice ? n.slice() : n]),
                  a.push(n),
                  e || l()),
                this
              );
            },
            fire: function () {
              return c.fireWith(this, arguments), this;
            },
            fired: function () {
              return !!i;
            },
          };
        return c;
      }),
        A.extend({
          Deferred: function (t) {
            var e = [
                [
                  "notify",
                  "progress",
                  A.Callbacks("memory"),
                  A.Callbacks("memory"),
                  2,
                ],
                [
                  "resolve",
                  "done",
                  A.Callbacks("once memory"),
                  A.Callbacks("once memory"),
                  0,
                  "resolved",
                ],
                [
                  "reject",
                  "fail",
                  A.Callbacks("once memory"),
                  A.Callbacks("once memory"),
                  1,
                  "rejected",
                ],
              ],
              i = "pending",
              r = {
                state: function () {
                  return i;
                },
                always: function () {
                  return o.done(arguments).fail(arguments), this;
                },
                catch: function (t) {
                  return r.then(null, t);
                },
                pipe: function () {
                  var t = arguments;
                  return A.Deferred(function (n) {
                    A.each(e, function (e, i) {
                      var r = g(t[i[4]]) && t[i[4]];
                      o[i[1]](function () {
                        var t = r && r.apply(this, arguments);
                        t && g(t.promise)
                          ? t
                              .promise()
                              .progress(n.notify)
                              .done(n.resolve)
                              .fail(n.reject)
                          : n[i[0] + "With"](this, r ? [t] : arguments);
                      });
                    }),
                      (t = null);
                  }).promise();
                },
                then: function (t, i, r) {
                  var o = 0;
                  function a(t, e, i, r) {
                    return function () {
                      var s = this,
                        l = arguments,
                        c = function () {
                          var n, c;
                          if (!(t < o)) {
                            if ((n = i.apply(s, l)) === e.promise())
                              throw new TypeError("Thenable self-resolution");
                            (c =
                              n &&
                              ("object" == typeof n ||
                                "function" == typeof n) &&
                              n.then),
                              g(c)
                                ? r
                                  ? c.call(n, a(o, e, X, r), a(o, e, V, r))
                                  : (o++,
                                    c.call(
                                      n,
                                      a(o, e, X, r),
                                      a(o, e, V, r),
                                      a(o, e, X, e.notifyWith)
                                    ))
                                : (i !== X && ((s = void 0), (l = [n])),
                                  (r || e.resolveWith)(s, l));
                          }
                        },
                        d = r
                          ? c
                          : function () {
                              try {
                                c();
                              } catch (n) {
                                A.Deferred.exceptionHook &&
                                  A.Deferred.exceptionHook(n, d.error),
                                  t + 1 >= o &&
                                    (i !== V && ((s = void 0), (l = [n])),
                                    e.rejectWith(s, l));
                              }
                            };
                      t
                        ? d()
                        : (A.Deferred.getErrorHook
                            ? (d.error = A.Deferred.getErrorHook())
                            : A.Deferred.getStackHook &&
                              (d.error = A.Deferred.getStackHook()),
                          n.setTimeout(d));
                    };
                  }
                  return A.Deferred(function (n) {
                    e[0][3].add(a(0, n, g(r) ? r : X, n.notifyWith)),
                      e[1][3].add(a(0, n, g(t) ? t : X)),
                      e[2][3].add(a(0, n, g(i) ? i : V));
                  }).promise();
                },
                promise: function (t) {
                  return null != t ? A.extend(t, r) : r;
                },
              },
              o = {};
            return (
              A.each(e, function (t, n) {
                var a = n[2],
                  s = n[5];
                (r[n[1]] = a.add),
                  s &&
                    a.add(
                      function () {
                        i = s;
                      },
                      e[3 - t][2].disable,
                      e[3 - t][3].disable,
                      e[0][2].lock,
                      e[0][3].lock
                    ),
                  a.add(n[3].fire),
                  (o[n[0]] = function () {
                    return (
                      o[n[0] + "With"](this === o ? void 0 : this, arguments),
                      this
                    );
                  }),
                  (o[n[0] + "With"] = a.fireWith);
              }),
              r.promise(o),
              t && t.call(o, o),
              o
            );
          },
          when: function (t) {
            var e = arguments.length,
              n = e,
              i = Array(n),
              r = s.call(arguments),
              o = A.Deferred(),
              a = function (t) {
                return function (n) {
                  (i[t] = this),
                    (r[t] = arguments.length > 1 ? s.call(arguments) : n),
                    --e || o.resolveWith(i, r);
                };
              };
            if (
              e <= 1 &&
              (G(t, o.done(a(n)).resolve, o.reject, !e),
              "pending" === o.state() || g(r[n] && r[n].then))
            )
              return o.then();
            for (; n--; ) G(r[n], a(n), o.reject);
            return o.promise();
          },
        });
      var K = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
      (A.Deferred.exceptionHook = function (t, e) {
        n.console &&
          n.console.warn &&
          t &&
          K.test(t.name) &&
          n.console.warn("jQuery.Deferred exception: " + t.message, t.stack, e);
      }),
        (A.readyException = function (t) {
          n.setTimeout(function () {
            throw t;
          });
        });
      var Z = A.Deferred();
      function J() {
        _.removeEventListener("DOMContentLoaded", J),
          n.removeEventListener("load", J),
          A.ready();
      }
      (A.fn.ready = function (t) {
        return (
          Z.then(t).catch(function (t) {
            A.readyException(t);
          }),
          this
        );
      }),
        A.extend({
          isReady: !1,
          readyWait: 1,
          ready: function (t) {
            (!0 === t ? --A.readyWait : A.isReady) ||
              ((A.isReady = !0),
              (!0 !== t && --A.readyWait > 0) || Z.resolveWith(_, [A]));
          },
        }),
        (A.ready.then = Z.then),
        "complete" === _.readyState ||
        ("loading" !== _.readyState && !_.documentElement.doScroll)
          ? n.setTimeout(A.ready)
          : (_.addEventListener("DOMContentLoaded", J),
            n.addEventListener("load", J));
      var Q = function (t, e, n, i, r, o, a) {
          var s = 0,
            l = t.length,
            c = null == n;
          if ("object" === O(n))
            for (s in ((r = !0), n)) Q(t, e, s, n[s], !0, o, a);
          else if (
            void 0 !== i &&
            ((r = !0),
            g(i) || (a = !0),
            c &&
              (a
                ? (e.call(t, i), (e = null))
                : ((c = e),
                  (e = function (t, e, n) {
                    return c.call(A(t), n);
                  }))),
            e)
          )
            for (; s < l; s++) e(t[s], n, a ? i : i.call(t[s], s, e(t[s], n)));
          return r ? t : c ? e.call(t) : l ? e(t[0], n) : o;
        },
        tt = /^-ms-/,
        et = /-([a-z])/g;
      function nt(t, e) {
        return e.toUpperCase();
      }
      function it(t) {
        return t.replace(tt, "ms-").replace(et, nt);
      }
      var rt = function (t) {
        return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType;
      };
      function ot() {
        this.expando = A.expando + ot.uid++;
      }
      (ot.uid = 1),
        (ot.prototype = {
          cache: function (t) {
            var e = t[this.expando];
            return (
              e ||
                ((e = {}),
                rt(t) &&
                  (t.nodeType
                    ? (t[this.expando] = e)
                    : Object.defineProperty(t, this.expando, {
                        value: e,
                        configurable: !0,
                      }))),
              e
            );
          },
          set: function (t, e, n) {
            var i,
              r = this.cache(t);
            if ("string" == typeof e) r[it(e)] = n;
            else for (i in e) r[it(i)] = e[i];
            return r;
          },
          get: function (t, e) {
            return void 0 === e
              ? this.cache(t)
              : t[this.expando] && t[this.expando][it(e)];
          },
          access: function (t, e, n) {
            return void 0 === e || (e && "string" == typeof e && void 0 === n)
              ? this.get(t, e)
              : (this.set(t, e, n), void 0 !== n ? n : e);
          },
          remove: function (t, e) {
            var n,
              i = t[this.expando];
            if (void 0 !== i) {
              if (void 0 !== e) {
                n = (e = Array.isArray(e)
                  ? e.map(it)
                  : (e = it(e)) in i
                  ? [e]
                  : e.match(U) || []).length;
                for (; n--; ) delete i[e[n]];
              }
              (void 0 === e || A.isEmptyObject(i)) &&
                (t.nodeType
                  ? (t[this.expando] = void 0)
                  : delete t[this.expando]);
            }
          },
          hasData: function (t) {
            var e = t[this.expando];
            return void 0 !== e && !A.isEmptyObject(e);
          },
        });
      var at = new ot(),
        st = new ot(),
        lt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        ct = /[A-Z]/g;
      function dt(t, e, n) {
        var i;
        if (void 0 === n && 1 === t.nodeType)
          if (
            ((i = "data-" + e.replace(ct, "-$&").toLowerCase()),
            "string" == typeof (n = t.getAttribute(i)))
          ) {
            try {
              n = (function (t) {
                return (
                  "true" === t ||
                  ("false" !== t &&
                    ("null" === t
                      ? null
                      : t === +t + ""
                      ? +t
                      : lt.test(t)
                      ? JSON.parse(t)
                      : t))
                );
              })(n);
            } catch (t) {}
            st.set(t, e, n);
          } else n = void 0;
        return n;
      }
      A.extend({
        hasData: function (t) {
          return st.hasData(t) || at.hasData(t);
        },
        data: function (t, e, n) {
          return st.access(t, e, n);
        },
        removeData: function (t, e) {
          st.remove(t, e);
        },
        _data: function (t, e, n) {
          return at.access(t, e, n);
        },
        _removeData: function (t, e) {
          at.remove(t, e);
        },
      }),
        A.fn.extend({
          data: function (t, e) {
            var n,
              i,
              r,
              o = this[0],
              a = o && o.attributes;
            if (void 0 === t) {
              if (
                this.length &&
                ((r = st.get(o)),
                1 === o.nodeType && !at.get(o, "hasDataAttrs"))
              ) {
                for (n = a.length; n--; )
                  a[n] &&
                    0 === (i = a[n].name).indexOf("data-") &&
                    ((i = it(i.slice(5))), dt(o, i, r[i]));
                at.set(o, "hasDataAttrs", !0);
              }
              return r;
            }
            return "object" == typeof t
              ? this.each(function () {
                  st.set(this, t);
                })
              : Q(
                  this,
                  function (e) {
                    var n;
                    if (o && void 0 === e)
                      return void 0 !== (n = st.get(o, t)) ||
                        void 0 !== (n = dt(o, t))
                        ? n
                        : void 0;
                    this.each(function () {
                      st.set(this, t, e);
                    });
                  },
                  null,
                  e,
                  arguments.length > 1,
                  null,
                  !0
                );
          },
          removeData: function (t) {
            return this.each(function () {
              st.remove(this, t);
            });
          },
        }),
        A.extend({
          queue: function (t, e, n) {
            var i;
            if (t)
              return (
                (e = (e || "fx") + "queue"),
                (i = at.get(t, e)),
                n &&
                  (!i || Array.isArray(n)
                    ? (i = at.access(t, e, A.makeArray(n)))
                    : i.push(n)),
                i || []
              );
          },
          dequeue: function (t, e) {
            e = e || "fx";
            var n = A.queue(t, e),
              i = n.length,
              r = n.shift(),
              o = A._queueHooks(t, e);
            "inprogress" === r && ((r = n.shift()), i--),
              r &&
                ("fx" === e && n.unshift("inprogress"),
                delete o.stop,
                r.call(
                  t,
                  function () {
                    A.dequeue(t, e);
                  },
                  o
                )),
              !i && o && o.empty.fire();
          },
          _queueHooks: function (t, e) {
            var n = e + "queueHooks";
            return (
              at.get(t, n) ||
              at.access(t, n, {
                empty: A.Callbacks("once memory").add(function () {
                  at.remove(t, [e + "queue", n]);
                }),
              })
            );
          },
        }),
        A.fn.extend({
          queue: function (t, e) {
            var n = 2;
            return (
              "string" != typeof t && ((e = t), (t = "fx"), n--),
              arguments.length < n
                ? A.queue(this[0], t)
                : void 0 === e
                ? this
                : this.each(function () {
                    var n = A.queue(this, t, e);
                    A._queueHooks(this, t),
                      "fx" === t && "inprogress" !== n[0] && A.dequeue(this, t);
                  })
            );
          },
          dequeue: function (t) {
            return this.each(function () {
              A.dequeue(this, t);
            });
          },
          clearQueue: function (t) {
            return this.queue(t || "fx", []);
          },
          promise: function (t, e) {
            var n,
              i = 1,
              r = A.Deferred(),
              o = this,
              a = this.length,
              s = function () {
                --i || r.resolveWith(o, [o]);
              };
            for (
              "string" != typeof t && ((e = t), (t = void 0)), t = t || "fx";
              a--;

            )
              (n = at.get(o[a], t + "queueHooks")) &&
                n.empty &&
                (i++, n.empty.add(s));
            return s(), r.promise(e);
          },
        });
      var ut = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        pt = new RegExp("^(?:([+-])=|)(" + ut + ")([a-z%]*)$", "i"),
        ht = ["Top", "Right", "Bottom", "Left"],
        ft = _.documentElement,
        bt = function (t) {
          return A.contains(t.ownerDocument, t);
        },
        mt = { composed: !0 };
      ft.getRootNode &&
        (bt = function (t) {
          return (
            A.contains(t.ownerDocument, t) ||
            t.getRootNode(mt) === t.ownerDocument
          );
        });
      var gt = function (t, e) {
        return (
          "none" === (t = e || t).style.display ||
          ("" === t.style.display && bt(t) && "none" === A.css(t, "display"))
        );
      };
      function vt(t, e, n, i) {
        var r,
          o,
          a = 20,
          s = i
            ? function () {
                return i.cur();
              }
            : function () {
                return A.css(t, e, "");
              },
          l = s(),
          c = (n && n[3]) || (A.cssNumber[e] ? "" : "px"),
          d =
            t.nodeType &&
            (A.cssNumber[e] || ("px" !== c && +l)) &&
            pt.exec(A.css(t, e));
        if (d && d[3] !== c) {
          for (l /= 2, c = c || d[3], d = +l || 1; a--; )
            A.style(t, e, d + c),
              (1 - o) * (1 - (o = s() / l || 0.5)) <= 0 && (a = 0),
              (d /= o);
          (d *= 2), A.style(t, e, d + c), (n = n || []);
        }
        return (
          n &&
            ((d = +d || +l || 0),
            (r = n[1] ? d + (n[1] + 1) * n[2] : +n[2]),
            i && ((i.unit = c), (i.start = d), (i.end = r))),
          r
        );
      }
      var _t = {};
      function yt(t) {
        var e,
          n = t.ownerDocument,
          i = t.nodeName,
          r = _t[i];
        return (
          r ||
          ((e = n.body.appendChild(n.createElement(i))),
          (r = A.css(e, "display")),
          e.parentNode.removeChild(e),
          "none" === r && (r = "block"),
          (_t[i] = r),
          r)
        );
      }
      function Mt(t, e) {
        for (var n, i, r = [], o = 0, a = t.length; o < a; o++)
          (i = t[o]).style &&
            ((n = i.style.display),
            e
              ? ("none" === n &&
                  ((r[o] = at.get(i, "display") || null),
                  r[o] || (i.style.display = "")),
                "" === i.style.display && gt(i) && (r[o] = yt(i)))
              : "none" !== n && ((r[o] = "none"), at.set(i, "display", n)));
        for (o = 0; o < a; o++) null != r[o] && (t[o].style.display = r[o]);
        return t;
      }
      A.fn.extend({
        show: function () {
          return Mt(this, !0);
        },
        hide: function () {
          return Mt(this);
        },
        toggle: function (t) {
          return "boolean" == typeof t
            ? t
              ? this.show()
              : this.hide()
            : this.each(function () {
                gt(this) ? A(this).show() : A(this).hide();
              });
        },
      });
      var Ot,
        wt,
        At = /^(?:checkbox|radio)$/i,
        xt = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        zt = /^$|^module$|\/(?:java|ecma)script/i;
      (Ot = _.createDocumentFragment().appendChild(_.createElement("div"))),
        (wt = _.createElement("input")).setAttribute("type", "radio"),
        wt.setAttribute("checked", "checked"),
        wt.setAttribute("name", "t"),
        Ot.appendChild(wt),
        (m.checkClone = Ot.cloneNode(!0).cloneNode(!0).lastChild.checked),
        (Ot.innerHTML = "<textarea>x</textarea>"),
        (m.noCloneChecked = !!Ot.cloneNode(!0).lastChild.defaultValue),
        (Ot.innerHTML = "<option></option>"),
        (m.option = !!Ot.lastChild);
      var Ct = {
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""],
      };
      function kt(t, e) {
        var n;
        return (
          (n =
            void 0 !== t.getElementsByTagName
              ? t.getElementsByTagName(e || "*")
              : void 0 !== t.querySelectorAll
              ? t.querySelectorAll(e || "*")
              : []),
          void 0 === e || (e && z(t, e)) ? A.merge([t], n) : n
        );
      }
      function St(t, e) {
        for (var n = 0, i = t.length; n < i; n++)
          at.set(t[n], "globalEval", !e || at.get(e[n], "globalEval"));
      }
      (Ct.tbody = Ct.tfoot = Ct.colgroup = Ct.caption = Ct.thead),
        (Ct.th = Ct.td),
        m.option ||
          (Ct.optgroup = Ct.option =
            [1, "<select multiple='multiple'>", "</select>"]);
      var Tt = /<|&#?\w+;/;
      function Dt(t, e, n, i, r) {
        for (
          var o,
            a,
            s,
            l,
            c,
            d,
            u = e.createDocumentFragment(),
            p = [],
            h = 0,
            f = t.length;
          h < f;
          h++
        )
          if ((o = t[h]) || 0 === o)
            if ("object" === O(o)) A.merge(p, o.nodeType ? [o] : o);
            else if (Tt.test(o)) {
              for (
                a = a || u.appendChild(e.createElement("div")),
                  s = (xt.exec(o) || ["", ""])[1].toLowerCase(),
                  l = Ct[s] || Ct._default,
                  a.innerHTML = l[1] + A.htmlPrefilter(o) + l[2],
                  d = l[0];
                d--;

              )
                a = a.lastChild;
              A.merge(p, a.childNodes), ((a = u.firstChild).textContent = "");
            } else p.push(e.createTextNode(o));
        for (u.textContent = "", h = 0; (o = p[h++]); )
          if (i && A.inArray(o, i) > -1) r && r.push(o);
          else if (
            ((c = bt(o)), (a = kt(u.appendChild(o), "script")), c && St(a), n)
          )
            for (d = 0; (o = a[d++]); ) zt.test(o.type || "") && n.push(o);
        return u;
      }
      var Lt = /^([^.]*)(?:\.(.+)|)/;
      function qt() {
        return !0;
      }
      function Et() {
        return !1;
      }
      function jt(t, e, n, i, r, o) {
        var a, s;
        if ("object" == typeof e) {
          for (s in ("string" != typeof n && ((i = i || n), (n = void 0)), e))
            jt(t, s, n, i, e[s], o);
          return t;
        }
        if (
          (null == i && null == r
            ? ((r = n), (i = n = void 0))
            : null == r &&
              ("string" == typeof n
                ? ((r = i), (i = void 0))
                : ((r = i), (i = n), (n = void 0))),
          !1 === r)
        )
          r = Et;
        else if (!r) return t;
        return (
          1 === o &&
            ((a = r),
            ((r = function (t) {
              return A().off(t), a.apply(this, arguments);
            }).guid = a.guid || (a.guid = A.guid++))),
          t.each(function () {
            A.event.add(this, e, r, i, n);
          })
        );
      }
      function Pt(t, e, n) {
        n
          ? (at.set(t, e, !1),
            A.event.add(t, e, {
              namespace: !1,
              handler: function (t) {
                var n,
                  i = at.get(this, e);
                if (1 & t.isTrigger && this[e]) {
                  if (i)
                    (A.event.special[e] || {}).delegateType &&
                      t.stopPropagation();
                  else if (
                    ((i = s.call(arguments)),
                    at.set(this, e, i),
                    this[e](),
                    (n = at.get(this, e)),
                    at.set(this, e, !1),
                    i !== n)
                  )
                    return t.stopImmediatePropagation(), t.preventDefault(), n;
                } else
                  i &&
                    (at.set(this, e, A.event.trigger(i[0], i.slice(1), this)),
                    t.stopPropagation(),
                    (t.isImmediatePropagationStopped = qt));
              },
            }))
          : void 0 === at.get(t, e) && A.event.add(t, e, qt);
      }
      (A.event = {
        global: {},
        add: function (t, e, n, i, r) {
          var o,
            a,
            s,
            l,
            c,
            d,
            u,
            p,
            h,
            f,
            b,
            m = at.get(t);
          if (rt(t))
            for (
              n.handler && ((n = (o = n).handler), (r = o.selector)),
                r && A.find.matchesSelector(ft, r),
                n.guid || (n.guid = A.guid++),
                (l = m.events) || (l = m.events = Object.create(null)),
                (a = m.handle) ||
                  (a = m.handle =
                    function (e) {
                      return void 0 !== A && A.event.triggered !== e.type
                        ? A.event.dispatch.apply(t, arguments)
                        : void 0;
                    }),
                c = (e = (e || "").match(U) || [""]).length;
              c--;

            )
              (h = b = (s = Lt.exec(e[c]) || [])[1]),
                (f = (s[2] || "").split(".").sort()),
                h &&
                  ((u = A.event.special[h] || {}),
                  (h = (r ? u.delegateType : u.bindType) || h),
                  (u = A.event.special[h] || {}),
                  (d = A.extend(
                    {
                      type: h,
                      origType: b,
                      data: i,
                      handler: n,
                      guid: n.guid,
                      selector: r,
                      needsContext: r && A.expr.match.needsContext.test(r),
                      namespace: f.join("."),
                    },
                    o
                  )),
                  (p = l[h]) ||
                    (((p = l[h] = []).delegateCount = 0),
                    (u.setup && !1 !== u.setup.call(t, i, f, a)) ||
                      (t.addEventListener && t.addEventListener(h, a))),
                  u.add &&
                    (u.add.call(t, d),
                    d.handler.guid || (d.handler.guid = n.guid)),
                  r ? p.splice(p.delegateCount++, 0, d) : p.push(d),
                  (A.event.global[h] = !0));
        },
        remove: function (t, e, n, i, r) {
          var o,
            a,
            s,
            l,
            c,
            d,
            u,
            p,
            h,
            f,
            b,
            m = at.hasData(t) && at.get(t);
          if (m && (l = m.events)) {
            for (c = (e = (e || "").match(U) || [""]).length; c--; )
              if (
                ((h = b = (s = Lt.exec(e[c]) || [])[1]),
                (f = (s[2] || "").split(".").sort()),
                h)
              ) {
                for (
                  u = A.event.special[h] || {},
                    p = l[(h = (i ? u.delegateType : u.bindType) || h)] || [],
                    s =
                      s[2] &&
                      new RegExp(
                        "(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"
                      ),
                    a = o = p.length;
                  o--;

                )
                  (d = p[o]),
                    (!r && b !== d.origType) ||
                      (n && n.guid !== d.guid) ||
                      (s && !s.test(d.namespace)) ||
                      (i && i !== d.selector && ("**" !== i || !d.selector)) ||
                      (p.splice(o, 1),
                      d.selector && p.delegateCount--,
                      u.remove && u.remove.call(t, d));
                a &&
                  !p.length &&
                  ((u.teardown && !1 !== u.teardown.call(t, f, m.handle)) ||
                    A.removeEvent(t, h, m.handle),
                  delete l[h]);
              } else for (h in l) A.event.remove(t, h + e[c], n, i, !0);
            A.isEmptyObject(l) && at.remove(t, "handle events");
          }
        },
        dispatch: function (t) {
          var e,
            n,
            i,
            r,
            o,
            a,
            s = new Array(arguments.length),
            l = A.event.fix(t),
            c = (at.get(this, "events") || Object.create(null))[l.type] || [],
            d = A.event.special[l.type] || {};
          for (s[0] = l, e = 1; e < arguments.length; e++) s[e] = arguments[e];
          if (
            ((l.delegateTarget = this),
            !d.preDispatch || !1 !== d.preDispatch.call(this, l))
          ) {
            for (
              a = A.event.handlers.call(this, l, c), e = 0;
              (r = a[e++]) && !l.isPropagationStopped();

            )
              for (
                l.currentTarget = r.elem, n = 0;
                (o = r.handlers[n++]) && !l.isImmediatePropagationStopped();

              )
                (l.rnamespace &&
                  !1 !== o.namespace &&
                  !l.rnamespace.test(o.namespace)) ||
                  ((l.handleObj = o),
                  (l.data = o.data),
                  void 0 !==
                    (i = (
                      (A.event.special[o.origType] || {}).handle || o.handler
                    ).apply(r.elem, s)) &&
                    !1 === (l.result = i) &&
                    (l.preventDefault(), l.stopPropagation()));
            return d.postDispatch && d.postDispatch.call(this, l), l.result;
          }
        },
        handlers: function (t, e) {
          var n,
            i,
            r,
            o,
            a,
            s = [],
            l = e.delegateCount,
            c = t.target;
          if (l && c.nodeType && !("click" === t.type && t.button >= 1))
            for (; c !== this; c = c.parentNode || this)
              if (
                1 === c.nodeType &&
                ("click" !== t.type || !0 !== c.disabled)
              ) {
                for (o = [], a = {}, n = 0; n < l; n++)
                  void 0 === a[(r = (i = e[n]).selector + " ")] &&
                    (a[r] = i.needsContext
                      ? A(r, this).index(c) > -1
                      : A.find(r, this, null, [c]).length),
                    a[r] && o.push(i);
                o.length && s.push({ elem: c, handlers: o });
              }
          return (
            (c = this),
            l < e.length && s.push({ elem: c, handlers: e.slice(l) }),
            s
          );
        },
        addProp: function (t, e) {
          Object.defineProperty(A.Event.prototype, t, {
            enumerable: !0,
            configurable: !0,
            get: g(e)
              ? function () {
                  if (this.originalEvent) return e(this.originalEvent);
                }
              : function () {
                  if (this.originalEvent) return this.originalEvent[t];
                },
            set: function (e) {
              Object.defineProperty(this, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: e,
              });
            },
          });
        },
        fix: function (t) {
          return t[A.expando] ? t : new A.Event(t);
        },
        special: {
          load: { noBubble: !0 },
          click: {
            setup: function (t) {
              var e = this || t;
              return (
                At.test(e.type) &&
                  e.click &&
                  z(e, "input") &&
                  Pt(e, "click", !0),
                !1
              );
            },
            trigger: function (t) {
              var e = this || t;
              return (
                At.test(e.type) && e.click && z(e, "input") && Pt(e, "click"),
                !0
              );
            },
            _default: function (t) {
              var e = t.target;
              return (
                (At.test(e.type) &&
                  e.click &&
                  z(e, "input") &&
                  at.get(e, "click")) ||
                z(e, "a")
              );
            },
          },
          beforeunload: {
            postDispatch: function (t) {
              void 0 !== t.result &&
                t.originalEvent &&
                (t.originalEvent.returnValue = t.result);
            },
          },
        },
      }),
        (A.removeEvent = function (t, e, n) {
          t.removeEventListener && t.removeEventListener(e, n);
        }),
        (A.Event = function (t, e) {
          if (!(this instanceof A.Event)) return new A.Event(t, e);
          t && t.type
            ? ((this.originalEvent = t),
              (this.type = t.type),
              (this.isDefaultPrevented =
                t.defaultPrevented ||
                (void 0 === t.defaultPrevented && !1 === t.returnValue)
                  ? qt
                  : Et),
              (this.target =
                t.target && 3 === t.target.nodeType
                  ? t.target.parentNode
                  : t.target),
              (this.currentTarget = t.currentTarget),
              (this.relatedTarget = t.relatedTarget))
            : (this.type = t),
            e && A.extend(this, e),
            (this.timeStamp = (t && t.timeStamp) || Date.now()),
            (this[A.expando] = !0);
        }),
        (A.Event.prototype = {
          constructor: A.Event,
          isDefaultPrevented: Et,
          isPropagationStopped: Et,
          isImmediatePropagationStopped: Et,
          isSimulated: !1,
          preventDefault: function () {
            var t = this.originalEvent;
            (this.isDefaultPrevented = qt),
              t && !this.isSimulated && t.preventDefault();
          },
          stopPropagation: function () {
            var t = this.originalEvent;
            (this.isPropagationStopped = qt),
              t && !this.isSimulated && t.stopPropagation();
          },
          stopImmediatePropagation: function () {
            var t = this.originalEvent;
            (this.isImmediatePropagationStopped = qt),
              t && !this.isSimulated && t.stopImmediatePropagation(),
              this.stopPropagation();
          },
        }),
        A.each(
          {
            altKey: !0,
            bubbles: !0,
            cancelable: !0,
            changedTouches: !0,
            ctrlKey: !0,
            detail: !0,
            eventPhase: !0,
            metaKey: !0,
            pageX: !0,
            pageY: !0,
            shiftKey: !0,
            view: !0,
            char: !0,
            code: !0,
            charCode: !0,
            key: !0,
            keyCode: !0,
            button: !0,
            buttons: !0,
            clientX: !0,
            clientY: !0,
            offsetX: !0,
            offsetY: !0,
            pointerId: !0,
            pointerType: !0,
            screenX: !0,
            screenY: !0,
            targetTouches: !0,
            toElement: !0,
            touches: !0,
            which: !0,
          },
          A.event.addProp
        ),
        A.each({ focus: "focusin", blur: "focusout" }, function (t, e) {
          function n(t) {
            if (_.documentMode) {
              var n = at.get(this, "handle"),
                i = A.event.fix(t);
              (i.type = "focusin" === t.type ? "focus" : "blur"),
                (i.isSimulated = !0),
                n(t),
                i.target === i.currentTarget && n(i);
            } else A.event.simulate(e, t.target, A.event.fix(t));
          }
          (A.event.special[t] = {
            setup: function () {
              var i;
              if ((Pt(this, t, !0), !_.documentMode)) return !1;
              (i = at.get(this, e)) || this.addEventListener(e, n),
                at.set(this, e, (i || 0) + 1);
            },
            trigger: function () {
              return Pt(this, t), !0;
            },
            teardown: function () {
              var t;
              if (!_.documentMode) return !1;
              (t = at.get(this, e) - 1)
                ? at.set(this, e, t)
                : (this.removeEventListener(e, n), at.remove(this, e));
            },
            _default: function (e) {
              return at.get(e.target, t);
            },
            delegateType: e,
          }),
            (A.event.special[e] = {
              setup: function () {
                var i = this.ownerDocument || this.document || this,
                  r = _.documentMode ? this : i,
                  o = at.get(r, e);
                o ||
                  (_.documentMode
                    ? this.addEventListener(e, n)
                    : i.addEventListener(t, n, !0)),
                  at.set(r, e, (o || 0) + 1);
              },
              teardown: function () {
                var i = this.ownerDocument || this.document || this,
                  r = _.documentMode ? this : i,
                  o = at.get(r, e) - 1;
                o
                  ? at.set(r, e, o)
                  : (_.documentMode
                      ? this.removeEventListener(e, n)
                      : i.removeEventListener(t, n, !0),
                    at.remove(r, e));
              },
            });
        }),
        A.each(
          {
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout",
          },
          function (t, e) {
            A.event.special[t] = {
              delegateType: e,
              bindType: e,
              handle: function (t) {
                var n,
                  i = this,
                  r = t.relatedTarget,
                  o = t.handleObj;
                return (
                  (r && (r === i || A.contains(i, r))) ||
                    ((t.type = o.origType),
                    (n = o.handler.apply(this, arguments)),
                    (t.type = e)),
                  n
                );
              },
            };
          }
        ),
        A.fn.extend({
          on: function (t, e, n, i) {
            return jt(this, t, e, n, i);
          },
          one: function (t, e, n, i) {
            return jt(this, t, e, n, i, 1);
          },
          off: function (t, e, n) {
            var i, r;
            if (t && t.preventDefault && t.handleObj)
              return (
                (i = t.handleObj),
                A(t.delegateTarget).off(
                  i.namespace ? i.origType + "." + i.namespace : i.origType,
                  i.selector,
                  i.handler
                ),
                this
              );
            if ("object" == typeof t) {
              for (r in t) this.off(r, e, t[r]);
              return this;
            }
            return (
              (!1 !== e && "function" != typeof e) || ((n = e), (e = void 0)),
              !1 === n && (n = Et),
              this.each(function () {
                A.event.remove(this, t, n, e);
              })
            );
          },
        });
      var Rt = /<script|<style|<link/i,
        It = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Wt = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
      function Nt(t, e) {
        return (
          (z(t, "table") &&
            z(11 !== e.nodeType ? e : e.firstChild, "tr") &&
            A(t).children("tbody")[0]) ||
          t
        );
      }
      function Bt(t) {
        return (t.type = (null !== t.getAttribute("type")) + "/" + t.type), t;
      }
      function Ft(t) {
        return (
          "true/" === (t.type || "").slice(0, 5)
            ? (t.type = t.type.slice(5))
            : t.removeAttribute("type"),
          t
        );
      }
      function $t(t, e) {
        var n, i, r, o, a, s;
        if (1 === e.nodeType) {
          if (at.hasData(t) && (s = at.get(t).events))
            for (r in (at.remove(e, "handle events"), s))
              for (n = 0, i = s[r].length; n < i; n++)
                A.event.add(e, r, s[r][n]);
          st.hasData(t) &&
            ((o = st.access(t)), (a = A.extend({}, o)), st.set(e, a));
        }
      }
      function Ht(t, e) {
        var n = e.nodeName.toLowerCase();
        "input" === n && At.test(t.type)
          ? (e.checked = t.checked)
          : ("input" !== n && "textarea" !== n) ||
            (e.defaultValue = t.defaultValue);
      }
      function Yt(t, e, n, i) {
        e = l(e);
        var r,
          o,
          a,
          s,
          c,
          d,
          u = 0,
          p = t.length,
          h = p - 1,
          f = e[0],
          b = g(f);
        if (b || (p > 1 && "string" == typeof f && !m.checkClone && It.test(f)))
          return t.each(function (r) {
            var o = t.eq(r);
            b && (e[0] = f.call(this, r, o.html())), Yt(o, e, n, i);
          });
        if (
          p &&
          ((o = (r = Dt(e, t[0].ownerDocument, !1, t, i)).firstChild),
          1 === r.childNodes.length && (r = o),
          o || i)
        ) {
          for (s = (a = A.map(kt(r, "script"), Bt)).length; u < p; u++)
            (c = r),
              u !== h &&
                ((c = A.clone(c, !0, !0)), s && A.merge(a, kt(c, "script"))),
              n.call(t[u], c, u);
          if (s)
            for (
              d = a[a.length - 1].ownerDocument, A.map(a, Ft), u = 0;
              u < s;
              u++
            )
              (c = a[u]),
                zt.test(c.type || "") &&
                  !at.access(c, "globalEval") &&
                  A.contains(d, c) &&
                  (c.src && "module" !== (c.type || "").toLowerCase()
                    ? A._evalUrl &&
                      !c.noModule &&
                      A._evalUrl(
                        c.src,
                        { nonce: c.nonce || c.getAttribute("nonce") },
                        d
                      )
                    : M(c.textContent.replace(Wt, ""), c, d));
        }
        return t;
      }
      function Ut(t, e, n) {
        for (var i, r = e ? A.filter(e, t) : t, o = 0; null != (i = r[o]); o++)
          n || 1 !== i.nodeType || A.cleanData(kt(i)),
            i.parentNode &&
              (n && bt(i) && St(kt(i, "script")), i.parentNode.removeChild(i));
        return t;
      }
      A.extend({
        htmlPrefilter: function (t) {
          return t;
        },
        clone: function (t, e, n) {
          var i,
            r,
            o,
            a,
            s = t.cloneNode(!0),
            l = bt(t);
          if (
            !(
              m.noCloneChecked ||
              (1 !== t.nodeType && 11 !== t.nodeType) ||
              A.isXMLDoc(t)
            )
          )
            for (a = kt(s), i = 0, r = (o = kt(t)).length; i < r; i++)
              Ht(o[i], a[i]);
          if (e)
            if (n)
              for (
                o = o || kt(t), a = a || kt(s), i = 0, r = o.length;
                i < r;
                i++
              )
                $t(o[i], a[i]);
            else $t(t, s);
          return (
            (a = kt(s, "script")).length > 0 && St(a, !l && kt(t, "script")), s
          );
        },
        cleanData: function (t) {
          for (
            var e, n, i, r = A.event.special, o = 0;
            void 0 !== (n = t[o]);
            o++
          )
            if (rt(n)) {
              if ((e = n[at.expando])) {
                if (e.events)
                  for (i in e.events)
                    r[i] ? A.event.remove(n, i) : A.removeEvent(n, i, e.handle);
                n[at.expando] = void 0;
              }
              n[st.expando] && (n[st.expando] = void 0);
            }
        },
      }),
        A.fn.extend({
          detach: function (t) {
            return Ut(this, t, !0);
          },
          remove: function (t) {
            return Ut(this, t);
          },
          text: function (t) {
            return Q(
              this,
              function (t) {
                return void 0 === t
                  ? A.text(this)
                  : this.empty().each(function () {
                      (1 !== this.nodeType &&
                        11 !== this.nodeType &&
                        9 !== this.nodeType) ||
                        (this.textContent = t);
                    });
              },
              null,
              t,
              arguments.length
            );
          },
          append: function () {
            return Yt(this, arguments, function (t) {
              (1 !== this.nodeType &&
                11 !== this.nodeType &&
                9 !== this.nodeType) ||
                Nt(this, t).appendChild(t);
            });
          },
          prepend: function () {
            return Yt(this, arguments, function (t) {
              if (
                1 === this.nodeType ||
                11 === this.nodeType ||
                9 === this.nodeType
              ) {
                var e = Nt(this, t);
                e.insertBefore(t, e.firstChild);
              }
            });
          },
          before: function () {
            return Yt(this, arguments, function (t) {
              this.parentNode && this.parentNode.insertBefore(t, this);
            });
          },
          after: function () {
            return Yt(this, arguments, function (t) {
              this.parentNode &&
                this.parentNode.insertBefore(t, this.nextSibling);
            });
          },
          empty: function () {
            for (var t, e = 0; null != (t = this[e]); e++)
              1 === t.nodeType &&
                (A.cleanData(kt(t, !1)), (t.textContent = ""));
            return this;
          },
          clone: function (t, e) {
            return (
              (t = null != t && t),
              (e = null == e ? t : e),
              this.map(function () {
                return A.clone(this, t, e);
              })
            );
          },
          html: function (t) {
            return Q(
              this,
              function (t) {
                var e = this[0] || {},
                  n = 0,
                  i = this.length;
                if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                if (
                  "string" == typeof t &&
                  !Rt.test(t) &&
                  !Ct[(xt.exec(t) || ["", ""])[1].toLowerCase()]
                ) {
                  t = A.htmlPrefilter(t);
                  try {
                    for (; n < i; n++)
                      1 === (e = this[n] || {}).nodeType &&
                        (A.cleanData(kt(e, !1)), (e.innerHTML = t));
                    e = 0;
                  } catch (t) {}
                }
                e && this.empty().append(t);
              },
              null,
              t,
              arguments.length
            );
          },
          replaceWith: function () {
            var t = [];
            return Yt(
              this,
              arguments,
              function (e) {
                var n = this.parentNode;
                A.inArray(this, t) < 0 &&
                  (A.cleanData(kt(this)), n && n.replaceChild(e, this));
              },
              t
            );
          },
        }),
        A.each(
          {
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith",
          },
          function (t, e) {
            A.fn[t] = function (t) {
              for (
                var n, i = [], r = A(t), o = r.length - 1, a = 0;
                a <= o;
                a++
              )
                (n = a === o ? this : this.clone(!0)),
                  A(r[a])[e](n),
                  c.apply(i, n.get());
              return this.pushStack(i);
            };
          }
        );
      var Xt = new RegExp("^(" + ut + ")(?!px)[a-z%]+$", "i"),
        Vt = /^--/,
        Gt = function (t) {
          var e = t.ownerDocument.defaultView;
          return (e && e.opener) || (e = n), e.getComputedStyle(t);
        },
        Kt = function (t, e, n) {
          var i,
            r,
            o = {};
          for (r in e) (o[r] = t.style[r]), (t.style[r] = e[r]);
          for (r in ((i = n.call(t)), e)) t.style[r] = o[r];
          return i;
        },
        Zt = new RegExp(ht.join("|"), "i");
      function Jt(t, e, n) {
        var i,
          r,
          o,
          a,
          s = Vt.test(e),
          l = t.style;
        return (
          (n = n || Gt(t)) &&
            ((a = n.getPropertyValue(e) || n[e]),
            s && a && (a = a.replace(D, "$1") || void 0),
            "" !== a || bt(t) || (a = A.style(t, e)),
            !m.pixelBoxStyles() &&
              Xt.test(a) &&
              Zt.test(e) &&
              ((i = l.width),
              (r = l.minWidth),
              (o = l.maxWidth),
              (l.minWidth = l.maxWidth = l.width = a),
              (a = n.width),
              (l.width = i),
              (l.minWidth = r),
              (l.maxWidth = o))),
          void 0 !== a ? a + "" : a
        );
      }
      function Qt(t, e) {
        return {
          get: function () {
            if (!t()) return (this.get = e).apply(this, arguments);
            delete this.get;
          },
        };
      }
      !(function () {
        function t() {
          if (d) {
            (c.style.cssText =
              "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
              (d.style.cssText =
                "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
              ft.appendChild(c).appendChild(d);
            var t = n.getComputedStyle(d);
            (i = "1%" !== t.top),
              (l = 12 === e(t.marginLeft)),
              (d.style.right = "60%"),
              (a = 36 === e(t.right)),
              (r = 36 === e(t.width)),
              (d.style.position = "absolute"),
              (o = 12 === e(d.offsetWidth / 3)),
              ft.removeChild(c),
              (d = null);
          }
        }
        function e(t) {
          return Math.round(parseFloat(t));
        }
        var i,
          r,
          o,
          a,
          s,
          l,
          c = _.createElement("div"),
          d = _.createElement("div");
        d.style &&
          ((d.style.backgroundClip = "content-box"),
          (d.cloneNode(!0).style.backgroundClip = ""),
          (m.clearCloneStyle = "content-box" === d.style.backgroundClip),
          A.extend(m, {
            boxSizingReliable: function () {
              return t(), r;
            },
            pixelBoxStyles: function () {
              return t(), a;
            },
            pixelPosition: function () {
              return t(), i;
            },
            reliableMarginLeft: function () {
              return t(), l;
            },
            scrollboxSize: function () {
              return t(), o;
            },
            reliableTrDimensions: function () {
              var t, e, i, r;
              return (
                null == s &&
                  ((t = _.createElement("table")),
                  (e = _.createElement("tr")),
                  (i = _.createElement("div")),
                  (t.style.cssText =
                    "position:absolute;left:-11111px;border-collapse:separate"),
                  (e.style.cssText = "box-sizing:content-box;border:1px solid"),
                  (e.style.height = "1px"),
                  (i.style.height = "9px"),
                  (i.style.display = "block"),
                  ft.appendChild(t).appendChild(e).appendChild(i),
                  (r = n.getComputedStyle(e)),
                  (s =
                    parseInt(r.height, 10) +
                      parseInt(r.borderTopWidth, 10) +
                      parseInt(r.borderBottomWidth, 10) ===
                    e.offsetHeight),
                  ft.removeChild(t)),
                s
              );
            },
          }));
      })();
      var te = ["Webkit", "Moz", "ms"],
        ee = _.createElement("div").style,
        ne = {};
      function ie(t) {
        return (
          A.cssProps[t] ||
          ne[t] ||
          (t in ee
            ? t
            : (ne[t] =
                (function (t) {
                  for (
                    var e = t[0].toUpperCase() + t.slice(1), n = te.length;
                    n--;

                  )
                    if ((t = te[n] + e) in ee) return t;
                })(t) || t))
        );
      }
      var re = /^(none|table(?!-c[ea]).+)/,
        oe = { position: "absolute", visibility: "hidden", display: "block" },
        ae = { letterSpacing: "0", fontWeight: "400" };
      function se(t, e, n) {
        var i = pt.exec(e);
        return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : e;
      }
      function le(t, e, n, i, r, o) {
        var a = "width" === e ? 1 : 0,
          s = 0,
          l = 0,
          c = 0;
        if (n === (i ? "border" : "content")) return 0;
        for (; a < 4; a += 2)
          "margin" === n && (c += A.css(t, n + ht[a], !0, r)),
            i
              ? ("content" === n && (l -= A.css(t, "padding" + ht[a], !0, r)),
                "margin" !== n &&
                  (l -= A.css(t, "border" + ht[a] + "Width", !0, r)))
              : ((l += A.css(t, "padding" + ht[a], !0, r)),
                "padding" !== n
                  ? (l += A.css(t, "border" + ht[a] + "Width", !0, r))
                  : (s += A.css(t, "border" + ht[a] + "Width", !0, r)));
        return (
          !i &&
            o >= 0 &&
            (l +=
              Math.max(
                0,
                Math.ceil(
                  t["offset" + e[0].toUpperCase() + e.slice(1)] -
                    o -
                    l -
                    s -
                    0.5
                )
              ) || 0),
          l + c
        );
      }
      function ce(t, e, n) {
        var i = Gt(t),
          r =
            (!m.boxSizingReliable() || n) &&
            "border-box" === A.css(t, "boxSizing", !1, i),
          o = r,
          a = Jt(t, e, i),
          s = "offset" + e[0].toUpperCase() + e.slice(1);
        if (Xt.test(a)) {
          if (!n) return a;
          a = "auto";
        }
        return (
          ((!m.boxSizingReliable() && r) ||
            (!m.reliableTrDimensions() && z(t, "tr")) ||
            "auto" === a ||
            (!parseFloat(a) && "inline" === A.css(t, "display", !1, i))) &&
            t.getClientRects().length &&
            ((r = "border-box" === A.css(t, "boxSizing", !1, i)),
            (o = s in t) && (a = t[s])),
          (a = parseFloat(a) || 0) +
            le(t, e, n || (r ? "border" : "content"), o, i, a) +
            "px"
        );
      }
      function de(t, e, n, i, r) {
        return new de.prototype.init(t, e, n, i, r);
      }
      A.extend({
        cssHooks: {
          opacity: {
            get: function (t, e) {
              if (e) {
                var n = Jt(t, "opacity");
                return "" === n ? "1" : n;
              }
            },
          },
        },
        cssNumber: {
          animationIterationCount: !0,
          aspectRatio: !0,
          borderImageSlice: !0,
          columnCount: !0,
          flexGrow: !0,
          flexShrink: !0,
          fontWeight: !0,
          gridArea: !0,
          gridColumn: !0,
          gridColumnEnd: !0,
          gridColumnStart: !0,
          gridRow: !0,
          gridRowEnd: !0,
          gridRowStart: !0,
          lineHeight: !0,
          opacity: !0,
          order: !0,
          orphans: !0,
          scale: !0,
          widows: !0,
          zIndex: !0,
          zoom: !0,
          fillOpacity: !0,
          floodOpacity: !0,
          stopOpacity: !0,
          strokeMiterlimit: !0,
          strokeOpacity: !0,
        },
        cssProps: {},
        style: function (t, e, n, i) {
          if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
            var r,
              o,
              a,
              s = it(e),
              l = Vt.test(e),
              c = t.style;
            if (
              (l || (e = ie(s)),
              (a = A.cssHooks[e] || A.cssHooks[s]),
              void 0 === n)
            )
              return a && "get" in a && void 0 !== (r = a.get(t, !1, i))
                ? r
                : c[e];
            "string" == (o = typeof n) &&
              (r = pt.exec(n)) &&
              r[1] &&
              ((n = vt(t, e, r)), (o = "number")),
              null != n &&
                n == n &&
                ("number" !== o ||
                  l ||
                  (n += (r && r[3]) || (A.cssNumber[s] ? "" : "px")),
                m.clearCloneStyle ||
                  "" !== n ||
                  0 !== e.indexOf("background") ||
                  (c[e] = "inherit"),
                (a && "set" in a && void 0 === (n = a.set(t, n, i))) ||
                  (l ? c.setProperty(e, n) : (c[e] = n)));
          }
        },
        css: function (t, e, n, i) {
          var r,
            o,
            a,
            s = it(e);
          return (
            Vt.test(e) || (e = ie(s)),
            (a = A.cssHooks[e] || A.cssHooks[s]) &&
              "get" in a &&
              (r = a.get(t, !0, n)),
            void 0 === r && (r = Jt(t, e, i)),
            "normal" === r && e in ae && (r = ae[e]),
            "" === n || n
              ? ((o = parseFloat(r)), !0 === n || isFinite(o) ? o || 0 : r)
              : r
          );
        },
      }),
        A.each(["height", "width"], function (t, e) {
          A.cssHooks[e] = {
            get: function (t, n, i) {
              if (n)
                return !re.test(A.css(t, "display")) ||
                  (t.getClientRects().length && t.getBoundingClientRect().width)
                  ? ce(t, e, i)
                  : Kt(t, oe, function () {
                      return ce(t, e, i);
                    });
            },
            set: function (t, n, i) {
              var r,
                o = Gt(t),
                a = !m.scrollboxSize() && "absolute" === o.position,
                s = (a || i) && "border-box" === A.css(t, "boxSizing", !1, o),
                l = i ? le(t, e, i, s, o) : 0;
              return (
                s &&
                  a &&
                  (l -= Math.ceil(
                    t["offset" + e[0].toUpperCase() + e.slice(1)] -
                      parseFloat(o[e]) -
                      le(t, e, "border", !1, o) -
                      0.5
                  )),
                l &&
                  (r = pt.exec(n)) &&
                  "px" !== (r[3] || "px") &&
                  ((t.style[e] = n), (n = A.css(t, e))),
                se(0, n, l)
              );
            },
          };
        }),
        (A.cssHooks.marginLeft = Qt(m.reliableMarginLeft, function (t, e) {
          if (e)
            return (
              (parseFloat(Jt(t, "marginLeft")) ||
                t.getBoundingClientRect().left -
                  Kt(t, { marginLeft: 0 }, function () {
                    return t.getBoundingClientRect().left;
                  })) + "px"
            );
        })),
        A.each({ margin: "", padding: "", border: "Width" }, function (t, e) {
          (A.cssHooks[t + e] = {
            expand: function (n) {
              for (
                var i = 0,
                  r = {},
                  o = "string" == typeof n ? n.split(" ") : [n];
                i < 4;
                i++
              )
                r[t + ht[i] + e] = o[i] || o[i - 2] || o[0];
              return r;
            },
          }),
            "margin" !== t && (A.cssHooks[t + e].set = se);
        }),
        A.fn.extend({
          css: function (t, e) {
            return Q(
              this,
              function (t, e, n) {
                var i,
                  r,
                  o = {},
                  a = 0;
                if (Array.isArray(e)) {
                  for (i = Gt(t), r = e.length; a < r; a++)
                    o[e[a]] = A.css(t, e[a], !1, i);
                  return o;
                }
                return void 0 !== n ? A.style(t, e, n) : A.css(t, e);
              },
              t,
              e,
              arguments.length > 1
            );
          },
        }),
        (A.Tween = de),
        (de.prototype = {
          constructor: de,
          init: function (t, e, n, i, r, o) {
            (this.elem = t),
              (this.prop = n),
              (this.easing = r || A.easing._default),
              (this.options = e),
              (this.start = this.now = this.cur()),
              (this.end = i),
              (this.unit = o || (A.cssNumber[n] ? "" : "px"));
          },
          cur: function () {
            var t = de.propHooks[this.prop];
            return t && t.get ? t.get(this) : de.propHooks._default.get(this);
          },
          run: function (t) {
            var e,
              n = de.propHooks[this.prop];
            return (
              this.options.duration
                ? (this.pos = e =
                    A.easing[this.easing](
                      t,
                      this.options.duration * t,
                      0,
                      1,
                      this.options.duration
                    ))
                : (this.pos = e = t),
              (this.now = (this.end - this.start) * e + this.start),
              this.options.step &&
                this.options.step.call(this.elem, this.now, this),
              n && n.set ? n.set(this) : de.propHooks._default.set(this),
              this
            );
          },
        }),
        (de.prototype.init.prototype = de.prototype),
        (de.propHooks = {
          _default: {
            get: function (t) {
              var e;
              return 1 !== t.elem.nodeType ||
                (null != t.elem[t.prop] && null == t.elem.style[t.prop])
                ? t.elem[t.prop]
                : (e = A.css(t.elem, t.prop, "")) && "auto" !== e
                ? e
                : 0;
            },
            set: function (t) {
              A.fx.step[t.prop]
                ? A.fx.step[t.prop](t)
                : 1 !== t.elem.nodeType ||
                  (!A.cssHooks[t.prop] && null == t.elem.style[ie(t.prop)])
                ? (t.elem[t.prop] = t.now)
                : A.style(t.elem, t.prop, t.now + t.unit);
            },
          },
        }),
        (de.propHooks.scrollTop = de.propHooks.scrollLeft =
          {
            set: function (t) {
              t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now);
            },
          }),
        (A.easing = {
          linear: function (t) {
            return t;
          },
          swing: function (t) {
            return 0.5 - Math.cos(t * Math.PI) / 2;
          },
          _default: "swing",
        }),
        (A.fx = de.prototype.init),
        (A.fx.step = {});
      var ue,
        pe,
        he = /^(?:toggle|show|hide)$/,
        fe = /queueHooks$/;
      function be() {
        pe &&
          (!1 === _.hidden && n.requestAnimationFrame
            ? n.requestAnimationFrame(be)
            : n.setTimeout(be, A.fx.interval),
          A.fx.tick());
      }
      function me() {
        return (
          n.setTimeout(function () {
            ue = void 0;
          }),
          (ue = Date.now())
        );
      }
      function ge(t, e) {
        var n,
          i = 0,
          r = { height: t };
        for (e = e ? 1 : 0; i < 4; i += 2 - e)
          r["margin" + (n = ht[i])] = r["padding" + n] = t;
        return e && (r.opacity = r.width = t), r;
      }
      function ve(t, e, n) {
        for (
          var i,
            r = (_e.tweeners[e] || []).concat(_e.tweeners["*"]),
            o = 0,
            a = r.length;
          o < a;
          o++
        )
          if ((i = r[o].call(n, e, t))) return i;
      }
      function _e(t, e, n) {
        var i,
          r,
          o = 0,
          a = _e.prefilters.length,
          s = A.Deferred().always(function () {
            delete l.elem;
          }),
          l = function () {
            if (r) return !1;
            for (
              var e = ue || me(),
                n = Math.max(0, c.startTime + c.duration - e),
                i = 1 - (n / c.duration || 0),
                o = 0,
                a = c.tweens.length;
              o < a;
              o++
            )
              c.tweens[o].run(i);
            return (
              s.notifyWith(t, [c, i, n]),
              i < 1 && a
                ? n
                : (a || s.notifyWith(t, [c, 1, 0]), s.resolveWith(t, [c]), !1)
            );
          },
          c = s.promise({
            elem: t,
            props: A.extend({}, e),
            opts: A.extend(
              !0,
              { specialEasing: {}, easing: A.easing._default },
              n
            ),
            originalProperties: e,
            originalOptions: n,
            startTime: ue || me(),
            duration: n.duration,
            tweens: [],
            createTween: function (e, n) {
              var i = A.Tween(
                t,
                c.opts,
                e,
                n,
                c.opts.specialEasing[e] || c.opts.easing
              );
              return c.tweens.push(i), i;
            },
            stop: function (e) {
              var n = 0,
                i = e ? c.tweens.length : 0;
              if (r) return this;
              for (r = !0; n < i; n++) c.tweens[n].run(1);
              return (
                e
                  ? (s.notifyWith(t, [c, 1, 0]), s.resolveWith(t, [c, e]))
                  : s.rejectWith(t, [c, e]),
                this
              );
            },
          }),
          d = c.props;
        for (
          (function (t, e) {
            var n, i, r, o, a;
            for (n in t)
              if (
                ((r = e[(i = it(n))]),
                (o = t[n]),
                Array.isArray(o) && ((r = o[1]), (o = t[n] = o[0])),
                n !== i && ((t[i] = o), delete t[n]),
                (a = A.cssHooks[i]) && ("expand" in a))
              )
                for (n in ((o = a.expand(o)), delete t[i], o))
                  (n in t) || ((t[n] = o[n]), (e[n] = r));
              else e[i] = r;
          })(d, c.opts.specialEasing);
          o < a;
          o++
        )
          if ((i = _e.prefilters[o].call(c, t, d, c.opts)))
            return (
              g(i.stop) &&
                (A._queueHooks(c.elem, c.opts.queue).stop = i.stop.bind(i)),
              i
            );
        return (
          A.map(d, ve, c),
          g(c.opts.start) && c.opts.start.call(t, c),
          c
            .progress(c.opts.progress)
            .done(c.opts.done, c.opts.complete)
            .fail(c.opts.fail)
            .always(c.opts.always),
          A.fx.timer(A.extend(l, { elem: t, anim: c, queue: c.opts.queue })),
          c
        );
      }
      (A.Animation = A.extend(_e, {
        tweeners: {
          "*": [
            function (t, e) {
              var n = this.createTween(t, e);
              return vt(n.elem, t, pt.exec(e), n), n;
            },
          ],
        },
        tweener: function (t, e) {
          g(t) ? ((e = t), (t = ["*"])) : (t = t.match(U));
          for (var n, i = 0, r = t.length; i < r; i++)
            (n = t[i]),
              (_e.tweeners[n] = _e.tweeners[n] || []),
              _e.tweeners[n].unshift(e);
        },
        prefilters: [
          function (t, e, n) {
            var i,
              r,
              o,
              a,
              s,
              l,
              c,
              d,
              u = "width" in e || "height" in e,
              p = this,
              h = {},
              f = t.style,
              b = t.nodeType && gt(t),
              m = at.get(t, "fxshow");
            for (i in (n.queue ||
              (null == (a = A._queueHooks(t, "fx")).unqueued &&
                ((a.unqueued = 0),
                (s = a.empty.fire),
                (a.empty.fire = function () {
                  a.unqueued || s();
                })),
              a.unqueued++,
              p.always(function () {
                p.always(function () {
                  a.unqueued--, A.queue(t, "fx").length || a.empty.fire();
                });
              })),
            e))
              if (((r = e[i]), he.test(r))) {
                if (
                  (delete e[i],
                  (o = o || "toggle" === r),
                  r === (b ? "hide" : "show"))
                ) {
                  if ("show" !== r || !m || void 0 === m[i]) continue;
                  b = !0;
                }
                h[i] = (m && m[i]) || A.style(t, i);
              }
            if ((l = !A.isEmptyObject(e)) || !A.isEmptyObject(h))
              for (i in (u &&
                1 === t.nodeType &&
                ((n.overflow = [f.overflow, f.overflowX, f.overflowY]),
                null == (c = m && m.display) && (c = at.get(t, "display")),
                "none" === (d = A.css(t, "display")) &&
                  (c
                    ? (d = c)
                    : (Mt([t], !0),
                      (c = t.style.display || c),
                      (d = A.css(t, "display")),
                      Mt([t]))),
                ("inline" === d || ("inline-block" === d && null != c)) &&
                  "none" === A.css(t, "float") &&
                  (l ||
                    (p.done(function () {
                      f.display = c;
                    }),
                    null == c &&
                      ((d = f.display), (c = "none" === d ? "" : d))),
                  (f.display = "inline-block"))),
              n.overflow &&
                ((f.overflow = "hidden"),
                p.always(function () {
                  (f.overflow = n.overflow[0]),
                    (f.overflowX = n.overflow[1]),
                    (f.overflowY = n.overflow[2]);
                })),
              (l = !1),
              h))
                l ||
                  (m
                    ? "hidden" in m && (b = m.hidden)
                    : (m = at.access(t, "fxshow", { display: c })),
                  o && (m.hidden = !b),
                  b && Mt([t], !0),
                  p.done(function () {
                    for (i in (b || Mt([t]), at.remove(t, "fxshow"), h))
                      A.style(t, i, h[i]);
                  })),
                  (l = ve(b ? m[i] : 0, i, p)),
                  i in m ||
                    ((m[i] = l.start), b && ((l.end = l.start), (l.start = 0)));
          },
        ],
        prefilter: function (t, e) {
          e ? _e.prefilters.unshift(t) : _e.prefilters.push(t);
        },
      })),
        (A.speed = function (t, e, n) {
          var i =
            t && "object" == typeof t
              ? A.extend({}, t)
              : {
                  complete: n || (!n && e) || (g(t) && t),
                  duration: t,
                  easing: (n && e) || (e && !g(e) && e),
                };
          return (
            A.fx.off
              ? (i.duration = 0)
              : "number" != typeof i.duration &&
                (i.duration in A.fx.speeds
                  ? (i.duration = A.fx.speeds[i.duration])
                  : (i.duration = A.fx.speeds._default)),
            (null != i.queue && !0 !== i.queue) || (i.queue = "fx"),
            (i.old = i.complete),
            (i.complete = function () {
              g(i.old) && i.old.call(this), i.queue && A.dequeue(this, i.queue);
            }),
            i
          );
        }),
        A.fn.extend({
          fadeTo: function (t, e, n, i) {
            return this.filter(gt)
              .css("opacity", 0)
              .show()
              .end()
              .animate({ opacity: e }, t, n, i);
          },
          animate: function (t, e, n, i) {
            var r = A.isEmptyObject(t),
              o = A.speed(e, n, i),
              a = function () {
                var e = _e(this, A.extend({}, t), o);
                (r || at.get(this, "finish")) && e.stop(!0);
              };
            return (
              (a.finish = a),
              r || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
            );
          },
          stop: function (t, e, n) {
            var i = function (t) {
              var e = t.stop;
              delete t.stop, e(n);
            };
            return (
              "string" != typeof t && ((n = e), (e = t), (t = void 0)),
              e && this.queue(t || "fx", []),
              this.each(function () {
                var e = !0,
                  r = null != t && t + "queueHooks",
                  o = A.timers,
                  a = at.get(this);
                if (r) a[r] && a[r].stop && i(a[r]);
                else for (r in a) a[r] && a[r].stop && fe.test(r) && i(a[r]);
                for (r = o.length; r--; )
                  o[r].elem !== this ||
                    (null != t && o[r].queue !== t) ||
                    (o[r].anim.stop(n), (e = !1), o.splice(r, 1));
                (!e && n) || A.dequeue(this, t);
              })
            );
          },
          finish: function (t) {
            return (
              !1 !== t && (t = t || "fx"),
              this.each(function () {
                var e,
                  n = at.get(this),
                  i = n[t + "queue"],
                  r = n[t + "queueHooks"],
                  o = A.timers,
                  a = i ? i.length : 0;
                for (
                  n.finish = !0,
                    A.queue(this, t, []),
                    r && r.stop && r.stop.call(this, !0),
                    e = o.length;
                  e--;

                )
                  o[e].elem === this &&
                    o[e].queue === t &&
                    (o[e].anim.stop(!0), o.splice(e, 1));
                for (e = 0; e < a; e++)
                  i[e] && i[e].finish && i[e].finish.call(this);
                delete n.finish;
              })
            );
          },
        }),
        A.each(["toggle", "show", "hide"], function (t, e) {
          var n = A.fn[e];
          A.fn[e] = function (t, i, r) {
            return null == t || "boolean" == typeof t
              ? n.apply(this, arguments)
              : this.animate(ge(e, !0), t, i, r);
          };
        }),
        A.each(
          {
            slideDown: ge("show"),
            slideUp: ge("hide"),
            slideToggle: ge("toggle"),
            fadeIn: { opacity: "show" },
            fadeOut: { opacity: "hide" },
            fadeToggle: { opacity: "toggle" },
          },
          function (t, e) {
            A.fn[t] = function (t, n, i) {
              return this.animate(e, t, n, i);
            };
          }
        ),
        (A.timers = []),
        (A.fx.tick = function () {
          var t,
            e = 0,
            n = A.timers;
          for (ue = Date.now(); e < n.length; e++)
            (t = n[e])() || n[e] !== t || n.splice(e--, 1);
          n.length || A.fx.stop(), (ue = void 0);
        }),
        (A.fx.timer = function (t) {
          A.timers.push(t), A.fx.start();
        }),
        (A.fx.interval = 13),
        (A.fx.start = function () {
          pe || ((pe = !0), be());
        }),
        (A.fx.stop = function () {
          pe = null;
        }),
        (A.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
        (A.fn.delay = function (t, e) {
          return (
            (t = (A.fx && A.fx.speeds[t]) || t),
            (e = e || "fx"),
            this.queue(e, function (e, i) {
              var r = n.setTimeout(e, t);
              i.stop = function () {
                n.clearTimeout(r);
              };
            })
          );
        }),
        (function () {
          var t = _.createElement("input"),
            e = _.createElement("select").appendChild(
              _.createElement("option")
            );
          (t.type = "checkbox"),
            (m.checkOn = "" !== t.value),
            (m.optSelected = e.selected),
            ((t = _.createElement("input")).value = "t"),
            (t.type = "radio"),
            (m.radioValue = "t" === t.value);
        })();
      var ye,
        Me = A.expr.attrHandle;
      A.fn.extend({
        attr: function (t, e) {
          return Q(this, A.attr, t, e, arguments.length > 1);
        },
        removeAttr: function (t) {
          return this.each(function () {
            A.removeAttr(this, t);
          });
        },
      }),
        A.extend({
          attr: function (t, e, n) {
            var i,
              r,
              o = t.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
              return void 0 === t.getAttribute
                ? A.prop(t, e, n)
                : ((1 === o && A.isXMLDoc(t)) ||
                    (r =
                      A.attrHooks[e.toLowerCase()] ||
                      (A.expr.match.bool.test(e) ? ye : void 0)),
                  void 0 !== n
                    ? null === n
                      ? void A.removeAttr(t, e)
                      : r && "set" in r && void 0 !== (i = r.set(t, n, e))
                      ? i
                      : (t.setAttribute(e, n + ""), n)
                    : r && "get" in r && null !== (i = r.get(t, e))
                    ? i
                    : null == (i = A.find.attr(t, e))
                    ? void 0
                    : i);
          },
          attrHooks: {
            type: {
              set: function (t, e) {
                if (!m.radioValue && "radio" === e && z(t, "input")) {
                  var n = t.value;
                  return t.setAttribute("type", e), n && (t.value = n), e;
                }
              },
            },
          },
          removeAttr: function (t, e) {
            var n,
              i = 0,
              r = e && e.match(U);
            if (r && 1 === t.nodeType)
              for (; (n = r[i++]); ) t.removeAttribute(n);
          },
        }),
        (ye = {
          set: function (t, e, n) {
            return !1 === e ? A.removeAttr(t, n) : t.setAttribute(n, n), n;
          },
        }),
        A.each(A.expr.match.bool.source.match(/\w+/g), function (t, e) {
          var n = Me[e] || A.find.attr;
          Me[e] = function (t, e, i) {
            var r,
              o,
              a = e.toLowerCase();
            return (
              i ||
                ((o = Me[a]),
                (Me[a] = r),
                (r = null != n(t, e, i) ? a : null),
                (Me[a] = o)),
              r
            );
          };
        });
      var Oe = /^(?:input|select|textarea|button)$/i,
        we = /^(?:a|area)$/i;
      function Ae(t) {
        return (t.match(U) || []).join(" ");
      }
      function xe(t) {
        return (t.getAttribute && t.getAttribute("class")) || "";
      }
      function ze(t) {
        return Array.isArray(t)
          ? t
          : ("string" == typeof t && t.match(U)) || [];
      }
      A.fn.extend({
        prop: function (t, e) {
          return Q(this, A.prop, t, e, arguments.length > 1);
        },
        removeProp: function (t) {
          return this.each(function () {
            delete this[A.propFix[t] || t];
          });
        },
      }),
        A.extend({
          prop: function (t, e, n) {
            var i,
              r,
              o = t.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
              return (
                (1 === o && A.isXMLDoc(t)) ||
                  ((e = A.propFix[e] || e), (r = A.propHooks[e])),
                void 0 !== n
                  ? r && "set" in r && void 0 !== (i = r.set(t, n, e))
                    ? i
                    : (t[e] = n)
                  : r && "get" in r && null !== (i = r.get(t, e))
                  ? i
                  : t[e]
              );
          },
          propHooks: {
            tabIndex: {
              get: function (t) {
                var e = A.find.attr(t, "tabindex");
                return e
                  ? parseInt(e, 10)
                  : Oe.test(t.nodeName) || (we.test(t.nodeName) && t.href)
                  ? 0
                  : -1;
              },
            },
          },
          propFix: { for: "htmlFor", class: "className" },
        }),
        m.optSelected ||
          (A.propHooks.selected = {
            get: function (t) {
              var e = t.parentNode;
              return e && e.parentNode && e.parentNode.selectedIndex, null;
            },
            set: function (t) {
              var e = t.parentNode;
              e &&
                (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex);
            },
          }),
        A.each(
          [
            "tabIndex",
            "readOnly",
            "maxLength",
            "cellSpacing",
            "cellPadding",
            "rowSpan",
            "colSpan",
            "useMap",
            "frameBorder",
            "contentEditable",
          ],
          function () {
            A.propFix[this.toLowerCase()] = this;
          }
        ),
        A.fn.extend({
          addClass: function (t) {
            var e, n, i, r, o, a;
            return g(t)
              ? this.each(function (e) {
                  A(this).addClass(t.call(this, e, xe(this)));
                })
              : (e = ze(t)).length
              ? this.each(function () {
                  if (
                    ((i = xe(this)),
                    (n = 1 === this.nodeType && " " + Ae(i) + " "))
                  ) {
                    for (o = 0; o < e.length; o++)
                      (r = e[o]),
                        n.indexOf(" " + r + " ") < 0 && (n += r + " ");
                    (a = Ae(n)), i !== a && this.setAttribute("class", a);
                  }
                })
              : this;
          },
          removeClass: function (t) {
            var e, n, i, r, o, a;
            return g(t)
              ? this.each(function (e) {
                  A(this).removeClass(t.call(this, e, xe(this)));
                })
              : arguments.length
              ? (e = ze(t)).length
                ? this.each(function () {
                    if (
                      ((i = xe(this)),
                      (n = 1 === this.nodeType && " " + Ae(i) + " "))
                    ) {
                      for (o = 0; o < e.length; o++)
                        for (r = e[o]; n.indexOf(" " + r + " ") > -1; )
                          n = n.replace(" " + r + " ", " ");
                      (a = Ae(n)), i !== a && this.setAttribute("class", a);
                    }
                  })
                : this
              : this.attr("class", "");
          },
          toggleClass: function (t, e) {
            var n,
              i,
              r,
              o,
              a = typeof t,
              s = "string" === a || Array.isArray(t);
            return g(t)
              ? this.each(function (n) {
                  A(this).toggleClass(t.call(this, n, xe(this), e), e);
                })
              : "boolean" == typeof e && s
              ? e
                ? this.addClass(t)
                : this.removeClass(t)
              : ((n = ze(t)),
                this.each(function () {
                  if (s)
                    for (o = A(this), r = 0; r < n.length; r++)
                      (i = n[r]),
                        o.hasClass(i) ? o.removeClass(i) : o.addClass(i);
                  else
                    (void 0 !== t && "boolean" !== a) ||
                      ((i = xe(this)) && at.set(this, "__className__", i),
                      this.setAttribute &&
                        this.setAttribute(
                          "class",
                          i || !1 === t
                            ? ""
                            : at.get(this, "__className__") || ""
                        ));
                }));
          },
          hasClass: function (t) {
            var e,
              n,
              i = 0;
            for (e = " " + t + " "; (n = this[i++]); )
              if (1 === n.nodeType && (" " + Ae(xe(n)) + " ").indexOf(e) > -1)
                return !0;
            return !1;
          },
        });
      var Ce = /\r/g;
      A.fn.extend({
        val: function (t) {
          var e,
            n,
            i,
            r = this[0];
          return arguments.length
            ? ((i = g(t)),
              this.each(function (n) {
                var r;
                1 === this.nodeType &&
                  (null == (r = i ? t.call(this, n, A(this).val()) : t)
                    ? (r = "")
                    : "number" == typeof r
                    ? (r += "")
                    : Array.isArray(r) &&
                      (r = A.map(r, function (t) {
                        return null == t ? "" : t + "";
                      })),
                  ((e =
                    A.valHooks[this.type] ||
                    A.valHooks[this.nodeName.toLowerCase()]) &&
                    "set" in e &&
                    void 0 !== e.set(this, r, "value")) ||
                    (this.value = r));
              }))
            : r
            ? (e =
                A.valHooks[r.type] || A.valHooks[r.nodeName.toLowerCase()]) &&
              "get" in e &&
              void 0 !== (n = e.get(r, "value"))
              ? n
              : "string" == typeof (n = r.value)
              ? n.replace(Ce, "")
              : null == n
              ? ""
              : n
            : void 0;
        },
      }),
        A.extend({
          valHooks: {
            option: {
              get: function (t) {
                var e = A.find.attr(t, "value");
                return null != e ? e : Ae(A.text(t));
              },
            },
            select: {
              get: function (t) {
                var e,
                  n,
                  i,
                  r = t.options,
                  o = t.selectedIndex,
                  a = "select-one" === t.type,
                  s = a ? null : [],
                  l = a ? o + 1 : r.length;
                for (i = o < 0 ? l : a ? o : 0; i < l; i++)
                  if (
                    ((n = r[i]).selected || i === o) &&
                    !n.disabled &&
                    (!n.parentNode.disabled || !z(n.parentNode, "optgroup"))
                  ) {
                    if (((e = A(n).val()), a)) return e;
                    s.push(e);
                  }
                return s;
              },
              set: function (t, e) {
                for (
                  var n, i, r = t.options, o = A.makeArray(e), a = r.length;
                  a--;

                )
                  ((i = r[a]).selected =
                    A.inArray(A.valHooks.option.get(i), o) > -1) && (n = !0);
                return n || (t.selectedIndex = -1), o;
              },
            },
          },
        }),
        A.each(["radio", "checkbox"], function () {
          (A.valHooks[this] = {
            set: function (t, e) {
              if (Array.isArray(e))
                return (t.checked = A.inArray(A(t).val(), e) > -1);
            },
          }),
            m.checkOn ||
              (A.valHooks[this].get = function (t) {
                return null === t.getAttribute("value") ? "on" : t.value;
              });
        });
      var ke = n.location,
        Se = { guid: Date.now() },
        Te = /\?/;
      A.parseXML = function (t) {
        var e, i;
        if (!t || "string" != typeof t) return null;
        try {
          e = new n.DOMParser().parseFromString(t, "text/xml");
        } catch (t) {}
        return (
          (i = e && e.getElementsByTagName("parsererror")[0]),
          (e && !i) ||
            A.error(
              "Invalid XML: " +
                (i
                  ? A.map(i.childNodes, function (t) {
                      return t.textContent;
                    }).join("\n")
                  : t)
            ),
          e
        );
      };
      var De = /^(?:focusinfocus|focusoutblur)$/,
        Le = function (t) {
          t.stopPropagation();
        };
      A.extend(A.event, {
        trigger: function (t, e, i, r) {
          var o,
            a,
            s,
            l,
            c,
            d,
            u,
            p,
            f = [i || _],
            b = h.call(t, "type") ? t.type : t,
            m = h.call(t, "namespace") ? t.namespace.split(".") : [];
          if (
            ((a = p = s = i = i || _),
            3 !== i.nodeType &&
              8 !== i.nodeType &&
              !De.test(b + A.event.triggered) &&
              (b.indexOf(".") > -1 &&
                ((m = b.split(".")), (b = m.shift()), m.sort()),
              (c = b.indexOf(":") < 0 && "on" + b),
              ((t = t[A.expando]
                ? t
                : new A.Event(b, "object" == typeof t && t)).isTrigger = r
                ? 2
                : 3),
              (t.namespace = m.join(".")),
              (t.rnamespace = t.namespace
                ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)")
                : null),
              (t.result = void 0),
              t.target || (t.target = i),
              (e = null == e ? [t] : A.makeArray(e, [t])),
              (u = A.event.special[b] || {}),
              r || !u.trigger || !1 !== u.trigger.apply(i, e)))
          ) {
            if (!r && !u.noBubble && !v(i)) {
              for (
                l = u.delegateType || b, De.test(l + b) || (a = a.parentNode);
                a;
                a = a.parentNode
              )
                f.push(a), (s = a);
              s === (i.ownerDocument || _) &&
                f.push(s.defaultView || s.parentWindow || n);
            }
            for (o = 0; (a = f[o++]) && !t.isPropagationStopped(); )
              (p = a),
                (t.type = o > 1 ? l : u.bindType || b),
                (d =
                  (at.get(a, "events") || Object.create(null))[t.type] &&
                  at.get(a, "handle")) && d.apply(a, e),
                (d = c && a[c]) &&
                  d.apply &&
                  rt(a) &&
                  ((t.result = d.apply(a, e)),
                  !1 === t.result && t.preventDefault());
            return (
              (t.type = b),
              r ||
                t.isDefaultPrevented() ||
                (u._default && !1 !== u._default.apply(f.pop(), e)) ||
                !rt(i) ||
                (c &&
                  g(i[b]) &&
                  !v(i) &&
                  ((s = i[c]) && (i[c] = null),
                  (A.event.triggered = b),
                  t.isPropagationStopped() && p.addEventListener(b, Le),
                  i[b](),
                  t.isPropagationStopped() && p.removeEventListener(b, Le),
                  (A.event.triggered = void 0),
                  s && (i[c] = s))),
              t.result
            );
          }
        },
        simulate: function (t, e, n) {
          var i = A.extend(new A.Event(), n, { type: t, isSimulated: !0 });
          A.event.trigger(i, null, e);
        },
      }),
        A.fn.extend({
          trigger: function (t, e) {
            return this.each(function () {
              A.event.trigger(t, e, this);
            });
          },
          triggerHandler: function (t, e) {
            var n = this[0];
            if (n) return A.event.trigger(t, e, n, !0);
          },
        });
      var qe = /\[\]$/,
        Ee = /\r?\n/g,
        je = /^(?:submit|button|image|reset|file)$/i,
        Pe = /^(?:input|select|textarea|keygen)/i;
      function Re(t, e, n, i) {
        var r;
        if (Array.isArray(e))
          A.each(e, function (e, r) {
            n || qe.test(t)
              ? i(t, r)
              : Re(
                  t + "[" + ("object" == typeof r && null != r ? e : "") + "]",
                  r,
                  n,
                  i
                );
          });
        else if (n || "object" !== O(e)) i(t, e);
        else for (r in e) Re(t + "[" + r + "]", e[r], n, i);
      }
      (A.param = function (t, e) {
        var n,
          i = [],
          r = function (t, e) {
            var n = g(e) ? e() : e;
            i[i.length] =
              encodeURIComponent(t) +
              "=" +
              encodeURIComponent(null == n ? "" : n);
          };
        if (null == t) return "";
        if (Array.isArray(t) || (t.jquery && !A.isPlainObject(t)))
          A.each(t, function () {
            r(this.name, this.value);
          });
        else for (n in t) Re(n, t[n], e, r);
        return i.join("&");
      }),
        A.fn.extend({
          serialize: function () {
            return A.param(this.serializeArray());
          },
          serializeArray: function () {
            return this.map(function () {
              var t = A.prop(this, "elements");
              return t ? A.makeArray(t) : this;
            })
              .filter(function () {
                var t = this.type;
                return (
                  this.name &&
                  !A(this).is(":disabled") &&
                  Pe.test(this.nodeName) &&
                  !je.test(t) &&
                  (this.checked || !At.test(t))
                );
              })
              .map(function (t, e) {
                var n = A(this).val();
                return null == n
                  ? null
                  : Array.isArray(n)
                  ? A.map(n, function (t) {
                      return { name: e.name, value: t.replace(Ee, "\r\n") };
                    })
                  : { name: e.name, value: n.replace(Ee, "\r\n") };
              })
              .get();
          },
        });
      var Ie = /%20/g,
        We = /#.*$/,
        Ne = /([?&])_=[^&]*/,
        Be = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Fe = /^(?:GET|HEAD)$/,
        $e = /^\/\//,
        He = {},
        Ye = {},
        Ue = "*/".concat("*"),
        Xe = _.createElement("a");
      function Ve(t) {
        return function (e, n) {
          "string" != typeof e && ((n = e), (e = "*"));
          var i,
            r = 0,
            o = e.toLowerCase().match(U) || [];
          if (g(n))
            for (; (i = o[r++]); )
              "+" === i[0]
                ? ((i = i.slice(1) || "*"), (t[i] = t[i] || []).unshift(n))
                : (t[i] = t[i] || []).push(n);
        };
      }
      function Ge(t, e, n, i) {
        var r = {},
          o = t === Ye;
        function a(s) {
          var l;
          return (
            (r[s] = !0),
            A.each(t[s] || [], function (t, s) {
              var c = s(e, n, i);
              return "string" != typeof c || o || r[c]
                ? o
                  ? !(l = c)
                  : void 0
                : (e.dataTypes.unshift(c), a(c), !1);
            }),
            l
          );
        }
        return a(e.dataTypes[0]) || (!r["*"] && a("*"));
      }
      function Ke(t, e) {
        var n,
          i,
          r = A.ajaxSettings.flatOptions || {};
        for (n in e) void 0 !== e[n] && ((r[n] ? t : i || (i = {}))[n] = e[n]);
        return i && A.extend(!0, t, i), t;
      }
      (Xe.href = ke.href),
        A.extend({
          active: 0,
          lastModified: {},
          etag: {},
          ajaxSettings: {
            url: ke.href,
            type: "GET",
            isLocal:
              /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
                ke.protocol
              ),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
              "*": Ue,
              text: "text/plain",
              html: "text/html",
              xml: "application/xml, text/xml",
              json: "application/json, text/javascript",
            },
            contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
            responseFields: {
              xml: "responseXML",
              text: "responseText",
              json: "responseJSON",
            },
            converters: {
              "* text": String,
              "text html": !0,
              "text json": JSON.parse,
              "text xml": A.parseXML,
            },
            flatOptions: { url: !0, context: !0 },
          },
          ajaxSetup: function (t, e) {
            return e ? Ke(Ke(t, A.ajaxSettings), e) : Ke(A.ajaxSettings, t);
          },
          ajaxPrefilter: Ve(He),
          ajaxTransport: Ve(Ye),
          ajax: function (t, e) {
            "object" == typeof t && ((e = t), (t = void 0)), (e = e || {});
            var i,
              r,
              o,
              a,
              s,
              l,
              c,
              d,
              u,
              p,
              h = A.ajaxSetup({}, e),
              f = h.context || h,
              b = h.context && (f.nodeType || f.jquery) ? A(f) : A.event,
              m = A.Deferred(),
              g = A.Callbacks("once memory"),
              v = h.statusCode || {},
              y = {},
              M = {},
              O = "canceled",
              w = {
                readyState: 0,
                getResponseHeader: function (t) {
                  var e;
                  if (c) {
                    if (!a)
                      for (a = {}; (e = Be.exec(o)); )
                        a[e[1].toLowerCase() + " "] = (
                          a[e[1].toLowerCase() + " "] || []
                        ).concat(e[2]);
                    e = a[t.toLowerCase() + " "];
                  }
                  return null == e ? null : e.join(", ");
                },
                getAllResponseHeaders: function () {
                  return c ? o : null;
                },
                setRequestHeader: function (t, e) {
                  return (
                    null == c &&
                      ((t = M[t.toLowerCase()] = M[t.toLowerCase()] || t),
                      (y[t] = e)),
                    this
                  );
                },
                overrideMimeType: function (t) {
                  return null == c && (h.mimeType = t), this;
                },
                statusCode: function (t) {
                  var e;
                  if (t)
                    if (c) w.always(t[w.status]);
                    else for (e in t) v[e] = [v[e], t[e]];
                  return this;
                },
                abort: function (t) {
                  var e = t || O;
                  return i && i.abort(e), x(0, e), this;
                },
              };
            if (
              (m.promise(w),
              (h.url = ((t || h.url || ke.href) + "").replace(
                $e,
                ke.protocol + "//"
              )),
              (h.type = e.method || e.type || h.method || h.type),
              (h.dataTypes = (h.dataType || "*").toLowerCase().match(U) || [
                "",
              ]),
              null == h.crossDomain)
            ) {
              l = _.createElement("a");
              try {
                (l.href = h.url),
                  (l.href = l.href),
                  (h.crossDomain =
                    Xe.protocol + "//" + Xe.host != l.protocol + "//" + l.host);
              } catch (t) {
                h.crossDomain = !0;
              }
            }
            if (
              (h.data &&
                h.processData &&
                "string" != typeof h.data &&
                (h.data = A.param(h.data, h.traditional)),
              Ge(He, h, e, w),
              c)
            )
              return w;
            for (u in ((d = A.event && h.global) &&
              0 == A.active++ &&
              A.event.trigger("ajaxStart"),
            (h.type = h.type.toUpperCase()),
            (h.hasContent = !Fe.test(h.type)),
            (r = h.url.replace(We, "")),
            h.hasContent
              ? h.data &&
                h.processData &&
                0 ===
                  (h.contentType || "").indexOf(
                    "application/x-www-form-urlencoded"
                  ) &&
                (h.data = h.data.replace(Ie, "+"))
              : ((p = h.url.slice(r.length)),
                h.data &&
                  (h.processData || "string" == typeof h.data) &&
                  ((r += (Te.test(r) ? "&" : "?") + h.data), delete h.data),
                !1 === h.cache &&
                  ((r = r.replace(Ne, "$1")),
                  (p = (Te.test(r) ? "&" : "?") + "_=" + Se.guid++ + p)),
                (h.url = r + p)),
            h.ifModified &&
              (A.lastModified[r] &&
                w.setRequestHeader("If-Modified-Since", A.lastModified[r]),
              A.etag[r] && w.setRequestHeader("If-None-Match", A.etag[r])),
            ((h.data && h.hasContent && !1 !== h.contentType) ||
              e.contentType) &&
              w.setRequestHeader("Content-Type", h.contentType),
            w.setRequestHeader(
              "Accept",
              h.dataTypes[0] && h.accepts[h.dataTypes[0]]
                ? h.accepts[h.dataTypes[0]] +
                    ("*" !== h.dataTypes[0] ? ", " + Ue + "; q=0.01" : "")
                : h.accepts["*"]
            ),
            h.headers))
              w.setRequestHeader(u, h.headers[u]);
            if (h.beforeSend && (!1 === h.beforeSend.call(f, w, h) || c))
              return w.abort();
            if (
              ((O = "abort"),
              g.add(h.complete),
              w.done(h.success),
              w.fail(h.error),
              (i = Ge(Ye, h, e, w)))
            ) {
              if (((w.readyState = 1), d && b.trigger("ajaxSend", [w, h]), c))
                return w;
              h.async &&
                h.timeout > 0 &&
                (s = n.setTimeout(function () {
                  w.abort("timeout");
                }, h.timeout));
              try {
                (c = !1), i.send(y, x);
              } catch (t) {
                if (c) throw t;
                x(-1, t);
              }
            } else x(-1, "No Transport");
            function x(t, e, a, l) {
              var u,
                p,
                _,
                y,
                M,
                O = e;
              c ||
                ((c = !0),
                s && n.clearTimeout(s),
                (i = void 0),
                (o = l || ""),
                (w.readyState = t > 0 ? 4 : 0),
                (u = (t >= 200 && t < 300) || 304 === t),
                a &&
                  (y = (function (t, e, n) {
                    for (
                      var i, r, o, a, s = t.contents, l = t.dataTypes;
                      "*" === l[0];

                    )
                      l.shift(),
                        void 0 === i &&
                          (i =
                            t.mimeType || e.getResponseHeader("Content-Type"));
                    if (i)
                      for (r in s)
                        if (s[r] && s[r].test(i)) {
                          l.unshift(r);
                          break;
                        }
                    if (l[0] in n) o = l[0];
                    else {
                      for (r in n) {
                        if (!l[0] || t.converters[r + " " + l[0]]) {
                          o = r;
                          break;
                        }
                        a || (a = r);
                      }
                      o = o || a;
                    }
                    if (o) return o !== l[0] && l.unshift(o), n[o];
                  })(h, w, a)),
                !u &&
                  A.inArray("script", h.dataTypes) > -1 &&
                  A.inArray("json", h.dataTypes) < 0 &&
                  (h.converters["text script"] = function () {}),
                (y = (function (t, e, n, i) {
                  var r,
                    o,
                    a,
                    s,
                    l,
                    c = {},
                    d = t.dataTypes.slice();
                  if (d[1])
                    for (a in t.converters)
                      c[a.toLowerCase()] = t.converters[a];
                  for (o = d.shift(); o; )
                    if (
                      (t.responseFields[o] && (n[t.responseFields[o]] = e),
                      !l &&
                        i &&
                        t.dataFilter &&
                        (e = t.dataFilter(e, t.dataType)),
                      (l = o),
                      (o = d.shift()))
                    )
                      if ("*" === o) o = l;
                      else if ("*" !== l && l !== o) {
                        if (!(a = c[l + " " + o] || c["* " + o]))
                          for (r in c)
                            if (
                              (s = r.split(" "))[1] === o &&
                              (a = c[l + " " + s[0]] || c["* " + s[0]])
                            ) {
                              !0 === a
                                ? (a = c[r])
                                : !0 !== c[r] && ((o = s[0]), d.unshift(s[1]));
                              break;
                            }
                        if (!0 !== a)
                          if (a && t.throws) e = a(e);
                          else
                            try {
                              e = a(e);
                            } catch (t) {
                              return {
                                state: "parsererror",
                                error: a
                                  ? t
                                  : "No conversion from " + l + " to " + o,
                              };
                            }
                      }
                  return { state: "success", data: e };
                })(h, y, w, u)),
                u
                  ? (h.ifModified &&
                      ((M = w.getResponseHeader("Last-Modified")) &&
                        (A.lastModified[r] = M),
                      (M = w.getResponseHeader("etag")) && (A.etag[r] = M)),
                    204 === t || "HEAD" === h.type
                      ? (O = "nocontent")
                      : 304 === t
                      ? (O = "notmodified")
                      : ((O = y.state), (p = y.data), (u = !(_ = y.error))))
                  : ((_ = O), (!t && O) || ((O = "error"), t < 0 && (t = 0))),
                (w.status = t),
                (w.statusText = (e || O) + ""),
                u ? m.resolveWith(f, [p, O, w]) : m.rejectWith(f, [w, O, _]),
                w.statusCode(v),
                (v = void 0),
                d &&
                  b.trigger(u ? "ajaxSuccess" : "ajaxError", [w, h, u ? p : _]),
                g.fireWith(f, [w, O]),
                d &&
                  (b.trigger("ajaxComplete", [w, h]),
                  --A.active || A.event.trigger("ajaxStop")));
            }
            return w;
          },
          getJSON: function (t, e, n) {
            return A.get(t, e, n, "json");
          },
          getScript: function (t, e) {
            return A.get(t, void 0, e, "script");
          },
        }),
        A.each(["get", "post"], function (t, e) {
          A[e] = function (t, n, i, r) {
            return (
              g(n) && ((r = r || i), (i = n), (n = void 0)),
              A.ajax(
                A.extend(
                  { url: t, type: e, dataType: r, data: n, success: i },
                  A.isPlainObject(t) && t
                )
              )
            );
          };
        }),
        A.ajaxPrefilter(function (t) {
          var e;
          for (e in t.headers)
            "content-type" === e.toLowerCase() &&
              (t.contentType = t.headers[e] || "");
        }),
        (A._evalUrl = function (t, e, n) {
          return A.ajax({
            url: t,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: { "text script": function () {} },
            dataFilter: function (t) {
              A.globalEval(t, e, n);
            },
          });
        }),
        A.fn.extend({
          wrapAll: function (t) {
            var e;
            return (
              this[0] &&
                (g(t) && (t = t.call(this[0])),
                (e = A(t, this[0].ownerDocument).eq(0).clone(!0)),
                this[0].parentNode && e.insertBefore(this[0]),
                e
                  .map(function () {
                    for (var t = this; t.firstElementChild; )
                      t = t.firstElementChild;
                    return t;
                  })
                  .append(this)),
              this
            );
          },
          wrapInner: function (t) {
            return g(t)
              ? this.each(function (e) {
                  A(this).wrapInner(t.call(this, e));
                })
              : this.each(function () {
                  var e = A(this),
                    n = e.contents();
                  n.length ? n.wrapAll(t) : e.append(t);
                });
          },
          wrap: function (t) {
            var e = g(t);
            return this.each(function (n) {
              A(this).wrapAll(e ? t.call(this, n) : t);
            });
          },
          unwrap: function (t) {
            return (
              this.parent(t)
                .not("body")
                .each(function () {
                  A(this).replaceWith(this.childNodes);
                }),
              this
            );
          },
        }),
        (A.expr.pseudos.hidden = function (t) {
          return !A.expr.pseudos.visible(t);
        }),
        (A.expr.pseudos.visible = function (t) {
          return !!(
            t.offsetWidth ||
            t.offsetHeight ||
            t.getClientRects().length
          );
        }),
        (A.ajaxSettings.xhr = function () {
          try {
            return new n.XMLHttpRequest();
          } catch (t) {}
        });
      var Ze = { 0: 200, 1223: 204 },
        Je = A.ajaxSettings.xhr();
      (m.cors = !!Je && "withCredentials" in Je),
        (m.ajax = Je = !!Je),
        A.ajaxTransport(function (t) {
          var e, i;
          if (m.cors || (Je && !t.crossDomain))
            return {
              send: function (r, o) {
                var a,
                  s = t.xhr();
                if (
                  (s.open(t.type, t.url, t.async, t.username, t.password),
                  t.xhrFields)
                )
                  for (a in t.xhrFields) s[a] = t.xhrFields[a];
                for (a in (t.mimeType &&
                  s.overrideMimeType &&
                  s.overrideMimeType(t.mimeType),
                t.crossDomain ||
                  r["X-Requested-With"] ||
                  (r["X-Requested-With"] = "XMLHttpRequest"),
                r))
                  s.setRequestHeader(a, r[a]);
                (e = function (t) {
                  return function () {
                    e &&
                      ((e =
                        i =
                        s.onload =
                        s.onerror =
                        s.onabort =
                        s.ontimeout =
                        s.onreadystatechange =
                          null),
                      "abort" === t
                        ? s.abort()
                        : "error" === t
                        ? "number" != typeof s.status
                          ? o(0, "error")
                          : o(s.status, s.statusText)
                        : o(
                            Ze[s.status] || s.status,
                            s.statusText,
                            "text" !== (s.responseType || "text") ||
                              "string" != typeof s.responseText
                              ? { binary: s.response }
                              : { text: s.responseText },
                            s.getAllResponseHeaders()
                          ));
                  };
                }),
                  (s.onload = e()),
                  (i = s.onerror = s.ontimeout = e("error")),
                  void 0 !== s.onabort
                    ? (s.onabort = i)
                    : (s.onreadystatechange = function () {
                        4 === s.readyState &&
                          n.setTimeout(function () {
                            e && i();
                          });
                      }),
                  (e = e("abort"));
                try {
                  s.send((t.hasContent && t.data) || null);
                } catch (t) {
                  if (e) throw t;
                }
              },
              abort: function () {
                e && e();
              },
            };
        }),
        A.ajaxPrefilter(function (t) {
          t.crossDomain && (t.contents.script = !1);
        }),
        A.ajaxSetup({
          accepts: {
            script:
              "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
          },
          contents: { script: /\b(?:java|ecma)script\b/ },
          converters: {
            "text script": function (t) {
              return A.globalEval(t), t;
            },
          },
        }),
        A.ajaxPrefilter("script", function (t) {
          void 0 === t.cache && (t.cache = !1),
            t.crossDomain && (t.type = "GET");
        }),
        A.ajaxTransport("script", function (t) {
          var e, n;
          if (t.crossDomain || t.scriptAttrs)
            return {
              send: function (i, r) {
                (e = A("<script>")
                  .attr(t.scriptAttrs || {})
                  .prop({ charset: t.scriptCharset, src: t.url })
                  .on(
                    "load error",
                    (n = function (t) {
                      e.remove(),
                        (n = null),
                        t && r("error" === t.type ? 404 : 200, t.type);
                    })
                  )),
                  _.head.appendChild(e[0]);
              },
              abort: function () {
                n && n();
              },
            };
        });
      var Qe,
        tn = [],
        en = /(=)\?(?=&|$)|\?\?/;
      A.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
          var t = tn.pop() || A.expando + "_" + Se.guid++;
          return (this[t] = !0), t;
        },
      }),
        A.ajaxPrefilter("json jsonp", function (t, e, i) {
          var r,
            o,
            a,
            s =
              !1 !== t.jsonp &&
              (en.test(t.url)
                ? "url"
                : "string" == typeof t.data &&
                  0 ===
                    (t.contentType || "").indexOf(
                      "application/x-www-form-urlencoded"
                    ) &&
                  en.test(t.data) &&
                  "data");
          if (s || "jsonp" === t.dataTypes[0])
            return (
              (r = t.jsonpCallback =
                g(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback),
              s
                ? (t[s] = t[s].replace(en, "$1" + r))
                : !1 !== t.jsonp &&
                  (t.url += (Te.test(t.url) ? "&" : "?") + t.jsonp + "=" + r),
              (t.converters["script json"] = function () {
                return a || A.error(r + " was not called"), a[0];
              }),
              (t.dataTypes[0] = "json"),
              (o = n[r]),
              (n[r] = function () {
                a = arguments;
              }),
              i.always(function () {
                void 0 === o ? A(n).removeProp(r) : (n[r] = o),
                  t[r] && ((t.jsonpCallback = e.jsonpCallback), tn.push(r)),
                  a && g(o) && o(a[0]),
                  (a = o = void 0);
              }),
              "script"
            );
        }),
        (m.createHTMLDocument =
          (((Qe = _.implementation.createHTMLDocument("").body).innerHTML =
            "<form></form><form></form>"),
          2 === Qe.childNodes.length)),
        (A.parseHTML = function (t, e, n) {
          return "string" != typeof t
            ? []
            : ("boolean" == typeof e && ((n = e), (e = !1)),
              e ||
                (m.createHTMLDocument
                  ? (((i = (e =
                      _.implementation.createHTMLDocument("")).createElement(
                      "base"
                    )).href = _.location.href),
                    e.head.appendChild(i))
                  : (e = _)),
              (o = !n && []),
              (r = W.exec(t))
                ? [e.createElement(r[1])]
                : ((r = Dt([t], e, o)),
                  o && o.length && A(o).remove(),
                  A.merge([], r.childNodes)));
          var i, r, o;
        }),
        (A.fn.load = function (t, e, n) {
          var i,
            r,
            o,
            a = this,
            s = t.indexOf(" ");
          return (
            s > -1 && ((i = Ae(t.slice(s))), (t = t.slice(0, s))),
            g(e)
              ? ((n = e), (e = void 0))
              : e && "object" == typeof e && (r = "POST"),
            a.length > 0 &&
              A.ajax({ url: t, type: r || "GET", dataType: "html", data: e })
                .done(function (t) {
                  (o = arguments),
                    a.html(i ? A("<div>").append(A.parseHTML(t)).find(i) : t);
                })
                .always(
                  n &&
                    function (t, e) {
                      a.each(function () {
                        n.apply(this, o || [t.responseText, e, t]);
                      });
                    }
                ),
            this
          );
        }),
        (A.expr.pseudos.animated = function (t) {
          return A.grep(A.timers, function (e) {
            return t === e.elem;
          }).length;
        }),
        (A.offset = {
          setOffset: function (t, e, n) {
            var i,
              r,
              o,
              a,
              s,
              l,
              c = A.css(t, "position"),
              d = A(t),
              u = {};
            "static" === c && (t.style.position = "relative"),
              (s = d.offset()),
              (o = A.css(t, "top")),
              (l = A.css(t, "left")),
              ("absolute" === c || "fixed" === c) &&
              (o + l).indexOf("auto") > -1
                ? ((a = (i = d.position()).top), (r = i.left))
                : ((a = parseFloat(o) || 0), (r = parseFloat(l) || 0)),
              g(e) && (e = e.call(t, n, A.extend({}, s))),
              null != e.top && (u.top = e.top - s.top + a),
              null != e.left && (u.left = e.left - s.left + r),
              "using" in e ? e.using.call(t, u) : d.css(u);
          },
        }),
        A.fn.extend({
          offset: function (t) {
            if (arguments.length)
              return void 0 === t
                ? this
                : this.each(function (e) {
                    A.offset.setOffset(this, t, e);
                  });
            var e,
              n,
              i = this[0];
            return i
              ? i.getClientRects().length
                ? ((e = i.getBoundingClientRect()),
                  (n = i.ownerDocument.defaultView),
                  { top: e.top + n.pageYOffset, left: e.left + n.pageXOffset })
                : { top: 0, left: 0 }
              : void 0;
          },
          position: function () {
            if (this[0]) {
              var t,
                e,
                n,
                i = this[0],
                r = { top: 0, left: 0 };
              if ("fixed" === A.css(i, "position"))
                e = i.getBoundingClientRect();
              else {
                for (
                  e = this.offset(),
                    n = i.ownerDocument,
                    t = i.offsetParent || n.documentElement;
                  t &&
                  (t === n.body || t === n.documentElement) &&
                  "static" === A.css(t, "position");

                )
                  t = t.parentNode;
                t &&
                  t !== i &&
                  1 === t.nodeType &&
                  (((r = A(t).offset()).top += A.css(t, "borderTopWidth", !0)),
                  (r.left += A.css(t, "borderLeftWidth", !0)));
              }
              return {
                top: e.top - r.top - A.css(i, "marginTop", !0),
                left: e.left - r.left - A.css(i, "marginLeft", !0),
              };
            }
          },
          offsetParent: function () {
            return this.map(function () {
              for (
                var t = this.offsetParent;
                t && "static" === A.css(t, "position");

              )
                t = t.offsetParent;
              return t || ft;
            });
          },
        }),
        A.each(
          { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
          function (t, e) {
            var n = "pageYOffset" === e;
            A.fn[t] = function (i) {
              return Q(
                this,
                function (t, i, r) {
                  var o;
                  if (
                    (v(t) ? (o = t) : 9 === t.nodeType && (o = t.defaultView),
                    void 0 === r)
                  )
                    return o ? o[e] : t[i];
                  o
                    ? o.scrollTo(n ? o.pageXOffset : r, n ? r : o.pageYOffset)
                    : (t[i] = r);
                },
                t,
                i,
                arguments.length
              );
            };
          }
        ),
        A.each(["top", "left"], function (t, e) {
          A.cssHooks[e] = Qt(m.pixelPosition, function (t, n) {
            if (n)
              return (n = Jt(t, e)), Xt.test(n) ? A(t).position()[e] + "px" : n;
          });
        }),
        A.each({ Height: "height", Width: "width" }, function (t, e) {
          A.each(
            { padding: "inner" + t, content: e, "": "outer" + t },
            function (n, i) {
              A.fn[i] = function (r, o) {
                var a = arguments.length && (n || "boolean" != typeof r),
                  s = n || (!0 === r || !0 === o ? "margin" : "border");
                return Q(
                  this,
                  function (e, n, r) {
                    var o;
                    return v(e)
                      ? 0 === i.indexOf("outer")
                        ? e["inner" + t]
                        : e.document.documentElement["client" + t]
                      : 9 === e.nodeType
                      ? ((o = e.documentElement),
                        Math.max(
                          e.body["scroll" + t],
                          o["scroll" + t],
                          e.body["offset" + t],
                          o["offset" + t],
                          o["client" + t]
                        ))
                      : void 0 === r
                      ? A.css(e, n, s)
                      : A.style(e, n, r, s);
                  },
                  e,
                  a ? r : void 0,
                  a
                );
              };
            }
          );
        }),
        A.each(
          [
            "ajaxStart",
            "ajaxStop",
            "ajaxComplete",
            "ajaxError",
            "ajaxSuccess",
            "ajaxSend",
          ],
          function (t, e) {
            A.fn[e] = function (t) {
              return this.on(e, t);
            };
          }
        ),
        A.fn.extend({
          bind: function (t, e, n) {
            return this.on(t, null, e, n);
          },
          unbind: function (t, e) {
            return this.off(t, null, e);
          },
          delegate: function (t, e, n, i) {
            return this.on(e, t, n, i);
          },
          undelegate: function (t, e, n) {
            return 1 === arguments.length
              ? this.off(t, "**")
              : this.off(e, t || "**", n);
          },
          hover: function (t, e) {
            return this.on("mouseenter", t).on("mouseleave", e || t);
          },
        }),
        A.each(
          "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
            " "
          ),
          function (t, e) {
            A.fn[e] = function (t, n) {
              return arguments.length > 0
                ? this.on(e, null, t, n)
                : this.trigger(e);
            };
          }
        );
      var nn = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
      (A.proxy = function (t, e) {
        var n, i, r;
        if (("string" == typeof e && ((n = t[e]), (e = t), (t = n)), g(t)))
          return (
            (i = s.call(arguments, 2)),
            ((r = function () {
              return t.apply(e || this, i.concat(s.call(arguments)));
            }).guid = t.guid =
              t.guid || A.guid++),
            r
          );
      }),
        (A.holdReady = function (t) {
          t ? A.readyWait++ : A.ready(!0);
        }),
        (A.isArray = Array.isArray),
        (A.parseJSON = JSON.parse),
        (A.nodeName = z),
        (A.isFunction = g),
        (A.isWindow = v),
        (A.camelCase = it),
        (A.type = O),
        (A.now = Date.now),
        (A.isNumeric = function (t) {
          var e = A.type(t);
          return (
            ("number" === e || "string" === e) && !isNaN(t - parseFloat(t))
          );
        }),
        (A.trim = function (t) {
          return null == t ? "" : (t + "").replace(nn, "$1");
        }),
        void 0 ===
          (i = function () {
            return A;
          }.apply(e, [])) || (t.exports = i);
      var rn = n.jQuery,
        on = n.$;
      return (
        (A.noConflict = function (t) {
          return (
            n.$ === A && (n.$ = on), t && n.jQuery === A && (n.jQuery = rn), A
          );
        }),
        void 0 === r && (n.jQuery = n.$ = A),
        A
      );
    });
  },
  function (t, e) {
    t.exports = function (t) {
      var e = [];
      return (
        (e.toString = function () {
          return this.map(function (e) {
            var n = (function (t, e) {
              var n,
                i = t[1] || "",
                r = t[3];
              if (!r) return i;
              if (e && "function" == typeof btoa) {
                var o =
                    ((n = r),
                    "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," +
                      btoa(unescape(encodeURIComponent(JSON.stringify(n)))) +
                      " */"),
                  a = r.sources.map(function (t) {
                    return "/*# sourceURL=" + r.sourceRoot + t + " */";
                  });
                return [i].concat(a).concat([o]).join("\n");
              }
              return [i].join("\n");
            })(e, t);
            return e[2] ? "@media " + e[2] + "{" + n + "}" : n;
          }).join("");
        }),
        (e.i = function (t, n) {
          "string" == typeof t && (t = [[null, t, ""]]);
          for (var i = {}, r = 0; r < this.length; r++) {
            var o = this[r][0];
            "number" == typeof o && (i[o] = !0);
          }
          for (r = 0; r < t.length; r++) {
            var a = t[r];
            ("number" == typeof a[0] && i[a[0]]) ||
              (n && !a[2]
                ? (a[2] = n)
                : n && (a[2] = "(" + a[2] + ") and (" + n + ")"),
              e.push(a));
          }
        }),
        e
      );
    };
  },
  function (t, e, n) {
    "use strict";
    n.d(e, "a", function () {
      return a;
    }),
      n.d(e, "b", function () {
        return s;
      });
    var i = n(14),
      r = n(22),
      o = n(5),
      a = function (t) {
        var e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        return (t = Object(i.b)(t).filter(r.a)).some(function (t) {
          return e[t] || n[t];
        });
      },
      s = function (t) {
        var e,
          n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          a =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          s =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        t = Object(i.b)(t).filter(r.a);
        for (var l = 0; l < t.length && !e; l++) {
          var c = t[l];
          e = a[c] || s[c];
        }
        return Object(o.f)(e) ? e(n) : e;
      };
  },
  function (t, e, n) {
    var i,
      r,
      o = {},
      a =
        ((i = function () {
          return window && document && document.all && !window.atob;
        }),
        function () {
          return void 0 === r && (r = i.apply(this, arguments)), r;
        }),
      s = function (t, e) {
        return e ? e.querySelector(t) : document.querySelector(t);
      },
      l = (function (t) {
        var e = {};
        return function (t, n) {
          if ("function" == typeof t) return t();
          if (void 0 === e[t]) {
            var i = s.call(this, t, n);
            if (
              window.HTMLIFrameElement &&
              i instanceof window.HTMLIFrameElement
            )
              try {
                i = i.contentDocument.head;
              } catch (t) {
                i = null;
              }
            e[t] = i;
          }
          return e[t];
        };
      })(),
      c = null,
      d = 0,
      u = [],
      p = n(489);
    function h(t, e) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n],
          r = o[i.id];
        if (r) {
          r.refs++;
          for (var a = 0; a < r.parts.length; a++) r.parts[a](i.parts[a]);
          for (; a < i.parts.length; a++) r.parts.push(_(i.parts[a], e));
        } else {
          var s = [];
          for (a = 0; a < i.parts.length; a++) s.push(_(i.parts[a], e));
          o[i.id] = { id: i.id, refs: 1, parts: s };
        }
      }
    }
    function f(t, e) {
      for (var n = [], i = {}, r = 0; r < t.length; r++) {
        var o = t[r],
          a = e.base ? o[0] + e.base : o[0],
          s = { css: o[1], media: o[2], sourceMap: o[3] };
        i[a] ? i[a].parts.push(s) : n.push((i[a] = { id: a, parts: [s] }));
      }
      return n;
    }
    function b(t, e) {
      var n = l(t.insertInto);
      if (!n)
        throw new Error(
          "Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid."
        );
      var i = u[u.length - 1];
      if ("top" === t.insertAt)
        i
          ? i.nextSibling
            ? n.insertBefore(e, i.nextSibling)
            : n.appendChild(e)
          : n.insertBefore(e, n.firstChild),
          u.push(e);
      else if ("bottom" === t.insertAt) n.appendChild(e);
      else {
        if ("object" != typeof t.insertAt || !t.insertAt.before)
          throw new Error(
            "[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n"
          );
        var r = l(t.insertAt.before, n);
        n.insertBefore(e, r);
      }
    }
    function m(t) {
      if (null === t.parentNode) return !1;
      t.parentNode.removeChild(t);
      var e = u.indexOf(t);
      e >= 0 && u.splice(e, 1);
    }
    function g(t) {
      var e = document.createElement("style");
      if (
        (void 0 === t.attrs.type && (t.attrs.type = "text/css"),
        void 0 === t.attrs.nonce)
      ) {
        var i = n.nc;
        i && (t.attrs.nonce = i);
      }
      return v(e, t.attrs), b(t, e), e;
    }
    function v(t, e) {
      Object.keys(e).forEach(function (n) {
        t.setAttribute(n, e[n]);
      });
    }
    function _(t, e) {
      var n, i, r, o;
      if (e.transform && t.css) {
        if (
          !(o =
            "function" == typeof e.transform
              ? e.transform(t.css)
              : e.transform.default(t.css))
        )
          return function () {};
        t.css = o;
      }
      if (e.singleton) {
        var a = d++;
        (n = c || (c = g(e))),
          (i = O.bind(null, n, a, !1)),
          (r = O.bind(null, n, a, !0));
      } else
        t.sourceMap &&
        "function" == typeof URL &&
        "function" == typeof URL.createObjectURL &&
        "function" == typeof URL.revokeObjectURL &&
        "function" == typeof Blob &&
        "function" == typeof btoa
          ? ((n = (function (t) {
              var e = document.createElement("link");
              return (
                void 0 === t.attrs.type && (t.attrs.type = "text/css"),
                (t.attrs.rel = "stylesheet"),
                v(e, t.attrs),
                b(t, e),
                e
              );
            })(e)),
            (i = A.bind(null, n, e)),
            (r = function () {
              m(n), n.href && URL.revokeObjectURL(n.href);
            }))
          : ((n = g(e)),
            (i = w.bind(null, n)),
            (r = function () {
              m(n);
            }));
      return (
        i(t),
        function (e) {
          if (e) {
            if (
              e.css === t.css &&
              e.media === t.media &&
              e.sourceMap === t.sourceMap
            )
              return;
            i((t = e));
          } else r();
        }
      );
    }
    t.exports = function (t, e) {
      if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document)
        throw new Error(
          "The style-loader cannot be used in a non-browser environment"
        );
      ((e = e || {}).attrs = "object" == typeof e.attrs ? e.attrs : {}),
        e.singleton || "boolean" == typeof e.singleton || (e.singleton = a()),
        e.insertInto || (e.insertInto = "head"),
        e.insertAt || (e.insertAt = "bottom");
      var n = f(t, e);
      return (
        h(n, e),
        function (t) {
          for (var i = [], r = 0; r < n.length; r++) {
            var a = n[r];
            (s = o[a.id]).refs--, i.push(s);
          }
          for (t && h(f(t, e), e), r = 0; r < i.length; r++) {
            var s;
            if (0 === (s = i[r]).refs) {
              for (var l = 0; l < s.parts.length; l++) s.parts[l]();
              delete o[s.id];
            }
          }
        }
      );
    };
    var y,
      M =
        ((y = []),
        function (t, e) {
          return (y[t] = e), y.filter(Boolean).join("\n");
        });
    function O(t, e, n, i) {
      var r = n ? "" : i.css;
      if (t.styleSheet) t.styleSheet.cssText = M(e, r);
      else {
        var o = document.createTextNode(r),
          a = t.childNodes;
        a[e] && t.removeChild(a[e]),
          a.length ? t.insertBefore(o, a[e]) : t.appendChild(o);
      }
    }
    function w(t, e) {
      var n = e.css,
        i = e.media;
      if ((i && t.setAttribute("media", i), t.styleSheet))
        t.styleSheet.cssText = n;
      else {
        for (; t.firstChild; ) t.removeChild(t.firstChild);
        t.appendChild(document.createTextNode(n));
      }
    }
    function A(t, e, n) {
      var i = n.css,
        r = n.sourceMap,
        o = void 0 === e.convertToAbsoluteUrls && r;
      (e.convertToAbsoluteUrls || o) && (i = p(i)),
        r &&
          (i +=
            "\n/*# sourceMappingURL=data:application/json;base64," +
            btoa(unescape(encodeURIComponent(JSON.stringify(r)))) +
            " */");
      var a = new Blob([i], { type: "text/css" }),
        s = t.href;
      (t.href = URL.createObjectURL(a)), s && URL.revokeObjectURL(s);
    }
  },
  function (t, e, n) {
    t.exports = n(515);
  },
  function (t, e, n) {
    "use strict";
    n.d(e, "c", function () {
      return d;
    }),
      n.d(e, "a", function () {
        return u;
      }),
      n.d(e, "b", function () {
        return h;
      });
    var i = n(34),
      r = n.n(i),
      o = n(55),
      a = n(45),
      s = n(68),
      l = r.a.prototype,
      c = function (t) {
        var e =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : void 0,
          n = l[o.c];
        return n ? n.getConfigValue(t, e) : Object(a.a)(e);
      },
      d = function (t) {
        var e =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : null,
          n =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : void 0;
        return e ? c("".concat(t, ".").concat(e), n) : c(t, {});
      },
      u = function () {
        return c("breakpoints", o.a);
      },
      p = Object(s.a)(function () {
        return u();
      }),
      h = Object(s.a)(function () {
        var t = Object(a.a)(p());
        return (t[0] = ""), t;
      });
  },
  ,
  ,
  ,
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.req = e.regex = e.ref = e.len = void 0),
      Object.defineProperty(e, "withParams", {
        enumerable: !0,
        get: function () {
          return r.default;
        },
      });
    var i,
      r = (i = n(491)) && i.__esModule ? i : { default: i };
    function o(t) {
      return (o =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            })(t);
    }
    var a = function (t) {
      if (Array.isArray(t)) return !!t.length;
      if (null == t) return !1;
      if (!1 === t) return !0;
      if (t instanceof Date) return !isNaN(t.getTime());
      if ("object" === o(t)) {
        for (var e in t) return !0;
        return !1;
      }
      return !!String(t).length;
    };
    (e.req = a),
      (e.len = function (t) {
        return Array.isArray(t)
          ? t.length
          : "object" === o(t)
          ? Object.keys(t).length
          : String(t).length;
      }),
      (e.ref = function (t, e, n) {
        return "function" == typeof t ? t.call(e, n) : n[t];
      }),
      (e.regex = function (t, e) {
        return (0, r.default)({ type: t }, function (t) {
          return !a(t) || e.test(t);
        });
      });
  },
  function (t, e, n) {
    "use strict";
    n.d(e, "a", function () {
      return l;
    });
    var i = n(4),
      r = n(14),
      o = n(7),
      a = n(48),
      s = "$_rootListeners",
      l = Object(i.c)({
        computed: {
          bvEventRoot: function () {
            return Object(a.a)(this);
          },
        },
        created: function () {
          this[s] = {};
        },
        beforeDestroy: function () {
          var t = this;
          Object(o.h)(this[s] || {}).forEach(function (e) {
            t[s][e].forEach(function (n) {
              t.listenOffRoot(e, n);
            });
          }),
            (this[s] = null);
        },
        methods: {
          registerRootListener: function (t, e) {
            this[s] &&
              ((this[s][t] = this[s][t] || []),
              Object(r.a)(this[s][t], e) || this[s][t].push(e));
          },
          unregisterRootListener: function (t, e) {
            this[s] &&
              this[s][t] &&
              (this[s][t] = this[s][t].filter(function (t) {
                return t !== e;
              }));
          },
          listenOnRoot: function (t, e) {
            this.bvEventRoot &&
              (this.bvEventRoot.$on(t, e), this.registerRootListener(t, e));
          },
          listenOnRootOnce: function (t, e) {
            var n = this;
            if (this.bvEventRoot) {
              var i = function t() {
                n.unregisterRootListener(t), e.apply(void 0, arguments);
              };
              this.bvEventRoot.$once(t, i), this.registerRootListener(t, i);
            }
          },
          listenOffRoot: function (t, e) {
            this.unregisterRootListener(t, e),
              this.bvEventRoot && this.bvEventRoot.$off(t, e);
          },
          emitOnRoot: function (t) {
            if (this.bvEventRoot) {
              for (
                var e,
                  n = arguments.length,
                  i = new Array(n > 1 ? n - 1 : 0),
                  r = 1;
                r < n;
                r++
              )
                i[r - 1] = arguments[r];
              (e = this.bvEventRoot).$emit.apply(e, [t].concat(i));
            }
          },
        },
      });
  },
  ,
  function (t, e, n) {
    "use strict";
    n.d(e, "a", function () {
      return f;
    }),
      n.d(e, "c", function () {
        return b;
      }),
      n.d(e, "d", function () {
        return m;
      }),
      n.d(e, "b", function () {
        return g;
      });
    var i = n(20);
    function r(t) {
      return (r =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            })(t);
    }
    function o(t, e) {
      if (!(t instanceof e))
        throw new TypeError("Cannot call a class as a function");
    }
    function a(t, e) {
      if ("function" != typeof e && null !== e)
        throw new TypeError(
          "Super expression must either be null or a function"
        );
      Object.defineProperty(t, "prototype", {
        value: Object.create(e && e.prototype, {
          constructor: { value: t, writable: !0, configurable: !0 },
        }),
        writable: !1,
      }),
        e && p(t, e);
    }
    function s(t) {
      var e = u();
      return function () {
        var n,
          i = h(t);
        if (e) {
          var r = h(this).constructor;
          n = Reflect.construct(i, arguments, r);
        } else n = i.apply(this, arguments);
        return l(this, n);
      };
    }
    function l(t, e) {
      if (e && ("object" === r(e) || "function" == typeof e)) return e;
      if (void 0 !== e)
        throw new TypeError(
          "Derived constructors may only return object or undefined"
        );
      return (function (t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t;
      })(t);
    }
    function c(t) {
      var e = "function" == typeof Map ? new Map() : void 0;
      return (c = function (t) {
        if (
          null === t ||
          ((n = t), -1 === Function.toString.call(n).indexOf("[native code]"))
        )
          return t;
        var n;
        if ("function" != typeof t)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        if (void 0 !== e) {
          if (e.has(t)) return e.get(t);
          e.set(t, i);
        }
        function i() {
          return d(t, arguments, h(this).constructor);
        }
        return (
          (i.prototype = Object.create(t.prototype, {
            constructor: {
              value: i,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
          p(i, t)
        );
      })(t);
    }
    function d(t, e, n) {
      return (d = u()
        ? Reflect.construct
        : function (t, e, n) {
            var i = [null];
            i.push.apply(i, e);
            var r = new (Function.bind.apply(t, i))();
            return n && p(r, n.prototype), r;
          }).apply(null, arguments);
    }
    function u() {
      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" == typeof Proxy) return !0;
      try {
        return (
          Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {})
          ),
          !0
        );
      } catch (t) {
        return !1;
      }
    }
    function p(t, e) {
      return (p =
        Object.setPrototypeOf ||
        function (t, e) {
          return (t.__proto__ = e), t;
        })(t, e);
    }
    function h(t) {
      return (h = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          })(t);
    }
    var f = i.h
        ? i.k.Element
        : (function (t) {
            a(n, t);
            var e = s(n);
            function n() {
              return o(this, n), e.apply(this, arguments);
            }
            return n;
          })(c(Object)),
      b = i.h
        ? i.k.HTMLElement
        : (function (t) {
            a(n, t);
            var e = s(n);
            function n() {
              return o(this, n), e.apply(this, arguments);
            }
            return n;
          })(f),
      m = i.h
        ? i.k.SVGElement
        : (function (t) {
            a(n, t);
            var e = s(n);
            function n() {
              return o(this, n), e.apply(this, arguments);
            }
            return n;
          })(f),
      g = i.h
        ? i.k.File
        : (function (t) {
            a(n, t);
            var e = s(n);
            function n() {
              return o(this, n), e.apply(this, arguments);
            }
            return n;
          })(c(Object));
  },
  function (t, e, n) {
    "use strict";
    var i = {
        name: "ModalPopup",
        props: {
          openModal: {
            type: [Boolean],
            default: function () {
              return !1;
            },
          },
          modalId: {
            type: [String],
            default: function () {
              return "kivicarePopup";
            },
          },
          modalTitle: {
            type: [String],
            default: function () {
              return "";
            },
          },
          modalTitleHtml: {
            type: [String],
            default: function () {
              return "";
            },
          },
          modalSize: {
            type: [String],
            default: function () {
              return "lg";
            },
          },
        },
        data: function () {
          return {};
        },
        mounted: function () {
          this.init();
        },
        methods: {
          init: function () {},
          modalClose: function () {
            this.$emit("closeModal");
          },
        },
        beforeDestroy: function () {},
      },
      r = (n(487), n(15)),
      o = Object(r.a)(
        i,
        function () {
          var t = this,
            e = t._self._c;
          return e(
            "div",
            [
              t.openModal
                ? e(
                    "b-modal",
                    {
                      attrs: {
                        "no-close-on-esc": "",
                        "no-close-on-backdrop": "",
                        id: t.modalId,
                        centered: "",
                        size: t.modalSize,
                        "body-class": "pt-0",
                        "modal-class": [
                          "auth-modal-detail",
                          "appointment_auth",
                        ].includes(t.modalId)
                          ? "kvp-modal"
                          : "",
                        "dialog-class": [
                          "auth-modal-detail",
                          "appointment_auth",
                        ].includes(t.modalId)
                          ? "kv-dialog"
                          : "",
                        "hide-footer": !0,
                      },
                      scopedSlots: t._u(
                        [
                          {
                            key: "modal-header",
                            fn: function (n) {
                              return (
                                n.close,
                                [
                                  "appointment_auth" === t.modalId
                                    ? e("span", {
                                        domProps: {
                                          innerHTML: t._s(t.modalTitle),
                                        },
                                      })
                                    : e(
                                        "h2",
                                        {
                                          staticClass:
                                            "text-primary w-100 text-center",
                                        },
                                        [t._v(t._s(t.modalTitle))]
                                      ),
                                  t._v(" "),
                                  e(
                                    "button",
                                    {
                                      staticClass: "close",
                                      attrs: {
                                        type: "button",
                                        "aria-label": "Close",
                                      },
                                      on: { click: t.modalClose },
                                    },
                                    [t._v("×")]
                                  ),
                                ]
                              );
                            },
                          },
                        ],
                        null,
                        !1,
                        655398884
                      ),
                      model: {
                        value: t.openModal,
                        callback: function (e) {
                          t.openModal = e;
                        },
                        expression: "openModal",
                      },
                    },
                    [t._v(" "), t._t("default")],
                    2
                  )
                : t._e(),
            ],
            1
          );
        },
        [],
        !1,
        null,
        "8775c564",
        null
      );
    e.a = o.exports;
  },
  ,
  function (t, e, n) {
    "use strict";
    n.d(e, "a", function () {
      return d;
    });
    var i = n(5),
      r = n(7);
    function o(t, e) {
      var n = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(t);
        e &&
          (i = i.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          n.push.apply(n, i);
      }
      return n;
    }
    function a(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? o(Object(n), !0).forEach(function (e) {
              s(t, e, n[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
          : o(Object(n)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(n, e)
              );
            });
      }
      return t;
    }
    function s(t, e, n) {
      return (
        e in t
          ? Object.defineProperty(t, e, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (t[e] = n),
        t
      );
    }
    function l(t) {
      return (
        (function (t) {
          if (Array.isArray(t)) return c(t);
        })(t) ||
        (function (t) {
          if (
            ("undefined" != typeof Symbol && null != t[Symbol.iterator]) ||
            null != t["@@iterator"]
          )
            return Array.from(t);
        })(t) ||
        (function (t, e) {
          if (t) {
            if ("string" == typeof t) return c(t, e);
            var n = Object.prototype.toString.call(t).slice(8, -1);
            return (
              "Object" === n && t.constructor && (n = t.constructor.name),
              "Map" === n || "Set" === n
                ? Array.from(t)
                : "Arguments" === n ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                ? c(t, e)
                : void 0
            );
          }
        })(t) ||
        (function () {
          throw new TypeError(
            "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        })()
      );
    }
    function c(t, e) {
      (null == e || e > t.length) && (e = t.length);
      for (var n = 0, i = new Array(e); n < e; n++) i[n] = t[n];
      return i;
    }
    var d = function t(e) {
      var n =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e;
      return Object(i.a)(e)
        ? e.reduce(function (e, n) {
            return [].concat(l(e), [t(n, n)]);
          }, [])
        : Object(i.k)(e)
        ? Object(r.h)(e).reduce(function (n, i) {
            return a(a({}, n), {}, s({}, i, t(e[i], e[i])));
          }, {})
        : n;
    };
  },
  ,
  function (t, e, n) {
    "use strict";
    n.d(e, "a", function () {
      return h;
    });
    var i = n(4),
      r = n(92),
      o = n(2),
      a = n(1),
      s = n(12),
      l = n(11),
      c = n(5),
      d = n(0),
      u = n(32),
      p = Object(d.d)(
        {
          ariaLabel: Object(d.c)(a.u, "Close"),
          content: Object(d.c)(a.u, "&times;"),
          disabled: Object(d.c)(a.g, !1),
          textVariant: Object(d.c)(a.u),
        },
        o.j
      ),
      h = Object(i.c)({
        name: o.j,
        functional: !0,
        props: p,
        render: function (t, e) {
          var n,
            i,
            o,
            a = e.props,
            d = e.data,
            p = e.slots,
            h = e.scopedSlots,
            f = p(),
            b = h || {},
            m = {
              staticClass: "close",
              class:
                ((n = {}),
                (i = "text-".concat(a.textVariant)),
                (o = a.textVariant),
                i in n
                  ? Object.defineProperty(n, i, {
                      value: o,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (n[i] = o),
                n),
              attrs: {
                type: "button",
                disabled: a.disabled,
                "aria-label": a.ariaLabel ? String(a.ariaLabel) : null,
              },
              on: {
                click: function (t) {
                  a.disabled && Object(c.d)(t) && Object(l.f)(t);
                },
              },
            };
          return (
            Object(u.a)(s.i, b, f) || (m.domProps = { innerHTML: a.content }),
            t("button", Object(r.a)(d, m), Object(u.b)(s.i, {}, b, f))
          );
        },
      });
  },
  function (t, e, n) {
    "use strict";
    n.d(e, "a", function () {
      return i;
    });
    var i = function (t) {
      return t.$root.$options.bvEventRoot || t.$root;
    };
  },
  function (t, e) {
    function n(e) {
      return (
        (t.exports = n =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports),
        n(e)
      );
    }
    (t.exports = n),
      (t.exports.__esModule = !0),
      (t.exports.default = t.exports);
  },
  ,
  ,
  ,
  function (t, e, n) {
    t.exports = (function (t) {
      var e = {};
      function n(i) {
        if (e[i]) return e[i].exports;
        var r = (e[i] = { i: i, l: !1, exports: {} });
        return t[i].call(r.exports, r, r.exports, n), (r.l = !0), r.exports;
      }
      return (
        (n.m = t),
        (n.c = e),
        (n.d = function (t, e, i) {
          n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: i });
        }),
        (n.r = function (t) {
          "undefined" != typeof Symbol &&
            Symbol.toStringTag &&
            Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
            Object.defineProperty(t, "__esModule", { value: !0 });
        }),
        (n.t = function (t, e) {
          if ((1 & e && (t = n(t)), 8 & e)) return t;
          if (4 & e && "object" == typeof t && t && t.__esModule) return t;
          var i = Object.create(null);
          if (
            (n.r(i),
            Object.defineProperty(i, "default", { enumerable: !0, value: t }),
            2 & e && "string" != typeof t)
          )
            for (var r in t)
              n.d(
                i,
                r,
                function (e) {
                  return t[e];
                }.bind(null, r)
              );
          return i;
        }),
        (n.n = function (t) {
          var e =
            t && t.__esModule
              ? function () {
                  return t.default;
                }
              : function () {
                  return t;
                };
          return n.d(e, "a", e), e;
        }),
        (n.o = function (t, e) {
          return Object.prototype.hasOwnProperty.call(t, e);
        }),
        (n.p = ""),
        n((n.s = "fb15"))
      );
    })({
      "014b": function (t, e, n) {
        "use strict";
        var i = n("e53d"),
          r = n("07e3"),
          o = n("8e60"),
          a = n("63b6"),
          s = n("9138"),
          l = n("ebfd").KEY,
          c = n("294c"),
          d = n("dbdb"),
          u = n("45f2"),
          p = n("62a0"),
          h = n("5168"),
          f = n("ccb9"),
          b = n("6718"),
          m = n("47ee"),
          g = n("9003"),
          v = n("e4ae"),
          _ = n("f772"),
          y = n("241e"),
          M = n("36c3"),
          O = n("1bc3"),
          w = n("aebd"),
          A = n("a159"),
          x = n("0395"),
          z = n("bf0b"),
          C = n("9aa9"),
          k = n("d9f6"),
          S = n("c3a1"),
          T = z.f,
          D = k.f,
          L = x.f,
          q = i.Symbol,
          E = i.JSON,
          j = E && E.stringify,
          P = h("_hidden"),
          R = h("toPrimitive"),
          I = {}.propertyIsEnumerable,
          W = d("symbol-registry"),
          N = d("symbols"),
          B = d("op-symbols"),
          F = Object.prototype,
          $ = "function" == typeof q && !!C.f,
          H = i.QObject,
          Y = !H || !H.prototype || !H.prototype.findChild,
          U =
            o &&
            c(function () {
              return (
                7 !=
                A(
                  D({}, "a", {
                    get: function () {
                      return D(this, "a", { value: 7 }).a;
                    },
                  })
                ).a
              );
            })
              ? function (t, e, n) {
                  var i = T(F, e);
                  i && delete F[e], D(t, e, n), i && t !== F && D(F, e, i);
                }
              : D,
          X = function (t) {
            var e = (N[t] = A(q.prototype));
            return (e._k = t), e;
          },
          V =
            $ && "symbol" == typeof q.iterator
              ? function (t) {
                  return "symbol" == typeof t;
                }
              : function (t) {
                  return t instanceof q;
                },
          G = function (t, e, n) {
            return (
              t === F && G(B, e, n),
              v(t),
              (e = O(e, !0)),
              v(n),
              r(N, e)
                ? (n.enumerable
                    ? (r(t, P) && t[P][e] && (t[P][e] = !1),
                      (n = A(n, { enumerable: w(0, !1) })))
                    : (r(t, P) || D(t, P, w(1, {})), (t[P][e] = !0)),
                  U(t, e, n))
                : D(t, e, n)
            );
          },
          K = function (t, e) {
            v(t);
            for (var n, i = m((e = M(e))), r = 0, o = i.length; o > r; )
              G(t, (n = i[r++]), e[n]);
            return t;
          },
          Z = function (t) {
            var e = I.call(this, (t = O(t, !0)));
            return (
              !(this === F && r(N, t) && !r(B, t)) &&
              (!(e || !r(this, t) || !r(N, t) || (r(this, P) && this[P][t])) ||
                e)
            );
          },
          J = function (t, e) {
            if (((t = M(t)), (e = O(e, !0)), t !== F || !r(N, e) || r(B, e))) {
              var n = T(t, e);
              return (
                !n || !r(N, e) || (r(t, P) && t[P][e]) || (n.enumerable = !0), n
              );
            }
          },
          Q = function (t) {
            for (var e, n = L(M(t)), i = [], o = 0; n.length > o; )
              r(N, (e = n[o++])) || e == P || e == l || i.push(e);
            return i;
          },
          tt = function (t) {
            for (
              var e, n = t === F, i = L(n ? B : M(t)), o = [], a = 0;
              i.length > a;

            )
              !r(N, (e = i[a++])) || (n && !r(F, e)) || o.push(N[e]);
            return o;
          };
        $ ||
          (s(
            (q = function () {
              if (this instanceof q)
                throw TypeError("Symbol is not a constructor!");
              var t = p(arguments.length > 0 ? arguments[0] : void 0),
                e = function (n) {
                  this === F && e.call(B, n),
                    r(this, P) && r(this[P], t) && (this[P][t] = !1),
                    U(this, t, w(1, n));
                };
              return o && Y && U(F, t, { configurable: !0, set: e }), X(t);
            }).prototype,
            "toString",
            function () {
              return this._k;
            }
          ),
          (z.f = J),
          (k.f = G),
          (n("6abf").f = x.f = Q),
          (n("355d").f = Z),
          (C.f = tt),
          o && !n("b8e3") && s(F, "propertyIsEnumerable", Z, !0),
          (f.f = function (t) {
            return X(h(t));
          })),
          a(a.G + a.W + a.F * !$, { Symbol: q });
        for (
          var et =
              "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(
                ","
              ),
            nt = 0;
          et.length > nt;

        )
          h(et[nt++]);
        for (var it = S(h.store), rt = 0; it.length > rt; ) b(it[rt++]);
        a(a.S + a.F * !$, "Symbol", {
          for: function (t) {
            return r(W, (t += "")) ? W[t] : (W[t] = q(t));
          },
          keyFor: function (t) {
            if (!V(t)) throw TypeError(t + " is not a symbol!");
            for (var e in W) if (W[e] === t) return e;
          },
          useSetter: function () {
            Y = !0;
          },
          useSimple: function () {
            Y = !1;
          },
        }),
          a(a.S + a.F * !$, "Object", {
            create: function (t, e) {
              return void 0 === e ? A(t) : K(A(t), e);
            },
            defineProperty: G,
            defineProperties: K,
            getOwnPropertyDescriptor: J,
            getOwnPropertyNames: Q,
            getOwnPropertySymbols: tt,
          });
        var ot = c(function () {
          C.f(1);
        });
        a(a.S + a.F * ot, "Object", {
          getOwnPropertySymbols: function (t) {
            return C.f(y(t));
          },
        }),
          E &&
            a(
              a.S +
                a.F *
                  (!$ ||
                    c(function () {
                      var t = q();
                      return (
                        "[null]" != j([t]) ||
                        "{}" != j({ a: t }) ||
                        "{}" != j(Object(t))
                      );
                    })),
              "JSON",
              {
                stringify: function (t) {
                  for (var e, n, i = [t], r = 1; arguments.length > r; )
                    i.push(arguments[r++]);
                  if (((n = e = i[1]), (_(e) || void 0 !== t) && !V(t)))
                    return (
                      g(e) ||
                        (e = function (t, e) {
                          if (
                            ("function" == typeof n && (e = n.call(this, t, e)),
                            !V(e))
                          )
                            return e;
                        }),
                      (i[1] = e),
                      j.apply(E, i)
                    );
                },
              }
            ),
          q.prototype[R] || n("35e8")(q.prototype, R, q.prototype.valueOf),
          u(q, "Symbol"),
          u(Math, "Math", !0),
          u(i.JSON, "JSON", !0);
      },
      "01f9": function (t, e, n) {
        "use strict";
        var i = n("2d00"),
          r = n("5ca1"),
          o = n("2aba"),
          a = n("32e9"),
          s = n("84f2"),
          l = n("41a0"),
          c = n("7f20"),
          d = n("38fd"),
          u = n("2b4c")("iterator"),
          p = !([].keys && "next" in [].keys()),
          h = function () {
            return this;
          };
        t.exports = function (t, e, n, f, b, m, g) {
          l(n, e, f);
          var v,
            _,
            y,
            M = function (t) {
              if (!p && t in x) return x[t];
              switch (t) {
                case "keys":
                case "values":
                  return function () {
                    return new n(this, t);
                  };
              }
              return function () {
                return new n(this, t);
              };
            },
            O = e + " Iterator",
            w = "values" == b,
            A = !1,
            x = t.prototype,
            z = x[u] || x["@@iterator"] || (b && x[b]),
            C = z || M(b),
            k = b ? (w ? M("entries") : C) : void 0,
            S = ("Array" == e && x.entries) || z;
          if (
            (S &&
              (y = d(S.call(new t()))) !== Object.prototype &&
              y.next &&
              (c(y, O, !0), i || "function" == typeof y[u] || a(y, u, h)),
            w &&
              z &&
              "values" !== z.name &&
              ((A = !0),
              (C = function () {
                return z.call(this);
              })),
            (i && !g) || (!p && !A && x[u]) || a(x, u, C),
            (s[e] = C),
            (s[O] = h),
            b)
          )
            if (
              ((v = {
                values: w ? C : M("values"),
                keys: m ? C : M("keys"),
                entries: k,
              }),
              g)
            )
              for (_ in v) _ in x || o(x, _, v[_]);
            else r(r.P + r.F * (p || A), e, v);
          return v;
        };
      },
      "0395": function (t, e, n) {
        var i = n("36c3"),
          r = n("6abf").f,
          o = {}.toString,
          a =
            "object" == typeof window && window && Object.getOwnPropertyNames
              ? Object.getOwnPropertyNames(window)
              : [];
        t.exports.f = function (t) {
          return a && "[object Window]" == o.call(t)
            ? (function (t) {
                try {
                  return r(t);
                } catch (t) {
                  return a.slice();
                }
              })(t)
            : r(i(t));
        };
      },
      "0750": function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.default = {
            aliceblue: "#f0f8ff",
            antiquewhite: "#faebd7",
            aqua: "#00ffff",
            aquamarine: "#7fffd4",
            azure: "#f0ffff",
            beige: "#f5f5dc",
            bisque: "#ffe4c4",
            black: "#000000",
            blanchedalmond: "#ffebcd",
            blue: "#0000ff",
            blueviolet: "#8a2be2",
            brown: "#a52a2a",
            burlywood: "#deb887",
            cadetblue: "#5f9ea0",
            chartreuse: "#7fff00",
            chocolate: "#d2691e",
            coral: "#ff7f50",
            cornflowerblue: "#6495ed",
            cornsilk: "#fff8dc",
            crimson: "#dc143c",
            cyan: "#00ffff",
            darkblue: "#00008b",
            darkcyan: "#008b8b",
            darkgoldenrod: "#b8860b",
            darkgray: "#a9a9a9",
            darkgreen: "#006400",
            darkkhaki: "#bdb76b",
            darkmagenta: "#8b008b",
            darkolivegreen: "#556b2f",
            darkorange: "#ff8c00",
            darkorchid: "#9932cc",
            darkred: "#8b0000",
            darksalmon: "#e9967a",
            darkseagreen: "#8fbc8f",
            darkslateblue: "#483d8b",
            darkslategray: "#2f4f4f",
            darkturquoise: "#00ced1",
            darkviolet: "#9400d3",
            deeppink: "#ff1493",
            deepskyblue: "#00bfff",
            dimgray: "#696969",
            dodgerblue: "#1e90ff",
            firebrick: "#b22222",
            floralwhite: "#fffaf0",
            forestgreen: "#228b22",
            fuchsia: "#ff00ff",
            gainsboro: "#dcdcdc",
            ghostwhite: "#f8f8ff",
            gold: "#ffd700",
            goldenrod: "#daa520",
            gray: "#808080",
            green: "#008000",
            greenyellow: "#adff2f",
            honeydew: "#f0fff0",
            hotpink: "#ff69b4",
            indianred: "#cd5c5c",
            indigo: "#4b0082",
            ivory: "#fffff0",
            khaki: "#f0e68c",
            lavender: "#e6e6fa",
            lavenderblush: "#fff0f5",
            lawngreen: "#7cfc00",
            lemonchiffon: "#fffacd",
            lightblue: "#add8e6",
            lightcoral: "#f08080",
            lightcyan: "#e0ffff",
            lightgoldenrodyellow: "#fafad2",
            lightgrey: "#d3d3d3",
            lightgreen: "#90ee90",
            lightpink: "#ffb6c1",
            lightsalmon: "#ffa07a",
            lightseagreen: "#20b2aa",
            lightskyblue: "#87cefa",
            lightslategray: "#778899",
            lightsteelblue: "#b0c4de",
            lightyellow: "#ffffe0",
            lime: "#00ff00",
            limegreen: "#32cd32",
            linen: "#faf0e6",
            magenta: "#ff00ff",
            maroon: "#800000",
            mediumaquamarine: "#66cdaa",
            mediumblue: "#0000cd",
            mediumorchid: "#ba55d3",
            mediumpurple: "#9370d8",
            mediumseagreen: "#3cb371",
            mediumslateblue: "#7b68ee",
            mediumspringgreen: "#00fa9a",
            mediumturquoise: "#48d1cc",
            mediumvioletred: "#c71585",
            midnightblue: "#191970",
            mintcream: "#f5fffa",
            mistyrose: "#ffe4e1",
            moccasin: "#ffe4b5",
            navajowhite: "#ffdead",
            navy: "#000080",
            oldlace: "#fdf5e6",
            olive: "#808000",
            olivedrab: "#6b8e23",
            orange: "#ffa500",
            orangered: "#ff4500",
            orchid: "#da70d6",
            palegoldenrod: "#eee8aa",
            palegreen: "#98fb98",
            paleturquoise: "#afeeee",
            palevioletred: "#d87093",
            papayawhip: "#ffefd5",
            peachpuff: "#ffdab9",
            peru: "#cd853f",
            pink: "#ffc0cb",
            plum: "#dda0dd",
            powderblue: "#b0e0e6",
            purple: "#800080",
            rebeccapurple: "#663399",
            red: "#ff0000",
            rosybrown: "#bc8f8f",
            royalblue: "#4169e1",
            saddlebrown: "#8b4513",
            salmon: "#fa8072",
            sandybrown: "#f4a460",
            seagreen: "#2e8b57",
            seashell: "#fff5ee",
            sienna: "#a0522d",
            silver: "#c0c0c0",
            skyblue: "#87ceeb",
            slateblue: "#6a5acd",
            slategray: "#708090",
            snow: "#fffafa",
            springgreen: "#00ff7f",
            steelblue: "#4682b4",
            tan: "#d2b48c",
            teal: "#008080",
            thistle: "#d8bfd8",
            tomato: "#ff6347",
            turquoise: "#40e0d0",
            violet: "#ee82ee",
            wheat: "#f5deb3",
            white: "#ffffff",
            whitesmoke: "#f5f5f5",
            yellow: "#ffff00",
            yellowgreen: "#9acd32",
            transparent: "transparent",
          });
      },
      "07e3": function (t, e) {
        var n = {}.hasOwnProperty;
        t.exports = function (t, e) {
          return n.call(t, e);
        };
      },
      "0a49": function (t, e, n) {
        var i = n("9b43"),
          r = n("626a"),
          o = n("4bf8"),
          a = n("9def"),
          s = n("cd1c");
        t.exports = function (t, e) {
          var n = 1 == t,
            l = 2 == t,
            c = 3 == t,
            d = 4 == t,
            u = 6 == t,
            p = 5 == t || u,
            h = e || s;
          return function (e, s, f) {
            for (
              var b,
                m,
                g = o(e),
                v = r(g),
                _ = i(s, f, 3),
                y = a(v.length),
                M = 0,
                O = n ? h(e, y) : l ? h(e, 0) : void 0;
              y > M;
              M++
            )
              if ((p || M in v) && ((m = _((b = v[M]), M, g)), t))
                if (n) O[M] = m;
                else if (m)
                  switch (t) {
                    case 3:
                      return !0;
                    case 5:
                      return b;
                    case 6:
                      return M;
                    case 2:
                      O.push(b);
                  }
                else if (d) return !1;
            return u ? -1 : c || d ? d : O;
          };
        };
      },
      "0bfb": function (t, e, n) {
        "use strict";
        var i = n("cb7c");
        t.exports = function () {
          var t = i(this),
            e = "";
          return (
            t.global && (e += "g"),
            t.ignoreCase && (e += "i"),
            t.multiline && (e += "m"),
            t.unicode && (e += "u"),
            t.sticky && (e += "y"),
            e
          );
        };
      },
      "0d58": function (t, e, n) {
        var i = n("ce10"),
          r = n("e11e");
        t.exports =
          Object.keys ||
          function (t) {
            return i(t, r);
          };
      },
      "0fc9": function (t, e, n) {
        var i = n("3a38"),
          r = Math.max,
          o = Math.min;
        t.exports = function (t, e) {
          return (t = i(t)) < 0 ? r(t + e, 0) : o(t, e);
        };
      },
      1169: function (t, e, n) {
        var i = n("2d95");
        t.exports =
          Array.isArray ||
          function (t) {
            return "Array" == i(t);
          };
      },
      1173: function (t, e) {
        t.exports = function (t, e, n, i) {
          if (!(t instanceof e) || (void 0 !== i && i in t))
            throw TypeError(n + ": incorrect invocation!");
          return t;
        };
      },
      "11e9": function (t, e, n) {
        var i = n("52a7"),
          r = n("4630"),
          o = n("6821"),
          a = n("6a99"),
          s = n("69a8"),
          l = n("c69a"),
          c = Object.getOwnPropertyDescriptor;
        e.f = n("9e1e")
          ? c
          : function (t, e) {
              if (((t = o(t)), (e = a(e, !0)), l))
                try {
                  return c(t, e);
                } catch (t) {}
              if (s(t, e)) return r(!i.f.call(t, e), t[e]);
            };
      },
      1495: function (t, e, n) {
        var i = n("86cc"),
          r = n("cb7c"),
          o = n("0d58");
        t.exports = n("9e1e")
          ? Object.defineProperties
          : function (t, e) {
              r(t);
              for (var n, a = o(e), s = a.length, l = 0; s > l; )
                i.f(t, (n = a[l++]), e[n]);
              return t;
            };
      },
      1654: function (t, e, n) {
        "use strict";
        var i = n("71c1")(!0);
        n("30f1")(
          String,
          "String",
          function (t) {
            (this._t = String(t)), (this._i = 0);
          },
          function () {
            var t,
              e = this._t,
              n = this._i;
            return n >= e.length
              ? { value: void 0, done: !0 }
              : ((t = i(e, n)), (this._i += t.length), { value: t, done: !1 });
          }
        );
      },
      1691: function (t, e) {
        t.exports =
          "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(
            ","
          );
      },
      "1af6": function (t, e, n) {
        var i = n("63b6");
        i(i.S, "Array", { isArray: n("9003") });
      },
      "1bc3": function (t, e, n) {
        var i = n("f772");
        t.exports = function (t, e) {
          if (!i(t)) return t;
          var n, r;
          if (e && "function" == typeof (n = t.toString) && !i((r = n.call(t))))
            return r;
          if ("function" == typeof (n = t.valueOf) && !i((r = n.call(t))))
            return r;
          if (
            !e &&
            "function" == typeof (n = t.toString) &&
            !i((r = n.call(t)))
          )
            return r;
          throw TypeError("Can't convert object to primitive value");
        };
      },
      "1c15": function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.default = (t, e = 1) => {
            if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(t)) {
              let n = t.substring(1).split("");
              3 === n.length && (n = [n[0], n[0], n[1], n[1], n[2], n[2]]);
              const i = "0x" + n.join("");
              return `rgba(${[(i >> 16) & 255, (i >> 8) & 255, 255 & i].join(
                ", "
              )}, ${e})`;
            }
            throw new Error("Bad Hex");
          });
      },
      "1ec9": function (t, e, n) {
        var i = n("f772"),
          r = n("e53d").document,
          o = i(r) && i(r.createElement);
        t.exports = function (t) {
          return o ? r.createElement(t) : {};
        };
      },
      "20d6": function (t, e, n) {
        "use strict";
        var i = n("5ca1"),
          r = n("0a49")(6),
          o = "findIndex",
          a = !0;
        o in [] &&
          Array(1)[o](function () {
            a = !1;
          }),
          i(i.P + i.F * a, "Array", {
            findIndex: function (t) {
              return r(this, t, arguments.length > 1 ? arguments[1] : void 0);
            },
          }),
          n("9c6c")(o);
      },
      "20fd": function (t, e, n) {
        "use strict";
        var i = n("d9f6"),
          r = n("aebd");
        t.exports = function (t, e, n) {
          e in t ? i.f(t, e, r(0, n)) : (t[e] = n);
        };
      },
      "230e": function (t, e, n) {
        var i = n("d3f4"),
          r = n("7726").document,
          o = i(r) && i(r.createElement);
        t.exports = function (t) {
          return o ? r.createElement(t) : {};
        };
      },
      "241e": function (t, e, n) {
        var i = n("25eb");
        t.exports = function (t) {
          return Object(i(t));
        };
      },
      "24c5": function (t, e, n) {
        "use strict";
        var i,
          r,
          o,
          a,
          s = n("b8e3"),
          l = n("e53d"),
          c = n("d864"),
          d = n("40c3"),
          u = n("63b6"),
          p = n("f772"),
          h = n("79aa"),
          f = n("1173"),
          b = n("a22a"),
          m = n("f201"),
          g = n("4178").set,
          v = n("aba2")(),
          _ = n("656e"),
          y = n("4439"),
          M = n("bc13"),
          O = n("cd78"),
          w = l.TypeError,
          A = l.process,
          x = A && A.versions,
          z = (x && x.v8) || "",
          C = l.Promise,
          k = "process" == d(A),
          S = function () {},
          T = (r = _.f),
          D = !!(function () {
            try {
              var t = C.resolve(1),
                e = ((t.constructor = {})[n("5168")("species")] = function (t) {
                  t(S, S);
                });
              return (
                (k || "function" == typeof PromiseRejectionEvent) &&
                t.then(S) instanceof e &&
                0 !== z.indexOf("6.6") &&
                -1 === M.indexOf("Chrome/66")
              );
            } catch (t) {}
          })(),
          L = function (t) {
            var e;
            return !(!p(t) || "function" != typeof (e = t.then)) && e;
          },
          q = function (t, e) {
            if (!t._n) {
              t._n = !0;
              var n = t._c;
              v(function () {
                for (
                  var i = t._v,
                    r = 1 == t._s,
                    o = 0,
                    a = function (e) {
                      var n,
                        o,
                        a,
                        s = r ? e.ok : e.fail,
                        l = e.resolve,
                        c = e.reject,
                        d = e.domain;
                      try {
                        s
                          ? (r || (2 == t._h && P(t), (t._h = 1)),
                            !0 === s
                              ? (n = i)
                              : (d && d.enter(),
                                (n = s(i)),
                                d && (d.exit(), (a = !0))),
                            n === e.promise
                              ? c(w("Promise-chain cycle"))
                              : (o = L(n))
                              ? o.call(n, l, c)
                              : l(n))
                          : c(i);
                      } catch (t) {
                        d && !a && d.exit(), c(t);
                      }
                    };
                  n.length > o;

                )
                  a(n[o++]);
                (t._c = []), (t._n = !1), e && !t._h && E(t);
              });
            }
          },
          E = function (t) {
            g.call(l, function () {
              var e,
                n,
                i,
                r = t._v,
                o = j(t);
              if (
                (o &&
                  ((e = y(function () {
                    k
                      ? A.emit("unhandledRejection", r, t)
                      : (n = l.onunhandledrejection)
                      ? n({ promise: t, reason: r })
                      : (i = l.console) &&
                        i.error &&
                        i.error("Unhandled promise rejection", r);
                  })),
                  (t._h = k || j(t) ? 2 : 1)),
                (t._a = void 0),
                o && e.e)
              )
                throw e.v;
            });
          },
          j = function (t) {
            return 1 !== t._h && 0 === (t._a || t._c).length;
          },
          P = function (t) {
            g.call(l, function () {
              var e;
              k
                ? A.emit("rejectionHandled", t)
                : (e = l.onrejectionhandled) && e({ promise: t, reason: t._v });
            });
          },
          R = function (t) {
            var e = this;
            e._d ||
              ((e._d = !0),
              ((e = e._w || e)._v = t),
              (e._s = 2),
              e._a || (e._a = e._c.slice()),
              q(e, !0));
          },
          I = function (t) {
            var e,
              n = this;
            if (!n._d) {
              (n._d = !0), (n = n._w || n);
              try {
                if (n === t) throw w("Promise can't be resolved itself");
                (e = L(t))
                  ? v(function () {
                      var i = { _w: n, _d: !1 };
                      try {
                        e.call(t, c(I, i, 1), c(R, i, 1));
                      } catch (t) {
                        R.call(i, t);
                      }
                    })
                  : ((n._v = t), (n._s = 1), q(n, !1));
              } catch (t) {
                R.call({ _w: n, _d: !1 }, t);
              }
            }
          };
        D ||
          ((C = function (t) {
            f(this, C, "Promise", "_h"), h(t), i.call(this);
            try {
              t(c(I, this, 1), c(R, this, 1));
            } catch (t) {
              R.call(this, t);
            }
          }),
          ((i = function (t) {
            (this._c = []),
              (this._a = void 0),
              (this._s = 0),
              (this._d = !1),
              (this._v = void 0),
              (this._h = 0),
              (this._n = !1);
          }).prototype = n("5c95")(C.prototype, {
            then: function (t, e) {
              var n = T(m(this, C));
              return (
                (n.ok = "function" != typeof t || t),
                (n.fail = "function" == typeof e && e),
                (n.domain = k ? A.domain : void 0),
                this._c.push(n),
                this._a && this._a.push(n),
                this._s && q(this, !1),
                n.promise
              );
            },
            catch: function (t) {
              return this.then(void 0, t);
            },
          })),
          (o = function () {
            var t = new i();
            (this.promise = t),
              (this.resolve = c(I, t, 1)),
              (this.reject = c(R, t, 1));
          }),
          (_.f = T =
            function (t) {
              return t === C || t === a ? new o(t) : r(t);
            })),
          u(u.G + u.W + u.F * !D, { Promise: C }),
          n("45f2")(C, "Promise"),
          n("4c95")("Promise"),
          (a = n("584a").Promise),
          u(u.S + u.F * !D, "Promise", {
            reject: function (t) {
              var e = T(this);
              return (0, e.reject)(t), e.promise;
            },
          }),
          u(u.S + u.F * (s || !D), "Promise", {
            resolve: function (t) {
              return O(s && this === a ? C : this, t);
            },
          }),
          u(
            u.S +
              u.F *
                !(
                  D &&
                  n("4ee1")(function (t) {
                    C.all(t).catch(S);
                  })
                ),
            "Promise",
            {
              all: function (t) {
                var e = this,
                  n = T(e),
                  i = n.resolve,
                  r = n.reject,
                  o = y(function () {
                    var n = [],
                      o = 0,
                      a = 1;
                    b(t, !1, function (t) {
                      var s = o++,
                        l = !1;
                      n.push(void 0),
                        a++,
                        e.resolve(t).then(function (t) {
                          l || ((l = !0), (n[s] = t), --a || i(n));
                        }, r);
                    }),
                      --a || i(n);
                  });
                return o.e && r(o.v), n.promise;
              },
              race: function (t) {
                var e = this,
                  n = T(e),
                  i = n.reject,
                  r = y(function () {
                    b(t, !1, function (t) {
                      e.resolve(t).then(n.resolve, i);
                    });
                  });
                return r.e && i(r.v), n.promise;
              },
            }
          );
      },
      "252c": function (t, e, n) {
        "use strict";
        (function (t) {
          n.d(e, "a", function () {
            return o;
          });
          var i = void 0;
          function r() {
            r.init ||
              ((r.init = !0),
              (i =
                -1 !==
                (function () {
                  var t = window.navigator.userAgent,
                    e = t.indexOf("MSIE ");
                  if (e > 0)
                    return parseInt(t.substring(e + 5, t.indexOf(".", e)), 10);
                  if (t.indexOf("Trident/") > 0) {
                    var n = t.indexOf("rv:");
                    return parseInt(t.substring(n + 3, t.indexOf(".", n)), 10);
                  }
                  var i = t.indexOf("Edge/");
                  return i > 0
                    ? parseInt(t.substring(i + 5, t.indexOf(".", i)), 10)
                    : -1;
                })()));
          }
          var o = {
              render: function () {
                var t = this.$createElement;
                return (this._self._c || t)("div", {
                  staticClass: "resize-observer",
                  attrs: { tabindex: "-1" },
                });
              },
              staticRenderFns: [],
              _scopeId: "data-v-b329ee4c",
              name: "resize-observer",
              methods: {
                compareAndNotify: function () {
                  (this._w === this.$el.offsetWidth &&
                    this._h === this.$el.offsetHeight) ||
                    ((this._w = this.$el.offsetWidth),
                    (this._h = this.$el.offsetHeight),
                    this.$emit("notify"));
                },
                addResizeHandlers: function () {
                  this._resizeObject.contentDocument.defaultView.addEventListener(
                    "resize",
                    this.compareAndNotify
                  ),
                    this.compareAndNotify();
                },
                removeResizeHandlers: function () {
                  this._resizeObject &&
                    this._resizeObject.onload &&
                    (!i &&
                      this._resizeObject.contentDocument &&
                      this._resizeObject.contentDocument.defaultView.removeEventListener(
                        "resize",
                        this.compareAndNotify
                      ),
                    delete this._resizeObject.onload);
                },
              },
              mounted: function () {
                var t = this;
                r(),
                  this.$nextTick(function () {
                    (t._w = t.$el.offsetWidth), (t._h = t.$el.offsetHeight);
                  });
                var e = document.createElement("object");
                (this._resizeObject = e),
                  e.setAttribute("aria-hidden", "true"),
                  e.setAttribute("tabindex", -1),
                  (e.onload = this.addResizeHandlers),
                  (e.type = "text/html"),
                  i && this.$el.appendChild(e),
                  (e.data = "about:blank"),
                  i || this.$el.appendChild(e);
              },
              beforeDestroy: function () {
                this.removeResizeHandlers();
              },
            },
            a = {
              version: "0.4.5",
              install: function (t) {
                t.component("resize-observer", o),
                  t.component("ResizeObserver", o);
              },
            },
            s = null;
          "undefined" != typeof window
            ? (s = window.Vue)
            : void 0 !== t && (s = t.Vue),
            s && s.use(a);
        }).call(this, n("c8ba"));
      },
      "25eb": function (t, e) {
        t.exports = function (t) {
          if (null == t) throw TypeError("Can't call method on  " + t);
          return t;
        };
      },
      2621: function (t, e) {
        e.f = Object.getOwnPropertySymbols;
      },
      "292a": function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.default = (t, e) => {
            if (t.length < 7)
              throw new Error(
                `[shade-color] color must be formatted "#FFFFFF" not like this "#FFF" - (${t})`
              );
            if (!t.includes("#"))
              throw new Error(
                `[shade-color] color must be an HEX - ex: "#FFFFFF" - (${t})`
              );
            let n = parseInt(t.substring(1, 3), 16),
              i = parseInt(t.substring(3, 5), 16),
              r = parseInt(t.substring(5, 7), 16);
            return (
              (n = parseInt(String((n * (100 + e)) / 100))),
              (i = parseInt(String((i * (100 + e)) / 100))),
              (r = parseInt(String((r * (100 + e)) / 100))),
              (n = n < 255 ? n : 255),
              (i = i < 255 ? i : 255),
              (r = r < 255 ? r : 255),
              "#" +
                (1 === n.toString(16).length
                  ? "0" + n.toString(16)
                  : n.toString(16)) +
                (1 === i.toString(16).length
                  ? "0" + i.toString(16)
                  : i.toString(16)) +
                (1 === r.toString(16).length
                  ? "0" + r.toString(16)
                  : r.toString(16))
            );
          });
      },
      "294c": function (t, e) {
        t.exports = function (t) {
          try {
            return !!t();
          } catch (t) {
            return !0;
          }
        };
      },
      "2aba": function (t, e, n) {
        var i = n("7726"),
          r = n("32e9"),
          o = n("69a8"),
          a = n("ca5a")("src"),
          s = n("fa5b"),
          l = ("" + s).split("toString");
        (n("8378").inspectSource = function (t) {
          return s.call(t);
        }),
          (t.exports = function (t, e, n, s) {
            var c = "function" == typeof n;
            c && (o(n, "name") || r(n, "name", e)),
              t[e] !== n &&
                (c &&
                  (o(n, a) || r(n, a, t[e] ? "" + t[e] : l.join(String(e)))),
                t === i
                  ? (t[e] = n)
                  : s
                  ? t[e]
                    ? (t[e] = n)
                    : r(t, e, n)
                  : (delete t[e], r(t, e, n)));
          })(Function.prototype, "toString", function () {
            return ("function" == typeof this && this[a]) || s.call(this);
          });
      },
      "2aeb": function (t, e, n) {
        var i = n("cb7c"),
          r = n("1495"),
          o = n("e11e"),
          a = n("613b")("IE_PROTO"),
          s = function () {},
          l = function () {
            var t,
              e = n("230e")("iframe"),
              i = o.length;
            for (
              e.style.display = "none",
                n("fab2").appendChild(e),
                e.src = "javascript:",
                (t = e.contentWindow.document).open(),
                t.write("<script>document.F=Object</script>"),
                t.close(),
                l = t.F;
              i--;

            )
              delete l.prototype[o[i]];
            return l();
          };
        t.exports =
          Object.create ||
          function (t, e) {
            var n;
            return (
              null !== t
                ? ((s.prototype = i(t)),
                  (n = new s()),
                  (s.prototype = null),
                  (n[a] = t))
                : (n = l()),
              void 0 === e ? n : r(n, e)
            );
          };
      },
      "2b4c": function (t, e, n) {
        var i = n("5537")("wks"),
          r = n("ca5a"),
          o = n("7726").Symbol,
          a = "function" == typeof o;
        (t.exports = function (t) {
          return i[t] || (i[t] = (a && o[t]) || (a ? o : r)("Symbol." + t));
        }).store = i;
      },
      "2d00": function (t, e) {
        t.exports = !1;
      },
      "2d95": function (t, e) {
        var n = {}.toString;
        t.exports = function (t) {
          return n.call(t).slice(8, -1);
        };
      },
      "2fdb": function (t, e, n) {
        "use strict";
        var i = n("5ca1"),
          r = n("d2c8");
        i(i.P + i.F * n("5147")("includes"), "String", {
          includes: function (t) {
            return !!~r(this, t, "includes").indexOf(
              t,
              arguments.length > 1 ? arguments[1] : void 0
            );
          },
        });
      },
      3024: function (t, e) {
        t.exports = function (t, e, n) {
          var i = void 0 === n;
          switch (e.length) {
            case 0:
              return i ? t() : t.call(n);
            case 1:
              return i ? t(e[0]) : t.call(n, e[0]);
            case 2:
              return i ? t(e[0], e[1]) : t.call(n, e[0], e[1]);
            case 3:
              return i ? t(e[0], e[1], e[2]) : t.call(n, e[0], e[1], e[2]);
            case 4:
              return i
                ? t(e[0], e[1], e[2], e[3])
                : t.call(n, e[0], e[1], e[2], e[3]);
          }
          return t.apply(n, e);
        };
      },
      "30f1": function (t, e, n) {
        "use strict";
        var i = n("b8e3"),
          r = n("63b6"),
          o = n("9138"),
          a = n("35e8"),
          s = n("481b"),
          l = n("8f60"),
          c = n("45f2"),
          d = n("53e2"),
          u = n("5168")("iterator"),
          p = !([].keys && "next" in [].keys()),
          h = function () {
            return this;
          };
        t.exports = function (t, e, n, f, b, m, g) {
          l(n, e, f);
          var v,
            _,
            y,
            M = function (t) {
              if (!p && t in x) return x[t];
              switch (t) {
                case "keys":
                case "values":
                  return function () {
                    return new n(this, t);
                  };
              }
              return function () {
                return new n(this, t);
              };
            },
            O = e + " Iterator",
            w = "values" == b,
            A = !1,
            x = t.prototype,
            z = x[u] || x["@@iterator"] || (b && x[b]),
            C = z || M(b),
            k = b ? (w ? M("entries") : C) : void 0,
            S = ("Array" == e && x.entries) || z;
          if (
            (S &&
              (y = d(S.call(new t()))) !== Object.prototype &&
              y.next &&
              (c(y, O, !0), i || "function" == typeof y[u] || a(y, u, h)),
            w &&
              z &&
              "values" !== z.name &&
              ((A = !0),
              (C = function () {
                return z.call(this);
              })),
            (i && !g) || (!p && !A && x[u]) || a(x, u, C),
            (s[e] = C),
            (s[O] = h),
            b)
          )
            if (
              ((v = {
                values: w ? C : M("values"),
                keys: m ? C : M("keys"),
                entries: k,
              }),
              g)
            )
              for (_ in v) _ in x || o(x, _, v[_]);
            else r(r.P + r.F * (p || A), e, v);
          return v;
        };
      },
      "32e9": function (t, e, n) {
        var i = n("86cc"),
          r = n("4630");
        t.exports = n("9e1e")
          ? function (t, e, n) {
              return i.f(t, e, r(1, n));
            }
          : function (t, e, n) {
              return (t[e] = n), t;
            };
      },
      "32fc": function (t, e, n) {
        var i = n("e53d").document;
        t.exports = i && i.documentElement;
      },
      "335c": function (t, e, n) {
        var i = n("6b4c");
        t.exports = Object("z").propertyIsEnumerable(0)
          ? Object
          : function (t) {
              return "String" == i(t) ? t.split("") : Object(t);
            };
      },
      "355d": function (t, e) {
        e.f = {}.propertyIsEnumerable;
      },
      "35e8": function (t, e, n) {
        var i = n("d9f6"),
          r = n("aebd");
        t.exports = n("8e60")
          ? function (t, e, n) {
              return i.f(t, e, r(1, n));
            }
          : function (t, e, n) {
              return (t[e] = n), t;
            };
      },
      "36c3": function (t, e, n) {
        var i = n("335c"),
          r = n("25eb");
        t.exports = function (t) {
          return i(r(t));
        };
      },
      3702: function (t, e, n) {
        var i = n("481b"),
          r = n("5168")("iterator"),
          o = Array.prototype;
        t.exports = function (t) {
          return void 0 !== t && (i.Array === t || o[r] === t);
        };
      },
      3846: function (t, e, n) {
        n("9e1e") &&
          "g" != /./g.flags &&
          n("86cc").f(RegExp.prototype, "flags", {
            configurable: !0,
            get: n("0bfb"),
          });
      },
      "38fd": function (t, e, n) {
        var i = n("69a8"),
          r = n("4bf8"),
          o = n("613b")("IE_PROTO"),
          a = Object.prototype;
        t.exports =
          Object.getPrototypeOf ||
          function (t) {
            return (
              (t = r(t)),
              i(t, o)
                ? t[o]
                : "function" == typeof t.constructor &&
                  t instanceof t.constructor
                ? t.constructor.prototype
                : t instanceof Object
                ? a
                : null
            );
          };
      },
      "3a38": function (t, e) {
        var n = Math.ceil,
          i = Math.floor;
        t.exports = function (t) {
          return isNaN((t = +t)) ? 0 : (t > 0 ? i : n)(t);
        };
      },
      "3c11": function (t, e, n) {
        "use strict";
        var i = n("63b6"),
          r = n("584a"),
          o = n("e53d"),
          a = n("f201"),
          s = n("cd78");
        i(i.P + i.R, "Promise", {
          finally: function (t) {
            var e = a(this, r.Promise || o.Promise),
              n = "function" == typeof t;
            return this.then(
              n
                ? function (n) {
                    return s(e, t()).then(function () {
                      return n;
                    });
                  }
                : t,
              n
                ? function (n) {
                    return s(e, t()).then(function () {
                      throw n;
                    });
                  }
                : t
            );
          },
        });
      },
      "40c3": function (t, e, n) {
        var i = n("6b4c"),
          r = n("5168")("toStringTag"),
          o =
            "Arguments" ==
            i(
              (function () {
                return arguments;
              })()
            );
        t.exports = function (t) {
          var e, n, a;
          return void 0 === t
            ? "Undefined"
            : null === t
            ? "Null"
            : "string" ==
              typeof (n = (function (t, e) {
                try {
                  return t[e];
                } catch (t) {}
              })((e = Object(t)), r))
            ? n
            : o
            ? i(e)
            : "Object" == (a = i(e)) && "function" == typeof e.callee
            ? "Arguments"
            : a;
        };
      },
      4178: function (t, e, n) {
        var i,
          r,
          o,
          a = n("d864"),
          s = n("3024"),
          l = n("32fc"),
          c = n("1ec9"),
          d = n("e53d"),
          u = d.process,
          p = d.setImmediate,
          h = d.clearImmediate,
          f = d.MessageChannel,
          b = d.Dispatch,
          m = 0,
          g = {},
          v = function () {
            var t = +this;
            if (g.hasOwnProperty(t)) {
              var e = g[t];
              delete g[t], e();
            }
          },
          _ = function (t) {
            v.call(t.data);
          };
        (p && h) ||
          ((p = function (t) {
            for (var e = [], n = 1; arguments.length > n; )
              e.push(arguments[n++]);
            return (
              (g[++m] = function () {
                s("function" == typeof t ? t : Function(t), e);
              }),
              i(m),
              m
            );
          }),
          (h = function (t) {
            delete g[t];
          }),
          "process" == n("6b4c")(u)
            ? (i = function (t) {
                u.nextTick(a(v, t, 1));
              })
            : b && b.now
            ? (i = function (t) {
                b.now(a(v, t, 1));
              })
            : f
            ? ((o = (r = new f()).port2),
              (r.port1.onmessage = _),
              (i = a(o.postMessage, o, 1)))
            : d.addEventListener &&
              "function" == typeof postMessage &&
              !d.importScripts
            ? ((i = function (t) {
                d.postMessage(t + "", "*");
              }),
              d.addEventListener("message", _, !1))
            : (i =
                "onreadystatechange" in c("script")
                  ? function (t) {
                      l.appendChild(c("script")).onreadystatechange =
                        function () {
                          l.removeChild(this), v.call(t);
                        };
                    }
                  : function (t) {
                      setTimeout(a(v, t, 1), 0);
                    })),
          (t.exports = { set: p, clear: h });
      },
      "41a0": function (t, e, n) {
        "use strict";
        var i = n("2aeb"),
          r = n("4630"),
          o = n("7f20"),
          a = {};
        n("32e9")(a, n("2b4c")("iterator"), function () {
          return this;
        }),
          (t.exports = function (t, e, n) {
            (t.prototype = i(a, { next: r(1, n) })), o(t, e + " Iterator");
          });
      },
      "43fc": function (t, e, n) {
        "use strict";
        var i = n("63b6"),
          r = n("656e"),
          o = n("4439");
        i(i.S, "Promise", {
          try: function (t) {
            var e = r.f(this),
              n = o(t);
            return (n.e ? e.reject : e.resolve)(n.v), e.promise;
          },
        });
      },
      4439: function (t, e) {
        t.exports = function (t) {
          try {
            return { e: !1, v: t() };
          } catch (t) {
            return { e: !0, v: t };
          }
        };
      },
      "454f": function (t, e, n) {
        n("46a7");
        var i = n("584a").Object;
        t.exports = function (t, e, n) {
          return i.defineProperty(t, e, n);
        };
      },
      "456d": function (t, e, n) {
        var i = n("4bf8"),
          r = n("0d58");
        n("5eda")("keys", function () {
          return function (t) {
            return r(i(t));
          };
        });
      },
      4588: function (t, e) {
        var n = Math.ceil,
          i = Math.floor;
        t.exports = function (t) {
          return isNaN((t = +t)) ? 0 : (t > 0 ? i : n)(t);
        };
      },
      "45d0": function (t, e, n) {
        "use strict";
        var i =
          (this && this.__importDefault) ||
          function (t) {
            return t && t.__esModule ? t : { default: t };
          };
        Object.defineProperty(e, "__esModule", { value: !0 });
        const r = i(n("0750"));
        e.default = (t) => {
          if (!t) throw new Error("is-color-name: No color provided");
          return Object.keys(r.default).includes(t);
        };
      },
      "45f2": function (t, e, n) {
        var i = n("d9f6").f,
          r = n("07e3"),
          o = n("5168")("toStringTag");
        t.exports = function (t, e, n) {
          t &&
            !r((t = n ? t : t.prototype), o) &&
            i(t, o, { configurable: !0, value: e });
        };
      },
      4630: function (t, e) {
        t.exports = function (t, e) {
          return {
            enumerable: !(1 & t),
            configurable: !(2 & t),
            writable: !(4 & t),
            value: e,
          };
        };
      },
      "46a7": function (t, e, n) {
        var i = n("63b6");
        i(i.S + i.F * !n("8e60"), "Object", { defineProperty: n("d9f6").f });
      },
      "47ee": function (t, e, n) {
        var i = n("c3a1"),
          r = n("9aa9"),
          o = n("355d");
        t.exports = function (t) {
          var e = i(t),
            n = r.f;
          if (n)
            for (var a, s = n(t), l = o.f, c = 0; s.length > c; )
              l.call(t, (a = s[c++])) && e.push(a);
          return e;
        };
      },
      "481b": function (t, e) {
        t.exports = {};
      },
      "4bf8": function (t, e, n) {
        var i = n("be13");
        t.exports = function (t) {
          return Object(i(t));
        };
      },
      "4c95": function (t, e, n) {
        "use strict";
        var i = n("e53d"),
          r = n("584a"),
          o = n("d9f6"),
          a = n("8e60"),
          s = n("5168")("species");
        t.exports = function (t) {
          var e = "function" == typeof r[t] ? r[t] : i[t];
          a &&
            e &&
            !e[s] &&
            o.f(e, s, {
              configurable: !0,
              get: function () {
                return this;
              },
            });
        };
      },
      "4ee1": function (t, e, n) {
        var i = n("5168")("iterator"),
          r = !1;
        try {
          var o = [7][i]();
          (o.return = function () {
            r = !0;
          }),
            Array.from(o, function () {
              throw 2;
            });
        } catch (t) {}
        t.exports = function (t, e) {
          if (!e && !r) return !1;
          var n = !1;
          try {
            var o = [7],
              a = o[i]();
            (a.next = function () {
              return { done: (n = !0) };
            }),
              (o[i] = function () {
                return a;
              }),
              t(o);
          } catch (t) {}
          return n;
        };
      },
      "50ed": function (t, e) {
        t.exports = function (t, e) {
          return { value: e, done: !!t };
        };
      },
      5147: function (t, e, n) {
        var i = n("2b4c")("match");
        t.exports = function (t) {
          var e = /./;
          try {
            "/./"[t](e);
          } catch (n) {
            try {
              return (e[i] = !1), !"/./"[t](e);
            } catch (t) {}
          }
          return !0;
        };
      },
      5168: function (t, e, n) {
        var i = n("dbdb")("wks"),
          r = n("62a0"),
          o = n("e53d").Symbol,
          a = "function" == typeof o;
        (t.exports = function (t) {
          return i[t] || (i[t] = (a && o[t]) || (a ? o : r)("Symbol." + t));
        }).store = i;
      },
      "52a7": function (t, e) {
        e.f = {}.propertyIsEnumerable;
      },
      "53e2": function (t, e, n) {
        var i = n("07e3"),
          r = n("241e"),
          o = n("5559")("IE_PROTO"),
          a = Object.prototype;
        t.exports =
          Object.getPrototypeOf ||
          function (t) {
            return (
              (t = r(t)),
              i(t, o)
                ? t[o]
                : "function" == typeof t.constructor &&
                  t instanceof t.constructor
                ? t.constructor.prototype
                : t instanceof Object
                ? a
                : null
            );
          };
      },
      "549b": function (t, e, n) {
        "use strict";
        var i = n("d864"),
          r = n("63b6"),
          o = n("241e"),
          a = n("b0dc"),
          s = n("3702"),
          l = n("b447"),
          c = n("20fd"),
          d = n("7cd6");
        r(
          r.S +
            r.F *
              !n("4ee1")(function (t) {
                Array.from(t);
              }),
          "Array",
          {
            from: function (t) {
              var e,
                n,
                r,
                u,
                p = o(t),
                h = "function" == typeof this ? this : Array,
                f = arguments.length,
                b = f > 1 ? arguments[1] : void 0,
                m = void 0 !== b,
                g = 0,
                v = d(p);
              if (
                (m && (b = i(b, f > 2 ? arguments[2] : void 0, 2)),
                null == v || (h == Array && s(v)))
              )
                for (n = new h((e = l(p.length))); e > g; g++)
                  c(n, g, m ? b(p[g], g) : p[g]);
              else
                for (u = v.call(p), n = new h(); !(r = u.next()).done; g++)
                  c(n, g, m ? a(u, b, [r.value, g], !0) : r.value);
              return (n.length = g), n;
            },
          }
        );
      },
      "54a1": function (t, e, n) {
        n("6c1c"), n("1654"), (t.exports = n("95d5"));
      },
      5537: function (t, e, n) {
        var i = n("8378"),
          r = n("7726"),
          o = r["__core-js_shared__"] || (r["__core-js_shared__"] = {});
        (t.exports = function (t, e) {
          return o[t] || (o[t] = void 0 !== e ? e : {});
        })("versions", []).push({
          version: i.version,
          mode: n("2d00") ? "pure" : "global",
          copyright: "© 2019 Denis Pushkarev (zloirock.ru)",
        });
      },
      5559: function (t, e, n) {
        var i = n("dbdb")("keys"),
          r = n("62a0");
        t.exports = function (t) {
          return i[t] || (i[t] = r(t));
        };
      },
      "584a": function (t, e) {
        var n = (t.exports = { version: "2.6.11" });
        "number" == typeof __e && (__e = n);
      },
      "5b4e": function (t, e, n) {
        var i = n("36c3"),
          r = n("b447"),
          o = n("0fc9");
        t.exports = f