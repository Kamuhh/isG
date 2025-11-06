// app.part17-de-30.js
s.$modeId;
                      },
                    },
                  }),
                  (e.EditSession = h);
              }
            ),
            ace.define(
              "ace/search",
              [
                "require",
                "exports",
                "module",
                "ace/lib/lang",
                "ace/lib/oop",
                "ace/range",
              ],
              function (t, e, n) {
                "use strict";
                var i = t("./lib/lang"),
                  r = t("./lib/oop"),
                  o = t("./range").Range,
                  a = function () {
                    this.$options = {};
                  };
                (function () {
                  (this.set = function (t) {
                    return r.mixin(this.$options, t), this;
                  }),
                    (this.getOptions = function () {
                      return i.copyObject(this.$options);
                    }),
                    (this.setOptions = function (t) {
                      this.$options = t;
                    }),
                    (this.find = function (t) {
                      var e = this.$options,
                        n = this.$matchIterator(t, e);
                      if (!n) return !1;
                      var i = null;
                      return (
                        n.forEach(function (t, n, r) {
                          if (t.start) i = t;
                          else {
                            var a = t.offset + (r || 0);
                            if (
                              ((i = new o(n, a, n, a + t.length)),
                              !t.length &&
                                e.start &&
                                e.start.start &&
                                0 != e.skipCurrent &&
                                i.isEqual(e.start))
                            )
                              return (i = null), !1;
                          }
                          return !0;
                        }),
                        i
                      );
                    }),
                    (this.findAll = function (t) {
                      var e = this.$options;
                      if (!e.needle) return [];
                      this.$assembleRegExp(e);
                      var n = e.range,
                        r = n
                          ? t.getLines(n.start.row, n.end.row)
                          : t.doc.getAllLines(),
                        a = [],
                        s = e.re;
                      if (e.$isMultiLine) {
                        var l,
                          c = s.length,
                          d = r.length - c;
                        t: for (var u = s.offset || 0; u <= d; u++) {
                          for (var p = 0; p < c; p++)
                            if (-1 == r[u + p].search(s[p])) continue t;
                          var h = r[u],
                            f = r[u + c - 1],
                            b = h.length - h.match(s[0])[0].length,
                            m = f.match(s[c - 1])[0].length;
                          (l && l.end.row === u && l.end.column > b) ||
                            (a.push((l = new o(u, b, u + c - 1, m))),
                            c > 2 && (u = u + c - 2));
                        }
                      } else
                        for (var g = 0; g < r.length; g++) {
                          var v = i.getMatchOffsets(r[g], s);
                          for (p = 0; p < v.length; p++) {
                            var _ = v[p];
                            a.push(new o(g, _.offset, g, _.offset + _.length));
                          }
                        }
                      if (n) {
                        var y = n.start.column,
                          M = n.start.column;
                        for (
                          g = 0, p = a.length - 1;
                          g < p &&
                          a[g].start.column < y &&
                          a[g].start.row == n.start.row;

                        )
                          g++;
                        for (
                          ;
                          g < p &&
                          a[p].end.column > M &&
                          a[p].end.row == n.end.row;

                        )
                          p--;
                        for (
                          a = a.slice(g, p + 1), g = 0, p = a.length;
                          g < p;
                          g++
                        )
                          (a[g].start.row += n.start.row),
                            (a[g].end.row += n.start.row);
                      }
                      return a;
                    }),
                    (this.replace = function (t, e) {
                      var n = this.$options,
                        i = this.$assembleRegExp(n);
                      if (n.$isMultiLine) return e;
                      if (i) {
                        var r = i.exec(t);
                        if (!r || r[0].length != t.length) return null;
                        if (((e = t.replace(i, e)), n.preserveCase)) {
                          e = e.split("");
                          for (var o = Math.min(t.length, t.length); o--; ) {
                            var a = t[o];
                            a && a.toLowerCase() != a
                              ? (e[o] = e[o].toUpperCase())
                              : (e[o] = e[o].toLowerCase());
                          }
                          e = e.join("");
                        }
                        return e;
                      }
                    }),
                    (this.$matchIterator = function (t, e) {
                      var n,
                        r = this.$assembleRegExp(e);
                      if (!r) return !1;
                      if (e.$isMultiLine)
                        var a = r.length,
                          s = function (e, i, s) {
                            var l = e.search(r[0]);
                            if (-1 != l) {
                              for (var c = 1; c < a; c++)
                                if (-1 == (e = t.getLine(i + c)).search(r[c]))
                                  return;
                              var d = e.match(r[a - 1])[0].length,
                                u = new o(i, l, i + a - 1, d);
                              return (
                                1 == r.offset
                                  ? (u.start.row--,
                                    (u.start.column = Number.MAX_VALUE))
                                  : s && (u.start.column += s),
                                !!n(u) || void 0
                              );
                            }
                          };
                      else
                        s = e.backwards
                          ? function (t, e, o) {
                              for (
                                var a = i.getMatchOffsets(t, r),
                                  s = a.length - 1;
                                s >= 0;
                                s--
                              )
                                if (n(a[s], e, o)) return !0;
                            }
                          : function (t, e, o) {
                              for (
                                var a = i.getMatchOffsets(t, r), s = 0;
                                s < a.length;
                                s++
                              )
                                if (n(a[s], e, o)) return !0;
                            };
                      var l = this.$lineIterator(t, e);
                      return {
                        forEach: function (t) {
                          (n = t), l.forEach(s);
                        },
                      };
                    }),
                    (this.$assembleRegExp = function (t, e) {
                      if (t.needle instanceof RegExp) return (t.re = t.needle);
                      var n = t.needle;
                      if (!t.needle) return (t.re = !1);
                      t.regExp || (n = i.escapeRegExp(n)),
                        t.wholeWord && (n = "\\b" + n + "\\b");
                      var r = t.caseSensitive ? "gm" : "gmi";
                      if (
                        ((t.$isMultiLine = !e && /[\n\r]/.test(n)),
                        t.$isMultiLine)
                      )
                        return (t.re = this.$assembleMultilineRegExp(n, r));
                      try {
                        var o = new RegExp(n, r);
                      } catch (t) {
                        o = !1;
                      }
                      return (t.re = o);
                    }),
                    (this.$assembleMultilineRegExp = function (t, e) {
                      for (
                        var n = t.replace(/\r\n|\r|\n/g, "$\n^").split("\n"),
                          i = [],
                          r = 0;
                        r < n.length;
                        r++
                      )
                        try {
                          i.push(new RegExp(n[r], e));
                        } catch (t) {
                          return !1;
                        }
                      return (
                        "" == n[0]
                          ? (i.shift(), (i.offset = 1))
                          : (i.offset = 0),
                        i
                      );
                    }),
                    (this.$lineIterator = function (t, e) {
                      var n = 1 == e.backwards,
                        i = 0 != e.skipCurrent,
                        r = e.range,
                        o = e.start;
                      o ||
                        (o = r
                          ? r[n ? "end" : "start"]
                          : t.selection.getRange()),
                        o.start && (o = o[i != n ? "end" : "start"]);
                      var a = r ? r.start.row : 0,
                        s = r ? r.end.row : t.getLength() - 1;
                      return {
                        forEach: n
                          ? function (n) {
                              var i = o.row;
                              if (!n(t.getLine(i).substring(0, o.column), i)) {
                                for (i--; i >= a; i--)
                                  if (n(t.getLine(i), i)) return;
                                if (0 != e.wrap)
                                  for (i = s, a = o.row; i >= a; i--)
                                    if (n(t.getLine(i), i)) return;
                              }
                            }
                          : function (n) {
                              var i = o.row;
                              if (
                                !n(t.getLine(i).substr(o.column), i, o.column)
                              ) {
                                for (i += 1; i <= s; i++)
                                  if (n(t.getLine(i), i)) return;
                                if (0 != e.wrap)
                                  for (i = a, s = o.row; i <= s; i++)
                                    if (n(t.getLine(i), i)) return;
                              }
                            },
                      };
                    });
                }).call(a.prototype),
                  (e.Search = a);
              }
            ),
            ace.define(
              "ace/keyboard/hash_handler",
              [
                "require",
                "exports",
                "module",
                "ace/lib/keys",
                "ace/lib/useragent",
              ],
              function (t, e, n) {
                "use strict";
                var i = t("../lib/keys"),
                  r = t("../lib/useragent"),
                  o = i.KEY_MODS;
                function a(t, e) {
                  (this.platform = e || (r.isMac ? "mac" : "win")),
                    (this.commands = {}),
                    (this.commandKeyBinding = {}),
                    this.addCommands(t),
                    (this.$singleCommand = !0);
                }
                function s(t, e) {
                  a.call(this, t, e), (this.$singleCommand = !1);
                }
                (s.prototype = a.prototype),
                  function () {
                    function t(t) {
                      return (
                        ("object" == typeof t &&
                          t.bindKey &&
                          t.bindKey.position) ||
                        0
                      );
                    }
                    (this.addCommand = function (t) {
                      this.commands[t.name] && this.removeCommand(t),
                        (this.commands[t.name] = t),
                        t.bindKey && this._buildKeyHash(t);
                    }),
                      (this.removeCommand = function (t, e) {
                        var n = t && ("string" == typeof t ? t : t.name);
                        (t = this.commands[n]), e || delete this.commands[n];
                        var i = this.commandKeyBinding;
                        for (var r in i) {
                          var o = i[r];
                          if (o == t) delete i[r];
                          else if (Array.isArray(o)) {
                            var a = o.indexOf(t);
                            -1 != a &&
                              (o.splice(a, 1), 1 == o.length && (i[r] = o[0]));
                          }
                        }
                      }),
                      (this.bindKey = function (t, e, n) {
                        if (
                          ("object" == typeof t &&
                            t &&
                            (null == n && (n = t.position),
                            (t = t[this.platform])),
                          t)
                        )
                          return "function" == typeof e
                            ? this.addCommand({
                                exec: e,
                                bindKey: t,
                                name: e.name || t,
                              })
                            : void t.split("|").forEach(function (t) {
                                var i = "";
                                if (-1 != t.indexOf(" ")) {
                                  var r = t.split(/\s+/);
                                  (t = r.pop()),
                                    r.forEach(function (t) {
                                      var e = this.parseKeys(t),
                                        n = o[e.hashId] + e.key;
                                      (i += (i ? " " : "") + n),
                                        this._addCommandToBinding(
                                          i,
                                          "chainKeys"
                                        );
                                    }, this),
                                    (i += " ");
                                }
                                var a = this.parseKeys(t),
                                  s = o[a.hashId] + a.key;
                                this._addCommandToBinding(i + s, e, n);
                              }, this);
                      }),
                      (this._addCommandToBinding = function (e, n, i) {
                        var r,
                          o = this.commandKeyBinding;
                        if (n)
                          if (!o[e] || this.$singleCommand) o[e] = n;
                          else {
                            Array.isArray(o[e])
                              ? -1 != (r = o[e].indexOf(n)) && o[e].splice(r, 1)
                              : (o[e] = [o[e]]),
                              "number" != typeof i &&
                                (i = i || n.isDefault ? -100 : t(n));
                            var a = o[e];
                            for (r = 0; r < a.length && !(t(a[r]) > i); r++);
                            a.splice(r, 0, n);
                          }
                        else delete o[e];
                      }),
                      (this.addCommands = function (t) {
                        t &&
                          Object.keys(t).forEach(function (e) {
                            var n = t[e];
                            if (n) {
                              if ("string" == typeof n)
                                return this.bindKey(n, e);
                              "function" == typeof n && (n = { exec: n }),
                                "object" == typeof n &&
                                  (n.name || (n.name = e), this.addCommand(n));
                            }
                          }, this);
                      }),
                      (this.removeCommands = function (t) {
                        Object.keys(t).forEach(function (e) {
                          this.removeCommand(t[e]);
                        }, this);
                      }),
                      (this.bindKeys = function (t) {
                        Object.keys(t).forEach(function (e) {
                          this.bindKey(e, t[e]);
                        }, this);
                      }),
                      (this._buildKeyHash = function (t) {
                        this.bindKey(t.bindKey, t);
                      }),
                      (this.parseKeys = function (t) {
                        var e = t
                            .toLowerCase()
                            .split(/[\-\+]([\-\+])?/)
                            .filter(function (t) {
                              return t;
                            }),
                          n = e.pop(),
                          r = i[n];
                        if (i.FUNCTION_KEYS[r])
                          n = i.FUNCTION_KEYS[r].toLowerCase();
                        else {
                          if (!e.length) return { key: n, hashId: -1 };
                          if (1 == e.length && "shift" == e[0])
                            return { key: n.toUpperCase(), hashId: -1 };
                        }
                        for (var o = 0, a = e.length; a--; ) {
                          var s = i.KEY_MODS[e[a]];
                          if (null == s) return !1;
                          o |= s;
                        }
                        return { key: n, hashId: o };
                      }),
                      (this.findKeyCommand = function (t, e) {
                        var n = o[t] + e;
                        return this.commandKeyBinding[n];
                      }),
                      (this.handleKeyboard = function (t, e, n, i) {
                        if (!(i < 0)) {
                          var r = o[e] + n,
                            a = this.commandKeyBinding[r];
                          return (
                            t.$keyChain &&
                              ((t.$keyChain += " " + r),
                              (a = this.commandKeyBinding[t.$keyChain] || a)),
                            !a ||
                            ("chainKeys" != a && "chainKeys" != a[a.length - 1])
                              ? (t.$keyChain &&
                                  ((e && 4 != e) || 1 != n.length
                                    ? (-1 == e || i > 0) && (t.$keyChain = "")
                                    : (t.$keyChain = t.$keyChain.slice(
                                        0,
                                        -r.length - 1
                                      ))),
                                { command: a })
                              : ((t.$keyChain = t.$keyChain || r),
                                { command: "null" })
                          );
                        }
                      }),
                      (this.getStatusText = function (t, e) {
                        return e.$keyChain || "";
                      });
                  }.call(a.prototype),
                  (e.HashHandler = a),
                  (e.MultiHashHandler = s);
              }
            ),
            ace.define(
              "ace/commands/command_manager",
              [
                "require",
                "exports",
                "module",
                "ace/lib/oop",
                "ace/keyboard/hash_handler",
                "ace/lib/event_emitter",
              ],
              function (t, e, n) {
                "use strict";
                var i = t("../lib/oop"),
                  r = t("../keyboard/hash_handler").MultiHashHandler,
                  o = t("../lib/event_emitter").EventEmitter,
                  a = function (t, e) {
                    r.call(this, e, t),
                      (this.byName = this.commands),
                      this.setDefaultHandler("exec", function (t) {
                        return t.command.exec(t.editor, t.args || {});
                      });
                  };
                i.inherits(a, r),
                  function () {
                    i.implement(this, o),
                      (this.exec = function (t, e, n) {
                        if (Array.isArray(t)) {
                          for (var i = t.length; i--; )
                            if (this.exec(t[i], e, n)) return !0;
                          return !1;
                        }
                        if (
                          ("string" == typeof t && (t = this.commands[t]), !t)
                        )
                          return !1;
                        if (e && e.$readOnly && !t.readOnly) return !1;
                        var r = { editor: e, command: t, args: n };
                        return (
                          (r.returnValue = this._emit("exec", r)),
                          this._signal("afterExec", r),
                          !1 !== r.returnValue
                        );
                      }),
                      (this.toggleRecording = function (t) {
                        if (!this.$inReplay)
                          return (
                            t && t._emit("changeStatus"),
                            this.recording
                              ? (this.macro.pop(),
                                this.removeEventListener(
                                  "exec",
                                  this.$addCommandToMacro
                                ),
                                this.macro.length ||
                                  (this.macro = this.oldMacro),
                                (this.recording = !1))
                              : (this.$addCommandToMacro ||
                                  (this.$addCommandToMacro = function (t) {
                                    this.macro.push([t.command, t.args]);
                                  }.bind(this)),
                                (this.oldMacro = this.macro),
                                (this.macro = []),
                                this.on("exec", this.$addCommandToMacro),
                                (this.recording = !0))
                          );
                      }),
                      (this.replay = function (t) {
                        if (!this.$inReplay && this.macro) {
                          if (this.recording) return this.toggleRecording(t);
                          try {
                            (this.$inReplay = !0),
                              this.macro.forEach(function (e) {
                                "string" == typeof e
                                  ? this.exec(e, t)
                                  : this.exec(e[0], t, e[1]);
                              }, this);
                          } finally {
                            this.$inReplay = !1;
                          }
                        }
                      }),
                      (this.trimMacro = function (t) {
                        return t.map(function (t) {
                          return (
                            "string" != typeof t[0] && (t[0] = t[0].name),
                            t[1] || (t = t[0]),
                            t
                          );
                        });
                      });
                  }.call(a.prototype),
                  (e.CommandManager = a);
              }
            ),
            ace.define(
              "ace/commands/default_commands",
              [
                "require",
                "exports",
                "module",
                "ace/lib/lang",
                "ace/config",
                "ace/range",
              ],
              function (t, e, n) {
                "use strict";
                var i = t("../lib/lang"),
                  r = t("../config"),
                  o = t("../range").Range;
                function a(t, e) {
                  return { win: t, mac: e };
                }
                e.commands = [
                  {
                    name: "showSettingsMenu",
                    bindKey: a("Ctrl-,", "Command-,"),
                    exec: function (t) {
                      r.loadModule("ace/ext/settings_menu", function (e) {
                        e.init(t), t.showSettingsMenu();
                      });
                    },
                    readOnly: !0,
                  },
                  {
                    name: "goToNextError",
                    bindKey: a("Alt-E", "Ctrl-E"),
                    exec: function (t) {
                      r.loadModule("ace/ext/error_marker", function (e) {
                        e.showErrorMarker(t, 1);
                      });
                    },
                    scrollIntoView: "animate",
                    readOnly: !0,
                  },
                  {
                    name: "goToPreviousError",
                    bindKey: a("Alt-Shift-E", "Ctrl-Shift-E"),
                    exec: function (t) {
                      r.loadModule("ace/ext/error_marker", function (e) {
                        e.showErrorMarker(t, -1);
                      });
                    },
                    scrollIntoView: "animate",
                    readOnly: !0,
                  },
                  {
                    name: "selectall",
                    bindKey: a("Ctrl-A", "Command-A"),
                    exec: function (t) {
                      t.selectAll();
                    },
                    readOnly: !0,
                  },
                  {
                    name: "centerselection",
                    bindKey: a(null, "Ctrl-L"),
                    exec: function (t) {
                      t.centerSelection();
                    },
                    readOnly: !0,
                  },
                  {
                    name: "gotoline",
                    bindKey: a("Ctrl-L", "Command-L"),
                    exec: function (t) {
                      var e = parseInt(prompt("Enter line number:"), 10);
                      isNaN(e) || t.gotoLine(e);
                    },
                    readOnly: !0,
                  },
                  {
                    name: "fold",
                    bindKey: a("Alt-L|Ctrl-F1", "Command-Alt-L|Command-F1"),
                    exec: function (t) {
                      t.session.toggleFold(!1);
                    },
                    multiSelectAction: "forEach",
                    scrollIntoView: "center",
                    readOnly: !0,
                  },
                  {
                    name: "unfold",
                    bindKey: a(
                      "Alt-Shift-L|Ctrl-Shift-F1",
                      "Command-Alt-Shift-L|Command-Shift-F1"
                    ),
                    exec: function (t) {
                      t.session.toggleFold(!0);
                    },
                    multiSelectAction: "forEach",
                    scrollIntoView: "center",
                    readOnly: !0,
                  },
                  {
                    name: "toggleFoldWidget",
                    bindKey: a("F2", "F2"),
                    exec: function (t) {
                      t.session.toggleFoldWidget();
                    },
                    multiSelectAction: "forEach",
                    scrollIntoView: "center",
                    readOnly: !0,
                  },
                  {
                    name: "toggleParentFoldWidget",
                    bindKey: a("Alt-F2", "Alt-F2"),
                    exec: function (t) {
                      t.session.toggleFoldWidget(!0);
                    },
                    multiSelectAction: "forEach",
                    scrollIntoView: "center",
                    readOnly: !0,
                  },
                  {
                    name: "foldall",
                    bindKey: a(null, "Ctrl-Command-Option-0"),
                    exec: function (t) {
                      t.session.foldAll();
                    },
                    scrollIntoView: "center",
                    readOnly: !0,
                  },
                  {
                    name: "foldOther",
                    bindKey: a("Alt-0", "Command-Option-0"),
                    exec: function (t) {
                      t.session.foldAll(),
                        t.session.unfold(t.selection.getAllRanges());
                    },
                    scrollIntoView: "center",
                    readOnly: !0,
                  },
                  {
                    name: "unfoldall",
                    bindKey: a("Alt-Shift-0", "Command-Option-Shift-0"),
                    exec: function (t) {
                      t.session.unfold();
                    },
                    scrollIntoView: "center",
                    readOnly: !0,
                  },
                  {
                    name: "findnext",
                    bindKey: a("Ctrl-K", "Command-G"),
                    exec: function (t) {
                      t.findNext();
                    },
                    multiSelectAction: "forEach",
                    scrollIntoView: "center",
                    readOnly: !0,
                  },
                  {
                    name: "findprevious",
                    bindKey: a("Ctrl-Shift-K", "Command-Shift-G"),
                    exec: function (t) {
                      t.findPrevious();
                    },
                    multiSelectAction: "forEach",
                    scrollIntoView: "center",
                    readOnly: !0,
                  },
                  {
                    name: "selectOrFindNext",
                    bindKey: a("Alt-K", "Ctrl-G"),
                    exec: function (t) {
                      t.selection.isEmpty()
                        ? t.selection.selectWord()
                        : t.findNext();
                    },
                    readOnly: !0,
                  },
                  {
                    name: "selectOrFindPrevious",
                    bindKey: a("Alt-Shift-K", "Ctrl-Shift-G"),
                    exec: function (t) {
                      t.selection.isEmpty()
                        ? t.selection.selectWord()
                        : t.findPrevious();
                    },
                    readOnly: !0,
                  },
                  {
                    name: "find",
                    bindKey: a("Ctrl-F", "Command-F"),
                    exec: function (t) {
                      r.loadModule("ace/ext/searchbox", function (e) {
                        e.Search(t);
                      });
                    },
                    readOnly: !0,
                  },
                  {
                    name: "overwrite",
                    bindKey: "Insert",
                    exec: function (t) {
                      t.toggleOverwrite();
                    },
                    readOnly: !0,
                  },
                  {
                    name: "selecttostart",
                    bindKey: a("Ctrl-Shift-Home", "Command-Shift-Up"),
                    exec: function (t) {
                      t.getSelection().selectFileStart();
                    },
                    multiSelectAction: "forEach",
                    readOnly: !0,
                    scrollIntoView: "animate",
                    aceCommandGroup: "fileJump",
                  },
                  {
                    name: "gotostart",
                    bindKey: a("Ctrl-Home", "Command-Home|Command-Up"),
                    exec: function (t) {
                      t.navigateFileStart();
                    },
                    multiSelectAction: "forEach",
                    readOnly: !0,
                    scrollIntoView: "animate",
                    aceCommandGroup: "fileJump",
                  },
                  {
                    name: "selectup",
                    bindKey: a("Shift-Up", "Shift-Up"),
                    exec: function (t) {
                      t.getSelection().selectUp();
                    },
                    multiSelectAction: "forEach",
                    scrollIntoView: "cursor",
                    readOnly: !0,
                  },
                  {
                    name: "golineup",
                    bindKey: a("Up", "Up|Ctrl-P"),
                    exec: function (t, e) {
                      t.navigateUp(e.times);
                    },
                    multiSelectAction: "forEach",
                    scrollIntoView: "cursor",
                    readOnly: !0,
                  },
                  {
                    name: "selecttoend",
                    bindKey: a("Ctrl-Shift-End", "Command-Shift-Down"),
                    exec: function (t) {
                      t.getSelection().selectFileEnd();
                    },
                    multiSelectAction: "forEach",
                    readOnly: !0,
                    scrollIntoView: "animate",
                    aceCommandGroup: "fileJump",
                  },
                  {
                    name: "gotoend",
                    bindKey: a("Ctrl-End", "Command-End|Command-Down"),
                    exec: function (t) {
                      t.navigateFileEnd();
                    },
                    multiSelectAction: "forEach",
                    readOnly: !0,
                    scrollIntoView: "animate",
                    aceCommandGroup: "fileJump",
                  },
                  {
                    name: "selectdown",
                    bindKey: a("Shift-Down", "Shift-Down"),
                    exec: function (t) {
                      t.getSelection().selectDown();
                    },
                    multiSelectAction: "forEach",
                    scrollIntoView: "cursor",
                    readOnly: !0,
                  },
                  {
                    name: "golinedown",
                    bindKey: a("Down", "Down|Ctrl-N"),
                    exec: function (t, e) {
                      t.navigateDown(e.times);
                    },
                    multiSelectAction: "forEach",
                    scrollIntoView: "cursor",
                    readOnly: !0,
                  },
                  {
                    name: "selectwordleft",
                    bindKey: a("Ctrl-Shift-Left", "Option-Shift-Left"),
                    exec: function (t) {
                      t.getSelection().selectWordLeft();
                    },
                    multiSelectAction: "forEach",
                    scrollIntoView: "cursor",
                    readOnly: !0,
                  },
                  {
                    name: "gotowordleft",
                    bindKey: a("Ctrl-Left", "Option-Left"),
                    exec: function (t) {
                      t.navigateWordLeft();
                    },
                    multiSelectAction: "forEach",
                    scrollIntoView: "cursor",
                    readOnly: !0,
                  },
                  {
                    name: "selecttolinestart",
                    bindKey: a("Alt-Shift-Left", "Command-Shift-Left"),
                    exec: function (t) {
                      t.getSelection().selectLineStart();
                    },
                    multiSelectAction: "forEach",
                    scrollIntoView: "cursor",
                    readOnly: !0,
                  },
                  {
                    name: "gotolinestart",
                    bindKey: a("Alt-Left|Home", "Command-Left|Home|Ctrl-A"),
                    exec: function (t) {
                      t.navigateLineStart();
                    },
                    multiSelectAction: "forEach",
                    scrollIntoView: "cursor",
                    readOnly: !0,
                  },
                  {
                    name: "selectleft",
                    bindKey: a("Shift-Left", "Shift-Left"),
                    exec: function (t) {
                      t.getSelection().selectLeft();
                    },
                    multiSelectAction: "forEach",
                    scrollIntoView: "cursor",
                    readOnly: !0,
                  },
                  {
                    name: "gotoleft",
                    bindKey: a("Left", "Left|Ctrl-B"),
                    exec: function (t, e) {
                      t.navigateLeft(e.times);
                    },
                    multiSelectAction: "forEach",
                    scrollIntoView: "cursor",
                    readOnly: !0,
                  },
                  {
                    name: "selectwordright",
                    bindKey: a("Ctrl-Shift-Right", "Option-Shift-Right"),
                    exec: function (t) {
                      t.getSelection().selectWordRight();
                    },
                    multiSelectAction: "forEach",
                    scrollIntoView: "cursor",
                    readOnly: !0,
                  },
                  {
                    name: "gotowordright",
                    bindKey: a("Ctrl-Right", "Option-Right"),
                    exec: function (t) {
                      t.navigateWordRight();
                    },
                    multiSelectAction: "forEach",
                    scrollIntoView: "cursor",
                    readOnly: !0,
                  },
                  {
                    name: "selecttolineend",
                    bindKey: a("Alt-Shift-Right", "Command-Shift-Right"),
                    exec: function (t) {
                      t.getSelection().selectLineEnd();
                    },
                    multiSelectAction: "forEach",
                    scrollIntoView: "cursor",
                    readOnly: !0,
                  },
                  {
                    name: "gotolineend",
                    bindKey: a("Alt-Right|End", "Command-Right|End|Ctrl-E"),
                    exec: function (t) {
                      t.navigateLineEnd();
                    },
                    multiSelectAction: "forEach",
                    scrollIntoView: "cursor",
                    readOnly: !0,
                  },
                  {
                    name: "selectright",
                    bindKey: a("Shift-Right", "Shift-Right"),
                    exec: function (t) {
                      t.getSelection().selectRight();
                    },
                    multiSelectAction: "forEach",
                    scrollIntoView: "cursor",
                    readOnly: !0,
                  },
                  {
                    name: "gotoright",
                    bindKey: a("Right", "Right|Ctrl-F"),
                    exec: function (t, e) {
                      t.navigateRight(e.times);
                    },
                    multiSelectAction: "forEach",
                    scrollIntoView: "cursor",
                    readOnly: !0,
                  },
                  {
                    name: "selectpagedown",
                    bindKey: "Shift-PageDown",
                    exec: function (t) {
                      t.selectPageDown();
                    },
                    readOnly: !0,
                  },
                  {
                    name: "pagedown",
                    bindKey: a(null, "Option-PageDown"),
                    exec: function (t) {
                      t.scrollPageDown();
                    },
                    readOnly: !0,
                  },
                  {
                    name: "gotopagedown",
                    bindKey: a("PageDown", "PageDown|Ctrl-V"),
                    exec: function (t) {
                      t.gotoPageDown();
                    },
                    readOnly: !0,
                  },
                  {
                    name: "selectpageup",
                    bindKey: "Shift-PageUp",
                    exec: function (t) {
                      t.selectPageUp();
                    },
                    readOnly: !0,
                  },
                  {
                    name: "pageup",
                    bindKey: a(null, "Option-PageUp"),
                    exec: function (t) {
                      t.scrollPageUp();
                    },
                    readOnly: !0,
                  },
                  {
                    name: "gotopageup",
                    bindKey: "PageUp",
                    exec: function (t) {
                      t.gotoPageUp();
                    },
                    readOnly: !0,
                  },
                  {
                    name: "scrollup",
                    bindKey: a("Ctrl-Up", null),
                    exec: function (t) {
                      t.renderer.scrollBy(
                        0,
                        -2 * t.renderer.layerConfig.lineHeight
                      );
                    },
                    readOnly: !0,
                  },
                  {
                    name: "scrolldown",
                    bindKey: a("Ctrl-Down", null),
                    exec: function (t) {
                      t.renderer.scrollBy(
                        0,
                        2 * t.renderer.layerConfig.lineHeight
                      );
                    },
                    readOnly: !0,
                  },
                  {
                    name: "selectlinestart",
                    bindKey: "Shift-Home",
                    exec: function (t) {
                      t.getSelection().selectLineStart();
                    },
                    multiSelectAction: "forEach",
                    scrollIntoView: "cursor",
                    readOnly: !0,
                  },
                  {
                    name: "selectlineend",
                    bindKey: "Shift-End",
                    exec: function (t) {
                      t.getSelection().selectLineEnd();
                    },
                    multiSelectAction: "forEach",
                    scrollIntoView: "cursor",
                    readOnly: !0,
                  },
                  {
                    name: "togglerecording",
                    bindKey: a("Ctrl-Alt-E", "Command-Option-E"),
                    exec: function (t) {
                      t.commands.toggleRecording(t);
                    },
                    readOnly: !0,
                  },
                  {
                    name: "replaymacro",
                    bindKey: a("Ctrl-Shift-E", "Command-Shift-E"),
                    exec: function (t) {
                      t.commands.replay(t);
                    },
                    readOnly: !0,
                  },
                  {
                    name: "jumptomatching",
                    bindKey: a("Ctrl-P", "Ctrl-P"),
                    exec: function (t) {
                      t.jumpToMatching();
                    },
                    multiSelectAction: "forEach",
                    scrollIntoView: "animate",
                    readOnly: !0,
                  },
                  {
                    name: "selecttomatching",
                    bindKey: a("Ctrl-Shift-P", "Ctrl-Shift-P"),
                    exec: function (t) {
                      t.jumpToMatching(!0);
                    },
                    multiSelectAction: "forEach",
                    scrollIntoView: "animate",
                    readOnly: !0,
                  },
                  {
                    name: "expandToMatching",
                    bindKey: a("Ctrl-Shift-M", "Ctrl-Shift-M"),
                    exec: function (t) {
                      t.jumpToMatching(!0, !0);
                    },
                    multiSelectAction: "forEach",
                    scrollIntoView: "animate",
                    readOnly: !0,
                  },
                  {
                    name: "passKeysToBrowser",
                    bindKey: a(null, null),
                    exec: function () {},
                    passEvent: !0,
                    readOnly: !0,
                  },
                  { name: "copy", exec: function (t) {}, readOnly: !0 },
                  {
                    name: "cut",
                    exec: function (t) {
                      var e = t.getSelectionRange();
                      t._emit("cut", e),
                        t.selection.isEmpty() ||
                          (t.session.remove(e), t.clearSelection());
                    },
                    scrollIntoView: "cursor",
                    multiSelectAction: "forEach",
                  },
                  {
                    name: "paste",
                    exec: function (t, e) {
                      t.$handlePaste(e);
                    },
                    scrollIntoView: "cursor",
                  },
                  {
                    name: "removeline",
                    bindKey: a("Ctrl-D", "Command-D"),
                    exec: function (t) {
                      t.removeLines();
                    },
                    scrollIntoView: "cursor",
                    multiSelectAction: "forEachLine",
                  },
                  {
                    name: "duplicateSelection",
                    bindKey: a("Ctrl-Shift-D", "Command-Shift-D"),
                    exec: function (t) {
                      t.duplicateSelection();
                    },
                    scrollIntoView: "cursor",
                    multiSelectAction: "forEach",
                  },
                  {
                    name: "sortlines",
                    bindKey: a("Ctrl-Alt-S", "Command-Alt-S"),
                    exec: function (t) {
                      t.sortLines();
                    },
                    scrollIntoView: "selection",
                    multiSelectAction: "forEachLine",
                  },
                  {
                    name: "togglecomment",
                    bindKey: a("Ctrl-/", "Command-/"),
                    exec: function (t) {
                      t.toggleCommentLines();
                    },
                    multiSelectAction: "forEachLine",
                    scrollIntoView: "selectionPart",
                  },
                  {
                    name: "toggleBlockComment",
                    bindKey: a("Ctrl-Shift-/", "Command-Shift-/"),
                    exec: function (t) {
                      t.toggleBlockComment();
                    },
                    multiSelectAction: "forEach",
                    scrollIntoView: "selectionPart",
                  },
                  {
                    name: "modifyNumberUp",
                    bindKey: a("Ctrl-Shift-Up", "Alt-Shift-Up"),
                    exec: function (t) {
                      t.modifyNumber(1);
                    },
                    scrollIntoView: "cursor",
                    multiSelectAction: "forEach",
                  },
                  {
                    name: "modifyNumberDown",
                    bindKey: a("Ctrl-Shift-Down", "Alt-Shift-Down"),
                    exec: function (t) {
                      t.modifyNumber(-1);
                    },
                    scrollIntoView: "cursor",
                    multiSelectAction: "forEach",
                  },
                  {
                    name: "replace",
                    bindKey: a("Ctrl-H", "Command-Option-F"),
                    exec: function (t) {
                      r.loadModule("ace/ext/searchbox", function (e) {
                        e.Search(t, !0);
                      });
                    },
                  },
                  {
                    name: "undo",
                    bindKey: a("Ctrl-Z", "Command-Z"),
                    exec: function (t) {
                      t.undo();
                    },
                  },
                  {
                    name: "redo",
                    bindKey: a(
                      "Ctrl-Shift-Z|Ctrl-Y",
                      "Command-Shift-Z|Command-Y"
                    ),
                    exec: function (t) {
                      t.redo();
                    },
                  },
                  {
                    name: "copylinesup",
                    bindKey: a("Alt-Shift-Up", "Command-Option-Up"),
                    exec: function (t) {
                      t.copyLinesUp();
                    },
                    scrollIntoView: "cursor",
                  },
                  {
                    name: "movelinesup",
                    bindKey: a("Alt-Up", "Option-Up"),
                    exec: function (t) {
                      t.moveLinesUp();
                    },
                    scrollIntoView: "cursor",
                  },
                  {
                    name: "copylinesdown",
                    bindKey: a("Alt-Shift-Down", "Command-Option-Down"),
                    exec: function (t) {
                      t.copyLinesDown();
                    },
                    scrollIntoView: "cursor",
                  },
                  {
                    name: "movelinesdown",
                    bindKey: a("Alt-Down", "Option-Down"),
                    exec: function (t) {
                      t.moveLinesDown();
                    },
                    scrollIntoView: "cursor",
                  },
                  {
                    name: "del",
                    bindKey: a("Delete", "Delete|Ctrl-D|Shift-Delete"),
                    exec: function (t) {
                      t.remove("right");
                    },
                    multiSelectAction: "forEach",
                    scrollIntoView: "cursor",
                  },
                  {
                    name: "backspace",
                    bindKey: a(
                      "Shift-Backspace|Backspace",
                      "Ctrl-Backspace|Shift-Backspace|Backspace|Ctrl-H"
                    ),
                    exec: function (t) {
                      t.remove("left");
                    },
                    multiSelectAction: "forEach",
                    scrollIntoView: "cursor",
                  },
                  {
                    name: "cut_or_delete",
                    bindKey: a("Shift-Delete", null),
                    exec: function (t) {
                      if (!t.selection.isEmpty()) return !1;
                      t.remove("left");
                    },
                    multiSelectAction: "forEach",
                    scrollIntoView: "cursor",
                  },
                  {
                    name: "removetolinestart",
                    bindKey: a("Alt-Backspace", "Command-Backspace"),
                    exec: function (t) {
                      t.removeToLineStart();
                    },
                    multiSelectAction: "forEach",
                    scrollIntoView: "cursor",
                  },
                  {
                    name: "removetolineend",
                    bindKey: a("Alt-Delete", "Ctrl-K"),
                    exec: function (t) {
                      t.removeToLineEnd();
                    },
                    multiSelectAction: "forEach",
                    scrollIntoView: "cursor",
                  },
                  {
                    name: "removewordleft",
                    bindKey: a(
                      "Ctrl-Backspace",
                      "Alt-Backspace|Ctrl-Alt-Backspace"
                    ),
                    exec: function (t) {
                      t.removeWordLeft();
                    },
                    multiSelectAction: "forEach",
                    scrollIntoView: "cursor",
                  },
                  {
                    name: "removewordright",
                    bindKey: a("Ctrl-Delete", "Alt-Delete"),
                    exec: function (t) {
                      t.removeWordRight();
                    },
                    multiSelectAction: "forEach",
                    scrollIntoView: "cursor",
                  },
                  {
                    name: "outdent",
                    bindKey: a("Shift-Tab", "Shift-Tab"),
                    exec: function (t) {
                      t.blockOutdent();
                    },
                    multiSelectAction: "forEach",
                    scrollIntoView: "selectionPart",
                  },
                  {
                    name: "indent",
                    bindKey: a("Tab", "Tab"),
                    exec: function (t) {
                      t.indent();
                    },
                    multiSelectAction: "forEach",
                    scrollIntoView: "selectionPart",
                  },
                  {
                    name: "blockoutdent",
                    bindKey: a("Ctrl-[", "Ctrl-["),
                    exec: function (t) {
                      t.blockOutdent();
                    },
                    multiSelectAction: "forEachLine",
                    scrollIntoView: "selectionPart",
                  },
                  {
                    name: "blockindent",
                    bindKey: a("Ctrl-]", "Ctrl-]"),
                    exec: function (t) {
                      t.blockIndent();
                    },
                    multiSelectAction: "forEachLine",
                    scrollIntoView: "selectionPart",
                  },
                  {
                    name: "insertstring",
                    exec: function (t, e) {
                      t.insert(e);
                    },
                    multiSelectAction: "forEach",
                    scrollIntoView: "cursor",
                  },
                  {
                    name: "inserttext",
                    exec: function (t, e) {
                      t.insert(i.stringRepeat(e.text || "", e.times || 1));
                    },
                    multiSelectAction: "forEach",
                    scrollIntoView: "cursor",
                  },
                  {
                    name: "splitline",
                    bindKey: a(null, "Ctrl-O"),
                    exec: function (t) {
                      t.splitLine();
                    },
                    multiSelectAction: "forEach",
                    scrollIntoView: "cursor",
                  },
                  {
                    name: "transposeletters",
                    bindKey: a("Ctrl-T", "Ctrl-T"),
                    exec: function (t) {
                      t.transposeLetters();
                    },
                    multiSelectAction: function (t) {
                      t.transposeSelections(1);
                    },
                    scrollIntoView: "cursor",
                  },
                  {
                    name: "touppercase",
                    bindKey: a("Ctrl-U", "Ctrl-U"),
                    exec: function (t) {
                      t.toUpperCase();
                    },
                    multiSelectAction: "forEach",
                    scrollIntoView: "cursor",
                  },
                  {
                    name: "tolowercase",
                    bindKey: a("Ctrl-Shift-U", "Ctrl-Shift-U"),
                    exec: function (t) {
                      t.toLowerCase();
                    },
                    multiSelectAction: "forEach",
                    scrollIntoView: "cursor",
                  },
                  {
                    name: "expandtoline",
                    bindKey: a("Ctrl-Shift-L", "Command-Shift-L"),
                    exec: function (t) {
                      var e = t.selection.getRange();
                      (e.start.column = e.end.column = 0),
                        e.end.row++,
                        t.selection.setRange(e, !1);
                    },
                    multiSelectAction: "forEach",
                    scrollIntoView: "cursor",
                    readOnly: !0,
                  },
                  {
                    name: "joinlines",
                    bindKey: a(null, null),
                    exec: function (t) {
                      for (
                        var e = t.selection.isBackwards(),
                          n = e
                            ? t.selection.getSelectionLead()
                            : t.selection.getSelectionAnchor(),
                          r = e
                            ? t.selection.getSelectionAnchor()
                            : t.selection.getSelectionLead(),
                          a = t.session.doc.getLine(n.row).length,
                          s = t.session.doc
                            .getTextRange(t.selection.getRange())
                            .replace(/\n\s*/, " ").length,
                          l = t.session.doc.getLine(n.row),
                          c = n.row + 1;
                        c <= r.row + 1;
                        c++
                      ) {
                        var d = i.stringTrimLeft(
                          i.stringTrimRight(t.session.doc.getLine(c))
                        );
                        0 !== d.length && (d = " " + d), (l += d);
                      }
                      r.row + 1 < t.session.doc.getLength() - 1 &&
                        (l += t.session.doc.getNewLineCharacter()),
                        t.clearSelection(),
                        t.session.doc.replace(new o(n.row, 0, r.row + 2, 0), l),
                        s > 0
                          ? (t.selection.moveCursorTo(n.row, n.column),
                            t.selection.selectTo(n.row, n.column + s))
                          : ((a =
                              t.session.doc.getLine(n.row).length > a
                                ? a + 1
                                : a),
                            t.selection.moveCursorTo(n.row, a));
                    },
                    multiSelectAction: "forEach",
                    readOnly: !0,
                  },
                  {
                    name: "invertSelection",
                    bindKey: a(null, null),
                    exec: function (t) {
                      var e = t.session.doc.getLength() - 1,
                        n = t.session.doc.getLine(e).length,
                        i = t.selection.rangeList.ranges,
                        r = [];
                      i.length < 1 && (i = [t.selection.getRange()]);
                      for (var a = 0; a < i.length; a++)
                        a == i.length - 1 &&
                          ((i[a].end.row === e && i[a].end.column === n) ||
                            r.push(new o(i[a].end.row, i[a].end.column, e, n))),
                          0 === a
                            ? (0 === i[a].start.row &&
                                0 === i[a].start.column) ||
                              r.push(
                                new o(0, 0, i[a].start.row, i[a].start.column)
                              )
                            : r.push(
                                new o(
                                  i[a - 1].end.row,
                                  i[a - 1].end.column,
                                  i[a].start.row,
                                  i[a].start.column
                                )
                              );
                      for (
                        t.exitMultiSelectMode(), t.clearSelection(), a = 0;
                        a < r.length;
                        a++
                      )
                        t.selection.addRange(r[a], !1);
                    },
                    readOnly: !0,
                    scrollIntoView: "none",
                  },
                ];
              }
            ),
            ace.define(
              "ace/editor",
              [
                "require",
                "exports",
                "module",
                "ace/lib/fixoldbrowsers",
                "ace/lib/oop",
                "ace/lib/dom",
                "ace/lib/lang",
                "ace/lib/useragent",
                "ace/keyboard/textinput",
                "ace/mouse/mouse_handler",
                "ace/mouse/fold_handler",
                "ace/keyboard/keybinding",
                "ace/edit_session",
                "ace/search",
                "ace/range",
                "ace/lib/event_emitter",
                "ace/commands/command_manager",
                "ace/commands/default_commands",
                "ace/config",
                "ace/token_iterator",
              ],
              function (t, e, n) {
                "use strict";
                t("./lib/fixoldbrowsers");
                var i = t("./lib/oop"),
                  r = t("./lib/dom"),
                  o = t("./lib/lang"),
                  a = t("./lib/useragent"),
                  s = t("./keyboard/textinput").TextInput,
                  l = t("./mouse/mouse_handler").MouseHandler,
                  c = t("./mouse/fold_handler").FoldHandler,
                  d = t("./keyboard/keybinding").KeyBinding,
                  u = t("./edit_session").EditSession,
                  p = t("./search").Search,
                  h = t("./range").Range,
                  f = t("./lib/event_emitter").EventEmitter,
                  b = t("./commands/command_manager").CommandManager,
                  m = t("./commands/default_commands").commands,
                  g = t("./config"),
                  v = t("./token_iterator").TokenIterator,
                  _ = function (t, e) {
                    var n = t.getContainerElement();
                    (this.container = n),
                      (this.renderer = t),
                      (this.commands = new b(a.isMac ? "mac" : "win", m)),
                      (this.textInput = new s(t.getTextAreaContainer(), this)),
                      (this.renderer.textarea = this.textInput.getElement()),
                      (this.keyBinding = new d(this)),
                      (this.$mouseHandler = new l(this)),
                      new c(this),
                      (this.$blockScrolling = 0),
                      (this.$search = new p().set({ wrap: !0 })),
                      (this.$historyTracker = this.$historyTracker.bind(this)),
                      this.commands.on("exec", this.$historyTracker),
                      this.$initOperationListeners(),
                      (this._$emitInputEvent = o.delayedCall(
                        function () {
                          this._signal("input", {}),
                            this.session &&
                              this.session.bgTokenizer &&
                              this.session.bgTokenizer.scheduleStart();
                        }.bind(this)
                      )),
                      this.on("change", function (t, e) {
                        e._$emitInputEvent.schedule(31);
                      }),
                      this.setSession(e || new u("")),
                      g.resetOptions(this),
                      g._signal("editor", this);
                  };
                (function () {
                  i.implement(this, f),
                    (this.$initOperationListeners = function () {
                      (this.selections = []),
                        this.commands.on(
                          "exec",
                          this.startOperation.bind(this),
                          !0
                        ),
                        this.commands.on(
                          "afterExec",
                          this.endOperation.bind(this),
                          !0
                        ),
                        (this.$opResetTimer = o.delayedCall(
                          this.endOperation.bind(this)
                        )),
                        this.on(
                          "change",
                          function () {
                            this.curOp || this.startOperation(),
                              (this.curOp.docChanged = !0);
                          }.bind(this),
                          !0
                        ),
                        this.on(
                          "changeSelection",
                          function () {
                            this.curOp || this.startOperation(),
                              (this.curOp.selectionChanged = !0);
                          }.bind(this),
                          !0
                        );
                    }),
                    (this.curOp = null),
                    (this.prevOp = {}),
                    (this.startOperation = function (t) {
                      if (this.curOp) {
                        if (!t || this.curOp.command) return;
                        this.prevOp = this.curOp;
                      }
                      t || ((this.previousCommand = null), (t = {})),
                        this.$opResetTimer.schedule(),
                        (this.curOp = {
                          command: t.command || {},
                          args: t.args,
                          scrollTop: this.renderer.scrollTop,
                        }),
                        this.curOp.command.name &&
                          void 0 !== this.curOp.command.scrollIntoView &&
                          this.$blockScrolling++;
                    }),
                    (this.endOperation = function (t) {
                      if (this.curOp) {
                        if (t && !1 === t.returnValue)
                          return (this.curOp = null);
                        this._signal("beforeEndOperation");
                        var e = this.curOp.command;
                        e.name &&
                          this.$blockScrolling > 0 &&
                          this.$blockScrolling--;
                        var n = e && e.scrollIntoView;
                        if (n) {
                          switch (n) {
                            case "center-animate":
                              n = "animate";
                            case "center":
                              this.renderer.scrollCursorIntoView(null, 0.5);
                              break;
                            case "animate":
                            case "cursor":
                              this.renderer.scrollCursorIntoView();
                              break;
                            case "selectionPart":
                              var i = this.selection.getRange(),
                                r = this.renderer.layerConfig;
                              (i.start.row >= r.lastRow ||
                                i.end.row <= r.firstRow) &&
                                this.renderer.scrollSelectionIntoView(
                                  this.selection.anchor,
                                  this.selection.lead
                                );
                          }
                          "animate" == n &&
                            this.renderer.animateScrolling(
                              this.curOp.scrollTop
                            );
                        }
                        (this.prevOp = this.curOp), (this.curOp = null);
                      }
                    }),
                    (this.$mergeableCommands = [
                      "backspace",
                      "del",
                      "insertstring",
                    ]),
                    (this.$historyTracker = function (t) {
                      if (this.$mergeUndoDeltas) {
                        var e = this.prevOp,
                          n = this.$mergeableCommands,
                          i = e.command && t.command.name == e.command.name;
                        if ("insertstring" == t.command.name) {
                          var r = t.args;
                          void 0 === this.mergeNextCommand &&
                            (this.mergeNextCommand = !0),
                            (i =
                              i &&
                              this.mergeNextCommand &&
                              (!/\s/.test(r) || /\s/.test(e.args))),
                            (this.mergeNextCommand = !0);
                        } else i = i && -1 !== n.indexOf(t.command.name);
                        "always" != this.$mergeUndoDeltas &&
                          Date.now() - this.sequenceStartTime > 2e3 &&
                          (i = !1),
                          i
                            ? (this.session.mergeUndoDeltas = !0)
                            : -1 !== n.indexOf(t.command.name) &&
                              (this.sequenceStartTime = Date.now());
                      }
                    }),
                    (this.setKeyboardHandler = function (t, e) {
                      if (t && "string" == typeof t) {
                        this.$keybindingId = t;
                        var n = this;
                        g.loadModule(["keybinding", t], function (i) {
                          n.$keybindingId == t &&
                            n.keyBinding.setKeyboardHandler(i && i.handler),
                            e && e();
                        });
                      } else
                        (this.$keybindingId = null),
                          this.keyBinding.setKeyboardHandler(t),
                          e && e();
                    }),
                    (this.getKeyboardHandler = function () {
                      return this.keyBinding.getKeyboardHandler();
                    }),
                    (this.setSession = function (t) {
                      if (this.session != t) {
                        this.curOp && this.endOperation(), (this.curOp = {});
                        var e = this.session;
                        if (e) {
                          this.session.off("change", this.$onDocumentChange),
                            this.session.off("changeMode", this.$onChangeMode),
                            this.session.off(
                              "tokenizerUpdate",
                              this.$onTokenizerUpdate
                            ),
                            this.session.off(
                              "changeTabSize",
                              this.$onChangeTabSize
                            ),
                            this.session.off(
                              "changeWrapLimit",
                              this.$onChangeWrapLimit
                            ),
                            this.session.off(
                              "changeWrapMode",
                              this.$onChangeWrapMode
                            ),
                            this.session.off("changeFold", this.$onChangeFold),
                            this.session.off(
                              "changeFrontMarker",
                              this.$onChangeFrontMarker
                            ),
                            this.session.off(
                              "changeBackMarker",
                              this.$onChangeBackMarker
                            ),
                            this.session.off(
                              "changeBreakpoint",
                              this.$onChangeBreakpoint
                            ),
                            this.session.off(
                              "changeAnnotation",
                              this.$onChangeAnnotation
                            ),
                            this.session.off(
                              "changeOverwrite",
                              this.$onCursorChange
                            ),
                            this.session.off(
                              "changeScrollTop",
                              this.$onScrollTopChange
                            ),
                            this.session.off(
                              "changeScrollLeft",
                              this.$onScrollLeftChange
                            );
                          var n = this.session.getSelection();
                          n.off("changeCursor", this.$onCursorChange),
                            n.off("changeSelection", this.$onSelectionChange);
                        }
                        (this.session = t),
                          t
                            ? ((this.$onDocumentChange =
                                this.onDocumentChange.bind(this)),
                              t.on("change", this.$onDocumentChange),
                              this.renderer.setSession(t),
                              (this.$onChangeMode =
                                this.onChangeMode.bind(this)),
                              t.on("changeMode", this.$onChangeMode),
                              (this.$onTokenizerUpdate =
                                this.onTokenizerUpdate.bind(this)),
                              t.on("tokenizerUpdate", this.$onTokenizerUpdate),
                              (this.$onChangeTabSize =
                                this.renderer.onChangeTabSize.bind(
                                  this.renderer
                                )),
                              t.on("changeTabSize", this.$onChangeTabSize),
                              (this.$onChangeWrapLimit =
                                this.onChangeWrapLimit.bind(this)),
                              t.on("changeWrapLimit", this.$onChangeWrapLimit),
                              (this.$onChangeWrapMode =
                                this.onChangeWrapMode.bind(this)),
                              t.on("changeWrapMode", this.$onChangeWrapMode),
                              (this.$onChangeFold =
                                this.onChangeFold.bind(this)),
                              t.on("changeFold", this.$onChangeFold),
                              (this.$onChangeFrontMarker =
                                this.onChangeFrontMarker.bind(this)),
                              this.session.on(
                                "changeFrontMarker",
                                this.$onChangeFrontMarker
                              ),
                              (this.$onChangeBackMarker =
                                this.onChangeBackMarker.bind(this)),
                              this.session.on(
                                "changeBackMarker",
                                this.$onChangeBackMarker
                              ),
                              (this.$onChangeBreakpoint =
                                this.onChangeBreakpoint.bind(this)),
                              this.session.on(
                                "changeBreakpoint",
                                this.$onChangeBreakpoint
                              ),
                              (this.$onChangeAnnotation =
                                this.onChangeAnnotation.bind(this)),
                              this.session.on(
                                "changeAnnotation",
                                this.$onChangeAnnotation
                              ),
                              (this.$onCursorChange =
                                this.onCursorChange.bind(this)),
                              this.session.on(
                                "changeOverwrite",
                                this.$onCursorChange
                              ),
                              (this.$onScrollTopChange =
                                this.onScrollTopChange.bind(this)),
                              this.session.on(
                                "changeScrollTop",
                                this.$onScrollTopChange
                              ),
                              (this.$onScrollLeftChange =
                                this.onScrollLeftChange.bind(this)),
                              this.session.on(
                                "changeScrollLeft",
                                this.$onScrollLeftChange
                              ),
                              (this.selection = t.getSelection()),
                              this.selection.on(
                                "changeCursor",
                                this.$onCursorChange
                              ),
                              (this.$onSelectionChange =
                                this.onSelectionChange.bind(this)),
                              this.selection.on(
                                "changeSelection",
                                this.$onSelectionChange
                              ),
                              this.onChangeMode(),
                              (this.$blockScrolling += 1),
                              this.onCursorChange(),
                              (this.$blockScrolling -= 1),
                              this.onScrollTopChange(),
                              this.onScrollLeftChange(),
                              this.onSelectionChange(),
                              this.onChangeFrontMarker(),
                              this.onChangeBackMarker(),
                              this.onChangeBreakpoint(),
                              this.onChangeAnnotation(),
                              this.session.getUseWrapMode() &&
                                this.renderer.adjustWrapLimit(),
                              this.renderer.updateFull())
                            : ((this.selection = null),
                              this.renderer.setSession(t)),
                          this._signal("changeSession", {
                            session: t,
                            oldSession: e,
                          }),
                          (this.curOp = null),
                          e && e._signal("changeEditor", { oldEditor: this }),
                          t && t._signal("changeEditor", { editor: this });
                      }
                    }),
                    (this.getSession = function () {
                      return this.session;
                    }),
                    (this.setValue = function (t, e) {
                      return (
                        this.session.doc.setValue(t),
                        e
                          ? 1 == e
                            ? this.navigateFileEnd()
                            : -1 == e && this.navigateFileStart()
                          : this.selectAll(),
                        t
                      );
                    }),
                    (this.getValue = function () {
                      return this.session.getValue();
                    }),
                    (this.getSelection = function () {
                      return this.selection;
                    }),
                    (this.resize = function (t) {
                      this.renderer.onResize(t);
                    }),
                    (this.setTheme = function (t, e) {
                      this.renderer.setTheme(t, e);
                    }),
                    (this.getTheme = function () {
                      return this.renderer.getTheme();
                    }),
                    (this.setStyle = function (t) {
                      this.renderer.setStyle(t);
                    }),
                    (this.unsetStyle = function (t) {
                      this.renderer.unsetStyle(t);
                    }),
                    (this.getFontSize = function () {
                      return (
                        this.getOption("fontSize") ||
                        r.computedStyle(this.container, "fontSize")
                      );
                    }),
                    (this.setFontSize = function (t) {
                      this.setOption("fontSize", t);
                    }),
                    (this.$highlightBrackets = function () {
                      if (
                        (this.session.$bracketHighlight &&
                          (this.session.removeMarker(
                            this.session.$bracketHighlight
                          ),
                          (this.session.$bracketHighlight = null)),
                        !this.$highlightPending)
                      ) {
                        var t = this;
                        (this.$highlightPending = !0),
                          setTimeout(function () {
                            t.$highlightPending = !1;
                            var e = t.session;
                            if (e && e.bgTokenizer) {
                              var n = e.findMatchingBracket(
                                t.getCursorPosition()
                              );
                              if (n)
                                var i = new h(
                                  n.row,
                                  n.column,
                                  n.row,
                                  n.column + 1
                                );
                              else
                                e.$mode.getMatching &&
                                  (i = e.$mode.getMatching(t.session));
                              i &&
                                (e.$bracketHighlight = e.addMarker(
                                  i,
                                  "ace_bracket",
                                  "text"
                                ));
                            }
                          }, 50);
                      }
                    }),
                    (this.$highlightTags = function () {
                      if (!this.$highlightTagPending) {
                        var t = this;
                        (this.$highlightTagPending = !0),
                          setTimeout(function () {
                            t.$highlightTagPending = !1;
                            var e = t.session;
                            if (e && e.bgTokenizer) {
                              var n = t.getCursorPosition(),
                                i = new v(t.session, n.row, n.column),
                                r = i.getCurrentToken();
                              if (!r || !/\b(?:tag-open|tag-name)/.test(r.type))
                                return (
                                  e.removeMarker(e.$tagHighlight),
                                  void (e.$tagHighlight = null)
                                );
                              if (
                                -1 == r.type.indexOf("tag-open") ||
                                (r = i.stepForward())
                              ) {
                                var o = r.value,
                                  a = 0,
                                  s = i.stepBackward();
                                if ("<" == s.value)
                                  do {
                                    (s = r),
                                      (r = i.stepForward()) &&
                                        r.value === o &&
                                        -1 !== r.type.indexOf("tag-name") &&
                                        ("<" === s.value
                                          ? a++
                                          : "</" === s.value && a--);
                                  } while (r && a >= 0);
                                else {
                                  do {
                                    (r = s),
                                      (s = i.stepBackward()),
                                      r &&
                                        r.value === o &&
                                        -1 !== r.type.indexOf("tag-name") &&
                                        ("<" === s.value
                                          ? a++
                                          : "</" === s.value && a--);
                                  } while (s && a <= 0);
                                  i.stepForward();
                                }
                                if (!r)
                                  return (
                                    e.removeMarker(e.$tagHighlight),
                                    void (e.$tagHighlight = null)
                                  );
                                var l = i.getCurrentTokenRow(),
                                  c = i.getCurrentTokenColumn(),
                                  d = new h(l, c, l, c + r.value.length);
                                e.$tagHighlight &&
                                  0 !==
                                    d.compareRange(
                                      e.$backMarkers[e.$tagHighlight].range
                                    ) &&
                                  (e.removeMarker(e.$tagHighlight),
                                  (e.$tagHighlight = null)),
                                  d &&
                                    !e.$tagHighlight &&
                                    (e.$tagHighlight = e.addMarker(
                                      d,
                                      "ace_bracket",
                                      "text"
                                    ));
                              }
                            }
                          }, 50);
                      }
                    }),
                    (this.focus = function () {
                      var t = this;
                      setTimeout(function () {
                        t.textInput.focus();
                      }),
                        this.textInput.focus();
                    }),
                    (this.isFocused = function () {
                      return this.textInput.isFocused();
                    }),
                    (this.blur = function () {
                      this.textInput.blur();
                    }),
                    (this.onFocus = function (t) {
                      this.$isFocused ||
                        ((this.$isFocused = !0),
                        this.renderer.showCursor(),
                        this.renderer.visualizeFocus(),
                        this._emit("focus", t));
                    }),
                    (this.onBlur = function (t) {
                      this.$isFocused &&
                        ((this.$isFocused = !1),
                        this.renderer.hideCursor(),
                        this.renderer.visualizeBlur(),
                        this._emit("blur", t));
                    }),
                    (this.$cursorChange = function () {
                      this.renderer.updateCursor();
                    }),
                    (this.onDocumentChange = function (t) {
                      var e = this.session.$useWrapMode,
                        n = t.start.row == t.end.row ? t.end.row : 1 / 0;
                      this.renderer.updateLines(t.start.row, n, e),
                        this._signal("change", t),
                        this.$cursorChange(),
                        this.$updateHighlightActiveLine();
                    }),
                    (this.onTokenizerUpdate = function (t) {
                      var e = t.data;
                      this.renderer.updateLines(e.first, e.last);
                    }),
                    (this.onScrollTopChange = function () {
                      this.renderer.scrollToY(this.session.getScrollTop());
                    }),
                    (this.onScrollLeftChange = function () {
                      this.renderer.scrollToX(this.session.getScrollLeft());
                    }),
                    (this.onCursorChange = function () {
                      this.$cursorChange(),
                        this.$blockScrolling ||
                          (g.warn(
                            "Automatically scrolling cursor into view after selection change",
                            "this will be disabled in the next version",
                            "set editor.$blockScrolling = Infinity to disable this message"
                          ),
                          this.renderer.scrollCursorIntoView()),
                        this.$highlightBrackets(),
                        this.$highlightTags(),
                        this.$updateHighlightActiveLine(),
                        this._signal("changeSelection");
                    }),
                    (this.$updateHighlightActiveLine = function () {
                      var t,
                        e = this.getSession();
                      if (
                        (this.$highlightActiveLine &&
                          (("line" == this.$selectionStyle &&
                            this.selection.isMultiLine()) ||
                            (t = this.getCursorPosition()),
                          !this.renderer.$maxLines ||
                            1 !== this.session.getLength() ||
                            this.renderer.$minLines > 1 ||
                            (t = !1)),
                        e.$highlightLineMarker && !t)
                      )
                        e.removeMarker(e.$highlightLineMarker.id),
                          (e.$highlightLineMarker = null);
                      else if (!e.$highlightLineMarker && t) {
                        var n = new h(t.row, t.column, t.row, 1 / 0);
                        (n.id = e.addMarker(
                          n,
                          "ace_active-line",
                          "screenLine"
                        )),
                          (e.$highlightLineMarker = n);
                      } else
                        t &&
                          ((e.$highlightLineMarker.start.row = t.row),
                          (e.$highlightLineMarker.end.row = t.row),
                          (e.$highlightLineMarker.start.column = t.column),
                          e._signal("changeBackMarker"));
                    }),
                    (this.onSelectionChange = function (t) {
                      var e = this.session;
                      if (
                        (e.$selectionMarker &&
                          e.removeMarker(e.$selectionMarker),
                        (e.$selectionMarker = null),
                        this.selection.isEmpty())
                      )
                        this.$updateHighlightActiveLine();
                      else {
                        var n = this.selection.getRange(),
                          i = this.getSelectionStyle();
                        e.$selectionMarker = e.addMarker(n, "ace_selection", i);
                      }
                      var r =
                        this.$highlightSelectedWord &&
                        this.$getSelectionHighLightRegexp();
                      this.session.highlight(r),
                        this._signal("changeSelection");
                    }),
                    (this.$getSelectionHighLightRegexp = function () {
                      var t = this.session,
                        e = this.getSelectionRange();
                      if (!e.isEmpty() && !e.isMultiLine()) {
                        var n = e.start.column - 1,
                          i = e.end.column + 1,
                          r = t.getLine(e.start.row),
                          o = r.length,
                          a = r.substring(Math.max(n, 0), Math.min(i, o));
                        if (
                          !(
                            (n >= 0 && /^[\w\d]/.test(a)) ||
                            (i <= o && /[\w\d]$/.test(a))
                          ) &&
                          ((a = r.substring(e.start.column, e.end.column)),
                          /^[\w\d]+$/.test(a))
                        )
                          return this.$search.$assembleRegExp({
                            wholeWord: !0,
                            caseSensitive: !0,
                            needle: a,
                          });
                      }
                    }),
                    (this.onChangeFrontMarker = function () {
                      this.renderer.updateFrontMarkers();
                    }),
                    (this.onChangeBackMarker = function () {
                      this.renderer.updateBackMarkers();
                    }),
                    (this.onChangeBreakpoint = function () {
                      this.renderer.updateBreakpoints();
                    }),
                    (this.onChangeAnnotation = function () {
                      this.renderer.setAnnotations(
                        this.session.getAnnotations()
                      );
                    }),
                    (this.onChangeMode = function (t) {
                      this.renderer.updateText(), this._emit("changeMode", t);
                    }),
                    (this.onChangeWrapLimit = function () {
                      this.renderer.updateFull();
                    }),
                    (this.onChangeWrapMode = function () {
                      this.renderer.onResize(!0);
                    }),
                    (this.onChangeFold = function () {
                      this.$updateHighlightActiveLine(),
                        this.renderer.updateFull();
                    }),
                    (this.getSelectedText = function () {
                      return this.session.getTextRange(
                        this.getSelectionRange()
                      );
                    }),
                    (this.getCopyText = function () {
                      var t = this.getSelectedText();
                      return this._signal("copy", t), t;
                    }),
                    (this.onCopy = function () {
                      this.commands.exec("copy", this);
                    }),
                    (this.onCut = function () {
                      this.commands.exec("cut", this);
                    }),
                    (this.onPaste = function (t, e) {
                      var n = { text: t, event: e };
                      this.commands.exec("paste", this, n);
                    }),
                    (this.$handlePaste = function (t) {
                      "string" == typeof t && (t = { text: t }),
                        this._signal("paste", t);
                      var e = t.text;
                      if (
                        !this.inMultiSelectMode ||
                        this.inVirtualSelectionMode
                      )
                        this.insert(e);
                      else {
                        var n = e.split(/\r\n|\r|\n/),
                          i = this.selection.rangeList.ranges;
                        if (n.length > i.length || n.length < 2 || !n[1])
                          return this.commands.exec("insertstring", this, e);
                        for (var r = i.length; r--; ) {
                          var o = i[r];
                          o.isEmpty() || this.session.remove(o),
                            this.session.insert(o.start, n[r]);
                        }
                      }
                    }),
                    (this.execCommand = function (t, e) {
                      return this.commands.exec(t, this, e);
                    }),
                    (this.insert = function (t, e) {
                      var n = this.session,
                        i = n.getMode(),
                        r = this.getCursorPosition();
                      if (this.getBehavioursEnabled() && !e) {
                        var o = i.transformAction(
                          n.getState(r.row),
                          "insertion",
                          this,
                          n,
                          t
                        );
                        o &&
                          (t !== o.text &&
                            ((this.session.mergeUndoDeltas = !1),
                            (this.$mergeNextCommand = !1)),
                          (t = o.text));
                      }
                      if (
                        ("\t" == t && (t = this.session.getTabString()),
                        this.selection.isEmpty())
                      )
                        this.session.getOverwrite() &&
                          (((a = new h.fromPoints(r, r)).end.column +=
                            t.length),
                          this.session.remove(a));
                      else {
                        var a = this.getSelectionRange();
                        (r = this.session.remove(a)), this.clearSelection();
                      }
                      if ("\n" == t || "\r\n" == t) {
                        var s = n.getLine(r.row);
                        if (r.column > s.search(/\S|$/)) {
                          var l = s.substr(r.column).search(/\S|$/);
                          n.doc.removeInLine(r.row, r.column, r.column + l);
                        }
                      }
                      this.clearSelection();
                      var c = r.column,
                        d = n.getState(r.row),
                        u = ((s = n.getLine(r.row)), i.checkOutdent(d, s, t));
                      if (
                        (n.insert(r, t),
                        o &&
                          o.selection &&
                          (2 == o.selection.length
                            ? this.selection.setSelectionRange(
                                new h(
                                  r.row,
                                  c + o.selection[0],
                                  r.row,
                                  c + o.selection[1]
                                )
                              )
                            : this.selection.setSelectionRange(
                                new h(
                                  r.row + o.selection[0],
                                  o.selection[1],
                                  r.row + o.selection[2],
                                  o.selection[3]
                                )
                              )),
                        n.getDocument().isNewLine(t))
                      ) {
                        var p = i.getNextLineIndent(
                          d,
                          s.slice(0, r.column),
                          n.getTabString()
                        );
                        n.insert({ row: r.row + 1, column: 0 }, p);
                      }
                      u && i.autoOutdent(d, n, r.row);
                    }),
                    (this.onTextInput = function (t) {
                      this.keyBinding.onTextInput(t);
                    }),
                    (this.onCommandKey = function (t, e, n) {
                      this.keyBinding.onCommandKey(t, e, n);
                    }),
                    (this.setOverwrite = function (t) {
                      this.session.setOverwrite(t);
                    }),
                    (this.getOverwrite = function () {
                      return this.session.getOverwrite();
                    }),
                    (this.toggleOverwrite = function () {
                      this.session.toggleOverwrite();
                    }),
                    (this.setScrollSpeed = function (t) {
                      this.setOption("scrollSpeed", t);
                    }),
                    (this.getScrollSpeed = function () {
                      return this.getOption("scrollSpeed");
                    }),
                    (this.setDragDelay = function (t) {
                      this.setOption("dragDelay", t);
                    }),
                    (this.getDragDelay = function () {
                      return this.getOption("dragDelay");
                    }),
                    (this.setSelectionStyle = function (t) {
                      this.setOption("selectionStyle", t);
                    }),
                    (this.getSelectionStyle = function () {
                      return this.getOption("selectionStyle");
                    }),
                    (this.setHighlightActiveLine = function (t) {
                      this.setOption("highlightActiveLine", t);
                    }),
                    (this.getHighlightActiveLine = function () {
                      return this.getOption("highlightActiveLine");
                    }),
                    (this.setHighlightGutterLine = function (t) {
                      this.setOption("highlightGutterLine", t);
                    }),
                    (this.getHighlightGutterLine = function () {
                      return this.getOption("highlightGutterLine");
                    }),
                    (this.setHighlightSelectedWord = function (t) {
                      this.setOption("highlightSelectedWord", t);
                    }),
                    (this.getHighlightSelectedWord = function () {
                      return this.$highlightSelectedWord;
                    }),
                    (this.setAnimatedScroll = function (t) {
                      this.renderer.setAnimatedScroll(t);
                    }),
                    (this.getAnimatedScroll = function () {
                      return this.renderer.getAnimatedScroll();
                    }),
                    (this.setShowInvisibles = function (t) {
                      this.renderer.setShowInvisibles(t);
                    }),
                    (this.getShowInvisibles = function () {
                      return this.renderer.getShowInvisibles();
                    }),
                    (this.setDisplayIndentGuides = function (t) {
                      this.renderer.setDisplayIndentGuides(t);
                    }),
                    (this.getDisplayIndentGuides = function () {
                      return this.renderer.getDisplayIndentGuides();
                    }),
                    (this.setShowPrintMargin = function (t) {
                      this.renderer.setShowPrintMargin(t);
                    }),
                    (this.getShowPrintMargin = function () {
                      return this.renderer.getShowPrintMargin();
                    }),
                    (this.setPrintMarginColumn = function (t) {
                      this.renderer.setPrintMarginColumn(t);
                    }),
                    (this.getPrintMarginColumn = function () {
                      return this.renderer.getPrintMarginColumn();
                    }),
                    (this.setReadOnly = function (t) {
                      this.setOption("readOnly", t);
                    }),
                    (this.getReadOnly = function () {
                      return this.getOption("readOnly");
                    }),
                    (this.setBehavioursEnabled = function (t) {
                      this.setOption("behavioursEnabled", t);
                    }),
                    (this.getBehavioursEnabled = function () {
                      return this.getOption("behavioursEnabled");
                    }),
                    (this.setWrapBehavioursEnabled = function (t) {
                      this.setOption("wrapBehavioursEnabled", t);
                    }),
                    (this.getWrapBehavioursEnabled = function () {
                      return this.getOption("wrapBehavioursEnabled");
                    }),
                    (this.setShowFoldWidgets = function (t) {
                      this.setOption("showFoldWidgets", t);
                    }),
                    (this.getShowFoldWidgets = function () {
                      return this.getOption("showFoldWidgets");
                    }),
                    (this.setFadeFoldWidgets = function (t) {
                      this.setOption("fadeFoldWidgets", t);
                    }),
                    (this.getFadeFoldWidgets = function () {
                      return this.getOption("fadeFoldWidgets");
                    }),
                    (this.remove = function (t) {
                      this.selection.isEmpty() &&
                        ("left" == t
                          ? this.selection.selectLeft()
                          : this.selection.selectRight());
                      var e = this.getSelectionRange();
                      if (this.getBehavioursEnabled()) {
                        var n = this.session,
                          i = n.getState(e.start.row),
                          r = n
                            .getMode()
                            .transformAction(i, "deletion", this, n, e);
                        if (0 === e.end.column) {
                          var o = n.getTextRange(e);
                          if ("\n" == o[o.length - 1]) {
                            var a = n.getLine(e.end.row);
                            /^\s+$/.test(a) && (e.end.column = a.length);
                          }
                        }
                        r && (e = r);
                      }
                      this.session.remove(e), this.clearSelection();
                    }),
                    (this.removeWordRight = function () {
                      this.selection.isEmpty() &&
                        this.selection.selectWordRight(),
                        this.session.remove(this.getSelectionRange()),
                        this.clearSelection();
                    }),
                    (this.removeWordLeft = function () {
                      this.selection.isEmpty() &&
                        this.selection.selectWordLeft(),
                        this.session.remove(this.getSelectionRange()),
                        this.clearSelection();
                    }),
                    (this.removeToLineStart = function () {
                      this.selection.isEmpty() &&
                        this.selection.selectLineStart(),
                        this.session.remove(this.getSelectionRange()),
                        this.clearSelection();
                    }),
                    (this.removeToLineEnd = function () {
                      this.selection.isEmpty() &&
                        this.selection.selectLineEnd();
                      var t = this.getSelectionRange();
                      t.start.column == t.end.column &&
                        t.start.row == t.end.row &&
                        ((t.end.column = 0), t.end.row++),
                        this.session.remove(t),
                        this.clearSelection();
                    }),
                    (this.splitLine = function () {
                      this.selection.isEmpty() ||
                        (this.session.remove(this.getSelectionRange()),
                        this.clearSelection());
                      var t = this.getCursorPosition();
                      this.insert("\n"), this.moveCursorToPosition(t);
                    }),
                    (this.transposeLetters = function () {
                      if (this.selection.isEmpty()) {
                        var t = this.getCursorPosition(),
                          e = t.column;
                        if (0 !== e) {
                          var n,
                            i,
                            r = this.session.getLine(t.row);
                          e < r.length
                            ? ((n = r.charAt(e) + r.charAt(e - 1)),
                              (i = new h(t.row, e - 1, t.row, e + 1)))
                            : ((n = r.charAt(e - 1) + r.charAt(e - 2)),
                              (i = new h(t.row, e - 2, t.row, e))),
                            this.session.replace(i, n);
                        }
                      }
                    }),
                    (this.toLowerCase = function () {
                      var t = this.getSelectionRange();
                      this.selection.isEmpty() && this.selection.selectWord();
                      var e = this.getSelectionRange(),
                        n = this.session.getTextRange(e);
                      this.session.replace(e, n.toLowerCase()),
                        this.selection.setSelectionRange(t);
                    }),
                    (this.toUpperCase = function () {
                      var t = this.getSelectionRange();
                      this.selection.isEmpty() && this.selection.selectWord();
                      var e = this.getSelectionRange(),
                        n = this.session.getTextRange(e);
                      this.session.replace(e, n.toUpperCase()),
                        this.selection.setSelectionRange(t);
                    }),
                    (this.indent = function () {
                      var t = this.session,
                        e = this.getSelectionRange();
                      if (!(e.start.row < e.end.row)) {
                        if (e.start.column < e.end.column) {
                          var n = t.getTextRange(e);
                          if (!/^\s+$/.test(n))
                            return (
                              (d = this.$getSelectedRows()),
                              void t.indentRows(d.first, d.last, "\t")
                            );
                        }
                        var i = t.getLine(e.start.row),
                          r = e.start,
                          a = t.getTabSize(),
                          s = t.documentToScreenColumn(r.row, r.column);
                        if (this.session.getUseSoftTabs())
                          var l = a - (s % a),
                            c = o.stringRepeat(" ", l);
                        else {
                          for (l = s % a; " " == i[e.start.column] && l; )
                            e.start.column--, l--;
                          this.selection.setSelectionRange(e), (c = "\t");
                        }
                        return this.insert(c);
                      }
                      var d = this.$getSelectedRows();
                      t.indentRows(d.first, d.last, "\t");
                    }),
                    (this.blockIndent = function () {
                      var t = this.$getSelectedRows();
                      this.session.indentRows(t.first, t.last, "\t");
                    }),
                    (this.blockOutdent = function () {
                      var t = this.session.getSelection();
                      this.session.outdentRows(t.getRange());
                    }),
                    (this.sortLines = function () {
                      var t = this.$getSelectedRows(),
                        e = this.session,
                        n = [];
                      for (r = t.first; r <= t.last; r++) n.push(e.getLine(r));
                      n.sort(function (t, e) {
                        return t.toLowerCase() < e.toLowerCase()
                          ? -1
                          : t.toLowerCase() > e.toLowerCase()
                          ? 1
                          : 0;
                      });
                      for (
                        var i = new h(0, 0, 0, 0), r = t.first;
                        r <= t.last;
                        r++
                      ) {
                        var o = e.getLine(r);
                        (i.start.row = r),
                          (i.end.row = r),
                          (i.end.column = o.length),
                          e.replace(i, n[r - t.first]);
                      }
                    }),
                    (this.toggleCommentLines = function () {
                      var t = this.session.getState(
                          this.getCursorPosition().row
                        ),
                        e = this.$getSelectedRows();
                      this.session
                        .getMode()
                        .toggleCommentLines(t, this.session, e.first, e.last);
                    }),
                    (this.toggleBlockComment = function () {
                      var t = this.getCursorPosition(),
                        e = this.session.getState(t.row),
                        n = this.getSelectionRange();
                      this.session
                        .getMode()
                        .toggleBlockComment(e, this.session, n, t);
                    }),
                    (this.getNumberAt = function (t, e) {
                      var n = /[\-]?[0-9]+(?:\.[0-9]+)?/g;
                      n.lastIndex = 0;
                      for (var i = this.session.getLine(t); n.lastIndex < e; ) {
                        var r = n.exec(i);
                        if (r.index <= e && r.index + r[0].length >= e)
                          return {
                            value: r[0],
                            start: r.index,
                            end: r.index + r[0].length,
                          };
                      }
                      return null;
                    }),
                    (this.modifyNumber = function (t) {
                      var e = this.selection.getCursor().row,
                        n = this.selection.getCursor().column,
                        i = new h(e, n - 1, e, n),
                        r = this.session.getTextRange(i);
                      if (!isNaN(parseFloat(r)) && isFinite(r)) {
                        var o = this.getNumberAt(e, n);
                        if (o) {
                          var a =
                              o.value.indexOf(".") >= 0
                                ? o.start + o.value.indexOf(".") + 1
                                : o.end,
                            s = o.start + o.value.length - a,
                            l = parseFloat(o.value);
                          (l *= Math.pow(10, s)),
                            a !== o.end && n < a
                              ? (t *= Math.pow(10, o.end - n - 1))
                              : (t *= Math.pow(10, o.end - n)),
                            (l += t);
                          var c = (l /= Math.pow(10, s)).toFixed(s),
                            d = new h(e, o.start, e, o.end);
                          this.session.replace(d, c),
                            this.moveCursorTo(
                              e,
                              Math.max(
                                o.start + 1,
                                n + c.length - o.value.length
                              )
                            );
                        }
                      }
                    }),
                    (this.removeLines = function () {
                      var t = this.$getSelectedRows();
                      this.session.removeFullLines(t.first, t.last),
                        this.clearSelection();
                    }),
                    (this.duplicateSelection = function () {
                      var t = this.selection,
                        e = this.session,
                        n = t.getRange(),
                        i = t.isBackwards();
                      if (n.isEmpty()) {
                        var r = n.start.row;
                        e.duplicateLines(r, r);
                      } else {
                        var o = i ? n.start : n.end,
                          a = e.insert(o, e.getTextRange(n), !1);
                        (n.start = o), (n.end = a), t.setSelectionRange(n, i);
                      }
                    }),
                    (this.moveLinesDown = function () {
                      this.$moveLines(1, !1);
                    }),
                    (this.moveLinesUp = function () {
                      this.$moveLines(-1, !1);
                    }),
                    (this.moveText = function (t, e, n) {
                      return this.session.moveText(t, e, n);
                    }),
                    (this.copyLinesUp = function () {
                      this.$moveLines(-1, !0);
                    }),
                    (this.copyLinesDown = function () {
                      this.$moveLines(1, !0);
                    }),
                    (this.$moveLines = function (t, e) {
                      var n,
                        i,
                        r = this.selection;
                      if (!r.inMultiSelectMode || this.inVirtualSelectionMode) {
                        var o = r.toOrientedRange();
                        (n = this.$getSelectedRows(o)),
                          (i = this.session.$moveLines(
                            n.first,
                            n.last,
                            e ? 0 : t
                          )),
                          e && -1 == t && (i = 0),
                          o.moveBy(i, 0),
                          r.fromOrientedRange(o);
                      } else {
                        var a = r.rangeList.ranges;
                        r.rangeList.detach(this.session),
                          (this.inVirtualSelectionMode = !0);
                        for (
                          var s = 0, l = 0, c = a.length, d = 0;
                          d < c;
                          d++
                        ) {
                          var u = d;
                          a[d].moveBy(s, 0);
                          for (
                            var p = (n = this.$getSelectedRows(a[d])).first,
                              h = n.last;
                            ++d < c;

                          ) {
                            l && a[d].moveBy(l, 0);
                            var f = this.$getSelectedRows(a[d]);
                            if (e && f.first != h) break;
                            if (!e && f.first > h + 1) break;
                            h = f.last;
                          }
                          for (
                            d--,
                              s = this.session.$moveLines(p, h, e ? 0 : t),
                              e && -1 == t && (u = d + 1);
                            u <= d;

                          )
                            a[u].moveBy(s, 0), u++;
                          e || (s = 0), (l += s);
                        }
                        r.fromOrientedRange(r.ranges[0]),
                          r.rangeList.attach(this.session),
                          (this.inVirtualSelectionMode = !1);
                      }
                    }),
                    (this.$getSelectedRows = function (t) {
                      return (
                        (t = (t || this.getSelectionRange()).collapseRows()),
                        {
                          first: this.session.getRowFoldStart(t.start.row),
                          last: this.session.getRowFoldEnd(t.end.row),
                        }
                      );
                    }),
                    (this.onCompositionStart = function (t) {
                      this.renderer.showComposition(this.getCursorPosition());
                    }),
                    (this.onCompositionUpdate = function (t) {
                      this.renderer.setCompositionText(t);
                    }),
                    (this.onCompositionEnd = function () {
                      this.renderer.hideComposition();
                    }),
                    (this.getFirstVisibleRow = function () {
                      return this.renderer.getFirstVisibleRow();
                    }),
                    (this.getLastVisibleRow = function () {
                      return this.renderer.getLastVisibleRow();
                    }),
                    (this.isRowVisible = function (t) {
                      return (
                        t >= this.getFirstVisibleRow() &&
                        t <= this.getLastVisibleRow()
                      );
                    }),
                    (this.isRowFullyVisible = function (t) {
                      return (
                        t >= this.renderer.getFirstFullyVisibleRow() &&
                        t <= this.renderer.getLastFullyVisibleRow()
                      );
                    }),
                    (this.$getVisibleRowCount = function () {
                      return (
                        this.renderer.getScrollBottomRow() -
                        this.renderer.getScrollTopRow() +
                        1
                      );
                    }),
                    (this.$moveByPage = function (t, e) {
                      var n = this.renderer,
                        i = this.renderer.layerConfig,
                        r = t * Math.floor(i.height / i.lineHeight);
                      this.$blockScrolling++,
                        !0 === e
                          ? this.selection.$moveSelection(function () {
                              this.moveCursorBy(r, 0);
                            })
                          : !1 === e &&
                            (this.selection.moveCursorBy(r, 0),
                            this.selection.clearSelection()),
                        this.$blockScrolling--;
                      var o = n.scrollTop;
                      n.scrollBy(0, r * i.lineHeight),
                        null != e && n.scrollCursorIntoView(null, 0.5),
                        n.animateScrolling(o);
                    }),
                    (this.selectPageDown = function () {
                      this.$moveByPage(1, !0);
                    }),
                    (this.selectPageUp = function () {
                      this.$moveByPage(-1, !0);
                    }),
                    (this.gotoPageDown = function () {
                      this.$moveByPage(1, !1);
                    }),
                    (this.gotoPageUp = function () {
                      this.$moveByPage(-1, !1);
                    }),
                    (this.scrollPageDown = function () {
                      this.$moveByPage(1);
                    }),
                    (this.scrollPageUp = function () {
                      this.$moveByPage(-1);
                    }),
                    (this.scrollToRow = function (t) {
                      this.renderer.scrollToRow(t);
                    }),
                    (this.scrollToLine = function (t, e, n, i) {
                      this.renderer.scrollToLine(t, e, n, i);
                    }),
                    (this.centerSelection = function () {
                      var t = this.getSelectionRange(),
                        e = {
                          row: Math.floor(
                            t.start.row + (t.end.row - t.start.row) / 2
                          ),
                          column: Math.floor(
                            t.start.column + (t.end.column - t.start.column) / 2
                          ),
                        };
                      this.renderer.alignCursor(e, 0.5);
                    }),
                    (this.getCursorPosition = function () {
                      return this.selection.getCursor();
                    }),
                    (this.getCursorPositionScreen = function () {
                      return this.session.documentToScreenPosition(
                        this.getCursorPosition()
                      );
                    }),
                    (this.getSelectionRange = function () {
                      return this.selection.getRange();
                    }),
                    (this.selectAll = function () {
                      (this.$blockScrolling += 1),
                        this.selection.selectAll(),
                        (this.$blockScrolling -= 1);
                    }),
                    (this.clearSelection = function () {
                      this.selection.clearSelection();
                    }),
                    (this.moveCursorTo = function (t, e) {
                      this.selection.moveCursorTo(t, e);
                    }),
                    (this.moveCursorToPosition = function (t) {
                      this.selection.moveCursorToPosition(t);
                    }),
                    (this.jumpToMatching = function (t, e) {
                      var n = this.getCursorPosition(),
                        i = new v(this.session, n.row, n.column),
                        r = i.getCurrentToken(),
                        o = r || i.stepForward();
                      if (o) {
                        var a,
                          s,
                          l = !1,
                          c = {},
                          d = n.column - o.start,
                          u = {
                            ")": "(",
                            "(": "(",
                            "]": "[",
                            "[": "[",
                            "{": "{",
                            "}": "{",
                          };
                        do {
                          if (o.value.match(/[{}()\[\]]/g)) {
                            for (; d < o.value.length && !l; d++)
                              if (u[o.value[d]])
                                switch (
                                  ((s =
                                    u[o.value[d]] +
                                    "." +
                                    o.type.replace("rparen", "lparen")),
                                  isNaN(c[s]) && (c[s] = 0),
                                  o.value[d])
                                ) {
                                  case "(":
                                  case "[":
                                  case "{":
                                    c[s]++;
                                    break;
                                  case ")":
                                  case "]":
                                  case "}":
                                    c[s]--,
                                      -1 === c[s] &&
                                        ((a = "bracket"), (l = !0));
                                }
                          } else
                            o &&
                              -1 !== o.type.indexOf("tag-name") &&
                              (isNaN(c[o.value]) && (c[o.value] = 0),
                              "<" === r.value
                                ? c[o.value]++
                                : "</" === r.value && c[o.value]--,
                              -1 === c[o.value] && ((a = "tag"), (l = !0)));
                          l || ((r = o), (o = i.stepForward()), (d = 0));
                        } while (o && !l);
                        if (a) {
                          var p, f;
                          if ("bracket" === a)
                            (p = this.session.getBracketRange(n)) ||
                              ((f = (p = new h(
                                i.getCurrentTokenRow(),
                                i.getCurrentTokenColumn() + d - 1,
                                i.getCurrentTokenRow(),
                                i.getCurrentTokenColumn() + d - 1
                              )).start),
                              (e ||
                                (f.row === n.row &&
                                  Math.abs(f.column - n.column) < 2)) &&
                                (p = this.session.getBracketRange(f)));
                          else if ("tag" === a) {
                            if (!o || -1 === o.type.indexOf("tag-name")) return;
                            var b = o.value;
                            if (
                              0 ===
                              (p = new h(
                                i.getCurrentTokenRow(),
                                i.getCurrentTokenColumn() - 2,
                                i.getCurrentTokenRow(),
                                i.getCurrentTokenColumn() - 2
                              )).compare(n.row, n.column)
                            ) {
                              l = !1;
                              do {
                                (o = r),
                                  (r = i.stepBackward()) &&
                                    (-1 !== r.type.indexOf("tag-close") &&
                                      p.setEnd(
                                        i.getCurrentTokenRow(),
                                        i.getCurrentTokenColumn() + 1
                                      ),
                                    o.value === b &&
                                      -1 !== o.type.indexOf("tag-name") &&
                                      ("<" === r.value
                                        ? c[b]++
                                        : "</" === r.value && c[b]--,
                                      0 === c[b] && (l = !0)));
                              } while (r && !l);
                            }
                            o &&
                              o.type.indexOf("tag-name") &&
                              (f = p.start).row == n.row &&
                              Math.abs(f.column - n.column) < 2 &&
                              (f = p.end);
                          }
                          (f = (p && p.cursor) || f) &&
                            (t
                              ? p && e
                                ? this.selection.setRange(p)
                                : p && p.isEqual(this.getSelectionRange())
                                ? this.clearSelection()
                                : this.selection.selectTo(f.row, f.column)
                              : this.selection.moveTo(f.row, f.column));
                        }
                      }
                    }),
                    (this.gotoLine = function (t, e, n) {
                      this.selection.clearSelection(),
                        this.session.unfold({ row: t - 1, column: e || 0 }),
                        (this.$blockScrolling += 1),
                        this.exitMultiSelectMode && this.exitMultiSelectMode(),
                        this.moveCursorTo(t - 1, e || 0),
                        (this.$blockScrolling -= 1),
                        this.isRowFullyVisible(t - 1) ||
                          this.scrollToLine(t - 1, !0, n);
                    }),
                    (this.navigateTo = function (t, e) {
                      this.selection.moveTo(t, e);
                    }),
                    (this.navigateUp = function (t) {
                      if (
                        this.selection.isMultiLine() &&
                        !this.selection.isBackwards()
                      ) {
                        var e = this.selection.anchor.getPosition();
                        return this.moveCursorToPosition(e);
                      }
                      this.selection.clearSelection(),
                        this.selection.moveCursorBy(-t || -1, 0);
                    }),
                    (this.navigateDown = function (t) {
                      if (
                        this.selection.isMultiLine() &&
                        this.selection.isBackwards()
                      ) {
                        var e = this.selection.anchor.getPosition();
                        return this.moveCursorToPosition(e);
                      }
                      this.selection.clearSelection(),
                        this.selection.moveCursorBy(t || 1, 0);
                    }),
                    (this.navigateLeft = function (t) {
                      if (this.selection.isEmpty())
                        for (t = t || 1; t--; ) this.selection.moveCursorLeft();
                      else {
                        var e = this.getSelectionRange().start;
                        this.moveCursorToPosition(e);
                      }
                      this.clearSelection();
                    }),
                    (this.navigateRight = function (t) {
                      if (this.selection.isEmpty())
                        for (t = t || 1; t--; )
                          this.selection.moveCursorRight();
                      else {
                        var e = this.getSelectionRange().end;
                        this.moveCursorToPosition(e);
                      }
                      this.clearSelection();
                    }),
                    (this.navigateLineStart = function () {
                      this.selection.moveCursorLineStart(),
                        this.clearSelection();
                    }),
                    (this.navigateLineEnd = function () {
                      this.selection.moveCursorLineEnd(), this.clearSelection();
                    }),
                    (this.navigateFileEnd = function () {
                      this.selection.moveCursorFileEnd(), this.clearSelection();
                    }),
                    (this.navigateFileStart = function () {
                      this.selection.moveCursorFileStart(),
                        this.clearSelection();
                    }),
                    (this.navigateWordRight = function () {
                      this.selection.moveCursorWordRight(),
                        this.clearSelection();
                    }),
                    (this.navigateWordLeft = function () {
                      this.selection.moveCursorWordLeft(),
                        this.clearSelection();
                    }),
                    (this.replace = function (t, e) {
                      e && this.$search.set(e);
                      var n = this.$search.find(this.session),
                        i = 0;
                      return n
                        ? (this.$tryReplace(n, t) && (i = 1),
                          null !== n &&
                            (this.selection.setSelectionRange(n),
                            this.renderer.scrollSelectionIntoView(
                              n.start,
                              n.end
                            )),
                          i)
                        : i;
                    }),
                    (this.replaceAll = function (t, e) {
                      e && this.$search.set(e);
                      var n = this.$search.findAll(this.session),
                        i = 0;
                      if (!n.length) return i;
                      this.$blockScrolling += 1;
                      var r = this.getSelectionRange();
                      this.selection.moveTo(0, 0);
                      for (var o = n.length - 1; o >= 0; --o)
                        this.$tryReplace(n[o], t) && i++;
                      return (
                        this.selection.setSelectionRange(r),
                        (this.$blockScrolling -= 1),
                        i
                      );
                    }),
                    (this.$tryReplace = function (t, e) {
                      var n = this.session.getTextRange(t);
                      return null !== (e = this.$search.replace(n, e))
                        ? ((t.end = this.session.replace(t, e)), t)
                        : null;
                    }),
                    (this.getLastSearchOptions = function () {
                      return this.$search.getOptions();
                    }),
                    (this.find = function (t, e, n) {
                      e || (e = {}),
                        "string" == typeof t || t instanceof RegExp
                          ? (e.needle = t)
                          : "object" == typeof t && i.mixin(e, t);
                      var r = this.selection.getRange();
                      null == e.needle &&
                        ((t =
                          this.session.getTextRange(r) ||
                          this.$search.$options.needle) ||
                          ((r = this.session.getWordRange(
                            r.start.row,
                            r.start.column
                          )),
                          (t = this.session.getTextRange(r))),
                        this.$search.set({ needle: t })),
                        this.$search.set(e),
                        e.start || this.$search.set({ start: r });
                      var o = this.$search.find(this.session);
                      return e.preventScroll
                        ? o
                        : o
                        ? (this.revealRange(o, n), o)
                        : (e.backwards ? (r.start = r.end) : (r.end = r.start),
                          void this.selection.setRange(r));
                    }),
                    (this.findNext = function (t, e) {
                      this.find({ skipCurrent: !0, backwards: !1 }, t, e);
                    }),
                    (this.findPrevious = function (t, e) {
                      this.find(t, { skipCurrent: !0, backwards: !0 }, e);
                    }),
                    (this.revealRange = function (t, e) {
                      (this.$blockScrolling += 1),
                        this.session.unfold(t),
                        this.selection.setSelectionRange(t),
                        (this.$blockScrolling -= 1);
                      var n = this.renderer.scrollTop;
                      this.renderer.scrollSelectionIntoView(
                        t.start,
                        t.end,
                        0.5
                      ),
                        !1 !== e && this.renderer.animateScrolling(n);
                    }),
                    (this.undo = function () {
                      this.$blockScrolling++,
                        this.session.getUndoManager().undo(),
                        this.$blockScrolling--,
                        this.renderer.scrollCursorIntoView(null, 0.5);
                    }),
                    (this.redo = function () {
                      this.$blockScrolling++,
                        this.session.getUndoManager().redo(),
                        this.$blockScrolling--,
                        this.renderer.scrollCursorIntoView(null, 0.5);
                    }),
                    (this.destroy = function () {
                      this.renderer.destroy(),
                        this._signal("destroy", this),
                        this.session && this.session.destroy();
                    }),
                    (this.setAutoScrollEditorIntoView = function (t) {
                      if (t) {
                        var e,
                          n = this,
                          i = !1;
                        this.$scrollAnchor ||
                          (this.$scrollAnchor = document.createElement("div"));
                        var r = this.$scrollAnchor;
                        (r.style.cssText = "position:absolute"),
                          this.container.insertBefore(
                            r,
                            this.container.firstChild
                          );
                        var o = this.on("changeSelection", function () {
                            i = !0;
                          }),
                          a = this.renderer.on("beforeRender", function () {
                            i &&
                              (e =
                                n.renderer.container.getBoundingClientRect());
                          }),
                          s = this.renderer.on("afterRender", function () {
                            if (
                              i &&
                              e &&
                              (n.isFocused() ||
                                (n.searchBox && n.searchBox.isFocused()))
                            ) {
                              var t = n.renderer,
                                o = t.$cursorLayer.$pixelPos,
                                a = t.layerConfig,
                                s = o.top - a.offset;
                              null !=
                                (i =
                                  (o.top >= 0 && s + e.top < 0) ||
                                  (!(
                                    o.top < a.height &&
                                    o.top + e.top + a.lineHeight >
                                      window.innerHeight
                                  ) &&
                                    null)) &&
                                ((r.style.top = s + "px"),
                                (r.style.left = o.left + "px"),
                                (r.style.height = a.lineHeight + "px"),
                                r.scrollIntoView(i)),
                                (i = e = null);
                            }
                          });
                        this.setAutoScrollEditorIntoView = function (t) {
                          t ||
                            (delete this.setAutoScrollEditorIntoView,
                            this.off("changeSelection", o),
                            this.renderer.off("afterRender", s),
                            this.renderer.off("beforeRender", a));
                        };
                      }
                    }),
                    (this.$resetCursorStyle = function () {
                      var t = this.$cursorStyle || "ace",
                        e = this.renderer.$cursorLayer;
                      e &&
                        (e.setSmoothBlinking(/smooth/.test(t)),
                        (e.isBlinking = !this.$readOnly && "wide" != t),
                        r.setCssClass(
                          e.element,
                          "ace_slim-cursors",
                          /slim/.test(t)
                        ));
                    });
                }).call(_.prototype),
                  g.defineOptions(_.prototype, "editor", {
                    selectionStyle: {
                      set: function (t) {
                        this.onSelectionChange(),
                          this._signal("changeSelectionStyle", { data: t });
                      },
                      initialValue: "line",
                    },
                    highlightActiveLine: {
                      set: function () {
                        this.$updateHighlightActiveLine();
                      },
                      initialValue: !0,
                    },
                    highlightSelectedWord: {
                      set: function (t) {
                        this.$onSelectionChange();
                      },
                      initialValue: !0,
                    },
                    readOnly: {
                      set: function (t) {
                        this.$resetCursorStyle();
                      },
                      initialValue: !1,
                    },
                    cursorStyle: {
                      set: function (t) {
                        this.$resetCursorStyle();
                      },
                      values: ["ace", "slim", "smooth", "wide"],
                      initialValue: "ace",
                    },
                    mergeUndoDeltas: {
                      values: [!1, !0, "always"],
                      initialValue: !0,
                    },
                    behavioursEnabled: { initialValue: !0 },
                    wrapBehavioursEnabled: { initialValue: !0 },
                    autoScrollEditorIntoView: {
                      set: function (t) {
                        this.setAutoScrollEditorIntoView(t);
                      },
                    },
                    keyboardHandler: {
                      set: function (t) {
                        this.setKeyboardHandler(t);
                      },
                      get: function () {
                        return this.keybindingId;
                      },
                      handlesSet: !0,
                    },
                    hScrollBarAlwaysVisible: "renderer",
                    vScrollBarAlwaysVisible: "renderer",
                    highlightGutterLine: "renderer",
                    animatedScroll: "renderer",
                    showInvisibles: "renderer",
                    showPrintMargin: "renderer",
                    printMarginColumn: "renderer",
                    printMargin: "renderer",
                    fadeFoldWidgets: "renderer",
                    showFoldWidgets: "renderer",
                    showLineNumbers: "renderer",
                    showGutter: "renderer",
                    displayIndentGuides: "renderer",
                    fontSize: "renderer",
                    fontFamily: "renderer",
                    maxLines: "renderer",
                    minLines: "renderer",
                    scrollPastEnd: "renderer",
                    fixedWidthGutter: "renderer",
                    theme: "renderer",
                    scrollSpeed: "$mouseHandler",
                    dragDelay: "$mouseHandler",
                    dragEnabled: "$mouseHandler",
                    focusTimout: "$mouseHandler",
                    tooltipFollowsMouse: "$mouseHandler",
                    firstLineNumber: "session",
                    overwrite: "session",
                    newLineMode: "session",
                    useWorker: "session",
                    useSoftTabs: "session",
                    tabSize: "session",
                    wrap: "session",
                    indentedSoftWrap: "session",
                    foldStyle: "session",
                    mode: "session",
                  }),
                  (e.Editor = _);
              }
            ),
            ace.define(
              "ace/undomanager",
              ["require", "exports", "module"],
              function (t, e, n) {
                "use strict";
                var i = function () {
                  this.reset();
                };
                (function () {
                  function t(t) {
                    return {
                      action: t.action,
                      start: t.start,
                      end: t.end,
                      lines: 1 == t.lines.length ? null : t.lines,
                      text: 1 == t.lines.length ? t.lines[0] : null,
                    };
                  }
                  function e(t) {
                    return {
                      action: t.action,
                      start: t.start,
                      end: t.end,
                      lines: t.lines || [t.text],
                    };
                  }
                  function n(t, e) {
                    for (
                      var n = new Array(t.length), i = 0;
                      i < t.length;
                      i++
                    ) {
                      for (
                        var r = t[i],
                          o = { group: r.group, deltas: new Array(r.length) },
                          a = 0;
                        a < r.deltas.length;
                        a++
                      ) {
                        var s = r.deltas[a];
                        o.deltas[a] = e(s);
                      }
                      n[i] = o;
                    }
                    return n;
                  }
                  (this.execute = function (t) {
                    var e = t.args[0];
                    (this.$doc = t.args[1]),
                      t.merge &&
                        this.hasUndo() &&
                        (this.dirtyCounter--,
                        (e = this.$undoStack.pop().concat(e))),
                      this.$undoStack.push(e),
                      (this.$redoStack = []),
                      this.dirtyCounter < 0 && (this.dirtyCounter = NaN),
                      this.dirtyCounter++;
                  }),
                    (this.undo = function (t) {
                      var e = this.$undoStack.pop(),
                        n = null;
                      return (
                        e &&
                          ((n = this.$doc.undoChanges(e, t)),
                          this.$redoStack.push(e),
                          this.dirtyCounter--),
                        n
                      );
                    }),
                    (this.redo = function (t) {
                      var e = this.$redoStack.pop(),
                        n = null;
                      return (
                        e &&
                          ((n = this.$doc.redoChanges(
                            this.$deserializeDeltas(e),
                            t
                          )),
                          this.$undoStack.push(e),
                          this.dirtyCounter++),
                        n
                      );
                    }),
                    (this.reset = function () {
                      (this.$undoStack = []),
                        (this.$redoStack = []),
                        (this.dirtyCounter = 0);
                    }),
                    (this.hasUndo = function () {
                      return this.$undoStack.length > 0;
                    }),
                    (this.hasRedo = function () {
                      return this.$redoStack.length > 0;
                    }),
                    (this.markClean = function () {
                      this.dirtyCounter = 0;
                    }),
                    (this.isClean = function () {
                      return 0 === this.dirtyCounter;
                    }),
                    (this.$serializeDeltas = function (e) {
                      return n(e, t);
                    }),
                    (this.$deserializeDeltas = function (t) {
                      return n(t, e);
                    });
                }).call(i.prototype),
                  (e.UndoManager = i);
              }
            ),
            ace.define(
              "ace/layer/gutter",
              [
                "require",
                "exports",
                "module",
                "ace/lib/dom",
                "ace/lib/oop",
                "ace/lib/lang",
                "ace/lib/event_emitter",
              ],
              function (t, e, n) {
                "use strict";
                var i = t("../lib/dom"),
                  r = t("../lib/oop"),
                  o = t("../lib/lang"),
                  a = t("../lib/event_emitter").EventEmitter,
                  s = function (t) {
                    (this.element = i.createElement("div")),
                      (this.element.className = "ace_layer ace_gutter-layer"),
                      t.appendChild(this.element),
                      this.setShowFoldWidgets(this.$showFoldWidgets),
                      (this.gutterWidth = 0),
                      (this.$annotations = []),
                      (this.$updateAnnotations =
                        this.$updateAnnotations.bind(this)),
                      (this.$cells = []);
                  };
                (function () {
                  r.implement(this, a),
                    (this.setSession = function (t) {
                      this.session &&
                        this.session.removeEventListener(
                          "change",
                          this.$updateAnnotations
                        ),
                        (this.session = t),
                        t && t.on("change", this.$updateAnnotations);
                    }),
                    (this.addGutterDecoration = function (t, e) {
                      window.console && console.warn,
                        this.session.addGutterDecoration(t, e);
                    }),
                    (this.removeGutterDecoration = function (t, e) {
                      window.console && console.warn,
                        this.session.removeGutterDecoration(t, e);
                    }),
                    (this.setAnnotations = function (t) {
                      this.$annotations = [];
                      for (var e = 0; e < t.length; e++) {
                        var n = t[e],
                          i = n.row,
                          r = this.$annotations[i];
                        r || (r = this.$annotations[i] = { text: [] });
                        var a = n.text;
                        (a = a ? o.escapeHTML(a) : n.html || ""),
                          -1 === r.text.indexOf(a) && r.text.push(a);
                        var s = n.type;
                        "error" == s
                          ? (r.className = " ace_error")
                          : "warning" == s && " ace_error" != r.className
                          ? (r.className = " ace_warning")
                          : "info" != s ||
                            r.className ||
                            (r.className = " ace_info");
                      }
                    }),
                    (this.$updateAnnotations = function (t) {
                      if (this.$annotations.length) {
                        var e = t.start.row,
                          n = t.end.row - e;
                        if (0 === n);
                        else if ("remove" == t.action)
                          this.$annotations.splice(e, n + 1, null);
                        else {
                          var i = new Array(n + 1);
                          i.unshift(e, 1),
                            this.$annotations.splice.apply(
                              this.$annotations,
                              i
                            );
                        }
                      }
                    }),
                    (this.update = function (t) {
                      for (
                        var e = this.session,
                          n = t.firstRow,
                          r = Math.min(
                            t.lastRow + t.gutterOffset,
                            e.getLength() - 1
                          ),
                          o = e.getNextFoldLine(n),
                          a = o ? o.start.row : 1 / 0,
                          s = this.$showFoldWidgets && e.foldWidgets,
                          l = e.$breakpoints,
                          c = e.$decorations,
                          d = e.$firstLineNumber,
                          u = 0,
                          p = e.gutterRenderer || this.$renderer,
                          h = null,
                          f = -1,
                          b = n;
                        ;

                      ) {
                        if (
                          (b > a &&
                            ((b = o.end.row + 1),
                            (a = (o = e.getNextFoldLine(b, o))
                              ? o.start.row
                              : 1 / 0)),
                          b > r)
                        ) {
                          for (; this.$cells.length > f + 1; )
                            (h = this.$cells.pop()),
                              this.element.removeChild(h.element);
                          break;
                        }
                        (h = this.$cells[++f]) ||
                          (((h = {
                            element: null,
                            textNode: null,
                            foldWidget: null,
                          }).element = i.createElement("div")),
                          (h.textNode = document.createTextNode("")),
                          h.element.appendChild(h.textNode),
                          this.element.appendChild(h.element),
                          (this.$cells[f] = h));
                        var m = "ace_gutter-cell ";
                        if (
                          (l[b] && (m += l[b]),
                          c[b] && (m += c[b]),
                          this.$annotations[b] &&
                            (m += this.$annotations[b].className),
                          h.element.className != m && (h.element.className = m),
                          (v = e.getRowLength(b) * t.lineHeight + "px") !=
                            h.element.style.height &&
                            (h.element.style.height = v),
                          s)
                        ) {
                          var g = s[b];
                          null == g && (g = s[b] = e.getFoldWidget(b));
                        }
                        if (g) {
                          h.foldWidget ||
                            ((h.foldWidget = i.createElement("span")),
                            h.element.appendChild(h.foldWidget)),
                            (m = "ace_fold-widget ace_" + g),
                            "start" == g && b == a && b < o.end.row
                              ? (m += " ace_closed")
                              : (m += " ace_open"),
                            h.foldWidget.className != m &&
                              (h.foldWidget.className = m);
                          var v = t.lineHeight + "px";
                          h.foldWidget.style.height != v &&
                            (h.foldWidget.style.height = v);
                        } else
                          h.foldWidget &&
                            (h.element.removeChild(h.foldWidget),
                            (h.foldWidget = null));
                        var _ = (u = p ? p.getText(e, b) : b + d);
                        _ != h.textNode.data && (h.textNode.data = _), b++;
                      }
                      (this.element.style.height = t.minHeight + "px"),
                        (this.$fixedWidth || e.$useWrapMode) &&
                          (u = e.getLength() + d);
                      var y = p
                          ? p.getWidth(e, u, t)
                          : u.toString().length * t.characterWidth,
                        M = this.$padding || this.$computePadding();
                      (y += M.left + M.right) === this.gutterWidth ||
                        isNaN(y) ||
                        ((this.gutterWidth = y),
                        (this.element.style.width =
                          Math.ceil(this.gutterWidth) + "px"),
                        this._emit("changeGutterWidth", y));
                    }),
                    (this.$fixedWidth = !1),
                    (this.$showLineNumbers = !0),
                    (this.$renderer = ""),
                    (this.setShowLineNumbers = function (t) {
                      this.$renderer = !t && {
                        getWidth: function () {
                          return "";
                        },
                        getText: function () {
                          return "";
                        },
                      };
                    }),
                    (this.getShowLineNumbers = function () {
                      return this.$showLineNumbers;
                    }),
                    (this.$showFoldWidgets = !0),
                    (this.setShowFoldWidgets = function (t) {
                      t
                        ? i.addCssClass(this.element, "ace_folding-enabled")
                        : i.removeCssClass(this.element, "ace_folding-enabled"),
                        (this.$showFoldWidgets = t),
                        (this.$padding = null);
                    }),
                    (this.getShowFoldWidgets = function () {
                      return this.$showFoldWidgets;
                    }),
                    (this.$computePadding = function () {
                      if (!this.element.firstChild)
                        return { left: 0, right: 0 };
                      var t = i.computedStyle(this.element.firstChild);
                      return (
                        (this.$padding = {}),
                        (this.$padding.left = parseInt(t.paddingLeft) + 1 || 0),
                        (this.$padding.right = parseInt(t.paddingRight) || 0),
                        this.$padding
                      );
                    }),
                    (this.getRegion = function (t) {
                      var e = this.$padding || this.$computePadding(),
                        n = this.element.getBoundingClientRect();
                      return t.x < e.left + n.left
                        ? "markers"
                        : this.$showFoldWidgets && t.x > n.right - e.right
                        ? "foldWidgets"
                        : void 0;
                    });
                }).call(s.prototype),
                  (e.Gutter = s);
              }
            ),
            ace.define(
              "ace/layer/marker",
              ["require", "exports", "module", "ace/range", "ace/lib/dom"],
              function (t, e, n) {
                "use strict";
                var i = t("../range").Range,
                  r = t("../lib/dom"),
                  o = function (t) {
                    (this.element = r.createElement("div")),
                      (this.element.className = "ace_layer ace_marker-layer"),
                      t.appendChild(this.element);
                  };
                (function () {
                  (this.$padding = 0),
                    (this.setPadding = function (t) {
                      this.$padding = t;
                    }),
                    (this.setSession = function (t) {
                      this.session = t;
                    }),
                    (this.setMarkers = function (t) {
                      this.markers = t;
                    }),
                    (this.update = function (t) {
                      if ((t = t || this.config)) {
                        this.config = t;
                        var e = [];
                        for (var n in this.markers) {
                          var i = this.markers[n];
                          if (i.range) {
                            var r = i.range.clipRows(t.firstRow, t.lastRow);
                            if (!r.isEmpty())
                              if (
                                ((r = r.toScreenRange(this.session)),
                                i.renderer)
                              ) {
                                var o = this.$getTop(r.start.row, t),
                                  a =
                                    this.$padding +
                                    r.start.column * t.characterWidth;
                                i.renderer(e, r, a, o, t);
                              } else
                                "fullLine" == i.type
                                  ? this.drawFullLineMarker(e, r, i.clazz, t)
                                  : "screenLine" == i.type
                                  ? this.drawScreenLineMarker(e, r, i.clazz, t)
                                  : r.isMultiLine()
                                  ? "text" == i.type
                                    ? this.drawTextMarker(e, r, i.clazz, t)
                                    : this.drawMultiLineMarker(e, r, i.clazz, t)
                                  : this.drawSingleLineMarker(
                                      e,
                                      r,
                                      i.clazz + " ace_start ace_br15",
                                      t
                                    );
                          } else i.update(e, this, this.session, t);
                        }
                        this.element.innerHTML = e.join("");
                      }
                    }),
                    (this.$getTop = function (t, e) {
                      return (t - e.firstRowScreen) * e.lineHeight;
                    }),
                    (this.drawTextMarker = function (t, e, n, r, o) {
                      for (
                        var a = this.session,
                          s = e.start.row,
                          l = e.end.row,
                          c = s,
                          d = 0,
                          u = 0,
                          p = a.getScreenLastRowColumn(c),
                          h = new i(c, e.start.column, c, u);
                        c <= l;
                        c++
                      )
                        (h.start.row = h.end.row = c),
                          (h.start.column =
                            c == s ? e.start.column : a.getRowWrapIndent(c)),
                          (h.end.column = p),
                          (d = u),
                          (u = p),
                          (p =
                            c + 1 < l
                              ? a.getScreenLastRowColumn(c + 1)
                              : c == l
                              ? 0
                              : e.end.column),
                          this.drawSingleLineMarker(
                            t,
                            h,
                            n +
                              (c == s ? " ace_start" : "") +
                              " ace_br" +
                              ((c == s || (c == s + 1 && e.start.column)
                                ? 1
                                : 0) |
                                (d < u ? 2 : 0) |
                                (u > p ? 4 : 0) |
                                (c == l ? 8 : 0)),
                            r,
                            c == l ? 0 : 1,
                            o
                          );
                    }),
                    (this.drawMultiLineMarker = function (t, e, n, i, r) {
                      var o = this.$padding,
                        a = i.lineHeight,
                        s = this.$getTop(e.start.row, i),
                        l = o + e.start.column * i.characterWidth;
                      (r = r || ""),
                        t.push(
                          "<div class='",
                          n,
                          " ace_br1 ace_start' style='",
                          "height:",
                          a,
                          "px;",
                          "right:0;",
                          "top:",
                          s,
                          "px;",
                          "left:",
                          l,
                          "px;",
                          r,
                          "'></div>"
                        ),
                        (s = this.$getTop(e.end.row, i));
                      var c = e.end.column * i.characterWidth;
                      if (
                        (t.push(
                          "<div class='",
                          n,
                          " ace_br12' style='",
                          "height:",
                          a,
                          "px;",
                          "width:",
                          c,
                          "px;",
                          "top:",
                          s,
                          "px;",
                          "left:",
                          o,
                          "px;",
                          r,
                          "'></div>"
                        ),
                        !(
                          (a = (e.end.row - e.start.row - 1) * i.lineHeight) <=
                          0
                        ))
                      ) {
                        s = this.$getTop(e.start.row + 1, i);
                        var d =
                          (e.start.column ? 1 : 0) | (e.end.column ? 0 : 8);
                        t.push(
                          "<div class='",
                          n,
                          d ? " ace_br" + d : "",
                          "' style='",
                          "height:",
                          a,
                          "px;",
                          "right:0;",
                          "top:",
                          s,
                          "px;",
                          "left:",
                          o,
                          "px;",
                          r,
                          "'></div>"
                        );
                      }
                    }),
                    (this.drawSingleLineMarker = function (t, e, n, i, r, o) {
                      var a = i.lineHeight,
                        s =
                          (e.end.column + (r || 0) - e.start.column) *
                          i.characterWidth,
                        l = this.$getTop(e.start.row, i),
                        c = this.$padding + e.start.column * i.characterWidth;
                      t.push(
                        "<div class='",
                        n,
                        "' style='",
                        "height:",
                        a,
                        "px;",
                        "width:",
                        s,
                        "px;",
                        "top:",
                        l,
                        "px;",
                        "left:",
                        c,
                        "px;",
                        o || "",
                        "'></div>"
                      );
                    }),
                    (this.drawFullLineMarker = function (t, e, n, i, r) {
                      var o = this.$getTop(e.start.row, i),
                        a = i.lineHeight;
                      e.start.row != e.end.row &&
                        (a += this.$getTop(e.end.row, i) - o),
                        t.push(
                          "<div class='",
                          n,
                          "' style='",
                          "height:",
                          a,
                          "px;",
                          "top:",
                          o,
                          "px;",
                          "left:0;right:0;",
                          r || "",
                          "'></div>"
                        );
                    }),
                    (this.drawScreenLineMarker = function (t, e, n, i, r) {
                      var o = this.$getTop(e.start.row, i),
                        a = i.lineHeight;
                      t.push(
                        "<div class='",
                        n,
                        "' style='",
                        "height:",
                        a,
                        "px;",
                        "top:",
                        o,
                        "px;",
                        "left:0;right:0;",
                        r || "",
                        "'></div>"
                      );
                    });
                }).call(o.prototype),
                  (e.Marker = o);
              }
            ),
            ace.define(
              "ace/layer/text",
              [
                "require",
                "exports",
                "module",
                "ace/lib/oop",
                "ace/lib/dom",
                "ace/lib/lang",
                "ace/lib/useragent",
                "ace/lib/event_emitter",
              ],
              function (t, e, n) {
                "use strict";
                var i = t("../lib/oop"),
                  r = t("../lib/dom"),
                  o = t("../lib/lang"),
                  a =
                    (t("../lib/useragent"),
                    t("../lib/event_emitter").EventEmitter),
                  s = function (t) {
                    (this.element = r.createElement("div")),
                      (this.element.className = "ace_layer ace_text-layer"),
                      t.appendChild(this.element),
                      (this.$updateEolChar = this.$updateEolChar.bind(this));
                  };
                (function () {
                  i.implement(this, a),
                    (this.EOF_CHAR = "¶"),
                    (this.EOL_CHAR_LF = "¬"),
                    (this.EOL_CHAR_CRLF = "¤"),
                    (this.EOL_CHAR = this.EOL_CHAR_LF),
                    (this.TAB_CHAR = "—"),
                    (this.SPACE_CHAR = "·"),
                    (this.$padding = 0),
                    (this.$updateEolChar = function () {
                      var t =
                        "\n" == this.session.doc.getNewLineCharacter()
                          ? this.EOL_CHAR_LF
                          : this.EOL_CHAR_CRLF;
                      if (this.EOL_CHAR != t) return (this.EOL_CHAR = t), !0;
                    }),
                    (this.setPadding = function (t) {
                      (this.$padding = t),
                        (this.element.style.padding = "0 " + t + "px");
                    }),
                    (this.getLineHeight = function () {
                      return this.$fontMetrics.$characterSize.height || 0;
                    }),
                    (this.getCharacterWidth = function () {
                      return this.$fontMetrics.$characterSize.width || 0;
                    }),
                    (this.$setFontMetrics = function (t) {
                      (this.$fontMetrics = t),
                        this.$fontMetrics.on(
                          "changeCharacterSize",
                          function (t) {
                            this._signal("changeCharacterSize", t);
                          }.bind(this)
                        ),
                        this.$pollSizeChanges();
                    }),
                    (this.checkForSizeChanges = function () {
                      this.$fontMetrics.checkForSizeChanges();
                    }),
                    (this.$pollSizeChanges = function () {
                      return (this.$pollSizeChangesTimer =
                        this.$fontMetrics.$pollSizeChanges());
                    }),
                    (this.setSession = function (t) {
                      (this.session = t), t && this.$computeTabString();
                    }),
                    (this.showInvisibles = !1),
                    (this.setShowInvisibles = function (t) {
                      return (
                        this.showInvisibles != t &&
                        ((this.showInvisibles = t),
                        this.$computeTabString(),
                        !0)
                      );
                    }),
                    (this.displayIndentGuides = !0),
                    (this.setDisplayIndentGuides = function (t) {
                      return (
                        this.displayIndentGuides != t &&
                        ((this.displayIndentGuides = t),
                        this.$computeTabString(),
                        !0)
                      );
                    }),
                    (this.$tabStrings = []),
                    (this.onChangeTabSize = this.$computeTabString =
                      function () {
                        var t = this.session.getTabSize();
                        this.tabSize = t;
                        for (
                          var e = (this.$tabStrings = [0]), n = 1;
                          n < t + 1;
                          n++
                        )
                          this.showInvisibles
                            ? e.push(
                                "<span class='ace_invisible ace_invisible_tab'>" +
                                  o.stringRepeat(this.TAB_CHAR, n) +
                                  "</span>"
                              )
                            : e.push(o.stringRepeat(" ", n));
                        if (this.displayIndentGuides) {
                          this.$indentGuideRe = /\s\S| \t|\t |\s$/;
                          var i = "ace_indent-guide",
                            r = "",
                            a = "";
                          if (this.showInvisibles) {
                            (i += " ace_invisible"),
                              (r = " ace_invisible_space"),
                              (a = " ace_invisible_tab");
                            var s = o.stringRepeat(
                                this.SPACE_CHAR,
                                this.tabSize
                              ),
                              l = o.stringRepeat(this.TAB_CHAR, this.tabSize);
                          } else l = s = o.stringRepeat(" ", this.tabSize);
                          (this.$tabStrings[" "] =
                            "<span class='" + i + r + "'>" + s + "</span>"),
                            (this.$tabStrings["\t"] =
                              "<span class='" + i + a + "'>" + l + "</span>");
                        }
                      }),
                    (this.updateLines = function (t, e, n) {
                      (this.config.lastRow == t.lastRow &&
                        this.config.firstRow == t.firstRow) ||
                        this.scrollLines(t),
                        (this.config = t);
                      for (
                        var i = Math.max(e, t.firstRow),
                          r = Math.min(n, t.lastRow),
                          o = this.element.childNodes,
                          a = 0,
                          s = t.firstRow;
                        s < i;
                        s++
                      ) {
                        if ((l = this.session.getFoldLine(s))) {
                          if (l.containsRow(i)) {
                            i = l.start.row;
                            break;
                          }
                          s = l.end.row;
                        }
                        a++;
                      }
                      s = i;
                      for (
                        var l,
                          c = (l = this.session.getNextFoldLine(s))
                            ? l.start.row
                            : 1 / 0;
                        s > c &&
                          ((s = l.end.row + 1),
                          (c = (l = this.session.getNextFoldLine(s, l))
                            ? l.start.row
                            : 1 / 0)),
                          !(s > r);

                      ) {
                        var d = o[a++];
                        if (d) {
                          var u = [];
                          this.$renderLine(
                            u,
                            s,
                            !this.$useLineGroups(),
                            s == c && l
                          ),
                            (d.style.height =
                              t.lineHeight * this.session.getRowLength(s) +
                              "px"),
                            (d.innerHTML = u.join(""));
                        }
                        s++;
                      }
                    }),
                    (this.scrollLines = function (t) {
                      var e = this.config;
                      if (((this.config = t), !e || e.lastRow < t.firstRow))
                        return this.update(t);
                      if (t.lastRow < e.firstRow) return this.update(t);
                      var n = this.element;
                      if (e.firstRow < t.firstRow)
                        for (
                          var i = this.session.getFoldedRowCount(
                            e.firstRow,
                            t.firstRow - 1
                          );
                          i > 0;
                          i--
                        )
                          n.removeChild(n.firstChild);
                      if (e.lastRow > t.lastRow)
                        for (
                          i = this.session.getFoldedRowCount(
                            t.lastRow + 1,
                            e.lastRow
                          );
                          i > 0;
                          i--
                        )
                          n.removeChild(n.lastChild);
                      if (t.firstRow < e.firstRow) {
                        var r = this.$renderLinesFragment(
                          t,
                          t.firstRow,
                          e.firstRow - 1
                        );
                        n.firstChild
                          ? n.insertBefore(r, n.firstChild)
                          : n.appendChild(r);
                      }
                      t.lastRow > e.lastRow &&
                        ((r = this.$renderLinesFragment(
                          t,
                          e.lastRow + 1,
                          t.lastRow
                        )),
                        n.appendChild(r));
                    }),
                    (this.$renderLinesFragment = function (t, e, n) {
                      for (
                        var i =
                            this.element.ownerDocument.createDocumentFragment(),
                          o = e,
                          a = this.session.getNextFoldLine(o),
                          s = a ? a.start.row : 1 / 0;
                        o > s &&
                          ((o = a.end.row + 1),
                          (s = (a = this.session.getNextFoldLine(o, a))
                            ? a.start.row
                            : 1 / 0)),
                          !(o > n);

                      ) {
                        var l = r.createElement("div"),
                          c = [];
                        if (
                          (this.$renderLine(c, o, !1, o == s && a),
                          (l.innerHTML = c.join("")),
                          this.$useLineGroups())
                        )
                          (l.className = "ace_line_group"),
                            i.appendChild(l),
                            (l.style.height =
                              t.lineHeight * this.session.getRowLength(o) +
                              "px");
                        else for (; l.firstChild; ) i.appendChild(l.firstChild);
                        o++;
                      }
                      return i;
                    }),
                    (this.update = function (t) {
                      this.config = t;
                      for (
                        var e = [],
                          n = t.firstRow,
                          i = t.lastRow,
                          r = n,
                          o = this.session.getNextFoldLine(r),
                          a = o ? o.start.row : 1 / 0;
                        r > a &&
                          ((r = o.end.row + 1),
                          (a = (o = this.session.getNextFoldLine(r, o))
                            ? o.start.row
                            : 1 / 0)),
                          !(r > i);

                      )
                        this.$useLineGroups() &&
                          e.push(
                            "<div class='ace_line_group' style='height:",
                            t.lineHeight * this.session.getRowLength(r),
                            "px'>"
                          ),
                          this.$renderLine(e, r, !1, r == a && o),
                          this.$useLineGroups() && e.push("</div>"),
                          r++;
                      this.element.innerHTML = e.join("");
                    }),
                    (this.$textToken = { text: !0, rparen: !0, lparen: !0 }),
                    (this.$renderToken = function (t, e, n, i) {
                      var r = this,
                        a = i.replace(
                          /\t|&|<|>|( +)|([\x00-\x1f\x80-\xa0\xad\u1680\u180E\u2000-\u200f\u2028\u2029\u202F\u205F\u3000\uFEFF\uFFF9-\uFFFC])|[\u1100-\u115F\u11A3-\u11A7\u11FA-\u11FF\u2329-\u232A\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFB\u3000-\u303E\u3041-\u3096\u3099-\u30FF\u3105-\u312D\u3131-\u318E\u3190-\u31BA\u31C0-\u31E3\u31F0-\u321E\u3220-\u3247\u3250-\u32FE\u3300-\u4DBF\u4E00-\uA48C\uA490-\uA4C6\uA960-\uA97C\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFAFF\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE66\uFE68-\uFE6B\uFF01-\uFF60\uFFE0-\uFFE6]/g,
                          function (t, n, i, a, s) {
                            if (n)
                              return r.showInvisibles
                                ? "<span class='ace_invisible ace_invisible_space'>" +
                                    o.stringRepeat(r.SPACE_CHAR, t.length) +
                                    "</span>"
                                : t;
                            if ("&" == t) return "&#38;";
                            if ("<" == t) return "&#60;";
                            if (">" == t) return "&#62;";
                            if ("\t" == t) {
                              var l = r.session.getScreenTabSize(e + a);
                              return (e += l - 1), r.$tabStrings[l];
                            }
                            if ("　" == t) {
                              var c = r.showInvisibles
                                  ? "ace_cjk ace_invisible ace_invisible_space"
                                  : "ace_cjk",
                                d = r.showInvisibles ? r.SPACE_CHAR : "";
                              return (
                                (e += 1),
                                "<span class='" +
                                  c +
                                  "' style='width:" +
                                  2 * r.config.characterWidth +
                                  "px'>" +
                                  d +
                                  "</span>"
                              );
                            }
                            return i
                              ? "<span class='ace_invisible ace_invisible_space ace_invalid'>" +
                                  r.SPACE_CHAR +
                                  "</span>"
                              : ((e += 1),
                                "<span class='ace_cjk' style='width:" +
                                  2 * r.config.characterWidth +
                                  "px'>" +
                                  t +
                                  "</span>");
                          }
                        );
                      if (this.$textToken[n.type]) t.push(a);
                      else {
                        var s = "ace_" + n.type.replace(/\./g, " ace_"),
                          l = "";
                        "fold" == n.type &&
                          (l =
                            " style='width:" +
                            n.value.length * this.config.characterWidth +
                            "px;' "),
                          t.push("<span class='", s, "'", l, ">", a, "</span>");
                      }
                      return e + i.length;
                    }),
                    (this.renderIndentGuide = function (t, e, n) {
                      var i = e.search(this.$indentGuideRe);
                      return i <= 0 || i >= n
                        ? e
                        : " " == e[0]
                        ? ((i -= i % this.tabSize),
                          t.push(
                            o.stringRepeat(
                              this.$tabStrings[" "],
                              i / this.tabSize
                            )
                          ),
                          e.substr(i))
                        : "\t" == e[0]
                        ? (t.push(o.stringRepeat(this.$tabStrings["\t"], i)),
                          e.substr(i))
                        : e;
                    }),
                    (this.$renderWrappedLine = function (t, e, n, i) {
                      for (
                        var r = 0, a = 0, s = n[0], l = 0, c = 0;
                        c < e.length;
                        c++
                      ) {
                        var d = e[c],
                          u = d.value;
                        if (0 == c && this.displayIndentGuides) {
                          if (
                            ((r = u.length),
                            !(u = this.renderIndentGuide(t, u, s)))
                          )
                            continue;
                          r -= u.length;
                        }
                        if (r + u.length < s)
                          (l = this.$renderToken(t, l, d, u)), (r += u.length);
                        else {
                          for (; r + u.length >= s; )
                            (l = this.$renderToken(
                              t,
                              l,
                              d,
                              u.substring(0, s - r)
                            )),
                              (u = u.substring(s - r)),
                              (r = s),
                              i ||
                                t.push(
                                  "</div>",
                                  "<div class='ace_line' style='height:",
                                  this.config.lineHeight,
                                  "px'>"
                                ),
                              t.push(o.stringRepeat(" ", n.indent)),
                              (l = 0),
                              (s = n[++a] || Number.MAX_VALUE);
                          0 != u.length &&
                            ((r += u.length),
                            (l = this.$renderToken(t, l, d, u)));
                        }
                      }
                    }),
                    (this.$renderSimpleLine = function (t, e) {
                      var n = 0,
                        i = e[0],
                        r = i.value;
                      this.displayIndentGuides &&
                        (r = this.renderIndentGuide(t, r)),
                        r && (n = this.$renderToken(t, n, i, r));
                      for (var o = 1; o < e.length; o++)
                        (r = (i = e[o]).value),
                          (n = this.$renderToken(t, n, i, r));
                    }),
                    (this.$renderLine = function (t, e, n, i) {
                      if ((i || 0 == i || (i = this.session.getFoldLine(e)), i))
                        var r = this.$getFoldLineTokens(e, i);
                      else r = this.session.getTokens(e);
                      if (
                        (n ||
                          t.push(
                            "<div class='ace_line' style='height:",
                            this.config.lineHeight *
                              (this.$useLineGroups()
                                ? 1
                                : this.session.getRowLength(e)),
                            "px'>"
                          ),
                        r.length)
                      ) {
                        var o = this.session.getRowSplitData(e);
                        o && o.length
                          ? this.$renderWrappedLine(t, r, o, n)
                          : this.$renderSimpleLine(t, r);
                      }
                      this.showInvisibles &&
                        (i && (e = i.end.row),
                        t.push(
                          "<span class='ace_invisible ace_invisible_eol'>",
                          e == this.session.getLength() - 1
                            ? this.EOF_CHAR
                            : this.EOL_CHAR,
                          "</span>"
                        )),
                        n || t.push("</div>");
                    }),
                    (this.$getFoldLineTokens = function (t, e) {
                      var n = this.session,
                        i = [],
                        r = n.getTokens(t);
                      return (
                        e.walk(
                          function (t, e, o, a, s) {
                            null != t
                              ? i.push({ type: "fold", value: t })
                              : (s && (r = n.getTokens(e)),
                                r.length &&
                                  (function (t, e, n) {
                                    for (
                                      var r = 0, o = 0;
                                      o + t[r].value.length < e;

                                    )
                                      if (
                                        ((o += t[r].value.length),
                                        ++r == t.length)
                                      )
                                        return;
                                    for (
                                      o != e &&
                                      ((a = t[r].value.substring(e - o))
                                        .length >
                                        n - e && (a = a.substring(0, n - e)),
                                      i.push({ type: t[r].type, value: a }),
                                      (o = e + a.length),
                                      (r += 1));
                                      o < n && r < t.length;

                                    ) {
                                      var a;
                                      (a = t[r].value).length + o > n
                                        ? i.push({
                                            type: t[r].type,
                                            value: a.substring(0, n - o),
                                          })
                                        : i.push(t[r]),
                                        (o += a.length),
                                        (r += 1);
                                    }
                                  })(r, a, o));
                          },
                          e.end.row,
                          this.session.getLine(e.end.row).length
                        ),
                        i
                      );
                    }),
                    (this.$useLineGroups = function () {
                      return this.session.getUseWrapMode();
                    }),
                    (this.destroy = function () {
                      clearInterval(this.$pollSizeChangesTimer),
                        this.$measureNode &&
                          this.$measureNode.parentNode.removeChild(
                            this.$measureNode
                          ),
                        delete this.$measureNode;
                    });
                }).call(s.prototype),
                  (e.Text = s);
              }
            ),
            ace.define(
              "ace/layer/cursor",
              ["require", "exports", "module", "ace/lib/dom"],
              function (t, e, n) {
                "use strict";
                var i,
                  r = t("../lib/dom"),
                  o = function (t) {
                    (this.element = r.createElement("div")),
                      (this.element.className = "ace_layer ace_cursor-layer"),
                      t.appendChild(this.element),
                      void 0 === i && (i = !("opacity" in this.element.style)),
                      (this.isVisible = !1),
                      (this.isBlinking = !0),
                      (this.blinkInterval = 1e3),
                      (this.smoothBlinking = !1),
                      (this.cursors = []),
                      (this.cursor = this.addCursor()),
                      r.addCssClass(this.element, "ace_hidden-cursors"),
                      (this.$updateCursors = (
                        i ? this.$updateVisibility : this.$updateOpacity
                      ).bind(this));
                  };
                (function () {
                  (this.$updateVisibility = function (t) {
                    for (var e = this.cursors, n = e.length; n--; )
                      e[n].style.visibility = t ? "" : "hidden";
                  }),
                    (this.$updateOpacity = function (t) {
                      for (var e = this.cursors, n = e.length; n--; )
                        e[n].style.opacity = t ? "" : "0";
                    }),
                    (this.$padding = 0),
                    (this.setPadding = function (t) {
                      this.$padding = t;
                    }),
                    (this.setSession = function (t) {
                      this.session = t;
                    }),
                    (this.setBlinking = function (t) {
                      t != this.isBlinking &&
                        ((this.isBlinking = t), this.restartTimer());
                    }),
                    (this.setBlinkInterval = function (t) {
                      t != this.blinkInterval &&
                        ((this.blinkInterval = t), this.restartTimer());
                    }),
                    (this.setSmoothBlinking = function (t) {
                      t == this.smoothBlinking ||
                        i ||
                        ((this.smoothBlinking = t),
                        r.setCssClass(this.element, "ace_smooth-blinking", t),
                        this.$updateCursors(!0),
                        (this.$updateCursors = this.$updateOpacity.bind(this)),
                        this.restartTimer());
                    }),
                    (this.addCursor = function () {
                      var t = r.createElement("div");
                      return (
                        (t.className = "ace_cursor"),
                        this.element.appendChild(t),
                        this.cursors.push(t),
                        t
                      );
                    }),
                    (this.removeCursor = function () {
                      if (this.cursors.length > 1) {
                        var t = this.cursors.pop();
                        return t.parentNode.removeChild(t), t;
                      }
                    }),
                    (this.hideCursor = function () {
                      (this.isVisible = !1),
                        r.addCssClass(this.element, "ace_hidden-cursors"),
                        this.restartTimer();
                    }),
                    (this.showCursor = function () {
                      (this.isVisible = !0),
                        r.removeCssClass(this.element, "ace_hidden-cursors"),
                        this.restartTimer();
                    }),
                    (this.restartTimer = function () {
                      var t = this.$updateCursors;
                      if (
                        (clearInterval(this.intervalId),
                        clearTimeout(this.timeoutId),
                        this.smoothBlinking &&
                          r.removeCssClass(this.element, "ace_smooth-blinking"),
                        t(!0),
                        this.isBlinking && this.blinkInterval && this.isVisible)
                      ) {
                        this.smoothBlinking &&
                          setTimeout(
                            function () {
                              r.addCssClass(
                                this.element,
                                "ace_smooth-blinking"
                              );
                            }.bind(this)
                          );
                        var e = function () {
                          this.timeoutId = setTimeout(function () {
                            t(!1);
                          }, 0.6 * this.blinkInterval);
                        }.bind(this);
                        (this.intervalId = setInterval(function () {
                          t(!0), e();
                        }, this.blinkInterval)),
                          e();
                      }
                    }),
                    (this.getPixelPosition = function (t, e) {
                      if (!this.config || !this.session)
                        return { left: 0, top: 0 };
                      t || (t = this.session.selection.getCursor());
                      var n = this.session.documentToScreenPosition(t);
                      return {
                        left:
                          this.$padding + n.column * this.config.characterWidth,
                        top:
                          (n.row - (e ? this.config.firstRowScreen : 0)) *
                          this.config.lineHeight,
                      };
                    }),
                    (this.update = function (t) {
                      this.config = t;
                      var e = this.session.$selectionMarkers,
                        n = 0,
                        i = 0;
                      (void 0 !== e && 0 !== e.length) ||
                        (e = [{ cursor: null }]),
                        (n = 0);
                      for (var r = e.length; n < r; n++) {
                        var o = this.getPixelPosition(e[n].cursor, !0);
                        if (
                          !((o.top > t.height + t.offset || o.top < 0) && n > 1)
                        ) {
                          var a = (this.cursors[i++] || this.addCursor()).style;
                          this.drawCursor
                            ? this.drawCursor(a, o, t, e[n], this.session)
                            : ((a.left = o.left + "px"),
                              (a.top = o.top + "px"),
                              (a.width = t.characterWidth + "px"),
                              (a.height = t.lineHeight + "px"));
                        }
                      }
                      for (; this.cursors.length > i; ) this.removeCursor();
                      var s = this.session.getOverwrite();
                      this.$setOverwrite(s),
                        (this.$pixelPos = o),
                        this.restartTimer();
                    }),
                    (this.drawCursor = null),
                    (this.$setOverwrite = function (t) {
                      t != this.overwrite &&
                        ((this.overwrite = t),
                        t
                          ? r.addCssClass(this.element, "ace_overwrite-cursors")
                          : r.removeCssClass(
                              this.element,
                              "ace_overwrite-cursors"
                            ));
                    }),
                    (this.destroy = function () {
                      clearInterval(this.intervalId),
                        clearTimeout(this.timeoutId);
                    });
                }).call(o.prototype),
                  (e.Cursor = o);
              }
            ),
            ace.define(
              "ace/scrollbar",
              [
                "require",
                "exports",
                "module",
                "ace/lib/oop",
                "ace/lib/dom",
                "ace/lib/event",
                "ace/lib/event_emitter",
              ],
              function (t, e, n) {
                "use strict";
                var i = t("./lib/oop"),
                  r = t("./lib/dom"),
                  o = t("./lib/event"),
                  a = t("./lib/event_emitter").EventEmitter,
                  s = function (t) {
                    (this.element = r.createElement("div")),
                      (this.element.className =
                        "ace_scrollbar ace_scrollbar" + this.classSuffix),
                      (this.inner = r.createElement("div")),
                      (this.inner.className = "ace_scrollbar-inner"),
                      this.element.appendChild(this.inner),
                      t.appendChild(this.element),
                      this.setVisible(!1),
                      (this.skipEvent = !1),
                      o.addListener(
                        this.element,
                        "scroll",
                        this.onScroll.bind(this)
                      ),
                      o.addListener(
                        this.element,
                        "mousedown",
                        o.preventDefault
                      );
                  };
                (function () {
                  i.implement(this, a),
                    (this.setVisible = function (t) {
                      (this.element.style.display = t ? "" : "none"),
                        (this.isVisible = t);
                    });
                }).call(s.prototype);
                var l = function (t, e) {
                  s.call(this, t),
                    (this.scrollTop = 0),
                    (e.$scrollbarWidth = this.width =
                      r.scrollbarWidth(t.ownerDocument)),
                    (this.inner.style.width = this.element.style.width =
                      (this.width || 15) + 5 + "px");
                };
                i.inherits(l, s),
                  function () {
                    (this.classSuffix = "-v"),
                      (this.onScroll = function () {
                        this.skipEvent ||
                          ((this.scrollTop = this.element.scrollTop),
                          this._emit("scroll", { data: this.scrollTop })),
                          (this.skipEvent = !1);
                      }),
                      (this.getWidth = function () {
                        return this.isVisible ? this.width : 0;
                      }),
                      (this.setHeight = function (t) {
                        this.element.style.height = t + "px";
                      }),
                      (this.setInnerHeight = function (t) {
                        this.inner.style.height = t + "px";
                      }),
                      (this.setScrollHeight = function (t) {
                        this.inner.style.height = t + "px";
                      }),
                      (this.setScrollTop = function (t) {
                        this.scrollTop != t &&
                          ((this.skipEvent = !0),
                          (this.scrollTop = this.element.scrollTop = t));
                      });
                  }.call(l.prototype);
                var c = function (t, e) {
                  s.call(this, t),
                    (this.scrollLeft = 0),
                    (this.height = e.$scrollbarWidth),
                    (this.inner.style.height = this.element.style.height =
                      (this.height || 15) + 5 + "px");
                };
                i.inherits(c, s),
                  function () {
                    (this.classSuffix = "-h"),
                      (this.onScroll = function () {
                        this.skipEvent ||
                          ((this.scrollLeft = this.element.scrollLeft),
                          this._emit("scroll", { data: this.scrollLeft })),
                          (this.skipEvent = !1);
                      }),
                      (this.getHeight = function () {
                        return this.isVisible ? this.height : 0;
                      }),
                      (this.setWidth = function (t) {
                        this.element.style.width = t + "px";
                      }),
                      (this.setInnerWidth = function (t) {
                        this.inner.style.width = t + "px";
                      }),
                      (this.setScrollWidth = function (t) {
                        this.inner.style.width = t + "px";
                      }),
                      (this.setScrollLeft = function (t) {
                        this.scrollLeft != t &&
                          ((this.skipEvent = !0),
                          (this.scrollLeft = this.element.scrollLeft = t));
                      });
                  }.call(c.prototype),
                  (e.ScrollBar = l),
                  (e.ScrollBarV = l),
                  (e.ScrollBarH = c),
                  (e.VScrollBar = l),
                  (e.HScrollBar = c);
              }
            ),
            ace.define(
              "ace/renderloop",
              ["require", "exports", "module", "ace/lib/event"],
              function (t, e, n) {
                "use strict";
                var i = t("./lib/event"),
                  r = function (t, e) {
                    (this.onRender = t),
                      (this.pending = !1),
                      (this.changes = 0),
                      (this.window = e || window);
                  };
                (function () {
                  this.schedule = function (t) {
                    if (
                      ((this.changes = this.changes | t),
                      !this.pending && this.changes)
                    ) {
                      this.pending = !0;
                      var e = this;
                      i.nextFrame(function () {
                        var t;
                        for (e.pending = !1; (t = e.changes); )
                          (e.changes = 0), e.onRender(t);
                      }, this.window);
                    }
                  };
                }).call(r.prototype),
                  (e.RenderLoop = r);
              }
            ),
            ace.define(
              "ace/layer/font_metrics",
              [
                "require",
                "exports",
                "module",
                "ace/lib/oop",
                "ace/lib/dom",
                "ace/lib/lang",
                "ace/lib/useragent",
                "ace/lib/event_emitter",
              ],
              function (t, e, n) {
                var i = t("../lib/oop"),
                  r = t("../lib/dom"),
                  o = t("../lib/lang"),
                  a = t("../lib/useragent"),
                  s = t("../lib/event_emitter").EventEmitter,
                  l = 0,
                  c = (e.FontMetrics = function (t) {
                    (this.el = r.createElement("div")),
                      this.$setMeasureNodeStyles(this.el.style, !0),
                      (this.$main = r.createElement("div")),
                      this.$setMeasureNodeStyles(this.$main.style),
                      (this.$measureNode = r.createElement("div")),
                      this.$setMeasureNodeStyles(this.$measureNode.style),
                      this.el.appendChild(this.$main),
                      this.el.appendChild(this.$measureNode),
                      t.appendChild(this.el),
                      l || this.$testFractionalRect(),
                      (this.$measureNode.innerHTML = o.stringRepeat("X", l)),
                      (this.$characterSize = { width: 0, height: 0 }),
                      this.checkForSizeChanges();
                  });
                (function () {
                  i.implement(this, s),
                    (this.$characterSize = { width: 0, height: 0 }),
                    (this.$testFractionalRect = function () {
                      var t = r.createElement("div");
                      this.$setMeasureNodeStyles(t.style),
                        (t.style.width = "0.2px"),
                        document.documentElement.appendChild(t);
                      var e = t.getBoundingClientRect().width;
                      (l = e > 0 && e < 1 ? 50 : 100),
                        t.parentNode.removeChild(t);
                    }),
                    (this.$setMeasureNodeStyles = function (t, e) {
                      (t.width = t.height = "auto"),
                        (t.left = t.top = "0px"),
                        (t.visibility = "hidden"),
                        (t.position = "absolute"),
                        (t.whiteSpace = "pre"),
                        a.isIE < 8
                          ? (t["font-family"] = "inherit")
                          : (t.font = "inherit"),
                        (t.overflow = e ? "hidden" : "visible");
                    }),
                    (this.checkForSizeChanges = function () {
                      var t = this.$measureSizes();
                      if (
                        t &&
                        (this.$characterSize.width !== t.width ||
                          this.$characterSize.height !== t.height)
                      ) {
                        this.$measureNode.style.fontWeight = "bold";
                        var e = this.$measureSizes();
                        (this.$measureNode.style.fontWeight = ""),
                          (this.$characterSize = t),
                          (this.charSizes = Object.create(null)),
                          (this.allowBoldFonts =
                            e && e.width === t.width && e.height === t.height),
                          this._emit("changeCharacterSize", { data: t });
                      }
                    }),
                    (this.$pollSizeChanges = function () {
                      if (this.$pollSizeChangesTimer)
                        return this.$pollSizeChangesTimer;
                      var t = this;
                      return (this.$pollSizeChangesTimer = setInterval(
                        function () {
                          t.checkForSizeChanges();
                        },
                        500
                      ));
                    }),
                    (this.setPolling = function (t) {
                      t
                        ? this.$pollSizeChanges()
                        : this.$pollSizeChangesTimer &&
                          (clearInterval(this.$pollSizeChangesTimer),
                          (this.$pollSizeChangesTimer = 0));
                    }),
                    (this.$measureSizes = function () {
                      if (50 === l) {
                        var t = null;
                        try {
                          t = this.$measureNode.getBoundingClientRect();
                        } catch (e) {
                          t = { width: 0, height: 0 };
                        }
                        var e = { height: t.height, width: t.width / l };
                      } else
                        e = {
                          height: this.$measureNode.clientHeight,
                          width: this.$measureNode.clientWidth / l,
                        };
                      return 0 === e.width || 0 === e.height ? null : e;
                    }),
                    (this.$measureCharWidth = function (t) {
                      return (
                        (this.$main.innerHTML = o.stringRepeat(t, l)),
                        this.$main.getBoundingClientRect().width / l
                      );
                    }),
                    (this.getCharacterWidth = function (t) {
                      var e = this.charSizes[t];
                      return (
                        void 0 === e &&
                          (e = this.charSizes[t] =
                            this.$measureCharWidth(t) /
                            this.$characterSize.width),
                        e
                      );
                    }),
                    (this.destroy = function () {
                      clearInterval(this.$pollSizeChangesTimer),
                        this.el &&
                          this.el.parentNode &&
                          this.el.parentNode.removeChild(this.el);
                    });
                }).call(c.prototype);
              }
            ),
            ace.define(
              "ace/virtual_renderer",
              [
                "require",
                "exports",
                "module",
                "ace/lib/oop",
                "ace/lib/dom",
                "ace/config",
                "ace/lib/useragent",
                "ace/layer/gutter",
                "ace/layer/marker",
                "ace/layer/text",
                "ace/layer/cursor",
                "ace/scrollbar",
                "ace/scrollbar",
                "ace/renderloop",
                "ace/layer/font_metrics",
                "ace/lib/event_emitter",
              ],
              function (t, e, n) {
                "use strict";
                var i = t("./lib/oop"),
                  r = t("./lib/dom"),
                  o = t("./config"),
                  a = t("./lib/useragent"),
                  s = t("./layer/gutter").Gutter,
                  l = t("./layer/marker").Marker,
                  c = t("./layer/text").Text,
                  d = t("./layer/cursor").Cursor,
                  u = t("./scrollbar").HScrollBar,
                  p = t("./scrollbar").VScrollBar,
                  h = t("./renderloop").RenderLoop,
                  f = t("./layer/font_metrics").FontMetrics,
                  b = t("./lib/event_emitter").EventEmitter;
                r.importCssString(
                  '.ace_editor {\tposition: relative;\toverflow: hidden;\tfont: 12px/normal \'Monaco\', \'Menlo\', \'Ubuntu Mono\', \'Consolas\', \'source-code-pro\', monospace;\tdirection: ltr;\t}\t.ace_scroller {\tposition: absolute;\toverflow: hidden;\ttop: 0;\tbottom: 0;\tbackground-color: inherit;\t-ms-user-select: none;\t-moz-user-select: none;\t-webkit-user-select: none;\tuser-select: none;\tcursor: text;\t}\t.ace_content {\tposition: absolute;\t-moz-box-sizing: border-box;\t-webkit-box-sizing: border-box;\tbox-sizing: border-box;\tmin-width: 100%;\t}\t.ace_dragging .ace_scroller:before{\tposition: absolute;\ttop: 0;\tleft: 0;\tright: 0;\tbottom: 0;\tcontent: \'\';\tbackground: rgba(250, 250, 250, 0.01);\tz-index: 1000;\t}\t.ace_dragging.ace_dark .ace_scroller:before{\tbackground: rgba(0, 0, 0, 0.01);\t}\t.ace_selecting, .ace_selecting * {\tcursor: text !important;\t}\t.ace_gutter {\tposition: absolute;\toverflow : hidden;\twidth: auto;\ttop: 0;\tbottom: 0;\tleft: 0;\tcursor: default;\tz-index: 4;\t-ms-user-select: none;\t-moz-user-select: none;\t-webkit-user-select: none;\tuser-select: none;\t}\t.ace_gutter-active-line {\tposition: absolute;\tleft: 0;\tright: 0;\t}\t.ace_scroller.ace_scroll-left {\tbox-shadow: 17px 0 16px -16px rgba(0, 0, 0, 0.4) inset;\t}\t.ace_gutter-cell {\tpadding-left: 19px;\tpadding-right: 6px;\tbackground-repeat: no-repeat;\t}\t.ace_gutter-cell.ace_error {\tbackground-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAABOFBMVEX/////////QRswFAb/Ui4wFAYwFAYwFAaWGAfDRymzOSH/PxswFAb/SiUwFAYwFAbUPRvjQiDllog5HhHdRybsTi3/Tyv9Tir+Syj/UC3////XurebMBIwFAb/RSHbPx/gUzfdwL3kzMivKBAwFAbbvbnhPx66NhowFAYwFAaZJg8wFAaxKBDZurf/RB6mMxb/SCMwFAYwFAbxQB3+RB4wFAb/Qhy4Oh+4QifbNRcwFAYwFAYwFAb/QRzdNhgwFAYwFAbav7v/Uy7oaE68MBK5LxLewr/r2NXewLswFAaxJw4wFAbkPRy2PyYwFAaxKhLm1tMwFAazPiQwFAaUGAb/QBrfOx3bvrv/VC/maE4wFAbRPBq6MRO8Qynew8Dp2tjfwb0wFAbx6eju5+by6uns4uH9/f36+vr/GkHjAAAAYnRSTlMAGt+64rnWu/bo8eAA4InH3+DwoN7j4eLi4xP99Nfg4+b+/u9B/eDs1MD1mO7+4PHg2MXa347g7vDizMLN4eG+Pv7i5evs/v79yu7S3/DV7/498Yv24eH+4ufQ3Ozu/v7+y13sRqwAAADLSURBVHjaZc/XDsFgGIBhtDrshlitmk2IrbHFqL2pvXf/+78DPokj7+Fz9qpU/9UXJIlhmPaTaQ6QPaz0mm+5gwkgovcV6GZzd5JtCQwgsxoHOvJO15kleRLAnMgHFIESUEPmawB9ngmelTtipwwfASilxOLyiV5UVUyVAfbG0cCPHig+GBkzAENHS0AstVF6bacZIOzgLmxsHbt2OecNgJC83JERmePUYq8ARGkJx6XtFsdddBQgZE2nPR6CICZhawjA4Fb/chv+399kfR+MMMDGOQAAAABJRU5ErkJggg==");\tbackground-repeat: no-repeat;\tbackground-position: 2px center;\t}\t.ace_gutter-cell.ace_warning {\tbackground-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAmVBMVEX///8AAAD///8AAAAAAABPSzb/5sAAAAB/blH/73z/ulkAAAAAAAD85pkAAAAAAAACAgP/vGz/rkDerGbGrV7/pkQICAf////e0IsAAAD/oED/qTvhrnUAAAD/yHD/njcAAADuv2r/nz//oTj/p064oGf/zHAAAAA9Nir/tFIAAAD/tlTiuWf/tkIAAACynXEAAAAAAAAtIRW7zBpBAAAAM3RSTlMAABR1m7RXO8Ln31Z36zT+neXe5OzooRDfn+TZ4p3h2hTf4t3k3ucyrN1K5+Xaks52Sfs9CXgrAAAAjklEQVR42o3PbQ+CIBQFYEwboPhSYgoYunIqqLn6/z8uYdH8Vmdnu9vz4WwXgN/xTPRD2+sgOcZjsge/whXZgUaYYvT8QnuJaUrjrHUQreGczuEafQCO/SJTufTbroWsPgsllVhq3wJEk2jUSzX3CUEDJC84707djRc5MTAQxoLgupWRwW6UB5fS++NV8AbOZgnsC7BpEAAAAABJRU5ErkJggg==");\tbackground-position: 2px center;\t}\t.ace_gutter-cell.ace_info {\tbackground-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAAAAAA6mKC9AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAAJ0Uk5TAAB2k804AAAAPklEQVQY02NgIB68QuO3tiLznjAwpKTgNyDbMegwisCHZUETUZV0ZqOquBpXj2rtnpSJT1AEnnRmL2OgGgAAIKkRQap2htgAAAAASUVORK5CYII=");\tbackground-position: 2px center;\t}\t.ace_dark .ace_gutter-cell.ace_info {\tbackground-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAJFBMVEUAAAChoaGAgIAqKiq+vr6tra1ZWVmUlJSbm5s8PDxubm56enrdgzg3AAAAAXRSTlMAQObYZgAAAClJREFUeNpjYMAPdsMYHegyJZFQBlsUlMFVCWUYKkAZMxZAGdxlDMQBAG+TBP4B6RyJAAAAAElFTkSuQmCC");\t}\t.ace_scrollbar {\tposition: absolute;\tright: 0;\tbottom: 0;\tz-index: 6;\t}\t.ace_scrollbar-inner {\tposition: absolute;\tcursor: text;\tleft: 0;\ttop: 0;\t}\t.ace_scrollbar-v{\toverflow-x: hidden;\toverflow-y: scroll;\ttop: 0;\t}\t.ace_scrollbar-h {\toverflow-x: scroll;\toverflow-y: hidden;\tleft: 0;\t}\t.ace_print-margin {\tposition: absolute;\theight: 100%;\t}\t.ace_text-input {\tposition: absolute;\tz-index: 0;\twidth: 0.5em;\theight: 1em;\topacity: 0;\tbackground: transparent;\t-moz-appearance: none;\tappearance: none;\tborder: none;\tresize: none;\toutline: none;\toverflow: hidden;\tfont: inherit;\tpadding: 0 1px;\tmargin: 0 -1px;\ttext-indent: -1em;\t-ms-user-select: text;\t-moz-user-select: text;\t-webkit-user-select: text;\tuser-select: text;\twhite-space: pre!important;\t}\t.ace_text-input.ace_composition {\tbackground: inherit;\tcolor: inherit;\tz-index: 1000;\topacity: 1;\ttext-indent: 0;\t}\t.ace_layer {\tz-index: 1;\tposition: absolute;\toverflow: hidden;\tword-wrap: normal;\twhite-space: pre;\theight: 100%;\twidth: 100%;\t-moz-box-sizing: border-box;\t-webkit-box-sizing: border-box;\tbox-sizing: border-box;\tpointer-events: none;\t}\t.ace_gutter-layer {\tposition: relative;\twidth: auto;\ttext-align: right;\tpointer-events: auto;\t}\t.ace_text-layer {\tfont: inherit !important;\t}\t.ace_cjk {\tdisplay: inline-block;\ttext-align: center;\t}\t.ace_cursor-layer {\tz-index: 4;\t}\t.ace_cursor {\tz-index: 4;\tposition: absolute;\t-moz-box-sizing: border-box;\t-webkit-box-sizing: border-box;\tbox-sizing: border-box;\tborder-left: 2px solid;\ttransform: translatez(0);\t}\t.ace_slim-cursors .ace_cursor {\tborder-left-width: 1px;\t}\t.ace_overwrite-cursors .ace_cursor {\tborder-left-width: 0;\tborder-bottom: 1px solid;\t}\t.ace_hidden-cursors .ace_cursor {\topacity: 0.2;\t}\t.ace_smooth-blinking .ace_cursor {\t-webkit-transition: opacity 0.18s;\ttransition: opacity 0.18s;\t}\t.ace_editor.ace_multiselect .ace_cursor {\tborder-left-width: 1px;\t}\t.ace_marker-layer .ace_step, .ace_marker-layer .ace_stack {\tposition: absolute;\tz-index: 3;\t}\t.ace_marker-layer .ace_selection {\tposition: absolute;\tz-index: 5;\t}\t.ace_marker-layer .ace_bracket {\tposition: absolute;\tz-index: 6;\t}\t.ace_marker-layer .ace_active-line {\tposition: absolute;\tz-index: 2;\t}\t.ace_marker-layer .ace_selected-word {\tposition: absolute;\tz-index: 4;\t-moz-box-sizing: border-box;\t-webkit-box-sizing: border-box;\tbox-sizing: border-box;\t}\t.ace_line .ace_fold {\t-moz-box-sizing: border-box;\t-webkit-box-sizing: border-box;\tbox-sizing: border-box;\tdisplay: inline-block;\theight: 11px;\tmargin-top: -2px;\tvertical-align: middle;\tbackground-image:\turl("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAJCAYAAADU6McMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAJpJREFUeNpi/P//PwOlgAXGYGRklAVSokD8GmjwY1wasKljQpYACtpCFeADcHVQfQyMQAwzwAZI3wJKvCLkfKBaMSClBlR7BOQikCFGQEErIH0VqkabiGCAqwUadAzZJRxQr/0gwiXIal8zQQPnNVTgJ1TdawL0T5gBIP1MUJNhBv2HKoQHHjqNrA4WO4zY0glyNKLT2KIfIMAAQsdgGiXvgnYAAAAASUVORK5CYII="),\turl("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAA3CAYAAADNNiA5AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAACJJREFUeNpi+P//fxgTAwPDBxDxD078RSX+YeEyDFMCIMAAI3INmXiwf2YAAAAASUVORK5CYII=");\tbackground-repeat: no-repeat, repeat-x;\tbackground-position: center center, top left;\tcolor: transparent;\tborder: 1px solid black;\tborder-radius: 2px;\tcursor: pointer;\tpointer-events: auto;\t}\t.ace_dark .ace_fold {\t}\t.ace_fold:hover{\tbackground-image:\turl("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAJCAYAAADU6McMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAJpJREFUeNpi/P//PwOlgAXGYGRklAVSokD8GmjwY1wasKljQpYACtpCFeADcHVQfQyMQAwzwAZI3wJKvCLkfKBaMSClBlR7BOQikCFGQEErIH0VqkabiGCAqwUadAzZJRxQr/0gwiXIal8zQQPnNVTgJ1TdawL0T5gBIP1MUJNhBv2HKoQHHjqNrA4WO4zY0glyNKLT2KIfIMAAQsdgGiXvgnYAAAAASUVORK5CYII="),\turl("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAA3CAYAAADNNiA5AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAACBJREFUeNpi+P//fz4TAwPDZxDxD5X4i5fLMEwJgAADAEPVDbjNw87ZAAAAAElFTkSuQmCC");\t}\t.ace_tooltip {\tbackground-color: #FFF;\tbackground-image: -webkit-linear-gradient(top, transparent, rgba(0, 0, 0, 0.1));\tbackground-image: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.1));\tborder: 1px solid gray;\tborder-radius: 1px;\tbox-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);\tcolor: black;\tmax-width: 100%;\tpadding: 3px 4px;\tposition: fixed;\tz-index: 999999;\t-moz-box-sizing: border-box;\t-webkit-box-sizing: border-box;\tbox-sizing: border-box;\tcursor: default;\twhite-space: pre;\tword-wrap: break-word;\tline-height: normal;\tfont-style: normal;\tfont-weight: normal;\tletter-spacing: normal;\tpointer-events: none;\t}\t.ace_folding-enabled > .ace_gutter-cell {\tpadding-right: 13px;\t}\t.ace_fold-widget {\t-moz-box-sizing: border-box;\t-webkit-box-sizing: border-box;\tbox-sizing: border-box;\tmargin: 0 -12px 0 1px;\tdisplay: none;\twidth: 11px;\tvertical-align: top;\tbackground-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAANElEQVR42mWKsQ0AMAzC8ixLlrzQjzmBiEjp0A6WwBCSPgKAXoLkqSot7nN3yMwR7pZ32NzpKkVoDBUxKAAAAABJRU5ErkJggg==");\tbackground-repeat: no-repeat;\tbackground-position: center;\tborder-radius: 3px;\tborder: 1px solid transparent;\tcursor: pointer;\t}\t.ace_folding-enabled .ace_fold-widget {\tdisplay: inline-block;   \t}\t.ace_fold-widget.ace_end {\tbackground-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAANElEQVR42m3HwQkAMAhD0YzsRchFKI7sAikeWkrxwScEB0nh5e7KTPWimZki4tYfVbX+MNl4pyZXejUO1QAAAABJRU5ErkJggg==");\t}\t.ace_fold-widget.ace_closed {\tbackground-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAGCAYAAAAG5SQMAAAAOUlEQVR42jXKwQkAMAgDwKwqKD4EwQ26sSOkVWjgIIHAzPiCgaqiqnJHZnKICBERHN194O5b9vbLuAVRL+l0YWnZAAAAAElFTkSuQmCCXA==");\t}\t.ace_fold-widget:hover {\tborder: 1px solid rgba(0, 0, 0, 0.3);\tbackground-color: rgba(255, 255, 255, 0.2);\tbox-shadow: 0 1px 1px rgba(255, 255, 255, 0.7);\t}\t.ace_fold-widget:active {\tborder: 1px solid rgba(0, 0, 0, 0.4);\tbackground-color: rgba(0, 0, 0, 0.05);\tbox-shadow: 0 1px 1px rgba(255, 255, 255, 0.8);\t}\t.ace_dark .ace_fold-widget {\tbackground-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHklEQVQIW2P4//8/AzoGEQ7oGCaLLAhWiSwB146BAQCSTPYocqT0AAAAAElFTkSuQmCC");\t}\t.ace_dark .ace_fold-widget.ace_end {\tbackground-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAH0lEQVQIW2P4//8/AxQ7wNjIAjDMgC4AxjCVKBirIAAF0kz2rlhxpAAAAABJRU5ErkJggg==");\t}\t.ace_dark .ace_fold-widget.ace_closed {\tbackground-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAFCAYAAACAcVaiAAAAHElEQVQIW2P4//+/AxAzgDADlOOAznHAKgPWAwARji8UIDTfQQAAAABJRU5ErkJggg==");\t}\t.ace_dark .ace_fold-widget:hover {\tbox-shadow: 0 1px 1px rgba(255, 255, 255, 0.2);\tbackground-color: rgba(255, 255, 255, 0.1);\t}\t.ace_dark .ace_fold-widget:active {\tbox-shadow: 0 1px 1px rgba(255, 255, 255, 0.2);\t}\t.ace_fold-widget.ace_invalid {\tbackground-color: #FFB4B4;\tborder-color: #DE5555;\t}\t.ace_fade-fold-widgets .ace_fold-widget {\t-webkit-transition: opacity 0.4s ease 0.05s;\ttransition: opacity 0.4s ease 0.05s;\topacity: 0;\t}\t.ace_fade-fold-widgets:hover .ace_fold-widget {\t-webkit-transition: opacity 0.05s ease 0.05s;\ttransition: opacity 0.05s ease 0.05s;\topacity:1;\t}\t.ace_underline {\ttext-decoration: underline;\t}\t.ace_bold {\tfont-weight: bold;\t}\t.ace_nobold .ace_bold {\tfont-weight: normal;\t}\t.ace_italic {\tfont-style: italic;\t}\t.ace_error-marker {\tbackground-color: rgba(255, 0, 0,0.2);\tposition: absolute;\tz-index: 9;\t}\t.ace_highlight-marker {\tbackground-color: rgba(255, 255, 0,0.2);\tposition: absolute;\tz-index: 8;\t}\t.ace_br1 {border-top-left-radius    : 3px;}\t.ace_br2 {border-top-right-radius   : 3px;}\t.ace_br3 {border-top-left-radius    : 3px; border-top-right-radius:    3px;}\t.ace_br4 {border-bottom-right-radius: 3px;}\t.ace_br5 {border-top-left-radius    : 3px; border-bottom-right-radius: 3px;}\t.ace_br6 {border-top-right-radius   : 3px; border-bottom-right-radius: 3px;}\t.ace_br7 {border-top-left-radius    : 3px; border-top-right-radius:    3px; border-bottom-right-radius: 3px;}\t.ace_br8 {border-bottom-left-radius : 3px;}\t.ace_br9 {border-top-left-radius    : 3px; border-bottom-left-radius:  3px;}\t.ace_br10{border-top-right-radius   : 3px; border-bottom-left-radius:  3px;}\t.ace_br11{border-top-left-radius    : 3px; border-top-right-radius:    3px; border-bottom-left-radius:  3px;}\t.ace_br12{border-bottom-right-radius: 3px; border-bottom-left-radius:  3px;}\t.ace_br13{border-top-left-radius    : 3px; border-bottom-right-radius: 3px; border-bottom-left-radius:  3px;}\t.ace_br14{border-top-right-radius   : 3px; border-bottom-right-radius: 3px; border-bottom-left-radius:  3px;}\t.ace_br15{border-top-left-radius    : 3px; border-top-right-radius:    3px; border-bottom-right-radius: 3px; border-bottom-left-radius: 3px;}\t',
                  "ace_editor.css"
                );
                var m = function (t, e) {
                  var n = this;
                  (this.container = t || r.createElement("div")),
                    (this.$keepTextAreaAtCursor = !a.isOldIE),
                    r.addCssClass(this.container, "ace_editor"),
                    this.setTheme(e),
                    (this.$gutter = r.createElement("div")),
                    (this.$gutter.className = "ace_gutter"),
                    this.container.appendChild(this.$gutter),
                    (this.scroller = r.createElement("div")),
                    (this.scroller.className = "ace_scroller"),
                    this.container.appendChild(this.scroller),
                    (this.content = r.createElement("div")),
                    (this.content.className = "ace_content"),
                    this.scroller.appendChild(this.content),
                    (this.$gutterLayer = new s(this.$gutter)),
                    this.$gutterLayer.on(
                      "changeGutterWidth",
                      this.onGutterResize.bind(this)
                    ),
                    (this.$markerBack = new l(this.content));
                  var i = (this.$textLayer = new c(this.content));
                  (this.canvas = i.element),
                    (this.$markerFront = new l(this.content)),
                    (this.$cursorLayer = new d(this.content)),
                    (this.$horizScroll = !1),
                    (this.$vScroll = !1),
                    (this.scrollBar = this.scrollBarV =
                      new p(this.container, this)),
                    (this.scrollBarH = new u(this.container, this)),
                    this.scrollBarV.addEventListener("scroll", function (t) {
                      n.$scrollAnimation ||
                        n.session.setScrollTop(t.data - n.scrollMargin.top);
                    }),
                    this.scrollBarH.addEventListener("scroll", function (t) {
                      n.$scrollAnimation ||
                        n.session.setScrollLeft(t.data - n.scrollMargin.left);
                    }),
                    (this.scrollTop = 0),
                    (this.scrollLeft = 0),
                    (this.cursorPos = { row: 0, column: 0 }),
                    (this.$fontMetrics = new f(this.container)),
                    this.$textLayer.$setFontMetrics(this.$fontMetrics),
                    this.$textLayer.addEventListener(
                      "changeCharacterSize",
                      function (t) {
                        n.updateCharacterSize(),
                          n.onResize(
                            !0,
                            n.gutterWidth,
                            n.$size.width,
                            n.$size.height
                          ),
                          n._signal("changeCharacterSize", t);
                      }
                    ),
                    (this.$size = {
                      width: 0,
                      height: 0,
                      scrollerHeight: 0,
                      scrollerWidth: 0,
                      $dirty: !0,
                    }),
                    (this.layerConfig = {
                      width: 1,
                      padding: 0,
                      firstRow: 0,
                      firstRowScreen: 0,
                      lastRow: 0,
                      lineHeight: 0,
                      characterWidth: 0,
                      minHeight: 1,
                      maxHeight: 1,
                      offset: 0,
                      height: 1,
                      gutterOffset: 1,
                    }),
                    (this.scrollMargin = {
                      left: 0,
                      right: 0,
                      top: 0,
                      bottom: 0,
                      v: 0,
                      h: 0,
                    }),
                    (this.$loop = new h(
                      this.$renderChanges.bind(this),
                      this.container.ownerDocument.defaultView
                    )),
                    this.$loop.schedule(this.CHANGE_FULL),
                    this.updateCharacterSize(),
                    this.setPadding(4),
                    o.resetOptions(this),
                    o._emit("renderer", this);
                };
                (function () {
                  (this.CHANGE_CURSOR = 1),
                    (this.CHANGE_MARKER = 2),
                    (this.CHANGE_GUTTER = 4),
                    (this.CHANGE_SCROLL = 8),
                    (this.CHANGE_LINES = 16),
                    (this.CHANGE_TEXT = 32),
                    (this.CHANGE_SIZE = 64),
                    (this.CHANGE_MARKER_BACK = 128),
                    (this.CHANGE_MARKER_FRONT = 256),
                    (this.CHANGE_FULL = 512),
                    (this.CHANGE_H_SCROLL = 1024),
                    i.implement(this, b),
                    (this.updateCharacterSize = function () {
                      this.$textLayer.allowBoldFonts != this.$allowBoldFonts &&
                        ((this.$allowBoldFonts =
                          this.$textLayer.allowBoldFonts),
                        this.setStyle("ace_nobold", !this.$allowBoldFonts)),
                        (this.layerConfig.characterWidth = this.characterWidth =
                          this.$textLayer.getCharacterWidth()),
                        (this.layerConfig.lineHeight = this.lineHeight =
                          this.$textLayer.getLineHeight()),
                        this.$updatePrintMargin();
                    }),
                    (this.setSession = function (t) {
                      this.session &&
                        this.session.doc.off(
                          "changeNewLineMode",
                          this.onChangeNewLineMode
                        ),
                        (this.session = t),
                        t &&
                          this.scrollMargin.top &&
                          t.getScrollTop() <= 0 &&
                          t.setScrollTop(-this.scrollMargin.top),
                        this.$cursorLayer.setSession(t),
                        this.$markerBack.setSession(t),
                        this.$markerFront.setSession(t),
                        this.$gutterLayer.setSession(t),
                        this.$textLayer.setSession(t),
                        t &&
                          (this.$loop.schedule(this.CHANGE_FULL),
                          this.session.$setFontMetrics(this.$fontMetrics),
                          (this.onChangeNewLineMode =
                            this.onChangeNewLineMode.bind(this)),
                          this.onChangeNewLineMode(),
                          this.session.doc.on(
                            "changeNewLineMode",
                            this.onChangeNewLineMode
                          ));
                    }),
                    (this.updateLines = function (t, e, n) {
                      if (
                        (void 0 === e && (e = 1 / 0),
                        this.$changedLines
                          ? (this.$changedLines.firstRow > t &&
                              (this.$changedLines.firstRow = t),
                            this.$changedLines.lastRow < e &&
                              (this.$changedLines.lastRow = e))
                          : (this.$changedLines = { firstRow: t, lastRow: e }),
                        this.$changedLines.lastRow < this.layerConfig.firstRow)
                      ) {
                        if (!n) return;
                        this.$changedLines.lastRow = this.layerConfig.lastRow;
                      }
                      this.$changedLines.firstRow > this.layerConfig.lastRow ||
                        this.$loop.schedule(this.CHANGE_LINES);
                    }),
                    (this.onChangeNewLineMode = function () {
                      this.$loop.schedule(this.CHANGE_TEXT),
                        this.$textLayer.$updateEolChar();
                    }),
                    (this.onChangeTabSize = function () {
                      this.$loop.schedule(
                        this.CHANGE_TEXT | this.CHANGE_MARKER
                      ),
                        this.$textLayer.onChangeTabSize();
                    }),
                    (this.updateText = function () {
                      this.$loop.schedule(this.CHANGE_TEXT);
                    }),
                    (this.updateFull = function (t) {
                      t
                        ? this.$renderChanges(this.CHANGE_FULL, !0)
                        : this.$loop.schedule(this.CHANGE_FULL);
                    }),
                    (this.updateFontSize = function () {
                      this.$textLayer.checkForSizeChanges();
                    }),
                    (this.$changes = 0),
                    (this.$updateSizeAsync = function () {
                      this.$loop.pending
                        ? (this.$size.$dirty = !0)
                        : this.onResize();
                    }),
                    (this.onResize = function (t, e, n, i) {
                      if (!(this.resizing > 2)) {
                        this.resizing > 0
                          ? this.resizing++
                          : (this.resizing = t ? 1 : 0);
                        var r = this.container;
                        i || (i = r.clientHeight || r.scrollHeight),
                          n || (n = r.clientWidth || r.scrollWidth);
                        var o = this.$updateCachedSize(t, e, n, i);
                        if (!this.$size.scrollerHeight || (!n && !i))
                          return (this.resizing = 0);
                        t && (this.$gutterLayer.$padding = null),
                          t
                            ? this.$renderChanges(o | this.$changes, !0)
                            : this.$loop.schedule(o | this.$changes),
                          this.resizing && (this.resizing = 0),
                          (this.scrollBarV.scrollLeft =
                            this.scrollBarV.scrollTop =
                              null);
                      }
                    }),
                    (this.$updateCachedSize = function (t, e, n, i) {
                      i -= this.$extraHeight || 0;
                      var r = 0,
                        o = this.$size,
                        a = {
                          width: o.width,
                          height: o.height,
                          scrollerHeight: o.scrollerHeight,
                          scrollerWidth: o.scrollerWidth,
                        };
                      return (
                        i &&
                          (t || o.height != i) &&
                          ((o.height = i),
                          (r |= this.CHANGE_SIZE),
                          (o.scrollerHeight = o.height),
                          this.$horizScroll &&
                            (o.scrollerHeight -= this.scrollBarH.getHeight()),
                          (this.scrollBarV.element.style.bottom =
                            this.scrollBarH.getHeight() + "px"),
                          (r |= this.CHANGE_SCROLL)),
                        n &&
                          (t || o.width != n) &&
                          ((r |= this.CHANGE_SIZE),
                          (o.width = n),
                          null == e &&
                            (e = this.$showGutter
                              ? this.$gutter.offsetWidth
                              : 0),
                          (this.gutterWidth = e),
                          (this.scrollBarH.element.style.left =
                            this.scroller.style.left =
                              e + "px"),
                          (o.scrollerWidth = Math.max(
                            0,
                            n - e - this.scrollBarV.getWidth()
                          )),
                          (this.scrollBarH.element.style.right =
                            this.scroller.style.right =
                              this.scrollBarV.getWidth() + "px"),
                          (this.scroller.style.bottom =
                            this.scrollBarH.getHeight() + "px"),
                          ((this.session &&
                            this.session.getUseWrapMode() &&
                            this.adjustWrapLimit()) ||
                            t) &&
                            (r |= this.CHANGE_FULL)),
                        (o.$dirty = !n || !i),
                        r && this._signal("resize", a),
                        r
                      );
                    }),
                    (this.onGutterResize = function () {
                      var t = this.$showGutter ? this.$gutter.offsetWidth : 0;
                      t != this.gutterWidth &&
                        (this.$changes |= this.$updateCachedSize(
                          !0,
                          t,
                          this.$size.width,
                          this.$size.height
                        )),
                        (this.session.getUseWrapMode() &&
                          this.adjustWrapLimit()) ||
                        this.$size.$dirty
                          ? this.$loop.schedule(this.CHANGE_FULL)
                          : (this.$computeLayerConfig(),
                            this.$loop.schedule(this.CHANGE_MARKER));
                    }),
                    (this.adjustWrapLimit = function () {
                      var t = this.$size.scrollerWidth - 2 * this.$padding,
                        e = Math.floor(t / this.characterWidth);
                      return this.session.adjustWrapLimit(
                        e,
                        this.$showPrintMargin && this.$printMarginColumn
                      );
                    }),
                    (this.setAnimatedScroll = function (t) {
                      this.setOption("animatedScroll", t);
                    }),
                    (this.getAnimatedScroll = function () {
                      return this.$animatedScroll;
                    }),
                    (this.setShowInvisibles = function (t) {
                      this.setOption("showInvisibles", t);
                    }),
                    (this.getShowInvisibles = function () {
                      return this.getOption("showInvisibles");
                    }),
                    (this.getDisplayIndentGuides = function () {
                      return this.getOption("displayIndentGuides");
                    }),
                    (this.setDisplayIndentGuides = function (t) {
                      this.setOption("displayIndentGuides", t);
                    }),
                    (this.setShowPrintMargin = function (t) {
                      this.setOption("showPrintMargin", t);
                    }),
                    (this.getShowPrintMargin = function () {
                      return this.getOption("showPrintMargin");
                    }),
                    (this.setPrintMarginColumn = function (t) {
                      this.setOption("printMarginColumn", t);
                    }),
                    (this.getPrintMarginColumn = function () {
                      return this.getOption("printMarginColumn");
                    }),
                    (this.getShowGutter = function () {
                      return this.getOption("showGutter");
                    }),
                    (this.setShowGutter = function (t) {
                      return this.setOption("showGutter", t);
                    }),
                    (this.getFadeFoldWidgets = function () {
                      return this.getOption("fadeFoldWidgets");
                    }),
                    (this.setFadeFoldWidgets = function (t) {
                      this.setOption("fadeFoldWidgets", t);
                    }),
                    (this.setHighlightGutterLine = function (t) {
                      this.setOption("highlightGutterLine", t);
                    }),
                    (this.getHighlightGutterLine = function () {
                      return this.getOption("highlightGutterLine");
                    }),
                    (this.$updateGutterLineHighlight = function () {
                      var t = this.$cursorLayer.$pixelPos,
                        e = this.layerConfig.lineHeight;
                      if (this.session.getUseWrapMode()) {
                        var n = this.session.selection.getCursor();
                        (n.column = 0),
                          (t = this.$cursorLayer.getPixelPosition(n, !0)),
                          (e *= this.session.getRowLength(n.row));
                      }
                      (this.$gutterLineHighlight.style.top =
                        t.top - this.layerConfig.offset + "px"),
                        (this.$gutterLineHighlight.style.height = e + "px");
                    }),
                    (this.$updatePrintMargin = function () {
                      if (this.$showPrintMargin || this.$printMarginEl) {
                        if (!this.$printMarginEl) {
                          var t = r.createElement("div");
                          (t.className = "ace_layer ace_print-margin-layer"),
                            (this.$printMarginEl = r.createElement("div")),
                            (this.$printMarginEl.className =
                              "ace_print-margin"),
                            t.appendChild(this.$printMarginEl),
                            this.content.insertBefore(
                              t,
                              this.content.firstChild
                            );
                        }
                        var e = this.$printMarginEl.style;
                        (e.left =
                          this.characterWidth * this.$printMarginColumn +
                          this.$padding +
                          "px"),
                          (e.visibility = this.$showPrintMargin
                            ? "visible"
                            : "hidden"),
                          this.session &&
                            -1 == this.session.$wrap &&
                            this.adjustWrapLimit();
                      }
                    }),
                    (this.getContainerElement = function () {
                      return this.container;
                    }),
                    (this.getMouseEventTarget = function () {
                      return this.scroller;
                    }),
                    (this.getTextAreaContainer = function () {
                      return this.container;
                    }),
                    (this.$moveTextAreaToCursor = function () {
                      if (this.$keepTextAreaAtCursor) {
                        var t = this.layerConfig,
                          e = this.$cursorLayer.$pixelPos.top,
                          n = this.$cursorLayer.$pixelPos.left;
                        e -= t.offset;
                        var i = this.textarea.style,
                          r = this.lineHeight;
                        if (e < 0 || e > t.height - r) i.top = i.left = "0";
                        else {
                          var o = this.characterWidth;
                          if (this.$composition) {
                            var a = this.textarea.value.replace(/^\x01+/, "");
                            (o *= this.session.$getStringScreenWidth(a)[0] + 2),
                              (r += 2);
                          }
                          (n -= this.scrollLeft) >
                            this.$size.scrollerWidth - o &&
                            (n = this.$size.scrollerWidth - o),
                            (n += this.gutterWidth),
                            (i.height = r + "px"),
                            (i.width = o + "px"),
                            (i.left =
                              Math.min(n, this.$size.scrollerWidth - o) + "px"),
                            (i.top = Math.min(e, this.$size.height - r) + "px");
                        }
                      }
                    }),
                    (this.getFirstVisibleRow = function () {
                      return this.layerConfig.firstRow;
                    }),
                    (this.getFirstFullyVisibleRow = function () {
                      return (
                        this.layerConfig.firstRow +
                        (0 === this.layerConfig.offset ? 0 : 1)
                      );
                    }),
                    (this.getLastFullyVisibleRow = function () {
                      var t = this.layerConfig,
                        e = t.lastRow;
                      return this.session.documentToScreenRow(e, 0) *
                        t.lineHeight -
                        this.session.getScrollTop() >
                        t.height - t.lineHeight
                        ? e - 1
                        : e;
                    }),
                    (this.getLastVisibleRow = function () {
                      return this.layerConfig.lastRow;
                    }),
                    (this.$padding = null),
                    (this.setPadding = function (t) {
                      (this.$padding = t),
                        this.$textLayer.setPadding(t),
                        this.$cursorLayer.setPadding(t),
                        this.$markerFront.setPadding(t),
                        this.$markerBack.setPadding(t),
                        this.$loop.schedule(this.CHANGE_FULL),
                        this.$updatePrintMargin();
                    }),
                    (this.setScrollMargin = function (t, e, n, i) {
                      var r = this.scrollMargin;
                      (r.top = 0 | t),
                        (r.bottom = 0 | e),
                        (r.right = 0 | i),
                        (r.left = 0 | n),
                        (r.v = r.top + r.bottom),
                        (r.h = r.left + r.right),
                        r.top &&
                          this.scrollTop <= 0 &&
                          this.session &&
                          this.session.setScrollTop(-r.top),
                        this.updateFull();
                    }),
                    (this.getHScrollBarAlwaysVisible = function () {
                      return this.$hScrollBarAlwaysVisible;
                    }),
                    (this.setHScrollBarAlwaysVisible = function (t) {
                      this.setOption("hScrollBarAlwaysVisible", t);
                    }),
                    (this.getVScrollBarAlwaysVisible = function () {
                      return this.$vScrollBarAlwaysVisible;
                    }),
                    (this.setVScrollBarAlwaysVisible = function (t) {
                      this.setOption("vScrollBarAlwaysVisible", t);
                    }),
                    (this.$updateScrollBarV = function () {
                      var t = this.layerConfig.maxHeight,
                        e = this.$size.scrollerHeight;
                      !this.$maxLines &&
                        this.$scrollPastEnd &&
                        ((t -= (e - this.lineHeight) * this.$scrollPastEnd),
                        this.scrollTop > t - e &&
                          ((t = this.scrollTop + e),
                          (this.scrollBarV.scrollTop = null))),
                        this.scrollBarV.setScrollHeight(
                          t + this.scrollMargin.v
                        ),
                        this.scrollBarV.setScrollTop(
                          this.scrollTop + this.scrollMargin.top
                        );
                    }),
                    (this.$updateScrollBarH = function () {
                      this.scrollBarH.setScrollWidth(
                        this.layerConfig.width +
                          2 * this.$padding +
                          this.scrollMargin.h
                      ),
                        this.scrollBarH.setScrollLeft(
                          this.scrollLeft + this.scrollMargin.left
                        );
                    }),
                    (this.$frozen = !1),
                    (this.freeze = function () {
                      this.$frozen = !0;
                    }),
                    (this.unfreeze = function () {
                      this.$frozen = !1;
                    }),
                    (this.$renderChanges = function (t, e) {
                      if (
                        (this.$changes &&
                          ((t |= this.$changes), (this.$changes = 0)),
                        this.session &&
                          this.container.offsetWidth &&
                          !this.$frozen &&
                          (t || e))
                      ) {
                        if (this.$size.$dirty)
                          return (this.$changes |= t), this.onResize(!0);
                        this.lineHeight ||
                          this.$textLayer.checkForSizeChanges(),
                          this._signal("beforeRender");
                        var n = this.layerConfig;
                        if (
                          t & this.CHANGE_FULL ||
                          t & this.CHANGE_SIZE ||
                          t & this.CHANGE_TEXT ||
                          t & this.CHANGE_LINES ||
                          t & this.CHANGE_SCROLL ||
                          t & this.CHANGE_H_SCROLL
                        ) {
                          if (
                            ((t |= this.$computeLayerConfig()),
                            n.firstRow != this.layerConfig.firstRow &&
                              n.firstRowScreen ==
                                this.layerConfig.firstRowScreen)
                          ) {
                            var i =
                              this.scrollTop +
                              (n.firstRow - this.layerConfig.firstRow) *
                                this.lineHeight;
                            i > 0 &&
                              ((this.scrollTop = i),
                              (t |= this.CHANGE_SCROLL),
                              (t |= this.$computeLayerConfig()));
                          }
                          (n = this.layerConfig),
                            this.$updateScrollBarV(),
                            t & this.CHANGE_H_SCROLL &&
                              this.$updateScrollBarH(),
                            (this.$gutterLayer.element.style.marginTop =
                              -n.offset + "px"),
                            (this.content.style.marginTop = -n.offset + "px"),
                            (this.content.style.width =
                              n.width + 2 * this.$padding + "px"),
                            (this.content.style.height = n.minHeight + "px");
                        }
                        if (
                          (t & this.CHANGE_H_SCROLL &&
                            ((this.content.style.marginLeft =
                              -this.scrollLeft + "px"),
                            (this.scroller.className =
                              this.scrollLeft <= 0
                                ? "ace_scroller"
                                : "ace_scroller ace_scroll-left")),
                          t & this.CHANGE_FULL)
                        )
                          return (
                            this.$textLayer.update(n),
                            this.$showGutter && this.$gutterLayer.update(n),
                            this.$markerBack.update(n),
                            this.$markerFront.update(n),
                            this.$cursorLayer.update(n),
                            this.$moveTextAreaToCursor(),
                            this.$highlightGutterLine &&
                              this.$updateGutterLineHighlight(),
                            void this._signal("afterRender")
                          );
                        if (t & this.CHANGE_SCROLL)
                          return (
                            t & this.CHANGE_TEXT || t & this.CHANGE_LINES
                              ? this.$textLayer.update(n)
                              : this.$textLayer.scrollLines(n),
                            this.$showGutter && this.$gutterLayer.update(n),
                            this.$markerBack.update(n),
                            this.$markerFront.update(n),
                            this.$cursorLayer.update(n),
                            this.$highlightGutterLine &&
                              this.$updateGutterLineHighlight(),
                            this.$moveTextAreaToCursor(),
                            void this._signal("afterRender")
                          );
                        t & this.CHANGE_TEXT
                          ? (this.$textLayer.update(n),
                            this.$showGutter && this.$gutterLayer.update(n))
                          : t & this.CHANGE_LINES
                          ? (this.$updateLines() ||
                              (t & this.CHANGE_GUTTER && this.$showGutter)) &&
                            this.$gutterLayer.update(n)
                          : (t & this.CHANGE_TEXT || t & this.CHANGE_GUTTER) &&
                            this.$showGutter &&
                            this.$gutterLayer.update(n),
                          t & this.CHANGE_CURSOR &&
                            (this.$cursorLayer.update(n),
                            this.$moveTextAreaToCursor(),
                            this.$highlightGutterLine &&
                              this.$updateGutterLineHighlight()),
                          t & (this.CHANGE_MARKER | this.CHANGE_MARKER_FRONT) &&
                            this.$markerFront.update(n),
                          t & (this.CHANGE_MARKER | this.CHANGE_MARKER_BACK) &&
                            this.$markerBack.update(n),
                          this._signal("afterRender");
                      } else this.$changes |= t;
                    }),
                    (this.$autosize = function () {
                      var t = this.session.getScreenLength() * this.lineHeight,
                        e = this.$maxLines * this.lineHeight,
                        n =
                          Math.max(
                            (this.$minLines || 1) * this.lineHeight,
                            Math.min(e, t)
                          ) +
                          this.scrollMargin.v +
                          (this.$extraHeight || 0);
                      this.$horizScroll && (n += this.scrollBarH.getHeight());
                      var i = t > e;
                      if (
                        n != this.desiredHeight ||
                        this.$size.height != this.desiredHeight ||
                        i != this.$vScroll
                      ) {
                        i != this.$vScroll &&
                          ((this.$vScroll = i), this.scrollBarV.setVisible(i));
                        var r = this.container.clientWidth;
                        (this.container.style.height = n + "px"),
                          this.$updateCachedSize(!0, this.$gutterWidth, r, n),
                          (this.desiredHeight = n),
                          this._signal("autosize");
                      }
                    }),
                    (this.$computeLayerConfig = function () {
                      var t = this.session,
                        e = this.$size,
                        n = e.height <= 2 * this.lineHeight,
                        i = this.session.getScreenLength() * this.lineHeight,
                        r = this.$getLongestLine(),
                        o =
                          !n &&
                          (this.$hScrollBarAlwaysVisible ||
                            e.scrollerWidth - r - 2 * this.$padding < 0),
                        a = this.$horizScroll !== o;
                      a &&
                        ((this.$horizScroll = o),
                        this.scrollBarH.setVisible(o));
                      var s = this.$vScroll;
                      this.$maxLines && this.lineHeight > 1 && this.$autosize();
                      var l = this.scrollTop % this.lineHeight,
                        c = e.scrollerHeight + this.lineHeight,
                        d =
                          !this.$maxLines && this.$scrollPastEnd
                            ? (e.scrollerHeight - this.lineHeight) *
                              this.$scrollPastEnd
                            : 0;
                      i += d;
                      var u = this.scrollMargin;
                      this.session.setScrollTop(
                        Math.max(
                          -u.top,
                          Math.min(
                            this.scrollTop,
                            i - e.scrollerHeight + u.bottom
                          )
                        )
                      ),
                        this.session.setScrollLeft(
                          Math.max(
                            -u.left,
                            Math.min(
                              this.scrollLeft,
                              r + 2 * this.$padding - e.scrollerWidth + u.right
                            )
                          )
                        );
                      var p =
                          !n &&
                          (this.$vScrollBarAlwaysVisible ||
                            e.scrollerHeight - i + d < 0 ||
                            this.scrollTop > u.top),
                        h = s !== p;
                      h && ((this.$vScroll = p), this.scrollBarV.setVisible(p));
                      var f,
                        b,
                        m = Math.ceil(c / this.lineHeight) - 1,
                        g = Math.max(
                          0,
                          Math.round((this.scrollTop - l) / this.lineHeight)
                        ),
                        v = g + m,
                        _ = this.lineHeight;
                      g = t.screenToDocumentRow(g, 0);
                      var y = t.getFoldLine(g);
                      y && (g = y.start.row),
                        (f = t.documentToScreenRow(g, 0)),
                        (b = t.getRowLength(g) * _),
                        (v = Math.min(
                          t.screenToDocumentRow(v, 0),
                          t.getLength() - 1
                        )),
                        (c = e.scrollerHeight + t.getRowLength(v) * _ + b),
                        (l = this.scrollTop - f * _);
                      var M = 0;
                      return (
                        this.layerConfig.width != r &&
                          (M = this.CHANGE_H_SCROLL),
                        (a || h) &&
                          ((M = this.$updateCachedSize(
                            !0,
                            this.gutterWidth,
                            e.width,
                            e.height
                          )),
                          this._signal("scrollbarVisibilityChanged"),
                          h && (r = this.$getLongestLine())),
                        (this.layerConfig = {
                          width: r,
                          padding: this.$padding,
                          firstRow: g,
                          firstRowScreen: f,
                          lastRow: v,
                          lineHeight: _,
                          characterWidth: this.characterWidth,
                          minHeight: c,
                          maxHeight: i,
                          offset: l,
                          gutterOffset: Math.max(
                            0,
                            Math.ceil((l + e.height - e.scrollerHeight) / _)
                          ),
                          height: this.$size.scrollerHeight,
                        }),
                        M
                      );
                    }),
                    (this.$updateLines = function () {
                      var t = this.$changedLines.firstRow,
                        e = this.$changedLines.lastRow;
                      this.$changedLines = null;
                      var n = this.layerConfig;
                      if (!(t > n.lastRow + 1 || e < n.firstRow))
                        return e === 1 / 0
                          ? (this.$showGutter && this.$gutterLayer.update(n),
                            void this.$textLayer.update(n))
                          : (this.$textLayer.updateLines(n, t, e), !0);
                    }),
                    (this.$getLongestLine = function () {
                      var t = this.session.getScreenWidth();
                      return (
                        this.showInvisibles &&
                          !this.session.$useWrapMode &&
                          (t += 1),
                        Math.max(
                          this.$size.scrollerWidth - 2 * this.$padding,
                          Math.round(t * this.characterWidth)
                        )
                      );
                    }),
                    (this.updateFrontMarkers = function () {
                      this.$markerFront.setMarkers(this.session.getMarkers(!0)),
                        this.$loop.schedule(this.CHANGE_MARKER_FRONT);
                    }),
                    (this.updateBackMarkers = function () {
                      this.$markerBack.setMarkers(this.session.getMarkers()),
                        this.$loop.schedule(this.CHANGE_MARKER_BACK);
                    }),
                    (this.addGutterDecoration = function (t, e) {
                      this.$gutterLayer.addGutterDecoration(t, e);
                    }),
                    (this.removeGutterDecoration = function (t, e) {
                      this.$gutterLayer.removeGutterDecoration(t, e);
                    }),
                    (this.updateBreakpoints = function (t) {
                      this.$loop.schedule(this.CHANGE_GUTTER);
                    }),
                    (this.setAnnotations = function (t) {
                      this.$gutterLayer.setAnnotations(t),
                        this.$loop.schedule(this.CHANGE_GUTTER);
                    }),
                    (this.updateCursor = function () {
                      this.$loop.schedule(this.CHANGE_CURSOR);
                    }),
                    (this.hideCursor = function () {
                      this.$cursorLayer.hideCursor();
                    }),
                    (this.showCursor = function () {
                      this.$cursorLayer.showCursor();
                    }),
                    (this.scrollSelectionIntoView = function (t, e, n) {
                      this.scrollCursorIntoView(t, n),
                        this.scrollCursorIntoView(e, n);
                    }),
                    (this.scrollCursorIntoView = function (t, e, n) {
                      if (0 !== this.$size.scrollerHeight) {
                        var i = this.$cursorLayer.getPixelPosition(t),
                          r = i.left,
                          o = i.top,
                          a = (n && n.top) || 0,
                          s = (n && n.bottom) || 0,
                          l = this.$scrollAnimation
                            ? this.session.getScrollTop()
                            : this.scrollTop;
                        l + a > o
                          ? (e &&
                              l + a > o + this.lineHeight &&
                              (o -= e * this.$size.scrollerHeight),
                            0 === o && (o = -this.scrollMargin.top),
                            this.session.setScrollTop(o))
                          : l + this.$size.scrollerHeight - s <
                              o + this.lineHeight &&
                            (e &&
                              l + this.$size.scrollerHeight - s <
                                o - this.lineHeight &&
                              (o += e * this.$size.scrollerHeight),
                            this.session.setScrollTop(
                              o + this.lineHeight - this.$size.scrollerHeight
                            ));
                        var c = this.scrollLeft;
                        c > r
                          ? (r <
                              this.$padding +
                                2 * this.layerConfig.characterWidth &&
                              (r = -this.scrollMargin.left),
                            this.session.setScrollLeft(r))
                          : c + this.$size.scrollerWidth <
                            r + this.characterWidth
                          ? this.session.setScrollLeft(
                              Math.round(
                                r +
                                  this.characterWidth -
                                  this.$size.scrollerWidth
                              )
                            )
                          : c <= this.$padding &&
                            r - c < this.characterWidth &&
                            this.session.setScrollLeft(0);
                      }
                    }),
                    (this.getScrollTop = function () {
                      return this.session.getScrollTop();
                    }),
                    (this.getScrollLeft = function () {
                      return this.session.getScrollLeft();
                    }),
                    (this.getScrollTopRow = function () {
                      return this.scrollTop / this.lineHeight;
                    }),
                    (this.getScrollBottomRow = function () {
                      return Math.max(
                        0,
                        Math.floor(
                          (this.scrollTop + this.$size.scrollerHeight) /
                            this.lineHeight
                        ) - 1
                      );
                    }),
                    (this.scrollToRow = function (t) {
                      this.session.setScrollTop(t * this.lineHeight);
                    }),
                    (this.alignCursor = function (t, e) {
                      "number" == typeof t && (t = { row: t, column: 0 });
                      var n = this.$cursorLayer.getPixelPosition(t),
                        i = this.$size.scrollerHeight - this.lineHeight,
                        r = n.top - i * (e || 0);
                      return this.session.setScrollTop(r), r;
                    }),
                    (this.STEPS = 8),
                    (this.$calcSteps = function (t, e) {
                      var n,
                        i,
                        r = 0,
                        o = this.STEPS,
                        a = [];
                      for (r = 0; r < o; ++r)
                        a.push(
                          ((n = r / this.STEPS),
                          (i = t),
                          (e - t) * (Math.pow(n - 1, 3) + 1) + i)
                        );
                      return a;
                    }),
                    (this.scrollToLine = function (t, e, n, i) {
                      var r = this.$cursorLayer.getPixelPosition({
                        row: t,
                        column: 0,
                      }).top;
                      e && (r -= this.$size.scrollerHeight / 2);
                      var o = this.scrollTop;
                      this.session.setScrollTop(r),
                        !1 !== n && this.animateScrolling(o, i);
                    }),
                    (this.animateScrolling = function (t, e) {
                      var n = this.scrollTop;
                      if (this.$animatedScroll) {
                        var i = this;
                        if (t != n) {
                          if (this.$scrollAnimation) {
                            var r = this.$scrollAnimation.steps;
                            if (r.length && (t = r[0]) == n) return;
                          }
                          var o = i.$calcSteps(t, n);
                          (this.$scrollAnimation = {
                            from: t,
                            to: n,
                            steps: o,
                          }),
                            clearInterval(this.$timer),
                            i.session.setScrollTop(o.shift()),
                            (i.session.$scrollTop = n),
                            (this.$timer = setInterval(function () {
                              o.length
                                ? (i.session.setScrollTop(o.shift()),
                                  (i.session.$scrollTop = n))
                                : null != n
                                ? ((i.session.$scrollTop = -1),
                                  i.session.setScrollTop(n),
                                  (n = null))
                                : ((i.$timer = clearInterval(i.$timer)),
                                  (i.$scrollAnimation = null),
                                  e && e());
                            }, 10));
                        }
                      }
                    }),
                    (this.scrollToY = function (t) {
                      this.scrollTop !== t &&
                        (this.$loop.schedule(this.CHANGE_SCROLL),
                        (this.scrollTop = t));
                    }),
                    (this.scrollToX = function (t) {
                      this.scrollLeft !== t && (this.scrollLeft = t),
                        this.$loop.schedule(this.CHANGE_H_SCROLL);
                    }),
                    (this.scrollTo = function (t, e) {
                      this.session.setScrollTop(e),
                        this.session.setScrollLeft(e);
                    }),
                    (this.scrollBy = function (t, e) {
                      e &&
                        this.session.setScrollTop(
                          this.session.getScrollTop() + e
                        ),
                        t &&
                          this.session.setScrollLeft(
                            this.session.getScrollLeft() + t
                          );
                    }),
                    (this.isScrollableBy = function (t, e) {
                      return (
                        (e < 0 &&
                          this.session.getScrollTop() >=
                            1 - this.scrollMargin.top) ||
                        (e > 0 &&
                          this.session.getScrollTop() +
                            this.$size.scrollerHeight -
                            this.layerConfig.maxHeight <
                            -1 + this.scrollMargin.bottom) ||
                        (t < 0 &&
                          this.session.getScrollLeft() >=
                            1 - this.scrollMargin.left) ||
                        (t > 0 &&
                          this.session.getScrollLeft() +
                            this.$size.scrollerWidth -
                            this.layerConfig.width <
                            -1 + this.scrollMargin.right) ||
                        void 0
                      );
                    }),
                    (this.pixelToScreenCoordinates = function (t, e) {
                      var n = this.scroller.getBoundingClientRect(),
                        i =
                          (t + this.scrollLeft - n.left - this.$padding) /
                          this.characterWidth,
                        r = Math.floor(
                          (e + this.scrollTop - n.top) / this.lineHeight
                        ),
                        o = Math.round(i);
                      return { row: r, column: o, side: i - o > 0 ? 1 : -1 };
                    }),
                    (this.screenToTextCoordinates = function (t, e) {
                      var n = this.scroller.getBoundingClientRect(),
                        i = Math.round(
                          (t + this.scrollLeft - n.left - this.$padding) /
                            this.characterWidth
                        ),
                        r = (e + this.scrollTop - n.top) / this.lineHeight;
                      return this.session.screenToDocumentPosition(
                        r,
                        Math.max(i, 0)
                      );
                    }),
                    (this.textToScreenCoordinates = function (t, e) {
                      var n = this.scroller.getBoundingClientRect(),
                        i = this.session.documentToScreenPosition(t, e),
                        r =
                          this.$padding +
                          Math.round(i.column * this.characterWidth),
                        o = i.row * this.lineHeight;
                      return {
                        pageX: n.left + r - this.scrollLeft,
                        pageY: n.top + o - this.scrollTop,
                      };
                    }),
                    (this.visualizeFocus = function () {
                      r.addCssClass(this.container, "ace_focus");
                    }),
                    (this.visualizeBlur = function () {
                      r.removeCssClass(this.container, "ace_focus");
                    }),
                    (this.showComposition = function (t) {
                      this.$composition ||
                        (this.$composition = {
                          keepTextAreaAtCursor: this.$keepTextAreaAtCursor,
                          cssText: this.textarea.style.cssText,
                        }),
                        (this.$keepTextAreaAtCursor = !0),
                        r.addCssClass(this.textarea, "ace_composition"),
                        (this.textarea.style.cssText = ""),
                        this.$moveTextAreaToCursor();
                    }),
                    (this.setCompositionText = function (t) {
                      this.$moveTextAreaToCursor();
                    }),
                    (this.hideComposition = function () {
                      this.$composition &&
                        (r.removeCssClass(this.textarea, "ace_composition"),
                        (this.$keepTextAreaAtCursor =
                          this.$composition.keepTextAreaAtCursor),
                        (this.textarea.style.cssText =
                          this.$composition.cssText),
                        (this.$composition = null));
                    }),
                    (this.setTheme = function (t, e) {
                      var n = this;
                      if (
                        ((this.$themeId = t),
                        n._dispatchEvent("themeChange", { theme: t }),
                        t && "string" != typeof t)
                      )
                        a(t);
                      else {
                        var i = t || this.$options.theme.initialValue;
                        o.loadModule(["theme", i], a);
                      }
                      function a(i) {
                        if (n.$themeId != t) return e && e();
                        if (i.cssClass) {
                          r.importCssString(
                            i.cssText,
                            i.cssClass,
                            n.container.ownerDocument
                          ),
                            n.theme &&
                              r.removeCssClass(n.container, n.theme.cssClass);
                          var o =
                            "padding" in i
                              ? i.padding
                              : "padding" in (n.theme || {})
                              ? 4
                              : n.$padding;
                          n.$padding && o != n.$padding && n.setPadding(o),
                            (n.$theme = i.cssClass),
                            (n.theme = i),
                            r.addCssClass(n.container, i.cssClass),
                            r.setCssClass(n.container, "ace_dark", i.isDark),
                            n.$size &&
                              ((n.$size.width = 0), n.$updateSizeAsync()),
                            n._dispatchEvent("themeLoaded", { theme: i }),
                            e && e();
                        }
                      }
                    }),
                    (this.getTheme = function () {
                      return this.$themeId;
                    }),
                    (this.setStyle = function (t, e) {
                      r.setCssClass(this.container, t, !1 !== e);
                    }),
                    (this.unsetStyle = function (t) {
                      r.removeCssClass(this.container, t);
                    }),
                    (this.setCursorStyle = function (t) {
                      this.scroller.style.cursor != t &&
                        (this.scroller.style.cursor = t);
                    }),
                    (this.setMouseCursor = function (t) {
                      this.scroller.style.cursor = t;
                    }),
                    (this.destroy = function () {
                      this.$textLayer.destroy(), this.$cursorLayer.destroy();
                    });
                }).call(m.prototype),
                  o.defineOptions(m.prototype, "renderer", {
                    animatedScroll: { initialValue: !1 },
                    showInvisibles: {
                      set: function (t) {
                        this.$textLayer.setShowInvisibles(t) &&
                          this.$loop.schedule(this.CHANGE_TEXT);
                      },
                      initialValue: !1,
                    },
                    showPrintMargin: {
                      set: function () {
                        this.$updatePrintMargin();
                      },
                      initialValue: !0,
                    },
                    printMarginColumn: {
                      set: function () {
                        this.$updatePrintMargin();
                      },
                      initialValue: 80,
                    },
                    printMargin: {
                      set: function (t) {
                        "number" == typeof t && (this.$printMarginColumn = t),
                          (this.$showPrintMargin = !!t),
                          this.$updatePrintMargin();
                      },
                      get: function () {
                        return this.$showPrintMargin && this.$printMarginColumn;
                      },
                    },
                    showGutter: {
                      set: function (t) {
                        (this.$gutter.style.display = t ? "block" : "none"),
                          this.$loop.schedule(this.CHANGE_FULL),
                          this.onGutterResize();
                      },
                      initialValue: !0,
                    },
                    fadeFoldWidgets: {
                      set: function (t) {
                        r.setCssClass(this.$gutter, "ace_fade-fold-widgets", t);
                      },
                      initialValue: !1,
                    },
                    showFoldWidgets: {
                      set: function (t) {
                        this.$gutterLayer.setShowFoldWidgets(t);
                      },
                      initialValue: !0,
                    },
                    showLineNumbers: {
                      set: function (t) {
                        this.$gutterLayer.setShowLineNumbers(t),
                          this.$loop.schedule(this.CHANGE_GUTTER);
                      },
                      initialValue: !0,
                    },
                    displayIndentGuides: {
                      set: function (t) {
                        this.$textLayer.setDisplayIndentGuides(t) &&
                          this.$loop.schedule(this.CHANGE_TEXT);
                      },
                      initialValue: !0,
                    },
                    highlightGutterLine: {
                      set: function (t) {
                        if (!this.$gutterLineHighlight)
                          return (
                            (this.$gutterLineHighlight =
                              r.createElement("div")),
                            (this.$gutterLineHighlight.className =
                              "ace_gutter-active-line"),
                            void this.$gutter.appendChild(
                              this.$gutterLineHighlight
                            )
                          );
                        (this.$gutterLineHighlight.style.display = t
                          ? ""
                          : "none"),
                          this.$cursorLayer.$pixelPos &&
                            this.$updateGutterLineHighlight();
                      },
                      initialValue: !1,
                      value: !0,
                    },
                    hScrollBarAlwaysVisible: {
                      set: function (t) {
                        (this.$hScrollBarAlwaysVisible && this.$horizScroll) ||
                          this.$loop.schedule(this.CHANGE_SCROLL);
                      },
                      initialValue: !1,
                    },
                    vScrollBarAlwaysVisible: {
                      set: function (t) {
                        (this.$vScrollBarAlwaysVisible && this.$vScroll) ||
                          this.$loop.schedule(this.CHANGE_SCROLL);
                      },
                      initialValue: !1,
                    },
                    fontSize: {
                      set: function (t) {
                        "number" == typeof t && (t += "px"),
                          (this.container.style.fontSize = t),
                          this.updateFontSize();
                      },
                      initialValue: 12,
                    },
                    fontFamily: {
                      set: function (t) {
                        (this.container.style.fontFamily = t),
                          this.updateFontSize();
                      },
                    },
                    maxLines: {
                      set: function (t) {
                        this.updateFull();
                      },
                    },
                    minLines: {
                      set: function (t) {
                        this.updateFull();
                      },
                    },
                    scrollPastEnd: {
                      set: function (t) {
                        (t = +t || 0),
                          this.$scrollPastEnd != t &&
                            ((this.$scrollPastEnd = t),
                            this.$loop.schedule(this.CHANGE_SCROLL));
                      },
                      initialValue: 0,
                      handlesSet: !0,
                    },
                    fixedWidthGutter: {
                      set: function (t) {
                        (this.$gutterLayer.$fixedWidth = !!t),
                          this.$loop.schedule(this.CHANGE_GUTTER);
                      },
                    },
                    theme: {
                      set: function (t) {
                        this.setTheme(t);
                      },
                      get: function () {
                        return this.$themeId || this.theme;
                      },
                      initialValue: "./theme/textmate",
                      handlesSet: !0,
                    },
                  }),
                  (e.VirtualRenderer = m);
              }
            ),
            ace.define(
              "ace/worker/worker_client",
              [
                "require",
                "exports",
                "module",
                "ace/lib/oop",
                "ace/lib/net",
                "ace/lib/event_emitter",
                "ace/config",
              ],
              function (t, e, i) {
                "use strict";
                var r = t("../lib/oop"),
                  o = t("../lib/net"),
                  a = t("../lib/event_emitter").EventEmitter,
                  s = t("../config"),
                  l = function (e, i, r, o) {
                    if (
                      ((this.$sendDeltaQueue = this.$sendDeltaQueue.bind(this)),
                      (this.changeListener = this.changeListener.bind(this)),
                      (this.onMessage = this.onMessage.bind(this)),
                      t.nameToUrl && !t.toUrl && (t.toUrl = t.nameToUrl),
                      s.get("packaged") || !t.toUrl)
                    )
                      o = o || s.moduleUrl(i.id, "worker");
                    else {
                      var a = this.$normalizePath;
                      o = o || a(t.toUrl("ace/worker/worker.js", null, "_"));
                      var l = {};
                      e.forEach(function (e) {
                        l[e] = a(
                          t.toUrl(e, null, "_").replace(/(\.js)?(\?.*)?$/, "")
                        );
                      });
                    }
                    try {
                      var c = i.src,
                        d = new (n(66))([c], {
                          type: "application/javascript",
                        }),
                        u = (window.URL || window.webkitURL).createObjectURL(d);
                      this.$worker = new Worker(u);
                    } catch (t) {
                      if (!(t instanceof window.DOMException)) throw t;
                      d = this.$workerBlob(o);
                      var p = window.URL || window.webkitURL,
                        h = p.createObjectURL(d);
                      (this.$worker = new Worker(h)), p.revokeObjectURL(h);
                    }
                    this.$worker.postMessage({
                      init: !0,
                      tlns: l,
                      module: i.id,
                      classname: r,
                    }),
                      (this.callbackId = 1),
                      (this.callbacks = {}),
                      (this.$worker.onmessage = this.onMessage);
                  };
                (function () {
                  r.implement(this, a),
                    (this.onMessage = function (t) {
                      var e = t.data;
                      switch (e.type) {
                        case "event":
                          this._signal(e.name, { data: e.data });
                          break;
                        case "call":
                          var n = this.callbacks[e.id];
                          n && (n(e.data), delete this.callbacks[e.id]);
                          break;
                        case "error":
                          this.reportError(e.data);
                          break;
                        case "log":
                          window.console && console.log;
                      }
                    }),
                    (this.reportError = function (t) {
                      window.console && console.error;
                    }),
                    (this.$normalizePath = function (t) {
                      return o.qualifyURL(t);
                    }),
                    (this.terminate = function () {
                      this._signal("terminate", {}),
                        (this.deltaQueue = null),
                        this.$worker.terminate(),
                        (this.$worker = null),
                        this.$doc &&
                          this.$doc.off("change", this.changeListener),
                        (this.$doc = null);
                    }),
                    (this.send = function (t, e) {
                      this.$worker.postMessage({ command: t, args: e });
                    }),
                    (this.call = function (t, e, n) {
                      if (n) {
                        var i = this.callbackId++;
                        (this.callbacks[i] = n), e.push(i);
                      }
                      this.send(t, e);
                    }),
                    (this.emit = function (t, e) {
                      try {
                        this.$worker.postMessage({
                          event: t,
                          data: { data: e.data },
                        });
                      } catch (t) {}
                    }),
                    (this.attachToDocument = function (t) {
                      this.$doc && this.terminate(),
                        (this.$doc = t),
                        this.call("setValue", [t.getValue()]),
                        t.on("change", this.changeListener);
                    }),
                    (this.changeListener = function (t) {
                      this.deltaQueue ||
                        ((this.deltaQueue = []),
                        setTimeout(this.$sendDeltaQueue, 0)),
                        "insert" == t.action
                          ? this.deltaQueue.push(t.start, t.lines)
                          : this.deltaQueue.push(t.start, t.end);
                    }),
                    (this.$sendDeltaQueue = function () {
                      var t = this.deltaQueue;
                      t &&
                        ((this.deltaQueue = null),
                        t.length > 50 && t.length > this.$doc.getLength() >> 1
                          ? this.call("setValue", [this.$doc.getValue()])
                          : this.emit("change", { data: t }));
                    }),
                    (this.$workerBlob = function (t) {
                      var e = "importScripts('" + o.qualifyURL(t) + "');";
                      try {
                        return new Blob([e], {
                          type: "application/javascript",
                        });
                      } catch (t) {
                        var n = new (window.BlobBuilder ||
                          window.WebKitBlobBuilder ||
                          window.MozBlobBuilder)();
                        return n.append(e), n.getBlob("application/javascript");
                      }
                    });
                }).call(l.prototype);
                var c = function (t, e, n) {
                  (this.$sendDeltaQueue = this.$sendDeltaQueue.bind(this)),
                    (this.changeListener = this.changeListener.bind(this)),
                    (this.callbackId = 1),
                    (this.callbacks = {}),
                    (this.messageBuffer = []);
                  var i = null,
                    r = !1,
                    o = Object.create(a),
                    l = this;
                  (this.$worker = {}),
                    (this.$worker.terminate = function () {}),
                    (this.$worker.postMessage = function (t) {
                      l.messageBuffer.push(t), i && (r ? setTimeout(c) : c());
                    }),
                    (this.setEmitSync = function (t) {
                      r = t;
                    });
                  var c = function () {
                    var t = l.messageBuffer.shift();
                    t.command
                      ? i[t.command].apply(i, t.args)
                      : t.event && o._signal(t.event, t.data);
                  };
                  (o.postMessage = function (t) {
                    l.onMessage({ data: t });
                  }),
                    (o.callback = function (t, e) {
                      this.postMessage({ type: "call", id: e, data: t });
                    }),
                    (o.emit = function (t, e) {
                      this.postMessage({ type: "event", name: t, data: e });
                    }),
                    s.loadModule(["worker", e], function (t) {
                      for (i = new t[n](o); l.messageBuffer.length; ) c();
                    });
                };
                (c.prototype = l.prototype),
                  (e.UIWorkerClient = c),
                  (e.WorkerClient = l);
              }
            ),
            ace.define(
              "ace/placeholder",
              [
                "require",
                "exports",
                "module",
                "ace/range",
                "ace/lib/event_emitter",
                "ace/lib/oop",
              ],
              function (t, e, n) {
                "use strict";
                var i = t("./range").Range,
                  r = t("./lib/event_emitter").EventEmitter,
                  o = t("./lib/oop"),
                  a = function (t, e, n, i, r, o) {
                    var a = this;
                    (this.length = e),
                      (this.session = t),
                      (this.doc = t.getDocument()),
                      (this.mainClass = r),
                      (this.othersClass = o),
                      (this.$onUpdate = this.onUpdate.bind(this)),
                      this.doc.on("change", this.$onUpdate),
                      (this.$others = i),
                      (this.$onCursorChange = function () {
                        setTimeout(function () {
                          a.onCursorChange();
                        });
                      }),
                      (this.$pos = n);
                    var s = t.getUndoManager().$undoStack ||
                      t.getUndoManager().$undostack || { length: -1 };
                    (this.$undoStackDepth = s.length),
                      this.setup(),
                      t.selection.on("changeCursor", this.$onCursorChange);
                  };
                (function () {
                  o.implement(this, r),
                    (this.setup = function () {
                      var t = this,
                        e = this.doc,
                        n = this.session;
                      (this.selectionBefore = n.selection.toJSON()),
                        n.selection.inMultiSelectMode &&
                          n.selection.toSingleRange(),
                        (this.pos = e.createAnchor(
                          this.$pos.row,
                          this.$pos.column
                        ));
                      var r = this.pos;
                      (r.$insertRight = !0),
                        r.detach(),
                        (r.markerId = n.addMarker(
                          new i(r.row, r.column, r.row, r.column + this.length),
                          this.mainClass,
                          null,
                          !1
                        )),
                        (this.others = []),
                        this.$others.forEach(function (n) {
                          var i = e.createAnchor(n.row, n.column);
                          (i.$insertRight = !0), i.detach(), t.others.push(i);
                        }),
                        n.setUndoSelect(!1);
                    }),
                    (this.showOtherMarkers = function () {
                      if (!this.othersActive) {
                        var t = this.session,
                          e = this;
                        (this.othersActive = !0),
                          this.others.forEach(function (n) {
                            n.markerId = t.addMarker(
                              new i(
                                n.row,
                                n.column,
                                n.row,
                                n.column + e.length
                              ),
                              e.othersClass,
                              null,
                              !1
                            );
                          });
                      }
                    }),
                    (this.hideOtherMarkers = function () {
                      if (this.othersActive) {
                        this.othersActive = !1;
                        for (var t = 0; t < this.others.length; t++)
                          this.session.removeMarker(this.others[t].markerId);
                      }
                    }),
                    (this.onUpdate = function (t) {
                      if (this.$updating) return this.updateAnchors(t);
                      var e = t;
                      if (
                        e.start.row === e.end.row &&
                        e.start.row === this.pos.row
                      ) {
                        this.$updating = !0;
                        var n =
                            "insert" === t.action
                              ? e.end.column - e.start.column
                              : e.start.column - e.end.column,
                          r =
                            e.start.column >= this.pos.column &&
                            e.start.column <= this.pos.column + this.length + 1,
                          o = e.start.column - this.pos.column;
                        if (
                          (this.updateAnchors(t),
                          r && (this.length += n),
                          r && !this.session.$fromUndo)
                        )
                          if ("insert" === t.action)
                            for (var a = this.others.length - 1; a >= 0; a--) {
                              var s = {
                                row: (l = this.others[a]).row,
                                column: l.column + o,
                              };
                              this.doc.insertMergedLines(s, t.lines);
                            }
                          else if ("remove" === t.action)
                            for (a = this.others.length - 1; a >= 0; a--) {
                              var l;
                              (s = {
                                row: (l = this.others[a]).row,
                                column: l.column + o,
                              }),
                                this.doc.remove(
                                  new i(s.row, s.column, s.row, s.column - n)
                                );
                            }
                        (this.$updating = !1), this.updateMarkers();
                      }
                    }),
                    (this.updateAnchors = function (t) {
                      this.pos.onChange(t);
                      for (var e = this.others.length; e--; )
                        this.others[e].onChange(t);
                      this.updateMarkers();
                    }),
                    (this.updateMarkers = function () {
                      if (!this.$updating) {
                        var t = this,
                          e = this.session,
                          n = function (n, r) {
                            e.removeMarker(n.markerId),
                              (n.markerId = e.addMarker(
                                new i(
                                  n.row,
                                  n.column,
                                  n.row,
                                  n.column + t.length
                                ),
                                r,
                                null,
                                !1
                              ));
                          };
                        n(this.pos, this.mainClass);
                        for (var r = this.others.length; r--; )
                          n(this.others[r], this.othersClass);
                      }
                    }),
                    (this.onCursorChange = function (t) {
                      if (!this.$updating && this.session) {
                        var e = this.session.selection.getCursor();
                        e.row === this.pos.row &&
                        e.column >= this.pos.column &&
                        e.column <= this.pos.column + this.length
                          ? (this.showOtherMarkers(),
                            this._emit("cursorEnter", t))
                          : (this.hideOtherMarkers(),
                            this._emit("cursorLeave", t));
                      }
                    }),
                    (this.detach = function () {
                      this.session.removeMarker(this.pos && this.pos.markerId),
                        this.hideOtherMarkers(),
                        this.doc.removeEventListener("change", this.$onUpdate),
                        this.session.selection.removeEventListener(
                          "changeCursor",
                          this.$onCursorChange
                        ),
                        this.session.setUndoSelect(!0),
                        (this.session = null);
                    }),
                    (this.cancel = function () {
                      if (-1 !== this.$undoStackDepth) {
                        for (
                          var t = this.session.getUndoManager(),
                            e =
                              (t.$undoStack || t.$undostack).length -
                              this.$undoStackDepth,
                            n = 0;
                          n < e;
                          n++
                        )
                          t.undo(!0);
                        this.selectionBefore &&
                          this.session.selection.fromJSON(this.selectionBefore);
                      }
                    });
                }).call(a.prototype),
                  (e.PlaceHolder = a);
              }
            ),
            ace.define(
              "ace/mouse/multi_select_handler",
              [
                "require",
                "exports",
                "module",
                "ace/lib/event",
                "ace/lib/useragent",
              ],
              function (t, e, n) {
                var i = t("../lib/event"),
                  r = t("../lib/useragent");
                function o(t, e) {
                  return t.row == e.row && t.column == e.column;
                }
                e.onMouseDown = function (t) {
                  var e = t.domEvent,
                    n = e.altKey,
                    a = e.shiftKey,
                    s = e.ctrlKey,
                    l = t.getAccelKey(),
                    c = t.getButton();
                  if (
                    (s && r.isMac && (c = e.button),
                    t.editor.inMultiSelectMode && 2 == c)
                  )
                    t.editor.textInput.onContextMenu(t.domEvent);
                  else if (s || n || l) {
                    if (0 === c) {
                      var d,
                        u = t.editor,
                        p = u.selection,
                        h = u.inMultiSelectMode,
                        f = t.getDocumentPosition(),
                        b = p.getCursor(),
                        m = t.inSelection() || (p.isEmpty() && o(f, b)),
                        g = t.x,
                        v = t.y,
                        _ = u.session,
                        y = u.renderer.pixelToScreenCoordinates(g, v),
                        M = y;
                      if (u.$mouseHandler.$enableJumpToDef)
                        (s && n) || (l && n)
                          ? (d = a ? "block" : "add")
                          : n && u.$blockSelectEnabled && (d = "block");
                      else if (l && !n) {
                        if (((d = "add"), !h && a)) return;
                      } else n && u.$blockSelectEnabled && (d = "block");
                      if (
                        (d &&
                          r.isMac &&
                          e.ctrlKey &&
                          u.$mouseHandler.cancelContextMenu(),
                        "add" == d)
                      ) {
                        if (!h && m) return;
                        if (!h) {
                          var O = p.toOrientedRange();
                          u.addSelectionMarker(O);
                        }
                        var w = p.rangeList.rangeAtPoint(f);
                        u.$blockScrolling++,
                          (u.inVirtualSelectionMode = !0),
                          a &&
                            ((w = null),
                            (O = p.ranges[0] || O),
                            u.removeSelectionMarker(O)),
                          u.once("mouseup", function () {
                            var t = p.toOrientedRange();
                            w && t.isEmpty() && o(w.cursor, t.cursor)
                              ? p.substractPoint(t.cursor)
                              : (a
                                  ? p.substractPoint(O.cursor)
                                  : O &&
                                    (u.removeSelectionMarker(O), p.addRange(O)),
                                p.addRange(t)),
                              u.$blockScrolling--,
                              (u.inVirtualSelectionMode = !1);
                          });
                      } else if ("block" == d) {
                        var A;
                        t.stop(), (u.inVirtualSelectionMode = !0);
                        var x = [];
                        u.$blockScrolling++,
                          h && !l
                            ? p.toSingleRange()
                            : !h &&
                              l &&
                              ((A = p.toOrientedRange()),
                              u.addSelectionMarker(A)),
                          a
                            ? (y = _.documentToScreenPosition(p.lead))
                            : p.moveToPosition(f),
                          u.$blockScrolling--,
                          (M = { row: -1, column: -1 }),
                          i.capture(
                            u.container,
                            function (t) {
                              (g = t.clientX), (v = t.clientY);
                            },
                            function (t) {
                              clearInterval(z),
                                u.removeSelectionMarkers(x),
                                x.length || (x = [p.toOrientedRange()]),
                                u.$blockScrolling++,
                                A &&
                                  (u.removeSelectionMarker(A),
                                  p.toSingleRange(A));
                              for (var e = 0; e < x.length; e++)
                                p.addRange(x[e]);
                              (u.inVirtualSelectionMode = !1),
                                (u.$mouseHandler.$clickSelection = null),
                                u.$blockScrolling--;
                            }
                          );
                        var z = setInterval(function () {
                          !(function () {
                            var t = u.renderer.pixelToScreenCoordinates(g, v),
                              e = _.screenToDocumentPosition(t.row, t.column);
                            (o(M, t) && o(e, p.lead)) ||
                              ((M = t),
                              u.$blockScrolling++,
                              u.selection.moveToPosition(e),
                              u.renderer.scrollCursorIntoView(),
                              u.removeSelectionMarkers(x),
                              (x = p.rectangularRangeBlock(M, y)),
                              u.$mouseHandler.$clickSelection &&
                                1 == x.length &&
                                x[0].isEmpty() &&
                                (x[0] =
                                  u.$mouseHandler.$clickSelection.clone()),
                              x.forEach(u.addSelectionMarker, u),
                              u.updateSelectionMarkers(),
                              u.$blockScrolling--);
                          })();
                        }, 20);
                        return t.preventDefault();
                      }
                    }
                  } else
                    0 === c &&
                      t.editor.inMultiSelectMode &&
                      t.editor.exitMultiSelectMode();
                };
              }
            ),
            ace.define(
              "ace/commands/multi_select_commands",
              ["require", "exports", "module", "ace/keyboard/hash_handler"],
              function (t, e, n) {
                (e.defaultCommands = [
                  {
                    name: "addCursorAbove",
                    exec: function (t) {
                      t.selectMoreLines(-1);
                    },
                    bindKey: { win: "Ctrl-Alt-Up", mac: "Ctrl-Alt-Up" },
                    scrollIntoView: "cursor",
                    readOnly: !0,
                  },
                  {
                    name: "addCursorBelow",
                    exec: function (t) {
                      t.selectMoreLines(1);
                    },
                    bindKey: { win: "Ctrl-Alt-Down", mac: "Ctrl-Alt-Down" },
                    scrollIntoView: "cursor",
                    readOnly: !0,
                  },
                  {
                    name: "addCursorAboveSkipCurrent",
                    exec: function (t) {
                      t.selectMoreLines(-1, !0);
                    },
                    bindKey: {
                      win: "Ctrl-Alt-Shift-Up",
                      mac: "Ctrl-Alt-Shift-Up",
                    },
                    scrollIntoView: "cursor",
                    readOnly: !0,
                  },
                  {
                    name: "addCursorBelowSkipCurrent",
                    exec: function (t) {
                      t.selectMoreLines(1, !0);
                    },
                    bindKey: {
                      win: "Ctrl-Alt-Shift-Down",
                      mac: "Ctrl-Alt-Shift-Down",
                    },
                    scrollIntoView: "cursor",
                    readOnly: !0,
                  },
                  {
                    name: "selectMoreBefore",
                    exec: function (t) {
                      t.selectMore(-1);
                    },
                    bindKey: { win: "Ctrl-Alt-Left", mac: "Ctrl-Alt-Left" },
                    scrollIntoView: "cursor",
                    readOnly: !0,
                  },
                  {
                    name: "selectMoreAfter",
                    exec: function (t) {
                      t.selectMore(1);
                    },
                    bindKey: { win: "Ctrl-Alt-Right", mac: "Ctrl-Alt-Right" },
                    scrollIntoView: "cursor",
                    readOnly: !0,
                  },
                  {
                    name: "selectNextBefore",
                    exec: function (t) {
                      t.selectMore(-1, !0);
                    },
                    bindKey: {
                      win: "Ctrl-Alt-Shift-Left",
                      mac: "Ctrl-Alt-Shift-Left",
                    },
                    scrollIntoView: "cursor",
                    readOnly: !0,
                  },
                  {
                    name: "selectNextAfter",
                    exec: function (t) {
                      t.selectMore(1, !0);
                    },
                    bindKey: {
                      win: "Ctrl-Alt-Shift-Right",
                      mac: "Ctrl-Alt-Shift-Right",
                    },
                    scrollIntoView: "cursor",
                    readOnly: !0,
                  },
                  {
                    name: "splitIntoLines",
                    exec: function (t) {
                      t.multiSelect.splitIntoLines();
                    },
                    bindKey: { win: "Ctrl-Alt-L", mac: "Ctrl-Alt-L" },
                    readOnly: !0,
                  },
                  {
                    name: "alignCursors",
                    exec: function (t) {
                      t.alignCursors();
                    },
                    bindKey: { win: "Ctrl-Alt-A", mac: "Ctrl-Alt-A" },
                    scrollIntoView: "cursor",
                  },
                  {
                    name: "findAll",
                    exec: function (t) {
                      t.findAll();
                    },
                    bindKey: { win: "Ctrl-Alt-K", mac: "Ctrl-Alt-G" },
                    scrollIntoView: "cursor",
                    readOnly: !0,
                  },
                ]),
                  (e.multiSelectCommands = [
                    {
                      name: "singleSelection",
                      bindKey: "esc",
                      exec: function (t) {
                        t.exitMultiSelectMode();
                      },
                      scrollIntoView: "cursor",
                      readOnly: !0,
                      isAvailable: function (t) {
                        return t && t.inMultiSelectMode;
                      },
                    },
                  ]);
                var i = t("../keyboard/hash_handler").HashHandler;
                e.keyboardHandler = new i(e.multiSelectCommands);
              }
            ),
            ace.define(
              "ace/multi_select",
              [
                "require",
                "exports",
                "module",
                "ace/range_list",
                "ace/range",
                "ace/selection",
                "ace/mouse/multi_select_handler",
                "ace/lib/event",
                "ace/lib/lang",
                "ace/commands/multi_select_commands",
                "ace/search",
                "ace/edit_session",
                "ace/editor",
                "ace/config",
              ],
              function (t, e, n) {
                var i = t("./range_list").RangeList,
                  r = t("./range").Range,
                  o = t("./selection").Selection,
                  a = t("./mouse/multi_select_handler").onMouseDown,
                  s = t("./lib/event"),
                  l = t("./lib/lang"),
                  c = t("./commands/multi_select_commands");
                e.commands = c.defaultCommands.concat(c.multiSelectCommands);
                var d = new (0, t("./search").Search)(),
                  u = t("./edit_session").EditSession;
                (function () {
                  this.getSelectionMarkers = function () {
                    return this.$selectionMarkers;
                  };
                }).call(u.prototype),
                  function () {
                    (this.ranges = null),
                      (this.rangeList = null),
                      (this.addRange = function (t, e) {
                        if (t) {
                          if (
                            !this.inMultiSelectMode &&
                            0 === this.rangeCount
                          ) {
                            var n = this.toOrientedRange();
                            if (
                              (this.rangeList.add(n),
                              this.rangeList.add(t),
                              2 != this.rangeList.ranges.length)
                            )
                              return (
                                this.rangeList.removeAll(),
                                e || this.fromOrientedRange(t)
                              );
                            this.rangeList.removeAll(),
                              this.rangeList.add(n),
                              this.$onAddRange(n);
                          }
                          t.cursor || (t.cursor = t.end);
                          var i = this.rangeList.add(t);
                          return (
                            this.$onAddRange(t),
                            i.length && this.$onRemoveRange(i),
                            this.rangeCount > 1 &&
                              !this.inMultiSelectMode &&
                              (this._signal("multiSelect"),
                              (this.inMultiSelectMode = !0),
                              (this.session.$undoSelect = !1),
                              this.rangeList.attach(this.session)),
                            e || this.fromOrientedRange(t)
                          );
                        }
                      }),
                      (this.toSingleRange = function (t) {
                        t = t || this.ranges[0];
                        var e = this.rangeList.removeAll();
                        e.length && this.$onRemoveRange(e),
                          t && this.fromOrientedRange(t);
                      }),
                      (this.substractPoint = function (t) {
                        var e = this.rangeList.substractPoint(t);
                        if (e) return this.$onRemoveRange(e), e[0];
                      }),
                      (this.mergeOverlappingRanges = function () {
                        var t = this.rangeList.merge();
                        t.length
                          ? this.$onRemoveRange(t)
                          : this.ranges[0] &&
                            this.fromOrientedRange(this.ranges[0]);
                      }),
                      (this.$onAddRange = function (t) {
                        (this.rangeCount = this.rangeList.ranges.length),
                          this.ranges.unshift(t),
                          this._signal("addRange", { range: t });
                      }),
                      (this.$onRemoveRange = function (t) {
                        if (
                          ((this.rangeCount = this.rangeList.ranges.length),
                          1 == this.rangeCount && this.inMultiSelectMode)
                        ) {
                          var e = this.rangeList.ranges.pop();
                          t.push(e), (this.rangeCount = 0);
                        }
                        for (var n = t.length; n--; ) {
                          var i = this.ranges.indexOf(t[n]);
                          this.ranges.splice(i, 1);
                        }
                        this._signal("removeRange", { ranges: t }),
                          0 === this.rangeCount &&
                            this.inMultiSelectMode &&
                            ((this.inMultiSelectMode = !1),
                            this._signal("singleSelect"),
                            (this.session.$undoSelect = !0),
                            this.rangeList.detach(this.session)),
                          (e = e || this.ranges[0]) &&
                            !e.isEqual(this.getRange()) &&
                            this.fromOrientedRange(e);
                      }),
                      (this.$initRangeList = function () {
                        this.rangeList ||
                          ((this.rangeList = new i()),
                          (this.ranges = []),
                          (this.rangeCount = 0));
                      }),
                      (this.getAllRanges = function () {
                        return this.rangeCount
                          ? this.rangeList.ranges.concat()
                          : [this.getRange()];
                      }),
                      (this.splitIntoLines = function () {
                        if (this.rangeCount > 1) {
                          var t = this.rangeList.ranges,
                            e = t[t.length - 1],
                            n = r.fromPoints(t[0].start, e.end);
                          this.toSingleRange(),
                            this.setSelectionRange(n, e.cursor == e.start);
                        } else {
                          n = this.getRange();
                          var i = this.isBackwards(),
                            o = n.start.row,
                            a = n.end.row;
                          if (o == a) {
                            if (i)
                              var s = n.end,
                                l = n.start;
                            else (s = n.start), (l = n.end);
                            return (
                              this.addRange(r.fromPoints(l, l)),
                              void this.addRange(r.fromPoints(s, s))
                            );
                          }
                          var c = [],
                            d = this.getLineRange(o, !0);
                          (d.start.column = n.start.column), c.push(d);
                          for (var u = o + 1; u < a; u++)
                            c.push(this.getLineRange(u, !0));
                          ((d = this.getLineRange(a, !0)).end.column =
                            n.end.column),
                            c.push(d),
                            c.forEach(this.addRange, this);
                        }
                      }),
                      (this.toggleBlockSelection = function () {
                        if (this.rangeCount > 1) {
                          var t = this.rangeList.ranges,
                            e = t[t.length - 1],
                            n = r.fromPoints(t[0].start, e.end);
                          this.toSingleRange(),
                            this.setSelectionRange(n, e.cursor == e.start);
                        } else {
                          var i = this.session.documentToScreenPosition(
                              this.selectionLead
                            ),
                            o = this.session.documentToScreenPosition(
                              this.selectionAnchor
                            );
                          this.rectangularRangeBlock(i, o).forEach(
                            this.addRange,
                            this
                          );
                        }
                      }),
                      (this.rectangularRangeBlock = function (t, e, n) {
                        var i = [],
                          o = t.column < e.column;
                        if (o)
                          var a = t.column,
                            s = e.column;
                        else (a = e.column), (s = t.column);
                        var l,
                          c,
                          d = t.row < e.row;
                        if (d)
                          var u = t.row,
                            p = e.row;
                        else (u = e.row), (p = t.row);
                        a < 0 && (a = 0), u < 0 && (u = 0), u == p && (n = !0);
                        for (var h = u; h <= p; h++) {
                          var f = r.fromPoints(
                            this.session.screenToDocumentPosition(h, a),
                            this.session.screenToDocumentPosition(h, s)
                          );
                          if (f.isEmpty()) {
                            if (
                              b &&
                              ((c = b),
                              (l = f.end).row == c.row && l.column == c.column)
                            )
                              break;
                            var b = f.end;
                          }
                          (f.cursor = o ? f.start : f.end), i.push(f);
                        }
                        if ((d && i.reverse(), !n)) {
                          for (var m = i.length - 1; i[m].isEmpty() && m > 0; )
                            m--;
                          if (m > 0) for (var g = 0; i[g].isEmpty(); ) g++;
                          for (var v = m; v >= g; v--)
                            i[v].isEmpty() && i.splice(v, 1);
                        }
                        return i;
                      });
                  }.call(o.prototype);
                var p = t("./editor").Editor;
                function h(t) {
                  t.$multiselectOnSessionChange ||
                    ((t.$onAddRange = t.$onAddRange.bind(t)),
                    (t.$onRemoveRange = t.$onRemoveRange.bind(t)),
                    (t.$onMultiSelect = t.$onMultiSelect.bind(t)),
                    (t.$onSingleSelect = t.$onSingleSelect.bind(t)),
                    (t.$multiselectOnSessionChange = e.onSessionChange.bind(t)),
                    (t.$checkMultiselectChange =
                      t.$checkMultiselectChange.bind(t)),
                    t.$multiselectOnSessionChange(t),
                    t.on("changeSession", t.$multiselectOnSessionChange),
                    t.on("mousedown", a),
                    t.commands.addCommands(c.defaultCommands),
                    (function (t) {
                      var e = t.textInput.getElement(),
                        n = !1;
                      function i(e) {
                        n && (t.renderer.setMouseCursor(""), (n = !1));
                      }
                      s.addListener(e, "keydown", function (e) {
                        var r =
                          18 == e.keyCode &&
                          !(e.ctrlKey || e.shiftKey || e.metaKey);
                        t.$blockSelectEnabled && r
                          ? n ||
                            (t.renderer.setMouseCursor("crosshair"), (n = !0))
                          : n && i();
                      }),
                        s.addListener(e, "keyup", i),
                        s.addListener(e, "blur", i);
                    })(t));
                }
                (function () {
                  (this.updateSelectionMarkers = function () {
                    this.renderer.updateCursor(),
                      this.renderer.updateBackMarkers();
                  }),
                    (this.addSelectionMarker = function (t) {
                      t.cursor || (t.cursor = t.end);
                      var e = this.getSelectionStyle();
                      return (
                        (t.marker = this.session.addMarker(
                          t,
                          "ace_selection",
                          e
                        )),
                        this.session.$selectionMarkers.push(t),
                        (this.session.selectionMarkerCount =
                          this.session.$selectionMarkers.length),
                        t
                      );
                    }),
                    (this.removeSelectionMarker = function (t) {
                      if (t.marker) {
                        this.session.removeMarker(t.marker);
                        var e = this.session.$selectionMarkers.indexOf(t);
                        -1 != e && this.session.$selectionMarkers.splice(e, 1),
                          (this.session.selectionMarkerCount =
                            this.session.$selectionMarkers.length);
                      }
                    }),
                    (this.removeSelectionMarkers = function (t) {
                      for (
                        var e = this.session.$selectionMarkers, n = t.length;
                        n--;

                      ) {
                        var i = t[n];
                        if (i.marker) {
                          this.session.removeMarker(i.marker);
                          var r = e.indexOf(i);
                          -1 != r && e.splice(r, 1);
                        }
                      }
                      this.session.selectionMarkerCount = e.length;
                    }),
                    (this.$onAddRange = function (t) {
                      this.addSelectionMarker(t.range),
                        this.renderer.updateCursor(),
                        this.renderer.updateBackMarkers();
                    }),
                    (this.$onRemoveRange = function (t) {
                      this.removeSelectionMarkers(t.ranges),
                        this.renderer.updateCursor(),
                        this.renderer.updateBackMarkers();
                    }),
                    (this.$onMultiSelect = function (t) {
                      this.inMultiSelectMode ||
                        ((this.inMultiSelectMode = !0),
                        this.setStyle("ace_multiselect"),
                        this.keyBinding.addKeyboardHandler(c.keyboardHandler),
                        this.commands.setDefaultHandler(
                          "exec",
                          this.$onMultiSelectExec
                        ),
                        this.renderer.updateCursor(),
                        this.renderer.updateBackMarkers());
                    }),
                    (this.$onSingleSelect = function (t) {
                      this.session.multiSelect.inVirtualMode ||
                        ((this.inMultiSelectMode = !1),
                        this.unsetStyle("ace_multiselect"),
                        this.keyBinding.removeKeyboardHandler(
                          c.keyboardHandler
                        ),
                        this.commands.removeDefaultHandler(
                          "exec",
                          this.$onMultiSelectExec
                        ),
                        this.renderer.updateCursor(),
                        this.renderer.updateBackMarkers(),
                        this._emit("changeSelection"));
                    }),
                    (this.$onMultiSelectExec = function (t) {
                      var e = t.command,
                        n = t.editor;
                      if (n.multiSelect) {
                        if (e.multiSelectAction)
                          "forEach" == e.multiSelectAction
                            ? (i = n.forEachSelection(e, t.args))
                            : "forEachLine" == e.multiSelectAction
                            ? (i = n.forEachSelection(e, t.args, !0))
                            : "single" == e.multiSelectAction
                            ? (n.exitMultiSelectMode(),
                              (i = e.exec(n, t.args || {})))
                            : (i = e.multiSelectAction(n, t.args || {}));
                        else {
                          var i = e.exec(n, t.args || {});
                          n.multiSelect.addRange(
                            n.multiSelect.toOrientedRange()
                          ),
                            n.multiSelect.mergeOverlappingRanges();
                        }
                        return i;
                      }
                    }),
                    (this.forEachSelection = function (t, e, n) {
                      if (!this.inVirtualSelectionMode) {
                        var i,
                          r = n && n.keepOrder,
                          a = 1 == n || (n && n.$byLines),
                          s = this.session,
                          l = this.selection,
                          c = l.rangeList,
                          d = (r ? l : c).ranges;
                        if (!d.length)
                          return t.exec
                            ? t.exec(this, e || {})
                            : t(this, e || {});
                        var u = l._eventRegistry;
                        l._eventRegistry = {};
                        var p = new o(s);
                        this.inVirtualSelectionMode = !0;
                        for (var h = d.length; h--; ) {
                          if (a)
                            for (
                              ;
                              h > 0 && d[h].start.row == d[h - 1].end.row;

                            )
                              h--;
                          p.fromOrientedRange(d[h]),
                            (p.index = h),
                            (this.selection = s.selection = p);
                          var f = t.exec
                            ? t.exec(this, e || {})
                            : t(this, e || {});
                          i || void 0 === f || (i = f), p.toOrientedRange(d[h]);
                        }
                        p.detach(),
                          (this.selection = s.selection = l),
                          (this.inVirtualSelectionMode = !1),
                          (l._eventRegistry = u),
                          l.mergeOverlappingRanges();
                        var b = this.renderer.$scrollAnimation;
                        return (
                          this.onCursorChange(),
                          this.onSelectionChange(),
                          b &&
                            b.from == b.to &&
                            this.renderer.animateScrolling(b.from),
                          i
                        );
                      }
                    }),
                    (this.exitMultiSelectMode = function () {
                      this.inMultiSelectMode &&
                        !this.inVirtualSelectionMode &&
                        this.multiSelect.toSingleRange();
                    }),
                    (this.getSelectedText = function () {
                      var t = "";
                      if (
                        this.inMultiSelectMode &&
                        !this.inVirtualSelectionMode
                      ) {
                        for (
                          var e = this.multiSelect.rangeList.ranges,
                            n = [],
                            i = 0;
                          i < e.length;
                          i++
                        )
                          n.push(this.session.getTextRange(e[i]));
                        var r = this.session
                          .getDocument()
                          .getNewLineCharacter();
                        (t = n.join(r)).length == (n.length - 1) * r.length &&
                          (t = "");
                      } else
                        this.selection.isEmpty() ||
                          (t = this.session.getTextRange(
                            this.getSelectionRange()
                          ));
                      return t;
                    }),
                    (this.$checkMultiselectChange = function (t, e) {
                      if (
                        this.inMultiSelectMode &&
                        !this.inVirtualSelectionMode
                      ) {
                        var n = this.multiSelect.ranges[0];
                        if (
                          this.multiSelect.isEmpty() &&
                          e == this.multiSelect.anchor
                        )
                          return;
                        var i =
                          e == this.multiSelect.anchor
                            ? n.cursor == n.start
                              ? n.end
                              : n.start
                            : n.cursor;
                        (i.row == e.row &&
                          this.session.$clipPositionToDocument(i.row, i.column)
                            .column == e.column) ||
                          this.multiSelect.toSingleRange(
                            this.multiSelect.toOrientedRange()
                          );
                      }
                    }),
                    (this.findAll = function (t, e, n) {
                      if (
                        (((e = e || {}).needle = t || e.needle),
                        null == e.needle)
                      ) {
                        var i = this.selection.isEmpty()
                          ? this.selection.getWordRange()
                          : this.selection.getRange();
                        e.needle = this.session.getTextRange(i);
                      }
                      this.$search.set(e);
                      var r = this.$search.findAll(this.session);
                      if (!r.length) return 0;
                      this.$blockScrolling += 1;
                      var o = this.multiSelect;
                      n || o.toSingleRange(r[0]);
                      for (var a = r.length; a--; ) o.addRange(r[a], !0);
                      return (
                        i &&
                          o.rangeList.rangeAtPoint(i.start) &&
                          o.addRange(i, !0),
                        (this.$blockScrolling -= 1),
                        r.length
                      );
                    }),
                    (this.selectMoreLines = function (t, e) {
                      var n = this.selection.toOrientedRange(),
                        i = n.cursor == n.end,
                        o = this.session.documentToScreenPosition(n.cursor);
                      this.selection.$desiredColumn &&
                        (o.column = this.selection.$desiredColumn);
                      var a,
                        s = this.session.screenToDocumentPosition(
                          o.row + t,
                          o.column
                        );
                      if (n.isEmpty()) c = s;
                      else
                        var l = this.session.documentToScreenPosition(
                            i ? n.end : n.start
                          ),
                          c = this.session.screenToDocumentPosition(
                            l.row + t,
                            l.column
                          );
                      if (
                        (i
                          ? ((a = r.fromPoints(s, c)).cursor = a.start)
                          : ((a = r.fromPoints(c, s)).cursor = a.end),
                        (a.desiredColumn = o.column),
                        this.selection.inMultiSelectMode)
                      ) {
                        if (e) var d = n.cursor;
                      } else this.selection.addRange(n);
                      this.selection.addRange(a),
                        d && this.selection.substractPoint(d);
                    }),
                    (this.transposeSelections = function (t) {
                      for (
                        var e = this.session,
                          n = e.multiSelect,
                          i = n.ranges,
                          r = i.length;
                        r--;

                      )
                        if ((s = i[r]).isEmpty()) {
                          var o = e.getWordRange(s.start.row, s.start.column);
                          (s.start.row = o.start.row),
                            (s.start.column = o.start.column),
                            (s.end.row = o.end.row),
                            (s.end.column = o.end.column);
                        }
                      n.mergeOverlappingRanges();
                      var a = [];
                      for (r = i.length; r--; ) {
                        var s = i[r];
                        a.unshift(e.getTextRange(s));
                      }
                      for (
                        t < 0 ? a.unshift(a.pop()) : a.push(a.shift()),
                          r = i.length;
                        r--;

                      )
                        (o = (s = i[r]).clone()),
                          e.replace(s, a[r]),
                          (s.start.row = o.start.row),
                          (s.start.column = o.start.column);
                    }),
                    (this.selectMore = function (t, e, n) {
                      var i = this.session,
                        r = i.multiSelect.toOrientedRange();
                      if (
                        !r.isEmpty() ||
                        (((r = i.getWordRange(
                          r.start.row,
                          r.start.column
                        )).cursor = -1 == t ? r.start : r.end),
                        this.multiSelect.addRange(r),
                        !n)
                      ) {
                        var o = i.getTextRange(r),
                          a = (function (t, e, n) {
                            return (
                              (d.$options.wrap = !0),
                              (d.$options.needle = e),
                              (d.$options.backwards = -1 == n),
                              d.find(t)
                            );
                          })(i, o, t);
                        a &&
                          ((a.cursor = -1 == t ? a.start : a.end),
                          (this.$blockScrolling += 1),
                          this.session.unfold(a),
                          this.multiSelect.addRange(a),
                          (this.$blockScrolling -= 1),
                          this.renderer.scrollCursorIntoView(null, 0.5)),
                          e && this.multiSelect.substractPoint(r.cursor);
                      }
                    }),
                    (this.alignCursors = function () {
                      var t = this.session,
                        e = t.multiSelect,
                        n = e.ranges,
                        i = -1,
                        o = n.filter(function (t) {
                          if (t.cursor.row == i) return !0;
                          i = t.cursor.row;
                        });
                      if (n.length && o.length != n.length - 1) {
                        o.forEach(function (t) {
                          e.substractPoint(t.cursor);
                        });
                        var a = 0,
                          s = 1 / 0,
                          c = n.map(function (e) {
                            var n = e.cursor,
                              i = t
                                .getLine(n.row)
                                .substr(n.column)
                                .search(/\S/g);
                            return (
                              -1 == i && (i = 0),
                              n.column > a && (a = n.column),
                              i < s && (s = i),
                              i
                            );
                          });
                        n.forEach(function (e, n) {
                          var i = e.cursor,
                            o = a - i.column,
                            d = c[n] - s;
                          o > d
                            ? t.insert(i, l.stringRepeat(" ", o - d))
                            : t.remove(
                                new r(i.row, i.column, i.row, i.column - o + d)
                              ),
                            (e.start.column = e.end.column = a),
                            (e.start.row = e.end.row = i.row),
                            (e.cursor = e.end);
                        }),
                          e.fromOrientedRange(n[0]),
                          this.renderer.updateCursor(),
                          this.renderer.updateBackMarkers();
                      } else {
                        var d = this.selection.getRange(),
                          u = d.start.row,
                          p = d.end.row,
                          h = u == p;
                        if (h) {
                          var f,
                            b = this.session.getLength();
                          do {
                            f = this.session.getLine(p);
                          } while (/[=:]/.test(f) && ++p < b);
                          do {
                            f = this.session.getLine(u);
                          } while (/[=:]/.test(f) && --u > 0);
                          u < 0 && (u = 0), p >= b && (p = b - 1);
                        }
                        var m = this.session.removeFullLines(u, p);
                        (m = this.$reAlignText(m, h)),
                          this.session.insert(
                            { row: u, column: 0 },
                            m.join("\n") + "\n"
                          ),
                          h ||
                            ((d.start.column = 0),
                            (d.end.column = m[m.length - 1].length)),
                          this.selection.setRange(d);
                      }
                    }),
                    (this.$reAlignText = function (t, e) {
                      var n,
                        i,
                        r,
                        o = !0,
                        a = !0;
                      return t
                        .map(function (t) {
                          var e = t.match(/(\s*)(.*?)(\s*)([=:].*)/);
                          return e
                            ? null == n
                              ? ((n = e[1].length),
                                (i = e[2].length),
                                (r = e[3].length),
                                e)
                              : (n + i + r !=
                                  e[1].length + e[2].length + e[3].length &&
                                  (a = !1),
                                n != e[1].length && (o = !1),
                                n > e[1].length && (n = e[1].length),
                                i < e[2].length && (i = e[2].length),
                                r > e[3].length && (r = e[3].length),
                                e)
                            : [t];
                        })
                        .map(
                          e
                            ? c
                            : o
                            ? a
                              ? function (t) {
                                  return t[2]
                                    ? s(n + i - t[2].length) +
                                        t[2] +
                                        s(r) +
                                        t[4].replace(/^([=:])\s+/, "$1 ")
                                    : t[0];
                                }
                              : c
                            : function (t) {
                                return t[2]
                                  ? s(n) +
                                      t[2] +
                                      s(r) +
                                      t[4].replace(/^([=:])\s+/, "$1 ")
                                  : t[0];
                              }
                        );
                      function s(t) {
                        return l.stringRepeat(" ", t);
                      }
                      function c(t) {
                        return t[2]
                          ? s(n) +
                              t[2] +
                              s(i - t[2].length + r) +
                              t[4].replace(/^([=:])\s+/, "$1 ")
                          : t[0];
                      }
                    });
                }).call(p.prototype),
                  (e.onSessionChange = function (t) {
                    var e = t.session;
                    e &&
                      !e.multiSelect &&
                      ((e.$selectionMarkers = []),
                      e.selection.$initRangeList(),
                      (e.multiSelect = e.selection)),
                      (this.multiSelect = e && e.multiSelect);
                    var n = t.oldSession;
                    n &&
                      (n.multiSelect.off("addRange", this.$onAddRange),
                      n.multiSelect.off("removeRange", this.$onRemoveRange),
                      n.multiSelect.off("multiSelect", this.$onMultiSelect),
                      n.multiSelect.off("singleSelect", this.$onSingleSelect),
                      n.multiSelect.lead.off(
                        "change",
                        this.$checkMultiselectChange
                      ),
                      n.multiSelect.anchor.off(
                        "change",
                        this.$checkMultiselectChange
                      )),
                      e &&
                        (e.multiSelect.on("addRange", this.$onAddRange),
                        e.multiSelect.on("removeRange", this.$onRemoveRange),
                        e.multiSelect.on("multiSelect", this.$onMultiSelect),
                        e.multiSelect.on("singleSelect", this.$onSingleSelect),
                        e.multiSelect.lead.on(
                          "change",
                          this.$checkMultiselectChange
                        ),
                        e.multiSelect.anchor.on(
                          "change",
                          this.$checkMultiselectChange
                        )),
                      e &&
                        this.inMultiSelectMode !=
                          e.selection.inMultiSelectMode &&
                        (e.selection.inMultiSelectMode
                          ? this.$onMultiSelect()
                          : this.$onSingleSelect());
                  }),
                  (e.MultiSelect = h),
                  t("./config").defineOptions(p.prototype, "editor", {
                    enableMultiselect: {
                      set: function (t) {
                        h(this),
                          t
                            ? (this.on(
                                "changeSession",
                                this.$multiselectOnSessionChange
                              ),
                              this.on("mousedown", a))
                            : (this.off(
                                "changeSession",
                                this.$multiselectOnSessionChange
                              ),
                              this.off("mousedown", a));
                      },
                      value: !0,
                    },
                    enableBlockSelect: {
                      set: function (t) {
                        this.$blockSelectEnabled = t;
                      },
                      value: !0,
                    },
                  });
              }
            ),
            ace.define(
              "ace/mode/folding/fold_mode",
              ["require", "exports", "module", "ace/range"],
              function (t, e, n) {
                "use strict";
                var i = t("../../range").Range,
                  r = (e.FoldMode = function () {});
                (function () {
                  (this.foldingStartMarker = null),
                    (this.foldingStopMarker = null),
                    (this.getFoldWidget = function (t, e, n) {
                      var i = t.getLine(n);
                      return this.foldingStartMarker.test(i)
                        ? "start"
                        : "markbeginend" == e &&
                          this.foldingStopMarker &&
                          this.foldingStopMarker.test(i)
                        ? "end"
                        : "";
                    }),
                    (this.getFoldWidgetRange = function (t, e, n) {
                      return null;
                    }),
                    (this.indentationBlock = function (t, e, n) {
                      var r = /\S/,
                        o = t.getLine(e),
                        a = o.search(r);
                      if (-1 != a) {
                        for (
                          var s = n || o.length,
                            l = t.getLength(),
                            c = e,
                            d = e;
                          ++e < l;

                        ) {
                          var u = t.getLine(e).search(r);
                          if (-1 != u) {
                            if (u <= a) break;
                            d = e;
                          }
                        }
                        if (d > c) {
                          var p = t.getLine(d).length;
                          return new i(c, s, d, p);
                        }
                      }
                    }),
                    (this.openingBracketBlock = function (t, e, n, r, o) {
                      var a = { row: n, column: r + 1 },
                        s = t.$findClosingBracket(e, a, o);
                      if (s) {
                        var l = t.foldWidgets[s.row];
                        return (
                          null == l && (l = t.getFoldWidget(s.row)),
                          "start" == l &&
                            s.row > a.row &&
                            (s.row--, (s.column = t.getLine(s.row).length)),
                          i.fromPoints(a, s)
                        );
                      }
                    }),
                    (this.closingBracketBlock = function (t, e, n, r, o) {
                      var a = { row: n, column: r },
                        s = t.$findOpeningBracket(e, a);
                      if (s) return s.column++, a.column--, i.fromPoints(s, a);
                    });
                }).call(r.prototype);
              }
            ),
            ace.define(
              "ace/theme/textmate",
              ["require", "exports", "module", "ace/lib/dom"],
              function (t, e, n) {
                "use strict";
                (e.isDark = !1),
                  (e.cssClass = "ace-tm"),
                  (e.cssText =
                    '.ace-tm .ace_gutter {\tbackground: #f0f0f0;\tcolor: #333;\t}\t.ace-tm .ace_print-margin {\twidth: 1px;\tbackground: #e8e8e8;\t}\t.ace-tm .ace_fold {\tbackground-color: #6B72E6;\t}\t.ace-tm {\tbackground-color: #FFFFFF;\tcolor: black;\t}\t.ace-tm .ace_cursor {\tcolor: black;\t}\t.ace-tm .ace_invisible {\tcolor: rgb(191, 191, 191);\t}\t.ace-tm .ace_storage,\t.ace-tm .ace_keyword {\tcolor: blue;\t}\t.ace-tm .ace_constant {\tcolor: rgb(197, 6, 11);\t}\t.ace-tm .ace_constant.ace_buildin {\tcolor: rgb(88, 72, 246);\t}\t.ace-tm .ace_constant.ace_language {\tcolor: rgb(88, 92, 246);\t}\t.ace-tm .ace_constant.ace_library {\tcolor: rgb(6, 150, 14);\t}\t.ace-tm .ace_invalid {\tbackground-color: rgba(255, 0, 0, 0.1);\tcolor: red;\t}\t.ace-tm .ace_support.ace_function {\tcolor: rgb(60, 76, 114);\t}\t.ace-tm .ace_support.ace_constant {\tcolor: rgb(6, 150, 14);\t}\t.ace-tm .ace_support.ace_type,\t.ace-tm .ace_support.ace_class {\tcolor: rgb(109, 121, 222);\t}\t.ace-tm .ace_keyword.ace_operator {\tcolor: rgb(104, 118, 135);\t}\t.ace-tm .ace_string {\tcolor: rgb(3, 106, 7);\t}\t.ace-tm .ace_comment {\tcolor: rgb(76, 136, 107);\t}\t.ace-tm .ace_comment.ace_doc {\tcolor: rgb(0, 102, 255);\t}\t.ace-tm .ace_comment.ace_doc.ace_tag {\tcolor: rgb(128, 159, 191);\t}\t.ace-tm .ace_constant.ace_numeric {\tcolor: rgb(0, 0, 205);\t}\t.ace-tm .ace_variable {\tcolor: rgb(49, 132, 149);\t}\t.ace-tm .ace_xml-pe {\tcolor: rgb(104, 104, 91);\t}\t.ace-tm .ace_entity.ace_name.ace_function {\tcolor: #0000A2;\t}\t.ace-tm .ace_heading {\tcolor: rgb(12, 7, 255);\t}\t.ace-tm .ace_list {\tcolor:rgb(185, 6, 144);\t}\t.ace-tm .ace_meta.ace_tag {\tcolor:rgb(0, 22, 142);\t}\t.ace-tm .ace_string.ace_regex {\tcolor: rgb(255, 0, 0)\t}\t.ace-tm .ace_marker-layer .ace_selection {\tbackground: rgb(181, 213, 255);\t}\t.ace-tm.ace_multiselect .ace_selection.ace_start {\tbox-shadow: 0 0 3px 0px white;\t}\t.ace-tm .ace_marker-layer .ace_step {\tbackground: rgb(252, 255, 0);\t}\t.ace-tm .ace_marker-layer .ace_stack {\tbackground: rgb(164, 229, 101);\t}\t.ace-tm .ace_marker-layer .ace_bracket {\tmargin: -1px 0 0 -1px;\tborder: 1px solid rgb(192, 192, 192);\t}\t.ace-tm .ace_marker-layer .ace_active-line {\tbackground: rgba(0, 0, 0, 0.07);\t}\t.ace-tm .ace_gutter-active-line {\tbackground-color : #dcdcdc;\t}\t.ace-tm .ace_marker-layer .ace_selected-word {\tbackground: rgb(250, 250, 255);\tborder: 1px solid rgb(200, 200, 250);\t}\t.ace-tm .ace_indent-guide {\tbackground: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAE0lEQVQImWP4////f4bLly//BwAmVgd1/w11/gAAAABJRU5ErkJggg==") right repeat-y;\t}\t'),
                  t("../lib/dom").importCssString(e.cssText, e.cssClass);
              }
            ),
            ace.define(
              "ace/line_widgets",
              [
                "require",
                "exports",
                "module",
                "ace/lib/oop",
                "ace/lib/dom",
                "ace/range",
              ],
              function (t, e, n) {
                "use strict";
                t("./lib/oop");
                var i = t("./lib/dom");
                function r(t) {
                  (this.session = t),
                    (this.session.widgetManager = this),
                    (this.session.getRowLength = this.getRowLength),
                    (this.session.$getWidgetScreenLength =
                      this.$getWidgetScreenLength),
                    (this.updateOnChange = this.updateOnChange.bind(this)),
                    (this.renderWidgets = this.renderWidgets.bind(this)),
                    (this.measureWidgets = this.measureWidgets.bind(this)),
                    (this.session._changedWidgets = []),
                    (this.$onChangeEditor = this.$onChangeEditor.bind(this)),
                    this.session.on("change", this.updateOnChange),
                    this.session.on("changeFold", this.updateOnFold),
                    this.session.on("changeEditor", this.$onChangeEditor);
                }
                t("./range").Range,
                  function () {
                    (this.getRowLength = function (t) {
                      var e;
                      return (
                        (e =
                          (this.lineWidgets &&
                            this.lineWidgets[t] &&
                            this.lineWidgets[t].rowCount) ||
                          0),
                        this.$useWrapMode && this.$wrapData[t]
                          ? this.$wrapData[t].length + 1 + e
                          : 1 + e
                      );
                    }),
                      (this.$getWidgetScreenLength = function () {
                        var t = 0;
                        return (
                          this.lineWidgets.forEach(function (e) {
                            e && e.rowCount && !e.hidden && (t += e.rowCount);
                          }),
                          t
                        );
                      }),
                      (this.$onChangeEditor = function (t) {
                        this.attach(t.editor);
                      }),
                      (this.attach = function (t) {
                        t &&
                          t.widgetManager &&
                          t.widgetManager != this &&
                          t.widgetManager.detach(),
                          this.editor != t &&
                            (this.detach(),
                            (this.editor = t),
                            t &&
                              ((t.widgetManager = this),
                              t.renderer.on(
                                "beforeRender",
                                this.measureWidgets
                              ),
                              t.renderer.on(
                                "afterRender",
                                this.renderWidgets
                              )));
                      }),
                      (this.detach = function (t) {
                        var e = this.editor;
                        if (e) {
                          (this.editor = null),
                            (e.widgetManager = null),
                            e.renderer.off("beforeRender", this.measureWidgets),
                            e.renderer.off("afterRender", this.renderWidgets);
                          var n = this.session.lineWidgets;
                          n &&
                            n.forEach(function (t) {
                              t &&
                                t.el &&
                                t.el.parentNode &&
                                ((t._inDocument = !1),
                                t.el.parentNode.removeChild(t.el));
                            });
                        }
                      }),
                      (this.updateOnFold = function (t, e) {
                        var n = e.lineWidgets;
                        if (n && t.action) {
                          for (
                            var i = t.data,
                              r = i.start.row,
                              o = i.end.row,
                              a = "add" == t.action,
                              s = r + 1;
                            s < o;
                            s++
                          )
                            n[s] && (n[s].hidden = a);
                          n[o] &&
                            (a
                              ? n[r]
                                ? (n[o].hidden = a)
                                : (n[r] = n[o])
                              : (n[r] == n[o] && (n[r] = void 0),
                                (n[o].hidden = a)));
                        }
                      }),
                      (this.updateOnChange = function (t) {
                        var e = this.session.lineWidgets;
                        if (e) {
                          var n = t.start.row,
                            i = t.end.row - n;
                          if (0 === i);
                          else if ("remove" == t.action)
                            e.splice(n + 1, i).forEach(function (t) {
                              t && this.removeLineWidget(t);
                            }, this),
                              this.$updateRows();
                          else {
                            var r = new Array(i);
                            r.unshift(n, 0),
                              e.splice.apply(e, r),
                              this.$updateRows();
                          }
                        }
                      }),
                      (this.$updateRows = function () {
                        var t = this.session.lineWidgets;
                        if (t) {
                          var e = !0;
                          t.forEach(function (t, n) {
                            if (t)
                              for (e = !1, t.row = n; t.$oldWidget; )
                                (t.$oldWidget.row = n), (t = t.$oldWidget);
                          }),
                            e && (this.session.lineWidgets = null);
                        }
                      }),
                      (this.addLineWidget = function (t) {
                        this.session.lineWidgets ||
                          (this.session.lineWidgets = new Array(
                            this.session.getLength()
                          ));
                        var e = this.session.lineWidgets[t.row];
                        e &&
                          ((t.$oldWidget = e),
                          e.el &&
                            e.el.parentNode &&
                            (e.el.parentNode.removeChild(e.el),
                            (e._inDocument = !1))),
                          (this.session.lineWidgets[t.row] = t),
                          (t.session = this.session);
                        var n = this.editor.renderer;
                        t.html &&
                          !t.el &&
                          ((t.el = i.createElement("div")),
                          (t.el.innerHTML = t.html)),
                          t.el &&
                            (i.addCssClass(t.el, "ace_lineWidgetContainer"),
                            (t.el.style.position = "absolute"),
                            (t.el.style.zIndex = 5),
                            n.container.appendChild(t.el),
                            (t._inDocument = !0)),
                          t.coverGutter || (t.el.style.zIndex = 3),
                          t.pixelHeight || (t.pixelHeight = t.el.offsetHeight),
                          null == t.rowCount &&
                            (t.rowCount =
                              t.pixelHeight / n.layerConfig.lineHeight);
                        var r = this.session.getFoldAt(t.row, 0);
                        if (((t.$fold = r), r)) {
                          var o = this.session.lineWidgets;
                          t.row != r.end.row || o[r.start.row]
                            ? (t.hidden = !0)
                            : (o[r.start.row] = t);
                        }
                        return (
                          this.session._emit("changeFold", {
                            data: { start: { row: t.row } },
                          }),
                          this.$updateRows(),
                          this.renderWidgets(null, n),
                          this.onWidgetChanged(t),
                          t
                        );
                      }),
                      (this.removeLineWidget = function (t) {
                        if (
                          ((t._inDocument = !1),
                          (t.session = null),
                          t.el &&
                            t.el.parentNode &&
                            t.el.parentNode.removeChild(t.el),
                          t.editor && t.editor.destroy)
                        )
                          try {
                            t.editor.destroy();
                          } catch (t) {}
                        if (this.session.lineWidgets) {
                          var e = this.session.lineWidgets[t.row];
                          if (e == t)
                            (this.session.lineWidgets[t.row] = t.$oldWidget),
                              t.$oldWidget &&
                                this.onWidgetChanged(t.$oldWidget);
                          else
                            for (; e; ) {
                              if (e.$oldWidget == t) {
                                e.$oldWidget = t.$oldWidget;
                                break;
                              }
                              e = e.$oldWidget;
                            }
                        }
                        this.session._emit("changeFold", {
                          data: { start: { row: t.row } },
                        }),
                          this.$updateRows();
                      }),
                      (this.getWidgetsAtRow = function (t) {
                        for (
                          var e = this.session.lineWidgets,
                            n = e && e[t],
                            i = [];
                          n;

                        )
                          i.push(n), (n = n.$oldWidget);
                        return i;
                      }),
                      (this.onWidgetChanged = function (t) {
                        this.session._changedWidgets.push(t),
                          this.editor && this.editor.renderer.updateFull();
                      }),
                      (this.measureWidgets = function (t, e) {
                        var n = this.session._changedWidgets,
                          i = e.layerConfig;
                        if (n && n.length) {
                          for (var r = 1 / 0, o = 0; o < n.length; o++) {
                            var a = n[o];
                            if (a && a.el && a.session == this.session) {
                              if (!a._inDocument) {
                                if (this.session.lineWidgets[a.row] != a)
                                  continue;
                                (a._inDocument = !0),
                                  e.container.appendChild(a.el);
                              }
                              (a.h = a.el.offsetHeight),
                                a.fixedWidth ||
                                  ((a.w = a.el.offsetWidth),
                                  (a.screenWidth = Math.ceil(
                                    a.w / i.characterWidth
                                  )));
                              var s = a.h / i.lineHeight;
                              a.coverLine &&
                                (s -= this.session.getRowLineCount(a.row)) <
                                  0 &&
                                (s = 0),
                                a.rowCount != s &&
                                  ((a.rowCount = s), a.row < r && (r = a.row));
                            }
                          }
                          r != 1 / 0 &&
                            (this.session._emit("changeFold", {
                              data: { start: { row: r } },
                            }),
                            (this.session.lineWidgetWidth = null)),
                            (this.session._changedWidgets = []);
                        }
                      }),
                      (this.renderWidgets = function (t, e) {
                        var n = e.layerConfig,
                          i = this.session.lineWidgets;
                        if (i) {
                          for (
                            var r = Math.min(this.firstRow, n.firstRow),
                              o = Math.max(this.lastRow, n.lastRow, i.length);
                            r > 0 && !i[r];

                          )
                            r--;
                          (this.firstRow = n.firstRow),
                            (this.lastRow = n.lastRow),
                            (e.$cursorLayer.config = n);
                          for (var a = r; a <= o; a++) {
                            var s = i[a];
                            if (s && s.el)
                              if (s.hidden)
                                s.el.style.top =
                                  -100 - (s.pixelHeight || 0) + "px";
                              else {
                                s._inDocument ||
                                  ((s._inDocument = !0),
                                  e.container.appendChild(s.el));
                                var l = e.$cursorLayer.getPixelPosition(
                                  { row: a, column: 0 },
                                  !0
                                ).top;
                                s.coverLine ||
                                  (l +=
                                    n.lineHeight *
                                    this.session.getRowLineCount(s.row)),
                                  (s.el.style.top = l - n.offset + "px");
                                var c = s.coverGutter ? 0 : e.gutterWidth;
                                s.fixedWidth || (c -= e.scrollLeft),
                                  (s.el.style.left = c + "px"),
                                  s.fullWidth &&
                                    s.screenWidth &&
                                    (s.el.style.minWidth =
                                      n.width + 2 * n.padding + "px"),
                                  s.fixedWidth
                                    ? (s.el.style.right =
                                        e.scrollBar.getWidth() + "px")
                                    : (s.el.style.right = "");
                              }
                          }
                        }
                      });
                  }.call(r.prototype),
                  (e.LineWidgets = r);
              }
            ),
            ace.define(
              "ace/ext/error_marker",
              [
                "require",
                "exports",
                "module",
                "ace/line_widgets",
                "ace/lib/dom",
                "ace/range",
              ],
              function (t, e, n) {
                "use strict";
                var i = t("../line_widgets").LineWidgets,
                  r = t("../lib/dom"),
                  o = t("../range").Range;
                (e.showErrorMarker = function (t, e) {
                  var n = t.session;
                  n.widgetManager ||
                    ((n.widgetManager = new i(n)), n.widgetManager.attach(t));
                  var a = t.getCursorPosition(),
                    s = a.row,
                    l = n.widgetManager.getWidgetsAtRow(s).filter(function (t) {
                      return "errorMarker" == t.type;
                    })[0];
                  l ? l.destroy() : (s -= e);
                  var c,
                    d = (function (t, e, n) {
                      var i = t.getAnnotations().sort(o.comparePoints);
                      if (i.length) {
                        var r = (function (t, e, n) {
                          for (var i = 0, r = t.length - 1; i <= r; ) {
                            var o = (i + r) >> 1,
                              a = n(e, t[o]);
                            if (a > 0) i = o + 1;
                            else {
                              if (!(a < 0)) return o;
                              r = o - 1;
                            }
                          }
                          return -(i + 1);
                        })(i, { row: e, column: -1 }, o.comparePoints);
                        r < 0 && (r = -r - 1),
                          r >= i.length
                            ? (r = n > 0 ? 0 : i.length - 1)
                            : 0 === r && n < 0 && (r = i.length - 1);
                        var a = i[r];
                        if (a && n) {
                          if (a.row === e) {
                            do {
                              a = i[(r += n)];
                            } while (a && a.row === e);
                            if (!a) return i.slice();
                          }
                          var s = [];
                          e = a.row;
                          do {
                            s[n < 0 ? "unshift" : "push"](a), (a = i[(r += n)]);
                          } while (a && a.row == e);
                          return s.length && s;
                        }
                      }
                    })(n, s, e);
                  if (d) {
                    var u = d[0];
                    (a.column =
                      (u.pos && "number" != typeof u.column
                        ? u.pos.sc
                        : u.column) || 0),
                      (a.row = u.row),
                      (c = t.renderer.$gutterLayer.$annotations[a.row]);
                  } else {
                    if (l) return;
                    c = { text: ["Looks good!"], className: "ace_ok" };
                  }
                  t.session.unfold(a.row), t.selection.moveToPosition(a);
                  var p = {
                      row: a.row,
                      fixedWidth: !0,
                      coverGutter: !0,
                      el: r.createElement("div"),
                      type: "errorMarker",
                    },
                    h = p.el.appendChild(r.createElement("div")),
                    f = p.el.appendChild(r.createElement("div"));
                  f.className = "error_widget_arrow " + c.className;
                  var b = t.renderer.$cursorLayer.getPixelPosition(a).left;
                  (f.style.left = b + t.renderer.gutterWidth - 5 + "px"),
                    (p.el.className = "error_widget_wrapper"),
                    (h.className = "error_widget " + c.className),
                    (h.innerHTML = c.text.join("<br>")),
                    h.appendChild(r.createElement("div"));
                  var m = function (t, e, n) {
                    if (0 === e && ("esc" === n || "return" === n))
                      return p.destroy(), { command: "null" };
                  };
                  (p.destroy = function () {
                    t.$mouseHandler.isMousePressed ||
                      (t.keyBinding.removeKeyboardHandler(m),
                      n.widgetManager.removeLineWidget(p),
                      t.off("changeSelection", p.destroy),
                      t.off("changeSession", p.destroy),
                      t.off("mouseup", p.destroy),
                      t.off("change", p.destroy));
                  }),
                    t.keyBinding.addKeyboardHandler(m),
                    t.on("changeSelection", p.destroy),
                    t.on("changeSession", p.destroy),
                    t.on("mouseup", p.destroy),
                    t.on("change", p.destroy),
                    t.session.widgetManager.addLineWidget(p),
                    (p.el.onmousedown = t.focus.bind(t)),
                    t.renderer.scrollCursorIntoView(null, 0.5, {
                      bottom: p.el.offsetHeight,
                    });
                }),
                  r.importCssString(
                    "\t    .error_widget_wrapper {\t        background: inherit;\t        color: inherit;\t        border:none\t    }\t    .error_widget {\t        border-top: solid 2px;\t        border-bottom: solid 2px;\t        margin: 5px 0;\t        padding: 10px 40px;\t        white-space: pre-wrap;\t    }\t    .error_widget.ace_error, .error_widget_arrow.ace_error{\t        border-color: #ff5a5a\t    }\t    .error_widget.ace_warning, .error_widget_arrow.ace_warning{\t        border-color: #F1D817\t    }\t    .error_widget.ace_info, .error_widget_arrow.ace_info{\t        border-color: #5a5a5a\t    }\t    .error_widget.ace_ok, .error_widget_arrow.ace_ok{\t        border-color: #5aaa5a\t    }\t    .error_widget_arrow {\t        position: absolute;\t        border: solid 5px;\t        border-top-color: transparent!important;\t        border-right-color: transparent!important;\t        border-left-color: transparent!important;\t        top: -5px;\t    }\t",
                    ""
                  );
              }
            ),
            ace.define(
              "ace/ace",
              [
                "require",
                "exports",
                "module",
                "ace/lib/fixoldbrowsers",
                "ace/lib/dom",
                "ace/lib/event",
                "ace/editor",
                "ace/edit_session",
                "ace/undomanager",
                "ace/virtual_renderer",
                "ace/worker/worker_client",
                "ace/keyboard/hash_handler",
                "ace/placeholder",
                "ace/multi_select",
                "ace/mode/folding/fold_mode",
                "ace/theme/textmate",
                "ace/ext/error_marker",
                "ace/config",
              ],
              function (t, e, n) {
                "use strict";
                t("./lib/fixoldbrowsers");
                var i = t("./lib/dom"),
                  r = t("./lib/event"),
                  o = t("./editor").Editor,
                  a = t("./edit_session").EditSession,
                  s = t("./undomanager").UndoManager,
                  l = t("./virtual_renderer").VirtualRenderer;
                t("./worker/worker_client"),
                  t("./keyboard/hash_handler"),
                  t("./placeholder"),
                  t("./multi_select"),
                  t("./mode/folding/fold_mode"),
                  t("./theme/textmate"),
                  t("./ext/error_marker"),
                  (e.config = t("./config")),
                  (e.acequire = t),
                  (e.edit = function (t) {
                    if ("string" == typeof t) {
                      var n = t;
                      if (!(t = document.getElementById(n)))
                        throw new Error("ace.edit can't find div #" + n);
                    }
                    if (t && t.env && t.env.editor instanceof o)
                      return t.env.editor;
                    var a = "";
                    if (t && /input|textarea/i.test(t.tagName)) {
                      var s = t;
                      (a = s.value),
                        (t = i.createElement("pre")),
                        s.parentNode.replaceChild(t, s);
                    } else t && ((a = i.getInnerText(t)), (t.innerHTML = ""));
                    var c = e.createEditSession(a),
                      d = new o(new l(t));
                    d.setSession(c);
                    var u = {
                      document: c,
                      editor: d,
                      onResize: d.resize.bind(d, null),
                    };
                    return (
                      s && (u.textarea = s),
                      r.addListener(window, "resize", u.onResize),
                      d.on("destroy", function () {
                        r.removeListener(window, "resize", u.onResize),
                          (u.editor.container.env = null);
                      }),
                      (d.container.env = d.env = u),
                      d
                    );
                  }),
                  (e.createEditSession = function (t, e) {
                    var n = new a(t, e);
                    return n.setUndoManager(new s()), n;
                  }),
                  (e.EditSession = a),
                  (e.UndoManager = s),
                  (e.version = "1.2.3");
              }
            ),
            ace.acequire(["ace/ace"], function (t) {
              for (var e in (t && t.config.init(!0),
              window.ace || (window.ace = t),
              t))
                t.hasOwnProperty(e) && (window.ace[e] = t[e]);
            }),
            (t.exports = window.ace.acequire("ace/ace"));
        },
        function (t, e) {
          t.exports = function () {
            throw new Error("define cannot be used indirect");
          };
        },
        function (t, e) {
          (function (e) {
            t.exports = (function () {
              if (e.Blob)
                try {
                  return new Blob(["asdf"], { type: "text/plain" }), Blob;
                } catch (t) {}
              var t =
                e.WebKitBlobBuilder || e.MozBlobBuilder || e.MSBlobBuilder;
              return function (e, n) {
                var i = new t(),
                  r = n.endings,
                  o = n.type;
                if (r)
                  for (var a = 0, s = e.length; a < s; ++a) i.append(e[a], r);
                else for (a = 0, s = e.length; a < s; ++a) i.append(e[a]);
                return o ? i.getBlob(o) : i.getBlob();
              };
            })();
          }).call(
            e,
            (function () {
              return this;
            })()
          );
        },
        function (t, e, n) {
          ace.define(
            "ace/mode/json_highlight_rules",
            [
              "require",
              "exports",
              "module",
              "ace/lib/oop",
              "ace/mode/text_highlight_rules",
            ],
            function (t, e, n) {
              "use strict";
              var i = t("../lib/oop"),
                r = t("./text_highlight_rules").TextHighlightRules,
                o = function () {
                  this.$rules = {
                    start: [
                      {
                        token: "variable",
                        regex: '["](?:(?:\\\\.)|(?:[^"\\\\]))*?["]\\s*(?=:)',
                      },
                      { token: "string", regex: '"', next: "string" },
                      {
                        token: "constant.numeric",
                        regex: "0[xX][0-9a-fA-F]+\\b",
                      },
                      {
                        token: "constant.numeric",
                        regex:
                          "[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?\\b",
                      },
                      {
                        token: "constant.language.boolean",
                        regex: "(?:true|false)\\b",
                      },
                      {
                        token: "invalid.illegal",
                        regex: "['](?:(?:\\\\.)|(?:[^'\\\\]))*?[']",
                      },
                      { token: "invalid.illegal", regex: "\\/\\/.*$" },
                      { token: "paren.lparen", regex: "[[({]" },
                      { token: "paren.rparen", regex: "[\\])}]" },
                      { token: "text", regex: "\\s+" },
                    ],
                    string: [
                      {
                        token: "constant.language.escape",
                        regex:
                          /\\(?:x[0-9a-fA-F]{2}|u[0-9a-fA-F]{4}|["\\\/bfnrt])/,
                      },
                      { token: "string", regex: '[^"\\\\]+' },
                      { token: "string", regex: '"', next: "start" },
                      { token: "string", regex: "", next: "start" },
                    ],
                  };
                };
              i.inherits(o, r), (e.JsonHighlightRules = o);
            }
          ),
            ace.define(
              "ace/mode/matching_brace_outdent",
              ["require", "exports", "module", "ace/range"],
              function (t, e, n) {
                "use strict";
                var i = t("../range").Range,
                  r = function () {};
                (function () {
                  (this.checkOutdent = function (t, e) {
                    return !!/^\s+$/.test(t) && /^\s*\}/.test(e);
                  }),
                    (this.autoOutdent = function (t, e) {
                      var n = t.getLine(e).match(/^(\s*\})/);
                      if (!n) return 0;
                      var r = n[1].length,
                        o = t.findMatchingBracket({ row: e, column: r });
                      if (!o || o.row == e) return 0;
                      var a = this.$getIndent(t.getLine(o.row));
                      t.replace(new i(e, 0, e, r - 1), a);
                    }),
                    (this.$getIndent = function (t) {
                      return t.match(/^\s*/)[0];
                    });
                }).call(r.prototype),
                  (e.MatchingBraceOutdent = r);
              }
            ),
            ace.define(
              "ace/mode/behaviour/cstyle",
              [
                "require",
                "exports",
                "module",
                "ace/lib/oop",
                "ace/mode/behaviour",
                "ace/token_iterator",
                "ace/lib/lang",
              ],
              function (t, e, n) {
                "use strict";
                var i,
                  r = t("../../lib/oop"),
                  o = t("../behaviour").Behaviour,
                  a = t("../../token_iterator").TokenIterator,
                  s = t("../../lib/lang"),
                  l = ["text", "paren.rparen", "punctuation.operator"],
                  c = [
                    "text",
                    "paren.rparen",
                    "punctuation.operator",
                    "comment",
                  ],
                  d = {},
                  u = function (t) {
                    var e = -1;
                    if (
                      (t.multiSelect &&
                        ((e = t.selection.index),
                        d.rangeCount != t.multiSelect.rangeCount &&
                          (d = { rangeCount: t.multiSelect.rangeCount })),
                      d[e])
                    )
                      return (i = d[e]);
                    i = d[e] = {
                      autoInsertedBrackets: 0,
                      autoInsertedRow: -1,
                      autoInsertedLineEnd: "",
                      maybeInsertedBrackets: 0,
                      maybeInsertedRow: -1,
                      maybeInsertedLineStart: "",
                      maybeInsertedLineEnd: "",
                    };
                  },
                  p = function (t, e, n, i) {
                    var r = t.end.row - t.start.row;
                    return {
                      text: n + e + i,
                      selection: [
                        0,
                        t.start.column + 1,
                        r,
                        t.end.column + (r ? 0 : 1),
                      ],
                    };
                  },
                  h = function () {
                    this.add("braces", "insertion", function (t, e, n, r, o) {
                      var a = n.getCursorPosition(),
                        l = r.doc.getLine(a.row);
                      if ("{" == o) {
                        u(n);
                        var c = n.getSelectionRange(),
                          d = r.doc.getTextRange(c);
                        if (
                          "" !== d &&
                          "{" !== d &&
                          n.getWrapBehavioursEnabled()
                        )
                          return p(c, d, "{", "}");
                        if (h.isSaneInsertion(n, r))
                          return /[\]\}\)]/.test(l[a.column]) ||
                            n.inMultiSelectMode
                            ? (h.recordAutoInsert(n, r, "}"),
                              { text: "{}", selection: [1, 1] })
                            : (h.recordMaybeInsert(n, r, "{"),
                              { text: "{", selection: [1, 1] });
                      } else if ("}" == o) {
                        if (
                          (u(n),
                          "}" == l.substring(a.column, a.column + 1) &&
                            null !==
                              r.$findOpeningBracket("}", {
                                column: a.column + 1,
                                row: a.row,
                              }) &&
                            h.isAutoInsertedClosing(a, l, o))
                        )
                          return (
                            h.popAutoInsertedClosing(),
                            { text: "", selection: [1, 1] }
                          );
                      } else {
                        if ("\n" == o || "\r\n" == o) {
                          u(n);
                          var f = "";
                          if (
                            (h.isMaybeInsertedClosing(a, l) &&
                              ((f = s.stringRepeat(
                                "}",
                                i.maybeInsertedBrackets
                              )),
                              h.clearMaybeInsertedClosing()),
                            "}" === l.substring(a.column, a.column + 1))
                          ) {
                            var b = r.findMatchingBracket(
                              { row: a.row, column: a.column + 1 },
                              "}"
                            );
                            if (!b) return null;
                            var m = this.$getIndent(r.getLine(b.row));
                          } else {
                            if (!f) return void h.clearMaybeInsertedClosing();
                            m = this.$getIndent(l);
                          }
                          var g = m + r.getTabString();
                          return {
                            text: "\n" + g + "\n" + m + f,
                            selection: [1, g.length, 1, g.length],
                          };
                        }
                        h.clearMaybeInsertedClosing();
                      }
                    }),
                      this.add("braces", "deletion", function (t, e, n, r, o) {
                        var a = r.doc.getTextRange(o);
                        if (!o.isMultiLine() && "{" == a) {
                          if (
                            (u(n),
                            "}" ==
                              r.doc
                                .getLine(o.start.row)
                                .substring(o.end.column, o.end.column + 1))
                          )
                            return o.end.column++, o;
                          i.maybeInsertedBrackets--;
                        }
                      }),
                      this.add("parens", "insertion", function (t, e, n, i, r) {
                        if ("(" == r) {
                          u(n);
                          var o = n.getSelectionRange(),
                            a = i.doc.getTextRange(o);
                          if ("" !== a && n.getWrapBehavioursEnabled())
                            return p(o, a, "(", ")");
                          if (h.isSaneInsertion(n, i))
                            return (
                              h.recordAutoInsert(n, i, ")"),
                              { text: "()", selection: [1, 1] }
                            );
                        } else if (")" == r) {
                          u(n);
                          var s = n.getCursorPosition(),
                            l = i.doc.getLine(s.row);
                          if (
                            ")" == l.substring(s.column, s.column + 1) &&
                            null !==
                              i.$findOpeningBracket(")", {
                                column: s.column + 1,
                                row: s.row,
                              }) &&
                            h.isAutoInsertedClosing(s, l, r)
                          )
                            return (
                              h.popAutoInsertedClosing(),
                              { text: "", selection: [1, 1] }
                            );
                        }
                      }),
                      this.add("parens", "deletion", function (t, e, n, i, r) {
                        var o = i.doc.getTextRange(r);
                        if (
                          !r.isMultiLine() &&
                          "(" == o &&
                          (u(n),
                          ")" ==
                            i.doc
                              .getLine(r.start.row)
                              .substring(
                                r.start.column + 1,
                                r.start.column + 2
                              ))
                        )
                          return r.end.column++, r;
                      }),
                      this.add(
                        "brackets",
                        "insertion",
                        function (t, e, n, i, r) {
                          if ("[" == r) {
                            u(n);
                            var o = n.getSelectionRange(),
                              a = i.doc.getTextRange(o);
                            if ("" !== a && n.getWrapBehavioursEnabled())
                              return p(o, a, "[", "]");
                            if (h.isSaneInsertion(n, i))
                              return (
                                h.recordAutoInsert(n, i, "]"),
                                { text: "[]", selection: [1, 1] }
                              );
                          } else if ("]" == r) {
                            u(n);
                            var s = n.getCursorPosition(),
                              l = i.doc.getLine(s.row);
                            if (
                              "]" == l.substring(s.column, s.column + 1) &&
                              null !==
                                i.$findOpeningBracket("]", {
                                  column: s.column + 1,
                                  row: s.row,
                                }) &&
                              h.isAutoInsertedClosing(s, l, r)
                            )
                              return (
                                h.popAutoInsertedClosing(),
                                { text: "", selection: [1, 1] }
                              );
                          }
                        }
                      ),
                      this.add(
                        "brackets",
                        "deletion",
                        function (t, e, n, i, r) {
                          var o = i.doc.getTextRange(r);
                          if (
                            !r.isMultiLine() &&
                            "[" == o &&
                            (u(n),
                            "]" ==
                              i.doc
                                .getLine(r.start.row)
                                .substring(
                                  r.start.column + 1,
                                  r.start.column + 2
                                ))
                          )
                            return r.end.column++, r;
                        }
                      ),
                      this.add(
                        "string_dquotes",
                        "insertion",
                        function (t, e, n, i, r) {
                          if ('"' == r || "'" == r) {
                            u(n);
                            var o = r,
                              a = n.getSelectionRange(),
                              s = i.doc.getTextRange(a);
                            if (
                              "" !== s &&
                              "'" !== s &&
                              '"' != s &&
                              n.getWrapBehavioursEnabled()
                            )
                              return p(a, s, o, o);
                            if (!s) {
                              var l = n.getCursorPosition(),
                                c = i.doc.getLine(l.row),
                                d = c.substring(l.column - 1, l.column),
                                h = c.substring(l.column, l.column + 1),
                                f = i.getTokenAt(l.row, l.column),
                                b = i.getTokenAt(l.row, l.column + 1);
                              if ("\\" == d && f && /escape/.test(f.type))
                                return null;
                              var m,
                                g = f && /string|escape/.test(f.type),
                                v = !b || /string|escape/.test(b.type);
                              if (h == o) m = g !== v;
                              else {
                                if (g && !v) return null;
                                if (g && v) return null;
                                var _ = i.$mode.tokenRe;
                                _.lastIndex = 0;
                                var y = _.test(d);
                                _.lastIndex = 0;
                                var M = _.test(d);
                                if (y || M) return null;
                                if (h && !/[\s;,.})\]\\]/.test(h)) return null;
                                m = !0;
                              }
                              return {
                                text: m ? o + o : "",
                                selection: [1, 1],
                              };
                            }
                          }
                        }
                      ),
                      this.add(
                        "string_dquotes",
                        "deletion",
                        function (t, e, n, i, r) {
                          var o = i.doc.getTextRange(r);
                          if (
                            !r.isMultiLine() &&
                            ('"' == o || "'" == o) &&
                            (u(n),
                            i.doc
                              .getLine(r.start.row)
                              .substring(
                                r.start.column + 1,
                                r.start.column + 2
                              ) == o)
                          )
                            return r.end.column++, r;
                        }
                      );
                  };
                (h.isSaneInsertion = function (t, e) {
                  var n = t.getCursorPosition(),
                    i = new a(e, n.row, n.column);
                  if (!this.$matchTokenType(i.getCurrentToken() || "text", l)) {
                    var r = new a(e, n.row, n.column + 1);
                    if (!this.$matchTokenType(r.getCurrentToken() || "text", l))
                      return !1;
                  }
                  return (
                    i.stepForward(),
                    i.getCurrentTokenRow() !== n.row ||
                      this.$matchTokenType(i.getCurrentToken() || "text", c)
                  );
                }),
                  (h.$matchTokenType = function (t, e) {
                    return e.indexOf(t.type || t) > -1;
                  }),
                  (h.recordAutoInsert = function (t, e, n) {
                    var r = t.getCursorPosition(),
                      o = e.doc.getLine(r.row);
                    this.isAutoInsertedClosing(
                      r,
                      o,
                      i.autoInsertedLineEnd[0]
                    ) || (i.autoInsertedBrackets = 0),
                      (i.autoInsertedRow = r.row),
                      (i.autoInsertedLineEnd = n + o.substr(r.column)),
                      i.autoInsertedBrackets++;
                  }),
                  (h.recordMaybeInsert = function (t, e, n) {
                    var r = t.getCursorPosition(),
                      o = e.doc.getLine(r.row);
                    this.isMaybeInsertedClosing(r, o) ||
                      (i.maybeInsertedBrackets = 0),
                      (i.maybeInsertedRow = r.row),
                      (i.maybeInsertedLineStart = o.substr(0, r.column) + n),
                      (i.maybeInsertedLineEnd = o.substr(r.column)),
                      i.maybeInsertedBrackets++;
                  }),
                  (h.isAutoInsertedClosing = function (t, e, n) {
                    return (
                      i.autoInsertedBrackets > 0 &&
                      t.row === i.autoInsertedRow &&
                      n === i.autoInsertedLineEnd[0] &&
                      e.substr(t.column) === i.autoInsertedLineEnd
                    );
                  }),
                  (h.isMaybeInsertedClosing = function (t, e) {
                    return (
                      i.maybeInsertedBrackets > 0 &&
                      t.row === i.maybeInsertedRow &&
                      e.substr(t.column) === i.maybeInsertedLineEnd &&
                      e.substr(0, t.column) == i.maybeInsertedLineStart
                    );
                  }),
                  (h.popAutoInsertedClosing = function () {
                    (i.autoInsertedLineEnd = i.autoInsertedLineEnd.substr(1)),
                      i.autoInsertedBrackets--;
                  }),
                  (h.clearMaybeInsertedClosing = function () {
                    i &&
                      ((i.maybeInsertedBrackets = 0),
                      (i.maybeInsertedRow = -1));
                  }),
                  r.inherits(h, o),
                  (e.CstyleBehaviour = h);
              }
            ),
            ace.define(
              "ace/mode/folding/cstyle",
              [
                "require",
                "exports",
                "module",
                "ace/lib/oop",
                "ace/range",
                "ace/mode/folding/fold_mode",
              ],
              function (t, e, n) {
                "use strict";
                var i = t("../../lib/oop"),
                  r = t("../../range").Range,
                  o = t("./fold_mode").FoldMode,
                  a = (e.FoldMode = function (t) {
                    t &&
                      ((this.foldingStartMarker = new RegExp(
                        this.foldingStartMarker.source.replace(
                          /\|[^|]*?$/,
                          "|" + t.start
                        )
                      )),
                      (this.foldingStopMarker = new RegExp(
                        this.foldingStopMarker.source.replace(
                          /\|[^|]*?$/,
                          "|" + t.end
                        )
                      )));
                  });
                i.inherits(a, o),
                  function () {
                    (this.foldingStartMarker = /(\{|\[)[^\}\]]*$|^\s*(\/\*)/),
                      (this.foldingStopMarker =
                        /^[^\[\{]*(\}|\])|^[\s\*]*(\*\/)/),
                      (this.singleLineBlockCommentRe = /^\s*(\/\*).*\*\/\s*$/),
                      (this.tripleStarBlockCommentRe =
                        /^\s*(\/\*\*\*).*\*\/\s*$/),
                      (this.startRegionRe = /^\s*(\/\*|\/\/)#?region\b/),
                      (this._getFoldWidgetBase = this.getFoldWidget),
                      (this.getFoldWidget = function (t, e, n) {
                        var i = t.getLine(n);
                        if (
                          this.singleLineBlockCommentRe.test(i) &&
                          !this.startRegionRe.test(i) &&
                          !this.tripleStarBlockCommentRe.test(i)
                        )
                          return "";
                        var r = this._getFoldWidgetBase(t, e, n);
                        return !r && this.startRegionRe.test(i) ? "start" : r;
                      }),
                      (this.getFoldWidgetRange = function (t, e, n, i) {
                        var r,
                          o = t.getLine(n);
                        if (this.startRegionRe.test(o))
                          return this.getCommentRegionBlock(t, o, n);
                        if ((r = o.match(this.foldingStartMarker))) {
                          var a = r.index;
                          if (r[1])
                            return this.openingBracketBlock(t, r[1], n, a);
                          var s = t.getCommentFoldRange(n, a + r[0].length, 1);
                          return (
                            s &&
                              !s.isMultiLine() &&
                              (i
                                ? (s = this.getSectionRange(t, n))
                                : "all" != e && (s = null)),
                            s
                          );
                        }
                        return "markbegin" !== e &&
                          (r = o.match(this.foldingStopMarker))
                          ? ((a = r.index + r[0].length),
                            r[1]
                              ? this.closingBracketBlock(t, r[1], n, a)
                              : t.getCommentFoldRange(n, a, -1))
                          : void 0;
                      }),
                      (this.getSectionRange = function (t, e) {
                        for (
                          var n = t.getLine(e),
                            i = n.search(/\S/),
                            o = e,
                            a = n.length,
                            s = (e += 1),
                            l = t.getLength();
                          ++e < l;

                        ) {
                          var c = (n = t.getLine(e)).search(/\S/);
                          if (-1 !== c) {
                            if (i > c) break;
                            var d = this.getFoldWidgetRange(t, "all", e);
                            if (d) {
                              if (d.start.row <= o) break;
                              if (d.isMultiLine()) e = d.end.row;
                              else if (i == c) break;
                            }
                            s = e;
                          }
                        }
                        return new r(o, a, s, t.getLine(s).length);
                      }),
                      (this.getCommentRegionBlock = function (t, e, n) {
                        for (
                          var i = e.search(/\s*$/),
                            o = t.getLength(),
                            a = n,
                            s = /^\s*(?:\/\*|\/\/|--)#?(end)?region\b/,
                            l = 1;
                          ++n < o;

                        ) {
                          e = t.getLine(n);
                          var c = s.exec(e);
                          if (c && (c[1] ? l-- : l++, !l)) break;
                        }
                        if (n > a) return new r(a, i, n, e.length);
                      });
                  }.call(a.prototype);
              }
            ),
            ace.define(
              "ace/mode/json",
              [
                "require",
                "exports",
                "module",
                "ace/lib/oop",
                "ace/mode/text",
                "ace/mode/json_highlight_rules",
                "ace/mode/matching_brace_outdent",
                "ace/mode/behaviour/cstyle",
                "ace/mode/folding/cstyle",
                "ace/worker/worker_client",
              ],
              function (t, e, i) {
                "use strict";
                var r = t("../lib/oop"),
                  o = t("./text").Mode,
                  a = t("./json_highlight_rules").JsonHighlightRules,
                  s = t("./matching_brace_outdent").MatchingBraceOutdent,
                  l = t("./behaviour/cstyle").CstyleBehaviour,
                  c = t("./folding/cstyle").FoldMode,
                  d = t("../worker/worker_client").WorkerClient,
                  u = function () {
                    (this.HighlightRules = a),
                      (this.$outdent = new s()),
                      (this.$behaviour = new l()),
                      (this.foldingRules = new c());
                  };
                r.inherits(u, o),
                  function () {
                    (this.getNextLineIndent = function (t, e, n) {
                      var i = this.$getIndent(e);
                      return (
                        "start" == t && e.match(/^.*[\{\(\[]\s*$/) && (i += n),
                        i
                      );
                    }),
                      (this.checkOutdent = function (t, e, n) {
                        return this.$outdent.checkOutdent(e, n);
                      }),
                      (this.autoOutdent = function (t, e, n) {
                        this.$outdent.autoOutdent(e, n);
                      }),
                      (this.createWorker = function (t) {
                        var e = new d(["ace"], n(68), "JsonWorker");
                        return (
                          e.attachToDocument(t.getDocument()),
                          e.on("annotate", function (e) {
                            t.setAnnotations(e.data);
                          }),
                          e.on("terminate", function () {
                            t.clearAnnotations();
                          }),
                          e
                        );
                      }),
                      (this.$id = "ace/mode/json");
                  }.call(u.prototype),
                  (e.Mode = u);
              }
            );
        },
        function (t, e) {
          (t.exports.id = "ace/mode/json_worker"),
            (t.exports.src =
              '"no use strict";(function(window){function resolveModuleId(id,paths){for(var testPath=id,tail="";testPath;){var alias=paths[testPath];if("string"==typeof alias)return alias+tail;if(alias)return alias.location.replace(/\\/*$/,"/")+(tail||alias.main||alias.name);if(alias===!1)return"";var i=testPath.lastIndexOf("/");if(-1===i)break;tail=testPath.substr(i)+tail,testPath=testPath.slice(0,i)}return id}if(!(void 0!==window.window&&window.document||window.acequire&&window.define)){window.console||(window.console=function(){var msgs=Array.prototype.slice.call(arguments,0);postMessage({type:"log",data:msgs})},window.console.error=window.console.warn=window.console.log=window.console.trace=window.console),window.window=window,window.ace=window,window.onerror=function(message,file,line,col,err){postMessage({type:"error",data:{message:message,data:err.data,file:file,line:line,col:col,stack:err.stack}})},window.normalizeModule=function(parentId,moduleName){if(-1!==moduleName.indexOf("!")){var chunks=moduleName.split("!");return window.normalizeModule(parentId,chunks[0])+"!"+window.normalizeModule(parentId,chunks[1])}if("."==moduleName.charAt(0)){var base=parentId.split("/").slice(0,-1).join("/");for(moduleName=(base?base+"/":"")+moduleName;-1!==moduleName.indexOf(".")&&previous!=moduleName;){var previous=moduleName;moduleName=moduleName.replace(/^\\.\\//,"").replace(/\\/\\.\\//,"/").replace(/[^\\/]+\\/\\.\\.\\//,"")}}return moduleName},window.acequire=function acequire(parentId,id){if(id||(id=parentId,parentId=null),!id.charAt)throw Error("worker.js acequire() accepts only (parentId, id) as arguments");id=window.normalizeModule(parentId,id);var module=window.acequire.modules[id];if(module)return module.initialized||(module.initialized=!0,module.exports=module.factory().exports),module.exports;if(!window.acequire.tlns)return console.log("unable to load "+id);var path=resolveModuleId(id,window.acequire.tlns);return".js"!=path.slice(-3)&&(path+=".js"),window.acequire.id=id,window.acequire.modules[id]={},importScripts(path),window.acequire(parentId,id)},window.acequire.modules={},window.acequire.tlns={},window.define=function(id,deps,factory){if(2==arguments.length?(factory=deps,"string"!=typeof id&&(deps=id,id=window.acequire.id)):1==arguments.length&&(factory=id,deps=[],id=window.acequire.id),"function"!=typeof factory)return window.acequire.modules[id]={exports:factory,initialized:!0},void 0;deps.length||(deps=["require","exports","module"]);var req=function(childId){return window.acequire(id,childId)};window.acequire.modules[id]={exports:{},factory:function(){var module=this,returnExports=factory.apply(this,deps.map(function(dep){switch(dep){case"require":return req;case"exports":return module.exports;case"module":return module;default:return req(dep)}}));return returnExports&&(module.exports=returnExports),module}}},window.define.amd={},acequire.tlns={},window.initBaseUrls=function(topLevelNamespaces){for(var i in topLevelNamespaces)acequire.tlns[i]=topLevelNamespaces[i]},window.initSender=function(){var EventEmitter=window.acequire("ace/lib/event_emitter").EventEmitter,oop=window.acequire("ace/lib/oop"),Sender=function(){};return function(){oop.implement(this,EventEmitter),this.callback=function(data,callbackId){postMessage({type:"call",id:callbackId,data:data})},this.emit=function(name,data){postMessage({type:"event",name:name,data:data})}}.call(Sender.prototype),new Sender};var main=window.main=null,sender=window.sender=null;window.onmessage=function(e){var msg=e.data;if(msg.event&&sender)sender._signal(msg.event,msg.data);else if(msg.command)if(main[msg.command])main[msg.command].apply(main,msg.args);else{if(!window[msg.command])throw Error("Unknown command:"+msg.command);window[msg.command].apply(window,msg.args)}else if(msg.init){window.initBaseUrls(msg.tlns),acequire("ace/lib/es5-shim"),sender=window.sender=window.initSender();var clazz=acequire(msg.module)[msg.classname];main=window.main=new clazz(sender)}}}})(this),ace.define("ace/lib/oop",["require","exports","module"],function(acequire,exports){"use strict";exports.inherits=function(ctor,superCtor){ctor.super_=superCtor,ctor.prototype=Object.create(superCtor.prototype,{constructor:{value:ctor,enumerable:!1,writable:!0,configurable:!0}})},exports.mixin=function(obj,mixin){for(var key in mixin)obj[key]=mixin[key];return obj},exports.implement=function(proto,mixin){exports.mixin(proto,mixin)}}),ace.define("ace/range",["require","exports","module"],function(acequire,exports){"use strict";var comparePoints=function(p1,p2){return p1.row-p2.row||p1.column-p2.column},Range=function(startRow,startColumn,endRow,endColumn){this.start={row:startRow,column:startColumn},this.end={row:endRow,column:endColumn}};(function(){this.isEqual=function(range){return this.start.row===range.start.row&&this.end.row===range.end.row&&this.start.column===range.start.column&&this.end.column===range.end.column},this.toString=function(){return"Range: ["+this.start.row+"/"+this.start.column+"] -> ["+this.end.row+"/"+this.end.column+"]"},this.contains=function(row,column){return 0==this.compare(row,column)},this.compareRange=function(range){var cmp,end=range.end,start=range.start;return cmp=this.compare(end.row,end.column),1==cmp?(cmp=this.compare(start.row,start.column),1==cmp?2:0==cmp?1:0):-1==cmp?-2:(cmp=this.compare(start.row,start.column),-1==cmp?-1:1==cmp?42:0)},this.comparePoint=function(p){return this.compare(p.row,p.column)},this.containsRange=function(range){return 0==this.comparePoint(range.start)&&0==this.comparePoint(range.end)},this.intersects=function(range){var cmp=this.compareRange(range);return-1==cmp||0==cmp||1==cmp},this.isEnd=function(row,column){return this.end.row==row&&this.end.column==column},this.isStart=function(row,column){return this.start.row==row&&this.start.column==column},this.setStart=function(row,column){"object"==typeof row?(this.start.column=row.column,this.start.row=row.row):(this.start.row=row,this.start.column=column)},this.setEnd=function(row,column){"object"==typeof row?(this.end.column=row.column,this.end.row=row.row):(this.end.row=row,this.end.column=column)},this.inside=function(row,column){return 0==this.compare(row,column)?this.isEnd(row,column)||this.isStart(row,column)?!1:!0:!1},this.insideStart=function(row,column){return 0==this.compare(row,column)?this.isEnd(row,column)?!1:!0:!1},this.insideEnd=function(row,column){return 0==this.compare(row,column)?this.isStart(row,column)?!1:!0:!1},this.compare=function(row,column){return this.isMultiLine()||row!==this.start.row?this.start.row>row?-1:row>this.end.row?1:this.start.row===row?column>=this.start.column?0:-1:this.end.row===row?this.end.column>=column?0:1:0:this.start.column>column?-1:column>this.end.column?1:0},this.compareStart=function(row,column){return this.start.row==row&&this.start.column==column?-1:this.compare(row,column)},this.compareEnd=function(row,column){return this.end.row==row&&this.end.column==column?1:this.compare(row,column)},this.compareInside=function(row,column){return this.end.row==row&&this.end.column==column?1:this.start.row==row&&this.start.column==column?-1:this.compare(row,column)},this.clipRows=function(firstRow,lastRow){if(this.end.row>lastRow)var end={row:lastRow+1,column:0};else if(firstRow>this.end.row)var end={row:firstRow,column:0};if(this.start.row>lastRow)var start={row:lastRow+1,column:0};else if(firstRow>this.start.row)var start={row:firstRow,column:0};return Range.fromPoints(start||this.start,end||this.end)},this.extend=function(row,column){var cmp=this.compare(row,column);if(0==cmp)return this;if(-1==cmp)var start={row:row,column:column};else var end={row:row,column:column};return Range.fromPoints(start||this.start,end||this.end)},this.isEmpty=function(){return this.start.row===this.end.row&&this.start.column===this.end.column},this.isMultiLine=function(){return this.start.row!==this.end.row},this.clone=function(){return Range.fromPoints(this.start,this.end)},this.collapseRows=function(){return 0==this.end.column?new Range(this.start.row,0,Math.max(this.start.row,this.end.row-1),0):new Range(this.start.row,0,this.end.row,0)},this.toScreenRange=function(session){var screenPosStart=session.documentToScreenPosition(this.start),screenPosEnd=session.documentToScreenPosition(this.end);return new Range(screenPosStart.row,screenPosStart.column,screenPosEnd.row,screenPosEnd.column)},this.moveBy=function(row,column){this.start.row+=row,this.start.column+=column,this.end.row+=row,this.end.column+=column}}).call(Range.prototype),Range.fromPoints=function(start,end){return new Range(start.row,start.column,end.row,end.column)},Range.comparePoints=comparePoints,Range.comparePoints=function(p1,p2){return p1.row-p2.row||p1.column-p2.column},exports.Range=Range}),ace.define("ace/apply_delta",["require","exports","module"],function(acequire,exports){"use strict";exports.applyDelta=function(docLines,delta){var row=delta.start.row,startColumn=delta.start.column,line=docLines[row]||"";switch(delta.action){case"insert":var lines=delta.lines;if(1===lines.length)docLines[row]=line.substring(0,startColumn)+delta.lines[0]+line.substring(startColumn);else{var args=[row,1].concat(delta.lines);docLines.splice.apply(docLines,args),docLines[row]=line.substring(0,startColumn)+docLines[row],docLines[row+delta.lines.length-1]+=line.substring(startColumn)}break;case"remove":var endColumn=delta.end.column,endRow=delta.end.row;row===endRow?docLines[row]=line.substring(0,startColumn)+line.substring(endColumn):docLines.splice(row,endRow-row+1,line.substring(0,startColumn)+docLines[endRow].substring(endColumn))}}}),ace.define("ace/lib/event_emitter",["require","exports","module"],function(acequire,exports){"use strict";var EventEmitter={},stopPropagation=function(){this.propagationStopped=!0},preventDefault=function(){this.defaultPrevented=!0};EventEmitter._emit=EventEmitter._dispatchEvent=function(eventName,e){this._eventRegistry||(this._eventRegistry={}),this._defaultHandlers||(this._defaultHandlers={});var listeners=this._eventRegistry[eventName]||[],defaultHandler=this._defaultHandlers[eventName];if(listeners.length||defaultHandler){"object"==typeof e&&e||(e={}),e.type||(e.type=eventName),e.stopPropagation||(e.stopPropagation=stopPropagation),e.preventDefault||(e.preventDefault=preventDefault),listeners=listeners.slice();for(var i=0;listeners.length>i&&(listeners[i](e,this),!e.propagationStopped);i++);return defaultHandler&&!e.defaultPrevented?defaultHandler(e,this):void 0}},EventEmitter._signal=function(eventName,e){var listeners=(this._eventRegistry||{})[eventName];if(listeners){listeners=listeners.slice();for(var i=0;listeners.length>i;i++)listeners[i](e,this)}},EventEmitter.once=function(eventName,callback){var _self=this;callback&&this.addEventListener(eventName,function newCallback(){_self.removeEventListener(eventName,newCallback),callback.apply(null,arguments)})},EventEmitter.setDefaultHandler=function(eventName,callback){var handlers=this._defaultHandlers;if(handlers||(handlers=this._defaultHandlers={_disabled_:{}}),handlers[eventName]){var old=handlers[eventName],disabled=handlers._disabled_[eventName];disabled||(handlers._disabled_[eventName]=disabled=[]),disabled.push(old);var i=disabled.indexOf(callback);-1!=i&&disabled.splice(i,1)}handlers[eventName]=callback},EventEmitter.removeDefaultHandler=function(eventName,callback){var handlers=this._defaultHandlers;if(handlers){var disabled=handlers._disabled_[eventName];if(handlers[eventName]==callback)handlers[eventName],disabled&&this.setDefaultHandler(eventName,disabled.pop());else if(disabled){var i=disabled.indexOf(callback);-1!=i&&disabled.splice(i,1)}}},EventEmitter.on=EventEmitter.addEventListener=function(eventName,callback,capturing){this._eventRegistry=this._eventRegistry||{};var listeners=this._eventRegistry[eventName];return listeners||(listeners=this._eventRegistry[eventName]=[]),-1==listeners.indexOf(callback)&&listeners[capturing?"unshift":"push"](callback),callback},EventEmitter.off=EventEmitter.removeListener=EventEmitter.removeEventListener=function(eventName,callback){this._eventRegistry=this._eventRegistry||{};var listeners=this._eventRegistry[eventName];if(listeners){var index=listeners.indexOf(callback);-1!==index&&listeners.splice(index,1)}},EventEmitter.removeAllListeners=function(eventName){this._eventRegistry&&(this._eventRegistry[eventName]=[])},exports.EventEmitter=EventEmitter}),ace.define("ace/anchor",["require","exports","module","ace/lib/oop","ace/lib/event_emitter"],function(acequire,exports){"use strict";var oop=acequire("./lib/oop"),EventEmitter=acequire("./lib/event_emitter").EventEmitter,Anchor=exports.Anchor=function(doc,row,column){this.$onChange=this.onChange.bind(this),this.attach(doc),column===void 0?this.setPosition(row.row,row.column):this.setPosition(row,column)};(function(){function $pointsInOrder(point1,point2,equalPointsInOrder){var bColIsAfter=equalPointsInOrder?point1.column<=point2.column:point1.column<point2.column;return point1.row<point2.row||point1.row==point2.row&&bColIsAfter}function $getTransformedPoint(delta,point,moveIfEqual){var deltaIsInsert="insert"==delta.action,deltaRowShift=(deltaIsInsert?1:-1)*(delta.end.row-delta.start.row),deltaColShift=(deltaIsInsert?1:-1)*(delta.end.column-delta.start.column),deltaStart=delta.start,deltaEnd=deltaIsInsert?deltaStart:delta.end;return $pointsInOrder(point,deltaStart,moveIfEqual)?{row:point.row,column:point.column}:$pointsInOrder(deltaEnd,point,!moveIfEqual)?{row:point.row+deltaRowShift,column:point.column+(point.row==deltaEnd.row?deltaColShift:0)}:{row:deltaStart.row,column:deltaStart.column}}oop.implement(this,EventEmitter),this.getPosition=function(){return this.$clipPositionToDocument(this.row,this.column)},this.getDocument=function(){return this.document},this.$insertRight=!1,this.onChange=function(delta){if(!(delta.start.row==delta.end.row&&delta.start.row!=this.row||delta.start.row>this.row)){var point=$getTransformedPoint(delta,{row:this.row,column:this.column},this.$insertRight);this.setPosition(point.row,point.column,!0)}},this.setPosition=function(row,column,noClip){var pos;if(pos=noClip?{row:row,column:column}:this.$clipPositionToDocument(row,column),this.row!=pos.row||this.column!=pos.column){var old={row:this.row,column:this.column};this.row=pos.row,this.column=pos.column,this._signal("change",{old:old,value:pos})}},this.detach=function(){this.document.removeEventListener("change",this.$onChange)},this.attach=function(doc){this.document=doc||this.document,this.document.on("change",this.$onChange)},this.$clipPositionToDocument=function(row,column){var pos={};return row>=this.document.getLength()?(pos.row=Math.max(0,this.document.getLength()-1),pos.column=this.document.getLine(pos.row).length):0>row?(pos.row=0,pos.column=0):(pos.row=row,pos.column=Math.min(this.document.getLine(pos.row).length,Math.max(0,column))),0>column&&(pos.column=0),pos}}).call(Anchor.prototype)}),ace.define("ace/document",["require","exports","module","ace/lib/oop","ace/apply_delta","ace/lib/event_emitter","ace/range","ace/anchor"],function(acequire,exports){"use strict";var oop=acequire("./lib/oop"),applyDelta=acequire("./apply_delta").applyDelta,EventEmitter=acequire("./lib/event_emitter").EventEmitter,Range=acequire("./range").Range,Anchor=acequire("./anchor").Anchor,Document=function(textOrLines){this.$lines=[""],0===textOrLines.length?this.$lines=[""]:Array.isArray(textOrLines)?this.insertMergedLines({row:0,column:0},textOrLines):this.insert({row:0,column:0},textOrLines)};(function(){oop.implement(this,EventEmitter),this.setValue=function(text){var len=this.getLength()-1;this.remove(new Range(0,0,len,this.getLine(len).length)),this.insert({row:0,column:0},text)},this.getValue=function(){return this.getAllLines().join(this.getNewLineCharacter())},this.createAnchor=function(row,column){return new Anchor(this,row,column)},this.$split=0==="aaa".split(/a/).length?function(text){return text.replace(/\\r\\n|\\r/g,"\\n").split("\\n")}:function(text){return text.split(/\\r\\n|\\r|\\n/)},this.$detectNewLine=function(text){var match=text.match(/^.*?(\\r\\n|\\r|\\n)/m);this.$autoNewLine=match?match[1]:"\\n",this._signal("changeNewLineMode")},this.getNewLineCharacter=function(){switch(this.$newLineMode){case"windows":return"\\r\\n";case"unix":return"\\n";default:return this.$autoNewLine||"\\n"}},this.$autoNewLine="",this.$newLineMode="auto",this.setNewLineMode=function(newLineMode){this.$newLineMode!==newLineMode&&(this.$newLineMode=newLineMode,this._signal("changeNewLineMode"))},this.getNewLineMode=function(){return this.$newLineMode},this.isNewLine=function(text){return"\\r\\n"==text||"\\r"==text||"\\n"==text},this.getLine=function(row){return this.$lines[row]||""},this.getLines=function(firstRow,lastRow){return this.$lines.slice(firstRow,lastRow+1)},this.getAllLines=function(){return this.getLines(0,this.getLength())},this.getLength=function(){return this.$lines.length},this.getTextRange=function(range){return this.getLinesForRange(range).join(this.getNewLineCharacter())},this.getLinesForRange=function(range){var lines;if(range.start.row===range.end.row)lines=[this.getLine(range.start.row).substring(range.start.column,range.end.column)];else{lines=this.getLines(range.start.row,range.end.row),lines[0]=(lines[0]||"").substring(range.start.column);var l=lines.length-1;range.end.row-range.start.row==l&&(lines[l]=lines[l].substring(0,range.end.column))}return lines},this.insertLines=function(row,lines){return console.warn("Use of document.insertLines is deprecated. Use the insertFullLines method instead."),this.insertFullLines(row,lines)},this.removeLines=function(firstRow,lastRow){return console.warn("Use of document.removeLines is deprecated. Use the removeFullLines method instead."),this.removeFullLines(firstRow,lastRow)},this.insertNewLine=function(position){return console.warn("Use of document.insertNewLine is deprecated. Use insertMergedLines(position, [\'\', \'\']) instead."),this.insertMergedLines(position,["",""])},this.insert=function(position,text){return 1>=this.getLength()&&this.$detectNewLine(text),this.insertMergedLines(position,this.$split(text))},this.insertInLine=function(position,text){var start=this.clippedPos(position.row,position.column),end=this.pos(position.row,position.column+text.length);return this.applyDelta({start:start,end:end,action:"insert",lines:[text]},!0),this.clonePos(end)},this.clippedPos=function(row,column){var length=this.getLength();void 0===row?row=length:0>row?row=0:row>=length&&(row=length-1,column=void 0);var line=this.getLine(row);return void 0==column&&(column=line.length),column=Math.min(Math.max(column,0),line.length),{row:row,column:column}},this.clonePos=function(pos){return{row:pos.row,column:pos.column}},this.pos=function(row,column){return{row:row,column:column}},this.$clipPosition=function(position){var length=this.getLength();return position.row>=length?(position.row=Math.max(0,length-1),position.column=this.getLine(length-1).length):(position.row=Math.max(0,position.row),position.column=Math.min(Math.max(position.column,0),this.getLine(position.row).length)),position},this.insertFullLines=function(row,lines){row=Math.min(Math.max(row,0),this.getLength());var column=0;this.getLength()>row?(lines=lines.concat([""]),column=0):(lines=[""].concat(lines),row--,column=this.$lines[row].length),this.insertMergedLines({row:row,column:column},lines)},this.insertMergedLines=function(position,lines){var start=this.clippedPos(position.row,position.column),end={row:start.row+lines.length-1,column:(1==lines.length?start.column:0)+lines[lines.length-1].length};return this.applyDelta({start:start,end:end,action:"insert",lines:lines}),this.clonePos(end)},this.remove=function(range){var start=this.clippedPos(range.start.row,range.start.column),end=this.clippedPos(range.end.row,range.end.column);return this.applyDelta({start:start,end:end,action:"remove",lines:this.getLinesForRange({start:start,end:end})}),this.clonePos(start)},this.removeInLine=function(row,startColumn,endColumn){var start=this.clippedPos(row,startColumn),end=this.clippedPos(row,endColumn);return this.applyDelta({start:start,end:end,action:"remove",lines:this.getLinesForRange({start:start,end:end})},!0),this.clonePos(start)},this.removeFullLines=function(firstRow,lastRow){firstRow=Math.min(Math.max(0,firstRow),this.getLength()-1),lastRow=Math.min(Math.max(0,lastRow),this.getLength()-1);var deleteFirstNewLine=lastRow==this.getLength()-1&&firstRow>0,deleteLastNewLine=this.getLength()-1>lastRow,startRow=deleteFirstNewLine?firstRow-1:firstRow,startCol=deleteFirstNewLine?this.getLine(startRow).length:0,endRow=deleteLastNewLine?lastRow+1:lastRow,endCol=deleteLastNewLine?0:this.getLine(endRow).length,range=new Range(startRow,startCol,endRow,endCol),deletedLines=this.$lines.slice(firstRow,lastRow+1);return this.applyDelta({start:range.start,end:range.end,action:"remove",lines:this.getLinesForRange(range)}),deletedLines},this.removeNewLine=function(row){this.getLength()-1>row&&row>=0&&this.applyDelta({start:this.pos(row,this.getLine(row).length),end:this.pos(row+1,0),action:"remove",lines:["",""]})},this.replace=function(range,text){if(range instanceof Range||(range=Range.fromPoints(range.start,range.end)),0===text.length&&range.isEmpty())return range.start;if(text==this.getTextRange(range))return range.end;this.remove(range);var end;return end=text?this.insert(range.start,text):range.start},this.applyDeltas=function(deltas){for(var i=0;deltas.length>i;i++)this.applyDelta(deltas[i])},this.revertDeltas=function(deltas){for(var i=deltas.length-1;i>=0;i--)this.revertDelta(deltas[i])},this.applyDelta=function(delta,doNotValidate){var isInsert="insert"==delta.action;(isInsert?1>=delta.lines.length&&!delta.lines[0]:!Range.comparePoints(delta.start,delta.end))||(isInsert&&delta.lines.length>2e4&&this.$splitAndapplyLargeDelta(delta,2e4),applyDelta(this.$lines,delta,doNotValidate),this._signal("change",delta))},this.$splitAndapplyLargeDelta=function(delta,MAX){for(var lines=delta.lines,l=lines.length,row=delta.start.row,column=delta.start.column,from=0,to=0;;){from=to,to+=MAX-1;var chunk=lines.slice(from,to);if(to>l){delta.lines=chunk,delta.start.row=row+from,delta.start.column=column;break}chunk.push(""),this.applyDelta({start:this.pos(row+from,column),end:this.pos(row+to,column=0),action:delta.action,lines:chunk},!0)}},this.revertDelta=function(delta){this.applyDelta({start:this.clonePos(delta.start),end:this.clonePos(delta.end),action:"insert"==delta.action?"remove":"insert",lines:delta.lines.slice()})},this.indexToPosition=function(index,startRow){for(var lines=this.$lines||this.getAllLines(),newlineLength=this.getNewLineCharacter().length,i=startRow||0,l=lines.length;l>i;i++)if(index-=lines[i].length+newlineLength,0>index)return{row:i,column:index+lines[i].length+newlineLength};return{row:l-1,column:lines[l-1].length}},this.positionToIndex=function(pos,startRow){for(var lines=this.$lines||this.getAllLines(),newlineLength=this.getNewLineCharacter().length,index=0,row=Math.min(pos.row,lines.length),i=startRow||0;row>i;++i)index+=lines[i].length+newlineLength;return index+pos.column}}).call(Document.prototype),exports.Document=Document}),ace.define("ace/lib/lang",["require","exports","module"],function(acequire,exports){"use strict";exports.last=function(a){return a[a.length-1]},exports.stringReverse=function(string){return string.split("").reverse().join("")},exports.stringRepeat=function(string,count){for(var result="";count>0;)1&count&&(result+=string),(count>>=1)&&(string+=string);return result};var trimBeginRegexp=/^\\s\\s*/,trimEndRegexp=/\\s\\s*$/;exports.stringTrimLeft=function(string){return string.replace(trimBeginRegexp,"")},exports.stringTrimRight=function(string){return string.replace(trimEndRegexp,"")},exports.copyObject=function(obj){var copy={};for(var key in obj)copy[key]=obj[key];return copy},exports.copyArray=function(array){for(var copy=[],i=0,l=array.length;l>i;i++)copy[i]=array[i]&&"object"==typeof array[i]?this.copyObject(array[i]):array[i];return copy},exports.deepCopy=function deepCopy(obj){if("object"!=typeof obj||!obj)return obj;var copy;if(Array.isArray(obj)){copy=[];for(var key=0;obj.length>key;key++)copy[key]=deepCopy(obj[key]);return copy}var cons=obj.constructor;if(cons===RegExp)return obj;copy=cons();for(var key in obj)copy[key]=deepCopy(obj[key]);return copy},exports.arrayToMap=function(arr){for(var map={},i=0;arr.length>i;i++)map[arr[i]]=1;return map},exports.createMap=function(props){var map=Object.create(null);for(var i in props)map[i]=props[i];return map},exports.arrayRemove=function(array,value){for(var i=0;array.length>=i;i++)value===array[i]&&array.splice(i,1)},exports.escapeRegExp=function(str){return str.replace(/([.*+?^${}()|[\\]\\/\\\\])/g,"\\\\$1")},exports.escapeHTML=function(str){return str.replace(/&/g,"&#38;").replace(/"/g,"&#34;").replace(/\'/g,"&#39;").replace(/</g,"&#60;")},exports.getMatchOffsets=function(string,regExp){var matches=[];return string.replace(regExp,function(str){matches.push({offset:arguments[arguments.length-2],length:str.length})}),matches},exports.deferredCall=function(fcn){var timer=null,callback=function(){timer=null,fcn()},deferred=function(timeout){return deferred.cancel(),timer=setTimeout(callback,timeout||0),deferred};return deferred.schedule=deferred,deferred.call=function(){return this.cancel(),fcn(),deferred},deferred.cancel=function(){return clearTimeout(timer),timer=null,deferred},deferred.isPending=function(){return timer},deferred},exports.delayedCall=function(fcn,defaultTimeout){var timer=null,callback=function(){timer=null,fcn()},_self=function(timeout){null==timer&&(timer=setTimeout(callback,timeout||defaultTimeout))};return _self.delay=function(timeout){timer&&clearTimeout(timer),timer=setTimeout(callback,timeout||defaultTimeout)},_self.schedule=_self,_self.call=function(){this.cancel(),fcn()},_self.cancel=function(){timer&&clearTimeout(timer),timer=null},_self.isPending=function(){return timer},_self}}),ace.define("ace/worker/mirror",["require","exports","module","ace/range","ace/document","ace/lib/lang"],function(acequire,exports){"use strict";acequire("../range").Range;var Document=acequire("../document").Document,lang=acequire("../lib/lang"),Mirror=exports.Mirror=function(sender){this.sender=sender;var doc=this.doc=new Document(""),deferredUpdate=this.deferredUpdate=lang.delayedCall(this.onUpdate.bind(this)),_self=this;sender.on("change",function(e){var data=e.data;if(data[0].start)doc.applyDeltas(data);else for(var i=0;data.length>i;i+=2){if(Array.isArray(data[i+1]))var d={action:"insert",start:data[i],lines:data[i+1]};else var d={action:"remove",start:data[i],end:data[i+1]};doc.applyDelta(d,!0)}return _self.$timeout?deferredUpdate.schedule(_self.$timeout):(_self.onUpdate(),void 0)})};(function(){this.$timeout=500,this.setTimeout=function(timeout){this.$timeout=timeout},this.setValue=function(value){this.doc.setValue(value),this.deferredUpdate.schedule(this.$timeout)},this.getValue=function(callbackId){this.sender.callback(this.doc.getValue(),callbackId)},this.onUpdate=function(){},this.isPending=function(){return this.deferredUpdate.isPending()}}).call(Mirror.prototype)}),ace.define("ace/mode/json/json_parse",["require","exports","module"],function(){"use strict";var at,ch,text,value,escapee={\'"\':\'"\',"\\\\":"\\\\","/":"/",b:"\\b",f:"\\f",n:"\\n",r:"\\r",t:"\t"},error=function(m){throw{name:"SyntaxError",message:m,at:at,text:text}},next=function(c){return c&&c!==ch&&error("Expected \'"+c+"\' instead of \'"+ch+"\'"),ch=text.charAt(at),at+=1,ch},number=function(){var number,string="";for("-"===ch&&(string="-",next("-"));ch>="0"&&"9">=ch;)string+=ch,next();if("."===ch)for(string+=".";next()&&ch>="0"&&"9">=ch;)string+=ch;if("e"===ch||"E"===ch)for(string+=ch,next(),("-"===ch||"+"===ch)&&(string+=ch,next());ch>="0"&&"9">=ch;)string+=ch,next();return number=+string,isNaN(number)?(error("Bad number"),void 0):number},string=function(){var hex,i,uffff,string="";if(\'"\'===ch)for(;next();){if(\'"\'===ch)return next(),string;if("\\\\"===ch)if(next(),"u"===ch){for(uffff=0,i=0;4>i&&(hex=parseInt(next(),16),isFinite(hex));i+=1)uffff=16*uffff+hex;string+=String.fromCharCode(uffff)}else{if("string"!=typeof escapee[ch])break;string+=escapee[ch]}else string+=ch}error("Bad string")},white=function(){for(;ch&&" ">=ch;)next()},word=function(){switch(ch){case"t":return next("t"),next("r"),next("u"),next("e"),!0;case"f":return next("f"),next("a"),next("l"),next("s"),next("e"),!1;case"n":return next("n"),next("u"),next("l"),next("l"),null}error("Unexpected \'"+ch+"\'")},array=function(){var array=[];if("["===ch){if(next("["),white(),"]"===ch)return next("]"),array;for(;ch;){if(array.push(value()),white(),"]"===ch)return next("]"),array;next(","),white()}}error("Bad array")},object=function(){var key,object={};if("{"===ch){if(next("{"),white(),"}"===ch)return next("}"),object;for(;ch;){if(key=string(),white(),next(":"),Object.hasOwnProperty.call(object,key)&&error(\'Duplicate key "\'+key+\'"\'),object[key]=value(),white(),"}"===ch)return next("}"),object;next(","),white()}}error("Bad object")};return value=function(){switch(white(),ch){case"{":return object();case"[":return array();case\'"\':return string();case"-":return number();default:return ch>="0"&&"9">=ch?number():word()}},function(source,reviver){var result;return text=source,at=0,ch=" ",result=value(),white(),ch&&error("Syntax error"),"function"==typeof reviver?function walk(holder,key){var k,v,value=holder[key];if(value&&"object"==typeof value)for(k in value)Object.hasOwnProperty.call(value,k)&&(v=walk(value,k),void 0!==v?value[k]=v:delete value[k]);return reviver.call(holder,key,value)}({"":result},""):result}}),ace.define("ace/mode/json_worker",["require","exports","module","ace/lib/oop","ace/worker/mirror","ace/mode/json/json_parse"],function(acequire,exports){"use strict";var oop=acequire("../lib/oop"),Mirror=acequire("../worker/mirror").Mirror,parse=acequire("./json/json_parse"),JsonWorker=exports.JsonWorker=function(sender){Mirror.call(this,sender),this.setTimeout(200)};oop.inherits(JsonWorker,Mirror),function(){this.onUpdate=function(){var value=this.doc.getValue(),errors=[];try{value&&parse(value)}catch(e){var pos=this.doc.indexToPosition(e.at-1);errors.push({row:pos.row,column:pos.column,text:e.message,type:"error"})}this.sender.emit("annotate",errors)}}.call(JsonWorker.prototype)}),ace.define("ace/lib/es5-shim",["require","exports","module"],function(){function Empty(){}function doesDefinePropertyWork(object){try{return Object.defineProperty(object,"sentinel",{}),"sentinel"in object}catch(exception){}}function toInteger(n){return n=+n,n!==n?n=0:0!==n&&n!==1/0&&n!==-(1/0)&&(n=(n>0||-1)*Math.floor(Math.abs(n))),n}Function.prototype.bind||(Function.prototype.bind=function(that){var target=this;if("function"!=typeof target)throw new TypeError("Function.prototype.bind called on incompatible "+target);var args=slice.call(arguments,1),bound=function(){if(this instanceof bound){var result=target.apply(this,args.concat(slice.call(arguments)));return Object(result)===result?result:this}return target.apply(that,args.concat(slice.call(arguments)))};return target.prototype&&(Empty.prototype=target.prototype,bound.prototype=new Empty,Empty.prototype=null),bound});var defineGetter,defineSetter,lookupGetter,lookupSetter,supportsAccessors,call=Function.prototype.call,prototypeOfArray=Array.prototype,prototypeOfObject=Object.prototype,slice=prototypeOfArray.slice,_toString=call.bind(prototypeOfObject.toString),owns=call.bind(prototypeOfObject.hasOwnProperty);if((supportsAccessors=owns(prototypeOfObject,"__defineGetter__"))&&(defineGetter=call.bind(prototypeOfObject.__defineGetter__),defineSetter=call.bind(prototypeOfObject.__defineSetter__),lookupGetter=call.bind(prototypeOfObject.__lookupGetter__),lookupSetter=call.bind(prototypeOfObject.__lookupSetter__)),2!=[1,2].splice(0).length)if(function(){function makeArray(l){var a=Array(l+2);return a[0]=a[1]=0,a}var lengthBefore,array=[];return array.splice.apply(array,makeArray(20)),array.splice.apply(array,makeArray(26)),lengthBefore=array.length,array.splice(5,0,"XXX"),lengthBefore+1==array.length,lengthBefore+1==array.length?!0:void 0\n}()){var array_splice=Array.prototype.splice;Array.prototype.splice=function(start,deleteCount){return arguments.length?array_splice.apply(this,[void 0===start?0:start,void 0===deleteCount?this.length-start:deleteCount].concat(slice.call(arguments,2))):[]}}else Array.prototype.splice=function(pos,removeCount){var length=this.length;pos>0?pos>length&&(pos=length):void 0==pos?pos=0:0>pos&&(pos=Math.max(length+pos,0)),length>pos+removeCount||(removeCount=length-pos);var removed=this.slice(pos,pos+removeCount),insert=slice.call(arguments,2),add=insert.length;if(pos===length)add&&this.push.apply(this,insert);else{var remove=Math.min(removeCount,length-pos),tailOldPos=pos+remove,tailNewPos=tailOldPos+add-remove,tailCount=length-tailOldPos,lengthAfterRemove=length-remove;if(tailOldPos>tailNewPos)for(var i=0;tailCount>i;++i)this[tailNewPos+i]=this[tailOldPos+i];else if(tailNewPos>tailOldPos)for(i=tailCount;i--;)this[tailNewPos+i]=this[tailOldPos+i];if(add&&pos===lengthAfterRemove)this.length=lengthAfterRemove,this.push.apply(this,insert);else for(this.length=lengthAfterRemove+add,i=0;add>i;++i)this[pos+i]=insert[i]}return removed};Array.isArray||(Array.isArray=function(obj){return"[object Array]"==_toString(obj)});var boxedString=Object("a"),splitString="a"!=boxedString[0]||!(0 in boxedString);if(Array.prototype.forEach||(Array.prototype.forEach=function(fun){var object=toObject(this),self=splitString&&"[object String]"==_toString(this)?this.split(""):object,thisp=arguments[1],i=-1,length=self.length>>>0;if("[object Function]"!=_toString(fun))throw new TypeError;for(;length>++i;)i in self&&fun.call(thisp,self[i],i,object)}),Array.prototype.map||(Array.prototype.map=function(fun){var object=toObject(this),self=splitString&&"[object String]"==_toString(this)?this.split(""):object,length=self.length>>>0,result=Array(length),thisp=arguments[1];if("[object Function]"!=_toString(fun))throw new TypeError(fun+" is not a function");for(var i=0;length>i;i++)i in self&&(result[i]=fun.call(thisp,self[i],i,object));return result}),Array.prototype.filter||(Array.prototype.filter=function(fun){var value,object=toObject(this),self=splitString&&"[object String]"==_toString(this)?this.split(""):object,length=self.length>>>0,result=[],thisp=arguments[1];if("[object Function]"!=_toString(fun))throw new TypeError(fun+" is not a function");for(var i=0;length>i;i++)i in self&&(value=self[i],fun.call(thisp,value,i,object)&&result.push(value));return result}),Array.prototype.every||(Array.prototype.every=function(fun){var object=toObject(this),self=splitString&&"[object String]"==_toString(this)?this.split(""):object,length=self.length>>>0,thisp=arguments[1];if("[object Function]"!=_toString(fun))throw new TypeError(fun+" is not a function");for(var i=0;length>i;i++)if(i in self&&!fun.call(thisp,self[i],i,object))return!1;return!0}),Array.prototype.some||(Array.prototype.some=function(fun){var object=toObject(this),self=splitString&&"[object String]"==_toString(this)?this.split(""):object,length=self.length>>>0,thisp=arguments[1];if("[object Function]"!=_toString(fun))throw new TypeError(fun+" is not a function");for(var i=0;length>i;i++)if(i in self&&fun.call(thisp,self[i],i,object))return!0;return!1}),Array.prototype.reduce||(Array.prototype.reduce=function(fun){var object=toObject(this),self=splitString&&"[object String]"==_toString(this)?this.split(""):object,length=self.length>>>0;if("[object Function]"!=_toString(fun))throw new TypeError(fun+" is not a function");if(!length&&1==arguments.length)throw new TypeError("reduce of empty array with no initial value");var result,i=0;if(arguments.length>=2)result=arguments[1];else for(;;){if(i in self){result=self[i++];break}if(++i>=length)throw new TypeError("reduce of empty array with no initial value")}for(;length>i;i++)i in self&&(result=fun.call(void 0,result,self[i],i,object));return result}),Array.prototype.reduceRight||(Array.prototype.reduceRight=function(fun){var object=toObject(this),self=splitString&&"[object String]"==_toString(this)?this.split(""):object,length=self.length>>>0;if("[object Function]"!=_toString(fun))throw new TypeError(fun+" is not a function");if(!length&&1==arguments.length)throw new TypeError("reduceRight of empty array with no initial value");var result,i=length-1;if(arguments.length>=2)result=arguments[1];else for(;;){if(i in self){result=self[i--];break}if(0>--i)throw new TypeError("reduceRight of empty array with no initial value")}do i in this&&(result=fun.call(void 0,result,self[i],i,object));while(i--);return result}),Array.prototype.indexOf&&-1==[0,1].indexOf(1,2)||(Array.prototype.indexOf=function(sought){var self=splitString&&"[object String]"==_toString(this)?this.split(""):toObject(this),length=self.length>>>0;if(!length)return-1;var i=0;for(arguments.length>1&&(i=toInteger(arguments[1])),i=i>=0?i:Math.max(0,length+i);length>i;i++)if(i in self&&self[i]===sought)return i;return-1}),Array.prototype.lastIndexOf&&-1==[0,1].lastIndexOf(0,-3)||(Array.prototype.lastIndexOf=function(sought){var self=splitString&&"[object String]"==_toString(this)?this.split(""):toObject(this),length=self.length>>>0;if(!length)return-1;var i=length-1;for(arguments.length>1&&(i=Math.min(i,toInteger(arguments[1]))),i=i>=0?i:length-Math.abs(i);i>=0;i--)if(i in self&&sought===self[i])return i;return-1}),Object.getPrototypeOf||(Object.getPrototypeOf=function(object){return object.__proto__||(object.constructor?object.constructor.prototype:prototypeOfObject)}),!Object.getOwnPropertyDescriptor){var ERR_NON_OBJECT="Object.getOwnPropertyDescriptor called on a non-object: ";Object.getOwnPropertyDescriptor=function(object,property){if("object"!=typeof object&&"function"!=typeof object||null===object)throw new TypeError(ERR_NON_OBJECT+object);if(owns(object,property)){var descriptor,getter,setter;if(descriptor={enumerable:!0,configurable:!0},supportsAccessors){var prototype=object.__proto__;object.__proto__=prototypeOfObject;var getter=lookupGetter(object,property),setter=lookupSetter(object,property);if(object.__proto__=prototype,getter||setter)return getter&&(descriptor.get=getter),setter&&(descriptor.set=setter),descriptor}return descriptor.value=object[property],descriptor}}}if(Object.getOwnPropertyNames||(Object.getOwnPropertyNames=function(object){return Object.keys(object)}),!Object.create){var createEmpty;createEmpty=null===Object.prototype.__proto__?function(){return{__proto__:null}}:function(){var empty={};for(var i in empty)empty[i]=null;return empty.constructor=empty.hasOwnProperty=empty.propertyIsEnumerable=empty.isPrototypeOf=empty.toLocaleString=empty.toString=empty.valueOf=empty.__proto__=null,empty},Object.create=function(prototype,properties){var object;if(null===prototype)object=createEmpty();else{if("object"!=typeof prototype)throw new TypeError("typeof prototype["+typeof prototype+"] != \'object\'");var Type=function(){};Type.prototype=prototype,object=new Type,object.__proto__=prototype}return void 0!==properties&&Object.defineProperties(object,properties),object}}if(Object.defineProperty){var definePropertyWorksOnObject=doesDefinePropertyWork({}),definePropertyWorksOnDom="undefined"==typeof document||doesDefinePropertyWork(document.createElement("div"));if(!definePropertyWorksOnObject||!definePropertyWorksOnDom)var definePropertyFallback=Object.defineProperty}if(!Object.defineProperty||definePropertyFallback){var ERR_NON_OBJECT_DESCRIPTOR="Property description must be an object: ",ERR_NON_OBJECT_TARGET="Object.defineProperty called on non-object: ",ERR_ACCESSORS_NOT_SUPPORTED="getters & setters can not be defined on this javascript engine";Object.defineProperty=function(object,property,descriptor){if("object"!=typeof object&&"function"!=typeof object||null===object)throw new TypeError(ERR_NON_OBJECT_TARGET+object);if("object"!=typeof descriptor&&"function"!=typeof descriptor||null===descriptor)throw new TypeError(ERR_NON_OBJECT_DESCRIPTOR+descriptor);if(definePropertyFallback)try{return definePropertyFallback.call(Object,object,property,descriptor)}catch(exception){}if(owns(descriptor,"value"))if(supportsAccessors&&(lookupGetter(object,property)||lookupSetter(object,property))){var prototype=object.__proto__;object.__proto__=prototypeOfObject,delete object[property],object[property]=descriptor.value,object.__proto__=prototype}else object[property]=descriptor.value;else{if(!supportsAccessors)throw new TypeError(ERR_ACCESSORS_NOT_SUPPORTED);owns(descriptor,"get")&&defineGetter(object,property,descriptor.get),owns(descriptor,"set")&&defineSetter(object,property,descriptor.set)}return object}}Object.defineProperties||(Object.defineProperties=function(object,properties){for(var property in properties)owns(properties,property)&&Object.defineProperty(object,property,properties[property]);return object}),Object.seal||(Object.seal=function(object){return object}),Object.freeze||(Object.freeze=function(object){return object});try{Object.freeze(function(){})}catch(exception){Object.freeze=function(freezeObject){return function(object){return"function"==typeof object?object:freezeObject(object)}}(Object.freeze)}if(Object.preventExtensions||(Object.preventExtensions=function(object){return object}),Object.isSealed||(Object.isSealed=function(){return!1}),Object.isFrozen||(Object.isFrozen=function(){return!1}),Object.isExtensible||(Object.isExtensible=function(object){if(Object(object)===object)throw new TypeError;for(var name="";owns(object,name);)name+="?";object[name]=!0;var returnValue=owns(object,name);return delete object[name],returnValue}),!Object.keys){var hasDontEnumBug=!0,dontEnums=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],dontEnumsLength=dontEnums.length;for(var key in{toString:null})hasDontEnumBug=!1;Object.keys=function(object){if("object"!=typeof object&&"function"!=typeof object||null===object)throw new TypeError("Object.keys called on a non-object");var keys=[];for(var name in object)owns(object,name)&&keys.push(name);if(hasDontEnumBug)for(var i=0,ii=dontEnumsLength;ii>i;i++){var dontEnum=dontEnums[i];owns(object,dontEnum)&&keys.push(dontEnum)}return keys}}Date.now||(Date.now=function(){return(new Date).getTime()});var ws="\t\\n\v\\f\\r   ᠎             　\\u2028\\u2029\ufeff";if(!String.prototype.trim||ws.trim()){ws="["+ws+"]";var trimBeginRegexp=RegExp("^"+ws+ws+"*"),trimEndRegexp=RegExp(ws+ws+"*$");String.prototype.trim=function(){return(this+"").replace(trimBeginRegexp,"").replace(trimEndRegexp,"")}}var toObject=function(o){if(null==o)throw new TypeError("can\'t convert "+o+" to object");return Object(o)}});');
        },
        function (t, e) {
          ace.define(
            "ace/ext/searchbox",
            [
              "require",
              "exports",
              "module",
              "ace/lib/dom",
              "ace/lib/lang",
              "ace/lib/event",
              "ace/keyboard/hash_handler",
              "ace/lib/keys",
            ],
            function (t, e, n) {
              "use strict";
              var i = t("../lib/dom"),
                r = t("../lib/lang"),
                o = t("../lib/event"),
                a = t("../keyboard/hash_handler").HashHandler,
                s = t("../lib/keys");
              i.importCssString(
                "\t.ace_search {\tbackground-color: #ddd;\tborder: 1px solid #cbcbcb;\tborder-top: 0 none;\tmax-width: 325px;\toverflow: hidden;\tmargin: 0;\tpadding: 4px;\tpadding-right: 6px;\tpadding-bottom: 0;\tposition: absolute;\ttop: 0px;\tz-index: 99;\twhite-space: normal;\t}\t.ace_search.left {\tborder-left: 0 none;\tborder-radius: 0px 0px 5px 0px;\tleft: 0;\t}\t.ace_search.right {\tborder-radius: 0px 0px 0px 5px;\tborder-right: 0 none;\tright: 0;\t}\t.ace_search_form, .ace_replace_form {\tborder-radius: 3px;\tborder: 1px solid #cbcbcb;\tfloat: left;\tmargin-bottom: 4px;\toverflow: hidden;\t}\t.ace_search_form.ace_nomatch {\toutline: 1px solid red;\t}\t.ace_search_field {\tbackground-color: white;\tborder-right: 1px solid #cbcbcb;\tborder: 0 none;\t-webkit-box-sizing: border-box;\t-moz-box-sizing: border-box;\tbox-sizing: border-box;\tfloat: left;\theight: 22px;\toutline: 0;\tpadding: 0 7px;\twidth: 214px;\tmargin: 0;\t}\t.ace_searchbtn,\t.ace_replacebtn {\tbackground: #fff;\tborder: 0 none;\tborder-left: 1px solid #dcdcdc;\tcursor: pointer;\tfloat: left;\theight: 22px;\tmargin: 0;\tposition: relative;\t}\t.ace_searchbtn:last-child,\t.ace_replacebtn:last-child {\tborder-top-right-radius: 3px;\tborder-bottom-right-radius: 3px;\t}\t.ace_searchbtn:disabled {\tbackground: none;\tcursor: default;\t}\t.ace_searchbtn {\tbackground-position: 50% 50%;\tbackground-repeat: no-repeat;\twidth: 27px;\t}\t.ace_searchbtn.prev {\tbackground-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAADFJREFUeNpiSU1NZUAC/6E0I0yACYskCpsJiySKIiY0SUZk40FyTEgCjGgKwTRAgAEAQJUIPCE+qfkAAAAASUVORK5CYII=);    \t}\t.ace_searchbtn.next {\tbackground-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAADRJREFUeNpiTE1NZQCC/0DMyIAKwGJMUAYDEo3M/s+EpvM/mkKwCQxYjIeLMaELoLMBAgwAU7UJObTKsvAAAAAASUVORK5CYII=);    \t}\t.ace_searchbtn_close {\tbackground: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAcCAYAAABRVo5BAAAAZ0lEQVR42u2SUQrAMAhDvazn8OjZBilCkYVVxiis8H4CT0VrAJb4WHT3C5xU2a2IQZXJjiQIRMdkEoJ5Q2yMqpfDIo+XY4k6h+YXOyKqTIj5REaxloNAd0xiKmAtsTHqW8sR2W5f7gCu5nWFUpVjZwAAAABJRU5ErkJggg==) no-repeat 50% 0;\tborder-radius: 50%;\tborder: 0 none;\tcolor: #656565;\tcursor: pointer;\tfloat: right;\tfont: 16px/16px Arial;\theight: 14px;\tmargin: 5px 1px 9px 5px;\tpadding: 0;\ttext-align: center;\twidth: 14px;\t}\t.ace_searchbtn_close:hover {\tbackground-color: #656565;\tbackground-position: 50% 100%;\tcolor: white;\t}\t.ace_replacebtn.prev {\twidth: 54px\t}\t.ace_replacebtn.next {\twidth: 27px\t}\t.ace_button {\tmargin-left: 2px;\tcursor: pointer;\t-webkit-user-select: none;\t-moz-user-select: none;\t-o-user-select: none;\t-ms-user-select: none;\tuser-select: none;\toverflow: hidden;\topacity: 0.7;\tborder: 1px solid rgba(100,100,100,0.23);\tpadding: 1px;\t-moz-box-sizing: border-box;\tbox-sizing:    border-box;\tcolor: black;\t}\t.ace_button:hover {\tbackground-color: #eee;\topacity:1;\t}\t.ace_button:active {\tbackground-color: #ddd;\t}\t.ace_button.checked {\tborder-color: #3399ff;\topacity:1;\t}\t.ace_search_options{\tmargin-bottom: 3px;\ttext-align: right;\t-webkit-user-select: none;\t-moz-user-select: none;\t-o-user-select: none;\t-ms-user-select: none;\tuser-select: none;\t}",
                "ace_searchbox"
              );
              var l =
                  '<div class="ace_search right">\t    <button type="button" action="hide" class="ace_searchbtn_close"></button>\t    <div class="ace_search_form">\t        <input class="ace_search_field" placeholder="Search for" spellcheck="false"></input>\t        <button type="button" action="findNext" class="ace_searchbtn next"></button>\t        <button type="button" action="findPrev" class="ace_searchbtn prev"></button>\t        <button type="button" action="findAll" class="ace_searchbtn" title="Alt-Enter">All</button>\t    </div>\t    <div class="ace_replace_form">\t        <input class="ace_search_field" placeholder="Replace with" spellcheck="false"></input>\t        <button type="button" action="replaceAndFindNext" class="ace_replacebtn">Replace</button>\t        <button type="button" action="replaceAll" class="ace_replacebtn">All</button>\t    </div>\t    <div class="ace_search_options">\t        <span action="toggleRegexpMode" class="ace_button" title="RegExp Search">.*</span>\t        <span action="toggleCaseSensitive" class="ace_button" title="CaseSensitive Search">Aa</span>\t        <span action="toggleWholeWords" class="ace_button" title="Whole Word Search">\\b</span>\t    </div>\t</div>'.replace(
                    />\s+/g,
                    ">"
                  ),
                c = function (t, e, n) {
                  var r = i.createElement("div");
                  (r.innerHTML = l),
                    (this.element = r.firstChild),
                    this.$init(),
                    this.setEditor(t);
                };
              (function () {
                (this.setEditor = function (t) {
                  (t.searchBox = this),
                    t.container.appendChild(this.element),
                    (this.editor = t);
                }),
                  (this.$initElements = function (t) {
                    (this.searchBox = t.querySelector(".ace_search_form")),
                      (this.replaceBox = t.querySelector(".ace_replace_form")),
                      (this.searchOptions = t.querySelector(
                        ".ace_search_options"
                      )),
                      (this.regExpOption = t.querySelector(
                        "[action=toggleRegexpMode]"
                      )),
                      (this.caseSensitiveOption = t.querySelector(
                        "[action=toggleCaseSensitive]"
                      )),
                      (this.wholeWordOption = t.querySelector(
                        "[action=toggleWholeWords]"
                      )),
                      (this.searchInput =
                        this.searchBox.querySelector(".ace_search_field")),
                      (this.replaceInput =
                        this.replaceBox.querySelector(".ace_search_field"));
                  }),
                  (this.$init = function () {
                    var t = this.element;
                    this.$initElements(t);
                    var e = this;
                    o.addListener(t, "mousedown", function (t) {
                      setTimeout(function () {
                        e.activeInput.focus();
                      }, 0),
                        o.stopPropagation(t);
                    }),
                      o.addListener(t, "click", function (t) {
                        var n = (t.target || t.srcElement).getAttribute(
                          "action"
                        );
                        n && e[n]
                          ? e[n]()
                          : e.$searchBarKb.commands[n] &&
                            e.$searchBarKb.commands[n].exec(e),
                          o.stopPropagation(t);
                      }),
                      o.addCommandKeyListener(t, function (t, n, i) {
                        var r = s.keyCodeToString(i),
                          a = e.$searchBarKb.findKeyCommand(n, r);
                        a && a.exec && (a.exec(e), o.stopEvent(t));
                      }),
                      (this.$onChange = r.delayedCall(function () {
                        e.find(!1, !1);
                      })),
                      o.addListener(this.searchInput, "input", function () {
                        e.$onChange.schedule(20);
                      }),
                      o.addListener(this.searchInput, "focus", function () {
                        (e.activeInput = e.searchInput),
                          e.searchInput.value && e.highlight();
                      }),
                      o.addListener(this.replaceInput, "focus", function () {
                        (e.activeInput = e.replaceInput),
                          e.searchInput.value && e.highlight();
                      });
                  }),
                  (this.$closeSearchBarKb = new a([
                    {
                      bindKey: "Esc",
                      name: "closeSearchBar",
                      exec: function (t) {
                        t.searchBox.hide();
                      },
                    },
                  ])),
                  (this.$searchBarKb = new a()),
                  this.$searchBarKb.bindKeys({
                    "Ctrl-f|Command-f": function (t) {
                      var e = (t.isReplace = !t.isReplace);
                      (t.replaceBox.style.display = e ? "" : "none"),
                        t.searchInput.focus();
                    },
                    "Ctrl-H|Command-Option-F": function (t) {
                      (t.replaceBox.style.display = ""), t.replaceInput.focus();
                    },
                    "Ctrl-G|Command-G": function (t) {
                      t.findNext();
                    },
                    "Ctrl-Shift-G|Command-Shift-G": function (t) {
                      t.findPrev();
                    },
                    esc: function (t) {
                      setTimeout(function () {
                        t.hide();
                      });
                    },
                    Return: function (t) {
                      t.activeInput == t.replaceInput && t.replace(),
                        t.findNext();
                    },
                    "Shift-Return": function (t) {
                      t.activeInput == t.replaceInput && t.replace(),
                        t.findPrev();
                    },
                    "Alt-Return": function (t) {
                      t.activeInput == t.replaceInput && t.replaceAll(),
                        t.findAll();
                    },
                    Tab: function (t) {
                      (t.activeInput == t.replaceInput
                        ? t.searchInput
                        : t.replaceInput
                      ).focus();
                    },
                  }),
                  this.$searchBarKb.addCommands([
                    {
                      name: "toggleRegexpMode",
                      bindKey: {
                        win: "Alt-R|Alt-/",
                        mac: "Ctrl-Alt-R|Ctrl-Alt-/",
                      },
                      exec: function (t) {
                        (t.regExpOption.checked = !t.regExpOption.checked),
                          t.$syncOptions();
                      },
                    },
                    {
                      name: "toggleCaseSensitive",
                      bindKey: {
                        win: "Alt-C|Alt-I",
                        mac: "Ctrl-Alt-R|Ctrl-Alt-I",
                      },
                      exec: function (t) {
                        (t.caseSensitiveOption.checked =
                          !t.caseSensitiveOption.checked),
                          t.$syncOptions();
                      },
                    },
                    {
                      name: "toggleWholeWords",
                      bindKey: {
                        win: "Alt-B|Alt-W",
                        mac: "Ctrl-Alt-B|Ctrl-Alt-W",
                      },
                      exec: function (t) {
                        (t.wholeWordOption.checked =
                          !t.wholeWordOption.checked),
                          t.$syncOptions();
                      },
                    },
                  ]),
                  (this.$syncOptions = function () {
                    i.setCssClass(
                      this.regExpOption,
                      "checked",
                      this.regExpOption.checked
                    ),
                      i.setCssClass(
                        this.wholeWordOption,
                        "checked",
                        this.wholeWordOption.checked
                      ),
                      i.setCssClass(
                        this.caseSensitiveOption,
                        "checked",
                        this.caseSensitiveOption.checked
                      ),
                      this.find(!1, !1);
                  }),
                  (this.highlight = function (t) {
                    this.editor.session.highlight(
                      t || this.editor.$search.$options.re
                    ),
                      this.editor.renderer.updateBackMarkers();
                  }),
                  (this.find = function (t, e, n) {
                    var r =
                      !this.editor.find(this.searchInput.value, {
                        skipCurrent: t,
                        backwards: e,
                        wrap: !0,
                        regExp: this.regExpOption.checked,
                        caseSensitive: this.caseSensitiveOption.checked,
                        wholeWord: this.wholeWordOption.checked,
                        preventScroll: n,
                      }) && this.searchInput.value;
                    i.setCssClass(this.searchBox, "ace_nomatch", r),
                      this.editor._emit("findSearchBox", { match: !r }),
                      this.highlight();
                  }),
                  (this.findNext = function () {
                    this.find(!0, !1);
                  }),
                  (this.findPrev = function () {
                    this.find(!0, !0);
                  }),
                  (this.findAll = function () {
                    var t =
                      !this.editor.findAll(this.searchInput.value, {
                        regExp: this.regExpOption.checked,
                        caseSensitive: this.caseSensitiveOption.checked,
                        wholeWord: this.wholeWordOption.checked,
                      }) && this.searchInput.value;
                    i.setCssClass(this.searchBox, "ace_nomatch", t),
                      this.editor._emit("findSearchBox", { match: !t }),
                      this.highlight(),
                      this.hide();
                  }),
                  (this.replace = function () {
                    this.editor.getReadOnly() ||
                      this.editor.replace(this.replaceInput.value);
                  }),
                  (this.replaceAndFindNext = function () {
                    this.editor.getReadOnly() ||
                      (this.editor.replace(this.replaceInput.value),
                      this.findNext());
                  }),
                  (this.replaceAll = function () {
                    this.editor.getReadOnly() ||
                      this.editor.replaceAll(this.replaceInput.value);
                  }),
                  (this.hide = function () {
                    (this.element.style.display = "none"),
                      this.editor.keyBinding.removeKeyboardHandler(
                        this.$closeSearchBarKb
                      ),
                      this.editor.focus();
                  }),
                  (this.show = function (t, e) {
                    (this.element.style.display = ""),
                      (this.replaceBox.style.display = e ? "" : "none"),
                      (this.isReplace = e),
                      t && (this.searchInput.value = t),
                      this.find(!1, !1, !0),
                      this.searchInput.focus(),
                      this.searchInput.select(),
                      this.editor.keyBinding.addKeyboardHandler(
                        this.$closeSearchBarKb
                      );
                  }),
                  (this.isFocused = function () {
                    var t = document.activeElement;
                    return t == this.searchInput || t == this.replaceInput;
                  });
              }).call(c.prototype),
                (e.SearchBox = c),
                (e.Search = function (t, e) {
                  (t.searchBox || new c(t)).show(t.session.getTextRange(), e);
                });
            }
          ),
            ace.acequire(["ace/ext/searchbox"], function () {});
        },
        function (t, e) {
          ace.define(
            "ace/theme/jsoneditor",
            ["require", "exports", "module", "ace/lib/dom"],
            function (t, e, n) {
              (e.isDark = !1),
                (e.cssClass = "ace-jsoneditor"),
                (e.cssText =
                  '.ace-jsoneditor .ace_gutter {\tbackground: #ebebeb;\tcolor: #333\t}\t\t.ace-jsoneditor.ace_editor {\tfont-family: droid sans mono, consolas, monospace, courier new, courier, sans-serif;\tline-height: 1.3;\t}\t.ace-jsoneditor .ace_print-margin {\twidth: 1px;\tbackground: #e8e8e8\t}\t.ace-jsoneditor .ace_scroller {\tbackground-color: #FFFFFF\t}\t.ace-jsoneditor .ace_text-layer {\tcolor: gray\t}\t.ace-jsoneditor .ace_variable {\tcolor: #1a1a1a\t}\t.ace-jsoneditor .ace_cursor {\tborder-left: 2px solid #000000\t}\t.ace-jsoneditor .ace_overwrite-cursors .ace_cursor {\tborder-left: 0px;\tborder-bottom: 1px solid #000000\t}\t.ace-jsoneditor .ace_marker-layer .ace_selection {\tbackground: lightgray\t}\t.ace-jsoneditor.ace_multiselect .ace_selection.ace_start {\tbox-shadow: 0 0 3px 0px #FFFFFF;\tborder-radius: 2px\t}\t.ace-jsoneditor .ace_marker-layer .ace_step {\tbackground: rgb(255, 255, 0)\t}\t.ace-jsoneditor .ace_marker-layer .ace_bracket {\tmargin: -1px 0 0 -1px;\tborder: 1px solid #BFBFBF\t}\t.ace-jsoneditor .ace_marker-layer .ace_active-line {\tbackground: #FFFBD1\t}\t.ace-jsoneditor .ace_gutter-active-line {\tbackground-color : #dcdcdc\t}\t.ace-jsoneditor .ace_marker-layer .ace_selected-word {\tborder: 1px solid lightgray\t}\t.ace-jsoneditor .ace_invisible {\tcolor: #BFBFBF\t}\t.ace-jsoneditor .ace_keyword,\t.ace-jsoneditor .ace_meta,\t.ace-jsoneditor .ace_support.ace_constant.ace_property-value {\tcolor: #AF956F\t}\t.ace-jsoneditor .ace_keyword.ace_operator {\tcolor: #484848\t}\t.ace-jsoneditor .ace_keyword.ace_other.ace_unit {\tcolor: #96DC5F\t}\t.ace-jsoneditor .ace_constant.ace_language {\tcolor: darkorange\t}\t.ace-jsoneditor .ace_constant.ace_numeric {\tcolor: red\t}\t.ace-jsoneditor .ace_constant.ace_character.ace_entity {\tcolor: #BF78CC\t}\t.ace-jsoneditor .ace_invalid {\tcolor: #FFFFFF;\tbackground-color: #FF002A;\t}\t.ace-jsoneditor .ace_fold {\tbackground-color: #AF956F;\tborder-color: #000000\t}\t.ace-jsoneditor .ace_storage,\t.ace-jsoneditor .ace_support.ace_class,\t.ace-jsoneditor .ace_support.ace_function,\t.ace-jsoneditor .ace_support.ace_other,\t.ace-jsoneditor .ace_support.ace_type {\tcolor: #C52727\t}\t.ace-jsoneditor .ace_string {\tcolor: green\t}\t.ace-jsoneditor .ace_comment {\tcolor: #BCC8BA\t}\t.ace-jsoneditor .ace_entity.ace_name.ace_tag,\t.ace-jsoneditor .ace_entity.ace_other.ace_attribute-name {\tcolor: #606060\t}\t.ace-jsoneditor .ace_markup.ace_underline {\ttext-decoration: underline\t}\t.ace-jsoneditor .ace_indent-guide {\tbackground: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAE0lEQVQImWP4////f4bLly//BwAmVgd1/w11/gAAAABJRU5ErkJggg==") right repeat-y\t}'),
                t("../lib/dom").importCssString(e.cssText, e.cssClass);
            }
          );
        },
      ]);
    }),
      (module.exports = factory());
  },
  function (t, e, n) {
    "use strict";
    (function (t) {
      var i = n(58),
        r = n.n(i),
        o = [
          [{ header: [!1, 1, 2, 3, 4, 5, 6] }],
          ["bold", "italic", "underline", "strike"],
          [
            { align: "" },
            { align: "center" },
            { align: "right" },
            { align: "justify" },
          ],
          ["blockquote", "code-block"],
          [{ list: "ordered" }, { list: "bullet" }, { list: "check" }],
          [{ indent: "-1" }, { indent: "+1" }],
          [{ color: [] }, { background: [] }],
          ["link", "image", "video"],
          ["clean"],
        ],
        a = {
          props: { customModules: Array },
          methods: {
            registerCustomModules: function (t) {
              void 0 !== this.customModules &&
                this.customModules.forEach(function (e) {
                  t.register("modules/" + e.alias, e.module);
                });
            },
          },
        };
      function s(t) {
        return (s =
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
      function l(t, e) {
        if (!(t instanceof e))
          throw new TypeError("Cannot call a class as a function");
      }
      function c(t) {
        return (c = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      function d(t, e) {
        return (d =
          Object.setPrototypeOf ||
          function (t, e) {
            return (t.__proto__ = e), t;
          })(t, e);
      }
      function u(t, e) {
        return !e || ("object" != typeof e && "function" != typeof e)
          ? (function (t) {
              if (void 0 === t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return t;
            })(t)
          : e;
      }
      function p(t, e) {
        return (
          (function (t) {
            if (Array.isArray(t)) return t;
          })(t) ||
          (function (t, e) {
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
          })(t, e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance"
            );
          })()
        );
      }
      var h = (function (t) {
        function e() {
          return l(this, e), u(this, c(e).apply(this, arguments));
        }
        return (
          (function (t, e) {
            if ("function" != typeof e && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              e && d(t, e);
          })(e, t),
          e
        );
      })(r.a.import("blots/block/embed"));
      (h.blotName = "hr"),
        (h.tagName = "hr"),
        r.a.register("formats/horizontal", h);
      var f,
        b = (function () {
          function t(e, n) {
            var i = this;
            l(this, t),
              (this.quill = e),
              (this.options = n),
              (this.ignoreTags = ["PRE"]),
              (this.matches = [
                {
                  name: "header",
                  pattern: /^(#){1,6}\s/g,
                  action: function (t, e, n) {
                    var r = n.exec(t);
                    if (r) {
                      var o = r[0].length;
                      setTimeout(function () {
                        i.quill.formatLine(e.index, 0, "header", o - 1),
                          i.quill.deleteText(e.index - o, o);
                      }, 0);
                    }
                  },
                },
                {
                  name: "blockquote",
                  pattern: /^(>)\s/g,
                  action: function (t, e) {
                    setTimeout(function () {
                      i.quill.formatLine(e.index, 1, "blockquote", !0),
                        i.quill.deleteText(e.index - 2, 2);
                    }, 0);
                  },
                },
                {
                  name: "code-block",
                  pattern: /^`{3}(?:\s|\n)/g,
                  action: function (t, e) {
                    setTimeout(function () {
                      i.quill.formatLine(e.index, 1, "code-block", !0),
                        i.quill.deleteText(e.index - 4, 4);
                    }, 0);
                  },
                },
                {
                  name: "bolditalic",
                  pattern: /(?:\*|_){3}(.+?)(?:\*|_){3}/g,
                  action: function (t, e, n, r) {
                    var o = n.exec(t),
                      a = o[0],
                      s = o[1],
                      l = r + o.index;
                    t.match(/^([*_ \n]+)$/g) ||
                      setTimeout(function () {
                        i.quill.deleteText(l, a.length),
                          i.quill.insertText(l, s, { bold: !0, italic: !0 }),
                          i.quill.format("bold", !1);
                      }, 0);
                  },
                },
                {
                  name: "bold",
                  pattern: /(?:\*|_){2}(.+?)(?:\*|_){2}/g,
                  action: function (t, e, n, r) {
                    var o = n.exec(t),
                      a = o[0],
                      s = o[1],
                      l = r + o.index;
                    t.match(/^([*_ \n]+)$/g) ||
                      setTimeout(function () {
                        i.quill.deleteText(l, a.length),
                          i.quill.insertText(l, s, { bold: !0 }),
                          i.quill.format("bold", !1);
                      }, 0);
                  },
                },
                {
                  name: "italic",
                  pattern: /(?:\*|_){1}(.+?)(?:\*|_){1}/g,
                  action: function (t, e, n, r) {
                    var o = n.exec(t),
                      a = o[0],
                      s = o[1],
                      l = r + o.index;
                    t.match(/^([*_ \n]+)$/g) ||
                      setTimeout(function () {
                        i.quill.deleteText(l, a.length),
                          i.quill.insertText(l, s, { italic: !0 }),
                          i.quill.format("italic", !1);
                      }, 0);
                  },
                },
                {
                  name: "strikethrough",
                  pattern: /(?:~~)(.+?)(?:~~)/g,
                  action: function (t, e, n, r) {
                    var o = n.exec(t),
                      a = o[0],
                      s = o[1],
                      l = r + o.index;
                    t.match(/^([*_ \n]+)$/g) ||
                      setTimeout(function () {
                        i.quill.deleteText(l, a.length),
                          i.quill.insertText(l, s, { strike: !0 }),
                          i.quill.format("strike", !1);
                      }, 0);
                  },
                },
                {
                  name: "code",
                  pattern: /(?:`)(.+?)(?:`)/g,
                  action: function (t, e, n, r) {
                    var o = n.exec(t),
                      a = o[0],
                      s = o[1],
                      l = r + o.index;
                    t.match(/^([*_ \n]+)$/g) ||
                      setTimeout(function () {
                        i.quill.deleteText(l, a.length),
                          i.quill.insertText(l, s, { code: !0 }),
                          i.quill.format("code", !1),
                          i.quill.insertText(i.quill.getSelection(), " ");
                      }, 0);
                  },
                },
                {
                  name: "hr",
                  pattern: /^([-*]\s?){3}/g,
                  action: function (t, e) {
                    var n = e.index - t.length;
                    setTimeout(function () {
                      i.quill.deleteText(n, t.length),
                        i.quill.insertEmbed(n + 1, "hr", !0, r.a.sources.USER),
                        i.quill.insertText(n + 2, "\n", r.a.sources.SILENT),
                        i.quill.setSelection(n + 2, r.a.sources.SILENT);
                    }, 0);
                  },
                },
                {
                  name: "asterisk-ul",
                  pattern: /^(\*|\+)\s$/g,
                  action: function (t, e, n) {
                    setTimeout(function () {
                      i.quill.formatLine(e.index, 1, "list", "unordered"),
                        i.quill.deleteText(e.index - 2, 2);
                    }, 0);
                  },
                },
                {
                  name: "image",
                  pattern: /(?:!\[(.+?)\])(?:\((.+?)\))/g,
                  action: function (t, e, n) {
                    var r = t.search(n),
                      o = t.match(n)[0],
                      a = t.match(/(?:\((.*?)\))/g)[0],
                      s = e.index - o.length - 1;
                    -1 !== r &&
                      setTimeout(function () {
                        i.quill.deleteText(s, o.length),
                          i.quill.insertEmbed(
                            s,
                            "image",
                            a.slice(1, a.length - 1)
                          );
                      }, 0);
                  },
                },
                {
                  name: "link",
                  pattern: /(?:\[(.+?)\])(?:\((.+?)\))/g,
                  action: function (t, e, n) {
                    var r = t.search(n),
                      o = t.match(n)[0],
                      a = t.match(/(?:\[(.*?)\])/g)[0],
                      s = t.match(/(?:\((.*?)\))/g)[0],
                      l = e.index - o.length - 1;
                    -1 !== r &&
                      setTimeout(function () {
                        i.quill.deleteText(l, o.length),
                          i.quill.insertText(
                            l,
                            a.slice(1, a.length - 1),
                            "link",
                            s.slice(1, s.length - 1)
                          );
                      }, 0);
                  },
                },
              ]),
              this.quill.on("text-change", function (t, e, n) {
                for (var r = 0; r < t.ops.length; r++)
                  t.ops[r].hasOwnProperty("insert") &&
                    (" " === t.ops[r].insert
                      ? i.onSpace()
                      : "\n" === t.ops[r].insert && i.onEnter());
              });
          }
          var e;
          return (
            (e = [
              {
                key: "isValid",
                value: function (t, e) {
                  return void 0 !== t && t && -1 === this.ignoreTags.indexOf(e);
                },
              },
              {
                key: "onSpace",
                value: function () {
                  var t = this.quill.getSelection();
                  if (t) {
                    var e = p(this.quill.getLine(t.index), 2),
                      n = e[0],
                      i = e[1],
                      r = n.domNode.textContent,
                      o = t.index - i;
                    if (this.isValid(r, n.domNode.tagName)) {
                      var a = !0,
                        s = !1,
                        l = void 0;
                      try {
                        for (
                          var c, d = this.matches[Symbol.iterator]();
                          !(a = (c = d.next()).done);
                          a = !0
                        ) {
                          var u = c.value;
                          if (r.match(u.pattern))
                            return void u.action(r, t, u.pattern, o);
                        }
                      } catch (t) {
                        (s = !0), (l = t);
                      } finally {
                        try {
                          a || null == d.return || d.return();
                        } finally {
                          if (s) throw l;
                        }
                      }
                    }
                  }
                },
              },
              {
                key: "onEnter",
                value: function () {
                  var t = this.quill.getSelection();
                  if (t) {
                    var e = p(this.quill.getLine(t.index), 2),
                      n = e[0],
                      i = e[1],
                      r = n.domNode.textContent + " ",
                      o = t.index - i;
                    if (
                      ((t.length = t.index++),
                      this.isValid(r, n.domNode.tagName))
                    ) {
                      var a = !0,
                        s = !1,
                        l = void 0;
                      try {
                        for (
                          var c, d = this.matches[Symbol.iterator]();
                          !(a = (c = d.next()).done);
                          a = !0
                        ) {
                          var u = c.value;
                          if (r.match(u.pattern))
                            return void u.action(r, t, u.pattern, o);
                        }
                      } catch (t) {
                        (s = !0), (l = t);
                      } finally {
                        try {
                          a || null == d.return || d.return();
                        } finally {
                          if (s) throw l;
                        }
                      }
                    }
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
              })(t.prototype, e),
            t
          );
        })(),
        m = {
          name: "VueEditor",
          mixins: [a],
          props: {
            id: { type: String, default: "quill-container" },
            placeholder: { type: String, default: "" },
            value: { type: String, default: "" },
            disabled: { type: Boolean },
            editorToolbar: {
              type: Array,
              default: function () {
                return [];
              },
            },
            editorOptions: {
              type: Object,
              required: !1,
              default: function () {
                return {};
              },
            },
            useCustomImageHandler: { type: Boolean, default: !1 },
            useMarkdownShortcuts: { type: Boolean, default: !1 },
          },
          data: function () {
            return { quill: null };
          },
          watch: {
            value: function (t) {
              t == this.quill.root.innerHTML ||
                this.quill.hasFocus() ||
                (this.quill.root.innerHTML = t);
            },
            disabled: function (t) {
              this.quill.enable(!t);
            },
          },
          mounted: function () {
            this.registerCustomModules(r.a),
              this.registerPrototypes(),
              this.initializeEditor();
          },
          beforeDestroy: function () {
            (this.quill = null), delete this.quill;
          },
          methods: {
            initializeEditor: function () {
              this.setupQuillEditor(),
                this.checkForCustomImageHandler(),
                this.handleInitialContent(),
                this.registerEditorEventListeners(),
                this.$emit("ready", this.quill);
            },
            setupQuillEditor: function () {
              var t = {
                debug: !1,
                modules: this.setModules(),
                theme: "snow",
                placeholder: this.placeholder ? this.placeholder : "",
                readOnly: !!this.disabled && this.disabled,
              };
              this.prepareEditorConfig(t),
                (this.quill = new r.a(this.$refs.quillContainer, t));
            },
            setModules: function () {
              var t = {
                toolbar: this.editorToolbar.length ? this.editorToolbar : o,
              };
              return (
                this.useMarkdownShortcuts &&
                  (r.a.register("modules/markdownShortcuts", b, !0),
                  (t.markdownShortcuts = {})),
                t
              );
            },
            prepareEditorConfig: function (t) {
              Object.keys(this.editorOptions).length > 0 &&
                this.editorOptions.constructor === Object &&
                (this.editorOptions.modules &&
                  void 0 !== this.editorOptions.modules.toolbar &&
                  delete t.modules.toolbar,
                (function t(e, n) {
                  var i = function (t) {
                    return t && "object" === s(t);
                  };
                  return i(e) && i(n)
                    ? (Object.keys(n).forEach(function (r) {
                        var o = e[r],
                          a = n[r];
                        Array.isArray(o) && Array.isArray(a)
                          ? (e[r] = o.concat(a))
                          : i(o) && i(a)
                          ? (e[r] = t(Object.assign({}, o), a))
                          : (e[r] = a);
                      }),
                      e)
                    : n;
                })(t, this.editorOptions));
            },
            registerPrototypes: function () {
              (r.a.prototype.getHTML = function () {
                return this.container.querySelector(".ql-editor").innerHTML;
              }),
                (r.a.prototype.getWordCount = function () {
                  return this.container.querySelector(".ql-editor").innerText
                    .length;
                });
            },
            registerEditorEventListeners: function () {
              this.quill.on("text-change", this.handleTextChange),
                this.quill.on("selection-change", this.handleSelectionChange),
                this.listenForEditorEvent("text-change"),
                this.listenForEditorEvent("selection-change"),
                this.listenForEditorEvent("editor-change");
            },
            listenForEditorEvent: function (t) {
              var e = this;
              this.quill.on(t, function () {
                for (
                  var n = arguments.length, i = new Array(n), r = 0;
                  r < n;
                  r++
                )
                  i[r] = arguments[r];
                e.$emit.apply(e, [t].concat(i));
              });
            },
            handleInitialContent: function () {
              this.value && (this.quill.root.innerHTML = this.value);
            },
            handleSelectionChange: function (t, e) {
              !t && e
                ? this.$emit("blur", this.quill)
                : t && !e && this.$emit("focus", this.quill);
            },
            handleTextChange: function (t, e) {
              var n =
                "<p><br></p>" === this.quill.getHTML()
                  ? ""
                  : this.quill.getHTML();
              this.$emit("input", n),
                this.useCustomImageHandler && this.handleImageRemoved(t, e);
            },
            handleImageRemoved: function (t, e) {
              var n = this;
              this.quill
                .getContents()
                .diff(e)
                .ops.map(function (t) {
                  if (t.insert && t.insert.hasOwnProperty("image")) {
                    var e = t.insert.image;
                    n.$emit("image-removed", e);
                  }
                });
            },
            checkForCustomImageHandler: function () {
              !0 === this.useCustomImageHandler &&
                this.setupCustomImageHandler();
            },
            setupCustomImageHandler: function () {
              this.quill
                .getModule("toolbar")
                .addHandler("image", this.customImageHandler);
            },
            customImageHandler: function () {
              this.$refs.fileInput.click();
            },
            emitImageInfo: function (t) {
              var e = t.target.files[0],
                n = this.quill,
                i = n.getSelection().index;
              this.$emit("image-added", e, n, i, function () {
                document.getElementById("file-upload").value = "";
              });
            },
          },
        },
        g =
          "undefined" != typeof navigator &&
          /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase()),
        v = {},
        _ = (function (t, e, n, i, r, o, a, s, l, c) {
          "boolean" != typeof a && ((s = a), (a = !1));
          var d,
            u = "function" == typeof n ? n.options : n;
          if (
            (t &&
              t.render &&
              ((u.render = t.render),
              (u.staticRenderFns = t.staticRenderFns),
              (u._compiled = !0)),
            e &&
              (d = a
                ? function () {
                    e.call(this, (void 0)(this.$root.$options.shadowRoot));
                  }
                : function (t) {
                    e.call(this, s(t));
                  }),
            d)
          )
            if (u.functional) {
              var p = u.render;
              u.render = function (t, e) {
                return d.call(e), p(t, e);
              };
            } else {
              var h = u.beforeCreate;
              u.beforeCreate = h ? [].concat(h, d) : [d];
            }
          return n;
        })(
          {
            render: function () {
              var t = this,
                e = t.$createElement,
                n = t._self._c || e;
              return n(
                "div",
                { staticClass: "quillWrapper" },
                [
                  t._t("toolbar"),
                  t._v(" "),
                  n("div", { ref: "quillContainer", attrs: { id: t.id } }),
                  t._v(" "),
                  t.useCustomImageHandler
                    ? n("input", {
                        ref: "fileInput",
                        staticStyle: { display: "none" },
                        attrs: {
                          id: "file-upload",
                          type: "file",
                          accept: "image/*",
                        },
                        on: {
                          change: function (e) {
                            return t.emitImageInfo(e);
                          },
                        },
                      })
                    : t._e(),
                ],
                2
              );
            },
            staticRenderFns: [],
          },
          function (t) {
            t &&
              (t("data-v-776e788e_0", {
                source:
                  "/*!\n * Quill Editor v1.3.6\n * https://quilljs.com/\n * Copyright (c) 2014, Jason Chen\n * Copyright (c) 2013, salesforce.com\n */.ql-container{box-sizing:border-box;font-family:Helvetica,Arial,sans-serif;font-size:13px;height:100%;margin:0;position:relative}.ql-container.ql-disabled .ql-tooltip{visibility:hidden}.ql-container.ql-disabled .ql-editor ul[data-checked]>li::before{pointer-events:none}.ql-clipboard{left:-100000px;height:1px;overflow-y:hidden;position:absolute;top:50%}.ql-clipboard p{margin:0;padding:0}.ql-editor{box-sizing:border-box;line-height:1.42;height:100%;outline:0;overflow-y:auto;padding:12px 15px;tab-size:4;-moz-tab-size:4;text-align:left;white-space:pre-wrap;word-wrap:break-word}.ql-editor>*{cursor:text}.ql-editor blockquote,.ql-editor h1,.ql-editor h2,.ql-editor h3,.ql-editor h4,.ql-editor h5,.ql-editor h6,.ql-editor ol,.ql-editor p,.ql-editor pre,.ql-editor ul{margin:0;padding:0;counter-reset:list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9}.ql-editor ol,.ql-editor ul{padding-left:1.5em}.ql-editor ol>li,.ql-editor ul>li{list-style-type:none}.ql-editor ul>li::before{content:'\\2022'}.ql-editor ul[data-checked=false],.ql-editor ul[data-checked=true]{pointer-events:none}.ql-editor ul[data-checked=false]>li *,.ql-editor ul[data-checked=true]>li *{pointer-events:all}.ql-editor ul[data-checked=false]>li::before,.ql-editor ul[data-checked=true]>li::before{color:#777;cursor:pointer;pointer-events:all}.ql-editor ul[data-checked=true]>li::before{content:'\\2611'}.ql-editor ul[data-checked=false]>li::before{content:'\\2610'}.ql-editor li::before{display:inline-block;white-space:nowrap;width:1.2em}.ql-editor li:not(.ql-direction-rtl)::before{margin-left:-1.5em;margin-right:.3em;text-align:right}.ql-editor li.ql-direction-rtl::before{margin-left:.3em;margin-right:-1.5em}.ql-editor ol li:not(.ql-direction-rtl),.ql-editor ul li:not(.ql-direction-rtl){padding-left:1.5em}.ql-editor ol li.ql-direction-rtl,.ql-editor ul li.ql-direction-rtl{padding-right:1.5em}.ql-editor ol li{counter-reset:list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;counter-increment:list-0}.ql-editor ol li:before{content:counter(list-0,decimal) '. '}.ql-editor ol li.ql-indent-1{counter-increment:list-1}.ql-editor ol li.ql-indent-1:before{content:counter(list-1,lower-alpha) '. '}.ql-editor ol li.ql-indent-1{counter-reset:list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9}.ql-editor ol li.ql-indent-2{counter-increment:list-2}.ql-editor ol li.ql-indent-2:before{content:counter(list-2,lower-roman) '. '}.ql-editor ol li.ql-indent-2{counter-reset:list-3 list-4 list-5 list-6 list-7 list-8 list-9}.ql-editor ol li.ql-indent-3{counter-increment:list-3}.ql-editor ol li.ql-indent-3:before{content:counter(list-3,decimal) '. '}.ql-editor ol li.ql-indent-3{counter-reset:list-4 list-5 list-6 list-7 list-8 list-9}.ql-editor ol li.ql-indent-4{counter-increment:list-4}.ql-editor ol li.ql-indent-4:before{content:counter(list-4,lower-alpha) '. '}.ql-editor ol li.ql-indent-4{counter-reset:list-5 list-6 list-7 list-8 list-9}.ql-editor ol li.ql-indent-5{counter-increment:list-5}.ql-editor ol li.ql-indent-5:before{content:counter(list-5,lower-roman) '. '}.ql-editor ol li.ql-indent-5{counter-reset:list-6 list-7 list-8 list-9}.ql-editor ol li.ql-indent-6{counter-increment:list-6}.ql-editor ol li.ql-indent-6:before{content:counter(list-6,decimal) '. '}.ql-editor ol li.ql-indent-6{counter-reset:list-7 list-8 list-9}.ql-editor ol li.ql-indent-7{counter-increment:list-7}.ql-editor ol li.ql-indent-7:before{content:counter(list-7,lower-alpha) '. '}.ql-editor ol li.ql-indent-7{counter-reset:list-8 list-9}.ql-editor ol li.ql-indent-8{counter-increment:list-8}.ql-editor ol li.ql-indent-8:before{content:counter(list-8,lower-roman) '. '}.ql-editor ol li.ql-indent-8{counter-reset:list-9}.ql-editor ol li.ql-indent-9{counter-increment:list-9}.ql-editor ol li.ql-indent-9:before{content:counter(list-9,decimal) '. '}.ql-editor .ql-indent-1:not(.ql-direction-rtl){padding-left:3em}.ql-editor li.ql-indent-1:not(.ql-direction-rtl){padding-left:4.5em}.ql-editor .ql-indent-1.ql-direction-rtl.ql-align-right{padding-right:3em}.ql-editor li.ql-indent-1.ql-direction-rtl.ql-align-right{padding-right:4.5em}.ql-editor .ql-indent-2:not(.ql-direction-rtl){padding-left:6em}.ql-editor li.ql-indent-2:not(.ql-direction-rtl){padding-left:7.5em}.ql-editor .ql-indent-2.ql-direction-rtl.ql-align-right{padding-right:6em}.ql-editor li.ql-indent-2.ql-direction-rtl.ql-align-right{padding-right:7.5em}.ql-editor .ql-indent-3:not(.ql-direction-rtl){padding-left:9em}.ql-editor li.ql-indent-3:not(.ql-direction-rtl){padding-left:10.5em}.ql-editor .ql-indent-3.ql-direction-rtl.ql-align-right{padding-right:9em}.ql-editor li.ql-indent-3.ql-direction-rtl.ql-align-right{padding-right:10.5em}.ql-editor .ql-indent-4:not(.ql-direction-rtl){padding-left:12em}.ql-editor li.ql-indent-4:not(.ql-direction-rtl){padding-left:13.5em}.ql-editor .ql-indent-4.ql-direction-rtl.ql-align-right{padding-right:12em}.ql-editor li.ql-indent-4.ql-direction-rtl.ql-align-right{padding-right:13.5em}.ql-editor .ql-indent-5:not(.ql-direction-rtl){padding-left:15em}.ql-editor li.ql-indent-5:not(.ql-direction-rtl){padding-left:16.5em}.ql-editor .ql-indent-5.ql-direction-rtl.ql-align-right{padding-right:15em}.ql-editor li.ql-indent-5.ql-direction-rtl.ql-align-right{padding-right:16.5em}.ql-editor .ql-indent-6:not(.ql-direction-rtl){padding-left:18em}.ql-editor li.ql-indent-6:not(.ql-direction-rtl){padding-left:19.5em}.ql-editor .ql-indent-6.ql-direction-rtl.ql-align-right{padding-right:18em}.ql-editor li.ql-indent-6.ql-direction-rtl.ql-align-right{padding-right:19.5em}.ql-editor .ql-indent-7:not(.ql-direction-rtl){padding-left:21em}.ql-editor li.ql-indent-7:not(.ql-direction-rtl){padding-left:22.5em}.ql-editor .ql-indent-7.ql-direction-rtl.ql-align-right{padding-right:21em}.ql-editor li.ql-indent-7.ql-direction-rtl.ql-align-right{padding-right:22.5em}.ql-editor .ql-indent-8:not(.ql-direction-rtl){padding-left:24em}.ql-editor li.ql-indent-8:not(.ql-direction-rtl){padding-left:25.5em}.ql-editor .ql-indent-8.ql-direction-rtl.ql-align-right{padding-right:24em}.ql-editor li.ql-indent-8.ql-direction-rtl.ql-align-right{padding-right:25.5em}.ql-editor .ql-indent-9:not(.ql-direction-rtl){padding-left:27em}.ql-editor li.ql-indent-9:not(.ql-direction-rtl){padding-left:28.5em}.ql-editor .ql-indent-9.ql-direction-rtl.ql-align-right{padding-right:27em}.ql-editor li.ql-indent-9.ql-direction-rtl.ql-align-right{padding-right:28.5em}.ql-editor .ql-video{display:block;max-width:100%}.ql-editor .ql-video.ql-align-center{margin:0 auto}.ql-editor .ql-video.ql-align-right{margin:0 0 0 auto}.ql-editor .ql-bg-black{background-color:#000}.ql-editor .ql-bg-red{background-color:#e60000}.ql-editor .ql-bg-orange{background-color:#f90}.ql-editor .ql-bg-yellow{background-color:#ff0}.ql-editor .ql-bg-green{background-color:#008a00}.ql-editor .ql-bg-blue{background-color:#06c}.ql-editor .ql-bg-purple{background-color:#93f}.ql-editor .ql-color-white{color:#fff}.ql-editor .ql-color-red{color:#e60000}.ql-editor .ql-color-orange{color:#f90}.ql-editor .ql-color-yellow{color:#ff0}.ql-editor .ql-color-green{color:#008a00}.ql-editor .ql-color-blue{color:#06c}.ql-editor .ql-color-purple{color:#93f}.ql-editor .ql-font-serif{font-family:Georgia,Times New Roman,serif}.ql-editor .ql-font-monospace{font-family:Monaco,Courier New,monospace}.ql-editor .ql-size-small{font-size:.75em}.ql-editor .ql-size-large{font-size:1.5em}.ql-editor .ql-size-huge{font-size:2.5em}.ql-editor .ql-direction-rtl{direction:rtl;text-align:inherit}.ql-editor .ql-align-center{text-align:center}.ql-editor .ql-align-justify{text-align:justify}.ql-editor .ql-align-right{text-align:right}.ql-editor.ql-blank::before{color:rgba(0,0,0,.6);content:attr(data-placeholder);font-style:italic;left:15px;pointer-events:none;position:absolute;right:15px}.ql-snow .ql-toolbar:after,.ql-snow.ql-toolbar:after{clear:both;content:'';display:table}.ql-snow .ql-toolbar button,.ql-snow.ql-toolbar button{background:0 0;border:none;cursor:pointer;display:inline-block;float:left;height:24px;padding:3px 5px;width:28px}.ql-snow .ql-toolbar button svg,.ql-snow.ql-toolbar button svg{float:left;height:100%}.ql-snow .ql-toolbar button:active:hover,.ql-snow.ql-toolbar button:active:hover{outline:0}.ql-snow .ql-toolbar input.ql-image[type=file],.ql-snow.ql-toolbar input.ql-image[type=file]{display:none}.ql-snow .ql-toolbar .ql-picker-item.ql-selected,.ql-snow .ql-toolbar .ql-picker-item:hover,.ql-snow .ql-toolbar .ql-picker-label.ql-active,.ql-snow .ql-toolbar .ql-picker-label:hover,.ql-snow .ql-toolbar button.ql-active,.ql-snow .ql-toolbar button:focus,.ql-snow .ql-toolbar button:hover,.ql-snow.ql-toolbar .ql-picker-item.ql-selected,.ql-snow.ql-toolbar .ql-picker-item:hover,.ql-snow.ql-toolbar .ql-picker-label.ql-active,.ql-snow.ql-toolbar .ql-picker-label:hover,.ql-snow.ql-toolbar button.ql-active,.ql-snow.ql-toolbar button:focus,.ql-snow.ql-toolbar button:hover{color:#06c}.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-fill,.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill,.ql-snow .ql-toolbar .ql-picker-item:hover .ql-fill,.ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-fill,.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,.ql-snow .ql-toolbar .ql-picker-label:hover .ql-fill,.ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,.ql-snow .ql-toolbar button.ql-active .ql-fill,.ql-snow .ql-toolbar button.ql-active .ql-stroke.ql-fill,.ql-snow .ql-toolbar button:focus .ql-fill,.ql-snow .ql-toolbar button:focus .ql-stroke.ql-fill,.ql-snow .ql-toolbar button:hover .ql-fill,.ql-snow .ql-toolbar button:hover .ql-stroke.ql-fill,.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-fill,.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill,.ql-snow.ql-toolbar .ql-picker-item:hover .ql-fill,.ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-fill,.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,.ql-snow.ql-toolbar .ql-picker-label:hover .ql-fill,.ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,.ql-snow.ql-toolbar button.ql-active .ql-fill,.ql-snow.ql-toolbar button.ql-active .ql-stroke.ql-fill,.ql-snow.ql-toolbar button:focus .ql-fill,.ql-snow.ql-toolbar button:focus .ql-stroke.ql-fill,.ql-snow.ql-toolbar button:hover .ql-fill,.ql-snow.ql-toolbar button:hover .ql-stroke.ql-fill{fill:#06c}.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke,.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter,.ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke,.ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke-miter,.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke,.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,.ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke,.ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke-miter,.ql-snow .ql-toolbar button.ql-active .ql-stroke,.ql-snow .ql-toolbar button.ql-active .ql-stroke-miter,.ql-snow .ql-toolbar button:focus .ql-stroke,.ql-snow .ql-toolbar button:focus .ql-stroke-miter,.ql-snow .ql-toolbar button:hover .ql-stroke,.ql-snow .ql-toolbar button:hover .ql-stroke-miter,.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke,.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter,.ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke,.ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke-miter,.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke,.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,.ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke,.ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke-miter,.ql-snow.ql-toolbar button.ql-active .ql-stroke,.ql-snow.ql-toolbar button.ql-active .ql-stroke-miter,.ql-snow.ql-toolbar button:focus .ql-stroke,.ql-snow.ql-toolbar button:focus .ql-stroke-miter,.ql-snow.ql-toolbar button:hover .ql-stroke,.ql-snow.ql-toolbar button:hover .ql-stroke-miter{stroke:#06c}@media (pointer:coarse){.ql-snow .ql-toolbar button:hover:not(.ql-active),.ql-snow.ql-toolbar button:hover:not(.ql-active){color:#444}.ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-fill,.ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill,.ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-fill,.ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill{fill:#444}.ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke,.ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter,.ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke,.ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter{stroke:#444}}.ql-snow{box-sizing:border-box}.ql-snow *{box-sizing:border-box}.ql-snow .ql-hidden{display:none}.ql-snow .ql-out-bottom,.ql-snow .ql-out-top{visibility:hidden}.ql-snow .ql-tooltip{position:absolute;transform:translateY(10px)}.ql-snow .ql-tooltip a{cursor:pointer;text-decoration:none}.ql-snow .ql-tooltip.ql-flip{transform:translateY(-10px)}.ql-snow .ql-formats{display:inline-block;vertical-align:middle}.ql-snow .ql-formats:after{clear:both;content:'';display:table}.ql-snow .ql-stroke{fill:none;stroke:#444;stroke-linecap:round;stroke-linejoin:round;stroke-width:2}.ql-snow .ql-stroke-miter{fill:none;stroke:#444;stroke-miterlimit:10;stroke-width:2}.ql-snow .ql-fill,.ql-snow .ql-stroke.ql-fill{fill:#444}.ql-snow .ql-empty{fill:none}.ql-snow .ql-even{fill-rule:evenodd}.ql-snow .ql-stroke.ql-thin,.ql-snow .ql-thin{stroke-width:1}.ql-snow .ql-transparent{opacity:.4}.ql-snow .ql-direction svg:last-child{display:none}.ql-snow .ql-direction.ql-active svg:last-child{display:inline}.ql-snow .ql-direction.ql-active svg:first-child{display:none}.ql-snow .ql-editor h1{font-size:2em}.ql-snow .ql-editor h2{font-size:1.5em}.ql-snow .ql-editor h3{font-size:1.17em}.ql-snow .ql-editor h4{font-size:1em}.ql-snow .ql-editor h5{font-size:.83em}.ql-snow .ql-editor h6{font-size:.67em}.ql-snow .ql-editor a{text-decoration:underline}.ql-snow .ql-editor blockquote{border-left:4px solid #ccc;margin-bottom:5px;margin-top:5px;padding-left:16px}.ql-snow .ql-editor code,.ql-snow .ql-editor pre{background-color:#f0f0f0;border-radius:3px}.ql-snow .ql-editor pre{white-space:pre-wrap;margin-bottom:5px;margin-top:5px;padding:5px 10px}.ql-snow .ql-editor code{font-size:85%;padding:2px 4px}.ql-snow .ql-editor pre.ql-syntax{background-color:#23241f;color:#f8f8f2;overflow:visible}.ql-snow .ql-editor img{max-width:100%}.ql-snow .ql-picker{color:#444;display:inline-block;float:left;font-size:14px;font-weight:500;height:24px;position:relative;vertical-align:middle}.ql-snow .ql-picker-label{cursor:pointer;display:inline-block;height:100%;padding-left:8px;padding-right:2px;position:relative;width:100%}.ql-snow .ql-picker-label::before{display:inline-block;line-height:22px}.ql-snow .ql-picker-options{background-color:#fff;display:none;min-width:100%;padding:4px 8px;position:absolute;white-space:nowrap}.ql-snow .ql-picker-options .ql-picker-item{cursor:pointer;display:block;padding-bottom:5px;padding-top:5px}.ql-snow .ql-picker.ql-expanded .ql-picker-label{color:#ccc;z-index:2}.ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-fill{fill:#ccc}.ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-stroke{stroke:#ccc}.ql-snow .ql-picker.ql-expanded .ql-picker-options{display:block;margin-top:-1px;top:100%;z-index:1}.ql-snow .ql-color-picker,.ql-snow .ql-icon-picker{width:28px}.ql-snow .ql-color-picker .ql-picker-label,.ql-snow .ql-icon-picker .ql-picker-label{padding:2px 4px}.ql-snow .ql-color-picker .ql-picker-label svg,.ql-snow .ql-icon-picker .ql-picker-label svg{right:4px}.ql-snow .ql-icon-picker .ql-picker-options{padding:4px 0}.ql-snow .ql-icon-picker .ql-picker-item{height:24px;width:24px;padding:2px 4px}.ql-snow .ql-color-picker .ql-picker-options{padding:3px 5px;width:152px}.ql-snow .ql-color-picker .ql-picker-item{border:1px solid transparent;float:left;height:16px;margin:2px;padding:0;width:16px}.ql-snow .ql-picker:not(.ql-color-picker):not(.ql-icon-picker) svg{position:absolute;margin-top:-9px;right:0;top:50%;width:18px}.ql-snow .ql-picker.ql-font .ql-picker-item[data-label]:not([data-label=''])::before,.ql-snow .ql-picker.ql-font .ql-picker-label[data-label]:not([data-label=''])::before,.ql-snow .ql-picker.ql-header .ql-picker-item[data-label]:not([data-label=''])::before,.ql-snow .ql-picker.ql-header .ql-picker-label[data-label]:not([data-label=''])::before,.ql-snow .ql-picker.ql-size .ql-picker-item[data-label]:not([data-label=''])::before,.ql-snow .ql-picker.ql-size .ql-picker-label[data-label]:not([data-label=''])::before{content:attr(data-label)}.ql-snow .ql-picker.ql-header{width:98px}.ql-snow .ql-picker.ql-header .ql-picker-item::before,.ql-snow .ql-picker.ql-header .ql-picker-label::before{content:'Normal'}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"1\"]::before,.ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"1\"]::before{content:'Heading 1'}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"2\"]::before,.ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"2\"]::before{content:'Heading 2'}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"3\"]::before,.ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"3\"]::before{content:'Heading 3'}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"4\"]::before,.ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"4\"]::before{content:'Heading 4'}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"5\"]::before,.ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"5\"]::before{content:'Heading 5'}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"6\"]::before,.ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"6\"]::before{content:'Heading 6'}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"1\"]::before{font-size:2em}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"2\"]::before{font-size:1.5em}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"3\"]::before{font-size:1.17em}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"4\"]::before{font-size:1em}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"5\"]::before{font-size:.83em}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"6\"]::before{font-size:.67em}.ql-snow .ql-picker.ql-font{width:108px}.ql-snow .ql-picker.ql-font .ql-picker-item::before,.ql-snow .ql-picker.ql-font .ql-picker-label::before{content:'Sans Serif'}.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=serif]::before,.ql-snow .ql-picker.ql-font .ql-picker-label[data-value=serif]::before{content:'Serif'}.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=monospace]::before,.ql-snow .ql-picker.ql-font .ql-picker-label[data-value=monospace]::before{content:'Monospace'}.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=serif]::before{font-family:Georgia,Times New Roman,serif}.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=monospace]::before{font-family:Monaco,Courier New,monospace}.ql-snow .ql-picker.ql-size{width:98px}.ql-snow .ql-picker.ql-size .ql-picker-item::before,.ql-snow .ql-picker.ql-size .ql-picker-label::before{content:'Normal'}.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=small]::before,.ql-snow .ql-picker.ql-size .ql-picker-label[data-value=small]::before{content:'Small'}.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=large]::before,.ql-snow .ql-picker.ql-size .ql-picker-label[data-value=large]::before{content:'Large'}.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=huge]::before,.ql-snow .ql-picker.ql-size .ql-picker-label[data-value=huge]::before{content:'Huge'}.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=small]::before{font-size:10px}.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=large]::before{font-size:18px}.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=huge]::before{font-size:32px}.ql-snow .ql-color-picker.ql-background .ql-picker-item{background-color:#fff}.ql-snow .ql-color-picker.ql-color .ql-picker-item{background-color:#000}.ql-toolbar.ql-snow{border:1px solid #ccc;box-sizing:border-box;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;padding:8px}.ql-toolbar.ql-snow .ql-formats{margin-right:15px}.ql-toolbar.ql-snow .ql-picker-label{border:1px solid transparent}.ql-toolbar.ql-snow .ql-picker-options{border:1px solid transparent;box-shadow:rgba(0,0,0,.2) 0 2px 8px}.ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-label{border-color:#ccc}.ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-options{border-color:#ccc}.ql-toolbar.ql-snow .ql-color-picker .ql-picker-item.ql-selected,.ql-toolbar.ql-snow .ql-color-picker .ql-picker-item:hover{border-color:#000}.ql-toolbar.ql-snow+.ql-container.ql-snow{border-top:0}.ql-snow .ql-tooltip{background-color:#fff;border:1px solid #ccc;box-shadow:0 0 5px #ddd;color:#444;padding:5px 12px;white-space:nowrap}.ql-snow .ql-tooltip::before{content:\"Visit URL:\";line-height:26px;margin-right:8px}.ql-snow .ql-tooltip input[type=text]{display:none;border:1px solid #ccc;font-size:13px;height:26px;margin:0;padding:3px 5px;width:170px}.ql-snow .ql-tooltip a.ql-preview{display:inline-block;max-width:200px;overflow-x:hidden;text-overflow:ellipsis;vertical-align:top}.ql-snow .ql-tooltip a.ql-action::after{border-right:1px solid #ccc;content:'Edit';margin-left:16px;padding-right:8px}.ql-snow .ql-tooltip a.ql-remove::before{content:'Remove';margin-left:8px}.ql-snow .ql-tooltip a{line-height:26px}.ql-snow .ql-tooltip.ql-editing a.ql-preview,.ql-snow .ql-tooltip.ql-editing a.ql-remove{display:none}.ql-snow .ql-tooltip.ql-editing input[type=text]{display:inline-block}.ql-snow .ql-tooltip.ql-editing a.ql-action::after{border-right:0;content:'Save';padding-right:0}.ql-snow .ql-tooltip[data-mode=link]::before{content:\"Enter link:\"}.ql-snow .ql-tooltip[data-mode=formula]::before{content:\"Enter formula:\"}.ql-snow .ql-tooltip[data-mode=video]::before{content:\"Enter video:\"}.ql-snow a{color:#06c}.ql-container.ql-snow{border:1px solid #ccc}",
                map: void 0,
                media: void 0,
              }),
              t("data-v-776e788e_1", {
                source:
                  ".ql-editor{min-height:200px;font-size:16px}.ql-snow .ql-stroke.ql-thin,.ql-snow .ql-thin{stroke-width:1px!important}.quillWrapper .ql-snow.ql-toolbar{padding-top:8px;padding-bottom:4px}.quillWrapper .ql-snow.ql-toolbar .ql-formats{margin-bottom:10px}.ql-snow .ql-toolbar button svg,.quillWrapper .ql-snow.ql-toolbar button svg{width:22px;height:22px}.quillWrapper .ql-editor ul[data-checked=false]>li::before,.quillWrapper .ql-editor ul[data-checked=true]>li::before{font-size:1.35em;vertical-align:baseline;bottom:-.065em;font-weight:900;color:#222}.quillWrapper .ql-snow .ql-stroke{stroke:rgba(63,63,63,.95);stroke-linecap:square;stroke-linejoin:initial;stroke-width:1.7px}.quillWrapper .ql-picker-label{font-size:15px}.quillWrapper .ql-snow .ql-active .ql-stroke{stroke-width:2.25px}.quillWrapper .ql-toolbar.ql-snow .ql-formats{vertical-align:top}.ql-picker:not(.ql-background){position:relative;top:2px}.ql-picker.ql-color-picker svg{width:22px!important;height:22px!important}.quillWrapper .imageResizeActive img{display:block;cursor:pointer}.quillWrapper .imageResizeActive~div svg{cursor:pointer}",
                map: void 0,
                media: void 0,
              }));
          },
          m,
          0,
          0,
          0,
          function (t) {
            return function (t, e) {
              return (function (t, e) {
                var n = g ? e.media || "default" : t,
                  i = v[n] || (v[n] = { ids: new Set(), styles: [] });
                if (!i.ids.has(t)) {
                  i.ids.add(t);
                  var r = e.source;
                  if (
                    (e.map &&
                      ((r += "\n/*# sourceURL=" + e.map.sources[0] + " */"),
                      (r +=
                        "\n/*# sourceMappingURL=data:application/json;base64," +
                        btoa(
                          unescape(encodeURIComponent(JSON.stringify(e.map)))
                        ) +
                        " */")),
                    i.element ||
                      ((i.element = document.createElement("style")),
                      (i.element.type = "text/css"),
                      e.media && i.element.setAttribute("media", e.media),
                      void 0 === f &&
                        (f =
                          document.head ||
                          document.getElementsByTagName("head")[0]),
                      f.appendChild(i.element)),
                    "styleSheet" in i.element)
                  )
                    i.styles.push(r),
                      (i.element.styleSheet.cssText = i.styles
                        .filter(Boolean)
                        .join("\n"));
                  else {
                    var o = i.ids.size - 1,
                      a = document.createTextNode(r),
                      s = i.element.childNodes;
                    s[o] && i.element.removeChild(s[o]),
                      s.length
                        ? i.element.insertBefore(a, s[o])
                        : i.element.appendChild(a);
                  }
                }
              })(t, e);
            };
          },
          void 0
        ),
        y = {
          install: function t(e) {
            t.installed || ((t.installed = !0), e.component("VueEditor", _));
          },
          version: "2.10.3",
          Quill: r.a,
          VueEditor: _,
        },
        M = null;
      "undefined" != typeof window
        ? (M = window.Vue)
        : void 0 !== t && (M = t.Vue),
        M && M.use(y),
        (e.a = y);
    }).call(this, n(56));
  },
  function (t, e, n) {
    "use strict";
    function i(t) {
      return getComputedStyle(t);
    }
    function r(t, e) {
      for (var n in e) {
        var i = e[n];
        "number" == typeof i && (i += "px"), (t.style[n] = i);
      }
      return t;
    }
    function o(t) {
      var e = document.createElement("div");
      return (e.className = t), e;
    }
    var a =
      "undefined" != typeof Element &&
      (Element.prototype.matches ||
        Element.prototype.webkitMatchesSelector ||
        Element.prototype.mozMatchesSelector ||
        Element.prototype.msMatchesSelector);
    function s(t, e) {
      if (!a) throw new Error("No element matching method supported");
      return a.call(t, e);
    }
    function l(t) {
      t.remove ? t.remove() : t.parentNode && t.parentNode.removeChild(t);
    }
    function c(t, e) {
      return Array.prototype.filter.call(t.children, function (t) {
        return s(t, e);
      });
    }
    var d = function (t) {
        return "ps__thumb-" + t;
      },
      u = function (t) {
        return "ps__rail-" + t;
      },
      p = "ps__child--consume",
      h = "ps--focus",
      f = "ps--clicking",
      b = function (t) {
        return "ps--active-" + t;
      },
      m = function (t) {
        return "ps--scrolling-" + t;
      },
      g = { x: null, y: null };
    function v(t, e) {
      var n = t.element.classList,
        i = m(e);
      n.contains(i) ? clearTimeout(g[e]) : n.add(i);
    }
    function _(t, e) {
      g[e] = setTimeout(function () {
        return t.isAlive && t.element.classList.remove(m(e));
      }, t.settings.scrollingThreshold);
    }
    var y = function (t) {
        (this.element = t), (this.handlers = {});
      },
      M = { isEmpty: { configurable: !0 } };
    (y.prototype.bind = function (t, e) {
      void 0 === this.handlers[t] && (this.handlers[t] = []),
        this.handlers[t].push(e),
        this.element.addEventListener(t, e, !1);
    }),
      (y.prototype.unbind = function (t, e) {
        var n = this;
        this.handlers[t] = this.handlers[t].filter(function (i) {
          return (
            !(!e || i === e) || (n.element.removeEventListener(t, i, !1), !1)
          );
        });
      }),
      (y.prototype.unbindAll = function () {
        for (var t in this.handlers) this.unbind(t);
      }),
      (M.isEmpty.get = function () {
        var t = this;
        return Object.keys(this.handlers).every(function (e) {
          return 0 === t.handlers[e].length;
        });
      }),
      Object.defineProperties(y.prototype, M);
    var O = function () {
      this.eventElements = [];
    };
    function w(t) {
      if ("function" == typeof window.CustomEvent) return new CustomEvent(t);
      var e = document.createEvent("CustomEvent");
      return e.initCustomEvent(t, !1, !1, void 0), e;
    }
    function A(t, e, n, i, r) {
      var o;
      if ((void 0 === i && (i = !0), void 0 === r && (r = !1), "top" === e))
        o = [
          "contentHeight",
          "containerHeight",
          "scrollTop",
          "y",
          "up",
          "down",
        ];
      else {
        if ("left" !== e) throw new Error("A proper axis should be provided");
        o = [
          "contentWidth",
          "containerWidth",
          "scrollLeft",
          "x",
          "left",
          "right",
        ];
      }
      !(function (t, e, n, i, r) {
        var o = n[0],
          a = n[1],
          s = n[2],
          l = n[3],
          c = n[4],
          d = n[5];
        void 0 === i && (i = !0), void 0 === r && (r = !1);
        var u = t.element;
        (t.reach[l] = null),
          u[s] < 1 && (t.reach[l] = "start"),
          u[s] > t[o] - t[a] - 1 && (t.reach[l] = "end"),
          e &&
            (u.dispatchEvent(w("ps-scroll-" + l)),
            e < 0
              ? u.dispatchEvent(w("ps-scroll-" + c))
              : e > 0 && u.dispatchEvent(w("ps-scroll-" + d)),
            i &&
              (function (t, e) {
                v(t, e), _(t, e);
              })(t, l)),
          t.reach[l] &&
            (e || r) &&
            u.dispatchEvent(w("ps-" + l + "-reach-" + t.reach[l]));
      })(t, n, o, i, r);
    }
    function x(t) {
      return parseInt(t, 10) || 0;
    }
    (O.prototype.eventElement = function (t) {
      var e = this.eventElements.filter(function (e) {
        return e.element === t;
      })[0];
      return e || ((e = new y(t)), this.eventElements.push(e)), e;
    }),
      (O.prototype.bind = function (t, e, n) {
        this.eventElement(t).bind(e, n);
      }),
      (O.prototype.unbind = function (t, e, n) {
        var i = this.eventElement(t);
        i.unbind(e, n),
          i.isEmpty &&
            this.eventElements.splice(this.eventElements.indexOf(i), 1);
      }),
      (O.prototype.unbindAll = function () {
        this.eventElements.forEach(function (t) {
          return t.unbindAll();
        }),
          (this.eventElements = []);
      }),
      (O.prototype.once = function (t, e, n) {
        var i = this.eventElement(t),
          r = function (t) {
            i.unbind(e, r), n(t);
          };
        i.bind(e, r);
      });
    var z = {
      isWebKit:
        "undefined" != typeof document &&
        "WebkitAppearance" in document.documentElement.style,
      supportsTouch:
        "undefined" != typeof window &&
        ("ontouchstart" in window ||
          ("maxTouchPoints" in window.navigator &&
            window.navigator.maxTouchPoints > 0) ||
          (window.DocumentTouch && document instanceof window.DocumentTouch)),
      supportsIePointer:
        "undefined" != typeof navigator && navigator.msMaxTouchPoints,
      isChrome:
        "undefined" != typeof navigator &&
        /Chrome/i.test(navigator && navigator.userAgent),
    };
    function C(t) {
      var e = t.element,
        n = Math.floor(e.scrollTop),
        i = e.getBoundingClientRect();
      (t.containerWidth = Math.floor(i.width)),
        (t.containerHeight = Math.floor(i.height)),
        (t.contentWidth = e.scrollWidth),
        (t.contentHeight = e.scrollHeight),
        e.contains(t.scrollbarXRail) ||
          (c(e, u("x")).forEach(function (t) {
            return l(t);
          }),
          e.appendChild(t.scrollbarXRail)),
        e.contains(t.scrollbarYRail) ||
          (c(e, u("y")).forEach(function (t) {
            return l(t);
          }),
          e.appendChild(t.scrollbarYRail)),
        !t.settings.suppressScrollX &&
        t.containerWidth + t.settings.scrollXMarginOffset < t.contentWidth
          ? ((t.scrollbarXActive = !0),
            (t.railXWidth = t.containerWidth - t.railXMarginWidth),
            (t.railXRatio = t.containerWidth / t.railXWidth),
            (t.scrollbarXWidth = k(
              t,
              x((t.railXWidth * t.containerWidth) / t.contentWidth)
            )),
            (t.scrollbarXLeft = x(
              ((t.negativeScrollAdjustment + e.scrollLeft) *
                (t.railXWidth - t.scrollbarXWidth)) /
                (t.contentWidth - t.containerWidth)
            )))
          : (t.scrollbarXActive = !1),
        !t.settings.suppressScrollY &&
        t.containerHeight + t.settings.scrollYMarginOffset < t.contentHeight
          ? ((t.scrollbarYActive = !0),
            (t.railYHeight = t.containerHeight - t.railYMarginHeight),
            (t.railYRatio = t.containerHeight / t.railYHeight),
            (t.scrollbarYHeight = k(
              t,
              x((t.railYHeight * t.containerHeight) / t.contentHeight)
            )),
            (t.scrollbarYTop = x(
              (n * (t.railYHeight - t.scrollbarYHeight)) /
                (t.contentHeight - t.containerHeight)
            )))
          : (t.scrollbarYActive = !1),
        t.scrollbarXLeft >= t.railXWidth - t.scrollbarXWidth &&
          (t.scrollbarXLeft = t.railXWidth - t.scrollbarXWidth),
        t.scrollbarYTop >= t.railYHeight - t.scrollbarYHeight &&
          (t.scrollbarYTop = t.railYHeight - t.scrollbarYHeight),
        (function (t, e) {
          var n = { width: e.railXWidth },
            i = Math.floor(t.scrollTop);
          e.isRtl
            ? (n.left =
                e.negativeScrollAdjustment +
                t.scrollLeft +
                e.containerWidth -
                e.contentWidth)
            : (n.left = t.scrollLeft),
            e.isScrollbarXUsingBottom
              ? (n.bottom = e.scrollbarXBottom - i)
              : (n.top = e.scrollbarXTop + i),
            r(e.scrollbarXRail, n);
          var o = { top: i, height: e.railYHeight };
          e.isScrollbarYUsingRight
            ? e.isRtl
              ? (o.right =
                  e.contentWidth -
                  (e.negativeScrollAdjustment + t.scrollLeft) -
                  e.scrollbarYRight -
                  e.scrollbarYOuterWidth -
                  9)
              : (o.right = e.scrollbarYRight - t.scrollLeft)
            : e.isRtl
            ? (o.left =
                e.negativeScrollAdjustment +
                t.scrollLeft +
                2 * e.containerWidth -
                e.contentWidth -
                e.scrollbarYLeft -
                e.scrollbarYOuterWidth)
            : (o.left = e.scrollbarYLeft + t.scrollLeft),
            r(e.scrollbarYRail, o),
            r(e.scrollbarX, {
              left: e.scrollbarXLeft,
              width: e.scrollbarXWidth - e.railBorderXWidth,
            }),
            r(e.scrollbarY, {
              top: e.scrollbarYTop,
              height: e.scrollbarYHeight - e.railBorderYWidth,
            });
        })(e, t),
        t.scrollbarXActive
          ? e.classList.add(b("x"))
          : (e.classList.remove(b("x")),
            (t.scrollbarXWidth = 0),
            (t.scrollbarXLeft = 0),
            (e.scrollLeft = !0 === t.isRtl ? t.contentWidth : 0)),
        t.scrollbarYActive
          ? e.classList.add(b("y"))
          : (e.classList.remove(b("y")),
            (t.scrollbarYHeight = 0),
            (t.scrollbarYTop = 0),
            (e.scrollTop = 0));
    }
    function k(t, e) {
      return (
        t.settings.minScrollbarLength &&
          (e = Math.max(e, t.settings.minScrollbarLength)),
        t.settings.maxScrollbarLength &&
          (e = Math.min(e, t.settings.maxScrollbarLength)),
        e
      );
    }
    var S = null;
    function T(t, e) {
      var n = e[0],
        i = e[1],
        r = e[2],
        o = e[3],
        a = e[4],
        s = e[5],
        l = e[6],
        c = e[7],
        d = e[8],
        u = t.element,
        p = null,
        h = null,
        b = null;
      function m(e) {
        e.touches &&
          e.touches[0] &&
          (e[r] = e.touches[0]["page" + c.toUpperCase()]),
          S === a &&
            ((u[l] = p + b * (e[r] - h)),
            v(t, c),
            C(t),
            e.stopPropagation(),
            e.preventDefault());
      }
      function g() {
        _(t, c),
          t[d].classList.remove(f),
          document.removeEventListener("mousemove", m),
          document.removeEventListener("mouseup", g),
          document.removeEventListener("touchmove", m),
          document.removeEventListener("touchend", g),
          (S = null);
      }
      function y(e) {
        null === S &&
          ((S = a),
          (p = u[l]),
          e.touches && (e[r] = e.touches[0]["page" + c.toUpperCase()]),
          (h = e[r]),
          (b = (t[i] - t[n]) / (t[o] - t[s])),
          e.touches
            ? (document.addEventListener("touchmove", m, { passive: !1 }),
              document.addEventListener("touchend", g))
            : (document.addEventListener("mousemove", m),
              document.addEventListener("mouseup", g)),
          t[d].classList.add(f)),
          e.stopPropagation(),
          e.cancelable && e.preventDefault();
      }
      t[a].addEventListener("mousedown", y),
        t[a].addEventListener("touchstart", y);
    }
    var D = {
        "click-rail": function (t) {
          t.event.bind(t.scrollbarY, "mousedown", function (t) {
            return t.stopPropagation();
          }),
            t.event.bind(t.scrollbarYRail, "mousedown", function (e) {
              var n =
                e.pageY -
                  window.pageYOffset -
                  t.scrollbarYRail.getBoundingClientRect().top >
                t.scrollbarYTop
                  ? 1
                  : -1;
              (t.element.scrollTop += n * t.containerHeight),
                C(t),
                e.stopPropagation();
            }),
            t.event.bind(t.scrollbarX, "mousedown", function (t) {
              return t.stopPropagation();
            }),
            t.event.bind(t.scrollbarXRail, "mousedown", function (e) {
              var n =
                e.pageX -
                  window.pageXOffset -
                  t.scrollbarXRail.getBoundingClientRect().left >
                t.scrollbarXLeft
                  ? 1
                  : -1;
              (t.element.scrollLeft += n * t.containerWidth),
                C(t),
                e.stopPropagation();
            });
        },
        "drag-thumb": function (t) {
          T(t, [
            "containerHeight",
            "contentHeight",
            "pageY",
            "railYHeight",
            "scrollbarY",
            "scrollbarYHeight",
            "scrollTop",
            "y",
            "scrollbarYRail",
          ]),
            T(t, [
              "containerWidth",
              "contentWidth",
              "pageX",
              "railXWidth",
              "scrollbarX",
              "scrollbarXWidth",
              "scrollLeft",
              "x",
              "scrollbarXRail",
            ]);
        },
        keyboard: function (t) {
          var e = t.element;
          t.event.bind(t.ownerDocument, "keydown", function (n) {
            if (
              !(
                (n.isDefaultPrevented && n.isDefaultPrevented()) ||
                n.defaultPrevented
              ) &&
              (s(e, ":hover") ||
                s(t.scrollbarX, ":focus") ||
                s(t.scrollbarY, ":focus"))
            ) {
              var i,
                r = document.activeElement
                  ? document.activeElement
                  : t.ownerDocument.activeElement;
              if (r) {
                if ("IFRAME" === r.tagName) r = r.contentDocument.activeElement;
                else for (; r.shadowRoot; ) r = r.shadowRoot.activeElement;
                if (
                  s((i = r), "input,[contenteditable]") ||
                  s(i, "select,[contenteditable]") ||
                  s(i, "textarea,[contenteditable]") ||
                  s(i, "button,[contenteditable]")
                )
                  return;
              }
              var o = 0,
                a = 0;
              switch (n.which) {
                case 37:
                  o = n.metaKey
                    ? -t.contentWidth
                    : n.altKey
                    ? -t.containerWidth
                    : -30;
                  break;
                case 38:
                  a = n.metaKey
                    ? t.contentHeight
                    : n.altKey
                    ? t.containerHeight
                    : 30;
                  break;
                case 39:
                  o = n.metaKey
                    ? t.contentWidth
                    : n.altKey
                    ? t.containerWidth
                    : 30;
                  break;
                case 40:
                  a = n.metaKey
                    ? -t.contentHeight
                    : n.altKey
                    ? -t.containerHeight
                    : -30;
                  break;
                case 32:
                  a = n.shiftKey ? t.containerHeight : -t.containerHeight;
                  break;
                case 33:
                  a = t.containerHeight;
                  break;
                case 34:
                  a = -t.containerHeight;
                  break;
                case 36:
                  a = t.contentHeight;
                  break;
                case 35:
                  a = -t.contentHeight;
                  break;
                default:
                  return;
              }
              (t.settings.suppressScrollX && 0 !== o) ||
                (t.settings.suppressScrollY && 0 !== a) ||
                ((e.scrollTop -= a),
                (e.scrollLeft += o),
                C(t),
                (function (n, i) {
                  var r = Math.floor(e.scrollTop);
                  if (0 === n) {
                    if (!t.scrollbarYActive) return !1;
                    if (
                      (0 === r && i > 0) ||
                      (r >= t.contentHeight - t.containerHeight && i < 0)
                    )
                      return !t.settings.wheelPropagation;
                  }
                  var o = e.scrollLeft;
                  if (0 === i) {
                    if (!t.scrollbarXActive) return !1;
                    if (
                      (0 === o && n < 0) ||
                      (o >= t.contentWidth - t.containerWidth && n > 0)
                    )
                      return !t.settings.wheelPropagation;
                  }
                  return !0;
                })(o, a) && n.preventDefault());
            }
          });
        },
        wheel: function (t) {
          var e = t.element;
          function n(n) {
            var r = (function (t) {
                var e = t.deltaX,
                  n = -1 * t.deltaY;
                return (
                  (void 0 !== e && void 0 !== n) ||
                    ((e = (-1 * t.wheelDeltaX) / 6), (n = t.wheelDeltaY / 6)),
                  t.deltaMode && 1 === t.deltaMode && ((e *= 10), (n *= 10)),
                  e != e && n != n && ((e = 0), (n = t.wheelDelta)),
                  t.shiftKey ? [-n, -e] : [e, n]
                );
              })(n),
              o = r[0],
              a = r[1];
            if (
              !(function (t, n, r) {
                if (!z.isWebKit && e.querySelector("select:focus")) return !0;
                if (!e.contains(t)) return !1;
                for (var o = t; o && o !== e; ) {
                  if (o.classList.contains(p)) return !0;
                  var a = i(o);
                  if (r && a.overflowY.match(/(scroll|auto)/)) {
                    var s = o.scrollHeight - o.clientHeight;
                    if (
                      s > 0 &&
                      ((o.scrollTop > 0 && r < 0) || (o.scrollTop < s && r > 0))
                    )
                      return !0;
                  }
                  if (n && a.overflowX.match(/(scroll|auto)/)) {
                    var l = o.scrollWidth - o.clientWidth;
                    if (
                      l > 0 &&
                      ((o.scrollLeft > 0 && n < 0) ||
                        (o.scrollLeft < l && n > 0))
                    )
                      return !0;
                  }
                  o = o.parentNode;
                }
                return !1;
              })(n.target, o, a)
            ) {
              var s = !1;
              t.settings.useBothWheelAxes
                ? t.scrollbarYActive && !t.scrollbarXActive
                  ? (a
                      ? (e.scrollTop -= a * t.settings.wheelSpeed)
                      : (e.scrollTop += o * t.settings.wheelSpeed),
                    (s = !0))
                  : t.scrollbarXActive &&
                    !t.scrollbarYActive &&
                    (o
                      ? (e.scrollLeft += o * t.settings.wheelSpeed)
                      : (e.scrollLeft -= a * t.settings.wheelSpeed),
                    (s = !0))
                : ((e.scrollTop -= a * t.settings.wheelSpeed),
                  (e.scrollLeft += o * t.settings.wheelSpeed)),
                C(t),
                (s =
                  s ||
                  (function (n, i) {
                    var r = Math.floor(e.scrollTop),
                      o = 0 === e.scrollTop,
                      a = r + e.offsetHeight === e.scrollHeight,
                      s = 0 === e.scrollLeft,
                      l = e.scrollLeft + e.offsetWidth === e.scrollWidth;
                    return (
                      !(Math.abs(i) > Math.abs(n) ? o || a : s || l) ||
                      !t.settings.wheelPropagation
                    );
                  })(o, a)) &&
                  !n.ctrlKey &&
                  (n.stopPropagation(), n.preventDefault());
            }
          }
          void 0 !== window.onwheel
            ? t.event.bind(e, "wheel", n)
            : void 0 !== window.onmousewheel &&
              t.event.bind(e, "mousewheel", n);
        },
        touch: function (t) {
          if (z.supportsTouch || z.supportsIePointer) {
            var e = t.element,
              n = {
                startOffset: {},
                startTime: 0,
                speed: {},
                easingLoop: null,
              };
            z.supportsTouch
              ? (t.event.bind(e, "touchstart", s),
                t.event.bind(e, "touchmove", l),
                t.event.bind(e, "touchend", c))
              : z.supportsIePointer &&
                (window.PointerEvent
                  ? (t.event.bind(e, "pointerdown", s),
                    t.event.bind(e, "pointermove", l),
                    t.event.bind(e, "pointerup", c))
                  : window.MSPointerEvent &&
                    (t.event.bind(e, "MSPointerDown", s),
                    t.event.bind(e, "MSPointerMove", l),
                    t.event.bind(e, "MSPointerUp", c)));
          }
          function r(n, i) {
            (e.scrollTop -= i), (e.scrollLeft -= n), C(t);
          }
          function o(t) {
            return t.targetTouches ? t.targetTouches[0] : t;
          }
          function a(e) {
            return !(
              e.target === t.scrollbarX ||
              e.target === t.scrollbarY ||
              (e.pointerType && "pen" === e.pointerType && 0 === e.buttons) ||
              ((!e.targetTouches || 1 !== e.targetTouches.length) &&
                (!e.pointerType ||
                  "mouse" === e.pointerType ||
                  e.pointerType === e.MSPOINTER_TYPE_MOUSE))
            );
          }
          function s(t) {
            if (a(t)) {
              var e = o(t);
              (n.startOffset.pageX = e.pageX),
                (n.startOffset.pageY = e.pageY),
                (n.startTime = new Date().getTime()),
                null !== n.easingLoop && clearInterval(n.easingLoop);
            }
          }
          function l(s) {
            if (a(s)) {
              var l = o(s),
                c = { pageX: l.pageX, pageY: l.pageY },
                d = c.pageX - n.startOffset.pageX,
                u = c.pageY - n.startOffset.pageY;
              if (
                (function (t, n, r) {
                  if (!e.contains(t)) return !1;
                  for (var o = t; o && o !== e; ) {
                    if (o.classList.contains(p)) return !0;
                    var a = i(o);
                    if (r && a.overflowY.match(/(scroll|auto)/)) {
                      var s = o.scrollHeight - o.clientHeight;
                      if (
                        s > 0 &&
                        ((o.scrollTop > 0 && r < 0) ||
                          (o.scrollTop < s && r > 0))
                      )
                        return !0;
                    }
                    if (n && a.overflowX.match(/(scroll|auto)/)) {
                      var l = o.scrollWidth - o.clientWidth;
                      if (
                        l > 0 &&
                        ((o.scrollLeft > 0 && n < 0) ||
                          (o.scrollLeft < l && n > 0))
                      )
                        return !0;
                    }
                    o = o.parentNode;
                  }
                  return !1;
                })(s.target, d, u)
              )
                return;
              r(d, u), (n.startOffset = c);
              var h = new Date().getTime(),
                f = h - n.startTime;
              f > 0 &&
                ((n.speed.x = d / f), (n.speed.y = u / f), (n.startTime = h)),
                (function (n, i) {
                  var r = Math.floor(e.scrollTop),
                    o = e.scrollLeft,
                    a = Math.abs(n),
                    s = Math.abs(i);
                  if (s > a) {
                    if (
                      (i < 0 && r === t.contentHeight - t.containerHeight) ||
                      (i > 0 && 0 === r)
                    )
                      return 0 === window.scrollY && i > 0 && z.isChrome;
                  } else if (
                    a > s &&
                    ((n < 0 && o === t.contentWidth - t.containerWidth) ||
                      (n > 0 && 0 === o))
                  )
                    return !0;
                  return !0;
                })(d, u) &&
                  s.cancelable &&
                  s.preventDefault();
            }
          }
          function c() {
            t.settings.swipeEasing &&
              (clearInterval(n.easingLoop),
              (n.easingLoop = setInterval(function () {
                t.isInitialized
                  ? clearInterval(n.easingLoop)
                  : n.speed.x || n.speed.y
                  ? Math.abs(n.speed.x) < 0.01 && Math.abs(n.speed.y) < 0.01
                    ? clearInterval(n.easingLoop)
                    : (r(30 * n.speed.x, 30 * n.speed.y),
                      (n.speed.x *= 0.8),
                      (n.speed.y *= 0.8))
                  : clearInterval(n.easingLoop);
              }, 10)));
          }
        },
      },
      L = function (t, e) {
        var n = this;
        if (
          (void 0 === e && (e = {}),
          "string" == typeof t && (t = document.querySelector(t)),
          !t || !t.nodeName)
        )
          throw new Error(
            "no element is specified to initialize PerfectScrollbar"
          );
        for (var a in ((this.element = t),
        t.classList.add("ps"),
        (this.settings = {
          handlers: ["click-rail", "drag-thumb", "keyboard", "wheel", "touch"],
          maxScrollbarLength: null,
          minScrollbarLength: null,
          scrollingThreshold: 1e3,
          scrollXMarginOffset: 0,
          scrollYMarginOffset: 0,
          suppressScrollX: !1,
          suppressScrollY: !1,
          swipeEasing: !0,
          useBothWheelAxes: !1,
          wheelPropagation: !0,
          wheelSpeed: 1,
        }),
        e))
          this.settings[a] = e[a];
        (this.containerWidth = null),
          (this.containerHeight = null),
          (this.contentWidth = null),
          (this.contentHeight = null);
        var s,
          l,
          c = function () {
            return t.classList.add(h);
          },
          p = function () {
            return t.classList.remove(h);
          };
        (this.isRtl = "rtl" === i(t).direction),
          !0 === this.isRtl && t.classList.add("ps__rtl"),
          (this.isNegativeScroll =
            ((l = t.scrollLeft),
            (t.scrollLeft = -1),
            (s = t.scrollLeft < 0),
            (t.scrollLeft = l),
            s)),
          (this.negativeScrollAdjustment = this.isNegativeScroll
            ? t.scrollWidth - t.clientWidth
            : 0),
          (this.event = new O()),
          (this.ownerDocument = t.ownerDocument || document),
          (this.scrollbarXRail = o(u("x"))),
          t.appendChild(this.scrollbarXRail),
          (this.scrollbarX = o(d("x"))),
          this.scrollbarXRail.appendChild(this.scrollbarX),
          this.scrollbarX.setAttribute("tabindex", 0),
          this.event.bind(this.scrollbarX, "focus", c),
          this.event.bind(this.scrollbarX, "blur", p),
          (this.scrollbarXActive = null),
          (this.scrollbarXWidth = null),
          (this.scrollbarXLeft = null);
        var f = i(this.scrollbarXRail);
        (this.scrollbarXBottom = parseInt(f.bottom, 10)),
          isNaN(this.scrollbarXBottom)
            ? ((this.isScrollbarXUsingBottom = !1),
              (this.scrollbarXTop = x(f.top)))
            : (this.isScrollbarXUsingBottom = !0),
          (this.railBorderXWidth =
            x(f.borderLeftWidth) + x(f.borderRightWidth)),
          r(this.scrollbarXRail, { display: "block" }),
          (this.railXMarginWidth = x(f.marginLeft) + x(f.marginRight)),
          r(this.scrollbarXRail, { display: "" }),
          (this.railXWidth = null),
          (this.railXRatio = null),
          (this.scrollbarYRail = o(u("y"))),
          t.appendChild(this.scrollbarYRail),
          (this.scrollbarY = o(d("y"))),
          this.scrollbarYRail.appendChild(this.scrollbarY),
          this.scrollbarY.setAttribute("tabindex", 0),
          this.event.bind(this.scrollbarY, "focus", c),
          this.event.bind(this.scrollbarY, "blur", p),
          (this.scrollbarYActive = null),
          (this.scrollbarYHeight = null),
          (this.scrollbarYTop = null);
        var b = i(this.scrollbarYRail);
        (this.scrollbarYRight = parseInt(b.right, 10)),
          isNaN(this.scrollbarYRight)
            ? ((this.isScrollbarYUsingRight = !1),
              (this.scrollbarYLeft = x(b.left)))
            : (this.isScrollbarYUsingRight = !0),
          (this.scrollbarYOuterWidth = this.isRtl
            ? (function (t) {
                var e = i(t);
                return (
                  x(e.width) +
                  x(e.paddingLeft) +
                  x(e.paddingRight) +
                  x(e.borderLeftWidth) +
                  x(e.borderRightWidth)
                );
              })(this.scrollbarY)
            : null),
          (this.railBorderYWidth =
            x(b.borderTopWidth) + x(b.borderBottomWidth)),
          r(this.scrollbarYRail, { display: "block" }),
          (this.railYMarginHeight = x(b.marginTop) + x(b.marginBottom)),
          r(this.scrollbarYRail, { display: "" }),
          (this.railYHeight = null),
          (this.railYRatio = null),
          (this.reach = {
            x:
              t.scrollLeft <= 0
                ? "start"
                : t.scrollLeft >= this.contentWidth - this.containerWidth
                ? "end"
                : null,
            y:
              t.scrollTop <= 0
                ? "start"
                : t.scrollTop >= this.contentHeight - this.containerHeight
                ? "end"
                : null,
          }),
          (this.isAlive = !0),
          this.settings.handlers.forEach(function (t) {
            return D[t](n);
          }),
          (this.lastScrollTop = Math.floor(t.scrollTop)),
          (this.lastScrollLeft = t.scrollLeft),
          this.event.bind(this.element, "scroll", function (t) {
            return n.onScroll(t);
          }),
          C(this);
      };
    (L.prototype.update = function () {
      this.isAlive &&
        ((this.negativeScrollAdjustment = this.isNegativeScroll
          ? this.element.scrollWidth - this.element.clientWidth
          : 0),
        r(this.scrollbarXRail, { display: "block" }),
        r(this.scrollbarYRail, { display: "block" }),
        (this.railXMarginWidth =
          x(i(this.scrollbarXRail).marginLeft) +
          x(i(this.scrollbarXRail).marginRight)),
        (this.railYMarginHeight =
          x(i(this.scrollbarYRail).marginTop) +
          x(i(this.scrollbarYRail).marginBottom)),
        r(this.scrollbarXRail, { display: "none" }),
        r(this.scrollbarYRail, { display: "none" }),
        C(this),
        A(this, "top", 0, !1, !0),
        A(this, "left", 0, !1, !0),
        r(this.scrollbarXRail, { display: "" }),
        r(this.scrollbarYRail, { display: "" }));
    }),
      (L.prototype.onScroll = function (t) {
        this.isAlive &&
          (C(this),
          A(this, "top", this.element.scrollTop - this.lastScrollTop),
          A(this, "left", this.element.scrollLeft - this.lastScrollLeft),
          (this.lastScrollTop = Math.floor(this.element.scrollTop)),
          (this.lastScrollLeft = this.element.scrollLeft));
      }),
      (L.prototype.destroy = function () {
        this.isAlive &&
          (this.event.unbindAll(),
          l(this.scrollbarX),
          l(this.scrollbarY),
          l(this.scrollbarXRail),
          l(this.scrollbarYRail),
          this.removePsClasses(),
          (this.element = null),
          (this.scrollbarX = null),
          (this.scrollbarY = null),
          (this.scrollbarXRail = null),
          (this.scrollbarYRail = null),
          (this.isAlive = !1));
      }),
      (L.prototype.removePsClasses = function () {
        this.element.className = this.element.className
          .split(" ")
          .filter(function (t) {
            return !t.match(/^ps([-_].+|)$/);
          })
          .join(" ");
      }),
      (e.a = L);
  },
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
      "21a6": function (t, e, n) {
        (function (n) {
          var i, r;
          void 0 ===
            (r =
              "function" ==
              typeof (i = function () {
                "use strict";
                function e(t, e, n) {
                  var i = new XMLHttpRequest();
                  i.open("GET", t),
                    (i.responseType = "blob"),
                    (i.onload = function () {
                      s(i.response, e, n);
                    }),
                    (i.onerror = function () {}),
                    i.send();
                }
                function i(t) {
                  var e = new XMLHttpRequest();
                  e.open("HEAD", t, !1);
                  try {
                    e.send();
                  } catch (t) {}
                  return 200 <= e.status && 299 >= e.status;
                }
                function r(t) {
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
                var o =
                    "object" == typeof window && window.window === window
                      ? window
                      : "object" == typeof self && self.self === self
                      ? self
                      : "object" == typeof n && n.global === n
                      ? n
                      : void 0,
                  a =
                    o.navigator &&
                    /Macintosh/.test(navigator.userAgent) &&
                    /AppleWebKit/.test(navigator.userAgent) &&
                    !/Safari/.test(navigator.userAgent),
                  s =
                    o.saveAs ||
                    ("object" != typeof window || window !== o
                      ? function () {}
                      : "download" in HTMLAnchorElement.prototype && !a
                      ? function (t, n, a) {
                          var s = o.URL || o.webkitURL,
                            l = document.createElement("a");
                          (n = n || t.name || "download"),
                            (l.download = n),
                            (l.rel = "noopener"),
                            "string" == typeof t
                              ? ((l.href = t),
                                l.origin === location.origin
                                  ? r(l)
                                  : i(l.href)
                                  ? e(t, n, a)
                                  : r(l, (l.target = "_blank")))
                              : ((l.href = s.createObjectURL(t)),
                                setTimeout(function () {
                                  s.revokeObjectURL(l.href);
                                }, 4e4),
                                setTimeout(function () {
                                  r(l);
                                }, 0));
                        }
                      : "msSaveOrOpenBlob" in navigator
                      ? function (t, n, o) {
                          if (
                            ((n = n || t.name || "download"),
                            "string" != typeof t)
                          )
                            navigator.msSaveOrOpenBlob(
                              (function (t, e) {
                                return (
                                  void 0 === e
                                    ? (e = { autoBom: !1 })
                                    : "object" != typeof e &&
                                      (e = { autoBom: !e }),
                                  e.autoBom &&
                                  /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(
                                    t.type
                                  )
                                    ? new Blob(["\ufeff", t], { type: t.type })
                                    : t
                                );
                              })(t, o),
                              n
                            );
                          else if (i(t)) e(t, n, o);
                          else {
                            var a = document.createElement("a");
                            (a.href = t),
                              (a.target = "_blank"),
                              setTimeout(function () {
                                r(a);
                              });
                          }
                        }
                      : function (t, n, i, r) {
                          if (
                            ((r = r || open("", "_blank")) &&
                              (r.document.title = r.document.body.innerText =
                                "downloading..."),
                            "string" == typeof t)
                          )
                            return e(t, n, i);
                          var s = "application/octet-stream" === t.type,
                            l = /constructor/i.test(o.HTMLElement) || o.safari,
                            c = /CriOS\/[\d]+/.test(navigator.userAgent);
                          if (
                            (c || (s && l) || a) &&
                            "undefined" != typeof FileReader
                          ) {
                            var d = new FileReader();
                            (d.onloadend = function () {
                              var t = d.result;
                              (t = c
                                ? t
                                : t.replace(
                                    /^data:[^;]*;/,
                                    "data:attachment/file;"
                                  )),
                                r ? (r.location.href = t) : (location = t),
                                (r = null);
                            }),
                              d.readAsDataURL(t);
                          } else {
                            var u = o.URL || o.webkitURL,
                              p = u.createObjectURL(t);
                            r ? (r.location = p) : (location.href = p),
                              (r = null),
                              setTimeout(function () {
                                u.revokeObjectURL(p);
                              }, 4e4);
                          }
                        });
                (o.saveAs = s.saveAs = s), (t.exports = s);
              })
                ? i.apply(e, [])
                : i) || (t.exports = r);
        }).call(this, n("c8ba"));
      },
      "27b5": function (t, e, n) {
        (function (t, n) {
          var i = "[object Arguments]",
            r = "[object Map]",
            o = "[object Object]",
            a = "[object Set]",
            s = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
            l = /^\w*$/,
            c = /^\./,
            d =
              /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
            u = /\\(\\)?/g,
            p = /^\[object .+?Constructor\]$/,
            h = /^(?:0|[1-9]\d*)$/,
            f = {};
          (f["[object Float32Array]"] =
            f["[object Float64Array]"] =
            f["[object Int8Array]"] =
            f["[object Int16Array]"] =
            f["[object Int32Array]"] =
            f["[object Uint8Array]"] =
            f["[object Uint8ClampedArray]"] =
            f["[object Uint16Array]"] =
            f["[object Uint32Array]"] =
              !0),
            (f[i] =
              f["[object Array]"] =
              f["[object ArrayBuffer]"] =
              f["[object Boolean]"] =
              f["[object DataView]"] =
              f["[object Date]"] =
              f["[object Error]"] =
              f["[object Function]"] =
              f[r] =
              f["[object Number]"] =
              f[o] =
              f["[object RegExp]"] =
              f[a] =
              f["[object String]"] =
              f["[object WeakMap]"] =
                !1);
          var b = "object" == typeof t && t && t.Object === Object && t,
            m =
              "object" == typeof self && self && self.Object === Object && self,
            g = b || m || Function("return this")(),
            v = e && !e.nodeType && e,
            _ = v && "object" == typeof n && n && !n.nodeType && n,
            y = _ && _.exports === v && b.process,
            M = (function () {
              try {
                return y && y.binding("util");
              } catch (t) {}
            })(),
            O = M && M.isTypedArray;
          function w(t, e) {
            for (var n = -1, i = t ? t.length : 0; ++n < i; )
              if (e(t[n], n, t)) return !0;
            return !1;
          }
          function A(t) {
            var e = !1;
            if (null != t && "function" != typeof t.toString)
              try {
                e = !!(t + "");
              } catch (t) {}
            return e;
          }
          function x(t) {
            var e = -1,
              n = Array(t.size);
            return (
              t.forEach(function (t, i) {
                n[++e] = [i, t];
              }),
              n
            );
          }
          function z(t) {
            var e = -1,
              n = Array(t.size);
            return (
              t.forEach(function (t) {
                n[++e] = t;
              }),
              n
            );
          }
          var C,
            k,
            S,
            T = Array.prototype,
            D = Function.prototype,
            L = Object.prototype,
            q = g["__core-js_shared__"],
            E = (C = /[^.]+$/.exec((q && q.keys && q.keys.IE_PROTO) || ""))
              ? "Symbol(src)_1." + C
              : "",
            j = D.toString,
            P = L.hasOwnProperty,
            R = L.toString,
            I = RegExp(
              "^" +
                j
                  .call(P)
                  .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
                  .replace(
                    /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                    "$1.*?"
                  ) +
                "$"
            ),
            W = g.Symbol,
            N = g.Uint8Array,
            B = L.propertyIsEnumerable,
            F = T.splice,
            $ =
              ((k = Object.keys),
              (S = Object),
              function (t) {
                return k(S(t));
              }),
            H = mt(g, "DataView"),
            Y = mt(g, "Map"),
            U = mt(g, "Promise"),
            X = mt(g, "Set"),
            V = mt(g, "WeakMap"),
            G = mt(Object, "create"),
            K = At(H),
            Z = At(Y),
            J = At(U),
            Q = At(X),
            tt = At(V),
            et = W ? W.prototype : void 0,
            nt = et ? et.valueOf : void 0,
            it = et ? et.toString : void 0;
          function rt(t) {
            var e = -1,
              n = t ? t.length : 0;
            for (this.clear(); ++e < n; ) {
              var i = t[e];
              this.set(i[0], i[1]);
            }
          }
          function ot(t) {
            var e = -1,
              n = t ? t.length : 0;
            for (this.clear(); ++e < n; ) {
              var i = t[e];
              this.set(i[0], i[1]);
            }
          }
          function at(t) {
            var e = -1,
              n = t ? t.length : 0;
            for (this.clear(); ++e < n; ) {
              var i = t[e];
              this.set(i[0], i[1]);
            }
          }
          function st(t) {
            var e = -1,
              n = t ? t.length : 0;
            for (this.__data__ = new at(); ++e < n; ) this.add(t[e]);
          }
          function lt(t) {
            this.__data__ = new ot(t);
          }
          function ct(t, e) {
            for (var n = t.length; n--; ) if (zt(t[n][0], e)) return n;
            return -1;
          }
          function dt(t, e) {
            for (
              var n = 0, i = (e = _t(e, t) ? [e] : ht(e)).length;
              null != t && n < i;

            )
              t = t[wt(e[n++])];
            return n && n == i ? t : void 0;
          }
          function ut(t, e) {
            return null != t && e in Object(t);
          }
          function pt(t, e, n, s, l) {
            return (
              t === e ||
              (null == t || null == e || (!Lt(t) && !qt(e))
                ? t != t && e != e
                : (function (t, e, n, s, l, c) {
                    var d = kt(t),
                      u = kt(e),
                      p = "[object Array]",
                      h = "[object Array]";
                    d || (p = (p = gt(t)) == i ? o : p),
                      u || (h = (h = gt(e)) == i ? o : h);
                    var f = p == o && !A(t),
                      b = h == o && !A(e),
                      m = p == h;
                    if (m && !f)
                      return (
                        c || (c = new lt()),
                        d || jt(t)
                          ? ft(t, e, n, s, l, c)
                          : (function (t, e, n, i, o, s, l) {
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
                                    !i(new N(t), new N(e))
                                  );
                                case "[object Boolean]":
                                case "[object Date]":
                                case "[object Number]":
                                  return zt(+t, +e);
                                case "[object Error]":
                                  return (
                                    t.name == e.name && t.message == e.message
                                  );
                                case "[object RegExp]":
                                case "[object String]":
                                  return t == e + "";
                                case r:
                                  var c = x;
                                case a:
                                  var d = 2 & s;
                                  if ((c || (c = z), t.size != e.size && !d))
                                    return !1;
                                  var u = l.get(t);
                                  if (u) return u == e;
                                  (s |= 1), l.set(t, e);
                                  var p = ft(c(t), c(e), i, o, s, l);
                                  return l.delete(t), p;
                                case "[object Symbol]":
                                  if (nt) return nt.call(t) == nt.call(e);
                              }
                              return !1;
                            })(t, e, p, n, s, l, c)
                      );
                    if (!(2 & l)) {
                      var g = f && P.call(t, "__wrapped__"),
                        v = b && P.call(e, "__wrapped__");
                      if (g || v) {
                        var _ = g ? t.value() : t,
                          y = v ? e.value() : e;
                        return c || (c = new lt()), n(_, y, s, l, c);
                      }
                    }
                    return (
                      !!m &&
                      (c || (c = new lt()),
                      (function (t, e, n, i, r, o) {
                        var a = 2 & r,
                          s = Pt(t),
                          l = s.length;
                        if (l != Pt(e).length && !a) return !1;
                        for (var c = l; c--; ) {
                          var d = s[c];
                          if (!(a ? d in e : P.call(e, d))) return !1;
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
                            !(void 0 === m ? f === b || n(f, b, i, r, o) : m)
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
                      })(t, e, n, s, l, c))
                    );
                  })(t, e, pt, n, s, l))
            );
          }
          function ht(t) {
            return kt(t) ? t : Ot(t);
          }
          function ft(t, e, n, i, r, o) {
            var a = 2 & r,
              s = t.length,
              l = e.length;
            if (s != l && !(a && l > s)) return !1;
            var c = o.get(t);
            if (c && o.get(e)) return c == e;
            var d = -1,
              u = !0,
              p = 1 & r ? new st() : void 0;
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
                  !w(e, function (t, e) {
                    if (!p.has(e) && (h === t || n(h, t, i, r, o)))
                      return p.add(e);
                  })
                ) {
                  u = !1;
                  break;
                }
              } else if (h !== f && !n(h, f, i, r, o)) {
                u = !1;
                break;
              }
            }
            return o.delete(t), o.delete(e), u;
          }
          function bt(t, e) {
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
          function mt(t, e) {
            var n = (function (t, e) {
              return null == t ? void 0 : t[e];
            })(t, e);
            return (function (t) {
              return (
                !(
                  !Lt(t) ||
                  (function (t) {
                    return !!E && E in t;
                  })(t)
                ) && (Tt(t) || A(t) ? I : p).test(At(t))
              );
            })(n)
              ? n
              : void 0;
          }
          (rt.prototype.clear = function () {
            this.__data__ = G ? G(null) : {};
          }),
            (rt.prototype.delete = function (t) {
              return this.has(t) && delete this.__data__[t];
            }),
            (rt.prototype.get = function (t) {
              var e = this.__data__;
              if (G) {
                var n = e[t];
                return "__lodash_hash_undefined__" === n ? void 0 : n;
              }
              return P.call(e, t) ? e[t] : void 0;
            }),
            (rt.prototype.has = function (t) {
              var e = this.__data__;
              return G ? void 0 !== e[t] : P.call(e, t);
            }),
            (rt.prototype.set = function (t, e) {
              return (
                (this.__data__[t] =
                  G && void 0 === e ? "__lodash_hash_undefined__" : e),
                this
              );
            }),
            (ot.prototype.clear = function () {
              this.__data__ = [];
            }),
            (ot.prototype.delete = function (t) {
              var e = this.__data__,
                n = ct(e, t);
              return !(
                n < 0 || (n == e.length - 1 ? e.pop() : F.call(e, n, 1), 0)
              );
            }),
            (ot.prototype.get = function (t) {
              var e = this.__data__,
                n = ct(e, t);
              return n < 0 ? void 0 : e[n][1];
            }),
            (ot.prototype.has = function (t) {
              return ct(this.__data__, t) > -1;
            }),
            (ot.prototype.set = function (t, e) {
              var n = this.__data__,
                i = ct(n, t);
              return i < 0 ? n.push([t, e]) : (n[i][1] = e), this;
            }),
            (at.prototype.clear = function () {
              this.__data__ = {
                hash: new rt(),
                map: new (Y || ot)(),
                string: new rt(),
              };
            }),
            (at.prototype.delete = function (t) {
              return bt(this, t).delete(t);
            }),
            (at.prototype.get = function (t) {
              return bt(this, t).get(t);
            }),
            (at.prototype.has = function (t) {
              return bt(this, t).has(t);
            }),
            (at.prototype.set = function (t, e) {
              return bt(this, t).set(t, e), this;
            }),
            (st.prototype.add = st.prototype.push =
              function (t) {
                return this.__data__.set(t, "__lodash_hash_undefined__"), this;
              }),
            (st.prototype.has = function (t) {
              return this.__data__.has(t);
            }),
            (lt.prototype.clear = function () {
              this.__data__ = new ot();
            }),
            (lt.prototype.delete = function (t) {
              return this.__data__.delete(t);
            }),
            (lt.prototype.get = function (t) {
              return this.__data__.get(t);
            }),
            (lt.prototype.has = function (t) {
              return this.__data__.has(t);
            }),
            (lt.prototype.set = function (t, e) {
              var n = this.__data__;
              if (n instanceof ot) {
                var i = n.__data__;
                if (!Y || i.length < 199) return i.push([t, e]), this;
                n = this.__data__ = new at(i);
              }
              return n.set(t, e), this;
            });
          var gt = function (t) {
            return R.call(t);
          };
          function vt(t, e) {
            return (
              !!(e = null == e ? 9007199254740991 : e) &&
              ("number" == typeof t || h.test(t)) &&
              t > -1 &&
              t % 1 == 0 &&
              t < e
            );
          }
          function _t(t, e) {
            if (kt(t)) return !1;
            var n = typeof t;
            return (
              !(
                "number" != n &&
                "symbol" != n &&
                "boolean" != n &&
                null != t &&
                !Et(t)
              ) ||
              l.test(t) ||
              !s.test(t) ||
              (null != e && t in Object(e))
            );
          }
          function yt(t) {
            return t == t && !Lt(t);
          }
          function Mt(t, e) {
            return function (n) {
              return (
                null != n && n[t] === e && (void 0 !== e || t in Object(n))
              );
            };
          }
          ((H && "[object DataView]" != gt(new H(new ArrayBuffer(1)))) ||
            (Y && gt(new Y()) != r) ||
            (U && "[object Promise]" != gt(U.resolve())) ||
            (X && gt(new X()) != a) ||
            (V && "[object WeakMap]" != gt(new V()))) &&
            (gt = function (t) {
              var e = R.call(t),
                n = e == o ? t.constructor : void 0,
                i = n ? At(n) : void 0;
              if (i)
                switch (i) {
                  case K:
                    return "[object DataView]";
                  case Z:
                    return r;
                  case J:
                    return "[object Promise]";
                  case Q:
                    return a;
                  case tt:
                    return "[object WeakMap]";
                }
              return e;
            });
          var Ot = xt(function (t) {
            var e;
            t =
              null == (e = t)
                ? ""
                : (function (t) {
                    if ("string" == typeof t) return t;
                    if (Et(t)) return it ? it.call(t) : "";
                    var e = t + "";
                    return "0" == e && 1 / t == -1 / 0 ? "-0" : e;
                  })(e);
            var n = [];
            return (
              c.test(t) && n.push(""),
              t.replace(d, function (t, e, i, r) {
                n.push(i ? r.replace(u, "$1") : e || t);
              }),
              n
            );
          });
          function wt(t) {
            if ("string" == typeof t || Et(t)) return t;
            var e = t + "";
            return "0" == e && 1 / t == -1 / 0 ? "-0" : e;
          }
          function At(t) {
            if (null != t) {
              try {
                return j.call(t);
              } catch (t) {}
              try {
                return t + "";
              } catch (t) {}
            }
            return "";
          }
          function xt(t, e) {
            if ("function" != typeof t || (e && "function" != typeof e))
              throw new TypeError("Expected a function");
            var n = function () {
              var i = arguments,
                r = e ? e.apply(this, i) : i[0],
                o = n.cache;
              if (o.has(r)) return o.get(r);
              var a = t.apply(this, i);
              return (n.cache = o.set(r, a)), a;
            };
            return (n.cache = new (xt.Cache || at)()), n;
          }
          function zt(t, e) {
            return t === e || (t != t && e != e);
          }
          function Ct(t) {
            return (
              (function (t) {
                return qt(t) && St(t);
              })(t) &&
              P.call(t, "callee") &&
              (!B.call(t, "callee") || R.call(t) == i)
            );
          }
          xt.Cache = at;
          var kt = Array.isArray;
          function St(t) {
            return null != t && Dt(t.length) && !Tt(t);
          }
          function Tt(t) {
            var e = Lt(t) ? R.call(t) : "";
            return (
              "[object Function]" == e || "[object GeneratorFunction]" == e
            );
          }
          function Dt(t) {
            return (
              "number" == typeof t &&
              t > -1 &&
              t % 1 == 0 &&
              t <= 9007199254740991
            );
          }
          function Lt(t) {
            var e = typeof t;
            return !!t && ("object" == e || "function" == e);
          }
          function qt(t) {
            return !!t && "object" == typeof t;
          }
          function Et(t) {
            return (
              "symbol" == typeof t || (qt(t) && "[object Symbol]" == R.call(t))
            );
          }
          var jt = O
            ? (function (t) {
                return function (e) {
                  return t(e);
                };
              })(O)
            : function (t) {
                return qt(t) && Dt(t.length) && !!f[R.call(t)];
              };
          function Pt(t) {
            return St(t)
              ? (function (t, e) {
                  var n =
                      kt(t) || Ct(t)
                        ? (function (t, e) {
                            for (var n = -1, i = Array(t); ++n < t; )
                              i[n] = e(n);
                            return i;
                          })(t.length, String)
                        : [],
                    i = n.length,
                    r = !!i;
                  for (var o in t)
                    !P.call(t, o) ||
                      (r && ("length" == o || vt(o, i))) ||
                      n.push(o);
                  return n;
                })(t)
              : (function (t) {
                  if (
                    ((n = (e = t) && e.constructor),
                    e !== (("function" == typeof n && n.prototype) || L))
                  )
                    return $(t);
                  var e,
                    n,
                    i = [];
                  for (var r in Object(t))
                    P.call(t, r) && "constructor" != r && i.push(r);
                  return i;
                })(t);
          }
          function Rt(t) {
            return t;
          }
          n.exports = function (t, e) {
            var n = {};
            return (
              (e = (function (t) {
                return "function" == typeof t
                  ? t
                  : null == t
                  ? Rt
                  : "object" == typeof t
                  ? kt(t)
                    ? (function (t, e) {
                        return _t(t) && yt(e)
                          ? Mt(wt(t), e)
                          : function (n) {
                              var i = (function (t, e, n) {
                                var i = null == t ? void 0 : dt(t, e);
                                return void 0 === i ? void 0 : i;
                              })(n, t);
                              return void 0 === i && i === e
                                ? (function (t, e) {
                                    return (
                                      null != t &&
                                      (function (t, e, n) {
                                        for (
                                          var i,
                                            r = -1,
                                            o = (e = _t(e, t) ? [e] : ht(e))
                                              .length;
                                          ++r < o;

                                        ) {
                                          var a = wt(e[r]);
                                          if (!(i = null != t && n(t, a)))
                                            break;
                                          t = t[a];
                                        }
                                        return (
                                          i ||
                                          (!!(o = t ? t.length : 0) &&
                                            Dt(o) &&
                                            vt(a, o) &&
                                            (kt(t) || Ct(t)))
                                        );
                                      })(t, e, ut)
                                    );
                                  })(n, t)
                                : pt(e, i, void 0, 3);
                            };
                      })(t[0], t[1])
                    : (function (t) {
                        var e = (function (t) {
                          for (var e = Pt(t), n = e.length; n--; ) {
                            var i = e[n],
                              r = t[i];
                            e[n] = [i, r, yt(r)];
                          }
                          return e;
                        })(t);
                        return 1 == e.length && e[0][2]
                          ? Mt(e[0][0], e[0][1])
                          : function (n) {
                              return (
                                n === t ||
                                (function (t, e, n, i) {
                                  var r = n.length,
                                    o = r;
                                  if (null == t) return !o;
                                  for (t = Object(t); r--; ) {
                                    var a = n[r];
                                    if (a[2] ? a[1] !== t[a[0]] : !(a[0] in t))
                                      return !1;
                                  }
                                  for (; ++r < o; ) {
                                    var s = (a = n[r])[0],
                                      l = t[s],
                                      c = a[1];
                                    if (a[2]) {
                                      if (void 0 === l && !(s in t)) return !1;
                                    } else {
                                      var d = new lt();
                                      if (i) var u = i(l, c, s, t, e, d);
                                      if (
                                        !(void 0 === u ? pt(c, l, i, 3, d) : u)
                                      )
                                        return !1;
                                    }
                                  }
                                  return !0;
                                })(n, t, e)
                              );
                            };
                      })(t)
                  : _t((e = t))
                  ? ((n = wt(e)),
                    function (t) {
                      return null == t ? void 0 : t[n];
                    })
                  : (function (t) {
                      return function (e) {
                        return dt(e, t);
                      };
                    })(e);
                var e, n;
              })(e)),
              (function (t, e) {
                t &&
                  (function (t, e, n) {
                    for (
                      var i = -1, r = Object(t), o = n(t), a = o.length;
                      a--;

                    ) {
                      var s = o[++i];
                      if (!1 === e(r[s], s, r)) break;
                    }
                  })(t, e, Pt);
              })(t, function (t, i, r) {
                n[e(t, i, r)] = t;
              }),
              n
            );
          };
        }).call(this, n("c8ba"), n("62e4")(t));
      },
      "369b": function (t, e, n) {
        var i, r;
        void 0 ===
          (r =
            "function" ==
            typeof (i = function t() {
              "use strict";
              var e =
                  "undefined" != typeof self
                    ? self
                    : "undefined" != typeof window
                    ? window
                    : void 0 !== e
                    ? e
                    : {},
                n = !e.document && !!e.postMessage,
                i = n && /blob:/i.test((e.location || {}).protocol),
                r = {},
                o = 0,
                a = {
                  parse: function (n, i) {
                    var s = (i = i || {}).dynamicTyping || !1;
                    if (
                      (M(s) && ((i.dynamicTypingFunction = s), (s = {})),
                      (i.dynamicTyping = s),
                      (i.transform = !!M(i.transform) && i.transform),
                      i.worker && a.WORKERS_SUPPORTED)
                    ) {
                      var l = (function () {
                        if (!a.WORKERS_SUPPORTED) return !1;
                        var n,
                          i,
                          s =
                            ((n = e.URL || e.webkitURL || null),
                            (i = t.toString()),
                            a.BLOB_URL ||
                              (a.BLOB_URL = n.createObjectURL(
                                new Blob(["(", i, ")();"], {
                                  type: "text/javascript",
                                })
                              ))),
                          l = new e.Worker(s);
                        return (l.onmessage = m), (l.id = o++), (r[l.id] = l);
                      })();
                      return (
                        (l.userStep = i.step),
                        (l.userChunk = i.chunk),
                        (l.userComplete = i.complete),
                        (l.userError = i.error),
                        (i.step = M(i.step)),
                        (i.chunk = M(i.chunk)),
                        (i.complete = M(i.complete)),
                        (i.error = M(i.error)),
                        delete i.worker,
                        void l.postMessage({
                          input: n,
                          config: i,
                          workerId: l.id,
                        })
                      );
                    }
                    var h = null;
                    return (
                      a.NODE_STREAM_INPUT,
                      "string" == typeof n
                        ? (h = i.download ? new c(i) : new u(i))
                        : !0 === n.readable && M(n.read) && M(n.on)
                        ? (h = new p(i))
                        : ((e.File && n instanceof File) ||
                            n instanceof Object) &&
                          (h = new d(i)),
                      h.stream(n)
                    );
                  },
                  unparse: function (t, e) {
                    var n = !1,
                      i = !0,
                      r = ",",
                      o = "\r\n",
                      s = '"',
                      l = s + s,
                      c = !1,
                      d = null,
                      u = !1;
                    !(function () {
                      if ("object" == typeof e) {
                        if (
                          ("string" != typeof e.delimiter ||
                            a.BAD_DELIMITERS.filter(function (t) {
                              return -1 !== e.delimiter.indexOf(t);
                            }).length ||
                            (r = e.delimiter),
                          ("boolean" == typeof e.quotes ||
                            "function" == typeof e.quotes ||
                            Array.isArray(e.quotes)) &&
                            (n = e.quotes),
                          ("boolean" != typeof e.skipEmptyLines &&
                            "string" != typeof e.skipEmptyLines) ||
                            (c = e.skipEmptyLines),
                          "string" == typeof e.newline && (o = e.newline),
                          "string" == typeof e.quoteChar && (s = e.quoteChar),
                          "boolean" == typeof e.header && (i = e.header),
                          Array.isArray(e.columns))
                        ) {
                          if (0 === e.columns.length)
                            throw new Error("Option columns is empty");
                          d = e.columns;
                        }
                        void 0 !== e.escapeChar && (l = e.escapeChar + s),
                          "boolean" == typeof e.escapeFormulae &&
                            (u = e.escapeFormulae);
                      }
                    })();
                    var p = new RegExp(f(s), "g");
                    if (
                      ("string" == typeof t && (t = JSON.parse(t)),
                      Array.isArray(t))
                    ) {
                      if (!t.length || Array.isArray(t[0]))
                        return b(null, t, c);
                      if ("object" == typeof t[0]) return b(d || h(t[0]), t, c);
                    } else if ("object" == typeof t)
                      return (
                        "string" == typeof t.data &&
                          (t.data = JSON.parse(t.data)),
                        Array.isArray(t.data) &&
                          (t.fields || (t.fields = t.meta && t.meta.fields),
                          t.fields ||
                            (t.fields = Array.isArray(t.data[0])
                              ? t.fields
                              : h(t.data[0])),
                          Array.isArray(t.data[0]) ||
                            "object" == typeof t.data[0] ||
                            (t.data = [t.data])),
                        b(t.fields || [], t.data || [], c)
                      );
                    throw new Error("Unable to serialize unrecognized input");
                    function h(t) {
                      if ("object" != typeof t) return [];
                      var e = [];
                      for (var n in t) e.push(n);
                      return e;
                    }
                    function b(t, e, n) {
                      var a = "";
                      "string" == typeof t && (t = JSON.parse(t)),
                        "string" == typeof e && (e = JSON.parse(e));
                      var s = Array.isArray(t) && 0 < t.length,
                        l = !Array.isArray(e[0]);
                      if (s && i) {
                        for (var c = 0; c < t.length; c++)
                          0 < c && (a += r), (a += m(t[c], c));
                        0 < e.length && (a += o);
                      }
                      for (var d = 0; d < e.length; d++) {
                        var u = s ? t.length : e[d].length,
                          p = !1,
                          h = s
                            ? 0 === Object.keys(e[d]).length
                            : 0 === e[d].length;
                        if (
                          (n &&
                            !s &&
                            (p =
                              "greedy" === n
                                ? "" === e[d].join("").trim()
                                : 1 === e[d].length && 0 === e[d][0].length),
                          "greedy" === n && s)
                        ) {
                          for (var f = [], b = 0; b < u; b++) {
                            var g = l ? t[b] : b;
                            f.push(e[d][g]);
                          }
                          p = "" === f.join("").trim();
                        }
                        if (!p) {
                          for (var v = 0; v < u; v++) {
                            0 < v && !h && (a += r);
                            var _ = s && l ? t[v] : v;
                            a += m(e[d][_], v);
                          }
                          d < e.length - 1 && (!n || (0 < u && !h)) && (a += o);
                        }
                      }
                      return a;
                    }
                    function m(t, e) {
                      if (null == t) return "";
                      if (t.constructor === Date)
                        return JSON.stringify(t).slice(1, 25);
                      !0 === u &&
                        "string" == typeof t &&
                        null !== t.match(/^[=+\-@].*$/) &&
                        (t = "'" + t);
                      var i = t.toString().replace(p, l);
                      return ("boolean" == typeof n && n) ||
                        ("function" == typeof n && n(t, e)) ||
                        (Array.isArray(n) && n[e]) ||
                        (function (t, e) {
                          for (var n = 0; n < e.length; n++)
                            if (-1 < t.indexOf(e[n])) return !0;
                          return !1;
                        })(i, a.BAD_DELIMITERS) ||
                        -1 < i.indexOf(r) ||
                        " " === i.charAt(0) ||
                        " " === i.charAt(i.length - 1)
                        ? s + i + s
                        : i;
                    }
                  },
                };
              if (
                ((a.RECORD_SEP = String.fromCharCode(30)),
                (a.UNIT_SEP = String.fromCharCode(31)),
                (a.BYTE_ORDER_MARK = "\ufeff"),
                (a.BAD_DELIMITERS = ["\r", "\n", '"', a.BYTE_ORDER_MARK]),
                (a.WORKERS_SUPPORTED = !n && !!e.Worker),
                (a.NODE_STREAM_INPUT = 1),
                (a.LocalChunkSize = 10485760),
                (a.RemoteChunkSize = 5242880),
                (a.DefaultDelimiter = ","),
                (a.Parser = b),
                (a.ParserHandle = h),
                (a.NetworkStreamer = c),
                (a.FileStreamer = d),
                (a.StringStreamer = u),
                (a.ReadableStreamStreamer = p),
                e.jQuery)
              ) {
                var s = e.jQuery;
                s.fn.parse = function (t) {
                  var n = t.config || {},
                    i = [];
                  return (
                    this.each(function (t) {
                      if (
                        "INPUT" !== s(this).prop("tagName").toUpperCase() ||
                        "file" !== s(this).attr("type").toLowerCase() ||
                        !e.FileReader ||
                        !this.files ||
                        0 === this.files.length
                      )
                        return !0;
                      for (var r = 0; r < this.files.length; r++)
                        i.push({
                          file: this.files[r],
                          inputElem: this,
                          instanceConfig: s.extend({}, n),
                        });
                    }),
                    r(),
                    this
                  );
                  function r() {
                    if (0 !== i.length) {
                      var e,
                        n,
                        r,
                        l = i[0];
                      if (M(t.before)) {
                        var c = t.before(l.file, l.inputElem);
                        if ("object" == typeof c) {
                          if ("abort" === c.action)
                            return (
                              (e = l.file),
                              (n = l.inputElem),
                              (r = c.reason),
                              void (
                                M(t.error) &&
                                t.error({ name: "AbortError" }, e, n, r)
                              )
                            );
                          if ("skip" === c.action) return void o();
                          "object" == typeof c.config &&
                            (l.instanceConfig = s.extend(
                              l.instanceConfig,
                              c.config
                            ));
                        } else if ("skip" === c) return void o();
                      }
                      var d = l.instanceConfig.complete;
                      (l.instanceConfig.complete = function (t) {
                        M(d) && d(t, l.file, l.inputElem), o();
                      }),
                        a.parse(l.file, l.instanceConfig);
                    } else M(t.complete) && t.complete();
                  }
                  function o() {
                    i.splice(0, 1), r();
                  }
                };
              }
              function l(t) {
                (this._handle = null),
                  (this._finished = !1),
                  (this._completed = !1),
                  (this._halted = !1),
                  (this._input = null),
                  (this._baseIndex = 0),
                  (this._partialLine = ""),
                  (this._rowCount = 0),
                  (this._start = 0),
                  (this._nextChunk = null),
                  (this.isFirstChunk = !0),
                  (this._completeResults = { data: [], errors: [], meta: {} }),
                  function (t) {
                    var e = _(t);
                    (e.chunkSize = parseInt(e.chunkSize)),
                      t.step || t.chunk || (e.chunkSize = null),
                      (this._handle = new h(e)),
                      ((this._handle.streamer = this)._config = e);
                  }.call(this, t),
                  (this.parseChunk = function (t, n) {
                    if (this.isFirstChunk && M(this._config.beforeFirstChunk)) {
                      var r = this._config.beforeFirstChunk(t);
                      void 0 !== r && (t = r);
                    }
                    (this.isFirstChunk = !1), (this._halted = !1);
                    var o = this._partialLine + t;
                    this._partialLine = "";
                    var s = this._handle.parse(
                      o,
                      this._baseIndex,
                      !this._finished
                    );
                    if (!this._handle.paused() && !this._handle.aborted()) {
                      var l = s.meta.cursor;
                      this._finished ||
                        ((this._partialLine = o.substring(l - this._baseIndex)),
                        (this._baseIndex = l)),
                        s && s.data && (this._rowCount += s.data.length);
                      var c =
                        this._finished ||
                        (this._config.preview &&
                          this._rowCount >= this._config.preview);
                      if (i)
                        e.postMessage({
                          results: s,
                          workerId: a.WORKER_ID,
                          finished: c,
                        });
                      else if (M(this._config.chunk) && !n) {
                        if (
                          (this._config.chunk(s, this._handle),
                          this._handle.paused() || this._handle.aborted())
                        )
                          return void (this._halted = !0);
                        (s = void 0), (this._completeResults = void 0);
                      }
                      return (
                        this._config.step ||
                          this._config.chunk ||
                          ((this._completeResults.data =
                            this._completeResults.data.concat(s.data)),
                          (this._completeResults.errors =
                            this._completeResults.errors.concat(s.errors)),
                          (this._completeResults.meta = s.meta)),
                        this._completed ||
                          !c ||
                          !M(this._config.complete) ||
                          (s && s.meta.aborted) ||
                          (this._config.complete(
                            this._completeResults,
                            this._input
                          ),
                          (this._completed = !0)),
                        c || (s && s.meta.paused) || this._nextChunk(),
                        s
                      );
                    }
                    this._halted = !0;
                  }),
                  (this._sendError = function (t) {
                    M(this._config.error)
                      ? this._config.error(t)
                      : i &&
                        this._config.error &&
                        e.postMessage({
                          workerId: a.WORKER_ID,
                          error: t,
                          finished: !1,
                        });
                  });
              }
              function c(t) {
                var e;
                (t = t || {}).chunkSize || (t.chunkSize = a.RemoteChunkSize),
                  l.call(this, t),
                  (this._nextChunk = n
                    ? function () {
                        this._readChunk(), this._chunkLoaded();
                      }
                    : function () {
                        this._readChunk();
                      }),
                  (this.stream = function (t) {
                    (this._input = t), this._nextChunk();
                  }),
                  (this._readChunk = function () {
                    if (this._finished) this._chunkLoaded();
                    else {
                      if (
                        ((e = new XMLHttpRequest()),
                        this._config.withCredentials &&
                          (e.withCredentials = this._config.withCredentials),
                        n ||
                          ((e.onload = y(this._chunkLoaded, this)),
                          (e.onerror = y(this._chunkError, this))),
                        e.open(
                          this._config.downloadRequestBody ? "POST" : "GET",
                          this._input,
                          !n
                        ),
                        this._config.downloadRequestHeaders)
                      ) {
                        var t = this._config.downloadRequestHeaders;
                        for (var i in t) e.setRequestHeader(i, t[i]);
                      }
                      if (this._config.chunkSize) {
                        var r = this._start + this._config.chunkSize - 1;
                        e.setRequestHeader(
                          "Range",
                          "bytes=" + this._start + "-" + r
                        );
                      }
                      try {
                        e.send(this._config.downloadRequestBody);
                      } catch (t) {
                        this._chunkError(t.message);
                      }
                      n && 0 === e.status && this._chunkError();
                    }
                  }),
                  (this._chunkLoaded = function () {
                    4 === e.readyState &&
                      (e.status < 200 || 400 <= e.status
                        ? this._chunkError()
                        : ((this._start += this._config.chunkSize
                            ? this._config.chunkSize
                            : e.responseText.length),
                          (this._finished =
                            !this._config.chunkSize ||
                            this._start >=
                              (function (t) {
                                var e = t.getResponseHeader("Content-Range");
                                return null === e
                                  ? -1
                                  : parseInt(
                                      e.substring(e.lastIndexOf("/") + 1)
                                    );
                              })(e)),
                          this.parseChunk(e.responseText)));
                  }),
                  (this._chunkError = function (t) {
                    var n = e.statusText || t;
                    this._sendError(new Error(n));
                  });
              }
              function d(t) {
                var e, n;
                (t = t || {}).chunkSize || (t.chunkSize = a.LocalChunkSize),
                  l.call(this, t);
                var i = "undefined" != typeof FileReader;
                (this.stream = function (t) {
                  (this._input = t),
                    (n = t.slice || t.webkitSlice || t.mozSlice),
                    i
                      ? (((e = new FileReader()).onload = y(
                          this._chunkLoaded,
                          this
                        )),
                        (e.onerror = y(this._chunkError, this)))
                      : (e = new FileReaderSync()),
                    this._nextChunk();
                }),
                  (this._nextChunk = function () {
                    this._finished ||
                      (this._config.preview &&
                        !(this._rowCount < this._config.preview)) ||
                      this._readChunk();
                  }),
                  (this._readChunk = function () {
                    var t = this._input;
                    if (this._config.chunkSize) {
                      var r = Math.min(
                        this._start + this._config.chunkSize,
                        this._input.size
                      );
                      t = n.call(t, this._start, r);
                    }
                    var o = e.readAsText(t, this._config.encoding);
                    i || this._chunkLoaded({ target: { result: o } });
                  }),
                  (this._chunkLoaded = function (t) {
                    (this._start += this._config.chunkSize),
                      (this._finished =
                        !this._config.chunkSize ||
                        this._start >= this._input.size),
                      this.parseChunk(t.target.result);
                  }),
                  (this._chunkError = function () {
                    this._sendError(e.error);
                  });
              }
              function u(t) {
                var e;
                l.call(this, (t = t || {})),
                  (this.stream = function (t) {
                    return (e = t), this._nextChunk();
                  }),
                  (this._nextChunk = function () {
                    if (!this._finished) {
                      var t,
                        n = this._config.chunkSize;
                      return (
                        n
                          ? ((t = e.substring(0, n)), (e = e.substring(n)))
                          : ((t = e), (e = "")),
                        (this._finished = !e),
                        this.parseChunk(t)
                      );
                    }
                  });
              }
              function p(t) {
                l.call(this, (t = t || {}));
                var e = [],
                  n = !0,
                  i = !1;
                (this.pause = function () {
                  l.prototype.pause.apply(this, arguments), this._input.pause();
                }),
                  (this.resume = function () {
                    l.prototype.resume.apply(this, arguments),
                      this._input.resume();
                  }),
                  (this.stream = function (t) {
                    (this._input = t),
                      this._input.on("data", this._streamData),
                      this._input.on("end", this._streamEnd),
                      this._input.on("error", this._streamError);
                  }),
                  (this._checkIsFinished = function () {
                    i && 1 === e.length && (this._finished = !0);
                  }),
                  (this._nextChunk = function () {
                    this._checkIsFinished(),
                      e.length ? this.parseChunk(e.shift()) : (n = !0);
                  }),
                  (this._streamData = y(function (t) {
                    try {
                      e.push(
                        "string" == typeof t
                          ? t
                          : t.toString(this._config.encoding)
                      ),
                        n &&
                          ((n = !1),
                          this._checkIsFinished(),
                          this.parseChunk(e.shift()));
                    } catch (t) {
                      this._streamError(t);
                    }
                  }, this)),
                  (this._streamError = y(function (t) {
                    this._streamCleanUp(), this._sendError(t);
                  }, this)),
                  (this._streamEnd = y(function () {
                    this._streamCleanUp(), (i = !0), this._streamData("");
                  }, this)),
                  (this._streamCleanUp = y(function () {
                    this._input.removeListener("data", this._streamData),
                      this._input.removeListener("end", this._streamEnd),
                      this._input.removeListener("error", this._streamError);
                  }, this));
              }
              function h(t) {
                var e,
                  n,
                  i,
                  r = Math.pow(2, 53),
                  o = -r,
                  s = /^\s*-?(\d+\.?|\.\d+|\d+\.\d+)(e[-+]?\d+)?\s*$/,
                  l =
                    /(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))/,
                  c = this,
                  d = 0,
                  u = 0,
                  p = !1,
                  h = !1,
                  m = [],
                  g = { data: [], errors: [], meta: {} };
                if (M(t.step)) {
                  var v = t.step;
                  t.step = function (e) {
                    if (((g = e), w())) O();
                    else {
                      if ((O(), 0 === g.data.length)) return;
                      (d += e.data.length),
                        t.preview && d > t.preview
                          ? n.abort()
                          : ((g.data = g.data[0]), v(g, c));
                    }
                  };
                }
                function y(e) {
                  return "greedy" === t.skipEmptyLines
                    ? "" === e.join("").trim()
                    : 1 === e.length && 0 === e[0].length;
                }
                function O() {
                  if (
                    (g &&
                      i &&
                      (x(
                        "Delimiter",
                        "UndetectableDelimiter",
                        "Unable to auto-detect delimiting character; defaulted to '" +
                          a.DefaultDelimiter +
                          "'"
                      ),
                      (i = !1)),
                    t.skipEmptyLines)
                  )
                    for (var e = 0; e < g.data.length; e++)
                      y(g.data[e]) && g.data.splice(e--, 1);
                  return (
                    w() &&
                      (function () {
                        if (g)
                          if (Array.isArray(g.data[0])) {
                            for (var e = 0; w() && e < g.data.length; e++)
                              g.data[e].forEach(n);
                            g.data.splice(0, 1);
                          } else g.data.forEach(n);
                        function n(e, n) {
                          M(t.transformHeader) && (e = t.transformHeader(e, n)),
                            m.push(e);
                        }
                      })(),
                    (function () {
                      if (!g || (!t.header && !t.dynamicTyping && !t.transform))
                        return g;
                      function e(e, n) {
                        var i,
                          r = t.header ? {} : [];
                        for (i = 0; i < e.length; i++) {
                          var o = i,
                            a = e[i];
                          t.header &&
                            (o = i >= m.length ? "__parsed_extra" : m[i]),
                            t.transform && (a = t.transform(a, o)),
                            (a = A(o, a)),
                            "__parsed_extra" === o
                              ? ((r[o] = r[o] || []), r[o].push(a))
                              : (r[o] = a);
                        }
                        return (
                          t.header &&
                            (i > m.length
                              ? x(
                                  "FieldMismatch",
                                  "TooManyFields",
                                  "Too many fields: expected " +
                                    m.length +
                                    " fields but parsed " +
                                    i,
                                  u + n
                                )
                              : i < m.length &&
                                x(
                                  "FieldMismatch",
                                  "TooFewFields",
                                  "Too few fields: expected " +
                                    m.length +
                                    " fields but parsed " +
                                    i,
                                  u + n
                                )),
                          r
                        );
                      }
                      var n = 1;
                      return (
                        !g.data.length || Array.isArray(g.data[0])
                          ? ((g.data = g.data.map(e)), (n = g.data.length))
                          : (g.data = e(g.data, 0)),
                        t.header && g.meta && (g.meta.fields = m),
                        (u += n),
                        g
                      );
                    })()
                  );
                }
                function w() {
                  return t.header && 0 === m.length;
                }
                function A(e, n) {
                  return (
                    (i = e),
                    t.dynamicTypingFunction &&
                      void 0 === t.dynamicTyping[i] &&
                      (t.dynamicTyping[i] = t.dynamicTypingFunction(i)),
                    !0 === (t.dynamicTyping[i] || t.dynamicTyping)
                      ? "true" === n ||
                        "TRUE" === n ||
                        ("false" !== n &&
                          "FALSE" !== n &&
                          ((function (t) {
                            if (s.test(t)) {
                              var e = parseFloat(t);
                              if (o < e && e < r) return !0;
                            }
                            return !1;
                          })(n)
                            ? parseFloat(n)
                            : l.test(n)
                            ? new Date(n)
                            : "" === n
                            ? null
                            : n))
                      : n
                  );
                  var i;
                }
                function x(t, e, n, i) {
                  var r = { type: t, code: e, message: n };
                  void 0 !== i && (r.row = i), g.errors.push(r);
                }
                (this.parse = function (r, o, s) {
                  var l = t.quoteChar || '"';
                  if (
                    (t.newline ||
                      (t.newline = (function (t, e) {
                        t = t.substring(0, 1048576);
                        var n = new RegExp(f(e) + "([^]*?)" + f(e), "gm"),
                          i = (t = t.replace(n, "")).split("\r"),
                          r = t.split("\n"),
                          o = 1 < r.length && r[0].length < i[0].length;
                        if (1 === i.length || o) return "\n";
                        for (var a = 0, s = 0; s < i.length; s++)
                          "\n" === i[s][0] && a++;
                        return a >= i.length / 2 ? "\r\n" : "\r";
                      })(r, l)),
                    (i = !1),
                    t.delimiter)
                  )
                    M(t.delimiter) &&
                      ((t.delimiter = t.delimiter(r)),
                      (g.meta.delimiter = t.delimiter));
                  else {
                    var c = (function (e, n, i, r, o) {
                      var s, l, c, d;
                      o = o || [",", "\t", "|", ";", a.RECORD_SEP, a.UNIT_SEP];
                      for (var u = 0; u < o.length; u++) {
                        var p = o[u],
                          h = 0,
                          f = 0,
                          m = 0;
                        c = void 0;
                        for (
                          var g = new b({
                              comments: r,
                              delimiter: p,
                              newline: n,
                              preview: 10,
                            }).parse(e),
                            v = 0;
                          v < g.data.length;
                          v++
                        )
                          if (i && y(g.data[v])) m++;
                          else {
                            var _ = g.data[v].length;
                            (f += _),
                              void 0 !== c
                                ? 0 < _ && ((h += Math.abs(_ - c)), (c = _))
                                : (c = _);
                          }
                        0 < g.data.length && (f /= g.data.length - m),
                          (void 0 === l || h <= l) &&
                            (void 0 === d || d < f) &&
                            1.99 < f &&
                            ((l = h), (s = p), (d = f));
                      }
                      return {
                        successful: !!(t.delimiter = s),
                        bestDelimiter: s,
                      };
                    })(
                      r,
                      t.newline,
                      t.skipEmptyLines,
                      t.comments,
                      t.delimitersToGuess
                    );
                    c.successful
                      ? (t.delimiter = c.bestDelimiter)
                      : ((i = !0), (t.delimiter = a.DefaultDelimiter)),
                      (g.meta.delimiter = t.delimiter);
                  }
                  var d = _(t);
                  return (
                    t.preview && t.header && d.preview++,
                    (e = r),
                    (n = new b(d)),
                    (g = n.parse(e, o, s)),
                    O(),
                    p ? { meta: { paused: !0 } } : g || { meta: { paused: !1 } }
                  );
                }),
                  (this.paused = function () {
                    return p;
                  }),
                  (this.pause = function () {
                    (p = !0),
                      n.abort(),
                      (e = M(t.chunk) ? "" : e.substring(n.getCharIndex()));
                  }),
                  (this.resume = function () {
                    c.streamer._halted
                      ? ((p = !1), c.streamer.parseChunk(e, !0))
                      : setTimeout(c.resume, 3);
                  }),
                  (this.aborted = function () {
                    return h;
                  }),
                  (this.abort = function () {
                    (h = !0),
                      n.abort(),
                      (g.meta.aborted = !0),
                      M(t.complete) && t.complete(g),
                      (e = "");
                  });
              }
              function f(t) {
                return t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
              }
              function b(t) {
                var e,
                  n = (t = t || {}).delimiter,
                  i = t.newline,
                  r = t.comments,
                  o = t.step,
                  s = t.preview,
                  l = t.fastMode,
                  c = (e = void 0 === t.quoteChar ? '"' : t.quoteChar);
                if (
                  (void 0 !== t.escapeChar && (c = t.escapeChar),
                  ("string" != typeof n || -1 < a.BAD_DELIMITERS.indexOf(n)) &&
                    (n = ","),
                  r === n)
                )
                  throw new Error("Comment character same as delimiter");
                !0 === r
                  ? (r = "#")
                  : ("string" != typeof r ||
                      -1 < a.BAD_DELIMITERS.indexOf(r)) &&
                    (r = !1),
                  "\n" !== i && "\r" !== i && "\r\n" !== i && (i = "\n");
                var d = 0,
                  u = !1;
                (this.parse = function (t, a, p) {
                  if ("string" != typeof t)
                    throw new Error("Input must be a string");
                  var h = t.length,
                    b = n.length,
                    m = i.length,
                    g = r.length,
                    v = M(o),
                    _ = [],
                    y = [],
                    O = [],
                    w = (d = 0);
                  if (!t) return R();
                  if (l || (!1 !== l && -1 === t.indexOf(e))) {
                    for (var A = t.split(i), x = 0; x < A.length; x++) {
                      if (((O = A[x]), (d += O.length), x !== A.length - 1))
                        d += i.length;
                      else if (p) return R();
                      if (!r || O.substring(0, g) !== r) {
                        if (v) {
                          if (((_ = []), q(O.split(n)), I(), u)) return R();
                        } else q(O.split(n));
                        if (s && s <= x) return (_ = _.slice(0, s)), R(!0);
                      }
                    }
                    return R();
                  }
                  for (
                    var z = t.indexOf(n, d),
                      C = t.indexOf(i, d),
                      k = new RegExp(f(c) + f(e), "g"),
                      S = t.indexOf(e, d);
                    ;

                  )
                    if (t[d] !== e)
                      if (r && 0 === O.length && t.substring(d, d + g) === r) {
                        if (-1 === C) return R();
                        (d = C + m),
                          (C = t.indexOf(i, d)),
                          (z = t.indexOf(n, d));
                      } else {
                        if (-1 !== z && (z < C || -1 === C)) {
                          if (!(z < S)) {
                            O.push(t.substring(d, z)),
                              (d = z + b),
                              (z = t.indexOf(n, d));
                            continue;
                          }
                          var T = W(z, S, C);
                          if (T && void 0 !== T.nextDelim) {
                            (z = T.nextDelim),
                              (S = T.quoteSearch),
                              O.push(t.substring(d, z)),
                              (d = z + b),
                              (z = t.indexOf(n, d));
                            continue;
                          }
                        }
                        if (-1 === C) break;
                        if (
                          (O.push(t.substring(d, C)), P(C + m), v && (I(), u))
                        )
                          return R();
                        if (s && _.length >= s) return R(!0);
                      }
                    else
                      for (S = d, d++; ; ) {
                        if (-1 === (S = t.indexOf(e, S + 1)))
                          return (
                            p ||
                              y.push({
                                type: "Quotes",
                                code: "MissingQuotes",
                                message: "Quoted field unterminated",
                                row: _.length,
                                index: d,
                              }),
                            j()
                          );
                        if (S === h - 1)
                          return j(t.substring(d, S).replace(k, e));
                        if (e !== c || t[S + 1] !== c) {
                          if (e === c || 0 === S || t[S - 1] !== c) {
                            -1 !== z && z < S + 1 && (z = t.indexOf(n, S + 1)),
                              -1 !== C &&
                                C < S + 1 &&
                                (C = t.indexOf(i, S + 1));
                            var D = E(-1 === C ? z : Math.min(z, C));
                            if (t[S + 1 + D] === n) {
                              O.push(t.substring(d, S).replace(k, e)),
                                t[(d = S + 1 + D + b)] !== e &&
                                  (S = t.indexOf(e, d)),
                                (z = t.indexOf(n, d)),
                                (C = t.indexOf(i, d));
                              break;
                            }
                            var L = E(C);
                            if (t.substring(S + 1 + L, S + 1 + L + m) === i) {
                              if (
                                (O.push(t.substring(d, S).replace(k, e)),
                                P(S + 1 + L + m),
                                (z = t.indexOf(n, d)),
                                (S = t.indexOf(e, d)),
                                v && (I(), u))
                              )
                                return R();
                              if (s && _.length >= s) return R(!0);
                              break;
                            }
                            y.push({
                              type: "Quotes",
                              code: "InvalidQuotes",
                              message:
                                "Trailing quote on quoted field is malformed",
                              row: _.length,
                              index: d,
                            }),
                              S++;
                          }
                        } else S++;
                      }
                  return j();
                  function q(t) {
                    _.push(t), (w = d);
                  }
                  function E(e) {
                    var n = 0;
                    if (-1 !== e) {
                      var i = t.substring(S + 1, e);
                      i && "" === i.trim() && (n = i.length);
                    }
                    return n;
                  }
                  function j(e) {
                    return (
                      p ||
                        (void 0 === e && (e = t.substring(d)),
                        O.push(e),
                        (d = h),
                        q(O),
                        v && I()),
                      R()
                    );
                  }
                  function P(e) {
                    (d = e), q(O), (O = []), (C = t.indexOf(i, d));
                  }
                  function R(t) {
                    return {
                      data: _,
                      errors: y,
                      meta: {
                        delimiter: n,
                        linebreak: i,
                        aborted: u,
                        truncated: !!t,
                        cursor: w + (a || 0),
                      },
                    };
                  }
                  function I() {
                    o(R()), (_ = []), (y = []);
                  }
                  function W(i, r, o) {
                    var a = { nextDelim: void 0, quoteSearch: void 0 },
                      s = t.indexOf(e, r + 1);
                    if (r < i && i < s && (s < o || -1 === o)) {
                      var l = t.indexOf(n, s);
                      if (-1 === l) return a;
                      s < l && (s = t.indexOf(e, s + 1)), (a = W(l, s, o));
                    } else a = { nextDelim: i, quoteSearch: r };
                    return a;
                  }
                }),
                  (this.abort = function () {
                    u = !0;
                  }),
                  (this.getCharIndex = function () {
                    return d;
                  });
              }
              function m(t) {
                var e = t.data,
                  n = r[e.workerId],
                  i = !1;
                if (e.error) n.userError(e.error, e.file);
                else if (e.results && e.results.data) {
                  var o = {
                    abort: function () {
                      (i = !0),
                        g(e.workerId, {
                          data: [],
                          errors: [],
                          meta: { aborted: !0 },
                        });
                    },
                    pause: v,
                    resume: v,
                  };
                  if (M(n.userStep)) {
                    for (
                      var a = 0;
                      a < e.results.data.length &&
                      (n.userStep(
                        {
                          data: e.results.data[a],
                          errors: e.results.errors,
                          meta: e.results.meta,
                        },
                        o
                      ),
                      !i);
                      a++
                    );
                    delete e.results;
                  } else
                    M(n.userChunk) &&
                      (n.userChunk(e.results, o, e.file), delete e.results);
                }
                e.finished && !i && g(e.workerId, e.results);
              }
              function g(t, e) {
                var n = r[t];
                M(n.userComplete) && n.userComplete(e),
                  n.terminate(),
                  delete r[t];
              }
              function v() {
                throw new Error("Not implemented.");
              }
              function _(t) {
                if ("object" != typeof t || null === t) return t;
                var e = Array.isArray(t) ? [] : {};
                for (var n in t) e[n] = _(t[n]);
                return e;
              }
              function y(t, e) {
                return function () {
                  t.apply(e, arguments);
                };
              }
              function M(t) {
                return "function" == typeof t;
              }
              return (
                i &&
                  (e.onmessage = function (t) {
                    var n = t.data;
                    if (
                      (void 0 === a.WORKER_ID &&
                        n &&
                        (a.WORKER_ID = n.workerId),
                      "string" == typeof n.input)
                    )
                      e.postMessage({
                        workerId: a.WORKER_ID,
                        results: a.parse(n.input, n.config),
                        finished: !0,
                      });
                    else if (
                      (e.File && n.input instanceof File) ||
                      n.input instanceof Object
                    ) {
                      var i = a.parse(n.input, n.config);
                      i &&
                        e.postMessage({
                          workerId: a.WORKER_ID,
                          results: i,
                          finished: !0,
                        });
                    }
                  }),
                ((c.prototype = Object.create(l.prototype)).constructor = c),
                ((d.prototype = Object.create(l.prototype)).constructor = d),
                ((u.prototype = Object.create(u.prototype)).constructor = u),
                ((p.prototype = Object.create(l.prototype)).constructor = p),
                a
              );
            })
              ? i.apply(e, [])
              : i) || (t.exports = r);
      },
      "44bc": function (t, e, n) {},
      "62e4": function (t, e) {
        t.exports = function (t) {
          return (
            t.webpackPolyfill ||
              ((t.deprecate = function () {}),
              (t.paths = []),
              t.children || (t.children = []),
              Object.defineProperty(t, "loaded", {
                enumerable: !0,
                get: function () {
                  return t.l;
                },
              }),
              Object.defineProperty(t, "id", {
                enumerable: !0,
                get: function () {
                  return t.i;
                },
              }),
              (t.webpackPolyfill = 1)),
            t
          );
        };
      },
      8875: function (t, e, n) {
        var i, r;
        "undefined" != typeof self && self,
          void 0 ===
            (r =
              "function" ==
              typeof (i = function () {
                return function t() {
                  var e = Object.getOwnPropertyDescriptor(
                    document,
                    "currentScript"
                  );
                  if (
                    !e &&
                    "currentScript" in document &&
                    document.currentScript
                  )
                    return document.currentScript;
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
      "88bc": function (t, e, n) {
        (function (e) {
          var n = "object" == typeof e && e && e.Object === Object && e,
            i =
              "object" == typeof self && self && self.Object === Object && self,
            r = n || i || Function("return this")();
          function o(t, e, n) {
            switch (n.length) {
              case 0:
                return t.call(e);
              case 1:
                return t.call(e, n[0]);
              case 2:
                return t.call(e, n[0], n[1]);
              case 3:
                return t.call(e, n[0], n[1], n[2]);
            }
            return t.apply(e, n);
          }
          function a(t, e) {
            for (var n = -1, i = e.length, r = t.length; ++n < i; )
              t[r + n] = e[n];
            return t;
          }
          var s = Object.prototype,
            l = s.hasOwnProperty,
            c = s.toString,
            d = r.Symbol,
            u = s.propertyIsEnumerable,
            p = d ? d.isConcatSpreadable : void 0,
            h = Math.max;
          function f(t) {
            return (
              m(t) ||
              (function (t) {
                return (
                  (function (t) {
                    return (
                      g(t) &&
                      (function (t) {
                        return (
                          null != t &&
                          (function (t) {
                            return (
                              "number" == typeof t &&
                              t > -1 &&
                              t % 1 == 0 &&
                              t <= 9007199254740991
                            );
                          })(t.length) &&
                          !(function (t) {
                            var e = (function (t) {
                              var e = typeof t;
                              return !!t && ("object" == e || "function" == e);
                            })(t)
                              ? c.call(t)
                              : "";
                            return (
                              "[object Function]" == e ||
                              "[object GeneratorFunction]" == e
                            );
                          })(t)
                        );
                      })(t)
                    );
                  })(t) &&
                  l.call(t, "callee") &&
                  (!u.call(t, "callee") || "[object Arguments]" == c.call(t))
                );
              })(t) ||
              !!(p && t && t[p])
            );
          }
          function b(t) {
            if (
              "string" == typeof t ||
              (function (t) {
                return (
                  "symbol" == typeof t ||
                  (g(t) && "[object Symbol]" == c.call(t))
                );
              })(t)
            )
              return t;
            var e = t + "";
            return "0" == e && 1 / t == -1 / 0 ? "-0" : e;
          }
          var m = Array.isArray;
          function g(t) {
            return !!t && "object" == typeof t;
          }
          var v,
            _,
            y =
              ((v = function (t, e) {
                return null == t
                  ? {}
                  : (function (t, e) {
                      return (function (t, e, n) {
                        for (var i = -1, r = e.length, o = {}; ++i < r; ) {
                          var a = e[i],
                            s = t[a];
                          n(s, a) && (o[a] = s);
                        }
                        return o;
                      })((t = Object(t)), e, function (e, n) {
                        return n in t;
                      });
                    })(
                      t,
                      (function (t, e) {
                        for (
                          var n = -1, i = t ? t.length : 0, r = Array(i);
                          ++n < i;

                        )
                          r[n] = e(t[n], n, t);
                        return r;
                      })(
                        (function t(e, n, i, r, o) {
                          var s = -1,
                            l = e.length;
                          for (i || (i = f), o || (o = []); ++s < l; ) {
                            var c = e[s];
                            n > 0 && i(c)
                              ? n > 1
                                ? t(c, n - 1, i, r, o)
                                : a(o, c)
                              : r || (o[o.length] = c);
                          }
                          return o;
                        })(e, 1),
                        b
                      )
                    );
              }),
              (_ = h(void 0 === _ ? v.length - 1 : _, 0)),
              function () {
                for (
                  var t = arguments,
                    e = -1,
                    n = h(t.length - _, 0),
                    i = Array(n);
                  ++e < n;

                )
                  i[e] = t[_ + e];
                e = -1;
                for (var r = Array(_ + 1); ++e < _; ) r[e] = t[e];
                return (r[_] = i), o(v, this, r);
              });
          t.exports = y;
        }).call(this, n("c8ba"));
      },
      ab17: function (t, e, n) {
        (function (t, n) {
          var i = "[object Arguments]",
            r = "[object Map]",
            o = "[object Object]",
            a = "[object Set]",
            s = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
            l = /^\w*$/,
            c = /^\./,
            d =
              /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
            u = /\\(\\)?/g,
            p = /^\[object .+?Constructor\]$/,
            h = /^(?:0|[1-9]\d*)$/,
            f = {};
          (f["[object Float32Array]"] =
            f["[object Float64Array]"] =
            f["[object Int8Array]"] =
            f["[object Int16Array]"] =
            f["[object Int32Array]"] =
            f["[object Uint8Array]"] =
            f["[object Uint8ClampedArray]"] =
            f["[object Uint16Array]"] =
            f["[object Uint32Array]"] =
              !0),
            (f[i] =
              f["[object Array]"] =
              f["[object ArrayBuffer]"] =
              f["[object Boolean]"] =
              f["[object DataView]"] =
              f["[object Date]"] =
              f["[object Error]"] =
              f["[object Function]"] =
              f[r] =
              f["[object Number]"] =
              f[o] =
              f["[object RegExp]"] =
              f[a] =
              f["[object String]"] =
              f["[object WeakMap]"] =
                !1);
          var b = "object" == typeof t && t && t.Object === Object && t,
            m =
              "object" == typeof self && self && self.Object === Object && self,
            g = b || m || Function("return this")(),
            v = e && !e.nodeType && e,
            _ = v && "object" == typeof n && n && !n.nodeType && n,
            y = _ && _.exports === v && b.process,
            M = (function () {
              try {
                return y && y.binding("util");
              } catch (t) {}
            })(),
            O = M && M.isTypedArray;
          function w(t, e) {
            for (var n = -1, i = e.length, r = t.length; ++n < i; )
              t[r + n] = e[n];
            return t;
          }
          function A(t, e) {
            for (var n = -1, i = t ? t.length : 0; ++n < i; )
              if (e(t[n], n, t)) return !0;
            return !1;
          }
          function x(t) {
            var e = !1;
            if (null != t && "function" != typeof t.toString)
              try {
                e = !!(t + "");
              } catch (t) {}
            return e;
          }
          function z(t) {
            var e = -1,
              n = Array(t.size);
            return (
              t.forEach(function (t, i) {
                n[++e] = [i, t];
              }),
              n
            );
          }
          function C(t, e) {
            return function (n) {
              return t(e(n));
            };
          }
          function k(t) {
            var e = -1,
              n = Array(t.size);
            return (
              t.forEach(function (t) {
                n[++e] = t;
              }),
              n
            );
          }
          var S,
            T = Array.prototype,
            D = Function.prototype,
            L = Object.prototype,
            q = g["__core-js_shared__"],
            E = (S = /[^.]+$/.exec((q && q.keys && q.keys.IE_PROTO) || ""))
              ? "Symbol(src)_1." + S
              : "",
            j = D.toString,
            P = L.hasOwnProperty,
            R = L.toString,
            I = RegExp(
              "^" +
                j
                  .call(P)
                  .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
                  .replace(
                    /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                    "$1.*?"
                  ) +
                "$"
            ),
            W = g.Symbol,
            N = g.Uint8Array,
            B = C(Object.getPrototypeOf, Object),
            F = L.propertyIsEnumerable,
            $ = T.splice,
            H = Object.getOwnPropertySymbols,
            Y = C(Object.keys, Object),
            U = _t(g, "DataView"),
            X = _t(g, "Map"),
            V = _t(g, "Promise"),
            G = _t(g, "Set"),
            K = _t(g, "WeakMap"),
            Z = _t(Object, "create"),
            J = Tt(U),
            Q = Tt(X),
            tt = Tt(V),
            et = Tt(G),
            nt = Tt(K),
            it = W ? W.prototype : void 0,
            rt = it ? it.valueOf : void 0,
            ot = it ? it.toString : void 0;
          function at(t) {
            var e = -1,
              n = t ? t.length : 0;
            for (this.clear(); ++e < n; ) {
              var i = t[e];
              this.set(i[0], i[1]);
            }
          }
          function st(t) {
            var e = -1,
              n = t ? t.length : 0;
            for (this.clear(); ++e < n; ) {
              var i = t[e];
              this.set(i[0], i[1]);
            }
          }
          function lt(t) {
            var e = -1,
              n = t ? t.length : 0;
            for (this.clear(); ++e < n; ) {
              var i = t[e];
              this.set(i[0], i[1]);
            }
          }
          function ct(t) {
            var e = -1,
              n = t ? t.length : 0;
            for (this.__data__ = new lt(); ++e < n; ) this.add(t[e]);
          }
          function dt(t) {
            this.__data__ = new st(t);
          }
          function ut(t, e) {
            var n =
                Et(t) || qt(t)
                  ? (function (t, e) {
                      for (var n = -1, i = Array(t); ++n < t; ) i[n] = e(n);
                      return i;
                    })(t.length, String)
                  : [],
              i = n.length,
              r = !!i;
            for (var o in t)
              (!e && !P.call(t, o)) ||
                (r && ("length" == o || wt(o, i))) ||
                n.push(o);
            return n;
          }
          function pt(t, e) {
            for (var n = t.length; n--; ) if (Lt(t[n][0], e)) return n;
            return -1;
          }
          function ht(t, e) {
            for (
              var n = 0, i = (e = At(e, t) ? [e] : mt(e)).length;
              null != t && n < i;

            )
              t = t[St(e[n++])];
            return n && n == i ? t : void 0;
          }
          function ft(t, e) {
            return null != t && e in Object(t);
          }
          function bt(t, e, n, s, l) {
            return (
              t === e ||
              (null == t || null == e || (!It(t) && !Wt(e))
                ? t != t && e != e
                : (function (t, e, n, s, l, c) {
                    var d = Et(t),
                      u = Et(e),
                      p = "[object Array]",
                      h = "[object Array]";
                    d || (p = (p = Ot(t)) == i ? o : p),
                      u || (h = (h = Ot(e)) == i ? o : h);
                    var f = p == o && !x(t),
                      b = h == o && !x(e),
                      m = p == h;
                    if (m && !f)
                      return (
                        c || (c = new dt()),
                        d || Ft(t)
                          ? gt(t, e, n, s, l, c)
                          : (function (t, e, n, i, o, s, l) {
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
                                    !i(new N(t), new N(e))
                                  );
                                case "[object Boolean]":
                                case "[object Date]":
                                case "[object Number]":
                                  return Lt(+t, +e);
                                case "[object Error]":
                                  return (
                                    t.name == e.name && t.message == e.message
                                  );
                                case "[object RegExp]":
                                case "[object String]":
                                  return t == e + "";
                                case r:
                                  var c = z;
                                case a:
                                  var d = 2 & s;
                                  if ((c || (c = k), t.size != e.size && !d))
                                    return !1;
                                  var u = l.get(t);
                                  if (u) return u == e;
                                  (s |= 1), l.set(t, e);
                                  var p = gt(c(t), c(e), i, o, s, l);
                                  return l.delete(t), p;
                                case "[object Symbol]":
                                  if (rt) return rt.call(t) == rt.call(e);
                              }
                              return !1;
                            })(t, e, p, n, s, l, c)
                      );
                    if (!(2 & l)) {
                      var g = f && P.call(t, "__wrapped__"),
                        v = b && P.call(e, "__wrapped__");
                      if (g || v) {
                        var _ = g ? t.value() : t,
                          y = v ? e.value() : e;
                        return c || (c = new dt()), n(_, y, s, l, c);
                      }
                    }
                    return (
                      !!m &&
                      (c || (c = new dt()),
                      (function (t, e, n, i, r, o) {
                        var a = 2 & r,
                          s = $t(t),
                          l = s.length;
                        if (l != $t(e).length && !a) return !1;
                        for (var c = l; c--; ) {
                          var d = s[c];
                          if (!(a ? d in e : P.call(e, d))) return !1;
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
                            !(void 0 === m ? f === b || n(f, b, i, r, o) : m)
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
                      })(t, e, n, s, l, c))
                    );
                  })(t, e, bt, n, s, l))
            );
          }
          function mt(t) {
            return Et(t) ? t : kt(t);
          }
          function gt(t, e, n, i, r, o) {
            var a = 2 & r,
              s = t.length,
              l = e.length;
            if (s != l && !(a && l > s)) return !1;
            var c = o.get(t);
            if (c && o.get(e)) return c == e;
            var d = -1,
              u = !0,
              p = 1 & r ? new ct() : void 0;
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
                  !A(e, function (t, e) {
                    if (!p.has(e) && (h === t || n(h, t, i, r, o)))
                      return p.add(e);
                  })
                ) {
                  u = !1;
                  break;
                }
              } else if (h !== f && !n(h, f, i, r, o)) {
                u = !1;
                break;
              }
            }
            return o.delete(t), o.delete(e), u;
          }
          function vt(t, e) {
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
          function _t(t, e) {
            var n = (function (t, e) {
              return null == t ? void 0 : t[e];
            })(t, e);
            return (function (t) {
              return (
                !(!It(t) || ((e = t), E && E in e)) &&
                (Pt(t) || x(t) ? I : p).test(Tt(t))
              );
              var e;
            })(n)
              ? n
              : void 0;
          }
          (at.prototype.clear = function () {
            this.__data__ = Z ? Z(null) : {};
          }),
            (at.prototype.delete = function (t) {
              return this.has(t) && delete this.__data__[t];
            }),
            (at.prototype.get = function (t) {
              var e = this.__data__;
              if (Z) {
                var n = e[t];
                return "__lodash_hash_undefined__" === n ? void 0 : n;
              }
              return P.call(e, t) ? e[t] : void 0;
            }),
            (at.prototype.has = function (t) {
              var e = this.__data__;
              return Z ? void 0 !== e[t] : P.call(e, t);
            }),
            (at.prototype.set = function (t, e) {
              return (
                (this.__data__[t] =
                  Z && void 0 === e ? "__lodash_hash_undefined__" : e),
                this
              );
            }),
            (st.prototype.clear = function () {
              this.__data__ = [];
            }),
            (st.prototype.delete = function (t) {
              var e = this.__data__,
                n = pt(e, t);
              return !(
                n < 0 || (n == e.length - 1 ? e.pop() : $.call(e, n, 1), 0)
              );
            }),
            (st.prototype.get = function (t) {
              var e = this.__data__,
                n = pt(e, t);
              return n < 0 ? void 0 : e[n][1];
            }),
            (st.prototype.has = function (t) {
              return pt(this.__data__, t) > -1;
            }),
            (st.prototype.set = function (t, e) {
              var n = this.__data__,
                i = pt(n, t);
              return i < 0 ? n.push([t, e]) : (n[i][1] = e), this;
            }),
            (lt.prototype.clear = function () {
              this.__data__ = {
                hash: new at(),
                map: new (X || st)(),
                string: new at(),
              };
            }),
            (lt.prototype.delete = function (t) {
              return vt(this, t).delete(t);
            }),
            (lt.prototype.get = function (t) {
              return vt(this, t).get(t);
            }),
            (lt.prototype.has = function (t) {
              return vt(this, t).has(t);
            }),
            (lt.prototype.set = function (t, e) {
              return vt(this, t).set(t, e), this;
            }),
            (ct.prototype.add = ct.prototype.push =
              function (t) {
                return this.__data__.set(t, "__lodash_hash_undefined__"), this;
              }),
            (ct.prototype.has = function (t) {
              return this.__data__.has(t);
            }),
            (dt.prototype.clear = function () {
              this.__data__ = new st();
            }),
            (dt.prototype.delete = function (t) {
              return this.__data__.delete(t);
            }),
            (dt.prototype.get = function (t) {
              return this.__data__.get(t);
            }),
            (dt.prototype.has = function (t) {
              return this.__data__.has(t);
            }),
            (dt.prototype.set = function (t, e) {
              var n = this.__data__;
              if (n instanceof st) {
                var i = n.__data__;
                if (!X || i.length < 199) return i.push([t, e]), this;
                n = this.__data__ = new lt(i);
              }
              return n.set(t, e), this;
            });
          var yt = H ? C(H, Object) : Ut,
            Mt = H
              ? function (t) {
                  for (var e = []; t; ) w(e, yt(t)), (t = B(t));
                  return e;
                }
              : Ut,
            Ot = function (t) {
              return R.call(t);
            };
          function wt(t, e) {
            return (
              !!(e = null == e ? 9007199254740991 : e) &&
              ("number" == typeof t || h.test(t)) &&
              t > -1 &&
              t % 1 == 0 &&
              t < e
            );
          }
          function At(t, e) {
            if (Et(t)) return !1;
            var n = typeof t;
            return (
              !(
                "number" != n &&
                "symbol" != n &&
                "boolean" != n &&
                null != t &&
                !Nt(t)
              ) ||
              l.test(t) ||
              !s.test(t) ||
              (null != e && t in Object(e))
            );
          }
          function xt(t) {
            var e = t && t.constructor;
            return t === (("function" == typeof e && e.prototype) || L);
          }
          function zt(t) {
            return t == t && !It(t);
          }
          function Ct(t, e) {
            return function (n) {
              return (
                null != n && n[t] === e && (void 0 !== e || t in Object(n))
              );
            };
          }
          ((U && "[object DataView]" != Ot(new U(new ArrayBuffer(1)))) ||
            (X && Ot(new X()) != r) ||
            (V && "[object Promise]" != Ot(V.resolve())) ||
            (G && Ot(new G()) != a) ||
            (K && "[object WeakMap]" != Ot(new K()))) &&
            (Ot = function (t) {
              var e = R.call(t),
                n = e == o ? t.constructor : void 0,
                i = n ? Tt(n) : void 0;
              if (i)
                switch (i) {
                  case J:
                    return "[object DataView]";
                  case Q:
                    return r;
                  case tt:
                    return "[object Promise]";
                  case et:
                    return a;
                  case nt:
                    return "[object WeakMap]";
                }
              return e;
            });
          var kt = Dt(function (t) {
            var e;
            t =
              null == (e = t)
                ? ""
                : (function (t) {
                    if ("string" == typeof t) return t;
                    if (Nt(t)) return ot ? ot.call(t) : "";
                    var e = t + "";
                    return "0" == e && 1 / t == -1 / 0 ? "-0" : e;
                  })(e);
            var n = [];
            return (
              c.test(t) && n.push(""),
              t.replace(d, function (t, e, i, r) {
                n.push(i ? r.replace(u, "$1") : e || t);
              }),
              n
            );
          });
          function St(t) {
            if ("string" == typeof t || Nt(t)) return t;
            var e = t + "";
            return "0" == e && 1 / t == -1 / 0 ? "-0" : e;
          }
          function Tt(t) {
            if (null != t) {
              try {
                return j.call(t);
              } catch (t) {}
              try {
                return t + "";
              } catch (t) {}
            }
            return "";
          }
          function Dt(t, e) {
            if ("function" != typeof t || (e && "function" != typeof e))
              throw new TypeError("Expected a function");
            var n = function () {
              var i = arguments,
                r = e ? e.apply(this, i) : i[0],
                o = n.cache;
              if (o.has(r)) return o.get(r);
              var a = t.apply(this, i);
              return (n.cache = o.set(r, a)), a;
            };
            return (n.cache = new (Dt.Cache || lt)()), n;
          }
          function Lt(t, e) {
            return t === e || (t != t && e != e);
          }
          function qt(t) {
            return (
              (function (t) {
                return Wt(t) && jt(t);
              })(t) &&
              P.call(t, "callee") &&
              (!F.call(t, "callee") || R.call(t) == i)
            );
          }
          Dt.Cache = lt;
          var Et = Array.isArray;
          function jt(t) {
            return null != t && Rt(t.length) && !Pt(t);
          }
          function Pt(t) {
            var e = It(t) ? R.call(t) : "";
            return (
              "[object Function]" == e || "[object GeneratorFunction]" == e
            );
          }
          function Rt(t) {
            return (
              "number" == typeof t &&
              t > -1 &&
              t % 1 == 0 &&
              t <= 9007199254740991
            );
          }
          function It(t) {
            var e = typeof t;
            return !!t && ("object" == e || "function" == e);
          }
          function Wt(t) {
            return !!t && "object" == typeof t;
          }
          function Nt(t) {
            return (
              "symbol" == typeof t || (Wt(t) && "[object Symbol]" == R.call(t))
            );
          }
          var Bt,
            Ft = O
              ? ((Bt = O),
                function (t) {
                  return Bt(t);
                })
              : function (t) {
                  return Wt(t) && Rt(t.length) && !!f[R.call(t)];
                };
          function $t(t) {
            return jt(t)
              ? ut(t)
              : (function (t) {
                  if (!xt(t)) return Y(t);
                  var e = [];
                  for (var n in Object(t))
                    P.call(t, n) && "constructor" != n && e.push(n);
                  return e;
                })(t);
          }
          function Ht(t) {
            return jt(t)
              ? ut(t, !0)
              : (function (t) {
                  if (!It(t))
                    return (function (t) {
                      var e = [];
                      if (null != t) for (var n in Object(t)) e.push(n);
                      return e;
                    })(t);
                  var e = xt(t),
                    n = [];
                  for (var i in t)
                    ("constructor" != i || (!e && P.call(t, i))) && n.push(i);
                  return n;
                })(t);
          }
          function Yt(t) {
            return t;
          }
          function Ut() {
            return [];
          }
          n.exports = function (t, e) {
            return null == t
              ? {}
              : (function (t, e, n) {
                  for (var i = -1, r = e.length, o = {}; ++i < r; ) {
                    var a = e[i],
                      s = t[a];
                    n(s, a) && (o[a] = s);
                  }
                  return o;
                })(
                  t,
                  (function (t) {
                    return (function (t, e, n) {
                      var i = e(t);
                      return Et(t) ? i : w(i, n(t));
                    })(t, Ht, Mt);
                  })(t),
                  (function (t) {
                    return "function" == typeof t
                      ? t
                      : null == t
                      ? Yt
                      : "object" == typeof t
                      ? Et(t)
                        ? (function (t, e) {
                            return At(t) && zt(e)
                              ? Ct(St(t), e)
                              : function (n) {
                                  var i = (function (t, e, n) {
                                    var i = null == t ? void 0 : ht(t, e);
                                    return void 0 === i ? void 0 : i;
                                  })(n, t);
                                  return void 0 === i && i === e
                                    ? (function (t, e) {
                                        return (
                                          null != t &&
                                          (function (t, e, n) {
                                            for (
                                              var i,
                                                r = -1,
                                                o = (e = At(e, t) ? [e] : mt(e))
                                                  .length;
                                              ++r < o;

                                            ) {
                                              var a = St(e[r]);
                                              if (!(i = null != t && n(t, a)))
                                                break;
                                              t = t[a];
                                            }
                                            return (
                                              i ||
                                              (!!(o = t ? t.length : 0) &&
                                                Rt(o) &&
                                                wt(a, o) &&
                                                (Et(t) || qt(t)))
                                            );
                                          })(t, e, ft)
                                        );
                                      })(n, t)
                                    : bt(e, i, void 0, 3);
                                };
                          })(t[0], t[1])
                        : (function (t) {
                            var e = (function (t) {
                              for (var e = $t(t), n = e.length; n--; ) {
                                var i = e[n],
                                  r = t[i];
                                e[n] = [i, r, zt(r)];
                              }
                              return e;
                            })(t);
                            return 1 == e.length && e[0][2]
                              ? Ct(e[0][0], e[0][1])
                              : function (n) {
                                  return (
                                    n === t ||
                                    (function (t, e, n, i) {
                                      var r = n.length,
                                        o = r;
                                      if (null == t) return !o;
                                      for (t = Object(t); r--; ) {
                                        var a = n[r];
                                        if (
                                          a[2] ? a[1] !== t[a[0]] : !(a[0] in t)
                                        )
                                          return !1;
                                      }
                                      for (; ++r < o; ) {
                                        var s = (a = n[r])[0],
                                          l = t[s],
                                          c = a[1];
                                        if (a[2]) {
                                          if (void 0 === l && !(s in t))
                                            return !1;
                                        } else {
                                          var d = new dt();
                                          if (i) var u = i(l, c, s, t, e, d);
                                          if (
                                            !(void 0 === u
                                              ? bt(c, l, i, 3, d)
                                              : u)
                                          )
                                            return !1;
                                        }
                                      }
                                      return !0;
                                    })(n, t, e)
                                  );
                                };
                          })(t)
                      : At((e = t))
                      ? ((n = St(e)),
                        function (t) {
                          return null == t ? void 0 : t[n];
                        })
                      : (function (t) {
                          return function (e) {
                            return ht(e, t);
                          };
                        })(e);
                    var e, n;
                  })(e)
                );
          };
        }).call(this, n("c8ba"), n("62e4")(t));
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
      c9b4: function (t, e, n) {
        "use strict";
        n("44bc");
      },
      fb15: function (t, e, n) {
        "use strict";
        if (
          (n.r(e),
          n.d(e, "isType", function () {
            return b;
          }),
          "undefined" != typeof window)
        ) {
          var i = window.document.currentScript,
            r = n("8875");
          (i = r()),
            "currentScript" in document ||
              Object.defineProperty(document, "currentScript", { get: r });
          var o = i && i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/);
          o && (n.p = o[1]);
        }
        var a = n("27b5"),
          s = n.n(a),
          l = n("ab17"),
          c = n.n(l),
          d = n("88bc"),
          u = n.n(d),
          p = n("21a6"),
          h = n("369b");
        function f(t) {
          return (f =
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
        var b = function (t, e) {
            return f(t) === e;
          },
          m = {
            name: "JsonCSV",
            props: {
              data: { type: Array, required: !0 },
              fields: { required: !1 },
              name: { type: String, default: "data.csv" },
              delimiter: { type: String, default: ",", required: !1 },
              separatorExcel: { type: Boolean, default: !1 },
              encoding: { type: String, default: "utf-8" },
              advancedOptions: { type: Object, default: function () {} },
              labels: { required: !1 },
              testing: { required: !1, default: !1 },
            },
            computed: {
              idName: function () {
                return "export_" + new Date().getTime();
              },
              exportableData: function () {
                var t = this.cleaningData();
                return t.length ? t : null;
              },
            },
            methods: {
              labelsFunctionGenerator: function () {
                var t = this;
                if (
                  !b(this.labels, "undefined") &&
                  !b(this.labels, "function") &&
                  !b(this.labels, "object")
                )
                  throw new Error(
                    "Labels needs to be a function(value,key) or object."
                  );
                return b(this.labels, "function")
                  ? function (e) {
                      return s()(e, t.labels);
                    }
                  : b(this.labels, "object")
                  ? function (e) {
                      return s()(e, function (e, n) {
                        return t.labels[n] || n;
                      });
                    }
                  : function (t) {
                      return t;
                    };
              },
              fieldsFunctionGenerator: function () {
                var t = this;
                if (
                  !(
                    b(this.fields, "undefined") ||
                    b(this.fields, "function") ||
                    b(this.fields, "object") ||
                    Array.isArray(this.fields)
                  )
                )
                  throw new Error(
                    "Fields needs to be a function(value,key) or array."
                  );
                return b(this.fields, "function") ||
                  (b(this.fields, "object") && !Array.isArray(this.fields))
                  ? function (e) {
                      return c()(e, t.fields);
                    }
                  : Array.isArray(this.fields)
                  ? function (e) {
                      return u()(e, t.fields);
                    }
                  : function (t) {
                      return t;
                    };
              },
              cleaningData: function () {
                if (b(this.fields, "undefined") && b(this.labels, "undefined"))
                  return this.data;
                var t = this.labelsFunctionGenerator(),
                  e = this.fieldsFunctionGenerator();
                return this.data.map(function (n) {
                  return t(e(n));
                });
              },
              generate: function () {
                this.$emit("export-started");
                var t = this.exportableData;
                if (t) {
                  var e = Object(h.unparse)(
                    t,
                    Object.assign(
                      { delimiter: this.delimiter, encoding: this.encoding },
                      this.advancedOptions
                    )
                  );
                  if (
                    (this.separatorExcel &&
                      (e = "SEP=" + this.delimiter + "\r\n" + e),
                    "utf-8" === this.encoding && (e = "\ufeff" + e),
                    this.$emit("export-finished"),
                    !this.testing)
                  ) {
                    var n = new Blob([e], {
                      type: "application/csvcharset=" + this.encoding,
                    });
                    Object(p.saveAs)(n, this.name);
                  }
                }
              },
            },
          };
        n("c9b4");
        var g = (function (t, e, n, i, r, o, a, s) {
          var l,
            c = "function" == typeof t ? t.options : t;
          if (
            (e &&
              ((c.render = e), (c.staticRenderFns = []), (c._compiled = !0)),
            (c._scopeId = "data-v-38979de7"),
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
        })(m, function () {
          var t = this.$createElement;
          return (
            this._self._c || t
          )("div", { attrs: { id: this.idName }, on: { click: this.generate } }, [this._t("default", [this._v("Download " + this._s(this.name))])], 2);
        }).exports;
        e.default = g;
      },
    }).default;
  },
  function (t, e, n) {
    "undefined" != typeof self && self,
      (t.exports = (function (t) {
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
            n.o(t, e) ||
              Object.defineProperty(t, e, { enumerable: !0, get: i });
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
        "00ee": function (t, e, n) {
          var i = {};
          (i[n("b622")("toStringTag")] = "z"),
            (t.exports = "[object z]" === String(i));
        },
        "0366": function (t, e, n) {
          var i = n("1c0b");
          t.exports = function (t, e, n) {
            if ((i(t), void 0 === e)) return t;
            switch (n) {
              case 0:
                return function () {
                  return t.call(e);
                };
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
        "057f": function (t, e, n) {
          var i = n("fc6a"),
            r = n("241c").f,
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
        "06cf": function (t, e, n) {
          var i = n("83ab"),
            r = n("d1e7"),
            o = n("5c6c"),
            a = n("fc6a"),
            s = n("c04e"),
            l = n("5135"),
            c = n("0cfb"),
            d = Object.getOwnPropertyDescriptor;
          e.f = i
            ? d
            : function (t, e) {
                if (((t = a(t)), (e = s(e, !0)), c))
                  try {
                    return d(t, e);
                  } catch (t) {}
                if (l(t, e)) return o(!r.f.call(t, e), t[e]);
              };
        },
        "0cb2": function (t, e, n) {
          var i = n("7b0b"),
            r = Math.floor,
            o = "".replace,
            a = /\$([$&'`]|\d\d?|<[^>]*>)/g,
            s = /\$([$&'`]|\d\d?)/g;
          t.exports = function (t, e, n, l, c, d) {
            var u = n + t.length,
              p = l.length,
              h = s;
            return (
              void 0 !== c && ((c = i(c)), (h = a)),
              o.call(d, h, function (i, o) {
                var a;
                switch (o.charAt(0)) {
                  case "$":
                    return "$";
                  case "&":
                    return t;
                  case "`":
                    return e.slice(0, n);
                  case "'":
                    return e.slice(u);
                  case "<":
                    a = c[o.slice(1, -1)];
                    break;
                  default:
                    var s = +o;
                    if (0 === s) return i;
                    if (s > p) {
                      var d = r(s / 10);
                      return 0 === d
                        ? i
                        : d <= p
                        ? void 0 === l[d - 1]
                          ? o.charAt(1)
                          : l[d - 1] + o.charAt(1)
                        : i;
                    }
                    a = l[s - 1];
                }
                return void 0 === a ? "" : a;
              })
            );
          };
        },
        "0cfb": function (t, e, n) {
          var i = n("83ab"),
            r = n("d039"),
            o = n("cc12");
          t.exports =
            !i &&
            !r(function () {
              return (
                7 !=
                Object.defineProperty(o("div"), "a", {
                  get: function () {
                    return 7;
                  },
                }).a
              );
            });
        },
        "14c3": function (t, e, n) {
          var i = n("c6b6"),
            r = n("9263");
          t.exports = function (t, e) {
            var n = t.exec;
            if ("function" == typeof n) {
              var o = n.call(t, e);
              if ("object" != typeof o)
                throw TypeError(
                  "RegExp exec method returned something other than an Object or null"
                );
              return o;
            }
            if ("RegExp" !== i(t))
              throw TypeError("RegExp#exec called on incompatible receiver");
            return r.call(t, e);
          };
        },
        "1be4": function (t, e, n) {
          var i = n("d066");
          t.exports = i("document", "documentElement");
        },
        "1c0b": function (t, e) {
          t.exports = function (t) {
            if ("function" != typeof t)
              throw TypeError(String(t) + " is not a function");
            return t;
          };
        },
        "1d80": function (t, e) {
          t.exports = function (t) {
            if (null == t) throw TypeError("Can't call method on " + t);
            return t;
          };
        },
        "1dde": function (t, e, n) {
          var i = n("d039"),
            r = n("b622"),
            o = n("2d00"),
            a = r("species");
          t.exports = function (t) {
            return (
              o >= 51 ||
              !i(function () {
                var e = [];
                return (
                  ((e.constructor = {})[a] = function () {
                    return { foo: 1 };
                  }),
                  1 !== e[t](Boolean).foo
                );
              })
            );
          };
        },
        "23cb": function (t, e, n) {
          var i = n("a691"),
            r = Math.max,
            o = Math.min;
          t.exports = function (t, e) {
            var n = i(t);
            return n < 0 ? r(n + e, 0) : o(n, e);
          };
        },
        "23e7": function (t, e, n) {
          var i = n("da84"),
            r = n("06cf").f,
            o = n("9112"),
            a = n("6eeb"),
            s = n("ce4e"),
            l = n("e893"),
            c = n("94ca");
          t.exports = function (t, e) {
            var n,
              d,
              u,
              p,
              h,
              f = t.target,
              b = t.global,
              m = t.stat;
            if ((n = b ? i : m ? i[f] || s(f, {}) : (i[f] || {}).prototype))
              for (d in e) {
                if (
                  ((p = e[d]),
                  (u = t.noTargetGet ? (h = r(n, d)) && h.value : n[d]),
                  !c(b ? d : f + (m ? "." : "#") + d, t.forced) && void 0 !== u)
                ) {
                  if (typeof p == typeof u) continue;
                  l(p, u);
                }
                (t.sham || (u && u.sham)) && o(p, "sham", !0), a(n, d, p, t);
              }
          };
        },
        "241c": function (t, e, n) {
          var i = n("ca84"),
            r = n("7839").concat("length", "prototype");
          e.f =
            Object.getOwnPropertyNames ||
            function (t) {
              return i(t, r);
            };
        },
        "25f0": function (t, e, n) {
          "use strict";
          var i = n("6eeb"),
            r = n("825a"),
            o = n("d039"),
            a = n("ad6d"),
            s = "toString",
            l = RegExp.prototype,
            c = l[s],
            d = o(function () {
              return "/a/b" != c.call({ source: "a", flags: "b" });
            }),
            u = c.name != s;
          (d || u) &&
            i(
              RegExp.prototype,
              s,
              function () {
                var t = r(this),
                  e = String(t.source),
                  n = t.flags;
                return (
                  "/" +
                  e +
                  "/" +
                  String(
                    void 0 === n && t instanceof RegExp && !("flags" in l)
                      ? a.call(t)
                      : n
                  )
                );
              },
              { unsafe: !0 }
            );
        },
        2626: function (t, e, n) {
          "use strict";
          var i = n("d066"),
            r = n("9bf2"),
            o = n("b622"),
            a = n("83ab"),
            s = o("species");
          t.exports = function (t) {
            var e = i(t),
              n = r.f;
            a &&
              e &&
              !e[s] &&
              n(e, s, {
                configurable: !0,
                get: function () {
                  return this;
                },
              });
          };
        },
        "2d00": function (t, e, n) {
          var i,
            r,
            o = n("da84"),
            a = n("342f"),
            s = o.process,
            l = s && s.versions,
            c = l && l.v8;
          c
            ? (r = (i = c.split("."))[0] + i[1])
            : a &&
              (!(i = a.match(/Edge\/(\d+)/)) || i[1] >= 74) &&
              (i = a.match(/Chrome\/(\d+)/)) &&
              (r = i[1]),
            (t.exports = r && +r);
        },
        "342f": function (t, e, n) {
          var i = n("d066");
          t.exports = i("navigator", "userAgent") || "";
        },
        "37e8": function (t, e, n) {
          var i = n("83ab"),
            r = n("9bf2"),
            o = n("825a"),
            a = n("df75");
          t.exports = i
            ? Object.defineProperties
            : function (t, e) {
                o(t);
                for (var n, i = a(e), s = i.length, l = 0; s > l; )
                  r.f(t, (n = i[l++]), e[n]);
                return t;
              };
        },
        "3bbe": function (t, e, n) {
          var i = n("861d");
          t.exports = function (t) {
            if (!i(t) && null !== t)
              throw TypeError("Can't set " + String(t) + " as a prototype");
            return t;
          };
        },
        "3ca3": function (t, e, n) {
          "use strict";
          var i = n("6547").charAt,
            r = n("69f3"),
            o = n("7dd0"),
            a = "String Iterator",
            s = r.set,
            l = r.getterFor(a);
          o(
            String,
            "String",
            function (t) {
              s(this, { type: a, string: String(t), index: 0 });
            },
            function () {
              var t,
                e = l(this),
                n = e.string,
                r = e.index;
              return r >= n.length
                ? { value: void 0, done: !0 }
                : ((t = i(n, r)),
                  (e.index += t.length),
                  { value: t, done: !1 });
            }
          );
        },
        "3f8c": function (t, e) {
          t.exports = {};
        },
        "428f": function (t, e, n) {
          var i = n("da84");
          t.exports = i;
        },
        "44ad": function (t, e, n) {
          var i = n("d039"),
            r = n("c6b6"),
            o = "".split;
          t.exports = i(function () {
            return !Object("z").propertyIsEnumerable(0);
          })
            ? function (t) {
                return "String" == r(t) ? o.call(t, "") : Object(t);
              }
            : Object;
        },
        "44d2": function (t, e, n) {
          var i = n("b622"),
            r = n("7c73"),
            o = n("9bf2"),
            a = i("unscopables"),
            s = Array.prototype;
          null == s[a] && o.f(s, a, { configurable: !0, value: r(null) }),
            (t.exports = function (t) {
              s[a][t] = !0;
            });
        },
        "44e7": function (t, e, n) {
          var i = n("861d"),
            r = n("c6b6"),
            o = n("b622")("match");
          t.exports = function (t) {
            var e;
            return i(t) && (void 0 !== (e = t[o]) ? !!e : "RegExp" == r(t));
          };
        },
        4930: function (t, e, n) {
          var i = n("d039");
          t.exports =
            !!Object.getOwnPropertySymbols &&
            !i(function () {
              return !String(Symbol());
            });
        },
        "4d63": function (t, e, n) {
          var i = n("83ab"),
            r = n("da84"),
            o = n("94ca"),
            a = n("7156"),
            s = n("9bf2").f,
            l = n("241c").f,
            c = n("44e7"),
            d = n("ad6d"),
            u = n("9f7f"),
            p = n("6eeb"),
            h = n("d039"),
            f = n("69f3").set,
            b = n("2626"),
            m = n("b622")("match"),
            g = r.RegExp,
            v = g.prototype,
            _ = /a/g,
            y = /a/g,
            M = new g(_) !== _,
            O = u.UNSUPPORTED_Y;
          if (
            i &&
            o(
              "RegExp",
              !M ||
                O ||
                h(function () {
                  return (
                    (y[m] = !1), g(_) != _ || g(y) == y || "/a/i" != g(_, "i")
                  );
                })
            )
          ) {
            for (
              var w = function (t, e) {
                  var n,
                    i = this instanceof w,
                    r = c(t),
                    o = void 0 === e;
                  if (!i && r && t.constructor === w && o) return t;
                  M
                    ? r && !o && (t = t.source)
                    : t instanceof w && (o && (e = d.call(t)), (t = t.source)),
                    O &&
                      (n = !!e && e.indexOf("y") > -1) &&
                      (e = e.replace(/y/g, ""));
                  var s = a(M ? new g(t, e) : g(t, e), i ? this : v, w);
                  return O && n && f(s, { sticky: n }), s;
                },
                A = function (t) {
                  (t in w) ||
                    s(w, t, {
                      configurable: !0,
                      get: function () {
                        return g[t];
                      },
                      set: function (e) {
                        g[t] = e;
                      },
                    });
                },
                x = l(g),
                z = 0;
              x.length > z;

            )
              A(x[z++]);
            (v.constructor = w), (w.prototype = v), p(r, "RegExp", w);
          }
          b("RegExp");
        },
        "4d64": function (t, e, n) {
          var i = n("fc6a"),
            r = n("50c4"),
            o = n("23cb"),
            a = function (t) {
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
          t.exports = { includes: a(!0), indexOf: a(!1) };
        },
        "50c4": function (t, e, n) {
          var i = n("a691"),
            r = Math.min;
          t.exports = function (t) {
            return t > 0 ? r(i(t), 9007199254740991) : 0;
          };
        },
        5135: function (t, e) {
          var n = {}.hasOwnProperty;
          t.exports = function (t, e) {
            return n.call(t, e);
          };
        },
        5319: function (t, e, n) {
          "use strict";
          var i = n("d784"),
            r = n("825a"),
            o = n("50c4"),
            a = n("a691"),
            s = n("1d80"),
            l = n("8aa5"),
            c = n("0cb2"),
            d = n("14c3"),
            u = Math.max,
            p = Math.min,
            h = function (t) {
              return void 0 === t ? t : String(t);
            };
          i("replace", 2, function (t, e, n, i) {
            var f = i.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,
              b = i.REPLACE_KEEPS_$0,
              m = f ? "$" : "$0";
            return [
              function (n, i) {
                var r = s(this),
                  o = null == n ? void 0 : n[t];
                return void 0 !== o ? o.call(n, r, i) : e.call(String(r), n, i);
              },
              function (t, i) {
                if (
                  (!f && b) ||
                  ("string" == typeof i && -1 === i.indexOf(m))
                ) {
                  var s = n(e, t, this, i);
                  if (s.done) return s.value;
                }
                var g = r(t),
                  v = String(this),
                  _ = "function" == typeof i;
                _ || (i = String(i));
                var y = g.global;
                if (y) {
                  var M = g.unicode;
                  g.lastIndex = 0;
                }
                for (var O = []; ; ) {
                  var w = d(g, v);
                  if (null === w) break;
                  if ((O.push(w), !y)) break;
                  "" === String(w[0]) &&
                    (g.lastIndex = l(v, o(g.lastIndex), M));
                }
                for (var A = "", x = 0, z = 0; z < O.length; z++) {
                  w = O[z];
                  for (
                    var C = String(w[0]),
                      k = u(p(a(w.index), v.length), 0),
                      S = [],
                      T = 1;
                    T < w.length;
                    T++
                  )
                    S.push(h(w[T]));
                  var D = w.groups;
                  if (_) {
                    var L = [C].concat(S, k, v);
                    void 0 !== D && L.push(D);
                    var q = String(i.apply(void 0, L));
                  } else q = c(C, v, k, S, D, i);
                  k >= x && ((A += v.slice(x, k) + q), (x = k + C.length));
                }
                return A + v.slice(x);
              },
            ];
          });
        },
        5692: function (t, e, n) {
          var i = n("c430"),
            r = n("c6cd");
          (t.exports = function (t, e) {
            return r[t] || (r[t] = void 0 !== e ? e : {});
          })("versions", []).push({
            version: "3.9.0",
            mode: i ? "pure" : "global",
            copyright: "© 2021 Denis Pushkarev (zloirock.ru)",
          });
        },
        "56ef": function (t, e, n) {
          var i = n("d066"),
            r = n("241c"),
            o = n("7418"),
            a = n("825a");
          t.exports =
            i("Reflect", "ownKeys") ||
            function (t) {
              var e = r.f(a(t)),
                n = o.f;
              return n ? e.concat(n(t)) : e;
            };
        },
        "5c6c": function (t, e) {
          t.exports = function (t, e) {
            return {
              enumerable: !(1 & t),
              configurable: !(2 & t),
              writable: !(4 & t),
              value: e,
            };
          };
        },
        6547: function (t, e, n) {
          var i = n("a691"),
            r = n("1d80"),
            o = function (t) {
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
          t.exports = { codeAt: o(!1), charAt: o(!0) };
        },
        "65f0": function (t, e, n) {
          var i = n("861d"),
            r = n("e8b5"),
            o = n("b622")("species");
          t.exports = function (t, e) {
            var n;
            return (
              r(t) &&
                ("function" != typeof (n = t.constructor) ||
                (n !== Array && !r(n.prototype))
                  ? i(n) && null === (n = n[o]) && (n = void 0)
                  : (n = void 0)),
              new (void 0 === n ? Array : n)(0 === e ? 0 : e)
            );
          };
        },
        "69f3": function (t, e, n) {
          var i,
            r,
            o,
            a = n("7f9a"),
            s = n("da84"),
            l = n("861d"),
            c = n("9112"),
            d = n("5135"),
            u = n("c6cd"),
            p = n("f772"),
            h = n("d012"),
            f = s.WeakMap;
          if (a) {
            var b = u.state || (u.state = new f()),
              m = b.get,
              g = b.has,
              v = b.set;
            (i = function (t, e) {
              return (e.facade = t), v.call(b, t, e), e;
            }),
              (r = function (t) {
                return m.call(b, t) || {};
              }),
              (o = function (t) {
                return g.call(b, t);
              });
          } else {
            var _ = p("state");
            (h[_] = !0),
              (i = function (t, e) {
                return (e.facade = t), c(t, _, e), e;
              }),
              (r = function (t) {
                return d(t, _) ? t[_] : {};
              }),
              (o = function (t) {
                return d(t, _);
              });
          }
          t.exports = {
            set: i,
            get: r,
            has: o,
            enforce: function (t) {
              return o(t) ? r(t) : i(t, {});
            },
            getterFor: function (t) {
              return function (e) {
                var n;
                if (!l(e) || (n = r(e)).type !== t)
                  throw TypeError("Incompatible receiver, " + t + " required");
                return n;
              };
            },
          };
        },
        "6eeb": function (t, e, n) {
          var i = n("da84"),
            r = n("9112"),
            o = n("5135"),
            a = n("ce4e"),
            s = n("8925"),
            l = n("69f3"),
            c = l.get,
            d = l.enforce,
            u = String(String).split("String");
          (t.exports = function (t, e, n, s) {
            var l,
              c = !!s && !!s.unsafe,
              p = !!s && !!s.enumerable,
              h = !!s && !!s.noTargetGet;
            "function" == typeof n &&
              ("string" != typeof e || o(n, "name") || r(n, "name", e),
              (l = d(n)).source ||
                (l.source = u.join("string" == typeof e ? e : ""))),
              t !== i
                ? (c ? !h && t[e] && (p = !0) : delete t[e],
                  p ? (t[e] = n) : r(t, e, n))
                : p
                ? (t[e] = n)
                : a(e, n);
          })(Function.prototype, "toString", function () {
            return ("function" == typeof this && c(this).source) || s(this);
          });
        },
        7156: function (t, e, n) {
          var i = n("861d"),
            r = n("d2bb");
          t.exports = function (t, e, n) {
            var o, a;
            return (
              r &&
                "function" == typeof (o = e.constructor) &&
                o !== n &&
                i((a = o.prototype)) &&
                a !== n.prototype &&
                r(t, a),
              t
            );
          };
        },
        7418: function (t, e) {
          e.f = Object.getOwnPropertySymbols;
        },
        "746f": function (t, e, n) {
          var i = n("428f"),
            r = n("5135"),
            o = n("e538"),
            a = n("9bf2").f;
          t.exports = function (t) {
            var e = i.Symbol || (i.Symbol = {});
            r(e, t) || a(e, t, { value: o.f(t) });
          };
        },
        7839: function (t, e) {
          t.exports = [
            "constructor",
            "hasOwnProperty",
            "isPrototypeOf",
            "propertyIsEnumerable",
            "toLocaleString",
            "toString",
            "valueOf",
          ];
        },
        "7b0b": function (t, e, n) {
          var i = n("1d80");
          t.exports = function (t) {
            return Object(i(t));
          };
        },
        "7c73": function (t, e, n) {
          var i,
            r = n("825a"),
            o = n("37e8"),
            a = n("7839"),
            s = n("d012"),
            l = n("1be4"),
            c = n("cc12"),
            d = n("f772"),
            u = "prototype",
            p = d("IE_PROTO"),
            h = function () {},
            f = function (t) {
              return "<script>" + t + "</script>";
            },
            b = function () {
              try {
                i = document.domain && new ActiveXObject("htmlfile");
              } catch (t) {}
              b = i
                ? (function (t) {
                    t.write(f("")), t.close();
                    var e = t.parentWindow.Object;
                    return (t = null), e;
                  })(i)
                : (function () {
                    var t,
                      e = c("iframe");
                    return (
                      (e.style.display = "none"),
                      l.appendChild(e),
                      (e.src = String("javascript:")),
                      (t = e.contentWindow.document).open(),
                      t.write(f("document.F=Object")),
                      t.close(),
                      t.F
                    );
                  })();
              for (var t = a.length; t--; ) delete b[u][a[t]];
              return b();
            };
          (s[p] = !0),
            (t.exports =
              Object.create ||
              function (t, e) {
                var n;
                return (
                  null !== t
                    ? ((h[u] = r(t)), (n = new h()), (h[u] = null), (n[p] = t))
                    : (n = b()),
                  void 0 === e ? n : o(n, e)
                );
              });
        },
        "7dd0": function (t, e, n) {
          "use strict";
          var i = n("23e7"),
            r = n("9ed3"),
            o = n("e163"),
            a = n("d2bb"),
            s = n("d44e"),
            l = n("9112"),
            c = n("6eeb"),
            d = n("b622"),
            u = n("c430"),
            p = n("3f8c"),
            h = n("ae93"),
            f = h.IteratorPrototype,
            b = h.BUGGY_SAFARI_ITERATORS,
            m = d("iterator"),
            g = "keys",
            v = "values",
            _ = "entries",
            y = function () {
              return this;
            };
          t.exports = function (t, e, n, d, h, M, O) {
            r(n, e, d);
            var w,
              A,
              x,
              z = function (t) {
                if (t === h && D) return D;
                if (!b && t in S) return S[t];
                switch (t) {
                  case g:
                  case v:
                  case _:
                    return function () {
                      return new n(this, t);
                    };
                }
                return function () {
                  return new n(this);
                };
              },
              C = e + " Iterator",
              k = !1,
              S = t.prototype,
              T = S[m] || S["@@iterator"] || (h && S[h]),
              D = (!b && T) || z(h),
              L = ("Array" == e && S.entries) || T;
            if (
              (L &&
                ((w = o(L.call(new t()))),
                f !== Object.prototype &&
                  w.next &&
                  (u ||
                    o(w) === f ||
                    (a ? a(w, f) : "function" != typeof w[m] && l(w, m, y)),
                  s(w, C, !0, !0),
                  u && (p[C] = y))),
              h == v &&
                T &&
                T.name !== v &&
                ((k = !0),
                (D = function () {
                  return T.call(this);
                })),
              (u && !O) || S[m] === D || l(S, m, D),
              (p[e] = D),
              h)
            )
              if (
                ((A = { values: z(v), keys: M ? D : z(g), entries: z(_) }), O)
              )
                for (x in A) (b || k || !(x in S)) && c(S, x, A[x]);
              else i({ target: e, proto: !0, forced: b || k }, A);
            return A;
          };
        },
        "7f9a": function (t, e, n) {
          var i = n("da84"),
            r = n("8925"),
            o = i.WeakMap;
          t.exports = "function" == typeof o && /native code/.test(r(o));
        },
        "825a": function (t, e, n) {
          var i = n("861d");
          t.exports = function (t) {
            if (!i(t)) throw TypeError(String(t) + " is not an object");
            return t;
          };
        },
        "83ab": function (t, e, n) {
          var i = n("d039");
          t.exports = !i(function () {
            return (
              7 !=
              Object.defineProperty({}, 1, {
                get: function () {
                  return 7;
                },
              })[1]
            );
          });
        },
        8418: function (t, e, n) {
          "use strict";
          var i = n("c04e"),
            r = n("9bf2"),
            o = n("5c6c");
          t.exports = function (t, e, n) {
            var a = i(e);
            a in t ? r.f(t, a, o(0, n)) : (t[a] = n);
          };
        },
        "861d": function (t, e) {
          t.exports = function (t) {
            return "object" == typeof t ? null !== t : "function" == typeof t;
          };
        },
        8875: function (t, e, n) {
          var i, r;
          "undefined" != typeof self && self,
            void 0 ===
              (r =
                "function" ==
                typeof (i = function () {
                  return function t() {
                    var e = Object.getOwnPropertyDescriptor(
                      document,
                      "currentScript"
                    );
                    if (
                      !e &&
                      "currentScript" in document &&
                      document.currentScript
                    )
                      return document