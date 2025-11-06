// app.part3-de-30.js
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
                a = b(n(21)),
                s = b(n(11)),
                l = b(n(3)),
                c = b(n(2)),
                d = b(n(20)),
                u = b(n(0)),
                p = b(n(5)),
                h = b(n(10)),
                f = b(n(9));
              function b(t) {
                return t && t.__esModule ? t : { default: t };
              }
              function m(t, e, n) {
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
              var g = (0, h.default)("quill:keyboard"),
                v = /Mac/i.test(navigator.platform) ? "metaKey" : "ctrlKey",
                _ = (function (t) {
                  function e(t, n) {
                    !(function (t, e) {
                      if (!(t instanceof e))
                        throw new TypeError(
                          "Cannot call a class as a function"
                        );
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
                      (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n)
                    );
                    return (
                      (i.bindings = {}),
                      Object.keys(i.options.bindings).forEach(function (e) {
                        ("list autofill" !== e ||
                          null == t.scroll.whitelist ||
                          t.scroll.whitelist.list) &&
                          i.options.bindings[e] &&
                          i.addBinding(i.options.bindings[e]);
                      }),
                      i.addBinding({ key: e.keys.ENTER, shiftKey: null }, A),
                      i.addBinding(
                        {
                          key: e.keys.ENTER,
                          metaKey: null,
                          ctrlKey: null,
                          altKey: null,
                        },
                        function () {}
                      ),
                      /Firefox/i.test(navigator.userAgent)
                        ? (i.addBinding(
                            { key: e.keys.BACKSPACE },
                            { collapsed: !0 },
                            M
                          ),
                          i.addBinding(
                            { key: e.keys.DELETE },
                            { collapsed: !0 },
                            O
                          ))
                        : (i.addBinding(
                            { key: e.keys.BACKSPACE },
                            { collapsed: !0, prefix: /^.?$/ },
                            M
                          ),
                          i.addBinding(
                            { key: e.keys.DELETE },
                            { collapsed: !0, suffix: /^.?$/ },
                            O
                          )),
                      i.addBinding(
                        { key: e.keys.BACKSPACE },
                        { collapsed: !1 },
                        w
                      ),
                      i.addBinding(
                        { key: e.keys.DELETE },
                        { collapsed: !1 },
                        w
                      ),
                      i.addBinding(
                        {
                          key: e.keys.BACKSPACE,
                          altKey: null,
                          ctrlKey: null,
                          metaKey: null,
                          shiftKey: null,
                        },
                        { collapsed: !0, offset: 0 },
                        M
                      ),
                      i.listen(),
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
                    o(e, null, [
                      {
                        key: "match",
                        value: function (t, e) {
                          return (
                            (e = C(e)),
                            !["altKey", "ctrlKey", "metaKey", "shiftKey"].some(
                              function (n) {
                                return !!e[n] !== t[n] && null !== e[n];
                              }
                            ) && e.key === (t.which || t.keyCode)
                          );
                        },
                      },
                    ]),
                    o(e, [
                      {
                        key: "addBinding",
                        value: function (t) {
                          var e =
                              arguments.length > 1 && void 0 !== arguments[1]
                                ? arguments[1]
                                : {},
                            n =
                              arguments.length > 2 && void 0 !== arguments[2]
                                ? arguments[2]
                                : {},
                            i = C(t);
                          if (null == i || null == i.key)
                            return g.warn(
                              "Attempted to add invalid keyboard binding",
                              i
                            );
                          "function" == typeof e && (e = { handler: e }),
                            "function" == typeof n && (n = { handler: n }),
                            (i = (0, l.default)(i, e, n)),
                            (this.bindings[i.key] = this.bindings[i.key] || []),
                            this.bindings[i.key].push(i);
                        },
                      },
                      {
                        key: "listen",
                        value: function () {
                          var t = this;
                          this.quill.root.addEventListener(
                            "keydown",
                            function (n) {
                              if (!n.defaultPrevented) {
                                var o = n.which || n.keyCode,
                                  a = (t.bindings[o] || []).filter(function (
                                    t
                                  ) {
                                    return e.match(n, t);
                                  });
                                if (0 !== a.length) {
                                  var l = t.quill.getSelection();
                                  if (null != l && t.quill.hasFocus()) {
                                    var c = t.quill.getLine(l.index),
                                      d = r(c, 2),
                                      p = d[0],
                                      h = d[1],
                                      f = t.quill.getLeaf(l.index),
                                      b = r(f, 2),
                                      m = b[0],
                                      g = b[1],
                                      v =
                                        0 === l.length
                                          ? [m, g]
                                          : t.quill.getLeaf(l.index + l.length),
                                      _ = r(v, 2),
                                      y = _[0],
                                      M = _[1],
                                      O =
                                        m instanceof u.default.Text
                                          ? m.value().slice(0, g)
                                          : "",
                                      w =
                                        y instanceof u.default.Text
                                          ? y.value().slice(M)
                                          : "",
                                      A = {
                                        collapsed: 0 === l.length,
                                        empty:
                                          0 === l.length && p.length() <= 1,
                                        format: t.quill.getFormat(l),
                                        offset: h,
                                        prefix: O,
                                        suffix: w,
                                      };
                                    a.some(function (e) {
                                      if (
                                        null != e.collapsed &&
                                        e.collapsed !== A.collapsed
                                      )
                                        return !1;
                                      if (
                                        null != e.empty &&
                                        e.empty !== A.empty
                                      )
                                        return !1;
                                      if (
                                        null != e.offset &&
                                        e.offset !== A.offset
                                      )
                                        return !1;
                                      if (Array.isArray(e.format)) {
                                        if (
                                          e.format.every(function (t) {
                                            return null == A.format[t];
                                          })
                                        )
                                          return !1;
                                      } else if (
                                        "object" === i(e.format) &&
                                        !Object.keys(e.format).every(function (
                                          t
                                        ) {
                                          return !0 === e.format[t]
                                            ? null != A.format[t]
                                            : !1 === e.format[t]
                                            ? null == A.format[t]
                                            : (0, s.default)(
                                                e.format[t],
                                                A.format[t]
                                              );
                                        })
                                      )
                                        return !1;
                                      return !(
                                        (null != e.prefix &&
                                          !e.prefix.test(A.prefix)) ||
                                        (null != e.suffix &&
                                          !e.suffix.test(A.suffix)) ||
                                        !0 === e.handler.call(t, l, A)
                                      );
                                    }) && n.preventDefault();
                                  }
                                }
                              }
                            }
                          );
                        },
                      },
                    ]),
                    e
                  );
                })(f.default);
              function y(t, e) {
                var n,
                  i = t === _.keys.LEFT ? "prefix" : "suffix";
                return (
                  m((n = { key: t, shiftKey: e, altKey: null }), i, /^$/),
                  m(n, "handler", function (n) {
                    var i = n.index;
                    t === _.keys.RIGHT && (i += n.length + 1);
                    var o = this.quill.getLeaf(i);
                    return !(
                      r(o, 1)[0] instanceof u.default.Embed &&
                      (t === _.keys.LEFT
                        ? e
                          ? this.quill.setSelection(
                              n.index - 1,
                              n.length + 1,
                              p.default.sources.USER
                            )
                          : this.quill.setSelection(
                              n.index - 1,
                              p.default.sources.USER
                            )
                        : e
                        ? this.quill.setSelection(
                            n.index,
                            n.length + 1,
                            p.default.sources.USER
                          )
                        : this.quill.setSelection(
                            n.index + n.length + 1,
                            p.default.sources.USER
                          ),
                      1)
                    );
                  }),
                  n
                );
              }
              function M(t, e) {
                if (!(0 === t.index || this.quill.getLength() <= 1)) {
                  var n = this.quill.getLine(t.index),
                    i = r(n, 1)[0],
                    o = {};
                  if (0 === e.offset) {
                    var a = this.quill.getLine(t.index - 1),
                      s = r(a, 1)[0];
                    if (null != s && s.length() > 1) {
                      var l = i.formats(),
                        c = this.quill.getFormat(t.index - 1, 1);
                      o = d.default.attributes.diff(l, c) || {};
                    }
                  }
                  var u = /[\uD800-\uDBFF][\uDC00-\uDFFF]$/.test(e.prefix)
                    ? 2
                    : 1;
                  this.quill.deleteText(t.index - u, u, p.default.sources.USER),
                    Object.keys(o).length > 0 &&
                      this.quill.formatLine(
                        t.index - u,
                        u,
                        o,
                        p.default.sources.USER
                      ),
                    this.quill.focus();
                }
              }
              function O(t, e) {
                var n = /^[\uD800-\uDBFF][\uDC00-\uDFFF]/.test(e.suffix)
                  ? 2
                  : 1;
                if (!(t.index >= this.quill.getLength() - n)) {
                  var i = {},
                    o = 0,
                    a = this.quill.getLine(t.index),
                    s = r(a, 1)[0];
                  if (e.offset >= s.length() - 1) {
                    var l = this.quill.getLine(t.index + 1),
                      c = r(l, 1)[0];
                    if (c) {
                      var u = s.formats(),
                        h = this.quill.getFormat(t.index, 1);
                      (i = d.default.attributes.diff(u, h) || {}),
                        (o = c.length());
                    }
                  }
                  this.quill.deleteText(t.index, n, p.default.sources.USER),
                    Object.keys(i).length > 0 &&
                      this.quill.formatLine(
                        t.index + o - 1,
                        n,
                        i,
                        p.default.sources.USER
                      );
                }
              }
              function w(t) {
                var e = this.quill.getLines(t),
                  n = {};
                if (e.length > 1) {
                  var i = e[0].formats(),
                    r = e[e.length - 1].formats();
                  n = d.default.attributes.diff(r, i) || {};
                }
                this.quill.deleteText(t, p.default.sources.USER),
                  Object.keys(n).length > 0 &&
                    this.quill.formatLine(
                      t.index,
                      1,
                      n,
                      p.default.sources.USER
                    ),
                  this.quill.setSelection(t.index, p.default.sources.SILENT),
                  this.quill.focus();
              }
              function A(t, e) {
                var n = this;
                t.length > 0 && this.quill.scroll.deleteAt(t.index, t.length);
                var i = Object.keys(e.format).reduce(function (t, n) {
                  return (
                    u.default.query(n, u.default.Scope.BLOCK) &&
                      !Array.isArray(e.format[n]) &&
                      (t[n] = e.format[n]),
                    t
                  );
                }, {});
                this.quill.insertText(t.index, "\n", i, p.default.sources.USER),
                  this.quill.setSelection(
                    t.index + 1,
                    p.default.sources.SILENT
                  ),
                  this.quill.focus(),
                  Object.keys(e.format).forEach(function (t) {
                    null == i[t] &&
                      (Array.isArray(e.format[t]) ||
                        ("link" !== t &&
                          n.quill.format(
                            t,
                            e.format[t],
                            p.default.sources.USER
                          )));
                  });
              }
              function x(t) {
                return {
                  key: _.keys.TAB,
                  shiftKey: !t,
                  format: { "code-block": !0 },
                  handler: function (e) {
                    var n = u.default.query("code-block"),
                      i = e.index,
                      o = e.length,
                      a = this.quill.scroll.descendant(n, i),
                      s = r(a, 2),
                      l = s[0],
                      c = s[1];
                    if (null != l) {
                      var d = this.quill.getIndex(l),
                        h = l.newlineIndex(c, !0) + 1,
                        f = l.newlineIndex(d + c + o),
                        b = l.domNode.textContent.slice(h, f).split("\n");
                      (c = 0),
                        b.forEach(function (e, r) {
                          t
                            ? (l.insertAt(h + c, n.TAB),
                              (c += n.TAB.length),
                              0 === r
                                ? (i += n.TAB.length)
                                : (o += n.TAB.length))
                            : e.startsWith(n.TAB) &&
                              (l.deleteAt(h + c, n.TAB.length),
                              (c -= n.TAB.length),
                              0 === r
                                ? (i -= n.TAB.length)
                                : (o -= n.TAB.length)),
                            (c += e.length + 1);
                        }),
                        this.quill.update(p.default.sources.USER),
                        this.quill.setSelection(i, o, p.default.sources.SILENT);
                    }
                  },
                };
              }
              function z(t) {
                return {
                  key: t[0].toUpperCase(),
                  shortKey: !0,
                  handler: function (e, n) {
                    this.quill.format(t, !n.format[t], p.default.sources.USER);
                  },
                };
              }
              function C(t) {
                if ("string" == typeof t || "number" == typeof t)
                  return C({ key: t });
                if (
                  ("object" === (void 0 === t ? "undefined" : i(t)) &&
                    (t = (0, a.default)(t, !1)),
                  "string" == typeof t.key)
                )
                  if (null != _.keys[t.key.toUpperCase()])
                    t.key = _.keys[t.key.toUpperCase()];
                  else {
                    if (1 !== t.key.length) return null;
                    t.key = t.key.toUpperCase().charCodeAt(0);
                  }
                return (
                  t.shortKey && ((t[v] = t.shortKey), delete t.shortKey), t
                );
              }
              (_.keys = {
                BACKSPACE: 8,
                TAB: 9,
                ENTER: 13,
                ESCAPE: 27,
                LEFT: 37,
                UP: 38,
                RIGHT: 39,
                DOWN: 40,
                DELETE: 46,
              }),
                (_.DEFAULTS = {
                  bindings: {
                    bold: z("bold"),
                    italic: z("italic"),
                    underline: z("underline"),
                    indent: {
                      key: _.keys.TAB,
                      format: ["blockquote", "indent", "list"],
                      handler: function (t, e) {
                        if (e.collapsed && 0 !== e.offset) return !0;
                        this.quill.format(
                          "indent",
                          "+1",
                          p.default.sources.USER
                        );
                      },
                    },
                    outdent: {
                      key: _.keys.TAB,
                      shiftKey: !0,
                      format: ["blockquote", "indent", "list"],
                      handler: function (t, e) {
                        if (e.collapsed && 0 !== e.offset) return !0;
                        this.quill.format(
                          "indent",
                          "-1",
                          p.default.sources.USER
                        );
                      },
                    },
                    "outdent backspace": {
                      key: _.keys.BACKSPACE,
                      collapsed: !0,
                      shiftKey: null,
                      metaKey: null,
                      ctrlKey: null,
                      altKey: null,
                      format: ["indent", "list"],
                      offset: 0,
                      handler: function (t, e) {
                        null != e.format.indent
                          ? this.quill.format(
                              "indent",
                              "-1",
                              p.default.sources.USER
                            )
                          : null != e.format.list &&
                            this.quill.format(
                              "list",
                              !1,
                              p.default.sources.USER
                            );
                      },
                    },
                    "indent code-block": x(!0),
                    "outdent code-block": x(!1),
                    "remove tab": {
                      key: _.keys.TAB,
                      shiftKey: !0,
                      collapsed: !0,
                      prefix: /\t$/,
                      handler: function (t) {
                        this.quill.deleteText(
                          t.index - 1,
                          1,
                          p.default.sources.USER
                        );
                      },
                    },
                    tab: {
                      key: _.keys.TAB,
                      handler: function (t) {
                        this.quill.history.cutoff();
                        var e = new c.default()
                          .retain(t.index)
                          .delete(t.length)
                          .insert("\t");
                        this.quill.updateContents(e, p.default.sources.USER),
                          this.quill.history.cutoff(),
                          this.quill.setSelection(
                            t.index + 1,
                            p.default.sources.SILENT
                          );
                      },
                    },
                    "list empty enter": {
                      key: _.keys.ENTER,
                      collapsed: !0,
                      format: ["list"],
                      empty: !0,
                      handler: function (t, e) {
                        this.quill.format("list", !1, p.default.sources.USER),
                          e.format.indent &&
                            this.quill.format(
                              "indent",
                              !1,
                              p.default.sources.USER
                            );
                      },
                    },
                    "checklist enter": {
                      key: _.keys.ENTER,
                      collapsed: !0,
                      format: { list: "checked" },
                      handler: function (t) {
                        var e = this.quill.getLine(t.index),
                          n = r(e, 2),
                          i = n[0],
                          o = n[1],
                          a = (0, l.default)({}, i.formats(), {
                            list: "checked",
                          }),
                          s = new c.default()
                            .retain(t.index)
                            .insert("\n", a)
                            .retain(i.length() - o - 1)
                            .retain(1, { list: "unchecked" });
                        this.quill.updateContents(s, p.default.sources.USER),
                          this.quill.setSelection(
                            t.index + 1,
                            p.default.sources.SILENT
                          ),
                          this.quill.scrollIntoView();
                      },
                    },
                    "header enter": {
                      key: _.keys.ENTER,
                      collapsed: !0,
                      format: ["header"],
                      suffix: /^$/,
                      handler: function (t, e) {
                        var n = this.quill.getLine(t.index),
                          i = r(n, 2),
                          o = i[0],
                          a = i[1],
                          s = new c.default()
                            .retain(t.index)
                            .insert("\n", e.format)
                            .retain(o.length() - a - 1)
                            .retain(1, { header: null });
                        this.quill.updateContents(s, p.default.sources.USER),
                          this.quill.setSelection(
                            t.index + 1,
                            p.default.sources.SILENT
                          ),
                          this.quill.scrollIntoView();
                      },
                    },
                    "list autofill": {
                      key: " ",
                      collapsed: !0,
                      format: { list: !1 },
                      prefix: /^\s*?(\d+\.|-|\*|\[ ?\]|\[x\])$/,
                      handler: function (t, e) {
                        var n = e.prefix.length,
                          i = this.quill.getLine(t.index),
                          o = r(i, 2),
                          a = o[0],
                          s = o[1];
                        if (s > n) return !0;
                        var l = void 0;
                        switch (e.prefix.trim()) {
                          case "[]":
                          case "[ ]":
                            l = "unchecked";
                            break;
                          case "[x]":
                            l = "checked";
                            break;
                          case "-":
                          case "*":
                            l = "bullet";
                            break;
                          default:
                            l = "ordered";
                        }
                        this.quill.insertText(
                          t.index,
                          " ",
                          p.default.sources.USER
                        ),
                          this.quill.history.cutoff();
                        var d = new c.default()
                          .retain(t.index - s)
                          .delete(n + 1)
                          .retain(a.length() - 2 - s)
                          .retain(1, { list: l });
                        this.quill.updateContents(d, p.default.sources.USER),
                          this.quill.history.cutoff(),
                          this.quill.setSelection(
                            t.index - n,
                            p.default.sources.SILENT
                          );
                      },
                    },
                    "code exit": {
                      key: _.keys.ENTER,
                      collapsed: !0,
                      format: ["code-block"],
                      prefix: /\n\n$/,
                      suffix: /^\s+$/,
                      handler: function (t) {
                        var e = this.quill.getLine(t.index),
                          n = r(e, 2),
                          i = n[0],
                          o = n[1],
                          a = new c.default()
                            .retain(t.index + i.length() - o - 2)
                            .retain(1, { "code-block": null })
                            .delete(1);
                        this.quill.updateContents(a, p.default.sources.USER);
                      },
                    },
                    "embed left": y(_.keys.LEFT, !1),
                    "embed left shift": y(_.keys.LEFT, !0),
                    "embed right": y(_.keys.RIGHT, !1),
                    "embed right shift": y(_.keys.RIGHT, !0),
                  },
                }),
                (e.default = _),
                (e.SHORTKEY = v);
            },
            function (t, e, n) {
              "use strict";
              Object.defineProperty(e, "__esModule", { value: !0 });
              var i = function t(e, n, i) {
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
                o = s(n(0)),
                a = s(n(7));
              function s(t) {
                return t && t.__esModule ? t : { default: t };
              }
              var l = (function (t) {
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
                    (i.selection = n),
                    (i.textNode = document.createTextNode(e.CONTENTS)),
                    i.domNode.appendChild(i.textNode),
                    (i._length = 0),
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
                  r(e, null, [{ key: "value", value: function () {} }]),
                  r(e, [
                    {
                      key: "detach",
                      value: function () {
                        null != this.parent && this.parent.removeChild(this);
                      },
                    },
                    {
                      key: "format",
                      value: function (t, n) {
                        if (0 !== this._length)
                          return i(
                            e.prototype.__proto__ ||
                              Object.getPrototypeOf(e.prototype),
                            "format",
                            this
                          ).call(this, t, n);
                        for (
                          var r = this, a = 0;
                          null != r &&
                          r.statics.scope !== o.default.Scope.BLOCK_BLOT;

                        )
                          (a += r.offset(r.parent)), (r = r.parent);
                        null != r &&
                          ((this._length = e.CONTENTS.length),
                          r.optimize(),
                          r.formatAt(a, e.CONTENTS.length, t, n),
                          (this._length = 0));
                      },
                    },
                    {
                      key: "index",
                      value: function (t, n) {
                        return t === this.textNode
                          ? 0
                          : i(
                              e.prototype.__proto__ ||
                                Object.getPrototypeOf(e.prototype),
                              "index",
                              this
                            ).call(this, t, n);
                      },
                    },
                    {
                      key: "length",
                      value: function () {
                        return this._length;
                      },
                    },
                    {
                      key: "position",
                      value: function () {
                        return [this.textNode, this.textNode.data.length];
                      },
                    },
                    {
                      key: "remove",
                      value: function () {
                        i(
                          e.prototype.__proto__ ||
                            Object.getPrototypeOf(e.prototype),
                          "remove",
                          this
                        ).call(this),
                          (this.parent = null);
                      },
                    },
                    {
                      key: "restore",
                      value: function () {
                        if (!this.selection.composing && null != this.parent) {
                          var t = this.textNode,
                            n = this.selection.getNativeRange(),
                            i = void 0,
                            r = void 0,
                            s = void 0;
                          if (
                            null != n &&
                            n.start.node === t &&
                            n.end.node === t
                          ) {
                            var l = [t, n.start.offset, n.end.offset];
                            (i = l[0]), (r = l[1]), (s = l[2]);
                          }
                          for (
                            ;
                            null != this.domNode.lastChild &&
                            this.domNode.lastChild !== this.textNode;

                          )
                            this.domNode.parentNode.insertBefore(
                              this.domNode.lastChild,
                              this.domNode
                            );
                          if (this.textNode.data !== e.CONTENTS) {
                            var c = this.textNode.data
                              .split(e.CONTENTS)
                              .join("");
                            this.next instanceof a.default
                              ? ((i = this.next.domNode),
                                this.next.insertAt(0, c),
                                (this.textNode.data = e.CONTENTS))
                              : ((this.textNode.data = c),
                                this.parent.insertBefore(
                                  o.default.create(this.textNode),
                                  this
                                ),
                                (this.textNode = document.createTextNode(
                                  e.CONTENTS
                                )),
                                this.domNode.appendChild(this.textNode));
                          }
                          if ((this.remove(), null != r)) {
                            var d = [r, s].map(function (t) {
                                return Math.max(
                                  0,
                                  Math.min(i.data.length, t - 1)
                                );
                              }),
                              u = (function (t, e) {
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
                                        (n.push(a.value), 2 !== n.length);
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
                                  })(t);
                                throw new TypeError(
                                  "Invalid attempt to destructure non-iterable instance"
                                );
                              })(d);
                            return (
                              (r = u[0]),
                              (s = u[1]),
                              {
                                startNode: i,
                                startOffset: r,
                                endNode: i,
                                endOffset: s,
                              }
                            );
                          }
                        }
                      },
                    },
                    {
                      key: "update",
                      value: function (t, e) {
                        var n = this;
                        if (
                          t.some(function (t) {
                            return (
                              "characterData" === t.type &&
                              t.target === n.textNode
                            );
                          })
                        ) {
                          var i = this.restore();
                          i && (e.range = i);
                        }
                      },
                    },
                    {
                      key: "value",
                      value: function () {
                        return "";
                      },
                    },
                  ]),
                  e
                );
              })(o.default.Embed);
              (l.blotName = "cursor"),
                (l.className = "ql-cursor"),
                (l.tagName = "span"),
                (l.CONTENTS = "\ufeff"),
                (e.default = l);
            },
            function (t, e, n) {
              "use strict";
              Object.defineProperty(e, "__esModule", { value: !0 });
              var i = a(n(0)),
                r = n(4),
                o = a(r);
              function a(t) {
                return t && t.__esModule ? t : { default: t };
              }
              function s(t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              }
              function l(t, e) {
                if (!t)
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                return !e || ("object" != typeof e && "function" != typeof e)
                  ? t
                  : e;
              }
              var c = (function (t) {
                function e() {
                  return (
                    s(this, e),
                    l(
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
              })(i.default.Container);
              (c.allowedChildren = [o.default, r.BlockEmbed, c]),
                (e.default = c);
            },
            function (t, e, n) {
              "use strict";
              Object.defineProperty(e, "__esModule", { value: !0 }),
                (e.ColorStyle = e.ColorClass = e.ColorAttributor = void 0);
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
                })(),
                o = (i = n(0)) && i.__esModule ? i : { default: i };
              function a(t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              }
              function s(t, e) {
                if (!t)
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                return !e || ("object" != typeof e && "function" != typeof e)
                  ? t
                  : e;
              }
              var l = (function (t) {
                  function e() {
                    return (
                      a(this, e),
                      s(
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
                    r(e, [
                      {
                        key: "value",
                        value: function (t) {
                          var n = (function t(e, n, i) {
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
                            "value",
                            this
                          ).call(this, t);
                          return n.startsWith("rgb(")
                            ? "#" +
                                (n = n
                                  .replace(/^[^\d]+/, "")
                                  .replace(/[^\d]+$/, ""))
                                  .split(",")
                                  .map(function (t) {
                                    return (
                                      "00" + parseInt(t).toString(16)
                                    ).slice(-2);
                                  })
                                  .join("")
                            : n;
                        },
                      },
                    ]),
                    e
                  );
                })(o.default.Attributor.Style),
                c = new o.default.Attributor.Class("color", "ql-color", {
                  scope: o.default.Scope.INLINE,
                }),
                d = new l("color", "color", { scope: o.default.Scope.INLINE });
              (e.ColorAttributor = l), (e.ColorClass = c), (e.ColorStyle = d);
            },
            function (t, e, n) {
              "use strict";
              Object.defineProperty(e, "__esModule", { value: !0 }),
                (e.sanitize = e.default = void 0);
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
                };
              function a(t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              }
              function s(t, e) {
                if (!t)
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                return !e || ("object" != typeof e && "function" != typeof e)
                  ? t
                  : e;
              }
              var l = (function (t) {
                function e() {
                  return (
                    a(this, e),
                    s(
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
                        key: "format",
                        value: function (t, n) {
                          if (t !== this.statics.blotName || !n)
                            return o(
                              e.prototype.__proto__ ||
                                Object.getPrototypeOf(e.prototype),
                              "format",
                              this
                            ).call(this, t, n);
                          (n = this.constructor.sanitize(n)),
                            this.domNode.setAttribute("href", n);
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
                          return (
                            (t = this.sanitize(t)),
                            n.setAttribute("href", t),
                            n.setAttribute("rel", "noopener noreferrer"),
                            n.setAttribute("target", "_blank"),
                            n
                          );
                        },
                      },
                      {
                        key: "formats",
                        value: function (t) {
                          return t.getAttribute("href");
                        },
                      },
                      {
                        key: "sanitize",
                        value: function (t) {
                          return c(t, this.PROTOCOL_WHITELIST)
                            ? t
                            : this.SANITIZED_URL;
                        },
                      },
                    ]
                  ),
                  e
                );
              })(((i = n(6)) && i.__esModule ? i : { default: i }).default);
              function c(t, e) {
                var n = document.createElement("a");
                n.href = t;
                var i = n.href.slice(0, n.href.indexOf(":"));
                return e.indexOf(i) > -1;
              }
              (l.blotName = "link"),
                (l.tagName = "A"),
                (l.SANITIZED_URL = "about:blank"),
                (l.PROTOCOL_WHITELIST = ["http", "https", "mailto", "tel"]),
                (e.default = l),
                (e.sanitize = c);
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
                o = s(n(23)),
                a = s(n(107));
              function s(t) {
                return t && t.__esModule ? t : { default: t };
              }
              var l = 0;
              function c(t, e) {
                t.setAttribute(e, !("true" === t.getAttribute(e)));
              }
              var d = (function () {
                function t(e) {
                  var n = this;
                  !(function (t, e) {
                    if (!(t instanceof e))
                      throw new TypeError("Cannot call a class as a function");
                  })(this, t),
                    (this.select = e),
                    (this.container = document.createElement("span")),
                    this.buildPicker(),
                    (this.select.style.display = "none"),
                    this.select.parentNode.insertBefore(
                      this.container,
                      this.select
                    ),
                    this.label.addEventListener("mousedown", function () {
                      n.togglePicker();
                    }),
                    this.label.addEventListener("keydown", function (t) {
                      switch (t.keyCode) {
                        case o.default.keys.ENTER:
                          n.togglePicker();
                          break;
                        case o.default.keys.ESCAPE:
                          n.escape(), t.preventDefault();
                      }
                    }),
                    this.select.addEventListener(
                      "change",
                      this.update.bind(this)
                    );
                }
                return (
                  r(t, [
                    {
                      key: "togglePicker",
                      value: function () {
                        this.container.classList.toggle("ql-expanded"),
                          c(this.label, "aria-expanded"),
                          c(this.options, "aria-hidden");
                      },
                    },
                    {
                      key: "buildItem",
                      value: function (t) {
                        var e = this,
                          n = document.createElement("span");
                        return (
                          (n.tabIndex = "0"),
                          n.setAttribute("role", "button"),
                          n.classList.add("ql-picker-item"),
                          t.hasAttribute("value") &&
                            n.setAttribute(
                              "data-value",
                              t.getAttribute("value")
                            ),
                          t.textContent &&
                            n.setAttribute("data-label", t.textContent),
                          n.addEventListener("click", function () {
                            e.selectItem(n, !0);
                          }),
                          n.addEventListener("keydown", function (t) {
                            switch (t.keyCode) {
                              case o.default.keys.ENTER:
                                e.selectItem(n, !0), t.preventDefault();
                                break;
                              case o.default.keys.ESCAPE:
                                e.escape(), t.preventDefault();
                            }
                          }),
                          n
                        );
                      },
                    },
                    {
                      key: "buildLabel",
                      value: function () {
                        var t = document.createElement("span");
                        return (
                          t.classList.add("ql-picker-label"),
                          (t.innerHTML = a.default),
                          (t.tabIndex = "0"),
                          t.setAttribute("role", "button"),
                          t.setAttribute("aria-expanded", "false"),
                          this.container.appendChild(t),
                          t
                        );
                      },
                    },
                    {
                      key: "buildOptions",
                      value: function () {
                        var t = this,
                          e = document.createElement("span");
                        e.classList.add("ql-picker-options"),
                          e.setAttribute("aria-hidden", "true"),
                          (e.tabIndex = "-1"),
                          (e.id = "ql-picker-options-" + l),
                          (l += 1),
                          this.label.setAttribute("aria-controls", e.id),
                          (this.options = e),
                          [].slice
                            .call(this.select.options)
                            .forEach(function (n) {
                              var i = t.buildItem(n);
                              e.appendChild(i),
                                !0 === n.selected && t.selectItem(i);
                            }),
                          this.container.appendChild(e);
                      },
                    },
                    {
                      key: "buildPicker",
                      value: function () {
                        var t = this;
                        [].slice
                          .call(this.select.attributes)
                          .forEach(function (e) {
                            t.container.setAttribute(e.name, e.value);
                          }),
                          this.container.classList.add("ql-picker"),
                          (this.label = this.buildLabel()),
                          this.buildOptions();
                      },
                    },
                    {
                      key: "escape",
                      value: function () {
                        var t = this;
                        this.close(),
                          setTimeout(function () {
                            return t.label.focus();
                          }, 1);
                      },
                    },
                    {
                      key: "close",
                      value: function () {
                        this.container.classList.remove("ql-expanded"),
                          this.label.setAttribute("aria-expanded", "false"),
                          this.options.setAttribute("aria-hidden", "true");
                      },
                    },
                    {
                      key: "selectItem",
                      value: function (t) {
                        var e =
                            arguments.length > 1 &&
                            void 0 !== arguments[1] &&
                            arguments[1],
                          n = this.container.querySelector(".ql-selected");
                        if (
                          t !== n &&
                          (null != n && n.classList.remove("ql-selected"),
                          null != t &&
                            (t.classList.add("ql-selected"),
                            (this.select.selectedIndex = [].indexOf.call(
                              t.parentNode.children,
                              t
                            )),
                            t.hasAttribute("data-value")
                              ? this.label.setAttribute(
                                  "data-value",
                                  t.getAttribute("data-value")
                                )
                              : this.label.removeAttribute("data-value"),
                            t.hasAttribute("data-label")
                              ? this.label.setAttribute(
                                  "data-label",
                                  t.getAttribute("data-label")
                                )
                              : this.label.removeAttribute("data-label"),
                            e))
                        ) {
                          if ("function" == typeof Event)
                            this.select.dispatchEvent(new Event("change"));
                          else if (
                            "object" ===
                            ("undefined" == typeof Event
                              ? "undefined"
                              : i(Event))
                          ) {
                            var r = document.createEvent("Event");
                            r.initEvent("change", !0, !0),
                              this.select.dispatchEvent(r);
                          }
                          this.close();
                        }
                      },
                    },
                    {
                      key: "update",
                      value: function () {
                        var t = void 0;
                        if (this.select.selectedIndex > -1) {
                          var e =
                            this.container.querySelector(".ql-picker-options")
                              .children[this.select.selectedIndex];
                          (t = this.select.options[this.select.selectedIndex]),
                            this.selectItem(e);
                        } else this.selectItem(null);
                        var n =
                          null != t &&
                          t !== this.select.querySelector("option[selected]");
                        this.label.classList.toggle("ql-active", n);
                      },
                    },
                  ]),
                  t
                );
              })();
              e.default = d;
            },
            function (t, e, n) {
              "use strict";
              Object.defineProperty(e, "__esModule", { value: !0 });
              var i = g(n(0)),
                r = g(n(5)),
                o = n(4),
                a = g(o),
                s = g(n(16)),
                l = g(n(25)),
                c = g(n(24)),
                d = g(n(35)),
                u = g(n(6)),
                p = g(n(22)),
                h = g(n(7)),
                f = g(n(55)),
                b = g(n(42)),
                m = g(n(23));
              function g(t) {
                return t && t.__esModule ? t : { default: t };
              }
              r.default.register({
                "blots/block": a.default,
                "blots/block/embed": o.BlockEmbed,
                "blots/break": s.default,
                "blots/container": l.default,
                "blots/cursor": c.default,
                "blots/embed": d.default,
                "blots/inline": u.default,
                "blots/scroll": p.default,
                "blots/text": h.default,
                "modules/clipboard": f.default,
                "modules/history": b.default,
                "modules/keyboard": m.default,
              }),
                i.default.register(
                  a.default,
                  s.default,
                  c.default,
                  u.default,
                  p.default,
                  h.default
                ),
                (e.default = r.default);
            },
            function (t, e, n) {
              "use strict";
              Object.defineProperty(e, "__esModule", { value: !0 });
              var i = n(1),
                r = (function () {
                  function t(t) {
                    (this.domNode = t),
                      (this.domNode[i.DATA_KEY] = { blot: this });
                  }
                  return (
                    Object.defineProperty(t.prototype, "statics", {
                      get: function () {
                        return this.constructor;
                      },
                      enumerable: !0,
                      configurable: !0,
                    }),
                    (t.create = function (t) {
                      if (null == this.tagName)
                        throw new i.ParchmentError(
                          "Blot definition missing tagName"
                        );
                      var e;
                      return (
                        Array.isArray(this.tagName)
                          ? ("string" == typeof t &&
                              ((t = t.toUpperCase()),
                              parseInt(t).toString() === t &&
                                (t = parseInt(t))),
                            (e =
                              "number" == typeof t
                                ? document.createElement(this.tagName[t - 1])
                                : this.tagName.indexOf(t) > -1
                                ? document.createElement(t)
                                : document.createElement(this.tagName[0])))
                          : (e = document.createElement(this.tagName)),
                        this.className && e.classList.add(this.className),
                        e
                      );
                    }),
                    (t.prototype.attach = function () {
                      null != this.parent && (this.scroll = this.parent.scroll);
                    }),
                    (t.prototype.clone = function () {
                      var t = this.domNode.cloneNode(!1);
                      return i.create(t);
                    }),
                    (t.prototype.detach = function () {
                      null != this.parent && this.parent.removeChild(this),
                        delete this.domNode[i.DATA_KEY];
                    }),
                    (t.prototype.deleteAt = function (t, e) {
                      this.isolate(t, e).remove();
                    }),
                    (t.prototype.formatAt = function (t, e, n, r) {
                      var o = this.isolate(t, e);
                      if (null != i.query(n, i.Scope.BLOT) && r) o.wrap(n, r);
                      else if (null != i.query(n, i.Scope.ATTRIBUTE)) {
                        var a = i.create(this.statics.scope);
                        o.wrap(a), a.format(n, r);
                      }
                    }),
                    (t.prototype.insertAt = function (t, e, n) {
                      var r = null == n ? i.create("text", e) : i.create(e, n),
                        o = this.split(t);
                      this.parent.insertBefore(r, o);
                    }),
                    (t.prototype.insertInto = function (t, e) {
                      void 0 === e && (e = null),
                        null != this.parent &&
                          this.parent.children.remove(this);
                      var n = null;
                      t.children.insertBefore(this, e),
                        null != e && (n = e.domNode),
                        (this.domNode.parentNode == t.domNode &&
                          this.domNode.nextSibling == n) ||
                          t.domNode.insertBefore(this.domNode, n),
                        (this.parent = t),
                        this.attach();
                    }),
                    (t.prototype.isolate = function (t, e) {
                      var n = this.split(t);
                      return n.split(e), n;
                    }),
                    (t.prototype.length = function () {
                      return 1;
                    }),
                    (t.prototype.offset = function (t) {
                      return (
                        void 0 === t && (t = this.parent),
                        null == this.parent || this == t
                          ? 0
                          : this.parent.children.offset(this) +
                            this.parent.offset(t)
                      );
                    }),
                    (t.prototype.optimize = function (t) {
                      null != this.domNode[i.DATA_KEY] &&
                        delete this.domNode[i.DATA_KEY].mutations;
                    }),
                    (t.prototype.remove = function () {
                      null != this.domNode.parentNode &&
                        this.domNode.parentNode.removeChild(this.domNode),
                        this.detach();
                    }),
                    (t.prototype.replace = function (t) {
                      null != t.parent &&
                        (t.parent.insertBefore(this, t.next), t.remove());
                    }),
                    (t.prototype.replaceWith = function (t, e) {
                      var n = "string" == typeof t ? i.create(t, e) : t;
                      return n.replace(this), n;
                    }),
                    (t.prototype.split = function (t, e) {
                      return 0 === t ? this : this.next;
                    }),
                    (t.prototype.update = function (t, e) {}),
                    (t.prototype.wrap = function (t, e) {
                      var n = "string" == typeof t ? i.create(t, e) : t;
                      return (
                        null != this.parent &&
                          this.parent.insertBefore(n, this.next),
                        n.appendChild(this),
                        n
                      );
                    }),
                    (t.blotName = "abstract"),
                    t
                  );
                })();
              e.default = r;
            },
            function (t, e, n) {
              "use strict";
              Object.defineProperty(e, "__esModule", { value: !0 });
              var i = n(12),
                r = n(32),
                o = n(33),
                a = n(1),
                s = (function () {
                  function t(t) {
                    (this.attributes = {}), (this.domNode = t), this.build();
                  }
                  return (
                    (t.prototype.attribute = function (t, e) {
                      e
                        ? t.add(this.domNode, e) &&
                          (null != t.value(this.domNode)
                            ? (this.attributes[t.attrName] = t)
                            : delete this.attributes[t.attrName])
                        : (t.remove(this.domNode),
                          delete this.attributes[t.attrName]);
                    }),
                    (t.prototype.build = function () {
                      var t = this;
                      this.attributes = {};
                      var e = i.default.keys(this.domNode),
                        n = r.default.keys(this.domNode),
                        s = o.default.keys(this.domNode);
                      e.concat(n)
                        .concat(s)
                        .forEach(function (e) {
                          var n = a.query(e, a.Scope.ATTRIBUTE);
                          n instanceof i.default &&
                            (t.attributes[n.attrName] = n);
                        });
                    }),
                    (t.prototype.copy = function (t) {
                      var e = this;
                      Object.keys(this.attributes).forEach(function (n) {
                        var i = e.attributes[n].value(e.domNode);
                        t.format(n, i);
                      });
                    }),
                    (t.prototype.move = function (t) {
                      var e = this;
                      this.copy(t),
                        Object.keys(this.attributes).forEach(function (t) {
                          e.attributes[t].remove(e.domNode);
                        }),
                        (this.attributes = {});
                    }),
                    (t.prototype.values = function () {
                      var t = this;
                      return Object.keys(this.attributes).reduce(function (
                        e,
                        n
                      ) {
                        return (e[n] = t.attributes[n].value(t.domNode)), e;
                      },
                      {});
                    }),
                    t
                  );
                })();
              e.default = s;
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
              function o(t, e) {
                return (t.getAttribute("class") || "")
                  .split(/\s+/)
                  .filter(function (t) {
                    return 0 === t.indexOf(e + "-");
                  });
              }
              Object.defineProperty(e, "__esModule", { value: !0 });
              var a = (function (t) {
                function e() {
                  return (null !== t && t.apply(this, arguments)) || this;
                }
                return (
                  r(e, t),
                  (e.keys = function (t) {
                    return (t.getAttribute("class") || "")
                      .split(/\s+/)
                      .map(function (t) {
                        return t.split("-").slice(0, -1).join("-");
                      });
                  }),
                  (e.prototype.add = function (t, e) {
                    return (
                      !!this.canAdd(t, e) &&
                      (this.remove(t),
                      t.classList.add(this.keyName + "-" + e),
                      !0)
                    );
                  }),
                  (e.prototype.remove = function (t) {
                    o(t, this.keyName).forEach(function (e) {
                      t.classList.remove(e);
                    }),
                      0 === t.classList.length && t.removeAttribute("class");
                  }),
                  (e.prototype.value = function (t) {
                    var e = (o(t, this.keyName)[0] || "").slice(
                      this.keyName.length + 1
                    );
                    return this.canAdd(t, e) ? e : "";
                  }),
                  e
                );
              })(n(12).default);
              e.default = a;
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
              function o(t) {
                var e = t.split("-"),
                  n = e
                    .slice(1)
                    .map(function (t) {
                      return t[0].toUpperCase() + t.slice(1);
                    })
                    .join("");
                return e[0] + n;
              }
              Object.defineProperty(e, "__esModule", { value: !0 });
              var a = (function (t) {
                function e() {
                  return (null !== t && t.apply(this, arguments)) || this;
                }
                return (
                  r(e, t),
                  (e.keys = function (t) {
                    return (t.getAttribute("style") || "")
                      .split(";")
                      .map(function (t) {
                        return t.split(":")[0].trim();
                      });
                  }),
                  (e.prototype.add = function (t, e) {
                    return (
                      !!this.canAdd(t, e) &&
                      ((t.style[o(this.keyName)] = e), !0)
                    );
                  }),
                  (e.prototype.remove = function (t) {
                    (t.style[o(this.keyName)] = ""),
                      t.getAttribute("style") || t.removeAttribute("style");
                  }),
                  (e.prototype.value = function (t) {
                    var e = t.style[o(this.keyName)];
                    return this.canAdd(t, e) ? e : "";
                  }),
                  e
                );
              })(n(12).default);
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
                r = (function () {
                  function t(e, n) {
                    !(function (t, e) {
                      if (!(t instanceof e))
                        throw new TypeError(
                          "Cannot call a class as a function"
                        );
                    })(this, t),
                      (this.quill = e),
                      (this.options = n),
                      (this.modules = {});
                  }
                  return (
                    i(t, [
                      {
                        key: "init",
                        value: function () {
                          var t = this;
                          Object.keys(this.options.modules).forEach(function (
                            e
                          ) {
                            null == t.modules[e] && t.addModule(e);
                          });
                        },
                      },
                      {
                        key: "addModule",
                        value: function (t) {
                          var e = this.quill.constructor.import("modules/" + t);
                          return (
                            (this.modules[t] = new e(
                              this.quill,
                              this.options.modules[t] || {}
                            )),
                            this.modules[t]
                          );
                        },
                      },
                    ]),
                    t
                  );
                })();
              (r.DEFAULTS = { modules: {} }),
                (r.themes = { default: r }),
                (e.default = r);
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
                r = a(n(0)),
                o = a(n(7));
              function a(t) {
                return t && t.__esModule ? t : { default: t };
              }
              var s = (function (t) {
                function e(t) {
                  !(function (t, e) {
                    if (!(t instanceof e))
                      throw new TypeError("Cannot call a class as a function");
                  })(this, e);
                  var n = (function (t, e) {
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
                    (n.contentNode = document.createElement("span")),
                    n.contentNode.setAttribute("contenteditable", !1),
                    [].slice.call(n.domNode.childNodes).forEach(function (t) {
                      n.contentNode.appendChild(t);
                    }),
                    (n.leftGuard = document.createTextNode("\ufeff")),
                    (n.rightGuard = document.createTextNode("\ufeff")),
                    n.domNode.appendChild(n.leftGuard),
                    n.domNode.appendChild(n.contentNode),
                    n.domNode.appendChild(n.rightGuard),
                    n
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
                  i(e, [
                    {
                      key: "index",
                      value: function (t, n) {
                        return t === this.leftGuard
                          ? 0
                          : t === this.rightGuard
                          ? 1
                          : (function t(e, n, i) {
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
                              "index",
                              this
                            ).call(this, t, n);
                      },
                    },
                    {
                      key: "restore",
                      value: function (t) {
                        var e = void 0,
                          n = void 0,
                          i = t.data.split("\ufeff").join("");
                        if (t === this.leftGuard)
                          if (this.prev instanceof o.default) {
                            var a = this.prev.length();
                            this.prev.insertAt(a, i),
                              (e = {
                                startNode: this.prev.domNode,
                                startOffset: a + i.length,
                              });
                          } else
                            (n = document.createTextNode(i)),
                              this.parent.insertBefore(
                                r.default.create(n),
                                this
                              ),
                              (e = { startNode: n, startOffset: i.length });
                        else
                          t === this.rightGuard &&
                            (this.next instanceof o.default
                              ? (this.next.insertAt(0, i),
                                (e = {
                                  startNode: this.next.domNode,
                                  startOffset: i.length,
                                }))
                              : ((n = document.createTextNode(i)),
                                this.parent.insertBefore(
                                  r.default.create(n),
                                  this.next
                                ),
                                (e = { startNode: n, startOffset: i.length })));
                        return (t.data = "\ufeff"), e;
                      },
                    },
                    {
                      key: "update",
                      value: function (t, e) {
                        var n = this;
                        t.forEach(function (t) {
                          if (
                            "characterData" === t.type &&
                            (t.target === n.leftGuard ||
                              t.target === n.rightGuard)
                          ) {
                            var i = n.restore(t.target);
                            i && (e.range = i);
                          }
                        });
                      },
                    },
                  ]),
                  e
                );
              })(r.default.Embed);
              e.default = s;
            },
            function (t, e, n) {
              "use strict";
              Object.defineProperty(e, "__esModule", { value: !0 }),
                (e.AlignStyle = e.AlignClass = e.AlignAttribute = void 0);
              var i,
                r = (i = n(0)) && i.__esModule ? i : { default: i },
                o = {
                  scope: r.default.Scope.BLOCK,
                  whitelist: ["right", "center", "justify"],
                },
                a = new r.default.Attributor.Attribute("align", "align", o),
                s = new r.default.Attributor.Class("align", "ql-align", o),
                l = new r.default.Attributor.Style("align", "text-align", o);
              (e.AlignAttribute = a), (e.AlignClass = s), (e.AlignStyle = l);
            },
            function (t, e, n) {
              "use strict";
              Object.defineProperty(e, "__esModule", { value: !0 }),
                (e.BackgroundStyle = e.BackgroundClass = void 0);
              var i,
                r = (i = n(0)) && i.__esModule ? i : { default: i },
                o = n(26),
                a = new r.default.Attributor.Class("background", "ql-bg", {
                  scope: r.default.Scope.INLINE,
                }),
                s = new o.ColorAttributor("background", "background-color", {
                  scope: r.default.Scope.INLINE,
                });
              (e.BackgroundClass = a), (e.BackgroundStyle = s);
            },
            function (t, e, n) {
              "use strict";
              Object.defineProperty(e, "__esModule", { value: !0 }),
                (e.DirectionStyle =
                  e.DirectionClass =
                  e.DirectionAttribute =
                    void 0);
              var i,
                r = (i = n(0)) && i.__esModule ? i : { default: i },
                o = { scope: r.default.Scope.BLOCK, whitelist: ["rtl"] },
                a = new r.default.Attributor.Attribute("direction", "dir", o),
                s = new r.default.Attributor.Class(
                  "direction",
                  "ql-direction",
                  o
                ),
                l = new r.default.Attributor.Style("direction", "direction", o);
              (e.DirectionAttribute = a),
                (e.DirectionClass = s),
                (e.DirectionStyle = l);
            },
            function (t, e, n) {
              "use strict";
              Object.defineProperty(e, "__esModule", { value: !0 }),
                (e.FontClass = e.FontStyle = void 0);
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
                })(),
                o = (i = n(0)) && i.__esModule ? i : { default: i };
              function a(t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              }
              function s(t, e) {
                if (!t)
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                return !e || ("object" != typeof e && "function" != typeof e)
                  ? t
                  : e;
              }
              var l = {
                  scope: o.default.Scope.INLINE,
                  whitelist: ["serif", "monospace"],
                },
                c = new o.default.Attributor.Class("font", "ql-font", l),
                d = new ((function (t) {
                  function e() {
                    return (
                      a(this, e),
                      s(
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
                    r(e, [
                      {
                        key: "value",
                        value: function (t) {
                          return (function t(e, n, i) {
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
                            "value",
                            this
                          )
                            .call(this, t)
                            .replace(/["']/g, "");
                        },
                      },
                    ]),
                    e
                  );
                })(o.default.Attributor.Style))("font", "font-family", l);
              (e.FontStyle = d), (e.FontClass = c);
            },
            function (t, e, n) {
              "use strict";
              Object.defineProperty(e, "__esModule", { value: !0 }),
                (e.SizeStyle = e.SizeClass = void 0);
              var i,
                r = (i = n(0)) && i.__esModule ? i : { default: i },
                o = new r.default.Attributor.Class("size", "ql-size", {
                  scope: r.default.Scope.INLINE,
                  whitelist: ["small", "large", "huge"],
                }),
                a = new r.default.Attributor.Style("size", "font-size", {
                  scope: r.default.Scope.INLINE,
                  whitelist: ["10px", "18px", "32px"],
                });
              (e.SizeClass = o), (e.SizeStyle = a);
            },
            function (t, e, n) {
              "use strict";
              t.exports = {
                align: {
                  "": n(76),
                  center: n(77),
                  right: n(78),
                  justify: n(79),
                },
                background: n(80),
                blockquote: n(81),
                bold: n(82),
                clean: n(83),
                code: n(58),
                "code-block": n(58),
                color: n(84),
                direction: { "": n(85), rtl: n(86) },
                float: {
                  center: n(87),
                  full: n(88),
                  left: n(89),
                  right: n(90),
                },
                formula: n(91),
                header: { 1: n(92), 2: n(93) },
                italic: n(94),
                image: n(95),
                indent: { "+1": n(96), "-1": n(97) },
                link: n(98),
                list: { ordered: n(99), bullet: n(100), check: n(101) },
                script: { sub: n(102), super: n(103) },
                strike: n(104),
                underline: n(105),
                video: n(106),
              };
            },
            function (t, e, n) {
              "use strict";
              Object.defineProperty(e, "__esModule", { value: !0 }),
                (e.getLastChangeIndex = e.default = void 0);
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
                r = a(n(0)),
                o = a(n(5));
              function a(t) {
                return t && t.__esModule ? t : { default: t };
              }
              var s = (function (t) {
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
                    (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n)
                  );
                  return (
                    (i.lastRecorded = 0),
                    (i.ignoreChange = !1),
                    i.clear(),
                    i.quill.on(
                      o.default.events.EDITOR_CHANGE,
                      function (t, e, n, r) {
                        t !== o.default.events.TEXT_CHANGE ||
                          i.ignoreChange ||
                          (i.options.userOnly && r !== o.default.sources.USER
                            ? i.transform(e)
                            : i.record(e, n));
                      }
                    ),
                    i.quill.keyboard.addBinding(
                      { key: "Z", shortKey: !0 },
                      i.undo.bind(i)
                    ),
                    i.quill.keyboard.addBinding(
                      { key: "Z", shortKey: !0, shiftKey: !0 },
                      i.redo.bind(i)
                    ),
                    /Win/i.test(navigator.platform) &&
                      i.quill.keyboard.addBinding(
                        { key: "Y", shortKey: !0 },
                        i.redo.bind(i)
                      ),
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
                  i(e, [
                    {
                      key: "change",
                      value: function (t, e) {
                        if (0 !== this.stack[t].length) {
                          var n = this.stack[t].pop();
                          this.stack[e].push(n),
                            (this.lastRecorded = 0),
                            (this.ignoreChange = !0),
                            this.quill.updateContents(
                              n[t],
                              o.default.sources.USER
                            ),
                            (this.ignoreChange = !1);
                          var i = l(n[t]);
                          this.quill.setSelection(i);
                        }
                      },
                    },
                    {
                      key: "clear",
                      value: function () {
                        this.stack = { undo: [], redo: [] };
                      },
                    },
                    {
                      key: "cutoff",
                      value: function () {
                        this.lastRecorded = 0;
                      },
                    },
                    {
                      key: "record",
                      value: function (t, e) {
                        if (0 !== t.ops.length) {
                          this.stack.redo = [];
                          var n = this.quill.getContents().diff(e),
                            i = Date.now();
                          if (
                            this.lastRecorded + this.options.delay > i &&
                            this.stack.undo.length > 0
                          ) {
                            var r = this.stack.undo.pop();
                            (n = n.compose(r.undo)), (t = r.redo.compose(t));
                          } else this.lastRecorded = i;
                          this.stack.undo.push({ redo: t, undo: n }),
                            this.stack.undo.length > this.options.maxStack &&
                              this.stack.undo.shift();
                        }
                      },
                    },
                    {
                      key: "redo",
                      value: function () {
                        this.change("redo", "undo");
                      },
                    },
                    {
                      key: "transform",
                      value: function (t) {
                        this.stack.undo.forEach(function (e) {
                          (e.undo = t.transform(e.undo, !0)),
                            (e.redo = t.transform(e.redo, !0));
                        }),
                          this.stack.redo.forEach(function (e) {
                            (e.undo = t.transform(e.undo, !0)),
                              (e.redo = t.transform(e.redo, !0));
                          });
                      },
                    },
                    {
                      key: "undo",
                      value: function () {
                        this.change("undo", "redo");
                      },
                    },
                  ]),
                  e
                );
              })(a(n(9)).default);
              function l(t) {
                var e = t.reduce(function (t, e) {
                    return (t += e.delete || 0);
                  }, 0),
                  n = t.length() - e;
                return (
                  (function (t) {
                    var e = t.ops[t.ops.length - 1];
                    return (
                      null != e &&
                      (null != e.insert
                        ? "string" == typeof e.insert && e.insert.endsWith("\n")
                        : null != e.attributes &&
                          Object.keys(e.attributes).some(function (t) {
                            return (
                              null != r.default.query(t, r.default.Scope.BLOCK)
                            );
                          }))
                    );
                  })(t) && (n -= 1),
                  n
                );
              }
              (s.DEFAULTS = { delay: 1e3, maxStack: 100, userOnly: !1 }),
                (e.default = s),
                (e.getLastChangeIndex = l);
            },
            function (t, e, n) {
              "use strict";
              Object.defineProperty(e, "__esModule", { value: !0 }),
                (e.default = e.BaseTooltip = void 0);
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
                r = h(n(3)),
                o = h(n(2)),
                a = h(n(8)),
                s = h(n(23)),
                l = h(n(34)),
                c = h(n(59)),
                d = h(n(60)),
                u = h(n(28)),
                p = h(n(61));
              function h(t) {
                return t && t.__esModule ? t : { default: t };
              }
              function f(t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              }
              function b(t, e) {
                if (!t)
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                return !e || ("object" != typeof e && "function" != typeof e)
                  ? t
                  : e;
              }
              function m(t, e) {
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
              var g = [!1, "center", "right", "justify"],
                v = [
                  "#000000",
                  "#e60000",
                  "#ff9900",
                  "#ffff00",
                  "#008a00",
                  "#0066cc",
                  "#9933ff",
                  "#ffffff",
                  "#facccc",
                  "#ffebcc",
                  "#ffffcc",
                  "#cce8cc",
                  "#cce0f5",
                  "#ebd6ff",
                  "#bbbbbb",
                  "#f06666",
                  "#ffc266",
                  "#ffff66",
                  "#66b966",
                  "#66a3e0",
                  "#c285ff",
                  "#888888",
                  "#a10000",
                  "#b26b00",
                  "#b2b200",
                  "#006100",
                  "#0047b2",
                  "#6b24b2",
                  "#444444",
                  "#5c0000",
                  "#663d00",
                  "#666600",
                  "#003700",
                  "#002966",
                  "#3d1466",
                ],
                _ = [!1, "serif", "monospace"],
                y = ["1", "2", "3", !1],
                M = ["small", !1, "large", "huge"],
                O = (function (t) {
                  function e(t, n) {
                    f(this, e);
                    var i = b(
                      this,
                      (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n)
                    );
                    return (
                      t.emitter.listenDOM(
                        "click",
                        document.body,
                        function e(n) {
                          if (!document.body.contains(t.root))
                            return document.body.removeEventListener(
                              "click",
                              e
                            );
                          null == i.tooltip ||
                            i.tooltip.root.contains(n.target) ||
                            document.activeElement === i.tooltip.textbox ||
                            i.quill.hasFocus() ||
                            i.tooltip.hide(),
                            null != i.pickers &&
                              i.pickers.forEach(function (t) {
                                t.container.contains(n.target) || t.close();
                              });
                        }
                      ),
                      i
                    );
                  }
                  return (
                    m(e, t),
                    i(e, [
                      {
                        key: "addModule",
                        value: function (t) {
                          var n = (function t(e, n, i) {
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
                            "addModule",
                            this
                          ).call(this, t);
                          return "toolbar" === t && this.extendToolbar(n), n;
                        },
                      },
                      {
                        key: "buildButtons",
                        value: function (t, e) {
                          t.forEach(function (t) {
                            (t.getAttribute("class") || "")
                              .split(/\s+/)
                              .forEach(function (n) {
                                if (
                                  n.startsWith("ql-") &&
                                  ((n = n.slice("ql-".length)), null != e[n])
                                )
                                  if ("direction" === n)
                                    t.innerHTML = e[n][""] + e[n].rtl;
                                  else if ("string" == typeof e[n])
                                    t.innerHTML = e[n];
                                  else {
                                    var i = t.value || "";
                                    null != i &&
                                      e[n][i] &&
                                      (t.innerHTML = e[n][i]);
                                  }
                              });
                          });
                        },
                      },
                      {
                        key: "buildPickers",
                        value: function (t, e) {
                          var n = this;
                          (this.pickers = t.map(function (t) {
                            if (t.classList.contains("ql-align"))
                              return (
                                null == t.querySelector("option") && A(t, g),
                                new d.default(t, e.align)
                              );
                            if (
                              t.classList.contains("ql-background") ||
                              t.classList.contains("ql-color")
                            ) {
                              var n = t.classList.contains("ql-background")
                                ? "background"
                                : "color";
                              return (
                                null == t.querySelector("option") &&
                                  A(
                                    t,
                                    v,
                                    "background" === n ? "#ffffff" : "#000000"
                                  ),
                                new c.default(t, e[n])
                              );
                            }
                            return (
                              null == t.querySelector("option") &&
                                (t.classList.contains("ql-font")
                                  ? A(t, _)
                                  : t.classList.contains("ql-header")
                                  ? A(t, y)
                                  : t.classList.contains("ql-size") && A(t, M)),
                              new u.default(t)
                            );
                          })),
                            this.quill.on(
                              a.default.events.EDITOR_CHANGE,
                              function () {
                                n.pickers.forEach(function (t) {
                                  t.update();
                                });
                              }
                            );
                        },
                      },
                    ]),
                    e
                  );
                })(l.default);
              O.DEFAULTS = (0, r.default)(!0, {}, l.default.DEFAULTS, {
                modules: {
                  toolbar: {
                    handlers: {
                      formula: function () {
                        this.quill.theme.tooltip.edit("formula");
                      },
                      image: function () {
                        var t = this,
                          e = this.container.querySelector(
                            "input.ql-image[type=file]"
                          );
                        null == e &&
                          ((e = document.createElement("input")).setAttribute(
                            "type",
                            "file"
                          ),
                          e.setAttribute(
                            "accept",
                            "image/png, image/gif, image/jpeg, image/bmp, image/x-icon"
                          ),
                          e.classList.add("ql-image"),
                          e.addEventListener("change", function () {
                            if (null != e.files && null != e.files[0]) {
                              var n = new FileReader();
                              (n.onload = function (n) {
                                var i = t.quill.getSelection(!0);
                                t.quill.updateContents(
                                  new o.default()
                                    .retain(i.index)
                                    .delete(i.length)
                                    .insert({ image: n.target.result }),
                                  a.default.sources.USER
                                ),
                                  t.quill.setSelection(
                                    i.index + 1,
                                    a.default.sources.SILENT
                                  ),
                                  (e.value = "");
                              }),
                                n.readAsDataURL(e.files[0]);
                            }
                          }),
                          this.container.appendChild(e)),
                          e.click();
                      },
                      video: function () {
                        this.quill.theme.tooltip.edit("video");
                      },
                    },
                  },
                },
              });
              var w = (function (t) {
                function e(t, n) {
                  f(this, e);
                  var i = b(
                    this,
                    (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n)
                  );
                  return (
                    (i.textbox = i.root.querySelector('input[type="text"]')),
                    i.listen(),
                    i
                  );
                }
                return (
                  m(e, t),
                  i(e, [
                    {
                      key: "listen",
                      value: function () {
                        var t = this;
                        this.textbox.addEventListener("keydown", function (e) {
                          s.default.match(e, "enter")
                            ? (t.save(), e.preventDefault())
                            : s.default.match(e, "escape") &&
                              (t.cancel(), e.preventDefault());
                        });
                      },
                    },
                    {
                      key: "cancel",
                      value: function () {
                        this.hide();
                      },
                    },
                    {
                      key: "edit",
                      value: function () {
                        var t =
                            arguments.length > 0 && void 0 !== arguments[0]
                              ? arguments[0]
                              : "link",
                          e =
                            arguments.length > 1 && void 0 !== arguments[1]
                              ? arguments[1]
                              : null;
                        this.root.classList.remove("ql-hidden"),
                          this.root.classList.add("ql-editing"),
                          null != e
                            ? (this.textbox.value = e)
                            : t !== this.root.getAttribute("data-mode") &&
                              (this.textbox.value = ""),
                          this.position(
                            this.quill.getBounds(
                              this.quill.selection.savedRange
                            )
                          ),
                          this.textbox.select(),
                          this.textbox.setAttribute(
                            "placeholder",
                            this.textbox.getAttribute("data-" + t) || ""
                          ),
                          this.root.setAttribute("data-mode", t);
                      },
                    },
                    {
                      key: "restoreFocus",
                      value: function () {
                        var t = this.quill.scrollingContainer.scrollTop;
                        this.quill.focus(),
                          (this.quill.scrollingContainer.scrollTop = t);
                      },
                    },
                    {
                      key: "save",
                      value: function () {
                        var t,
                          e,
                          n = this.textbox.value;
                        switch (this.root.getAttribute("data-mode")) {
                          case "link":
                            var i = this.quill.root.scrollTop;
                            this.linkRange
                              ? (this.quill.formatText(
                                  this.linkRange,
                                  "link",
                                  n,
                                  a.default.sources.USER
                                ),
                                delete this.linkRange)
                              : (this.restoreFocus(),
                                this.quill.format(
                                  "link",
                                  n,
                                  a.default.sources.USER
                                )),
                              (this.quill.root.scrollTop = i);
                            break;
                          case "video":
                            n = (e =
                              (t = n).match(
                                /^(?:(https?):\/\/)?(?:(?:www|m)\.)?youtube\.com\/watch.*v=([a-zA-Z0-9_-]+)/
                              ) ||
                              t.match(
                                /^(?:(https?):\/\/)?(?:(?:www|m)\.)?youtu\.be\/([a-zA-Z0-9_-]+)/
                              ))
                              ? (e[1] || "https") +
                                "://www.youtube.com/embed/" +
                                e[2] +
                                "?showinfo=0"
                              : (e = t.match(
                                  /^(?:(https?):\/\/)?(?:www\.)?vimeo\.com\/(\d+)/
                                ))
                              ? (e[1] || "https") +
                                "://player.vimeo.com/video/" +
                                e[2] +
                                "/"
                              : t;
                          case "formula":
                            if (!n) break;
                            var r = this.quill.getSelection(!0);
                            if (null != r) {
                              var o = r.index + r.length;
                              this.quill.insertEmbed(
                                o,
                                this.root.getAttribute("data-mode"),
                                n,
                                a.default.sources.USER
                              ),
                                "formula" ===
                                  this.root.getAttribute("data-mode") &&
                                  this.quill.insertText(
                                    o + 1,
                                    " ",
                                    a.default.sources.USER
                                  ),
                                this.quill.setSelection(
                                  o + 2,
                                  a.default.sources.USER
                                );
                            }
                        }
                        (this.textbox.value = ""), this.hide();
                      },
                    },
                  ]),
                  e
                );
              })(p.default);
              function A(t, e) {
                var n =
                  arguments.length > 2 &&
                  void 0 !== arguments[2] &&
                  arguments[2];
                e.forEach(function (e) {
                  var i = document.createElement("option");
                  e === n
                    ? i.setAttribute("selected", "selected")
                    : i.setAttribute("value", e),
                    t.appendChild(i);
                });
              }
              (e.BaseTooltip = w), (e.default = O);
            },
            function (t, e, n) {
              "use strict";
              Object.defineProperty(e, "__esModule", { value: !0 });
              var i = (function () {
                function t() {
                  (this.head = this.tail = null), (this.length = 0);
                }
                return (
                  (t.prototype.append = function () {
                    for (var t = [], e = 0; e < arguments.length; e++)
                      t[e] = arguments[e];
                    this.insertBefore(t[0], null),
                      t.length > 1 && this.append.apply(this, t.slice(1));
                  }),
                  (t.prototype.contains = function (t) {
                    for (var e, n = this.iterator(); (e = n()); )
                      if (e === t) return !0;
                    return !1;
                  }),
                  (t.prototype.insertBefore = function (t, e) {
                    t &&
                      ((t.next = e),
                      null != e
                        ? ((t.prev = e.prev),
                          null != e.prev && (e.prev.next = t),
                          (e.prev = t),
                          e === this.head && (this.head = t))
                        : null != this.tail
                        ? ((this.tail.next = t),
                          (t.prev = this.tail),
                          (this.tail = t))
                        : ((t.prev = null), (this.head = this.tail = t)),
                      (this.length += 1));
                  }),
                  (t.prototype.offset = function (t) {
                    for (var e = 0, n = this.head; null != n; ) {
                      if (n === t) return e;
                      (e += n.length()), (n = n.next);
                    }
                    return -1;
                  }),
                  (t.prototype.remove = function (t) {
                    this.contains(t) &&
                      (null != t.prev && (t.prev.next = t.next),
                      null != t.next && (t.next.prev = t.prev),
                      t === this.head && (this.head = t.next),
                      t === this.tail && (this.tail = t.prev),
                      (this.length -= 1));
                  }),
                  (t.prototype.iterator = function (t) {
                    return (
                      void 0 === t && (t = this.head),
                      function () {
                        var e = t;
                        return null != t && (t = t.next), e;
                      }
                    );
                  }),
                  (t.prototype.find = function (t, e) {
                    void 0 === e && (e = !1);
                    for (var n, i = this.iterator(); (n = i()); ) {
                      var r = n.length();
                      if (
                        t < r ||
                        (e &&
                          t === r &&
                          (null == n.next || 0 !== n.next.length()))
                      )
                        return [n, t];
                      t -= r;
                    }
                    return [null, 0];
                  }),
                  (t.prototype.forEach = function (t) {
                    for (var e, n = this.iterator(); (e = n()); ) t(e);
                  }),
                  (t.prototype.forEachAt = function (t, e, n) {
                    if (!(e <= 0))
                      for (
                        var i,
                          r = this.find(t),
                          o = r[0],
                          a = t - r[1],
                          s = this.iterator(o);
                        (i = s()) && a < t + e;

                      ) {
                        var l = i.length();
                        t > a
                          ? n(i, t - a, Math.min(e, a + l - t))
                          : n(i, 0, Math.min(l, t + e - a)),
                          (a += l);
                      }
                  }),
                  (t.prototype.map = function (t) {
                    return this.reduce(function (e, n) {
                      return e.push(t(n)), e;
                    }, []);
                  }),
                  (t.prototype.reduce = function (t, e) {
                    for (var n, i = this.iterator(); (n = i()); ) e = t(e, n);
                    return e;
                  }),
                  t
                );
              })();
              e.default = i;
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
              var o = n(17),
                a = n(1),
                s = {
                  attributes: !0,
                  characterData: !0,
                  characterDataOldValue: !0,
                  childList: !0,
                  subtree: !0,
                },
                l = (function (t) {
                  function e(e) {
                    var n = t.call(this, e) || this;
                    return (
                      (n.scroll = n),
                      (n.observer = new MutationObserver(function (t) {
                        n.update(t);
                      })),
                      n.observer.observe(n.domNode, s),
                      n.attach(),
                      n
                    );
                  }
                  return (
                    r(e, t),
                    (e.prototype.detach = function () {
                      t.prototype.detach.call(this), this.observer.disconnect();
                    }),
                    (e.prototype.deleteAt = function (e, n) {
                      this.update(),
                        0 === e && n === this.length()
                          ? this.children.forEach(function (t) {
                              t.remove();
                            })
                          : t.prototype.deleteAt.call(this, e, n);
                    }),
                    (e.prototype.formatAt = function (e, n, i, r) {
                      this.update(),
                        t.prototype.formatAt.call(this, e, n, i, r);
                    }),
                    (e.prototype.insertAt = function (e, n, i) {
                      this.update(), t.prototype.insertAt.call(this, e, n, i);
                    }),
                    (e.prototype.optimize = function (e, n) {
                      var i = this;
                      void 0 === e && (e = []),
                        void 0 === n && (n = {}),
                        t.prototype.optimize.call(this, n);
                      for (
                        var r = [].slice.call(this.observer.takeRecords());
                        r.length > 0;

                      )
                        e.push(r.pop());
                      for (
                        var s = function (t, e) {
                            void 0 === e && (e = !0),
                              null != t &&
                                t !== i &&
                                null != t.domNode.parentNode &&
                                (null == t.domNode[a.DATA_KEY].mutations &&
                                  (t.domNode[a.DATA_KEY].mutations = []),
                                e && s(t.parent));
                          },
                          l = function (t) {
                            null != t.domNode[a.DATA_KEY] &&
                              null != t.domNode[a.DATA_KEY].mutations &&
                              (t instanceof o.default && t.children.forEach(l),
                              t.optimize(n));
                          },
                          c = e,
                          d = 0;
                        c.length > 0;
                        d += 1
                      ) {
                        if (d >= 100)
                          throw new Error(
                            "[Parchment] Maximum optimize iterations reached"
                          );
                        for (
                          c.forEach(function (t) {
                            var e = a.find(t.target, !0);
                            null != e &&
                              (e.domNode === t.target &&
                                ("childList" === t.type
                                  ? (s(a.find(t.previousSibling, !1)),
                                    [].forEach.call(t.addedNodes, function (t) {
                                      var e = a.find(t, !1);
                                      s(e, !1),
                                        e instanceof o.default &&
                                          e.children.forEach(function (t) {
                                            s(t, !1);
                                          });
                                    }))
                                  : "attributes" === t.type && s(e.prev)),
                              s(e));
                          }),
                            this.children.forEach(l),
                            r = (c = [].slice.call(
                              this.observer.takeRecords()
                            )).slice();
                          r.length > 0;

                        )
                          e.push(r.pop());
                      }
                    }),
                    (e.prototype.update = function (e, n) {
                      var i = this;
                      void 0 === n && (n = {}),
                        (e = e || this.observer.takeRecords())
                          .map(function (t) {
                            var e = a.find(t.target, !0);
                            return null == e
                              ? null
                              : null == e.domNode[a.DATA_KEY].mutations
                              ? ((e.domNode[a.DATA_KEY].mutations = [t]), e)
                              : (e.domNode[a.DATA_KEY].mutations.push(t), null);
                          })
                          .forEach(function (t) {
                            null != t &&
                              t !== i &&
                              null != t.domNode[a.DATA_KEY] &&
                              t.update(
                                t.domNode[a.DATA_KEY].mutations || [],
                                n
                              );
                          }),
                        null != this.domNode[a.DATA_KEY].mutations &&
                          t.prototype.update.call(
                            this,
                            this.domNode[a.DATA_KEY].mutations,
                            n
                          ),
                        this.optimize(e, n);
                    }),
                    (e.blotName = "scroll"),
                    (e.defaultChild = "block"),
                    (e.scope = a.Scope.BLOCK_BLOT),
                    (e.tagName = "DIV"),
                    e
                  );
                })(o.default);
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
              var o = n(18),
                a = n(1),
                s = (function (t) {
                  function e() {
                    return (null !== t && t.apply(this, arguments)) || this;
                  }
                  return (
                    r(e, t),
                    (e.formats = function (n) {
                      if (n.tagName !== e.tagName)
                        return t.formats.call(this, n);
                    }),
                    (e.prototype.format = function (n, i) {
                      var r = this;
                      n !== this.statics.blotName || i
                        ? t.prototype.format.call(this, n, i)
                        : (this.children.forEach(function (t) {
                            t instanceof o.default ||
                              (t = t.wrap(e.blotName, !0)),
                              r.attributes.copy(t);
                          }),
                          this.unwrap());
                    }),
                    (e.prototype.formatAt = function (e, n, i, r) {
                      null != this.formats()[i] || a.query(i, a.Scope.ATTRIBUTE)
                        ? this.isolate(e, n).format(i, r)
                        : t.prototype.formatAt.call(this, e, n, i, r);
                    }),
                    (e.prototype.optimize = function (n) {
                      t.prototype.optimize.call(this, n);
                      var i = this.formats();
                      if (0 === Object.keys(i).length) return this.unwrap();
                      var r = this.next;
                      r instanceof e &&
                        r.prev === this &&
                        (function (t, e) {
                          if (Object.keys(t).length !== Object.keys(e).length)
                            return !1;
                          for (var n in t) if (t[n] !== e[n]) return !1;
                          return !0;
                        })(i, r.formats()) &&
                        (r.moveChildren(this), r.remove());
                    }),
                    (e.blotName = "inline"),
                    (e.scope = a.Scope.INLINE_BLOT),
                    (e.tagName = "SPAN"),
                    e
                  );
                })(o.default);
              e.default = s;
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
              var o = n(18),
                a = n(1),
                s = (function (t) {
                  function e() {
                    return (null !== t && t.apply(this, arguments)) || this;
                  }
                  return (
                    r(e, t),
                    (e.formats = function (n) {
                      var i = a.query(e.blotName).tagName;
                      if (n.tagName !== i) return t.formats.call(this, n);
                    }),
                    (e.prototype.format = function (n, i) {
                      null != a.query(n, a.Scope.BLOCK) &&
                        (n !== this.statics.blotName || i
                          ? t.prototype.format.call(this, n, i)
                          : this.replaceWith(e.blotName));
                    }),
                    (e.prototype.formatAt = function (e, n, i, r) {
                      null != a.query(i, a.Scope.BLOCK)
                        ? this.format(i, r)
                        : t.prototype.formatAt.call(this, e, n, i, r);
                    }),
                    (e.prototype.insertAt = function (e, n, i) {
                      if (null == i || null != a.query(n, a.Scope.INLINE))
                        t.prototype.insertAt.call(this, e, n, i);
                      else {
                        var r = this.split(e),
                          o = a.create(n, i);
                        r.parent.insertBefore(o, r);
                      }
                    }),
                    (e.prototype.update = function (e, n) {
                      navigator.userAgent.match(/Trident/)
                        ? this.build()
                        : t.prototype.update.call(this, e, n);
                    }),
                    (e.blotName = "block"),
                    (e.scope = a.Scope.BLOCK_BLOT),
                    (e.tagName = "P"),
                    e
                  );
                })(o.default);
              e.default = s;
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
                function e() {
                  return (null !== t && t.apply(this, arguments)) || this;
                }
                return (
                  r(e, t),
                  (e.formats = function (t) {}),
                  (e.prototype.format = function (e, n) {
                    t.prototype.formatAt.call(this, 0, this.length(), e, n);
                  }),
                  (e.prototype.formatAt = function (e, n, i, r) {
                    0 === e && n === this.length()
                      ? this.format(i, r)
                      : t.prototype.formatAt.call(this, e, n, i, r);
                  }),
                  (e.prototype.formats = function () {
                    return this.statics.formats(this.domNode);
                  }),
                  e
                );
              })(n(19).default);
              e.default = o;
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
              var o = n(19),
                a = n(1),
                s = (function (t) {
                  function e(e) {
                    var n = t.call(this, e) || this;
                    return (n.text = n.statics.value(n.domNode)), n;
                  }
                  return (
                    r(e, t),
                    (e.create = function (t) {
                      return document.createTextNode(t);
                    }),
                    (e.value = function (t) {
                      var e = t.data;
                      return e.normalize && (e = e.normalize()), e;
                    }),
                    (e.prototype.deleteAt = function (t, e) {
                      this.domNode.data = this.text =
                        this.text.slice(0, t) + this.text.slice(t + e);
                    }),
                    (e.prototype.index = function (t, e) {
                      return this.domNode === t ? e : -1;
                    }),
                    (e.prototype.insertAt = function (e, n, i) {
                      null == i
                        ? ((this.text =
                            this.text.slice(0, e) + n + this.text.slice(e)),
                          (this.domNode.data = this.text))
                        : t.prototype.insertAt.call(this, e, n, i);
                    }),
                    (e.prototype.length = function () {
                      return this.text.length;
                    }),
                    (e.prototype.optimize = function (n) {
                      t.prototype.optimize.call(this, n),
                        (this.text = this.statics.value(this.domNode)),
                        0 === this.text.length
                          ? this.remove()
                          : this.next instanceof e &&
                            this.next.prev === this &&
                            (this.insertAt(this.length(), this.next.value()),
                            this.next.remove());
                    }),
                    (e.prototype.position = function (t, e) {
                      return void 0 === e && (e = !1), [this.domNode, t];
                    }),
                    (e.prototype.split = function (t, e) {
                      if ((void 0 === e && (e = !1), !e)) {
                        if (0 === t) return this;
                        if (t === this.length()) return this.next;
                      }
                      var n = a.create(this.domNode.splitText(t));
                      return (
                        this.parent.insertBefore(n, this.next),
                        (this.text = this.statics.value(this.domNode)),
                        n
                      );
                    }),
                    (e.prototype.update = function (t, e) {
                      var n = this;
                      t.some(function (t) {
                        return (
                          "characterData" === t.type && t.target === n.domNode
                        );
                      }) && (this.text = this.statics.value(this.domNode));
                    }),
                    (e.prototype.value = function () {
                      return this.text;
                    }),
                    (e.blotName = "text"),
                    (e.scope = a.Scope.INLINE_BLOT),
                    e
                  );
                })(o.default);
              e.default = s;
            },
            function (t, e, n) {
              "use strict";
              var i = document.createElement("div");
              if (
                (i.classList.toggle("test-class", !1),
                i.classList.contains("test-class"))
              ) {
                var r = DOMTokenList.prototype.toggle;
                DOMTokenList.prototype.toggle = function (t, e) {
                  return arguments.length > 1 && !this.contains(t) == !e
                    ? e
                    : r.call(this, t);
                };
              }
              String.prototype.startsWith ||
                (String.prototype.startsWith = function (t, e) {
                  return (e = e || 0), this.substr(e, t.length) === t;
                }),
                String.prototype.endsWith ||
                  (String.prototype.endsWith = function (t, e) {
                    var n = this.toString();
                    ("number" != typeof e ||
                      !isFinite(e) ||
                      Math.floor(e) !== e ||
                      e > n.length) &&
                      (e = n.length),
                      (e -= t.length);
                    var i = n.indexOf(t, e);
                    return -1 !== i && i === e;
                  }),
                Array.prototype.find ||
                  Object.defineProperty(Array.prototype, "find", {
                    value: function (t) {
                      if (null === this)
                        throw new TypeError(
                          "Array.prototype.find called on null or undefined"
                        );
                      if ("function" != typeof t)
                        throw new TypeError("predicate must be a function");
                      for (
                        var e,
                          n = Object(this),
                          i = n.length >>> 0,
                          r = arguments[1],
                          o = 0;
                        o < i;
                        o++
                      )
                        if (((e = n[o]), t.call(r, e, o, n))) return e;
                    },
                  }),
                document.addEventListener("DOMContentLoaded", function () {
                  document.execCommand("enableObjectResizing", !1, !1),
                    document.execCommand("autoUrlDetect", !1, !1);
                });
            },
            function (t, e) {
              function n(t, e, a) {
                if (t == e) return t ? [[0, t]] : [];
                (a < 0 || t.length < a) && (a = null);
                var l = r(t, e),
                  c = t.substring(0, l);
                l = o((t = t.substring(l)), (e = e.substring(l)));
                var d = t.substring(t.length - l),
                  u = (function (t, e) {
                    var a;
                    if (!t) return [[1, e]];
                    if (!e) return [[-1, t]];
                    var s = t.length > e.length ? t : e,
                      l = t.length > e.length ? e : t,
                      c = s.indexOf(l);
                    if (-1 != c)
                      return (
                        (a = [
                          [1, s.substring(0, c)],
                          [0, l],
                          [1, s.substring(c + l.length)],
                        ]),
                        t.length > e.length && (a[0][0] = a[2][0] = -1),
                        a
                      );
                    if (1 == l.length)
                      return [
                        [-1, t],
                        [1, e],
                      ];
                    var d = (function (t, e) {
                      var n = t.length > e.length ? t : e,
                        i = t.length > e.length ? e : t;
                      if (n.length < 4 || 2 * i.length < n.length) return null;
                      function a(t, e, n) {
                        for (
                          var i,
                            a,
                            s,
                            l,
                            c = t.substring(n, n + Math.floor(t.length / 4)),
                            d = -1,
                            u = "";
                          -1 != (d = e.indexOf(c, d + 1));

                        ) {
                          var p = r(t.substring(n), e.substring(d)),
                            h = o(t.substring(0, n), e.substring(0, d));
                          u.length < h + p &&
                            ((u =
                              e.substring(d - h, d) + e.substring(d, d + p)),
                            (i = t.substring(0, n - h)),
                            (a = t.substring(n + p)),
                            (s = e.substring(0, d - h)),
                            (l = e.substring(d + p)));
                        }
                        return 2 * u.length >= t.length
                          ? [i, a, s, l, u]
                          : null;
                      }
                      var s,
                        l,
                        c,
                        d,
                        u,
                        p = a(n, i, Math.ceil(n.length / 4)),
                        h = a(n, i, Math.ceil(n.length / 2));
                      return p || h
                        ? ((s = h
                            ? p && p[4].length > h[4].length
                              ? p
                              : h
                            : p),
                          t.length > e.length
                            ? ((l = s[0]), (c = s[1]), (d = s[2]), (u = s[3]))
                            : ((d = s[0]), (u = s[1]), (l = s[2]), (c = s[3])),
                          [l, c, d, u, s[4]])
                        : null;
                    })(t, e);
                    if (d) {
                      var u = d[0],
                        p = d[1],
                        h = d[2],
                        f = d[3],
                        b = d[4],
                        m = n(u, h),
                        g = n(p, f);
                      return m.concat([[0, b]], g);
                    }
                    return (function (t, e) {
                      for (
                        var n = t.length,
                          r = e.length,
                          o = Math.ceil((n + r) / 2),
                          a = o,
                          s = 2 * o,
                          l = new Array(s),
                          c = new Array(s),
                          d = 0;
                        d < s;
                        d++
                      )
                        (l[d] = -1), (c[d] = -1);
                      (l[a + 1] = 0), (c[a + 1] = 0);
                      for (
                        var u = n - r,
                          p = u % 2 != 0,
                          h = 0,
                          f = 0,
                          b = 0,
                          m = 0,
                          g = 0;
                        g < o;
                        g++
                      ) {
                        for (var v = -g + h; v <= g - f; v += 2) {
                          for (
                            var _ = a + v,
                              y =
                                (x =
                                  v == -g || (v != g && l[_ - 1] < l[_ + 1])
                                    ? l[_ + 1]
                                    : l[_ - 1] + 1) - v;
                            x < n && y < r && t.charAt(x) == e.charAt(y);

                          )
                            x++, y++;
                          if (((l[_] = x), x > n)) f += 2;
                          else if (y > r) h += 2;
                          else if (
                            p &&
                            (w = a + u - v) >= 0 &&
                            w < s &&
                            -1 != c[w]
                          ) {
                            var M = n - c[w];
                            if (x >= M) return i(t, e, x, y);
                          }
                        }
                        for (var O = -g + b; O <= g - m; O += 2) {
                          for (
                            var w = a + O,
                              A =
                                (M =
                                  O == -g || (O != g && c[w - 1] < c[w + 1])
                                    ? c[w + 1]
                                    : c[w - 1] + 1) - O;
                            M < n &&
                            A < r &&
                            t.charAt(n - M - 1) == e.charAt(r - A - 1);

                          )
                            M++, A++;
                          if (((c[w] = M), M > n)) m += 2;
                          else if (A > r) b += 2;
                          else if (
                            !p &&
                            (_ = a + u - O) >= 0 &&
                            _ < s &&
                            -1 != l[_]
                          ) {
                            var x = l[_];
                            if (((y = a + x - _), x >= (M = n - M)))
                              return i(t, e, x, y);
                          }
                        }
                      }
                      return [
                        [-1, t],
                        [1, e],
                      ];
                    })(t, e);
                  })(
                    (t = t.substring(0, t.length - l)),
                    (e = e.substring(0, e.length - l))
                  );
                return (
                  c && u.unshift([0, c]),
                  d && u.push([0, d]),
                  (function t(e) {
                    e.push([0, ""]);
                    for (
                      var n, i = 0, a = 0, s = 0, l = "", c = "";
                      i < e.length;

                    )
                      switch (e[i][0]) {
                        case 1:
                          s++, (c += e[i][1]), i++;
                          break;
                        case -1:
                          a++, (l += e[i][1]), i++;
                          break;
                        case 0:
                          a + s > 1
                            ? (0 !== a &&
                                0 !== s &&
                                (0 !== (n = r(c, l)) &&
                                  (i - a - s > 0 && 0 == e[i - a - s - 1][0]
                                    ? (e[i - a - s - 1][1] += c.substring(0, n))
                                    : (e.splice(0, 0, [0, c.substring(0, n)]),
                                      i++),
                                  (c = c.substring(n)),
                                  (l = l.substring(n))),
                                0 !== (n = o(c, l)) &&
                                  ((e[i][1] =
                                    c.substring(c.length - n) + e[i][1]),
                                  (c = c.substring(0, c.length - n)),
                                  (l = l.substring(0, l.length - n)))),
                              0 === a
                                ? e.splice(i - s, a + s, [1, c])
                                : 0 === s
                                ? e.splice(i - a, a + s, [-1, l])
                                : e.splice(i - a - s, a + s, [-1, l], [1, c]),
                              (i = i - a - s + (a ? 1 : 0) + (s ? 1 : 0) + 1))
                            : 0 !== i && 0 == e[i - 1][0]
                            ? ((e[i - 1][1] += e[i][1]), e.splice(i, 1))
                            : i++,
                            (s = 0),
                            (a = 0),
                            (l = ""),
                            (c = "");
                      }
                    "" === e[e.length - 1][1] && e.pop();
                    var d = !1;
                    for (i = 1; i < e.length - 1; )
                      0 == e[i - 1][0] &&
                        0 == e[i + 1][0] &&
                        (e[i][1].substring(
                          e[i][1].length - e[i - 1][1].length
                        ) == e[i - 1][1]
                          ? ((e[i][1] =
                              e[i - 1][1] +
                              e[i][1].substring(
                                0,
                                e[i][1].length - e[i - 1][1].length
                              )),
                            (e[i + 1][1] = e[i - 1][1] + e[i + 1][1]),
                            e.splice(i - 1, 1),
                            (d = !0))
                          : e[i][1].substring(0, e[i + 1][1].length) ==
                              e[i + 1][1] &&
                            ((e[i - 1][1] += e[i + 1][1]),
                            (e[i][1] =
                              e[i][1].substring(e[i + 1][1].length) +
                              e[i + 1][1]),
                            e.splice(i + 1, 1),
                            (d = !0))),
                        i++;
                    d && t(e);
                  })(u),
                  null != a &&
                    (u = (function (t, e) {
                      var n = (function (t, e) {
                          if (0 === e) return [0, t];
                          for (var n = 0, i = 0; i < t.length; i++) {
                            var r = t[i];
                            if (-1 === r[0] || 0 === r[0]) {
                              var o = n + r[1].length;
                              if (e === o) return [i + 1, t];
                              if (e < o) {
                                t = t.slice();
                                var a = e - n,
                                  s = [r[0], r[1].slice(0, a)],
                                  l = [r[0], r[1].slice(a)];
                                return t.splice(i, 1, s, l), [i + 1, t];
                              }
                              n = o;
                            }
                          }
                          throw new Error("cursor_pos is out of bounds!");
                        })(t, e),
                        i = n[1],
                        r = n[0],
                        o = i[r],
                        a = i[r + 1];
                      if (null == o) return t;
                      if (0 !== o[0]) return t;
                      if (null != a && o[1] + a[1] === a[1] + o[1])
                        return i.splice(r, 2, a, o), s(i, r, 2);
                      if (null != a && 0 === a[1].indexOf(o[1])) {
                        i.splice(r, 2, [a[0], o[1]], [0, o[1]]);
                        var l = a[1].slice(o[1].length);
                        return (
                          l.length > 0 && i.splice(r + 2, 0, [a[0], l]),
                          s(i, r, 3)
                        );
                      }
                      return t;
                    })(u, a)),
                  (u = (function (t) {
                    for (
                      var e = !1,
                        n = function (t) {
                          return (
                            t.charCodeAt(0) >= 56320 && t.charCodeAt(0) <= 57343
                          );
                        },
                        i = 2;
                      i < t.length;
                      i += 1
                    )
                      0 === t[i - 2][0] &&
                        (r = t[i - 2][1]).charCodeAt(r.length - 1) >= 55296 &&
                        r.charCodeAt(r.length - 1) <= 56319 &&
                        -1 === t[i - 1][0] &&
                        n(t[i - 1][1]) &&
                        1 === t[i][0] &&
                        n(t[i][1]) &&
                        ((e = !0),
                        (t[i - 1][1] = t[i - 2][1].slice(-1) + t[i - 1][1]),
                        (t[i][1] = t[i - 2][1].slice(-1) + t[i][1]),
                        (t[i - 2][1] = t[i - 2][1].slice(0, -1)));
                    var r;
                    if (!e) return t;
                    var o = [];
                    for (i = 0; i < t.length; i += 1)
                      t[i][1].length > 0 && o.push(t[i]);
                    return o;
                  })(u))
                );
              }
              function i(t, e, i, r) {
                var o = t.substring(0, i),
                  a = e.substring(0, r),
                  s = t.substring(i),
                  l = e.substring(r),
                  c = n(o, a),
                  d = n(s, l);
                return c.concat(d);
              }
              function r(t, e) {
                if (!t || !e || t.charAt(0) != e.charAt(0)) return 0;
                for (
                  var n = 0, i = Math.min(t.length, e.length), r = i, o = 0;
                  n < r;

                )
                  t.substring(o, r) == e.substring(o, r)
                    ? (o = n = r)
                    : (i = r),
                    (r = Math.floor((i - n) / 2 + n));
                return r;
              }
              function o(t, e) {
                if (
                  !t ||
                  !e ||
                  t.charAt(t.length - 1) != e.charAt(e.length - 1)
                )
                  return 0;
                for (
                  var n = 0, i = Math.min(t.length, e.length), r = i, o = 0;
                  n < r;

                )
                  t.substring(t.length - r, t.length - o) ==
                  e.substring(e.length - r, e.length - o)
                    ? (o = n = r)
                    : (i = r),
                    (r = Math.floor((i - n) / 2 + n));
                return r;
              }
              var a = n;
              function s(t, e, n) {
                for (var i = e + n - 1; i >= 0 && i >= e - 1; i--)
                  if (i + 1 < t.length) {
                    var r = t[i],
                      o = t[i + 1];
                    r[0] === o[1] && t.splice(i, 2, [r[0], r[1] + o[1]]);
                  }
                return t;
              }
              (a.INSERT = 1), (a.DELETE = -1), (a.EQUAL = 0), (t.exports = a);
            },
            function (t, e) {
              function n(t) {
                var e = [];
                for (var n in t) e.push(n);
                return e;
              }
              (t.exports =
                "function" == typeof Object.keys ? Object.keys : n).shim = n;
            },
            function (t, e) {
              var n =
                "[object Arguments]" ==
                (function () {
                  return Object.prototype.toString.call(arguments);
                })();
              function i(t) {
                return (
                  "[object Arguments]" == Object.prototype.toString.call(t)
                );
              }
              function r(t) {
                return (
                  (t &&
                    "object" == typeof t &&
                    "number" == typeof t.length &&
                    Object.prototype.hasOwnProperty.call(t, "callee") &&
                    !Object.prototype.propertyIsEnumerable.call(t, "callee")) ||
                  !1
                );
              }
              ((e = t.exports = n ? i : r).supported = i), (e.unsupported = r);
            },
            function (t, e) {
              "use strict";
              var n = Object.prototype.hasOwnProperty,
                i = "~";
              function r() {}
              function o(t, e, n) {
                (this.fn = t), (this.context = e), (this.once = n || !1);
              }
              function a() {
                (this._events = new r()), (this._eventsCount = 0);
              }
              Object.create &&
                ((r.prototype = Object.create(null)),
                new r().__proto__ || (i = !1)),
                (a.prototype.eventNames = function () {
                  var t,
                    e,
                    r = [];
                  if (0 === this._eventsCount) return r;
                  for (e in (t = this._events))
                    n.call(t, e) && r.push(i ? e.slice(1) : e);
                  return Object.getOwnPropertySymbols
                    ? r.concat(Object.getOwnPropertySymbols(t))
                    : r;
                }),
                (a.prototype.listeners = function (t, e) {
                  var n = i ? i + t : t,
                    r = this._events[n];
                  if (e) return !!r;
                  if (!r) return [];
                  if (r.fn) return [r.fn];
                  for (var o = 0, a = r.length, s = new Array(a); o < a; o++)
                    s[o] = r[o].fn;
                  return s;
                }),
                (a.prototype.emit = function (t, e, n, r, o, a) {
                  var s = i ? i + t : t;
                  if (!this._events[s]) return !1;
                  var l,
                    c,
                    d = this._events[s],
                    u = arguments.length;
                  if (d.fn) {
                    switch (
                      (d.once && this.removeListener(t, d.fn, void 0, !0), u)
                    ) {
                      case 1:
                        return d.fn.call(d.context), !0;
                      case 2:
                        return d.fn.call(d.context, e), !0;
                      case 3:
                        return d.fn.call(d.context, e, n), !0;
                      case 4:
                        return d.fn.call(d.context, e, n, r), !0;
                      case 5:
                        return d.fn.call(d.context, e, n, r, o), !0;
                      case 6:
                        return d.fn.call(d.context, e, n, r, o, a), !0;
                    }
                    for (c = 1, l = new Array(u - 1); c < u; c++)
                      l[c - 1] = arguments[c];
                    d.fn.apply(d.context, l);
                  } else {
                    var p,
                      h = d.length;
                    for (c = 0; c < h; c++)
                      switch (
                        (d[c].once &&
                          this.removeListener(t, d[c].fn, void 0, !0),
                        u)
                      ) {
                        case 1:
                          d[c].fn.call(d[c].context);
                          break;
                        case 2:
                          d[c].fn.call(d[c].context, e);
                          break;
                        case 3:
                          d[c].fn.call(d[c].context, e, n);
                          break;
                        case 4:
                          d[c].fn.call(d[c].context, e, n, r);
                          break;
                        default:
                          if (!l)
                            for (p = 1, l = new Array(u - 1); p < u; p++)
                              l[p - 1] = arguments[p];
                          d[c].fn.apply(d[c].context, l);
                      }
                  }
                  return !0;
                }),
                (a.prototype.on = function (t, e, n) {
                  var r = new o(e, n || this),
                    a = i ? i + t : t;
                  return (
                    this._events[a]
                      ? this._events[a].fn
                        ? (this._events[a] = [this._events[a], r])
                        : this._events[a].push(r)
                      : ((this._events[a] = r), this._eventsCount++),
                    this
                  );
                }),
                (a.prototype.once = function (t, e, n) {
                  var r = new o(e, n || this, !0),
                    a = i ? i + t : t;
                  return (
                    this._events[a]
                      ? this._events[a].fn
                        ? (this._events[a] = [this._events[a], r])
                        : this._events[a].push(r)
                      : ((this._events[a] = r), this._eventsCount++),
                    this
                  );
                }),
                (a.prototype.removeListener = function (t, e, n, o) {
                  var a = i ? i + t : t;
                  if (!this._events[a]) return this;
                  if (!e)
                    return (
                      0 == --this._eventsCount
                        ? (this._events = new r())
                        : delete this._events[a],
                      this
                    );
                  var s = this._events[a];
                  if (s.fn)
                    s.fn !== e ||
                      (o && !s.once) ||
                      (n && s.context !== n) ||
                      (0 == --this._eventsCount
                        ? (this._events = new r())
                        : delete this._events[a]);
                  else {
                    for (var l = 0, c = [], d = s.length; l < d; l++)
                      (s[l].fn !== e ||
                        (o && !s[l].once) ||
                        (n && s[l].context !== n)) &&
                        c.push(s[l]);
                    c.length
                      ? (this._events[a] = 1 === c.length ? c[0] : c)
                      : 0 == --this._eventsCount
                      ? (this._events = new r())
                      : delete this._events[a];
                  }
                  return this;
                }),
                (a.prototype.removeAllListeners = function (t) {
                  var e;
                  return (
                    t
                      ? ((e = i ? i + t : t),
                        this._events[e] &&
                          (0 == --this._eventsCount
                            ? (this._events = new r())
                            : delete this._events[e]))
                      : ((this._events = new r()), (this._eventsCount = 0)),
                    this
                  );
                }),
                (a.prototype.off = a.prototype.removeListener),
                (a.prototype.addListener = a.prototype.on),
                (a.prototype.setMaxListeners = function () {
                  return this;
                }),
                (a.prefixed = i),
                (a.EventEmitter = a),
                void 0 !== t && (t.exports = a);
            },
            function (t, e, n) {
              "use strict";
              Object.defineProperty(e, "__esModule", { value: !0 }),
                (e.matchText =
                  e.matchSpacing =
                  e.matchNewline =
                  e.matchBlot =
                  e.matchAttributor =
                  e.default =
                    void 0);
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
                a = _(n(3)),
                s = _(n(2)),
                l = _(n(0)),
                c = _(n(5)),
                d = _(n(10)),
                u = _(n(9)),
                p = n(36),
                h = n(37),
                f = _(n(13)),
                b = n(26),
                m = n(38),
                g = n(39),
                v = n(40);
              function _(t) {
                return t && t.__esModule ? t : { default: t };
              }
              function y(t, e, n) {
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
              var M = (0, d.default)("quill:clipboard"),
                O = "__ql-matcher",
                w = [
                  [Node.TEXT_NODE, P],
                  [Node.TEXT_NODE, E],
                  [
                    "br",
                    function (t, e) {
                      return S(e, "\n") || e.insert("\n"), e;
                    },
                  ],
                  [Node.ELEMENT_NODE, E],
                  [Node.ELEMENT_NODE, q],
                  [Node.ELEMENT_NODE, j],
                  [Node.ELEMENT_NODE, L],
                  [
                    Node.ELEMENT_NODE,
                    function (t, e) {
                      var n = {},
                        i = t.style || {};
                      return (
                        i.fontStyle &&
                          "italic" === k(t).fontStyle &&
                          (n.italic = !0),
                        i.fontWeight &&
                          (k(t).fontWeight.startsWith("bold") ||
                            parseInt(k(t).fontWeight) >= 700) &&
                          (n.bold = !0),
                        Object.keys(n).length > 0 && (e = C(e, n)),
                        parseFloat(i.textIndent || 0) > 0 &&
                          (e = new s.default().insert("\t").concat(e)),
                        e
                      );
                    },
                  ],
                  [
                    "li",
                    function (t, e) {
                      var n = l.default.query(t);
                      if (
                        null == n ||
                        "list-item" !== n.blotName ||
                        !S(e, "\n")
                      )
                        return e;
                      for (
                        var i = -1, r = t.parentNode;
                        !r.classList.contains("ql-clipboard");

                      )
                        "list" === (l.default.query(r) || {}).blotName &&
                          (i += 1),
                          (r = r.parentNode);
                      return i <= 0
                        ? e
                        : e.compose(
                            new s.default()
                              .retain(e.length() - 1)
                              .retain(1, { indent: i })
                          );
                    },
                  ],
                  ["b", D.bind(D, "bold")],
                  ["i", D.bind(D, "italic")],
                  [
                    "style",
                    function () {
                      return new s.default();
                    },
                  ],
                ],
                A = [p.AlignAttribute, m.DirectionAttribute].reduce(function (
                  t,
                  e
                ) {
                  return (t[e.keyName] = e), t;
                },
                {}),
                x = [
                  p.AlignStyle,
                  h.BackgroundStyle,
                  b.ColorStyle,
                  m.DirectionStyle,
                  g.FontStyle,
                  v.SizeStyle,
                ].reduce(function (t, e) {
                  return (t[e.keyName] = e), t;
                }, {}),
                z = (function (t) {
                  function e(t, n) {
                    !(function (t, e) {
                      if (!(t instanceof e))
                        throw new TypeError(
                          "Cannot call a class as a function"
                        );
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
                      (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n)
                    );
                    return (
                      i.quill.root.addEventListener("paste", i.onPaste.bind(i)),
                      (i.container = i.quill.addContainer("ql-clipboard")),
                      i.container.setAttribute("contenteditable", !0),
                      i.container.setAttribute("tabindex", -1),
                      (i.matchers = []),
                      w.concat(i.options.matchers).forEach(function (t) {
                        var e = r(t, 2),
                          o = e[0],
                          a = e[1];
                        (n.matchVisual || a !== j) && i.addMatcher(o, a);
                      }),
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
                    o(e, [
                      {
                        key: "addMatcher",
                        value: function (t, e) {
                          this.matchers.push([t, e]);
                        },
                      },
                      {
                        key: "convert",
                        value: function (t) {
                          if ("string" == typeof t)
                            return (
                              (this.container.innerHTML = t.replace(
                                /\>\r?\n +\</g,
                                "><"
                              )),
                              this.convert()
                            );
                          var e = this.quill.getFormat(
                            this.quill.selection.savedRange.index
                          );
                          if (e[f.default.blotName]) {
                            var n = this.container.innerText;
                            return (
                              (this.container.innerHTML = ""),
                              new s.default().insert(
                                n,
                                y({}, f.default.blotName, e[f.default.blotName])
                              )
                            );
                          }
                          var i = this.prepareMatching(),
                            o = r(i, 2),
                            a = o[0],
                            l = o[1],
                            c = (function t(e, n, i) {
                              return e.nodeType === e.TEXT_NODE
                                ? i.reduce(function (t, n) {
                                    return n(e, t);
                                  }, new s.default())
                                : e.nodeType === e.ELEMENT_NODE
                                ? [].reduce.call(
                                    e.childNodes || [],
                                    function (r, o) {
                                      var a = t(o, n, i);
                                      return (
                                        o.nodeType === e.ELEMENT_NODE &&
                                          ((a = n.reduce(function (t, e) {
                                            return e(o, t);
                                          }, a)),
                                          (a = (o[O] || []).reduce(function (
                                            t,
                                            e
                                          ) {
                                            return e(o, t);
                                          },
                                          a))),
                                        r.concat(a)
                                      );
                                    },
                                    new s.default()
                                  )
                                : new s.default();
                            })(this.container, a, l);
                          return (
                            S(c, "\n") &&
                              null == c.ops[c.ops.length - 1].attributes &&
                              (c = c.compose(
                                new s.default().retain(c.length() - 1).delete(1)
                              )),
                            M.log("convert", this.container.innerHTML, c),
                            (this.container.innerHTML = ""),
                            c
                          );
                        },
                      },
                      {
                        key: "dangerouslyPasteHTML",
                        value: function (t, e) {
                          var n =
                            arguments.length > 2 && void 0 !== arguments[2]
                              ? arguments[2]
                              : c.default.sources.API;
                          if ("string" == typeof t)
                            this.quill.setContents(this.convert(t), e),
                              this.quill.setSelection(
                                0,
                                c.default.sources.SILENT
                              );
                          else {
                            var i = this.convert(e);
                            this.quill.updateContents(
                              new s.default().retain(t).concat(i),
                              n
                            ),
                              this.quill.setSelection(
                                t + i.length(),
                                c.default.sources.SILENT
                              );
                          }
                        },
                      },
                      {
                        key: "onPaste",
                        value: function (t) {
                          var e = this;
                          if (!t.defaultPrevented && this.quill.isEnabled()) {
                            var n = this.quill.getSelection(),
                              i = new s.default().retain(n.index),
                              r = this.quill.scrollingContainer.scrollTop;
                            this.container.focus(),
                              this.quill.selection.update(
                                c.default.sources.SILENT
                              ),
                              setTimeout(function () {
                                (i = i.concat(e.convert()).delete(n.length)),
                                  e.quill.updateContents(
                                    i,
                                    c.default.sources.USER
                                  ),
                                  e.quill.setSelection(
                                    i.length() - n.length,
                                    c.default.sources.SILENT
                                  ),
                                  (e.quill.scrollingContainer.scrollTop = r),
                                  e.quill.focus();
                              }, 1);
                          }
                        },
                      },
                      {
                        key: "prepareMatching",
                        value: function () {
                          var t = this,
                            e = [],
                            n = [];
                          return (
                            this.matchers.forEach(function (i) {
                              var o = r(i, 2),
                                a = o[0],
                                s = o[1];
                              switch (a) {
                                case Node.TEXT_NODE:
                                  n.push(s);
                                  break;
                                case Node.ELEMENT_NODE:
                                  e.push(s);
                                  break;
                                default:
                                  [].forEach.call(
                                    t.container.querySelectorAll(a),
                                    function (t) {
                                      (t[O] = t[O] || []), t[O].push(s);
                                    }
                                  );
                              }
                            }),
                            [e, n]
                          );
                        },
                      },
                    ]),
                    e
                  );
                })(u.default);
              function C(t, e, n) {
                return "object" === (void 0 === e ? "undefined" : i(e))
                  ? Object.keys(e).reduce(function (t, n) {
                      return C(t, n, e[n]);
                    }, t)
                  : t.reduce(function (t, i) {
                      return i.attributes && i.attributes[e]
                        ? t.push(i)
                        : t.insert(
                            i.insert,
                            (0, a.default)({}, y({}, e, n), i.attributes)
                          );
                    }, new s.default());
              }
              function k(t) {
                return t.nodeType !== Node.ELEMENT_NODE
                  ? {}
                  : t["__ql-computed-style"] ||
                      (t["__ql-computed-style"] = window.getComputedStyle(t));
              }
              function S(t, e) {
                for (
                  var n = "", i = t.ops.length - 1;
                  i >= 0 && n.length < e.length;
                  --i
                ) {
                  var r = t.ops[i];
                  if ("string" != typeof r.insert) break;
                  n = r.insert + n;
                }
                return n.slice(-1 * e.length) === e;
              }
              function T(t) {
                if (0 === t.childNodes.length) return !1;
                var e = k(t);
                return ["block", "list-item"].indexOf(e.display) > -1;
              }
              function D(t, e, n) {
                return C(n, t, !0);
              }
              function L(t, e) {
                var n = l.default.Attributor.Attribute.keys(t),
                  i = l.default.Attributor.Class.keys(t),
                  r = l.default.Attributor.Style.keys(t),
                  o = {};
                return (
                  n
                    .concat(i)
                    .concat(r)
                    .forEach(function (e) {
                      var n = l.default.query(e, l.default.Scope.ATTRIBUTE);
                      (null != n &&
                        ((o[n.attrName] = n.value(t)), o[n.attrName])) ||
                        (null == (n = A[e]) ||
                          (n.attrName !== e && n.keyName !== e) ||
                          (o[n.attrName] = n.value(t) || void 0),
                        null == (n = x[e]) ||
                          (n.attrName !== e && n.keyName !== e) ||
                          ((n = x[e]), (o[n.attrName] = n.value(t) || void 0)));
                    }),
                  Object.keys(o).length > 0 && (e = C(e, o)),
                  e
                );
              }
              function q(t, e) {
                var n = l.default.query(t);
                if (null == n) return e;
                if (n.prototype instanceof l.default.Embed) {
                  var i = {},
                    r = n.value(t);
                  null != r &&
                    ((i[n.blotName] = r),
                    (e = new s.default().insert(i, n.formats(t))));
                } else
                  "function" == typeof n.formats &&
                    (e = C(e, n.blotName, n.formats(t)));
                return e;
              }
              function E(t, e) {
                return (
                  S(e, "\n") ||
                    ((T(t) ||
                      (e.length() > 0 && t.nextSibling && T(t.nextSibling))) &&
                      e.insert("\n")),
                  e
                );
              }
              function j(t, e) {
                if (T(t) && null != t.nextElementSibling && !S(e, "\n\n")) {
                  var n =
                    t.offsetHeight +
                    parseFloat(k(t).marginTop) +
                    parseFloat(k(t).marginBottom);
                  t.nextElementSibling.offsetTop > t.offsetTop + 1.5 * n &&
                    e.insert("\n");
                }
                return e;
              }
              function P(t, e) {
                var n = t.data;
                if ("O:P" === t.parentNode.tagName) return e.insert(n.trim());
                if (
                  0 === n.trim().length &&
                  t.parentNode.classList.contains("ql-clipboard")
                )
                  return e;
                if (!k(t.parentNode).whiteSpace.startsWith("pre")) {
                  var i = function (t, e) {
                    return (e = e.replace(/[^\u00a0]/g, "")).length < 1 && t
                      ? " "
                      : e;
                  };
                  (n = (n = n
                    .replace(/\r\n/g, " ")
                    .replace(/\n/g, " ")).replace(/\s\s+/g, i.bind(i, !0))),
                    ((null == t.previousSibling && T(t.parentNode)) ||
                      (null != t.previousSibling && T(t.previousSibling))) &&
                      (n = n.replace(/^\s+/, i.bind(i, !1))),
                    ((null == t.nextSibling && T(t.parentNode)) ||
                      (null != t.nextSibling && T(t.nextSibling))) &&
                      (n = n.replace(/\s+$/, i.bind(i, !1)));
                }
                return e.insert(n);
              }
              (z.DEFAULTS = { matchers: [], matchVisual: !0 }),
                (e.default = z),
                (e.matchAttributor = L),
                (e.matchBlot = q),
                (e.matchNewline = E),
                (e.matchSpacing = j),
                (e.matchText = P);
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
                };
              function a(t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              }
              function s(t, e) {
                if (!t)
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                return !e || ("object" != typeof e && "function" != typeof e)
                  ? t
                  : e;
              }
              var l = (function (t) {
                function e() {
                  return (
                    a(this, e),
                    s(
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
                        key: "optimize",
                        value: function (t) {
                          o(
                            e.prototype.__proto__ ||
                              Object.getPrototypeOf(e.prototype),
                            "optimize",
                            this
                          ).call(this, t),
                            this.domNode.tagName !== this.statics.tagName[0] &&
                              this.replaceWith(this.statics.blotName);
                        },
                      },
                    ],
                    [
                      {
                        key: "create",
                        value: function () {
                          return o(
                            e.__proto__ || Object.getPrototypeOf(e),
                            "create",
                            this
                          ).call(this);
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
              })(((i = n(6)) && i.__esModule ? i : { default: i }).default);
              (l.blotName = "bold"),
                (l.tagName = ["STRONG", "B"]),
                (e.default = l);
            },
            function (t, e, n) {
              "use strict";
              Object.defineProperty(e, "__esModule", { value: !0 }),
                (e.addControls = e.default = void 0);
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
                o = d(n(2)),
                a = d(n(0)),
                s = d(n(5)),
                l = d(n(10)),
                c = d(n(9));
              function d(t) {
                return t && t.__esModule ? t : { default: t };
              }
              function u(t, e) {
                if (!t)
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                return !e || ("object" != typeof e && "function" != typeof e)
                  ? t
                  : e;
              }
              var p = (0, l.default)("quill:toolbar"),
                h = (function (t) {
                  function e(t, n) {
                    !(function (t, e) {
                      if (!(t instanceof e))
                        throw new TypeError(
                          "Cannot call a class as a function"
                        );
                    })(this, e);
                    var r,
                      o = u(
                        this,
                        (e.__proto__ || Object.getPrototypeOf(e)).call(
                          this,
                          t,
                          n
                        )
                      );
                    if (Array.isArray(o.options.container)) {
                      var a = document.createElement("div");
                      b(a, o.options.container),
                        t.container.parentNode.insertBefore(a, t.container),
                        (o.container = a);
                    } else
                      "string" == typeof o.options.container
                        ? (o.container = document.querySelector(
                            o.options.container
                          ))
                        : (o.container = o.options.container);
                    return o.container instanceof HTMLElement
                      ? (o.container.classList.add("ql-toolbar"),
                        (o.controls = []),
                        (o.handlers = {}),
                        Object.keys(o.options.handlers).forEach(function (t) {
                          o.addHandler(t, o.options.handlers[t]);
                        }),
                        [].forEach.call(
                          o.container.querySelectorAll("button, select"),
                          function (t) {
                            o.attach(t);
                          }
                        ),
                        o.quill.on(
                          s.default.events.EDITOR_CHANGE,
                          function (t, e) {
                            t === s.default.events.SELECTION_CHANGE &&
                              o.update(e);
                          }
                        ),
                        o.quill.on(
                          s.default.events.SCROLL_OPTIMIZE,
                          function () {
                            var t = o.quill.selection.getRange(),
                              e = i(t, 1)[0];
                            o.update(e);
                          }
                        ),
                        o)
                      : ((r = p.error(
                          "Container required for toolbar",
                          o.options
                        )),
                        u(o, r));
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
                        key: "addHandler",
                        value: function (t, e) {
                          this.handlers[t] = e;
                        },
                      },
                      {
                        key: "attach",
                        value: function (t) {
                          var e = this,
                            n = [].find.call(t.classList, function (t) {
                              return 0 === t.indexOf("ql-");
                            });
                          if (n) {
                            if (
                              ((n = n.slice("ql-".length)),
                              "BUTTON" === t.tagName &&
                                t.setAttribute("type", "button"),
                              null == this.handlers[n])
                            ) {
                              if (
                                null != this.quill.scroll.whitelist &&
                                null == this.quill.scroll.whitelist[n]
                              )
                                return void p.warn(
                                  "ignoring attaching to disabled format",
                                  n,
                                  t
                                );
                              if (null == a.default.query(n))
                                return void p.warn(
                                  "ignoring attaching to nonexistent format",
                                  n,
                                  t
                                );
                            }
                            var r = "SELECT" === t.tagName ? "change" : "click";
                            t.addEventListener(r, function (r) {
                              var l = void 0;
                              if ("SELECT" === t.tagName) {
                                if (t.selectedIndex < 0) return;
                                var c = t.options[t.selectedIndex];
                                l =
                                  !c.hasAttribute("selected") &&
                                  (c.value || !1);
                              } else (l = !t.classList.contains("ql-active") && (t.value || !t.hasAttribute("value"))), r.preventDefault();
                              e.quill.focus();
                              var d = e.quill.selection.getRange(),
                                u = i(d, 1)[0];
                              if (null != e.handlers[n])
                                e.handlers[n].call(e, l);
                              else if (
                                a.default.query(n).prototype instanceof
                                a.default.Embed
                              ) {
                                if (!(l = prompt("Enter " + n))) return;
                                e.quill.updateContents(
                                  new o.default()
                                    .retain(u.index)
                                    .delete(u.length)
                                    .insert(
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
                                      })({}, n, l)
                                    ),
                                  s.default.sources.USER
                                );
                              } else
                                e.quill.format(n, l, s.default.sources.USER);
                              e.update(u);
                            }),
                              this.controls.push([n, t]);
                          }
                        },
                      },
                      {
                        key: "update",
                        value: function (t) {
                          var e = null == t ? {} : this.quill.getFormat(t);
                          this.controls.forEach(function (n) {
                            var r = i(n, 2),
                              o = r[0],
                              a = r[1];
                            if ("SELECT" === a.tagName) {
                              var s = void 0;
                              if (null == t) s = null;
                              else if (null == e[o])
                                s = a.querySelector("option[selected]");
                              else if (!Array.isArray(e[o])) {
                                var l = e[o];
                                "string" == typeof l &&
                                  (l = l.replace(/\"/g, '\\"')),
                                  (s = a.querySelector(
                                    'option[value="' + l + '"]'
                                  ));
                              }
                              null == s
                                ? ((a.value = ""), (a.selectedIndex = -1))
                                : (s.selected = !0);
                            } else if (null == t)
                              a.classList.remove("ql-active");
                            else if (a.hasAttribute("value")) {
                              var c =
                                e[o] === a.getAttribute("value") ||
                                (null != e[o] &&
                                  e[o].toString() ===
                                    a.getAttribute("value")) ||
                                (null == e[o] && !a.getAttribute("value"));
                              a.classList.toggle("ql-active", c);
                            } else
                              a.classList.toggle("ql-active", null != e[o]);
                          });
                        },
                      },
                    ]),
                    e
                  );
                })(c.default);
              function f(t, e, n) {
                var i = document.createElement("button");
                i.setAttribute("type", "button"),
                  i.classList.add("ql-" + e),
                  null != n && (i.value = n),
                  t.appendChild(i);
              }
              function b(t, e) {
                Array.isArray(e[0]) || (e = [e]),
                  e.forEach(function (e) {
                    var n = document.createElement("span");
                    n.classList.add("ql-formats"),
                      e.forEach(function (t) {
                        if ("string" == typeof t) f(n, t);
                        else {
                          var e = Object.keys(t)[0],
                            i = t[e];
                          Array.isArray(i)
                            ? (function (t, e, n) {
                                var i = document.createElement("select");
                                i.classList.add("ql-" + e),
                                  n.forEach(function (t) {
                                    var e = document.createElement("option");
                                    !1 !== t
                                      ? e.setAttribute("value", t)
                                      : e.setAttribute("selected", "selected"),
                                      i.appendChild(e);
                                  }),
                                  t.appendChild(i);
                              })(n, e, i)
                            : f(n, e, i);
                        }
                      }),
                      t.appendChild(n);
                  });
              }
              (h.DEFAULTS = {}),
                (h.DEFAULTS = {
                  container: null,
                  handlers: {
                    clean: function () {
                      var t = this,
                        e = this.quill.getSelection();
                      if (null != e)
                        if (0 == e.length) {
                          var n = this.quill.getFormat();
                          Object.keys(n).forEach(function (e) {
                            null !=
                              a.default.query(e, a.default.Scope.INLINE) &&
                              t.quill.format(e, !1);
                          });
                        } else
                          this.quill.removeFormat(e, s.default.sources.USER);
                    },
                    direction: function (t) {
                      var e = this.quill.getFormat().align;
                      "rtl" === t && null == e
                        ? this.quill.format(
                            "align",
                            "right",
                            s.default.sources.USER
                          )
                        : t ||
                          "right" !== e ||
                          this.quill.format(
                            "align",
                            !1,
                            s.default.sources.USER
                          ),
                        this.quill.format(
                          "direction",
                          t,
                          s.default.sources.USER
                        );
                    },
                    indent: function (t) {
                      var e = this.quill.getSelection(),
                        n = this.quill.getFormat(e),
                        i = parseInt(n.indent || 0);
                      if ("+1" === t || "-1" === t) {
                        var r = "+1" === t ? 1 : -1;
                        "rtl" === n.direction && (r *= -1),
                          this.quill.format(
                            "indent",
                            i + r,
                            s.default.sources.USER
                          );
                      }
                    },
                    link: function (t) {
                      !0 === t && (t = prompt("Enter link URL:")),
                        this.quill.format("link", t, s.default.sources.USER);
                    },
                    list: function (t) {
                      var e = this.quill.getSelection(),
                        n = this.quill.getFormat(e);
                      "check" === t
                        ? "checked" === n.list || "unchecked" === n.list
                          ? this.quill.format(
                              "list",
                              !1,
                              s.default.sources.USER
                            )
                          : this.quill.format(
                              "list",
                              "unchecked",
                              s.default.sources.USER
                            )
                        : this.quill.format("list", t, s.default.sources.USER);
                    },
                  },
                }),
                (e.default = h),
                (e.addControls = b);
            },
            function (t, e) {
              t.exports =
                '<svg viewbox="0 0 18 18"> <polyline class="ql-even ql-stroke" points="5 7 3 9 5 11"></polyline> <polyline class="ql-even ql-stroke" points="13 7 15 9 13 11"></polyline> <line class=ql-stroke x1=10 x2=8 y1=5 y2=13></line> </svg>';
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
                a = (function (t) {
                  function e(t, n) {
                    !(function (t, e) {
                      if (!(t instanceof e))
                        throw new TypeError(
                          "Cannot call a class as a function"
                        );
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
                      (i.label.innerHTML = n),
                      i.container.classList.add("ql-color-picker"),
                      [].slice
                        .call(
                          i.container.querySelectorAll(".ql-picker-item"),
                          0,
                          7
                        )
                        .forEach(function (t) {
                          t.classList.add("ql-primary");
                        }),
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
                        key: "buildItem",
                        value: function (t) {
                          var n = o(
                            e.prototype.__proto__ ||
                              Object.getPrototypeOf(e.prototype),
                            "buildItem",
                            this
                          ).call(this, t);
                          return (
                            (n.style.backgroundColor =
                              t.getAttribute("value") || ""),
                            n
                          );
                        },
                      },
                      {
                        key: "selectItem",
                        value: function (t, n) {
                          o(
                            e.prototype.__proto__ ||
                              Object.getPrototypeOf(e.prototype),
                            "selectItem",
                            this
                          ).call(this, t, n);
                          var i = this.label.querySelector(".ql-color-label"),
                            r = (t && t.getAttribute("data-value")) || "";
                          i &&
                            ("line" === i.tagName
                              ? (i.style.stroke = r)
                              : (i.style.fill = r));
                        },
                      },
                    ]),
                    e
                  );
                })(((i = n(28)) && i.__esModule ? i : { default: i }).default);
              e.default = a;
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
                })(),
                o = (function (t) {
                  function e(t, n) {
                    !(function (t, e) {
                      if (!(t instanceof e))
                        throw new TypeError(
                          "Cannot call a class as a function"
                        );
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
                      i.container.classList.add("ql-icon-picker"),
                      [].forEach.call(
                        i.container.querySelectorAll(".ql-picker-item"),
                        function (t) {
                          t.innerHTML = n[t.getAttribute("data-value") || ""];
                        }
                      ),
                      (i.defaultItem =
                        i.container.querySelector(".ql-selected")),
                      i.selectItem(i.defaultItem),
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
                        key: "selectItem",
                        value: function (t, n) {
                          (function t(e, n, i) {
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
                            "selectItem",
                            this
                          ).call(this, t, n),
                            (t = t || this.defaultItem),
                            (this.label.innerHTML = t.innerHTML);
                        },
                      },
                    ]),
                    e
                  );
                })(((i = n(28)) && i.__esModule ? i : { default: i }).default);
              e.default = o;
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
                r = (function () {
                  function t(e, n) {
                    var i = this;
                    !(function (t, e) {
                      if (!(t instanceof e))
                        throw new TypeError(
                          "Cannot call a class as a function"
                        );
                    })(this, t),
                      (this.quill = e),
                      (this.boundsContainer = n || document.body),
                      (this.root = e.addContainer("ql-tooltip")),
                      (this.root.innerHTML = this.constructor.TEMPLATE),
                      this.quill.root === this.quill.scrollingContainer &&
                        this.quill.root.addEventListener("scroll", function () {
                          i.root.style.marginTop =
                            -1 * i.quill.root.scrollTop + "px";
                        }),
                      this.hide();
                  }
                  return (
                    i(t, [
                      {
                        key: "hide",
                        value: function () {
                          this.root.classList.add("ql-hidden");
                        },
                      },
                      {
                        key: "position",
                        value: function (t) {
                          var e =
                              t.left + t.width / 2 - this.root.offsetWidth / 2,
                            n = t.bottom + this.quill.root.scrollTop;
                          (this.root.style.left = e + "px"),
                            (this.root.style.top = n + "px"),
                            this.root.classList.remove("ql-flip");
                          var i = this.boundsContainer.getBoundingClientRect(),
                            r = this.root.getBoundingClientRect(),
                            o = 0;
                          if (
                            (r.right > i.right &&
                              ((o = i.right - r.right),
                              (this.root.style.left = e + o + "px")),
                            r.left < i.left &&
                              ((o = i.left - r.left),
                              (this.root.style.left = e + o + "px")),
                            r.bottom > i.bottom)
                          ) {
                            var a = r.bottom - r.top,
                              s = t.bottom - t.top + a;
                            (this.root.style.top = n - s + "px"),
                              this.root.classList.add("ql-flip");
                          }
                          return o;
                        },
                      },
                      {
                        key: "show",
                        value: function () {
                          this.root.classList.remove("ql-editing"),
                            this.root.classList.remove("ql-hidden");
                        },
                      },
                    ]),
                    t
                  );
                })();
              e.default = r;
            },
            function (t, e, n) {
              "use strict";
              Object.defineProperty(e, "__esModule", { value: !0 });
              var i = function t(e, n, i) {
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
                o = p(n(3)),
                a = p(n(8)),
                s = n(43),
                l = p(s),
                c = p(n(27)),
                d = n(15),
                u = p(n(41));
              function p(t) {
                return t && t.__esModule ? t : { default: t };
              }
              function h(t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              }
              function f(t, e) {
                if (!t)
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                return !e || ("object" != typeof e && "function" != typeof e)
                  ? t
                  : e;
              }
              function b(t, e) {
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
              var m = [
                  [{ header: ["1", "2", "3", !1] }],
                  ["bold", "italic", "underline", "link"],
                  [{ list: "ordered" }, { list: "bullet" }],
                  ["clean"],
                ],
                g = (function (t) {
                  function e(t, n) {
                    h(this, e),
                      null != n.modules.toolbar &&
                        null == n.modules.toolbar.container &&
                        (n.modules.toolbar.container = m);
                    var i = f(
                      this,
                      (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n)
                    );
                    return i.quill.container.classList.add("ql-snow"), i;
                  }
                  return (
                    b(e, t),
                    r(e, [
                      {
                        key: "extendToolbar",
                        value: function (t) {
                          t.container.classList.add("ql-snow"),
                            this.buildButtons(
                              [].slice.call(
                                t.container.querySelectorAll("button")
                              ),
                              u.default
                            ),
                            this.buildPickers(
                              [].slice.call(
                                t.container.querySelectorAll("select")
                              ),
                              u.default
                            ),
                            (this.tooltip = new v(
                              this.quill,
                              this.options.bounds
                            )),
                            t.container.querySelector(".ql-link") &&
                              this.quill.keyboard.addBinding(
                                { key: "K", shortKey: !0 },
                                function (e, n) {
                                  t.handlers.link.call(t, !n.format.link);
                                }
                              );
                        },
                      },
                    ]),
                    e
                  );
                })(l.default);
              g.DEFAULTS = (0, o.default)(!0, {}, l.default.DEFAULTS, {
                modules: {
                  toolbar: {
                    handlers: {
                      link: function (t) {
                        if (t) {
                          var e = this.quill.getSelection();
                          if (null == e || 0 == e.length) return;
                          var n = this.quill.getText(e);
                          /^\S+@\S+\.\S+$/.test(n) &&
                            0 !== n.indexOf("mailto:") &&
                            (n = "mailto:" + n),
                            this.quill.theme.tooltip.edit("link", n);
                        } else this.quill.format("link", !1);
                      },
                    },
                  },
                },
              });
              var v = (function (t) {
                function e(t, n) {
                  h(this, e);
                  var i = f(
                    this,
                    (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n)
                  );
                  return (i.preview = i.root.querySelector("a.ql-preview")), i;
                }
                return (
                  b(e, t),
                  r(e, [
                    {
                      key: "listen",
                      value: function () {
                        var t = this;
                        i(
                          e.prototype.__proto__ ||
                            Object.getPrototypeOf(e.prototype),
                          "listen",
                          this
                        ).call(this),
                          this.root
                            .querySelector("a.ql-action")
                            .addEventListener("click", function (e) {
                              t.root.classList.contains("ql-editing")
                                ? t.save()
                                : t.edit("link", t.preview.textContent),
                                e.preventDefault();
                            }),
                          this.root
                            .querySelector("a.ql-remove")
                            .addEventListener("click", function (e) {
                              if (null != t.linkRange) {
                                var n = t.linkRange;
                                t.restoreFocus(),
                                  t.quill.formatText(
                                    n,
                                    "link",
                                    !1,
                                    a.default.sources.USER
                                  ),
                                  delete t.linkRange;
                              }
                              e.preventDefault(), t.hide();
                            }),
                          this.quill.on(
                            a.default.events.SELECTION_CHANGE,
                            function (e, n, i) {
                              if (null != e) {
                                if (
                                  0 === e.length &&
                                  i === a.default.sources.USER
                                ) {
                                  var r = (function (t, e) {
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
                                              (n.push(a.value), 2 !== n.length);
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
                                        })(t);
                                      throw new TypeError(
                                        "Invalid attempt to destructure non-iterable instance"
                                      );
                                    })(
                                      t.quill.scroll.descendant(
                                        c.default,
                                        e.index
                                      )
                                    ),
                                    o = r[0],
                                    s = r[1];
                                  if (null != o) {
                                    t.linkRange = new d.Range(
                                      e.index - s,
                                      o.length()
                                    );
                                    var l = c.default.formats(o.domNode);
                                    return (
                                      (t.preview.textContent = l),
                                      t.preview.setAttribute("href", l),
                                      t.show(),
                                      void t.position(
                                        t.quill.getBounds(t.linkRange)
                                      )
                                    );
                                  }
                                } else delete t.linkRange;
                                t.hide();
                              }
                            }
                          );
                      },
                    },
                    {
                      key: "show",
                      value: function () {
                        i(
                          e.prototype.__proto__ ||
                            Object.getPrototypeOf(e.prototype),
                          "show",
                          this
                        ).call(this),
                          this.root.removeAttribute("data-mode");
                      },
                    },
                  ]),
                  e
                );
              })(s.BaseTooltip);
              (v.TEMPLATE = [
                '<a class="ql-preview" rel="noopener noreferrer" target="_blank" href="about:blank"></a>',
                '<input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL">',
                '<a class="ql-action"></a>',
                '<a class="ql-remove"></a>',
              ].join("")),
                (e.default = g);
            },
            function (t, e, n) {
              "use strict";
              Object.defineProperty(e, "__esModule", { value: !0 });
              var i = j(n(29)),
                r = n(36),
                o = n(38),
                a = n(64),
                s = j(n(65)),
                l = j(n(66)),
                c = n(67),
                d = j(c),
                u = n(37),
                p = n(26),
                h = n(39),
                f = n(40),
                b = j(n(56)),
                m = j(n(68)),
                g = j(n(27)),
                v = j(n(69)),
                _ = j(n(70)),
                y = j(n(71)),
                M = j(n(72)),
                O = j(n(73)),
                w = n(13),
                A = j(w),
                x = j(n(74)),
                z = j(n(75)),
                C = j(n(57)),
                k = j(n(41)),
                S = j(n(28)),
                T = j(n(59)),
                D = j(n(60)),
                L = j(n(61)),
                q = j(n(108)),
                E = j(n(62));
              function j(t) {
                return t && t.__esModule ? t : { default: t };
              }
              i.default.register(
                {
                  "attributors/attribute/direction": o.DirectionAttribute,
                  "attributors/class/align": r.AlignClass,
                  "attributors/class/background": u.BackgroundClass,
                  "attributors/class/color": p.ColorClass,
                  "attributors/class/direction": o.DirectionClass,
                  "attributors/class/font": h.FontClass,
                  "attributors/class/size": f.SizeClass,
                  "attributors/style/align": r.AlignStyle,
                  "attributors/style/background": u.BackgroundStyle,
                  "attributors/style/color": p.ColorStyle,
                  "attributors/style/direction": o.DirectionStyle,
                  "attributors/style/font": h.FontStyle,
                  "attributors/style/size": f.SizeStyle,
                },
                !0
              ),
                i.default.register(
                  {
                    "formats/align": r.AlignClass,
                    "formats/direction": o.DirectionClass,
                    "formats/indent": a.IndentClass,
                    "formats/background": u.BackgroundStyle,
                    "formats/color": p.ColorStyle,
                    "formats/font": h.FontClass,
                    "formats/size": f.SizeClass,
                    "formats/blockquote": s.default,
                    "formats/code-block": A.default,
                    "formats/header": l.default,
                    "formats/list": d.default,
                    "formats/bold": b.default,
                    "formats/code": w.Code,
                    "formats/italic": m.default,
                    "formats/link": g.default,
                    "formats/script": v.default,
                    "formats/strike": _.default,
                    "formats/underline": y.default,
                    "formats/image": M.default,
                    "formats/video": O.default,
                    "formats/list/item": c.ListItem,
                    "modules/formula": x.default,
                    "modules/syntax": z.default,
                    "modules/toolbar": C.default,
                    "themes/bubble": q.default,
                    "themes/snow": E.default,
                    "ui/icons": k.default,
                    "ui/picker": S.default,
                    "ui/icon-picker": D.default,
                    "ui/color-picker": T.default,
                    "ui/tooltip": L.default,
                  },
                  !0
                ),
                (e.default = i.default);
            },
            function (t, e, n) {
              "use strict";
              Object.defineProperty(e, "__esModule", { value: !0 }),
                (e.IndentClass = void 0);
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
                a = (i = n(0)) && i.__esModule ? i : { default: i };
              function s(t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              }
              function l(t, e) {
                if (!t)
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                return !e || ("object" != typeof e && "function" != typeof e)
                  ? t
                  : e;
              }
              var c = new ((function (t) {
                function e() {
                  return (
                    s(this, e),
                    l(
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
                  r(e, [
                    {
                      key: "add",
                      value: function (t, n) {
                        if ("+1" === n || "-1" === n) {
                          var i = this.value(t) || 0;
                          n = "+1" === n ? i + 1 : i - 1;
                        }
                        return 0 === n
                          ? (this.remove(t), !0)
                          : o(
                              e.prototype.__proto__ ||
                                Object.getPrototypeOf(e.prototype),
                              "add",
                              this
                            ).call(this, t, n);
                      },
                    },
                    {
                      key: "canAdd",
                      value: function (t, n) {
                        return (
                          o(
                            e.prototype.__proto__ ||
                              Object.getPrototypeOf(e.prototype),
                            "canAdd",
                            this
                          ).call(this, t, n) ||
                          o(
                            e.prototype.__proto__ ||
                              Object.getPrototypeOf(e.prototype),
                            "canAdd",
                            this
                          ).call(this, t, parseInt(n))
                        );
                      },
                    },
                    {
                      key: "value",
                      value: function (t) {
                        return (
                          parseInt(
                            o(
                              e.prototype.__proto__ ||
                                Object.getPrototypeOf(e.prototype),
                              "value",
                              this
                            ).call(this, t)
                          ) || void 0
                        );
                      },
                    },
                  ]),
                  e
                );
              })(a.default.Attributor.Class))("indent", "ql-indent", {
                scope: a.default.Scope.BLOCK,
                whitelist: [1, 2, 3, 4, 5, 6, 7, 8],
              });
              e.IndentClass = c;
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
              })(((i = n(4)) && i.__esModule ? i : { default: i }).default);
              (a.blotName = "blockquote"),
                (a.tagName = "blockquote"),
                (e.default = a);
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
                  r(e, null, [
                    {
                      key: "formats",
                      value: function (t) {
                        return this.tagName.indexOf(t.tagName) + 1;
                      },
                    },
                  ]),
                  e
                );
              })(((i = n(4)) && i.__esModule ? i : { default: i }).default);
              (s.blotName = "header"),
                (s.tagName = ["H1", "H2", "H3", "H4", "H5", "H6"]),
                (e.default = s);
            },
            function (t, e, n) {
              "use strict";
              Object.defineProperty(e, "__esModule", { value: !0 }),
                (e.default = e.ListItem = void 0);
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
                o = l(n(0)),
                a = l(n(4)),
                s = l(n(25));
              function l(t) {
                return t && t.__esModule ? t : { default: t };
              }
              function c(t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              }
              function d(t, e) {
                if (!t)
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                return !e || ("object" != typeof e && "function" != typeof e)
                  ? t
                  : e;
              }
              function u(t, e) {
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
              var p = (function (t) {
                function e() {
                  return (
                    c(this, e),
                    d(
                      this,
                      (e.__proto__ || Object.getPrototypeOf(e)).apply(
                        this,
                        arguments
                      )
                    )
                  );
                }
                return (
                  u(e, t),
                  i(
                    e,
                    [
                      {
                        key: "format",
                        value: function (t, n) {
                          t !== h.blotName || n
                            ? r(
                                e.prototype.__proto__ ||
                                  Object.getPrototypeOf(e.prototype),
                                "format",
                                this
                              ).call(this, t, n)
                            : this.replaceWith(
                                o.default.create(this.statics.scope)
                              );
                        },
                      },
                      {
                        key: "remove",
                        value: function () {
                          null == this.prev && null == this.next
                            ? this.parent.remove()
                            : r(
                                e.prototype.__proto__ ||
                                  Object.getPrototypeOf(e.prototype),
                                "remove",
                                this
                              ).call(this);
                        },
                      },
                      {
                        key: "replaceWith",
                        value: function (t, n) {
                          return (
                            this.parent.isolate(
                              this.offset(this.parent),
                              this.length()
                            ),
                            t === this.parent.statics.blotName
                              ? (this.parent.replaceWith(t, n), this)
                              : (this.parent.unwrap(),
                                r(
                                  e.prototype.__proto__ ||
                                    Object.getPrototypeOf(e.prototype),
                                  "replaceWith",
                                  this
                                ).call(this, t, n))
                          );
                        },
                      },
                    ],
                    [
                      {
                        key: "formats",
                        value: function (t) {
                          return t.tagName === this.tagName
                            ? void 0
                            : r(
                                e.__proto__ || Object.getPrototypeOf(e),
                                "formats",
                                this
                              ).call(this, t);
                        },
                      },
                    ]
                  ),
                  e
                );
              })(a.default);
              (p.blotName = "list-item"), (p.tagName = "LI");
              var h = (function (t) {
                function e(t) {
                  c(this, e);
                  var n = d(
                      this,
                      (e.__proto__ || Object.getPrototypeOf(e)).call(this, t)
                    ),
                    i = function (e) {
                      if (e.target.parentNode === t) {
                        var i = n.statics.formats(t),
                          r = o.default.find(e.target);
                        "checked" === i
                          ? r.format("list", "unchecked")
                          : "unchecked" === i && r.format("list", "checked");
                      }
                    };
                  return (
                    t.addEventListener("touchstart", i),
                    t.addEventListener("mousedown", i),
                    n
                  );
                }
                return (
                  u(e, t),
                  i(e, null, [
                    {
                      key: "create",
                      value: function (t) {
                        var n = "ordered" === t ? "OL" : "UL",
                          i = r(
                            e.__proto__ || Object.getPrototypeOf(e),
                            "create",
                            this
                          ).call(this, n);
                        return (
                          ("checked" !== t && "unchecked" !== t) ||
                            i.setAttribute("data-checked", "checked" === t),
                          i
                        );
                      },
                    },
                    {
                      key: "formats",
                      value: function (t) {
                        return "OL" === t.tagName
                          ? "ordered"
                          : "UL" === t.tagName
                          ? t.hasAttribute("data-checked")
                            ? "true" === t.getAttribute("data-checked")
                              ? "checked"
                              : "unchecked"
                            : "bullet"
                          : void 0;
                      },
                    },
                  ]),
                  i(e, [
                    {
                      key: "format",
                      value: function (t, e) {
                        this.children.length > 0 &&
                          this.children.tail.format(t, e);
                      },
                    },
                    {
                      key: "formats",
                      value: function () {
                        return (
                          (t = {}),
                          (e = this.statics.blotName),
                          (n = this.statics.formats(this.domNode)),
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
                        var t, e, n;
                      },
                    },
                    {
                      key: "insertBefore",
                      value: function (t, n) {
                        if (t instanceof p)
                          r(
                            e.prototype.__proto__ ||
                              Object.getPrototypeOf(e.prototype),
                            "insertBefore",
                            this
                          ).call(this, t, n);
                        else {
                          var i = null == n ? this.length() : n.offset(this),
                            o = this.split(i);
                          o.parent.insertBefore(t, o);
                        }
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
                        ).call(this, t);
                        var n = this.next;
                        null != n &&
                          n.prev === this &&
                          n.statics.blotName === this.statics.blotName &&
                          n.domNode.tagName === this.domNode.tagName &&
                          n.domNode.getAttribute("data-checked") ===
                            this.domNode.getAttribute("data-checked") &&
                          (n.moveChildren(this), n.remove());
                      },
                    },
                    {
                      key: "replace",
                      value: function (t) {
                        if (t.statics.blotName !== this.statics.blotName) {
                          var n = o.default.create(this.statics.defaultChild);
                          t.moveChildren(n), this.appendChild(n);
                        }
                        r(
                          e.prototype.__proto__ ||
                            Object.getPrototypeOf(e.prototype),
                          "replace",
                          this
                        ).call(this, t);
                      },
                    },
                  ]),
                  e
                );
              })(s.default);
              (h.blotName = "list"),
                (h.scope = o.default.Scope.BLOCK_BLOT),
                (h.tagName = ["OL", "UL"]),
                (h.defaultChild = "list-item"),
                (h.allowedChildren = [p]),
                (e.ListItem = p),
                (e.default = h);
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
              })(((i = n(56)) && i.__esModule ? i : { default: i }).default);
              (a.blotName = "italic"),
                (a.tagName = ["EM", "I"]),
                (e.default = a);
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
                  r(e, null, [
                    {
                      key: "create",
                      value: function (t) {
                        return "super" === t
                          ? document.createElement("sup")
                          : "sub" === t
                          ? document.createElement("sub")
                          : (function t(e, n, i) {
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
                              e.__proto__ || Object.getPrototypeOf(e),
                              "create",
                              this
                            ).call(this, t);
                      },
                    },
                    {
                      key: "formats",
                      value: function (t) {
                        return "SUB" === t.tagName
                          ? "sub"
                          : "SUP" === t.tagName
                          ? "super"
                          : void 0;
                      },
                    },
                  ]),
                  e
                );
              })(((i = n(6)) && i.__esModule ? i : { default: i }).default);
              (s.blotName = "script"),
                (s.tagName = ["SUB", "SUP"]),
                (e.default = s);
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
              })(((i = n(6)) && i.__esModule ? i : { default: i }).default);
              (a.blotName = "strike"), (a.tagName = "S"), (e.default = a);
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
              })(((i = n(6)) && i.__esModule ? i : { default: i }).default);
              (a.blotName = "underline"), (a.tagName = "U"), (e.default = a);
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
                a = (i = n(0)) && i.__esModule ? i : { default: i },
                s = n(27);
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
              var d = ["alt", "height", "width"],
                u = (function (t) {
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
                    r(
                      e,
                      [
                        {
                          key: "format",
                          value: function (t, n) {
                            d.indexOf(t) > -1
                              ? n
                                ? this.domNode.setAttribute(t, n)
                                : this.domNode.removeAttribute(t)
                              : o(
                                  e.prototype.__proto__ ||
                                    Object.getPrototypeOf(e.prototype),
                                  "format",
                                  this
                                ).call(this, t, n);
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
                            return (
                              "string" == typeof t &&
                                n.setAttribute("src", this.sanitize(t)),
                              n
                            );
                          },
                        },
                        {
                          key: "formats",
                          value: function (t) {
                            return d.reduce(function (e, n) {
                              return (
                                t.hasAttribute(n) && (e[n] = t.getAttribute(n)),
                                e
                              );
                            }, {});
                          },
                        },
                        {
                          key: "match",
                          value: function (t) {
                            return (
                              /\.(jpe?g|gif|png)$/.test(t) ||
                              /^data:image\/.+;base64/.test(t)
                            );
                          },
                        },
                        {
                          key: "sanitize",
                          value: function (t) {
                            return (0, s.sanitize)(t, ["http", "https", "data"])
                              ? t
                              : "//:0";
                          },
                        },
                        {
                          key: "value",
                          value: function (t) {
                            return t.getAttribute("src");
                          },
                        },
                      ]
                    ),
                    e
                  );
                })(a.default.Embed);
              (u.blotName = "image"), (u.tagName = "IMG"), (e.default = u);
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
                a = n(4),
                s = (i = n(27)) && i.__esModule ? i : { default: i };
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
              var d = ["height", "width"],
                u = (function (t) {
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
                    r(
                      e,
                      [
                        {
                          key: "format",
                          value: function (t, n) {
                            d.indexOf(t) > -1
                              ? n
                                ? this.domNode.setAttribute(t, n)
                                : this.domNode.removeAttribute(t)
                              : o(
                                  e.prototype.__proto__ ||
                                    Object.getPrototypeOf(e.prototype),
                                  "format",
                                  this
                                ).call(this, t, n);
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
                            return (
                              n.setAttribute("frameborder", "0"),
                              n.setAttribute("allowfullscreen", !0),
                              n.setAttribute("src", this.sanitize(t)),
                              n
                            );
                          },
                        },
                        {
                          key: "formats",
                          value: function (t) {
                            return d.reduce(function (e, n) {
                              return (
                                t.hasAttribute(n) && (e[n] = t.getAttribute(n)),
                                e
                              );
                            }, {});
                          },
                        },
                        {
                          key: "sanitize",
                          value: function (t) {
                            return s.default.sanitize(t);
                          },
                        },
                        {
                          key: "value",
                          value: function (t) {
                            return t.getAttribute("src");
                          },
                        },
                      ]
                    ),
                    e
                  );
                })(a.BlockEmbed);
              (u.blotName = "video"),
                (u.className = "ql-video"),
                (u.tagName = "IFRAME"),
                (e.default = u);
            },
            function (t, e, n) {
              "use strict";
              Object.defineProperty(e, "__esModule", { value: !0 }),
                (e.default = e.FormulaBlot = void 0);
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
                r = s(n(35)),
                o = s(n(5)),
                a = s(n(9));
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
              function d(t, e) {
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
              var u = (function (t) {
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
                  d(e, t),
                  i(e, null, [
                    {
                      key: "create",
                      value: function (t) {
                        var n = (function t(e, n, i) {
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
                          e.__proto__ || Object.getPrototypeOf(e),
                          "create",
                          this
                        ).call(this, t);
                        return (
                          "string" == typeof t &&
                            (window.katex.render(t, n, {
                              throwOnError: !1,
                              errorColor: "#f00",
                            }),
                            n.setAttribute("data-value", t)),
                          n
                        );
                      },
                    },
                    {
                      key: "value",
                      value: function (t) {
                        return t.getAttribute("data-value");
                      },
                    },
                  ]),
                  e
                );
              })(r.default);
              (u.blotName = "formula"),
                (u.className = "ql-formula"),
                (u.tagName = "SPAN");
              var p = (function (t) {
                function e() {
                  l(this, e);
                  var t = c(
                    this,
                    (e.__proto__ || Object.getPrototypeOf(e)).call(this)
                  );
                  if (null == window.katex)
                    throw new Error("Formula module requires KaTeX.");
                  return t;
                }
                return (
                  d(e, t),
                  i(e, null, [
                    {
                      key: "register",
                      value: function () {
                        o.default.register(u, !0);
                      },
                    },
                  ]),
                  e
                );
              })(a.default);
              (e.FormulaBlot = u), (e.default = p);
            },
            function (t, e, n) {
              "use strict";
              Object.defineProperty(e, "__esModule", { value: !0 }),
                (e.default = e.CodeToken = e.CodeBlock = void 0);
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
                r = s(n(0)),
                o = s(n(5)),
                a = s(n(9));
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
              function d(t, e) {
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
              var u = (function (t) {
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
                  d(e, t),
                  i(e, [
                    {
                      key: "replaceWith",
                      value: function (t) {
                        (this.domNode.textContent = this.domNode.textContent),
                          this.attach(),
                          (function t(e, n, i) {
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
                            "replaceWith",
                            this
                          ).call(this, t);
                      },
                    },
                    {
                      key: "highlight",
                      value: function (t) {
                        var e = this.domNode.textContent;
                        this.cachedText !== e &&
                          ((e.trim().length > 0 || null == this.cachedText) &&
                            ((this.domNode.innerHTML = t(e)),
                            this.domNode.normalize(),
                            this.attach()),
                          (this.cachedText = e));
                      },
                    },
                  ]),
                  e
                );
              })(s(n(13)).default);
              u.className = "ql-syntax";
              var p = new r.default.Attributor.Class("token", "hljs", {
                  scope: r.default.Scope.INLINE,
                }),
                h = (function (t) {
                  function e(t, n) {
                    l(this, e);
                    var i = c(
                      this,
                      (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n)
                    );
                    if ("function" != typeof i.options.highlight)
                      throw new Error(
                        "Syntax module requires highlight.js. Please include the library on the page before Quill."
                      );
                    var r = null;
                    return (
                      i.quill.on(o.default.events.SCROLL_OPTIMIZE, function () {
                        clearTimeout(r),
                          (r = setTimeout(function () {
                            i.highlight(), (r = null);
                          }, i.options.interval));
                      }),
                      i.highlight(),
                      i
                    );
                  }
                  return (
                    d(e, t),
                    i(e, null, [
                      {
                        key: "register",
                        value: function () {
                          o.default.register(p, !0), o.default.register(u, !0);
                        },
                      },
                    ]),
                    i(e, [
                      {
                        key: "highlight",
                        value: function () {
                          var t = this;
                          if (!this.quill.selection.composing) {
                            this.quill.update(o.default.sources.USER);
                            var e = this.quill.getSelection();
                            this.quill.scroll
                              .descendants(u)
                              .forEach(function (e) {
                                e.highlight(t.options.highlight);
                              }),
                              this.quill.update(o.default.sources.SILENT),
                              null != e &&
                                this.quill.setSelection(
                                  e,
                                  o.default.sources.SILENT
                                );
                          }
                        },
                      },
                    ]),
                    e
                  );
                })(a.default);
              (h.DEFAULTS = {
                highlight:
                  null == window.hljs
                    ? null
                    : function (t) {
                        return window.hljs.highlightAuto(t).value;
                      },
                interval: 1e3,
              }),
                (e.CodeBlock = u),
                (e.CodeToken = p),
                (e.default = h);
            },
            function (t, e) {
              t.exports =
                '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=3 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=3 x2=13 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=9 y1=4 y2=4></line> </svg>';
            },
            function (t, e) {
              t.exports =
                '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=14 x2=4 y1=14 y2=14></line> <line class=ql-stroke x1=12 x2=6 y1=4 y2=4></line> </svg>';
            },
            function (t, e) {
              t.exports =
                '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=15 x2=5 y1=14 y2=14></line> <line class=ql-stroke x1=15 x2=9 y1=4 y2=4></line> </svg>';
            },
            function (t, e) {
              t.exports =
                '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=15 x2=3 y1=14 y2=14></line> <line class=ql-stroke x1=15 x2=3 y1=4 y2=4></line> </svg>';
            },
            function (t, e) {
              t.exports =
                '<svg viewbox="0 0 18 18"> <g class="ql-fill ql-color-label"> <polygon points="6 6.868 6 6 5 6 5 7 5.942 7 6 6.868"></polygon> <rect height=1 width=1 x=4 y=4></rect> <polygon points="6.817 5 6 5 6 6 6.38 6 6.817 5"></polygon> <rect height=1 width=1 x=2 y=6></rect> <rect height=1 width=1 x=3 y=5></rect> <rect height=1 width=1 x=4 y=7></rect> <polygon points="4 11.439 4 11 3 11 3 12 3.755 12 4 11.439"></polygon> <rect height=1 width=1 x=2 y=12></rect> <rect height=1 width=1 x=2 y=9></rect> <rect height=1 width=1 x=2 y=15></rect> <polygon points="4.63 10 4 10 4 11 4.192 11 4.63 10"></polygon> <rect height=1 width=1 x=3 y=8></rect> <path d=M10.832,4.2L11,4.582V4H10.708A1.948,1.948,0,0,1,10.832,4.2Z></path> <path d=M7,4.582L7.168,4.2A1.929,1.929,0,0,1,7.292,4H7V4.582Z></path> <path d=M8,13H7.683l-0.351.8a1.933,1.933,0,0,1-.124.2H8V13Z></path> <rect height=1 width=1 x=12 y=2></rect> <rect height=1 width=1 x=11 y=3></rect> <path d=M9,3H8V3.282A1.985,1.985,0,0,1,9,3Z></path> <rect height=1 width=1 x=2 y=3></rect> <rect height=1 width=1 x=6 y=2></rect> <rect height=1 width=1 x=3 y=2></rect> <rect height=1 width=1 x=5 y=3></rect> <rect height=1 width=1 x=9 y=2></rect> <rect height=1 width=1 x=15 y=14></rect> <polygon points="13.447 10.174 13.469 10.225 13.472 10.232 13.808 11 14 11 14 10 13.37 10 13.447 10.174"></polygon> <rect height=1 width=1 x=13 y=7></rect> <rect height=1 width=1 x=15 y=5></rect> <rect height=1 width=1 x=14 y=6></rect> <rect height=1 width=1 x=15 y=8></rect> <rect height=1 width=1 x=14 y=9></rect> <path d=M3.775,14H3v1H4V14.314A1.97,1.97,0,0,1,3.775,14Z></path> <rect height=1 width=1 x=14 y=3></rect> <polygon points="12 6.868 12 6 11.62 6 12 6.868"></polygon> <rect height=1 width=1 x=15 y=2></rect> <rect height=1 width=1 x=12 y=5></rect> <rect height=1 width=1 x=13 y=4></rect> <polygon points="12.933 9 13 9 13 8 12.495 8 12.933 9"></polygon> <rect height=1 width=1 x=9 y=14></rect> <rect height=1 width=1 x=8 y=15></rect> <path d=M6,14.926V15H7V14.316A1.993,1.993,0,0,1,6,14.926Z></path> <rect height=1 width=1 x=5 y=15></rect> <path d=M10.668,13.8L10.317,13H10v1h0.792A1.947,1.947,0,0,1,10.668,13.8Z></path> <rect height=1 width=1 x=11 y=15></rect> <path d=M14.332,12.2a1.99,1.99,0,0,1,.166.8H15V12H14.245Z></path> <rect height=1 width=1 x=14 y=15></rect> <rect height=1 width=1 x=15 y=11></rect> </g> <polyline class=ql-stroke points="5.5 13 9 5 12.5 13"></polyline> <line class=ql-stroke x1=11.63 x2=6.38 y1=11 y2=11></line> </svg>';
            },
            function (t, e) {
              t.exports =
                '<svg viewbox="0 0 18 18"> <rect class="ql-fill ql-stroke" height=3 width=3 x=4 y=5></rect> <rect class="ql-fill ql-stroke" height=3 width=3 x=11 y=5></rect> <path class="ql-even ql-fill ql-stroke" d=M7,8c0,4.031-3,5-3,5></path> <path class="ql-even ql-fill ql-stroke" d=M14,8c0,4.031-3,5-3,5></path> </svg>';
            },
            function (t, e) {
              t.exports =
                '<svg viewbox="0 0 18 18"> <path class=ql-stroke d=M5,4H9.5A2.5,2.5,0,0,1,12,6.5v0A2.5,2.5,0,0,1,9.5,9H5A0,0,0,0,1,5,9V4A0,0,0,0,1,5,4Z></path> <path class=ql-stroke d=M5,9h5.5A2.5,2.5,0,0,1,13,11.5v0A2.5,2.5,0,0,1,10.5,14H5a0,0,0,0,1,0,0V9A0,0,0,0,1,5,9Z></path> </svg>';
            },
            function (t, e) {
              t.exports =
                '<svg class="" viewbox="0 0 18 18"> <line class=ql-stroke x1=5 x2=13 y1=3 y2=3></line> <line class=ql-stroke x1=6 x2=9.35 y1=12 y2=3></line> <line class=ql-stroke x1=11 x2=15 y1=11 y2=15></line> <line class=ql-stroke x1=15 x2=11 y1=11 y2=15></line> <rect class=ql-fill height=1 rx=0.5 ry=0.5 width=7 x=2 y=14></rect> </svg>';
            },
            function (t, e) {
              t.exports =
                '<svg viewbox="0 0 18 18"> <line class="ql-color-label ql-stroke ql-transparent" x1=3 x2=15 y1=15 y2=15></line> <polyline class=ql-stroke points="5.5 11 9 3 12.5 11"></polyline> <line class=ql-stroke x1=11.63 x2=6.38 y1=9 y2=9></line> </svg>';
            },
            function (t, e) {
              t.exports =
                '<svg viewbox="0 0 18 18"> <polygon class="ql-stroke ql-fill" points="3 11 5 9 3 7 3 11"></polygon> <line class="ql-stroke ql-fill" x1=15 x2=11 y1=4 y2=4></line> <path class=ql-fill d=M11,3a3,3,0,0,0,0,6h1V3H11Z></path> <rect class=ql-fill height=11 width=1 x=11 y=4></rect> <rect class=ql-fill height=11 width=1 x=13 y=4></rect> </svg>';
            },
            function (t, e) {
              t.exports =
                '<svg viewbox="0 0 18 18"> <polygon class="ql-stroke ql-fill" points="15 12 13 10 15 8 15 12"></polygon> <line class="ql-stroke ql-fill" x1=9 x2=5 y1=4 y2=4></line> <path class=ql-fill d=M5,3A3,3,0,0,0,5,9H6V3H5Z></path> <rect class=ql-fill height=11 width=1 x=5 y=4></rect> <rect class=ql-fill height=11 width=1 x=7 y=4></rect> </svg>';
            },
            function (t, e) {
              t.exports =
                '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M14,16H4a1,1,0,0,1,0-2H14A1,1,0,0,1,14,16Z /> <path class=ql-fill d=M14,4H4A1,1,0,0,1,4,2H14A1,1,0,0,1,14,4Z /> <rect class=ql-fill x=3 y=6 width=12 height=6 rx=1 ry=1 /> </svg>';
            },
            function (t, e) {
              t.exports =
                '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M13,16H5a1,1,0,0,1,0-2h8A1,1,0,0,1,13,16Z /> <path class=ql-fill d=M13,4H5A1,1,0,0,1,5,2h8A1,1,0,0,1,13,4Z /> <rect class=ql-fill x=2 y=6 width=14 height=6 rx=1 ry=1 /> </svg>';
            },
            function (t, e) {
              t.exports =
                '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M15,8H13a1,1,0,0,1,0-2h2A1,1,0,0,1,15,8Z /> <path class=ql-fill d=M15,12H13a1,1,0,0,1,0-2h2A1,1,0,0,1,15,12Z /> <path class=ql-fill d=M15,16H5a1,1,0,0,1,0-2H15A1,1,0,0,1,15,16Z /> <path class=ql-fill d=M15,4H5A1,1,0,0,1,5,2H15A1,1,0,0,1,15,4Z /> <rect class=ql-fill x=2 y=6 width=8 height=6 rx=1 ry=1 /> </svg>';
            },
            function (t, e) {
              t.exports =
                '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M5,8H3A1,1,0,0,1,3,6H5A1,1,0,0,1,5,8Z /> <path class=ql-fill d=M5,12H3a1,1,0,0,1,0-2H5A1,1,0,0,1,5,12Z /> <path class=ql-fill d=M13,16H3a1,1,0,0,1,0-2H13A1,1,0,0,1,13,16Z /> <path class=ql-fill d=M13,4H3A1,1,0,0,1,3,2H13A1,1,0,0,1,13,4Z /> <rect class=ql-fill x=8 y=6 width=8 height=6 rx=1 ry=1 transform="translate(24 18) rotate(-180)"/> </svg>';
            },
            function (t, e) {
              t.exports =
                '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M11.759,2.482a2.561,2.561,0,0,0-3.53.607A7.656,7.656,0,0,0,6.8,6.2C6.109,9.188,5.275,14.677,4.15,14.927a1.545,1.545,0,0,0-1.3-.933A0.922,0.922,0,0,0,2,15.036S1.954,16,4.119,16s3.091-2.691,3.7-5.553c0.177-.826.36-1.726,0.554-2.6L8.775,6.2c0.381-1.421.807-2.521,1.306-2.676a1.014,1.014,0,0,0,1.02.56A0.966,0.966,0,0,0,11.759,2.482Z></path> <rect class=ql-fill height=1.6 rx=0.8 ry=0.8 width=5 x=5.15 y=6.2></rect> <path class=ql-fill d=M13.663,12.027a1.662,1.662,0,0,1,.266-0.276q0.193,0.069.456,0.138a2.1,2.1,0,0,0,.535.069,1.075,1.075,0,0,0,.767-0.3,1.044,1.044,0,0,0,.314-0.8,0.84,0.84,0,0,0-.238-0.619,0.8,0.8,0,0,0-.594-0.239,1.154,1.154,0,0,0-.781.3,4.607,4.607,0,0,0-.781,1q-0.091.15-.218,0.346l-0.246.38c-0.068-.288-0.137-0.582-0.212-0.885-0.459-1.847-2.494-.984-2.941-0.8-0.482.2-.353,0.647-0.094,0.529a0.869,0.869,0,0,1,1.281.585c0.217,0.751.377,1.436,0.527,2.038a5.688,5.688,0,0,1-.362.467,2.69,2.69,0,0,1-.264.271q-0.221-.08-0.471-0.147a2.029,2.029,0,0,0-.522-0.066,1.079,1.079,0,0,0-.768.3A1.058,1.058,0,0,0,9,15.131a0.82,0.82,0,0,0,.832.852,1.134,1.134,0,0,0,.787-0.3,5.11,5.11,0,0,0,.776-0.993q0.141-.219.215-0.34c0.046-.076.122-0.194,0.223-0.346a2.786,2.786,0,0,0,.918,1.726,2.582,2.582,0,0,0,2.376-.185c0.317-.181.212-0.565,0-0.494A0.807,0.807,0,0,1,14.176,15a5.159,5.159,0,0,1-.913-2.446l0,0Q13.487,12.24,13.663,12.027Z></path> </svg>';
            },
            function (t, e) {
              t.exports =
                '<svg viewBox="0 0 18 18"> <path class=ql-fill d=M10,4V14a1,1,0,0,1-2,0V10H3v4a1,1,0,0,1-2,0V4A1,1,0,0,1,3,4V8H8V4a1,1,0,0,1,2,0Zm6.06787,9.209H14.98975V7.59863a.54085.54085,0,0,0-.605-.60547h-.62744a1.01119,1.01119,0,0,0-.748.29688L11.645,8.56641a.5435.5435,0,0,0-.022.8584l.28613.30762a.53861.53861,0,0,0,.84717.0332l.09912-.08789a1.2137,1.2137,0,0,0,.2417-.35254h.02246s-.01123.30859-.01123.60547V13.209H12.041a.54085.54085,0,0,0-.605.60547v.43945a.54085.54085,0,0,0,.605.60547h4.02686a.54085.54085,0,0,0,.605-.60547v-.43945A.54085.54085,0,0,0,16.06787,13.209Z /> </svg>';
            },
            function (t, e) {
              t.exports =
                '<svg viewBox="0 0 18 18"> <path class=ql-fill d=M16.73975,13.81445v.43945a.54085.54085,0,0,1-.605.60547H11.855a.58392.58392,0,0,1-.64893-.60547V14.0127c0-2.90527,3.39941-3.42187,3.39941-4.55469a.77675.77675,0,0,0-.84717-.78125,1.17684,1.17684,0,0,0-.83594.38477c-.2749.26367-.561.374-.85791.13184l-.4292-.34082c-.30811-.24219-.38525-.51758-.1543-.81445a2.97155,2.97155,0,0,1,2.45361-1.17676,2.45393,2.45393,0,0,1,2.68408,2.40918c0,2.45312-3.1792,2.92676-3.27832,3.93848h2.79443A.54085.54085,0,0,1,16.73975,13.81445ZM9,3A.99974.99974,0,0,0,8,4V8H3V4A1,1,0,0,0,1,4V14a1,1,0,0,0,2,0V10H8v4a1,1,0,0,0,2,0V4A.99974.99974,0,0,0,9,3Z /> </svg>';
            },
            function (t, e) {
              t.exports =
                '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=7 x2=13 y1=4 y2=4></line> <line class=ql-stroke x1=5 x2=11 y1=14 y2=14></line> <line class=ql-stroke x1=8 x2=10 y1=14 y2=4></line> </svg>';
            },
            function (t, e) {
              t.exports =
                '<svg viewbox="0 0 18 18"> <rect class=ql-stroke height=10 width=12 x=3 y=4></rect> <circle class=ql-fill cx=6 cy=7 r=1></circle> <polyline class="ql-even ql-fill" points="5 12 5 11 7 9 8 10 11 7 13 9 13 12 5 12"></polyline> </svg>';
            },
            function (t, e) {
              t.exports =
                '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=3 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class="ql-fill ql-stroke" points="3 7 3 11 5 9 3 7"></polyline> </svg>';
            },
            function (t, e) {
              t.exports =
                '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=3 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class=ql-stroke points="5 7 5 11 3 9 5 7"></polyline> </svg>';
            },
            function (t, e) {
              t.exports =
                '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=7 x2=11 y1=7 y2=11></line> <path class="ql-even ql-stroke" d=M8.9,4.577a3.476,3.476,0,0,1,.36,4.679A3.476,3.476,0,0,1,4.577,8.9C3.185,7.5,2.035,6.4,4.217,4.217S7.5,3.185,8.9,4.577Z></path> <path class="ql-even ql-stroke" d=M13.423,9.1a3.476,3.476,0,0,0-4.679-.36,3.476,3.476,0,0,0,.36,4.679c1.392,1.392,2.5,2.542,4.679.36S14.815,10.5,13.423,9.1Z></path> </svg>';
            },
            function (t, e) {
              t.exports =
                '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=7 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=7 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=7 x2=15 y1=14 y2=14></line> <line class="ql-stroke ql-thin" x1=2.5 x2=4.5 y1=5.5 y2=5.5></line> <path class=ql-fill d=M3.5,6A0.5,0.5,0,0,1,3,5.5V3.085l-0.276.138A0.5,0.5,0,0,1,2.053,3c-0.124-.247-0.023-0.324.224-0.447l1-.5A0.5,0.5,0,0,1,4,2.5v3A0.5,0.5,0,0,1,3.5,6Z></path> <path class="ql-stroke ql-thin" d=M4.5,10.5h-2c0-.234,1.85-1.076,1.85-2.234A0.959,0.959,0,0,0,2.5,8.156></path> <path class="ql-stroke ql-thin" d=M2.5,14.846a0.959,0.959,0,0,0,1.85-.109A0.7,0.7,0,0,0,3.75,14a0.688,0.688,0,0,0,.6-0.736,0.959,0.959,0,0,0-1.85-.109></path> </svg>';
            },
            function (t, e) {
              t.exports =
                '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=6 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=6 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=6 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=3 y1=4 y2=4></line> <line class=ql-stroke x1=3 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=3 x2=3 y1=14 y2=14></line> </svg>';
            },
            function (t, e) {
              t.exports =
                '<svg class="" viewbox="0 0 18 18"> <line class=ql-stroke x1=9 x2=15 y1=4 y2=4></line> <polyline class=ql-stroke points="3 4 4 5 6 3"></polyline> <line class=ql-stroke x1=9 x2=15 y1=14 y2=14></line> <polyline class=ql-stroke points="3 14 4 15 6 13"></polyline> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class=ql-stroke points="3 9 4 10 6 8"></polyline> </svg>';
            },
            function (t, e) {
              t.exports =
                '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M15.5,15H13.861a3.858,3.858,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.921,1.921,0,0,0,12.021,11.7a0.50013,0.50013,0,1,0,.957.291h0a0.914,0.914,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.076-1.16971,1.86982-1.93971,2.43082A1.45639,1.45639,0,0,0,12,15.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,15Z /> <path class=ql-fill d=M9.65,5.241a1,1,0,0,0-1.409.108L6,7.964,3.759,5.349A1,1,0,0,0,2.192,6.59178Q2.21541,6.6213,2.241,6.649L4.684,9.5,2.241,12.35A1,1,0,0,0,3.71,13.70722q0.02557-.02768.049-0.05722L6,11.036,8.241,13.65a1,1,0,1,0,1.567-1.24277Q9.78459,12.3777,9.759,12.35L7.316,9.5,9.759,6.651A1,1,0,0,0,9.65,5.241Z /> </svg>';
            },
            function (t, e) {
              t.exports =
                '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M15.5,7H13.861a4.015,4.015,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.922,1.922,0,0,0,12.021,3.7a0.5,0.5,0,1,0,.957.291,0.917,0.917,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.077-1.164,1.925-1.934,2.486A1.423,1.423,0,0,0,12,7.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,7Z /> <path class=ql-fill d=M9.651,5.241a1,1,0,0,0-1.41.108L6,7.964,3.759,5.349a1,1,0,1,0-1.519,1.3L4.683,9.5,2.241,12.35a1,1,0,1,0,1.519,1.3L6,11.036,8.241,13.65a1,1,0,0,0,1.519-1.3L7.317,9.5,9.759,6.651A1,1,0,0,0,9.651,5.241Z /> </svg>';
            },
            function (t, e) {
              t.exports =
                '<svg viewbox="0 0 18 18"> <line class="ql-stroke ql-thin" x1=15.5 x2=2.5 y1=8.5 y2=9.5></line> <path class=ql-fill d=M9.007,8C6.542,7.791,6,7.519,6,6.5,6,5.792,7.283,5,9,5c1.571,0,2.765.679,2.969,1.309a1,1,0,0,0,1.9-.617C13.356,4.106,11.354,3,9,3,6.2,3,4,4.538,4,6.5a3.2,3.2,0,0,0,.5,1.843Z></path> <path class=ql-fill d=M8.984,10C11.457,10.208,12,10.479,12,11.5c0,0.708-1.283,1.5-3,1.5-1.571,0-2.765-.679-2.969-1.309a1,1,0,1,0-1.9.617C4.644,13.894,6.646,15,9,15c2.8,0,5-1.538,5-3.5a3.2,3.2,0,0,0-.5-1.843Z></path> </svg>';
            },
            function (t, e) {
              t.exports =
                '<svg viewbox="0 0 18 18"> <path class=ql-stroke d=M5,3V9a4.012,4.012,0,0,0,4,4H9a4.012,4.012,0,0,0,4-4V3></path> <rect class=ql-fill height=1 rx=0.5 ry=0.5 width=12 x=3 y=15></rect> </svg>';
            },
            function (t, e) {
              t.exports =
                '<svg viewbox="0 0 18 18"> <rect class=ql-stroke height=12 width=12 x=3 y=3></rect> <rect class=ql-fill height=12 width=1 x=5 y=3></rect> <rect class=ql-fill height=12 width=1 x=12 y=3></rect> <rect class=ql-fill height=2 width=8 x=5 y=8></rect> <rect class=ql-fill height=1 width=3 x=3 y=5></rect> <rect class=ql-fill height=1 width=3 x=3 y=7></rect> <rect class=ql-fill height=1 width=3 x=3 y=10></rect> <rect class=ql-fill height=1 width=3 x=3 y=12></rect> <rect class=ql-fill height=1 width=3 x=12 y=5></rect> <rect class=ql-fill height=1 width=3 x=12 y=7></rect> <rect class=ql-fill height=1 width=3 x=12 y=10></rect> <rect class=ql-fill height=1 width=3 x=12 y=12></rect> </svg>';
            },
            function (t, e) {
              t.exports =
                '<svg viewbox="0 0 18 18"> <polygon class=ql-stroke points="7 11 9 13 11 11 7 11"></polygon> <polygon class=ql-stroke points="7 7 9 5 11 7 7 7"></polygon> </svg>';
            },
            function (t, e, n) {
              "use strict";
              Object.defineProperty(e, "__esModule", { value: !0 }),
                (e.default = e.BubbleTooltip = void 0);
              var i = function t(e, n, i) {
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
                o = u(n(3)),
                a = u(n(8)),
                s = n(43),
                l = u(s),
                c = n(15),
                d = u(n(41));
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
              var b = [
                  ["bold", "italic", "link"],
                  [{ header: 1 }, { header: 2 }, "blockquote"],
                ],
                m = (function (t) {
                  function e(t, n) {
                    p(this, e),
                      null != n.modules.toolbar &&
                        null == n.modules.toolbar.container &&
                        (n.modules.toolbar.container = b);
                    var i = h(
                      this,
                      (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n)
                    );
                    return i.quill.container.classList.add("ql-bubble"), i;
                  }
                  return (
                    f(e, t),
                    r(e, [
                      {
                        key: "extendToolbar",
                        value: function (t) {
                          (this.tooltip = new g(
                            this.quill,
                            this.options.bounds
                          )),
                            this.tooltip.root.appendChild(t.container),
                            this.buildButtons(
                              [].slice.call(
                                t.container.querySelectorAll("button")
                              ),
                              d.default
                            ),
                            this.buildPickers(
                              [].slice.call(
                                t.container.querySelectorAll("select")
                              ),
                              d.default
                            );
                        },
                      },
                    ]),
                    e
                  );
                })(l.default);
              m.DEFAULTS = (0, o.default)(!0, {}, l.default.DEFAULTS, {
                modules: {
                  toolbar: {
                    handlers: {
                      link: function (t) {
                        t
                          ? this.quill.theme.tooltip.edit()
                          : this.quill.format("link", !1);
                      },
                    },
                  },
                },
              });
              var g = (function (t) {
                function e(t, n) {
                  p(this, e);
                  var i = h(
                    this,
                    (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n)
                  );
                  return (
                    i.quill.on(
                      a.default.events.EDITOR_CHANGE,
                      function (t, e, n, r) {
                        if (t === a.default.events.SELECTION_CHANGE)
                          if (
                            null != e &&
                            e.length > 0 &&
                            r === a.default.sources.USER
                          ) {
                            i.show(),
                              (i.root.style.left = "0px"),
                              (i.root.style.width = ""),
                              (i.root.style.width = i.root.offsetWidth + "px");
                            var o = i.quill.getLines(e.index, e.length);
                            if (1 === o.length)
                              i.position(i.quill.getBounds(e));
                            else {
                              var s = o[o.length - 1],
                                l = i.quill.getIndex(s),
                                d = Math.min(
                                  s.length() - 1,
                                  e.index + e.length - l
                                ),
                                u = i.quill.getBounds(new c.Range(l, d));
                              i.position(u);
                            }
                          } else
                            document.activeElement !== i.textbox &&
                              i.quill.hasFocus() &&
                              i.hide();
                      }
                    ),
                    i
                  );
                }
                return (
                  f(e, t),
                  r(e, [
                    {
                      key: "listen",
                      value: function () {
                        var t = this;
                        i(
                          e.prototype.__proto__ ||
                            Object.getPrototypeOf(e.prototype),
                          "listen",
                          this
                        ).call(this),
                          this.root
                            .querySelector(".ql-close")
                            .addEventListener("click", function () {
                              t.root.classList.remove("ql-editing");
                            }),
                          this.quill.on(
                            a.default.events.SCROLL_OPTIMIZE,
                            function () {
                              setTimeout(function () {
                                if (!t.root.classList.contains("ql-hidden")) {
                                  var e = t.quill.getSelection();
                                  null != e && t.position(t.quill.getBounds(e));
                                }
                              }, 1);
                            }
                          );
                      },
                    },
                    {
                      key: "cancel",
                      value: function () {
                        this.show();
                      },
                    },
                    {
                      key: "position",
                      value: function (t) {
                        var n = i(
                            e.prototype.__proto__ ||
                              Object.getPrototypeOf(e.prototype),
                            "position",
                            this
                          ).call(this, t),
                          r = this.root.querySelector(".ql-tooltip-arrow");
                        if (((r.style.marginLeft = ""), 0 === n)) return n;
                        r.style.marginLeft = -1 * n - r.offsetWidth / 2 + "px";
                      },
                    },
                  ]),
                  e
                );
              })(s.BaseTooltip);
              (g.TEMPLATE = [
                '<span class="ql-tooltip-arrow"></span>',
                '<div class="ql-tooltip-editor">',
                '<input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL">',
                '<a class="ql-close"></a>',
                "</div>",
              ].join("")),
                (e.BubbleTooltip = g),
                (e.default = m);
            },
            function (t, e, n) {
              t.exports = n(63);
            },
          ]).default;
        }),
        (t.exports = n());
    }).call(this, n(192).Buffer);
  },
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  function (t, e, n) {
    "use strict";
    var i = n(350).a,
      r = (n(637), n(15)),
      o = Object(r.a)(
        i,
        function () {
          var t = this,
            e = t._self._c;
          return e(
            "div",
            [
              t.customFormModal
                ? e(
                    t.useModal ? "b-modal" : "div",
                    {
                      tag: "component",
                      attrs: {
                        "no-close-on-esc": "",
                        "no-close-on-backdrop": "",
                        id: "custom-form-modal",
                        centered: "",
                        size: "xl",
                        "body-class": "pt-0",
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
                                  e("span", {
                                    staticStyle: { width: "100%" },
                                    domProps: { innerHTML: t._s(t.formTitle) },
                                  }),
                                  t._v(" "),
                                  e(
                                    "button",
                                    {
                                      staticClass: "close",
                                      attrs: {
                                        type: "button",
                                        "aria-label": "Close",
                                      },
                                      on: { click: t.closeModal },
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
                        2316217664
                      ),
                      model: {
                        value: t.customFormModal,
                        callback: function (e) {
                          t.customFormModal = e;
                        },
                        expression: "customFormModal",
                      },
                    },
                    [
                      t._v(" "),
                      e(
                        "div",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: t.overlay,
                              expression: "overlay",
                            },
                          ],
                          staticClass: "page-loader-section",
                        },
                        [e("loader-component-2")],
                        1
                      ),
                      t._v(" "),
                      e(
                        "form",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: !t.overlay,
                              expression: "!overlay",
                            },
                          ],
                          attrs: { id: "customFormDataForm", novalidate: !0 },
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
                          t.useModal
                            ? t._e()
                            : e("span", {
                                staticStyle: { width: "100%" },
                                domProps: { innerHTML: t._s(t.formTitle) },
                              }),
                          t._v(" "),
                          e(
                            "div",
                            { staticClass: "row" },
                            t._l(t.data.fields, function (n, i) {
                              return e(
                                "div",
                                {
                                  key: i,
                                  class: ["hr", "heading"].includes(n.type.id)
                                    ? "col-md-12 "
                                    : "col-md-6 ",
                                },
                                [
                                  e(
                                    "div",
                                    { staticClass: "form-group" },
                                    [
                                      ["heading", "hr"].includes(n.type.id)
                                        ? t._e()
                                        : e(
                                            "label",
                                            { attrs: { for: n.name } },
                                            [
                                              t._v(
                                                "\n                        " +
                                                  t._s(n.label)
                                              ),
                                              e(
                                                "span",
                                                { staticClass: "text-danger" },
                                                [
                                                  t._v(
                                                    t._s(
                                                      n.is_required &&
                                                        ["1", "true"].includes(
                                                          n.is_required.toString()
                                                        )
                                                        ? "*"
                                                        : ""
                                                    )
                                                  ),
                                                ]
                                              ),
                                            ]
                                          ),
                                      t._v(" "),
                                      "checkbox" !== n.type.id ||
                                      ("text" !== n.type.id &&
                                        "number" !== n.type.id)
                                        ? "radio" !== n.type.id ||
                                          ("text" !== n.type.id &&
                                            "number" !== n.type.id)
                                          ? "text" === n.type.id ||
                                            "number" === n.type.id
                                            ? e("input", {
                                                directives: [
                                                  {
                                                    name: "model",
                                                    rawName: "v-model",
                                                    value: t.formData[n.name],
                                                    expression:
                                                      "formData[field.name]",
                                                  },
                                                ],
                                                staticClass: "form-control",
                                                class: n.class,
                                                attrs: {
                                                  id: n.name,
                                                  placeholder: n.placeholder,
                                                  disabled: t.viewMode,
                                                  type: n.type.id,
                                                },
                                                domProps: {
                                                  value: t.formData[n.name],
                                                },
                                                on: {
                                                  input: function (e) {
                                                    e.target.composing ||
                                                      t.$set(
                                                        t.formData,
                                                        n.name,
                                                        e.target.value
                                                      );
                                                  },
                                                },
                                              })
                                            : "heading" === n.type.id
                                            ? e(
                                                "div",
                                                [
                                                  e(
                                                    n.tag ? n.tag : "h2",
                                                    {
                                                      tag: "component",
                                                      class: n.class,
                                                    },
                                                    [t._v(t._s(n.label))]
                                                  ),
                                                ],
                                                1
                                              )
                                            : "hr" === n.type.id
                                            ? e("div", [
                                                e("hr", { class: n.class }),
                                              ])
                                            : "file_upload" === n.type.id
                                            ? e("div", [
                                                e(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "input-group kivi-choose-file flex-nowrap",
                                                  },
                                                  [
                                                    e(
                                                      "div",
                                                      {
                                                        staticClass:
                                                          "input-group-prepend flex-shrink-0",
                                                      },
                                                      [
                                                        e(
                                                          "button",
                                                          {
                                                            staticClass:
                                                              "btn btn-primary px-2",
                                                            class: n.class,
                                                            attrs: {
                                                              disabled:
                                                                t.viewMode,
                                                              type: "button",
                                                              id: n.name,
                                                            },
                                                            on: {
                                                              click: function (
                                                                e
                                                              ) {
                                                                return (
                                                                  e.preventDefault(),
                                                                  t.fileUpload(
                                                                    n
                                                                  )
                                                                );
                                                              },
                                                            },
                                                          },
                                                          [
                                                            t._v(
                                                              t._s(
                                                                t
                                                                  .formTranslation
                                                                  .common
                                                                  .choose_file
                                                              )
                                                            ),
                                                          ]
                                                        ),
                                                      ]
                                                    ),
                                                    t._v(" "),
                                                    e(
                                                      "label",
                                                      {
                                                        staticClass:
                                                          "input-group-text",
                                                        attrs: { for: n.name },
                                                      },
                                                      [
                                                        e(
                                                          "a",
                                                          {
                                                            staticClass:
                                                              "text-primary m-1",
                                                            attrs: {
                                                              id:
                                                                "custom_field_" +
                                                                n.name +
                                                                "_file_upload",
                                                              href:
                                                                t.formData[
                                                                  n.name
                                                                ] &&
                                                                t.formData[
                                                                  n.name
                                                                ].url
                                                                  ? t.formData[
                                                                      n.name
                                                                    ].url
                                                                  : "",
                                                              target: "_blank",
                                                            },
                                                          },
                                                          [
                                                            t._v(
                                                              "\n                          " +
                                                                t._s(
                                                                  t.formData[
                                                                    n.name
                                                                  ] &&
                                                                    t.formData[
                                                                      n.name
                                                                    ].name
                                                                    ? t
                                                                        .formData[
                                                                        n.name
                                                                      ].name
                                                                    : t
                                                                        .formTranslation
                                                                        .common
                                                                        .no_file_chosen
                                                                ) +
                                                                "\n                        "
                                                            ),
                                                          ]
                                                        ),
                                                      ]
                                                    ),
                                                  ]
                                                ),
                                              ])
                                            : "select" === n.type.id
                                            ? e(
                                                "b-select",
                                                {
                                                  staticClass:
                                                    "form-control text-capitalize",
                                                  class: n.class,
                                                  attrs: {
                                                    id: n.name,
                                                    disabled: t.viewMode,
                                                  },
                                                  model: {
                                                    value: t.formData[n.name],
                                                    callback: function (e) {
                                                      t.$set(
                                                        t.formData,
                                                        n.name,
                                                        e
                                                      );
                                                    },
                                                    expression:
                                                      "formData[field.name]",
                                                  },
                                                },
                                                [
                                                  e(
                                                    "option",
                                                    { attrs: { value: "" } },
                                                    [
                                                      t._v(
                                                        " " +
                                                          t._s(
                                                            t.formTranslation
                                                              .common
                                                              .select_option
                                                          ) +
                                                          " "
                                                      ),
                                                    ]
                                                  ),
                                                  t._v(" "),
                                                  t._l(
                                                    n.options,
                                                    function (n, i) {
                                                      return e(
                                                        "option",
                                                        {
                                                          key: i,
                                                          domProps: {
                                                            value: n.id,
                                                          },
                                                        },
                                                        [t._v(t._s(n.text))]
                                                      );
                                                    }
                                                  ),
                                                ],
                                                2
                                              )
                                            : "radio" === n.type.id
                                            ? e(
                                                "div",
                                                t._l(
                                                  n.options,
                                                  function (i, r) {
                                                    return e(
                                                      "div",
                                                      {
                                                        key: r,
                                                        staticClass:
                                                          "custom-control custom-radio custom-control-inline",
                                                      },
                                                      [
                                                        e("input", {
                                                          directives: [
                                                            {
                                                              name: "model",
                                                              rawName:
                                                                "v-model",
                                                              value:
                                                                t.formData[
                                                                  n.name
                                                                ],
                                                              expression:
                                                                "formData[field.name]",
                                                            },
                                                          ],
                                                          staticClass:
                                                            "custom-control-input",
                                                          class: n.class,
                                                          attrs: {
                                                            type: "radio",
                                                            id:
                                                              n.name + "_" + r,
                                                            disabled:
                                                              t.viewMode,
                                                            name: n.name,
                                                          },
                                                          domProps: {
                                                            value:
                                                              i.text.replace(
                                                                " ",
                                                                "-"
                                                              ),
                                                            checked: t._q(
                                                              t.formData[
                                                                n.name
                                                              ],
                                                              i.text.replace(
                                                                " ",
                                                                "-"
                                                              )
                                                            ),
                                                          },
                                                          on: {
                                                            change: function (
                                                              e
                                                            ) {
                                                              t.$set(
                                                                t.formData,
                                                                n.name,
                                                                i.text.replace(
                                                                  " ",
                                                                  "-"
                                                                )
                                                              );
                                                            },
                                                          },
                                                        }),
                                                        t._v(" "),
                                                        e(
                                                          "label",
                                                          {
                                                            staticClass:
                                                              "custom-control-label",
                                                            attrs: {
                                                              for:
                                                                n.name +
                                                                "_" +
                                                                r,
                                                            },
                                                          },
                                                          [t._v(t._s(i.text))]
                                                        ),
                                                      ]
                                                    );
                                                  }
                                                ),
                                                0
                                              )
                                            : "checkbox" === n.type.id
                                            ? e(
                                                "div",
                                                [
                                                  e(
                                                    "b-form-checkbox-group",
                                                    {
                                                      class: n.class,
                                                      attrs: {
                                                        id: n.name,
                                                        disabled: t.viewMode,
                                                      },
                                                      model: {
                                                        value:
                                                          t.formData[n.name],
                                                        callback: function (e) {
                                                          t.$set(
                                                            t.formData,
                                                            n.name,
                                                            e
                                                          );
                                                        },
                                                        expression:
                                                          "formData[field.name]",
                                                      },
                                                    },
                                                    t._l(
                                                      n.options,
                                                      function (n, i) {
                                                        return e(
                                                          "b-form-checkbox",
                                                          {
                                                            key: i,
                                                            attrs: {
                                                              value: n.id,
                                                            },
                                                          },
                                                          [t._v(t._s(n.text))]
                                                        );
                                                      }
                                                    ),
                                                    1
                                                  ),
                                                ],
                                                1
                                              )
                                            : "calendar" === n.type.id
                                            ? e("div", [
                                                e("input", {
                                                  directives: [
                                                    {
                                                      name: "model",
                                                      rawName: "v-model",
                                                      value: t.formData[n.name],
                                                      expression:
                                                        "formData[field.name]",
                                                    },
                                                  ],
                                                  class: n.class,
                                                  attrs: {
                                                    type: "date",
                                                    id: "doc_birthdate",
                                                    disabled: t.viewMode,
                                                  },
                                                  domProps: {
                                                    value: t.formData[n.name],
                                                  },
                                                  on: {
                                                    input: function (e) {
                                                      e.target.composing ||
                                                        t.$set(
                                                          t.formData,
                                                          n.name,
                                                          e.target.value
                                                        );
                                                    },
                                                  },
                                                }),
                                              ])
                                            : "textarea" === n.type.id
                                            ? e("textarea", {
                                                directives: [
                                                  {
                                                    name: "model",
                                                    rawName: "v-model",
                                                    value: t.formData[n.name],
                                                    expression:
                                                      "formData[field.name]",
                                                  },
                                                ],
                                                staticClass: "form-control",
                                                class: n.class,
                                                attrs: {
                                                  id: n.name,
                                                  placeholder: n.placeholder,
                                                  disabled: t.viewMode,
                                                },
                                                domProps: {
                                                  value: t.formData[n.name],
                                                },
                                                on: {
                                                  input: function (e) {
                                                    e.target.composing ||
                                                      t.$set(
                                                        t.formData,
                                                        n.name,
                                                        e.target.value
                                                      );
                                                  },
                                                },
                                              })
                                            : "multi_select" === n.type.id
                                            ? e("multi-select", {
                                                class: n.class,
                                                attrs: {
                                                  id: n.name + "_" + i,
                                                  placeholder: n.placeholder,
                                                  name: "custom_field_" + n.id,
                                                  label: "text",
                                                  "track-by": "id",
                                                  options: n.options,
                                                  multiple: !0,
                                                  disabled: t.viewMode,
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
                                                                t
                                                                  .formTranslation
                                                                  .common
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
                                                  !0
                                                ),
                                                model: {
                                                  value: t.formData[n.name],
                                                  callback: function (e) {
                                                    t.$set(
                                                      t.formData,
                                                      n.name,
                                                      e
                                                    );
                                                  },
                                                  expression:
                                                    "formData[field.name]",
                                                },
                                              })
                                            : t._e()
                                          : e("input", {
                                              directives: [
                                                {
                                                  name: "model",
                                                  rawName: "v-model",
                                                  value: t.formData[n.name],
                                                  expression:
                                                    "formData[field.name]",
                                                },
                                              ],
                                              staticClass: "form-control",
                                              class: n.class,
                                              attrs: {
                                                id: n.name,
                                                placeholder: n.placeholder,
                                                disabled: t.viewMode,
                                                type: "radio",
                                              },
                                              domProps: {
                                                checked: t._q(
                                                  t.formData[n.name],
                                                  null
                                                ),
                                              },
                                              on: {
                                                change: function (e) {
                                                  return t.$set(
                                                    t.formData,
                                                    n.name,
                                                    null
                                                  );
                                                },
                                              },
                                            })
                                        : e("input", {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value: t.formData[n.name],
                                                expression:
                                                  "formData[field.name]",
                                              },
                                            ],
                                            staticClass: "form-control",
                                            class: n.class,
                                            attrs: {
                                              id: n.name,
                                              placeholder: n.placeholder,
                                              disabled: t.viewMode,
                                              type: "checkbox",
                                            },
                                            domProps: {
                                              checked: Array.isArray(
                                                t.formData[n.name]
                                              )
                                                ? t._i(
                                                    t.formData[n.name],
                                                    null
                                                  ) > -1
                                                : t.formData[n.name],
                                            },
                                            on: {
                                              change: function (e) {
                                                var i = t.formData[n.name],
                                                  r = e.target,
                                                  o = !!r.checked;
                                                if (Array.isArray(i)) {
                                                  var a = t._i(i, null);
                                                  r.checked
                                                    ? a < 0 &&
                                                      t.$set(
                                                        t.formData,
                                                        n.name,
                                                        i.concat([null])
                                                      )
                                                    : a > -1 &&
                                                      t.$set(
                                                        t.formData,
                                                        n.name,
                                                        i
                                                          .slice(0, a)
                                                          .concat(
                                                            i.slice(a + 1)
                                                          )
                                                      );
                                                } else
                                                  t.$set(t.formData, n.name, o);
                                              },
                                            },
                                          }),
                                      t._v(" "),
                                      n.is_required &&
                                      ["1", "true"].includes(
                                        n.is_required.toString()
                                      ) &&
                                      !["hr", "heading"].includes(n.type.id)
                                        ? e(
                                            "div",
                                            {
                                              staticClass:
                                                "invalid-feedback-new d-none",
                                              attrs: {
                                                id:
                                                  n.name + "_invalid-feedback",
                                              },
                                            },
                                            [
                                              t._v(
                                                " " +
                                                  t._s(
                                                    n.label +
                                                      " " +
                                                      t.formTranslation.common
                                                        .required
                                                  )
                                              ),
                                            ]
                                          )
                                        : t._e(),
                                    ],
                                    1
                                  ),
                                ]
                              );
                            }),
                            0
                          ),
                          t._v(" "),
                          e("div", { staticClass: "row mt-2" }, [
                            e(
                              "div",
                              {
                                staticClass:
                                  "col-12 d-flex justify-content-end align-items-center",
                              },
                              [
                                t.viewMode
                                  ? t._e()
                                  : e("div", { staticClass: "mr-2" }, [
                                      t.formLoading
                                        ? e(
                                            "button",
                                            {
                                              staticClass: "btn btn-primary",
                                              attrs: {
                                                type: "submit",
                                                disabled: "",
                                              },
                                            },
                                            [
                                              e("i", {
                                                staticClass:
                                                  "fa fa-sync fa-spin",
                                              }),
                                              t._v(
                                                "  " +
                                                  t._s(
                                                    t.formTranslation.common
                                                      .loading
                                                  ) +
                                                  "\n                    "
                                              ),
                                            ]
                                          )
                                        : e(
                                            "button",
                                            {
                                              staticClass:
                                                "btn btn-primary rtl-ml-2",
                                              attrs: { type: "submit" },
                                            },
                                            [
                                              e("i", {
                                                staticClass: "fa fa-save",
                                              }),
                                              t._v(
                                                " " +
                                                  t._s(
                                                    t.formTranslation.common
                                                      .save
                                                  ) +
                                                  "\n                    "
                                              ),
                                            ]
                                          ),
                                    ]),
                                t._v(" "),
                                e(
                                  "button",
                                  {
                                    staticClass: "btn btn-outline-danger",
                                    attrs: { type: "button" },
                                    on: { click: t.closeModal },
                                  },
                                  [
                                    t._v(
                                      " " +
                                        t._s(t.formTranslation.common.cancel)
                                    ),
                                  ]
                                ),
                              ]
                            ),
                          ]),
                        ]
                      ),
                    ]
                  )
                : t._e(),
            ],
            1
          );
        },
        [],
        !1,
        null,
        "6eef988a",
        null
      );
    e.a = o.exports;
  },
  ,
  function (t, e, n) {
    "use strict";
    n.d(e, "a", function () {
      return r;
    });
    var i = n(7),
      r = function (t) {
        var e = Object(i.c)(null);
        return function () {
          for (var n = arguments.length, i = new Array(n), r = 0; r < n; r++)
            i[r] = arguments[r];
          var o = JSON.stringify(i);
          return (e[o] = e[o] || t.apply(null, i));
        };
      };
  },
  function (t, e, n) {
    "use strict";
    (function (t) {
      n.d(e, "b", function () {
        return w;
      });
      var i = ("undefined" != typeof window ? window : void 0 !== t ? t : {})
        .__VUE_DEVTOOLS_GLOBAL_HOOK__;
      function r(t, e) {
        if ((void 0 === e && (e = []), null === t || "object" != typeof t))
          return t;
        var n,
          i =
            ((n = function (e) {
              return e.original === t;
            }),
            e.filter(n)[0]);
        if (i) return i.copy;
        var o = Array.isArray(t) ? [] : {};
        return (
          e.push({ original: t, copy: o }),
          Object.keys(t).forEach(function (n) {
            o[n] = r(t[n], e);
          }),
          o
        );
      }
      function o(t, e) {
        Object.keys(t).forEach(function (n) {
          return e(t[n], n);
        });
      }
      function a(t) {
        return null !== t && "object" == typeof t;
      }
      var s = function (t, e) {
          (this.runtime = e),
            (this._children = Object.create(null)),
            (this._rawModule = t);
          var n = t.state;
          this.state = ("function" == typeof n ? n() : n) || {};
        },
        l = { namespaced: { configurable: !0 } };
      (l.namespaced.get = function () {
        return !!this._rawModule.namespaced;
      }),
        (s.prototype.addChild = function (t, e) {
          this._children[t] = e;
        }),
        (s.prototype.removeChild = function (t) {
          delete this._children[t];
        }),
        (s.prototype.getChild = function (t) {
          return this._children[t];
        }),
        (s.prototype.hasChild = function (t) {
          return t in this._children;
        }),
        (s.prototype.update = function (t) {
          (this._rawModule.namespaced = t.namespaced),
            t.actions && (this._rawModule.actions = t.actions),
            t.mutations && (this._rawModule.mutations = t.mutations),
            t.getters && (this._rawModule.getters = t.getters);
        }),
        (s.prototype.forEachChild = function (t) {
          o(this._children, t);
        }),
        (s.prototype.forEachGetter = function (t) {
          this._rawModule.getters && o(this._rawModule.getters, t);
        }),
        (s.prototype.forEachAction = function (t) {
          this._rawModule.actions && o(this._rawModule.actions, t);
        }),
        (s.prototype.forEachMutation = function (t) {
          this._rawModule.mutations && o(this._rawModule.mutations, t);
        }),
        Object.defineProperties(s.prototype, l);
      var c,
        d = function (t) {
          this.register([], t, !1);
        };
      (d.prototype.get = function (t) {
        return t.reduce(function (t, e) {
          return t.getChild(e);
        }, this.root);
      }),
        (d.prototype.getNamespace = function (t) {
          var e = this.root;
          return t.reduce(function (t, n) {
            return t + ((e = e.getChild(n)).namespaced ? n + "/" : "");
          }, "");
        }),
        (d.prototype.update = function (t) {
          !(function t(e, n, i) {
            if ((n.update(i), i.modules))
              for (var r in i.modules) {
                if (!n.getChild(r)) return;
                t(e.concat(r), n.getChild(r), i.modules[r]);
              }
          })([], this.root, t);
        }),
        (d.prototype.register = function (t, e, n) {
          var i = this;
          void 0 === n && (n = !0);
          var r = new s(e, n);
          0 === t.length
            ? (this.root = r)
            : this.get(t.slice(0, -1)).addChild(t[t.length - 1], r),
            e.modules &&
              o(e.modules, function (e, r) {
                i.register(t.concat(r), e, n);
              });
        }),
        (d.prototype.unregister = function (t) {
          var e = this.get(t.slice(0, -1)),
            n = t[t.length - 1],
            i = e.getChild(n);
          i && i.runtime && e.removeChild(n);
        }),
        (d.prototype.isRegistered = function (t) {
          var e = this.get(t.slice(0, -1)),
            n = t[t.length - 1];
          return !!e && e.hasChild(n);
        });
      var u = function (t) {
          var e = this;
          void 0 === t && (t = {}),
            !c && "undefined" != typeof window && window.Vue && _(window.Vue);
          var n = t.plugins;
          void 0 === n && (n = []);
          var r = t.strict;
          void 0 === r && (r = !1),
            (this._committing = !1),
            (this._actions = Object.create(null)),
            (this._actionSubscribers = []),
            (this._mutations = Object.create(null)),
            (this._wrappedGetters = Object.create(null)),
            (this._modules = new d(t)),
            (this._modulesNamespaceMap = Object.create(null)),
            (this._subscribers = []),
            (this._watcherVM = new c()),
            (this._makeLocalGettersCache = Object.create(null));
          var o = this,
            a = this.dispatch,
            s = this.commit;
          (this.dispatch = function (t, e) {
            return a.call(o, t, e);
          }),
            (this.commit = function (t, e, n) {
              return s.call(o, t, e, n);
            }),
            (this.strict = r);
          var l = this._modules.root.state;
          m(this, l, [], this._modules.root),
            b(this, l),
            n.forEach(function (t) {
              return t(e);
            }),
            (void 0 !== t.devtools ? t.devtools : c.config.devtools) &&
              (function (t) {
                i &&
                  ((t._devtoolHook = i),
                  i.emit("vuex:init", t),
                  i.on("vuex:travel-to-state", function (e) {
                    t.replaceState(e);
                  }),
                  t.subscribe(
                    function (t, e) {
                      i.emit("vuex:mutation", t, e);
                    },
                    { prepend: !0 }
                  ),
                  t.subscribeAction(
                    function (t, e) {
                      i.emit("vuex:action", t, e);
                    },
                    { prepend: !0 }
                  ));
              })(this);
        },
        p = { state: { configurable: !0 } };
      function h(t, e, n) {
        return (
          e.indexOf(t) < 0 && (n && n.prepend ? e.unshift(t) : e.push(t)),
          function () {
            var n = e.indexOf(t);
            n > -1 && e.splice(n, 1);
          }
        );
      }
      function f(t, e) {
        (t._actions = Object.create(null)),
          (t._mutations = Object.create(null)),
          (t._wrappedGetters = Object.create(null)),
          (t._modulesNamespaceMap = Object.create(null));
        var n = t.state;
        m(t, n, [], t._modules.root, !0), b(t, n, e);
      }
      function b(t, e, n) {
        var i = t._vm;
        (t.getters = {}), (t._makeLocalGettersCache = Object.create(null));
        var r = t._wrappedGetters,
          a = {};
        o(r, function (e, n) {
          (a[n] = (function (t, e) {
            return function () {
              return t(e);
            };
          })(e, t)),
            Object.defineProperty(t.getters, n, {
              get: function () {
                return t._vm[n];
              },
              enumerable: !0,
            });
        });
        var s = c.config.silent;
        (c.config.silent = !0),
          (t._vm = new c({ data: { $$state: e }, computed: a })),
          (c.config.silent = s),
          t.strict &&
            (function (t) {
              t._vm.$watch(
                function () {
                  return this._data.$$state;
                },
                function () {},
                { deep: !0, sync: !0 }
              );
            })(t),
          i &&
            (n &&
              t._withCommit(function () {
                i._data.$$state = null;
              }),
            c.nextTick(function () {
              return i.$destroy();
            }));
      }
      function m(t, e, n, i, r) {
        var o = !n.length,
          a = t._modules.getNamespace(n);
        if (
          (i.namespaced &&
            (t._modulesNamespaceMap[a], (t._modulesNamespaceMap[a] = i)),
          !o && !r)
        ) {
          var s = g(e, n.slice(0, -1)),
            l = n[n.length - 1];
          t._withCommit(function () {
            c.set(s, l, i.state);
          });
        }
        var d = (i.context = (function (t, e, n) {
          var i = "" === e,
            r = {
              dispatch: i
                ? t.dispatch
                : function (n, i, r) {
                    var o = v(n, i, r),
                      a = o.payload,
                      s = o.options,
                      l = o.type;
                    return (s && s.root) || (l = e + l), t.dispatch(l, a);
                  },
              commit: i
                ? t.commit
                : function (n, i, r) {
                    var o = v(n, i, r),
                      a = o.payload,
                      s = o.options,
                      l = o.type;
                    (s && s.root) || (l = e + l), t.commit(l, a, s);
                  },
            };
          return (
            Object.defineProperties(r, {
              getters: {
                get: i
                  ? function () {
                      return t.getters;
                    }
                  : function () {
                      return (function (t, e) {
                        if (!t._makeLocalGettersCache[e]) {
                          var n = {},
                            i = e.length;
                          Object.keys(t.getters).forEach(function (r) {
                            if (r.slice(0, i) === e) {
                              var o = r.slice(i);
                              Object.defineProperty(n, o, {
                                get: function () {
                                  return t.getters[r];
                                },
                                enumerable: !0,
                              });
                            }
                          }),
                            (t._makeLocalGettersCache[e] = n);
                        }
                        return t._makeLocalGettersCache[e];
                      })(t, e);
                    },
              },
              state: {
                get: function () {
                  return g(t.state, n);
                },
              },
            }),
            r
          );
        })(t, a, n));
        i.forEachMutation(function (e, n) {
          !(function (t, e, n, i) {
            (t._mutations[e] || (t._mutations[e] = [])).push(function (e) {
              n.call(t, i.state, e);
            });
          })(t, a + n, e, d);
        }),
          i.forEachAction(function (e, n) {
            var i = e.root ? n : a + n,
              r = e.handler || e;
            !(function (t, e, n, i) {
              (t._actions[e] || (t._actions[e] = [])).push(function (e) {
                var r = n.call(
                  t,
                  {
                    dispatch: i.dispatch,
                    commit: i.commit,
                    getters: i.getters,
                    state: i.state,
                    rootGetters: t.getters,
                    rootState: t.state,
                  },
                  e
                );
                return (
                  (function (t) {
                    return t && "function" == typeof t.then;
                  })(r) || (r = Promise.resolve(r)),
                  t._devtoolHook
                    ? r.catch(function (e) {
                        throw (t._devtoolHook.emit("vuex:error", e), e);
                      })
                    : r
                );
              });
            })(t, i, r, d);
          }),
          i.forEachGetter(function (e, n) {
            !(function (t, e, n, i) {
              t._wrappedGetters[e] ||
                (t._wrappedGetters[e] = function (t) {
                  return n(i.state, i.getters, t.state, t.getters);
                });
            })(t, a + n, e, d);
          }),
          i.forEachChild(function (i, o) {
            m(t, e, n.concat(o), i, r);
          });
      }
      function g(t, e) {
        return e.reduce(function (t, e) {
          return t[e];
        }, t);
      }
      function v(t, e, n) {
        return (
          a(t) && t.type && ((n = e), (e = t), (t = t.type)),
          { type: t, payload: e, options: n }
        );
      }
      function _(t) {
        (c && t === c) ||
          (function (t) {
            if (Number(t.version.split(".")[0]) >= 2)
              t.mixin({ beforeCreate: n });
            else {
              var e = t.prototype._init;
              t.prototype._init = function (t) {
                void 0 === t && (t = {}),
                  (t.init = t.init ? [n].concat(t.init) : n),
                  e.call(this, t);
              };
            }
            function n() {
              var t = this.$options;
              t.store
                ? (this.$store =
                    "function" == typeof t.store ? t.store() : t.store)
                : t.parent &&
                  t.parent.$store &&
                  (this.$store = t.parent.$store);
            }
          })((c = t));
      }
      (p.state.get = function () {
        return this._vm._data.$$state;
      }),
        (p.state.set = function (t) {}),
        (u.prototype.commit = function (t, e, n) {
          var i = this,
            r = v(t, e, n),
            o = r.type,
            a = r.payload,
            s = (r.options, { type: o, payload: a }),
            l = this._mutations[o];
          l &&
            (this._withCommit(function () {
              l.forEach(function (t) {
                t(a);
              });
            }),
            this._subscribers.slice().forEach(function (t) {
              return t(s, i.state);
            }));
        }),
        (u.prototype.dispatch = function (t, e) {
          var n = this,
            i = v(t, e),
            r = i.type,
            o = i.payload,
            a = { type: r, payload: o },
            s = this._actions[r];
          if (s) {
            try {
              this._actionSubscribers
                .slice()
                .filter(function (t) {
                  return t.before;
                })
                .forEach(function (t) {
                  return t.before(a, n.state);
                });
            } catch (t) {}
            var l =
              s.length > 1
                ? Promise.all(
                    s.map(function (t) {
                      return t(o);
                    })
                  )
                : s[0](o);
            return new Promise(function (t, e) {
              l.then(
                function (e) {
                  try {
                    n._actionSubscribers
                      .filter(function (t) {
                        return t.after;
                      })
                      .forEach(function (t) {
                        return t.after(a, n.state);
                      });
                  } catch (t) {}
                  t(e);
                },
                function (t) {
                  try {
                    n._actionSubscribers
                      .filter(function (t) {
                        return t.error;
                      })
                      .forEach(function (e) {
                        return e.error(a, n.state, t);
                      });
                  } catch (t) {}
                  e(t);
                }
              );
            });
          }
        }),
        (u.prototype.subscribe = function (t, e) {
          return h(t, this._subscribers, e);
        }),
        (u.prototype.subscribeAction = function (t, e) {
          return h(
            "function" == typeof t ? { before: t } : t,
            this._actionSubscribers,
            e
          );
        }),
        (u.prototype.watch = function (t, e, n) {
          var i = this;
          return this._watcherVM.$watch(
            function () {
              return t(i.state, i.getters);
            },
            e,
            n
          );
        }),
        (u.prototype.replaceState = function (t) {
          var e = this;
          this._withCommit(function () {
            e._vm._data.$$state = t;
          });
        }),
        (u.prototype.registerModule = function (t, e, n) {
          void 0 === n && (n = {}),
            "string" == typeof t && (t = [t]),
            this._modules.register(t, e),
            m(this, this.state, t, this._modules.get(t), n.preserveState),
            b(this, this.state);
        }),
        (u.prototype.unregisterModule = function (t) {
          var e = this;
          "string" == typeof t && (t = [t]),
            this._modules.unregister(t),
            this._withCommit(function () {
              var n = g(e.state, t.slice(0, -1));
              c.delete(n, t[t.length - 1]);
            }),
            f(this);
        }),
        (u.prototype.hasModule = function (t) {
          return (
            "string" == typeof t && (t = [t]), this._modules.isRegistered(t)
          );
        }),
        (u.prototype.hotUpdate = function (t) {
          this._modules.update(t), f(this, !0);
        }),
        (u.prototype._withCommit = function (t) {
          var e = this._committing;
          (this._committing = !0), t(), (this._committing = e);
        }),
        Object.defineProperties(u.prototype, p);
      var y = x(function (t, e) {
          var n = {};
          return (
            A(e).forEach(function (e) {
              var i = e.key,
                r = e.val;
              (n[i] = function () {
                var e = this.$store.state,
                  n = this.$store.getters;
                if (t) {
                  var i = z(this.$store, "mapState", t);
                  if (!i) return;
                  (e = i.context.state), (n = i.context.getters);
                }
                return "function" == typeof r ? r.call(this, e, n) : e[r];
              }),
                (n[i].vuex = !0);
            }),
            n
          );
        }),
        M = x(function (t, e) {
          var n = {};
          return (
            A(e).forEach(function (e) {
              var i = e.key,
                r = e.val;
              n[i] = function () {
                for (var e = [], n = arguments.length; n--; )
                  e[n] = arguments[n];
                var i = this.$store.commit;
                if (t) {
                  var o = z(this.$store, "mapMutations", t);
                  if (!o) return;
                  i = o.context.commit;
                }
                return "function" == typeof r
                  ? r.apply(this, [i].concat(e))
                  : i.apply(this.$store, [r].concat(e));
              };
            }),
            n
          );
        }),
        O = x(function (t, e) {
          var n = {};
          return (
            A(e).forEach(function (e) {
              var i = e.key,
                r = e.val;
              (r = t + r),
                (n[i] = function () {
                  if (!t || z(this.$store, "mapGetters", t))
                    return this.$store.getters[r];
                }),
                (n[i].vuex = !0);
            }),
            n
          );
        }),
        w = x(function (t, e) {
          var n = {};
          return (
            A(e).forEach(function (e) {
              var i = e.key,
                r = e.val;
              n[i] = function () {
                for (var e = [], n = arguments.length; n--; )
                  e[n] = arguments[n];
                var i = this.$store.dispatch;
                if (t) {
                  var o = z(this.$store, "mapActions", t);
                  if (!o) return;
                  i = o.context.dispatch;
                }
                return "function" == typeof r
                  ? r.apply(this, [i].concat(e))
                  : i.apply(this.$store, [r].concat(e));
              };
            }),
            n
          );
        });
      function A(t) {
        return (function (t) {
          return Array.isArray(t) || a(t);
        })(t)
          ? Array.isArray(t)
            ? t.map(function (t) {
                return { key: t, val: t };
              })
            : Object.keys(t).map(function (e) {
                return { key: e, val: t[e] };
              })
          : [];
      }
      function x(t) {
        return function (e, n) {
          return (
            "string" != typeof e
              ? ((n = e), (e = ""))
              : "/" !== e.charAt(e.length - 1) && (e += "/"),
            t(e, n)
          );
        };
      }
      function z(t, e, n) {
        return t._modulesNamespaceMap[n];
      }
      function C(t, e, n) {
        var i = n ? t.groupCollapsed : t.group;
        try {
          i.call(t, e);
        } catch (n) {
          t.log(e);
        }
      }
      function k(t) {
        try {
          t.groupEnd();
        } catch (e) {
          t.log("—— log end ——");
        }
      }
      function S() {
        var t = new Date();
        return (
          " @ " +
          T(t.getHours(), 2) +
          ":" +
          T(t.getMinutes(), 2) +
          ":" +
          T(t.getSeconds(), 2) +
          "." +
          T(t.getMilliseconds(), 3)
        );
      }
      function T(t, e) {
        return (n = e - t.toString().length), new Array(n + 1).join("0") + t;
        var n;
      }
      var D = {
        Store: u,
        install: _,
        version: "3.6.2",
        mapState: y,
        mapMutations: M,
        mapGetters: O,
        mapActions: w,
        createNamespacedHelpers: function (t) {
          return {
            mapState: y.bind(null, t),
            mapGetters: O.bind(null, t),
            mapMutations: M.bind(null, t),
            mapActions: w.bind(null, t),
          };
        },
        createLogger: function (t) {
          void 0 === t && (t = {});
          var e = t.collapsed;
          void 0 === e && (e = !0);
          var n = t.filter;
          void 0 === n &&
            (n = function (t, e, n) {
              return !0;
            });
          var i = t.transformer;
          void 0 === i &&
            (i = function (t) {
              return t;
            });
          var o = t.mutationTransformer;
          void 0 === o &&
            (o = function (t) {
              return t;
            });
          var a = t.actionFilter;
          void 0 === a &&
            (a = function (t, e) {
              return !0;
            });
          var s = t.actionTransformer;
          void 0 === s &&
            (s = function (t) {
              return t;
            });
          var l = t.logMutations;
          void 0 === l && (l = !0);
          var c = t.logActions;
          void 0 === c && (c = !0);
          var d = t.logger;
          return (
            void 0 === d && (d = console),
            function (t) {
              var u = r(t.state);
              void 0 !== d &&
                (l &&
                  t.subscribe(function (t, a) {
                    var s = r(a);
                    if (n(t, u, s)) {
                      var l = S(),
                        c = o(t),
                        p = "mutation " + t.type + l;
                      C(d, p, e),
                        d.log(
                          "%c prev state",
                          "color: #9E9E9E; font-weight: bold",
                          i(u)
                        ),
                        d.log(
                          "%c mutation",
                          "color: #03A9F4; font-weight: bold",
                          c
                        ),
                        d.log(
                          "%c next state",
                          "color: #4CAF50; font-weight: bold",
                          i(s)
                        ),
                        k(d);
                    }
                    u = s;
                  }),
                c &&
                  t.subscribeAction(function (t, n) {
                    if (a(t, n)) {
                      var i = S(),
                        r = s(t),
                        o = "action " + t.type + i;
                      C(d, o, e),
                        d.log(
                          "%c action",
                          "color: #03A9F4; font-weight: bold",
                          r
                        ),
                        k(d);
                    }
                  }));
            }
          );
        },
      };
      e.a = D;
    }).call(this, n(56));
  },
  ,
  ,
  ,
  function (t, e, n) {
    var i = n(518);
    "string" == typeof i && (i = [[t.i, i, ""]]),
      n(33)(i, { hmr: !0, transform: void 0, insertInto: void 0 }),
      i.locals && (t.exports = i.locals);
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
      });
    var i = function (t) {
        var e =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
        t.prop("disabled", !0).find("i").removeClass(e).addClass(e);
      },
      r = function (t) {
        var e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
          n =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : "fa fa-sync fa-spin";
        t.prop("disabled", !1).find("i").removeClass(n).addClass(e);
      },
      o = function () {
        var t;
        return (
          (null === (t = window) ||
          void 0 === t ||
          null === (t = t.request_data) ||
          void 0 === t
            ? void 0
            : t.wp_timezone) || "UTC"
        );
      };
  },
  function (t, e, n) {
    "use strict";
    var i = n(34),
      r = n.n(i),
      o = n(69),
      a = n(8),
      s = {
        namespaced: !0,
        state: {
          static_data: { specialization: [] },
          langTranslateData: [],
          staticDataLoader: !0,
        },
        mutations: {
          FETCH_STATIC_DATA: function (t, e) {
            t.static_data[e.dataType] = e.static_data;
          },
          FETCH_STATIC_DATA_LOADER: function (t, e) {
            t.static_data_loader = e.static_data;
          },
          ADD_OPTION_STATIC_DATA: function (t, e) {
            void 0 !== t.static_data[e.dataType] &&
              t.static_data[e.dataType].push(e.option);
          },
          LANG_RESPONSE: function (t, e) {
            t.langTranslateData = e;
          },
        },
        actions: {
          fetchStaticData: function (t, e) {
            var n = t.commit;
            n("FETCH_STATIC_DATA_LOADER", !0),
              Object(a.a)("get_static_data", {
                data_type: e.type,
                static_data_type: e.static_data_type,
              })
                .then(function (t) {
                  n("FETCH_STATIC_DATA_LOADER", !1),
                    void 0 !== t.data.status &&
                      !0 === t.data.status &&
                      (void 0 !== e.static_data_type &&
                      "" !== e.static_data_type
                        ? n("FETCH_STATIC_DATA", {
                            dataType: e.static_data_type,
                            static_data: t.data.data,
                          })
                        : n("FETCH_STATIC_DATA", {
                            dataType: e.type,
                            static_data: t.data.data,
                          }));
                })
                .catch(function (t) {
                  n("FETCH_STATIC_DATA_LOADER", !1);
                });
          },
          fetchLangTranslateData: function (t, e) {
            (0, t.commit)("LANG_RESPONSE", window.__kivicarelang);
          },
          refreshDashboardLocale: function (t, e) {
            var n = t.commit;
            !(function (t) {
              if (null == t) throw new TypeError("Cannot destructure " + t);
            })(e),
              Object(a.a)("refresh_dashboard_locale")
                .then(function (t) {
                  void 0 !== t.data.success &&
                    !0 === t.data.success &&
                    (n("LANG_RESPONSE", t.data.data),
                    (window.__kivicarelang = t.data.data));
                })
                .catch(function (t) {});
          },
        },
        getters: {
          specialization: function (t) {
            return t.static_data.specialization;
          },
        },
      };
    function l() {
      var t,
        e,
        n = "function" == typeof Symbol ? Symbol : {},
        i = n.iterator || "@@iterator",
        r = n.toStringTag || "@@toStringTag";
      function o(n, i, r, o) {
        var l = i && i.prototype instanceof s ? i : s,
          d = Object.create(l.prototype);
        return (
          c(
            d,
            "_invoke",
            (function (n, i, r) {
              var o,
                s,
                l,
                c = 0,
                d = r || [],
                u = !1,
                p = {
                  p: 0,
                  n: 0,
                  v: t,
                  a: h,
                  f: h.bind(t, 4),
                  d: function (e, n) {
                    return (o = e), (s = 0), (l = t), (p.n = n), a;
                  },
                };
              function h(n, i) {
                for (s = n, l = i, e = 0; !u && c && !r && e < d.length; e++) {
                  var r,
                    o = d[e],
                    h = p.p,
                    f = o[2];
                  n > 3
                    ? (r = f === i) &&
                      ((l = o[(s = o[4]) ? 5 : ((s = 3), 3)]),
                      (o[4] = o[5] = t))
                    : o[0] <= h &&
                      ((r = n < 2 && h < o[1])
                        ? ((s = 0), (p.v = i), (p.n = o[1]))
                        : h < f &&
                          (r = n < 3 || o[0] > i || i > f) &&
                          ((o[4] = n), (o[5] = i), (p.n = f), (s = 0)));
                }
                if (r || n > 1) return a;
                throw ((u = !0), i);
              }
              return function (r, d, f) {
                if (c > 1) throw TypeError("Generator is already running");
                for (
                  u && 1 === d && h(d, f), s = d, l = f;
                  (e = s < 2 ? t : l) || !u;

                ) {
                  o ||
                    (s
                      ? s < 3
                        ? (s > 1 && (p.n = -1), h(s, l))
                        : (p.n = l)
                      : (p.v = l));
                  try {
                    if (((c = 2), o)) {
                      if ((s || (r = "next"), (e = o[r]))) {
                        if (!(e = e.call(o, l)))
                          throw TypeError("iterator result is not an object");
                        if (!e.done) return e;
                        (l = e.value), s < 2 && (s = 0);
                      } else
                        1 === s && (e = o.return) && e.call(o),
                          s < 2 &&
                            ((l = TypeError(
                              "The iterator does not provide a '" +
                                r +
                                "' method"
                            )),
                            (s = 1));
                      o = t;
                    } else if ((e = (u = p.n < 0) ? l : n.call(i, p)) !== a)
                      break;
                  } catch (e) {
                    (o = t), (s = 1), (l = e);
                  } finally {
                    c = 1;
                  }
                }
                return { value: e, done: u };
              };
            })(n, r, o),
            !0
          ),
          d
        );
      }
      var a = {};
      function s() {}
      function d() {}
      function u() {}
      e = Object.getPrototypeOf;
      var p = [][i]
          ? e(e([][i]()))
          : (c((e = {}), i, function () {
              return this;
            }),
            e),
        h = (u.prototype = s.prototype = Object.create(p));
      function f(t) {
        return (
          Object.setPrototypeOf
            ? Object.setPrototypeOf(t, u)
            : ((t.__proto__ = u), c(t, r, "GeneratorFunction")),
          (t.prototype = Object.create(h)),
          t
        );
      }
      return (
        (d.prototype = u),
        c(h, "constructor", u),
        c(u, "constructor", d),
        (d.displayName = "GeneratorFunction"),
        c(u, r, "GeneratorFunction"),
        c(h),
        c(h, r, "Generator"),
        c(h, i, function () {
          return this;
        }),
        c(h, "toString", function () {
          return "[object Generator]";
        }),
        (l = function () {
          return { w: o, m: f };
        })()
      );
    }
    function c(t, e, n, i) {
      var r = Object.defineProperty;
      try {
        r({}, "", {});
      } catch (t) {
        r = 0;
      }
      (c = function (t, e, n, i) {
        if (e)
          r
            ? r(t, e, {
                value: n,
                enumerable: !i,
                configurable: !i,
                writable: !i,
              })
            : (t[e] = n);
        else {
          var o = function (e, n) {
            c(t, e, function (t) {
              return this._invoke(e, n, t);
            });
          };
          o("next", 0), o("throw", 1), o("return", 2);
        }
      })(t, e, n, i);
    }
    function d(t, e, n, i, r, o, a) {
      try {
        var s = t[o](a),
          l = s.value;
      } catch (t) {
        return void n(t);
      }
      s.done ? e(l) : Promise.resolve(l).then(i, r);
    }
    function u(t) {
      return function () {
        var e = this,
          n = arguments;
        return new Promise(function (i, r) {
          var o = t.apply(e, n);
          function a(t) {
            d(o, i, r, a, s, "next", t);
          }
          function s(t) {
            d(o, i, r, a, s, "throw", t);
          }
          a(void 0);
        });
      };
    }
    var p = {
        namespaced: !0,
        state: {
          user: {},
          userDropDownData: { patients: [], doctors: [] },
          clinic: {},
          setups: [],
        },
        mutations: {
          FETCH_USER_DATA: function (t, e) {
            t.user = e;
          },
          FETCH_DEFAULT_CLINIC: function (t, e) {
            t.clinic = e;
          },
          FETCH_USER_DROPDOWN_DATA: function (t, e) {
            e.userType === window.vm.$data.doctorRoleName
              ? (t.userDropDownData.doctors = e.data)
              : e.userType === window.vm.$data.patientRoleName &&
                (t.userDropDownData.patients = e.data);
          },
          HANDLE_ACTIVE_STEP: function (t, e) {
            vm.$router.push({ name: e.routeName });
          },
          FETCH_SETUP_CONFIG: function (t, e) {
            t.setups = e;
          },
          HANDLE_NEXT_STEP: function (t, e) {
            (t.setups = t.setups.map(function (t) {
              return t.name === e.name && (t.completed = !0), t;
            })),
              vm.$router.push({ name: e.nextStep });
          },
          HANDLE_PREV_STEP: function (t, e) {
            vm.$router.push({ name: e.prevStep });
          },
        },
        actions: {
          fetchUserData: function (t, e) {
            return u(
              l().m(function e() {
                var n;
                return l().w(function (e) {
                  for (;;)
                    switch (e.n) {
                      case 0:
                        return (
                          (n = t.commit),
                          (e.n = 1),
                          Object(a.a)("get_user", {})
                            .then(function (t) {
                              void 0 !== t.data.status &&
                                !0 === t.data.status &&
                                (n("FETCH_USER_DATA", t.data.data),
                                void 0 !== t.data.data.step_config &&
                                  n(
                                    "FETCH_SETUP_CONFIG",
                                    t.data.data.step_config
                                  ));
                            })
                            .catch(function (t) {})
                        );
                      case 1:
                        return e.a(2);
                    }
                }, e);
              })
            )();
          },
          fetchDefaultClinic: function (t, e) {
            return u(
              l().m(function e() {
                var n;
                return l().w(function (e) {
                  for (;;)
                    switch (e.n) {
                      case 0:
                        return (
                          (n = t.commit),
                          (e.n = 1),
                          Object(a.a)("get_static_data", {
                            data_type: "default_clinic",
                          })
                            .then(function (t) {
                              void 0 !== t.data.status &&
                                !0 === t.data.status &&
                                n("FETCH_DEFAULT_CLINIC", t.data.data[0]);
                            })
                            .catch(function (t) {})
                        );
                      case 1:
                        return e.a(2);
                    }
                }, e);
              })
            )();
          },
          updateSetupStep: function (t, e) {
            return u(
              l().m(function n() {
                var i;
                return l().w(function (n) {
                  for (;;)
                    switch (n.n) {
                      case 0:
                        return (
                          (i = t.commit),
                          (n.n = 1),
                          Object(a.b)("update_setup_step", e)
                            .then(function (t) {
                              void 0 !== t.data.status &&
                                !0 === t.data.status &&
                                i("HANDLE_NEXT_STEP", e);
                            })
                            .catch(function (t) {})
                        );
                      case 1:
                        return n.a(2);
                    }
                }, n);
              })
            )();
          },
          fetchUserForDropdown: function (t, e) {
            var n = t.commit;
            Object(a.a)("get_static_data", {
              data_type: "users",
              user_type: e.userRoleName,
            })
              .then(function (t) {
                void 0 !== t.data.status &&
                  !0 === t.data.status &&
                  n("FETCH_USER_DROPDOWN_DATA", {
                    data: t.data.data,
                    userType: e.userRoleName,
                  });
              })
              .catch(function (t) {
                displayErrorMessage("Internal server error");
              });
          },
          finishSetup: function (t, e) {
            var n = this;
            return u(
              l().m(function i() {
                return l().w(function (i) {
                  for (;;)
                    switch (i.n) {
                      case 0:
                        return (
                          t.commit,
                          (i.n = 1),
                          Object(a.b)("setup_finish", e)
                            .then(function (t) {
                              (void 0 !== t.data.status &&
                                !0 === t.data.status) ||
                                displayErrorMessage(t.data.message);
                            })
                            .catch(function (t) {
                              (n.loading = !1),
                                displayErrorMessage("Internal server error");
                            })
                        );
                      case 1:
                        return i.a(2);
                    }
                }, i);
              })
            )();
          },
        },
        getters: {},
      },
      h = n(140),
      f = n(95);
    function b() {
      var t,
        e,
        n = "function" == typeof Symbol ? Symbol : {},
        i = n.iterator || "@@iterator",
        r = n.toStringTag || "@@toStringTag";
      function o(n, i, r, o) {
        var l = i && i.prototype instanceof s ? i : s,
          c = Object.create(l.prototype);
        return (
          m(
            c,
            "_invoke",
            (function (n, i, r) {
              var o,
                s,
                l,
                c = 0,
                d = r || [],
                u = !1,
                p = {
                  p: 0,
                  n: 0,
                  v: t,
                  a: h,
                  f: h.bind(t, 4),
                  d: function (e, n) {
                    return (o = e), (s = 0), (l = t), (p.n = n), a;
                  },
                };
              function h(n, i) {
                for (s = n, l = i, e = 0; !u && c && !r && e < d.length; e++) {
                  var r,
                    o = d[e],
                    h = p.p,
                    f = o[2];
                  n > 3
                    ? (r = f === i) &&
                      ((l = o[(s = o[4]) ? 5 : ((s = 3), 3)]),
                      (o[4] = o[5] = t))
                    : o[0] <= h &&
                      ((r = n < 2 && h < o[1])
                        ? ((s = 0), (p.v = i), (p.n = o[1]))
                        : h < f &&
                          (r = n < 3 || o[0] > i || i > f) &&
                          ((o[4] = n), (o[5] = i), (p.n = f), (s = 0)));
                }
                if (r || n > 1) return a;
                throw ((u = !0), i);
              }
              return function (r, d, f) {
                if (c > 1) throw TypeError("Generator is already running");
                for (
                  u && 1 === d && h(d, f), s = d, l = f;
                  (e = s < 2 ? t : l) || !u;

                ) {
                  o ||
                    (s
                      ? s < 3
                        ? (s > 1 && (p.n = -1), h(s, l))
                        : (p.n = l)
                      : (p.v = l));
                  try {
                    if (((c = 2), o)) {
                      if ((s || (r = "next"), (e = o[r]))) {
                        if (!(e = e.call(o, l)))
                          throw TypeError("iterator result is not an object");
                        if (!e.done) return e;
                        (l = e.value), s < 2 && (s = 0);
                      } else
                        1 === s && (e = o.return) && e.call(o),
                          s < 2 &&
                            ((l = TypeError(
                              "The iterator does not provide a '" +
                                r +
                                "' method"
                            )),
                            (s = 1));
                      o = t;
                    } else if ((e = (u = p.n < 0) ? l : n.call(i, p)) !== a)
                      break;
                  } catch (e) {
                    (o = t), (s = 1), (l = e);
                  } finally {
                    c = 1;
                  }
                }
                return { value: e, done: u };
              };
            })(n, r, o),
            !0
          ),
          c
        );
      }
      var a = {};
      function s() {}
      function l() {}
      function c() {}
      e = Object.getPrototypeOf;
      var d = [][i]
          ? e(e([][i]()))
          : (m((e = {}), i, function () {
              return this;
            }),
            e),
        u = (c.prototype = s.prototype = Object.create(d));
      function p(t) {
        return (
          Object.setPrototypeOf
            ? Object.setPrototypeOf(t, c)
            : ((t.__proto__ = c), m(t, r, "GeneratorFunction")),
          (t.prototype = Object.create(u)),
          t
        );
      }
      return (
        (l.prototype = c),
        m(u, "constructor", c),
        m(c, "constructor", l),
        (l.displayName = "GeneratorFunction"),
        m(c, r, "GeneratorFunction"),
        m(u),
        m(u, r, "Generator"),
        m(u, i, function () {
          return this;
        }),
        m(u, "toString", function () {
          return "[object Generator]";
        }),
        (b = function () {
          return { w: o, m: p };
        })()
      );
    }
    function m(t, e, n, i) {
      var r = Object.defineProperty;
      try {
        r({}, "", {});
      } catch (t) {
        r = 0;
      }
      (m = function (t, e, n, i) {
        if (e)
          r
            ? r(t, e, {
                value: n,
                enumerable: !i,
                configurable: !i,
                writable: !i,
              })
            : (t[e] = n);
        else {
          var o = function (e, n) {
            m(t, e, function (t) {
              return this._invoke(e, n, t);
            });
          };
          o("next", 0), o("throw", 1), o("return", 2);
        }
      })(t, e, n, i);
    }
    function g(t, e, n, i, r, o, a) {
      try {
        var s = t[o](a),
          l = s.value;
      } catch (t) {
        return void n(t);
      }
      s.done ? e(l) : Promise.resolve(l).then(i, r);
    }
    var v = {
      namespaced: !0,
      state: { columns: {} },
      mutations: {
        SET_COLUMNS: function (t, e) {
          var n = e.module,
            i = e.payload;
          t.columns[n] = i;
        },
      },
      actions: {
        fetchTableColumns: function (t, e) {
          return ((n = b().m(function n() {
            var i, r, o, a, s, l, c, d;
            return b().w(
              function (n) {
                for (;;)
                  switch (n.n) {
                    case 0:
                      if (
                        ((r = t.commit),
                        (o = t.state),
                        (a = e.endpoint),
                        (s = e.module),
                        (l = e.params),
                        null == o ||
                          null === (i = o.columns) ||
                          void 0 === i ||
                          !i[s])
                      ) {
                        n.n = 1;
                        break;
                      }
                      return n.a(
                        2,
                        null == o || null === (c = o.columns) || void 0 === c
                          ? void 0
                          : c[s]
                      );
                    case 1:
                      return (n.p = 1), (n.n = 2), Object(f.b)(a, s, l);
                    case 2:
                      if (!(d = n.v)) {
                        n.n = 3;
                        break;
                      }
                      return (
                        r("SET_COLUMNS", { module: s, payload: d }), n.a(2, d)
                      );
                    case 3:
                      n.n = 5;
                      break;
                    case 4:
                      return (n.p = 4), n.v, n.a(2, null);
                    case 5:
                      return n.a(2);
                  }
              },
              n,
              null,
              [[1, 4]]
            );
          })),
          function () {
            var t = this,
              e = arguments;
            return new Promise(function (i, r) {
              var o = n.apply(t, e);
              function a(t) {
                g(o, i, r, a, s, "next", t);
              }
              function s(t) {
                g(o, i, r, a, s, "throw", t);
              }
              a(void 0);
            });
          })();
          var n;
        },
      },
      getters: {
        getColumnsByModuleName: function (t) {
          return function (e) {
            return t.columns[e] || {};
          };
        },
      },
    };
    r.a.use(o.a),
      (e.a = new o.a.Store({
        namespaced: !0,
        modules: {
          staticDataModule: s,
          userDataModule: p,
          appointmentModule: h.a,
          tableModule: v,
        },
        state: {
          setupSteps: [],
          loader: !0,
          showAppointmentForm: !1,
          setups: [],
          currentRoute: {},
          fullSideBar: !1,
          sideBarOpen: !0,
          clinic: [],
          logout_redirect_url: {
            clinic_admin: "",
            patient: "",
            receptionist: "",
            doctor: "",
          },
          date_format: "D-MM-YYYY",
          footer_copyright_text: "",
          wordpress_logo: { status: !1, logo: "" },
        },
        mutations: {
          FETCH_SETUP_STEPS_STATUS: function (t, e) {
            t.setupSteps = e.setup_wizard_setup;
          },
          TOGGLE_LOADER: function (t, e) {
            t.loader = e;
          },
          TOGGLE_APPOINTMENT_FORM: function (t, e) {
            t.showAppointmentForm = e;
          },
          TOGGLE_SIDEBAR: function (t, e) {
            t.fullSideBar = e;
          },
          FETCH_CLINIC_DATA: function (t, e) {
            t.clinic = e.data;
          },
          LOGOUT_REDIRECT_URL: function (t, e) {
            t.logout_redirect_url = JSON.parse(JSON.stringify(e.data));
          },
          FETCH_DATE_FORMAT: function (t, e) {
            t.date_format = e.data;
          },
          FETCH_FOOTER_COPYRIGHT_TEXT: function (t, e) {
            t.footer_copyright_text = e.data;
          },
          FETCH_WORDPRESS_LOGO: function (t, e) {
            t.wordpress_logo = { logo: e.data.logo, status: e.data.status };
          },
        },
        actions: {
          fetchSetupStepsStatus: function (t, e) {
            var n = t.commit;
            e.self,
              Object(a.a)("setup_step_status", {})
                .then(function (t) {
                  void 0 !== t.data.status &&
                    !0 === t.data.status &&
                    n("FETCH_SETUP_STEPS_STATUS", t.data);
                })
                .catch(function (t) {});
          },
          fetchSetupStepsConfig: function (t, e) {
            var n = t.commit;
            e.self,
              Object(a.a)("setup_step_status", {})
                .then(function (t) {
                  void 0 !== t.data.status &&
                    !0 === t.data.status &&
                    n("FETCH_SETUP_STEPS_STATUS", t.data);
                })
                .catch(function (t) {});
          },
          logout: function (t, e) {
            t.commit;
            var n = t.state,
              i = e.self;
            Object(a.b)("logout", {})
              .then(function (t) {
                void 0 !== t.data.status &&
                  !0 === t.data.status &&
                  setTimeout(function () {
                    "administrator" === i.getUserRole()
                      ? location.reload()
                      : "" !== n.logout_redirect_url[i.getUserRole()]
                      ? (window.location =
                          n.logout_redirect_url[i.getUserRole()])
                      : location.reload();
                  }, 1e3);
              })
              .catch(function (t) {});
          },
          logout_redirect_url: function (t, e) {
            (0, t.commit)("LOGOUT_REDIRECT_URL", { data: e.data });
          },
          fetchAllClinic: function (t, e) {
            var n = t.commit;
            !(function (t) {
              if (null == t) throw new TypeError("Cannot destructure " + t);
            })(e),
              Object(a.a)("get_static_data", { data_type: "clinic_list" })
                .then(function (t) {
                  void 0 !== t.data.status &&
                    !0 === t.data.status &&
                    n("FETCH_CLINIC_DATA", { data: t.data.data });
                })
                .catch(function (t) {
                  displayErrorMessage("Internal server error");
                });
          },
        },
        getters: {},
        strict: !1,
      }));
  },
  function (t, e) {
    var n,
      i,
      r = (t.exports = {});
    function o() {
      throw new Error("setTimeout has not been defined");
    }
    function a() {
      throw new Error("clearTimeout has not been defined");
    }
    function s(t) {
      if (n === setTimeout) return setTimeout(t, 0);
      if ((n === o || !n) && setTimeout)
        return (n = setTimeout), setTimeout(t, 0);
      try {
        return n(t, 0);
      } catch (e) {
        try {
          return n.call(null, t, 0);
        } catch (e) {
          return n.call(this, t, 0);
        }
      }
    }
    !(function () {
      try {
        n = "function" == typeof setTimeout ? setTimeout : o;
      } catch (t) {
        n = o;
      }
      try {
        i = "function" == typeof clearTimeout ? clearTimeout : a;
      } catch (t) {
        i = a;
      }
    })();
    var l,
      c = [],
      d = !1,
      u = -1;
    function p() {
      d &&
        l &&
        ((d = !1), l.length ? (c = l.concat(c)) : (u = -1), c.length && h());
    }
    function h() {
      if (!d) {
        var t = s(p);
        d = !0;
        for (var e = c.length; e; ) {
          for (l = c, c = []; ++u < e; ) l && l[u].run();
          (u = -1), (e = c.length);
        }
        (l = null),
          (d = !1),
          (function (t) {
            if (i === clearTimeout) return clearTimeout(t);
            if ((i === a || !i) && clearTimeout)
              return (i = clearTimeout), clearTimeout(t);
            try {
              i(t);
            } catch (e) {
              try {
                return i.call(null, t);
              } catch (e) {
                return i.call(this, t);
              }
            }
          })(t);
      }
    }
    function f(t, e) {
      (this.fun = t), (this.array = e);
    }
    function b() {}
    (r.nextTick = function (t) {
      var e = new Array(arguments.length - 1);
      if (arguments.length > 1)
        for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
      c.push(new f(t, e)), 1 !== c.length || d || s(h);
    }),
      (f.prototype.run = function () {
        this.fun.apply(null, this.array);
      }),
      (r.title = "browser"),
      (r.browser = !0),
      (r.env = {}),
      (r.argv = []),
      (r.version = ""),
      (r.versions = {}),
      (r.on = b),
      (r.addListener = b),
      (r.once = b),
      (r.off = b),
      (r.removeListener = b),
      (r.removeAllListeners = b),
      (r.emit = b),
      (r.prependListener = b),
      (r.prependOnceListener = b),
      (r.listeners = function (t) {
        return [];
      }),
      (r.binding = function (t) {
        throw new Error("process.binding is not supported");
      }),
      (r.cwd = function () {
        return "/";
      }),
      (r.chdir = function (t) {
        throw new Error("process.chdir is not supported");
      }),
      (r.umask = function () {
        return 0;
      });
  },
  function (t, e, n) {
    t.exports = (function (t) {
      "use strict";
      function e(t) {
        return (e =
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
      t = t && t.hasOwnProperty("default") ? t.default : t;
      var n = {
        props: {
          options: { type: Object },
          type: { type: String },
          series: {
            type: Array,
            required: !0,
            default: function () {
              return [];
            },
          },
          width: { default: "100%" },
          height: { default: "auto" },
        },
        data: function () {
          return { chart: null };
        },
        beforeMount: function () {
          window.ApexCharts = t;
        },
        mounted: function () {
          this.init();
        },
        created: function () {
          var t = this;
          this.$watch("options", function (e) {
            !t.chart && e ? t.init() : t.chart.updateOptions(t.options);
          }),
            this.$watch("series", function (e) {
              !t.chart && e ? t.init() : t.chart.updateSeries(t.series);
            }),
            ["type", "width", "height"].forEach(function (e) {
              t.$watch(e, function () {
                t.refresh();
              });
            });
        },
        beforeDestroy: function () {
          this.chart && this.destroy();
        },
        render: function (t) {
          return t("div");
        },
        methods: {
          init: function () {
            var e = this,
              n = {
                chart: {
                  type: this.type || this.options.chart.type || "line",
                  height: this.height,
                  width: this.width,
                  events: {},
                },
                series: this.series,
              };
            Object.keys(this.$listeners).forEach(function (t) {
              n.chart.events[t] = e.$listeners[t];
            });
            var i = this.extend(this.options, n);
            return (this.chart = new t(this.$el, i)), this.chart.render();
          },
          isObject: function (t) {
            return t && "object" === e(t) && !Array.isArray(t) && null != t;
          },
          extend: function (t, e) {
            var n = this;
            "function" != typeof Object.assign &&
              (Object.assign = function (t) {
                if (null == t)
                  throw new TypeError(
                    "Cannot convert undefined or null to object"
                  );
                for (var e = Object(t), n = 1; n < arguments.length; n++) {
                  var i = arguments[n];
                  if (null != i)
                    for (var r in i) i.hasOwnProperty(r) && (e[r] = i[r]);
                }
                return e;
              });
            var i = Object.assign({}, t);
            return (
              this.isObject(t) &&
                this.isObject(e) &&
                Object.keys(e).forEach(function (r) {
                  n.isObject(e[r]) && r in t
                    ? (i[r] = n.extend(t[r], e[r]))
                    : Object.assign(
                        i,
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
                        })({}, r, e[r])
                      );
                }),
              i
            );
          },
          refresh: function () {
            return this.destroy(), this.init();
          },
          destroy: function () {
            this.chart.destroy();
          },
          updateSeries: function (t, e) {
            return this.chart.updateSeries(t, e);
          },
          updateOptions: function (t, e, n, i) {
            return this.chart.updateOptions(t, e, n, i);
          },
          toggleSeries: function (t) {
            return this.chart.toggleSeries(t);
          },
          showSeries: function (t) {
            this.chart.showSeries(t);
          },
          hideSeries: function (t) {
            this.chart.hideSeries(t);
          },
          appendSeries: function (t, e) {
            return this.chart.appendSeries(t, e);
          },
          resetSeries: function () {
            this.chart.resetSeries();
          },
          zoomX: function (t, e) {
            this.chart.zoomX(t, e);
          },
          toggleDataPointSelection: function (t, e) {
            this.chart.toggleDataPointSelection(t, e);
          },
          appendData: function (t) {
            return this.chart.appendData(t);
          },
          addText: function (t) {
            this.chart.addText(t);
          },
          addImage: function (t) {
            this.chart.addImage(t);
          },
          addShape: function (t) {
            this.chart.addShape(t);
          },
          dataURI: function (t) {
            return this.chart.dataURI(t);
          },
          setLocale: function (t) {
            return this.chart.setLocale(t);
          },
          addXaxisAnnotation: function (t, e) {
            this.chart.addXaxisAnnotation(t, e);
          },
          addYaxisAnnotation: function (t, e) {
            this.chart.addYaxisAnnotation(t, e);
          },
          addPointAnnotation: function (t, e) {
            this.chart.addPointAnnotation(t, e);
          },
          removeAnnotation: function (t, e) {
            this.chart.removeAnnotation(t, e);
          },
          clearAnnotations: function () {
            this.chart.clearAnnotations();
          },
        },
      };
      return (
        (window.ApexCharts = t),
        (n.install = function (e) {
          (e.ApexCharts = t),
            (window.ApexCharts = t),
            Object.defineProperty(e.prototype, "$apexcharts", {
              get: function () {
                return t;
              },
            });
        }),
        n
      );
    })(n(634));
  },
  function (t, e, n) {
    "use strict";
    n.d(e, "a", function () {
      return i;
    }),
      n.d(e, "b", function () {
        return r;
      });
    var i = {
        pro: {
          href: "https://codecanyon.net/item/kivicare-pro-clinic-patient-management-system-ehr-addon/30690654?s_rank=3",
          message: "Available In Pro",
          text: "Pro",
        },
        telemed: {
          href: "https://codecanyon.net/item/kivicare-telemed-addon/29363726?s_rank=9",
          message: "Available In Telemed Addon",
          text: "Addons",
        },
        googlemeet: {
          href: "https://codecanyon.net/item/kivicare-google-meet-telemed-addon/35301137?s_rank=21",
          message: "Available In Googlemeet Addon",
          text: "Addons",
        },
        googlemeetAndtelemed: {
          href: "https://codecanyon.net/user/iqonicdesign",
          message: "Available In Googlemeet Addon or Telemed Addon",
          text: "Addons",
        },
        app: {
          href: "https://codecanyon.net/item/kivicare-flutter-app-clinic-patient-management-system/30970616",
          message: "Available For Kivicare Flutter App",
          text: "Addons",
        },
        bodyChart: {
          href: "https://codecanyon.net/item/kivicare-encounter-body-chart-addon/51585503",
          message: "Available In Encounter Body Chart Addon",
          text: "Addons",
        },
        webhooks: {
          href: "https://codecanyon.net/user/iqonicdesign",
          message: "Available In Webhooks Addon",
          text: "Addons",
        },
      },
      r = {
        href: "https://codecanyon.net/item/kivicare-pro-clinic-patient-management-system-ehr-addon/30690654?s_rank=3",
        message: "Available In Pro",
        text: "Pro",
      };
  },
  ,
  ,
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var i,
      r = (i = n(34)) && "object" == typeof i && "default" in i ? i.default : i;
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
    function a(t) {
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
    var s = "undefined" != typeof window;
    function l(t, e) {
      return e.reduce(function (e, n) {
        return t.hasOwnProperty(n) && (e[n] = t[n]), e;
      }, {});
    }
    var c = {},
      d = {},
      u = {},
      p = new (r.extend({
        data: function () {
          return { transports: c, targets: d, sources: u, trackInstances: s };
        },
        methods: {
          open: function (t) {
            if (s) {
              var e = t.to,
                n = t.from,
                i = t.passengers,
                a = t.order,
                l = void 0 === a ? 1 / 0 : a;
              if (e && n && i) {
                var c,
                  d = {
                    to: e,
                    from: n,
                    passengers:
                      ((c = i),
                      Array.isArray(c) || "object" === o(c)
                        ? Object.freeze(c)
                        : c),
                    order: l,
                  };
                -1 === Object.keys(this.transports).indexOf(e) &&
                  r.set(this.transports, e, []);
                var u,
                  p = this.$_getTransportIndex(d),
                  h = this.transports[e].slice(0);
                -1 === p ? h.push(d) : (h[p] = d),
                  (this.transports[e] =
                    ((u = function (t, e) {
                      return t.order - e.order;
                    }),
                    h
                      .map(function (t, e) {
                        return [e, t];
                      })
                      .sort(function (t, e) {
                        return u(t[1], e[1]) || t[0] - e[0];
                      })
                      .map(function (t) {
                        return t[1];
                      })));
              }
            }
          },
          close: function (t) {
            var e =
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              n = t.to,
              i = t.from;
            if (n && (i || !1 !== e) && this.transports[n])
              if (e) this.transports[n] = [];
              else {
                var r = this.$_getTransportIndex(t);
                if (r >= 0) {
                  var o = this.transports[n].slice(0);
                  o.splice(r, 1), (this.transports[n] = o);
                }
              }
          },
          registerTarget: function (t, e, n) {
            s &&
              (this.trackInstances && !n && this.targets[t],
              this.$set(this.targets, t, Object.freeze([e])));
          },
          unregisterTarget: function (t) {
            this.$delete(this.targets, t);
          },
          registerSource: function (t, e, n) {
            s &&
              (this.trackInstances && !n && this.sources[t],
              this.$set(this.sources, t, Object.freeze([e])));
          },
          unregisterSource: function (t) {
            this.$delete(this.sources, t);
          },
          hasTarget: function (t) {
            return !(!this.targets[t] || !this.targets[t][0]);
          },
          hasSource: function (t) {
            return !(!this.sources[t] || !this.sources[t][0]);
          },
          hasContentFor: function (t) {
            return !!this.transports[t] && !!this.transports[t].length;
          },
          $_getTransportIndex: function (t) {
            var e = t.to,
              n = t.from;
            for (var i in this.transports[e])
              if (this.transports[e][i].from === n) return +i;
            return -1;
          },
        },
      }))(c),
      h = 1,
      f = r.extend({
        name: "portal",
        props: {
          disabled: { type: Boolean },
          name: {
            type: String,
            default: function () {
              return String(h++);
            },
          },
          order: { type: Number, default: 0 },
          slim: { type: Boolean },
          slotProps: {
            type: Object,
            default: function () {
              return {};
            },
          },
          tag: { type: String, default: "DIV" },
          to: {
            type: String,
            default: function () {
              return String(Math.round(1e7 * Math.random()));
            },
          },
        },
        created: function () {
          var t = this;
          this.$nextTick(function () {
            p.registerSource(t.name, t);
          });
        },
        mounted: function () {
          this.disabled || this.sendUpdate();
        },
        updated: function () {
          this.disabled ? this.clear() : this.sendUpdate();
        },
        beforeDestroy: function () {
          p.unregisterSource(this.name), this.clear();
        },
        watch: {
          to: function (t, e) {
            e && e !== t && this.clear(e), this.sendUpdate();
          },
        },
        methods: {
          clear: function (t) {
            var e = { from: this.name, to: t || this.to };
            p.close(e);
          },
          normalizeSlots: function () {
            return this.$scopedSlots.default
              ? [this.$scopedSlots.default]
              : this.$slots.default;
          },
          normalizeOwnChildren: function (t) {
            return "function" == typeof t ? t(this.slotProps) : t;
          },
          sendUpdate: function () {
            var t = this.normalizeSlots();
            if (t) {
              var e = {
                from: this.name,
                to: this.to,
                passengers: a(t),
                order: this.order,
              };
              p.open(e);
            } else this.clear();
          },
        },
        render: function (t) {
          var e = this.$slots.default || this.$scopedSlots.default || [],
            n = this.tag;
          return e && this.disabled
            ? e.length <= 1 && this.slim
              ? this.normalizeOwnChildren(e)[0]
              : t(n, [this.normalizeOwnChildren(e)])
            : this.slim
            ? t()
            : t(n, {
                class: { "v-portal": !0 },
                style: { display: "none" },
                key: "v-portal-placeholder",
              });
        },
      }),
      b = r.extend({
        name: "portalTarget",
        props: {
          multiple: { type: Boolean, default: !1 },
          name: { type: String, required: !0 },
          slim: { type: Boolean, default: !1 },
          slotProps: {
            type: Object,
            default: function () {
              return {};
            },
          },
          tag: { type: String, default: "div" },
          transition: { type: [String, Object, Function] },
        },
        data: function () {
          return { transports: p.transports, firstRender: !0 };
        },
        created: function () {
          var t = this;
          this.$nextTick(function () {
            p.registerTarget(t.name, t);
          });
        },
        watch: {
          ownTransports: function () {
            this.$emit("change", this.children().length > 0);
          },
          name: function (t, e) {
            p.unregisterTarget(e), p.registerTarget(t, this);
          },
        },
        mounted: function () {
          var t = this;
          this.transition &&
            this.$nextTick(function () {
              t.firstRender = !1;
            });
        },
        beforeDestroy: function () {
          p.unregisterTarget(this.name);
        },
        computed: {
          ownTransports: function () {
            var t = this.transports[this.name] || [];
            return this.multiple ? t : 0 === t.length ? [] : [t[t.length - 1]];
          },
          passengers: function () {
            return (function (t) {
              var e =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
              return t.reduce(function (t, n) {
                var i = n.passengers[0],
                  r = "function" == typeof i ? i(e) : n.passengers;
                return t.concat(r);
              }, []);
            })(this.ownTransports, this.slotProps);
          },
        },
        methods: {
          children: function () {
            return 0 !== this.passengers.length
              ? this.passengers
              : this.$scopedSlots.default
              ? this.$scopedSlots.default(this.slotProps)
              : this.$slots.default || [];
          },
          noWrapper: function () {
            var t = this.slim && !this.transition;
            return t && this.children().length, t;
          },
        },
        render: function (t) {
          var e = this.noWrapper(),
            n = this.children(),
            i = this.transition || this.tag;
          return e
            ? n[0]
            : this.slim && !i
            ? t()
            : t(
                i,
                {
                  props: {
                    tag: this.transition && this.tag ? this.tag : void 0,
                  },
                  class: { "vue-portal-target": !0 },
                },
                n
              );
        },
      }),
      m = 0,
      g = ["disabled", "name", "order", "slim", "slotProps", "tag", "to"],
      v = ["multiple", "transition"],
      _ = r.extend({
        name: "MountingPortal",
        inheritAttrs: !1,
        props: {
          append: { type: [Boolean, String] },
          bail: { type: Boolean },
          mountTo: { type: String, required: !0 },
          disabled: { type: Boolean },
          name: {
            type: String,
            default: function () {
              return "mounted_" + String(m++);
            },
          },
          order: { type: Number, default: 0 },
          slim: { type: Boolean },
          slotProps: {
            type: Object,
            default: function () {
              return {};
            },
          },
          tag: { type: String, default: "DIV" },
          to: {
            type: String,
            default: function () {
              return String(Math.round(1e7 * Math.random()));
            },
          },
          multiple: { type: Boolean, default: !1 },
          targetSlim: { type: Boolean },
          targetSlotProps: {
            type: Object,
            default: function () {
              return {};
            },
          },
          targetTag: { type: String, default: "div" },
          transition: { type: [String, Object, Function] },
        },
        created: function () {
          if ("undefined" != typeof document) {
            var t = document.querySelector(this.mountTo);
            if (t) {
              var e = this.$props;
              if (p.targets[e.name])
                e.bail || (this.portalTarget = p.targets[e.name]);
              else {
                var n = e.append;
                if (n) {
                  var i = "string" == typeof n ? n : "DIV",
                    r = document.createElement(i);
                  t.appendChild(r), (t = r);
                }
                var o = l(this.$props, v);
                (o.slim = this.targetSlim),
                  (o.tag = this.targetTag),
                  (o.slotProps = this.targetSlotProps),
                  (o.name = this.to),
                  (this.portalTarget = new b({
                    el: t,
                    parent: this.$parent || this,
                    propsData: o,
                  }));
              }
            }
          }
        },
        beforeDestroy: function () {
          var t = this.portalTarget;
          if (this.append) {
            var e = t.$el;
            e.parentNode.removeChild(e);
          }
          t.$destroy();
        },
        render: function (t) {
          if (!this.portalTarget) return t();
          if (!this.$scopedSlots.manual) {
            var e = l(this.$props, g);
            return t(
              f,
              {
                props: e,
                attrs: this.$attrs,
                on: this.$listeners,
                scopedSlots: this.$scopedSlots,
              },
              this.$slots.default
            );
          }
          var n = this.$scopedSlots.manual({ to: this.to });
          return Array.isArray(n) && (n = n[0]), n || t();
        },
      }),
      y = {
        install: function (t) {
          var e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          t.component(e.portalName || "Portal", f),
            t.component(e.portalTargetName || "PortalTarget", b),
            t.component(e.MountingPortalName || "MountingPortal", _);
        },
      };
    (e.default = y),
      (e.Portal = f),
      (e.PortalTarget = b),
      (e.MountingPortal = _),
      (e.Wormhole = p);
  },
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  function (t, e, n) {
    "use strict";
    n.d(e, "a", function () {
      return N;
    });
    var i,
      r = n(4),
      o = n(2),
      a = n(20),
      s = n(6),
      l = n(17),
      c = n(1),
      d = n(12),
      u = n(3),
      p = n(11),
      h = n(27),
      f = n(7),
      b = n(0),
      m = n(28),
      g = n(21),
      v = n(40),
      _ = n(19),
      y = n(29),
      M = n(47),
      O = n(54);
    function w(t, e) {
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
    function A(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? w(Object(n), !0).forEach(function (e) {
              x(t, e, n[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
          : w(Object(n)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(n, e)
              );
            });
      }
      return t;
    }
    function x(t, e, n) {
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
    var z = Object(p.d)(o.A, "request-state"),
      C = Object(p.d)(o.A, "toggle"),
      k = Object(p.e)(o.A, "state"),
      S = Object(p.e)(o.A, "sync-state"),
      T = Object(h.a)("visible", { type: c.g, defaultValue: !1, event: s.d }),
      D = T.mixin,
      L = T.props,
      q = T.prop,
      E = T.event,
      j = Object(b.d)(
        Object(f.m)(
          A(
            A(A({}, g.b), L),
            {},
            {
              ariaLabel: Object(b.c)(c.u),
              ariaLabelledby: Object(b.c)(c.u),
              backdrop: Object(b.c)(c.g, !1),
              backdropVariant: Object(b.c)(c.u, "dark"),
              bgVariant: Object(b.c)(c.u, "light"),
              bodyClass: Object(b.c)(c.e),
              closeLabel: Object(b.c)(c.u),
              footerClass: Object(b.c)(c.e),
              footerTag: Object(b.c)(c.u, "footer"),
              headerClass: Object(b.c)(c.e),
              headerTag: Object(b.c)(c.u, "header"),
              lazy: Object(b.c)(c.g, !1),
              noCloseOnBackdrop: Object(b.c)(c.g, !1),
              noCloseOnEsc: Object(b.c)(c.g, !1),
              noCloseOnRouteChange: Object(b.c)(c.g, !1),
              noEnforceFocus: Object(b.c)(c.g, !1),
              noHeader: Object(b.c)(c.g, !1),
              noHeaderClose: Object(b.c)(c.g, !1),
              noSlide: Object(b.c)(c.g, !1),
              right: Object(b.c)(c.g, !1),
              shadow: Object(b.c)(c.j, !1),
              sidebarClass: Object(b.c)(c.e),
              tag: Object(b.c)(c.u, "div"),
              textVariant: Object(b.c)(c.u, "dark"),
              title: Object(b.c)(c.u),
              width: Object(b.c)(c.u),
              zIndex: Object(b.c)(c.p),
            }
          )
        ),
        o.Wb
      ),
      P = function (t, e) {
        return t(
          "div",
          {
            staticClass: "".concat("b-sidebar", "-body"),
            class: e.bodyClass,
            key: "body",
          },
          [e.normalizeSlot(d.i, e.slotScope)]
        );
      },
      R = function (t, e) {
        var n = e.normalizeSlot(d.s, e.slotScope);
        return n
          ? t(
              e.footerTag,
              {
                staticClass: "".concat("b-sidebar", "-footer"),
                class: e.footerClass,
                key: "footer",
              },
              [n]
            )
          : t();
      },
      I = function (t, e) {
        var n = (function (t, e) {
          if (e.noHeader) return t();
          var n = e.normalizeSlot(d.t, e.slotScope);
          if (!n) {
            var i = (function (t, e) {
                var n = e.normalizeSlot(d.ib, e.slotScope) || e.title;
                return n
                  ? t("strong", { attrs: { id: e.safeId("__title__") } }, [n])
                  : t("span");
              })(t, e),
              r = (function (t, e) {
                if (e.noHeaderClose) return t();
                var n = e.closeLabel,
                  i = e.textVariant,
                  r = e.hide;
                return t(
                  M.a,
                  {
                    props: { ariaLabel: n, textVariant: i },
                    on: { click: r },
                    ref: "close-button",
                  },
                  [e.normalizeSlot(d.u) || t(y.r)]
                );
              })(t, e);
            n = e.right ? [r, i] : [i, r];
          }
          return t(
            e.headerTag,
            {
              staticClass: "".concat("b-sidebar", "-header"),
              class: e.headerClass,
              key: "header",
            },
            n
          );
        })(t, e);
        return e.lazy && !e.isOpen ? n : [n, P(t, e), R(t, e)];
      },
      W = function (t, e) {
        if (!e.backdrop) return t();
        var n = e.backdropVariant;
        return t("div", {
          directives: [{ name: "show", value: e.localShow }],
          staticClass: "b-sidebar-backdrop",
          class: x({}, "bg-".concat(n), n),
          on: { click: e.onBackdropClick },
        });
      },
      N = Object(r.c)({
        name: o.Wb,
        mixins: [m.a, g.a, D, v.a, _.a],
        inheritAttrs: !1,
        props: j,
        data: function () {
          var t = !!this[q];
          return { localShow: t, isOpen: t };
        },
        computed: {
          transitionProps: function () {
            return this.noSlide
              ? { css: !0 }
              : {
                  css: !0,
                  enterClass: "",
                  enterActiveClass: "slide",
                  enterToClass: "show",
                  leaveClass: "show",
                  leaveActiveClass: "slide",
                  leaveToClass: "",
                };
          },
          slotScope: function () {
            return {
              hide: this.hide,
              right: this.right,
              visible: this.localShow,
            };
          },
          hasTitle: function () {
            var t = this.$scopedSlots,
              e = this.$slots;
            return !(
              this.noHeader ||
              this.hasNormalizedSlot(d.t) ||
              (!this.normalizeSlot(d.ib, this.slotScope, t, e) && !this.title)
            );
          },
          titleId: function () {
            return this.hasTitle ? this.safeId("__title__") : null;
          },
          computedAttrs: function () {
            return A(
              A({}, this.bvAttrs),
              {},
              {
                id: this.safeId(),
                tabindex: "-1",
                role: "dialog",
                "aria-modal": this.backdrop ? "true" : "false",
                "aria-hidden": this.localShow ? null : "true",
                "aria-label": this.ariaLabel || null,
                "aria-labelledby": this.ariaLabelledby || this.titleId || null,
              }
            );
          },
        },
        watch:
          ((i = {}),
          x(i, q, function (t, e) {
            t !== e && (this.localShow = t);
          }),
          x(i, "localShow", function (t, e) {
            t !== e && (this.emitState(t), this.$emit(E, t));
          }),
          x(i, "$route", function () {
            var t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              e =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
            this.noCloseOnRouteChange ||
              t.fullPath === e.fullPath ||
              this.hide();
          }),
          i),
        created: function () {
          this.$_returnFocusEl = null;
        },
        mounted: function () {
          var t = this;
          this.listenOnRoot(C, this.handleToggle),
            this.listenOnRoot(z, this.handleSync),
            this.$nextTick(function () {
              t.emitState(t.localShow);
            });
        },
        activated: function () {
          this.emitSync();
        },
        beforeDestroy: function () {
          (this.localShow = !1), (this.$_returnFocusEl = null);
        },
        methods: {
          hide: function () {
            this.localShow = !1;
          },
          emitState: function () {
            var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : this.localShow;
            this.emitOnRoot(k, this.safeId(), t);
          },
          emitSync: function () {
            var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : this.localShow;
            this.emitOnRoot(S, this.safeId(), t);
          },
          handleToggle: function (t) {
            t && t === this.safeId() && (this.localShow = !this.localShow);
          },
          handleSync: function (t) {
            var e = this;
            t &&
              t === this.safeId() &&
              this.$nextTick(function () {
                e.emitSync(e.localShow);
              });
          },
          onKeydown: function (t) {
            var e = t.keyCode;
            !this.noCloseOnEsc && e === l.f && this.localShow && this.hide();
          },
          onBackdropClick: function () {
            this.localShow && !this.noCloseOnBackdrop && this.hide();
          },
          onTopTrapFocus: function () {
            var t = Object(u.n)(this.$refs.content);
            this.enforceFocus(t.reverse()[0]);
          },
          onBottomTrapFocus: function () {
            var t = Object(u.n)(this.$refs.content);
            this.enforceFocus(t[0]);
          },
          onBeforeEnter: function () {
            (this.$_returnFocusEl = Object(u.g)(a.i ? [document.body] : [])),
              (this.isOpen = !0);
          },
          onAfterEnter: function (t) {
            Object(u.f)(t, Object(u.g)()) || this.enforceFocus(t),
              this.$emit(s.V);
          },
          onAfterLeave: function () {
            this.enforceFocus(this.$_returnFocusEl),
              (this.$_returnFocusEl = null),
              (this.isOpen = !1),
              this.$emit(s.w);
          },
          enforceFocus: function (t) {
            this.noEnforceFocus || Object(u.d)(t);
          },
        },
        render: function (t) {
          var e,
            n = this.bgVariant,
            i = this.width,
            r = this.textVariant,
            o = this.localShow,
            a = "" === this.shadow || this.shadow,
            s = t(
              this.tag,
              {
                staticClass: "b-sidebar",
                class: [
                  ((e = { shadow: !0 === a }),
                  x(e, "shadow-".concat(a), a && !0 !== a),
                  x(e, "".concat("b-sidebar", "-right"), this.right),
                  x(e, "bg-".concat(n), n),
                  x(e, "text-".concat(r), r),
                  e),
                  this.sidebarClass,
                ],
                style: { width: i },
                attrs: this.computedAttrs,
                directives: [{ name: "show", value: o }],
                ref: "content",
              },
              [I(t, this)]
            );
          s = t(
            "transition",
            {
              props: this.transitionProps,
              on: {
                beforeEnter: this.onBeforeEnter,
                afterEnter: this.onAfterEnter,
                afterLeave: this.onAfterLeave,
              },
            },
            [s]
          );
          var l = t(O.a, { props: { noFade: this.noSlide } }, [W(t, this)]),
            c = t(),
            d = t();
          return (
            this.backdrop &&
              o &&
              ((c = t("div", {
                attrs: { tabindex: "0" },
                on: { focus: this.onTopTrapFocus },
              })),
              (d = t("div", {
                attrs: { tabindex: "0" },
                on: { focus: this.onBottomTrapFocus },
              }))),
            t(
              "div",
              {
                staticClass: "b-sidebar-outer",
                style: { zIndex: this.zIndex },
                attrs: { tabindex: "-1" },
                on: { keydown: this.onKeydown },
              },
              [c, s, d, l]
            )
          );
        },
      });
  },
  function (t, e, n) {
    "use strict";
    n.r(e);
    var i = n(348).a,
      r = n(15),
      o = Object(r.a)(
        i,
        function () {
          var t = this,
            e = t._self._c;
          return e("div", [
            t.isAppointmentLoading
              ? e(
                  "div",
                  { staticClass: "page-loader-section" },
                  [e("loader-component-2")],
                  1
                )
              : t._e(),
            t._v(" "),
            0 == t.isAppointmentLoading
              ? e("div", [
                  t.appointmentList.length > 0
                    ? e(
                        "div",
                        { staticClass: "kc-appointment-list" },
                        t._l(t.appointmentList, function (n, i) {
                          return e("div", { key: i, staticClass: "row" }, [
                            e("div", { staticClass: "col-md-12" }, [
                              e("div", { staticClass: "row mb-2" }, [
                                e("div", { staticClass: "col-md-12" }, [
                                  e(
                                    "div",
                                    {
                                      staticClass:
                                        "card mt-0 mb-0 p-0 shadow-none shadow--hover animated fadeInUp kc-appointment-list",
                                    },
                                    [
                                      e(
                                        "div",
                                        { staticClass: "card-body p-3" },
                                        [
                                          e("div", { staticClass: "row" }, [
                                            e(
                                              "div",
                                              { staticClass: "col-md-4" },
                                              [
                                                e(
                                                  "h3",
                                                  {
                                                    staticClass:
                                                      "text-primary mb-0",
                                                  },
                                                  [
                                                    t._v(
                                                      t._s(n.patient_name) + " "
                                                    ),
                                                    e(
                                                      "span",
                                                      {
                                                        staticClass:
                                                          "small font-weight-bold text-muted",
                                                      },
                                                      [
                                                        t._v(
                                                          "(" +
                                                            t._s(
                                                              n.appointment_start_time +
                                                                " - " +
                                                                n.appointment_end_time
                                                            ) +
                                                            ")"
                                                        ),
                                                      ]
                                                    ),
                                                  ]
                                                ),
                                                t._v(" "),
                                                e(
                                                  "h4",
                                                  { staticClass: "mb-0" },
                                                  [
                                                    t._v(
                                                      " " +
                                                        t._s(
                                                          t.formTranslation
                                                            .common.doctor
                                                        ) +
                                                        " :  "
                                                    ),
                                                    e(
                                                      "span",
                                                      {
                                                        staticClass:
                                                          "text-primary",
                                                      },
                                                      [
                                                        t._v(
                                                          " " +
                                                            t._s(
                                                              n.doctor_name
                                                            ) +
                                                            "  "
                                                        ),
                                                      ]
                                                    ),
                                                  ]
                                                ),
                                                t._v(" "),
                                                "administrator" ===
                                                t.getUserRole()
                                                  ? e(
                                                      "h4",
                                                      { staticClass: "mb-0" },
                                                      [
                                                        t._v(
                                                          " " +
                                                            t._s(
                                                              t.formTranslation
                                                                .clinic.clinic
                                                            ) +
                                                            " :  "
                                                        ),
                                                        e(
                                                          "span",
                                                          {
                                                            staticClass:
                                                              "text-primary",
                                                          },
                                                          [
                                                            t._v(
                                                              " " +
                                                                t._s(
                                                                  n.clinic_name
                                                                ) +
                                                                "  "
                                                            ),
                                                          ]
                                                        ),
                                                      ]
                                                    )
                                                  : t._e(),
                                                t._v(" "),
                                                "on" ==
                                                t.enableDisableAppointmentDescriptionStatus
                                                  ? e(
                                                      "p",
                                                      {
                                                        staticClass:
                                                          "mb-0 small",
                                                      },
                                                      [
                                                        e("b", [
                                                          t._v(
                                                            t._s(
                                                              t.formTranslation
                                                                .appointments
                                                                .description
                                                            ) + " :"
                                                          ),
                                                        ]),
                                                        t._v(
                                                          " " +
                                                            t._s(
                                                              n.description ||
                                                                " not found"
                                                            )
                                                        ),
                                                      ]
                                                    )
                                                  : t._e(),
                                              ]
                                            ),
                                            t._v(" "),
                                            e(
                                              "div",
                                              {
                                                staticClass:
                                                  "col-md-3 d-flex align-items-center",
                                              },
                                              [
                                                e(
                                                  "h5",
                                                  {
                                                    staticClass:
                                                      "text-muted p-3",
                                                  },
                                                  [
                                                    t._v(
                                                      " " +
                                                        t._s(n.type_label) +
                                                        " "
                                                    ),
                                                  ]
                                                ),
                                              ]
                                            ),
                                            t._v(" "),
                                            e(
                                              "div",
                                              {
                                                staticClass:
                                                  "col-md-2 d-flex align-items-center",
                                              },
                                              [
                                                "1" === n.status
                                                  ? e(
                                                      "span",
                                                      {
                                                        staticClass:
                                                          "badge badge-primary",
                                                      },
                                                      [
                                                        t._v(
                                                          t._s(
                                                            t.formTranslation
                                                              .appointments
                                                              .booked
                                                          )
                                                        ),
                                                      ]
                                                    )
                                                  : t._e(),
                                                t._v(" "),
                                                "0" === n.status
                                                  ? e(
                                                      "span",
                                                      {
                                                        staticClass:
                                                          "badge badge-danger",
                                                      },
                                                      [
                                                        t._v(
                                                          t._s(
                                                            t.formTranslation
                                                              .appointments
                                                              .cancelled
                                                          )
                                                        ),
                                                      ]
                                                    )
                                                  : t._e(),
                                                t._v(" "),
                                                "2" === n.status
                                                  ? e(
                                                      "span",
                                                      {
                                                        staticClass:
                                                          "badge badge-success",
                                                      },
                                                      [
                                                        t._v(
                                                          t._s(
                                                            t.formTranslation
                                                              .appointments
                                                              .pending
                                                          )
                                                        ),
                                                      ]
                                                    )
                                                  : t._e(),
                                                t._v(" "),
                                                "4" === n.status
                                                  ? e(
                                                      "span",
                                                      {
                                                        staticClass:
                                                          "badge badge-success",
                                                      },
                                                      [
                                                        t._v(
                                                          t._s(
                                                            t.formTranslation
                                                              .appointments
                                                              .check_in
                                                          )
                                                        ),
                                                      ]
                                                    )
                                                  : t._e(),
                                                t._v(" "),
                                                "3" === n.status
                                                  ? e(
                                                      "span",
                                                      {
                                                        staticClass:
                                                          "badge badge-danger",
                                                      },
                                                      [
                                                        t._v(
                                                          t._s(
                                                            t.formTranslation
                                                              .appointments
                                                              .check_out
                                                          )
                                                        ),
                                                      ]
                                                    )
                                                  : t._e(),
                                              ]
                                            ),
                                            t._v(" "),
                                            e(
                                              "div",
                                              {
                                                staticClass:
                                                  "col-md-3 d-flex align-items-center justify-content-end",
                                              },
                                              [
                                                e(
                                                  "div",
                                                  {
                                                    staticClass: "float-right",
                                                  },
                                                  [
                                                    e(
                                                      "b-button-group",
                                                      { attrs: { size: "sm" } },
                                                      [
                                                        null !== n.encounter_id
                                                          ? e(
                                                              "b-button",
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
                                                                attrs: {
                                                                  variant:
                                                                    "outline-primary",
                                                                  title:
                                                                    t
                                                                      .formTranslation
                                                                      .patient_encounter
                                                                      .encounter_details,
                                                                  to: {
                                                                    name: "patient-encounter.dashboard",
                                                                    params: {
                                                                      encounter_id:
                                                                        n.encounter_id,
                                                                    },
                                                                  },
                                                                },
                                                              },
                                                              [
                                                                e("i", {
                                                                  staticClass:
                                                                    "fa fa-tachometer-alt",
                                                                }),
                                                              ]
                                                            )
                                                          : t._e(),
                                                        t._v(" "),
                                                        ("doctor" !==
                                                          t.getUserRole() &&
                                                          "clinic_admin" !==
                                                            t.getUserRole() &&
                                                          "administrator" !==
                                                            t.getUserRole()) ||
                                                        !n.video_consultation ||
                                                        "4" !== n.status ||
                                                        t.currentDate !==
                                                          n.appointment_end_date
                                                          ? t._e()
                                                          : e(
                                                              "a",
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
                                                                  "btn btn-sm btn-outline-primary",
                                                                attrs: {
                                                                  href:
                                                                    null !==
                                                                    n.zoom_data
                                                                      ? n
                                                                          .zoom_data
                                                                          .start_url
                                                                      : "#",
                                                                  target:
                                                                    "_blank",
                                                                  title:
                                                                    t
                                                                      .formTranslation
                                                                      .appointments
                                                                      .start_video_call,
                                                                },
                                                              },
                                                              [
                                                                e("i", {
                                                                  staticClass:
                                                                    "fa fa-video",
                                                                }),
                                                              ]
                                                            ),
                                                        t._v(" "),
                                                        "patient" ===
                                                          t.getUserRole() &&
                                                        n.video_consultation &&
                                                        "4" === n.status &&
                                                        t.currentDate ===
                                                          n.appointment_end_date
                                                          ? e(
                                                              "a",
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
                                                                  "btn btn-sm btn-outline-primary",
                                                                attrs: {
                                                                  href:
                                                                    null !==
                                                                    n.zoom_data
                                                                      ? n
                                                                          .zoom_data
                                                                          .join_url
                                                                      : "#",
                                                                  title:
                                                                    t
                                                                      .formTranslation
                                                                      .appointments
                                                                      .join_video_call,
                                                                  target:
                                                                    "_blank",
                                                                },
                                                              },
                                                              [
                                                                e("i", {
                                                                  staticClass:
                                                                    "fa fa-video",
                                                                }),
                                                              ]
                                                            )
                                                          : t._e(),
                                                        t._v(" "),
                                                        t.kcCheckPermission(
                                                          "patient_appointment_status_change"
                                                        ) &&
                                                        ![
                                                          "3",
                                                          "4",
                                                          "0",
                                                          "2",
                                                        ].includes(n.status) &&
                                                        t.currentDate ===
                                                          n.appointment_end_date
                                                          ? e(
                                                              "b-button",
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
                                                                attrs: {
                                                                  id:
                                                                    "status_update_" +
                                                                    n.id,
                                                                  variant:
                                                                    "outline-primary",
                                                                  title:
                                                                    t
                                                                      .formTranslation
                                                                      .appointments
                                                                      .check_in,
                                                                },
                                                                on: {
                                                                  click:
                                                                    function (
                                                                      e
                                                                    ) {
                                                                      return t.handleAppointmentStatus(
                                                                        n,
                                                                        "4"
                                                                      );
                                                                    },
                                                                },
                                                              },
                                                              [
                                                                e("i", {
                                                                  staticClass:
                                                                    "fa fa-sign-in-alt",
                                                                }),
                                                                t._v(
                                                                  " " +
                                                                    t._s(
                                                                      t
                                                                        .formTranslation
                                                                        .appointments
                                                                        .check_in
                                                                    ) +
                                                                    "\n                                              "
                                                                ),
                                                              ]
                                                            )
                                                          : t._e(),
                                                        t._v(" "),
                                                        t.kcCheckPermission(
                                                          "patient_appointment_status_change"
                                                        ) &&
                                                        "4" === n.status &&
                                                        t.currentDate ===
                                                          n.appointment_end_date
                                                          ? e(
                                                              "b-button",
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
                                                                attrs: {
                                                                  id:
                                                                    "status_update_" +
                                                                    n.id,
                                                                  variant:
                                                                    "outline-danger",
                                                                  title:
                                                                    t
                                                                      .formTranslation
                                                                      .appointments
                                                                      .check_out,
                                                                },
                                                                on: {
                                                                  click:
                                                                    function (
                                                                      e
                                                                    ) {
                                                                      return t.handleAppointmentStatus(
                                                                        n,
                                                                        "3"
                                                                      );
                                                                    },
                                                                },
                                                              },
                                                              [
                                                                e("i", {
                                                                  staticClass:
                                                                    "fa fa-sign-out-alt",
                                                                }),
                                                                t._v(
                                                                  " " +
                                                                    t._s(
                                                                      t
                                                                        .formTranslation
                                                                        .appointments
                                                                        .check_out
                                                                    ) +
                                                                    "\n                                              "
                                                                ),
                                                              ]
                                                            )
                                                          : t._e(),
                                                        t._v(" "),
                                                        t.kcCheckPermission(
                                                          "patient_appointment_status_change"
                                                        ) &&
                                                        "2" === n.status &&
                                                        t.currentDate ===
                                                          n.appointment_end_date
                                                          ? e(
                                                              "b-button",
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
                                                                attrs: {
                                                                  id:
                                                                    "status_update_" +
                                                                    n.id,
                                                                  variant:
                                                                    "outline-primary",
                                                                  title:
                                                                    t
                                                                      .formTranslation
                                                                      .appointments
                                                                      .booked,
                                                                },
                                                                on: {
                                                                  click:
                                                                    function (
                                                                      e
                                                                    ) {
                                                                      return t.handleAppointmentStatus(
                                                                        n,
                                                                        "1"
                                                                      );
                                                                    },
                                                                },
                                                              },
                                                              [
                                                                e("i", {
                                                                  staticClass:
                                                                    "fa fa-sign-in-alt",
                                                                }),
                                                                t._v(
                                                                  " " +
                                                                    t._s(
                                                                      t
                                                                        .formTranslation
                                                                        .appointments
                                                                        .booked
                                                                    ) +
                                                                    "\n                                              "
                                                                ),
                                                              ]
                                                            )
                                                          : t._e(),
                                                        t._v(" "),
                                                        t.kcCheckPermission(
                                                          "appointment_delete"
                                                        )
                                                          ? e(
                                                              "b-button",
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
                                                                attrs: {
                                                                  variant:
                                                                    "outline-danger",
                                                                  id:
                                                                    "appointment_delete_" +
                                                                    n.id,
                                                                  title:
                                                                    t
                                                                      .formTranslation
                                                                      .clinic_schedule
                                                                      .dt_lbl_dlt,
                                                                },
                                                                on: {
                                                                  click:
                                                                    function (
                                                                      e
                                                                    ) {
                                                                      return t.handleAppointmentDelete(
                                                                        n
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
                                                            )
                                                          : t._e(),
                                                      ],
                                                      1
                                                    ),
                                                  ],
                                                  1
                                                ),
                                              ]
                                            ),
                                          ]),
                                        ]
                                      ),
                                    ]
                                  ),
                                ]),
                              ]),
                            ]),
                          ]);
                        }),
                        0
                      )
                    : e("div", [
                        e("div", { staticClass: "row" }, [
                          e("div", { staticClass: "col-md-12" }, [
                            e("div", { staticClass: "row mb-2" }, [
                              e(
                                "div",
                                {
                                  staticClass:
                                    "col-md-12 text-center d-flex justify-content-center align-items-center",
                                  staticStyle: { height: "350px" },
                                },
                                [
                                  e("h4", [
                                    t._v(
                                      " " +
                                        t._s(
                                          t.formTranslation.common
                                            .no_appointments
                                        ) +
                                        ". "
                                    ),
                                  ]),
                                ]
                              ),
                            ]),
                          ]),
                        ]),
                      ]),
                ])
              : t._e(),
          ]);
        },
        [],
        !1,
        null,
        null,
        null
      );
    e.default = o.exports;
  },
  function (t, e, n) {
    "use strict";
    n.d(e, "a", function () {
      return c;
    });
    var i = function () {
        return (i =
          Object.assign ||
          function (t) {
            for (var e, n = 1, i = arguments.length; n < i; n++)
              for (var r in (e = arguments[n]))
                Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
            return t;
          }).apply(this, arguments);
      },
      r = /-(\w)/g,
      o = /:(.*)/,
      a = /;(?![^(]*\))/g;
    function s(t, e) {
      return e ? e.toUpperCase() : "";
    }
    function l(t) {
      for (var e, n = {}, i = 0, l = t.split(a); i < l.length; i++) {
        var c = l[i].split(o),
          d = c[0],
          u = c[1];
        (d = d.trim()) &&
          ("string" == typeof u && (u = u.trim()),
          (n[((e = d), e.replace(r, s))] = u));
      }
      return n;
    }
    function c() {
      for (var t, e, n = {}, r = arguments.length; r--; )
        for (var o = 0, a = Object.keys(arguments[r]); o < a.length; o++)
          switch ((t = a[o])) {
            case "class":
            case "style":
            case "directives":
              if ((Array.isArray(n[t]) || (n[t] = []), "style" === t)) {
                var s = void 0;
                s = Array.isArray(arguments[r].style)
                  ? arguments[r].style
                  : [arguments[r].style];
                for (var c = 0; c < s.length; c++) {
                  var d = s[c];
                  "string" == typeof d && (s[c] = l(d));
                }
                arguments[r].style = s;
              }
              n[t] = n[t].concat(arguments[r][t]);
              break;
            case "staticClass":
              if (!arguments[r][t]) break;
              void 0 === n[t] && (n[t] = ""),
                n[t] && (n[t] += " "),
                (n[t] += arguments[r][t].trim());
              break;
            case "on":
            case "nativeOn":
              n[t] || (n[t] = {});
              for (
                var u = 0, p = Object.keys(arguments[r][t] || {});
                u < p.length;
                u++
              )
                (e = p[u]),
                  n[t][e]
                    ? (n[t][e] = [].concat(n[t][e], arguments[r][t][e]))
                    : (n[t][e] = arguments[r][t][e]);
              break;
            case "attrs":
            case "props":
            case "domProps":
            case "scopedSlots":
            case "staticStyle":
            case "hook":
            case "transition":
              n[t] || (n[t] = {}), (n[t] = i({}, arguments[r][t], n[t]));
              break;
            case "slot":
            case "key":
            case "ref":
            case "tag":
            case "show":
            case "keepAlive":
            default:
              n[t] || (n[t] = arguments[r][t]);
          }
      return n;
    }
  },
  function (t, e, n) {
    "use strict";
    n.d(e, "b", function () {
      return b;
    }),
      n.d(e, "a", function () {
        return m;
      });
    var i = n(4),
      r = n(92),
      o = n(2),
      a = n(1),
      s = n(22),
      l = n(5),
      c = n(23),
      d = n(13),
      u = n(0);
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
    var h = {
        viewBox: "0 0 16 16",
        width: "1em",
        height: "1em",
        focusable: "false",
        role: "img",
        "aria-label": "icon",
      },
      f = {
        width: null,
        height: null,
        focusable: null,
        role: null,
        "aria-label": null,
      },
      b = {
        animation: Object(u.c)(a.u),
        content: Object(u.c)(a.u),
        flipH: Object(u.c)(a.g, !1),
        flipV: Object(u.c)(a.g, !1),
        fontScale: Object(u.c)(a.p, 1),
        rotate: Object(u.c)(a.p, 0),
        scale: Object(u.c)(a.p, 1),
        shiftH: Object(u.c)(a.p, 0),
        shiftV: Object(u.c)(a.p, 0),
        stacked: Object(u.c)(a.g, !1),
        title: Object(u.c)(a.u),
        variant: Object(u.c)(a.u),
      },
      m = Object(i.c)({
        name: o.mb,
        functional: !0,
        props: b,
        render: function (t, e) {
          var n,
            i = e.data,
            o = e.props,
            a = e.children,
            u = o.animation,
            b = o.content,
            m = o.flipH,
            g = o.flipV,
            v = o.stacked,
            _ = o.title,
            y = o.variant,
            M = Object(c.d)(Object(d.b)(o.fontScale, 1), 0) || 1,
            O = Object(c.d)(Object(d.b)(o.scale, 1), 0) || 1,
            w = Object(d.b)(o.rotate, 0),
            A = Object(d.b)(o.shiftH, 0),
            x = Object(d.b)(o.shiftV, 0),
            z = m || g || 1 !== O,
            C = z || w,
            k = A || x,
            S = !Object(l.p)(b),
            T = t(
              "g",
              {
                attrs: {
                  transform:
                    [
                      C ? "translate(8 8)" : null,
                      z
                        ? "scale("
                            .concat((m ? -1 : 1) * O, " ")
                            .concat((g ? -1 : 1) * O, ")")
                        : null,
                      w ? "rotate(".concat(w, ")") : null,
                      C ? "translate(-8 -8)" : null,
                    ]
                      .filter(s.a)
                      .join(" ") || null,
                },
                domProps: S ? { innerHTML: b || "" } : {},
              },
              a
            );
          k &&
            (T = t(
              "g",
              {
                attrs: {
                  transform: "translate("
                    .concat((16 * A) / 16, " ")
                    .concat((-16 * x) / 16, ")"),
                },
              },
              [T]
            )),
            v && (T = t("g", [T]));
          var D = [_ ? t("title", _) : null, T].filter(s.a);
          return t(
            "svg",
            Object(r.a)(
              {
                staticClass: "b-icon bi",
                class:
                  ((n = {}),
                  p(n, "text-".concat(y), y),
                  p(n, "b-icon-animation-".concat(u), u),
                  n),
                attrs: h,
                style: v
                  ? {}
                  : { fontSize: 1 === M ? null : "".concat(100 * M, "%") },
              },
              i,
              v ? { attrs: f } : {},
              {
                attrs: {
                  xmlns: v ? null : "http://www.w3.org/2000/svg",
                  fill: "currentColor",
                },
              }
            ),
            D
          );
        },
      });
  },
  function (t, e, n) {
    "use strict";
    (function (t) {
      var n =
          "undefined" != typeof window &&
          "undefined" != typeof document &&
          "undefined" != typeof navigator,
        i = (function () {
          for (
            var t = ["Edge", "Trident", "Firefox"], e = 0;
            e < t.length;
            e += 1
          )
            if (n && navigator.userAgent.indexOf(t[e]) >= 0) return 1;
          return 0;
        })(),
        r =
          n && window.Promise
            ? function (t) {
                var e = !1;
                return function () {
                  e ||
                    ((e = !0),
                    window.Promise.resolve().then(function () {
                      (e = !1), t();
                    }));
                };
              }
            : function (t) {
                var e = !1;
                return function () {
                  e ||
                    ((e = !0),
                    setTimeout(function () {
                      (e = !1), t();
                    }, i));
                };
              };
      function o(t) {
        return t && "[object Function]" === {}.toString.call(t);
      }
      function a(t, e) {
        if (1 !== t.nodeType) return [];
        var n = t.ownerDocument.defaultView.getComputedStyle(t, null);
        return e ? n[e] : n;
      }
      function s(t) {
        return "HTML" === t.nodeName ? t : t.parentNode || t.host;
      }
      function l(t) {
        if (!t) return document.body;
        switch (t.nodeName) {
          case "HTML":
          case "BODY":
            return t.ownerDocument.body;
          case "#document":
            return t.body;
        }
        var e = a(t),
          n = e.overflow,
          i = e.overflowX,
          r = e.overflowY;
        return /(auto|scroll|overlay)/.test(n + r + i) ? t : l(s(t));
      }
      function c(t) {
        return t && t.referenceNode ? t.referenceNode : t;
      }
      var d = n && !(!window.MSInputMethodContext || !document.documentMode),
        u = n && /MSIE 10/.test(navigator.userAgent);
      function p(t) {
        return 11 === t ? d : 10 === t ? u : d || u;
      }
      function h(t) {
        if (!t) return document.documentElement;
        for (
          var e = p(10) ? document.body : null, n = t.offsetParent || null;
          n === e && t.nextElementSibling;

        )
          n = (t = t.nextElementSibling).offsetParent;
        var i = n && n.nodeName;
        return i && "BODY" !== i && "HTML" !== i
          ? -1 !== ["TH", "TD", "TABLE"].indexOf(n.nodeName) &&
            "static" === a(n, "position")
            ? h(n)
            : n
          : t
          ? t.ownerDocument.documentElement
          : document.documentElement;
      }
      function f(t) {
        return null !== t.parentNode ? f(t.parentNode) : t;
      }
      function b(t, e) {
        if (!(t && t.nodeType && e && e.nodeType))
          return document.documentElement;
        var n = t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_FOLLOWING,
          i = n ? t : e,
          r = n ? e : t,
          o = document.createRange();
        o.setStart(i, 0), o.setEnd(r, 0);
        var a,
          s,
          l = o.commonAncestorContainer;
        if ((t !== l && e !== l) || i.contains(r))
          return "BODY" === (s = (a = l).nodeName) ||
            ("HTML" !== s && h(a.firstElementChild) !== a)
            ? h(l)
            : l;
        var c = f(t);
        return c.host ? b(c.host, e) : b(t, f(e).host);
      }
      function m(t) {
        var e =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : "top",
          n = "top" === e ? "scrollTop" : "scrollLeft",
          i = t.nodeName;
        if ("BODY" === i || "HTML" === i) {
          var r = t.ownerDocument.documentElement,
            o = t.ownerDocument.scrollingElement || r;
          return o[n];
        }
        return t[n];
      }
      function g(t, e) {
        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          i = m(e, "top"),
          r = m(e, "left"),
          o = n ? -1 : 1;
        return (
          (t.top += i * o),
          (t.bottom += i * o),
          (t.left += r * o),
          (t.right += r * o),
          t
        );
      }
      function v(t, e) {
        var n = "x" === e ? "Left" : "Top",
          i = "Left" === n ? "Right" : "Bottom";
        return (
          parseFloat(t["border" + n + "Width"]) +
          parseFloat(t["border" + i + "Width"])
        );
      }
      function _(t, e, n, i) {
        return Math.max(
          e["offset" + t],
          e["scroll" + t],
          n["client" + t],
          n["offset" + t],
          n["scroll" + t],
          p(10)
            ? parseInt(n["offset" + t]) +
                parseInt(i["margin" + ("Height" === t ? "Top" : "Left")]) +
                parseInt(i["margin" + ("Height" === t ? "Bottom" : "Right")])
            : 0
        );
      }
      function y(t) {
        var e = t.body,
          n = t.documentElement,
          i = p(10) && getComputedStyle(n);
        return { height: _("Height", e, n, i), width: _("Width", e, n, i) };
      }
      var M = function (t, e) {
          if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function");
        },
        O = (function () {
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
        w = function (t, e, n) {
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
        },
        A =
          Object.assign ||
          function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var n = arguments[e];
              for (var i in n)
                Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
            }
            return t;
          };
      function x(t) {
        return A({}, t, { right: t.left + t.width, bottom: t.top + t.height });
      }
      function z(t) {
        var e = {};
        try {
          if (p(10)) {
            e = t.getBoundingClientRect();
            var n = m(t, "top"),
              i = m(t, "left");
            (e.top += n), (e.left += i), (e.bottom += n), (e.right += i);
          } else e = t.getBoundingClientRect();
        } catch (t) {}
        var r = {
            left: e.left,
            top: e.top,
            width: e.right - e.left,
            height: e.bottom - e.top,
          },
          o = "HTML" === t.nodeName ? y(t.ownerDocument) : {},
          s = o.width || t.clientWidth || r.width,
          l = o.height || t.clientHeight || r.height,
          c = t.offsetWidth - s,
          d = t.offsetHeight - l;
        if (c || d) {
          var u = a(t);
          (c -= v(u, "x")), (d -= v(u, "y")), (r.width -= c), (r.height -= d);
        }
        return x(r);
      }
      function C(t, e) {
        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          i = p(10),
          r = "HTML" === e.nodeName,
          o = z(t),
          s = z(e),
          c = l(t),
          d = a(e),
          u = parseFloat(d.borderTopWidth),
          h = parseFloat(d.borderLeftWidth);
        n &&
          r &&
          ((s.top = Math.max(s.top, 0)), (s.left = Math.max(s.left, 0)));
        var f = x({
          top: o.top - s.top - u,
          left: o.left - s.left - h,
          width: o.width,
          height: o.height,
        });
        if (((f.marginTop = 0), (f.marginLeft = 0), !i && r)) {
          var b = parseFloat(d.marginTop),
            m = parseFloat(d.marginLeft);
          (f.top -= u - b),
            (f.bottom -= u - b),
            (f.left -= h - m),
            (f.right -= h - m),
            (f.marginTop = b),
            (f.marginLeft = m);
        }
        return (
          (i && !n ? e.contains(c) : e === c && "BODY" !== c.nodeName) &&
            (f = g(f, e)),
          f
        );
      }
      function k(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          n = t.ownerDocument.documentElement,
          i = C(t, n),
          r = Math.max(n.clientWidth, window.innerWidth || 0),
          o = Math.max(n.clientHeight, window.innerHeight || 0),
          a = e ? 0 : m(n),
          s = e ? 0 : m(n, "left"),
          l = {
            top: a - i.top + i.marginTop,
            left: s - i.left + i.marginLeft,
            width: r,
            height: o,
          };
        return x(l);
      }
      function S(t) {
        var e = t.nodeName;
        if ("BODY" === e || "HTML" === e) return !1;
        if ("fixed" === a(t, "position")) return !0;
        var n = s(t);
        return !!n && S(n);
      }
      function T(t) {
        if (!t || !t.parentElement || p()) return document.documentElement;
        for (var e = t.parentElement; e && "none" === a(e, "transform"); )
          e = e.parentElement;
        return e || document.documentElement;
      }
      function D(t, e, n, i) {
        var r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          o = { top: 0, left: 0 },
          a = r ? T(t) : b(t, c(e));
        if ("viewport" === i) o = k(a, r);
        else {
          var d = void 0;
          "scrollParent" === i
            ? "BODY" === (d = l(s(e))).nodeName &&
              (d = t.ownerDocument.documentElement)
            : (d = "window" === i ? t.ownerDocument.documentElement : i);
          var u = C(d, a, r);
          if ("HTML" !== d.nodeName || S(a)) o = u;
          else {
            var p = y(t.ownerDocument),
              h = p.height,
              f = p.width;
            (o.top += u.top - u.marginTop),
              (o.bottom = h + u.top),
              (o.left += u.left - u.marginLeft),
              (o.right = f + u.left);
          }
        }
        var m = "number" == typeof (n = n || 0);
        return (
          (o.left += m ? n : n.left || 0),
          (o.top += m ? n : n.top || 0),
          (o.right -= m ? n : n.right || 0),
          (o.bottom -= m ? n : n.bottom || 0),
          o
        );
      }
      function L(t) {
        return t.width * t.height;
      }
      function q(t, e, n, i, r) {
        var o =
          arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
        if (-1 === t.indexOf("auto")) return t;
        var a = D(n, i, o, r),
          s = {
            top: { width: a.width, height: e.top - a.top },
            right: { width: a.right - e.right, height: a.height },
            bottom: { width: a.width, height: a.bottom - e.bottom },
            left: { width: e.left - a.left, height: a.height },
          },
          l = Object.keys(s)
            .map(function (t) {
              return A({ key: t }, s[t], { area: L(s[t]) });
            })
            .sort(function (t, e) {
              return e.area - t.area;
            }),
          c = l.filter(function (t) {
            var e = t.width,
              i = t.height;
            return e >= n.clientWidth && i >= n.clientHeight;
          }),
          d = c.length > 0 ? c[0].key : l[0].key,
          u = t.split("-")[1];
        return d + (u ? "-" + u : "");
      }
      function E(t, e, n) {
        var i =
            arguments.length > 3 && void 0 !== arguments[3]
              ? arguments[3]
              : null,
          r = i ? T(e) : b(e, c(n));
        return C(n, r, i);
      }
      function j(t) {
        var e = t.ownerDocument.defaultView.getComputedStyle(t),
          n = parseFloat(e.marginTop || 0) + parseFloat(e.marginBottom || 0),
          i = parseFloat(e.marginLeft || 0) + parseFloat(e.marginRight || 0);
        return { width: t.offsetWidth + i, height: t.offsetHeight + n };
      }
      function P(t) {
        var e = { left: "right", right: "left", bottom: "top", top: "bottom" };
        return t.replace(/left|right|bottom|top/g, function (t) {
          return e[t];
        });
      }
      function R(t, e, n) {
        n = n.split("-")[0];
        var i = j(t),
          r = { width: i.width, height: i.height },
          o = -1 !== ["right", "left"].indexOf(n),
          a = o ? "top" : "left",
          s = o ? "left" : "top",
          l = o ? "height" : "width",
          c = o ? "width" : "height";
        return (
          (r[a] = e[a] + e[l] / 2 - i[l] / 2),
          (r[s] = n === s ? e[s] - i[c] : e[P(s)]),
          r
        );
      }
      function I(t, e) {
        return Array.prototype.find ? t.find(e) : t.filter(e)[0];
      }
      function W(t, e, n) {
        return (
          (void 0 === n
            ? t
            : t.slice(
                0,
                (function (t, e, n) {
                  if (Array.prototype.findIndex)
                    return t.findIndex(function (t) {
                      return t[e] === n;
                    });
                  var i = I(t, function (t) {
                    return t[e] === n;
                  });
                  return t.indexOf(i);
                })(t, "name", n)
              )
          ).forEach(function (t) {
            t.function;
            var n = t.function || t.fn;
            t.enabled &&
              o(n) &&
              ((e.offsets.popper = x(e.offsets.popper)),
              (e.offsets.reference = x(e.offsets.reference)),
              (e = n(e, t)));
          }),
          e
        );
      }
      function N() {
        if (!this.state.isDestroyed) {
          var t = {
            instance: this,
            styles: {},
            arrowStyles: {},
            attributes: {},
            flipped: !1,
            offsets: {},
          };
          (t.offsets.reference = E(
            this.state,
            this.popper,
            this.reference,
            this.options.positionFixed
          )),
            (t.placement = q(
              this.options.placement,
              t.offsets.reference,
              this.popper,
              this.reference,
              this.options.modifiers.flip.boundariesElement,
              this.options.modifiers.flip.padding
            )),
            (t.originalPlacement = t.placement),
            (t.positionFixed = this.options.positionFixed),
            (t.offsets.popper = R(
              this.popper,
              t.offsets.reference,
              t.placement
            )),
            (t.offsets.popper.position = this.options.positionFixed
              ? "fixed"
              : "absolute"),
            (t = W(this.modifiers, t)),
            this.state.isCreated
              ? this.options.onUpdate(t)
              : ((this.state.isCreated = !0), this.options.onCreate(t));
        }
      }
      function B(t, e) {
        return t.some(function (t) {
          var n = t.name;
          return t.enabled && n === e;
        });
      }
      function F(t) {
        for (
          var e = [!1, "ms", "Webkit", "Moz", "O"],
            n = t.charAt(0).toUpperCase() + t.slice(1),
            i = 0;
          i < e.length;
          i++
        ) {
          var r = e[i],
            o = r ? "" + r + n : t;
          if (void 0 !== document.body.style[o]) return o;
        }
        return null;
      }
      function $() {
        return (
          (this.state.isDestroyed = !0),
          B(this.modifiers, "applyStyle") &&
            (this.popper.removeAttribute("x-placement"),
            (this.popper.style.position = ""),
            (this.popper.style.top = ""),
            (this.popper.style.left = ""),
            (this.popper.style.right = ""),
            (this.popper.style.bottom = ""),
            (this.popper.style.willChange = ""),
            (this.popper.style[F("transform")] = "")),
          this.disableEventListeners(),
          this.options.removeOnDestroy &&
            this.popper.parentNode.removeChild(this.popper),
          this
        );
      }
      function H(t) {
        var e = t.ownerDocument;
        return e ? e.defaultView : window;
      }
      function Y() {
        this.state.eventsEnabled ||
          (this.state = (function (t, e, n, i) {
            (n.updateBound = i),
              H(t).addEventListener("resize", n.updateBound, { passive: !0 });
            var r = l(t);
            return (
              (function t(e, n, i, r) {
                var o = "BODY" === e.nodeName,
                  a = o ? e.ownerDocument.defaultView : e;
                a.addEventListener(n, i, { passive: !0 }),
                  o || t(l(a.parentNode), n, i, r),
                  r.push(a);
              })(r, "scroll", n.updateBound, n.scrollParents),
              (n.scrollElement = r),
              (n.eventsEnabled = !0),
              n
            );
          })(this.reference, this.options, this.state, this.scheduleUpdate));
      }
      function U() {
        var t, e;
        this.state.eventsEnabled &&
          (cancelAnimationFrame(this.scheduleUpdate),
          (this.state =
            ((t = this.reference),
            (e = this.state),
            H(t).removeEventListener("resize", e.updateBound),
            e.scrollParents.forEach(function (t) {
              t.removeEventListener("scroll", e.updateBound);
            }),
            (e.updateBound = null),
            (e.scrollParents = []),
            (e.scrollElement = null),
            (e.eventsEnabled = !1),
            e)));
      }
      function X(t) {
        return "" !== t && !isNaN(parseFloat(t)) && isFinite(t);
      }
      function V(t, e) {
        Object.keys(e).forEach(function (n) {
          var i = "";
          -1 !==
            ["width", "height", "top", "right", "bottom", "left"].indexOf(n) &&
            X(e[n]) &&
            (i = "px"),
            (t.style[n] = e[n] + i);
        });
      }
      var G = n && /Firefox/i.test(navigator.userAgent);
      function K(t, e, n) {
        var i = I(t, function (t) {
          return t.name === e;
        });
        return (
          !!i &&
          t.some(function (t) {
            return t.name === n && t.enabled && t.order < i.order;
          })
        );
      }
      var Z = [
          "auto-start",
          "auto",
          "auto-end",
          "top-start",
          "top",
          "top-end",
          "right-start",
          "right",
          "right-end",
          "bottom-end",
          "bottom",
          "bottom-start",
          "left-end",
          "left",
          "left-start",
        ],
        J = Z.slice(3);
      function Q(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          n = J.indexOf(t),
          i = J.slice(n + 1).concat(J.slice(0, n));
        return e ? i.reverse() : i;
      }
      var tt = {
          placement: "bottom",
          positionFixed: !1,
          eventsEnabled: !0,
          removeOnDestroy: !1,
          onCreate: function () {},
          onUpdate: function () {},
          modifiers: {
            shift: {
              order: 100,
              enabled: !0,
              fn: function (t) {
                var e = t.placement,
                  n = e.split("-")[0],
                  i = e.split("-")[1];
                if (i) {
                  var r = t.offsets,
                    o = r.reference,
                    a = r.popper,
                    s = -1 !== ["bottom", "top"].indexOf(n),
                    l = s ? "left" : "top",
                    c = s ? "width" : "height",
                    d = {
                      start: w({}, l, o[l]),
                      end: w({}, l, o[l] + o[c] - a[c]),
                    };
                  t.offsets.popper = A({}, a, d[i]);
                }
                return t;
              },
            },
            offset: {
              order: 200,
              enabled: !0,
              fn: function (t, e) {
                var n,
                  i = e.offset,
                  r = t.placement,
                  o = t.offsets,
                  a = o.popper,
                  s = o.reference,
                  l = r.split("-")[0];
                return (
                  (n = X(+i)
                    ? [+i, 0]
                    : (function (t, e, n, i) {
                        var r = [0, 0],
                          o = -1 !== ["right", "left"].indexOf(i),
                          a = t.split(/(\+|\-)/).map(function (t) {
                            return t.trim();
                          }),
                          s = a.indexOf(
                            I(a, function (t) {
                              return -1 !== t.search(/,|\s/);
                            })
                          );
                        a[s] && a[s].indexOf(",");
                        var l = /\s*,\s*|\s+/,
                          c =
                            -1 !== s
                              ? [
                                  a.slice(0, s).concat([a[s].split(l)[0]]),
                                  [a[s].split(l)[1]].concat(a.slice(s + 1)),
                                ]
                              : [a];
                        return (
                          (c = c.map(function (t, i) {
                            var r = (1 === i ? !o : o) ? "height" : "width",
                              a = !1;
                            return t
                              .reduce(function (t, e) {
                                return "" === t[t.length - 1] &&
                                  -1 !== ["+", "-"].indexOf(e)
                                  ? ((t[t.length - 1] = e), (a = !0), t)
                                  : a
                                  ? ((t[t.length - 1] += e), (a = !1), t)
                                  : t.concat(e);
                              }, [])
                              .map(function (t) {
                                return (function (t, e, n, i) {
                                  var r = t.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
                                    o = +r[1],
                                    a = r[2];
                                  if (!o) return t;
                                  if (0 === a.indexOf("%")) {
                                    var s = void 0;
                                    switch (a) {
                                      case "%p":
                                        s = n;
                                        break;
                                      case "%":
                                      case "%r":
                                      default:
                                        s = i;
                                    }
                                    return (x(s)[e] / 100) * o;
                                  }
                                  return "vh" === a || "vw" === a
                                    ? (("vh" === a
                                        ? Math.max(
                                            document.documentElement
                                              .clientHeight,
                                            window.innerHeight || 0
                                          )
                                        : Math.max(
                                            document.documentElement
                                              .clientWidth,
                                            window.innerWidth || 0
                                          )) /
                                        100) *
                                        o
                                    : o;
                                })(t, r, e, n);
                              });
                          })).forEach(function (t, e) {
                            t.forEach(function (n, i) {
                              X(n) && (r[e] += n * ("-" === t[i - 1] ? -1 : 1));
                            });
                          }),
                          r
                        );
                      })(i, a, s, l)),
                  "left" === l
                    ? ((a.top += n[0]), (a.left -= n[1]))
                    : "right" === l
                    ? ((a.top += n[0]), (a.left += n[1]))
                    : "top" === l
                    ? ((a.left += n[0]), (a.top -= n[1]))
                    : "bottom" === l && ((a.left += n[0]), (a.top += n[1])),
                  (t.popper = a),
                  t
                );
              },
              offset: 0,
            },
            preventOverflow: {
              order: 300,
              enabled: !0,
              fn: function (t, e) {
                var n = e.boundariesElement || h(t.instance.popper);
                t.instance.reference === n && (n = h(n));
                var i = F("transform"),
                  r = t.instance.popper.style,
                  o = r.top,
                  a = r.left,
                  s = r[i];
                (r.top = ""), (r.left = ""), (r[i] = "");
                var l = D(
                  t.instance.popper,
                  t.instance.reference,
                  e.padding,
                  n,
                  t.positionFixed
                );
                (r.top = o), (r.left = a), (r[i] = s), (e.boundaries = l);
                var c = e.priority,
                  d = t.offsets.popper,
                  u = {
                    primary: function (t) {
                      var n = d[t];
                      return (
                        d[t] < l[t] &&
                          !e.escapeWithReference &&
                          (n = Math.max(d[t], l[t])),
                        w({}, t, n)
                      );
                    },
                    secondary: function (t) {
                      var n = "right" === t ? "left" : "top",
                        i = d[n];
                      return (
                        d[t] > l[t] &&
                          !e.escapeWithReference &&
                          (i = Math.min(
                            d[n],
                            l[t] - ("right" === t ? d.width : d.height)
                          )),
                        w({}, n, i)
                      );
                    },
                  };
                return (
                  c.forEach(function (t) {
                    var e =
                      -1 !== ["left", "top"].indexOf(t)
                        ? "primary"
                        : "secondary";
                    d = A({}, d, u[e](t));
                  }),
                  (t.offsets.popper = d),
                  t
                );
              },
              priority: ["left", "right", "top", "bottom"],
              padding: 5,
              boundariesElement: "scrollParent",
            },
            keepTogether: {
              order: 400,
              enabled: !0,
              fn: function (t) {
                var e = t.offsets,
                  n = e.popper,
                  i = e.reference,
                  r = t.placement.split("-")[0],
                  o = Math.floor,
                  a = -1 !== ["top", "bottom"].indexOf(r),
                  s = a ? "right" : "bottom",
                  l = a ? "left" : "top",
                  c = a ? "width" : "height";
                return (
                  n[s] < o(i[l]) && (t.offsets.popper[l] = o(i[l]) - n[c]),
                  n[l] > o(i[s]) && (t.offsets.popper[l] = o(i[s])),
                  t
                );
              },
            },
            arrow: {
              order: 500,
              enabled: !0,
              fn: function (t, e) {
                var n;
                if (!K(t.instance.modifiers, "arrow", "keepTogether")) return t;
                var i = e.element;
                if ("string" == typeof i) {
                  if (!(i = t.instance.popper.querySelector(i))) return t;
                } else if (!t.instance.popper.contains(i)) return t;
                var r = t.placement.split("-")[0],
                  o = t.offsets,
                  s = o.popper,
                  l = o.reference,
                  c = -1 !== ["left", "right"].indexOf(r),
                  d = c ? "height" : "width",
                  u = c ? "Top" : "Left",
                  p = u.toLowerCase(),
                  h = c ? "left" : "top",
                  f = c ? "bottom" : "right",
                  b = j(i)[d];
                l[f] - b < s[p] && (t.offsets.popper[p] -= s[p] - (l[f] - b)),
                  l[p] + b > s[f] && (t.offsets.popper[p] += l[p] + b - s[f]),
                  (t.offsets.popper = x(t.offsets.popper));
                var m = l[p] + l[d] / 2 - b / 2,
                  g = a(t.instance.popper),
                  v = parseFloat(g["margin" + u]),
                  _ = parseFloat(g["border" + u + "Width"]),
                  y = m - t.offsets.popper[p] - v - _;
                return (
                  (y = Math.max(Math.min(s[d] - b, y), 0)),
                  (t.arrowElement = i),
                  (t.offsets.arrow =
                    (w((n = {}), p, Math.round(y)), w(n, h, ""), n)),
                  t
                );
              },
              element: "[x-arrow]",
            },
            flip: {
              order: 600,
              enabled: !0,
              fn: function (t, e) {
                if (B(t.instance.modifiers, "inner")) return t;
                if (t.flipped && t.placement === t.originalPlacement) return t;
                var n = D(
                    t.instance.popper,
                    t.instance.reference,
                    e.padding,
                    e.boundariesElement,
                    t.positionFixed
                  ),
                  i = t.placement.split("-")[0],
                  r = P(i),
                  o = t.placement.split("-")[1] || "",
                  a = [];
                switch (e.behavior) {
                  case "flip":
                    a = [i, r];
                    break;
                  case "clockwise":
                    a = Q(i);
                    break;
                  case "counterclockwise":
                    a = Q(i, !0);
                    break;
                  default:
                    a = e.behavior;
                }
                return (
                  a.forEach(function (s, l) {
                    if (i !== s || a.length === l + 1) return t;
                    (i = t.placement.split("-")[0]), (r = P(i));
                    var c = t.offsets.popper,
                      d = t.offsets.reference,
                      u = Math.floor,
                      p =
                        ("left" === i && u(c.right) > u(d.left)) ||
                        ("right" === i && u(c.left) < u(d.right)) ||
                        ("top" === i && u(c.bottom) > u(d.top)) ||
                        ("bottom" === i && u(c.top) < u(d.bottom)),
                      h = u(c.left) < u(n.left),
                      f = u(c.right) > u(n.right),
                      b = u(c.top) < u(n.top),
                      m = u(c.bottom) > u(n.bottom),
                      g =
                        ("left" === i && h) ||
                        ("right" === i && f) ||
                        ("top" === i && b) ||
                        ("bottom" === i && m),
                      v = -1 !== ["top", "bottom"].indexOf(i),
                      _ =
                        !!e.flipVariations &&
                        ((v && "start" === o && h) ||
                          (v && "end" === o && f) ||
                          (!v && "start" === o && b) ||
                          (!v && "end" === o && m)),
                      y =
                        !!e.flipVariationsByContent &&
                        ((v && "start" === o && f) ||
                          (v && "end" === o && h) ||
                          (!v && "start" === o && m) ||
                          (!v && "end" === o && b)),
                      M = _ || y;
                    (p || g || M) &&
                      ((t.flipped = !0),
                      (p || g) && (i = a[l + 1]),
                      M &&
                        (o = (function (t) {
                          return "end" === t
                            ? "start"
                            : "start" === t
                            ? "end"
                            : t;
                        })(o)),
                      (t.placement = i + (o ? "-" + o : "")),
                      (t.offsets.popper = A(
                        {},
                        t.offsets.popper,
                        R(t.instance.popper, t.offsets.reference, t.placement)
                      )),
                      (t = W(t.instance.modifiers, t, "flip")));
                  }),
                  t
                );
              },
              behavior: "flip",
              padding: 5,
              boundariesElement: "viewport",
              flipVariations: !1,
              flipVariationsByContent: !1,
            },
            inner: {
              order: 700,
              enabled: !1,
              fn: function (t) {
                var e = t.placement,
                  n = e.split("-")[0],
                  i = t.offsets,
                  r = i.popper,
                  o = i.reference,
                  a = -1 !== ["left", "right"].indexOf(n),
                  s = -1 === ["top", "left"].indexOf(n);
                return (
                  (r[a ? "left" : "top"] =
                    o[n] - (s ? r[a ? "width" : "height"] : 0)),
                  (t.placement = P(e)),
                  (t.offsets.popper = x(r)),
                  t
                );
              },
            },
            hide: {
              order: 800,
              enabled: !0,
              fn: function (t) {
                if (!K(t.instance.modifiers, "hide", "preventOverflow"))
                  return t;
                var e = t.offsets.reference,
                  n = I(t.instance.modifiers, function (t) {
                    return "preventOverflow" === t.name;
                  }).boundaries;
                if (
                  e.bottom < n.top ||
                  e.left > n.right ||
                  e.top > n.bottom ||
                  e.right < n.left
                ) {
                  if (!0 === t.hide) return t;
                  (t.hide = !0), (t.attributes["x-out-of-boundaries"] = "");
                } else {
                  if (!1 === t.hide) return t;
                  (t.hide = !1), (t.attributes["x-out-of-boundaries"] = !1);
                }
                return t;
              },
            },
            computeStyle: {
              order: 850,
              enabled: !0,
              fn: function (t, e) {
                var n,
                  i,
                  r = e.x,
                  o = e.y,
                  a = t.offsets.popper,
                  s = I(t.instance.modifiers, function (t) {
                    return "applyStyle" === t.name;
                  }).gpuAcceleration,
                  l = void 0 !== s ? s : e.gpuAcceleration,
                  c = h(t.instance.popper),
                  d = z(c),
                  u = { position: a.position },
                  p = (function (t, e) {
                    var n = t.offsets,
                      i = n.popper,
                      r = n.reference,
                      o = Math.round,
                      a = Math.floor,
                      s = function (t) {
                        return t;
                      },
                      l = o(r.width),
                      c = o(i.width),
                      d = -1 !== ["left", "right"].indexOf(t.placement),
                      u = -1 !== t.placement.indexOf("-"),
                      p = e ? (d || u || l % 2 == c % 2 ? o : a) : s,
                      h = e ? o : s;
                    return {
                      left: p(
                        l % 2 == 1 && c % 2 == 1 && !u && e
                          ? i.left - 1
                          : i.left
                      ),
                      top: h(i.top),
                      bottom: h(i.bottom),
                      right: p(i.right),
                    };
                  })(t, window.devicePixelRatio < 2 || !G),
                  f = "bottom" === r ? "top" : "bottom",
                  b = "right" === o ? "left" : "right",
                  m = F("transform");
                if (
                  ((i =
                    "bottom" === f
                      ? "HTML" === c.nodeName
                        ? -c.clientHeight + p.bottom
                        : -d.height + p.bottom
                      : p.top),
                  (n =
                    "right" === b
                      ? "HTML" === c.nodeName
                        ? -c.clientWidth + p.right
                        : -d.width + p.right
                      : p.left),
                  l && m)
                )
                  (u[m] = "translate3d(" + n + "px, " + i + "px, 0)"),
                    (u[f] = 0),
                    (u[b] = 0),
                    (u.willChange = "transform");
                else {
                  var g = "bottom" === f ? -1 : 1,
                    v = "right" === b ? -1 : 1;
                  (u[f] = i * g), (u[b] = n * v), (u.willChange = f + ", " + b);
                }
                var _ = { "x-placement": t.placement };
                return (
                  (t.attributes = A({}, _, t.attributes)),
                  (t.styles = A({}, u, t.styles)),
                  (t.arrowStyles = A({}, t.offsets.arrow, t.arrowStyles)),
                  t
                );
              },
              gpuAcceleration: !0,
              x: "bottom",
              y: "right",
            },
            applyStyle: {
              order: 900,
              enabled: !0,
              fn: function (t) {
                var e, n;
                return (
                  V(t.instance.popper, t.styles),
                  (e = t.instance.popper),
                  (n = t.attributes),
                  Object.keys(n).forEach(function (t) {
                    !1 !== n[t]
                      ? e.setAttribute(t, n[t])
                      : e.removeAttribute(t);
                  }),
                  t.arrowElement &&
                    Object.keys(t.arrowStyles).length &&
                    V(t.arrowElement, t.arrowStyles),
                  t
                );
              },
              onLoad: function (t, e, n, i, r) {
                var o = E(r, e, t, n.positionFixed),
                  a = q(
                    n.placement,
                    o,
                    e,
                    t,
                    n.modifiers.flip.boundariesElement,
                    n.modifiers.flip.padding
                  );
                return (
                  e.setAttribute("x-placement", a),
                  V(e, { position: n.positionFixed ? "fixed" : "absolute" }),
                  n
                );
              },
              gpuAcceleration: void 0,
            },
          },
        },
        et = (function () {
          function t(e, n) {
            var i = this,
              a =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {};
            M(this, t),
              (this.scheduleUpdate = function () {
                return requestAnimationFrame(i.update);
              }),
              (this.update = r(this.update.bind(this))),
              (this.options = A({}, t.Defaults, a)),
              (this.state = {
                isDestroyed: !1,
                isCreated: !1,
                scrollParents: [],
              }),
              (this.reference = e && e.jquery ? e[0] : e),
              (this.popper = n && n.jquery ? n[0] : n),
              (this.options.modifiers = {}),
              Object.keys(A({}, t.Defaults.modifiers, a.modifiers)).forEach(
                function (e) {
                  i.options.modifiers[e] = A(
                    {},
                    t.Defaults.modifiers[e] || {},
                    a.modifiers ? a.modifiers[e] : {}
                  );
                }
              ),
              (this.modifiers = Object.keys(this.options.modifiers)
                .map(function (t) {
                  return A({ name: t }, i.options.modifiers[t]);
                })
                .sort(function (t, e) {
                  return t.order - e.order;
                })),
              this.modifiers.forEach(function (t) {
                t.enabled &&
                  o(t.onLoad) &&
                  t.onLoad(i.reference, i.popper, i.options, t, i.state);
              }),
              this.update();
            var s = this.options.eventsEnabled;
            s && this.enableEventListeners(), (this.state.eventsEnabled = s);
          }
          return (
            O(t, [
              {
                key: "update",
                value: function () {
                  return N.call(this);
                },
              },
              {
                key: "destroy",
                value: function () {
                  return $.call(this);
                },
              },
              {
                key: "enableEventListeners",
                value: function () {
                  return Y.call(this);
                },
              },
              {
                key: "disableEventListeners",
                value: function () {
                  return U.call(this);
                },
              },
            ]),
            t
          );
        })();
      (et.Utils = ("undefined" != typeof window ? window : t).PopperUtils),
        (et.placements = Z),
        (et.Defaults = tt),
        (e.a = et);
    }).call(this, n(56));
  },
  function (t, e, n) {
    "use strict";
    (function (t) {
      n.d(e, "b", function () {
        return c;
      }),
        n.d(e, "c", function () {
          return d;
        }),
        n.d(e, "a", function () {
          return u;
        });
      var i = n(8),
        r = n(74);
      function o() {
        var t,
          e,
          n = "function" == typeof Symbol ? Symbol : {},
          i = n.iterator || "@@iterator",
          r = n.toStringTag || "@@toStringTag";
        function s(n, i, r, o) {
          var s = i && i.prototype instanceof c ? i : c,
            d = Object.create(s.prototype);
          return (
            a(
              d,
              "_invoke",
              (function (n, i, r) {
                var o,
                  a,
                  s,
                  c = 0,
                  d = r || [],
                  u = !1,
                  p = {
                    p: 0,
                    n: 0,
                    v: t,
                    a: h,
                    f: h.bind(t, 4),
                    d: function (e, n) {
                      return (o = e), (a = 0), (s = t), (p.n = n), l;
                    },
                  };
                function h(n, i) {
                  for (
                    a = n, s = i, e = 0;
                    !u && c && !r && e < d.length;
                    e++
                  ) {
                    var r,
                      o = d[e],
                      h = p.p,
                      f = o[2];
                    n > 3
                      ? (r = f === i) &&
                        ((s = o[(a = o[4]) ? 5 : ((a = 3), 3)]),
                        (o[4] = o[5] = t))
                      : o[0] <= h &&
                        ((r = n < 2 && h < o[1])
                          ? ((a = 0), (p.v = i), (p.n = o[1]))
                          : h < f &&
                            (r = n < 3 || o[0] > i || i > f) &&
                            ((o[4] = n), (o[5] = i), (p.n = f), (a = 0)));
                  }
                  if (r || n > 1) return l;
                  throw ((u = !0), i);
                }
                return function (r, d, f) {
                  if (c > 1) throw TypeError("Generator is already running");
                  for (
                    u && 1 === d && h(d, f), a = d, s = f;
                    (e = a < 2 ? t : s) || !u;

                  ) {
                    o ||
                      (a
                        ? a < 3
                          ? (a > 1 && (p.n = -1), h(a, s))
                          : (p.n = s)
                        : (p.v = s));
                    try {
                      if (((c = 2), o)) {
                        if ((a || (r = "next"), (e = o[r]))) {
                          if (!(e = e.call(o, s)))
                            throw TypeError("iterator result is not an object");
                          if (!e.done) return e;
                          (s = e.value), a < 2 && (a = 0);
                        } else
                          1 === a && (e = o.return) && e.call(o),
                            a < 2 &&
                              ((s = TypeError(
                                "The iterator does not provide a '" +
                                  r +
                                  "' method"
                              )),
                              (a = 1));
                        o = t;
                      } else if ((e = (u = p.n < 0) ? s : n.call(i, p)) !== l)
                        break;
                    } catch (e) {
                      (o = t), (a = 1), (s = e);
                    } finally {
                      c = 1;
                    }
                  }
                  return { value: e, done: u };
                };
              })(n, r, o),
              !0
            ),
            d
          );
        }
        var l = {};
        function c() {}
        function d() {}
        function u() {}
        e = Object.getPrototypeOf;
        var p = [][i]
            ? e(e([][i]()))
            : (a((e = {}), i, function () {
                return this;
              }),
              e),
          h = (u.prototype = c.prototype = Object.create(p));
        function f(t) {
          return (
            Object.setPrototypeOf
              ? Object.setPrototypeOf(t, u)
              : ((t.__proto__ = u), a(t, r, "GeneratorFunction")),
            (t.prototype = Object.create(h)),
            t
          );
        }
        return (
          (d.prototype = u),
          a(h, "constructor", u),
          a(u, "constructor", d),
          (d.displayName = "GeneratorFunction"),
          a(u, r, "GeneratorFunction"),
          a(h),
          a(h, r, "Generator"),
          a(h, i, function () {
            return this;
          }),
          a(h, "toString", function () {
            return "[object Generator]";
          }),
          (o = function () {
            return { w: s, m: f };
          })()
        );
      }
      function a(t, e, n, i) {
        var r = Object.defineProperty;
        try {
          r({}, "", {});
        } catch (t) {
          r = 0;
        }
        (a = function (t, e, n, i) {
          if (e)
            r
              ? r(t, e, {
                  value: n,
                  enumerable: !i,
                  configurable: !i,
                  writable: !i,
                })
              : (t[e] = n);
          else {
            var o = function (e, n) {
              a(t, e, function (t) {
                return this._invoke(e, n, t);
              });
            };
            o("next", 0), o("throw", 1), o("return", 2);
          }
        })(t, e, n, i);
      }
      function s(t, e, n, i, r, o, a) {
        try {
          var s = t[o](a),
            l = s.value;
        } catch (t) {
          return void n(t);
        }
        s.done ? e(l) : Promise.resolve(l).then(i, r);
      }
      function l(t) {
        return function () {
          var e = this,
            n = arguments;
          return new Promise(function (i, r) {
            var o = t.apply(e, n);
            function a(t) {
              s(o, i, r, a, l, "next", t);
            }
            function l(t) {
              s(o, i, r, a, l, "throw", t);
            }
            a(void 0);
          });
        };
      }
      var c = (function () {
          var t = l(
            o().m(function t(e, n) {
              var r,
                a,
                s,
                l,
                c,
                d,
                u = arguments;
              return o().w(
                function (t) {
                  for (;;)
                    switch (t.n) {
                      case 0:
                        return (
                          (r = u.length > 2 && void 0 !== u[2] ? u[2] : {}),
                          (t.p = 1),
                          (l = Object.assign({}, r)),
                          (t.n = 2),
                          Object(i.a)(e, l)
                        );
                      case 2:
                        return (
                          (c = t.v),
                          t.a(
                            2,
                            null != c &&
                              null !== (a = c.data) &&
                              void 0 !== a &&
                              a.status &&
                              !0 === c.data.status &&
                              null != c &&
                              null !== (s = c.data) &&
                              void 0 !== s &&
                              s.data
                              ? c.data.data
                              : null
                          )
                        );
                      case 3:
                        return (
                          (t.p = 3),
                          t.v,
                          displayErrorMessage(
                            null === (d = window) ||
                              void 0 === d ||
                              null === (d = d.__kivicarelang) ||
                              void 0 === d ||
                              null === (d = d.common) ||
                              void 0 === d
                              ? void 0
                              : d.internal_server_error
                          ),
                          t.a(2, null)
                        );
                    }
                },
                t,
                null,
                [[1, 3]]
              );
            })
          );
          return function (e, n) {
            return t.apply(this, arguments);
          };
        })(),
        d = (function () {
          var t = l(
            o().m(function t(e) {
              var n,
                r,
                a,
                s,
                l,
                c,
                d,
                u = arguments;
              return o().w(
                function (t) {
                  for (;;)
                    switch (t.n) {
                      case 0:
                        return (
                          (n = u.length > 1 && void 0 !== u[1] ? u[1] : {}),
                          (r = { rows: [], totalRows: 0, response: [] }),
                          (t.p = 1),
                          (l = Object.assign({}, n)),
                          (t.n = 2),
                          Object(i.a)(e, l)
                        );
                      case 2:
                        return (
                          null != (c = t.v) &&
                            null !== (a = c.data) &&
                            void 0 !== a &&
                            a.status &&
                            !0 === c.data.status &&
                            null != c &&
                            null !== (s = c.data) &&
                            void 0 !== s &&
                            s.data &&
                            ((r.rows = c.data.data),
                            (r.totalRows = c.data.total_rows),
                            (r.response = c.data)),
                          t.a(2, r)
                        );
                      case 3:
                        return (
                          (t.p = 3),
                          t.v,
                          displayErrorMessage(
                            null === (d = window) ||
                              void 0 === d ||
                              null === (d = d.__kivicarelang) ||
                              void 0 === d ||
                              null === (d = d.common) ||
                              void 0 === d
                              ? void 0
                              : d.internal_server_error
                          ),
                          t.a(2, r)
                        );
                    }
                },
                t,
                null,
                [[1, 3]]
              );
            })
          );
          return function (e) {
            return t.apply(this, arguments);
          };
        })(),
        u = (function () {
          var e = l(
            o().m(function e(n) {
              var a,
                s,
                l,
                c,
                d,
                u,
                p,
                h,
                f = arguments;
              return o().w(
                function (e) {
                  for (;;)
                    switch (e.n) {
                      case 0:
                        return (
                          (a = f.length > 1 && void 0 !== f[1] ? f[1] : {}),
                          (s = a.id),
                          (l = t("#".concat(a.clone_ele).concat(s))),
                          (c = "fa fa-clone"),
                          Object(r.a)(l, c),
                          (e.p = 1),
                          (u = Object.assign({}, a)),
                          (e.n = 2),
                          Object(i.b)(n, u)
                        );
                      case 2:
                        if (
                          ((p = e.v),
                          Object(r.b)(l, c),
                          null == p ||
                            null === (d = p.data) ||
                            void 0 === d ||
                            !d.status ||
                            !0 !== p.data.status)
                        ) {
                          e.n = 3;
                          break;
                        }
                        return displayMessage(p.data.message), e.a(2, !0);
                      case 3:
                        return displayErrorMessage(p.data.message), e.a(2, !1);
                      case 4:
                        e.n = 6;
                        break;
                      case 5:
                        return (
                          (e.p = 5),
                          e.v,
                          Object(r.b)(l, c),
                          displayErrorMessage(
                            null === (h = window) ||
                              void 0 === h ||
                              null === (h = h.__kivicarelang) ||
                              void 0 === h ||
                              null === (h = h.common) ||
                              void 0 === h
                              ? void 0
                              : h.internal_server_error
                          ),
                          e.a(2, !1)
                        );
                      case 6:
                        return e.a(2);
                    }
                },
                e,
                null,
                [[1, 5]]
              );
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })();
    }).call(this, n(30));
  },
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  function (t, e, n) {
    "use strict";
    n.d(e, "a", function () {
      return d;
    });
    var i = n(4),
      r = n(45),
      o = n(26),
      a = n(7);
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
        return !t || 0 === Object(a.h)(t).length;
      },
      c = function (t) {
        return {
          handler: function (e, n) {
            if (!Object(o.a)(e, n))
              if (l(e) || l(n)) this[t] = Object(r.a)(e);
              else {
                for (var i in n)
                  Object(a.g)(e, i) || this.$delete(this.$data[t], i);
                for (var s in e) this.$set(this.$data[t], s, e[s]);
              }
          },
        };
      },
      d = function (t, e) {
        return Object(i.c)({
          data: function () {
            return s({}, e, Object(r.a)(this[t]));
          },
          watch: s({}, t, c(e)),
        });
      };
  },
  ,
  ,
  ,
  function (t, e, n) {
    "use strict";
    function i(t, e) {
      for (var n in e) t[n] = e[n];
      return t;
    }
    n.d(e, "a", function () {
      return H;
    }),
      n.d(e, "b", function () {
        return Nt;
      });
    var r = /[!'()*]/g,
      o = function (t) {
        return "%" + t.charCodeAt(0).toString(16);
      },
      a = /%2C/g,
      s = function (t) {
        return encodeURIComponent(t).replace(r, o).replace(a, ",");
      };
    function l(t) {
      try {
        return decodeURIComponent(t);
      } catch (t) {}
      return t;
    }
    var c = function (t) {
      return null == t || "object" == typeof t ? t : String(t);
    };
    function d(t) {
      var e = {};
      return (t = t.trim().replace(/^(\?|#|&)/, ""))
        ? (t.split("&").forEach(function (t) {
            var n = t.replace(/\+/g, " ").split("="),
              i = l(n.shift()),
              r = n.length > 0 ? l(n.join("=")) : null;
            void 0 === e[i]
              ? (e[i] = r)
              : Array.isArray(e[i])
              ? e[i].push(r)
              : (e[i] = [e[i], r]);
          }),
          e)
        : e;
    }
    function u(t) {
      var e = t
        ? Object.keys(t)
            .map(function (e) {
              var n = t[e];
              if (void 0 === n) return "";
              if (null === n) return s(e);
              if (Array.isArray(n)) {
                var i = [];
                return (
                  n.forEach(function (t) {
                    void 0 !== t &&
                      (null === t ? i.push(s(e)) : i.push(s(e) + "=" + s(t)));
                  }),
                  i.join("&")
                );
              }
              return s(e) + "=" + s(n);
            })
            .filter(function (t) {
              return t.length > 0;
            })
            .join("&")
        : null;
      return e ? "?" + e : "";
    }
    var p = /\/?$/;
    function h(t, e, n, i) {
      var r = i && i.options.stringifyQuery,
        o = e.query || {};
      try {
        o = f(o);
      } catch (t) {}
      var a = {
        name: e.name || (t && t.name),
        meta: (t && t.meta) || {},
        path: e.path || "/",
        hash: e.hash || "",
        query: o,
        params: e.params || {},
        fullPath: g(e, r),
        matched: t ? m(t) : [],
      };
      return n && (a.redirectedFrom = g(n, r)), Object.freeze(a);
    }
    function f(t) {
      if (Array.isArray(t)) return t.map(f);
      if (t && "object" == typeof t) {
        var e = {};
        for (var n in t) e[n] = f(t[n]);
        return e;
      }
      return t;
    }
    var b = h(null, { path: "/" });
    function m(t) {
      for (var e = []; t; ) e.unshift(t), (t = t.parent);
      return e;
    }
    function g(t, e) {
      var n = t.path,
        i = t.query;
      void 0 === i && (i = {});
      var r = t.hash;
      return void 0 === r && (r = ""), (n || "/") + (e || u)(i) + r;
    }
    function v(t, e, n) {
      return e === b
        ? t === e
        : !!e &&
            (t.path && e.path
              ? t.path.replace(p, "") === e.path.replace(p, "") &&
                (n || (t.hash === e.hash && _(t.query, e.query)))
              : !(!t.name || !e.name) &&
                t.name === e.name &&
                (n ||
                  (t.hash === e.hash &&
                    _(t.query, e.query) &&
                    _(t.params, e.params))));
    }
    function _(t, e) {
      if ((void 0 === t && (t = {}), void 0 === e && (e = {}), !t || !e))
        return t === e;
      var n = Object.keys(t).sort(),
        i = Object.keys(e).sort();
      return (
        n.length === i.length &&
        n.every(function (n, r) {
          var o = t[n];
          if (i[r] !== n) return !1;
          var a = e[n];
          return null == o || null == a
            ? o === a
            : "object" == typeof o && "object" == typeof a
            ? _(o, a)
            : String(o) === String(a);
        })
      );
    }
    function y(t) {
      for (var e = 0; e < t.matched.length; e++) {
        var n = t.matched[e];
        for (var i in n.instances) {
          var r = n.instances[i],
            o = n.enteredCbs[i];
          if (r && o) {
            delete n.enteredCbs[i];
            for (var a = 0; a < o.length; a++) r._isBeingDestroyed || o[a](r);
          }
        }
      }
    }
    var M = {
      name: "RouterView",
      functional: !0,
      props: { name: { type: String, default: "default" } },
      render: function (t, e) {
        var n = e.props,
          r = e.children,
          o = e.parent,
          a = e.data;
        a.routerView = !0;
        for (
          var s = o.$createElement,
            l = n.name,
            c = o.$route,
            d = o._routerViewCache || (o._routerViewCache = {}),
            u = 0,
            p = !1;
          o && o._routerRoot !== o;

        ) {
          var h = o.$vnode ? o.$vnode.data : {};
          h.routerView && u++,
            h.keepAlive && o._directInactive && o._inactive && (p = !0),
            (o = o.$parent);
        }
        if (((a.routerViewDepth = u), p)) {
          var f = d[l],
            b = f && f.component;
          return b
            ? (f.configProps && O(b, a, f.route, f.configProps), s(b, a, r))
            : s();
        }
        var m = c.matched[u],
          g = m && m.components[l];
        if (!m || !g) return (d[l] = null), s();
        (d[l] = { component: g }),
          (a.registerRouteInstance = function (t, e) {
            var n = m.instances[l];
            ((e && n !== t) || (!e && n === t)) && (m.instances[l] = e);
          }),
          ((a.hook || (a.hook = {})).prepatch = function (t, e) {
            m.instances[l] = e.componentInstance;
          }),
          (a.hook.init = function (t) {
            t.data.keepAlive &&
              t.componentInstance &&
              t.componentInstance !== m.instances[l] &&
              (m.instances[l] = t.componentInstance),
              y(c);
          });
        var v = m.props && m.props[l];
        return (
          v && (i(d[l], { route: c, configProps: v }), O(g, a, c, v)),
          s(g, a, r)
        );
      },
    };
    function O(t, e, n, r) {
      var o = (e.props = (function (t, e) {
        switch (typeof e) {
          case "undefined":
            return;
          case "object":
            return e;
          case "function":
            return e(t);
          case "boolean":
            return e ? t.params : void 0;
          default:
        }
      })(n, r));
      if (o) {
        o = e.props = i({}, o);
        var a = (e.attrs = e.attrs || {});
        for (var s in o)
          (t.props && s in t.props) || ((a[s] = o[s]), delete o[s]);
      }
    }
    function w(t, e, n) {
      var i = t.charAt(0);
      if ("/" === i) return t;
      if ("?" === i || "#" === i) return e + t;
      var r = e.split("/");
      (n && r[r.length - 1]) || r.pop();
      for (var o = t.replace(/^\//, "").split("/"), a = 0; a < o.length; a++) {
        var s = o[a];
        ".." === s ? r.pop() : "." !== s && r.push(s);
      }
      return "" !== r[0] && r.unshift(""), r.join("/");
    }
    function A(t) {
      return t.replace(/\/(?:\s*\/)+/g, "/");
    }
    var x =
        Array.isArray ||
        function (t) {
          return "[object Array]" == Object.prototype.toString.call(t);
        },
      z = function t(e, n, i) {
        return (
          x(n) || ((i = n || i), (n = [])),
          (i = i || {}),
          e instanceof RegExp
            ? (function (t, e) {
                var n = t.source.match(/\((?!\?)/g);
                if (n)
                  for (var i = 0; i < n.length; i++)
                    e.push({
                      name: i,
                      prefix: null,
                      delimiter: null,
                      optional: !1,
                      repeat: !1,
                      partial: !1,
                      asterisk: !1,
                      pattern: null,
                    });
                return P(t, e);
              })(e, n)
            : x(e)
            ? (function (e, n, i) {
                for (var r = [], o = 0; o < e.length; o++)
                  r.push(t(e[o], n, i).source);
                return P(new RegExp("(?:" + r.join("|") + ")", R(i)), n);
              })(e, n, i)
            : (function (t, e, n) {
                return I(D(t, n), e, n);
              })(e, n, i)
        );
      },
      C = D,
      k = q,
      S = I,
      T = new RegExp(
        [
          "(\\\\.)",
          "([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))",
        ].join("|"),
        "g"
      );
    function D(t, e) {
      for (
        var n, i = [], r = 0, o = 0, a = "", s = (e && e.delimiter) || "/";
        null != (n = T.exec(t));

      ) {
        var l = n[0],
          c = n[1],
          d = n.index;
        if (((a += t.slice(o, d)), (o = d + l.length), c)) a += c[1];
        else {
          var u = t[o],
            p = n[2],
            h = n[3],
            f = n[4],
            b = n[5],
            m = n[6],
            g = n[7];
          a && (i.push(a), (a = ""));
          var v = null != p && null != u && u !== p,
            _ = "+" === m || "*" === m,
            y = "?" === m || "*" === m,
            M = n[2] || s,
            O = f || b;
          i.push({
            name: h || r++,
            prefix: p || "",
            delimiter: M,
            optional: y,
            repeat: _,
            partial: v,
            asterisk: !!g,
            pattern: O ? j(O) : g ? ".*" : "[^" + E(M) + "]+?",
          });
        }
      }
      return o < t.length && (a += t.substr(o)), a && i.push(a), i;
    }
    function L(t) {
      return encodeURI(t).replace(/[\/?#]/g, function (t) {
        return "%" + t.charCodeAt(0).toString(16).toUpperCase();
      });
    }
    function q(t, e) {
      for (var n = new Array(t.length), i = 0; i < t.length; i++)
        "object" == typeof t[i] &&
          (n[i] = new RegExp("^(?:" + t[i].pattern + ")$", R(e)));
      return function (e, i) {
        for (
          var r = "",
            o = e || {},
            a = (i || {}).pretty ? L : encodeURIComponent,
            s = 0;
          s < t.length;
          s++
        ) {
          var l = t[s];
          if ("string" != typeof l) {
            var c,
              d = o[l.name];
            if (null == d) {
              if (l.optional) {
                l.partial && (r += l.prefix);
                continue;
              }
              throw new TypeError('Expected "' + l.name + '" to be defined');
            }
            if (x(d)) {
              if (!l.repeat)
                throw new TypeError(
                  'Expected "' +
                    l.name +
                    '" to not repeat, but received `' +
                    JSON.stringify(d) +
                    "`"
                );
              if (0 === d.length) {
                if (l.optional) continue;
                throw new TypeError(
                  'Expected "' + l.name + '" to not be empty'
                );
              }
              for (var u = 0; u < d.length; u++) {
                if (((c = a(d[u])), !n[s].test(c)))
                  throw new TypeError(
                    'Expected all "' +
                      l.name +
                      '" to match "' +
                      l.pattern +
                      '", but received `' +
                      JSON.stringify(c) +
                      "`"
                  );
                r += (0 === u ? l.prefix : l.delimiter) + c;
              }
            } else {
              if (
                ((c = l.asterisk
                  ? encodeURI(d).replace(/[?#]/g, function (t) {
                      return "%" + t.charCodeAt(0).toString(16).toUpperCase();
                    })
                  : a(d)),
                !n[s].test(c))
              )
                throw new TypeError(
                  'Expected "' +
                    l.name +
                    '" to match "' +
                    l.pattern +
                    '", but received "' +
                    c +
                    '"'
                );
              r += l.prefix + c;
            }
          } else r += l;
        }
        return r;
      };
    }
    function E(t) {
      return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g, "\\$1");
    }
    function j(t) {
      return t.replace(/([=!:$\/()])/g, "\\$1");
    }
    function P(t, e) {
      return (t.keys = e), t;
    }
    function R(t) {
      return t && t.sensitive ? "" : "i";
    }
    function I(t, e, n) {
      x(e) || ((n = e || n), (e = []));
      for (
        var i = (n = n || {}).strict, r = !1 !== n.end, o = "", a = 0;
        a < t.length;
        a++
      ) {
        var s = t[a];
        if ("string" == typeof s) o += E(s);
        else {
          var l = E(s.prefix),
            c = "(?:" + s.pattern + ")";
          e.push(s),
            s.repeat && (c += "(?:" + l + c + ")*"),
            (o += c =
              s.optional
                ? s.partial
                  ? l + "(" + c + ")?"
                  : "(?:" + l + "(" + c + "))?"
                : l + "(" + c + ")");
        }
      }
      var d = E(n.delimiter || "/"),
        u = o.slice(-d.length) === d;
      return (
        i || (o = (u ? o.slice(0, -d.length) : o) + "(?:" + d + "(?=$))?"),
        (o += r ? "$" : i && u ? "" : "(?=" + d + "|$)"),
        P(new RegExp("^" + o, R(n)), e)
      );
    }
    (z.parse = C),
      (z.compile = function (t, e) {
        return q(D(t, e), e);
      }),
      (z.tokensToFunction = k),
      (z.tokensToRegExp = S);
    var W = Object.create(null);
    function N(t, e, n) {
      e = e || {};
      try {
        var i = W[t] || (W[t] = z.compile(t));
        return (
          "string" == typeof e.pathMatch && (e[0] = e.pathMatch),
          i(e, { pretty: !0 })
        );
      } catch (t) {
        return "";
      } finally {
        delete e[0];
      }
    }
    function B(t, e, n, r) {
      var o = "string" == typeof t ? { path: t } : t;
      if (o._normalized) return o;
      if (o.name) {
        var a = (o = i({}, t)).params;
        return a && "object" == typeof a && (o.params = i({}, a)), o;
      }
      if (!o.path && o.params && e) {
        (o = i({}, o))._normalized = !0;
        var s = i(i({}, e.params), o.params);
        if (e.name) (o.name = e.name), (o.params = s);
        else if (e.matched.length) {
          var l = e.matched[e.matched.length - 1].path;
          o.path = N(l, s, e.path);
        }
        return o;
      }
      var u = (function (t) {
          var e = "",
            n = "",
            i = t.indexOf("#");
          i >= 0 && ((e = t.slice(i)), (t = t.slice(0, i)));
          var r = t.indexOf("?");
          return (
            r >= 0 && ((n = t.slice(r + 1)), (t = t.slice(0, r))),
            { path: t, query: n, hash: e }
          );
        })(o.path || ""),
        p = (e && e.path) || "/",
        h = u.path ? w(u.path, p, n || o.append) : p,
        f = (function (t, e, n) {
          void 0 === e && (e = {});
          var i,
            r = n || d;
          try {
            i = r(t || "");
          } catch (t) {
            i = {};
          }
          for (var o in e) {
            var a = e[o];
            i[o] = Array.isArray(a) ? a.map(c) : c(a);
          }
          return i;
        })(u.query, o.query, r && r.options.parseQuery),
        b = o.hash || u.hash;
      return (
        b && "#" !== b.charAt(0) && (b = "#" + b),
        { _normalized: !0, path: h, query: f, hash: b }
      );
    }
    var F,
      $ = function () {},
      H = {
        name: "RouterLink",
        props: {
          to: { type: [String, Object], required: !0 },
          tag: { type: String, default: "a" },
          custom: Boolean,
          exact: Boolean,
          exactPath: Boolean,
          append: Boolean,
          replace: Boolean,
          activeClass: String,
          exactActiveClass: String,
          ariaCurrentValue: { type: String, default: "page" },
          event: { type: [String, Array], default: "click" },
        },
        render: function (t) {
          var e = this,
            n = this.$router,
            r = this.$route,
            o = n.resolve(this.to, r, this.append),
            a = o.location,
            s = o.route,
            l = o.href,
            c = {},
            d = n.options.linkActiveClass,
            u = n.options.linkExactActiveClass,
            f = null == d ? "router-link-active" : d,
            b = null == u ? "router-link-exact-active" : u,
            m = null == this.activeClass ? f : this.activeClass,
            g = null == this.exactActiveClass ? b : this.exactActiveClass,
            _ = s.redirectedFrom ? h(null, B(s.redirectedFrom), null, n) : s;
          (c[g] = v(r, _, this.exactPath)),
            (c[m] =
              this.exact || this.exactPath
                ? c[g]
                : (function (t, e) {
                    return (
                      0 ===
                        t.path
                          .replace(p, "/")
                          .indexOf(e.path.replace(p, "/")) &&
                      (!e.hash || t.hash === e.hash) &&
                      (function (t, e) {
                        for (var n in e) if (!(n in t)) return !1;
                        return !0;
                      })(t.query, e.query)
                    );
                  })(r, _));
          var y = c[g] ? this.ariaCurrentValue : null,
            M = function (t) {
              Y(t) && (e.replace ? n.replace(a, $) : n.push(a, $));
            },
            O = { click: Y };
          Array.isArray(this.event)
            ? this.event.forEach(function (t) {
                O[t] = M;
              })
            : (O[this.event] = M);
          var w = { class: c },
            A =
              !this.$scopedSlots.$hasNormal &&
              this.$scopedSlots.default &&
              this.$scopedSlots.default({
                href: l,
                route: s,
                navigate: M,
                isActive: c[m],
                isExactActive: c[g],
              });
          if (A) {
            if (1 === A.length) return A[0];
            if (A.length > 1 || !A.length)
              return 0 === A.length ? t() : t("span", {}, A);
          }
          if ("a" === this.tag)
            (w.on = O), (w.attrs = { href: l, "aria-current": y });
          else {
            var x = (function t(e) {
              var n;
              if (e)
                for (var i = 0; i < e.length; i++) {
                  if ("a" === (n = e[i]).tag) return n;
                  if (n.children && (n = t(n.children))) return n;
                }
            })(this.$slots.default);
            if (x) {
              x.isStatic = !1;
              var z = (x.data = i({}, x.data));
              for (var C in ((z.on = z.on || {}), z.on)) {
                var k = z.on[C];
                C in O && (z.on[C] = Array.isArray(k) ? k : [k]);
              }
              for (var S in O) S in z.on ? z.on[S].push(O[S]) : (z.on[S] = M);
              var T = (x.data.attrs = i({}, x.data.attrs));
              (T.href = l), (T["aria-current"] = y);
            } else w.on = O;
          }
          return t(this.tag, w, this.$slots.default);
        },
      };
    function Y(t) {
      if (
        !(
          t.metaKey ||
          t.altKey ||
          t.ctrlKey ||
          t.shiftKey ||
          t.defaultPrevented ||
          (void 0 !== t.button && 0 !== t.button)
        )
      ) {
        if (t.currentTarget && t.currentTarget.getAttribute) {
          var e = t.currentTarget.getAttribute("target");
          if (/\b_blank\b/i.test(e)) return;
        }
        return t.preventDefault && t.preventDefault(), !0;
      }
    }
    var U = "undefined" != typeof window;
    function X(t, e, n, i, r) {
      var o = e || [],
        a = n || Object.create(null),
        s = i || Object.create(null);
      t.forEach(function (t) {
        !(function t(e, n, i, r, o, a) {
          var s = r.path,
            l = r.name,
            c = r.pathToRegexpOptions || {},
            d = (function (t, e, n) {
              return (
                n || (t = t.replace(/\/$/, "")),
                "/" === t[0] || null == e ? t : A(e.path + "/" + t)
              );
            })(s, o, c.strict);
          "boolean" == typeof r.caseSensitive &&
            (c.sensitive = r.caseSensitive);
          var u = {
            path: d,
            regex: V(d, c),
            components: r.components || { default: r.component },
            alias: r.alias
              ? "string" == typeof r.alias
                ? [r.alias]
                : r.alias
              : [],
            instances: {},
            enteredCbs: {},
            name: l,
            parent: o,
            matchAs: a,
            redirect: r.redirect,
            beforeEnter: r.beforeEnter,
            meta: r.meta || {},
            props:
              null == r.props
                ? {}
                : r.components
                ? r.props
                : { default: r.props },
          };
          if (
            (r.children &&
              r.children.forEach(function (r) {
                var o = a ? A(a + "/" + r.path) : void 0;
                t(e, n, i, r, u, o);
              }),
            n[u.path] || (e.push(u.path), (n[u.path] = u)),
            void 0 !== r.alias)
          )
            for (
              var p = Array.isArray(r.alias) ? r.alias : [r.alias], h = 0;
              h < p.length;
              ++h
            ) {
              var f = { path: p[h], children: r.children };
              t(e, n, i, f, o, u.path || "/");
            }
          l && (i[l] || (i[l] = u));
        })(o, a, s, t, r);
      });
      for (var l = 0, c = o.length; l < c; l++)
        "*" === o[l] && (o.push(o.splice(l, 1)[0]), c--, l--);
      return { pathList: o, pathMap: a, nameMap: s };
    }
    function V(t, e) {
      return z(t, [], e);
    }
    function G(t, e, n) {
      var i = e.match(t);
      if (!i) return !1;
      if (!n) return !0;
      for (var r = 1, o = i.length; r < o; ++r) {
        var a = t.keys[r - 1];
        a &&
          (n[a.name || "pathMatch"] = "string" == typeof i[r] ? l(i[r]) : i[r]);
      }
      return !0;
    }
    var K =
      U && window.performance && window.performance.now
        ? window.performance
        : Date;
    function Z() {
      return K.now().toFixed(3);
    }
    var J = Z();
    function Q() {
      return J;
    }
    function tt(t) {
      return (J = t);
    }
    var et = Object.create(null);
    function nt() {
      "scrollRestoration" in window.history &&
        (window.history.scrollRestoration = "manual");
      var t = window.location.protocol + "//" + window.location.host,
        e = window.location.href.replace(t, ""),
        n = i({}, window.history.state);
      return (
        (n.key = Q()),
        window.history.replaceState(n, "", e),
        window.addEventListener("popstate", ot),
        function () {
          window.removeEventListener("popstate", ot);
        }
      );
    }
    function it(t, e, n, i) {
      if (t.app) {
        var r = t.options.scrollBehavior;
        r &&
          t.app.$nextTick(function () {
            var o = (function () {
                var t = Q();
                if (t) return et[t];
              })(),
              a = r.call(t, e, n, i ? o : null);
            a &&
              ("function" == typeof a.then
                ? a
                    .then(function (t) {
                      dt(t, o);
                    })
                    .catch(function (t) {})
                : dt(a, o));
          });
      }
    }
    function rt() {
      var t = Q();
      t && (et[t] = { x: window.pageXOffset, y: window.pageYOffset });
    }
    function ot(t) {
      rt(), t.state && t.state.key && tt(t.state.key);
    }
    function at(t) {
      return lt(t.x) || lt(t.y);
    }
    function st(t) {
      return {
        x: lt(t.x) ? t.x : window.pageXOffset,
        y: lt(t.y) ? t.y : window.pageYOffset,
      };
    }
    function lt(t) {
      return "number" == typeof t;
    }
    var ct = /^#\d/;
    function dt(t, e) {
      var n,
        i = "object" == typeof t;
      if (i && "string" == typeof t.selector) {
        var r = ct.test(t.selector)
          ? document.getElementById(t.selector.slice(1))
          : document.querySelector(t.selector);
        if (r) {
          var o = t.offset && "object" == typeof t.offset ? t.offset : {};
          e = (function (t, e) {
            var n = document.documentElement.getBoundingClientRect(),
              i = t.getBoundingClientRect();
            return { x: i.left - n.left - e.x, y: i.top - n.top - e.y };
          })(r, (o = { x: lt((n = o).x) ? n.x : 0, y: lt(n.y) ? n.y : 0 }));
        } else at(t) && (e = st(t));
      } else i && at(t) && (e = st(t));
      e &&
        ("scrollBehavior" in document.documentElement.style
          ? window.scrollTo({ left: e.x, top: e.y, behavior: t.behavior })
          : window.scrollTo(e.x, e.y));
    }
    var ut,
      pt =
        U &&
        ((-1 === (ut = window.navigator.userAgent).indexOf("Android 2.") &&
          -1 === ut.indexOf("Android 4.0")) ||
          -1 === ut.indexOf("Mobile Safari") ||
          -1 !== ut.indexOf("Chrome") ||
          -1 !== ut.indexOf("Windows Phone")) &&
        window.history &&
        "function" == typeof window.history.pushState;
    function ht(t, e) {
      rt();
      var n = window.history;
      try {
        if (e) {
          var r = i({}, n.state);
          (r.key = Q()), n.replaceState(r, "", t);
        } else n.pushState({ key: tt(Z()) }, "", t);
      } catch (n) {
        window.location[e ? "replace" : "assign"](t);
      }
    }
    function ft(t) {
      ht(t, !0);
    }
    var bt = { redirected: 2, aborted: 4, cancelled: 8, duplicated: 16 };
    function mt(t, e) {
      return gt(
        t,
        e,
        bt.cancelled,
        'Navigation cancelled from "' +
          t.fullPath +
          '" to "' +
          e.fullPath +
          '" with a new navigation.'
      );
    }
    function gt(t, e, n, i) {
      var r = new Error(i);
      return (r._isRouter = !0), (r.from = t), (r.to = e), (r.type = n), r;
    }
    var vt = ["params", "query", "hash"];
    function _t(t) {
      return Object.prototype.toString.call(t).indexOf("Error") > -1;
    }
    function yt(t, e) {
      return _t(t) && t._isRouter && (null == e || t.type === e);
    }
    function Mt(t, e, n) {
      var i = function (r) {
        r >= t.length
          ? n()
          : t[r]
          ? e(t[r], function () {
              i(r + 1);
            })
          : i(r + 1);
      };
      i(0);
    }
    function Ot(t, e) {
      return wt(
        t.map(function (t) {
          return Object.keys(t.components).map(function (n) {
            return e(t.components[n], t.instances[n], t, n);
          });
        })
      );
    }
    function wt(t) {
      return Array.prototype.concat.apply([], t);
    }
    var At =
      "function" == typeof Symbol && "symbol" == typeof Symbol.toStringTag;
    function xt(t) {
      var e = !1;
      return function () {
        for (var n = [], i = arguments.length; i--; ) n[i] = arguments[i];
        if (!e) return (e = !0), t.apply(this, n);
      };
    }
    var zt = function (t, e) {
      (this.router = t),
        (this.base = (function (t) {
          if (!t)
            if (U) {
              var e = document.querySelector("base");
              t = (t = (e && e.getAttribute("href")) || "/").replace(
                /^https?:\/\/[^\/]+/,
                ""
              );
            } else t = "/";
          return "/" !== t.charAt(0) && (t = "/" + t), t.replace(/\/$/, "");
        })(e)),
        (this.current = b),
        (this.pending = null),
        (this.ready = !1),
        (this.readyCbs = []),
        (this.readyErrorCbs = []),
        (this.errorCbs = []),
        (this.listeners = []);
    };
    function Ct(t, e, n, i) {
      var r = Ot(t, function (t, i, r, o) {
        var a = (function (t, e) {
          return "function" != typeof t && (t = F.extend(t)), t.options[e];
        })(t, e);
        if (a)
          return Array.isArray(a)
            ? a.map(function (t) {
                return n(t, i, r, o);
              })
            : n(a, i, r, o);
      });
      return wt(i ? r.reverse() : r);
    }
    function kt(t, e) {
      if (e)
        return function () {
          return t.apply(e, arguments);
        };
    }
    (zt.prototype.listen = function (t) {
      this.cb = t;
    }),
      (zt.prototype.onReady = function (t, e) {
        this.ready
          ? t()
          : (this.readyCbs.push(t), e && this.readyErrorCbs.push(e));
      }),
      (zt.prototype.onError = function (t) {
        this.errorCbs.push(t);
      }),
      (zt.prototype.transitionTo = function (t, e, n) {
        var i,
          r = this;
        try {
          i = this.router.match(t, this.current);
        } catch (t) {
          throw (
            (this.errorCbs.forEach(function (e) {
              e(t);
            }),
            t)
          );
        }
        var o = this.current;
        this.confirmTransition(
          i,
          function () {
            r.updateRoute(i),
              e && e(i),
              r.ensureURL(),
              r.router.afterHooks.forEach(function (t) {
                t && t(i, o);
              }),
              r.ready ||
                ((r.ready = !0),
                r.readyCbs.forEach(function (t) {
                  t(i);
                }));
          },
          function (t) {
            n && n(t),
              t &&
                !r.ready &&
                ((yt(t, bt.redirected) && o === b) ||
                  ((r.ready = !0),
                  r.readyErrorCbs.forEach(function (e) {
                    e(t);
                  })));
          }
        );
      }),
      (zt.prototype.confirmTransition = function (t, e, n) {
        var i = this,
          r = this.current;
        this.pending = t;
        var o,
          a,
          s = function (t) {
            !yt(t) &&
              _t(t) &&
              i.errorCbs.length &&
              i.errorCbs.forEach(function (e) {
                e(t);
              }),
              n && n(t);
          },
          l = t.matched.length - 1,
          c = r.matched.length - 1;
        if (v(t, r) && l === c && t.matched[l] === r.matched[c])
          return (
            this.ensureURL(),
            t.hash && it(this.router, r, t, !1),
            s(
              (((a = gt(
                (o = r),
                t,
                bt.duplicated,
                'Avoided redundant navigation to current location: "' +
                  o.fullPath +
                  '".'
              )).name = "NavigationDuplicated"),
              a)
            )
          );
        var d = (function (t, e) {
            var n,
              i = Math.max(t.length, e.length);
            for (n = 0; n < i && t[n] === e[n]; n++);
            return {
              updated: e.slice(0, n),
              activated: e.slice(n),
              deactivated: t.slice(n),
            };
          })(this.current.matched, t.matched),
          u = d.updated,
          p = d.deactivated,
          h = d.activated,
          f = [].concat(
            (function (t) {
              return Ct(t, "beforeRouteLeave", kt, !0);
            })(p),
            this.router.beforeHooks,
            (function (t) {
              return Ct(t, "beforeRouteUpdate", kt);
            })(u),
            h.map(function (t) {
              return t.beforeEnter;
            }),
            (function (t) {
              return function (e, n, i) {
                var r = !1,
                  o = 0,
                  a = null;
                Ot(t, function (t, e, n, s) {
                  if ("function" == typeof t && void 0 === t.cid) {
                    (r = !0), o++;
                    var l,
                      c = xt(function (e) {
                        var r;
                        ((r = e).__esModule ||
                          (At && "Module" === r[Symbol.toStringTag])) &&
                          (e = e.default),
                          (t.resolved =
                            "function" == typeof e ? e : F.extend(e)),
                          (n.components[s] = e),
                          --o <= 0 && i();
                      }),
                      d = xt(function (t) {
                        var e =
                          "Failed to resolve async component " + s + ": " + t;
                        a || ((a = _t(t) ? t : new Error(e)), i(a));
                      });
                    try {
                      l = t(c, d);
                    } catch (t) {
                      d(t);
                    }
                    if (l)
                      if ("function" == typeof l.then) l.then(c, d);
                      else {
                        var u = l.component;
                        u && "function" == typeof u.then && u.then(c, d);
                      }
                  }
                }),
                  r || i();
              };
            })(h)
          ),
          b = function (e, n) {
            if (i.pending !== t) return s(mt(r, t));
            try {
              e(t, r, function (e) {
                !1 === e
                  ? (i.ensureURL(!0),
                    s(
                      (function (t, e) {
                        return gt(
                          t,
                          e,
                          bt.aborted,
                          'Navigation aborted from "' +
                            t.fullPath +
                            '" to "' +
                            e.fullPath +
                            '" via a navigation guard.'
                        );
                      })(r, t)
                    ))
                  : _t(e)
                  ? (i.ensureURL(!0), s(e))
                  : "string" == typeof e ||
                    ("object" == typeof e &&
                      ("string" == typeof e.path || "string" == typeof e.name))
                  ? (s(
                      (function (t, e) {
                        return gt(
                          t,
                          e,
                          bt.redirected,
                          'Redirected when going from "' +
                            t.fullPath +
                            '" to "' +
                            (function (t) {
                              if ("string" == typeof t) return t;
                              if ("path" in t) return t.path;
                              var e = {};
                              return (
                                vt.forEach(function (n) {
                                  n in t && (e[n] = t[n]);
                                }),
                                JSON.stringify(e, null, 2)
                              );
                            })(e) +
                            '" via a navigation guard.'
                        );
                      })(r, t)
                    ),
                    "object" == typeof e && e.replace
                      ? i.replace(e)
                      : i.push(e))
                  : n(e);
              });
            } catch (t) {
              s(t);
            }
          };
        Mt(f, b, function () {
          Mt(
            (function (t) {
              return Ct(t, "beforeRouteEnter", function (t, e, n, i) {
                return (function (t, e, n) {
                  return function (i, r, o) {
                    return t(i, r, function (t) {
                      "function" == typeof t &&
                        (e.enteredCbs[n] || (e.enteredCbs[n] = []),
                        e.enteredCbs[n].push(t)),
                        o(t);
                    });
                  };
                })(t, n, i);
              });
            })(h).concat(i.router.resolveHooks),
            b,
            function () {
              if (i.pending !== t) return s(mt(r, t));
              (i.pending = null),
                e(t),
                i.router.app &&
                  i.router.app.$nextTick(function () {
                    y(t);
                  });
            }
          );
        });
      }),
      (zt.prototype.updateRoute = function (t) {
        (this.current = t), this.cb && this.cb(t);
      }),
      (zt.prototype.setupListeners = function () {}),
      (zt.prototype.teardown = function () {
        this.listeners.forEach(function (t) {
          t();
        }),
          (this.listeners = []),
          (this.current = b),
          (this.pending = null);
      });
    var St = (function (t) {
      function e(e, n) {
        t.call(this, e, n), (this._startLocation = Tt(this.base));
      }
      return (
        t && (e.__proto__ = t),
        (e.prototype = Object.create(t && t.prototype)),
        (e.prototype.constructor = e),
        (e.prototype.setupListeners = function () {
          var t = this;
          if (!(this.listeners.length > 0)) {
            var e = this.router,
              n = e.options.scrollBehavior,
              i = pt && n;
            i && this.listeners.push(nt());
            var r = function () {
              var n = t.current,
                r = Tt(t.base);
              (t.current === b && r === t._startLocation) ||
                t.transitionTo(r, function (t) {
                  i && it(e, t, n, !0);
                });
            };
            window.addEventListener("popstate", r),
              this.listeners.push(function () {
                window.removeEventListener("popstate", r);
              });
          }
        }),
        (e.prototype.go = function (t) {
          window.history.go(t);
        }),
        (e.prototype.push = function (t, e, n) {
          var i = this,
            r = this.current;
          this.transitionTo(
            t,
            function (t) {
              ht(A(i.base + t.fullPath)), it(i.router, t, r, !1), e && e(t);
            },
            n
          );
        }),
        (e.prototype.replace = function (t, e, n) {
          var i = this,
            r = this.current;
          this.transitionTo(
            t,
            function (t) {
              ft(A(i.base + t.fullPath)), it(i.router, t, r, !1), e && e(t);
            },
            n
          );
        }),
        (e.prototype.ensureURL = function (t) {
          if (Tt(this.base) !== this.current.fullPath) {
            var e = A(this.base + this.current.fullPath);
            t ? ht(e) : ft(e);
          }
        }),
        (e.prototype.getCurrentLocation = function () {
          return Tt(this.base);
        }),
        e
      );
    })(zt);
    function Tt(t) {
      var e = window.location.pathname,
        n = e.toLowerCase(),
        i = t.toLowerCase();
      return (
        !t ||
          (n !== i && 0 !== n.indexOf(A(i + "/"))) ||
          (e = e.slice(t.length)),
        (e || "/") + window.location.search + window.location.hash
      );
    }
    var Dt = (function (t) {
      function e(e, n, i) {
        t.call(this, e, n),
          (i &&
            (function (t) {
              var e = Tt(t);
              if (!/^\/#/.test(e))
                return window.location.replace(A(t + "/#" + e)), !0;
            })(this.base)) ||
            Lt();
      }
      return (
        t && (e.__proto__ = t),
        (e.prototype = Object.create(t && t.prototype)),
        (e.prototype.constructor = e),
        (e.prototype.setupListeners = function () {
          var t = this;
          if (!(this.listeners.length > 0)) {
            var e = this.router.options.scrollBehavior,
              n = pt && e;
            n && this.listeners.push(nt());
            var i = function () {
                var e = t.current;
                Lt() &&
                  t.transitionTo(qt(), function (i) {
                    n && it(t.router, i, e, !0), pt || Pt(i.fullPath);
                  });
              },
              r = pt ? "popstate" : "hashchange";
            window.addEventListener(r, i),
              this.listeners.push(function () {
                window.removeEventListener(r, i);
              });
          }
        }),
        (e.prototype.push = function (t, e, n) {
          var i = this,
            r = this.current;
          this.transitionTo(
            t,
            function (t) {
              jt(t.fullPath), it(i.router, t, r, !1), e && e(t);
            },
            n
          );
        }),
        (e.prototype.replace = function (t, e, n) {
          var i = this,
            r = this.current;
          this.transitionTo(
            t,
            function (t) {
              Pt(t.fullPath), it(i.router, t, r, !1), e && e(t);
            },
            n
          );
        }),
        (e.prototype.go = function (t) {
          window.history.go(t);
        }),
        (e.prototype.ensureURL = function (t) {
          var e = this.current.fullPath;
          qt() !== e && (t ? jt(e) : Pt(e));
        }),
        (e.prototype.getCurrentLocation = function () {
          return qt();
        }),
        e
      );
    })(zt);
    function Lt() {
      var t = qt();
      return "/" === t.charAt(0) || (Pt("/" + t), !1);
    }
    function qt() {
      var t = window.location.href,
        e = t.indexOf("#");
      return e < 0 ? "" : (t = t.slice(e + 1));
    }
    function Et(t) {
      var e = window.location.href,
        n = e.indexOf("#");
      return (n >= 0 ? e.slice(0, n) : e) + "#" + t;
    }
    function jt(t) {
      pt ? ht(Et(t)) : (window.location.hash = t);
    }
    function Pt(t) {
      pt ? ft(Et(t)) : window.location.replace(Et(t));
    }
    var Rt = (function (t) {
        function e(e, n) {
          t.call(this, e, n), (this.stack = []), (this.index = -1);
        }
        return (
          t && (e.__proto__ = t),
          (e.prototype = Object.create(t && t.prototype)),
          (e.prototype.constructor = e),
          (e.prototype.push = function (t, e, n) {
            var i = this;
            this.transitionTo(
              t,
              function (t) {
                (i.stack = i.stack.slice(0, i.index + 1).concat(t)),
                  i.index++,
                  e && e(t);
              },
              n
            );
          }),
          (e.prototype.replace = function (t, e, n) {
            var i = this;
            this.transitionTo(
              t,
              function (t) {
                (i.stack = i.stack.slice(0, i.index).concat(t)), e && e(t);
              },
              n
            );
          }),
          (e.prototype.go = function (t) {
            var e = this,
              n = this.index + t;
            if (!(n < 0 || n >= this.stack.length)) {
              var i = this.stack[n];
              this.confirmTransition(
                i,
                function () {
                  var t = e.current;
                  (e.index = n),
                    e.updateRoute(i),
                    e.router.afterHooks.forEach(function (e) {
                      e && e(i, t);
                    });
                },
                function (t) {
                  yt(t, bt.duplicated) && (e.index = n);
                }
              );
            }
          }),
          (e.prototype.getCurrentLocation = function () {
            var t = this.stack[this.stack.length - 1];
            return t ? t.fullPath : "/";
          }),
          (e.prototype.ensureURL = function () {}),
          e
        );
      })(zt),
      It = function (t) {
        void 0 === t && (t = {}),
          (this.app = null),
          (this.apps = []),
          (this.options = t),
          (this.beforeHooks = []),
          (this.resolveHooks = []),
          (this.afterHooks = []),
          (this.matcher = (function (t, e) {
            var n = X(t),
              i = n.pathList,
              r = n.pathMap,
              o = n.nameMap;
            function a(t, n, a) {
              var l = B(t, n, !1, e),
                c = l.name;
              if (c) {
                var d = o[c];
                if (!d) return s(null, l);
                var u = d.regex.keys
                  .filter(function (t) {
                    return !t.optional;
                  })
                  .map(function (t) {
                    return t.name;
                  });
                if (
                  ("object" != typeof l.params && (l.params = {}),
                  n && "object" == typeof n.params)
                )
                  for (var p in n.params)
                    !(p in l.params) &&
                      u.indexOf(p) > -1 &&
                      (l.params[p] = n.params[p]);
                return (l.path = N(d.path, l.params)), s(d, l, a);
              }
              if (l.path) {
                l.params = {};
                for (var h = 0; h < i.length; h++) {
                  var f = i[h],
                    b = r[f];
                  if (G(b.regex, l.path, l.params)) return s(b, l, a);
                }
              }
              return s(null, l);
            }
            function s(t, n, i) {
              return t && t.redirect
                ? (function (t, n) {
                    var i = t.redirect,
                      r = "function" == typeof i ? i(h(t, n, null, e)) : i;
                    if (
                      ("string" == typeof r && (r = { path: r }),
                      !r || "object" != typeof r)
                    )
                      return s(null, n);
                    var l = r,
                      c = l.name,
                      d = l.path,
                      u = n.query,
                      p = n.hash,
                      f = n.params;
                    if (
                      ((u = l.hasOwnProperty("query") ? l.query : u),
                      (p = l.hasOwnProperty("hash") ? l.hash : p),
                      (f = l.hasOwnProperty("params") ? l.params : f),
                      c)
                    )
                      return (
                        o[c],
                        a(
                          {
                            _normalized: !0,
                            name: c,
                            query: u,
                            hash: p,
                            params: f,
                          },
                          void 0,
                          n
                        )
                      );
                    if (d) {
                      var b = (function (t, e) {
                        return w(t, e.parent ? e.parent.path : "/", !0);
                      })(d, t);
                      return a(
                        { _normalized: !0, path: N(b, f), query: u, hash: p },
                        void 0,
                        n
                      );
                    }
                    return s(null, n);
                  })(t, i || n)
                : t && t.matchAs
                ? (function (t, e, n) {
                    var i = a({ _normalized: !0, path: N(n, e.params) });
                    if (i) {
                      var r = i.matched,
                        o = r[r.length - 1];
                      return (e.params = i.params), s(o, e);
                    }
                    return s(null, e);
                  })(0, n, t.matchAs)
                : h(t, n, i, e);
            }
            return {
              match: a,
              addRoute: function (t, e) {
                var n = "object" != typeof t ? o[t] : void 0;
                X([e || t], i, r, o, n),
                  n &&
                    n.alias.length &&
                    X(
                      n.alias.map(function (t) {
                        return { path: t, children: [e] };
                      }),
                      i,
                      r,
                      o,
                      n
                    );
              },
              getRoutes: function () {
                return i.map(function (t) {
                  return r[t];
                });
              },
              addRoutes: function (t) {
                X(t, i, r, o);
              },
            };
          })(t.routes || [], this));
        var e = t.mode || "hash";
        switch (
          ((this.fallback = "history" === e && !pt && !1 !== t.fallback),
          this.fallback && (e = "hash"),
          U || (e = "abstract"),
          (this.mode = e),
          e)
        ) {
          case "history":
            this.history = new St(this, t.base);
            break;
          case "hash":
            this.history = new Dt(this, t.base, this.fallback);
            break;
          case "abstract":
            this.history = new Rt(this, t.base);
            break;
          default:
        }
      },
      Wt = { currentRoute: { configurable: !0 } };
    (It.prototype.match = function (t, e, n) {
      return this.matcher.match(t, e, n);
    }),
      (Wt.currentRoute.get = function () {
        return this.history && this.history.current;
      }),
      (It.prototype.init = function (t) {
        var e = this;
        if (
          (this.apps.push(t),
          t.$once("hook:destroyed", function () {
            var n = e.apps.indexOf(t);
            n > -1 && e.apps.splice(n, 1),
              e.app === t && (e.app = e.apps[0] || null),
              e.app || e.history.teardown();
          }),
          !this.app)
        ) {
          this.app = t;
          var n = this.history;
          if (n instanceof St || n instanceof Dt) {
            var i = function (t) {
              n.setupListeners(),
                (function (t) {
                  var i = n.current,
                    r = e.options.scrollBehavior;
                  pt && r && "fullPath" in t && it(e, t, i, !1);
                })(t);
            };
            n.transitionTo(n.getCurrentLocation(), i, i);
          }
          n.listen(function (t) {
            e.apps.forEach(function (e) {
              e._route = t;
            });
          });
        }
      }),
      (It.prototype.beforeEach = function (t) {
        return Bt(this.beforeHooks, t);
      }),
      (It.prototype.beforeResolve = function (t) {
        return Bt(this.resolveHooks, t);
      }),
      (It.prototype.afterEach = function (t) {
        return Bt(this.afterHooks, t);
      }),
      (It.prototype.onReady = function (t, e) {
        this.history.onReady(t, e);
      }),
      (It.prototype.onError = function (t) {
        this.history.onError(t);
      }),
      (It.prototype.push = function (t, e, n) {
        var i = this;
        if (!e && !n && "undefined" != typeof Promise)
          return new Promise(function (e, n) {
            i.history.push(t, e, n);
          });
        this.history.push(t, e, n);
      }),
      (It.prototype.replace = function (t, e, n) {
        var i = this;
        if (!e && !n && "undefined" != typeof Promise)
          return new Promise(function (e, n) {
            i.history.replace(t, e, n);
          });
        this.history.replace(t, e, n);
      }),
      (It.prototype.go = function (t) {
        this.history.go(t);
      }),
      (It.prototype.back = function () {
        this.go(-1);
      }),
      (It.prototype.forward = function () {
        this.go(1);
      }),
      (It.prototype.getMatchedComponents = function (t) {
        var e = t ? (t.matched ? t : this.resolve(t).route) : this.currentRoute;
        return e
          ? [].concat.apply(
              [],
              e.matched.map(function (t) {
                return Object.keys(t.components).map(function (e) {
                  return t.components[e];
                });
              })
            )
          : [];
      }),
      (It.prototype.resolve = function (t, e, n) {
        var i = B(t, (e = e || this.history.current), n, this),
          r = this.match(i, e),
          o = r.redirectedFrom || r.fullPath;
        return {
          location: i,
          route: r,
          href: (function (t, e, n) {
            var i = "hash" === n ? "#" + e : e;
            return t ? A(t + "/" + i) : i;
          })(this.history.base, o, this.mode),
          normalizedTo: i,
          resolved: r,
        };
      }),
      (It.prototype.getRoutes = function () {
        return this.matcher.getRoutes();
      }),
      (It.prototype.addRoute = function (t, e) {
        this.matcher.addRoute(t, e),
          this.history.current !== b &&
            this.history.transitionTo(this.history.getCurrentLocation());
      }),
      (It.prototype.addRoutes = function (t) {
        this.matcher.addRoutes(t),
          this.history.current !== b &&
            this.history.transitionTo(this.history.getCurrentLocation());
      }),
      Object.defineProperties(It.prototype, Wt);
    var Nt = It;
    function Bt(t, e) {
      return (
        t.push(e),
        function () {
          var n = t.indexOf(e);
          n > -1 && t.splice(n, 1);
        }
      );
    }
    (It.install = function t(e) {
      if (!t.installed || F !== e) {
        (t.installed = !0), (F = e);
        var n = function (t) {
            return void 0 !== t;
          },
          i = function (t, e) {
            var i = t.$options._parentVnode;
            n(i) &&
              n((i = i.data)) &&
              n((i = i.registerRouteInstance)) &&
              i(t, e);
          };
        e.mixin({
          beforeCreate: function () {
            n(this.$options.router)
              ? ((this._routerRoot = this),
                (this._router = this.$options.router),
                this._router.init(this),
                e.util.defineReactive(
                  this,
                  "_route",
                  this._router.history.current
                ))
              : (this._routerRoot =
                  (this.$parent && this.$parent._routerRoot) || this),
              i(this, this);
          },
          destroyed: function () {
            i(this);
          },
        }),
          Object.defineProperty(e.prototype, "$router", {
            get: function () {
              return this._routerRoot._router;
            },
          }),
          Object.defineProperty(e.prototype, "$route", {
            get: function () {
              return this._routerRoot._route;
            },
          }),
          e.component("RouterView", M),
          e.component("RouterLink", H);
        var r = e.config.optionMergeStrategies;
        r.beforeRouteEnter =
          r.beforeRouteLeave =
          r.beforeRouteUpdate =
            r.created;
      }
    }),
      (It.version = "3.6.5"),
      (It.isNavigationFailure = yt),
      (It.NavigationFailureType = bt),
      (It.START_LOCATION = b),
      U && window.Vue && window.Vue.use(It);
  },
  function (t, e) {
    t.exports =
      "/images/vendor/vue-json-editor/jsoneditor-icons.svg?256e3abce3a61ba656dbb8f4967e3933";
  },
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  function (t, e, n) {
    var i;
    (i = () =>
      (() => {
        "use strict";
        var t = {
            d: (e, n) => {
              for (var i in n)
                t.o(n, i) &&
                  !t.o(e, i) &&
                  Object.defineProperty(e, i, { enumerable: !0, get: n[i] });
            },
            o: (t, e) => Object.prototype.hasOwnProperty.call(t, e),
          },
          e = {};
        t.d(e, { default: () => d });
        const n = "undefined" != typeof window ? window.HTMLElement : Object,
          i = {
            mounted() {
              this.enforceFocus &&
                document.addEventListener("focusin", this.focusIn);
            },
            methods: {
              focusIn(t) {
                if (!this.isActive) return;
                if (t.target === this.$el || this.$el.contains(t.target))
                  return;
                let e = this.container
                  ? this.container
                  : this.isFullPage
                  ? null
                  : this.$el.parentElement;
                (this.isFullPage || (e && e.contains(t.target))) &&
                  (t.preventDefault(), this.$el.focus());
              },
            },
            beforeDestroy() {
              document.removeEventListener("focusin", this.focusIn);
            },
          };
        function r(t, e, n, i, r, o, a, s) {
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
        const o = r(
            {
              name: "spinner",
              props: {
                color: { type: String, default: "#000" },
                height: { type: Number, default: 64 },
                width: { type: Number, default: 64 },
              },
            },
            function () {
              var t = this._self._c;
              return t(
                "svg",
                {
                  attrs: {
                    viewBox: "0 0 38 38",
                    xmlns: "http://www.w3.org/2000/svg",
                    width: this.width,
                    height: this.height,
                    stroke: this.color,
                  },
                },
                [
                  t("g", { attrs: { fill: "none", "fill-rule": "evenodd" } }, [
                    t(
                      "g",
                      {
                        attrs: {
                          transform: "translate(1 1)",
                          "stroke-width": "2",
                        },
                      },
                      [
                        t("circle", {
                          attrs: {
                            "stroke-opacity": ".25",
                            cx: "18",
                            cy: "18",
                            r: "18",
                          },
                        }),
                        t(
                          "path",
                          { attrs: { d: "M36 18c0-9.94-8.06-18-18-18" } },
                          [
                            t("animateTransform", {
                              attrs: {
                                attributeName: "transform",
                                type: "rotate",
                                from: "0 18 18",
                                to: "360 18 18",
                                dur: "0.8s",
                                repeatCount: "indefinite",
                              },
                            }),
                          ],
                          1
                        ),
                      ]
                    ),
                  ]),
                ]
              );
            },
            [],
            !1,
            null,
            null,
            null
          ).exports,
          a = r(
            {
              name: "dots",
              props: {
                color: { type: String, default: "#000" },
                height: { type: Number, default: 240 },
                width: { type: Number, default: 60 },
              },
            },
            function () {
              var t = this._self._c;
              return t(
                "svg",
                {
                  attrs: {
                    viewBox: "0 0 120 30",
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: this.color,
                    width: this.width,
                    height: this.height,
                  },
                },
                [
                  t("circle", { attrs: { cx: "15", cy: "15", r: "15" } }, [
                    t("animate", {
                      attrs: {
                        attributeName: "r",
                        from: "15",
                        to: "15",
                        begin: "0s",
                        dur: "0.8s",
                        values: "15;9;15",
                        calcMode: "linear",
                        repeatCount: "indefinite",
                      },
                    }),
                    t("animate", {
                      attrs: {
                        attributeName: "fill-opacity",
                        from: "1",
                        to: "1",
                        begin: "0s",
                        dur: "0.8s",
                        values: "1;.5;1",
                        calcMode: "linear",
                        repeatCount: "indefinite",
                      },
                    }),
                  ]),
                  t(
                    "circle",
                    {
                      attrs: {
                        cx: "60",
                        cy: "15",
                        r: "9",
                        "fill-opacity": "0.3",
                      },
                    },
                    [
                      t("animate", {
                        attrs: {
                          attributeName: "r",
                          from: "9",
                          to: "9",
                          begin: "0s",
                          dur: "0.8s",
                          values: "9;15;9",
                          calcMode: "linear",
                          repeatCount: "indefinite",
                        },
                      }),
                      t("animate", {
                        attrs: {
                          attributeName: "fill-opacity",
                          from: "0.5",
                          to: "0.5",
                          begin: "0s",
                          dur: "0.8s",
                          values: ".5;1;.5",
                          calcMode: "linear",
                          repeatCount: "indefinite",
                        },
                      }),
                    ]
                  ),
                  t("circle", { attrs: { cx: "105", cy: "15", r: "15" } }, [
                    t("animate", {
                      attrs: {
                        attributeName: "r",
                        from: "15",
                        to: "15",
                        begin: "0s",
                        dur: "0.8s",
                        values: "15;9;15",
                        calcMode: "linear",
                        repeatCount: "indefinite",
                      },
                    }),
                    t("animate", {
                      attrs: {
                        attributeName: "fill-opacity",
                        from: "1",
                        to: "1",
                        begin: "0s",
                        dur: "0.8s",
                        values: "1;.5;1",
                        calcMode: "linear",
                        repeatCount: "indefinite",
                      },
                    }),
                  ]),
                ]
              );
            },
            [],
            !1,
            null,
            null,
            null
          ).exports,
          s = r(
            {
              name: "bars",
              props: {
                color: { type: String, default: "#000" },
                height: { type: Number, default: 40 },
                width: { type: Number, default: 40 },
              },
            },
            function () {
              var t = this._self._c;
              return t(
                "svg",
                {
                  attrs: {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 30 30",
                    height: this.height,
                    width: this.width,
                    fill: this.color,
                  },
                },
                [
                  t(
                    "rect",
                    { attrs: { x: "0", y: "13", width: "4", height: "5" } },
                    [
                      t("animate", {
                        attrs: {
                          attributeName: "height",
                          attributeType: "XML",
                          values: "5;21;5",
                          begin: "0s",
                          dur: "0.6s",
                          repeatCount: "indefinite",
                        },
                      }),
                      t("animate", {
                        attrs: {
                          attributeName: "y",
                          attributeType: "XML",
                          values: "13; 5; 13",
                          begin: "0s",
                          dur: "0.6s",
                          repeatCount: "indefinite",
                        },
                      }),
                    ]
                  ),
                  t(
                    "rect",
                    { attrs: { x: "10", y: "13", width: "4", height: "5" } },
                    [
                      t("animate", {
                        attrs: {
                          attributeName: "height",
                          attributeType: "XML",
                          values: "5;21;5",
                          begin: "0.15s",
                          dur: "0.6s",
                          repeatCount: "indefinite",
                        },
                      }),
                      t("animate", {
                        attrs: {
                          attributeName: "y",
                          attributeType: "XML",
                          values: "13; 5; 13",
                          begin: "0.15s",
                          dur: "0.6s",
                          repeatCount: "indefinite",
                        },
                      }),
                    ]
                  ),
                  t(
                    "rect",
                    { attrs: { x: "20", y: "13", width: "4", height: "5" } },
                    [
                      t("animate", {
                        attrs: {
                          attributeName: "height",
                          attributeType: "XML",
                          values: "5;21;5",
                          begin: "0.3s",
                          dur: "0.6s",
                          repeatCount: "indefinite",
                        },
                      }),
                      t("animate", {
                        attrs: {
                          attributeName: "y",
                          attributeType: "XML",
                          values: "13; 5; 13",
                          begin: "0.3s",
                          dur: "0.6s",
                          repeatCount: "indefinite",
                        },
                      }),
                    ]
                  ),
                ]
              );
            },
            [],
            !1,
            null,
            null,
            null
          ).exports,
          l = r(
            {
              name: "vue-loading",
              mixins: [i],
              props: {
                active: Boolean,
                programmatic: Boolean,
                container: [Object, Function, n],
                isFullPage: { type: Boolean, default: !0 },
                enforceFocus: { type: Boolean, default: !0 },
                lockScroll: { type: Boolean, default: !1 },
                transition: { type: String, default: "fade" },
                canCancel: Boolean,
                onCancel: { type: Function, default: () => {} },
                color: String,
                backgroundColor: String,
                blur: { type: String, default: "2px" },
                opacity: Number,
                width: Number,
                height: Number,
                zIndex: Number,
                loader: { type: String, default: "spinner" },
              },
              data() {
                return { isActive: this.active };
              },
              components: { Spinner: o, Dots: a, Bars: s },
              beforeMount() {
                this.programmatic &&
                  (this.container
                    ? ((this.isFullPage = !1),
                      this.container.appendChild(this.$el))
                    : document.body.appendChild(this.$el));
              },
              mounted() {
                this.programmatic && (this.isActive = !0),
                  document.addEventListener("keyup", this.keyPress);
              },
              methods: {
                cancel() {
                  this.canCancel &&
                    this.isActive &&
                    (this.hide(), this.onCancel.apply(null, arguments));
                },
                hide() {
                  this.$emit("hide"),
                    this.$emit("update:active", !1),
                    this.programmatic &&
                      ((this.isActive = !1),
                      setTimeout(() => {
                        var t;
                        this.$destroy(),
                          void 0 !== (t = this.$el).remove
                            ? t.remove()
                            : t.parentNode.removeChild(t);
                      }, 150));
                },
                disableScroll() {
                  this.isFullPage &&
                    this.lockScroll &&
                    document.body.classList.add("vld-shown");
                },
                enableScroll() {
                  this.isFullPage &&
                    this.lockScroll &&
                    document.body.classList.remove("vld-shown");
                },
                keyPress(t) {
                  27 === t.keyCode && this.cancel();
                },
              },
              watch: {
                active(t) {
                  this.isActive = t;
                },
                isActive(t) {
                  t ? this.disableScroll() : this.enableScroll();
                },
              },
              computed: {
                bgStyle() {
                  return {
                    background: this.backgroundColor,
                    opacity: this.opacity,
                    backdropFilter: `blur(${this.blur})`,
                  };
                },
              },
              beforeDestroy() {
                document.removeEventListener("keyup", this.keyPress);
              },
            },
            function () {
              var t = this,
                e = t._self._c;
              return e("transition", { attrs: { name: t.transition } }, [
                e(
                  "div",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: t.isActive,
                        expression: "isActive",
                      },
                    ],
                    staticClass: "vld-overlay is-active",
                    class: { "is-full-page": t.isFullPage },
                    style: { zIndex: t.zIndex },
                    attrs: {
                      tabindex: "0",
                      "aria-busy": t.isActive,
                      "aria-label": "Loading",
                    },
                  },
                  [
                    e("div", {
                      staticClass: "vld-background",
                      style: t.bgStyle,
                      on: {
                        click: function (e) {
                          return (
                            e.preventDefault(), t.cancel.apply(null, arguments)
                          );
                        },
                      },
                    }),
                    e(
                      "div",
                      { staticClass: "vld-icon" },
                      [
                        t._t("before"),
                        t._t("default", function () {
                          return [
                            e(t.loader, {
                              tag: "component",
                              attrs: {
                                color: t.color,
                                width: t.width,
                                height: t.height,
                              },
                            }),
                          ];
                        }),
                        t._t("after"),
                      ],
                      2
                    ),
                  ]
                ),
              ]);
            },
            [],
            !1,
            null,
            null,
            null
          ).exports,
          c = function (t) {
            let e =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              n =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {};
            return {
              show() {
                let i =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : e,
                  r =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : n;
                const o = Object.assign({}, e, i, { programmatic: !0 }),
                  a = new (t.extend(l))({
                    el: document.createElement("div"),
                    propsData: o,
                  }),
                  s = Object.assign({}, n, r);
                return (
                  Object.keys(s).map((t) => {
                    a.$slots[t] = s[t];
                  }),
                  a
                );
              },
            };
          };
        l.install = function (t) {
          let e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {},
            i = c(t, e, n);
          (t.$loading = i), (t.prototype.$loading = i);
        };
        const d = l;
        return (e = e.default);
      })()),
      (t.exports = i());
  },
  function (t, e, n) {
    "use strict";
    var i = n(142),
      r = n.n(i),
      o = (n(554), n(9)),
      a = n(8),
      s = n(24),
      l = {
        components: { VueTimepicker: r.a },
        data: function () {
          return {
            curency: {},
            oldDoctorList: [],
            serviceSelectAll: [],
            doctorSelectAll: "",
            clinicSelectAll: "",
            cardTitle: "Add service",
            encounter_id: 0,
            types: [],
            serviceList: [],
            outcomes: [],
            service: {},
            loading: !1,
            submitted: !1,
            buttonText: '<i class="fa fa-save"></i> Save',
            doctors: [],
            clinic: [],
            clinic_id: 0,
            hideDoctor: !1,
            profileImage: "",
            file: "",
            categoryMultiselectLoader: !0,
            doctorMultiselectLoader: !0,
            time_slots: [],
            multiServiceOptions: [
              { id: "no", label: "Single" },
              { id: "yes", label: "Multiple" },
            ],
            clinicMultiselectLoader: !1,
            selected_clinic_id: [],
            service_clinic_id: 0,
            isTelemedServiceoption: [],
          };
        },
        props: {
          serviceId: [Number, String],
          props_doctor_id: {
            type: [Number, String],
            default: function () {
              return -1;
            },
          },
        },
        validations: {
          service: {
            type: { required: o.required },
            name: { required: o.required },
            clinic_id: {
              required: Object(o.requiredIf)(function () {
                return (
                  1 == this.userData.addOns.kiviPro &&
                  ("administrator" == this.getUserRole() ||
                    "doctor" == this.getUserRole()) &&
                  !1 !== this.clinicField
                );
              }),
            },
            doctor_id: {
              required: Object(o.requiredIf)(function () {
                return "doctor" !== this.getUserRole();
              }),
            },
            price: {
              required: o.required,
              minValue: Object(o.minValue)(0),
              maxValue: Object(o.maxValue)(1e18),
            },
            status: { required: o.required },
            multiservice: { required: o.required },
            telemed_service: {
              required: Object(o.requiredIf)(function () {
                return (
                  this.userData.addOns.telemed ||
                  this.userData.addOns.googlemeet
                );
              }),
            },
          },
        },
        mounted: function () {
          (this.service = this.defaultServiceData()),
            void 0 !== this.props_doctor_id &&
            -1 !== this.props_doctor_id &&
            "-1" !== this.props_doctor_id
              ? ((this.hideDoctor = !0),
                (this.service.doctor_id = [{ id: this.props_doctor_id }]),
                this.clinicList({
                  data_type: "clinics",
                  doctor_id: this.props_doctor_id,
                }))
              : this.clinicList({ data_type: "clinic_list" }),
            (this.profileImage =
              window.request_data.kiviCarePluginURL +
              "assets/images/kc-demo-img.png"),
            this.init(),
            (this.isTelemedServiceoption = [
              { id: "yes", label: this.formTranslation.common.yes },
              { id: "no", label: this.formTranslation.common.no },
            ]);
        },
        methods: {
          changeDurationHandler: function (t) {
            var e = 60 * parseInt(t.data.HH) + parseInt(t.data.mm);
            this.service.duration = e.toString();
          },
          init: function () {
            var t = this;
            this.getTimeSlots(),
              this.getServiceType(),
              void 0 !== this.$store.state.userDataModule.clinic
                ? ((this.clinic_id =
                    this.$store.state.userDataModule.clinic.id),
                  "doctor" !== this.getUserRole()
                    ? this.hideDoctor || this.getDoctorDropdown()
                    : (this.service.doctor_id = {
                        id: this.$store.state.userDataModule.user.ID,
                        label:
                          this.$store.state.userDataModule.user.display_name,
                      }))
                : (this.$store.dispatch("userDataModule/fetchUserData", {}),
                  setTimeout(function () {
                    (t.clinic_id = t.$store.state.userDataModule.clinic.id),
                      "doctor" !== t.getUserRole()
                        ? t.hideDoctor || t.getDoctorDropdown()
                        : (t.service.doctor_id = {
                            id: t.$store.state.userDataModule.user.ID,
                            label:
                              t.$store.state.userDataModule.user.display_name,
                          });
                  }, 1e3)),
              (this.multiServiceOptions = this.multiServiceOptions.map(
                function (e) {
                  return (e.label = t.formTranslation.common[e.id]), e;
                }
              )),
              -1 != this.serviceId &&
                ((this.cardTitle = this.formTranslation.common.edit_service),
                (this.buttonText =
                  '<i class="fa fa-save"></i>' +
                  this.formTranslation.common.save),
                this.get_service(this.serviceId)),
              void 0 !== this.$route.params.id &&
                this.get_service(this.$route.params.id);
          },
          getTimeSlots: function () {
            this.time_slots = [
              { value: 5, label: "5min" },
              { value: 10, label: "10min" },
              { value: 15, label: "15min" },
              { value: 20, label: "20min" },
              { value: 25, label: "25min" },
              { value: 30, label: "30min" },
              { value: 35, label: "35min" },
              { value: 40, label: "40min" },
              { value: 45, label: "45min" },
              { value: 50, label: "50min" },
              { value: 55, label: "55min" },
              { value: 60, label: "1hr" },
              { value: 75, label: "1hr 15min" },
              { value: 90, label: "1hr 30min" },
              { value: 105, label: "1hr 45min" },
              { value: 120, label: "2hr" },
              { value: 150, label: "2hr 30min" },
            ];
          },
          closeForm: function () {
            this.hideDoctor &&
              (this.$emit("closeServiceModal"), (this.hideDoctor = !1)),
              this.$emit("closeForm"),
              void 0 !== this.$route.params.id &&
                this.$router.push({ name: "service" });
          },
          clinicChange: function (t) {
            var e = this;
            if ("doctor" !== this.getUserRole()) {
              if (
                this.selected_clinic_id.some(function (e) {
                  return e.id === t.id;
                })
              ) {
                var n = this.selected_clinic_id.findIndex(function (e) {
                  return e.id === t.id;
                });
                -1 !== n && this.selected_clinic_id.splice(n, 1);
              } else this.selected_clinic_id.push(t);
              var i = "";
              void 0 !== t
                ? Array.isArray(this.selected_clinic_id) &&
                  (i = this.selected_clinic_id.map(function (t) {
                    return t.id;
                  }))
                : (i = Array.isArray(this.service.clinic_id)
                    ? this.service.clinic_id.map(function (t) {
                        return t.id;
                      })
                    : this.service.clinic_id.id),
                (this.service.doctor_id = ""),
                (this.doctorSelectAll = ""),
                (this.doctorMultiselectLoader = !0),
                Object(a.a)("get_static_data", {
                  data_type: "get_users_by_clinic",
                  clinic_id: i,
                  telemed_service: this.service.telemed_service.id,
                  type: "doctor",
                })
                  .then(function (t) {
                    (e.doctorMultiselectLoader = !1),
                      void 0 !== t.data.status && !0 === t.data.status
                        ? (e.doctors = t.data.data)
                        : displayErrorMessage(t.data.message);
                  })
                  .catch(function (t) {
                    (e.doctorMultiselectLoader = !1),
                      displayErrorMessage(
                        e.formTranslation.common.internal_server_error
                      );
                  });
            }
          },
          uploadProfile: function () {
            var t = this,
              e = kivicareCustomImageUploader(this.formTranslation);
            e.on("select", function () {
              var n = e.state().get("selection").first().toJSON();
              (t.profileImage = n.url),
                (t.service.profile_image = n.id),
                (t.service.image = t.profileImage);
            }),
              e.open();
          },
          handleSubmit: function () {
            var t = this;
            (this.loading = !0),
              (this.submitted = !0),
              void 0 !== this.props_doctor_id &&
                -1 !== this.props_doctor_id &&
                "-1" !== this.props_doctor_id &&
                ((this.hideDoctor = !0),
                (this.service.doctor_id = [{ id: this.props_doctor_id }])),
              this.$v.$touch(),
              this.$v.service.$invalid
                ? (this.loading = !1)
                : Object(s.n)("serviceForm") &&
                  Object(a.b)("service_save", this.service)
                    .then(function (e) {
                      (t.loading = !1),
                        (t.submitted = !1),
                        void 0 !== e.data.status && !0 === e.data.status
                          ? ("administrator" === t.getUserRole() &&
                              t.$store.dispatch(
                                "userDataModule/fetchUserData",
                                {}
                              ),
                            (t.service = t.defaultServiceData()),
                            displayMessage(e.data.message),
                            t.$emit("closeForm"),
                            t.getService(),
                            t.hideDoctor &&
                              (t.$emit("closeServiceModal"),
                              (t.hideDoctor = !1)))
                          : displayErrorMessage(e.data.message);
                    })
                    .catch(function (e) {
                      (t.loading = !1),
                        (t.submitted = !1),
                        displayErrorMessage(
                          t.formTranslation.common.internal_server_error
                        );
                    });
          },
          defaultServiceData: function () {
            return {
              type: "",
              name: "",
              doctor_id: "",
              service_id: "",
              price: "",
              status: { id: 1, label: this.formTranslation.common.active },
              multiservice: {
                id: "yes",
                label: this.formTranslation.common.yes,
              },
              telemed_service: {
                id: "no",
                label: this.formTranslation.common.no,
              },
              duration: "",
            };
          },
          getDoctorDropdown: function () {
            var t = this;
            (this.doctorMultiselectLoader = !0),
              Object(a.a)("get_static_data", {
                data_type: "clinic_doctors",
                module_type: "service_module",
                clinic_id: this.service_clinic_id,
              })
                .then(function (e) {
                  (t.doctorMultiselectLoader = !1),
                    void 0 !== e.data.status && !0 === e.data.status
                      ? ((t.doctors = e.data.data),
                        (t.oldDoctorList = t.doctors))
                      : displayErrorMessage(e.data.message);
                })
                .catch(function (e) {
                  (t.doctorMultiselectLoader = !1),
                    displayErrorMessage(
                      t.formTranslation.common.internal_server_error
                    );
                });
          },
          getService: function () {
            this.$emit("getServiceData");
          },
          getServiceType: function () {
            var t = this;
            (this.categoryMultiselectLoader = !0),
              Object(a.a)("get_static_data", {
                data_type: "static_data_with_label",
                static_data_type: "service_type",
              })
                .then(function (e) {
                  if (void 0 !== e.data.status && !0 === e.data.status) {
                    t.types = e.data.data;
                    var n = t.types;
                    if (n.length > 0) {
                      var i = !1;
                      n.map(function (t, e) {
                        "system_service" == t.id && (i = !0);
                      }),
                        i ||
                          t.types.push({
                            id: "system_service",
                            label: "System Service",
                          });
                    }
                  } else displayErrorMessage(e.data.message);
                  t.categoryMultiselectLoader = !1;
                })
                .catch(function (e) {
                  (t.categoryMultiselectLoader = !1),
                    displayErrorMessage(
                      t.formTranslation.common.internal_server_error
                    );
                });
          },
          addNewServiceCategory: function (t) {
            var e = this,
              n = {
                label: t,
                type: "service_type",
                value: t.replace("", "_"),
                status: 1,
              },
              i = this;
            Object(a.b)("static_data_save", n)
              .then(function (n) {
                void 0 !== n.data.status &&
                  !0 === n.data.status &&
                  (i.types.push({ id: t.replace("", "_"), label: t }),
                  (i.service.type = { id: t.replace("", "_"), label: t }),
                  e.getServiceType());
              })
              .catch(function (t) {
                displayErrorMessage(
                  e.formTranslation.common.internal_server_error
                );
              });
          },
          get_service: function (t) {
            var e = this;
            t &&
              Object(a.a)("service_edit", { id: t })
                .then(function (t) {
                  if (void 0 !== t.data.status && !0 === t.data.status) {
                    (e.service_clinic_id = t.data.data.clinic_id.id),
                      e.getDoctorDropdown(),
                      (e.service = t.data.data),
                      (e.service.telemed_service =
                        e.isTelemedServiceoption.find(function (t) {
                          return t.id === e.service.telemed_service;
                        })),
                      e.telemedEnableChange(e.service.telemed_service),
                      (e.service.duration =
                        "00:00" !== e.service.duration
                          ? e.service.duration
                          : "");
                    var n = e.$el;
                    n &&
                      n.scrollIntoView({ behavior: "smooth", block: "start" });
                  }
                })
                .catch(function (t) {
                  displayErrorMessage(
                    e.formTranslation.widgets.record_not_found
                  );
                });
          },
          telemedEnableChange: function (t) {
            var e = this;
            if (this.userData.addOns.telemed || this.userData.addOns.googlemeet)
              if (
                ((this.doctorSelectAll = {}),
                (this.doctors = this.oldDoctorList),
                "yes" === t.id)
              ) {
                var n = !1;
                (this.doctors = this.doctors.filter(function (t, i) {
                  if (
                    (t.enableTeleMed &&
                      e.service.doctor_id &&
                      e.service.doctor_id.id &&
                      t.id == e.service.doctor_id.id &&
                      (n = !0),
                    t.enableTeleMed)
                  )
                    return t;
                })),
                  n ||
                    "doctor" === this.getUserRole() ||
                    (this.service.doctor_id = {});
              } else
                void 0 !== this.service.id &&
                  (this.doctors = this.oldDoctorList);
          },
          clinicList: function (t) {
            var e = this;
            (this.clinicMultiselectLoader = !0),
              Object(a.a)("get_static_data", t)
                .then(function (t) {
                  (e.clinicMultiselectLoader = !1),
                    void 0 !== t.data.status &&
                      !0 === t.data.status &&
                      (e.clinic = t.data.data);
                })
                .catch(function (t) {
                  (e.clinicMultiselectLoader = !1),
                    displayErrorMessage("Internal server error");
                });
          },
          onKeyPress: function (t) {
            var e = this.service.price,
              n = e.indexOf(".");
            -1 !== n && e.slice(n + 1).length >= 2 && t.preventDefault();
          },
        },
        computed: {
          currency: function () {
            return this.currencyData;
          },
          currencyPrefix: function () {
            if (
              void 0 !== this.currency &&
              null !== this.currency &&
              "" !== this.currency
            )
              return this.currency.currency_prefix;
          },
          currencyPostfix: function () {
            if (
              void 0 !== this.currency &&
              null !== this.currency &&
              "" !== this.currency
            )
              return this.currency.currency_postfix;
          },
          clinicId: function () {
            if (void 0 !== this.$store.state.userDataModule.clinic)
              return this.$store.state.userDataModule.clinic.id;
          },
          isServiceEdit: function () {
            return !(
              void 0 !== this.serviceId &&
              0 !== this.serviceId &&
              -1 !== this.serviceId
            );
          },
          userData: function () {
            return this.$store.state.userDataModule.user;
          },
        },
        watch: {
          serviceId: function (t, e) {
            void 0 !== t &&
              0 !== t &&
              -1 !== t &&
              ((this.cardTitle = this.formTranslation.common.edit_service),
              (this.buttonText =
                '<i class="fa fa-save"></i>' +
                this.formTranslation.common.save),
              this.get_service(t));
          },
          doctorSelectAll: function (t) {
            (null != this.serviceId &&
              0 != this.serviceId &&
              -1 != this.serviceId) ||
              (this.service.doctor_id =
                "not_accepted" === t
                  ? []
                  : "accepted" === t
                  ? this.doctors
                  : []);
          },
          clinicSelectAll: function (t) {
            (this.service.clinic_id = "not_accepted" === t ? [] : this.clinic),
              this.clinicChange();
          },
        },
      },
      c = (n(649), n(15)),
      d = Object(c.a)(
        l,
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
                    attrs: {
                      id: "serviceForm",
                      novalidate: !0,
                      enctype: "multipart/form-data",
                    },
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
                        },
                      },
                      [
                        e("div", { staticClass: "row" }, [
                          e("div", { staticClass: "col-md-9" }, [
                            e("div", { staticClass: "row" }, [
                              e("div", { staticClass: "col-md-4" }, [
                                e(
                                  "div",
                                  { staticClass: "form-group" },
                                  [
                                    e(
                                      "label",
                                      {
                                        staticClass: "form-control-label",
                                        attrs: { for: "type" },
                                      },
                                      [
                                        t._v(
                                          "\n                    " +
                                            t._s(
                                              t.formTranslation.service
                                                .service_category
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
                                    e("multi-select", {
                                      class: {
                                        " is-invalid":
                                          t.submitted &&
                                          t.$v.service.type.$error,
                                      },
                                      attrs: {
                                        "deselect-label": "",
                                        "select-label": "",
                                        "tag-placeholder":
                                          t.formTranslation.service
                                            .tag_select_service_plh,
                                        id: "type",
                                        placeholder:
                                          t.formTranslation.service
                                            .select_service_plh,
                                        label: "label",
                                        "track-by": "id",
                                        taggable: !0,
                                        options: t.types,
                                        loading:
                                          t.categoryMultiselectLoader &&
                                          t.isServiceEdit,
                                        disabled: !t.isServiceEdit,
                                      },
                                      on: { tag: t.addNewServiceCategory },
                                      scopedSlots: t._u([
                                        {
                                          key: "noResult",
                                          fn: function () {
                                            return [
                                              t._v(
                                                "\n                " +
                                                  t._s(
                                                    t.formTranslation.common
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
                                        value: t.service.type,
                                        callback: function (e) {
                                          t.$set(t.service, "type", e);
                                        },
                                        expression: "service.type",
                                      },
                                    }),
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
                                            t.formTranslation.service
                                              .note_category
                                          )
                                        ),
                                      ]
                                    ),
                                    t._v(" "),
                                    t.submitted && !t.$v.service.type.required
                                      ? e(
                                          "div",
                                          { staticClass: "invalid-feedback" },
                                          [
                                            t._v(
                                              " " +
                                                t._s(
                                                  t.formTranslation.service
                                                    .service_category_required
                                                ) +
                                                " "
                                            ),
                                          ]
                                        )
                                      : t._e(),
                                  ],
                                  1
                                ),
                              ]),
                              t._v(" "),
                              e("div", { staticClass: "col-md-4" }, [
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
                                            t.formTranslation.service
                                              .service_name
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
                                        value: t.service.name,
                                        expression: "service.name",
                                      },
                                    ],
                                    staticClass: "form-control",
                                    class: {
                                      " is-invalid":
                                        t.submitted && t.$v.service.name.$error,
                                    },
                                    attrs: {
                                      id: "name",
                                      placeholder:
                                        t.formTranslation.service
                                          .service_name_plh,
                                      required: "required",
                                      name: "name",
                                      type: "text",
                                    },
                                    domProps: { value: t.service.name },
                                    on: {
                                      input: function (e) {
                                        e.target.composing ||
                                          t.$set(
                                            t.service,
                                            "name",
                                            e.target.value
                                          );
                                      },
                                    },
                                  }),
                                  t._v(" "),
                                  t.submitted && !t.$v.service.name.required
                                    ? e(
                                        "div",
                                        { staticClass: "invalid-feedback" },
                                        [
                                          t._v(
                                            t._s(
                                              t.formTranslation.service
                                                .service_name_required
                                            ) + "\n                  "
                                          ),
                                        ]
                                      )
                                    : t._e(),
                                ]),
                              ]),
                              t._v(" "),
                              e("div", { staticClass: "col-md-4" }, [
                                e(
                                  "div",
                                  { staticClass: "form-group" },
                                  [
                                    e(
                                      "label",
                                      {
                                        staticClass: "form-control-label",
                                        attrs: { for: "price" },
                                      },
                                      [
                                        t._v(
                                          t._s(
                                            t.formTranslation.service.charges
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
                                    e(
                                      "b-input-group",
                                      {
                                        attrs: {
                                          size: "md",
                                          prepend: t.currencyPrefix,
                                          append: t.currencyPostfix,
                                        },
                                      },
                                      [
                                        e("b-form-input", {
                                          class: {
                                            " is-invalid":
                                              t.submitted &&
                                              t.$v.service.price.$error,
                                          },
                                          attrs: {
                                            id: "price",
                                            placeholder:
                                              t.formTranslation.service
                                                .charges_plh,
                                            required: "required",
                                            name: "price",
                                            type: "number",
                                            step: "0.01",
                                          },
                                          on: { keypress: t.onKeyPress },
                                          model: {
                                            value: t.service.price,
                                            callback: function (e) {
                                              t.$set(t.service, "price", e);
                                            },
                                            expression: "service.price",
                                          },
                                        }),
                                      ],
                                      1
                                    ),
                                    t._v(" "),
                                    t.submitted && !t.$v.service.price.required
                                      ? e(
                                          "div",
                                          { staticClass: "invalid-feedback" },
                                          [
                                            t._v(
                                              t._s(
                                                t.formTranslation.service
                                                  .service_charges_required
                                              ) + "\n                  "
                                            ),
                                          ]
                                        )
                                      : !t.submitted ||
                                        (t.$v.service.price.minValue &&
                                          t.$v.service.price.maxValue)
                                      ? t._e()
                                      : e(
                                          "div",
                                          { staticClass: "invalid-feedback" },
                                          [
                                            t._v(
                                              t._s(
                                                t.formTranslation.service
                                                  .service_charge_length
                                              ) + "\n                  "
                                            ),
                                          ]
                                        ),
                                  ],
                                  1
                                ),
                              ]),
                              t._v(" "),
                              t.userData.addOns.telemed ||
                              t.userData.addOns.googlemeet
                                ? e("div", { staticClass: "col-md-4" }, [
                                    e("div", { staticClass: "form-group" }, [
                                      e(
                                        "label",
                                        {
                                          staticClass: "form-control-label",
                                          attrs: { for: "telemed_service" },
                                        },
                                        [
                                          t._v(
                                            "\n                    " +
                                              t._s(
                                                t.formTranslation.service
                                                  .is_telemed_service
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
                                              "tag-placeholder":
                                                t.formTranslation.service
                                                  .telemed_service,
                                              id: "status",
                                              name: "telemed_service",
                                              placeholder:
                                                t.formTranslation.service
                                                  .plh_search,
                                              label: "label",
                                              "track-by": "id",
                                              options: t.isTelemedServiceoption,
                                              disabled:
                                                "doctor" == t.getUserRole() &&
                                                !t.userData.telemedConfigOn &&
                                                "off" ==
                                                  t.userData
                                                    .is_enable_doctor_zoom_telemed,
                                            },
                                            on: {
                                              select: t.telemedEnableChange,
                                            },
                                            scopedSlots: t._u(
                                              [
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
                                              ],
                                              null,
                                              !1,
                                              517092310
                                            ),
                                            model: {
                                              value: t.service.telemed_service,
                                              callback: function (e) {
                                                t.$set(
                                                  t.service,
                                                  "telemed_service",
                                                  e
                                                );
                                              },
                                              expression:
                                                "service.telemed_service",
                                            },
                                          }),
                                          t._v(" "),
                                          "doctor" != t.getUserRole() ||
                                          (t.userData.telemedConfigOn &&
                                            "on" ==
                                              t.userData
                                                .is_enable_doctor_zoom_telemed)
                                            ? e(
                                                "span",
                                                {
                                                  staticClass:
                                                    "select_clear_btn",
                                                  on: {
                                                    click: function (e) {
                                                      t.service.telemed_service =
                                                        "";
                                                    },
                                                  },
                                                },
                                                [t._v("×")]
                                              )
                                            : t._e(),
                                        ],
                                        1
                                      ),
                                      t._v(" "),
                                      t.submitted &&
                                      !t.$v.service.telemed_service.required
                                        ? e(
                                            "div",
                                            { staticClass: "invalid-feedback" },
                                            [
                                              t._v(
                                                t._s(
                                                  t.formTranslation.service
                                                    .telemed_service_required
                                                ) + "\n                  "
                                              ),
                                            ]
                                          )
                                        : t._e(),
                                      t._v(" "),
                                      "doctor" != t.getUserRole() ||
                                      t.userData.telemedConfigOn ||
                                      "off" !=
                                        t.userData.is_enable_doctor_zoom_telemed
                                        ? t._e()
                                        : e(
                                            "span",
                                            {
                                              staticClass:
                                                "text-primary small font-weight-bold",
                                            },
                                            [
                                              t._v(
                                                t._s(
                                                  t.formTranslation.service
                                                    .note_telemed
                                                )
                                              ),
                                            ]
                                          ),
                                      t._v(" "),
                                      t.submitted &&
                                      !t.$v.service.status.required
                                        ? e(
                                            "div",
                                            { staticClass: "invalid-feedback" },
                                            [
                                              t._v(
                                                "\n                    " +
                                                  t._s(
                                                    t.formTranslation
                                                      .appointments
                                                      .status_required
                                                  ) +
                                                  "\n                  "
                                              ),
                                            ]
                                          )
                                        : t._e(),
                                    ]),
                                  ])
                                : t._e(),
                              t._v(" "),
                              1 != t.userData.addOns.kiviPro ||
                              ("administrator" != t.getUserRole() &&
                                "doctor" != t.getUserRole())
                                ? t._e()
                                : e("div", { staticClass: "col-md-4" }, [
                                    e(
                                      "div",
                                      { staticClass: "form-group" },
                                      [
                                        e(
                                          "div",
                                          {
                                            staticClass:
                                              "select-all-doctor d-flex",
                                          },
                                          [
                                            e(
                                              "div",
                                              {
                                                staticClass:
                                                  "doctor-select-all-2",
                                                staticStyle: { width: "100%" },
                                              },
                                              [
                                                e(
                                                  "label",
                                                  {
                                                    staticClass:
                                                      "form-control-label",
                                                    attrs: { for: "doctor_id" },
                                                  },
                                                  [
                                                    t._v(
                                                      "\n                              " +
                                                        t._s(
                                                          t.formTranslation
                                                            .clinic.clinic
                                                        ) +
                                                        " "
                                                    ),
                                                    e(
                                                      "span",
                                                      {
                                                        staticClass:
                                                          "text-danger",
                                                      },
                                                      [t._v("*")]
                                                    ),
                                                  ]
                                                ),
                                                t._v(" "),
                                                0 == t.serviceId ||
                                                -1 == t.serviceId ||
                                                "" == t.serviceId
                                                  ? e(
                                                      "b-form-checkbox",
                                                      {
                                                        staticClass:
                                                          "float-right text-primary",
                                                        attrs: {
                                                          id: "clinic-select-all",
                                                          name: "clinic-select-all",
                                                          value: "accepted",
                                                          "unchecked-value":
                                                            "not_accepted",
                                                        },
                                                        model: {
                                                          value:
                                                            t.clinicSelectAll,
                                                          callback: function (
                                                            e
                                                          ) {
                                                            t.clinicSelectAll =
                                                              e;
                                                          },
                                                          expression:
                                                            "clinicSelectAll",
                                                        },
                                                      },
                                                      [
                                                        t._v(
                                                          " " +
                                                            t._s(
                                                              t.formTranslation
                                                                .service
                                                                .select_all
                                                            ) +
                                                            " "
                                                        ),
                                                      ]
                                                    )
                                                  : t._e(),
                                              ],
                                              1
                                            ),
                                          ]
                                        ),
                                        t._v(" "),
                                        e("multi-select", {
                                          attrs: {
                                            "deselect-label": "",
                                            "select-label": "",
                                            "tag-placeholder":
                                              t.formTranslation
                                                .patient_encounter
                                                .tag_select_clinic_plh,
                                            id: "clinic_id",
                                            multiple: t.isServiceEdit,
                                            loading: t.clinicMultiselectLoader,
                                            disabled: t.clinicMultiselectLoader,
                                            placeholder:
                                              t.formTranslation.service
                                                .tag_select_clinic_plh,
                                            label: "label",
                                            "track-by": "id",
                                            options: t.clinic,
                                          },
                                          on: {
                                            select: t.clinicChange,
                                            remove: t.clinicChange,
                                          },
                                          scopedSlots: t._u(
                                            [
                                              {
                                                key: "noResult",
                                                fn: function () {
                                                  return [
                                                    t._v(
                        