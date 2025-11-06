// app.part18-de-30.js
.currentScript;
                    if (e && e.get !== t && document.currentScript)
                      return document.currentScript;
                    try {
                      throw new Error();
                    } catch (t) {
                      var n,
                        i,
                        r,
                        o =
                          /.*at [^(]*\((.*):(.+):(.+)\)$/gi.exec(t.stack) ||
                          /@([^@]*):(\d+):(\d+)\s*$/gi.exec(t.stack),
                        a = (o && o[1]) || !1,
                        s = (o && o[2]) || !1,
                        l = document.location.href.replace(
                          document.location.hash,
                          ""
                        ),
                        c = document.getElementsByTagName("script");
                      a === l &&
                        ((n = document.documentElement.outerHTML),
                        (i = new RegExp(
                          "(?:[^\\n]+?\\n){0," +
                            (s - 2) +
                            "}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*",
                          "i"
                        )),
                        (r = n.replace(i, "$1").trim()));
                      for (var d = 0; d < c.length; d++) {
                        if ("interactive" === c[d].readyState) return c[d];
                        if (c[d].src === a) return c[d];
                        if (
                          a === l &&
                          c[d].innerHTML &&
                          c[d].innerHTML.trim() === r
                        )
                          return c[d];
                      }
                      return null;
                    }
                  };
                })
                  ? i.apply(e, [])
                  : i) || (t.exports = r);
        },
        8925: function (t, e, n) {
          var i = n("c6cd"),
            r = Function.toString;
          "function" != typeof i.inspectSource &&
            (i.inspectSource = function (t) {
              return r.call(t);
            }),
            (t.exports = i.inspectSource);
        },
        "8aa5": function (t, e, n) {
          "use strict";
          var i = n("6547").charAt;
          t.exports = function (t, e, n) {
            return e + (n ? i(t, e).length : 1);
          };
        },
        "90e3": function (t, e) {
          var n = 0,
            i = Math.random();
          t.exports = function (t) {
            return (
              "Symbol(" +
              String(void 0 === t ? "" : t) +
              ")_" +
              (++n + i).toString(36)
            );
          };
        },
        9112: function (t, e, n) {
          var i = n("83ab"),
            r = n("9bf2"),
            o = n("5c6c");
          t.exports = i
            ? function (t, e, n) {
                return r.f(t, e, o(1, n));
              }
            : function (t, e, n) {
                return (t[e] = n), t;
              };
        },
        9263: function (t, e, n) {
          "use strict";
          var i = n("ad6d"),
            r = n("9f7f"),
            o = RegExp.prototype.exec,
            a = String.prototype.replace,
            s = o,
            l = (function () {
              var t = /a/,
                e = /b*/g;
              return (
                o.call(t, "a"),
                o.call(e, "a"),
                0 !== t.lastIndex || 0 !== e.lastIndex
              );
            })(),
            c = r.UNSUPPORTED_Y || r.BROKEN_CARET,
            d = void 0 !== /()??/.exec("")[1];
          (l || d || c) &&
            (s = function (t) {
              var e,
                n,
                r,
                s,
                u = this,
                p = c && u.sticky,
                h = i.call(u),
                f = u.source,
                b = 0,
                m = t;
              return (
                p &&
                  (-1 === (h = h.replace("y", "")).indexOf("g") && (h += "g"),
                  (m = String(t).slice(u.lastIndex)),
                  u.lastIndex > 0 &&
                    (!u.multiline ||
                      (u.multiline && "\n" !== t[u.lastIndex - 1])) &&
                    ((f = "(?: " + f + ")"), (m = " " + m), b++),
                  (n = new RegExp("^(?:" + f + ")", h))),
                d && (n = new RegExp("^" + f + "$(?!\\s)", h)),
                l && (e = u.lastIndex),
                (r = o.call(p ? n : u, m)),
                p
                  ? r
                    ? ((r.input = r.input.slice(b)),
                      (r[0] = r[0].slice(b)),
                      (r.index = u.lastIndex),
                      (u.lastIndex += r[0].length))
                    : (u.lastIndex = 0)
                  : l &&
                    r &&
                    (u.lastIndex = u.global ? r.index + r[0].length : e),
                d &&
                  r &&
                  r.length > 1 &&
                  a.call(r[0], n, function () {
                    for (s = 1; s < arguments.length - 2; s++)
                      void 0 === arguments[s] && (r[s] = void 0);
                  }),
                r
              );
            }),
            (t.exports = s);
        },
        "94ca": function (t, e, n) {
          var i = n("d039"),
            r = /#|\.prototype\./,
            o = function (t, e) {
              var n = s[a(t)];
              return (
                n == c || (n != l && ("function" == typeof e ? i(e) : !!e))
              );
            },
            a = (o.normalize = function (t) {
              return String(t).replace(r, ".").toLowerCase();
            }),
            s = (o.data = {}),
            l = (o.NATIVE = "N"),
            c = (o.POLYFILL = "P");
          t.exports = o;
        },
        "99af": function (t, e, n) {
          "use strict";
          var i = n("23e7"),
            r = n("d039"),
            o = n("e8b5"),
            a = n("861d"),
            s = n("7b0b"),
            l = n("50c4"),
            c = n("8418"),
            d = n("65f0"),
            u = n("1dde"),
            p = n("b622"),
            h = n("2d00"),
            f = p("isConcatSpreadable"),
            b = 9007199254740991,
            m = "Maximum allowed index exceeded",
            g =
              h >= 51 ||
              !r(function () {
                var t = [];
                return (t[f] = !1), t.concat()[0] !== t;
              }),
            v = u("concat"),
            _ = function (t) {
              if (!a(t)) return !1;
              var e = t[f];
              return void 0 !== e ? !!e : o(t);
            };
          i(
            { target: "Array", proto: !0, forced: !g || !v },
            {
              concat: function (t) {
                var e,
                  n,
                  i,
                  r,
                  o,
                  a = s(this),
                  u = d(a, 0),
                  p = 0;
                for (e = -1, i = arguments.length; e < i; e++)
                  if (_((o = -1 === e ? a : arguments[e]))) {
                    if (p + (r = l(o.length)) > b) throw TypeError(m);
                    for (n = 0; n < r; n++, p++) n in o && c(u, p, o[n]);
                  } else {
                    if (p >= b) throw TypeError(m);
                    c(u, p++, o);
                  }
                return (u.length = p), u;
              },
            }
          );
        },
        "9bf2": function (t, e, n) {
          var i = n("83ab"),
            r = n("0cfb"),
            o = n("825a"),
            a = n("c04e"),
            s = Object.defineProperty;
          e.f = i
            ? s
            : function (t, e, n) {
                if ((o(t), (e = a(e, !0)), o(n), r))
                  try {
                    return s(t, e, n);
                  } catch (t) {}
                if ("get" in n || "set" in n)
                  throw TypeError("Accessors not supported");
                return "value" in n && (t[e] = n.value), t;
              };
        },
        "9ed3": function (t, e, n) {
          "use strict";
          var i = n("ae93").IteratorPrototype,
            r = n("7c73"),
            o = n("5c6c"),
            a = n("d44e"),
            s = n("3f8c"),
            l = function () {
              return this;
            };
          t.exports = function (t, e, n) {
            var c = e + " Iterator";
            return (
              (t.prototype = r(i, { next: o(1, n) })),
              a(t, c, !1, !0),
              (s[c] = l),
              t
            );
          };
        },
        "9f7f": function (t, e, n) {
          "use strict";
          var i = n("d039");
          function r(t, e) {
            return RegExp(t, e);
          }
          (e.UNSUPPORTED_Y = i(function () {
            var t = r("a", "y");
            return (t.lastIndex = 2), null != t.exec("abcd");
          })),
            (e.BROKEN_CARET = i(function () {
              var t = r("^r", "gy");
              return (t.lastIndex = 2), null != t.exec("str");
            }));
        },
        a4d3: function (t, e, n) {
          "use strict";
          var i = n("23e7"),
            r = n("da84"),
            o = n("d066"),
            a = n("c430"),
            s = n("83ab"),
            l = n("4930"),
            c = n("fdbf"),
            d = n("d039"),
            u = n("5135"),
            p = n("e8b5"),
            h = n("861d"),
            f = n("825a"),
            b = n("7b0b"),
            m = n("fc6a"),
            g = n("c04e"),
            v = n("5c6c"),
            _ = n("7c73"),
            y = n("df75"),
            M = n("241c"),
            O = n("057f"),
            w = n("7418"),
            A = n("06cf"),
            x = n("9bf2"),
            z = n("d1e7"),
            C = n("9112"),
            k = n("6eeb"),
            S = n("5692"),
            T = n("f772"),
            D = n("d012"),
            L = n("90e3"),
            q = n("b622"),
            E = n("e538"),
            j = n("746f"),
            P = n("d44e"),
            R = n("69f3"),
            I = n("b727").forEach,
            W = T("hidden"),
            N = "Symbol",
            B = "prototype",
            F = q("toPrimitive"),
            $ = R.set,
            H = R.getterFor(N),
            Y = Object[B],
            U = r.Symbol,
            X = o("JSON", "stringify"),
            V = A.f,
            G = x.f,
            K = O.f,
            Z = z.f,
            J = S("symbols"),
            Q = S("op-symbols"),
            tt = S("string-to-symbol-registry"),
            et = S("symbol-to-string-registry"),
            nt = S("wks"),
            it = r.QObject,
            rt = !it || !it[B] || !it[B].findChild,
            ot =
              s &&
              d(function () {
                return (
                  7 !=
                  _(
                    G({}, "a", {
                      get: function () {
                        return G(this, "a", { value: 7 }).a;
                      },
                    })
                  ).a
                );
              })
                ? function (t, e, n) {
                    var i = V(Y, e);
                    i && delete Y[e], G(t, e, n), i && t !== Y && G(Y, e, i);
                  }
                : G,
            at = function (t, e) {
              var n = (J[t] = _(U[B]));
              return (
                $(n, { type: N, tag: t, description: e }),
                s || (n.description = e),
                n
              );
            },
            st = c
              ? function (t) {
                  return "symbol" == typeof t;
                }
              : function (t) {
                  return Object(t) instanceof U;
                },
            lt = function (t, e, n) {
              t === Y && lt(Q, e, n), f(t);
              var i = g(e, !0);
              return (
                f(n),
                u(J, i)
                  ? (n.enumerable
                      ? (u(t, W) && t[W][i] && (t[W][i] = !1),
                        (n = _(n, { enumerable: v(0, !1) })))
                      : (u(t, W) || G(t, W, v(1, {})), (t[W][i] = !0)),
                    ot(t, i, n))
                  : G(t, i, n)
              );
            },
            ct = function (t, e) {
              f(t);
              var n = m(e),
                i = y(n).concat(ht(n));
              return (
                I(i, function (e) {
                  (s && !dt.call(n, e)) || lt(t, e, n[e]);
                }),
                t
              );
            },
            dt = function (t) {
              var e = g(t, !0),
                n = Z.call(this, e);
              return (
                !(this === Y && u(J, e) && !u(Q, e)) &&
                (!(
                  n ||
                  !u(this, e) ||
                  !u(J, e) ||
                  (u(this, W) && this[W][e])
                ) ||
                  n)
              );
            },
            ut = function (t, e) {
              var n = m(t),
                i = g(e, !0);
              if (n !== Y || !u(J, i) || u(Q, i)) {
                var r = V(n, i);
                return (
                  !r || !u(J, i) || (u(n, W) && n[W][i]) || (r.enumerable = !0),
                  r
                );
              }
            },
            pt = function (t) {
              var e = K(m(t)),
                n = [];
              return (
                I(e, function (t) {
                  u(J, t) || u(D, t) || n.push(t);
                }),
                n
              );
            },
            ht = function (t) {
              var e = t === Y,
                n = K(e ? Q : m(t)),
                i = [];
              return (
                I(n, function (t) {
                  !u(J, t) || (e && !u(Y, t)) || i.push(J[t]);
                }),
                i
              );
            };
          l ||
            (k(
              (U = function () {
                if (this instanceof U)
                  throw TypeError("Symbol is not a constructor");
                var t =
                    arguments.length && void 0 !== arguments[0]
                      ? String(arguments[0])
                      : void 0,
                  e = L(t),
                  n = function (t) {
                    this === Y && n.call(Q, t),
                      u(this, W) && u(this[W], e) && (this[W][e] = !1),
                      ot(this, e, v(1, t));
                  };
                return (
                  s && rt && ot(Y, e, { configurable: !0, set: n }), at(e, t)
                );
              })[B],
              "toString",
              function () {
                return H(this).tag;
              }
            ),
            k(U, "withoutSetter", function (t) {
              return at(L(t), t);
            }),
            (z.f = dt),
            (x.f = lt),
            (A.f = ut),
            (M.f = O.f = pt),
            (w.f = ht),
            (E.f = function (t) {
              return at(q(t), t);
            }),
            s &&
              (G(U[B], "description", {
                configurable: !0,
                get: function () {
                  return H(this).description;
                },
              }),
              a || k(Y, "propertyIsEnumerable", dt, { unsafe: !0 }))),
            i({ global: !0, wrap: !0, forced: !l, sham: !l }, { Symbol: U }),
            I(y(nt), function (t) {
              j(t);
            }),
            i(
              { target: N, stat: !0, forced: !l },
              {
                for: function (t) {
                  var e = String(t);
                  if (u(tt, e)) return tt[e];
                  var n = U(e);
                  return (tt[e] = n), (et[n] = e), n;
                },
                keyFor: function (t) {
                  if (!st(t)) throw TypeError(t + " is not a symbol");
                  if (u(et, t)) return et[t];
                },
                useSetter: function () {
                  rt = !0;
                },
                useSimple: function () {
                  rt = !1;
                },
              }
            ),
            i(
              { target: "Object", stat: !0, forced: !l, sham: !s },
              {
                create: function (t, e) {
                  return void 0 === e ? _(t) : ct(_(t), e);
                },
                defineProperty: lt,
                defineProperties: ct,
                getOwnPropertyDescriptor: ut,
              }
            ),
            i(
              { target: "Object", stat: !0, forced: !l },
              { getOwnPropertyNames: pt, getOwnPropertySymbols: ht }
            ),
            i(
              {
                target: "Object",
                stat: !0,
                forced: d(function () {
                  w.f(1);
                }),
              },
              {
                getOwnPropertySymbols: function (t) {
                  return w.f(b(t));
                },
              }
            ),
            X &&
              i(
                {
                  target: "JSON",
                  stat: !0,
                  forced:
                    !l ||
                    d(function () {
                      var t = U();
                      return (
                        "[null]" != X([t]) ||
                        "{}" != X({ a: t }) ||
                        "{}" != X(Object(t))
                      );
                    }),
                },
                {
                  stringify: function (t, e, n) {
                    for (var i, r = [t], o = 1; arguments.length > o; )
                      r.push(arguments[o++]);
                    if (((i = e), (h(e) || void 0 !== t) && !st(t)))
                      return (
                        p(e) ||
                          (e = function (t, e) {
                            if (
                              ("function" == typeof i &&
                                (e = i.call(this, t, e)),
                              !st(e))
                            )
                              return e;
                          }),
                        (r[1] = e),
                        X.apply(null, r)
                      );
                  },
                }
              ),
            U[B][F] || C(U[B], F, U[B].valueOf),
            P(U, N),
            (D[W] = !0);
        },
        a691: function (t, e) {
          var n = Math.ceil,
            i = Math.floor;
          t.exports = function (t) {
            return isNaN((t = +t)) ? 0 : (t > 0 ? i : n)(t);
          };
        },
        ac1f: function (t, e, n) {
          "use strict";
          var i = n("23e7"),
            r = n("9263");
          i(
            { target: "RegExp", proto: !0, forced: /./.exec !== r },
            { exec: r }
          );
        },
        ad6d: function (t, e, n) {
          "use strict";
          var i = n("825a");
          t.exports = function () {
            var t = i(this),
              e = "";
            return (
              t.global && (e += "g"),
              t.ignoreCase && (e += "i"),
              t.multiline && (e += "m"),
              t.dotAll && (e += "s"),
              t.unicode && (e += "u"),
              t.sticky && (e += "y"),
              e
            );
          };
        },
        ae93: function (t, e, n) {
          "use strict";
          var i,
            r,
            o,
            a = n("d039"),
            s = n("e163"),
            l = n("9112"),
            c = n("5135"),
            d = n("b622"),
            u = n("c430"),
            p = d("iterator"),
            h = !1;
          [].keys &&
            ("next" in (o = [].keys())
              ? (r = s(s(o))) !== Object.prototype && (i = r)
              : (h = !0));
          var f =
            null == i ||
            a(function () {
              var t = {};
              return i[p].call(t) !== t;
            });
          f && (i = {}),
            (u && !f) ||
              c(i, p) ||
              l(i, p, function () {
                return this;
              }),
            (t.exports = { IteratorPrototype: i, BUGGY_SAFARI_ITERATORS: h });
        },
        b041: function (t, e, n) {
          "use strict";
          var i = n("00ee"),
            r = n("f5df");
          t.exports = i
            ? {}.toString
            : function () {
                return "[object " + r(this) + "]";
              };
        },
        b622: function (t, e, n) {
          var i = n("da84"),
            r = n("5692"),
            o = n("5135"),
            a = n("90e3"),
            s = n("4930"),
            l = n("fdbf"),
            c = r("wks"),
            d = i.Symbol,
            u = l ? d : (d && d.withoutSetter) || a;
          t.exports = function (t) {
            return (
              o(c, t) ||
                (s && o(d, t) ? (c[t] = d[t]) : (c[t] = u("Symbol." + t))),
              c[t]
            );
          };
        },
        b727: function (t, e, n) {
          var i = n("0366"),
            r = n("44ad"),
            o = n("7b0b"),
            a = n("50c4"),
            s = n("65f0"),
            l = [].push,
            c = function (t) {
              var e = 1 == t,
                n = 2 == t,
                c = 3 == t,
                d = 4 == t,
                u = 6 == t,
                p = 7 == t,
                h = 5 == t || u;
              return function (f, b, m, g) {
                for (
                  var v,
                    _,
                    y = o(f),
                    M = r(y),
                    O = i(b, m, 3),
                    w = a(M.length),
                    A = 0,
                    x = g || s,
                    z = e ? x(f, w) : n || p ? x(f, 0) : void 0;
                  w > A;
                  A++
                )
                  if ((h || A in M) && ((_ = O((v = M[A]), A, y)), t))
                    if (e) z[A] = _;
                    else if (_)
                      switch (t) {
                        case 3:
                          return !0;
                        case 5:
                          return v;
                        case 6:
                          return A;
                        case 2:
                          l.call(z, v);
                      }
                    else
                      switch (t) {
                        case 4:
                          return !1;
                        case 7:
                          l.call(z, v);
                      }
                return u ? -1 : c || d ? d : z;
              };
            };
          t.exports = {
            forEach: c(0),
            map: c(1),
            filter: c(2),
            some: c(3),
            every: c(4),
            find: c(5),
            findIndex: c(6),
            filterOut: c(7),
          };
        },
        c04e: function (t, e, n) {
          var i = n("861d");
          t.exports = function (t, e) {
            if (!i(t)) return t;
            var n, r;
            if (
              e &&
              "function" == typeof (n = t.toString) &&
              !i((r = n.call(t)))
            )
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
        c430: function (t, e) {
          t.exports = !1;
        },
        c6b6: function (t, e) {
          var n = {}.toString;
          t.exports = function (t) {
            return n.call(t).slice(8, -1);
          };
        },
        c6cd: function (t, e, n) {
          var i = n("da84"),
            r = n("ce4e"),
            o = "__core-js_shared__",
            a = i[o] || r(o, {});
          t.exports = a;
        },
        c8ba: function (t, e) {
          var n;
          n = (function () {
            return this;
          })();
          try {
            n = n || new Function("return this")();
          } catch (t) {
            "object" == typeof window && (n = window);
          }
          t.exports = n;
        },
        ca84: function (t, e, n) {
          var i = n("5135"),
            r = n("fc6a"),
            o = n("4d64").indexOf,
            a = n("d012");
          t.exports = function (t, e) {
            var n,
              s = r(t),
              l = 0,
              c = [];
            for (n in s) !i(a, n) && i(s, n) && c.push(n);
            for (; e.length > l; )
              i(s, (n = e[l++])) && (~o(c, n) || c.push(n));
            return c;
          };
        },
        cc12: function (t, e, n) {
          var i = n("da84"),
            r = n("861d"),
            o = i.document,
            a = r(o) && r(o.createElement);
          t.exports = function (t) {
            return a ? o.createElement(t) : {};
          };
        },
        ce4e: function (t, e, n) {
          var i = n("da84"),
            r = n("9112");
          t.exports = function (t, e) {
            try {
              r(i, t, e);
            } catch (n) {
              i[t] = e;
            }
            return e;
          };
        },
        d012: function (t, e) {
          t.exports = {};
        },
        d039: function (t, e) {
          t.exports = function (t) {
            try {
              return !!t();
            } catch (t) {
              return !0;
            }
          };
        },
        d066: function (t, e, n) {
          var i = n("428f"),
            r = n("da84"),
            o = function (t) {
              return "function" == typeof t ? t : void 0;
            };
          t.exports = function (t, e) {
            return arguments.length < 2
              ? o(i[t]) || o(r[t])
              : (i[t] && i[t][e]) || (r[t] && r[t][e]);
          };
        },
        d1e7: function (t, e, n) {
          "use strict";
          var i = {}.propertyIsEnumerable,
            r = Object.getOwnPropertyDescriptor,
            o = r && !i.call({ 1: 2 }, 1);
          e.f = o
            ? function (t) {
                var e = r(this, t);
                return !!e && e.enumerable;
              }
            : i;
        },
        d28b: function (t, e, n) {
          n("746f")("iterator");
        },
        d2bb: function (t, e, n) {
          var i = n("825a"),
            r = n("3bbe");
          t.exports =
            Object.setPrototypeOf ||
            ("__proto__" in {}
              ? (function () {
                  var t,
                    e = !1,
                    n = {};
                  try {
                    (t = Object.getOwnPropertyDescriptor(
                      Object.prototype,
                      "__proto__"
                    ).set).call(n, []),
                      (e = n instanceof Array);
                  } catch (t) {}
                  return function (n, o) {
                    return i(n), r(o), e ? t.call(n, o) : (n.__proto__ = o), n;
                  };
                })()
              : void 0);
        },
        d3b7: function (t, e, n) {
          var i = n("00ee"),
            r = n("6eeb"),
            o = n("b041");
          i || r(Object.prototype, "toString", o, { unsafe: !0 });
        },
        d44e: function (t, e, n) {
          var i = n("9bf2").f,
            r = n("5135"),
            o = n("b622")("toStringTag");
          t.exports = function (t, e, n) {
            t &&
              !r((t = n ? t : t.prototype), o) &&
              i(t, o, { configurable: !0, value: e });
          };
        },
        d784: function (t, e, n) {
          "use strict";
          n("ac1f");
          var i = n("6eeb"),
            r = n("d039"),
            o = n("b622"),
            a = n("9263"),
            s = n("9112"),
            l = o("species"),
            c = !r(function () {
              var t = /./;
              return (
                (t.exec = function () {
                  var t = [];
                  return (t.groups = { a: "7" }), t;
                }),
                "7" !== "".replace(t, "$<a>")
              );
            }),
            d = "$0" === "a".replace(/./, "$0"),
            u = o("replace"),
            p = !!/./[u] && "" === /./[u]("a", "$0"),
            h = !r(function () {
              var t = /(?:)/,
                e = t.exec;
              t.exec = function () {
                return e.apply(this, arguments);
              };
              var n = "ab".split(t);
              return 2 !== n.length || "a" !== n[0] || "b" !== n[1];
            });
          t.exports = function (t, e, n, u) {
            var f = o(t),
              b = !r(function () {
                var e = {};
                return (
                  (e[f] = function () {
                    return 7;
                  }),
                  7 != ""[t](e)
                );
              }),
              m =
                b &&
                !r(function () {
                  var e = !1,
                    n = /a/;
                  return (
                    "split" === t &&
                      (((n = {}).constructor = {}),
                      (n.constructor[l] = function () {
                        return n;
                      }),
                      (n.flags = ""),
                      (n[f] = /./[f])),
                    (n.exec = function () {
                      return (e = !0), null;
                    }),
                    n[f](""),
                    !e
                  );
                });
            if (
              !b ||
              !m ||
              ("replace" === t && (!c || !d || p)) ||
              ("split" === t && !h)
            ) {
              var g = /./[f],
                v = n(
                  f,
                  ""[t],
                  function (t, e, n, i, r) {
                    return e.exec === a
                      ? b && !r
                        ? { done: !0, value: g.call(e, n, i) }
                        : { done: !0, value: t.call(n, e, i) }
                      : { done: !1 };
                  },
                  {
                    REPLACE_KEEPS_$0: d,
                    REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: p,
                  }
                ),
                _ = v[0],
                y = v[1];
              i(String.prototype, t, _),
                i(
                  RegExp.prototype,
                  f,
                  2 == e
                    ? function (t, e) {
                        return y.call(t, this, e);
                      }
                    : function (t) {
                        return y.call(t, this);
                      }
                );
            }
            u && s(RegExp.prototype[f], "sham", !0);
          };
        },
        da84: function (t, e, n) {
          (function (e) {
            var n = function (t) {
              return t && t.Math == Math && t;
            };
            t.exports =
              n("object" == typeof globalThis && globalThis) ||
              n("object" == typeof window && window) ||
              n("object" == typeof self && self) ||
              n("object" == typeof e && e) ||
              (function () {
                return this;
              })() ||
              Function("return this")();
          }).call(this, n("c8ba"));
        },
        ddb0: function (t, e, n) {
          var i = n("da84"),
            r = n("fdbc"),
            o = n("e260"),
            a = n("9112"),
            s = n("b622"),
            l = s("iterator"),
            c = s("toStringTag"),
            d = o.values;
          for (var u in r) {
            var p = i[u],
              h = p && p.prototype;
            if (h) {
              if (h[l] !== d)
                try {
                  a(h, l, d);
                } catch (t) {
                  h[l] = d;
                }
              if ((h[c] || a(h, c, u), r[u]))
                for (var f in o)
                  if (h[f] !== o[f])
                    try {
                      a(h, f, o[f]);
                    } catch (t) {
                      h[f] = o[f];
                    }
            }
          }
        },
        df75: function (t, e, n) {
          var i = n("ca84"),
            r = n("7839");
          t.exports =
            Object.keys ||
            function (t) {
              return i(t, r);
            };
        },
        e01a: function (t, e, n) {
          "use strict";
          var i = n("23e7"),
            r = n("83ab"),
            o = n("da84"),
            a = n("5135"),
            s = n("861d"),
            l = n("9bf2").f,
            c = n("e893"),
            d = o.Symbol;
          if (
            r &&
            "function" == typeof d &&
            (!("description" in d.prototype) || void 0 !== d().description)
          ) {
            var u = {},
              p = function () {
                var t =
                    arguments.length < 1 || void 0 === arguments[0]
                      ? void 0
                      : String(arguments[0]),
                  e = this instanceof p ? new d(t) : void 0 === t ? d() : d(t);
                return "" === t && (u[e] = !0), e;
              };
            c(p, d);
            var h = (p.prototype = d.prototype);
            h.constructor = p;
            var f = h.toString,
              b = "Symbol(test)" == String(d("test")),
              m = /^Symbol\((.*)\)[^)]+$/;
            l(h, "description", {
              configurable: !0,
              get: function () {
                var t = s(this) ? this.valueOf() : this,
                  e = f.call(t);
                if (a(u, t)) return "";
                var n = b ? e.slice(7, -1) : e.replace(m, "$1");
                return "" === n ? void 0 : n;
              },
            }),
              i({ global: !0, forced: !0 }, { Symbol: p });
          }
        },
        e163: function (t, e, n) {
          var i = n("5135"),
            r = n("7b0b"),
            o = n("f772"),
            a = n("e177"),
            s = o("IE_PROTO"),
            l = Object.prototype;
          t.exports = a
            ? Object.getPrototypeOf
            : function (t) {
                return (
                  (t = r(t)),
                  i(t, s)
                    ? t[s]
                    : "function" == typeof t.constructor &&
                      t instanceof t.constructor
                    ? t.constructor.prototype
                    : t instanceof Object
                    ? l
                    : null
                );
              };
        },
        e177: function (t, e, n) {
          var i = n("d039");
          t.exports = !i(function () {
            function t() {}
            return (
              (t.prototype.constructor = null),
              Object.getPrototypeOf(new t()) !== t.prototype
            );
          });
        },
        e260: function (t, e, n) {
          "use strict";
          var i = n("fc6a"),
            r = n("44d2"),
            o = n("3f8c"),
            a = n("69f3"),
            s = n("7dd0"),
            l = "Array Iterator",
            c = a.set,
            d = a.getterFor(l);
          (t.exports = s(
            Array,
            "Array",
            function (t, e) {
              c(this, { type: l, target: i(t), index: 0, kind: e });
            },
            function () {
              var t = d(this),
                e = t.target,
                n = t.kind,
                i = t.index++;
              return !e || i >= e.length
                ? ((t.target = void 0), { value: void 0, done: !0 })
                : "keys" == n
                ? { value: i, done: !1 }
                : "values" == n
                ? { value: e[i], done: !1 }
                : { value: [i, e[i]], done: !1 };
            },
            "values"
          )),
            (o.Arguments = o.Array),
            r("keys"),
            r("values"),
            r("entries");
        },
        e538: function (t, e, n) {
          var i = n("b622");
          e.f = i;
        },
        e893: function (t, e, n) {
          var i = n("5135"),
            r = n("56ef"),
            o = n("06cf"),
            a = n("9bf2");
          t.exports = function (t, e) {
            for (var n = r(e), s = a.f, l = o.f, c = 0; c < n.length; c++) {
              var d = n[c];
              i(t, d) || s(t, d, l(e, d));
            }
          };
        },
        e8b5: function (t, e, n) {
          var i = n("c6b6");
          t.exports =
            Array.isArray ||
            function (t) {
              return "Array" == i(t);
            };
        },
        f5df: function (t, e, n) {
          var i = n("00ee"),
            r = n("c6b6"),
            o = n("b622")("toStringTag"),
            a =
              "Arguments" ==
              r(
                (function () {
                  return arguments;
                })()
              );
          t.exports = i
            ? r
            : function (t) {
                var e, n, i;
                return void 0 === t
                  ? "Undefined"
                  : null === t
                  ? "Null"
                  : "string" ==
                    typeof (n = (function (t, e) {
                      try {
                        return t[e];
                      } catch (t) {}
                    })((e = Object(t)), o))
                  ? n
                  : a
                  ? r(e)
                  : "Object" == (i = r(e)) && "function" == typeof e.callee
                  ? "Arguments"
                  : i;
              };
        },
        f772: function (t, e, n) {
          var i = n("5692"),
            r = n("90e3"),
            o = i("keys");
          t.exports = function (t) {
            return o[t] || (o[t] = r(t));
          };
        },
        fb15: function (t, e, n) {
          "use strict";
          if ((n.r(e), "undefined" != typeof window)) {
            var i = window.document.currentScript,
              r = n("8875");
            (i = r()),
              "currentScript" in document ||
                Object.defineProperty(document, "currentScript", { get: r });
            var o = i && i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/);
            o && (n.p = o[1]);
          }
          function a(t) {
            return (a =
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
          n("a4d3"),
            n("e01a"),
            n("d3b7"),
            n("d28b"),
            n("3ca3"),
            n("ddb0"),
            n("5319"),
            n("ac1f"),
            n("4d63"),
            n("25f0"),
            n("99af");
          var s = function (t) {
              return (
                window.ActiveXobject ||
                "ActiveXObject" in window ||
                /Trident\/7\./.test(navigator.userAgent)
                  ? t.removeNode(!0)
                  : t.remove(),
                t
              );
            },
            l = (function () {
              function t(e) {
                (function (t, e) {
                  if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function");
                })(this, t),
                  (this.standards = {
                    strict: "strict",
                    loose: "loose",
                    html5: "html5",
                  }),
                  (this.previewBody = null),
                  (this.close = null),
                  (this.previewBodyUtilPrintBtn = null),
                  (this.selectArray = []),
                  (this.counter = 0),
                  (this.settings = { standard: this.standards.html5 }),
                  Object.assign(this.settings, e),
                  this.init();
              }
              return (
                (function (t, e, n) {
                  e &&
                    (function (t, e) {
                      for (var n = 0; n < e.length; n++) {
                        var i = e[n];
                        (i.enumerable = i.enumerable || !1),
                          (i.configurable = !0),
                          "value" in i && (i.writable = !0),
                          Object.defineProperty(t, i.key, i);
                      }
                    })(t.prototype, e);
                })(t, [
                  {
                    key: "init",
                    value: function () {
                      this.counter++,
                        (this.settings.id = "printArea_".concat(this.counter));
                      var t = "";
                      this.settings.url &&
                        !this.settings.asyncUrl &&
                        (t = this.settings.url);
                      var e = this;
                      if (this.settings.asyncUrl)
                        e.settings.asyncUrl(function (t) {
                          var n = e.getPrintWindow(t);
                          e.settings.preview
                            ? e.previewIfrmaeLoad()
                            : e.print(n);
                        }, e.settings.vue);
                      else {
                        var n = this.getPrintWindow(t);
                        this.settings.url || this.write(n.doc),
                          this.settings.preview
                            ? this.previewIfrmaeLoad()
                            : this.print(n);
                      }
                    },
                  },
                  {
                    key: "addEvent",
                    value: function (t, e, n) {
                      t.addEventListener
                        ? t.addEventListener(e, n, !1)
                        : t.attachEvent
                        ? t.attachEvent("on" + e, n)
                        : (t["on" + e] = n);
                    },
                  },
                  {
                    key: "previewIfrmaeLoad",
                    value: function () {
                      var t = document.getElementById(
                        "vue-pirnt-nb-previewBox"
                      );
                      if (t) {
                        var e = this,
                          n = t.querySelector("iframe");
                        this.settings.previewBeforeOpenCallback(),
                          this.addEvent(n, "load", function () {
                            e.previewBoxShow(),
                              e.removeCanvasImg(),
                              e.settings.previewOpenCallback();
                          }),
                          this.addEvent(
                            t.querySelector(".previewBodyUtilPrintBtn"),
                            "click",
                            function () {
                              e.settings.beforeOpenCallback(),
                                e.settings.openCallback(),
                                n.contentWindow.print(),
                                e.settings.closeCallback();
                            }
                          );
                      }
                    },
                  },
                  {
                    key: "removeCanvasImg",
                    value: function () {
                      try {
                        if (this.elsdom)
                          for (
                            var t = this.elsdom.querySelectorAll(".canvasImg"),
                              e = 0;
                            e < t.length;
                            e++
                          )
                            s(t[e]);
                      } catch (t) {}
                    },
                  },
                  {
                    key: "print",
                    value: function (t) {
                      var e = this,
                        n = document.getElementById(this.settings.id) || t.f,
                        i =
                          document.getElementById(this.settings.id)
                            .contentWindow || t.f.contentWindow;
                      e.settings.beforeOpenCallback(),
                        e.addEvent(n, "load", function () {
                          i.focus(),
                            e.settings.openCallback(),
                            i.print(),
                            s(n),
                            e.settings.closeCallback(),
                            e.removeCanvasImg();
                        });
                    },
                  },
                  {
                    key: "write",
                    value: function (t) {
                      t.open(),
                        t.write(
                          ""
                            .concat(this.docType(), "<html>")
                            .concat(this.getHead())
                            .concat(this.getBody(), "</html>")
                        ),
                        t.close();
                    },
                  },
                  {
                    key: "docType",
                    value: function () {
                      if (this.settings.standard === this.standards.html5)
                        return "<!DOCTYPE html>";
                      var t =
                          this.settings.standard === this.standards.loose
                            ? " Transitional"
                            : "",
                        e =
                          this.settings.standard === this.standards.loose
                            ? "loose"
                            : "strict";
                      return '<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01'
                        .concat(t, '//EN" "http://www.w3.org/TR/html4/')
                        .concat(e, '.dtd">');
                    },
                  },
                  {
                    key: "getHead",
                    value: function () {
                      var t = "",
                        e = "",
                        n = "";
                      this.settings.extraHead &&
                        this.settings.extraHead.replace(
                          /([^,]+)/g,
                          function (e) {
                            t += e;
                          }
                        ),
                        [].forEach.call(
                          document.querySelectorAll("link"),
                          function (t) {
                            t.href.indexOf(".css") >= 0 &&
                              (e +=
                                '<link type="text/css" rel="stylesheet" href="'.concat(
                                  t.href,
                                  '" >'
                                ));
                          }
                        );
                      var i = document.styleSheets;
                      if (i && i.length > 0)
                        for (var r = 0; r < i.length; r++)
                          try {
                            if (i[r].cssRules || i[r].rules)
                              for (
                                var o = i[r].cssRules || i[r].rules, a = 0;
                                a < o.length;
                                a++
                              )
                                n += o[a].cssText;
                          } catch (t) {}
                      return (
                        this.settings.extraCss &&
                          this.settings.extraCss.replace(
                            /([^,\s]+)/g,
                            function (t) {
                              e +=
                                '<link type="text/css" rel="stylesheet" href="'.concat(
                                  t,
                                  '">'
                                );
                            }
                          ),
                        "<head><title>"
                          .concat(this.settings.popTitle, "</title>")
                          .concat(t)
                          .concat(e, '<style type="text/css">')
                          .concat(n, "</style></head>")
                      );
                    },
                  },
                  {
                    key: "getBody",
                    value: function () {
                      var t = this.settings.ids;
                      return (
                        (t = t.replace(new RegExp("#", "g"), "")),
                        (this.elsdom = this.beforeHanler(
                          document.getElementById(t)
                        )),
                        "<body>" +
                          this.getFormData(this.elsdom).outerHTML +
                          "</body>"
                      );
                    },
                  },
                  {
                    key: "beforeHanler",
                    value: function (t) {
                      for (
                        var e = t.querySelectorAll("canvas"), n = 0;
                        n < e.length;
                        n++
                      )
                        if (!e[n].style.display) {
                          var i = e[n].parentNode,
                            r = e[n].toDataURL("image/png"),
                            o = new Image();
                          (o.className = "canvasImg"),
                            (o.style.display = "none"),
                            (o.src = r),
                            i.appendChild(o);
                        }
                      return t;
                    },
                  },
                  {
                    key: "getFormData",
                    value: function (t) {
                      for (
                        var e = t.cloneNode(!0),
                          n = e.querySelectorAll("input,select,textarea"),
                          i = e.querySelectorAll(".canvasImg,canvas"),
                          r = -1,
                          o = 0;
                        o < i.length;
                        o++
                      ) {
                        var a = i[o].parentNode,
                          s = i[o];
                        "canvas" === s.tagName.toLowerCase()
                          ? a.removeChild(s)
                          : (s.style.display = "block");
                      }
                      for (var l = 0; l < n.length; l++) {
                        var c = n[l],
                          d = c.getAttribute("type"),
                          u = n[l];
                        if (
                          (d ||
                            (d =
                              "SELECT" === c.tagName
                                ? "select"
                                : "TEXTAREA" === c.tagName
                                ? "textarea"
                                : ""),
                          "INPUT" === c.tagName)
                        )
                          "radio" === d || "checkbox" === d
                            ? c.checked && u.setAttribute("checked", c.checked)
                            : ((u.value = c.value),
                              u.setAttribute("value", c.value));
                        else if ("select" === d) {
                          r++;
                          for (
                            var p = 0;
                            p < t.querySelectorAll("select").length;
                            p++
                          ) {
                            var h = t.querySelectorAll("select")[p];
                            if (
                              (!h.getAttribute("newbs") &&
                                h.setAttribute("newbs", p),
                              h.getAttribute("newbs") == r)
                            ) {
                              var f =
                                t.querySelectorAll("select")[r].selectedIndex;
                              c.options[f].setAttribute("selected", !0);
                            }
                          }
                        } else
                          (u.innerHTML = c.value),
                            u.setAttribute("html", c.value);
                      }
                      return e;
                    },
                  },
                  {
                    key: "getPrintWindow",
                    value: function (t) {
                      var e = this.Iframe(t);
                      return { f: e, win: e.contentWindow || e, doc: e.doc };
                    },
                  },
                  {
                    key: "previewBoxShow",
                    value: function () {
                      var t = document.getElementById(
                        "vue-pirnt-nb-previewBox"
                      );
                      t &&
                        (document
                          .querySelector("html")
                          .setAttribute("style", "overflow: hidden"),
                        (t.style.display = "block"));
                    },
                  },
                  {
                    key: "previewBoxHide",
                    value: function () {
                      var t = document.getElementById(
                        "vue-pirnt-nb-previewBox"
                      );
                      t &&
                        (document
                          .querySelector("html")
                          .setAttribute("style", "overflow: visible;"),
                        t.querySelector("iframe") &&
                          s(t.querySelector("iframe")),
                        (t.style.display = "none"));
                    },
                  },
                  {
                    key: "previewBox",
                    value: function () {
                      var t = document.getElementById(
                          "vue-pirnt-nb-previewBox"
                        ),
                        e = "previewBody";
                      if (t)
                        return (
                          t.querySelector("iframe") &&
                            s(t.querySelector("iframe")),
                          {
                            close: t.querySelector(".previewClose"),
                            previewBody: t.querySelector(".".concat(e)),
                          }
                        );
                      var n = document.createElement("div");
                      n.setAttribute("id", "vue-pirnt-nb-previewBox"),
                        n.setAttribute(
                          "style",
                          "position: fixed;top: 0px;left: 0px;width: 100%;height: 100%;background: white;display:none"
                        ),
                        (n.style.zIndex = this.settings.zIndex);
                      var i = document.createElement("div");
                      i.setAttribute("class", "previewHeader"),
                        i.setAttribute("style", "padding: 5px 20px;"),
                        (i.innerHTML = this.settings.previewTitle),
                        n.appendChild(i),
                        (this.close = document.createElement("div"));
                      var r = this.close;
                      r.setAttribute("class", "previewClose"),
                        r.setAttribute(
                          "style",
                          "position: absolute;top: 5px;right: 20px;width: 25px;height: 20px;cursor: pointer;"
                        );
                      var o = document.createElement("div"),
                        a = document.createElement("div");
                      o.setAttribute("class", "closeBefore"),
                        o.setAttribute(
                          "style",
                          "position: absolute;width: 3px;height: 100%;background: #040404;transform: rotate(45deg); top: 0px;left: 50%;"
                        ),
                        a.setAttribute("class", "closeAfter"),
                        a.setAttribute(
                          "style",
                          "position: absolute;width: 3px;height: 100%;background: #040404;transform: rotate(-45deg); top: 0px;left: 50%;"
                        ),
                        r.appendChild(o),
                        r.appendChild(a),
                        i.appendChild(r),
                        (this.previewBody = document.createElement("div"));
                      var l = this.previewBody;
                      l.setAttribute("class", e),
                        l.setAttribute(
                          "style",
                          "display: flex;flex-direction: column; height: 100%;"
                        ),
                        n.appendChild(l);
                      var c = document.createElement("div");
                      c.setAttribute("class", "previewBodyUtil"),
                        c.setAttribute(
                          "style",
                          "height: 32px;background: #474747;position: relative;"
                        ),
                        l.appendChild(c),
                        (this.previewBodyUtilPrintBtn =
                          document.createElement("div"));
                      var d = this.previewBodyUtilPrintBtn;
                      return (
                        d.setAttribute("class", "previewBodyUtilPrintBtn"),
                        (d.innerHTML = this.settings.previewPrintBtnLabel),
                        d.setAttribute(
                          "style",
                          "position: absolute;padding: 2px 10px;margin-top: 3px;left: 24px;font-size: 14px;color: white;cursor: pointer;background-color: rgba(0,0,0,.12);background-image: linear-gradient(hsla(0,0%,100%,.05),hsla(0,0%,100%,0));background-clip: padding-box;border: 1px solid rgba(0,0,0,.35);border-color: rgba(0,0,0,.32) rgba(0,0,0,.38) rgba(0,0,0,.42);box-shadow: inset 0 1px 0 hsla(0,0%,100%,.05), inset 0 0 1px hsla(0,0%,100%,.15), 0 1px 0 hsla(0,0%,100%,.05);"
                        ),
                        c.appendChild(d),
                        document.body.appendChild(n),
                        { close: this.close, previewBody: this.previewBody }
                      );
                    },
                  },
                  {
                    key: "iframeBox",
                    value: function (t, e) {
                      var n = document.createElement("iframe");
                      return (
                        (n.style.border = "0px"),
                        (n.style.position = "absolute"),
                        (n.style.width = "0px"),
                        (n.style.height = "0px"),
                        (n.style.right = "0px"),
                        (n.style.top = "0px"),
                        n.setAttribute("id", t),
                        n.setAttribute("src", e),
                        n
                      );
                    },
                  },
                  {
                    key: "Iframe",
                    value: function (t) {
                      var e = this.settings.id;
                      t = t || new Date().getTime();
                      var n = this,
                        i = this.iframeBox(e, t);
                      try {
                        if (this.settings.preview) {
                          i.setAttribute("style", "border: 0px;flex: 1;");
                          var r = this.previewBox(),
                            o = r.previewBody,
                            a = r.close;
                          o.appendChild(i),
                            this.addEvent(a, "click", function () {
                              n.previewBoxHide();
                            });
                        } else document.body.appendChild(i);
                        (i.doc = null),
                          (i.doc = i.contentDocument
                            ? i.contentDocument
                            : i.contentWindow
                            ? i.contentWindow.document
                            : i.document);
                      } catch (t) {
                        throw new Error(
                          t + ". iframes may not be supported in this browser."
                        );
                      }
                      if (null == i.doc)
                        throw new Error("Cannot find document.");
                      return i;
                    },
                  },
                ]),
                t
              );
            })(),
            c = {
              directiveName: "print",
              bind: function (t, e, n) {
                var i = n.context,
                  r = "";
                !(function (t, e, n) {
                  t.addEventListener
                    ? t.addEventListener(e, n, !1)
                    : t.attachEvent
                    ? t.attachEvent("on" + e, n)
                    : (t.onclick = n);
                })(t, "click", function () {
                  i.$nextTick(function () {
                    var t, n;
                    if (
                      (null != e &&
                        null !== (t = e.value) &&
                        void 0 !== t &&
                        t.clickMounted &&
                        e.value.clickMounted(i),
                      "string" == typeof e.value)
                    )
                      (r = e.value), o();
                    else if ("object" === a(e.value) && e.value.id) {
                      var s = (r = e.value.id).replace(
                        new RegExp("#", "g"),
                        ""
                      );
                      document.getElementById(s) || (r = ""), o();
                    } else {
                      if (
                        null == e ||
                        null === (n = e.value) ||
                        void 0 === n ||
                        !n.preview
                      )
                        return void window.print();
                      o();
                    }
                  });
                });
                var o = function () {
                  new l({
                    ids: r,
                    vue: i,
                    url: e.value.url,
                    standard: "",
                    extraHead: e.value.extraHead,
                    extraCss: e.value.extraCss,
                    previewTitle: e.value.previewTitle || "打印预览",
                    zIndex: e.value.zIndex || 20002,
                    previewPrintBtnLabel:
                      e.value.previewPrintBtnLabel || "打印",
                    popTitle: e.value.popTitle,
                    preview: e.value.preview || !1,
                    asyncUrl: e.value.asyncUrl,
                    previewBeforeOpenCallback: function () {
                      e.value.previewBeforeOpenCallback &&
                        e.value.previewBeforeOpenCallback(i);
                    },
                    previewOpenCallback: function () {
                      e.value.previewOpenCallback &&
                        e.value.previewOpenCallback(i);
                    },
                    openCallback: function () {
                      e.value.openCallback && e.value.openCallback(i);
                    },
                    closeCallback: function () {
                      e.value.closeCallback && e.value.closeCallback(i);
                    },
                    beforeOpenCallback: function () {
                      e.value.beforeOpenCallback &&
                        e.value.beforeOpenCallback(i);
                    },
                  });
                };
              },
              install: function (t) {
                t.directive("print", c);
              },
            },
            d = c;
          e.default = d;
        },
        fc6a: function (t, e, n) {
          var i = n("44ad"),
            r = n("1d80");
          t.exports = function (t) {
            return i(r(t));
          };
        },
        fdbc: function (t, e) {
          t.exports = {
            CSSRuleList: 0,
            CSSStyleDeclaration: 0,
            CSSValueList: 0,
            ClientRectList: 0,
            DOMRectList: 0,
            DOMStringList: 0,
            DOMTokenList: 1,
            DataTransferItemList: 0,
            FileList: 0,
            HTMLAllCollection: 0,
            HTMLCollection: 0,
            HTMLFormElement: 0,
            HTMLSelectElement: 0,
            MediaList: 0,
            MimeTypeArray: 0,
            NamedNodeMap: 0,
            NodeList: 1,
            PaintRequestList: 0,
            Plugin: 0,
            PluginArray: 0,
            SVGLengthList: 0,
            SVGNumberList: 0,
            SVGPathSegList: 0,
            SVGPointList: 0,
            SVGStringList: 0,
            SVGTransformList: 0,
            SourceBufferList: 0,
            StyleSheetList: 0,
            TextTrackCueList: 0,
            TextTrackList: 0,
            TouchList: 0,
          };
        },
        fdbf: function (t, e, n) {
          var i = n("4930");
          t.exports = i && !Symbol.sham && "symbol" == typeof Symbol.iterator;
        },
      }));
  },
  function (t, e, n) {
    "use strict";
    (function (t) {
      function n(t) {
        return (n =
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
      function i(t, e, n) {
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
      function r(t, e) {
        return (
          (function (t) {
            if (Array.isArray(t)) return t;
          })(t) ||
          (function (t, e) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) {
              var n = [],
                i = !0,
                r = !1,
                o = void 0;
              try {
                for (
                  var a, s = t[Symbol.iterator]();
                  !(i = (a = s.next()).done) &&
                  (n.push(a.value), !e || n.length !== e);
                  i = !0
                );
              } catch (t) {
                (r = !0), (o = t);
              } finally {
                try {
                  i || null == s.return || s.return();
                } finally {
                  if (r) throw o;
                }
              }
              return n;
            }
          })(t, e) ||
          a(t, e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function o(t) {
        return (
          (function (t) {
            if (Array.isArray(t)) return s(t);
          })(t) ||
          (function (t) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(t))
              return Array.from(t);
          })(t) ||
          a(t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function a(t, e) {
        if (t) {
          if ("string" == typeof t) return s(t, e);
          var n = Object.prototype.toString.call(t).slice(8, -1);
          return (
            "Object" === n && t.constructor && (n = t.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(t)
              : "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? s(t, e)
              : void 0
          );
        }
      }
      function s(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, i = new Array(e); n < e; n++) i[n] = t[n];
        return i;
      }
      var l = "asc",
        c = "desc",
        d = "none",
        u = "records",
        p = [10, 20, 30, 40, 50],
        h =
          "undefined" != typeof globalThis
            ? globalThis
            : "undefined" != typeof window
            ? window
            : void 0 !== t
            ? t
            : "undefined" != typeof self
            ? self
            : {},
        f = (function (t, e) {
          return (
            (function (t, e) {
              var n = "[object Arguments]",
                i = "[object Map]",
                r = "[object Object]",
                o = "[object Set]",
                a = /^\[object .+?Constructor\]$/,
                s = /^(?:0|[1-9]\d*)$/,
                l = {};
              (l["[object Float32Array]"] =
                l["[object Float64Array]"] =
                l["[object Int8Array]"] =
                l["[object Int16Array]"] =
                l["[object Int32Array]"] =
                l["[object Uint8Array]"] =
                l["[object Uint8ClampedArray]"] =
                l["[object Uint16Array]"] =
                l["[object Uint32Array]"] =
                  !0),
                (l[n] =
                  l["[object Array]"] =
                  l["[object ArrayBuffer]"] =
                  l["[object Boolean]"] =
                  l["[object DataView]"] =
                  l["[object Date]"] =
                  l["[object Error]"] =
                  l["[object Function]"] =
                  l[i] =
                  l["[object Number]"] =
                  l[r] =
                  l["[object RegExp]"] =
                  l[o] =
                  l["[object String]"] =
                  l["[object WeakMap]"] =
                    !1);
              var c = "object" == typeof h && h && h.Object === Object && h,
                d =
                  "object" == typeof self &&
                  self &&
                  self.Object === Object &&
                  self,
                u = c || d || Function("return this")(),
                p = e && !e.nodeType && e,
                f = p && t && !t.nodeType && t,
                b = f && f.exports === p,
                m = b && c.process,
                g = (function () {
                  try {
                    return m && m.binding && m.binding("util");
                  } catch (t) {}
                })(),
                v = g && g.isTypedArray;
              function _(t, e) {
                for (var n = -1, i = null == t ? 0 : t.length; ++n < i; )
                  if (e(t[n], n, t)) return !0;
                return !1;
              }
              function y(t) {
                var e = -1,
                  n = Array(t.size);
                return (
                  t.forEach(function (t, i) {
                    n[++e] = [i, t];
                  }),
                  n
                );
              }
              function M(t) {
                var e = -1,
                  n = Array(t.size);
                return (
                  t.forEach(function (t) {
                    n[++e] = t;
                  }),
                  n
                );
              }
              var O,
                w,
                A,
                x = Array.prototype,
                z = Function.prototype,
                C = Object.prototype,
                k = u["__core-js_shared__"],
                S = z.toString,
                T = C.hasOwnProperty,
                D = (O = /[^.]+$/.exec((k && k.keys && k.keys.IE_PROTO) || ""))
                  ? "Symbol(src)_1." + O
                  : "",
                L = C.toString,
                q = RegExp(
                  "^" +
                    S.call(T)
                      .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
                      .replace(
                        /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                        "$1.*?"
                      ) +
                    "$"
                ),
                E = b ? u.Buffer : void 0,
                j = u.Symbol,
                P = u.Uint8Array,
                R = C.propertyIsEnumerable,
                I = x.splice,
                W = j ? j.toStringTag : void 0,
                N = Object.getOwnPropertySymbols,
                B = E ? E.isBuffer : void 0,
                F =
                  ((w = Object.keys),
                  (A = Object),
                  function (t) {
                    return w(A(t));
                  }),
                $ = ft(u, "DataView"),
                H = ft(u, "Map"),
                Y = ft(u, "Promise"),
                U = ft(u, "Set"),
                X = ft(u, "WeakMap"),
                V = ft(Object, "create"),
                G = vt($),
                K = vt(H),
                Z = vt(Y),
                J = vt(U),
                Q = vt(X),
                tt = j ? j.prototype : void 0,
                et = tt ? tt.valueOf : void 0;
              function nt(t) {
                var e = -1,
                  n = null == t ? 0 : t.length;
                for (this.clear(); ++e < n; ) {
                  var i = t[e];
                  this.set(i[0], i[1]);
                }
              }
              function it(t) {
                var e = -1,
                  n = null == t ? 0 : t.length;
                for (this.clear(); ++e < n; ) {
                  var i = t[e];
                  this.set(i[0], i[1]);
                }
              }
              function rt(t) {
                var e = -1,
                  n = null == t ? 0 : t.length;
                for (this.clear(); ++e < n; ) {
                  var i = t[e];
                  this.set(i[0], i[1]);
                }
              }
              function ot(t) {
                var e = -1,
                  n = null == t ? 0 : t.length;
                for (this.__data__ = new rt(); ++e < n; ) this.add(t[e]);
              }
              function at(t) {
                var e = (this.__data__ = new it(t));
                this.size = e.size;
              }
              function st(t, e) {
                for (var n = t.length; n--; ) if (_t(t[n][0], e)) return n;
                return -1;
              }
              function lt(t) {
                return null == t
                  ? void 0 === t
                    ? "[object Undefined]"
                    : "[object Null]"
                  : W && W in Object(t)
                  ? (function (t) {
                      var e = T.call(t, W),
                        n = t[W];
                      try {
                        t[W] = void 0;
                        var i = !0;
                      } catch (t) {}
                      var r = L.call(t);
                      return i && (e ? (t[W] = n) : delete t[W]), r;
                    })(t)
                  : (function (t) {
                      return L.call(t);
                    })(t);
              }
              function ct(t) {
                return zt(t) && lt(t) == n;
              }
              function dt(t, e, a, s, l) {
                return (
                  t === e ||
                  (null == t || null == e || (!zt(t) && !zt(e))
                    ? t != t && e != e
                    : (function (t, e, a, s, l, c) {
                        var d = Mt(t),
                          u = Mt(e),
                          p = d ? "[object Array]" : mt(t),
                          h = u ? "[object Array]" : mt(e),
                          f = (p = p == n ? r : p) == r,
                          b = (h = h == n ? r : h) == r,
                          m = p == h;
                        if (m && Ot(t)) {
                          if (!Ot(e)) return !1;
                          (d = !0), (f = !1);
                        }
                        if (m && !f)
                          return (
                            c || (c = new at()),
                            d || Ct(t)
                              ? ut(t, e, a, s, l, c)
                              : (function (t, e, n, r, a, s, l) {
                                  switch (n) {
                                    case "[object DataView]":
                                      if (
                                        t.byteLength != e.byteLength ||
                                        t.byteOffset != e.byteOffset
                                      )
                                        return !1;
                                      (t = t.buffer), (e = e.buffer);
                                    case "[object ArrayBuffer]":
                                      return !(
                                        t.byteLength != e.byteLength ||
                                        !s(new P(t), new P(e))
                                      );
                                    case "[object Boolean]":
                                    case "[object Date]":
                                    case "[object Number]":
                                      return _t(+t, +e);
                                    case "[object Error]":
                                      return (
                                        t.name == e.name &&
                                        t.message == e.message
                                      );
                                    case "[object RegExp]":
                                    case "[object String]":
                                      return t == e + "";
                                    case i:
                                      var c = y;
                                    case o:
                                      var d = 1 & r;
                                      if (
                                        (c || (c = M), t.size != e.size && !d)
                                      )
                                        return !1;
                                      var u = l.get(t);
                                      if (u) return u == e;
                                      (r |= 2), l.set(t, e);
                                      var p = ut(c(t), c(e), r, a, s, l);
                                      return l.delete(t), p;
                                    case "[object Symbol]":
                                      if (et) return et.call(t) == et.call(e);
                                  }
                                  return !1;
                                })(t, e, p, a, s, l, c)
                          );
                        if (!(1 & a)) {
                          var g = f && T.call(t, "__wrapped__"),
                            v = b && T.call(e, "__wrapped__");
                          if (g || v) {
                            var _ = g ? t.value() : t,
                              O = v ? e.value() : e;
                            return c || (c = new at()), l(_, O, a, s, c);
                          }
                        }
                        return (
                          !!m &&
                          (c || (c = new at()),
                          (function (t, e, n, i, r, o) {
                            var a = 1 & n,
                              s = pt(t),
                              l = s.length;
                            if (l != pt(e).length && !a) return !1;
                            for (var c = l; c--; ) {
                              var d = s[c];
                              if (!(a ? d in e : T.call(e, d))) return !1;
                            }
                            var u = o.get(t);
                            if (u && o.get(e)) return u == e;
                            var p = !0;
                            o.set(t, e), o.set(e, t);
                            for (var h = a; ++c < l; ) {
                              var f = t[(d = s[c])],
                                b = e[d];
                              if (i)
                                var m = a
                                  ? i(b, f, d, e, t, o)
                                  : i(f, b, d, t, e, o);
                              if (
                                !(void 0 === m
                                  ? f === b || r(f, b, n, i, o)
                                  : m)
                              ) {
                                p = !1;
                                break;
                              }
                              h || (h = "constructor" == d);
                            }
                            if (p && !h) {
                              var g = t.constructor,
                                v = e.constructor;
                              g == v ||
                                !("constructor" in t) ||
                                !("constructor" in e) ||
                                ("function" == typeof g &&
                                  g instanceof g &&
                                  "function" == typeof v &&
                                  v instanceof v) ||
                                (p = !1);
                            }
                            return o.delete(t), o.delete(e), p;
                          })(t, e, a, s, l, c))
                        );
                      })(t, e, a, s, dt, l))
                );
              }
              function ut(t, e, n, i, r, o) {
                var a = 1 & n,
                  s = t.length,
                  l = e.length;
                if (s != l && !(a && l > s)) return !1;
                var c = o.get(t);
                if (c && o.get(e)) return c == e;
                var d = -1,
                  u = !0,
                  p = 2 & n ? new ot() : void 0;
                for (o.set(t, e), o.set(e, t); ++d < s; ) {
                  var h = t[d],
                    f = e[d];
                  if (i) var b = a ? i(f, h, d, e, t, o) : i(h, f, d, t, e, o);
                  if (void 0 !== b) {
                    if (b) continue;
                    u = !1;
                    break;
                  }
                  if (p) {
                    if (
                      !_(e, function (t, e) {
                        if (
                          ((a = e), !p.has(a) && (h === t || r(h, t, n, i, o)))
                        )
                          return p.push(e);
                        var a;
                      })
                    ) {
                      u = !1;
                      break;
                    }
                  } else if (h !== f && !r(h, f, n, i, o)) {
                    u = !1;
                    break;
                  }
                }
                return o.delete(t), o.delete(e), u;
              }
              function pt(t) {
                return (function (t, e, n) {
                  var i = e(t);
                  return Mt(t)
                    ? i
                    : (function (t, e) {
                        for (var n = -1, i = e.length, r = t.length; ++n < i; )
                          t[r + n] = e[n];
                        return t;
                      })(i, n(t));
                })(t, kt, bt);
              }
              function ht(t, e) {
                var n = t.__data__;
                return (function (t) {
                  var e = typeof t;
                  return "string" == e ||
                    "number" == e ||
                    "symbol" == e ||
                    "boolean" == e
                    ? "__proto__" !== t
                    : null === t;
                })(e)
                  ? n["string" == typeof e ? "string" : "hash"]
                  : n.map;
              }
              function ft(t, e) {
                var n = (function (t, e) {
                  return null == t ? void 0 : t[e];
                })(t, e);
                return (function (t) {
                  return (
                    !(
                      !xt(t) ||
                      (function (t) {
                        return !!D && D in t;
                      })(t)
                    ) && (wt(t) ? q : a).test(vt(t))
                  );
                })(n)
                  ? n
                  : void 0;
              }
              (nt.prototype.clear = function () {
                (this.__data__ = V ? V(null) : {}), (this.size = 0);
              }),
                (nt.prototype.delete = function (t) {
                  var e = this.has(t) && delete this.__data__[t];
                  return (this.size -= e ? 1 : 0), e;
                }),
                (nt.prototype.get = function (t) {
                  var e = this.__data__;
                  if (V) {
                    var n = e[t];
                    return "__lodash_hash_undefined__" === n ? void 0 : n;
                  }
                  return T.call(e, t) ? e[t] : void 0;
                }),
                (nt.prototype.has = function (t) {
                  var e = this.__data__;
                  return V ? void 0 !== e[t] : T.call(e, t);
                }),
                (nt.prototype.set = function (t, e) {
                  var n = this.__data__;
                  return (
                    (this.size += this.has(t) ? 0 : 1),
                    (n[t] =
                      V && void 0 === e ? "__lodash_hash_undefined__" : e),
                    this
                  );
                }),
                (it.prototype.clear = function () {
                  (this.__data__ = []), (this.size = 0);
                }),
                (it.prototype.delete = function (t) {
                  var e = this.__data__,
                    n = st(e, t);
                  return !(
                    n < 0 ||
                    (n == e.length - 1 ? e.pop() : I.call(e, n, 1),
                    --this.size,
                    0)
                  );
                }),
                (it.prototype.get = function (t) {
                  var e = this.__data__,
                    n = st(e, t);
                  return n < 0 ? void 0 : e[n][1];
                }),
                (it.prototype.has = function (t) {
                  return st(this.__data__, t) > -1;
                }),
                (it.prototype.set = function (t, e) {
                  var n = this.__data__,
                    i = st(n, t);
                  return (
                    i < 0 ? (++this.size, n.push([t, e])) : (n[i][1] = e), this
                  );
                }),
                (rt.prototype.clear = function () {
                  (this.size = 0),
                    (this.__data__ = {
                      hash: new nt(),
                      map: new (H || it)(),
                      string: new nt(),
                    });
                }),
                (rt.prototype.delete = function (t) {
                  var e = ht(this, t).delete(t);
                  return (this.size -= e ? 1 : 0), e;
                }),
                (rt.prototype.get = function (t) {
                  return ht(this, t).get(t);
                }),
                (rt.prototype.has = function (t) {
                  return ht(this, t).has(t);
                }),
                (rt.prototype.set = function (t, e) {
                  var n = ht(this, t),
                    i = n.size;
                  return n.set(t, e), (this.size += n.size == i ? 0 : 1), this;
                }),
                (ot.prototype.add = ot.prototype.push =
                  function (t) {
                    return (
                      this.__data__.set(t, "__lodash_hash_undefined__"), this
                    );
                  }),
                (ot.prototype.has = function (t) {
                  return this.__data__.has(t);
                }),
                (at.prototype.clear = function () {
                  (this.__data__ = new it()), (this.size = 0);
                }),
                (at.prototype.delete = function (t) {
                  var e = this.__data__,
                    n = e.delete(t);
                  return (this.size = e.size), n;
                }),
                (at.prototype.get = function (t) {
                  return this.__data__.get(t);
                }),
                (at.prototype.has = function (t) {
                  return this.__data__.has(t);
                }),
                (at.prototype.set = function (t, e) {
                  var n = this.__data__;
                  if (n instanceof it) {
                    var i = n.__data__;
                    if (!H || i.length < 199)
                      return i.push([t, e]), (this.size = ++n.size), this;
                    n = this.__data__ = new rt(i);
                  }
                  return n.set(t, e), (this.size = n.size), this;
                });
              var bt = N
                  ? function (t) {
                      return null == t
                        ? []
                        : ((t = Object(t)),
                          (function (t, e) {
                            for (
                              var n = -1,
                                i = null == t ? 0 : t.length,
                                r = 0,
                                o = [];
                              ++n < i;

                            ) {
                              var a = t[n];
                              e(a) && (o[r++] = a);
                            }
                            return o;
                          })(N(t), function (e) {
                            return R.call(t, e);
                          }));
                    }
                  : function () {
                      return [];
                    },
                mt = lt;
              function gt(t, e) {
                return (
                  !!(e = null == e ? 9007199254740991 : e) &&
                  ("number" == typeof t || s.test(t)) &&
                  t > -1 &&
                  t % 1 == 0 &&
                  t < e
                );
              }
              function vt(t) {
                if (null != t) {
                  try {
                    return S.call(t);
                  } catch (t) {}
                  try {
                    return t + "";
                  } catch (t) {}
                }
                return "";
              }
              function _t(t, e) {
                return t === e || (t != t && e != e);
              }
              (($ && "[object DataView]" != mt(new $(new ArrayBuffer(1)))) ||
                (H && mt(new H()) != i) ||
                (Y && "[object Promise]" != mt(Y.resolve())) ||
                (U && mt(new U()) != o) ||
                (X && "[object WeakMap]" != mt(new X()))) &&
                (mt = function (t) {
                  var e = lt(t),
                    n = e == r ? t.constructor : void 0,
                    a = n ? vt(n) : "";
                  if (a)
                    switch (a) {
                      case G:
                        return "[object DataView]";
                      case K:
                        return i;
                      case Z:
                        return "[object Promise]";
                      case J:
                        return o;
                      case Q:
                        return "[object WeakMap]";
                    }
                  return e;
                });
              var yt = ct(
                  (function () {
                    return arguments;
                  })()
                )
                  ? ct
                  : function (t) {
                      return (
                        zt(t) && T.call(t, "callee") && !R.call(t, "callee")
                      );
                    },
                Mt = Array.isArray,
                Ot =
                  B ||
                  function () {
                    return !1;
                  };
              function wt(t) {
                if (!xt(t)) return !1;
                var e = lt(t);
                return (
                  "[object Function]" == e ||
                  "[object GeneratorFunction]" == e ||
                  "[object AsyncFunction]" == e ||
                  "[object Proxy]" == e
                );
              }
              function At(t) {
                return (
                  "number" == typeof t &&
                  t > -1 &&
                  t % 1 == 0 &&
                  t <= 9007199254740991
                );
              }
              function xt(t) {
                var e = typeof t;
                return null != t && ("object" == e || "function" == e);
              }
              function zt(t) {
                return null != t && "object" == typeof t;
              }
              var Ct = v
                ? (function (t) {
                    return function (e) {
                      return t(e);
                    };
                  })(v)
                : function (t) {
                    return zt(t) && At(t.length) && !!l[lt(t)];
                  };
              function kt(t) {
                return null != (e = t) && At(e.length) && !wt(e)
                  ? (function (t, e) {
                      var n = Mt(t),
                        i = !n && yt(t),
                        r = !n && !i && Ot(t),
                        o = !n && !i && !r && Ct(t),
                        a = n || i || r || o,
                        s = a
                          ? (function (t, e) {
                              for (var n = -1, i = Array(t); ++n < t; )
                                i[n] = e(n);
                              return i;
                            })(t.length, String)
                          : [],
                        l = s.length;
                      for (var c in t)
                        !T.call(t, c) ||
                          (a &&
                            ("length" == c ||
                              (r && ("offset" == c || "parent" == c)) ||
                              (o &&
                                ("buffer" == c ||
                                  "byteLength" == c ||
                                  "byteOffset" == c)) ||
                              gt(c, l))) ||
                          s.push(c);
                      return s;
                    })(t)
                  : (function (t) {
                      if (
                        ((n = (e = t) && e.constructor),
                        e !== (("function" == typeof n && n.prototype) || C))
                      )
                        return F(t);
                      var e,
                        n,
                        i = [];
                      for (var r in Object(t))
                        T.call(t, r) && "constructor" != r && i.push(r);
                      return i;
                    })(t);
                var e;
              }
              t.exports = function (t, e) {
                return dt(t, e);
              };
            })((e = { exports: {} }), e.exports),
            e.exports
          );
        })(),
        b = {
          a: [
            "a",
            "à",
            "á",
            "â",
            "ã",
            "ä",
            "å",
            "æ",
            "ā",
            "ă",
            "ą",
            "ǎ",
            "ǟ",
            "ǡ",
            "ǻ",
            "ȁ",
            "ȃ",
            "ȧ",
            "ɐ",
            "ɑ",
            "ɒ",
            "ͣ",
            "а",
            "ӑ",
            "ӓ",
            "ᵃ",
            "ᵄ",
            "ᶏ",
            "ḁ",
            "ẚ",
            "ạ",
            "ả",
            "ấ",
            "ầ",
            "ẩ",
            "ẫ",
            "ậ",
            "ắ",
            "ằ",
            "ẳ",
            "ẵ",
            "ặ",
            "ₐ",
            "ⱥ",
            "ａ",
          ],
          b: ["b", "ƀ", "ƃ", "ɓ", "ᖯ", "ᵇ", "ᵬ", "ᶀ", "ḃ", "ḅ", "ḇ", "ｂ"],
          c: [
            "c",
            "ç",
            "ć",
            "ĉ",
            "ċ",
            "č",
            "ƈ",
            "ȼ",
            "ɕ",
            "ͨ",
            "ᴄ",
            "ᶜ",
            "ḉ",
            "ↄ",
            "ｃ",
          ],
          d: [
            "d",
            "ď",
            "đ",
            "Ƌ",
            "ƌ",
            "ȡ",
            "ɖ",
            "ɗ",
            "ͩ",
            "ᵈ",
            "ᵭ",
            "ᶁ",
            "ᶑ",
            "ḋ",
            "ḍ",
            "ḏ",
            "ḑ",
            "ḓ",
            "ｄ",
          ],
          e: [
            "e",
            "è",
            "é",
            "ê",
            "ë",
            "ē",
            "ĕ",
            "ė",
            "ę",
            "ě",
            "ǝ",
            "ȅ",
            "ȇ",
            "ȩ",
            "ɇ",
            "ɘ",
            "ͤ",
            "ᵉ",
            "ᶒ",
            "ḕ",
            "ḗ",
            "ḙ",
            "ḛ",
            "ḝ",
            "ẹ",
            "ẻ",
            "ẽ",
            "ế",
            "ề",
            "ể",
            "ễ",
            "ệ",
            "ₑ",
            "ｅ",
          ],
          f: ["f", "ƒ", "ᵮ", "ᶂ", "ᶠ", "ḟ", "ｆ"],
          g: [
            "g",
            "ĝ",
            "ğ",
            "ġ",
            "ģ",
            "ǥ",
            "ǧ",
            "ǵ",
            "ɠ",
            "ɡ",
            "ᵍ",
            "ᵷ",
            "ᵹ",
            "ᶃ",
            "ᶢ",
            "ḡ",
            "ｇ",
          ],
          h: [
            "h",
            "ĥ",
            "ħ",
            "ƕ",
            "ȟ",
            "ɥ",
            "ɦ",
            "ʮ",
            "ʯ",
            "ʰ",
            "ʱ",
            "ͪ",
            "Һ",
            "һ",
            "ᑋ",
            "ᶣ",
            "ḣ",
            "ḥ",
            "ḧ",
            "ḩ",
            "ḫ",
            "ⱨ",
            "ｈ",
          ],
          i: [
            "i",
            "ì",
            "í",
            "î",
            "ï",
            "ĩ",
            "ī",
            "ĭ",
            "į",
            "ǐ",
            "ȉ",
            "ȋ",
            "ɨ",
            "ͥ",
            "ᴉ",
            "ᵎ",
            "ᵢ",
            "ᶖ",
            "ᶤ",
            "ḭ",
            "ḯ",
            "ỉ",
            "ị",
            "ｉ",
          ],
          j: ["j", "ĵ", "ǰ", "ɉ", "ʝ", "ʲ", "ᶡ", "ᶨ", "ｊ"],
          k: ["k", "ķ", "ƙ", "ǩ", "ʞ", "ᵏ", "ᶄ", "ḱ", "ḳ", "ḵ", "ⱪ", "ｋ"],
          l: [
            "l",
            "ĺ",
            "ļ",
            "ľ",
            "ŀ",
            "ł",
            "ƚ",
            "ȴ",
            "ɫ",
            "ɬ",
            "ɭ",
            "ˡ",
            "ᶅ",
            "ᶩ",
            "ᶪ",
            "ḷ",
            "ḹ",
            "ḻ",
            "ḽ",
            "ℓ",
            "ⱡ",
          ],
          m: [
            "m",
            "ɯ",
            "ɰ",
            "ɱ",
            "ͫ",
            "ᴟ",
            "ᵐ",
            "ᵚ",
            "ᵯ",
            "ᶆ",
            "ᶬ",
            "ᶭ",
            "ḿ",
            "ṁ",
            "ṃ",
            "㎡",
            "㎥",
            "ｍ",
          ],
          n: [
            "n",
            "ñ",
            "ń",
            "ņ",
            "ň",
            "ŉ",
            "ƞ",
            "ǹ",
            "ȵ",
            "ɲ",
            "ɳ",
            "ᵰ",
            "ᶇ",
            "ᶮ",
            "ᶯ",
            "ṅ",
            "ṇ",
            "ṉ",
            "ṋ",
            "ⁿ",
            "ｎ",
          ],
          o: [
            "o",
            "ò",
            "ó",
            "ô",
            "õ",
            "ö",
            "ø",
            "ō",
            "ŏ",
            "ő",
            "ơ",
            "ǒ",
            "ǫ",
            "ǭ",
            "ǿ",
            "ȍ",
            "ȏ",
            "ȫ",
            "ȭ",
            "ȯ",
            "ȱ",
            "ɵ",
            "ͦ",
            "о",
            "ӧ",
            "ө",
            "ᴏ",
            "ᴑ",
            "ᴓ",
            "ᴼ",
            "ᵒ",
            "ᶱ",
            "ṍ",
            "ṏ",
            "ṑ",
            "ṓ",
            "ọ",
            "ỏ",
            "ố",
            "ồ",
            "ổ",
            "ỗ",
            "ộ",
            "ớ",
            "ờ",
            "ở",
            "ỡ",
            "ợ",
            "ₒ",
            "ｏ",
            "𐐬",
          ],
          p: ["p", "ᵖ", "ᵱ", "ᵽ", "ᶈ", "ṕ", "ṗ", "ｐ"],
          q: ["q", "ɋ", "ʠ", "ᛩ", "ｑ"],
          r: [
            "r",
            "ŕ",
            "ŗ",
            "ř",
            "ȑ",
            "ȓ",
            "ɍ",
            "ɹ",
            "ɻ",
            "ʳ",
            "ʴ",
            "ʵ",
            "ͬ",
            "ᵣ",
            "ᵲ",
            "ᶉ",
            "ṙ",
            "ṛ",
            "ṝ",
            "ṟ",
          ],
          s: [
            "s",
            "ś",
            "ŝ",
            "ş",
            "š",
            "ș",
            "ʂ",
            "ᔆ",
            "ᶊ",
            "ṡ",
            "ṣ",
            "ṥ",
            "ṧ",
            "ṩ",
            "ｓ",
          ],
          t: [
            "t",
            "ţ",
            "ť",
            "ŧ",
            "ƫ",
            "ƭ",
            "ț",
            "ʇ",
            "ͭ",
            "ᵀ",
            "ᵗ",
            "ᵵ",
            "ᶵ",
            "ṫ",
            "ṭ",
            "ṯ",
            "ṱ",
            "ẗ",
            "ｔ",
          ],
          u: [
            "u",
            "ù",
            "ú",
            "û",
            "ü",
            "ũ",
            "ū",
            "ŭ",
            "ů",
            "ű",
            "ų",
            "ư",
            "ǔ",
            "ǖ",
            "ǘ",
            "ǚ",
            "ǜ",
            "ȕ",
            "ȗ",
            "ͧ",
            "ߎ",
            "ᵘ",
            "ᵤ",
            "ṳ",
            "ṵ",
            "ṷ",
            "ṹ",
            "ṻ",
            "ụ",
            "ủ",
            "ứ",
            "ừ",
            "ử",
            "ữ",
            "ự",
            "ｕ",
          ],
          v: ["v", "ʋ", "ͮ", "ᵛ", "ᵥ", "ᶹ", "ṽ", "ṿ", "ⱱ", "ｖ", "ⱴ"],
          w: ["w", "ŵ", "ʷ", "ᵂ", "ẁ", "ẃ", "ẅ", "ẇ", "ẉ", "ẘ", "ⱳ", "ｗ"],
          x: ["x", "̽", "͓", "ᶍ", "ͯ", "ẋ", "ẍ", "ₓ", "ｘ"],
          y: ["y", "ý", "ÿ", "ŷ", "ȳ", "ɏ", "ʸ", "ẏ", "ỳ", "ỵ", "ỷ", "ỹ", "ｙ"],
          z: [
            "z",
            "ź",
            "ż",
            "ž",
            "ƶ",
            "ȥ",
            "ɀ",
            "ʐ",
            "ʑ",
            "ᙆ",
            "ᙇ",
            "ᶻ",
            "ᶼ",
            "ᶽ",
            "ẑ",
            "ẓ",
            "ẕ",
            "ⱬ",
            "ｚ",
          ],
        },
        m = (function () {
          var t = {};
          for (var e in b) {
            var n = b[e];
            for (var i in n) {
              var r = n[i];
              r !== e && (t[r] = e);
            }
          }
          return t;
        })(),
        g = /[^a-z0-9\s,.-]/,
        v = function (t) {
          if (-1 === t.search(g)) return t;
          for (var e = "", n = t.length, i = 0; i < n; i++) {
            var r = t.charAt(i);
            e += r in m ? m[r] : r;
          }
          return e;
        },
        _ = function (t) {
          return t.replace(/[\\^$*+?.()|[\]{}]/g, "\\$&");
        },
        y = {
          format: function (t) {
            return t;
          },
          filterPredicate: function (t, e) {
            var n =
                arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
              i =
                arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            if (null == t) return !1;
            var r = n ? String(t).toLowerCase() : v(_(String(t)).toLowerCase()),
              o = n ? e.toLowerCase() : v(_(e).toLowerCase());
            return i ? r === o : r.indexOf(o) > -1;
          },
          compare: function (t, e) {
            function n(t) {
              return null == t ? "" : v(String(t).toLowerCase());
            }
            return (t = n(t)) < (e = n(e)) ? -1 : t > e ? 1 : 0;
          },
        };
      function M(t, e, n, i, r, o, a, s, l, c) {
        "boolean" != typeof a && ((l = s), (s = a), (a = !1));
        const d = "function" == typeof n ? n.options : n;
        let u;
        if (
          (t &&
            t.render &&
            ((d.render = t.render),
            (d.staticRenderFns = t.staticRenderFns),
            (d._compiled = !0),
            r && (d.functional = !0)),
          i && (d._scopeId = i),
          o
            ? ((u = function (t) {
                (t =
                  t ||
                  (this.$vnode && this.$vnode.ssrContext) ||
                  (this.parent &&
                    this.parent.$vnode &&
                    this.parent.$vnode.ssrContext)) ||
                  "undefined" == typeof __VUE_SSR_CONTEXT__ ||
                  (t = __VUE_SSR_CONTEXT__),
                  e && e.call(this, l(t)),
                  t &&
                    t._registeredComponents &&
                    t._registeredComponents.add(o);
              }),
              (d._ssrRegister = u))
            : e &&
              (u = a
                ? function (t) {
                    e.call(this, c(t, this.$root.$options.shadowRoot));
                  }
                : function (t) {
                    e.call(this, s(t));
                  }),
          u)
        )
          if (d.functional) {
            const t = d.render;
            d.render = function (e, n) {
              return u.call(n), t(e, n);
            };
          } else {
            const t = d.beforeCreate;
            d.beforeCreate = t ? [].concat(t, u) : [u];
          }
        return n;
      }
      var O = M(
          {
            render: function () {
              var t = this,
                e = t.$createElement,
                n = t._self._c || e;
              return n(
                "div",
                { staticClass: "vgt-wrap__footer vgt-clearfix" },
                [
                  t.perPageDropdownEnabled
                    ? n(
                        "div",
                        { staticClass: "footer__row-count vgt-pull-left" },
                        [
                          n("form", [
                            n(
                              "label",
                              {
                                staticClass: "footer__row-count__label",
                                attrs: { for: t.id },
                              },
                              [t._v(t._s(t.rowsPerPageText) + ":")]
                            ),
                            t._v(" "),
                            n(
                              "select",
                              {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: t.currentPerPage,
                                    expression: "currentPerPage",
                                  },
                                ],
                                staticClass: "footer__row-count__select",
                                attrs: {
                                  id: t.id,
                                  autocomplete: "off",
                                  name: "perPageSelect",
                                  "aria-controls": "vgt-table",
                                },
                                on: {
                                  change: [
                                    function (e) {
                                      var n = Array.prototype.filter
                                        .call(e.target.options, function (t) {
                                          return t.selected;
                                        })
                                        .map(function (t) {
                                          return "_value" in t
                                            ? t._value
                                            : t.value;
                                        });
                                      t.currentPerPage = e.target.multiple
                                        ? n
                                        : n[0];
                                    },
                                    t.perPageChanged,
                                  ],
                                },
                              },
                              [
                                t._l(t.rowsPerPageOptions, function (e, i) {
                                  return n(
                                    "option",
                                    { key: i, domProps: { value: e } },
                                    [
                                      t._v(
                                        "\n          " + t._s(e) + "\n        "
                                      ),
                                    ]
                                  );
                                }),
                                t._v(" "),
                                t.paginateDropdownAllowAll
                                  ? n("option", { domProps: { value: -1 } }, [
                                      t._v(t._s(t.allText)),
                                    ])
                                  : t._e(),
                              ],
                              2
                            ),
                          ]),
                        ]
                      )
                    : t._e(),
                  t._v(" "),
                  n(
                    "div",
                    { staticClass: "footer__navigation vgt-pull-right" },
                    [
                      n("pagination-page-info", {
                        attrs: {
                          "total-records": t.total,
                          "last-page": t.pagesCount,
                          "current-page": t.currentPage,
                          "current-per-page": t.currentPerPage,
                          "of-text": t.ofText,
                          "page-text": t.pageText,
                          "info-fn": t.infoFn,
                          mode: t.mode,
                        },
                        on: { "page-changed": t.changePage },
                      }),
                      t._v(" "),
                      t.jumpFirstOrLast
                        ? n(
                            "button",
                            {
                              staticClass: "footer__navigation__page-btn",
                              class: { disabled: !t.firstIsPossible },
                              attrs: {
                                type: "button",
                                "aria-controls": "vgt-table",
                              },
                              on: {
                                click: function (e) {
                                  return (
                                    e.preventDefault(),
                                    e.stopPropagation(),
                                    t.firstPage(e)
                                  );
                                },
                              },
                            },
                            [
                              n("span", {
                                staticClass: "chevron",
                                class: { left: !t.rtl, right: t.rtl },
                                attrs: { "aria-hidden": "true" },
                              }),
                              t._v(" "),
                              n("span", [t._v(t._s(t.firstText))]),
                            ]
                          )
                        : t._e(),
                      t._v(" "),
                      n(
                        "button",
                        {
                          staticClass: "footer__navigation__page-btn",
                          class: { disabled: !t.prevIsPossible },
                          attrs: {
                            type: "button",
                            "aria-controls": "vgt-table",
                          },
                          on: {
                            click: function (e) {
                              return (
                                e.preventDefault(),
                                e.stopPropagation(),
                                t.previousPage(e)
                              );
                            },
                          },
                        },
                        [
                          n("span", {
                            staticClass: "chevron",
                            class: { left: !t.rtl, right: t.rtl },
                            attrs: { "aria-hidden": "true" },
                          }),
                          t._v(" "),
                          n("span", [t._v(t._s(t.prevText))]),
                        ]
                      ),
                      t._v(" "),
                      n(
                        "button",
                        {
                          staticClass: "footer__navigation__page-btn",
                          class: { disabled: !t.nextIsPossible },
                          attrs: {
                            type: "button",
                            "aria-controls": "vgt-table",
                          },
                          on: {
                            click: function (e) {
                              return (
                                e.preventDefault(),
                                e.stopPropagation(),
                                t.nextPage(e)
                              );
                            },
                          },
                        },
                        [
                          n("span", [t._v(t._s(t.nextText))]),
                          t._v(" "),
                          n("span", {
                            staticClass: "chevron",
                            class: { right: !t.rtl, left: t.rtl },
                            attrs: { "aria-hidden": "true" },
                          }),
                        ]
                      ),
                      t._v(" "),
                      t.jumpFirstOrLast
                        ? n(
                            "button",
                            {
                              staticClass: "footer__navigation__page-btn",
                              class: { disabled: !t.lastIsPossible },
                              attrs: {
                                type: "button",
                                "aria-controls": "vgt-table",
                              },
                              on: {
                                click: function (e) {
                                  return (
                                    e.preventDefault(),
                                    e.stopPropagation(),
                                    t.lastPage(e)
                                  );
                                },
                              },
                            },
                            [
                              n("span", [t._v(t._s(t.lastText))]),
                              t._v(" "),
                              n("span", {
                                staticClass: "chevron",
                                class: { right: !t.rtl, left: t.rtl },
                                attrs: { "aria-hidden": "true" },
                              }),
                            ]
                          )
                        : t._e(),
                    ],
                    1
                  ),
                ]
              );
            },
            staticRenderFns: [],
          },
          void 0,
          {
            name: "VgtPagination",
            props: {
              styleClass: { default: "table table-bordered" },
              total: { default: null },
              perPage: {},
              rtl: { default: !1 },
              perPageDropdownEnabled: { default: !0 },
              customRowsPerPageDropdown: {
                default: function () {
                  return [];
                },
              },
              paginateDropdownAllowAll: { default: !0 },
              mode: { default: u },
              jumpFirstOrLast: { default: !1 },
              firstText: { default: "First" },
              lastText: { default: "Last" },
              nextText: { default: "Next" },
              prevText: { default: "Prev" },
              rowsPerPageText: { default: "Rows per page:" },
              ofText: { default: "of" },
              pageText: { default: "page" },
              allText: { default: "All" },
              infoFn: { default: null },
            },
            data: function () {
              return {
                id: this.getId(),
                currentPage: 1,
                prevPage: 0,
                currentPerPage: 10,
                rowsPerPageOptions: [],
              };
            },
            watch: {
              perPage: {
                handler: function (t, e) {
                  this.handlePerPage(), this.perPageChanged(e);
                },
                immediate: !0,
              },
              customRowsPerPageDropdown: function () {
                this.handlePerPage();
              },
              total: {
                handler: function (t, e) {
                  -1 === this.rowsPerPageOptions.indexOf(this.currentPerPage) &&
                    (this.currentPerPage = t);
                },
              },
            },
            computed: {
              pagesCount: function () {
                if (-1 === this.currentPerPage) return 1;
                var t = Math.floor(this.total / this.currentPerPage);
                return 0 == this.total % this.currentPerPage ? t : t + 1;
              },
              firstIsPossible: function () {
                return this.currentPage > 1;
              },
              lastIsPossible: function () {
                return (
                  this.currentPage < Math.ceil(this.total / this.currentPerPage)
                );
              },
              nextIsPossible: function () {
                return this.currentPage < this.pagesCount;
              },
              prevIsPossible: function () {
                return this.currentPage > 1;
              },
            },
            methods: {
              getId: function () {
                return "vgt-select-rpp-".concat(
                  Math.floor(Math.random() * Date.now())
                );
              },
              changePage: function (t) {
                var e =
                  !(arguments.length > 1 && void 0 !== arguments[1]) ||
                  arguments[1];
                t > 0 &&
                  this.total > this.currentPerPage * (t - 1) &&
                  ((this.prevPage = this.currentPage),
                  (this.currentPage = t),
                  this.pageChanged(e));
              },
              firstPage: function () {
                this.firstIsPossible &&
                  ((this.currentPage = 1),
                  (this.prevPage = 0),
                  this.pageChanged());
              },
              lastPage: function () {
                this.lastIsPossible &&
                  ((this.currentPage = this.pagesCount),
                  (this.prev = this.currentPage - 1),
                  this.pageChanged());
              },
              nextPage: function () {
                this.nextIsPossible &&
                  ((this.prevPage = this.currentPage),
                  ++this.currentPage,
                  this.pageChanged());
              },
              previousPage: function () {
                this.prevIsPossible &&
                  ((this.prevPage = this.currentPage),
                  --this.currentPage,
                  this.pageChanged());
              },
              pageChanged: function () {
                var t =
                    !(arguments.length > 0 && void 0 !== arguments[0]) ||
                    arguments[0],
                  e = {
                    currentPage: this.currentPage,
                    prevPage: this.prevPage,
                  };
                t || (e.noEmit = !0), this.$emit("page-changed", e);
              },
              perPageChanged: function (t) {
                t &&
                  this.$emit("per-page-changed", {
                    currentPerPage: this.currentPerPage,
                  }),
                  this.changePage(1, !1);
              },
              handlePerPage: function () {
                if (
                  (null !== this.customRowsPerPageDropdown &&
                  Array.isArray(this.customRowsPerPageDropdown) &&
                  0 !== this.customRowsPerPageDropdown.length
                    ? (this.rowsPerPageOptions = JSON.parse(
                        JSON.stringify(this.customRowsPerPageDropdown)
                      ))
                    : (this.rowsPerPageOptions = JSON.parse(JSON.stringify(p))),
                  this.perPage)
                ) {
                  this.currentPerPage = this.perPage;
                  for (
                    var t = !1, e = 0;
                    e < this.rowsPerPageOptions.length;
                    e++
                  )
                    this.rowsPerPageOptions[e] === this.perPage && (t = !0);
                  t ||
                    -1 === this.perPage ||
                    this.rowsPerPageOptions.unshift(this.perPage);
                } else this.currentPerPage = 10;
              },
            },
            mounted: function () {},
            components: {
              "pagination-page-info": M(
                {
                  render: function () {
                    var t = this,
                      e = t.$createElement,
                      n = t._self._c || e;
                    return n(
                      "div",
                      { staticClass: "footer__navigation__page-info" },
                      [
                        t.infoFn
                          ? n("div", [
                              t._v(
                                "\n    " + t._s(t.infoFn(t.infoParams)) + "\n  "
                              ),
                            ])
                          : "pages" === t.mode
                          ? n(
                              "form",
                              {
                                on: {
                                  submit: function (t) {
                                    t.preventDefault();
                                  },
                                },
                              },
                              [
                                n(
                                  "label",
                                  {
                                    staticClass: "page-info__label",
                                    attrs: { for: t.id },
                                  },
                                  [
                                    n("span", [t._v(t._s(t.pageText))]),
                                    t._v(" "),
                                    n("input", {
                                      staticClass:
                                        "footer__navigation__page-info__current-entry",
                                      attrs: {
                                        id: t.id,
                                        "aria-describedby": "change-page-hint",
                                        "aria-controls": "vgb-table",
                                        type: "text",
                                      },
                                      domProps: { value: t.currentPage },
                                      on: {
                                        keyup: function (e) {
                                          return !e.type.indexOf("key") &&
                                            t._k(
                                              e.keyCode,
                                              "enter",
                                              13,
                                              e.key,
                                              "Enter"
                                            )
                                            ? null
                                            : (e.stopPropagation(),
                                              t.changePage(e));
                                        },
                                      },
                                    }),
                                    t._v(" "),
                                    n("span", [t._v(t._s(t.pageInfo))]),
                                  ]
                                ),
                                t._v(" "),
                                n(
                                  "span",
                                  {
                                    staticStyle: { display: "none" },
                                    attrs: { id: "change-page-hint" },
                                  },
                                  [
                                    t._v(
                                      "\n      Type a page number and press Enter to change the page.\n    "
                                    ),
                                  ]
                                ),
                              ]
                            )
                          : n("div", [
                              t._v("\n    " + t._s(t.recordInfo) + "\n  "),
                            ]),
                      ]
                    );
                  },
                  staticRenderFns: [],
                },
                void 0,
                {
                  name: "VgtPaginationPageInfo",
                  props: {
                    currentPage: { default: 1 },
                    lastPage: { default: 1 },
                    totalRecords: { default: 0 },
                    ofText: { default: "of", type: String },
                    pageText: { default: "page", type: String },
                    currentPerPage: {},
                    mode: { default: u },
                    infoFn: { default: null },
                  },
                  data: function () {
                    return { id: this.getId() };
                  },
                  computed: {
                    pageInfo: function () {
                      return "".concat(this.ofText, " ").concat(this.lastPage);
                    },
                    firstRecordOnPage: function () {
                      return (this.currentPage - 1) * this.currentPerPage + 1;
                    },
                    lastRecordOnPage: function () {
                      return -1 === this.currentPerPage
                        ? this.totalRecords
                        : Math.min(
                            this.totalRecords,
                            this.currentPage * this.currentPerPage
                          );
                    },
                    recordInfo: function () {
                      var t = this.firstRecordOnPage,
                        e = this.lastRecordOnPage;
                      return (
                        0 === e && (t = 0),
                        ""
                          .concat(t, " - ")
                          .concat(e, " ")
                          .concat(this.ofText, " ")
                          .concat(this.totalRecords)
                      );
                    },
                    infoParams: function () {
                      var t = this.firstRecordOnPage,
                        e = this.lastRecordOnPage;
                      return (
                        0 === e && (t = 0),
                        {
                          firstRecordOnPage: t,
                          lastRecordOnPage: e,
                          totalRecords: this.totalRecords,
                          currentPage: this.currentPage,
                          totalPage: this.lastPage,
                        }
                      );
                    },
                  },
                  methods: {
                    getId: function () {
                      return "vgt-page-input-".concat(
                        Math.floor(Math.random() * Date.now())
                      );
                    },
                    changePage: function (t) {
                      var e = parseInt(t.target.value, 10);
                      if (Number.isNaN(e) || e > this.lastPage || e < 1)
                        return (t.target.value = this.currentPage), !1;
                      (t.target.value = e), this.$emit("page-changed", e);
                    },
                  },
                  mounted: function () {},
                  components: {},
                },
                "data-v-347cbcfa",
                !1,
                void 0,
                !1,
                void 0,
                void 0,
                void 0
              ),
            },
          },
          void 0,
          !1,
          void 0,
          !1,
          void 0,
          void 0,
          void 0
        ),
        w = M(
          {
            render: function () {
              var t = this,
                e = t.$createElement,
                n = t._self._c || e;
              return t.showControlBar
                ? n("div", { staticClass: "vgt-global-search vgt-clearfix" }, [
                    n(
                      "div",
                      { staticClass: "vgt-global-search__input vgt-pull-left" },
                      [
                        t.searchEnabled
                          ? n(
                              "form",
                              {
                                attrs: { role: "search" },
                                on: {
                                  submit: function (t) {
                                    t.preventDefault();
                                  },
                                },
                              },
                              [
                                n("label", { attrs: { for: t.id } }, [
                                  t._m(0),
                                  t._v(" "),
                                  n("span", { staticClass: "sr-only" }, [
                                    t._v("Search"),
                                  ]),
                                ]),
                                t._v(" "),
                                n("input", {
                                  staticClass: "vgt-input vgt-pull-left",
                                  attrs: {
                                    id: t.id,
                                    type: "text",
                                    placeholder: t.globalSearchPlaceholder,
                                  },
                                  domProps: { value: t.value },
                                  on: {
                                    input: function (e) {
                                      return t.updateValue(e.target.value);
                                    },
                                    keyup: function (e) {
                                      return !e.type.indexOf("key") &&
                                        t._k(
                                          e.keyCode,
                                          "enter",
                                          13,
                                          e.key,
                                          "Enter"
                                        )
                                        ? null
                                        : t.entered(e.target.value);
                                    },
                                  },
                                }),
                              ]
                            )
                          : t._e(),
                      ]
                    ),
                    t._v(" "),
                    n(
                      "div",
                      {
                        staticClass:
                          "vgt-global-search__actions vgt-pull-right",
                      },
                      [t._t("internal-table-actions")],
                      2
                    ),
                  ])
                : t._e();
            },
            staticRenderFns: [
              function () {
                var t = this.$createElement,
                  e = this._self._c || t;
                return e(
                  "span",
                  {
                    staticClass: "input__icon",
                    attrs: { "aria-hidden": "true" },
                  },
                  [e("div", { staticClass: "magnifying-glass" })]
                );
              },
            ],
          },
          void 0,
          {
            name: "VgtGlobalSearch",
            props: ["value", "searchEnabled", "globalSearchPlaceholder"],
            data: function () {
              return { globalSearchTerm: null, id: this.getId() };
            },
            computed: {
              showControlBar: function () {
                return (
                  !!this.searchEnabled ||
                  !(!this.$slots || !this.$slots["internal-table-actions"])
                );
              },
            },
            methods: {
              updateValue: function (t) {
                this.$emit("input", t), this.$emit("on-keyup", t);
              },
              entered: function (t) {
                this.$emit("on-enter", t);
              },
              getId: function () {
                return "vgt-search-".concat(
                  Math.floor(Math.random() * Date.now())
                );
              },
            },
          },
          void 0,
          !1,
          void 0,
          !1,
          void 0,
          void 0,
          void 0
        );
      function A(t) {
        return t.firstSortType || "asc";
      }
      function x(t, e) {
        return c === A(e) && t === l
          ? d
          : t === l
          ? c
          : c === A(e) && t === c
          ? l
          : t === c
          ? d
          : c === A(e) && t === d
          ? c
          : l;
      }
      var z = M(
          {
            render: function () {
              var t = this,
                e = t.$createElement,
                n = t._self._c || e;
              return n(
                "thead",
                [
                  n(
                    "tr",
                    [
                      t.lineNumbers
                        ? n("th", {
                            staticClass: "line-numbers",
                            attrs: { scope: "col" },
                          })
                        : t._e(),
                      t._v(" "),
                      t.selectable
                        ? n(
                            "th",
                            {
                              staticClass: "vgt-checkbox-col",
                              attrs: { scope: "col" },
                            },
                            [
                              n("input", {
                                attrs: { type: "checkbox" },
                                domProps: {
                                  checked: t.allSelected,
                                  indeterminate: t.allSelectedIndeterminate,
                                },
                                on: { change: t.toggleSelectAll },
                              }),
                            ]
                          )
                        : t._e(),
                      t._v(" "),
                      t._l(t.columns, function (e, i) {
                        return e.hidden
                          ? t._e()
                          : n(
                              "th",
                              {
                                key: i,
                                class: t.getHeaderClasses(e, i),
                                style: t.columnStyles[i],
                                attrs: {
                                  scope: "col",
                                  title: e.tooltip,
                                  "aria-sort": t.getColumnSortLong(e),
                                  "aria-controls": "col-" + i,
                                },
                              },
                              [
                                t._t(
                                  "table-column",
                                  [
                                    t._v(
                                      "\n        " + t._s(e.label) + "\n      "
                                    ),
                                  ],
                                  { column: e }
                                ),
                                t._v(" "),
                                t.isSortableColumn(e)
                                  ? n(
                                      "button",
                                      {
                                        on: {
                                          click: function (n) {
                                            return t.sort(n, e);
                                          },
                                        },
                                      },
                                      [
                                        n("span", { staticClass: "sr-only" }, [
                                          t._v(
                                            "\n          Sort table by " +
                                              t._s(e.label) +
                                              " in " +
                                              t._s(t.getColumnSortLong(e)) +
                                              " order\n          "
                                          ),
                                        ]),
                                      ]
                                    )
                                  : t._e(),
                              ],
                              2
                            );
                      }),
                    ],
                    2
                  ),
                  t._v(" "),
                  n("vgt-filter-row", {
                    ref: "filter-row",
                    tag: "tr",
                    attrs: {
                      "global-search-enabled": t.searchEnabled,
                      "line-numbers": t.lineNumbers,
                      selectable: t.selectable,
                      columns: t.columns,
                      mode: t.mode,
                      "typed-columns": t.typedColumns,
                    },
                    on: { "filter-changed": t.filterRows },
                    scopedSlots: t._u(
                      [
                        {
                          key: "column-filter",
                          fn: function (e) {
                            return [
                              t._t("column-filter", null, {
                                column: e.column,
                                updateFilters: e.updateFilters,
                              }),
                            ];
                          },
                        },
                      ],
                      null,
                      !0
                    ),
                  }),
                ],
                1
              );
            },
            staticRenderFns: [],
          },
          void 0,
          {
            name: "VgtTableHeader",
            props: {
              lineNumbers: { default: !1, type: Boolean },
              selectable: { default: !1, type: Boolean },
              allSelected: { default: !1, type: Boolean },
              allSelectedIndeterminate: { default: !1, type: Boolean },
              columns: { type: Array },
              mode: { type: String },
              typedColumns: {},
              sortable: { type: Boolean },
              multipleColumnSort: { type: Boolean, default: !0 },
              getClasses: { type: Function },
              searchEnabled: { type: Boolean },
              tableRef: {},
              paginated: {},
            },
            watch: {
              columns: {
                handler: function () {
                  this.setColumnStyles();
                },
                immediate: !0,
              },
              tableRef: {
                handler: function () {
                  this.setColumnStyles();
                },
                immediate: !0,
              },
              paginated: {
                handler: function () {
                  this.tableRef && this.setColumnStyles();
                },
                deep: !0,
              },
            },
            data: function () {
              return {
                checkBoxThStyle: {},
                lineNumberThStyle: {},
                columnStyles: [],
                sorts: [],
                ro: null,
              };
            },
            computed: {},
            methods: {
              reset: function () {
                this.$refs["filter-row"].reset(!0);
              },
              toggleSelectAll: function () {
                this.$emit("on-toggle-select-all");
              },
              isSortableColumn: function (t) {
                var e = t.sortable;
                return "boolean" == typeof e ? e : this.sortable;
              },
              sort: function (t, e) {
                this.isSortableColumn(e) &&
                  (t.shiftKey && this.multipleColumnSort
                    ? (this.sorts = (function (t, e) {
                        var n = (function (t, e) {
                          for (var n = 0; n < t.length; n++)
                            if (e.field === t[n].field) return n;
                          return -1;
                        })(t, e);
                        return (
                          -1 === n
                            ? t.push({ field: e.field, type: A(e) })
                            : (t[n].type = x(t[n].type, e)),
                          t
                        );
                      })(this.sorts, e))
                    : (this.sorts = (function (t, e) {
                        var n = (function (t, e) {
                            return 1 === t.length && t[0].field === e.field
                              ? t[0].type
                              : void 0;
                          })(t, e),
                          i = x(n, e);
                        return [{ field: e.field, type: n ? i : A(e) }];
                      })(this.sorts, e)),
                  this.$emit("on-sort-change", this.sorts));
              },
              setInitialSort: function (t) {
                (this.sorts = t), this.$emit("on-sort-change", this.sorts);
              },
              getColumnSort: function (t) {
                for (var e = 0; e < this.sorts.length; e += 1)
                  if (this.sorts[e].field === t.field)
                    return this.sorts[e].type || "asc";
                return null;
              },
              getColumnSortLong: function (t) {
                return "asc" === this.getColumnSort(t)
                  ? "ascending"
                  : "descending";
              },
              getHeaderClasses: function (t, e) {
                return Object.assign({}, this.getClasses(e, "th"), {
                  sortable: this.isSortableColumn(t),
                  "sorting sorting-desc": "desc" === this.getColumnSort(t),
                  "sorting sorting-asc": "asc" === this.getColumnSort(t),
                });
              },
              filterRows: function (t) {
                this.$emit("filter-changed", t);
              },
              getWidthStyle: function (t) {
                return window && window.getComputedStyle && t
                  ? { width: window.getComputedStyle(t, null).width }
                  : { width: "auto" };
              },
              setColumnStyles: function () {
                for (var t = [], e = 0; e < this.columns.length; e++)
                  if (this.tableRef) {
                    var n = 0;
                    this.selectable && n++, this.lineNumbers && n++;
                    var i = this.tableRef.rows[0].cells[e + n];
                    t.push(this.getWidthStyle(i));
                  } else
                    t.push({
                      minWidth: this.columns[e].width
                        ? this.columns[e].width
                        : "auto",
                      maxWidth: this.columns[e].width
                        ? this.columns[e].width
                        : "auto",
                      width: this.columns[e].width
                        ? this.columns[e].width
                        : "auto",
                    });
                this.columnStyles = t;
              },
              getColumnStyle: function (t, e) {
                var n = {
                  minWidth: t.width ? t.width : "auto",
                  maxWidth: t.width ? t.width : "auto",
                  width: t.width ? t.width : "auto",
                };
                if (this.tableRef) {
                  this.selectable && e++, this.lineNumbers && e++;
                  var i = this.tableRef.rows[0].cells[e],
                    r = window.getComputedStyle(i, null);
                  n.width = r.width;
                }
                return n;
              },
            },
            mounted: function () {
              var t = this;
              this.$nextTick(function () {
                "ResizeObserver" in window &&
                  ((t.ro = new ResizeObserver(function () {
                    t.setColumnStyles();
                  })),
                  t.ro.observe(t.$parent.$el),
                  t.tableRef &&
                    Array.from(
                      t.$parent.$refs["table-header-primary"].$el.children[0]
                        .children
                    ).forEach(function (e) {
                      t.ro.observe(e);
                    }));
              });
            },
            beforeDestroy: function () {
              this.ro && this.ro.disconnect();
            },
            components: {
              "vgt-filter-row": M(
                {
                  render: function () {
                    var t = this,
                      e = t.$createElement,
                      n = t._self._c || e;
                    return t.hasFilterRow
                      ? n(
                          "tr",
                          [
                            t.lineNumbers ? n("th") : t._e(),
                            t._v(" "),
                            t.selectable ? n("th") : t._e(),
                            t._v(" "),
                            t._l(t.columns, function (e, i) {
                              return e.hidden
                                ? t._e()
                                : n(
                                    "th",
                                    { key: i, class: t.getClasses(e) },
                                    [
                                      t._t(
                                        "column-filter",
                                        [
                                          t.isFilterable(e)
                                            ? n("div", [
                                                t.isDropdown(e)
                                                  ? t._e()
                                                  : n("input", {
                                                      staticClass: "vgt-input",
                                                      attrs: {
                                                        name: t.getName(e),
                                                        type: "text",
                                                        placeholder:
                                                          t.getPlaceholder(e),
                                                      },
                                                      domProps: {
                                                        value:
                                                          t.columnFilters[
                                                            t.fieldKey(e.field)
                                                          ],
                                                      },
                                                      on: {
                                                        keyup: function (n) {
                                                          return !n.type.indexOf(
                                                            "key"
                                                          ) &&
                                                            t._k(
                                                              n.keyCode,
                                                              "enter",
                                                              13,
                                                              n.key,
                                                              "Enter"
                                                            )
                                                            ? null
                                                            : t.updateFiltersOnEnter(
                                                                e,
                                                                n.target.value
                                                              );
                                                        },
                                                        input: function (n) {
                                                          return t.updateFiltersOnKeyup(
                                                            e,
                                                            n.target.value
                                                          );
                                                        },
                                                      },
                                                    }),
                                                t._v(" "),
                                                t.isDropdownArray(e)
                                                  ? n(
                                                      "select",
                                                      {
                                                        staticClass:
                                                          "vgt-select",
                                                        attrs: {
                                                          name: t.getName(e),
                                                        },
                                                        domProps: {
                                                          value:
                                                            t.columnFilters[
                                                              t.fieldKey(
                                                                e.field
                                                              )
                                                            ],
                                                        },
                                                        on: {
                                                          change: function (n) {
                                                            return t.updateFiltersImmediately(
                                                              e.field,
                                                              n.target.value
                                                            );
                                                          },
                                                        },
                                                      },
                                                      [
                                                        n(
                                                          "option",
                                                          {
                                                            key: "-1",
                                                            attrs: {
                                                              value: "",
                                                            },
                                                          },
                                                          [
                                                            t._v(
                                                              t._s(
                                                                t.getPlaceholder(
                                                                  e
                                                                )
                                                              )
                                                            ),
                                                          ]
                                                        ),
                                                        t._v(" "),
                                                        t._l(
                                                          e.filterOptions
                                                            .filterDropdownItems,
                                                          function (e, i) {
                                                            return n(
                                                              "option",
                                                              {
                                                                key: i,
                                                                domProps: {
                                                                  value: e,
                                                                },
                                                              },
                                                              [
                                                                t._v(
                                                                  "\n              " +
                                                                    t._s(e) +
                                                                    "\n            "
                                                                ),
                                                              ]
                                                            );
                                                          }
                                                        ),
                                                      ],
                                                      2
                                                    )
                                                  : t._e(),
                                                t._v(" "),
                                                t.isDropdownObjects(e)
                                                  ? n(
                                                      "select",
                                                      {
                                                        staticClass:
                                                          "vgt-select",
                                                        attrs: {
                                                          name: t.getName(e),
                                                        },
                                                        domProps: {
                                                          value:
                                                            t.columnFilters[
                                                              t.fieldKey(
                                                                e.field
                                                              )
                                                            ],
                                                        },
                                                        on: {
                                                          change: function (n) {
                                                            return t.updateFiltersImmediately(
                                                              e.field,
                                                              n.target.value
                                                            );
                                                          },
                                                        },
                                                      },
                                                      [
                                                        n(
                                                          "option",
                                                          {
                                                            key: "-1",
                                                            attrs: {
                                                              value: "",
                                                            },
                                                          },
                                                          [
                                                            t._v(
                                                              t._s(
                                                                t.getPlaceholder(
                                                                  e
                                                                )
                                                              )
                                                            ),
                                                          ]
                                                        ),
                                                        t._v(" "),
                                                        t._l(
                                                          e.filterOptions
                                                            .filterDropdownItems,
                                                          function (e, i) {
                                                            return n(
                                                              "option",
                                                              {
                                                                key: i,
                                                                domProps: {
                                                                  value:
                                                                    e.value,
                                                                },
                                                              },
                                                              [
                                                                t._v(
                                                                  t._s(e.text)
                                                                ),
                                                              ]
                                                            );
                                                          }
                                                        ),
                                                      ],
                                                      2
                                                    )
                                                  : t._e(),
                                              ])
                                            : t._e(),
                                        ],
                                        {
                                          column: e,
                                          updateFilters: t.updateSlotFilter,
                                        }
                                      ),
                                    ],
                                    2
                                  );
                            }),
                          ],
                          2
                        )
                      : t._e();
                  },
                  staticRenderFns: [],
                },
                void 0,
                {
                  name: "VgtFilterRow",
                  props: [
                    "lineNumbers",
                    "columns",
                    "typedColumns",
                    "globalSearchEnabled",
                    "selectable",
                    "mode",
                  ],
                  watch: {
                    columns: {
                      handler: function (t, e) {
                        this.populateInitialFilters();
                      },
                      deep: !0,
                      immediate: !0,
                    },
                  },
                  data: function () {
                    return { columnFilters: {}, timer: null };
                  },
                  computed: {
                    hasFilterRow: function () {
                      for (var t = 0; t < this.columns.length; t++) {
                        var e = this.columns[t];
                        if (e.filterOptions && e.filterOptions.enabled)
                          return !0;
                      }
                      return !1;
                    },
                  },
                  methods: {
                    fieldKey: function (t) {
                      return "function" == typeof t && t.name ? t.name : t;
                    },
                    reset: function () {
                      var t =
                        arguments.length > 0 &&
                        void 0 !== arguments[0] &&
                        arguments[0];
                      (this.columnFilters = {}),
                        t && this.$emit("filter-changed", this.columnFilters);
                    },
                    isFilterable: function (t) {
                      return t.filterOptions && t.filterOptions.enabled;
                    },
                    isDropdown: function (t) {
                      return (
                        this.isFilterable(t) &&
                        t.filterOptions.filterDropdownItems &&
                        t.filterOptions.filterDropdownItems.length
                      );
                    },
                    isDropdownObjects: function (t) {
                      return (
                        this.isDropdown(t) &&
                        "object" === n(t.filterOptions.filterDropdownItems[0])
                      );
                    },
                    isDropdownArray: function (t) {
                      return (
                        this.isDropdown(t) &&
                        "object" !== n(t.filterOptions.filterDropdownItems[0])
                      );
                    },
                    getClasses: function (t) {
                      var e = "filter-th";
                      return t.filterOptions && t.filterOptions.styleClass
                        ? [e]
                            .concat(o(t.filterOptions.styleClass.split(" ")))
                            .join(" ")
                        : e;
                    },
                    getPlaceholder: function (t) {
                      return (
                        (this.isFilterable(t) && t.filterOptions.placeholder) ||
                        "Filter ".concat(t.label)
                      );
                    },
                    getName: function (t) {
                      return "vgt-".concat(this.fieldKey(t.field));
                    },
                    updateFiltersOnEnter: function (t, e) {
                      this.timer && clearTimeout(this.timer),
                        this.updateFiltersImmediately(t.field, e);
                    },
                    updateFiltersOnKeyup: function (t, e) {
                      "enter" !== t.filterOptions.trigger &&
                        this.updateFilters(t, e);
                    },
                    updateSlotFilter: function (t, e) {
                      var n = t.filterOptions.slotFilterField || t.field;
                      "function" == typeof t.filterOptions.formatValue &&
                        (e = t.filterOptions.formatValue(e)),
                        this.updateFiltersImmediately(n, e);
                    },
                    updateFilters: function (t, e) {
                      var n = this;
                      this.timer && clearTimeout(this.timer),
                        (this.timer = setTimeout(function () {
                          n.updateFiltersImmediately(t.field, e);
                        }, 400));
                    },
                    updateFiltersImmediately: function (t, e) {
                      this.$set(this.columnFilters, this.fieldKey(t), e),
                        this.$emit("filter-changed", this.columnFilters);
                    },
                    populateInitialFilters: function () {
                      for (var t = 0; t < this.columns.length; t++) {
                        var e = this.columns[t];
                        this.isFilterable(e) &&
                          void 0 !== e.filterOptions.filterValue &&
                          null !== e.filterOptions.filterValue &&
                          this.$set(
                            this.columnFilters,
                            this.fieldKey(e.field),
                            e.filterOptions.filterValue
                          );
                      }
                      this.$emit("filter-changed", this.columnFilters);
                    },
                  },
                },
                "data-v-6869bf1c",
                !1,
                void 0,
                !1,
                void 0,
                void 0,
                void 0
              ),
            },
          },
          void 0,
          !1,
          void 0,
          !1,
          void 0,
          void 0,
          void 0
        ),
        C = M(
          {
            render: function () {
              var t = this,
                e = t.$createElement,
                n = t._self._c || e;
              return n(
                "tr",
                [
                  "span" === t.headerRow.mode
                    ? n(
                        "th",
                        {
                          staticClass: "vgt-left-align vgt-row-header",
                          attrs: { colspan: t.fullColspan },
                        },
                        [
                          t.selectAllByGroup
                            ? [
                                t._t(
                                  "table-header-group-select",
                                  [
                                    n("input", {
                                      attrs: { type: "checkbox" },
                                      domProps: { checked: t.allSelected },
                                      on: {
                                        change: function (e) {
                                          return t.toggleSelectGroup(e);
                                        },
                                      },
                                    }),
                                  ],
                                  { columns: t.columns, row: t.headerRow }
                                ),
                              ]
                            : t._e(),
                          t._v(" "),
                          n(
                            "span",
                            {
                              on: {
                                click: function (e) {
                                  t.collapsable &&
                                    t.$emit(
                                      "vgtExpand",
                                      !t.headerRow.vgtIsExpanded
                                    );
                                },
                              },
                            },
                            [
                              t.collapsable
                                ? n("span", {
                                    staticClass: "triangle",
                                    class: {
                                      expand: t.headerRow.vgtIsExpanded,
                                    },
                                  })
                                : t._e(),
                              t._v(" "),
                              t._t(
                                "table-header-row",
                                [
                                  t.headerRow.html
                                    ? n("span", {
                                        domProps: {
                                          innerHTML: t._s(t.headerRow.label),
                                        },
                                      })
                                    : n("span", [
                                        t._v(
                                          "\n          " +
                                            t._s(t.headerRow.label) +
                                            "\n        "
                                        ),
                                      ]),
                                ],
                                { row: t.headerRow }
                              ),
                            ],
                            2
                          ),
                        ],
                        2
                      )
                    : t._e(),
                  t._v(" "),
                  "span" !== t.headerRow.mode && t.lineNumbers
                    ? n("th", { staticClass: "vgt-row-header" })
                    : t._e(),
                  t._v(" "),
                  "span" !== t.headerRow.mode && t.selectable
                    ? n(
                        "th",
                        { staticClass: "vgt-row-header" },
                        [
                          t.selectAllByGroup
                            ? [
                                t._t(
                                  "table-header-group-select",
                                  [
                                    n("input", {
                                      attrs: { type: "checkbox" },
                                      domProps: { checked: t.allSelected },
                                      on: {
                                        change: function (e) {
                                          return t.toggleSelectGroup(e);
                                        },
                                      },
                                    }),
                                  ],
                                  { columns: t.columns, row: t.headerRow }
                                ),
                              ]
                            : t._e(),
                        ],
                        2
                      )
                    : t._e(),
                  t._v(" "),
                  t._l(t.columns, function (e, i) {
                    return "span" === t.headerRow.mode || e.hidden
                      ? t._e()
                      : n(
                          "th",
                          {
                            key: i,
                            staticClass: "vgt-row-header",
                            class: t.getClasses(i, "td"),
                            on: {
                              click: function (e) {
                                t.columnCollapsable(i) &&
                                  t.$emit(
                                    "vgtExpand",
                                    !t.headerRow.vgtIsExpanded
                                  );
                              },
                            },
                          },
                          [
                            t.columnCollapsable(i)
                              ? n("span", {
                                  staticClass: "triangle",
                                  class: { expand: t.headerRow.vgtIsExpanded },
                                })
                              : t._e(),
                            t._v(" "),
                            t._t(
                              "table-header-row",
                              [
                                e.html
                                  ? t._e()
                                  : n("span", [
                                      t._v(
                                        "\n        " +
                                          t._s(
                                            t.collectFormatted(
                                              t.headerRow,
                                              e,
                                              !0
                                            )
                                          ) +
                                          "\n      "
                                      ),
                                    ]),
                                t._v(" "),
                                e.html
                                  ? n("span", {
                                      domProps: {
                                        innerHTML: t._s(
                                          t.collectFormatted(t.headerRow, e, !0)
                                        ),
                                      },
                                    })
                                  : t._e(),
                              ],
                              {
                                row: t.headerRow,
                                column: e,
                                formattedRow: t.formattedRow(t.headerRow, !0),
                              }
                            ),
                          ],
                          2
                        );
                  }),
                ],
                2
              );
            },
            staticRenderFns: [],
          },
          void 0,
          {
            name: "VgtHeaderRow",
            props: {
              headerRow: { type: Object },
              columns: { type: Array },
              lineNumbers: { type: Boolean },
              selectable: { type: Boolean },
              selectAllByGroup: { type: Boolean },
              collapsable: { type: [Boolean, Number], default: !1 },
              collectFormatted: { type: Function },
              formattedRow: { type: Function },
              getClasses: { type: Function },
              fullColspan: { type: Number },
              groupIndex: { type: Number },
            },
            data: function () {
              return {};
            },
            computed: {
              allSelected: function () {
                var t = this.headerRow;
                return (
                  this.groupChildObject,
                  t.children.filter(function (t) {
                    return t.vgtSelected;
                  }).length === t.children.length
                );
              },
            },
            methods: {
              columnCollapsable: function (t) {
                return !0 === this.collapsable
                  ? 0 === t
                  : t === this.collapsable;
              },
              toggleSelectGroup: function (t) {
                this.$emit("on-select-group-change", {
                  groupIndex: this.groupIndex,
                  checked: t.target.checked,
                });
              },
            },
            mounted: function () {},
            components: {},
          },
          void 0,
          !1,
          void 0,
          !1,
          void 0,
          void 0,
          void 0
        );
      function k(t) {
        if (null === t || !0 === t || !1 === t) return NaN;
        var e = Number(t);
        return isNaN(e) ? e : e < 0 ? Math.ceil(e) : Math.floor(e);
      }
      function S(t, e) {
        if (e.length < t)
          throw new TypeError(
            t +
              " argument" +
              (t > 1 ? "s" : "") +
              " required, but only " +
              e.length +
              " present"
          );
      }
      function T(t) {
        S(1, arguments);
        var e = Object.prototype.toString.call(t);
        return t instanceof Date ||
          ("object" == typeof t && "[object Date]" === e)
          ? new Date(t.getTime())
          : "number" == typeof t || "[object Number]" === e
          ? new Date(t)
          : new Date(NaN);
      }
      function D(t, e) {
        S(2, arguments);
        var n = T(t).getTime(),
          i = k(e);
        return new Date(n + i);
      }
      function L(t) {
        return t.getTime() % 6e4;
      }
      function q(t) {
        var e = new Date(t.getTime()),
          n = Math.ceil(e.getTimezoneOffset());
        return (
          e.setSeconds(0, 0), 6e4 * n + (n > 0 ? (6e4 + L(e)) % 6e4 : L(e))
        );
      }
      function E(t) {
        S(1, arguments);
        var e = T(t);
        return !isNaN(e);
      }
      var j = {
        lessThanXSeconds: {
          one: "less than a second",
          other: "less than {{count}} seconds",
        },
        xSeconds: { one: "1 second", other: "{{count}} seconds" },
        halfAMinute: "half a minute",
        lessThanXMinutes: {
          one: "less than a minute",
          other: "less than {{count}} minutes",
        },
        xMinutes: { one: "1 minute", other: "{{count}} minutes" },
        aboutXHours: { one: "about 1 hour", other: "about {{count}} hours" },
        xHours: { one: "1 hour", other: "{{count}} hours" },
        xDays: { one: "1 day", other: "{{count}} days" },
        aboutXWeeks: { one: "about 1 week", other: "about {{count}} weeks" },
        xWeeks: { one: "1 week", other: "{{count}} weeks" },
        aboutXMonths: { one: "about 1 month", other: "about {{count}} months" },
        xMonths: { one: "1 month", other: "{{count}} months" },
        aboutXYears: { one: "about 1 year", other: "about {{count}} years" },
        xYears: { one: "1 year", other: "{{count}} years" },
        overXYears: { one: "over 1 year", other: "over {{count}} years" },
        almostXYears: { one: "almost 1 year", other: "almost {{count}} years" },
      };
      function P(t) {
        return function (e) {
          var n = e || {},
            i = n.width ? String(n.width) : t.defaultWidth;
          return t.formats[i] || t.formats[t.defaultWidth];
        };
      }
      var R = {
          date: P({
            formats: {
              full: "EEEE, MMMM do, y",
              long: "MMMM do, y",
              medium: "MMM d, y",
              short: "MM/dd/yyyy",
            },
            defaultWidth: "full",
          }),
          time: P({
            formats: {
              full: "h:mm:ss a zzzz",
              long: "h:mm:ss a z",
              medium: "h:mm:ss a",
              short: "h:mm a",
            },
            defaultWidth: "full",
          }),
          dateTime: P({
            formats: {
              full: "{{date}} 'at' {{time}}",
              long: "{{date}} 'at' {{time}}",
              medium: "{{date}}, {{time}}",
              short: "{{date}}, {{time}}",
            },
            defaultWidth: "full",
          }),
        },
        I = {
          lastWeek: "'last' eeee 'at' p",
          yesterday: "'yesterday at' p",
          today: "'today at' p",
          tomorrow: "'tomorrow at' p",
          nextWeek: "eeee 'at' p",
          other: "P",
        };
      function W(t) {
        return function (e, n) {
          var i,
            r = n || {};
          if (
            "formatting" === (r.context ? String(r.context) : "standalone") &&
            t.formattingValues
          ) {
            var o = t.defaultFormattingWidth || t.defaultWidth,
              a = r.width ? String(r.width) : o;
            i = t.formattingValues[a] || t.formattingValues[o];
          } else {
            var s = t.defaultWidth,
              l = r.width ? String(r.width) : t.defaultWidth;
            i = t.values[l] || t.values[s];
          }
          return i[t.argumentCallback ? t.argumentCallback(e) : e];
        };
      }
      function N(t) {
        return function (e, n) {
          var i = String(e),
            r = n || {},
            o = r.width,
            a =
              (o && t.matchPatterns[o]) || t.matchPatterns[t.defaultMatchWidth],
            s = i.match(a);
          if (!s) return null;
          var l,
            c = s[0],
            d =
              (o && t.parsePatterns[o]) || t.parsePatterns[t.defaultParseWidth];
          return (
            (l =
              "[object Array]" === Object.prototype.toString.call(d)
                ? (function (t, e) {
                    for (var n = 0; n < t.length; n++) if (e(t[n])) return n;
                  })(d, function (t) {
                    return t.test(c);
                  })
                : (function (t, e) {
                    for (var n in t)
                      if (t.hasOwnProperty(n) && e(t[n])) return n;
                  })(d, function (t) {
                    return t.test(c);
                  })),
            (l = t.valueCallback ? t.valueCallback(l) : l),
            {
              value: (l = r.valueCallback ? r.valueCallback(l) : l),
              rest: i.slice(c.length),
            }
          );
        };
      }
      var B,
        F = {
          code: "en-US",
          formatDistance: function (t, e, n) {
            var i;
            return (
              (n = n || {}),
              (i =
                "string" == typeof j[t]
                  ? j[t]
                  : 1 === e
                  ? j[t].one
                  : j[t].other.replace("{{count}}", e)),
              n.addSuffix ? (n.comparison > 0 ? "in " + i : i + " ago") : i
            );
          },
          formatLong: R,
          formatRelative: function (t, e, n, i) {
            return I[t];
          },
          localize: {
            ordinalNumber: function (t, e) {
              var n = Number(t),
                i = n % 100;
              if (i > 20 || i < 10)
                switch (i % 10) {
                  case 1:
                    return n + "st";
                  case 2:
                    return n + "nd";
                  case 3:
                    return n + "rd";
                }
              return n + "th";
            },
            era: W({
              values: {
                narrow: ["B", "A"],
                abbreviated: ["BC", "AD"],
                wide: ["Before Christ", "Anno Domini"],
              },
              defaultWidth: "wide",
            }),
            quarter: W({
              values: {
                narrow: ["1", "2", "3", "4"],
                abbreviated: ["Q1", "Q2", "Q3", "Q4"],
                wide: [
                  "1st quarter",
                  "2nd quarter",
                  "3rd quarter",
                  "4th quarter",
                ],
              },
              defaultWidth: "wide",
              argumentCallback: function (t) {
                return Number(t) - 1;
              },
            }),
            month: W({
              values: {
                narrow: [
                  "J",
                  "F",
                  "M",
                  "A",
                  "M",
                  "J",
                  "J",
                  "A",
                  "S",
                  "O",
                  "N",
                  "D",
                ],
                abbreviated: [
                  "Jan",
                  "Feb",
                  "Mar",
                  "Apr",
                  "May",
                  "Jun",
                  "Jul",
                  "Aug",
                  "Sep",
                  "Oct",
                  "Nov",
                  "Dec",
                ],
                wide: [
                  "January",
                  "February",
                  "March",
                  "April",
                  "May",
                  "June",
                  "July",
                  "August",
                  "September",
                  "October",
                  "November",
                  "December",
                ],
              },
              defaultWidth: "wide",
            }),
            day: W({
              values: {
                narrow: ["S", "M", "T", "W", "T", "F", "S"],
                short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
                abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                wide: [
                  "Sunday",
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                ],
              },
              defaultWidth: "wide",
            }),
            dayPeriod: W({
              values: {
                narrow: {
                  am: "a",
                  pm: "p",
                  midnight: "mi",
                  noon: "n",
                  morning: "morning",
                  afternoon: "afternoon",
                  evening: "evening",
                  night: "night",
                },
                abbreviated: {
                  am: "AM",
                  pm: "PM",
                  midnight: "midnight",
                  noon: "noon",
                  morning: "morning",
                  afternoon: "afternoon",
                  evening: "evening",
                  night: "night",
                },
                wide: {
                  am: "a.m.",
                  pm: "p.m.",
                  midnight: "midnight",
                  noon: "noon",
                  morning: "morning",
                  afternoon: "afternoon",
                  evening: "evening",
                  night: "night",
                },
              },
              defaultWidth: "wide",
              formattingValues: {
                narrow: {
                  am: "a",
                  pm: "p",
                  midnight: "mi",
                  noon: "n",
                  morning: "in the morning",
                  afternoon: "in the afternoon",
                  evening: "in the evening",
                  night: "at night",
                },
                abbreviated: {
                  am: "AM",
                  pm: "PM",
                  midnight: "midnight",
                  noon: "noon",
                  morning: "in the morning",
                  afternoon: "in the afternoon",
                  evening: "in the evening",
                  night: "at night",
                },
                wide: {
                  am: "a.m.",
                  pm: "p.m.",
                  midnight: "midnight",
                  noon: "noon",
                  morning: "in the morning",
                  afternoon: "in the afternoon",
                  evening: "in the evening",
                  night: "at night",
                },
              },
              defaultFormattingWidth: "wide",
            }),
          },
          match: {
            ordinalNumber:
              ((B = {
                matchPattern: /^(\d+)(th|st|nd|rd)?/i,
                parsePattern: /\d+/i,
                valueCallback: function (t) {
                  return parseInt(t, 10);
                },
              }),
              function (t, e) {
                var n = String(t),
                  i = e || {},
                  r = n.match(B.matchPattern);
                if (!r) return null;
                var o = r[0],
                  a = n.match(B.parsePattern);
                if (!a) return null;
                var s = B.valueCallback ? B.valueCallback(a[0]) : a[0];
                return {
                  value: (s = i.valueCallback ? i.valueCallback(s) : s),
                  rest: n.slice(o.length),
                };
              }),
            era: N({
              matchPatterns: {
                narrow: /^(b|a)/i,
                abbreviated:
                  /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
                wide: /^(before christ|before common era|anno domini|common era)/i,
              },
              defaultMatchWidth: "wide",
              parsePatterns: { any: [/^b/i, /^(a|c)/i] },
              defaultParseWidth: "any",
            }),
            quarter: N({
              matchPatterns: {
                narrow: /^[1234]/i,
                abbreviated: /^q[1234]/i,
                wide: /^[1234](th|st|nd|rd)? quarter/i,
              },
              defaultMatchWidth: "wide",
              parsePatterns: { any: [/1/i, /2/i, /3/i, /4/i] },
              defaultParseWidth: "any",
              valueCallback: function (t) {
                return t + 1;
              },
            }),
            month: N({
              matchPatterns: {
                narrow: /^[jfmasond]/i,
                abbreviated:
                  /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
                wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i,
              },
              defaultMatchWidth: "wide",
              parsePatterns: {
                narrow: [
                  /^j/i,
                  /^f/i,
                  /^m/i,
                  /^a/i,
                  /^m/i,
                  /^j/i,
                  /^j/i,
                  /^a/i,
                  /^s/i,
                  /^o/i,
                  /^n/i,
                  /^d/i,
                ],
                any: [
                  /^ja/i,
                  /^f/i,
                  /^mar/i,
                  /^ap/i,
                  /^may/i,
                  /^jun/i,
                  /^jul/i,
                  /^au/i,
                  /^s/i,
                  /^o/i,
                  /^n/i,
                  /^d/i,
                ],
              },
              defaultParseWidth: "any",
            }),
            day: N({
              matchPatterns: {
                narrow: /^[smtwf]/i,
                short: /^(su|mo|tu|we|th|fr|sa)/i,
                abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
                wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i,
              },
              defaultMatchWidth: "wide",
              parsePatterns: {
                narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
                any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i],
              },
              defaultParseWidth: "any",
            }),
            dayPeriod: N({
              matchPatterns: {
                narrow:
                  /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
                any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i,
              },
              defaultMatchWidth: "any",
              parsePatterns: {
                any: {
                  am: /^a/i,
                  pm: /^p/i,
                  midnight: /^mi/i,
                  noon: /^no/i,
                  morning: /morning/i,
                  afternoon: /afternoon/i,
                  evening: /evening/i,
                  night: /night/i,
                },
              },
              defaultParseWidth: "any",
            }),
          },
          options: { weekStartsOn: 0, firstWeekContainsDate: 1 },
        };
      function $(t, e) {
        S(2, arguments);
        var n = k(e);
        return D(t, -n);
      }
      function H(t, e) {
        for (
          var n = t < 0 ? "-" : "", i = Math.abs(t).toString();
          i.length < e;

        )
          i = "0" + i;
        return n + i;
      }
      function Y(t) {
        S(1, arguments);
        var e = 1,
          n = T(t),
          i = n.getUTCDay(),
          r = (i < e ? 7 : 0) + i - e;
        return n.setUTCDate(n.getUTCDate() - r), n.setUTCHours(0, 0, 0, 0), n;
      }
      function U(t) {
        S(1, arguments);
        var e = T(t),
          n = e.getUTCFullYear(),
          i = new Date(0);
        i.setUTCFullYear(n + 1, 0, 4), i.setUTCHours(0, 0, 0, 0);
        var r = Y(i),
          o = new Date(0);
        o.setUTCFullYear(n, 0, 4), o.setUTCHours(0, 0, 0, 0);
        var a = Y(o);
        return e.getTime() >= r.getTime()
          ? n + 1
          : e.getTime() >= a.getTime()
          ? n
          : n - 1;
      }
      function X(t) {
        S(1, arguments);
        var e = U(t),
          n = new Date(0);
        n.setUTCFullYear(e, 0, 4), n.setUTCHours(0, 0, 0, 0);
        var i = Y(n);
        return i;
      }
      function V(t) {
        S(1, arguments);
        var e = T(t),
          n = Y(e).getTime() - X(e).getTime();
        return Math.round(n / 6048e5) + 1;
      }
      function G(t, e) {
        S(1, arguments);
        var n = e || {},
          i = n.locale,
          r = i && i.options && i.options.weekStartsOn,
          o = null == r ? 0 : k(r),
          a = null == n.weekStartsOn ? o : k(n.weekStartsOn);
        if (!(a >= 0 && a <= 6))
          throw new RangeError(
            "weekStartsOn must be between 0 and 6 inclusively"
          );
        var s = T(t),
          l = s.getUTCDay(),
          c = (l < a ? 7 : 0) + l - a;
        return s.setUTCDate(s.getUTCDate() - c), s.setUTCHours(0, 0, 0, 0), s;
      }
      function K(t, e) {
        S(1, arguments);
        var n = T(t, e),
          i = n.getUTCFullYear(),
          r = e || {},
          o = r.locale,
          a = o && o.options && o.options.firstWeekContainsDate,
          s = null == a ? 1 : k(a),
          l = null == r.firstWeekContainsDate ? s : k(r.firstWeekContainsDate);
        if (!(l >= 1 && l <= 7))
          throw new RangeError(
            "firstWeekContainsDate must be between 1 and 7 inclusively"
          );
        var c = new Date(0);
        c.setUTCFullYear(i + 1, 0, l), c.setUTCHours(0, 0, 0, 0);
        var d = G(c, e),
          u = new Date(0);
        u.setUTCFullYear(i, 0, l), u.setUTCHours(0, 0, 0, 0);
        var p = G(u, e);
        return n.getTime() >= d.getTime()
          ? i + 1
          : n.getTime() >= p.getTime()
          ? i
          : i - 1;
      }
      function Z(t, e) {
        S(1, arguments);
        var n = e || {},
          i = n.locale,
          r = i && i.options && i.options.firstWeekContainsDate,
          o = null == r ? 1 : k(r),
          a = null == n.firstWeekContainsDate ? o : k(n.firstWeekContainsDate),
          s = K(t, e),
          l = new Date(0);
        l.setUTCFullYear(s, 0, a), l.setUTCHours(0, 0, 0, 0);
        var c = G(l, e);
        return c;
      }
      function J(t, e) {
        S(1, arguments);
        var n = T(t),
          i = G(n, e).getTime() - Z(n, e).getTime();
        return Math.round(i / 6048e5) + 1;
      }
      var Q = {
        G: function (t, e, n) {
          var i = t.getUTCFullYear() > 0 ? 1 : 0;
          switch (e) {
            case "G":
            case "GG":
            case "GGG":
              return n.era(i, { width: "abbreviated" });
            case "GGGGG":
              return n.era(i, { width: "narrow" });
            case "GGGG":
            default:
              return n.era(i, { width: "wide" });
          }
        },
        y: function (t, e, n) {
          if ("yo" === e) {
            var i = t.getUTCFullYear(),
              r = i > 0 ? i : 1 - i;
            return n.ordinalNumber(r, { unit: "year" });
          }
          return (function (t, e) {
            var n = t.getUTCFullYear(),
              i = n > 0 ? n : 1 - n;
            return H("yy" === e ? i % 100 : i, e.length);
          })(t, e);
        },
        Y: function (t, e, n, i) {
          var r = K(t, i),
            o = r > 0 ? r : 1 - r;
          return "YY" === e
            ? H(o % 100, 2)
            : "Yo" === e
            ? n.ordinalNumber(o, { unit: "year" })
            : H(o, e.length);
        },
        R: function (t, e) {
          return H(U(t), e.length);
        },
        u: function (t, e) {
          return H(t.getUTCFullYear(), e.length);
        },
        Q: function (t, e, n) {
          var i = Math.ceil((t.getUTCMonth() + 1) / 3);
          switch (e) {
            case "Q":
              return String(i);
            case "QQ":
              return H(i, 2);
            case "Qo":
              return n.ordinalNumber(i, { unit: "quarter" });
            case "QQQ":
              return n.quarter(i, {
                width: "abbreviated",
                context: "formatting",
              });
            case "QQQQQ":
              return n.quarter(i, { width: "narrow", context: "formatting" });
            case "QQQQ":
            default:
              return n.quarter(i, { width: "wide", context: "formatting" });
          }
        },
        q: function (t, e, n) {
          var i = Math.ceil((t.getUTCMonth() + 1) / 3);
          switch (e) {
            case "q":
              return String(i);
            case "qq":
              return H(i, 2);
            case "qo":
              return n.ordinalNumber(i, { unit: "quarter" });
            case "qqq":
              return n.quarter(i, {
                width: "abbreviated",
                context: "standalone",
              });
            case "qqqqq":
              return n.quarter(i, { width: "narrow", context: "standalone" });
            case "qqqq":
            default:
              return n.quarter(i, { width: "wide", context: "standalone" });
          }
        },
        M: function (t, e, n) {
          var i = t.getUTCMonth();
          switch (e) {
            case "M":
            case "MM":
              return (function (t, e) {
                var n = t.getUTCMonth();
                return "M" === e ? String(n + 1) : H(n + 1, 2);
              })(t, e);
            case "Mo":
              return n.ordinalNumber(i + 1, { unit: "month" });
            case "MMM":
              return n.month(i, {
                width: "abbreviated",
                context: "formatting",
              });
            case "MMMMM":
              return n.month(i, { width: "narrow", context: "formatting" });
            case "MMMM":
            default:
              return n.month(i, { width: "wide", context: "formatting" });
          }
        },
        L: function (t, e, n) {
          var i = t.getUTCMonth();
          switch (e) {
            case "L":
              return String(i + 1);
            case "LL":
              return H(i + 1, 2);
            case "Lo":
              return n.ordinalNumber(i + 1, { unit: "month" });
            case "LLL":
              return n.month(i, {
                width: "abbreviated",
                context: "standalone",
              });
            case "LLLLL":
              return n.month(i, { width: "narrow", context: "standalone" });
            case "LLLL":
            default:
              return n.month(i, { width: "wide", context: "standalone" });
          }
        },
        w: function (t, e, n, i) {
          var r = J(t, i);
          return "wo" === e
            ? n.ordinalNumber(r, { unit: "week" })
            : H(r, e.length);
        },
        I: function (t, e, n) {
          var i = V(t);
          return "Io" === e
            ? n.ordinalNumber(i, { unit: "week" })
            : H(i, e.length);
        },
        d: function (t, e, n) {
          return "do" === e
            ? n.ordinalNumber(t.getUTCDate(), { unit: "date" })
            : (function (t, e) {
                return H(t.getUTCDate(), e.length);
              })(t, e);
        },
        D: function (t, e, n) {
          var i = (function (t) {
            S(1, arguments);
            var e = T(t),
              n = e.getTime();
            e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
            var i = e.getTime(),
              r = n - i;
            return Math.floor(r / 864e5) + 1;
          })(t);
          return "Do" === e
            ? n.ordinalNumber(i, { unit: "dayOfYear" })
            : H(i, e.length);
        },
        E: function (t, e, n) {
          var i = t.getUTCDay();
          switch (e) {
            case "E":
            case "EE":
            case "EEE":
              return n.day(i, { width: "abbreviated", context: "formatting" });
            case "EEEEE":
              return n.day(i, { width: "narrow", context: "formatting" });
            case "EEEEEE":
              return n.day(i, { width: "short", context: "formatting" });
            case "EEEE":
            default:
              return n.day(i, { width: "wide", context: "formatting" });
          }
        },
        e: function (t, e, n, i) {
          var r = t.getUTCDay(),
            o = (r - i.weekStartsOn + 8) % 7 || 7;
          switch (e) {
            case "e":
              return String(o);
            case "ee":
              return H(o, 2);
            case "eo":
              return n.ordinalNumber(o, { unit: "day" });
            case "eee":
              return n.day(r, { width: "abbreviated", context: "formatting" });
            case "eeeee":
              return n.day(r, { width: "narrow", context: "formatting" });
            case "eeeeee":
              return n.day(r, { width: "short", context: "formatting" });
            case "eeee":
            default:
              return n.day(r, { width: "wide", context: "formatting" });
          }
        },
        c: function (t, e, n, i) {
          var r = t.getUTCDay(),
            o = (r - i.weekStartsOn + 8) % 7 || 7;
          switch (e) {
            case "c":
              return String(o);
            case "cc":
              return H(o, e.length);
            case "co":
              return n.ordinalNumber(o, { unit: "day" });
            case "ccc":
              return n.day(r, { width: "abbreviated", context: "standalone" });
            case "ccccc":
              return n.day(r, { width: "narrow", context: "standalone" });
            case "cccccc":
              return n.day(r, { width: "short", context: "standalone" });
            case "cccc":
            default:
              return n.day(r, { width: "wide", context: "standalone" });
          }
        },
        i: function (t, e, n) {
          var i = t.getUTCDay(),
            r = 0 === i ? 7 : i;
          switch (e) {
            case "i":
              return String(r);
            case "ii":
              return H(r, e.length);
            case "io":
              return n.ordinalNumber(r, { unit: "day" });
            case "iii":
              return n.day(i, { width: "abbreviated", context: "formatting" });
            case "iiiii":
              return n.day(i, { width: "narrow", context: "formatting" });
            case "iiiiii":
              return n.day(i, { width: "short", context: "formatting" });
            case "iiii":
            default:
              return n.day(i, { width: "wide", context: "formatting" });
          }
        },
        a: function (t, e, n) {
          var i = t.getUTCHours() / 12 >= 1 ? "pm" : "am";
          switch (e) {
            case "a":
            case "aa":
              return n.dayPeriod(i, {
                width: "abbreviated",
                context: "formatting",
              });
            case "aaa":
              return n
                .dayPeriod(i, { width: "abbreviated", context: "formatting" })
                .toLowerCase();
            case "aaaaa":
              return n.dayPeriod(i, { width: "narrow", context: "formatting" });
            case "aaaa":
            default:
              return n.dayPeriod(i, { width: "wide", context: "formatting" });
          }
        },
        b: function (t, e, n) {
          var i,
            r = t.getUTCHours();
          switch (
            ((i =
              12 === r
                ? "noon"
                : 0 === r
                ? "midnight"
                : r / 12 >= 1
                ? "pm"
                : "am"),
            e)
          ) {
            case "b":
            case "bb":
              return n.dayPeriod(i, {
                width: "abbreviated",
                context: "formatting",
              });
            case "bbb":
              return n
                .dayPeriod(i, { width: "abbreviated", context: "formatting" })
                .toLowerCase();
            case "bbbbb":
              return n.dayPeriod(i, { width: "narrow", context: "formatting" });
            case "bbbb":
            default:
              return n.dayPeriod(i, { width: "wide", context: "formatting" });
          }
        },
        B: function (t, e, n) {
          var i,
            r = t.getUTCHours();
          switch (
            ((i =
              r >= 17
                ? "evening"
                : r >= 12
                ? "afternoon"
                : r >= 4
                ? "morning"
                : "night"),
            e)
          ) {
            case "B":
            case "BB":
            case "BBB":
              return n.dayPeriod(i, {
                width: "abbreviated",
                context: "formatting",
              });
            case "BBBBB":
              return n.dayPeriod(i, { width: "narrow", context: "formatting" });
            case "BBBB":
            default:
              return n.dayPeriod(i, { width: "wide", context: "formatting" });
          }
        },
        h: function (t, e, n) {
          if ("ho" === e) {
            var i = t.getUTCHours() % 12;
            return 0 === i && (i = 12), n.ordinalNumber(i, { unit: "hour" });
          }
          return (function (t, e) {
            return H(t.getUTCHours() % 12 || 12, e.length);
          })(t, e);
        },
        H: function (t, e, n) {
          return "Ho" === e
            ? n.ordinalNumber(t.getUTCHours(), { unit: "hour" })
            : (function (t, e) {
                return H(t.getUTCHours(), e.length);
              })(t, e);
        },
        K: function (t, e, n) {
          var i = t.getUTCHours() % 12;
          return "Ko" === e
            ? n.ordinalNumber(i, { unit: "hour" })
            : H(i, e.length);
        },
        k: function (t, e, n) {
          var i = t.getUTCHours();
          return (
            0 === i && (i = 24),
            "ko" === e ? n.ordinalNumber(i, { unit: "hour" }) : H(i, e.length)
          );
        },
        m: function (t, e, n) {
          return "mo" === e
            ? n.ordinalNumber(t.getUTCMinutes(), { unit: "minute" })
            : (function (t, e) {
                return H(t.getUTCMinutes(), e.length);
              })(t, e);
        },
        s: function (t, e, n) {
          return "so" === e
            ? n.ordinalNumber(t.getUTCSeconds(), { unit: "second" })
            : (function (t, e) {
                return H(t.getUTCSeconds(), e.length);
              })(t, e);
        },
        S: function (t, e) {
          return (function (t, e) {
            var n = e.length,
              i = t.getUTCMilliseconds();
            return H(Math.floor(i * Math.pow(10, n - 3)), e.length);
          })(t, e);
        },
        X: function (t, e, n, i) {
          var r = (i._originalDate || t).getTimezoneOffset();
          if (0 === r) return "Z";
          switch (e) {
            case "X":
              return et(r);
            case "XXXX":
            case "XX":
              return nt(r);
            case "XXXXX":
            case "XXX":
            default:
              return nt(r, ":");
          }
        },
        x: function (t, e, n, i) {
          var r = (i._originalDate || t).getTimezoneOffset();
          switch (e) {
            case "x":
              return et(r);
            case "xxxx":
            case "xx":
              return nt(r);
            case "xxxxx":
            case "xxx":
            default:
              return nt(r, ":");
          }
        },
        O: function (t, e, n, i) {
          var r = (i._originalDate || t).getTimezoneOffset();
          switch (e) {
            case "O":
            case "OO":
            case "OOO":
              return "GMT" + tt(r, ":");
            case "OOOO":
            default:
              return "GMT" + nt(r, ":");
          }
        },
        z: function (t, e, n, i) {
          var r = (i._originalDate || t).getTimezoneOffset();
          switch (e) {
            case "z":
            case "zz":
            case "zzz":
              return "GMT" + tt(r, ":");
            case "zzzz":
            default:
              return "GMT" + nt(r, ":");
          }
        },
        t: function (t, e, n, i) {
          var r = i._originalDate || t;
          return H(Math.floor(r.getTime() / 1e3), e.length);
        },
        T: function (t, e, n, i) {
          return H((i._originalDate || t).getTime(), e.length);
        },
      };
      function tt(t, e) {
        var n = t > 0 ? "-" : "+",
          i = Math.abs(t),
          r = Math.floor(i / 60),
          o = i % 60;
        if (0 === o) return n + String(r);
        var a = e || "";
        return n + String(r) + a + H(o, 2);
      }
      function et(t, e) {
        return t % 60 == 0
          ? (t > 0 ? "-" : "+") + H(Math.abs(t) / 60, 2)
          : nt(t, e);
      }
      function nt(t, e) {
        var n = e || "",
          i = t > 0 ? "-" : "+",
          r = Math.abs(t);
        return i + H(Math.floor(r / 60), 2) + n + H(r % 60, 2);
      }
      function it(t, e) {
        switch (t) {
          case "P":
            return e.date({ width: "short" });
          case "PP":
            return e.date({ width: "medium" });
          case "PPP":
            return e.date({ width: "long" });
          case "PPPP":
          default:
            return e.date({ width: "full" });
        }
      }
      function rt(t, e) {
        switch (t) {
          case "p":
            return e.time({ width: "short" });
          case "pp":
            return e.time({ width: "medium" });
          case "ppp":
            return e.time({ width: "long" });
          case "pppp":
          default:
            return e.time({ width: "full" });
        }
      }
      var ot = {
          p: rt,
          P: function (t, e) {
            var n,
              i = t.match(/(P+)(p+)?/),
              r = i[1],
              o = i[2];
            if (!o) return it(t, e);
            switch (r) {
              case "P":
                n = e.dateTime({ width: "short" });
                break;
              case "PP":
                n = e.dateTime({ width: "medium" });
                break;
              case "PPP":
                n = e.dateTime({ width: "long" });
                break;
              case "PPPP":
              default:
                n = e.dateTime({ width: "full" });
            }
            return n
              .replace("{{date}}", it(r, e))
              .replace("{{time}}", rt(o, e));
          },
        },
        at = ["D", "DD"],
        st = ["YY", "YYYY"];
      function lt(t) {
        return -1 !== at.indexOf(t);
      }
      function ct(t) {
        return -1 !== st.indexOf(t);
      }
      function dt(t, e, n) {
        if ("YYYY" === t)
          throw new RangeError(
            "Use `yyyy` instead of `YYYY` (in `"
              .concat(e, "`) for formatting years to the input `")
              .concat(n, "`; see: https://git.io/fxCyr")
          );
        if ("YY" === t)
          throw new RangeError(
            "Use `yy` instead of `YY` (in `"
              .concat(e, "`) for formatting years to the input `")
              .concat(n, "`; see: https://git.io/fxCyr")
          );
        if ("D" === t)
          throw new RangeError(
            "Use `d` instead of `D` (in `"
              .concat(e, "`) for formatting days of the month to the input `")
              .concat(n, "`; see: https://git.io/fxCyr")
          );
        if ("DD" === t)
          throw new RangeError(
            "Use `dd` instead of `DD` (in `"
              .concat(e, "`) for formatting days of the month to the input `")
              .concat(n, "`; see: https://git.io/fxCyr")
          );
      }
      var ut = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
        pt = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
        ht = /^'([^]*?)'?$/,
        ft = /''/g,
        bt = /[a-zA-Z]/;
      function mt(t) {
        return t.match(ht)[1].replace(ft, "'");
      }
      function gt(t, e) {
        if (null == t)
          throw new TypeError(
            "assign requires that input parameter not be null or undefined"
          );
        for (var n in (e = e || {})) e.hasOwnProperty(n) && (t[n] = e[n]);
        return t;
      }
      function vt(t, e, n) {
        S(2, arguments);
        var i = n || {},
          r = i.locale,
          o = r && r.options && r.options.weekStartsOn,
          a = null == o ? 0 : k(o),
          s = null == i.weekStartsOn ? a : k(i.weekStartsOn);
        if (!(s >= 0 && s <= 6))
          throw new RangeError(
            "weekStartsOn must be between 0 and 6 inclusively"
          );
        var l = T(t),
          c = k(e),
          d = l.getUTCDay(),
          u = c % 7,
          p = (u + 7) % 7,
          h = (p < s ? 7 : 0) + c - d;
        return l.setUTCDate(l.getUTCDate() + h), l;
      }
      var _t = /^(1[0-2]|0?\d)/,
        yt = /^(3[0-1]|[0-2]?\d)/,
        Mt = /^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,
        Ot = /^(5[0-3]|[0-4]?\d)/,
        wt = /^(2[0-3]|[0-1]?\d)/,
        At = /^(2[0-4]|[0-1]?\d)/,
        xt = /^(1[0-1]|0?\d)/,
        zt = /^(1[0-2]|0?\d)/,
        Ct = /^[0-5]?\d/,
        kt = /^[0-5]?\d/,
        St = /^\d/,
        Tt = /^\d{1,2}/,
        Dt = /^\d{1,3}/,
        Lt = /^\d{1,4}/,
        qt = /^-?\d+/,
        Et = /^-?\d/,
        jt = /^-?\d{1,2}/,
        Pt = /^-?\d{1,3}/,
        Rt = /^-?\d{1,4}/,
        It = /^([+-])(\d{2})(\d{2})?|Z/,
        Wt = /^([+-])(\d{2})(\d{2})|Z/,
        Nt = /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
        Bt = /^([+-])(\d{2}):(\d{2})|Z/,
        Ft = /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/;
      function $t(t, e, n) {
        var i = e.match(t);
        if (!i) return null;
        var r = parseInt(i[0], 10);
        return { value: n ? n(r) : r, rest: e.slice(i[0].length) };
      }
      function Ht(t, e) {
        var n = e.match(t);
        return n
          ? "Z" === n[0]
            ? { value: 0, rest: e.slice(1) }
            : {
                value:
                  ("+" === n[1] ? 1 : -1) *
                  (36e5 * (n[2] ? parseInt(n[2], 10) : 0) +
                    6e4 * (n[3] ? parseInt(n[3], 10) : 0) +
                    1e3 * (n[5] ? parseInt(n[5], 10) : 0)),
                rest: e.slice(n[0].length),
              }
          : null;
      }
      function Yt(t, e) {
        return $t(qt, t, e);
      }
      function Ut(t, e, n) {
        switch (t) {
          case 1:
            return $t(St, e, n);
          case 2:
            return $t(Tt, e, n);
          case 3:
            return $t(Dt, e, n);
          case 4:
            return $t(Lt, e, n);
          default:
            return $t(new RegExp("^\\d{1," + t + "}"), e, n);
        }
      }
      function Xt(t, e, n) {
        switch (t) {
          case 1:
            return $t(Et, e, n);
          case 2:
            return $t(jt, e, n);
          case 3:
            return $t(Pt, e, n);
          case 4:
            return $t(Rt, e, n);
          default:
            return $t(new RegExp("^-?\\d{1," + t + "}"), e, n);
        }
      }
      function Vt(t) {
        switch (t) {
          case "morning":
            return 4;
          case "evening":
            return 17;
          case "pm":
          case "noon":
          case "afternoon":
            return 12;
          case "am":
          case "midnight":
          case "night":
          default:
            return 0;
        }
      }
      function Gt(t, e) {
        var n,
          i = e > 0,
          r = i ? e : 1 - e;
        if (r <= 50) n = t || 100;
        else {
          var o = r + 50;
          n = t + 100 * Math.floor(o / 100) - (t >= o % 100 ? 100 : 0);
        }
        return i ? n : 1 - n;
      }
      var Kt = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
        Zt = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
      function Jt(t) {
        return t % 400 == 0 || (t % 4 == 0 && t % 100 != 0);
      }
      var Qt = {
          G: {
            priority: 140,
            parse: function (t, e, n, i) {
              switch (e) {
                case "G":
                case "GG":
                case "GGG":
                  return (
                    n.era(t, { width: "abbreviated" }) ||
                    n.era(t, { width: "narrow" })
                  );
                case "GGGGG":
                  return n.era(t, { width: "narrow" });
                case "GGGG":
                default:
                  return (
                    n.era(t, { width: "wide" }) ||
                    n.era(t, { width: "abbreviated" }) ||
                    n.era(t, { width: "narrow" })
                  );
              }
            },
            set: function (t, e, n, i) {
              return (
                (e.era = n),
                t.setUTCFullYear(n, 0, 1),
                t.setUTCHours(0, 0, 0, 0),
                t
              );
            },
            incompatibleTokens: ["R", "u", "t", "T"],
          },
          y: {
            priority: 130,
            parse: function (t, e, n, i) {
              var r = function (t) {
                return { year: t, isTwoDigitYear: "yy" === e };
              };
              switch (e) {
                case "y":
                  return Ut(4, t, r);
                case "yo":
                  return n.ordinalNumber(t, { unit: "year", valueCallback: r });
                default:
                  return Ut(e.length, t, r);
              }
            },
            validate: function (t, e, n) {
              return e.isTwoDigitYear || e.year > 0;
            },
            set: function (t, e, n, i) {
              var r = t.getUTCFullYear();
              if (n.isTwoDigitYear) {
                var o = Gt(n.year, r);
                return t.setUTCFullYear(o, 0, 1), t.setUTCHours(0, 0, 0, 0), t;
              }
              var a = "era" in e && 1 !== e.era ? 1 - n.year : n.year;
              return t.setUTCFullYear(a, 0, 1), t.setUTCHours(0, 0, 0, 0), t;
            },
            incompatibleTokens: [
              "Y",
              "R",
              "u",
              "w",
              "I",
              "i",
              "e",
              "c",
              "t",
              "T",
            ],
          },
          Y: {
            priority: 130,
            parse: function (t, e, n, i) {
              var r = function (t) {
                return { year: t, isTwoDigitYear: "YY" === e };
              };
              switch (e) {
                case "Y":
                  return Ut(4, t, r);
                case "Yo":
                  return n.ordinalNumber(t, { unit: "year", valueCallback: r });
                default:
                  return Ut(e.length, t, r);
              }
            },
            validate: function (t, e, n) {
              return e.isTwoDigitYear || e.year > 0;
            },
            set: function (t, e, n, i) {
              var r = K(t, i);
              if (n.isTwoDigitYear) {
                var o = Gt(n.year, r);
                return (
                  t.setUTCFullYear(o, 0, i.firstWeekContainsDate),
                  t.setUTCHours(0, 0, 0, 0),
                  G(t, i)
                );
              }
              var a = "era" in e && 1 !== e.era ? 1 - n.year : n.year;
              return (
                t.setUTCFullYear(a, 0, i.firstWeekContainsDate),
                t.setUTCHours(0, 0, 0, 0),
                G(t, i)
              );
            },
            incompatibleTokens: [
              "y",
              "R",
              "u",
              "Q",
              "q",
              "M",
              "L",
              "I",
              "d",
              "D",
              "i",
              "t",
              "T",
            ],
          },
          R: {
            priority: 130,
            parse: function (t, e, n, i) {
              return Xt("R" === e ? 4 : e.length, t);
            },
            set: function (t, e, n, i) {
              var r = new Date(0);
              return r.setUTCFullYear(n, 0, 4), r.setUTCHours(0, 0, 0, 0), Y(r);
            },
            incompatibleTokens: [
              "G",
              "y",
              "Y",
              "u",
              "Q",
              "q",
              "M",
              "L",
              "w",
              "d",
              "D",
              "e",
              "c",
              "t",
              "T",
            ],
          },
          u: {
            priority: 130,
            parse: function (t, e, n, i) {
              return Xt("u" === e ? 4 : e.length, t);
            },
            set: function (t, e, n, i) {
              return t.setUTCFullYear(n, 0, 1), t.setUTCHours(0, 0, 0, 0), t;
            },
            incompatibleTokens: [
              "G",
              "y",
              "Y",
              "R",
              "w",
              "I",
              "i",
              "e",
              "c",
              "t",
              "T",
            ],
          },
          Q: {
            priority: 120,
            parse: function (t, e, n, i) {
              switch (e) {
                case "Q":
                case "QQ":
                  return Ut(e.length, t);
                case "Qo":
                  return n.ordinalNumber(t, { unit: "quarter" });
                case "QQQ":
                  return (
                    n.quarter(t, {
                      width: "abbreviated",
                      context: "formatting",
                    }) ||
                    n.quarter(t, { width: "narrow", context: "formatting" })
                  );
                case "QQQQQ":
                  return n.quarter(t, {
                    width: "narrow",
                    context: "formatting",
                  });
                case "QQQQ":
                default:
                  return (
                    n.quarter(t, { width: "wide", context: "formatting" }) ||
                    n.quarter(t, {
                      width: "abbreviated",
                      context: "formatting",
                    }) ||
                    n.quarter(t, { width: "narrow", context: "formatting" })
                  );
              }
            },
            validate: function (t, e, n) {
              return e >= 1 && e <= 4;
            },
            set: function (t, e, n, i) {
              return (
                t.setUTCMonth(3 * (n - 1), 1), t.setUTCHours(0, 0, 0, 0), t
              );
            },
            incompatibleTokens: [
              "Y",
              "R",
              "q",
              "M",
              "L",
              "w",
              "I",
              "d",
              "D",
              "i",
              "e",
              "c",
              "t",
              "T",
            ],
          },
          q: {
            priority: 120,
            parse: function (t, e, n, i) {
              switch (e) {
                case "q":
                case "qq":
                  return Ut(e.length, t);
                case "qo":
                  return n.ordinalNumber(t, { unit: "quarter" });
                case "qqq":
                  return (
                    n.quarter(t, {
                      width: "abbreviated",
                      context: "standalone",
                    }) ||
                    n.quarter(t, { width: "narrow", context: "standalone" })
                  );
                case "qqqqq":
                  return n.quarter(t, {
                    width: "narrow",
                    context: "standalone",
                  });
                case "qqqq":
                default:
                  return (
                    n.quarter(t, { width: "wide", context: "standalone" }) ||
                    n.quarter(t, {
                      width: "abbreviated",
                      context: "standalone",
                    }) ||
                    n.quarter(t, { width: "narrow", context: "standalone" })
                  );
              }
            },
            validate: function (t, e, n) {
              return e >= 1 && e <= 4;
            },
            set: function (t, e, n, i) {
              return (
                t.setUTCMonth(3 * (n - 1), 1), t.setUTCHours(0, 0, 0, 0), t
              );
            },
            incompatibleTokens: [
              "Y",
              "R",
              "Q",
              "M",
              "L",
              "w",
              "I",
              "d",
              "D",
              "i",
              "e",
              "c",
              "t",
              "T",
            ],
          },
          M: {
            priority: 110,
            parse: function (t, e, n, i) {
              var r = function (t) {
                return t - 1;
              };
              switch (e) {
                case "M":
                  return $t(_t, t, r);
                case "MM":
                  return Ut(2, t, r);
                case "Mo":
                  return n.ordinalNumber(t, {
                    unit: "month",
                    valueCallback: r,
                  });
                case "MMM":
                  return (
                    n.month(t, {
                      width: "abbreviated",
                      context: "formatting",
                    }) || n.month(t, { width: "narrow", context: "formatting" })
                  );
                case "MMMMM":
                  return n.month(t, { width: "narrow", context: "formatting" });
                case "MMMM":
                default:
                  return (
                    n.month(t, { width: "wide", context: "formatting" }) ||
                    n.month(t, {
                      width: "abbreviated",
                      context: "formatting",
                    }) ||
                    n.month(t, { width: "narrow", context: "formatting" })
                  );
              }
            },
            validate: function (t, e, n) {
              return e >= 0 && e <= 11;
            },
            set: function (t, e, n, i) {
              return t.setUTCMonth(n, 1), t.setUTCHours(0, 0, 0, 0), t;
            },
            incompatibleTokens: [
              "Y",
              "R",
              "q",
              "Q",
              "L",
              "w",
              "I",
              "D",
              "i",
              "e",
              "c",
              "t",
              "T",
            ],
          },
          L: {
            priority: 110,
            parse: function (t, e, n, i) {
              var r = function (t) {
                return t - 1;
              };
              switch (e) {
                case "L":
                  return $t(_t, t, r);
                case "LL":
                  return Ut(2, t, r);
                case "Lo":
                  return n.ordinalNumber(t, {
                    unit: "month",
                    valueCallback: r,
                  });
                case "LLL":
                  return (
                    n.month(t, {
                      width: "abbreviated",
                      context: "standalone",
                    }) || n.month(t, { width: "narrow", context: "standalone" })
                  );
                case "LLLLL":
                  return n.month(t, { width: "narrow", context: "standalone" });
                case "LLLL":
                default:
                  return (
                    n.month(t, { width: "wide", context: "standalone" }) ||
                    n.month(t, {
                      width: "abbreviated",
                      context: "standalone",
                    }) ||
                    n.month(t, { width: "narrow", context: "standalone" })
                  );
              }
            },
            validate: function (t, e, n) {
              return e >= 0 && e <= 11;
            },
            set: function (t, e, n, i) {
              return t.setUTCMonth(n, 1), t.setUTCHours(0, 0, 0, 0), t;
            },
            incompatibleTokens: [
              "Y",
              "R",
              "q",
              "Q",
              "M",
              "w",
              "I",
              "D",
              "i",
              "e",
              "c",
              "t",
              "T",
            ],
          },
          w: {
            priority: 100,
            parse: function (t, e, n, i) {
              switch (e) {
                case "w":
                  return $t(Ot, t);
                case "wo":
                  return n.ordinalNumber(t, { unit: "week" });
                default:
                  return Ut(e.length, t);
              }
            },
            validate: function (t, e, n) {
              return e >= 1 && e <= 53;
            },
            set: function (t, e, n, i) {
              return G(
                (function (t, e, n) {
                  S(2, arguments);
                  var i = T(t),
                    r = k(e),
                    o = J(i, n) - r;
                  return i.setUTCDate(i.getUTCDate() - 7 * o), i;
                })(t, n, i),
                i
              );
            },
            incompatibleTokens: [
              "y",
              "R",
              "u",
              "q",
              "Q",
              "M",
              "L",
              "I",
              "d",
              "D",
              "i",
              "t",
              "T",
            ],
          },
          I: {
            priority: 100,
            parse: function (t, e, n, i) {
              switch (e) {
                case "I":
                  return $t(Ot, t);
                case "Io":
                  return n.ordinalNumber(t, { unit: "week" });
                default:
                  return Ut(e.length, t);
              }
            },
            validate: function (t, e, n) {
              return e >= 1 && e <= 53;
            },
            set: function (t, e, n, i) {
              return Y(
                (function (t, e) {
                  S(2, arguments);
                  var n = T(t),
                    i = k(e),
                    r = V(n) - i;
                  return n.setUTCDate(n.getUTCDate() - 7 * r), n;
                })(t, n, i),
                i
              );
            },
            incompatibleTokens: [
              "y",
              "Y",
              "u",
              "q",
              "Q",
              "M",
              "L",
              "w",
              "d",
              "D",
              "e",
              "c",
              "t",
              "T",
            ],
          },
          d: {
            priority: 90,
            subPriority: 1,
            parse: function (t, e, n, i) {
              switch (e) {
                case "d":
                  return $t(yt, t);
                case "do":
                  return n.ordinalNumber(t, { unit: "date" });
                default:
                  return Ut(e.length, t);
              }
            },
            validate: function (t, e, n) {
              var i = Jt(t.getUTCFullYear()),
                r = t.getUTCMonth();
              return i ? e >= 1 && e <= Zt[r] : e >= 1 && e <= Kt[r];
            },
            set: function (t, e, n, i) {
              return t.setUTCDate(n), t.setUTCHours(0, 0, 0, 0), t;
            },
            incompatibleTokens: [
              "Y",
              "R",
              "q",
              "Q",
              "w",
              "I",
              "D",
              "i",
              "e",
              "c",
              "t",
              "T",
            ],
          },
          D: {
            priority: 90,
            subPriority: 1,
            parse: function (t, e, n, i) {
              switch (e) {
                case "D":
                case "DD":
                  return $t(Mt, t);
                case "Do":
                  return n.ordinalNumber(t, { unit: "date" });
                default:
                  return Ut(e.length, t);
              }
            },
            validate: function (t, e, n) {
              return Jt(t.getUTCFullYear())
                ? e >= 1 && e <= 366
                : e >= 1 && e <= 365;
            },
            set: function (t, e, n, i) {
              return t.setUTCMonth(0, n), t.setUTCHours(0, 0, 0, 0), t;
            },
            incompatibleTokens: [
              "Y",
              "R",
              "q",
              "Q",
              "M",
              "L",
              "w",
              "I",
              "d",
              "E",
              "i",
              "e",
              "c",
              "t",
              "T",
            ],
          },
          E: {
            priority: 90,
            parse: function (t, e, n, i) {
              switch (e) {
                case "E":
                case "EE":
                case "EEE":
                  return (
                    n.day(t, { width: "abbreviated", context: "formatting" }) ||
                    n.day(t, { width: "short", context: "formatting" }) ||
                    n.day(t, { width: "narrow", context: "formatting" })
                  );
                case "EEEEE":
                  return n.day(t, { width: "narrow", context: "formatting" });
                case "EEEEEE":
                  return (
                    n.day(t, { width: "short", context: "formatting" }) ||
                    n.day(t, { width: "narrow", context: "formatting" })
                  );
                case "EEEE":
                default:
                  return (
                    n.day(t, { width: "wide", context: "formatting" }) ||
                    n.day(t, { width: "abbreviated", context: "formatting" }) ||
                    n.day(t, { width: "short", context: "formatting" }) ||
                    n.day(t, { width: "narrow", context: "formatting" })
                  );
              }
            },
            validate: function (t, e, n) {
              return e >= 0 && e <= 6;
            },
            set: function (t, e, n, i) {
              return (t = vt(t, n, i)).setUTCHours(0, 0, 0, 0), t;
            },
            incompatibleTokens: ["D", "i", "e", "c", "t", "T"],
          },
          e: {
            priority: 90,
            parse: function (t, e, n, i) {
              var r = function (t) {
                var e = 7 * Math.floor((t - 1) / 7);
                return ((t + i.weekStartsOn + 6) % 7) + e;
              };
              switch (e) {
                case "e":
                case "ee":
                  return Ut(e.length, t, r);
                case "eo":
                  return n.ordinalNumber(t, { unit: "day", valueCallback: r });
                case "eee":
                  return (
                    n.day(t, { width: "abbreviated", context: "formatting" }) ||
                    n.day(t, { width: "short", context: "formatting" }) ||
                    n.day(t, { width: "narrow", context: "formatting" })
                  );
                case "eeeee":
                  return n.day(t, { width: "narrow", context: "formatting" });
                case "eeeeee":
                  return (
                    n.day(t, { width: "short", context: "formatting" }) ||
                    n.day(t, { width: "narrow", context: "formatting" })
                  );
                case "eeee":
                default:
                  return (
                    n.day(t, { width: "wide", context: "formatting" }) ||
                    n.day(t, { width: "abbreviated", context: "formatting" }) ||
                    n.day(t, { width: "short", context: "formatting" }) ||
                    n.day(t, { width: "narrow", context: "formatting" })
                  );
              }
            },
            validate: function (t, e, n) {
              return e >= 0 && e <= 6;
            },
            set: function (t, e, n, i) {
              return (t = vt(t, n, i)).setUTCHours(0, 0, 0, 0), t;
            },
            incompatibleTokens: [
              "y",
              "R",
              "u",
              "q",
              "Q",
              "M",
              "L",
              "I",
              "d",
              "D",
              "E",
              "i",
              "c",
              "t",
              "T",
            ],
          },
          c: {
            priority: 90,
            parse: function (t, e, n, i) {
              var r = function (t) {
                var e = 7 * Math.floor((t - 1) / 7);
                return ((t + i.weekStartsOn + 6) % 7) + e;
              };
              switch (e) {
                case "c":
                case "cc":
                  return Ut(e.length, t, r);
                case "co":
                  return n.ordinalNumber(t, { unit: "day", valueCallback: r });
                case "ccc":
                  return (
                    n.day(t, { width: "abbreviated", context: "standalone" }) ||
                    n.day(t, { width: "short", context: "standalone" }) ||
                    n.day(t, { width: "narrow", context: "standalone" })
                  );
                case "ccccc":
                  return n.day(t, { width: "narrow", context: "standalone" });
                case "cccccc":
                  return (
                    n.day(t, { width: "short", context: "standalone" }) ||
                    n.day(t, { width: "narrow", context: "standalone" })
                  );
                case "cccc":
                default:
                  return (
                    n.day(t, { width: "wide", context: "standalone" }) ||
                    n.day(t, { width: "abbreviated", context: "standalone" }) ||
                    n.day(t, { width: "short", context: "standalone" }) ||
                    n.day(t, { width: "narrow", context: "standalone" })
                  );
              }
            },
            validate: function (t, e, n) {
              return e >= 0 && e <= 6;
            },
            set: function (t, e, n, i) {
              return (t = vt(t, n, i)).setUTCHours(0, 0, 0, 0), t;
            },
            incompatibleTokens: [
              "y",
              "R",
              "u",
              "q",
              "Q",
              "M",
              "L",
              "I",
              "d",
              "D",
              "E",
              "i",
              "e",
              "t",
              "T",
            ],
          },
          i: {
            priority: 90,
            parse: function (t, e, n, i) {
              var r = function (t) {
                return 0 === t ? 7 : t;
              };
              switch (e) {
                case "i":
                case "ii":
                  return Ut(e.length, t);
                case "io":
                  return n.ordinalNumber(t, { unit: "day" });
                case "iii":
                  return (
                    n.day(t, {
                      width: "abbreviated",
                      context: "formatting",
                      valueCallback: r,
                    }) ||
                    n.day(t, {
                      width: "short",
                      context: "formatting",
                      valueCallback: r,
                    }) ||
                    n.day(t, {
                      width: "narrow",
                      context: "formatting",
                      valueCallback: r,
                    })
                  );
                case "iiiii":
                  return n.day(t, {
                    width: "narrow",
                    context: "formatting",
                    valueCallback: r,
                  });
                case "iiiiii":
                  return (
                    n.day(t, {
                      width: "short",
                      context: "formatting",
                      valueCallback: r,
                    }) ||
                    n.day(t, {
                      width: "narrow",
                      context: "formatting",
                      valueCallback: r,
                    })
                  );
                case "iiii":
                default:
                  return (
                    n.day(t, {
                      width: "wide",
                      context: "formatting",
                      valueCallback: r,
                    }) ||
                    n.day(t, {
                      width: "abbreviated",
                      context: "formatting",
                      valueCallback: r,
                    }) ||
                    n.day(t, {
                      width: "short",
                      context: "formatting",
                      valueCallback: r,
                    }) ||
                    n.day(t, {
                      width: "narrow",
                      context: "formatting",
                      valueCallback: r,
                    })
                  );
              }
            },
            validate: function (t, e, n) {
              return e >= 1 && e <= 7;
            },
            set: function (t, e, n, i) {
              return (
                (t = (function (t, e) {
                  S(2, arguments);
                  var n = k(e);
                  n % 7 == 0 && (n -= 7);
                  var i = 1,
                    r = T(t),
                    o = r.getUTCDay(),
                    a = n % 7,
                    s = (a + 7) % 7,
                    l = (s < i ? 7 : 0) + n - o;
                  return r.setUTCDate(r.getUTCDate() + l), r;
                })(t, n, i)).setUTCHours(0, 0, 0, 0),
                t
              );
            },
            incompatibleTokens: [
              "y",
              "Y",
              "u",
              "q",
              "Q",
              "M",
              "L",
              "w",
              "d",
              "D",
              "E",
              "e",
              "c",
              "t",
              "T",
            ],
          },
          a: {
            priority: 80,
            parse: function (t, e, n, i) {
              switch (e) {
                case "a":
                case "aa":
                case "aaa":
                  return (
                    n.dayPeriod(t, {
                      width: "abbreviated",
                      context: "formatting",
                    }) ||
                    n.dayPeriod(t, { width: "narrow", context: "formatting" })
                  );
                case "aaaaa":
                  return n.dayPeriod(t, {
                    width: "narrow",
                    context: "formatting",
                  });
                case "aaaa":
                default:
                  return (
                    n.dayPeriod(t, { width: "wide", context: "formatting" }) ||
                    n.dayPeriod(t, {
                      width: "abbreviated",
                      context: "formatting",
                    }) ||
                    n.dayPeriod(t, { width: "narrow", context: "formatting" })
                  );
              }
            },
            set: function (t, e, n, i) {
              return t.setUTCHours(Vt(n), 0, 0, 0), t;
            },
            incompatibleTokens: ["b", "B", "H", "K", "k", "t", "T"],
          },
          b: {
            priority: 80,
            parse: function (t, e, n, i) {
              switch (e) {
                case "b":
                case "bb":
                case "bbb":
                  return (
                    n.dayPeriod(t, {
                      width: "abbreviated",
                      context: "formatting",
                    }) ||
                    n.dayPeriod(t, { width: "narrow", context: "formatting" })
                  );
                case "bbbbb":
                  return n.dayPeriod(t, {
                    width: "narrow",
                    context: "formatting",
                  });
                case "bbbb":
                default:
                  return (
                    n.dayPeriod(t, { width: "wide", context: "formatting" }) ||
                    n.dayPeriod(t, {
                      width: "abbreviated",
                      context: "formatting",
                    }) ||
                    n.dayPeriod(t, { width: "narrow", context: "formatting" })
                  );
              }
            },
            set: function (t, e, n, i) {
              return t.setUTCHours(Vt(n), 0, 0, 0), t;
            },
            incompatibleTokens: ["a", "B", "H", "K", "k", "t", "T"],
          },
          B: {
            priority: 80,
            parse: function (t, e, n, i) {
              switch (e) {
                case "B":
                case "BB":
                case "BBB":
                  return (
                    n.dayPeriod(t, {
                      width: "abbreviated",
                      context: "formatting",
                    }) ||
                    n.dayPeriod(t, { width: "narrow", context: "formatting" })
                  );
                case "BBBBB":
                  return n.dayPeriod(t, {
                    width: "narrow",
                    context: "formatting",
                  });
                case "BBBB":
                default:
                  return (
                    n.dayPeriod(t, { width: "wide", context: "formatting" }) ||
                    n.dayPeriod(t, {
                      width: "abbreviated",
                      context: "formatting",
                    }) ||
                    n.dayPeriod(t, { width: "narrow", context: "formatting" })
                  );
              }
            },
            set: function (t, e, n, i) {
              return t.setUTCHours(Vt(n), 0, 0, 0), t;
            },
            incompatibleTokens: ["a", "b", "t", "T"],
          },
          h: {
            priority: 70,
            parse: function (t, e, n, i) {
              switch (e) {
                case "h":
                  return $t(zt, t);
                case "ho":
                  return n.ordinalNumber(t, { unit: "hour" });
                default:
                  return Ut(e.length, t);
              }
            },
            validate: function (t, e, n) {
              return e >= 1 && e <= 12;
            },
            set: function (t, e, n, i) {
              var r = t.getUTCHours() >= 12;
              return (
                r && n < 12
                  ? t.setUTCHours(n + 12, 0, 0, 0)
                  : r || 12 !== n
                  ? t.setUTCHours(n, 0, 0, 0)
                  : t.setUTCHours(0, 0, 0, 0),
                t
              );
            },
            incompatibleTokens: ["H", "K", "k", "t", "T"],
          },
          H: {
            priority: 70,
            parse: function (t, e, n, i) {
              switch (e) {
                case "H":
                  return $t(wt, t);
                case "Ho":
                  return n.ordinalNumber(t, { unit: "hour" });
                default:
                  return Ut(e.length, t);
              }
            },
            validate: function (t, e, n) {
              return e >= 0 && e <= 23;
            },
            set: function (t, e, n, i) {
              return t.setUTCHours(n, 0, 0, 0), t;
            },
            incompatibleTokens: ["a", "b", "h", "K", "k", "t", "T"],
          },
          K: {
            priority: 70,
            parse: function (t, e, n, i) {
              switch (e) {
                case "K":
                  return $t(xt, t);
                case "Ko":
                  return n.ordinalNumber(t, { unit: "hour" });
                default:
                  return Ut(e.length, t);
              }
            },
            validate: function (t, e, n) {
              return e >= 0 && e <= 11;
            },
            set: function (t, e, n, i) {
              return (
                t.getUTCHours() >= 12 && n < 12
                  ? t.setUTCHours(n + 12, 0, 0, 0)
                  : t.setUTCHours(n, 0, 0, 0),
                t
              );
            },
            incompatibleTokens: ["a", "b", "h", "H", "k", "t", "T"],
          },
          k: {
            priority: 70,
            parse: function (t, e, n, i) {
              switch (e) {
                case "k":
                  return $t(At, t);
                case "ko":
                  return n.ordinalNumber(t, { unit: "hour" });
                default:
                  return Ut(e.length, t);
              }
            },
            validate: function (t, e, n) {
              return e >= 1 && e <= 24;
            },
            set: function (t, e, n, i) {
              var r = n <= 24 ? n % 24 : n;
              return t.setUTCHours(r, 0, 0, 0), t;
            },
            incompatibleTokens: ["a", "b", "h", "H", "K", "t", "T"],
          },
          m: {
            priority: 60,
            parse: function (t, e, n, i) {
              switch (e) {
                case "m":
                  return $t(Ct, t);
                case "mo":
                  return n.ordinalNumber(t, { unit: "minute" });
                default:
                  return Ut(e.length, t);
              }
            },
            validate: function (t, e, n) {
              return e >= 0 && e <= 59;
            },
            set: function (t, e, n, i) {
              return t.setUTCMinutes(n, 0, 0), t;
            },
            incompatibleTokens: ["t", "T"],
          },
          s: {
            priority: 50,
            parse: function (t, e, n, i) {
              switch (e) {
                case "s":
                  return $t(kt, t);
                case "so":
                  return n.ordinalNumber(t, { unit: "second" });
                default:
                  return Ut(e.length, t);
              }
            },
            validate: function (t, e, n) {
              return e >= 0 && e <= 59;
            },
            set: function (t, e, n, i) {
              return t.setUTCSeconds(n, 0), t;
            },
            incompatibleTokens: ["t", "T"],
          },
          S: {
            priority: 30,
            parse: function (t, e, n, i) {
              return Ut(e.length, t, function (t) {
                return Math.floor(t * Math.pow(10, 3 - e.length));
              });
            },
            set: function (t, e, n, i) {
              return t.setUTCMilliseconds(n), t;
            },
            incompatibleTokens: ["t", "T"],
          },
          X: {
            priority: 10,
            parse: function (t, e, n, i) {
              switch (e) {
                case "X":
                  return Ht(It, t);
                case "XX":
                  return Ht(Wt, t);
                case "XXXX":
                  return Ht(Nt, t);
                case "XXXXX":
                  return Ht(Ft, t);
                case "XXX":
                default:
                  return Ht(Bt, t);
              }
            },
            set: function (t, e, n, i) {
              return e.timestampIsSet ? t : new Date(t.getTime() - n);
            },
            incompatibleTokens: ["t", "T", "x"],
          },
          x: {
            priority: 10,
            parse: function (t, e, n, i) {
              switch (e) {
                case "x":
                  return Ht(It, t);
                case "xx":
                  return Ht(Wt, t);
                case "xxxx":
                  return Ht(Nt, t);
                case "xxxxx":
                  return Ht(Ft, t);
                case "xxx":
                default:
                  return Ht(Bt, t);
              }
            },
            set: function (t, e, n, i) {
              return e.timestampIsSet ? t : new Date(t.getTime() - n);
            },
            incompatibleTokens: ["t", "T", "X"],
          },
          t: {
            priority: 40,
            parse: function (t, e, n, i) {
              return Yt(t);
            },
            set: function (t, e, n, i) {
              return [new Date(1e3 * n), { timestampIsSet: !0 }];
            },
            incompatibleTokens: "*",
          },
          T: {
            priority: 20,
            parse: function (t, e, n, i) {
              return Yt(t);
            },
            set: function (t, e, n, i) {
              return [new Date(n), { timestampIsSet: !0 }];
            },
            incompatibleTokens: "*",
          },
        },
        te = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
        ee = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
        ne = /^'([^]*?)'?$/,
        ie = /''/g,
        re = /\S/,
        oe = /[a-zA-Z]/;
      function ae(t, e, n, i) {
        S(3, arguments);
        var r = String(t),
          o = String(e),
          a = i || {},
          s = a.locale || F;
        if (!s.match)
          throw new RangeError("locale must contain match property");
        var l = s.options && s.options.firstWeekContainsDate,
          c = null == l ? 1 : k(l),
          d = null == a.firstWeekContainsDate ? c : k(a.firstWeekContainsDate);
        if (!(d >= 1 && d <= 7))
          throw new RangeError(
            "firstWeekContainsDate must be between 1 and 7 inclusively"
          );
        var u = s.options && s.options.weekStartsOn,
          p = null == u ? 0 : k(u),
          h = null == a.weekStartsOn ? p : k(a.weekStartsOn);
        if (!(h >= 0 && h <= 6))
          throw new RangeError(
            "weekStartsOn must be between 0 and 6 inclusively"
          );
        if ("" === o) return "" === r ? T(n) : new Date(NaN);
        var f,
          b = { firstWeekContainsDate: d, weekStartsOn: h, locale: s },
          m = [{ priority: 10, subPriority: -1, set: se, index: 0 }],
          g = o
            .match(ee)
            .map(function (t) {
              var e = t[0];
              return "p" === e || "P" === e
                ? (0, ot[e])(t, s.formatLong, b)
                : t;
            })
            .join("")
            .match(te),
          v = [];
        for (f = 0; f < g.length; f++) {
          var _ = g[f];
          !a.useAdditionalWeekYearTokens && ct(_) && dt(_, o, t),
            !a.useAdditionalDayOfYearTokens && lt(_) && dt(_, o, t);
          var y = _[0],
            M = Qt[y];
          if (M) {
            var O = M.incompatibleTokens;
            if (Array.isArray(O)) {
              for (var w = void 0, A = 0; A < v.length; A++) {
                var x = v[A].token;
                if (-1 !== O.indexOf(x) || x === y) {
                  w = v[A];
                  break;
                }
              }
              if (w)
                throw new RangeError(
                  "The format string mustn't contain `"
                    .concat(w.fullToken, "` and `")
                    .concat(_, "` at the same time")
                );
            } else if ("*" === M.incompatibleTokens && v.length)
              throw new RangeError(
                "The format string mustn't contain `".concat(
                  _,
                  "` and any other token at the same time"
                )
              );
            v.push({ token: y, fullToken: _ });
            var z = M.parse(r, _, s.match, b);
            if (!z) return new Date(NaN);
            m.push({
              priority: M.priority,
              subPriority: M.subPriority || 0,
              set: M.set,
              validate: M.validate,
              value: z.value,
              index: m.length,
            }),
              (r = z.rest);
          } else {
            if (y.match(oe))
              throw new RangeError(
                "Format string contains an unescaped latin alphabet character `" +
                  y +
                  "`"
              );
            if (
              ("''" === _ ? (_ = "'") : "'" === y && (_ = le(_)),
              0 !== r.indexOf(_))
            )
              return new Date(NaN);
            r = r.slice(_.length);
          }
        }
        if (r.length > 0 && re.test(r)) return new Date(NaN);
        var C = m
            .map(function (t) {
              return t.priority;
            })
            .sort(function (t, e) {
              return e - t;
            })
            .filter(function (t, e, n) {
              return n.indexOf(t) === e;
            })
            .map(function (t) {
              return m
                .filter(function (e) {
                  return e.priority === t;
                })
                .sort(function (t, e) {
                  return e.subPriority - t.subPriority;
                });
            })
            .map(function (t) {
              return t[0];
            }),
          D = T(n);
        if (isNaN(D)) return new Date(NaN);
        var L = $(D, q(D)),
          E = {};
        for (f = 0; f < C.length; f++) {
          var j = C[f];
          if (j.validate && !j.validate(L, j.value, b)) return new Date(NaN);
          var P = j.set(L, E, j.value, b);
          P[0] ? ((L = P[0]), gt(E, P[1])) : (L = P);
        }
        return L;
      }
      function se(t, e) {
        if (e.timestampIsSet) return t;
        var n = new Date(0);
        return (
          n.setFullYear(t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate()),
          n.setHours(
            t.getUTCHours(),
            t.getUTCMinutes(),
            t.getUTCSeconds(),
            t.getUTCMilliseconds()
          ),
          n
        );
      }
      function le(t) {
        return t.match(ne)[1].replace(ie, "'");
      }
      var ce = Object.assign({}, y);
      (ce.isRight = !0),
        (ce.compare = function (t, e, n) {
          function i(t) {
            return n && n.dateInputFormat
              ? ae("".concat(t), "".concat(n.dateInputFormat), new Date())
              : t;
          }
          return (
            (t = i(t)),
            (e = i(e)),
            E(t)
              ? E(e)
                ? (function (t, e) {
                    S(2, arguments);
                    var n = T(t),
                      i = T(e),
                      r = n.getTime() - i.getTime();
                    return r < 0 ? -1 : r > 0 ? 1 : r;
                  })(t, e)
                : 1
              : -1
          );
        }),
        (ce.format = function (t, e) {
          if (null == t) return "";
          var n = ae(t, e.dateInputFormat, new Date());
          return E(n)
            ? (function (t, e, n) {
                S(2, arguments);
                var i = String(e),
                  r = n || {},
                  o = r.locale || F,
                  a = o.options && o.options.firstWeekContainsDate,
                  s = null == a ? 1 : k(a),
                  l =
                    null == r.firstWeekContainsDate
                      ? s
                      : k(r.firstWeekContainsDate);
                if (!(l >= 1 && l <= 7))
                  throw new RangeError(
                    "firstWeekContainsDate must be between 1 and 7 inclusively"
                  );
                var c = o.options && o.options.weekStartsOn,
                  d = null == c ? 0 : k(c),
                  u = null == r.weekStartsOn ? d : k(r.weekStartsOn);
                if (!(u >= 0 && u <= 6))
                  throw new RangeError(
                    "weekStartsOn must be between 0 and 6 inclusively"
                  );
                if (!o.localize)
                  throw new RangeError("locale must contain localize property");
                if (!o.formatLong)
                  throw new RangeError(
                    "locale must contain formatLong property"
                  );
                var p = T(t);
                if (!E(p)) throw new RangeError("Invalid time value");
                var h = q(p),
                  f = $(p, h),
                  b = {
                    firstWeekContainsDate: l,
                    weekStartsOn: u,
                    locale: o,
                    _originalDate: p,
                  },
                  m = i
                    .match(pt)
                    .map(function (t) {
                      var e = t[0];
                      return "p" === e || "P" === e
                        ? (0, ot[e])(t, o.formatLong, b)
                        : t;
                    })
                    .join("")
                    .match(ut)
                    .map(function (n) {
                      if ("''" === n) return "'";
                      var i = n[0];
                      if ("'" === i) return mt(n);
                      var a = Q[i];
                      if (a)
                        return (
                          !r.useAdditionalWeekYearTokens &&
                            ct(n) &&
                            dt(n, e, t),
                          !r.useAdditionalDayOfYearTokens &&
                            lt(n) &&
                            dt(n, e, t),
                          a(f, n, o.localize, b)
                        );
                      if (i.match(bt))
                        throw new RangeError(
                          "Format string contains an unescaped latin alphabet character `" +
                            i +
                            "`"
                        );
                      return n;
                    })
                    .join("");
                return m;
              })(n, e.dateOutputFormat)
            : null;
        });
      var de = Object.freeze({ __proto__: null, default: ce }),
        ue = Object.assign({}, y);
      (ue.isRight = !0),
        (ue.filterPredicate = function (t, e) {
          return 0 === ue.compare(t, e);
        }),
        (ue.compare = function (t, e) {
          function n(t) {
            return null == t
              ? -1 / 0
              : t.indexOf(".") >= 0
              ? parseFloat(t)
              : parseInt(t, 10);
          }
          return (t = "number" == typeof t ? t : n(t)) <
            (e = "number" == typeof e ? e : n(e))
            ? -1
            : t > e
            ? 1
            : 0;
        });
      var pe = Object.freeze({ __proto__: null, default: ue }),
        he = Object.assign({}, ue);
      he.format = function (t) {
        return null == t
          ? ""
          : parseFloat(Math.round(100 * t) / 100).toFixed(2);
      };
      var fe = Object.freeze({ __proto__: null, default: he }),
        be = Object.assign({}, ue);
      be.format = function (t) {
        return null == t ? "" : "".concat(parseFloat(100 * t).toFixed(2), "%");
      };
      var me = Object.freeze({ __proto__: null, default: be }),
        ge = Object.assign({}, y);
      (ge.isRight = !0),
        (ge.filterPredicate = function (t, e) {
          return 0 === ge.compare(t, e);
        }),
        (ge.compare = function (t, e) {
          function n(t) {
            return "boolean" == typeof t
              ? t
                ? 1
                : 0
              : "string" == typeof t
              ? "true" === t
                ? 1
                : 0
              : -1 / 0;
          }
          return (t = n(t)) < (e = n(e)) ? -1 : t > e ? 1 : 0;
        });
      var ve = {},
        _e = {
          date: de,
          decimal: fe,
          number: pe,
          percentage: me,
          boolean: Object.freeze({ __proto__: null, default: ge }),
        };
      Object.keys(_e).forEach(function (t) {
        var e = t.replace(/^\.\//, "").replace(/\.js/, "");
        ve[e] = _e[t].default;
      });
      var ye = M(
          {
            render: function () {
              var t = this,
                e = t.$createElement,
                n = t._self._c || e;
              return n("div", { class: t.wrapStyleClasses }, [
                t.isLoading
                  ? n(
                      "div",
                      { staticClass: "vgt-loading vgt-center-align" },
                      [
                        t._t("loadingContent", [
                          n("span", { staticClass: "vgt-loading__content" }, [
                            t._v("\n        Loading...\n      "),
                          ]),
                        ]),
                      ],
                      2
                    )
                  : t._e(),
                t._v(" "),
                n(
                  "div",
                  {
                    staticClass: "vgt-inner-wrap",
                    class: { "is-loading": t.isLoading },
                  },
                  [
                    t.paginate && t.paginateOnTop
                      ? t._t(
                          "pagination-top",
                          [
                            n("vgt-pagination", {
                              ref: "paginationTop",
                              attrs: {
                                perPage: t.perPage,
                                rtl: t.rtl,
                                total: t.totalRows || t.totalRowCount,
                                mode: t.paginationMode,
                                jumpFirstOrLast:
                                  t.paginationOptions.jumpFirstOrLast,
                                firstText: t.firstText,
                                lastText: t.lastText,
                                nextText: t.nextText,
                                prevText: t.prevText,
                                rowsPerPageText: t.rowsPerPageText,
                                perPageDropdownEnabled:
                                  t.paginationOptions.perPageDropdownEnabled,
                                customRowsPerPageDropdown:
                                  t.customRowsPerPageDropdown,
                                paginateDropdownAllowAll:
                                  t.paginateDropdownAllowAll,
                                ofText: t.ofText,
                                pageText: t.pageText,
                                allText: t.allText,
                                "info-fn": t.paginationInfoFn,
                              },
                              on: {
                                "page-changed": t.pageChanged,
                                "per-page-changed": t.perPageChanged,
                              },
                            }),
                          ],
                          {
                            pageChanged: t.pageChanged,
                            perPageChanged: t.perPageChanged,
                            total: t.totalRows || t.totalRowCount,
                          }
                        )
                      : t._e(),
                    t._v(" "),
                    n(
                      "vgt-global-search",
                      {
                        attrs: {
                          "search-enabled":
                            t.searchEnabled && null == t.externalSearchQuery,
                          "global-search-placeholder": t.searchPlaceholder,
                        },
                        on: {
                          "on-keyup": t.searchTableOnKeyUp,
                          "on-enter": t.searchTableOnEnter,
                        },
                        model: {
                          value: t.globalSearchTerm,
                          callback: function (e) {
                            t.globalSearchTerm = e;
                          },
                          expression: "globalSearchTerm",
                        },
                      },
                      [
                        n(
                          "template",
                          { slot: "internal-table-actions" },
                          [t._t("table-actions")],
                          2
                        ),
                      ],
                      2
                    ),
                    t._v(" "),
                    t.selectedRowCount && !t.disableSelectInfo
                      ? n(
                          "div",
                          {
                            staticClass: "vgt-selection-info-row clearfix",
                            class: t.selectionInfoClass,
                          },
                          [
                            t._v(
                              "\n      " + t._s(t.selectionInfo) + "\n      "
                            ),
                            n(
                              "a",
                              {
                                attrs: { href: "" },
                                on: {
                                  click: function (e) {
                                    return (
                                      e.preventDefault(),
                                      t.unselectAllInternal(!0)
                                    );
                                  },
                                },
                              },
                              [
                                t._v(
                                  "\n        " +
                                    t._s(t.clearSelectionText) +
                                    "\n      "
                                ),
                              ]
                            ),
                            t._v(" "),
                            n(
                              "div",
                              {
                                staticClass:
                                  "vgt-selection-info-row__actions vgt-pull-right",
                              },
                              [t._t("selected-row-actions")],
                              2
                            ),
                          ]
                        )
                      : t._e(),
                    t._v(" "),
                    n("div", { staticClass: "vgt-fixed-header" }, [
                      t.fixedHeader
                        ? n(
                            "table",
                            {
                              class: t.tableStyleClasses,
                              attrs: { id: "vgt-table" },
                            },
                            [
                              n(
                                "colgroup",
                                t._l(t.columns, function (t, e) {
                                  return n("col", {
                                    key: e,
                                    attrs: { id: "col-" + e },
                                  });
                                }),
                                0
                              ),
                              t._v(" "),
                              n("vgt-table-header", {
                                ref: "table-header-secondary",
                                tag: "thead",
                                attrs: {
                                  columns: t.columns,
                                  "line-numbers": t.lineNumbers,
                                  selectable: t.selectable,
                                  "all-selected": t.allSelected,
                                  "all-selected-indeterminate":
                                    t.allSelectedIndeterminate,
                                  mode: t.mode,
                                  sortable: t.sortable,
                                  "multiple-column-sort": t.multipleColumnSort,
                                  "typed-columns": t.typedColumns,
                                  getClasses: t.getClasses,
                                  searchEnabled: t.searchEnabled,
                                  paginated: t.paginated,
                                  "table-ref": t.$refs.table,
                                },
                                on: {
                                  "on-toggle-select-all": t.toggleSelectAll,
                                  "on-sort-change": t.changeSort,
                                  "filter-changed": t.filterRows,
                                },
                                scopedSlots: t._u(
                                  [
                                    {
                                      key: "table-column",
                                      fn: function (e) {
                                        return [
                                          t._t(
                                            "table-column",
                                            [
                                              n("span", [
                                                t._v(t._s(e.column.label)),
                                              ]),
                                            ],
                                            { column: e.column }
                                          ),
                                        ];
                                      },
                                    },
                                    {
                                      key: "column-filter",
                                      fn: function (e) {
                                        return [
                                          t._t("column-filter", null, {
                                            column: e.column,
                                            updateFilters: e.updateFilters,
                                          }),
                                        ];
                                      },
                                    },
                                  ],
                                  null,
                                  !0
                                ),
                              }),
                            ],
                            1
                          )
                        : t._e(),
                    ]),
                    t._v(" "),
                    n(
                      "div",
                      {
                        class: { "vgt-responsive": t.responsive },
                        style: t.wrapperStyles,
                      },
                      [
                        n(
                          "table",
                          {
                            ref: "table",
                            class: t.tableStyles,
                            attrs: { id: "vgt-table" },
                          },
                          [
                            n(
                              "colgroup",
                              t._l(t.columns, function (t, e) {
                                return n("col", {
                                  key: e,
                                  attrs: { id: "col-" + e },
                                });
                              }),
                              0
                            ),
                            t._v(" "),
                            n("vgt-table-header", {
                              ref: "table-header-primary",
                              tag: "thead",
                              attrs: {
                                columns: t.columns,
                                "line-numbers": t.lineNumbers,
                                selectable: t.selectable,
                                "all-selected": t.allSelected,
                                "all-selected-indeterminate":
                                  t.allSelectedIndeterminate,
                                mode: t.mode,
                                sortable: t.sortable,
                                "multiple-column-sort": t.multipleColumnSort,
                                "typed-columns": t.typedColumns,
                                getClasses: t.getClasses,
                                searchEnabled: t.searchEnabled,
                              },
                              on: {
                                "on-toggle-select-all": t.toggleSelectAll,
                                "on-sort-change": t.changeSort,
                                "filter-changed": t.filterRows,
                              },
                              scopedSlots: t._u(
                                [
                                  {
                                    key: "table-column",
                                    fn: function (e) {
                                      return [
                                        t._t(
                                          "table-column",
                                          [
                                            n("span", [
                                              t._v(t._s(e.column.label)),
                                            ]),
                                          ],
                                          { column: e.column }
                                        ),
                                      ];
                                    },
                                  },
                                  {
                                    key: "column-filter",
                                    fn: function (e) {
                                      return [
                                        t._t("column-filter", null, {
                                          column: e.column,
                                          updateFilters: e.updateFilters,
                                        }),
                                      ];
                                    },
                                  },
                                ],
                                null,
                                !0
                              ),
                            }),
                            t._v(" "),
                            t._l(t.paginated, function (e, i) {
                              return n(
                                "tbody",
                                { key: i },
                                [
                                  t.groupHeaderOnTop
                                    ? n("vgt-header-row", {
                                        class: t.getRowStyleClass(e),
                                        attrs: {
                                          "header-row": e,
                                          columns: t.columns,
                                          "line-numbers": t.lineNumbers,
                                          selectable: t.selectable,
                                          "select-all-by-group":
                                            t.selectAllByGroup,
                                          collapsable:
                                            t.groupOptions.collapsable,
                                          "collect-formatted":
                                            t.collectFormatted,
                                          "formatted-row": t.formattedRow,
                                          "get-classes": t.getClasses,
                                          "full-colspan": t.fullColspan,
                                          groupIndex: i,
                                        },
                                        on: {
                                          vgtExpand: function (n) {
                                            return t.toggleExpand(
                                              e[t.rowKeyField]
                                            );
                                          },
                                          "on-select-group-change": function (
                                            n
                                          ) {
                                            return t.toggleSelectGroup(n, e);
                                          },
                                        },
                                        scopedSlots: t._u(
                                          [
                                            {
                                              key: "table-header-row",
                                              fn: function (e) {
                                                return t.hasHeaderRowTemplate
                                                  ? [
                                                      t._t(
                                                        "table-header-row",
                                                        null,
                                                        {
                                                          column: e.column,
                                                          formattedRow:
                                                            e.formattedRow,
                                                          row: e.row,
                                                        }
                                                      ),
                                                    ]
                                                  : void 0;
                                              },
                                            },
                                          ],
                                          null,
                                          !0
                                        ),
                                      })
                                    : t._e(),
                                  t._v(" "),
                                  t._l(e.children, function (i, r) {
                                    return !t.groupOptions.collapsable ||
                                      e.vgtIsExpanded
                                      ? n(
                                          "tr",
                                          {
                                            key: i.originalIndex,
                                            class: t.getRowStyleClass(i),
                                            on: {
                                              mouseenter: function (e) {
                                                return t.onMouseenter(i, r);
                                              },
                                              mouseleave: function (e) {
                                                return t.onMouseleave(i, r);
                                              },
                                              dblclick: function (e) {
                                                return t.onRowDoubleClicked(
                                                  i,
                                                  r,
                                                  e
                                                );
                                              },
                                              click: function (e) {
                                                return t.onRowClicked(i, r, e);
                                              },
                                              auxclick: function (e) {
                                                return t.onRowAuxClicked(
                                                  i,
                                                  r,
                                                  e
                                                );
                                              },
                                            },
                                          },
                                          [
                                            t.lineNumbers
                                              ? n(
                                                  "th",
                                                  {
                                                    staticClass: "line-numbers",
                                                  },
                                                  [
                                                    t._v(
                                                      "\n              " +
                                                        t._s(
                                                          t.getCurrentIndex(
                                                            i.originalIndex
                                                          )
                                                        ) +
                                                        "\n            "
                                                    ),
                                                  ]
                                                )
                                              : t._e(),
                                            t._v(" "),
                                            t.selectable
                                              ? n(
                                                  "th",
                                                  {
                                                    staticClass:
                                                      "vgt-checkbox-col",
                                                    on: {
                                                      click: function (e) {
                                                        return (
                                                          e.stopPropagation(),
                                                          t.onCheckboxClicked(
                                                            i,
                                                            r,
                                                            e
                                                          )
                                                        );
                                                      },
                                                    },
                                                  },
                                                  [
                                                    n("input", {
                                                      attrs: {
                                                        type: "checkbox",
                                                        disabled: i.vgtDisabled,
                                                      },
                                                      domProps: {
                                                        checked: i.vgtSelected,
                                                      },
                                                    }),
                                                  ]
                                                )
                                              : t._e(),
                                            t._v(" "),
                                            t._l(t.columns, function (e, o) {
                                              return !e.hidden && e.field
                                                ? n(
                                                    "td",
                                                    {
                                                      key: o,
                                                      class: t.getClasses(
                                                        o,
                                                        "td",
                                                        i
                                                      ),
                                                      attrs: {
                                                        "data-label":
                                                          t.compactMode
                                                            ? e.label
                                                            : void 0,
                                                      },
                                                      on: {
                                                        click: function (n) {
                                                          return t.onCellClicked(
                                                            i,
                                                            e,
                                                            r,
                                                            n
                                                          );
                                                        },
                                                      },
                                                    },
                                                    [
                                                      t._t(
                                                        "table-row",
                                                        [
                                                          e.html
                                                            ? n("span", {
                                                                domProps: {
                                                                  innerHTML:
                                                                    t._s(
                                                                      t.collect(
                                                                        i,
                                                                        e.field
                                                                      )
                                                                    ),
                                                                },
                                                              })
                                                            : n("span", [
                                                                t._v(
                                                                  "\n                  " +
                                                                    t._s(
                                                                      t.collectFormatted(
                                                                        i,
                                                                        e
                                                                      )
                                                                    ) +
                                                                    "\n                "
                                                                ),
                                                              ]),
                                                        ],
                                                        {
                                                          row: i,
                                                          column: e,
                                                          formattedRow:
                                                            t.formattedRow(i),
                                                          index: r,
                                                        }
                                                      ),
                                                    ],
                                                    2
                                                  )
                                                : t._e();
                                            }),
                                          ],
                                          2
                                        )
                                      : t._e();
                                  }),
                                  t._v(" "),
                                  t.groupHeaderOnBottom
                                    ? n("vgt-header-row", {
                                        attrs: {
                                          "header-row": e,
                                          columns: t.columns,
                                          "line-numbers": t.lineNumbers,
                                          selectable: t.selectable,
                                          "select-all-by-group":
                                            t.selectAllByGroup,
                                          "collect-formatted":
                                            t.collectFormatted,
                                          "formatted-row": t.formattedRow,
                                          "get-classes": t.getClasses,
                                          "full-colspan": t.fullColspan,
                                          groupIndex: t.index,
                                        },
                                        on: {
                                          "on-select-group-change": function (
                                            n
                                          ) {
                                            return t.toggleSelectGroup(n, e);
                                          },
                                        },
                                        scopedSlots: t._u(
                                          [
                                            {
                                              key: "table-header-row",
                                              fn: function (e) {
                                                return t.hasHeaderRowTemplate
                                                  ? [
                                                      t._t(
                                                        "table-header-row",
                                                        null,
                                                        {
                                                          column: e.column,
                                                          formattedRow:
                                                            e.formattedRow,
                                                          row: e.row,
                                                        }
                                                      ),
                                                    ]
                                                  : void 0;
                                              },
                                            },
                                          ],
                                          null,
                                          !0
                                        ),
                                      })
                                    : t._e(),
                                ],
                                2
                              );
                            }),
                            t._v(" "),
                            t.showEmptySlot
                              ? n("tbody", [
                                  n("tr", [
                                    n(
                                      "td",
                                      { attrs: { colspan: t.fullColspan } },
                                      [
                                        t._t("emptystate", [
                                          n(
                                            "div",
                                            {
                                              staticClass:
                                                "vgt-center-align vgt-text-disabled",
                                            },
                                            [
                                              t._v(
                                                "\n                  No data for table\n                "
                                              ),
                                            ]
                                          ),
                                        ]),
                                      ],
                                      2
                                    ),
                                  ]),
                                ])
                              : t._e(),
                          ],
                          2
                        ),
                      ]
                    ),
                    t._v(" "),
                    t.hasFooterSlot
                      ? n(
                          "div",
                          { staticClass: "vgt-wrap__actions-footer" },
                          [t._t("table-actions-bottom")],
                          2
                        )
                      : t._e(),
                    t._v(" "),
                    t.paginate && t.paginateOnBottom
                      ? t._t(
                          "pagination-bottom",
                          [
                            n("vgt-pagination", {
                              ref: "paginationBottom",
                              attrs: {
                                perPage: t.perPage,
                                rtl: t.rtl,
                                total: t.totalRows || t.totalRowCount,
                                mode: t.paginationMode,
                                jumpFirstOrLast:
                                  t.paginationOptions.jumpFirstOrLast,
                                firstText: t.firstText,
                                lastText: t.lastText,
                                nextText: t.nextText,
                                prevText: t.prevText,
                                rowsPerPageText: t.rowsPerPageText,
                                perPageDropdownEnabled:
                                  t.paginationOptions.perPageDropdownEnabled,
                                customRowsPerPageDropdown:
                                  t.customRowsPerPageDropdown,
                                paginateDropdownAllowAll:
                                  t.paginateDropdownAllowAll,
                                ofText: t.ofText,
                                pageText: t.pageText,
                                allText: t.allText,
                                "info-fn": t.paginationInfoFn,
                              },
                              on: {
                                "page-changed": t.pageChanged,
                                "per-page-changed": t.perPageChanged,
                              },
                            }),
                          ],
                          {
                            pageChanged: t.pageChanged,
                            perPageChanged: t.perPageChanged,
                            total: t.totalRows || t.totalRowCount,
                          }
                        )
                      : t._e(),
                  ],
                  2
                ),
              ]);
            },
            staticRenderFns: [],
          },
          void 0,
          {
            name: "vue-good-table",
            props: {
              isLoading: { default: null, type: Boolean },
              maxHeight: { default: null, type: String },
              fixedHeader: Boolean,
              theme: { default: "" },
              mode: { default: "local" },
              totalRows: {},
              styleClass: { default: "vgt-table bordered" },
              columns: {},
              rows: {},
              lineNumbers: Boolean,
              responsive: { default: !0, type: Boolean },
              rtl: Boolean,
              rowStyleClass: { default: null, type: [Function, String] },
              compactMode: Boolean,
              groupOptions: {
                default: function () {
                  return { enabled: !1, collapsable: !1, rowKey: null };
                },
              },
              selectOptions: {
                default: function () {
                  return {
                    enabled: !1,
                    selectionInfoClass: "",
                    selectionText: "rows selected",
                    clearSelectionText: "clear",
                    disableSelectInfo: !1,
                    selectAllByGroup: !1,
                  };
                },
              },
              sortOptions: {
                default: function () {
                  return {
                    enabled: !0,
                    multipleColumns: !0,
                    initialSortBy: {},
                  };
                },
              },
              paginationOptions: {
                default: function () {
                  var t;
                  return (
                    i(
                      (t = {
                        enabled: !1,
                        position: "bottom",
                        perPage: 10,
                        perPageDropdown: null,
                        perPageDropdownEnabled: !0,
                      }),
                      "position",
                      "bottom"
                    ),
                    i(t, "dropdownAllowAll", !0),
                    i(t, "mode", "records"),
                    i(t, "infoFn", null),
                    i(t, "jumpFirstOrLast", !1),
                    t
                  );
                },
              },
              searchOptions: {
                default: function () {
                  return {
                    enabled: !1,
                    trigger: null,
                    externalQuery: null,
                    searchFn: null,
                    placeholder: "Search Table",
                  };
                },
              },
            },
            data: function () {
              return {
                tableLoading: !1,
                firstText: "First",
                lastText: "Last",
                nextText: "Next",
                prevText: "Previous",
                rowsPerPageText: "Rows per page",
                ofText: "of",
                allText: "All",
                pageText: "page",
                selectable: !1,
                selectOnCheckboxOnly: !1,
                selectAllByPage: !0,
                disableSelectInfo: !1,
                selectionInfoClass: "",
                selectionText: "rows selected",
                clearSelectionText: "clear",
                maintainExpanded: !0,
                expandedRowKeys: new Set(),
                sortable: !0,
                defaultSortBy: null,
                multipleColumnSort: !0,
                searchEnabled: !1,
                searchTrigger: null,
                externalSearchQuery: null,
                searchFn: null,
                searchPlaceholder: "Search Table",
                searchSkipDiacritics: !1,
                perPage: null,
                paginate: !1,
                paginateOnTop: !1,
                paginateOnBottom: !0,
                customRowsPerPageDropdown: [],
                paginateDropdownAllowAll: !0,
                paginationMode: "records",
                paginationInfoFn: null,
                currentPage: 1,
                currentPerPage: 10,
                sorts: [],
                globalSearchTerm: "",
                filteredRows: [],
                columnFilters: {},
                forceSearch: !1,
                sortChanged: !1,
                dataTypes: ve || {},
              };
            },
            watch: {
              rows: {
                handler: function () {
                  this.$emit("update:isLoading", !1),
                    this.filterRows(this.columnFilters, !1);
                },
                deep: !0,
                immediate: !0,
              },
              selectOptions: {
                handler: function () {
                  this.initializeSelect();
                },
                deep: !0,
                immediate: !0,
              },
              paginationOptions: {
                handler: function (t, e) {
                  f(t, e) || this.initializePagination();
                },
                deep: !0,
                immediate: !0,
              },
              searchOptions: {
                handler: function () {
                  void 0 !== this.searchOptions.externalQuery &&
                    this.searchOptions.externalQuery !== this.searchTerm &&
                    ((this.externalSearchQuery =
                      this.searchOptions.externalQuery),
                    this.handleSearch()),
                    this.initializeSearch();
                },
                deep: !0,
                immediate: !0,
              },
              sortOptions: {
                handler: function (t, e) {
                  f(t, e) || this.initializeSort();
                },
                deep: !0,
              },
              selectedRows: function (t, e) {
                f(t, e) ||
                  this.$emit("on-selected-rows-change", {
                    selectedRows: this.selectedRows,
                  });
              },
            },
            computed: {
              tableStyles: function () {
                return this.compactMode
                  ? this.tableStyleClasses + "vgt-compact"
                  : this.tableStyleClasses;
              },
              hasFooterSlot: function () {
                return !!this.$slots["table-actions-bottom"];
              },
              wrapperStyles: function () {
                return {
                  overflow: "scroll-y",
                  maxHeight: this.maxHeight ? this.maxHeight : "auto",
                };
              },
              rowKeyField: function () {
                return this.groupOptions.rowKey || "vgt_header_id";
              },
              hasHeaderRowTemplate: function () {
                return (
                  !!this.$slots["table-header-row"] ||
                  !!this.$scopedSlots["table-header-row"]
                );
              },
              showEmptySlot: function () {
                return (
                  !this.paginated.length ||
                  ("no groups" === this.paginated[0].label &&
                    !this.paginated[0].children.length)
                );
              },
              allSelected: function () {
                return (
                  this.selectedRowCount > 0 &&
                  ((this.selectAllByPage &&
                    this.selectedPageRowsCount === this.totalPageRowCount) ||
                    (!this.selectAllByPage &&
                      this.selectedRowCount === this.totalRowCount))
                );
              },
              allSelectedIndeterminate: function () {
                return (
                  !this.allSelected &&
                  ((this.selectAllByPage && this.selectedPageRowsCount > 0) ||
                    (!this.selectAllByPage && this.selectedRowCount > 0))
                );
              },
              selectionInfo: function () {
                return ""
                  .concat(this.selectedRowCount, " ")
                  .concat(this.selectionText);
              },
              selectedRowCount: function () {
                return this.selectedRows.length;
              },
              selectedPageRowsCount: function () {
                return this.selectedPageRows.length;
              },
              selectedPageRows: function () {
                var t = [];
                return (
                  this.paginated.forEach(function (e) {
                    e.children.forEach(function (e) {
                      e.vgtSelected && t.push(e);
                    });
                  }),
                  t
                );
              },
              selectedRows: function () {
                var t = [];
                return (
                  this.processedRows.forEach(function (e) {
                    e.children.forEach(function (e) {
                      e.vgtSelected && t.push(e);
                    });
                  }),
                  t.sort(function (t, e) {
                    return t.originalIndex - e.originalIndex;
                  })
                );
              },
              fullColspan: function () {
                for (var t = 0, e = 0; e < this.columns.length; e += 1)
                  this.columns[e].hidden || (t += 1);
                return this.lineNumbers && t++, this.selectable && t++, t;
              },
              groupHeaderOnTop: function () {
                return !(
                  (this.groupOptions &&
                    this.groupOptions.enabled &&
                    this.groupOptions.headerPosition &&
                    "bottom" === this.groupOptions.headerPosition) ||
                  !this.groupOptions ||
                  !this.groupOptions.enabled
                );
              },
              groupHeaderOnBottom: function () {
                return !!(
                  this.groupOptions &&
                  this.groupOptions.enabled &&
                  this.groupOptions.headerPosition &&
                  "bottom" === this.groupOptions.headerPosition
                );
              },
              totalRowCount: function () {
                return this.processedRows.reduce(function (t, e) {
                  return t + (e.children ? e.children.length : 0);
                }, 0);
              },
              totalPageRowCount: function () {
                return this.paginated.reduce(function (t, e) {
                  return t + (e.children ? e.children.length : 0);
                }, 0);
              },
              wrapStyleClasses: function () {
                var t = "vgt-wrap";
                return this.rtl && (t += " rtl"), (t += " ".concat(this.theme));
              },
              tableStyleClasses: function () {
                var t = this.styleClass;
                return (t += " ".concat(this.theme));
              },
              searchTerm: function () {
                return null != this.externalSearchQuery
                  ? this.externalSearchQuery
                  : this.globalSearchTerm;
              },
              globalSearchAllowed: function () {
                return (
                  !(
                    !this.searchEnabled ||
                    !this.globalSearchTerm ||
                    "enter" === this.searchTrigger
                  ) ||
                  (null != this.externalSearchQuery &&
                    "enter" !== this.searchTrigger) ||
                  (!!this.forceSearch && ((this.forceSearch = !1), !0))
                );
              },
              processedRows: function () {
                var t = this,
                  e = this.filteredRows;
                if ("remote" === this.mode) return e;
                if (this.globalSearchAllowed) {
                  var n = [];
                  this.filteredRows.forEach(function (t) {
                    n.push.apply(n, o(t.children));
                  });
                  var i = [];
                  n.forEach(function (e) {
                    for (var n = 0; n < t.columns.length; n += 1) {
                      var r = t.columns[n];
                      if (!r.globalSearchDisabled)
                        if (t.searchFn) {
                          if (
                            t.searchFn(
                              e,
                              r,
                              t.collectFormatted(e, r),
                              t.searchTerm
                            )
                          ) {
                            i.push(e);
                            break;
                          }
                        } else if (
                          y.filterPredicate(
                            t.collectFormatted(e, r),
                            t.searchTerm,
                            t.searchSkipDiacritics
                          )
                        ) {
                          i.push(e);
                          break;
                        }
                    }
                  }),
                    this.$emit("on-search", {
                      searchTerm: this.searchTerm,
                      rowCount: i.length,
                    }),
                    (e = []),
                    this.filteredRows.forEach(function (t) {
                      var n = t.vgt_header_id,
                        r = i.filter(function (t) {
                          return t.vgt_id === n;
                        });
                      if (r.length) {
                        var o = JSON.parse(JSON.stringify(t));
                        (o.children = r), e.push(o);
                      }
                    });
                }
                return (
                  this.sorts.length &&
                    e.forEach(function (e) {
                      e.children.sort(function (e, n) {
                        for (var i, r = 0; r < t.sorts.length; r += 1) {
                          var o = t.sorts[r];
                          if (o.type === d)
                            i = i || e.originalIndex - n.originalIndex;
                          else {
                            var a = t.getColumnForField(o.field),
                              s = t.collect(e, o.field),
                              l = t.collect(n, o.field),
                              u = a.sortFn;
                            i =
                              u && "function" == typeof u
                                ? i ||
                                  u(s, l, a, e, n) * (o.type === c ? -1 : 1)
                                : i ||
                                  a.typeDef.compare(s, l, a) *
                                    (o.type === c ? -1 : 1);
                          }
                        }
                        return i;
                      });
                    }),
                  "enter" === this.searchTrigger && (this.filteredRows = e),
                  e
                );
              },
              paginated: function () {
                var t = this;
                if (!this.processedRows.length) return [];
                if ("remote" === this.mode) return this.processedRows;
                var e = [];
                if (
                  (this.processedRows.forEach(function (n) {
                    var i;
                    t.groupOptions.enabled && e.push(n),
                      (i = e).push.apply(i, o(n.children));
                  }),
                  this.paginate)
                ) {
                  var n = (this.currentPage - 1) * this.currentPerPage;
                  (n >= e.length || -1 === this.currentPerPage) &&
                    ((this.currentPage = 1), (n = 0));
                  var i = e.length + 1;
                  -1 !== this.currentPerPage &&
                    (i = this.currentPage * this.currentPerPage),
                    (e = e.slice(n, i));
                }
                var r = [];
                return (
                  e.forEach(function (e) {
                    if (void 0 !== e.vgt_header_id) {
                      t.handleExpanded(e);
                      var n = JSON.parse(JSON.stringify(e));
                      (n.children = []), r.push(n);
                    } else {
                      var i = r.find(function (t) {
                        return t.vgt_header_id === e.vgt_id;
                      });
                      i ||
                        ((i = t.processedRows.find(function (t) {
                          return t.vgt_header_id === e.vgt_id;
                        })) &&
                          (((i = JSON.parse(JSON.stringify(i))).children = []),
                          r.push(i))),
                        i.children.push(e);
                    }
                  }),
                  r
                );
              },
              originalRows: function () {
                var t =
                    this.rows && this.rows.length
                      ? JSON.parse(JSON.stringify(this.rows))
                      : [],
                  e = [];
                e = this.groupOptions.enabled
                  ? this.handleGrouped(t)
                  : this.handleGrouped([{ label: "no groups", children: t }]);
                var n = 0;
                return (
                  e.forEach(function (t) {
                    t.children.forEach(function (t) {
                      t.originalIndex = n++;
                    });
                  }),
                  e
                );
              },
              typedColumns: function () {
                for (
                  var t = this.columns, e = 0;
                  e < this.columns.length;
                  e++
                ) {
                  var n = t[e];
                  n.typeDef = this.dataTypes[n.type] || y;
                }
                return t;
              },
              hasRowClickListener: function () {
                return this.$listeners && this.$listeners["on-row-click"];
              },
            },
            methods: {
              handleExpanded: function (t) {
                this.maintainExpanded &&
                this.expandedRowKeys.has(t[this.rowKeyField])
                  ? this.$set(t, "vgtIsExpanded", !0)
                  : this.$set(t, "vgtIsExpanded", !1);
              },
              toggleExpand: function (t) {
                var e = this,
                  n = this.filteredRows.find(function (n) {
                    return n[e.rowKeyField] === t;
                  });
                n && this.$set(n, "vgtIsExpanded", !n.vgtIsExpanded),
                  this.maintainExpanded && n.vgtIsExpanded
                    ? this.expandedRowKeys.add(n[this.rowKeyField])
                    : this.expandedRowKeys.delete(n[this.rowKeyField]);
              },
              expandAll: function () {
                var t = this;
                this.filteredRows.forEach(function (e) {
                  t.$set(e, "vgtIsExpanded", !0),
                    t.maintainExpanded &&
                      t.expandedRowKeys.add(e[t.rowKeyField]);
                });
              },
              collapseAll: function () {
                var t = this;
                this.filteredRows.forEach(function (e) {
                  t.$set(e, "vgtIsExpanded", !1), t.expandedRowKeys.clear();
                });
              },
              getColumnForField: function (t) {
                for (var e = 0; e < this.typedColumns.length; e += 1)
                  if (this.typedColumns[e].field === t)
                    return this.typedColumns[e];
              },
              handleSearch: function () {
                this.resetTable(),
                  "remote" === this.mode &&
                    this.$emit("on-search", { searchTerm: this.searchTerm });
              },
              reset: function () {
                this.initializeSort(),
                  this.changePage(1),
                  this.$refs["table-header-primary"].reset(!0),
                  this.$refs["table-header-secondary"] &&
                    this.$refs["table-header-secondary"].reset(!0);
              },
              emitSelectedRows: function () {
                this.$emit("on-select-all", {
                  selected: this.selectedRowCount === this.totalRowCount,
                  selectedRows: this.selectedRows,
                });
              },
              unselectAllInternal: function (t) {
                var e = this;
                (this.selectAllByPage && !t
                  ? this.paginated
                  : this.filteredRows
                ).forEach(function (t, n) {
                  t.children.forEach(function (t, n) {
                    e.$set(t, "vgtSelected", !1);
                  });
                }),
                  this.emitSelectedRows();
              },
              toggleSelectAll: function () {
                var t = this;
                this.allSelected
                  ? this.unselectAllInternal()
                  : ((this.selectAllByPage
                      ? this.paginated
                      : this.filteredRows
                    ).forEach(function (e) {
                      e.children.forEach(function (e) {
                        t.$set(e, "vgtSelected", !0);
                      });
                    }),
                    this.emitSelectedRows());
              },
              toggleSelectGroup: function (t, e) {
                var n = this;
                e.children.forEach(function (e) {
                  n.$set(e, "vgtSelected", t.checked);
                });
              },
              changePage: function (t) {
                var e = this.paginate,
                  n = this.$refs,
                  i = n.paginationBottom,
                  r = n.paginationTop;
                e &&
                  (this.paginateOnTop && r && (r.currentPage = t),
                  this.paginateOnBottom && i && (i.currentPage = t),
                  (this.currentPage = t));
              },
              pageChangedEvent: function () {
                return {
                  currentPage: this.currentPage,
                  currentPerPage: this.currentPerPage,
                  total: Math.floor(this.totalRowCount / this.currentPerPage),
                };
              },
              pageChanged: function (t) {
                if (((this.currentPage = t.currentPage), !t.noEmit)) {
                  var e = this.pageChangedEvent();
                  (e.prevPage = t.prevPage),
                    this.$emit("on-page-change", e),
                    "remote" === this.mode &&
                      this.$emit("update:isLoading", !0);
                }
              },
              perPageChanged: function (t) {
                this.currentPerPage = t.currentPerPage;
                var e = this.paginationOptions.position;
                !this.$refs.paginationTop ||
                  ("top" !== e && "both" !== e) ||
                  (this.$refs.paginationTop.currentPerPage =
                    this.currentPerPage),
                  !this.$refs.paginationBottom ||
                    ("bottom" !== e && "both" !== e) ||
                    (this.$refs.paginationBottom.currentPerPage =
                      this.currentPerPage);
                var n = this.pageChangedEvent();
                this.$emit("on-per-page-change", n),
                  "remote" === this.mode && this.$emit("update:isLoading", !0);
              },
              changeSort: function (t) {
                (this.sorts = t),
                  this.$emit("on-sort-change", t),
                  this.changePage(1),
                  "remote" !== this.mode
                    ? (this.sortChanged = !0)
                    : this.$emit("update:isLoading", !0);
              },
              onCheckboxClicked: function (t, e, n) {
                this.$set(t, "vgtSelected", !t.vgtSelected),
                  this.$emit("on-row-click", {
                    row: t,
                    pageIndex: e,
                    selected: !!t.vgtSelected,
                    event: n,
                  });
              },
              onRowDoubleClicked: function (t, e, n) {
                this.$emit("on-row-dblclick", {
                  row: t,
                  pageIndex: e,
                  selected: !!t.vgtSelected,
                  event: n,
                });
              },
              onRowClicked: function (t, e, n) {
                this.selectable &&
                  !this.selectOnCheckboxOnly &&
                  this.$set(t, "vgtSelected", !t.vgtSelected),
                  this.$emit("on-row-click", {
                    row: t,
                    pageIndex: e,
                    selected: !!t.vgtSelected,
                    event: n,
                  });
              },
              onRowAuxClicked: function (t, e, n) {
                this.$emit("on-row-aux-click", {
                  row: t,
                  pageIndex: e,
                  selected: !!t.vgtSelected,
                  event: n,
                });
              },
              onCellClicked: function (t, e, n, i) {
                this.$emit("on-cell-click", {
                  row: t,
                  column: e,
                  rowIndex: n,
                  event: i,
                });
              },
              onMouseenter: function (t, e) {
                this.$emit("on-row-mouseenter", { row: t, pageIndex: e });
              },
              onMouseleave: function (t, e) {
                this.$emit("on-row-mouseleave", { row: t, pageIndex: e });
              },
              searchTableOnEnter: function () {
                "enter" === this.searchTrigger &&
                  (this.handleSearch(),
                  (this.filteredRows = JSON.parse(
                    JSON.stringify(this.originalRows)
                  )),
                  (this.forceSearch = !0),
                  (this.sortChanged = !0));
              },
              searchTableOnKeyUp: function () {
                "enter" !== this.searchTrigger && this.handleSearch();
              },
              resetTable: function () {
                this.unselectAllInternal(!0), this.changePage(1);
              },
              collect: function (t, e) {
                return "function" == typeof e
                  ? e(t)
                  : "string" == typeof e
                  ? (function (t, e) {
                      for (
                        var n = t, i = e.split("."), r = 0;
                        r < i.length;
                        r++
                      ) {
                        if (null == n) return;
                        n = n[i[r]];
                      }
                      return n;
                    })(t, e)
                  : void 0;
              },
              collectFormatted: function (t, e) {
                var n,
                  i =
                    arguments.length > 2 &&
                    void 0 !== arguments[2] &&
                    arguments[2];
                if (
                  void 0 ===
                  (n =
                    i && e.headerField
                      ? this.collect(t, e.headerField)
                      : this.collect(t, e.field))
                )
                  return "";
                if (e.formatFn && "function" == typeof e.formatFn)
                  return e.formatFn(n, t);
                var r = e.typeDef;
                r || (r = this.dataTypes[e.type] || y);
                var o = r.format(n, e);
                return !this.compactMode || ("" != o && null != o) ? o : "-";
              },
              formattedRow: function (t) {
                for (
                  var e =
                      arguments.length > 1 &&
                      void 0 !== arguments[1] &&
                      arguments[1],
                    n = {},
                    i = 0;
                  i < this.typedColumns.length;
                  i++
                ) {
                  var r = this.typedColumns[i];
                  r.field && (n[r.field] = this.collectFormatted(t, r, e));
                }
                return n;
              },
              getClasses: function (t, e, n) {
                var i = this.typedColumns[t],
                  r = i.typeDef,
                  o = i["".concat(e, "Class")],
                  a = r.isRight;
                this.rtl && (a = !0);
                var s = { "vgt-right-align": a, "vgt-left-align": !a };
                return (
                  "function" == typeof o
                    ? (s[o(n)] = !0)
                    : "string" == typeof o && (s[o] = !0),
                  s
                );
              },
              filterRows: function (t) {
                var e = this,
                  i =
                    !(arguments.length > 1 && void 0 !== arguments[1]) ||
                    arguments[1];
                this.columnFilters = t;
                var r = JSON.parse(JSON.stringify(this.originalRows)),
                  o = !1;
                if (
                  this.columnFilters &&
                  Object.keys(this.columnFilters).length
                ) {
                  var a = (function () {
                    if (
                      (("remote" !== e.mode || i) && e.changePage(1),
                      i &&
                        e.$emit("on-column-filter", {
                          columnFilters: e.columnFilters,
                        }),
                      "remote" === e.mode)
                    )
                      return (
                        i
                          ? e.$emit("update:isLoading", !0)
                          : (e.filteredRows = r),
                        { v: void 0 }
                      );
                    for (
                      var t = function (t) {
                          return "function" == typeof t && t.name ? t.name : t;
                        },
                        a = function (i) {
                          var a = e.typedColumns[i];
                          e.columnFilters[t(a.field)] &&
                            ((o = !0),
                            r.forEach(function (i) {
                              var r = i.children.filter(function (i) {
                                return a.filterOptions &&
                                  "function" == typeof a.filterOptions.filterFn
                                  ? a.filterOptions.filterFn(
                                      e.collect(i, a.field),
                                      e.columnFilters[t(a.field)]
                                    )
                                  : a.typeDef.filterPredicate(
                                      e.collect(i, a.field),
                                      e.columnFilters[t(a.field)],
                                      !1,
                                      a.filterOptions &&
                                        "object" ===
                                          n(a.filterOptions.filterDropdownItems)
                                    );
                              });
                              i.children = r;
                            }));
                        },
                        s = 0;
                      s < e.typedColumns.length;
                      s++
                    )
                      a(s);
                  })();
                  if ("object" === n(a)) return a.v;
                }
                this.filteredRows = o
                  ? r.filter(function (t) {
                      return t.children && t.children.length;
                    })
                  : r;
              },
              getCurrentIndex: function (t) {
                for (
                  var e = 0, n = !1, i = 0;
                  i < this.paginated.length;
                  i += 1
                ) {
                  var r = this.paginated[i].children;
                  if (r && r.length)
                    for (var o = 0; o < r.length; o += 1) {
                      if (r[o].originalIndex === t) {
                        n = !0;
                        break;
                      }
                      e += 1;
                    }
                  if (n) break;
                }
                return (this.currentPage - 1) * this.currentPerPage + e + 1;
              },
              getRowStyleClass: function (t) {
                var e,
                  n = "";
                return (
                  this.hasRowClickListener && (n += "clickable"),
                  (e =
                    "function" == typeof this.rowStyleClass
                      ? this.rowStyleClass(t)
                      : this.rowStyleClass) && (n += " ".concat(e)),
                  n
                );
              },
              handleGrouped: function (t) {
                var e = this;
                return (
                  t.forEach(function (t, n) {
                    (t.vgt_header_id = n),
                      e.groupOptions.maintainExpanded &&
                        e.expandedRowKeys.has(t[e.groupOptions.rowKey]) &&
                        e.$set(t, "vgtIsExpanded", !0),
                      t.children.forEach(function (t) {
                        t.vgt_id = n;
                      });
                  }),
                  t
                );
              },
              initializePagination: function () {
                var t = this,
                  e = this.paginationOptions,
                  n = e.enabled,
                  i = e.perPage,
                  o = e.position,
                  a = e.perPageDropdown,
                  s = e.perPageDropdownEnabled,
                  l = e.dropdownAllowAll,
                  c = e.firstLabel,
                  d = e.lastLabel,
                  u = e.nextLabel,
                  p = e.prevLabel,
                  h = e.rowsPerPageLabel,
                  f = e.ofLabel,
                  b = e.pageLabel,
                  m = e.allLabel,
                  g = e.setCurrentPage,
                  v = e.mode,
                  _ = e.infoFn;
                if (
                  ("boolean" == typeof n && (this.paginate = n),
                  "number" == typeof i && (this.perPage = i),
                  "top" === o
                    ? ((this.paginateOnTop = !0), (this.paginateOnBottom = !1))
                    : "both" === o &&
                      ((this.paginateOnTop = !0), (this.paginateOnBottom = !0)),
                  Array.isArray(a) &&
                    a.length &&
                    ((this.customRowsPerPageDropdown = a), !this.perPage))
                ) {
                  var y = r(a, 1);
                  this.perPage = y[0];
                }
                "boolean" == typeof s && (this.perPageDropdownEnabled = s),
                  "boolean" == typeof l && (this.paginateDropdownAllowAll = l),
                  "string" == typeof v && (this.paginationMode = v),
                  "string" == typeof c && (this.firstText = c),
                  "string" == typeof d && (this.lastText = d),
                  "string" == typeof u && (this.nextText = u),
                  "string" == typeof p && (this.prevText = p),
                  "string" == typeof h && (this.rowsPerPageText = h),
                  "string" == typeof f && (this.ofText = f),
                  "string" == typeof b && (this.pageText = b),
                  "string" == typeof m && (this.allText = m),
                  "number" == typeof g &&
                    setTimeout(function () {
                      t.changePage(g);
                    }, 500),
                  "function" == typeof _ && (this.paginationInfoFn = _);
              },
              initializeSearch: function () {
                var t = this.searchOptions,
                  e = t.enabled,
                  n = t.trigger,
                  i = t.externalQuery,
                  r = t.searchFn,
                  o = t.placeholder,
                  a = t.skipDiacritics;
                "boolean" == typeof e && (this.searchEnabled = e),
                  "enter" === n && (this.searchTrigger = n),
                  "string" == typeof i && (this.externalSearchQuery = i),
                  "function" == typeof r && (this.searchFn = r),
                  "string" == typeof o && (this.searchPlaceholder = o),
                  "boolean" == typeof a && (this.searchSkipDiacritics = a);
              },
              initializeSort: function () {
                var t = this.sortOptions,
                  e = t.enabled,
                  i = t.initialSortBy,
                  r = t.multipleColumns,
                  o = JSON.parse(JSON.stringify(i || {}));
                if (
                  ("boolean" == typeof e && (this.sortable = e),
                  "boolean" == typeof r && (this.multipleColumnSort = r),
                  "object" === n(o))
                ) {
                  var a = this.fixedHeader
                    ? this.$refs["table-header-secondary"]
                    : this.$refs["table-header-primary"];
                  Array.isArray(o)
                    ? a.setInitialSort(o)
                    : Object.prototype.hasOwnProperty.call(o, "field") &&
                      a.setInitialSort([o]);
                }
              },
              initializeSelect: function () {
                var t = this.selectOptions,
                  e = t.enabled,
                  n = t.selectionInfoClass,
                  i = t.selectionText,
                  r = t.clearSelectionText,
                  o = t.selectOnCheckboxOnly,
                  a = t.selectAllByPage,
                  s = t.disableSelectInfo,
                  l = t.selectAllByGroup;
                "boolean" == typeof e && (this.selectable = e),
                  "boolean" == typeof o && (this.selectOnCheckboxOnly = o),
                  "boolean" == typeof a && (this.selectAllByPage = a),
                  "boolean" == typeof l && (this.selectAllByGroup = l),
                  "boolean" == typeof s && (this.disableSelectInfo = s),
                  "string" == typeof n && (this.selectionInfoClass = n),
                  "string" == typeof i && (this.selectionText = i),
                  "string" == typeof r && (this.clearSelectionText = r);
              },
            },
            mounted: function () {
              this.perPage && (this.currentPerPage = this.perPage),
                this.initializeSort();
            },
            components: {
              "vgt-pagination": O,
              "vgt-global-search": w,
              "vgt-header-row": C,
              "vgt-table-header": z,
            },
          },
          void 0,
          !1,
          void 0,
          !1,
          void 0,
          void 0,
          void 0
        ),
        Me = {
          install: function (t, e) {
            t.component(ye.name, ye);
          },
        };
      "undefined" != typeof window && window.Vue && window.Vue.use(Me),
        (e.a = Me);
    }).call(this, n(56));
  },
  function (t, e, n) {
    "use strict";
    (function (t) {
      var i = n(544),
        r = n.n(i),
        o = n(10);
      function a(t) {
        return (a =
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
      function s(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, i = new Array(e); n < e; n++) i[n] = t[n];
        return i;
      }
      var l = Object.prototype.hasOwnProperty;
      function c(t) {
        return Array.isArray(t)
          ? t.map(c)
          : t instanceof Date
          ? new Date(t.valueOf())
          : "object" === a(t) && t
          ? d(t, c)
          : t;
      }
      function d(t, e) {
        var n = {};
        for (var i in t) l.call(t, i) && (n[i] = e(t[i], i));
        return n;
      }
      var u,
        p = {
          header: {},
          footer: {},
          customButtons: {},
          buttonIcons: {},
          themeSystem: {},
          bootstrapFontAwesome: {},
          firstDay: {},
          dir: {},
          weekends: {},
          hiddenDays: {},
          fixedWeekCount: {},
          weekNumbers: {},
          weekNumbersWithinDays: {},
          weekNumberCalculation: {},
          businessHours: {},
          showNonCurrentDates: {},
          height: {},
          contentHeight: {},
          aspectRatio: {},
          handleWindowResize: {},
          windowResizeDelay: {},
          eventLimit: {},
          eventLimitClick: {},
          timeZone: {},
          now: {},
          defaultView: {},
          allDaySlot: {},
          allDayText: {},
          slotDuration: {},
          slotLabelFormat: {},
          slotLabelInterval: {},
          snapDuration: {},
          scrollTime: {},
          minTime: {},
          maxTime: {},
          slotEventOverlap: {},
          listDayFormat: {},
          listDayAltFormat: {},
          noEventsMessage: {},
          defaultDate: {},
          nowIndicator: {},
          visibleRange: {},
          validRange: {},
          dateIncrement: {},
          dateAlignment: {},
          duration: {},
          dayCount: {},
          locales: {},
          locale: {},
          eventTimeFormat: {},
          columnHeader: {},
          columnHeaderFormat: {},
          columnHeaderText: {},
          columnHeaderHtml: {},
          titleFormat: {},
          weekLabel: {},
          displayEventTime: {},
          displayEventEnd: {},
          eventLimitText: {},
          dayPopoverFormat: {},
          navLinks: {},
          navLinkDayClick: {},
          navLinkWeekClick: {},
          selectable: {},
          selectMirror: {},
          unselectAuto: {},
          unselectCancel: {},
          defaultAllDayEventDuration: {},
          defaultTimedEventDuration: {},
          cmdFormatter: {},
          defaultRangeSeparator: {},
          selectConstraint: {},
          selectOverlap: {},
          selectAllow: {},
          editable: {},
          eventStartEditable: {},
          eventDurationEditable: {},
          eventConstraint: {},
          eventOverlap: {},
          eventAllow: {},
          eventClassName: {},
          eventClassNames: {},
          eventBackgroundColor: {},
          eventBorderColor: {},
          eventTextColor: {},
          eventColor: {},
          events: {},
          eventSources: {},
          allDayDefault: {},
          startParam: {},
          endParam: {},
          lazyFetching: {},
          nextDayThreshold: {},
          eventOrder: {},
          rerenderDelay: {},
          dragRevertDuration: {},
          dragScroll: {},
          longPressDelay: {},
          eventLongPressDelay: {},
          droppable: {},
          dropAccept: {},
          eventDataTransform: {},
          allDayMaintainDuration: {},
          eventResizableFromStart: {},
          timeGridEventMinHeight: {},
          allDayHtml: {},
          eventDragMinDistance: {},
          eventResourceEditable: {},
          eventSourceFailure: {},
          eventSourceSuccess: {},
          forceEventDuration: {},
          progressiveEventRendering: {},
          selectLongPressDelay: {},
          selectMinDistance: {},
          timeZoneParam: {},
          titleRangeSeparator: {},
          buttonText: {},
          views: {},
          plugins: {},
          schedulerLicenseKey: {},
          resources: {},
          resourceLabelText: {},
          resourceOrder: {},
          filterResourcesWithEvents: {},
          resourceText: {},
          resourceGroupField: {},
          resourceGroupText: {},
          resourceAreaWidth: {},
          resourceColumns: {},
          resourcesInitiallyExpanded: {},
          slotWidth: {},
          datesAboveResources: {},
          googleCalendarApiKey: {},
          refetchResourcesOnNavigate: {},
          datesRender: {},
          datesDestroy: {},
          dayRender: {},
          eventRender: {},
          eventDestroy: {},
          viewSkeletonRender: {},
          viewSkeletonDestroy: {},
          resourceRender: {},
        },
        h = {
          header: !0,
          footer: !0,
          events: !0,
          eventSources: !0,
          resources: !0,
        },
        f = [
          "windowResize",
          "dateClick",
          "eventClick",
          "eventMouseEnter",
          "eventMouseLeave",
          "select",
          "unselect",
          "loading",
          "eventPositioned",
          "_eventsPositioned",
          "eventDragStart",
          "eventDragStop",
          "eventDrop",
          "eventResizeStart",
          "eventResizeStop",
          "eventResize",
          "drop",
          "eventReceive",
          "eventLeave",
          "_destroyed",
          "datesRender",
          "datesDestroy",
          "dayRender",
          "eventRender",
          "eventDestroy",
          "viewSkeletonRender",
          "viewSkeletonDestroy",
          "resourceRender",
        ],
        b = {
          props: p,
          data: function () {
            return { renderId: 0, deepCopies: {} };
          },
          render: function (t) {
            return t("div", { attrs: { "data-fc-render-id": this.renderId } });
          },
          mounted: function () {
            !(function (t) {
              for (var e in t);
            })(this.$listeners),
              (this.$options.calendar = new o.a(
                this.$el,
                this.buildCalendarOptions()
              )),
              this.$options.calendar.render();
          },
          beforeUpdate: function () {
            this.renderDirty();
          },
          beforeDestroy: function () {
            this.$options.calendar.destroy();
          },
          watch: d(p, function (t, e) {
            return h[e]
              ? {
                  deep: !0,
                  handler: function (t) {
                    var n = this.deepCopies[e];
                    r()(t, n) ||
                      ((t = c(t)),
                      (this.deepCopies[e] = t),
                      this.recordDirtyOption(e, t));
                  },
                }
              : function (t) {
                  this.recordDirtyOption(e, t);
                };
          }),
          methods: {
            buildCalendarOptions: function () {
              var t,
                e = this,
                n = {},
                i = (function (t, e) {
                  var n;
                  if (
                    "undefined" == typeof Symbol ||
                    null == t[Symbol.iterator]
                  ) {
                    if (
                      Array.isArray(t) ||
                      (n = (function (t, e) {
                        if (t) {
                          if ("string" == typeof t) return s(t, e);
                          var n = Object.prototype.toString
                            .call(t)
                            .slice(8, -1);
                          return (
                            "Object" === n &&
                              t.constructor &&
                              (n = t.constructor.name),
                            "Map" === n || "Set" === n
                              ? Array.from(t)
                              : "Arguments" === n ||
                                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                  n
                                )
                              ? s(t, e)
                              : void 0
                          );
                        }
                      })(t))
                    ) {
                      n && (t = n);
                      var i = 0,
                        r = function () {};
                      return {
                        s: r,
                        n: function () {
                          return i >= t.length
                            ? { done: !0 }
                            : { done: !1, value: t[i++] };
                        },
                        e: function (t) {
                          throw t;
                        },
                        f: r,
                      };
                    }
                    throw new TypeError(
                      "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                    );
                  }
                  var o,
                    a = !0,
                    l = !1;
                  return {
                    s: function () {
                      n = t[Symbol.iterator]();
                    },
                    n: function () {
                      var t = n.next();
                      return (a = t.done), t;
                    },
                    e: function (t) {
                      (l = !0), (o = t);
                    },
                    f: function () {
                      try {
                        a || null == n.return || n.return();
                      } finally {
                        if (l) throw o;
                      }
                    },
                  };
                })(f);
              try {
                var r = function () {
                  var i = t.value;
                  n[i] = function () {
                    for (
                      var t = arguments.length, n = new Array(t), r = 0;
                      r < t;
                      r++
                    )
                      n[r] = arguments[r];
                    e.$emit.apply(e, [i].concat(n));
                  };
                };
                for (i.s(); !(t = i.n()).done; ) r();
              } catch (t) {
                i.e(t);
              } finally {
                i.f();
              }
              for (var o in p) {
                var a = this[o];
                void 0 !== a &&
                  (h[o] && ((a = c(a)), (this.deepCopies[o] = a)), (n[o] = a));
              }
              return n;
            },
            recordDirtyOption: function (t, e) {
              ((this.$options.dirtyOptions ||
                (this.$options.dirtyOptions = {}))[t] = e),
                this.renderId++;
            },
            renderDirty: function () {
              var t = this.$options.dirtyOptions;
              t &&
                ((this.$options.dirtyOptions = null),
                this.$options.calendar.mutateOptions(t, [], !1, r.a));
            },
            getApi: function () {
              return this.$options.calendar;
            },
          },
        },
        m = !1;
      "undefined" != typeof window
        ? (u = window.Vue)
        : void 0 !== t && (u = t.Vue),
        u &&
          u.use({
            install: function (t) {
              m || ((m = !0), t.component("FullCalendar", b));
            },
          }),
        (e.a = b);
    }).call(this, n(56));
  },
  function (t, e, n) {
    "use strict";
    var i = n(10),
      r = function (t, e) {
        return (r =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (t, e) {
              t.__proto__ = e;
            }) ||
          function (t, e) {
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
          })(t, e);
      };
    function o(t, e) {
      function n() {
        this.constructor = t;
      }
      r(t, e),
        (t.prototype =
          null === e
            ? Object.create(e)
            : ((n.prototype = e.prototype), new n()));
    }
    var a = function () {
      return (a =
        Object.assign ||
        function (t) {
          for (var e, n = 1, i = arguments.length; n < i; n++)
            for (var r in (e = arguments[n]))
              Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
          return t;
        }).apply(this, arguments);
    };
    i.W.touchMouseIgnoreWait = 500;
    var s = 0,
      l = 0,
      c = !1,
      d = (function () {
        function t(t) {
          var e = this;
          (this.subjectEl = null),
            (this.downEl = null),
            (this.selector = ""),
            (this.handleSelector = ""),
            (this.shouldIgnoreMove = !1),
            (this.shouldWatchScroll = !0),
            (this.isDragging = !1),
            (this.isTouchDragging = !1),
            (this.wasTouchScroll = !1),
            (this.handleMouseDown = function (t) {
              if (
                !e.shouldIgnoreMouse() &&
                (function (t) {
                  return 0 === t.button && !t.ctrlKey;
                })(t) &&
                e.tryStart(t)
              ) {
                var n = e.createEventFromMouse(t, !0);
                e.emitter.trigger("pointerdown", n),
                  e.initScrollWatch(n),
                  e.shouldIgnoreMove ||
                    document.addEventListener("mousemove", e.handleMouseMove),
                  document.addEventListener("mouseup", e.handleMouseUp);
              }
            }),
            (this.handleMouseMove = function (t) {
              var n = e.createEventFromMouse(t);
              e.recordCoords(n), e.emitter.trigger("pointermove", n);
            }),
            (this.handleMouseUp = function (t) {
              document.removeEventListener("mousemove", e.handleMouseMove),
                document.removeEventListener("mouseup", e.handleMouseUp),
                e.emitter.trigger("pointerup", e.createEventFromMouse(t)),
                e.cleanup();
            }),
            (this.handleTouchStart = function (t) {
              if (e.tryStart(t)) {
                e.isTouchDragging = !0;
                var n = e.createEventFromTouch(t, !0);
                e.emitter.trigger("pointerdown", n), e.initScrollWatch(n);
                var i = t.target;
                e.shouldIgnoreMove ||
                  i.addEventListener("touchmove", e.handleTouchMove),
                  i.addEventListener("touchend", e.handleTouchEnd),
                  i.addEventListener("touchcancel", e.handleTouchEnd),
                  window.addEventListener("scroll", e.handleTouchScroll, !0);
              }
            }),
            (this.handleTouchMove = function (t) {
              var n = e.createEventFromTouch(t);
              e.recordCoords(n), e.emitter.trigger("pointermove", n);
            }),
            (this.handleTouchEnd = function (t) {
              if (e.isDragging) {
                var n = t.target;
                n.removeEventListener("touchmove", e.handleTouchMove),
                  n.removeEventListener("touchend", e.handleTouchEnd),
                  n.removeEventListener("touchcancel", e.handleTouchEnd),
                  window.removeEventListener("scroll", e.handleTouchScroll, !0),
                  e.emitter.trigger("pointerup", e.createEventFromTouch(t)),
                  e.cleanup(),
                  (e.isTouchDragging = !1),
                  s++,
                  setTimeout(function () {
                    s--;
                  }, i.W.touchMouseIgnoreWait);
              }
            }),
            (this.handleTouchScroll = function () {
              e.wasTouchScroll = !0;
            }),
            (this.handleScroll = function (t) {
              if (!e.shouldIgnoreMove) {
                var n = window.pageXOffset - e.prevScrollX + e.prevPageX,
                  i = window.pageYOffset - e.prevScrollY + e.prevPageY;
                e.emitter.trigger("pointermove", {
                  origEvent: t,
                  isTouch: e.isTouchDragging,
                  subjectEl: e.subjectEl,
                  pageX: n,
                  pageY: i,
                  deltaX: n - e.origPageX,
                  deltaY: i - e.origPageY,
                });
              }
            }),
            (this.containerEl = t),
            (this.emitter = new i.j()),
            t.addEventListener("mousedown", this.handleMouseDown),
            t.addEventListener("touchstart", this.handleTouchStart, {
              passive: !0,
            }),
            l++ || window.addEventListener("touchmove", u, { passive: !1 });
        }
        return (
          (t.prototype.destroy = function () {
            this.containerEl.removeEventListener(
              "mousedown",
              this.handleMouseDown
            ),
              this.containerEl.removeEventListener(
                "touchstart",
                this.handleTouchStart,
                { passive: !0 }
              ),
              --l ||
                window.removeEventListener("touchmove", u, { passive: !1 });
          }),
          (t.prototype.tryStart = function (t) {
            var e = this.querySubjectEl(t),
              n = t.target;
            return !(
              !e ||
              (this.handleSelector && !Object(i.mb)(n, this.handleSelector)) ||
              ((this.subjectEl = e),
              (this.downEl = n),
              (this.isDragging = !0),
              (this.wasTouchScroll = !1),
              0)
            );
          }),
          (t.prototype.cleanup = function () {
            (c = !1),
              (this.isDragging = !1),
              (this.subjectEl = null),
              (this.downEl = null),
              this.destroyScrollWatch();
          }),
          (t.prototype.querySubjectEl = function (t) {
            return this.selector
              ? Object(i.mb)(t.target, this.selector)
              : this.containerEl;
          }),
          (t.prototype.shouldIgnoreMouse = function () {
            return s || this.isTouchDragging;
          }),
          (t.prototype.cancelTouchScroll = function () {
            this.isDragging && (c = !0);
          }),
          (t.prototype.initScrollWatch = function (t) {
            this.shouldWatchScroll &&
              (this.recordCoords(t),
              window.addEventListener("scroll", this.handleScroll, !0));
          }),
          (t.prototype.recordCoords = function (t) {
            this.shouldWatchScroll &&
              ((this.prevPageX = t.pageX),
              (this.prevPageY = t.pageY),
              (this.prevScrollX = window.pageXOffset),
              (this.prevScrollY = window.pageYOffset));
          }),
          (t.prototype.destroyScrollWatch = function () {
            this.shouldWatchScroll &&
              window.removeEventListener("scroll", this.handleScroll, !0);
          }),
          (t.prototype.createEventFromMouse = function (t, e) {
            var n = 0,
              i = 0;
            return (
              e
                ? ((this.origPageX = t.pageX), (this.origPageY = t.pageY))
                : ((n = t.pageX - this.origPageX),
                  (i = t.pageY - this.origPageY)),
              {
                origEvent: t,
                isTouch: !1,
                subjectEl: this.subjectEl,
                pageX: t.pageX,
                pageY: t.pageY,
                deltaX: n,
                deltaY: i,
              }
            );
          }),
          (t.prototype.createEventFromTouch = function (t, e) {
            var n,
              i,
              r = t.touches,
              o = 0,
              a = 0;
            return (
              r && r.length
                ? ((n = r[0].pageX), (i = r[0].pageY))
                : ((n = t.pageX), (i = t.pageY)),
              e
                ? ((this.origPageX = n), (this.origPageY = i))
                : ((o = n - this.origPageX), (a = i - this.origPageY)),
              {
                origEvent: t,
                isTouch: !0,
                subjectEl: this.subjectEl,
                pageX: n,
                pageY: i,
                deltaX: o,
                deltaY: a,
              }
            );
          }),
          t
        );
      })();
    function u(t) {
      c && t.preventDefault();
    }
    var p = (function () {
        function t() {
          (this.isVisible = !1),
            (this.sourceEl = null),
            (this.mirrorEl = null),
            (this.sourceElRect = null),
            (this.parentNode = document.body),
            (this.zIndex = 9999),
            (this.revertDuration = 0);
        }
        return (
          (t.prototype.start = function (t, e, n) {
            (this.sourceEl = t),
              (this.sourceElRect = this.sourceEl.getBoundingClientRect()),
              (this.origScreenX = e - window.pageXOffset),
              (this.origScreenY = n - window.pageYOffset),
              (this.deltaX = 0),
              (this.deltaY = 0),
              this.updateElPosition();
          }),
          (t.prototype.handleMove = function (t, e) {
            (this.deltaX = t - window.pageXOffset - this.origScreenX),
              (this.deltaY = e - window.pageYOffset - this.origScreenY),
              this.updateElPosition();
          }),
          (t.prototype.setIsVisible = function (t) {
            t
              ? this.isVisible ||
                (this.mirrorEl && (this.mirrorEl.style.display = ""),
                (this.isVisible = t),
                this.updateElPosition())
              : this.isVisible &&
                (this.mirrorEl && (this.mirrorEl.style.display = "none"),
                (this.isVisible = t));
          }),
          (t.prototype.stop = function (t, e) {
            var n = this,
              i = function () {
                n.cleanup(), e();
              };
            t &&
            this.mirrorEl &&
            this.isVisible &&
            this.revertDuration &&
            (this.deltaX || this.deltaY)
              ? this.doRevertAnimation(i, this.revertDuration)
              : setTimeout(i, 0);
          }),
          (t.prototype.doRevertAnimation = function (t, e) {
            var n = this.mirrorEl,
              r = this.sourceEl.getBoundingClientRect();
            (n.style.transition = "top " + e + "ms,left " + e + "ms"),
              Object(i.C)(n, { left: r.left, top: r.top }),
              Object(i.yc)(n, function () {
                (n.style.transition = ""), t();
              });
          }),
          (t.prototype.cleanup = function () {
            this.mirrorEl &&
              (Object(i.pc)(this.mirrorEl), (this.mirrorEl = null)),
              (this.sourceEl = null);
          }),
          (t.prototype.updateElPosition = function () {
            this.sourceEl &&
              this.isVisible &&
              Object(i.C)(this.getMirrorEl(), {
                left: this.sourceElRect.left + this.deltaX,
                top: this.sourceElRect.top + this.deltaY,
              });
          }),
          (t.prototype.getMirrorEl = function () {
            var t = this.sourceElRect,
              e = this.mirrorEl;
            return (
              e ||
                ((e = this.mirrorEl =
                  this.sourceEl.cloneNode(!0)).classList.add("fc-unselectable"),
                e.classList.add("fc-dragging"),
                Object(i.C)(e, {
                  position: "fixed",
                  zIndex: this.zIndex,
                  visibility: "",
                  boxSizing: "border-box",
                  width: t.right - t.left,
                  height: t.bottom - t.top,
                  right: "auto",
                  bottom: "auto",
                  margin: 0,
                }),
                this.parentNode.appendChild(e)),
              e
            );
          }),
          t
        );
      })(),
      h = (function (t) {
        function e(e, n) {
          var i = t.call(this) || this;
          return (
            (i.handleScroll = function () {
              (i.scrollTop = i.scrollController.getScrollTop()),
                (i.scrollLeft = i.scrollController.getScrollLeft()),
                i.handleScrollChange();
            }),
            (i.scrollController = e),
            (i.doesListening = n),
            (i.scrollTop = i.origScrollTop = e.getScrollTop()),
            (i.scrollLeft = i.origScrollLeft = e.getScrollLeft()),
            (i.scrollWidth = e.getScrollWidth()),
            (i.scrollHeight = e.getScrollHeight()),
            (i.clientWidth = e.getClientWidth()),
            (i.clientHeight = e.getClientHeight()),
            (i.clientRect = i.computeClientRect()),
            i.doesListening &&
              i.getEventTarget().addEventListener("scroll", i.handleScroll),
            i
          );
        }
        return (
          o(e, t),
          (e.prototype.destroy = function () {
            this.doesListening &&
              this.getEventTarget().removeEventListener(
                "scroll",
                this.handleScroll
              );
          }),
          (e.prototype.getScrollTop = function () {
            return this.scrollTop;
          }),
          (e.prototype.getScrollLeft = function () {
            return this.scrollLeft;
          }),
          (e.prototype.setScrollTop = function (t) {
            this.scrollController.setScrollTop(t),
              this.doesListening ||
                ((this.scrollTop = Math.max(
                  Math.min(t, this.getMaxScrollTop()),
                  0
                )),
                this.handleScrollChange());
          }),
          (e.prototype.setScrollLeft = function (t) {
            this.scrollController.setScrollLeft(t),
              this.doesListening ||
                ((this.scrollLeft = Math.max(
                  Math.min(t, this.getMaxScrollLeft()),
                  0
                )),
                this.handleScrollChange());
          }),
          (e.prototype.getClientWidth = function () {
            return this.clientWidth;
          }),
          (e.prototype.getClientHeight = function () {
            return this.clientHeight;
          }),
          (e.prototype.getScrollWidth = function () {
            return this.scrollWidth;
          }),
          (e.prototype.getScrollHeight = function () {
            return this.scrollHeight;
          }),
          (e.prototype.handleScrollChange = function () {}),
          e
        );
      })(i.q),
      f = (function (t) {
        function e(e, n) {
          return t.call(this, new i.i(e), n) || this;
        }
        return (
          o(e, t),
          (e.prototype.getEventTarget = function () {
            return this.scrollController.el;
          }),
          (e.prototype.computeClientRect = function () {
            return Object(i.T)(this.scrollController.el);
          }),
          e
        );
      })(h),
      b = (function (t) {
        function e(e) {
          return t.call(this, new i.u(), e) || this;
        }
        return (
          o(e, t),
          (e.prototype.getEventTarget = function () {
            return window;
          }),
          (e.prototype.computeClientRect = function () {
            return {
              left: this.scrollLeft,
              right: this.scrollLeft + this.clientWidth,
              top: this.scrollTop,
              bottom: this.scrollTop + this.clientHeight,
            };
          }),
          (e.prototype.handleScrollChange = function () {
            this.clientRect = this.computeClientRect();
          }),
          e
        );
      })(h),
      m = "function" == typeof performance ? performance.now : Date.now,
      g = (function () {
        function t() {
          var t = this;
          (this.isEnabled = !0),
            (this.scrollQuery = [window, ".fc-scroller"]),
            (this.edgeThreshold = 50),
            (this.maxVelocity = 300),
            (this.pointerScreenX = null),
            (this.pointerScreenY = null),
            (this.isAnimating = !1),
            (this.scrollCaches = null),
            (this.everMovedUp = !1),
            (this.everMovedDown = !1),
            (this.everMovedLeft = !1),
            (this.everMovedRight = !1),
            (this.animate = function () {
              if (t.isAnimating) {
                var e = t.computeBestEdge(
                  t.pointerScreenX + window.pageXOffset,
                  t.pointerScreenY + window.pageYOffset
                );
                if (e) {
                  var n = m();
                  t.handleSide(e, (n - t.msSinceRequest) / 1e3),
                    t.requestAnimation(n);
                } else t.isAnimating = !1;
              }
            });
        }
        return (
          (t.prototype.start = function (t, e) {
            this.isEnabled &&
              ((this.scrollCaches = this.buildCaches()),
              (this.pointerScreenX = null),
              (this.pointerScreenY = null),
              (this.everMovedUp = !1),
              (this.everMovedDown = !1),
              (this.everMovedLeft = !1),
              (this.everMovedRight = !1),
              this.handleMove(t, e));
          }),
          (t.prototype.handleMove = function (t, e) {
            if (this.isEnabled) {
              var n = t - window.pageXOffset,
                i = e - window.pageYOffset,
                r = null === this.pointerScreenY ? 0 : i - this.pointerScreenY,
                o = null === this.pointerScreenX ? 0 : n - this.pointerScreenX;
              r < 0
                ? (this.everMovedUp = !0)
                : r > 0 && (this.everMovedDown = !0),
                o < 0
                  ? (this.everMovedLeft = !0)
                  : o > 0 && (this.everMovedRight = !0),
                (this.pointerScreenX = n),
                (this.pointerScreenY = i),
                this.isAnimating ||
                  ((this.isAnimating = !0), this.requestAnimation(m()));
            }
          }),
          (t.prototype.stop = function () {
            if (this.isEnabled) {
              this.isAnimating = !1;
              for (var t = 0, e = this.scrollCaches; t < e.length; t++)
                e[t].destroy();
              this.scrollCaches = null;
            }
          }),
          (t.prototype.requestAnimation = function (t) {
            (this.msSinceRequest = t), requestAnimationFrame(this.animate);
          }),
          (t.prototype.handleSide = function (t, e) {
            var n = t.scrollCache,
              i = this.edgeThreshold,
              r = i - t.distance,
              o = ((r * r) / (i * i)) * this.maxVelocity * e,
              a = 1;
            switch (t.name) {
              case "left":
                a = -1;
              case "right":
                n.setScrollLeft(n.getScrollLeft() + o * a);
                break;
              case "top":
                a = -1;
              case "bottom":
                n.setScrollTop(n.getScrollTop() + o * a);
            }
          }),
          (t.prototype.computeBestEdge = function (t, e) {
            for (
              var n = this.edgeThreshold,
                i = null,
                r = 0,
                o = this.scrollCaches;
              r < o.length;
              r++
            ) {
              var a = o[r],
                s = a.clientRect,
                l = t - s.left,
                c = s.right - t,
                d = e - s.top,
                u = s.bottom - e;
              l >= 0 &&
                c >= 0 &&
                d >= 0 &&
                u >= 0 &&
                (d <= n &&
                  this.everMovedUp &&
                  a.canScrollUp() &&
                  (!i || i.distance > d) &&
                  (i = { scrollCache: a, name: "top", distance: d }),
                u <= n &&
                  this.everMovedDown &&
                  a.canScrollDown() &&
                  (!i || i.distance > u) &&
                  (i = { scrollCache: a, name: "bottom", distance: u }),
                l <= n &&
                  this.everMovedLeft &&
                  a.canScrollLeft() &&
                  (!i || i.distance > l) &&
                  (i = { scrollCache: a, name: "left", distance: l }),
                c <= n &&
                  this.everMovedRight &&
                  a.canScrollRight() &&
                  (!i || i.distance > c) &&
                  (i = { scrollCache: a, name: "right", distance: c }));
            }
            return i;
          }),
          (t.prototype.buildCaches = function () {
            return this.queryScrollEls().map(function (t) {
              return t === window ? new b(!1) : new f(t, !1);
            });
          }),
          (t.prototype.queryScrollEls = function () {
            for (var t = [], e = 0, n = this.scrollQuery; e < n.length; e++) {
              var i = n[e];
              "object" == typeof i
                ? t.push(i)
                : t.push.apply(
                    t,
                    Array.prototype.slice.call(document.querySelectorAll(i))
                  );
            }
            return t;
          }),
          t
        );
      })(),
      v = (function (t) {
        function e(e) {
          var n = t.call(this, e) || this;
          (n.delay = null),
            (n.minDistance = 0),
            (n.touchScrollAllowed = !0),
            (n.mirrorNeedsRevert = !1),
            (n.isInteracting = !1),
            (n.isDragging = !1),
            (n.isDelayEnded = !1),
            (n.isDistanceSurpassed = !1),
            (n.delayTimeoutId = null),
            (n.onPointerDown = function (t) {
              n.isDragging ||
                ((n.isInteracting = !0),
                (n.isDelayEnded = !1),
                (n.isDistanceSurpassed = !1),
                Object(i.ic)(document.body),
                Object(i.gc)(document.body),
                t.isTouch || t.origEvent.preventDefault(),
                n.emitter.trigger("pointerdown", t),
                n.pointer.shouldIgnoreMove ||
                  (n.mirror.setIsVisible(!1),
                  n.mirror.start(t.subjectEl, t.pageX, t.pageY),
                  n.startDelay(t),
                  n.minDistance || n.handleDistanceSurpassed(t)));
            }),
            (n.onPointerMove = function (t) {
              if (n.isInteracting) {
                if (
                  (n.emitter.trigger("pointermove", t), !n.isDistanceSurpassed)
                ) {
                  var e = n.minDistance,
                    i = t.deltaX,
                    r = t.deltaY;
                  i * i + r * r >= e * e && n.handleDistanceSurpassed(t);
                }
                n.isDragging &&
                  ("scroll" !== t.origEvent.type &&
                    (n.mirror.handleMove(t.pageX, t.pageY),
                    n.autoScroller.handleMove(t.pageX, t.pageY)),
                  n.emitter.trigger("dragmove", t));
              }
            }),
            (n.onPointerUp = function (t) {
              n.isInteracting &&
                ((n.isInteracting = !1),
                Object(i.z)(document.body),
                Object(i.y)(document.body),
                n.emitter.trigger("pointerup", t),
                n.isDragging && (n.autoScroller.stop(), n.tryStopDrag(t)),
                n.delayTimeoutId &&
                  (clearTimeout(n.delayTimeoutId), (n.delayTimeoutId = null)));
            });
          var r = (n.pointer = new d(e));
          return (
            r.emitter.on("pointerdown", n.onPointerDown),
            r.emitter.on("pointermove", n.onPointerMove),
            r.emitter.on("pointerup", n.onPointerUp),
            (n.mirror = new p()),
            (n.autoScroller = new g()),
            n
          );
        }
        return (
          o(e, t),
          (e.prototype.destroy = function () {
            this.pointer.destroy();
          }),
          (e.prototype.startDelay = function (t) {
            var e = this;
            "number" == typeof this.delay
              ? (this.delayTimeoutId = setTimeout(function () {
                  (e.delayTimeoutId = null), e.handleDelayEnd(t);
                }, this.delay))
              : this.handleDelayEnd(t);
          }),
          (e.prototype.handleDelayEnd = function (t) {
            (this.isDelayEnded = !0), this.tryStartDrag(t);
          }),
          (e.prototype.handleDistanceSurpassed = function (t) {
            (this.isDistanceSurpassed = !0), this.tryStartDrag(t);
          }),
          (e.prototype.tryStartDrag = function (t) {
            this.isDelayEnded &&
              this.isDistanceSurpassed &&
              ((this.pointer.wasTouchScroll && !this.touchScrollAllowed) ||
                ((this.isDragging = !0),
                (this.mirrorNeedsRevert = !1),
                this.autoScroller.start(t.pageX, t.pageY),
                this.emitter.trigger("dragstart", t),
                !1 === this.touchScrollAllowed &&
                  this.pointer.cancelTouchScroll()));
          }),
          (e.prototype.tryStopDrag = function (t) {
            this.mirror.stop(
              this.mirrorNeedsRevert,
              this.stopDrag.bind(this, t)
            );
          }),
          (e.prototype.stopDrag = function (t) {
            (this.isDragging = !1), this.emitter.trigger("dragend", t);
          }),
          (e.prototype.setIgnoreMove = function (t) {
            this.pointer.shouldIgnoreMove = t;
          }),
          (e.prototype.setMirrorIsVisible = function (t) {
            this.mirror.setIsVisible(t);
          }),
          (e.prototype.setMirrorNeedsRevert = function (t) {
            this.mirrorNeedsRevert = t;
          }),
          (e.prototype.setAutoScrollEnabled = function (t) {
            this.autoScroller.isEnabled = t;
          }),
          e
        );
      })(i.h),
      _ = (function () {
        function t(t) {
          (this.origRect = Object(i.U)(t)),
            (this.scrollCaches = Object(i.vb)(t).map(function (t) {
              return new f(t, !0);
            }));
        }
        return (
          (t.prototype.destroy = function () {
            for (var t = 0, e = this.scrollCaches; t < e.length; t++)
              e[t].destroy();
          }),
          (t.prototype.computeLeft = function () {
            for (
              var t = this.origRect.left, e = 0, n = this.scrollCaches;
              e < n.length;
              e++
            ) {
              var i = n[e];
              t += i.origScrollLeft - i.getScrollLeft();
            }
            return t;
          }),
          (t.prototype.computeTop = function () {
            for (
              var t = this.origRect.top, e = 0, n = this.scrollCaches;
              e < n.length;
              e++
            ) {
              var i = n[e];
              t += i.origScrollTop - i.getScrollTop();
            }
            return t;
          }),
          (t.prototype.isWithinClipping = function (t, e) {
            for (
              var n, r = { left: t, top: e }, o = 0, a = this.scrollCaches;
              o < a.length;
              o++
            ) {
              var s = a[o];
              if (
                "HTML" !== (n = s.getEventTarget().tagName) &&
                "BODY" !== n &&
                !Object(i.ec)(r, s.clientRect)
              )
                return !1;
            }
            return !0;
          }),
          t
        );
      })(),
      y = (function () {
        function t(t, e) {
          var n = this;
          (this.useSubjectCenter = !1),
            (this.requireInitial = !0),
            (this.initialHit = null),
            (this.movingHit = null),
            (this.finalHit = null),
            (this.handlePointerDown = function (t) {
              var e = n.dragging;
              (n.initialHit = null),
                (n.movingHit = null),
                (n.finalHit = null),
                n.prepareHits(),
                n.processFirstCoord(t),
                n.initialHit || !n.requireInitial
                  ? (e.setIgnoreMove(!1), n.emitter.trigger("pointerdown", t))
                  : e.setIgnoreMove(!0);
            }),
            (this.handleDragStart = function (t) {
              n.emitter.trigger("dragstart", t), n.handleMove(t, !0);
            }),
            (this.handleDragMove = function (t) {
              n.emitter.trigger("dragmove", t), n.handleMove(t);
            }),
            (this.handlePointerUp = function (t) {
              n.releaseHits(), n.emitter.trigger("pointerup", t);
            }),
            (this.handleDragEnd = function (t) {
              n.movingHit && n.emitter.trigger("hitupdate", null, !0, t),
                (n.finalHit = n.movingHit),
                (n.movingHit = null),
                n.emitter.trigger("dragend", t);
            }),
            (this.droppableStore = e),
            t.emitter.on("pointerdown", this.handlePointerDown),
            t.emitter.on("dragstart", this.handleDragStart),
            t.emitter.on("dragmove", this.handleDragMove),
            t.emitter.on("pointerup", this.handlePointerUp),
            t.emitter.on("dragend", this.handleDragEnd),
            (this.dragging = t),
            (this.emitter = new i.j());
        }
        return (
          (t.prototype.processFirstCoord = function (t) {
            var e,
              n = { left: t.pageX, top: t.pageY },
              r = n,
              o = t.subjectEl;
            o !== document && ((e = Object(i.U)(o)), (r = Object(i.X)(r, e)));
            var a = (this.initialHit = this.queryHitForOffset(r.left, r.top));
            if (a) {
              if (this.useSubjectCenter && e) {
                var s = Object(i.Ib)(e, a.rect);
                s && (r = Object(i.yb)(s));
              }
              this.coordAdjust = Object(i.hb)(r, n);
            } else this.coordAdjust = { left: 0, top: 0 };
          }),
          (t.prototype.handleMove = function (t, e) {
            var n = this.queryHitForOffset(
              t.pageX + this.coordAdjust.left,
              t.pageY + this.coordAdjust.top
            );
            (!e && M(this.movingHit, n)) ||
              ((this.movingHit = n),
              this.emitter.trigger("hitupdate", n, !1, t));
          }),
          (t.prototype.prepareHits = function () {
            this.offsetTrackers = Object(i.Sb)(
              this.droppableStore,
              function (t) {
                return t.component.buildPositionCaches(), new _(t.el);
              }
            );
          }),
          (t.prototype.releaseHits = function () {
            var t = this.offsetTrackers;
            for (var e in t) t[e].destroy();
            this.offsetTrackers = {};
          }),
          (t.prototype.queryHitForOffset = function (t, e) {
            var n = this.droppableStore,
              r = this.offsetTrackers,
              o = null;
            for (var a in n) {
              var s = n[a].component,
                l = r[a];
              if (l.isWithinClipping(t, e)) {
                var c = l.computeLeft(),
                  d = l.computeTop(),
                  u = t - c,
                  p = e - d,
                  h = l.origRect,
                  f = h.right - h.left,
                  b = h.bottom - h.top;
                if (u >= 0 && u < f && p >= 0 && p < b) {
                  var m = s.queryHit(u, p, f, b);
                  !m ||
                    (s.props.dateProfile &&
                      !Object(i.lc)(
                        s.props.dateProfile.activeRange,
                        m.dateSpan.range
                      )) ||
                    (o && !(m.layer > o.layer)) ||
                    ((m.rect.left += c),
                    (m.rect.right += c),
                    (m.rect.top += d),
                    (m.rect.bottom += d),
                    (o = m));
                }
              }
            }
            return o;
          }),
          t
        );
      })();
    function M(t, e) {
      return (
        (!t && !e) ||
        (Boolean(t) === Boolean(e) && Object(i.Kb)(t.dateSpan, e.dateSpan))
      );
    }
    var O = (function (t) {
        function e(e) {
          var n = t.call(this, e) || this;
          (n.handlePointerDown = function (t) {
            var e = n.dragging;
            e.setIgnoreMove(!n.component.isValidDateDownEl(e.pointer.downEl));
          }),
            (n.handleDragEnd = function (t) {
              var e = n.component.context,
                i = e.calendar,
                r = e.view;
              if (!n.dragging.pointer.wasTouchScroll) {
                var o = n.hitDragging,
                  a = o.initialHit,
                  s = o.finalHit;
                a &&
                  s &&
                  M(a, s) &&
                  i.triggerDateClick(a.dateSpan, a.dayEl, r, t.origEvent);
              }
            });
          var r = e.component;
          (n.dragging = new v(r.el)), (n.dragging.autoScroller.isEnabled = !1);
          var o = (n.hitDragging = new y(n.dragging, Object(i.Gb)(e)));
          return (
            o.emitter.on("pointerdown", n.handlePointerDown),
            o.emitter.on("dragend", n.handleDragEnd),
            n
          );
        }
        return (
          o(e, t),
          (e.prototype.destroy = function () {
            this.dragging.destroy();
          }),
          e
        );
      })(i.n),
      w = (function (t) {
        function e(e) {
          var n = t.call(this, e) || this;
          (n.dragSelection = null),
            (n.handlePointerDown = function (t) {
              var e = n,
                i = e.component,
                r = e.dragging,
                o =
                  i.context.options.selectable &&
                  i.isValidDateDownEl(t.origEvent.target);
              r.setIgnoreMove(!o),
                (r.delay = t.isTouch
                  ? (function (t) {
                      var e = t.context.options,
                        n = e.selectLongPressDelay;
                      return null == n && (n = e.longPressDelay), n;
                    })(i)
                  : null);
            }),
            (n.handleDragStart = function (t) {
              n.component.context.calendar.unselect(t);
            }),
            (n.handleHitUpdate = function (t, e) {
              var r = n.component.context.calendar,
                o = null,
                s = !1;
              t &&
                (((o = (function (t, e, n) {
                  var r = t.dateSpan,
                    o = e.dateSpan,
                    s = [
                      r.range.start,
                      r.range.end,
                      o.range.start,
                      o.range.end,
                    ];
                  s.sort(i.K);
                  for (var l = {}, c = 0, d = n; c < d.length; c++) {
                    var u = (0, d[c])(t, e);
                    if (!1 === u) return null;
                    u && a(l, u);
                  }
                  return (
                    (l.range = { start: s[0], end: s[3] }),
                    (l.allDay = r.allDay),
                    l
                  );
                })(
                  n.hitDragging.initialHit,
                  t,
                  r.pluginSystem.hooks.dateSelectionTransformers
                )) &&
                  n.component.isDateSelectionValid(o)) ||
                  ((s = !0), (o = null))),
                o
                  ? r.dispatch({ type: "SELECT_DATES", selection: o })
                  : e || r.dispatch({ type: "UNSELECT_DATES" }),
                s ? Object(i.kb)() : Object(i.ob)(),
                e || (n.dragSelection = o);
            }),
            (n.handlePointerUp = function (t) {
              n.dragSelection &&
                (n.component.context.calendar.triggerDateSelect(
                  n.dragSelection,
                  t
                ),
                (n.dragSelection = null));
            });
          var r = e.component,
            o = r.context.options,
            s = (n.dragging = new v(r.el));
          (s.touchScrollAllowed = !1),
            (s.minDistance = o.selectMinDistance || 0),
            (s.autoScroller.isEnabled = o.dragScroll);
          var l = (n.hitDragging = new y(n.dragging, Object(i.Gb)(e)));
          return (
            l.emitter.on("pointerdown", n.handlePointerDown),
            l.emitter.on("dragstart", n.handleDragStart),
            l.emitter.on("hitupdate", n.handleHitUpdate),
            l.emitter.on("pointerup", n.handlePointerUp),
            n
          );
        }
        return (
          o(e, t),
          (e.prototype.destroy = function () {
            this.dragging.destroy();
          }),
          e
        );
      })(i.n),
      A = (function (t) {
        function e(n) {
          var r = t.call(this, n) || this;
          (r.subjectSeg = null),
            (r.isDragging = !1),
            (r.eventRange = null),
            (r.relevantEvents = null),
            (r.receivingCalendar = null),
            (r.validMutation = null),
            (r.mutatedRelevantEvents = null),
            (r.handlePointerDown = function (t) {
              var e = t.origEvent.target,
                n = r,
                o = n.component,
                a = n.dragging,
                s = a.mirror,
                l = o.context.options,
                c = o.context.calendar,
                d = (r.subjectSeg = Object(i.xb)(t.subjectEl)),
                u = (r.eventRange = d.eventRange).instance.instanceId;
              (r.relevantEvents = Object(i.zb)(c.state.eventStore, u)),
                (a.minDistance = t.isTouch ? 0 : l.eventDragMinDistance),
                (a.delay =
                  t.isTouch && u !== o.props.eventSelection
                    ? (function (t) {
                        var e = t.context.options,
                          n = e.eventLongPressDelay;
                        return null == n && (n = e.longPressDelay), n;
                      })(o)
                    : null),
                (s.parentNode = c.el),
                (s.revertDuration = l.dragRevertDuration);
              var p = o.isValidSegDownEl(e) && !Object(i.mb)(e, ".fc-resizer");
              a.setIgnoreMove(!p),
                (r.isDragging =
                  p && t.subjectEl.classList.contains("fc-draggable"));
            }),
            (r.handleDragStart = function (t) {
              var e = r.component.context,
                n = e.calendar,
                o = r.eventRange,
                a = o.instance.instanceId;
              t.isTouch
                ? a !== r.component.props.eventSelection &&
                  n.dispatch({ type: "SELECT_EVENT", eventInstanceId: a })
                : n.dispatch({ type: "UNSELECT_EVENT" }),
                r.isDragging &&
                  (n.unselect(t),
                  n.publiclyTrigger("eventDragStart", [
                    {
                      el: r.subjectSeg.el,
                      event: new i.k(n, o.def, o.instance),
                      jsEvent: t.origEvent,
                      view: e.view,
                    },
                  ]));
            }),
            (r.handleHitUpdate = function (t, e) {
              if (r.isDragging) {
                var n = r.relevantEvents,
                  o = r.hitDragging.initialHit,
                  a = r.component.context.calendar,
                  s = null,
                  l = null,
                  c = null,
                  d = !1,
                  u = {
                    affectedEvents: n,
                    mutatedEvents: Object(i.ab)(),
                    isEvent: !0,
                    origSeg: r.subjectSeg,
                  };
                if (t) {
                  var p = t.component;
                  s = p.context.calendar;
                  var h = p.context.options;
                  a === s || (h.editable && h.droppable)
                    ? (l = (function (t, e, n) {
                        var r = t.dateSpan,
                          o = e.dateSpan,
                          a = r.range.start,
                          s = o.range.start,
                          l = {};
                        r.allDay !== o.allDay &&
                          ((l.allDay = o.allDay),
                          (l.hasEnd =
                            e.component.context.options.allDayMaintainDuration),
                          o.allDay && (a = Object(i.sc)(a)));
                        var c = Object(i.gb)(
                          a,
                          s,
                          t.component.context.dateEnv,
                          t.component === e.component
                            ? t.component.largeUnit
                            : null
                        );
                        c.milliseconds && (l.allDay = !1);
                        for (
                          var d = { datesDelta: c, standardProps: l },
                            u = 0,
                            p = n;
                          u < p.length;
                          u++
                        )
                          (0, p[u])(d, t, e);
                        return d;
                      })(
                        o,
                        t,
                        s.pluginSystem.hooks.eventDragMutationMassagers
                      )) &&
                      ((c = Object(i.B)(n, s.eventUiBases, l, s)),
                      (u.mutatedEvents = c),
                      p.isInteractionValid(u) ||
                        ((d = !0),
                        (l = null),
                        (c = null),
                        (u.mutatedEvents = Object(i.ab)())))
                    : (s = null);
                }
                r.displayDrag(s, u),
                  d ? Object(i.kb)() : Object(i.ob)(),
                  e ||
                    (a === s && M(o, t) && (l = null),
                    r.dragging.setMirrorNeedsRevert(!l),
                    r.dragging.setMirrorIsVisible(
                      !t || !document.querySelector(".fc-mirror")
                    ),
                    (r.receivingCalendar = s),
                    (r.validMutation = l),
                    (r.mutatedRelevantEvents = c));
              }
            }),
            (r.handlePointerUp = function () {
              r.isDragging || r.cleanup();
            }),
            (r.handleDragEnd = function (t) {
              if (r.isDragging) {
                var e = r.component.context,
                  n = e.calendar,
                  o = e.view,
                  s = r,
                  l = s.receivingCalendar,
                  c = s.validMutation,
                  d = r.eventRange.def,
                  u = r.eventRange.instance,
                  p = new i.k(n, d, u),
                  h = r.relevantEvents,
                  f = r.mutatedRelevantEvents,
                  b = r.hitDragging.finalHit;
                if (
                  (r.clearDrag(),
                  n.publiclyTrigger("eventDragStop", [
                    {
                      el: r.subjectSeg.el,
                      event: p,
                      jsEvent: t.origEvent,
                      view: o,
                    },
                  ]),
                  c)
                ) {
                  if (l === n) {
                    n.dispatch({ type: "MERGE_EVENTS", eventStore: f });
                    for (
                      var m = {},
                        g = 0,
                        v = n.pluginSystem.hooks.eventDropTransformers;
                      g < v.length;
                      g++
                    ) {
                      var _ = v[g];
                      a(m, _(c, n));
                    }
                    var y = a({}, m, {
                      el: t.subjectEl,
                      delta: c.datesDelta,
                      oldEvent: p,
                      event: new i.k(
                        n,
                        f.defs[d.defId],
                        u ? f.instances[u.instanceId] : null
                      ),
                      revert: function () {
                        n.dispatch({ type: "MERGE_EVENTS", eventStore: h });
                      },
                      jsEvent: t.origEvent,
                      view: o,
                    });
                    n.publiclyTrigger("eventDrop", [y]);
                  } else if (l) {
                    n.publiclyTrigger("eventLeave", [
                      { draggedEl: t.subjectEl, event: p, view: o },
                    ]),
                      n.dispatch({
                        type: "REMOVE_EVENT_INSTANCES",
                        instances: r.mutatedRelevantEvents.instances,
                      }),
                      l.dispatch({
                        type: "MERGE_EVENTS",
                        eventStore: r.mutatedRelevantEvents,
                      }),
                      t.isTouch &&
                        l.dispatch({
                          type: "SELECT_EVENT",
                          eventInstanceId: u.instanceId,
                        });
                    var M = a({}, l.buildDatePointApi(b.dateSpan), {
                      draggedEl: t.subjectEl,
                      jsEvent: t.origEvent,
                      view: b.component,
                    });
                    l.publiclyTrigger("drop", [M]),
                      l.publiclyTrigger("eventReceive", [
                        {
                          draggedEl: t.subjectEl,
                          event: new i.k(
                            l,
                            f.defs[d.defId],
                            f.instances[u.instanceId]
                          ),
                          view: b.component,
                        },
                      ]);
                  }
                } else n.publiclyTrigger("_noEventDrop");
              }
              r.cleanup();
            });
          var o = r.component,
            s = o.context.options,
            l = (r.dragging = new v(o.el));
          (l.pointer.selector = e.SELECTOR),
            (l.touchScrollAllowed = !1),
            (l.autoScroller.isEnabled = s.dragScroll);
          var c = (r.hitDragging = new y(r.dragging, i.Fb));
          return (
            (c.useSubjectCenter = n.useEventCenter),
            c.emitter.on("pointerdown", r.handlePointerDown),
            c.emitter.on("dragstart", r.handleDragStart),
            c.emitter.on("hitupdate", r.handleHitUpdate),
            c.emitter.on("pointerup", r.handlePointerUp),
            c.emitter.on("dragend", r.handleDragEnd),
            r
          );
        }
        return (
          o(e, t),
          (e.prototype.destroy = function () {
            this.dragging.destroy();
          }),
          (e.prototype.displayDrag = function (t, e) {
            var n = this.component.context.calendar,
              r = this.receivingCalendar;
            r &&
              r !== t &&
              (r === n
                ? r.dispatch({
                    type: "SET_EVENT_DRAG",
                    state: {
                      affectedEvents: e.affectedEvents,
                      mutatedEvents: Object(i.ab)(),
                      isEvent: !0,
                      origSeg: e.origSeg,
                    },
                  })
                : r.dispatch({ type: "UNSET_EVENT_DRAG" })),
              t && t.dispatch({ type: "SET_EVENT_DRAG", state: e });
          }),
          (e.prototype.clearDrag = function () {
            var t = this.component.context.calendar,
              e = this.receivingCalendar;
            e && e.dispatch({ type: "UNSET_EVENT_DRAG" }),
              t !== e && t.dispatch({ type: "UNSET_EVENT_DRAG" });
          }),
          (e.prototype.cleanup = function () {
            (this.subjectSeg = null),
              (this.isDragging = !1),
              (this.eventRange = null),
              (this.relevantEvents = null),
              (this.receivingCalendar = null),
              (this.validMutation = null),
              (this.mutatedRelevantEvents = null);
          }),
          (e.SELECTOR = ".fc-draggable, .fc-resizable"),
          e
        );
      })(i.n),
      x = (function (t) {
        function e(e) {
          var n = t.call(this, e) || this;
          (n.draggingSeg = null),
            (n.eventRange = null),
            (n.relevantEvents = null),
            (n.validMutation = null),
            (n.mutatedRelevantEvents = null),
            (n.handlePointerDown = function (t) {
              var e = n.component,
                i = n.querySeg(t),
                r = (n.eventRange = i.eventRange);
              (n.dragging.minDistance = e.context.options.eventDragMinDistance),
                n.dragging.setIgnoreMove(
                  !n.component.isValidSegDownEl(t.origEvent.target) ||
                    (t.isTouch &&
                      n.component.props.eventSelection !==
                        r.instance.instanceId)
                );
            }),
            (n.handleDragStart = function (t) {
              var e = n.component.context,
                r = e.calendar,
                o = e.view,
                a = n.eventRange;
              (n.relevantEvents = Object(i.zb)(
                r.state.eventStore,
                n.eventRange.instance.instanceId
              )),
                (n.draggingSeg = n.querySeg(t)),
                r.unselect(),
                r.publiclyTrigger("eventResizeStart", [
                  {
                    el: n.draggingSeg.el,
                    event: new i.k(r, a.def, a.instance),
                    jsEvent: t.origEvent,
                    view: o,
                  },
                ]);
            }),
            (n.handleHitUpdate = function (t, e, r) {
              var o = n.component.context.calendar,
                s = n.relevantEvents,
                l = n.hitDragging.initialHit,
                c = n.eventRange.instance,
                d = null,
                u = null,
                p = !1,
                h = {
                  affectedEvents: s,
                  mutatedEvents: Object(i.ab)(),
                  isEvent: !0,
                  origSeg: n.draggingSeg,
                };
              t &&
                (d = (function (t, e, n, r, o) {
                  for (
                    var s = t.component.context.dateEnv,
                      l = t.dateSpan.range.start,
                      c = e.dateSpan.range.start,
                      d = Object(i.gb)(l, c, s, t.component.largeUnit),
                      u = {},
                      p = 0,
                      h = o;
                    p < h.length;
                    p++
                  ) {
                    var f = (0, h[p])(t, e);
                    if (!1 === f) return null;
                    f && a(u, f);
                  }
                  if (n) {
                    if (s.add(r.start, d) < r.end) return (u.startDelta = d), u;
                  } else if (s.add(r.end, d) > r.start)
                    return (u.endDelta = d), u;
                  return null;
                })(
                  l,
                  t,
                  r.subjectEl.classList.contains("fc-start-resizer"),
                  c.range,
                  o.pluginSystem.hooks.eventResizeJoinTransforms
                )),
                d &&
                  ((u = Object(i.B)(s, o.eventUiBases, d, o)),
                  (h.mutatedEvents = u),
                  n.component.isInteractionValid(h) ||
                    ((p = !0),
                    (d = null),
                    (u = null),
                    (h.mutatedEvents = null))),
                u
                  ? o.dispatch({ type: "SET_EVENT_RESIZE", state: h })
                  : o.dispatch({ type: "UNSET_EVENT_RESIZE" }),
                p ? Object(i.kb)() : Object(i.ob)(),
                e ||
                  (d && M(l, t) && (d = null),
                  (n.validMutation = d),
                  (n.mutatedRelevantEvents = u));
            }),
            (n.handleDragEnd = function (t) {
              var e = n.component.context,
                r = e.calendar,
                o = e.view,
                a = n.eventRange.def,
                s = n.eventRange.instance,
                l = new i.k(r, a, s),
                c = n.relevantEvents,
                d = n.mutatedRelevantEvents;
              r.publiclyTrigger("eventResizeStop", [
                {
                  el: n.draggingSeg.el,
                  event: l,
                  jsEvent: t.origEvent,
                  view: o,
                },
              ]),
                n.validMutation
                  ? (r.dispatch({ type: "MERGE_EVENTS", eventStore: d }),
                    r.publiclyTrigger("eventResize", [
                      {
                        el: n.draggingSeg.el,
                        startDelta:
                          n.validMutation.startDelta || Object(i.Y)(0),
                        endDelta: n.validMutation.endDelta || Object(i.Y)(0),
                        prevEvent: l,
                        event: new i.k(
                          r,
                          d.defs[a.defId],
                          s ? d.instances[s.instanceId] : null
                        ),
                        revert: function () {
                          r.dispatch({ type: "MERGE_EVENTS", eventStore: c });
                        },
                        jsEvent: t.origEvent,
                        view: o,
                      },
                    ]))
                  : r.publiclyTrigger("_noEventResize"),
                (n.draggingSeg = null),
                (n.relevantEvents = null),
                (n.validMutation = null);
            });
          var r = e.component,
            o = (n.dragging = new v(r.el));
          (o.pointer.selector = ".fc-resizer"),
            (o.touchScrollAllowed = !1),
            (o.autoScroller.isEnabled = r.context.options.dragScroll);
          var s = (n.hitDragging = new y(n.dragging, Object(i.Gb)(e)));
          return (
            s.emitter.on("pointerdown", n.handlePointerDown),
            s.emitter.on("dragstart", n.handleDragStart),
            s.emitter.on("hitupdate", n.handleHitUpdate),
            s.emitter.on("dragend", n.handleDragEnd),
            n
          );
        }
        return (
          o(e, t),
          (e.prototype.destroy = function () {
            this.dragging.destroy();
          }),
          (e.prototype.querySeg = function (t) {
            return Object(i.xb)(
              Object(i.mb)(t.subjectEl, this.component.fgSegSelector)
            );
          }),
          e
        );
      })(i.n),
      z = (function () {
        function t(t) {
          var e = this;
          (this.isRecentPointerDateSelect = !1),
            (this.onSelect = function (t) {
              t.jsEvent && (e.isRecentPointerDateSelect = !0);
            }),
            (this.onDocumentPointerUp = function (t) {
              var n = e,
                r = n.calendar,
                o = n.documentPointer,
                a = r.state;
              if (!o.wasTouchScroll) {
                if (a.dateSelection && !e.isRecentPointerDateSelect) {
                  var s = r.viewOpt("unselectAuto"),
                    l = r.viewOpt("unselectCancel");
                  !s || (s && Object(i.mb)(o.downEl, l)) || r.unselect(t);
                }
                a.eventSelection &&
                  !Object(i.mb)(o.downEl, A.SELECTOR) &&
                  r.dispatch({ type: "UNSELECT_EVENT" });
              }
              e.isRecentPointerDateSelect = !1;
            }),
            (this.calendar = t);
          var n = (this.documentPointer = new d(document));
          (n.shouldIgnoreMove = !0),
            (n.shouldWatchScroll = !1),
            n.emitter.on("pointerup", this.onDocumentPointerUp),
            t.on("select", this.onSelect);
        }
        return (
          (t.prototype.destroy = function () {
            this.calendar.off("select", this.onSelect),
              this.documentPointer.destroy();
          }),
          t
        );
      })();
    !(function () {
      function t(t, e) {
        var n = this;
        (this.receivingCalendar = null),
          (this.droppableEvent = null),
          (this.suppliedDragMeta = null),
          (this.dragMeta = null),
          (this.handleDragStart = function (t) {
            n.dragMeta = n.buildDragMeta(t.subjectEl);
          }),
          (this.handleHitUpdate = function (t, e, r) {
            var o = n.hitDragging.dragging,
              s = null,
              l = null,
              c = !1,
              d = {
                affectedEvents: Object(i.ab)(),
                mutatedEvents: Object(i.ab)(),
                isEvent: n.dragMeta.create,
                origSeg: null,
              };
            t &&
              ((s = t.component.context.calendar),
              n.canDropElOnCalendar(r.subjectEl, s) &&
                ((l = (function (t, e, n) {
                  for (
                    var r = a({}, e.leftoverProps),
                      o = 0,
                      s = n.pluginSystem.hooks.externalDefTransforms;
                    o < s.length;
                    o++
                  ) {
                    var l = s[o];
                    a(r, l(t, e));
                  }
                  var c = Object(i.cc)(
                      r,
                      e.sourceId,
                      t.allDay,
                      n.opt("forceEventDuration") || Boolean(e.duration),
                      n
                    ),
                    d = t.range.start;
                  t.allDay &&
                    e.startTime &&
                    (d = n.dateEnv.add(d, e.startTime));
                  var u = e.duration
                    ? n.dateEnv.add(d, e.duration)
                    : n.getDefaultEventEnd(t.allDay, d);
                  return {
                    def: c,
                    instance: Object(i.bb)(c.defId, { start: d, end: u }),
                  };
                })(t.dateSpan, n.dragMeta, s)),
                (d.mutatedEvents = Object(i.pb)(l)),
                (c = !Object(i.Mb)(d, s)) &&
                  ((d.mutatedEvents = Object(i.ab)()), (l = null)))),
              n.displayDrag(s, d),
              o.setMirrorIsVisible(
                e || !l || !document.querySelector(".fc-mirror")
              ),
              c ? Object(i.kb)() : Object(i.ob)(),
              e ||
                (o.setMirrorNeedsRevert(!l),
                (n.receivingCalendar = s),
                (n.droppableEvent = l));
          }),
          (this.handleDragEnd = function (t) {
            var e = n,
              r = e.receivingCalendar,
              o = e.droppableEvent;
            if ((n.clearDrag(), r && o)) {
              var s = n.hitDragging.finalHit,
                l = s.component.context.view,
                c = n.dragMeta,
                d = a({}, r.buildDatePointApi(s.dateSpan), {
                  draggedEl: t.subjectEl,
                  jsEvent: t.origEvent,
                  view: l,
                });
              r.publiclyTrigger("drop", [d]),
                c.create &&
                  (r.dispatch({
                    type: "MERGE_EVENTS",
                    eventStore: Object(i.pb)(o),
                  }),
                  t.isTouch &&
                    r.dispatch({
                      type: "SELECT_EVENT",
                      eventInstanceId: o.instance.instanceId,
                    }),
                  r.publiclyTrigger("eventReceive", [
                    {
                      draggedEl: t.subjectEl,
                      event: new i.k(r, o.def, o.instance),
                      view: l,
                    },
                  ]));
            }
            (n.receivingCalendar = null), (n.droppableEvent = null);
          });
        var r = (this.hitDragging = new y(t, i.Fb));
        (r.requireInitial = !1),
          r.emitter.on("dragstart", this.handleDragStart),
          r.emitter.on("hitupdate", this.handleHitUpdate),
          r.emitter.on("dragend", this.handleDragEnd),
          (this.suppliedDragMeta = e);
      }
      (t.prototype.buildDragMeta = function (t) {
        return "object" == typeof this.suppliedDragMeta
          ? Object(i.bc)(this.suppliedDragMeta)
          : "function" == typeof this.suppliedDragMeta
          ? Object(i.bc)(this.suppliedDragMeta(t))
          : ((e = (function (t, e) {
              var n = i.W.dataAttrPrefix,
                r = (n ? n + "-" : "") + "event";
              return t.getAttribute("data-" + r) || "";
            })(t)),
            (n = e ? JSON.parse(e) : { create: !1 }),
            Object(i.bc)(n));
        var e, n;
      }),
        (t.prototype.displayDrag = function (t, e) {
          var n = this.receivingCalendar;
          n && n !== t && n.dispatch({ type: "UNSET_EVENT_DRAG" }),
            t && t.dispatch({ type: "SET_EVENT_DRAG", state: e });
        }),
        (t.prototype.clearDrag = function () {
          this.receivingCalendar &&
            this.receivingCalendar.dispatch({ type: "UNSET_EVENT_DRAG" });
        }),
        (t.prototype.canDropElOnCalendar = function (t, e) {
          var n = e.opt("dropAccept");
          return "function" == typeof n
            ? n(t)
            : "string" != typeof n || !n || Boolean(Object(i.nb)(t, n));
        });
    })(),
      (i.W.dataAttrPrefix = ""),
      (function (t) {
        function e(e) {
          var n = t.call(this, e) || this;
          (n.shouldIgnoreMove = !1),
            (n.mirrorSelector = ""),
            (n.currentMirrorEl = null),
            (n.handlePointerDown = function (t) {
              n.emitter.trigger("pointerdown", t),
                n.shouldIgnoreMove || n.emitter.trigger("dragstart", t);
            }),
            (n.handlePointerMove = function (t) {
              n.shouldIgnoreMove || n.emitter.trigger("dragmove", t);
            }),
            (n.handlePointerUp = function (t) {
              n.emitter.trigger("pointerup", t),
                n.shouldIgnoreMove || n.emitter.trigger("dragend", t);
            });
          var i = (n.pointer = new d(e));
          return (
            i.emitter.on("pointerdown", n.handlePointerDown),
            i.emitter.on("pointermove", n.handlePointerMove),
            i.emitter.on("pointerup", n.handlePointerUp),
            n
          );
        }
        o(e, t),
          (e.prototype.destroy = function () {
            this.pointer.destroy();
          }),
          (e.prototype.setIgnoreMove = function (t) {
            this.shouldIgnoreMove = t;
          }),
          (e.prototype.setMirrorIsVisible = function (t) {
            if (t)
              this.currentMirrorEl &&
                ((this.currentMirrorEl.style.visibility = ""),
                (this.currentMirrorEl = null));
            else {
              var e = this.mirrorSelector
                ? document.querySelector(this.mirrorSelector)
                : null;
              e &&
                ((this.currentMirrorEl = e), (e.style.visibility = "hidden"));
            }
          });
      })(i.h);
    var C = Object(i.db)({
      componentInteractions: [O, w, A, x],
      calendarInteractions: [z],
      elementDraggingImpl: v,
    });
    e.a = C;
  },
  function (t, e, n) {
    "use strict";
    var i = n(10),
      r = function (t, e) {
        return (r =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (t, e) {
              t.__proto__ = e;
            }) ||
          function (t, e) {
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
          })(t, e);
      };
    function o(t, e) {
      function n() {
        this.constructor = t;
      }
      r(t, e),
        (t.prototype =
          null === e
            ? Object.create(e)
            : ((n.prototype = e.prototype), new n()));
    }
    var a = function () {
        return (a =
          Object.assign ||
          function (t) {
            for (var e, n = 1, i = arguments.length; n < i; n++)
              for (var r in (e = arguments[n]))
                Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
            return t;
          }).apply(this, arguments);
      },
      s = (function (t) {
        function e() {
          return (null !== t && t.apply(this, arguments)) || this;
        }
        return (
          o(e, t),
          (e.prototype.buildRenderRange = function (e, n, r) {
            var o,
              a = this.dateEnv,
              s = t.prototype.buildRenderRange.call(this, e, n, r),
              l = s.start,
              c = s.end;
            if (
              (/^(year|month)$/.test(n) &&
                ((l = a.startOfWeek(l)),
                (o = a.startOfWeek(c)).valueOf() !== c.valueOf() &&
                  (c = Object(i.x)(o, 1))),
              this.options.monthMode && this.options.fixedWeekCount)
            ) {
              var d = Math.ceil(Object(i.ib)(l, c));
              c = Object(i.x)(c, 6 - d);
            }
            return { start: l, end: c };
          }),
          e
        );
      })(i.d),
      l = (function () {
        function t(t) {
          var e = this;
          (this.isHidden = !0),
            (this.margin = 10),
            (this.documentMousedown = function (t) {
              e.el && !e.el.contains(t.target) && e.hide();
            }),
            (this.options = t);
        }
        return (
          (t.prototype.show = function () {
            this.isHidden &&
              (this.el || this.render(),
              (this.el.style.display = ""),
              this.position(),
              (this.isHidden = !1),
              this.trigger("show"));
          }),
          (t.prototype.hide = function () {
            this.isHidden ||
              ((this.el.style.display = "none"),
              (this.isHidden = !0),
              this.trigger("hide"));
          }),
          (t.prototype.render = function () {
            var t = this,
              e = this.options,
              n = (this.el = Object(i.Z)("div", {
                className: "fc-popover " + (e.className || ""),
                style: { top: "0", left: "0" },
              }));
            "function" == typeof e.content && e.content(n),
              e.parentEl.appendChild(n),
              Object(i.Rb)(n, "click", ".fc-close", function (e) {
                t.hide();
              }),
              e.autoHide &&
                document.addEventListener("mousedown", this.documentMousedown);
          }),
          (t.prototype.destroy = function () {
            this.hide(),
              this.el && (Object(i.pc)(this.el), (this.el = null)),
              document.removeEventListener("mousedown", this.documentMousedown);
          }),
          (t.prototype.position = function () {
            var t,
              e,
              n = this.options,
              r = this.el,
              o = r.getBoundingClientRect(),
              a = Object(i.U)(r.offsetParent),
              s = Object(i.M)(n.parentEl);
            (t = n.top || 0),
              (e =
                void 0 !== n.left
                  ? n.left
                  : void 0 !== n.right
                  ? n.right - o.width
                  : 0),
              (t = Math.min(t, s.bottom - o.height - this.margin)),
              (t = Math.max(t, s.top + this.margin)),
              (e = Math.min(e, s.right - o.width - this.margin)),
              (e = Math.max(e, s.left + this.margin)),
              Object(i.C)(r, { top: t - a.top, left: e - a.left });
          }),
          (t.prototype.trigger = function (t) {
            this.options[t] &&
              this.options[t].apply(
                this,
                Array.prototype.slice.call(arguments, 1)
              );
          }),
          t
        );
      })(),
      c = (function (t) {
        function e() {
          return (null !== t && t.apply(this, arguments)) || this;
        }
        return (
          o(e, t),
          (e.prototype.renderSegHtml = function (t, e) {
            var n,
              r,
              o = this.context,
              a = t.eventRange,
              s = a.def,
              l = a.ui,
              c = s.allDay,
              d = Object(i.O)(o, s, l),
              u = c && t.isStart && Object(i.Q)(o, s, l),
              p = c && t.isEnd && Object(i.P)(o, s, l),
              h = this.getSegClasses(t, d, u || p, e),
              f = Object(i.eb)(this.getSkinCss(l)),
              b = "";
            return (
              h.unshift("fc-day-grid-event", "fc-h-event"),
              t.isStart &&
                (n = this.getTimeText(a)) &&
                (b = '<span class="fc-time">' + Object(i.Cb)(n) + "</span>"),
              (r =
                '<span class="fc-title">' +
                (Object(i.Cb)(s.title || "") || "&nbsp;") +
                "</span>"),
              '<a class="' +
                h.join(" ") +
                '"' +
                (s.url ? ' href="' + Object(i.Cb)(s.url) + '"' : "") +
                (f ? ' style="' + f + '"' : "") +
                '><div class="fc-content">' +
                ("rtl" === o.options.dir ? r + " " + b : b + " " + r) +
                "</div>" +
                (u ? '<div class="fc-resizer fc-start-resizer"></div>' : "") +
                (p ? '<div class="fc-resizer fc-end-resizer"></div>' : "") +
                "</a>"
            );
          }),
          (e.prototype.computeEventTimeFormat = function () {
            return {
              hour: "numeric",
              minute: "2-digit",
              omitZeroMinute: !0,
              meridiem: "narrow",
            };
          }),
          (e.prototype.computeDisplayEventEnd = function () {
            return !1;
          }),
          e
        );
      })(i.l),
      d = (function (t) {
        function e(e) {
          var n = t.call(this) || this;
          return (n.dayGrid = e), n;
        }
        return (
          o(e, t),
          (e.prototype.attachSegs = function (t, e) {
            var n = (this.rowStructs = this.renderSegRows(t));
            this.dayGrid.rowEls.forEach(function (t, e) {
              t.querySelector(".fc-content-skeleton > table").appendChild(
                n[e].tbodyEl
              );
            }),
              e || this.dayGrid.removeSegPopover();
          }),
          (e.prototype.detachSegs = function () {
            for (var t, e = this.rowStructs || []; (t = e.pop()); )
              Object(i.pc)(t.tbodyEl);
            this.rowStructs = null;
          }),
          (e.prototype.renderSegRows = function (t) {
            var e,
              n,
              i = [];
            for (e = this.groupSegRows(t), n = 0; n < e.length; n++)
              i.push(this.renderSegRow(n, e[n]));
            return i;
          }),
          (e.prototype.renderSegRow = function (t, e) {
            var n,
              r,
              o,
              a,
              s,
              l,
              c,
              d = this.context.isRtl,
              u = this.dayGrid,
              p = u.colCnt,
              h = this.buildSegLevels(e),
              f = Math.max(1, h.length),
              b = document.createElement("tbody"),
              m = [],
              g = [],
              v = [];
            function _(t) {
              for (; o < t; )
                (c = (v[n - 1] || [])[o])
                  ? (c.rowSpan = (c.rowSpan || 1) + 1)
                  : ((c = document.createElement("td")), a.appendChild(c)),
                  (g[n][o] = c),
                  (v[n][o] = c),
                  o++;
            }
            for (n = 0; n < f; n++) {
              if (
                ((r = h[n]),
                (o = 0),
                (a = document.createElement("tr")),
                m.push([]),
                g.push([]),
                v.push([]),
                r)
              )
                for (s = 0; s < r.length; s++) {
                  l = r[s];
                  var y = d ? p - 1 - l.lastCol : l.firstCol,
                    M = d ? p - 1 - l.firstCol : l.lastCol;
                  for (
                    _(y),
                      c = Object(i.Z)(
                        "td",
                        { className: "fc-event-container" },
                        l.el
                      ),
                      y !== M ? (c.colSpan = M - y + 1) : (v[n][o] = c);
                    o <= M;

                  )
                    (g[n][o] = c), (m[n][o] = l), o++;
                  a.appendChild(c);
                }
              _(p);
              var O = u.renderProps.renderIntroHtml();
              O && (d ? Object(i.A)(a, O) : Object(i.fc)(a, O)),
                b.appendChild(a);
            }
            return {
              row: t,
              tbodyEl: b,
              cellMatrix: g,
              segMatrix: m,
              segLevels: h,
              segs: e,
            };
          }),
          (e.prototype.buildSegLevels = function (t) {
            var e,
              n,
              i,
              r = this.context.isRtl,
              o = this.dayGrid.colCnt,
              a = [];
            for (t = this.sortEventSegs(t), e = 0; e < t.length; e++) {
              for (n = t[e], i = 0; i < a.length && u(n, a[i]); i++);
              (n.level = i),
                (n.leftCol = r ? o - 1 - n.lastCol : n.firstCol),
                (n.rightCol = r ? o - 1 - n.firstCol : n.lastCol),
                (a[i] || (a[i] = [])).push(n);
            }
            for (i = 0; i < a.length; i++) a[i].sort(p);
            return a;
          }),
          (e.prototype.groupSegRows = function (t) {
            var e,
              n = [];
            for (e = 0; e < this.dayGrid.rowCnt; e++) n.push([]);
            for (e = 0; e < t.length; e++) n[t[e].row].push(t[e]);
            return n;
          }),
          (e.prototype.computeDisplayEventEnd = function () {
            return 1 === this.dayGrid.colCnt;
          }),
          e
        );
      })(c);
    function u(t, e) {
      var n, i;
      for (n = 0; n < e.length; n++)
        if ((i = e[n]).firstCol <= t.lastCol && i.lastCol >= t.firstCol)
          return !0;
      return !1;
    }
    function p(t, e) {
      return t.leftCol - e.leftCol;
    }
    var h = (function (t) {
        function e() {
          return (null !== t && t.apply(this, arguments)) || this;
        }
        return (
          o(e, t),
          (e.prototype.attachSegs = function (t, e) {
            var n = e.sourceSeg,
              r = (this.rowStructs = this.renderSegRows(t));
            this.dayGrid.rowEls.forEach(function (t, e) {
              var o,
                a,
                s = Object(i.Db)(
                  '<div class="fc-mirror-skeleton"><table></table></div>'
                );
              n && n.row === e
                ? (o = n.el)
                : (o = t.querySelector(".fc-content-skeleton tbody")) ||
                  (o = t.querySelector(".fc-content-skeleton table")),
                (a =
                  o.getBoundingClientRect().top -
                  t.getBoundingClientRect().top),
                (s.style.top = a + "px"),
                s.querySelector("table").appendChild(r[e].tbodyEl),
                t.appendChild(s);
            });
          }),
          e
        );
      })(d),
      f = (function (t) {
        function e(e) {
          var n = t.call(this) || this;
          return (n.fillSegTag = "td"), (n.dayGrid = e), n;
        }
        return (
          o(e, t),
          (e.prototype.renderSegs = function (e, n, i) {
            "bgEvent" === e &&
              (i = i.filter(function (t) {
                return t.eventRange.def.allDay;
              })),
              t.prototype.renderSegs.call(this, e, n, i);
          }),
          (e.prototype.attachSegs = function (t, e) {
            var n,
              i,
              r,
              o = [];
            for (n = 0; n < e.length; n++)
              (i = e[n]),
                (r = this.renderFillRow(t, i)),
                this.dayGrid.rowEls[i.row].appendChild(r),
                o.push(r);
            return o;
          }),
          (e.prototype.renderFillRow = function (t, e) {
            var n,
              r,
              o,
              a = this.dayGrid,
              s = this.context.isRtl,
              l = a.colCnt,
              c = s ? l - 1 - e.lastCol : e.firstCol,
              d = (s ? l - 1 - e.firstCol : e.lastCol) + 1;
            (n = "businessHours" === t ? "bgevent" : t.toLowerCase()),
              (o = (r = Object(i.Db)(
                '<div class="fc-' +
                  n +
                  '-skeleton"><table><tr></tr></table></div>'
              )).getElementsByTagName("tr")[0]),
              c > 0 &&
                Object(i.A)(
                  o,
                  new Array(c + 1).join('<td style="pointer-events:none"></td>')
                ),
              (e.el.colSpan = d - c),
              o.appendChild(e.el),
              d < l &&
                Object(i.A)(
                  o,
                  new Array(l - d + 1).join(
                    '<td style="pointer-events:none"></td>'
                  )
                );
            var u = a.renderProps.renderIntroHtml();
            return u && (s ? Object(i.A)(o, u) : Object(i.fc)(o, u)), r;
          }),
          e
        );
      })(i.m),
      b = (function (t) {
        function e(e) {
          var n = t.call(this, e) || this,
            r = (n.eventRenderer = new m(n)),
            o = (n.renderFrame = Object(i.Wb)(n._renderFrame));
          return (
            (n.renderFgEvents = Object(i.Wb)(
              r.renderSegs.bind(r),
              r.unrender.bind(r),
              [o]
            )),
            (n.renderEventSelection = Object(i.Wb)(
              r.selectByInstanceId.bind(r),
              r.unselectByInstanceId.bind(r),
              [n.renderFgEvents]
            )),
            (n.renderEventDrag = Object(i.Wb)(
              r.hideByHash.bind(r),
              r.showByHash.bind(r),
              [o]
            )),
            (n.renderEventResize = Object(i.Wb)(
              r.hideByHash.bind(r),
              r.showByHash.bind(r),
              [o]
            )),
            n
          );
        }
        return (
          o(e, t),
          (e.prototype.firstContext = function (t) {
            t.calendar.registerInteractiveComponent(this, {
              el: this.el,
              useEventCenter: !1,
            });
          }),
          (e.prototype.render = function (t, e) {
            this.renderFrame(t.date),
              this.renderFgEvents(e, t.fgSegs),
              this.renderEventSelection(t.eventSelection),
              this.renderEventDrag(t.eventDragInstances),
              this.renderEventResize(t.eventResizeInstances);
          }),
          (e.prototype.destroy = function () {
            t.prototype.destroy.call(this),
              this.renderFrame.unrender(),
              this.context.calendar.unregisterInteractiveComponent(this);
          }),
          (e.prototype._renderFrame = function (t) {
            var e = this.context,
              n = e.theme,
              r = e.dateEnv,
              o = e.options,
              a = r.format(t, Object(i.cb)(o.dayPopoverFormat));
            (this.el.innerHTML =
              '<div class="fc-header ' +
              n.getClass("popoverHeader") +
              '"><span class="fc-title">' +
              Object(i.Cb)(a) +
              '</span><span class="fc-close ' +
              n.getIconClass("close") +
              '"></span></div><div class="fc-body ' +
              n.getClass("popoverContent") +
              '"><div class="fc-event-container"></div></div>'),
              (this.segContainerEl = this.el.querySelector(
                ".fc-event-container"
              ));
          }),
          (e.prototype.queryHit = function (t, e, n, r) {
            var o = this.props.date;
            if (t < n && e < r)
              return {
                component: this,
                dateSpan: {
                  allDay: !0,
                  range: { start: o, end: Object(i.v)(o, 1) },
                },
                dayEl: this.el,
                rect: { left: 0, top: 0, right: n, bottom: r },
                layer: 1,
              };
          }),
          e
        );
      })(i.c),
      m = (function (t) {
        function e(e) {
          var n = t.call(this) || this;
          return (n.dayTile = e), n;
        }
        return (
          o(e, t),
          (e.prototype.attachSegs = function (t) {
            for (var e = 0, n = t; e < n.length; e++) {
              var i = n[e];
              this.dayTile.segContainerEl.appendChild(i.el);
            }
          }),
          (e.prototype.detachSegs = function (t) {
            for (var e = 0, n = t; e < n.length; e++) {
              var r = n[e];
              Object(i.pc)(r.el);
            }
          }),
          e
        );
      })(c),
      g = (function () {
        function t(t) {
          this.context = t;
        }
        return (
          (t.prototype.renderHtml = function (t) {
            var e = [];
            t.renderIntroHtml && e.push(t.renderIntroHtml());
            for (var n = 0, i = t.cells; n < i.length; n++) {
              var r = i[n];
              e.push(v(r.date, t.dateProfile, this.context, r.htmlAttrs));
            }
            return (
              t.cells.length ||
                e.push(
                  '<td class="fc-day ' +
                    this.context.theme.getClass("widgetContent") +
                    '"></td>'
                ),
              "rtl" === this.context.options.dir && e.reverse(),
              "<tr>" + e.join("") + "</tr>"
            );
          }),
          t
        );
      })();
    function v(t, e, n, r) {
      var o = n.dateEnv,
        a = n.theme,
        s = Object(i.kc)(e.activeRange, t),
        l = Object(i.wb)(t, e, n);
      return (
        l.unshift("fc-day", a.getClass("widgetContent")),
        '<td class="' +
          l.join(" ") +
          '"' +
          (s ? ' data-date="' + o.formatIso(t, { omitTime: !0 }) + '"' : "") +
          (r ? " " + r : "") +
          "></td>"
      );
    }
    var _ = Object(i.cb)({ day: "numeric" }),
      y = Object(i.cb)({ week: "numeric" }),
      M = (function (t) {
        function e(e, n) {
          var r = t.call(this, e) || this;
          (r.bottomCoordPadding = 0),
            (r.isCellSizesDirty = !1),
            (r.renderProps = n);
          var o = (r.eventRenderer = new d(r)),
            a = (r.fillRenderer = new f(r));
          r.mirrorRenderer = new h(r);
          var s = (r.renderCells = Object(i.Wb)(
            r._renderCells,
            r._unrenderCells
          ));
          return (
            (r.renderBusinessHours = Object(i.Wb)(
              a.renderSegs.bind(a, "businessHours"),
              a.unrender.bind(a, "businessHours"),
              [s]
            )),
            (r.renderDateSelection = Object(i.Wb)(
              a.renderSegs.bind(a, "highlight"),
              a.unrender.bind(a, "highlight"),
              [s]
            )),
            (r.renderBgEvents = Object(i.Wb)(
              a.renderSegs.bind(a, "bgEvent"),
              a.unrender.bind(a, "bgEvent"),
              [s]
            )),
            (r.renderFgEvents = Object(i.Wb)(
              o.renderSegs.bind(o),
              o.unrender.bind(o),
              [s]
            )),
            (r.renderEventSelection = Object(i.Wb)(
              o.selectByInstanceId.bind(o),
              o.unselectByInstanceId.bind(o),
              [r.renderFgEvents]
            )),
            (r.renderEventDrag = Object(i.Wb)(
              r._renderEventDrag,
              r._unrenderEventDrag,
              [s]
            )),
            (r.renderEventResize = Object(i.Wb)(
              r._renderEventResize,
              r._unrenderEventResize,
              [s]
            )),
            r
          );
        }
        return (
          o(e, t),
          (e.prototype.render = function (t, e) {
            var n = t.cells;
            (this.rowCnt = n.length),
              (this.colCnt = n[0].length),
              this.renderCells(n, t.isRigid),
              this.renderBusinessHours(e, t.businessHourSegs),
              this.renderDateSelection(e, t.dateSelectionSegs),
              this.renderBgEvents(e, t.bgEventSegs),
              this.renderFgEvents(e, t.fgEventSegs),
              this.renderEventSelection(t.eventSelection),
              this.renderEventDrag(t.eventDrag),
              this.renderEventResize(t.eventResize),
              this.segPopoverTile && this.updateSegPopoverTile();
          }),
          (e.prototype.destroy = function () {
            t.prototype.destroy.call(this), this.renderCells.unrender();
          }),
          (e.prototype.getCellRange = function (t, e) {
            var n = this.props.cells[t][e].date;
            return { start: n, end: Object(i.v)(n, 1) };
          }),
          (e.prototype.updateSegPopoverTile = function (t, e) {
            var n = this.props;
            this.segPopoverTile.receiveProps(
              {
                date: t || this.segPopoverTile.props.date,
                fgSegs: e || this.segPopoverTile.props.fgSegs,
                eventSelection: n.eventSelection,
                eventDragInstances: n.eventDrag
                  ? n.eventDrag.affectedInstances
                  : null,
                eventResizeInstances: n.eventResize
                  ? n.eventResize.affectedInstances
                  : null,
              },
              this.context
            );
          }),
          (e.prototype._renderCells = function (t, e) {
            var n,
              r,
              o = this.context,
              a = o.calendar,
              s = o.view,
              l = o.isRtl,
              c = o.dateEnv,
              d = this.rowCnt,
              u = this.colCnt,
              p = "";
            for (n = 0; n < d; n++) p += this.renderDayRowHtml(n, e);
            for (
              this.el.innerHTML = p,
                this.rowEls = Object(i.sb)(this.el, ".fc-row"),
                this.cellEls = Object(i.sb)(
                  this.el,
                  ".fc-day, .fc-disabled-day"
                ),
                l && this.cellEls.reverse(),
                this.rowPositions = new i.o(this.el, this.rowEls, !1, !0),
                this.colPositions = new i.o(
                  this.el,
                  this.cellEls.slice(0, u),
                  !0,
                  !1
                ),
                n = 0;
              n < d;
              n++
            )
              for (r = 0; r < u; r++)
                a.publiclyTrigger("dayRender", [
                  {
                    date: c.toDate(t[n][r].date),
                    el: this.getCellEl(n, r),
                    view: s,
                  },
                ]);
            this.isCellSizesDirty = !0;
          }),
          (e.prototype._unrenderCells = function () {
            this.removeSegPopover();
          }),
          (e.prototype.renderDayRowHtml = function (t, e) {
            var n = this.context.theme,
              i = ["fc-row", "fc-week", n.getClass("dayRow")];
            e && i.push("fc-rigid");
            var r = new g(this.context);
            return (
              '<div class="' +
              i.join(" ") +
              '"><div class="fc-bg"><table class="' +
              n.getClass("tableGrid") +
              '">' +
              r.renderHtml({
                cells: this.props.cells[t],
                dateProfile: this.props.dateProfile,
                renderIntroHtml: this.renderProps.renderBgIntroHtml,
              }) +
              '</table></div><div class="fc-content-skeleton"><table>' +
              (this.getIsNumbersVisible()
                ? "<thead>" + this.renderNumberTrHtml(t) + "</thead>"
                : "") +
              "</table></div></div>"
            );
          }),
          (e.prototype.getIsNumbersVisible = function () {
            return (
              this.getIsDayNumbersVisible() ||
              this.renderProps.cellWeekNumbersVisible ||
              this.renderProps.colWeekNumbersVisible
            );
          }),
          (e.prototype.getIsDayNumbersVisible = function () {
            return this.rowCnt > 1;
          }),
          (e.prototype.renderNumberTrHtml = function (t) {
            var e = this.context.isRtl,
              n = this.renderProps.renderNumberIntroHtml(t, this);
            return (
              "<tr>" +
              (e ? "" : n) +
              this.renderNumberCellsHtml(t) +
              (e ? n : "") +
              "</tr>"
            );
          }),
          (e.prototype.renderNumberCellsHtml = function (t) {
            var e,
              n,
              i = [];
            for (e = 0; e < this.colCnt; e++)
              (n = this.props.cells[t][e].date),
                i.push(this.renderNumberCellHtml(n));
            return this.context.isRtl && i.reverse(), i.join("");
          }),
          (e.prototype.renderNumberCellHtml = function (t) {
            var e,
              n,
              r = this.context,
              o = r.dateEnv,
              a = r.options,
              s = "",
              l = Object(i.kc)(this.props.dateProfile.activeRange, t),
              c = this.getIsDayNumbersVisible() && l;
            return c || this.renderProps.cellWeekNumbersVisible
              ? ((e = Object(i.wb)(
                  t,
                  this.props.dateProfile,
                  this.context
                )).unshift("fc-day-top"),
                this.renderProps.cellWeekNumbersVisible && (n = o.weekDow),
                (s +=
                  '<td class="' +
                  e.join(" ") +
                  '"' +
                  (l
                    ? ' data-date="' + o.formatIso(t, { omitTime: !0 }) + '"'
                    : "") +
                  ">"),
                this.renderProps.cellWeekNumbersVisible &&
                  t.getUTCDay() === n &&
                  (s += Object(i.H)(
                    a,
                    o,
                    { date: t, type: "week" },
                    { class: "fc-week-number" },
                    o.format(t, y)
                  )),
                c &&
                  (s += Object(i.H)(
                    a,
                    o,
                    t,
                    { class: "fc-day-number" },
                    o.format(t, _)
                  )),
                (s += "</td>"))
              : "<td></td>";
          }),
          (e.prototype.updateSize = function (t) {
            var e = this.context.calendar,
              n = this.fillRenderer,
              i = this.eventRenderer,
              r = this.mirrorRenderer;
            (t || this.isCellSizesDirty || e.isEventsUpdated) &&
              (this.buildPositionCaches(), (this.isCellSizesDirty = !1)),
              n.computeSizes(t),
              i.computeSizes(t),
              r.computeSizes(t),
              n.assignSizes(t),
              i.assignSizes(t),
              r.assignSizes(t);
          }),
          (e.prototype.buildPositionCaches = function () {
            this.buildColPositions(), this.buildRowPositions();
          }),
          (e.prototype.buildColPositions = function () {
            this.colPositions.build();
          }),
          (e.prototype.buildRowPositions = function () {
            this.rowPositions.build(),
              (this.rowPositions.bottoms[this.rowCnt - 1] +=
                this.bottomCoordPadding);
          }),
          (e.prototype.positionToHit = function (t, e) {
            var n = this.colPositions,
              i = this.rowPositions,
              r = n.leftToIndex(t),
              o = i.topToIndex(e);
            if (null != o && null != r)
              return {
                row: o,
                col: r,
                dateSpan: { range: this.getCellRange(o, r), allDay: !0 },
                dayEl: this.getCellEl(o, r),
                relativeRect: {
                  left: n.lefts[r],
                  right: n.rights[r],
                  top: i.tops[o],
                  bottom: i.bottoms[o],
                },
              };
          }),
          (e.prototype.getCellEl = function (t, e) {
            return this.cellEls[t * this.colCnt + e];
          }),
          (e.prototype._renderEventDrag = function (t) {
            t &&
              (this.eventRenderer.hideByHash(t.affectedInstances),
              this.fillRenderer.renderSegs("highlight", this.context, t.segs));
          }),
          (e.prototype._unrenderEventDrag = function (t) {
            t &&
              (this.eventRenderer.showByHash(t.affectedInstances),
              this.fillRenderer.unrender("highlight", this.context));
          }),
          (e.prototype._renderEventResize = function (t) {
            t &&
              (this.eventRenderer.hideByHash(t.affectedInstances),
              this.fillRenderer.renderSegs("highlight", this.context, t.segs),
              this.mirrorRenderer.renderSegs(this.context, t.segs, {
                isResizing: !0,
                sourceSeg: t.sourceSeg,
              }));
          }),
          (e.prototype._unrenderEventResize = function (t) {
            t &&
              (this.eventRenderer.showByHash(t.affectedInstances),
              this.fillRenderer.unrender("highlight", this.context),
              this.mirrorRenderer.unrender(this.context, t.segs, {
                isResizing: !0,
                sourceSeg: t.sourceSeg,
              }));
          }),
          (e.prototype.removeSegPopover = function () {
            this.segPopover && this.segPopover.hide();
          }),
          (e.prototype.limitRows = function (t) {
            var e,
              n,
              i = this.eventRenderer.rowStructs || [];
            for (e = 0; e < i.length; e++)
              this.unlimitRow(e),
                !1 !==
                  (n =
                    !!t &&
                    ("number" == typeof t
                      ? t
                      : this.computeRowLevelLimit(e))) && this.limitRow(e, n);
          }),
          (e.prototype.computeRowLevelLimit = function (t) {
            var e,
              n,
              r = this.rowEls[t].getBoundingClientRect().bottom,
              o = Object(i.rb)(this.eventRenderer.rowStructs[t].tbodyEl);
            for (e = 0; e < o.length; e++)
              if (
                ((n = o[e]).classList.remove("fc-limited"),
                n.getBoundingClientRect().bottom > r)
              )
                return e;
            return !1;
          }),
          (e.prototype.limitRow = function (t, e) {
            var n,
              r,
              o,
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
              m,
              g,
              v = this,
              _ = this.colCnt,
              y = this.context.isRtl,
              M = this.eventRenderer.rowStructs[t],
              O = [],
              w = 0,
              A = function (n) {
                for (; w < n; )
                  (l = v.getCellSegs(t, w, e)).length &&
                    ((u = r[e - 1][w]),
                    (g = v.renderMoreLink(t, w, l)),
                    (m = Object(i.Z)("div", null, g)),
                    u.appendChild(m),
                    O.push(m)),
                    w++;
              };
            if (e && e < M.segLevels.length) {
              for (
                n = M.segLevels[e - 1],
                  r = M.cellMatrix,
                  (o = Object(i.rb)(M.tbodyEl).slice(e)).forEach(function (t) {
                    t.classList.add("fc-limited");
                  }),
                  a = 0;
                a < n.length;
                a++
              ) {
                s = n[a];
                var x = y ? _ - 1 - s.lastCol : s.firstCol,
                  z = y ? _ - 1 - s.firstCol : s.lastCol;
                for (A(x), d = [], c = 0; w <= z; )
                  (l = this.getCellSegs(t, w, e)),
                    d.push(l),
                    (c += l.length),
                    w++;
                if (c) {
                  for (
                    p = (u = r[e - 1][x]).rowSpan || 1, h = [], f = 0;
                    f < d.length;
                    f++
                  )
                    (b = Object(i.Z)("td", {
                      className: "fc-more-cell",
                      rowSpan: p,
                    })),
                      (l = d[f]),
                      (g = this.renderMoreLink(t, x + f, [s].concat(l))),
                      (m = Object(i.Z)("div", null, g)),
                      b.appendChild(m),
                      h.push(b),
                      O.push(b);
                  u.classList.add("fc-limited"), Object(i.Eb)(u, h), o.push(u);
                }
              }
              A(this.colCnt), (M.moreEls = O), (M.limitedEls = o);
            }
          }),
          (e.prototype.unlimitRow = function (t) {
            var e = this.eventRenderer.rowStructs[t];
            e.moreEls && (e.moreEls.forEach(i.pc), (e.moreEls = null)),
              e.limitedEls &&
                (e.limitedEls.forEach(function (t) {
                  t.classList.remove("fc-limited");
                }),
                (e.limitedEls = null));
          }),
          (e.prototype.renderMoreLink = function (t, e, n) {
            var r = this,
              o = this.context,
              a = o.calendar,
              s = o.view,
              l = o.dateEnv,
              c = o.options,
              d = o.isRtl,
              u = Object(i.Z)("a", { className: "fc-more" });
            return (
              (u.innerText = this.getMoreLinkText(n.length)),
              u.addEventListener("click", function (i) {
                var o = c.eventLimitClick,
                  u = d ? r.colCnt - e - 1 : e,
                  p = r.props.cells[t][u].date,
                  h = i.currentTarget,
                  f = r.getCellEl(t, e),
                  b = r.getCellSegs(t, e),
                  m = r.resliceDaySegs(b, p),
                  g = r.resliceDaySegs(n, p);
                "function" == typeof o &&
                  (o = a.publiclyTrigger("eventLimitClick", [
                    {
                      date: l.toDate(p),
                      allDay: !0,
                      dayEl: f,
                      moreEl: h,
                      segs: m,
                      hiddenSegs: g,
                      jsEvent: i,
                      view: s,
                    },
                  ])),
                  "popover" === o
                    ? r.showSegPopover(t, e, h, m)
                    : "string" == typeof o && a.zoomTo(p, o);
              }),
              u
            );
          }),
          (e.prototype.showSegPopover = function (t, e, n, r) {
            var o,
              a,
              s = this,
              c = this.context,
              d = c.calendar,
              u = c.view,
              p = c.theme,
              h = c.isRtl,
              f = h ? this.colCnt - e - 1 : e,
              m = n.parentNode;
            (o = 1 === this.rowCnt ? u.el : this.rowEls[t]),
              (a = {
                className: "fc-more-popover " + p.getClass("popover"),
                parentEl: u.el,
                top: Object(i.U)(o).top,
                autoHide: !0,
                content: function (e) {
                  (s.segPopoverTile = new b(e)),
                    s.updateSegPopoverTile(s.props.cells[t][f].date, r);
                },
                hide: function () {
                  s.segPopoverTile.destroy(),
                    (s.segPopoverTile = null),
                    s.segPopover.destroy(),
                    (s.segPopover = null);
                },
              }),
              h
                ? (a.right = Object(i.U)(m).right + 1)
                : (a.left = Object(i.U)(m).left - 1),
              (this.segPopover = new l(a)),
              this.segPopover.show(),
              d.releaseAfterSizingTriggers();
          }),
          (e.prototype.resliceDaySegs = function (t, e) {
            for (
              var n = e,
                r = { start: n, end: Object(i.v)(n, 1) },
                o = [],
                s = 0,
                l = t;
              s < l.length;
              s++
            ) {
              var c = l[s],
                d = c.eventRange,
                u = d.range,
                p = Object(i.Hb)(u, r);
              p &&
                o.push(
                  a({}, c, {
                    eventRange: {
                      def: d.def,
                      ui: a({}, d.ui, { durationEditable: !1 }),
                      instance: d.instance,
                      range: p,
                    },
                    isStart:
                      c.isStart && p.start.valueOf() === u.start.valueOf(),
                    isEnd: c.isEnd && p.end.valueOf() === u.end.valueOf(),
                  })
                );
            }
            return o;
          }),
          (e.prototype.getMoreLinkText = function (t) {
            var e = this.context.options.eventLimitText;
            return "function" == typeof e ? e(t) : "+" + t + " " + e;
          }),
          (e.prototype.getCellSegs = function (t, e, n) {
            for (
              var i,
                r = this.eventRenderer.rowStructs[t].segMatrix,
                o = n || 0,
                a = [];
              o < r.length;

            )
              (i = r[o][e]) && a.push(i), o++;
            return a;
          }),
          e
        );
      })(i.c),
      O = Object(i.cb)({ week: "numeric" }),
      w = (function (t) {
        function e() {
          var e = (null !== t && t.apply(this, arguments)) || this;
          return (
            (e.processOptions = Object(i.Ub)(e._processOptions)),
            (e.renderSkeleton = Object(i.Wb)(
              e._renderSkeleton,
              e._unrenderSkeleton
            )),
            (e.renderHeadIntroHtml = function () {
              var t = e.context,
                n = t.theme,
                r = t.options;
              return e.colWeekNumbersVisible
                ? '<th class="fc-week-number ' +
                    n.getClass("widgetHeader") +
                    '" ' +
                    e.weekNumberStyleAttr() +
                    "><span>" +
                    Object(i.Cb)(r.weekLabel) +
                    "</span></th>"
                : "";
            }),
            (e.renderDayGridNumberIntroHtml = function (t, n) {
              var r = e.context,
                o = r.options,
                a = r.dateEnv,
                s = n.props.cells[t][0].date;
              return e.colWeekNumbersVisible
                ? '<td class="fc-week-number" ' +
                    e.weekNumberStyleAttr() +
                    ">" +
                    Object(i.H)(
                      o,
                      a,
                      { date: s, type: "week", forceOff: 1 === n.colCnt },
                      a.format(s, O)
                    ) +
                    "</td>"
                : "";
            }),
            (e.renderDayGridBgIntroHtml = function () {
              var t = e.context.theme;
              return e.colWeekNumbersVisible
                ? '<td class="fc-week-number ' +
                    t.getClass("widgetContent") +
                    '" ' +
                    e.weekNumberStyleAttr() +
                    "></td>"
                : "";
            }),
            (e.renderDayGridIntroHtml = function () {
              return e.colWeekNumbersVisible
                ? '<td class="fc-week-number" ' +
                    e.weekNumberStyleAttr() +
                    "></td>"
                : "";
            }),
            e
          );
        }
        return (
          o(e, t),
          (e.prototype._processOptions = function (t) {
            t.weekNumbers
              ? t.weekNumbersWithinDays
                ? ((this.cellWeekNumbersVisible = !0),
                  (this.colWeekNumbersVisible = !1))
                : ((this.cellWeekNumbersVisible = !1),
                  (this.colWeekNumbersVisible = !0))
              : ((this.colWeekNumbersVisible = !1),
                (this.cellWeekNumbersVisible = !1));
          }),
          (e.prototype.render = function (e, n) {
            t.prototype.render.call(this, e, n),
              this.processOptions(n.options),
              this.renderSkeleton(n);
          }),
          (e.prototype.destroy = function () {
            t.prototype.destroy.call(this), this.renderSkeleton.unrender();
          }),
          (e.prototype._renderSkeleton = function (t) {
            this.el.classList.add("fc-dayGrid-view"),
              (this.el.innerHTML = this.renderSkeletonHtml()),
              (this.scroller = new i.p("hidden", "auto"));
            var e = this.scroller.el;
            this.el.querySelector(".fc-body > tr > td").appendChild(e),
              e.classList.add("fc-day-grid-container");
            var n = Object(i.Z)("div", { className: "fc-day-grid" });
            e.appendChild(n),
              (this.dayGrid = new M(n, {
                renderNumberIntroHtml: this.renderDayGridNumberIntroHtml,
                renderBgIntroHtml: this.renderDayGridBgIntroHtml,
                renderIntroHtml: this.renderDayGridIntroHtml,
                colWeekNumbersVisible: this.colWeekNumbersVisible,
                cellWeekNumbersVisible: this.cellWeekNumbersVisible,
              }));
          }),
          (e.prototype._unrenderSkeleton = function () {
            this.el.classList.remove("fc-dayGrid-view"),
              this.dayGrid.destroy(),
              this.scroller.destroy();
          }),
          (e.prototype.renderSkeletonHtml = function () {
            var t = this.context,
              e = t.theme,
              n = t.options;
            return (
              '<table class="' +
              e.getClass("tableGrid") +
              '">' +
              (n.columnHeader
                ? '<thead class="fc-head"><tr><td class="fc-head-container ' +
                  e.getClass("widgetHeader") +
                  '">&nbsp;</td></tr></thead>'
                : "") +
              '<tbody class="fc-body"><tr><td class="' +
              e.getClass("widgetContent") +
              '"></td></tr></tbody></table>'
            );
          }),
          (e.prototype.weekNumberStyleAttr = function () {
            return null != this.weekNumberWidth
              ? 'style="width:' + this.weekNumberWidth + 'px"'
              : "";
          }),
          (e.prototype.hasRigidRows = function () {
            var t = this.context.options.eventLimit;
            return t && "number" != typeof t;
          }),
          (e.prototype.updateSize = function (e, n, i) {
            t.prototype.updateSize.call(this, e, n, i),
              this.dayGrid.updateSize(e);
          }),
          (e.prototype.updateBaseSize = function (t, e, n) {
            var r,
              o,
              a = this.dayGrid,
              s = this.context.options.eventLimit,
              l = this.header ? this.header.el : null;
            a.rowEls
              ? (this.colWeekNumbersVisible &&
                  (this.weekNumberWidth = Object(i.Tb)(
                    Object(i.sb)(this.el, ".fc-week-number")
                  )),
                this.scroller.clear(),
                l && Object(i.vc)(l),
                a.removeSegPopover(),
                s && "number" == typeof s && a.limitRows(s),
                (r = this.computeScrollerHeight(e)),
                this.setGridHeight(r, n),
                s && "number" != typeof s && a.limitRows(s),
                n ||
                  (this.scroller.setHeight(r),
                  ((o = this.scroller.getScrollbarWidths()).left || o.right) &&
                    (l && Object(i.L)(l, o),
                    (r = this.computeScrollerHeight(e)),
                    this.scroller.setHeight(r)),
                  this.scroller.lockOverflow(o)))
              : n ||
                ((r = this.computeScrollerHeight(e)),
                this.scroller.setHeight(r));
          }),
          (e.prototype.computeScrollerHeight = function (t) {
            return t - Object(i.tc)(this.el, this.scroller.el);
          }),
          (e.prototype.setGridHeight = function (t, e) {
            this.context.options.monthMode
              ? (e && (t *= this.dayGrid.rowCnt / 6),
                Object(i.lb)(this.dayGrid.rowEls, t, !e))
              : e
              ? Object(i.wc)(this.dayGrid.rowEls)
              : Object(i.lb)(this.dayGrid.rowEls, t, !0);
          }),
          (e.prototype.computeDateScroll = function (t) {
            return { top: 0 };
          }),
          (e.prototype.queryDateScroll = function () {
            return { top: this.scroller.getScrollTop() };
          }),
          (e.prototype.applyDateScroll = function (t) {
            void 0 !== t.top && this.scroller.setScrollTop(t.top);
          }),
          e
        );
      })(i.t);
    w.prototype.dateProfileGeneratorClass = s;
    var A = (function (t) {
        function e(e) {
          var n = t.call(this, e.el) || this;
          return (n.slicer = new x()), (n.dayGrid = e), n;
        }
        return (
          o(e, t),
          (e.prototype.firstContext = function (t) {
            t.calendar.registerInteractiveComponent(this, {
              el: this.dayGrid.el,
            });
          }),
          (e.prototype.destroy = function () {
            t.prototype.destroy.call(this),
              this.context.calendar.unregisterInteractiveComponent(this);
          }),
          (e.prototype.render = function (t, e) {
            var n = this.dayGrid,
              i = t.dateProfile,
              r = t.dayTable;
            n.receiveContext(e),
              n.receiveProps(
                a(
                  {},
                  this.slicer.sliceProps(
                    t,
                    i,
                    t.nextDayThreshold,
                    e.calendar,
                    n,
                    r
                  ),
                  { dateProfile: i, cells: r.cells, isRigid: t.isRigid }
                ),
                e
              );
          }),
          (e.prototype.buildPositionCaches = function () {
            this.dayGrid.buildPositionCaches();
          }),
          (e.prototype.queryHit = function (t, e) {
            var n = this.dayGrid.positionToHit(t, e);
            if (n)
              return {
                component: this.dayGrid,
                dateSpan: n.dateSpan,
                dayEl: n.dayEl,
                rect: {
                  left: n.relativeRect.left,
                  right: n.relativeRect.right,
                  top: n.relativeRect.top,
                  bottom: n.relativeRect.bottom,
                },
                layer: 0,
              };
          }),
          e
        );
      })(i.c),
      x = (function (t) {
        function e() {
          return (null !== t && t.apply(this, arguments)) || this;
        }
        return (
          o(e, t),
          (e.prototype.sliceRange = function (t, e) {
            return e.sliceRange(t);
          }),
          e
        );
      })(i.r),
      z = (function (t) {
        function e() {
          var e = (null !== t && t.apply(this, arguments)) || this;
          return (e.buildDayTable = Object(i.Ub)(C)), e;
        }
        return (
          o(e, t),
          (e.prototype.render = function (e, n) {
            t.prototype.render.call(this, e, n);
            var i = this.props.dateProfile,
              r = (this.dayTable = this.buildDayTable(
                i,
                e.dateProfileGenerator
              ));
            this.header &&
              this.header.receiveProps(
                {
                  dateProfile: i,
                  dates: r.headerDates,
                  datesRepDistinctDays: 1 === r.rowCnt,
                  renderIntroHtml: this.renderHeadIntroHtml,
                },
                n
              ),
              this.simpleDayGrid.receiveProps(
                {
                  dateProfile: i,
                  dayTable: r,
                  businessHours: e.businessHours,
                  dateSelection: e.dateSelection,
                  eventStore: e.eventStore,
                  eventUiBases: e.eventUiBases,
                  eventSelection: e.eventSelection,
                  eventDrag: e.eventDrag,
                  eventResize: e.eventResize,
                  isRigid: this.hasRigidRows(),
                  nextDayThreshold: this.context.nextDayThreshold,
                },
                n
              );
          }),
          (e.prototype._renderSkeleton = function (e) {
            t.prototype._renderSkeleton.call(this, e),
              e.options.columnHeader &&
                (this.header = new i.e(
                  this.el.querySelector(".fc-head-container")
                )),
              (this.simpleDayGrid = new A(this.dayGrid));
          }),
          (e.prototype._unrenderSkeleton = function () {
            t.prototype._unrenderSkeleton.call(this),
              this.header && this.header.destroy(),
              this.simpleDayGrid.destroy();
          }),
          e
        );
      })(w);
    function C(t, e) {
      var n = new i.f(t.renderRange, e);
      return new i.g(n, /year|month|week/.test(t.currentRangeUnit));
    }
    var k = Object(i.db)({
      defaultView: "dayGridMonth",
      views: {
        dayGrid: z,
        dayGridDay: { type: "dayGrid", duration: { days: 1 } },
        dayGridWeek: { type: "dayGrid", duration: { weeks: 1 } },
        dayGridMonth: {
          type: "dayGrid",
          duration: { months: 1 },
          monthMode: !0,
          fixedWeekCount: !0,
        },
      },
    });
    e.a = k;
  },
  ,
  function (t, e, n) {
    "use strict";
    var i = n(34),
      r = n.n(i),
      o = n(115),
      a = n(91),
      s = n(8),
      l = n(9),
      c = n(77),
      d = n.n(c),
      u = n(43),
      p = {
        components: {
          AppointmentList: a.default,
          apexcharts: d.a,
          ModalPopup: u.a,
        },
        data: function () {
          return {
            isLoading: !1,
            dashboardData: {},
            isAppointmentReload: !1,
            appointmentRequest: {},
            isEmailSMTPWorking: !0,
            testSubmitted: !1,
            testEmail: {
              recieverDetails: "",
              content: "Welcome to KiviCare, This is test mail.",
            },
            notificationType: "email",
            isLocoTranslationUpdated: !1,
            isdataLoading: !0,
            csvLoader: !0,
            csvAppointmentData: [],
            chartFilterType: "weekly",
            filterType: [
              { label: "Weekly", value: "weekly" },
              { label: "Monthly", value: "monthly" },
            ],
            versionData: {
              kivi_pro_version: 0,
              kivi_telemed_version: 0,
              kivi_googlemeet_version: 0,
            },
            request_status: "off",
            openTestEmailModal: !1,
            totalCardEnable: 0,
          };
        },
        validations: {
          testEmail: {
            recieverDetails: { required: l.required },
            content: { required: l.required },
          },
        },
        mounted: function () {
          var t = this;
          this.init(),
            (this.filterType = this.filterType.map(function (e) {
              return (e.label = t.formTranslation.common[e.value]), e;
            })),
            this.getModule(),
            this.kcCheckPermission("dashboard_total_patient") &&
              this.totalCardEnable++,
            this.kcCheckPermission("dashboard_total_doctor") &&
              this.totalCardEnable++,
            this.kcCheckPermission("dashboard_total_appointment") &&
              this.totalCardEnable++,
            this.kcCheckPermission("dashboard_total_revenue") &&
              this.totalCardEnable++,
            this.totalCardEnable > 0 &&
              (this.totalCardEnable = 12 / this.totalCardEnable);
        },
        computed: {
          userData: function () {
            return this.$store.state.userDataModule.user;
          },
        },
        methods: {
          chartFilterChange: function (t) {
            this.chartFilterType = t;
          },
          csvLoadAppointmentData: function (t) {
            (this.csvAppointmentData = this.formatJsonAppointmentData(t)),
              (this.csvLoader = !1);
          },
          getWoocoomerceStatus: function () {
            var t = this.$store.state.userDataModule.user;
            return void 0 !== t.roles ? t.woocommercePayment : "";
          },
          init: function () {
            this.getDashboardData(),
              (this.dashboardData = this.defaultDashboardData()),
              (this.appointmentRequest = this.defaultAppointmentRequest()),
              this.getVersionData();
          },
          defaultDashboardData: function () {
            return {
              appointment_count: 0,
              doctor_count: 0,
              patient_count: 0,
              revenue: 0,
              change_log: !0,
              telemed_log: !1,
            };
          },
          getDashboardData: function () {
            var t = this;
            Object(s.a)("get_dashboard", {})
              .then(function (e) {
                void 0 !== e.data.status &&
                  !0 === e.data.status &&
                  ((t.isdataLoading = !1),
                  (t.dashboardData = e.data.data),
                  (t.isEmailSMTPWorking = e.data.data.is_email_working));
              })
              .catch(function (e) {
                displayErrorMessage(t.formTranslation.widgets.record_not_found);
              });
          },
          getVersionData: function () {
            var t = this;
            Object(s.a)("get_version_data", {})
              .then(function (e) {
                void 0 !== e.data.status &&
                  !0 === e.data.status &&
                  ((t.versionData.kivi_pro_version =
                    e.data.data.kivi_pro_version),
                  (t.versionData.kivi_telemed_version =
                    e.data.data.kivi_telemed_version),
                  (t.versionData.kivi_googlemeet_version =
                    e.data.data.kivi_googlemeet_version));
              })
              .catch(function (e) {
                displayErrorMessage(t.formTranslation.widgets.record_not_found);
              });
          },
          defaultAppointmentRequest: function () {
            return { date: new Date() };
          },
          iUnderstandLocoTranslation: function (t) {
            var e = this;
            Object(s.b)("i_understnad_loco_translate", { log_type: t })
              .then(function (t) {
                void 0 !== t.data.status &&
                  !0 === t.data.status &&
                  ((e.isLocoTranslationUpdated = !1), location.reload());
              })
              .catch(function (t) {
                displayErrorMessage(e.formTranslation.widgets.record_not_found);
              });
          },
          getUnderstandLocoTranslation: function (t) {
            this.isLocoTranslationUpdated =
              window.request_data.understand_loco_translate;
          },
          appointmentReload: function () {
            this.isLoading = !1;
          },
          sendTestEmail: function () {
            var t = this;
            (this.testSubmitted = !0),
              this.$v.$touch(),
              this.$v.testEmail.$invalid ||
                ((this.testEmail.type = this.notificationType),
                Object(s.b)("send_test_notification", this.testEmail)
                  .then(function (e) {
                    (t.testSubmitted = !1),
                      void 0 !== e.data.status && !0 === e.data.status
                        ? (displayMessage(e.data.message),
                          (t.isEmailSMTPWorking = !0))
                        : displayErrorMessage(e.data.message);
                  })
                  .catch(function (e) {
                    (t.testSubmitted = !1),
                      displayErrorMessage(
                        t.formTranslation.common.server_error
                      );
                  }));
          },
          getModule: function () {
            void 0 !== window.request_data.link_show_hide &&
              "" !== window.request_data.link_show_hide &&
              (this.request_status = window.request_data.link_show_hide);
          },
        },
      },
      h = n(15),
      f = Object(h.a)(
        p,
        function () {
          var t = this,
            e = t._self._c;
          return e(
            "b-row",
            [
              t.isEmailSMTPWorking
                ? t._e()
                : e(
                    "b-col",
                    { attrs: { lg: "", sm: "12" } },
                    [
                      t.openTestEmailModal
                        ? e(
                            "ModalPopup",
                            {
                              attrs: {
                                modalId: "send-test-email",
                                modalSize: "lg",
                                openModal: t.openTestEmailModal,
                                modalTitle: t.formTranslation.common.send_email,
                              },
                              on: {
                                closeModal: function (e) {
                                  t.openTestEmailModal = !1;
                                },
                              },
                            },
                            [
                              e("div", { staticClass: "form-group" }, [
                                e(
                                  "label",
                                  {
                                    staticClass: "form-control-label",
                                    attrs: { for: "email" },
                                  },
                                  [
                                    t._v(
                                      " " + t._s(t.formTranslation.common.email)
                                    ),
                                  ]
                                ),
                                t._v(" "),
                                e("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: t.testEmail.recieverDetails,
                                      expression: "testEmail.recieverDetails",
                                    },
                                  ],
                                  staticClass: "form-control",
                                  attrs: {
                                    id: "email",
                                    placeholder:
                                      t.formTranslation.notification
                                        .plh_enter_email,
                                  },
                                  domProps: {
                                    value: t.testEmail.recieverDetails,
                                  },
                                  on: {
                                    input: function (e) {
                                      e.target.composing ||
                                        t.$set(
                                          t.testEmail,
                                          "recieverDetails",
                                          e.target.value
                                        );
                                    },
                                  },
                                }),
                                t._v(" "),
                                t.testSubmitted &&
                                !t.$v.testEmail.recieverDetails.required
                                  ? e(
                                      "div",
                                      { staticClass: "invalid-feedback" },
                                      [
                                        t._v(
                                          " " +
                                            t._s(
                                              t.formTranslation.notification
                                                .test_sender_email_required
                                            ) +
                                            ". "
                                        ),
                                      ]
                                    )
                                  : t._e(),
                              ]),
                              t._v(" "),
                              e("div", { staticClass: "form-group" }, [
                                e(
                                  "label",
                                  {
                                    staticClass: "form-control-label",
                                    attrs: { for: "email_content" },
                                  },
                                  [
                                    t._v(
                                      " " +
                                        t._s(
                                          t.formTranslation.notification
                                            .test_content
                                        ) +
                                        " "
                                    ),
                                  ]
                                ),
                                t._v(" "),
                                e("textarea", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: t.testEmail.content,
                                      expression: "testEmail.content",
                                    },
                                  ],
                                  staticClass: "form-control",
                                  attrs: { id: "email_content" },
                                  domProps: { value: t.testEmail.content },
                                  on: {
                                    input: function (e) {
                                      e.target.composing ||
                                        t.$set(
                                          t.testEmail,
                                          "content",
                                          e.target.value
                                        );
                                    },
                                  },
                                }),
                                t._v(" "),
                                t.testSubmitted &&
                                !t.$v.testEmail.content.required
                                  ? e(
                                      "div",
                                      { staticClass: "invalid-feedback" },
                                      [
                                        t._v(
                                          " " +
                                            t._s(
                                              t.formTranslation.notification
                                                .test_content_required
                                            ) +
                                            ". "
                                        ),
                                      ]
                                    )
                                  : t._e(),
                              ]),
                              t._v(" "),
                              e(
                                "div",
                                { staticClass: "d-flex justify-content-end" },
                                [
                                  e(
                                    "button",
                                    {
                                      staticClass: "btn btn-outline-primary",
                                      on: {
                                        click: function (e) {
                                          t.openTestEmailModal = !1;
                                        },
                                      },
                                    },
                                    [
                                      t._v(
                                        "\n          " +
                                          t._s(
                                            t.formTranslation.common.cancel
                                          ) +
                                          "\n        "
                                      ),
                                    ]
                                  ),
                                  t._v(" "),
                                  e(
                                    "button",
                                    {
                                      staticClass: "btn btn-primary",
                                      on: { click: t.sendTestEmail },
                                    },
                                    [t._v("\n          Test\n        ")]
                                  ),
                                ]
                              ),
                            ]
                          )
                        : t._e(),
                      t._v(" "),
                      e(
                        "b-alert",
                        {
                          staticClass:
                            "d-flex align-items-center justify-content-between",
                          attrs: { show: "", variant: "warning" },
                        },
                        [
                          e("p", { staticClass: "m-0" }, [
                            e("b", [
                              t._v(
                                " " +
                                  t._s(
                                    t.formTranslation.common.smtp_setup_msg
                                  ) +
                                  " "
                              ),
                            ]),
                            t._v(" "),
                            "off" == t.request_status
                              ? e(
                                  "a",
                                  {
                                    attrs: {
                                      href: "https://apps.iqonic.design/docs/product/kivicare/email-sms-and-whatsapp/",
                                      target: "_blank",
                                    },
                                  },
                                  [
                                    e("i", {
                                      staticClass: "fa fa-question-circle",
                                    }),
                                  ]
                                )
                              : t._e(),
                          ]),
                          t._v(" "),
                          e(
                            "button",
                            {
                              staticClass:
                                "btn btn-sm btn-secondary float-right",
                              attrs: { type: "button" },
                              on: {
                                click: function (e) {
                                  t.openTestEmailModal = !0;
                                },
                              },
                            },
                            [
                              e("i", { staticClass: "fas fa-paper-plane" }),
                              t._v(
                                " " +
                                  t._s(
                                    t.formTranslation.widgets.send_test_email
                                  )
                              ),
                            ]
                          ),
                        ]
                      ),
                    ],
                    1
                  ),
              t._v(" "),
              (1 == t.userData.addOns.kiviPro &&
                t.versionData.kivi_pro_version < "2.5.10") ||
              (1 == t.userData.addOns.telemed &&
                t.versionData.kivi_telemed_version < "2.2.0") ||
              (1 == t.userData.addOns.googlemeet &&
                t.versionData.kivi_googlemeet_version < "1.0.9")
                ? e(
                    "b-col",
                    { attrs: { sm: "12" } },
                    [
                      e(
                        "b-alert",
                        {
                          staticClass:
                            "d-flex align-items-center justify-content-between",
                          attrs: { show: "", variant: "warning" },
                        },
                        [
                          e("p", { staticClass: "m-0" }, [
                            e("b", [
                              t._v(
                                " The latest kivicare lite plugin requires : "
                              ),
                            ]),
                            t._v(" "),
                            1 == t.userData.addOns.kiviPro &&
                            t.versionData.kivi_pro_version < "2.5.10"
                              ? e("b", [t._v(" Kivicare Pro Version 2.5.10")])
                              : t._e(),
                            t._v(" "),
                            1 == t.userData.addOns.telemed &&
                            t.versionData.kivi_telemed_version < "2.2.0"
                              ? e("b", [
                                  t._v(
                                    " - KiviCare Zoom Telemed Version 2.2.0"
                                  ),
                                ])
                              : t._e(),
                            t._v(" "),
                            1 == t.userData.addOns.googlemeet &&
                            t.versionData.kivi_googlemeet_version < "1.0.9"
                              ? e("b", [
                                  t._v(
                                    " - KiviCare Google Meet Telemed Version 1.0.9"
                                  ),
                                ])
                              : t._e(),
                          ]),
                        ]
                      ),
                    ],
                    1
                  )
                : t._e(),
              t._v(" "),
              e("b-col", { attrs: { sm: "12" } }, [
                e("div", { staticClass: "row" }, [
                  t.kcCheckPermission("dashboard_total_patient")
                    ? e(
                        "div",
                        {
                          class:
                            "col-xl-" +
                            t.totalCardEnable +
                            (t.totalCardEnable > 1
                              ? " col-md-6"
                              : " col-md-12"),
                        },
                        [
                          e(
                            "router-link",
                            { attrs: { to: { name: "patient" } } },
                            [
                              e(
                                "div",
                                { staticClass: "card card-stats shadow p-0" },
                                [
                                  e("div", { staticClass: "card-body" }, [
                                    e("div", { staticClass: "row" }, [
                                      e("div", { staticClass: "col" }, [
                                        e(
                                          "h5",
                                          {
                                            staticClass:
                                              "card-title text-uppercase text-muted mb-0",
                                          },
                                          [
                                            t._v(
                                              " " +
                                                t._s(
                                                  t.formTranslation.dashboard
                                                    .total_patients
                                                ) +
                                                " "
                                            ),
                                          ]
                                        ),
                                        t._v(" "),
                                        t.isdataLoading
                                          ? e(
                                              "span",
                                              {
                                                staticClass:
                                                  "h2 font-weight-bold mb-0",
                                              },
                                              [
                                                e("i", {
                                                  staticClass:
                                                    "fa fa-spinner fa-spin",
                                                  attrs: {
                                                    "aria-hidden": "true",
                                                  },
                                                }),
                                              ]
                                            )
                                          : e(
                                              "span",
                                              {
                                                staticClass:
                                                  "h2 font-weight-bold mb-0",
                                              },
                                              [
                                                t._v(
                                                  t._s(
                                                    t.dashboardData
                                                      .patient_count
                                                  )
                                                ),
                                              ]
                                            ),
                                      ]),
                                      t._v(" "),
                                      e("div", { staticClass: "col-auto" }, [
                                        e(
                                          "div",
                                          {
                                            staticClass:
                                              "icon icon-shape bg-gradient-red text-white rounded-circle shadow",
                                          },
                                          [
                                            e("i", {
                                              staticClass:
                                                "fas fa-user-injured",
                                            }),
                                          ]
                                        ),
                                      ]),
                                    ]),
                                    t._v(" "),
                                    e(
                                      "p",
                                      { staticClass: "mt-3 mb-0 text-sm" },
                                      [
                                        e(
                                          "span",
                                          { staticClass: "text-nowrap" },
                                          [
                                            t._v(
                                              t._s(
                                                t.formTranslation.dashboard
                                                  .total_visited_patients
                                              )
                                            ),
                                          ]
                                        ),
                                      ]
                                    ),
                                  ]),
                                ]
                              ),
                            ]
                          ),
                        ],
                        1
                      )
                    : t._e(),
                  t._v(" "),
                  t.kcCheckPermission("dashboard_total_doctor")
                    ? e(
                        "div",
                        {
                          class:
                            "col-xl-" +
                            t.totalCardEnable +
                            (t.totalCardEnable > 1
                              ? " col-md-6"
                              : " col-md-12"),
                        },
                        [
                          e(
                            "router-link",
                            { attrs: { to: { name: "doctor" } } },
                            [
                              e(
                                "div",
                                { staticClass: "card card-stats shadow p-0" },
                                [
                                  e("div", { staticClass: "card-body" }, [
                                    e("div", { staticClass: "row" }, [
                                      e("div", { staticClass: "col" }, [
                                        e(
                                          "h5",
                                          {
                                            staticClass:
                                              "card-title text-uppercase text-muted mb-0",
                                          },
                                          [
                                            t._v(
                                              " " +
                                                t._s(
                                                  t.formTranslation.dashboard
                                                    .total_doctors
                                                ) +
                                                " "
                                            ),
                                          ]
                                        ),
                                        t._v(" "),
                                        t.isdataLoading
                                          ? e(
                                              "span",
                                              {
                                                staticClass:
                                                  "h2 font-weight-bold mb-0",
                                              },
                                              [
                                                e("i", {
                                                  staticClass:
                                                    "fa fa-spinner fa-spin",
                                                  attrs: {
                                                    "aria-hidden": "true",
                                                  },
                                                }),
                                              ]
                                            )
                                          : e(
                                              "span",
                                              {
                                                staticClass:
                                                  "h2 font-weight-bold mb-0",
                                              },
                                              [
                                                t._v(
                                                  t._s(
                                                    t.dashboardData.doctor_count
                                                  )
                                                ),
                                              ]
                                            ),
                                      ]),
                                      t._v(" "),
                                      e("div", { staticClass: "col-auto" }, [
                                        e(
                                          "div",
                                          {
                                            staticClass:
                                              "icon icon-shape bg-gradient-orange text-white rounded-circle shadow",
                                          },
                                          [
                                            e("i", {
                                              staticClass: "fas fa-user-md",
                                            }),
                                          ]
                                        ),
                                      ]),
                                    ]),
                                    t._v(" "),
                                    e(
                                      "p",
                                      { staticClass: "mt-3 mb-0 text-sm" },
                                      [
                                        e(
                                          "span",
                                          { staticClass: "text-nowrap" },
                                          [
                                            t._v(
                                              t._s(
                                                t.formTranslation.dashboard
                                                  .total_clinic_doctors
                                              )
                                            ),
                                          ]
                                        ),
                                      ]
                                    ),
                                  ]),
                                ]
                              ),
                            ]
                          ),
                        ],
                        1
                      )
                    : t._e(),
                  t._v(" "),
                  t.kcCheckPermission("dashboard_total_appointment")
                    ? e(
                        "div",
                        {
                          class:
                            "col-xl-" +
                            t.totalCardEnable +
                            (t.totalCardEnable > 1
                              ? " col-md-6"
                              : " col-md-12"),
                        },
                        [
                          e(
                            "router-link",
                            {
                              attrs: { to: { name: "appointment-list.index" } },
                            },
                            [
                              e(
                                "div",
                                { staticClass: "card card-stats shadow p-0" },
                                [
                                  e("div", { staticClass: "card-body" }, [
                                    e("div", { staticClass: "row" }, [
                                      e("div", { staticClass: "col" }, [
                                        e(
                                          "h5",
                                          {
                                            staticClass:
                                              "card-title text-uppercase text-muted mb-0",
                                          },
                                          [
                                            t._v(
                                              t._s(
                                                t.formTranslation.dashboard
                                                  .total_appointments
                                              )
                                            ),
                                          ]
                                        ),
                                        t._v(" "),
                                        t.isdataLoading
                                          ? e(
                                              "span",
                                              {
                                                staticClass:
                                                  "h2 font-weight-bold mb-0",
                                              },
                                              [
                                                e("i", {
                                                  staticClass:
                                                    "fa fa-spinner fa-spin",
                                                  attrs: {
                                                    "aria-hidden": "true",
                                                  },
                                                }),
                                              ]
                                            )
                                          : e(
                                              "span",
                                              {
                                                staticClass:
                                                  "h2 font-weight-bold mb-0",
                                              },
                                              [
                                                t._v(
                                                  t._s(
                                                    t.dashboardData
                                                      .appointment_count
                                                  )
                                                ),
                                              ]
                                            ),
                                      ]),
                                      t._v(" "),
                                      e("div", { staticClass: "col-auto" }, [
                                        e(
                                          "div",
                                          {
                                            staticClass:
                                              "icon icon-shape bg-gradient-green text-white rounded-circle shadow",
                                          },
                                          [
                                            e("i", {
                                              staticClass:
                                                "fas fa-calendar-check",
                                            }),
                                          ]
                                        ),
                                      ]),
                                    ]),
                                    t._v(" "),
                                    e(
                                      "p",
                                      { staticClass: "mt-3 mb-0 text-sm" },
                                      [
                                        e(
                                          "span",
                                          { staticClass: "text-nowrap" },
                                          [
                                            t._v(
                                              t._s(
                                                t.formTranslation.dashboard
                                                  .total_clinic_appointments
                                              )
                                            ),
                                          ]
                                        ),
                                      ]
                                    ),
                                  ]),
                                ]
                              ),
                            ]
                          ),
                        ],
                        1
                      )
                    : t._e(),
                  t._v(" "),
                  t.kcCheckPermission("dashboard_total_revenue")
                    ? e(
                        "div",
                        {
                          class:
                            "col-xl-" +
                            t.totalCardEnable +
                            (t.totalCardEnable > 1
                              ? " col-md-6"
                              : " col-md-12"),
                        },
                        [
                          e(
                            "div",
                            { staticClass: "card card-stats shadow p-0" },
                            [
                              e("div", { staticClass: "card-body" }, [
                                e("div", { staticClass: "row" }, [
                                  e("div", { staticClass: "col" }, [
                                    e(
                                      "div",
                                      {
                                        staticClass:
                                          "d-flex justify-content-start",
                                      },
                                      [
                                        e(
                                          "h5",
                                          {
                                            staticClass:
                                              "card-title text-uppercase text-muted mb-0 mr-2",
                                          },
                                          [
                                            t._v(
                                              t._s(
                                                t.formTranslation.dashboard
                                                  .total_revenue
                                              )
                                            ),
                                          ]
                                        ),
                                        t._v(" "),
                                        e("i", {
                                          directives: [
                                            {
                                              name: "b-tooltip",
                                              rawName:
                                                "v-b-tooltip.hover.right",
                                              modifiers: {
                                                hover: !0,
                                                right: !0,
                                              },
                                            },
                                          ],
                                          staticClass: "fa fa fa-info-circle",
                                          attrs: {
                                            title:
                                              t.formTranslation.common
                                                .revenue_tooltip,
                                          },
                                        }),
                                      ]
                                    ),
                                    t._v(" "),
                                    t.isdataLoading
                                      ? e(
                                          "span",
                                          {
                                            staticClass:
                                              "h2 font-weight-bold mb-0",
                                          },
                                          [
                                            e("i", {
                                              staticClass:
                                                "fa fa-spinner fa-spin",
                                              attrs: { "aria-hidden": "true" },
                                            }),
                                          ]
                                        )
                                      : e(
                                          "span",
                                          {
                                            staticClass:
                                              "h2 font-weight-bold mb-0",
                                          },
                                          [
                                            t._v(
                                              " " +
                                                t._s(t.dashboardData.revenue)
                                            ),
                                          ]
                                        ),
                                  ]),
                                  t._v(" "),
                                  e("div", { staticClass: "col-auto" }, [
                                    e(
                                      "div",
                                      {
                                        staticClass:
                                          "icon icon-shape bg-gradient-info text-white rounded-circle shadow",
                                      },
                                      [
                                        e("i", {
                                          staticClass: "fas fa-money-check-alt",
                                        }),
                                      ]
                                    ),
                                  ]),
                                ]),
                                t._v(" "),
                                e("p", { staticClass: "mt-3 mb-0 text-sm" }, [
                                  e("span", { staticClass: "text-nowrap" }, [
                                    t._v(
                                      t._s(
                                        t.formTranslation.dashboard
                                          .total_generated_revenue
                                      )
                                    ),
                                  ]),
                                ]),
                              ]),
                            ]
                          ),
                        ]
                      )
                    : t._e(),
                ]),
                t._v(" "),
                e("div", { staticClass: "row mt-4" }, [
                  e("div", { staticClass: "col-xl-8 mb-5 mb-xl-0" }, [
                    e("div", { staticClass: "card p-0 shadow" }, [
                      e("div", { staticClass: "card-header bg-transparent" }, [
                        e("div", { staticClass: "row align-items-center" }, [
                          e(
                            "div",
                            { staticClass: "col-md-4 col-lg-4 rmb-15" },
                            [
                              e(
                                "h6",
                                {
                                  staticClass:
                                    "text-uppercase text-muted ls-1 mb-1",
                                },
                                [
                                  t._v(
                                    t._s(
                                      t.formTranslation.dashboard
                                        .latest_appointments
                                    )
                                  ),
                                ]
                              ),
                              t._v(" "),
                              e("h2", { staticClass: "mb-0 text-capitalize" }, [
                                t._v(
                                  t._s(
                                    t.formTranslation.dashboard
                                      .today_appointment_list
                                  )
                                ),
                              ]),
                            ]
                          ),
                          t._v(" "),
                          e("div", { staticClass: "col-md-8 col-lg-8" }, [
                            e(
                              "div",
                              {
                                staticClass:
                                  "d-flex justify-content-end align-items-center",
                              },
                              [
                                e(
                                  "router-link",
                                  {
                                    staticClass:
                                      "btn btn-sm btn-primary text-capitalize ml-2",
                                    attrs: {
                                      to: { name: "appointment-list.index" },
                                    },
                                  },
                                  [
                                    e("i", { staticClass: "fas fa-eye" }),
                                    t._v(
                                      " " +
                                        t._s(
                                          t.formTranslation.dashboard
                                            .all_upcoming_appointment
                                        ) +
                                        "\n                                "
                                    ),
                                  ]
                                ),
                                t._v(" "),
                                e(
                                  "button",
                                  {
                                    staticClass:
                                      "btn btn-sm btn-primary text-capitalize",
                                    on: {
                                      click: function (e) {
                                        t.isLoading = !0;
                                      },
                                    },
                                  },
                                  [
                                    e("i", { staticClass: "fas fa-sync" }),
                                    t._v(
                                      " " +
                                        t._s(
                                          t.formTranslation.dashboard.reload
                                        ) +
                                        "\n                                "
                                    ),
                                  ]
                                ),
                                t._v(" "),
                                t.kcCheckPermission("appointment_export")
                                  ? e("module-data-export", {
                                      attrs: {
                                        module_data: t.csvAppointmentData,
                                        module_name:
                                          t.formTranslation.appointments
                                            .appointments,
                                        module_type: "appointment",
                                      },
                                    })
                                  : t._e(),
                              ],
                              1
                            ),
                          ]),
                        ]),
                      ]),
                      t._v(" "),
                      e(
                        "div",
                        {
                          staticClass: "card-body",
                          staticStyle: { overflow: "auto" },
                        },
                        [
                          e(
                            "div",
                            { staticClass: "chart" },
                            [
                              e("appointment-list", {
                                ref: "appointment_list",
                                attrs: { isLoading: t.isLoading },
                                on: {
                                  isReloadTrue: t.appointmentReload,
                                  csvData: t.csvLoadAppointmentData,
                                  refreshDashboard: t.getDashboardData,
                                },
                              }),
                            ],
                            1
                          ),
                        ]
                      ),
                    ]),
                  ]),
                  t._v(" "),
                  e("div", { staticClass: "col-xl-4" }, [
                    e("div", { staticClass: "card p-0 shadow" }, [
                      e("div", { staticClass: "card-header bg-transparent" }, [
                        e("div", { staticClass: "row align-items-center" }, [
                          e("div", { staticClass: "col" }, [
                            e(
                              "h6",
                              {
                                staticClass:
                                  "text-uppercase text-muted ls-1 mb-1",
                              },
                              [
                                t._v(
                                  t._s(
                                    "weekly" === t.chartFilterType
                                      ? t.formTranslation.dashboard
                                          .weekly_appointments
                                      : t.formTranslation.dashboard
                                          .monthly_appointments
                                  )
                                ),
                              ]
                            ),
                            t._v(" "),
                            e("h2", { staticClass: "mb-0 text-capitalize" }, [
                              t._v(
                                t._s(
                                  "weekly" === t.chartFilterType
                                    ? t.formTranslation.dashboard
                                        .weekly_total_appointments
                                    : t.formTranslation.dashboard
                                        .monthly_total_appointments
                                )
                              ),
                            ]),
                          ]),
                        ]),
                        t._v(" "),
                        e("div", { staticClass: "row" }, [
                          e(
                            "div",
                            { staticClass: "col-8 rmb-15" },
                            t._l(t.filterType, function (n, i) {
                              return e(
                                "span",
                                {
                                  key: i,
                                  staticClass: "badge mr-2 cursor-pointer",
                                  class:
                                    t.chartFilterType === n.value
                                      ? "badge-primary p-2 "
                                      : "badge-outline-primary",
                                  style:
                                    t.chartFilterType === n.value
                                      ? "font-size: 0.8rem;"
                                      : "",
                                  on: {
                                    click: function (e) {
                                      return t.chartFilterChange(n.value);
                                    },
                                  },
                                },
                                [
                                  t._v(
                                    t._s(n.label) +
                                      "\n                              "
                                  ),
                                ]
                              );
                            }),
                            0
                          ),
                        ]),
                      ]),
                      t._v(" "),
                      e(
                        "div",
                        { staticClass: "card-body" },
                        [
                          e("weekly-appointment-chart", {
                            attrs: { chartFilterType: t.chartFilterType },
                          }),
                        ],
                        1
                      ),
                    ]),
                  ]),
                ]),
              ]),
            ],
            1
          );
        },
        [],
        !1,
        null,
        null,
        null
      ).exports,
      b = {
        components: { AppointmentList: a.default, apexcharts: d.a },
        data: function () {
          return {
            isLoading: !1,
            dashboardData: {},
            isAppointmentReload: !1,
            appointmentRequest: {},
            reloadCalender: !0,
            isdataLoading: !0,
            totalCardEnable: 0,
          };
        },
        mounted: function () {
          this.init(),
            this.kcCheckPermission("dashboard_total_patient") &&
              this.totalCardEnable++,
            this.kcCheckPermission("dashboard_total_doctor") &&
              this.totalCardEnable++,
            this.kcCheckPermission("dashboard_total_appointment") &&
              this.totalCardEnable++,
            this.kcCheckPermission("dashboard_total_revenue") &&
              this.totalCardEnable++,
            this.totalCardEnable > 0 &&
              (this.totalCardEnable = 12 / this.totalCardEnable);
        },
        methods: {
          init: function () {
            var t = this;
            this.getDashboardData(),
              (this.dashboardData = this.defaultDashboardData()),
              (this.appointmentRequest = this.defaultAppointmentRequest()),
              this.$nextTick(function () {
                t.reloadCalender = !0;
              });
          },
          defaultDashboardData: function () {
            return {
              appointment_count: 0,
              doctor_count: 0,
              patient_count: 0,
              revenue: 0,
              change_log: !0,
              telemed_log: !1,
            };
          },
          getDashboardData: function () {
            var t = this;
            Object(s.a)("get_dashboard", {})
              .then(function (e) {
                (t.isdataLoading = !1),
                  void 0 !== e.data.status &&
                    !0 === e.data.status &&
                    (t.dashboardData = e.data.data);
              })
              .catch(function (e) {
                displayErrorMessage(t.formTranslation.widgets.record_not_found);
              });
          },
          defaultAppointmentRequest: function () {
            return { date: new Date() };
          },
          mounted: function () {
            this.$router.push({ name: "appointment-list.index" }), this.init();
          },
          appointmentReload: function () {
            this.isLoading = !1;
          },
        },
      },
      m = Object(h.a)(
        b,
        function () {
          var t = this,
            e = t._self._c;
          return e(
            "b-row",
            [
              e(
                "b-col",
                { attrs: { sm: "12" } },
                [
                  e("div", { staticClass: "row" }, [
                    t.kcCheckPermission("dashboard_total_patient")
                      ? e(
                          "div",
                          {
                            class:
                              "col-xl-" +
                              t.totalCardEnable +
                              (t.totalCardEnable > 1
                                ? " col-md-6"
                                : " col-md-12"),
                          },
                          [
                            e(
                              "router-link",
                              { attrs: { to: { name: "patient" } } },
                              [
                                e(
                                  "div",
                                  { staticClass: "card card-stats shadow p-0" },
                                  [
                                    e("div", { staticClass: "card-body" }, [
                                      e("div", { staticClass: "row" }, [
                                        e("div", { staticClass: "col" }, [
                                          e(
                                            "h5",
                                            {
                                              staticClass:
                                                "card-title text-uppercase text-muted mb-0",
                                            },
                                            [
                                              t._v(
                                                " " +
                                                  t._s(
                                                    t.formTranslation.dashboard
                                                      .patients
                                                  ) +
                                                  " "
                                              ),
                                            ]
                                          ),
                                          t._v(" "),
                                          t.isdataLoading
                                            ? e(
                                                "span",
                                                {
                                                  staticClass:
                                                    "h2 font-weight-bold mb-0",
                                                },
                                                [
                                                  e("i", {
                                                    staticClass:
                                                      "fa fa-spinner fa-spin",
                                                    attrs: {
                                                      "aria-hidden": "true",
                                                    },
                                                  }),
                                                ]
                                              )
                                            : e(
                                                "span",
                                                {
                                                  staticClass:
                                                    "h2 font-weight-bold mb-0",
                                                },
                                                [
                                                  t._v(
                                                    t._s(
                                                      t.dashboardData
                                                        .patient_count
                                                    )
                                                  ),
                                                ]
                                              ),
                                        ]),
                                        t._v(" "),
                                        e("div", { staticClass: "col-auto" }, [
                                          e(
                                            "div",
                                            {
                                              staticClass:
                                                "icon icon-shape bg-gradient-red text-white rounded-circle shadow",
                                            },
                                            [
                                              e("i", {
                                                staticClass:
                                                  "fas fa-user-injured",
                                              }),
                                            ]
                                          ),
                                        ]),
                                      ]),
                                      t._v(" "),
                                      e(
                                        "p",
                                        { staticClass: "mt-3 mb-0 text-sm" },
                                        [
                                          e(
                                            "span",
                                            { staticClass: "text-nowrap" },
                                            [
                                              t._v(
                                                t._s(
                                                  t.formTranslation.dashboard
                                                    .total_visited_patients
                                                )
                                              ),
                                            ]
                                          ),
                                        ]
                                      ),
                                    ]),
                                  ]
                                ),
                              ]
                            ),
                          ],
                          1
                        )
                      : t._e(),
                    t._v(" "),
                    t.kcCheckPermission("dashboard_total_doctor")
                      ? e(
                          "div",
                          {
                            class:
                              "col-xl-" +
                              t.totalCardEnable +
                              (t.totalCardEnable > 1
                                ? " col-md-6"
                                : " col-md-12"),
                          },
                          [
                            e(
                              "router-link",
                              { attrs: { to: { name: "doctor" } } },
                              [
                                e(
                                  "div",
                                  { staticClass: "card card-stats shadow p-0" },
                                  [
                                    e("div", { staticClass: "card-body" }, [
                                      e("div", { staticClass: "row" }, [
                                        e("div", { staticClass: "col" }, [
                                          e(
                                            "h5",
                                            {
                                              staticClass:
                                                "card-title text-uppercase text-muted mb-0",
                                            },
                                            [
                                              t._v(
                                                " " +
                                                  t._s(
                                                    t.formTranslation.dashboard
                                                      .total_doctors
                                                  ) +
                                                  " "
                                              ),
                                            ]
                                          ),
                                          t._v(" "),
                                          t.isdataLoading
                                            ? e(
                                                "span",
                                                {
                                                  staticClass:
                                                    "h2 font-weight-bold mb-0",
                                                },
                                                [
                                                  e("i", {
                                                    staticClass:
                                                      "fa fa-spinner fa-spin",
                                                    attrs: {
                                                      "aria-hidden": "true",
                                                    },
                                                  }),
                                                ]
                                              )
                                            : e(
                                                "span",
                                                {
                                                  staticClass:
                                                    "h2 font-weight-bold mb-0",
                                                },
                                                [
                                                  t._v(
                                                    t._s(
                                                      t.dashboardData
                                                        .doctor_count
                                                    )
                                                  ),
                                                ]
                                              ),
                                        ]),
                                        t._v(" "),
                                        e("div", { staticClass: "col-auto" }, [
                                          e(
                                            "div",
                                            {
                                              staticClass:
                                                "icon icon-shape bg-gradient-orange text-white rounded-circle shadow",
                                            },
                                            [
                                              e("i", {
                                                staticClass: "fas fa-user-md",
                                              }),
                                            ]
                                          ),
                                        ]),
                                      ]),
                                      t._v(" "),
                                      e(
                                        "p",
                                        { staticClass: "mt-3 mb-0 text-sm" },
                                        [
                                          e(
                                            "span",
                                            { staticClass: "text-nowrap" },
                                            [
                                              t._v(
                                                t._s(
                                                  t.formTranslation.dashboard
                                                    .total_clinic_doctors
                                                )
                                              ),
                                            ]
                                          ),
                                        ]
                                      ),
                                    ]),
                                  ]
                                ),
                              ]
                            ),
                          ],
                          1
                        )
                      : t._e(),
                    t._v(" "),
                    t.kcCheckPermission("dashboard_total_appointment")
                      ? e(
                          "div",
                          {
                            class:
                              "col-xl-" +
                              t.totalCardEnable +
                              (t.totalCardEnable > 1
                                ? " col-md-6"
                                : " col-md-12"),
                          },
                          [
                            e(
                              "router-link",
                              {
                                attrs: {
                                  to: { name: "appointment-list.index" },
                                },
                              },
                              [
                                e(
                                  "div",
                                  { staticClass: "card card-stats shadow p-0" },
                                  [
                                    e("div", { staticClass: "card-body" }, [
                                      e("div", { staticClass: "row" }, [
                                        e("div", { staticClass: "col" }, [
                                          e(
                                            "h5",
                                            {
                                              staticClass:
                                                "card-title text-uppercase text-muted mb-0",
                                            },
                                            [
                                              t._v(
                                                t._s(
                                                  t.formTranslation.dashboard
                                                    .total_appointments
                                                )
                                              ),
                                            ]
                                          ),
                                          t._v(" "),
                                          t.isdataLoading
                                            ? e(
                                                "span",
                                                {
                                                  staticClass:
                                                    "h2 font-weight-bold mb-0",
                                                },
                                                [
                                                  e("i", {
                                                    staticClass:
                                                      "fa fa-spinner fa-spin",
                                                    attrs: {
                                                      "aria-hidden": "true",
                                                    },
                                                  }),
                                                ]
                                              )
                                            : e(
                                                "span",
                                                {
                                                  staticClass:
                                                    "h2 font-weight-bold mb-0",
                                                },
                                                [
                                                  t._v(
                                                    t._s(
                                                      t.dashboardData
                                                        .appointment_count
                                                    )
                                                  ),
                                                ]
                                              ),
                                        ]),
                                        t._v(" "),
                                        e("div", { staticClass: "col-auto" }, [
                                          e(
                                            "div",
                                            {
                                              staticClass:
                                                "icon icon-shape bg-gradient-green text-white rounded-circle shadow",
                                            },
                                            [
                                              e("i", {
                                                staticClass:
                                                  "fas fa-calendar-check",
                                              }),
                                            ]
                                          ),
                                        ]),
                                      ]),
                                      t._v(" "),
                                      e(
                                        "p",
                                        { staticClass: "mt-3 mb-0 text-sm" },
                                        [
                                          e(
                                            "span",
                                            { staticClass: "text-nowrap" },
                                            [
                                              t._v(
                                                t._s(
                                                  t.formTranslation.dashboard
                                                    .total_clinic_appointments
                                                )
                                              ),
                                            ]
                                          ),
                                        ]
                                      ),
                                    ]),
                                  ]
                                ),
                              ]
                            ),
                          ],
                          1
                        )
                      : t._e(),
                    t._v(" "),
                    t.kcCheckPermission("dashboard_total_revenue")
                      ? e(
                          "div",
                          {
                            class:
                              "col-xl-" +
                              t.totalCardEnable +
                              (t.totalCardEnable > 1
                                ? " col-md-6"
                                : " col-md-12"),
                          },
                          [
                            e(
                              "div",
                              { staticClass: "card card-stats shadow p-0" },
                              [
                                e("div", { staticClass: "card-body" }, [
                                  e("div", { staticClass: "row" }, [
                                    e("div", { staticClass: "col" }, [
                                      e(
                                        "h5",
                                        {
                                          staticClass:
                                            "card-title text-uppercase text-muted mb-0",
                                        },
                                        [
                                          t._v(
                                            t._s(
                                              t.formTranslation.dashboard
                                                .total_revenue
                                            )
                                          ),
                                        ]
                                      ),
                                      t._v(" "),
                                      t.isdataLoading
                                        ? e(
                                            "span",
                                            {
                                              staticClass:
                                                "h2 font-weight-bold mb-0",
                                            },
                                            [
                                              e("i", {
                                                staticClass:
                                                  "fa fa-spinner fa-spin",
                                                attrs: {
                                                  "aria-hidden": "true",
                                                },
                                              }),
                                            ]
                                          )
                                        : e(
                                            "span",
                                            {
                                              staticClass:
                                                "h2 font-weight-bold mb-0",
                                            },
                                            [
                                              t._v(
                                                " " +
                                                  t._s(t.dashboardData.revenue)
                                              ),
                                            ]
                                          ),
                                    ]),
                                    t._v(" "),
                                    e("div", { staticClass: "col-auto" }, [
                                      e(
                                        "div",
                                        {
                                          staticClass:
                                            "icon icon-shape bg-gradient-info text-white rounded-circle shadow",
                                        },
                                        [
                                          e("i", {
                                            staticClass:
                                              "fas fa-money-check-alt",
                                          }),
                                        ]
                                      ),
                                    ]),
                                  ]),
                                  t._v(" "),
                                  e("p", { staticClass: "mt-3 mb-0 text-sm" }, [
                                    e("span", { staticClass: "text-nowrap" }, [
                                      t._v(
                                        t._s(
                                          t.formTranslation.dashboard
                                            .total_clinic_revenue
                                        )
                                      ),
                                    ]),
                                  ]),
                                ]),
                              ]
                            ),
                          ]
                        )
                      : t._e(),
                  ]),
                  t._v(" "),
                  t.reloadCalender
                    ? e("appointment-calender", {
                        on: { reloadAppointment: t.init },
                      })
                    : t._e(),
                ],
                1
              ),
            ],
            1
          );
        },
        [],
        !1,
        null,
        null,
        null
      ).exports,
      g = {
        components: { AppointmentList: a.default, apexcharts: d.a },
        data: function () {
          return {
            isLoading: !1,
            dashboardData: {},
            isAppointmentReload: !1,
            appointmentRequest: {},
            reloadCalender: !0,
            isdataLoading: !0,
            totalCardEnable: 0,
          };
        },
        mounted: function () {
          this.init(),
            this.kcCheckPermission("dashboard_total_patient") &&
              this.totalCardEnable++,
            this.kcCheckPermission("dashboard_total_appointment") &&
              this.totalCardEnable++,
            this.kcCheckPermission("dashboard_total_today_appointment") &&
              this.totalCardEnable++,
            this.kcCheckPermission("dashboard_total_service") &&
              this.totalCardEnable++,
            this.totalCardEnable > 0 &&
              (this.totalCardEnable = 12 / this.totalCardEnable);
        },
        methods: {
          init: function () {
            var t = this;
            this.getDashboardData(),
              (this.dashboardData = this.defaultDashboardData()),
              (this.appointmentRequest = this.defaultAppointmentRequest()),
              (this.reloadCalender = !1),
              this.$nextTick(function () {
                t.reloadCalender = !0;
              });
          },
          defaultDashboardData: function () {
            return {
              appointment_count: 0,
              doctor_count: 0,
              patient_count: 0,
              today_count: 0,
              revenue: 0,
              change_log: !0,
              telemed_log: !1,
            };
          },
          getDashboardData: function () {
            var t = this;
            Object(s.a)("get_dashboard", {})
              .then(function (e) {
                (t.isdataLoading = !1),
                  void 0 !== e.data.status &&
                    !0 === e.data.status &&
                    (t.dashboardData = e.data.data);
              })
              .catch(function (e) {
                displayErrorMessage(t.formTranslation.widgets.record_not_found);
              });
          },
          defaultAppointmentRequest: function () {
            return { date: new Date() };
          },
          appointmentReload: function () {
            this.isLoading = !1;
          },
        },
        computed: {
          userData: function () {
            return this.$store.state.userDataModule.user;
          },
        },
      },
      v = Object(h.a)(
        g,
        function () {
          var t = this,
            e = t._self._c;
          return e(
            "b-row",
            [
              e(
                "b-col",
                { attrs: { sm: "12" } },
                [
                  e("div", { staticClass: "row" }, [
                    t.kcCheckPermission("dashboard_total_patient")
                      ? e(
                          "div",
                          {
                            class:
                              "col-xl-" +
                              t.totalCardEnable +
                              (t.totalCardEnable > 1
                                ? " col-md-6"
                                : " col-md-12"),
                          },
                          [
                            e(
                              "router-link",
                              { attrs: { to: { name: "patient" } } },
                              [
                                e(
                                  "div",
                                  { staticClass: "card card-stats shadow p-0" },
                                  [
                                    e("div", { staticClass: "card-body" }, [
                                      e("div", { staticClass: "row" }, [
                                        e("div", { staticClass: "col" }, [
                                          e(
                                            "h5",
                                            {
                                              staticClass:
                                                "card-title text-uppercase text-muted mb-0",
                                            },
                                            [
                                              t._v(
                                                "\n                                        " +
                                                  t._s(
                                                    t.formTranslation.dashboard
                                                      .total_patients
                                                  ) +
                                                  " "
                                              ),
                                            ]
                                          ),
                                          t._v(" "),
                                          t.isdataLoading
                                            ? e(
                                                "span",
                                                {
                                                  staticClass:
                                                    "h2 font-weight-bold mb-0",
                                                },
                                                [
                                                  e("i", {
                                                    staticClass:
                                                      "fa fa-spinner fa-spin",
                                                    attrs: {
                                                      "aria-hidden": "true",
                                                    },
                                                  }),
                                                ]
                                              )
                                            : e(
                                                "span",
                                                {
                                                  staticClass:
                                                    "h2 font-weight-bold mb-0",
                                                },
                                                [
                                                  t._v(
                                                    t._s(
                                                      t.dashboardData
                                                        .patient_count
                                                    )
                                                  ),
                                                ]
                                              ),
                                        ]),
                                        t._v(" "),
                                        e("div", { staticClass: "col-auto" }, [
                                          e(
                                            "div",
                                            {
                                              staticClass:
                                                "icon icon-shape bg-gradient-red text-white rounded-circle shadow",
                                            },
                                            [
                                              e("i", {
                                                staticClass:
                                                  "fas fa-user-injured",
                                              }),
                                            ]
                                          ),
                                        ]),
                                      ]),
                                      t._v(" "),
                                      e(
                                        "p",
                                        { staticClass: "mt-3 mb-0 text-sm" },
                                        [
                                          e(
                                            "span",
                                            { staticClass: "text-nowrap" },
                                            [
                                              t._v(
                                                t._s(
                                                  t.formTranslation.dashboard
                                                    .total_visited_patients
                                                )
                                              ),
                                            ]
                                          ),
                                        ]
                                      ),
                                    ]),
                                  ]
                                ),
                              ]
                            ),
                          ],
                          1
                        )
                      : t._e(),
                    t._v(" "),
                    t.kcCheckPermission("dashboard_total_appointment")
                      ? e(
                          "div",
                          {
                            class:
                              "col-xl-" +
                              t.totalCardEnable +
                              (t.totalCardEnable > 1
                                ? " col-md-6"
                                : " col-md-12"),
                          },
                          [
                            e(
                              "router-link",
                              {
                                attrs: {
                                  to: { name: "appointment-list.index" },
                                },
                              },
                              [
                                e(
                                  "div",
                                  { staticClass: "card card-stats shadow p-0" },
                                  [
                                    e("div", { staticClass: "card-body" }, [
                                      e("div", { staticClass: "row" }, [
                                        e("div", { staticClass: "col" }, [
                                          e(
                                            "h5",
                                            {
                                              staticClass:
                                                "card-title text-uppercase text-muted mb-0",
                                            },
                                            [
                                              t._v(
                                                "\n                                        " +
                                                  t._s(
                                                    t.formTranslation.dashboard
                                                      .lbl_total_appointments
                                                  )
                                              ),
                                            ]
                                          ),
                                          t._v(" "),
                                          t.isdataLoading
                                            ? e(
                                                "span",
                                                {
                                                  staticClass:
                                                    "h2 font-weight-bold mb-0",
                                                },
                                                [
                                                  e("i", {
                                                    staticClass:
                                                      "fa fa-spinner fa-spin",
                                                    attrs: {
                                                      "aria-hidden": "true",
                                                    },
                                                  }),
                                                ]
                                              )
                                            : e(
                                                "span",
                                                {
                                                  staticClass:
                                                    "h2 font-weight-bold mb-0",
                                                },
                                                [
                                                  t._v(
                                                    t._s(
                                                      t.dashboardData
                                                        .appointment_count
                                                    )
                                                  ),
                                                ]
                                              ),
                                        ]),
                                        t._v(" "),
                                        e("div", { staticClass: "col-auto" }, [
                                          e(
                                            "div",
                                            {
                                              staticClass:
                                                "icon icon-shape bg-gradient-green text-white rounded-circle shadow",
                                            },
                                            [
                                              e("i", {
                                                staticClass:
                                                  "fas fa-calendar-check",
                                              }),
                                            ]
                                          ),
                                        ]),
                                      ]),
                                      t._v(" "),
                                      e(
                                        "p",
                                        { staticClass: "mt-3 mb-0 text-sm" },
                                        [
                                          e(
                                            "span",
                                            { staticClass: "text-nowrap" },
                                            [
                                              t._v(
                                                t._s(
                                                  t.formTranslation.dashboard
                                                    .total_appointments
                                                )
                                              ),
                                            ]
                                          ),
                                        ]
                                      ),
                                    ]),
                                  ]
                                ),
                              ]
                            ),
                          ],
                          1
                        )
                      : t._e(),
                    t._v(" "),
                    t.kcCheckPermission("dashboard_total_today_appointment")
                      ? e(
                          "div",
                          {
                            class:
                              "col-xl-" +
                              t.totalCardEnable +
                              (t.totalCardEnable > 1
                                ? " col-md-6"
                                : " col-md-12"),
                          },
                          [
                            e(
                              "router-link",
                              {
                                attrs: {
                                  to: { name: "appointment-list.index" },
                                },
                              },
                              [
                                e(
                                  "div",
                                  { staticClass: "card card-stats shadow p-0" },
                                  [
                                    e("div", { staticClass: "card-body" }, [
                                      e("div", { staticClass: "row" }, [
                                        e("div", { staticClass: "col" }, [
                                          e(
                                            "h5",
                                            {
                                              staticClass:
                                                "card-title text-uppercase text-muted mb-0",
                                            },
                                            [
                                              t._v(
                                                "\n                                        " +
                                                  t._s(
                                                    t.formTranslation.dashboard
                                                      .lbl_total_today_appointments
                                                  )
                                              ),
                                            ]
                                          ),
                                          t._v(" "),
                                          t.isdataLoading
                                            ? e(
                                                "span",
                                                {
                                                  staticClass:
                                                    "h2 font-weight-bold mb-0",
                                                },
                                                [
                                                  e("i", {
                                                    staticClass:
                                                      "fa fa-spinner fa-spin",
                                                    attrs: {
                                                      "aria-hidden": "true",
                                                    },
                                                  }),
                                                ]
                                              )
                                            : e(
                                                "span",
                                                {
                                                  staticClass:
                                                    "h2 font-weight-bold mb-0",
                                                },
                                                [
                                                  t._v(
                                                    t._s(
                                                      t.dashboardData
                                                        .today_count
                                                    )
                                                  ),
                                                ]
                                              ),
                                        ]),
                                        t._v(" "),
                                        e("div", { staticClass: "col-auto" }, [
                                          e(
                                            "div",
                                            {
                                              staticClass:
                                                "icon icon-shape bg-gradient-green text-white rounded-circle shadow",
                                            },
                                            [
                                              e("i", {
                                                staticClass:
                                                  "fas fa-calendar-check",
                                              }),
                                            ]
                                          ),
                                        ]),
                                      ]),
                                      t._v(" "),
                                      e(
                                        "p",
                                        { staticClass: "mt-3 mb-0 text-sm" },
                                        [
                                          e(
                                            "span",
                                            { staticClass: "text-nowrap" },
                                            [
                                              t._v(
                                                t._s(
                                                  t.formTranslation.dashboard
                                                    .total_today_appointments
                                                )
                                              ),
                                            ]
                                          ),
                                        ]
                                      ),
                                    ]),
                                  ]
                                ),
                              ]
                            ),
                          ],
                          1
                        )
                      : t._e(),
                    t._v(" "),
                    t.kcCheckPermission("dashboard_total_service")
                      ? e(
                          "div",
                          {
                            class:
                              "col-xl-" +
                              t.totalCardEnable +
                              (t.totalCardEnable > 1
                                ? " col-md-6"
                                : " col-md-12"),
                          },
                          [
                            e(
                              "router-link",
                              { attrs: { to: { name: "service" } } },
                              [
                                e(
                                  "div",
                                  { staticClass: "card card-stats shadow p-0" },
                                  [
                                    e("div", { staticClass: "card-body" }, [
                                      e("div", { staticClass: "row" }, [
                                        e("div", { staticClass: "col" }, [
                                          e(
                                            "h5",
                                            {
                                              staticClass:
                                                "card-title text-uppercase text-muted mb-0",
                                            },
                                            [
                                              t._v(
                                                "\n                                        " +
                                                  t._s(
                                                    t.formTranslation.dashboard
                                                      .lbl_total_service
                                                  )
                                              ),
                                            ]
                                          ),
                                          t._v(" "),
                                          t.isdataLoading
                                            ? e(
                                                "span",
                                                {
                                                  staticClass:
                                                    "h2 font-weight-bold mb-0",
                                                },
                                                [
                                                  e("i", {
                                                    staticClass:
                                                      "fa fa-spinner fa-spin",
                                                    attrs: {
                                                      "aria-hidden": "true",
                                                    },
                                                  }),
                                                ]
                                              )
                                            : e(
                                                "span",
                                                {
                                                  staticClass:
                                                    "h2 font-weight-bold mb-0",
                                                },
                                                [
                                                  t._v(
                                                    " " +
                                                      t._s(
                                                        t.dashboardData.service
                                                      )
                                                  ),
                                                ]
                                              ),
                                        ]),
                                        t._v(" "),
                                        e("div", { staticClass: "col-auto" }, [
                                          e(
                                            "div",
                                            {
                                              staticClass:
                                                "icon icon-shape bg-gradient-info text-white rounded-circle shadow",
                                            },
                                            [
                                              e("i", {
                                                staticClass:
                                                  "fas fa-money-check-alt",
                                              }),
                                            ]
                                          ),
                                        ]),
                                      ]),
                                      t._v(" "),
                                      e(
                                        "p",
                                        { staticClass: "mt-3 mb-0 text-sm" },
                                        [
                                          e(
                                            "span",
                                            { staticClass: "text-nowrap" },
                                            [
                                              t._v(
                                                t._s(
                                                  t.formTranslation.dashboard
                                                    .total_service
                                                )
                                              ),
                                            ]
                                          ),
                                        ]
                                      ),
                                    ]),
                                  ]
                                ),
                              ]
                            ),
                          ],
                          1
                        )
                      : t._e(),
                  ]),
                  t._v(" "),
                  t.reloadCalender
                    ? e("appointment-calender", {
                        on: { reloadAppointment: t.init },
                      })
                    : t._e(),
                ],
                1
              ),
            ],
            1
          );
        },
        [],
        !1,
        null,
        null,
        null
      ).exports,
      y = {
        components: { AppointmentList: a.default, apexcharts: d.a },
        data: function () {
          return {
            isLoading: !1,
            dashboardData: {},
            isAppointmentReload: !1,
            appointmentRequest: {},
            isdataLoading: !0,
            csvLoader: !0,
            csvAppointmentData: [],
            chartFilterType: "weekly",
            filterType: [
              { label: "Weekly", value: "weekly" },
              { label: "Monthly", value: "monthly" },
            ],
            totalCardEnable: 0,
          };
        },
        mounted: function () {
          var t = this;
          this.init(),
            (this.filterType = this.filterType.map(function (e) {
              return (e.label = t.formTranslation.common[e.value]), e;
            })),
            this.kcCheckPermission("dashboard_total_patient") &&
              this.totalCardEnable++,
            this.kcCheckPermission("dashboard_total_doctor") &&
              this.totalCardEnable++,
            this.kcCheckPermission("dashboard_total_appointment") &&
              this.totalCardEnable++,
            this.kcCheckPermission("dashboard_total_revenue") &&
              this.totalCardEnable++,
            this.totalCardEnable > 0 &&
              (this.totalCardEnable = 12 / this.totalCardEnable);
        },
        methods: {
          init: function () {
            this.getDashboardData(),
              (this.dashboardData = this.defaultDashboardData()),
              (this.appointmentRequest = this.defaultAppointmentRequest());
          },
          chartFilterChange: function (t) {
            this.chartFilterType = t;
          },
          defaultDashboardData: function () {
            return {
              appointment_count: 0,
              doctor_count: 0,
              patient_count: 0,
              revenue: 0,
              change_log: !0,
              telemed_log: !1,
            };
          },
          getDashboardData: function () {
            var t = this;
            Object(s.a)("get_dashboard", {})
              .then(function (e) {
                (t.isdataLoading = !1),
                  void 0 !== e.data.status &&
                    !0 === e.data.status &&
                    (t.dashboardData = e.data.data);
              })
              .catch(function (e) {
                displayErrorMessage(t.formTranslation.widgets.record_not_found);
              }),
              (this.isLoading = !0);
          },
          defaultAppointmentRequest: function () {
            return { date: new Date() };
          },
          appointmentReload: function () {
            this.isLoading = !1;
          },
          csvLoadAppointmentData: function (t) {
            (this.csvAppointmentData = this.formatJsonAppointmentData(t)),
              (this.csvLoader = !1);
          },
        },
        computed: {
          userData: function () {
            return this.$store.state.userDataModule.user;
          },
        },
      },
      M = Object(h.a)(
        y,
        function () {
          var t = this,
            e = t._self._c;
          return e(
            "b-row",
            [
              e("b-col", { attrs: { sm: "12" } }, [
                e("div", { staticClass: "row" }, [
                  t.kcCheckPermission("dashboard_total_patient")
                    ? e(
                        "div",
                        {
                          class:
                            "col-xl-" +
                            t.totalCardEnable +
                            (t.totalCardEnable > 1
                              ? " col-md-6"
                              : " col-md-12"),
                        },
                        [
                          e(
                            "router-link",
                            { attrs: { to: { name: "patient" } } },
                            [
                              e(
                                "div",
                                { staticClass: "card card-stats shadow p-0" },
                                [
                                  e("div", { staticClass: "card-body" }, [
                                    e("div", { staticClass: "row" }, [
                                      e("div", { staticClass: "col" }, [
                                        e(
                                          "h5",
                                          {
                                            staticClass:
                                              "card-title text-uppercase text-muted mb-0",
                                          },
                                          [
                                            t._v(
                                              " " +
                                                t._s(
                                                  t.formTranslation.dashboard
                                                    .total_patients
                                                ) +
                                                " "
                                            ),
                                          ]
                                        ),
                                        t._v(" "),
                                        t.isdataLoading
                                          ? e(
                                              "span",
                                              {
                                                staticClass:
                                                  "h2 font-weight-bold mb-0",
                                              },
                                              [
                                                e("i", {
                                                  staticClass:
                                                    "fa fa-spinner fa-spin",
                                                  attrs: {
                                                    "aria-hidden": "true",
                                                  },
                                                }),
                                              ]
                                            )
                                          : e(
                                              "span",
                                              {
                                                staticClass:
                                                  "h2 font-weight-bold mb-0",
                                              },
                                              [
                                                t._v(
                                                  t._s(
                                                    t.dashboardData
                                                      .patient_count
                                                  )
                                                ),
                                              ]
                                            ),
                                      ]),
                                      t._v(" "),
                                      e("div", { staticClass: "col-auto" }, [
                                        e(
                                          "div",
                                          {
                                            staticClass:
                                              "icon icon-shape bg-gradient-red text-white rounded-circle shadow",
                                          },
                                          [
                                            e("i", {
                                              staticClass:
                                                "fas fa-user-injured",
                                            }),
                                          ]
                                        ),
                                      ]),
                                    ]),
                                    t._v(" "),
                                    e(
                                      "p",
                                      { staticClass: "mt-3 mb-0 text-sm" },
                                      [
                                        e(
                                          "span",
                                          { staticClass: "text-nowrap" },
                                          [
                                            t._v(
                                              t._s(
                                                t.formTranslation.dashboard
                                                  .total_visited_patients
                                              )
                                            ),
                                          ]
                                        ),
                                      ]
                                    ),
                                  ]),
                                ]
                              ),
                            ]
                          ),
                        ],
                        1
                      )
                    : t._e(),
                  t._v(" "),
                  t.kcCheckPermission("dashboard_total_doctor")
                    ? e(
                        "div",
                        {
                          class:
                            "col-xl-" +
                            t.totalCardEnable +
                            (t.totalCardEnable > 1
                              ? " col-md-6"
                              : " col-md-12"),
                        },
                        [
                          e(
                            "router-link",
                            { attrs: { to: { name: "doctor" } } },
                            [
                              e(
                                "div",
                                { staticClass: "card card-stats shadow p-0" },
                                [
                                  e("div", { staticClass: "card-body" }, [
                                    e("div", { staticClass: "row" }, [
                                      e("div", { staticClass: "col" }, [
                                        e(
                                          "h5",
                                          {
                                            staticClass:
                                              "card-title text-uppercase text-muted mb-0",
                                          },
                                          [
                                            t._v(
                                              t._s(
                                                t.formTranslation.dashboard
                                                  .total_doctors
                                              )
                                            ),
                                          ]
                                        ),
                                        t._v(" "),
                                        t.isdataLoading
                                          ? e(
                                              "span",
                                              {
                                                staticClass:
                                                  "h2 font-weight-bold mb-0",
                                              },
                                              [
                                                e("i", {
                                                  staticClass:
                                                    "fa fa-spinner fa-spin",
                                                  attrs: {
                                                    "aria-hidden": "true",
                                                  },
                                                }),
                                              ]
                                            )
                                          : e(
                                              "span",
                                              {
                                                staticClass:
                                                  "h2 font-weight-bold mb-0",
                                              },
                                              [
                                                t._v(
                                                  t._s(
                                                    t.dashboardData.doctor_count
                                                  )
                                                ),
                                              ]
                                            ),
                                      ]),
                                      t._v(" "),
                                      e("div", { staticClass: "col-auto" }, [
                                        e(
                                          "div",
                                          {
                                            staticClass:
                                              "icon icon-shape bg-gradient-orange text-white rounded-circle shadow",
                                          },
                                          [
                                            e("i", {
                                              staticClass: "fas fa-user-md",
                                            }),
                                          ]
                                        ),
                                      ]),
                                    ]),
                                    t._v(" "),
                                    e(
                                      "p",
                                      { staticClass: "mt-3 mb-0 text-sm" },
                                      [
                                        e(
                                          "span",
                                          { staticClass: "text-nowrap" },
                                          [
                                            t._v(
                                              t._s(
                                                t.formTranslation.dashboard
                                                  .total_clinic_doctors
                                              )
                                            ),
                                          ]
                                        ),
                                      ]
                                    ),
                                  ]),
                                ]
                              ),
                            ]
                          ),
                        ],
                        1
                      )
                    : t._e(),
                  t._v(" "),
                  t.kcCheckPermission("dashboard_total_appointment")
                    ? e(
                        "div",
                        {
                          class:
                            "col-xl-" +
                            t.totalCardEnable +
                            (t.totalCardEnable > 1
                              ? " col-md-6"
                              : " col-md-12"),
                        },
                        [
                          e(
                            "router-link",
                            {
                              attrs: { to: { name: "appointment-list.index" } },
                            },
                            [
                              e(
                                "div",
                                { staticClass: "card card-stats shadow p-0" },
                                [
                                  e("div", { staticClass: "card-body" }, [
                                    e("div", { staticClass: "row" }, [
                                      e("div", { staticClass: "col" }, [
                                        e(
                                          "h5",
                                          {
                                            staticClass:
                                              "card-title text-uppercase text-muted mb-0",
                                          },
                                          [
                                            t._v(
                                              t._s(
                                                t.formTranslation.dashboard
                                                  .total_appointments
                                              )
                                            ),
                                          ]
                                        ),
                                        t._v(" "),
                                        t.isdataLoading
                                          ? e(
                                              "span",
                                              {
                                                staticClass:
                                                  "h2 font-weight-bold mb-0",
                                              },
                                              [
                                                e("i", {
                                                  staticClass:
                                                    "fa fa-spinner fa-spin",
                                                  attrs: {
                                                    "aria-hidden": "true",
                                                  },
                                                }),
                                              ]
                                            )
                                          : e(
                                              "span",
                                              {
                                                staticClass:
                                                  "h2 font-weight-bold mb-0",
                                              },
                                              [
                                                t._v(
                                                  t._s(
                                                    t.dashboardData
                                                      .appointment_count
                                                  )
                                                ),
                                              ]
                                            ),
                                      ]),
                                      t._v(" "),
                                      e("div", { staticClass: "col-auto" }, [
                                        e(
                                          "div",
                                          {
                                            staticClass:
                                              "icon icon-shape bg-gradient-green text-white rounded-circle shadow",
                                          },
                                          [
                                            e("i", {
                                              staticClass:
                                                "fas fa-calendar-check",
                                            }),
                                          ]
                                        ),
                                      ]),
                                    ]),
                                    t._v(" "),
                                    e(
                                      "p",
                                      { staticClass: "mt-3 mb-0 text-sm" },
                                      [
                                        e(
                                          "span",
                                          { staticClass: "text-nowrap" },
                                          [
                                            t._v(
                                              t._s(
                                                t.formTranslation.dashboard
                                                  .total_clinic_appointments
                                              )
                                            ),
                                          ]
                                        ),
                                      ]
                                    ),
                                  ]),
                                ]
                              ),
                            ]
                          ),
                        ],
                        1
                      )
                    : t._e(),
                  t._v(" "),
                  t.kcCheckPermission("dashboard_total_revenue")
                    ? e(
                        "div",
                        {
                          class:
                            "col-xl-" +
                            t.totalCardEnable +
                            (t.totalCardEnable > 1
                              ? " col-md-6"
                              : " col-md-12"),
                        },
                        [
                          e(
                            "div",
                            { staticClass: "card card-stats shadow p-0" },
                            [
                              e("div", { staticClass: "card-body" }, [
                                e("div", { staticClass: "row" }, [
                                  e("div", { staticClass: "col" }, [
                                    e(
                                      "div",
                                      {
                                        staticClass:
                                          "d-flex justify-content-start",
                                      },
                                      [
                                        e(
                                          "h5",
                                          {
                                            staticClass:
                                              "card-title text-uppercase text-muted mb-0 mr-2",
                                          },
                                          [
                                            t._v(
                                              t._s(
                                                t.formTranslation.dashboard
                                                  .total_revenue
                                              )
                                            ),
                                          ]
                                        ),
                                        t._v(" "),
                                        e("i", {
                                          directives: [
                                            {
                                              name: "b-tooltip",
                                              rawName:
                                                "v-b-tooltip.hover.right",
                                              modifiers: {
                                                hover: !0,
                                                right: !0,
                                              },
                                            },
                                          ],
                                          staticClass: "fa fa-info-circle",
                                          attrs: {
                                            title:
                                              t.formTranslation.common
                                                .revenue_tooltip,
                                          },
                                        }),
                                      ]
                                    ),
                                    t._v(" "),
                                    t.isdataLoading
                                      ? e(
                                          "span",
                                          {
                                            staticClass:
                                              "h2 font-weight-bold mb-0",
                                          },
                                          [
                                            e("i", {
                                              staticClass:
                                                "fa fa-spinner fa-spin",
                                              attrs: { "aria-hidden": "true" },
                                            }),
                                          ]
                                        )
                                      : e(
                                          "span",
                                          {
                                            staticClass:
                                              "h2 font-weight-bold mb-0",
                                          },
                                          [
                                            t._v(
                                              " " +
                                                t._s(t.dashboardData.revenue)
                                            ),
                                          ]
                                        ),
                                  ]),
                                  t._v(" "),
                                  e("div", { staticClass: "col-auto" }, [
                                    e(
                                      "div",
                                      {
                                        staticClass:
                                          "icon icon-shape bg-gradient-info text-white rounded-circle shadow",
                                      },
                                      [
                                        e("i", {
                                          staticClass: "fas fa-money-check-alt",
                                        }),
                                      ]
                                    ),
                                  ]),
                                ]),
                                t._v(" "),
                                e("p", { staticClass: "mt-3 mb-0 text-sm" }, [
                                  e("span", { staticClass: "text-nowrap" }, [
                                    t._v(
                                      t._s(
                                        t.formTranslation.dashboard
                                          .total_clinic_revenue
                                      )
                                    ),
                                  ]),
                                ]),
                              ]),
                            ]
                          ),
                        ]
                      )
                    : t._e(),
                ]),
                t._v(" "),
                e("div", { staticClass: "row" }, [
                  e("div", { staticClass: "col-xl-7" }, [
                    e("div", { staticClass: "card p-0 shadow" }, [
                      e("div", { staticClass: "card-header bg-transparent" }, [
                        e("div", { staticClass: "row align-items-center" }, [
                          e("div", { staticClass: "col-8" }, [
                            e(
                              "h6",
                              {
                                staticClass:
                                  "text-uppercase text-muted ls-1 mb-1",
                              },
                              [
                                t._v(
                                  t._s(
                                    t.formTranslation.dashboard
                                      .latest_appointments
                                  )
                                ),
                              ]
                            ),
                            t._v(" "),
                            e("h2", { staticClass: "mb-0 text-capitalize" }, [
                              t._v(
                                t._s(
                                  t.formTranslation.dashboard
                                    .today_appointment_list
                                )
                              ),
                            ]),
                          ]),
                          t._v(" "),
                          e("div", { staticClass: "col-4" }, [
                            e(
                              "div",
                              {
                                staticClass:
                                  "d-flex justify-content-end align-items-center",
                              },
                              [
                                t.kcCheckPermission("appointment_export")
                                  ? e("module-data-export", {
                                      attrs: {
                                        module_data: t.csvAppointmentData,
                                        module_name:
                                          t.formTranslation.appointments
                                            .appointments,
                                        module_type: "appointment",
                                      },
                                    })
                                  : t._e(),
                              ],
                              1
                            ),
                          ]),
                        ]),
                      ]),
                      t._v(" "),
                      e(
                        "div",
                        { staticClass: "card-body" },
                        [
                          e("appointment-list", {
                            attrs: { isLoading: t.isLoading },
                            on: {
                              isReloadTrue: t.appointmentReload,
                              csvData: t.csvLoadAppointmentData,
                              refreshDashboard: t.getDashboardData,
                            },
                          }),
                        ],
                        1
                      ),
                    ]),
                  ]),
                  t._v(" "),
                  e("div", { staticClass: "col-xl-5" }, [
                    e("div", { staticClass: "card p-0 shadow" }, [
                      e("div", { staticClass: "card-header bg-transparent" }, [
                        e("div", { staticClass: "row align-items-center" }, [
                          e("div", { staticClass: "col" }, [
                            e(
                              "h6",
                              {
                                staticClass:
                                  "text-uppercase text-muted ls-1 mb-1",
                              },
                              [
                                t._v(
                                  t._s(
                                    "weekly" === t.chartFilterType
                                      ? t.formTranslation.dashboard
                                          .weekly_appointments
                                      : t.formTranslation.dashboard
                                          .monthly_appointments
                                  )
                                ),
                              ]
                            ),
                            t._v(" "),
                            e("h2", { staticClass: "mb-0 text-capitalize" }, [
                              t._v(
                                t._s(
                                  "weekly" === t.chartFilterType
                                    ? t.formTranslation.dashboard
                                        .weekly_total_appointments
                                    : t.formTranslation.dashboard
                                        .monthly_total_appointments
                                )
                              ),
                            ]),
                          ]),
                        ]),
                        t._v(" "),
                        e("div", { staticClass: "row" }, [
                          e(
                            "div",
                            { staticClass: "col rmb-15" },
                            t._l(t.filterType, function (n, i) {
                              return e(
                                "span",
                                {
                                  key: i,
                                  staticClass: "badge mr-2 cursor-pointer",
                                  class:
                                    t.chartFilterType === n.value
                                      ? "badge-primary p-2 "
                                      : "badge-outline-primary",
                                  style:
                                    t.chartFilterType === n.value
                                      ? "font-size: 0.8rem;"
                                      : "",
                                  on: {
                                    click: function (e) {
                                      return t.chartFilterChange(n.value);
                                    },
                                  },
                                },
                                [
                                  t._v(
                                    t._s(n.label) +
                                      "\n                                "
                                  ),
                                ]
                              );
                            }),
                            0
                          ),
                        ]),
                      ]),
                      t._v(" "),
                      e(
                        "div",
                        { staticClass: "card-body" },
                        [
                          e("weekly-appointment-chart", {
                            attrs: { chartFilterType: t.chartFilterType },
                          }),
                        ],
                        1
                      ),
                    ]),
                  ]),
                ]),
              ]),
            ],
            1
          );
        },
        [],
        !1,
        null,
        null,
        null
      ).exports,
      O = {
        components: { AppointmentList: a.default, apexcharts: d.a },
        data: function () {
          return {
            isLoading: !1,
            dashboardData: {},
            isAppointmentReload: !1,
            appointmentRequest: {},
            reloadCalender: !0,
          };
        },
        mounted: function () {
          this.init();
        },
        methods: {
          init: function () {
            var t = this;
            this.getDashboardData(),
              (this.dashboardData = this.defaultDashboardData()),
              (this.appointmentRequest = this.defaultAppointmentRequest()),
              this.$nextTick(function () {
                t.reloadCalender = !0;
              });
          },
          defaultDashboardData: function () {
            return {
              appointment_count: 0,
              doctor_count: 0,
              patient_count: 0,
              revenue: 0,
              change_log: !0,
              telemed_log: !1,
            };
          },
          getDashboardData: function () {
            var t = this;
            Object(s.a)("get_dashboard", {})
              .then(function (e) {
                void 0 !== e.data.status &&
                  !0 === e.data.status &&
                  (t.dashboardData = e.data.data);
              })
              .catch(function (e) {
                displayErrorMessage(t.formTranslation.widgets.record_not_found);
              });
          },
          defaultAppointmentRequest: function () {
            return { date: new Date() };
          },
          appointmentReload: function () {
            this.isLoading = !1;
          },
        },
      },
      w = {
        components: {
          AdminDashboard: f,
          ReceptionistDashboard: m,
          DoctorDashboard: v,
          ClinicAdminDashboard: M,
          PatientDashboard: Object(h.a)(
            O,
            function () {
              var t = this._self._c;
              return t(
                "b-row",
                [
                  t(
                    "b-col",
                    { attrs: { sm: "12" } },
                    [
                      this.reloadCalender
                        ? t("appointment-calender", {
                            on: { reloadAppointment: this.init },
                          })
                        : this._e(),
                    ],
                    1
                  ),
                ],
                1
              );
            },
            [],
            !1,
            null,
            null,
            null
          ).exports,
        },
        data: function () {
          return {};
        },
      },
      A = Object(h.a)(
        w,
        function () {
          var t = this,
            e = t._self._c;
          return e(
            "div",
            [
              "administrator" === t.getUserRole()
                ? e("AdminDashboard")
                : t._e(),
              t._v(" "),
              "clinic_admin" === t.getUserRole()
                ? e("ClinicAdminDashboard")
                : t._e(),
              t._v(" "),
              "doctor" === t.getUserRole() ? e("DoctorDashboard") : t._e(),
              t._v(" "),
              "receptionist" === t.getUserRole()
                ? e("ReceptionistDashboard")
                : t._e(),
              t._v(" "),
              "patient" === t.getUserRole() ? e("PatientDashboard") : t._e(),
            ],
            1
          );
        },
        [],
        !1,
        null,
        null,
        null
      ).exports,
      x = n(410),
      z = n(144),
      C = {
        components: { AppointmentCard: x.a, AppointmentForm: z.a },
        data: function () {
          return {
            filterData: {},
            appointmentFormObj: {},
            appBtnText: '<i class="fa fa-plus"></i> Add appointment',
            latestButton: !0,
            addAppointmentButton: !0,
            allStatus: [
              { label: "latest", value: "-1", hide: !0 },
              { label: "All", value: "all" },
              { label: "Completed", value: "3" },
              { label: "Cancelled", value: "0" },
            ],
            selectedDate: null,
            currentDate: null,
          };
        },
        mounted: function () {
          this.$store.commit("TOGGLE_APPOINTMENT_FORM", !1), this.init();
        },
        methods: {
          init: function () {
            (this.filterData = this.defaultFilterData()),
              this.$store.dispatch("userDataModule/fetchUserForDropdown", {
                userRoleName: this.patientRoleName,
              });
            var t = Object.assign({}, this.filterData);
            (t.date = moment(this.filterData.date).format("YYYY-MM-DD")),
              this.$store.dispatch("appointmentModule/fetchAppointmentData", {
                filterData: t,
              }),
              this.$store.dispatch("staticDataModule/fetchStaticData", {
                type: "static_data_with_label",
                static_data_type: "appointment_types",
              });
          },
          defaultAppointmentData: function () {
            return {
              appointment_start_date: this.filterData.date,
              appointment_start_time: "",
              clinic_id: {},
              patient_id: {},
              doctor_id: {},
              visit_type: {},
              description: "",
              status: "",
            };
          },
          defaultFilterData: function () {
            return {
              date: new Date(),
              patient_id: {},
              status: "-1",
              appointmentType: "",
            };
          },
          handleResetFilter: function () {
            this.$store.commit("appointmentModule/RESET_TIME_SLOT"),
              this.$store.commit("TOGGLE_APPOINTMENT_FORM", !1),
              (this.filterData = this.defaultFilterData()),
              this.handleFilterChange();
          },
          handleFilterChange: function () {
            var t = this,
              e = Object.assign({}, this.filterData);
            (e.date = moment(this.filterData.date).format("YYYY-MM-DD")),
              setTimeout(function () {
                (e.patient_id = t.filterData.patient_id),
                  (t.appointmentFormObj.patient_id = e.patient_id),
                  t.$store.dispatch("appointmentModule/fetchAppointmentData", {
                    filterData: e,
                  });
              }, 300);
          },
          handleStatusChange: function (t) {
            (this.filterData.status = t), this.handleFilterChange();
          },
          getTimeSlot: function (t) {
            this.$store.dispatch("appointmentModule/fetchAppointmentSlots", t);
          },
          handleAppointmentForm: function (t) {
            if (this.showAppointmentForm)
              (this.appBtnText =
                '<i class="fa fa-plus"></i> ' +
                this.formTranslation.appointments.add_appointment_btn),
                this.$store.commit("TOGGLE_APPOINTMENT_FORM", !1);
            else if (
              ((this.appBtnText =
                '<i class="fas fa-times"></i> ' +
                this.formTranslation.common.close_form_btn),
              this.$store.commit("TOGGLE_APPOINTMENT_FORM", !0),
              this.$store.commit("appointmentModule/RESET_TIME_SLOT"),
              void 0 === t.id)
            ) {
              var e = this.defaultAppointmentData();
              (e.clinic_id = { id: this.clinic.id, label: this.clinic.name }),
                "doctor" === this.getUserRole()
                  ? (e.doctor_id = {
                      id: this.doctor.ID,
                      label: this.doctor.display_name,
                      timeSlot: this.doctor.timeSlot,
                      enableTeleMed: this.doctor.enableTeleMed,
                    })
                  : "patient" === this.getUserRole()
                  ? (e.patient_id = {
                      id: this.doctor.ID,
                      label: this.doctor.display_name,
                    })
                  : (e.doctor_id = {}),
                (e.appointment_start_date = moment(this.filterData.date).format(
                  "YYYY-MM-DD"
                )),
                (this.appointmentFormObj = e);
            } else this.appointmentFormObj = t;
          },
          handleAppointmentSave: function () {
            this.$store.commit("TOGGLE_APPOINTMENT_FORM", !1),
              this.handleFilterChange();
          },
          handleDateChange: function (t) {
            this.$store.commit("appointmentModule/RESET_TIME_SLOT");
            var e = Object.assign({}, this.filterData);
            (e.date = t.id),
              moment(e.date).format("YYYY-MM-DD") !==
              moment().format("YYYY-MM-DD")
                ? (e.status = "all")
                : (e.status = "-1"),
              (this.appointmentFormObj.appointment_start_date = e.date),
              void 0 !== this.appointmentFormObj.doctor_id &&
              void 0 !== this.appointmentFormObj.doctor_id.id
                ? this.getTimeSlot({
                    date: moment(e.date).format("YYYY-MM-DD"),
                    appointment_id:
                      void 0 !== this.appointmentFormObj.id
                        ? this.appointmentFormObj.id
                        : "",
                    clinic_id: this.appointmentFormObj.clinic_id.id,
                    doctor_id: this.appointmentFormObj.doctor_id.id,
                    patient_id: this.appointmentFormObj.patient_id.id,
                  })
                : this.$store.commit("appointmentModule/RESET_TIME_SLOT"),
              this.$store.dispatch("appointmentModule/fetchAppointmentData", {
                filterData: e,
              });
          },
        },
        computed: {
          patients: function () {
            return this.$store.state.userDataModule.userDropDownData.patients;
          },
          appointmentList: function () {
            return this.$store.state.appointmentModule.appointmentList;
          },
          appointmentTypes: function () {
            return [];
          },
          clinic: function () {
            return this.$store.state.userDataModule.clinic;
          },
          doctor: function () {
            return this.$store.state.userDataModule.user;
          },
          displayLatest: function () {
            var t =
              moment(this.filterData.date).format("YYYY-MM-DD") ===
              moment().format("YYYY-MM-DD");
            return (this.filterData.status = t ? "-1" : "all"), t;
          },
          showAppointmentForm: function () {
            return this.$store.state.showAppointmentForm;
          },
          date: function () {
            return (
              null != this.filterData.date &&
                ((this.selectedDate = moment(this.filterData.date).format(
                  "DD-MM-YYYY"
                )),
                (this.currentDate = this.filterData.date)),
              null != this.selectedDate &&
                ((this.currentDate = moment(this.currentDate).format(
                  "YYYY, MM, DD"
                )),
                (this.filterData.date = new Date(this.currentDate))),
              this.filterData.date
            );
          },
        },
        watch: {
          date: function (t) {
            moment(t).isAfter(moment()) ||
            moment(t).format("YYYY-MM-DD") === moment().format("YYYY-MM-DD")
              ? (this.addAppointmentButton = !0)
              : (this.$store.commit("TOGGLE_APPOINTMENT_FORM", !1),
                (this.addAppointmentButton = !1));
          },
          showAppointmentForm: function (t) {
            this.appBtnText = t
              ? '<i class="fas fa-times"></i> ' +
                this.formTranslation.common.close_form_btn
              : '<i class="fa fa-plus"></i> ' +
                this.formTranslation.appointments.add_appointment_btn;
          },
        },
      },
      k = Object(h.a)(
        C,
        function () {
          var t = this,
            e = t._self._c;
          return e("div", { staticClass: "row" }, [
            e("div", { staticClass: "col-md-6 col-lg-4 col-xl-3" }, [
              e("div", { staticClass: "card shadow" }, [
                e("div", { staticClass: "card-header" }, [
                  e("div", { staticClass: "row" }, [
                    e("div", { staticClass: "col-md-6" }, [
                      e("h3", { staticClass: "text-primary mb-0" }, [
                        t._v(t._s(t.formTranslation.dashboard.filter)),
                      ]),
                    ]),
                    t._v(" "),
                    e("div", { staticClass: "col-md-6" }, [
                      e(
                        "button",
                        {
                          staticClass: "btn btn-sm btn-primary float-right",
                          on: { click: t.handleResetFilter },
                        },
                        [
                          e("i", { staticClass: "fa fa-redo-alt" }),
                          t._v(
                            " " +
                              t._s(t.formTranslation.dashboard.reset) +
                              "\n                        "
                          ),
                        ]
                      ),
                    ]),
                  ]),
                ]),
                t._v(" "),
                e("div", { staticClass: "card-body" }, [
                  e("div", { staticClass: "row" }, [
                    e("div", { staticClass: "col-md-12" }, [
                      e(
                        "div",
                        { staticClass: "form-group" },
                        [
                          e("label", { staticClass: "form-control-label" }, [
                            t._v(t._s(t.formTranslation.common.date) + ": "),
                            e("span", [t._v(t._s(t.selectedDate))]),
                          ]),
                          t._v(" "),
                          e("vc-date-picker", {
                            attrs: {
                              id: "appointmentDate",
                              "title-position": "left",
                              "is-inline": "",
                              "is-expanded": "",
                            },
                            on: { dayclick: t.handleDateChange },
                            scopedSlots: t._u([
                              {
                                key: "default",
                                fn: function (t) {
                                  var n = t.inputValue;
                                  return [
                                    e("input", {
                                      staticClass: "form-control date-picker",
                                      attrs: { readonly: "" },
                                      domProps: { value: n },
                                    }),
                                  ];
                                },
                              },
                            ]),
                            model: {
                              value: t.filterData.date,
                              callback: function (e) {
                                t.$set(t.filterData, "date", e);
                              },
                              expression: "filterData.date",
                            },
                          }),
                        ],
                        1
                      ),
                    ]),
                  ]),
                  t._v(" "),
                  t.kcCheckPermission("patient_appointment_status_change")
                    ? e("div", { staticClass: "row" }, [
                        e("div", { staticClass: "col-md-12" }, [
                          e(
                            "div",
                            { staticClass: "form-group" },
                            [
                              e(
                                "label",
                                {
                                  staticClass: "form-control-label",
                                  attrs: { for: "patient_id" },
                                },
                                [t._v(t._s(t.formTranslation.common.patient))]
                              ),
                              t._v(" "),
                              e("multi-select", {
                                attrs: {
                                  "deselect-label": "",
                                  "select-label": "",
                                  "tag-placeholder":
                                    this.formTranslation.appointments
                                      .tag_patient_plh,
                                  id: "patient_id",
                                  placeholder:
                                    this.formTranslation.appointments
                                      .search_plh,
                                  label: "label",
                                  "track-by": "id",
                                  options: t.patients,
                                },
                                on: {
                                  select: t.handleFilterChange,
                                  remove: t.handleFilterChange,
                                },
                                scopedSlots: t._u(
                                  [
                                    {
                                      key: "noResult",
                                      fn: function () {
                                        return [
                                          t._v(
                                            "\n              " +
                                              t._s(
                                                t.formTranslation.common
                                                  .no_result_found
                                              ) +
                                              "\n            "
                                          ),
                                        ];
                                      },
                                      proxy: !0,
                                    },
                                  ],
                                  null,
                                  !1,
                                  2211710038
                                ),
                                model: {
                                  value: t.filterData.patient_id,
                                  callback: function (e) {
                                    t.$set(t.filterData, "patient_id", e);
                                  },
                                  expression: "filterData.patient_id",
                                },
                              }),
                            ],
                            1
                          ),
                        ]),
                      ])
                    : t._e(),
                ]),
              ]),
            ]),
            t._v(" "),
            e("div", { staticClass: "col-md-6 col-lg-8 col-xl-9" }, [
              e("div", { staticClass: "card shadow" }, [
                e("div", { staticClass: "card-header" }, [
                  e("div", { staticClass: "row" }, [
                    e(
                      "div",
                      { staticClass: "col-md-8 rmb-15" },
                      [
                        e("h3", { staticClass: "text-primary" }, [
                          t._v(
                            t._s(t.formTranslation.dashboard.appointments) + " "
                          ),
                          e(
                            "span",
                            {
                              directives: [
                                {
                                  name: "b-tooltip",
                                  rawName: "v-b-tooltip.hover",
                                  modifiers: { hover: !0 },
                                },
                              ],
                              staticClass: "cursor-pointer small ml-2",
                              attrs: {
                                title: t.formTranslation.common.refresh_list,
                              },
                              on: { click: t.handleFilterChange },
                            },
                            [e("i", { staticClass: "fa fa-sync" })]
                          ),
                        ]),
                        t._v(" "),
                        t._l(t.allStatus, function (n, i) {
                          return "-1" !== n.value || t.displayLatest
                            ? e(
                                "span",
                                {
                                  key: i,
                                  staticClass: "badge mr-2 cursor-pointer",
                                  class:
                                    void 0 !== t.filterData.status &&
                                    t.filterData.status === n.value
                                      ? "badge-primary "
                                      : "badge-outline-primary",
                                  on: {
                                    click: function (e) {
                                      return t.handleStatusChange(n.value);
                                    },
                                  },
                                },
                                [t._v(t._s(n.label))]
                              )
                            : t._e();
                        }),
                      ],
                      2
                    ),
                    t._v(" "),
                    e("div", { staticClass: "col-md-4" }, [
                      e("div", { staticClass: "float-right" }, [
                        t.addAppointmentButton
                          ? e("button", {
                              staticClass: "btn btn-sm btn-primary",
                              attrs: { type: "button" },
                              domProps: { innerHTML: t._s(t.appBtnText) },
                              on: {
                                click: function (e) {
                                  return t.handleAppointmentForm({});
                                },
                              },
                            })
                          : t._e(),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                e(
                  "div",
                  { staticClass: "card-body" },
                  [
                    e("div", { staticClass: "row" }, [
                      e(
                        "div",
                        { staticClass: "col-md-12" },
                        [
                          e(
                            "b-collapse",
                            {
                              attrs: {
                                id: "appointmentForm",
                                visible:
                                  t.showAppointmentForm &&
                                  void 0 === t.appointmentFormObj.id,
                              },
                            },
                            [
                              e("AppointmentForm", {
                                attrs: {
                                  appointmentData: t.appointmentFormObj,
                                },
                                on: {
                                  appointmentSaved: t.handleAppointmentSave,
                                },
                              }),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                    ]),
                    t._v(" "),
                    e("AppointmentCard", {
                      attrs: {
                        "appointment-data": t.appointmentList,
                        appointmentDate: t.filterData.date,
                      },
                      on: { reloadAppointment: t.handleFilterChange },
                    }),
                  ],
                  1
                ),
              ]),
            ]),
          ]);
        },
        [],
        !1,
        null,
        null,
        null
      ).exports,
      S = Object(h.a)(
        {
          data: function () {
            return {};
          },
          mounted: function () {
            this.init();
          },
          methods: { init: function () {} },
          computed: {},
        },
        function () {
          var t = this._self._c;
          return t("div", { staticClass: "row" }, [
            t("div", { staticClass: "col-md-12" }, [
              t(
                "h1",
                {
                  staticClass: "text-gray text-center",
                  staticStyle: { padding: "300px 0px" },
                },
                [
                  t("b", [
                    this._v(
                      this._s(this.formTranslation.notification.forbidden_403)
                    ),
                  ]),
                ]
              ),
            ]),
          ]);
        },
        [],
        !1,
        null,
        null,
        null
      ).exports,
      T = {
        name: "setupStep1",
        props: ["clickedNext"],
        data: function () {
          return { loading: !1 };
        },
        mounted: function () {
          this.$emit("can-continue", { value: !0 }), displayTooltip();
        },
        methods: {
          complete: function () {
            this.$emit("can-continue", { value: !0 });
          },
          handleNextClick: function () {
            (this.loading = !0),
              this.$store.dispatch(
                "userDataModule/updateSetupStep",
                this.currentStep
              ),
              (this.loading = !1);
          },
        },
        watch: {
          $v: {
            handler: function (t) {
              t.$invalid
                ? this.$emit("can-continue", { value: !1 })
                : this.$emit("can-continue", { value: !0 });
            },
            deep: !0,
          },
        },
        computed: {
          currentStep: function () {
            var t = this.$store.state.userDataModule.setups.filter(function (
              t
            ) {
              return "getting_started" === t.name;
            });
            return t.length > 0 ? t[0] : {};
          },
        },
      },
      D = Object(h.a)(
        T,
        function () {
          var t = this,
            e = t._self._c;
          return e(
            "b-row",
            [
              e("b-col", { attrs: { sm: "12", md: "12", lg: "12" } }, [
                e("div", { staticClass: "card p-0 shadow" }, [
                  e("div", { staticClass: "card-header" }, [
                    e("h3", { staticClass: "mb-0" }, [t._v("Get started")]),
                  ]),
                  t._v(" "),
                  e(
                    "div",
                    { staticClass: "card-body" },
                    [
                      e(
                        "b-list-group",
                        [
                          e("b-list-group-item", { attrs: { href: "#" } }, [
                            e("h5", { staticClass: "mb-0" }, [
                              e("b", [
                                t._v(
                                  "  " +
                                    t._s(
                                      t.formTranslation.setup_wizard
                                        .kivicare_ehr
                                    )
                                ),
                              ]),
                            ]),
                          ]),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  t._v(" "),
                  e("div", { staticClass: "card-footer" }, [
                    e("div", { staticClass: "row mt-3" }, [
                      e("div", { staticClass: "col-md-6" }, [
                        void 0 !== t.currentStep.prevStep &&
                        "" !== t.currentStep.prevStep
                          ? e(
                              "button",
                              {
                                staticClass: "btn btn-primary float-left",
                                attrs: { type: "button" },
                              },
                              [
                                t._v(
                                  t._s(t.formTranslation.setup_wizard.prev) +
                                    "\n                        "
                                ),
                              ]
                            )
                          : t._e(),
                      ]),
                      t._v(" "),
                      e("div", { staticClass: "col-md-6" }, [
                        t.loading ||
                        void 0 === t.currentStep.nextStep ||
                        "" === t.currentStep.nextStep
                          ? e(
                              "button",
                              {
                                staticClass: "btn btn-primary float-right",
                                attrs: { type: "submit", disabled: "" },
                              },
                              [
                                e("i", { staticClass: "fa fa-sync fa-spin" }),
                                t._v(
                                  "  " +
                                    t._s(t.formTranslation.common.loading) +
                                    "\n                        "
                                ),
                              ]
                            )
                          : e(
                              "button",
                              {
                                staticClass: "btn btn-primary float-right",
                                attrs: { type: "button" },
                                on: { click: t.handleNextClick },
                              },
                              [
                                t._v("Next "),
                                e("i", {
                                  staticClass: "fa fa-angle-double-right",
                                  attrs: { "aria-hidden": "true" },
                                }),
                              ]
                            ),
                      ]),
                    ]),
                  ]),
                ]),
              ]),
            ],
            1
          );
        },
        [],
        !1,
        null,
        "e1979fce",
        null
      ).exports,
      L = n(351).a,
      q =
        (n(642),
        Object(h.a)(
          L,
          function () {
            var t = this,
              e = t._self._c;
            return e(
              "b-row",
              [
                e("b-col", { attrs: { sm: "12" } }, [
                  e(
                    "form",
                    {
                      attrs: { id: "clinicDataForm", novalidate: !0 },
                      on: {
                        submit: function (e) {
                          return (
                            e.preventDefault(),
                            t.handleSubmit.apply(null, arguments)
                          );
                        },
                      },
                    },
                    [
                      e(
                        "b-card",
                        {
                          staticClass: "p-0 shadow",
                          attrs: {
                            "header-tag": "header",
                            "footer-tag": "footer",
                            "no-body": "",
                          },
                        },
                        [
                          e("b-card-header", [
                            e("h1", { staticClass: "mb-0" }, [
                              t._v(t._s(t.cardTitle)),
                            ]),
                          ]),
                          t._v(" "),
                          e("b-card-body", { staticClass: "pb-0" }, [
                            e("div", { staticClass: "row" }, [
                              e("div", { staticClass: "col-md-8" }, [
                                e("div", { staticClass: "row" }, [
                                  e("div", { staticClass: "col-md-6" }, [
                                    e("div", { staticClass: "form-group" }, [
                                      e(
                                        "label",
                                        {
                                          staticClass: "form-control-label",
                                          attrs: { for: "name" },
                                        },
                                        [
                                          t._v(
                                            " " +
                                              t._s(
                                                t.formTranslation.common.name
                                              ) +
                                              " "
                                          ),
                                          e(
                                            "span",
                                            { staticClass: "text-danger" },
                                            [t._v("*")]
                                          ),
                                        ]
                                      ),
                                      t._v(" "),
                                      e("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: t.clinicData.name,
                                            expression: "clinicData.name",
                                          },
                                        ],
                                        staticClass: "form-control",
                                        class: {
                                          " is-invalid":
                                            t.submitted &&
                                            t.$v.clinicData.name.$error,
                                        },
                                        attrs: {
                                          id: "name",
                                          placeholder:
                                            t.formTranslation.setup_wizard
                                              .plh_enter_clinic,
                                          required: "required",
                                          name: "name",
                                          type: "text",
                                        },
                                        domProps: { value: t.clinicData.name },
                                        on: {
                                          input: function (e) {
                                            e.target.composing ||
                                              t.$set(
                                                t.clinicData,
                                                "name",
                                                e.target.value
                                              );
                                          },
                                        },
                                      }),
                                      t._v(" "),
                                      t.submitted &&
                                      !t.$v.clinicData.name.required
                                        ? e(
                                            "div",
                                            { staticClass: "invalid-feedback" },
                                            [
                                              t._v(
                                                t._s(
                                                  t.formTranslation.common
                                                    .name_required
                                                ) + "\n                      "
                                              ),
                                            ]
                                          )
                                        : t._e(),
                                    ]),
                                  ]),
                                  t._v(" "),
                                  e("div", { staticClass: "col-md-6" }, [
                                    e("div", { staticClass: "form-group" }, [
                                      e(
                                        "label",
                                        {
                                          staticClass: "form-control-label",
                                          attrs: { for: "rif" },
                                        },
                                        [
                                          t._v(" RIF "),
                                          e(
                                            "span",
                                            { staticClass: "text-danger" },
                                            [t._v("*")]
                                          ),
                                        ]
                                      ),
                                      t._v(" "),
                                      e("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: t.clinicData.rif,
                                            expression: "clinicData.rif",
                                          },
                                        ],
                                        staticClass: "form-control",
                                        class: {
                                          " is-invalid":
                                            t.submitted &&
                                            t.$v.clinicData.rif.$error,
                                        },
                                        attrs: {
                                          id: "rif",
                                          placeholder: "RIF",
                                          required: "required",
                                          name: "rif",
                                          type: "text",
                                          maxlength: "15",
                                        },
                                        domProps: { value: t.clinicData.rif },
                                        on: {
                                          input: function (e) {
                                            if (!e.target.composing) {
                                              var n = e.target.value
                                                ? e.target.value
                                                    .toUpperCase()
                                                    .replace(/[^A-Z0-9]/g, "")
                                                    .slice(0, 15)
                                                : "";
                                              t.$set(t.clinicData, "rif", n),
                                                t.$set(
                                                  t.clinicData,
                                                  "username",
                                                  n
                                                ),
                                                t.$set(
                                                  t.clinicData,
                                                  "user_pass",
                                                  n
                                                );
                                            }
                                          },
                                        },
                                      }),
                                      t._v(" "),
                                      t.submitted &&
                                      !t.$v.clinicData.rif.required
                                        ? e(
                                            "div",
                                            { staticClass: "invalid-feedback" },
                                            [t._v(" El RIF es obligatorio ")]
                                          )
                                        : t._e(),
                                    ]),
                                  ]),
                                  t._v(" "),
                                  e("div", { staticClass: "col-md-6" }, [
                                    e("div", { staticClass: "form-group" }, [
                                      e(
                                        "label",
                                        {
                                          staticClass: "form-control-label",
                                          attrs: { for: "email" },
                                        },
                                        [
                                          t._v(
                                            "\n                        " +
                                              t._s(
                                                t.formTranslation.common.email
                                              ) +
                                              " "
                                          ),
                                          e(
                                            "span",
                                            { staticClass: "text-danger" },
                                            [t._v("*")]
                                          ),
                                        ]
                                      ),
                                      t._v(" "),
                                      e("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: t.clinicData.email,
                                            expression: "clinicData.email",
                                          },
                                        ],
                                        staticClass: "form-control",
                                        class: {
                                          " is-invalid":
                                            t.submitted &&
                                            t.$v.clinicData.email.$error,
                                        },
                                        attrs: {
                                          id: "email",
                                          placeholder:
                                            t.formTranslation.setup_wizard
                                              .plh_enter_email,
                                          required: "required",
                                          name: "email",
                                          type: "email",
                                        },
                                        domProps: { value: t.clinicData.email },
                                        on: {
                                          input: function (e) {
                                            e.target.composing ||
                                              t.$set(
                                                t.clinicData,
                                                "email",
                                                e.target.value
                                              );
                                          },
                                        },
                                      }),
                                      t._v(" "),
                                      t.submitted &&
                                      !t.$v.clinicData.email.required
                                        ? e(
                                            "div",
                                            { staticClass: "invalid-feedback" },
                                            [
                                              t._v(
                                                t._s(
                                                  t.formTranslation.common
                                                    .email_required
                                                ) + "\n                      "
                                              ),
                                            ]
                                          )
                                        : t.submitted &&
                                          !t.$v.clinicData.email.emailValidate
                                        ? e(
                                            "div",
                                            { staticClass: "invalid-feedback" },
                                            [
                                              t._v(
                                                t._s(
                                                  t.formTranslation.common
                                                    .invalid_email
                                                ) + "\n                      "
                                              ),
                                            ]
                                          )
                                        : t._e(),
                                    ]),
                                  ]),
                                  t._v(" "),
                                  e("div", { staticClass: "col-md-6" }, [
                                    e("div", { staticClass: "form-group" }, [
                                      e(
                                        "label",
                                        {
                                          staticClass: "form-control-label",
                                          attrs: { for: "specialties" },
                                        },
                                        [
                                          t._v(
                                            "\n                      " +
                                              t._s(
                                                t.formTranslation
                                                  .patient_front_widget
                                                  .specialization
                                              ) +
                                              " "
                                          ),
                                          e(
                                            "span",
                                            { staticClass: "text-danger" },
                                            [t._v("*")]
                                          ),
                                        ]
                                      ),
                                      t._v(" "),
                                      e(
                                        "div",
                                        { staticClass: "kivi-pr" },
                                        [
                                          e("multi-select", {
                                            attrs: {
                                              "deselect-label": "",
                                              "select-label": "",
                                              id: "specialties",
                                              "tag-placeholder":
                                                t.formTranslation.setup_wizard
                                                  .plh_clinic_specialization,
                                              placeholder:
                                                t.formTranslation.setup_wizard
                                                  .plh_specialization,
                                              label: "label",
                                              "track-by": "id",
                                              options: t.specialization,
                                              multiple: !0,
                                              loading:
                                                t.specializationMultiselectLoader,
                                              disabled:
                                                t.specializationMultiselectLoader,
                                              taggable: !0,
                                            },
                                            on: { tag: t.addNewSpecialization },
                                            scopedSlots: t._u([
                                              {
                                                key: "noResult",
                                                fn: function () {
                                                  return [
                                                    t._v(
                                                      "\n                " +
                                                        t._s(
                                                          t.formTranslation
                                                            .common
                                                            .no_result_found
                                                        ) +
                                                        "\n              "
                                                    ),
                                                  ];
                                                },
                                                proxy: !0,
                                              },
                                            ]),
                                            model: {
                                              value: t.clinicData.specialties,
                                              callback: function (e) {
                                                t.$set(
                                                  t.clinicData,
                                                  "specialties",
                                                  e
                                                );
                                              },
                                              expression:
                                                "clinicData.specialties",
                                            },
                                          }),
                                        ],
                                        1
                                      ),
                                      t._v(" "),
                                      e(
                                        "span",
                                        {
                                          staticClass:
                                            "text-primary small font-weight-bold",
                                        },
                                        [
                                          t._v(
                                            t._s(
                                              t.formTranslation.clinic
                                                .note_specialization
                                            )
                                          ),
                                        ]
                                      ),
                                      t._v(" "),
                                      t.submitted &&
                                      !t.$v.clinicData.specialties.required
                                        ? e(
                                            "div",
                                            { staticClass: "invalid-feedback" },
                                            [
                                              t._v(
                                                "  " +
                                                  t._s(
                                                    t.formTranslation.clinic
                                                      .clinic_specialities_required
                                                  ) +
                                                  "\n                      "
                                              ),
                                            ]
                                          )
                                        : t._e(),
                                    ]),
                                  ]),
                                  t._v(" "),
                                  e("div", { staticClass: "col-md-6" }, [
                                    e(
                                      "div",
                                      { staticClass: "form-group" },
                                      [
                                        e(
                                          "label",
                                          {
                                            staticClass: "form-control-label",
                                            attrs: { for: "telephone_no" },
                                          },
                                          [
                                            t._v(
                                              "\n                        " +
                                                t._s(
                                                  t.formTranslation.common
                                                    .contact_no
                                                ) +
                                                " "
                                            ),
                                            e(
                                              "span",
                                              { staticClass: "text-danger" },
                                              [t._v("*")]
                                            ),
                                          ]
                                        ),
                                        t._v(" "),
                                        e("VuePhoneNumberInput", {
                                          attrs: {
                                            id: "telephone_no",
                                            "default-country-code":
                                              t.defaultCountryCode,
                                            clearable: "",
                                            "no-example": "",
                                          },
                                          on: {
                                            update: t.contactUpdateHandaler,
                                          },
                                          model: {
                                            value: t.clinicData.telephone_no,
                                            callback: function (e) {
                                              t.$set(
                                                t.clinicData,
                                                "telephone_no",
                                                e
                                              );
                                            },
                                            expression:
                                              "clinicData.telephone_no",
                                          },
                                        }),
                                        t._v(" "),
                                        t.submitted &&
                                        !t.$v.clinicData.telephone_no.required
                                          ? e(
                                              "div",
                                              {
                                                staticClass: "invalid-feedback",
                                              },
                                              [
                                                t._v(
                                                  " " +
                                                    t._s(
                                                      t.formTranslation.common
                                                        .contact_num_required
                                                    ) +
                                                    "\n                      "
                                                ),
                                              ]
                                            )
                                          : !t.submitted ||
                                            (t.$v.clinicData.telephone_no
                                              .minLength &&
                                              t.$v.clinicData.telephone_no
                                                .maxLength)
                                          ? t._e()
                                          : e(
                                              "div",
                                              {
                                                staticClass: "invalid-feedback",
                                              },
                                              [
                                                t._v(
                                                  t._s(
                                                    t.formTranslation.common
                                                      .contact_validation_1
                                                  ) + "\n                      "
                                                ),
                                              ]
                                            ),
                                      ],
                                      1
                                    ),
                                  ]),
                                  t._v(" "),
                                  e("div", { staticClass: "col-md-6" }, [
                                    e("div", { staticClass: "form-group" }, [
                                      e(
                                        "label",
                                        {
                                          staticClass: "form-control-label",
                                          attrs: { for: "currency_prefix" },
                                        },
                                        [
                                          t._v(
                                            "  " +
                                              t._s(
                                                t.formTranslation.clinic
                                                  .currency_prefix
                                              ) +
                                              " "
                                          ),
                                        ]
                                      ),
                                      t._v(" "),
                                      e("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: t.clinicData.currency_prefix,
                                            expression:
                                              "clinicData.currency_prefix",
                                          },
                                        ],
                                        staticClass: "form-control",
                                        attrs: {
                                          id: "currency_prefix",
                                          placeholder:
                                            t.formTranslation.setup_wizard
                                              .plh_currency_prefix,
                                          name: "currency_prefix",
                                          type: "text",
                                        },
                                        domProps: {
                                          value: t.clinicData.currency_prefix,
                                        },
                                        on: {
                                          input: function (e) {
                                            e.target.composing ||
                                              t.$set(
                                                t.clinicData,
                                                "currency_prefix",
                                                e.target.value
                                              );
                                          },
                                        },
                                      }),
                                    ]),
                                  ]),
                                  t._v(" "),
                                  e("div", { staticClass: "col-md-6" }, [
                                    e("div", { staticClass: "form-group" }, [
                                      e(
                                        "label",
                                        {
                                          staticClass: "form-control-label",
                                          attrs: { for: "currency_postfix" },
                                        },
                                        [
                                          t._v(
                                            "  " +
                                              t._s(
                                                t.formTranslation.clinic
                                                  .currency_postfix
                                              )
                                          ),
                                        ]
                                      ),
                                      t._v(" "),
                                      e("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value:
                                              t.clinicData.currency_postfix,
                                            expression:
                                              "clinicData.currency_postfix",
                                          },
                                        ],
                                        staticClass: "form-control",
                                        attrs: {
                                          id: "currency_postfix",
                                          placeholder:
                                            t.formTranslation.setup_wizard
                                              .plh_currency_postfix,
                                          name: "currency_postfix",
                                          type: "text",
                                        },
                                        domProps: {
                                          value: t.clinicData.currency_postfix,
                                        },
                                        on: {
                                          input: function (e) {
                                            e.target.composing ||
                                              t.$set(
                                                t.clinicData,
                                                "currency_postfix",
                                                e.target.value
                                              );
                                          },
                                        },
                                      }),
                                    ]),
                                  ]),
                                ]),
                              ]),
                              t._v(" "),
                              e("div", { staticClass: "col-md-4" }, [
                                e("div", { staticClass: "form-group" }, [
                                  e(
                                    "div",
                                    { staticClass: "kivicare-avatar-upload" },
                                    [
                                      e(
                                        "div",
                                        { staticClass: "kivicare-avatar-edit" },
                                        [
                                          e("input", {
                                            ref: "file",
                                            staticClass: "p-2",
                                            staticStyle: {
                                              color: "transparent",
                                            },
                                            attrs: { id: "file", type: "file" },
                                            on: {
                                              change: function (e) {
                                                return t.uploadProfile();
                                              },
                                            },
                                          }),
                                          t._v(" "),
                                          e(
                                            "label",
                                            {
                                              directives: [
                                                {
                                                  name: "b-tooltip",
                                                  rawName: "v-b-tooltip.hover",
                                                  modifiers: { hover: !0 },
                                                },
                                              ],
                                              attrs: {
                                                for: "file",
                                                title:
                                                  t.formTranslation.clinic
                                                    .edit_profile_img,
                                              },
                                            },
                                            [
                                              e("i", {
                                                staticClass:
                                                  "fas fa-pencil-alt fa-2x",
                                              }),
                                            ]
                                          ),
                                        ]
                                      ),
                                      t._v(" "),
                                      e(
                                        "div",
                                        {
                                          staticClass:
                                            "kivicare-avatar-preview",
                                        },
                                        [
                                          e("div", {
                                            style:
                                              "background-image: url(" +
                                              t.imagePreview +
                                              ");",
                                            attrs: { id: "imagePreview" },
                                          }),
                                        ]
                                      ),
                                    ]
                                  ),
                                ]),
                              ]),
                            ]),
                            t._v(" "),
                            e("div", { staticClass: "row" }, [
                              e("div", { staticClass: "col-md-12" }, [
                                e("div", { staticClass: "form-group" }, [
                                  e(
                                    "label",
                                    {
                                      staticClass: "form-control-label",
                                      attrs: { for: "address" },
                                    },
                                    [
                                      t._v(
                                        t._s(t.formTranslation.common.address)
                                      ),
                                      e(
                                        "span",
                                        { staticClass: "text-danger" },
                                        [t._v("*")]
                                      ),
                                    ]
                                  ),
                                  t._v(" "),
                                  e("textarea", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: t.clinicData.address,
                                        expression: "clinicData.address",
                                      },
                                    ],
                                    staticClass: "form-control",
                                    class: {
                                      " is-invalid":
                                        t.submitted &&
                                        t.$v.clinicData.address.$error,
                                    },
                                    attrs: {
                                      name: "address",
                                      id: "address",
                                      placeholder:
                                        t.formTranslation.setup_wizard
                                          .plh_enter_address,
                                    },
                                    domProps: { value: t.clinicData.address },
                                    on: {
                                      input: function (e) {
                                        e.target.composing ||
                                          t.$set(
                                            t.clinicData,
                                            "address",
                                            e.target.value
                                          );
                                      },
                                    },
                                  }),
                                  t._v(" "),
                                  t.submitted &&
                                  !t.$v.clinicData.address.required
                                    ? e(
                                        "div",
                                        { staticClass: "invalid-feedback" },
                                        [
                                          t._v(
                                            " " +
                                              t._s(
                                                t.formTranslation.common
                                                  .address_required
                                              ) +
                                              "\n                "
                                          ),
                                        ]
                                      )
                                    : t._e(),
                                ]),
                              ]),
                            ]),
                            t._v(" "),
                            e("div", { staticClass: "row" }, [
                              e("div", { staticClass: "col-lg-4" }, [
                                e("div", { staticClass: "form-group" }, [
                                  e(
                                    "label",
                                    {
                                      staticClass: "form-control-label",
                                      attrs: { for: "city" },
                                    },
                                    [
                                      t._v(
                                        "\n                   " +
                                          t._s(t.formTranslation.common.city)
                                      ),
                                      e(
                                        "span",
                                        { staticClass: "text-danger" },
                                        [t._v("*")]
                                      ),
                                    ]
                                  ),
                                  t._v(" "),
                                  e("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: t.clinicData.city,
                                        expression: "clinicData.city",
                                      },
                                    ],
                                    staticClass: "form-control",
                                    class: {
                                      " is-invalid":
                                        t.submitted &&
                                        t.$v.clinicData.city.$error,
                                    },
                                    attrs: {
                                      id: "city",
                                      placeholder:
                                        t.formTranslation.setup_wizard
                                          .plh_enter_city,
                                      name: "city",
                                      type: "text",
                                    },
                                    domProps: { value: t.clinicData.city },
                                    on: {
                                      input: function (e) {
                                        e.target.composing ||
                                          t.$set(
                                            t.clinicData,
                                            "city",
                                            e.target.value
                                          );
                                      },
                                    },
                                  }),
                                  t._v(" "),
                                  t.submitted && !t.$v.clinicData.city.required
                                    ? e(
                                        "div",
                                        { staticClass: "invalid-feedback" },
                                        [
                                          t._v(
                                            " " +
                                              t._s(
                                                t.formTranslation.common
                                                  .city_required
                                              ) +
                                              "\n                "
                                          ),
                                        ]
                                      )
                                    : t._e(),
                                ]),
                              ]),
                              t._v(" "),
                              e("div", { staticClass: "col-lg-4" }, [
                                e("div", { staticClass: "form-group" }, [
                                  e(
                                    "label",
                                    {
                                      staticClass: "form-control-label",
                                      attrs: { for: "postal_code" },
                                    },
                                    [
                                      t._v(
                                        " " +
                                          t._s(
                                            t.formTranslation.common.country
                                          ) +
                                          " "
                                      ),
                                      e(
                                        "span",
                                        { staticClass: "text-danger" },
                                        [t._v("*")]
                                      ),
                                    ]
                                  ),
                                  t._v(" "),
                                  e("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: t.clinicData.country,
                                        expression: "clinicData.country",
                                      },
                                    ],
                                    staticClass: "form-control",
                                    class: {
                                      " is-invalid":
                                        t.submitted &&
                                        t.$v.clinicData.country.$error,
                                    },
                                    attrs: {
                                      id: "country",
                                      placeholder:
                                        t.formTranslation.setup_wizard
                                          .plh_enter_country,
                                      name: "country",
                                      type: "text",
                                    },
                                    domProps: { value: t.clinicData.country },
                                    on: {
                                      input: function (e) {
                                        e.target.composing ||
                                          t.$set(
                                            t.clinicData,
                                            "country",
                                            e.target.value
                                          );
                                      },
                                    },
                                  }),
                                  t._v(" "),
                                  t.submitted &&
                                  !t.$v.clinicData.country.required
                                    ? e(
                                        "div",
                                        { staticClass: "invalid-feedback" },
                                        [
                                          t._v(
                                            "  " +
                                              t._s(
                                                t.formTranslation.common
                                                  .country_required
                                              ) +
                                              "\n                "
                                          ),
                                        ]
                                      )
                                    : t._e(),
                                ]),
                              ]),
                              t._v(" "),
                              e("div", { staticClass: "col-lg-4" }, [
                                e("div", { staticClass: "form-group" }, [
                                  e(
                                    "label",
                                    {
                                      staticClass: "form-control-label",
                                      attrs: { for: "postal_code" },
                                    },
                                    [
                                      t._v(
                                        t._s(
                                          t.formTranslation.common.postal_code
                                        ) + " "
                                      ),
                                      e(
                                        "span",
                                        { staticClass: "text-danger" },
                                        [t._v("*")]
                                      ),
                                    ]
                                  ),
                                  t._v(" "),
                                  e("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: t.clinicData.postal_code,
                                        expression: "clinicData.postal_code",
                                      },
                                    ],
                                    staticClass: "form-control",
                                    class: {
                                      " is-invalid":
                                        t.submitted &&
                                        t.$v.clinicData.postal_code.$error,
                                    },
                                    attrs: {
                                      id: "postal_code",
                                      placeholder:
                                        t.formTranslation.setup_wizard
                                          .plh_enter_pcode,
                                      name: "postal_code",
                                      type: "text",
                                    },
                                    domProps: {
                                      value: t.clinicData.postal_code,
                                    },
                                    on: {
                                      input: function (e) {
                                        e.target.composing ||
                                          t.$set(
                                            t.clinicData,
                                            "postal_code",
                                            e.target.value
                                          );
                                      },
                                    },
                                  }),
                                  t._v(" "),
                                  t.submitted &&
                                  !t.$v.clinicData.postal_code.required
                                    ? e(
                                        "div",
                                        { staticClass: "invalid-feedback" },
                                        [
                                          t._v(
                                            " " +
                                              t._s(
                                                t.formTranslation.common
                                                  .postal_code_required
                                              ) +
                                              "\n                "
                                          ),
                                        ]
                                      )
                                    : t._e(),
                                ]),
                              ]),
                            ]),
                          ]),
                          t._v(" "),
                          e("b-card-footer", { class: "pb-0 mb-3" }, [
                            e("div", { staticClass: "row mt-3" }, [
                              e("div", { staticClass: "col-md-6" }, [
                                void 0 !== t.currentStep.prevStep &&
                                "" !== t.currentStep.prevStep
                                  ? e(
                                      "button",
                                      {
                                        staticClass:
                                          "btn btn-primary float-left",
                                        attrs: { type: "button" },
                                        on: { click: t.handlePrevClick },
                                      },
                                      [
                                        e("i", {
                                          staticClass:
                                            "fa fa-angle-double-left",
                                          attrs: { "aria-hidden": "true" },
                                        }),
                                        t._v(
                                          " " +
                                            t._s(
                                              t.formTranslation.setup_wizard
                                                .previous
                                            ) +
                                            "\n              "
                                        ),
                                      ]
                                    )
                                  : t._e(),
                              ]),
                              t._v(" "),
                              e("div", { staticClass: "col-md-6" }, [
                                t.loading ||
                                void 0 === t.currentStep.nextStep ||
                                "" === t.currentStep.nextStep
                                  ? e(
                                      "button",
                                      {
                                        staticClass:
                                          "btn btn-primary float-right",
                                        attrs: { type: "submit", disabled: "" },
                                      },
                                      [
                                        e("i", {
                                          staticClass: "fa fa-sync fa-spin",
                                        }),
                                        t._v(
                                          "   " +
                                            t._s(
                                              t.formTranslation.common.loading
                                            ) +
                                            "\n              "
                                        ),
                                      ]
                                    )
                                  : e("button", {
                                      staticClass:
                                        "btn btn-primary float-right",
                                      attrs: { type: "submit" },
                                      domProps: {
                                        innerHTML: t._s(t.nextButtonText),
                                      },
                                    }),
                              ]),
                            ]),
                          ]),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                ]),
              ],
              1
            );
          },
          [],
          !1,
          null,
          "4998f8d6",
          null
        ).exports),
      E = n(352).a,
      j =
        (n(644),
        Object(h.a)(
          E,
          function () {
            var t = this,
              e = t._self._c;
            return e(
              "b-row",
              [
                e("b-col", { attrs: { sm: "12" } }, [
                  e(
                    "form",
                    {
                      attrs: { id: "doctorDataForm", novalidate: !0 },
                      on: {
                        submit: function (e) {
                          return (
                            e.preventDefault(),
                            t.handleSubmit.apply(null, arguments)
                          );
                        },
                      },
                    },
                    [
                      e(
                        "b-card",
                        {
                          staticClass: "p-0 shadow",
                          attrs: {
                            "header-tag": "header",
                            "footer-tag": "footer",
                            "no-body": "",
                          },
                        },
                        [
                          e(
                            "b-card-header",
                            [
                              e(
                                "b-row",
                                [
                                  e(
                                    "b-col",
                                    { attrs: { sm: "8", md: "8", lg: "8" } },
                                    [
                                      e("h3", { staticClass: "mb-2" }, [
                                        t._v(t._s(t.cardTitle)),
                                      ]),
                                    ]
                                  ),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                          t._v(" "),
                          e("b-card-body", { staticClass: "pb-0" }, [
                            e("div", [
                              e("div", { staticClass: "row" }, [
                                e("div", { staticClass: "col-md-12" }, [
                                  e(
                                    "h4",
                                    { staticClass: "text-primary mb-2" },
                                    [
                                      t._v(
                                        " " +
                                          t._s(
                                            t.formTranslation.setup_wizard
                                              .doctor_list
                                          )
                                      ),
                                    ]
                                  ),
                                ]),
                              ]),
                              t._v(" "),
                              e("div", { staticClass: "row" }, [
                                e("div", { staticClass: "table-responsive" }, [
                                  e(
                                    "table",
                                    {
                                      staticClass:
                                        "table table-sm text-center table-bordered",
                                    },
                                    [
                                      e(
                                        "thead",
                                        { staticClass: "thead-light" },
                                        [
                                          e("tr", [
                                            e("th", [
                                              t._v(
                                                t._s(
                                                  t.formTranslation.common.sr_no
                                                )
                                              ),
                                            ]),
                                            t._v(" "),
                                            e("th", [
                                              t._v(
                                                " " +
                                                  t._s(
                                                    t.formTranslation.common
                                                      .name
                                                  )
                                              ),
                                            ]),
                                            t._v(" "),
                                            e("th", [
                                              t._v(
                                                " " +
                                                  t._s(
                                                    t.formTranslation.common
                                                      .email
                                                  )
                                              ),
                                            ]),
                                            t._v(" "),
                                            e("th", [
                                              t._v(
                                                " " +
                                                  t._s(
                                                    t.formTranslation.common
                                                      .contact_no
                                                  )
                                              ),
                                            ]),
                                            t._v(" "),
                                            e("th", [
                                              t._v(
                                                " " +
                                                  t._s(
                                                    t.formTranslation.clinic
                                                      .speciality
                                                  )
                                              ),
                                            ]),
                                            t._v(" "),
                                            e("th", [
                                              t._v(
                                                " " +
                                                  t._s(
                                                    t.formTranslation.common
                                                      .action
                                                  )
                                              ),
                                            ]),
                                          ]),
                                        ]
                                      ),
                                      t._v(" "),
                                      t.doctorsData.dataList.length > 0
                                        ? e(
                                            "tbody",
                                            t._l(
                                              t.doctorsData.dataList,
                                              function (n, i) {
                                                return e("tr", { key: i }, [
                                                  e("td", [t._v(t._s(++i))]),
                                                  t._v(" "),
                                                  e("td", [
                                                    t._v(t._s(n.display_name)),
                                                  ]),
                                                  t._v(" "),
                                                  e("td", [
                                                    t._v(t._s(n.user_email)),
                                                  ]),
                                                  t._v(" "),
                                                  e("td", [
                                                    t._v(
                                                      t._s(
                                                        t._f("checkUndefined")(
                                                          n.mobile_number
                                                        )
                                                      )
                                                    ),
                                                  ]),
                                                  t._v(" "),
                                                  e("td", [
                                                    t._v(
                                                      t._s(
                                                        t.getSpeciality(
                                                          n.specialties
                                                        )
                                                      )
                                                    ),
                                                  ]),
                                                  t._v(" "),
                                                  e("td", [
                                                    e(
                                                      "div",
                                                      {
                                                        staticClass:
                                                          "btn-group",
                                                      },
                                                      [
                                                        e(
                                                          "button",
                                                          {
                                                            directives: [
                                                              {
                                                                name: "b-tooltip",
                                                                rawName:
                                                                  "v-b-tooltip.hover",
                                                                modifiers: {
                                                                  hover: !0,
                                                                },
                                                              },
                                                            ],
                                                            staticClass:
                                                              "btn btn-outline-primary btn-sm",
                                                            attrs: {
                                                              title:
                                                                t
                                                                  .formTranslation
                                                                  .common.edit,
                                                              type: "button",
                                                            },
                                                            on: {
                                                              click: function (
                                                                e
                                                              ) {
                                                                return t.getDoctorDetail(
                                                                  n.ID
                                                                );
                                                              },
                                                            },
                                                          },
                                                          [
                                                            e("i", {
                                                              staticClass:
                                                                "fa fa-pen-alt",
                                                            }),
                                                          ]
                                                        ),
                                                        t._v(" "),
                                                        e(
                                                          "button",
                                                          {
                                                            directives: [
                                                              {
                                                                name: "b-tooltip",
                                                                rawName:
                                                                  "v-b-tooltip.hover",
                                                                modifiers: {
                                                                  hover: !0,
                                                                },
                                                              },
                                                            ],
                                                            staticClass:
                                                              "btn btn-outline-danger btn-sm",
                                                            attrs: {
                                                              title:
                                                                t
                                                                  .formTranslation
                                                                  .clinic_schedule
                                                                  .dt_lbl_dlt,
                                                              type: "button",
                                                            },
                                                            on: {
                                                              click: function (
                                                                e
                                                              ) {
                                                                return t.deleteDoctor(
                                                                  n.ID
                                                                );
                                                              },
                                                            },
                                                          },
                                                          [
                                                            e("i", {
                                                              staticClass:
                                                                "fa fa-trash",
                                                            }),
                                                          ]
                                                        ),
                                                      ]
                                                    ),
                                                  ]),
                                                ]);
                                              }
                                            ),
                                            0
                                          )
                                        : e("tbody", [
                                            e("tr", [
                                              e(
                                                "td",
                                                {
                                                  staticClass: "text-center",
                                                  attrs: { colspan: "8" },
                                                },
                                                [
                                                  t._v(
                                                    t._s(
                                                      t.formTranslation.clinic
                                                        .doctor_record_not_found
                                                    )
                                                  ),
                                                ]
                                              ),
                                              t._v(" "),
                                              e("td", {
                                                staticClass: "d-none",
                                              }),
                                              t._v(" "),
                                              e("td", {
                                                staticClass: "d-none",
                                              }),
                                              t._v(" "),
                                              e("td", {
                                                staticClass: "d-none",
                                              }),
                                              t._v(" "),
                                              e("td", {
                                                staticClass: "d-none",
                                              }),
                                              t._v(" "),
                                              e("td", {
                                                staticClass: "d-none",
                                              }),
                                              t._v(" "),
                                              e("td", {
                                                staticClass: "d-none",
                                              }),
                                              t._v(" "),
                                              e("td", {
                                                staticClass: "d-none",
                                              }),
                                            ]),
                                          ]),
                                    ]
                                  ),
                                ]),
                              ]),
                              t._v(" "),
                              e("hr"),
                              t._v(" "),
                              e("div", { staticClass: "row mt-4" }, [
                                e("div", { staticClass: "col-md-12" }, [
                                  e(
                                    "h4",
                                    { staticClass: "text-primary mb-2" },
                                    [
                                      t._v(
                                        t._s(
                                          t.formTranslation.common.basic_details
                                        )
                                      ),
                                    ]
                                  ),
                                ]),
                                t._v(" "),
                                e(
                                  "div",
                                  { staticClass: "col-md-4 form-group" },
                                  [
                                    e(
                                