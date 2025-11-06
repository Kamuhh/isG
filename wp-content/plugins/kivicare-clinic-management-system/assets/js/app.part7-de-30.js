// app.part7-de-30.js
  n = this.spinId,
            i = this.localValue,
            r = this.computedInline,
            o = this.computedReadonly,
            a = this.vertical,
            s = this.disabled,
            l = this.computedFormatter,
            c = !Object(d.g)(i),
            u = function (i, r, l, c, d, u, p) {
              var h = t(l, {
                  props: { scale: e.hasFocus ? 1.5 : 1.25 },
                  attrs: { "aria-hidden": "true" },
                }),
                f = { hasFocus: e.hasFocus },
                b = function (t) {
                  s ||
                    o ||
                    (Object(St.f)(t, { propagation: !1 }),
                    e.setMouseup(!0),
                    Object(I.d)(t.currentTarget),
                    e.handleStepRepeat(t, i));
                };
              return t(
                "button",
                {
                  staticClass: "btn btn-sm border-0 rounded-0",
                  class: { "py-0": !a },
                  attrs: {
                    tabindex: "-1",
                    type: "button",
                    disabled: s || o || u,
                    "aria-disabled": s || o || u ? "true" : null,
                    "aria-controls": n,
                    "aria-label": r || null,
                    "aria-keyshortcuts": d || null,
                  },
                  on: { mousedown: b, touchstart: b },
                  key: c || null,
                  ref: c,
                },
                [e.normalizeSlot(p, f) || h]
              );
            },
            p = u(
              this.stepUp,
              this.labelIncrement,
              _t.n,
              "inc",
              "ArrowUp",
              !1,
              P.A
            ),
            h = u(
              this.stepDown,
              this.labelDecrement,
              _t.l,
              "dec",
              "ArrowDown",
              !1,
              P.h
            ),
            f = t();
          this.name &&
            !s &&
            (f = t("input", {
              attrs: {
                type: "hidden",
                name: this.name,
                form: this.form || null,
                value: this.valueAsFixed,
              },
              key: "hidden",
            }));
          var b = t(
            "output",
            {
              staticClass: "flex-grow-1",
              class: {
                "d-flex": a,
                "align-self-center": !a,
                "align-items-center": a,
                "border-top": a,
                "border-bottom": a,
                "border-left": !a,
                "border-right": !a,
              },
              attrs: this.computedSpinAttrs,
              key: "output",
              ref: "spinner",
            },
            [t("bdi", c ? l(i) : this.placeholder || "")]
          );
          return t(
            "div",
            {
              staticClass: "b-form-spinbutton form-control",
              class: [
                {
                  disabled: s,
                  readonly: o,
                  focus: this.hasFocus,
                  "d-inline-flex": r || a,
                  "d-flex": !r && !a,
                  "align-items-stretch": !a,
                  "flex-column": a,
                },
                this.sizeFormClass,
                this.stateClass,
              ],
              attrs: this.computedAttrs,
              on: {
                keydown: this.onKeydown,
                keyup: this.onKeyup,
                "!focus": this.onFocusBlur,
                "!blur": this.onFocusBlur,
              },
            },
            a ? [p, f, b, h] : [h, f, b, p]
          );
        },
      }),
      Lc = C({ components: { BFormSpinbutton: Dc, BSpinbutton: Dc } });
    function qc(t, e) {
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
    function Ec(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? qc(Object(n), !0).forEach(function (e) {
              jc(t, e, n[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
          : qc(Object(n)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(n, e)
              );
            });
      }
      return t;
    }
    function jc(t, e, n) {
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
    var Pc,
      Rc = Object(B.d)(
        Object(h.m)(
          Ec(
            Ec({}, Mn.b),
            {},
            {
              disabled: Object(B.c)(j.g, !1),
              noRemove: Object(B.c)(j.g, !1),
              pill: Object(B.c)(j.g, !1),
              removeLabel: Object(B.c)(j.u, "Remove tag"),
              tag: Object(B.c)(j.u, "span"),
              title: Object(B.c)(j.u),
              variant: Object(B.c)(j.u, "secondary"),
            }
          )
        ),
        q.fb
      ),
      Ic = Object(F.c)({
        name: q.fb,
        mixins: [Mn.a, R.a],
        props: Rc,
        methods: {
          onRemove: function (t) {
            var e = t.type,
              n = t.keyCode;
            this.disabled ||
              ("click" !== e && ("keydown" !== e || n !== Ct.b)) ||
              this.$emit(E.L);
          },
        },
        render: function (t) {
          var e = this.title,
            n = this.tag,
            i = this.variant,
            r = this.pill,
            o = this.disabled,
            a = this.safeId(),
            s = this.safeId("_taglabel_"),
            l = t();
          this.noRemove ||
            o ||
            (l = t($.a, {
              staticClass: "b-form-tag-remove",
              props: { ariaLabel: this.removeLabel },
              attrs: {
                "aria-controls": a,
                "aria-describedby": s,
                "aria-keyshortcuts": "Delete",
              },
              on: { click: this.onRemove, keydown: this.onRemove },
            }));
          var c = t(
            "span",
            {
              staticClass: "b-form-tag-content flex-grow-1 text-truncate",
              attrs: { id: s },
            },
            this.normalizeSlot() || e
          );
          return t(
            Ae,
            {
              staticClass:
                "b-form-tag d-inline-flex align-items-baseline mw-100",
              class: { disabled: o },
              props: { tag: n, variant: i, pill: r },
              attrs: { id: a, title: e || null, "aria-labelledby": s },
            },
            [c, l]
          );
        },
      });
    function Wc(t) {
      return (
        (function (t) {
          if (Array.isArray(t)) return Nc(t);
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
            if ("string" == typeof t) return Nc(t, e);
            var n = Object.prototype.toString.call(t).slice(8, -1);
            return (
              "Object" === n && t.constructor && (n = t.constructor.name),
              "Map" === n || "Set" === n
                ? Array.from(t)
                : "Arguments" === n ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                ? Nc(t, e)
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
    function Nc(t, e) {
      (null == e || e > t.length) && (e = t.length);
      for (var n = 0, i = new Array(e); n < e; n++) i[n] = t[n];
      return i;
    }
    function Bc(t, e) {
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
    function Fc(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? Bc(Object(n), !0).forEach(function (e) {
              $c(t, e, n[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
          : Bc(Object(n)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(n, e)
              );
            });
      }
      return t;
    }
    function $c(t, e, n) {
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
    var Hc = Object(W.a)("value", { type: j.b, defaultValue: [] }),
      Yc = Hc.mixin,
      Uc = Hc.props,
      Xc = Hc.prop,
      Vc = Hc.event,
      Gc = ["text", "email", "tel", "url", "number"],
      Kc = [".b-form-tag", "button", "input", "select"].join(" "),
      Zc = function (t) {
        return Object(kt.b)(t)
          .map(function (t) {
            return Object(ct.h)(Object(ct.g)(t));
          })
          .filter(function (t, e, n) {
            return t.length > 0 && n.indexOf(t) === e;
          });
      },
      Jc = function (t) {
        return Object(d.n)(t) ? t : (Object(d.d)(t) && t.target.value) || "";
      },
      Qc = Object(B.d)(
        Object(h.m)(
          Fc(
            Fc(Fc(Fc(Fc(Fc({}, Mn.b), Uc), _a), wa), xa),
            {},
            {
              addButtonText: Object(B.c)(j.u, "Add"),
              addButtonVariant: Object(B.c)(j.u, "outline-secondary"),
              addOnChange: Object(B.c)(j.g, !1),
              duplicateTagText: Object(B.c)(j.u, "Duplicate tag(s)"),
              feedbackAriaLive: Object(B.c)(j.u, "assertive"),
              ignoreInputFocusSelector: Object(B.c)(j.f, Kc),
              inputAttrs: Object(B.c)(j.q, {}),
              inputClass: Object(B.c)(j.e),
              inputId: Object(B.c)(j.u),
              inputType: Object(B.c)(j.u, "text", function (t) {
                return Object(kt.a)(Gc, t);
              }),
              invalidTagText: Object(B.c)(j.u, "Invalid tag(s)"),
              limit: Object(B.c)(j.n),
              limitTagsText: Object(B.c)(j.u, "Tag limit reached"),
              noAddOnEnter: Object(B.c)(j.g, !1),
              noOuterFocus: Object(B.c)(j.g, !1),
              noTagRemove: Object(B.c)(j.g, !1),
              placeholder: Object(B.c)(j.u, "Add tag..."),
              removeOnDelete: Object(B.c)(j.g, !1),
              separator: Object(B.c)(j.f),
              tagClass: Object(B.c)(j.e),
              tagPills: Object(B.c)(j.g, !1),
              tagRemoveLabel: Object(B.c)(j.u, "Remove tag"),
              tagRemovedLabel: Object(B.c)(j.u, "Tag removed"),
              tagValidator: Object(B.c)(j.l),
              tagVariant: Object(B.c)(j.u, "secondary"),
            }
          )
        ),
        q.gb
      ),
      td = Object(F.c)({
        name: q.gb,
        mixins: [It, Mn.a, Yc, ya, Aa, za, R.a],
        props: Qc,
        data: function () {
          return {
            hasFocus: !1,
            newTag: "",
            tags: [],
            removedTags: [],
            tagsState: { all: [], valid: [], invalid: [], duplicate: [] },
            focusState: null,
          };
        },
        computed: {
          computedInputId: function () {
            return this.inputId || this.safeId("__input__");
          },
          computedInputType: function () {
            return Object(kt.a)(Gc, this.inputType) ? this.inputType : "text";
          },
          computedInputAttrs: function () {
            var t = this.disabled,
              e = this.form;
            return Fc(
              Fc({}, this.inputAttrs),
              {},
              {
                id: this.computedInputId,
                value: this.newTag,
                disabled: t,
                form: e,
              }
            );
          },
          computedInputHandlers: function () {
            return Fc(
              Fc({}, Object(h.j)(this.bvListeners, [E.t, E.u])),
              {},
              {
                blur: this.onInputBlur,
                change: this.onInputChange,
                focus: this.onInputFocus,
                input: this.onInputInput,
                keydown: this.onInputKeydown,
                reset: this.reset,
              }
            );
          },
          computedSeparator: function () {
            return Object(kt.b)(this.separator)
              .filter(d.n)
              .filter(c.a)
              .join("");
          },
          computedSeparatorRegExp: function () {
            var t,
              e = this.computedSeparator;
            return e
              ? new RegExp(
                  "[".concat(
                    ((t = e), Object(ct.a)(t).replace(l.w, "\\s")),
                    "]+"
                  )
                )
              : null;
          },
          computedJoiner: function () {
            var t = this.computedSeparator.charAt(0);
            return " " !== t ? "".concat(t, " ") : t;
          },
          computeIgnoreInputFocusSelector: function () {
            return Object(kt.b)(this.ignoreInputFocusSelector)
              .filter(c.a)
              .join(",")
              .trim();
          },
          disableAddButton: function () {
            var t = this,
              e = Object(ct.h)(this.newTag);
            return (
              "" === e ||
              !this.splitTags(e).some(function (e) {
                return !Object(kt.a)(t.tags, e) && t.validateTag(e);
              })
            );
          },
          duplicateTags: function () {
            return this.tagsState.duplicate;
          },
          hasDuplicateTags: function () {
            return this.duplicateTags.length > 0;
          },
          invalidTags: function () {
            return this.tagsState.invalid;
          },
          hasInvalidTags: function () {
            return this.invalidTags.length > 0;
          },
          isLimitReached: function () {
            var t = this.limit;
            return Object(d.h)(t) && t >= 0 && this.tags.length >= t;
          },
        },
        watch:
          ((Pc = {}),
          $c(Pc, Xc, function (t) {
            this.tags = Zc(t);
          }),
          $c(Pc, "tags", function (t, e) {
            Object(yn.a)(t, this[Xc]) || this.$emit(Vc, t),
              Object(yn.a)(t, e) ||
                ((t = Object(kt.b)(t).filter(c.a)),
                (e = Object(kt.b)(e).filter(c.a)),
                (this.removedTags = e.filter(function (e) {
                  return !Object(kt.a)(t, e);
                })));
          }),
          $c(Pc, "tagsState", function (t, e) {
            Object(yn.a)(t, e) ||
              this.$emit(E.Z, t.valid, t.invalid, t.duplicate);
          }),
          Pc),
        created: function () {
          this.tags = Zc(this[Xc]);
        },
        mounted: function () {
          var t = Object(I.e)("form", this.$el);
          t && Object(St.b)(t, "reset", this.reset, E.eb);
        },
        beforeDestroy: function () {
          var t = Object(I.e)("form", this.$el);
          t && Object(St.a)(t, "reset", this.reset, E.eb);
        },
        methods: {
          addTag: function (t) {
            if (
              ((t = Object(d.n)(t) ? t : this.newTag),
              !this.disabled && "" !== Object(ct.h)(t) && !this.isLimitReached)
            ) {
              var e = this.parseTags(t);
              if (e.valid.length > 0 || 0 === e.all.length)
                if (Object(I.v)(this.getInput(), "select")) this.newTag = "";
                else {
                  var n = [].concat(Wc(e.invalid), Wc(e.duplicate));
                  this.newTag = e.all
                    .filter(function (t) {
                      return Object(kt.a)(n, t);
                    })
                    .join(this.computedJoiner)
                    .concat(n.length > 0 ? this.computedJoiner.charAt(0) : "");
                }
              e.valid.length > 0 &&
                (this.tags = Object(kt.b)(this.tags, e.valid)),
                (this.tagsState = e),
                this.focus();
            }
          },
          removeTag: function (t) {
            this.disabled ||
              (this.tags = this.tags.filter(function (e) {
                return e !== t;
              }));
          },
          reset: function () {
            var t = this;
            (this.newTag = ""),
              (this.tags = []),
              this.$nextTick(function () {
                (t.removedTags = []),
                  (t.tagsState = {
                    all: [],
                    valid: [],
                    invalid: [],
                    duplicate: [],
                  });
              });
          },
          onInputInput: function (t) {
            if (!(this.disabled || (Object(d.d)(t) && t.target.composing))) {
              var e = Jc(t),
                n = this.computedSeparatorRegExp;
              this.newTag !== e && (this.newTag = e),
                (e = Object(ct.i)(e)),
                n && n.test(e.slice(-1))
                  ? this.addTag()
                  : (this.tagsState =
                      "" === e
                        ? { all: [], valid: [], invalid: [], duplicate: [] }
                        : this.parseTags(e));
            }
          },
          onInputChange: function (t) {
            if (!this.disabled && this.addOnChange) {
              var e = Jc(t);
              this.newTag !== e && (this.newTag = e), this.addTag();
            }
          },
          onInputKeydown: function (t) {
            if (!this.disabled && Object(d.d)(t)) {
              var e = t.keyCode,
                n = t.target.value || "";
              this.noAddOnEnter || e !== Ct.e
                ? !this.removeOnDelete ||
                  (e !== Ct.a && e !== Ct.b) ||
                  "" !== n ||
                  (Object(St.f)(t, { propagation: !1 }),
                  (this.tags = this.tags.slice(0, -1)))
                : (Object(St.f)(t, { propagation: !1 }), this.addTag());
            }
          },
          onClick: function (t) {
            var e = this,
              n = this.computeIgnoreInputFocusSelector;
            (n && Object(I.e)(n, t.target, !0)) ||
              this.$nextTick(function () {
                e.focus();
              });
          },
          onInputFocus: function (t) {
            var e = this;
            "out" !== this.focusState &&
              ((this.focusState = "in"),
              this.$nextTick(function () {
                Object(I.D)(function () {
                  e.hasFocus && (e.$emit(E.s, t), (e.focusState = null));
                });
              }));
          },
          onInputBlur: function (t) {
            var e = this;
            "in" !== this.focusState &&
              ((this.focusState = "out"),
              this.$nextTick(function () {
                Object(I.D)(function () {
                  e.hasFocus || (e.$emit(E.b, t), (e.focusState = null));
                });
              }));
          },
          onFocusin: function (t) {
            (this.hasFocus = !0), this.$emit(E.t, t);
          },
          onFocusout: function (t) {
            (this.hasFocus = !1), this.$emit(E.u, t);
          },
          handleAutofocus: function () {
            var t = this;
            this.$nextTick(function () {
              Object(I.D)(function () {
                t.autofocus && t.focus();
              });
            });
          },
          focus: function () {
            this.disabled || Object(I.d)(this.getInput());
          },
          blur: function () {
            this.disabled || Object(I.c)(this.getInput());
          },
          splitTags: function (t) {
            t = Object(ct.g)(t);
            var e = this.computedSeparatorRegExp;
            return (e ? t.split(e) : [t]).map(ct.h).filter(c.a);
          },
          parseTags: function (t) {
            var e = this,
              n = this.splitTags(t),
              i = { all: n, valid: [], invalid: [], duplicate: [] };
            return (
              n.forEach(function (t) {
                Object(kt.a)(e.tags, t) || Object(kt.a)(i.valid, t)
                  ? Object(kt.a)(i.duplicate, t) || i.duplicate.push(t)
                  : e.validateTag(t)
                  ? i.valid.push(t)
                  : Object(kt.a)(i.invalid, t) || i.invalid.push(t);
              }),
              i
            );
          },
          validateTag: function (t) {
            var e = this.tagValidator;
            return !Object(B.b)(e) || e(t);
          },
          getInput: function () {
            return Object(I.E)("#".concat(Zs(this.computedInputId)), this.$el);
          },
          defaultRender: function (t) {
            var e = t.addButtonText,
              n = t.addButtonVariant,
              i = t.addTag,
              r = t.disableAddButton,
              o = t.disabled,
              a = t.duplicateTagText,
              s = t.inputAttrs,
              l = t.inputClass,
              d = t.inputHandlers,
              u = t.inputType,
              p = t.invalidTagText,
              h = t.isDuplicate,
              f = t.isInvalid,
              b = t.isLimitReached,
              m = t.limitTagsText,
              g = t.noTagRemove,
              v = t.placeholder,
              _ = t.removeTag,
              y = t.tagClass,
              M = t.tagPills,
              O = t.tagRemoveLabel,
              w = t.tagVariant,
              A = t.tags,
              x = this.$createElement,
              z = A.map(function (t) {
                return (
                  (t = Object(ct.g)(t)),
                  x(
                    Ic,
                    {
                      class: y,
                      props: {
                        disabled: o,
                        noRemove: g,
                        pill: M,
                        removeLabel: O,
                        tag: "li",
                        title: t,
                        variant: w,
                      },
                      on: {
                        remove: function () {
                          return _(t);
                        },
                      },
                      key: "tags_".concat(t),
                    },
                    t
                  )
                );
              }),
              C = p && f ? this.safeId("__invalid_feedback__") : null,
              k = a && h ? this.safeId("__duplicate_feedback__") : null,
              S = m && b ? this.safeId("__limit_feedback__") : null,
              T = [s["aria-describedby"], C, k, S].filter(c.a).join(" "),
              D = x("input", {
                staticClass:
                  "b-form-tags-input w-100 flex-grow-1 p-0 m-0 bg-transparent border-0",
                class: l,
                style: { outline: 0, minWidth: "5rem" },
                attrs: Fc(
                  Fc({}, s),
                  {},
                  {
                    "aria-describedby": T || null,
                    type: u,
                    placeholder: v || null,
                  }
                ),
                domProps: { value: s.value },
                on: d,
                directives: [{ name: "model", value: s.value }],
                ref: "input",
              }),
              L = x(
                le,
                {
                  staticClass: "b-form-tags-button py-0",
                  class: { invisible: r },
                  style: { fontSize: "90%" },
                  props: { disabled: r || b, variant: n },
                  on: {
                    click: function () {
                      return i();
                    },
                  },
                  ref: "button",
                },
                [this.normalizeSlot(P.a) || e]
              ),
              q = this.safeId("__tag_list__"),
              E = x(
                "li",
                {
                  staticClass: "b-form-tags-field flex-grow-1",
                  attrs: {
                    role: "none",
                    "aria-live": "off",
                    "aria-controls": q,
                  },
                  key: "tags_field",
                },
                [
                  x(
                    "div",
                    { staticClass: "d-flex", attrs: { role: "group" } },
                    [D, L]
                  ),
                ]
              ),
              j = x(
                "ul",
                {
                  staticClass:
                    "b-form-tags-list list-unstyled mb-0 d-flex flex-wrap align-items-center",
                  attrs: { id: q },
                  key: "tags_list",
                },
                [z, E]
              ),
              R = x();
            if (p || a || m) {
              var I = this.feedbackAriaLive,
                W = this.computedJoiner,
                N = x();
              C &&
                (N = x(
                  pa,
                  {
                    props: { id: C, ariaLive: I, forceShow: !0 },
                    key: "tags_invalid_feedback",
                  },
                  [this.invalidTagText, ": ", this.invalidTags.join(W)]
                ));
              var B = x();
              k &&
                (B = x(
                  da,
                  {
                    props: { id: k, ariaLive: I },
                    key: "tags_duplicate_feedback",
                  },
                  [this.duplicateTagText, ": ", this.duplicateTags.join(W)]
                ));
              var F = x();
              S &&
                (F = x(
                  da,
                  { props: { id: S, ariaLive: I }, key: "tags_limit_feedback" },
                  [m]
                )),
                (R = x(
                  "div",
                  {
                    attrs: { "aria-live": "polite", "aria-atomic": "true" },
                    key: "tags_feedback",
                  },
                  [N, B, F]
                ));
            }
            return [j, R];
          },
        },
        render: function (t) {
          var e = this.name,
            n = this.disabled,
            i = this.required,
            r = this.form,
            o = this.tags,
            a = this.computedInputId,
            s = this.hasFocus,
            l = this.noOuterFocus,
            c = Fc(
              {
                tags: o.slice(),
                inputAttrs: this.computedInputAttrs,
                inputType: this.computedInputType,
                inputHandlers: this.computedInputHandlers,
                removeTag: this.removeTag,
                addTag: this.addTag,
                reset: this.reset,
                inputId: a,
                isInvalid: this.hasInvalidTags,
                invalidTags: this.invalidTags.slice(),
                isDuplicate: this.hasDuplicateTags,
                duplicateTags: this.duplicateTags.slice(),
                isLimitReached: this.isLimitReached,
                disableAddButton: this.disableAddButton,
              },
              Object(h.k)(this.$props, [
                "addButtonText",
                "addButtonVariant",
                "disabled",
                "duplicateTagText",
                "form",
                "inputClass",
                "invalidTagText",
                "limit",
                "limitTagsText",
                "noTagRemove",
                "placeholder",
                "required",
                "separator",
                "size",
                "state",
                "tagClass",
                "tagPills",
                "tagRemoveLabel",
                "tagVariant",
              ])
            ),
            d = this.normalizeSlot(P.i, c) || this.defaultRender(c),
            u = t(
              "output",
              {
                staticClass: "sr-only",
                attrs: {
                  id: this.safeId("__selected_tags__"),
                  role: "status",
                  for: a,
                  "aria-live": s ? "polite" : "off",
                  "aria-atomic": "true",
                  "aria-relevant": "additions text",
                },
              },
              this.tags.join(", ")
            ),
            p = t(
              "div",
              {
                staticClass: "sr-only",
                attrs: {
                  id: this.safeId("__removed_tags__"),
                  role: "status",
                  "aria-live": s ? "assertive" : "off",
                  "aria-atomic": "true",
                },
              },
              this.removedTags.length > 0
                ? "("
                    .concat(this.tagRemovedLabel, ") ")
                    .concat(this.removedTags.join(", "))
                : ""
            ),
            f = t();
          if (e && !n) {
            var b = o.length > 0;
            f = (b ? o : [""]).map(function (n) {
              return t("input", {
                class: { "sr-only": !b },
                attrs: {
                  type: b ? "hidden" : "text",
                  value: n,
                  required: i,
                  name: e,
                  form: r,
                },
                key: "tag_input_".concat(n),
              });
            });
          }
          return t(
            "div",
            {
              staticClass: "b-form-tags form-control h-auto",
              class: [
                { focus: s && !l && !n, disabled: n },
                this.sizeFormClass,
                this.stateClass,
              ],
              attrs: {
                id: this.safeId(),
                role: "group",
                tabindex: n || l ? null : "-1",
                "aria-describedby": this.safeId("__selected_tags__"),
              },
              on: {
                click: this.onClick,
                focusin: this.onFocusin,
                focusout: this.onFocusout,
              },
            },
            [u, p, d, f]
          );
        },
      }),
      ed = C({
        components: { BFormTags: td, BTags: td, BFormTag: Ic, BTag: Ic },
      });
    function nd(t, e) {
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
    function id(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? nd(Object(n), !0).forEach(function (e) {
              rd(t, e, n[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
          : nd(Object(n)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(n, e)
              );
            });
      }
      return t;
    }
    function rd(t, e, n) {
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
    var od,
      ad = Object(B.d)(
        Object(h.m)(
          id(
            id(id(id(id(id({}, Mn.b), _a), wa), xa), wl),
            {},
            {
              maxRows: Object(B.c)(j.p),
              noAutoShrink: Object(B.c)(j.g, !1),
              noResize: Object(B.c)(j.g, !1),
              rows: Object(B.c)(j.p, 2),
              wrap: Object(B.c)(j.u, "soft"),
            }
          )
        ),
        q.ib
      ),
      sd = Object(F.c)({
        name: q.ib,
        directives: { "b-visible": _i },
        mixins: [It, Mn.a, Dt.a, ya, Aa, za, Al, fl, xl],
        props: ad,
        data: function () {
          return { heightInPx: null };
        },
        computed: {
          type: function () {
            return null;
          },
          computedStyle: function () {
            var t = {
              resize: !this.computedRows || this.noResize ? "none" : null,
            };
            return (
              this.computedRows ||
                ((t.height = this.heightInPx), (t.overflowY = "scroll")),
              t
            );
          },
          computedMinRows: function () {
            return Object(it.d)(Object(N.c)(this.rows, 2), 2);
          },
          computedMaxRows: function () {
            return Object(it.d)(
              this.computedMinRows,
              Object(N.c)(this.maxRows, 0)
            );
          },
          computedRows: function () {
            return this.computedMinRows === this.computedMaxRows
              ? this.computedMinRows
              : null;
          },
          computedAttrs: function () {
            var t = this.disabled,
              e = this.required;
            return {
              id: this.safeId(),
              name: this.name || null,
              form: this.form || null,
              disabled: t,
              placeholder: this.placeholder || null,
              required: e,
              autocomplete: this.autocomplete || null,
              readonly: this.readonly || this.plaintext,
              rows: this.computedRows,
              wrap: this.wrap || null,
              "aria-required": this.required ? "true" : null,
              "aria-invalid": this.computedAriaInvalid,
            };
          },
          computedListeners: function () {
            return id(
              id({}, this.bvListeners),
              {},
              { input: this.onInput, change: this.onChange, blur: this.onBlur }
            );
          },
        },
        watch: {
          localValue: function () {
            this.setHeight();
          },
        },
        mounted: function () {
          this.setHeight();
        },
        methods: {
          visibleCallback: function (t) {
            t && this.$nextTick(this.setHeight);
          },
          setHeight: function () {
            var t = this;
            this.$nextTick(function () {
              Object(I.D)(function () {
                t.heightInPx = t.computeHeight();
              });
            });
          },
          computeHeight: function () {
            if (this.$isServer || !Object(d.g)(this.computedRows)) return null;
            var t = this.$el;
            if (!Object(I.u)(t)) return null;
            var e = Object(I.k)(t),
              n = Object(N.b)(e.lineHeight, 1),
              i =
                Object(N.b)(e.borderTopWidth, 0) +
                Object(N.b)(e.borderBottomWidth, 0),
              r =
                Object(N.b)(e.paddingTop, 0) + Object(N.b)(e.paddingBottom, 0),
              o = i + r,
              a = n * this.computedMinRows + o,
              s = Object(I.m)(t, "height") || e.height;
            Object(I.H)(t, "height", "auto");
            var l = t.scrollHeight;
            Object(I.H)(t, "height", s);
            var c = Object(it.d)((l - r) / n, 2),
              u = Object(it.e)(
                Object(it.d)(c, this.computedMinRows),
                this.computedMaxRows
              ),
              p = Object(it.d)(Object(it.b)(u * n + o), a);
            return this.noAutoShrink && Object(N.b)(s, 0) > p
              ? s
              : "".concat(p, "px");
          },
        },
        render: function (t) {
          return t("textarea", {
            class: this.computedClass,
            style: this.computedStyle,
            directives: [
              {
                name: "b-visible",
                value: this.visibleCallback,
                modifiers: { 640: !0 },
              },
            ],
            attrs: this.computedAttrs,
            domProps: { value: this.localValue },
            on: this.computedListeners,
            ref: "input",
          });
        },
      }),
      ld = C({ components: { BFormTextarea: sd, BTextarea: sd } });
    function cd(t, e) {
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
    function dd(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? cd(Object(n), !0).forEach(function (e) {
              ud(t, e, n[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
          : cd(Object(n)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(n, e)
              );
            });
      }
      return t;
    }
    function ud(t, e, n) {
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
    function pd(t, e) {
      (null == e || e > t.length) && (e = t.length);
      for (var n = 0, i = new Array(e); n < e; n++) i[n] = t[n];
      return i;
    }
    var hd,
      fd = Object(W.a)("value", { type: j.u, defaultValue: "" }),
      bd = fd.mixin,
      md = fd.props,
      gd = fd.prop,
      vd = fd.event,
      _d = function (t) {
        return "00".concat(t || "").slice(-2);
      },
      yd = function (t) {
        t = Object(ct.g)(t);
        var e = null,
          n = null,
          i = null;
        if (l.B.test(t)) {
          var r = (function (t, e) {
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
                      (o.push(i.value), 3 !== o.length);
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
                  if ("string" == typeof t) return pd(t, 3);
                  var n = Object.prototype.toString.call(t).slice(8, -1);
                  return (
                    "Object" === n && t.constructor && (n = t.constructor.name),
                    "Map" === n || "Set" === n
                      ? Array.from(t)
                      : "Arguments" === n ||
                        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                      ? pd(t, 3)
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
          })(
            t.split(":").map(function (t) {
              return Object(N.c)(t, null);
            })
          );
          (e = r[0]), (n = r[1]), (i = r[2]);
        }
        return {
          hours: Object(d.p)(e) ? null : e,
          minutes: Object(d.p)(n) ? null : n,
          seconds: Object(d.p)(i) ? null : i,
          ampm: Object(d.p)(e) || e < 12 ? 0 : 1,
        };
      },
      Md = Object(B.d)(
        Object(h.m)(
          dd(
            dd(
              dd(dd({}, Mn.b), md),
              Object(h.k)(Tc, ["labelIncrement", "labelDecrement"])
            ),
            {},
            {
              ariaLabelledby: Object(B.c)(j.u),
              disabled: Object(B.c)(j.g, !1),
              footerTag: Object(B.c)(j.u, "footer"),
              headerTag: Object(B.c)(j.u, "header"),
              hidden: Object(B.c)(j.g, !1),
              hideHeader: Object(B.c)(j.g, !1),
              hour12: Object(B.c)(j.g, null),
              labelAm: Object(B.c)(j.u, "AM"),
              labelAmpm: Object(B.c)(j.u, "AM/PM"),
              labelHours: Object(B.c)(j.u, "Hours"),
              labelMinutes: Object(B.c)(j.u, "Minutes"),
              labelNoTimeSelected: Object(B.c)(j.u, "No time selected"),
              labelPm: Object(B.c)(j.u, "PM"),
              labelSeconds: Object(B.c)(j.u, "Seconds"),
              labelSelected: Object(B.c)(j.u, "Selected time"),
              locale: Object(B.c)(j.f),
              minutesStep: Object(B.c)(j.p, 1),
              readonly: Object(B.c)(j.g, !1),
              secondsStep: Object(B.c)(j.p, 1),
              showSeconds: Object(B.c)(j.g, !1),
            }
          )
        ),
        q.oc
      ),
      Od = Object(F.c)({
        name: q.oc,
        mixins: [Mn.a, bd, R.a],
        props: Md,
        data: function () {
          var t = yd(this[gd] || "");
          return {
            modelHours: t.hours,
            modelMinutes: t.minutes,
            modelSeconds: t.seconds,
            modelAmpm: t.ampm,
            isLive: !1,
          };
        },
        computed: {
          computedHMS: function () {
            return (function (t) {
              var e = t.hours,
                n = t.minutes,
                i = t.seconds,
                r =
                  arguments.length > 1 &&
                  void 0 !== arguments[1] &&
                  arguments[1];
              if (Object(d.g)(e) || Object(d.g)(n) || (r && Object(d.g)(i)))
                return "";
              var o = [e, n, r ? i : 0];
              return o.map(_d).join(":");
            })(
              {
                hours: this.modelHours,
                minutes: this.modelMinutes,
                seconds: this.modelSeconds,
              },
              this.showSeconds
            );
          },
          resolvedOptions: function () {
            var t = Object(kt.b)(this.locale).filter(c.a),
              e = { hour: "numeric", minute: "numeric", second: "numeric" };
            Object(d.p)(this.hour12) || (e.hour12 = !!this.hour12);
            var n = new Intl.DateTimeFormat(t, e).resolvedOptions(),
              i = n.hour12 || !1,
              r = n.hourCycle || (i ? "h12" : "h23");
            return { locale: n.locale, hour12: i, hourCycle: r };
          },
          computedLocale: function () {
            return this.resolvedOptions.locale;
          },
          computedLang: function () {
            return (this.computedLocale || "").replace(/-u-.*$/, "");
          },
          computedRTL: function () {
            return _n(this.computedLang);
          },
          computedHourCycle: function () {
            return this.resolvedOptions.hourCycle;
          },
          is12Hour: function () {
            return !!this.resolvedOptions.hour12;
          },
          context: function () {
            return {
              locale: this.computedLocale,
              isRTL: this.computedRTL,
              hourCycle: this.computedHourCycle,
              hour12: this.is12Hour,
              hours: this.modelHours,
              minutes: this.modelMinutes,
              seconds: this.showSeconds ? this.modelSeconds : 0,
              value: this.computedHMS,
              formatted: this.formattedTimeString,
            };
          },
          valueId: function () {
            return this.safeId() || null;
          },
          computedAriaLabelledby: function () {
            return (
              [this.ariaLabelledby, this.valueId].filter(c.a).join(" ") || null
            );
          },
          timeFormatter: function () {
            var t = {
              hour12: this.is12Hour,
              hourCycle: this.computedHourCycle,
              hour: "numeric",
              minute: "numeric",
              timeZone: "UTC",
            };
            return (
              this.showSeconds && (t.second = "numeric"),
              an(this.computedLocale, t)
            );
          },
          numberFormatter: function () {
            return new Intl.NumberFormat(this.computedLocale, {
              style: "decimal",
              minimumIntegerDigits: 2,
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
              notation: "standard",
            }).format;
          },
          formattedTimeString: function () {
            var t = this.modelHours,
              e = this.modelMinutes,
              n = (this.showSeconds && this.modelSeconds) || 0;
            return this.computedHMS
              ? this.timeFormatter(nn(Date.UTC(0, 0, 1, t, e, n)))
              : this.labelNoTimeSelected || " ";
          },
          spinScopedSlots: function () {
            var t = this.$createElement;
            return {
              increment: function (e) {
                var n = e.hasFocus;
                return t(_t.h, {
                  props: { scale: n ? 1.5 : 1.25 },
                  attrs: { "aria-hidden": "true" },
                });
              },
              decrement: function (e) {
                var n = e.hasFocus;
                return t(_t.h, {
                  props: { flipV: !0, scale: n ? 1.5 : 1.25 },
                  attrs: { "aria-hidden": "true" },
                });
              },
            };
          },
        },
        watch:
          ((od = {}),
          ud(od, gd, function (t, e) {
            if (t !== e && !Object(yn.a)(yd(t), yd(this.computedHMS))) {
              var n = yd(t),
                i = n.hours,
                r = n.minutes,
                o = n.seconds,
                a = n.ampm;
              (this.modelHours = i),
                (this.modelMinutes = r),
                (this.modelSeconds = o),
                (this.modelAmpm = a);
            }
          }),
          ud(od, "computedHMS", function (t, e) {
            t !== e && this.$emit(vd, t);
          }),
          ud(od, "context", function (t, e) {
            Object(yn.a)(t, e) || this.$emit(E.h, t);
          }),
          ud(od, "modelAmpm", function (t, e) {
            var n = this;
            if (t !== e) {
              var i = Object(d.g)(this.modelHours) ? 0 : this.modelHours;
              this.$nextTick(function () {
                0 === t && i > 11
                  ? (n.modelHours = i - 12)
                  : 1 === t && i < 12 && (n.modelHours = i + 12);
              });
            }
          }),
          ud(od, "modelHours", function (t, e) {
            t !== e && (this.modelAmpm = t > 11 ? 1 : 0);
          }),
          od),
        created: function () {
          var t = this;
          this.$nextTick(function () {
            t.$emit(E.h, t.context);
          });
        },
        mounted: function () {
          this.setLive(!0);
        },
        activated: function () {
          this.setLive(!0);
        },
        deactivated: function () {
          this.setLive(!1);
        },
        beforeDestroy: function () {
          this.setLive(!1);
        },
        methods: {
          focus: function () {
            this.disabled || Object(I.d)(this.$refs.spinners[0]);
          },
          blur: function () {
            if (!this.disabled) {
              var t = Object(I.g)();
              Object(I.f)(this.$el, t) && Object(I.c)(t);
            }
          },
          formatHours: function (t) {
            var e = this.computedHourCycle;
            return (
              (t =
                0 === (t = this.is12Hour && t > 12 ? t - 12 : t) && "h12" === e
                  ? 12
                  : 0 === t && "h24" === e
                  ? 24
                  : 12 === t && "h11" === e
                  ? 0
                  : t),
              this.numberFormatter(t)
            );
          },
          formatMinutes: function (t) {
            return this.numberFormatter(t);
          },
          formatSeconds: function (t) {
            return this.numberFormatter(t);
          },
          formatAmpm: function (t) {
            return 0 === t ? this.labelAm : 1 === t ? this.labelPm : "";
          },
          setHours: function (t) {
            this.modelHours = t;
          },
          setMinutes: function (t) {
            this.modelMinutes = t;
          },
          setSeconds: function (t) {
            this.modelSeconds = t;
          },
          setAmpm: function (t) {
            this.modelAmpm = t;
          },
          onSpinLeftRight: function () {
            var t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              e = t.type,
              n = t.keyCode;
            if (
              !this.disabled &&
              "keydown" === e &&
              (n === Ct.h || n === Ct.k)
            ) {
              Object(St.f)(t);
              var i = this.$refs.spinners || [],
                r = i
                  .map(function (t) {
                    return !!t.hasFocus;
                  })
                  .indexOf(!0);
              (r =
                (r += n === Ct.h ? -1 : 1) >= i.length
                  ? 0
                  : r < 0
                  ? i.length - 1
                  : r),
                Object(I.d)(i[r]);
            }
          },
          setLive: function (t) {
            var e = this;
            t
              ? this.$nextTick(function () {
                  Object(I.D)(function () {
                    e.isLive = !0;
                  });
                })
              : (this.isLive = !1);
          },
        },
        render: function (t) {
          var e = this;
          if (this.hidden) return t();
          var n = this.disabled,
            i = this.readonly,
            r = this.computedLocale,
            o = this.computedAriaLabelledby,
            a = this.labelIncrement,
            s = this.labelDecrement,
            l = this.valueId,
            d = this.focus,
            u = [],
            p = function (o, c, d) {
              var p =
                  arguments.length > 3 && void 0 !== arguments[3]
                    ? arguments[3]
                    : {},
                h = e.safeId("_spinbutton_".concat(c, "_")) || null;
              return (
                u.push(h),
                t(
                  Dc,
                  ud(
                    {
                      class: d,
                      props: dd(
                        {
                          id: h,
                          placeholder: "--",
                          vertical: !0,
                          required: !0,
                          disabled: n,
                          readonly: i,
                          locale: r,
                          labelIncrement: a,
                          labelDecrement: s,
                          wrap: !0,
                          ariaControls: l,
                          min: 0,
                        },
                        p
                      ),
                      scopedSlots: e.spinScopedSlots,
                      on: { change: o },
                      key: c,
                      ref: "spinners",
                    },
                    F.b,
                    !0
                  )
                )
              );
            },
            h = function () {
              return t(
                "div",
                {
                  staticClass: "d-flex flex-column",
                  class: { "text-muted": n || i },
                  attrs: { "aria-hidden": "true" },
                },
                [
                  t(_t.i, { props: { shiftV: 4, scale: 0.5 } }),
                  t(_t.i, { props: { shiftV: -4, scale: 0.5 } }),
                ]
              );
            },
            f = [];
          f.push(
            p(this.setHours, "hours", "b-time-hours", {
              value: this.modelHours,
              max: 23,
              step: 1,
              formatterFn: this.formatHours,
              ariaLabel: this.labelHours,
            })
          ),
            f.push(h()),
            f.push(
              p(this.setMinutes, "minutes", "b-time-minutes", {
                value: this.modelMinutes,
                max: 59,
                step: this.minutesStep || 1,
                formatterFn: this.formatMinutes,
                ariaLabel: this.labelMinutes,
              })
            ),
            this.showSeconds &&
              (f.push(h()),
              f.push(
                p(this.setSeconds, "seconds", "b-time-seconds", {
                  value: this.modelSeconds,
                  max: 59,
                  step: this.secondsStep || 1,
                  formatterFn: this.formatSeconds,
                  ariaLabel: this.labelSeconds,
                })
              )),
            this.isLive &&
              this.is12Hour &&
              f.push(
                p(this.setAmpm, "ampm", "b-time-ampm", {
                  value: this.modelAmpm,
                  max: 1,
                  formatterFn: this.formatAmpm,
                  ariaLabel: this.labelAmpm,
                  required: !1,
                })
              ),
            (f = t(
              "div",
              {
                staticClass:
                  "d-flex align-items-center justify-content-center mx-auto",
                attrs: {
                  role: "group",
                  tabindex: n || i ? null : "-1",
                  "aria-labelledby": o,
                },
                on: {
                  keydown: this.onSpinLeftRight,
                  click: function (t) {
                    t.target === t.currentTarget && d();
                  },
                },
              },
              f
            ));
          var b = t(
              "output",
              {
                staticClass: "form-control form-control-sm text-center",
                class: { disabled: n || i },
                attrs: {
                  id: l,
                  role: "status",
                  for: u.filter(c.a).join(" ") || null,
                  tabindex: n ? null : "-1",
                  "aria-live": this.isLive ? "polite" : "off",
                  "aria-atomic": "true",
                },
                on: { click: d, focus: d },
              },
              [
                t("bdi", this.formattedTimeString),
                this.computedHMS
                  ? t(
                      "span",
                      { staticClass: "sr-only" },
                      " (".concat(this.labelSelected, ") ")
                    )
                  : "",
              ]
            ),
            m = t(
              this.headerTag,
              {
                staticClass: "b-time-header",
                class: { "sr-only": this.hideHeader },
              },
              [b]
            ),
            g = this.normalizeSlot(),
            v = g
              ? t(this.footerTag, { staticClass: "b-time-footer" }, g)
              : t();
          return t(
            "div",
            {
              staticClass: "b-time d-inline-flex flex-column text-center",
              attrs: {
                role: "group",
                lang: this.computedLang || null,
                "aria-labelledby": o || null,
                "aria-disabled": n ? "true" : null,
                "aria-readonly": i && !n ? "true" : null,
              },
            },
            [m, f, v]
          );
        },
      });
    function wd(t, e) {
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
    function Ad(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? wd(Object(n), !0).forEach(function (e) {
              xd(t, e, n[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
          : wd(Object(n)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(n, e)
              );
            });
      }
      return t;
    }
    function xd(t, e, n) {
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
    var zd = Object(W.a)("value", { type: j.u, defaultValue: "" }),
      Cd = zd.mixin,
      kd = zd.props,
      Sd = zd.prop,
      Td = zd.event,
      Dd = Object(h.j)(Md, ["hidden", "id", "value"]),
      Ld = Object(h.j)(_s, ["formattedValue", "id", "lang", "rtl", "value"]),
      qd = Object(B.d)(
        Object(h.m)(
          Ad(
            Ad(Ad(Ad(Ad({}, Mn.b), kd), Dd), Ld),
            {},
            {
              closeButtonVariant: Object(B.c)(j.u, "outline-secondary"),
              labelCloseButton: Object(B.c)(j.u, "Close"),
              labelNowButton: Object(B.c)(j.u, "Select now"),
              labelResetButton: Object(B.c)(j.u, "Reset"),
              noCloseButton: Object(B.c)(j.g, !1),
              nowButton: Object(B.c)(j.g, !1),
              nowButtonVariant: Object(B.c)(j.u, "outline-primary"),
              resetButton: Object(B.c)(j.g, !1),
              resetButtonVariant: Object(B.c)(j.u, "outline-danger"),
              resetValue: Object(B.c)(j.k),
            }
          )
        ),
        q.jb
      ),
      Ed = Object(F.c)({
        name: q.jb,
        mixins: [Mn.a, Cd],
        props: qd,
        data: function () {
          return {
            localHMS: this[Sd] || "",
            localLocale: null,
            isRTL: !1,
            formattedValue: "",
            isVisible: !1,
          };
        },
        computed: {
          computedLang: function () {
            return (this.localLocale || "").replace(/-u-.*$/i, "") || null;
          },
        },
        watch:
          ((hd = {}),
          xd(hd, Sd, function (t) {
            this.localHMS = t || "";
          }),
          xd(hd, "localHMS", function (t) {
            this.isVisible && this.$emit(Td, t || "");
          }),
          hd),
        methods: {
          focus: function () {
            this.disabled || Object(I.d)(this.$refs.control);
          },
          blur: function () {
            this.disabled || Object(I.c)(this.$refs.control);
          },
          setAndClose: function (t) {
            var e = this;
            (this.localHMS = t),
              this.$nextTick(function () {
                e.$refs.control.hide(!0);
              });
          },
          onInput: function (t) {
            this.localHMS !== t && (this.localHMS = t);
          },
          onContext: function (t) {
            var e = t.isRTL,
              n = t.locale,
              i = t.value,
              r = t.formatted;
            (this.isRTL = e),
              (this.localLocale = n),
              (this.formattedValue = r),
              (this.localHMS = i || ""),
              this.$emit(E.h, t);
          },
          onNowButton: function () {
            var t = new Date(),
              e = [
                t.getHours(),
                t.getMinutes(),
                this.showSeconds ? t.getSeconds() : 0,
              ]
                .map(function (t) {
                  return "00".concat(t || "").slice(-2);
                })
                .join(":");
            this.setAndClose(e);
          },
          onResetButton: function () {
            this.setAndClose(this.resetValue);
          },
          onCloseButton: function () {
            this.$refs.control.hide(!0);
          },
          onShow: function () {
            this.isVisible = !0;
          },
          onShown: function () {
            var t = this;
            this.$nextTick(function () {
              Object(I.d)(t.$refs.time), t.$emit(E.V);
            });
          },
          onHidden: function () {
            (this.isVisible = !1), this.$emit(E.w);
          },
          defaultButtonFn: function (t) {
            var e = t.isHovered,
              n = t.hasFocus;
            return this.$createElement(e || n ? _t.k : _t.j, {
              attrs: { "aria-hidden": "true" },
            });
          },
        },
        render: function (t) {
          var e = this.localHMS,
            n = this.disabled,
            i = this.readonly,
            r = this.$props,
            o = Object(d.p)(this.placeholder)
              ? this.labelNoTimeSelected
              : this.placeholder,
            a = [];
          if (this.nowButton) {
            var s = this.labelNowButton;
            a.push(
              t(
                le,
                {
                  props: {
                    size: "sm",
                    disabled: n || i,
                    variant: this.nowButtonVariant,
                  },
                  attrs: { "aria-label": s || null },
                  on: { click: this.onNowButton },
                  key: "now-btn",
                },
                s
              )
            );
          }
          if (this.resetButton) {
            a.length > 0 && a.push(t("span", " "));
            var l = this.labelResetButton;
            a.push(
              t(
                le,
                {
                  props: {
                    size: "sm",
                    disabled: n || i,
                    variant: this.resetButtonVariant,
                  },
                  attrs: { "aria-label": l || null },
                  on: { click: this.onResetButton },
                  key: "reset-btn",
                },
                l
              )
            );
          }
          if (!this.noCloseButton) {
            a.length > 0 && a.push(t("span", " "));
            var c = this.labelCloseButton;
            a.push(
              t(
                le,
                {
                  props: {
                    size: "sm",
                    disabled: n,
                    variant: this.closeButtonVariant,
                  },
                  attrs: { "aria-label": c || null },
                  on: { click: this.onCloseButton },
                  key: "close-btn",
                },
                c
              )
            );
          }
          a.length > 0 &&
            (a = [
              t(
                "div",
                {
                  staticClass: "b-form-date-controls d-flex flex-wrap",
                  class: {
                    "justify-content-between": a.length > 1,
                    "justify-content-end": a.length < 2,
                  },
                },
                a
              ),
            ]);
          var u = t(
            Od,
            {
              staticClass: "b-form-time-control",
              props: Ad(
                Ad({}, Object(B.e)(Dd, r)),
                {},
                { value: e, hidden: !this.isVisible }
              ),
              on: { input: this.onInput, context: this.onContext },
              ref: "time",
            },
            a
          );
          return t(
            ys,
            {
              staticClass: "b-form-timepicker",
              props: Ad(
                Ad({}, Object(B.e)(Ld, r)),
                {},
                {
                  id: this.safeId(),
                  value: e,
                  formattedValue: e ? this.formattedValue : "",
                  placeholder: o,
                  rtl: this.isRTL,
                  lang: this.computedLang,
                }
              ),
              on: {
                show: this.onShow,
                shown: this.onShown,
                hidden: this.onHidden,
              },
              scopedSlots: xd(
                {},
                P.f,
                this.$scopedSlots[P.f] || this.defaultButtonFn
              ),
              ref: "control",
            },
            [u]
          );
        },
      }),
      jd = C({ components: { BFormTimepicker: Ed, BTimepicker: Ed } }),
      Pd = C({ components: { BImg: ni, BImgLazy: zi } }),
      Rd = Object(B.d)({ tag: Object(B.c)(j.u, "div") }, q.tb),
      Id = Object(F.c)({
        name: q.tb,
        functional: !0,
        props: Rd,
        render: function (t, e) {
          var n = e.props,
            i = e.data,
            r = e.children;
          return t(
            n.tag,
            Object(vt.a)(i, { staticClass: "input-group-text" }),
            r
          );
        },
      }),
      Wd = Object(B.d)(
        {
          append: Object(B.c)(j.g, !1),
          id: Object(B.c)(j.u),
          isText: Object(B.c)(j.g, !1),
          tag: Object(B.c)(j.u, "div"),
        },
        q.qb
      ),
      Nd = Object(F.c)({
        name: q.qb,
        functional: !0,
        props: Wd,
        render: function (t, e) {
          var n = e.props,
            i = e.data,
            r = e.children,
            o = n.append;
          return t(
            n.tag,
            Object(vt.a)(i, {
              class: { "input-group-append": o, "input-group-prepend": !o },
              attrs: { id: n.id },
            }),
            n.isText ? [t(Id, r)] : r
          );
        },
      });
    function Bd(t, e) {
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
    function Fd(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? Bd(Object(n), !0).forEach(function (e) {
              $d(t, e, n[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
          : Bd(Object(n)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(n, e)
              );
            });
      }
      return t;
    }
    function $d(t, e, n) {
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
    var Hd = Object(B.d)(Object(h.j)(Wd, ["append"]), q.rb),
      Yd = Object(F.c)({
        name: q.rb,
        functional: !0,
        props: Hd,
        render: function (t, e) {
          var n = e.props,
            i = e.data,
            r = e.children;
          return t(
            Nd,
            Object(vt.a)(i, { props: Fd(Fd({}, n), {}, { append: !0 }) }),
            r
          );
        },
      });
    function Ud(t, e) {
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
    function Xd(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? Ud(Object(n), !0).forEach(function (e) {
              Vd(t, e, n[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
          : Ud(Object(n)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(n, e)
              );
            });
      }
      return t;
    }
    function Vd(t, e, n) {
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
    var Gd = Object(B.d)(Object(h.j)(Wd, ["append"]), q.sb),
      Kd = Object(F.c)({
        name: q.sb,
        functional: !0,
        props: Gd,
        render: function (t, e) {
          var n = e.props,
            i = e.data,
            r = e.children;
          return t(
            Nd,
            Object(vt.a)(i, { props: Xd(Xd({}, n), {}, { append: !1 }) }),
            r
          );
        },
      }),
      Zd = Object(B.d)(
        {
          append: Object(B.c)(j.u),
          appendHtml: Object(B.c)(j.u),
          id: Object(B.c)(j.u),
          prepend: Object(B.c)(j.u),
          prependHtml: Object(B.c)(j.u),
          size: Object(B.c)(j.u),
          tag: Object(B.c)(j.u, "div"),
        },
        q.pb
      ),
      Jd = C({
        components: {
          BInputGroup: Object(F.c)({
            name: q.pb,
            functional: !0,
            props: Zd,
            render: function (t, e) {
              var n = e.props,
                i = e.data,
                r = e.slots,
                o = e.scopedSlots,
                a = n.prepend,
                s = n.prependHtml,
                l = n.append,
                c = n.appendHtml,
                d = n.size,
                u = o || {},
                p = r(),
                h = {},
                f = t(),
                b = Object(qn.a)(P.Y, u, p);
              (b || a || s) &&
                (f = t(Kd, [
                  b
                    ? Object(qn.b)(P.Y, h, u, p)
                    : t(Id, { domProps: Ce(s, a) }),
                ]));
              var m,
                g,
                v,
                _ = t(),
                y = Object(qn.a)(P.b, u, p);
              return (
                (y || l || c) &&
                  (_ = t(Yd, [
                    y
                      ? Object(qn.b)(P.b, h, u, p)
                      : t(Id, { domProps: Ce(c, l) }),
                  ])),
                t(
                  n.tag,
                  Object(vt.a)(i, {
                    staticClass: "input-group",
                    class:
                      ((m = {}),
                      (g = "input-group-".concat(d)),
                      (v = d),
                      g in m
                        ? Object.defineProperty(m, g, {
                            value: v,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                          })
                        : (m[g] = v),
                      m),
                    attrs: { id: n.id || null, role: "group" },
                  }),
                  [f, Object(qn.b)(P.i, h, u, p), _]
                )
              );
            },
          }),
          BInputGroupAddon: Nd,
          BInputGroupPrepend: Kd,
          BInputGroupAppend: Yd,
          BInputGroupText: Id,
        },
      }),
      Qd = Object(B.d)(
        { fluid: Object(B.c)(j.j, !1), tag: Object(B.c)(j.u, "div") },
        q.C
      ),
      tu = Object(F.c)({
        name: q.C,
        functional: !0,
        props: Qd,
        render: function (t, e) {
          var n,
            i,
            r,
            o = e.props,
            a = e.data,
            s = e.children,
            l = o.fluid;
          return t(
            o.tag,
            Object(vt.a)(a, {
              class:
                ((n = {
                  container: !(l || "" === l),
                  "container-fluid": !0 === l || "" === l,
                }),
                (i = "container-".concat(l)),
                (r = l && !0 !== l),
                i in n
                  ? Object.defineProperty(n, i, {
                      value: r,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (n[i] = r),
                n),
            }),
            s
          );
        },
      });
    function eu(t, e, n) {
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
    var nu = Object(B.d)(
        {
          bgVariant: Object(B.c)(j.u),
          borderVariant: Object(B.c)(j.u),
          containerFluid: Object(B.c)(j.j, !1),
          fluid: Object(B.c)(j.g, !1),
          header: Object(B.c)(j.u),
          headerHtml: Object(B.c)(j.u),
          headerLevel: Object(B.c)(j.p, 3),
          headerTag: Object(B.c)(j.u, "h1"),
          lead: Object(B.c)(j.u),
          leadHtml: Object(B.c)(j.u),
          leadTag: Object(B.c)(j.u, "p"),
          tag: Object(B.c)(j.u, "div"),
          textVariant: Object(B.c)(j.u),
        },
        q.ub
      ),
      iu = C({
        components: {
          BJumbotron: Object(F.c)({
            name: q.ub,
            functional: !0,
            props: nu,
            render: function (t, e) {
              var n,
                i = e.props,
                r = e.data,
                o = e.slots,
                a = e.scopedSlots,
                s = i.header,
                l = i.headerHtml,
                c = i.lead,
                d = i.leadHtml,
                u = i.textVariant,
                p = i.bgVariant,
                h = i.borderVariant,
                f = a || {},
                b = o(),
                m = {},
                g = t(),
                v = Object(qn.a)(P.t, f, b);
              if (v || s || l) {
                var _ = i.headerLevel;
                g = t(
                  i.headerTag,
                  {
                    class: eu({}, "display-".concat(_), _),
                    domProps: v ? {} : Ce(l, s),
                  },
                  Object(qn.b)(P.t, m, f, b)
                );
              }
              var y = t(),
                M = Object(qn.a)(P.E, f, b);
              (M || c || d) &&
                (y = t(
                  i.leadTag,
                  { staticClass: "lead", domProps: M ? {} : Ce(d, c) },
                  Object(qn.b)(P.E, m, f, b)
                ));
              var O = [g, y, Object(qn.b)(P.i, m, f, b)];
              return (
                i.fluid &&
                  (O = [t(tu, { props: { fluid: i.containerFluid } }, O)]),
                t(
                  i.tag,
                  Object(vt.a)(r, {
                    staticClass: "jumbotron",
                    class:
                      ((n = { "jumbotron-fluid": i.fluid }),
                      eu(n, "text-".concat(u), u),
                      eu(n, "bg-".concat(p), p),
                      eu(n, "border-".concat(h), h),
                      eu(n, "border", h),
                      n),
                  }),
                  O
                )
              );
            },
          }),
        },
      });
    function ru(t, e) {
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
    function ou(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? ru(Object(n), !0).forEach(function (e) {
              au(t, e, n[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
          : ru(Object(n)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(n, e)
              );
            });
      }
      return t;
    }
    function au(t, e, n) {
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
    var su = ["start", "end", "center"],
      lu = Object(Js.a)(function (t, e) {
        return (e = Object(ct.h)(Object(ct.g)(e)))
          ? Object(ct.c)(["row-cols", t, e].filter(c.a).join("-"))
          : null;
      }),
      cu = Object(Js.a)(function (t) {
        return Object(ct.c)(t.replace("cols", ""));
      }),
      du = [],
      uu = {
        name: q.Vb,
        functional: !0,
        get props() {
          var t;
          return (
            delete this.props,
            (this.props =
              ((t = Object(Gs.b)().reduce(function (t, e) {
                return (t[Object(B.g)(e, "cols")] = Object(B.c)(j.p)), t;
              }, Object(h.c)(null))),
              (du = Object(h.h)(t)),
              Object(B.d)(
                Object(h.m)(
                  ou(
                    ou({}, t),
                    {},
                    {
                      alignContent: Object(B.c)(j.u, null, function (t) {
                        return Object(kt.a)(
                          Object(kt.b)(su, "between", "around", "stretch"),
                          t
                        );
                      }),
                      alignH: Object(B.c)(j.u, null, function (t) {
                        return Object(kt.a)(
                          Object(kt.b)(su, "between", "around"),
                          t
                        );
                      }),
                      alignV: Object(B.c)(j.u, null, function (t) {
                        return Object(kt.a)(
                          Object(kt.b)(su, "baseline", "stretch"),
                          t
                        );
                      }),
                      noGutters: Object(B.c)(j.g, !1),
                      tag: Object(B.c)(j.u, "div"),
                    }
                  )
                ),
                q.Vb
              ))),
            this.props
          );
        },
        render: function (t, e) {
          var n,
            i = e.props,
            r = e.data,
            o = e.children,
            a = i.alignV,
            s = i.alignH,
            l = i.alignContent,
            c = [];
          return (
            du.forEach(function (t) {
              var e = lu(cu(t), i[t]);
              e && c.push(e);
            }),
            c.push(
              (au(
                (n = { "no-gutters": i.noGutters }),
                "align-items-".concat(a),
                a
              ),
              au(n, "justify-content-".concat(s), s),
              au(n, "align-content-".concat(l), l),
              n)
            ),
            t(i.tag, Object(vt.a)(r, { staticClass: "row", class: c }), o)
          );
        },
      },
      pu = C({
        components: { BContainer: tu, BRow: uu, BCol: ol, BFormRow: ma },
      }),
      hu = C({ components: { BLink: Vt } }),
      fu = Object(B.d)(
        {
          flush: Object(B.c)(j.g, !1),
          horizontal: Object(B.c)(j.j, !1),
          tag: Object(B.c)(j.u, "div"),
        },
        q.wb
      ),
      bu = Object(F.c)({
        name: q.wb,
        functional: !0,
        props: fu,
        render: function (t, e) {
          var n = e.props,
            i = e.data,
            r = e.children,
            o = "" === n.horizontal || n.horizontal;
          o = !n.flush && o;
          var a,
            s,
            l,
            c = {
              staticClass: "list-group",
              class:
                ((a = {
                  "list-group-flush": n.flush,
                  "list-group-horizontal": !0 === o,
                }),
                (s = "list-group-horizontal-".concat(o)),
                (l = Object(d.n)(o)),
                s in a
                  ? Object.defineProperty(a, s, {
                      value: l,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (a[s] = l),
                a),
            };
          return t(n.tag, Object(vt.a)(i, c), r);
        },
      });
    function mu(t, e) {
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
    function gu(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? mu(Object(n), !0).forEach(function (e) {
              vu(t, e, n[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
          : mu(Object(n)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(n, e)
              );
            });
      }
      return t;
    }
    function vu(t, e, n) {
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
    var _u = ["a", "router-link", "button", "b-link"],
      yu = Object(h.j)(Xt, ["event", "routerTag"]);
    delete yu.href.default, delete yu.to.default;
    var Mu = Object(B.d)(
        Object(h.m)(
          gu(
            gu({}, yu),
            {},
            {
              action: Object(B.c)(j.g, !1),
              button: Object(B.c)(j.g, !1),
              tag: Object(B.c)(j.u, "div"),
              variant: Object(B.c)(j.u),
            }
          )
        ),
        q.xb
      ),
      Ou = C({
        components: {
          BListGroup: bu,
          BListGroupItem: Object(F.c)({
            name: q.xb,
            functional: !0,
            props: Mu,
            render: function (t, e) {
              var n,
                i = e.props,
                r = e.data,
                o = e.children,
                a = i.button,
                s = i.variant,
                l = i.active,
                c = i.disabled,
                d = bt(i),
                u = a ? "button" : d ? Vt : i.tag,
                p = !!(i.action || d || a || Object(kt.a)(_u, i.tag)),
                h = {},
                f = {};
              return (
                Object(I.t)(u, "button")
                  ? ((r.attrs && r.attrs.type) || (h.type = "button"),
                    i.disabled && (h.disabled = !0))
                  : (f = Object(B.e)(yu, i)),
                t(
                  u,
                  Object(vt.a)(r, {
                    attrs: h,
                    props: f,
                    staticClass: "list-group-item",
                    class:
                      ((n = {}),
                      vu(n, "list-group-item-".concat(s), s),
                      vu(n, "list-group-item-action", p),
                      vu(n, "active", l),
                      vu(n, "disabled", c),
                      n),
                  }),
                  o
                )
              );
            },
          }),
        },
      }),
      wu = Object(B.d)(
        {
          right: Object(B.c)(j.g, !1),
          tag: Object(B.c)(j.u, "div"),
          verticalAlign: Object(B.c)(j.u, "top"),
        },
        q.zb
      ),
      Au = Object(F.c)({
        name: q.zb,
        functional: !0,
        props: wu,
        render: function (t, e) {
          var n,
            i,
            r,
            o = e.props,
            a = e.data,
            s = e.children,
            l = o.verticalAlign,
            c = "top" === l ? "start" : "bottom" === l ? "end" : l;
          return t(
            o.tag,
            Object(vt.a)(a, {
              staticClass: "media-aside",
              class:
                ((n = { "media-aside-right": o.right }),
                (i = "align-self-".concat(c)),
                (r = c),
                i in n
                  ? Object.defineProperty(n, i, {
                      value: r,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (n[i] = r),
                n),
            }),
            s
          );
        },
      }),
      xu = Object(B.d)({ tag: Object(B.c)(j.u, "div") }, q.Ab),
      zu = Object(F.c)({
        name: q.Ab,
        functional: !0,
        props: xu,
        render: function (t, e) {
          var n = e.props,
            i = e.data,
            r = e.children;
          return t(n.tag, Object(vt.a)(i, { staticClass: "media-body" }), r);
        },
      }),
      Cu = Object(B.d)(
        {
          noBody: Object(B.c)(j.g, !1),
          rightAlign: Object(B.c)(j.g, !1),
          tag: Object(B.c)(j.u, "div"),
          verticalAlign: Object(B.c)(j.u, "top"),
        },
        q.yb
      ),
      ku = C({
        components: {
          BMedia: Object(F.c)({
            name: q.yb,
            functional: !0,
            props: Cu,
            render: function (t, e) {
              var n = e.props,
                i = e.data,
                r = e.slots,
                o = e.scopedSlots,
                a = e.children,
                s = n.noBody,
                l = n.rightAlign,
                c = n.verticalAlign,
                d = s ? a : [];
              if (!s) {
                var u = {},
                  p = r(),
                  h = o || {};
                d.push(t(zu, Object(qn.b)(P.i, u, h, p)));
                var f = Object(qn.b)(P.c, u, h, p);
                f &&
                  d[l ? "push" : "unshift"](
                    t(Au, { props: { right: l, verticalAlign: c } }, f)
                  );
              }
              return t(n.tag, Object(vt.a)(i, { staticClass: "media" }), d);
            },
          }),
          BMediaAside: Au,
          BMediaBody: zu,
        },
      }),
      Su = Object(F.c)({
        created: function () {
          this.$_documentListeners = {};
        },
        beforeDestroy: function () {
          var t = this;
          Object(h.h)(this.$_documentListeners || {}).forEach(function (e) {
            t.$_documentListeners[e].forEach(function (n) {
              t.listenOffDocument(e, n);
            });
          }),
            (this.$_documentListeners = null);
        },
        methods: {
          registerDocumentListener: function (t, e) {
            this.$_documentListeners &&
              ((this.$_documentListeners[t] =
                this.$_documentListeners[t] || []),
              Object(kt.a)(this.$_documentListeners[t], e) ||
                this.$_documentListeners[t].push(e));
          },
          unregisterDocumentListener: function (t, e) {
            this.$_documentListeners &&
              this.$_documentListeners[t] &&
              (this.$_documentListeners[t] = this.$_documentListeners[t].filter(
                function (t) {
                  return t !== e;
                }
              ));
          },
          listenDocument: function (t, e, n) {
            t ? this.listenOnDocument(e, n) : this.listenOffDocument(e, n);
          },
          listenOnDocument: function (t, e) {
            o.i &&
              (Object(St.b)(document, t, e, E.db),
              this.registerDocumentListener(t, e));
          },
          listenOffDocument: function (t, e) {
            o.i && Object(St.a)(document, t, e, E.db),
              this.unregisterDocumentListener(t, e);
          },
        },
      }),
      Tu = Object(F.c)({
        created: function () {
          this.$_windowListeners = {};
        },
        beforeDestroy: function () {
          var t = this;
          Object(h.h)(this.$_windowListeners || {}).forEach(function (e) {
            t.$_windowListeners[e].forEach(function (n) {
              t.listenOffWindow(e, n);
            });
          }),
            (this.$_windowListeners = null);
        },
        methods: {
          registerWindowListener: function (t, e) {
            this.$_windowListeners &&
              ((this.$_windowListeners[t] = this.$_windowListeners[t] || []),
              Object(kt.a)(this.$_windowListeners[t], e) ||
                this.$_windowListeners[t].push(e));
          },
          unregisterWindowListener: function (t, e) {
            this.$_windowListeners &&
              this.$_windowListeners[t] &&
              (this.$_windowListeners[t] = this.$_windowListeners[t].filter(
                function (t) {
                  return t !== e;
                }
              ));
          },
          listenWindow: function (t, e, n) {
            t ? this.listenOnWindow(e, n) : this.listenOffWindow(e, n);
          },
          listenOnWindow: function (t, e) {
            o.i &&
              (Object(St.b)(window, t, e, E.db),
              this.registerWindowListener(t, e));
          },
          listenOffWindow: function (t, e) {
            o.i && Object(St.a)(window, t, e, E.db),
              this.unregisterWindowListener(t, e);
          },
        },
      }),
      Du = Object(F.c)({
        computed: {
          bvParent: function () {
            return (
              this.$parent || (this.$root === this && this.$options.bvParent)
            );
          },
        },
      }),
      Lu = function (t) {
        var e =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return (t && t.$options._scopeId) || e;
      },
      qu = Object(F.c)({
        mixins: [Du],
        computed: {
          scopedStyleAttrs: function () {
            var t,
              e,
              n = Lu(this.bvParent);
            return n
              ? ((e = n) in (t = {})
                  ? Object.defineProperty(t, e, {
                      value: "",
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (t[e] = ""),
                t)
              : {};
          },
        },
      });
    function Eu(t, e) {
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
    function ju(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? Eu(Object(n), !0).forEach(function (e) {
              Pu(t, e, n[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
          : Eu(Object(n)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(n, e)
              );
            });
      }
      return t;
    }
    function Pu(t, e, n) {
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
    var Ru = function (t, e) {
        var n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          i = t.$root ? t.$root.$options.bvEventRoot || t.$root : null;
        return new e(
          ju(ju({}, n), {}, { parent: t, bvParent: t, bvEventRoot: i })
        );
      },
      Iu = Object(F.c)({
        abstract: !0,
        name: q.yc,
        props: { nodes: Object(B.c)(j.c) },
        data: function (t) {
          return { updatedNodes: t.nodes };
        },
        destroyed: function () {
          Object(I.B)(this.$el);
        },
        render: function (t) {
          var e = this.updatedNodes,
            n = Object(d.f)(e) ? e({}) : e;
          return (n = Object(kt.b)(n).filter(c.a)) && n.length > 0 && !n[0].text
            ? n[0]
            : t();
        },
      }),
      Wu = {
        container: Object(B.c)([Gr.c, j.u], "body"),
        disabled: Object(B.c)(j.g, !1),
        tag: Object(B.c)(j.u, "div"),
      },
      Nu = Object(F.c)({
        name: q.xc,
        mixins: [R.a],
        props: Wu,
        watch: {
          disabled: {
            immediate: !0,
            handler: function (t) {
              t ? this.unmountTarget() : this.$nextTick(this.mountTarget);
            },
          },
        },
        created: function () {
          (this.$_defaultFn = null), (this.$_target = null);
        },
        beforeMount: function () {
          this.mountTarget();
        },
        updated: function () {
          this.updateTarget();
        },
        beforeDestroy: function () {
          this.unmountTarget(), (this.$_defaultFn = null);
        },
        methods: {
          getContainer: function () {
            if (o.i) {
              var t = this.container;
              return Object(d.n)(t) ? Object(I.E)(t) : t;
            }
            return null;
          },
          mountTarget: function () {
            if (!this.$_target) {
              var t = this.getContainer();
              if (t) {
                var e = document.createElement("div");
                t.appendChild(e),
                  (this.$_target = Ru(this, Iu, {
                    el: e,
                    propsData: { nodes: Object(kt.b)(this.normalizeSlot()) },
                  }));
              }
            }
          },
          updateTarget: function () {
            if (o.i && this.$_target) {
              var t = this.$scopedSlots.default;
              this.disabled ||
                (t && this.$_defaultFn !== t
                  ? (this.$_target.updatedNodes = t)
                  : t || (this.$_target.updatedNodes = this.$slots.default)),
                (this.$_defaultFn = t);
            }
          },
          unmountTarget: function () {
            this.$_target && this.$_target.$destroy(), (this.$_target = null);
          },
        },
        render: function (t) {
          if (this.disabled) {
            var e = Object(kt.b)(this.normalizeSlot()).filter(c.a);
            if (e.length > 0 && !e[0].text) return e[0];
          }
          return t();
        },
      }),
      Bu = Object(F.c)({
        name: q.xc,
        mixins: [R.a],
        props: Wu,
        render: function (t) {
          if (this.disabled) {
            var e = Object(kt.b)(this.normalizeSlot()).filter(c.a);
            if (e.length > 0) return e[0];
          }
          return t(r.a.Teleport, { to: this.container }, this.normalizeSlot());
        },
      }),
      Fu = F.d ? Bu : Nu;
    function $u(t) {
      return ($u =
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
    function Hu(t, e) {
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
    function Yu(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? Hu(Object(n), !0).forEach(function (e) {
              Uu(t, e, n[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
          : Hu(Object(n)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(n, e)
              );
            });
      }
      return t;
    }
    function Uu(t, e, n) {
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
    function Xu(t, e) {
      if (!(t instanceof e))
        throw new TypeError("Cannot call a class as a function");
    }
    function Vu() {
      return (Vu =
        "undefined" != typeof Reflect && Reflect.get
          ? Reflect.get
          : function (t, e, n) {
              var i = Gu(t, e);
              if (i) {
                var r = Object.getOwnPropertyDescriptor(i, e);
                return r.get
                  ? r.get.call(arguments.length < 3 ? t : n)
                  : r.value;
              }
            }).apply(this, arguments);
    }
    function Gu(t, e) {
      for (
        ;
        !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = Qu(t));

      );
      return t;
    }
    function Ku(t, e) {
      return (Ku =
        Object.setPrototypeOf ||
        function (t, e) {
          return (t.__proto__ = e), t;
        })(t, e);
    }
    function Zu(t, e) {
      if (e && ("object" === $u(e) || "function" == typeof e)) return e;
      if (void 0 !== e)
        throw new TypeError(
          "Derived constructors may only return object or undefined"
        );
      return Ju(t);
    }
    function Ju(t) {
      if (void 0 === t)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return t;
    }
    function Qu(t) {
      return (Qu = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          })(t);
    }
    var tp = (function (t) {
        !(function (t, e) {
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
            e && Ku(t, e);
        })(r, t);
        var e,
          n,
          i = (function (t) {
            var e = (function () {
              if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1;
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
            })();
            return function () {
              var n,
                i = Qu(t);
              if (e) {
                var r = Qu(this).constructor;
                n = Reflect.construct(i, arguments, r);
              } else n = i.apply(this, arguments);
              return Zu(this, n);
            };
          })(r);
        function r(t) {
          var e,
            n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
          return (
            Xu(this, r),
            (e = i.call(this, t, n)),
            Object(h.d)(Ju(e), { trigger: Object(h.l)() }),
            e
          );
        }
        return (
          (e = r),
          (n = [
            {
              key: "Defaults",
              get: function () {
                return Yu(
                  Yu({}, Vu(Qu(r), "Defaults", this)),
                  {},
                  { trigger: null }
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
            })(e, n),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          r
        );
      })(Zr),
      ep = new (Object(F.c)({
        data: function () {
          return {
            modals: [],
            baseZIndex: null,
            scrollbarWidth: null,
            isBodyOverflowing: !1,
          };
        },
        computed: {
          modalCount: function () {
            return this.modals.length;
          },
          modalsAreOpen: function () {
            return this.modalCount > 0;
          },
        },
        watch: {
          modalCount: function (t, e) {
            o.i &&
              (this.getScrollbarWidth(),
              t > 0 && 0 === e
                ? (this.checkScrollbar(),
                  this.setScrollbar(),
                  Object(I.b)(document.body, "modal-open"))
                : 0 === t &&
                  e > 0 &&
                  (this.resetScrollbar(),
                  Object(I.A)(document.body, "modal-open")),
              Object(I.G)(document.body, "data-modal-open-count", String(t)));
          },
          modals: function (t) {
            var e = this;
            this.checkScrollbar(),
              Object(I.D)(function () {
                e.updateModals(t || []);
              });
          },
        },
        methods: {
          registerModal: function (t) {
            t && -1 === this.modals.indexOf(t) && this.modals.push(t);
          },
          unregisterModal: function (t) {
            var e = this.modals.indexOf(t);
            e > -1 &&
              (this.modals.splice(e, 1),
              t._isBeingDestroyed || t._isDestroyed || this.resetModal(t));
          },
          getBaseZIndex: function () {
            if (o.i && Object(d.g)(this.baseZIndex)) {
              var t = document.createElement("div");
              Object(I.b)(t, "modal-backdrop"),
                Object(I.b)(t, "d-none"),
                Object(I.H)(t, "display", "none"),
                document.body.appendChild(t),
                (this.baseZIndex = Object(N.c)(Object(I.k)(t).zIndex, 1040)),
                document.body.removeChild(t);
            }
            return this.baseZIndex || 1040;
          },
          getScrollbarWidth: function () {
            if (o.i && Object(d.g)(this.scrollbarWidth)) {
              var t = document.createElement("div");
              Object(I.b)(t, "modal-scrollbar-measure"),
                document.body.appendChild(t),
                (this.scrollbarWidth = Object(I.i)(t).width - t.clientWidth),
                document.body.removeChild(t);
            }
            return this.scrollbarWidth || 0;
          },
          updateModals: function (t) {
            var e = this,
              n = this.getBaseZIndex(),
              i = this.getScrollbarWidth();
            t.forEach(function (t, r) {
              (t.zIndex = n + r),
                (t.scrollbarWidth = i),
                (t.isTop = r === e.modals.length - 1),
                (t.isBodyOverflowing = e.isBodyOverflowing);
            });
          },
          resetModal: function (t) {
            t &&
              ((t.zIndex = this.getBaseZIndex()),
              (t.isTop = !0),
              (t.isBodyOverflowing = !1));
          },
          checkScrollbar: function () {
            var t = Object(I.i)(document.body),
              e = t.left,
              n = t.right;
            this.isBodyOverflowing = e + n < window.innerWidth;
          },
          setScrollbar: function () {
            var t = document.body;
            if (
              ((t._paddingChangedForModal = t._paddingChangedForModal || []),
              (t._marginChangedForModal = t._marginChangedForModal || []),
              this.isBodyOverflowing)
            ) {
              var e = this.scrollbarWidth;
              Object(I.F)(
                ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top"
              ).forEach(function (n) {
                var i = Object(I.m)(n, "paddingRight") || "";
                Object(I.G)(n, "data-padding-right", i),
                  Object(I.H)(
                    n,
                    "paddingRight",
                    "".concat(
                      Object(N.b)(Object(I.k)(n).paddingRight, 0) + e,
                      "px"
                    )
                  ),
                  t._paddingChangedForModal.push(n);
              }),
                Object(I.F)(".sticky-top").forEach(function (n) {
                  var i = Object(I.m)(n, "marginRight") || "";
                  Object(I.G)(n, "data-margin-right", i),
                    Object(I.H)(
                      n,
                      "marginRight",
                      "".concat(
                        Object(N.b)(Object(I.k)(n).marginRight, 0) - e,
                        "px"
                      )
                    ),
                    t._marginChangedForModal.push(n);
                }),
                Object(I.F)(".navbar-toggler").forEach(function (n) {
                  var i = Object(I.m)(n, "marginRight") || "";
                  Object(I.G)(n, "data-margin-right", i),
                    Object(I.H)(
                      n,
                      "marginRight",
                      "".concat(
                        Object(N.b)(Object(I.k)(n).marginRight, 0) + e,
                        "px"
                      )
                    ),
                    t._marginChangedForModal.push(n);
                });
              var n = Object(I.m)(t, "paddingRight") || "";
              Object(I.G)(t, "data-padding-right", n),
                Object(I.H)(
                  t,
                  "paddingRight",
                  "".concat(
                    Object(N.b)(Object(I.k)(t).paddingRight, 0) + e,
                    "px"
                  )
                );
            }
          },
          resetScrollbar: function () {
            var t = document.body;
            t._paddingChangedForModal &&
              t._paddingChangedForModal.forEach(function (t) {
                Object(I.o)(t, "data-padding-right") &&
                  (Object(I.H)(
                    t,
                    "paddingRight",
                    Object(I.h)(t, "data-padding-right") || ""
                  ),
                  Object(I.z)(t, "data-padding-right"));
              }),
              t._marginChangedForModal &&
                t._marginChangedForModal.forEach(function (t) {
                  Object(I.o)(t, "data-margin-right") &&
                    (Object(I.H)(
                      t,
                      "marginRight",
                      Object(I.h)(t, "data-margin-right") || ""
                    ),
                    Object(I.z)(t, "data-margin-right"));
                }),
              (t._paddingChangedForModal = null),
              (t._marginChangedForModal = null),
              Object(I.o)(t, "data-padding-right") &&
                (Object(I.H)(
                  t,
                  "paddingRight",
                  Object(I.h)(t, "data-padding-right") || ""
                ),
                Object(I.z)(t, "data-padding-right"));
          },
        },
      }))();
    function np(t, e) {
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
    function ip(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? np(Object(n), !0).forEach(function (e) {
              rp(t, e, n[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
          : np(Object(n)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(n, e)
              );
            });
      }
      return t;
    }
    function rp(t, e, n) {
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
    var op = Object(W.a)("visible", {
        type: j.g,
        defaultValue: !1,
        event: E.d,
      }),
      ap = op.mixin,
      sp = op.props,
      lp = op.prop,
      cp = op.event,
      dp = ["cancel", "headerclose", "ok"],
      up = {
        subtree: !0,
        childList: !0,
        characterData: !0,
        attributes: !0,
        attributeFilter: ["style", "class"],
      },
      pp = Object(B.d)(
        Object(h.m)(
          ip(
            ip(ip({}, Mn.b), sp),
            {},
            {
              ariaLabel: Object(B.c)(j.u),
              autoFocusButton: Object(B.c)(j.u, null, function (t) {
                return Object(d.p)(t) || Object(kt.a)(dp, t);
              }),
              bodyBgVariant: Object(B.c)(j.u),
              bodyClass: Object(B.c)(j.e),
              bodyTextVariant: Object(B.c)(j.u),
              busy: Object(B.c)(j.g, !1),
              buttonSize: Object(B.c)(j.u),
              cancelDisabled: Object(B.c)(j.g, !1),
              cancelTitle: Object(B.c)(j.u, "Cancel"),
              cancelTitleHtml: Object(B.c)(j.u),
              cancelVariant: Object(B.c)(j.u, "secondary"),
              centered: Object(B.c)(j.g, !1),
              contentClass: Object(B.c)(j.e),
              dialogClass: Object(B.c)(j.e),
              footerBgVariant: Object(B.c)(j.u),
              footerBorderVariant: Object(B.c)(j.u),
              footerClass: Object(B.c)(j.e),
              footerTag: Object(B.c)(j.u, "footer"),
              footerTextVariant: Object(B.c)(j.u),
              headerBgVariant: Object(B.c)(j.u),
              headerBorderVariant: Object(B.c)(j.u),
              headerClass: Object(B.c)(j.e),
              headerCloseContent: Object(B.c)(j.u, "&times;"),
              headerCloseLabel: Object(B.c)(j.u, "Close"),
              headerCloseVariant: Object(B.c)(j.u),
              headerTag: Object(B.c)(j.u, "header"),
              headerTextVariant: Object(B.c)(j.u),
              hideBackdrop: Object(B.c)(j.g, !1),
              hideFooter: Object(B.c)(j.g, !1),
              hideHeader: Object(B.c)(j.g, !1),
              hideHeaderClose: Object(B.c)(j.g, !1),
              ignoreEnforceFocusSelector: Object(B.c)(j.f),
              lazy: Object(B.c)(j.g, !1),
              modalClass: Object(B.c)(j.e),
              noCloseOnBackdrop: Object(B.c)(j.g, !1),
              noCloseOnEsc: Object(B.c)(j.g, !1),
              noEnforceFocus: Object(B.c)(j.g, !1),
              noFade: Object(B.c)(j.g, !1),
              noStacking: Object(B.c)(j.g, !1),
              okDisabled: Object(B.c)(j.g, !1),
              okOnly: Object(B.c)(j.g, !1),
              okTitle: Object(B.c)(j.u, "OK"),
              okTitleHtml: Object(B.c)(j.u),
              okVariant: Object(B.c)(j.u, "primary"),
              returnFocus: Object(B.c)([Gr.c, j.q, j.u]),
              scrollable: Object(B.c)(j.g, !1),
              size: Object(B.c)(j.u, "md"),
              static: Object(B.c)(j.g, !1),
              title: Object(B.c)(j.u),
              titleClass: Object(B.c)(j.e),
              titleHtml: Object(B.c)(j.u),
              titleSrOnly: Object(B.c)(j.g, !1),
              titleTag: Object(B.c)(j.u, "h5"),
            }
          )
        ),
        q.Bb
      ),
      hp = Object(F.c)({
        name: q.Bb,
        mixins: [Tt.a, Mn.a, ap, Su, Dt.a, Tu, R.a, qu],
        inheritAttrs: !1,
        props: pp,
        data: function () {
          return {
            isHidden: !0,
            isVisible: !1,
            isTransitioning: !1,
            isShow: !1,
            isBlock: !1,
            isOpening: !1,
            isClosing: !1,
            ignoreBackdropClick: !1,
            isModalOverflowing: !1,
            scrollbarWidth: 0,
            zIndex: ep.getBaseZIndex(),
            isTop: !0,
            isBodyOverflowing: !1,
          };
        },
        computed: {
          modalId: function () {
            return this.safeId();
          },
          modalOuterId: function () {
            return this.safeId("__BV_modal_outer_");
          },
          modalHeaderId: function () {
            return this.safeId("__BV_modal_header_");
          },
          modalBodyId: function () {
            return this.safeId("__BV_modal_body_");
          },
          modalTitleId: function () {
            return this.safeId("__BV_modal_title_");
          },
          modalContentId: function () {
            return this.safeId("__BV_modal_content_");
          },
          modalFooterId: function () {
            return this.safeId("__BV_modal_footer_");
          },
          modalBackdropId: function () {
            return this.safeId("__BV_modal_backdrop_");
          },
          modalClasses: function () {
            return [{ fade: !this.noFade, show: this.isShow }, this.modalClass];
          },
          modalStyles: function () {
            var t = "".concat(this.scrollbarWidth, "px");
            return {
              paddingLeft:
                !this.isBodyOverflowing && this.isModalOverflowing ? t : "",
              paddingRight:
                this.isBodyOverflowing && !this.isModalOverflowing ? t : "",
              display: this.isBlock ? "block" : "none",
            };
          },
          dialogClasses: function () {
            var t;
            return [
              ((t = {}),
              rp(t, "modal-".concat(this.size), this.size),
              rp(t, "modal-dialog-centered", this.centered),
              rp(t, "modal-dialog-scrollable", this.scrollable),
              t),
              this.dialogClass,
            ];
          },
          headerClasses: function () {
            var t;
            return [
              ((t = {}),
              rp(t, "bg-".concat(this.headerBgVariant), this.headerBgVariant),
              rp(
                t,
                "text-".concat(this.headerTextVariant),
                this.headerTextVariant
              ),
              rp(
                t,
                "border-".concat(this.headerBorderVariant),
                this.headerBorderVariant
              ),
              t),
              this.headerClass,
            ];
          },
          titleClasses: function () {
            return [{ "sr-only": this.titleSrOnly }, this.titleClass];
          },
          bodyClasses: function () {
            var t;
            return [
              ((t = {}),
              rp(t, "bg-".concat(this.bodyBgVariant), this.bodyBgVariant),
              rp(t, "text-".concat(this.bodyTextVariant), this.bodyTextVariant),
              t),
              this.bodyClass,
            ];
          },
          footerClasses: function () {
            var t;
            return [
              ((t = {}),
              rp(t, "bg-".concat(this.footerBgVariant), this.footerBgVariant),
              rp(
                t,
                "text-".concat(this.footerTextVariant),
                this.footerTextVariant
              ),
              rp(
                t,
                "border-".concat(this.footerBorderVariant),
                this.footerBorderVariant
              ),
              t),
              this.footerClass,
            ];
          },
          modalOuterStyle: function () {
            return { position: "absolute", zIndex: this.zIndex };
          },
          slotScope: function () {
            return {
              cancel: this.onCancel,
              close: this.onClose,
              hide: this.hide,
              ok: this.onOk,
              visible: this.isVisible,
            };
          },
          computeIgnoreEnforceFocusSelector: function () {
            return Object(kt.b)(this.ignoreEnforceFocusSelector)
              .filter(c.a)
              .join(",")
              .trim();
          },
          computedAttrs: function () {
            return ip(
              ip(
                ip({}, this.static ? {} : this.scopedStyleAttrs),
                this.bvAttrs
              ),
              {},
              { id: this.modalOuterId }
            );
          },
          computedModalAttrs: function () {
            var t = this.isVisible,
              e = this.ariaLabel;
            return {
              id: this.modalId,
              role: "dialog",
              "aria-hidden": t ? null : "true",
              "aria-modal": t ? "true" : null,
              "aria-label": e,
              "aria-labelledby":
                this.hideHeader ||
                e ||
                !(this.hasNormalizedSlot(P.M) || this.titleHtml || this.title)
                  ? null
                  : this.modalTitleId,
              "aria-describedby": this.modalBodyId,
            };
          },
        },
        watch: rp({}, lp, function (t, e) {
          t !== e && this[t ? "show" : "hide"]();
        }),
        created: function () {
          (this.$_observer = null),
            (this.$_returnFocus = this.returnFocus || null);
        },
        mounted: function () {
          (this.zIndex = ep.getBaseZIndex()),
            this.listenOnRoot(Object(St.d)(q.Bb, E.U), this.showHandler),
            this.listenOnRoot(Object(St.d)(q.Bb, E.x), this.hideHandler),
            this.listenOnRoot(Object(St.d)(q.Bb, E.ab), this.toggleHandler),
            this.listenOnRoot(Object(St.e)(q.Bb, E.U), this.modalListener),
            !0 === this[lp] && this.$nextTick(this.show);
        },
        beforeDestroy: function () {
          ep.unregisterModal(this),
            this.setObserver(!1),
            this.isVisible &&
              ((this.isVisible = !1),
              (this.isShow = !1),
              (this.isTransitioning = !1));
        },
        methods: {
          setObserver: function () {
            var t =
              arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            this.$_observer && this.$_observer.disconnect(),
              (this.$_observer = null),
              t &&
                (this.$_observer = Bi(
                  this.$refs.content,
                  this.checkModalOverflow.bind(this),
                  up
                ));
          },
          updateModel: function (t) {
            t !== this[lp] && this.$emit(cp, t);
          },
          buildEvent: function (t) {
            var e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            return new tp(
              t,
              ip(
                ip(
                  {
                    cancelable: !1,
                    target: this.$refs.modal || this.$el || null,
                    relatedTarget: null,
                    trigger: null,
                  },
                  e
                ),
                {},
                { vueTarget: this, componentId: this.modalId }
              )
            );
          },
          show: function () {
            if (!this.isVisible && !this.isOpening)
              if (this.isClosing) this.$once(E.w, this.show);
              else {
                (this.isOpening = !0),
                  (this.$_returnFocus =
                    this.$_returnFocus || this.getActiveElement());
                var t = this.buildEvent(E.U, { cancelable: !0 });
                if ((this.emitEvent(t), t.defaultPrevented || this.isVisible))
                  return (this.isOpening = !1), void this.updateModel(!1);
                this.doShow();
              }
          },
          hide: function () {
            var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "";
            if (this.isVisible && !this.isClosing) {
              this.isClosing = !0;
              var e = this.buildEvent(E.x, {
                cancelable: "FORCE" !== t,
                trigger: t || null,
              });
              if (
                ("ok" === t
                  ? this.$emit(E.E, e)
                  : "cancel" === t
                  ? this.$emit(E.c, e)
                  : "headerclose" === t && this.$emit(E.g, e),
                this.emitEvent(e),
                e.defaultPrevented || !this.isVisible)
              )
                return (this.isClosing = !1), void this.updateModel(!0);
              this.setObserver(!1), (this.isVisible = !1), this.updateModel(!1);
            }
          },
          toggle: function (t) {
            t && (this.$_returnFocus = t),
              this.isVisible ? this.hide("toggle") : this.show();
          },
          getActiveElement: function () {
            var t = Object(I.g)(o.i ? [document.body] : []);
            return t && t.focus ? t : null;
          },
          doShow: function () {
            var t = this;
            ep.modalsAreOpen && this.noStacking
              ? this.listenOnRootOnce(Object(St.e)(q.Bb, E.w), this.doShow)
              : (ep.registerModal(this),
                (this.isHidden = !1),
                this.$nextTick(function () {
                  (t.isVisible = !0),
                    (t.isOpening = !1),
                    t.updateModel(!0),
                    t.$nextTick(function () {
                      t.setObserver(!0);
                    });
                }));
          },
          onBeforeEnter: function () {
            (this.isTransitioning = !0), this.setResizeEvent(!0);
          },
          onEnter: function () {
            var t = this;
            (this.isBlock = !0),
              Object(I.D)(function () {
                Object(I.D)(function () {
                  t.isShow = !0;
                });
              });
          },
          onAfterEnter: function () {
            var t = this;
            this.checkModalOverflow(),
              (this.isTransitioning = !1),
              Object(I.D)(function () {
                t.emitEvent(t.buildEvent(E.V)),
                  t.setEnforceFocus(!0),
                  t.$nextTick(function () {
                    t.focusFirst();
                  });
              });
          },
          onBeforeLeave: function () {
            (this.isTransitioning = !0),
              this.setResizeEvent(!1),
              this.setEnforceFocus(!1);
          },
          onLeave: function () {
            this.isShow = !1;
          },
          onAfterLeave: function () {
            var t = this;
            (this.isBlock = !1),
              (this.isTransitioning = !1),
              (this.isModalOverflowing = !1),
              (this.isHidden = !0),
              this.$nextTick(function () {
                (t.isClosing = !1),
                  ep.unregisterModal(t),
                  t.returnFocusTo(),
                  t.emitEvent(t.buildEvent(E.w));
              });
          },
          emitEvent: function (t) {
            var e = t.type;
            this.emitOnRoot(Object(St.e)(q.Bb, e), t, t.componentId),
              this.$emit(e, t);
          },
          onDialogMousedown: function () {
            var t = this,
              e = this.$refs.modal;
            Object(St.b)(
              e,
              "mouseup",
              function n(i) {
                Object(St.a)(e, "mouseup", n, E.db),
                  i.target === e && (t.ignoreBackdropClick = !0);
              },
              E.db
            );
          },
          onClickOut: function (t) {
            this.ignoreBackdropClick
              ? (this.ignoreBackdropClick = !1)
              : this.isVisible &&
                !this.noCloseOnBackdrop &&
                Object(I.f)(document.body, t.target) &&
                (Object(I.f)(this.$refs.content, t.target) ||
                  this.hide("backdrop"));
          },
          onOk: function () {
            this.hide("ok");
          },
          onCancel: function () {
            this.hide("cancel");
          },
          onClose: function () {
            this.hide("headerclose");
          },
          onEsc: function (t) {
            t.keyCode === Ct.f &&
              this.isVisible &&
              !this.noCloseOnEsc &&
              this.hide("esc");
          },
          focusHandler: function (t) {
            var e = this.$refs.content,
              n = t.target;
            if (
              !(
                this.noEnforceFocus ||
                !this.isTop ||
                !this.isVisible ||
                !e ||
                document === n ||
                Object(I.f)(e, n) ||
                (this.computeIgnoreEnforceFocusSelector &&
                  Object(I.e)(this.computeIgnoreEnforceFocusSelector, n, !0))
              )
            ) {
              var i = Object(I.n)(this.$refs.content),
                r = this.$refs["bottom-trap"],
                o = this.$refs["top-trap"];
              if (r && n === r) {
                if (Object(I.d)(i[0])) return;
              } else if (o && n === o && Object(I.d)(i[i.length - 1])) return;
              Object(I.d)(e, { preventScroll: !0 });
            }
          },
          setEnforceFocus: function (t) {
            this.listenDocument(t, "focusin", this.focusHandler);
          },
          setResizeEvent: function (t) {
            this.listenWindow(t, "resize", this.checkModalOverflow),
              this.listenWindow(
                t,
                "orientationchange",
                this.checkModalOverflow
              );
          },
          showHandler: function (t, e) {
            t === this.modalId &&
              ((this.$_returnFocus = e || this.getActiveElement()),
              this.show());
          },
          hideHandler: function (t) {
            t === this.modalId && this.hide("event");
          },
          toggleHandler: function (t, e) {
            t === this.modalId && this.toggle(e);
          },
          modalListener: function (t) {
            this.noStacking && t.vueTarget !== this && this.hide();
          },
          focusFirst: function () {
            var t = this;
            o.i &&
              Object(I.D)(function () {
                var e = t.$refs.modal,
                  n = t.$refs.content,
                  i = t.getActiveElement();
                if (e && n && (!i || !Object(I.f)(n, i))) {
                  var r = t.$refs["ok-button"],
                    o = t.$refs["cancel-button"],
                    a = t.$refs["close-button"],
                    s = t.autoFocusButton,
                    l =
                      "ok" === s && r
                        ? r.$el || r
                        : "cancel" === s && o
                        ? o.$el || o
                        : "headerclose" === s && a
                        ? a.$el || a
                        : n;
                  Object(I.d)(l),
                    l === n &&
                      t.$nextTick(function () {
                        e.scrollTop = 0;
                      });
                }
              });
          },
          returnFocusTo: function () {
            var t = this.returnFocus || this.$_returnFocus || null;
            (this.$_returnFocus = null),
              this.$nextTick(function () {
                (t = Object(d.n)(t) ? Object(I.E)(t) : t) &&
                  ((t = t.$el || t), Object(I.d)(t));
              });
          },
          checkModalOverflow: function () {
            if (this.isVisible) {
              var t = this.$refs.modal;
              this.isModalOverflowing =
                t.scrollHeight > document.documentElement.clientHeight;
            }
          },
          makeModal: function (t) {
            var e = t();
            if (!this.hideHeader) {
              var n = this.normalizeSlot(P.J, this.slotScope);
              if (!n) {
                var i = t();
                this.hideHeaderClose ||
                  (i = t(
                    $.a,
                    {
                      props: {
                        content: this.headerCloseContent,
                        disabled: this.isTransitioning,
                        ariaLabel: this.headerCloseLabel,
                        textVariant:
                          this.headerCloseVariant || this.headerTextVariant,
                      },
                      on: { click: this.onClose },
                      ref: "close-button",
                    },
                    [this.normalizeSlot(P.K)]
                  )),
                  (n = [
                    t(
                      this.titleTag,
                      {
                        staticClass: "modal-title",
                        class: this.titleClasses,
                        attrs: { id: this.modalTitleId },
                        domProps: this.hasNormalizedSlot(P.M)
                          ? {}
                          : Ce(this.titleHtml, this.title),
                      },
                      this.normalizeSlot(P.M, this.slotScope)
                    ),
                    i,
                  ]);
              }
              e = t(
                this.headerTag,
                {
                  staticClass: "modal-header",
                  class: this.headerClasses,
                  attrs: { id: this.modalHeaderId },
                  ref: "header",
                },
                [n]
              );
            }
            var r = t(
                "div",
                {
                  staticClass: "modal-body",
                  class: this.bodyClasses,
                  attrs: { id: this.modalBodyId },
                  ref: "body",
                },
                this.normalizeSlot(P.i, this.slotScope)
              ),
              o = t();
            if (!this.hideFooter) {
              var a = this.normalizeSlot(P.I, this.slotScope);
              if (!a) {
                var s = t();
                this.okOnly ||
                  (s = t(
                    le,
                    {
                      props: {
                        variant: this.cancelVariant,
                        size: this.buttonSize,
                        disabled:
                          this.cancelDisabled ||
                          this.busy ||
                          this.isTransitioning,
                      },
                      domProps: this.hasNormalizedSlot(P.H)
                        ? {}
                        : Ce(this.cancelTitleHtml, this.cancelTitle),
                      on: { click: this.onCancel },
                      ref: "cancel-button",
                    },
                    this.normalizeSlot(P.H)
                  )),
                  (a = [
                    s,
                    t(
                      le,
                      {
                        props: {
                          variant: this.okVariant,
                          size: this.buttonSize,
                          disabled:
                            this.okDisabled ||
                            this.busy ||
                            this.isTransitioning,
                        },
                        domProps: this.hasNormalizedSlot(P.L)
                          ? {}
                          : Ce(this.okTitleHtml, this.okTitle),
                        on: { click: this.onOk },
                        ref: "ok-button",
                      },
                      this.normalizeSlot(P.L)
                    ),
                  ]);
              }
              o = t(
                this.footerTag,
                {
                  staticClass: "modal-footer",
                  class: this.footerClasses,
                  attrs: { id: this.modalFooterId },
                  ref: "footer",
                },
                [a]
              );
            }
            var l = t(
                "div",
                {
                  staticClass: "modal-content",
                  class: this.contentClass,
                  attrs: { id: this.modalContentId, tabindex: "-1" },
                  ref: "content",
                },
                [e, r, o]
              ),
              c = t(),
              d = t();
            this.isVisible &&
              !this.noEnforceFocus &&
              ((c = t("span", { attrs: { tabindex: "0" }, ref: "top-trap" })),
              (d = t("span", {
                attrs: { tabindex: "0" },
                ref: "bottom-trap",
              })));
            var u = t(
                "div",
                {
                  staticClass: "modal-dialog",
                  class: this.dialogClasses,
                  on: { mousedown: this.onDialogMousedown },
                  ref: "dialog",
                },
                [c, l, d]
              ),
              p = t(
                "div",
                {
                  staticClass: "modal",
                  class: this.modalClasses,
                  style: this.modalStyles,
                  attrs: this.computedModalAttrs,
                  on: { keydown: this.onEsc, click: this.onClickOut },
                  directives: [{ name: "show", value: this.isVisible }],
                  ref: "modal",
                },
                [u]
              );
            p = t(
              "transition",
              {
                props: {
                  enterClass: "",
                  enterToClass: "",
                  enterActiveClass: "",
                  leaveClass: "",
                  leaveActiveClass: "",
                  leaveToClass: "",
                },
                on: {
                  beforeEnter: this.onBeforeEnter,
                  enter: this.onEnter,
                  afterEnter: this.onAfterEnter,
                  beforeLeave: this.onBeforeLeave,
                  leave: this.onLeave,
                  afterLeave: this.onAfterLeave,
                },
              },
              [p]
            );
            var h = t();
            return (
              !this.hideBackdrop &&
                this.isVisible &&
                (h = t(
                  "div",
                  {
                    staticClass: "modal-backdrop",
                    attrs: { id: this.modalBackdropId },
                  },
                  this.normalizeSlot(P.G)
                )),
              (h = t(H.a, { props: { noFade: this.noFade } }, [h])),
              t(
                "div",
                {
                  style: this.modalOuterStyle,
                  attrs: this.computedAttrs,
                  key: "modal-outer-".concat(this[F.a]),
                },
                [p, h]
              )
            );
          },
        },
        render: function (t) {
          return this.static
            ? this.lazy && this.isHidden
              ? t()
              : this.makeModal(t)
            : this.isHidden
            ? t()
            : t(Fu, [this.makeModal(t)]);
        },
      }),
      fp = Object(St.d)(q.Bb, E.U),
      bp = "__bv_modal_directive__",
      mp = function (t) {
        var e = t.modifiers,
          n = void 0 === e ? {} : e,
          i = t.arg,
          r = t.value;
        return Object(d.n)(r)
          ? r
          : Object(d.n)(i)
          ? i
          : Object(h.h)(n).reverse()[0];
      },
      gp = function (t) {
        return (
          (t &&
            Object(I.v)(t, ".dropdown-menu > li, li.nav-item") &&
            Object(I.E)("a, button", t)) ||
          t
        );
      },
      vp = function (t) {
        t &&
          "BUTTON" !== t.tagName &&
          (Object(I.o)(t, "role") || Object(I.G)(t, "role", "button"),
          "A" === t.tagName ||
            Object(I.o)(t, "tabindex") ||
            Object(I.G)(t, "tabindex", "0"));
      },
      _p = function (t) {
        var e = t[bp] || {},
          n = e.trigger,
          i = e.handler;
        n &&
          i &&
          (Object(St.a)(n, "click", i, E.eb),
          Object(St.a)(n, "keydown", i, E.eb),
          Object(St.a)(t, "click", i, E.eb),
          Object(St.a)(t, "keydown", i, E.eb)),
          delete t[bp];
      },
      yp = function (t, e, n) {
        var i = t[bp] || {},
          r = mp(e),
          o = gp(t);
        (r === i.target && o === i.trigger) ||
          (_p(t),
          (function (t, e, n) {
            var i = mp(e),
              r = gp(t);
            if (i && r) {
              var o = function (t) {
                var r = t.currentTarget;
                if (!Object(I.r)(r)) {
                  var o = t.type,
                    a = t.keyCode;
                  ("click" !== o &&
                    ("keydown" !== o || (a !== Ct.e && a !== Ct.l))) ||
                    Object(kr.a)(Cr(n, e)).$emit(fp, i, r);
                }
              };
              (t[bp] = { handler: o, target: i, trigger: r }),
                vp(r),
                Object(St.b)(r, "click", o, E.eb),
                "BUTTON" !== r.tagName &&
                  "button" === Object(I.h)(r, "role") &&
                  Object(St.b)(r, "keydown", o, E.eb);
            }
          })(t, e, n)),
          vp(o);
      },
      Mp = {
        inserted: yp,
        updated: function () {},
        componentUpdated: yp,
        unbind: _p,
      };
    function Op(t, e) {
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
    function wp(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? Op(Object(n), !0).forEach(function (e) {
              Ap(t, e, n[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
          : Op(Object(n)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(n, e)
              );
            });
      }
      return t;
    }
    function Ap(t, e, n) {
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
    function xp(t, e) {
      (null == e || e > t.length) && (e = t.length);
      for (var n = 0, i = new Array(e); n < e; n++) i[n] = t[n];
      return i;
    }
    var zp,
      Cp = ["id"].concat(
        (function (t) {
          if (Array.isArray(t)) return xp(t);
        })(
          (zp = Object(h.h)(
            Object(h.j)(pp, ["busy", "lazy", "noStacking", "static", "visible"])
          ))
        ) ||
          (function (t) {
            if (
              ("undefined" != typeof Symbol && null != t[Symbol.iterator]) ||
              null != t["@@iterator"]
            )
              return Array.from(t);
          })(zp) ||
          (function (t, e) {
            if (t) {
              if ("string" == typeof t) return xp(t, e);
              var n = Object.prototype.toString.call(t).slice(8, -1);
              return (
                "Object" === n && t.constructor && (n = t.constructor.name),
                "Map" === n || "Set" === n
                  ? Array.from(t)
                  : "Arguments" === n ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                  ? xp(t, e)
                  : void 0
              );
            }
          })(zp) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
      ),
      kp = function () {},
      Sp = {
        msgBoxContent: "default",
        title: "modal-title",
        okTitle: "modal-ok",
        cancelTitle: "modal-cancel",
      },
      Tp = function (t) {
        return Cp.reduce(function (e, n) {
          return Object(d.o)(t[n]) || (e[n] = t[n]), e;
        }, {});
      },
      Dp = C({
        components: { BModal: hp },
        directives: { VBModal: Mp },
        plugins: {
          BVModalPlugin: C({
            plugins: {
              plugin: function (t) {
                var e = t.extend({
                    name: q.Cb,
                    extends: hp,
                    mixins: [Du],
                    destroyed: function () {
                      this.$el &&
                        this.$el.parentNode &&
                        this.$el.parentNode.removeChild(this.$el);
                    },
                    mounted: function () {
                      var t = this,
                        e = function () {
                          t.$nextTick(function () {
                            Object(I.D)(function () {
                              t.$destroy();
                            });
                          });
                        };
                      this.bvParent.$once(E.gb, e),
                        this.$once(E.w, e),
                        this.$router &&
                          this.$route &&
                          this.$once(E.fb, this.$watch("$router", e)),
                        this.show();
                    },
                  }),
                  n = function (t, n) {
                    var i =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : kp;
                    if (!m("$bvModal") && !g("$bvModal")) {
                      var r = Ru(t, e, {
                        propsData: wp(
                          wp(
                            wp({}, Tp(Object(Gs.c)(q.Bb))),
                            {},
                            {
                              hideHeaderClose: !0,
                              hideHeader: !(n.title || n.titleHtml),
                            },
                            Object(h.j)(n, Object(h.h)(Sp))
                          ),
                          {},
                          {
                            lazy: !1,
                            busy: !1,
                            visible: !1,
                            noStacking: !1,
                            noEnforceFocus: !1,
                          }
                        ),
                      });
                      return (
                        Object(h.h)(Sp).forEach(function (t) {
                          Object(d.o)(n[t]) ||
                            (r.$slots[Sp[t]] = Object(kt.b)(n[t]));
                        }),
                        new Promise(function (t, e) {
                          var n = !1;
                          r.$once(E.gb, function () {
                            n ||
                              e(
                                new Error(
                                  "BootstrapVue MsgBox destroyed before resolve"
                                )
                              );
                          }),
                            r.$on(E.x, function (e) {
                              if (!e.defaultPrevented) {
                                var r = i(e);
                                e.defaultPrevented || ((n = !0), t(r));
                              }
                            });
                          var o = document.createElement("div");
                          document.body.appendChild(o), r.$mount(o);
                        })
                      );
                    }
                  },
                  i = function (t, e) {
                    var i =
                        arguments.length > 2 && void 0 !== arguments[2]
                          ? arguments[2]
                          : {},
                      r =
                        arguments.length > 3 && void 0 !== arguments[3]
                          ? arguments[3]
                          : null;
                    if (e && !g("$bvModal") && !m("$bvModal") && Object(d.f)(r))
                      return n(
                        t,
                        wp(wp({}, Tp(i)), {}, { msgBoxContent: e }),
                        r
                      );
                  },
                  r = (function () {
                    function t(e) {
                      !(function (t, e) {
                        if (!(t instanceof e))
                          throw new TypeError(
                            "Cannot call a class as a function"
                          );
                      })(this, t),
                        Object(h.a)(this, { _vm: e, _root: Object(kr.a)(e) }),
                        Object(h.d)(this, {
                          _vm: Object(h.l)(),
                          _root: Object(h.l)(),
                        });
                    }
                    var e, n;
                    return (
                      (e = t),
                      (n = [
                        {
                          key: "show",
                          value: function (t) {
                            if (t && this._root) {
                              for (
                                var e,
                                  n = arguments.length,
                                  i = new Array(n > 1 ? n - 1 : 0),
                                  r = 1;
                                r < n;
                                r++
                              )
                                i[r - 1] = arguments[r];
                              (e = this._root).$emit.apply(
                                e,
                                [Object(St.d)(q.Bb, "show"), t].concat(i)
                              );
                            }
                          },
                        },
                        {
                          key: "hide",
                          value: function (t) {
                            if (t && this._root) {
                              for (
                                var e,
                                  n = arguments.length,
                                  i = new Array(n > 1 ? n - 1 : 0),
                                  r = 1;
                                r < n;
                                r++
                              )
                                i[r - 1] = arguments[r];
                              (e = this._root).$emit.apply(
                                e,
                                [Object(St.d)(q.Bb, "hide"), t].concat(i)
                              );
                            }
                          },
                        },
                        {
                          key: "msgBoxOk",
                          value: function (t) {
                            var e =
                                arguments.length > 1 && void 0 !== arguments[1]
                                  ? arguments[1]
                                  : {},
                              n = wp(
                                wp({}, e),
                                {},
                                {
                                  okOnly: !0,
                                  okDisabled: !1,
                                  hideFooter: !1,
                                  msgBoxContent: t,
                                }
                              );
                            return i(this._vm, t, n, function () {
                              return !0;
                            });
                          },
                        },
                        {
                          key: "msgBoxConfirm",
                          value: function (t) {
                            var e =
                                arguments.length > 1 && void 0 !== arguments[1]
                                  ? arguments[1]
                                  : {},
                              n = wp(
                                wp({}, e),
                                {},
                                {
                                  okOnly: !1,
                                  okDisabled: !1,
                                  cancelDisabled: !1,
                                  hideFooter: !1,
                                }
                              );
                            return i(this._vm, t, n, function (t) {
                              var e = t.trigger;
                              return "ok" === e || ("cancel" !== e && null);
                            });
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
                t.mixin({
                  beforeCreate: function () {
                    this._bv__modal = new r(this);
                  },
                }),
                  Object(h.g)(t.prototype, "$bvModal") ||
                    Object(h.e)(t.prototype, "$bvModal", {
                      get: function () {
                        return (
                          (this && this._bv__modal) ||
                            b(
                              '"'.concat(
                                "$bvModal",
                                '" must be accessed from a Vue instance "this" context.'
                              ),
                              q.Bb
                            ),
                          this._bv__modal
                        );
                      },
                    });
              },
            },
          }),
        },
      });
    function Lp(t, e, n) {
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
    var qp = Object(B.d)(
        {
          align: Object(B.c)(j.u),
          cardHeader: Object(B.c)(j.g, !1),
          fill: Object(B.c)(j.g, !1),
          justified: Object(B.c)(j.g, !1),
          pills: Object(B.c)(j.g, !1),
          small: Object(B.c)(j.g, !1),
          tabs: Object(B.c)(j.g, !1),
          tag: Object(B.c)(j.u, "ul"),
          vertical: Object(B.c)(j.g, !1),
        },
        q.Db
      ),
      Ep = Object(F.c)({
        name: q.Db,
        functional: !0,
        props: qp,
        render: function (t, e) {
          var n,
            i,
            r = e.props,
            o = e.data,
            a = e.children,
            s = r.tabs,
            l = r.pills,
            c = r.vertical,
            d = r.align,
            u = r.cardHeader;
          return t(
            r.tag,
            Object(vt.a)(o, {
              staticClass: "nav",
              class:
                ((n = {
                  "nav-tabs": s,
                  "nav-pills": l && !s,
                  "card-header-tabs": !c && u && s,
                  "card-header-pills": !c && u && l && !s,
                  "flex-column": c,
                  "nav-fill": !c && r.fill,
                  "nav-justified": !c && r.justified,
                }),
                Lp(
                  n,
                  ((i = d),
                  "justify-content-".concat(
                    (i = "left" === i ? "start" : "right" === i ? "end" : i)
                  )),
                  !c && d
                ),
                Lp(n, "small", r.small),
                n),
            }),
            a
          );
        },
      });
    function jp(t, e) {
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
    function Pp(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? jp(Object(n), !0).forEach(function (e) {
              Rp(t, e, n[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
          : jp(Object(n)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(n, e)
              );
            });
      }
      return t;
    }
    function Rp(t, e, n) {
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
    var Ip = Object(h.j)(Xt, ["event", "routerTag"]),
      Wp = Object(B.d)(
        Object(h.m)(
          Pp(
            Pp({}, Ip),
            {},
            { linkAttrs: Object(B.c)(j.q, {}), linkClasses: Object(B.c)(j.e) }
          )
        ),
        q.Jb
      ),
      Np = Object(F.c)({
        name: q.Jb,
        functional: !0,
        props: Wp,
        render: function (t, e) {
          var n = e.props,
            i = e.data,
            r = e.listeners,
            o = e.children;
          return t(
            "li",
            Object(vt.a)(Object(h.j)(i, ["on"]), { staticClass: "nav-item" }),
            [
              t(
                Vt,
                {
                  staticClass: "nav-link",
                  class: n.linkClasses,
                  attrs: n.linkAttrs,
                  props: Object(B.e)(Ip, n),
                  on: r,
                },
                o
              ),
            ]
          );
        },
      }),
      Bp = Object(F.c)({
        name: q.Lb,
        functional: !0,
        props: {},
        render: function (t, e) {
          var n = e.data,
            i = e.children;
          return t("li", Object(vt.a)(n, { staticClass: "navbar-text" }), i);
        },
      });
    function Fp(t, e) {
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
    function $p(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? Fp(Object(n), !0).forEach(function (e) {
              Hp(t, e, n[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
          : Fp(Object(n)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(n, e)
              );
            });
      }
      return t;
    }
    function Hp(t, e, n) {
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
    var Yp = Object(h.j)(Po, ["inline"]),
      Up = Object(B.d)(
        Object(h.m)($p($p({}, Yp), {}, { formClass: Object(B.c)(j.e) })),
        q.Ib
      ),
      Xp = Object(F.c)({
        name: q.Ib,
        functional: !0,
        props: Up,
        render: function (t, e) {
          var n = e.props,
            i = e.data,
            r = e.children,
            o = e.listeners,
            a = t(
              Ro,
              {
                class: n.formClass,
                props: $p($p({}, Object(B.e)(Yp, n)), {}, { inline: !0 }),
                attrs: i.attrs,
                on: o,
              },
              r
            );
          return t(
            "li",
            Object(vt.a)(Object(h.j)(i, ["attrs", "on"]), {
              staticClass: "form-inline",
            }),
            [a]
          );
        },
      });
    function Vp(t, e) {
      (null == e || e > t.length) && (e = t.length);
      for (var n = 0, i = new Array(e); n < e; n++) i[n] = t[n];
      return i;
    }
    function Gp(t, e) {
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
    function Kp(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? Gp(Object(n), !0).forEach(function (e) {
              Zp(t, e, n[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
          : Gp(Object(n)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(n, e)
              );
            });
      }
      return t;
    }
    function Zp(t, e, n) {
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
    var Jp = Object(B.d)(
        Object(h.m)(
          Kp(
            Kp({}, Mn.b),
            Object(h.k)(
              ho,
              [].concat(
                (function (t) {
                  return (
                    (function (t) {
                      if (Array.isArray(t)) return Vp(t);
                    })(t) ||
                    (function (t) {
                      if (
                        ("undefined" != typeof Symbol &&
                          null != t[Symbol.iterator]) ||
                        null != t["@@iterator"]
                      )
                        return Array.from(t);
                    })(t) ||
                    (function (t, e) {
                      if (t) {
                        if ("string" == typeof t) return Vp(t, e);
                        var n = Object.prototype.toString.call(t).slice(8, -1);
                        return (
                          "Object" === n &&
                            t.constructor &&
                            (n = t.constructor.name),
                          "Map" === n || "Set" === n
                            ? Array.from(t)
                            : "Arguments" === n ||
                              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                            ? Vp(t, e)
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
                })(Object(h.h)(so)),
                [
                  "html",
                  "lazy",
                  "menuClass",
                  "noCaret",
                  "role",
                  "text",
                  "toggleClass",
                ]
              )
            )
          )
        ),
        q.Kb
      ),
      Qp = Object(F.c)({
        name: q.Kb,
        mixins: [Mn.a, lo, R.a],
        props: Jp,
        computed: {
          toggleId: function () {
            return this.safeId("_BV_toggle_");
          },
          menuId: function () {
            return this.safeId("_BV_toggle_menu_");
          },
          dropdownClasses: function () {
            return [
              this.directionClass,
              this.boundaryClass,
              { show: this.visible },
            ];
          },
          menuClasses: function () {
            return [
              this.menuClass,
              { "dropdown-menu-right": this.right, show: this.visible },
            ];
          },
          toggleClasses: function () {
            return [
              this.toggleClass,
              { "dropdown-toggle-no-caret": this.noCaret },
            ];
          },
        },
        render: function (t) {
          var e = this.toggleId,
            n = this.menuId,
            i = this.visible,
            r = this.hide,
            o = t(
              Vt,
              {
                staticClass: "nav-link dropdown-toggle",
                class: this.toggleClasses,
                props: {
                  href: "#".concat(this.id || ""),
                  disabled: this.disabled,
                },
                attrs: {
                  id: e,
                  role: "button",
                  "aria-haspopup": "true",
                  "aria-expanded": i ? "true" : "false",
                  "aria-controls": n,
                },
                on: {
                  mousedown: this.onMousedown,
                  click: this.toggle,
                  keydown: this.toggle,
                },
                ref: "toggle",
              },
              [
                this.normalizeSlot([P.f, P.gb]) ||
                  t("span", { domProps: Ce(this.html, this.text) }),
              ]
            ),
            a = t(
              "ul",
              {
                staticClass: "dropdown-menu",
                class: this.menuClasses,
                attrs: { tabindex: "-1", "aria-labelledby": e, id: n },
                on: { keydown: this.onKeydown },
                ref: "menu",
              },
              !this.lazy || i ? this.normalizeSlot(P.i, { hide: r }) : [t()]
            );
          return t(
            "li",
            {
              staticClass: "nav-item b-nav-dropdown dropdown",
              class: this.dropdownClasses,
              attrs: { id: this.safeId() },
            },
            [o, a]
          );
        },
      }),
      th = C({
        components: {
          BNav: Ep,
          BNavItem: Np,
          BNavText: Bp,
          BNavForm: Xp,
          BNavItemDropdown: Qp,
          BNavItemDd: Qp,
          BNavDropdown: Qp,
          BNavDd: Qp,
        },
        plugins: { DropdownPlugin: Ko },
      });
    function eh(t, e, n) {
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
    var nh = Object(B.d)(
        {
          fixed: Object(B.c)(j.u),
          print: Object(B.c)(j.g, !1),
          sticky: Object(B.c)(j.g, !1),
          tag: Object(B.c)(j.u, "nav"),
          toggleable: Object(B.c)(j.j, !1),
          type: Object(B.c)(j.u, "light"),
          variant: Object(B.c)(j.u),
        },
        q.Eb
      ),
      ih = Object(F.c)({
        name: q.Eb,
        mixins: [R.a],
        provide: function () {
          var t = this;
          return {
            getBvNavbar: function () {
              return t;
            },
          };
        },
        props: nh,
        computed: {
          breakpointClass: function () {
            var t = this.toggleable,
              e = Object(Gs.a)()[0],
              n = null;
            return (
              t && Object(d.n)(t) && t !== e
                ? (n = "navbar-expand-".concat(t))
                : !1 === t && (n = "navbar-expand"),
              n
            );
          },
        },
        render: function (t) {
          var e,
            n = this.tag,
            i = this.type,
            r = this.variant,
            o = this.fixed;
          return t(
            n,
            {
              staticClass: "navbar",
              class: [
                ((e = { "d-print": this.print, "sticky-top": this.sticky }),
                eh(e, "navbar-".concat(i), i),
                eh(e, "bg-".concat(r), r),
                eh(e, "fixed-".concat(o), o),
                e),
                this.breakpointClass,
              ],
              attrs: { role: Object(I.t)(n, "nav") ? null : "navigation" },
            },
            [this.normalizeSlot()]
          );
        },
      });
    function rh(t, e, n) {
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
    var oh = Object(B.d)(
        Object(h.k)(qp, ["tag", "fill", "justified", "align", "small"]),
        q.Gb
      ),
      ah = Object(F.c)({
        name: q.Gb,
        functional: !0,
        props: oh,
        render: function (t, e) {
          var n,
            i,
            r = e.props,
            o = e.data,
            a = e.children,
            s = r.align;
          return t(
            r.tag,
            Object(vt.a)(o, {
              staticClass: "navbar-nav",
              class:
                ((n = { "nav-fill": r.fill, "nav-justified": r.justified }),
                rh(
                  n,
                  ((i = s),
                  "justify-content-".concat(
                    (i = "left" === i ? "start" : "right" === i ? "end" : i)
                  )),
                  s
                ),
                rh(n, "small", r.small),
                n),
            }),
            a
          );
        },
      });
    function sh(t, e) {
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
    function lh(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? sh(Object(n), !0).forEach(function (e) {
              ch(t, e, n[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
          : sh(Object(n)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(n, e)
              );
            });
      }
      return t;
    }
    function ch(t, e, n) {
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
    var dh = Object(h.j)(Xt, ["event", "routerTag"]);
    (dh.href.default = void 0), (dh.to.default = void 0);
    var uh = Object(B.d)(
        Object(h.m)(lh(lh({}, dh), {}, { tag: Object(B.c)(j.u, "div") })),
        q.Fb
      ),
      ph = Object(F.c)({
        name: q.Fb,
        functional: !0,
        props: uh,
        render: function (t, e) {
          var n = e.props,
            i = e.data,
            r = e.children,
            o = n.to || n.href;
          return t(
            o ? Vt : n.tag,
            Object(vt.a)(i, {
              staticClass: "navbar-brand",
              props: o ? Object(B.e)(dh, n) : {},
            }),
            r
          );
        },
      }),
      hh = Object(St.e)(q.A, "state"),
      fh = Object(St.e)(q.A, "sync-state"),
      bh = Object(B.d)(
        {
          disabled: Object(B.c)(j.g, !1),
          label: Object(B.c)(j.u, "Toggle navigation"),
          target: Object(B.c)(j.f, void 0, !0),
        },
        q.Hb
      ),
      mh = Object(F.c)({
        name: q.Hb,
        directives: { VBToggle: Yr },
        mixins: [Dt.a, R.a],
        props: bh,
        data: function () {
          return { toggleState: !1 };
        },
        created: function () {
          this.listenOnRoot(hh, this.handleStateEvent),
            this.listenOnRoot(fh, this.handleStateEvent);
        },
        methods: {
          onClick: function (t) {
            this.disabled || this.$emit(E.f, t);
          },
          handleStateEvent: function (t, e) {
            t === this.target && (this.toggleState = e);
          },
        },
        render: function (t) {
          var e = this.disabled;
          return t(
            "button",
            {
              staticClass: "navbar-toggler",
              class: { disabled: e },
              directives: [{ name: "VBToggle", value: this.target }],
              attrs: { type: "button", disabled: e, "aria-label": this.label },
              on: { click: this.onClick },
            },
            [
              this.normalizeSlot(P.i, { expanded: this.toggleState }) ||
                t("span", {
                  staticClass: "".concat("navbar-toggler", "-icon"),
                }),
            ]
          );
        },
      }),
      gh = C({
        components: {
          BNavbar: ih,
          BNavbarNav: ah,
          BNavbarBrand: ph,
          BNavbarToggle: mh,
          BNavToggle: mh,
        },
        plugins: { NavPlugin: th, CollapsePlugin: Xr, DropdownPlugin: Ko },
      });
    function vh(t, e, n) {
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
    var _h = Object(B.d)(
        {
          label: Object(B.c)(j.u),
          role: Object(B.c)(j.u, "status"),
          small: Object(B.c)(j.g, !1),
          tag: Object(B.c)(j.u, "span"),
          type: Object(B.c)(j.u, "border"),
          variant: Object(B.c)(j.u),
        },
        q.cc
      ),
      yh = Object(F.c)({
        name: q.cc,
        functional: !0,
        props: _h,
        render: function (t, e) {
          var n,
            i = e.props,
            r = e.data,
            o = e.slots,
            a = e.scopedSlots,
            s = o(),
            l = a || {},
            c = Object(qn.b)(P.C, {}, l, s) || i.label;
          return (
            c && (c = t("span", { staticClass: "sr-only" }, c)),
            t(
              i.tag,
              Object(vt.a)(r, {
                attrs: {
                  role: c ? i.role || "status" : null,
                  "aria-hidden": c ? null : "true",
                },
                class:
                  ((n = {}),
                  vh(n, "spinner-".concat(i.type), i.type),
                  vh(n, "spinner-".concat(i.type, "-sm"), i.small),
                  vh(n, "text-".concat(i.variant), i.variant),
                  n),
              }),
              [c || t()]
            )
          );
        },
      });
    function Mh(t, e) {
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
    function Oh(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? Mh(Object(n), !0).forEach(function (e) {
              wh(t, e, n[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
          : Mh(Object(n)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(n, e)
              );
            });
      }
      return t;
    }
    function wh(t, e, n) {
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
    var Ah,
      xh = { top: 0, left: 0, bottom: 0, right: 0 },
      zh = Object(B.d)(
        {
          bgColor: Object(B.c)(j.u),
          blur: Object(B.c)(j.u, "2px"),
          fixed: Object(B.c)(j.g, !1),
          noCenter: Object(B.c)(j.g, !1),
          noFade: Object(B.c)(j.g, !1),
          noWrap: Object(B.c)(j.g, !1),
          opacity: Object(B.c)(j.p, 0.85, function (t) {
            var e = Object(N.b)(t, 0);
            return e >= 0 && e <= 1;
          }),
          overlayTag: Object(B.c)(j.u, "div"),
          rounded: Object(B.c)(j.j, !1),
          show: Object(B.c)(j.g, !1),
          spinnerSmall: Object(B.c)(j.g, !1),
          spinnerType: Object(B.c)(j.u, "border"),
          spinnerVariant: Object(B.c)(j.u),
          variant: Object(B.c)(j.u, "light"),
          wrapTag: Object(B.c)(j.u, "div"),
          zIndex: Object(B.c)(j.p, 10),
        },
        q.Mb
      ),
      Ch = C({
        components: {
          BOverlay: Object(F.c)({
            name: q.Mb,
            mixins: [R.a],
            props: zh,
            computed: {
              computedRounded: function () {
                var t = this.rounded;
                return !0 === t || "" === t
                  ? "rounded"
                  : t
                  ? "rounded-".concat(t)
                  : "";
              },
              computedVariant: function () {
                var t = this.variant;
                return t && !this.bgColor ? "bg-".concat(t) : "";
              },
              slotScope: function () {
                return {
                  spinnerType: this.spinnerType || null,
                  spinnerVariant: this.spinnerVariant || null,
                  spinnerSmall: this.spinnerSmall,
                };
              },
            },
            methods: {
              defaultOverlayFn: function (t) {
                var e = t.spinnerType,
                  n = t.spinnerVariant,
                  i = t.spinnerSmall;
                return this.$createElement(yh, {
                  props: { type: e, variant: n, small: i },
                });
              },
            },
            render: function (t) {
              var e = this,
                n = this.show,
                i = this.fixed,
                r = this.noFade,
                o = this.noWrap,
                a = this.slotScope,
                s = t();
              if (n) {
                var l = t("div", {
                    staticClass: "position-absolute",
                    class: [this.computedVariant, this.computedRounded],
                    style: Oh(
                      Oh({}, xh),
                      {},
                      {
                        opacity: this.opacity,
                        backgroundColor: this.bgColor || null,
                        backdropFilter: this.blur
                          ? "blur(".concat(this.blur, ")")
                          : null,
                      }
                    ),
                  }),
                  c = t(
                    "div",
                    {
                      staticClass: "position-absolute",
                      style: this.noCenter
                        ? Oh({}, xh)
                        : {
                            top: "50%",
                            left: "50%",
                            transform: "translateX(-50%) translateY(-50%)",
                          },
                    },
                    [this.normalizeSlot(P.V, a) || this.defaultOverlayFn(a)]
                  );
                s = t(
                  this.overlayTag,
                  {
                    staticClass: "b-overlay",
                    class: {
                      "position-absolute": !o || (o && !i),
                      "position-fixed": o && i,
                    },
                    style: Oh(Oh({}, xh), {}, { zIndex: this.zIndex || 10 }),
                    on: {
                      click: function (t) {
                        return e.$emit(E.f, t);
                      },
                    },
                    key: "overlay",
                  },
                  [l, c]
                );
              }
              return (
                (s = t(
                  H.a,
                  {
                    props: { noFade: r, appear: !0 },
                    on: {
                      "after-enter": function () {
                        return e.$emit(E.V);
                      },
                      "after-leave": function () {
                        return e.$emit(E.w);
                      },
                    },
                  },
                  [s]
                )),
                o
                  ? s
                  : t(
                      this.wrapTag,
                      {
                        staticClass: "b-overlay-wrap position-relative",
                        attrs: { "aria-busy": n ? "true" : null },
                      },
                      o ? [s] : [this.normalizeSlot(), s]
                    )
              );
            },
          }),
        },
      });
    function kh(t, e) {
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
    function Sh(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? kh(Object(n), !0).forEach(function (e) {
              Th(t, e, n[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
          : kh(Object(n)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(n, e)
              );
            });
      }
      return t;
    }
    function Th(t, e, n) {
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
    var Dh = Object(W.a)("value", {
        type: j.i,
        defaultValue: null,
        validator: function (t) {
          return !(!Object(d.g)(t) && Object(N.c)(t, 0) < 1 && (b(0, q.Nb), 1));
        },
      }),
      Lh = Dh.mixin,
      qh = Dh.props,
      Eh = Dh.prop,
      jh = Dh.event,
      Ph = function (t) {
        var e = Object(N.c)(t) || 1;
        return e < 1 ? 5 : e;
      },
      Rh = function (t, e) {
        var n = Object(N.c)(t) || 1;
        return n > e ? e : n < 1 ? 1 : n;
      },
      Ih = function (t) {
        if (t.keyCode === Ct.l)
          return (
            Object(St.f)(t, { immediatePropagation: !0 }),
            t.currentTarget.click(),
            !1
          );
      },
      Wh = Object(B.d)(
        Object(h.m)(
          Sh(
            Sh({}, qh),
            {},
            {
              align: Object(B.c)(j.u, "left"),
              ariaLabel: Object(B.c)(j.u, "Pagination"),
              disabled: Object(B.c)(j.g, !1),
              ellipsisClass: Object(B.c)(j.e),
              ellipsisText: Object(B.c)(j.u, "…"),
              firstClass: Object(B.c)(j.e),
              firstNumber: Object(B.c)(j.g, !1),
              firstText: Object(B.c)(j.u, "«"),
              hideEllipsis: Object(B.c)(j.g, !1),
              hideGotoEndButtons: Object(B.c)(j.g, !1),
              labelFirstPage: Object(B.c)(j.u, "Go to first page"),
              labelLastPage: Object(B.c)(j.u, "Go to last page"),
              labelNextPage: Object(B.c)(j.u, "Go to next page"),
              labelPage: Object(B.c)(j.m, "Go to page"),
              labelPrevPage: Object(B.c)(j.u, "Go to previous page"),
              lastClass: Object(B.c)(j.e),
              lastNumber: Object(B.c)(j.g, !1),
              lastText: Object(B.c)(j.u, "»"),
              limit: Object(B.c)(j.p, 5, function (t) {
                return !(Object(N.c)(t, 0) < 1 && (b(0, q.Nb), 1));
              }),
              nextClass: Object(B.c)(j.e),
              nextText: Object(B.c)(j.u, "›"),
              pageClass: Object(B.c)(j.e),
              pills: Object(B.c)(j.g, !1),
              prevClass: Object(B.c)(j.e),
              prevText: Object(B.c)(j.u, "‹"),
              size: Object(B.c)(j.u),
            }
          )
        ),
        "pagination"
      ),
      Nh = Object(F.c)({
        mixins: [Lh, R.a],
        props: Wh,
        data: function () {
          var t = Object(N.c)(this[Eh], 0);
          return {
            currentPage: (t = t > 0 ? t : -1),
            localNumberOfPages: 1,
            localLimit: 5,
          };
        },
        computed: {
          btnSize: function () {
            var t = this.size;
            return t ? "pagination-".concat(t) : "";
          },
          alignment: function () {
            var t = this.align;
            return "center" === t
              ? "justify-content-center"
              : "end" === t || "right" === t
              ? "justify-content-end"
              : "fill" === t
              ? "text-center"
              : "";
          },
          styleClass: function () {
            return this.pills ? "b-pagination-pills" : "";
          },
          computedCurrentPage: function () {
            return Rh(this.currentPage, this.localNumberOfPages);
          },
          paginationParams: function () {
            var t = this.localLimit,
              e = this.localNumberOfPages,
              n = this.computedCurrentPage,
              i = this.hideEllipsis,
              r = this.firstNumber,
              o = this.lastNumber,
              a = !1,
              s = !1,
              l = t,
              c = 1;
            e <= t
              ? (l = e)
              : n < t - 1 && t > 3
              ? ((i && !o) || ((s = !0), (l = t - (r ? 0 : 1))),
                (l = Object(it.e)(l, t)))
              : e - n + 2 < t && t > 3
              ? ((i && !r) || ((a = !0), (l = t - (o ? 0 : 1))),
                (c = e - l + 1))
              : (t > 3 &&
                  ((l = t - (i ? 0 : 2)), (a = !(i && !r)), (s = !(i && !o))),
                (c = n - Object(it.c)(l / 2))),
              c < 1
                ? ((c = 1), (a = !1))
                : c > e - l && ((c = e - l + 1), (s = !1)),
              a && r && c < 4 && ((l += 2), (c = 1), (a = !1));
            var d = c + l - 1;
            return (
              s && o && d > e - 3 && ((l += d === e - 2 ? 2 : 3), (s = !1)),
              t <= 3 &&
                (r && 1 === c
                  ? (l = Object(it.e)(l + 1, e, t + 1))
                  : o &&
                    e === c + l - 1 &&
                    ((c = Object(it.d)(c - 1, 1)),
                    (l = Object(it.e)(e - c + 1, e, t + 1)))),
              {
                showFirstDots: a,
                showLastDots: s,
                numberOfLinks: (l = Object(it.e)(l, e - c + 1)),
                startNumber: c,
              }
            );
          },
          pageList: function () {
            var t = this.paginationParams,
              e = t.numberOfLinks,
              n = t.startNumber,
              i = this.computedCurrentPage,
              r = (function (t, e) {
                return Object(kt.c)(e, function (e, n) {
                  return { number: t + n, classes: null };
                });
              })(n, e);
            if (r.length > 3) {
              var o = i - n,
                a = "bv-d-xs-down-none";
              if (0 === o) for (var s = 3; s < r.length; s++) r[s].classes = a;
              else if (o === r.length - 1)
                for (var l = 0; l < r.length - 3; l++) r[l].classes = a;
              else {
                for (var c = 0; c < o - 1; c++) r[c].classes = a;
                for (var d = r.length - 1; d > o + 1; d--) r[d].classes = a;
              }
            }
            return r;
          },
        },
        watch:
          ((Ah = {}),
          Th(Ah, Eh, function (t, e) {
            t !== e && (this.currentPage = Rh(t, this.localNumberOfPages));
          }),
          Th(Ah, "currentPage", function (t, e) {
            t !== e && this.$emit(jh, t > 0 ? t : null);
          }),
          Th(Ah, "limit", function (t, e) {
            t !== e && (this.localLimit = Ph(t));
          }),
          Ah),
        created: function () {
          var t = this;
          (this.localLimit = Ph(this.limit)),
            this.$nextTick(function () {
              t.currentPage =
                t.currentPage > t.localNumberOfPages
                  ? t.localNumberOfPages
                  : t.currentPage;
            });
        },
        methods: {
          handleKeyNav: function (t) {
            var e = t.keyCode,
              n = t.shiftKey;
            this.isNav ||
              (e === Ct.h || e === Ct.m
                ? (Object(St.f)(t, { propagation: !1 }),
                  n ? this.focusFirst() : this.focusPrev())
                : (e !== Ct.k && e !== Ct.c) ||
                  (Object(St.f)(t, { propagation: !1 }),
                  n ? this.focusLast() : this.focusNext()));
          },
          getButtons: function () {
            return Object(I.F)(
              "button.page-link, a.page-link",
              this.$el
            ).filter(function (t) {
              return Object(I.u)(t);
            });
          },
          focusCurrent: function () {
            var t = this;
            this.$nextTick(function () {
              var e = t.getButtons().find(function (e) {
                return (
                  Object(N.c)(Object(I.h)(e, "aria-posinset"), 0) ===
                  t.computedCurrentPage
                );
              });
              Object(I.d)(e) || t.focusFirst();
            });
          },
          focusFirst: function () {
            var t = this;
            this.$nextTick(function () {
              var e = t.getButtons().find(function (t) {
                return !Object(I.r)(t);
              });
              Object(I.d)(e);
            });
          },
          focusLast: function () {
            var t = this;
            this.$nextTick(function () {
              var e = t
                .getButtons()
                .reverse()
                .find(function (t) {
                  return !Object(I.r)(t);
                });
              Object(I.d)(e);
            });
          },
          focusPrev: function () {
            var t = this;
            this.$nextTick(function () {
              var e = t.getButtons(),
                n = e.indexOf(Object(I.g)());
              n > 0 && !Object(I.r)(e[n - 1]) && Object(I.d)(e[n - 1]);
            });
          },
          focusNext: function () {
            var t = this;
            this.$nextTick(function () {
              var e = t.getButtons(),
                n = e.indexOf(Object(I.g)());
              n < e.length - 1 &&
                !Object(I.r)(e[n + 1]) &&
                Object(I.d)(e[n + 1]);
            });
          },
        },
        render: function (t) {
          var e = this,
            n = lt(this),
            i = n.disabled,
            r = n.labelPage,
            o = n.ariaLabel,
            a = n.isNav,
            s = n.localNumberOfPages,
            l = n.computedCurrentPage,
            c = this.pageList.map(function (t) {
              return t.number;
            }),
            u = this.paginationParams,
            p = u.showFirstDots,
            h = u.showLastDots,
            f = "fill" === this.align,
            b = [],
            m = function (t) {
              return t === l;
            },
            g = this.currentPage < 1,
            v = function (n, r, o, l, c, d, u) {
              var p = i || m(d) || g || n < 1 || n > s,
                h = n < 1 ? 1 : n > s ? s : n,
                b = { disabled: p, page: h, index: h - 1 },
                v = e.normalizeSlot(o, b) || Object(ct.g)(l) || t(),
                _ = t(
                  p ? "span" : a ? Vt : "button",
                  {
                    staticClass: "page-link",
                    class: { "flex-grow-1": !a && !p && f },
                    props: p || !a ? {} : e.linkProps(n),
                    attrs: {
                      role: a ? null : "menuitem",
                      type: a || p ? null : "button",
                      tabindex: p || a ? null : "-1",
                      "aria-label": r,
                      "aria-controls": lt(e).ariaControls || null,
                      "aria-disabled": p ? "true" : null,
                    },
                    on: p
                      ? {}
                      : {
                          "!click": function (t) {
                            e.onClick(t, n);
                          },
                          keydown: Ih,
                        },
                  },
                  [v]
                );
              return t(
                "li",
                {
                  key: u,
                  staticClass: "page-item",
                  class: [
                    { disabled: p, "flex-fill": f, "d-flex": f && !a && !p },
                    c,
                  ],
                  attrs: {
                    role: a ? null : "presentation",
                    "aria-hidden": p ? "true" : null,
                  },
                },
                [_]
              );
            },
            _ = function (n) {
              return t(
                "li",
                {
                  staticClass: "page-item",
                  class: [
                    "disabled",
                    "bv-d-xs-down-none",
                    f ? "flex-fill" : "",
                    e.ellipsisClass,
                  ],
                  attrs: { role: "separator" },
                  key: "ellipsis-".concat(n ? "last" : "first"),
                },
                [
                  t("span", { staticClass: "page-link" }, [
                    e.normalizeSlot(P.m) || Object(ct.g)(e.ellipsisText) || t(),
                  ]),
                ]
              );
            },
            y = function (n, o) {
              var l = n.number,
                c = m(l) && !g,
                u = i ? null : c || (g && 0 === o) ? "0" : "-1",
                p = {
                  role: a ? null : "menuitemradio",
                  type: a || i ? null : "button",
                  "aria-disabled": i ? "true" : null,
                  "aria-controls": lt(e).ariaControls || null,
                  "aria-label": Object(B.b)(r)
                    ? r(l)
                    : "".concat(Object(d.f)(r) ? r() : r, " ").concat(l),
                  "aria-checked": a ? null : c ? "true" : "false",
                  "aria-current": a && c ? "page" : null,
                  "aria-posinset": a ? null : l,
                  "aria-setsize": a ? null : s,
                  tabindex: a ? null : u,
                },
                h = Object(ct.g)(e.makePage(l)),
                b = {
                  page: l,
                  index: l - 1,
                  content: h,
                  active: c,
                  disabled: i,
                },
                v = t(
                  i ? "span" : a ? Vt : "button",
                  {
                    props: i || !a ? {} : e.linkProps(l),
                    staticClass: "page-link",
                    class: { "flex-grow-1": !a && !i && f },
                    attrs: p,
                    on: i
                      ? {}
                      : {
                          "!click": function (t) {
                            e.onClick(t, l);
                          },
                          keydown: Ih,
                        },
                  },
                  [e.normalizeSlot(P.W, b) || h]
                );
              return t(
                "li",
                {
                  staticClass: "page-item",
                  class: [
                    {
                      disabled: i,
                      active: c,
                      "flex-fill": f,
                      "d-flex": f && !a && !i,
                    },
                    n.classes,
                    e.pageClass,
                  ],
                  attrs: { role: a ? null : "presentation" },
                  key: "page-".concat(l),
                },
                [v]
              );
            },
            M = t();
          this.firstNumber ||
            this.hideGotoEndButtons ||
            (M = v(
              1,
              this.labelFirstPage,
              P.r,
              this.firstText,
              this.firstClass,
              1,
              "pagination-goto-first"
            )),
            b.push(M),
            b.push(
              v(
                l - 1,
                this.labelPrevPage,
                P.Z,
                this.prevText,
                this.prevClass,
                1,
                "pagination-goto-prev"
              )
            ),
            b.push(this.firstNumber && 1 !== c[0] ? y({ number: 1 }, 0) : t()),
            b.push(p ? _(!1) : t()),
            this.pageList.forEach(function (t, n) {
              var i = p && e.firstNumber && 1 !== c[0] ? 1 : 0;
              b.push(y(t, n + i));
            }),
            b.push(h ? _(!0) : t()),
            b.push(
              this.lastNumber && c[c.length - 1] !== s
                ? y({ number: s }, -1)
                : t()
            ),
            b.push(
              v(
                l + 1,
                this.labelNextPage,
                P.U,
                this.nextText,
                this.nextClass,
                s,
                "pagination-goto-next"
              )
            );
          var O = t();
          this.lastNumber ||
            this.hideGotoEndButtons ||
            (O = v(
              s,
              this.labelLastPage,
              P.D,
              this.lastText,
              this.lastClass,
              s,
              "pagination-goto-last"
            )),
            b.push(O);
          var w = t(
            "ul",
            {
              staticClass: "pagination",
              class: [
                "b-pagination",
                this.btnSize,
                this.alignment,
                this.styleClass,
              ],
              attrs: {
                role: a ? null : "menubar",
                "aria-disabled": i ? "true" : "false",
                "aria-label": a ? null : o || null,
              },
              on: a ? {} : { keydown: this.handleKeyNav },
              ref: "ul",
            },
            b
          );
          return a
            ? t(
                "nav",
                {
                  attrs: {
                    "aria-disabled": i ? "true" : null,
                    "aria-hidden": i ? "true" : "false",
                    "aria-label": (a && o) || null,
                  },
                },
                [w]
              )
            : w;
        },
      });
    function Bh(t, e) {
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
    function Fh(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? Bh(Object(n), !0).forEach(function (e) {
              $h(t, e, n[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
          : Bh(Object(n)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(n, e)
              );
            });
      }
      return t;
    }
    function $h(t, e, n) {
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
    var Hh = function (t) {
        return Object(it.d)(Object(N.c)(t) || 20, 1);
      },
      Yh = function (t) {
        return Object(it.d)(Object(N.c)(t) || 0, 0);
      },
      Uh = Object(B.d)(
        Object(h.m)(
          Fh(
            Fh({}, Wh),
            {},
            {
              ariaControls: Object(B.c)(j.u),
              perPage: Object(B.c)(j.p, 20),
              totalRows: Object(B.c)(j.p, 0),
            }
          )
        ),
        q.Nb
      ),
      Xh = C({
        components: {
          BPagination: Object(F.c)({
            name: q.Nb,
            mixins: [Nh],
            props: Uh,
            computed: {
              numberOfPages: function () {
                var t = Object(it.b)(Yh(this.totalRows) / Hh(this.perPage));
                return t < 1 ? 1 : t;
              },
              pageSizeNumberOfPages: function () {
                return {
                  perPage: Hh(this.perPage),
                  totalRows: Yh(this.totalRows),
                  numberOfPages: this.numberOfPages,
                };
              },
            },
            watch: {
              pageSizeNumberOfPages: function (t, e) {
                Object(d.p)(e) ||
                  (((t.perPage !== e.perPage && t.totalRows === e.totalRows) ||
                    (t.numberOfPages !== e.numberOfPages &&
                      this.currentPage > t.numberOfPages)) &&
                    (this.currentPage = 1)),
                  (this.localNumberOfPages = t.numberOfPages);
              },
            },
            created: function () {
              var t = this;
              this.localNumberOfPages = this.numberOfPages;
              var e = Object(N.c)(this[Eh], 0);
              e > 0
                ? (this.currentPage = e)
                : this.$nextTick(function () {
                    t.currentPage = 0;
                  });
            },
            methods: {
              onClick: function (t, e) {
                var n = this;
                if (e !== this.currentPage) {
                  var i = t.target,
                    r = new Zr(E.G, {
                      cancelable: !0,
                      vueTarget: this,
                      target: i,
                    });
                  this.$emit(r.type, r, e),
                    r.defaultPrevented ||
                      ((this.currentPage = e),
                      this.$emit(E.d, this.currentPage),
                      this.$nextTick(function () {
                        Object(I.u)(i) && n.$el.contains(i)
                          ? Object(I.d)(i)
                          : n.focusCurrent();
                      }));
                }
              },
              makePage: function (t) {
                return t;
              },
              linkProps: function () {
                return {};
              },
            },
          }),
        },
      });
    function Vh(t, e) {
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
    function Gh(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? Vh(Object(n), !0).forEach(function (e) {
              Kh(t, e, n[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
          : Vh(Object(n)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(n, e)
              );
            });
      }
      return t;
    }
    function Kh(t, e, n) {
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
    var Zh = Object(h.j)(Xt, ["event", "routerTag"]),
      Jh = Object(B.d)(
        Object(h.m)(
          Gh(
            Gh(Gh({}, Wh), Zh),
            {},
            {
              baseUrl: Object(B.c)(j.u, "/"),
              linkGen: Object(B.c)(j.l),
              noPageDetect: Object(B.c)(j.g, !1),
              numberOfPages: Object(B.c)(j.p, 1, function (t) {
                return !(Object(N.c)(t, 0) < 1 && (b(0, q.Ob), 1));
              }),
              pageGen: Object(B.c)(j.l),
              pages: Object(B.c)(j.b),
              useRouter: Object(B.c)(j.g, !1),
            }
          )
        ),
        q.Ob
      ),
      Qh = C({
        components: {
          BPaginationNav: Object(F.c)({
            name: q.Ob,
            mixins: [Nh],
            props: Jh,
            computed: {
              isNav: function () {
                return !0;
              },
              computedValue: function () {
                var t = Object(N.c)(this.value, 0);
                return t < 1 ? null : t;
              },
            },
            watch: {
              numberOfPages: function () {
                var t = this;
                this.$nextTick(function () {
                  t.setNumberOfPages();
                });
              },
              pages: function () {
                var t = this;
                this.$nextTick(function () {
                  t.setNumberOfPages();
                });
              },
            },
            created: function () {
              this.setNumberOfPages();
            },
            mounted: function () {
              var t = this;
              this.$router &&
                this.$watch("$route", function () {
                  t.$nextTick(function () {
                    Object(I.D)(function () {
                      t.guessCurrentPage();
                    });
                  });
                });
            },
            methods: {
              setNumberOfPages: function () {
                var t,
                  e = this;
                Object(d.a)(this.pages) && this.pages.length > 0
                  ? (this.localNumberOfPages = this.pages.length)
                  : (this.localNumberOfPages =
                      ((t = this.numberOfPages),
                      Object(it.d)(Object(N.c)(t, 0), 1))),
                  this.$nextTick(function () {
                    e.guessCurrentPage();
                  });
              },
              onClick: function (t, e) {
                var n = this;
                if (e !== this.currentPage) {
                  var i = t.currentTarget || t.target,
                    r = new Zr(E.G, {
                      cancelable: !0,
                      vueTarget: this,
                      target: i,
                    });
                  this.$emit(r.type, r, e),
                    r.defaultPrevented ||
                      (Object(I.D)(function () {
                        (n.currentPage = e), n.$emit(E.d, e);
                      }),
                      this.$nextTick(function () {
                        Object(I.c)(i);
                      }));
                }
              },
              getPageInfo: function (t) {
                if (
                  !Object(d.a)(this.pages) ||
                  0 === this.pages.length ||
                  Object(d.o)(this.pages[t - 1])
                ) {
                  var e = "".concat(this.baseUrl).concat(t);
                  return {
                    link: this.useRouter ? { path: e } : e,
                    text: Object(ct.g)(t),
                  };
                }
                var n = this.pages[t - 1];
                if (Object(d.j)(n)) {
                  var i = n.link;
                  return {
                    link: Object(d.j)(i) ? i : this.useRouter ? { path: i } : i,
                    text: Object(ct.g)(n.text || t),
                  };
                }
                return { link: Object(ct.g)(n), text: Object(ct.g)(t) };
              },
              makePage: function (t) {
                var e = this.pageGen,
                  n = this.getPageInfo(t);
                return Object(B.b)(e) ? e(t, n) : n.text;
              },
              makeLink: function (t) {
                var e = this.linkGen,
                  n = this.getPageInfo(t);
                return Object(B.b)(e) ? e(t, n) : n.link;
              },
              linkProps: function (t) {
                var e = Object(B.e)(Zh, this),
                  n = this.makeLink(t);
                return (
                  this.useRouter || Object(d.j)(n) ? (e.to = n) : (e.href = n),
                  e
                );
              },
              resolveLink: function () {
                var t,
                  e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : "";
                try {
                  ((t = document.createElement("a")).href = gt(
                    { to: e },
                    "a",
                    "/",
                    "/"
                  )),
                    document.body.appendChild(t);
                  var n = t,
                    i = n.pathname,
                    r = n.hash,
                    o = n.search;
                  return (
                    document.body.removeChild(t),
                    { path: i, hash: r, query: ft(o) }
                  );
                } catch (e) {
                  try {
                    t && t.parentNode && t.parentNode.removeChild(t);
                  } catch (t) {}
                  return {};
                }
              },
              resolveRoute: function () {
                var t =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : "";
                try {
                  var e = this.$router.resolve(t, this.$route).route;
                  return { path: e.path, hash: e.hash, query: e.query };
                } catch (t) {
                  return {};
                }
              },
              guessCurrentPage: function () {
                var t = this.$router,
                  e = this.$route,
                  n = this.computedValue;
                if (!this.noPageDetect && !n && (o.i || (!o.i && t)))
                  for (
                    var i =
                        t && e
                          ? { path: e.path, hash: e.hash, query: e.query }
                          : {},
                      r = o.i ? window.location || document.location : null,
                      a = r
                        ? {
                            path: r.pathname,
                            hash: r.hash,
                            query: ft(r.search),
                          }
                        : {},
                      s = 1;
                    !n && s <= this.localNumberOfPages;
                    s++
                  ) {
                    var l = this.makeLink(s);
                    n =
                      t && (Object(d.j)(l) || this.useRouter)
                        ? Object(yn.a)(this.resolveRoute(l), i)
                          ? s
                          : null
                        : o.i
                        ? Object(yn.a)(this.resolveLink(l), a)
                          ? s
                          : null
                        : -1;
                  }
                this.currentPage = n > 0 ? n : 0;
              },
            },
          }),
        },
      }),
      tf = {
        AUTO: "auto",
        TOP: "top",
        RIGHT: "right",
        BOTTOM: "bottom",
        LEFT: "left",
        TOPLEFT: "top",
        TOPRIGHT: "top",
        RIGHTTOP: "right",
        RIGHTBOTTOM: "right",
        BOTTOMLEFT: "bottom",
        BOTTOMRIGHT: "bottom",
        LEFTTOP: "left",
        LEFTBOTTOM: "left",
      },
      ef = {
        AUTO: 0,
        TOPLEFT: -1,
        TOP: 0,
        TOPRIGHT: 1,
        RIGHTTOP: -1,
        RIGHT: 0,
        RIGHTBOTTOM: 1,
        BOTTOMLEFT: -1,
        BOTTOM: 0,
        BOTTOMRIGHT: 1,
        LEFTTOP: -1,
        LEFT: 0,
        LEFTBOTTOM: 1,
      },
      nf = {
        arrowPadding: Object(B.c)(j.p, 6),
        boundary: Object(B.c)([Gr.c, j.u], "scrollParent"),
        boundaryPadding: Object(B.c)(j.p, 5),
        fallbackPlacement: Object(B.c)(j.f, "flip"),
        offset: Object(B.c)(j.p, 0),
        placement: Object(B.c)(j.u, "top"),
        target: Object(B.c)([Gr.c, Gr.d]),
      },
      rf = Object(F.c)({
        name: q.Sb,
        mixins: [Du],
        props: nf,
        data: function () {
          return {
            noFade: !1,
            localShow: !0,
            attachment: this.getAttachment(this.placement),
          };
        },
        computed: {
          templateType: function () {
            return "unknown";
          },
          popperConfig: function () {
            var t = this,
              e = this.placement;
            return {
              placement: this.getAttachment(e),
              modifiers: {
                offset: { offset: this.getOffset(e) },
                flip: { behavior: this.fallbackPlacement },
                arrow: { element: ".arrow" },
                preventOverflow: {
                  padding: this.boundaryPadding,
                  boundariesElement: this.boundary,
                },
              },
              onCreate: function (e) {
                e.originalPlacement !== e.placement &&
                  t.popperPlacementChange(e);
              },
              onUpdate: function (e) {
                t.popperPlacementChange(e);
              },
            };
          },
        },
        created: function () {
          var t = this;
          (this.$_popper = null),
            (this.localShow = !0),
            this.$on(E.U, function (e) {
              t.popperCreate(e);
            });
          var e = function () {
            t.$nextTick(function () {
              Object(I.D)(function () {
                t.$destroy();
              });
            });
          };
          this.bvParent.$once(E.gb, e), this.$once(E.w, e);
        },
        beforeMount: function () {
          this.attachment = this.getAttachment(this.placement);
        },
        updated: function () {
          this.updatePopper();
        },
        beforeDestroy: function () {
          this.destroyPopper();
        },
        destroyed: function () {
          var t = this.$el;
          t && t.parentNode && t.parentNode.removeChild(t);
        },
        methods: {
          hide: function () {
            this.localShow = !1;
          },
          getAttachment: function (t) {
            return tf[String(t).toUpperCase()] || "auto";
          },
          getOffset: function (t) {
            if (!this.offset) {
              var e = this.$refs.arrow || Object(I.E)(".arrow", this.$el),
                n =
                  Object(N.b)(Object(I.k)(e).width, 0) +
                  Object(N.b)(this.arrowPadding, 0);
              switch (ef[String(t).toUpperCase()] || 0) {
                case 1:
                  return "+50%p - ".concat(n, "px");
                case -1:
                  return "-50%p + ".concat(n, "px");
                default:
                  return 0;
              }
            }
            return this.offset;
          },
          popperCreate: function (t) {
            this.destroyPopper(),
              (this.$_popper = new Vr.a(this.target, t, this.popperConfig));
          },
          destroyPopper: function () {
            this.$_popper && this.$_popper.destroy(), (this.$_popper = null);
          },
          updatePopper: function () {
            this.$_popper && this.$_popper.scheduleUpdate();
          },
          popperPlacementChange: function (t) {
            this.attachment = this.getAttachment(t.placement);
          },
          renderTemplate: function (t) {
            return t("div");
          },
        },
        render: function (t) {
          var e = this,
            n = this.noFade;
          return t(
            H.a,
            {
              props: { appear: !0, noFade: n },
              on: {
                beforeEnter: function (t) {
                  return e.$emit(E.U, t);
                },
                afterEnter: function (t) {
                  return e.$emit(E.V, t);
                },
                beforeLeave: function (t) {
                  return e.$emit(E.x, t);
                },
                afterLeave: function (t) {
                  return e.$emit(E.w, t);
                },
              },
            },
            [this.localShow ? this.renderTemplate(t) : t()]
          );
        },
      });
    function of(t, e) {
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
    function af(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? of(Object(n), !0).forEach(function (e) {
              sf(t, e, n[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
          : of(Object(n)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(n, e)
              );
            });
      }
      return t;
    }
    function sf(t, e, n) {
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
    var lf = { html: Object(B.c)(j.g, !1), id: Object(B.c)(j.u) },
      cf = Object(F.c)({
        name: q.uc,
        extends: rf,
        mixins: [qu],
        props: lf,
        data: function () {
          return {
            title: "",
            content: "",
            variant: null,
            customClass: null,
            interactive: !0,
          };
        },
        computed: {
          templateType: function () {
            return "tooltip";
          },
          templateClasses: function () {
            var t,
              e = this.variant,
              n = this.attachment,
              i = this.templateType;
            return [
              ((t = { noninteractive: !this.interactive }),
              sf(t, "b-".concat(i, "-").concat(e), e),
              sf(t, "bs-".concat(i, "-").concat(n), n),
              t),
              this.customClass,
            ];
          },
          templateAttributes: function () {
            var t = this.id;
            return af(
              af({}, this.bvParent.bvParent.$attrs),
              {},
              { id: t, role: "tooltip", tabindex: "-1" },
              this.scopedStyleAttrs
            );
          },
          templateListeners: function () {
            var t = this;
            return {
              mouseenter: function (e) {
                t.$emit(E.B, e);
              },
              mouseleave: function (e) {
                t.$emit(E.C, e);
              },
              focusin: function (e) {
                t.$emit(E.t, e);
              },
              focusout: function (e) {
                t.$emit(E.u, e);
              },
            };
          },
        },
        methods: {
          renderTemplate: function (t) {
            var e = this.title,
              n = Object(d.f)(e) ? e({}) : e,
              i = this.html && !Object(d.f)(e) ? { innerHTML: e } : {};
            return t(
              "div",
              {
                staticClass: "tooltip b-tooltip",
                class: this.templateClasses,
                attrs: this.templateAttributes,
                on: this.templateListeners,
              },
              [
                t("div", { staticClass: "arrow", ref: "arrow" }),
                t("div", { staticClass: "tooltip-inner", domProps: i }, [n]),
              ]
            );
          },
        },
      });
    function df(t, e) {
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
    function uf(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? df(Object(n), !0).forEach(function (e) {
              pf(t, e, n[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
          : df(Object(n)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(n, e)
              );
            });
      }
      return t;
    }
    function pf(t, e, n) {
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
    var hf,
      ff,
      bf = ".modal-content",
      mf = Object(St.e)(q.Bb, E.w),
      gf = [bf, ".b-sidebar"].join(", "),
      vf = {
        title: "",
        content: "",
        variant: null,
        customClass: null,
        triggers: "",
        placement: "auto",
        fallbackPlacement: "flip",
        target: null,
        container: null,
        noFade: !1,
        boundary: "scrollParent",
        boundaryPadding: 5,
        offset: 0,
        delay: 0,
        arrowPadding: 6,
        interactive: !0,
        disabled: !1,
        id: null,
        html: !1,
      },
      _f = Object(F.c)({
        name: q.tc,
        mixins: [Dt.a, Du],
        data: function () {
          return uf(
            uf({}, vf),
            {},
            {
              activeTrigger: { hover: !1, click: !1, focus: !1 },
              localShow: !1,
            }
          );
        },
        computed: {
          templateType: function () {
            return "tooltip";
          },
          computedId: function () {
            return (
              this.id ||
              "__bv_".concat(this.templateType, "_").concat(this[F.a], "__")
            );
          },
          computedDelay: function () {
            var t = { show: 0, hide: 0 };
            return (
              Object(d.k)(this.delay)
                ? ((t.show = Object(it.d)(Object(N.c)(this.delay.show, 0), 0)),
                  (t.hide = Object(it.d)(Object(N.c)(this.delay.hide, 0), 0)))
                : (Object(d.h)(this.delay) || Object(d.n)(this.delay)) &&
                  (t.show = t.hide =
                    Object(it.d)(Object(N.c)(this.delay, 0), 0)),
              t
            );
          },
          computedTriggers: function () {
            return Object(kt.b)(this.triggers)
              .filter(c.a)
              .join(" ")
              .trim()
              .toLowerCase()
              .split(/\s+/)
              .sort();
          },
          isWithActiveTrigger: function () {
            for (var t in this.activeTrigger)
              if (this.activeTrigger[t]) return !0;
            return !1;
          },
          computedTemplateData: function () {
            return {
              title: this.title,
              content: this.content,
              variant: this.variant,
              customClass: this.customClass,
              noFade: this.noFade,
              interactive: this.interactive,
            };
          },
        },
        watch: {
          computedTriggers: function (t, e) {
            var n = this;
            Object(yn.a)(t, e) ||
              this.$nextTick(function () {
                n.unListen(),
                  e.forEach(function (e) {
                    Object(kt.a)(t, e) ||
                      (n.activeTrigger[e] && (n.activeTrigger[e] = !1));
                  }),
                  n.listen();
              });
          },
          computedTemplateData: function () {
            this.handleTemplateUpdate();
          },
          title: function (t, e) {
            t === e || t || this.hide();
          },
          disabled: function (t) {
            t ? this.disable() : this.enable();
          },
        },
        created: function () {
          var t = this;
          (this.$_tip = null),
            (this.$_hoverTimeout = null),
            (this.$_hoverState = ""),
            (this.$_visibleInterval = null),
            (this.$_enabled = !this.disabled),
            (this.$_noop = Ri.bind(this)),
            this.bvParent &&
              this.bvParent.$once(E.fb, function () {
                t.$nextTick(function () {
                  Object(I.D)(function () {
                    t.$destroy();
                  });
                });
              }),
            this.$nextTick(function () {
              var e = t.getTarget();
              e && Object(I.f)(document.body, e)
                ? ((t.scopeId = Lu(t.bvParent)), t.listen())
                : b(
                    Object(d.n)(t.target) &&
                      'Unable to find target element by ID "#'.concat(
                        t.target,
                        '" in document.'
                      ),
                    t.templateType
                  );
            });
        },
        updated: function () {
          this.$nextTick(this.handleTemplateUpdate);
        },
        deactivated: function () {
          this.forceHide();
        },
        beforeDestroy: function () {
          this.unListen(),
            this.setWhileOpenListeners(!1),
            this.clearHoverTimeout(),
            this.clearVisibilityInterval(),
            this.destroyTemplate(),
            (this.$_noop = null);
        },
        methods: {
          getTemplate: function () {
            return cf;
          },
          updateData: function () {
            var t = this,
              e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              n = !1;
            Object(h.h)(vf).forEach(function (i) {
              Object(d.o)(e[i]) ||
                t[i] === e[i] ||
                ((t[i] = e[i]), "title" === i && (n = !0));
            }),
              n && this.localShow && this.fixTitle();
          },
          createTemplateAndShow: function () {
            var t = this.getContainer(),
              e = this.getTemplate(),
              n = (this.$_tip = Ru(this, e, {
                propsData: {
                  id: this.computedId,
                  html: this.html,
                  placement: this.placement,
                  fallbackPlacement: this.fallbackPlacement,
                  target: this.getPlacementTarget(),
                  boundary: this.getBoundary(),
                  offset: Object(N.c)(this.offset, 0),
                  arrowPadding: Object(N.c)(this.arrowPadding, 0),
                  boundaryPadding: Object(N.c)(this.boundaryPadding, 0),
                },
              }));
            this.handleTemplateUpdate(),
              n.$once(E.U, this.onTemplateShow),
              n.$once(E.V, this.onTemplateShown),
              n.$once(E.x, this.onTemplateHide),
              n.$once(E.w, this.onTemplateHidden),
              n.$once(E.gb, this.destroyTemplate),
              n.$on(E.t, this.handleEvent),
              n.$on(E.u, this.handleEvent),
              n.$on(E.B, this.handleEvent),
              n.$on(E.C, this.handleEvent),
              n.$mount(t.appendChild(document.createElement("div")));
          },
          hideTemplate: function () {
            this.$_tip && this.$_tip.hide(),
              this.clearActiveTriggers(),
              (this.$_hoverState = "");
          },
          destroyTemplate: function () {
            this.setWhileOpenListeners(!1),
              this.clearHoverTimeout(),
              (this.$_hoverState = ""),
              this.clearActiveTriggers(),
              (this.localPlacementTarget = null);
            try {
              this.$_tip.$destroy();
            } catch (t) {}
            (this.$_tip = null),
              this.removeAriaDescribedby(),
              this.restoreTitle(),
              (this.localShow = !1);
          },
          getTemplateElement: function () {
            return this.$_tip ? this.$_tip.$el : null;
          },
          handleTemplateUpdate: function () {
            var t = this,
              e = this.$_tip;
            e &&
              [
                "title",
                "content",
                "variant",
                "customClass",
                "noFade",
                "interactive",
              ].forEach(function (n) {
                e[n] !== t[n] && (e[n] = t[n]);
              });
          },
          show: function () {
            var t = this.getTarget();
            if (
              t &&
              Object(I.f)(document.body, t) &&
              Object(I.u)(t) &&
              !this.dropdownOpen() &&
              ((!Object(d.p)(this.title) && "" !== this.title) ||
                (!Object(d.p)(this.content) && "" !== this.content)) &&
              !this.$_tip &&
              !this.localShow
            ) {
              this.localShow = !0;
              var e = this.buildEvent(E.U, { cancelable: !0 });
              this.emitEvent(e),
                e.defaultPrevented
                  ? this.destroyTemplate()
                  : (this.fixTitle(),
                    this.addAriaDescribedby(),
                    this.createTemplateAndShow());
            }
          },
          hide: function () {
            var t =
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
              e = this.getTemplateElement();
            if (e && this.localShow) {
              var n = this.buildEvent(E.x, { cancelable: !t });
              this.emitEvent(n), n.defaultPrevented || this.hideTemplate();
            } else this.restoreTitle();
          },
          forceHide: function () {
            this.getTemplateElement() &&
              this.localShow &&
              (this.setWhileOpenListeners(!1),
              this.clearHoverTimeout(),
              (this.$_hoverState = ""),
              this.clearActiveTriggers(),
              this.$_tip && (this.$_tip.noFade = !0),
              this.hide(!0));
          },
          enable: function () {
            (this.$_enabled = !0), this.emitEvent(this.buildEvent(E.p));
          },
          disable: function () {
            (this.$_enabled = !1), this.emitEvent(this.buildEvent(E.l));
          },
          onTemplateShow: function () {
            this.setWhileOpenListeners(!0);
          },
          onTemplateShown: function () {
            var t = this.$_hoverState;
            (this.$_hoverState = ""),
              "out" === t && this.leave(null),
              this.emitEvent(this.buildEvent(E.V));
          },
          onTemplateHide: function () {
            this.setWhileOpenListeners(!1);
          },
          onTemplateHidden: function () {
            this.destroyTemplate(), this.emitEvent(this.buildEvent(E.w));
          },
          getTarget: function () {
            var t = this.target;
            return (
              Object(d.n)(t)
                ? (t = Object(I.j)(t.replace(/^#/, "")))
                : Object(d.f)(t)
                ? (t = t())
                : t && (t = t.$el || t),
              Object(I.s)(t) ? t : null
            );
          },
          getPlacementTarget: function () {
            return this.getTarget();
          },
          getTargetId: function () {
            var t = this.getTarget();
            return t && t.id ? t.id : null;
          },
          getContainer: function () {
            var t = !!this.container && (this.container.$el || this.container),
              e = document.body,
              n = this.getTarget();
            return !1 === t
              ? Object(I.e)(gf, n) || e
              : (Object(d.n)(t) && Object(I.j)(t.replace(/^#/, ""))) || e;
          },
          getBoundary: function () {
            return this.boundary
              ? this.boundary.$el || this.boundary
              : "scrollParent";
          },
          isInModal: function () {
            var t = this.getTarget();
            return t && Object(I.e)(bf, t);
          },
          isDropdown: function () {
            var t = this.getTarget();
            return t && Object(I.p)(t, "dropdown");
          },
          dropdownOpen: function () {
            var t = this.getTarget();
            return (
              this.isDropdown() && t && Object(I.E)(".dropdown-menu.show", t)
            );
          },
          clearHoverTimeout: function () {
            clearTimeout(this.$_hoverTimeout), (this.$_hoverTimeout = null);
          },
          clearVisibilityInterval: function () {
            clearInterval(this.$_visibleInterval),
              (this.$_visibleInterval = null);
          },
          clearActiveTriggers: function () {
            for (var t in this.activeTrigger) this.activeTrigger[t] = !1;
          },
          addAriaDescribedby: function () {
            var t = this.getTarget(),
              e = Object(I.h)(t, "aria-describedby") || "";
            (e = e.split(/\s+/).concat(this.computedId).join(" ").trim()),
              Object(I.G)(t, "aria-describedby", e);
          },
          removeAriaDescribedby: function () {
            var t = this,
              e = this.getTarget(),
              n = Object(I.h)(e, "aria-describedby") || "";
            (n = n
              .split(/\s+/)
              .filter(function (e) {
                return e !== t.computedId;
              })
              .join(" ")
              .trim())
              ? Object(I.G)(e, "aria-describedby", n)
              : Object(I.z)(e, "aria-describedby");
          },
          fixTitle: function () {
            var t = this.getTarget();
            if (Object(I.o)(t, "title")) {
              var e = Object(I.h)(t, "title");
              Object(I.G)(t, "title", ""),
                e && Object(I.G)(t, "data-original-title", e);
            }
          },
          restoreTitle: function () {
            var t = this.getTarget();
            if (Object(I.o)(t, "data-original-title")) {
              var e = Object(I.h)(t, "data-original-title");
              Object(I.z)(t, "data-original-title"),
                e && Object(I.G)(t, "title", e);
            }
          },
          buildEvent: function (t) {
            var e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            return new Zr(
              t,
              uf(
                {
                  cancelable: !1,
                  target: this.getTarget(),
                  relatedTarget: this.getTemplateElement() || null,
                  componentId: this.computedId,
                  vueTarget: this,
                },
                e
              )
            );
          },
          emitEvent: function (t) {
            var e = t.type;
            this.emitOnRoot(Object(St.e)(this.templateType, e), t),
              this.$emit(e, t);
          },
          listen: function () {
            var t = this,
              e = this.getTarget();
            e &&
              (this.setRootListener(!0),
              this.computedTriggers.forEach(function (n) {
                "click" === n
                  ? Object(St.b)(e, "click", t.handleEvent, E.db)
                  : "focus" === n
                  ? (Object(St.b)(e, "focusin", t.handleEvent, E.db),
                    Object(St.b)(e, "focusout", t.handleEvent, E.db))
                  : "blur" === n
                  ? Object(St.b)(e, "focusout", t.handleEvent, E.db)
                  : "hover" === n &&
                    (Object(St.b)(e, "mouseenter", t.handleEvent, E.db),
                    Object(St.b)(e, "mouseleave", t.handleEvent, E.db));
              }, this));
          },
          unListen: function () {
            var t = this,
              e = this.getTarget();
            this.setRootListener(!1),
              [
                "click",
                "focusin",
                "focusout",
                "mouseenter",
                "mouseleave",
              ].forEach(function (n) {
                e && Object(St.a)(e, n, t.handleEvent, E.db);
              }, this);
          },
          setRootListener: function (t) {
            var e = t ? "listenOnRoot" : "listenOffRoot",
              n = this.templateType;
            this[e](Object(St.d)(n, E.x), this.doHide),
              this[e](Object(St.d)(n, E.U), this.doShow),
              this[e](Object(St.d)(n, E.k), this.doDisable),
              this[e](Object(St.d)(n, E.o), this.doEnable);
          },
          setWhileOpenListeners: function (t) {
            this.setModalListener(t),
              this.setDropdownListener(t),
              this.visibleCheck(t),
              this.setOnTouchStartListener(t);
          },
          visibleCheck: function (t) {
            var e = this;
            this.clearVisibilityInterval();
            var n = this.getTarget();
            t &&
              (this.$_visibleInterval = setInterval(function () {
                !e.getTemplateElement() ||
                  !e.localShow ||
                  (n.parentNode && Object(I.u)(n)) ||
                  e.forceHide();
              }, 100));
          },
          setModalListener: function (t) {
            this.isInModal() &&
              this[t ? "listenOnRoot" : "listenOffRoot"](mf, this.forceHide);
          },
          setOnTouchStartListener: function (t) {
            var e = this;
            "ontouchstart" in document.documentElement &&
              Object(kt.f)(document.body.children).forEach(function (n) {
                Object(St.c)(t, n, "mouseover", e.$_noop);
              });
          },
          setDropdownListener: function (t) {
            var e = this.getTarget();
            if (e && this.bvEventRoot && this.isDropdown) {
              var n = (function (t) {
                if (!F.d) return t.__vue__;
                for (var e = t; e; ) {
                  if (to.has(e)) return to.get(e);
                  e = e.parentNode;
                }
                return null;
              })(e);
              n && n[t ? "$on" : "$off"](E.V, this.forceHide);
            }
          },
          handleEvent: function (t) {
            var e = this.getTarget();
            if (
              e &&
              !Object(I.r)(e) &&
              this.$_enabled &&
              !this.dropdownOpen()
            ) {
              var n = t.type,
                i = this.computedTriggers;
              if ("click" === n && Object(kt.a)(i, "click")) this.click(t);
              else if ("mouseenter" === n && Object(kt.a)(i, "hover"))
                this.enter(t);
              else if ("focusin" === n && Object(kt.a)(i, "focus"))
                this.enter(t);
              else if (
                ("focusout" === n &&
                  (Object(kt.a)(i, "focus") || Object(kt.a)(i, "blur"))) ||
                ("mouseleave" === n && Object(kt.a)(i, "hover"))
              ) {
                var r = this.getTemplateElement(),
                  o = t.target,
                  a = t.relatedTarget;
                if (
                  (r && Object(I.f)(r, o) && Object(I.f)(e, a)) ||
                  (r && Object(I.f)(e, o) && Object(I.f)(r, a)) ||
                  (r && Object(I.f)(r, o) && Object(I.f)(r, a)) ||
                  (Object(I.f)(e, o) && Object(I.f)(e, a))
                )
                  return;
                this.leave(t);
              }
            }
          },
          doHide: function (t) {
            (t && this.getTargetId() !== t && this.computedId !== t) ||
              this.forceHide();
          },
          doShow: function (t) {
            (t && this.getTargetId() !== t && this.computedId !== t) ||
              this.show();
          },
          doDisable: function (t) {
            (t && this.getTargetId() !== t && this.computedId !== t) ||
              this.disable();
          },
          doEnable: function (t) {
            (t && this.getTargetId() !== t && this.computedId !== t) ||
              this.enable();
          },
          click: function (t) {
            this.$_enabled &&
              !this.dropdownOpen() &&
              (Object(I.d)(t.currentTarget),
              (this.activeTrigger.click = !this.activeTrigger.click),
              this.isWithActiveTrigger ? this.enter(null) : this.leave(null));
          },
          toggle: function () {
            this.$_enabled &&
              !this.dropdownOpen() &&
              (this.localShow ? this.leave(null) : this.enter(null));
          },
          enter: function () {
            var t = this,
              e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : null;
            e &&
              (this.activeTrigger["focusin" === e.type ? "focus" : "hover"] =
                !0),
              this.localShow || "in" === this.$_hoverState
                ? (this.$_hoverState = "in")
                : (this.clearHoverTimeout(),
                  (this.$_hoverState = "in"),
                  this.computedDelay.show
                    ? (this.fixTitle(),
                      (this.$_hoverTimeout = setTimeout(function () {
                        "in" === t.$_hoverState
                          ? t.show()
                          : t.localShow || t.restoreTitle();
                      }, this.computedDelay.show)))
                    : this.show());
          },
          leave: function () {
            var t = this,
              e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : null;
            e &&
              ((this.activeTrigger["focusout" === e.type ? "focus" : "hover"] =
                !1),
              "focusout" === e.type &&
                Object(kt.a)(this.computedTriggers, "blur") &&
                ((this.activeTrigger.click = !1),
                (this.activeTrigger.hover = !1))),
              this.isWithActiveTrigger ||
                (this.clearHoverTimeout(),
                (this.$_hoverState = "out"),
                this.computedDelay.hide
                  ? (this.$_hoverTimeout = setTimeout(function () {
                      "out" === t.$_hoverState && t.hide();
                    }, this.computedDelay.hide))
                  : this.hide());
          },
        },
      });
    function yf(t, e) {
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
    function Mf(t, e, n) {
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
    var Of = E.hb + "disabled",
      wf = E.hb + "show",
      Af = Object(B.d)(
        (Mf(
          (hf = {
            boundary: Object(B.c)([Gr.c, j.q, j.u], "scrollParent"),
            boundaryPadding: Object(B.c)(j.p, 50),
            container: Object(B.c)([Gr.c, j.q, j.u]),
            customClass: Object(B.c)(j.u),
            delay: Object(B.c)(j.o, 50),
          }),
          "disabled",
          Object(B.c)(j.g, !1)
        ),
        Mf(hf, "fallbackPlacement", Object(B.c)(j.f, "flip")),
        Mf(hf, "id", Object(B.c)(j.u)),
        Mf(hf, "noFade", Object(B.c)(j.g, !1)),
        Mf(hf, "noninteractive", Object(B.c)(j.g, !1)),
        Mf(hf, "offset", Object(B.c)(j.p, 0)),
        Mf(hf, "placement", Object(B.c)(j.u, "top")),
        Mf(hf, "show", Object(B.c)(j.g, !1)),
        Mf(hf, "target", Object(B.c)([Gr.c, Gr.d, j.l, j.q, j.u], void 0, !0)),
        Mf(hf, "title", Object(B.c)(j.u)),
        Mf(hf, "triggers", Object(B.c)(j.f, "hover focus")),
        Mf(hf, "variant", Object(B.c)(j.u)),
        hf),
        q.sc
      ),
      xf = Object(F.c)({
        name: q.sc,
        mixins: [R.a, Du],
        inheritAttrs: !1,
        props: Af,
        data: function () {
          return { localShow: this.show, localTitle: "", localContent: "" };
        },
        computed: {
          templateData: function () {
            return (function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2
                  ? yf(Object(n), !0).forEach(function (e) {
                      Mf(t, e, n[e]);
                    })
                  : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(
                      t,
                      Object.getOwnPropertyDescriptors(n)
                    )
                  : yf(Object(n)).forEach(function (e) {
                      Object.defineProperty(
                        t,
                        e,
                        Object.getOwnPropertyDescriptor(n, e)
                      );
                    });
              }
              return t;
            })(
              {
                title: this.localTitle,
                content: this.localContent,
                interactive: !this.noninteractive,
              },
              Object(h.k)(this.$props, [
                "boundary",
                "boundaryPadding",
                "container",
                "customClass",
                "delay",
                "fallbackPlacement",
                "id",
                "noFade",
                "offset",
                "placement",
                "target",
                "target",
                "triggers",
                "variant",
                "disabled",
              ])
            );
          },
          templateTitleContent: function () {
            return { title: this.title, content: this.content };
          },
        },
        watch:
          ((ff = {}),
          Mf(ff, "show", function (t, e) {
            t !== e &&
              t !== this.localShow &&
              this.$_toolpop &&
              (t ? this.$_toolpop.show() : this.$_toolpop.forceHide());
          }),
          Mf(ff, "disabled", function (t) {
            t ? this.doDisable() : this.doEnable();
          }),
          Mf(ff, "localShow", function (t) {
            this.$emit(wf, t);
          }),
          Mf(ff, "templateData", function () {
            var t = this;
            this.$nextTick(function () {
              t.$_toolpop && t.$_toolpop.updateData(t.templateData);
            });
          }),
          Mf(ff, "templateTitleContent", function () {
            this.$nextTick(this.updateContent);
          }),
          ff),
        created: function () {
          this.$_toolpop = null;
        },
        updated: function () {
          this.$nextTick(this.updateContent);
        },
        beforeDestroy: function () {
          this.$off(E.F, this.doOpen),
            this.$off(E.g, this.doClose),
            this.$off(E.k, this.doDisable),
            this.$off(E.o, this.doEnable),
            this.$_toolpop &&
              (this.$_toolpop.$destroy(), (this.$_toolpop = null));
        },
        mounted: function () {
          var t = this;
          this.$nextTick(function () {
            var e = t.getComponent();
            t.updateContent();
            var n = Lu(t) || Lu(t.bvParent),
              i = (t.$_toolpop = Ru(t, e, { _scopeId: n || void 0 }));
            i.updateData(t.templateData),
              i.$on(E.U, t.onShow),
              i.$on(E.V, t.onShown),
              i.$on(E.x, t.onHide),
              i.$on(E.w, t.onHidden),
              i.$on(E.l, t.onDisabled),
              i.$on(E.p, t.onEnabled),
              t.disabled && t.doDisable(),
              t.$on(E.F, t.doOpen),
              t.$on(E.g, t.doClose),
              t.$on(E.k, t.doDisable),
              t.$on(E.o, t.doEnable),
              t.localShow && i.show();
          });
        },
        methods: {
          getComponent: function () {
            return _f;
          },
          updateContent: function () {
            this.setTitle(this.normalizeSlot() || this.title);
          },
          setTitle: function (t) {
            (t = Object(d.p)(t) ? "" : t),
              this.localTitle !== t && (this.localTitle = t);
          },
          setContent: function (t) {
            (t = Object(d.p)(t) ? "" : t),
              this.localContent !== t && (this.localContent = t);
          },
          onShow: function (t) {
            this.$emit(E.U, t), t && (this.localShow = !t.defaultPrevented);
          },
          onShown: function (t) {
            (this.localShow = !0), this.$emit(E.V, t);
          },
          onHide: function (t) {
            this.$emit(E.x, t);
          },
          onHidden: function (t) {
            this.$emit(E.w, t), (this.localShow = !1);
          },
          onDisabled: function (t) {
            t && t.type === E.l && (this.$emit(Of, !0), this.$emit(E.l, t));
          },
          onEnabled: function (t) {
            t && t.type === E.p && (this.$emit(Of, !1), this.$emit(E.p, t));
          },
          doOpen: function () {
            !this.localShow && this.$_toolpop && this.$_toolpop.show();
          },
          doClose: function () {
            this.localShow && this.$_toolpop && this.$_toolpop.hide();
          },
          doDisable: function () {
            this.$_toolpop && this.$_toolpop.disable();
          },
          doEnable: function () {
            this.$_toolpop && this.$_toolpop.enable();
          },
        },
        render: function (t) {
          return t();
        },
      }),
      zf = Object(F.c)({
        name: q.Rb,
        extends: cf,
        computed: {
          templateType: function () {
            return "popover";
          },
        },
        methods: {
          renderTemplate: function (t) {
            var e = this.title,
              n = this.content,
              i = Object(d.f)(e) ? e({}) : e,
              r = Object(d.f)(n) ? n({}) : n,
              o = this.html && !Object(d.f)(e) ? { innerHTML: e } : {},
              a = this.html && !Object(d.f)(n) ? { innerHTML: n } : {};
            return t(
              "div",
              {
                staticClass: "popover b-popover",
                class: this.templateClasses,
                attrs: this.templateAttributes,
                on: this.templateListeners,
              },
              [
                t("div", { staticClass: "arrow", ref: "arrow" }),
                Object(d.p)(i) || "" === i
                  ? t()
                  : t("h3", { staticClass: "popover-header", domProps: o }, [
                      i,
                    ]),
                Object(d.p)(r) || "" === r
                  ? t()
                  : t("div", { staticClass: "popover-body", domProps: a }, [r]),
              ]
            );
          },
        },
      }),
      Cf = Object(F.c)({
        name: q.Qb,
        extends: _f,
        computed: {
          templateType: function () {
            return "popover";
          },
        },
        methods: {
          getTemplate: function () {
            return zf;
          },
        },
      });
    function kf(t, e) {
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
    function Sf(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? kf(Object(n), !0).forEach(function (e) {
              Tf(t, e, n[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
          : kf(Object(n)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(n, e)
              );
            });
      }
      return t;
    }
    function Tf(t, e, n) {
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
    var Df = Object(B.d)(
        Object(h.m)(
          Sf(
            Sf({}, Af),
            {},
            {
              content: Object(B.c)(j.u),
              placement: Object(B.c)(j.u, "right"),
              triggers: Object(B.c)(j.f, E.f),
            }
          )
        ),
        q.Pb
      ),
      Lf = Object(F.c)({
        name: q.Pb,
        extends: xf,
        inheritAttrs: !1,
        props: Df,
        methods: {
          getComponent: function () {
            return Cf;
          },
          updateContent: function () {
            this.setContent(this.normalizeSlot() || this.content),
              this.setTitle(this.normalizeSlot(P.ib) || this.title);
          },
        },
      });
    function qf(t, e) {
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
    function Ef(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? qf(Object(n), !0).forEach(function (e) {
              jf(t, e, n[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
          : qf(Object(n)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(n, e)
              );
            });
      }
      return t;
    }
    function jf(t, e, n) {
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
    var Pf = "__BV_Popover__",
      Rf = { focus: !0, hover: !0, click: !0, blur: !0, manual: !0 },
      If = /^html$/i,
      Wf = /^nofade$/i,
      Nf =
        /^(auto|top(left|right)?|bottom(left|right)?|left(top|bottom)?|right(top|bottom)?)$/i,
      Bf = /^(window|viewport|scrollParent)$/i,
      Ff = /^d\d+$/i,
      $f = /^ds\d+$/i,
      Hf = /^dh\d+$/i,
      Yf = /^o-?\d+$/i,
      Uf = /^v-.+$/i,
      Xf = /\s+/,
      Vf = function (t, e, n) {
        if (o.i) {
          var i = (function (t, e) {
            var n = {
              title: void 0,
              content: void 0,
              trigger: "",
              placement: "right",
              fallbackPlacement: "flip",
              container: !1,
              animation: !0,
              offset: 0,
              disabled: !1,
              id: null,
              html: !1,
              delay: Object(Gs.c)(q.Pb, "delay", 50),
              boundary: String(Object(Gs.c)(q.Pb, "boundary", "scrollParent")),
              boundaryPadding: Object(N.c)(
                Object(Gs.c)(q.Pb, "boundaryPadding", 5),
                0
              ),
              variant: Object(Gs.c)(q.Pb, "variant"),
              customClass: Object(Gs.c)(q.Pb, "customClass"),
            };
            if (
              (Object(d.n)(t.value) ||
              Object(d.h)(t.value) ||
              Object(d.f)(t.value)
                ? (n.content = t.value)
                : Object(d.k)(t.value) && (n = Ef(Ef({}, n), t.value)),
              t.arg && (n.container = "#".concat(t.arg)),
              Object(d.o)(n.title))
            ) {
              var i = e.data || {};
              n.title =
                i.attrs && !Object(d.p)(i.attrs.title) ? i.attrs.title : void 0;
            }
            Object(d.k)(n.delay) ||
              (n.delay = {
                show: Object(N.c)(n.delay, 0),
                hide: Object(N.c)(n.delay, 0),
              }),
              Object(h.h)(t.modifiers).forEach(function (t) {
                if (If.test(t)) n.html = !0;
                else if (Wf.test(t)) n.animation = !1;
                else if (Nf.test(t)) n.placement = t;
                else if (Bf.test(t))
                  (t = "scrollparent" === t ? "scrollParent" : t),
                    (n.boundary = t);
                else if (Ff.test(t)) {
                  var e = Object(N.c)(t.slice(1), 0);
                  (n.delay.show = e), (n.delay.hide = e);
                } else
                  $f.test(t)
                    ? (n.delay.show = Object(N.c)(t.slice(2), 0))
                    : Hf.test(t)
                    ? (n.delay.hide = Object(N.c)(t.slice(2), 0))
                    : Yf.test(t)
                    ? (n.offset = Object(N.c)(t.slice(1), 0))
                    : Uf.test(t) && (n.variant = t.slice(2) || null);
              });
            var r = {};
            return (
              Object(kt.b)(n.trigger || "")
                .filter(c.a)
                .join(" ")
                .trim()
                .toLowerCase()
                .split(Xf)
                .forEach(function (t) {
                  Rf[t] && (r[t] = !0);
                }),
              Object(h.h)(t.modifiers).forEach(function (t) {
                (t = t.toLowerCase()), Rf[t] && (r[t] = !0);
              }),
              (n.trigger = Object(h.h)(r).join(" ")),
              "blur" === n.trigger && (n.trigger = "focus"),
              n.trigger || (n.trigger = "click"),
              n
            );
          })(e, n);
          if (!t[Pf]) {
            var r = Cr(n, e);
            (t[Pf] = Ru(r, Cf, { _scopeId: Lu(r, void 0) })),
              (t[Pf].__bv_prev_data__ = {}),
              t[Pf].$on(E.U, function () {
                var e = {};
                Object(d.f)(i.title) && (e.title = i.title(t)),
                  Object(d.f)(i.content) && (e.content = i.content(t)),
                  Object(h.h)(e).length > 0 && t[Pf].updateData(e);
              });
          }
          var a = {
              title: i.title,
              content: i.content,
              triggers: i.trigger,
              placement: i.placement,
              fallbackPlacement: i.fallbackPlacement,
              variant: i.variant,
              customClass: i.customClass,
              container: i.container,
              boundary: i.boundary,
              delay: i.delay,
              offset: i.offset,
              noFade: !i.animation,
              id: i.id,
              disabled: i.disabled,
              html: i.html,
            },
            s = t[Pf].__bv_prev_data__;
          if (((t[Pf].__bv_prev_data__ = a), !Object(yn.a)(a, s))) {
            var l = { target: t };
            Object(h.h)(a).forEach(function (e) {
              a[e] !== s[e] &&
                (l[e] =
                  ("title" !== e && "content" !== e) || !Object(d.f)(a[e])
                    ? a[e]
                    : a[e](t));
            }),
              t[Pf].updateData(l);
          }
        }
      },
      Gf = C({
        directives: {
          VBPopover: {
            bind: function (t, e, n) {
              Vf(t, e, n);
            },
            componentUpdated: function (t, e, n) {
              Object(F.e)(function () {
                Vf(t, e, n);
              });
            },
            unbind: function (t) {
              !(function (t) {
                t[Pf] && (t[Pf].$destroy(), (t[Pf] = null)), delete t[Pf];
              })(t);
            },
          },
        },
      }),
      Kf = C({
        components: { BPopover: Lf },
        plugins: { VBPopoverPlugin: Gf },
      }),
      Zf = Object(B.d)(
        {
          animated: Object(B.c)(j.g, null),
          label: Object(B.c)(j.u),
          labelHtml: Object(B.c)(j.u),
          max: Object(B.c)(j.p, null),
          precision: Object(B.c)(j.p, null),
          showProgress: Object(B.c)(j.g, null),
          showValue: Object(B.c)(j.g, null),
          striped: Object(B.c)(j.g, null),
          value: Object(B.c)(j.p, 0),
          variant: Object(B.c)(j.u),
        },
        q.Ub
      ),
      Jf = Object(F.c)({
        name: q.Ub,
        mixins: [R.a],
        inject: {
          getBvProgress: {
            default: function () {
              return function () {
                return {};
              };
            },
          },
        },
        props: Zf,
        computed: {
          bvProgress: function () {
            return this.getBvProgress();
          },
          progressBarClasses: function () {
            var t = this.computedAnimated,
              e = this.computedVariant;
            return [
              e ? "bg-".concat(e) : "",
              this.computedStriped || t ? "progress-bar-striped" : "",
              t ? "progress-bar-animated" : "",
            ];
          },
          progressBarStyles: function () {
            return {
              width: (this.computedValue / this.computedMax) * 100 + "%",
            };
          },
          computedValue: function () {
            return Object(N.b)(this.value, 0);
          },
          computedMax: function () {
            var t =
              Object(N.b)(this.max) || Object(N.b)(this.bvProgress.max, 0);
            return t > 0 ? t : 100;
          },
          computedPrecision: function () {
            return Object(it.d)(
              Object(N.c)(
                this.precision,
                Object(N.c)(this.bvProgress.precision, 0)
              ),
              0
            );
          },
          computedProgress: function () {
            var t = this.computedPrecision,
              e = Object(it.f)(10, t);
            return Object(N.a)(
              (100 * e * this.computedValue) / this.computedMax / e,
              t
            );
          },
          computedVariant: function () {
            return this.variant || this.bvProgress.variant;
          },
          computedStriped: function () {
            return Object(d.b)(this.striped)
              ? this.striped
              : this.bvProgress.striped || !1;
          },
          computedAnimated: function () {
            return Object(d.b)(this.animated)
              ? this.animated
              : this.bvProgress.animated || !1;
          },
          computedShowProgress: function () {
            return Object(d.b)(this.showProgress)
              ? this.showProgress
              : this.bvProgress.showProgress || !1;
          },
          computedShowValue: function () {
            return Object(d.b)(this.showValue)
              ? this.showValue
              : this.bvProgress.showValue || !1;
          },
        },
        render: function (t) {
          var e,
            n = this.label,
            i = this.labelHtml,
            r = this.computedValue,
            o = this.computedPrecision,
            a = {};
          return (
            this.hasNormalizedSlot()
              ? (e = this.normalizeSlot())
              : n || i
              ? (a = Ce(i, n))
              : this.computedShowProgress
              ? (e = this.computedProgress)
              : this.computedShowValue && (e = Object(N.a)(r, o)),
            t(
              "div",
              {
                staticClass: "progress-bar",
                class: this.progressBarClasses,
                style: this.progressBarStyles,
                attrs: {
                  role: "progressbar",
                  "aria-valuemin": "0",
                  "aria-valuemax": Object(ct.g)(this.computedMax),
                  "aria-valuenow": Object(N.a)(r, o),
                },
                domProps: a,
              },
              e
            )
          );
        },
      });
    function Qf(t, e) {
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
    function tb(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? Qf(Object(n), !0).forEach(function (e) {
              eb(t, e, n[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
          : Qf(Object(n)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(n, e)
              );
            });
      }
      return t;
    }
    function eb(t, e, n) {
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
    var nb = Object(h.j)(Zf, ["label", "labelHtml"]),
      ib = Object(B.d)(
        Object(h.m)(
          tb(
            tb({}, nb),
            {},
            {
              animated: Object(B.c)(j.g, !1),
              height: Object(B.c)(j.u),
              max: Object(B.c)(j.p, 100),
              precision: Object(B.c)(j.p, 0),
              showProgress: Object(B.c)(j.g, !1),
              showValue: Object(B.c)(j.g, !1),
              striped: Object(B.c)(j.g, !1),
            }
          )
        ),
        q.Tb
      ),
      rb = C({
        components: {
          BProgress: Object(F.c)({
            name: q.Tb,
            mixins: [R.a],
            provide: function () {
              var t = this;
              return {
                getBvProgress: function () {
                  return t;
                },
              };
            },
            props: ib,
            computed: {
              progressHeight: function () {
                return { height: this.height || null };
              },
            },
            render: function (t) {
              var e = this.normalizeSlot();
              return (
                e || (e = t(Jf, { props: Object(B.e)(nb, this.$props) })),
                t(
                  "div",
                  { staticClass: "progress", style: this.progressHeight },
                  [e]
                )
              );
            },
          }),
          BProgressBar: Jf,
        },
      }),
      ob = C({
        components: { BSidebar: n(90).a },
        plugins: { VBTogglePlugin: Ur },
      });
    function ab(t, e, n) {
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
    var sb = Object(B.d)(
        {
          animation: Object(B.c)(j.u, "wave"),
          height: Object(B.c)(j.u),
          size: Object(B.c)(j.u),
          type: Object(B.c)(j.u, "text"),
          variant: Object(B.c)(j.u),
          width: Object(B.c)(j.u),
        },
        q.Xb
      ),
      lb = Object(F.c)({
        name: q.Xb,
        functional: !0,
        props: sb,
        render: function (t, e) {
          var n,
            i = e.data,
            r = e.props,
            o = r.size,
            a = r.animation,
            s = r.variant;
          return t(
            "div",
            Object(vt.a)(i, {
              staticClass: "b-skeleton",
              style: { width: o || r.width, height: o || r.height },
              class:
                ((n = {}),
                ab(n, "b-skeleton-".concat(r.type), !0),
                ab(n, "b-skeleton-animate-".concat(a), a),
                ab(n, "bg-".concat(s), s),
                n),
            })
          );
        },
      });
    function cb(t, e) {
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
    function db(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? cb(Object(n), !0).forEach(function (e) {
              ub(t, e, n[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
          : cb(Object(n)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(n, e)
              );
            });
      }
      return t;
    }
    function ub(t, e, n) {
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
    var pb = Object(B.d)(
        {
          animation: Object(B.c)(j.u, "wave"),
          icon: Object(B.c)(j.u),
          iconProps: Object(B.c)(j.q, {}),
        },
        q.Yb
      ),
      hb = Object(F.c)({
        name: q.Yb,
        functional: !0,
        props: pb,
        render: function (t, e) {
          var n = e.data,
            i = e.props,
            r = i.icon,
            o = i.animation,
            a = t(zt, {
              staticClass: "b-skeleton-icon",
              props: db(db({}, i.iconProps), {}, { icon: r }),
            });
          return t(
            "div",
            Object(vt.a)(n, {
              staticClass:
                "b-skeleton-icon-wrapper position-relative d-inline-block overflow-hidden",
              class: ub({}, "b-skeleton-animate-".concat(o), o),
            }),
            [a]
          );
        },
      }),
      fb = Object(B.d)(
        {
          animation: Object(B.c)(j.u),
          aspect: Object(B.c)(j.u, "16:9"),
          cardImg: Object(B.c)(j.u),
          height: Object(B.c)(j.u),
          noAspect: Object(B.c)(j.g, !1),
          variant: Object(B.c)(j.u),
          width: Object(B.c)(j.u),
        },
        q.Zb
      ),
      bb = Object(F.c)({
        name: q.Zb,
        functional: !0,
        props: fb,
        render: function (t, e) {
          var n,
            i,
            r,
            o = e.data,
            a = e.props,
            s = a.aspect,
            l = a.width,
            c = a.height,
            d = a.animation,
            u = a.variant,
            p = a.cardImg,
            h = t(
              lb,
              Object(vt.a)(o, {
                props: {
                  type: "img",
                  width: l,
                  height: c,
                  animation: d,
                  variant: u,
                },
                class:
                  ((n = {}),
                  (i = "card-img-".concat(p)),
                  (r = p),
                  i in n
                    ? Object.defineProperty(n, i, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (n[i] = r),
                  n),
              })
            );
          return a.noAspect ? h : t(at, { props: { aspect: s } }, [h]);
        },
      }),
      mb = Object(F.c)({
        methods: {
          hasListener: function (t) {
            if (F.d) return !0;
            var e = this.$listeners || {},
              n = this._events || {};
            return !Object(d.o)(e[t]) || (Object(d.a)(n[t]) && n[t].length > 0);
          },
        },
      }),
      gb = { stacked: Object(B.c)(j.j, !1) },
      vb = Object(F.c)({
        props: gb,
        computed: {
          isStacked: function () {
            var t = this.stacked;
            return "" === t || t;
          },
          isStackedAlways: function () {
            return !0 === this.isStacked;
          },
          stackedTableClasses: function () {
            var t,
              e,
              n,
              i = this.isStackedAlways;
            return (
              (t = { "b-table-stacked": i }),
              (e = "b-table-stacked-".concat(this.stacked)),
              (n = !i && this.isStacked),
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
        },
      });
    function _b(t, e) {
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
    function yb(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? _b(Object(n), !0).forEach(function (e) {
              Mb(t, e, n[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
          : _b(Object(n)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(n, e)
              );
            });
      }
      return t;
    }
    function Mb(t, e, n) {
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
    var Ob = {
        bordered: Object(B.c)(j.g, !1),
        borderless: Object(B.c)(j.g, !1),
        captionTop: Object(B.c)(j.g, !1),
        dark: Object(B.c)(j.g, !1),
        fixed: Object(B.c)(j.g, !1),
        hover: Object(B.c)(j.g, !1),
        noBorderCollapse: Object(B.c)(j.g, !1),
        outlined: Object(B.c)(j.g, !1),
        responsive: Object(B.c)(j.j, !1),
        small: Object(B.c)(j.g, !1),
        stickyHeader: Object(B.c)(j.j, !1),
        striped: Object(B.c)(j.g, !1),
        tableClass: Object(B.c)(j.e),
        tableVariant: Object(B.c)(j.u),
      },
      wb = Object(F.c)({
        mixins: [Tt.a],
        provide: function () {
          var t = this;
          return {
            getBvTable: function () {
              return t;
            },
          };
        },
        inheritAttrs: !1,
        props: Ob,
        computed: {
          isTableSimple: function () {
            return !1;
          },
          isResponsive: function () {
            var t = this.responsive;
            return "" === t || t;
          },
          isStickyHeader: function () {
            var t = this.stickyHeader;
            return (t = "" === t || t), !this.isStacked && t;
          },
          wrapperClasses: function () {
            var t = this.isResponsive;
            return [
              this.isStickyHeader ? "b-table-sticky-header" : "",
              !0 === t
                ? "table-responsive"
                : t
                ? "table-responsive-".concat(this.responsive)
                : "",
            ].filter(c.a);
          },
          wrapperStyles: function () {
            var t = this.isStickyHeader;
            return t && !Object(d.b)(t) ? { maxHeight: t } : {};
          },
          tableClasses: function () {
            var t = lt(this),
              e = t.hover,
              n = t.tableVariant,
              i = t.selectableTableClasses,
              r = t.stackedTableClasses,
              o = t.tableClass,
              a = t.computedBusy;
            return (
              (e = this.isTableSimple
                ? e
                : e && this.computedItems.length > 0 && !a),
              [
                o,
                {
                  "table-striped": this.striped,
                  "table-hover": e,
                  "table-dark": this.dark,
                  "table-bordered": this.bordered,
                  "table-borderless": this.borderless,
                  "table-sm": this.small,
                  border: this.outlined,
                  "b-table-fixed": this.fixed,
                  "b-table-caption-top": this.captionTop,
                  "b-table-no-border-collapse": this.noBorderCollapse,
                },
                n ? "".concat(this.dark ? "bg" : "table", "-").concat(n) : "",
                r,
                i,
              ]
            );
          },
          tableAttrs: function () {
            var t = lt(this),
              e = t.computedItems,
              n = t.filteredItems,
              i = t.computedFields,
              r = t.selectableTableAttrs,
              o = t.computedBusy,
              a = this.isTableSimple
                ? {}
                : {
                    "aria-busy": Object(ct.g)(o),
                    "aria-colcount": Object(ct.g)(i.length),
                    "aria-describedby":
                      this.bvAttrs["aria-describedby"] || this.$refs.caption
                        ? this.captionId
                        : null,
                  };
            return yb(
              yb(
                yb(
                  {
                    "aria-rowcount":
                      e && n && n.length > e.length
                        ? Object(ct.g)(n.length)
                        : null,
                  },
                  this.bvAttrs
                ),
                {},
                { id: this.safeId(), role: this.bvAttrs.role || "table" },
                a
              ),
              r
            );
          },
        },
        render: function (t) {
          var e = lt(this),
            n = e.wrapperClasses,
            i = e.renderCaption,
            r = e.renderColgroup,
            o = e.renderThead,
            a = e.renderTbody,
            s = e.renderTfoot,
            l = [];
          this.isTableSimple
            ? l.push(this.normalizeSlot())
            : (l.push(i ? i() : null),
              l.push(r ? r() : null),
              l.push(o ? o() : null),
              l.push(a ? a() : null),
              l.push(s ? s() : null));
          var d = t(
            "table",
            {
              staticClass: "table b-table",
              class: this.tableClasses,
              attrs: this.tableAttrs,
              key: "b-table",
            },
            l.filter(c.a)
          );
          return n.length > 0
            ? t("div", { class: n, style: this.wrapperStyles, key: "wrap" }, [
                d,
              ])
            : d;
        },
      });
    function Ab(t, e) {
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
    function xb(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? Ab(Object(n), !0).forEach(function (e) {
              zb(t, e, n[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
          : Ab(Object(n)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(n, e)
              );
            });
      }
      return t;
    }
    function zb(t, e, n) {
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
    var Cb = Object(B.d)(Object(h.m)(xb(xb(xb({}, Mn.b), gb), Ob)), q.hc),
      kb = Object(F.c)({
        name: q.hc,
        mixins: [Tt.a, mb, Mn.a, R.a, wb, vb],
        props: Cb,
        computed: {
          isTableSimple: function () {
            return !0;
          },
        },
      });
    function Sb(t, e) {
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
    function Tb(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? Sb(Object(n), !0).forEach(function (e) {
              Db(t, e, n[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
          : Sb(Object(n)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(n, e)
              );
            });
      }
      return t;
    }
    function Db(t, e, n) {
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
    var Lb = function (t) {
        return t > 0;
      },
      qb = Object(B.d)(
        {
          animation: Object(B.c)(j.u),
          columns: Object(B.c)(j.n, 5, Lb),
          hideHeader: Object(B.c)(j.g, !1),
          rows: Object(B.c)(j.n, 3, Lb),
          showFooter: Object(B.c)(j.g, !1),
          tableProps: Object(B.c)(j.q, {}),
        },
        q.ac
      ),
      Eb = Object(F.c)({
        name: q.ac,
        functional: !0,
        props: qb,
        render: function (t, e) {
          var n = e.data,
            i = e.props,
            r = i.animation,
            o = i.columns,
            a = t("th", [t(lb, { props: { animation: r } })]),
            s = t("tr", Object(kt.c)(o, a)),
            l = t("td", [t(lb, { props: { width: "75%", animation: r } })]),
            c = t("tr", Object(kt.c)(o, l)),
            d = t("tbody", Object(kt.c)(i.rows, c)),
            u = i.hideHeader ? t() : t("thead", [s]),
            p = i.showFooter ? t("tfoot", [s]) : t();
          return t(kb, Object(vt.a)(n, { props: Tb({}, i.tableProps) }), [
            u,
            d,
            p,
          ]);
        },
      }),
      jb = Object(B.d)({ loading: Object(B.c)(j.g, !1) }, q.bc),
      Pb = Object(F.c)({
        name: q.bc,
        functional: !0,
        props: jb,
        render: function (t, e) {
          var n = e.data,
            i = e.props,
            r = e.slots,
            o = e.scopedSlots,
            a = r(),
            s = o || {},
            l = {};
          return i.loading
            ? t(
                "div",
                Object(vt.a)(n, {
                  attrs: {
                    role: "alert",
                    "aria-live": "polite",
                    "aria-busy": !0,
                  },
                  staticClass: "b-skeleton-wrapper",
                  key: "loading",
                }),
                Object(qn.b)(P.F, l, s, a)
              )
            : Object(qn.b)(P.i, l, s, a);
        },
      }),
      Rb = C({
        components: {
          BSkeleton: lb,
          BSkeletonIcon: hb,
          BSkeletonImg: bb,
          BSkeletonTable: Eb,
          BSkeletonWrapper: Pb,
        },
      }),
      Ib = C({ components: { BSpinner: yh } });
    function Wb(t, e) {
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
    function Nb(t, e, n) {
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
    var Bb = Object(B.d)({ variant: Object(B.c)(j.u) }, q.vc),
      Fb = Object(F.c)({
        name: q.vc,
        mixins: [Tt.a, It, R.a],
        provide: function () {
          var t = this;
          return {
            getBvTableTr: function () {
              return t;
            },
          };
        },
        inject: {
          getBvTableRowGroup: {
            default: function () {
              return function () {
                return {};
              };
            },
          },
        },
        inheritAttrs: !1,
        props: Bb,
        computed: {
          bvTableRowGroup: function () {
            return this.getBvTableRowGroup();
          },
          inTbody: function () {
            return this.bvTableRowGroup.isTbody;
          },
          inThead: function () {
            return this.bvTableRowGroup.isThead;
          },
          inTfoot: function () {
            return this.bvTableRowGroup.isTfoot;
          },
          isDark: function () {
            return this.bvTableRowGroup.isDark;
          },
          isStacked: function () {
            return this.bvTableRowGroup.isStacked;
          },
          isResponsive: function () {
            return this.bvTableRowGroup.isResponsive;
          },
          isStickyHeader: function () {
            return this.bvTableRowGroup.isStickyHeader;
          },
          hasStickyHeader: function () {
            return !this.isStacked && this.bvTableRowGroup.hasStickyHeader;
          },
          tableVariant: function () {
            return this.bvTableRowGroup.tableVariant;
          },
          headVariant: function () {
            return this.inThead ? this.bvTableRowGroup.headVariant : null;
          },
          footVariant: function () {
            return this.inTfoot ? this.bvTableRowGroup.footVariant : null;
          },
          isRowDark: function () {
            return (
              "light" !== this.headVariant &&
              "light" !== this.footVariant &&
              ("dark" === this.headVariant ||
                "dark" === this.footVariant ||
                this.isDark)
            );
          },
          trClasses: function () {
            var t = this.variant;
            return [
              t
                ? "".concat(this.isRowDark ? "bg" : "table", "-").concat(t)
                : null,
            ];
          },
          trAttrs: function () {
            return (function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2
                  ? Wb(Object(n), !0).forEach(function (e) {
                      Nb(t, e, n[e]);
                    })
                  : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(
                      t,
                      Object.getOwnPropertyDescriptors(n)
                    )
                  : Wb(Object(n)).forEach(function (e) {
                      Object.defineProperty(
                        t,
                        e,
                        Object.getOwnPropertyDescriptor(n, e)
                      );
                    });
              }
              return t;
            })({ role: "row" }, this.bvAttrs);
          },
        },
        render: function (t) {
          return t(
            "tr",
            {
              class: this.trClasses,
              attrs: this.trAttrs,
              on: this.bvListeners,
            },
            this.normalizeSlot()
          );
        },
      }),
      $b = {},
      Hb = Object(F.c)({
        props: $b,
        methods: {
          renderBottomRow: function () {
            var t = this.computedFields,
              e = this.stacked,
              n = this.tbodyTrClass,
              i = this.tbodyTrAttr,
              r = this.$createElement;
            return this.hasNormalizedSlot(P.e) && !0 !== e && "" !== e
              ? r(
                  Fb,
                  {
                    staticClass: "b-table-bottom-row",
                    class: [Object(d.f)(n) ? n(null, "row-bottom") : n],
                    attrs: Object(d.f)(i) ? i(null, "row-bottom") : i,
                    key: "b-bottom-row",
                  },
                  this.normalizeSlot(P.e, { columns: t.length, fields: t })
                )
              : r();
          },
        },
      });
    function Yb(t, e) {
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
    function Ub(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? Yb(Object(n), !0).forEach(function (e) {
              Xb(t, e, n[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
          : Yb(Object(n)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(n, e)
              );
            });
      }
      return t;
    }
    function Xb(t, e, n) {
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
    var Vb,
      Gb,
      Kb,
      Zb = function (t) {
        return (t = Object(N.c)(t, 0)) > 0 ? t : null;
      },
      Jb = function (t) {
        return Object(d.p)(t) || Zb(t) > 0;
      },
      Qb = Object(B.d)(
        {
          colspan: Object(B.c)(j.p, null, Jb),
          rowspan: Object(B.c)(j.p, null, Jb),
          stackedHeading: Object(B.c)(j.u),
          stickyColumn: Object(B.c)(j.g, !1),
          variant: Object(B.c)(j.u),
        },
        q.fc
      ),
      tm = Object(F.c)({
        name: q.fc,
        mixins: [Tt.a, It, R.a],
        inject: {
          getBvTableTr: {
            default: function () {
              return function () {
                return {};
              };
            },
          },
        },
        inheritAttrs: !1,
        props: Qb,
        computed: {
          bvTableTr: function () {
            return this.getBvTableTr();
          },
          tag: function () {
            return "td";
          },
          inTbody: function () {
            return this.bvTableTr.inTbody;
          },
          inThead: function () {
            return this.bvTableTr.inThead;
          },
          inTfoot: function () {
            return this.bvTableTr.inTfoot;
          },
          isDark: function () {
            return this.bvTableTr.isDark;
          },
          isStacked: function () {
            return this.bvTableTr.isStacked;
          },
          isStackedCell: function () {
            return this.inTbody && this.isStacked;
          },
          isResponsive: function () {
            return this.bvTableTr.isResponsive;
          },
          isStickyHeader: function () {
            return this.bvTableTr.isStickyHeader;
          },
          hasStickyHeader: function () {
            return this.bvTableTr.hasStickyHeader;
          },
          isStickyColumn: function () {
            return (
              !this.isStacked &&
              (this.isResponsive || this.hasStickyHeader) &&
              this.stickyColumn
            );
          },
          rowVariant: function () {
            return this.bvTableTr.variant;
          },
          headVariant: function () {
            return this.bvTableTr.headVariant;
          },
          footVariant: function () {
            return this.bvTableTr.footVariant;
          },
          tableVariant: function () {
            return this.bvTableTr.tableVariant;
          },
          computedColspan: function () {
            return Zb(this.colspan);
          },
          computedRowspan: function () {
            return Zb(this.rowspan);
          },
          cellClasses: function () {
            var t = this.variant,
              e = this.headVariant,
              n = this.isStickyColumn;
            return (
              ((!t && this.isStickyHeader && !e) ||
                (!t && n && this.inTfoot && !this.footVariant) ||
                (!t && n && this.inThead && !e) ||
                (!t && n && this.inTbody)) &&
                (t = this.rowVariant || this.tableVariant || "b-table-default"),
              [
                t
                  ? "".concat(this.isDark ? "bg" : "table", "-").concat(t)
                  : null,
                n ? "b-table-sticky-column" : null,
              ]
            );
          },
          cellAttrs: function () {
            var t = this.stackedHeading,
              e = this.inThead || this.inTfoot,
              n = this.computedColspan,
              i = this.computedRowspan,
              r = "cell",
              o = null;
            return (
              e
                ? ((r = "columnheader"), (o = n > 0 ? "colspan" : "col"))
                : Object(I.t)(this.tag, "th") &&
                  ((r = "rowheader"), (o = i > 0 ? "rowgroup" : "row")),
              Ub(
                Ub({ colspan: n, rowspan: i, role: r, scope: o }, this.bvAttrs),
                {},
                {
                  "data-label":
                    this.isStackedCell && !Object(d.p)(t)
                      ? Object(ct.g)(t)
                      : null,
                }
              )
            );
          },
        },
        render: function (t) {
          var e = [this.normalizeSlot()];
          return t(
            this.tag,
            {
              class: this.cellClasses,
              attrs: this.cellAttrs,
              on: this.bvListeners,
            },
            [this.isStackedCell ? t("div", [e]) : e]
          );
        },
      }),
      em = E.hb + "busy",
      nm =
        ((Vb = {}),
        (Gb = "busy"),
        (Kb = Object(B.c)(j.g, !1)),
        Gb in Vb
          ? Object.defineProperty(Vb, Gb, {
              value: Kb,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (Vb[Gb] = Kb),
        Vb),
      im = Object(F.c)({
        props: nm,
        data: function () {
          return { localBusy: !1 };
        },
        computed: {
          computedBusy: function () {
            return this.busy || this.localBusy;
          },
        },
        watch: {
          localBusy: function (t, e) {
            t !== e && this.$emit(em, t);
          },
        },
        methods: {
          stopIfBusy: function (t) {
            return !!this.computedBusy && (Object(St.f)(t), !0);
          },
          renderBusy: function () {
            var t = this.tbodyTrClass,
              e = this.tbodyTrAttr,
              n = this.$createElement;
            return this.computedBusy && this.hasNormalizedSlot(P.bb)
              ? n(
                  Fb,
                  {
                    staticClass: "b-table-busy-slot",
                    class: [Object(d.f)(t) ? t(null, P.bb) : t],
                    attrs: Object(d.f)(e) ? e(null, P.bb) : e,
                    key: "table-busy-slot",
                  },
                  [
                    n(
                      tm,
                      {
                        props: { colspan: this.computedFields.length || null },
                      },
                      [this.normalizeSlot(P.bb)]
                    ),
                  ]
                )
              : null;
          },
        },
      }),
      rm = { caption: Object(B.c)(j.u), captionHtml: Object(B.c)(j.u) },
      om = Object(F.c)({
        props: rm,
        computed: {
          captionId: function () {
            return this.isStacked ? this.safeId("_caption_") : null;
          },
        },
        methods: {
          renderCaption: function () {
            var t = this.caption,
              e = this.captionHtml,
              n = this.$createElement,
              i = n(),
              r = this.hasNormalizedSlot(P.cb);
            return (
              (r || t || e) &&
                (i = n(
                  "caption",
                  {
                    attrs: { id: this.captionId },
                    domProps: r ? {} : Ce(e, t),
                    key: "caption",
                    ref: "caption",
                  },
                  this.normalizeSlot(P.cb)
                )),
              i
            );
          },
        },
      }),
      am = {},
      sm = Object(F.c)({
        methods: {
          renderColgroup: function () {
            var t = this.computedFields,
              e = this.$createElement,
              n = e();
            return (
              this.hasNormalizedSlot(P.db) &&
                (n = e("colgroup", { key: "colgroup" }, [
                  this.normalizeSlot(P.db, { columns: t.length, fields: t }),
                ])),
              n
            );
          },
        },
      }),
      lm = {
        emptyFilteredHtml: Object(B.c)(j.u),
        emptyFilteredText: Object(B.c)(
          j.u,
          "There are no records matching your request"
        ),
        emptyHtml: Object(B.c)(j.u),
        emptyText: Object(B.c)(j.u, "There are no records to show"),
        showEmpty: Object(B.c)(j.g, !1),
      },
      cm = Object(F.c)({
        props: lm,
        methods: {
          renderEmpty: function () {
            var t = lt(this),
              e = t.computedItems,
              n = t.computedBusy,
              i = this.$createElement,
              r = i();
            if (
              this.showEmpty &&
              (!e || 0 === e.length) &&
              (!n || !this.hasNormalizedSlot(P.bb))
            ) {
              var o = this.computedFields,
                a = this.isFiltered,
                s = this.emptyText,
                l = this.emptyHtml,
                c = this.emptyFilteredText,
                u = this.emptyFilteredHtml,
                p = this.tbodyTrClass,
                h = this.tbodyTrAttr;
              (r = this.normalizeSlot(a ? P.o : P.n, {
                emptyFilteredHtml: u,
                emptyFilteredText: c,
                emptyHtml: l,
                emptyText: s,
                fields: o,
                items: e,
              })) ||
                (r = i("div", {
                  class: ["text-center", "my-2"],
                  domProps: a ? Ce(u, c) : Ce(l, s),
                })),
                (r = i(tm, { props: { colspan: o.length || null } }, [
                  i(
                    "div",
                    { attrs: { role: "alert", "aria-live": "polite" } },
                    [r]
                  ),
                ])),
                (r = i(
                  Fb,
                  {
                    staticClass: "b-table-empty-row",
                    class: [Object(d.f)(p) ? p(null, "row-empty") : p],
                    attrs: Object(d.f)(h) ? h(null, "row-empty") : h,
                    key: a ? "b-empty-filtered-row" : "b-empty-row",
                  },
                  [r]
                ));
            }
            return r;
          },
        },
      }),
      dm = function t(e) {
        return Object(d.p)(e)
          ? ""
          : Object(d.j)(e) && !Object(d.c)(e)
          ? Object(h.h)(e)
              .sort()
              .map(function (n) {
                return t(e[n]);
              })
              .filter(function (t) {
                return !!t;
              })
              .join(" ")
          : Object(ct.g)(e);
      };
    function um(t, e) {
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
    function pm(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? um(Object(n), !0).forEach(function (e) {
              hm(t, e, n[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
          : um(Object(n)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(n, e)
              );
            });
      }
      return t;
    }
    function hm(t, e, n) {
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
    var fm = "_cellVariants",
      bm = "_rowVariant",
      mm = "_showDetails",
      gm = [fm, bm, mm].reduce(function (t, e) {
        return pm(pm({}, t), {}, hm({}, e, !0));
      }, {}),
      vm = [
        "a",
        "a *",
        "button",
        "button *",
        "input:not(.disabled):not([disabled])",
        "select:not(.disabled):not([disabled])",
        "textarea:not(.disabled):not([disabled])",
        '[role="link"]',
        '[role="link"] *',
        '[role="button"]',
        '[role="button"] *',
        "[tabindex]:not(.disabled):not([disabled])",
      ].join(","),
      _m = function (t, e, n) {
        var i =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
          r = Object(h.h)(i).reduce(function (e, n) {
            var r = i[n],
              o = r.filterByFormatted,
              a = Object(d.f)(o) ? o : o ? r.formatter : null;
            return Object(d.f)(a) && (e[n] = a(t[n], n, t)), e;
          }, Object(h.b)(t)),
          o = Object(h.h)(r).filter(function (t) {
            return !(
              gm[t] ||
              (Object(d.a)(e) && e.length > 0 && Object(kt.a)(e, t)) ||
              (Object(d.a)(n) && n.length > 0 && !Object(kt.a)(n, t))
            );
          });
        return Object(h.k)(r, o);
      };
    function ym(t, e) {
      (null == e || e > t.length) && (e = t.length);
      for (var n = 0, i = new Array(e); n < e; n++) i[n] = t[n];
      return i;
    }
    var Mm = {
        filter: Object(B.c)(
          [].concat(
            (function (t) {
              return (
                (function (t) {
                  if (Array.isArray(t)) return ym(t);
                })(t) ||
                (function (t) {
                  if (
                    ("undefined" != typeof Symbol &&
                      null != t[Symbol.iterator]) ||
                    null != t["@@iterator"]
                  )
                    return Array.from(t);
                })(t) ||
                (function (t, e) {
                  if (t) {
                    if ("string" == typeof t) return ym(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    return (
                      "Object" === n &&
                        t.constructor &&
                        (n = t.constructor.name),
                      "Map" === n || "Set" === n
                        ? Array.from(t)
                        : "Arguments" === n ||
                          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                        ? ym(t, e)
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
            })(j.e),
            [j.t]
          )
        ),
        filterDebounce: Object(B.c)(j.p, 0, function (t) {
          return l.h.test(String(t));
        }),
        filterFunction: Object(B.c)(j.l),
        filterIgnoredFields: Object(B.c)(j.b, []),
        filterIncludedFields: Object(B.c)(j.b, []),
      },
      Om = Object(F.c)({
        props: Mm,
        data: function () {
          return {
            isFiltered: !1,
            localFilter: this.filterSanitize(this.filter),
          };
        },
        computed: {
          computedFilterIgnored: function () {
            return Object(kt.b)(this.filterIgnoredFields || []).filter(c.a);
          },
          computedFilterIncluded: function () {
            return Object(kt.b)(this.filterIncludedFields || []).filter(c.a);
          },
          computedFilterDebounce: function () {
            var t = Object(N.c)(this.filterDebounce, 0);
            return t > 0 && b(0, q.ec), t;
          },
          localFiltering: function () {
            return !this.hasProvider || !!this.noProviderFiltering;
          },
          filteredCheck: function () {
            return {
              filteredItems: this.filteredItems,
              localItems: this.localItems,
              localFilter: this.localFilter,
            };
          },
          localFilterFn: function () {
            var t = this.filterFunction;
            return Object(B.b)(t) ? t : null;
          },
          filteredItems: function () {
            var t = this.localItems,
              e = this.localFilter,
              n = this.localFiltering
                ? this.filterFnFactory(this.localFilterFn, e) ||
                  this.defaultFilterFnFactory(e)
                : null;
            return n && t.length > 0 ? t.filter(n) : t;
          },
        },
        watch: {
          computedFilterDebounce: function (t) {
            !t &&
              this.$_filterTimer &&
              (this.clearFilterTimer(),
              (this.localFilter = this.filterSanitize(this.filter)));
          },
          filter: {
            deep: !0,
            handler: function (t) {
              var e = this,
                n = this.computedFilterDebounce;
              this.clearFilterTimer(),
                n && n > 0
                  ? (this.$_filterTimer = setTimeout(function () {
                      e.localFilter = e.filterSanitize(t);
                    }, n))
                  : (this.localFilter = this.filterSanitize(t));
            },
          },
          filteredCheck: function (t) {
            var e = t.filteredItems,
              n = t.localFilter,
              i = !1;
            n
              ? Object(yn.a)(n, []) || Object(yn.a)(n, {})
                ? (i = !1)
                : n && (i = !0)
              : (i = !1),
              i && this.$emit(E.q, e, e.length),
              (this.isFiltered = i);
          },
          isFiltered: function (t, e) {
            if (!1 === t && !0 === e) {
              var n = this.localItems;
              this.$emit(E.q, n, n.length);
            }
          },
        },
        created: function () {
          var t = this;
          (this.$_filterTimer = null),
            this.$nextTick(function () {
              t.isFiltered = Boolean(t.localFilter);
            });
        },
        beforeDestroy: function () {
          this.clearFilterTimer();
        },
        methods: {
          clearFilterTimer: function () {
            clearTimeout(this.$_filterTimer), (this.$_filterTimer = null);
          },
          filterSanitize: function (t) {
            return !this.localFiltering ||
              this.localFilterFn ||
              Object(d.n)(t) ||
              Object(d.m)(t)
              ? Object(s.a)(t)
              : "";
          },
          filterFnFactory: function (t, e) {
            return t &&
              Object(d.f)(t) &&
              e &&
              !Object(yn.a)(e, []) &&
              !Object(yn.a)(e, {})
              ? function (n) {
                  return t(n, e);
                }
              : null;
          },
          defaultFilterFnFactory: function (t) {
            var e = this;
            if (!t || (!Object(d.n)(t) && !Object(d.m)(t))) return null;
            var n = t;
            if (Object(d.n)(n)) {
              var i = Object(ct.a)(t).replace(l.w, "\\s+");
              n = new RegExp(".*".concat(i, ".*"), "i");
            }
            return function (t) {
              return (
                (n.lastIndex = 0),
                n.test(
                  ((i = t),
                  (r = e.computedFilterIgnored),
                  (o = e.computedFilterIncluded),
                  (a = e.computedFieldsObj),
                  Object(d.j)(i) ? dm(_m(i, r, o, a)) : "")
                )
              );
              var i, r, o, a;
            };
          },
        },
      });
    function wm(t, e) {
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
    function Am(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? wm(Object(n), !0).forEach(function (e) {
              xm(t, e, n[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
          : wm(Object(n)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(n, e)
              );
            });
      }
      return t;
    }
    function xm(t, e, n) {
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
    var zm = Object(W.a)("value", { type: j.b, defaultValue: [] }),
      Cm = zm.mixin,
      km = zm.props,
      Sm = zm.prop,
      Tm = zm.event,
      Dm = Object(h.m)(
        Am(
          Am({}, km),
          {},
          xm(
            {
              fields: Object(B.c)(j.b, null),
              items: Object(B.c)(j.b, []),
              primaryKey: Object(B.c)(j.u),
            },
            Sm,
            Object(B.c)(j.b, [])
          )
        )
      ),
      Lm = Object(F.c)({
        mixins: [Cm, Du],
        props: Dm,
        data: function () {
          var t = this.items;
          return { localItems: Object(d.a)(t) ? t.slice() : [] };
        },
        computed: {
          computedFields: function () {
            return (function (t, e) {
              var n = [];
              if (
                (Object(d.a)(t) &&
                  t.filter(c.a).forEach(function (t) {
                    if (Object(d.n)(t))
                      n.push({ key: t, label: Object(ct.f)(t) });
                    else if (Object(d.j)(t) && t.key && Object(d.n)(t.key))
                      n.push(Object(h.b)(t));
                    else if (Object(d.j)(t) && 1 === Object(h.h)(t).length) {
                      var e = Object(h.h)(t)[0],
                        i = (function (t, e) {
                          var n = null;
                          return (
                            Object(d.n)(e)
                              ? (n = { key: t, label: e })
                              : Object(d.f)(e)
                              ? (n = { key: t, formatter: e })
                              : Object(d.j)(e)
                              ? ((n = Object(h.b)(e)).key = n.key || t)
                              : !1 !== e && (n = { key: t }),
                            n
                          );
                        })(e, t[e]);
                      i && n.push(i);
                    }
                  }),
                0 === n.length && Object(d.a)(e) && e.length > 0)
              ) {
                var i = e[0];
                Object(h.h)(i).forEach(function (t) {
                  gm[t] || n.push({ key: t, label: Object(ct.f)(t) });
                });
              }
              var r = {};
              return n.filter(function (t) {
                return (
                  !r[t.key] &&
                  ((r[t.key] = !0),
                  (t.label = Object(d.n)(t.label)
                    ? t.label
                    : Object(ct.f)(t.key)),
                  !0)
                );
              });
            })(this.fields, this.localItems);
          },
          computedFieldsObj: function () {
            var t = this.bvParent;
            return this.computedFields.reduce(function (e, n) {
              if (((e[n.key] = Object(h.b)(n)), n.formatter)) {
                var i = n.formatter;
                Object(d.n)(i) && Object(d.f)(t[i])
                  ? (i = t[i])
                  : Object(d.f)(i) || (i = void 0),
                  (e[n.key].formatter = i);
              }
              return e;
            }, {});
          },
          computedItems: function () {
            var t = lt(this),
              e = t.paginatedItems,
              n = t.sortedItems,
              i = t.filteredItems,
              r = t.localItems;
            return (e || n || i || r || []).slice();
          },
          context: function () {
            var t = lt(this),
              e = t.perPage,
              n = t.currentPage;
            return {
              filter: this.localFilter,
              sortBy: this.localSortBy,
              sortDesc: this.localSortDesc,
              perPage: Object(it.d)(Object(N.c)(e, 0), 0),
              currentPage: Object(it.d)(Object(N.c)(n, 0), 1),
              apiUrl: this.apiUrl,
            };
          },
        },
        watch: {
          items: function (t) {
            this.localItems = Object(d.a)(t) ? t.slice() : [];
          },
          computedItems: function (t, e) {
            Object(yn.a)(t, e) || this.$emit(Tm, t);
          },
          context: function (t, e) {
            Object(yn.a)(t, e) || this.$emit(E.i, t);
          },
        },
        mounted: function () {
          this.$emit(Tm, this.computedItems);
        },
        methods: {
          getFieldFormatter: function (t) {
            var e = this.computedFieldsObj[t];
            return e ? e.formatter : void 0;
          },
        },
      }),
      qm = { currentPage: Object(B.c)(j.p, 1), perPage: Object(B.c)(j.p, 0) },
      Em = Object(F.c)({
        props: qm,
        computed: {
          localPaging: function () {
            return !this.hasProvider || !!this.noProviderPaging;
          },
          paginatedItems: function () {
            var t = lt(this),
              e = t.sortedItems,
              n = t.filteredItems,
              i = t.localItems,
              r = e || n || i || [],
              o = Object(it.d)(Object(N.c)(this.currentPage, 1), 1),
              a = Object(it.d)(Object(N.c)(this.perPage, 0), 0);
            return (
              this.localPaging && a && (r = r.slice((o - 1) * a, o * a)), r
            );
          },
        },
      }),
      jm = Object(St.e)(q.ec, E.K),
      Pm = Object(St.d)(q.ec, E.J),
      Rm = {
        apiUrl: Object(B.c)(j.u),
        items: Object(B.c)(j.c, []),
        noProviderFiltering: Object(B.c)(j.g, !1),
        noProviderPaging: Object(B.c)(j.g, !1),
        noProviderSorting: Object(B.c)(j.g, !1),
      },
      Im = Object(F.c)({
        mixins: [Dt.a],
        props: Rm,
        computed: {
          hasProvider: function () {
            return Object(d.f)(this.items);
          },
          providerTriggerContext: function () {
            var t = {
              apiUrl: this.apiUrl,
              filter: null,
              sortBy: null,
              sortDesc: null,
              perPage: null,
              currentPage: null,
            };
            return (
              this.noProviderFiltering || (t.filter = this.localFilter),
              this.noProviderSorting ||
                ((t.sortBy = this.localSortBy),
                (t.sortDesc = this.localSortDesc)),
              this.noProviderPaging ||
                ((t.perPage = this.perPage),
                (t.currentPage = this.currentPage)),
              Object(h.b)(t)
            );
          },
        },
        watch: {
          items: function (t) {
            (this.hasProvider || Object(d.f)(t)) &&
              this.$nextTick(this._providerUpdate);
          },
          providerTriggerContext: function (t, e) {
            Object(yn.a)(t, e) || this.$nextTick(this._providerUpdate);
          },
        },
        mounted: function () {
          var t = this;
          !this.hasProvider ||
            (this.localItems && 0 !== this.localItems.length) ||
            this._providerUpdate(),
            this.listenOnRoot(Pm, function (e) {
              (e !== t.id && e !== t) || t.refresh();
            });
        },
        methods: {
          refresh: function () {
            var t = lt(this),
              e = t.items,
              n = t.refresh,
              i = t.computedBusy;
            this.$off(E.K, n),
              i
                ? this.localBusy && this.hasProvider && this.$on(E.K, n)
                : (this.clearSelected(),
                  this.hasProvider
                    ? this.$nextTick(this._providerUpdate)
                    : (this.localItems = Object(d.a)(e) ? e.slice() : []));
          },
          _providerSetLocal: function (t) {
            (this.localItems = Object(d.a)(t) ? t.slice() : []),
              (this.localBusy = !1),
              this.$emit(E.K),
              this.id && this.emitOnRoot(jm, this.id);
          },
          _providerUpdate: function () {
            var t = this;
            this.hasProvider &&
              (lt(this).computedBusy
                ? this.$nextTick(this.refresh)
                : ((this.localBusy = !0),
                  this.$nextTick(function () {
                    try {
                      var e = t.items(t.context, t._providerSetLocal);
                      Object(d.l)(e)
                        ? e.then(function (e) {
                            t._providerSetLocal(e);
                          })
                        : Object(d.a)(e)
                        ? t._providerSetLocal(e)
                        : 2 !== t.items.length &&
                          (b(0, q.ec), (t.localBusy = !1));
                    } catch (e) {
                      b(
                        "Provider function error ["
                          .concat(e.name, "] ")
                          .concat(e.message, "."),
                        q.ec
                      ),
                        (t.localBusy = !1),
                        t.$off(E.K, t.refresh);
                    }
                  })));
          },
        },
      });
    function Wm(t, e, n) {
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
    var Nm,
      Bm,
      Fm = ["range", "multi", "single"],
      $m = {
        noSelectOnClick: Object(B.c)(j.g, !1),
        selectMode: Object(B.c)(j.u, "multi", function (t) {
          return Object(kt.a)(Fm, t);
        }),
        selectable: Object(B.c)(j.g, !1),
        selectedVariant: Object(B.c)(j.u, "active"),
      },
      Hm = Object(F.c)({
        props: $m,
        data: function () {
          return { selectedRows: [], selectedLastRow: -1 };
        },
        computed: {
          isSelectable: function () {
            return this.selectable && this.selectMode;
          },
          hasSelectableRowClick: function () {
            return this.isSelectable && !this.noSelectOnClick;
          },
          supportsSelectableRows: function () {
            return !0;
          },
          selectableHasSelection: function () {
            var t = this.selectedRows;
            return this.isSelectable && t && t.length > 0 && t.some(c.a);
          },
          selectableIsMultiSelect: function () {
            return (
              this.isSelectable &&
              Object(kt.a)(["range", "multi"], this.selectMode)
            );
          },
          selectableTableClasses: function () {
            var t,
              e = this.isSelectable;
            return (
              Wm(
                (t = { "b-table-selectable": e }),
                "b-table-select-".concat(this.selectMode),
                e
              ),
              Wm(t, "b-table-selecting", this.selectableHasSelection),
              Wm(
                t,
                "b-table-selectable-no-click",
                e && !this.hasSelectableRowClick
              ),
              t
            );
          },
          selectableTableAttrs: function () {
            if (!this.isSelectable) return {};
            var t = this.bvAttrs.role || "grid";
            return {
              role: t,
              "aria-multiselectable":
                "grid" === t
                  ? Object(ct.g)(this.selectableIsMultiSelect)
                  : null,
            };
          },
        },
        watch: {
          computedItems: function (t, e) {
            var n = !1;
            if (this.isSelectable && this.selectedRows.length > 0) {
              n = Object(d.a)(t) && Object(d.a)(e) && t.length === e.length;
              for (var i = 0; n && i < t.length; i++)
                n = Object(yn.a)(_m(t[i]), _m(e[i]));
            }
            n || this.clearSelected();
          },
          selectable: function (t) {
            this.clearSelected(), this.setSelectionHandlers(t);
          },
          selectMode: function () {
            this.clearSelected();
          },
          hasSelectableRowClick: function (t) {
            this.clearSelected(), this.setSelectionHandlers(!t);
          },
          selectedRows: function (t, e) {
            var n = this;
            if (this.isSelectable && !Object(yn.a)(t, e)) {
              var i = [];
              t.forEach(function (t, e) {
                t && i.push(n.computedItems[e]);
              }),
                this.$emit(E.R, i);
            }
          },
        },
        beforeMount: function () {
          this.isSelectable && this.setSelectionHandlers(!0);
        },
        methods: {
          selectRow: function (t) {
            if (
              this.isSelectable &&
              Object(d.h)(t) &&
              t >= 0 &&
              t < this.computedItems.length &&
              !this.isRowSelected(t)
            ) {
              var e = this.selectableIsMultiSelect
                ? this.selectedRows.slice()
                : [];
              (e[t] = !0),
                (this.selectedLastClicked = -1),
                (this.selectedRows = e);
            }
          },
          unselectRow: function (t) {
            if (this.isSelectable && Object(d.h)(t) && this.isRowSelected(t)) {
              var e = this.selectedRows.slice();
              (e[t] = !1),
                (this.selectedLastClicked = -1),
                (this.selectedRows = e);
            }
          },
          selectAllRows: function () {
            var t = this.computedItems.length;
            this.isSelectable &&
              t > 0 &&
              ((this.selectedLastClicked = -1),
              (this.selectedRows = this.selectableIsMultiSelect
                ? Object(kt.c)(t, !0)
                : [!0]));
          },
          isRowSelected: function (t) {
            return !(!Object(d.h)(t) || !this.selectedRows[t]);
          },
          clearSelected: function () {
            (this.selectedLastClicked = -1), (this.selectedRows = []);
          },
          selectableRowClasses: function (t) {
            if (this.isSelectable && this.isRowSelected(t)) {
              var e = this.selectedVariant;
              return Wm(
                { "b-table-row-selected": !0 },
                "".concat(this.dark ? "bg" : "table", "-").concat(e),
                e
              );
            }
            return {};
          },
          selectableRowAttrs: function (t) {
            return {
              "aria-selected": this.isSelectable
                ? this.isRowSelected(t)
                  ? "true"
                  : "false"
                : null,
            };
          },
          setSelectionHandlers: function (t) {
            var e = t && !this.noSelectOnClick ? "$on" : "$off";
            this[e](E.M, this.selectionHandler),
              this[e](E.q, this.clearSelected),
              this[e](E.i, this.clearSelected);
          },
          selectionHandler: function (t, e, n) {
            if (this.isSelectable && !this.noSelectOnClick) {
              var i = this.selectMode,
                r = this.selectedLastRow,
                o = this.selectedRows.slice(),
                a = !o[e];
              if ("single" === i) o = [];
              else if ("range" === i)
                if (r > -1 && n.shiftKey) {
                  for (var s = Object(it.e)(r, e); s <= Object(it.d)(r, e); s++)
                    o[s] = !0;
                  a = !0;
                } else
                  n.ctrlKey || n.metaKey || ((o = []), (a = !0)),
                    a && (this.selectedLastRow = e);
              (o[e] = a), (this.selectedRows = o);
            } else this.clearSelected();
          },
        },
      }),
      Ym = function (t, e) {
        return t
          .map(function (t, e) {
            return [e, t];
          })
          .sort(
            function (t, e) {
              return this(t[1], e[1]) || t[0] - e[0];
            }.bind(e)
          )
          .map(function (t) {
            return t[1];
          });
      },
      Um = function (t) {
        return Object(d.p)(t) ? "" : Object(d.i)(t) ? Object(N.b)(t, t) : t;
      };
    function Xm(t, e) {
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
    function Vm(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? Xm(Object(n), !0).forEach(function (e) {
              Gm(t, e, n[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
          : Xm(Object(n)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(n, e)
              );
            });
      }
      return t;
    }
    function Gm(t, e, n) {
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
    var Km = E.hb + "sortBy",
      Zm = E.hb + "sortDesc",
      Jm = ["asc", "desc", "last"],
      Qm =
        (Gm(
          (Nm = {
            labelSortAsc: Object(B.c)(j.u, "Click to sort ascending"),
            labelSortClear: Object(B.c)(j.u, "Click to clear sorting"),
            labelSortDesc: Object(B.c)(j.u, "Click to sort descending"),
            noFooterSorting: Object(B.c)(j.g, !1),
            noLocalSorting: Object(B.c)(j.g, !1),
            noSortReset: Object(B.c)(j.g, !1),
          }),
          "sortBy",
          Object(B.c)(j.u)
        ),
        Gm(Nm, "sortCompare", Object(B.c)(j.l)),
        Gm(Nm, "sortCompareLocale", Object(B.c)(j.f)),
        Gm(Nm, "sortCompareOptions", Object(B.c)(j.q, { numeric: !0 })),
        Gm(Nm, "sortDesc", Object(B.c)(j.g, !1)),
        Gm(
          Nm,
          "sortDirection",
          Object(B.c)(j.u, "asc", function (t) {
            return Object(kt.a)(Jm, t);
          })
        ),
        Gm(Nm, "sortIconLeft", Object(B.c)(j.g, !1)),
        Gm(Nm, "sortNullLast", Object(B.c)(j.g, !1)),
        Nm),
      tg = Object(F.c)({
        props: Qm,
        data: function () {
          return {
            localSortBy: this.sortBy || "",
            localSortDesc: this.sortDesc || !1,
          };
        },
        computed: {
          localSorting: function () {
            return this.hasProvider
              ? !!this.noProviderSorting
              : !this.noLocalSorting;
          },
          isSortable: function () {
            return this.computedFields.some(function (t) {
              return t.sortable;
            });
          },
          sortedItems: function () {
            var t = lt(this),
              e = t.localSortBy,
              n = t.localSortDesc,
              i = t.sortCompareLocale,
              r = t.sortNullLast,
              o = t.sortCompare,
              a = t.localSorting,
              s = t.filteredItems,
              l = t.localItems,
              c = (s || l || []).slice(),
              u = Vm(Vm({}, this.sortCompareOptions), {}, { usage: "sort" });
            if (e && a) {
              var h = (this.computedFieldsObj[e] || {}).sortByFormatted,
                f = Object(d.f)(h) ? h : h ? this.getFieldFormatter(e) : void 0;
              return Ym(c, function (t, a) {
                var s = null;
                return (
                  Object(d.f)(o) && (s = o(t, a, e, n, f, u, i)),
                  (Object(d.p)(s) || !1 === s) &&
                    (s = (function (t, e) {
                      var n =
                          arguments.length > 2 && void 0 !== arguments[2]
                            ? arguments[2]
                            : {},
                        i = n.sortBy,
                        r = void 0 === i ? null : i,
                        o = n.formatter,
                        a = void 0 === o ? null : o,
                        s = n.locale,
                        l = void 0 === s ? void 0 : s,
                        c = n.localeOptions,
                        u = void 0 === c ? {} : c,
                        h = n.nullLast,
                        f = void 0 !== h && h,
                        b = p(t, r, null),
                        m = p(e, r, null);
                      return (
                        Object(d.f)(a) && ((b = a(b, r, t)), (m = a(m, r, e))),
                        (b = Um(b)),
                        (m = Um(m)),
                        (Object(d.c)(b) && Object(d.c)(m)) ||
                        (Object(d.h)(b) && Object(d.h)(m))
                          ? b < m
                            ? -1
                            : b > m
                            ? 1
                            : 0
                          : f && "" === b && "" !== m
                          ? 1
                          : f && "" !== b && "" === m
                          ? -1
                          : dm(b).localeCompare(dm(m), l, u)
                      );
                    })(t, a, {
                      sortBy: e,
                      formatter: f,
                      locale: i,
                      localeOptions: u,
                      nullLast: r,
                    })),
                  (s || 0) * (n ? -1 : 1)
                );
              });
            }
            return c;
          },
        },
        watch:
          ((Bm = {
            isSortable: function (t) {
              t
                ? this.isSortable && this.$on(E.v, this.handleSort)
                : this.$off(E.v, this.handleSort);
            },
          }),
          Gm(Bm, "sortDesc", function (t) {
            t !== this.localSortDesc && (this.localSortDesc = t || !1);
          }),
          Gm(Bm, "sortBy", function (t) {
            t !== this.localSortBy && (this.localSortBy = t || "");
          }),
          Gm(Bm, "localSortDesc", function (t, e) {
            t !== e && this.$emit(Zm, t);
          }),
          Gm(Bm, "localSortBy", function (t, e) {
            t !== e && this.$emit(Km, t);
          }),
          Bm),
        created: function () {
          this.isSortable && this.$on(E.v, this.handleSort);
        },
        methods: {
          handleSort: function (t, e, n, i) {
            var r = this;
            if (this.isSortable && (!i || !this.noFooterSorting)) {
              var o = !1,
                a = function () {
                  var t = e.sortDirection || r.sortDirection;
                  "asc" === t
                    ? (r.localSortDesc = !1)
                    : "desc" === t && (r.localSortDesc = !0);
                };
              if (e.sortable) {
                var s = !this.localSorting && e.sortKey ? e.sortKey : t;
                this.localSortBy === s
                  ? (this.localSortDesc = !this.localSortDesc)
                  : ((this.localSortBy = s), a()),
                  (o = !0);
              } else
                this.localSortBy &&
                  !this.noSortReset &&
                  ((this.localSortBy = ""), a(), (o = !0));
              o && this.$emit(E.Y, this.context);
            }
          },
          sortTheadThClasses: function (t, e, n) {
            return {
              "b-table-sort-icon-left":
                e.sortable && this.sortIconLeft && !(n && this.noFooterSorting),
            };
          },
          sortTheadThAttrs: function (t, e, n) {
            var i,
              r = this.isSortable,
              o = this.noFooterSorting,
              a = this.localSortDesc,
              s = this.localSortBy,
              l = this.localSorting;
            if (!r || (n && o)) return {};
            var c = e.sortable,
              d = l ? t : null !== (i = e.sortKey) && void 0 !== i ? i : t;
            return {
              "aria-sort":
                c && s === d
                  ? a
                    ? "descending"
                    : "ascending"
                  : c
                  ? "none"
                  : null,
            };
          },
          sortTheadThLabel: function (t, e, n) {
            if (!this.isSortable || (n && this.noFooterSorting)) return null;
            var i = this.localSortBy,
              r = this.localSortDesc,
              o = this.labelSortAsc,
              a = this.labelSortDesc,
              s = "";
            if (e.sortable)
              if (i === t) s = r ? o : a;
              else {
                s = r ? a : o;
                var l = this.sortDirection || e.sortDirection;
                "asc" === l ? (s = o) : "desc" === l && (s = a);
              }
            else this.noSortReset || (s = i ? this.labelSortClear : "");
            return Object(ct.h)(s) || null;
          },
        },
      });
    function eg(t, e) {
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
    function ng(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? eg(Object(n), !0).forEach(function (e) {
              ig(t, e, n[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
          : eg(Object(n)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(n, e)
              );
            });
      }
      return t;
    }
    function ig(t, e, n) {
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
    var rg = Object(B.d)(
        {
          tbodyTransitionHandlers: Object(B.c)(j.q),
          tbodyTransitionProps: Object(B.c)(j.q),
        },
        q.kc
      ),
      og = Object(F.c)({
        name: q.kc,
        mixins: [Tt.a, It, R.a],
        provide: function () {
          var t = this;
          return {
            getBvTableRowGroup: function () {
              return t;
            },
          };
        },
        inject: {
          getBvTable: {
            default: function () {
              return function () {
                return {};
              };
            },
          },
        },
        inheritAttrs: !1,
        props: rg,
        computed: {
          bvTable: function () {
            return this.getBvTable();
          },
          isTbody: function () {
            return !0;
          },
          isDark: function () {
            return this.bvTable.dark;
          },
          isStacked: function () {
            return this.bvTable.isStacked;
          },
          isResponsive: function () {
            return this.bvTable.isResponsive;
          },
          isStickyHeader: function () {
            return !1;
          },
          hasStickyHeader: function () {
            return !this.isStacked && this.bvTable.stickyHeader;
          },
          tableVariant: function () {
            return this.bvTable.tableVariant;
          },
          isTransitionGroup: function () {
            return this.tbodyTransitionProps || this.tbodyTransitionHandlers;
          },
          tbodyAttrs: function () {
            return ng({ role: "rowgroup" }, this.bvAttrs);
          },
          tbodyProps: function () {
            var t = this.tbodyTransitionProps;
            return t ? ng(ng({}, t), {}, { tag: "tbody" }) : {};
          },
        },
        render: function (t) {
          var e = { props: this.tbodyProps, attrs: this.tbodyAttrs };
          return (
            this.isTransitionGroup
              ? ((e.on = this.tbodyTransitionHandlers || {}),
                (e.nativeOn = this.bvListeners))
              : (e.on = this.bvListeners),
            t(
              this.isTransitionGroup ? "transition-group" : "tbody",
              e,
              this.normalizeSlot()
            )
          );
        },
      }),
      ag = ["TD", "TH", "TR"],
      sg = function (t) {
        if (!t || !t.target) return !1;
        var e = t.target;
        if (e.disabled || -1 !== ag.indexOf(e.tagName)) return !1;
        if (Object(I.e)(".dropdown-menu", e)) return !0;
        var n = "LABEL" === e.tagName ? e : Object(I.e)("label", e);
        if (n) {
          var i = Object(I.h)(n, "for"),
            r = i ? Object(I.j)(i) : Object(I.E)("input, select, textarea", n);
          if (r && !r.disabled) return !0;
        }
        return Object(I.v)(e, vm);
      },
      lg = function () {
        var t =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : document,
          e = Object(I.l)();
        return (
          !!(
            e &&
            "" !== e.toString().trim() &&
            e.containsNode &&
            Object(I.s)(t)
          ) && e.containsNode(t, !0)
        );
      },
      cg = Object(B.d)(Qb, q.mc),
      dg = Object(F.c)({
        name: q.mc,
        extends: tm,
        props: cg,
        computed: {
          tag: function () {
            return "th";
          },
        },
      });
    function ug(t, e) {
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
    function pg(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? ug(Object(n), !0).forEach(function (e) {
              hg(t, e, n[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
          : ug(Object(n)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(n, e)
              );
            });
      }
      return t;
    }
    function hg(t, e, n) {
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
    function fg(t, e) {
      (null == e || e > t.length) && (e = t.length);
      for (var n = 0, i = new Array(e); n < e; n++) i[n] = t[n];
      return i;
    }
    var bg = {
        detailsTdClass: Object(B.c)(j.e),
        tbodyTrAttr: Object(B.c)(j.r),
        tbodyTrClass: Object(B.c)(
          [].concat(
            (function (t) {
              return (
                (function (t) {
                  if (Array.isArray(t)) return fg(t);
                })(t) ||
                (function (t) {
                  if (
                    ("undefined" != typeof Symbol &&
                      null != t[Symbol.iterator]) ||
                    null != t["@@iterator"]
                  )
                    return Array.from(t);
                })(t) ||
                (function (t, e) {
                  if (t) {
                    if ("string" == typeof t) return fg(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    return (
                      "Object" === n &&
                        t.constructor &&
                        (n = t.constructor.name),
                      "Map" === n || "Set" === n
                        ? Array.from(t)
                        : "Arguments" === n ||
                          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                        ? fg(t, e)
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
            })(j.e),
            [j.l]
          )
        ),
      },
      mg = Object(F.c)({
        mixins: [Du],
        props: bg,
        methods: {
          getTdValues: function (t, e, n, i) {
            var r = this.bvParent;
            if (n) {
              var o = p(t, e, "");
              return Object(d.f)(n)
                ? n(o, e, t)
                : Object(d.n)(n) && Object(d.f)(r[n])
                ? r[n](o, e, t)
                : n;
            }
            return i;
          },
          getThValues: function (t, e, n, i, r) {
            var o = this.bvParent;
            if (n) {
              var a = p(t, e, "");
              return Object(d.f)(n)
                ? n(a, e, t, i)
                : Object(d.n)(n) && Object(d.f)(o[n])
                ? o[n](a, e, t, i)
                : n;
            }
            return r;
          },
          getFormattedValue: function (t, e) {
            var n = e.key,
              i = this.getFieldFormatter(n),
              r = p(t, n, null);
            return Object(d.f)(i) && (r = i(r, n, t)), Object(d.p)(r) ? "" : r;
          },
          toggleDetailsFactory: function (t, e) {
            var n = this;
            return function () {
              t && n.$set(e, mm, !e[mm]);
            };
          },
          rowHovered: function (t) {
            this.tbodyRowEventStopped(t) || this.emitTbodyRowEvent(E.P, t);
          },
          rowUnhovered: function (t) {
            this.tbodyRowEventStopped(t) || this.emitTbodyRowEvent(E.S, t);
          },
          renderTbodyRowCell: function (t, e, n, i) {
            var r = this,
              o = this.isStacked,
              a = t.key,
              s = t.label,
              l = t.isRowHeader,
              c = this.$createElement,
              u = this.hasNormalizedSlot(P.ab),
              h = this.getFormattedValue(n, t),
              f =
                !o &&
                (this.isResponsive || this.stickyHeader) &&
                t.stickyColumn,
              b = f ? (l ? dg : tm) : l ? "th" : "td",
              m = n[fm] && n[fm][a] ? n[fm][a] : t.variant || null,
              g = {
                class: [
                  t.class ? t.class : "",
                  this.getTdValues(n, a, t.tdClass, ""),
                ],
                props: {},
                attrs: pg(
                  { "aria-colindex": String(e + 1) },
                  l
                    ? this.getThValues(n, a, t.thAttr, "row", {})
                    : this.getTdValues(n, a, t.tdAttr, {})
                ),
                key: "row-".concat(i, "-cell-").concat(e, "-").concat(a),
              };
            f
              ? (g.props = {
                  stackedHeading: o ? s : null,
                  stickyColumn: !0,
                  variant: m,
                })
              : ((g.attrs["data-label"] =
                  o && !Object(d.p)(s) ? Object(ct.g)(s) : null),
                (g.attrs.role = l ? "rowheader" : "cell"),
                (g.attrs.scope = l ? "row" : null),
                m &&
                  g.class.push(
                    "".concat(this.dark ? "bg" : "table", "-").concat(m)
                  ));
            var v = {
              item: n,
              index: i,
              field: t,
              unformatted: p(n, a, ""),
              value: h,
              toggleDetails: this.toggleDetailsFactory(u, n),
              detailsShowing: Boolean(n[mm]),
            };
            lt(this).supportsSelectableRows &&
              ((v.rowSelected = this.isRowSelected(i)),
              (v.selectRow = function () {
                return r.selectRow(i);
              }),
              (v.unselectRow = function () {
                return r.unselectRow(i);
              }));
            var _ = this.$_bodyFieldSlotNameCache[a],
              y = _ ? this.normalizeSlot(_, v) : Object(ct.g)(h);
            return this.isStacked && (y = [c("div", [y])]), c(b, g, [y]);
          },
          renderTbodyRow: function (t, e) {
            var n = this,
              i = lt(this),
              r = i.computedFields,
              o = i.striped,
              a = i.primaryKey,
              s = i.currentPage,
              l = i.perPage,
              c = i.tbodyTrClass,
              u = i.tbodyTrAttr,
              h = i.hasSelectableRowClick,
              f = this.$createElement,
              b = this.hasNormalizedSlot(P.ab),
              m = t[mm] && b,
              g = this.$listeners[E.M] || h,
              v = [],
              _ = m ? this.safeId("_details_".concat(e, "_")) : null,
              y = r.map(function (i, r) {
                return n.renderTbodyRowCell(i, r, t, e);
              }),
              M = null;
            s && l && l > 0 && (M = String((s - 1) * l + e + 1));
            var O = Object(ct.g)(p(t, a)) || null,
              w = O || Object(ct.g)(e),
              A = O ? this.safeId("_row_".concat(O)) : null,
              x = lt(this).selectableRowClasses
                ? this.selectableRowClasses(e)
                : {},
              z = lt(this).selectableRowAttrs ? this.selectableRowAttrs(e) : {},
              C = Object(d.f)(c) ? c(t, "row") : c,
              k = Object(d.f)(u) ? u(t, "row") : u;
            if (
              (v.push(
                f(
                  Fb,
                  hg(
                    {
                      class: [C, x, m ? "b-table-has-details" : ""],
                      props: { variant: t[bm] || null },
                      attrs: pg(
                        pg({ id: A }, k),
                        {},
                        {
                          tabindex: g ? "0" : null,
                          "data-pk": O || null,
                          "aria-details": _,
                          "aria-owns": _,
                          "aria-rowindex": M,
                        },
                        z
                      ),
                      on: {
                        mouseenter: this.rowHovered,
                        mouseleave: this.rowUnhovered,
                      },
                      key: "__b-table-row-".concat(w, "__"),
                      ref: "item-rows",
                    },
                    F.b,
                    !0
                  ),
                  y
                )
              ),
              m)
            ) {
              var S = {
                item: t,
                index: e,
                fields: r,
                toggleDetails: this.toggleDetailsFactory(b, t),
              };
              lt(this).supportsSelectableRows &&
                ((S.rowSelected = this.isRowSelected(e)),
                (S.selectRow = function () {
                  return n.selectRow(e);
                }),
                (S.unselectRow = function () {
                  return n.unselectRow(e);
                }));
              var T = f(
                tm,
                { props: { colspan: r.length }, class: this.detailsTdClass },
                [this.normalizeSlot(P.ab, S)]
              );
              o &&
                v.push(
                  f("tr", {
                    staticClass: "d-none",
                    attrs: { "aria-hidden": "true", role: "presentation" },
                    key: "__b-table-details-stripe__".concat(w),
                  })
                );
              var D = Object(d.f)(this.tbodyTrClass)
                  ? this.tbodyTrClass(t, P.ab)
                  : this.tbodyTrClass,
                L = Object(d.f)(this.tbodyTrAttr)
                  ? this.tbodyTrAttr(t, P.ab)
                  : this.tbodyTrAttr;
              v.push(
                f(
                  Fb,
                  {
                    staticClass: "b-table-details",
                    class: [D],
                    props: { variant: t[bm] || null },
                    attrs: pg(pg({}, L), {}, { id: _, tabindex: "-1" }),
                    key: "__b-table-details__".concat(w),
                  },
                  [T]
                )
              );
            } else b && (v.push(f()), o && v.push(f()));
            return v;
          },
        },
      });
    function gg(t, e) {
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
    function vg(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? gg(Object(n), !0).forEach(function (e) {
              _g(t, e, n[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
          : gg(Object(n)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(n, e)
              );
            });
      }
      return t;
    }
    function _g(t, e, n) {
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
    var yg = function (t) {
        return "cell(".concat(t || "", ")");
      },
      Mg = Object(h.m)(
        vg(vg(vg({}, rg), bg), {}, { tbodyClass: Object(B.c)(j.e) })
      ),
      Og = Object(F.c)({
        mixins: [mg],
        props: Mg,
        beforeDestroy: function () {
          this.$_bodyFieldSlotNameCache = null;
        },
        methods: {
          getTbodyTrs: function () {
            var t = this.$refs,
              e = t.tbody ? t.tbody.$el || t.tbody : null,
              n = (t["item-rows"] || []).map(function (t) {
                return t.$el || t;
              });
            return e && e.children && e.children.length > 0 && n && n.length > 0
              ? Object(kt.f)(e.children).filter(function (t) {
                  return Object(kt.a)(n, t);
                })
              : [];
          },
          getTbodyTrIndex: function (t) {
            if (!Object(I.s)(t)) return -1;
            var e = "TR" === t.tagName ? t : Object(I.e)("tr", t, !0);
            return e ? this.getTbodyTrs().indexOf(e) : -1;
          },
          emitTbodyRowEvent: function (t, e) {
            if (t && this.hasListener(t) && e && e.target) {
              var n = this.getTbodyTrIndex(e.target);
              if (n > -1) {
                var i = this.computedItems[n];
                this.$emit(t, i, n, e);
              }
            }
          },
          tbodyRowEventStopped: function (t) {
            return this.stopIfBusy && this.stopIfBusy(t);
          },
          onTbodyRowKeydown: function (t) {
            var e = t.target,
              n = t.keyCode;
            if (
              !this.tbodyRowEventStopped(t) &&
              "TR" === e.tagName &&
              Object(I.q)(e) &&
              0 === e.tabIndex
            )
              if (Object(kt.a)([Ct.e, Ct.l], n))
                Object(St.f)(t), this.onTBodyRowClicked(t);
              else if (Object(kt.a)([Ct.m, Ct.c, Ct.g, Ct.d], n)) {
                var i = this.getTbodyTrIndex(e);
                if (i > -1) {
                  Object(St.f)(t);
                  var r = this.getTbodyTrs(),
                    o = t.shiftKey;
                  n === Ct.g || (o && n === Ct.m)
                    ? Object(I.d)(r[0])
                    : n === Ct.d || (o && n === Ct.c)
                    ? Object(I.d)(r[r.length - 1])
                    : n === Ct.m && i > 0
                    ? Object(I.d)(r[i - 1])
                    : n === Ct.c && i < r.length - 1 && Object(I.d)(r[i + 1]);
                }
              }
          },
          onTBodyRowClicked: function (t) {
            var e = this.$refs,
              n = e.tbody ? e.tbody.$el || e.tbody : null;
            this.tbodyRowEventStopped(t) ||
              sg(t) ||
              lg(n || this.$el) ||
              this.emitTbodyRowEvent(E.M, t);
          },
          onTbodyRowMiddleMouseRowClicked: function (t) {
            this.tbodyRowEventStopped(t) ||
              2 !== t.which ||
              this.emitTbodyRowEvent(E.Q, t);
          },
          onTbodyRowContextmenu: function (t) {
            this.tbodyRowEventStopped(t) || this.emitTbodyRowEvent(E.N, t);
          },
          onTbodyRowDblClicked: function (t) {
            this.tbodyRowEventStopped(t) ||
              sg(t) ||
              this.emitTbodyRowEvent(E.O, t);
          },
          renderTbody: function () {
            var t = this,
              e = lt(this),
              n = e.computedItems,
              i = e.renderBusy,
              r = e.renderTopRow,
              o = e.renderEmpty,
              a = e.renderBottomRow,
              s = e.hasSelectableRowClick,
              l = this.$createElement,
              c = this.hasListener(E.M) || s,
              d = [],
              u = i ? i() : null;
            if (u) d.push(u);
            else {
              var p = {},
                h = yg();
              (h = this.hasNormalizedSlot(h) ? h : null),
                this.computedFields.forEach(function (e) {
                  var n = e.key,
                    i = yg(n),
                    r = yg(n.toLowerCase());
                  p[n] = t.hasNormalizedSlot(i)
                    ? i
                    : t.hasNormalizedSlot(r)
                    ? r
                    : h;
                }),
                (this.$_bodyFieldSlotNameCache = p),
                d.push(r ? r() : l()),
                n.forEach(function (e, n) {
                  d.push(t.renderTbodyRow(e, n));
                }),
                d.push(o ? o() : l()),
                d.push(a ? a() : l());
            }
            var f = {
              auxclick: this.onTbodyRowMiddleMouseRowClicked,
              contextmenu: this.onTbodyRowContextmenu,
              dblclick: this.onTbodyRowDblClicked,
            };
            return (
              c &&
                ((f.click = this.onTBodyRowClicked),
                (f.keydown = this.onTbodyRowKeydown)),
              l(
                og,
                {
                  class: this.tbodyClass || null,
                  props: Object(B.e)(rg, this.$props),
                  on: f,
                  ref: "tbody",
                },
                d
              )
            );
          },
        },
      });
    function wg(t, e) {
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
    function Ag(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? wg(Object(n), !0).forEach(function (e) {
              xg(t, e, n[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
          : wg(Object(n)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(n, e)
              );
            });
      }
      return t;
    }
    function xg(t, e, n) {
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
    var zg = Object(B.d)({ footVariant: Object(B.c)(j.u) }, q.lc),
      Cg = Object(F.c)({
        name: q.lc,
        mixins: [Tt.a, It, R.a],
        provide: function () {
          var t = this;
          return {
            getBvTableRowGroup: function () {
              return t;
            },
          };
        },
        inject: {
          getBvTable: {
            default: function () {
              return function () {
                return {};
              };
            },
          },
        },
        inheritAttrs: !1,
        props: zg,
        computed: {
          bvTable: function () {
            return this.getBvTable();
          },
          isTfoot: function () {
            return !0;
          },
          isDark: function () {
            return this.bvTable.dark;
          },
          isStacked: function () {
            return this.bvTable.isStacked;
          },
          isResponsive: function () {
            return this.bvTable.isResponsive;
          },
          isStickyHeader: function () {
            return !1;
          },
          hasStickyHeader: function () {
            return !this.isStacked && this.bvTable.stickyHeader;
          },
          tableVariant: function () {
            return this.bvTable.tableVariant;
          },
          tfootClasses: function () {
            return [
              this.footVariant ? "thead-".concat(this.footVariant) : null,
            ];
          },
          tfootAttrs: function () {
            return Ag(Ag({}, this.bvAttrs), {}, { role: "rowgroup" });
          },
        },
        render: function (t) {
          return t(
            "tfoot",
            {
              class: this.tfootClasses,
              attrs: this.tfootAttrs,
              on: this.bvListeners,
            },
            this.normalizeSlot()
          );
        },
      }),
      kg = {
        footClone: Object(B.c)(j.g, !1),
        footRowVariant: Object(B.c)(j.u),
        footVariant: Object(B.c)(j.u),
        tfootClass: Object(B.c)(j.e),
        tfootTrClass: Object(B.c)(j.e),
      },
      Sg = Object(F.c)({
        props: kg,
        methods: {
          renderTFootCustom: function () {
            var t = this.$createElement;
            return this.hasNormalizedSlot(P.g)
              ? t(
                  Cg,
                  {
                    class: this.tfootClass || null,
                    props: {
                      footVariant: this.footVariant || this.headVariant || null,
                    },
                    key: "bv-tfoot-custom",
                  },
                  this.normalizeSlot(P.g, {
                    items: this.computedItems.slice(),
                    fields: this.computedFields.slice(),
                    columns: this.computedFields.length,
                  })
                )
              : t();
          },
          renderTfoot: function () {
            return this.footClone
              ? this.renderThead(!0)
              : this.renderTFootCustom();
          },
        },
      });
    function Tg(t, e) {
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
    function Dg(t, e, n) {
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
    var Lg = Object(B.d)({ headVariant: Object(B.c)(j.u) }, q.nc),
      qg = Object(F.c)({
        name: q.nc,
        mixins: [Tt.a, It, R.a],
        provide: function () {
          var t = this;
          return {
            getBvTableRowGroup: function () {
              return t;
            },
          };
        },
        inject: {
          getBvTable: {
            default: function () {
              return function () {
                return {};
              };
            },
          },
        },
        inheritAttrs: !1,
        props: Lg,
        computed: {
          bvTable: function () {
            return this.getBvTable();
          },
          isThead: function () {
            return !0;
          },
          isDark: function () {
            return this.bvTable.dark;
          },
          isStacked: function () {
            return this.bvTable.isStacked;
          },
          isResponsive: function () {
            return this.bvTable.isResponsive;
          },
          isStickyHeader: function () {
            return !this.isStacked && this.bvTable.stickyHeader;
          },
          hasStickyHeader: function () {
            return !this.isStacked && this.bvTable.stickyHeader;
          },
          tableVariant: function () {
            return this.bvTable.tableVariant;
          },
          theadClasses: function () {
            return [
              this.headVariant ? "thead-".concat(this.headVariant) : null,
            ];
          },
          theadAttrs: function () {
            return (function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2
                  ? Tg(Object(n), !0).forEach(function (e) {
                      Dg(t, e, n[e]);
                    })
                  : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(
                      t,
                      Object.getOwnPropertyDescriptors(n)
                    )
                  : Tg(Object(n)).forEach(function (e) {
                      Object.defineProperty(
                        t,
                        e,
                        Object.getOwnPropertyDescriptor(n, e)
                      );
                    });
              }
              return t;
            })({ role: "rowgroup" }, this.bvAttrs);
          },
        },
        render: function (t) {
          return t(
            "thead",
            {
              class: this.theadClasses,
              attrs: this.theadAttrs,
              on: this.bvListeners,
            },
            this.normalizeSlot()
          );
        },
      });
    function Eg(t) {
      return (
        (function (t) {
          if (Array.isArray(t)) return jg(t);
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
            if ("string" == typeof t) return jg(t, e);
            var n = Object.prototype.toString.call(t).slice(8, -1);
            return (
              "Object" === n && t.constructor && (n = t.constructor.name),
              "Map" === n || "Set" === n
                ? Array.from(t)
                : "Arguments" === n ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                ? jg(t, e)
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
    function jg(t, e) {
      (null == e || e > t.length) && (e = t.length);
      for (var n = 0, i = new Array(e); n < e; n++) i[n] = t[n];
      return i;
    }
    function Pg(t, e) {
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
    function Rg(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? Pg(Object(n), !0).forEach(function (e) {
              Ig(t, e, n[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
          : Pg(Object(n)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(n, e)
              );
            });
      }
      return t;
    }
    function Ig(t, e, n) {
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
    var Wg = function (t) {
        return "head(".concat(t || "", ")");
      },
      Ng = function (t) {
        return "foot(".concat(t || "", ")");
      },
      Bg = {
        headRowVariant: Object(B.c)(j.u),
        headVariant: Object(B.c)(j.u),
        theadClass: Object(B.c)(j.e),
        theadTrClass: Object(B.c)(j.e),
      },
      Fg = Object(F.c)({
        props: Bg,
        methods: {
          fieldClasses: function (t) {
            return [t.class ? t.class : "", t.thClass ? t.thClass : ""];
          },
          headClicked: function (t, e, n) {
            (this.stopIfBusy && this.stopIfBusy(t)) ||
              sg(t) ||
              lg(this.$el) ||
              (Object(St.f)(t), this.$emit(E.v, e.key, e, t, n));
          },
          renderThead: function () {
            var t = this,
              e =
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
              n = lt(this),
              i = n.computedFields,
              r = n.isSortable,
              o = n.isSelectable,
              a = n.headVariant,
              s = n.footVariant,
              l = n.headRowVariant,
              u = n.footRowVariant,
              p = this.$createElement;
            if (this.isStackedAlways || 0 === i.length) return p();
            var h = r || this.hasListener(E.v),
              f = o ? this.selectAllRows : Ri,
              b = o ? this.clearSelected : Ri,
              m = function (n, i) {
                var o = n.label,
                  a = n.labelHtml,
                  s = n.variant,
                  l = n.stickyColumn,
                  d = n.key,
                  u = null;
                n.label.trim() || n.headerTitle || (u = Object(ct.f)(n.key));
                var m = {};
                h &&
                  ((m.click = function (i) {
                    t.headClicked(i, n, e);
                  }),
                  (m.keydown = function (i) {
                    var r = i.keyCode;
                    (r !== Ct.e && r !== Ct.l) || t.headClicked(i, n, e);
                  }));
                var g = r ? t.sortTheadThAttrs(d, n, e) : {},
                  v = r ? t.sortTheadThClasses(d, n, e) : null,
                  _ = r ? t.sortTheadThLabel(d, n, e) : null,
                  y = {
                    class: [{ "position-relative": _ }, t.fieldClasses(n), v],
                    props: { variant: s, stickyColumn: l },
                    style: n.thStyle || {},
                    attrs: Rg(
                      Rg(
                        {
                          tabindex: h && n.sortable ? "0" : null,
                          abbr: n.headerAbbr || null,
                          title: n.headerTitle || null,
                          "aria-colindex": i + 1,
                          "aria-label": u,
                        },
                        t.getThValues(
                          null,
                          d,
                          n.thAttr,
                          e ? "foot" : "head",
                          {}
                        )
                      ),
                      g
                    ),
                    on: m,
                    key: d,
                  },
                  M = [Wg(d), Wg(d.toLowerCase()), Wg()];
                e && (M = [Ng(d), Ng(d.toLowerCase()), Ng()].concat(Eg(M)));
                var O = {
                    label: o,
                    column: d,
                    field: n,
                    isFoot: e,
                    selectAllRows: f,
                    clearSelected: b,
                  },
                  w = t.normalizeSlot(M, O) || p("div", { domProps: Ce(a, o) }),
                  A = _
                    ? p("span", { staticClass: "sr-only" }, " (".concat(_, ")"))
                    : null;
                return p(dg, y, [w, A].filter(c.a));
              },
              g = i.map(m).filter(c.a),
              v = [];
            if (e)
              v.push(
                p(
                  Fb,
                  {
                    class: this.tfootTrClass,
                    props: { variant: Object(d.p)(u) ? l : u },
                  },
                  g
                )
              );
            else {
              var _ = {
                columns: i.length,
                fields: i,
                selectAllRows: f,
                clearSelected: b,
              };
              v.push(this.normalizeSlot(P.hb, _) || p()),
                v.push(
                  p(Fb, { class: this.theadTrClass, props: { variant: l } }, g)
                );
            }
            return p(
              e ? Cg : qg,
              {
                class: (e ? this.tfootClass : this.theadClass) || null,
                props: e
                  ? { footVariant: s || a || null }
                  : { headVariant: a || null },
                key: e ? "bv-tfoot" : "bv-thead",
              },
              v
            );
          },
        },
      }),
      $g = Object(F.c)({
        methods: {
          renderTopRow: function () {
            var t = this.computedFields,
              e = this.stacked,
              n = this.tbodyTrClass,
              i = this.tbodyTrAttr,
              r = this.$createElement;
            return this.hasNormalizedSlot(P.kb) && !0 !== e && "" !== e
              ? r(
                  Fb,
                  {
                    staticClass: "b-table-top-row",
                    class: [Object(d.f)(n) ? n(null, "row-top") : n],
                    attrs: Object(d.f)(i) ? i(null, "row-top") : i,
                    key: "b-top-row",
                  },
                  [this.normalizeSlot(P.kb, { columns: t.length, fields: t })]
                )
              : r();
          },
        },
      });
    function Hg(t, e) {
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
    function Yg(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? Hg(Object(n), !0).forEach(function (e) {
              Ug(t, e, n[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
          : Hg(Object(n)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(n, e)
              );
            });
      }
      return t;
    }
    function Ug(t, e, n) {
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
    var Xg = Object(B.d)(
        Object(h.m)(
          Yg(
            Yg(
              Yg(
                Yg(
                  Yg(
                    Yg(
                      Yg(
                        Yg(
                          Yg(
                            Yg(
                              Yg(
                                Yg(
                                  Yg(
                                    Yg(
                                      Yg(Yg(Yg(Yg({}, Mn.b), $b), nm), rm),
                                      am
                                    ),
                                    lm
                                  ),
                                  Mm
                                ),
                                Dm
                              ),
                              qm
                            ),
                            Rm
                          ),
                          $m
                        ),
                        Qm
                      ),
                      gb
                    ),
                    Ob
                  ),
                  Mg
                ),
                kg
              ),
              Bg
            ),
            {}
          )
        ),
        q.ec
      ),
      Vg = Object(F.c)({
        name: q.ec,
        mixins: [
          Tt.a,
          mb,
          Mn.a,
          R.a,
          Lm,
          wb,
          vb,
          Fg,
          Sg,
          Og,
          vb,
          Om,
          tg,
          Em,
          om,
          sm,
          Hm,
          cm,
          $g,
          Hb,
          im,
          Im,
        ],
        props: Xg,
      });
    function Gg(t, e) {
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
    function Kg(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? Gg(Object(n), !0).forEach(function (e) {
              Zg(t, e, n[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
          : Gg(Object(n)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(n, e)
              );
            });
      }
      return t;
    }
    function Zg(t, e, n) {
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
    var Jg,
      Qg = Object(B.d)(
        Object(h.m)(
          Kg(
            Kg(
              Kg(Kg(Kg(Kg(Kg(Kg(Kg({}, Mn.b), rm), am), Dm), gb), Ob), Mg),
              kg
            ),
            Bg
          )
        ),
        q.gc
      ),
      tv = C({
        components: { BTable: Vg },
        plugins: {
          TableLitePlugin: C({
            components: {
              BTableLite: Object(F.c)({
                name: q.gc,
                mixins: [Tt.a, mb, Mn.a, R.a, Lm, wb, vb, Fg, Sg, Og, om, sm],
                props: Qg,
              }),
            },
          }),
          TableSimplePlugin: C({
            components: {
              BTableSimple: kb,
              BTbody: og,
              BThead: qg,
              BTfoot: Cg,
              BTr: Fb,
              BTd: tm,
              BTh: dg,
            },
          }),
        },
      });
    function ev(t, e) {
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
    function nv(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? ev(Object(n), !0).forEach(function (e) {
              iv(t, e, n[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
          : ev(Object(n)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(n, e)
              );
            });
      }
      return t;
    }
    function iv(t, e, n) {
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
    var rv,
      ov,
      av = Object(W.a)("value", { type: j.n }),
      sv = av.mixin,
      lv = av.props,
      cv = av.prop,
      dv = av.event,
      uv = function (t) {
        return !t.disabled;
      },
      pv = Object(F.c)({
        name: q.jc,
        inject: {
          getBvTabs: {
            default: function () {
              return function () {
                return {};
              };
            },
          },
        },
        props: {
          controls: Object(B.c)(j.u),
          id: Object(B.c)(j.u),
          noKeyNav: Object(B.c)(j.g, !1),
          posInSet: Object(B.c)(j.n),
          setSize: Object(B.c)(j.n),
          tab: Object(B.c)(),
          tabIndex: Object(B.c)(j.n),
        },
        computed: {
          bvTabs: function () {
            return this.getBvTabs();
          },
        },
        methods: {
          focus: function () {
            Object(I.d)(this.$refs.link);
          },
          handleEvent: function (t) {
            if (!this.tab.disabled) {
              var e = t.type,
                n = t.keyCode,
                i = t.shiftKey;
              "click" === e || ("keydown" === e && n === Ct.l)
                ? (Object(St.f)(t), this.$emit(E.f, t))
                : "keydown" !== e ||
                  this.noKeyNav ||
                  (-1 !== [Ct.m, Ct.h, Ct.g].indexOf(n)
                    ? (Object(St.f)(t),
                      i || n === Ct.g ? this.$emit(E.r, t) : this.$emit(E.I, t))
                    : -1 !== [Ct.c, Ct.k, Ct.d].indexOf(n) &&
                      (Object(St.f)(t),
                      i || n === Ct.d
                        ? this.$emit(E.A, t)
                        : this.$emit(E.D, t)));
            }
          },
        },
        render: function (t) {
          var e = this.id,
            n = this.tabIndex,
            i = this.setSize,
            r = this.posInSet,
            o = this.controls,
            a = this.handleEvent,
            s = this.tab,
            l = s.title,
            c = s.localActive,
            d = s.disabled,
            u = s.titleItemClass,
            p = s.titleLinkClass,
            h = s.titleLinkAttributes,
            f = t(
              Vt,
              {
                staticClass: "nav-link",
                class: [
                  { active: c && !d, disabled: d },
                  p,
                  c ? this.bvTabs.activeNavItemClass : null,
                ],
                props: { disabled: d },
                attrs: nv(
                  nv({}, h),
                  {},
                  {
                    id: e,
                    role: "tab",
                    tabindex: n,
                    "aria-selected": c && !d ? "true" : "false",
                    "aria-setsize": i,
                    "aria-posinset": r,
                    "aria-controls": o,
                  }
                ),
                on: { click: a, keydown: a },
                ref: "link",
              },
              [this.tab.normalizeSlot(P.ib) || l]
            );
          return t(
            "li",
            {
              staticClass: "nav-item",
              class: [u],
              attrs: { role: "presentation" },
            },
            [f]
          );
        },
      }),
      hv = Object(h.j)(qp, ["tabs", "isNavBar", "cardHeader"]),
      fv = Object(B.d)(
        Object(h.m)(
          nv(
            nv(nv(nv({}, Mn.b), lv), hv),
            {},
            {
              activeNavItemClass: Object(B.c)(j.e),
              activeTabClass: Object(B.c)(j.e),
              card: Object(B.c)(j.g, !1),
              contentClass: Object(B.c)(j.e),
              end: Object(B.c)(j.g, !1),
              lazy: Object(B.c)(j.g, !1),
              navClass: Object(B.c)(j.e),
              navWrapperClass: Object(B.c)(j.e),
              noFade: Object(B.c)(j.g, !1),
              noKeyNav: Object(B.c)(j.g, !1),
              noNavStyle: Object(B.c)(j.g, !1),
              tag: Object(B.c)(j.u, "div"),
            }
          )
        ),
        q.ic
      ),
      bv = Object(F.c)({
        name: q.ic,
        mixins: [Mn.a, sv, R.a],
        provide: function () {
          var t = this;
          return {
            getBvTabs: function () {
              return t;
            },
          };
        },
        props: fv,
        data: function () {
          return {
            currentTab: Object(N.c)(this[cv], -1),
            tabs: [],
            registeredTabs: [],
          };
        },
        computed: {
          fade: function () {
            return !this.noFade;
          },
          localNavClass: function () {
            var t = [];
            return (
              this.card &&
                this.vertical &&
                t.push("card-header", "h-100", "border-bottom-0", "rounded-0"),
              [].concat(t, [this.navClass])
            );
          },
        },
        watch:
          ((Jg = {}),
          iv(Jg, cv, function (t, e) {
            if (t !== e) {
              (t = Object(N.c)(t, -1)), (e = Object(N.c)(e, 0));
              var n = this.tabs[t];
              n && !n.disabled
                ? this.activateTab(n)
                : t < e
                ? this.previousTab()
                : this.nextTab();
            }
          }),
          iv(Jg, "currentTab", function (t) {
            var e = -1;
            this.tabs.forEach(function (n, i) {
              i !== t || n.disabled
                ? (n.localActive = !1)
                : ((n.localActive = !0), (e = i));
            }),
              this.$emit(dv, e);
          }),
          iv(Jg, "tabs", function (t, e) {
            var n = this;
            Object(yn.a)(
              t.map(function (t) {
                return t[F.a];
              }),
              e.map(function (t) {
                return t[F.a];
              })
            ) ||
              this.$nextTick(function () {
                n.$emit(E.e, t.slice(), e.slice());
              });
          }),
          iv(Jg, "registeredTabs", function () {
            this.updateTabs();
          }),
          Jg),
        created: function () {
          this.$_observer = null;
        },
        mounted: function () {
          this.setObserver(!0);
        },
        beforeDestroy: function () {
          this.setObserver(!1), (this.tabs = []);
        },
        methods: {
          registerTab: function (t) {
            Object(kt.a)(this.registeredTabs, t) || this.registeredTabs.push(t);
          },
          unregisterTab: function (t) {
            this.registeredTabs = this.registeredTabs
              .slice()
              .filter(function (e) {
                return e !== t;
              });
          },
          setObserver: function () {
            var t = this,
              e =
                !(arguments.length > 0 && void 0 !== arguments[0]) ||
                arguments[0];
            if (
              (this.$_observer && this.$_observer.disconnect(),
              (this.$_observer = null),
              e)
            ) {
              var n = function () {
                t.$nextTick(function () {
                  Object(I.D)(function () {
                    t.updateTabs();
                  });
                });
              };
              this.$_observer = Bi(this.$refs.content, n, {
                childList: !0,
                subtree: !1,
                attributes: !0,
                attributeFilter: ["id"],
              });
            }
          },
          getTabs: function () {
            var t = this.registeredTabs,
              e = [];
            if (o.i && t.length > 0) {
              var n = t
                .map(function (t) {
                  return "#".concat(t.safeId());
                })
                .join(", ");
              e = Object(I.F)(n, this.$el)
                .map(function (t) {
                  return t.id;
                })
                .filter(c.a);
            }
            return Ym(t, function (t, n) {
              return e.indexOf(t.safeId()) - e.indexOf(n.safeId());
            });
          },
          updateTabs: function () {
            var t = this.getTabs(),
              e = t.indexOf(
                t
                  .slice()
                  .reverse()
                  .find(function (t) {
                    return t.localActive && !t.disabled;
                  })
              );
            if (e < 0) {
              var n = this.currentTab;
              n >= t.length
                ? (e = t.indexOf(t.slice().reverse().find(uv)))
                : t[n] && !t[n].disabled && (e = n);
            }
            e < 0 && (e = t.indexOf(t.find(uv))),
              t.forEach(function (t, n) {
                t.localActive = n === e;
              }),
              (this.tabs = t),
              (this.currentTab = e);
          },
          getButtonForTab: function (t) {
            return (this.$refs.buttons || []).find(function (e) {
              return e.tab === t;
            });
          },
          updateButton: function (t) {
            var e = this.getButtonForTab(t);
            e && e.$forceUpdate && e.$forceUpdate();
          },
          activateTab: function (t) {
            var e = this.currentTab,
              n = this.tabs,
              i = !1;
            if (t) {
              var r = n.indexOf(t);
              if (r !== e && r > -1 && !t.disabled) {
                var o = new Zr(E.a, {
                  cancelable: !0,
                  vueTarget: this,
                  componentId: this.safeId(),
                });
                this.$emit(o.type, r, e, o),
                  o.defaultPrevented || ((this.currentTab = r), (i = !0));
              }
            }
            return i || this[cv] === e || this.$emit(dv, e), i;
          },
          deactivateTab: function (t) {
            return (
              !!t &&
              this.activateTab(
                this.tabs
                  .filter(function (e) {
                    return e !== t;
                  })
                  .find(uv)
              )
            );
          },
          focusButton: function (t) {
            var e = this;
            this.$nextTick(function () {
              Object(I.d)(e.getButtonForTab(t));
            });
          },
          emitTabClick: function (t, e) {
            Object(d.d)(e) && t && t.$emit && !t.disabled && t.$emit(E.f, e);
          },
          clickTab: function (t, e) {
            this.activateTab(t), this.emitTabClick(t, e);
          },
          firstTab: function (t) {
            var e = this.tabs.find(uv);
            this.activateTab(e) &&
              t &&
              (this.focusButton(e), this.emitTabClick(e, t));
          },
          previousTab: function (t) {
            var e = Object(it.d)(this.currentTab, 0),
              n = this.tabs.slice(0, e).reverse().find(uv);
            this.activateTab(n) &&
              t &&
              (this.focusButton(n), this.emitTabClick(n, t));
          },
          nextTab: function (t) {
            var e = Object(it.d)(this.currentTab, -1),
              n = this.tabs.slice(e + 1).find(uv);
            this.activateTab(n) &&
              t &&
              (this.focusButton(n), this.emitTabClick(n, t));
          },
          lastTab: function (t) {
            var e = this.tabs.slice().reverse().find(uv);
            this.activateTab(e) &&
              t &&
              (this.focusButton(e), this.emitTabClick(e, t));
          },
        },
        render: function (t) {
          var e = this,
            n = this.align,
            i = this.card,
            r = this.end,
            o = this.fill,
            a = this.firstTab,
            s = this.justified,
            l = this.lastTab,
            c = this.nextTab,
            d = this.noKeyNav,
            u = this.noNavStyle,
            p = this.pills,
            h = this.previousTab,
            f = this.small,
            b = this.tabs,
            m = this.vertical,
            g = b.find(function (t) {
              return t.localActive && !t.disabled;
            }),
            v = b.find(function (t) {
              return !t.disabled;
            }),
            _ = b.map(function (n, i) {
              var r,
                o = n.safeId,
                s = null;
              return (
                d || ((s = -1), (n === g || (!g && n === v)) && (s = null)),
                t(
                  pv,
                  iv(
                    {
                      props: {
                        controls: o ? o() : null,
                        id: n.controlledBy || (o ? o("_BV_tab_button_") : null),
                        noKeyNav: d,
                        posInSet: i + 1,
                        setSize: b.length,
                        tab: n,
                        tabIndex: s,
                      },
                      on:
                        ((r = {}),
                        iv(r, E.f, function (t) {
                          e.clickTab(n, t);
                        }),
                        iv(r, E.r, a),
                        iv(r, E.I, h),
                        iv(r, E.D, c),
                        iv(r, E.A, l),
                        r),
                      key: n[F.a] || i,
                      ref: "buttons",
                    },
                    F.b,
                    !0
                  )
                )
              );
            }),
            y = t(
              Ep,
              {
                class: this.localNavClass,
                attrs: {
                  role: "tablist",
                  id: this.safeId("_BV_tab_controls_"),
                },
                props: {
                  fill: o,
                  justified: s,
                  align: n,
                  tabs: !u && !p,
                  pills: !u && p,
                  vertical: m,
                  small: f,
                  cardHeader: i && !m,
                },
                ref: "nav",
              },
              [
                this.normalizeSlot(P.fb) || t(),
                _,
                this.normalizeSlot(P.eb) || t(),
              ]
            );
          y = t(
            "div",
            {
              class: [
                {
                  "card-header": i && !m && !r,
                  "card-footer": i && !m && r,
                  "col-auto": m,
                },
                this.navWrapperClass,
              ],
              key: "bv-tabs-nav",
            },
            [y]
          );
          var M = this.normalizeSlot() || [],
            O = t();
          0 === M.length &&
            (O = t(
              "div",
              {
                class: ["tab-pane", "active", { "card-body": i }],
                key: "bv-empty-tab",
              },
              this.normalizeSlot(P.n)
            ));
          var w = t(
            "div",
            {
              staticClass: "tab-content",
              class: [{ col: m }, this.contentClass],
              attrs: { id: this.safeId("_BV_tab_container_") },
              key: "bv-content",
              ref: "content",
            },
            [M, O]
          );
          return t(
            this.tag,
            {
              staticClass: "tabs",
              class: { row: m, "no-gutters": m && i },
              attrs: { id: this.safeId() },
            },
            [r ? w : t(), y, r ? t() : w]
          );
        },
      });
    function mv(t, e) {
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
    function gv(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? mv(Object(n), !0).forEach(function (e) {
              vv(t, e, n[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
          : mv(Object(n)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(n, e)
              );
            });
      }
      return t;
    }
    function vv(t, e, n) {
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
    var _v,
      yv = E.hb + "active",
      Mv = Object(B.d)(
        Object(h.m)(
          gv(
            gv({}, Mn.b),
            {},
            (vv((rv = {}), "active", Object(B.c)(j.g, !1)),
            vv(rv, "buttonId", Object(B.c)(j.u)),
            vv(rv, "disabled", Object(B.c)(j.g, !1)),
            vv(rv, "lazy", Object(B.c)(j.g, !1)),
            vv(rv, "noBody", Object(B.c)(j.g, !1)),
            vv(rv, "tag", Object(B.c)(j.u, "div")),
            vv(rv, "title", Object(B.c)(j.u)),
            vv(rv, "titleItemClass", Object(B.c)(j.e)),
            vv(rv, "titleLinkAttributes", Object(B.c)(j.q)),
            vv(rv, "titleLinkClass", Object(B.c)(j.e)),
            rv)
          )
        ),
        q.dc
      ),
      Ov = C({
        components: {
          BTabs: bv,
          BTab: Object(F.c)({
            name: q.dc,
            mixins: [Mn.a, R.a],
            inject: {
              getBvTabs: {
                default: function () {
                  return function () {
                    return {};
                  };
                },
              },
            },
            props: Mv,
            data: function () {
              return { localActive: this.active && !this.disabled };
            },
            computed: {
              bvTabs: function () {
                return this.getBvTabs();
              },
              _isTab: function () {
                return !0;
              },
              tabClasses: function () {
                var t = this.localActive;
                return [
                  {
                    active: t,
                    disabled: this.disabled,
                    "card-body": this.bvTabs.card && !this.noBody,
                  },
                  t ? this.bvTabs.activeTabClass : null,
                ];
              },
              controlledBy: function () {
                return this.buttonId || this.safeId("__BV_tab_button__");
              },
              computedNoFade: function () {
                return !this.bvTabs.fade;
              },
              computedLazy: function () {
                return this.bvTabs.lazy || this.lazy;
              },
            },
            watch:
              ((ov = {}),
              vv(ov, "active", function (t, e) {
                t !== e &&
                  (t
                    ? this.activate()
                    : this.deactivate() || this.$emit(yv, this.localActive));
              }),
              vv(ov, "disabled", function (t, e) {
                if (t !== e) {
                  var n = this.bvTabs.firstTab;
                  t && this.localActive && n && ((this.localActive = !1), n());
                }
              }),
              vv(ov, "localActive", function (t) {
                this.$emit(yv, t);
              }),
              ov),
            mounted: function () {
              this.registerTab();
            },
            updated: function () {
              var t = this.bvTabs.updateButton;
              t && this.hasNormalizedSlot(P.ib) && t(this);
            },
            beforeDestroy: function () {
              this.unregisterTab();
            },
            methods: {
              registerTab: function () {
                var t = this.bvTabs.registerTab;
                t && t(this);
              },
              unregisterTab: function () {
                var t = this.bvTabs.unregisterTab;
                t && t(this);
              },
              activate: function () {
                var t = this.bvTabs.activateTab;
                return !(!t || this.disabled) && t(this);
              },
              deactivate: function () {
                var t = this.bvTabs.deactivateTab;
                return !(!t || !this.localActive) && t(this);
              },
            },
            render: function (t) {
              var e = this.localActive,
                n = t(
                  this.tag,
                  {
                    staticClass: "tab-pane",
                    class: this.tabClasses,
                    directives: [{ name: "show", value: e }],
                    attrs: {
                      role: "tabpanel",
                      id: this.safeId(),
                      "aria-hidden": e ? "false" : "true",
                      "aria-labelledby": this.controlledBy || null,
                    },
                    ref: "panel",
                  },
                  [e || !this.computedLazy ? this.normalizeSlot() : t()]
                );
              return t(
                H.a,
                { props: { mode: "out-in", noFade: this.computedNoFade } },
                [n]
              );
            },
          }),
        },
      }),
      wv = C({ components: { BTime: Od } }),
      Av = n(81),
      xv = Object(F.c)({
        mixins: [R.a],
        data: function () {
          return { name: "b-toaster" };
        },
        methods: {
          onAfterEnter: function (t) {
            var e = this;
            Object(I.D)(function () {
              Object(I.A)(t, "".concat(e.name, "-enter-to"));
            });
          },
        },
        render: function (t) {
          return t(
            "transition-group",
            {
              props: { tag: "div", name: this.name },
              on: { afterEnter: this.onAfterEnter },
            },
            this.normalizeSlot()
          );
        },
      }),
      zv = Object(B.d)(
        {
          ariaAtomic: Object(B.c)(j.u),
          ariaLive: Object(B.c)(j.u),
          name: Object(B.c)(j.u, void 0, !0),
          role: Object(B.c)(j.u),
        },
        q.qc
      ),
      Cv = Object(F.c)({
        name: q.qc,
        mixins: [Dt.a],
        props: zv,
        data: function () {
          return { doRender: !1, dead: !1, staticName: this.name };
        },
        beforeMount: function () {
          var t = this.name;
          (this.staticName = t),
            Av.Wormhole.hasTarget(t)
              ? (b(
                  'A "<portal-target>" with name "'.concat(
                    t,
                    '" already exists in the document.'
                  ),
                  q.qc
                ),
                (this.dead = !0))
              : (this.doRender = !0);
        },
        beforeDestroy: function () {
          this.doRender && this.emitOnRoot(Object(St.e)(q.qc, E.j), this.name);
        },
        destroyed: function () {
          var t = this.$el;
          t && t.parentNode && t.parentNode.removeChild(t);
        },
        render: function (t) {
          var e = t("div", {
            class: ["d-none", { "b-dead-toaster": this.dead }],
          });
          if (this.doRender) {
            var n = t(Av.PortalTarget, {
              staticClass: "b-toaster-slot",
              props: {
                name: this.staticName,
                multiple: !0,
                tag: "div",
                slim: !1,
                transition: xv,
              },
            });
            e = t(
              "div",
              {
                staticClass: "b-toaster",
                class: [this.staticName],
                attrs: {
                  id: this.staticName,
                  role: this.role || null,
                  "aria-live": this.ariaLive,
                  "aria-atomic": this.ariaAtomic,
                },
              },
              [n]
            );
          }
          return e;
        },
      });
    function kv(t, e) {
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
    function Sv(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? kv(Object(n), !0).forEach(function (e) {
              Tv(t, e, n[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
          : kv(Object(n)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(n, e)
              );
            });
      }
      return t;
    }
    function Tv(t, e, n) {
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
    var Dv = Object(W.a)("visible", {
        type: j.g,
        defaultValue: !1,
        event: E.d,
      }),
      Lv = Dv.mixin,
      qv = Dv.props,
      Ev = Dv.prop,
      jv = Dv.event,
      Pv = Object(h.k)(Xt, ["href", "to"]),
      Rv = Object(B.d)(
        Object(h.m)(
          Sv(
            Sv(Sv(Sv({}, Mn.b), qv), Pv),
            {},
            {
              appendToast: Object(B.c)(j.g, !1),
              autoHideDelay: Object(B.c)(j.p, 5e3),
              bodyClass: Object(B.c)(j.e),
              headerClass: Object(B.c)(j.e),
              headerTag: Object(B.c)(j.u, "header"),
              isStatus: Object(B.c)(j.g, !1),
              noAutoHide: Object(B.c)(j.g, !1),
              noCloseButton: Object(B.c)(j.g, !1),
              noFade: Object(B.c)(j.g, !1),
              noHoverPause: Object(B.c)(j.g, !1),
              solid: Object(B.c)(j.g, !1),
              static: Object(B.c)(j.g, !1),
              title: Object(B.c)(j.u),
              toastClass: Object(B.c)(j.e),
              toaster: Object(B.c)(j.u, "b-toaster-top-right"),
              variant: Object(B.c)(j.u),
            }
          )
        ),
        q.pc
      ),
      Iv = Object(F.c)({
        name: q.pc,
        mixins: [Tt.a, Mn.a, Lv, Dt.a, R.a, qu],
        inheritAttrs: !1,
        props: Rv,
        data: function () {
          return {
            isMounted: !1,
            doRender: !1,
            localShow: !1,
            isTransitioning: !1,
            isHiding: !1,
            order: 0,
            dismissStarted: 0,
            resumeDismiss: 0,
          };
        },
        computed: {
          toastClasses: function () {
            var t = this.appendToast,
              e = this.variant;
            return Tv(
              {
                "b-toast-solid": this.solid,
                "b-toast-append": t,
                "b-toast-prepend": !t,
              },
              "b-toast-".concat(e),
              e
            );
          },
          slotScope: function () {
            return { hide: this.hide };
          },
          computedDuration: function () {
            return Object(it.d)(Object(N.c)(this.autoHideDelay, 0), 1e3);
          },
          computedToaster: function () {
            return String(this.toaster);
          },
          transitionHandlers: function () {
            return {
              beforeEnter: this.onBeforeEnter,
              afterEnter: this.onAfterEnter,
              beforeLeave: this.onBeforeLeave,
              afterLeave: this.onAfterLeave,
            };
          },
          computedAttrs: function () {
            return Sv(
              Sv({}, this.bvAttrs),
              {},
              { id: this.safeId(), tabindex: "0" }
            );
          },
        },
        watch:
          ((_v = {}),
          Tv(_v, Ev, function (t) {
            this[t ? "show" : "hide"]();
          }),
          Tv(_v, "localShow", function (t) {
            t !== this[Ev] && this.$emit(jv, t);
          }),
          Tv(_v, "toaster", function () {
            this.$nextTick(this.ensureToaster);
          }),
          Tv(_v, "static", function (t) {
            t && this.localShow && this.ensureToaster();
          }),
          _v),
        created: function () {
          this.$_dismissTimer = null;
        },
        mounted: function () {
          var t = this;
          (this.isMounted = !0),
            this.$nextTick(function () {
              t[Ev] &&
                Object(I.D)(function () {
                  t.show();
                });
            }),
            this.listenOnRoot(Object(St.d)(q.pc, E.U), function (e) {
              e === t.safeId() && t.show();
            }),
            this.listenOnRoot(Object(St.d)(q.pc, E.x), function (e) {
              (e && e !== t.safeId()) || t.hide();
            }),
            this.listenOnRoot(Object(St.e)(q.qc, E.j), function (e) {
              e === t.computedToaster && t.hide();
            });
        },
        beforeDestroy: function () {
          this.clearDismissTimer();
        },
        methods: {
          show: function () {
            var t = this;
            if (!this.localShow) {
              this.ensureToaster();
              var e = this.buildEvent(E.U);
              this.emitEvent(e),
                (this.dismissStarted = this.resumeDismiss = 0),
                (this.order = Date.now() * (this.appendToast ? 1 : -1)),
                (this.isHiding = !1),
                (this.doRender = !0),
                this.$nextTick(function () {
                  Object(I.D)(function () {
                    t.localShow = !0;
                  });
                });
            }
          },
          hide: function () {
            var t = this;
            if (this.localShow) {
              var e = this.buildEvent(E.x);
              this.emitEvent(e),
                this.setHoverHandler(!1),
                (this.dismissStarted = this.resumeDismiss = 0),
                this.clearDismissTimer(),
                (this.isHiding = !0),
                Object(I.D)(function () {
                  t.localShow = !1;
                });
            }
          },
          buildEvent: function (t) {
            var e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            return new Zr(
              t,
              Sv(
                Sv(
                  {
                    cancelable: !1,
                    target: this.$el || null,
                    relatedTarget: null,
                  },
                  e
                ),
                {},
                { vueTarget: this, componentId: this.safeId() }
              )
            );
          },
          emitEvent: function (t) {
            var e = t.type;
            this.emitOnRoot(Object(St.e)(q.pc, e), t), this.$emit(e, t);
          },
          ensureToaster: function () {
            if (!this.static) {
              var t = this.computedToaster;
              if (!Av.Wormhole.hasTarget(t)) {
                var e = document.createElement("div");
                document.body.appendChild(e),
                  Ru(this.bvEventRoot, Cv, { propsData: { name: t } }).$mount(
                    e
                  );
              }
            }
          },
          startDismissTimer: function () {
            this.clearDismissTimer(),
              this.noAutoHide ||
                ((this.$_dismissTimer = setTimeout(
                  this.hide,
                  this.resumeDismiss || this.computedDuration
                )),
                (this.dismissStarted = Date.now()),
                (this.resumeDismiss = 0));
          },
          clearDismissTimer: function () {
            clearTimeout(this.$_dismissTimer), (this.$_dismissTimer = null);
          },
          setHoverHandler: function (t) {
            var e = this.$refs["b-toast"];
            Object(St.c)(t, e, "mouseenter", this.onPause, E.db),
              Object(St.c)(t, e, "mouseleave", this.onUnPause, E.db);
          },
          onPause: function () {
            if (
              !this.noAutoHide &&
              !this.noHoverPause &&
              this.$_dismissTimer &&
              !this.resumeDismiss
            ) {
              var t = Date.now() - this.dismissStarted;
              t > 0 &&
                (this.clearDismissTimer(),
                (this.resumeDismiss = Object(it.d)(
                  this.computedDuration - t,
                  1e3
                )));
            }
          },
          onUnPause: function () {
            this.noAutoHide || this.noHoverPause || !this.resumeDismiss
              ? (this.resumeDismiss = this.dismissStarted = 0)
              : this.startDismissTimer();
          },
          onLinkClick: function () {
            var t = this;
            this.$nextTick(function () {
              Object(I.D)(function () {
                t.hide();
              });
            });
          },
          onBeforeEnter: function () {
            this.isTransitioning = !0;
          },
          onAfterEnter: function () {
            this.isTransitioning = !1;
            var t = this.buildEvent(E.V);
            this.emitEvent(t),
              this.startDismissTimer(),
              this.setHoverHandler(!0);
          },
          onBeforeLeave: function () {
            this.isTransitioning = !0;
          },
          onAfterLeave: function () {
            (this.isTransitioning = !1),
              (this.order = 0),
              (this.resumeDismiss = this.dismissStarted = 0);
            var t = this.buildEvent(E.w);
            this.emitEvent(t), (this.doRender = !1);
          },
          makeToast: function (t) {
            var e = this,
              n = this.title,
              i = this.slotScope,
              r = bt(this),
              o = [],
              a = this.normalizeSlot(P.jb, i);
            a
              ? o.push(a)
              : n && o.push(t("strong", { staticClass: "mr-2" }, n)),
              this.noCloseButton ||
                o.push(
                  t($.a, {
                    staticClass: "ml-auto mb-1",
                    on: {
                      click: function () {
                        e.hide();
                      },
                    },
                  })
                );
            var s = t();
            o.length > 0 &&
              (s = t(
                this.headerTag,
                { staticClass: "toast-header", class: this.headerClass },
                o
              ));
            var l = t(
              r ? Vt : "div",
              {
                staticClass: "toast-body",
                class: this.bodyClass,
                props: r ? Object(B.e)(Pv, this) : {},
                on: r ? { click: this.onLinkClick } : {},
              },
              this.normalizeSlot(P.i, i)
            );
            return t(
              "div",
              {
                staticClass: "toast",
                class: this.toastClass,
                attrs: this.computedAttrs,
                key: "toast-".concat(this[F.a]),
                ref: "toast",
              },
              [s, l]
            );
          },
        },
        render: function (t) {
          if (!this.doRender || !this.isMounted) return t();
          var e = this.order,
            n = this.static,
            i = this.isHiding,
            r = this.isStatus,
            o = "b-toast-".concat(this[F.a]),
            a = t(
              "div",
              {
                staticClass: "b-toast",
                class: this.toastClasses,
                attrs: Sv(
                  Sv({}, n ? {} : this.scopedStyleAttrs),
                  {},
                  {
                    id: this.safeId("_toast_outer"),
                    role: i ? null : r ? "status" : "alert",
                    "aria-live": i ? null : r ? "polite" : "assertive",
                    "aria-atomic": i ? null : "true",
                  }
                ),
                key: o,
                ref: "b-toast",
              },
              [
                t(
                  H.a,
                  {
                    props: { noFade: this.noFade },
                    on: this.transitionHandlers,
                  },
                  [this.localShow ? this.makeToast(t) : t()]
                ),
              ]
            );
          return t(
            Av.Portal,
            {
              props: {
                name: o,
                to: this.computedToaster,
                order: e,
                slim: !0,
                disabled: n,
              },
            },
            [a]
          );
        },
      });
    function Wv(t, e) {
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
    function Nv(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? Wv(Object(n), !0).forEach(function (e) {
              Bv(t, e, n[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
          : Wv(Object(n)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(n, e)
              );
            });
      }
      return t;
    }
    function Bv(t, e, n) {
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
    function Fv(t, e) {
      (null == e || e > t.length) && (e = t.length);
      for (var n = 0, i = new Array(e); n < e; n++) i[n] = t[n];
      return i;
    }
    var $v = ["id"].concat(
        (function (t) {
          return (
            (function (t) {
              if (Array.isArray(t)) return Fv(t);
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
                if ("string" == typeof t) return Fv(t, e);
                var n = Object.prototype.toString.call(t).slice(8, -1);
                return (
                  "Object" === n && t.constructor && (n = t.constructor.name),
                  "Map" === n || "Set" === n
                    ? Array.from(t)
                    : "Arguments" === n ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? Fv(t, e)
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
        })(Object(h.h)(Object(h.j)(Rv, ["static", "visible"])))
      ),
      Hv = { toastContent: "default", title: "toast-title" },
      Yv = function (t) {
        return $v.reduce(function (e, n) {
          return Object(d.o)(t[n]) || (e[n] = t[n]), e;
        }, {});
      },
      Uv = C({
        components: { BToast: Iv, BToaster: Cv },
        plugins: {
          BVToastPlugin: C({
            plugins: {
              plugin: function (t) {
                var e = t.extend({
                    name: q.rc,
                    extends: Iv,
                    mixins: [Du],
                    destroyed: function () {
                      var t = this.$el;
                      t && t.parentNode && t.parentNode.removeChild(t);
                    },
                    mounted: function () {
                      var t = this,
                        e = function () {
                          (t.localShow = !1),
                            (t.doRender = !1),
                            t.$nextTick(function () {
                              t.$nextTick(function () {
                                Object(I.D)(function () {
                                  t.$destroy();
                                });
                              });
                            });
                        };
                      this.bvParent.$once(E.gb, e),
                        this.$once(E.w, e),
                        this.listenOnRoot(
                          Object(St.e)(q.qc, E.j),
                          function (n) {
                            n === t.toaster && e();
                          }
                        );
                    },
                  }),
                  n = function (t, n) {
                    if (!m("$bvToast")) {
                      var i = Ru(n, e, {
                        propsData: Nv(
                          Nv(
                            Nv({}, Yv(Object(Gs.c)(q.pc))),
                            Object(h.j)(t, Object(h.h)(Hv))
                          ),
                          {},
                          { static: !1, visible: !0 }
                        ),
                      });
                      Object(h.h)(Hv).forEach(function (e) {
                        var r = t[e];
                        Object(d.o)(r) ||
                          ("title" === e &&
                            Object(d.n)(r) &&
                            (r = [
                              n.$createElement("strong", { class: "mr-2" }, r),
                            ]),
                          (i.$slots[Hv[e]] = Object(kt.b)(r)));
                      });
                      var r = document.createElement("div");
                      document.body.appendChild(r), i.$mount(r);
                    }
                  },
                  i = (function () {
                    function t(e) {
                      !(function (t, e) {
                        if (!(t instanceof e))
                          throw new TypeError(
                            "Cannot call a class as a function"
                          );
                      })(this, t),
                        Object(h.a)(this, { _vm: e, _root: Object(kr.a)(e) }),
                        Object(h.d)(this, {
                          _vm: Object(h.l)(),
                          _root: Object(h.l)(),
                        });
                    }
                    var e, i;
                    return (
                      (e = t),
                      (i = [
                        {
                          key: "toast",
                          value: function (t) {
                            var e =
                              arguments.length > 1 && void 0 !== arguments[1]
                                ? arguments[1]
                                : {};
                            t &&
                              !m("$bvToast") &&
                              n(
                                Nv(Nv({}, Yv(e)), {}, { toastContent: t }),
                                this._vm
                              );
                          },
                        },
                        {
                          key: "show",
                          value: function (t) {
                            t && this._root.$emit(Object(St.d)(q.pc, E.U), t);
                          },
                        },
                        {
                          key: "hide",
                          value: function () {
                            var t =
                              arguments.length > 0 && void 0 !== arguments[0]
                                ? arguments[0]
                                : null;
                            this._root.$emit(Object(St.d)(q.pc, E.x), t);
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
                        })(e.prototype, i),
                      Object.defineProperty(e, "prototype", { writable: !1 }),
                      t
                    );
                  })();
                t.mixin({
                  beforeCreate: function () {
                    this._bv__toast = new i(this);
                  },
                }),
                  Object(h.g)(t.prototype, "$bvToast") ||
                    Object(h.e)(t.prototype, "$bvToast", {
                      get: function () {
                        return (
                          (this && this._bv__toast) ||
                            b(
                              '"'.concat(
                                "$bvToast",
                                '" must be accessed from a Vue instance "this" context.'
                              ),
                              q.pc
                            ),
                          this._bv__toast
                        );
                      },
                    });
              },
            },
          }),
        },
      });
    function Xv(t, e) {
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
    function Vv(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? Xv(Object(n), !0).forEach(function (e) {
              Gv(t, e, n[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
          : Xv(Object(n)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(n, e)
              );
            });
      }
      return t;
    }
    function Gv(t, e, n) {
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
    var Kv = "__BV_Tooltip__",
      Zv = { focus: !0, hover: !0, click: !0, blur: !0, manual: !0 },
      Jv = /^html$/i,
      Qv = /^noninteractive$/i,
      t_ = /^nofade$/i,
      e_ =
        /^(auto|top(left|right)?|bottom(left|right)?|left(top|bottom)?|right(top|bottom)?)$/i,
      n_ = /^(window|viewport|scrollParent)$/i,
      i_ = /^d\d+$/i,
      r_ = /^ds\d+$/i,
      o_ = /^dh\d+$/i,
      a_ = /^o-?\d+$/i,
      s_ = /^v-.+$/i,
      l_ = /\s+/,
      c_ = function (t, e, n) {
        if (o.i) {
          var i = (function (t, e) {
            var n = {
              title: void 0,
              trigger: "",
              placement: "top",
              fallbackPlacement: "flip",
              container: !1,
              animation: !0,
              offset: 0,
              id: null,
              html: !1,
              interactive: !0,
              disabled: !1,
              delay: Object(Gs.c)(q.sc, "delay", 50),
              boundary: String(Object(Gs.c)(q.sc, "boundary", "scrollParent")),
              boundaryPadding: Object(N.c)(
                Object(Gs.c)(q.sc, "boundaryPadding", 5),
                0
              ),
              variant: Object(Gs.c)(q.sc, "variant"),
              customClass: Object(Gs.c)(q.sc, "customClass"),
            };
            if (
              (Object(d.n)(t.value) ||
              Object(d.h)(t.value) ||
              Object(d.f)(t.value)
                ? (n.title = t.value)
                : Object(d.k)(t.value) && (n = Vv(Vv({}, n), t.value)),
              Object(d.o)(n.title))
            ) {
              var i = F.d ? e.props : (e.data || {}).attrs;
              n.title = i && !Object(d.p)(i.title) ? i.title : void 0;
            }
            Object(d.k)(n.delay) ||
              (n.delay = {
                show: Object(N.c)(n.delay, 0),
                hide: Object(N.c)(n.delay, 0),
              }),
              t.arg && (n.container = "#".concat(t.arg)),
              Object(h.h)(t.modifiers).forEach(function (t) {
                if (Jv.test(t)) n.html = !0;
                else if (Qv.test(t)) n.interactive = !1;
                else if (t_.test(t)) n.animation = !1;
                else if (e_.test(t)) n.placement = t;
                else if (n_.test(t))
                  (t = "scrollparent" === t ? "scrollParent" : t),
                    (n.boundary = t);
                else if (i_.test(t)) {
                  var e = Object(N.c)(t.slice(1), 0);
                  (n.delay.show = e), (n.delay.hide = e);
                } else
                  r_.test(t)
                    ? (n.delay.show = Object(N.c)(t.slice(2), 0))
                    : o_.test(t)
                    ? (n.delay.hide = Object(N.c)(t.slice(2), 0))
                    : a_.test(t)
                    ? (n.offset = Object(N.c)(t.slice(1), 0))
                    : s_.test(t) && (n.variant = t.slice(2) || null);
              });
            var r = {};
            return (
              Object(kt.b)(n.trigger || "")
                .filter(c.a)
                .join(" ")
                .trim()
                .toLowerCase()
                .split(l_)
                .forEach(function (t) {
                  Zv[t] && (r[t] = !0);
                }),
              Object(h.h)(t.modifiers).forEach(function (t) {
                (t = t.toLowerCase()), Zv[t] && (r[t] = !0);
              }),
              (n.trigger = Object(h.h)(r).join(" ")),
              "blur" === n.trigger && (n.trigger = "focus"),
              n.trigger || (n.trigger = "hover focus"),
              n
            );
          })(e, n);
          if (!t[Kv]) {
            var r = Cr(n, e);
            (t[Kv] = Ru(r, _f, { _scopeId: Lu(r, void 0) })),
              (t[Kv].__bv_prev_data__ = {}),
              t[Kv].$on(E.U, function () {
                Object(d.f)(i.title) && t[Kv].updateData({ title: i.title(t) });
              });
          }
          var a = {
              title: i.title,
              triggers: i.trigger,
              placement: i.placement,
              fallbackPlacement: i.fallbackPlacement,
              variant: i.variant,
              customClass: i.customClass,
              container: i.container,
              boundary: i.boundary,
              delay: i.delay,
              offset: i.offset,
              noFade: !i.animation,
              id: i.id,
              interactive: i.interactive,
              disabled: i.disabled,
              html: i.html,
            },
            s = t[Kv].__bv_prev_data__;
          if (((t[Kv].__bv_prev_data__ = a), !Object(yn.a)(a, s))) {
            var l = { target: t };
            Object(h.h)(a).forEach(function (e) {
              a[e] !== s[e] &&
                (l[e] = "title" === e && Object(d.f)(a[e]) ? a[e](t) : a[e]);
            }),
              t[Kv].updateData(l);
          }
        }
      },
      d_ = C({
        directives: {
          VBTooltip: {
            bind: function (t, e, n) {
              c_(t, e, n);
            },
            componentUpdated: function (t, e, n) {
              Object(F.e)(function () {
                c_(t, e, n);
              });
            },
            unbind: function (t) {
              !(function (t) {
                t[Kv] && (t[Kv].$destroy(), (t[Kv] = null)), delete t[Kv];
              })(t);
            },
          },
        },
      }),
      u_ = C({
        plugins: {
          AlertPlugin: nt,
          AspectPlugin: st,
          AvatarPlugin: ve,
          BadgePlugin: xe,
          BreadcrumbPlugin: We,
          ButtonPlugin: Ne,
          ButtonGroupPlugin: Ue,
          ButtonToolbarPlugin: Ke,
          CalendarPlugin: Ln,
          CardPlugin: Pi,
          CarouselPlugin: sr,
          CollapsePlugin: Xr,
          DropdownPlugin: Ko,
          EmbedPlugin: Qo,
          FormPlugin: ga,
          FormCheckboxPlugin: ds,
          FormDatepickerPlugin: Es,
          FormFilePlugin: Vs,
          FormGroupPlugin: hl,
          FormInputPlugin: ql,
          FormRadioPlugin: Pl,
          FormRatingPlugin: Kl,
          FormSelectPlugin: yc,
          FormSpinbuttonPlugin: Lc,
          FormTagsPlugin: ed,
          FormTextareaPlugin: ld,
          FormTimepickerPlugin: jd,
          ImagePlugin: Pd,
          InputGroupPlugin: Jd,
          JumbotronPlugin: iu,
          LayoutPlugin: pu,
          LinkPlugin: hu,
          ListGroupPlugin: Ou,
          MediaPlugin: ku,
          ModalPlugin: Dp,
          NavPlugin: th,
          NavbarPlugin: gh,
          OverlayPlugin: Ch,
          PaginationPlugin: Xh,
          PaginationNavPlugin: Qh,
          PopoverPlugin: Kf,
          ProgressPlugin: rb,
          SidebarPlugin: ob,
          SkeletonPlugin: Rb,
          SpinnerPlugin: Ib,
          TablePlugin: tv,
          TabsPlugin: Ov,
          TimePlugin: wv,
          ToastPlugin: Uv,
          TooltipPlugin: C({
            components: { BTooltip: xf },
            plugins: { VBTooltipPlugin: d_ },
          }),
        },
      }),
      p_ = C({ directives: { VBHover: fs } }),
      h_ = C({ directives: { VBModal: Mp } });
    function f_(t, e) {
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
    function b_(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? f_(Object(n), !0).forEach(function (e) {
              m_(t, e, n[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
          : f_(Object(n)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(n, e)
              );
            });
      }
      return t;
    }
    function m_(t, e, n) {
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
    function g_(t, e) {
      for (var n = 0; n < e.length; n++) {
        var i = e[n];
        (i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          "value" in i && (i.writable = !0),
          Object.defineProperty(t, i.key, i);
      }
    }
    var v_ = ".nav-link",
      __ = ".list-group-item",
      y_ = ".dropdown-item",
      M_ = Object(St.e)("BVScrollspy", "activate"),
      O_ = { element: "body", offset: 10, method: "auto", throttle: 75 },
      w_ = {
        element: "(string|element|component)",
        offset: "number",
        method: "string",
        throttle: "number",
      },
      A_ = [
        "webkitTransitionEnd",
        "transitionend",
        "otransitionend",
        "oTransitionEnd",
      ],
      x_ = function (t) {
        return Object(h.n)(t)
          .match(/\s([a-zA-Z]+)/)[1]
          .toLowerCase();
      },
      z_ = (function () {
        function t(e, n, i) {
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, t),
            (this.$el = e),
            (this.$scroller = null),
            (this.$selector = [v_, __, y_].join(",")),
            (this.$offsets = []),
            (this.$targets = []),
            (this.$activeTarget = null),
            (this.$scrollHeight = 0),
            (this.$resizeTimeout = null),
            (this.$scrollerObserver = null),
            (this.$targetsObserver = null),
            (this.$root = i || null),
            (this.$config = null),
            this.updateConfig(n);
        }
        var e, n, i;
        return (
          (e = t),
          (i = [
            {
              key: "Name",
              get: function () {
                return "v-b-scrollspy";
              },
            },
            {
              key: "Default",
              get: function () {
                return O_;
              },
            },
            {
              key: "DefaultType",
              get: function () {
                return w_;
              },
            },
          ]),
          (n = [
            {
              key: "updateConfig",
              value: function (t, e) {
                this.$scroller && (this.unlisten(), (this.$scroller = null));
                var n = b_(b_({}, this.constructor.Default), t);
                if (
                  (e && (this.$root = e),
                  (function (t, e, n) {
                    for (var i in n)
                      if (Object(h.g)(n, i)) {
                        var r = n[i],
                          o = e[i],
                          a = o && Object(I.s)(o) ? "element" : x_(o);
                        (a = o && o._isVue ? "component" : a),
                          new RegExp(r).test(a) ||
                            b(
                              ""
                                .concat(t, ': Option "')
                                .concat(i, '" provided type "')
                                .concat(a, '" but expected type "')
                                .concat(r, '"')
                            );
                      }
                  })(this.constructor.Name, n, this.constructor.DefaultType),
                  (this.$config = n),
                  this.$root)
                ) {
                  var i = this;
                  this.$root.$nextTick(function () {
                    i.listen();
                  });
                } else this.listen();
              },
            },
            {
              key: "dispose",
              value: function () {
                this.unlisten(),
                  clearTimeout(this.$resizeTimeout),
                  (this.$resizeTimeout = null),
                  (this.$el = null),
                  (this.$config = null),
                  (this.$scroller = null),
                  (this.$selector = null),
                  (this.$offsets = null),
                  (this.$targets = null),
                  (this.$activeTarget = null),
                  (this.$scrollHeight = null);
              },
            },
            {
              key: "listen",
              value: function () {
                var t = this,
                  e = this.getScroller();
                e &&
                  "BODY" !== e.tagName &&
                  Object(St.b)(e, "scroll", this, E.db),
                  Object(St.b)(window, "scroll", this, E.db),
                  Object(St.b)(window, "resize", this, E.db),
                  Object(St.b)(window, "orientationchange", this, E.db),
                  A_.forEach(function (e) {
                    Object(St.b)(window, e, t, E.db);
                  }),
                  this.setObservers(!0),
                  this.handleEvent("refresh");
              },
            },
            {
              key: "unlisten",
              value: function () {
                var t = this,
                  e = this.getScroller();
                this.setObservers(!1),
                  e &&
                    "BODY" !== e.tagName &&
                    Object(St.a)(e, "scroll", this, E.db),
                  Object(St.a)(window, "scroll", this, E.db),
                  Object(St.a)(window, "resize", this, E.db),
                  Object(St.a)(window, "orientationchange", this, E.db),
                  A_.forEach(function (e) {
                    Object(St.a)(window, e, t, E.db);
                  });
              },
            },
            {
              key: "setObservers",
              value: function (t) {
                var e = this;
                this.$scrollerObserver && this.$scrollerObserver.disconnect(),
                  this.$targetsObserver && this.$targetsObserver.disconnect(),
                  (this.$scrollerObserver = null),
                  (this.$targetsObserver = null),
                  t &&
                    ((this.$targetsObserver = Bi(
                      this.$el,
                      function () {
                        e.handleEvent("mutation");
                      },
                      {
                        subtree: !0,
                        childList: !0,
                        attributes: !0,
                        attributeFilter: ["href"],
                      }
                    )),
                    (this.$scrollerObserver = Bi(
                      this.getScroller(),
                      function () {
                        e.handleEvent("mutation");
                      },
                      {
                        subtree: !0,
                        childList: !0,
                        characterData: !0,
                        attributes: !0,
                        attributeFilter: ["id", "style", "class"],
                      }
                    )));
              },
            },
            {
              key: "handleEvent",
              value: function (t) {
                var e = Object(d.n)(t) ? t : t.type,
                  n = this;
                "scroll" === e
                  ? (this.$scrollerObserver || this.listen(), this.process())
                  : /(resize|orientationchange|mutation|refresh)/.test(e) &&
                    (n.$resizeTimeout ||
                      (n.$resizeTimeout = setTimeout(function () {
                        n.refresh(), n.process(), (n.$resizeTimeout = null);
                      }, n.$config.throttle)));
              },
            },
            {
              key: "refresh",
              value: function () {
                var t = this,
                  e = this.getScroller();
                if (e) {
                  var n = e !== e.window ? "position" : "offset",
                    i =
                      "auto" === this.$config.method ? n : this.$config.method,
                    r = "position" === i ? I.x : I.w,
                    o = "position" === i ? this.getScrollTop() : 0;
                  return (
                    (this.$offsets = []),
                    (this.$targets = []),
                    (this.$scrollHeight = this.getScrollHeight()),
                    Object(I.F)(this.$selector, this.$el)
                      .map(function (t) {
                        return Object(I.h)(t, "href");
                      })
                      .filter(function (t) {
                        return t && l.n.test(t || "");
                      })
                      .map(function (t) {
                        var n = t.replace(l.n, "$1").trim();
                        if (!n) return null;
                        var i = Object(I.E)(n, e);
                        return i && Object(I.u)(i)
                          ? { offset: Object(N.c)(r(i).top, 0) + o, target: n }
                          : null;
                      })
                      .filter(c.a)
                      .sort(function (t, e) {
                        return t.offset - e.offset;
                      })
                      .reduce(function (e, n) {
                        return (
                          e[n.target] ||
                            (t.$offsets.push(n.offset),
                            t.$targets.push(n.target),
                            (e[n.target] = !0)),
                          e
                        );
                      }, {}),
                    this
                  );
                }
              },
            },
            {
              key: "process",
              value: function () {
                var t = this.getScrollTop() + this.$config.offset,
                  e = this.getScrollHeight(),
                  n = this.$config.offset + e - this.getOffsetHeight();
                if ((this.$scrollHeight !== e && this.refresh(), t >= n)) {
                  var i = this.$targets[this.$targets.length - 1];
                  this.$activeTarget !== i && this.activate(i);
                } else {
                  if (
                    this.$activeTarget &&
                    t < this.$offsets[0] &&
                    this.$offsets[0] > 0
                  )
                    return (this.$activeTarget = null), void this.clear();
                  for (var r = this.$offsets.length; r--; )
                    this.$activeTarget !== this.$targets[r] &&
                      t >= this.$offsets[r] &&
                      (Object(d.o)(this.$offsets[r + 1]) ||
                        t < this.$offsets[r + 1]) &&
                      this.activate(this.$targets[r]);
                }
              },
            },
            {
              key: "getScroller",
              value: function () {
                if (this.$scroller) return this.$scroller;
                var t = this.$config.element;
                return t
                  ? (Object(I.s)(t.$el)
                      ? (t = t.$el)
                      : Object(d.n)(t) && (t = Object(I.E)(t)),
                    t
                      ? ((this.$scroller = "BODY" === t.tagName ? window : t),
                        this.$scroller)
                      : null)
                  : null;
              },
            },
            {
              key: "getScrollTop",
              value: function () {
                var t = this.getScroller();
                return t === window ? t.pageYOffset : t.scrollTop;
              },
            },
            {
              key: "getScrollHeight",
              value: function () {
                return (
                  this.getScroller().scrollHeight ||
                  Object(it.d)(
                    document.body.scrollHeight,
                    document.documentElement.scrollHeight
                  )
                );
              },
            },
            {
              key: "getOffsetHeight",
              value: function () {
                var t = this.getScroller();
                return t === window
                  ? window.innerHeight
                  : Object(I.i)(t).height;
              },
            },
            {
              key: "activate",
              value: function (t) {
                var e = this;
                (this.$activeTarget = t), this.clear();
                var n = Object(I.F)(
                  this.$selector
                    .split(",")
                    .map(function (e) {
                      return "".concat(e, '[href$="').concat(t, '"]');
                    })
                    .join(","),
                  this.$el
                );
                n.forEach(function (t) {
                  if (Object(I.p)(t, "dropdown-item")) {
                    var n = Object(I.e)(".dropdown, .dropup", t);
                    n &&
                      e.setActiveState(Object(I.E)(".dropdown-toggle", n), !0),
                      e.setActiveState(t, !0);
                  } else {
                    e.setActiveState(t, !0),
                      Object(I.v)(t.parentElement, ".nav-item") &&
                        e.setActiveState(t.parentElement, !0);
                    for (var i = t; i; ) {
                      var r = (i = Object(I.e)(".nav, .list-group", i))
                        ? i.previousElementSibling
                        : null;
                      r &&
                        Object(I.v)(r, "".concat(v_, ", ").concat(__)) &&
                        e.setActiveState(r, !0),
                        r &&
                          Object(I.v)(r, ".nav-item") &&
                          (e.setActiveState(Object(I.E)(v_, r), !0),
                          e.setActiveState(r, !0));
                    }
                  }
                }),
                  n && n.length > 0 && this.$root && this.$root.$emit(M_, t, n);
              },
            },
            {
              key: "clear",
              value: function () {
                var t = this;
                Object(I.F)(
                  "".concat(this.$selector, ", ").concat(".nav-item"),
                  this.$el
                )
                  .filter(function (t) {
                    return Object(I.p)(t, "active");
                  })
                  .forEach(function (e) {
                    return t.setActiveState(e, !1);
                  });
              },
            },
            {
              key: "setActiveState",
              value: function (t, e) {
                t && (e ? Object(I.b)(t, "active") : Object(I.A)(t, "active"));
              },
            },
          ]) && g_(e.prototype, n),
          i && g_(e, i),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          t
        );
      })(),
      C_ = "__BV_Scrollspy__",
      k_ = /^\d+$/,
      S_ = /^(auto|position|offset)$/,
      T_ = function (t, e, n) {
        if (o.i) {
          var i = (function (t) {
            var e = {};
            return (
              t.arg && (e.element = "#".concat(t.arg)),
              Object(h.h)(t.modifiers).forEach(function (t) {
                k_.test(t)
                  ? (e.offset = Object(N.c)(t, 0))
                  : S_.test(t) && (e.method = t);
              }),
              Object(d.n)(t.value)
                ? (e.element = t.value)
                : Object(d.h)(t.value)
                ? (e.offset = Object(it.g)(t.value))
                : Object(d.j)(t.value) &&
                  Object(h.h)(t.value)
                    .filter(function (t) {
                      return !!z_.DefaultType[t];
                    })
                    .forEach(function (n) {
                      e[n] = t.value[n];
                    }),
              e
            );
          })(e);
          t[C_]
            ? t[C_].updateConfig(i, Object(kr.a)(Cr(n, e)))
            : (t[C_] = new z_(t, i, Object(kr.a)(Cr(n, e))));
        }
      },
      D_ = {
        install: z({
          plugins: {
            componentsPlugin: u_,
            directivesPlugin: C({
              plugins: {
                VBHoverPlugin: p_,
                VBModalPlugin: h_,
                VBPopoverPlugin: Gf,
                VBScrollspyPlugin: C({
                  directives: {
                    VBScrollspy: {
                      bind: function (t, e, n) {
                        T_(t, e, n);
                      },
                      inserted: function (t, e, n) {
                        T_(t, e, n);
                      },
                      update: function (t, e, n) {
                        e.value !== e.oldValue && T_(t, e, n);
                      },
                      componentUpdated: function (t, e, n) {
                        e.value !== e.oldValue && T_(t, e, n);
                      },
                      unbind: function (t) {
                        !(function (t) {
                          t[C_] &&
                            (t[C_].dispose(), (t[C_] = null), delete t[C_]);
                        })(t);
                      },
                    },
                  },
                }),
                VBTogglePlugin: Ur,
                VBTooltipPlugin: d_,
                VBVisiblePlugin: C({ directives: { VBVisible: _i } }),
              },
            }),
          },
        }),
        NAME: "BootstrapVue",
      };
  },
  function (t, e, n) {
    "use strict";
    var i = {
        name: "addToCalendar",
        props: {
          calendar_content: {
            type: [Object],
            default: function () {
              return {
                description: "",
                endDate: "",
                endTime: "",
                location: "",
                name: "",
                startDate: "",
                startTime: "",
                timeZone: "",
                iCalFileName: "",
              };
            },
          },
        },
        data: function () {
          return {};
        },
        mounted: function () {},
        methods: {
          add_to_calendar_url: function () {
            var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "";
            kivicare_add_to_calendar_url(this.calendar_content, t);
          },
        },
      },
      r = (n(513), n(15)),
      o = Object(r.a)(
        i,
        function () {
          var t = this,
            e = t._self._c;
          return e("div", [
            e(
              "span",
              {
                staticClass: "badge badge-primary",
                on: {
                  click: function (e) {
                    return t.add_to_calendar_url("googleCalender");
                  },
                },
              },
              [
                e("i", { staticClass: "fab fa-google" }),
                t._v("  " + t._s(t.formTranslation.common.google) + "\n    "),
              ]
            ),
            t._v(" "),
            e(
              "span",
              {
                staticClass: "badge badge-primary",
                on: {
                  click: function (e) {
                    return t.add_to_calendar_url("microSoftOutlookLive");
                  },
                },
              },
              [
                e("i", { staticClass: "fas fa-calendar-alt" }),
                t._v("  " + t._s(t.formTranslation.common.outlook) + "\n    "),
              ]
            ),
            t._v(" "),
            e(
              "span",
              {
                staticClass: "badge badge-primary",
                on: {
                  click: function (e) {
                    return t.add_to_calendar_url("microSoftOutlookoffice");
                  },
                },
              },
              [
                e("i", { staticClass: "fab fa-windows" }),
                t._v(
                  "  " + t._s(t.formTranslation.common.microsoft) + "\n    "
                ),
              ]
            ),
            t._v(" "),
            e(
              "span",
              {
                staticClass: "badge badge-primary",
                on: {
                  click: function (e) {
                    return t.add_to_calendar_url("apple");
                  },
                },
              },
              [
                e("i", { staticClass: "fas fab-apple" }),
                t._v("  " + t._s("Apple") + "\n    "),
              ]
            ),
            t._v(" "),
            e(
              "span",
              {
                staticClass: "badge badge-primary",
                on: {
                  click: function (e) {
                    return t.add_to_calendar_url("yahoo");
                  },
                },
              },
              [
                e("i", {
                  staticClass: "fab fa-yahoo",
                  attrs: { "aria-hidden": "true" },
                }),
                t._v(t._s(t.formTranslation.common.yahoo) + "\n    "),
              ]
            ),
          ]);
        },
        [],
        !1,
        null,
        "4f754936",
        null
      );
    e.a = o.exports;
  },
  function (t, e, n) {
    "use strict";
    var i = n(34),
      r = n.n(i),
      o = [
        "compactDisplay",
        "currency",
        "currencyDisplay",
        "currencySign",
        "localeMatcher",
        "notation",
        "numberingSystem",
        "signDisplay",
        "style",
        "unit",
        "unitDisplay",
        "useGrouping",
        "minimumIntegerDigits",
        "minimumFractionDigits",
        "maximumFractionDigits",
        "minimumSignificantDigits",
        "maximumSignificantDigits",
      ],
      a = [
        "dateStyle",
        "timeStyle",
        "calendar",
        "localeMatcher",
        "hour12",
        "hourCycle",
        "timeZone",
        "formatMatcher",
        "weekday",
        "era",
        "year",
        "month",
        "day",
        "hour",
        "minute",
        "second",
        "timeZoneName",
      ],
      s = Array.isArray;
    function l(t) {
      return null !== t && "object" == typeof t;
    }
    function c(t) {
      return "boolean" == typeof t;
    }
    function d(t) {
      return "string" == typeof t;
    }
    var u = Object.prototype.toString;
    function p(t) {
      return "[object Object]" === u.call(t);
    }
    function h(t) {
      return null == t;
    }
    function f(t) {
      return "function" == typeof t;
    }
    function b() {
      for (var t = [], e = arguments.length; e--; ) t[e] = arguments[e];
      var n = null,
        i = null;
      return (
        1 === t.length
          ? l(t[0]) || s(t[0])
            ? (i = t[0])
            : "string" == typeof t[0] && (n = t[0])
          : 2 === t.length &&
            ("string" == typeof t[0] && (n = t[0]),
            (l(t[1]) || s(t[1])) && (i = t[1])),
        { locale: n, params: i }
      );
    }
    function m(t) {
      return JSON.parse(JSON.stringify(t));
    }
    function g(t, e) {
      return !!~t.indexOf(e);
    }
    var v = Object.prototype.hasOwnProperty;
    function _(t, e) {
      return v.call(t, e);
    }
    function y(t) {
      for (var e = arguments, n = Object(t), i = 1; i < arguments.length; i++) {
        var r = e[i];
        if (null != r) {
          var o = void 0;
          for (o in r)
            _(r, o) && (l(r[o]) ? (n[o] = y(n[o], r[o])) : (n[o] = r[o]));
        }
      }
      return n;
    }
    function M(t, e) {
      if (t === e) return !0;
      var n = l(t),
        i = l(e);
      if (!n || !i) return !n && !i && String(t) === String(e);
      try {
        var r = s(t),
          o = s(e);
        if (r && o)
          return (
            t.length === e.length &&
            t.every(function (t, n) {
              return M(t, e[n]);
            })
          );
        if (r || o) return !1;
        var a = Object.keys(t),
          c = Object.keys(e);
        return (
          a.length === c.length &&
          a.every(function (n) {
            return M(t[n], e[n]);
          })
        );
      } catch (t) {
        return !1;
      }
    }
    function O(t) {
      return (
        null != t &&
          Object.keys(t).forEach(function (e) {
            "string" == typeof t[e] &&
              (t[e] = t[e]
                .replace(/</g, "&lt;")
                .replace(/>/g, "&gt;")
                .replace(/"/g, "&quot;")
                .replace(/'/g, "&apos;"));
          }),
        t
      );
    }
    var w = {
      name: "i18n",
      functional: !0,
      props: {
        tag: { type: [String, Boolean, Object], default: "span" },
        path: { type: String, required: !0 },
        locale: { type: String },
        places: { type: [Array, Object] },
      },
      render: function (t, e) {
        var n = e.data,
          i = e.parent,
          r = e.props,
          o = e.slots,
          a = i.$i18n;
        if (a) {
          var s = r.path,
            l = r.locale,
            c = r.places,
            d = o(),
            u = a.i(
              s,
              l,
              (function (t) {
                var e;
                for (e in t) if ("default" !== e) return !1;
                return Boolean(e);
              })(d) || c
                ? (function (t, e) {
                    var n = e
                      ? (function (t) {
                          return Array.isArray(t)
                            ? t.reduce(x, {})
                            : Object.assign({}, t);
                        })(e)
                      : {};
                    if (!t) return n;
                    var i = (t = t.filter(function (t) {
                      return t.tag || "" !== t.text.trim();
                    })).every(z);
                    return t.reduce(i ? A : x, n);
                  })(d.default, c)
                : d
            ),
            p = (r.tag && !0 !== r.tag) || !1 === r.tag ? r.tag : "span";
          return p ? t(p, n, u) : u;
        }
      },
    };
    function A(t, e) {
      return (
        e.data &&
          e.data.attrs &&
          e.data.attrs.place &&
          (t[e.data.attrs.place] = e),
        t
      );
    }
    function x(t, e, n) {
      return (t[n] = e), t;
    }
    function z(t) {
      return Boolean(t.data && t.data.attrs && t.data.attrs.place);
    }
    var C,
      k = {
        name: "i18n-n",
        functional: !0,
        props: {
          tag: { type: [String, Boolean, Object], default: "span" },
          value: { type: Number, required: !0 },
          format: { type: [String, Object] },
          locale: { type: String },
        },
        render: function (t, e) {
          var n = e.props,
            i = e.parent,
            r = e.data,
            a = i.$i18n;
          if (!a) return null;
          var s = null,
            c = null;
          d(n.format)
            ? (s = n.format)
            : l(n.format) &&
              (n.format.key && (s = n.format.key),
              (c = Object.keys(n.format).reduce(function (t, e) {
                var i;
                return g(o, e)
                  ? Object.assign({}, t, (((i = {})[e] = n.format[e]), i))
                  : t;
              }, null)));
          var u = n.locale || a.locale,
            p = a._ntp(n.value, u, s, c),
            h = p.map(function (t, e) {
              var n,
                i = r.scopedSlots && r.scopedSlots[t.type];
              return i
                ? i(
                    (((n = {})[t.type] = t.value),
                    (n.index = e),
                    (n.parts = p),
                    n)
                  )
                : t.value;
            }),
            f = (n.tag && !0 !== n.tag) || !1 === n.tag ? n.tag : "span";
          return f
            ? t(
                f,
                { attrs: r.attrs, class: r.class, staticClass: r.staticClass },
                h
              )
            : h;
        },
      };
    function S(t, e, n) {
      L(t, n) && q(t, e, n);
    }
    function T(t, e, n, i) {
      if (L(t, n)) {
        var r = n.context.$i18n;
        ((function (t, e) {
          var n = e.context;
          return t._locale === n.$i18n.locale;
        })(t, n) &&
          M(e.value, e.oldValue) &&
          M(t._localeMessage, r.getLocaleMessage(r.locale))) ||
          q(t, e, n);
      }
    }
    function D(t, e, n, i) {
      if (n.context) {
        var r = n.context.$i18n || {};
        e.modifiers.preserve ||
          r.preserveDirectiveContent ||
          (t.textContent = ""),
          (t._vt = void 0),
          delete t._vt,
          (t._locale = void 0),
          delete t._locale,
          (t._localeMessage = void 0),
          delete t._localeMessage;
      }
    }
    function L(t, e) {
      var n = e.context;
      return (n && !!n.$i18n) || !1;
    }
    function q(t, e, n) {
      var i,
        r,
        o = (function (t) {
          var e, n, i, r;
          return (
            d(t)
              ? (e = t)
              : p(t) &&
                ((e = t.path), (n = t.locale), (i = t.args), (r = t.choice)),
            { path: e, locale: n, args: i, choice: r }
          );
        })(e.value),
        a = o.path,
        s = o.locale,
        l = o.args,
        c = o.choice;
      if ((a || s || l) && a) {
        var u = n.context;
        (t._vt = t.textContent =
          null != c
            ? (i = u.$i18n).tc.apply(i, [a, c].concat(E(s, l)))
            : (r = u.$i18n).t.apply(r, [a].concat(E(s, l)))),
          (t._locale = u.$i18n.locale),
          (t._localeMessage = u.$i18n.getLocaleMessage(u.$i18n.locale));
      }
    }
    function E(t, e) {
      var n = [];
      return t && n.push(t), e && (Array.isArray(e) || p(e)) && n.push(e), n;
    }
    function j(t, e) {
      void 0 === e && (e = { bridge: !1 }),
        (j.installed = !0),
        (C = t).version && Number(C.version.split(".")[0]),
        (function (t) {
          t.prototype.hasOwnProperty("$i18n") ||
            Object.defineProperty(t.prototype, "$i18n", {
              get: function () {
                return this._i18n;
              },
            }),
            (t.prototype.$t = function (t) {
              for (var e = [], n = arguments.length - 1; n-- > 0; )
                e[n] = arguments[n + 1];
              var i = this.$i18n;
              return i._t.apply(
                i,
                [t, i.locale, i._getMessages(), this].concat(e)
              );
            }),
            (t.prototype.$tc = function (t, e) {
              for (var n = [], i = arguments.length - 2; i-- > 0; )
                n[i] = arguments[i + 2];
              var r = this.$i18n;
              return r._tc.apply(
                r,
                [t, r.locale, r._getMessages(), this, e].concat(n)
              );
            }),
            (t.prototype.$te = function (t, e) {
              var n = this.$i18n;
              return n._te(t, n.locale, n._getMessages(), e);
            }),
            (t.prototype.$d = function (t) {
              for (var e, n = [], i = arguments.length - 1; i-- > 0; )
                n[i] = arguments[i + 1];
              return (e = this.$i18n).d.apply(e, [t].concat(n));
            }),
            (t.prototype.$n = function (t) {
              for (var e, n = [], i = arguments.length - 1; i-- > 0; )
                n[i] = arguments[i + 1];
              return (e = this.$i18n).n.apply(e, [t].concat(n));
            });
        })(C),
        C.mixin(
          (function (t) {
            function e() {
              this !== this.$root &&
                this.$options.__INTLIFY_META__ &&
                this.$el &&
                this.$el.setAttribute(
                  "data-intlify",
                  this.$options.__INTLIFY_META__
                );
            }
            return (
              void 0 === t && (t = !1),
              t
                ? { mounted: e }
                : {
                    beforeCreate: function () {
                      var t = this.$options;
                      if (
                        ((t.i18n =
                          t.i18n || (t.__i18nBridge || t.__i18n ? {} : null)),
                        t.i18n)
                      ) {
                        if (t.i18n instanceof K) {
                          if (t.__i18nBridge || t.__i18n)
                            try {
                              var e =
                                t.i18n && t.i18n.messages
                                  ? t.i18n.messages
                                  : {};
                              (t.__i18nBridge || t.__i18n).forEach(function (
                                t
                              ) {
                                e = y(e, JSON.parse(t));
                              }),
                                Object.keys(e).forEach(function (n) {
                                  t.i18n.mergeLocaleMessage(n, e[n]);
                                });
                            } catch (t) {}
                          (this._i18n = t.i18n),
                            (this._i18nWatcher = this._i18n.watchI18nData());
                        } else if (p(t.i18n)) {
                          var n =
                            this.$root &&
                            this.$root.$i18n &&
                            this.$root.$i18n instanceof K
                              ? this.$root.$i18n
                              : null;
                          if (
                            (n &&
                              ((t.i18n.root = this.$root),
                              (t.i18n.formatter = n.formatter),
                              (t.i18n.fallbackLocale = n.fallbackLocale),
                              (t.i18n.formatFallbackMessages =
                                n.formatFallbackMessages),
                              (t.i18n.silentTranslationWarn =
                                n.silentTranslationWarn),
                              (t.i18n.silentFallbackWarn =
                                n.silentFallbackWarn),
                              (t.i18n.pluralizationRules =
                                n.pluralizationRules),
                              (t.i18n.preserveDirectiveContent =
                                n.preserveDirectiveContent)),
                            t.__i18nBridge || t.__i18n)
                          )
                            try {
                              var i =
                                t.i18n && t.i18n.messages
                                  ? t.i18n.messages
                                  : {};
                              (t.__i18nBridge || t.__i18n).forEach(function (
                                t
                              ) {
                                i = y(i, JSON.parse(t));
                              }),
                                (t.i18n.messages = i);
                            } catch (t) {}
                          var r = t.i18n.sharedMessages;
                          r &&
                            p(r) &&
                            (t.i18n.messages = y(t.i18n.messages, r)),
                            (this._i18n = new K(t.i18n)),
                            (this._i18nWatcher = this._i18n.watchI18nData()),
                            (void 0 === t.i18n.sync || t.i18n.sync) &&
                              (this._localeWatcher = this.$i18n.watchLocale()),
                            n && n.onComponentInstanceCreated(this._i18n);
                        }
                      } else
                        this.$root &&
                        this.$root.$i18n &&
                        this.$root.$i18n instanceof K
                          ? (this._i18n = this.$root.$i18n)
                          : t.parent &&
                            t.parent.$i18n &&
                            t.parent.$i18n instanceof K &&
                            (this._i18n = t.parent.$i18n);
                    },
                    beforeMount: function () {
                      var t = this.$options;
                      (t.i18n =
                        t.i18n || (t.__i18nBridge || t.__i18n ? {} : null)),
                        t.i18n
                          ? (t.i18n instanceof K || p(t.i18n)) &&
                            (this._i18n.subscribeDataChanging(this),
                            (this._subscribing = !0))
                          : ((this.$root &&
                              this.$root.$i18n &&
                              this.$root.$i18n instanceof K) ||
                              (t.parent &&
                                t.parent.$i18n &&
                                t.parent.$i18n instanceof K)) &&
                            (this._i18n.subscribeDataChanging(this),
                            (this._subscribing = !0));
                    },
                    mounted: e,
                    beforeDestroy: function () {
                      if (this._i18n) {
                        var t = this;
                        this.$nextTick(function () {
                          t._subscribing &&
                            (t._i18n.unsubscribeDataChanging(t),
                            delete t._subscribing),
                            t._i18nWatcher &&
                              (t._i18nWatcher(),
                              t._i18n.destroyVM(),
                              delete t._i18nWatcher),
                            t._localeWatcher &&
                              (t._localeWatcher(), delete t._localeWatcher);
                        });
                      }
                    },
                  }
            );
          })(e.bridge)
        ),
        C.directive("t", { bind: S, update: T, unbind: D }),
        C.component(w.name, w),
        C.component(k.name, k),
        (C.config.optionMergeStrategies.i18n = function (t, e) {
          return void 0 === e ? t : e;
        });
    }
    var P = function () {
      this._caches = Object.create(null);
    };
    P.prototype.interpolate = function (t, e) {
      if (!e) return [t];
      var n = this._caches[t];
      return (
        n ||
          ((n = (function (t) {
            for (var e = [], n = 0, i = ""; n < t.length; ) {
              var r = t[n++];
              if ("{" === r) {
                i && e.push({ type: "text", value: i }), (i = "");
                var o = "";
                for (r = t[n++]; void 0 !== r && "}" !== r; )
                  (o += r), (r = t[n++]);
                var a = "}" === r,
                  s = R.test(o) ? "list" : a && I.test(o) ? "named" : "unknown";
                e.push({ value: o, type: s });
              } else "%" === r ? "{" !== t[n] && (i += r) : (i += r);
            }
            return i && e.push({ type: "text", value: i }), e;
          })(t)),
          (this._caches[t] = n)),
        (function (t, e) {
          var n = [],
            i = 0,
            r = Array.isArray(e) ? "list" : l(e) ? "named" : "unknown";
          if ("unknown" === r) return n;
          for (; i < t.length; ) {
            var o = t[i];
            switch (o.type) {
              case "text":
                n.push(o.value);
                break;
              case "list":
                n.push(e[parseInt(o.value, 10)]);
                break;
              case "named":
                "named" === r && n.push(e[o.value]);
                break;
              case "unknown":
            }
            i++;
          }
          return n;
        })(n, e)
      );
    };
    var R = /^(?:\d)+/,
      I = /^(?:\w)+/,
      W = [];
    (W[0] = { ws: [0], ident: [3, 0], "[": [4], eof: [7] }),
      (W[1] = { ws: [1], ".": [2], "[": [4], eof: [7] }),
      (W[2] = { ws: [2], ident: [3, 0], 0: [3, 0], number: [3, 0] }),
      (W[3] = {
        ident: [3, 0],
        0: [3, 0],
        number: [3, 0],
        ws: [1, 1],
        ".": [2, 1],
        "[": [4, 1],
        eof: [7, 1],
      }),
      (W[4] = {
        "'": [5, 0],
        '"': [6, 0],
        "[": [4, 2],
        "]": [1, 3],
        eof: 8,
        else: [4, 0],
      }),
      (W[5] = { "'": [4, 0], eof: 8, else: [5, 0] }),
      (W[6] = { '"': [4, 0], eof: 8, else: [6, 0] });
    var N = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
    function B(t) {
      if (null == t) return "eof";
      switch (t.charCodeAt(0)) {
        case 91:
        case 93:
        case 46:
        case 34:
        case 39:
          return t;
        case 95:
        case 36:
        case 45:
          return "ident";
        case 9:
        case 10:
        case 13:
        case 160:
        case 65279:
        case 8232:
        case 8233:
          return "ws";
      }
      return "ident";
    }
    var F = function () {
      this._cache = Object.create(null);
    };
    (F.prototype.parsePath = function (t) {
      var e = this._cache[t];
      return (
        e ||
          ((e = (function (t) {
            var e,
              n,
              i,
              r,
              o,
              a,
              s,
              l = [],
              c = -1,
              d = 0,
              u = 0,
              p = [];
            function h() {
              var e = t[c + 1];
              if ((5 === d && "'" === e) || (6 === d && '"' === e))
                return c++, (i = "\\" + e), p[0](), !0;
            }
            for (
              p[1] = function () {
                void 0 !== n && (l.push(n), (n = void 0));
              },
                p[0] = function () {
                  void 0 === n ? (n = i) : (n += i);
                },
                p[2] = function () {
                  p[0](), u++;
                },
                p[3] = function () {
                  if (u > 0) u--, (d = 4), p[0]();
                  else {
                    if (((u = 0), void 0 === n)) return !1;
                    if (
                      !1 ===
                      (n = (function (t) {
                        var e,
                          n,
                          i,
                          r = t.trim();
                        return (
                          ("0" !== t.charAt(0) || !isNaN(t)) &&
                          ((i = r),
                          N.test(i)
                            ? (n = (e = r).charCodeAt(0)) !==
                                e.charCodeAt(e.length - 1) ||
                              (34 !== n && 39 !== n)
                              ? e
                              : e.slice(1, -1)
                            : "*" + r)
                        );
                      })(n))
                    )
                      return !1;
                    p[1]();
                  }
                };
              null !== d;

            )
              if ((c++, "\\" !== (e = t[c]) || !h())) {
                if (((r = B(e)), 8 === (o = (s = W[d])[r] || s.else || 8)))
                  return;
                if (
                  ((d = o[0]),
                  (a = p[o[1]]) &&
                    ((i = void 0 === (i = o[2]) ? e : i), !1 === a()))
                )
                  return;
                if (7 === d) return l;
              }
          })(t)) &&
            (this._cache[t] = e)),
        e || []
      );
    }),
      (F.prototype.getPathValue = function (t, e) {
        if (!l(t)) return null;
        var n = this.parsePath(e);
        if (0 === n.length) return null;
        for (var i = n.length, r = t, o = 0; o < i; ) {
          var a = r[n[o]];
          if (null == a) return null;
          (r = a), o++;
        }
        return r;
      });
    var $,
      H = /<\/?[\w\s="/.':;#-\/]+>/,
      Y = /(?:@(?:\.[a-zA-Z]+)?:(?:[\w\-_|./]+|\([\w\-_:|./]+\)))/g,
      U = /^@(?:\.([a-zA-Z]+))?:/,
      X = /[()]/g,
      V = {
        upper: function (t) {
          return t.toLocaleUpperCase();
        },
        lower: function (t) {
          return t.toLocaleLowerCase();
        },
        capitalize: function (t) {
          return "" + t.charAt(0).toLocaleUpperCase() + t.substr(1);
        },
      },
      G = new P(),
      K = function (t) {
        var e = this;
        void 0 === t && (t = {}),
          !C && "undefined" != typeof window && window.Vue && j(window.Vue);
        var n = t.locale || "en-US",
          i = !1 !== t.fallbackLocale && (t.fallbackLocale || "en-US"),
          r = t.messages || {},
          o = t.dateTimeFormats || t.datetimeFormats || {},
          a = t.numberFormats || {};
        (this._vm = null),
          (this._formatter = t.formatter || G),
          (this._modifiers = t.modifiers || {}),
          (this._missing = t.missing || null),
          (this._root = t.root || null),
          (this._sync = void 0 === t.sync || !!t.sync),
          (this._fallbackRoot = void 0 === t.fallbackRoot || !!t.fallbackRoot),
          (this._fallbackRootWithEmptyString =
            void 0 === t.fallbackRootWithEmptyString ||
            !!t.fallbackRootWithEmptyString),
          (this._formatFallbackMessages =
            void 0 !== t.formatFallbackMessages && !!t.formatFallbackMessages),
          (this._silentTranslationWarn =
            void 0 !== t.silentTranslationWarn && t.silentTranslationWarn),
          (this._silentFallbackWarn =
            void 0 !== t.silentFallbackWarn && !!t.silentFallbackWarn),
          (this._dateTimeFormatters = {}),
          (this._numberFormatters = {}),
          (this._path = new F()),
          (this._dataListeners = new Set()),
          (this._componentInstanceCreatedListener =
            t.componentInstanceCreatedListener || null),
          (this._preserveDirectiveContent =
            void 0 !== t.preserveDirectiveContent &&
            !!t.preserveDirectiveContent),
          (this.pluralizationRules = t.pluralizationRules || {}),
          (this._warnHtmlInMessage = t.warnHtmlInMessage || "off"),
          (this._postTranslation = t.postTranslation || null),
          (this._escapeParameterHtml = t.escapeParameterHtml || !1),
          "__VUE_I18N_BRIDGE__" in t &&
            (this.__VUE_I18N_BRIDGE__ = t.__VUE_I18N_BRIDGE__),
          (this.getChoiceIndex = function (t, n) {
            var i,
              r,
              o = Object.getPrototypeOf(e);
            return o && o.getChoiceIndex
              ? o.getChoiceIndex.call(e, t, n)
              : e.locale in e.pluralizationRules
              ? e.pluralizationRules[e.locale].apply(e, [t, n])
              : ((i = t),
                (r = n),
                (i = Math.abs(i)),
                2 === r ? (i ? (i > 1 ? 1 : 0) : 1) : i ? Math.min(i, 2) : 0);
          }),
          (this._exist = function (t, n) {
            return !(!t || !n || (h(e._path.getPathValue(t, n)) && !t[n]));
          }),
          ("warn" !== this._warnHtmlInMessage &&
            "error" !== this._warnHtmlInMessage) ||
            Object.keys(r).forEach(function (t) {
              e._checkLocaleMessage(t, e._warnHtmlInMessage, r[t]);
            }),
          this._initVM({
            locale: n,
            fallbackLocale: i,
            messages: r,
            dateTimeFormats: o,
            numberFormats: a,
          });
      },
      Z = {
        vm: { configurable: !0 },
        messages: { configurable: !0 },
        dateTimeFormats: { configurable: !0 },
        numberFormats: { configurable: !0 },
        availableLocales: { configurable: !0 },
        locale: { configurable: !0 },
        fallbackLocale: { configurable: !0 },
        formatFallbackMessages: { configurable: !0 },
        missing: { configurable: !0 },
        formatter: { configurable: !0 },
        silentTranslationWarn: { configurable: !0 },
        silentFallbackWarn: { configurable: !0 },
        preserveDirectiveContent: { configurable: !0 },
        warnHtmlInMessage: { configurable: !0 },
        postTranslation: { configurable: !0 },
        sync: { configurable: !0 },
      };
    (K.prototype._checkLocaleMessage = function (t, e, n) {
      var i = function (t, e, n, r) {
        p(n)
          ? Object.keys(n).forEach(function (o) {
              var a = n[o];
              p(a)
                ? (r.push(o), r.push("."), i(t, e, a, r), r.pop(), r.pop())
                : (r.push(o), i(t, e, a, r), r.pop());
            })
          : s(n)
          ? n.forEach(function (n, o) {
              p(n)
                ? (r.push("[" + o + "]"),
                  r.push("."),
                  i(t, e, n, r),
                  r.pop(),
                  r.pop())
                : (r.push("[" + o + "]"), i(t, e, n, r), r.pop());
            })
          : d(n) && H.test(n) && r.join("");
      };
      i(e, t, n, []);
    }),
      (K.prototype._initVM = function (t) {
        var e = C.config.silent;
        (C.config.silent = !0),
          (this._vm = new C({ data: t, __VUE18N__INSTANCE__: !0 })),
          (C.config.silent = e);
      }),
      (K.prototype.destroyVM = function () {
        this._vm.$destroy();
      }),
      (K.prototype.subscribeDataChanging = function (t) {
        this._dataListeners.add(t);
      }),
      (K.prototype.unsubscribeDataChanging = function (t) {
        !(function (t, e) {
          t.delete(e);
        })(this._dataListeners, t);
      }),
      (K.prototype.watchI18nData = function () {
        var t = this;
        return this._vm.$watch(
          "$data",
          function () {
            for (
              var e,
                n,
                i =
                  ((e = t._dataListeners),
                  (n = []),
                  e.forEach(function (t) {
                    return n.push(t);
                  }),
                  n),
                r = i.length;
              r--;

            )
              C.nextTick(function () {
                i[r] && i[r].$forceUpdate();
              });
          },
          { deep: !0 }
        );
      }),
      (K.prototype.watchLocale = function (t) {
        if (t) {
          if (!this.__VUE_I18N_BRIDGE__) return null;
          var e = this,
            n = this._vm;
          return this.vm.$watch(
            "locale",
            function (i) {
              n.$set(n, "locale", i),
                e.__VUE_I18N_BRIDGE__ && t && (t.locale.value = i),
                n.$forceUpdate();
            },
            { immediate: !0 }
          );
        }
        if (!this._sync || !this._root) return null;
        var i = this._vm;
        return this._root.$i18n.vm.$watch(
          "locale",
          function (t) {
            i.$set(i, "locale", t), i.$forceUpdate();
          },
          { immediate: !0 }
        );
      }),
      (K.prototype.onComponentInstanceCreated = function (t) {
        this._componentInstanceCreatedListener &&
          this._componentInstanceCreatedListener(t, this);
      }),
      (Z.vm.get = function () {
        return this._vm;
      }),
      (Z.messages.get = function () {
        return m(this._getMessages());
      }),
      (Z.dateTimeFormats.get = function () {
        return m(this._getDateTimeFormats());
      }),
      (Z.numberFormats.get = function () {
        return m(this._getNumberFormats());
      }),
      (Z.availableLocales.get = function () {
        return Object.keys(this.messages).sort();
      }),
      (Z.locale.get = function () {
        return this._vm.locale;
      }),
      (Z.locale.set = function (t) {
        this._vm.$set(this._vm, "locale", t);
      }),
      (Z.fallbackLocale.get = function () {
        return this._vm.fallbackLocale;
      }),
      (Z.fallbackLocale.set = function (t) {
        (this._localeChainCache = {}),
          this._vm.$set(this._vm, "fallbackLocale", t);
      }),
      (Z.formatFallbackMessages.get = function () {
        return this._formatFallbackMessages;
      }),
      (Z.formatFallbackMessages.set = function (t) {
        this._formatFallbackMessages = t;
      }),
      (Z.missing.get = function () {
        return this._missing;
      }),
      (Z.missing.set = function (t) {
        this._missing = t;
      }),
      (Z.formatter.get = function () {
        return this._formatter;
      }),
      (Z.formatter.set = function (t) {
        this._formatter = t;
      }),
      (Z.silentTranslationWarn.get = function () {
        return this._silentTranslationWarn;
      }),
      (Z.silentTranslationWarn.set = function (t) {
        this._silentTranslationWarn = t;
      }),
      (Z.silentFallbackWarn.get = function () {
        return this._silentFallbackWarn;
      }),
      (Z.silentFallbackWarn.set = function (t) {
        this._silentFallbackWarn = t;
      }),
      (Z.preserveDirectiveContent.get = function () {
        return this._preserveDirectiveContent;
      }),
      (Z.preserveDirectiveContent.set = function (t) {
        this._preserveDirectiveContent = t;
      }),
      (Z.warnHtmlInMessage.get = function () {
        return this._warnHtmlInMessage;
      }),
      (Z.warnHtmlInMessage.set = function (t) {
        var e = this,
          n = this._warnHtmlInMessage;
        if (
          ((this._warnHtmlInMessage = t),
          n !== t && ("warn" === t || "error" === t))
        ) {
          var i = this._getMessages();
          Object.keys(i).forEach(function (t) {
            e._checkLocaleMessage(t, e._warnHtmlInMessage, i[t]);
          });
        }
      }),
      (Z.postTranslation.get = function () {
        return this._postTranslation;
      }),
      (Z.postTranslation.set = function (t) {
        this._postTranslation = t;
      }),
      (Z.sync.get = function () {
        return this._sync;
      }),
      (Z.sync.set = function (t) {
        this._sync = t;
      }),
      (K.prototype._getMessages = function () {
        return this._vm.messages;
      }),
      (K.prototype._getDateTimeFormats = function () {
        return this._vm.dateTimeFormats;
      }),
      (K.prototype._getNumberFormats = function () {
        return this._vm.numberFormats;
      }),
      (K.prototype._warnDefault = function (t, e, n, i, r, o) {
        if (!h(n)) return n;
        if (this._missing) {
          var a = this._missing.apply(null, [t, e, i, r]);
          if (d(a)) return a;
        }
        if (this._formatFallbackMessages) {
          var s = b.apply(void 0, r);
          return this._render(e, o, s.params, e);
        }
        return e;
      }),
      (K.prototype._isFallbackRoot = function (t) {
        return (
          (this._fallbackRootWithEmptyString ? !t : h(t)) &&
          !h(this._root) &&
          this._fallbackRoot
        );
      }),
      (K.prototype._isSilentFallbackWarn = function (t) {
        return this._silentFallbackWarn instanceof RegExp
          ? this._silentFallbackWarn.test(t)
          : this._silentFallbackWarn;
      }),
      (K.prototype._isSilentFallback = function (t, e) {
        return (
          this._isSilentFallbackWarn(e) &&
          (this._isFallbackRoot() || t !== this.fallbackLocale)
        );
      }),
      (K.prototype._isSilentTranslationWarn = function (t) {
        return this._silentTranslationWarn instanceof RegExp
          ? this._silentTranslationWarn.test(t)
          : this._silentTranslationWarn;
      }),
      (K.prototype._interpolate = function (t, e, n, i, r, o, a) {
        if (!e) return null;
        var l,
          c = this._path.getPathValue(e, n);
        if (s(c) || p(c)) return c;
        if (h(c)) {
          if (!p(e)) return null;
          if (!d((l = e[n])) && !f(l)) return null;
        } else {
          if (!d(c) && !f(c)) return null;
          l = c;
        }
        return (
          d(l) &&
            (l.indexOf("@:") >= 0 || l.indexOf("@.") >= 0) &&
            (l = this._link(t, e, l, i, "raw", o, a)),
          this._render(l, r, o, n)
        );
      }),
      (K.prototype._link = function (t, e, n, i, r, o, a) {
        var l = n,
          c = l.match(Y);
        for (var d in c)
          if (c.hasOwnProperty(d)) {
            var u = c[d],
              p = u.match(U),
              h = p[0],
              f = p[1],
              b = u.replace(h, "").replace(X, "");
            if (g(a, b)) return l;
            a.push(b);
            var m = this._interpolate(
              t,
              e,
              b,
              i,
              "raw" === r ? "string" : r,
              "raw" === r ? void 0 : o,
              a
            );
            if (this._isFallbackRoot(m)) {
              if (!this._root) throw Error("unexpected error");
              var v = this._root.$i18n;
              m = v._translate(
                v._getMessages(),
                v.locale,
                v.fallbackLocale,
                b,
                i,
                r,
                o
              );
            }
            (m = this._warnDefault(t, b, m, i, s(o) ? o : [o], r)),
              this._modifiers.hasOwnProperty(f)
                ? (m = this._modifiers[f](m))
                : V.hasOwnProperty(f) && (m = V[f](m)),
              a.pop(),
              (l = m ? l.replace(u, m) : l);
          }
        return l;
      }),
      (K.prototype._createMessageContext = function (t, e, n, i) {
        var r = this,
          o = s(t) ? t : [],
          a = l(t) ? t : {},
          c = this._getMessages(),
          d = this.locale;
        return {
          list: function (t) {
            return o[t];
          },
          named: function (t) {
            return a[t];
          },
          values: t,
          formatter: e,
          path: n,
          messages: c,
          locale: d,
          linked: function (t) {
            return r._interpolate(d, c[d] || {}, t, null, i, void 0, [t]);
          },
        };
      }),
      (K.prototype._render = function (t, e, n, i) {
        if (f(t))
          return t(this._createMessageContext(n, this._formatter || G, i, e));
        var r = this._formatter.interpolate(t, n, i);
        return (
          r || (r = G.interpolate(t, n, i)),
          "string" !== e || d(r) ? r : r.join("")
        );
      }),
      (K.prototype._appendItemToChain = function (t, e, n) {
        var i = !1;
        return (
          g(t, e) ||
            ((i = !0),
            e &&
              ((i = "!" !== e[e.length - 1]),
              (e = e.replace(/!/g, "")),
              t.push(e),
              n && n[e] && (i = n[e]))),
          i
        );
      }),
      (K.prototype._appendLocaleToChain = function (t, e, n) {
        var i,
          r = e.split("-");
        do {
          var o = r.join("-");
          (i = this._appendItemToChain(t, o, n)), r.splice(-1, 1);
        } while (r.length && !0 === i);
        return i;
      }),
      (K.prototype._appendBlockToChain = function (t, e, n) {
        for (var i = !0, r = 0; r < e.length && c(i); r++) {
          var o = e[r];
          d(o) && (i = this._appendLocaleToChain(t, o, n));
        }
        return i;
      }),
      (K.prototype._getLocaleChain = function (t, e) {
        if ("" === t) return [];
        this._localeChainCache || (this._localeChainCache = {});
        var n = this._localeChainCache[t];
        if (!n) {
          e || (e = this.fallbackLocale), (n = []);
          for (var i, r = [t]; s(r); ) r = this._appendBlockToChain(n, r, e);
          (r = d((i = s(e) ? e : l(e) ? (e.default ? e.default : null) : e))
            ? [i]
            : i) && this._appendBlockToChain(n, r, null),
            (this._localeChainCache[t] = n);
        }
        return n;
      }),
      (K.prototype._translate = function (t, e, n, i, r, o, a) {
        for (var s, l = this._getLocaleChain(e, n), c = 0; c < l.length; c++) {
          var d = l[c];
          if (!h((s = this._interpolate(d, t[d], i, r, o, a, [i])))) return s;
        }
        return null;
      }),
      (K.prototype._t = function (t, e, n, i) {
        for (var r, o = [], a = arguments.length - 4; a-- > 0; )
          o[a] = arguments[a + 4];
        if (!t) return "";
        var s = b.apply(void 0, o);
        this._escapeParameterHtml && (s.params = O(s.params));
        var l = s.locale || e,
          c = this._translate(
            n,
            l,
            this.fallbackLocale,
            t,
            i,
            "string",
            s.params
          );
        if (this._isFallbackRoot(c)) {
          if (!this._root) throw Error("unexpected error");
          return (r = this._root).$t.apply(r, [t].concat(o));
        }
        return (
          (c = this._warnDefault(l, t, c, i, o, "string")),
          this._postTranslation &&
            null != c &&
            (c = this._postTranslation(c, t)),
          c
        );
      }),
      (K.prototype.t = function (t) {
        for (var e, n = [], i = arguments.length - 1; i-- > 0; )
          n[i] = arguments[i + 1];
        return (e = this)._t.apply(
          e,
          [t, this.locale, this._getMessages(), null].concat(n)
        );
      }),
      (K.prototype._i = function (t, e, n, i, r) {
        var o = this._translate(n, e, this.fallbackLocale, t, i, "raw", r);
        if (this._isFallbackRoot(o)) {
          if (!this._root) throw Error("unexpected error");
          return this._root.$i18n.i(t, e, r);
        }
        return this._warnDefault(e, t, o, i, [r], "raw");
      }),
      (K.prototype.i = function (t, e, n) {
        return t
          ? (d(e) || (e = this.locale),
            this._i(t, e, this._getMessages(), null, n))
          : "";
      }),
      (K.prototype._tc = function (t, e, n, i, r) {
        for (var o, a = [], s = arguments.length - 5; s-- > 0; )
          a[s] = arguments[s + 5];
        if (!t) return "";
        void 0 === r && (r = 1);
        var l = { count: r, n: r },
          c = b.apply(void 0, a);
        return (
          (c.params = Object.assign(l, c.params)),
          (a = null === c.locale ? [c.params] : [c.locale, c.params]),
          this.fetchChoice((o = this)._t.apply(o, [t, e, n, i].concat(a)), r)
        );
      }),
      (K.prototype.fetchChoice = function (t, e) {
        if (!t || !d(t)) return null;
        var n = t.split("|");
        return n[(e = this.getChoiceIndex(e, n.length))] ? n[e].trim() : t;
      }),
      (K.prototype.tc = function (t, e) {
        for (var n, i = [], r = arguments.length - 2; r-- > 0; )
          i[r] = arguments[r + 2];
        return (n = this)._tc.apply(
          n,
          [t, this.locale, this._getMessages(), null, e].concat(i)
        );
      }),
      (K.prototype._te = function (t, e, n) {
        for (var i = [], r = arguments.length - 3; r-- > 0; )
          i[r] = arguments[r + 3];
        var o = b.apply(void 0, i).locale || e;
        return this._exist(n[o], t);
      }),
      (K.prototype.te = function (t, e) {
        return this._te(t, this.locale, this._getMessages(), e);
      }),
      (K.prototype.getLocaleMessage = function (t) {
        return m(this._vm.messages[t] || {});
      }),
      (K.prototype.setLocaleMessage = function (t, e) {
        ("warn" !== this._warnHtmlInMessage &&
          "error" !== this._warnHtmlInMessage) ||
          this._checkLocaleMessage(t, this._warnHtmlInMessage, e),
          this._vm.$set(this._vm.messages, t, e);
      }),
      (K.prototype.mergeLocaleMessage = function (t, e) {
        ("warn" !== this._warnHtmlInMessage &&
          "error" !== this._warnHtmlInMessage) ||
          this._checkLocaleMessage(t, this._warnHtmlInMessage, e),
          this._vm.$set(
            this._vm.messages,
            t,
            y(
              void 0 !== this._vm.messages[t] &&
                Object.keys(this._vm.messages[t]).length
                ? Object.assign({}, this._vm.messages[t])
                : {},
              e
            )
          );
      }),
      (K.prototype.getDateTimeFormat = function (t) {
        return m(this._vm.dateTimeFormats[t] || {});
      }),
      (K.prototype.setDateTimeFormat = function (t, e) {
        this._vm.$set(this._vm.dateTimeFormats, t, e),
          this._clearDateTimeFormat(t, e);
      }),
      (K.prototype.mergeDateTimeFormat = function (t, e) {
        this._vm.$set(
          this._vm.dateTimeFormats,
          t,
          y(this._vm.dateTimeFormats[t] || {}, e)
        ),
          this._clearDateTimeFormat(t, e);
      }),
      (K.prototype._clearDateTimeFormat = function (t, e) {
        for (var n in e) {
          var i = t + "__" + n;
          this._dateTimeFormatters.hasOwnProperty(i) &&
            delete this._dateTimeFormatters[i];
        }
      }),
      (K.prototype._localizeDateTime = function (t, e, n, i, r, o) {
        for (
          var a = e, s = i[a], l = this._getLocaleChain(e, n), c = 0;
          c < l.length;
          c++
        ) {
          var d = l[c];
          if (((a = d), !h((s = i[d])) && !h(s[r]))) break;
        }
        if (h(s) || h(s[r])) return null;
        var u,
          p = s[r];
        if (o) u = new Intl.DateTimeFormat(a, Object.assign({}, p, o));
        else {
          var f = a + "__" + r;
          (u = this._dateTimeFormatters[f]) ||
            (u = this._dateTimeFormatters[f] = new Intl.DateTimeFormat(a, p));
        }
        return u.format(t);
      }),
      (K.prototype._d = function (t, e, n, i) {
        if (!n)
          return (
            i ? new Intl.DateTimeFormat(e, i) : new Intl.DateTimeFormat(e)
          ).format(t);
        var r = this._localizeDateTime(
          t,
          e,
          this.fallbackLocale,
          this._getDateTimeFormats(),
          n,
          i
        );
        if (this._isFallbackRoot(r)) {
          if (!this._root) throw Error("unexpected error");
          return this._root.$i18n.d(t, n, e);
        }
        return r || "";
      }),
      (K.prototype.d = function (t) {
        for (var e = [], n = arguments.length - 1; n-- > 0; )
          e[n] = arguments[n + 1];
        var i = this.locale,
          r = null,
          o = null;
        return (
          1 === e.length
            ? (d(e[0])
                ? (r = e[0])
                : l(e[0]) &&
                  (e[0].locale && (i = e[0].locale),
                  e[0].key && (r = e[0].key)),
              (o = Object.keys(e[0]).reduce(function (t, n) {
                var i;
                return g(a, n)
                  ? Object.assign({}, t, (((i = {})[n] = e[0][n]), i))
                  : t;
              }, null)))
            : 2 === e.length && (d(e[0]) && (r = e[0]), d(e[1]) && (i = e[1])),
          this._d(t, i, r, o)
        );
      }),
      (K.prototype.getNumberFormat = function (t) {
        return m(this._vm.numberFormats[t] || {});
      }),
      (K.prototype.setNumberFormat = function (t, e) {
        this._vm.$set(this._vm.numberFormats, t, e),
          this._clearNumberFormat(t, e);
      }),
      (K.prototype.mergeNumberFormat = function (t, e) {
        this._vm.$set(
          this._vm.numberFormats,
          t,
          y(this._vm.numberFormats[t] || {}, e)
        ),
          this._clearNumberFormat(t, e);
      }),
      (K.prototype._clearNumberFormat = function (t, e) {
        for (var n in e) {
          var i = t + "__" + n;
          this._numberFormatters.hasOwnProperty(i) &&
            delete this._numberFormatters[i];
        }
      }),
      (K.prototype._getNumberFormatter = function (t, e, n, i, r, o) {
        for (
          var a = e, s = i[a], l = this._getLocaleChain(e, n), c = 0;
          c < l.length;
          c++
        ) {
          var d = l[c];
          if (((a = d), !h((s = i[d])) && !h(s[r]))) break;
        }
        if (h(s) || h(s[r])) return null;
        var u,
          p = s[r];
        if (o) u = new Intl.NumberFormat(a, Object.assign({}, p, o));
        else {
          var f = a + "__" + r;
          (u = this._numberFormatters[f]) ||
            (u = this._numberFormatters[f] = new Intl.NumberFormat(a, p));
        }
        return u;
      }),
      (K.prototype._n = function (t, e, n, i) {
        if (!K.availabilities.numberFormat) return "";
        if (!n)
          return (
            i ? new Intl.NumberFormat(e, i) : new Intl.NumberFormat(e)
          ).format(t);
        var r = this._getNumberFormatter(
            t,
            e,
            this.fallbackLocale,
            this._getNumberFormats(),
            n,
            i
          ),
          o = r && r.format(t);
        if (this._isFallbackRoot(o)) {
          if (!this._root) throw Error("unexpected error");
          return this._root.$i18n.n(
            t,
            Object.assign({}, { key: n, locale: e }, i)
          );
        }
        return o || "";
      }),
      (K.prototype.n = function (t) {
        for (var e = [], n = arguments.length - 1; n-- > 0; )
          e[n] = arguments[n + 1];
        var i = this.locale,
          r = null,
          a = null;
        return (
          1 === e.length
            ? d(e[0])
              ? (r = e[0])
              : l(e[0]) &&
                (e[0].locale && (i = e[0].locale),
                e[0].key && (r = e[0].key),
                (a = Object.keys(e[0]).reduce(function (t, n) {
                  var i;
                  return g(o, n)
                    ? Object.assign({}, t, (((i = {})[n] = e[0][n]), i))
                    : t;
                }, null)))
            : 2 === e.length && (d(e[0]) && (r = e[0]), d(e[1]) && (i = e[1])),
          this._n(t, i, r, a)
        );
      }),
      (K.prototype._ntp = function (t, e, n, i) {
        if (!K.availabilities.numberFormat) return [];
        if (!n)
          return (
            i ? new Intl.NumberFormat(e, i) : new Intl.NumberFormat(e)
          ).formatToParts(t);
        var r = this._getNumberFormatter(
            t,
            e,
            this.fallbackLocale,
            this._getNumberFormats(),
            n,
            i
          ),
          o = r && r.formatToParts(t);
        if (this._isFallbackRoot(o)) {
          if (!this._root) throw Error("unexpected error");
          return this._root.$i18n._ntp(t, e, n, i);
        }
        return o || [];
      }),
      Object.defineProperties(K.prototype, Z),
      Object.defineProperty(K, "availabilities", {
        get: function () {
          if (!$) {
            var t = "undefined" != typeof Intl;
            $ = {
              dateTimeFormat: t && void 0 !== Intl.DateTimeFormat,
              numberFormat: t && void 0 !== Intl.NumberFormat,
            };
          }
          return $;
        },
      }),
      (K.install = j),
      (K.version = "8.28.2");
    var J,
      Q = K;
    r.a.use(Q),
      void 0 !== document.getElementsByTagName("meta").pluginBASEURL &&
        ((pluginBASEURL = window.pluginBASEURL =
          document.getElementsByTagName("meta").pluginBASEURL.content),
        (pluginMediaPath = window.pluginMediaPath =
          document.getElementsByTagName("meta").pluginMediaPath.content)),
      (e.a = new Q({
        locale: "temp",
        fallbackLocale: "temp",
        messages: ((J = {}), (J.temp = window.__kivicarelang), J),
        silentTranslationWarn: !0,
      }));
  },
  ,
  function (t, e, n) {
    "use strict";
    var i = n(9),
      r = n(8),
      o = n(24),
      a = {
        data: function () {
          return {
            staticDataTypes: [],
            staticData: {},
            loading: !1,
            submitted: !1,
            cardTitle: "Add static data",
            buttonText: "",
          };
        },
        props: { staticId: [String, Number] },
        mounted: function () {
          (this.buttonText = this.formTranslation.common.save),
            (this.staticData = this.defaultStaticData()),
            this.init();
        },
        validations: {
          staticData: {
            type: { required: i.required },
            label: { required: i.required },
            status: { required: i.required },
          },
        },
        methods: {
          init: function () {
            var t = this;
            (this.staticDataTypes = [
              {
                id: "specialization",
                type: this.formTranslation.doctor.dt_lbl_specialties,
              },
              {
                id: "service_type",
                type: this.formTranslation.widgets.service_type,
              },
              {
                id: "prescription_medicine",
                type: this.formTranslation.patient_encounter.prescription,
              },
              {
                id: "clinical_problems",
                type: this.formTranslation.encounter_dashboard.problems,
              },
              {
                id: "clinical_observations",
                type: this.formTranslation.encounter_dashboard.observation,
              },
            ]),
              void 0 !== this.staticId &&
                -1 != this.staticId &&
                ((this.cardTitle = this.formTranslation.common.edit_staic_data),
                (this.buttonText = this.formTranslation.common.save),
                Object(r.a)("static_data_edit", { id: this.staticId })
                  .then(function (e) {
                    void 0 !== e.data.status &&
                      !0 === e.data.status &&
                      (t.staticData = e.data.data);
                  })
                  .catch(function (e) {
                    displayErrorMessage(
                      t.formTranslation.widgets.record_not_found
                    );
                  }));
          },
          defaultStaticData: function () {
            return {
              type: "",
              label: "",
              status: { id: 1, label: this.formTranslation.common.active },
            };
          },
          handleSubmit: function () {
            var t = this;
            (this.loading = !0),
              (this.submitted = !0),
              this.$v.$touch(),
              this.$v.$invalid
                ? (this.loading = !1)
                : Object(o.n)("staticDataForm") &&
                  Object(r.b)("static_data_save", this.staticData)
                    .then(function (e) {
                      (t.loading = !1),
                        void 0 !== e.data.status && !0 === e.data.status
                          ? (displayMessage(e.data.message),
                            t.$emit("closeForm"),
                            t.getData())
                          : displayErrorMessage(e.data.message);
                    })
                    .catch(function (e) {
                      (t.loading = !1),
                        displayErrorMessage(
                          t.formTranslation.common.internal_server_error
                        );
                    });
          },
          getData: function () {
            this.$emit("getStaticData");
          },
          closeForm: function () {
            this.$emit("closeForm");
          },
          changeStatus: function (t, e) {},
        },
        watch: {
          staticId: function (t, e) {
            var n = this;
            void 0 === t ||
              (-1 === t && "-1" === t) ||
              ((this.cardTitle = this.formTranslation.common.edit_staic_data),
              (this.buttonText = this.formTranslation.common.save),
              Object(r.a)("static_data_edit", { id: t })
                .then(function (t) {
                  void 0 !== t.data.status &&
                    !0 === t.data.status &&
                    (n.staticData = t.data.data);
                })
                .catch(function (t) {
                  displayErrorMessage(
                    n.formTranslation.widgets.record_not_found
                  );
                }));
          },
        },
        computed: {},
      },
      s = n(15),
      l = Object(s.a)(
        a,
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
                    attrs: { id: "staticDataForm", novalidate: !0 },
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
                    e("div", { staticClass: "card-body" }, [
                      e("div", { staticClass: "row" }, [
                        e("div", { staticClass: "col-md-4" }, [
                          e("div", { staticClass: "form-group" }, [
                            e(
                              "label",
                              {
                                staticClass: "form-control-label",
                                attrs: { for: "label" },
                              },
                              [
                                t._v(
                                  t._s(t.formTranslation.static_data.label) +
                                    " "
                                ),
                                e("span", { staticClass: "text-danger" }, [
                                  t._v("*"),
                                ]),
                              ]
                            ),
                            t._v(" "),
                            e("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: t.staticData.label,
                                  expression: "staticData.label",
                                },
                              ],
                              staticClass: "form-control",
                              class: {
                                " is-invalid":
                                  t.submitted && t.$v.staticData.label.$error,
                              },
                              attrs: {
                                id: "label",
                                placeholder:
                                  this.formTranslation.static_data
                                    .data_label_plh,
                                required: "required",
                                name: "label",
                                type: "text",
                              },
                              domProps: { value: t.staticData.label },
                              on: {
                                input: function (e) {
                                  e.target.composing ||
                                    t.$set(
                                      t.staticData,
                                      "label",
                                      e.target.value
                                    );
                                },
                              },
                            }),
                            t._v(" "),
                            t.submitted && !t.$v.staticData.label.required
                              ? e("div", { staticClass: "invalid-feedback" }, [
                                  t._v(
                                    t._s(
                                      t.formTranslation.custom_field
                                        .label_name_required
                                    )
                                  ),
                                ])
                              : t._e(),
                          ]),
                        ]),
                        t._v(" "),
                        e("div", { staticClass: "col-md-4" }, [
                          e("div", { staticClass: "from-group" }, [
                            e(
                              "label",
                              {
                                staticClass: "form-control-label",
                                attrs: { for: "type" },
                              },
                              [
                                t._v(t._s(t.formTranslation.doctor.type) + " "),
                                e("span", { staticClass: "text-danger" }, [
                                  t._v("*"),
                                ]),
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
                                    id: "type",
                                    "tag-placeholder":
                                      this.formTranslation.static_data
                                        .tag_select_type_plh,
                                    placeholder:
                                      this.formTranslation.static_data
                                        .select_type_plh,
                                    label: "type",
                                    "track-by": "id",
                                    options: t.staticDataTypes,
                                  },
                                  scopedSlots: t._u([
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
                                  ]),
                                  model: {
                                    value: t.staticData.type,
                                    callback: function (e) {
                                      t.$set(t.staticData, "type", e);
                                    },
                                    expression: "staticData.type",
                                  },
                                }),
                                t._v(" "),
                                e(
                                  "span",
                                  {
                                    staticClass: "select_clear_btn",
                                    on: {
                                      click: function (e) {
                                        t.staticData.type = "";
                                      },
                                    },
                                  },
                                  [t._v("×")]
                                ),
                              ],
                              1
                            ),
                            t._v(" "),
                            t.submitted && !t.$v.staticData.type.required
                              ? e("div", { staticClass: "invalid-feedback" }, [
                                  t._v(
                                    t._s(t.formTranslation.doctor.type_required)
                                  ),
                                ])
                              : t._e(),
                          ]),
                        ]),
                        t._v(" "),
                        e("div", { staticClass: "col-md-4" }, [
                          e("div", { staticClass: "from-group" }, [
                            e(
                              "label",
                              {
                                staticClass: "form-control-label",
                                attrs: { for: "status" },
                              },
                              [
                                t._v(
                                  t._s(t.formTranslation.common.status) + " "
                                ),
                                e("span", { staticClass: "text-danger" }, [
                                  t._v("*"),
                                ]),
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
                                    id: "type",
                                    "tag-placeholder":
                                      t.formTranslation.static_data
                                        .tag_select_status_plh,
                                    placeholder:
                                      t.formTranslation.static_data
                                        .select_status_plh,
                                    label: "label",
                                    "track-by": "id",
                                    "allow-empty": !1,
                                    options: [
                                      {
                                        id: 1,
                                        label: t.formTranslation.common.active,
                                      },
                                      {
                                        id: 0,
                                        label:
                                          t.formTranslation.common.inactive,
                                      },
                                    ],
                                  },
                                  on: { input: t.changeStatus },
                                  scopedSlots: t._u([
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
                                  ]),
                                  model: {
                                    value: t.staticData.status,
                                    callback: function (e) {
                                      t.$set(t.staticData, "status", e);
                                    },
                                    expression: "staticData.status",
                                  },
                                }),
                                t._v(" "),
                                e(
                                  "span",
                                  {
                                    staticClass: "select_clear_btn",
                                    on: {
                                      click: function (e) {
                                        t.staticData.status = "";
                                      },
                                    },
                                  },
                                  [t._v("×")]
                                ),
                              ],
                              1
                            ),
                            t._v(" "),
                            t.submitted && !t.$v.staticData.status.required
                              ? e("div", { staticClass: "invalid-feedback" }, [
                                  t._v(
                                    t._s(
                                      t.formTranslation.appointments
                                        .status_required
                                    )
                                  ),
                                ])
                              : t._e(),
                          ]),
                        ]),
                      ]),
                      t._v(" "),
                      e("div", { staticClass: "row" }, [
                        e("div", { staticClass: "col-md-12 pr-2 pt-4" }, [
                          e(
                            "div",
                            { staticClass: "d-flex justify-content-end" },
                            [
                              t.loading
                                ? e(
                                    "button",
                                    {
                                      staticClass: "btn btn-primary",
                                      attrs: { type: "submit", disabled: "" },
                                    },
                                    [
                                      e("i", {
                                        staticClass: "fa fa-sync fa-spin",
                                      }),
                                      t._v(
                                        "  " +
                                          t._s(
                                            t.formTranslation.common.loading
                                          ) +
                                          "\n                            "
                                      ),
                                    ]
                                  )
                                : e(
                                    "button",
                                    {
                                      staticClass: "btn btn-primary rtl-ml-2",
                                      attrs: { type: "submit" },
                                    },
                                    [
                                      e("i", { staticClass: "fa fa-save" }),
                                      t._v(
                                        " " +
                                          t._s(t.buttonText) +
                                          "\n                            "
                                      ),
                                    ]
                                  ),
                              t._v(" "),
                              e(
                                "button",
                                {
                                  staticClass: "btn btn-outline-primary",
                                  attrs: { type: "button" },
                                  on: { click: t.closeForm },
                                },
                                [
                                  t._v(
                                    " " + t._s(t.formTranslation.common.cancel)
                                  ),
                                ]
                              ),
                            ]
                          ),
                        ]),
                      ]),
                    ]),
                  ]
                ),
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
      );
    e.a = l.exports;
  },
  function (t, e, n) {
    "use strict";
    var i = n(9),
      r = n(8),
      o = n(24);
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
    var s = {
        data: function () {
          return {
            cardTitle: "Add encounter",
            patient_id: 0,
            encounterData: {},
            specialization: [],
            clinics: [],
            doctors: [],
            loading: !1,
            submitted: !1,
            buttonText: '<i class="fa fa-save"></i> Save',
            patients: [],
            encounterTemplates: [],
            clinicMultiselectLoader: !0,
            doctorMultiselectLoader: !0,
            patientMultiselectLoader: !0,
            encounterTemplateLoader: !0,
          };
        },
        props: ["encounterId", "patientField", "clinicField"],
        validations: function () {
          return {
            encounterData: {
              date: { required: i.required },
              patient_id: { required: i.required },
              doctor_id: {
                required: Object(i.requiredIf)(function () {
                  return !this.isDoctorSelectionEnabled;
                }),
              },
              clinic_id: {
                id: {
                  required: Object(i.requiredIf)(function () {
                    return (
                      1 == this.userData.addOns.kiviPro &&
                      ("administrator" == this.getUserRole() ||
                        "doctor" == this.getUserRole()) &&
                      !1 !== this.clinicField
                    );
                  }),
                },
              },
            },
          };
        },
        mounted: function () {
          var t = this;
          (this.encounterData = this.defaultEncounterData()),
            "doctor" !== this.getUserRole() && this.getDoctorsData(),
            this.init(),
            setTimeout(function () {
              t.activeClinicId = t.userData.default_clinic_id;
            }, 2e3);
        },
        methods: {
          init: function () {
            var t = this;
            void 0 !== this.encounterId &&
              -1 != this.encounterId &&
              ((this.cardTitle = this.formTranslation.common.edit_encounter),
              (this.buttonText =
                '<i class="fa fa-save"></i> ' +
                this.formTranslation.common.save),
              Object(r.a)("patient_encounter_edit", { id: this.encounterId })
                .then(function (e) {
                  void 0 !== e.data.status &&
                    !0 === e.data.status &&
                    ((t.encounterData = e.data.data),
                    (t.patient_id = t.encounterData.patient_id),
                    (t.encounterData.date = new Date(
                      t.encounterData.date + " 00:00"
                    )));
                })
                .catch(function (e) {
                  displayErrorMessage(
                    t.formTranslation.widgets.record_not_found
                  );
                })),
              "patient" !== this.getUserRole() && this.getClinicPatients(""),
              void 0 !== this.$route.params.patient_id &&
                (this.encounterData.patient_id = this.$route.params.patient_id);
          },
          getDoctorsData: function () {
            var t,
              e = this;
            (t =
              "object" == a(this.activeClinicId)
                ? this.activeClinicId.id
                : this.activeClinicId),
              (this.doctorMultiselectLoader = !0),
              Object(r.a)("get_static_data", {
                data_type: "clinic_doctors",
                clinic_id: t,
              })
                .then(function (t) {
                  (e.doctorMultiselectLoader = !1),
                    void 0 !== t.data.status &&
                      !0 === t.data.status &&
                      (e.doctors = t.data.data);
                })
                .catch(function (t) {
                  (e.doctorMultiselectLoader = !1),
                    displayErrorMessage(
                      e.formTranslation.common.internal_server_error
                    );
                });
          },
          handleSubmit: function () {
            var t = this,
              e = this.getUserRole();
            (this.loading = !0),
              (this.submitted = !0),
              this.$v.$touch(),
              this.$v.encounterData.$invalid
                ? (this.loading = !1)
                : ((this.encounterData.date = moment(
                    this.encounterData.date
                  ).format("YYYY-MM-DD")),
                  "doctor" === e &&
                    (this.encounterData.doctor_id = this.userId),
                  Object(o.n)("encounterDataForm") &&
                    Object(r.b)("patient_encounter_save", this.encounterData)
                      .then(function (e) {
                        (t.loading = !1),
                          (t.submitted = !0),
                          void 0 !== e.data.status && !0 === e.data.status
                            ? (displayMessage(e.data.message),
                              "patient_id" in t.$route.params &&
                                t.$router.push({ path: "/patient" }),
                              t.$router.push({
                                name: "patient-encounter.dashboard",
                                params: { encounter_id: e.data.data },
                              }))
                            : displayErrorMessage(e.data.message);
                      })
                      .catch(function (e) {
                        (t.loading = !1),
                          (t.submitted = !0),
                          displayErrorMessage(
                            t.formTranslation.common.internal_server_error
                          );
                      }));
          },
          defaultEncounterData: function () {
            return {
              date: new Date(),
              clinic_id: { id: "" },
              doctor_id: "",
              patient_id: "",
              encounter_template_name: "",
              appointment_id: {},
              description: "",
              added_by: "",
              status: 1,
            };
          },
          handleClinicUnselect: function () {
            (this.appointmentData.clinic_id = {}),
              (this.appointmentData.doctor_id = {}),
              (this.doctors = []);
          },
          clinicChange: function (t) {
            var e = this;
            (this.encounterData.doctor_id = ""),
              (this.encounterData.patient_id = ""),
              (this.doctorMultiselectLoader = !0),
              "doctor" !== this.getUserRole() &&
                Object(r.a)("get_static_data", {
                  data_type: "get_users_by_clinic",
                  clinic_id: t.id,
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
                  }),
              void 0 !== this.$route.params.patient_id
                ? (this.encounterData.patient_id =
                    this.$route.params.patient_id)
                : "patient" !== this.getUserRole() &&
                  this.getClinicPatients(t.id);
          },
          getClinicPatients: function (t) {
            var e = this;
            (this.patientMultiselectLoader = !0),
              Object(r.a)("get_static_data", {
                data_type: "users",
                user_type: this.patientRoleName,
                request_clinic_id: t,
              })
                .then(function (t) {
                  (e.patientMultiselectLoader = !1),
                    void 0 !== t.data.status &&
                      !0 === t.data.status &&
                      (e.patients = t.data.data);
                })
                .catch(function (t) {
                  (e.patientMultiselectLoader = !1),
                    displayErrorMessage("Internal server error");
                });
          },
          getClinicDoctors: function () {
            var t,
              e = this;
            (this.doctors = []),
              (t =
                "object" == a(this.encounterData)
                  ? this.encounterData.id
                  : this.encounterData),
              Object(r.a)("get_static_data", {
                data_type: "clinic_doctors",
                clinic_id: t,
              })
                .then(function (t) {
                  void 0 !== t.data.status && !0 === t.data.status
                    ? (e.doctors = t.data.data)
                    : displayErrorMessage(t.data.message);
                })
                .catch(function (t) {
                  displayErrorMessage(
                    e.formTranslation.common.internal_server_error
                  );
                });
          },
          getCloseForm: function () {
            this.$emit("closeEncounterForm");
          },
          getEncounter: function () {
            this.$emit("getPatientEncountersData");
          },
        },
        computed: {
          clinicID: function () {
            if (void 0 !== this.$store.state.userDataModule.clinic.id)
              return this.$store.state.userDataModule.clinic.id;
          },
          isDoctorSelectionEnabled: function () {
            return !("doctor" !== this.getUserRole());
          },
          userId: function () {
            return this.$store.state.userDataModule.user.ID;
          },
          userData: function () {
            return this.$store.state.userDataModule.user;
          },
          clinic: function () {
            return (
              (this.clinicMultiselectLoader = !1), this.$store.state.clinic
            );
          },
        },
        watch: {},
      },
      l = n(15),
      c = Object(l.a)(
        s,
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
                    attrs: { id: "encounterDataForm", novalidate: !0 },
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
                    e("div", { staticClass: "card-body" }, [
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
                                  attrs: { for: "receptionist_birthdate" },
                                },
                                [
                                  t._v(
                                    "\n                            " +
                                      t._s(
                                        t.formTranslation.patient_encounter
                                          .encounter_date
                                      ) +
                                      "\n                            "
                                  ),
                                  e("span", { staticClass: "text-danger" }, [
                                    t._v("*"),
                                  ]),
                                ]
                              ),
                              t._v(" "),
                              e("vc-date-picker", {
                                class: {
                                  " is-invalid":
                                    t.submitted &&
                                    t.$v.encounterData.date.$error,
                                },
                                attrs: {
                                  id: "receptionist_birthdate",
                                  "title-position": "left",
                                  popover: {
                                    placement: "bottom",
                                    visibility: "click",
                                  },
                                },
                                scopedSlots: t._u([
                                  {
                                    key: "default",
                                    fn: function (t) {
                                      var n = t.inputValue;
                                      return [
                                        e("input", {
                                          staticClass:
                                            "form-control date-picker",
                                          attrs: { readonly: "" },
                                          domProps: { value: n },
                                        }),
                                      ];
                                    },
                                  },
                                ]),
                                model: {
                                  value: t.encounterData.date,
                                  callback: function (e) {
                                    t.$set(t.encounterData, "date", e);
                                  },
                                  expression: "encounterData.date",
                                },
                              }),
                              t._v(" "),
                              t.submitted && !t.$v.encounterData.date.required
                                ? e(
                                    "div",
                                    { staticClass: "invalid-feedback" },
                                    [
                                      t._v(
                                        "\n                            " +
                                          t._s(
                                            t.formTranslation.patient_encounter
                                              .encounter_date_required
                                          ) +
                                          "\n                        "
                                      ),
                                    ]
                                  )
                                : t._e(),
                            ],
                            1
                          ),
                        ]),
                        t._v(" "),
                        1 != t.userData.addOns.kiviPro ||
                        ("administrator" != t.getUserRole() &&
                          "doctor" != t.getUserRole()) ||
                        !t.clinicField
                          ? t._e()
                          : e("div", { staticClass: "col-md-4" }, [
                              e(
                                "div",
                                { staticClass: "form-group" },
                                [
                                  e(
                                    "label",
                                    {
                                      staticClass: "form-control-label",
                                      attrs: { for: "doctor_id" },
                                    },
                                    [
                                      t._v(
                                        "\n                            " +
                                          t._s(
                                            t.formTranslation.clinic
                                              .select_clinic
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
                                    attrs: {
                                      "deselect-label": "",
                                      "select-label": "",
                                      "tag-placeholder":
                                        t.formTranslation.patient_encounter
                                          .tag_select_clinic_plh,
                                      id: "clinic_id",
                                      loading: t.clinicMultiselectLoader,
                                      disabled: t.clinicMultiselectLoader,
                                      placeholder:
                                        t.formTranslation.patient_encounter
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
                                      value: t.encounterData.clinic_id,
                                      callback: function (e) {
                                        t.$set(t.encounterData, "clinic_id", e);
                                      },
                                      expression: "encounterData.clinic_id",
                                    },
                                  }),
                                  t._v(" "),
                                  t.submitted &&
                                  !t.$v.encounterData.clinic_id.id.required
                                    ? e(
                                        "div",
                                        { staticClass: "invalid-feedback" },
                                        [
                                          t._v(
                                            t._s(
                                              t.formTranslation.common
                                                .clinic_is_required
                                            ) + "\n                      "
                                          ),
                                        ]
                                      )
                                    : t._e(),
                                ],
                                1
                              ),
                            ]),
                        t._v(" "),
                        "doctor" != t.getUserRole()
                          ? e("div", { staticClass: "col-md-4" }, [
                              e(
                                "div",
                                { staticClass: "form-group" },
                                [
                                  e(
                                    "label",
                                    {
                                      staticClass: "form-control-label",
                                      attrs: { for: "doctor_id" },
                                    },
                                    [
                                      t._v(
                                        "\n                            " +
                                          t._s(
                                            t.formTranslation.common.doctor
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
                                    attrs: {
                                      "deselect-label": "",
                                      "select-label": "",
                                      "tag-placeholder":
                                        t.formTranslation.patient_encounter
                                          .tag_select_doctor,
                                      id: "doctor_id",
                                      placeholder:
                                        t.formTranslation.patient_encounter
                                          .search_plh,
                                      loading: t.doctorMultiselectLoader,
                                      disabled: t.doctorMultiselectLoader,
                                      label: "label",
                                      "track-by": "id",
                                      options: t.doctors,
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
                                      value: t.encounterData.doctor_id,
                                      callback: function (e) {
                                        t.$set(t.encounterData, "doctor_id", e);
                                      },
                                      expression: "encounterData.doctor_id",
                                    },
                                  }),
                                  t._v(" "),
                                  t.submitted &&
                                  !t.$v.encounterData.doctor_id.required
                                    ? e(
                                        "div",
                                        { staticClass: "invalid-feedback" },
                                        [
                                          t._v(
                                            t._s(
                                              t.formTranslation.appointments
                                                .doc_required
                                            ) + "\n                        "
                                          ),
                                        ]
                                      )
                                    : t._e(),
                                ],
                                1
                              ),
                            ])
                          : t._e(),
                        t._v(" "),
                        t.patientField
                          ? e("div", { staticClass: "col-md-4" }, [
                              e(
                                "div",
                                { staticClass: "form-group" },
                                [
                                  e(
                                    "label",
                                    {
                                      staticClass: "form-control-label",
                                      attrs: { for: "form_patient_id" },
                                    },
                                    [
                                      t._v(
                                        "\n                        " +
                                          t._s(
                                            t.formTranslation.common.patient
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
                                    attrs: {
                                      "deselect-label": "",
                                      "select-label": "",
                                      "tag-placeholder":
                                        t.formTranslation.patient_encounter
                                          .tag_patient_type_plh,
                                      id: "patient_id",
                                      placeholder:
                                        t.formTranslation.patient_encounter
                                          .search_plh,
                                      label: "label",
                                      "track-by": "id",
                                      loading: t.patientMultiselectLoader,
                                      disabled: t.patientMultiselectLoader,
                                      options: t.patients,
                                    },
                                    scopedSlots: t._u(
                                      [
                                        {
                                          key: "noResult",
                                          fn: function () {
                                            return [
                                              t._v(
                                                "\n                          " +
                                                  t._s(
                                                    t.formTranslation.common
                                                      .no_result_found
                                                  ) +
                                                  "\n                      "
                                              ),
                                            ];
                                          },
                                          proxy: !0,
                                        },
                                      ],
                                      null,
                                      !1,
                                      3046125910
                                    ),
                                    model: {
                                      value: t.encounterData.patient_id,
                                      callback: function (e) {
                                        t.$set(
                                          t.encounterData,
                                          "patient_id",
                                          e
                                        );
                                      },
                                      expression: "encounterData.patient_id",
                                    },
                                  }),
                                  t._v(" "),
                                  t.submitted &&
                                  !t.$v.encounterData.patient_id.required
                                    ? e(
                                        "div",
                                        { staticClass: "invalid-feedback" },
                                        [
                                          t._v(
                                            t._s(
                                              t.formTranslation.patient_bill
                                                .patient_required
                                            ) + "\n                    "
                                          ),
                                        ]
                                      )
                                    : t._e(),
                                ],
                                1
                              ),
                            ])
                          : t._e(),
                        t._v(" "),
                        e("div", { staticClass: "col-md-4" }, [
                          e("div", { staticClass: "form-group" }, [
                            e(
                              "label",
                              {
                                staticClass: "form-control-label",
                                attrs: { for: "description" },
                              },
                              [
                                t._v(
                                  "\n                            " +
                                    t._s(
                                      t.formTranslation.appointments.description
                                    ) +
                                    "\n                        "
                                ),
                              ]
                            ),
                            t._v(" "),
                            e("textarea", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: t.encounterData.description,
                                  expression: "encounterData.description",
                                },
                              ],
                              staticClass: "form-control",
                              attrs: {
                                name: "description",
                                placeholder:
                                  t.formTranslation.appointments.description,
                                id: "description",
                              },
                              domProps: { value: t.encounterData.description },
                              on: {
                                input: function (e) {
                                  e.target.composing ||
                                    t.$set(
                                      t.encounterData,
                                      "description",
                                      e.target.value
                                    );
                                },
                              },
                            }),
                          ]),
                        ]),
                      ]),
                      t._v(" "),
                      e("div", { staticClass: "row" }, [
                        e("div", { staticClass: "col-md-12" }, [
                          e(
                            "div",
                            { staticClass: "d-flex justify-content-end" },
                            [
                              t.loading
                                ? e(
                                    "button",
                                    {
                                      staticClass: "btn btn-primary",
                                      attrs: { type: "submit", disabled: "" },
                                    },
                                    [
                                      e("i", {
                                        staticClass: "fa fa-sync fa-spin",
                                      }),
                                      t._v(
                                        "  " +
                                          t._s(
                                            t.formTranslation.common.loading
                                          ) +
                                          "\n                        "
                                      ),
                                    ]
                                  )
                                : e(
                                    "button",
                                    {
                                      staticClass: "btn btn-primary rtl-ml-2",
                                      attrs: { type: "submit" },
                                    },
                                    [
                                      e("i", { staticClass: "fa fa-save" }),
                                      t._v(
                                        " " +
                                          t._s(
                                            t.formTranslation.patient_encounter
                                              .save_btn
                                          ) +
                                          " "
                                      ),
                                    ]
                                  ),
                              t._v(" "),
                              e(
                                "button",
                                {
                                  staticClass: "btn btn-outline-primary",
                                  attrs: { type: "button" },
                                  on: {
                                    click: function (e) {
                                      return t.getCloseForm();
                                    },
                                  },
                                },
                                [
                                  t._v(
                                    " " + t._s(t.formTranslation.common.cancel)
                                  ),
                                ]
                              ),
                            ]
                          ),
                        ]),
                      ]),
                    ]),
                  ]
                ),
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
      );
    e.a = c.exports;
  },
  function (t, e, n) {
    "use strict";
    var i = n(374).a,
      r = n(15),
      o = Object(r.a)(
        i,
        function () {
          var t = this,
            e = t._self._c;
          return e(
            "b-row",
            [
              e("b-col", { attrs: { sm: "12", md: "12", lg: "12" } }, [
                e(
                  "form",
                  {
                    attrs: { id: "clinic-schedule-form", novalidate: !0 },
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
                      "div",
                      { staticClass: "card-body" },
                      [
                        e("div", { staticClass: "row" }, [
                          "doctor" !== t.getUserRole()
                            ? e("div", { staticClass: "col-md-4" }, [
                                e("div", { staticClass: "form-group" }, [
                                  e(
                                    "label",
                                    {
                                      staticClass: "form-control-label",
                                      attrs: { for: "module_type" },
                                    },
                                    [
                                      t._v(
                                        "\n                " +
                                          t._s(
                                            t.formTranslation.clinic_schedule
                                              .holiday_of
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
                                          id: "module_type",
                                          "tag-placeholder":
                                            t.formTranslation.clinic_schedule
                                              .tag_module_type_plh,
                                          placeholder:
                                            t.formTranslation.clinic_schedule
                                              .select_modulr_plh,
                                          label: "label",
                                          "track-by": "id",
                                          "allow-empty": !1,
                                          options: t.clinicModule,
                                        },
                                        on: {
                                          select: t.handleModuleChange,
                                          input: t.changeType,
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
                                                        t.formTranslation.common
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
                                          value:
                                            t.clinicScheduleRequest.module_type,
                                          callback: function (e) {
                                            t.$set(
                                              t.clinicScheduleRequest,
                                              "module_type",
                                              e
                                            );
                                          },
                                          expression:
                                            "clinicScheduleRequest.module_type",
                                        },
                                      }),
                                      t._v(" "),
                                      e(
                                        "span",
                                        {
                                          staticClass: "select_clear_btn",
                                          on: {
                                            click: function (e) {
                                              t.clinicScheduleRequest.module_type =
                                                {};
                                            },
                                          },
                                        },
                                        [t._v("×")]
                                      ),
                                    ],
                                    1
                                  ),
                                  t._v(" "),
                                  t.submitted &&
                                  !t.$v.clinicScheduleRequest.module_type
                                    .required
                                    ? e(
                                        "div",
                                        { staticClass: "invalid-feedback" },
                                        [
                                          t._v(
                                            t._s(
                                              t.formTranslation.clinic_schedule
                                                .module_type_required
                                            ) + "\n              "
                                          ),
                                        ]
                                      )
                                    : t._e(),
                                ]),
                              ])
                            : t._e(),
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
                                    attrs: { for: "from_date" },
                                  },
                                  [
                                    t._v(
                                      " " +
                                        t._s(
                                          t.formTranslation.clinic_schedule
                                            .schedule_date
                                        ) +
                                        " "
                                    ),
                                    e("span", { staticClass: "text-danger" }, [
                                      t._v("*"),
                                    ]),
                                  ]
                                ),
                                t._v(" "),
                                e("vc-date-picker", {
                                  ref: "holidayDatePicker",
                                  class: {
                                    " is-invalid":
                                      t.submitted &&
                                      t.$v.clinicScheduleRequest.scheduleDate
                                        .$error,
                                    "mb-2": !0,
                                  },
                                  attrs: {
                                    id: "schedule-date",
                                    "title-position": "left",
                                    mode: "range",
                                    "min-date": t.minDate,
                                    "update-on-input": !1,
                                    popover: {
                                      placement: "bottom",
                                      visibility: "click",
                                    },
                                  },
                                  scopedSlots: t._u([
                                    {
                                      key: "default",
                                      fn: function (n) {
                                        var i = n.inputValue;
                                        return [
                                          e("input", {
                                            staticClass:
                                              "form-control date-picker",
                                            attrs: {
                                              readonly: "",
                                              placeholder:
                                                t.formTranslation
                                                  .clinic_schedule
                                                  .select_schedule_date_plh,
                                            },
                                            domProps: { value: i },
                                          }),
                                        ];
                                      },
                                    },
                                  ]),
                                  model: {
                                    value: t.clinicScheduleRequest.scheduleDate,
                                    callback: function (e) {
                                      t.$set(
                                        t.clinicScheduleRequest,
                                        "scheduleDate",
                                        e
                                      );
                                    },
                                    expression:
                                      "clinicScheduleRequest.scheduleDate",
                                  },
                                }),
                                t._v(" "),
                                !t.submitted ||
                                (t.$v.clinicScheduleRequest.scheduleDate.start
                                  .required &&
                                  t.$v.clinicScheduleRequest.scheduleDate.end
                                    .required)
                                  ? t._e()
                                  : e(
                                      "div",
                                      { staticClass: "invalid-feedback" },
                                      [
                                        t._v(
                                          "\n                  " +
                                            t._s(
                                              t.formTranslation.clinic_schedule
                                                .schedule_date_required
                                            ) +
                                            "\n              "
                                        ),
                                      ]
                                    ),
                              ],
                              1
                            ),
                          ]),
                          t._v(" "),
                          "doctor" !== t.getUserRole()
                            ? e("div", { staticClass: "col-md-4" }, [
                                e("div", { staticClass: "form-group" }, [
                                  t.isDoctorModule
                                    ? e("div", [
                                        e(
                                          "label",
                                          {
                                            staticClass: "form-control-label",
                                            attrs: { for: "specialties" },
                                          },
                                          [
                                            t._v(
                                              "\n                  " +
                                                t._s(
                                                  t.formTranslation.common
                                                    .doctor
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
                                                id: "select-module-type-id1",
                                                "tag-placeholder":
                                                  t.formTranslation
                                                    .clinic_schedule
                                                    .tag_doctors_plh,
                                                placeholder:
                                                  t.formTranslation
                                                    .clinic_schedule
                                                    .select_doc_plh,
                                                label: "label",
                                                "track-by": "id",
                                                loading:
                                                  t.doctorMultiselectLoader,
                                                disabled:
                                                  t.doctorMultiselectLoader,
                                                options: t.doctors,
                                                searchable: !0,
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
                                                value:
                                                  t.clinicScheduleRequest
                                                    .module_id,
                                                callback: function (e) {
                                                  t.$set(
                                                    t.clinicScheduleRequest,
                                                    "module_id",
                                                    e
                                                  );
                                                },
                                                expression:
                                                  "clinicScheduleRequest.module_id",
                                              },
                                            }),
                                            t._v(" "),
                                            e(
                                              "span",
                                              {
                                                staticClass: "select_clear_btn",
                                                on: {
                                                  click: function (e) {
                                                    t.clinicScheduleRequest.module_id =
                                                      "";
                                                  },
                                                },
                                              },
                                              [t._v("×")]
                                            ),
                                          ],
                                          1
                                        ),
                                        t._v(" "),
                                        t.submitted &&
                                        !t.$v.clinicScheduleRequest.module_id.id
                                          .required
                                          ? e(
                                              "div",
                                              {
                                                staticClass: "invalid-feedback",
                                              },
                                              [
                                                t._v(
                                                  "\n                  " +
                                                    t._s(
                                                      t.formTranslation
                                                        .appointments
                                                        .doc_required
                                                    ) +
                                                    "\n                "
                                                ),
                                              ]
                                            )
                                          : t._e(),
                                      ])
                                    : t._e(),
                                  t._v(" "),
                                  t.isClinicModule
                                    ? e("div", [
                                        e(
                                          "label",
                                          {
                                            staticClass: "form-control-label",
                                            attrs: { for: "specialties" },
                                          },
                                          [
                                            t._v(
                                              "\n                  " +
                                                t._s(
                                                  t.formTranslation.common
                                                    .clinic
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
                                                id: "select-module-type-id",
                                                "tag-placeholder":
                                                  t.formTranslation
                                                    .clinic_schedule
                                                    .plh_tag_clinic,
                                                placeholder:
                                                  t.formTranslation.clinic
                                                    .select_clinic,
                                                label: "label",
                                                "track-by": "id",
                                                loading:
                                                  1 !=
                                                    t.userData.addOns.kiviPro &&
                                                  t.clinicMultiselectLoader,
                                                disabled:
                                                  1 !=
                                                    t.userData.addOns.kiviPro &&
                                                  t.clinicMultiselectLoader,
                                                options: t.clinics,
                                                searchable: !0,
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
                                                value:
                                                  t.clinicScheduleRequest
                                                    .module_id,
                                                callback: function (e) {
                                                  t.$set(
                                                    t.clinicScheduleRequest,
                                                    "module_id",
                                                    e
                                                  );
                                                },
                                                expression:
                                                  "clinicScheduleRequest.module_id",
                                              },
                                            }),
                                            t._v(" "),
                                            e(
                                              "span",
                                              {
                                                staticClass: "select_clear_btn",
                                                on: {
                                                  click: function (e) {
                                                    t.clinicScheduleRequest.module_id =
                                                      "";
                                                  },
                                                },
                                              },
                                              [t._v("×")]
                                            ),
                                          ],
                                          1
                                        ),
                                        t._v(" "),
                                        t.submitted &&
                                        !t.$v.clinicScheduleRequest.module_id.id
                                          .required
                                          ? e(
                                              "div",
                                              {
                                                staticClass: "invalid-feedback",
                                              },
                                              [
                                                t._v(
                                                  "\n                  " +
                                                    t._s(
                                                      t.formTranslation.reports
                                                        .tag_plh_select_clinic
                                                    ) +
                                                    "\n                "
                                                ),
                                              ]
                                            )
                                          : t._e(),
                                      ])
                                    : t._e(),
                                ]),
                              ])
                            : t._e(),
                        ]),
                        t._v(" "),
                        e(
                          "b-row",
                          [
                            e(
                              "b-col",
                              {
                                staticClass: "p-0",
                                attrs: { sm: "12", md: "12", lg: "12" },
                              },
                              [
                                e(
                                  "div",
                                  { staticClass: "d-flex justify-content-end" },
                                  [
                                    t.loading
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
                                              staticClass: "fa fa-sync fa-spin",
                                            }),
                                            t._v(
                                              "  " +
                                                t._s(
                                                  t.formTranslation.common
                                                    .loading
                                                ) +
                                                "\n              "
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
                                                  t.formTranslation.common.save
                                                ) +
                                                "        \n              "
                                            ),
                                          ]
                                        ),
                                    t._v(" "),
                                    e(
                                      "button",
                                      {
                                        staticClass: "btn btn-outline-primary",
                                        attrs: { type: "button" },
                                        on: { click: t.closeForm },
                                      },
                                      [
                                        t._v(
                                          " " +
                                            t._s(
                                              t.formTranslation.common.cancel
                                            )
                                        ),
                                      ]
                                    ),
                                  ]
                                ),
                              ]
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                  ]
                ),
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
      );
    e.a = o.exports;
  },
  function (t, e, n) {
    (function (i, r, o, a) {
      !(function (e) {
        e.version = "0.14.5";
        var s = 1200,
          l = 1252;
        "undefined" == typeof cptable &&
          (void 0 !== i
            ? (i.cptable = n(598))
            : "undefined" != typeof window && (window.cptable = n(598)));
        for (var c = [874, 932, 936, 949, 950], d = 0; d <= 8; ++d)
          c.push(1250 + d);
        var u = {
            0: 1252,
            1: 65001,
            2: 65001,
            77: 1e4,
            128: 932,
            129: 949,
            130: 1361,
            134: 936,
            136: 950,
            161: 1253,
            162: 1254,
            163: 1258,
            177: 1255,
            178: 1256,
            186: 1257,
            204: 1251,
            222: 874,
            238: 1250,
            255: 1252,
            69: 6969,
          },
          p = function (t) {
            -1 != c.indexOf(t) && (l = u[0] = t);
          },
          h = function (t) {
            (s = t), p(t);
          };
        function f() {
          h(1200), p(1252);
        }
        function b(t) {
          for (var e = [], n = 0, i = t.length; n < i; ++n)
            e[n] = t.charCodeAt(n);
          return e;
        }
        var m = function (t) {
            var e = t.charCodeAt(0),
              n = t.charCodeAt(1);
            return 255 == e && 254 == n
              ? (function (t) {
                  for (var e = [], n = 0; n < t.length >> 1; ++n)
                    e[n] = String.fromCharCode(
                      t.charCodeAt(2 * n) + (t.charCodeAt(2 * n + 1) << 8)
                    );
                  return e.join("");
                })(t.slice(2))
              : 254 == e && 255 == n
              ? (function (t) {
                  for (var e = [], n = 0; n < t.length >> 1; ++n)
                    e[n] = String.fromCharCode(
                      t.charCodeAt(2 * n + 1) + (t.charCodeAt(2 * n) << 8)
                    );
                  return e.join("");
                })(t.slice(2))
              : 65279 == e
              ? t.slice(1)
              : t;
          },
          g = function (t) {
            return String.fromCharCode(t);
          },
          v = function (t) {
            return String.fromCharCode(t);
          };
        "undefined" != typeof cptable &&
          ((h = function (t) {
            (s = t), p(t);
          }),
          (m = function (t) {
            return 255 === t.charCodeAt(0) && 254 === t.charCodeAt(1)
              ? cptable.utils.decode(1200, b(t.slice(2)))
              : t;
          }),
          (g = function (t) {
            return 1200 === s
              ? String.fromCharCode(t)
              : cptable.utils.decode(s, [255 & t, t >> 8])[0];
          }),
          (v = function (t) {
            return cptable.utils.decode(l, [t])[0];
          }));
        var _,
          y =
            ((_ =
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="),
            {
              encode: function (t) {
                for (
                  var e = "",
                    n = 0,
                    i = 0,
                    r = 0,
                    o = 0,
                    a = 0,
                    s = 0,
                    l = 0,
                    c = 0;
                  c < t.length;

                )
                  (o = (n = t.charCodeAt(c++)) >> 2),
                    (a = ((3 & n) << 4) | ((i = t.charCodeAt(c++)) >> 4)),
                    (s = ((15 & i) << 2) | ((r = t.charCodeAt(c++)) >> 6)),
                    (l = 63 & r),
                    isNaN(i) ? (s = l = 64) : isNaN(r) && (l = 64),
                    (e +=
                      _.charAt(o) + _.charAt(a) + _.charAt(s) + _.charAt(l));
                return e;
              },
              decode: function (t) {
                var e = "",
                  n = 0,
                  i = 0,
                  r = 0,
                  o = 0,
                  a = 0,
                  s = 0;
                t = t.replace(/[^\w\+\/\=]/g, "");
                for (var l = 0; l < t.length; )
                  (n =
                    (_.indexOf(t.charAt(l++)) << 2) |
                    ((o = _.indexOf(t.charAt(l++))) >> 4)),
                    (e += String.fromCharCode(n)),
                    (i =
                      ((15 & o) << 4) | ((a = _.indexOf(t.charAt(l++))) >> 2)),
                    64 !== a && (e += String.fromCharCode(i)),
                    (r = ((3 & a) << 6) | (s = _.indexOf(t.charAt(l++)))),
                    64 !== s && (e += String.fromCharCode(r));
                return e;
              },
            }),
          M =
            void 0 !== r &&
            void 0 !== o &&
            void 0 !== o.versions &&
            !!o.versions.node,
          O = function () {};
        if (void 0 !== r) {
          var w = !r.from;
          if (!w)
            try {
              r.from("foo", "utf8");
            } catch (t) {
              w = !0;
            }
          (O = w
            ? function (t, e) {
                return e ? new r(t, e) : new r(t);
              }
            : r.from.bind(r)),
            r.alloc ||
              (r.alloc = function (t) {
                return new r(t);
              }),
            r.allocUnsafe ||
              (r.allocUnsafe = function (t) {
                return new r(t);
              });
        }
        function A(t) {
          return M ? r.alloc(t) : new Array(t);
        }
        function x(t) {
          return M ? r.allocUnsafe(t) : new Array(t);
        }
        var z = function (t) {
          return M
            ? O(t, "binary")
            : t.split("").map(function (t) {
                return 255 & t.charCodeAt(0);
              });
        };
        function C(t) {
          if ("undefined" == typeof ArrayBuffer) return z(t);
          for (
            var e = new ArrayBuffer(t.length), n = new Uint8Array(e), i = 0;
            i != t.length;
            ++i
          )
            n[i] = 255 & t.charCodeAt(i);
          return e;
        }
        function k(t) {
          if (Array.isArray(t)) return t.map(il).join("");
          for (var e = [], n = 0; n < t.length; ++n) e[n] = il(t[n]);
          return e.join("");
        }
        function S(t) {
          if ("undefined" == typeof ArrayBuffer) throw new Error("Unsupported");
          if (t instanceof ArrayBuffer) return S(new Uint8Array(t));
          for (var e = new Array(t.length), n = 0; n < t.length; ++n)
            e[n] = t[n];
          return e;
        }
        var T = function (t) {
            return [].concat.apply([], t);
          },
          D = /\u0000/g,
          L = /[\u0001-\u0006]/g,
          q = {},
          E = function (t) {
            function e(t) {
              for (var e = "", n = t.length - 1; n >= 0; ) e += t.charAt(n--);
              return e;
            }
            function n(t, e) {
              for (var n = ""; n.length < e; ) n += t;
              return n;
            }
            function i(t, e) {
              var i = "" + t;
              return i.length >= e ? i : n("0", e - i.length) + i;
            }
            function r(t, e) {
              var i = "" + t;
              return i.length >= e ? i : n(" ", e - i.length) + i;
            }
            function o(t, e) {
              var i = "" + t;
              return i.length >= e ? i : i + n(" ", e - i.length);
            }
            t.version = "0.10.2";
            var a = Math.pow(2, 32);
            function s(t, e) {
              return t > a || t < -a
                ? (function (t, e) {
                    var i = "" + Math.round(t);
                    return i.length >= e ? i : n("0", e - i.length) + i;
                  })(t, e)
                : (function (t, e) {
                    var i = "" + t;
                    return i.length >= e ? i : n("0", e - i.length) + i;
                  })(Math.round(t), e);
            }
            function l(t, e) {
              return (
                (e = e || 0),
                t.length >= 7 + e &&
                  103 == (32 | t.charCodeAt(e)) &&
                  101 == (32 | t.charCodeAt(e + 1)) &&
                  110 == (32 | t.charCodeAt(e + 2)) &&
                  101 == (32 | t.charCodeAt(e + 3)) &&
                  114 == (32 | t.charCodeAt(e + 4)) &&
                  97 == (32 | t.charCodeAt(e + 5)) &&
                  108 == (32 | t.charCodeAt(e + 6))
              );
            }
            var c = [
                ["Sun", "Sunday"],
                ["Mon", "Monday"],
                ["Tue", "Tuesday"],
                ["Wed", "Wednesday"],
                ["Thu", "Thursday"],
                ["Fri", "Friday"],
                ["Sat", "Saturday"],
              ],
              d = [
                ["J", "Jan", "January"],
                ["F", "Feb", "February"],
                ["M", "Mar", "March"],
                ["A", "Apr", "April"],
                ["M", "May", "May"],
                ["J", "Jun", "June"],
                ["J", "Jul", "July"],
                ["A", "Aug", "August"],
                ["S", "Sep", "September"],
                ["O", "Oct", "October"],
                ["N", "Nov", "November"],
                ["D", "Dec", "December"],
              ];
            function u(t) {
              (t[0] = "General"),
                (t[1] = "0"),
                (t[2] = "0.00"),
                (t[3] = "#,##0"),
                (t[4] = "#,##0.00"),
                (t[9] = "0%"),
                (t[10] = "0.00%"),
                (t[11] = "0.00E+00"),
                (t[12] = "# ?/?"),
                (t[13] = "# ??/??"),
                (t[14] = "m/d/yy"),
                (t[15] = "d-mmm-yy"),
                (t[16] = "d-mmm"),
                (t[17] = "mmm-yy"),
                (t[18] = "h:mm AM/PM"),
                (t[19] = "h:mm:ss AM/PM"),
                (t[20] = "h:mm"),
                (t[21] = "h:mm:ss"),
                (t[22] = "m/d/yy h:mm"),
                (t[37] = "#,##0 ;(#,##0)"),
                (t[38] = "#,##0 ;[Red](#,##0)"),
                (t[39] = "#,##0.00;(#,##0.00)"),
                (t[40] = "#,##0.00;[Red](#,##0.00)"),
                (t[45] = "mm:ss"),
                (t[46] = "[h]:mm:ss"),
                (t[47] = "mmss.0"),
                (t[48] = "##0.0E+0"),
                (t[49] = "@"),
                (t[56] = '"上午/下午 "hh"時"mm"分"ss"秒 "'),
                (t[65535] = "General");
            }
            var p = {};
            function h(t, e, n) {
              for (
                var i = t < 0 ? -1 : 1,
                  r = t * i,
                  o = 0,
                  a = 1,
                  s = 0,
                  l = 1,
                  c = 0,
                  d = 0,
                  u = Math.floor(r);
                c < e &&
                ((s = (u = Math.floor(r)) * a + o),
                (d = u * c + l),
                !(r - u < 5e-8));

              )
                (r = 1 / (r - u)), (o = a), (a = s), (l = c), (c = d);
              if (
                (d > e && (c > e ? ((d = l), (s = o)) : ((d = c), (s = a))), !n)
              )
                return [0, i * s, d];
              var p = Math.floor((i * s) / d);
              return [p, i * s - p * d, d];
            }
            function f(t, e, n) {
              if (t > 2958465 || t < 0) return null;
              var i = 0 | t,
                r = Math.floor(86400 * (t - i)),
                o = 0,
                a = [],
                s = {
                  D: i,
                  T: r,
                  u: 86400 * (t - i) - r,
                  y: 0,
                  m: 0,
                  d: 0,
                  H: 0,
                  M: 0,
                  S: 0,
                  q: 0,
                };
              if (
                (Math.abs(s.u) < 1e-6 && (s.u = 0),
                e && e.date1904 && (i += 1462),
                s.u > 0.9999 &&
                  ((s.u = 0), 86400 == ++r && ((s.T = r = 0), ++i, ++s.D)),
                60 === i)
              )
                (a = n ? [1317, 10, 29] : [1900, 2, 29]), (o = 3);
              else if (0 === i) (a = n ? [1317, 8, 29] : [1900, 1, 0]), (o = 6);
              else {
                i > 60 && --i;
                var l = new Date(1900, 0, 1);
                l.setDate(l.getDate() + i - 1),
                  (a = [l.getFullYear(), l.getMonth() + 1, l.getDate()]),
                  (o = l.getDay()),
                  i < 60 && (o = (o + 6) % 7),
                  n && (o = 0);
              }
              return (
                (s.y = a[0]),
                (s.m = a[1]),
                (s.d = a[2]),
                (s.S = r % 60),
                (r = Math.floor(r / 60)),
                (s.M = r % 60),
                (r = Math.floor(r / 60)),
                (s.H = r),
                (s.q = o),
                s
              );
            }
            u(p), (t.parse_date_code = f);
            var b = new Date(1899, 11, 31, 0, 0, 0),
              m = b.getTime(),
              g = new Date(1900, 2, 1, 0, 0, 0);
            function v(t, e) {
              var n = t.getTime();
              return (
                e ? (n -= 1262304e5) : t >= g && (n += 864e5),
                (n -
                  (m + 6e4 * (t.getTimezoneOffset() - b.getTimezoneOffset()))) /
                  864e5
              );
            }
            function _(t) {
              return t.toString(10);
            }
            t._general_int = _;
            var y = (function () {
              var t = /\.(\d*[1-9])0+$/,
                e = /\.0*$/,
                n = /\.(\d*[1-9])0+/,
                i = /\.0*[Ee]/,
                r = /(E[+-])(\d)$/;
              function o(n) {
                return n.indexOf(".") > -1
                  ? n.replace(e, "").replace(t, ".$1")
                  : n;
              }
              return function (e) {
                var a,
                  s = Math.floor(Math.log(Math.abs(e)) * Math.LOG10E);
                return (
                  (a =
                    s >= -4 && s <= -1
                      ? e.toPrecision(10 + s)
                      : Math.abs(s) <= 9
                      ? (function (t) {
                          var e = t < 0 ? 12 : 11,
                            n = o(t.toFixed(12));
                          return n.length <= e ||
                            (n = t.toPrecision(10)).length <= e
                            ? n
                            : t.toExponential(5);
                        })(e)
                      : 10 === s
                      ? e.toFixed(10).substr(0, 12)
                      : (function (e) {
                          var n = e.toFixed(11).replace(t, ".$1");
                          return (
                            n.length > (e < 0 ? 12 : 11) &&
                              (n = e.toPrecision(6)),
                            n
                          );
                        })(e)),
                  o(
                    (function (t) {
                      for (var e = 0; e != t.length; ++e)
                        if (101 == (32 | t.charCodeAt(e)))
                          return t
                            .replace(n, ".$1")
                            .replace(i, "E")
                            .replace("e", "E")
                            .replace(r, "$10$2");
                      return t;
                    })(a)
                  )
                );
              };
            })();
            function M(t, e) {
              switch (typeof t) {
                case "string":
                  return t;
                case "boolean":
                  return t ? "TRUE" : "FALSE";
                case "number":
                  return (0 | t) === t ? _(t) : y(t);
                case "undefined":
                  return "";
                case "object":
                  if (null == t) return "";
                  if (t instanceof Date) return L(14, v(t, e && e.date1904), e);
              }
              throw new Error("unsupported value in General format: " + t);
            }
            function O(t, e, n, r) {
              var o,
                a = "",
                s = 0,
                l = 0,
                u = n.y,
                p = 0;
              switch (t) {
                case 98:
                  u = n.y + 543;
                case 121:
                  switch (e.length) {
                    case 1:
                    case 2:
                      (o = u % 100), (p = 2);
                      break;
                    default:
                      (o = u % 1e4), (p = 4);
                  }
                  break;
                case 109:
                  switch (e.length) {
                    case 1:
                    case 2:
                      (o = n.m), (p = e.length);
                      break;
                    case 3:
                      return d[n.m - 1][1];
                    case 5:
                      return d[n.m - 1][0];
                    default:
                      return d[n.m - 1][2];
                  }
                  break;
                case 100:
                  switch (e.length) {
                    case 1:
                    case 2:
                      (o = n.d), (p = e.length);
                      break;
                    case 3:
                      return c[n.q][0];
                    default:
                      return c[n.q][1];
                  }
                  break;
                case 104:
                  switch (e.length) {
                    case 1:
                    case 2:
                      (o = 1 + ((n.H + 11) % 12)), (p = e.length);
                      break;
                    default:
                      throw "bad hour format: " + e;
                  }
                  break;
                case 72:
                  switch (e.length) {
                    case 1:
                    case 2:
                      (o = n.H), (p = e.length);
                      break;
                    default:
                      throw "bad hour format: " + e;
                  }
                  break;
                case 77:
                  switch (e.length) {
                    case 1:
                    case 2:
                      (o = n.M), (p = e.length);
                      break;
                    default:
                      throw "bad minute format: " + e;
                  }
                  break;
                case 115:
                  if (
                    "s" != e &&
                    "ss" != e &&
                    ".0" != e &&
                    ".00" != e &&
                    ".000" != e
                  )
                    throw "bad second format: " + e;
                  return 0 !== n.u || ("s" != e && "ss" != e)
                    ? ((l = r >= 2 ? (3 === r ? 1e3 : 100) : 1 === r ? 10 : 1),
                      (s = Math.round(l * (n.S + n.u))) >= 60 * l && (s = 0),
                      "s" === e
                        ? 0 === s
                          ? "0"
                          : "" + s / l
                        : ((a = i(s, 2 + r)),
                          "ss" === e
                            ? a.substr(0, 2)
                            : "." + a.substr(2, e.length - 1)))
                    : i(n.S, e.length);
                case 90:
                  switch (e) {
                    case "[h]":
                    case "[hh]":
                      o = 24 * n.D + n.H;
                      break;
                    case "[m]":
                    case "[mm]":
                      o = 60 * (24 * n.D + n.H) + n.M;
                      break;
                    case "[s]":
                    case "[ss]":
                      o =
                        60 * (60 * (24 * n.D + n.H) + n.M) +
                        Math.round(n.S + n.u);
                      break;
                    default:
                      throw "bad abstime format: " + e;
                  }
                  p = 3 === e.length ? 1 : 2;
                  break;
                case 101:
                  (o = u), (p = 1);
              }
              return p > 0 ? i(o, p) : "";
            }
            function w(t) {
              if (t.length <= 3) return t;
              for (
                var e = t.length % 3, n = t.substr(0, e);
                e != t.length;
                e += 3
              )
                n += (n.length > 0 ? "," : "") + t.substr(e, 3);
              return n;
            }
            (t._general_num = y), (t._general = M);
            var A = (function () {
              var t = /%/g,
                a = /# (\?+)( ?)\/( ?)(\d+)/,
                l = /^#*0*\.([0#]+)/,
                c = /\).*[0#]/,
                d = /\(###\) ###\\?-####/;
              function u(t) {
                for (var e, n = "", i = 0; i != t.length; ++i)
                  switch ((e = t.charCodeAt(i))) {
                    case 35:
                      break;
                    case 63:
                      n += " ";
                      break;
                    case 48:
                      n += "0";
                      break;
                    default:
                      n += String.fromCharCode(e);
                  }
                return n;
              }
              function p(t, e) {
                var n = Math.pow(10, e);
                return "" + Math.round(t * n) / n;
              }
              function f(t, e) {
                return e <
                  ("" + Math.round((t - Math.floor(t)) * Math.pow(10, e)))
                    .length
                  ? 0
                  : Math.round((t - Math.floor(t)) * Math.pow(10, e));
              }
              function b(m, g, v) {
                if (40 === m.charCodeAt(0) && !g.match(c)) {
                  var _ = g
                    .replace(/\( */, "")
                    .replace(/ \)/, "")
                    .replace(/\)/, "");
                  return v >= 0 ? b("n", _, v) : "(" + b("n", _, -v) + ")";
                }
                if (44 === g.charCodeAt(g.length - 1))
                  return (function (t, e, n) {
                    for (var i = e.length - 1; 44 === e.charCodeAt(i - 1); )
                      --i;
                    return A(
                      t,
                      e.substr(0, i),
                      n / Math.pow(10, 3 * (e.length - i))
                    );
                  })(m, g, v);
                if (-1 !== g.indexOf("%"))
                  return (function (e, i, r) {
                    var o = i.replace(t, ""),
                      a = i.length - o.length;
                    return A(e, o, r * Math.pow(10, 2 * a)) + n("%", a);
                  })(m, g, v);
                if (-1 !== g.indexOf("E"))
                  return (function t(e, n) {
                    var i,
                      r = e.indexOf("E") - e.indexOf(".") - 1;
                    if (e.match(/^#+0.0E\+0$/)) {
                      if (0 == n) return "0.0E+0";
                      if (n < 0) return "-" + t(e, -n);
                      var o = e.indexOf(".");
                      -1 === o && (o = e.indexOf("E"));
                      var a = Math.floor(Math.log(n) * Math.LOG10E) % o;
                      if (
                        (a < 0 && (a += o),
                        -1 ===
                          (i = (n / Math.pow(10, a)).toPrecision(
                            r + 1 + ((o + a) % o)
                          )).indexOf("e"))
                      ) {
                        var s = Math.floor(Math.log(n) * Math.LOG10E);
                        for (
                          -1 === i.indexOf(".")
                            ? (i =
                                i.charAt(0) +
                                "." +
                                i.substr(1) +
                                "E+" +
                                (s - i.length + a))
                            : (i += "E+" + (s - a));
                          "0." === i.substr(0, 2);

                        )
                          i = (i =
                            i.charAt(0) +
                            i.substr(2, o) +
                            "." +
                            i.substr(2 + o))
                            .replace(/^0+([1-9])/, "$1")
                            .replace(/^0+\./, "0.");
                        i = i.replace(/\+-/, "-");
                      }
                      i = i.replace(
                        /^([+-]?)(\d*)\.(\d*)[Ee]/,
                        function (t, e, n, i) {
                          return (
                            e +
                            n +
                            i.substr(0, (o + a) % o) +
                            "." +
                            i.substr(a) +
                            "E"
                          );
                        }
                      );
                    } else i = n.toExponential(r);
                    return (
                      e.match(/E\+00$/) &&
                        i.match(/e[+-]\d$/) &&
                        (i =
                          i.substr(0, i.length - 1) +
                          "0" +
                          i.charAt(i.length - 1)),
                      e.match(/E\-/) &&
                        i.match(/e\+/) &&
                        (i = i.replace(/e\+/, "e")),
                      i.replace("e", "E")
                    );
                  })(g, v);
                if (36 === g.charCodeAt(0))
                  return "$" + b(m, g.substr(" " == g.charAt(1) ? 2 : 1), v);
                var y,
                  M,
                  O,
                  x,
                  z = Math.abs(v),
                  C = v < 0 ? "-" : "";
                if (g.match(/^00+$/)) return C + s(z, g.length);
                if (g.match(/^[#?]+$/))
                  return (
                    "0" === (y = s(v, 0)) && (y = ""),
                    y.length > g.length
                      ? y
                      : u(g.substr(0, g.length - y.length)) + y
                  );
                if ((M = g.match(a)))
                  return (function (t, e, o) {
                    var a = parseInt(t[4], 10),
                      s = Math.round(e * a),
                      l = Math.floor(s / a),
                      c = s - l * a,
                      d = a;
                    return (
                      o +
                      (0 === l ? "" : "" + l) +
                      " " +
                      (0 === c
                        ? n(" ", t[1].length + 1 + t[4].length)
                        : r(c, t[1].length) +
                          t[2] +
                          "/" +
                          t[3] +
                          i(d, t[4].length))
                    );
                  })(M, z, C);
                if (g.match(/^#+0+$/))
                  return C + s(z, g.length - g.indexOf("0"));
                if ((M = g.match(l)))
                  return (
                    (y = p(v, M[1].length)
                      .replace(/^([^\.]+)$/, "$1." + u(M[1]))
                      .replace(/\.$/, "." + u(M[1]))
                      .replace(/\.(\d*)$/, function (t, e) {
                        return "." + e + n("0", u(M[1]).length - e.length);
                      })),
                    -1 !== g.indexOf("0.") ? y : y.replace(/^0\./, ".")
                  );
                if (
                  ((g = g.replace(/^#+([0.])/, "$1")),
                  (M = g.match(/^(0*)\.(#*)$/)))
                )
                  return (
                    C +
                    p(z, M[2].length)
                      .replace(/\.(\d*[1-9])0*$/, ".$1")
                      .replace(/^(-?\d*)$/, "$1.")
                      .replace(/^0\./, M[1].length ? "0." : ".")
                  );
                if ((M = g.match(/^#{1,3},##0(\.?)$/))) return C + w(s(z, 0));
                if ((M = g.match(/^#,##0\.([#0]*0)$/)))
                  return v < 0
                    ? "-" + b(m, g, -v)
                    : w(
                        "" +
                          (Math.floor(v) +
                            (function (t, e) {
                              return e <
                                (
                                  "" +
                                  Math.round(
                                    (t - Math.floor(t)) * Math.pow(10, e)
                                  )
                                ).length
                                ? 1
                                : 0;
                            })(v, M[1].length))
                      ) +
                        "." +
                        i(f(v, M[1].length), M[1].length);
                if ((M = g.match(/^#,#*,#0/)))
                  return b(m, g.replace(/^#,#*,/, ""), v);
                if ((M = g.match(/^([0#]+)(\\?-([0#]+))+$/)))
                  return (
                    (y = e(b(m, g.replace(/[\\-]/g, ""), v))),
                    (O = 0),
                    e(
                      e(g.replace(/\\/g, "")).replace(/[0#]/g, function (t) {
                        return O < y.length
                          ? y.charAt(O++)
                          : "0" === t
                          ? "0"
                          : "";
                      })
                    )
                  );
                if (g.match(d))
                  return (
                    "(" +
                    (y = b(m, "##########", v)).substr(0, 3) +
                    ") " +
                    y.substr(3, 3) +
                    "-" +
                    y.substr(6)
                  );
                var k = "";
                if ((M = g.match(/^([#0?]+)( ?)\/( ?)([#0?]+)/)))
                  return (
                    (O = Math.min(M[4].length, 7)),
                    (x = h(z, Math.pow(10, O) - 1, !1)),
                    (y = "" + C),
                    " " == (k = A("n", M[1], x[1])).charAt(k.length - 1) &&
                      (k = k.substr(0, k.length - 1) + "0"),
                    (y += k + M[2] + "/" + M[3]),
                    (k = o(x[2], O)).length < M[4].length &&
                      (k = u(M[4].substr(M[4].length - k.length)) + k),
                    (y += k)
                  );
                if ((M = g.match(/^# ([#0?]+)( ?)\/( ?)([#0?]+)/)))
                  return (
                    (O = Math.min(Math.max(M[1].length, M[4].length), 7)),
                    C +
                      ((x = h(z, Math.pow(10, O) - 1, !0))[0] ||
                        (x[1] ? "" : "0")) +
                      " " +
                      (x[1]
                        ? r(x[1], O) + M[2] + "/" + M[3] + o(x[2], O)
                        : n(" ", 2 * O + 1 + M[2].length + M[3].length))
                  );
                if ((M = g.match(/^[#0?]+$/)))
                  return (
                    (y = s(v, 0)),
                    g.length <= y.length
                      ? y
                      : u(g.substr(0, g.length - y.length)) + y
                  );
                if ((M = g.match(/^([#0?]+)\.([#0]+)$/))) {
                  (y =
                    "" +
                    v
                      .toFixed(Math.min(M[2].length, 10))
                      .replace(/([^0])0+$/, "$1")),
                    (O = y.indexOf("."));
                  var S = g.indexOf(".") - O,
                    T = g.length - y.length - S;
                  return u(g.substr(0, S) + y + g.substr(g.length - T));
                }
                if ((M = g.match(/^00,000\.([#0]*0)$/)))
                  return (
                    (O = f(v, M[1].length)),
                    v < 0
                      ? "-" + b(m, g, -v)
                      : w(
                          (function (t) {
                            return t < 2147483647 && t > -2147483648
                              ? "" + (t >= 0 ? 0 | t : (t - 1) | 0)
                              : "" + Math.floor(t);
                          })(v)
                        )
                          .replace(/^\d,\d{3}$/, "0$&")
                          .replace(/^\d*$/, function (t) {
                            return (
                              "00," +
                              (t.length < 3 ? i(0, 3 - t.length) : "") +
                              t
                            );
                          }) +
                        "." +
                        i(O, M[1].length)
                  );
                switch (g) {
                  case "###,##0.00":
                    return b(m, "#,##0.00", v);
                  case "###,###":
                  case "##,###":
                  case "#,###":
                    var D = w(s(z, 0));
                    return "0" !== D ? C + D : "";
                  case "###,###.00":
                    return b(m, "###,##0.00", v).replace(/^0\./, ".");
                  case "#,###.00":
                    return b(m, "#,##0.00", v).replace(/^0\./, ".");
                }
                throw new Error("unsupported format |" + g + "|");
              }
              function m(s, p, f) {
                if (40 === s.charCodeAt(0) && !p.match(c)) {
                  var b = p
                    .replace(/\( */, "")
                    .replace(/ \)/, "")
                    .replace(/\)/, "");
                  return f >= 0 ? m("n", b, f) : "(" + m("n", b, -f) + ")";
                }
                if (44 === p.charCodeAt(p.length - 1))
                  return (function (t, e, n) {
                    for (var i = e.length - 1; 44 === e.charCodeAt(i - 1); )
                      --i;
                    return A(
                      t,
                      e.substr(0, i),
                      n / Math.pow(10, 3 * (e.length - i))
                    );
                  })(s, p, f);
                if (-1 !== p.indexOf("%"))
                  return (function (e, i, r) {
                    var o = i.replace(t, ""),
                      a = i.length - o.length;
                    return A(e, o, r * Math.pow(10, 2 * a)) + n("%", a);
                  })(s, p, f);
                if (-1 !== p.indexOf("E"))
                  return (function t(e, n) {
                    var i,
                      r = e.indexOf("E") - e.indexOf(".") - 1;
                    if (e.match(/^#+0.0E\+0$/)) {
                      if (0 == n) return "0.0E+0";
                      if (n < 0) return "-" + t(e, -n);
                      var o = e.indexOf(".");
                      -1 === o && (o = e.indexOf("E"));
                      var a = Math.floor(Math.log(n) * Math.LOG10E) % o;
                      if (
                        (a < 0 && (a += o),
                        !(i = (n / Math.pow(10, a)).toPrecision(
                          r + 1 + ((o + a) % o)
                        )).match(/[Ee]/))
                      ) {
                        var s = Math.floor(Math.log(n) * Math.LOG10E);
                        -1 === i.indexOf(".")
                          ? (i =
                              i.charAt(0) +
                              "." +
                              i.substr(1) +
                              "E+" +
                              (s - i.length + a))
                          : (i += "E+" + (s - a)),
                          (i = i.replace(/\+-/, "-"));
                      }
                      i = i.replace(
                        /^([+-]?)(\d*)\.(\d*)[Ee]/,
                        function (t, e, n, i) {
                          return (
                            e +
                            n +
                            i.substr(0, (o + a) % o) +
                            "." +
                            i.substr(a) +
                            "E"
                          );
                        }
                      );
                    } else i = n.toExponential(r);
                    return (
                      e.match(/E\+00$/) &&
                        i.match(/e[+-]\d$/) &&
                        (i =
                          i.substr(0, i.length - 1) +
                          "0" +
                          i.charAt(i.length - 1)),
                      e.match(/E\-/) &&
                        i.match(/e\+/) &&
                        (i = i.replace(/e\+/, "e")),
                      i.replace("e", "E")
                    );
                  })(p, f);
                if (36 === p.charCodeAt(0))
                  return "$" + m(s, p.substr(" " == p.charAt(1) ? 2 : 1), f);
                var g,
                  v,
                  _,
                  y,
                  M = Math.abs(f),
                  O = f < 0 ? "-" : "";
                if (p.match(/^00+$/)) return O + i(M, p.length);
                if (p.match(/^[#?]+$/))
                  return (
                    (g = "" + f),
                    0 === f && (g = ""),
                    g.length > p.length
                      ? g
                      : u(p.substr(0, p.length - g.length)) + g
                  );
                if ((v = p.match(a)))
                  return (function (t, e, i) {
                    return (
                      i +
                      (0 === e ? "" : "" + e) +
                      n(" ", t[1].length + 2 + t[4].length)
                    );
                  })(v, M, O);
                if (p.match(/^#+0+$/))
                  return O + i(M, p.length - p.indexOf("0"));
                if ((v = p.match(l)))
                  return (
                    (g = (g = ("" + f)
                      .replace(/^([^\.]+)$/, "$1." + u(v[1]))
                      .replace(/\.$/, "." + u(v[1]))).replace(
                      /\.(\d*)$/,
                      function (t, e) {
                        return "." + e + n("0", u(v[1]).length - e.length);
                      }
                    )),
                    -1 !== p.indexOf("0.") ? g : g.replace(/^0\./, ".")
                  );
                if (
                  ((p = p.replace(/^#+([0.])/, "$1")),
                  (v = p.match(/^(0*)\.(#*)$/)))
                )
                  return (
                    O +
                    ("" + M)
                      .replace(/\.(\d*[1-9])0*$/, ".$1")
                      .replace(/^(-?\d*)$/, "$1.")
                      .replace(/^0\./, v[1].length ? "0." : ".")
                  );
                if ((v = p.match(/^#{1,3},##0(\.?)$/))) return O + w("" + M);
                if ((v = p.match(/^#,##0\.([#0]*0)$/)))
                  return f < 0
                    ? "-" + m(s, p, -f)
                    : w("" + f) + "." + n("0", v[1].length);
                if ((v = p.match(/^#,#*,#0/)))
                  return m(s, p.replace(/^#,#*,/, ""), f);
                if ((v = p.match(/^([0#]+)(\\?-([0#]+))+$/)))
                  return (
                    (g = e(m(s, p.replace(/[\\-]/g, ""), f))),
                    (_ = 0),
                    e(
                      e(p.replace(/\\/g, "")).replace(/[0#]/g, function (t) {
                        return _ < g.length
                          ? g.charAt(_++)
                          : "0" === t
                          ? "0"
                          : "";
                      })
                    )
                  );
                if (p.match(d))
                  return (
                    "(" +
                    (g = m(s, "##########", f)).substr(0, 3) +
                    ") " +
                    g.substr(3, 3) +
                    "-" +
                    g.substr(6)
                  );
                var x = "";
                if ((v = p.match(/^([#0?]+)( ?)\/( ?)([#0?]+)/)))
                  return (
                    (_ = Math.min(v[4].length, 7)),
                    (y = h(M, Math.pow(10, _) - 1, !1)),
                    (g = "" + O),
                    " " == (x = A("n", v[1], y[1])).charAt(x.length - 1) &&
                      (x = x.substr(0, x.length - 1) + "0"),
                    (g += x + v[2] + "/" + v[3]),
                    (x = o(y[2], _)).length < v[4].length &&
                      (x = u(v[4].substr(v[4].length - x.length)) + x),
                    (g += x)
                  );
                if ((v = p.match(/^# ([#0?]+)( ?)\/( ?)([#0?]+)/)))
                  return (
                    (_ = Math.min(Math.max(v[1].length, v[4].length), 7)),
                    O +
                      ((y = h(M, Math.pow(10, _) - 1, !0))[0] ||
                        (y[1] ? "" : "0")) +
                      " " +
                      (y[1]
                        ? r(y[1], _) + v[2] + "/" + v[3] + o(y[2], _)
                        : n(" ", 2 * _ + 1 + v[2].length + v[3].length))
                  );
                if ((v = p.match(/^[#0?]+$/)))
                  return (
                    (g = "" + f),
                    p.length <= g.length
                      ? g
                      : u(p.substr(0, p.length - g.length)) + g
                  );
                if ((v = p.match(/^([#0]+)\.([#0]+)$/))) {
                  (g =
                    "" +
                    f
                      .toFixed(Math.min(v[2].length, 10))
                      .replace(/([^0])0+$/, "$1")),
                    (_ = g.indexOf("."));
                  var z = p.indexOf(".") - _,
                    C = p.length - g.length - z;
                  return u(p.substr(0, z) + g + p.substr(p.length - C));
                }
                if ((v = p.match(/^00,000\.([#0]*0)$/)))
                  return f < 0
                    ? "-" + m(s, p, -f)
                    : w("" + f)
                        .replace(/^\d,\d{3}$/, "0$&")
                        .replace(/^\d*$/, function (t) {
                          return (
                            "00," + (t.length < 3 ? i(0, 3 - t.length) : "") + t
                          );
                        }) +
                        "." +
                        i(0, v[1].length);
                switch (p) {
                  case "###,###":
                  case "##,###":
                  case "#,###":
                    var k = w("" + M);
                    return "0" !== k ? O + k : "";
                  default:
                    if (p.match(/\.[0#?]*$/))
                      return (
                        m(s, p.slice(0, p.lastIndexOf(".")), f) +
                        u(p.slice(p.lastIndexOf(".")))
                      );
                }
                throw new Error("unsupported format |" + p + "|");
              }
              return function (t, e, n) {
                return (0 | n) === n ? m(t, e, n) : b(t, e, n);
              };
            })();
            function x(t) {
              for (var e = [], n = !1, i = 0, r = 0; i < t.length; ++i)
                switch (t.charCodeAt(i)) {
                  case 34:
                    n = !n;
                    break;
                  case 95:
                  case 42:
                  case 92:
                    ++i;
                    break;
                  case 59:
                    (e[e.length] = t.substr(r, i - r)), (r = i + 1);
                }
              if (((e[e.length] = t.substr(r)), !0 === n))
                throw new Error("Format |" + t + "| unterminated string ");
              return e;
            }
            t._split = x;
            var z = /\[[HhMmSs]*\]/;
            function C(t) {
              for (var e = 0, n = "", i = ""; e < t.length; )
                switch ((n = t.charAt(e))) {
                  case "G":
                    l(t, e) && (e += 6), e++;
                    break;
                  case '"':
                    for (; 34 !== t.charCodeAt(++e) && e < t.length; ) ++e;
                    ++e;
                    break;
                  case "\\":
                  case "_":
                    e += 2;
                    break;
                  case "@":
                    ++e;
                    break;
                  case "B":
                  case "b":
                    if ("1" === t.charAt(e + 1) || "2" === t.charAt(e + 1))
                      return !0;
                  case "M":
                  case "D":
                  case "Y":
                  case "H":
                  case "S":
                  case "E":
                  case "m":
                  case "d":
                  case "y":
                  case "h":
                  case "s":
                  case "e":
                  case "g":
                    return !0;
                  case "A":
                  case "a":
                    if ("A/P" === t.substr(e, 3).toUpperCase()) return !0;
                    if ("AM/PM" === t.substr(e, 5).toUpperCase()) return !0;
                    ++e;
                    break;
                  case "[":
                    for (i = n; "]" !== t.charAt(e++) && e < t.length; )
                      i += t.charAt(e);
                    if (i.match(z)) return !0;
                    break;
                  case ".":
                  case "0":
                  case "#":
                    for (
                      ;
                      e < t.length &&
                      ("0#?.,E+-%".indexOf((n = t.charAt(++e))) > -1 ||
                        ("\\" == n &&
                          "-" == t.charAt(e + 1) &&
                          "0#".indexOf(t.charAt(e + 2)) > -1));

                    );
                    break;
                  case "?":
                    for (; t.charAt(++e) === n; );
                    break;
                  case "*":
                    ++e, (" " != t.charAt(e) && "*" != t.charAt(e)) || ++e;
                    break;
                  case "(":
                  case ")":
                    ++e;
                    break;
                  case "1":
                  case "2":
                  case "3":
                  case "4":
                  case "5":
                  case "6":
                  case "7":
                  case "8":
                  case "9":
                    for (
                      ;
                      e < t.length && "0123456789".indexOf(t.charAt(++e)) > -1;

                    );
                    break;
                  case " ":
                  default:
                    ++e;
                }
              return !1;
            }
            function k(t, e, n, i) {
              for (
                var r, o, a, s = [], c = "", d = 0, u = "", p = "t", h = "H";
                d < t.length;

              )
                switch ((u = t.charAt(d))) {
                  case "G":
                    if (!l(t, d))
                      throw new Error(
                        "unrecognized character " + u + " in " + t
                      );
                    (s[s.length] = { t: "G", v: "General" }), (d += 7);
                    break;
                  case '"':
                    for (
                      c = "";
                      34 !== (a = t.charCodeAt(++d)) && d < t.length;

                    )
                      c += String.fromCharCode(a);
                    (s[s.length] = { t: "t", v: c }), ++d;
                    break;
                  case "\\":
                    var b = t.charAt(++d),
                      m = "(" === b || ")" === b ? b : "t";
                    (s[s.length] = { t: m, v: b }), ++d;
                    break;
                  case "_":
                    (s[s.length] = { t: "t", v: " " }), (d += 2);
                    break;
                  case "@":
                    (s[s.length] = { t: "T", v: e }), ++d;
                    break;
                  case "B":
                  case "b":
                    if ("1" === t.charAt(d + 1) || "2" === t.charAt(d + 1)) {
                      if (
                        null == r &&
                        null == (r = f(e, n, "2" === t.charAt(d + 1)))
                      )
                        return "";
                      (s[s.length] = { t: "X", v: t.substr(d, 2) }),
                        (p = u),
                        (d += 2);
                      break;
                    }
                  case "M":
                  case "D":
                  case "Y":
                  case "H":
                  case "S":
                  case "E":
                    u = u.toLowerCase();
                  case "m":
                  case "d":
                  case "y":
                  case "h":
                  case "s":
                  case "e":
                  case "g":
                    if (e < 0) return "";
                    if (null == r && null == (r = f(e, n))) return "";
                    for (
                      c = u;
                      ++d < t.length && t.charAt(d).toLowerCase() === u;

                    )
                      c += u;
                    "m" === u && "h" === p.toLowerCase() && (u = "M"),
                      "h" === u && (u = h),
                      (s[s.length] = { t: u, v: c }),
                      (p = u);
                    break;
                  case "A":
                  case "a":
                    var g = { t: u, v: u };
                    if (
                      (null == r && (r = f(e, n)),
                      "A/P" === t.substr(d, 3).toUpperCase()
                        ? (null != r && (g.v = r.H >= 12 ? "P" : "A"),
                          (g.t = "T"),
                          (h = "h"),
                          (d += 3))
                        : "AM/PM" === t.substr(d, 5).toUpperCase()
                        ? (null != r && (g.v = r.H >= 12 ? "PM" : "AM"),
                          (g.t = "T"),
                          (d += 5),
                          (h = "h"))
                        : ((g.t = "t"), ++d),
                      null == r && "T" === g.t)
                    )
                      return "";
                    (s[s.length] = g), (p = u);
                    break;
                  case "[":
                    for (c = u; "]" !== t.charAt(d++) && d < t.length; )
                      c += t.charAt(d);
                    if ("]" !== c.slice(-1))
                      throw 'unterminated "[" block: |' + c + "|";
                    if (c.match(z)) {
                      if (null == r && null == (r = f(e, n))) return "";
                      (s[s.length] = { t: "Z", v: c.toLowerCase() }),
                        (p = c.charAt(1));
                    } else
                      c.indexOf("$") > -1 &&
                        ((c = (c.match(/\$([^-\[\]]*)/) || [])[1] || "$"),
                        C(t) || (s[s.length] = { t: "t", v: c }));
                    break;
                  case ".":
                    if (null != r) {
                      for (c = u; ++d < t.length && "0" === (u = t.charAt(d)); )
                        c += u;
                      s[s.length] = { t: "s", v: c };
                      break;
                    }
                  case "0":
                  case "#":
                    for (
                      c = u;
                      (++d < t.length &&
                        "0#?.,E+-%".indexOf((u = t.charAt(d))) > -1) ||
                      ("\\" == u &&
                        "-" == t.charAt(d + 1) &&
                        d < t.length - 2 &&
                        "0#".indexOf(t.charAt(d + 2)) > -1);

                    )
                      c += u;
                    s[s.length] = { t: "n", v: c };
                    break;
                  case "?":
                    for (c = u; t.charAt(++d) === u; ) c += u;
                    (s[s.length] = { t: u, v: c }), (p = u);
                    break;
                  case "*":
                    ++d, (" " != t.charAt(d) && "*" != t.charAt(d)) || ++d;
                    break;
                  case "(":
                  case ")":
                    (s[s.length] = { t: 1 === i ? "t" : u, v: u }), ++d;
                    break;
                  case "1":
                  case "2":
                  case "3":
                  case "4":
                  case "5":
                  case "6":
                  case "7":
                  case "8":
                  case "9":
                    for (
                      c = u;
                      d < t.length && "0123456789".indexOf(t.charAt(++d)) > -1;

                    )
                      c += t.charAt(d);
                    s[s.length] = { t: "D", v: c };
                    break;
                  case " ":
                    (s[s.length] = { t: u, v: u }), ++d;
                    break;
                  default:
                    if (
                      -1 === ",$-+/():!^&'~{}<>=€acfijklopqrtuvwxzP".indexOf(u)
                    )
                      throw new Error(
                        "unrecognized character " + u + " in " + t
                      );
                    (s[s.length] = { t: "t", v: u }), ++d;
                }
              var v,
                _ = 0,
                y = 0;
              for (d = s.length - 1, p = "t"; d >= 0; --d)
                switch (s[d].t) {
                  case "h":
                  case "H":
                    (s[d].t = h), (p = "h"), _ < 1 && (_ = 1);
                    break;
                  case "s":
                    (v = s[d].v.match(/\.0+$/)) &&
                      (y = Math.max(y, v[0].length - 1)),
                      _ < 3 && (_ = 3);
                  case "d":
                  case "y":
                  case "M":
                  case "e":
                    p = s[d].t;
                    break;
                  case "m":
                    "s" === p && ((s[d].t = "M"), _ < 2 && (_ = 2));
                    break;
                  case "X":
                    break;
                  case "Z":
                    _ < 1 && s[d].v.match(/[Hh]/) && (_ = 1),
                      _ < 2 && s[d].v.match(/[Mm]/) && (_ = 2),
                      _ < 3 && s[d].v.match(/[Ss]/) && (_ = 3);
                }
              switch (_) {
                case 0:
                  break;
                case 1:
                  r.u >= 0.5 && ((r.u = 0), ++r.S),
                    r.S >= 60 && ((r.S = 0), ++r.M),
                    r.M >= 60 && ((r.M = 0), ++r.H);
                  break;
                case 2:
                  r.u >= 0.5 && ((r.u = 0), ++r.S),
                    r.S >= 60 && ((r.S = 0), ++r.M);
              }
              var w,
                x = "";
              for (d = 0; d < s.length; ++d)
                switch (s[d].t) {
                  case "t":
                  case "T":
                  case " ":
                  case "D":
                    break;
                  case "X":
                    (s[d].v = ""), (s[d].t = ";");
                    break;
                  case "d":
                  case "m":
                  case "y":
                  case "h":
                  case "H":
                  case "M":
                  case "s":
                  case "e":
                  case "b":
                  case "Z":
                    (s[d].v = O(s[d].t.charCodeAt(0), s[d].v, r, y)),
                      (s[d].t = "t");
                    break;
                  case "n":
                  case "(":
                  case "?":
                    for (
                      w = d + 1;
                      null != s[w] &&
                      ("?" === (u = s[w].t) ||
                        "D" === u ||
                        ((" " === u || "t" === u) &&
                          null != s[w + 1] &&
                          ("?" === s[w + 1].t ||
                            ("t" === s[w + 1].t && "/" === s[w + 1].v))) ||
                        ("(" === s[d].t &&
                          (" " === u || "n" === u || ")" === u)) ||
                        ("t" === u &&
                          ("/" === s[w].v ||
                            (" " === s[w].v &&
                              null != s[w + 1] &&
                              "?" == s[w + 1].t))));

                    )
                      (s[d].v += s[w].v), (s[w] = { v: "", t: ";" }), ++w;
                    (x += s[d].v), (d = w - 1);
                    break;
                  case "G":
                    (s[d].t = "t"), (s[d].v = M(e, n));
                }
              var k,
                S,
                T = "";
              if (x.length > 0) {
                40 == x.charCodeAt(0)
                  ? ((k = e < 0 && 45 === x.charCodeAt(0) ? -e : e),
                    (S = A("(", x, k)))
                  : ((S = A("n", x, (k = e < 0 && i > 1 ? -e : e))),
                    k < 0 &&
                      s[0] &&
                      "t" == s[0].t &&
                      ((S = S.substr(1)), (s[0].v = "-" + s[0].v))),
                  (w = S.length - 1);
                var D = s.length;
                for (d = 0; d < s.length; ++d)
                  if (
                    null != s[d] &&
                    "t" != s[d].t &&
                    s[d].v.indexOf(".") > -1
                  ) {
                    D = d;
                    break;
                  }
                var L = s.length;
                if (D === s.length && -1 === S.indexOf("E")) {
                  for (d = s.length - 1; d >= 0; --d)
                    null != s[d] &&
                      -1 !== "n?(".indexOf(s[d].t) &&
                      (w >= s[d].v.length - 1
                        ? ((w -= s[d].v.length),
                          (s[d].v = S.substr(w + 1, s[d].v.length)))
                        : w < 0
                        ? (s[d].v = "")
                        : ((s[d].v = S.substr(0, w + 1)), (w = -1)),
                      (s[d].t = "t"),
                      (L = d));
                  w >= 0 &&
                    L < s.length &&
                    (s[L].v = S.substr(0, w + 1) + s[L].v);
                } else if (D !== s.length && -1 === S.indexOf("E")) {
                  for (w = S.indexOf(".") - 1, d = D; d >= 0; --d)
                    if (null != s[d] && -1 !== "n?(".indexOf(s[d].t)) {
                      for (
                        o =
                          s[d].v.indexOf(".") > -1 && d === D
                            ? s[d].v.indexOf(".") - 1
                            : s[d].v.length - 1,
                          T = s[d].v.substr(o + 1);
                        o >= 0;
                        --o
                      )
                        w >= 0 &&
                          ("0" === s[d].v.charAt(o) ||
                            "#" === s[d].v.charAt(o)) &&
                          (T = S.charAt(w--) + T);
                      (s[d].v = T), (s[d].t = "t"), (L = d);
                    }
                  for (
                    w >= 0 &&
                      L < s.length &&
                      (s[L].v = S.substr(0, w + 1) + s[L].v),
                      w = S.indexOf(".") + 1,
                      d = D;
                    d < s.length;
                    ++d
                  )
                    if (
                      null != s[d] &&
                      (-1 !== "n?(".indexOf(s[d].t) || d === D)
                    ) {
                      for (
                        o =
                          s[d].v.indexOf(".") > -1 && d === D
                            ? s[d].v.indexOf(".") + 1
                            : 0,
                          T = s[d].v.substr(0, o);
                        o < s[d].v.length;
                        ++o
                      )
                        w < S.length && (T += S.charAt(w++));
                      (s[d].v = T), (s[d].t = "t"), (L = d);
                    }
                }
              }
              for (d = 0; d < s.length; ++d)
                null != s[d] &&
                  "n(?".indexOf(s[d].t) > -1 &&
                  ((k = i > 1 && e < 0 && d > 0 && "-" === s[d - 1].v ? -e : e),
                  (s[d].v = A(s[d].t, s[d].v, k)),
                  (s[d].t = "t"));
              var q = "";
              for (d = 0; d !== s.length; ++d) null != s[d] && (q += s[d].v);
              return q;
            }
            (t.is_date = C), (t._eval = k);
            var S = /\[[=<>]/,
              T = /\[(=|>[=]?|<[>=]?)(-?\d+(?:\.\d*)?)\]/;
            function D(t, e) {
              if (null == e) return !1;
              var n = parseFloat(e[2]);
              switch (e[1]) {
                case "=":
                  if (t == n) return !0;
                  break;
                case ">":
                  if (t > n) return !0;
                  break;
                case "<":
                  if (t < n) return !0;
                  break;
                case "<>":
                  if (t != n) return !0;
                  break;
                case ">=":
                  if (t >= n) return !0;
                  break;
                case "<=":
                  if (t <= n) return !0;
              }
              return !1;
            }
            function L(t, e, n) {
              null == n && (n = {});
              var i = "";
              switch (typeof t) {
                case "string":
                  i = "m/d/yy" == t && n.dateNF ? n.dateNF : t;
                  break;
                case "number":
                  i =
                    14 == t && n.dateNF
                      ? n.dateNF
                      : (null != n.table ? n.table : p)[t];
              }
              if (l(i, 0)) return M(e, n);
              e instanceof Date && (e = v(e, n.date1904));
              var r = (function (t, e) {
                var n = x(t),
                  i = n.length,
                  r = n[i - 1].indexOf("@");
                if ((i < 4 && r > -1 && --i, n.length > 4))
                  throw new Error(
                    "cannot find right format for |" + n.join("|") + "|"
                  );
                if ("number" != typeof e)
                  return [4, 4 === n.length || r > -1 ? n[n.length - 1] : "@"];
                switch (n.length) {
                  case 1:
                    n =
                      r > -1
                        ? ["General", "General", "General", n[0]]
                        : [n[0], n[0], n[0], "@"];
                    break;
                  case 2:
                    n =
                      r > -1
                        ? [n[0], n[0], n[0], n[1]]
                        : [n[0], n[1], n[0], "@"];
                    break;
                  case 3:
                    n =
                      r > -1
                        ? [n[0], n[1], n[0], n[2]]
                        : [n[0], n[1], n[2], "@"];
                }
                var o = e > 0 ? n[0] : e < 0 ? n[1] : n[2];
                if (-1 === n[0].indexOf("[") && -1 === n[1].indexOf("["))
                  return [i, o];
                if (null != n[0].match(S) || null != n[1].match(S)) {
                  var a = n[0].match(T),
                    s = n[1].match(T);
                  return D(e, a)
                    ? [i, n[0]]
                    : D(e, s)
                    ? [i, n[1]]
                    : [i, n[null != a && null != s ? 2 : 1]];
                }
                return [i, o];
              })(i, e);
              if (l(r[1])) return M(e, n);
              if (!0 === e) e = "TRUE";
              else if (!1 === e) e = "FALSE";
              else if ("" === e || null == e) return "";
              return k(r[1], e, n, r[0]);
            }
            function q(t, e) {
              if ("number" != typeof e) {
                e = +e || -1;
                for (var n = 0; n < 392; ++n)
                  if (null != p[n]) {
                    if (p[n] == t) {
                      e = n;
                      break;
                    }
                  } else e < 0 && (e = n);
                e < 0 && (e = 391);
              }
              return (p[e] = t), e;
            }
            (t.load = q),
              (t._table = p),
              (t.get_table = function () {
                return p;
              }),
              (t.load_table = function (t) {
                for (var e = 0; 392 != e; ++e) void 0 !== t[e] && q(t[e], e);
              }),
              (t.init_table = u),
              (t.format = L);
          };
        E(q);
        var j,
          P = {
            "General Number": "General",
            "General Date": q._table[22],
            "Long Date": "dddd, mmmm dd, yyyy",
            "Medium Date": q._table[15],
            "Short Date": q._table[14],
            "Long Time": q._table[19],
            "Medium Time": q._table[18],
            "Short Time": q._table[20],
            Currency: '"$"#,##0.00_);[Red]\\("$"#,##0.00\\)',
            Fixed: q._table[2],
            Standard: q._table[4],
            Percent: q._table[10],
            Scientific: q._table[11],
            "Yes/No": '"Yes";"Yes";"No";@',
            "True/False": '"True";"True";"False";@',
            "On/Off": '"Yes";"Yes";"No";@',
          },
          R = {
            5: '"$"#,##0_);\\("$"#,##0\\)',
            6: '"$"#,##0_);[Red]\\("$"#,##0\\)',
            7: '"$"#,##0.00_);\\("$"#,##0.00\\)',
            8: '"$"#,##0.00_);[Red]\\("$"#,##0.00\\)',
            23: "General",
            24: "General",
            25: "General",
            26: "General",
            27: "m/d/yy",
            28: "m/d/yy",
            29: "m/d/yy",
            30: "m/d/yy",
            31: "m/d/yy",
            32: "h:mm:ss",
            33: "h:mm:ss",
            34: "h:mm:ss",
            35: "h:mm:ss",
            36: "m/d/yy",
            41: '_(* #,##0_);_(* (#,##0);_(* "-"_);_(@_)',
            42: '_("$"* #,##0_);_("$"* (#,##0);_("$"* "-"_);_(@_)',
            43: '_(* #,##0.00_);_(* (#,##0.00);_(* "-"??_);_(@_)',
            44: '_("$"* #,##0.00_);_("$"* (#,##0.00);_("$"* "-"??_);_(@_)',
            50: "m/d/yy",
            51: "m/d/yy",
            52: "m/d/yy",
            53: "m/d/yy",
            54: "m/d/yy",
            55: "m/d/yy",
            56: "m/d/yy",
            57: "m/d/yy",
            58: "m/d/yy",
            59: "0",
            60: "0.00",
            61: "#,##0",
            62: "#,##0.00",
            63: '"$"#,##0_);\\("$"#,##0\\)',
            64: '"$"#,##0_);[Red]\\("$"#,##0\\)',
            65: '"$"#,##0.00_);\\("$"#,##0.00\\)',
            66: '"$"#,##0.00_);[Red]\\("$"#,##0.00\\)',
            67: "0%",
            68: "0.00%",
            69: "# ?/?",
            70: "# ??/??",
            71: "m/d/yy",
            72: "m/d/yy",
            73: "d-mmm-yy",
            74: "d-mmm",
            75: "mmm-yy",
            76: "h:mm",
            77: "h:mm:ss",
            78: "m/d/yy h:mm",
            79: "mm:ss",
            80: "[h]:mm:ss",
            81: "mmss.0",
          },
          I = /[dD]+|[mM]+|[yYeE]+|[Hh]+|[Ss]+/g;
        !(function (t) {
          t.version = "1.2.0";
          var e = (function () {
            for (var t = 0, e = new Array(256), n = 0; 256 != n; ++n)
              (t =
                1 &
                (t =
                  1 &
                  (t =
                    1 &
                    (t =
                      1 &
                      (t =
                        1 &
                        (t =
                          1 &
                          (t =
                            1 &
                            (t = 1 & (t = n) ? -306674912 ^ (t >>> 1) : t >>> 1)
                              ? -306674912 ^ (t >>> 1)
                              : t >>> 1)
                            ? -306674912 ^ (t >>> 1)
                            : t >>> 1)
                          ? -306674912 ^ (t >>> 1)
                          : t >>> 1)
                        ? -306674912 ^ (t >>> 1)
                        : t >>> 1)
                      ? -306674912 ^ (t >>> 1)
                      : t >>> 1)
                    ? -306674912 ^ (t >>> 1)
                    : t >>> 1)
                  ? -306674912 ^ (t >>> 1)
                  : t >>> 1),
                (e[n] = t);
            return "undefined" != typeof Int32Array ? new Int32Array(e) : e;
          })();
          (t.table = e),
            (t.bstr = function (t, n) {
              for (var i = -1 ^ n, r = t.length - 1, o = 0; o < r; )
                i =
                  ((i = (i >>> 8) ^ e[255 & (i ^ t.charCodeAt(o++))]) >>> 8) ^
                  e[255 & (i ^ t.charCodeAt(o++))];
              return (
                o === r && (i = (i >>> 8) ^ e[255 & (i ^ t.charCodeAt(o))]),
                -1 ^ i
              );
            }),
            (t.buf = function (t, n) {
              if (t.length > 1e4)
                return (function (t, n) {
                  for (var i = -1 ^ n, r = t.length - 7, o = 0; o < r; )
                    i =
                      ((i =
                        ((i =
                          ((i =
                            ((i =
                              ((i =
                                ((i =
                                  ((i = (i >>> 8) ^ e[255 & (i ^ t[o++])]) >>>
                                    8) ^
                                  e[255 & (i ^ t[o++])]) >>>
                                  8) ^
                                e[255 & (i ^ t[o++])]) >>>
                                8) ^
                              e[255 & (i ^ t[o++])]) >>>
                              8) ^
                            e[255 & (i ^ t[o++])]) >>>
                            8) ^
                          e[255 & (i ^ t[o++])]) >>>
                          8) ^
                        e[255 & (i ^ t[o++])]) >>>
                        8) ^
                      e[255 & (i ^ t[o++])];
                  for (; o < r + 7; ) i = (i >>> 8) ^ e[255 & (i ^ t[o++])];
                  return -1 ^ i;
                })(t, n);
              for (var i = -1 ^ n, r = t.length - 3, o = 0; o < r; )
                i =
                  ((i =
                    ((i =
                      ((i = (i >>> 8) ^ e[255 & (i ^ t[o++])]) >>> 8) ^
                      e[255 & (i ^ t[o++])]) >>>
                      8) ^
                    e[255 & (i ^ t[o++])]) >>>
                    8) ^
                  e[255 & (i ^ t[o++])];
              for (; o < r + 3; ) i = (i >>> 8) ^ e[255 & (i ^ t[o++])];
              return -1 ^ i;
            }),
            (t.str = function (t, n) {
              for (var i, r, o = -1 ^ n, a = 0, s = t.length; a < s; )
                (i = t.charCodeAt(a++)) < 128
                  ? (o = (o >>> 8) ^ e[255 & (o ^ i)])
                  : i < 2048
                  ? (o =
                      ((o =
                        (o >>> 8) ^ e[255 & (o ^ (192 | ((i >> 6) & 31)))]) >>>
                        8) ^
                      e[255 & (o ^ (128 | (63 & i)))])
                  : i >= 55296 && i < 57344
                  ? ((i = 64 + (1023 & i)),
                    (r = 1023 & t.charCodeAt(a++)),
                    (o =
                      ((o =
                        ((o =
                          ((o =
                            (o >>> 8) ^
                            e[255 & (o ^ (240 | ((i >> 8) & 7)))]) >>>
                            8) ^
                          e[255 & (o ^ (128 | ((i >> 2) & 63)))]) >>>
                          8) ^
                        e[
                          255 & (o ^ (128 | ((r >> 6) & 15) | ((3 & i) << 4)))
                        ]) >>>
                        8) ^
                      e[255 & (o ^ (128 | (63 & r)))]))
                  : (o =
                      ((o =
                        ((o =
                          (o >>> 8) ^
                          e[255 & (o ^ (224 | ((i >> 12) & 15)))]) >>>
                          8) ^
                        e[255 & (o ^ (128 | ((i >> 6) & 63)))]) >>>
                        8) ^
                      e[255 & (o ^ (128 | (63 & i)))]);
              return -1 ^ o;
            });
        })((j = {}));
        var W,
          N = (function () {
            var t,
              e = {};
            function i(t) {
              if ("/" == t.charAt(t.length - 1))
                return -1 === t.slice(0, -1).indexOf("/")
                  ? t
                  : i(t.slice(0, -1));
              var e = t.lastIndexOf("/");
              return -1 === e ? t : t.slice(0, e + 1);
            }
            function r(t) {
              if ("/" == t.charAt(t.length - 1)) return r(t.slice(0, -1));
              var e = t.lastIndexOf("/");
              return -1 === e ? t : t.slice(e + 1);
            }
            function o(t, e) {
              "string" == typeof e && (e = new Date(e));
              var n = e.getHours();
              (n =
                ((n = (n << 6) | e.getMinutes()) << 5) |
                (e.getSeconds() >>> 1)),
                t.write_shift(2, n);
              var i = e.getFullYear() - 1980;
              (i = ((i = (i << 4) | (e.getMonth() + 1)) << 5) | e.getDate()),
                t.write_shift(2, i);
            }
            function a(t) {
              Ee(t, 0);
              for (var e = {}, n = 0; t.l <= t.length - 4; ) {
                var i = t.read_shift(2),
                  r = t.read_shift(2),
                  o = t.l + r,
                  a = {};
                switch (i) {
                  case 21589:
                    1 & (n = t.read_shift(1)) && (a.mtime = t.read_shift(4)),
                      r > 5 &&
                        (2 & n && (a.atime = t.read_shift(4)),
                        4 & n && (a.ctime = t.read_shift(4))),
                      a.mtime && (a.mt = new Date(1e3 * a.mtime));
                }
                (t.l = o), (e[i] = a);
              }
              return e;
            }
            function s() {
              return t || (t = n(599));
            }
            function l(t, e) {
              if (80 == t[0] && 75 == t[1]) return ct(t, e);
              if (t.length < 512)
                throw new Error("CFB file size " + t.length + " < 512");
              var n,
                i,
                r,
                o,
                a,
                s,
                l = 512,
                p = [],
                h = t.slice(0, 512);
              Ee(h, 0);
              var f = (function (t) {
                if (80 == t[t.l] && 75 == t[t.l + 1]) return [0, 0];
                t.chk(v, "Header Signature: "), (t.l += 16);
                var e = t.read_shift(2, "u");
                return [t.read_shift(2, "u"), e];
              })(h);
              switch ((n = f[0])) {
                case 3:
                  l = 512;
                  break;
                case 4:
                  l = 4096;
                  break;
                case 0:
                  if (0 == f[1]) return ct(t, e);
                default:
                  throw new Error("Major Version: Expected 3 or 4 saw " + n);
              }
              512 !== l && Ee((h = t.slice(0, l)), 28);
              var b = t.slice(0, l);
              !(function (t, e) {
                var n;
                switch (((t.l += 2), (n = t.read_shift(2)))) {
                  case 9:
                    if (3 != e)
                      throw new Error("Sector Shift: Expected 9 saw " + n);
                    break;
                  case 12:
                    if (4 != e)
                      throw new Error("Sector Shift: Expected 12 saw " + n);
                    break;
                  default:
                    throw new Error("Sector Shift: Expected 9 or 12 saw " + n);
                }
                t.chk("0600", "Mini Sector Shift: "),
                  t.chk("000000000000", "Reserved: ");
              })(h, n);
              var m = h.read_shift(4, "i");
              if (3 === n && 0 !== m)
                throw new Error("# Directory Sectors: Expected 0 saw " + m);
              (h.l += 4),
                (o = h.read_shift(4, "i")),
                (h.l += 4),
                h.chk("00100000", "Mini Stream Cutoff Size: "),
                (a = h.read_shift(4, "i")),
                (i = h.read_shift(4, "i")),
                (s = h.read_shift(4, "i")),
                (r = h.read_shift(4, "i"));
              for (
                var _ = -1, y = 0;
                y < 109 && !((_ = h.read_shift(4, "i")) < 0);
                ++y
              )
                p[y] = _;
              var M = (function (t, e) {
                for (
                  var n = Math.ceil(t.length / e) - 1, i = [], r = 1;
                  r < n;
                  ++r
                )
                  i[r - 1] = t.slice(r * e, (r + 1) * e);
                return (i[n - 1] = t.slice(n * e)), i;
              })(t, l);
              !(function t(e, n, i, r, o) {
                var a = g;
                if (e === g) {
                  if (0 !== n)
                    throw new Error("DIFAT chain shorter than expected");
                } else if (-1 !== e) {
                  var s = i[e],
                    l = (r >>> 2) - 1;
                  if (!s) return;
                  for (var c = 0; c < l && (a = ke(s, 4 * c)) !== g; ++c)
                    o.push(a);
                  t(ke(s, r - 4), n - 1, i, r, o);
                }
              })(s, r, M, l, p);
              var O = (function (t, e, n, i) {
                var r = t.length,
                  o = [],
                  a = [],
                  s = [],
                  l = [],
                  c = i - 1,
                  d = 0,
                  u = 0,
                  p = 0,
                  h = 0;
                for (d = 0; d < r; ++d)
                  if (((s = []), (p = d + e) >= r && (p -= r), !a[p])) {
                    for (l = [], u = p; u >= 0; ) {
                      (a[u] = !0), (s[s.length] = u), l.push(t[u]);
                      var f = n[Math.floor((4 * u) / i)];
                      if (i < 4 + (h = (4 * u) & c))
                        throw new Error(
                          "FAT boundary crossed: " + u + " 4 " + i
                        );
                      if (!t[f]) break;
                      u = ke(t[f], h);
                    }
                    o[p] = { nodes: s, data: oe([l]) };
                  }
                return o;
              })(M, o, p, l);
              (O[o].name = "!Directory"),
                i > 0 && a !== g && (O[a].name = "!MiniFAT"),
                (O[p[0]].name = "!FAT"),
                (O.fat_addrs = p),
                (O.ssz = l);
              var w = [],
                A = [],
                x = [];
              !(function (t, e, n, i, r, o, a, s) {
                for (
                  var l,
                    p = 0,
                    h = i.length ? 2 : 0,
                    f = e[t].data,
                    b = 0,
                    m = 0;
                  b < f.length;
                  b += 128
                ) {
                  var v = f.slice(b, b + 128);
                  Ee(v, 64),
                    (m = v.read_shift(2)),
                    (l = se(v, 0, m - h)),
                    i.push(l);
                  var _ = {
                    name: l,
                    type: v.read_shift(1),
                    color: v.read_shift(1),
                    L: v.read_shift(4, "i"),
                    R: v.read_shift(4, "i"),
                    C: v.read_shift(4, "i"),
                    clsid: v.read_shift(16),
                    state: v.read_shift(4, "i"),
                    start: 0,
                    size: 0,
                  };
                  0 !==
                    v.read_shift(2) +
                      v.read_shift(2) +
                      v.read_shift(2) +
                      v.read_shift(2) && (_.ct = u(v, v.l - 8)),
                    0 !==
                      v.read_shift(2) +
                        v.read_shift(2) +
                        v.read_shift(2) +
                        v.read_shift(2) && (_.mt = u(v, v.l - 8)),
                    (_.start = v.read_shift(4, "i")),
                    (_.size = v.read_shift(4, "i")),
                    _.size < 0 &&
                      _.start < 0 &&
                      ((_.size = _.type = 0), (_.start = g), (_.name = "")),
                    5 === _.type
                      ? ((p = _.start),
                        r > 0 && p !== g && (e[p].name = "!StreamData"))
                      : _.size >= 4096
                      ? ((_.storage = "fat"),
                        void 0 === e[_.start] &&
                          (e[_.start] = d(n, _.start, e.fat_addrs, e.ssz)),
                        (e[_.start].name = _.name),
                        (_.content = e[_.start].data.slice(0, _.size)))
                      : ((_.storage = "minifat"),
                        _.size < 0
                          ? (_.size = 0)
                          : p !== g &&
                            _.start !== g &&
                            e[p] &&
                            (_.content = c(_, e[p].data, (e[s] || {}).data))),
                    _.content && Ee(_.content, 0),
                    (o[l] = _),
                    a.push(_);
                }
              })(o, O, M, w, i, {}, A, a),
                (function (t, e, n) {
                  for (
                    var i = 0,
                      r = 0,
                      o = 0,
                      a = 0,
                      s = 0,
                      l = n.length,
                      c = [],
                      d = [];
                    i < l;
                    ++i
                  )
                    (c[i] = d[i] = i), (e[i] = n[i]);
                  for (; s < d.length; ++s)
                    (r = t[(i = d[s])].L),
                      (o = t[i].R),
                      (a = t[i].C),
                      c[i] === i &&
                        (-1 !== r && c[r] !== r && (c[i] = c[r]),
                        -1 !== o && c[o] !== o && (c[i] = c[o])),
                      -1 !== a && (c[a] = i),
                      -1 !== r &&
                        i != c[i] &&
                        ((c[r] = c[i]), d.lastIndexOf(r) < s && d.push(r)),
                      -1 !== o &&
                        i != c[i] &&
                        ((c[o] = c[i]), d.lastIndexOf(o) < s && d.push(o));
                  for (i = 1; i < l; ++i)
                    c[i] === i &&
                      (-1 !== o && c[o] !== o
                        ? (c[i] = c[o])
                        : -1 !== r && c[r] !== r && (c[i] = c[r]));
                  for (i = 1; i < l; ++i)
                    if (0 !== t[i].type) {
                      if ((s = i) != c[s])
                        do {
                          (s = c[s]), (e[i] = e[s] + "/" + e[i]);
                        } while (0 !== s && -1 !== c[s] && s != c[s]);
                      c[i] = -1;
                    }
                  for (e[0] += "/", i = 1; i < l; ++i)
                    2 !== t[i].type && (e[i] += "/");
                })(A, x, w),
                w.shift();
              var z = { FileIndex: A, FullPaths: x };
              return e && e.raw && (z.raw = { header: b, sectors: M }), z;
            }
            function c(t, e, n) {
              for (
                var i = t.start, r = t.size, o = [], a = i;
                n && r > 0 && a >= 0;

              )
                o.push(e.slice(a * m, a * m + m)), (r -= m), (a = ke(n, 4 * a));
              return 0 === o.length ? Pe(0) : T(o).slice(0, t.size);
            }
            function d(t, e, n, i, r) {
              var o = [],
                a = [];
              r || (r = []);
              var s = i - 1,
                l = 0,
                c = 0;
              for (l = e; l >= 0; ) {
                (r[l] = !0), (o[o.length] = l), a.push(t[l]);
                var d = n[Math.floor((4 * l) / i)];
                if (i < 4 + (c = (4 * l) & s))
                  throw new Error("FAT boundary crossed: " + l + " 4 " + i);
                if (!t[d]) break;
                l = ke(t[d], c);
              }
              return { nodes: o, data: oe([a]) };
            }
            function u(t, e) {
              return new Date(
                1e3 *
                  ((Ce(t, e + 4) / 1e7) * Math.pow(2, 32) +
                    Ce(t, e) / 1e7 -
                    11644473600)
              );
            }
            function p(t, e) {
              var n = e || {},
                i = n.root || "Root Entry";
              if (
                (t.FullPaths || (t.FullPaths = []),
                t.FileIndex || (t.FileIndex = []),
                t.FullPaths.length !== t.FileIndex.length)
              )
                throw new Error("inconsistent CFB structure");
              0 === t.FullPaths.length &&
                ((t.FullPaths[0] = i + "/"),
                (t.FileIndex[0] = { name: i, type: 5 })),
                n.CLSID && (t.FileIndex[0].clsid = n.CLSID),
                (function (t) {
                  var e = "Sh33tJ5";
                  if (!N.find(t, "/" + e)) {
                    var n = Pe(4);
                    (n[0] = 55),
                      (n[1] = n[3] = 50),
                      (n[2] = 54),
                      t.FileIndex.push({
                        name: e,
                        type: 2,
                        content: n,
                        size: 4,
                        L: 69,
                        R: 69,
                        C: 69,
                      }),
                      t.FullPaths.push(t.FullPaths[0] + e),
                      h(t);
                  }
                })(t);
            }
            function h(t, e) {
              p(t);
              for (
                var n = !1, o = !1, a = t.FullPaths.length - 1;
                a >= 0;
                --a
              ) {
                var s = t.FileIndex[a];
                switch (s.type) {
                  case 0:
                    o ? (n = !0) : (t.FileIndex.pop(), t.FullPaths.pop());
                    break;
                  case 1:
                  case 2:
                  case 5:
                    (o = !0),
                      isNaN(s.R * s.L * s.C) && (n = !0),
                      s.R > -1 && s.L > -1 && s.R == s.L && (n = !0);
                    break;
                  default:
                    n = !0;
                }
              }
              if (n || e) {
                var l = new Date(1987, 1, 19),
                  c = 0,
                  d = [];
                for (a = 0; a < t.FullPaths.length; ++a)
                  0 !== t.FileIndex[a].type &&
                    d.push([t.FullPaths[a], t.FileIndex[a]]);
                for (a = 0; a < d.length; ++a) {
                  var u = i(d[a][0]);
                  for (o = !1, c = 0; c < d.length; ++c)
                    d[c][0] === u && (o = !0);
                  o ||
                    d.push([
                      u,
                      {
                        name: r(u).replace("/", ""),
                        type: 1,
                        clsid: O,
                        ct: l,
                        mt: l,
                        content: null,
                      },
                    ]);
                }
                for (
                  d.sort(function (t, e) {
                    return (function (t, e) {
                      for (
                        var n = t.split("/"),
                          i = e.split("/"),
                          r = 0,
                          o = 0,
                          a = Math.min(n.length, i.length);
                        r < a;
                        ++r
                      ) {
                        if ((o = n[r].length - i[r].length)) return o;
                        if (n[r] != i[r]) return n[r] < i[r] ? -1 : 1;
                      }
                      return n.length - i.length;
                    })(t[0], e[0]);
                  }),
                    t.FullPaths = [],
                    t.FileIndex = [],
                    a = 0;
                  a < d.length;
                  ++a
                )
                  (t.FullPaths[a] = d[a][0]), (t.FileIndex[a] = d[a][1]);
                for (a = 0; a < d.length; ++a) {
                  var h = t.FileIndex[a],
                    f = t.FullPaths[a];
                  if (
                    ((h.name = r(f).replace("/", "")),
                    (h.L = h.R = h.C = -(h.color = 1)),
                    (h.size = h.content ? h.content.length : 0),
                    (h.start = 0),
                    (h.clsid = h.clsid || O),
                    0 === a)
                  )
                    (h.C = d.length > 1 ? 1 : -1), (h.size = 0), (h.type = 5);
                  else if ("/" == f.slice(-1)) {
                    for (
                      c = a + 1;
                      c < d.length && i(t.FullPaths[c]) != f;
                      ++c
                    );
                    for (
                      h.C = c >= d.length ? -1 : c, c = a + 1;
                      c < d.length && i(t.FullPaths[c]) != i(f);
                      ++c
                    );
                    (h.R = c >= d.length ? -1 : c), (h.type = 1);
                  } else
                    i(t.FullPaths[a + 1] || "") == i(f) && (h.R = a + 1),
                      (h.type = 2);
                }
              }
            }
            function f(t, e) {
              var n = e || {};
              if ((h(t), "zip" == n.fileType))
                return (function (t, e) {
                  var n,
                    i = e || {},
                    r = [],
                    a = [],
                    s = Pe(1),
                    l = i.compression ? 8 : 0,
                    c = 0,
                    d = 0,
                    u = 0,
                    p = 0,
                    h = t.FullPaths[0],
                    f = h,
                    m = t.FileIndex[0],
                    g = [],
                    v = 0;
                  for (c = 1; c < t.FullPaths.length; ++c)
                    if (
                      ((f = t.FullPaths[c].slice(h.length)),
                      (m = t.FileIndex[c]).size && m.content && "Sh33tJ5" != f)
                    ) {
                      var _ = u,
                        y = Pe(f.length);
                      for (d = 0; d < f.length; ++d)
                        y.write_shift(1, 127 & f.charCodeAt(d));
                      (y = y.slice(0, y.l)), (g[p] = j.buf(m.content, 0));
                      var M = m.content;
                      8 == l && ((n = M), (M = b ? b.deflateRawSync(n) : K(n))),
                        (s = Pe(30)).write_shift(4, 67324752),
                        s.write_shift(2, 20),
                        s.write_shift(2, 0),
                        s.write_shift(2, l),
                        m.mt ? o(s, m.mt) : s.write_shift(4, 0),
                        s.write_shift(-4, g[p]),
                        s.write_shift(4, M.length),
                        s.write_shift(4, m.content.length),
                        s.write_shift(2, y.length),
                        s.write_shift(2, 0),
                        (u += s.length),
                        r.push(s),
                        (u += y.length),
                        r.push(y),
                        (u += M.length),
                        r.push(M),
                        (s = Pe(46)).write_shift(4, 33639248),
                        s.write_shift(2, 0),
                        s.write_shift(2, 20),
                        s.write_shift(2, 0),
                        s.write_shift(2, l),
                        s.write_shift(4, 0),
                        s.write_shift(-4, g[p]),
                        s.write_shift(4, M.length),
                        s.write_shift(4, m.content.length),
                        s.write_shift(2, y.length),
                        s.write_shift(2, 0),
                        s.write_shift(2, 0),
                        s.write_shift(2, 0),
                        s.write_shift(2, 0),
                        s.write_shift(4, 0),
                        s.write_shift(4, _),
                        (v += s.l),
                        a.push(s),
                        (v += y.length),
                        a.push(y),
                        ++p;
                    }
                  return (
                    (s = Pe(22)).write_shift(4, 101010256),
                    s.write_shift(2, 0),
                    s.write_shift(2, 0),
                    s.write_shift(2, p),
                    s.write_shift(2, p),
                    s.write_shift(4, v),
                    s.write_shift(4, u),
                    s.write_shift(2, 0),
                    T([T(r), T(a), s])
                  );
                })(t, n);
              var i = (function (t) {
                  for (var e = 0, n = 0, i = 0; i < t.FileIndex.length; ++i) {
                    var r = t.FileIndex[i];
                    if (r.content) {
                      var o = r.content.length;
                      o > 0 &&
                        (o < 4096
                          ? (e += (o + 63) >> 6)
                          : (n += (o + 511) >> 9));
                    }
                  }
                  for (
                    var a = (t.FullPaths.length + 3) >> 2,
                      s = (e + 127) >> 7,
                      l = ((e + 7) >> 3) + n + a + s,
                      c = (l + 127) >> 7,
                      d = c <= 109 ? 0 : Math.ceil((c - 109) / 127);
                    (l + c + d + 127) >> 7 > c;

                  )
                    d = ++c <= 109 ? 0 : Math.ceil((c - 109) / 127);
                  var u = [1, d, c, s, a, n, e, 0];
                  return (
                    (t.FileIndex[0].size = e << 6),
                    (u[7] =
                      (t.FileIndex[0].start =
                        u[0] + u[1] + u[2] + u[3] + u[4] + u[5]) +
                      ((u[6] + 7) >> 3)),
                    u
                  );
                })(t),
                r = Pe(i[7] << 9),
                a = 0,
                s = 0;
              for (a = 0; a < 8; ++a) r.write_shift(1, _[a]);
              for (a = 0; a < 8; ++a) r.write_shift(2, 0);
              for (
                r.write_shift(2, 62),
                  r.write_shift(2, 3),
                  r.write_shift(2, 65534),
                  r.write_shift(2, 9),
                  r.write_shift(2, 6),
                  a = 0;
                a < 3;
                ++a
              )
                r.write_shift(2, 0);
              for (
                r.write_shift(4, 0),
                  r.write_shift(4, i[2]),
                  r.write_shift(4, i[0] + i[1] + i[2] + i[3] - 1),
                  r.write_shift(4, 0),
                  r.write_shift(4, 4096),
                  r.write_shift(4, i[3] ? i[0] + i[1] + i[2] - 1 : g),
                  r.write_shift(4, i[3]),
                  r.write_shift(-4, i[1] ? i[0] - 1 : g),
                  r.write_shift(4, i[1]),
                  a = 0;
                a < 109;
                ++a
              )
                r.write_shift(-4, a < i[2] ? i[1] + a : -1);
              if (i[1])
                for (s = 0; s < i[1]; ++s) {
                  for (; a < 236 + 127 * s; ++a)
                    r.write_shift(-4, a < i[2] ? i[1] + a : -1);
                  r.write_shift(-4, s === i[1] - 1 ? g : s + 1);
                }
              var l = function (t) {
                for (s += t; a < s - 1; ++a) r.write_shift(-4, a + 1);
                t && (++a, r.write_shift(-4, g));
              };
              for (s = a = 0, s += i[1]; a < s; ++a)
                r.write_shift(-4, w.DIFSECT);
              for (s += i[2]; a < s; ++a) r.write_shift(-4, w.FATSECT);
              l(i[3]), l(i[4]);
              for (
                var c = 0, d = 0, u = t.FileIndex[0];
                c < t.FileIndex.length;
                ++c
              )
                (u = t.FileIndex[c]).content &&
                  ((d = u.content.length) < 4096 ||
                    ((u.start = s), l((d + 511) >> 9)));
              for (l((i[6] + 7) >> 3); 511 & r.l; )
                r.write_shift(-4, w.ENDOFCHAIN);
              for (s = a = 0, c = 0; c < t.FileIndex.length; ++c)
                (u = t.FileIndex[c]).content &&
                  (!(d = u.content.length) ||
                    d >= 4096 ||
                    ((u.start = s), l((d + 63) >> 6)));
              for (; 511 & r.l; ) r.write_shift(-4, w.ENDOFCHAIN);
              for (a = 0; a < i[4] << 2; ++a) {
                var p = t.FullPaths[a];
                if (p && 0 !== p.length) {
                  (u = t.FileIndex[a]),
                    0 === a && (u.start = u.size ? u.start - 1 : g);
                  var f = (0 === a && n.root) || u.name;
                  if (
                    ((d = 2 * (f.length + 1)),
                    r.write_shift(64, f, "utf16le"),
                    r.write_shift(2, d),
                    r.write_shift(1, u.type),
                    r.write_shift(1, u.color),
                    r.write_shift(-4, u.L),
                    r.write_shift(-4, u.R),
                    r.write_shift(-4, u.C),
                    u.clsid)
                  )
                    r.write_shift(16, u.clsid, "hex");
                  else for (c = 0; c < 4; ++c) r.write_shift(4, 0);
                  r.write_shift(4, u.state || 0),
                    r.write_shift(4, 0),
                    r.write_shift(4, 0),
                    r.write_shift(4, 0),
                    r.write_shift(4, 0),
                    r.write_shift(4, u.start),
                    r.write_shift(4, u.size),
                    r.write_shift(4, 0);
                } else {
                  for (c = 0; c < 17; ++c) r.write_shift(4, 0);
                  for (c = 0; c < 3; ++c) r.write_shift(4, -1);
                  for (c = 0; c < 12; ++c) r.write_shift(4, 0);
                }
              }
              for (a = 1; a < t.FileIndex.length; ++a)
                if ((u = t.FileIndex[a]).size >= 4096) {
                  for (r.l = (u.start + 1) << 9, c = 0; c < u.size; ++c)
                    r.write_shift(1, u.content[c]);
                  for (; 511 & c; ++c) r.write_shift(1, 0);
                }
              for (a = 1; a < t.FileIndex.length; ++a)
                if ((u = t.FileIndex[a]).size > 0 && u.size < 4096) {
                  for (c = 0; c < u.size; ++c) r.write_shift(1, u.content[c]);
                  for (; 63 & c; ++c) r.write_shift(1, 0);
                }
              for (; r.l < r.length; ) r.write_shift(1, 0);
              return r;
            }
            e.version = "1.1.2";
            var b,
              m = 64,
              g = -2,
              v = "d0cf11e0a1b11ae1",
              _ = [208, 207, 17, 224, 161, 177, 26, 225],
              O = "00000000000000000000000000000000",
              w = {
                MAXREGSECT: -6,
                DIFSECT: -4,
                FATSECT: -3,
                ENDOFCHAIN: g,
                FREESECT: -1,
                HEADER_SIGNATURE: v,
                HEADER_MINOR_VERSION: "3e00",
                MAXREGSID: -6,
                NOSTREAM: -1,
                HEADER_CLSID: O,
                EntryTypes: [
                  "unknown",
                  "storage",
                  "stream",
                  "lockbytes",
                  "property",
                  "root",
                ],
              };
            function C(t) {
              for (var e = new Array(t.length), n = 0; n < t.length; ++n)
                e[n] = String.fromCharCode(t[n]);
              return e.join("");
            }
            for (
              var k,
                S,
                q = [
                  16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1,
                  15,
                ],
                E = [
                  3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35,
                  43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258,
                ],
                P = [
                  1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193,
                  257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193,
                  12289, 16385, 24577,
                ],
                R = "undefined" != typeof Uint8Array,
                I = R ? new Uint8Array(256) : [],
                W = 0;
              W < 256;
              ++W
            )
              I[W] =
                255 &
                (((S =
                  (139536 & (((k = W) << 1) | (k << 11))) |
                  (558144 & ((k << 5) | (k << 15)))) >>
                  16) |
                  (S >> 8) |
                  S);
            function B(t, e) {
              var n = I[255 & t];
              return e <= 8
                ? n >>> (8 - e)
                : ((n = (n << 8) | I[(t >> 8) & 255]),
                  e <= 16
                    ? n >>> (16 - e)
                    : (n = (n << 8) | I[(t >> 16) & 255]) >>> (24 - e));
            }
            function F(t, e) {
              var n = 7 & e,
                i = e >>> 3;
              return ((t[i] | (n <= 6 ? 0 : t[i + 1] << 8)) >>> n) & 3;
            }
            function $(t, e) {
              var n = 7 & e,
                i = e >>> 3;
              return ((t[i] | (n <= 5 ? 0 : t[i + 1] << 8)) >>> n) & 7;
            }
            function H(t, e) {
              var n = 7 & e,
                i = e >>> 3;
              return ((t[i] | (n <= 3 ? 0 : t[i + 1] << 8)) >>> n) & 31;
            }
            function Y(t, e) {
              var n = 7 & e,
                i = e >>> 3;
              return ((t[i] | (n <= 1 ? 0 : t[i + 1] << 8)) >>> n) & 127;
            }
            function U(t, e, n) {
              var i = 7 & e,
                r = e >>> 3,
                o = (1 << n) - 1,
                a = t[r] >>> i;
              return n < 8 - i
                ? a & o
                : ((a |= t[r + 1] << (8 - i)),
                  n < 16 - i
                    ? a & o
                    : ((a |= t[r + 2] << (16 - i)),
                      n < 24 - i ? a & o : (a |= t[r + 3] << (24 - i)) & o));
            }
            function X(t, e) {
              var n = t.length,
                i = 2 * n > e ? 2 * n : e + 5,
                r = 0;
              if (n >= e) return t;
              if (M) {
                var o = x(i);
                if (t.copy) t.copy(o);
                else for (; r < t.length; ++r) o[r] = t[r];
                return o;
              }
              if (R) {
                var a = new Uint8Array(i);
                if (a.set) a.set(t);
                else for (; r < t.length; ++r) a[r] = t[r];
                return a;
              }
              return (t.length = i), t;
            }
            function V(t) {
              for (var e = new Array(t), n = 0; n < t; ++n) e[n] = 0;
              return e;
            }
            var G,
              K =
                ((G = function (t, e) {
                  for (var n = 0; n < t.length; ) {
                    var i = Math.min(65535, t.length - n),
                      r = n + i == t.length;
                    for (
                      e.write_shift(1, +r),
                        e.write_shift(2, i),
                        e.write_shift(2, 65535 & ~i);
                      i-- > 0;

                    )
                      e[e.l++] = t[n++];
                  }
                  return e.l;
                }),
                function (t) {
                  var e = Pe(50 + Math.floor(1.1 * t.length)),
                    n = G(t, e);
                  return e.slice(0, n);
                });
            function Z(t, e, n) {
              var i = 1,
                r = 0,
                o = 0,
                a = 0,
                s = 0,
                l = t.length,
                c = R ? new Uint16Array(32) : V(32);
              for (o = 0; o < 32; ++o) c[o] = 0;
              for (o = l; o < n; ++o) t[o] = 0;
              l = t.length;
              var d = R ? new Uint16Array(l) : V(l);
              for (o = 0; o < l; ++o)
                c[(r = t[o])]++, i < r && (i = r), (d[o] = 0);
              for (c[0] = 0, o = 1; o <= i; ++o)
                c[o + 16] = s = (s + c[o - 1]) << 1;
              for (o = 0; o < l; ++o) 0 != (s = t[o]) && (d[o] = c[s + 16]++);
              var u = 0;
              for (o = 0; o < l; ++o)
                if (0 != (u = t[o]))
                  for (
                    s = B(d[o], i) >> (i - u), a = (1 << (i + 4 - u)) - 1;
                    a >= 0;
                    --a
                  )
                    e[s | (a << u)] = (15 & u) | (o << 4);
              return i;
            }
            var J = R ? new Uint16Array(512) : V(512),
              Q = R ? new Uint16Array(32) : V(32);
            if (!R) {
              for (var tt = 0; tt < 512; ++tt) J[tt] = 0;
              for (tt = 0; tt < 32; ++tt) Q[tt] = 0;
            }
            !(function () {
              for (var t = [], e = 0; e < 32; e++) t.push(5);
              Z(t, Q, 32);
              var n = [];
              for (e = 0; e <= 143; e++) n.push(8);
              for (; e <= 255; e++) n.push(9);
              for (; e <= 279; e++) n.push(7);
              for (; e <= 287; e++) n.push(8);
              Z(n, J, 288);
            })();
            var et = R ? new Uint16Array(32768) : V(32768),
              nt = R ? new Uint16Array(32768) : V(32768),
              it = R ? new Uint16Array(128) : V(128),
              rt = 1,
              ot = 1;
            function at(t, e) {
              var n = H(t, e) + 257,
                i = H(t, (e += 5)) + 1,
                r =
                  (function (t, e) {
                    var n = 7 & e,
                      i = e >>> 3;
                    return ((t[i] | (n <= 4 ? 0 : t[i + 1] << 8)) >>> n) & 15;
                  })(t, (e += 5)) + 4;
              e += 4;
              for (
                var o = 0,
                  a = R ? new Uint8Array(19) : V(19),
                  s = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                  l = 1,
                  c = R ? new Uint8Array(8) : V(8),
                  d = R ? new Uint8Array(8) : V(8),
                  u = a.length,
                  p = 0;
                p < r;
                ++p
              )
                (a[q[p]] = o = $(t, e)), l < o && (l = o), c[o]++, (e += 3);
              var h = 0;
              for (c[0] = 0, p = 1; p <= l; ++p) d[p] = h = (h + c[p - 1]) << 1;
              for (p = 0; p < u; ++p) 0 != (h = a[p]) && (s[p] = d[h]++);
              var f = 0;
              for (p = 0; p < u; ++p)
                if (0 != (f = a[p])) {
                  h = I[s[p]] >> (8 - f);
                  for (var b = (1 << (7 - f)) - 1; b >= 0; --b)
                    it[h | (b << f)] = (7 & f) | (p << 3);
                }
              var m = [];
              for (l = 1; m.length < n + i; )
                switch (((e += 7 & (h = it[Y(t, e)])), (h >>>= 3))) {
                  case 16:
                    for (
                      o = 3 + F(t, e), e += 2, h = m[m.length - 1];
                      o-- > 0;

                    )
                      m.push(h);
                    break;
                  case 17:
                    for (o = 3 + $(t, e), e += 3; o-- > 0; ) m.push(0);
                    break;
                  case 18:
                    for (o = 11 + Y(t, e), e += 7; o-- > 0; ) m.push(0);
                    break;
                  default:
                    m.push(h), l < h && (l = h);
                }
              var g = m.slice(0, n),
                v = m.slice(n);
              for (p = n; p < 286; ++p) g[p] = 0;
              for (p = i; p < 30; ++p) v[p] = 0;
              return (rt = Z(g, et, 286)), (ot = Z(v, nt, 30)), e;
            }
            function st(t, e) {
              var n = (function (t, e) {
                if (3 == t[0] && !(3 & t[1])) return [A(e), 2];
                for (
                  var n = 0,
                    i = 0,
                    r = x(e || 1 << 18),
                    o = 0,
                    a = r.length >>> 0,
                    s = 0,
                    l = 0;
                  0 == (1 & i);

                )
                  if (((i = $(t, n)), (n += 3), i >>> 1 != 0))
                    for (
                      i >>> 1 == 1
                        ? ((s = 9), (l = 5))
                        : ((n = at(t, n)), (s = rt), (l = ot)),
                        !e &&
                          a < o + 32767 &&
                          (a = (r = X(r, o + 32767)).length);
                      ;

                    ) {
                      var c = U(t, n, s),
                        d = i >>> 1 == 1 ? J[c] : et[c];
                      if (((n += 15 & d), 0 == (((d >>>= 4) >>> 8) & 255)))
                        r[o++] = d;
                      else {
                        if (256 == d) break;
                        var u = (d -= 257) < 8 ? 0 : (d - 4) >> 2;
                        u > 5 && (u = 0);
                        var p = o + E[d];
                        u > 0 && ((p += U(t, n, u)), (n += u)),
                          (c = U(t, n, l)),
                          (n += 15 & (d = i >>> 1 == 1 ? Q[c] : nt[c]));
                        var h = (d >>>= 4) < 4 ? 0 : (d - 2) >> 1,
                          f = P[d];
                        for (
                          h > 0 && ((f += U(t, n, h)), (n += h)),
                            !e && a < p && (a = (r = X(r, p)).length);
                          o < p;

                        )
                          (r[o] = r[o - f]), ++o;
                      }
                    }
                  else {
                    7 & n && (n += 8 - (7 & n));
                    var b = t[n >>> 3] | (t[1 + (n >>> 3)] << 8);
                    if (
                      ((n += 32),
                      !e && a < o + b && (a = (r = X(r, o + b)).length),
                      "function" == typeof t.copy)
                    )
                      t.copy(r, o, n >>> 3, (n >>> 3) + b),
                        (o += b),
                        (n += 8 * b);
                    else for (; b-- > 0; ) (r[o++] = t[n >>> 3]), (n += 8);
                  }
                return [e ? r : r.slice(0, o), (n + 7) >>> 3];
              })(t.slice(t.l || 0), e);
              return (t.l += n[1]), n[0];
            }
            function lt(t, e) {
              if (!t) throw new Error(e);
            }
            function ct(t, e) {
              var n = t;
              Ee(n, 0);
              var i = { FileIndex: [], FullPaths: [] };
              p(i, { root: e.root });
              for (
                var r = n.length - 4;
                (80 != n[r] ||
                  75 != n[r + 1] ||
                  5 != n[r + 2] ||
                  6 != n[r + 3]) &&
                r >= 0;

              )
                --r;
              (n.l = r + 4), (n.l += 4);
              var o = n.read_shift(2);
              n.l += 6;
              var s = n.read_shift(4);
              for (n.l = s, r = 0; r < o; ++r) {
                n.l += 20;
                var l = n.read_shift(4),
                  c = n.read_shift(4),
                  d = n.read_shift(2),
                  u = n.read_shift(2),
                  h = n.read_shift(2);
                n.l += 8;
                var f = n.read_shift(4),
                  b = a(n.slice(n.l + d, n.l + d + u));
                n.l += d + u + h;
                var m = n.l;
                (n.l = f + 4), dt(n, l, c, i, b), (n.l = m);
              }
              return i;
            }
            function dt(t, e, n, i, r) {
              t.l += 2;
              var o = t.read_shift(2),
                s = t.read_shift(2),
                l = (function (t) {
                  var e = 65535 & t.read_shift(2),
                    n = 65535 & t.read_shift(2),
                    i = new Date(),
                    r = 31 & n,
                    o = 15 & (n >>>= 5);
                  (n >>>= 4),
                    i.setMilliseconds(0),
                    i.setFullYear(n + 1980),
                    i.setMonth(o - 1),
                    i.setDate(r);
                  var a = 31 & e,
                    s = 63 & (e >>>= 5);
                  return (
                    (e >>>= 6),
                    i.setHours(e),
                    i.setMinutes(s),
                    i.setSeconds(a << 1),
                    i
                  );
                })(t);
              if (8257 & o) throw new Error("Unsupported ZIP encryption");
              for (
                var c = t.read_shift(4),
                  d = t.read_shift(4),
                  u = t.read_shift(4),
                  p = t.read_shift(2),
                  h = t.read_shift(2),
                  f = "",
                  m = 0;
                m < p;
                ++m
              )
                f += String.fromCharCode(t[t.l++]);
              if (h) {
                var g = a(t.slice(t.l, t.l + h));
                (g[21589] || {}).mt && (l = g[21589].mt),
                  ((r || {})[21589] || {}).mt && (l = r[21589].mt);
              }
              t.l += h;
              var v = t.slice(t.l, t.l + d);
              switch (s) {
                case 8:
                  v = (function (t, e) {
                    if (!b) return st(t, e);
                    var n = new (0, b.InflateRaw)(),
                      i = n._processChunk(t.slice(t.l), n._finishFlushFlag);
                    return (t.l += n.bytesRead), i;
                  })(t, u);
                  break;
                case 0:
                  break;
                default:
                  throw new Error("Unsupported ZIP Compression method " + s);
              }
              var _ = !1;
              8 & o &&
                (134695760 == (c = t.read_shift(4)) &&
                  ((c = t.read_shift(4)), (_ = !0)),
                (d = t.read_shift(4)),
                (u = t.read_shift(4))),
                d != e && lt(_, "Bad compressed size: " + e + " != " + d),
                u != n && lt(_, "Bad uncompressed size: " + n + " != " + u);
              var y = j.buf(v, 0);
              c != y && lt(_, "Bad CRC32 checksum: " + c + " != " + y),
                ut(i, f, v, { unsafe: !0, mt: l });
            }
            function ut(t, e, n, i) {
              var o = i && i.unsafe;
              o || p(t);
              var a = !o && N.find(t, e);
              if (!a) {
                var s = t.FullPaths[0];
                e.slice(0, s.length) == s
                  ? (s = e)
                  : ("/" != s.slice(-1) && (s += "/"),
                    (s = (s + e).replace("//", "/"))),
                  (a = { name: r(e), type: 2 }),
                  t.FileIndex.push(a),
                  t.FullPaths.push(s),
                  o || N.utils.cfb_gc(t);
              }
              return (
                (a.content = n),
                (a.size = n ? n.length : 0),
                i &&
                  (i.CLSID && (a.clsid = i.CLSID),
                  i.mt && (a.mt = i.mt),
                  i.ct && (a.ct = i.ct)),
                a
              );
            }
            return (
              (e.find = function (t, e) {
                var n = t.FullPaths.map(function (t) {
                    return t.toUpperCase();
                  }),
                  i = n.map(function (t) {
                    var e = t.split("/");
                    return e[e.length - ("/" == t.slice(-1) ? 2 : 1)];
                  }),
                  r = !1;
                47 === e.charCodeAt(0)
                  ? ((r = !0), (e = n[0].slice(0, -1) + e))
                  : (r = -1 !== e.indexOf("/"));
                var o = e.toUpperCase(),
                  a = !0 === r ? n.indexOf(o) : i.indexOf(o);
                if (-1 !== a) return t.FileIndex[a];
                var s = !o.match(L);
                for (
                  o = o.replace(D, ""), s && (o = o.replace(L, "!")), a = 0;
                  a < n.length;
                  ++a
                ) {
                  if ((s ? n[a].replace(L, "!") : n[a]).replace(D, "") == o)
                    return t.FileIndex[a];
                  if ((s ? i[a].replace(L, "!") : i[a]).replace(D, "") == o)
                    return t.FileIndex[a];
                }
                return null;
              }),
              (e.read = function (e, n) {
                switch ((n && n.type) || "base64") {
                  case "file":
                    return (function (e, n) {
                      return s(), l(t.readFileSync(e), n);
                    })(e, n);
                  case "base64":
                    return l(z(y.decode(e)), n);
                  case "binary":
                    return l(z(e), n);
                }
                return l(e, n);
              }),
              (e.parse = l),
              (e.write = function (e, n) {
                var i = f(e, n);
                switch (n && n.type) {
                  case "file":
                    return s(), t.writeFileSync(n.filename, i), i;
                  case "binary":
                    return C(i);
                  case "base64":
                    return y.encode(C(i));
                }
                return i;
              }),
              (e.writeFile = function (e, n, i) {
                s();
                var r = f(e, i);
                t.writeFileSync(n, r);
              }),
              (e.utils = {
                cfb_new: function (t) {
                  var e = {};
                  return p(e, t), e;
                },
                cfb_add: ut,
                cfb_del: function (t, e) {
                  p(t);
                  var n = N.find(t, e);
                  if (n)
                    for (var i = 0; i < t.FileIndex.length; ++i)
                      if (t.FileIndex[i] == n)
                        return (
                          t.FileIndex.splice(i, 1), t.FullPaths.splice(i, 1), !0
                        );
                  return !1;
                },
                cfb_mov: function (t, e, n) {
                  p(t);
                  var i = N.find(t, e);
                  if (i)
                    for (var o = 0; o < t.FileIndex.length; ++o)
                      if (t.FileIndex[o] == i)
                        return (
                          (t.FileIndex[o].name = r(n)), (t.FullPaths[o] = n), !0
                        );
                  return !1;
                },
                cfb_gc: function (t) {
                  h(t, !0);
                },
                ReadShift: Te,
                CheckField: qe,
                prep_blob: Ee,
                bconcat: T,
                use_zlib: function (t) {
                  try {
                    var e = new (0, t.InflateRaw)();
                    if (
                      (e._processChunk(
                        new Uint8Array([3, 0]),
                        e._finishFlushFlag
                      ),
                      !e.bytesRead)
                    )
                      throw new Error("zlib does not expose bytesRead");
                    b = t;
                  } catch (t) {}
                },
                _deflateRaw: 