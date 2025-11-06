// app.part2-de-30.js
unction (t) {
          return function (e, n, a) {
            var s,
              l = i(e),
              c = r(l.length),
              d = o(a, c);
            if (t && n != n) {
              for (; c > d; ) if ((s = l[d++]) != s) return !0;
            } else
              for (; c > d; d++)
                if ((t || d in l) && l[d] === n) return t || d || 0;
            return !t && -1;
          };
        };
      },
      "5c95": function (t, e, n) {
        var i = n("35e8");
        t.exports = function (t, e, n) {
          for (var r in e) n && t[r] ? (t[r] = e[r]) : i(t, r, e[r]);
          return t;
        };
      },
      "5ca1": function (t, e, n) {
        var i = n("7726"),
          r = n("8378"),
          o = n("32e9"),
          a = n("2aba"),
          s = n("9b43"),
          l = function (t, e, n) {
            var c,
              d,
              u,
              p,
              h = t & l.F,
              f = t & l.G,
              b = t & l.S,
              m = t & l.P,
              g = t & l.B,
              v = f ? i : b ? i[e] || (i[e] = {}) : (i[e] || {}).prototype,
              _ = f ? r : r[e] || (r[e] = {}),
              y = _.prototype || (_.prototype = {});
            for (c in (f && (n = e), n))
              (u = ((d = !h && v && void 0 !== v[c]) ? v : n)[c]),
                (p =
                  g && d
                    ? s(u, i)
                    : m && "function" == typeof u
                    ? s(Function.call, u)
                    : u),
                v && a(v, c, u, t & l.U),
                _[c] != u && o(_, c, p),
                m && y[c] != u && (y[c] = u);
          };
        (i.core = r),
          (l.F = 1),
          (l.G = 2),
          (l.S = 4),
          (l.P = 8),
          (l.B = 16),
          (l.W = 32),
          (l.U = 64),
          (l.R = 128),
          (t.exports = l);
      },
      "5dbc": function (t, e, n) {
        var i = n("d3f4"),
          r = n("8b97").set;
        t.exports = function (t, e, n) {
          var o,
            a = e.constructor;
          return (
            a !== n &&
              "function" == typeof a &&
              (o = a.prototype) !== n.prototype &&
              i(o) &&
              r &&
              r(t, o),
            t
          );
        };
      },
      "5eda": function (t, e, n) {
        var i = n("5ca1"),
          r = n("8378"),
          o = n("79e5");
        t.exports = function (t, e) {
          var n = (r.Object || {})[t] || Object[t],
            a = {};
          (a[t] = e(n)),
            i(
              i.S +
                i.F *
                  o(function () {
                    n(1);
                  }),
              "Object",
              a
            );
        };
      },
      6038: function (t, e, n) {
        "use strict";
        var i =
          (this && this.__importDefault) ||
          function (t) {
            return t && t.__esModule ? t : { default: t };
          };
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.hexToRgba =
            e.colorNameToHex =
            e.isColorName =
            e.shadeColor =
              void 0);
        const r = i(n("292a"));
        e.shadeColor = r.default;
        const o = i(n("45d0"));
        e.isColorName = o.default;
        const a = i(n("1c15"));
        e.hexToRgba = a.default;
        const s = i(n("c3b0"));
        e.colorNameToHex = s.default;
      },
      "613b": function (t, e, n) {
        var i = n("5537")("keys"),
          r = n("ca5a");
        t.exports = function (t) {
          return i[t] || (i[t] = r(t));
        };
      },
      "626a": function (t, e, n) {
        var i = n("2d95");
        t.exports = Object("z").propertyIsEnumerable(0)
          ? Object
          : function (t) {
              return "String" == i(t) ? t.split("") : Object(t);
            };
      },
      "62a0": function (t, e) {
        var n = 0,
          i = Math.random();
        t.exports = function (t) {
          return "Symbol(".concat(
            void 0 === t ? "" : t,
            ")_",
            (++n + i).toString(36)
          );
        };
      },
      "63b6": function (t, e, n) {
        var i = n("e53d"),
          r = n("584a"),
          o = n("d864"),
          a = n("35e8"),
          s = n("07e3"),
          l = function (t, e, n) {
            var c,
              d,
              u,
              p = t & l.F,
              h = t & l.G,
              f = t & l.S,
              b = t & l.P,
              m = t & l.B,
              g = t & l.W,
              v = h ? r : r[e] || (r[e] = {}),
              _ = v.prototype,
              y = h ? i : f ? i[e] : (i[e] || {}).prototype;
            for (c in (h && (n = e), n))
              ((d = !p && y && void 0 !== y[c]) && s(v, c)) ||
                ((u = d ? y[c] : n[c]),
                (v[c] =
                  h && "function" != typeof y[c]
                    ? n[c]
                    : m && d
                    ? o(u, i)
                    : g && y[c] == u
                    ? (function (t) {
                        var e = function (e, n, i) {
                          if (this instanceof t) {
                            switch (arguments.length) {
                              case 0:
                                return new t();
                              case 1:
                                return new t(e);
                              case 2:
                                return new t(e, n);
                            }
                            return new t(e, n, i);
                          }
                          return t.apply(this, arguments);
                        };
                        return (e.prototype = t.prototype), e;
                      })(u)
                    : b && "function" == typeof u
                    ? o(Function.call, u)
                    : u),
                b &&
                  (((v.virtual || (v.virtual = {}))[c] = u),
                  t & l.R && _ && !_[c] && a(_, c, u)));
          };
        (l.F = 1),
          (l.G = 2),
          (l.S = 4),
          (l.P = 8),
          (l.B = 16),
          (l.W = 32),
          (l.U = 64),
          (l.R = 128),
          (t.exports = l);
      },
      "656e": function (t, e, n) {
        "use strict";
        var i = n("79aa");
        function r(t) {
          var e, n;
          (this.promise = new t(function (t, i) {
            if (void 0 !== e || void 0 !== n)
              throw TypeError("Bad Promise constructor");
            (e = t), (n = i);
          })),
            (this.resolve = i(e)),
            (this.reject = i(n));
        }
        t.exports.f = function (t) {
          return new r(t);
        };
      },
      6718: function (t, e, n) {
        var i = n("e53d"),
          r = n("584a"),
          o = n("b8e3"),
          a = n("ccb9"),
          s = n("d9f6").f;
        t.exports = function (t) {
          var e = r.Symbol || (r.Symbol = o ? {} : i.Symbol || {});
          "_" == t.charAt(0) || t in e || s(e, t, { value: a.f(t) });
        };
      },
      6762: function (t, e, n) {
        "use strict";
        var i = n("5ca1"),
          r = n("c366")(!0);
        i(i.P, "Array", {
          includes: function (t) {
            return r(this, t, arguments.length > 1 ? arguments[1] : void 0);
          },
        }),
          n("9c6c")("includes");
      },
      "67bb": function (t, e, n) {
        t.exports = n("f921");
      },
      6821: function (t, e, n) {
        var i = n("626a"),
          r = n("be13");
        t.exports = function (t) {
          return i(r(t));
        };
      },
      "696e": function (t, e, n) {
        n("c207"),
          n("1654"),
          n("6c1c"),
          n("24c5"),
          n("3c11"),
          n("43fc"),
          (t.exports = n("584a").Promise);
      },
      "69a8": function (t, e) {
        var n = {}.hasOwnProperty;
        t.exports = function (t, e) {
          return n.call(t, e);
        };
      },
      "69d3": function (t, e, n) {
        n("6718")("asyncIterator");
      },
      "6a99": function (t, e, n) {
        var i = n("d3f4");
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
      "6abf": function (t, e, n) {
        var i = n("e6f3"),
          r = n("1691").concat("length", "prototype");
        e.f =
          Object.getOwnPropertyNames ||
          function (t) {
            return i(t, r);
          };
      },
      "6b4c": function (t, e) {
        var n = {}.toString;
        t.exports = function (t) {
          return n.call(t).slice(8, -1);
        };
      },
      "6b54": function (t, e, n) {
        "use strict";
        n("3846");
        var i = n("cb7c"),
          r = n("0bfb"),
          o = n("9e1e"),
          a = /./.toString,
          s = function (t) {
            n("2aba")(RegExp.prototype, "toString", t, !0);
          };
        n("79e5")(function () {
          return "/a/b" != a.call({ source: "a", flags: "b" });
        })
          ? s(function () {
              var t = i(this);
              return "/".concat(
                t.source,
                "/",
                "flags" in t
                  ? t.flags
                  : !o && t instanceof RegExp
                  ? r.call(t)
                  : void 0
              );
            })
          : "toString" != a.name &&
            s(function () {
              return a.call(this);
            });
      },
      "6c1c": function (t, e, n) {
        n("c367");
        for (
          var i = n("e53d"),
            r = n("35e8"),
            o = n("481b"),
            a = n("5168")("toStringTag"),
            s =
              "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(
                ","
              ),
            l = 0;
          l < s.length;
          l++
        ) {
          var c = s[l],
            d = i[c],
            u = d && d.prototype;
          u && !u[a] && r(u, a, c), (o[c] = o.Array);
        }
      },
      "71c1": function (t, e, n) {
        var i = n("3a38"),
          r = n("25eb");
        t.exports = function (t) {
          return function (e, n) {
            var o,
              a,
              s = String(r(e)),
              l = i(n),
              c = s.length;
            return l < 0 || l >= c
              ? t
                ? ""
                : void 0
              : (o = s.charCodeAt(l)) < 55296 ||
                o > 56319 ||
                l + 1 === c ||
                (a = s.charCodeAt(l + 1)) < 56320 ||
                a > 57343
              ? t
                ? s.charAt(l)
                : o
              : t
              ? s.slice(l, l + 2)
              : a - 56320 + ((o - 55296) << 10) + 65536;
          };
        };
      },
      7514: function (t, e, n) {
        "use strict";
        var i = n("5ca1"),
          r = n("0a49")(5),
          o = !0;
        "find" in [] &&
          Array(1).find(function () {
            o = !1;
          }),
          i(i.P + i.F * o, "Array", {
            find: function (t) {
              return r(this, t, arguments.length > 1 ? arguments[1] : void 0);
            },
          }),
          n("9c6c")("find");
      },
      "765d": function (t, e, n) {
        n("6718")("observable");
      },
      7726: function (t, e) {
        var n = (t.exports =
          "undefined" != typeof window && window.Math == Math
            ? window
            : "undefined" != typeof self && self.Math == Math
            ? self
            : Function("return this")());
        "number" == typeof __g && (__g = n);
      },
      "774e": function (t, e, n) {
        t.exports = n("d2d5");
      },
      "77f1": function (t, e, n) {
        var i = n("4588"),
          r = Math.max,
          o = Math.min;
        t.exports = function (t, e) {
          return (t = i(t)) < 0 ? r(t + e, 0) : o(t, e);
        };
      },
      "794b": function (t, e, n) {
        t.exports =
          !n("8e60") &&
          !n("294c")(function () {
            return (
              7 !=
              Object.defineProperty(n("1ec9")("div"), "a", {
                get: function () {
                  return 7;
                },
              }).a
            );
          });
      },
      "795b": function (t, e, n) {
        t.exports = n("696e");
      },
      "79aa": function (t, e) {
        t.exports = function (t) {
          if ("function" != typeof t)
            throw TypeError(t + " is not a function!");
          return t;
        };
      },
      "79e5": function (t, e) {
        t.exports = function (t) {
          try {
            return !!t();
          } catch (t) {
            return !0;
          }
        };
      },
      "7cd6": function (t, e, n) {
        var i = n("40c3"),
          r = n("5168")("iterator"),
          o = n("481b");
        t.exports = n("584a").getIteratorMethod = function (t) {
          if (null != t) return t[r] || t["@@iterator"] || o[i(t)];
        };
      },
      "7e90": function (t, e, n) {
        var i = n("d9f6"),
          r = n("e4ae"),
          o = n("c3a1");
        t.exports = n("8e60")
          ? Object.defineProperties
          : function (t, e) {
              r(t);
              for (var n, a = o(e), s = a.length, l = 0; s > l; )
                i.f(t, (n = a[l++]), e[n]);
              return t;
            };
      },
      "7f20": function (t, e, n) {
        var i = n("86cc").f,
          r = n("69a8"),
          o = n("2b4c")("toStringTag");
        t.exports = function (t, e, n) {
          t &&
            !r((t = n ? t : t.prototype), o) &&
            i(t, o, { configurable: !0, value: e });
        };
      },
      "7f7f": function (t, e, n) {
        var i = n("86cc").f,
          r = Function.prototype,
          o = /^\s*function ([^ (]*)/;
        "name" in r ||
          (n("9e1e") &&
            i(r, "name", {
              configurable: !0,
              get: function () {
                try {
                  return ("" + this).match(o)[1];
                } catch (t) {
                  return "";
                }
              },
            }));
      },
      "7f9a": function (t, e, n) {},
      8378: function (t, e) {
        var n = (t.exports = { version: "2.6.11" });
        "number" == typeof __e && (__e = n);
      },
      8436: function (t, e) {
        t.exports = function () {};
      },
      "84f2": function (t, e) {
        t.exports = {};
      },
      "85f2": function (t, e, n) {
        t.exports = n("454f");
      },
      "85fe": function (t, e, n) {
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
          function r(t) {
            return (
              (function (t) {
                if (Array.isArray(t)) {
                  for (var e = 0, n = new Array(t.length); e < t.length; e++)
                    n[e] = t[e];
                  return n;
                }
              })(t) ||
              (function (t) {
                if (
                  Symbol.iterator in Object(t) ||
                  "[object Arguments]" === Object.prototype.toString.call(t)
                )
                  return Array.from(t);
              })(t) ||
              (function () {
                throw new TypeError(
                  "Invalid attempt to spread non-iterable instance"
                );
              })()
            );
          }
          n.d(e, "a", function () {
            return l;
          });
          var o = (function () {
            function t(e, n, i) {
              !(function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, t),
                (this.el = e),
                (this.observer = null),
                (this.frozen = !1),
                this.createObserver(n, i);
            }
            var e;
            return (
              (e = [
                {
                  key: "createObserver",
                  value: function (t, e) {
                    var n = this;
                    if (
                      (this.observer && this.destroyObserver(), !this.frozen)
                    ) {
                      var i;
                      if (
                        ((this.options =
                          "function" == typeof (i = t) ? { callback: i } : i),
                        (this.callback = function (t, e) {
                          n.options.callback(t, e),
                            t &&
                              n.options.once &&
                              ((n.frozen = !0), n.destroyObserver());
                        }),
                        this.callback && this.options.throttle)
                      ) {
                        var o = (this.options.throttleOptions || {}).leading;
                        this.callback = (function (t, e) {
                          var n,
                            i,
                            o,
                            a =
                              arguments.length > 2 && void 0 !== arguments[2]
                                ? arguments[2]
                                : {},
                            s = function (s) {
                              for (
                                var l = arguments.length,
                                  c = new Array(l > 1 ? l - 1 : 0),
                                  d = 1;
                                d < l;
                                d++
                              )
                                c[d - 1] = arguments[d];
                              if (((o = c), !n || s !== i)) {
                                var u = a.leading;
                                "function" == typeof u && (u = u(s, i)),
                                  (n && s === i) ||
                                    !u ||
                                    t.apply(void 0, [s].concat(r(o))),
                                  (i = s),
                                  clearTimeout(n),
                                  (n = setTimeout(function () {
                                    t.apply(void 0, [s].concat(r(o))), (n = 0);
                                  }, e));
                              }
                            };
                          return (
                            (s._clear = function () {
                              clearTimeout(n), (n = null);
                            }),
                            s
                          );
                        })(this.callback, this.options.throttle, {
                          leading: function (t) {
                            return (
                              "both" === o ||
                              ("visible" === o && t) ||
                              ("hidden" === o && !t)
                            );
                          },
                        });
                      }
                      (this.oldResult = void 0),
                        (this.observer = new IntersectionObserver(function (t) {
                          var e = t[0];
                          if (t.length > 1) {
                            var i = t.find(function (t) {
                              return t.isIntersecting;
                            });
                            i && (e = i);
                          }
                          if (n.callback) {
                            var r =
                              e.isIntersecting &&
                              e.intersectionRatio >= n.threshold;
                            if (r === n.oldResult) return;
                            (n.oldResult = r), n.callback(r, e);
                          }
                        }, this.options.intersection)),
                        e.context.$nextTick(function () {
                          n.observer && n.observer.observe(n.el);
                        });
                    }
                  },
                },
                {
                  key: "destroyObserver",
                  value: function () {
                    this.observer &&
                      (this.observer.disconnect(), (this.observer = null)),
                      this.callback &&
                        this.callback._clear &&
                        (this.callback._clear(), (this.callback = null));
                  },
                },
                {
                  key: "threshold",
                  get: function () {
                    return (
                      (this.options.intersection &&
                        this.options.intersection.threshold) ||
                      0
                    );
                  },
                },
              ]) &&
                (function (t, e) {
                  for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    (i.enumerable = i.enumerable || !1),
                      (i.configurable = !0),
                      "value" in i && (i.writable = !0),
                      Object.defineProperty(t, i.key, i);
                  }
                })(t.prototype, e),
              t
            );
          })();
          function a(t, e, n) {
            var i = e.value;
            if (i)
              if ("undefined" == typeof IntersectionObserver);
              else {
                var r = new o(t, i, n);
                t._vue_visibilityState = r;
              }
          }
          function s(t) {
            var e = t._vue_visibilityState;
            e && (e.destroyObserver(), delete t._vue_visibilityState);
          }
          var l = {
              bind: a,
              update: function (t, e, n) {
                var r = e.value;
                if (
                  !(function t(e, n) {
                    if (e === n) return !0;
                    if ("object" === i(e)) {
                      for (var r in e) if (!t(e[r], n[r])) return !1;
                      return !0;
                    }
                    return !1;
                  })(r, e.oldValue)
                ) {
                  var o = t._vue_visibilityState;
                  r
                    ? o
                      ? o.createObserver(r, n)
                      : a(t, { value: r }, n)
                    : s(t);
                }
              },
              unbind: s,
            },
            c = {
              version: "0.4.6",
              install: function (t) {
                t.directive("observe-visibility", l);
              },
            },
            d = null;
          "undefined" != typeof window
            ? (d = window.Vue)
            : void 0 !== t && (d = t.Vue),
            d && d.use(c);
        }).call(this, n("c8ba"));
      },
      "86cc": function (t, e, n) {
        var i = n("cb7c"),
          r = n("c69a"),
          o = n("6a99"),
          a = Object.defineProperty;
        e.f = n("9e1e")
          ? Object.defineProperty
          : function (t, e, n) {
              if ((i(t), (e = o(e, !0)), i(n), r))
                try {
                  return a(t, e, n);
                } catch (t) {}
              if ("get" in n || "set" in n)
                throw TypeError("Accessors not supported!");
              return "value" in n && (t[e] = n.value), t;
            };
      },
      8875: function (t, e, n) {
        var i, r;
        "undefined" != typeof self && self,
          void 0 ===
            (r =
              "function" ==
              typeof (i = function () {
                return function () {
                  if (document.currentScript) return document.currentScript;
                  try {
                    throw new Error();
                  } catch (c) {
                    var t,
                      e,
                      n,
                      i =
                        /.*at [^(]*\((.*):(.+):(.+)\)$/gi.exec(c.stack) ||
                        /@([^@]*):(\d+):(\d+)\s*$/gi.exec(c.stack),
                      r = (i && i[1]) || !1,
                      o = (i && i[2]) || !1,
                      a = document.location.href.replace(
                        document.location.hash,
                        ""
                      ),
                      s = document.getElementsByTagName("script");
                    r === a &&
                      ((t = document.documentElement.outerHTML),
                      (e = new RegExp(
                        "(?:[^\\n]+?\\n){0," +
                          (o - 2) +
                          "}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*",
                        "i"
                      )),
                      (n = t.replace(e, "$1").trim()));
                    for (var l = 0; l < s.length; l++) {
                      if ("interactive" === s[l].readyState) return s[l];
                      if (s[l].src === r) return s[l];
                      if (
                        r === a &&
                        s[l].innerHTML &&
                        s[l].innerHTML.trim() === n
                      )
                        return s[l];
                    }
                    return null;
                  }
                };
              })
                ? i.apply(e, [])
                : i) || (t.exports = r);
      },
      "8b97": function (t, e, n) {
        var i = n("d3f4"),
          r = n("cb7c"),
          o = function (t, e) {
            if ((r(t), !i(e) && null !== e))
              throw TypeError(e + ": can't set as prototype!");
          };
        t.exports = {
          set:
            Object.setPrototypeOf ||
            ("__proto__" in {}
              ? (function (t, e, i) {
                  try {
                    (i = n("9b43")(
                      Function.call,
                      n("11e9").f(Object.prototype, "__proto__").set,
                      2
                    ))(t, []),
                      (e = !(t instanceof Array));
                  } catch (t) {
                    e = !0;
                  }
                  return function (t, n) {
                    return o(t, n), e ? (t.__proto__ = n) : i(t, n), t;
                  };
                })({}, !1)
              : void 0),
          check: o,
        };
      },
      "8bbf": function (t, e) {
        t.exports = n(34);
      },
      "8e60": function (t, e, n) {
        t.exports = !n("294c")(function () {
          return (
            7 !=
            Object.defineProperty({}, "a", {
              get: function () {
                return 7;
              },
            }).a
          );
        });
      },
      "8e6e": function (t, e, n) {
        var i = n("5ca1"),
          r = n("990b"),
          o = n("6821"),
          a = n("11e9"),
          s = n("f1ae");
        i(i.S, "Object", {
          getOwnPropertyDescriptors: function (t) {
            for (
              var e, n, i = o(t), l = a.f, c = r(i), d = {}, u = 0;
              c.length > u;

            )
              void 0 !== (n = l(i, (e = c[u++]))) && s(d, e, n);
            return d;
          },
        });
      },
      "8f60": function (t, e, n) {
        "use strict";
        var i = n("a159"),
          r = n("aebd"),
          o = n("45f2"),
          a = {};
        n("35e8")(a, n("5168")("iterator"), function () {
          return this;
        }),
          (t.exports = function (t, e, n) {
            (t.prototype = i(a, { next: r(1, n) })), o(t, e + " Iterator");
          });
      },
      9003: function (t, e, n) {
        var i = n("6b4c");
        t.exports =
          Array.isArray ||
          function (t) {
            return "Array" == i(t);
          };
      },
      9093: function (t, e, n) {
        var i = n("ce10"),
          r = n("e11e").concat("length", "prototype");
        e.f =
          Object.getOwnPropertyNames ||
          function (t) {
            return i(t, r);
          };
      },
      9138: function (t, e, n) {
        t.exports = n("35e8");
      },
      "95d5": function (t, e, n) {
        var i = n("40c3"),
          r = n("5168")("iterator"),
          o = n("481b");
        t.exports = n("584a").isIterable = function (t) {
          var e = Object(t);
          return void 0 !== e[r] || "@@iterator" in e || o.hasOwnProperty(i(e));
        };
      },
      "96cf": function (t, e, n) {
        var i = (function (t) {
          "use strict";
          var e = Object.prototype,
            n = e.hasOwnProperty,
            i = "function" == typeof Symbol ? Symbol : {},
            r = i.iterator || "@@iterator",
            o = i.asyncIterator || "@@asyncIterator",
            a = i.toStringTag || "@@toStringTag";
          function s(t, e, n) {
            return (
              Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              }),
              t[e]
            );
          }
          try {
            s({}, "");
          } catch (t) {
            s = function (t, e, n) {
              return (t[e] = n);
            };
          }
          function l(t, e, n, i) {
            var r = e && e.prototype instanceof u ? e : u,
              o = Object.create(r.prototype),
              a = new w(i || []);
            return (
              (o._invoke = (function (t, e, n) {
                var i = "suspendedStart";
                return function (r, o) {
                  if ("executing" === i)
                    throw new Error("Generator is already running");
                  if ("completed" === i) {
                    if ("throw" === r) throw o;
                    return { value: void 0, done: !0 };
                  }
                  for (n.method = r, n.arg = o; ; ) {
                    var a = n.delegate;
                    if (a) {
                      var s = y(a, n);
                      if (s) {
                        if (s === d) continue;
                        return s;
                      }
                    }
                    if ("next" === n.method) n.sent = n._sent = n.arg;
                    else if ("throw" === n.method) {
                      if ("suspendedStart" === i)
                        throw ((i = "completed"), n.arg);
                      n.dispatchException(n.arg);
                    } else "return" === n.method && n.abrupt("return", n.arg);
                    i = "executing";
                    var l = c(t, e, n);
                    if ("normal" === l.type) {
                      if (
                        ((i = n.done ? "completed" : "suspendedYield"),
                        l.arg === d)
                      )
                        continue;
                      return { value: l.arg, done: n.done };
                    }
                    "throw" === l.type &&
                      ((i = "completed"),
                      (n.method = "throw"),
                      (n.arg = l.arg));
                  }
                };
              })(t, n, a)),
              o
            );
          }
          function c(t, e, n) {
            try {
              return { type: "normal", arg: t.call(e, n) };
            } catch (t) {
              return { type: "throw", arg: t };
            }
          }
          t.wrap = l;
          var d = {};
          function u() {}
          function p() {}
          function h() {}
          var f = {};
          s(f, r, function () {
            return this;
          });
          var b = Object.getPrototypeOf,
            m = b && b(b(A([])));
          m && m !== e && n.call(m, r) && (f = m);
          var g = (h.prototype = u.prototype = Object.create(f));
          function v(t) {
            ["next", "throw", "return"].forEach(function (e) {
              s(t, e, function (t) {
                return this._invoke(e, t);
              });
            });
          }
          function _(t, e) {
            var i;
            this._invoke = function (r, o) {
              function a() {
                return new e(function (i, a) {
                  !(function i(r, o, a, s) {
                    var l = c(t[r], t, o);
                    if ("throw" !== l.type) {
                      var d = l.arg,
                        u = d.value;
                      return u && "object" == typeof u && n.call(u, "__await")
                        ? e.resolve(u.__await).then(
                            function (t) {
                              i("next", t, a, s);
                            },
                            function (t) {
                              i("throw", t, a, s);
                            }
                          )
                        : e.resolve(u).then(
                            function (t) {
                              (d.value = t), a(d);
                            },
                            function (t) {
                              return i("throw", t, a, s);
                            }
                          );
                    }
                    s(l.arg);
                  })(r, o, i, a);
                });
              }
              return (i = i ? i.then(a, a) : a());
            };
          }
          function y(t, e) {
            var n = t.iterator[e.method];
            if (void 0 === n) {
              if (((e.delegate = null), "throw" === e.method)) {
                if (
                  t.iterator.return &&
                  ((e.method = "return"),
                  (e.arg = void 0),
                  y(t, e),
                  "throw" === e.method)
                )
                  return d;
                (e.method = "throw"),
                  (e.arg = new TypeError(
                    "The iterator does not provide a 'throw' method"
                  ));
              }
              return d;
            }
            var i = c(n, t.iterator, e.arg);
            if ("throw" === i.type)
              return (
                (e.method = "throw"), (e.arg = i.arg), (e.delegate = null), d
              );
            var r = i.arg;
            return r
              ? r.done
                ? ((e[t.resultName] = r.value),
                  (e.next = t.nextLoc),
                  "return" !== e.method &&
                    ((e.method = "next"), (e.arg = void 0)),
                  (e.delegate = null),
                  d)
                : r
              : ((e.method = "throw"),
                (e.arg = new TypeError("iterator result is not an object")),
                (e.delegate = null),
                d);
          }
          function M(t) {
            var e = { tryLoc: t[0] };
            1 in t && (e.catchLoc = t[1]),
              2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
              this.tryEntries.push(e);
          }
          function O(t) {
            var e = t.completion || {};
            (e.type = "normal"), delete e.arg, (t.completion = e);
          }
          function w(t) {
            (this.tryEntries = [{ tryLoc: "root" }]),
              t.forEach(M, this),
              this.reset(!0);
          }
          function A(t) {
            if (t) {
              var e = t[r];
              if (e) return e.call(t);
              if ("function" == typeof t.next) return t;
              if (!isNaN(t.length)) {
                var i = -1,
                  o = function e() {
                    for (; ++i < t.length; )
                      if (n.call(t, i))
                        return (e.value = t[i]), (e.done = !1), e;
                    return (e.value = void 0), (e.done = !0), e;
                  };
                return (o.next = o);
              }
            }
            return { next: x };
          }
          function x() {
            return { value: void 0, done: !0 };
          }
          return (
            (p.prototype = h),
            s(g, "constructor", h),
            s(h, "constructor", p),
            (p.displayName = s(h, a, "GeneratorFunction")),
            (t.isGeneratorFunction = function (t) {
              var e = "function" == typeof t && t.constructor;
              return (
                !!e &&
                (e === p || "GeneratorFunction" === (e.displayName || e.name))
              );
            }),
            (t.mark = function (t) {
              return (
                Object.setPrototypeOf
                  ? Object.setPrototypeOf(t, h)
                  : ((t.__proto__ = h), s(t, a, "GeneratorFunction")),
                (t.prototype = Object.create(g)),
                t
              );
            }),
            (t.awrap = function (t) {
              return { __await: t };
            }),
            v(_.prototype),
            s(_.prototype, o, function () {
              return this;
            }),
            (t.AsyncIterator = _),
            (t.async = function (e, n, i, r, o) {
              void 0 === o && (o = Promise);
              var a = new _(l(e, n, i, r), o);
              return t.isGeneratorFunction(n)
                ? a
                : a.next().then(function (t) {
                    return t.done ? t.value : a.next();
                  });
            }),
            v(g),
            s(g, a, "Generator"),
            s(g, r, function () {
              return this;
            }),
            s(g, "toString", function () {
              return "[object Generator]";
            }),
            (t.keys = function (t) {
              var e = [];
              for (var n in t) e.push(n);
              return (
                e.reverse(),
                function n() {
                  for (; e.length; ) {
                    var i = e.pop();
                    if (i in t) return (n.value = i), (n.done = !1), n;
                  }
                  return (n.done = !0), n;
                }
              );
            }),
            (t.values = A),
            (w.prototype = {
              constructor: w,
              reset: function (t) {
                if (
                  ((this.prev = 0),
                  (this.next = 0),
                  (this.sent = this._sent = void 0),
                  (this.done = !1),
                  (this.delegate = null),
                  (this.method = "next"),
                  (this.arg = void 0),
                  this.tryEntries.forEach(O),
                  !t)
                )
                  for (var e in this)
                    "t" === e.charAt(0) &&
                      n.call(this, e) &&
                      !isNaN(+e.slice(1)) &&
                      (this[e] = void 0);
              },
              stop: function () {
                this.done = !0;
                var t = this.tryEntries[0].completion;
                if ("throw" === t.type) throw t.arg;
                return this.rval;
              },
              dispatchException: function (t) {
                if (this.done) throw t;
                var e = this;
                function i(n, i) {
                  return (
                    (a.type = "throw"),
                    (a.arg = t),
                    (e.next = n),
                    i && ((e.method = "next"), (e.arg = void 0)),
                    !!i
                  );
                }
                for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                  var o = this.tryEntries[r],
                    a = o.completion;
                  if ("root" === o.tryLoc) return i("end");
                  if (o.tryLoc <= this.prev) {
                    var s = n.call(o, "catchLoc"),
                      l = n.call(o, "finallyLoc");
                    if (s && l) {
                      if (this.prev < o.catchLoc) return i(o.catchLoc, !0);
                      if (this.prev < o.finallyLoc) return i(o.finallyLoc);
                    } else if (s) {
                      if (this.prev < o.catchLoc) return i(o.catchLoc, !0);
                    } else {
                      if (!l)
                        throw new Error(
                          "try statement without catch or finally"
                        );
                      if (this.prev < o.finallyLoc) return i(o.finallyLoc);
                    }
                  }
                }
              },
              abrupt: function (t, e) {
                for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                  var r = this.tryEntries[i];
                  if (
                    r.tryLoc <= this.prev &&
                    n.call(r, "finallyLoc") &&
                    this.prev < r.finallyLoc
                  ) {
                    var o = r;
                    break;
                  }
                }
                o &&
                  ("break" === t || "continue" === t) &&
                  o.tryLoc <= e &&
                  e <= o.finallyLoc &&
                  (o = null);
                var a = o ? o.completion : {};
                return (
                  (a.type = t),
                  (a.arg = e),
                  o
                    ? ((this.method = "next"), (this.next = o.finallyLoc), d)
                    : this.complete(a)
                );
              },
              complete: function (t, e) {
                if ("throw" === t.type) throw t.arg;
                return (
                  "break" === t.type || "continue" === t.type
                    ? (this.next = t.arg)
                    : "return" === t.type
                    ? ((this.rval = this.arg = t.arg),
                      (this.method = "return"),
                      (this.next = "end"))
                    : "normal" === t.type && e && (this.next = e),
                  d
                );
              },
              finish: function (t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                  var n = this.tryEntries[e];
                  if (n.finallyLoc === t)
                    return this.complete(n.completion, n.afterLoc), O(n), d;
                }
              },
              catch: function (t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                  var n = this.tryEntries[e];
                  if (n.tryLoc === t) {
                    var i = n.completion;
                    if ("throw" === i.type) {
                      var r = i.arg;
                      O(n);
                    }
                    return r;
                  }
                }
                throw new Error("illegal catch attempt");
              },
              delegateYield: function (t, e, n) {
                return (
                  (this.delegate = {
                    iterator: A(t),
                    resultName: e,
                    nextLoc: n,
                  }),
                  "next" === this.method && (this.arg = void 0),
                  d
                );
              },
            }),
            t
          );
        })(t.exports);
        try {
          regeneratorRuntime = i;
        } catch (t) {
          "object" == typeof globalThis
            ? (globalThis.regeneratorRuntime = i)
            : Function("r", "regeneratorRuntime = r")(i);
        }
      },
      "990b": function (t, e, n) {
        var i = n("9093"),
          r = n("2621"),
          o = n("cb7c"),
          a = n("7726").Reflect;
        t.exports =
          (a && a.ownKeys) ||
          function (t) {
            var e = i.f(o(t)),
              n = r.f;
            return n ? e.concat(n(t)) : e;
          };
      },
      "9aa9": function (t, e) {
        e.f = Object.getOwnPropertySymbols;
      },
      "9b43": function (t, e, n) {
        var i = n("d8e8");
        t.exports = function (t, e, n) {
          if ((i(t), void 0 === e)) return t;
          switch (n) {
            case 1:
              return function (n) {
                return t.call(e, n);
              };
            case 2:
              return function (n, i) {
                return t.call(e, n, i);
              };
            case 3:
              return function (n, i, r) {
                return t.call(e, n, i, r);
              };
          }
          return function () {
            return t.apply(e, arguments);
          };
        };
      },
      "9c6c": function (t, e, n) {
        var i = n("2b4c")("unscopables"),
          r = Array.prototype;
        null == r[i] && n("32e9")(r, i, {}),
          (t.exports = function (t) {
            r[i][t] = !0;
          });
      },
      "9def": function (t, e, n) {
        var i = n("4588"),
          r = Math.min;
        t.exports = function (t) {
          return t > 0 ? r(i(t), 9007199254740991) : 0;
        };
      },
      "9e1e": function (t, e, n) {
        t.exports = !n("79e5")(function () {
          return (
            7 !=
            Object.defineProperty({}, "a", {
              get: function () {
                return 7;
              },
            }).a
          );
        });
      },
      a159: function (t, e, n) {
        var i = n("e4ae"),
          r = n("7e90"),
          o = n("1691"),
          a = n("5559")("IE_PROTO"),
          s = function () {},
          l = function () {
            var t,
              e = n("1ec9")("iframe"),
              i = o.length;
            for (
              e.style.display = "none",
                n("32fc").appendChild(e),
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
      a22a: function (t, e, n) {
        var i = n("d864"),
          r = n("b0dc"),
          o = n("3702"),
          a = n("e4ae"),
          s = n("b447"),
          l = n("7cd6"),
          c = {},
          d = {};
        ((e = t.exports =
          function (t, e, n, u, p) {
            var h,
              f,
              b,
              m,
              g = p
                ? function () {
                    return t;
                  }
                : l(t),
              v = i(n, u, e ? 2 : 1),
              _ = 0;
            if ("function" != typeof g)
              throw TypeError(t + " is not iterable!");
            if (o(g)) {
              for (h = s(t.length); h > _; _++)
                if (
                  (m = e ? v(a((f = t[_]))[0], f[1]) : v(t[_])) === c ||
                  m === d
                )
                  return m;
            } else
              for (b = g.call(t); !(f = b.next()).done; )
                if ((m = r(b, v, f.value, e)) === c || m === d) return m;
          }).BREAK = c),
          (e.RETURN = d);
      },
      a745: function (t, e, n) {
        t.exports = n("f410");
      },
      aa77: function (t, e, n) {
        var i = n("5ca1"),
          r = n("be13"),
          o = n("79e5"),
          a = n("fdef"),
          s = "[" + a + "]",
          l = RegExp("^" + s + s + "*"),
          c = RegExp(s + s + "*$"),
          d = function (t, e, n) {
            var r = {},
              s = o(function () {
                return !!a[t]() || "​" != "​"[t]();
              }),
              l = (r[t] = s ? e(u) : a[t]);
            n && (r[n] = l), i(i.P + i.F * s, "String", r);
          },
          u = (d.trim = function (t, e) {
            return (
              (t = String(r(t))),
              1 & e && (t = t.replace(l, "")),
              2 & e && (t = t.replace(c, "")),
              t
            );
          });
        t.exports = d;
      },
      aae3: function (t, e, n) {
        var i = n("d3f4"),
          r = n("2d95"),
          o = n("2b4c")("match");
        t.exports = function (t) {
          var e;
          return i(t) && (void 0 !== (e = t[o]) ? !!e : "RegExp" == r(t));
        };
      },
      aba2: function (t, e, n) {
        var i = n("e53d"),
          r = n("4178").set,
          o = i.MutationObserver || i.WebKitMutationObserver,
          a = i.process,
          s = i.Promise,
          l = "process" == n("6b4c")(a);
        t.exports = function () {
          var t,
            e,
            n,
            c = function () {
              var i, r;
              for (l && (i = a.domain) && i.exit(); t; ) {
                (r = t.fn), (t = t.next);
                try {
                  r();
                } catch (i) {
                  throw (t ? n() : (e = void 0), i);
                }
              }
              (e = void 0), i && i.enter();
            };
          if (l)
            n = function () {
              a.nextTick(c);
            };
          else if (!o || (i.navigator && i.navigator.standalone))
            if (s && s.resolve) {
              var d = s.resolve(void 0);
              n = function () {
                d.then(c);
              };
            } else
              n = function () {
                r.call(i, c);
              };
          else {
            var u = !0,
              p = document.createTextNode("");
            new o(c).observe(p, { characterData: !0 }),
              (n = function () {
                p.data = u = !u;
              });
          }
          return function (i) {
            var r = { fn: i, next: void 0 };
            e && (e.next = r), t || ((t = r), n()), (e = r);
          };
        };
      },
      ac6a: function (t, e, n) {
        for (
          var i = n("cadf"),
            r = n("0d58"),
            o = n("2aba"),
            a = n("7726"),
            s = n("32e9"),
            l = n("84f2"),
            c = n("2b4c"),
            d = c("iterator"),
            u = c("toStringTag"),
            p = l.Array,
            h = {
              CSSRuleList: !0,
              CSSStyleDeclaration: !1,
              CSSValueList: !1,
              ClientRectList: !1,
              DOMRectList: !1,
              DOMStringList: !1,
              DOMTokenList: !0,
              DataTransferItemList: !1,
              FileList: !1,
              HTMLAllCollection: !1,
              HTMLCollection: !1,
              HTMLFormElement: !1,
              HTMLSelectElement: !1,
              MediaList: !0,
              MimeTypeArray: !1,
              NamedNodeMap: !1,
              NodeList: !0,
              PaintRequestList: !1,
              Plugin: !1,
              PluginArray: !1,
              SVGLengthList: !1,
              SVGNumberList: !1,
              SVGPathSegList: !1,
              SVGPointList: !1,
              SVGStringList: !1,
              SVGTransformList: !1,
              SourceBufferList: !1,
              StyleSheetList: !0,
              TextTrackCueList: !1,
              TextTrackList: !1,
              TouchList: !1,
            },
            f = r(h),
            b = 0;
          b < f.length;
          b++
        ) {
          var m,
            g = f[b],
            v = h[g],
            _ = a[g],
            y = _ && _.prototype;
          if (y && (y[d] || s(y, d, p), y[u] || s(y, u, g), (l[g] = p), v))
            for (m in i) y[m] || o(y, m, i[m], !0);
        }
      },
      aebd: function (t, e) {
        t.exports = function (t, e) {
          return {
            enumerable: !(1 & t),
            configurable: !(2 & t),
            writable: !(4 & t),
            value: e,
          };
        };
      },
      b0dc: function (t, e, n) {
        var i = n("e4ae");
        t.exports = function (t, e, n, r) {
          try {
            return r ? e(i(n)[0], n[1]) : e(n);
          } catch (e) {
            var o = t.return;
            throw (void 0 !== o && i(o.call(t)), e);
          }
        };
      },
      b447: function (t, e, n) {
        var i = n("3a38"),
          r = Math.min;
        t.exports = function (t) {
          return t > 0 ? r(i(t), 9007199254740991) : 0;
        };
      },
      b8e3: function (t, e) {
        t.exports = !0;
      },
      bc13: function (t, e, n) {
        var i = n("e53d").navigator;
        t.exports = (i && i.userAgent) || "";
      },
      be13: function (t, e) {
        t.exports = function (t) {
          if (null == t) throw TypeError("Can't call method on  " + t);
          return t;
        };
      },
      bf0b: function (t, e, n) {
        var i = n("355d"),
          r = n("aebd"),
          o = n("36c3"),
          a = n("1bc3"),
          s = n("07e3"),
          l = n("794b"),
          c = Object.getOwnPropertyDescriptor;
        e.f = n("8e60")
          ? c
          : function (t, e) {
              if (((t = o(t)), (e = a(e, !0)), l))
                try {
                  return c(t, e);
                } catch (t) {}
              if (s(t, e)) return r(!i.f.call(t, e), t[e]);
            };
      },
      c207: function (t, e) {},
      c366: function (t, e, n) {
        var i = n("6821"),
          r = n("9def"),
          o = n("77f1");
        t.exports = function (t) {
          return function (e, n, a) {
            var s,
              l = i(e),
              c = r(l.length),
              d = o(a, c);
            if (t && n != n) {
              for (; c > d; ) if ((s = l[d++]) != s) return !0;
            } else
              for (; c > d; d++)
                if ((t || d in l) && l[d] === n) return t || d || 0;
            return !t && -1;
          };
        };
      },
      c367: function (t, e, n) {
        "use strict";
        var i = n("8436"),
          r = n("50ed"),
          o = n("481b"),
          a = n("36c3");
        (t.exports = n("30f1")(
          Array,
          "Array",
          function (t, e) {
            (this._t = a(t)), (this._i = 0), (this._k = e);
          },
          function () {
            var t = this._t,
              e = this._k,
              n = this._i++;
            return !t || n >= t.length
              ? ((this._t = void 0), r(1))
              : r(0, "keys" == e ? n : "values" == e ? t[n] : [n, t[n]]);
          },
          "values"
        )),
          (o.Arguments = o.Array),
          i("keys"),
          i("values"),
          i("entries");
      },
      c3a1: function (t, e, n) {
        var i = n("e6f3"),
          r = n("1691");
        t.exports =
          Object.keys ||
          function (t) {
            return i(t, r);
          };
      },
      c3b0: function (t, e, n) {
        "use strict";
        var i =
          (this && this.__importDefault) ||
          function (t) {
            return t && t.__esModule ? t : { default: t };
          };
        Object.defineProperty(e, "__esModule", { value: !0 });
        const r = i(n("0750"));
        e.default = (t) => {
          if (!t) throw new Error("color-name-to-hex: No color name provided");
          const e = r.default[t.toLowerCase()];
          if (void 0 !== e) return e;
          throw new Error("No hex found for " + t);
        };
      },
      c50b: function (t, e, n) {},
      c5f6: function (t, e, n) {
        "use strict";
        var i = n("7726"),
          r = n("69a8"),
          o = n("2d95"),
          a = n("5dbc"),
          s = n("6a99"),
          l = n("79e5"),
          c = n("9093").f,
          d = n("11e9").f,
          u = n("86cc").f,
          p = n("aa77").trim,
          h = i.Number,
          f = h,
          b = h.prototype,
          m = "Number" == o(n("2aeb")(b)),
          g = "trim" in String.prototype,
          v = function (t) {
            var e = s(t, !1);
            if ("string" == typeof e && e.length > 2) {
              var n,
                i,
                r,
                o = (e = g ? e.trim() : p(e, 3)).charCodeAt(0);
              if (43 === o || 45 === o) {
                if (88 === (n = e.charCodeAt(2)) || 120 === n) return NaN;
              } else if (48 === o) {
                switch (e.charCodeAt(1)) {
                  case 66:
                  case 98:
                    (i = 2), (r = 49);
                    break;
                  case 79:
                  case 111:
                    (i = 8), (r = 55);
                    break;
                  default:
                    return +e;
                }
                for (var a, l = e.slice(2), c = 0, d = l.length; c < d; c++)
                  if ((a = l.charCodeAt(c)) < 48 || a > r) return NaN;
                return parseInt(l, i);
              }
            }
            return +e;
          };
        if (!h(" 0o1") || !h("0b1") || h("+0x1")) {
          h = function (t) {
            var e = arguments.length < 1 ? 0 : t,
              n = this;
            return n instanceof h &&
              (m
                ? l(function () {
                    b.valueOf.call(n);
                  })
                : "Number" != o(n))
              ? a(new f(v(e)), n, h)
              : v(e);
          };
          for (
            var _,
              y = n("9e1e")
                ? c(f)
                : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(
                    ","
                  ),
              M = 0;
            y.length > M;
            M++
          )
            r(f, (_ = y[M])) && !r(h, _) && u(h, _, d(f, _));
          (h.prototype = b), (b.constructor = h), n("2aba")(i, "Number", h);
        }
      },
      c69a: function (t, e, n) {
        t.exports =
          !n("9e1e") &&
          !n("79e5")(function () {
            return (
              7 !=
              Object.defineProperty(n("230e")("div"), "a", {
                get: function () {
                  return 7;
                },
              }).a
            );
          });
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
      c8bb: function (t, e, n) {
        t.exports = n("54a1");
      },
      ca5a: function (t, e) {
        var n = 0,
          i = Math.random();
        t.exports = function (t) {
          return "Symbol(".concat(
            void 0 === t ? "" : t,
            ")_",
            (++n + i).toString(36)
          );
        };
      },
      cadf: function (t, e, n) {
        "use strict";
        var i = n("9c6c"),
          r = n("d53b"),
          o = n("84f2"),
          a = n("6821");
        (t.exports = n("01f9")(
          Array,
          "Array",
          function (t, e) {
            (this._t = a(t)), (this._i = 0), (this._k = e);
          },
          function () {
            var t = this._t,
              e = this._k,
              n = this._i++;
            return !t || n >= t.length
              ? ((this._t = void 0), r(1))
              : r(0, "keys" == e ? n : "values" == e ? t[n] : [n, t[n]]);
          },
          "values"
        )),
          (o.Arguments = o.Array),
          i("keys"),
          i("values"),
          i("entries");
      },
      cb7c: function (t, e, n) {
        var i = n("d3f4");
        t.exports = function (t) {
          if (!i(t)) throw TypeError(t + " is not an object!");
          return t;
        };
      },
      ccb9: function (t, e, n) {
        e.f = n("5168");
      },
      cd1c: function (t, e, n) {
        var i = n("e853");
        t.exports = function (t, e) {
          return new (i(t))(e);
        };
      },
      cd78: function (t, e, n) {
        var i = n("e4ae"),
          r = n("f772"),
          o = n("656e");
        t.exports = function (t, e) {
          if ((i(t), r(e) && e.constructor === t)) return e;
          var n = o.f(t);
          return (0, n.resolve)(e), n.promise;
        };
      },
      ce10: function (t, e, n) {
        var i = n("69a8"),
          r = n("6821"),
          o = n("c366")(!1),
          a = n("613b")("IE_PROTO");
        t.exports = function (t, e) {
          var n,
            s = r(t),
            l = 0,
            c = [];
          for (n in s) n != a && i(s, n) && c.push(n);
          for (; e.length > l; ) i(s, (n = e[l++])) && (~o(c, n) || c.push(n));
          return c;
        };
      },
      d2c8: function (t, e, n) {
        var i = n("aae3"),
          r = n("be13");
        t.exports = function (t, e, n) {
          if (i(e)) throw TypeError("String#" + n + " doesn't accept regex!");
          return String(r(t));
        };
      },
      d2d5: function (t, e, n) {
        n("1654"), n("549b"), (t.exports = n("584a").Array.from);
      },
      d391: function (t) {
        t.exports = JSON.parse(
          '{"AC":"40123","AD":"312345","AE":"501234567","AF":"701234567","AG":"2684641234","AI":"2642351234","AL":"672123456","AM":"77123456","AO":"923123456","AR":"91123456789","AS":"6847331234","AT":"664123456","AU":"412345678","AW":"5601234","AX":"412345678","AZ":"401234567","BA":"61123456","BB":"2462501234","BD":"1812345678","BE":"470123456","BF":"70123456","BG":"43012345","BH":"36001234","BI":"79561234","BJ":"90011234","BL":"690001234","BM":"4413701234","BN":"7123456","BO":"71234567","BQ":"3181234","BR":"11961234567","BS":"2423591234","BT":"17123456","BW":"71123456","BY":"294911911","BZ":"6221234","CA":"5062345678","CC":"412345678","CD":"991234567","CF":"70012345","CG":"061234567","CH":"781234567","CI":"0123456789","CK":"71234","CL":"221234567","CM":"671234567","CN":"13123456789","CO":"3211234567","CR":"83123456","CU":"51234567","CV":"9911234","CW":"95181234","CX":"412345678","CY":"96123456","CZ":"601123456","DE":"15123456789","DJ":"77831001","DK":"32123456","DM":"7672251234","DO":"8092345678","DZ":"551234567","EC":"991234567","EE":"51234567","EG":"1001234567","EH":"650123456","ER":"7123456","ES":"612345678","ET":"911234567","FI":"412345678","FJ":"7012345","FK":"51234","FM":"3501234","FO":"211234","FR":"612345678","GA":"06031234","GB":"7400123456","GD":"4734031234","GE":"555123456","GF":"694201234","GG":"7781123456","GH":"231234567","GI":"57123456","GL":"221234","GM":"3012345","GN":"601123456","GP":"690001234","GQ":"222123456","GR":"6912345678","GT":"51234567","GU":"6713001234","GW":"955012345","GY":"6091234","HK":"51234567","HN":"91234567","HR":"921234567","HT":"34101234","HU":"201234567","ID":"812345678","IE":"850123456","IL":"502345678","IM":"7924123456","IN":"8123456789","IO":"3801234","IQ":"7912345678","IR":"9123456789","IS":"6111234","IT":"3123456789","JE":"7797712345","JM":"8762101234","JO":"790123456","JP":"9012345678","KE":"712123456","KG":"700123456","KH":"91234567","KI":"72001234","KM":"3212345","KN":"8697652917","KP":"1921234567","KR":"1020000000","KW":"50012345","KY":"3453231234","KZ":"7710009998","LA":"2023123456","LB":"71123456","LC":"7582845678","LI":"660234567","LK":"712345678","LR":"770123456","LS":"50123456","LT":"61234567","LU":"628123456","LV":"21234567","LY":"912345678","MA":"650123456","MC":"612345678","MD":"62112345","ME":"67622901","MF":"690001234","MG":"321234567","MH":"2351234","MK":"72345678","ML":"65012345","MM":"92123456","MN":"88123456","MO":"66123456","MP":"6702345678","MQ":"696201234","MR":"22123456","MS":"6644923456","MT":"96961234","MU":"52512345","MV":"7712345","MW":"991234567","MX":"12221234567","MY":"123456789","MZ":"821234567","NA":"811234567","NC":"751234","NE":"93123456","NF":"381234","NG":"8021234567","NI":"81234567","NL":"612345678","NO":"40612345","NP":"9841234567","NR":"5551234","NU":"8884012","NZ":"211234567","OM":"92123456","PA":"61234567","PE":"912345678","PF":"87123456","PG":"70123456","PH":"9051234567","PK":"3012345678","PL":"512345678","PM":"551234","PR":"7872345678","PS":"599123456","PT":"912345678","PW":"6201234","PY":"961456789","QA":"33123456","RE":"692123456","RO":"712034567","RS":"601234567","RU":"9123456789","RW":"720123456","SA":"512345678","SB":"7421234","SC":"2510123","SD":"911231234","SE":"701234567","SG":"81234567","SH":"51234","SI":"31234567","SJ":"41234567","SK":"912123456","SL":"25123456","SM":"66661212","SN":"701234567","SO":"71123456","SR":"7412345","SS":"977123456","ST":"9812345","SV":"70123456","SX":"7215205678","SY":"944567890","SZ":"76123456","TA":"8999","TC":"6492311234","TD":"63012345","TG":"90112345","TH":"812345678","TJ":"917123456","TK":"7290","TL":"77212345","TM":"66123456","TN":"20123456","TO":"7715123","TR":"5012345678","TT":"8682911234","TV":"901234","TW":"912345678","TZ":"621234567","UA":"501234567","UG":"712345678","US":"2015550123","UY":"94231234","UZ":"912345678","VA":"3123456789","VC":"7844301234","VE":"4121234567","VG":"2843001234","VI":"3406421234","VN":"912345678","VU":"5912345","WF":"821234","WS":"7212345","XK":"43201234","YE":"712345678","YT":"639012345","ZA":"711234567","ZM":"955123456","ZW":"712345678"}'
        );
      },
      d3f4: function (t, e) {
        t.exports = function (t) {
          return "object" == typeof t ? null !== t : "function" == typeof t;
        };
      },
      d499: function (t, e, n) {
        "use strict";
        n("7f9a");
      },
      d53b: function (t, e) {
        t.exports = function (t, e) {
          return { value: e, done: !!t };
        };
      },
      d864: function (t, e, n) {
        var i = n("79aa");
        t.exports = function (t, e, n) {
          if ((i(t), void 0 === e)) return t;
          switch (n) {
            case 1:
              return function (n) {
                return t.call(e, n);
              };
            case 2:
              return function (n, i) {
                return t.call(e, n, i);
              };
            case 3:
              return function (n, i, r) {
                return t.call(e, n, i, r);
              };
          }
          return function () {
            return t.apply(e, arguments);
          };
        };
      },
      d8e8: function (t, e) {
        t.exports = function (t) {
          if ("function" != typeof t)
            throw TypeError(t + " is not a function!");
          return t;
        };
      },
      d9f6: function (t, e, n) {
        var i = n("e4ae"),
          r = n("794b"),
          o = n("1bc3"),
          a = Object.defineProperty;
        e.f = n("8e60")
          ? Object.defineProperty
          : function (t, e, n) {
              if ((i(t), (e = o(e, !0)), i(n), r))
                try {
                  return a(t, e, n);
                } catch (t) {}
              if ("get" in n || "set" in n)
                throw TypeError("Accessors not supported!");
              return "value" in n && (t[e] = n.value), t;
            };
      },
      db06: function (t, e, n) {},
      dbdb: function (t, e, n) {
        var i = n("584a"),
          r = n("e53d"),
          o = r["__core-js_shared__"] || (r["__core-js_shared__"] = {});
        (t.exports = function (t, e) {
          return o[t] || (o[t] = void 0 !== e ? e : {});
        })("versions", []).push({
          version: i.version,
          mode: n("b8e3") ? "pure" : "global",
          copyright: "© 2019 Denis Pushkarev (zloirock.ru)",
        });
      },
      e11e: function (t, e) {
        t.exports =
          "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(
            ","
          );
      },
      e214: function (t, e, n) {
        "use strict";
        n("db06");
      },
      e4ae: function (t, e, n) {
        var i = n("f772");
        t.exports = function (t) {
          if (!i(t)) throw TypeError(t + " is not an object!");
          return t;
        };
      },
      e508: function (t, e, n) {
        "use strict";
        (function (t) {
          n.d(e, "a", function () {
            return M;
          });
          var i = n("252c"),
            r = n("85fe"),
            o = n("ed83"),
            a = n.n(o),
            s = (n("8bbf"), { itemsLimit: 1e3 });
          function l(t) {
            return (l =
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
          function c(t, e, n) {
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
                    c(t, e, n[e]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    t,
                    Object.getOwnPropertyDescriptors(n)
                  )
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
          function p(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var n = 0, i = new Array(e); n < e; n++) i[n] = t[n];
            return i;
          }
          var h = {
            items: { type: Array, required: !0 },
            keyField: { type: String, default: "id" },
            direction: {
              type: String,
              default: "vertical",
              validator: function (t) {
                return ["vertical", "horizontal"].includes(t);
              },
            },
          };
          function f() {
            return this.items.length && "object" !== l(this.items[0]);
          }
          var b = !1;
          if ("undefined" != typeof window) {
            b = !1;
            try {
              var m = Object.defineProperty({}, "passive", {
                get: function () {
                  b = !0;
                },
              });
              window.addEventListener("test", null, m);
            } catch (t) {}
          }
          var g = 0;
          function v(t, e, n, i, r, o, a, s, l, c) {
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
          const _ = {
            name: "RecycleScroller",
            components: { ResizeObserver: i.a },
            directives: { ObserveVisibility: r.a },
            props: u({}, h, {
              itemSize: { type: Number, default: null },
              minItemSize: { type: [Number, String], default: null },
              sizeField: { type: String, default: "size" },
              typeField: { type: String, default: "type" },
              buffer: { type: Number, default: 200 },
              pageMode: { type: Boolean, default: !1 },
              prerender: { type: Number, default: 0 },
              emitUpdate: { type: Boolean, default: !1 },
            }),
            data: function () {
              return { pool: [], totalSize: 0, ready: !1, hoverKey: null };
            },
            computed: {
              sizes: function () {
                if (null === this.itemSize) {
                  for (
                    var t,
                      e = { "-1": { accumulator: 0 } },
                      n = this.items,
                      i = this.sizeField,
                      r = this.minItemSize,
                      o = 1e4,
                      a = 0,
                      s = 0,
                      l = n.length;
                    s < l;
                    s++
                  )
                    (t = n[s][i] || r) < o && (o = t),
                      (a += t),
                      (e[s] = { accumulator: a, size: t });
                  return (this.$_computedMinItemSize = o), e;
                }
                return [];
              },
              simpleArray: f,
            },
            watch: {
              items: function () {
                this.updateVisibleItems(!0);
              },
              pageMode: function () {
                this.applyPageMode(), this.updateVisibleItems(!1);
              },
              sizes: {
                handler: function () {
                  this.updateVisibleItems(!1);
                },
                deep: !0,
              },
            },
            created: function () {
              (this.$_startIndex = 0),
                (this.$_endIndex = 0),
                (this.$_views = new Map()),
                (this.$_unusedViews = new Map()),
                (this.$_scrollDirty = !1),
                (this.$_lastUpdateScrollPosition = 0),
                this.prerender &&
                  ((this.$_prerender = !0), this.updateVisibleItems(!1));
            },
            mounted: function () {
              var t = this;
              this.applyPageMode(),
                this.$nextTick(function () {
                  (t.$_prerender = !1),
                    t.updateVisibleItems(!0),
                    (t.ready = !0);
                });
            },
            beforeDestroy: function () {
              this.removeListeners();
            },
            methods: {
              addView: function (t, e, n, i, r) {
                var o = { item: n, position: 0 },
                  a = { id: g++, index: e, used: !0, key: i, type: r };
                return (
                  Object.defineProperty(o, "nr", {
                    configurable: !1,
                    value: a,
                  }),
                  t.push(o),
                  o
                );
              },
              unuseView: function (t) {
                var e =
                    arguments.length > 1 &&
                    void 0 !== arguments[1] &&
                    arguments[1],
                  n = this.$_unusedViews,
                  i = t.nr.type,
                  r = n.get(i);
                r || ((r = []), n.set(i, r)),
                  r.push(t),
                  e ||
                    ((t.nr.used = !1),
                    (t.position = -9999),
                    this.$_views.delete(t.nr.key));
              },
              handleResize: function () {
                this.$emit("resize"), this.ready && this.updateVisibleItems(!1);
              },
              handleScroll: function (t) {
                var e = this;
                this.$_scrollDirty ||
                  ((this.$_scrollDirty = !0),
                  requestAnimationFrame(function () {
                    (e.$_scrollDirty = !1),
                      e.updateVisibleItems(!1, !0).continuous ||
                        (clearTimeout(e.$_refreshTimout),
                        (e.$_refreshTimout = setTimeout(e.handleScroll, 100)));
                  }));
              },
              handleVisibilityChange: function (t, e) {
                var n = this;
                this.ready &&
                  (t ||
                  0 !== e.boundingClientRect.width ||
                  0 !== e.boundingClientRect.height
                    ? (this.$emit("visible"),
                      requestAnimationFrame(function () {
                        n.updateVisibleItems(!1);
                      }))
                    : this.$emit("hidden"));
              },
              updateVisibleItems: function (t) {
                var e,
                  n,
                  i,
                  r,
                  o =
                    arguments.length > 1 &&
                    void 0 !== arguments[1] &&
                    arguments[1],
                  a = this.itemSize,
                  l = this.$_computedMinItemSize,
                  c = this.typeField,
                  d = this.simpleArray ? null : this.keyField,
                  u = this.items,
                  p = u.length,
                  h = this.sizes,
                  f = this.$_views,
                  b = this.$_unusedViews,
                  m = this.pool;
                if (p)
                  if (this.$_prerender)
                    (e = 0), (n = this.prerender), (i = null);
                  else {
                    var g = this.getScroll();
                    if (o) {
                      var v = g.start - this.$_lastUpdateScrollPosition;
                      if ((v < 0 && (v = -v), (null === a && v < l) || v < a))
                        return { continuous: !0 };
                    }
                    this.$_lastUpdateScrollPosition = g.start;
                    var _ = this.buffer;
                    if (((g.start -= _), (g.end += _), null === a)) {
                      var y,
                        M = 0,
                        O = p - 1,
                        w = ~~(p / 2);
                      do {
                        (y = w),
                          h[w].accumulator < g.start
                            ? (M = w)
                            : w < p - 1 &&
                              h[w + 1].accumulator > g.start &&
                              (O = w),
                          (w = ~~((M + O) / 2));
                      } while (w !== y);
                      for (
                        w < 0 && (w = 0),
                          e = w,
                          i = h[p - 1].accumulator,
                          n = w;
                        n < p && h[n].accumulator < g.end;
                        n++
                      );
                      -1 === n ? (n = u.length - 1) : ++n > p && (n = p);
                    } else
                      (e = ~~(g.start / a)) < 0 && (e = 0),
                        (n = Math.ceil(g.end / a)) > p && (n = p),
                        (i = p * a);
                  }
                else e = n = i = 0;
                n - e > s.itemsLimit && this.itemsLimitError(),
                  (this.totalSize = i);
                var A = e <= this.$_endIndex && n >= this.$_startIndex;
                if (this.$_continuous !== A) {
                  if (A) {
                    f.clear(), b.clear();
                    for (var x = 0, z = m.length; x < z; x++)
                      (r = m[x]), this.unuseView(r);
                  }
                  this.$_continuous = A;
                } else if (A)
                  for (var C = 0, k = m.length; C < k; C++)
                    (r = m[C]).nr.used &&
                      (t &&
                        (r.nr.index = u.findIndex(function (t) {
                          return d ? t[d] === r.item[d] : t === r.item;
                        })),
                      (-1 === r.nr.index ||
                        r.nr.index < e ||
                        r.nr.index >= n) &&
                        this.unuseView(r));
                for (
                  var S, T, D, L, q = A ? null : new Map(), E = e;
                  E < n;
                  E++
                ) {
                  S = u[E];
                  var j = d ? S[d] : S;
                  if (null == j)
                    throw new Error(
                      "Key is "
                        .concat(j, " on item (keyField is '")
                        .concat(d, "')")
                    );
                  (r = f.get(j)),
                    a || h[E].size
                      ? (r
                          ? ((r.nr.used = !0), (r.item = S))
                          : ((T = S[c]),
                            (D = b.get(T)),
                            A
                              ? D && D.length
                                ? (((r = D.pop()).item = S),
                                  (r.nr.used = !0),
                                  (r.nr.index = E),
                                  (r.nr.key = j),
                                  (r.nr.type = T))
                                : (r = this.addView(m, E, S, j, T))
                              : ((L = q.get(T) || 0),
                                (!D || L >= D.length) &&
                                  ((r = this.addView(m, E, S, j, T)),
                                  this.unuseView(r, !0),
                                  (D = b.get(T))),
                                ((r = D[L]).item = S),
                                (r.nr.used = !0),
                                (r.nr.index = E),
                                (r.nr.key = j),
                                (r.nr.type = T),
                                q.set(T, L + 1),
                                L++),
                            f.set(j, r)),
                        (r.position =
                          null === a ? h[E - 1].accumulator : E * a))
                      : r && this.unuseView(r);
                }
                return (
                  (this.$_startIndex = e),
                  (this.$_endIndex = n),
                  this.emitUpdate && this.$emit("update", e, n),
                  clearTimeout(this.$_sortTimer),
                  (this.$_sortTimer = setTimeout(this.sortViews, 300)),
                  { continuous: A }
                );
              },
              getListenerTarget: function () {
                var t = a()(this.$el);
                return (
                  !window.document ||
                    (t !== window.document.documentElement &&
                      t !== window.document.body) ||
                    (t = window),
                  t
                );
              },
              getScroll: function () {
                var t,
                  e = this.$el,
                  n = "vertical" === this.direction;
                if (this.pageMode) {
                  var i = e.getBoundingClientRect(),
                    r = n ? i.height : i.width,
                    o = -(n ? i.top : i.left),
                    a = n ? window.innerHeight : window.innerWidth;
                  o < 0 && ((a += o), (o = 0)),
                    o + a > r && (a = r - o),
                    (t = { start: o, end: o + a });
                } else
                  t = n
                    ? { start: e.scrollTop, end: e.scrollTop + e.clientHeight }
                    : {
                        start: e.scrollLeft,
                        end: e.scrollLeft + e.clientWidth,
                      };
                return t;
              },
              applyPageMode: function () {
                this.pageMode ? this.addListeners() : this.removeListeners();
              },
              addListeners: function () {
                (this.listenerTarget = this.getListenerTarget()),
                  this.listenerTarget.addEventListener(
                    "scroll",
                    this.handleScroll,
                    !!b && { passive: !0 }
                  ),
                  this.listenerTarget.addEventListener(
                    "resize",
                    this.handleResize
                  );
              },
              removeListeners: function () {
                this.listenerTarget &&
                  (this.listenerTarget.removeEventListener(
                    "scroll",
                    this.handleScroll
                  ),
                  this.listenerTarget.removeEventListener(
                    "resize",
                    this.handleResize
                  ),
                  (this.listenerTarget = null));
              },
              scrollToItem: function (t) {
                var e;
                (e =
                  null === this.itemSize
                    ? t > 0
                      ? this.sizes[t - 1].accumulator
                      : 0
                    : t * this.itemSize),
                  this.scrollToPosition(e);
              },
              scrollToPosition: function (t) {
                "vertical" === this.direction
                  ? (this.$el.scrollTop = t)
                  : (this.$el.scrollLeft = t);
              },
              itemsLimitError: function () {
                throw (
                  (setTimeout(function () {}),
                  new Error("Rendered items limit reached"))
                );
              },
              sortViews: function () {
                this.pool.sort(function (t, e) {
                  return t.nr.index - e.nr.index;
                });
              },
            },
          };
          var y = function () {
            var t,
              e,
              n = this,
              i = n.$createElement,
              r = n._self._c || i;
            return r(
              "div",
              {
                directives: [
                  {
                    name: "observe-visibility",
                    rawName: "v-observe-visibility",
                    value: n.handleVisibilityChange,
                    expression: "handleVisibilityChange",
                  },
                ],
                staticClass: "vue-recycle-scroller",
                class:
                  ((t = { ready: n.ready, "page-mode": n.pageMode }),
                  (t["direction-" + n.direction] = !0),
                  t),
                on: {
                  "&scroll": function (t) {
                    return n.handleScroll(t);
                  },
                },
              },
              [
                n.$slots.before
                  ? r(
                      "div",
                      { staticClass: "vue-recycle-scroller__slot" },
                      [n._t("before")],
                      2
                    )
                  : n._e(),
                n._v(" "),
                r(
                  "div",
                  {
                    ref: "wrapper",
                    staticClass: "vue-recycle-scroller__item-wrapper",
                    style:
                      ((e = {}),
                      (e[
                        "vertical" === n.direction ? "minHeight" : "minWidth"
                      ] = n.totalSize + "px"),
                      e),
                  },
                  n._l(n.pool, function (t) {
                    return r(
                      "div",
                      {
                        key: t.nr.id,
                        staticClass: "vue-recycle-scroller__item-view",
                        class: { hover: n.hoverKey === t.nr.key },
                        style: n.ready
                          ? {
                              transform:
                                "translate" +
                                ("vertical" === n.direction ? "Y" : "X") +
                                "(" +
                                t.position +
                                "px)",
                            }
                          : null,
                        on: {
                          mouseenter: function (e) {
                            n.hoverKey = t.nr.key;
                          },
                          mouseleave: function (t) {
                            n.hoverKey = null;
                          },
                        },
                      },
                      [
                        n._t("default", null, {
                          item: t.item,
                          index: t.nr.index,
                          active: t.nr.used,
                        }),
                      ],
                      2
                    );
                  }),
                  0
                ),
                n._v(" "),
                n.$slots.after
                  ? r(
                      "div",
                      { staticClass: "vue-recycle-scroller__slot" },
                      [n._t("after")],
                      2
                    )
                  : n._e(),
                n._v(" "),
                r("ResizeObserver", { on: { notify: n.handleResize } }),
              ],
              1
            );
          };
          y._withStripped = !0;
          const M = v(
              { render: y, staticRenderFns: [] },
              void 0,
              _,
              void 0,
              !1,
              void 0,
              !1,
              void 0,
              void 0,
              void 0
            ),
            O = {
              name: "DynamicScroller",
              components: { RecycleScroller: M },
              inheritAttrs: !1,
              provide: function () {
                return (
                  "undefined" != typeof ResizeObserver &&
                    (this.$_resizeObserver = new ResizeObserver(function (t) {
                      var e,
                        n = (function (t) {
                          if (
                            "undefined" == typeof Symbol ||
                            null == t[Symbol.iterator]
                          ) {
                            if (
                              Array.isArray(t) ||
                              (t = (function (t, e) {
                                if (t) {
                                  if ("string" == typeof t) return p(t, e);
                                  var n = Object.prototype.toString
                                    .call(t)
                                    .slice(8, -1);
                                  return (
                                    "Object" === n &&
                                      t.constructor &&
                                      (n = t.constructor.name),
                                    "Map" === n || "Set" === n
                                      ? Array.from(n)
                                      : "Arguments" === n ||
                                        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                          n
                                        )
                                      ? p(t, e)
                                      : void 0
                                  );
                                }
                              })(t))
                            ) {
                              var e = 0,
                                n = function () {};
                              return {
                                s: n,
                                n: function () {
                                  return e >= t.length
                                    ? { done: !0 }
                                    : { done: !1, value: t[e++] };
                                },
                                e: function (t) {
                                  throw t;
                                },
                                f: n,
                              };
                            }
                            throw new TypeError(
                              "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                            );
                          }
                          var i,
                            r,
                            o = !0,
                            a = !1;
                          return {
                            s: function () {
                              i = t[Symbol.iterator]();
                            },
                            n: function () {
                              var t = i.next();
                              return (o = t.done), t;
                            },
                            e: function (t) {
                              (a = !0), (r = t);
                            },
                            f: function () {
                              try {
                                o || null == i.return || i.return();
                              } finally {
                                if (a) throw r;
                              }
                            },
                          };
                        })(t);
                      try {
                        for (n.s(); !(e = n.n()).done; ) {
                          var i = e.value;
                          if (i.target) {
                            var r = new CustomEvent("resize", {
                              detail: { contentRect: i.contentRect },
                            });
                            i.target.dispatchEvent(r);
                          }
                        }
                      } catch (t) {
                        n.e(t);
                      } finally {
                        n.f();
                      }
                    })),
                  {
                    vscrollData: this.vscrollData,
                    vscrollParent: this,
                    vscrollResizeObserver: this.$_resizeObserver,
                  }
                );
              },
              props: u({}, h, {
                minItemSize: { type: [Number, String], required: !0 },
              }),
              data: function () {
                return {
                  vscrollData: {
                    active: !0,
                    sizes: {},
                    validSizes: {},
                    keyField: this.keyField,
                    simpleArray: !1,
                  },
                };
              },
              computed: {
                simpleArray: f,
                itemsWithSize: function () {
                  for (
                    var t = [],
                      e = this.items,
                      n = this.keyField,
                      i = this.simpleArray,
                      r = this.vscrollData.sizes,
                      o = 0;
                    o < e.length;
                    o++
                  ) {
                    var a = e[o],
                      s = i ? o : a[n],
                      l = r[s];
                    void 0 !== l || this.$_undefinedMap[s] || (l = 0),
                      t.push({ item: a, id: s, size: l });
                  }
                  return t;
                },
                listeners: function () {
                  var t = {};
                  for (var e in this.$listeners)
                    "resize" !== e &&
                      "visible" !== e &&
                      (t[e] = this.$listeners[e]);
                  return t;
                },
              },
              watch: {
                items: function () {
                  this.forceUpdate(!1);
                },
                simpleArray: {
                  handler: function (t) {
                    this.vscrollData.simpleArray = t;
                  },
                  immediate: !0,
                },
                direction: function (t) {
                  this.forceUpdate(!0);
                },
              },
              created: function () {
                (this.$_updates = []),
                  (this.$_undefinedSizes = 0),
                  (this.$_undefinedMap = {});
              },
              activated: function () {
                this.vscrollData.active = !0;
              },
              deactivated: function () {
                this.vscrollData.active = !1;
              },
              methods: {
                onScrollerResize: function () {
                  this.$refs.scroller && this.forceUpdate(),
                    this.$emit("resize");
                },
                onScrollerVisible: function () {
                  this.$emit("vscroll:update", { force: !1 }),
                    this.$emit("visible");
                },
                forceUpdate: function () {
                  var t =
                    !(arguments.length > 0 && void 0 !== arguments[0]) ||
                    arguments[0];
                  (t || this.simpleArray) && (this.vscrollData.validSizes = {}),
                    this.$emit("vscroll:update", { force: !0 });
                },
                scrollToItem: function (t) {
                  var e = this.$refs.scroller;
                  e && e.scrollToItem(t);
                },
                getItemSize: function (t) {
                  var e =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : void 0,
                    n = this.simpleArray
                      ? null != e
                        ? e
                        : this.items.indexOf(t)
                      : t[this.keyField];
                  return this.vscrollData.sizes[n] || 0;
                },
                scrollToBottom: function () {
                  var t = this;
                  if (!this.$_scrollingToBottom) {
                    this.$_scrollingToBottom = !0;
                    var e = this.$el;
                    this.$nextTick(function () {
                      (e.scrollTop = e.scrollHeight + 5e3),
                        requestAnimationFrame(function n() {
                          (e.scrollTop = e.scrollHeight + 5e3),
                            requestAnimationFrame(function () {
                              (e.scrollTop = e.scrollHeight + 5e3),
                                0 === t.$_undefinedSizes
                                  ? (t.$_scrollingToBottom = !1)
                                  : requestAnimationFrame(n);
                            });
                        });
                    });
                  }
                },
              },
            };
          var w = function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n(
              "RecycleScroller",
              t._g(
                t._b(
                  {
                    ref: "scroller",
                    attrs: {
                      items: t.itemsWithSize,
                      "min-item-size": t.minItemSize,
                      direction: t.direction,
                      "key-field": "id",
                    },
                    on: {
                      resize: t.onScrollerResize,
                      visible: t.onScrollerVisible,
                    },
                    scopedSlots: t._u(
                      [
                        {
                          key: "default",
                          fn: function (e) {
                            var n = e.item,
                              i = e.index,
                              r = e.active;
                            return [
                              t._t("default", null, null, {
                                item: n.item,
                                index: i,
                                active: r,
                                itemWithSize: n,
                              }),
                            ];
                          },
                        },
                      ],
                      null,
                      !0
                    ),
                  },
                  "RecycleScroller",
                  t.$attrs,
                  !1
                ),
                t.listeners
              ),
              [
                t._v(" "),
                n("template", { slot: "before" }, [t._t("before")], 2),
                t._v(" "),
                n("template", { slot: "after" }, [t._t("after")], 2),
              ],
              2
            );
          };
          w._withStripped = !0;
          const A = v(
              { render: w, staticRenderFns: [] },
              void 0,
              O,
              void 0,
              !1,
              void 0,
              !1,
              void 0,
              void 0,
              void 0
            ),
            x = v(
              {},
              void 0,
              {
                name: "DynamicScrollerItem",
                inject: [
                  "vscrollData",
                  "vscrollParent",
                  "vscrollResizeObserver",
                ],
                props: {
                  item: { required: !0 },
                  watchData: { type: Boolean, default: !1 },
                  active: { type: Boolean, required: !0 },
                  index: { type: Number, default: void 0 },
                  sizeDependencies: { type: [Array, Object], default: null },
                  emitResize: { type: Boolean, default: !1 },
                  tag: { type: String, default: "div" },
                },
                computed: {
                  id: function () {
                    return this.vscrollData.simpleArray
                      ? this.index
                      : this.item[this.vscrollData.keyField];
                  },
                  size: function () {
                    return (
                      (this.vscrollData.validSizes[this.id] &&
                        this.vscrollData.sizes[this.id]) ||
                      0
                    );
                  },
                  finalActive: function () {
                    return this.active && this.vscrollData.active;
                  },
                },
                watch: {
                  watchData: "updateWatchData",
                  id: function () {
                    this.size || this.onDataUpdate();
                  },
                  finalActive: function (t) {
                    this.size ||
                      (t
                        ? this.vscrollParent.$_undefinedMap[this.id] ||
                          (this.vscrollParent.$_undefinedSizes++,
                          (this.vscrollParent.$_undefinedMap[this.id] = !0))
                        : this.vscrollParent.$_undefinedMap[this.id] &&
                          (this.vscrollParent.$_undefinedSizes--,
                          (this.vscrollParent.$_undefinedMap[this.id] = !1))),
                      this.vscrollResizeObserver
                        ? t
                          ? this.observeSize()
                          : this.unobserveSize()
                        : t &&
                          this.$_pendingVScrollUpdate === this.id &&
                          this.updateSize();
                  },
                },
                created: function () {
                  var t = this;
                  if (
                    !this.$isServer &&
                    ((this.$_forceNextVScrollUpdate = null),
                    this.updateWatchData(),
                    !this.vscrollResizeObserver)
                  ) {
                    var e = function (e) {
                      t.$watch(function () {
                        return t.sizeDependencies[e];
                      }, t.onDataUpdate);
                    };
                    for (var n in this.sizeDependencies) e(n);
                    this.vscrollParent.$on(
                      "vscroll:update",
                      this.onVscrollUpdate
                    ),
                      this.vscrollParent.$on(
                        "vscroll:update-size",
                        this.onVscrollUpdateSize
                      );
                  }
                },
                mounted: function () {
                  this.vscrollData.active &&
                    (this.updateSize(), this.observeSize());
                },
                beforeDestroy: function () {
                  this.vscrollParent.$off(
                    "vscroll:update",
                    this.onVscrollUpdate
                  ),
                    this.vscrollParent.$off(
                      "vscroll:update-size",
                      this.onVscrollUpdateSize
                    ),
                    this.unobserveSize();
                },
                methods: {
                  updateSize: function () {
                    this.finalActive
                      ? this.$_pendingSizeUpdate !== this.id &&
                        ((this.$_pendingSizeUpdate = this.id),
                        (this.$_forceNextVScrollUpdate = null),
                        (this.$_pendingVScrollUpdate = null),
                        this.computeSize(this.id))
                      : (this.$_forceNextVScrollUpdate = this.id);
                  },
                  updateWatchData: function () {
                    var t = this;
                    this.watchData
                      ? (this.$_watchData = this.$watch(
                          "data",
                          function () {
                            t.onDataUpdate();
                          },
                          { deep: !0 }
                        ))
                      : this.$_watchData &&
                        (this.$_watchData(), (this.$_watchData = null));
                  },
                  onVscrollUpdate: function (t) {
                    var e = t.force;
                    !this.finalActive &&
                      e &&
                      (this.$_pendingVScrollUpdate = this.id),
                      (this.$_forceNextVScrollUpdate !== this.id &&
                        !e &&
                        this.size) ||
                        this.updateSize();
                  },
                  onDataUpdate: function () {
                    this.updateSize();
                  },
                  computeSize: function (t) {
                    var e = this;
                    this.$nextTick(function () {
                      if (e.id === t) {
                        var n = e.$el.offsetWidth,
                          i = e.$el.offsetHeight;
                        e.applySize(n, i);
                      }
                      e.$_pendingSizeUpdate = null;
                    });
                  },
                  applySize: function (t, e) {
                    var n = Math.round(
                      "vertical" === this.vscrollParent.direction ? e : t
                    );
                    n &&
                      this.size !== n &&
                      (this.vscrollParent.$_undefinedMap[this.id] &&
                        (this.vscrollParent.$_undefinedSizes--,
                        (this.vscrollParent.$_undefinedMap[this.id] = void 0)),
                      this.$set(this.vscrollData.sizes, this.id, n),
                      this.$set(this.vscrollData.validSizes, this.id, !0),
                      this.emitResize && this.$emit("resize", this.id));
                  },
                  observeSize: function () {
                    this.vscrollResizeObserver &&
                      (this.vscrollResizeObserver.observe(this.$el.parentNode),
                      this.$el.parentNode.addEventListener(
                        "resize",
                        this.onResize
                      ));
                  },
                  unobserveSize: function () {
                    this.vscrollResizeObserver &&
                      (this.vscrollResizeObserver.unobserve(
                        this.$el.parentNode
                      ),
                      this.$el.parentNode.removeEventListener(
                        "resize",
                        this.onResize
                      ));
                  },
                  onResize: function (t) {
                    var e = t.detail.contentRect,
                      n = e.width,
                      i = e.height;
                    this.applySize(n, i);
                  },
                },
                render: function (t) {
                  return t(this.tag, this.$slots.default);
                },
              },
              void 0,
              void 0,
              void 0,
              !1,
              void 0,
              void 0,
              void 0
            );
          var z = {
              version: "1.0.10",
              install: function (t, e) {
                var n = Object.assign(
                  {},
                  { installComponents: !0, componentsPrefix: "" },
                  e
                );
                for (var i in n) void 0 !== n[i] && (s[i] = n[i]);
                n.installComponents &&
                  (function (t, e) {
                    t.component("".concat(e, "recycle-scroller"), M),
                      t.component("".concat(e, "RecycleScroller"), M),
                      t.component("".concat(e, "dynamic-scroller"), A),
                      t.component("".concat(e, "DynamicScroller"), A),
                      t.component("".concat(e, "dynamic-scroller-item"), x),
                      t.component("".concat(e, "DynamicScrollerItem"), x);
                  })(t, n.componentsPrefix);
              },
            },
            C = null;
          "undefined" != typeof window
            ? (C = window.Vue)
            : void 0 !== t && (C = t.Vue),
            C && C.use(z);
        }).call(this, n("c8ba"));
      },
      e53d: function (t, e) {
        var n = (t.exports =
          "undefined" != typeof window && window.Math == Math
            ? window
            : "undefined" != typeof self && self.Math == Math
            ? self
            : Function("return this")());
        "number" == typeof __g && (__g = n);
      },
      e6f3: function (t, e, n) {
        var i = n("07e3"),
          r = n("36c3"),
          o = n("5b4e")(!1),
          a = n("5559")("IE_PROTO");
        t.exports = function (t, e) {
          var n,
            s = r(t),
            l = 0,
            c = [];
          for (n in s) n != a && i(s, n) && c.push(n);
          for (; e.length > l; ) i(s, (n = e[l++])) && (~o(c, n) || c.push(n));
          return c;
        };
      },
      e71e: function (t, e, n) {
        "use strict";
        n("c50b");
      },
      e853: function (t, e, n) {
        var i = n("d3f4"),
          r = n("1169"),
          o = n("2b4c")("species");
        t.exports = function (t) {
          var e;
          return (
            r(t) &&
              ("function" != typeof (e = t.constructor) ||
                (e !== Array && !r(e.prototype)) ||
                (e = void 0),
              i(e) && null === (e = e[o]) && (e = void 0)),
            void 0 === e ? Array : e
          );
        };
      },
      ebfd: function (t, e, n) {
        var i = n("62a0")("meta"),
          r = n("f772"),
          o = n("07e3"),
          a = n("d9f6").f,
          s = 0,
          l =
            Object.isExtensible ||
            function () {
              return !0;
            },
          c = !n("294c")(function () {
            return l(Object.preventExtensions({}));
          }),
          d = function (t) {
            a(t, i, { value: { i: "O" + ++s, w: {} } });
          },
          u = (t.exports = {
            KEY: i,
            NEED: !1,
            fastKey: function (t, e) {
              if (!r(t))
                return "symbol" == typeof t
                  ? t
                  : ("string" == typeof t ? "S" : "P") + t;
              if (!o(t, i)) {
                if (!l(t)) return "F";
                if (!e) return "E";
                d(t);
              }
              return t[i].i;
            },
            getWeak: function (t, e) {
              if (!o(t, i)) {
                if (!l(t)) return !0;
                if (!e) return !1;
                d(t);
              }
              return t[i].w;
            },
            onFreeze: function (t) {
              return c && u.NEED && l(t) && !o(t, i) && d(t), t;
            },
          });
      },
      ed83: function (t, e, n) {
        var i, r;
        void 0 ===
          (r =
            "function" ==
            typeof (i = function () {
              var t = /(auto|scroll)/,
                e = function (t, n) {
                  return null === t.parentNode
                    ? n
                    : e(t.parentNode, n.concat([t]));
                },
                n = function (t, e) {
                  return getComputedStyle(t, null).getPropertyValue(e);
                },
                i = function (e) {
                  return t.test(
                    (function (t) {
                      return (
                        n(t, "overflow") +
                        n(t, "overflow-y") +
                        n(t, "overflow-x")
                      );
                    })(e)
                  );
                };
              return function (t) {
                if (t instanceof HTMLElement || t instanceof SVGElement) {
                  for (var n = e(t.parentNode, []), r = 0; r < n.length; r += 1)
                    if (i(n[r])) return n[r];
                  return document.scrollingElement || document.documentElement;
                }
              };
            })
              ? i.apply(e, [])
              : i) || (t.exports = r);
      },
      f1ae: function (t, e, n) {
        "use strict";
        var i = n("86cc"),
          r = n("4630");
        t.exports = function (t, e, n) {
          e in t ? i.f(t, e, r(0, n)) : (t[e] = n);
        };
      },
      f201: function (t, e, n) {
        var i = n("e4ae"),
          r = n("79aa"),
          o = n("5168")("species");
        t.exports = function (t, e) {
          var n,
            a = i(t).constructor;
          return void 0 === a || null == (n = i(a)[o]) ? e : r(n);
        };
      },
      f410: function (t, e, n) {
        n("1af6"), (t.exports = n("584a").Array.isArray);
      },
      f559: function (t, e, n) {
        "use strict";
        var i = n("5ca1"),
          r = n("9def"),
          o = n("d2c8"),
          a = "".startsWith;
        i(i.P + i.F * n("5147")("startsWith"), "String", {
          startsWith: function (t) {
            var e = o(this, t, "startsWith"),
              n = r(
                Math.min(arguments.length > 1 ? arguments[1] : void 0, e.length)
              ),
              i = String(t);
            return a ? a.call(e, i, n) : e.slice(n, n + i.length) === i;
          },
        });
      },
      f772: function (t, e) {
        t.exports = function (t) {
          return "object" == typeof t ? null !== t : "function" == typeof t;
        };
      },
      f921: function (t, e, n) {
        n("014b"),
          n("c207"),
          n("69d3"),
          n("765d"),
          (t.exports = n("584a").Symbol);
      },
      fa5b: function (t, e, n) {
        t.exports = n("5537")("native-function-to-string", Function.toString);
      },
      fab2: function (t, e, n) {
        var i = n("7726").document;
        t.exports = i && i.documentElement;
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
        n("8e6e"), n("ac6a"), n("cadf"), n("456d"), n("6b54"), n("96cf");
        var a = n("795b"),
          s = n.n(a);
        function l(t, e, n, i, r, o, a) {
          try {
            var l = t[o](a),
              c = l.value;
          } catch (t) {
            return void n(t);
          }
          l.done ? e(c) : s.a.resolve(c).then(i, r);
        }
        function c(t) {
          return function () {
            var e = this,
              n = arguments;
            return new s.a(function (i, r) {
              var o = t.apply(e, n);
              function a(t) {
                l(o, i, r, a, s, "next", t);
              }
              function s(t) {
                l(o, i, r, a, s, "throw", t);
              }
              a(void 0);
            });
          };
        }
        var d = n("85f2"),
          u = n.n(d);
        function p(t, e, n) {
          return (
            e in t
              ? u()(t, e, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = n),
            t
          );
        }
        n("c5f6"), n("6762"), n("2fdb");
        var h = [
            ["Afghanistan (‫افغانستان‬‎)", "af", "93"],
            ["Albania (Shqipëri)", "al", "355"],
            ["Algeria (‫الجزائر‬‎)", "dz", "213"],
            ["American Samoa", "as", "1684"],
            ["Andorra", "ad", "376"],
            ["Angola", "ao", "244"],
            ["Anguilla", "ai", "1264"],
            ["Antigua and Barbuda", "ag", "1268"],
            ["Argentina", "ar", "54"],
            ["Armenia (Հայաստան)", "am", "374"],
            ["Aruba", "aw", "297"],
            ["Australia", "au", "61", 0],
            ["Austria (Österreich)", "at", "43"],
            ["Azerbaijan (Azərbaycan)", "az", "994"],
            ["Bahamas", "bs", "1242"],
            ["Bahrain (‫البحرين‬‎)", "bh", "973"],
            ["Bangladesh (বাংলাদেশ)", "bd", "880"],
            ["Barbados", "bb", "1246"],
            ["Belarus (Беларусь)", "by", "375"],
            ["Belgium (België)", "be", "32"],
            ["Belize", "bz", "501"],
            ["Benin (Bénin)", "bj", "229"],
            ["Bermuda", "bm", "1441"],
            ["Bhutan (འབྲུག)", "bt", "975"],
            ["Bolivia", "bo", "591"],
            ["Bosnia and Herzegovina (Босна и Херцеговина)", "ba", "387"],
            ["Botswana", "bw", "267"],
            ["Brazil (Brasil)", "br", "55"],
            ["British Indian Ocean Territory", "io", "246"],
            ["British Virgin Islands", "vg", "1284"],
            ["Brunei", "bn", "673"],
            ["Bulgaria (България)", "bg", "359"],
            ["Burkina Faso", "bf", "226"],
            ["Burundi (Uburundi)", "bi", "257"],
            ["Cambodia (កម្ពុជា)", "kh", "855"],
            ["Cameroon (Cameroun)", "cm", "237"],
            [
              "Canada",
              "ca",
              "1",
              1,
              [
                "204",
                "226",
                "236",
                "249",
                "250",
                "289",
                "306",
                "343",
                "365",
                "387",
                "403",
                "416",
                "418",
                "431",
                "437",
                "438",
                "450",
                "506",
                "514",
                "519",
                "548",
                "579",
                "581",
                "587",
                "604",
                "613",
                "639",
                "647",
                "672",
                "705",
                "709",
                "742",
                "778",
                "780",
                "782",
                "807",
                "819",
                "825",
                "867",
                "873",
                "902",
                "905",
              ],
            ],
            ["Cape Verde (Kabu Verdi)", "cv", "238"],
            ["Caribbean Netherlands", "bq", "599", 1],
            ["Cayman Islands", "ky", "1345"],
            [
              "Central African Republic (République centrafricaine)",
              "cf",
              "236",
            ],
            ["Chad (Tchad)", "td", "235"],
            ["Chile", "cl", "56"],
            ["China (中国)", "cn", "86"],
            ["Christmas Island", "cx", "61", 2],
            ["Cocos (Keeling) Islands", "cc", "61", 1],
            ["Colombia", "co", "57"],
            ["Comoros (‫جزر القمر‬‎)", "km", "269"],
            ["Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)", "cd", "243"],
            ["Congo (Republic) (Congo-Brazzaville)", "cg", "242"],
            ["Cook Islands", "ck", "682"],
            ["Costa Rica", "cr", "506"],
            ["Côte d’Ivoire", "ci", "225"],
            ["Croatia (Hrvatska)", "hr", "385"],
            ["Cuba", "cu", "53"],
            ["Curaçao", "cw", "599", 0],
            ["Cyprus (Κύπρος)", "cy", "357"],
            ["Czech Republic (Česká republika)", "cz", "420"],
            ["Denmark (Danmark)", "dk", "45"],
            ["Djibouti", "dj", "253"],
            ["Dominica", "dm", "1767"],
            [
              "Dominican Republic (República Dominicana)",
              "do",
              "1",
              2,
              ["809", "829", "849"],
            ],
            ["Ecuador", "ec", "593"],
            ["Egypt (‫مصر‬‎)", "eg", "20"],
            ["El Salvador", "sv", "503"],
            ["Equatorial Guinea (Guinea Ecuatorial)", "gq", "240"],
            ["Eritrea", "er", "291"],
            ["Estonia (Eesti)", "ee", "372"],
            ["Ethiopia", "et", "251"],
            ["Falkland Islands (Islas Malvinas)", "fk", "500"],
            ["Faroe Islands (Føroyar)", "fo", "298"],
            ["Fiji", "fj", "679"],
            ["Finland (Suomi)", "fi", "358", 0],
            ["France", "fr", "33"],
            ["French Guiana (Guyane française)", "gf", "594"],
            ["French Polynesia (Polynésie française)", "pf", "689"],
            ["Gabon", "ga", "241"],
            ["Gambia", "gm", "220"],
            ["Georgia (საქართველო)", "ge", "995"],
            ["Germany (Deutschland)", "de", "49"],
            ["Ghana (Gaana)", "gh", "233"],
            ["Gibraltar", "gi", "350"],
            ["Greece (Ελλάδα)", "gr", "30"],
            ["Greenland (Kalaallit Nunaat)", "gl", "299"],
            ["Grenada", "gd", "1473"],
            ["Guadeloupe", "gp", "590", 0],
            ["Guam", "gu", "1671"],
            ["Guatemala", "gt", "502"],
            ["Guernsey", "gg", "44", 1],
            ["Guinea (Guinée)", "gn", "224"],
            ["Guinea-Bissau (Guiné Bissau)", "gw", "245"],
            ["Guyana", "gy", "592"],
            ["Haiti", "ht", "509"],
            ["Honduras", "hn", "504"],
            ["Hong Kong (香港)", "hk", "852"],
            ["Hungary (Magyarország)", "hu", "36"],
            ["Iceland (Ísland)", "is", "354"],
            ["India (भारत)", "in", "91"],
            ["Indonesia", "id", "62"],
            ["Iran (‫ایران‬‎)", "ir", "98"],
            ["Iraq (‫العراق‬‎)", "iq", "964"],
            ["Ireland", "ie", "353"],
            ["Isle of Man", "im", "44", 2],
            ["Israel (‫ישראל‬‎)", "il", "972"],
            ["Italy (Italia)", "it", "39", 0],
            ["Jamaica", "jm", "1876"],
            ["Japan (日本)", "jp", "81"],
            ["Jersey", "je", "44", 3],
            ["Jordan (‫الأردن‬‎)", "jo", "962"],
            ["Kazakhstan (Казахстан)", "kz", "7", 1],
            ["Kenya", "ke", "254"],
            ["Kiribati", "ki", "686"],
            ["Kosovo", "xk", "383"],
            ["Kuwait (‫الكويت‬‎)", "kw", "965"],
            ["Kyrgyzstan (Кыргызстан)", "kg", "996"],
            ["Laos (ລາວ)", "la", "856"],
            ["Latvia (Latvija)", "lv", "371"],
            ["Lebanon (‫لبنان‬‎)", "lb", "961"],
            ["Lesotho", "ls", "266"],
            ["Liberia", "lr", "231"],
            ["Libya (‫ليبيا‬‎)", "ly", "218"],
            ["Liechtenstein", "li", "423"],
            ["Lithuania (Lietuva)", "lt", "370"],
            ["Luxembourg", "lu", "352"],
            ["Macau (澳門)", "mo", "853"],
            ["Macedonia (FYROM) (Македонија)", "mk", "389"],
            ["Madagascar (Madagasikara)", "mg", "261"],
            ["Malawi", "mw", "265"],
            ["Malaysia", "my", "60"],
            ["Maldives", "mv", "960"],
            ["Mali", "ml", "223"],
            ["Malta", "mt", "356"],
            ["Marshall Islands", "mh", "692"],
            ["Martinique", "mq", "596"],
            ["Mauritania (‫موريتانيا‬‎)", "mr", "222"],
            ["Mauritius (Moris)", "mu", "230"],
            ["Mayotte", "yt", "262", 1],
            ["Mexico (México)", "mx", "52"],
            ["Micronesia", "fm", "691"],
            ["Moldova (Republica Moldova)", "md", "373"],
            ["Monaco", "mc", "377"],
            ["Mongolia (Монгол)", "mn", "976"],
            ["Montenegro (Crna Gora)", "me", "382"],
            ["Montserrat", "ms", "1664"],
            ["Morocco (‫المغرب‬‎)", "ma", "212", 0],
            ["Mozambique (Moçambique)", "mz", "258"],
            ["Myanmar (Burma) (မြန်မာ)", "mm", "95"],
            ["Namibia (Namibië)", "na", "264"],
            ["Nauru", "nr", "674"],
            ["Nepal (नेपाल)", "np", "977"],
            ["Netherlands (Nederland)", "nl", "31"],
            ["New Caledonia (Nouvelle-Calédonie)", "nc", "687"],
            ["New Zealand", "nz", "64"],
            ["Nicaragua", "ni", "505"],
            ["Niger (Nijar)", "ne", "227"],
            ["Nigeria", "ng", "234"],
            ["Niue", "nu", "683"],
            ["Norfolk Island", "nf", "672"],
            ["North Korea (조선 민주주의 인민 공화국)", "kp", "850"],
            ["Northern Mariana Islands", "mp", "1670"],
            ["Norway (Norge)", "no", "47", 0],
            ["Oman (‫عُمان‬‎)", "om", "968"],
            ["Pakistan (‫پاکستان‬‎)", "pk", "92"],
            ["Palau", "pw", "680"],
            ["Palestine (‫فلسطين‬‎)", "ps", "970"],
            ["Panama (Panamá)", "pa", "507"],
            ["Papua New Guinea", "pg", "675"],
            ["Paraguay", "py", "595"],
            ["Peru (Perú)", "pe", "51"],
            ["Philippines", "ph", "63"],
            ["Poland (Polska)", "pl", "48"],
            ["Portugal", "pt", "351"],
            ["Puerto Rico", "pr", "1", 3, ["787", "939"]],
            ["Qatar (‫قطر‬‎)", "qa", "974"],
            ["Réunion (La Réunion)", "re", "262", 0],
            ["Romania (România)", "ro", "40"],
            ["Russia (Россия)", "ru", "7", 0],
            ["Rwanda", "rw", "250"],
            ["Saint Barthélemy", "bl", "590", 1],
            ["Saint Helena", "sh", "290"],
            ["Saint Kitts and Nevis", "kn", "1869"],
            ["Saint Lucia", "lc", "1758"],
            ["Saint Martin (Saint-Martin (partie française))", "mf", "590", 2],
            [
              "Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)",
              "pm",
              "508",
            ],
            ["Saint Vincent and the Grenadines", "vc", "1784"],
            ["Samoa", "ws", "685"],
            ["San Marino", "sm", "378"],
            ["São Tomé and Príncipe (São Tomé e Príncipe)", "st", "239"],
            ["Saudi Arabia (‫المملكة العربية السعودية‬‎)", "sa", "966"],
            ["Senegal (Sénégal)", "sn", "221"],
            ["Serbia (Србија)", "rs", "381"],
            ["Seychelles", "sc", "248"],
            ["Sierra Leone", "sl", "232"],
            ["Singapore", "sg", "65"],
            ["Sint Maarten", "sx", "1721"],
            ["Slovakia (Slovensko)", "sk", "421"],
            ["Slovenia (Slovenija)", "si", "386"],
            ["Solomon Islands", "sb", "677"],
            ["Somalia (Soomaaliya)", "so", "252"],
            ["South Africa", "za", "27"],
            ["South Korea (대한민국)", "kr", "82"],
            ["South Sudan (‫جنوب السودان‬‎)", "ss", "211"],
            ["Spain (España)", "es", "34"],
            ["Sri Lanka (ශ්‍රී ලංකාව)", "lk", "94"],
            ["Sudan (‫السودان‬‎)", "sd", "249"],
            ["Suriname", "sr", "597"],
            ["Svalbard and Jan Mayen", "sj", "47", 1],
            ["Swaziland", "sz", "268"],
            ["Sweden (Sverige)", "se", "46"],
            ["Switzerland (Schweiz)", "ch", "41"],
            ["Syria (‫سوريا‬‎)", "sy", "963"],
            ["Taiwan (台灣)", "tw", "886"],
            ["Tajikistan", "tj", "992"],
            ["Tanzania", "tz", "255"],
            ["Thailand (ไทย)", "th", "66"],
            ["Timor-Leste", "tl", "670"],
            ["Togo", "tg", "228"],
            ["Tokelau", "tk", "690"],
            ["Tonga", "to", "676"],
            ["Trinidad and Tobago", "tt", "1868"],
            ["Tunisia (‫تونس‬‎)", "tn", "216"],
            ["Turkey (Türkiye)", "tr", "90"],
            ["Turkmenistan", "tm", "993"],
            ["Turks and Caicos Islands", "tc", "1649"],
            ["Tuvalu", "tv", "688"],
            ["U.S. Virgin Islands", "vi", "1340"],
            ["Uganda", "ug", "256"],
            ["Ukraine (Україна)", "ua", "380"],
            ["United Arab Emirates (‫الإمارات العربية المتحدة‬‎)", "ae", "971"],
            ["United Kingdom", "gb", "44", 0],
            ["United States", "us", "1", 0],
            ["Uruguay", "uy", "598"],
            ["Uzbekistan (Oʻzbekiston)", "uz", "998"],
            ["Vanuatu", "vu", "678"],
            ["Vatican City (Città del Vaticano)", "va", "39", 1],
            ["Venezuela", "ve", "58"],
            ["Vietnam (Việt Nam)", "vn", "84"],
            ["Wallis and Futuna (Wallis-et-Futuna)", "wf", "681"],
            ["Western Sahara (‫الصحراء الغربية‬‎)", "eh", "212", 1],
            ["Yemen (‫اليمن‬‎)", "ye", "967"],
            ["Zambia", "zm", "260"],
            ["Zimbabwe", "zw", "263"],
            ["Åland Islands", "ax", "358", 1],
          ],
          f = h.map(function (t) {
            return t[1].toUpperCase();
          }),
          b = h.map(function (t) {
            return {
              name: t[0],
              iso2: t[1].toUpperCase(),
              dialCode: t[2],
              priority: t[3] || 0,
              areaCodes: t[4] || null,
            };
          }),
          m = n("d391"),
          g = {
            version: 4,
            country_calling_codes: {
              1: [
                "US",
                "AG",
                "AI",
                "AS",
                "BB",
                "BM",
                "BS",
                "CA",
                "DM",
                "DO",
                "GD",
                "GU",
                "JM",
                "KN",
                "KY",
                "LC",
                "MP",
                "MS",
                "PR",
                "SX",
                "TC",
                "TT",
                "VC",
                "VG",
                "VI",
              ],
              7: ["RU", "KZ"],
              20: ["EG"],
              27: ["ZA"],
              30: ["GR"],
              31: ["NL"],
              32: ["BE"],
              33: ["FR"],
              34: ["ES"],
              36: ["HU"],
              39: ["IT", "VA"],
              40: ["RO"],
              41: ["CH"],
              43: ["AT"],
              44: ["GB", "GG", "IM", "JE"],
              45: ["DK"],
              46: ["SE"],
              47: ["NO", "SJ"],
              48: ["PL"],
              49: ["DE"],
              51: ["PE"],
              52: ["MX"],
              53: ["CU"],
              54: ["AR"],
              55: ["BR"],
              56: ["CL"],
              57: ["CO"],
              58: ["VE"],
              60: ["MY"],
              61: ["AU", "CC", "CX"],
              62: ["ID"],
              63: ["PH"],
              64: ["NZ"],
              65: ["SG"],
              66: ["TH"],
              81: ["JP"],
              82: ["KR"],
              84: ["VN"],
              86: ["CN"],
              90: ["TR"],
              91: ["IN"],
              92: ["PK"],
              93: ["AF"],
              94: ["LK"],
              95: ["MM"],
              98: ["IR"],
              211: ["SS"],
              212: ["MA", "EH"],
              213: ["DZ"],
              216: ["TN"],
              218: ["LY"],
              220: ["GM"],
              221: ["SN"],
              222: ["MR"],
              223: ["ML"],
              224: ["GN"],
              225: ["CI"],
              226: ["BF"],
              227: ["NE"],
              228: ["TG"],
              229: ["BJ"],
              230: ["MU"],
              231: ["LR"],
              232: ["SL"],
              233: ["GH"],
              234: ["NG"],
              235: ["TD"],
              236: ["CF"],
              237: ["CM"],
              238: ["CV"],
              239: ["ST"],
              240: ["GQ"],
              241: ["GA"],
              242: ["CG"],
              243: ["CD"],
              244: ["AO"],
              245: ["GW"],
              246: ["IO"],
              247: ["AC"],
              248: ["SC"],
              249: ["SD"],
              250: ["RW"],
              251: ["ET"],
              252: ["SO"],
              253: ["DJ"],
              254: ["KE"],
              255: ["TZ"],
              256: ["UG"],
              257: ["BI"],
              258: ["MZ"],
              260: ["ZM"],
              261: ["MG"],
              262: ["RE", "YT"],
              263: ["ZW"],
              264: ["NA"],
              265: ["MW"],
              266: ["LS"],
              267: ["BW"],
              268: ["SZ"],
              269: ["KM"],
              290: ["SH", "TA"],
              291: ["ER"],
              297: ["AW"],
              298: ["FO"],
              299: ["GL"],
              350: ["GI"],
              351: ["PT"],
              352: ["LU"],
              353: ["IE"],
              354: ["IS"],
              355: ["AL"],
              356: ["MT"],
              357: ["CY"],
              358: ["FI", "AX"],
              359: ["BG"],
              370: ["LT"],
              371: ["LV"],
              372: ["EE"],
              373: ["MD"],
              374: ["AM"],
              375: ["BY"],
              376: ["AD"],
              377: ["MC"],
              378: ["SM"],
              380: ["UA"],
              381: ["RS"],
              382: ["ME"],
              383: ["XK"],
              385: ["HR"],
              386: ["SI"],
              387: ["BA"],
              389: ["MK"],
              420: ["CZ"],
              421: ["SK"],
              423: ["LI"],
              500: ["FK"],
              501: ["BZ"],
              502: ["GT"],
              503: ["SV"],
              504: ["HN"],
              505: ["NI"],
              506: ["CR"],
              507: ["PA"],
              508: ["PM"],
              509: ["HT"],
              590: ["GP", "BL", "MF"],
              591: ["BO"],
              592: ["GY"],
              593: ["EC"],
              594: ["GF"],
              595: ["PY"],
              596: ["MQ"],
              597: ["SR"],
              598: ["UY"],
              599: ["CW", "BQ"],
              670: ["TL"],
              672: ["NF"],
              673: ["BN"],
              674: ["NR"],
              675: ["PG"],
              676: ["TO"],
              677: ["SB"],
              678: ["VU"],
              679: ["FJ"],
              680: ["PW"],
              681: ["WF"],
              682: ["CK"],
              683: ["NU"],
              685: ["WS"],
              686: ["KI"],
              687: ["NC"],
              688: ["TV"],
              689: ["PF"],
              690: ["TK"],
              691: ["FM"],
              692: ["MH"],
              850: ["KP"],
              852: ["HK"],
              853: ["MO"],
              855: ["KH"],
              856: ["LA"],
              880: ["BD"],
              886: ["TW"],
              960: ["MV"],
              961: ["LB"],
              962: ["JO"],
              963: ["SY"],
              964: ["IQ"],
              965: ["KW"],
              966: ["SA"],
              967: ["YE"],
              968: ["OM"],
              970: ["PS"],
              971: ["AE"],
              972: ["IL"],
              973: ["BH"],
              974: ["QA"],
              975: ["BT"],
              976: ["MN"],
              977: ["NP"],
              992: ["TJ"],
              993: ["TM"],
              994: ["AZ"],
              995: ["GE"],
              996: ["KG"],
              998: ["UZ"],
            },
            countries: {
              AC: ["247", "00", "(?:[01589]\\d|[46])\\d{4}", [5, 6]],
              AD: [
                "376",
                "00",
                "(?:1|6\\d)\\d{7}|[135-9]\\d{5}",
                [6, 8, 9],
                [
                  ["(\\d{3})(\\d{3})", "$1 $2", ["[135-9]"]],
                  ["(\\d{4})(\\d{4})", "$1 $2", ["1"]],
                  ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6"]],
                ],
              ],
              AE: [
                "971",
                "00",
                "(?:[4-7]\\d|9[0-689])\\d{7}|800\\d{2,9}|[2-4679]\\d{7}",
                [5, 6, 7, 8, 9, 10, 11, 12],
                [
                  ["(\\d{3})(\\d{2,9})", "$1 $2", ["60|8"]],
                  [
                    "(\\d)(\\d{3})(\\d{4})",
                    "$1 $2 $3",
                    ["[236]|[479][2-8]"],
                    "0$1",
                  ],
                  ["(\\d{3})(\\d)(\\d{5})", "$1 $2 $3", ["[479]"]],
                  ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["5"], "0$1"],
                ],
                "0",
              ],
              AF: [
                "93",
                "00",
                "[2-7]\\d{8}",
                [9],
                [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-7]"], "0$1"]],
                "0",
              ],
              AG: [
                "1",
                "011",
                "(?:268|[58]\\d\\d|900)\\d{7}",
                [10],
                0,
                "1",
                0,
                "1|([457]\\d{6})$",
                "268$1",
                0,
                "268",
              ],
              AI: [
                "1",
                "011",
                "(?:264|[58]\\d\\d|900)\\d{7}",
                [10],
                0,
                "1",
                0,
                "1|([2457]\\d{6})$",
                "264$1",
                0,
                "264",
              ],
              AL: [
                "355",
                "00",
                "(?:700\\d\\d|900)\\d{3}|8\\d{5,7}|(?:[2-5]|6\\d)\\d{7}",
                [6, 7, 8, 9],
                [
                  ["(\\d{3})(\\d{3,4})", "$1 $2", ["80|9"], "0$1"],
                  ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["4[2-6]"], "0$1"],
                  [
                    "(\\d{2})(\\d{3})(\\d{3})",
                    "$1 $2 $3",
                    ["[2358][2-5]|4"],
                    "0$1",
                  ],
                  ["(\\d{3})(\\d{5})", "$1 $2", ["[23578]"], "0$1"],
                  ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["6"], "0$1"],
                ],
                "0",
              ],
              AM: [
                "374",
                "00",
                "(?:[1-489]\\d|55|60|77)\\d{6}",
                [8],
                [
                  ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[89]0"], "0 $1"],
                  ["(\\d{3})(\\d{5})", "$1 $2", ["2|3[12]"], "(0$1)"],
                  ["(\\d{2})(\\d{6})", "$1 $2", ["1|47"], "(0$1)"],
                  ["(\\d{2})(\\d{6})", "$1 $2", ["[3-9]"], "0$1"],
                ],
                "0",
              ],
              AO: [
                "244",
                "00",
                "[29]\\d{8}",
                [9],
                [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[29]"]]],
              ],
              AR: [
                "54",
                "00",
                "(?:11|[89]\\d\\d)\\d{8}|[2368]\\d{9}",
                [10, 11],
                [
                  [
                    "(\\d{4})(\\d{2})(\\d{4})",
                    "$1 $2-$3",
                    [
                      "2(?:2[024-9]|3[0-59]|47|6[245]|9[02-8])|3(?:3[28]|4[03-9]|5[2-46-8]|7[1-578]|8[2-9])",
                      "2(?:[23]02|6(?:[25]|4[6-8])|9(?:[02356]|4[02568]|72|8[23]))|3(?:3[28]|4(?:[04679]|3[5-8]|5[4-68]|8[2379])|5(?:[2467]|3[237]|8[2-5])|7[1-578]|8(?:[2469]|3[2578]|5[4-8]|7[36-8]|8[5-8]))|2(?:2[24-9]|3[1-59]|47)",
                      "2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3[78]|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8[23])|7[1-578]|8(?:[2469]|3[278]|5[56][46]|86[3-6]))|2(?:2[24-9]|3[1-59]|47)|38(?:[58][78]|7[378])|3(?:4[35][56]|58[45]|8(?:[38]5|54|76))[4-6]",
                      "2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3(?:5(?:4[0-25689]|[56])|[78])|58|8[2379])|5(?:[2467]|3[237]|8(?:[23]|4(?:[45]|60)|5(?:4[0-39]|5|64)))|7[1-578]|8(?:[2469]|3[278]|54(?:4|5[13-7]|6[89])|86[3-6]))|2(?:2[24-9]|3[1-59]|47)|38(?:[58][78]|7[378])|3(?:454|85[56])[46]|3(?:4(?:36|5[56])|8(?:[38]5|76))[4-6]",
                    ],
                    "0$1",
                    1,
                  ],
                  ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2-$3", ["1"], "0$1", 1],
                  ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["[68]"], "0$1"],
                  ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2-$3", ["[23]"], "0$1", 1],
                  [
                    "(\\d)(\\d{4})(\\d{2})(\\d{4})",
                    "$2 15-$3-$4",
                    [
                      "9(?:2[2-469]|3[3-578])",
                      "9(?:2(?:2[024-9]|3[0-59]|47|6[245]|9[02-8])|3(?:3[28]|4[03-9]|5[2-46-8]|7[1-578]|8[2-9]))",
                      "9(?:2(?:[23]02|6(?:[25]|4[6-8])|9(?:[02356]|4[02568]|72|8[23]))|3(?:3[28]|4(?:[04679]|3[5-8]|5[4-68]|8[2379])|5(?:[2467]|3[237]|8[2-5])|7[1-578]|8(?:[2469]|3[2578]|5[4-8]|7[36-8]|8[5-8])))|92(?:2[24-9]|3[1-59]|47)",
                      "9(?:2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3[78]|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8[23])|7[1-578]|8(?:[2469]|3[278]|5(?:[56][46]|[78])|7[378]|8(?:6[3-6]|[78]))))|92(?:2[24-9]|3[1-59]|47)|93(?:4[35][56]|58[45]|8(?:[38]5|54|76))[4-6]",
                      "9(?:2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3(?:5(?:4[0-25689]|[56])|[78])|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8(?:[23]|4(?:[45]|60)|5(?:4[0-39]|5|64)))|7[1-578]|8(?:[2469]|3[278]|5(?:4(?:4|5[13-7]|6[89])|[56][46]|[78])|7[378]|8(?:6[3-6]|[78]))))|92(?:2[24-9]|3[1-59]|47)|93(?:4(?:36|5[56])|8(?:[38]5|76))[4-6]",
                    ],
                    "0$1",
                    0,
                    "$1 $2 $3-$4",
                  ],
                  [
                    "(\\d)(\\d{2})(\\d{4})(\\d{4})",
                    "$2 15-$3-$4",
                    ["91"],
                    "0$1",
                    0,
                    "$1 $2 $3-$4",
                  ],
                  ["(\\d{3})(\\d{3})(\\d{5})", "$1-$2-$3", ["8"], "0$1"],
                  [
                    "(\\d)(\\d{3})(\\d{3})(\\d{4})",
                    "$2 15-$3-$4",
                    ["9"],
                    "0$1",
                    0,
                    "$1 $2 $3-$4",
                  ],
                ],
                "0",
                0,
                "0?(?:(11|2(?:2(?:02?|[13]|2[13-79]|4[1-6]|5[2457]|6[124-8]|7[1-4]|8[13-6]|9[1267])|3(?:02?|1[467]|2[03-6]|3[13-8]|[49][2-6]|5[2-8]|[67])|4(?:7[3-578]|9)|6(?:[0136]|2[24-6]|4[6-8]?|5[15-8])|80|9(?:0[1-3]|[19]|2\\d|3[1-6]|4[02568]?|5[2-4]|6[2-46]|72?|8[23]?))|3(?:3(?:2[79]|6|8[2578])|4(?:0[0-24-9]|[12]|3[5-8]?|4[24-7]|5[4-68]?|6[02-9]|7[126]|8[2379]?|9[1-36-8])|5(?:1|2[1245]|3[237]?|4[1-46-9]|6[2-4]|7[1-6]|8[2-5]?)|6[24]|7(?:[069]|1[1568]|2[15]|3[145]|4[13]|5[14-8]|7[2-57]|8[126])|8(?:[01]|2[15-7]|3[2578]?|4[13-6]|5[4-8]?|6[1-357-9]|7[36-8]?|8[5-8]?|9[124])))15)?",
                "9$1",
              ],
              AS: [
                "1",
                "011",
                "(?:[58]\\d\\d|684|900)\\d{7}",
                [10],
                0,
                "1",
                0,
                "1|([267]\\d{6})$",
                "684$1",
                0,
                "684",
              ],
              AT: [
                "43",
                "00",
                "1\\d{3,12}|2\\d{6,12}|43(?:(?:0\\d|5[02-9])\\d{3,9}|2\\d{4,5}|[3467]\\d{4}|8\\d{4,6}|9\\d{4,7})|5\\d{4,12}|8\\d{7,12}|9\\d{8,12}|(?:[367]\\d|4[0-24-9])\\d{4,11}",
                [4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
                [
                  ["(\\d)(\\d{3,12})", "$1 $2", ["1(?:11|[2-9])"], "0$1"],
                  ["(\\d{3})(\\d{2})", "$1 $2", ["517"], "0$1"],
                  ["(\\d{2})(\\d{3,5})", "$1 $2", ["5[079]"], "0$1"],
                  [
                    "(\\d{3})(\\d{3,10})",
                    "$1 $2",
                    ["(?:31|4)6|51|6(?:5[0-3579]|[6-9])|7(?:20|32|8)|[89]"],
                    "0$1",
                  ],
                  ["(\\d{4})(\\d{3,9})", "$1 $2", ["[2-467]|5[2-6]"], "0$1"],
                  ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["5"], "0$1"],
                  ["(\\d{2})(\\d{4})(\\d{4,7})", "$1 $2 $3", ["5"], "0$1"],
                ],
                "0",
              ],
              AU: [
                "61",
                "001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011",
                "1(?:[0-79]\\d{7}(?:\\d(?:\\d{2})?)?|8[0-24-9]\\d{7})|[2-478]\\d{8}|1\\d{4,7}",
                [5, 6, 7, 8, 9, 10, 12],
                [
                  ["(\\d{2})(\\d{3,4})", "$1 $2", ["16"], "0$1"],
                  ["(\\d{2})(\\d{3})(\\d{2,4})", "$1 $2 $3", ["16"], "0$1"],
                  ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["14|4"], "0$1"],
                  ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["[2378]"], "(0$1)"],
                  ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1(?:30|[89])"]],
                ],
                "0",
                0,
                "0|(183[12])",
                0,
                0,
                0,
                [
                  [
                    "(?:(?:2(?:[0-26-9]\\d|3[0-8]|4[02-9]|5[0135-9])|3(?:[0-3589]\\d|4[0-578]|6[1-9]|7[0-35-9])|7(?:[013-57-9]\\d|2[0-8]))\\d{3}|8(?:51(?:0(?:0[03-9]|[12479]\\d|3[2-9]|5[0-8]|6[1-9]|8[0-7])|1(?:[0235689]\\d|1[0-69]|4[0-589]|7[0-47-9])|2(?:0[0-79]|[18][13579]|2[14-9]|3[0-46-9]|[4-6]\\d|7[89]|9[0-4]))|(?:6[0-8]|[78]\\d)\\d{3}|9(?:[02-9]\\d{3}|1(?:(?:[0-58]\\d|6[0135-9])\\d|7(?:0[0-24-9]|[1-9]\\d)|9(?:[0-46-9]\\d|5[0-79])))))\\d{3}",
                    [9],
                  ],
                  [
                    "4(?:83[0-38]|93[0-6])\\d{5}|4(?:[0-3]\\d|4[047-9]|5[0-25-9]|6[06-9]|7[02-9]|8[0-24-9]|9[0-27-9])\\d{6}",
                    [9],
                  ],
                  ["180(?:0\\d{3}|2)\\d{3}", [7, 10]],
                  ["190[0-26]\\d{6}", [10]],
                  0,
                  0,
                  0,
                  ["163\\d{2,6}", [5, 6, 7, 8, 9]],
                  ["14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}", [9]],
                  [
                    "13(?:00\\d{6}(?:\\d{2})?|45[0-4]\\d{3})|13\\d{4}",
                    [6, 8, 10, 12],
                  ],
                ],
                "0011",
              ],
              AW: [
                "297",
                "00",
                "(?:[25-79]\\d\\d|800)\\d{4}",
                [7],
                [["(\\d{3})(\\d{4})", "$1 $2", ["[25-9]"]]],
              ],
              AX: [
                "358",
                "00|99(?:[01469]|5(?:[14]1|3[23]|5[59]|77|88|9[09]))",
                "2\\d{4,9}|35\\d{4,5}|(?:60\\d\\d|800)\\d{4,6}|7\\d{5,11}|(?:[14]\\d|3[0-46-9]|50)\\d{4,8}",
                [5, 6, 7, 8, 9, 10, 11, 12],
                0,
                "0",
                0,
                0,
                0,
                0,
                "18",
                0,
                "00",
              ],
              AZ: [
                "994",
                "00",
                "365\\d{6}|(?:[124579]\\d|60|88)\\d{7}",
                [9],
                [
                  [
                    "(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
                    "$1 $2 $3 $4",
                    ["90"],
                    "0$1",
                  ],
                  [
                    "(\\d{2})(\\d{3})(\\d{2})(\\d{2})",
                    "$1 $2 $3 $4",
                    [
                      "1[28]|2|365|46",
                      "1[28]|2|365[45]|46",
                      "1[28]|2|365(?:4|5[02])|46",
                    ],
                    "(0$1)",
                  ],
                  [
                    "(\\d{2})(\\d{3})(\\d{2})(\\d{2})",
                    "$1 $2 $3 $4",
                    ["[13-9]"],
                    "0$1",
                  ],
                ],
                "0",
              ],
              BA: [
                "387",
                "00",
                "6\\d{8}|(?:[35689]\\d|49|70)\\d{6}",
                [8, 9],
                [
                  [
                    "(\\d{2})(\\d{3})(\\d{3})",
                    "$1 $2 $3",
                    ["6[1-3]|[7-9]"],
                    "0$1",
                  ],
                  [
                    "(\\d{2})(\\d{3})(\\d{3})",
                    "$1 $2-$3",
                    ["[3-5]|6[56]"],
                    "0$1",
                  ],
                  [
                    "(\\d{2})(\\d{2})(\\d{2})(\\d{3})",
                    "$1 $2 $3 $4",
                    ["6"],
                    "0$1",
                  ],
                ],
                "0",
              ],
              BB: [
                "1",
                "011",
                "(?:246|[58]\\d\\d|900)\\d{7}",
                [10],
                0,
                "1",
                0,
                "1|([2-9]\\d{6})$",
                "246$1",
                0,
                "246",
              ],
              BD: [
                "880",
                "00",
                "[1-469]\\d{9}|8[0-79]\\d{7,8}|[2-79]\\d{8}|[2-9]\\d{7}|[3-9]\\d{6}|[57-9]\\d{5}",
                [6, 7, 8, 9, 10],
                [
                  ["(\\d{2})(\\d{4,6})", "$1-$2", ["31[5-8]|[459]1"], "0$1"],
                  [
                    "(\\d{3})(\\d{3,7})",
                    "$1-$2",
                    [
                      "3(?:[67]|8[013-9])|4(?:6[168]|7|[89][18])|5(?:6[128]|9)|6(?:28|4[14]|5)|7[2-589]|8(?:0[014-9]|[12])|9[358]|(?:3[2-5]|4[235]|5[2-578]|6[0389]|76|8[3-7]|9[24])1|(?:44|66)[01346-9]",
                    ],
                    "0$1",
                  ],
                  ["(\\d{4})(\\d{3,6})", "$1-$2", ["[13-9]|22"], "0$1"],
                  ["(\\d)(\\d{7,8})", "$1-$2", ["2"], "0$1"],
                ],
                "0",
              ],
              BE: [
                "32",
                "00",
                "4\\d{8}|[1-9]\\d{7}",
                [8, 9],
                [
                  [
                    "(\\d{3})(\\d{2})(\\d{3})",
                    "$1 $2 $3",
                    ["(?:80|9)0"],
                    "0$1",
                  ],
                  [
                    "(\\d)(\\d{3})(\\d{2})(\\d{2})",
                    "$1 $2 $3 $4",
                    ["[239]|4[23]"],
                    "0$1",
                  ],
                  [
                    "(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
                    "$1 $2 $3 $4",
                    ["[15-8]"],
                    "0$1",
                  ],
                  [
                    "(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
                    "$1 $2 $3 $4",
                    ["4"],
                    "0$1",
                  ],
                ],
                "0",
              ],
              BF: [
                "226",
                "00",
                "[025-7]\\d{7}",
                [8],
                [
                  [
                    "(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
                    "$1 $2 $3 $4",
                    ["[025-7]"],
                  ],
                ],
              ],
              BG: [
                "359",
                "00",
                "[2-7]\\d{6,7}|[89]\\d{6,8}|2\\d{5}",
                [6, 7, 8, 9],
                [
                  ["(\\d)(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["2"], "0$1"],
                  ["(\\d{3})(\\d{4})", "$1 $2", ["43[1-6]|70[1-9]"], "0$1"],
                  ["(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2"], "0$1"],
                  [
                    "(\\d{2})(\\d{3})(\\d{2,3})",
                    "$1 $2 $3",
                    ["[356]|4[124-7]|7[1-9]|8[1-6]|9[1-7]"],
                    "0$1",
                  ],
                  [
                    "(\\d{3})(\\d{2})(\\d{3})",
                    "$1 $2 $3",
                    ["(?:70|8)0"],
                    "0$1",
                  ],
                  [
                    "(\\d{3})(\\d{3})(\\d{2})",
                    "$1 $2 $3",
                    ["43[1-7]|7"],
                    "0$1",
                  ],
                  [
                    "(\\d{2})(\\d{3})(\\d{3,4})",
                    "$1 $2 $3",
                    ["[48]|9[08]"],
                    "0$1",
                  ],
                  ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"], "0$1"],
                ],
                "0",
              ],
              BH: [
                "973",
                "00",
                "[136-9]\\d{7}",
                [8],
                [["(\\d{4})(\\d{4})", "$1 $2", ["[13679]|8[047]"]]],
              ],
              BI: [
                "257",
                "00",
                "(?:[267]\\d|31)\\d{6}",
                [8],
                [
                  [
                    "(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
                    "$1 $2 $3 $4",
                    ["[2367]"],
                  ],
                ],
              ],
              BJ: [
                "229",
                "00",
                "(?:[25689]\\d|40)\\d{6}",
                [8],
                [
                  [
                    "(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
                    "$1 $2 $3 $4",
                    ["[24-689]"],
                  ],
                ],
              ],
              BL: [
                "590",
                "00",
                "(?:590|(?:69|80)\\d|976)\\d{6}",
                [9],
                0,
                "0",
                0,
                0,
                0,
                0,
                0,
                [
                  ["590(?:2[7-9]|5[12]|87)\\d{4}"],
                  ["69(?:0\\d\\d|1(?:2[2-9]|3[0-5]))\\d{4}"],
                  ["80[0-5]\\d{6}"],
                  0,
                  0,
                  0,
                  0,
                  0,
                  ["976[01]\\d{5}"],
                ],
              ],
              BM: [
                "1",
                "011",
                "(?:441|[58]\\d\\d|900)\\d{7}",
                [10],
                0,
                "1",
                0,
                "1|([2-8]\\d{6})$",
                "441$1",
                0,
                "441",
              ],
              BN: [
                "673",
                "00",
                "[2-578]\\d{6}",
                [7],
                [["(\\d{3})(\\d{4})", "$1 $2", ["[2-578]"]]],
              ],
              BO: [
                "591",
                "00(?:1\\d)?",
                "(?:[2-467]\\d\\d|8001)\\d{5}",
                [8, 9],
                [
                  ["(\\d)(\\d{7})", "$1 $2", ["[23]|4[46]"]],
                  ["(\\d{8})", "$1", ["[67]"]],
                  ["(\\d{3})(\\d{2})(\\d{4})", "$1 $2 $3", ["8"]],
                ],
                "0",
                0,
                "0(1\\d)?",
              ],
              BQ: [
                "599",
                "00",
                "(?:[34]1|7\\d)\\d{5}",
                [7],
                0,
                0,
                0,
                0,
                0,
                0,
                "[347]",
              ],
              BR: [
                "55",
                "00(?:1[245]|2[1-35]|31|4[13]|[56]5|99)",
                "(?:[1-46-9]\\d\\d|5(?:[0-46-9]\\d|5[0-46-9]))\\d{8}|[1-9]\\d{9}|[3589]\\d{8}|[34]\\d{7}",
                [8, 9, 10, 11],
                [
                  [
                    "(\\d{4})(\\d{4})",
                    "$1-$2",
                    ["300|4(?:0[02]|37)", "4(?:02|37)0|[34]00"],
                  ],
                  [
                    "(\\d{3})(\\d{2,3})(\\d{4})",
                    "$1 $2 $3",
                    ["(?:[358]|90)0"],
                    "0$1",
                  ],
                  [
                    "(\\d{2})(\\d{4})(\\d{4})",
                    "$1 $2-$3",
                    [
                      "(?:[14689][1-9]|2[12478]|3[1-578]|5[13-5]|7[13-579])[2-57]",
                    ],
                    "($1)",
                  ],
                  [
                    "(\\d{2})(\\d{5})(\\d{4})",
                    "$1 $2-$3",
                    ["[16][1-9]|[2-57-9]"],
                    "($1)",
                  ],
                ],
                "0",
                0,
                "(?:0|90)(?:(1[245]|2[1-35]|31|4[13]|[56]5|99)(\\d{10,11}))?",
                "$2",
              ],
              BS: [
                "1",
                "011",
                "(?:242|[58]\\d\\d|900)\\d{7}",
                [10],
                0,
                "1",
                0,
                "1|([3-8]\\d{6})$",
                "242$1",
                0,
                "242",
              ],
              BT: [
                "975",
                "00",
                "[17]\\d{7}|[2-8]\\d{6}",
                [7, 8],
                [
                  ["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-68]|7[246]"]],
                  [
                    "(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
                    "$1 $2 $3 $4",
                    ["1[67]|7"],
                  ],
                ],
              ],
              BW: [
                "267",
                "00",
                "(?:0800|(?:[37]|800)\\d)\\d{6}|(?:[2-6]\\d|90)\\d{5}",
                [7, 8, 10],
                [
                  ["(\\d{2})(\\d{5})", "$1 $2", ["90"]],
                  ["(\\d{3})(\\d{4})", "$1 $2", ["[24-6]|3[15-79]"]],
                  ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[37]"]],
                  ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["0"]],
                  ["(\\d{3})(\\d{4})(\\d{3})", "$1 $2 $3", ["8"]],
                ],
              ],
              BY: [
                "375",
                "810",
                "(?:[12]\\d|33|44|902)\\d{7}|8(?:0[0-79]\\d{5,7}|[1-7]\\d{9})|8(?:1[0-489]|[5-79]\\d)\\d{7}|8[1-79]\\d{6,7}|8[0-79]\\d{5}|8\\d{5}",
                [6, 7, 8, 9, 10, 11],
                [
                  ["(\\d{3})(\\d{3})", "$1 $2", ["800"], "8 $1"],
                  ["(\\d{3})(\\d{2})(\\d{2,4})", "$1 $2 $3", ["800"], "8 $1"],
                  [
                    "(\\d{4})(\\d{2})(\\d{3})",
                    "$1 $2-$3",
                    [
                      "1(?:5[169]|6[3-5]|7[179])|2(?:1[35]|2[34]|3[3-5])",
                      "1(?:5[169]|6(?:3[1-3]|4|5[125])|7(?:1[3-9]|7[0-24-6]|9[2-7]))|2(?:1[35]|2[34]|3[3-5])",
                    ],
                    "8 0$1",
                  ],
                  [
                    "(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
                    "$1 $2-$3-$4",
                    ["1(?:[56]|7[467])|2[1-3]"],
                    "8 0$1",
                  ],
                  [
                    "(\\d{2})(\\d{3})(\\d{2})(\\d{2})",
                    "$1 $2-$3-$4",
                    ["[1-4]"],
                    "8 0$1",
                  ],
                  ["(\\d{3})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["[89]"], "8 $1"],
                ],
                "8",
                0,
                "0|80?",
                0,
                0,
                0,
                0,
                "8~10",
              ],
              BZ: [
                "501",
                "00",
                "(?:0800\\d|[2-8])\\d{6}",
                [7, 11],
                [
                  ["(\\d{3})(\\d{4})", "$1-$2", ["[2-8]"]],
                  ["(\\d)(\\d{3})(\\d{4})(\\d{3})", "$1-$2-$3-$4", ["0"]],
                ],
              ],
              CA: [
                "1",
                "011",
                "(?:[2-8]\\d|90)\\d{8}|3\\d{6}",
                [7, 10],
                0,
                "1",
                0,
                0,
                0,
                0,
                0,
                [
                  [
                    "(?:2(?:04|[23]6|[48]9|50|63)|3(?:06|43|6[578])|4(?:03|1[68]|3[178]|50|68|74)|5(?:06|1[49]|48|79|8[147])|6(?:04|13|39|47|72)|7(?:0[59]|78|8[02])|8(?:[06]7|19|25|73)|90[25])[2-9]\\d{6}",
                    [10],
                  ],
                  ["", [10]],
                  ["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", [10]],
                  ["900[2-9]\\d{6}", [10]],
                  [
                    "52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|(?:5(?:00|2[125-7]|33|44|66|77|88)|622)[2-9]\\d{6}",
                    [10],
                  ],
                  0,
                  ["310\\d{4}", [7]],
                  0,
                  ["600[2-9]\\d{6}", [10]],
                ],
              ],
              CC: [
                "61",
                "001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011",
                "1(?:[0-79]\\d{8}(?:\\d{2})?|8[0-24-9]\\d{7})|[148]\\d{8}|1\\d{5,7}",
                [6, 7, 8, 9, 10, 12],
                0,
                "0",
                0,
                "0|([59]\\d{7})$",
                "8$1",
                0,
                0,
                [
                  [
                    "8(?:51(?:0(?:02|31|60|89)|1(?:18|76)|223)|91(?:0(?:1[0-2]|29)|1(?:[28]2|50|79)|2(?:10|64)|3(?:[06]8|22)|4[29]8|62\\d|70[23]|959))\\d{3}",
                    [9],
                  ],
                  [
                    "4(?:83[0-38]|93[0-6])\\d{5}|4(?:[0-3]\\d|4[047-9]|5[0-25-9]|6[06-9]|7[02-9]|8[0-24-9]|9[0-27-9])\\d{6}",
                    [9],
                  ],
                  ["180(?:0\\d{3}|2)\\d{3}", [7, 10]],
                  ["190[0-26]\\d{6}", [10]],
                  0,
                  0,
                  0,
                  0,
                  ["14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}", [9]],
                  [
                    "13(?:00\\d{6}(?:\\d{2})?|45[0-4]\\d{3})|13\\d{4}",
                    [6, 8, 10, 12],
                  ],
                ],
                "0011",
              ],
              CD: [
                "243",
                "00",
                "[189]\\d{8}|[1-68]\\d{6}",
                [7, 9],
                [
                  ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["88"], "0$1"],
                  ["(\\d{2})(\\d{5})", "$1 $2", ["[1-6]"], "0$1"],
                  ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"],
                  ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[89]"], "0$1"],
                ],
                "0",
              ],
              CF: [
                "236",
                "00",
                "(?:[27]\\d{3}|8776)\\d{4}",
                [8],
                [
                  [
                    "(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
                    "$1 $2 $3 $4",
                    ["[278]"],
                  ],
                ],
              ],
              CG: [
                "242",
                "00",
                "222\\d{6}|(?:0\\d|80)\\d{7}",
                [9],
                [
                  ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["8"]],
                  ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[02]"]],
                ],
              ],
              CH: [
                "41",
                "00",
                "8\\d{11}|[2-9]\\d{8}",
                [9],
                [
                  [
                    "(\\d{3})(\\d{3})(\\d{3})",
                    "$1 $2 $3",
                    ["8[047]|90"],
                    "0$1",
                  ],
                  [
                    "(\\d{2})(\\d{3})(\\d{2})(\\d{2})",
                    "$1 $2 $3 $4",
                    ["[2-79]|81"],
                    "0$1",
                  ],
                  [
                    "(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})",
                    "$1 $2 $3 $4 $5",
                    ["8"],
                    "0$1",
                  ],
                ],
                "0",
              ],
              CI: [
                "225",
                "00",
                "[02]\\d{9}",
                [10],
                [
                  ["(\\d{2})(\\d{2})(\\d)(\\d{5})", "$1 $2 $3 $4", ["2"]],
                  ["(\\d{2})(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3 $4", ["0"]],
                ],
              ],
              CK: [
                "682",
                "00",
                "[2-578]\\d{4}",
                [5],
                [["(\\d{2})(\\d{3})", "$1 $2", ["[2-578]"]]],
              ],
              CL: [
                "56",
                "(?:0|1(?:1[0-69]|2[02-5]|5[13-58]|69|7[0167]|8[018]))0",
                "12300\\d{6}|6\\d{9,10}|[2-9]\\d{8}",
                [9, 10, 11],
                [
                  ["(\\d{5})(\\d{4})", "$1 $2", ["219", "2196"], "($1)"],
                  ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["44"]],
                  ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["2[1-36]"], "($1)"],
                  ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["9[2-9]"]],
                  [
                    "(\\d{2})(\\d{3})(\\d{4})",
                    "$1 $2 $3",
                    ["3[2-5]|[47]|5[1-3578]|6[13-57]|8(?:0[1-9]|[1-9])"],
                    "($1)",
                  ],
                  ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["60|8"]],
                  ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]],
                  ["(\\d{3})(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["60"]],
                ],
              ],
              CM: [
                "237",
                "00",
                "[26]\\d{8}|88\\d{6,7}",
                [8, 9],
                [
                  ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["88"]],
                  [
                    "(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
                    "$1 $2 $3 $4 $5",
                    ["[26]|88"],
                  ],
                ],
              ],
              CN: [
                "86",
                "00|1(?:[12]\\d|79)\\d\\d00",
                "1[127]\\d{8,9}|2\\d{9}(?:\\d{2})?|[12]\\d{6,7}|86\\d{6}|(?:1[03-689]\\d|6)\\d{7,9}|(?:[3-579]\\d|8[0-57-9])\\d{6,9}",
                [7, 8, 9, 10, 11, 12],
                [
                  [
                    "(\\d{2})(\\d{5,6})",
                    "$1 $2",
                    [
                      "(?:10|2[0-57-9])[19]",
                      "(?:10|2[0-57-9])(?:10|9[56])",
                      "(?:10|2[0-57-9])(?:100|9[56])",
                    ],
                    "0$1",
                  ],
                  [
                    "(\\d{3})(\\d{5,6})",
                    "$1 $2",
                    [
                      "3(?:[157]|35|49|9[1-68])|4(?:[17]|2[179]|6[47-9]|8[23])|5(?:[1357]|2[37]|4[36]|6[1-46]|80)|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]|4[13]|5[1-5])|(?:4[35]|59|85)[1-9]",
                      "(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))[19]",
                      "85[23](?:10|95)|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:10|9[56])",
                      "85[23](?:100|95)|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:100|9[56])",
                    ],
                    "0$1",
                  ],
                  ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["(?:4|80)0"]],
                  [
                    "(\\d{2})(\\d{4})(\\d{4})",
                    "$1 $2 $3",
                    [
                      "10|2(?:[02-57-9]|1[1-9])",
                      "10|2(?:[02-57-9]|1[1-9])",
                      "10[0-79]|2(?:[02-57-9]|1[1-79])|(?:10|21)8(?:0[1-9]|[1-9])",
                    ],
                    "0$1",
                    1,
                  ],
                  [
                    "(\\d{3})(\\d{3})(\\d{4})",
                    "$1 $2 $3",
                    [
                      "3(?:[3-59]|7[02-68])|4(?:[26-8]|3[3-9]|5[2-9])|5(?:3[03-9]|[468]|7[028]|9[2-46-9])|6|7(?:[0-247]|3[04-9]|5[0-4689]|6[2368])|8(?:[1-358]|9[1-7])|9(?:[013479]|5[1-5])|(?:[34]1|55|79|87)[02-9]",
                    ],
                    "0$1",
                    1,
                  ],
                  ["(\\d{3})(\\d{7,8})", "$1 $2", ["9"]],
                  ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["80"], "0$1", 1],
                  [
                    "(\\d{3})(\\d{4})(\\d{4})",
                    "$1 $2 $3",
                    ["[3-578]"],
                    "0$1",
                    1,
                  ],
                  ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["1[3-9]"]],
                  [
                    "(\\d{2})(\\d{3})(\\d{3})(\\d{4})",
                    "$1 $2 $3 $4",
                    ["[12]"],
                    "0$1",
                    1,
                  ],
                ],
                "0",
                0,
                "0|(1(?:[12]\\d|79)\\d\\d)",
                0,
                0,
                0,
                0,
                "00",
              ],
              CO: [
                "57",
                "00(?:4(?:[14]4|56)|[579])",
                "(?:60\\d\\d|9101)\\d{6}|(?:1\\d|3)\\d{9}",
                [10, 11],
                [
                  ["(\\d{3})(\\d{7})", "$1 $2", ["6"], "($1)"],
                  ["(\\d{3})(\\d{7})", "$1 $2", ["[39]"]],
                  [
                    "(\\d)(\\d{3})(\\d{7})",
                    "$1-$2-$3",
                    ["1"],
                    "0$1",
                    0,
                    "$1 $2 $3",
                  ],
                ],
                "0",
                0,
                "0(4(?:[14]4|56)|[579])?",
              ],
              CR: [
                "506",
                "00",
                "(?:8\\d|90)\\d{8}|(?:[24-8]\\d{3}|3005)\\d{4}",
                [8, 10],
                [
                  ["(\\d{4})(\\d{4})", "$1 $2", ["[2-7]|8[3-9]"]],
                  ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["[89]"]],
                ],
                0,
                0,
                "(19(?:0[0-2468]|1[09]|20|66|77|99))",
              ],
              CU: [
                "53",
                "119",
                "[27]\\d{6,7}|[34]\\d{5,7}|(?:5|8\\d\\d)\\d{7}",
                [6, 7, 8, 10],
                [
                  ["(\\d{2})(\\d{4,6})", "$1 $2", ["2[1-4]|[34]"], "(0$1)"],
                  ["(\\d)(\\d{6,7})", "$1 $2", ["7"], "(0$1)"],
                  ["(\\d)(\\d{7})", "$1 $2", ["5"], "0$1"],
                  ["(\\d{3})(\\d{7})", "$1 $2", ["8"], "0$1"],
                ],
                "0",
              ],
              CV: [
                "238",
                "0",
                "(?:[2-59]\\d\\d|800)\\d{4}",
                [7],
                [["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["[2-589]"]]],
              ],
              CW: [
                "599",
                "00",
                "(?:[34]1|60|(?:7|9\\d)\\d)\\d{5}",
                [7, 8],
                [
                  ["(\\d{3})(\\d{4})", "$1 $2", ["[3467]"]],
                  ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["9[4-8]"]],
                ],
                0,
                0,
                0,
                0,
                0,
                "[69]",
              ],
              CX: [
                "61",
                "001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011",
                "1(?:[0-79]\\d{8}(?:\\d{2})?|8[0-24-9]\\d{7})|[148]\\d{8}|1\\d{5,7}",
                [6, 7, 8, 9, 10, 12],
                0,
                "0",
                0,
                "0|([59]\\d{7})$",
                "8$1",
                0,
                0,
                [
                  [
                    "8(?:51(?:0(?:01|30|59|88)|1(?:17|46|75)|2(?:22|35))|91(?:00[6-9]|1(?:[28]1|49|78)|2(?:09|63)|3(?:12|26|75)|4(?:56|97)|64\\d|7(?:0[01]|1[0-2])|958))\\d{3}",
                    [9],
                  ],
                  [
                    "4(?:83[0-38]|93[0-6])\\d{5}|4(?:[0-3]\\d|4[047-9]|5[0-25-9]|6[06-9]|7[02-9]|8[0-24-9]|9[0-27-9])\\d{6}",
                    [9],
                  ],
                  ["180(?:0\\d{3}|2)\\d{3}", [7, 10]],
                  ["190[0-26]\\d{6}", [10]],
                  0,
                  0,
                  0,
                  0,
                  ["14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}", [9]],
                  [
                    "13(?:00\\d{6}(?:\\d{2})?|45[0-4]\\d{3})|13\\d{4}",
                    [6, 8, 10, 12],
                  ],
                ],
                "0011",
              ],
              CY: [
                "357",
                "00",
                "(?:[279]\\d|[58]0)\\d{6}",
                [8],
                [["(\\d{2})(\\d{6})", "$1 $2", ["[257-9]"]]],
              ],
              CZ: [
                "420",
                "00",
                "(?:[2-578]\\d|60)\\d{7}|9\\d{8,11}",
                [9],
                [
                  ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-8]|9[015-7]"]],
                  ["(\\d{2})(\\d{3})(\\d{3})(\\d{2})", "$1 $2 $3 $4", ["96"]],
                  ["(\\d{2})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["9"]],
                  ["(\\d{3})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["9"]],
                ],
              ],
              DE: [
                "49",
                "00",
                "[2579]\\d{5,14}|49(?:[34]0|69|8\\d)\\d\\d?|49(?:37|49|60|7[089]|9\\d)\\d{1,3}|49(?:2[02-9]|3[2-689]|7[1-7])\\d{1,8}|(?:1|[368]\\d|4[0-8])\\d{3,13}|49(?:[015]\\d|[23]1|[46][1-8])\\d{1,9}",
                [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
                [
                  ["(\\d{2})(\\d{3,13})", "$1 $2", ["3[02]|40|[68]9"], "0$1"],
                  [
                    "(\\d{3})(\\d{3,12})",
                    "$1 $2",
                    [
                      "2(?:0[1-389]|1[124]|2[18]|3[14])|3(?:[35-9][15]|4[015])|906|(?:2[4-9]|4[2-9]|[579][1-9]|[68][1-8])1",
                      "2(?:0[1-389]|12[0-8])|3(?:[35-9][15]|4[015])|906|2(?:[13][14]|2[18])|(?:2[4-9]|4[2-9]|[579][1-9]|[68][1-8])1",
                    ],
                    "0$1",
                  ],
                  [
                    "(\\d{4})(\\d{2,11})",
                    "$1 $2",
                    [
                      "[24-6]|3(?:[3569][02-46-9]|4[2-4679]|7[2-467]|8[2-46-8])|70[2-8]|8(?:0[2-9]|[1-8])|90[7-9]|[79][1-9]",
                      "[24-6]|3(?:3(?:0[1-467]|2[127-9]|3[124578]|7[1257-9]|8[1256]|9[145])|4(?:2[135]|4[13578]|9[1346])|5(?:0[14]|2[1-3589]|6[1-4]|7[13468]|8[13568])|6(?:2[1-489]|3[124-6]|6[13]|7[12579]|8[1-356]|9[135])|7(?:2[1-7]|4[145]|6[1-5]|7[1-4])|8(?:21|3[1468]|6|7[1467]|8[136])|9(?:0[12479]|2[1358]|4[134679]|6[1-9]|7[136]|8[147]|9[1468]))|70[2-8]|8(?:0[2-9]|[1-8])|90[7-9]|[79][1-9]|3[68]4[1347]|3(?:47|60)[1356]|3(?:3[46]|46|5[49])[1246]|3[4579]3[1357]",
                    ],
                    "0$1",
                  ],
                  ["(\\d{3})(\\d{4})", "$1 $2", ["138"], "0$1"],
                  ["(\\d{5})(\\d{2,10})", "$1 $2", ["3"], "0$1"],
                  ["(\\d{3})(\\d{5,11})", "$1 $2", ["181"], "0$1"],
                  [
                    "(\\d{3})(\\d)(\\d{4,10})",
                    "$1 $2 $3",
                    ["1(?:3|80)|9"],
                    "0$1",
                  ],
                  ["(\\d{3})(\\d{7,8})", "$1 $2", ["1[67]"], "0$1"],
                  ["(\\d{3})(\\d{7,12})", "$1 $2", ["8"], "0$1"],
                  [
                    "(\\d{5})(\\d{6})",
                    "$1 $2",
                    ["185", "1850", "18500"],
                    "0$1",
                  ],
                  ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["7"], "0$1"],
                  ["(\\d{4})(\\d{7})", "$1 $2", ["18[68]"], "0$1"],
                  ["(\\d{5})(\\d{6})", "$1 $2", ["15[0568]"], "0$1"],
                  ["(\\d{4})(\\d{7})", "$1 $2", ["15[1279]"], "0$1"],
                  ["(\\d{3})(\\d{8})", "$1 $2", ["18"], "0$1"],
                  [
                    "(\\d{3})(\\d{2})(\\d{7,8})",
                    "$1 $2 $3",
                    ["1(?:6[023]|7)"],
                    "0$1",
                  ],
                  ["(\\d{4})(\\d{2})(\\d{7})", "$1 $2 $3", ["15[279]"], "0$1"],
                  ["(\\d{3})(\\d{2})(\\d{8})", "$1 $2 $3", ["15"], "0$1"],
                ],
                "0",
              ],
              DJ: [
                "253",
                "00",
                "(?:2\\d|77)\\d{6}",
                [8],
                [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[27]"]]],
              ],
              DK: [
                "45",
                "00",
                "[2-9]\\d{7}",
                [8],
                [
                  [
                    "(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
                    "$1 $2 $3 $4",
                    ["[2-9]"],
                  ],
                ],
              ],
              DM: [
                "1",
                "011",
                "(?:[58]\\d\\d|767|900)\\d{7}",
                [10],
                0,
                "1",
                0,
                "1|([2-7]\\d{6})$",
                "767$1",
                0,
                "767",
              ],
              DO: [
                "1",
                "011",
                "(?:[58]\\d\\d|900)\\d{7}",
                [10],
                0,
                "1",
                0,
                0,
                0,
                0,
                "8001|8[024]9",
              ],
              DZ: [
                "213",
                "00",
                "(?:[1-4]|[5-79]\\d|80)\\d{7}",
                [8, 9],
                [
                  [
                    "(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
                    "$1 $2 $3 $4",
                    ["[1-4]"],
                    "0$1",
                  ],
                  [
                    "(\\d{2})(\\d{3})(\\d{2})(\\d{2})",
                    "$1 $2 $3 $4",
                    ["9"],
                    "0$1",
                  ],
                  [
                    "(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
                    "$1 $2 $3 $4",
                    ["[5-8]"],
                    "0$1",
                  ],
                ],
                "0",
              ],
              EC: [
                "593",
                "00",
                "1\\d{9,10}|(?:[2-7]|9\\d)\\d{7}",
                [8, 9, 10, 11],
                [
                  [
                    "(\\d)(\\d{3})(\\d{4})",
                    "$1 $2-$3",
                    ["[2-7]"],
                    "(0$1)",
                    0,
                    "$1-$2-$3",
                  ],
                  ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["9"], "0$1"],
                  ["(\\d{4})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["1"]],
                ],
                "0",
              ],
              EE: [
                "372",
                "00",
                "8\\d{9}|[4578]\\d{7}|(?:[3-8]\\d|90)\\d{5}",
                [7, 8, 10],
                [
                  [
                    "(\\d{3})(\\d{4})",
                    "$1 $2",
                    [
                      "[369]|4[3-8]|5(?:[0-2]|5[0-478]|6[45])|7[1-9]|88",
                      "[369]|4[3-8]|5(?:[02]|1(?:[0-8]|95)|5[0-478]|6(?:4[0-4]|5[1-589]))|7[1-9]|88",
                    ],
                  ],
                  [
                    "(\\d{4})(\\d{3,4})",
                    "$1 $2",
                    ["[45]|8(?:00|[1-49])", "[45]|8(?:00[1-9]|[1-49])"],
                  ],
                  ["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["7"]],
                  ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]],
                ],
              ],
              EG: [
                "20",
                "00",
                "[189]\\d{8,9}|[24-6]\\d{8}|[135]\\d{7}",
                [8, 9, 10],
                [
                  ["(\\d)(\\d{7,8})", "$1 $2", ["[23]"], "0$1"],
                  [
                    "(\\d{2})(\\d{6,7})",
                    "$1 $2",
                    ["1[35]|[4-6]|8[2468]|9[235-7]"],
                    "0$1",
                  ],
                  ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[189]"], "0$1"],
                ],
                "0",
              ],
              EH: [
                "212",
                "00",
                "[5-8]\\d{8}",
                [9],
                0,
                "0",
                0,
                0,
                0,
                0,
                "528[89]",
              ],
              ER: [
                "291",
                "00",
                "[178]\\d{6}",
                [7],
                [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[178]"], "0$1"]],
                "0",
              ],
              ES: [
                "34",
                "00",
                "[5-9]\\d{8}",
                [9],
                [
                  ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[89]00"]],
                  [
                    "(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
                    "$1 $2 $3 $4",
                    ["[5-9]"],
                  ],
                ],
              ],
              ET: [
                "251",
                "00",
                "(?:11|[2-579]\\d)\\d{7}",
                [9],
                [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-579]"], "0$1"]],
                "0",
              ],
              FI: [
                "358",
                "00|99(?:[01469]|5(?:[14]1|3[23]|5[59]|77|88|9[09]))",
                "[1-35689]\\d{4}|7\\d{10,11}|(?:[124-7]\\d|3[0-46-9])\\d{8}|[1-9]\\d{5,8}",
                [5, 6, 7, 8, 9, 10, 11, 12],
                [
                  [
                    "(\\d)(\\d{4,9})",
                    "$1 $2",
                    ["[2568][1-8]|3(?:0[1-9]|[1-9])|9"],
                    "0$1",
                  ],
                  [
                    "(\\d{3})(\\d{3,7})",
                    "$1 $2",
                    ["[12]00|[368]|70[07-9]"],
                    "0$1",
                  ],
                  ["(\\d{2})(\\d{4,8})", "$1 $2", ["[1245]|7[135]"], "0$1"],
                  ["(\\d{2})(\\d{6,10})", "$1 $2", ["7"], "0$1"],
                ],
                "0",
                0,
                0,
                0,
                0,
                "1[03-79]|[2-9]",
                0,
                "00",
              ],
              FJ: [
                "679",
                "0(?:0|52)",
                "45\\d{5}|(?:0800\\d|[235-9])\\d{6}",
                [7, 11],
                [
                  ["(\\d{3})(\\d{4})", "$1 $2", ["[235-9]|45"]],
                  ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["0"]],
                ],
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                "00",
              ],
              FK: ["500", "00", "[2-7]\\d{4}", [5]],
              FM: [
                "691",
                "00",
                "(?:[39]\\d\\d|820)\\d{4}",
                [7],
                [["(\\d{3})(\\d{4})", "$1 $2", ["[389]"]]],
              ],
              FO: [
                "298",
                "00",
                "[2-9]\\d{5}",
                [6],
                [["(\\d{6})", "$1", ["[2-9]"]]],
                0,
                0,
                "(10(?:01|[12]0|88))",
              ],
              FR: [
                "33",
                "00",
                "[1-9]\\d{8}",
                [9],
                [
                  [
                    "(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
                    "$1 $2 $3 $4",
                    ["8"],
                    "0 $1",
                  ],
                  [
                    "(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
                    "$1 $2 $3 $4 $5",
                    ["[1-79]"],
                    "0$1",
                  ],
                ],
                "0",
              ],
              GA: [
                "241",
                "00",
                "(?:[067]\\d|11)\\d{6}|[2-7]\\d{6}",
                [7, 8],
                [
                  [
                    "(\\d)(\\d{2})(\\d{2})(\\d{2})",
                    "$1 $2 $3 $4",
                    ["[2-7]"],
                    "0$1",
                  ],
                  ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["0"]],
                  [
                    "(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
                    "$1 $2 $3 $4",
                    ["11|[67]"],
                    "0$1",
                  ],
                ],
                0,
                0,
                "0(11\\d{6}|60\\d{6}|61\\d{6}|6[256]\\d{6}|7[467]\\d{6})",
                "$1",
              ],
              GB: [
                "44",
                "00",
                "[1-357-9]\\d{9}|[18]\\d{8}|8\\d{6}",
                [7, 9, 10],
                [
                  [
                    "(\\d{3})(\\d{4})",
                    "$1 $2",
                    ["800", "8001", "80011", "800111", "8001111"],
                    "0$1",
                  ],
                  [
                    "(\\d{3})(\\d{2})(\\d{2})",
                    "$1 $2 $3",
                    ["845", "8454", "84546", "845464"],
                    "0$1",
                  ],
                  ["(\\d{3})(\\d{6})", "$1 $2", ["800"], "0$1"],
                  [
                    "(\\d{5})(\\d{4,5})",
                    "$1 $2",
                    [
                      "1(?:38|5[23]|69|76|94)",
                      "1(?:(?:38|69)7|5(?:24|39)|768|946)",
                      "1(?:3873|5(?:242|39[4-6])|(?:697|768)[347]|9467)",
                    ],
                    "0$1",
                  ],
                  [
                    "(\\d{4})(\\d{5,6})",
                    "$1 $2",
                    ["1(?:[2-69][02-9]|[78])"],
                    "0$1",
                  ],
                  [
                    "(\\d{2})(\\d{4})(\\d{4})",
                    "$1 $2 $3",
                    ["[25]|7(?:0|6[02-9])", "[25]|7(?:0|6(?:[03-9]|2[356]))"],
                    "0$1",
                  ],
                  ["(\\d{4})(\\d{6})", "$1 $2", ["7"], "0$1"],
                  ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1389]"], "0$1"],
                ],
                "0",
                0,
                0,
                0,
                0,
                0,
                [
                  [
                    "(?:1(?:1(?:3(?:[0-58]\\d\\d|73[0235])|4(?:[0-5]\\d\\d|69[7-9]|70[01359])|(?:5[0-26-9]|[78][0-49])\\d\\d|6(?:[0-4]\\d\\d|50[0-79]))|2(?:(?:0[024-9]|2[3-9]|3[3-79]|4[1-689]|[58][02-9]|6[0-47-9]|7[013-9]|9\\d)\\d\\d|1(?:[0-7]\\d\\d|8(?:[02]\\d|1[0-26-9])))|(?:3(?:0\\d|1[0-8]|[25][02-9]|3[02-579]|[468][0-46-9]|7[1-35-79]|9[2-578])|4(?:0[03-9]|[137]\\d|[28][02-57-9]|4[02-69]|5[0-8]|[69][0-79])|5(?:0[1-35-9]|[16]\\d|2[024-9]|3[015689]|4[02-9]|5[03-9]|7[0-35-9]|8[0-468]|9[0-57-9])|6(?:0[034689]|1\\d|2[0-35689]|[38][013-9]|4[1-467]|5[0-69]|6[13-9]|7[0-8]|9[0-24578])|7(?:0[0246-9]|2\\d|3[0236-8]|4[03-9]|5[0-46-9]|6[013-9]|7[0-35-9]|8[024-9]|9[02-9])|8(?:0[35-9]|2[1-57-9]|3[02-578]|4[0-578]|5[124-9]|6[2-69]|7\\d|8[02-9]|9[02569])|9(?:0[02-589]|[18]\\d|2[02-689]|3[1-57-9]|4[2-9]|5[0-579]|6[2-47-9]|7[0-24578]|9[2-57]))\\d\\d)|2(?:0[013478]|3[0189]|4[017]|8[0-46-9]|9[0-2])\\d{3})\\d{4}|1(?:2(?:0(?:46[1-4]|87[2-9])|545[1-79]|76(?:2\\d|3[1-8]|6[1-6])|9(?:7(?:2[0-4]|3[2-5])|8(?:2[2-8]|7[0-47-9]|8[3-5])))|3(?:6(?:38[2-5]|47[23])|8(?:47[04-9]|64[0157-9]))|4(?:044[1-7]|20(?:2[23]|8\\d)|6(?:0(?:30|5[2-57]|6[1-8]|7[2-8])|140)|8(?:052|87[1-3]))|5(?:2(?:4(?:3[2-79]|6\\d)|76\\d)|6(?:26[06-9]|686))|6(?:06(?:4\\d|7[4-79])|295[5-7]|35[34]\\d|47(?:24|61)|59(?:5[08]|6[67]|74)|9(?:55[0-4]|77[23]))|7(?:26(?:6[13-9]|7[0-7])|(?:442|688)\\d|50(?:2[0-3]|[3-68]2|76))|8(?:27[56]\\d|37(?:5[2-5]|8[239])|843[2-58])|9(?:0(?:0(?:6[1-8]|85)|52\\d)|3583|4(?:66[1-8]|9(?:2[01]|81))|63(?:23|3[1-4])|9561))\\d{3}",
                    [9, 10],
                  ],
                  [
                    "7(?:457[0-57-9]|700[01]|911[028])\\d{5}|7(?:[1-3]\\d\\d|4(?:[0-46-9]\\d|5[0-689])|5(?:0[0-8]|[13-9]\\d|2[0-35-9])|7(?:0[1-9]|[1-7]\\d|8[02-9]|9[0-689])|8(?:[014-9]\\d|[23][0-8])|9(?:[024-9]\\d|1[02-9]|3[0-689]))\\d{6}",
                    [10],
                  ],
                  ["80[08]\\d{7}|800\\d{6}|8001111"],
                  [
                    "(?:8(?:4[2-5]|7[0-3])|9(?:[01]\\d|8[2-49]))\\d{7}|845464\\d",
                    [7, 10],
                  ],
                  ["70\\d{8}", [10]],
                  0,
                  ["(?:3[0347]|55)\\d{8}", [10]],
                  [
                    "76(?:464|652)\\d{5}|76(?:0[0-2]|2[356]|34|4[01347]|5[49]|6[0-369]|77|8[14]|9[139])\\d{6}",
                    [10],
                  ],
                  ["56\\d{8}", [10]],
                ],
                0,
                " x",
              ],
              GD: [
                "1",
                "011",
                "(?:473|[58]\\d\\d|900)\\d{7}",
                [10],
                0,
                "1",
                0,
                "1|([2-9]\\d{6})$",
                "473$1",
                0,
                "473",
              ],
              GE: [
                "995",
                "00",
                "(?:[3-57]\\d\\d|800)\\d{6}",
                [9],
                [
                  ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["70"], "0$1"],
                  [
                    "(\\d{2})(\\d{3})(\\d{2})(\\d{2})",
                    "$1 $2 $3 $4",
                    ["32"],
                    "0$1",
                  ],
                  ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[57]"]],
                  [
                    "(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
                    "$1 $2 $3 $4",
                    ["[348]"],
                    "0$1",
                  ],
                ],
                "0",
              ],
              GF: [
                "594",
                "00",
                "(?:[56]94|80\\d|976)\\d{6}",
                [9],
                [
                  [
                    "(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
                    "$1 $2 $3 $4",
                    ["[569]"],
                    "0$1",
                  ],
                  [
                    "(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
                    "$1 $2 $3 $4",
                    ["8"],
                    "0$1",
                  ],
                ],
                "0",
              ],
              GG: [
                "44",
                "00",
                "(?:1481|[357-9]\\d{3})\\d{6}|8\\d{6}(?:\\d{2})?",
                [7, 9, 10],
                0,
                "0",
                0,
                "0|([25-9]\\d{5})$",
                "1481$1",
                0,
                0,
                [
                  ["1481[25-9]\\d{5}", [10]],
                  ["7(?:(?:781|839)\\d|911[17])\\d{5}", [10]],
                  ["80[08]\\d{7}|800\\d{6}|8001111"],
                  [
                    "(?:8(?:4[2-5]|7[0-3])|9(?:[01]\\d|8[0-3]))\\d{7}|845464\\d",
                    [7, 10],
                  ],
                  ["70\\d{8}", [10]],
                  0,
                  ["(?:3[0347]|55)\\d{8}", [10]],
                  [
                    "76(?:464|652)\\d{5}|76(?:0[0-2]|2[356]|34|4[01347]|5[49]|6[0-369]|77|8[14]|9[139])\\d{6}",
                    [10],
                  ],
                  ["56\\d{8}", [10]],
                ],
              ],
              GH: [
                "233",
                "00",
                "(?:[235]\\d{3}|800)\\d{5}",
                [8, 9],
                [
                  ["(\\d{3})(\\d{5})", "$1 $2", ["8"], "0$1"],
                  ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[235]"], "0$1"],
                ],
                "0",
              ],
              GI: [
                "350",
                "00",
                "(?:[25]\\d\\d|606)\\d{5}",
                [8],
                [["(\\d{3})(\\d{5})", "$1 $2", ["2"]]],
              ],
              GL: [
                "299",
                "00",
                "(?:19|[2-689]\\d|70)\\d{4}",
                [6],
                [["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["19|[2-9]"]]],
              ],
              GM: [
                "220",
                "00",
                "[2-9]\\d{6}",
                [7],
                [["(\\d{3})(\\d{4})", "$1 $2", ["[2-9]"]]],
              ],
              GN: [
                "224",
                "00",
                "722\\d{6}|(?:3|6\\d)\\d{7}",
                [8, 9],
                [
                  ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["3"]],
                  ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[67]"]],
                ],
              ],
              GP: [
                "590",
                "00",
                "(?:590|(?:69|80)\\d|976)\\d{6}",
                [9],
                [
                  [
                    "(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
                    "$1 $2 $3 $4",
                    ["[569]"],
                    "0$1",
                  ],
                  [
                    "(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
                    "$1 $2 $3 $4",
                    ["8"],
                    "0$1",
                  ],
                ],
                "0",
                0,
                0,
                0,
                0,
                0,
                [
                  [
                    "590(?:0[1-68]|[14][0-24-9]|2[0-68]|3[1289]|5[3-579]|6[0-289]|7[08]|8[0-689]|9\\d)\\d{4}",
                  ],
                  ["69(?:0\\d\\d|1(?:2[2-9]|3[0-5]))\\d{4}"],
                  ["80[0-5]\\d{6}"],
                  0,
                  0,
                  0,
                  0,
                  0,
                  ["976[01]\\d{5}"],
                ],
              ],
              GQ: [
                "240",
                "00",
                "222\\d{6}|(?:3\\d|55|[89]0)\\d{7}",
                [9],
                [
                  ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[235]"]],
                  ["(\\d{3})(\\d{6})", "$1 $2", ["[89]"]],
                ],
              ],
              GR: [
                "30",
                "00",
                "5005000\\d{3}|8\\d{9,11}|(?:[269]\\d|70)\\d{8}",
                [10, 11, 12],
                [
                  ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["21|7"]],
                  [
                    "(\\d{4})(\\d{6})",
                    "$1 $2",
                    [
                      "2(?:2|3[2-57-9]|4[2-469]|5[2-59]|6[2-9]|7[2-69]|8[2-49])|5",
                    ],
                  ],
                  ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2689]"]],
                  ["(\\d{3})(\\d{3,4})(\\d{5})", "$1 $2 $3", ["8"]],
                ],
              ],
              GT: [
                "502",
                "00",
                "(?:1\\d{3}|[2-7])\\d{7}",
                [8, 11],
                [
                  ["(\\d{4})(\\d{4})", "$1 $2", ["[2-7]"]],
                  ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]],
                ],
              ],
              GU: [
                "1",
                "011",
                "(?:[58]\\d\\d|671|900)\\d{7}",
                [10],
                0,
                "1",
                0,
                "1|([3-9]\\d{6})$",
                "671$1",
                0,
                "671",
              ],
              GW: [
                "245",
                "00",
                "[49]\\d{8}|4\\d{6}",
                [7, 9],
                [
                  ["(\\d{3})(\\d{4})", "$1 $2", ["40"]],
                  ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[49]"]],
                ],
              ],
              GY: [
                "592",
                "001",
                "9008\\d{3}|(?:[2-467]\\d\\d|862)\\d{4}",
                [7],
                [["(\\d{3})(\\d{4})", "$1 $2", ["[2-46-9]"]]],
              ],
              HK: [
                "852",
                "00(?:30|5[09]|[126-9]?)",
                "8[0-46-9]\\d{6,7}|9\\d{4,7}|(?:[2-7]|9\\d{3})\\d{7}",
                [5, 6, 7, 8, 9, 11],
                [
                  ["(\\d{3})(\\d{2,5})", "$1 $2", ["900", "9003"]],
                  [
                    "(\\d{4})(\\d{4})",
                    "$1 $2",
                    ["[2-7]|8[1-4]|9(?:0[1-9]|[1-8])"],
                  ],
                  ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]],
                  ["(\\d{3})(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["9"]],
                ],
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                "00",
              ],
              HN: [
                "504",
                "00",
                "8\\d{10}|[237-9]\\d{7}",
                [8, 11],
                [["(\\d{4})(\\d{4})", "$1-$2", ["[237-9]"]]],
              ],
              HR: [
                "385",
                "00",
                "(?:[24-69]\\d|3[0-79])\\d{7}|80\\d{5,7}|[1-79]\\d{7}|6\\d{5,6}",
                [6, 7, 8, 9],
                [
                  ["(\\d{2})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["6[01]"], "0$1"],
                  ["(\\d{3})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["8"], "0$1"],
                  ["(\\d)(\\d{4})(\\d{3})", "$1 $2 $3", ["1"], "0$1"],
                  ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[67]"], "0$1"],
                  ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["9"], "0$1"],
                  ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-5]"], "0$1"],
                  ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"], "0$1"],
                ],
                "0",
              ],
              HT: [
                "509",
                "00",
                "[2-489]\\d{7}",
                [8],
                [["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["[2-489]"]]],
              ],
              HU: [
                "36",
                "00",
                "[235-7]\\d{8}|[1-9]\\d{7}",
                [8, 9],
                [
                  ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "(06 $1)"],
                  [
                    "(\\d{2})(\\d{3})(\\d{3})",
                    "$1 $2 $3",
                    ["[27][2-9]|3[2-7]|4[24-9]|5[2-79]|6|8[2-57-9]|9[2-69]"],
                    "(06 $1)",
                  ],
                  [
                    "(\\d{2})(\\d{3})(\\d{3,4})",
                    "$1 $2 $3",
                    ["[2-9]"],
                    "06 $1",
                  ],
                ],
                "06",
              ],
              ID: [
                "62",
                "00[89]",
                "(?:(?:00[1-9]|8\\d)\\d{4}|[1-36])\\d{6}|00\\d{10}|[1-9]\\d{8,10}|[2-9]\\d{7}",
                [7, 8, 9, 10, 11, 12, 13],
                [
                  ["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["15"]],
                  ["(\\d{2})(\\d{5,9})", "$1 $2", ["2[124]|[36]1"], "(0$1)"],
                  ["(\\d{3})(\\d{5,7})", "$1 $2", ["800"], "0$1"],
                  ["(\\d{3})(\\d{5,8})", "$1 $2", ["[2-79]"], "(0$1)"],
                  [
                    "(\\d{3})(\\d{3,4})(\\d{3})",
                    "$1-$2-$3",
                    ["8[1-35-9]"],
                    "0$1",
                  ],
                  ["(\\d{3})(\\d{6,8})", "$1 $2", ["1"], "0$1"],
                  ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["804"], "0$1"],
                  [
                    "(\\d{3})(\\d)(\\d{3})(\\d{3})",
                    "$1 $2 $3 $4",
                    ["80"],
                    "0$1",
                  ],
                  ["(\\d{3})(\\d{4})(\\d{4,5})", "$1-$2-$3", ["8"], "0$1"],
                ],
                "0",
              ],
              IE: [
                "353",
                "00",
                "(?:1\\d|[2569])\\d{6,8}|4\\d{6,9}|7\\d{8}|8\\d{8,9}",
                [7, 8, 9, 10],
                [
                  [
                    "(\\d{2})(\\d{5})",
                    "$1 $2",
                    ["2[24-9]|47|58|6[237-9]|9[35-9]"],
                    "(0$1)",
                  ],
                  ["(\\d{3})(\\d{5})", "$1 $2", ["[45]0"], "(0$1)"],
                  ["(\\d)(\\d{3,4})(\\d{4})", "$1 $2 $3", ["1"], "(0$1)"],
                  [
                    "(\\d{2})(\\d{3})(\\d{3,4})",
                    "$1 $2 $3",
                    ["[2569]|4[1-69]|7[14]"],
                    "(0$1)",
                  ],
                  ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["70"], "0$1"],
                  ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["81"], "(0$1)"],
                  ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[78]"], "0$1"],
                  ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]],
                  ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["4"], "(0$1)"],
                  [
                    "(\\d{2})(\\d)(\\d{3})(\\d{4})",
                    "$1 $2 $3 $4",
                    ["8"],
                    "0$1",
                  ],
                ],
                "0",
              ],
              IL: [
                "972",
                "0(?:0|1[2-9])",
                "1\\d{6}(?:\\d{3,5})?|[57]\\d{8}|[1-489]\\d{7}",
                [7, 8, 9, 10, 11, 12],
                [
                  ["(\\d{4})(\\d{3})", "$1-$2", ["125"]],
                  ["(\\d{4})(\\d{2})(\\d{2})", "$1-$2-$3", ["121"]],
                  ["(\\d)(\\d{3})(\\d{4})", "$1-$2-$3", ["[2-489]"], "0$1"],
                  ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["[57]"], "0$1"],
                  ["(\\d{4})(\\d{3})(\\d{3})", "$1-$2-$3", ["12"]],
                  ["(\\d{4})(\\d{6})", "$1-$2", ["159"]],
                  ["(\\d)(\\d{3})(\\d{3})(\\d{3})", "$1-$2-$3-$4", ["1[7-9]"]],
                  ["(\\d{3})(\\d{1,2})(\\d{3})(\\d{4})", "$1-$2 $3-$4", ["15"]],
                ],
                "0",
              ],
              IM: [
                "44",
                "00",
                "1624\\d{6}|(?:[3578]\\d|90)\\d{8}",
                [10],
                0,
                "0",
                0,
                "0|([25-8]\\d{5})$",
                "1624$1",
                0,
                "74576|(?:16|7[56])24",
              ],
              IN: [
                "91",
                "00",
                "(?:000800|[2-9]\\d\\d)\\d{7}|1\\d{7,12}",
                [8, 9, 10, 11, 12, 13],
                [
                  [
                    "(\\d{8})",
                    "$1",
                    [
                      "5(?:0|2[23]|3[03]|[67]1|88)",
                      "5(?:0|2(?:21|3)|3(?:0|3[23])|616|717|888)",
                      "5(?:0|2(?:21|3)|3(?:0|3[23])|616|717|8888)",
                    ],
                    0,
                    1,
                  ],
                  ["(\\d{4})(\\d{4,5})", "$1 $2", ["180", "1800"], 0, 1],
                  ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["140"], 0, 1],
                  [
                    "(\\d{2})(\\d{4})(\\d{4})",
                    "$1 $2 $3",
                    [
                      "11|2[02]|33|4[04]|79[1-7]|80[2-46]",
                      "11|2[02]|33|4[04]|79(?:[1-6]|7[19])|80(?:[2-4]|6[0-589])",
                      "11|2[02]|33|4[04]|79(?:[124-6]|3(?:[02-9]|1[0-24-9])|7(?:1|9[1-6]))|80(?:[2-4]|6[0-589])",
                    ],
                    "0$1",
                    1,
                  ],
                  [
                    "(\\d{3})(\\d{3})(\\d{4})",
                    "$1 $2 $3",
                    [
                      "1(?:2[0-249]|3[0-25]|4[145]|[68]|7[1257])|2(?:1[257]|3[013]|4[01]|5[0137]|6[0158]|78|8[1568])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|5[12]|[78]1)|6(?:12|[2-4]1|5[17]|6[13]|80)|7(?:12|3[134]|4[47]|61|88)|8(?:16|2[014]|3[126]|6[136]|7[078]|8[34]|91)|(?:43|59|75)[15]|(?:1[59]|29|67|72)[14]",
                      "1(?:2[0-24]|3[0-25]|4[145]|[59][14]|6[1-9]|7[1257]|8[1-57-9])|2(?:1[257]|3[013]|4[01]|5[0137]|6[058]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|674|7(?:(?:2[14]|3[34]|5[15])[2-6]|61[346]|88[0-8])|8(?:70[2-6]|84[235-7]|91[3-7])|(?:1(?:29|60|8[06])|261|552|6(?:12|[2-47]1|5[17]|6[13]|80)|7(?:12|31|4[47])|8(?:16|2[014]|3[126]|6[136]|7[78]|83))[2-7]",
                      "1(?:2[0-24]|3[0-25]|4[145]|[59][14]|6[1-9]|7[1257]|8[1-57-9])|2(?:1[257]|3[013]|4[01]|5[0137]|6[058]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|6(?:12(?:[2-6]|7[0-8])|74[2-7])|7(?:(?:2[14]|5[15])[2-6]|3171|61[346]|88(?:[2-7]|82))|8(?:70[2-6]|84(?:[2356]|7[19])|91(?:[3-6]|7[19]))|73[134][2-6]|(?:74[47]|8(?:16|2[014]|3[126]|6[136]|7[78]|83))(?:[2-6]|7[19])|(?:1(?:29|60|8[06])|261|552|6(?:[2-4]1|5[17]|6[13]|7(?:1|4[0189])|80)|7(?:12|88[01]))[2-7]",
                    ],
                    "0$1",
                    1,
                  ],
                  [
                    "(\\d{4})(\\d{3})(\\d{3})",
                    "$1 $2 $3",
                    [
                      "1(?:[2-479]|5[0235-9])|[2-5]|6(?:1[1358]|2[2457-9]|3[2-5]|4[235-7]|5[2-689]|6[24578]|7[235689]|8[1-6])|7(?:1[013-9]|28|3[129]|4[1-35689]|5[29]|6[02-5]|70)|807",
                      "1(?:[2-479]|5[0235-9])|[2-5]|6(?:1[1358]|2(?:[2457]|84|95)|3(?:[2-4]|55)|4[235-7]|5[2-689]|6[24578]|7[235689]|8[1-6])|7(?:1(?:[013-8]|9[6-9])|28[6-8]|3(?:17|2[0-49]|9[2-57])|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4|5[0-367])|70[13-7])|807[19]",
                      "1(?:[2-479]|5(?:[0236-9]|5[013-9]))|[2-5]|6(?:2(?:84|95)|355|83)|73179|807(?:1|9[1-3])|(?:1552|6(?:1[1358]|2[2457]|3[2-4]|4[235-7]|5[2-689]|6[24578]|7[235689]|8[124-6])\\d|7(?:1(?:[013-8]\\d|9[6-9])|28[6-8]|3(?:2[0-49]|9[2-57])|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]\\d|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4\\d|5[0-367])|70[13-7]))[2-7]",
                    ],
                    "0$1",
                    1,
                  ],
                  ["(\\d{5})(\\d{5})", "$1 $2", ["[6-9]"], "0$1", 1],
                  [
                    "(\\d{4})(\\d{2,4})(\\d{4})",
                    "$1 $2 $3",
                    ["1(?:6|8[06])", "1(?:6|8[06]0)"],
                    0,
                    1,
                  ],
                  [
                    "(\\d{4})(\\d{3})(\\d{3})(\\d{3})",
                    "$1 $2 $3 $4",
                    ["18"],
                    0,
                    1,
                  ],
                ],
                "0",
              ],
              IO: [
                "246",
                "00",
                "3\\d{6}",
                [7],
                [["(\\d{3})(\\d{4})", "$1 $2", ["3"]]],
              ],
              IQ: [
                "964",
                "00",
                "(?:1|7\\d\\d)\\d{7}|[2-6]\\d{7,8}",
                [8, 9, 10],
                [
                  ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"],
                  ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-6]"], "0$1"],
                  ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "0$1"],
                ],
                "0",
              ],
              IR: [
                "98",
                "00",
                "[1-9]\\d{9}|(?:[1-8]\\d\\d|9)\\d{3,4}",
                [4, 5, 6, 7, 10],
                [
                  ["(\\d{4,5})", "$1", ["96"], "0$1"],
                  [
                    "(\\d{2})(\\d{4,5})",
                    "$1 $2",
                    [
                      "(?:1[137]|2[13-68]|3[1458]|4[145]|5[1468]|6[16]|7[1467]|8[13467])[12689]",
                    ],
                    "0$1",
                  ],
                  ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["9"], "0$1"],
                  ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["[1-8]"], "0$1"],
                ],
                "0",
              ],
              IS: [
                "354",
                "00|1(?:0(?:01|[12]0)|100)",
                "(?:38\\d|[4-9])\\d{6}",
                [7, 9],
                [
                  ["(\\d{3})(\\d{4})", "$1 $2", ["[4-9]"]],
                  ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["3"]],
                ],
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                "00",
              ],
              IT: [
                "39",
                "00",
                "0\\d{5,10}|1\\d{8,10}|3(?:[0-8]\\d{7,10}|9\\d{7,8})|(?:55|70)\\d{8}|8\\d{5}(?:\\d{2,4})?",
                [6, 7, 8, 9, 10, 11],
                [
                  ["(\\d{2})(\\d{4,6})", "$1 $2", ["0[26]"]],
                  [
                    "(\\d{3})(\\d{3,6})",
                    "$1 $2",
                    [
                      "0[13-57-9][0159]|8(?:03|4[17]|9[2-5])",
                      "0[13-57-9][0159]|8(?:03|4[17]|9(?:2|3[04]|[45][0-4]))",
                    ],
                  ],
                  [
                    "(\\d{4})(\\d{2,6})",
                    "$1 $2",
                    ["0(?:[13-579][2-46-8]|8[236-8])"],
                  ],
                  ["(\\d{4})(\\d{4})", "$1 $2", ["894"]],
                  ["(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["0[26]|5"]],
                  [
                    "(\\d{3})(\\d{3})(\\d{3,4})",
                    "$1 $2 $3",
                    ["1(?:44|[679])|[378]"],
                  ],
                  [
                    "(\\d{3})(\\d{3,4})(\\d{4})",
                    "$1 $2 $3",
                    ["0[13-57-9][0159]|14"],
                  ],
                  ["(\\d{2})(\\d{4})(\\d{5})", "$1 $2 $3", ["0[26]"]],
                  ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["0"]],
                  ["(\\d{3})(\\d{4})(\\d{4,5})", "$1 $2 $3", ["3"]],
                ],
                0,
                0,
                0,
                0,
                0,
                0,
                [
                  [
                    "0669[0-79]\\d{1,6}|0(?:1(?:[0159]\\d|[27][1-5]|31|4[1-4]|6[1356]|8[2-57])|2\\d\\d|3(?:[0159]\\d|2[1-4]|3[12]|[48][1-6]|6[2-59]|7[1-7])|4(?:[0159]\\d|[23][1-9]|4[245]|6[1-5]|7[1-4]|81)|5(?:[0159]\\d|2[1-5]|3[2-6]|4[1-79]|6[4-6]|7[1-578]|8[3-8])|6(?:[0-57-9]\\d|6[0-8])|7(?:[0159]\\d|2[12]|3[1-7]|4[2-46]|6[13569]|7[13-6]|8[1-59])|8(?:[0159]\\d|2[3-578]|3[1-356]|[6-8][1-5])|9(?:[0159]\\d|[238][1-5]|4[12]|6[1-8]|7[1-6]))\\d{2,7}",
                  ],
                  ["3[1-9]\\d{8}|3[2-9]\\d{7}", [9, 10]],
                  ["80(?:0\\d{3}|3)\\d{3}", [6, 9]],
                  [
                    "(?:0878\\d{3}|89(?:2\\d|3[04]|4(?:[0-4]|[5-9]\\d\\d)|5[0-4]))\\d\\d|(?:1(?:44|6[346])|89(?:38|5[5-9]|9))\\d{6}",
                    [6, 8, 9, 10],
                  ],
                  ["1(?:78\\d|99)\\d{6}", [9, 10]],
                  0,
                  0,
                  0,
                  ["55\\d{8}", [10]],
                  ["84(?:[08]\\d{3}|[17])\\d{3}", [6, 9]],
                ],
              ],
              JE: [
                "44",
                "00",
                "1534\\d{6}|(?:[3578]\\d|90)\\d{8}",
                [10],
                0,
                "0",
                0,
                "0|([0-24-8]\\d{5})$",
                "1534$1",
                0,
                0,
                [
                  ["1534[0-24-8]\\d{5}"],
                  ["7(?:(?:(?:50|82)9|937)\\d|7(?:00[378]|97[7-9]))\\d{5}"],
                  ["80(?:07(?:35|81)|8901)\\d{4}"],
                  [
                    "(?:8(?:4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|7(?:0002|1206))|90(?:066[59]|1810|71(?:07|55)))\\d{4}",
                  ],
                  ["701511\\d{4}"],
                  0,
                  [
                    "(?:3(?:0(?:07(?:35|81)|8901)|3\\d{4}|4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|7(?:0002|1206))|55\\d{4})\\d{4}",
                  ],
                  [
                    "76(?:464|652)\\d{5}|76(?:0[0-2]|2[356]|34|4[01347]|5[49]|6[0-369]|77|8[14]|9[139])\\d{6}",
                  ],
                  ["56\\d{8}"],
                ],
              ],
              JM: [
                "1",
                "011",
                "(?:[58]\\d\\d|658|900)\\d{7}",
                [10],
                0,
                "1",
                0,
                0,
                0,
                0,
                "658|876",
              ],
              JO: [
                "962",
                "00",
                "(?:(?:[2689]|7\\d)\\d|32|53)\\d{6}",
                [8, 9],
                [
                  ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[2356]|87"], "(0$1)"],
                  ["(\\d{3})(\\d{5,6})", "$1 $2", ["[89]"], "0$1"],
                  ["(\\d{2})(\\d{7})", "$1 $2", ["70"], "0$1"],
                  ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["7"], "0$1"],
                ],
                "0",
              ],
              JP: [
                "81",
                "010",
                "00[1-9]\\d{6,14}|[257-9]\\d{9}|(?:00|[1-9]\\d\\d)\\d{6}",
                [8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
                [
                  [
                    "(\\d{3})(\\d{3})(\\d{3})",
                    "$1-$2-$3",
                    ["(?:12|57|99)0"],
                    "0$1",
                  ],
                  [
                    "(\\d{4})(\\d)(\\d{4})",
                    "$1-$2-$3",
                    [
                      "1(?:26|3[79]|4[56]|5[4-68]|6[3-5])|499|5(?:76|97)|746|8(?:3[89]|47|51|63)|9(?:80|9[16])",
                      "1(?:267|3(?:7[247]|9[278])|466|5(?:47|58|64)|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:76|97)9|7468|8(?:3(?:8[7-9]|96)|477|51[2-9]|636)|9(?:802|9(?:1[23]|69))|1(?:45|58)[67]",
                      "1(?:267|3(?:7[247]|9[278])|466|5(?:47|58|64)|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:769|979[2-69])|7468|8(?:3(?:8[7-9]|96[2457-9])|477|51[2-9]|636[457-9])|9(?:802|9(?:1[23]|69))|1(?:45|58)[67]",
                    ],
                    "0$1",
                  ],
                  ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["60"], "0$1"],
                  [
                    "(\\d)(\\d{4})(\\d{4})",
                    "$1-$2-$3",
                    [
                      "[36]|4(?:2[09]|7[01])",
                      "[36]|4(?:2(?:0|9[02-69])|7(?:0[019]|1))",
                    ],
                    "0$1",
                  ],
                  [
                    "(\\d{2})(\\d{3})(\\d{4})",
                    "$1-$2-$3",
                    [
                      "1(?:1|5[45]|77|88|9[69])|2(?:2[1-37]|3[0-269]|4[59]|5|6[24]|7[1-358]|8[1369]|9[0-38])|4(?:[28][1-9]|3[0-57]|[45]|6[248]|7[2-579]|9[29])|5(?:2|3[045]|4[0-369]|5[29]|8[02389]|9[0-389])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9[2-6])|8(?:2[124589]|3[27-9]|49|51|6|7[0-468]|8[68]|9[019])|9(?:[23][1-9]|4[15]|5[138]|6[1-3]|7[156]|8[189]|9[1-489])",
                      "1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2(?:[127]|3[014-9])|3[0-269]|4[59]|5(?:[1-3]|5[0-69]|9[19])|62|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17))|4(?:2(?:[13-79]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|8[1-9])|5(?:2|3[045]|4[0-369]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9[0-2469])|49|51|6(?:[0-24]|36|5[0-3589]|72|9[01459])|7[0-468]|8[68])|9(?:[23][1-9]|4[15]|5[138]|6[1-3]|7[156]|8[189]|9(?:[1289]|3[34]|4[0178]))|(?:49|55|83)[29]|(?:264|837)[016-9]|2(?:57|93)[015-9]|(?:25[0468]|422|838)[01]|(?:47[59]|59[89]|8(?:6[68]|9))[019]",
                      "1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2[127]|3[0-269]|4[59]|5(?:[1-3]|5[0-69]|9(?:17|99))|6(?:2|4[016-9])|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17))|4(?:2(?:[13-79]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|9[29])|5(?:2|3[045]|4[0-369]|5[29]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9[0169])|3(?:[29]|7(?:[017-9]|6[6-8]))|49|51|6(?:[0-24]|36[23]|5(?:[0-389]|5[23])|6(?:[01]|9[178])|72|9[0145])|7[0-468]|8[68])|9(?:4[15]|5[138]|7[156]|8[189]|9(?:[1289]|3(?:31|4[357])|4[0178]))|(?:8294|96)[1-3]|2(?:57|93)[015-9]|(?:223|8699)[014-9]|(?:25[0468]|422|838)[01]|(?:48|8292|9[23])[1-9]|(?:47[59]|59[89]|8(?:68|9))[019]",
                      "1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2[127]|3[0-269]|4[59]|5(?:[1-3]|5[0-69]|7[015-9]|9(?:17|99))|6(?:2|4[016-9])|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17|3[015-9]))|4(?:2(?:[13-79]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|9[29])|5(?:2|3[045]|4[0-369]|5[29]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9(?:[019]|4[1-3]|6(?:[0-47-9]|5[01346-9])))|3(?:[29]|7(?:[017-9]|6[6-8]))|49|51|6(?:[0-24]|36[23]|5(?:[0-389]|5[23])|6(?:[01]|9[178])|72|9[0145])|7[0-468]|8[68])|9(?:4[15]|5[138]|6[1-3]|7[156]|8[189]|9(?:[1289]|3(?:31|4[357])|4[0178]))|(?:223|8699)[014-9]|(?:25[0468]|422|838)[01]|(?:48|829(?:2|66)|9[23])[1-9]|(?:47[59]|59[89]|8(?:68|9))[019]",
                    ],
                    "0$1",
                  ],
                  [
                    "(\\d{3})(\\d{2})(\\d{4})",
                    "$1-$2-$3",
                    ["[14]|[289][2-9]|5[3-9]|7[2-4679]"],
                    "0$1",
                  ],
                  ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["800"], "0$1"],
                  ["(\\d{2})(\\d{4})(\\d{4})", "$1-$2-$3", ["[257-9]"], "0$1"],
                ],
                "0",
              ],
              KE: [
                "254",
                "000",
                "(?:[17]\\d\\d|900)\\d{6}|(?:2|80)0\\d{6,7}|[4-6]\\d{6,8}",
                [7, 8, 9, 10],
                [
                  ["(\\d{2})(\\d{5,7})", "$1 $2", ["[24-6]"], "0$1"],
                  ["(\\d{3})(\\d{6})", "$1 $2", ["[17]"], "0$1"],
                  ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[89]"], "0$1"],
                ],
                "0",
              ],
              KG: [
                "996",
                "00",
                "8\\d{9}|(?:[235-8]\\d|99)\\d{7}",
                [9, 10],
                [
                  ["(\\d{4})(\\d{5})", "$1 $2", ["3(?:1[346]|[24-79])"], "0$1"],
                  [
                    "(\\d{3})(\\d{3})(\\d{3})",
                    "$1 $2 $3",
                    ["[235-79]|88"],
                    "0$1",
                  ],
                  [
                    "(\\d{3})(\\d{3})(\\d)(\\d{2,3})",
                    "$1 $2 $3 $4",
                    ["8"],
                    "0$1",
                  ],
                ],
                "0",
              ],
              KH: [
                "855",
                "00[14-9]",
                "1\\d{9}|[1-9]\\d{7,8}",
                [8, 9, 10],
                [
                  ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-9]"], "0$1"],
                  ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]],
                ],
                "0",
              ],
              KI: [
                "686",
                "00",
                "(?:[37]\\d|6[0-79])\\d{6}|(?:[2-48]\\d|50)\\d{3}",
                [5, 8],
                0,
                "0",
              ],
              KM: [
                "269",
                "00",
                "[3478]\\d{6}",
                [7],
                [["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["[3478]"]]],
              ],
              KN: [
                "1",
                "011",
                "(?:[58]\\d\\d|900)\\d{7}",
                [10],
                0,
                "1",
                0,
                "1|([2-7]\\d{6})$",
                "869$1",
                0,
                "869",
              ],
              KP: [
                "850",
                "00|99",
                "85\\d{6}|(?:19\\d|[2-7])\\d{7}",
                [8, 10],
                [
                  ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"], "0$1"],
                  ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-7]"], "0$1"],
                  ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"],
                ],
                "0",
              ],
              KR: [
                "82",
                "00(?:[125689]|3(?:[46]5|91)|7(?:00|27|3|55|6[126]))",
                "00[1-9]\\d{8,11}|(?:[12]|5\\d{3})\\d{7}|[13-6]\\d{9}|(?:[1-6]\\d|80)\\d{7}|[3-6]\\d{4,5}|(?:00|7)0\\d{8}",
                [5, 6, 8, 9, 10, 11, 12, 13, 14],
                [
                  [
                    "(\\d{2})(\\d{3,4})",
                    "$1-$2",
                    ["(?:3[1-3]|[46][1-4]|5[1-5])1"],
                    "0$1",
                  ],
                  ["(\\d{4})(\\d{4})", "$1-$2", ["1"]],
                  ["(\\d)(\\d{3,4})(\\d{4})", "$1-$2-$3", ["2"], "0$1"],
                  ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["60|8"], "0$1"],
                  [
                    "(\\d{2})(\\d{3,4})(\\d{4})",
                    "$1-$2-$3",
                    ["[1346]|5[1-5]"],
                    "0$1",
                  ],
                  ["(\\d{2})(\\d{4})(\\d{4})", "$1-$2-$3", ["[57]"], "0$1"],
                  ["(\\d{2})(\\d{5})(\\d{4})", "$1-$2-$3", ["5"], "0$1"],
                ],
                "0",
                0,
                "0(8(?:[1-46-8]|5\\d\\d))?",
              ],
              KW: [
                "965",
                "00",
                "18\\d{5}|(?:[2569]\\d|41)\\d{6}",
                [7, 8],
                [
                  [
                    "(\\d{4})(\\d{3,4})",
                    "$1 $2",
                    ["[169]|2(?:[235]|4[1-35-9])|52"],
                  ],
                  ["(\\d{3})(\\d{5})", "$1 $2", ["[245]"]],
                ],
              ],
              KY: [
                "1",
                "011",
                "(?:345|[58]\\d\\d|900)\\d{7}",
                [10],
                0,
                "1",
                0,
                "1|([2-9]\\d{6})$",
                "345$1",
                0,
                "345",
              ],
              KZ: [
                "7",
                "810",
                "(?:33622|8\\d{8})\\d{5}|[78]\\d{9}",
                [10, 14],
                0,
                "8",
                0,
                0,
                0,
                0,
                "33|7",
                0,
                "8~10",
              ],
              LA: [
                "856",
                "00",
                "[23]\\d{9}|3\\d{8}|(?:[235-8]\\d|41)\\d{6}",
                [8, 9, 10],
                [
                  [
                    "(\\d{2})(\\d{3})(\\d{3})",
                    "$1 $2 $3",
                    ["2[13]|3[14]|[4-8]"],
                    "0$1",
                  ],
                  [
                    "(\\d{2})(\\d{2})(\\d{2})(\\d{3})",
                    "$1 $2 $3 $4",
                    ["30[013-9]"],
                    "0$1",
                  ],
                  [
                    "(\\d{2})(\\d{2})(\\d{3})(\\d{3})",
                    "$1 $2 $3 $4",
                    ["[23]"],
                    "0$1",
                  ],
                ],
                "0",
              ],
              LB: [
                "961",
                "00",
                "[27-9]\\d{7}|[13-9]\\d{6}",
                [7, 8],
                [
                  [
                    "(\\d)(\\d{3})(\\d{3})",
                    "$1 $2 $3",
                    ["[13-69]|7(?:[2-57]|62|8[0-7]|9[04-9])|8[02-9]"],
                    "0$1",
                  ],
                  ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[27-9]"]],
                ],
                "0",
              ],
              LC: [
                "1",
                "011",
                "(?:[58]\\d\\d|758|900)\\d{7}",
                [10],
                0,
                "1",
                0,
                "1|([2-8]\\d{6})$",
                "758$1",
                0,
                "758",
              ],
              LI: [
                "423",
                "00",
                "[68]\\d{8}|(?:[2378]\\d|90)\\d{5}",
                [7, 9],
                [
                  [
                    "(\\d{3})(\\d{2})(\\d{2})",
                    "$1 $2 $3",
                    ["[2379]|8(?:0[09]|7)", "[2379]|8(?:0(?:02|9)|7)"],
                  ],
                  ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]],
                  ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["69"]],
                  ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6"]],
                ],
                "0",
                0,
                "0|(1001)",
              ],
              LK: [
                "94",
                "00",
                "[1-9]\\d{8}",
                [9],
                [
                  ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "0$1"],
                  ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[1-689]"], "0$1"],
                ],
                "0",
              ],
              LR: [
                "231",
                "00",
                "(?:2|33|5\\d|77|88)\\d{7}|[4-6]\\d{6}",
                [7, 8, 9],
                [
                  ["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[4-6]"], "0$1"],
                  ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"], "0$1"],
                  ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[3578]"], "0$1"],
                ],
                "0",
              ],
              LS: [
                "266",
                "00",
                "(?:[256]\\d\\d|800)\\d{5}",
                [8],
                [["(\\d{4})(\\d{4})", "$1 $2", ["[2568]"]]],
              ],
              LT: [
                "370",
                "00",
                "(?:[3469]\\d|52|[78]0)\\d{6}",
                [8],
                [
                  [
                    "(\\d)(\\d{3})(\\d{4})",
                    "$1 $2 $3",
                    ["52[0-7]"],
                    "(8-$1)",
                    1,
                  ],
                  [
                    "(\\d{3})(\\d{2})(\\d{3})",
                    "$1 $2 $3",
                    ["[7-9]"],
                    "8 $1",
                    1,
                  ],
                  [
                    "(\\d{2})(\\d{6})",
                    "$1 $2",
                    ["37|4(?:[15]|6[1-8])"],
                    "(8-$1)",
                    1,
                  ],
                  ["(\\d{3})(\\d{5})", "$1 $2", ["[3-6]"], "(8-$1)", 1],
                ],
                "8",
                0,
                "[08]",
              ],
              LU: [
                "352",
                "00",
                "35[013-9]\\d{4,8}|6\\d{8}|35\\d{2,4}|(?:[2457-9]\\d|3[0-46-9])\\d{2,9}",
                [4, 5, 6, 7, 8, 9, 10, 11],
                [
                  [
                    "(\\d{2})(\\d{3})",
                    "$1 $2",
                    [
                      "2(?:0[2-689]|[2-9])|[3-57]|8(?:0[2-9]|[13-9])|9(?:0[89]|[2-579])",
                    ],
                  ],
                  [
                    "(\\d{2})(\\d{2})(\\d{2})",
                    "$1 $2 $3",
                    [
                      "2(?:0[2-689]|[2-9])|[3-57]|8(?:0[2-9]|[13-9])|9(?:0[89]|[2-579])",
                    ],
                  ],
                  ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["20[2-689]"]],
                  [
                    "(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})",
                    "$1 $2 $3 $4",
                    ["2(?:[0367]|4[3-8])"],
                  ],
                  ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["80[01]|90[015]"]],
                  ["(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["20"]],
                  ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6"]],
                  [
                    "(\\d{2})(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})",
                    "$1 $2 $3 $4 $5",
                    ["2(?:[0367]|4[3-8])"],
                  ],
                  [
                    "(\\d{2})(\\d{2})(\\d{2})(\\d{1,5})",
                    "$1 $2 $3 $4",
                    ["[3-57]|8[13-9]|9(?:0[89]|[2-579])|(?:2|80)[2-9]"],
                  ],
                ],
                0,
                0,
                "(15(?:0[06]|1[12]|[35]5|4[04]|6[26]|77|88|99)\\d)",
              ],
              LV: [
                "371",
                "00",
                "(?:[268]\\d|90)\\d{6}",
                [8],
                [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[269]|8[01]"]]],
              ],
              LY: [
                "218",
                "00",
                "[2-9]\\d{8}",
                [9],
                [["(\\d{2})(\\d{7})", "$1-$2", ["[2-9]"], "0$1"]],
                "0",
              ],
              MA: [
                "212",
                "00",
                "[5-8]\\d{8}",
                [9],
                [
                  [
                    "(\\d{5})(\\d{4})",
                    "$1-$2",
                    ["5(?:29|38)", "5(?:29[89]|389)", "5(?:29[89]|389)0"],
                    "0$1",
                  ],
                  [
                    "(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
                    "$1 $2 $3 $4",
                    ["5[45]"],
                    "0$1",
                  ],
                  [
                    "(\\d{4})(\\d{5})",
                    "$1-$2",
                    [
                      "5(?:2[2-489]|3[5-9]|9)|892",
                      "5(?:2(?:[2-49]|8[235-9])|3[5-9]|9)|892",
                    ],
                    "0$1",
                  ],
                  ["(\\d{2})(\\d{7})", "$1-$2", ["8"], "0$1"],
                  ["(\\d{3})(\\d{6})", "$1-$2", ["[5-7]"], "0$1"],
                ],
                "0",
                0,
                0,
                0,
                0,
                0,
                [
                  [
                    "5(?:29(?:[189][05]|2[29]|3[01])|389[05])\\d{4}|5(?:2(?:[0-25-7]\\d|3[1-578]|4[02-46-8]|8[0235-7]|90)|3(?:[0-47]\\d|5[02-9]|6[02-8]|8[08]|9[3-9])|(?:4[067]|5[03])\\d)\\d{5}",
                  ],
                  [
                    "(?:6(?:[0-79]\\d|8[0-247-9])|7(?:[017]\\d|2[0-2]|6[0-8]))\\d{6}",
                  ],
                  ["80\\d{7}"],
                  ["89\\d{7}"],
                  0,
                  0,
                  0,
                  0,
                  ["592(?:4[0-2]|93)\\d{4}"],
                ],
              ],
              MC: [
                "377",
                "00",
                "(?:[3489]|6\\d)\\d{7}",
                [8, 9],
                [
                  ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["4"], "0$1"],
                  [
                    "(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
                    "$1 $2 $3 $4",
                    ["[389]"],
                  ],
                  [
                    "(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
                    "$1 $2 $3 $4 $5",
                    ["6"],
                    "0$1",
                  ],
                ],
                "0",
              ],
              MD: [
                "373",
                "00",
                "(?:[235-7]\\d|[89]0)\\d{6}",
                [8],
                [
                  ["(\\d{3})(\\d{5})", "$1 $2", ["[89]"], "0$1"],
                  ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["22|3"], "0$1"],
                  ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[25-7]"], "0$1"],
                ],
                "0",
              ],
              ME: [
                "382",
                "00",
                "(?:20|[3-79]\\d)\\d{6}|80\\d{6,7}",
                [8, 9],
                [["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-9]"], "0$1"]],
                "0",
              ],
              MF: [
                "590",
                "00",
                "(?:590|(?:69|80)\\d|976)\\d{6}",
                [9],
                0,
                "0",
                0,
                0,
                0,
                0,
                0,
                [
                  ["590(?:0[079]|[14]3|[27][79]|30|5[0-268]|87)\\d{4}"],
                  ["69(?:0\\d\\d|1(?:2[2-9]|3[0-5]))\\d{4}"],
                  ["80[0-5]\\d{6}"],
                  0,
                  0,
                  0,
                  0,
                  0,
                  ["976[01]\\d{5}"],
                ],
              ],
              MG: [
                "261",
                "00",
                "[23]\\d{8}",
                [9],
                [
                  [
                    "(\\d{2})(\\d{2})(\\d{3})(\\d{2})",
                    "$1 $2 $3 $4",
                    ["[23]"],
                    "0$1",
                  ],
                ],
                "0",
                0,
                "0|([24-9]\\d{6})$",
                "20$1",
              ],
              MH: [
                "692",
                "011",
                "329\\d{4}|(?:[256]\\d|45)\\d{5}",
                [7],
                [["(\\d{3})(\\d{4})", "$1-$2", ["[2-6]"]]],
                "1",
              ],
              MK: [
                "389",
                "00",
                "[2-578]\\d{7}",
                [8],
                [
                  [
                    "(\\d)(\\d{3})(\\d{4})",
                    "$1 $2 $3",
                    ["2|34[47]|4(?:[37]7|5[47]|64)"],
                    "0$1",
                  ],
                  ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[347]"], "0$1"],
                  [
                    "(\\d{3})(\\d)(\\d{2})(\\d{2})",
                    "$1 $2 $3 $4",
                    ["[58]"],
                    "0$1",
                  ],
                ],
                "0",
              ],
              ML: [
                "223",
                "00",
                "[24-9]\\d{7}",
                [8],
                [
                  [
                    "(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
                    "$1 $2 $3 $4",
                    ["[24-9]"],
                  ],
                ],
              ],
              MM: [
                "95",
                "00",
                "1\\d{5,7}|95\\d{6}|(?:[4-7]|9[0-46-9])\\d{6,8}|(?:2|8\\d)\\d{5,8}",
                [6, 7, 8, 9, 10],
                [
                  ["(\\d)(\\d{2})(\\d{3})", "$1 $2 $3", ["16|2"], "0$1"],
                  [
                    "(\\d{2})(\\d{2})(\\d{3})",
                    "$1 $2 $3",
                    [
                      "[45]|6(?:0[23]|[1-689]|7[235-7])|7(?:[0-4]|5[2-7])|8[1-6]",
                    ],
                    "0$1",
                  ],
                  ["(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[12]"], "0$1"],
                  [
                    "(\\d{2})(\\d{3})(\\d{3,4})",
                    "$1 $2 $3",
                    ["[4-7]|8[1-35]"],
                    "0$1",
                  ],
                  [
                    "(\\d)(\\d{3})(\\d{4,6})",
                    "$1 $2 $3",
                    ["9(?:2[0-4]|[35-9]|4[137-9])"],
                    "0$1",
                  ],
                  ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["2"], "0$1"],
                  ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"], "0$1"],
                  [
                    "(\\d)(\\d{3})(\\d{3})(\\d{3})",
                    "$1 $2 $3 $4",
                    ["92"],
                    "0$1",
                  ],
                  ["(\\d)(\\d{5})(\\d{4})", "$1 $2 $3", ["9"], "0$1"],
                ],
                "0",
              ],
              MN: [
                "976",
                "001",
                "[12]\\d{7,9}|[5-9]\\d{7}",
                [8, 9, 10],
                [
                  ["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["[12]1"], "0$1"],
                  ["(\\d{4})(\\d{4})", "$1 $2", ["[5-9]"]],
                  ["(\\d{3})(\\d{5,6})", "$1 $2", ["[12]2[1-3]"], "0$1"],
                  [
                    "(\\d{4})(\\d{5,6})",
                    "$1 $2",
                    [
                      "[12](?:27|3[2-8]|4[2-68]|5[1-4689])",
                      "[12](?:27|3[2-8]|4[2-68]|5[1-4689])[0-3]",
                    ],
                    "0$1",
                  ],
                  ["(\\d{5})(\\d{4,5})", "$1 $2", ["[12]"], "0$1"],
                ],
                "0",
              ],
              MO: [
                "853",
                "00",
                "0800\\d{3}|(?:28|[68]\\d)\\d{6}",
                [7, 8],
                [
                  ["(\\d{4})(\\d{3})", "$1 $2", ["0"]],
                  ["(\\d{4})(\\d{4})", "$1 $2", ["[268]"]],
                ],
              ],
              MP: [
                "1",
                "011",
                "[58]\\d{9}|(?:67|90)0\\d{7}",
                [10],
                0,
                "1",
                0,
                "1|([2-9]\\d{6})$",
                "670$1",
                0,
                "670",
              ],
              MQ: [
                "596",
                "00",
                "(?:69|80)\\d{7}|(?:59|97)6\\d{6}",
                [9],
                [
                  [
                    "(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
                    "$1 $2 $3 $4",
                    ["[569]"],
                    "0$1",
                  ],
                  [
                    "(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
                    "$1 $2 $3 $4",
                    ["8"],
                    "0$1",
                  ],
                ],
                "0",
              ],
              MR: [
                "222",
                "00",
                "(?:[2-4]\\d\\d|800)\\d{5}",
                [8],
                [
                  [
                    "(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
                    "$1 $2 $3 $4",
                    ["[2-48]"],
                  ],
                ],
              ],
              MS: [
                "1",
                "011",
                "(?:[58]\\d\\d|664|900)\\d{7}",
                [10],
                0,
                "1",
                0,
                "1|([34]\\d{6})$",
                "664$1",
                0,
                "664",
              ],
              MT: [
                "356",
                "00",
                "3550\\d{4}|(?:[2579]\\d\\d|800)\\d{5}",
                [8],
                [["(\\d{4})(\\d{4})", "$1 $2", ["[2357-9]"]]],
              ],
              MU: [
                "230",
                "0(?:0|[24-7]0|3[03])",
                "(?:5|8\\d\\d)\\d{7}|[2-468]\\d{6}",
                [7, 8, 10],
                [
                  ["(\\d{3})(\\d{4})", "$1 $2", ["[2-46]|8[013]"]],
                  ["(\\d{4})(\\d{4})", "$1 $2", ["5"]],
                  ["(\\d{5})(\\d{5})", "$1 $2", ["8"]],
                ],
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                "020",
              ],
              MV: [
                "960",
                "0(?:0|19)",
                "(?:800|9[0-57-9]\\d)\\d{7}|[34679]\\d{6}",
                [7, 10],
                [
                  ["(\\d{3})(\\d{4})", "$1-$2", ["[3467]|9[13-9]"]],
                  ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[89]"]],
                ],
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                "00",
              ],
              MW: [
                "265",
                "00",
                "(?:[129]\\d|31|77|88)\\d{7}|1\\d{6}",
                [7, 9],
                [
                  ["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["1[2-9]"], "0$1"],
                  ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"], "0$1"],
                  [
                    "(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
                    "$1 $2 $3 $4",
                    ["[137-9]"],
                    "0$1",
                  ],
                ],
                "0",
              ],
              MX: [
                "52",
                "0[09]",
                "1(?:(?:44|99)[1-9]|65[0-689])\\d{7}|(?:1(?:[017]\\d|[235][1-9]|4[0-35-9]|6[0-46-9]|8[1-79]|9[1-8])|[2-9]\\d)\\d{8}",
                [10, 11],
                [
                  [
                    "(\\d{2})(\\d{4})(\\d{4})",
                    "$1 $2 $3",
                    ["33|5[56]|81"],
                    0,
                    1,
                  ],
                  ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-9]"], 0, 1],
                  [
                    "(\\d)(\\d{2})(\\d{4})(\\d{4})",
                    "$2 $3 $4",
                    ["1(?:33|5[56]|81)"],
                    0,
                    1,
                  ],
                  ["(\\d)(\\d{3})(\\d{3})(\\d{4})", "$2 $3 $4", ["1"], 0, 1],
                ],
                "01",
                0,
                "0(?:[12]|4[45])|1",
                0,
                0,
                0,
                0,
                "00",
              ],
              MY: [
                "60",
                "00",
                "1\\d{8,9}|(?:3\\d|[4-9])\\d{7}",
                [8, 9, 10],
                [
                  ["(\\d)(\\d{3})(\\d{4})", "$1-$2 $3", ["[4-79]"], "0$1"],
                  [
                    "(\\d{2})(\\d{3})(\\d{3,4})",
                    "$1-$2 $3",
                    [
                      "1(?:[02469]|[378][1-9]|53)|8",
                      "1(?:[02469]|[37][1-9]|53|8(?:[1-46-9]|5[7-9]))|8",
                    ],
                    "0$1",
                  ],
                  ["(\\d)(\\d{4})(\\d{4})", "$1-$2 $3", ["3"], "0$1"],
                  [
                    "(\\d)(\\d{3})(\\d{2})(\\d{4})",
                    "$1-$2-$3-$4",
                    ["1(?:[367]|80)"],
                  ],
                  ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2 $3", ["15"], "0$1"],
                  ["(\\d{2})(\\d{4})(\\d{4})", "$1-$2 $3", ["1"], "0$1"],
                ],
                "0",
              ],
              MZ: [
                "258",
                "00",
                "(?:2|8\\d)\\d{7}",
                [8, 9],
                [
                  ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2|8[2-79]"]],
                  ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]],
                ],
              ],
              NA: [
                "264",
                "00",
                "[68]\\d{7,8}",
                [8, 9],
                [
                  ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["88"], "0$1"],
                  ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["6"], "0$1"],
                  ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["87"], "0$1"],
                  ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"], "0$1"],
                ],
                "0",
              ],
              NC: [
                "687",
                "00",
                "(?:050|[2-57-9]\\d\\d)\\d{3}",
                [6],
                [["(\\d{2})(\\d{2})(\\d{2})", "$1.$2.$3", ["[02-57-9]"]]],
              ],
              NE: [
                "227",
                "00",
                "[027-9]\\d{7}",
                [8],
                [
                  ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["08"]],
                  [
                    "(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
                    "$1 $2 $3 $4",
                    ["[089]|2[013]|7[04]"],
                  ],
                ],
              ],
              NF: [
                "672",
                "00",
                "[13]\\d{5}",
                [6],
                [
                  ["(\\d{2})(\\d{4})", "$1 $2", ["1[0-3]"]],
                  ["(\\d)(\\d{5})", "$1 $2", ["[13]"]],
                ],
                0,
                0,
                "([0-258]\\d{4})$",
                "3$1",
              ],
              NG: [
                "234",
                "009",
                "(?:[124-7]|9\\d{3})\\d{6}|[1-9]\\d{7}|[78]\\d{9,13}",
                [7, 8, 10, 11, 12, 13, 14],
                [
                  ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["78"], "0$1"],
                  [
                    "(\\d)(\\d{3})(\\d{3,4})",
                    "$1 $2 $3",
                    ["[12]|9(?:0[3-9]|[1-9])"],
                    "0$1",
                  ],
                  [
                    "(\\d{2})(\\d{3})(\\d{2,3})",
                    "$1 $2 $3",
                    ["[3-7]|8[2-9]"],
                    "0$1",
                  ],
                  ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[7-9]"], "0$1"],
                  ["(\\d{3})(\\d{4})(\\d{4,5})", "$1 $2 $3", ["[78]"], "0$1"],
                  ["(\\d{3})(\\d{5})(\\d{5,6})", "$1 $2 $3", ["[78]"], "0$1"],
                ],
                "0",
              ],
              NI: [
                "505",
                "00",
                "(?:1800|[25-8]\\d{3})\\d{4}",
                [8],
                [["(\\d{4})(\\d{4})", "$1 $2", ["[125-8]"]]],
              ],
              NL: [
                "31",
                "00",
                "(?:[124-7]\\d\\d|3(?:[02-9]\\d|1[0-8]))\\d{6}|8\\d{6,9}|9\\d{6,10}|1\\d{4,5}",
                [5, 6, 7, 8, 9, 10, 11],
                [
                  ["(\\d{3})(\\d{4,7})", "$1 $2", ["[89]0"], "0$1"],
                  ["(\\d{2})(\\d{7})", "$1 $2", ["66"], "0$1"],
                  ["(\\d)(\\d{8})", "$1 $2", ["6"], "0$1"],
                  [
                    "(\\d{3})(\\d{3})(\\d{3})",
                    "$1 $2 $3",
                    ["1[16-8]|2[259]|3[124]|4[17-9]|5[124679]"],
                    "0$1",
                  ],
                  [
                    "(\\d{2})(\\d{3})(\\d{4})",
                    "$1 $2 $3",
                    ["[1-578]|91"],
                    "0$1",
                  ],
                  ["(\\d{3})(\\d{3})(\\d{5})", "$1 $2 $3", ["9"], "0$1"],
                ],
                "0",
              ],
              NO: [
                "47",
                "00",
                "(?:0|[2-9]\\d{3})\\d{4}",
                [5, 8],
                [
                  ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[489]|59"]],
                  [
                    "(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
                    "$1 $2 $3 $4",
                    ["[235-7]"],
                  ],
                ],
                0,
                0,
                0,
                0,
                0,
                "[02-689]|7[0-8]",
              ],
              NP: [
                "977",
                "00",
                "(?:1\\d|9)\\d{9}|[1-9]\\d{7}",
                [8, 10, 11],
                [
                  ["(\\d)(\\d{7})", "$1-$2", ["1[2-6]"], "0$1"],
                  [
                    "(\\d{2})(\\d{6})",
                    "$1-$2",
                    ["1[01]|[2-8]|9(?:[1-59]|[67][2-6])"],
                    "0$1",
                  ],
                  ["(\\d{3})(\\d{7})", "$1-$2", ["9"]],
                ],
                "0",
              ],
              NR: [
                "674",
                "00",
                "(?:444|(?:55|8\\d)\\d|666)\\d{4}",
                [7],
                [["(\\d{3})(\\d{4})", "$1 $2", ["[4-68]"]]],
              ],
              NU: [
                "683",
                "00",
                "(?:[47]|888\\d)\\d{3}",
                [4, 7],
                [["(\\d{3})(\\d{4})", "$1 $2", ["8"]]],
              ],
              NZ: [
                "64",
                "0(?:0|161)",
                "[29]\\d{7,9}|50\\d{5}(?:\\d{2,3})?|6[0-35-9]\\d{6}|7\\d{7,8}|8\\d{4,9}|(?:11\\d|[34])\\d{7}",
                [5, 6, 7, 8, 9, 10],
                [
                  ["(\\d{2})(\\d{3,8})", "$1 $2", ["8[1-579]"], "0$1"],
                  [
                    "(\\d{3})(\\d{2})(\\d{2,3})",
                    "$1 $2 $3",
                    ["50[036-8]|[89]0", "50(?:[0367]|88)|[89]0"],
                    "0$1",
                  ],
                  [
                    "(\\d)(\\d{3})(\\d{4})",
                    "$1 $2 $3",
                    ["24|[346]|7[2-57-9]|9[2-9]"],
                    "0$1",
                  ],
                  [
                    "(\\d{3})(\\d{3})(\\d{3,4})",
                    "$1 $2 $3",
                    ["2(?:10|74)|[59]|80"],
                    "0$1",
                  ],
                  [
                    "(\\d{2})(\\d{3,4})(\\d{4})",
                    "$1 $2 $3",
                    ["1|2[028]"],
                    "0$1",
                  ],
                  [
                    "(\\d{2})(\\d{3})(\\d{3,5})",
                    "$1 $2 $3",
                    ["2(?:[169]|7[0-35-9])|7|86"],
                    "0$1",
                  ],
                ],
                "0",
                0,
                0,
                0,
                0,
                0,
                0,
                "00",
              ],
              OM: [
                "968",
                "00",
                "(?:1505|[279]\\d{3}|500)\\d{4}|800\\d{5,6}",
                [7, 8, 9],
                [
                  ["(\\d{3})(\\d{4,6})", "$1 $2", ["[58]"]],
                  ["(\\d{2})(\\d{6})", "$1 $2", ["2"]],
                  ["(\\d{4})(\\d{4})", "$1 $2", ["[179]"]],
                ],
              ],
              PA: [
                "507",
                "00",
                "(?:00800|8\\d{3})\\d{6}|[68]\\d{7}|[1-57-9]\\d{6}",
                [7, 8, 10, 11],
                [
                  ["(\\d{3})(\\d{4})", "$1-$2", ["[1-57-9]"]],
                  ["(\\d{4})(\\d{4})", "$1-$2", ["[68]"]],
                  ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"]],
                ],
              ],
              PE: [
                "51",
                "00|19(?:1[124]|77|90)00",
                "(?:[14-8]|9\\d)\\d{7}",
                [8, 9],
                [
                  ["(\\d{3})(\\d{5})", "$1 $2", ["80"], "(0$1)"],
                  ["(\\d)(\\d{7})", "$1 $2", ["1"], "(0$1)"],
                  ["(\\d{2})(\\d{6})", "$1 $2", ["[4-8]"], "(0$1)"],
                  ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"]],
                ],
                "0",
                0,
                0,
                0,
                0,
                0,
                0,
                "00",
                " Anexo ",
              ],
              PF: [
                "689",
                "00",
                "4\\d{5}(?:\\d{2})?|8\\d{7,8}",
                [6, 8, 9],
                [
                  ["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["44"]],
                  [
                    "(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
                    "$1 $2 $3 $4",
                    ["4|8[7-9]"],
                  ],
                  ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"]],
                ],
              ],
              PG: [
                "675",
                "00|140[1-3]",
                "(?:180|[78]\\d{3})\\d{4}|(?:[2-589]\\d|64)\\d{5}",
                [7, 8],
                [
                  ["(\\d{3})(\\d{4})", "$1 $2", ["18|[2-69]|85"]],
                  ["(\\d{4})(\\d{4})", "$1 $2", ["[78]"]],
                ],
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                "00",
              ],
              PH: [
                "63",
                "00",
                "(?:[2-7]|9\\d)\\d{8}|2\\d{5}|(?:1800|8)\\d{7,9}",
                [6, 8, 9, 10, 11, 12, 13],
                [
                  ["(\\d)(\\d{5})", "$1 $2", ["2"], "(0$1)"],
                  [
                    "(\\d{4})(\\d{4,6})",
                    "$1 $2",
                    [
                      "3(?:23|39|46)|4(?:2[3-6]|[35]9|4[26]|76)|544|88[245]|(?:52|64|86)2",
                      "3(?:230|397|461)|4(?:2(?:35|[46]4|51)|396|4(?:22|63)|59[347]|76[15])|5(?:221|446)|642[23]|8(?:622|8(?:[24]2|5[13]))",
                    ],
                    "(0$1)",
                  ],
                  [
                    "(\\d{5})(\\d{4})",
                    "$1 $2",
                    ["346|4(?:27|9[35])|883", "3469|4(?:279|9(?:30|56))|8834"],
                    "(0$1)",
                  ],
                  ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["2"], "(0$1)"],
                  [
                    "(\\d{2})(\\d{3})(\\d{4})",
                    "$1 $2 $3",
                    ["[3-7]|8[2-8]"],
                    "(0$1)",
                  ],
                  ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[89]"], "0$1"],
                  ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]],
                  ["(\\d{4})(\\d{1,2})(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["1"]],
                ],
                "0",
              ],
              PK: [
                "92",
                "00",
                "122\\d{6}|[24-8]\\d{10,11}|9(?:[013-9]\\d{8,10}|2(?:[01]\\d\\d|2(?:[06-8]\\d|1[01]))\\d{7})|(?:[2-8]\\d{3}|92(?:[0-7]\\d|8[1-9]))\\d{6}|[24-9]\\d{8}|[89]\\d{7}",
                [8, 9, 10, 11, 12],
                [
                  ["(\\d{3})(\\d{3})(\\d{2,7})", "$1 $2 $3", ["[89]0"], "0$1"],
                  ["(\\d{4})(\\d{5})", "$1 $2", ["1"]],
                  [
                    "(\\d{3})(\\d{6,7})",
                    "$1 $2",
                    [
                      "2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356])|9(?:2[2-8]|3[27-9]|4[2-6]|6[3569]|9[25-8])",
                      "9(?:2[3-8]|98)|(?:2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356])|9(?:22|3[27-9]|4[2-6]|6[3569]|9[25-7]))[2-9]",
                    ],
                    "(0$1)",
                  ],
                  [
                    "(\\d{2})(\\d{7,8})",
                    "$1 $2",
                    [
                      "(?:2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)[2-9]",
                    ],
                    "(0$1)",
                  ],
                  ["(\\d{5})(\\d{5})", "$1 $2", ["58"], "(0$1)"],
                  ["(\\d{3})(\\d{7})", "$1 $2", ["3"], "0$1"],
                  [
                    "(\\d{2})(\\d{3})(\\d{3})(\\d{3})",
                    "$1 $2 $3 $4",
                    ["2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91"],
                    "(0$1)",
                  ],
                  [
                    "(\\d{3})(\\d{3})(\\d{3})(\\d{3})",
                    "$1 $2 $3 $4",
                    ["[24-9]"],
                    "(0$1)",
                  ],
                ],
                "0",
              ],
              PL: [
                "48",
                "00",
                "6\\d{5}(?:\\d{2})?|8\\d{9}|[1-9]\\d{6}(?:\\d{2})?",
                [6, 7, 8, 9, 10],
                [
                  ["(\\d{5})", "$1", ["19"]],
                  ["(\\d{3})(\\d{3})", "$1 $2", ["11|64"]],
                  [
                    "(\\d{2})(\\d{2})(\\d{3})",
                    "$1 $2 $3",
                    [
                      "(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])1",
                      "(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])19",
                    ],
                  ],
                  ["(\\d{3})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["64"]],
                  [
                    "(\\d{3})(\\d{3})(\\d{3})",
                    "$1 $2 $3",
                    ["21|39|45|5[0137]|6[0469]|7[02389]|8(?:0[14]|8)"],
                  ],
                  [
                    "(\\d{2})(\\d{3})(\\d{2})(\\d{2})",
                    "$1 $2 $3 $4",
                    ["1[2-8]|[2-7]|8[1-79]|9[145]"],
                  ],
                  ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["8"]],
                ],
              ],
              PM: [
                "508",
                "00",
                "(?:[45]|80\\d\\d)\\d{5}",
                [6, 9],
                [
                  ["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["[45]"], "0$1"],
                  [
                    "(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
                    "$1 $2 $3 $4",
                    ["8"],
                    "0$1",
                  ],
                ],
                "0",
              ],
              PR: [
                "1",
                "011",
                "(?:[589]\\d\\d|787)\\d{7}",
                [10],
                0,
                "1",
                0,
                0,
                0,
                0,
                "787|939",
              ],
              PS: [
                "970",
                "00",
                "[2489]2\\d{6}|(?:1\\d|5)\\d{8}",
                [8, 9, 10],
                [
                  ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[2489]"], "0$1"],
                  ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["5"], "0$1"],
                  ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]],
                ],
                "0",
              ],
              PT: [
                "351",
                "00",
                "1693\\d{5}|(?:[26-9]\\d|30)\\d{7}",
                [9],
                [
                  ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["2[12]"]],
                  ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["16|[236-9]"]],
                ],
              ],
              PW: [
                "680",
                "01[12]",
                "(?:[24-8]\\d\\d|345|900)\\d{4}",
                [7],
                [["(\\d{3})(\\d{4})", "$1 $2", ["[2-9]"]]],
              ],
              PY: [
                "595",
                "00",
                "59\\d{4,6}|9\\d{5,10}|(?:[2-46-8]\\d|5[0-8])\\d{4,7}",
                [6, 7, 8, 9, 10, 11],
                [
                  ["(\\d{3})(\\d{3,6})", "$1 $2", ["[2-9]0"], "0$1"],
                  [
                    "(\\d{2})(\\d{5})",
                    "$1 $2",
                    ["[26]1|3[289]|4[1246-8]|7[1-3]|8[1-36]"],
                    "(0$1)",
                  ],
                  [
                    "(\\d{3})(\\d{4,5})",
                    "$1 $2",
                    ["2[279]|3[13-5]|4[359]|5|6(?:[34]|7[1-46-8])|7[46-8]|85"],
                    "(0$1)",
                  ],
                  [
                    "(\\d{2})(\\d{3})(\\d{3,4})",
                    "$1 $2 $3",
                    ["2[14-68]|3[26-9]|4[1246-8]|6(?:1|75)|7[1-35]|8[1-36]"],
                    "(0$1)",
                  ],
                  ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["87"]],
                  ["(\\d{3})(\\d{6})", "$1 $2", ["9(?:[5-79]|8[1-6])"], "0$1"],
                  ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-8]"], "0$1"],
                  ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["9"]],
                ],
                "0",
              ],
              QA: [
                "974",
                "00",
                "[2-7]\\d{7}|800\\d{4}(?:\\d{2})?|2\\d{6}",
                [7, 8, 9],
                [
                  ["(\\d{3})(\\d{4})", "$1 $2", ["2[126]|8"]],
                  ["(\\d{4})(\\d{4})", "$1 $2", ["[2-7]"]],
                ],
              ],
              RE: [
                "262",
                "00",
                "976\\d{6}|(?:26|[68]\\d)\\d{7}",
                [9],
                [
                  [
                    "(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
                    "$1 $2 $3 $4",
                    ["[2689]"],
                    "0$1",
                  ],
                ],
                "0",
                0,
                0,
                0,
                0,
                "26[23]|69|[89]",
              ],
              RO: [
                "40",
                "00",
                "(?:[2378]\\d|90)\\d{7}|[23]\\d{5}",
                [6, 9],
                [
                  [
                    "(\\d{3})(\\d{3})",
                    "$1 $2",
                    ["2[3-6]", "2[3-6]\\d9"],
                    "0$1",
                  ],
                  ["(\\d{2})(\\d{4})", "$1 $2", ["219|31"], "0$1"],
                  ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[23]1"], "0$1"],
                  ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[237-9]"], "0$1"],
                ],
                "0",
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                " int ",
              ],
              RS: [
                "381",
                "00",
                "38[02-9]\\d{6,9}|6\\d{7,9}|90\\d{4,8}|38\\d{5,6}|(?:7\\d\\d|800)\\d{3,9}|(?:[12]\\d|3[0-79])\\d{5,10}",
                [6, 7, 8, 9, 10, 11, 12],
                [
                  [
                    "(\\d{3})(\\d{3,9})",
                    "$1 $2",
                    ["(?:2[389]|39)0|[7-9]"],
                    "0$1",
                  ],
                  ["(\\d{2})(\\d{5,10})", "$1 $2", ["[1-36]"], "0$1"],
                ],
                "0",
              ],
              RU: [
                "7",
                "810",
                "8\\d{13}|[347-9]\\d{9}",
                [10, 14],
                [
                  [
                    "(\\d{4})(\\d{2})(\\d{2})(\\d{2})",
                    "$1 $2 $3 $4",
                    [
                      "7(?:1[0-8]|2[1-9])",
                      "7(?:1(?:[0-6]2|7|8[27])|2(?:1[23]|[2-9]2))",
                      "7(?:1(?:[0-6]2|7|8[27])|2(?:13[03-69]|62[013-9]))|72[1-57-9]2",
                    ],
                    "8 ($1)",
                    1,
                  ],
                  [
                    "(\\d{5})(\\d)(\\d{2})(\\d{2})",
                    "$1 $2 $3 $4",
                    [
                      "7(?:1[0-68]|2[1-9])",
                      "7(?:1(?:[06][3-6]|[18]|2[35]|[3-5][3-5])|2(?:[13][3-5]|[24-689]|7[457]))",
                      "7(?:1(?:0(?:[356]|4[023])|[18]|2(?:3[013-9]|5)|3[45]|43[013-79]|5(?:3[1-8]|4[1-7]|5)|6(?:3[0-35-9]|[4-6]))|2(?:1(?:3[178]|[45])|[24-689]|3[35]|7[457]))|7(?:14|23)4[0-8]|71(?:33|45)[1-79]",
                    ],
                    "8 ($1)",
                    1,
                  ],
                  ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "8 ($1)", 1],
                  [
                    "(\\d{3})(\\d{3})(\\d{2})(\\d{2})",
                    "$1 $2-$3-$4",
                    ["[349]|8(?:[02-7]|1[1-8])"],
                    "8 ($1)",
                    1,
                  ],
                  [
                    "(\\d{4})(\\d{4})(\\d{3})(\\d{3})",
                    "$1 $2 $3 $4",
                    ["8"],
                    "8 ($1)",
                  ],
                ],
                "8",
                0,
                0,
                0,
                0,
                "3[04-689]|[489]",
                0,
                "8~10",
              ],
              RW: [
                "250",
                "00",
                "(?:06|[27]\\d\\d|[89]00)\\d{6}",
                [8, 9],
                [
                  ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["0"]],
                  ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[7-9]"], "0$1"],
                  ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"]],
                ],
                "0",
              ],
              SA: [
                "966",
                "00",
                "92\\d{7}|(?:[15]|8\\d)\\d{8}",
                [9, 10],
                [
                  ["(\\d{4})(\\d{5})", "$1 $2", ["9"]],
                  ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"],
                  ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["5"], "0$1"],
                  ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["81"], "0$1"],
                  ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"]],
                ],
                "0",
              ],
              SB: [
                "677",
                "0[01]",
                "(?:[1-6]|[7-9]\\d\\d)\\d{4}",
                [5, 7],
                [["(\\d{2})(\\d{5})", "$1 $2", ["7|8[4-9]|9(?:[1-8]|9[0-8])"]]],
              ],
              SC: [
                "248",
                "010|0[0-2]",
                "800\\d{4}|(?:[249]\\d|64)\\d{5}",
                [7],
                [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[246]|9[57]"]]],
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                "00",
              ],
              SD: [
                "249",
                "00",
                "[19]\\d{8}",
                [9],
                [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[19]"], "0$1"]],
                "0",
              ],
              SE: [
                "46",
                "00",
                "(?:[26]\\d\\d|9)\\d{9}|[1-9]\\d{8}|[1-689]\\d{7}|[1-4689]\\d{6}|2\\d{5}",
                [6, 7, 8, 9, 10],
                [
                  [
                    "(\\d{2})(\\d{2,3})(\\d{2})",
                    "$1-$2 $3",
                    ["20"],
                    "0$1",
                    0,
                    "$1 $2 $3",
                  ],
                  [
                    "(\\d{3})(\\d{4})",
                    "$1-$2",
                    ["9(?:00|39|44|9)"],
                    "0$1",
                    0,
                    "$1 $2",
                  ],
                  [
                    "(\\d{2})(\\d{3})(\\d{2})",
                    "$1-$2 $3",
                    ["[12][136]|3[356]|4[0246]|6[03]|90[1-9]"],
                    "0$1",
                    0,
                    "$1 $2 $3",
                  ],
                  [
                    "(\\d)(\\d{2,3})(\\d{2})(\\d{2})",
                    "$1-$2 $3 $4",
                    ["8"],
                    "0$1",
                    0,
                    "$1 $2 $3 $4",
                  ],
                  [
                    "(\\d{3})(\\d{2,3})(\\d{2})",
                    "$1-$2 $3",
                    [
                      "1[2457]|2(?:[247-9]|5[0138])|3[0247-9]|4[1357-9]|5[0-35-9]|6(?:[125689]|4[02-57]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])",
                    ],
                    "0$1",
                    0,
                    "$1 $2 $3",
                  ],
                  [
                    "(\\d{3})(\\d{2,3})(\\d{3})",
                    "$1-$2 $3",
                    ["9(?:00|39|44)"],
                    "0$1",
                    0,
                    "$1 $2 $3",
                  ],
                  [
                    "(\\d{2})(\\d{2,3})(\\d{2})(\\d{2})",
                    "$1-$2 $3 $4",
                    ["1[13689]|2[0136]|3[1356]|4[0246]|54|6[03]|90[1-9]"],
                    "0$1",
                    0,
                    "$1 $2 $3 $4",
                  ],
                  [
                    "(\\d{2})(\\d{3})(\\d{2})(\\d{2})",
                    "$1-$2 $3 $4",
                    ["10|7"],
                    "0$1",
                    0,
                    "$1 $2 $3 $4",
                  ],
                  [
                    "(\\d)(\\d{3})(\\d{3})(\\d{2})",
                    "$1-$2 $3 $4",
                    ["8"],
                    "0$1",
                    0,
                    "$1 $2 $3 $4",
                  ],
                  [
                    "(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
                    "$1-$2 $3 $4",
                    [
                      "[13-5]|2(?:[247-9]|5[0138])|6(?:[124-689]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])",
                    ],
                    "0$1",
                    0,
                    "$1 $2 $3 $4",
                  ],
                  [
                    "(\\d{3})(\\d{2})(\\d{2})(\\d{3})",
                    "$1-$2 $3 $4",
                    ["9"],
                    "0$1",
                    0,
                    "$1 $2 $3 $4",
                  ],
                  [
                    "(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})",
                    "$1-$2 $3 $4 $5",
                    ["[26]"],
                    "0$1",
                    0,
                    "$1 $2 $3 $4 $5",
                  ],
                ],
                "0",
              ],
              SG: [
                "65",
                "0[0-3]\\d",
                "(?:(?:1\\d|8)\\d\\d|7000)\\d{7}|[3689]\\d{7}",
                [8, 10, 11],
                [
                  ["(\\d{4})(\\d{4})", "$1 $2", ["[369]|8(?:0[1-5]|[1-9])"]],
                  ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"]],
                  ["(\\d{4})(\\d{4})(\\d{3})", "$1 $2 $3", ["7"]],
                  ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]],
                ],
              ],
              SH: [
                "290",
                "00",
                "(?:[256]\\d|8)\\d{3}",
                [4, 5],
                0,
                0,
                0,
                0,
                0,
                0,
                "[256]",
              ],
              SI: [
                "386",
                "00|10(?:22|66|88|99)",
                "[1-7]\\d{7}|8\\d{4,7}|90\\d{4,6}",
                [5, 6, 7, 8],
                [
                  ["(\\d{2})(\\d{3,6})", "$1 $2", ["8[09]|9"], "0$1"],
                  ["(\\d{3})(\\d{5})", "$1 $2", ["59|8"], "0$1"],
                  [
                    "(\\d{2})(\\d{3})(\\d{3})",
                    "$1 $2 $3",
                    ["[37][01]|4[0139]|51|6"],
                    "0$1",
                  ],
                  [
                    "(\\d)(\\d{3})(\\d{2})(\\d{2})",
                    "$1 $2 $3 $4",
                    ["[1-57]"],
                    "(0$1)",
                  ],
                ],
                "0",
                0,
                0,
                0,
                0,
                0,
                0,
                "00",
              ],
              SJ: [
                "47",
                "00",
                "0\\d{4}|(?:[489]\\d|[57]9)\\d{6}",
                [5, 8],
                0,
                0,
                0,
                0,
                0,
                0,
                "79",
              ],
              SK: [
                "421",
                "00",
                "[2-689]\\d{8}|[2-59]\\d{6}|[2-5]\\d{5}",
                [6, 7, 9],
                [
                  ["(\\d)(\\d{2})(\\d{3,4})", "$1 $2 $3", ["21"], "0$1"],
                  [
                    "(\\d{2})(\\d{2})(\\d{2,3})",
                    "$1 $2 $3",
                    ["[3-5][1-8]1", "[3-5][1-8]1[67]"],
                    "0$1",
                  ],
                  [
                    "(\\d)(\\d{3})(\\d{3})(\\d{2})",
                    "$1/$2 $3 $4",
                    ["2"],
                    "0$1",
                  ],
                  ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[689]"], "0$1"],
                  [
                    "(\\d{2})(\\d{3})(\\d{2})(\\d{2})",
                    "$1/$2 $3 $4",
                    ["[3-5]"],
                    "0$1",
                  ],
                ],
                "0",
              ],
              SL: [
                "232",
                "00",
                "(?:[237-9]\\d|66)\\d{6}",
                [8],
                [["(\\d{2})(\\d{6})", "$1 $2", ["[236-9]"], "(0$1)"]],
                "0",
              ],
              SM: [
                "378",
                "00",
                "(?:0549|[5-7]\\d)\\d{6}",
                [8, 10],
                [
                  [
                    "(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
                    "$1 $2 $3 $4",
                    ["[5-7]"],
                  ],
                  ["(\\d{4})(\\d{6})", "$1 $2", ["0"]],
                ],
                0,
                0,
                "([89]\\d{5})$",
                "0549$1",
              ],
              SN: [
                "221",
                "00",
                "(?:[378]\\d|93)\\d{7}",
                [9],
                [
                  ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"]],
                  [
                    "(\\d{2})(\\d{3})(\\d{2})(\\d{2})",
                    "$1 $2 $3 $4",
                    ["[379]"],
                  ],
                ],
              ],
              SO: [
                "252",
                "00",
                "[346-9]\\d{8}|[12679]\\d{7}|[1-5]\\d{6}|[1348]\\d{5}",
                [6, 7, 8, 9],
                [
                  ["(\\d{2})(\\d{4})", "$1 $2", ["8[125]"]],
                  ["(\\d{6})", "$1", ["[134]"]],
                  ["(\\d)(\\d{6})", "$1 $2", ["[15]|2[0-79]|3[0-46-8]|4[0-7]"]],
                  ["(\\d)(\\d{7})", "$1 $2", ["24|[67]"]],
                  ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[3478]|64|90"]],
                  [
                    "(\\d{2})(\\d{5,7})",
                    "$1 $2",
                    ["1|28|6(?:0[5-7]|[1-35-9])|9[2-9]"],
                  ],
                ],
                "0",
              ],
              SR: [
                "597",
                "00",
                "(?:[2-5]|68|[78]\\d)\\d{5}",
                [6, 7],
                [
                  ["(\\d{2})(\\d{2})(\\d{2})", "$1-$2-$3", ["56"]],
                  ["(\\d{3})(\\d{3})", "$1-$2", ["[2-5]"]],
                  ["(\\d{3})(\\d{4})", "$1-$2", ["[6-8]"]],
                ],
              ],
              SS: [
                "211",
                "00",
                "[19]\\d{8}",
                [9],
                [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[19]"], "0$1"]],
                "0",
              ],
              ST: [
                "239",
                "00",
                "(?:22|9\\d)\\d{5}",
                [7],
                [["(\\d{3})(\\d{4})", "$1 $2", ["[29]"]]],
              ],
              SV: [
                "503",
                "00",
                "[267]\\d{7}|[89]00\\d{4}(?:\\d{4})?",
                [7, 8, 11],
                [
                  ["(\\d{3})(\\d{4})", "$1 $2", ["[89]"]],
                  ["(\\d{4})(\\d{4})", "$1 $2", ["[267]"]],
                  ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["[89]"]],
                ],
              ],
              SX: [
                "1",
                "011",
                "7215\\d{6}|(?:[58]\\d\\d|900)\\d{7}",
                [10],
                0,
                "1",
                0,
                "1|(5\\d{6})$",
                "721$1",
                0,
                "721",
              ],
              SY: [
                "963",
                "00",
                "[1-39]\\d{8}|[1-5]\\d{7}",
                [8, 9],
                [
                  [
                    "(\\d{2})(\\d{3})(\\d{3,4})",
                    "$1 $2 $3",
                    ["[1-5]"],
                    "0$1",
                    1,
                  ],
                  ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"], "0$1", 1],
                ],
                "0",
              ],
              SZ: [
                "268",
                "00",
                "0800\\d{4}|(?:[237]\\d|900)\\d{6}",
                [8, 9],
                [
                  ["(\\d{4})(\\d{4})", "$1 $2", ["[0237]"]],
                  ["(\\d{5})(\\d{4})", "$1 $2", ["9"]],
                ],
              ],
              TA: ["290", "00", "8\\d{3}", [4], 0, 0, 0, 0, 0, 0, "8"],
              TC: [
                "1",
                "011",
                "(?:[58]\\d\\d|649|900)\\d{7}",
                [10],
                0,
                "1",
                0,
                "1|([2-479]\\d{6})$",
                "649$1",
                0,
                "649",
              ],
              TD: [
                "235",
                "00|16",
                "(?:22|[69]\\d|77)\\d{6}",
                [8],
                [
                  [
                    "(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
                    "$1 $2 $3 $4",
                    ["[2679]"],
                  ],
                ],
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                "00",
              ],
              TG: [
                "228",
                "00",
                "[279]\\d{7}",
                [8],
                [
                  [
                    "(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
                    "$1 $2 $3 $4",
                    ["[279]"],
                  ],
                ],
              ],
              TH: [
                "66",
                "00[1-9]",
                "(?:001800|[2-57]|[689]\\d)\\d{7}|1\\d{7,9}",
                [8, 9, 10, 13],
                [
                  ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["2"], "0$1"],
                  ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[13-9]"], "0$1"],
                  ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]],
                ],
                "0",
              ],
              TJ: [
                "992",
                "810",
                "(?:00|[1-57-9]\\d)\\d{7}",
                [9],
                [
                  ["(\\d{6})(\\d)(\\d{2})", "$1 $2 $3", ["331", "3317"]],
                  ["(\\d{3})(\\d{2})(\\d{4})", "$1 $2 $3", ["[34]7|91[78]"]],
                  ["(\\d{4})(\\d)(\\d{4})", "$1 $2 $3", ["3[1-5]"]],
                  ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[0-57-9]"]],
                ],
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                "8~10",
              ],
              TK: ["690", "00", "[2-47]\\d{3,6}", [4, 5, 6, 7]],
              TL: [
                "670",
                "00",
                "7\\d{7}|(?:[2-47]\\d|[89]0)\\d{5}",
                [7, 8],
                [
                  ["(\\d{3})(\\d{4})", "$1 $2", ["[2-489]|70"]],
                  ["(\\d{4})(\\d{4})", "$1 $2", ["7"]],
                ],
              ],
              TM: [
                "993",
                "810",
                "[1-6]\\d{7}",
                [8],
                [
                  [
                    "(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
                    "$1 $2-$3-$4",
                    ["12"],
                    "(8 $1)",
                  ],
                  [
                    "(\\d{3})(\\d)(\\d{2})(\\d{2})",
                    "$1 $2-$3-$4",
                    ["[1-5]"],
                    "(8 $1)",
                  ],
                  ["(\\d{2})(\\d{6})", "$1 $2", ["6"], "8 $1"],
                ],
                "8",
                0,
                0,
                0,
                0,
                0,
                0,
                "8~10",
              ],
              TN: [
                "216",
                "00",
                "[2-57-9]\\d{7}",
                [8],
                [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-57-9]"]]],
              ],
              TO: [
                "676",
                "00",
                "(?:0800|(?:[5-8]\\d\\d|999)\\d)\\d{3}|[2-8]\\d{4}",
                [5, 7],
                [
                  [
                    "(\\d{2})(\\d{3})",
                    "$1-$2",
                    ["[2-4]|50|6[09]|7[0-24-69]|8[05]"],
                  ],
                  ["(\\d{4})(\\d{3})", "$1 $2", ["0"]],
                  ["(\\d{3})(\\d{4})", "$1 $2", ["[5-9]"]],
                ],
              ],
              TR: [
                "90",
                "00",
                "4\\d{6}|8\\d{11,12}|(?:[2-58]\\d\\d|900)\\d{7}",
                [7, 10, 12, 13],
                [
                  [
                    "(\\d{3})(\\d{3})(\\d{4})",
                    "$1 $2 $3",
                    ["512|8[01589]|90"],
                    "0$1",
                    1,
                  ],
                  [
                    "(\\d{3})(\\d{3})(\\d{2})(\\d{2})",
                    "$1 $2 $3 $4",
                    ["5(?:[0-59]|61)", "5(?:[0-59]|616)", "5(?:[0-59]|6161)"],
                    "0$1",
                    1,
                  ],
                  [
                    "(\\d{3})(\\d{3})(\\d{2})(\\d{2})",
                    "$1 $2 $3 $4",
                    ["[24][1-8]|3[1-9]"],
                    "(0$1)",
                    1,
                  ],
                  ["(\\d{3})(\\d{3})(\\d{6,7})", "$1 $2 $3", ["80"], "0$1", 1],
                ],
                "0",
              ],
              TT: [
                "1",
                "011",
                "(?:[58]\\d\\d|900)\\d{7}",
                [10],
                0,
                "1",
                0,
                "1|([2-46-8]\\d{6})$",
                "868$1",
                0,
                "868",
              ],
              TV: [
                "688",
                "00",
                "(?:2|7\\d\\d|90)\\d{4}",
                [5, 6, 7],
                [
                  ["(\\d{2})(\\d{3})", "$1 $2", ["2"]],
                  ["(\\d{2})(\\d{4})", "$1 $2", ["90"]],
                  ["(\\d{2})(\\d{5})", "$1 $2", ["7"]],
                ],
              ],
              TW: [
                "886",
                "0(?:0[25-79]|19)",
                "[2-689]\\d{8}|7\\d{9,10}|[2-8]\\d{7}|2\\d{6}",
                [7, 8, 9, 10, 11],
                [
                  ["(\\d{2})(\\d)(\\d{4})", "$1 $2 $3", ["202"], "0$1"],
                  ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[258]0"], "0$1"],
                  [
                    "(\\d)(\\d{3,4})(\\d{4})",
                    "$1 $2 $3",
                    [
                      "[23568]|4(?:0[02-48]|[1-47-9])|7[1-9]",
                      "[23568]|4(?:0[2-48]|[1-47-9])|(?:400|7)[1-9]",
                    ],
                    "0$1",
                  ],
                  ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[49]"], "0$1"],
                  ["(\\d{2})(\\d{4})(\\d{4,5})", "$1 $2 $3", ["7"], "0$1"],
                ],
                "0",
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                "#",
              ],
              TZ: [
                "255",
                "00[056]",
                "(?:[26-8]\\d|41|90)\\d{7}",
                [9],
                [
                  ["(\\d{3})(\\d{2})(\\d{4})", "$1 $2 $3", ["[89]"], "0$1"],
                  ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[24]"], "0$1"],
                  ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[67]"], "0$1"],
                ],
                "0",
              ],
              UA: [
                "380",
                "00",
                "[89]\\d{9}|[3-9]\\d{8}",
                [9, 10],
                [
                  [
                    "(\\d{3})(\\d{3})(\\d{3})",
                    "$1 $2 $3",
                    [
                      "6[12][29]|(?:3[1-8]|4[136-8]|5[12457]|6[49])2|(?:56|65)[24]",
                      "6[12][29]|(?:35|4[1378]|5[12457]|6[49])2|(?:56|65)[24]|(?:3[1-46-8]|46)2[013-9]",
                    ],
                    "0$1",
                  ],
                  [
                    "(\\d{4})(\\d{5})",
                    "$1 $2",
                    [
                      "3[1-8]|4(?:[1367]|[45][6-9]|8[4-6])|5(?:[1-5]|6[0135689]|7[4-6])|6(?:[12][3-7]|[459])",
                      "3[1-8]|4(?:[1367]|[45][6-9]|8[4-6])|5(?:[1-5]|6(?:[015689]|3[02389])|7[4-6])|6(?:[12][3-7]|[459])",
                    ],
                    "0$1",
                  ],
                  [
                    "(\\d{2})(\\d{3})(\\d{4})",
                    "$1 $2 $3",
                    ["[3-7]|89|9[1-9]"],
                    "0$1",
                  ],
                  ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[89]"], "0$1"],
                ],
                "0",
                0,
                0,
                0,
                0,
                0,
                0,
                "0~0",
              ],
              UG: [
                "256",
                "00[057]",
                "800\\d{6}|(?:[29]0|[347]\\d)\\d{7}",
                [9],
                [
                  ["(\\d{4})(\\d{5})", "$1 $2", ["202", "2024"], "0$1"],
                  [
                    "(\\d{3})(\\d{6})",
                    "$1 $2",
                    ["[27-9]|4(?:6[45]|[7-9])"],
                    "0$1",
                  ],
                  ["(\\d{2})(\\d{7})", "$1 $2", ["[34]"], "0$1"],
                ],
                "0",
              ],
              US: [
                "1",
                "011",
                "[2-9]\\d{9}|3\\d{6}",
                [10],
                [
                  ["(\\d{3})(\\d{4})", "$1-$2", ["310"], 0, 1],
                  [
                    "(\\d{3})(\\d{3})(\\d{4})",
                    "($1) $2-$3",
                    ["[2-9]"],
                    0,
                    1,
                    "$1-$2-$3",
                  ],
                ],
                "1",
                0,
                0,
                0,
                0,
                0,
                [
                  [
                    "5(?:05(?:[2-57-9]\\d\\d|6(?:[0-35-9]\\d|44))|82(?:2(?:0[0-3]|[268]2)|3(?:0[02]|22|33)|4(?:00|4[24]|65|82)|5(?:00|29|58|83)|6(?:00|66|82)|7(?:58|77)|8(?:00|42|5[25]|88)|9(?:00|9[89])))\\d{4}|(?:2(?:0[1-35-9]|1[02-9]|2[03-589]|3[149]|4[08]|5[1-46]|6[0279]|7[0269]|8[13])|3(?:0[1-57-9]|1[02-9]|2[01356]|3[0-24679]|4[167]|5[12]|6[014]|8[056])|4(?:0[124-9]|1[02-579]|2[3-5]|3[0245]|4[023578]|58|6[349]|7[0589]|8[04])|5(?:0[1-47-9]|1[0235-8]|20|3[0149]|4[01]|5[19]|6[1-47]|7[0-5]|8[056])|6(?:0[1-35-9]|1[024-9]|2[03689]|[34][016]|5[01679]|6[0-279]|78|8[0-29])|7(?:0[1-46-8]|1[2-9]|2[04-7]|3[1247]|4[037]|5[47]|6[02359]|7[0-59]|8[156])|8(?:0[1-68]|1[02-8]|2[068]|3[0-289]|4[03578]|5[046-9]|6[02-5]|7[028])|9(?:0[1346-9]|1[02-9]|2[0589]|3[0146-8]|4[01357-9]|5[12469]|7[0-389]|8[04-69]))[2-9]\\d{6}",
                  ],
                  [""],
                  ["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}"],
                  ["900[2-9]\\d{6}"],
                  [
                    "52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[125-7]|33|44|66|77|88)[2-9]\\d{6}",
                  ],
                ],
              ],
              UY: [
                "598",
                "0(?:0|1[3-9]\\d)",
                "4\\d{9}|[1249]\\d{7}|(?:[49]\\d|80)\\d{5}",
                [7, 8, 10],
                [
                  ["(\\d{3})(\\d{4})", "$1 $2", ["405|8|90"], "0$1"],
                  ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"], "0$1"],
                  ["(\\d{4})(\\d{4})", "$1 $2", ["[124]"]],
                  ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["4"], "0$1"],
                ],
                "0",
                0,
                0,
                0,
                0,
                0,
                0,
                "00",
                " int. ",
              ],
              UZ: [
                "998",
                "810",
                "(?:33|55|[679]\\d|88)\\d{7}",
                [9],
                [
                  [
                    "(\\d{2})(\\d{3})(\\d{2})(\\d{2})",
                    "$1 $2 $3 $4",
                    ["[35-9]"],
                    "8 $1",
                  ],
                ],
                "8",
                0,
                0,
                0,
                0,
                0,
                0,
                "8~10",
              ],
              VA: [
                "39",
                "00",
                "0\\d{5,10}|3[0-8]\\d{7,10}|55\\d{8}|8\\d{5}(?:\\d{2,4})?|(?:1\\d|39)\\d{7,8}",
                [6, 7, 8, 9, 10, 11],
                0,
                0,
                0,
                0,
                0,
                0,
                "06698",
              ],
              VC: [
                "1",
                "011",
                "(?:[58]\\d\\d|784|900)\\d{7}",
                [10],
                0,
                "1",
                0,
                "1|([2-7]\\d{6})$",
                "784$1",
                0,
                "784",
              ],
              VE: [
                "58",
                "00",
                "[68]00\\d{7}|(?:[24]\\d|[59]0)\\d{8}",
                [10],
                [["(\\d{3})(\\d{7})", "$1-$2", ["[24-689]"], "0$1"]],
                "0",
              ],
              VG: [
                "1",
                "011",
                "(?:284|[58]\\d\\d|900)\\d{7}",
                [10],
                0,
                "1",
                0,
                "1|([2-578]\\d{6})$",
                "284$1",
                0,
                "284",
              ],
              VI: [
                "1",
                "011",
                "[58]\\d{9}|(?:34|90)0\\d{7}",
                [10],
                0,
                "1",
                0,
                "1|([2-9]\\d{6})$",
                "340$1",
                0,
                "340",
              ],
              VN: [
                "84",
                "00",
                "[12]\\d{9}|[135-9]\\d{8}|[16]\\d{7}|[16-8]\\d{6}",
                [7, 8, 9, 10],
                [
                  ["(\\d{2})(\\d{5})", "$1 $2", ["80"], "0$1", 1],
                  ["(\\d{4})(\\d{4,6})", "$1 $2", ["1"], 0, 1],
                  [
                    "(\\d{2})(\\d{3})(\\d{2})(\\d{2})",
                    "$1 $2 $3 $4",
                    ["[69]"],
                    "0$1",
                    1,
                  ],
                  [
                    "(\\d{3})(\\d{3})(\\d{3})",
                    "$1 $2 $3",
                    ["[3578]"],
                    "0$1",
                    1,
                  ],
                  ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["2[48]"], "0$1", 1],
                  ["(\\d{3})(\\d{4})(\\d{3})", "$1 $2 $3", ["2"], "0$1", 1],
                ],
                "0",
              ],
              VU: [
                "678",
                "00",
                "[57-9]\\d{6}|(?:[238]\\d|48)\\d{3}",
                [5, 7],
                [["(\\d{3})(\\d{4})", "$1 $2", ["[57-9]"]]],
              ],
              WF: [
                "681",
                "00",
                "(?:40|72)\\d{4}|8\\d{5}(?:\\d{3})?",
                [6, 9],
                [
                  ["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["[478]"]],
                  ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"]],
                ],
              ],
              WS: [
                "685",
                "0",
                "(?:[2-6]|8\\d{5})\\d{4}|[78]\\d{6}|[68]\\d{5}",
                [5, 6, 7, 10],
                [
                  ["(\\d{5})", "$1", ["[2-5]|6[1-9]"]],
                  ["(\\d{3})(\\d{3,7})", "$1 $2", ["[68]"]],
                  ["(\\d{2})(\\d{5})", "$1 $2", ["7"]],
                ],
              ],
              XK: [
                "383",
                "00",
                "[23]\\d{7,8}|(?:4\\d\\d|[89]00)\\d{5}",
                [8, 9],
                [
                  ["(\\d{3})(\\d{5})", "$1 $2", ["[89]"], "0$1"],
                  ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-4]"], "0$1"],
                  ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[23]"], "0$1"],
                ],
                "0",
              ],
              YE: [
                "967",
                "00",
                "(?:1|7\\d)\\d{7}|[1-7]\\d{6}",
                [7, 8, 9],
                [
                  [
                    "(\\d)(\\d{3})(\\d{3,4})",
                    "$1 $2 $3",
                    ["[1-6]|7[24-68]"],
                    "0$1",
                  ],
                  ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["7"], "0$1"],
                ],
                "0",
              ],
              YT: [
                "262",
                "00",
                "80\\d{7}|(?:26|63)9\\d{6}",
                [9],
                0,
                "0",
                0,
                0,
                0,
                0,
                "269|63",
              ],
              ZA: [
                "27",
                "00",
                "[1-79]\\d{8}|8\\d{4,9}",
                [5, 6, 7, 8, 9, 10],
                [
                  ["(\\d{2})(\\d{3,4})", "$1 $2", ["8[1-4]"], "0$1"],
                  ["(\\d{2})(\\d{3})(\\d{2,3})", "$1 $2 $3", ["8[1-4]"], "0$1"],
                  ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["860"], "0$1"],
                  ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-9]"], "0$1"],
                  ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"], "0$1"],
                ],
                "0",
              ],
              ZM: [
                "260",
                "00",
                "800\\d{6}|(?:21|63|[79]\\d)\\d{7}",
                [9],
                [
                  ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[28]"], "0$1"],
                  ["(\\d{2})(\\d{7})", "$1 $2", ["[79]"], "0$1"],
                ],
                "0",
              ],
              ZW: [
                "263",
                "00",
                "2(?:[0-57-9]\\d{6,8}|6[0-24-9]\\d{6,7})|[38]\\d{9}|[35-8]\\d{8}|[3-6]\\d{7}|[1-689]\\d{6}|[1-3569]\\d{5}|[1356]\\d{4}",
                [5, 6, 7, 8, 9, 10],
                [
                  [
                    "(\\d{3})(\\d{3,5})",
                    "$1 $2",
                    [
                      "2(?:0[45]|2[278]|[49]8)|3(?:[09]8|17)|6(?:[29]8|37|75)|[23][78]|(?:33|5[15]|6[68])[78]",
                    ],
                    "0$1",
                  ],
                  ["(\\d)(\\d{3})(\\d{2,4})", "$1 $2 $3", ["[49]"], "0$1"],
                  ["(\\d{3})(\\d{4})", "$1 $2", ["80"], "0$1"],
                  [
                    "(\\d{2})(\\d{7})",
                    "$1 $2",
                    [
                      "24|8[13-59]|(?:2[05-79]|39|5[45]|6[15-8])2",
                      "2(?:02[014]|4|[56]20|[79]2)|392|5(?:42|525)|6(?:[16-8]21|52[013])|8[13-59]",
                    ],
                    "(0$1)",
                  ],
                  ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "0$1"],
                  [
                    "(\\d{3})(\\d{3})(\\d{3,4})",
                    "$1 $2 $3",
                    [
                      "2(?:1[39]|2[0157]|[378]|[56][14])|3(?:12|29)",
                      "2(?:1[39]|2[0157]|[378]|[56][14])|3(?:123|29)",
                    ],
                    "0$1",
                  ],
                  ["(\\d{4})(\\d{6})", "$1 $2", ["8"], "0$1"],
                  [
                    "(\\d{2})(\\d{3,5})",
                    "$1 $2",
                    [
                      "1|2(?:0[0-36-9]|12|29|[56])|3(?:1[0-689]|[24-6])|5(?:[0236-9]|1[2-4])|6(?:[013-59]|7[0-46-9])|(?:33|55|6[68])[0-69]|(?:29|3[09]|62)[0-79]",
                    ],
                    "0$1",
                  ],
                  [
                    "(\\d{2})(\\d{3})(\\d{3,4})",
                    "$1 $2 $3",
                    ["29[013-9]|39|54"],
                    "0$1",
                  ],
                  [
                    "(\\d{4})(\\d{3,5})",
                    "$1 $2",
                    ["(?:25|54)8", "258|5483"],
                    "0$1",
                  ],
                ],
                "0",
              ],
            },
            nonGeographic: {
              800: [
                "800",
                0,
                "(?:00|[1-9]\\d)\\d{6}",
                [8],
                [["(\\d{4})(\\d{4})", "$1 $2", ["\\d"]]],
                0,
                0,
                0,
                0,
                0,
                0,
                [0, 0, ["(?:00|[1-9]\\d)\\d{6}"]],
              ],
              808: [
                "808",
                0,
                "[1-9]\\d{7}",
                [8],
                [["(\\d{4})(\\d{4})", "$1 $2", ["[1-9]"]]],
                0,
                0,
                0,
                0,
                0,
                0,
                [0, 0, 0, 0, 0, 0, 0, 0, 0, ["[1-9]\\d{7}"]],
              ],
              870: [
                "870",
                0,
                "7\\d{11}|[35-7]\\d{8}",
                [9, 12],
                [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[35-7]"]]],
                0,
                0,
                0,
                0,
                0,
                0,
                [0, ["(?:[356]|774[45])\\d{8}|7[6-8]\\d{7}"]],
              ],
              878: [
                "878",
                0,
                "10\\d{10}",
                [12],
                [["(\\d{2})(\\d{5})(\\d{5})", "$1 $2 $3", ["1"]]],
                0,
                0,
                0,
                0,
                0,
                0,
                [0, 0, 0, 0, 0, 0, 0, 0, ["10\\d{10}"]],
              ],
              881: [
                "881",
                0,
                "[0-36-9]\\d{8}",
                [9],
                [["(\\d)(\\d{3})(\\d{5})", "$1 $2 $3", ["[0-36-9]"]]],
                0,
                0,
                0,
                0,
                0,
                0,
                [0, ["[0-36-9]\\d{8}"]],
              ],
              882: [
                "882",
                0,
                "[13]\\d{6}(?:\\d{2,5})?|285\\d{9}|(?:[19]\\d|49)\\d{6}",
                [7, 8, 9, 10, 11, 12],
                [
                  ["(\\d{2})(\\d{5})", "$1 $2", ["16|342"]],
                  ["(\\d{2})(\\d{6})", "$1 $2", ["4"]],
                  ["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["[19]"]],
                  ["(\\d{2})(\\d{4})(\\d{3})", "$1 $2 $3", ["3[23]"]],
                  ["(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["1"]],
                  ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["34[57]"]],
                  ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["34"]],
                  ["(\\d{2})(\\d{4,5})(\\d{5})", "$1 $2 $3", ["[1-3]"]],
                ],
                0,
                0,
                0,
                0,
                0,
                0,
                [
                  0,
                  [
                    "342\\d{4}|(?:337|49)\\d{6}|3(?:2|47|7\\d{3})\\d{7}",
                    [7, 8, 9, 10, 12],
                  ],
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  [
                    "1(?:3(?:0[0347]|[13][0139]|2[035]|4[013568]|6[0459]|7[06]|8[15-8]|9[0689])\\d{4}|6\\d{5,10})|(?:(?:285\\d\\d|3(?:45|[69]\\d{3}))\\d|9[89])\\d{6}",
                  ],
                ],
              ],
              883: [
                "883",
                0,
                "(?:210|370\\d\\d)\\d{7}|51\\d{7}(?:\\d{3})?",
                [9, 10, 12],
                [
                  ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["510"]],
                  ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["2"]],
                  ["(\\d{4})(\\d{4})(\\d{4})", "$1 $2 $3", ["51[13]"]],
                  ["(\\d{3})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["[35]"]],
                ],
                0,
                0,
                0,
                0,
                0,
                0,
                [
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  ["(?:210|(?:370[1-9]|51[013]0)\\d)\\d{7}|5100\\d{5}"],
                ],
              ],
              888: [
                "888",
                0,
                "\\d{11}",
                [11],
                [["(\\d{3})(\\d{3})(\\d{5})", "$1 $2 $3"]],
                0,
                0,
                0,
                0,
                0,
                0,
                [0, 0, 0, 0, 0, 0, ["\\d{11}"]],
              ],
              979: [
                "979",
                0,
                "[1359]\\d{8}",
                [9],
                [["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["[1359]"]]],
                0,
                0,
                0,
                0,
                0,
                0,
                [0, 0, 0, ["[1359]\\d{8}"]],
              ],
            },
          };
        function v(t, e) {
          var n = Array.prototype.slice.call(e);
          return n.push(g), t.apply(this, n);
        }
        var _ = function (t, e) {
          (t = t.split("-")), (e = e.split("-"));
          for (
            var n = t[0].split("."), i = e[0].split("."), r = 0;
            r < 3;
            r++
          ) {
            var o = Number(n[r]),
              a = Number(i[r]);
            if (o > a) return 1;
            if (a > o) return -1;
            if (!isNaN(o) && isNaN(a)) return 1;
            if (isNaN(o) && !isNaN(a)) return -1;
          }
          return t[1] && e[1]
            ? t[1] > e[1]
              ? 1
              : t[1] < e[1]
              ? -1
              : 0
            : !t[1] && e[1]
            ? 1
            : t[1] && !e[1]
            ? -1
            : 0;
        };
        function y(t) {
          return (y =
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
        function M(t, e) {
          if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function");
        }
        function O(t, e) {
          for (var n = 0; n < e.length; n++) {
            var i = e[n];
            (i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              "value" in i && (i.writable = !0),
              Object.defineProperty(t, i.key, i);
          }
        }
        function w(t, e, n) {
          return (
            e && O(t.prototype, e),
            n && O(t, n),
            Object.defineProperty(t, "prototype", { writable: !1 }),
            t
          );
        }
        var A = /^\d+$/,
          x = (function () {
            function t(e) {
              M(this, t),
                (function (t) {
                  if (!t)
                    throw new Error(
                      "[libphonenumber-js] `metadata` argument not passed. Check your arguments."
                    );
                  if (!D(t) || !D(t.countries))
                    throw new Error(
                      "[libphonenumber-js] `metadata` argument was passed but it's not a valid metadata. Must be an object having `.countries` child object property. Got ".concat(
                        D(t)
                          ? "an object of shape: { " +
                              Object.keys(t).join(", ") +
                              " }"
                          : "a " + L(t) + ": " + t,
                        "."
                      )
                    );
                })(e),
                (this.metadata = e),
                E.call(this, e);
            }
            return (
              w(t, [
                {
                  key: "getCountries",
                  value: function () {
                    return Object.keys(this.metadata.countries).filter(
                      function (t) {
                        return "001" !== t;
                      }
                    );
                  },
                },
                {
                  key: "getCountryMetadata",
                  value: function (t) {
                    return this.metadata.countries[t];
                  },
                },
                {
                  key: "nonGeographic",
                  value: function () {
                    if (!(this.v1 || this.v2 || this.v3))
                      return (
                        this.metadata.nonGeographic ||
                        this.metadata.nonGeographical
                      );
                  },
                },
                {
                  key: "hasCountry",
                  value: function (t) {
                    return void 0 !== this.getCountryMetadata(t);
                  },
                },
                {
                  key: "hasCallingCode",
                  value: function (t) {
                    if (this.getCountryCodesForCallingCode(t)) return !0;
                    if (this.nonGeographic()) {
                      if (this.nonGeographic()[t]) return !0;
                    } else {
                      var e = this.countryCallingCodes()[t];
                      if (e && 1 === e.length && "001" === e[0]) return !0;
                    }
                  },
                },
                {
                  key: "isNonGeographicCallingCode",
                  value: function (t) {
                    return this.nonGeographic()
                      ? !!this.nonGeographic()[t]
                      : !this.getCountryCodesForCallingCode(t);
                  },
                },
                {
                  key: "country",
                  value: function (t) {
                    return this.selectNumberingPlan(t);
                  },
                },
                {
                  key: "selectNumberingPlan",
                  value: function (t, e) {
                    if (
                      (t && A.test(t) && ((e = t), (t = null)),
                      t && "001" !== t)
                    ) {
                      if (!this.hasCountry(t))
                        throw new Error("Unknown country: ".concat(t));
                      this.numberingPlan = new z(
                        this.getCountryMetadata(t),
                        this
                      );
                    } else if (e) {
                      if (!this.hasCallingCode(e))
                        throw new Error("Unknown calling code: ".concat(e));
                      this.numberingPlan = new z(
                        this.getNumberingPlanMetadata(e),
                        this
                      );
                    } else this.numberingPlan = void 0;
                    return this;
                  },
                },
                {
                  key: "getCountryCodesForCallingCode",
                  value: function (t) {
                    var e = this.countryCallingCodes()[t];
                    if (e) {
                      if (1 === e.length && 3 === e[0].length) return;
                      return e;
                    }
                  },
                },
                {
                  key: "getCountryCodeForCallingCode",
                  value: function (t) {
                    var e = this.getCountryCodesForCallingCode(t);
                    if (e) return e[0];
                  },
                },
                {
                  key: "getNumberingPlanMetadata",
                  value: function (t) {
                    var e = this.getCountryCodeForCallingCode(t);
                    if (e) return this.getCountryMetadata(e);
                    if (this.nonGeographic()) {
                      var n = this.nonGeographic()[t];
                      if (n) return n;
                    } else {
                      var i = this.countryCallingCodes()[t];
                      if (i && 1 === i.length && "001" === i[0])
                        return this.metadata.countries["001"];
                    }
                  },
                },
                {
                  key: "countryCallingCode",
                  value: function () {
                    return this.numberingPlan.callingCode();
                  },
                },
                {
                  key: "IDDPrefix",
                  value: function () {
                    return this.numberingPlan.IDDPrefix();
                  },
                },
                {
                  key: "defaultIDDPrefix",
                  value: function () {
                    return this.numberingPlan.defaultIDDPrefix();
                  },
                },
                {
                  key: "nationalNumberPattern",
                  value: function () {
                    return this.numberingPlan.nationalNumberPattern();
                  },
                },
                {
                  key: "possibleLengths",
                  value: function () {
                    return this.numberingPlan.possibleLengths();
                  },
                },
                {
                  key: "formats",
                  value: function () {
                    return this.numberingPlan.formats();
                  },
                },
                {
                  key: "nationalPrefixForParsing",
                  value: function () {
                    return this.numberingPlan.nationalPrefixForParsing();
                  },
                },
                {
                  key: "nationalPrefixTransformRule",
                  value: function () {
                    return this.numberingPlan.nationalPrefixTransformRule();
                  },
                },
                {
                  key: "leadingDigits",
                  value: function () {
                    return this.numberingPlan.leadingDigits();
                  },
                },
                {
                  key: "hasTypes",
                  value: function () {
                    return this.numberingPlan.hasTypes();
                  },
                },
                {
                  key: "type",
                  value: function (t) {
                    return this.numberingPlan.type(t);
                  },
                },
                {
                  key: "ext",
                  value: function () {
                    return this.numberingPlan.ext();
                  },
                },
                {
                  key: "countryCallingCodes",
                  value: function () {
                    return this.v1
                      ? this.metadata.country_phone_code_to_countries
                      : this.metadata.country_calling_codes;
                  },
                },
                {
                  key: "chooseCountryByCountryCallingCode",
                  value: function (t) {
                    return this.selectNumberingPlan(t);
                  },
                },
                {
                  key: "hasSelectedNumberingPlan",
                  value: function () {
                    return void 0 !== this.numberingPlan;
                  },
                },
              ]),
              t
            );
          })(),
          z = (function () {
            function t(e, n) {
              M(this, t),
                (this.globalMetadataObject = n),
                (this.metadata = e),
                E.call(this, n.metadata);
            }
            return (
              w(t, [
                {
                  key: "callingCode",
                  value: function () {
                    return this.metadata[0];
                  },
                },
                {
                  key: "getDefaultCountryMetadataForRegion",
                  value: function () {
                    return this.globalMetadataObject.getNumberingPlanMetadata(
                      this.callingCode()
                    );
                  },
                },
                {
                  key: "IDDPrefix",
                  value: function () {
                    if (!this.v1 && !this.v2) return this.metadata[1];
                  },
                },
                {
                  key: "defaultIDDPrefix",
                  value: function () {
                    if (!this.v1 && !this.v2) return this.metadata[12];
                  },
                },
                {
                  key: "nationalNumberPattern",
                  value: function () {
                    return this.v1 || this.v2
                      ? this.metadata[1]
                      : this.metadata[2];
                  },
                },
                {
                  key: "possibleLengths",
                  value: function () {
                    if (!this.v1) return this.metadata[this.v2 ? 2 : 3];
                  },
                },
                {
                  key: "_getFormats",
                  value: function (t) {
                    return t[this.v1 ? 2 : this.v2 ? 3 : 4];
                  },
                },
                {
                  key: "formats",
                  value: function () {
                    var t = this;
                    return (
                      this._getFormats(this.metadata) ||
                      this._getFormats(
                        this.getDefaultCountryMetadataForRegion()
                      ) ||
                      []
                    ).map(function (e) {
                      return new C(e, t);
                    });
                  },
                },
                {
                  key: "nationalPrefix",
                  value: function () {
                    return this.metadata[this.v1 ? 3 : this.v2 ? 4 : 5];
                  },
                },
                {
                  key: "_getNationalPrefixFormattingRule",
                  value: function (t) {
                    return t[this.v1 ? 4 : this.v2 ? 5 : 6];
                  },
                },
                {
                  key: "nationalPrefixFormattingRule",
                  value: function () {
                    return (
                      this._getNationalPrefixFormattingRule(this.metadata) ||
                      this._getNationalPrefixFormattingRule(
                        this.getDefaultCountryMetadataForRegion()
                      )
                    );
                  },
                },
                {
                  key: "_nationalPrefixForParsing",
                  value: function () {
                    return this.metadata[this.v1 ? 5 : this.v2 ? 6 : 7];
                  },
                },
                {
                  key: "nationalPrefixForParsing",
                  value: function () {
                    return (
                      this._nationalPrefixForParsing() || this.nationalPrefix()
                    );
                  },
                },
                {
                  key: "nationalPrefixTransformRule",
                  value: function () {
                    return this.metadata[this.v1 ? 6 : this.v2 ? 7 : 8];
                  },
                },
                {
                  key: "_getNationalPrefixIsOptionalWhenFormatting",
                  value: function () {
                    return !!this.metadata[this.v1 ? 7 : this.v2 ? 8 : 9];
                  },
                },
                {
                  key: "nationalPrefixIsOptionalWhenFormattingInNationalFormat",
                  value: function () {
                    return (
                      this._getNationalPrefixIsOptionalWhenFormatting(
                        this.metadata
                      ) ||
                      this._getNationalPrefixIsOptionalWhenFormatting(
                        this.getDefaultCountryMetadataForRegion()
                      )
                    );
                  },
                },
                {
                  key: "leadingDigits",
                  value: function () {
                    return this.metadata[this.v1 ? 8 : this.v2 ? 9 : 10];
                  },
                },
                {
                  key: "types",
                  value: function () {
                    return this.metadata[this.v1 ? 9 : this.v2 ? 10 : 11];
                  },
                },
                {
                  key: "hasTypes",
                  value: function () {
                    return !(
                      (this.types() && 0 === this.types().length) ||
                      !this.types()
                    );
                  },
                },
                {
                  key: "type",
                  value: function (t) {
                    if (this.hasTypes() && T(this.types(), t))
                      return new S(T(this.types(), t), this);
                  },
                },
                {
                  key: "ext",
                  value: function () {
                    return this.v1 || this.v2
                      ? " ext. "
                      : this.metadata[13] || " ext. ";
                  },
                },
              ]),
              t
            );
          })(),
          C = (function () {
            function t(e, n) {
              M(this, t), (this._format = e), (this.metadata = n);
            }
            return (
              w(t, [
                {
                  key: "pattern",
                  value: function () {
                    return this._format[0];
                  },
                },
                {
                  key: "format",
                  value: function () {
                    return this._format[1];
                  },
                },
                {
                  key: "leadingDigitsPatterns",
                  value: function () {
                    return this._format[2] || [];
                  },
                },
                {
                  key: "nationalPrefixFormattingRule",
                  value: function () {
                    return (
                      this._format[3] ||
                      this.metadata.nationalPrefixFormattingRule()
                    );
                  },
                },
                {
                  key: "nationalPrefixIsOptionalWhenFormattingInNationalFormat",
                  value: function () {
                    return (
                      !!this._format[4] ||
                      this.metadata.nationalPrefixIsOptionalWhenFormattingInNationalFormat()
                    );
                  },
                },
                {
                  key: "nationalPrefixIsMandatoryWhenFormattingInNationalFormat",
                  value: function () {
                    return (
                      this.usesNationalPrefix() &&
                      !this.nationalPrefixIsOptionalWhenFormattingInNationalFormat()
                    );
                  },
                },
                {
                  key: "usesNationalPrefix",
                  value: function () {
                    return !(
                      !this.nationalPrefixFormattingRule() ||
                      k.test(this.nationalPrefixFormattingRule())
                    );
                  },
                },
                {
                  key: "internationalFormat",
                  value: function () {
                    return this._format[5] || this.format();
                  },
                },
              ]),
              t
            );
          })(),
          k = /^\(?\$1\)?$/,
          S = (function () {
            function t(e, n) {
              M(this, t), (this.type = e), (this.metadata = n);
            }
            return (
              w(t, [
                {
                  key: "pattern",
                  value: function () {
                    return this.metadata.v1 ? this.type : this.type[0];
                  },
                },
                {
                  key: "possibleLengths",
                  value: function () {
                    if (!this.metadata.v1)
                      return this.type[1] || this.metadata.possibleLengths();
                  },
                },
              ]),
              t
            );
          })();
        function T(t, e) {
          switch (e) {
            case "FIXED_LINE":
              return t[0];
            case "MOBILE":
              return t[1];
            case "TOLL_FREE":
              return t[2];
            case "PREMIUM_RATE":
              return t[3];
            case "PERSONAL_NUMBER":
              return t[4];
            case "VOICEMAIL":
              return t[5];
            case "UAN":
              return t[6];
            case "PAGER":
              return t[7];
            case "VOIP":
              return t[8];
            case "SHARED_COST":
              return t[9];
          }
        }
        var D = function (t) {
            return "object" === y(t);
          },
          L = function (t) {
            return y(t);
          };
        function q(t, e) {
          if ((e = new x(e)).hasCountry(t))
            return e.country(t).countryCallingCode();
          throw new Error("Unknown country: ".concat(t));
        }
        function E(t) {
          var e = t.version;
          "number" == typeof e
            ? ((this.v1 = 1 === e),
              (this.v2 = 2 === e),
              (this.v3 = 3 === e),
              (this.v4 = 4 === e))
            : e
            ? -1 === _(e, "1.2.0")
              ? (this.v2 = !0)
              : -1 === _(e, "1.7.35")
              ? (this.v3 = !0)
              : (this.v4 = !0)
            : (this.v1 = !0);
        }
        function j(t, e) {
          (null == e || e > t.length) && (e = t.length);
          for (var n = 0, i = new Array(e); n < e; n++) i[n] = t[n];
          return i;
        }
        function P(t, e) {
          return (function t(e, n, i) {
            var r = i.type(n),
              o = (r && r.possibleLengths()) || i.possibleLengths();
            if (!o) return "IS_POSSIBLE";
            if ("FIXED_LINE_OR_MOBILE" === n) {
              if (!i.type("FIXED_LINE")) return t(e, "MOBILE", i);
              var a = i.type("MOBILE");
              a &&
                (o = (function (t, e) {
                  for (
                    var n,
                      i = t.slice(),
                      r = (function (t, e) {
                        var n =
                          ("undefined" != typeof Symbol &&
                            t[Symbol.iterator]) ||
                          t["@@iterator"];
                        if (n) return (n = n.call(t)).next.bind(n);
                        if (
                          Array.isArray(t) ||
                          (n = (function (t, e) {
                            if (t) {
                              if ("string" == typeof t) return j(t, e);
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
                                  ? j(t, e)
                                  : void 0
                              );
                            }
                          })(t))
                        ) {
                          n && (t = n);
                          var i = 0;
                          return function () {
                            return i >= t.length
                              ? { done: !0 }
                              : { done: !1, value: t[i++] };
                          };
                        }
                        throw new TypeError(
                          "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                        );
                      })(e);
                    !(n = r()).done;

                  ) {
                    var o = n.value;
                    t.indexOf(o) < 0 && i.push(o);
                  }
                  return i.sort(function (t, e) {
                    return t - e;
                  });
                })(o, a.possibleLengths()));
            } else if (n && !r) return "INVALID_LENGTH";
            var s = e.length,
              l = o[0];
            return l === s
              ? "IS_POSSIBLE"
              : l > s
              ? "TOO_SHORT"
              : o[o.length - 1] < s
              ? "TOO_LONG"
              : o.indexOf(s, 1) >= 0
              ? "IS_POSSIBLE"
              : "INVALID_LENGTH";
          })(t, void 0, e);
        }
        function R(t, e) {
          switch (P(t, e)) {
            case "IS_POSSIBLE":
              return !0;
            default:
              return !1;
          }
        }
        function I(t, e) {
          return (t = t || ""), new RegExp("^(?:" + e + ")$").test(t);
        }
        function W(t, e) {
          (null == e || e > t.length) && (e = t.length);
          for (var n = 0, i = new Array(e); n < e; n++) i[n] = t[n];
          return i;
        }
        var N = [
          "MOBILE",
          "PREMIUM_RATE",
          "TOLL_FREE",
          "SHARED_COST",
          "VOIP",
          "PERSONAL_NUMBER",
          "PAGER",
          "UAN",
          "VOICEMAIL",
        ];
        function B(t, e, n) {
          if (((e = e || {}), t.country)) {
            (n = new x(n)).selectNumberingPlan(t.country, t.countryCallingCode);
            var i = e.v2 ? t.nationalNumber : t.phone;
            if (I(i, n.nationalNumberPattern())) {
              if (F(i, "FIXED_LINE", n))
                return n.type("MOBILE") && "" === n.type("MOBILE").pattern()
                  ? "FIXED_LINE_OR_MOBILE"
                  : n.type("MOBILE")
                  ? F(i, "MOBILE", n)
                    ? "FIXED_LINE_OR_MOBILE"
                    : "FIXED_LINE"
                  : "FIXED_LINE_OR_MOBILE";
              for (
                var r,
                  o = (function (t, e) {
                    var n =
                      ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
                      t["@@iterator"];
                    if (n) return (n = n.call(t)).next.bind(n);
                    if (
                      Array.isArray(t) ||
                      (n = (function (t, e) {
                        if (t) {
                          if ("string" == typeof t) return W(t, e);
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
                              ? W(t, e)
                              : void 0
                          );
                        }
                      })(t))
                    ) {
                      n && (t = n);
                      var i = 0;
                      return function () {
                        return i >= t.length
                          ? { done: !0 }
                          : { done: !1, value: t[i++] };
                      };
                    }
                    throw new TypeError(
                      "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                    );
                  })(N);
                !(r = o()).done;

              ) {
                var a = r.value;
                if (F(i, a, n)) return a;
              }
            }
          }
        }
        function F(t, e, n) {
          return (
            !(!(e = n.type(e)) || !e.pattern()) &&
            !(
              e.possibleLengths() && e.possibleLengths().indexOf(t.length) < 0
            ) &&
            I(t, e.pattern())
          );
        }
        var $ = ""
          .concat("-‐-―−ー－")
          .concat("／/")
          .concat("．.")
          .concat("  ­​⁠　")
          .concat("()（）［］\\[\\]")
          .concat("~⁓∼～");
        function H(t) {
          return t.replace(new RegExp("[".concat($, "]+"), "g"), " ").trim();
        }
        var Y = /(\$\d)/;
        function U(t, e, n) {
          var i = n.useInternationalFormat,
            r = n.withNationalPrefix,
            o =
              (n.carrierCode,
              n.metadata,
              t.replace(
                new RegExp(e.pattern()),
                i
                  ? e.internationalFormat()
                  : r && e.nationalPrefixFormattingRule()
                  ? e.format().replace(Y, e.nationalPrefixFormattingRule())
                  : e.format()
              ));
          return i ? H(o) : o;
        }
        var X = /^[\d]+(?:[~\u2053\u223C\uFF5E][\d]+)?$/,
          V = function (t) {
            return "([".concat("0-9０-９٠-٩۰-۹", "]{1,").concat(t, "})");
          };
        function G(t) {
          return (
            ";ext=" +
            V("20") +
            "|[  \\t,]*(?:e?xt(?:ensi(?:ó?|ó))?n?|ｅ?ｘｔｎ?|доб|anexo)[:\\.．]?[  \\t,-]*" +
            V("20") +
            "#?|[  \\t,]*(?:[xｘ#＃~～]|int|ｉｎｔ)[:\\.．]?[  \\t,-]*" +
            V("9") +
            "#?|[- ]+" +
            V("6") +
            "#|[  \\t]*(?:,{2}|;)[:\\.．]?[  \\t,-]*" +
            V("15") +
            "#?|[  \\t]*(?:,)+[:\\.．]?[  \\t,-]*" +
            V("9") +
            "#?"
          );
        }
        var K =
            "[+＋]{0,1}(?:[" +
            $ +
            "]*[0-9０-９٠-٩۰-۹]){3,}[" +
            $ +
            "0-9０-９٠-٩۰-۹]*",
          Z = new RegExp(
            "^[+＋]{0,1}(?:[" + $ + "]*[0-9０-９٠-٩۰-۹]){1,2}$",
            "i"
          ),
          J = K + "(?:" + G() + ")?",
          Q = new RegExp("^[0-9０-９٠-٩۰-۹]{2}$|^" + J + "$", "i");
        function tt(t) {
          return t.length >= 2 && Q.test(t);
        }
        function et(t, e) {
          return (
            (function (t) {
              if (Array.isArray(t)) return t;
            })(t) ||
            (function (t, e) {
              var n =
                null == t
                  ? null
                  : ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
                    t["@@iterator"];
              if (null != n) {
                var i,
                  r,
                  o = [],
                  a = !0,
                  s = !1;
                try {
                  for (
                    n = n.call(t);
                    !(a = (i = n.next()).done) &&
                    (o.push(i.value), !e || o.length !== e);
                    a = !0
                  );
                } catch (t) {
                  (s = !0), (r = t);
                } finally {
                  try {
                    a || null == n.return || n.return();
                  } finally {
                    if (s) throw r;
                  }
                }
                return o;
              }
            })(t, e) ||
            nt(t, e) ||
            (function () {
              throw new TypeError(
                "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })()
          );
        }
        function nt(t, e) {
          if (t) {
            if ("string" == typeof t) return it(t, e);
            var n = Object.prototype.toString.call(t).slice(8, -1);
            return (
              "Object" === n && t.constructor && (n = t.constructor.name),
              "Map" === n || "Set" === n
                ? Array.from(t)
                : "Arguments" === n ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                ? it(t, e)
                : void 0
            );
          }
        }
        function it(t, e) {
          (null == e || e > t.length) && (e = t.length);
          for (var n = 0, i = new Array(e); n < e; n++) i[n] = t[n];
          return i;
        }
        function rt(t, e) {
          (null == e || e > t.length) && (e = t.length);
          for (var n = 0, i = new Array(e); n < e; n++) i[n] = t[n];
          return i;
        }
        function ot(t, e) {
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
        function at(t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {};
            e % 2
              ? ot(Object(n), !0).forEach(function (e) {
                  st(t, e, n[e]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
              : ot(Object(n)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(n, e)
                  );
                });
          }
          return t;
        }
        function st(t, e, n) {
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
        var lt = {
          formatExtension: function (t, e, n) {
            return "".concat(t).concat(n.ext()).concat(e);
          },
        };
        function ct(t, e, n, i, r) {
          var o = (function (t, e) {
            for (
              var n,
                i = (function (t, e) {
                  var n =
                    ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
                    t["@@iterator"];
                  if (n) return (n = n.call(t)).next.bind(n);
                  if (
                    Array.isArray(t) ||
                    (n = (function (t, e) {
                      if (t) {
                        if ("string" == typeof t) return rt(t, e);
                        var n = Object.prototype.toString.call(t).slice(8, -1);
                        return (
                          "Object" === n &&
                            t.constructor &&
                            (n = t.constructor.name),
                          "Map" === n || "Set" === n
                            ? Array.from(t)
                            : "Arguments" === n ||
                              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                            ? rt(t, e)
                            : void 0
                        );
                      }
                    })(t))
                  ) {
                    n && (t = n);
                    var i = 0;
                    return function () {
                      return i >= t.length
                        ? { done: !0 }
                        : { done: !1, value: t[i++] };
                    };
                  }
                  throw new TypeError(
                    "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                  );
                })(t);
              !(n = i()).done;

            ) {
              var r = n.value;
              if (r.leadingDigitsPatterns().length > 0) {
                var o =
                  r.leadingDigitsPatterns()[
                    r.leadingDigitsPatterns().length - 1
                  ];
                if (0 !== e.search(o)) continue;
              }
              if (I(e, r.pattern())) return r;
            }
          })(i.formats(), t);
          return o
            ? U(t, o, {
                useInternationalFormat: "INTERNATIONAL" === n,
                withNationalPrefix:
                  !o.nationalPrefixIsOptionalWhenFormattingInNationalFormat() ||
                  !r ||
                  !1 !== r.nationalPrefix,
                carrierCode: e,
                metadata: i,
              })
            : t;
        }
        function dt(t, e, n, i) {
          return e ? i(t, e, n) : t;
        }
        function ut(t, e) {
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
        function pt(t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {};
            e % 2
              ? ut(Object(n), !0).forEach(function (e) {
                  ht(t, e, n[e]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
              : ut(Object(n)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(n, e)
                  );
                });
          }
          return t;
        }
        function ht(t, e, n) {
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
        var ft = (function () {
            function t(e, n, i) {
              if (
                ((function (t, e) {
                  if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function");
                })(this, t),
                !e)
              )
                throw new TypeError(
                  "`country` or `countryCallingCode` not passed"
                );
              if (!n) throw new TypeError("`nationalNumber` not passed");
              if (!i) throw new TypeError("`metadata` not passed");
              var r = new x(i);
              bt(e) &&
                ((this.country = e),
                r.country(e),
                (e = r.countryCallingCode())),
                (this.countryCallingCode = e),
                (this.nationalNumber = n),
                (this.number =
                  "+" + this.countryCallingCode + this.nationalNumber),
                (this.metadata = i);
            }
            var e, n;
            return (
              (e = t),
              (n = [
                {
                  key: "setExt",
                  value: function (t) {
                    this.ext = t;
                  },
                },
                {
                  key: "isPossible",
                  value: function () {
                    return (function (t, e, n) {
                      if ((void 0 === e && (e = {}), (n = new x(n)), e.v2)) {
                        if (!t.countryCallingCode)
                          throw new Error("Invalid phone number object passed");
                        n.selectNumberingPlan(t.countryCallingCode);
                      } else {
                        if (!t.phone) return !1;
                        if (t.country) {
                          if (!n.hasCountry(t.country))
                            throw new Error(
                              "Unknown country: ".concat(t.country)
                            );
                          n.country(t.country);
                        } else {
                          if (!t.countryCallingCode)
                            throw new Error(
                              "Invalid phone number object passed"
                            );
                          n.selectNumberingPlan(t.countryCallingCode);
                        }
                      }
                      if (n.possibleLengths())
                        return R(t.phone || t.nationalNumber, n);
                      if (
                        t.countryCallingCode &&
                        n.isNonGeographicCallingCode(t.countryCallingCode)
                      )
                        return !0;
                      throw new Error(
                        'Missing "possibleLengths" in metadata. Perhaps the metadata has been generated before v1.0.18.'
                      );
                    })(this, { v2: !0 }, this.metadata);
                  },
                },
                {
                  key: "isValid",
                  value: function () {
                    return (
                      (t = this),
                      (e = { v2: !0 }),
                      (n = this.metadata),
                      (e = e || {}),
                      (n = new x(n)),
                      !!t.country &&
                        (n.selectNumberingPlan(t.country, t.countryCallingCode),
                        n.hasTypes()
                          ? void 0 !== B(t, e, n.metadata)
                          : I(
                              e.v2 ? t.nationalNumber : t.phone,
                              n.nationalNumberPattern()
                            ))
                    );
                    var t, e, n;
                  },
                },
                {
                  key: "isNonGeographic",
                  value: function () {
                    return new x(this.metadata).isNonGeographicCallingCode(
                      this.countryCallingCode
                    );
                  },
                },
                {
                  key: "isEqual",
                  value: function (t) {
                    return this.number === t.number && this.ext === t.ext;
                  },
                },
                {
                  key: "getType",
                  value: function () {
                    return B(this, { v2: !0 }, this.metadata);
                  },
                },
                {
                  key: "format",
                  value: function (t, e) {
                    return (function (t, e, n, i) {
                      if (
                        ((n = n ? at(at({}, lt), n) : lt),
                        (i = new x(i)),
                        t.country && "001" !== t.country)
                      ) {
                        if (!i.hasCountry(t.country))
                          throw new Error(
                            "Unknown country: ".concat(t.country)
                          );
                        i.country(t.country);
                      } else {
                        if (!t.countryCallingCode) return t.phone || "";
                        i.selectNumberingPlan(t.countryCallingCode);
                      }
                      var r,
                        o = i.countryCallingCode(),
                        a = n.v2 ? t.nationalNumber : t.phone;
                      switch (e) {
                        case "NATIONAL":
                          return a
                            ? dt(
                                (r = ct(a, t.carrierCode, "NATIONAL", i, n)),
                                t.ext,
                                i,
                                n.formatExtension
                              )
                            : "";
                        case "INTERNATIONAL":
                          return a
                            ? ((r = ct(a, null, "INTERNATIONAL", i, n)),
                              dt(
                                (r = "+".concat(o, " ").concat(r)),
                                t.ext,
                                i,
                                n.formatExtension
                              ))
                            : "+".concat(o);
                        case "E.164":
                          return "+".concat(o).concat(a);
                        case "RFC3966":
                          return (function (t) {
                            var e = t.number,
                              n = t.ext;
                            if (!e) return "";
                            if ("+" !== e[0])
                              throw new Error(
                                '"formatRFC3966()" expects "number" to be in E.164 format.'
                              );
                            return "tel:"
                              .concat(e)
                              .concat(n ? ";ext=" + n : "");
                          })({ number: "+".concat(o).concat(a), ext: t.ext });
                        case "IDD":
                          if (!n.fromCountry) return;
                          return dt(
                            (function (t, e, n, i, r) {
                              if (q(i, r.metadata) === n) {
                                var o = ct(t, e, "NATIONAL", r);
                                return "1" === n ? n + " " + o : o;
                              }
                              var a = (function (t, e, n) {
                                var i = new x(n);
                                return (
                                  i.selectNumberingPlan(t, void 0),
                                  i.defaultIDDPrefix()
                                    ? i.defaultIDDPrefix()
                                    : X.test(i.IDDPrefix())
                                    ? i.IDDPrefix()
                                    : void 0
                                );
                              })(i, 0, r.metadata);
                              if (a)
                                return ""
                                  .concat(a, " ")
                                  .concat(n, " ")
                                  .concat(ct(t, null, "INTERNATIONAL", r));
                            })(a, t.carrierCode, o, n.fromCountry, i),
                            t.ext,
                            i,
                            n.formatExtension
                          );
                        default:
                          throw new Error(
                            'Unknown "format" argument passed to "formatNumber()": "'.concat(
                              e,
                              '"'
                            )
                          );
                      }
                    })(
                      this,
                      t,
                      e ? pt(pt({}, e), {}, { v2: !0 }) : { v2: !0 },
                      this.metadata
                    );
                  },
                },
                {
                  key: "formatNational",
                  value: function (t) {
                    return this.format("NATIONAL", t);
                  },
                },
                {
                  key: "formatInternational",
                  value: function (t) {
                    return this.format("INTERNATIONAL", t);
                  },
                },
                {
                  key: "getURI",
                  value: function (t) {
                    return this.format("RFC3966", t);
                  },
                },
              ]) &&
                (function (t, e) {
                  for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    (i.enumerable = i.enumerable || !1),
                      (i.configurable = !0),
                      "value" in i && (i.writable = !0),
                      Object.defineProperty(t, i.key, i);
                  }
                })(e.prototype, n),
              Object.defineProperty(e, "prototype", { writable: !1 }),
              t
            );
          })(),
          bt = function (t) {
            return /^[A-Z]{2}$/.test(t);
          };
        function mt(t, e, n) {
          if (e[t]) return new ft(t, e[t], n);
        }
        function gt(t) {
          return (gt =
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
        function vt(t, e) {
          if (e && ("object" === gt(e) || "function" == typeof e)) return e;
          if (void 0 !== e)
            throw new TypeError(
              "Derived constructors may only return object or undefined"
            );
          return _t(t);
        }
        function _t(t) {
          if (void 0 === t)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return t;
        }
        function yt(t) {
          var e = "function" == typeof Map ? new Map() : void 0;
          return (yt = function (t) {
            if (
              null === t ||
              ((n = t),
              -1 === Function.toString.call(n).indexOf("[native code]"))
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
              return Mt(t, arguments, At(this).constructor);
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
              wt(i, t)
            );
          })(t);
        }
        function Mt(t, e, n) {
          return (Mt = Ot()
            ? Reflect.construct
            : function (t, e, n) {
                var i = [null];
                i.push.apply(i, e);
                var r = new (Function.bind.apply(t, i))();
                return n && wt(r, n.prototype), r;
              }).apply(null, arguments);
        }
        function Ot() {
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
        function wt(t, e) {
          return (wt =
            Object.setPrototypeOf ||
            function (t, e) {
              return (t.__proto__ = e), t;
            })(t, e);
        }
        function At(t) {
          return (At = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              })(t);
        }
        var xt = (function (t) {
            !(function (t, e) {
              if ("function" != typeof e && null !== e)
                throw new TypeError(
                  "Super expression must either be null or a function"
                );
              (t.prototype = Object.create(e && e.prototype, {
                constructor: { value: t, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                e && wt(t, e);
            })(o, t);
            var e,
              n,
              i,
              r =
                ((e = o),
                (n = Ot()),
                function () {
                  var t,
                    i = At(e);
                  if (n) {
                    var r = At(this).constructor;
                    t = Reflect.construct(i, arguments, r);
                  } else t = i.apply(this, arguments);
                  return vt(this, t);
                });
            function o(t) {
              var e;
              return (
                (function (t, e) {
                  if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function");
                })(this, o),
                (e = r.call(this, t)),
                Object.setPrototypeOf(_t(e), o.prototype),
                (e.name = e.constructor.name),
                e
              );
            }
            return (
              (i = o),
              Object.defineProperty(i, "prototype", { writable: !1 }),
              i
            );
          })(yt(Error)),
          zt = new RegExp("(?:" + G() + ")$", "i");
        function Ct(t, e) {
          (null == e || e > t.length) && (e = t.length);
          for (var n = 0, i = new Array(e); n < e; n++) i[n] = t[n];
          return i;
        }
        var kt = {
          0: "0",
          1: "1",
          2: "2",
          3: "3",
          4: "4",
          5: "5",
          6: "6",
          7: "7",
          8: "8",
          9: "9",
          "０": "0",
          "１": "1",
          "２": "2",
          "３": "3",
          "４": "4",
          "５": "5",
          "６": "6",
          "７": "7",
          "８": "8",
          "９": "9",
          "٠": "0",
          "١": "1",
          "٢": "2",
          "٣": "3",
          "٤": "4",
          "٥": "5",
          "٦": "6",
          "٧": "7",
          "٨": "8",
          "٩": "9",
          "۰": "0",
          "۱": "1",
          "۲": "2",
          "۳": "3",
          "۴": "4",
          "۵": "5",
          "۶": "6",
          "۷": "7",
          "۸": "8",
          "۹": "9",
        };
        function St(t) {
          return kt[t];
        }
        function Tt(t) {
          for (
            var e,
              n = "",
              i = (function (t, e) {
                var n =
                  ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
                  t["@@iterator"];
                if (n) return (n = n.call(t)).next.bind(n);
                if (
                  Array.isArray(t) ||
                  (n = (function (t, e) {
                    if (t) {
                      if ("string" == typeof t) return Ct(t, e);
                      var n = Object.prototype.toString.call(t).slice(8, -1);
                      return (
                        "Object" === n &&
                          t.constructor &&
                          (n = t.constructor.name),
                        "Map" === n || "Set" === n
                          ? Array.from(t)
                          : "Arguments" === n ||
                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                          ? Ct(t, e)
                          : void 0
                      );
                    }
                  })(t))
                ) {
                  n && (t = n);
                  var i = 0;
                  return function () {
                    return i >= t.length
                      ? { done: !0 }
                      : { done: !1, value: t[i++] };
                  };
                }
                throw new TypeError(
                  "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                );
              })(t.split(""));
            !(e = i()).done;

          ) {
            var r = St(e.value);
            r && (n += r);
          }
          return n;
        }
        function Dt(t, e) {
          (null == e || e > t.length) && (e = t.length);
          for (var n = 0, i = new Array(e); n < e; n++) i[n] = t[n];
          return i;
        }
        function Lt(t) {
          for (
            var e,
              n = "",
              i = (function (t, e) {
                var n =
                  ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
                  t["@@iterator"];
                if (n) return (n = n.call(t)).next.bind(n);
                if (
                  Array.isArray(t) ||
                  (n = (function (t, e) {
                    if (t) {
                      if ("string" == typeof t) return Dt(t, e);
                      var n = Object.prototype.toString.call(t).slice(8, -1);
                      return (
                        "Object" === n &&
                          t.constructor &&
                          (n = t.constructor.name),
                        "Map" === n || "Set" === n
                          ? Array.from(t)
                          : "Arguments" === n ||
                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                          ? Dt(t, e)
                          : void 0
                      );
                    }
                  })(t))
                ) {
                  n && (t = n);
                  var i = 0;
                  return function () {
                    return i >= t.length
                      ? { done: !0 }
                      : { done: !1, value: t[i++] };
                  };
                }
                throw new TypeError(
                  "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                );
              })(t.split(""));
            !(e = i()).done;

          )
            n += qt(e.value, n) || "";
          return n;
        }
        function qt(t, e) {
          if ("+" === t) {
            if (e) return;
            return "+";
          }
          return St(t);
        }
        var Et = new RegExp("([0-9０-９٠-٩۰-۹])");
        function jt(t, e, n, i) {
          if (e) {
            var r = new x(i);
            r.selectNumberingPlan(e, n);
            var o = new RegExp(r.IDDPrefix());
            if (0 === t.search(o)) {
              var a = (t = t.slice(t.match(o)[0].length)).match(Et);
              if (!(a && null != a[1] && a[1].length > 0 && "0" === a[1]))
                return t;
            }
          }
        }
        function Pt(t, e) {
          if (t && e.numberingPlan.nationalPrefixForParsing()) {
            var n = new RegExp(
                "^(?:" + e.numberingPlan.nationalPrefixForParsing() + ")"
              ),
              i = n.exec(t);
            if (i) {
              var r,
                o,
                a,
                s = i.length - 1,
                l = s > 0 && i[s];
              if (e.nationalPrefixTransformRule() && l)
                (r = t.replace(n, e.nationalPrefixTransformRule())),
                  s > 1 && (o = i[1]);
              else {
                var c = i[0];
                (r = t.slice(c.length)), l && (o = i[1]);
              }
              if (l) {
                var d = t.indexOf(i[1]);
                t.slice(0, d) === e.numberingPlan.nationalPrefix() &&
                  (a = e.numberingPlan.nationalPrefix());
              } else a = i[0];
              return { nationalNumber: r, nationalPrefix: a, carrierCode: o };
            }
          }
          return { nationalNumber: t };
        }
        function Rt(t, e) {
          var n = Pt(t, e),
            i = n.carrierCode,
            r = n.nationalNumber;
          if (r !== t) {
            if (
              !(function (t, e, n) {
                return !(
                  I(t, n.nationalNumberPattern()) &&
                  !I(e, n.nationalNumberPattern())
                );
              })(t, r, e)
            )
              return { nationalNumber: t };
            if (
              e.possibleLengths() &&
              !(function (t, e) {
                switch (P(t, e)) {
                  case "TOO_SHORT":
                  case "INVALID_LENGTH":
                    return !1;
                  default:
                    return !0;
                }
              })(r, e)
            )
              return { nationalNumber: t };
          }
          return { nationalNumber: r, carrierCode: i };
        }
        function It(t, e, n, i) {
          var r = e ? q(e, i) : n;
          if (0 === t.indexOf(r)) {
            (i = new x(i)).selectNumberingPlan(e, n);
            var o = t.slice(r.length),
              a = Rt(o, i).nationalNumber,
              s = Rt(t, i).nationalNumber;
            if (
              (!I(s, i.nationalNumberPattern()) &&
                I(a, i.nationalNumberPattern())) ||
              "TOO_LONG" === P(s, i)
            )
              return { countryCallingCode: r, number: o };
          }
          return { number: t };
        }
        function Wt(t, e, n, i) {
          if (!t) return {};
          if ("+" !== t[0]) {
            var r = jt(t, e, n, i);
            if (!r || r === t) {
              if (e || n) {
                var o = It(t, e, n, i),
                  a = o.countryCallingCode,
                  s = o.number;
                if (a) return { countryCallingCode: a, number: s };
              }
              return { number: t };
            }
            t = "+" + r;
          }
          if ("0" === t[1]) return {};
          i = new x(i);
          for (var l = 2; l - 1 <= 3 && l <= t.length; ) {
            var c = t.slice(1, l);
            if (i.hasCallingCode(c))
              return (
                i.selectNumberingPlan(c),
                { countryCallingCode: c, number: t.slice(l) }
              );
            l++;
          }
          return {};
        }
        function Nt(t, e) {
          (null == e || e > t.length) && (e = t.length);
          for (var n = 0, i = new Array(e); n < e; n++) i[n] = t[n];
          return i;
        }
        function Bt(t, e, n) {
          var i = n.getCountryCodesForCallingCode(t);
          if (i)
            return 1 === i.length
              ? i[0]
              : (function (t, e, n) {
                  n = new x(n);
                  for (
                    var i,
                      r = (function (t, e) {
                        var n =
                          ("undefined" != typeof Symbol &&
                            t[Symbol.iterator]) ||
                          t["@@iterator"];
                        if (n) return (n = n.call(t)).next.bind(n);
                        if (
                          Array.isArray(t) ||
                          (n = (function (t, e) {
                            if (t) {
                              if ("string" == typeof t) return Nt(t, e);
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
                                  ? Nt(t, e)
                                  : void 0
                              );
                            }
                          })(t))
                        ) {
                          n && (t = n);
                          var i = 0;
                          return function () {
                            return i >= t.length
                              ? { done: !0 }
                              : { done: !1, value: t[i++] };
                          };
                        }
                        throw new TypeError(
                          "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                        );
                      })(t);
                    !(i = r()).done;

                  ) {
                    var o = i.value;
                    if ((n.country(o), n.leadingDigits())) {
                      if (e && 0 === e.search(n.leadingDigits())) return o;
                    } else if (B({ phone: e, country: o }, void 0, n.metadata))
                      return o;
                  }
                })(i, e, n.metadata);
        }
        var Ft = new RegExp("[+＋0-9０-９٠-٩۰-۹]"),
          $t = new RegExp("[^0-9０-９٠-٩۰-۹#]+$");
        function Ht(t, e) {
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
        function Yt(t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {};
            e % 2
              ? Ht(Object(n), !0).forEach(function (e) {
                  Ut(t, e, n[e]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
              : Ht(Object(n)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(n, e)
                  );
                });
          }
          return t;
        }
        function Ut(t, e, n) {
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
        function Xt(t) {
          return (Xt =
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
        function Vt(t, e) {
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
        function Gt(t, e, n) {
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
        function Kt(t, e) {
          (null == e || e > t.length) && (e = t.length);
          for (var n = 0, i = new Array(e); n < e; n++) i[n] = t[n];
          return i;
        }
        function Zt(t) {
          var e,
            n,
            i,
            r = (function (t, e) {
              return (
                (function (t) {
                  if (Array.isArray(t)) return t;
                })(t) ||
                (function (t, e) {
                  var n =
                    null == t
                      ? null
                      : ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
                        t["@@iterator"];
                  if (null != n) {
                    var i,
                      r,
                      o = [],
                      a = !0,
                      s = !1;
                    try {
                      for (
                        n = n.call(t);
                        !(a = (i = n.next()).done) &&
                        (o.push(i.value), 4 !== o.length);
                        a = !0
                      );
                    } catch (t) {
                      (s = !0), (r = t);
                    } finally {
                      try {
                        a || null == n.return || n.return();
                      } finally {
                        if (s) throw r;
                      }
                    }
                    return o;
                  }
                })(t) ||
                (function (t, e) {
                  if (t) {
                    if ("string" == typeof t) return Kt(t, 4);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    return (
                      "Object" === n &&
                        t.constructor &&
                        (n = t.constructor.name),
                      "Map" === n || "Set" === n
                        ? Array.from(t)
                        : "Arguments" === n ||
                          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                        ? Kt(t, 4)
                        : void 0
                    );
                  }
                })(t) ||
                (function () {
                  throw new TypeError(
                    "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                  );
                })()
              );
            })(Array.prototype.slice.call(t)),
            o = r[0],
            a = r[1],
            s = r[2],
            l = r[3];
          if ("string" != typeof o)
            throw new TypeError("A text for parsing must be a string.");
          if (((e = o), a && "string" != typeof a)) {
            if (!Jt(a)) throw new Error("Invalid second argument: ".concat(a));
            s ? ((n = a), (i = s)) : (i = a);
          } else
            l ? ((n = s), (i = l)) : ((n = void 0), (i = s)),
              a &&
                (n = (function (t) {
                  for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2
                      ? Vt(Object(n), !0).forEach(function (e) {
                          Gt(t, e, n[e]);
                        })
                      : Object.getOwnPropertyDescriptors
                      ? Object.defineProperties(
                          t,
                          Object.getOwnPropertyDescriptors(n)
                        )
                      : Vt(Object(n)).forEach(function (e) {
                          Object.defineProperty(
                            t,
                            e,
                            Object.getOwnPropertyDescriptor(n, e)
                          );
                        });
                  }
                  return t;
                })({ defaultCountry: a }, n));
          return { text: e, options: n, metadata: i };
        }
        var Jt = function (t) {
          return "object" === Xt(t);
        };
        function Qt(t, e) {
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
        function te(t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {};
            e % 2
              ? Qt(Object(n), !0).forEach(function (e) {
                  ee(t, e, n[e]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
              : Qt(Object(n)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(n, e)
                  );
                });
          }
          return t;
        }
        function ee(t, e, n) {
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
        function ne(t, e, n) {
          e &&
            e.defaultCountry &&
            !(function (t, e) {
              return void 0 !== e.countries[t];
            })(e.defaultCountry, n) &&
            (e = te(te({}, e), {}, { defaultCountry: void 0 }));
          try {
            return (function (t, e, n) {
              return (function (t, e, n) {
                if (
                  ((e = e || {}),
                  (n = new x(n)),
                  e.defaultCountry && !n.hasCountry(e.defaultCountry))
                ) {
                  if (e.v2) throw new xt("INVALID_COUNTRY");
                  throw new Error("Unknown country: ".concat(e.defaultCountry));
                }
                var i = (function (t, e, n) {
                    if (t && 0 === t.indexOf("tel:"))
                      return (function (t) {
                        for (
                          var e,
                            n,
                            i,
                            r = (function (t, e) {
                              var n =
                                ("undefined" != typeof Symbol &&
                                  t[Symbol.iterator]) ||
                                t["@@iterator"];
                              if (n) return (n = n.call(t)).next.bind(n);
                              if (Array.isArray(t) || (n = nt(t))) {
                                n && (t = n);
                                var i = 0;
                                return function () {
                                  return i >= t.length
                                    ? { done: !0 }
                                    : { done: !1, value: t[i++] };
                                };
                              }
                              throw new TypeError(
                                "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                              );
                            })((t = t.replace(/^tel:/, "tel=")).split(";"));
                          !(i = r()).done;

                        ) {
                          var o = et(i.value.split("="), 2),
                            a = o[0],
                            s = o[1];
                          switch (a) {
                            case "tel":
                              e = s;
                              break;
                            case "ext":
                              n = s;
                              break;
                            case "phone-context":
                              "+" === s[0] && (e = s + e);
                          }
                        }
                        if (!tt(e)) return {};
                        var l = { number: e };
                        return n && (l.ext = n), l;
                      })(t);
                    var i = (function (t, e, n) {
                      if (t)
                        if (t.length > 250) {
                          if (n) throw new xt("TOO_LONG");
                        } else {
                          if (!1 === e) return t;
                          var i = t.search(Ft);
                          if (!(i < 0)) return t.slice(i).replace($t, "");
                        }
                    })(t, n, e);
                    if (!i) return {};
                    if (!tt(i))
                      return (function (t) {
                        return Z.test(t);
                      })(i)
                        ? { error: "TOO_SHORT" }
                        : {};
                    var r = (function (t) {
                      var e = t.search(zt);
                      if (e < 0) return {};
                      for (
                        var n = t.slice(0, e), i = t.match(zt), r = 1;
                        r < i.length;

                      ) {
                        if (i[r]) return { number: n, ext: i[r] };
                        r++;
                      }
                    })(i);
                    return r.ext ? r : { number: i };
                  })(t, e.v2, e.extract),
                  r = i.number,
                  o = i.ext,
                  a = i.error;
                if (!r) {
                  if (e.v2) {
                    if ("TOO_SHORT" === a) throw new xt("TOO_SHORT");
                    throw new xt("NOT_A_NUMBER");
                  }
                  return {};
                }
                var s = (function (t, e, n, i) {
                    var r,
                      o = Wt(Lt(t), e, n, i.metadata),
                      a = o.countryCallingCode,
                      s = o.number;
                    if (a) i.selectNumberingPlan(a);
                    else {
                      if (!s || (!e && !n)) return {};
                      i.selectNumberingPlan(e, n),
                        e && (r = e),
                        (a = n || q(e, i.metadata));
                    }
                    if (!s) return { countryCallingCode: a };
                    var l = Rt(Lt(s), i),
                      c = l.nationalNumber,
                      d = l.carrierCode,
                      u = Bt(a, c, i);
                    return (
                      u && ((r = u), "001" === u || i.country(r)),
                      {
                        country: r,
                        countryCallingCode: a,
                        nationalNumber: c,
                        carrierCode: d,
                      }
                    );
                  })(r, e.defaultCountry, e.defaultCallingCode, n),
                  l = s.country,
                  c = s.nationalNumber,
                  d = s.countryCallingCode,
                  u = s.carrierCode;
                if (!n.hasSelectedNumberingPlan()) {
                  if (e.v2) throw new xt("INVALID_COUNTRY");
                  return {};
                }
                if (!c || c.length < 2) {
                  if (e.v2) throw new xt("TOO_SHORT");
                  return {};
                }
                if (c.length > 17) {
                  if (e.v2) throw new xt("TOO_LONG");
                  return {};
                }
                if (e.v2) {
                  var p = new ft(d, c, n.metadata);
                  return (
                    l && (p.country = l),
                    u && (p.carrierCode = u),
                    o && (p.ext = o),
                    p
                  );
                }
                var h =
                  !!(e.extended ? n.hasSelectedNumberingPlan() : l) &&
                  I(c, n.nationalNumberPattern());
                return e.extended
                  ? {
                      country: l,
                      countryCallingCode: d,
                      carrierCode: u,
                      valid: h,
                      possible:
                        !!h ||
                        !(
                          !0 !== e.extended ||
                          !n.possibleLengths() ||
                          !R(c, n)
                        ),
                      phone: c,
                      ext: o,
                    }
                  : h
                  ? (function (t, e, n) {
                      var i = { country: t, phone: e };
                      return n && (i.ext = n), i;
                    })(l, c, o)
                  : {};
              })(t, Yt(Yt({}, e), {}, { v2: !0 }), n);
            })(t, e, n);
          } catch (t) {
            if (!(t instanceof xt)) throw t;
          }
        }
        function ie() {
          var t = Zt(arguments),
            e = t.text,
            n = t.options,
            i = t.metadata;
          return ne(e, n, i);
        }
        function re() {
          return v(ie, arguments);
        }
        var oe = (function () {
          function t(e) {
            var n = e.onCountryChange,
              i = e.onCallingCodeChange;
            !(function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
              (this.onCountryChange = n),
              (this.onCallingCodeChange = i);
          }
          var e, n;
          return (
            (e = t),
            (n = [
              {
                key: "reset",
                value: function (t, e) {
                  (this.international = !1),
                    (this.IDDPrefix = void 0),
                    (this.missingPlus = void 0),
                    (this.callingCode = void 0),
                    (this.digits = ""),
                    this.resetNationalSignificantNumber(),
                    this.initCountryAndCallingCode(t, e);
                },
              },
              {
                key: "resetNationalSignificantNumber",
                value: function () {
                  (this.nationalSignificantNumber = this.getNationalDigits()),
                    (this.nationalSignificantNumberMatchesInput = !0),
                    (this.nationalPrefix = void 0),
                    (this.carrierCode = void 0),
                    (this.complexPrefixBeforeNationalSignificantNumber =
                      void 0);
                },
              },
              {
                key: "update",
                value: function (t) {
                  for (var e = 0, n = Object.keys(t); e < n.length; e++) {
                    var i = n[e];
                    this[i] = t[i];
                  }
                },
              },
              {
                key: "initCountryAndCallingCode",
                value: function (t, e) {
                  this.setCountry(t), this.setCallingCode(e);
                },
              },
              {
                key: "setCountry",
                value: function (t) {
                  (this.country = t), this.onCountryChange(t);
                },
              },
              {
                key: "setCallingCode",
                value: function (t) {
                  (this.callingCode = t),
                    this.onCallingCodeChange(t, this.country);
                },
              },
              {
                key: "startInternationalNumber",
                value: function (t, e) {
                  (this.international = !0),
                    this.initCountryAndCallingCode(t, e);
                },
              },
              {
                key: "appendDigits",
                value: function (t) {
                  this.digits += t;
                },
              },
              {
                key: "appendNationalSignificantNumberDigits",
                value: function (t) {
                  this.nationalSignificantNumber += t;
                },
              },
              {
                key: "getNationalDigits",
                value: function () {
                  return this.international
                    ? this.digits.slice(
                        (this.IDDPrefix ? this.IDDPrefix.length : 0) +
                          (this.callingCode ? this.callingCode.length : 0)
                      )
                    : this.digits;
                },
              },
              {
                key: "getDigitsWithoutInternationalPrefix",
                value: function () {
                  return this.international && this.IDDPrefix
                    ? this.digits.slice(this.IDDPrefix.length)
                    : this.digits;
                },
              },
            ]) &&
              (function (t, e) {
                for (var n = 0; n < e.length; n++) {
                  var i = e[n];
                  (i.enumerable = i.enumerable || !1),
                    (i.configurable = !0),
                    "value" in i && (i.writable = !0),
                    Object.defineProperty(t, i.key, i);
                }
              })(e.prototype, n),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            t
          );
        })();
        function ae(t, e) {
          (null == e || e > t.length) && (e = t.length);
          for (var n = 0, i = new Array(e); n < e; n++) i[n] = t[n];
          return i;
        }
        var se = new RegExp("x");
        function le(t, e) {
          if (e < 1) return "";
          for (var n = ""; e > 1; ) 1 & e && (n += t), (e >>= 1), (t += t);
          return n + t;
        }
        function ce(t, e) {
          return (
            ")" === t[e] && e++,
            (function (t) {
              for (var e = [], n = 0; n < t.length; )
                "(" === t[n] ? e.push(n) : ")" === t[n] && e.pop(), n++;
              var i = 0,
                r = "";
              e.push(t.length);
              for (var o = 0, a = e; o < a.length; o++) {
                var s = a[o];
                (r += t.slice(i, s)), (i = s + 1);
              }
              return r;
            })(t.slice(0, e))
          );
        }
        function de(t, e, n) {
          var i = n.metadata,
            r = n.shouldTryNationalPrefixFormattingRule,
            o = n.getSeparatorAfterNationalPrefix;
          if (
            new RegExp("^(?:".concat(e.pattern(), ")$")).test(
              t.nationalSignificantNumber
            )
          )
            return (function (t, e, n) {
              var i = n.metadata,
                r = n.shouldTryNationalPrefixFormattingRule,
                o = n.getSeparatorAfterNationalPrefix;
              if (
                (t.nationalSignificantNumber,
                t.international,
                t.nationalPrefix,
                t.carrierCode,
                r(e))
              ) {
                var a = ue(t, e, {
                  useNationalPrefixFormattingRule: !0,
                  getSeparatorAfterNationalPrefix: o,
                  metadata: i,
                });
                if (a) return a;
              }
              return ue(t, e, {
                useNationalPrefixFormattingRule: !1,
                getSeparatorAfterNationalPrefix: o,
                metadata: i,
              });
            })(t, e, {
              metadata: i,
              shouldTryNationalPrefixFormattingRule: r,
              getSeparatorAfterNationalPrefix: o,
            });
        }
        function ue(t, e, n) {
          var i = n.metadata,
            r = n.useNationalPrefixFormattingRule,
            o = n.getSeparatorAfterNationalPrefix,
            a = U(t.nationalSignificantNumber, e, {
              carrierCode: t.carrierCode,
              useInternationalFormat: t.international,
              withNationalPrefix: r,
              metadata: i,
            });
          if (
            (r ||
              (t.nationalPrefix
                ? (a = t.nationalPrefix + o(e) + a)
                : t.complexPrefixBeforeNationalSignificantNumber &&
                  (a =
                    t.complexPrefixBeforeNationalSignificantNumber + " " + a)),
            (function (t, e) {
              return Tt(t) === e.getNationalDigits();
            })(a, t))
          )
            return a;
        }
        var pe = (function () {
          function t() {
            !(function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, t);
          }
          var e, n;
          return (
            (e = t),
            (n = [
              {
                key: "parse",
                value: function (t) {
                  if (
                    ((this.context = [{ or: !0, instructions: [] }]),
                    this.parsePattern(t),
                    1 !== this.context.length)
                  )
                    throw new Error(
                      "Non-finalized contexts left when pattern parse ended"
                    );
                  var e = this.context[0],
                    n = e.branches,
                    i = e.instructions;
                  if (n) return { op: "|", args: n.concat([me(i)]) };
                  if (0 === i.length) throw new Error("Pattern is required");
                  return 1 === i.length ? i[0] : i;
                },
              },
              {
                key: "startContext",
                value: function (t) {
                  this.context.push(t);
                },
              },
              {
                key: "endContext",
                value: function () {
                  this.context.pop();
                },
              },
              {
                key: "getContext",
                value: function () {
                  return this.context[this.context.length - 1];
                },
              },
              {
                key: "parsePattern",
                value: function (t) {
                  if (!t) throw new Error("Pattern is required");
                  var e = t.match(be);
                  if (e) {
                    var n = e[1],
                      i = t.slice(0, e.index),
                      r = t.slice(e.index + n.length);
                    switch (n) {
                      case "(?:":
                        i && this.parsePattern(i),
                          this.startContext({
                            or: !0,
                            instructions: [],
                            branches: [],
                          });
                        break;
                      case ")":
                        if (!this.getContext().or)
                          throw new Error(
                            '")" operator must be preceded by "(?:" operator'
                          );
                        if (
                          (i && this.parsePattern(i),
                          0 === this.getContext().instructions.length)
                        )
                          throw new Error(
                            'No instructions found after "|" operator in an "or" group'
                          );
                        var o = this.getContext().branches;
                        o.push(me(this.getContext().instructions)),
                          this.endContext(),
                          this.getContext().instructions.push({
                            op: "|",
                            args: o,
                          });
                        break;
                      case "|":
                        if (!this.getContext().or)
                          throw new Error(
                            '"|" operator can only be used inside "or" groups'
                          );
                        if (
                          (i && this.parsePattern(i),
                          !this.getContext().branches)
                        ) {
                          if (1 !== this.context.length)
                            throw new Error(
                              '"branches" not found in an "or" group context'
                            );
                          this.getContext().branches = [];
                        }
                        this.getContext().branches.push(
                          me(this.getContext().instructions)
                        ),
                          (this.getContext().instructions = []);
                        break;
                      case "[":
                        i && this.parsePattern(i),
                          this.startContext({ oneOfSet: !0 });
                        break;
                      case "]":
                        if (!this.getContext().oneOfSet)
                          throw new Error(
                            '"]" operator must be preceded by "[" operator'
                          );
                        this.endContext(),
                          this.getContext().instructions.push({
                            op: "[]",
                            args: he(i),
                          });
                        break;
                      default:
                        throw new Error("Unknown operator: ".concat(n));
                    }
                    r && this.parsePattern(r);
                  } else {
                    if (fe.test(t))
                      throw new Error(
                        "Illegal characters found in a pattern: ".concat(t)
                      );
                    this.getContext().instructions =
                      this.getContext().instructions.concat(t.split(""));
                  }
                },
              },
            ]) &&
              (function (t, e) {
                for (var n = 0; n < e.length; n++) {
                  var i = e[n];
                  (i.enumerable = i.enumerable || !1),
                    (i.configurable = !0),
                    "value" in i && (i.writable = !0),
                    Object.defineProperty(t, i.key, i);
                }
              })(e.prototype, n),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            t
          );
        })();
        function he(t) {
          for (var e = [], n = 0; n < t.length; ) {
            if ("-" === t[n]) {
              if (0 === n || n === t.length - 1)
                throw new Error(
                  "Couldn't parse a one-of set pattern: ".concat(t)
                );
              for (
                var i = t[n - 1].charCodeAt(0) + 1,
                  r = t[n + 1].charCodeAt(0) - 1,
                  o = i;
                o <= r;

              )
                e.push(String.fromCharCode(o)), o++;
            } else e.push(t[n]);
            n++;
          }
          return e;
        }
        var fe = /[\(\)\[\]\?\:\|]/,
          be = new RegExp("(\\||\\(\\?\\:|\\)|\\[|\\])");
        function me(t) {
          return 1 === t.length ? t[0] : t;
        }
        function ge(t, e) {
          var n =
            ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
            t["@@iterator"];
          if (n) return (n = n.call(t)).next.bind(n);
          if (
            Array.isArray(t) ||
            (n = (function (t, e) {
              if (t) {
                if ("string" == typeof t) return ve(t, e);
                var n = Object.prototype.toString.call(t).slice(8, -1);
                return (
                  "Object" === n && t.constructor && (n = t.constructor.name),
                  "Map" === n || "Set" === n
                    ? Array.from(t)
                    : "Arguments" === n ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? ve(t, e)
                    : void 0
                );
              }
            })(t)) ||
            (e && t && "number" == typeof t.length)
          ) {
            n && (t = n);
            var i = 0;
            return function () {
              return i >= t.length ? { done: !0 } : { done: !1, value: t[i++] };
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        function ve(t, e) {
          (null == e || e > t.length) && (e = t.length);
          for (var n = 0, i = new Array(e); n < e; n++) i[n] = t[n];
          return i;
        }
        var _e = (function () {
          function t(e) {
            !(function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
              (this.matchTree = new pe().parse(e));
          }
          var e, n;
          return (
            (e = t),
            (n = [
              {
                key: "match",
                value: function (t) {
                  var e =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {},
                    n = e.allowOverflow;
                  if (!t) throw new Error("String is required");
                  var i = ye(t.split(""), this.matchTree, !0);
                  if (
                    (i && i.match && delete i.matchedChars,
                    !i || !i.overflow || n)
                  )
                    return i;
                },
              },
            ]) &&
              (function (t, e) {
                for (var n = 0; n < e.length; n++) {
                  var i = e[n];
                  (i.enumerable = i.enumerable || !1),
                    (i.configurable = !0),
                    "value" in i && (i.writable = !0),
                    Object.defineProperty(t, i.key, i);
                }
              })(e.prototype, n),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            t
          );
        })();
        function ye(t, e, n) {
          if ("string" == typeof e) {
            var i = t.join("");
            return 0 === e.indexOf(i)
              ? t.length === e.length
                ? { match: !0, matchedChars: t }
                : { partialMatch: !0 }
              : 0 === i.indexOf(e)
              ? n && t.length > e.length
                ? { overflow: !0 }
                : { match: !0, matchedChars: t.slice(0, e.length) }
              : void 0;
          }
          if (Array.isArray(e)) {
            for (var r = t.slice(), o = 0; o < e.length; ) {
              var a = ye(r, e[o], n && o === e.length - 1);
              if (!a) return;
              if (a.overflow) return a;
              if (!a.match) {
                if (a.partialMatch) return { partialMatch: !0 };
                throw new Error(
                  "Unsupported match result:\n".concat(
                    JSON.stringify(a, null, 2)
                  )
                );
              }
              if (0 === (r = r.slice(a.matchedChars.length)).length)
                return o === e.length - 1
                  ? { match: !0, matchedChars: t }
                  : { partialMatch: !0 };
              o++;
            }
            return n
              ? { overflow: !0 }
              : { match: !0, matchedChars: t.slice(0, t.length - r.length) };
          }
          switch (e.op) {
            case "|":
              for (var s, l, c = ge(e.args); !(l = c()).done; ) {
                var d = ye(t, l.value, n);
                if (d) {
                  if (d.overflow) return d;
                  if (d.match)
                    return { match: !0, matchedChars: d.matchedChars };
                  if (!d.partialMatch)
                    throw new Error(
                      "Unsupported match result:\n".concat(
                        JSON.stringify(d, null, 2)
                      )
                    );
                  s = !0;
                }
              }
              return s ? { partialMatch: !0 } : void 0;
            case "[]":
              for (var u, p = ge(e.args); !(u = p()).done; ) {
                var h = u.value;
                if (t[0] === h)
                  return 1 === t.length
                    ? { match: !0, matchedChars: t }
                    : n
                    ? { overflow: !0 }
                    : { match: !0, matchedChars: [h] };
              }
              return;
            default:
              throw new Error("Unsupported instruction tree: ".concat(e));
          }
        }
        function Me(t, e) {
          var n =
            ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
            t["@@iterator"];
          if (n) return (n = n.call(t)).next.bind(n);
          if (
            Array.isArray(t) ||
            (n = (function (t, e) {
              if (t) {
                if ("string" == typeof t) return Oe(t, e);
                var n = Object.prototype.toString.call(t).slice(8, -1);
                return (
                  "Object" === n && t.constructor && (n = t.constructor.name),
                  "Map" === n || "Set" === n
                    ? Array.from(t)
                    : "Arguments" === n ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? Oe(t, e)
                    : void 0
                );
              }
            })(t)) ||
            (e && t && "number" == typeof t.length)
          ) {
            n && (t = n);
            var i = 0;
            return function () {
              return i >= t.length ? { done: !0 } : { done: !1, value: t[i++] };
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        function Oe(t, e) {
          (null == e || e > t.length) && (e = t.length);
          for (var n = 0, i = new Array(e); n < e; n++) i[n] = t[n];
          return i;
        }
        var we = le("9", 15),
          Ae = /[- ]/,
          xe = new RegExp("[" + $ + "]*\\$1[" + $ + "]*(\\$\\d[" + $ + "]*)*$"),
          ze = (function () {
            function t(e) {
              e.state;
              var n = e.metadata;
              !(function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, t),
                (this.metadata = n),
                this.resetFormat();
            }
            var e, n;
            return (
              (e = t),
              (n = [
                {
                  key: "resetFormat",
                  value: function () {
                    (this.chosenFormat = void 0),
                      (this.template = void 0),
                      (this.nationalNumberTemplate = void 0),
                      (this.populatedNationalNumberTemplate = void 0),
                      (this.populatedNationalNumberTemplatePosition = -1);
                  },
                },
                {
                  key: "reset",
                  value: function (t, e) {
                    this.resetFormat(),
                      t
                        ? ((this.isNANP = "1" === t.callingCode()),
                          (this.matchingFormats = t.formats()),
                          e.nationalSignificantNumber &&
                            this.narrowDownMatchingFormats(e))
                        : ((this.isNANP = void 0), (this.matchingFormats = []));
                  },
                },
                {
                  key: "format",
                  value: function (t, e) {
                    var n = this;
                    if (
                      "IS_POSSIBLE" ===
                      P(e.nationalSignificantNumber, this.metadata)
                    )
                      for (
                        var i, r = Me(this.matchingFormats);
                        !(i = r()).done;

                      ) {
                        var o = i.value,
                          a = de(e, o, {
                            metadata: this.metadata,
                            shouldTryNationalPrefixFormattingRule: function (
                              t
                            ) {
                              return n.shouldTryNationalPrefixFormattingRule(
                                t,
                                {
                                  international: e.international,
                                  nationalPrefix: e.nationalPrefix,
                                }
                              );
                            },
                            getSeparatorAfterNationalPrefix: function (t) {
                              return n.getSeparatorAfterNationalPrefix(t);
                            },
                          });
                        if (a)
                          return (
                            this.resetFormat(),
                            (this.chosenFormat = o),
                            this.setNationalNumberTemplate(
                              a.replace(/\d/g, "x"),
                              e
                            ),
                            (this.populatedNationalNumberTemplate = a),
                            (this.populatedNationalNumberTemplatePosition =
                              this.template.lastIndexOf("x")),
                            a
                          );
                      }
                    return this.formatNationalNumberWithNextDigits(t, e);
                  },
                },
                {
                  key: "formatNationalNumberWithNextDigits",
                  value: function (t, e) {
                    var n = this.chosenFormat,
                      i = this.chooseFormat(e);
                    if (i)
                      return i === n
                        ? this.formatNextNationalNumberDigits(t)
                        : this.formatNextNationalNumberDigits(
                            e.getNationalDigits()
                          );
                  },
                },
                {
                  key: "narrowDownMatchingFormats",
                  value: function (t) {
                    var e = this,
                      n = t.nationalSignificantNumber,
                      i = t.nationalPrefix,
                      r = t.international,
                      o = n,
                      a = o.length - 3;
                    a < 0 && (a = 0),
                      (this.matchingFormats = this.matchingFormats.filter(
                        function (t) {
                          return (
                            e.formatSuits(t, r, i) && e.formatMatches(t, o, a)
                          );
                        }
                      )),
                      this.chosenFormat &&
                        -1 ===
                          this.matchingFormats.indexOf(this.chosenFormat) &&
                        this.resetFormat();
                  },
                },
                {
                  key: "formatSuits",
                  value: function (t, e, n) {
                    return !(
                      (n &&
                        !t.usesNationalPrefix() &&
                        !t.nationalPrefixIsOptionalWhenFormattingInNationalFormat()) ||
                      (!e &&
                        !n &&
                        t.nationalPrefixIsMandatoryWhenFormattingInNationalFormat())
                    );
                  },
                },
                {
                  key: "formatMatches",
                  value: function (t, e, n) {
                    var i = t.leadingDigitsPatterns().length;
                    if (0 === i) return !0;
                    n = Math.min(n, i - 1);
                    var r = t.leadingDigitsPatterns()[n];
                    if (e.length < 3)
                      try {
                        return (
                          void 0 !== new _e(r).match(e, { allowOverflow: !0 })
                        );
                      } catch (t) {
                        return !0;
                      }
                    return new RegExp("^(".concat(r, ")")).test(e);
                  },
                },
                {
                  key: "getFormatFormat",
                  value: function (t, e) {
                    return e ? t.internationalFormat() : t.format();
                  },
                },
                {
                  key: "chooseFormat",
                  value: function (t) {
                    for (
                      var e,
                        n = this,
                        i = function () {
                          var i = e.value;
                          return n.chosenFormat === i
                            ? "break"
                            : xe.test(n.getFormatFormat(i, t.international))
                            ? n.createTemplateForFormat(i, t)
                              ? ((n.chosenFormat = i), "break")
                              : ((n.matchingFormats = n.matchingFormats.filter(
                                  function (t) {
                                    return t !== i;
                                  }
                                )),
                                "continue")
                            : "continue";
                        },
                        r = Me(this.matchingFormats.slice());
                      !(e = r()).done && "break" !== i();

                    );
                    return (
                      this.chosenFormat || this.resetFormat(), this.chosenFormat
                    );
                  },
                },
                {
                  key: "createTemplateForFormat",
                  value: function (t, e) {
                    if (!(t.pattern().indexOf("|") >= 0)) {
                      var n = this.getTemplateForFormat(t, e);
                      return n
                        ? (this.setNationalNumberTemplate(n, e), !0)
                        : void 0;
                    }
                  },
                },
                {
                  key: "getSeparatorAfterNationalPrefix",
                  value: function (t) {
                    return this.isNANP ||
                      (t &&
                        t.nationalPrefixFormattingRule() &&
                        Ae.test(t.nationalPrefixFormattingRule()))
                      ? " "
                      : "";
                  },
                },
                {
                  key: "getInternationalPrefixBeforeCountryCallingCode",
                  value: function (t, e) {
                    var n = t.IDDPrefix,
                      i = t.missingPlus;
                    return n
                      ? e && !1 === e.spacing
                        ? n
                        : n + " "
                      : i
                      ? ""
                      : "+";
                  },
                },
                {
                  key: "getTemplate",
                  value: function (t) {
                    if (this.template) {
                      for (
                        var e = -1,
                          n = 0,
                          i = t.international
                            ? this.getInternationalPrefixBeforeCountryCallingCode(
                                t,
                                { spacing: !1 }
                              )
                            : "";
                        n <
                        i.length +
                          t.getDigitsWithoutInternationalPrefix().length;

                      )
                        (e = this.template.indexOf("x", e + 1)), n++;
                      return ce(this.template, e + 1);
                    }
                  },
                },
                {
                  key: "setNationalNumberTemplate",
                  value: function (t, e) {
                    (this.nationalNumberTemplate = t),
                      (this.populatedNationalNumberTemplate = t),
                      (this.populatedNationalNumberTemplatePosition = -1),
                      e.international
                        ? (this.template =
                            this.getInternationalPrefixBeforeCountryCallingCode(
                              e
                            ).replace(/[\d\+]/g, "x") +
                            le("x", e.callingCode.length) +
                            " " +
                            t)
                        : (this.template = t);
                  },
                },
                {
                  key: "getTemplateForFormat",
                  value: function (t, e) {
                    var n = e.nationalSignificantNumber,
                      i = e.international,
                      r = e.nationalPrefix,
                      o = e.complexPrefixBeforeNationalSignificantNumber,
                      a = t.pattern();
                    a = a
                      .replace(/\[([^\[\]])*\]/g, "\\d")
                      .replace(/\d(?=[^,}][^,}])/g, "\\d");
                    var s = we.match(a)[0];
                    if (!(n.length > s.length)) {
                      var l = new RegExp("^" + a + "$"),
                        c = n.replace(/\d/g, "9");
                      l.test(c) && (s = c);
                      var d,
                        u = this.getFormatFormat(t, i);
                      if (
                        this.shouldTryNationalPrefixFormattingRule(t, {
                          international: i,
                          nationalPrefix: r,
                        })
                      ) {
                        var p = u.replace(Y, t.nationalPrefixFormattingRule());
                        if (
                          Tt(t.nationalPrefixFormattingRule()) ===
                            (r || "") + Tt("$1") &&
                          ((u = p), (d = !0), r)
                        )
                          for (var h = r.length; h > 0; )
                            (u = u.replace(/\d/, "x")), h--;
                      }
                      var f = s
                        .replace(new RegExp(a), u)
                        .replace(new RegExp("9", "g"), "x");
                      return (
                        d ||
                          (o
                            ? (f = le("x", o.length) + " " + f)
                            : r &&
                              (f =
                                le("x", r.length) +
                                this.getSeparatorAfterNationalPrefix(t) +
                                f)),
                        i && (f = H(f)),
                        f
                      );
                    }
                  },
                },
                {
                  key: "formatNextNationalNumberDigits",
                  value: function (t) {
                    var e = (function (t, e, n) {
                      for (
                        var i,
                          r = (function (t, e) {
                            var n =
                              ("undefined" != typeof Symbol &&
                                t[Symbol.iterator]) ||
                              t["@@iterator"];
                            if (n) return (n = n.call(t)).next.bind(n);
                            if (
                              Array.isArray(t) ||
                              (n = (function (t, e) {
                                if (t) {
                                  if ("string" == typeof t) return ae(t, e);
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
                                      ? ae(t, e)
                                      : void 0
                                  );
                                }
                              })(t))
                            ) {
                              n && (t = n);
                              var i = 0;
                              return function () {
                                return i >= t.length
                                  ? { done: !0 }
                                  : { done: !1, value: t[i++] };
                              };
                            }
                            throw new TypeError(
                              "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                            );
                          })(n.split(""));
                        !(i = r()).done;

                      ) {
                        var o = i.value;
                        if (t.slice(e + 1).search(se) < 0) return;
                        (e = t.search(se)), (t = t.replace(se, o));
                      }
                      return [t, e];
                    })(
                      this.populatedNationalNumberTemplate,
                      this.populatedNationalNumberTemplatePosition,
                      t
                    );
                    if (e)
                      return (
                        (this.populatedNationalNumberTemplate = e[0]),
                        (this.populatedNationalNumberTemplatePosition = e[1]),
                        ce(
                          this.populatedNationalNumberTemplate,
                          this.populatedNationalNumberTemplatePosition + 1
                        )
                      );
                    this.resetFormat();
                  },
                },
                {
                  key: "shouldTryNationalPrefixFormattingRule",
                  value: function (t, e) {
                    var n = e.international,
                      i = e.nationalPrefix;
                    if (t.nationalPrefixFormattingRule()) {
                      var r = t.usesNationalPrefix();
                      if ((r && i) || (!r && !n)) return !0;
                    }
                  },
                },
              ]) &&
                (function (t, e) {
                  for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    (i.enumerable = i.enumerable || !1),
                      (i.configurable = !0),
                      "value" in i && (i.writable = !0),
                      Object.defineProperty(t, i.key, i);
                  }
                })(e.prototype, n),
              Object.defineProperty(e, "prototype", { writable: !1 }),
              t
            );
          })();
        function Ce(t, e) {
          return (
            (function (t) {
              if (Array.isArray(t)) return t;
            })(t) ||
            (function (t, e) {
              var n =
                null == t
                  ? null
                  : ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
                    t["@@iterator"];
              if (null != n) {
                var i,
                  r,
                  o = [],
                  a = !0,
                  s = !1;
                try {
                  for (
                    n = n.call(t);
                    !(a = (i = n.next()).done) &&
                    (o.push(i.value), !e || o.length !== e);
                    a = !0
                  );
                } catch (t) {
                  (s = !0), (r = t);
                } finally {
                  try {
                    a || null == n.return || n.return();
                  } finally {
                    if (s) throw r;
                  }
                }
                return o;
              }
            })(t, e) ||
            (function (t, e) {
              if (t) {
                if ("string" == typeof t) return ke(t, e);
                var n = Object.prototype.toString.call(t).slice(8, -1);
                return (
                  "Object" === n && t.constructor && (n = t.constructor.name),
                  "Map" === n || "Set" === n
                    ? Array.from(t)
                    : "Arguments" === n ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? ke(t, e)
                    : void 0
                );
              }
            })(t, e) ||
            (function () {
              throw new TypeError(
                "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })()
          );
        }
        function ke(t, e) {
          (null == e || e > t.length) && (e = t.length);
          for (var n = 0, i = new Array(e); n < e; n++) i[n] = t[n];
          return i;
        }
        var Se = new RegExp("^[" + $ + "0-9０-９٠-٩۰-۹]+$", "i"),
          Te = "(?:[+＋][" + $ + "0-9０-９٠-٩۰-۹]*|[" + $ + "0-9０-９٠-٩۰-۹]+)",
          De = new RegExp("[^" + $ + "0-9０-９٠-٩۰-۹]+.*$"),
          Le = /[^\d\[\]]/,
          qe = (function () {
            function t(e) {
              var n = e.defaultCountry,
                i = e.defaultCallingCode,
                r = e.metadata,
                o = e.onNationalSignificantNumberChange;
              !(function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, t),
                (this.defaultCountry = n),
                (this.defaultCallingCode = i),
                (this.metadata = r),
                (this.onNationalSignificantNumberChange = o);
            }
            var e, n;
            return (
              (e = t),
              (n = [
                {
                  key: "input",
                  value: function (t, e) {
                    var n,
                      i = (function (t) {
                        var e = Ce(
                            (function (t) {
                              var e =
                                (function (t) {
                                  var e,
                                    n = t.search(Te);
                                  if (!(n < 0))
                                    return (
                                      "+" === (t = t.slice(n))[0] &&
                                        ((e = !0), (t = t.slice("+".length))),
                                      (t = t.replace(De, "")),
                                      e && (t = "+" + t),
                                      t
                                    );
                                })(t) || "";
                              return "+" === e[0]
                                ? [e.slice("+".length), !0]
                                : [e];
                            })(t),
                            2
                          ),
                          n = e[0],
                          i = e[1];
                        return Se.test(n) || (n = ""), [n, i];
                      })(t),
                      r = Ce(i, 2),
                      o = r[0],
                      a = r[1],
                      s = Tt(o);
                    return (
                      a &&
                        (e.digits ||
                          (e.startInternationalNumber(), s || (n = !0))),
                      s && this.inputDigits(s, e),
                      { digits: s, justLeadingPlus: n }
                    );
                  },
                },
                {
                  key: "inputDigits",
                  value: function (t, e) {
                    var n = e.digits,
                      i = n.length < 3 && n.length + t.length >= 3;
                    if (
                      (e.appendDigits(t),
                      i && this.extractIddPrefix(e),
                      this.isWaitingForCountryCallingCode(e))
                    ) {
                      if (!this.extractCountryCallingCode(e)) return;
                    } else e.appendNationalSignificantNumberDigits(t);
                    e.international ||
                      this.hasExtractedNationalSignificantNumber ||
                      this.extractNationalSignificantNumber(
                        e.getNationalDigits(),
                        function (t) {
                          return e.update(t);
                        }
                      );
                  },
                },
                {
                  key: "isWaitingForCountryCallingCode",
                  value: function (t) {
                    var e = t.international,
                      n = t.callingCode;
                    return e && !n;
                  },
                },
                {
                  key: "extractCountryCallingCode",
                  value: function (t) {
                    var e = Wt(
                        "+" + t.getDigitsWithoutInternationalPrefix(),
                        this.defaultCountry,
                        this.defaultCallingCode,
                        this.metadata.metadata
                      ),
                      n = e.countryCallingCode,
                      i = e.number;
                    if (n)
                      return (
                        t.setCallingCode(n),
                        t.update({ nationalSignificantNumber: i }),
                        !0
                      );
                  },
                },
                {
                  key: "reset",
                  value: function (t) {
                    if (t) {
                      this.hasSelectedNumberingPlan = !0;
                      var e = t._nationalPrefixForParsing();
                      this.couldPossiblyExtractAnotherNationalSignificantNumber =
                        e && Le.test(e);
                    } else
                      (this.hasSelectedNumberingPlan = void 0),
                        (this.couldPossiblyExtractAnotherNationalSignificantNumber =
                          void 0);
                  },
                },
                {
                  key: "extractNationalSignificantNumber",
                  value: function (t, e) {
                    if (this.hasSelectedNumberingPlan) {
                      var n = Pt(t, this.metadata),
                        i = n.nationalPrefix,
                        r = n.nationalNumber,
                        o = n.carrierCode;
                      if (r !== t)
                        return (
                          this.onExtractedNationalNumber(i, o, r, t, e), !0
                        );
                    }
                  },
                },
                {
                  key: "extractAnotherNationalSignificantNumber",
                  value: function (t, e, n) {
                    if (!this.hasExtractedNationalSignificantNumber)
                      return this.extractNationalSignificantNumber(t, n);
                    if (
                      this.couldPossiblyExtractAnotherNationalSignificantNumber
                    ) {
                      var i = Pt(t, this.metadata),
                        r = i.nationalPrefix,
                        o = i.nationalNumber,
                        a = i.carrierCode;
                      if (o !== e)
                        return (
                          this.onExtractedNationalNumber(r, a, o, t, n), !0
                        );
                    }
                  },
                },
                {
                  key: "onExtractedNationalNumber",
                  value: function (t, e, n, i, r) {
                    var o,
                      a,
                      s = i.lastIndexOf(n);
                    if (s >= 0 && s === i.length - n.length) {
                      a = !0;
                      var l = i.slice(0, s);
                      l !== t && (o = l);
                    }
                    r({
                      nationalPrefix: t,
                      carrierCode: e,
                      nationalSignificantNumber: n,
                      nationalSignificantNumberMatchesInput: a,
                      complexPrefixBeforeNationalSignificantNumber: o,
                    }),
                      (this.hasExtractedNationalSignificantNumber = !0),
                      this.onNationalSignificantNumberChange();
                  },
                },
                {
                  key: "reExtractNationalSignificantNumber",
                  value: function (t) {
                    return (
                      !!this.extractAnotherNationalSignificantNumber(
                        t.getNationalDigits(),
                        t.nationalSignificantNumber,
                        function (e) {
                          return t.update(e);
                        }
                      ) ||
                      (this.extractIddPrefix(t) || this.fixMissingPlus(t)
                        ? (this.extractCallingCodeAndNationalSignificantNumber(
                            t
                          ),
                          !0)
                        : void 0)
                    );
                  },
                },
                {
                  key: "extractIddPrefix",
                  value: function (t) {
                    var e = t.international,
                      n = t.IDDPrefix,
                      i = t.digits;
                    if ((t.nationalSignificantNumber, !e && !n)) {
                      var r = jt(
                        i,
                        this.defaultCountry,
                        this.defaultCallingCode,
                        this.metadata.metadata
                      );
                      return void 0 !== r && r !== i
                        ? (t.update({
                            IDDPrefix: i.slice(0, i.length - r.length),
                          }),
                          this.startInternationalNumber(t, {
                            country: void 0,
                            callingCode: void 0,
                          }),
                          !0)
                        : void 0;
                    }
                  },
                },
                {
                  key: "fixMissingPlus",
                  value: function (t) {
                    if (!t.international) {
                      var e = It(
                          t.digits,
                          this.defaultCountry,
                          this.defaultCallingCode,
                          this.metadata.metadata
                        ),
                        n = e.countryCallingCode;
                      if ((e.number, n))
                        return (
                          t.update({ missingPlus: !0 }),
                          this.startInternationalNumber(t, {
                            country: t.country,
                            callingCode: n,
                          }),
                          !0
                        );
                    }
                  },
                },
                {
                  key: "startInternationalNumber",
                  value: function (t, e) {
                    var n = e.country,
                      i = e.callingCode;
                    t.startInternationalNumber(n, i),
                      t.nationalSignificantNumber &&
                        (t.resetNationalSignificantNumber(),
                        this.onNationalSignificantNumberChange(),
                        (this.hasExtractedNationalSignificantNumber = void 0));
                  },
                },
                {
                  key: "extractCallingCodeAndNationalSignificantNumber",
                  value: function (t) {
                    this.extractCountryCallingCode(t) &&
                      this.extractNationalSignificantNumber(
                        t.getNationalDigits(),
                        function (e) {
                          return t.update(e);
                        }
                      );
                  },
                },
              ]) &&
                (function (t, e) {
                  for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    (i.enumerable = i.enumerable || !1),
                      (i.configurable = !0),
                      "value" in i && (i.writable = !0),
                      Object.defineProperty(t, i.key, i);
                  }
                })(e.prototype, n),
              Object.defineProperty(e, "prototype", { writable: !1 }),
              t
            );
          })();
        function Ee(t) {
          return (Ee =
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
        function je(t, e) {
          (null == e || e > t.length) && (e = t.length);
          for (var n = 0, i = new Array(e); n < e; n++) i[n] = t[n];
          return i;
        }
        var Pe = (function () {
          function t(e, n) {
            !(function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
              (this.metadata = new x(n));
            var i = (function (t, e) {
                return (
                  (function (t) {
                    if (Array.isArray(t)) return t;
                  })(t) ||
                  (function (t, e) {
                    var n =
                      null == t
                        ? null
                        : ("undefined" != typeof Symbol &&
                            t[Symbol.iterator]) ||
                          t["@@iterator"];
                    if (null != n) {
                      var i,
                        r,
                        o = [],
                        a = !0,
                        s = !1;
                      try {
                        for (
                          n = n.call(t);
                          !(a = (i = n.next()).done) &&
                          (o.push(i.value), 2 !== o.length);
                          a = !0
                        );
                      } catch (t) {
                        (s = !0), (r = t);
                      } finally {
                        try {
                          a || null == n.return || n.return();
                        } finally {
                          if (s) throw r;
                        }
                      }
                      return o;
                    }
                  })(t) ||
                  (function (t, e) {
                    if (t) {
                      if ("string" == typeof t) return je(t, 2);
                      var n = Object.prototype.toString.call(t).slice(8, -1);
                      return (
                        "Object" === n &&
                          t.constructor &&
                          (n = t.constructor.name),
                        "Map" === n || "Set" === n
                          ? Array.from(t)
                          : "Arguments" === n ||
                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                          ? je(t, 2)
                          : void 0
                      );
                    }
                  })(t) ||
                  (function () {
                    throw new TypeError(
                      "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                    );
                  })()
                );
              })(this.getCountryAndCallingCode(e)),
              r = i[0],
              o = i[1];
            (this.defaultCountry = r),
              (this.defaultCallingCode = o),
              this.reset();
          }
          var e, n;
          return (
            (e = t),
            (n = [
              {
                key: "getCountryAndCallingCode",
                value: function (t) {
                  var e, n;
                  return (
                    t &&
                      ("object" === Ee(t)
                        ? ((e = t.defaultCountry), (n = t.defaultCallingCode))
                        : (e = t)),
                    e && !this.metadata.hasCountry(e) && (e = void 0),
                    [e, n]
                  );
                },
              },
              {
                key: "input",
                value: function (t) {
                  var e = this.parser.input(t, this.state),
                    n = e.digits;
                  if (e.justLeadingPlus) this.formattedOutput = "+";
                  else if (n) {
                    var i;
                    if (
                      (this.determineTheCountryIfNeeded(),
                      this.state.nationalSignificantNumber &&
                        this.formatter.narrowDownMatchingFormats(this.state),
                      this.metadata.hasSelectedNumberingPlan() &&
                        (i = this.formatter.format(n, this.state)),
                      void 0 === i &&
                        this.parser.reExtractNationalSignificantNumber(
                          this.state
                        ))
                    ) {
                      this.determineTheCountryIfNeeded();
                      var r = this.state.getNationalDigits();
                      r && (i = this.formatter.format(r, this.state));
                    }
                    this.formattedOutput = i
                      ? this.getFullNumber(i)
                      : this.getNonFormattedNumber();
                  }
                  return this.formattedOutput;
                },
              },
              {
                key: "reset",
                value: function () {
                  var t = this;
                  return (
                    (this.state = new oe({
                      onCountryChange: function (e) {
                        t.country = e;
                      },
                      onCallingCodeChange: function (e, n) {
                        t.metadata.selectNumberingPlan(n, e),
                          t.formatter.reset(t.metadata.numberingPlan, t.state),
                          t.parser.reset(t.metadata.numberingPlan);
                      },
                    })),
                    (this.formatter = new ze({
                      state: this.state,
                      metadata: this.metadata,
                    })),
                    (this.parser = new qe({
                      defaultCountry: this.defaultCountry,
                      defaultCallingCode: this.defaultCallingCode,
                      metadata: this.metadata,
                      state: this.state,
                      onNationalSignificantNumberChange: function () {
                        t.determineTheCountryIfNeeded(),
                          t.formatter.reset(t.metadata.numberingPlan, t.state);
                      },
                    })),
                    this.state.reset(
                      this.defaultCountry,
                      this.defaultCallingCode
                    ),
                    (this.formattedOutput = ""),
                    this
                  );
                },
              },
              {
                key: "isInternational",
                value: function () {
                  return this.state.international;
                },
              },
              {
                key: "getCallingCode",
                value: function () {
                  if (this.isInternational()) return this.state.callingCode;
                },
              },
              {
                key: "getCountryCallingCode",
                value: function () {
                  return this.getCallingCode();
                },
              },
              {
                key: "getCountry",
                value: function () {
                  if (this.state.digits) return this._getCountry();
                },
              },
              {
                key: "_getCountry",
                value: function () {
                  return this.state.country;
                },
              },
              {
                key: "determineTheCountryIfNeeded",
                value: function () {
                  (this.state.country &&
                    !this.isCountryCallingCodeAmbiguous()) ||
                    this.determineTheCountry();
                },
              },
              {
                key: "getFullNumber",
                value: function (t) {
                  var e = this;
                  if (this.isInternational()) {
                    var n = this.state.callingCode;
                    return (function (t) {
                      return (
                        e.formatter.getInternationalPrefixBeforeCountryCallingCode(
                          e.state,
                          { spacing: !!t }
                        ) + t
                      );
                    })(
                      n
                        ? t
                          ? "".concat(n, " ").concat(t)
                          : n
                        : "".concat(
                            this.state.getDigitsWithoutInternationalPrefix()
                          )
                    );
                  }
                  return t;
                },
              },
              {
                key: "getNonFormattedNationalNumberWithPrefix",
                value: function () {
                  var t = this.state,
                    e = t.nationalSignificantNumber,
                    n = t.complexPrefixBeforeNationalSignificantNumber,
                    i = t.nationalPrefix,
                    r = e,
                    o = n || i;
                  return o && (r = o + r), r;
                },
              },
              {
                key: "getNonFormattedNumber",
                value: function () {
                  var t = this.state.nationalSignificantNumberMatchesInput;
                  return this.getFullNumber(
                    t
                      ? this.getNonFormattedNationalNumberWithPrefix()
                      : this.state.getNationalDigits()
                  );
                },
              },
              {
                key: "getNonFormattedTemplate",
                value: function () {
                  var t = this.getNonFormattedNumber();
                  if (t) return t.replace(/[\+\d]/g, "x");
                },
              },
              {
                key: "isCountryCallingCodeAmbiguous",
                value: function () {
                  var t = this.state.callingCode,
                    e = this.metadata.getCountryCodesForCallingCode(t);
                  return e && e.length > 1;
                },
              },
              {
                key: "determineTheCountry",
                value: function () {
                  this.state.setCountry(
                    Bt(
                      this.isInternational()
                        ? this.state.callingCode
                        : this.defaultCallingCode,
                      this.state.nationalSignificantNumber,
                      this.metadata
                    )
                  );
                },
              },
              {
                key: "getNumberValue",
                value: function () {
                  var t = this.state,
                    e = t.digits,
                    n = t.callingCode,
                    i = t.country,
                    r = t.nationalSignificantNumber;
                  if (e)
                    return this.isInternational()
                      ? n
                        ? "+" + n + r
                        : "+" + e
                      : i || n
                      ? "+" + (i ? this.metadata.countryCallingCode() : n) + r
                      : void 0;
                },
              },
              {
                key: "getNumber",
                value: function () {
                  var t = this.state,
                    e = t.nationalSignificantNumber,
                    n = t.carrierCode,
                    i = t.callingCode,
                    r = this._getCountry();
                  if (e && (r || i)) {
                    var o = new ft(r || i, e, this.metadata.metadata);
                    return n && (o.carrierCode = n), o;
                  }
                },
              },
              {
                key: "isPossible",
                value: function () {
                  var t = this.getNumber();
                  return !!t && t.isPossible();
                },
              },
              {
                key: "isValid",
                value: function () {
                  var t = this.getNumber();
                  return !!t && t.isValid();
                },
              },
              {
                key: "getNationalNumber",
                value: function () {
                  return this.state.nationalSignificantNumber;
                },
              },
              {
                key: "getChars",
                value: function () {
                  return (
                    (this.state.international ? "+" : "") + this.state.digits
                  );
                },
              },
              {
                key: "getTemplate",
                value: function () {
                  return (
                    this.formatter.getTemplate(this.state) ||
                    this.getNonFormattedTemplate() ||
                    ""
                  );
                },
              },
            ]) &&
              (function (t, e) {
                for (var n = 0; n < e.length; n++) {
                  var i = e[n];
                  (i.enumerable = i.enumerable || !1),
                    (i.configurable = !0),
                    "value" in i && (i.writable = !0),
                    Object.defineProperty(t, i.key, i);
                }
              })(e.prototype, n),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            t
          );
        })();
        function Re(t) {
          return Pe.call(this, t, g);
        }
        (Re.prototype = Object.create(Pe.prototype, {})),
          (Re.prototype.constructor = Re);
        var Ie = {
            props: { theme: { type: Object, required: !0 } },
            computed: {
              labelColorStyle: function () {
                return this.error
                  ? this.theme.errorColor
                  : this.valid
                  ? this.theme.validColor
                  : this.isFocus
                  ? this.theme.color
                  : this.dark
                  ? this.theme.textDarkColor
                  : null;
              },
              inputBorderStyle: function () {
                return this.error
                  ? this.theme.borderErrorColor
                  : this.valid
                  ? this.theme.borderValidColor
                  : this.isHover || this.isFocus
                  ? this.theme.borderColor
                  : null;
              },
              inputBoxShadowStyle: function () {
                return this.isFocus
                  ? this.error
                    ? this.theme.boxShadowError
                    : this.valid
                    ? this.theme.boxShadowValid
                    : this.theme.boxShadowColor
                  : null;
              },
              inputBgColor: function () {
                return this.dark ? this.theme.bgDarkColor : null;
              },
              textColor: function () {
                return this.dark ? this.theme.textDarkColor : null;
              },
              inputCaretStyle: function () {
                return { caretColor: this.theme.colorValue };
              },
              radiusStyle: function () {
                return this.theme.borderRadius;
              },
              radiusLeftStyle: function () {
                return this.theme.borderLeftRadius;
              },
              radiusRightStyle: function () {
                return this.theme.borderRightRadius;
              },
              bgItemSelectedStyle: function () {
                return this.theme.bgColor;
              },
              loaderBgColor: function () {
                return this.theme.bgColor;
              },
            },
          },
          We = {
            name: "InputTel",
            mixins: [Ie],
            props: {
              value: { type: [String, Number], default: null },
              label: { type: String, default: "Enter text" },
              hint: { type: String, default: null },
              error: { type: Boolean, default: Boolean },
              disabled: { type: Boolean, default: !1 },
              dark: { type: Boolean, default: !1 },
              id: { type: String, default: "InputTel" },
              size: { type: String, default: null },
              type: { type: String, default: "tel" },
              readonly: { type: Boolean, default: !1 },
              valid: { type: Boolean, default: !1 },
              required: { type: Boolean, default: !1 },
              loader: { type: Boolean, default: !1 },
              clearable: { type: Boolean, default: !1 },
              noCountrySelector: { type: Boolean, default: !1 },
            },
            data: function () {
              return { isFocus: !1, isHover: !1 };
            },
            computed: {
              inputValue: {
                get: function () {
                  return this.value;
                },
                set: function (t) {
                  this.$emit("input", t);
                },
              },
              labelValue: function () {
                var t = this.label;
                return this.required && t ? "".concat(t, " *") : t;
              },
              hintValue: function () {
                var t = this.hint;
                return this.required && t ? "".concat(t, " *") : t;
              },
            },
            methods: {
              updateHoverState: function (t) {
                this.isHover = t;
              },
              focusInput: function () {
                this.$refs.InputTel.focus();
              },
              onFocus: function () {
                this.$emit("focus"), (this.isFocus = !0);
              },
              onBlur: function () {
                this.$emit("blur"), (this.isFocus = !1);
              },
              clear: function () {
                this.$emit("input", null), this.$emit("clear");
              },
              keyUp: function (t) {
                this.$emit("keyup", t);
              },
              keyDown: function (t) {
                this.$emit("keydown", t);
              },
            },
          };
        function Ne(t, e, n, i, r, o, a, s) {
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
                    t &&
                      t._registeredComponents &&
                      t._registeredComponents.add(a);
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
        n("d499");
        var Be = Ne(
            We,
            function () {
              var t = this,
                e = t.$createElement,
                n = t._self._c || e;
              return n(
                "div",
                {
                  ref: "parent",
                  staticClass: "input-tel",
                  class: [
                    {
                      "is-focused": t.isFocus,
                      "is-valid": t.valid,
                      "has-value": t.value,
                      "has-error": t.error,
                      "is-disabled": t.disabled,
                      "is-dark": t.dark,
                      "has-hint": t.hint,
                    },
                    t.size,
                  ],
                  on: {
                    click: t.focusInput,
                    mouseenter: function (e) {
                      return t.updateHoverState(!0);
                    },
                    mouseleave: function (e) {
                      return t.updateHoverState(!1);
                    },
                  },
                },
                [
                  "checkbox" === t.type
                    ? n(
                        "input",
                        t._b(
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: t.inputValue,
                                expression: "inputValue",
                              },
                            ],
                            ref: "InputTel",
                            staticClass: "input-tel__input",
                            class: {
                              "no-country-selector": t.noCountrySelector,
                            },
                            style: [
                              t.noCountrySelector
                                ? t.radiusStyle
                                : t.radiusRightStyle,
                              t.inputCaretStyle,
                              t.inputBorderStyle,
                              t.inputBoxShadowStyle,
                              t.inputBgColor,
                              t.textColor,
                            ],
                            attrs: {
                              id: t.id,
                              placeholder: t.labelValue,
                              disabled: t.disabled,
                              required: t.required,
                              type: "checkbox",
                            },
                            domProps: {
                              checked: Array.isArray(t.inputValue)
                                ? t._i(t.inputValue, null) > -1
                                : t.inputValue,
                            },
                            on: {
                              keydown: t.keyDown,
                              keyup: t.keyUp,
                              focus: t.onFocus,
                              blur: t.onBlur,
                              click: function (e) {
                                return t.$emit("click", e);
                              },
                              change: function (e) {
                                var n = t.inputValue,
                                  i = e.target,
                                  r = !!i.checked;
                                if (Array.isArray(n)) {
                                  var o = t._i(n, null);
                                  i.checked
                                    ? o < 0 && (t.inputValue = n.concat([null]))
                                    : o > -1 &&
                                      (t.inputValue = n
                                        .slice(0, o)
                                        .concat(n.slice(o + 1)));
                                } else t.inputValue = r;
                              },
                            },
                          },
                          "input",
                          t.$attrs,
                          !1
                        )
                      )
                    : "radio" === t.type
                    ? n(
                        "input",
                        t._b(
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: t.inputValue,
                                expression: "inputValue",
                              },
                            ],
                            ref: "InputTel",
                            staticClass: "input-tel__input",
                            class: {
                              "no-country-selector": t.noCountrySelector,
                            },
                            style: [
                              t.noCountrySelector
                                ? t.radiusStyle
                                : t.radiusRightStyle,
                              t.inputCaretStyle,
                              t.inputBorderStyle,
                              t.inputBoxShadowStyle,
                              t.inputBgColor,
                              t.textColor,
                            ],
                            attrs: {
                              id: t.id,
                              placeholder: t.labelValue,
                              disabled: t.disabled,
                              required: t.required,
                              type: "radio",
                            },
                            domProps: { checked: t._q(t.inputValue, null) },
                            on: {
                              keydown: t.keyDown,
                              keyup: t.keyUp,
                              focus: t.onFocus,
                              blur: t.onBlur,
                              click: function (e) {
                                return t.$emit("click", e);
                              },
                              change: function (e) {
                                t.inputValue = null;
                              },
                            },
                          },
                          "input",
                          t.$attrs,
                          !1
                        )
                      )
                    : n(
                        "input",
                        t._b(
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: t.inputValue,
                                expression: "inputValue",
                              },
                            ],
                            ref: "InputTel",
                            staticClass: "input-tel__input",
                            class: {
                              "no-country-selector": t.noCountrySelector,
                            },
                            style: [
                              t.noCountrySelector
                                ? t.radiusStyle
                                : t.radiusRightStyle,
                              t.inputCaretStyle,
                              t.inputBorderStyle,
                              t.inputBoxShadowStyle,
                              t.inputBgColor,
                              t.textColor,
                            ],
                            attrs: {
                              id: t.id,
                              placeholder: t.labelValue,
                              disabled: t.disabled,
                              required: t.required,
                              type: t.type,
                            },
                            domProps: { value: t.inputValue },
                            on: {
                              keydown: t.keyDown,
                              keyup: t.keyUp,
                              focus: t.onFocus,
                              blur: t.onBlur,
                              click: function (e) {
                                return t.$emit("click", e);
                              },
                              input: function (e) {
                                e.target.composing ||
                                  (t.inputValue = e.target.value);
                              },
                            },
                          },
                          "input",
                          t.$attrs,
                          !1
                        )
                      ),
                  n(
                    "label",
                    {
                      ref: "label",
                      staticClass: "input-tel__label",
                      class: t.error ? "text-danger" : null,
                      style: [t.labelColorStyle],
                      attrs: { for: t.id },
                      on: { click: t.focusInput },
                    },
                    [t._v(" " + t._s(t.hintValue || t.labelValue) + " ")]
                  ),
                  t.clearable && t.inputValue
                    ? n(
                        "button",
                        {
                          staticClass: "input-tel__clear",
                          attrs: {
                            title: "clear",
                            type: "button",
                            tabindex: "-1",
                          },
                          on: { click: t.clear },
                        },
                        [
                          n("span", {
                            staticClass: "input-tel__clear__effect",
                          }),
                          n("span", [t._v(" ✕ ")]),
                        ]
                      )
                    : t._e(),
                  t.loader
                    ? n("div", { staticClass: "input-tel__loader" }, [
                        n("div", {
                          staticClass: "input-tel__loader__progress-bar",
                          style: [t.loaderBgColor],
                        }),
                      ])
                    : t._e(),
                ]
              );
            },
            [],
            !1,
            null,
            "e59be3b4",
            null
          ).exports,
          Fe = (n("7f7f"), n("f559"), n("20d6"), n("a745")),
          $e = n.n(Fe);
        function He(t, e) {
          (null == e || e > t.length) && (e = t.length);
          for (var n = 0, i = new Array(e); n < e; n++) i[n] = t[n];
          return i;
        }
        var Ye = n("774e"),
          Ue = n.n(Ye),
          Xe = n("c8bb"),
          Ve = n.n(Xe),
          Ge = n("67bb"),
          Ke = n.n(Ge);
        function Ze(t) {
          return (
            (function (t) {
              if ($e()(t)) return He(t);
            })(t) ||
            (function (t) {
              if (void 0 !== Ke.a && Ve()(Object(t))) return Ue()(t);
            })(t) ||
            (function (t, e) {
              if (t) {
                if ("string" == typeof t) return He(t, e);
                var n = Object.prototype.toString.call(t).slice(8, -1);
                return (
                  "Object" === n && t.constructor && (n = t.constructor.name),
                  "Map" === n || "Set" === n
                    ? Ue()(n)
                    : "Arguments" === n ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? He(t, e)
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
        n("7514");
        var Je,
          Qe = {
            name: "CountrySelector",
            components: { RecycleScroller: n("e508").a },
            mixins: [Ie],
            props: {
              id: { type: String, default: "CountrySelector" },
              value: { type: [String, Object], default: null },
              label: { type: String, default: "Choose country" },
              hint: { type: String, default: String },
              size: { type: String, default: String },
              error: { type: Boolean, default: !1 },
              disabled: { type: Boolean, default: !1 },
              valid: { type: Boolean, default: !1 },
              dark: { type: Boolean, default: !1 },
              items: { type: Array, default: Array, required: !0 },
              preferredCountries: { type: Array, default: null },
              onlyCountries: { type: Array, default: null },
              ignoredCountries: { type: Array, default: null },
              noFlags: { type: Boolean, default: !1 },
              countriesHeight: { type: Number, default: 35 },
              showCodeOnList: { type: Boolean, default: !1 },
            },
            data: function () {
              return {
                isFocus: !1,
                hasListOpen: !1,
                selectedIndex: null,
                tmpValue: this.value,
                query: "",
                indexItemToShow: 0,
                isHover: !1,
              };
            },
            computed: {
              itemHeight: function () {
                return { height: "".concat(this.countriesHeight, "px") };
              },
              listHeight: function () {
                return {
                  height: "".concat(7 * (this.countriesHeight + 1), "px"),
                  maxHeight: "".concat(7 * (this.countriesHeight + 1), "px"),
                };
              },
              countriesList: function () {
                var t = this;
                return this.items.filter(function (e) {
                  return !t.ignoredCountries.includes(e.iso2);
                });
              },
              countriesFiltered: function () {
                var t = this;
                return (this.onlyCountries || this.preferredCountries).map(
                  function (e) {
                    return t.countriesList.find(function (t) {
                      return t.iso2.includes(e);
                    });
                  }
                );
              },
              otherCountries: function () {
                var t = this;
                return this.countriesList.filter(function (e) {
                  return !t.preferredCountries.includes(e.iso2);
                });
              },
              countriesSorted: function () {
                return this.preferredCountries
                  ? [].concat(
                      Ze(this.countriesFiltered),
                      Ze(this.otherCountries)
                    )
                  : this.onlyCountries
                  ? this.countriesFiltered
                  : this.countriesList;
              },
              selectedValueIndex: function () {
                var t = this;
                return this.value
                  ? this.countriesSorted.findIndex(function (e) {
                      return e.iso2 === t.value;
                    })
                  : null;
              },
              tmpValueIndex: function () {
                var t = this;
                return this.countriesSorted.findIndex(function (e) {
                  return e.iso2 === t.tmpValue;
                });
              },
              callingCode: function () {
                return this.value
                  ? "+".concat(
                      (function () {
                        return v(q, arguments);
                      })(this.value)
                    )
                  : null;
              },
            },
            methods: {
              updateHoverState: function (t) {
                this.isHover = t;
              },
              handleBlur: function (t) {
                this.$el.contains(t.relatedTarget) ||
                  ((this.isFocus = !1), this.closeList());
              },
              toggleList: function () {
                this.$refs.countriesList.offsetParent
                  ? this.closeList()
                  : this.openList();
              },
              openList: function () {
                this.disabled ||
                  (this.$refs.CountrySelector.focus(),
                  this.$emit("open"),
                  (this.isFocus = !0),
                  (this.hasListOpen = !0),
                  this.value &&
                    this.scrollToSelectedOnFocus(this.selectedValueIndex));
              },
              closeList: function () {
                this.$emit("close"), (this.hasListOpen = !1);
              },
              updateValue:
                ((Je = c(
                  regeneratorRuntime.mark(function t(e) {
                    return regeneratorRuntime.wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (
                                (this.tmpValue = e),
                                this.$emit("input", e || null),
                                (t.next = 4),
                                this.$nextTick()
                              );
                            case 4:
                              this.closeList();
                            case 5:
                            case "end":
                              return t.stop();
                          }
                      },
                      t,
                      this
                    );
                  })
                )),
                function (t) {
                  return Je.apply(this, arguments);
                }),
              scrollToSelectedOnFocus: function (t) {
                var e = this;
                this.$nextTick(function () {
                  e.$refs.countriesList.scrollTop =
                    t * (e.countriesHeight + 1) - 3 * (e.countriesHeight + 1);
                });
              },
              keyboardNav: function (t) {
                var e = t.keyCode;
                if (40 === e || 38 === e) {
                  t.view && t.view.event && t.view.event.preventDefault(),
                    this.hasListOpen || this.openList();
                  var n =
                    40 === e ? this.tmpValueIndex + 1 : this.tmpValueIndex - 1;
                  (-1 === n || n >= this.countriesSorted.length) &&
                    (n = -1 === n ? this.countriesSorted.length - 1 : 0),
                    (this.tmpValue = this.countriesSorted[n].iso2),
                    this.scrollToSelectedOnFocus(n);
                } else
                  13 === e
                    ? this.hasListOpen
                      ? this.updateValue(this.tmpValue)
                      : this.openList()
                    : 27 === e
                    ? this.closeList()
                    : this.searching(t);
              },
              searching: function (t) {
                var e = this,
                  n = t.keyCode;
                clearTimeout(this.queryTimer),
                  (this.queryTimer = setTimeout(function () {
                    e.query = "";
                  }, 1e3));
                var i = String.fromCharCode(n);
                if (8 === n && "" !== this.query)
                  this.query = this.query.substring(0, this.query.length - 1);
                else if (/[a-zA-Z-e ]/.test(i)) {
                  this.hasListOpen || this.openList(), (this.query += t.key);
                  var r = (
                    this.preferredCountries
                      ? this.countriesSorted.slice(
                          this.preferredCountries.length
                        )
                      : this.countriesSorted
                  ).findIndex(function (t) {
                    return (
                      (e.tmpValue = t.iso2),
                      t.name.toLowerCase().startsWith(e.query)
                    );
                  });
                  -1 !== r &&
                    this.scrollToSelectedOnFocus(
                      r +
                        (this.preferredCountries
                          ? this.preferredCountries.length
                          : 0)
                    );
                }
              },
            },
          },
          tn =
            (n("e71e"),
            Ne(
              Qe,
              function () {
                var t = this,
                  e = t.$createElement,
                  n = t._self._c || e;
                return n(
                  "div",
                  {
                    ref: "parent",
                    staticClass: "country-selector",
                    class: [
                      {
                        "is-focused": t.isFocus,
                        "has-value": t.value,
                        "has-hint": t.hint,
                        "has-error": t.error,
                        "is-disabled": t.disabled,
                        "is-dark": t.dark,
                        "no-flags": t.noFlags,
                        "has-list-open": t.hasListOpen,
                        "is-valid": t.valid,
                      },
                      t.size,
                    ],
                    on: {
                      "!blur": function (e) {
                        return t.handleBlur.apply(null, arguments);
                      },
                      mouseenter: function (e) {
                        return t.updateHoverState(!0);
                      },
                      mouseleave: function (e) {
                        return t.updateHoverState(!1);
                      },
                    },
                  },
                  [
                    t.value && !t.noFlags
                      ? n(
                          "div",
                          {
                            staticClass: "country-selector__country-flag",
                            on: {
                              click: function (e) {
                                return (
                                  e.stopPropagation(),
                                  t.toggleList.apply(null, arguments)
                                );
                              },
                            },
                          },
                          [
                            n("div", {
                              class:
                                "iti-flag-small iti-flag " +
                                t.value.toLowerCase(),
                            }),
                          ]
                        )
                      : t._e(),
                    n("input", {
                      ref: "CountrySelector",
                      staticClass: "country-selector__input",
                      style: [
                        t.radiusLeftStyle,
                        t.inputBorderStyle,
                        t.inputBoxShadowStyle,
                        t.inputBgColor,
                      ],
                      attrs: {
                        id: t.id,
                        placeholder: t.label,
                        disabled: t.disabled,
                        readonly: "",
                      },
                      domProps: { value: t.callingCode },
                      on: {
                        focus: function (e) {
                          t.isFocus = !0;
                        },
                        keydown: t.keyboardNav,
                        click: function (e) {
                          return (
                            e.stopPropagation(),
                            t.toggleList.apply(null, arguments)
                          );
                        },
                      },
                    }),
                    n(
                      "div",
                      {
                        staticClass: "country-selector__toggle",
                        on: {
                          click: function (e) {
                            return (
                              e.stopPropagation(),
                              t.toggleList.apply(null, arguments)
                            );
                          },
                        },
                      },
                      [
                        t._t("arrow", function () {
                          return [
                            n(
                              "svg",
                              {
                                staticClass: "country-selector__toggle__arrow",
                                attrs: {
                                  mlns: "http://www.w3.org/2000/svg",
                                  width: "24",
                                  height: "24",
                                  viewBox: "0 0 24 24",
                                },
                              },
                              [
                                n("path", {
                                  staticClass: "arrow",
                                  attrs: {
                                    d: "M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z",
                                  },
                                }),
                                n("path", {
                                  attrs: { fill: "none", d: "M0 0h24v24H0V0z" },
                                }),
                              ]
                            ),
                          ];
                        }),
                      ],
                      2
                    ),
                    n(
                      "label",
                      {
                        ref: "label",
                        staticClass: "country-selector__label",
                        style: [t.labelColorStyle],
                        on: {
                          click: function (e) {
                            return (
                              e.stopPropagation(),
                              t.toggleList.apply(null, arguments)
                            );
                          },
                        },
                      },
                      [t._v(" " + t._s(t.hint || t.label) + " ")]
                    ),
                    n("Transition", { attrs: { name: "slide" } }, [
                      n(
                        "div",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: t.hasListOpen,
                              expression: "hasListOpen",
                            },
                          ],
                          ref: "countriesList",
                          staticClass: "country-selector__list",
                          class: { "has-calling-code": t.showCodeOnList },
                          style: [t.radiusStyle, t.listHeight, t.inputBgColor],
                        },
                        [
                          n("RecycleScroller", {
                            attrs: {
                              items: t.countriesSorted,
                              "item-size": 1,
                              "key-field": "iso2",
                            },
                            scopedSlots: t._u([
                              {
                                key: "default",
                                fn: function (e) {
                                  var i = e.item;
                                  return [
                                    n(
                                      "button",
                                      {
                                        key: "item-" + i.code,
                                        staticClass:
                                          "flex align-center country-selector__list__item",
                                        class: [
                                          { selected: t.value === i.iso2 },
                                          {
                                            "keyboard-selected":
                                              t.value !== i.iso2 &&
                                              t.tmpValue === i.iso2,
                                          },
                                        ],
                                        style: [
                                          t.itemHeight,
                                          t.value === i.iso2
                                            ? t.bgItemSelectedStyle
                                            : null,
                                        ],
                                        attrs: {
                                          tabindex: "-1",
                                          type: "button",
                                        },
                                        on: {
                                          click: function (e) {
                                            return (
                                              e.stopPropagation(),
                                              t.updateValue(i.iso2)
                                            );
                                          },
                                        },
                                      },
                                      [
                                        t.noFlags
                                          ? t._e()
                                          : n(
                                              "div",
                                              {
                                                staticClass:
                                                  "country-selector__list__item__flag-container",
                                              },
                                              [
                                                n("div", {
                                                  class:
                                                    "iti-flag-small iti-flag " +
                                                    i.iso2.toLowerCase(),
                                                }),
                                              ]
                                            ),
                                        t.showCodeOnList
                                          ? n(
                                              "span",
                                              {
                                                staticClass:
                                                  "country-selector__list__item__calling-code flex-fixed",
                                              },
                                              [t._v("+" + t._s(i.dialCode))]
                                            )
                                          : t._e(),
                                        n("div", { staticClass: "dots-text" }, [
                                          t._v(" " + t._s(i.name) + " "),
                                        ]),
                                      ]
                                    ),
                                  ];
                                },
                              },
                            ]),
                          }),
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
              "46e105de",
              null
            ).exports),
          en = {
            countrySelectorLabel: "Country code",
            countrySelectorError: "Choose country",
            phoneNumberLabel: "Phone number",
            example: "Example:",
          },
          nn = n("6038");
        function rn(t, e) {
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
        function on(t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {};
            e % 2
              ? rn(Object(n), !0).forEach(function (e) {
                  p(t, e, n[e]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
              : rn(Object(n)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(n, e)
                  );
                });
          }
          return t;
        }
        var an,
          sn,
          ln = function (t) {
            return Object(nn.isColorName)(t)
              ? Object(nn.hexToRgba)(Object(nn.colorNameToHex)(t), 0.7)
              : Object(nn.hexToRgba)(t, 0.7);
          },
          cn = function () {
            if (!window) return null;
            var t = window.navigator.userLanguage || window.navigator.language,
              e = t ? t.substr(3, 4).toUpperCase() : null;
            return "" === e && (e = t.substr(0, 2).toUpperCase()), e;
          },
          dn = {
            name: "VuePhoneNumberInput",
            components: { InputTel: Be, CountrySelector: tn },
            props: {
              value: { type: String, default: null },
              id: { type: String, default: "MazPhoneNumberInput" },
              color: { type: String, default: "dodgerblue" },
              validColor: { type: String, default: "yellowgreen" },
              errorColor: { type: String, default: "orangered" },
              darkColor: { type: String, default: "#424242" },
              disabled: { type: Boolean, default: !1 },
              defaultCountryCode: { type: String, default: null },
              size: { type: String, default: null },
              preferredCountries: { type: Array, default: null },
              onlyCountries: { type: Array, default: null },
              ignoredCountries: { type: Array, default: Array },
              translations: { type: Object, default: null },
              noValidatorState: { type: Boolean, default: !1 },
              noFlags: { type: Boolean, default: !1 },
              error: { type: Boolean, default: !1 },
              noExample: { type: Boolean, default: !1 },
              required: { type: Boolean, default: !1 },
              countriesHeight: { type: Number, default: 30 },
              noUseBrowserLocale: { type: Boolean, default: !1 },
              fetchCountry: { type: Boolean, default: !1 },
              noCountrySelector: { type: Boolean, default: !1 },
              showCodeOnList: { type: Boolean, default: !1 },
              dark: { type: Boolean, default: !1 },
              borderRadius: { type: Number, default: 4 },
            },
            data: function () {
              return {
                results: {},
                userLocale: this.defaultCountryCode,
                lastKeyPressed: null,
              };
            },
            computed: {
              uniqueId: function () {
                return "".concat(this.id, "-").concat(this._uid);
              },
              t: function () {
                return on(on({}, en), this.translations);
              },
              codesCountries: function () {
                return b;
              },
              countryCode: {
                get: function () {
                  return this.userLocale || this.results.countryCode;
                },
                set: function (t) {
                  this.setLocale(t),
                    this.$refs.PhoneNumberInput.$el
                      .querySelector("input")
                      .focus();
                },
              },
              phoneNumber: {
                get: function () {
                  return this.value;
                },
                set: function (t) {
                  this.emitValues({
                    countryCode: this.countryCode,
                    phoneNumber: t,
                  });
                },
              },
              shouldChooseCountry: function () {
                return !this.countryCode && !!this.phoneNumber;
              },
              phoneFormatted: function () {
                return this.results.formatInternational;
              },
              isValid: function () {
                return this.results.isValid;
              },
              phoneNumberExample: function () {
                var t = this.countryCode
                  ? (function () {
                      return v(mt, arguments);
                    })(this.countryCode, m)
                  : null;
                return t ? t.formatNational() : null;
              },
              hasEmptyPhone: function () {
                return "" === this.phoneNumber || null === this.phoneNumber;
              },
              hintValue: function () {
                return this.noExample ||
                  !this.phoneNumberExample ||
                  this.hasEmptyPhone ||
                  this.isValid
                  ? null
                  : ""
                      .concat(this.t.example, " ")
                      .concat(this.phoneNumberExample);
              },
              theme: function () {
                return {
                  colorValue: this.color,
                  color: { color: this.color },
                  textColor: { color: "#747474" },
                  textDarkColor: { color: "rgba(255, 255, 255, 0.7)" },
                  validColor: { color: this.validColor },
                  errorColor: { color: this.errorColor },
                  darkColor: { color: this.darkColor },
                  bgColor: { backgroundColor: this.color },
                  bgValidColor: { backgroundColor: this.validColor },
                  bgErrorColor: { backgroundColor: this.errorColor },
                  bgDarkColor: { backgroundColor: this.darkColor },
                  borderColor: { borderColor: this.color },
                  borderValidColor: { borderColor: this.validColor },
                  borderErrorColor: { borderColor: this.errorColor },
                  borderDarkColor: { borderColor: this.darkColor },
                  boxShadowColor: {
                    boxShadow: "0 0 0 0.125rem ".concat(ln(this.color)),
                  },
                  boxShadowValid: {
                    boxShadow: "0 0 0 0.125rem ".concat(ln(this.validColor)),
                  },
                  boxShadowError: {
                    boxShadow: "0 0 0 0.125rem ".concat(ln(this.errorColor)),
                  },
                  borderRadius: {
                    borderRadius: "".concat(this.borderRadius, "px"),
                  },
                  borderLeftRadius: {
                    borderTopLeftRadius: "".concat(this.borderRadius, "px"),
                    borderBottomLeftRadius: "".concat(this.borderRadius, "px"),
                  },
                  borderRightRadius: {
                    borderTopRightRadius: "".concat(this.borderRadius, "px"),
                    borderBottomRightRadius: "".concat(this.borderRadius, "px"),
                  },
                };
              },
            },
            watch: {
              defaultCountryCode: function (t, e) {
                t !== e && this.setLocale(t);
              },
              phoneNumber: {
                handler: function (t, e) {
                  if (t && t !== e) {
                    var n = re(t);
                    n &&
                      this.emitValues({
                        phoneNumber: n.nationalNumber,
                        countryCode: this.countryCode
                          ? this.countryCode
                          : n.country,
                      });
                  }
                },
                immediate: !0,
              },
            },
            mounted:
              ((sn = c(
                regeneratorRuntime.mark(function t() {
                  return regeneratorRuntime.wrap(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            if (
                              ((t.prev = 0),
                              this.phoneNumber &&
                                this.defaultCountryCode &&
                                this.emitValues({
                                  countryCode: this.defaultCountryCode,
                                  phoneNumber: this.phoneNumber,
                                }),
                              !this.defaultCountryCode || !this.fetchCountry)
                            ) {
                              t.next = 4;
                              break;
                            }
                            throw new Error(
                              'MazPhoneNumberInput: Do not use "fetch-country" and "default-country-code" options in the same time'
                            );
                          case 4:
                            if (
                              !this.defaultCountryCode ||
                              !this.noUseBrowserLocale
                            ) {
                              t.next = 6;
                              break;
                            }
                            throw new Error(
                              'MazPhoneNumberInput: If you use a "default-country-code", do not use "no-use-browser-locale" options'
                            );
                          case 6:
                            if (!this.defaultCountryCode) {
                              t.next = 8;
                              break;
                            }
                            return t.abrupt("return");
                          case 8:
                            this.fetchCountry
                              ? this.fetchCountryCode()
                              : !this.noUseBrowserLocale &&
                                this.setLocale(cn()),
                              (t.next = 14);
                            break;
                          case 11:
                            throw (
                              ((t.prev = 11),
                              (t.t0 = t.catch(0)),
                              new Error(t.t0))
                            );
                          case 14:
                          case "end":
                            return t.stop();
                        }
                    },
                    t,
                    this,
                    [[0, 11]]
                  );
                })
              )),
              function () {
                return sn.apply(this, arguments);
              }),
            methods: {
              getAsYouTypeFormat: function (t) {
                var e = t.countryCode,
                  n = t.phoneNumber,
                  i = new Re(e);
                return n ? i.input(n) : null;
              },
              getParsePhoneNumberFromString: function (t) {
                var e = t.phoneNumber,
                  n = t.countryCode,
                  i = e && n ? re(e, n) : null;
                return on(
                  on(
                    { countryCode: n, isValid: !1 },
                    e && "" !== e ? { phoneNumber: e } : null
                  ),
                  i
                    ? {
                        countryCallingCode: i.countryCallingCode,
                        formattedNumber: i.number,
                        nationalNumber: i.nationalNumber,
                        isValid: i.isValid(),
                        type: i.getType(),
                        formatInternational: i.formatInternational(),
                        formatNational: i.formatNational(),
                        uri: i.getURI(),
                        e164: i.format("E.164"),
                      }
                    : null
                );
              },
              emitValues: function (t) {
                var e = this,
                  n = this.getAsYouTypeFormat(t),
                  i = 8 === this.lastKeyPressed;
                this.$nextTick(function () {
                  var r = !!e.phoneNumber && e.phoneNumber.trim().slice(-1);
                  i &&
                    r &&
                    ")" === r.slice(-1) &&
                    ((n = e.phoneNumber.slice(0, -2)),
                    (t.phoneNumber = e.phoneNumber.slice(0, -2))),
                    (e.results = e.getParsePhoneNumberFromString(t)),
                    e.$emit("update", e.results),
                    e.$emit("input", n);
                });
              },
              setLocale: function (t) {
                var e = (function (t) {
                  return f.includes(t);
                })(t);
                e && t
                  ? ((this.userLocale = e ? t : null),
                    this.emitValues({
                      countryCode: t,
                      phoneNumber: this.phoneNumber,
                    }))
                  : !e &&
                    t &&
                    window.console.warn(
                      "The locale ".concat(t, " is not available")
                    );
              },
              fetchCountryCode:
                ((an = c(
                  regeneratorRuntime.mark(function t() {
                    var e, n, i;
                    return regeneratorRuntime.wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (
                                (t.prev = 0),
                                (t.next = 3),
                                fetch("https://ip2c.org/s")
                              );
                            case 3:
                              return (e = t.sent), (t.next = 6), e.text();
                            case 6:
                              (n = t.sent),
                                (i = (n || "").toString()) &&
                                  "1" === i[0] &&
                                  this.setLocale(i.substr(2, 2)),
                                (t.next = 14);
                              break;
                            case 11:
                              throw (
                                ((t.prev = 11),
                                (t.t0 = t.catch(0)),
                                new Error(t.t0))
                              );
                            case 14:
                            case "end":
                              return t.stop();
                          }
                      },
                      t,
                      this,
                      [[0, 11]]
                    );
                  })
                )),
                function () {
                  return an.apply(this, arguments);
                }),
            },
          },
          un =
            (n("e214"),
            Ne(
              dn,
              function () {
                var t = this,
                  e = t.$createElement,
                  n = t._self._c || e;
                return n(
                  "div",
                  {
                    staticClass: "vue-phone-number-input flex",
                    class: [{ dark: t.dark }, t.size],
                    attrs: { id: t.id },
                  },
                  [
                    t.noCountrySelector
                      ? t._e()
                      : n(
                          "div",
                          { staticClass: "select-country-container" },
                          [
                            n(
                              "CountrySelector",
                              {
                                ref: "CountrySelector",
                                staticClass: "input-country-selector",
                                attrs: {
                                  id: t.uniqueId + "_country_selector",
                                  items: t.codesCountries,
                                  "countries-height": t.countriesHeight,
                                  error: t.shouldChooseCountry,
                                  hint: t.shouldChooseCountry
                                    ? t.t.countrySelectorError
                                    : null,
                                  disabled: t.disabled,
                                  valid: t.isValid && !t.noValidatorState,
                                  "preferred-countries": t.preferredCountries,
                                  "only-countries": t.onlyCountries,
                                  "ignored-countries": t.ignoredCountries,
                                  label: t.t.countrySelectorLabel,
                                  "no-flags": t.noFlags,
                                  "show-code-on-list": t.showCodeOnList,
                                  size: t.size,
                                  dark: t.dark,
                                  theme: t.theme,
                                },
                                model: {
                                  value: t.countryCode,
                                  callback: function (e) {
                                    t.countryCode = e;
                                  },
                                  expression: "countryCode",
                                },
                              },
                              [t._t("arrow", null, { slot: "arrow" })],
                              2
                            ),
                          ],
                          1
                        ),
                    n(
                      "div",
                      { staticClass: "flex-1" },
                      [
                        n(
                          "InputTel",
                          t._b(
                            {
                              ref: "PhoneNumberInput",
                              staticClass: "input-phone-number",
                              attrs: {
                                id: t.uniqueId + "_phone_number",
                                label: t.t.phoneNumberLabel,
                                hint: t.hintValue,
                                dark: t.dark,
                                disabled: t.disabled,
                                size: t.size,
                                error: t.error,
                                valid: t.isValid && !t.noValidatorState,
                                required: t.required,
                                "no-country-selector": t.noCountrySelector,
                                theme: t.theme,
                              },
                              on: {
                                keydown: function (e) {
                                  t.lastKeyPressed = e.keyCode;
                                },
                                focus: function (e) {
                                  return t.$emit("phone-number-focused");
                                },
                                blur: function (e) {
                                  return t.$emit("phone-number-blur");
                                },
                              },
                              model: {
                                value: t.phoneNumber,
                                callback: function (e) {
                                  t.phoneNumber = e;
                                },
                                expression: "phoneNumber",
                              },
                            },
                            "InputTel",
                            t.$attrs,
                            !1
                          )
                        ),
                      ],
                      1
                    ),
                  ]
                );
              },
              [],
              !1,
              null,
              "19351537",
              null
            ).exports);
        e.default = un;
      },
      fdef: function (t, e) {
        t.exports = "\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff";
      },
    }).default;
  },
  function (t, e, n) {
    "use strict";
    n.d(e, "a", function () {
      return b;
    });
    var i = n(4),
      r = n(92),
      o = n(2),
      a = n(1),
      s = n(5),
      l = n(0);
    function c(t, e) {
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
    function d(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? c(Object(n), !0).forEach(function (e) {
              u(t, e, n[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
          : c(Object(n)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(n, e)
              );
            });
      }
      return t;
    }
    function u(t, e, n) {
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
    var p = {
        name: "",
        enterClass: "",
        enterActiveClass: "",
        enterToClass: "show",
        leaveClass: "show",
        leaveActiveClass: "",
        leaveToClass: "",
      },
      h = d(
        d({}, p),
        {},
        { enterActiveClass: "fade", leaveActiveClass: "fade" }
      ),
      f = {
        appear: Object(l.c)(a.g, !1),
        mode: Object(l.c)(a.u),
        noFade: Object(l.c)(a.g, !1),
        transProps: Object(l.c)(a.q),
      },
      b = Object(i.c)({
        name: o.wc,
        functional: !0,
        props: f,
        render: function (t, e) {
          var n = e.children,
            i = e.data,
            o = e.props,
            a = o.transProps;
          Object(s.k)(a) ||
            ((a = o.noFade ? p : h),
            o.appear &&
              (a = d(
                d({}, a),
                {},
                {
                  appear: !0,
                  appearClass: a.enterClass,
                  appearActiveClass: a.enterActiveClass,
                  appearToClass: a.enterToClass,
                }
              ))),
            (a = d(d({ mode: o.mode }, a), {}, { css: !0 }));
          var l = d({}, i);
          return (
            delete l.props, t("transition", Object(r.a)(l, { props: a }), n)
          );
        },
      });
  },
  function (t, e, n) {
    "use strict";
    n.d(e, "b", function () {
      return i;
    }),
      n.d(e, "c", function () {
        return r;
      }),
      n.d(e, "a", function () {
        return o;
      });
    var i = "BvConfig",
      r = "$bvConfig",
      o = ["xs", "sm", "md", "lg", "xl"];
  },
  function (t, e) {
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
  function (t, e, n) {
    "use strict";
    var i = n(184),
      r = Object.prototype.toString;
    function o(t) {
      return "[object Array]" === r.call(t);
    }
    function a(t) {
      return void 0 === t;
    }
    function s(t) {
      return null !== t && "object" == typeof t;
    }
    function l(t) {
      return "[object Function]" === r.call(t);
    }
    function c(t, e) {
      if (null != t)
        if (("object" != typeof t && (t = [t]), o(t)))
          for (var n = 0, i = t.length; n < i; n++) e.call(null, t[n], n, t);
        else
          for (var r in t)
            Object.prototype.hasOwnProperty.call(t, r) &&
              e.call(null, t[r], r, t);
    }
    t.exports = {
      isArray: o,
      isArrayBuffer: function (t) {
        return "[object ArrayBuffer]" === r.call(t);
      },
      isBuffer: function (t) {
        return (
          null !== t &&
          !a(t) &&
          null !== t.constructor &&
          !a(t.constructor) &&
          "function" == typeof t.constructor.isBuffer &&
          t.constructor.isBuffer(t)
        );
      },
      isFormData: function (t) {
        return "undefined" != typeof FormData && t instanceof FormData;
      },
      isArrayBufferView: function (t) {
        return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView
          ? ArrayBuffer.isView(t)
          : t && t.buffer && t.buffer instanceof ArrayBuffer;
      },
      isString: function (t) {
        return "string" == typeof t;
      },
      isNumber: function (t) {
        return "number" == typeof t;
      },
      isObject: s,
      isUndefined: a,
      isDate: function (t) {
        return "[object Date]" === r.call(t);
      },
      isFile: function (t) {
        return "[object File]" === r.call(t);
      },
      isBlob: function (t) {
        return "[object Blob]" === r.call(t);
      },
      isFunction: l,
      isStream: function (t) {
        return s(t) && l(t.pipe);
      },
      isURLSearchParams: function (t) {
        return (
          "undefined" != typeof URLSearchParams && t instanceof URLSearchParams
        );
      },
      isStandardBrowserEnv: function () {
        return (
          ("undefined" == typeof navigator ||
            ("ReactNative" !== navigator.product &&
              "NativeScript" !== navigator.product &&
              "NS" !== navigator.product)) &&
          "undefined" != typeof window &&
          "undefined" != typeof document
        );
      },
      forEach: c,
      merge: function t() {
        var e = {};
        function n(n, i) {
          "object" == typeof e[i] && "object" == typeof n
            ? (e[i] = t(e[i], n))
            : (e[i] = n);
        }
        for (var i = 0, r = arguments.length; i < r; i++) c(arguments[i], n);
        return e;
      },
      deepMerge: function t() {
        var e = {};
        function n(n, i) {
          "object" == typeof e[i] && "object" == typeof n
            ? (e[i] = t(e[i], n))
            : (e[i] = "object" == typeof n ? t({}, n) : n);
        }
        for (var i = 0, r = arguments.length; i < r; i++) c(arguments[i], n);
        return e;
      },
      extend: function (t, e, n) {
        return (
          c(e, function (e, r) {
            t[r] = n && "function" == typeof e ? i(e, n) : e;
          }),
          t
        );
      },
      trim: function (t) {
        return t.replace(/^\s*/, "").replace(/\s*$/, "");
      },
    };
  },
  function (t, e, n) {
    (function (e) {
      var n;
      "undefined" != typeof self && self,
        (n = function () {
          return (function (t) {
            var e = {};
            function n(i) {
              if (e[i]) return e[i].exports;
              var r = (e[i] = { i: i, l: !1, exports: {} });
              return (
                t[i].call(r.exports, r, r.exports, n), (r.l = !0), r.exports
              );
            }
            return (
              (n.m = t),
              (n.c = e),
              (n.d = function (t, e, i) {
                n.o(t, e) ||
                  Object.defineProperty(t, e, {
                    configurable: !1,
                    enumerable: !0,
                    get: i,
                  });
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
              n((n.s = 109))
            );
          })([
            function (t, e, n) {
              "use strict";
              Object.defineProperty(e, "__esModule", { value: !0 });
              var i = n(17),
                r = n(18),
                o = n(19),
                a = n(45),
                s = n(46),
                l = n(47),
                c = n(48),
                d = n(49),
                u = n(12),
                p = n(32),
                h = n(33),
                f = n(31),
                b = n(1),
                m = {
                  Scope: b.Scope,
                  create: b.create,
                  find: b.find,
                  query: b.query,
                  register: b.register,
                  Container: i.default,
                  Format: r.default,
                  Leaf: o.default,
                  Embed: c.default,
                  Scroll: a.default,
                  Block: l.default,
                  Inline: s.default,
                  Text: d.default,
                  Attributor: {
                    Attribute: u.default,
                    Class: p.default,
                    Style: h.default,
                    Store: f.default,
                  },
                };
              e.default = m;
            },
            function (t, e, n) {
              "use strict";
              var i,
                r =
                  (this && this.__extends) ||
                  ((i =
                    Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array &&
                      function (t, e) {
                        t.__proto__ = e;
                      }) ||
                    function (t, e) {
                      for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
                    }),
                  function (t, e) {
                    function n() {
                      this.constructor = t;
                    }
                    i(t, e),
                      (t.prototype =
                        null === e
                          ? Object.create(e)
                          : ((n.prototype = e.prototype), new n()));
                  });
              Object.defineProperty(e, "__esModule", { value: !0 });
              var o = (function (t) {
                function e(e) {
                  var n = this;
                  return (
                    (e = "[Parchment] " + e),
                    ((n = t.call(this, e) || this).message = e),
                    (n.name = n.constructor.name),
                    n
                  );
                }
                return r(e, t), e;
              })(Error);
              e.ParchmentError = o;
              var a,
                s = {},
                l = {},
                c = {},
                d = {};
              function u(t, e) {
                var n;
                if ((void 0 === e && (e = a.ANY), "string" == typeof t))
                  n = d[t] || s[t];
                else if (t instanceof Text || t.nodeType === Node.TEXT_NODE)
                  n = d.text;
                else if ("number" == typeof t)
                  t & a.LEVEL & a.BLOCK
                    ? (n = d.block)
                    : t & a.LEVEL & a.INLINE && (n = d.inline);
                else if (t instanceof HTMLElement) {
                  var i = (t.getAttribute("class") || "").split(/\s+/);
                  for (var r in i) if ((n = l[i[r]])) break;
                  n = n || c[t.tagName];
                }
                return null == n
                  ? null
                  : e & a.LEVEL & n.scope && e & a.TYPE & n.scope
                  ? n
                  : null;
              }
              (e.DATA_KEY = "__blot"),
                (function (t) {
                  (t[(t.TYPE = 3)] = "TYPE"),
                    (t[(t.LEVEL = 12)] = "LEVEL"),
                    (t[(t.ATTRIBUTE = 13)] = "ATTRIBUTE"),
                    (t[(t.BLOT = 14)] = "BLOT"),
                    (t[(t.INLINE = 7)] = "INLINE"),
                    (t[(t.BLOCK = 11)] = "BLOCK"),
                    (t[(t.BLOCK_BLOT = 10)] = "BLOCK_BLOT"),
                    (t[(t.INLINE_BLOT = 6)] = "INLINE_BLOT"),
                    (t[(t.BLOCK_ATTRIBUTE = 9)] = "BLOCK_ATTRIBUTE"),
                    (t[(t.INLINE_ATTRIBUTE = 5)] = "INLINE_ATTRIBUTE"),
                    (t[(t.ANY = 15)] = "ANY");
                })((a = e.Scope || (e.Scope = {}))),
                (e.create = function (t, e) {
                  var n = u(t);
                  if (null == n) throw new o("Unable to create " + t + " blot");
                  var i = n,
                    r =
                      t instanceof Node || t.nodeType === Node.TEXT_NODE
                        ? t
                        : i.create(e);
                  return new i(r, e);
                }),
                (e.find = function t(n, i) {
                  return (
                    void 0 === i && (i = !1),
                    null == n
                      ? null
                      : null != n[e.DATA_KEY]
                      ? n[e.DATA_KEY].blot
                      : i
                      ? t(n.parentNode, i)
                      : null
                  );
                }),
                (e.query = u),
                (e.register = function t() {
                  for (var e = [], n = 0; n < arguments.length; n++)
                    e[n] = arguments[n];
                  if (e.length > 1)
                    return e.map(function (e) {
                      return t(e);
                    });
                  var i = e[0];
                  if (
                    "string" != typeof i.blotName &&
                    "string" != typeof i.attrName
                  )
                    throw new o("Invalid definition");
                  if ("abstract" === i.blotName)
                    throw new o("Cannot register abstract class");
                  if (
                    ((d[i.blotName || i.attrName] = i),
                    "string" == typeof i.keyName)
                  )
                    s[i.keyName] = i;
                  else if (
                    (null != i.className && (l[i.className] = i),
                    null != i.tagName)
                  ) {
                    Array.isArray(i.tagName)
                      ? (i.tagName = i.tagName.map(function (t) {
                          return t.toUpperCase();
                        }))
                      : (i.tagName = i.tagName.toUpperCase());
                    var r = Array.isArray(i.tagName) ? i.tagName : [i.tagName];
                    r.forEach(function (t) {
                      (null != c[t] && null != i.className) || (c[t] = i);
                    });
                  }
                  return i;
                });
            },
            function (t, e, n) {
              var i = n(51),
                r = n(11),
                o = n(3),
                a = n(20),
                s = String.fromCharCode(0),
                l = function (t) {
                  Array.isArray(t)
                    ? (this.ops = t)
                    : null != t && Array.isArray(t.ops)
                    ? (this.ops = t.ops)
                    : (this.ops = []);
                };
              (l.prototype.insert = function (t, e) {
                var n = {};
                return 0 === t.length
                  ? this
                  : ((n.insert = t),
                    null != e &&
                      "object" == typeof e &&
                      Object.keys(e).length > 0 &&
                      (n.attributes = e),
                    this.push(n));
              }),
                (l.prototype.delete = function (t) {
                  return t <= 0 ? this : this.push({ delete: t });
                }),
                (l.prototype.retain = function (t, e) {
                  if (t <= 0) return this;
                  var n = { retain: t };
                  return (
                    null != e &&
                      "object" == typeof e &&
                      Object.keys(e).length > 0 &&
                      (n.attributes = e),
                    this.push(n)
                  );
                }),
                (l.prototype.push = function (t) {
                  var e = this.ops.length,
                    n = this.ops[e - 1];
                  if (((t = o(!0, {}, t)), "object" == typeof n)) {
                    if (
                      "number" == typeof t.delete &&
                      "number" == typeof n.delete
                    )
                      return (
                        (this.ops[e - 1] = { delete: n.delete + t.delete }),
                        this
                      );
                    if (
                      "number" == typeof n.delete &&
                      null != t.insert &&
                      ((e -= 1), "object" != typeof (n = this.ops[e - 1]))
                    )
                      return this.ops.unshift(t), this;
                    if (r(t.attributes, n.attributes)) {
                      if (
                        "string" == typeof t.insert &&
                        "string" == typeof n.insert
                      )
                        return (
                          (this.ops[e - 1] = { insert: n.insert + t.insert }),
                          "object" == typeof t.attributes &&
                            (this.ops[e - 1].attributes = t.attributes),
                          this
                        );
                      if (
                        "number" == typeof t.retain &&
                        "number" == typeof n.retain
                      )
                        return (
                          (this.ops[e - 1] = { retain: n.retain + t.retain }),
                          "object" == typeof t.attributes &&
                            (this.ops[e - 1].attributes = t.attributes),
                          this
                        );
                    }
                  }
                  return (
                    e === this.ops.length
                      ? this.ops.push(t)
                      : this.ops.splice(e, 0, t),
                    this
                  );
                }),
                (l.prototype.chop = function () {
                  var t = this.ops[this.ops.length - 1];
                  return t && t.retain && !t.attributes && this.ops.pop(), this;
                }),
                (l.prototype.filter = function (t) {
                  return this.ops.filter(t);
                }),
                (l.prototype.forEach = function (t) {
                  this.ops.forEach(t);
                }),
                (l.prototype.map = function (t) {
                  return this.ops.map(t);
                }),
                (l.prototype.partition = function (t) {
                  var e = [],
                    n = [];
                  return (
                    this.forEach(function (i) {
                      (t(i) ? e : n).push(i);
                    }),
                    [e, n]
                  );
                }),
                (l.prototype.reduce = function (t, e) {
                  return this.ops.reduce(t, e);
                }),
                (l.prototype.changeLength = function () {
                  return this.reduce(function (t, e) {
                    return e.insert
                      ? t + a.length(e)
                      : e.delete
                      ? t - e.delete
                      : t;
                  }, 0);
                }),
                (l.prototype.length = function () {
                  return this.reduce(function (t, e) {
                    return t + a.length(e);
                  }, 0);
                }),
                (l.prototype.slice = function (t, e) {
                  (t = t || 0), "number" != typeof e && (e = 1 / 0);
                  for (
                    var n = [], i = a.iterator(this.ops), r = 0;
                    r < e && i.hasNext();

                  ) {
                    var o;
                    r < t
                      ? (o = i.next(t - r))
                      : ((o = i.next(e - r)), n.push(o)),
                      (r += a.length(o));
                  }
                  return new l(n);
                }),
                (l.prototype.compose = function (t) {
                  var e = a.iterator(this.ops),
                    n = a.iterator(t.ops),
                    i = [],
                    o = n.peek();
                  if (
                    null != o &&
                    "number" == typeof o.retain &&
                    null == o.attributes
                  ) {
                    for (
                      var s = o.retain;
                      "insert" === e.peekType() && e.peekLength() <= s;

                    )
                      (s -= e.peekLength()), i.push(e.next());
                    o.retain - s > 0 && n.next(o.retain - s);
                  }
                  for (var c = new l(i); e.hasNext() || n.hasNext(); )
                    if ("insert" === n.peekType()) c.push(n.next());
                    else if ("delete" === e.peekType()) c.push(e.next());
                    else {
                      var d = Math.min(e.peekLength(), n.peekLength()),
                        u = e.next(d),
                        p = n.next(d);
                      if ("number" == typeof p.retain) {
                        var h = {};
                        "number" == typeof u.retain
                          ? (h.retain = d)
                          : (h.insert = u.insert);
                        var f = a.attributes.compose(
                          u.attributes,
                          p.attributes,
                          "number" == typeof u.retain
                        );
                        if (
                          (f && (h.attributes = f),
                          c.push(h),
                          !n.hasNext() && r(c.ops[c.ops.length - 1], h))
                        ) {
                          var b = new l(e.rest());
                          return c.concat(b).chop();
                        }
                      } else
                        "number" == typeof p.delete &&
                          "number" == typeof u.retain &&
                          c.push(p);
                    }
                  return c.chop();
                }),
                (l.prototype.concat = function (t) {
                  var e = new l(this.ops.slice());
                  return (
                    t.ops.length > 0 &&
                      (e.push(t.ops[0]),
                      (e.ops = e.ops.concat(t.ops.slice(1)))),
                    e
                  );
                }),
                (l.prototype.diff = function (t, e) {
                  if (this.ops === t.ops) return new l();
                  var n = [this, t].map(function (e) {
                      return e
                        .map(function (n) {
                          if (null != n.insert)
                            return "string" == typeof n.insert ? n.insert : s;
                          throw new Error(
                            "diff() called " +
                              (e === t ? "on" : "with") +
                              " non-document"
                          );
                        })
                        .join("");
                    }),
                    o = new l(),
                    c = i(n[0], n[1], e),
                    d = a.iterator(this.ops),
                    u = a.iterator(t.ops);
                  return (
                    c.forEach(function (t) {
                      for (var e = t[1].length; e > 0; ) {
                        var n = 0;
                        switch (t[0]) {
                          case i.INSERT:
                            (n = Math.min(u.peekLength(), e)),
                              o.push(u.next(n));
                            break;
                          case i.DELETE:
                            (n = Math.min(e, d.peekLength())),
                              d.next(n),
                              o.delete(n);
                            break;
                          case i.EQUAL:
                            n = Math.min(d.peekLength(), u.peekLength(), e);
                            var s = d.next(n),
                              l = u.next(n);
                            r(s.insert, l.insert)
                              ? o.retain(
                                  n,
                                  a.attributes.diff(s.attributes, l.attributes)
                                )
                              : o.push(l).delete(n);
                        }
                        e -= n;
                      }
                    }),
                    o.chop()
                  );
                }),
                (l.prototype.eachLine = function (t, e) {
                  e = e || "\n";
                  for (
                    var n = a.iterator(this.ops), i = new l(), r = 0;
                    n.hasNext();

                  ) {
                    if ("insert" !== n.peekType()) return;
                    var o = n.peek(),
                      s = a.length(o) - n.peekLength(),
                      c =
                        "string" == typeof o.insert
                          ? o.insert.indexOf(e, s) - s
                          : -1;
                    if (c < 0) i.push(n.next());
                    else if (c > 0) i.push(n.next(c));
                    else {
                      if (!1 === t(i, n.next(1).attributes || {}, r)) return;
                      (r += 1), (i = new l());
                    }
                  }
                  i.length() > 0 && t(i, {}, r);
                }),
                (l.prototype.transform = function (t, e) {
                  if (((e = !!e), "number" == typeof t))
                    return this.transformPosition(t, e);
                  for (
                    var n = a.iterator(this.ops),
                      i = a.iterator(t.ops),
                      r = new l();
                    n.hasNext() || i.hasNext();

                  )
                    if (
                      "insert" !== n.peekType() ||
                      (!e && "insert" === i.peekType())
                    )
                      if ("insert" === i.peekType()) r.push(i.next());
                      else {
                        var o = Math.min(n.peekLength(), i.peekLength()),
                          s = n.next(o),
                          c = i.next(o);
                        if (s.delete) continue;
                        c.delete
                          ? r.push(c)
                          : r.retain(
                              o,
                              a.attributes.transform(
                                s.attributes,
                                c.attributes,
                                e
                              )
                            );
                      }
                    else r.retain(a.length(n.next()));
                  return r.chop();
                }),
                (l.prototype.transformPosition = function (t, e) {
                  e = !!e;
                  for (
                    var n = a.iterator(this.ops), i = 0;
                    n.hasNext() && i <= t;

                  ) {
                    var r = n.peekLength(),
                      o = n.peekType();
                    n.next(),
                      "delete" !== o
                        ? ("insert" === o && (i < t || !e) && (t += r),
                          (i += r))
                        : (t -= Math.min(r, t - i));
                  }
                  return t;
                }),
                (t.exports = l);
            },
            function (t, e) {
              "use strict";
              var n = Object.prototype.hasOwnProperty,
                i = Object.prototype.toString,
                r = Object.defineProperty,
                o = Object.getOwnPropertyDescriptor,
                a = function (t) {
                  return "function" == typeof Array.isArray
                    ? Array.isArray(t)
                    : "[object Array]" === i.call(t);
                },
                s = function (t) {
                  if (!t || "[object Object]" !== i.call(t)) return !1;
                  var e,
                    r = n.call(t, "constructor"),
                    o =
                      t.constructor &&
                      t.constructor.prototype &&
                      n.call(t.constructor.prototype, "isPrototypeOf");
                  if (t.constructor && !r && !o) return !1;
                  for (e in t);
                  return void 0 === e || n.call(t, e);
                },
                l = function (t, e) {
                  r && "__proto__" === e.name
                    ? r(t, e.name, {
                        enumerable: !0,
                        configurable: !0,
                        value: e.newValue,
                        writable: !0,
                      })
                    : (t[e.name] = e.newValue);
                },
                c = function (t, e) {
                  if ("__proto__" === e) {
                    if (!n.call(t, e)) return;
                    if (o) return o(t, e).value;
                  }
                  return t[e];
                };
              t.exports = function t() {
                var e,
                  n,
                  i,
                  r,
                  o,
                  d,
                  u = arguments[0],
                  p = 1,
                  h = arguments.length,
                  f = !1;
                for (
                  "boolean" == typeof u &&
                    ((f = u), (u = arguments[1] || {}), (p = 2)),
                    (null == u ||
                      ("object" != typeof u && "function" != typeof u)) &&
                      (u = {});
                  p < h;
                  ++p
                )
                  if (null != (e = arguments[p]))
                    for (n in e)
                      (i = c(u, n)),
                        u !== (r = c(e, n)) &&
                          (f && r && (s(r) || (o = a(r)))
                            ? (o
                                ? ((o = !1), (d = i && a(i) ? i : []))
                                : (d = i && s(i) ? i : {}),
                              l(u, { name: n, newValue: t(f, d, r) }))
                            : void 0 !== r && l(u, { name: n, newValue: r }));
                return u;
              };
            },
            function (t, e, n) {
              "use strict";
              Object.defineProperty(e, "__esModule", { value: !0 }),
                (e.default = e.BlockEmbed = e.bubbleFormats = void 0);
              var i = (function () {
                  function t(t, e) {
                    for (var n = 0; n < e.length; n++) {
                      var i = e[n];
                      (i.enumerable = i.enumerable || !1),
                        (i.configurable = !0),
                        "value" in i && (i.writable = !0),
                        Object.defineProperty(t, i.key, i);
                    }
                  }
                  return function (e, n, i) {
                    return n && t(e.prototype, n), i && t(e, i), e;
                  };
                })(),
                r = function t(e, n, i) {
                  null === e && (e = Function.prototype);
                  var r = Object.getOwnPropertyDescriptor(e, n);
                  if (void 0 === r) {
                    var o = Object.getPrototypeOf(e);
                    return null === o ? void 0 : t(o, n, i);
                  }
                  if ("value" in r) return r.value;
                  var a = r.get;
                  return void 0 !== a ? a.call(i) : void 0;
                },
                o = u(n(3)),
                a = u(n(2)),
                s = u(n(0)),
                l = u(n(16)),
                c = u(n(6)),
                d = u(n(7));
              function u(t) {
                return t && t.__esModule ? t : { default: t };
              }
              function p(t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              }
              function h(t, e) {
                if (!t)
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                return !e || ("object" != typeof e && "function" != typeof e)
                  ? t
                  : e;
              }
              function f(t, e) {
                if ("function" != typeof e && null !== e)
                  throw new TypeError(
                    "Super expression must either be null or a function, not " +
                      typeof e
                  );
                (t.prototype = Object.create(e && e.prototype, {
                  constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                  },
                })),
                  e &&
                    (Object.setPrototypeOf
                      ? Object.setPrototypeOf(t, e)
                      : (t.__proto__ = e));
              }
              var b = (function (t) {
                function e() {
                  return (
                    p(this, e),
                    h(
                      this,
                      (e.__proto__ || Object.getPrototypeOf(e)).apply(
                        this,
                        arguments
                      )
                    )
                  );
                }
                return (
                  f(e, t),
                  i(e, [
                    {
                      key: "attach",
                      value: function () {
                        r(
                          e.prototype.__proto__ ||
                            Object.getPrototypeOf(e.prototype),
                          "attach",
                          this
                        ).call(this),
                          (this.attributes = new s.default.Attributor.Store(
                            this.domNode
                          ));
                      },
                    },
                    {
                      key: "delta",
                      value: function () {
                        return new a.default().insert(
                          this.value(),
                          (0, o.default)(
                            this.formats(),
                            this.attributes.values()
                          )
                        );
                      },
                    },
                    {
                      key: "format",
                      value: function (t, e) {
                        var n = s.default.query(
                          t,
                          s.default.Scope.BLOCK_ATTRIBUTE
                        );
                        null != n && this.attributes.attribute(n, e);
                      },
                    },
                    {
                      key: "formatAt",
                      value: function (t, e, n, i) {
                        this.format(n, i);
                      },
                    },
                    {
                      key: "insertAt",
                      value: function (t, n, i) {
                        if ("string" == typeof n && n.endsWith("\n")) {
                          var o = s.default.create(m.blotName);
                          this.parent.insertBefore(
                            o,
                            0 === t ? this : this.next
                          ),
                            o.insertAt(0, n.slice(0, -1));
                        } else
                          r(
                            e.prototype.__proto__ ||
                              Object.getPrototypeOf(e.prototype),
                            "insertAt",
                            this
                          ).call(this, t, n, i);
                      },
                    },
                  ]),
                  e
                );
              })(s.default.Embed);
              b.scope = s.default.Scope.BLOCK_BLOT;
              var m = (function (t) {
                function e(t) {
                  p(this, e);
                  var n = h(
                    this,
                    (e.__proto__ || Object.getPrototypeOf(e)).call(this, t)
                  );
                  return (n.cache = {}), n;
                }
                return (
                  f(e, t),
                  i(e, [
                    {
                      key: "delta",
                      value: function () {
                        return (
                          null == this.cache.delta &&
                            (this.cache.delta = this.descendants(s.default.Leaf)
                              .reduce(function (t, e) {
                                return 0 === e.length()
                                  ? t
                                  : t.insert(e.value(), g(e));
                              }, new a.default())
                              .insert("\n", g(this))),
                          this.cache.delta
                        );
                      },
                    },
                    {
                      key: "deleteAt",
                      value: function (t, n) {
                        r(
                          e.prototype.__proto__ ||
                            Object.getPrototypeOf(e.prototype),
                          "deleteAt",
                          this
                        ).call(this, t, n),
                          (this.cache = {});
                      },
                    },
                    {
                      key: "formatAt",
                      value: function (t, n, i, o) {
                        n <= 0 ||
                          (s.default.query(i, s.default.Scope.BLOCK)
                            ? t + n === this.length() && this.format(i, o)
                            : r(
                                e.prototype.__proto__ ||
                                  Object.getPrototypeOf(e.prototype),
                                "formatAt",
                                this
                              ).call(
                                this,
                                t,
                                Math.min(n, this.length() - t - 1),
                                i,
                                o
                              ),
                          (this.cache = {}));
                      },
                    },
                    {
                      key: "insertAt",
                      value: function (t, n, i) {
                        if (null != i)
                          return r(
                            e.prototype.__proto__ ||
                              Object.getPrototypeOf(e.prototype),
                            "insertAt",
                            this
                          ).call(this, t, n, i);
                        if (0 !== n.length) {
                          var o = n.split("\n"),
                            a = o.shift();
                          a.length > 0 &&
                            (t < this.length() - 1 || null == this.children.tail
                              ? r(
                                  e.prototype.__proto__ ||
                                    Object.getPrototypeOf(e.prototype),
                                  "insertAt",
                                  this
                                ).call(this, Math.min(t, this.length() - 1), a)
                              : this.children.tail.insertAt(
                                  this.children.tail.length(),
                                  a
                                ),
                            (this.cache = {}));
                          var s = this;
                          o.reduce(function (t, e) {
                            return (
                              (s = s.split(t, !0)).insertAt(0, e), e.length
                            );
                          }, t + a.length);
                        }
                      },
                    },
                    {
                      key: "insertBefore",
                      value: function (t, n) {
                        var i = this.children.head;
                        r(
                          e.prototype.__proto__ ||
                            Object.getPrototypeOf(e.prototype),
                          "insertBefore",
                          this
                        ).call(this, t, n),
                          i instanceof l.default && i.remove(),
                          (this.cache = {});
                      },
                    },
                    {
                      key: "length",
                      value: function () {
                        return (
                          null == this.cache.length &&
                            (this.cache.length =
                              r(
                                e.prototype.__proto__ ||
                                  Object.getPrototypeOf(e.prototype),
                                "length",
                                this
                              ).call(this) + 1),
                          this.cache.length
                        );
                      },
                    },
                    {
                      key: "moveChildren",
                      value: function (t, n) {
                        r(
                          e.prototype.__proto__ ||
                            Object.getPrototypeOf(e.prototype),
                          "moveChildren",
                          this
                        ).call(this, t, n),
                          (this.cache = {});
                      },
                    },
                    {
                      key: "optimize",
                      value: function (t) {
                        r(
                          e.prototype.__proto__ ||
                            Object.getPrototypeOf(e.prototype),
                          "optimize",
                          this
                        ).call(this, t),
                          (this.cache = {});
                      },
                    },
                    {
                      key: "path",
                      value: function (t) {
                        return r(
                          e.prototype.__proto__ ||
                            Object.getPrototypeOf(e.prototype),
                          "path",
                          this
                        ).call(this, t, !0);
                      },
                    },
                    {
                      key: "removeChild",
                      value: function (t) {
                        r(
                          e.prototype.__proto__ ||
                            Object.getPrototypeOf(e.prototype),
                          "removeChild",
                          this
                        ).call(this, t),
                          (this.cache = {});
                      },
                    },
                    {
                      key: "split",
                      value: function (t) {
                        var n =
                          arguments.length > 1 &&
                          void 0 !== arguments[1] &&
                          arguments[1];
                        if (n && (0 === t || t >= this.length() - 1)) {
                          var i = this.clone();
                          return 0 === t
                            ? (this.parent.insertBefore(i, this), this)
                            : (this.parent.insertBefore(i, this.next), i);
                        }
                        var o = r(
                          e.prototype.__proto__ ||
                            Object.getPrototypeOf(e.prototype),
                          "split",
                          this
                        ).call(this, t, n);
                        return (this.cache = {}), o;
                      },
                    },
                  ]),
                  e
                );
              })(s.default.Block);
              function g(t) {
                var e =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {};
                return null == t
                  ? e
                  : ("function" == typeof t.formats &&
                      (e = (0, o.default)(e, t.formats())),
                    null == t.parent ||
                    "scroll" == t.parent.blotName ||
                    t.parent.statics.scope !== t.statics.scope
                      ? e
                      : g(t.parent, e));
              }
              (m.blotName = "block"),
                (m.tagName = "P"),
                (m.defaultChild = "break"),
                (m.allowedChildren = [c.default, s.default.Embed, d.default]),
                (e.bubbleFormats = g),
                (e.BlockEmbed = b),
                (e.default = m);
            },
            function (t, e, n) {
              "use strict";
              Object.defineProperty(e, "__esModule", { value: !0 }),
                (e.default = e.overload = e.expandConfig = void 0);
              var i =
                  "function" == typeof Symbol &&
                  "symbol" == typeof Symbol.iterator
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
                      },
                r = function (t, e) {
                  if (Array.isArray(t)) return t;
                  if (Symbol.iterator in Object(t))
                    return (function (t, e) {
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
                          !i && s.return && s.return();
                        } finally {
                          if (r) throw o;
                        }
                      }
                      return n;
                    })(t, e);
                  throw new TypeError(
                    "Invalid attempt to destructure non-iterable instance"
                  );
                },
                o = (function () {
                  function t(t, e) {
                    for (var n = 0; n < e.length; n++) {
                      var i = e[n];
                      (i.enumerable = i.enumerable || !1),
                        (i.configurable = !0),
                        "value" in i && (i.writable = !0),
                        Object.defineProperty(t, i.key, i);
                    }
                  }
                  return function (e, n, i) {
                    return n && t(e.prototype, n), i && t(e, i), e;
                  };
                })();
              n(50);
              var a = m(n(2)),
                s = m(n(14)),
                l = m(n(8)),
                c = m(n(9)),
                d = m(n(0)),
                u = n(15),
                p = m(u),
                h = m(n(3)),
                f = m(n(10)),
                b = m(n(34));
              function m(t) {
                return t && t.__esModule ? t : { default: t };
              }
              function g(t, e, n) {
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
              function v(t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              }
              var _ = (0, f.default)("quill"),
                y = (function () {
                  function t(e) {
                    var n = this,
                      i =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : {};
                    if (
                      (v(this, t),
                      (this.options = M(e, i)),
                      (this.container = this.options.container),
                      null == this.container)
                    )
                      return _.error("Invalid Quill container", e);
                    this.options.debug && t.debug(this.options.debug);
                    var r = this.container.innerHTML.trim();
                    this.container.classList.add("ql-container"),
                      (this.container.innerHTML = ""),
                      (this.container.__quill = this),
                      (this.root = this.addContainer("ql-editor")),
                      this.root.classList.add("ql-blank"),
                      this.root.setAttribute("data-gramm", !1),
                      (this.scrollingContainer =
                        this.options.scrollingContainer || this.root),
                      (this.emitter = new l.default()),
                      (this.scroll = d.default.create(this.root, {
                        emitter: this.emitter,
                        whitelist: this.options.formats,
                      })),
                      (this.editor = new s.default(this.scroll)),
                      (this.selection = new p.default(
                        this.scroll,
                        this.emitter
                      )),
                      (this.theme = new this.options.theme(this, this.options)),
                      (this.keyboard = this.theme.addModule("keyboard")),
                      (this.clipboard = this.theme.addModule("clipboard")),
                      (this.history = this.theme.addModule("history")),
                      this.theme.init(),
                      this.emitter.on(
                        l.default.events.EDITOR_CHANGE,
                        function (t) {
                          t === l.default.events.TEXT_CHANGE &&
                            n.root.classList.toggle(
                              "ql-blank",
                              n.editor.isBlank()
                            );
                        }
                      ),
                      this.emitter.on(
                        l.default.events.SCROLL_UPDATE,
                        function (t, e) {
                          var i = n.selection.lastRange,
                            r = i && 0 === i.length ? i.index : void 0;
                          O.call(
                            n,
                            function () {
                              return n.editor.update(null, e, r);
                            },
                            t
                          );
                        }
                      );
                    var o = this.clipboard.convert(
                      "<div class='ql-editor' style=\"white-space: normal;\">" +
                        r +
                        "<p><br></p></div>"
                    );
                    this.setContents(o),
                      this.history.clear(),
                      this.options.placeholder &&
                        this.root.setAttribute(
                          "data-placeholder",
                          this.options.placeholder
                        ),
                      this.options.readOnly && this.disable();
                  }
                  return (
                    o(t, null, [
                      {
                        key: "debug",
                        value: function (t) {
                          !0 === t && (t = "log"), f.default.level(t);
                        },
                      },
                      {
                        key: "find",
                        value: function (t) {
                          return t.__quill || d.default.find(t);
                        },
                      },
                      {
                        key: "import",
                        value: function (t) {
                          return (
                            null == this.imports[t] &&
                              _.error(
                                "Cannot import " +
                                  t +
                                  ". Are you sure it was registered?"
                              ),
                            this.imports[t]
                          );
                        },
                      },
                      {
                        key: "register",
                        value: function (t, e) {
                          var n = this,
                            i =
                              arguments.length > 2 &&
                              void 0 !== arguments[2] &&
                              arguments[2];
                          if ("string" != typeof t) {
                            var r = t.attrName || t.blotName;
                            "string" == typeof r
                              ? this.register("formats/" + r, t, e)
                              : Object.keys(t).forEach(function (i) {
                                  n.register(i, t[i], e);
                                });
                          } else
                            null == this.imports[t] ||
                              i ||
                              _.warn("Overwriting " + t + " with", e),
                              (this.imports[t] = e),
                              (t.startsWith("blots/") ||
                                t.startsWith("formats/")) &&
                              "abstract" !== e.blotName
                                ? d.default.register(e)
                                : t.startsWith("modules") &&
                                  "function" == typeof e.register &&
                                  e.register();
                        },
                      },
                    ]),
                    o(t, [
                      {
                        key: "addContainer",
                        value: function (t) {
                          var e =
                            arguments.length > 1 && void 0 !== arguments[1]
                              ? arguments[1]
                              : null;
                          if ("string" == typeof t) {
                            var n = t;
                            (t = document.createElement("div")).classList.add(
                              n
                            );
                          }
                          return this.container.insertBefore(t, e), t;
                        },
                      },
                      {
                        key: "blur",
                        value: function () {
                          this.selection.setRange(null);
                        },
                      },
                      {
                        key: "deleteText",
                        value: function (t, e, n) {
                          var i = this,
                            o = w(t, e, n),
                            a = r(o, 4);
                          return (
                            (t = a[0]),
                            (e = a[1]),
                            (n = a[3]),
                            O.call(
                              this,
                              function () {
                                return i.editor.deleteText(t, e);
                              },
                              n,
                              t,
                              -1 * e
                            )
                          );
                        },
                      },
                      {
                        key: "disable",
                        value: function () {
                          this.enable(!1);
                        },
                      },
                      {
                        key: "enable",
                        value: function () {
                          var t =
                            !(
                              arguments.length > 0 && void 0 !== arguments[0]
                            ) || arguments[0];
                          this.scroll.enable(t),
                            this.container.classList.toggle("ql-disabled", !t);
                        },
                      },
                      {
                        key: "focus",
                        value: function () {
                          var t = this.scrollingContainer.scrollTop;
                          this.selection.focus(),
                            (this.scrollingContainer.scrollTop = t),
                            this.scrollIntoView();
                        },
                      },
                      {
                        key: "format",
                        value: function (t, e) {
                          var n = this,
                            i =
                              arguments.length > 2 && void 0 !== arguments[2]
                                ? arguments[2]
                                : l.default.sources.API;
                          return O.call(
                            this,
                            function () {
                              var i = n.getSelection(!0),
                                r = new a.default();
                              if (null == i) return r;
                              if (d.default.query(t, d.default.Scope.BLOCK))
                                r = n.editor.formatLine(
                                  i.index,
                                  i.length,
                                  g({}, t, e)
                                );
                              else {
                                if (0 === i.length)
                                  return n.selection.format(t, e), r;
                                r = n.editor.formatText(
                                  i.index,
                                  i.length,
                                  g({}, t, e)
                                );
                              }
                              return (
                                n.setSelection(i, l.default.sources.SILENT), r
                              );
                            },
                            i
                          );
                        },
                      },
                      {
                        key: "formatLine",
                        value: function (t, e, n, i, o) {
                          var a,
                            s = this,
                            l = w(t, e, n, i, o),
                            c = r(l, 4);
                          return (
                            (t = c[0]),
                            (e = c[1]),
                            (a = c[2]),
                            (o = c[3]),
                            O.call(
                              this,
                              function () {
                                return s.editor.formatLine(t, e, a);
                              },
                              o,
                              t,
                              0
                            )
                          );
                        },
                      },
                      {
                        key: "formatText",
                        value: function (t, e, n, i, o) {
                          var a,
                            s = this,
                            l = w(t, e, n, i, o),
                            c = r(l, 4);
                          return (
                            (t = c[0]),
                            (e = c[1]),
                            (a = c[2]),
                            (o = c[3]),
                            O.call(
                              this,
                              function () {
                                return s.editor.formatText(t, e, a);
                              },
                              o,
                              t,
                              0
                            )
                          );
                        },
                      },
                      {
                        key: "getBounds",
                        value: function (t) {
                          var e =
                              arguments.length > 1 && void 0 !== arguments[1]
                                ? arguments[1]
                                : 0,
                            n = void 0;
                          n =
                            "number" == typeof t
                              ? this.selection.getBounds(t, e)
                              : this.selection.getBounds(t.index, t.length);
                          var i = this.container.getBoundingClientRect();
                          return {
                            bottom: n.bottom - i.top,
                            height: n.height,
                            left: n.left - i.left,
                            right: n.right - i.left,
                            top: n.top - i.top,
                            width: n.width,
                          };
                        },
                      },
                      {
                        key: "getContents",
                        value: function () {
                          var t =
                              arguments.length > 0 && void 0 !== arguments[0]
                                ? arguments[0]
                                : 0,
                            e =
                              arguments.length > 1 && void 0 !== arguments[1]
                                ? arguments[1]
                                : this.getLength() - t,
                            n = w(t, e),
                            i = r(n, 2);
                          return (
                            (t = i[0]),
                            (e = i[1]),
                            this.editor.getContents(t, e)
                          );
                        },
                      },
                      {
                        key: "getFormat",
                        value: function () {
                          var t =
                              arguments.length > 0 && void 0 !== arguments[0]
                                ? arguments[0]
                                : this.getSelection(!0),
                            e =
                              arguments.length > 1 && void 0 !== arguments[1]
                                ? arguments[1]
                                : 0;
                          return "number" == typeof t
                            ? this.editor.getFormat(t, e)
                            : this.editor.getFormat(t.index, t.length);
                        },
                      },
                      {
                        key: "getIndex",
                        value: function (t) {
                          return t.offset(this.scroll);
                        },
                      },
                      {
                        key: "getLength",
                        value: function () {
                          return this.scroll.length();
                        },
                      },
                      {
                        key: "getLeaf",
                        value: function (t) {
                          return this.scroll.leaf(t);
                        },
                      },
                      {
                        key: "getLine",
                        value: function (t) {
                          return this.scroll.line(t);
                        },
                      },
                      {
                        key: "getLines",
                        value: function () {
                          var t =
                              arguments.length > 0 && void 0 !== arguments[0]
                                ? arguments[0]
                                : 0,
                            e =
                              arguments.length > 1 && void 0 !== arguments[1]
                                ? arguments[1]
                                : Number.MAX_VALUE;
                          return "number" != typeof t
                            ? this.scroll.lines(t.index, t.length)
                            : this.scroll.lines(t, e);
                        },
                      },
                      {
                        key: "getModule",
                        value: function (t) {
                          return this.theme.modules[t];
                        },
                      },
                      {
                        key: "getSelection",
                        value: function () {
                          var t =
                            arguments.length > 0 &&
                            void 0 !== arguments[0] &&
                            arguments[0];
                          return (
                            t && this.focus(),
                            this.update(),
                            this.selection.getRange()[0]
                          );
                        },
                      },
                      {
                        key: "getText",
                        value: function () {
                          var t =
                              arguments.length > 0 && void 0 !== arguments[0]
                                ? arguments[0]
                                : 0,
                            e =
                              arguments.length > 1 && void 0 !== arguments[1]
                                ? arguments[1]
                                : this.getLength() - t,
                            n = w(t, e),
                            i = r(n, 2);
                          return (
                            (t = i[0]), (e = i[1]), this.editor.getText(t, e)
                          );
                        },
                      },
                      {
                        key: "hasFocus",
                        value: function () {
                          return this.selection.hasFocus();
                        },
                      },
                      {
                        key: "insertEmbed",
                        value: function (e, n, i) {
                          var r = this,
                            o =
                              arguments.length > 3 && void 0 !== arguments[3]
                                ? arguments[3]
                                : t.sources.API;
                          return O.call(
                            this,
                            function () {
                              return r.editor.insertEmbed(e, n, i);
                            },
                            o,
                            e
                          );
                        },
                      },
                      {
                        key: "insertText",
                        value: function (t, e, n, i, o) {
                          var a,
                            s = this,
                            l = w(t, 0, n, i, o),
                            c = r(l, 4);
                          return (
                            (t = c[0]),
                            (a = c[2]),
                            (o = c[3]),
                            O.call(
                              this,
                              function () {
                                return s.editor.insertText(t, e, a);
                              },
                              o,
                              t,
                              e.length
                            )
                          );
                        },
                      },
                      {
                        key: "isEnabled",
                        value: function () {
                          return !this.container.classList.contains(
                            "ql-disabled"
                          );
                        },
                      },
                      {
                        key: "off",
                        value: function () {
                          return this.emitter.off.apply(
                            this.emitter,
                            arguments
                          );
                        },
                      },
                      {
                        key: "on",
                        value: function () {
                          return this.emitter.on.apply(this.emitter, arguments);
                        },
                      },
                      {
                        key: "once",
                        value: function () {
                          return this.emitter.once.apply(
                            this.emitter,
                            arguments
                          );
                        },
                      },
                      {
                        key: "pasteHTML",
                        value: function (t, e, n) {
                          this.clipboard.dangerouslyPasteHTML(t, e, n);
                        },
                      },
                      {
                        key: "removeFormat",
                        value: function (t, e, n) {
                          var i = this,
                            o = w(t, e, n),
                            a = r(o, 4);
                          return (
                            (t = a[0]),
                            (e = a[1]),
                            (n = a[3]),
                            O.call(
                              this,
                              function () {
                                return i.editor.removeFormat(t, e);
                              },
                              n,
                              t
                            )
                          );
                        },
                      },
                      {
                        key: "scrollIntoView",
                        value: function () {
                          this.selection.scrollIntoView(
                            this.scrollingContainer
                          );
                        },
                      },
                      {
                        key: "setContents",
                        value: function (t) {
                          var e = this,
                            n =
                              arguments.length > 1 && void 0 !== arguments[1]
                                ? arguments[1]
                                : l.default.sources.API;
                          return O.call(
                            this,
                            function () {
                              t = new a.default(t);
                              var n = e.getLength(),
                                i = e.editor.deleteText(0, n),
                                r = e.editor.applyDelta(t),
                                o = r.ops[r.ops.length - 1];
                              return (
                                null != o &&
                                  "string" == typeof o.insert &&
                                  "\n" === o.insert[o.insert.length - 1] &&
                                  (e.editor.deleteText(e.getLength() - 1, 1),
                                  r.delete(1)),
                                i.compose(r)
                              );
                            },
                            n
                          );
                        },
                      },
                      {
                        key: "setSelection",
                        value: function (e, n, i) {
                          if (null == e)
                            this.selection.setRange(null, n || t.sources.API);
                          else {
                            var o = w(e, n, i),
                              a = r(o, 4);
                            (e = a[0]),
                              (n = a[1]),
                              (i = a[3]),
                              this.selection.setRange(new u.Range(e, n), i),
                              i !== l.default.sources.SILENT &&
                                this.selection.scrollIntoView(
                                  this.scrollingContainer
                                );
                          }
                        },
                      },
                      {
                        key: "setText",
                        value: function (t) {
                          var e =
                              arguments.length > 1 && void 0 !== arguments[1]
                                ? arguments[1]
                                : l.default.sources.API,
                            n = new a.default().insert(t);
                          return this.setContents(n, e);
                        },
                      },
                      {
                        key: "update",
                        value: function () {
                          var t =
                              arguments.length > 0 && void 0 !== arguments[0]
                                ? arguments[0]
                                : l.default.sources.USER,
                            e = this.scroll.update(t);
                          return this.selection.update(t), e;
                        },
                      },
                      {
                        key: "updateContents",
                        value: function (t) {
                          var e = this,
                            n =
                              arguments.length > 1 && void 0 !== arguments[1]
                                ? arguments[1]
                                : l.default.sources.API;
                          return O.call(
                            this,
                            function () {
                              return (
                                (t = new a.default(t)),
                                e.editor.applyDelta(t, n)
                              );
                            },
                            n,
                            !0
                          );
                        },
                      },
                    ]),
                    t
                  );
                })();
              function M(t, e) {
                if (
                  (e = (0, h.default)(
                    !0,
                    {
                      container: t,
                      modules: { clipboard: !0, keyboard: !0, history: !0 },
                    },
                    e
                  )).theme &&
                  e.theme !== y.DEFAULTS.theme
                ) {
                  if (
                    ((e.theme = y.import("themes/" + e.theme)), null == e.theme)
                  )
                    throw new Error(
                      "Invalid theme " + e.theme + ". Did you register it?"
                    );
                } else e.theme = b.default;
                var n = (0, h.default)(!0, {}, e.theme.DEFAULTS);
                [n, e].forEach(function (t) {
                  (t.modules = t.modules || {}),
                    Object.keys(t.modules).forEach(function (e) {
                      !0 === t.modules[e] && (t.modules[e] = {});
                    });
                });
                var i = Object.keys(n.modules)
                  .concat(Object.keys(e.modules))
                  .reduce(function (t, e) {
                    var n = y.import("modules/" + e);
                    return (
                      null == n
                        ? _.error(
                            "Cannot load " +
                              e +
                              " module. Are you sure you registered it?"
                          )
                        : (t[e] = n.DEFAULTS || {}),
                      t
                    );
                  }, {});
                return (
                  null != e.modules &&
                    e.modules.toolbar &&
                    e.modules.toolbar.constructor !== Object &&
                    (e.modules.toolbar = { container: e.modules.toolbar }),
                  (e = (0, h.default)(
                    !0,
                    {},
                    y.DEFAULTS,
                    { modules: i },
                    n,
                    e
                  )),
                  ["bounds", "container", "scrollingContainer"].forEach(
                    function (t) {
                      "string" == typeof e[t] &&
                        (e[t] = document.querySelector(e[t]));
                    }
                  ),
                  (e.modules = Object.keys(e.modules).reduce(function (t, n) {
                    return e.modules[n] && (t[n] = e.modules[n]), t;
                  }, {})),
                  e
                );
              }
              function O(t, e, n, i) {
                if (
                  this.options.strict &&
                  !this.isEnabled() &&
                  e === l.default.sources.USER
                )
                  return new a.default();
                var r = null == n ? null : this.getSelection(),
                  o = this.editor.delta,
                  s = t();
                if (
                  (null != r &&
                    (!0 === n && (n = r.index),
                    null == i
                      ? (r = A(r, s, e))
                      : 0 !== i && (r = A(r, n, i, e)),
                    this.setSelection(r, l.default.sources.SILENT)),
                  s.length() > 0)
                ) {
                  var c,
                    d,
                    u = [l.default.events.TEXT_CHANGE, s, o, e];
                  (c = this.emitter).emit.apply(
                    c,
                    [l.default.events.EDITOR_CHANGE].concat(u)
                  ),
                    e !== l.default.sources.SILENT &&
                      (d = this.emitter).emit.apply(d, u);
                }
                return s;
              }
              function w(t, e, n, r, o) {
                var a = {};
                return (
                  "number" == typeof t.index && "number" == typeof t.length
                    ? "number" != typeof e
                      ? ((o = r),
                        (r = n),
                        (n = e),
                        (e = t.length),
                        (t = t.index))
                      : ((e = t.length), (t = t.index))
                    : "number" != typeof e &&
                      ((o = r), (r = n), (n = e), (e = 0)),
                  "object" === (void 0 === n ? "undefined" : i(n))
                    ? ((a = n), (o = r))
                    : "string" == typeof n &&
                      (null != r ? (a[n] = r) : (o = n)),
                  [t, e, a, (o = o || l.default.sources.API)]
                );
              }
              function A(t, e, n, i) {
                if (null == t) return null;
                var o = void 0,
                  s = void 0;
                if (e instanceof a.default) {
                  var c = [t.index, t.index + t.length].map(function (t) {
                      return e.transformPosition(
                        t,
                        i !== l.default.sources.USER
                      );
                    }),
                    d = r(c, 2);
                  (o = d[0]), (s = d[1]);
                } else {
                  var p = [t.index, t.index + t.length].map(function (t) {
                      return t < e || (t === e && i === l.default.sources.USER)
                        ? t
                        : n >= 0
                        ? t + n
                        : Math.max(e, t + n);
                    }),
                    h = r(p, 2);
                  (o = h[0]), (s = h[1]);
                }
                return new u.Range(o, s - o);
              }
              (y.DEFAULTS = {
                bounds: null,
                formats: null,
                modules: {},
                placeholder: "",
                readOnly: !1,
                scrollingContainer: null,
                strict: !0,
                theme: "default",
              }),
                (y.events = l.default.events),
                (y.sources = l.default.sources),
                (y.version = "1.3.7"),
                (y.imports = {
                  delta: a.default,
                  parchment: d.default,
                  "core/module": c.default,
                  "core/theme": b.default,
                }),
                (e.expandConfig = M),
                (e.overload = w),
                (e.default = y);
            },
            function (t, e, n) {
              "use strict";
              Object.defineProperty(e, "__esModule", { value: !0 });
              var i = (function () {
                  function t(t, e) {
                    for (var n = 0; n < e.length; n++) {
                      var i = e[n];
                      (i.enumerable = i.enumerable || !1),
                        (i.configurable = !0),
                        "value" in i && (i.writable = !0),
                        Object.defineProperty(t, i.key, i);
                    }
                  }
                  return function (e, n, i) {
                    return n && t(e.prototype, n), i && t(e, i), e;
                  };
                })(),
                r = function t(e, n, i) {
                  null === e && (e = Function.prototype);
                  var r = Object.getOwnPropertyDescriptor(e, n);
                  if (void 0 === r) {
                    var o = Object.getPrototypeOf(e);
                    return null === o ? void 0 : t(o, n, i);
                  }
                  if ("value" in r) return r.value;
                  var a = r.get;
                  return void 0 !== a ? a.call(i) : void 0;
                },
                o = s(n(7)),
                a = s(n(0));
              function s(t) {
                return t && t.__esModule ? t : { default: t };
              }
              function l(t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              }
              function c(t, e) {
                if (!t)
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                return !e || ("object" != typeof e && "function" != typeof e)
                  ? t
                  : e;
              }
              var d = (function (t) {
                function e() {
                  return (
                    l(this, e),
                    c(
                      this,
                      (e.__proto__ || Object.getPrototypeOf(e)).apply(
                        this,
                        arguments
                      )
                    )
                  );
                }
                return (
                  (function (t, e) {
                    if ("function" != typeof e && null !== e)
                      throw new TypeError(
                        "Super expression must either be null or a function, not " +
                          typeof e
                      );
                    (t.prototype = Object.create(e && e.prototype, {
                      constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0,
                      },
                    })),
                      e &&
                        (Object.setPrototypeOf
                          ? Object.setPrototypeOf(t, e)
                          : (t.__proto__ = e));
                  })(e, t),
                  i(
                    e,
                    [
                      {
                        key: "formatAt",
                        value: function (t, n, i, o) {
                          if (
                            e.compare(this.statics.blotName, i) < 0 &&
                            a.default.query(i, a.default.Scope.BLOT)
                          ) {
                            var s = this.isolate(t, n);
                            o && s.wrap(i, o);
                          } else
                            r(
                              e.prototype.__proto__ ||
                                Object.getPrototypeOf(e.prototype),
                              "formatAt",
                              this
                            ).call(this, t, n, i, o);
                        },
                      },
                      {
                        key: "optimize",
                        value: function (t) {
                          if (
                            (r(
                              e.prototype.__proto__ ||
                                Object.getPrototypeOf(e.prototype),
                              "optimize",
                              this
                            ).call(this, t),
                            this.parent instanceof e &&
                              e.compare(
                                this.statics.blotName,
                                this.parent.statics.blotName
                              ) > 0)
                          ) {
                            var n = this.parent.isolate(
                              this.offset(),
                              this.length()
                            );
                            this.moveChildren(n), n.wrap(this);
                          }
                        },
                      },
                    ],
                    [
                      {
                        key: "compare",
                        value: function (t, n) {
                          var i = e.order.indexOf(t),
                            r = e.order.indexOf(n);
                          return i >= 0 || r >= 0
                            ? i - r
                            : t === n
                            ? 0
                            : t < n
                            ? -1
                            : 1;
                        },
                      },
                    ]
                  ),
                  e
                );
              })(a.default.Inline);
              (d.allowedChildren = [d, a.default.Embed, o.default]),
                (d.order = [
                  "cursor",
                  "inline",
                  "underline",
                  "strike",
                  "italic",
                  "bold",
                  "script",
                  "link",
                  "code",
                ]),
                (e.default = d);
            },
            function (t, e, n) {
              "use strict";
              var i;
              function r(t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              }
              function o(t, e) {
                if (!t)
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                return !e || ("object" != typeof e && "function" != typeof e)
                  ? t
                  : e;
              }
              Object.defineProperty(e, "__esModule", { value: !0 });
              var a = (function (t) {
                function e() {
                  return (
                    r(this, e),
                    o(
                      this,
                      (e.__proto__ || Object.getPrototypeOf(e)).apply(
                        this,
                        arguments
                      )
                    )
                  );
                }
                return (
                  (function (t, e) {
                    if ("function" != typeof e && null !== e)
                      throw new TypeError(
                        "Super expression must either be null or a function, not " +
                          typeof e
                      );
                    (t.prototype = Object.create(e && e.prototype, {
                      constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0,
                      },
                    })),
                      e &&
                        (Object.setPrototypeOf
                          ? Object.setPrototypeOf(t, e)
                          : (t.__proto__ = e));
                  })(e, t),
                  e
                );
              })(
                ((i = n(0)) && i.__esModule ? i : { default: i }).default.Text
              );
              e.default = a;
            },
            function (t, e, n) {
              "use strict";
              Object.defineProperty(e, "__esModule", { value: !0 });
              var i = (function () {
                  function t(t, e) {
                    for (var n = 0; n < e.length; n++) {
                      var i = e[n];
                      (i.enumerable = i.enumerable || !1),
                        (i.configurable = !0),
                        "value" in i && (i.writable = !0),
                        Object.defineProperty(t, i.key, i);
                    }
                  }
                  return function (e, n, i) {
                    return n && t(e.prototype, n), i && t(e, i), e;
                  };
                })(),
                r = function t(e, n, i) {
                  null === e && (e = Function.prototype);
                  var r = Object.getOwnPropertyDescriptor(e, n);
                  if (void 0 === r) {
                    var o = Object.getPrototypeOf(e);
                    return null === o ? void 0 : t(o, n, i);
                  }
                  if ("value" in r) return r.value;
                  var a = r.get;
                  return void 0 !== a ? a.call(i) : void 0;
                },
                o = a(n(54));
              function a(t) {
                return t && t.__esModule ? t : { default: t };
              }
              var s = (0, a(n(10)).default)("quill:events");
              ["selectionchange", "mousedown", "mouseup", "click"].forEach(
                function (t) {
                  document.addEventListener(t, function () {
                    for (
                      var t = arguments.length, e = Array(t), n = 0;
                      n < t;
                      n++
                    )
                      e[n] = arguments[n];
                    [].slice
                      .call(document.querySelectorAll(".ql-container"))
                      .forEach(function (t) {
                        var n;
                        t.__quill &&
                          t.__quill.emitter &&
                          (n = t.__quill.emitter).handleDOM.apply(n, e);
                      });
                  });
                }
              );
              var l = (function (t) {
                function e() {
                  !(function (t, e) {
                    if (!(t instanceof e))
                      throw new TypeError("Cannot call a class as a function");
                  })(this, e);
                  var t = (function (t, e) {
                    if (!t)
                      throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                      );
                    return !e ||
                      ("object" != typeof e && "function" != typeof e)
                      ? t
                      : e;
                  })(
                    this,
                    (e.__proto__ || Object.getPrototypeOf(e)).call(this)
                  );
                  return (t.listeners = {}), t.on("error", s.error), t;
                }
                return (
                  (function (t, e) {
                    if ("function" != typeof e && null !== e)
                      throw new TypeError(
                        "Super expression must either be null or a function, not " +
                          typeof e
                      );
                    (t.prototype = Object.create(e && e.prototype, {
                      constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0,
                      },
                    })),
                      e &&
                        (Object.setPrototypeOf
                          ? Object.setPrototypeOf(t, e)
                          : (t.__proto__ = e));
                  })(e, t),
                  i(e, [
                    {
                      key: "emit",
                      value: function () {
                        s.log.apply(s, arguments),
                          r(
                            e.prototype.__proto__ ||
                              Object.getPrototypeOf(e.prototype),
                            "emit",
                            this
                          ).apply(this, arguments);
                      },
                    },
                    {
                      key: "handleDOM",
                      value: function (t) {
                        for (
                          var e = arguments.length,
                            n = Array(e > 1 ? e - 1 : 0),
                            i = 1;
                          i < e;
                          i++
                        )
                          n[i - 1] = arguments[i];
                        (this.listeners[t.type] || []).forEach(function (e) {
                          var i = e.node,
                            r = e.handler;
                          (t.target === i || i.contains(t.target)) &&
                            r.apply(void 0, [t].concat(n));
                        });
                      },
                    },
                    {
                      key: "listenDOM",
                      value: function (t, e, n) {
                        this.listeners[t] || (this.listeners[t] = []),
                          this.listeners[t].push({ node: e, handler: n });
                      },
                    },
                  ]),
                  e
                );
              })(o.default);
              (l.events = {
                EDITOR_CHANGE: "editor-change",
                SCROLL_BEFORE_UPDATE: "scroll-before-update",
                SCROLL_OPTIMIZE: "scroll-optimize",
                SCROLL_UPDATE: "scroll-update",
                SELECTION_CHANGE: "selection-change",
                TEXT_CHANGE: "text-change",
              }),
                (l.sources = { API: "api", SILENT: "silent", USER: "user" }),
                (e.default = l);
            },
            function (t, e, n) {
              "use strict";
              function i(t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              }
              Object.defineProperty(e, "__esModule", { value: !0 });
              var r = function t(e) {
                var n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {};
                i(this, t), (this.quill = e), (this.options = n);
              };
              (r.DEFAULTS = {}), (e.default = r);
            },
            function (t, e, n) {
              "use strict";
              Object.defineProperty(e, "__esModule", { value: !0 });
              var i = ["error", "warn", "log", "info"],
                r = "warn";
              function o(t) {
                if (i.indexOf(t) <= i.indexOf(r)) {
                  for (
                    var e,
                      n = arguments.length,
                      o = Array(n > 1 ? n - 1 : 0),
                      a = 1;
                    a < n;
                    a++
                  )
                    o[a - 1] = arguments[a];
                  (e = console)[t].apply(e, o);
                }
              }
              function a(t) {
                return i.reduce(function (e, n) {
                  return (e[n] = o.bind(console, n, t)), e;
                }, {});
              }
              (o.level = a.level =
                function (t) {
                  r = t;
                }),
                (e.default = a);
            },
            function (t, e, n) {
              var i = Array.prototype.slice,
                r = n(52),
                o = n(53),
                a = (t.exports = function (t, e, n) {
                  return (
                    n || (n = {}),
                    t === e ||
                      (t instanceof Date && e instanceof Date
                        ? t.getTime() === e.getTime()
                        : !t ||
                          !e ||
                          ("object" != typeof t && "object" != typeof e)
                        ? n.strict
                          ? t === e
                          : t == e
                        : (function (t, e, n) {
                            var c, d;
                            if (s(t) || s(e)) return !1;
                            if (t.prototype !== e.prototype) return !1;
                            if (o(t))
                              return (
                                !!o(e) &&
                                ((t = i.call(t)), (e = i.call(e)), a(t, e, n))
                              );
                            if (l(t)) {
                              if (!l(e)) return !1;
                              if (t.length !== e.length) return !1;
                              for (c = 0; c < t.length; c++)
                                if (t[c] !== e[c]) return !1;
                              return !0;
                            }
                            try {
                              var u = r(t),
                                p = r(e);
                            } catch (t) {
                              return !1;
                            }
                            if (u.length != p.length) return !1;
                            for (
                              u.sort(), p.sort(), c = u.length - 1;
                              c >= 0;
                              c--
                            )
                              if (u[c] != p[c]) return !1;
                            for (c = u.length - 1; c >= 0; c--)
                              if (((d = u[c]), !a(t[d], e[d], n))) return !1;
                            return typeof t == typeof e;
                          })(t, e, n))
                  );
                });
              function s(t) {
                return null == t;
              }
              function l(t) {
                return !(
                  !t ||
                  "object" != typeof t ||
                  "number" != typeof t.length ||
                  "function" != typeof t.copy ||
                  "function" != typeof t.slice ||
                  (t.length > 0 && "number" != typeof t[0])
                );
              }
            },
            function (t, e, n) {
              "use strict";
              Object.defineProperty(e, "__esModule", { value: !0 });
              var i = n(1),
                r = (function () {
                  function t(t, e, n) {
                    void 0 === n && (n = {}),
                      (this.attrName = t),
                      (this.keyName = e);
                    var r = i.Scope.TYPE & i.Scope.ATTRIBUTE;
                    null != n.scope
                      ? (this.scope = (n.scope & i.Scope.LEVEL) | r)
                      : (this.scope = i.Scope.ATTRIBUTE),
                      null != n.whitelist && (this.whitelist = n.whitelist);
                  }
                  return (
                    (t.keys = function (t) {
                      return [].map.call(t.attributes, function (t) {
                        return t.name;
                      });
                    }),
                    (t.prototype.add = function (t, e) {
                      return (
                        !!this.canAdd(t, e) &&
                        (t.setAttribute(this.keyName, e), !0)
                      );
                    }),
                    (t.prototype.canAdd = function (t, e) {
                      return (
                        null !=
                          i.query(
                            t,
                            i.Scope.BLOT & (this.scope | i.Scope.TYPE)
                          ) &&
                        (null == this.whitelist ||
                          ("string" == typeof e
                            ? this.whitelist.indexOf(e.replace(/["']/g, "")) >
                              -1
                            : this.whitelist.indexOf(e) > -1))
                      );
                    }),
                    (t.prototype.remove = function (t) {
                      t.removeAttribute(this.keyName);
                    }),
                    (t.prototype.value = function (t) {
                      var e = t.getAttribute(this.keyName);
                      return this.canAdd(t, e) && e ? e : "";
                    }),
                    t
                  );
                })();
              e.default = r;
            },
            function (t, e, n) {
              "use strict";
              Object.defineProperty(e, "__esModule", { value: !0 }),
                (e.default = e.Code = void 0);
              var i = function (t, e) {
                  if (Array.isArray(t)) return t;
                  if (Symbol.iterator in Object(t))
                    return (function (t, e) {
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
                          !i && s.return && s.return();
                        } finally {
                          if (r) throw o;
                        }
                      }
                      return n;
                    })(t, e);
                  throw new TypeError(
                    "Invalid attempt to destructure non-iterable instance"
                  );
                },
                r = (function () {
                  function t(t, e) {
                    for (var n = 0; n < e.length; n++) {
                      var i = e[n];
                      (i.enumerable = i.enumerable || !1),
                        (i.configurable = !0),
                        "value" in i && (i.writable = !0),
                        Object.defineProperty(t, i.key, i);
                    }
                  }
                  return function (e, n, i) {
                    return n && t(e.prototype, n), i && t(e, i), e;
                  };
                })(),
                o = function t(e, n, i) {
                  null === e && (e = Function.prototype);
                  var r = Object.getOwnPropertyDescriptor(e, n);
                  if (void 0 === r) {
                    var o = Object.getPrototypeOf(e);
                    return null === o ? void 0 : t(o, n, i);
                  }
                  if ("value" in r) return r.value;
                  var a = r.get;
                  return void 0 !== a ? a.call(i) : void 0;
                },
                a = u(n(2)),
                s = u(n(0)),
                l = u(n(4)),
                c = u(n(6)),
                d = u(n(7));
              function u(t) {
                return t && t.__esModule ? t : { default: t };
              }
              function p(t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              }
              function h(t, e) {
                if (!t)
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                return !e || ("object" != typeof e && "function" != typeof e)
                  ? t
                  : e;
              }
              function f(t, e) {
                if ("function" != typeof e && null !== e)
                  throw new TypeError(
                    "Super expression must either be null or a function, not " +
                      typeof e
                  );
                (t.prototype = Object.create(e && e.prototype, {
                  constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                  },
                })),
                  e &&
                    (Object.setPrototypeOf
                      ? Object.setPrototypeOf(t, e)
                      : (t.__proto__ = e));
              }
              var b = (function (t) {
                function e() {
                  return (
                    p(this, e),
                    h(
                      this,
                      (e.__proto__ || Object.getPrototypeOf(e)).apply(
                        this,
                        arguments
                      )
                    )
                  );
                }
                return f(e, t), e;
              })(c.default);
              (b.blotName = "code"), (b.tagName = "CODE");
              var m = (function (t) {
                function e() {
                  return (
                    p(this, e),
                    h(
                      this,
                      (e.__proto__ || Object.getPrototypeOf(e)).apply(
                        this,
                        arguments
                      )
                    )
                  );
                }
                return (
                  f(e, t),
                  r(
                    e,
                    [
                      {
                        key: "delta",
                        value: function () {
                          var t = this,
                            e = this.domNode.textContent;
                          return (
                            e.endsWith("\n") && (e = e.slice(0, -1)),
                            e.split("\n").reduce(function (e, n) {
                              return e.insert(n).insert("\n", t.formats());
                            }, new a.default())
                          );
                        },
                      },
                      {
                        key: "format",
                        value: function (t, n) {
                          if (t !== this.statics.blotName || !n) {
                            var r = this.descendant(
                                d.default,
                                this.length() - 1
                              ),
                              a = i(r, 1)[0];
                            null != a && a.deleteAt(a.length() - 1, 1),
                              o(
                                e.prototype.__proto__ ||
                                  Object.getPrototypeOf(e.prototype),
                                "format",
                                this
                              ).call(this, t, n);
                          }
                        },
                      },
                      {
                        key: "formatAt",
                        value: function (t, n, i, r) {
                          if (
                            0 !== n &&
                            null != s.default.query(i, s.default.Scope.BLOCK) &&
                            (i !== this.statics.blotName ||
                              r !== this.statics.formats(this.domNode))
                          ) {
                            var o = this.newlineIndex(t);
                            if (!(o < 0 || o >= t + n)) {
                              var a = this.newlineIndex(t, !0) + 1,
                                l = o - a + 1,
                                c = this.isolate(a, l),
                                d = c.next;
                              c.format(i, r),
                                d instanceof e &&
                                  d.formatAt(0, t - a + n - l, i, r);
                            }
                          }
                        },
                      },
                      {
                        key: "insertAt",
                        value: function (t, e, n) {
                          if (null == n) {
                            var r = this.descendant(d.default, t),
                              o = i(r, 2),
                              a = o[0],
                              s = o[1];
                            a.insertAt(s, e);
                          }
                        },
                      },
                      {
                        key: "length",
                        value: function () {
                          var t = this.domNode.textContent.length;
                          return this.domNode.textContent.endsWith("\n")
                            ? t
                            : t + 1;
                        },
                      },
                      {
                        key: "newlineIndex",
                        value: function (t) {
                          var e =
                            arguments.length > 1 &&
                            void 0 !== arguments[1] &&
                            arguments[1];
                          if (e)
                            return this.domNode.textContent
                              .slice(0, t)
                              .lastIndexOf("\n");
                          var n = this.domNode.textContent
                            .slice(t)
                            .indexOf("\n");
                          return n > -1 ? t + n : -1;
                        },
                      },
                      {
                        key: "optimize",
                        value: function (t) {
                          this.domNode.textContent.endsWith("\n") ||
                            this.appendChild(s.default.create("text", "\n")),
                            o(
                              e.prototype.__proto__ ||
                                Object.getPrototypeOf(e.prototype),
                              "optimize",
                              this
                            ).call(this, t);
                          var n = this.next;
                          null != n &&
                            n.prev === this &&
                            n.statics.blotName === this.statics.blotName &&
                            this.statics.formats(this.domNode) ===
                              n.statics.formats(n.domNode) &&
                            (n.optimize(t), n.moveChildren(this), n.remove());
                        },
                      },
                      {
                        key: "replace",
                        value: function (t) {
                          o(
                            e.prototype.__proto__ ||
                              Object.getPrototypeOf(e.prototype),
                            "replace",
                            this
                          ).call(this, t),
                            [].slice
                              .call(this.domNode.querySelectorAll("*"))
                              .forEach(function (t) {
                                var e = s.default.find(t);
                                null == e
                                  ? t.parentNode.removeChild(t)
                                  : e instanceof s.default.Embed
                                  ? e.remove()
                                  : e.unwrap();
                              });
                        },
                      },
                    ],
                    [
                      {
                        key: "create",
                        value: function (t) {
                          var n = o(
                            e.__proto__ || Object.getPrototypeOf(e),
                            "create",
                            this
                          ).call(this, t);
                          return n.setAttribute("spellcheck", !1), n;
                        },
                      },
                      {
                        key: "formats",
                        value: function () {
                          return !0;
                        },
                      },
                    ]
                  ),
                  e
                );
              })(l.default);
              (m.blotName = "code-block"),
                (m.tagName = "PRE"),
                (m.TAB = "  "),
                (e.Code = b),
                (e.default = m);
            },
            function (t, e, n) {
              "use strict";
              Object.defineProperty(e, "__esModule", { value: !0 });
              var i =
                  "function" == typeof Symbol &&
                  "symbol" == typeof Symbol.iterator
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
                      },
                r = function (t, e) {
                  if (Array.isArray(t)) return t;
                  if (Symbol.iterator in Object(t))
                    return (function (t, e) {
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
                          !i && s.return && s.return();
                        } finally {
                          if (r) throw o;
                        }
                      }
                      return n;
                    })(t, e);
                  throw new TypeError(
                    "Invalid attempt to destructure non-iterable instance"
                  );
                },
                o = (function () {
                  function t(t, e) {
                    for (var n = 0; n < e.length; n++) {
                      var i = e[n];
                      (i.enumerable = i.enumerable || !1),
                        (i.configurable = !0),
                        "value" in i && (i.writable = !0),
                        Object.defineProperty(t, i.key, i);
                    }
                  }
                  return function (e, n, i) {
                    return n && t(e.prototype, n), i && t(e, i), e;
                  };
                })(),
                a = g(n(2)),
                s = g(n(20)),
                l = g(n(0)),
                c = g(n(13)),
                d = g(n(24)),
                u = n(4),
                p = g(u),
                h = g(n(16)),
                f = g(n(21)),
                b = g(n(11)),
                m = g(n(3));
              function g(t) {
                return t && t.__esModule ? t : { default: t };
              }
              var v = /^[ -~]*$/,
                _ = (function () {
                  function t(e) {
                    !(function (t, e) {
                      if (!(t instanceof e))
                        throw new TypeError(
                          "Cannot call a class as a function"
                        );
                    })(this, t),
                      (this.scroll = e),
                      (this.delta = this.getDelta());
                  }
                  return (
                    o(t, [
                      {
                        key: "applyDelta",
                        value: function (t) {
                          var e = this,
                            n = !1;
                          this.scroll.update();
                          var o = this.scroll.length();
                          return (
                            this.scroll.batchStart(),
                            (t = (function (t) {
                              return t.reduce(function (t, e) {
                                if (1 === e.insert) {
                                  var n = (0, f.default)(e.attributes);
                                  return (
                                    delete n.image,
                                    t.insert({ image: e.attributes.image }, n)
                                  );
                                }
                                if (
                                  (null == e.attributes ||
                                    (!0 !== e.attributes.list &&
                                      !0 !== e.attributes.bullet) ||
                                    ((e = (0, f.default)(e)).attributes.list
                                      ? (e.attributes.list = "ordered")
                                      : ((e.attributes.list = "bullet"),
                                        delete e.attributes.bullet)),
                                  "string" == typeof e.insert)
                                ) {
                                  var i = e.insert
                                    .replace(/\r\n/g, "\n")
                                    .replace(/\r/g, "\n");
                                  return t.insert(i, e.attributes);
                                }
                                return t.push(e);
                              }, new a.default());
                            })(t)).reduce(function (t, a) {
                              var c =
                                  a.retain || a.delete || a.insert.length || 1,
                                d = a.attributes || {};
                              if (null != a.insert) {
                                if ("string" == typeof a.insert) {
                                  var h = a.insert;
                                  h.endsWith("\n") &&
                                    n &&
                                    ((n = !1), (h = h.slice(0, -1))),
                                    t >= o && !h.endsWith("\n") && (n = !0),
                                    e.scroll.insertAt(t, h);
                                  var f = e.scroll.line(t),
                                    b = r(f, 2),
                                    g = b[0],
                                    v = b[1],
                                    _ = (0, m.default)(
                                      {},
                                      (0, u.bubbleFormats)(g)
                                    );
                                  if (g instanceof p.default) {
                                    var y = g.descendant(l.default.Leaf, v),
                                      M = r(y, 1)[0];
                                    _ = (0, m.default)(
                                      _,
                                      (0, u.bubbleFormats)(M)
                                    );
                                  }
                                  d = s.default.attributes.diff(_, d) || {};
                                } else if ("object" === i(a.insert)) {
                                  var O = Object.keys(a.insert)[0];
                                  if (null == O) return t;
                                  e.scroll.insertAt(t, O, a.insert[O]);
                                }
                                o += c;
                              }
                              return (
                                Object.keys(d).forEach(function (n) {
                                  e.scroll.formatAt(t, c, n, d[n]);
                                }),
                                t + c
                              );
                            }, 0),
                            t.reduce(function (t, n) {
                              return "number" == typeof n.delete
                                ? (e.scroll.deleteAt(t, n.delete), t)
                                : t + (n.retain || n.insert.length || 1);
                            }, 0),
                            this.scroll.batchEnd(),
                            this.update(t)
                          );
                        },
                      },
                      {
                        key: "deleteText",
                        value: function (t, e) {
                          return (
                            this.scroll.deleteAt(t, e),
                            this.update(new a.default().retain(t).delete(e))
                          );
                        },
                      },
                      {
                        key: "formatLine",
                        value: function (t, e) {
                          var n = this,
                            i =
                              arguments.length > 2 && void 0 !== arguments[2]
                                ? arguments[2]
                                : {};
                          return (
                            this.scroll.update(),
                            Object.keys(i).forEach(function (r) {
                              if (
                                null == n.scroll.whitelist ||
                                n.scroll.whitelist[r]
                              ) {
                                var o = n.scroll.lines(t, Math.max(e, 1)),
                                  a = e;
                                o.forEach(function (e) {
                                  var o = e.length();
                                  if (e instanceof c.default) {
                                    var s = t - e.offset(n.scroll),
                                      l = e.newlineIndex(s + a) - s + 1;
                                    e.formatAt(s, l, r, i[r]);
                                  } else e.format(r, i[r]);
                                  a -= o;
                                });
                              }
                            }),
                            this.scroll.optimize(),
                            this.update(
                              new a.default()
                                .retain(t)
                                .retain(e, (0, f.default)(i))
                            )
                          );
                        },
                      },
                      {
                        key: "formatText",
                        value: function (t, e) {
                          var n = this,
                            i =
                              arguments.length > 2 && void 0 !== arguments[2]
                                ? arguments[2]
                                : {};
                          return (
                            Object.keys(i).forEach(function (r) {
                              n.scroll.formatAt(t, e, r, i[r]);
                            }),
                            this.update(
                              new a.default()
                                .retain(t)
                                .retain(e, (0, f.default)(i))
                            )
                          );
                        },
                      },
                      {
                        key: "getContents",
                        value: function (t, e) {
                          return this.delta.slice(t, t + e);
                        },
                      },
                      {
                        key: "getDelta",
                        value: function () {
                          return this.scroll.lines().reduce(function (t, e) {
                            return t.concat(e.delta());
                          }, new a.default());
                        },
                      },
                      {
                        key: "getFormat",
                        value: function (t) {
                          var e =
                              arguments.length > 1 && void 0 !== arguments[1]
                                ? arguments[1]
                                : 0,
                            n = [],
                            i = [];
                          0 === e
                            ? this.scroll.path(t).forEach(function (t) {
                                var e = r(t, 1)[0];
                                e instanceof p.default
                                  ? n.push(e)
                                  : e instanceof l.default.Leaf && i.push(e);
                              })
                            : ((n = this.scroll.lines(t, e)),
                              (i = this.scroll.descendants(
                                l.default.Leaf,
                                t,
                                e
                              )));
                          var o = [n, i].map(function (t) {
                            if (0 === t.length) return {};
                            for (
                              var e = (0, u.bubbleFormats)(t.shift());
                              Object.keys(e).length > 0;

                            ) {
                              var n = t.shift();
                              if (null == n) return e;
                              e = y((0, u.bubbleFormats)(n), e);
                            }
                            return e;
                          });
                          return m.default.apply(m.default, o);
                        },
                      },
                      {
                        key: "getText",
                        value: function (t, e) {
                          return this.getContents(t, e)
                            .filter(function (t) {
                              return "string" == typeof t.insert;
                            })
                            .map(function (t) {
                              return t.insert;
                            })
                            .join("");
                        },
                      },
                      {
                        key: "insertEmbed",
                        value: function (t, e, n) {
                          return (
                            this.scroll.insertAt(t, e, n),
                            this.update(
                              new a.default().retain(t).insert(
                                (function (t, e, n) {
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
                                })({}, e, n)
                              )
                            )
                          );
                        },
                      },
                      {
                        key: "insertText",
                        value: function (t, e) {
                          var n = this,
                            i =
                              arguments.length > 2 && void 0 !== arguments[2]
                                ? arguments[2]
                                : {};
                          return (
                            (e = e.replace(/\r\n/g, "\n").replace(/\r/g, "\n")),
                            this.scroll.insertAt(t, e),
                            Object.keys(i).forEach(function (r) {
                              n.scroll.formatAt(t, e.length, r, i[r]);
                            }),
                            this.update(
                              new a.default()
                                .retain(t)
                                .insert(e, (0, f.default)(i))
                            )
                          );
                        },
                      },
                      {
                        key: "isBlank",
                        value: function () {
                          if (0 == this.scroll.children.length) return !0;
                          if (this.scroll.children.length > 1) return !1;
                          var t = this.scroll.children.head;
                          return (
                            t.statics.blotName === p.default.blotName &&
                            !(t.children.length > 1) &&
                            t.children.head instanceof h.default
                          );
                        },
                      },
                      {
                        key: "removeFormat",
                        value: function (t, e) {
                          var n = this.getText(t, e),
                            i = this.scroll.line(t + e),
                            o = r(i, 2),
                            s = o[0],
                            l = o[1],
                            d = 0,
                            u = new a.default();
                          null != s &&
                            ((d =
                              s instanceof c.default
                                ? s.newlineIndex(l) - l + 1
                                : s.length() - l),
                            (u = s
                              .delta()
                              .slice(l, l + d - 1)
                              .insert("\n")));
                          var p = this.getContents(t, e + d).diff(
                              new a.default().insert(n).concat(u)
                            ),
                            h = new a.default().retain(t).concat(p);
                          return this.applyDelta(h);
                        },
                      },
                      {
                        key: "update",
                        value: function (t) {
                          var e =
                              arguments.length > 1 && void 0 !== arguments[1]
                                ? arguments[1]
                                : [],
                            n =
                              arguments.length > 2 && void 0 !== arguments[2]
                                ? arguments[2]
                                : void 0,
                            i = this.delta;
                          if (
                            1 === e.length &&
                            "characterData" === e[0].type &&
                            e[0].target.data.match(v) &&
                            l.default.find(e[0].target)
                          ) {
                            var r = l.default.find(e[0].target),
                              o = (0, u.bubbleFormats)(r),
                              s = r.offset(this.scroll),
                              c = e[0].oldValue.replace(d.default.CONTENTS, ""),
                              p = new a.default().insert(c),
                              h = new a.default().insert(r.value()),
                              f = new a.default()
                                .retain(s)
                                .concat(p.diff(h, n));
                            (t = f.reduce(function (t, e) {
                              return e.insert
                                ? t.insert(e.insert, o)
                                : t.push(e);
                            }, new a.default())),
                              (this.delta = i.compose(t));
                          } else
                            (this.delta = this.getDelta()),
                              (t && (0, b.default)(i.compose(t), this.delta)) ||
                                (t = i.diff(this.delta, n));
                          return t;
                        },
                      },
                    ]),
                    t
                  );
                })();
              function y(t, e) {
                return Object.keys(e).reduce(function (n, i) {
                  return (
                    null == t[i] ||
                      (e[i] === t[i]
                        ? (n[i] = e[i])
                        : Array.isArray(e[i])
                        ? e[i].indexOf(t[i]) < 0 && (n[i] = e[i].concat([t[i]]))
                        : (n[i] = [e[i], t[i]])),
                    n
                  );
                }, {});
              }
              e.default = _;
            },
            function (t, e, n) {
              "use strict";
              Object.defineProperty(e, "__esModule", { value: !0 }),
                (e.default = e.Range = void 0);
              var i = function (t, e) {
                  if (Array.isArray(t)) return t;
                  if (Symbol.iterator in Object(t))
                    return (function (t, e) {
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
                          !i && s.return && s.return();
                        } finally {
                          if (r) throw o;
                        }
                      }
                      return n;
                    })(t, e);
                  throw new TypeError(
                    "Invalid attempt to destructure non-iterable instance"
                  );
                },
                r = (function () {
                  function t(t, e) {
                    for (var n = 0; n < e.length; n++) {
                      var i = e[n];
                      (i.enumerable = i.enumerable || !1),
                        (i.configurable = !0),
                        "value" in i && (i.writable = !0),
                        Object.defineProperty(t, i.key, i);
                    }
                  }
                  return function (e, n, i) {
                    return n && t(e.prototype, n), i && t(e, i), e;
                  };
                })(),
                o = c(n(0)),
                a = c(n(21)),
                s = c(n(11)),
                l = c(n(8));
              function c(t) {
                return t && t.__esModule ? t : { default: t };
              }
              function d(t) {
                if (Array.isArray(t)) {
                  for (var e = 0, n = Array(t.length); e < t.length; e++)
                    n[e] = t[e];
                  return n;
                }
                return Array.from(t);
              }
              function u(t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              }
              var p = (0, c(n(10)).default)("quill:selection"),
                h = function t(e) {
                  var n =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : 0;
                  u(this, t), (this.index = e), (this.length = n);
                },
                f = (function () {
                  function t(e, n) {
                    var i = this;
                    u(this, t),
                      (this.emitter = n),
                      (this.scroll = e),
                      (this.composing = !1),
                      (this.mouseDown = !1),
                      (this.root = this.scroll.domNode),
                      (this.cursor = o.default.create("cursor", this)),
                      (this.lastRange = this.savedRange = new h(0, 0)),
                      this.handleComposition(),
                      this.handleDragging(),
                      this.emitter.listenDOM(
                        "selectionchange",
                        document,
                        function () {
                          i.mouseDown ||
                            setTimeout(
                              i.update.bind(i, l.default.sources.USER),
                              1
                            );
                        }
                      ),
                      this.emitter.on(
                        l.default.events.EDITOR_CHANGE,
                        function (t, e) {
                          t === l.default.events.TEXT_CHANGE &&
                            e.length() > 0 &&
                            i.update(l.default.sources.SILENT);
                        }
                      ),
                      this.emitter.on(
                        l.default.events.SCROLL_BEFORE_UPDATE,
                        function () {
                          if (i.hasFocus()) {
                            var t = i.getNativeRange();
                            null != t &&
                              t.start.node !== i.cursor.textNode &&
                              i.emitter.once(
                                l.default.events.SCROLL_UPDATE,
                                function () {
                                  try {
                                    i.setNativeRange(
                                      t.start.node,
                                      t.start.offset,
                                      t.end.node,
                                      t.end.offset
                                    );
                                  } catch (t) {}
                                }
                              );
                          }
                        }
                      ),
                      this.emitter.on(
                        l.default.events.SCROLL_OPTIMIZE,
                        function (t, e) {
                          if (e.range) {
                            var n = e.range,
                              r = n.startNode,
                              o = n.startOffset,
                              a = n.endNode,
                              s = n.endOffset;
                            i.setNativeRange(r, o, a, s);
                          }
                        }
                      ),
                      this.update(l.default.sources.SILENT);
                  }
                  return (
                    r(t, [
                      {
                        key: "handleComposition",
                        value: function () {
                          var t = this;
                          this.root.addEventListener(
                            "compositionstart",
                            function () {
                              t.composing = !0;
                            }
                          ),
                            this.root.addEventListener(
                              "compositionend",
                              function () {
                                if (((t.composing = !1), t.cursor.parent)) {
                                  var e = t.cursor.restore();
                                  if (!e) return;
                                  setTimeout(function () {
                                    t.setNativeRange(
                                      e.startNode,
                                      e.startOffset,
                                      e.endNode,
                                      e.endOffset
                                    );
                                  }, 1);
                                }
                              }
                            );
                        },
                      },
                      {
                        key: "handleDragging",
                        value: function () {
                          var t = this;
                          this.emitter.listenDOM(
                            "mousedown",
                            document.body,
                            function () {
                              t.mouseDown = !0;
                            }
                          ),
                            this.emitter.listenDOM(
                              "mouseup",
                              document.body,
                              function () {
                                (t.mouseDown = !1),
                                  t.update(l.default.sources.USER);
                              }
                            );
                        },
                      },
                      {
                        key: "focus",
                        value: function () {
                          this.hasFocus() ||
                            (this.root.focus(), this.setRange(this.savedRange));
                        },
                      },
                      {
                        key: "format",
                        value: function (t, e) {
                          if (
                            null == this.scroll.whitelist ||
                            this.scroll.whitelist[t]
                          ) {
                            this.scroll.update();
                            var n = this.getNativeRange();
                            if (
                              null != n &&
                              n.native.collapsed &&
                              !o.default.query(t, o.default.Scope.BLOCK)
                            ) {
                              if (n.start.node !== this.cursor.textNode) {
                                var i = o.default.find(n.start.node, !1);
                                if (null == i) return;
                                if (i instanceof o.default.Leaf) {
                                  var r = i.split(n.start.offset);
                                  i.parent.insertBefore(this.cursor, r);
                                } else
                                  i.insertBefore(this.cursor, n.start.node);
                                this.cursor.attach();
                              }
                              this.cursor.format(t, e),
                                this.scroll.optimize(),
                                this.setNativeRange(
                                  this.cursor.textNode,
                                  this.cursor.textNode.data.length
                                ),
                                this.update();
                            }
                          }
                        },
                      },
                      {
                        key: "getBounds",
                        value: function (t) {
                          var e =
                              arguments.length > 1 && void 0 !== arguments[1]
                                ? arguments[1]
                                : 0,
                            n = this.scroll.length();
                          (t = Math.min(t, n - 1)),
                            (e = Math.min(t + e, n - 1) - t);
                          var r = void 0,
                            o = this.scroll.leaf(t),
                            a = i(o, 2),
                            s = a[0],
                            l = a[1];
                          if (null == s) return null;
                          var c = s.position(l, !0),
                            d = i(c, 2);
                          (r = d[0]), (l = d[1]);
                          var u = document.createRange();
                          if (e > 0) {
                            u.setStart(r, l);
                            var p = this.scroll.leaf(t + e),
                              h = i(p, 2);
                            if (((s = h[0]), (l = h[1]), null == s))
                              return null;
                            var f = s.position(l, !0),
                              b = i(f, 2);
                            return (
                              (r = b[0]),
                              (l = b[1]),
                              u.setEnd(r, l),
                              u.getBoundingClientRect()
                            );
                          }
                          var m = "left",
                            g = void 0;
                          return (
                            r instanceof Text
                              ? (l < r.data.length
                                  ? (u.setStart(r, l), u.setEnd(r, l + 1))
                                  : (u.setStart(r, l - 1),
                                    u.setEnd(r, l),
                                    (m = "right")),
                                (g = u.getBoundingClientRect()))
                              : ((g = s.domNode.getBoundingClientRect()),
                                l > 0 && (m = "right")),
                            {
                              bottom: g.top + g.height,
                              height: g.height,
                              left: g[m],
                              right: g[m],
                              top: g.top,
                              width: 0,
                            }
                          );
                        },
                      },
                      {
                        key: "getNativeRange",
                        value: function () {
                          var t = document.getSelection();
                          if (null == t || t.rangeCount <= 0) return null;
                          var e = t.getRangeAt(0);
                          if (null == e) return null;
                          var n = this.normalizeNative(e);
                          return p.info("getNativeRange", n), n;
                        },
                      },
                      {
                        key: "getRange",
                        value: function () {
                          var t = this.getNativeRange();
                          return null == t
                            ? [null, null]
                            : [this.normalizedToRange(t), t];
                        },
                      },
                      {
                        key: "hasFocus",
                        value: function () {
                          return document.activeElement === this.root;
                        },
                      },
                      {
                        key: "normalizedToRange",
                        value: function (t) {
                          var e = this,
                            n = [[t.start.node, t.start.offset]];
                          t.native.collapsed ||
                            n.push([t.end.node, t.end.offset]);
                          var r = n.map(function (t) {
                              var n = i(t, 2),
                                r = n[0],
                                a = n[1],
                                s = o.default.find(r, !0),
                                l = s.offset(e.scroll);
                              return 0 === a
                                ? l
                                : s instanceof o.default.Container
                                ? l + s.length()
                                : l + s.index(r, a);
                            }),
                            a = Math.min(
                              Math.max.apply(Math, d(r)),
                              this.scroll.length() - 1
                            ),
                            s = Math.min.apply(Math, [a].concat(d(r)));
                          return new h(s, a - s);
                        },
                      },
                      {
                        key: "normalizeNative",
                        value: function (t) {
                          if (
                            !b(this.root, t.startContainer) ||
                            (!t.collapsed && !b(this.root, t.endContainer))
                          )
                            return null;
                          var e = {
                            start: {
                              node: t.startContainer,
                              offset: t.startOffset,
                            },
                            end: { node: t.endContainer, offset: t.endOffset },
                            native: t,
                          };
                          return (
                            [e.start, e.end].forEach(function (t) {
                              for (
                                var e = t.node, n = t.offset;
                                !(e instanceof Text) && e.childNodes.length > 0;

                              )
                                if (e.childNodes.length > n)
                                  (e = e.childNodes[n]), (n = 0);
                                else {
                                  if (e.childNodes.length !== n) break;
                                  n =
                                    (e = e.lastChild) instanceof Text
                                      ? e.data.length
                                      : e.childNodes.length + 1;
                                }
                              (t.node = e), (t.offset = n);
                            }),
                            e
                          );
                        },
                      },
                      {
                        key: "rangeToNative",
                        value: function (t) {
                          var e = this,
                            n = t.collapsed
                              ? [t.index]
                              : [t.index, t.index + t.length],
                            r = [],
                            o = this.scroll.length();
                          return (
                            n.forEach(function (t, n) {
                              t = Math.min(o - 1, t);
                              var a,
                                s = e.scroll.leaf(t),
                                l = i(s, 2),
                                c = l[0],
                                d = l[1],
                                u = c.position(d, 0 !== n),
                                p = i(u, 2);
                              (a = p[0]), (d = p[1]), r.push(a, d);
                            }),
                            r.length < 2 && (r = r.concat(r)),
                            r
                          );
                        },
                      },
                      {
                        key: "scrollIntoView",
                        value: function (t) {
                          var e = this.lastRange;
                          if (null != e) {
                            var n = this.getBounds(e.index, e.length);
                            if (null != n) {
                              var r = this.scroll.length() - 1,
                                o = this.scroll.line(Math.min(e.index, r)),
                                a = i(o, 1)[0],
                                s = a;
                              if (e.length > 0) {
                                var l = this.scroll.line(
                                  Math.min(e.index + e.length, r)
                                );
                                s = i(l, 1)[0];
                              }
                              if (null != a && null != s) {
                                var c = t.getBoundingClientRect();
                                n.top < c.top
                                  ? (t.scrollTop -= c.top - n.top)
                                  : n.bottom > c.bottom &&
                                    (t.scrollTop += n.bottom - c.bottom);
                              }
                            }
                          }
                        },
                      },
                      {
                        key: "setNativeRange",
                        value: function (t, e) {
                          var n =
                              arguments.length > 2 && void 0 !== arguments[2]
                                ? arguments[2]
                                : t,
                            i =
                              arguments.length > 3 && void 0 !== arguments[3]
                                ? arguments[3]
                                : e,
                            r =
                              arguments.length > 4 &&
                              void 0 !== arguments[4] &&
                              arguments[4];
                          if (
                            (p.info("setNativeRange", t, e, n, i),
                            null == t ||
                              (null != this.root.parentNode &&
                                null != t.parentNode &&
                                null != n.parentNode))
                          ) {
                            var o = document.getSelection();
                            if (null != o)
                              if (null != t) {
                                this.hasFocus() || this.root.focus();
                                var a = (this.getNativeRange() || {}).native;
                                if (
                                  null == a ||
                                  r ||
                                  t !== a.startContainer ||
                                  e !== a.startOffset ||
                                  n !== a.endContainer ||
                                  i !== a.endOffset
                                ) {
                                  "BR" == t.tagName &&
                                    ((e = [].indexOf.call(
                                      t.parentNode.childNodes,
                                      t
                                    )),
                                    (t = t.parentNode)),
                                    "BR" == n.tagName &&
                                      ((i = [].indexOf.call(
                                        n.parentNode.childNodes,
                                        n
                                      )),
                                      (n = n.parentNode));
                                  var s = document.createRange();
                                  s.setStart(t, e),
                                    s.setEnd(n, i),
                                    o.removeAllRanges(),
                                    o.addRange(s);
                                }
                              } else
                                o.removeAllRanges(),
                                  this.root.blur(),
                                  document.body.focus();
                          }
                        },
                      },
                      {
                        key: "setRange",
                        value: function (t) {
                          var e =
                              arguments.length > 1 &&
                              void 0 !== arguments[1] &&
                              arguments[1],
                            n =
                              arguments.length > 2 && void 0 !== arguments[2]
                                ? arguments[2]
                                : l.default.sources.API;
                          if (
                            ("string" == typeof e && ((n = e), (e = !1)),
                            p.info("setRange", t),
                            null != t)
                          ) {
                            var i = this.rangeToNative(t);
                            this.setNativeRange.apply(this, d(i).concat([e]));
                          } else this.setNativeRange(null);
                          this.update(n);
                        },
                      },
                      {
                        key: "update",
                        value: function () {
                          var t =
                              arguments.length > 0 && void 0 !== arguments[0]
                                ? arguments[0]
                                : l.default.sources.USER,
                            e = this.lastRange,
                            n = this.getRange(),
                            r = i(n, 2),
                            o = r[0],
                            c = r[1];
                          if (
                            ((this.lastRange = o),
                            null != this.lastRange &&
                              (this.savedRange = this.lastRange),
                            !(0, s.default)(e, this.lastRange))
                          ) {
                            var d;
                            !this.composing &&
                              null != c &&
                              c.native.collapsed &&
                              c.start.node !== this.cursor.textNode &&
                              this.cursor.restore();
                            var u,
                              p = [
                                l.default.events.SELECTION_CHANGE,
                                (0, a.default)(this.lastRange),
                                (0, a.default)(e),
                                t,
                              ];
                            (d = this.emitter).emit.apply(
                              d,
                              [l.default.events.EDITOR_CHANGE].concat(p)
                            ),
                              t !== l.default.sources.SILENT &&
                                (u = this.emitter).emit.apply(u, p);
                          }
                        },
                      },
                    ]),
                    t
                  );
                })();
              function b(t, e) {
                try {
                  e.parentNode;
                } catch (t) {
                  return !1;
                }
                return e instanceof Text && (e = e.parentNode), t.contains(e);
              }
              (e.Range = h), (e.default = f);
            },
            function (t, e, n) {
              "use strict";
              Object.defineProperty(e, "__esModule", { value: !0 });
              var i,
                r = (function () {
                  function t(t, e) {
                    for (var n = 0; n < e.length; n++) {
                      var i = e[n];
                      (i.enumerable = i.enumerable || !1),
                        (i.configurable = !0),
                        "value" in i && (i.writable = !0),
                        Object.defineProperty(t, i.key, i);
                    }
                  }
                  return function (e, n, i) {
                    return n && t(e.prototype, n), i && t(e, i), e;
                  };
                })();
              function o(t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              }
              function a(t, e) {
                if (!t)
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                return !e || ("object" != typeof e && "function" != typeof e)
                  ? t
                  : e;
              }
              var s = (function (t) {
                function e() {
                  return (
                    o(this, e),
                    a(
                      this,
                      (e.__proto__ || Object.getPrototypeOf(e)).apply(
                        this,
                        arguments
                      )
                    )
                  );
                }
                return (
                  (function (t, e) {
                    if ("function" != typeof e && null !== e)
                      throw new TypeError(
                        "Super expression must either be null or a function, not " +
                          typeof e
                      );
                    (t.prototype = Object.create(e && e.prototype, {
                      constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0,
                      },
                    })),
                      e &&
                        (Object.setPrototypeOf
                          ? Object.setPrototypeOf(t, e)
                          : (t.__proto__ = e));
                  })(e, t),
                  r(
                    e,
                    [
                      {
                        key: "insertInto",
                        value: function (t, n) {
                          0 === t.children.length
                            ? (function t(e, n, i) {
                                null === e && (e = Function.prototype);
                                var r = Object.getOwnPropertyDescriptor(e, n);
                                if (void 0 === r) {
                                  var o = Object.getPrototypeOf(e);
                                  return null === o ? void 0 : t(o, n, i);
                                }
                                if ("value" in r) return r.value;
                                var a = r.get;
                                return void 0 !== a ? a.call(i) : void 0;
                              })(
                                e.prototype.__proto__ ||
                                  Object.getPrototypeOf(e.prototype),
                                "insertInto",
                                this
                              ).call(this, t, n)
                            : this.remove();
                        },
                      },
                      {
                        key: "length",
                        value: function () {
                          return 0;
                        },
                      },
                      {
                        key: "value",
                        value: function () {
                          return "";
                        },
                      },
                    ],
                    [{ key: "value", value: function () {} }]
                  ),
                  e
                );
              })(
                ((i = n(0)) && i.__esModule ? i : { default: i }).default.Embed
              );
              (s.blotName = "break"), (s.tagName = "BR"), (e.default = s);
            },
            function (t, e, n) {
              "use strict";
              var i,
                r =
                  (this && this.__extends) ||
                  ((i =
                    Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array &&
                      function (t, e) {
                        t.__proto__ = e;
                      }) ||
                    function (t, e) {
                      for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
                    }),
                  function (t, e) {
                    function n() {
                      this.constructor = t;
                    }
                    i(t, e),
                      (t.prototype =
                        null === e
                          ? Object.create(e)
                          : ((n.prototype = e.prototype), new n()));
                  });
              Object.defineProperty(e, "__esModule", { value: !0 });
              var o = n(44),
                a = n(30),
                s = n(1),
                l = (function (t) {
                  function e(e) {
                    var n = t.call(this, e) || this;
                    return n.build(), n;
                  }
                  return (
                    r(e, t),
                    (e.prototype.appendChild = function (t) {
                      this.insertBefore(t);
                    }),
                    (e.prototype.attach = function () {
                      t.prototype.attach.call(this),
                        this.children.forEach(function (t) {
                          t.attach();
                        });
                    }),
                    (e.prototype.build = function () {
                      var t = this;
                      (this.children = new o.default()),
                        [].slice
                          .call(this.domNode.childNodes)
                          .reverse()
                          .forEach(function (e) {
                            try {
                              var n = c(e);
                              t.insertBefore(n, t.children.head || void 0);
                            } catch (t) {
                              if (t instanceof s.ParchmentError) return;
                              throw t;
                            }
                          });
                    }),
                    (e.prototype.deleteAt = function (t, e) {
                      if (0 === t && e === this.length()) return this.remove();
                      this.children.forEachAt(t, e, function (t, e, n) {
                        t.deleteAt(e, n);
                      });
                    }),
                    (e.prototype.descendant = function (t, n) {
                      var i = this.children.find(n),
                        r = i[0],
                        o = i[1];
                      return (null == t.blotName && t(r)) ||
                        (null != t.blotName && r instanceof t)
                        ? [r, o]
                        : r instanceof e
                        ? r.descendant(t, o)
                        : [null, -1];
                    }),
                    (e.prototype.descendants = function (t, n, i) {
                      void 0 === n && (n = 0),
                        void 0 === i && (i = Number.MAX_VALUE);
                      var r = [],
                        o = i;
                      return (
                        this.children.forEachAt(n, i, function (n, i, a) {
                          ((null == t.blotName && t(n)) ||
                            (null != t.blotName && n instanceof t)) &&
                            r.push(n),
                            n instanceof e &&
                              (r = r.concat(n.descendants(t, i, o))),
                            (o -= a);
                        }),
                        r
                      );
                    }),
                    (e.prototype.detach = function () {
                      this.children.forEach(function (t) {
                        t.detach();
                      }),
                        t.prototype.detach.call(this);
                    }),
                    (e.prototype.formatAt = function (t, e, n, i) {
                      this.children.forEachAt(t, e, function (t, e, r) {
                        t.formatAt(e, r, n, i);
                      });
                    }),
                    (e.prototype.insertAt = function (t, e, n) {
                      var i = this.children.find(t),
                        r = i[0],
                        o = i[1];
                      if (r) r.insertAt(o, e, n);
                      else {
                        var a =
                          null == n ? s.create("text", e) : s.create(e, n);
                        this.appendChild(a);
                      }
                    }),
                    (e.prototype.insertBefore = function (t, e) {
                      if (
                        null != this.statics.allowedChildren &&
                        !this.statics.allowedChildren.some(function (e) {
                          return t instanceof e;
                        })
                      )
                        throw new s.ParchmentError(
                          "Cannot insert " +
                            t.statics.blotName +
                            " into " +
                            this.statics.blotName
                        );
                      t.insertInto(this, e);
                    }),
                    (e.prototype.length = function () {
                      return this.children.reduce(function (t, e) {
                        return t + e.length();
                      }, 0);
                    }),
                    (e.prototype.moveChildren = function (t, e) {
                      this.children.forEach(function (n) {
                        t.insertBefore(n, e);
                      });
                    }),
                    (e.prototype.optimize = function (e) {
                      if (
                        (t.prototype.optimize.call(this, e),
                        0 === this.children.length)
                      )
                        if (null != this.statics.defaultChild) {
                          var n = s.create(this.statics.defaultChild);
                          this.appendChild(n), n.optimize(e);
                        } else this.remove();
                    }),
                    (e.prototype.path = function (t, n) {
                      void 0 === n && (n = !1);
                      var i = this.children.find(t, n),
                        r = i[0],
                        o = i[1],
                        a = [[this, t]];
                      return r instanceof e
                        ? a.concat(r.path(o, n))
                        : (null != r && a.push([r, o]), a);
                    }),
                    (e.prototype.removeChild = function (t) {
                      this.children.remove(t);
                    }),
                    (e.prototype.replace = function (n) {
                      n instanceof e && n.moveChildren(this),
                        t.prototype.replace.call(this, n);
                    }),
                    (e.prototype.split = function (t, e) {
                      if ((void 0 === e && (e = !1), !e)) {
                        if (0 === t) return this;
                        if (t === this.length()) return this.next;
                      }
                      var n = this.clone();
                      return (
                        this.parent.insertBefore(n, this.next),
                        this.children.forEachAt(
                          t,
                          this.length(),
                          function (t, i, r) {
                            (t = t.split(i, e)), n.appendChild(t);
                          }
                        ),
                        n
                      );
                    }),
                    (e.prototype.unwrap = function () {
                      this.moveChildren(this.parent, this.next), this.remove();
                    }),
                    (e.prototype.update = function (t, e) {
                      var n = this,
                        i = [],
                        r = [];
                      t.forEach(function (t) {
                        t.target === n.domNode &&
                          "childList" === t.type &&
                          (i.push.apply(i, t.addedNodes),
                          r.push.apply(r, t.removedNodes));
                      }),
                        r.forEach(function (t) {
                          if (
                            !(
                              null != t.parentNode &&
                              "IFRAME" !== t.tagName &&
                              document.body.compareDocumentPosition(t) &
                                Node.DOCUMENT_POSITION_CONTAINED_BY
                            )
                          ) {
                            var e = s.find(t);
                            null != e &&
                              ((null != e.domNode.parentNode &&
                                e.domNode.parentNode !== n.domNode) ||
                                e.detach());
                          }
                        }),
                        i
                          .filter(function (t) {
                            return t.parentNode == n.domNode;
                          })
                          .sort(function (t, e) {
                            return t === e
                              ? 0
                              : t.compareDocumentPosition(e) &
                                Node.DOCUMENT_POSITION_FOLLOWING
                              ? 1
                              : -1;
                          })
                          .forEach(function (t) {
                            var e = null;
                            null != t.nextSibling &&
                              (e = s.find(t.nextSibling));
                            var i = c(t);
                            (i.next == e && null != i.next) ||
                              (null != i.parent && i.parent.removeChild(n),
                              n.insertBefore(i, e || void 0));
                          });
                    }),
                    e
                  );
                })(a.default);
              function c(t) {
                var e = s.find(t);
                if (null == e)
                  try {
                    e = s.create(t);
                  } catch (n) {
                    (e = s.create(s.Scope.INLINE)),
                      [].slice.call(t.childNodes).forEach(function (t) {
                        e.domNode.appendChild(t);
                      }),
                      t.parentNode && t.parentNode.replaceChild(e.domNode, t),
                      e.attach();
                  }
                return e;
              }
              e.default = l;
            },
            function (t, e, n) {
              "use strict";
              var i,
                r =
                  (this && this.__extends) ||
                  ((i =
                    Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array &&
                      function (t, e) {
                        t.__proto__ = e;
                      }) ||
                    function (t, e) {
                      for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
                    }),
                  function (t, e) {
                    function n() {
                      this.constructor = t;
                    }
                    i(t, e),
                      (t.prototype =
                        null === e
                          ? Object.create(e)
                          : ((n.prototype = e.prototype), new n()));
                  });
              Object.defineProperty(e, "__esModule", { value: !0 });
              var o = n(12),
                a = n(31),
                s = n(17),
                l = n(1),
                c = (function (t) {
                  function e(e) {
                    var n = t.call(this, e) || this;
                    return (n.attributes = new a.default(n.domNode)), n;
                  }
                  return (
                    r(e, t),
                    (e.formats = function (t) {
                      return (
                        "string" == typeof this.tagName ||
                        (Array.isArray(this.tagName)
                          ? t.tagName.toLowerCase()
                          : void 0)
                      );
                    }),
                    (e.prototype.format = function (t, e) {
                      var n = l.query(t);
                      n instanceof o.default
                        ? this.attributes.attribute(n, e)
                        : e &&
                          (null == n ||
                            (t === this.statics.blotName &&
                              this.formats()[t] === e) ||
                            this.replaceWith(t, e));
                    }),
                    (e.prototype.formats = function () {
                      var t = this.attributes.values(),
                        e = this.statics.formats(this.domNode);
                      return null != e && (t[this.statics.blotName] = e), t;
                    }),
                    (e.prototype.replaceWith = function (e, n) {
                      var i = t.prototype.replaceWith.call(this, e, n);
                      return this.attributes.copy(i), i;
                    }),
                    (e.prototype.update = function (e, n) {
                      var i = this;
                      t.prototype.update.call(this, e, n),
                        e.some(function (t) {
                          return (
                            t.target === i.domNode && "attributes" === t.type
                          );
                        }) && this.attributes.build();
                    }),
                    (e.prototype.wrap = function (n, i) {
                      var r = t.prototype.wrap.call(this, n, i);
                      return (
                        r instanceof e &&
                          r.statics.scope === this.statics.scope &&
                          this.attributes.move(r),
                        r
                      );
                    }),
                    e
                  );
                })(s.default);
              e.default = c;
            },
            function (t, e, n) {
              "use strict";
              var i,
                r =
                  (this && this.__extends) ||
                  ((i =
                    Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array &&
                      function (t, e) {
                        t.__proto__ = e;
                      }) ||
                    function (t, e) {
                      for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
                    }),
                  function (t, e) {
                    function n() {
                      this.constructor = t;
                    }
                    i(t, e),
                      (t.prototype =
                        null === e
                          ? Object.create(e)
                          : ((n.prototype = e.prototype), new n()));
                  });
              Object.defineProperty(e, "__esModule", { value: !0 });
              var o = n(30),
                a = n(1),
                s = (function (t) {
                  function e() {
                    return (null !== t && t.apply(this, arguments)) || this;
                  }
                  return (
                    r(e, t),
                    (e.value = function (t) {
                      return !0;
                    }),
                    (e.prototype.index = function (t, e) {
                      return this.domNode === t ||
                        this.domNode.compareDocumentPosition(t) &
                          Node.DOCUMENT_POSITION_CONTAINED_BY
                        ? Math.min(e, 1)
                        : -1;
                    }),
                    (e.prototype.position = function (t, e) {
                      var n = [].indexOf.call(
                        this.parent.domNode.childNodes,
                        this.domNode
                      );
                      return t > 0 && (n += 1), [this.parent.domNode, n];
                    }),
                    (e.prototype.value = function () {
                      var t;
                      return (
                        ((t = {})[this.statics.blotName] =
                          this.statics.value(this.domNode) || !0),
                        t
                      );
                    }),
                    (e.scope = a.Scope.INLINE_BLOT),
                    e
                  );
                })(o.default);
              e.default = s;
            },
            function (t, e, n) {
              var i = n(11),
                r = n(3),
                o = {
                  attributes: {
                    compose: function (t, e, n) {
                      "object" != typeof t && (t = {}),
                        "object" != typeof e && (e = {});
                      var i = r(!0, {}, e);
                      for (var o in (n ||
                        (i = Object.keys(i).reduce(function (t, e) {
                          return null != i[e] && (t[e] = i[e]), t;
                        }, {})),
                      t))
                        void 0 !== t[o] && void 0 === e[o] && (i[o] = t[o]);
                      return Object.keys(i).length > 0 ? i : void 0;
                    },
                    diff: function (t, e) {
                      "object" != typeof t && (t = {}),
                        "object" != typeof e && (e = {});
                      var n = Object.keys(t)
                        .concat(Object.keys(e))
                        .reduce(function (n, r) {
                          return (
                            i(t[r], e[r]) ||
                              (n[r] = void 0 === e[r] ? null : e[r]),
                            n
                          );
                        }, {});
                      return Object.keys(n).length > 0 ? n : void 0;
                    },
                    transform: function (t, e, n) {
                      if ("object" != typeof t) return e;
                      if ("object" == typeof e) {
                        if (!n) return e;
                        var i = Object.keys(e).reduce(function (n, i) {
                          return void 0 === t[i] && (n[i] = e[i]), n;
                        }, {});
                        return Object.keys(i).length > 0 ? i : void 0;
                      }
                    },
                  },
                  iterator: function (t) {
                    return new a(t);
                  },
                  length: function (t) {
                    return "number" == typeof t.delete
                      ? t.delete
                      : "number" == typeof t.retain
                      ? t.retain
                      : "string" == typeof t.insert
                      ? t.insert.length
                      : 1;
                  },
                };
              function a(t) {
                (this.ops = t), (this.index = 0), (this.offset = 0);
              }
              (a.prototype.hasNext = function () {
                return this.peekLength() < 1 / 0;
              }),
                (a.prototype.next = function (t) {
                  t || (t = 1 / 0);
                  var e = this.ops[this.index];
                  if (e) {
                    var n = this.offset,
                      i = o.length(e);
                    if (
                      (t >= i - n
                        ? ((t = i - n), (this.index += 1), (this.offset = 0))
                        : (this.offset += t),
                      "number" == typeof e.delete)
                    )
                      return { delete: t };
                    var r = {};
                    return (
                      e.attributes && (r.attributes = e.attributes),
                      "number" == typeof e.retain
                        ? (r.retain = t)
                        : "string" == typeof e.insert
                        ? (r.insert = e.insert.substr(n, t))
                        : (r.insert = e.insert),
                      r
                    );
                  }
                  return { retain: 1 / 0 };
                }),
                (a.prototype.peek = function () {
                  return this.ops[this.index];
                }),
                (a.prototype.peekLength = function () {
                  return this.ops[this.index]
                    ? o.length(this.ops[this.index]) - this.offset
                    : 1 / 0;
                }),
                (a.prototype.peekType = function () {
                  return this.ops[this.index]
                    ? "number" == typeof this.ops[this.index].delete
                      ? "delete"
                      : "number" == typeof this.ops[this.index].retain
                      ? "retain"
                      : "insert"
                    : "retain";
                }),
                (a.prototype.rest = function () {
                  if (this.hasNext()) {
                    if (0 === this.offset) return this.ops.slice(this.index);
                    var t = this.offset,
                      e = this.index,
                      n = this.next(),
                      i = this.ops.slice(this.index);
                    return (this.offset = t), (this.index = e), [n].concat(i);
                  }
                  return [];
                }),
                (t.exports = o);
            },
            function (t, n) {
              var i = (function () {
                "use strict";
                function t(t, e) {
                  return null != e && t instanceof e;
                }
                var n, i, r;
                try {
                  n = Map;
                } catch (t) {
                  n = function () {};
                }
                try {
                  i = Set;
                } catch (t) {
                  i = function () {};
                }
                try {
                  r = Promise;
                } catch (t) {
                  r = function () {};
                }
                function o(a, l, c, d, u) {
                  "object" == typeof l &&
                    ((c = l.depth),
                    (d = l.prototype),
                    (u = l.includeNonEnumerable),
                    (l = l.circular));
                  var p = [],
                    h = [],
                    f = void 0 !== e;
                  return (
                    void 0 === l && (l = !0),
                    void 0 === c && (c = 1 / 0),
                    (function a(c, b) {
                      if (null === c) return null;
                      if (0 === b) return c;
                      var m, g;
                      if ("object" != typeof c) return c;
                      if (t(c, n)) m = new n();
                      else if (t(c, i)) m = new i();
                      else if (t(c, r))
                        m = new r(function (t, e) {
                          c.then(
                            function (e) {
                              t(a(e, b - 1));
                            },
                            function (t) {
                              e(a(t, b - 1));
                            }
                          );
                        });
                      else if (o.__isArray(c)) m = [];
                      else if (o.__isRegExp(c))
                        (m = new RegExp(c.source, s(c))),
                          c.lastIndex && (m.lastIndex = c.lastIndex);
                      else if (o.__isDate(c)) m = new Date(c.getTime());
                      else {
                        if (f && e.isBuffer(c))
                          return (
                            (m = e.allocUnsafe
                              ? e.allocUnsafe(c.length)
                              : new e(c.length)),
                            c.copy(m),
                            m
                          );
                        t(c, Error)
                          ? (m = Object.create(c))
                          : void 0 === d
                          ? ((g = Object.getPrototypeOf(c)),
                            (m = Object.create(g)))
                          : ((m = Object.create(d)), (g = d));
                      }
                      if (l) {
                        var v = p.indexOf(c);
                        if (-1 != v) return h[v];
                        p.push(c), h.push(m);
                      }
                      for (var _ in (t(c, n) &&
                        c.forEach(function (t, e) {
                          var n = a(e, b - 1),
                            i = a(t, b - 1);
                          m.set(n, i);
                        }),
                      t(c, i) &&
                        c.forEach(function (t) {
                          var e = a(t, b - 1);
                          m.add(e);
                        }),
                      c)) {
                        var y;
                        g && (y = Object.getOwnPropertyDescriptor(g, _)),
                          (y && null == y.set) || (m[_] = a(c[_], b - 1));
                      }
                      if (Object.getOwnPropertySymbols) {
                        var M = Object.getOwnPropertySymbols(c);
                        for (_ = 0; _ < M.length; _++) {
                          var O = M[_];
                          (!(A = Object.getOwnPropertyDescriptor(c, O)) ||
                            A.enumerable ||
                            u) &&
                            ((m[O] = a(c[O], b - 1)),
                            A.enumerable ||
                              Object.defineProperty(m, O, { enumerable: !1 }));
                        }
                      }
                      if (u) {
                        var w = Object.getOwnPropertyNames(c);
                        for (_ = 0; _ < w.length; _++) {
                          var A,
                            x = w[_];
                          ((A = Object.getOwnPropertyDescriptor(c, x)) &&
                            A.enumerable) ||
                            ((m[x] = a(c[x], b - 1)),
                            Object.defineProperty(m, x, { enumerable: !1 }));
                        }
                      }
                      return m;
                    })(a, c)
                  );
                }
                function a(t) {
                  return Object.prototype.toString.call(t);
                }
                function s(t) {
                  var e = "";
                  return (
                    t.global && (e += "g"),
                    t.ignoreCase && (e += "i"),
                    t.multiline && (e += "m"),
                    e
                  );
                }
                return (
                  (o.clonePrototype = function (t) {
                    if (null === t) return null;
                    var e = function () {};
                    return (e.prototype = t), new e();
                  }),
                  (o.__objToStr = a),
                  (o.__isDate = function (t) {
                    return "object" == typeof t && "[object Date]" === a(t);
                  }),
                  (o.__isArray = function (t) {
                    return "object" == typeof t && "[object Array]" === a(t);
                  }),
                  (o.__isRegExp = function (t) {
                    return "object" == typeof t && "[object RegExp]" === a(t);
                  }),
                  (o.__getRegExpFlags = s),
                  o
                );
              })();
              "object" == typeof t && t.exports && (t.exports = i);
            },
            function (t, e, n) {
              "use strict";
              Object.defineProperty(e, "__esModule", { value: !0 });
              var i = function (t, e) {
                  if (Array.isArray(t)) return t;
                  if (Symbol.iterator in Object(t))
                    return (function (t, e) {
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
                          !i && s.return && s.return();
                        } finally {
                          if (r) throw o;
                        }
                      }
                      return n;
                    })(t, e);
                  throw new TypeError(
                    "Invalid attempt to destructure non-iterable instance"
                  );
                },
                r = (function () {
                  function t(t, e) {
                    for (var n = 0; n < e.length; n++) {
                      var i = e[n];
                      (i.enumerable = i.enumerable || !1),
                        (i.configurable = !0),
                        "value" in i && (i.writable = !0),
                        Object.defineProperty(t, i.key, i);
                    }
                  }
                  return function (e, n, i) {
                    return n && t(e.prototype, n), i && t(e, i), e;
                  };
                })(),
                o = function t(e, n, i) {
                  null === e && (e = Function.prototype);
                  var r = Object.getOwnPropertyDescriptor(e, n);
                  if (void 0 === r) {
                    var o = Object.getPrototypeOf(e);
                    return null === o ? void 0 : t(o, n, i);
                  }
                  if ("value" in r) return r.value;
                  var a = r.get;
                  return void 0 !== a ? a.call(i) : void 0;
                },
                a = h(n(0)),
                s = h(n(8)),
                l = n(4),
                c = h(l),
                d = h(n(16)),
                u = h(n(13)),
                p = h(n(25));
              function h(t) {
                return t && t.__esModule ? t : { default: t };
              }
              function f(t) {
                return t instanceof c.default || t instanceof l.BlockEmbed;
              }
              var b = (function (t) {
                function e(t, n) {
                  !(function (t, e) {
                    if (!(t instanceof e))
                      throw new TypeError("Cannot call a class as a function");
                  })(this, e);
                  var i = (function (t, e) {
                    if (!t)
                      throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                      );
                    return !e ||
                      ("object" != typeof e && "function" != typeof e)
                      ? t
                      : e;
                  })(
                    this,
                    (e.__proto__ || Object.getPrototypeOf(e)).call(this, t)
                  );
                  return (
                    (i.emitter = n.emitter),
                    Array.isArray(n.whitelist) &&
                      (i.whitelist = n.whitelist.reduce(function (t, e) {
                        return (t[e] = !0), t;
                      }, {})),
                    i.domNode.addEventListener(
                      "DOMNodeInserted",
                      function () {}
                    ),
                    i.optimize(),
                    i.enable(),
                    i
                  );
                }
                return (
                  (function (t, e) {
                    if ("function" != typeof e && null !== e)
                      throw new TypeError(
                        "Super expression must either be null or a function, not " +
                          typeof e
                      );
                    (t.prototype = Object.create(e && e.prototype, {
                      constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0,
                      },
                    })),
                      e &&
                        (Object.setPrototypeOf
                          ? Object.setPrototypeOf(t, e)
                          : (t.__proto__ = e));
                  })(e, t),
                  r(e, [
                    {
                      key: "batchStart",
                      value: function () {
                        this.batch = !0;
                      },
                    },
                    {
                      key: "batchEnd",
                      value: function () {
                        (this.batch = !1), this.optimize();
                      },
                    },
                    {
                      key: "deleteAt",
                      value: function (t, n) {
                        var r = this.line(t),
                          a = i(r, 2),
                          s = a[0],
                          c = a[1],
                          p = this.line(t + n),
                          h = i(p, 1)[0];
                        if (
                          (o(
                            e.prototype.__proto__ ||
                              Object.getPrototypeOf(e.prototype),
                            "deleteAt",
                            this
                          ).call(this, t, n),
                          null != h && s !== h && c > 0)
                        ) {
                          if (
                            s instanceof l.BlockEmbed ||
                            h instanceof l.BlockEmbed
                          )
                            return void this.optimize();
                          if (s instanceof u.default) {
                            var f = s.newlineIndex(s.length(), !0);
                            if (f > -1 && (s = s.split(f + 1)) === h)
                              return void this.optimize();
                          } else if (h instanceof u.default) {
                            var b = h.newlineIndex(0);
                            b > -1 && h.split(b + 1);
                          }
                          var m =
                            h.children.head instanceof d.default
                              ? null
                              : h.children.head;
                          s.moveChildren(h, m), s.remove();
                        }
                        this.optimize();
                      },
                    },
                    {
                      key: "enable",
                      value: function () {
                        var t =
                          !(arguments.length > 0 && void 0 !== arguments[0]) ||
                          arguments[0];
                        this.domNode.setAttribute("contenteditable", t);
                      },
                    },
                    {
                      key: "formatAt",
                      value: function (t, n, i, r) {
                        (null == this.whitelist || this.whitelist[i]) &&
                          (o(
                            e.prototype.__proto__ ||
                              Object.getPrototypeOf(e.prototype),
                            "formatAt",
                            this
                          ).call(this, t, n, i, r),
                          this.optimize());
                      },
                    },
                    {
                      key: "insertAt",
                      value: function (t, n, i) {
                        if (
                          null == i ||
                          null == this.whitelist ||
                          this.whitelist[n]
                        ) {
                          if (t >= this.length())
                            if (
                              null == i ||
                              null == a.default.query(n, a.default.Scope.BLOCK)
                            ) {
                              var r = a.default.create(
                                this.statics.defaultChild
                              );
                              this.appendChild(r),
                                null == i &&
                                  n.endsWith("\n") &&
                                  (n = n.slice(0, -1)),
                                r.insertAt(0, n, i);
                            } else {
                              var s = a.default.create(n, i);
                              this.appendChild(s);
                            }
                          else
                            o(
                              e.prototype.__proto__ ||
                                Object.getPrototypeOf(e.prototype),
                              "insertAt",
                              this
                            ).call(this, t, n, i);
                          this.optimize();
                        }
                      },
                    },
                    {
                      key: "insertBefore",
                      value: function (t, n) {
                        if (t.statics.scope === a.default.Scope.INLINE_BLOT) {
                          var i = a.default.create(this.statics.defaultChild);
                          i.appendChild(t), (t = i);
                        }
                        o(
                          e.prototype.__proto__ ||
                            Object.getPrototypeOf(e.prototype),
                          "insertBefore",
                          this
                        ).call(this, t, n);
                      },
                    },
                    {
                      key: "leaf",
                      value: function (t) {
                        return this.path(t).pop() || [null, -1];
                      },
                    },
                    {
                      key: "line",
                      value: function (t) {
                        return t === this.length()
                          ? this.line(t - 1)
                          : this.descendant(f, t);
                      },
                    },
                    {
                      key: "lines",
                      value: function () {
                        var t =
                            arguments.length > 0 && void 0 !== arguments[0]
                              ? arguments[0]
                              : 0,
                          e =
                            arguments.length > 1 && void 0 !== arguments[1]
                              ? arguments[1]
                              : Number.MAX_VALUE,
                          n = function t(e, n, i) {
                            var r = [],
                              o = i;
                            return (
                              e.children.forEachAt(n, i, function (e, n, i) {
                                f(e)
                                  ? r.push(e)
                                  : e instanceof a.default.Container &&
                                    (r = r.concat(t(e, n, o))),
                                  (o -= i);
                              }),
                              r
                            );
                          };
                        return n(this, t, e);
                      },
                    },
                    {
                      key: "optimize",
                      value: function () {
                        var t =
                            arguments.length > 0 && void 0 !== arguments[0]
                              ? arguments[0]
                              : [],
                          n =
                            arguments.length > 1 && void 0 !== arguments[1]
                              ? arguments[1]
                              : {};
                        !0 !== this.batch &&
                          (o(
                            e.prototype.__proto__ ||
                              Object.getPrototypeOf(e.prototype),
                            "optimize",
                            this
                          ).call(this, t, n),
                          t.length > 0 &&
                            this.emitter.emit(
                              s.default.events.SCROLL_OPTIMIZE,
                              t,
                              n
                            ));
                      },
                    },
                    {
                      key: "path",
                      value: function (t) {
                        return o(
                          e.prototype.__proto__ ||
                            Object.getPrototypeOf(e.prototype),
                          "path",
                          this
                        )
                          .call(this, t)
                          .slice(1);
                      },
                    },
                    {
                      key: "update",
                      value: function (t) {
                        if (!0 !== this.batch) {
                          var n = s.default.sources.USER;
                          "string" == typeof t && (n = t),
                            Array.isArray(t) ||
                              (t = this.observer.takeRecords()),
                            t.length > 0 &&
                              this.emitter.emit(
                                s.default.events.SCROLL_BEFORE_UPDATE,
                                n,
                                t
                              ),
                            o(
                              e.prototype.__proto__ ||
                                Object.getPrototypeOf(e.prototype),
                              "update",
                              this
                            ).call(this, t.concat([])),
                            t.length > 0 &&
                              this.emitter.emit(
                                s.default.events.SCROLL_UPDATE,
                                n,
                                t
                              );
                        }
                      },
                    },
                  ]),
                  e
                );
              })(a.default.Scroll);
              (b.blotName = "scroll"),
                (b.className = "ql-editor"),
                (b.tagName = "DIV"),
                (b.defaultChild = "block"),
                (b.allowedChildren = [c.default, l.BlockEmbed, p.default]),
                (e.default = b);
            },
            function (t, e, n) {
              "use strict";
              Object.defineProperty(e, "__esModule", { value: !0 }),
                (e.SHORTKEY = e.default = void 0);
              var i =
                  "function" == typeof Symbol &&
                  "symbol" == typeof Symbol.iterator
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
                      },
                r = function (t, e) {
                  if (Array.isArray(t)) return t;
                  if (Symbol.iterator in Object(t))
                    return (function (t, e) {
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
            